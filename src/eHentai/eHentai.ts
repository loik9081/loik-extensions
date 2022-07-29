import {
    Source,
    Manga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    SourceInfo,
    TagSection,
    TagType,
    Request,
    RequestManager,
    ContentRating,
    Section,
    Response,
    MangaStatus
} from 'paperback-extensions-common';

import {
    getGalleryData,
    getSearchData
} from './eHentaiHelper';

import {
    parseArtist,
    parseLanguage,
    parsePages,
    parseTags,
    parseTitle
} from './eHentaiParser';

import {
    modifySearch,
    resetSettings,
} from './eHentaiSettings';

export const eHentaiInfo: SourceInfo = {
    version: '1.0.1',
    name: 'E-Hentai',
    icon: 'icon.png',
    author: 'loik9081',
    description: 'Extension to grab galleries from E-Hentai',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: 'https://e-hentai.org',
    authorWebsite: 'https://github.com/loik9081',
    sourceTags: [{
        text: '18+',
        type: TagType.RED
    }]
}

export class eHentai extends Source {
    readonly requestManager: RequestManager = createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15',
                        'referer': 'https://e-hentai.org/'
                    }
                }
                return request;
            },
            interceptResponse: async (response: Response): Promise<Response> => { return response; }
        }
    });

    stateManager = createSourceStateManager({});

    override getMangaShareUrl(mangaId: string): string {
        return `https://e-hentai.org/g/${mangaId}`;
    }

    override async getSearchTags(): Promise<TagSection[]> {
        return [createTagSection({ id: 'categories', label: 'Categories', tags: [
            createTag({ id: 'category:2', label: 'Doujinshi' }),
            createTag({ id: 'category:4', label: 'Manga' }),
            createTag({ id: 'category:8', label: 'Artist CG' }),
            createTag({ id: 'category:16', label: 'Game CG' }),
            createTag({ id: 'category:256', label: 'Non-H' }),
            createTag({ id: 'category:32', label: 'Image Set' }),
            createTag({ id: 'category:512', label: 'Western' }),
            createTag({ id: 'category:64', label: 'Cosplay' }),
            createTag({ id: 'category:128', label: 'Asian Porn' }),
            createTag({ id: 'category:1', label: 'Misc' })
        ] })];
    }

    override async supportsTagExclusion(): Promise<boolean> {
        return true;
    }

    override async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        for(const tag of (await this.getSearchTags())[0]!.tags) {
            let section = createHomeSection({
                id: tag.id,
                title: tag.label,
                view_more: true,
            });
            sectionCallback(section);
            getSearchData('', 0, 1023 - parseInt(tag.id.substring(9)), this.requestManager, this.cheerio, this.stateManager).then(manga => {
                section.items = manga;
                sectionCallback(section);
            })
        }
    }

    override async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        const page = metadata?.page ?? 0;
        return createPagedResults({
            results: await getSearchData('', page, 1023 - parseInt(homepageSectionId.substring(9)), this.requestManager, this.cheerio, this.stateManager),
            metadata: {
                page: page + 1
            }
        });
    }

    override async getSourceMenu(): Promise<Section> {
        return createSection({
            id: 'root',
            header: 'Settings',
            rows: async () => {
                return [
                    modifySearch(this.stateManager),
                    resetSettings(this.stateManager)
                ];
            }
        });
    }

    async getMangaDetails(mangaId: string): Promise<Manga> {
        const data = (await getGalleryData([mangaId], this.requestManager))[0];

        return createManga({
            id: mangaId,
            titles: [parseTitle(data.title), parseTitle(data.title_jpn)],
            image: data.thumb,
            rating: data.rating,
            status: MangaStatus.COMPLETED,
            langFlag: parseLanguage(data.tags),
            artist: parseArtist(data.tags),
            tags: parseTags([data.category, ...data.tags]),
            hentai: !(data.category == 'Non-H' || data.tags.includes('other:non-nude')),
            // relatedIds: [], // possibly parent_gid and/or first_gid
            lastUpdate: new Date(parseInt(data.posted) * 1000)
        });
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const data = (await getGalleryData([mangaId], this.requestManager))[0];

        return [createChapter({
            id: data.filecount,
            mangaId: mangaId,
            chapNum: 1,
            langCode: parseLanguage(data.tags),
            name: parseTitle(data.title),
            time: new Date(parseInt(data.posted) * 1000)
        })];
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const pages = await parsePages(mangaId, parseInt(chapterId), this.requestManager, this.cheerio);
        return createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            longStrip: false, // Change to true if other:webtoon?
            pages: pages
        });
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        const page = metadata?.page ?? 0;

        const includedCategories = query.includedTags?.filter(tag => tag.id.startsWith('category:'));
        const excludedCategories = query.excludedTags?.filter(tag => tag.id.startsWith('category:'));
        let categories = 0;
        if(includedCategories != undefined && includedCategories.length != 0) categories = includedCategories.map(tag => parseInt(tag.id.substring(9))).reduce((prev, cur) => prev - cur, 1023);
        else if(excludedCategories != undefined && excludedCategories.length != 0) categories = excludedCategories.map(tag => parseInt(tag.id.substring(9))).reduce((prev, cur) => prev + cur, 0);

        const results = await getSearchData(query.title, page, categories, this.requestManager, this.cheerio, this.stateManager);
        
        return createPagedResults({
            results: results,
            metadata: {
                page: page + 1
            }
        });
    }
}
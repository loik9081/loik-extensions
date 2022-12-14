import {
    Source,
    Manga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    Section,
    SourceInfo,
    TagSection,
    TagType,
    Request,
    RequestManager,
    ContentRating,
    Response,
    MangaStatus,
    LanguageCode
} from 'paperback-extensions-common'

import {
    getCategoryData,
    getGalleryData,
    getPages,
    getSearchData
} from './xsnvshenHelper'

export const xsnvshenInfo: SourceInfo = {
    version: '1.0.1',
    name: 'xsnvshen',
    icon: 'icon.png',
    author: 'loik9081',
    description: 'Extension to grab galleries from xsnvshen',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: 'https://www.xsnvshen.com/',
    authorWebsite: 'https://github.com/loik9081',
    sourceTags: [{
        text: '18+',
        type: TagType.RED
    }]
}

export class xsnvshen extends Source {
    readonly requestManager: RequestManager = createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15',
                        'referer': 'https://www.xsnvshen.com/album/'
                    }
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => { return response }
        }
    })

    stateManager = createSourceStateManager({});

    override getMangaShareUrl(mangaId: string): string {
        return `https://www.xsnvshen.com/album/${mangaId}`
    }

    override async getSearchTags(): Promise<TagSection[]> {
        return [
            createTagSection({
                id: 'note',
                label: 'Note: Selecting a tag ignores search',
                tags: []
            }),
            createTagSection({
                id: 'note',
                label: 'Note: Can only select one tag at a time',
                tags: []
            }),
            createTagSection({
                id: 'clothing', // ??????
                label: 'Clothing',
                tags: [
                    createTag({ id: '167', label: 'Thong' }), // ?????????
                    createTag({ id: '138', label: 'Bikini' }), // ?????????
                    createTag({ id: '183', label: 'Stockings' }), // ??????
                    createTag({ id: '175', label: 'Lingerie' }), // ??????
                    createTag({ id: '189', label: 'Wet' }), // t??????
                    createTag({ id: '140', label: 'Cheongsam' }), // ??????
                    createTag({ id: '146', label: 'Dudou' }), // ??????
                    createTag({ id: '151', label: 'Flight Attendant' }), // ??????
                    createTag({ id: '168', label: 'Nurse' }), // ??????
                    createTag({ id: '173', label: 'Kimono' }), // ??????
                    createTag({ id: '93', label: 'Uniform' }), // ??????
                    createTag({ id: '97', label: 'School Uniform' }), // ??????
                    createTag({ id: '115', label: 'Maid' }), // ??????
                    createTag({ id: '112', label: 'Soccer Babe' }), // ????????????
                    createTag({ id: '186', label: 'Basketball Babe ' }), // ????????????
                    createTag({ id: '184', label: 'Boxing Babe' }), // ????????????
                    createTag({ id: '187', label: 'Cosplay' }) // ????????????
                ]
            }),
            createTagSection({
                id: 'sensation', // ??????
                label: 'Sensation',
                tags: [
                    createTag({ id: '2', label: 'Sexy' }), // ??????
                    createTag({ id: '96', label: 'Alluring' }), // ??????
                    createTag({ id: '104', label: 'Mature' }), // ??????
                    createTag({ id: '107', label: 'Pure' }), // ??????
                    createTag({ id: '123', label: 'Cool' }), // ??????
                    createTag({ id: '141', label: 'Wild' }), // ??????
                    createTag({ id: '114', label: 'Cute' }), // ??????
                    createTag({ id: '128', label: 'Excellent' }), // ??????
                    createTag({ id: '171', label: 'Petite' }), // ??????
                    createTag({ id: '100', label: 'Busty Baby Face' }), // ????????????
                    createTag({ id: '178', label: 'Well Endowed' }) // ?????????
                ]
            }),
            createTagSection({
                id: 'features', // ??????
                label: 'Features',
                tags: [
                    createTag({ id: '88', label: 'Skinny' }), // ??????
                    createTag({ id: '95', label: 'Beautiful Butt' }), // ??????
                    createTag({ id: '185', label: 'Curvy' }), // ??????
                    createTag({ id: '166', label: 'Beautiful Legs' }), // ??????
                    createTag({ id: '137', label: 'Natural' }), // ??????
                    createTag({ id: '130', label: 'Fair Skin' }), // ??????
                    createTag({ id: '149', label: 'Stunning' }), // ??????
                    createTag({ id: '101', label: 'Tan' }), // ?????????
                    createTag({ id: '131', label: 'Big Boobs' }), // ????????????
                    createTag({ id: '143', label: 'Massive Boobs' }) // ????????????
                ]
            }),
            createTagSection({
                id: 'scene', // ??????
                label: 'Scene',
                tags: [
                    createTag({ id: '160', label: 'Street' }), // ??????
                    createTag({ id: '116', label: 'Bathroom' }), // ??????
                    createTag({ id: '126', label: 'Outdoors' }), // ??????
                    createTag({ id: '169', label: 'Beach' }), // ??????
                    createTag({ id: '190', label: 'Pool' }), // ??????
                    createTag({ id: '161', label: 'Home' }), // ??????
                    createTag({ id: '176', label: 'Private Photoshoot' }) // ?????????
                ]
            }),
            createTagSection({
                id: 'region', // ??????
                label: 'Region',
                tags: [
                    createTag({ id: '79', label: 'China' }), // ????????????
                    createTag({ id: '155', label: 'Hong Kong' }), // ??????
                    createTag({ id: '152', label: 'Macau' }), // ??????
                    createTag({ id: '165', label: 'Taiwan' }), // ??????
                    createTag({ id: '108', label: 'Japan' }), // ??????
                    createTag({ id: '180', label: 'Korea' }), // ??????
                    createTag({ id: '90', label: 'Malaysia' }), // ????????????
                    createTag({ id: '156', label: 'Thailand' }), // ??????
                    createTag({ id: '150', label: 'Western' }), // ??????
                    createTag({ id: '191', label: 'Mixed' }) // ??????
                ]
            })/*,
            createTagSection({
                id: 'company', // ??????
                label: 'Company',
                tags: [
                    createTag({ id: '', label: '' }),
                ]
            })*/
        ]
    }

    override async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        const chosenTags = []
        for (const section of await this.getSearchTags()) {
            if (section.id == 'note' || !await this.stateManager.retrieve(section.id)) continue
            for(const tag of await this.stateManager.retrieve(section.id) as string[]) chosenTags.push({
                id: section.tags.find(el => el.label == tag)!.id,
                label: tag
            })
        }

        for (const tag of chosenTags) {
            const section = createHomeSection({
                id: tag.id,
                title: tag.label,
                view_more: true,
            })
            sectionCallback(section)
            getCategoryData(tag.id, 0, this.requestManager, this.cheerio).then(manga => {
                section.items = manga[0]
                sectionCallback(section)
            })
        }
    }

    override async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        const page = metadata?.page ?? 0
        if (metadata?.stopSearch ?? false) return createPagedResults({
            results: [],
            metadata: {
                stopSearch: true
            }
        })

        const results = await getCategoryData(homepageSectionId, page, this.requestManager, this.cheerio)

        return createPagedResults({
            results: results[0],
            metadata: {
                page: page + 1,
                stopSearch: results[1]
            }
        })
    }

    override async getSourceMenu(): Promise<Section> {
        const tagList = await this.getSearchTags()
        return createSection({
            id: 'root',
            header: 'Settings',
            rows: async () => {
                return [
                    createNavigationButton({
                        id: 'homePageCategoriesButton',
                        value: '',
                        label: 'Home Page Categories',
                        form: createForm({
                            onSubmit: async values => {
                                for (const section of tagList) {
                                    if (section.id != 'note') this.stateManager.store(section.id, values[section.id])
                                }
                            },
                            validate: async () => true,
                            sections: async () => {
                                return [createSection({
                                    id: 'categoriesSection',
                                    rows: async () => {
                                        const tagRows = []
                                        for (const section of tagList) {
                                            if (section.id != 'note') tagRows.push(createSelect({
                                                id: section.id,
                                                value: await this.stateManager.retrieve(section.id) as string[] ?? [],
                                                label: section.label,
                                                options: section.tags.map(tag => tag.label),
                                                allowsMultiselect: true,
                                                displayLabel: option => option
                                            }))
                                        }
                                        return tagRows
                                    }
                                })]
                            }
                        })
                    })
                ]
            }
        })
    }

    async getMangaDetails(mangaId: string): Promise<Manga> {
        const data = await getGalleryData(mangaId, this.requestManager, this.cheerio)

        return createManga({
            id: mangaId,
            titles: [data.title],
            image: data.image,
            status: MangaStatus.COMPLETED,
            langFlag: LanguageCode.CHINEESE,
            artist: data.artist,
            tags: (await this.getSearchTags()).map(section => createTagSection({ id: section.id, label: section.label, tags: section.tags.filter(tag => data.tags.includes(tag.id)) })).filter(section => section.tags.length != 0),
            views: data.views,
            hentai: false,
            // relatedIds: [], // possibly parent_gid and/or first_gid
            lastUpdate: data.lastUpdate
        })
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const data = await getGalleryData(mangaId, this.requestManager, this.cheerio)

        return [createChapter({
            id: data.girlId,
            mangaId: mangaId,
            chapNum: 1,
            langCode: LanguageCode.CHINEESE,
            name: data.title,
            time: data.lastUpdate
        })]
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        return createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            longStrip: false,
            pages: await getPages(mangaId, this.requestManager, this.cheerio)
        })
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        const page = metadata?.page ?? 0
        if (metadata?.stopSearch ?? false) return createPagedResults({
            results: [],
            metadata: {
                stopSearch: true
            }
        })

        const results = query.includedTags?.length == 0 ? await getSearchData(query.title, page, this.requestManager, this.cheerio) :
            await getCategoryData(query.includedTags![0]!.id, page, this.requestManager, this.cheerio)

        return createPagedResults({
            results: results[0],
            metadata: {
                page: page + 1,
                stopSearch: results[1]
            }
        })
    }
}
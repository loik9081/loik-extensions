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
    version: '1.0.0',
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
                id: 'clothing', // 着装
                label: 'Clothing',
                tags: [
                    createTag({ id: '167', label: 'Thong' }), // 丁字裤
                    createTag({ id: '138', label: 'Bikini' }), // 比基尼
                    createTag({ id: '183', label: 'Stockings' }), // 黑丝
                    createTag({ id: '175', label: 'Lingerie' }), // 内衣
                    createTag({ id: '189', label: 'Wet' }), // t湿身
                    createTag({ id: '140', label: 'Cheongsam' }), // 旗袍
                    createTag({ id: '146', label: 'Dudou' }), // 肚兜
                    createTag({ id: '151', label: 'Flight Attendant' }), // 空姐
                    createTag({ id: '168', label: 'Nurse' }), // 护士
                    createTag({ id: '173', label: 'Kimono' }), // 和服
                    createTag({ id: '93', label: 'Uniform' }), // 制服
                    createTag({ id: '97', label: 'School Uniform' }), // 校服
                    createTag({ id: '115', label: 'Maid' }), // 女仆
                    createTag({ id: '112', label: 'Soccer Babe' }), // 足球宝贝
                    createTag({ id: '186', label: 'Basketball Babe ' }), // 篮球宝贝
                    createTag({ id: '184', label: 'Boxing Babe' }), // 拳击宝贝
                    createTag({ id: '187', label: 'Cosplay' }) // 角色扮演
                ]
            }),
            createTagSection({
                id: 'sensation', // 风格
                label: 'Sensation',
                tags: [
                    createTag({ id: '2', label: 'Sexy' }), // 性感
                    createTag({ id: '96', label: 'Alluring' }), // 诱惑
                    createTag({ id: '104', label: 'Mature' }), // 气质
                    createTag({ id: '107', label: 'Pure' }), // 清纯
                    createTag({ id: '123', label: 'Cool' }), // 冷艳
                    createTag({ id: '141', label: 'Wild' }), // 野性
                    createTag({ id: '114', label: 'Cute' }), // 萌系
                    createTag({ id: '128', label: 'Excellent' }), // 极品
                    createTag({ id: '171', label: 'Petite' }), // 萝莉
                    createTag({ id: '100', label: 'Busty Baby Face' }), // 童颜巨乳
                    createTag({ id: '178', label: 'Well Endowed' }) // 大尺度
                ]
            }),
            createTagSection({
                id: 'features', // 体征
                label: 'Features',
                tags: [
                    createTag({ id: '88', label: 'Skinny' }), // 骨感
                    createTag({ id: '95', label: 'Beautiful Butt' }), // 美臀
                    createTag({ id: '185', label: 'Curvy' }), // 肉感
                    createTag({ id: '166', label: 'Beautiful Legs' }), // 美腿
                    createTag({ id: '137', label: 'Natural' }), // 清新
                    createTag({ id: '130', label: 'Fair Skin' }), // 白嫩
                    createTag({ id: '149', label: 'Stunning' }), // 尤物
                    createTag({ id: '101', label: 'Tan' }), // 小麦色
                    createTag({ id: '131', label: 'Big Boobs' }), // 波涛胸涌
                    createTag({ id: '143', label: 'Massive Boobs' }) // 人间胸器
                ]
            }),
            createTagSection({
                id: 'scene', // 场景
                label: 'Scene',
                tags: [
                    createTag({ id: '160', label: 'Street' }), // 街拍
                    createTag({ id: '116', label: 'Bathroom' }), // 浴室
                    createTag({ id: '126', label: 'Outdoors' }), // 户外
                    createTag({ id: '169', label: 'Beach' }), // 沙滩
                    createTag({ id: '190', label: 'Pool' }), // 泳池
                    createTag({ id: '161', label: 'Home' }), // 家居
                    createTag({ id: '176', label: 'Private Photoshoot' }) // 私房照
                ]
            }),
            createTagSection({
                id: 'region', // 地域
                label: 'Region',
                tags: [
                    createTag({ id: '79', label: 'China' }), // 中国内地
                    createTag({ id: '155', label: 'Hong Kong' }), // 香港
                    createTag({ id: '152', label: 'Macau' }), // 澳门
                    createTag({ id: '165', label: 'Taiwan' }), // 台湾
                    createTag({ id: '108', label: 'Japan' }), // 日本
                    createTag({ id: '180', label: 'Korea' }), // 韩国
                    createTag({ id: '90', label: 'Malaysia' }), // 马来西亚
                    createTag({ id: '156', label: 'Thailand' }), // 泰国
                    createTag({ id: '150', label: 'Western' }), // 欧美
                    createTag({ id: '191', label: 'Mixed' }) // 混血
                ]
            })/*,
            createTagSection({
                id: 'company', // 机构
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
            if (section.id == 'note') continue
            for(const tag of await this.stateManager.retrieve(section.id) as string[]) {
                chosenTags.push({
                    id: section.tags.find(el => el.label == tag)!.id,
                    label: tag
                })
            }
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
                                                value: await this.stateManager.retrieve(section.id) as string[],
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
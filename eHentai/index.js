(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eHentai = exports.eHentaiInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const eHentaiHelper_1 = require("./eHentaiHelper");
const eHentaiParser_1 = require("./eHentaiParser");
const eHentaiSettings_1 = require("./eHentaiSettings");
exports.eHentaiInfo = {
    version: '1.0.1',
    name: 'E-Hentai',
    icon: 'icon.png',
    author: 'loik9081',
    description: 'Extension to grab galleries from E-Hentai',
    contentRating: paperback_extensions_common_1.ContentRating.ADULT,
    websiteBaseURL: 'https://e-hentai.org',
    authorWebsite: 'https://github.com/loik9081',
    sourceTags: [{
            text: '18+',
            type: paperback_extensions_common_1.TagType.RED
        }]
};
class eHentai extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.requestManager = createRequestManager({
            requestsPerSecond: 3,
            requestTimeout: 15000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15',
                            'referer': 'https://e-hentai.org/'
                        }
                    };
                    return request;
                },
                interceptResponse: async (response) => { return response; }
            }
        });
        this.stateManager = createSourceStateManager({});
    }
    getMangaShareUrl(mangaId) {
        return `https://e-hentai.org/g/${mangaId}`;
    }
    async getSearchTags() {
        return [createTagSection({
                id: 'categories', label: 'Categories', tags: [
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
                ]
            })];
    }
    async supportsTagExclusion() {
        return true;
    }
    async getHomePageSections(sectionCallback) {
        for (const tag of (await this.getSearchTags())[0]?.tags ?? []) {
            const section = createHomeSection({
                id: tag.id,
                title: tag.label,
                view_more: true,
            });
            sectionCallback(section);
            (0, eHentaiHelper_1.getSearchData)('', 0, 1023 - parseInt(tag.id.substring(9)), this.requestManager, this.cheerio, this.stateManager).then(manga => {
                section.items = manga;
                sectionCallback(section);
            });
        }
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 0;
        let stopSearch = metadata?.stopSearch ?? false;
        if (stopSearch)
            return createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        const results = await (0, eHentaiHelper_1.getSearchData)('', page, 1023 - parseInt(homepageSectionId.substring(9)), this.requestManager, this.cheerio, this.stateManager);
        if (results[results.length - 1]?.id == 'stopSearch') {
            results.pop();
            stopSearch = true;
        }
        return createPagedResults({
            results: results,
            metadata: {
                page: page + 1
            }
        });
    }
    async getSourceMenu() {
        return createSection({
            id: 'root',
            header: 'Settings',
            rows: async () => {
                return [
                    (0, eHentaiSettings_1.modifySearch)(this.stateManager),
                    (0, eHentaiSettings_1.resetSettings)(this.stateManager)
                ];
            }
        });
    }
    async getMangaDetails(mangaId) {
        const data = (await (0, eHentaiHelper_1.getGalleryData)([mangaId], this.requestManager))[0];
        return createManga({
            id: mangaId,
            titles: [(0, eHentaiParser_1.parseTitle)(data.title), (0, eHentaiParser_1.parseTitle)(data.title_jpn)],
            image: data.thumb,
            rating: data.rating,
            status: paperback_extensions_common_1.MangaStatus.COMPLETED,
            langFlag: (0, eHentaiParser_1.parseLanguage)(data.tags),
            artist: (0, eHentaiParser_1.parseArtist)(data.tags),
            tags: (0, eHentaiParser_1.parseTags)([data.category, ...data.tags]),
            hentai: !(data.category == 'Non-H' || data.tags.includes('other:non-nude')),
            // relatedIds: [], // possibly parent_gid and/or first_gid
            lastUpdate: new Date(parseInt(data.posted) * 1000)
        });
    }
    async getChapters(mangaId) {
        const data = (await (0, eHentaiHelper_1.getGalleryData)([mangaId], this.requestManager))[0];
        return [createChapter({
                id: data.filecount,
                mangaId: mangaId,
                chapNum: 1,
                langCode: (0, eHentaiParser_1.parseLanguage)(data.tags),
                name: (0, eHentaiParser_1.parseTitle)(data.title),
                time: new Date(parseInt(data.posted) * 1000)
            })];
    }
    async getChapterDetails(mangaId, chapterId) {
        const pages = await (0, eHentaiParser_1.parsePages)(mangaId, parseInt(chapterId), this.requestManager, this.cheerio);
        return createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            longStrip: false,
            pages: pages
        });
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 0;
        let stopSearch = metadata?.stopSearch ?? false;
        if (stopSearch)
            return createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        const includedCategories = query.includedTags?.filter(tag => tag.id.startsWith('category:'));
        const excludedCategories = query.excludedTags?.filter(tag => tag.id.startsWith('category:'));
        let categories = 0;
        if (includedCategories != undefined && includedCategories.length != 0)
            categories = includedCategories.map(tag => parseInt(tag.id.substring(9))).reduce((prev, cur) => prev - cur, 1023);
        else if (excludedCategories != undefined && excludedCategories.length != 0)
            categories = excludedCategories.map(tag => parseInt(tag.id.substring(9))).reduce((prev, cur) => prev + cur, 0);
        const results = await (0, eHentaiHelper_1.getSearchData)(query.title, page, categories, this.requestManager, this.cheerio, this.stateManager);
        if (results[results.length - 1]?.id == 'stopSearch') {
            results.pop();
            stopSearch = true;
        }
        return createPagedResults({
            results: results,
            metadata: {
                page: page + 1,
                stopSearch: stopSearch
            }
        });
    }
}
exports.eHentai = eHentai;

},{"./eHentaiHelper":49,"./eHentaiParser":50,"./eHentaiSettings":51,"paperback-extensions-common":4}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchData = exports.getGalleryData = void 0;
const eHentaiParser_1 = require("./eHentaiParser");
async function getGalleryData(ids, requestManager) {
    const request = createRequestObject({
        url: 'https://api.e-hentai.org/api.php',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: {
            'method': 'gdata',
            'gidlist': ids.map(id => id.split('/')),
            'namespace': 1
        }
    });
    const data = await requestManager.schedule(request, 1);
    const json = (typeof data.data == 'string') ? JSON.parse(data.data.replaceAll(/[\r\n]+/g, ' ')) : data.data;
    return json.gmetadata;
}
exports.getGalleryData = getGalleryData;
async function getSearchData(query, page, categories, requestManager, cheerio, stateManager) {
    if (query != undefined && query.length != 0 && query.split(' ').filter(q => !q.startsWith('-')).length != 0 && await stateManager.retrieve('extraSearchArgs'))
        query += ` ${await stateManager.retrieve('extraSearchArgs')}`;
    const request = createRequestObject({
        url: `https://e-hentai.org/?page=${page}&f_cats=${categories}&f_search=${encodeURIComponent(query ?? '')}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const searchResults = $('td.glname').toArray();
    const mangaIds = [];
    for (const manga of searchResults) {
        const splitURL = ($('a', manga).attr('href') ?? '/////').split('/');
        mangaIds.push(`${splitURL[4]}/${splitURL[5]}`);
    }
    const json = mangaIds.length != 0 ? await getGalleryData(mangaIds, requestManager) : [];
    const results = [];
    for (const entry of json) {
        results.push(createMangaTile({
            id: `${entry.gid}/${entry.token}`,
            title: createIconText({ text: (0, eHentaiParser_1.parseTitle)(entry.title) }),
            image: entry.thumb
        }));
    }
    if ($('div.ptt').last().hasClass('ptdd'))
        results.push(createMangaTile({
            id: 'stopSearch',
            title: createIconText({ text: '' }),
            image: ''
        }));
    return results;
}
exports.getSearchData = getSearchData;

},{"./eHentaiParser":50}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTitle = exports.parseTags = exports.parsePages = exports.parseLanguage = exports.parseArtist = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const parseArtist = (tags) => {
    const artist = tags.filter(tag => tag.startsWith('artist:')).map(tag => tag.substring(7));
    const cosplayer = tags.filter(tag => tag.startsWith('cosplayer:')).map(tag => tag.substring(10));
    if (artist.length != 0)
        return artist[0];
    else if (cosplayer.length != 0)
        return cosplayer[0];
    else
        return undefined;
};
exports.parseArtist = parseArtist;
const parseLanguage = (tags) => {
    const languageTags = tags.filter(tag => tag.startsWith('language:') && tag != 'language:translated').map(tag => tag.substring(9));
    if (languageTags.length == 0)
        return paperback_extensions_common_1.LanguageCode.JAPANESE;
    switch (languageTags[0]) {
        case 'bengali':
            return paperback_extensions_common_1.LanguageCode.BENGALI;
            break;
        case 'bulgarian':
            return paperback_extensions_common_1.LanguageCode.BULGARIAN;
            break;
        case 'chinese':
            return paperback_extensions_common_1.LanguageCode.CHINEESE;
            break;
        case 'czech':
            return paperback_extensions_common_1.LanguageCode.CZECH;
            break;
        case 'danish':
            return paperback_extensions_common_1.LanguageCode.DANISH;
            break;
        case 'dutch':
            return paperback_extensions_common_1.LanguageCode.DUTCH;
            break;
        case 'english':
            return paperback_extensions_common_1.LanguageCode.ENGLISH;
            break;
        case 'finnish':
            return paperback_extensions_common_1.LanguageCode.FINNISH;
            break;
        case 'french':
            return paperback_extensions_common_1.LanguageCode.FRENCH;
            break;
        case 'german':
            return paperback_extensions_common_1.LanguageCode.GERMAN;
            break;
        case 'greek':
            return paperback_extensions_common_1.LanguageCode.GREEK;
            break;
        case 'hungarian':
            return paperback_extensions_common_1.LanguageCode.HUNGARIAN;
            break;
        case 'gujarati':
        case 'nepali':
        case 'punjabi':
        case 'tamil':
        case 'telugu':
        case 'urdu':
            return paperback_extensions_common_1.LanguageCode.INDIAN;
            break;
        case 'indonesian':
            return paperback_extensions_common_1.LanguageCode.INDONESIAN;
            break;
        case 'persian':
            return paperback_extensions_common_1.LanguageCode.IRAN;
            break;
        case 'italian':
            return paperback_extensions_common_1.LanguageCode.ITALIAN;
            break;
        case 'korean':
            return paperback_extensions_common_1.LanguageCode.KOREAN;
            break;
        case 'mongolian':
            return paperback_extensions_common_1.LanguageCode.MONGOLIAN;
            break;
        case 'norwegian':
            return paperback_extensions_common_1.LanguageCode.NORWEGIAN;
            break;
        case 'cebuano':
        case 'tagalog':
            return paperback_extensions_common_1.LanguageCode.PHILIPPINE;
            break;
        case 'polish':
            return paperback_extensions_common_1.LanguageCode.POLISH;
            break;
        case 'portuguese':
            return paperback_extensions_common_1.LanguageCode.PORTUGUESE;
            break;
        case 'romanian':
            return paperback_extensions_common_1.LanguageCode.ROMANIAN;
            break;
        case 'russian':
            return paperback_extensions_common_1.LanguageCode.RUSSIAN;
            break;
        case 'sanskrit':
            return paperback_extensions_common_1.LanguageCode.SANSKRIT;
            break;
        case 'spanish':
            return paperback_extensions_common_1.LanguageCode.SPANISH;
            break;
        case 'thai':
            return paperback_extensions_common_1.LanguageCode.THAI;
            break;
        case 'turkish':
            return paperback_extensions_common_1.LanguageCode.TURKISH;
            break;
        case 'ukrainian':
            return paperback_extensions_common_1.LanguageCode.UKRAINIAN;
            break;
        case 'vietnamese':
            return paperback_extensions_common_1.LanguageCode.VIETNAMESE;
            break;
        case 'welsh':
            return paperback_extensions_common_1.LanguageCode.WELSH;
            break;
    }
    return paperback_extensions_common_1.LanguageCode.UNKNOWN;
};
exports.parseLanguage = parseLanguage;
async function getImage(url, requestManager, cheerio) {
    const request = createRequestObject({
        url: url,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    return $('#img').attr('src') ?? '';
}
async function parsePage(id, page, requestManager, cheerio) {
    const request = createRequestObject({
        url: `https://e-hentai.org/g/${id}/?p=${page}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const pageArr = [];
    const pageDivArr = $('div.gdtm').toArray();
    for (const page of pageDivArr) {
        pageArr.push(getImage($('a', page).attr('href') ?? '', requestManager, cheerio));
    }
    return Promise.all(pageArr);
}
async function parsePages(id, pageCount, requestManager, cheerio) {
    const pageArr = [];
    for (let i = 0; i <= pageCount / 40; i++) {
        pageArr.push(parsePage(id, i, requestManager, cheerio));
    }
    return Promise.all(pageArr).then(pages => pages.reduce((prev, cur) => [...prev, ...cur], []));
}
exports.parsePages = parsePages;
const namespaceHasTags = (namespace, tags) => { return tags.filter(tag => tag.startsWith(`${namespace}:`)).length != 0; };
const createTagSectionForNamespace = (namespace, tags) => { return createTagSection({ id: namespace, label: namespace, tags: tags.filter(tag => tag.startsWith(`${namespace}:`)).map(tag => createTag({ id: tag, label: tag.substring(namespace.length + 1) })) }); };
const parseTags = (tags) => {
    const tagSectionArr = [];
    switch (tags.shift()) {
        case 'Doujinshi':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:2', label: 'Doujinshi' })] }));
            break;
        case 'Manga':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:4', label: 'Manga' })] }));
            break;
        case 'Artist CG':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:8', label: 'Artist CG' })] }));
            break;
        case 'Game CG':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:16', label: 'Game CG' })] }));
            break;
        case 'Non-H':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:256', label: 'Non-H' })] }));
            break;
        case 'Image Set':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:32', label: 'Image Set' })] }));
            break;
        case 'Western':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:512', label: 'Western' })] }));
            break;
        case 'Cosplay':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:64', label: 'Cosplay' })] }));
            break;
        case 'Asian Porn':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:128', label: 'Asian Porn' })] }));
            break;
        case 'Misc':
            tagSectionArr.push(createTagSection({ id: 'categories', label: 'categories', tags: [createTag({ id: 'category:1', label: 'Misc' })] }));
            break;
    }
    if (namespaceHasTags('character', tags))
        tagSectionArr.push(createTagSectionForNamespace('character', tags));
    if (namespaceHasTags('female', tags))
        tagSectionArr.push(createTagSectionForNamespace('female', tags));
    if (namespaceHasTags('male', tags))
        tagSectionArr.push(createTagSectionForNamespace('male', tags));
    if (namespaceHasTags('mixed', tags))
        tagSectionArr.push(createTagSectionForNamespace('mixed', tags));
    if (namespaceHasTags('other', tags))
        tagSectionArr.push(createTagSectionForNamespace('other', tags));
    if (namespaceHasTags('parody', tags))
        tagSectionArr.push(createTagSectionForNamespace('parody', tags));
    return tagSectionArr;
};
exports.parseTags = parseTags;
const parseTitle = (title) => {
    return title.replaceAll(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
};
exports.parseTitle = parseTitle;

},{"paperback-extensions-common":4}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetSettings = exports.modifySearch = void 0;
const modifySearch = (stateManager) => {
    return createNavigationButton({
        id: 'modifySearch',
        value: '',
        label: 'Modify Search',
        form: createForm({
            onSubmit: async (values) => {
                stateManager.store('extraSearchArgs', values.extraSearchArgs.replace(/[“”‘’]/g, '"'));
            },
            validate: async () => true,
            sections: async () => {
                return [createSection({
                        id: 'modifySearchSection',
                        footer: 'Note: searches with only exclusions do not work, including on the home page',
                        rows: async () => {
                            return [createInputField({
                                    id: 'extraSearchArgs',
                                    value: await stateManager.retrieve('extraSearchArgs') ?? '',
                                    placeholder: '-guro -"males only"',
                                    label: 'Extra Args:',
                                    maskInput: false
                                })];
                        }
                    })];
            }
        })
    });
};
exports.modifySearch = modifySearch;
const resetSettings = (stateManager) => {
    return createButton({
        id: 'resetSettings',
        label: 'Reset to Default',
        value: '',
        onTap: async () => {
            stateManager.store('extraSearchArgs', null);
        }
    });
};
exports.resetSettings = resetSettings;

},{}]},{},[48])(48)
});

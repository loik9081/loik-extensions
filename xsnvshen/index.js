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
exports.xsnvshen = exports.xsnvshenInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const xsnvshenHelper_1 = require("./xsnvshenHelper");
exports.xsnvshenInfo = {
    version: '1.0.1',
    name: 'xsnvshen',
    icon: 'icon.png',
    author: 'loik9081',
    description: 'Extension to grab galleries from xsnvshen',
    contentRating: paperback_extensions_common_1.ContentRating.MATURE,
    websiteBaseURL: 'https://www.xsnvshen.com/',
    authorWebsite: 'https://github.com/loik9081',
    sourceTags: [{
            text: '18+',
            type: paperback_extensions_common_1.TagType.RED
        }]
};
class xsnvshen extends paperback_extensions_common_1.Source {
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
                            'referer': 'https://www.xsnvshen.com/album/'
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
        return `https://www.xsnvshen.com/album/${mangaId}`;
    }
    async getSearchTags() {
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
                id: 'clothing',
                label: 'Clothing',
                tags: [
                    createTag({ id: '167', label: 'Thong' }),
                    createTag({ id: '138', label: 'Bikini' }),
                    createTag({ id: '183', label: 'Stockings' }),
                    createTag({ id: '175', label: 'Lingerie' }),
                    createTag({ id: '189', label: 'Wet' }),
                    createTag({ id: '140', label: 'Cheongsam' }),
                    createTag({ id: '146', label: 'Dudou' }),
                    createTag({ id: '151', label: 'Flight Attendant' }),
                    createTag({ id: '168', label: 'Nurse' }),
                    createTag({ id: '173', label: 'Kimono' }),
                    createTag({ id: '93', label: 'Uniform' }),
                    createTag({ id: '97', label: 'School Uniform' }),
                    createTag({ id: '115', label: 'Maid' }),
                    createTag({ id: '112', label: 'Soccer Babe' }),
                    createTag({ id: '186', label: 'Basketball Babe ' }),
                    createTag({ id: '184', label: 'Boxing Babe' }),
                    createTag({ id: '187', label: 'Cosplay' }) // 角色扮演
                ]
            }),
            createTagSection({
                id: 'sensation',
                label: 'Sensation',
                tags: [
                    createTag({ id: '2', label: 'Sexy' }),
                    createTag({ id: '96', label: 'Alluring' }),
                    createTag({ id: '104', label: 'Mature' }),
                    createTag({ id: '107', label: 'Pure' }),
                    createTag({ id: '123', label: 'Cool' }),
                    createTag({ id: '141', label: 'Wild' }),
                    createTag({ id: '114', label: 'Cute' }),
                    createTag({ id: '128', label: 'Excellent' }),
                    createTag({ id: '171', label: 'Petite' }),
                    createTag({ id: '100', label: 'Busty Baby Face' }),
                    createTag({ id: '178', label: 'Well Endowed' }) // 大尺度
                ]
            }),
            createTagSection({
                id: 'features',
                label: 'Features',
                tags: [
                    createTag({ id: '88', label: 'Skinny' }),
                    createTag({ id: '95', label: 'Beautiful Butt' }),
                    createTag({ id: '185', label: 'Curvy' }),
                    createTag({ id: '166', label: 'Beautiful Legs' }),
                    createTag({ id: '137', label: 'Natural' }),
                    createTag({ id: '130', label: 'Fair Skin' }),
                    createTag({ id: '149', label: 'Stunning' }),
                    createTag({ id: '101', label: 'Tan' }),
                    createTag({ id: '131', label: 'Big Boobs' }),
                    createTag({ id: '143', label: 'Massive Boobs' }) // 人间胸器
                ]
            }),
            createTagSection({
                id: 'scene',
                label: 'Scene',
                tags: [
                    createTag({ id: '160', label: 'Street' }),
                    createTag({ id: '116', label: 'Bathroom' }),
                    createTag({ id: '126', label: 'Outdoors' }),
                    createTag({ id: '169', label: 'Beach' }),
                    createTag({ id: '190', label: 'Pool' }),
                    createTag({ id: '161', label: 'Home' }),
                    createTag({ id: '176', label: 'Private Photoshoot' }) // 私房照
                ]
            }),
            createTagSection({
                id: 'region',
                label: 'Region',
                tags: [
                    createTag({ id: '79', label: 'China' }),
                    createTag({ id: '155', label: 'Hong Kong' }),
                    createTag({ id: '152', label: 'Macau' }),
                    createTag({ id: '165', label: 'Taiwan' }),
                    createTag({ id: '108', label: 'Japan' }),
                    createTag({ id: '180', label: 'Korea' }),
                    createTag({ id: '90', label: 'Malaysia' }),
                    createTag({ id: '156', label: 'Thailand' }),
                    createTag({ id: '150', label: 'Western' }),
                    createTag({ id: '191', label: 'Mixed' }) // 混血
                ]
            }) /*,
            createTagSection({
                id: 'company', // 机构
                label: 'Company',
                tags: [
                    createTag({ id: '', label: '' }),
                ]
            })*/
        ];
    }
    async getHomePageSections(sectionCallback) {
        const chosenTags = [];
        for (const section of await this.getSearchTags()) {
            if (section.id == 'note' || !await this.stateManager.retrieve(section.id))
                continue;
            for (const tag of await this.stateManager.retrieve(section.id))
                chosenTags.push({
                    id: section.tags.find(el => el.label == tag).id,
                    label: tag
                });
        }
        for (const tag of chosenTags) {
            const section = createHomeSection({
                id: tag.id,
                title: tag.label,
                view_more: true,
            });
            sectionCallback(section);
            (0, xsnvshenHelper_1.getCategoryData)(tag.id, 0, this.requestManager, this.cheerio).then(manga => {
                section.items = manga[0];
                sectionCallback(section);
            });
        }
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 0;
        if (metadata?.stopSearch ?? false)
            return createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        const results = await (0, xsnvshenHelper_1.getCategoryData)(homepageSectionId, page, this.requestManager, this.cheerio);
        return createPagedResults({
            results: results[0],
            metadata: {
                page: page + 1,
                stopSearch: results[1]
            }
        });
    }
    async getSourceMenu() {
        const tagList = await this.getSearchTags();
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
                            onSubmit: async (values) => {
                                for (const section of tagList) {
                                    if (section.id != 'note')
                                        this.stateManager.store(section.id, values[section.id]);
                                }
                            },
                            validate: async () => true,
                            sections: async () => {
                                return [createSection({
                                        id: 'categoriesSection',
                                        rows: async () => {
                                            const tagRows = [];
                                            for (const section of tagList) {
                                                if (section.id != 'note')
                                                    tagRows.push(createSelect({
                                                        id: section.id,
                                                        value: await this.stateManager.retrieve(section.id) ?? [],
                                                        label: section.label,
                                                        options: section.tags.map(tag => tag.label),
                                                        allowsMultiselect: true,
                                                        displayLabel: option => option
                                                    }));
                                            }
                                            return tagRows;
                                        }
                                    })];
                            }
                        })
                    })
                ];
            }
        });
    }
    async getMangaDetails(mangaId) {
        const data = await (0, xsnvshenHelper_1.getGalleryData)(mangaId, this.requestManager, this.cheerio);
        return createManga({
            id: mangaId,
            titles: [data.title],
            image: data.image,
            status: paperback_extensions_common_1.MangaStatus.COMPLETED,
            langFlag: paperback_extensions_common_1.LanguageCode.CHINEESE,
            artist: data.artist,
            tags: (await this.getSearchTags()).map(section => createTagSection({ id: section.id, label: section.label, tags: section.tags.filter(tag => data.tags.includes(tag.id)) })).filter(section => section.tags.length != 0),
            views: data.views,
            hentai: false,
            // relatedIds: [], // possibly parent_gid and/or first_gid
            lastUpdate: data.lastUpdate
        });
    }
    async getChapters(mangaId) {
        const data = await (0, xsnvshenHelper_1.getGalleryData)(mangaId, this.requestManager, this.cheerio);
        return [createChapter({
                id: data.girlId,
                mangaId: mangaId,
                chapNum: 1,
                langCode: paperback_extensions_common_1.LanguageCode.CHINEESE,
                name: data.title,
                time: data.lastUpdate
            })];
    }
    async getChapterDetails(mangaId, chapterId) {
        return createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            longStrip: false,
            pages: await (0, xsnvshenHelper_1.getPages)(mangaId, this.requestManager, this.cheerio)
        });
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 0;
        if (metadata?.stopSearch ?? false)
            return createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        const results = query.includedTags?.length == 0 ? await (0, xsnvshenHelper_1.getSearchData)(query.title, page, this.requestManager, this.cheerio) :
            await (0, xsnvshenHelper_1.getCategoryData)(query.includedTags[0].id, page, this.requestManager, this.cheerio);
        return createPagedResults({
            results: results[0],
            metadata: {
                page: page + 1,
                stopSearch: results[1]
            }
        });
    }
}
exports.xsnvshen = xsnvshen;

},{"./xsnvshenHelper":49,"paperback-extensions-common":4}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchData = exports.getPages = exports.getGalleryData = exports.getCategoryData = void 0;
async function getCategoryData(categoryId, page, requestManager, cheerio) {
    const request = createRequestObject({
        url: `https://www.xsnvshen.com/album/t${categoryId}/?p=${page + 1}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const results = [];
    const searchResults = $('li', 'ul.layout').toArray();
    for (const manga of searchResults)
        results.push(createMangaTile({
            id: $('a', manga).attr('href').substring(7),
            title: createIconText({ text: $('div.camLiTitleC>p>a', manga).text() }),
            image: `https:${$('img', manga).attr('src')}`,
        }));
    return [results, !$('a', 'div#pageNum').last().hasClass('a1')];
}
exports.getCategoryData = getCategoryData;
async function getGalleryData(id, requestManager, cheerio) {
    const request = createRequestObject({
        url: `https://www.xsnvshen.com/album/${id}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const girlId = $('img#bigImg').attr('src')?.split('/')[4];
    return {
        title: $('div.swp-tit>h1>a').text(),
        image: `https://img.xsnvshen.com/thumb_205x308/album/${girlId}/${id}/cover.jpg`,
        artist: $('a', 'span.f20')?.text(),
        tags: $('a[href^="/album"]', 'div.poster-nav>p').toArray().map(tag => $(tag).attr('href').slice(8, -1)),
        views: parseInt($('span#hits').text()),
        // relatedIds: [] // Include all suggested galleries
        lastUpdate: new Date($('em#time').text().substring(3, 13)),
        girlId: girlId
    };
}
exports.getGalleryData = getGalleryData;
async function getPages(id, requestManager, cheerio) {
    const request = createRequestObject({
        url: `https://www.xsnvshen.com/album/${id}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const pages = [];
    const pageCount = parseInt($('span', 'em#time').text().slice(2, -2));
    const girlId = $('img#bigImg').attr('src')?.split('/')[4];
    for (let i = 0; i < pageCount; i++)
        pages.push(`https://img.xsnvshen.com/album/${girlId}/${id}/${i >= 100 ? i : i >= 10 ? `0${i}` : `00${i}`}.jpg`);
    return pages;
}
exports.getPages = getPages;
async function getSearchData(query, page, requestManager, cheerio) {
    const request = createRequestObject({
        url: `https://www.xsnvshen.com/search?w=${encodeURIComponent(query ?? '')}`,
        method: 'GET'
    });
    const data = await requestManager.schedule(request, 1);
    const $ = cheerio.load(data.data);
    const results = [];
    const searchResults = $('li', 'ul#newspiclist').toArray();
    for (const manga of searchResults)
        results.push(createMangaTile({
            id: $('a', manga).attr('href').substring(7),
            title: createIconText({ text: $('div.titlebox>a', manga).text() }),
            image: `https:${$('img', manga).attr('src')}`,
        }));
    return [results, true];
}
exports.getSearchData = getSearchData;

},{}]},{},[48])(48)
});

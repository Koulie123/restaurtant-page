/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/SedanSC-Regular.ttf */ "./src/Fonts/SedanSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --indego-50: #eef2ff;
    --indego-100: #e0e7ff;
    --indego-700: #4338ca;
    --slate-900: #0f172a;
    --slate-800: #1e293b;


}
@font-face {
    font-family: 'Sedan-SC';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 900;
    font-style: italic;
}
html, body {
    height: 100%;
    margin: 0;
}

.header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 40px 40px;
    background-color: var(--slate-900);
    color: white;
    padding-top: 8px;
    padding-bottom: 0px;
    box-sizing: border-box;
    margin-bottom: 0px;;
    height: 55px;
    gap: 4px;
    justify-content: center;
    align-items: center;

}
@media (max-width: 680px) {
    .header {
        grid-template-columns: repeat(4, 1fr);
    }
    .content {
        grid-template-columns: 1fr;
        box-sizing: border-box;
        padding-right: .3rem;
    }
}
.header nav button {
    border-radius: 10px 10px 0% 0%;
    background-color: var(--indego-700);
    color: white;
    font-weight: 700;
}

nav button {
    width: 90%;
    height: 90%;
    padding: .5rem;
    border: 0;
    border-radius: 0;
    margin-top: 17px;
}
.restaurant-logo {
    font-family: 'sedan-SC';
    font-size: 2rem;
    width: 12rem;
    padding-left: 0.2rem;
}
.content {
    display: grid;
    grid-template-columns: 1fr clamp(400px, 34rem, 90%) 1fr;
    background-color: var(--slate-800);
    min-height: 1000px;
}


.center-section {
    grid-column: 2/3;
    background-color: var(--indego-50);
    display: grid;
    grid-template-columns: 1fr 90% 1fr;
    /* grid-template-rows: repeat(auto, clamp(100px, 200px, 250px)); */
    grid-template-rows: repeat(auto-fit, auto);
    gap: 15px;

    padding-top: 1rem;
}
.center-section > * {
    grid-column: 2/3;
}
.content-header {
    display: flex;
    justify-content: center;
    text-align: center;
}
.restaurant-title {
    display: flex;
    justify-content: center;
    background-color: #c4b5fd;
    padding: 8px;
    margin-top: 10px;
    border-radius: 8px;
}
.main-image {
    width: 100%;
    aspect-ratio: 1;
}
.restaurant-main-pic {
    height: 460px;
}

.menu-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 600;

}
.menu-item {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: clamp(2rem, 2.2rem, 3rem) clamp(3rem, 4rem, 4.5rem);
    padding: 0;
    margin: 0;
}
.menu-item-name {
    font-weight: 700;
    font-size: 1.1rem;
    grid-column: 1/2;
    grid-row: 1/2;
}
.menu-item-price {
    font-weight: 700;
    font-size: .9rem;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: right;
}
.menu-item-description {
    font-size: 0.9rem;
    grid-row: 2/3;
    grid-column: 1/3;
    border-bottom: 2px dotted black;

}


.footer {
    display: flex;
    background-color: var(--slate-900);
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;;;AAGxB;AACA;IACI,uBAAuB;IACvB,+DAA0D;IAC1D,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,6BAA6B;IAC7B,kCAAkC;IAClC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,0BAA0B;QAC1B,sBAAsB;QACtB,oBAAoB;IACxB;AACJ;AACA;IACI,8BAA8B;IAC9B,mCAAmC;IACnC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,cAAc;IACd,SAAS;IACT,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,uDAAuD;IACvD,kCAAkC;IAClC,kBAAkB;AACtB;;;AAGA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,aAAa;IACb,kCAAkC;IAClC,kEAAkE;IAClE,0CAA0C;IAC1C,SAAS;;IAET,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uEAAuE;IACvE,UAAU;IACV,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,+BAA+B;;AAEnC;;;AAGA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;AAC3B","sourcesContent":[":root {\n    --indego-50: #eef2ff;\n    --indego-100: #e0e7ff;\n    --indego-700: #4338ca;\n    --slate-900: #0f172a;\n    --slate-800: #1e293b;\n\n\n}\n@font-face {\n    font-family: 'Sedan-SC';\n    src: url('./Fonts/SedanSC-Regular.ttf') format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 40px 40px;\n    background-color: var(--slate-900);\n    color: white;\n    padding-top: 8px;\n    padding-bottom: 0px;\n    box-sizing: border-box;\n    margin-bottom: 0px;;\n    height: 55px;\n    gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n}\n@media (max-width: 680px) {\n    .header {\n        grid-template-columns: repeat(4, 1fr);\n    }\n    .content {\n        grid-template-columns: 1fr;\n        box-sizing: border-box;\n        padding-right: .3rem;\n    }\n}\n.header nav button {\n    border-radius: 10px 10px 0% 0%;\n    background-color: var(--indego-700);\n    color: white;\n    font-weight: 700;\n}\n\nnav button {\n    width: 90%;\n    height: 90%;\n    padding: .5rem;\n    border: 0;\n    border-radius: 0;\n    margin-top: 17px;\n}\n.restaurant-logo {\n    font-family: 'sedan-SC';\n    font-size: 2rem;\n    width: 12rem;\n    padding-left: 0.2rem;\n}\n.content {\n    display: grid;\n    grid-template-columns: 1fr clamp(400px, 34rem, 90%) 1fr;\n    background-color: var(--slate-800);\n    min-height: 1000px;\n}\n\n\n.center-section {\n    grid-column: 2/3;\n    background-color: var(--indego-50);\n    display: grid;\n    grid-template-columns: 1fr 90% 1fr;\n    /* grid-template-rows: repeat(auto, clamp(100px, 200px, 250px)); */\n    grid-template-rows: repeat(auto-fit, auto);\n    gap: 15px;\n\n    padding-top: 1rem;\n}\n.center-section > * {\n    grid-column: 2/3;\n}\n.content-header {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n.restaurant-title {\n    display: flex;\n    justify-content: center;\n    background-color: #c4b5fd;\n    padding: 8px;\n    margin-top: 10px;\n    border-radius: 8px;\n}\n.main-image {\n    width: 100%;\n    aspect-ratio: 1;\n}\n.restaurant-main-pic {\n    height: 460px;\n}\n\n.menu-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    font-style: italic;\n    font-weight: 600;\n\n}\n.menu-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: clamp(2rem, 2.2rem, 3rem) clamp(3rem, 4rem, 4.5rem);\n    padding: 0;\n    margin: 0;\n}\n.menu-item-name {\n    font-weight: 700;\n    font-size: 1.1rem;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n.menu-item-price {\n    font-weight: 700;\n    font-size: .9rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: right;\n}\n.menu-item-description {\n    font-size: 0.9rem;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    border-bottom: 2px dotted black;\n\n}\n\n\n.footer {\n    display: flex;\n    background-color: var(--slate-900);\n    justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAboutPage)
/* harmony export */ });
function generateAboutPage(parent) {
    parent.innerHTML = '';

    const topOfAboutDiv = document.createElement('div');
    const topOfAbouth2 = document.createElement('h2');
    topOfAbouth2.innerHTML = "Gino's pizza<br>Founded 1953";
    topOfAboutDiv.classList.add('content-header')
    topOfAboutDiv.appendChild(topOfAbouth2);

    parent.appendChild(topOfAboutDiv);


    const additionalPara = document.createElement('div');
    additionalPara.classList.add('content-paragraph');
    additionalPara.textContent = "Sed tristique vestibulum augue, in vehicula est. Mauris imperdiet, turpis sit amet placerat volutpat, est neque laoreet ipsum, vitae ullamcorper purus turpis a libero. Vivamus ut sapien ut orci facilisis feugiat. Etiam at lacus elit. In cursus mauris et posuere ullamcorper. Sed molestie ante quis volutpat fermentum. Proin rhoncus eros magna, eu rhoncus justo lacinia et. Integer tincidunt augue ut justo interdum finibus. Pellentesque sit amet vehicula felis. Donec ac pulvinar mi. ";
    parent.appendChild(additionalPara);

    const secondPara = document.createElement('div');
    secondPara.classList.add('content-paragraph');
    secondPara.textContent = "Curabitur feugiat magna at cursus malesuada. Cras tincidunt magna id orci scelerisque, vitae fermentum nunc lacinia. Suspendisse eget felis sagittis, egestas felis id, suscipit nibh. Maecenas maximus, sem ut auctor euismod, sem libero dapibus mauris, vel interdum augue magna quis felis. Nullam facilisis commodo ullamcorper. Proin luctus viverra est ut elementum. Donec vel tellus quis nisl molestie pulvinar ac nec massa. Pellentesque a efficitur nibh. Fusce leo dolor, vehicula nec ante vel, facilisis bibendum nisl. Curabitur feugiat magna at cursus malesuada. Cras tincidunt magna id orci scelerisque, vitae fermentum nunc lacinia. Suspendisse eget felis sagittis, egestas felis id, suscipit nibh. Maecenas maximus, sem ut auctor euismod, sem libero dapibus mauris, vel interdum augue magna quis felis. Nullam facilisis commodo ullamcorper. Proin luctus viverra est ut elementum. Donec vel tellus quis nisl molestie pulvinar ac nec massa. Pellentesque a efficitur nibh. Fusce leo dolor, vehicula nec ante vel, facilisis bibendum nisl. ";
    parent.appendChild(secondPara);
}


/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHomePage)
/* harmony export */ });
/* harmony import */ var _images_Pizzeria_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Pizzeria.jpg */ "./src/images/Pizzeria.jpg");


function generateHomePage(parent) {
    parent.innerHTML = '';


    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    const headerH2 = document.createElement('h2');

    //creating the header of the main page
    headerH2.textContent = "Welcome to Gino's Pizza";
    contentHeader.appendChild(headerH2);
    parent.appendChild(contentHeader);


    //creating the image of the main page
    const mainPicDiv = document.createElement('div');
    mainPicDiv.classList.add('restaurant-main-pic');
    const mainPicDivImage = document.createElement('img');
    mainPicDivImage.src = _images_Pizzeria_jpg__WEBPACK_IMPORTED_MODULE_0__;
    mainPicDivImage.classList.add('main-image');
    mainPicDiv.appendChild(mainPicDivImage);
    parent.appendChild(mainPicDiv);

    //creating the "greatness of the restaurant paragraph"
    const greatnessParagraph = document.createElement('div');
    greatnessParagraph.classList.add('content-paragraph');
    greatnessParagraph.textContent = 'This is undoubtably one of the greatest restaurants to ever be created!';
    parent.appendChild(greatnessParagraph);

    const extraParagraph = document.createElement('div');
    extraParagraph.classList.add('content-paragraph');
    extraParagraph.textContent =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis vulputate tellus sit amet aliquam. Suspendisse non risus quis metus tristique ultricies vel sit amet augue. Sed volutpat, massa sed ultricies eleifend, leo ipsum aliquam velit, et varius augue libero ut sapien. Fusce tellus ipsum, suscipit gravida volutpat quis, mollis at ipsum. Nunc tempus justo quis ipsum varius, nec fermentum orci convallis. Vivamus nec tincidunt purus, et interdum est. Duis venenatis pretium sem. Nunc arcu erat, dictum vel dapibus ut, venenatis ut elit. Nunc molestie convallis risus, eget ultricies ipsum ultrices at. ";
    parent.appendChild(extraParagraph);
}

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenuPage)
/* harmony export */ });


class MenuItem {
    constructor(name, type, description, price) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}


// export default menuItemList;

const returnMenuItems = () => {
    const menuItemList = [
        new MenuItem("Fries", "app", "A big backet of fries.", "$3.99"),
        new MenuItem("Greek Salad", "app", "Made with fresh tomatoes, cucumber, onions and feta.", "$6.99"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50")
    ];
    return menuItemList;
}
function createItemsFromFilteredList(list, parent) {
    list.forEach((element) => {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        let menuItemName = document.createElement('div');
        menuItemName.classList.add('menu-item-name');
        menuItemName.textContent = element.name;
        let menuItemPrice = document.createElement('div');
        menuItemPrice.classList.add('menu-item-price');
        menuItemPrice.textContent = element.price;
        let menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-item-description');
        menuItemDescription.textContent = element.description;
        
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemDescription);
        parent.appendChild(menuItem);
    })
}

function generateMenuPage(parent) {
    parent.innerHTML = '';
    const menuItemList = [
        new MenuItem("Fries", "app", "A big backet of fries.", "$3.99"),
        new MenuItem("Greek Salad", "app", "Made with fresh tomatoes, cucumber, onions and feta", "$6.99"),
        new MenuItem("Caesar Salad", "app", "Classic Caesar Salad", "$4.00"),
        new MenuItem("Margherita Pizza", "pizza", "Made with slized mozzarella, basil, and olive oil", "$9.50"),
        new MenuItem("Marinara Pizza", "pizza", "Made with garlic, oregano, and olive oil", "$8.00"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50"),
        new MenuItem("Coca Cola", "drink", "Coco Cola Classic", "$1.00"),
        new MenuItem("Apple Pie", "dessert", "In house made apple Pie", "$3.00"),

    ];

    const appitizerHeader = document.createElement('div');
    appitizerHeader.classList.add('menu-header');
    appitizerHeader.classList.add('menu-header');
    appitizerHeader.textContent = 'Appitizers';
    parent.appendChild(appitizerHeader);

    const appitizersList = menuItemList.filter((item) => item.type == "app");
    createItemsFromFilteredList(appitizersList, parent);
    




    const pizzaHeader = document.createElement('div');
    pizzaHeader.classList.add('menu-header');
    pizzaHeader.textContent = "Pizza"
    parent.appendChild(pizzaHeader);
    const pizzaList = menuItemList.filter((item) => item.type == "pizza");
    createItemsFromFilteredList(pizzaList, parent);

    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('menu-header');
    drinksHeader.textContent = 'Drinks';
    parent.appendChild(drinksHeader);
    const drinksList = menuItemList.filter((item) => item.type == "drink");
    createItemsFromFilteredList(drinksList, parent);

    const dessertHeader = document.createElement('div');
    drinksHeader.classList.add('menu-header');
    drinksHeader.textContent = 'Dessert';
    parent.appendChild(drinksHeader);
    const dessertList = menuItemList.filter((item) => item.type == "dessert");
    createItemsFromFilteredList(dessertList, parent);
}


/***/ }),

/***/ "./src/Fonts/SedanSC-Regular.ttf":
/*!***************************************!*\
  !*** ./src/Fonts/SedanSC-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16064f6331893be744f7.ttf";

/***/ }),

/***/ "./src/images/Pizzeria.jpg":
/*!*********************************!*\
  !*** ./src/images/Pizzeria.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ebf171c1c8124fdaed6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items.js */ "./src/menu-items.js");
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");
/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page.js */ "./src/about-page.js");








const contentSection = document.querySelector("#content");
const centerMainDiv = document.createElement('div');
centerMainDiv.classList.add('center-section');
contentSection.appendChild(centerMainDiv);

// const generateHomePage = function () {
//     centerMainDiv.innerHTML = '';
//     centerMainDiv.classList.add('center-section');
//     contentSection.appendChild(centerMainDiv);


//     const contentHeader = document.createElement('div');
//     const headerH2 = document.createElement('h2');

//     //creating the header of the main page
//     headerH2.textContent = "Welcome to Gino's Pizza";
//     contentHeader.appendChild(headerH2);
//     centerMainDiv.appendChild(contentHeader);


//     //creating the image of the main page
//     const mainPicDiv = document.createElement('div');
//     mainPicDiv.classList.add('restaurant-main-pic');
//     const mainPicDivImage = document.createElement('img');
//     mainPicDivImage.src = mainImage;
//     mainPicDivImage.classList.add('main-image');
//     mainPicDiv.appendChild(mainPicDivImage);
//     centerMainDiv.appendChild(mainPicDiv);

//     //creating the "greatness of the restaurant paragraph"
//     const greatnessParagraph = document.createElement('div');
//     greatnessParagraph.classList.add('greatness-of-restaurant');
//     greatnessParagraph.textContent = 'This is undoubtably one of the greatest restaurants to ever be created!';
//     centerMainDiv.appendChild(greatnessParagraph);

// }




(0,_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])(centerMainDiv);
// generateMenuPage();

//BUTTON DEFINITIONS
const homeButton = document.querySelector('#home-button');
if (homeButton != null) console.log("home button is not null");
homeButton.addEventListener('click', () => {
    console.log('home button clicked');
    (0,_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])(centerMainDiv);
})
const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    console.log('menu button clicked');
    (0,_menu_items_js__WEBPACK_IMPORTED_MODULE_1__["default"])(centerMainDiv);
})
const aboutButton = document.querySelector('#about-button');
aboutButton.addEventListener('click', () => {
    console.log('about button clicked');
    (0,_about_page_js__WEBPACK_IMPORTED_MODULE_3__["default"])(centerMainDiv);
})


const Logo = document.querySelector('.restaurant-logo');
Logo.addEventListener('click', () => {
    console.log("Logo Clicked");
    (0,_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])(centerMainDiv);
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EseURBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWlCO0FBQ3JCLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL3NyYy9hYm91dC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvbWVudS1pdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRm9udHMvU2VkYW5TQy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0taW5kZWdvLTUwOiAjZWVmMmZmO1xuICAgIC0taW5kZWdvLTEwMDogI2UwZTdmZjtcbiAgICAtLWluZGVnby03MDA6ICM0MzM4Y2E7XG4gICAgLS1zbGF0ZS05MDA6ICMwZjE3MmE7XG4gICAgLS1zbGF0ZS04MDA6ICMxZTI5M2I7XG5cblxufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWRhbi1TQyc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLTkwMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDs7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGdhcDogNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuM3JlbTtcbiAgICB9XG59XG4uaGVhZGVyIG5hdiBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwJSAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRlZ28tNzAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubmF2IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuLnJlc3RhdXJhbnQtbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6ICdzZWRhbi1TQyc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGNsYW1wKDQwMHB4LCAzNHJlbSwgOTAlKSAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtODAwKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG5cblxuLmNlbnRlci1zZWN0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGVnby01MCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MCUgMWZyO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIGNsYW1wKDEwMHB4LCAyMDBweCwgMjUwcHgpKTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgYXV0byk7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uY2VudGVyLXNlY3Rpb24gPiAqIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXN0YXVyYW50LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGI1ZmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm1haW4taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbn1cbi5yZXN0YXVyYW50LW1haW4tcGljIHtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG4ubWVudS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgycmVtLCAyLjJyZW0sIDNyZW0pIGNsYW1wKDNyZW0sIDRyZW0sIDQuNXJlbSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWVudS1pdGVtLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMS8yO1xufVxuLm1lbnUtaXRlbS1wcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCBibGFjaztcblxufVxuXG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtOTAwKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9COzs7QUFHeEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBMEQ7SUFDMUQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4QjtBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdURBQXVEO0lBQ3ZELGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtFQUFrRTtJQUNsRSwwQ0FBMEM7SUFDMUMsU0FBUzs7SUFFVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1RUFBdUU7SUFDdkUsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLCtCQUErQjs7QUFFbkM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWluZGVnby01MDogI2VlZjJmZjtcXG4gICAgLS1pbmRlZ28tMTAwOiAjZTBlN2ZmO1xcbiAgICAtLWluZGVnby03MDA6ICM0MzM4Y2E7XFxuICAgIC0tc2xhdGUtOTAwOiAjMGYxNzJhO1xcbiAgICAtLXNsYXRlLTgwMDogIzFlMjkzYjtcXG5cXG5cXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2VkYW4tU0MnO1xcbiAgICBzcmM6IHVybCgnLi9Gb250cy9TZWRhblNDLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS05MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDs7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC4zcmVtO1xcbiAgICB9XFxufVxcbi5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwJSAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kZWdvLTcwMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcbn1cXG4ucmVzdGF1cmFudC1sb2dvIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzZWRhbi1TQyc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBjbGFtcCg0MDBweCwgMzRyZW0sIDkwJSkgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS04MDApO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XFxufVxcblxcblxcbi5jZW50ZXItc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGVnby01MCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDkwJSAxZnI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIGNsYW1wKDEwMHB4LCAyMDBweCwgMjUwcHgpKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGF1dG8pO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG4uY2VudGVyLXNlY3Rpb24gPiAqIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJlc3RhdXJhbnQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YjVmZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5tYWluLWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuLnJlc3RhdXJhbnQtbWFpbi1waWMge1xcbiAgICBoZWlnaHQ6IDQ2MHB4O1xcbn1cXG5cXG4ubWVudS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG59XFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgycmVtLCAyLjJyZW0sIDNyZW0pIGNsYW1wKDNyZW0sIDRyZW0sIDQuNXJlbSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1lbnUtaXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5tZW51LWl0ZW0tcHJpY2Uge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XFxuXFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS05MDApO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBYm91dFBhZ2UocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdG9wT2ZBYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcE9mQWJvdXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdG9wT2ZBYm91dGgyLmlubmVySFRNTCA9IFwiR2lubydzIHBpenphPGJyPkZvdW5kZWQgMTk1M1wiO1xuICAgIHRvcE9mQWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1oZWFkZXInKVxuICAgIHRvcE9mQWJvdXREaXYuYXBwZW5kQ2hpbGQodG9wT2ZBYm91dGgyKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0b3BPZkFib3V0RGl2KTtcblxuXG4gICAgY29uc3QgYWRkaXRpb25hbFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRpdGlvbmFsUGFyYS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhcmFncmFwaCcpO1xuICAgIGFkZGl0aW9uYWxQYXJhLnRleHRDb250ZW50ID0gXCJTZWQgdHJpc3RpcXVlIHZlc3RpYnVsdW0gYXVndWUsIGluIHZlaGljdWxhIGVzdC4gTWF1cmlzIGltcGVyZGlldCwgdHVycGlzIHNpdCBhbWV0IHBsYWNlcmF0IHZvbHV0cGF0LCBlc3QgbmVxdWUgbGFvcmVldCBpcHN1bSwgdml0YWUgdWxsYW1jb3JwZXIgcHVydXMgdHVycGlzIGEgbGliZXJvLiBWaXZhbXVzIHV0IHNhcGllbiB1dCBvcmNpIGZhY2lsaXNpcyBmZXVnaWF0LiBFdGlhbSBhdCBsYWN1cyBlbGl0LiBJbiBjdXJzdXMgbWF1cmlzIGV0IHBvc3VlcmUgdWxsYW1jb3JwZXIuIFNlZCBtb2xlc3RpZSBhbnRlIHF1aXMgdm9sdXRwYXQgZmVybWVudHVtLiBQcm9pbiByaG9uY3VzIGVyb3MgbWFnbmEsIGV1IHJob25jdXMganVzdG8gbGFjaW5pYSBldC4gSW50ZWdlciB0aW5jaWR1bnQgYXVndWUgdXQganVzdG8gaW50ZXJkdW0gZmluaWJ1cy4gUGVsbGVudGVzcXVlIHNpdCBhbWV0IHZlaGljdWxhIGZlbGlzLiBEb25lYyBhYyBwdWx2aW5hciBtaS4gXCI7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGFkZGl0aW9uYWxQYXJhKTtcblxuICAgIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRQYXJhLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtcGFyYWdyYXBoJyk7XG4gICAgc2Vjb25kUGFyYS50ZXh0Q29udGVudCA9IFwiQ3VyYWJpdHVyIGZldWdpYXQgbWFnbmEgYXQgY3Vyc3VzIG1hbGVzdWFkYS4gQ3JhcyB0aW5jaWR1bnQgbWFnbmEgaWQgb3JjaSBzY2VsZXJpc3F1ZSwgdml0YWUgZmVybWVudHVtIG51bmMgbGFjaW5pYS4gU3VzcGVuZGlzc2UgZWdldCBmZWxpcyBzYWdpdHRpcywgZWdlc3RhcyBmZWxpcyBpZCwgc3VzY2lwaXQgbmliaC4gTWFlY2VuYXMgbWF4aW11cywgc2VtIHV0IGF1Y3RvciBldWlzbW9kLCBzZW0gbGliZXJvIGRhcGlidXMgbWF1cmlzLCB2ZWwgaW50ZXJkdW0gYXVndWUgbWFnbmEgcXVpcyBmZWxpcy4gTnVsbGFtIGZhY2lsaXNpcyBjb21tb2RvIHVsbGFtY29ycGVyLiBQcm9pbiBsdWN0dXMgdml2ZXJyYSBlc3QgdXQgZWxlbWVudHVtLiBEb25lYyB2ZWwgdGVsbHVzIHF1aXMgbmlzbCBtb2xlc3RpZSBwdWx2aW5hciBhYyBuZWMgbWFzc2EuIFBlbGxlbnRlc3F1ZSBhIGVmZmljaXR1ciBuaWJoLiBGdXNjZSBsZW8gZG9sb3IsIHZlaGljdWxhIG5lYyBhbnRlIHZlbCwgZmFjaWxpc2lzIGJpYmVuZHVtIG5pc2wuIEN1cmFiaXR1ciBmZXVnaWF0IG1hZ25hIGF0IGN1cnN1cyBtYWxlc3VhZGEuIENyYXMgdGluY2lkdW50IG1hZ25hIGlkIG9yY2kgc2NlbGVyaXNxdWUsIHZpdGFlIGZlcm1lbnR1bSBudW5jIGxhY2luaWEuIFN1c3BlbmRpc3NlIGVnZXQgZmVsaXMgc2FnaXR0aXMsIGVnZXN0YXMgZmVsaXMgaWQsIHN1c2NpcGl0IG5pYmguIE1hZWNlbmFzIG1heGltdXMsIHNlbSB1dCBhdWN0b3IgZXVpc21vZCwgc2VtIGxpYmVybyBkYXBpYnVzIG1hdXJpcywgdmVsIGludGVyZHVtIGF1Z3VlIG1hZ25hIHF1aXMgZmVsaXMuIE51bGxhbSBmYWNpbGlzaXMgY29tbW9kbyB1bGxhbWNvcnBlci4gUHJvaW4gbHVjdHVzIHZpdmVycmEgZXN0IHV0IGVsZW1lbnR1bS4gRG9uZWMgdmVsIHRlbGx1cyBxdWlzIG5pc2wgbW9sZXN0aWUgcHVsdmluYXIgYWMgbmVjIG1hc3NhLiBQZWxsZW50ZXNxdWUgYSBlZmZpY2l0dXIgbmliaC4gRnVzY2UgbGVvIGRvbG9yLCB2ZWhpY3VsYSBuZWMgYW50ZSB2ZWwsIGZhY2lsaXNpcyBiaWJlbmR1bSBuaXNsLiBcIjtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG59XG4iLCJpbXBvcnQgbWFpbkltYWdlIGZyb20gJy4vaW1hZ2VzL1BpenplcmlhLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVBhZ2UocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIC8vY3JlYXRpbmcgdGhlIGhlYWRlciBvZiB0aGUgbWFpbiBwYWdlXG4gICAgaGVhZGVySDIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gR2lubydzIFBpenphXCI7XG4gICAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG5cbiAgICAvL2NyZWF0aW5nIHRoZSBpbWFnZSBvZiB0aGUgbWFpbiBwYWdlXG4gICAgY29uc3QgbWFpblBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5QaWNEaXYuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1tYWluLXBpYycpO1xuICAgIGNvbnN0IG1haW5QaWNEaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5QaWNEaXZJbWFnZS5zcmMgPSBtYWluSW1hZ2U7XG4gICAgbWFpblBpY0RpdkltYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4taW1hZ2UnKTtcbiAgICBtYWluUGljRGl2LmFwcGVuZENoaWxkKG1haW5QaWNEaXZJbWFnZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1haW5QaWNEaXYpO1xuXG4gICAgLy9jcmVhdGluZyB0aGUgXCJncmVhdG5lc3Mgb2YgdGhlIHJlc3RhdXJhbnQgcGFyYWdyYXBoXCJcbiAgICBjb25zdCBncmVhdG5lc3NQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmVhdG5lc3NQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYXJhZ3JhcGgnKTtcbiAgICBncmVhdG5lc3NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVGhpcyBpcyB1bmRvdWJ0YWJseSBvbmUgb2YgdGhlIGdyZWF0ZXN0IHJlc3RhdXJhbnRzIHRvIGV2ZXIgYmUgY3JlYXRlZCEnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChncmVhdG5lc3NQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgZXh0cmFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHRyYVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhcmFncmFwaCcpO1xuICAgIGV4dHJhUGFyYWdyYXBoLnRleHRDb250ZW50ID0gIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb252YWxsaXMgdnVscHV0YXRlIHRlbGx1cyBzaXQgYW1ldCBhbGlxdWFtLiBTdXNwZW5kaXNzZSBub24gcmlzdXMgcXVpcyBtZXR1cyB0cmlzdGlxdWUgdWx0cmljaWVzIHZlbCBzaXQgYW1ldCBhdWd1ZS4gU2VkIHZvbHV0cGF0LCBtYXNzYSBzZWQgdWx0cmljaWVzIGVsZWlmZW5kLCBsZW8gaXBzdW0gYWxpcXVhbSB2ZWxpdCwgZXQgdmFyaXVzIGF1Z3VlIGxpYmVybyB1dCBzYXBpZW4uIEZ1c2NlIHRlbGx1cyBpcHN1bSwgc3VzY2lwaXQgZ3JhdmlkYSB2b2x1dHBhdCBxdWlzLCBtb2xsaXMgYXQgaXBzdW0uIE51bmMgdGVtcHVzIGp1c3RvIHF1aXMgaXBzdW0gdmFyaXVzLCBuZWMgZmVybWVudHVtIG9yY2kgY29udmFsbGlzLiBWaXZhbXVzIG5lYyB0aW5jaWR1bnQgcHVydXMsIGV0IGludGVyZHVtIGVzdC4gRHVpcyB2ZW5lbmF0aXMgcHJldGl1bSBzZW0uIE51bmMgYXJjdSBlcmF0LCBkaWN0dW0gdmVsIGRhcGlidXMgdXQsIHZlbmVuYXRpcyB1dCBlbGl0LiBOdW5jIG1vbGVzdGllIGNvbnZhbGxpcyByaXN1cywgZWdldCB1bHRyaWNpZXMgaXBzdW0gdWx0cmljZXMgYXQuIFwiO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChleHRyYVBhcmFncmFwaCk7XG59IiwiXG5cbmNsYXNzIE1lbnVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxufVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtTGlzdDtcblxuY29uc3QgcmV0dXJuTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtTGlzdCA9IFtcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiRnJpZXNcIiwgXCJhcHBcIiwgXCJBIGJpZyBiYWNrZXQgb2YgZnJpZXMuXCIsIFwiJDMuOTlcIiksXG4gICAgICAgIG5ldyBNZW51SXRlbShcIkdyZWVrIFNhbGFkXCIsIFwiYXBwXCIsIFwiTWFkZSB3aXRoIGZyZXNoIHRvbWF0b2VzLCBjdWN1bWJlciwgb25pb25zIGFuZCBmZXRhLlwiLCBcIiQ2Ljk5XCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJEb3MgRXF1aXNcIiwgXCJkcmlua1wiLCBcIkEgdmVyeSBpbnRlcmVzdGluZyBkcmluayBmb3IgaW50ZXJlc3RpbmcgcGVvcGxlXCIsIFwiJDMuNTBcIilcbiAgICBdO1xuICAgIHJldHVybiBtZW51SXRlbUxpc3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVJdGVtc0Zyb21GaWx0ZXJlZExpc3QobGlzdCwgcGFyZW50KSB7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcbiAgICAgICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICBsZXQgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgICAgICBtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmljZTtcbiAgICAgICAgbGV0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51UGFnZShwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgbWVudUl0ZW1MaXN0ID0gW1xuICAgICAgICBuZXcgTWVudUl0ZW0oXCJGcmllc1wiLCBcImFwcFwiLCBcIkEgYmlnIGJhY2tldCBvZiBmcmllcy5cIiwgXCIkMy45OVwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiR3JlZWsgU2FsYWRcIiwgXCJhcHBcIiwgXCJNYWRlIHdpdGggZnJlc2ggdG9tYXRvZXMsIGN1Y3VtYmVyLCBvbmlvbnMgYW5kIGZldGFcIiwgXCIkNi45OVwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiQ2Flc2FyIFNhbGFkXCIsIFwiYXBwXCIsIFwiQ2xhc3NpYyBDYWVzYXIgU2FsYWRcIiwgXCIkNC4wMFwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBcInBpenphXCIsIFwiTWFkZSB3aXRoIHNsaXplZCBtb3p6YXJlbGxhLCBiYXNpbCwgYW5kIG9saXZlIG9pbFwiLCBcIiQ5LjUwXCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJNYXJpbmFyYSBQaXp6YVwiLCBcInBpenphXCIsIFwiTWFkZSB3aXRoIGdhcmxpYywgb3JlZ2FubywgYW5kIG9saXZlIG9pbFwiLCBcIiQ4LjAwXCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJEb3MgRXF1aXNcIiwgXCJkcmlua1wiLCBcIkEgdmVyeSBpbnRlcmVzdGluZyBkcmluayBmb3IgaW50ZXJlc3RpbmcgcGVvcGxlXCIsIFwiJDMuNTBcIiksXG4gICAgICAgIG5ldyBNZW51SXRlbShcIkNvY2EgQ29sYVwiLCBcImRyaW5rXCIsIFwiQ29jbyBDb2xhIENsYXNzaWNcIiwgXCIkMS4wMFwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiQXBwbGUgUGllXCIsIFwiZGVzc2VydFwiLCBcIkluIGhvdXNlIG1hZGUgYXBwbGUgUGllXCIsIFwiJDMuMDBcIiksXG5cbiAgICBdO1xuXG4gICAgY29uc3QgYXBwaXRpemVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwaXRpemVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgYXBwaXRpemVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgYXBwaXRpemVySGVhZGVyLnRleHRDb250ZW50ID0gJ0FwcGl0aXplcnMnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcHBpdGl6ZXJIZWFkZXIpO1xuXG4gICAgY29uc3QgYXBwaXRpemVyc0xpc3QgPSBtZW51SXRlbUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT0gXCJhcHBcIik7XG4gICAgY3JlYXRlSXRlbXNGcm9tRmlsdGVyZWRMaXN0KGFwcGl0aXplcnNMaXN0LCBwYXJlbnQpO1xuICAgIFxuXG5cblxuXG4gICAgY29uc3QgcGl6emFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIHBpenphSGVhZGVyLnRleHRDb250ZW50ID0gXCJQaXp6YVwiXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHBpenphSGVhZGVyKTtcbiAgICBjb25zdCBwaXp6YUxpc3QgPSBtZW51SXRlbUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT0gXCJwaXp6YVwiKTtcbiAgICBjcmVhdGVJdGVtc0Zyb21GaWx0ZXJlZExpc3QocGl6emFMaXN0LCBwYXJlbnQpO1xuXG4gICAgY29uc3QgZHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgZHJpbmtzSGVhZGVyLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRyaW5rc0hlYWRlcik7XG4gICAgY29uc3QgZHJpbmtzTGlzdCA9IG1lbnVJdGVtTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PSBcImRyaW5rXCIpO1xuICAgIGNyZWF0ZUl0ZW1zRnJvbUZpbHRlcmVkTGlzdChkcmlua3NMaXN0LCBwYXJlbnQpO1xuXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIGRyaW5rc0hlYWRlci50ZXh0Q29udGVudCA9ICdEZXNzZXJ0JztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzSGVhZGVyKTtcbiAgICBjb25zdCBkZXNzZXJ0TGlzdCA9IG1lbnVJdGVtTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PSBcImRlc3NlcnRcIik7XG4gICAgY3JlYXRlSXRlbXNGcm9tRmlsdGVyZWRMaXN0KGRlc3NlcnRMaXN0LCBwYXJlbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdlbmVyYXRlTWVudVBhZ2UgZnJvbSAnLi9tZW51LWl0ZW1zLmpzJztcbmltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZS1wYWdlLmpzJztcbmltcG9ydCBnZW5lcmF0ZUFib3V0UGFnZSBmcm9tICcuL2Fib3V0LXBhZ2UuanMnO1xuXG5cblxuXG5jb25zdCBjb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGNlbnRlck1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNlbnRlck1haW5EaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyLXNlY3Rpb24nKTtcbmNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNlbnRlck1haW5EaXYpO1xuXG4vLyBjb25zdCBnZW5lcmF0ZUhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNlbnRlck1haW5EaXYuaW5uZXJIVE1MID0gJyc7XG4vLyAgICAgY2VudGVyTWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXItc2VjdGlvbicpO1xuLy8gICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNlbnRlck1haW5EaXYpO1xuXG5cbi8vICAgICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaGVhZGVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4vLyAgICAgLy9jcmVhdGluZyB0aGUgaGVhZGVyIG9mIHRoZSBtYWluIHBhZ2Vcbi8vICAgICBoZWFkZXJIMi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBHaW5vJ3MgUGl6emFcIjtcbi8vICAgICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgyKTtcbi8vICAgICBjZW50ZXJNYWluRGl2LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG5cbi8vICAgICAvL2NyZWF0aW5nIHRoZSBpbWFnZSBvZiB0aGUgbWFpbiBwYWdlXG4vLyAgICAgY29uc3QgbWFpblBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIG1haW5QaWNEaXYuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1tYWluLXBpYycpO1xuLy8gICAgIGNvbnN0IG1haW5QaWNEaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gICAgIG1haW5QaWNEaXZJbWFnZS5zcmMgPSBtYWluSW1hZ2U7XG4vLyAgICAgbWFpblBpY0RpdkltYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4taW1hZ2UnKTtcbi8vICAgICBtYWluUGljRGl2LmFwcGVuZENoaWxkKG1haW5QaWNEaXZJbWFnZSk7XG4vLyAgICAgY2VudGVyTWFpbkRpdi5hcHBlbmRDaGlsZChtYWluUGljRGl2KTtcblxuLy8gICAgIC8vY3JlYXRpbmcgdGhlIFwiZ3JlYXRuZXNzIG9mIHRoZSByZXN0YXVyYW50IHBhcmFncmFwaFwiXG4vLyAgICAgY29uc3QgZ3JlYXRuZXNzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgZ3JlYXRuZXNzUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2dyZWF0bmVzcy1vZi1yZXN0YXVyYW50Jyk7XG4vLyAgICAgZ3JlYXRuZXNzUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgdW5kb3VidGFibHkgb25lIG9mIHRoZSBncmVhdGVzdCByZXN0YXVyYW50cyB0byBldmVyIGJlIGNyZWF0ZWQhJztcbi8vICAgICBjZW50ZXJNYWluRGl2LmFwcGVuZENoaWxkKGdyZWF0bmVzc1BhcmFncmFwaCk7XG5cbi8vIH1cblxuXG5cblxuZ2VuZXJhdGVIb21lUGFnZShjZW50ZXJNYWluRGl2KTtcbi8vIGdlbmVyYXRlTWVudVBhZ2UoKTtcblxuLy9CVVRUT04gREVGSU5JVElPTlNcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idXR0b24nKTtcbmlmIChob21lQnV0dG9uICE9IG51bGwpIGNvbnNvbGUubG9nKFwiaG9tZSBidXR0b24gaXMgbm90IG51bGxcIik7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdob21lIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgZ2VuZXJhdGVIb21lUGFnZShjZW50ZXJNYWluRGl2KTtcbn0pXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnV0dG9uJyk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtZW51IGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgZ2VuZXJhdGVNZW51UGFnZShjZW50ZXJNYWluRGl2KTtcbn0pXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1idXR0b24nKTtcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhYm91dCBidXR0b24gY2xpY2tlZCcpO1xuICAgIGdlbmVyYXRlQWJvdXRQYWdlKGNlbnRlck1haW5EaXYpO1xufSlcblxuXG5jb25zdCBMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtbG9nbycpO1xuTG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ28gQ2xpY2tlZFwiKTtcbiAgICBnZW5lcmF0ZUhvbWVQYWdlKGNlbnRlck1haW5EaXYpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
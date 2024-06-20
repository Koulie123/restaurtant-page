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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --indego-50: #eef2ff;
    --indego-100: #e0e7ff;
    --indego-700: #4338ca;
    --slate-900: #0f172a;
    --slate-800: #1e293b;

}
html, body {
    height: 100%;
    margin: 0;
}

.header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: var(--slate-900);
    color: white;
    padding-top: 8px;
    padding-bottom: 0px;
    box-sizing: border-box;
    margin-bottom: 0px;;
    height: 50px;
    gap: 20px;
    justify-content: center;
    align-items: center;

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
}
.content {
    display: grid;
    grid-template-columns: 1fr clamp(400px, 30rem, 90%) 1fr;
    background-color: var(--slate-800);
    min-height: 1000px;
}


.center-section {
    grid-column: 2/3;
    background-color: var(--indego-50);
    display: grid;
    grid-template-columns: 1fr 90% 1fr;
    grid-template-rows: repeat(auto, clamp(100px, 200px, 250px));
    gap: 15px;
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;;AAExB;AACA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,8BAA8B;IAC9B,mCAAmC;IACnC,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,WAAW;IACX,cAAc;IACd,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uDAAuD;IACvD,kCAAkC;IAClC,kBAAkB;AACtB;;;AAGA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,aAAa;IACb,kCAAkC;IAClC,4DAA4D;IAC5D,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;;AAEtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uEAAuE;IACvE,UAAU;IACV,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,+BAA+B;;AAEnC","sourcesContent":[":root {\n    --indego-50: #eef2ff;\n    --indego-100: #e0e7ff;\n    --indego-700: #4338ca;\n    --slate-900: #0f172a;\n    --slate-800: #1e293b;\n\n}\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: var(--slate-900);\n    color: white;\n    padding-top: 8px;\n    padding-bottom: 0px;\n    box-sizing: border-box;\n    margin-bottom: 0px;;\n    height: 50px;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n\n}\n.header nav button {\n    border-radius: 10px 10px 0% 0%;\n    background-color: var(--indego-700);\n    color: white;\n    font-weight: 700;\n}\nnav button {\n    width: 90%;\n    height: 90%;\n    padding: .5rem;\n    border: 0;\n    border-radius: 0;\n}\n.content {\n    display: grid;\n    grid-template-columns: 1fr clamp(400px, 30rem, 90%) 1fr;\n    background-color: var(--slate-800);\n    min-height: 1000px;\n}\n\n\n.center-section {\n    grid-column: 2/3;\n    background-color: var(--indego-50);\n    display: grid;\n    grid-template-columns: 1fr 90% 1fr;\n    grid-template-rows: repeat(auto, clamp(100px, 200px, 250px));\n    gap: 15px;\n}\n.center-section > * {\n    grid-column: 2/3;\n}\n.content-header {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n.restaurant-title {\n    display: flex;\n    justify-content: center;\n    background-color: #c4b5fd;\n    padding: 8px;\n    margin-top: 10px;\n    border-radius: 8px;\n}\n.main-image {\n    width: 100%;\n    aspect-ratio: 1;\n}\n.restaurant-main-pic {\n    height: 460px;\n}\n\n.menu-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    font-style: italic;\n\n}\n.menu-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: clamp(2rem, 2.2rem, 3rem) clamp(3rem, 4rem, 4.5rem);\n    padding: 0;\n    margin: 0;\n}\n.menu-item-name {\n    font-weight: 700;\n    font-size: 1.1rem;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n.menu-item-price {\n    font-weight: 700;\n    font-size: .9rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: right;\n}\n.menu-item-description {\n    font-size: 0.9rem;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    border-bottom: 2px dotted black;\n\n}"],"sourceRoot":""}]);
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
        new MenuItem("Margherita Pizza", "pizza", "Made with slized mozzarella, basil, and olive oil", "$9:50"),
        new MenuItem("Marinara Pizza", "pizza", "Made with garlic, oregano, and olive oil", "$8.00"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50"),
        new MenuItem("Coca Cola", "drink", "Coco Cola Classic", "$1.00"),
        new MenuItem("Apple Pie", "dessert", "In house made apple Pie", "$3.00"),

    ];

    const appitizerHeader = document.createElement('div');
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFNaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSx5REFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBaUI7QUFDckIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vc3JjL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL3NyYy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWluZGVnby01MDogI2VlZjJmZjtcbiAgICAtLWluZGVnby0xMDA6ICNlMGU3ZmY7XG4gICAgLS1pbmRlZ28tNzAwOiAjNDMzOGNhO1xuICAgIC0tc2xhdGUtOTAwOiAjMGYxNzJhO1xuICAgIC0tc2xhdGUtODAwOiAjMWUyOTNiO1xuXG59XG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtOTAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5oZWFkZXIgbmF2IGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAlIDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGVnby03MDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxubmF2IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGNsYW1wKDQwMHB4LCAzMHJlbSwgOTAlKSAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtODAwKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG5cblxuLmNlbnRlci1zZWN0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGVnby01MCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MCUgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIGNsYW1wKDEwMHB4LCAyMDBweCwgMjUwcHgpKTtcbiAgICBnYXA6IDE1cHg7XG59XG4uY2VudGVyLXNlY3Rpb24gPiAqIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXN0YXVyYW50LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGI1ZmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm1haW4taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbn1cbi5yZXN0YXVyYW50LW1haW4tcGljIHtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG4ubWVudS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbn1cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMnJlbSwgMi4ycmVtLCAzcmVtKSBjbGFtcCgzcmVtLCA0cmVtLCA0LjVyZW0pO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuLm1lbnUtaXRlbS1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cbi5tZW51LWl0ZW0tcHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdURBQXVEO0lBQ3ZELGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDREQUE0RDtJQUM1RCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsK0JBQStCOztBQUVuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taW5kZWdvLTUwOiAjZWVmMmZmO1xcbiAgICAtLWluZGVnby0xMDA6ICNlMGU3ZmY7XFxuICAgIC0taW5kZWdvLTcwMDogIzQzMzhjYTtcXG4gICAgLS1zbGF0ZS05MDA6ICMwZjE3MmE7XFxuICAgIC0tc2xhdGUtODAwOiAjMWUyOTNiO1xcblxcbn1cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS05MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDs7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuLmhlYWRlciBuYXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAlIDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRlZ28tNzAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5uYXYgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgY2xhbXAoNDAwcHgsIDMwcmVtLCA5MCUpIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtODAwKTtcXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xcbn1cXG5cXG5cXG4uY2VudGVyLXNlY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRlZ28tNTApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MCUgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCBjbGFtcCgxMDBweCwgMjAwcHgsIDI1MHB4KSk7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLmNlbnRlci1zZWN0aW9uID4gKiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbi5jb250ZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yZXN0YXVyYW50LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGI1ZmQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ubWFpbi1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxufVxcbi5yZXN0YXVyYW50LW1haW4tcGljIHtcXG4gICAgaGVpZ2h0OiA0NjBweDtcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxufVxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMnJlbSwgMi4ycmVtLCAzcmVtKSBjbGFtcCgzcmVtLCA0cmVtLCA0LjVyZW0pO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tZW51LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4ubWVudS1pdGVtLXByaWNlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGJsYWNrO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWJvdXRQYWdlKHBhcmVudCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHRvcE9mQWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b3BPZkFib3V0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRvcE9mQWJvdXRoMi5pbm5lckhUTUwgPSBcIkdpbm8ncyBwaXp6YTxicj5Gb3VuZGVkIDE5NTNcIjtcbiAgICB0b3BPZkFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaGVhZGVyJylcbiAgICB0b3BPZkFib3V0RGl2LmFwcGVuZENoaWxkKHRvcE9mQWJvdXRoMik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9wT2ZBYm91dERpdik7XG5cblxuICAgIGNvbnN0IGFkZGl0aW9uYWxQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkaXRpb25hbFBhcmEuY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYXJhZ3JhcGgnKTtcbiAgICBhZGRpdGlvbmFsUGFyYS50ZXh0Q29udGVudCA9IFwiU2VkIHRyaXN0aXF1ZSB2ZXN0aWJ1bHVtIGF1Z3VlLCBpbiB2ZWhpY3VsYSBlc3QuIE1hdXJpcyBpbXBlcmRpZXQsIHR1cnBpcyBzaXQgYW1ldCBwbGFjZXJhdCB2b2x1dHBhdCwgZXN0IG5lcXVlIGxhb3JlZXQgaXBzdW0sIHZpdGFlIHVsbGFtY29ycGVyIHB1cnVzIHR1cnBpcyBhIGxpYmVyby4gVml2YW11cyB1dCBzYXBpZW4gdXQgb3JjaSBmYWNpbGlzaXMgZmV1Z2lhdC4gRXRpYW0gYXQgbGFjdXMgZWxpdC4gSW4gY3Vyc3VzIG1hdXJpcyBldCBwb3N1ZXJlIHVsbGFtY29ycGVyLiBTZWQgbW9sZXN0aWUgYW50ZSBxdWlzIHZvbHV0cGF0IGZlcm1lbnR1bS4gUHJvaW4gcmhvbmN1cyBlcm9zIG1hZ25hLCBldSByaG9uY3VzIGp1c3RvIGxhY2luaWEgZXQuIEludGVnZXIgdGluY2lkdW50IGF1Z3VlIHV0IGp1c3RvIGludGVyZHVtIGZpbmlidXMuIFBlbGxlbnRlc3F1ZSBzaXQgYW1ldCB2ZWhpY3VsYSBmZWxpcy4gRG9uZWMgYWMgcHVsdmluYXIgbWkuIFwiO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhZGRpdGlvbmFsUGFyYSk7XG59XG4iLCJpbXBvcnQgbWFpbkltYWdlIGZyb20gJy4vaW1hZ2VzL1BpenplcmlhLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVBhZ2UocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIC8vY3JlYXRpbmcgdGhlIGhlYWRlciBvZiB0aGUgbWFpbiBwYWdlXG4gICAgaGVhZGVySDIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gR2lubydzIFBpenphXCI7XG4gICAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG5cbiAgICAvL2NyZWF0aW5nIHRoZSBpbWFnZSBvZiB0aGUgbWFpbiBwYWdlXG4gICAgY29uc3QgbWFpblBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5QaWNEaXYuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1tYWluLXBpYycpO1xuICAgIGNvbnN0IG1haW5QaWNEaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5QaWNEaXZJbWFnZS5zcmMgPSBtYWluSW1hZ2U7XG4gICAgbWFpblBpY0RpdkltYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4taW1hZ2UnKTtcbiAgICBtYWluUGljRGl2LmFwcGVuZENoaWxkKG1haW5QaWNEaXZJbWFnZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1haW5QaWNEaXYpO1xuXG4gICAgLy9jcmVhdGluZyB0aGUgXCJncmVhdG5lc3Mgb2YgdGhlIHJlc3RhdXJhbnQgcGFyYWdyYXBoXCJcbiAgICBjb25zdCBncmVhdG5lc3NQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmVhdG5lc3NQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYXJhZ3JhcGgnKTtcbiAgICBncmVhdG5lc3NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVGhpcyBpcyB1bmRvdWJ0YWJseSBvbmUgb2YgdGhlIGdyZWF0ZXN0IHJlc3RhdXJhbnRzIHRvIGV2ZXIgYmUgY3JlYXRlZCEnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChncmVhdG5lc3NQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgZXh0cmFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHRyYVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhcmFncmFwaCcpO1xuICAgIGV4dHJhUGFyYWdyYXBoLnRleHRDb250ZW50ID0gIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb252YWxsaXMgdnVscHV0YXRlIHRlbGx1cyBzaXQgYW1ldCBhbGlxdWFtLiBTdXNwZW5kaXNzZSBub24gcmlzdXMgcXVpcyBtZXR1cyB0cmlzdGlxdWUgdWx0cmljaWVzIHZlbCBzaXQgYW1ldCBhdWd1ZS4gU2VkIHZvbHV0cGF0LCBtYXNzYSBzZWQgdWx0cmljaWVzIGVsZWlmZW5kLCBsZW8gaXBzdW0gYWxpcXVhbSB2ZWxpdCwgZXQgdmFyaXVzIGF1Z3VlIGxpYmVybyB1dCBzYXBpZW4uIEZ1c2NlIHRlbGx1cyBpcHN1bSwgc3VzY2lwaXQgZ3JhdmlkYSB2b2x1dHBhdCBxdWlzLCBtb2xsaXMgYXQgaXBzdW0uIE51bmMgdGVtcHVzIGp1c3RvIHF1aXMgaXBzdW0gdmFyaXVzLCBuZWMgZmVybWVudHVtIG9yY2kgY29udmFsbGlzLiBWaXZhbXVzIG5lYyB0aW5jaWR1bnQgcHVydXMsIGV0IGludGVyZHVtIGVzdC4gRHVpcyB2ZW5lbmF0aXMgcHJldGl1bSBzZW0uIE51bmMgYXJjdSBlcmF0LCBkaWN0dW0gdmVsIGRhcGlidXMgdXQsIHZlbmVuYXRpcyB1dCBlbGl0LiBOdW5jIG1vbGVzdGllIGNvbnZhbGxpcyByaXN1cywgZWdldCB1bHRyaWNpZXMgaXBzdW0gdWx0cmljZXMgYXQuIFwiO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChleHRyYVBhcmFncmFwaCk7XG59IiwiXG5cbmNsYXNzIE1lbnVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxufVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtTGlzdDtcblxuY29uc3QgcmV0dXJuTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtTGlzdCA9IFtcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiRnJpZXNcIiwgXCJhcHBcIiwgXCJBIGJpZyBiYWNrZXQgb2YgZnJpZXMuXCIsIFwiJDMuOTlcIiksXG4gICAgICAgIG5ldyBNZW51SXRlbShcIkdyZWVrIFNhbGFkXCIsIFwiYXBwXCIsIFwiTWFkZSB3aXRoIGZyZXNoIHRvbWF0b2VzLCBjdWN1bWJlciwgb25pb25zIGFuZCBmZXRhLlwiLCBcIiQ2Ljk5XCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJEb3MgRXF1aXNcIiwgXCJkcmlua1wiLCBcIkEgdmVyeSBpbnRlcmVzdGluZyBkcmluayBmb3IgaW50ZXJlc3RpbmcgcGVvcGxlXCIsIFwiJDMuNTBcIilcbiAgICBdO1xuICAgIHJldHVybiBtZW51SXRlbUxpc3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVJdGVtc0Zyb21GaWx0ZXJlZExpc3QobGlzdCwgcGFyZW50KSB7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcbiAgICAgICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICBsZXQgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgICAgICBtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmljZTtcbiAgICAgICAgbGV0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51UGFnZShwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgbWVudUl0ZW1MaXN0ID0gW1xuICAgICAgICBuZXcgTWVudUl0ZW0oXCJGcmllc1wiLCBcImFwcFwiLCBcIkEgYmlnIGJhY2tldCBvZiBmcmllcy5cIiwgXCIkMy45OVwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiR3JlZWsgU2FsYWRcIiwgXCJhcHBcIiwgXCJNYWRlIHdpdGggZnJlc2ggdG9tYXRvZXMsIGN1Y3VtYmVyLCBvbmlvbnMgYW5kIGZldGFcIiwgXCIkNi45OVwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiQ2Flc2FyIFNhbGFkXCIsIFwiYXBwXCIsIFwiQ2xhc3NpYyBDYWVzYXIgU2FsYWRcIiwgXCIkNC4wMFwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBcInBpenphXCIsIFwiTWFkZSB3aXRoIHNsaXplZCBtb3p6YXJlbGxhLCBiYXNpbCwgYW5kIG9saXZlIG9pbFwiLCBcIiQ5OjUwXCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJNYXJpbmFyYSBQaXp6YVwiLCBcInBpenphXCIsIFwiTWFkZSB3aXRoIGdhcmxpYywgb3JlZ2FubywgYW5kIG9saXZlIG9pbFwiLCBcIiQ4LjAwXCIpLFxuICAgICAgICBuZXcgTWVudUl0ZW0oXCJEb3MgRXF1aXNcIiwgXCJkcmlua1wiLCBcIkEgdmVyeSBpbnRlcmVzdGluZyBkcmluayBmb3IgaW50ZXJlc3RpbmcgcGVvcGxlXCIsIFwiJDMuNTBcIiksXG4gICAgICAgIG5ldyBNZW51SXRlbShcIkNvY2EgQ29sYVwiLCBcImRyaW5rXCIsIFwiQ29jbyBDb2xhIENsYXNzaWNcIiwgXCIkMS4wMFwiKSxcbiAgICAgICAgbmV3IE1lbnVJdGVtKFwiQXBwbGUgUGllXCIsIFwiZGVzc2VydFwiLCBcIkluIGhvdXNlIG1hZGUgYXBwbGUgUGllXCIsIFwiJDMuMDBcIiksXG5cbiAgICBdO1xuXG4gICAgY29uc3QgYXBwaXRpemVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwaXRpemVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgYXBwaXRpemVySGVhZGVyLnRleHRDb250ZW50ID0gJ0FwcGl0aXplcnMnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcHBpdGl6ZXJIZWFkZXIpO1xuXG4gICAgY29uc3QgYXBwaXRpemVyc0xpc3QgPSBtZW51SXRlbUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT0gXCJhcHBcIik7XG4gICAgY3JlYXRlSXRlbXNGcm9tRmlsdGVyZWRMaXN0KGFwcGl0aXplcnNMaXN0LCBwYXJlbnQpO1xuICAgIFxuXG5cblxuXG4gICAgY29uc3QgcGl6emFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIHBpenphSGVhZGVyLnRleHRDb250ZW50ID0gXCJQaXp6YVwiXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHBpenphSGVhZGVyKTtcbiAgICBjb25zdCBwaXp6YUxpc3QgPSBtZW51SXRlbUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT0gXCJwaXp6YVwiKTtcbiAgICBjcmVhdGVJdGVtc0Zyb21GaWx0ZXJlZExpc3QocGl6emFMaXN0LCBwYXJlbnQpO1xuXG4gICAgY29uc3QgZHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgZHJpbmtzSGVhZGVyLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRyaW5rc0hlYWRlcik7XG4gICAgY29uc3QgZHJpbmtzTGlzdCA9IG1lbnVJdGVtTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PSBcImRyaW5rXCIpO1xuICAgIGNyZWF0ZUl0ZW1zRnJvbUZpbHRlcmVkTGlzdChkcmlua3NMaXN0LCBwYXJlbnQpO1xuXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIGRyaW5rc0hlYWRlci50ZXh0Q29udGVudCA9ICdEZXNzZXJ0JztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzSGVhZGVyKTtcbiAgICBjb25zdCBkZXNzZXJ0TGlzdCA9IG1lbnVJdGVtTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PSBcImRlc3NlcnRcIik7XG4gICAgY3JlYXRlSXRlbXNGcm9tRmlsdGVyZWRMaXN0KGRlc3NlcnRMaXN0LCBwYXJlbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdlbmVyYXRlTWVudVBhZ2UgZnJvbSAnLi9tZW51LWl0ZW1zLmpzJztcbmltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZS1wYWdlLmpzJztcbmltcG9ydCBnZW5lcmF0ZUFib3V0UGFnZSBmcm9tICcuL2Fib3V0LXBhZ2UuanMnO1xuXG5cblxuXG5cbmNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgY2VudGVyTWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2VudGVyTWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXItc2VjdGlvbicpO1xuY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2VudGVyTWFpbkRpdik7XG5cbi8vIGNvbnN0IGdlbmVyYXRlSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY2VudGVyTWFpbkRpdi5pbm5lckhUTUwgPSAnJztcbi8vICAgICBjZW50ZXJNYWluRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1zZWN0aW9uJyk7XG4vLyAgICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2VudGVyTWFpbkRpdik7XG5cblxuLy8gICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBoZWFkZXJIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbi8vICAgICAvL2NyZWF0aW5nIHRoZSBoZWFkZXIgb2YgdGhlIG1haW4gcGFnZVxuLy8gICAgIGhlYWRlckgyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEdpbm8ncyBQaXp6YVwiO1xuLy8gICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySDIpO1xuLy8gICAgIGNlbnRlck1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XG5cblxuLy8gICAgIC8vY3JlYXRpbmcgdGhlIGltYWdlIG9mIHRoZSBtYWluIHBhZ2Vcbi8vICAgICBjb25zdCBtYWluUGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgbWFpblBpY0Rpdi5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW1haW4tcGljJyk7XG4vLyAgICAgY29uc3QgbWFpblBpY0RpdkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyAgICAgbWFpblBpY0RpdkltYWdlLnNyYyA9IG1haW5JbWFnZTtcbi8vICAgICBtYWluUGljRGl2SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWFnZScpO1xuLy8gICAgIG1haW5QaWNEaXYuYXBwZW5kQ2hpbGQobWFpblBpY0RpdkltYWdlKTtcbi8vICAgICBjZW50ZXJNYWluRGl2LmFwcGVuZENoaWxkKG1haW5QaWNEaXYpO1xuXG4vLyAgICAgLy9jcmVhdGluZyB0aGUgXCJncmVhdG5lc3Mgb2YgdGhlIHJlc3RhdXJhbnQgcGFyYWdyYXBoXCJcbi8vICAgICBjb25zdCBncmVhdG5lc3NQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBncmVhdG5lc3NQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZ3JlYXRuZXNzLW9mLXJlc3RhdXJhbnQnKTtcbi8vICAgICBncmVhdG5lc3NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVGhpcyBpcyB1bmRvdWJ0YWJseSBvbmUgb2YgdGhlIGdyZWF0ZXN0IHJlc3RhdXJhbnRzIHRvIGV2ZXIgYmUgY3JlYXRlZCEnO1xuLy8gICAgIGNlbnRlck1haW5EaXYuYXBwZW5kQ2hpbGQoZ3JlYXRuZXNzUGFyYWdyYXBoKTtcblxuLy8gfVxuXG5cblxuXG5nZW5lcmF0ZUhvbWVQYWdlKGNlbnRlck1haW5EaXYpO1xuLy8gZ2VuZXJhdGVNZW51UGFnZSgpO1xuXG4vL0JVVFRPTiBERUZJTklUSU9OU1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ1dHRvbicpO1xuaWYgKGhvbWVCdXR0b24gIT0gbnVsbCkgY29uc29sZS5sb2coXCJob21lIGJ1dHRvbiBpcyBub3QgbnVsbFwiKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hvbWUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICBnZW5lcmF0ZUhvbWVQYWdlKGNlbnRlck1haW5EaXYpO1xufSlcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21lbnUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICBnZW5lcmF0ZU1lbnVQYWdlKGNlbnRlck1haW5EaXYpO1xufSlcbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LWJ1dHRvbicpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Fib3V0IGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgZ2VuZXJhdGVBYm91dFBhZ2UoY2VudGVyTWFpbkRpdik7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
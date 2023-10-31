/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --bg-color: #268888;\r\n    --bg-color1: aliceblue;\r\n    --bg-color2: #c4d0da;\r\n    --color: white;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n}\r\nbody {\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    font-size: 16px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#content {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nheader > h1 {\r\n    background-color: rgb(245, 151, 148);\r\n    text-align: center;\r\n    font-size: 50px;\r\n    letter-spacing: 3px;\r\n    text-shadow: -1px -1px 0 var(--bg-color), 1px -1px 0 var(--bg-color),\r\n    -1px 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color);\r\n}\r\nheader > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: large;\r\n    height: 50px;\r\n    background-color: var(--bg-color2);\r\n    cursor: pointer;\r\n}\r\nheader > div > div {\r\n    background-color: var(--bg-color1);\r\n    text-align: end;\r\n    padding: 10px;\r\n    border-bottom: 1px solid var(--bg-color2);\r\n}\r\nheader > div > div:not(:last-child) {\r\n    border-right: 1px solid var(--bg-color2);\r\n}\r\n#content > div {\r\n    flex: 1;\r\n}\r\n.no-display {\r\n    display: none;\r\n}\r\nmain {\r\n    height: 100%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n    background-color: var(--bg-color1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\nmain > * {\r\n    background-color: var(--bg-color);\r\n    border-radius: 50px;\r\n    width: clamp(300px, 80%, 600px);\r\n    height: 350px;\r\n    display: grid;\r\n    grid-template: 1fr 2fr / 1fr;\r\n    place-items: center;\r\n}\r\nmain > div > h2 + *, main > div > h1 + * {\r\n    align-self: start;\r\n    background-color: var(--bg-color1);\r\n    text-align: center;\r\n    width: 70%;\r\n    height: 70%;\r\n    padding-top: 10px;\r\n}\r\nmain > div > h2, main > div > h1 {\r\n    background-color: var(--bg-color1);\r\n    padding: 10px;\r\n    letter-spacing: 2px;\r\n}\r\nmain:nth-child(2) > div {\r\n    width: clamp(300px, 80%, 600px);\r\n    height: 400px;\r\n}\r\nmain > div > img {\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 45px;\r\n    grid-area: 1 / 1 / 3 / 2;\r\n}\r\nmain > div > img + p {\r\n    font-family: 'tangerine', cursive;\r\n    text-align: center;\r\n    font-size: x-large;\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    align-self: center;\r\n    background-color: rgba(240, 248, 255, 0.5);\r\n    padding: 10px;\r\n}\r\nfooter {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    padding: 10px;\r\n    background-color: var(--bg-color2);\r\n}\r\nfooter a {\r\n    color: black;\r\n}\r\nfooter a:hover {\r\n    color: var(--bg-color);\r\n    text-decoration: underline;\r\n}\r\nfooter > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nfooter > div:first-child {\r\n    place-self: center;\r\n}\r\nfooter > div:nth-child(2) {\r\n    justify-self: end;\r\n}\r\nfooter > div:last-child {\r\n    justify-self: end;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeContactElements: () => (/* binding */ makeContactElements)\n/* harmony export */ });\nfunction makeContactElements () {\r\n    const main = document.createElement('main');\r\n    const content = document.createElement('div');\r\n\r\n    const contentTitle = document.createElement('h1');\r\n    contentTitle.innerHTML = 'CONTACT US ON:';\r\n\r\n    const contentDiv = document.createElement('div');\r\n\r\n    const telh3 = document.createElement('h3');\r\n    const tel0 = document.createElement('p');\r\n    const tel1 = document.createElement('p');\r\n    const tel2 = document.createElement('p');\r\n\r\n    const soch3 = document.createElement('h3');\r\n    const soc0 = document.createElement('p');\r\n    const soc1 = document.createElement('p');\r\n    const soc2 = document.createElement('p');\r\n\r\n    contentDiv.append(telh3, tel0, tel1, tel2, soch3, soc0, soc1, soc2);\r\n    content.append(contentTitle, contentDiv);\r\n    main.append(content);\r\n\r\n    return main;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeHomeElements: () => (/* binding */ makeHomeElements)\n/* harmony export */ });\nfunction makeHomeElements () {\r\n    const main = document.createElement('main');\r\n    const aboutDiv = document.createElement('div');\r\n    const openDiv = document.createElement('div');\r\n    const localDiv = document.createElement('div');\r\n\r\n    const aboutH1 = document.createElement('h1');\r\n    const aboutPara = document.createElement('p');\r\n\r\n    aboutH1.innerHTML = 'About uRestaurant';\r\n    aboutPara.innerHTML = '';\r\n    aboutDiv.append(aboutH1, aboutPara);\r\n\r\n    const openH2 = document.createElement('h2');\r\n    const openParas = document.createElement('div');\r\n    const openPara1 = document.createElement('p');\r\n    const openPara2 = document.createElement('p');\r\n\r\n    openH2.innerHTML = 'Open';\r\n    openPara1.innerHTML = 'Weekdays: 7am - 8pm';\r\n    openPara2.innerHTML = 'Weekend: 8am - 10pm';\r\n    openParas.append(openPara1, openPara2)\r\n    openDiv.append(openH2, openParas);\r\n\r\n\r\n    const localH2 = document.createElement('h2');\r\n    const localPara = document.createElement('p');\r\n\r\n    localH2.innerHTML = 'Location';\r\n    localPara.innerHTML = '12B Cole Ave, Cole World, Yourz';\r\n    localDiv.append(localH2, localPara);\r\n\r\n    main.append(aboutDiv, openDiv, localDiv);\r\n\r\n    return main;\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\r\n\r\n\r\n(0,_page__WEBPACK_IMPORTED_MODULE_1__.makeBodyElements)();\r\n\r\nconst content = document.querySelector('#content');\r\nconst contentArr = [...content.querySelectorAll('main')];\r\nconst buttons = [...content.querySelectorAll('header > div > div')];\r\nconst bgc = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');\r\n\r\nfunction pageLoadDisplay () {\r\n    buttons[0].setAttribute('style', `background-color: ${bgc}`)\r\n    contentArr[0].classList.remove('no-display');\r\n    contentArr[1].classList.add('no-display');\r\n    contentArr[2].classList.add('no-display');\r\n}\r\npageLoadDisplay();\r\n\r\ncontent.addEventListener('click', (e) => {\r\n   const elem = e.target;\r\n   const elemText = elem.innerHTML;\r\n   if (elemText === 'HOME') {\r\n        buttons[0].setAttribute('style', `background-color: ${bgc}`);\r\n        buttons[1].removeAttribute('style');\r\n        buttons[2].removeAttribute('style');\r\n        contentArr[0].classList.remove('no-display');\r\n        contentArr[1].classList.add('no-display');\r\n        contentArr[2].classList.add('no-display');\r\n    } else if (elemText === 'MENU') {\r\n        buttons[1].setAttribute('style', `background-color: ${bgc}`);\r\n        buttons[0].removeAttribute('style');\r\n        buttons[2].removeAttribute('style');\r\n        contentArr[0].classList.add('no-display');\r\n        contentArr[1].classList.remove('no-display');\r\n        contentArr[2].classList.add('no-display');\r\n\r\n    } else if (elemText === 'CONTACT') {\r\n        buttons[2].setAttribute('style', `background-color: ${bgc}`);\r\n        buttons[1].removeAttribute('style');\r\n        buttons[0].removeAttribute('style');\r\n        contentArr[0].classList.add('no-display');\r\n        contentArr[1].classList.add('no-display');\r\n        contentArr[2].classList.remove('no-display');\r\n    } else return;\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMenuElements: () => (/* binding */ makeMenuElements)\n/* harmony export */ });\nfunction makeMenuElements () {\r\n    const main = document.createElement('main');\r\n    main.classList.add('menu-items');\r\n\r\n    const pl1 = document.createElement('div');\r\n    const img1 = document.createElement('img');\r\n    const disc1 = document.createElement('p');\r\n    img1.src = '../src/img/beef-stew.jpg';\r\n    img1.alt = 'beef-stew';\r\n    disc1.innerHTML = 'Nigerian Beef Stew';\r\n    pl1.append(img1, disc1);\r\n\r\n    const pl2 = document.createElement('div');\r\n    const img2 = document.createElement('img');\r\n    const disc2 = document.createElement('p');\r\n    img2.src = '../src/img/egusi-soup.jpg';\r\n    img2.alt = 'egusi-soup';\r\n    disc2.innerHTML = 'Nigerian Egusi Soup';\r\n    pl2.append(img2, disc2);\r\n\r\n    const pl3 = document.createElement('div');\r\n    const img3 = document.createElement('img');\r\n    const disc3 = document.createElement('p');\r\n    img3.src = '../src/img/fried-chicken.jpg';\r\n    img3.alt = 'fried-chicken';\r\n    disc3.innerHTML = 'Fried Chicken';\r\n    pl3.append(img3, disc3);\r\n\r\n    const pl4 = document.createElement('div');\r\n    const img4 = document.createElement('img');\r\n    const disc4 = document.createElement('p');\r\n    img4.src = '../src/img/okra-soup.jpg';\r\n    img4.alt = 'okra-soup';\r\n    disc4.innerHTML = 'Nigerian Okra Soup';\r\n    pl4.append(img4, disc4);\r\n\r\n    const pl5 = document.createElement('div');\r\n    const img5 = document.createElement('img');\r\n    const disc5 = document.createElement('p');\r\n    img5.src = '../src/img/white-rice.jpg';\r\n    img5.alt = 'white-rice-and-chicken-soup';\r\n    disc5.innerHTML = 'Nigerian White Rice and Chicken Soup';\r\n    pl5.append(img5, disc5);\r\n\r\n\r\n    main.append(pl1, pl2, pl3, pl4, pl5);\r\n\r\n    return main;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeBodyElements: () => (/* binding */ makeBodyElements)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction makeBodyElements () {\r\n    const header = document.createElement('header');\r\n    const div = document.createElement('div');\r\n    const footer = document.createElement('footer');\r\n\r\n    const siteName = document.createElement('h1');\r\n    const buttonDiv = document.createElement('div');\r\n\r\n    siteName.innerHTML = 'uRestaurant';\r\n\r\n    const homeButton = document.createElement('div');\r\n    const menuButton = document.createElement('div');\r\n    const contactButton = document.createElement('div');\r\n\r\n    homeButton.innerHTML = 'HOME';\r\n    menuButton.innerHTML = 'MENU';\r\n    contactButton.innerHTML = 'CONTACT';\r\n\r\n    buttonDiv.append(homeButton, menuButton, contactButton);\r\n\r\n    header.append(siteName, buttonDiv);\r\n\r\n    div.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.makeHomeElements)(), (0,_menu__WEBPACK_IMPORTED_MODULE_1__.makeMenuElements)(), (0,_contact__WEBPACK_IMPORTED_MODULE_2__.makeContactElements)());\r\n\r\n    const nameDiv = document.createElement('div');\r\n    const crDiv1 = document.createElement('div');\r\n    const crDiv2 = document.createElement('div');\r\n\r\n    nameDiv.innerHTML = `&copy;AimsDev`;\r\n\r\n    const crlink = document.createElement('a');\r\n    const crlink1 = document.createElement('a');\r\n    const crlink2 = document.createElement('a');\r\n    const crlink3 = document.createElement('a');\r\n\r\n    crlink.href = \"https://www.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_10724750.htm#query=nigerian%20food&position=0&from_view=keyword&track=ais\";\r\n    crlink.innerHTML = 'Image by KamranAydinov on Freepik';\r\n\r\n    crlink1.href = \"https://www.freepik.com/free-photo/dried-squid-baked-with-sweet-sour-sauce-asian-seafood-concept_8885190.htm#page=2&query=nigerian%20food&position=0&from_view=keyword&track=ais\";\r\n    crlink1.innerHTML = 'Image by jcomp on Freepik';\r\n\r\n    crlink2.href = \"https://www.freepik.com/free-photo/delicious-fried-chicken-plate_8167861.htm#page=2&query=nigerian%20food&position=2&from_view=keyword&track=ais\";\r\n    crlink2.innerHTML = 'Image by Racool_studio on Freepik';\r\n\r\n    crlink3.href = \"https://stock.adobe.com/ng/contributor/207827152/bassey?load_type=author&prev_url=detail\";\r\n    crlink3.innerHTML = 'Image by Bassey on Adobe Stock';\r\n\r\n    crDiv1.append(crlink, crlink1);\r\n    crDiv2.append(crlink2, crlink3);\r\n\r\n    footer.append(nameDiv, crDiv1, crDiv2);\r\n\r\n    document.getElementById('content').append(header, div, footer);\r\n    return { homeButton, menuButton, contactButton };\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
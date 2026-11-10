if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__ from "@rmwc/typography";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ({

/***/ 11:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m_: function() { return /* binding */ Tooltip; }
/* harmony export */ });
/* unused harmony exports CharacterCount, EditorContent, useEditor, EditorState, Text, EditorView, autocompletion, bracketMatching, closeBrackets, closeBracketsKeymap, completionKeymap, crosshairCursor, css, defaultHighlightStyle, defaultKeymap, drawSelection, dropCursor, foldGutter, foldKeymap, highlightActiveLine, highlightActiveLineGutter, highlightSelectionMatches, highlightSpecialChars, indentOnInput, javascript, keymap, lineNumbers, lintKeymap, rectangularSelection, searchKeymap, syntaxHighlighting, history, historyKeymap */
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module reactGenericDummy */var MOCK_RESULT=undefined;// @rmwc/tooltip
var Tooltip=MOCK_RESULT;// @tiptap/extensions
var CharacterCount=(/* unused pure expression or super */ null && (MOCK_RESULT));// @tiptap/react
var EditorContent=(/* unused pure expression or super */ null && (MOCK_RESULT));var useEditor=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/state
var EditorState=(/* unused pure expression or super */ null && (MOCK_RESULT));var Text=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/view
var EditorView=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/autocomplete
var autocompletion=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/language
var bracketMatching=(/* unused pure expression or super */ null && (MOCK_RESULT));var closeBrackets=(/* unused pure expression or super */ null && (MOCK_RESULT));var closeBracketsKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var completionKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var crosshairCursor=(/* unused pure expression or super */ null && (MOCK_RESULT));var css=(/* unused pure expression or super */ null && (MOCK_RESULT));var defaultHighlightStyle=(/* unused pure expression or super */ null && (MOCK_RESULT));var defaultKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var drawSelection=(/* unused pure expression or super */ null && (MOCK_RESULT));var dropCursor=(/* unused pure expression or super */ null && (MOCK_RESULT));var foldGutter=(/* unused pure expression or super */ null && (MOCK_RESULT));var foldKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var highlightActiveLine=(/* unused pure expression or super */ null && (MOCK_RESULT));var highlightActiveLineGutter=(/* unused pure expression or super */ null && (MOCK_RESULT));var highlightSelectionMatches=(/* unused pure expression or super */ null && (MOCK_RESULT));var highlightSpecialChars=(/* unused pure expression or super */ null && (MOCK_RESULT));var indentOnInput=(/* unused pure expression or super */ null && (MOCK_RESULT));var javascript=(/* unused pure expression or super */ null && (MOCK_RESULT));var keymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var lineNumbers=(/* unused pure expression or super */ null && (MOCK_RESULT));var lintKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var rectangularSelection=(/* unused pure expression or super */ null && (MOCK_RESULT));var searchKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));var syntaxHighlighting=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/commands
// NOTE: We need to alias the history export to avoid a name mangeling.
var optionalsHistory=(/* unused pure expression or super */ null && (MOCK_RESULT));var historyKeymap=(/* unused pure expression or super */ null && (MOCK_RESULT));

/***/ }),

/***/ 13:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Typography"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__.Typography; } });

/***/ }),

/***/ 1:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; } });

/***/ }),

/***/ 0:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; } });

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__webpack_require__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/

// EXTERNAL MODULE: ./src/shims/optionals.ts
var optionals = __webpack_require__(11);
// EXTERNAL MODULE: external "@rmwc/typography"
var typography_ = __webpack_require__(13);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/Tooltip.tsx
// -*- coding: utf-8 -*-
/** @module Tooltip *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var isDummy=!optionals/* Tooltip */.m_||Boolean(optionals/* Tooltip */.m_.isDummy);var Tooltip=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){if(isDummy)return/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"generic-tooltip",ref:reference,title:properties.value,children:properties.children});return/*#__PURE__*/(0,jsx_runtime_.jsx)(optionals/* Tooltip */.m_,_objectSpread(_objectSpread({overlay:/*#__PURE__*/(0,jsx_runtime_.jsx)(typography_.Typography,{use:"caption",children:properties.value}),ref:reference},properties.componentProperties),{},{children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"generic-tooltip",children:properties.children})}))});/* harmony default export */ var rmwc_Tooltip = (Tooltip);
;// ./src/components/Wrapper/WrapTooltip.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapTooltip *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
// endregion
var WrapTooltip_isDummy=!rmwc_Tooltip||Boolean(rmwc_Tooltip.isDummy);/**
 * Wraps given component with a tooltip component with given tooltip
 * configuration.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.value - Tooltip value.
 * @returns Wrapped given content.
 */var WrapTooltip=function WrapTooltip(_ref){var children=_ref.children,value=_ref.value;if(typeof value==="string")return/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Tooltip,{value:value,children:children});return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{children:children})};/* harmony default export */ var Wrapper_WrapTooltip = (WrapTooltip);
export { WrapTooltip, Wrapper_WrapTooltip as default, WrapTooltip_isDummy as isDummy };

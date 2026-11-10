if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__ from "@rmwc/theme";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__ from "@rmwc/typography";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; } });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["StrictMode"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.StrictMode; }, ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; } });

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Theme"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__.Theme; }, ["ThemeProvider"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__.ThemeProvider; } });

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Et: function() { return /* binding */ WrapTooltip; }
});

// UNUSED EXPORTS: default, isDummy

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
 */var WrapTooltip=function WrapTooltip(_ref){var children=_ref.children,value=_ref.value;if(typeof value==="string")return/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Tooltip,{value:value,children:children});return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{children:children})};/* harmony default export */ var Wrapper_WrapTooltip = ((/* unused pure expression or super */ null && (WrapTooltip)));

/***/ }),
/* 10 */,
/* 11 */
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
/* 12 */,
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Typography"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__.Typography; } });

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ WrapStrict; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-strict *//* !
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
/**
 * Generic strict wrapper component.
 * @param properties - Provided component properties.
 * @param properties.children - Components to wrap.
 * @param properties.strict - Indicates whether to wrap with strict indicating
 * component.
 * @returns React component.
 */var WrapStrict=function WrapStrict(_ref){var children=_ref.children,strict=_ref.strict;return strict?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,{children:children}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:children})};/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WrapStrict)));

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ WrapThemeProvider; }
/* harmony export */ });
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapThemeProvider *//* !
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
/**
 * Wraps a theme provider to given element if a configuration is provided.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.configuration - Potential theme provider configuration.
 * @param properties.wrap - Instead of injecting a div tag, wrap a child
 * component by merging the theme styles directly onto it. Useful when you
 * don't want to mess with layout.
 * @returns Wrapped content.
 */var WrapThemeProvider=function WrapThemeProvider(_ref){var children=_ref.children,configuration=_ref.configuration,wrap=_ref.wrap;return configuration?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider,{options:configuration,wrap:wrap!==false,children:children}):children};/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WrapThemeProvider)));

/***/ })
/******/ ]);
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
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Es: function() { return /* binding */ WrapConfigurations; },
/* harmony export */   zb: function() { return /* binding */ createWrapConfigurationsComponent; }
/* harmony export */ });
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _WrapStrict_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _WrapThemeProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _WrapTooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapConfigurations *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["strict","theme","themeConfiguration","tooltip","wrap"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _objectWithoutProperties(t,r){if(null==t)return{};var o,n,i=_objectWithoutPropertiesLoose(t,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],-1===r.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t};//  endregion
/**
 * Wraps a theme provider, strict wrapper and tooltip to given element if
 * corresponding configurations are provided.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.strict - Indicates whether to render in strict mode.
 * @param properties.themeConfiguration - Optional theme configurations.
 * @param properties.tooltip - Optional tooltip to show on hover.
 * @param properties.wrap - Instead of injecting a div tag, wrap a child
 * component by merging the theme styles directly onto it. Useful when you
 * don't want to mess with layout.
 * @returns Wrapped content.
 */var WrapConfigurations=function WrapConfigurations(_ref){var children=_ref.children,strict=_ref.strict,themeConfiguration=_ref.themeConfiguration,tooltip=_ref.tooltip,wrap=_ref.wrap;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_WrapStrict_js__WEBPACK_IMPORTED_MODULE_2__/* .WrapStrict */ .g,{strict:Boolean(strict),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_WrapTooltip_js__WEBPACK_IMPORTED_MODULE_4__/* .WrapTooltip */ .Et,{value:tooltip,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_WrapThemeProvider_js__WEBPACK_IMPORTED_MODULE_3__/* .WrapThemeProvider */ .R,{configuration:themeConfiguration,wrap:wrap,children:children})})})};/**
 * Component factory to dynamically create a wrapped component.
 * @param WrappedComponent - Component to wrap.
 * @param options - Options configure wrapping.
 * @param options.withReference - Indicates whether to add a mutable reference
 * to wrapping component.
 * @param options.withThemeWrapper - Indicates whether all theme configurations
 * should be provided.
 * @returns Created wrapped component.
 */function createWrapConfigurationsComponent(WrappedComponent,options){if(options===void 0){options={}}var component=function component(_ref2,reference){var strict=_ref2.strict,theme=_ref2.theme,themeConfiguration=_ref2.themeConfiguration,tooltip=_ref2.tooltip,wrap=_ref2.wrap,properties=_objectWithoutProperties(_ref2,_excluded);var wrapped=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(WrappedComponent,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},properties),options.withReference===false?{}:reference?{ref:reference}:{}),options.withThemeWrapper&&theme?{theme:theme}:{})));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(WrapConfigurations,{strict:strict,themeConfiguration:themeConfiguration,tooltip:tooltip,wrap:wrap,children:options.withThemeWrapper&&theme?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_0__.Theme,{use:theme,wrap:wrap,children:wrapped}):wrapped})};return options.withReference?/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(component):component}/* harmony default export */ __webpack_exports__.Ay = (WrapConfigurations);
var __webpack_exports__default = __webpack_exports__.Ay;
export { WrapConfigurations, createWrapConfigurationsComponent, __webpack_exports__default as default };

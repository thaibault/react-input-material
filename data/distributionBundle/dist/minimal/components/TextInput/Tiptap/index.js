if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__ from "@rmwc/typography";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
import { default as __WEBPACK_EXTERNAL_MODULE_react_generic_dummy_34225edd_default__ } from "react-generic-dummy";
import { useMemorizedValue as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__, useReferenceState as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__ } from "react-generic-tools";
import { NOOP as __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__ } from "clientnode";
import { MDCTextField as __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__ } from "@material/textfield";
import { IconButton as __WEBPACK_EXTERNAL_MODULE__rmwc_icon_button_347be2b6_IconButton__ } from "@rmwc/icon-button";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; }, ["jsxs"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsxs; } });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.createContext; }, ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; }, ["useContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useContext; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useId"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useId; }, ["useImperativeHandle"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle; } });

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ Wrapper_WrapTooltip; }
});

// UNUSED EXPORTS: WrapTooltip, isDummy

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

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: function() { return /* binding */ EditorContent; },
/* harmony export */   hG: function() { return /* binding */ useEditor; },
/* harmony export */   m_: function() { return /* binding */ Tooltip; },
/* harmony export */   n4: function() { return /* binding */ CharacterCount; }
/* harmony export */ });
/* unused harmony exports EditorState, Text, EditorView, autocompletion, bracketMatching, closeBrackets, closeBracketsKeymap, completionKeymap, crosshairCursor, css, defaultHighlightStyle, defaultKeymap, drawSelection, dropCursor, foldGutter, foldKeymap, highlightActiveLine, highlightActiveLineGutter, highlightSelectionMatches, highlightSpecialChars, indentOnInput, javascript, keymap, lineNumbers, lintKeymap, rectangularSelection, searchKeymap, syntaxHighlighting, history, historyKeymap */
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module reactGenericDummy */var MOCK_RESULT=undefined;// @rmwc/tooltip
var Tooltip=MOCK_RESULT;// @tiptap/extensions
var CharacterCount=MOCK_RESULT;// @tiptap/react
var EditorContent=MOCK_RESULT;var useEditor=MOCK_RESULT;// @codemirror/state
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

// EXTERNAL MODULE: ./src/shims/optionals.ts
var optionals = __webpack_require__(11);
;// external "react-generic-dummy"

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
;// external "react-generic-tools"

;// external "clientnode"

;// external "@material/textfield"

;// ./src/implementations/rmwc/TextArea/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"textInput":"text-input","codeEditor":"code-editor","mdcTextFieldDisabled":"mdc-text-field--disabled","cmEditor":"cm-editor","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","mdcIconButtonChecked":"mdc-icon-button--checked","mdcTextFieldCharacterCounter":"mdc-text-field-character-counter","mdcTextFieldWithInternalCounter":"mdc-text-field--with-internal-counter"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/TextArea/index.tsx
// -*- coding: utf-8 -*-
/** @module TextArea *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var OUTLINED=false;var TextArea=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$id,_properties$className,_properties$component,_properties$component2,_properties$helpText;var defaultID=(0,external_react_.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;var classNamePrefix=(_properties$className=properties.classNamePrefix)!==null&&_properties$className!==void 0?_properties$className:"text-area";var _useReferenceState=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];var _useReferenceState3=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),materialTextFieldReference=_useReferenceState4[0],setMaterialTextFieldReference=_useReferenceState4[1];var _useReferenceState5=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),labelReference=_useReferenceState6[0],setLabelReference=_useReferenceState6[1];var _useReferenceState7=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState8=_slicedToArray(_useReferenceState7,2),foundationReference=_useReferenceState8[0],setFoundationReference=_useReferenceState8[1];(0,external_react_.useImperativeHandle)(reference,function(){return{foundation:foundationReference,input:inputReference,label:labelReference,materialTextField:materialTextFieldReference}},[foundationReference,inputReference,labelReference,materialTextFieldReference]);(0,external_react_.useEffect)(function(){if(labelReference){var _materialTextFieldReference=new __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__(labelReference);setMaterialTextFieldReference(_materialTextFieldReference);setFoundationReference(_materialTextFieldReference.getDefaultFoundation());if(typeof properties.value==="string"){foundationReference===null||foundationReference===void 0||foundationReference.setValue(properties.value);_materialTextFieldReference.value=properties.value}if(typeof properties.disabled==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setDisabled(properties.disabled);_materialTextFieldReference.disabled=properties.disabled}if(typeof properties.invalid==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setValid(!properties.invalid);_materialTextFieldReference.valid=!properties.invalid}if(typeof properties.required==="boolean")_materialTextFieldReference.required=properties.required;foundationReference===null||foundationReference===void 0||foundationReference.setUseNativeValidation(false);return function(){_materialTextFieldReference.destroy()}}},[labelReference,properties.value,properties.disabled,properties.invalid,properties.required,properties.minimumLength,properties.maximumLength]);/*
       NOTE: Applying the event listeners declaratively do not work to observe
       events triggered by advanced editors manually.
    */(0,external_react_.useEffect)(function(){var onInput=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we stay in focus state when
                        do clearing the textarea's input value.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.autoCompleteFocus()})}:__WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__;inputReference===null||inputReference===void 0||inputReference.addEventListener("input",onInput);var onFocus=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we maintain focus state when
                        focusing the advanced editor.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.activateFocus()})}:__WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__;inputReference===null||inputReference===void 0||inputReference.addEventListener("focus",onFocus);return function(){inputReference===null||inputReference===void 0||inputReference.removeEventListener("input",onInput);inputReference===null||inputReference===void 0||inputReference.removeEventListener("focus",onFocus)}},[foundationReference,inputReference,properties.children]);// NOTE: Character count is only supported if maximum length is given.
var isMaximumLength=typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength!==Infinity&&properties.maximumLength>=0;var editorContent=/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("textarea",_objectSpread({ref:setInputReference,id:id,name:properties.name,disabled:properties.disabled,className:"mdc-text-field__input",style:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__(properties.children?_objectSpread({visibility:"hidden",position:"absolute"},properties.styles):properties.styles,properties.styles),rows:properties.rows,"aria-labelledby":"".concat(id,"-label"),"aria-controls":"".concat(id,"-helper"),"aria-describedby":"".concat(id,"-helper"),readOnly:Boolean(properties.children),value:properties.value,minLength:properties.minimumLength,maxLength:properties.maximumLength,onChange:properties.onChange,onClick:properties.onClick,onBlur:properties.onBlur,onFocus:properties.onFocus,onKeyUp:properties.onKeyUp,onKeyDown:properties.onKeyDown},properties.domNodeProperties)),properties.children,properties.barContentSlot?/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"".concat(classNamePrefix,"__bar"),children:[properties.barContentSlot,properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]}):properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]});var helpText=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__(_typeof(properties.helpText)==="object"?properties.helpText:{children:properties.helpText},properties.helpText);return/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("label",{ref:setLabelReference,onClick:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__(function(event){if(properties.onLabelClick)properties.onLabelClick(event)},properties.onLabelClick),className:[classNamePrefix,"mdc-text-field","mdc-text-field--textarea"].concat(properties.value===""?"mdc-text-field--textarea":"".concat(classNamePrefix,"--has-content")).concat(properties.disabled?"mdc-text-field--disabled":[])/*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */.concat(OUTLINED?"mdc-text-field--outlined":"mdc-text-field--filled")/*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */.concat(properties.characterCount&&isMaximumLength?"mdc-text-field--with-internal-counter":[]).concat(properties.invalid?"mdc-text-field--invalid":[]).join(" "),children:[((_properties$component=properties.componentProperties)===null||_properties$component===void 0?void 0:_properties$component.ripple)!==false&&!properties.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__ripple"}):"",/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-floating-label",id:"".concat(id,"-label"),children:properties.label}),properties.resizeable?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__resizer",children:editorContent}):editorContent,((_properties$component2=properties.componentProperties)===null||_properties$component2===void 0?void 0:_properties$component2.ripple)!==false?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-line-ripple"}):""]}),helpText.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-helper-line",children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:["mdc-text-field-helper-text"].concat(helpText.persistent?"mdc-text-field-helper-text--persistent":[]).join(" "),id:"".concat(id,"-helper"),children:(_properties$helpText=properties.helpText)!==null&&_properties$helpText!==void 0&&_properties$helpText.children?properties.helpText.children:properties.helpText})}):""]})})// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;TextArea.CSS_CLASS_NAMES=CSS_CLASS_NAMES;/* harmony default export */ var rmwc_TextArea = (TextArea);
;// ./src/components/TextInput/InputEventMapperWrapper/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
function InputEventMapperWrapper_typeof(o){"@babel/helpers - typeof";return InputEventMapperWrapper_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},InputEventMapperWrapper_typeof(o)}function InputEventMapperWrapper_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function InputEventMapperWrapper_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?InputEventMapperWrapper_ownKeys(Object(o),!0).forEach(function(t){InputEventMapperWrapper_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):InputEventMapperWrapper_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function InputEventMapperWrapper_defineProperty(r,t,o){return(t=InputEventMapperWrapper_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function InputEventMapperWrapper_toPropertyKey(r){var o=InputEventMapperWrapper_toPrimitive(r,"string");return"symbol"==InputEventMapperWrapper_typeof(o)?o:o+""}function InputEventMapperWrapper_toPrimitive(t,e){if("object"!=InputEventMapperWrapper_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=InputEventMapperWrapper_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function InputEventMapperWrapper_slicedToArray(e,i){return InputEventMapperWrapper_iterableToArrayLimit(e,i)||InputEventMapperWrapper_unsupportedIterableToArray(e,i)||InputEventMapperWrapper_nonIterableRest()}function InputEventMapperWrapper_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputEventMapperWrapper_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return InputEventMapperWrapper_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?InputEventMapperWrapper_arrayLikeToArray(t,e):void 0}}function InputEventMapperWrapper_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function InputEventMapperWrapper_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Index=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _useReferenceState=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState2=InputEventMapperWrapper_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];(0,external_react_.useImperativeHandle)(reference,function(){return{input:inputReference,/*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */eventMapper:{blur:function blur(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("blur");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},focus:function focus(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("focus");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},input:function input(value,event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("input");syntheticEvent.detail=event;inputReference.input.value=String(value);inputReference.input.dispatchEvent(syntheticEvent)}}}}},[inputReference,inputReference===null||inputReference===void 0?void 0:inputReference.input]);return/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_TextArea,InputEventMapperWrapper_objectSpread(InputEventMapperWrapper_objectSpread({ref:setInputReference},properties),{},{children:properties.children}))});/* harmony default export */ var InputEventMapperWrapper = (Index);
;// ./src/components/TextInput/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TextInput_style_module = ({"textInput":"text-input","textInputCodeEditorButton":"text-input__code-editor-button","textInputRichtextEditorButton":"text-input__richtext-editor-button","textInputSuggestions":"text-input__suggestions","textInputSuggestionsPending":"text-input__suggestions--pending","textInputSuggestionsSuggestion":"text-input__suggestions__suggestion","textInputSuggestionsSuggestionMark":"text-input__suggestions__suggestion__mark","codeEditor":"code-editor","cmContent":"cm-content","cmActiveLine":"cm-activeLine","cmGutters":"cm-gutters","cmActiveLineGutter":"cm-activeLineGutter","cmFocused":"cm-focused","codeEditorHasContent":"code-editor--has-content","codeEditorView":"code-editor__view","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","richtextEditorView":"richtext-editor__view","tiptap":"tiptap"});
;// external "@rmwc/icon-button"

;// ./src/implementations/rmwc/IconButton.tsx
// -*- coding: utf-8 -*-
/** @module IconButton *//* !
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
function IconButton_typeof(o){"@babel/helpers - typeof";return IconButton_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},IconButton_typeof(o)}function IconButton_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function IconButton_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?IconButton_ownKeys(Object(o),!0).forEach(function(t){IconButton_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):IconButton_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function IconButton_defineProperty(r,t,o){return(t=IconButton_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function IconButton_toPropertyKey(r){var o=IconButton_toPrimitive(r,"string");return"symbol"==IconButton_typeof(o)?o:o+""}function IconButton_toPrimitive(t,e){if("object"!=IconButton_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=IconButton_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function IconButton_slicedToArray(e,i){return IconButton_iterableToArrayLimit(e,i)||IconButton_unsupportedIterableToArray(e,i)||IconButton_nonIterableRest()}function IconButton_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function IconButton_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return IconButton_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?IconButton_arrayLikeToArray(t,e):void 0}}function IconButton_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function IconButton_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var IconButton=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$size,_properties$className,_properties$component;var _useReferenceState=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState2=IconButton_slicedToArray(_useReferenceState,2),baseReference=_useReferenceState2[0],setBaseReference=_useReferenceState2[1];var _useReferenceState3=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState4=IconButton_slicedToArray(_useReferenceState3,2),foundationReference=_useReferenceState4[0],setFoundationReference=_useReferenceState4[1];(0,external_react_.useImperativeHandle)(reference,function(){return{base:baseReference,foundation:foundationReference}},[baseReference,foundationReference]);var size=(_properties$size=properties.size)===null||_properties$size===void 0?void 0:_properties$size.replace("extra-small","xsmall").replace("extra-large","xlarge");var fallbackComponentProperties=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__({});return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_icon_button_347be2b6_IconButton__,IconButton_objectSpread({checked:properties.value,disabled:properties.disabled,className:(_properties$className=properties.classNames)===null||_properties$className===void 0?void 0:_properties$className.join(" "),style:properties.styles,icon:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__({icon:properties.icon,size:size,strategy:properties.strategy},properties.icon,size,properties.strategy),onIcon:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__({icon:properties.onIcon||properties.icon,size:size,strategy:properties.strategy},properties.onIcon,properties.icon,size,properties.strategy),onClick:properties.onClick,onChange:properties.onChange,ref:setBaseReference,foundationRef:setFoundationReference},(_properties$component=properties.componentProperties)!==null&&_properties$component!==void 0?_properties$component:fallbackComponentProperties))});/* harmony default export */ var rmwc_IconButton = (IconButton);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapTooltip.tsx + 1 modules
var WrapTooltip = __webpack_require__(9);
;// ./src/components/TextInput/Tiptap/MenuBar.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
var EditorContext=/*#__PURE__*/(0,external_react_.createContext)(null);var Button=function Button(_ref){var _ref2;var action=_ref.action,activeIndicator=_ref.activeIndicator,checkedIconName=_ref.checkedIconName,enabledIndicator=_ref.enabledIndicator,iconName=_ref.iconName,label=_ref.label;var editor=(0,external_react_.useContext)(EditorContext);if(!editor)return null;var enabled=true;if(enabledIndicator)enabled=enabledIndicator(editor.can().chain().focus()).run();else if(enabledIndicator!==null)enabled=action(editor.can().chain().focus()).run();var checked=Boolean(activeIndicator&&editor.isActive(activeIndicator));var description=(_ref2=label!==null&&label!==void 0?label:activeIndicator)!==null&&_ref2!==void 0?_ref2:iconName;return/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapTooltip/* default */.Ay,{value:description,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_IconButton,{value:checked,disabled:!enabled,classNames:checked?["mdc-icon-button--checked"]:[],onClick:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__(function(event){event.stopPropagation();action(editor.chain().focus()).run()},action,editor),size:"extra-small",icon:iconName,onIcon:checkedIconName!==null&&checkedIconName!==void 0?checkedIconName:iconName,domNodeProperties:{"aria-label":description}})})};var MenuBar_Index=function Index(_ref3){var editor=_ref3.editor;if(!editor)return null;return/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"richtext-editor-menu-bar",children:/*#__PURE__*/(0,jsx_runtime_.jsxs)(EditorContext.Provider,{value:editor,children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__history",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.undo()},iconName:"undo"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.redo()},iconName:"redo"})]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__marks",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.unsetAllMarks()},enabledIndicator:null,iconName:"format_clear",label:"clear formatting"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleBold()},activeIndicator:"bold",iconName:"format_bold"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleItalic()},activeIndicator:"italic",iconName:"format_italic"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleStrike()},activeIndicator:"strike",iconName:"format_strikethrough",label:"strikethrough"})]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__nodes",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.clearNodes()},enabledIndicator:null,iconName:"layers_clear",label:"clear markup"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleHeading({level:2})},enabledIndicator:null,activeIndicator:"heading",iconName:"title",label:"headline"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.setParagraph()},enabledIndicator:null,activeIndicator:"paragraph",iconName:"segment"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleBulletList()},enabledIndicator:null,activeIndicator:"bulletList",iconName:"format_list_bulleted",label:"Unordered List"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleOrderedList()},enabledIndicator:null,activeIndicator:"orderedList",iconName:"format_list_numbered",label:"Ordered List"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.setHardBreak()},enabledIndicator:null,iconName:"insert_page_break",label:"Hard break"})]})]})})};/* harmony default export */ var MenuBar = (MenuBar_Index);
;// ./src/components/TextInput/Tiptap/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
function Tiptap_typeof(o){"@babel/helpers - typeof";return Tiptap_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Tiptap_typeof(o)}function Tiptap_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Tiptap_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Tiptap_ownKeys(Object(o),!0).forEach(function(t){Tiptap_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):Tiptap_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function Tiptap_defineProperty(r,t,o){return(t=Tiptap_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function Tiptap_toPropertyKey(r){var o=Tiptap_toPrimitive(r,"string");return"symbol"==Tiptap_typeof(o)?o:o+""}function Tiptap_toPrimitive(t,e){if("object"!=Tiptap_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=Tiptap_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||Tiptap_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return Tiptap_arrayLikeToArray(a)}function Tiptap_slicedToArray(e,i){return Tiptap_iterableToArrayLimit(e,i)||Tiptap_unsupportedIterableToArray(e,i)||Tiptap_nonIterableRest()}function Tiptap_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Tiptap_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return Tiptap_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Tiptap_arrayLikeToArray(t,e):void 0}}function Tiptap_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function Tiptap_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Tiptap_CSS_CLASS_NAMES=TextInput_style_module;var VIEW_CONTENT_OFFSET_IN_PX=8;var Tiptap_Index=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$value,_properties$editor,_properties$editor2,_properties$editor3,_inputEventMapperRefe;if(!optionals/* useEditor */.hG||__WEBPACK_EXTERNAL_MODULE_react_generic_dummy_34225edd_default__.isDummy)throw Error("Missing tiptap dependencies.");var value=(_properties$value=properties.value)!==null&&_properties$value!==void 0?_properties$value:"";var _useReferenceState=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState2=Tiptap_slicedToArray(_useReferenceState,2),inputEventMapperReference=_useReferenceState2[0],setInputEventMapperReference=_useReferenceState2[1];var _useReferenceState3=__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useReferenceState__(null),_useReferenceState4=Tiptap_slicedToArray(_useReferenceState3,2),editorViewReference=_useReferenceState4[0],setEditorViewReference=_useReferenceState4[1];(0,external_react_.useImperativeHandle)(reference,function(){return{input:inputEventMapperReference,editorViewReference:editorViewReference}},[inputEventMapperReference,editorViewReference]);var extensions=((_properties$editor=properties.editor)===null||_properties$editor===void 0?void 0:_properties$editor.extensions)||[].concat(_toConsumableArray(properties.maximumLength===undefined?[]:[optionals/* CharacterCount */.n4.configure({limit:properties.maximumLength})]),[__WEBPACK_EXTERNAL_MODULE_react_generic_dummy_34225edd_default__.configure(((_properties$editor2=properties.editor)===null||_properties$editor2===void 0?void 0:_properties$editor2.starterKitOptions)||{})]);var editor=(0,optionals/* useEditor */.hG)(Tiptap_objectSpread({extensions:extensions,editable:!properties.disabled,content:String(value),onBlur:function onBlur(editorEvent){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.blur(editorEvent);if(properties.onBlur)properties.onBlur(editorEvent)},onFocus:function onFocus(editorEvent){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.focus(editorEvent);if(properties.onFocus)properties.onFocus(editorEvent)},onUpdate:function onUpdate(editorEvent){var html=editorEvent.editor.getHTML();inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.input(html==="<p></p>"?"":html,editorEvent);if(properties.onChange)properties.onChange(html,{contentTree:editorEvent.editor.getJSON()})}},((_properties$editor3=properties.editor)===null||_properties$editor3===void 0?void 0:_properties$editor3.options)||{}));var htmlContent=editor.getHTML();var clientHeight=inputEventMapperReference===null||inputEventMapperReference===void 0||(_inputEventMapperRefe=inputEventMapperReference.input)===null||_inputEventMapperRefe===void 0||(_inputEventMapperRefe=_inputEventMapperRefe.input)===null||_inputEventMapperRefe===void 0?void 0:_inputEventMapperRefe.clientHeight;(0,external_react_.useEffect)(function(){if(editorViewReference&&clientHeight)editorViewReference.style.height=String(clientHeight+VIEW_CONTENT_OFFSET_IN_PX)+"px"},[editorViewReference,clientHeight]);return/*#__PURE__*/(0,jsx_runtime_.jsx)(InputEventMapperWrapper,Tiptap_objectSpread(Tiptap_objectSpread({},properties),{},{ref:setInputEventMapperReference,barContentSlot:/*#__PURE__*/(0,jsx_runtime_.jsx)(MenuBar,{editor:editor}),value:htmlContent==="<p></p>"?"":htmlContent,classNamePrefix:Tiptap_CSS_CLASS_NAMES.richtextEditor,onLabelClick:__WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958_useMemorizedValue__(function(){editor.chain().focus().run()},editor),children:/*#__PURE__*/(0,jsx_runtime_.jsx)(optionals/* EditorContent */.$Z,{className:"".concat(Tiptap_CSS_CLASS_NAMES.richtextEditorView," mdc-text-field__input"),editor:editor,innerRef:setEditorViewReference})}))});/* harmony default export */ var Tiptap = (Tiptap_Index);
export { Tiptap_CSS_CLASS_NAMES as CSS_CLASS_NAMES, Tiptap_Index as Index, VIEW_CONTENT_OFFSET_IN_PX, Tiptap as default };

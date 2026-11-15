if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { MDCTextField as __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__ } from "@material/textfield";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode__ from "clientnode";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_push_js_baa3ea94__ from "core-js/modules/es.array.push.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_constructor_js_833f4df9__ from "core-js/modules/es.iterator.constructor.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_filter_js_abae28b4__ from "core-js/modules/es.iterator.filter.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_for_each_js_2628f2dd__ from "core-js/modules/es.iterator.for-each.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__ from "react-generic-tools";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ({

/***/ 47:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Index */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _implementations_TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Index=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function(properties,reference){var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_5__.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];(0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(reference,function(){return{input:inputReference,/*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */eventMapper:{blur:function blur(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("blur");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},focus:function focus(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("focus");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},input:function input(value,event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("input");syntheticEvent.detail=event;inputReference.input.value=String(value);inputReference.input.dispatchEvent(syntheticEvent)}}}}},[inputReference,inputReference===null||inputReference===void 0?void 0:inputReference.input]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_implementations_TextArea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay,_objectSpread(_objectSpread({ref:setInputReference},properties),{},{children:properties.children}))});/* harmony default export */ __webpack_exports__.A = (Index);

/***/ }),

/***/ 25:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ rmwc_TextArea; }
});

// UNUSED EXPORTS: CSS_CLASS_NAMES, OUTLINED, TextArea

// EXTERNAL MODULE: external "core-js/modules/es.array.push.js"
var es_array_push_js_ = __webpack_require__(1);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.constructor.js"
var es_iterator_constructor_js_ = __webpack_require__(0);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.filter.js"
var es_iterator_filter_js_ = __webpack_require__(2);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.for-each.js"
var es_iterator_for_each_js_ = __webpack_require__(3);
// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(8);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(6);
;// external "@material/textfield"

;// ./src/implementations/rmwc/TextArea/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"textInput":"text-input","codeEditor":"code-editor","mdcTextFieldDisabled":"mdc-text-field--disabled","cmEditor":"cm-editor","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","mdcIconButtonChecked":"mdc-icon-button--checked","mdcTextFieldCharacterCounter":"mdc-text-field-character-counter","mdcTextFieldWithInternalCounter":"mdc-text-field--with-internal-counter"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4);
;// ./src/implementations/rmwc/TextArea/index.tsx
// -*- coding: utf-8 -*-
/** @module TextArea *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var OUTLINED=false;var TextArea=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$id,_properties$className,_properties$component,_properties$component2,_properties$helpText;var defaultID=(0,external_react_.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;var classNamePrefix=(_properties$className=properties.classNamePrefix)!==null&&_properties$className!==void 0?_properties$className:"text-area";var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),materialTextFieldReference=_useReferenceState4[0],setMaterialTextFieldReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),labelReference=_useReferenceState6[0],setLabelReference=_useReferenceState6[1];var _useReferenceState7=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState8=_slicedToArray(_useReferenceState7,2),foundationReference=_useReferenceState8[0],setFoundationReference=_useReferenceState8[1];(0,external_react_.useImperativeHandle)(reference,function(){return{foundation:foundationReference,input:inputReference,label:labelReference,materialTextField:materialTextFieldReference}},[foundationReference,inputReference,labelReference,materialTextFieldReference]);(0,external_react_.useEffect)(function(){if(labelReference){var _materialTextFieldReference=new __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__(labelReference);setMaterialTextFieldReference(_materialTextFieldReference);setFoundationReference(_materialTextFieldReference.getDefaultFoundation());if(typeof properties.value==="string"){foundationReference===null||foundationReference===void 0||foundationReference.setValue(properties.value);_materialTextFieldReference.value=properties.value}if(typeof properties.disabled==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setDisabled(properties.disabled);_materialTextFieldReference.disabled=properties.disabled}if(typeof properties.invalid==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setValid(!properties.invalid);_materialTextFieldReference.valid=!properties.invalid}if(typeof properties.required==="boolean")_materialTextFieldReference.required=properties.required;foundationReference===null||foundationReference===void 0||foundationReference.setUseNativeValidation(false);return function(){_materialTextFieldReference.destroy()}}},[labelReference,properties.value,properties.disabled,properties.invalid,properties.required,properties.minimumLength,properties.maximumLength]);/*
       NOTE: Applying the event listeners declaratively do not work to observe
       events triggered by advanced editors manually.
    */(0,external_react_.useEffect)(function(){var onInput=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we stay in focus state when
                        do clearing the textarea's input value.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.autoCompleteFocus()})}:external_clientnode_.NOOP;inputReference===null||inputReference===void 0||inputReference.addEventListener("input",onInput);var onFocus=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we maintain focus state when
                        focusing the advanced editor.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.activateFocus()})}:external_clientnode_.NOOP;inputReference===null||inputReference===void 0||inputReference.addEventListener("focus",onFocus);return function(){inputReference===null||inputReference===void 0||inputReference.removeEventListener("input",onInput);inputReference===null||inputReference===void 0||inputReference.removeEventListener("focus",onFocus)}},[foundationReference,inputReference,properties.children]);// NOTE: Character count is only supported if maximum length is given.
var isMaximumLength=typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength!==Infinity&&properties.maximumLength>=0;var editorContent=/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("textarea",_objectSpread({ref:setInputReference,id:id,name:properties.name,disabled:properties.disabled,className:"mdc-text-field__input",style:(0,external_react_generic_tools_.useMemorizedValue)(properties.children?_objectSpread({visibility:"hidden",position:"absolute"},properties.styles):properties.styles,properties.styles),rows:properties.rows,"aria-labelledby":"".concat(id,"-label"),"aria-controls":"".concat(id,"-helper"),"aria-describedby":"".concat(id,"-helper"),readOnly:Boolean(properties.children),value:properties.value,minLength:properties.minimumLength,maxLength:properties.maximumLength,onChange:properties.onChange,onClick:properties.onClick,onBlur:properties.onBlur,onFocus:properties.onFocus,onKeyUp:properties.onKeyUp,onKeyDown:properties.onKeyDown},properties.domNodeProperties)),properties.children,properties.barContentSlot?/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"".concat(classNamePrefix,"__bar"),children:[properties.barContentSlot,properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]}):properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]});var helpText=(0,external_react_generic_tools_.useMemorizedValue)(_typeof(properties.helpText)==="object"?properties.helpText:{children:properties.helpText},properties.helpText);return/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("label",{ref:setLabelReference,onClick:(0,external_react_generic_tools_.useMemorizedValue)(function(event){if(properties.onLabelClick)properties.onLabelClick(event)},properties.onLabelClick),className:[classNamePrefix,"mdc-text-field","mdc-text-field--textarea"].concat(properties.value===""?"mdc-text-field--textarea":"".concat(classNamePrefix,"--has-content")).concat(properties.disabled?"mdc-text-field--disabled":[])/*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */.concat(OUTLINED?"mdc-text-field--outlined":"mdc-text-field--filled")/*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */.concat(properties.characterCount&&isMaximumLength?"mdc-text-field--with-internal-counter":[]).concat(properties.invalid?"mdc-text-field--invalid":[]).join(" "),children:[((_properties$component=properties.componentProperties)===null||_properties$component===void 0?void 0:_properties$component.ripple)!==false&&!properties.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__ripple"}):"",/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-floating-label",id:"".concat(id,"-label"),children:properties.label}),properties.resizeable?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__resizer",children:editorContent}):editorContent,((_properties$component2=properties.componentProperties)===null||_properties$component2===void 0?void 0:_properties$component2.ripple)!==false?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-line-ripple"}):""]}),helpText.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-helper-line",children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:["mdc-text-field-helper-text"].concat(helpText.persistent?"mdc-text-field-helper-text--persistent":[]).join(" "),id:"".concat(id,"-helper"),children:(_properties$helpText=properties.helpText)!==null&&_properties$helpText!==void 0&&_properties$helpText.children?properties.helpText.children:properties.helpText})}):""]})})// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;TextArea.CSS_CLASS_NAMES=CSS_CLASS_NAMES;/* harmony default export */ var rmwc_TextArea = (TextArea);

/***/ }),

/***/ 15:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $K: function() { return /* binding */ lineNumbers; },
/* harmony export */   $t: function() { return /* binding */ EditorState; },
/* harmony export */   $w: function() { return /* binding */ lintKeymap; },
/* harmony export */   A: function() { return /* binding */ dropCursor; },
/* harmony export */   AH: function() { return /* binding */ css; },
/* harmony export */   Bc: function() { return /* binding */ closeBracketsKeymap; },
/* harmony export */   D4: function() { return /* binding */ rectangularSelection; },
/* harmony export */   EY: function() { return /* binding */ Text; },
/* harmony export */   Eo: function() { return /* binding */ searchKeymap; },
/* harmony export */   HJ: function() { return /* binding */ crosshairCursor; },
/* harmony export */   Lv: function() { return /* binding */ foldGutter; },
/* harmony export */   Lz: function() { return /* binding */ EditorView; },
/* harmony export */   N$: function() { return /* binding */ highlightSpecialChars; },
/* harmony export */   OO: function() { return /* binding */ completionKeymap; },
/* harmony export */   Q2: function() { return /* binding */ javascript; },
/* harmony export */   SG: function() { return /* binding */ bracketMatching; },
/* harmony export */   VH: function() { return /* binding */ drawSelection; },
/* harmony export */   WD: function() { return /* binding */ indentOnInput; },
/* harmony export */   Wu: function() { return /* binding */ highlightActiveLineGutter; },
/* harmony export */   Zt: function() { return /* binding */ defaultHighlightStyle; },
/* harmony export */   b6: function() { return /* binding */ optionalsHistory; },
/* harmony export */   cL: function() { return /* binding */ historyKeymap; },
/* harmony export */   dz: function() { return /* binding */ highlightActiveLine; },
/* harmony export */   f7: function() { return /* binding */ foldKeymap; },
/* harmony export */   gN: function() { return /* binding */ highlightSelectionMatches; },
/* harmony export */   pw: function() { return /* binding */ defaultKeymap; },
/* harmony export */   w4: function() { return /* binding */ keymap; },
/* harmony export */   wm: function() { return /* binding */ closeBrackets; },
/* harmony export */   y9: function() { return /* binding */ syntaxHighlighting; },
/* harmony export */   yU: function() { return /* binding */ autocompletion; }
/* harmony export */ });
/* unused harmony exports Tooltip, CharacterCount, EditorContent, useEditor */
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module reactGenericDummy */var MOCK_RESULT=undefined;// @rmwc/tooltip
var Tooltip=(/* unused pure expression or super */ null && (MOCK_RESULT));// @tiptap/extensions
var CharacterCount=(/* unused pure expression or super */ null && (MOCK_RESULT));// @tiptap/react
var EditorContent=(/* unused pure expression or super */ null && (MOCK_RESULT));var useEditor=(/* unused pure expression or super */ null && (MOCK_RESULT));// @codemirror/state
var EditorState=MOCK_RESULT;var Text=MOCK_RESULT;// @codemirror/view
var EditorView=MOCK_RESULT;// @codemirror/autocomplete
var autocompletion=MOCK_RESULT;// @codemirror/language
var bracketMatching=MOCK_RESULT;var closeBrackets=MOCK_RESULT;var closeBracketsKeymap=MOCK_RESULT;var completionKeymap=MOCK_RESULT;var crosshairCursor=MOCK_RESULT;var css=MOCK_RESULT;var defaultHighlightStyle=MOCK_RESULT;var defaultKeymap=MOCK_RESULT;var drawSelection=MOCK_RESULT;var dropCursor=MOCK_RESULT;var foldGutter=MOCK_RESULT;var foldKeymap=MOCK_RESULT;var highlightActiveLine=MOCK_RESULT;var highlightActiveLineGutter=MOCK_RESULT;var highlightSelectionMatches=MOCK_RESULT;var highlightSpecialChars=MOCK_RESULT;var indentOnInput=MOCK_RESULT;var javascript=MOCK_RESULT;var keymap=MOCK_RESULT;var lineNumbers=MOCK_RESULT;var lintKeymap=MOCK_RESULT;var rectangularSelection=MOCK_RESULT;var searchKeymap=MOCK_RESULT;var syntaxHighlighting=MOCK_RESULT;// @codemirror/commands
// NOTE: We need to alias the history export to avoid a name mangeling.
var optionalsHistory=MOCK_RESULT;var historyKeymap=MOCK_RESULT;

/***/ }),

/***/ 27:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__.A = ({"textInput":"text-input","textInputCodeEditorButton":"text-input__code-editor-button","textInputRichtextEditorButton":"text-input__richtext-editor-button","textInputSuggestions":"text-input__suggestions","textInputSuggestionsPending":"text-input__suggestions--pending","textInputSuggestionsSuggestion":"text-input__suggestions__suggestion","textInputSuggestionsSuggestionMark":"text-input__suggestions__suggestion__mark","codeEditor":"code-editor","cmContent":"cm-content","cmActiveLine":"cm-activeLine","cmGutters":"cm-gutters","cmActiveLineGutter":"cm-activeLineGutter","cmFocused":"cm-focused","codeEditorHasContent":"code-editor--has-content","codeEditorView":"code-editor__view","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","richtextEditorView":"richtext-editor__view","tiptap":"tiptap"});

/***/ }),

/***/ 8:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["NOOP"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.NOOP; } });

/***/ }),

/***/ 11:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 1:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 0:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 2:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 3:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 5:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useId"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useId; }, ["useImperativeHandle"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle; }, ["useRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useRef; } });

/***/ }),

/***/ 6:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["useMemorizedValue"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__.useMemorizedValue; }, ["useReferenceState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__.useReferenceState; } });

/***/ }),

/***/ 4:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; }, ["jsxs"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsxs; } });

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
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASIC_EXTENSIONS: function() { return /* binding */ BASIC_EXTENSIONS; },
/* harmony export */   BASIC_KEYMAPS: function() { return /* binding */ BASIC_KEYMAPS; },
/* harmony export */   CSS_CLASS_NAMES: function() { return /* binding */ CSS_CLASS_NAMES; },
/* harmony export */   Index: function() { return /* binding */ Index; },
/* harmony export */   determineMode: function() { return /* binding */ determineMode; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _InputEventMapperWrapper_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};// endregion
var BASIC_KEYMAPS=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .autocompletion */ .yU?[].concat(_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .closeBracketsKeymap */ .Bc),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .defaultKeymap */ .pw),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .searchKeymap */ .Eo),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .historyKeymap */ .cL),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .foldKeymap */ .f7),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .completionKeymap */ .OO),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .lintKeymap */ .$w)):[];var BASIC_EXTENSIONS=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorView */ .Lz?[(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .lineNumbers */ .$K)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .highlightActiveLineGutter */ .Wu)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .highlightSpecialChars */ .N$)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .history */ .b6)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .foldGutter */ .Lv)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .drawSelection */ .VH)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .dropCursor */ .A)(),_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.allowMultipleSelections.of(true),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .indentOnInput */ .WD)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .syntaxHighlighting */ .y9)(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .defaultHighlightStyle */ .Zt,{fallback:true}),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .bracketMatching */ .SG)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .closeBrackets */ .wm)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .autocompletion */ .yU)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .rectangularSelection */ .D4)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .crosshairCursor */ .HJ)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .highlightActiveLine */ .dz)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .highlightSelectionMatches */ .gN)(),_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .keymap */ .w4.of(BASIC_KEYMAPS)]:[];var CSS_CLASS_NAMES=_style_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A;/**
 * Determines code language support for given mode name.
 * @param name - Mode name to determine language support for.
 * @returns Language support or "undefined" if not supported.
 */var determineMode=function determineMode(name){if(!name)return undefined;if(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .javascript */ .Q2&&["js","jsx","ts","tsx","script","javascript","typescript"].includes(name.toLowerCase()))return (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .javascript */ .Q2)({jsx:true,typescript:true});if(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .css */ .AH&&["css","style","styles","cascadingstylesheet","cascadingstylesheets"].includes(name.toLowerCase()))return (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .css */ .AH)()};var Index=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function(properties,reference){var _properties$value,_properties$editor,_properties$editor$mo,_properties$editor2,_properties$editor3,_inputEventMapperRefe;if(!(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .autocompletion */ .yU&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .history */ .b6&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .syntaxHighlighting */ .y9&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .lintKeymap */ .$w&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .searchKeymap */ .Eo&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorView */ .Lz))throw Error("Missing codemirror dependencies.");var value=(_properties$value=properties.value)!==null&&_properties$value!==void 0?_properties$value:"";var modeName=(_properties$editor=properties.editor)===null||_properties$editor===void 0?void 0:_properties$editor.modeName;var mode=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useMemorizedValue)((_properties$editor$mo=(_properties$editor2=properties.editor)===null||_properties$editor2===void 0?void 0:_properties$editor2.mode)!==null&&_properties$editor$mo!==void 0?_properties$editor$mo:determineMode(modeName),(_properties$editor3=properties.editor)===null||_properties$editor3===void 0?void 0:_properties$editor3.mode,modeName);var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputEventMapperReference=_useReferenceState2[0],setInputEventMapperReference=_useReferenceState2[1];var _useReferenceState3=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),editorView=_useReferenceState4[0],setEditorView=_useReferenceState4[1];var _useReferenceState5=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useReferenceState)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),editorViewReference=_useReferenceState6[0],setEditorViewReference=_useReferenceState6[1];(0,react__WEBPACK_IMPORTED_MODULE_5__.useImperativeHandle)(reference,function(){return{input:inputEventMapperReference,editorView:editorView,editorViewReference:editorViewReference}},[inputEventMapperReference,editorView,editorViewReference]);/*
        NOTE: We do need to store the input event mapper reference in a ref
        here, because otherwise we would need to re-initialize the editor on
        every change of the input event mapper reference, which would cause a
        lot of performance issues and also cause the editor to lose focus on
        every change of the input event mapper reference.
     */var internalInputEventMapperReference=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(inputEventMapperReference);internalInputEventMapperReference.current=inputEventMapperReference;(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function(){if(!editorViewReference)return;var state=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.create({doc:String(value),extensions:[BASIC_EXTENSIONS,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.changeFilter.of(function(transaction){var newValue=transaction.state.doc.toString();if(transaction.startState.doc.toString()!==newValue){var _internalInputEventMa;if(properties.maximumLength!==undefined&&newValue.length>properties.maximumLength)return false;if(properties.disabled)return true;(_internalInputEventMa=internalInputEventMapperReference.current)===null||_internalInputEventMa===void 0||_internalInputEventMa.eventMapper.input(newValue,{transaction:transaction});if(properties.onChange)properties.onChange(newValue)}return true}),mode!==null&&mode!==void 0?mode:[]]});setEditorView(new _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .EditorView */ .Lz({state:state,parent:editorViewReference}));return function(){if(editorView){editorView.destroy();setEditorView(null)}}},[editorViewReference,mode===null||mode===void 0?void 0:mode.language.name]);(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function(){if(editorView&&properties.value!==editorView.state.doc.toString())editorView.state.update({changes:{from:0,insert:_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .EY.empty}},{changes:{from:0,insert:String(properties.value)}})},[editorView,properties.value]);var textAreaDomNode=inputEventMapperReference===null||inputEventMapperReference===void 0||(_inputEventMapperRefe=inputEventMapperReference.input)===null||_inputEventMapperRefe===void 0?void 0:_inputEventMapperRefe.input;(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function(){var resizeObserver=new ResizeObserver(function(){var clientHeight=textAreaDomNode===null||textAreaDomNode===void 0?void 0:textAreaDomNode.clientHeight;if(editorViewReference&&clientHeight){var scrollableViewNode=editorViewReference.querySelector(".cm-scroller");if(scrollableViewNode){var newHeightValue=String(clientHeight)+"px";editorViewReference.style.height=newHeightValue;scrollableViewNode.style.height=newHeightValue;return}}});if(textAreaDomNode)resizeObserver.observe(textAreaDomNode);return function(){resizeObserver.disconnect()}},[editorViewReference,textAreaDomNode]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InputEventMapperWrapper_index_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,_objectSpread(_objectSpread({},properties),{},{ref:setInputEventMapperReference,value:value,classNamePrefix:CSS_CLASS_NAMES.codeEditor,onLabelClick:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useMemorizedValue)(function(){editorViewReference===null||editorViewReference===void 0||editorViewReference.focus()},editorViewReference),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{ref:setEditorViewReference,onBlur:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useMemorizedValue)(function(event){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.blur(event);if(properties.onBlur)properties.onBlur(event)},inputEventMapperReference===null||inputEventMapperReference===void 0?void 0:inputEventMapperReference.eventMapper.blur,properties.onBlur),onFocus:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_6__.useMemorizedValue)(function(event){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.focus(event);if(properties.onFocus)properties.onFocus(event)},inputEventMapperReference===null||inputEventMapperReference===void 0?void 0:inputEventMapperReference.eventMapper.focus,properties.onFocus),className:"".concat(CSS_CLASS_NAMES.codeEditorView," mdc-text-field__input")})}))});/* harmony default export */ __webpack_exports__["default"] = (Index);
var __webpack_exports__default = __webpack_exports__["default"];
export { BASIC_EXTENSIONS, BASIC_KEYMAPS, CSS_CLASS_NAMES, Index, __webpack_exports__default as default, determineMode };

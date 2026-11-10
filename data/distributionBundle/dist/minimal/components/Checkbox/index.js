if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import "core-js/modules/es.regexp.flags.js";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__ from "@rmwc/theme";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__ from "@rmwc/typography";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode__ from "clientnode";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__ from "react-generic-tools";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
import { Checkbox as __WEBPACK_EXTERNAL_MODULE__rmwc_checkbox_562c9657_Checkbox__ } from "@rmwc/checkbox";
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
module.exports = x({ ["StrictMode"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.StrictMode; }, ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; }, ["memo"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.memo; }, ["useCallback"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useCallback; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useImperativeHandle"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle; }, ["useState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useState; } });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["NullSymbol"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.NullSymbol; }, ["UndefinedSymbol"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.UndefinedSymbol; }, ["any"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.any; }, ["arrayOf"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.arrayOf; }, ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["func"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.func; }, ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["oneOfType"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.oneOfType; }, ["shape"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.shape; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; }, ["symbol"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.symbol; } });

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["useMemorizedValue"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__.useMemorizedValue; }, ["useReferenceState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__.useReferenceState; } });

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Zl: function() { return /* binding */ modelStatePropertyTypes; },
/* harmony export */   m8: function() { return /* binding */ defaultModelState; }
/* harmony export */ });
/* unused harmony exports PrimitiveTypes, baseModelPropertyTypes, modelPropertyTypes */
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// -*- coding: utf-8 -*-
/** @module type *//* !
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
// region exports
/// region generic
var PrimitiveTypes=(/* unused pure expression or super */ null && (["boolean","DateTime","integer","number","string"]));// | PrimitiveType
//// region model
//// endregion
//// region state
//// endregion
//// region constants
var baseModelPropertyTypes={name:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,declaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,description:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,default:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.any,// NOTE: Corresponds to type "SelectionDefinition".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.shape)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object]),/*
        NOTE: Not yet working:

        type: oneOf([
            'date',
            'date-local',

            'datetime',
            'datetime-local',

            'time',
            'time-local',

            'week',

            'color',
            'email',
            'month',
            'number',
            'password',
            'range',
            'search',
            'text',
            'url'
        ])
    */type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,value:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.any};var modelStatePropertyTypes={dirty:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),pristine:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),touched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),untouched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),focused:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),visited:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidRequired:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),valid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol])};var modelPropertyTypes=_objectSpread(_objectSpread({},baseModelPropertyTypes),{},{emptyEqualsNull:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,trim:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,invertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),pattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),maximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),minimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),maximumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,minimumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,mutable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,writable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,state:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.shape)(modelStatePropertyTypes)});var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},baseModelPropertyTypes),modelStatePropertyTypes),{},{className:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)(clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),styles:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,themeConfiguration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,disabled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,enforceUncontrolled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,initialValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.any,model:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.shape)(modelPropertyTypes),// NOTE: Overwrites model selection and corresponds to type "Selection".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]))),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.shape)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object]),onChange:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onChangeValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onChangeShowDeclaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onChangeState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onClick:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onFocus:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onTouch:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,required:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,requiredText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,componentProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,domNodeProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,showDeclaration:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),showInitialValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,showValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,/*
        NOTE: Not yet working:
        tooltip?: string | TooltipProps
        trailingIcon?:
            string |
             (IconOptions & {tooltip?: string | TooltipProps})
    */tooltip:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.any});var defaultModelState={dirty:false,pristine:true,focused:false,visited:false,invalid:false,invalidRequired:false,valid:true,touched:false,untouched:true};var defaultModel={declaration:"",description:"",name:"NO_NAME_DEFINED",emptyEqualsNull:true,pattern:undefined,invertedPattern:undefined,maximum:Infinity,minimum:-Infinity,maximumLength:Infinity,minimumLength:0,mutable:true,/*
        NOTE: We do not want to shadow "default" here:
        value: null,
    */writable:true,nullable:true,state:_objectSpread({},defaultModelState),trim:true,type:"string"};/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties={className:[],styles:{},componentProperties:{},domNodeProperties:{},enforceUncontrolled:false,model:_objectSpread({},defaultModel),triggerInitialPropertiesConsolidation:false,showDeclaration:undefined,showInitialValidationState:false,showValidationState:true,requiredText:"Please fill this field."};//// endregion
/// endregion
// endregion

/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Theme"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__.Theme; }, ["ThemeProvider"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__.ThemeProvider; } });

/***/ }),
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Logger"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.Logger; }, ["capitalize"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.capitalize; }, ["copy"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.copy; }, ["equals"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.equals; }, ["extend"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.extend; }, ["timeout"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.timeout; } });

/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aU: function() { return /* binding */ deriveMissingPropertiesFromState; },
  zu: function() { return /* binding */ determineInitialValue; },
  sy: function() { return /* binding */ determineValidationState; },
  n$: function() { return /* binding */ getConsolidatedProperties; },
  hX: function() { return /* binding */ mapPropertiesIntoModel; },
  F_: function() { return /* binding */ translateKnownSymbols; },
  LI: function() { return /* binding */ triggerCallbackIfExists; },
  s$: function() { return /* binding */ usePropertiesChangedIndicator; },
  Dv: function() { return /* binding */ wrapStateSetter; }
});

// UNUSED EXPORTS: createDummyStateSetter, determineInitialRepresentation, formatDateTimeAsConfigured, formatValue, getLabelAndValues, getRepresentationFromValueSelection, getValueFromSelection, hashRegularExpression, log, normalizeSelection, parseValue, renderMessage, slicePropertiesForState, slicePropertiesForStateRecursively

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(7);
;// external "core-js/modules/es.regexp.flags.js"

// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(6);
// EXTERNAL MODULE: external "clientnode/property-types"
var property_types_ = __webpack_require__(2);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
;// ./src/helper.ts
/* unused harmony import specifier */ var isFunction;
/* unused harmony import specifier */ var isObject;
/* unused harmony import specifier */ var copy;
/* unused harmony import specifier */ var evaluate;
/* unused harmony import specifier */ var equals;
/* unused harmony import specifier */ var TextInput;
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module helper *//* !
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
function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var log=new external_clientnode_.Logger({name:"react-input-material.helper"});// region state
/**
 * Removes all none serializable values from given data structure.
 * @param object - Mapping of values to slice.
 */var slicePropertiesForState=function slicePropertiesForState(object){/*
       NOTE: Nested "representations" shouldn't be controlled usually since
       complex inter input dependencies won't be resolved from the outside.
    */for(var _i=0,_arr=["ref","representation"];_i<_arr.length;_i++){var name=_arr[_i];delete object[name]}for(var _i2=0,_Object$entries=Object.entries(object);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),_name=_Object$entries$_i[0],_value=_Object$entries$_i[1];if(isFunction(_value))delete object[_name]}};/**
 * Removes all none serializable values from given data structure recursively.
 * @param properties - Mapping of values to slice.
 * @returns Nothing.
 */var _slicePropertiesForStateRecursively=function slicePropertiesForStateRecursively(properties){if(properties===null||_typeof(properties)!=="object")return;slicePropertiesForState(properties);for(var _i3=0,_Object$values=Object.values(properties);_i3<_Object$values.length;_i3++){var _value2=_Object$values[_i3];if(isObject(_value2))if(Array.isArray(_value2))for(var _i4=0,_arr2=_value2;_i4<_arr2.length;_i4++){var subValue=_arr2[_i4];_slicePropertiesForStateRecursively(subValue)}else _slicePropertiesForStateRecursively(_value2)}return copy(properties)};/**
 * Creates a mocked a state setter. Useful to dynamically convert a component
 * from uncontrolled to controlled one.
 * @param value - Parameter for state setter.
 * @returns Resulting value of the "useState" hook.
 */var createDummyStateSetter=function createDummyStateSetter(value){return function(callbackOrData){if(typeof callbackOrData==="function")callbackOrData(value)}};/**
 * Consolidates properties not found in properties but in state into
 * properties.
 * @param properties - To consolidate.
 * @param state - To search values in.
 * @returns Consolidated properties.
 */var deriveMissingPropertiesFromState=function deriveMissingPropertiesFromState(properties,state){/*
        NOTE: Avoid writing into mutable model object properties. So project
        value to properties directly.
    */if(properties.model&&properties.model.value!==undefined&&properties.value===undefined)properties.value=properties.model.value;if(properties.value===undefined)properties.value=state.value;if(properties.model)if(properties.model.state)properties.model.state=_objectSpread({},properties.model.state);else properties.model.state={};for(var _i5=0,_Object$entries2=Object.entries(state.modelState);_i5<_Object$entries2.length;_i5++){var _properties$model;var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i5],2),key=_Object$entries2$_i[0],_value3=_Object$entries2$_i[1];if((_properties$model=properties.model)!==null&&_properties$model!==void 0&&_properties$model.state&&properties.model.state[key]===undefined)properties.model.state[key]=_value3}return properties};/**
 * Creates a hybrid a state setter which only triggers when model state changes
 * occur. Useful to dynamically convert a component from uncontrolled to
 * controlled while model state should be uncontrolled either.
 * @param setValueState - Value setter to wrap.
 * @param currentValueState - Last known value state to provide to setter when
 * called.
 * @returns Wrapped given method.
 */var wrapStateSetter=function wrapStateSetter(setValueState,currentValueState){return function(callbackOrData){var result=typeof callbackOrData==="function"?callbackOrData(currentValueState):callbackOrData;if(!(0,external_clientnode_.equals)(result===null||result===void 0?void 0:result.modelState,currentValueState===null||currentValueState===void 0?void 0:currentValueState.modelState))setValueState(result)}};// endregion
/**
 * Renders given template string against all properties in current
 * instance.
 * @param template - Template to render.
 * @param scope - Scope to render given template again.
 * @returns Evaluated template or an empty string if something goes wrong.
 */var renderMessage=function renderMessage(template,scope){if(typeof template!=="string")return"";var evaluated=evaluate("`".concat(template,"`"),{scope:scope});if(evaluated.error){void log.warn("Given message template could not be proceed:",evaluated.error);return""}return evaluated.result};/**
 * Triggered when a value state changes like validation or focusing.
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param synchronous - Indicates whether to trigger callback immediately or
 * later. Controlled components should call synchronously and uncontrolled
 * otherwise as long as callbacks are called in a state setter context.
 * @param parameters - Additional arguments to forward to callback.
 */var triggerCallbackIfExists=function triggerCallbackIfExists(properties,name,synchronous){if(synchronous===void 0){synchronous=true}for(var _len=arguments.length,parameters=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){parameters[_key-3]=arguments[_key]}name="on".concat((0,external_clientnode_.capitalize)(name));if(properties[name])if(synchronous)properties[name].apply(properties,parameters);else void (0,external_clientnode_.timeout)(function(){properties[name].apply(properties,parameters)})};// region consolidation state
/**
 * Translate known symbols in a copied and returned properties object.
 * @param properties - Object to translate.
 * @param copyBlobs - Determines whether to copy blobs as well.
 * @returns Transformed properties.
 */var translateKnownSymbols=function translateKnownSymbols(properties,copyBlobs){if(copyBlobs===void 0){copyBlobs=false}var result={};for(var _i6=0,_Object$entries3=Object.entries(properties);_i6<_Object$entries3.length;_i6++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i6],2),name=_Object$entries3$_i[0],_value4=_Object$entries3$_i[1];if(_value4===property_types_.UndefinedSymbol)result[name]=undefined;else if(_value4===property_types_.NullSymbol)result[name]=null;else result[name]=(0,external_clientnode_.copy)(properties[name],copyBlobs)}return result};/**
 * Determines initial value representation as string.
 * @param properties - Components properties.
 * @param defaultProperties - Components default properties.
 * @param value - Current value to represent.
 * @param transformer - To apply to given value.
 * @param selection - Data mapping of allowed values.
 * @returns Determined initial representation.
 */function determineInitialRepresentation(properties,defaultProperties,value,transformer,selection){if(typeof properties.representation==="string")return properties.representation;if(value!==null){var _properties$model2;var candidate=getRepresentationFromValueSelection(value,selection);if(typeof candidate==="string")return candidate;return formatValue(_objectSpread(_objectSpread({},properties),{},{type:properties.type||((_properties$model2=properties.model)===null||_properties$model2===void 0?void 0:_properties$model2.type)||defaultProperties.model.type}),value,transformer)}return""}/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @param defaultValue - Internal fallback value.
 * @param alternateValue - Alternate value to respect.
 * @returns Determined value.
 */var determineInitialValue=function determineInitialValue(properties,defaultValue,alternateValue){var _properties$model3,_properties$model4;if(alternateValue!==undefined)return alternateValue;if(properties.value!==undefined)return properties.value;if(((_properties$model3=properties.model)===null||_properties$model3===void 0?void 0:_properties$model3.value)!==undefined)return properties.model.value;if(properties.initialValue!==undefined)return (0,external_clientnode_.copy)(properties.initialValue);if(properties.default!==undefined)return (0,external_clientnode_.copy)(properties.default);if(((_properties$model4=properties.model)===null||_properties$model4===void 0?void 0:_properties$model4.default)!==undefined)return (0,external_clientnode_.copy)(properties.model.default);if(defaultValue!==undefined)return defaultValue;return null};/**
 * Derives current validation state from given value.
 * @param properties - Input configuration.
 * @param currentState - Current validation state.
 * @param validators - Mapping from validation state key to corresponding
 * validator function.
 * @returns A boolean indicating if validation state has changed.
 */var determineValidationState=function determineValidationState(properties,currentState,validators){if(validators===void 0){validators={}}var changed=false;validators=_objectSpread({invalidRequired:function invalidRequired(){return properties.model.nullable===false&&properties.model.type!=="boolean"&&!properties.model.value&&properties.model.value!==0||properties.model.type==="boolean"&&!(typeof properties.model.value==="boolean"||["false","true"].includes(properties.model.value))}},validators);if(!properties.model.state)properties.model.state={};for(var _i7=0,_Object$entries4=Object.entries(validators);_i7<_Object$entries4.length;_i7++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i7],2),name=_Object$entries4$_i[0],validator=_Object$entries4$_i[1];var oldValue=currentState[name];properties.model.state[name]=validator();changed=changed||oldValue!==currentState[name]}if(changed){properties.model.state.invalid=Object.keys(validators).some(function(name){return Boolean(properties.model.state&&properties.model.state[name])});properties.model.state.valid=!properties.model.state.invalid}return changed};/**
 * Synchronizes property, state and model configuration:
 * Properties overwrites default properties which overwrites default model
 * properties.
 * @param properties - Properties to merge.
 * @param defaultModel - Default model to merge.
 * @returns Merged properties.
 */var mapPropertiesIntoModel=function mapPropertiesIntoModel(properties,defaultModel){/*
        NOTE: Default props seems not to respect nested layers to merge, so we
        have to manage this for nested model structure.
    */var result=(0,external_clientnode_.extend)(true,{model:(0,external_clientnode_.copy)(defaultModel)},properties);// region handle aliases
if(result.disabled){result.model.mutable=false;delete result.disabled}if(result.required){result.model.nullable=false;delete result.required}if(result.type==="text")result.type="string";// endregion
// region map properties into model
if(result.invertedPattern){result.model.invertedPattern=/* eslint-disable @typescript-eslint/no-non-null-assertion */result.invertedPattern;/* eslint-enable @typescript-eslint/no-non-null-assertion */delete result.invertedPattern}if(result.pattern){result.model.pattern=/* eslint-disable @typescript-eslint/no-non-null-assertion */result.pattern;/* eslint-enable @typescript-eslint/no-non-null-assertion */delete result.pattern}// Map first level properties
var _iterator=_createForOfIteratorHelper(Object.keys(result.model).concat("value")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _name2=_step.value;if(Object.prototype.hasOwnProperty.call(result,_name2)&&result[_name2]!==undefined)result.model[_name2]=result[_name2]}// Map property state into model state
}catch(err){_iterator.e(err)}finally{_iterator.f()}for(var name in result.model.state)if(Object.prototype.hasOwnProperty.call(result,name)&&result[name]!==undefined)result.model.state[name]=result[name];if(result.model.value===undefined)result.model.value=(0,external_clientnode_.copy)(result.model.default);// else -> Controlled component via model's "value" property.
// endregion
return result};/**
 * Calculate external properties (a set of all configurable properties).
 * @param properties - Properties to merge.
 * @returns External properties object.
 */var getConsolidatedProperties=function getConsolidatedProperties(properties){var result=_objectSpread(_objectSpread(_objectSpread({},properties),properties.model||{}),(properties.model||{}).state||{});// region handle aliases
result.disabled=!(result.mutable&&result.writable);delete result.mutable;delete result.writable;delete result.state;result.required=!result.nullable;delete result.nullable;// endregion
return result};// endregion
// region value transformer
/// region selection
/**
 * Determine normalized labels and values for selection and auto-complete
 * components.
 * @param selection - Selection component property configuration.
 * @returns Normalized sorted listed of labels and values.
 */function getLabelAndValues(selection){if(Array.isArray(selection)){var labels=[];var values=[];var _iterator2=_createForOfIteratorHelper(selection),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _value5=_step2.value;if(typeof(_value5===null||_value5===void 0?void 0:_value5.label)==="string"){labels.push(_value5.label);values.push(_value5.value)}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return[labels,values]}return[[],[]]}/**
 * Determine representation for given value while respecting existing labels.
 * @param value - To represent.
 * @param selection - Selection component property configuration.
 * @returns Determined representation.
 */function getRepresentationFromValueSelection(value,selection){if(selection){var _iterator3=_createForOfIteratorHelper(selection),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var option=_step3.value;if(equals(option===null||option===void 0?void 0:option.value,value))return option.label||String(value)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}return null}/**
 * Determine value from provided representation (for example user inputs).
 * @param label - To search a value for.
 * @param selection - Selection component property configuration.
 * @returns Determined value.
 */function getValueFromSelection(label,selection){if(Array.isArray(selection)){var _iterator4=_createForOfIteratorHelper(selection),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _value6=_step4.value;if(typeof(_value6===null||_value6===void 0?void 0:_value6.label)==="string"&&_value6.label===label)return _value6.value;if(["number","string"].includes(_typeof(_value6===null||_value6===void 0?void 0:_value6.value))&&String(_value6.value)===label)return _value6.value}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}return null}/**
 * Normalize given selection. NOTE: It is important to have an ordered list
 * to map values to labels and the other way around in a deterministic way.
 * @param selection - Selection component property configuration.
 * @param labels - Additional labels to take into account (for example provided
 * via a content management system).
 * @returns Determined normalized sorted selection configuration.
 */function normalizeSelection(selection,labels){if(!selection){selection=labels;labels=undefined}if(!selection)return selection;var hasLabels=isObject(labels);var getLabel=function getLabel(value,index){if(hasLabels)if(Array.isArray(labels)){if(labels.length)if(Array.isArray(labels[0])){for(var _i8=0,_arr3=labels;_i8<_arr3.length;_i8++){var _arr3$_i=_slicedToArray(_arr3[_i8],2),labelValue=_arr3$_i[0],label=_arr3$_i[1];if(labelValue===value)return label}}else if(typeof index==="number"&&index<labels.length)return labels[index];// Map boolean values to their string representation.
}else if(value===true&&labels.true)return labels.true;else if(value===false&&labels.false)return labels.false;else if(typeof value==="string"&&Object.prototype.hasOwnProperty.call(labels,value))return labels[value];return null};var selectionIsOrdered=false;// region normalize options configuration
if(Array.isArray(selection)){selectionIsOrdered=true;if(selection.length){var result=[];var index=0;if(Array.isArray(selection[0]))for(var _i9=0,_arr4=selection;_i9<_arr4.length;_i9++){var _getLabel;var _arr4$_i=_slicedToArray(_arr4[_i9],2),_value7=_arr4$_i[0],label=_arr4$_i[1];result.push({label:(_getLabel=getLabel(_value7,index))!==null&&_getLabel!==void 0?_getLabel:label,value:_value7});index+=1}else if(isObject(selection[0])){var _iterator5=_createForOfIteratorHelper(selection),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _getLabel2;var option=_step5.value;result.push(_objectSpread(_objectSpread({},option),{},{label:(_getLabel2=getLabel(option.value,index))!==null&&_getLabel2!==void 0?_getLabel2:option.label}));index+=1}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}else for(var _i0=0,_arr5=selection;_i0<_arr5.length;_i0++){var _getLabel3;var _value8=_arr5[_i0];result.push({label:(_getLabel3=getLabel(_value8,index))!==null&&_getLabel3!==void 0?_getLabel3:_value8,value:_value8});index+=1}selection=result}}else{var _result=[];for(var _i1=0,_Object$keys=Object.keys(selection);_i1<_Object$keys.length;_i1++){var _getLabel4;var _value9=_Object$keys[_i1];_result.push({label:(_getLabel4=getLabel(_value9))!==null&&_getLabel4!==void 0?_getLabel4:selection[_value9],value:_value9})}selection=_result}// endregion
// region arrange with given ordering
if(Array.isArray(labels)&&labels.length&&Array.isArray(labels[0])){// Respect ordering given by labels.
var labelMapping=new Map;var _index=0;for(var _i10=0,_arr6=labels;_i10<_arr6.length;_i10++){var _arr6$_i=_slicedToArray(_arr6[_i10],1),_value0=_arr6$_i[0];labelMapping.set(_value0,_index);_index+=1}selection=selection.sort(function(_ref,_ref2){var _labelMapping$get,_labelMapping$get2;var first=_ref.value;var second=_ref2.value;return((_labelMapping$get=labelMapping.get(first))!==null&&_labelMapping$get!==void 0?_labelMapping$get:0)-((_labelMapping$get2=labelMapping.get(second))!==null&&_labelMapping$get2!==void 0?_labelMapping$get2:0)})}else if(!selectionIsOrdered)// Sort alphabetically by labels.
selection=selection.sort(function(_ref3,_ref4){var first=_ref3.label;var second=_ref4.label;return first.localeCompare(second)});// endregion
return selection}/// endregion
/**
 * Applies configured value transformations.
 * @param configuration - Input configuration.
 * @param value - Value to transform.
 * @param transformer - To apply to given value.
 * @param trim - Indicates whether to trim strings or not.
 * @returns Transformed value.
 */var parseValue=function parseValue(configuration,value,transformer,trim){var _transformer;if(trim===void 0){trim=false}if(trim&&typeof value==="string")value=value.trim().replace(/ +\n/g,"\\n");if(configuration.model.emptyEqualsNull&&value==="")return null;var result=value;if(![null,undefined].includes(value)&&(_transformer=transformer[configuration.model.type])!==null&&_transformer!==void 0&&_transformer.parse){var _transformer2;var parser=(_transformer2=transformer[configuration.model.type])===null||_transformer2===void 0?void 0:_transformer2.parse;result=parser&&value?parser(value,transformer,configuration):value}if(typeof result==="number"&&isNaN(result))return null;return result};/**
 * Represents configured value as string.
 * @param configuration - Input configuration.
 * @param value - To represent.
 * @param transformerMapping - To apply to given value.
 * @param final - Specifies whether it is a final representation.
 * @returns Transformed value.
 */function formatValue(configuration,value,transformerMapping,final){var _transformerMapping;if(final===void 0){final=true}var methodName=final?"final":"intermediate";if([null,undefined].includes(value)||typeof value==="number"&&isNaN(value))return"";var format=(_transformerMapping=transformerMapping[configuration.type||configuration.model.type])===null||_transformerMapping===void 0?void 0:_transformerMapping.format;if(format){var _format$methodName;var transformer=((_format$methodName=format[methodName])===null||_format$methodName===void 0?void 0:_format$methodName.transform)||format.final.transform;if(transformer)return transformer(value,transformerMapping,configuration)}return String(value)}var formatDateTimeAsConfigured=function formatDateTimeAsConfigured(value){if(TextInput.transformer.date.useISOString){if(typeof value==="number"&&!isNaN(value)&&isFinite(value))return new Date(value*1000).toISOString();if(value instanceof Date)return value.toISOString();return value}if(typeof value==="number")return value;if(value instanceof Date)return value.getTime()/1000;if(typeof value==="string")return new Date(value).getTime()/1000;return value};// endregion
var hashRegularExpression=function hashRegularExpression(expression){return expression.source+"||"+expression.flags.split("").sort().join("")};var usePropertiesChangedIndicator=function usePropertiesChangedIndicator(properties){return (0,external_react_generic_tools_.useMemorizedValue)({},JSON.stringify(properties),properties.onChange,properties.onChangeShowDeclaration,properties.onChangeState,properties.onChangeValue,properties.onBlur,properties.onClick,properties.onFocus,properties.onTouch)};

/***/ }),
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
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Es: function() { return /* binding */ WrapConfigurations; }
/* harmony export */ });
/* unused harmony export createWrapConfigurationsComponent */
/* unused harmony import specifier */ var Theme;
/* unused harmony import specifier */ var forwardRef;
/* unused harmony import specifier */ var _jsx;
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=(/* unused pure expression or super */ null && (["strict","theme","themeConfiguration","tooltip","wrap"]));function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _objectWithoutProperties(t,r){if(null==t)return{};var o,n,i=_objectWithoutPropertiesLoose(t,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],-1===r.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t};//  endregion
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
 */function createWrapConfigurationsComponent(WrappedComponent,options){if(options===void 0){options={}}var component=function component(_ref2,reference){var strict=_ref2.strict,theme=_ref2.theme,themeConfiguration=_ref2.themeConfiguration,tooltip=_ref2.tooltip,wrap=_ref2.wrap,properties=_objectWithoutProperties(_ref2,_excluded);var wrapped=/*#__PURE__*/_jsx(WrappedComponent,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},properties),options.withReference===false?{}:reference?{ref:reference}:{}),options.withThemeWrapper&&theme?{theme:theme}:{})));return/*#__PURE__*/_jsx(WrapConfigurations,{strict:strict,themeConfiguration:themeConfiguration,tooltip:tooltip,wrap:wrap,children:options.withThemeWrapper&&theme?/*#__PURE__*/_jsx(Theme,{use:theme,wrap:wrap,children:wrapped}):wrapped})};return options.withReference?/*#__PURE__*/forwardRef(component):component}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WrapConfigurations)));

/***/ }),
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

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Error */
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
// -*- coding: utf-8 -*-
/** @module Error *//* !
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
var Error=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_ref,reference){var children=_ref.children,applyToChildren=_ref.applyToChildren;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_0__.Theme,{ref:reference,use:"error",wrap:applyToChildren,children:children})});/* harmony default export */ __webpack_exports__.A = (Error);

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; }
/* harmony export */ });
/* unused harmony export defaultModel */
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
// -*- coding: utf-8 -*-
/** @module type *//* !
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
// region constants
var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .propertyTypes */ .Pl),_type_js__WEBPACK_IMPORTED_MODULE_1__/* .modelStatePropertyTypes */ .Zl),{},{checked:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,id:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string});var defaultModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultModel */ .$I),{},{default:false,type:"boolean",value:false});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultProperties */ .L6),{},{default:false,model:_objectSpread({},defaultModel),requiredText:"Please check this field."});// endregion

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

// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(6);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
;// external "@rmwc/checkbox"

;// ./src/implementations/rmwc/Checkbox/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"checkbox":"checkbox","checkboxInvalid":"checkbox--invalid"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/Checkbox/index.tsx
// -*- coding: utf-8 -*-
/** @module Checkbox *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var Checkbox=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$className;var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),baseReference=_useReferenceState2[0],setBaseReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),foundationReference=_useReferenceState4[0],setFoundationReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),inputReference=_useReferenceState6[0],setInputReference=_useReferenceState6[1];(0,external_react_.useImperativeHandle)(reference,function(){return{base:baseReference,foundation:foundationReference,input:inputReference}},[baseReference,foundationReference,inputReference]);return/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:_toConsumableArray((_properties$className=properties.classNames)!==null&&_properties$className!==void 0?_properties$className:[]).concat(properties.invalid?CSS_CLASS_NAMES.checkboxInvalid:[]).join(" "),style:properties.styles,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_checkbox_562c9657_Checkbox__,_objectSpread(_objectSpread({checked:properties.value,disabled:properties.disabled,indeterminate:properties.indeterminate,"aria-invalid":properties.invalid?true:undefined,id:properties.id,name:properties.name,onBlur:properties.onBlur,onChange:properties.onChange,onClick:properties.onClick,onFocus:properties.onFocus,value:String(properties.value),ref:setBaseReference,foundationRef:setFoundationReference,inputRef:setInputReference},properties.componentProperties),{},{children:properties.children}))})});/* harmony default export */ var rmwc_Checkbox = (Checkbox);
// EXTERNAL MODULE: ./src/implementations/rmwc/Error.tsx
var Error = __webpack_require__(22);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapConfigurations.tsx
var WrapConfigurations = __webpack_require__(12);
// EXTERNAL MODULE: ./src/helper.ts + 1 modules
var helper = __webpack_require__(8);
// EXTERNAL MODULE: ./src/type.ts
var type = __webpack_require__(4);
;// ./src/components/Checkbox/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Checkbox_style_module = ({"checkbox":"checkbox"});
// EXTERNAL MODULE: ./src/components/Checkbox/type.ts
var Checkbox_type = __webpack_require__(27);
;// ./src/components/Checkbox/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Checkbox *//* !
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
function Checkbox_typeof(o){"@babel/helpers - typeof";return Checkbox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Checkbox_typeof(o)}function Checkbox_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Checkbox_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Checkbox_ownKeys(Object(o),!0).forEach(function(t){Checkbox_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):Checkbox_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function Checkbox_defineProperty(r,t,o){return(t=Checkbox_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function Checkbox_toPropertyKey(r){var o=Checkbox_toPrimitive(r,"string");return"symbol"==Checkbox_typeof(o)?o:o+""}function Checkbox_toPrimitive(t,e){if("object"!=Checkbox_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=Checkbox_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function Checkbox_slicedToArray(e,i){return Checkbox_iterableToArrayLimit(e,i)||Checkbox_unsupportedIterableToArray(e,i)||Checkbox_nonIterableRest()}function Checkbox_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Checkbox_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return Checkbox_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Checkbox_arrayLikeToArray(t,e):void 0}}function Checkbox_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function Checkbox_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Checkbox_CSS_CLASS_NAMES=Checkbox_style_module;// region helper
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param currentState - Current component state.
 * @returns Whether component is in an aggregated valid or invalid state.
 */function determineValidationState(properties,currentState){return (0,helper/* determineValidationState */.sy)(properties,currentState,{invalidRequired:function invalidRequired(){return properties.model.nullable===false&&!properties.model.value}})}// endregion
/**
 * Wrapper component for checkboxes to validate.
 * @property displayName - Descriptive name for component to show in web
 * developer tools.
 * Dataflow:
 * 1. On-Render all states are merged with given properties into a normalized
 *    property object.
 * 2. Properties, corresponding state values and sub node instances are saved
 *    into a "ref" object (to make them accessible from the outside for example
 *    for wrapper like web-components).
 * 3. Event handler saves corresponding data modifications into state and
 *    normalized properties object.
 * 4. All state changes except selection changes trigger an "onChange" event
 *    which delivers the consolidated properties object (with latest
 *    modifications included).
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */var CheckboxInner=function CheckboxInner(props,reference){var _givenProps$model;// region property aggregation
/**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */var getConsolidatedProperties=function getConsolidatedProperties(properties){var result=(0,helper/* mapPropertiesIntoModel */.hX)(properties,Checkbox_Checkbox.defaultProperties.model);determineValidationState(result,result.model.state);result=(0,helper/* getConsolidatedProperties */.n$)(result);result.checked=Boolean(result.value);return result};// endregion
// region properties
var givenProps=(0,helper/* translateKnownSymbols */.F_)(props);var initialValue=(0,helper/* determineInitialValue */.zu)(givenProps,Checkbox_Checkbox.defaultProperties.model.default,givenProps.checked);/*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */var givenProperties=(0,external_clientnode_.extend)(true,(0,external_clientnode_.copy)(Checkbox_Checkbox.defaultProperties),givenProps);/*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */var _useState=(0,external_react_.useState)({modelState:Checkbox_objectSpread({},Checkbox_Checkbox.defaultModelState),value:initialValue}),_useState2=Checkbox_slicedToArray(_useState,2),valueState=_useState2[0],setValueState=_useState2[1];var controlled=!givenProperties.enforceUncontrolled&&(((_givenProps$model=givenProps.model)===null||_givenProps$model===void 0?void 0:_givenProps$model.value)!==undefined||givenProps.value!==undefined)&&Boolean(givenProps.onChange||givenProps.onChangeValue);(0,helper/* deriveMissingPropertiesFromState */.aU)(givenProperties,valueState);var properties=getConsolidatedProperties(givenProperties);var propertiesChangedIndicator=(0,helper/* usePropertiesChangedIndicator */.s$)(properties);var currentValueState={modelState:properties.model.state,value:properties.value};/*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */if(!controlled&&properties.value!==valueState.value||!(0,external_clientnode_.equals)(properties.model.state,valueState.modelState))setValueState(currentValueState);if(controlled)setValueState=(0,helper/* wrapStateSetter */.Dv)(setValueState,currentValueState);// endregion
// region event handler
/**
     * Triggered on blur events.
     * @param event - Event object.
     */var onBlur=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){var changed=false;if(oldValueState.modelState.focused){properties.focused=false;changed=true}if(!oldValueState.modelState.visited){properties.visited=true;changed=true}if(changed){onChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)};(0,helper/* triggerCallbackIfExists */.LI)(properties,"blur",controlled,event,properties);return changed?Checkbox_objectSpread(Checkbox_objectSpread({},oldValueState),{},{modelState:properties.model.state}):oldValueState})},[propertiesChangedIndicator]);/**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     */var onChange=(0,external_react_.useCallback)(function(event){(0,external_clientnode_.extend)(true,properties,getConsolidatedProperties(/*
                        Workaround since "Type" isn't identified as subset of
                        "RecursivePartial<Type>" yet.
                    */properties));(0,helper/* triggerCallbackIfExists */.LI)(properties,"change",controlled,properties,event)},[propertiesChangedIndicator]);/**
     * Triggered when ever the value changes.
     * @param event - Event object.
     */var onChangeValue=(0,external_react_.useCallback)(function(event){if(!(properties.model.mutable&&properties.model.writable))return;if(typeof event==="boolean")event={target:{checked:event}};properties.value=Boolean(event.target.checked);setValueState(function(oldValueState){if(oldValueState.value===properties.value)return oldValueState;var stateChanged=false;var result=Checkbox_objectSpread(Checkbox_objectSpread({},oldValueState),{},{value:properties.value});if(oldValueState.modelState.pristine){properties.dirty=true;properties.pristine=false;stateChanged=true}onChange(event);if(determineValidationState(properties,oldValueState.modelState))stateChanged=true;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeValue",controlled,properties.value,event,properties);if(stateChanged&&properties.model.state){result.modelState=properties.model.state;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)}return result})},[propertiesChangedIndicator]);/**
     * Triggered on click events.
     * @param event - Mouse event object.
     */var onClick=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"click",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggered on focus events.
     * @param event - Focus event object.
     */var onFocus=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"focus",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     */var onTouch=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){var changedState=false;if(!oldValueState.modelState.focused){properties.focused=true;changedState=true}if(oldValueState.modelState.untouched){properties.touched=true;properties.untouched=false;changedState=true}var result=oldValueState;if(changedState){onChange(event);result=Checkbox_objectSpread(Checkbox_objectSpread({},oldValueState),{},{modelState:properties.model.state});(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)};(0,helper/* triggerCallbackIfExists */.LI)(properties,"touch",controlled,event,properties);return result})},[propertiesChangedIndicator]);// endregion
// region export references
var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=Checkbox_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];(0,external_react_.useImperativeHandle)(reference,function(){return{properties:properties,reference:inputReference,state:Checkbox_objectSpread({modelState:properties.model.state},controlled?{}:{value:properties.value})}},[propertiesChangedIndicator,inputReference]);// endregion
(0,external_react_.useEffect)(function(){if(properties.triggerInitialPropertiesConsolidation)onChange()},[]);// region render
return/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapConfigurations/* WrapConfigurations */.Es,{strict:Checkbox_Checkbox.strict,themeConfiguration:properties.themeConfiguration,tooltip:properties.tooltip,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Checkbox,{value:Boolean(properties.value),disabled:properties.disabled,invalid:properties.invalid&&properties.showValidationState&&(properties.showInitialValidationState||properties.visited),indeterminate:properties.value===null,id:properties.id||properties.name,name:properties.name,ref:setInputReference,classNames:[Checkbox_CSS_CLASS_NAMES.checkbox].concat(properties.className),styles:properties.styles,onBlur:onBlur,onChange:onChangeValue,onClick:onClick,onFocus:onFocus,componentProperties:properties.componentProperties,domNodeProperties:properties.domNodeProperties,children:properties.invalid&&properties.showValidationState&&(properties.showInitialValidationState||properties.visited)?/*#__PURE__*/(0,jsx_runtime_.jsx)(Error/* default */.A,{children:properties.description||properties.name}):properties.description||properties.name})});// endregion
};// NOTE: This is useful in react dev tools.
CheckboxInner.displayName="Checkbox";/**
 * Wrapping web component compatible react component.
 * @property defaultModelState - Initial model state.
 * @property defaultProperties - Initial property configuration.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in reacts
 * strict component.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */var Checkbox_Checkbox=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(CheckboxInner));// region static properties
/// region web-component hints
Checkbox_Checkbox.wrapped=CheckboxInner;Checkbox_Checkbox.webComponentAdapterWrapped="react";/// endregion
Checkbox_Checkbox.defaultModelState=type/* defaultModelState */.m8;/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/Checkbox_Checkbox.defaultProperties=Checkbox_objectSpread(Checkbox_objectSpread({},Checkbox_type/* defaultProperties */.L6),{},{model:Checkbox_objectSpread(Checkbox_objectSpread({},Checkbox_type/* defaultProperties */.L6.model),{},{// Trigger initial determination.
state:undefined,value:undefined}),value:undefined});Checkbox_Checkbox.propTypes=Checkbox_type/* propertyTypes */.Pl;Checkbox_Checkbox.strict=false;// endregion
/* harmony default export */ var components_Checkbox = (Checkbox_Checkbox);
export { Checkbox_Checkbox as Checkbox, CheckboxInner, components_Checkbox as default, determineValidationState };

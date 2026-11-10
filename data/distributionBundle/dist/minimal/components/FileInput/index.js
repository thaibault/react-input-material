if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { Menu as __WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_Menu__, MenuItem as __WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuItem__, MenuSurface as __WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuSurface__, MenuSurfaceAnchor as __WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuSurfaceAnchor__ } from "@rmwc/menu";
import { Select as __WEBPACK_EXTERNAL_MODULE__rmwc_select_950a51a3_Select__ } from "@rmwc/select";
import { TextField as __WEBPACK_EXTERNAL_MODULE__rmwc_textfield_3ec14b9e_TextField__ } from "@rmwc/textfield";
import { MDCTextField as __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__ } from "@material/textfield";
import "core-js/modules/es.regexp.flags.js";
import { CircularProgress as __WEBPACK_EXTERNAL_MODULE__rmwc_circular_progress_592b28dd_CircularProgress__ } from "@rmwc/circular-progress";
import { Icon as __WEBPACK_EXTERNAL_MODULE__rmwc_icon_2d90e25a_Icon__ } from "@rmwc/icon";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_icon_button_347be2b6__ from "@rmwc/icon-button";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_theme_fde39321__ from "@rmwc/theme";
import * as __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__ from "@rmwc/typography";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode__ from "clientnode";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_animate_783e9a9c__ from "react-generic-animate";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_dummy_34225edd__ from "react-generic-dummy";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__ from "react-generic-tools";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
import { blobToBase64String as __WEBPACK_EXTERNAL_MODULE_blob_util_516ea100_blobToBase64String__, dataURLToBlob as __WEBPACK_EXTERNAL_MODULE_blob_util_516ea100_dataURLToBlob__ } from "blob-util";
import { ArrayBuffer as __WEBPACK_EXTERNAL_MODULE_spark_md5_5906cbd1_ArrayBuffer__, hash as __WEBPACK_EXTERNAL_MODULE_spark_md5_5906cbd1_hash__ } from "spark-md5";
import { Card as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_Card__, CardActionButton as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButton__, CardActionButtons as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButtons__, CardActions as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActions__, CardMedia as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardMedia__, CardPrimaryAction as __WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardPrimaryAction__ } from "@rmwc/card";
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
module.exports = x({ ["StrictMode"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.StrictMode; }, ["Suspense"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.Suspense; }, ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; }, ["lazy"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.lazy; }, ["memo"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.memo; }, ["useCallback"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useCallback; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useId"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useId; }, ["useImperativeHandle"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle; }, ["useState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useState; } });

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
/* harmony export */   m8: function() { return /* binding */ defaultModelState; },
/* harmony export */   qw: function() { return /* binding */ modelPropertyTypes; }
/* harmony export */ });
/* unused harmony exports PrimitiveTypes, baseModelPropertyTypes */
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
module.exports = x({ ["LOCALES"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.LOCALES; }, ["Logger"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.Logger; }, ["NOOP"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.NOOP; }, ["camelCaseToDelimited"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.camelCaseToDelimited; }, ["capitalize"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.capitalize; }, ["copy"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.copy; }, ["equals"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.equals; }, ["evaluate"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.evaluate; }, ["extend"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.extend; }, ["identity"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.identity; }, ["isFunction"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.isFunction; }, ["isObject"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.isObject; }, ["mark"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.mark; }, ["mask"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.mask; }, ["timeout"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.timeout; } });

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
  f4: function() { return /* binding */ determineInitialRepresentation; },
  zu: function() { return /* binding */ determineInitialValue; },
  sy: function() { return /* binding */ determineValidationState; },
  Fl: function() { return /* binding */ formatValue; },
  n$: function() { return /* binding */ getConsolidatedProperties; },
  os: function() { return /* binding */ getLabelAndValues; },
  M0: function() { return /* binding */ getValueFromSelection; },
  FS: function() { return /* binding */ hashRegularExpression; },
  hX: function() { return /* binding */ mapPropertiesIntoModel; },
  Wz: function() { return /* binding */ normalizeSelection; },
  $x: function() { return /* binding */ parseValue; },
  e4: function() { return /* binding */ renderMessage; },
  F_: function() { return /* binding */ translateKnownSymbols; },
  LI: function() { return /* binding */ triggerCallbackIfExists; },
  s$: function() { return /* binding */ usePropertiesChangedIndicator; },
  Dv: function() { return /* binding */ wrapStateSetter; }
});

// UNUSED EXPORTS: createDummyStateSetter, formatDateTimeAsConfigured, getRepresentationFromValueSelection, log, slicePropertiesForState, slicePropertiesForStateRecursively

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
 */var renderMessage=function renderMessage(template,scope){if(typeof template!=="string")return"";var evaluated=(0,external_clientnode_.evaluate)("`".concat(template,"`"),{scope:scope});if(evaluated.error){void log.warn("Given message template could not be proceed:",evaluated.error);return""}return evaluated.result};/**
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
 */function getRepresentationFromValueSelection(value,selection){if(selection){var _iterator3=_createForOfIteratorHelper(selection),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var option=_step3.value;if((0,external_clientnode_.equals)(option===null||option===void 0?void 0:option.value,value))return option.label||String(value)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}return null}/**
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
 */function normalizeSelection(selection,labels){if(!selection){selection=labels;labels=undefined}if(!selection)return selection;var hasLabels=(0,external_clientnode_.isObject)(labels);var getLabel=function getLabel(value,index){if(hasLabels)if(Array.isArray(labels)){if(labels.length)if(Array.isArray(labels[0])){for(var _i8=0,_arr3=labels;_i8<_arr3.length;_i8++){var _arr3$_i=_slicedToArray(_arr3[_i8],2),labelValue=_arr3$_i[0],label=_arr3$_i[1];if(labelValue===value)return label}}else if(typeof index==="number"&&index<labels.length)return labels[index];// Map boolean values to their string representation.
}else if(value===true&&labels.true)return labels.true;else if(value===false&&labels.false)return labels.false;else if(typeof value==="string"&&Object.prototype.hasOwnProperty.call(labels,value))return labels[value];return null};var selectionIsOrdered=false;// region normalize options configuration
if(Array.isArray(selection)){selectionIsOrdered=true;if(selection.length){var result=[];var index=0;if(Array.isArray(selection[0]))for(var _i9=0,_arr4=selection;_i9<_arr4.length;_i9++){var _getLabel;var _arr4$_i=_slicedToArray(_arr4[_i9],2),_value7=_arr4$_i[0],label=_arr4$_i[1];result.push({label:(_getLabel=getLabel(_value7,index))!==null&&_getLabel!==void 0?_getLabel:label,value:_value7});index+=1}else if((0,external_clientnode_.isObject)(selection[0])){var _iterator5=_createForOfIteratorHelper(selection),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _getLabel2;var option=_step5.value;result.push(_objectSpread(_objectSpread({},option),{},{label:(_getLabel2=getLabel(option.value,index))!==null&&_getLabel2!==void 0?_getLabel2:option.label}));index+=1}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}else for(var _i0=0,_arr5=selection;_i0<_arr5.length;_i0++){var _getLabel3;var _value8=_arr5[_i0];result.push({label:(_getLabel3=getLabel(_value8,index))!==null&&_getLabel3!==void 0?_getLabel3:_value8,value:_value8});index+=1}selection=result}}else{var _result=[];for(var _i1=0,_Object$keys=Object.keys(selection);_i1<_Object$keys.length;_i1++){var _getLabel4;var _value9=_Object$keys[_i1];_result.push({label:(_getLabel4=getLabel(_value9))!==null&&_getLabel4!==void 0?_getLabel4:selection[_value9],value:_value9})}selection=_result}// endregion
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
  Et: function() { return /* binding */ WrapTooltip; },
  Ay: function() { return /* binding */ Wrapper_WrapTooltip; }
});

// UNUSED EXPORTS: isDummy

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
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Wc: function() { return /* binding */ renderProperties; },
/* harmony export */   m8: function() { return /* binding */ defaultModelState; },
/* harmony export */   v8: function() { return /* binding */ defaultInputModel; }
/* harmony export */ });
/* unused harmony export modelStatePropertyTypes */
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
// region data transformation
/* eslint-enable @typescript-eslint/consistent-indexed-object-style */// endregion
/*
    plain -> input field
    text -> textarea
    richtext(raw) -> texteditor without formatting
    richtext(simple) -> texteditor with semantic text modifications
    richtext(normal) -> texteditor with additional text formatting
    richtext(advanced) -> texteditor with advanced text formatting
*/// region constants
var modelStatePropertyTypes=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .modelStatePropertyTypes */ .Zl),{},{invalidMaximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidMinimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidMaximumLength:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidMinimumLength:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidInvertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),invalidPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol])});var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .propertyTypes */ .Pl),modelStatePropertyTypes),{},{/*
        NOTE: Not yet working:
        align: oneOf(['end', 'start']),
    */align:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,children:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,/*
        NOTE: Not yet working:
        editor: oneOf([
            'code',

            'code(css)',
            'code(cascadingstylesheet)',
            'code(cascadingstylesheets)',
            'code(style)',
            'code(styles)',

            'code(script)',
            'code(js)',
            'code(jsx)',
            'code(javascript)',

            'code(ts)',
            'code(tsx)',
            'code(typescript)',

            'plain',
            'text',
            'richtext'
        ]),
    */editor:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,editorIsActive:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),editorIsInitiallyActive:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,hidden:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),leadingIcon:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object]),trailingIcon:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object]),attributes:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,invertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),invertedPatternText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,labels:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.any,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]))),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)(clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object]),maximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),maximumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,minimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),minimumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,maximumLengthText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,minimumLengthText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,maximumText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,minimumText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,onBlur:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onChangeEditorIsActive:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onKeyDown:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onKeyUp:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onSelect:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,onSelectionChange:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,pattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string]),patternText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,placeholder:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,representation:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.symbol]),rows:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,searchSelection:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,selectableEditor:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,step:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.number,suggestionCreator:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.func,suggestSelection:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,transformer:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object});var renderProperties=["children","suggestionCreator"];var defaultModelState=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultModelState */ .m8),{},{invalidMaximum:false,invalidMinimum:false,invalidMaximumLength:false,invalidMinimumLength:false,invalidInvertedPattern:false,invalidPattern:false});var defaultInputModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultModel */ .$I),{},{state:defaultModelState});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultProperties */ .L6),{},{editor:"plain",selectableEditor:false,rows:4,invertedPatternText:"Your string should not match the regular expression"+"${[].concat(invertedPattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(invertedPattern).join(\"\\\", \\\"\")}\".",maximumLengthText:"Please type less or equal than ${maximumLength} symbols.",minimumLengthText:"Please type at least or equal ${minimumLength} symbols.",maximumText:"Please type less or equal than ${formatValue(maximum)}.",minimumText:"Please type at least or equal ${formatValue(minimum)}.",model:_objectSpread({},defaultInputModel),patternText:"Your string have to match the regular expression"+"${[].concat(pattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(pattern).join(\"\\\", \\\"\")}\".",searchSelection:false,suggestSelection:false,step:1});// endregion

/***/ }),
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
 */function createWrapConfigurationsComponent(WrappedComponent,options){if(options===void 0){options={}}var component=function component(_ref2,reference){var strict=_ref2.strict,theme=_ref2.theme,themeConfiguration=_ref2.themeConfiguration,tooltip=_ref2.tooltip,wrap=_ref2.wrap,properties=_objectWithoutProperties(_ref2,_excluded);var wrapped=/*#__PURE__*/_jsx(WrappedComponent,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},properties),options.withReference===false?{}:reference?{ref:reference}:{}),options.withThemeWrapper&&theme?{theme:theme}:{})));return/*#__PURE__*/_jsx(WrapConfigurations,{strict:strict,themeConfiguration:themeConfiguration,tooltip:tooltip,wrap:wrap,children:options.withThemeWrapper&&theme?/*#__PURE__*/_jsx(Theme,{use:theme,wrap:wrap,children:wrapped}):wrapped})};return options.withReference?/*#__PURE__*/forwardRef(component):component}/* harmony default export */ __webpack_exports__.Ay = (WrapConfigurations);

/***/ }),
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Typography"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_typography_185e7768__.Typography; } });

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ks: function() { return /* binding */ TextInput; },
  Ay: function() { return /* binding */ components_TextInput; }
});

// UNUSED EXPORTS: CODE_EDITOR_OPTIONS, CSS_CLASS_NAMES, INPUT_TRANSFORMER, TIPTAP_DEFAULT_OPTIONS, TextInputInner, determineValidationState, preventEnterKeyPropagation, suggestionMatches

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(7);
// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(6);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-animate"
var external_react_generic_animate_ = __webpack_require__(18);
// EXTERNAL MODULE: external "react-generic-dummy"
var external_react_generic_dummy_ = __webpack_require__(23);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
// EXTERNAL MODULE: ./src/implementations/rmwc/Error.tsx
var rmwc_Error = __webpack_require__(22);
// EXTERNAL MODULE: ./src/implementations/rmwc/Icon.tsx + 1 modules
var Icon = __webpack_require__(20);
// EXTERNAL MODULE: ./src/implementations/rmwc/IconButton.tsx
var IconButton = __webpack_require__(24);
;// external "@rmwc/menu"

// EXTERNAL MODULE: ./src/implementations/rmwc/CircularProgress.tsx + 1 modules
var CircularProgress = __webpack_require__(19);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/Menu.tsx
// -*- coding: utf-8 -*-
/** @module Menu *//* !
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
function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var MenuInner=function MenuInner(properties,reference){var _properties$className,_properties$pendingCl,_properties$className2;var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),surfaceAnchorReference=_useReferenceState2[0],setSurfaceAnchorReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),suggestionMenuAPIReference=_useReferenceState4[0],setSuggestionMenuAPIReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),suggestionMenuFoundationReference=_useReferenceState6[0],setSuggestionMenuFoundationReference=_useReferenceState6[1];(0,external_react_.useImperativeHandle)(reference,function(){return{surfaceAnchor:surfaceAnchorReference,suggestionMenuAPI:suggestionMenuAPIReference,suggestionMenuFoundation:suggestionMenuFoundationReference,focusItem:function focusItem(index){suggestionMenuAPIReference===null||suggestionMenuAPIReference===void 0||suggestionMenuAPIReference.focusItemAtIndex(index)}}},[surfaceAnchorReference,suggestionMenuAPIReference,suggestionMenuFoundationReference]);return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuSurfaceAnchor__,{ref:setSurfaceAnchorReference,onKeyDown:properties.onKeyDown,children:properties.pending?/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuSurface__,{anchorCorner:"bottomLeft",className:((_properties$className=properties.classNames)!==null&&_properties$className!==void 0?_properties$className:[]).concat((_properties$pendingCl=properties.pendingClassNames)!==null&&_properties$pendingCl!==void 0?_properties$pendingCl:[]).join(" "),open:true,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(CircularProgress/* default */.A,{size:"large"})}):/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_Menu__,{anchorCorner:"bottomLeft",apiRef:setSuggestionMenuAPIReference,className:(_properties$className2=properties.classNames)===null||_properties$className2===void 0?void 0:_properties$className2.join(" "),focusOnOpen:false,foundationRef:setSuggestionMenuFoundationReference,onFocus:properties.onFocus,onSelect:properties.onSelect,open:properties.open,children:properties.options.map(function(item,index){var _properties$itemClass;return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_menu_bb137075_MenuItem__,{className:(_properties$itemClass=properties.itemClassNames)===null||_properties$itemClass===void 0?void 0:_properties$itemClass.join(" "),children:item},index)})})})};var Menu=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(MenuInner));/* harmony default export */ var rmwc_Menu = (Menu);
;// external "@rmwc/select"

;// ./src/implementations/rmwc/Select/index.tsx
// -*- coding: utf-8 -*-
/** @module Select *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function Select_slicedToArray(e,i){return Select_iterableToArrayLimit(e,i)||Select_unsupportedIterableToArray(e,i)||Select_nonIterableRest()}function Select_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Select_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return Select_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Select_arrayLikeToArray(t,e):void 0}}function Select_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function Select_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var SelectInner=function SelectInner(properties,reference){var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=Select_slicedToArray(_useReferenceState,2),baseReference=_useReferenceState2[0],setBaseReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=Select_slicedToArray(_useReferenceState3,2),foundationReference=_useReferenceState4[0],setFoundationReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=Select_slicedToArray(_useReferenceState5,2),inputReference=_useReferenceState6[0],setInputReference=_useReferenceState6[1];(0,external_react_.useImperativeHandle)(reference,function(){return{base:baseReference,foundation:foundationReference,input:inputReference}},[baseReference,foundationReference,inputReference]);return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_select_950a51a3_Select__,_objectSpread({disabled:properties.disabled,invalid:properties.invalid,rootProps:(0,external_react_generic_tools_.useMemorizedValue)(_objectSpread({name:properties.name,onClick:properties.onClick},properties.domNodeProperties),properties.name,properties.onClick,properties.domNodeProperties),enhanced:true,ref:setBaseReference,foundationRef:setFoundationReference,inputRef:setInputReference,onChange:properties.onChange,onKeyDown:properties.onKeyDown,options:properties.options,value:String(properties.value),label:properties.label},properties.componentProperties))};var Select=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(SelectInner));/* harmony default export */ var rmwc_Select = (Select);
;// external "@rmwc/textfield"

;// ./src/implementations/rmwc/TextField/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"textInputSuggestionsSuggestionMark":"text-input__suggestions__suggestion__mark"});
;// ./src/implementations/rmwc/TextField/index.tsx
// -*- coding: utf-8 -*-
/** @module TextField *//* !
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
function TextField_typeof(o){"@babel/helpers - typeof";return TextField_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TextField_typeof(o)}function TextField_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function TextField_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?TextField_ownKeys(Object(o),!0).forEach(function(t){TextField_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):TextField_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function TextField_defineProperty(r,t,o){return(t=TextField_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function TextField_toPropertyKey(r){var o=TextField_toPrimitive(r,"string");return"symbol"==TextField_typeof(o)?o:o+""}function TextField_toPrimitive(t,e){if("object"!=TextField_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=TextField_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function TextField_slicedToArray(e,i){return TextField_iterableToArrayLimit(e,i)||TextField_unsupportedIterableToArray(e,i)||TextField_nonIterableRest()}function TextField_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextField_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return TextField_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?TextField_arrayLikeToArray(t,e):void 0}}function TextField_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function TextField_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var TextField=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$className;var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=TextField_slicedToArray(_useReferenceState,2),baseReference=_useReferenceState2[0],setBaseReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=TextField_slicedToArray(_useReferenceState3,2),foundationReference=_useReferenceState4[0],setFoundationReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=TextField_slicedToArray(_useReferenceState5,2),inputReference=_useReferenceState6[0],setInputReference=_useReferenceState6[1];(0,external_react_.useImperativeHandle)(reference,function(){return{base:baseReference,foundation:foundationReference,input:inputReference}},[baseReference,foundationReference,inputReference]);// NOTE: Character count is only supported if maximum length is given.
var isMaximumLength=typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength!==Infinity&&properties.maximumLength>=0;return/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:(_properties$className=properties.classNames)===null||_properties$className===void 0?void 0:_properties$className.join(" "),style:properties.styles,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_textfield_3ec14b9e_TextField__,TextField_objectSpread({characterCount:properties.characterCount&&isMaximumLength,disabled:properties.disabled,invalid:properties.invalid,label:properties.label,name:properties.name,placeholder:properties.placeholder,helpText:properties.helpText,maxLength:isMaximumLength?properties.maximumLength:undefined,ref:setBaseReference,foundationRef:setFoundationReference,inputRef:setInputReference,onChange:properties.onChange,ripple:true,rootProps:(0,external_react_generic_tools_.useMemorizedValue)(TextField_objectSpread({onClick:properties.onClick,onKeyUp:properties.onKeyUp,/*
                        NOTE: Disabled input fields are not focusable via
                        keyboard, which makes them unreachable for blind people
                        using e.g., screen readers. That's why the label gets a
                        tabindex to make the input focusable.
                    */"tab-index":properties.disabled?"0":"-1"},properties.domNodeProperties),properties.name,properties.onClick,properties.onKeyUp,properties.domNodeProperties),icon:properties.leadingIcon?typeof properties.leadingIcon==="string"?properties.leadingIcon:/*#__PURE__*/(0,jsx_runtime_.jsx)(Icon/* default */.A,TextField_objectSpread({},properties.leadingIcon)):undefined,trailingIcon:properties.trailingIcon?typeof properties.trailingIcon==="string"?properties.trailingIcon:/*#__PURE__*/(0,jsx_runtime_.jsx)(Icon/* default */.A,TextField_objectSpread({},properties.trailingIcon)):undefined,type:properties.type,value:properties.value},properties.componentProperties))})})// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;TextField.CSS_CLASS_NAMES=CSS_CLASS_NAMES;/* harmony default export */ var rmwc_TextField = (TextField);
;// external "@material/textfield"

;// ./src/implementations/rmwc/TextArea/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TextArea_style_module = ({"textInput":"text-input","codeEditor":"code-editor","mdcTextFieldDisabled":"mdc-text-field--disabled","cmEditor":"cm-editor","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","mdcIconButtonChecked":"mdc-icon-button--checked","mdcTextFieldCharacterCounter":"mdc-text-field-character-counter","mdcTextFieldWithInternalCounter":"mdc-text-field--with-internal-counter"});
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
function TextArea_typeof(o){"@babel/helpers - typeof";return TextArea_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TextArea_typeof(o)}function TextArea_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function TextArea_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?TextArea_ownKeys(Object(o),!0).forEach(function(t){TextArea_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):TextArea_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function TextArea_defineProperty(r,t,o){return(t=TextArea_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function TextArea_toPropertyKey(r){var o=TextArea_toPrimitive(r,"string");return"symbol"==TextArea_typeof(o)?o:o+""}function TextArea_toPrimitive(t,e){if("object"!=TextArea_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=TextArea_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function TextArea_slicedToArray(e,i){return TextArea_iterableToArrayLimit(e,i)||TextArea_unsupportedIterableToArray(e,i)||TextArea_nonIterableRest()}function TextArea_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextArea_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return TextArea_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?TextArea_arrayLikeToArray(t,e):void 0}}function TextArea_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function TextArea_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var TextArea_CSS_CLASS_NAMES=TextArea_style_module;var OUTLINED=false;var TextArea=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$id,_properties$className,_properties$component,_properties$component2,_properties$helpText;var defaultID=(0,external_react_.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;var classNamePrefix=(_properties$className=properties.classNamePrefix)!==null&&_properties$className!==void 0?_properties$className:"text-area";var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=TextArea_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=TextArea_slicedToArray(_useReferenceState3,2),materialTextFieldReference=_useReferenceState4[0],setMaterialTextFieldReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=TextArea_slicedToArray(_useReferenceState5,2),labelReference=_useReferenceState6[0],setLabelReference=_useReferenceState6[1];var _useReferenceState7=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState8=TextArea_slicedToArray(_useReferenceState7,2),foundationReference=_useReferenceState8[0],setFoundationReference=_useReferenceState8[1];(0,external_react_.useImperativeHandle)(reference,function(){return{foundation:foundationReference,input:inputReference,label:labelReference,materialTextField:materialTextFieldReference}},[foundationReference,inputReference,labelReference,materialTextFieldReference]);(0,external_react_.useEffect)(function(){if(labelReference){var _materialTextFieldReference=new __WEBPACK_EXTERNAL_MODULE__material_textfield_48c3b72f_MDCTextField__(labelReference);setMaterialTextFieldReference(_materialTextFieldReference);setFoundationReference(_materialTextFieldReference.getDefaultFoundation());if(typeof properties.value==="string"){foundationReference===null||foundationReference===void 0||foundationReference.setValue(properties.value);_materialTextFieldReference.value=properties.value}if(typeof properties.disabled==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setDisabled(properties.disabled);_materialTextFieldReference.disabled=properties.disabled}if(typeof properties.invalid==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setValid(!properties.invalid);_materialTextFieldReference.valid=!properties.invalid}if(typeof properties.required==="boolean")_materialTextFieldReference.required=properties.required;foundationReference===null||foundationReference===void 0||foundationReference.setUseNativeValidation(false);return function(){_materialTextFieldReference.destroy()}}},[labelReference,properties.value,properties.disabled,properties.invalid,properties.required,properties.minimumLength,properties.maximumLength]);/*
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
var isMaximumLength=typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength!==Infinity&&properties.maximumLength>=0;var editorContent=/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("textarea",TextArea_objectSpread({ref:setInputReference,id:id,name:properties.name,disabled:properties.disabled,className:"mdc-text-field__input",style:(0,external_react_generic_tools_.useMemorizedValue)(properties.children?TextArea_objectSpread({visibility:"hidden",position:"absolute"},properties.styles):properties.styles,properties.styles),rows:properties.rows,"aria-labelledby":"".concat(id,"-label"),"aria-controls":"".concat(id,"-helper"),"aria-describedby":"".concat(id,"-helper"),readOnly:Boolean(properties.children),value:properties.value,minLength:properties.minimumLength,maxLength:properties.maximumLength,onChange:properties.onChange,onClick:properties.onClick,onBlur:properties.onBlur,onFocus:properties.onFocus,onKeyUp:properties.onKeyUp,onKeyDown:properties.onKeyDown},properties.domNodeProperties)),properties.children,properties.barContentSlot?/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"".concat(classNamePrefix,"__bar"),children:[properties.barContentSlot,properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]}):properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-character-counter"}):""]});var helpText=(0,external_react_generic_tools_.useMemorizedValue)(TextArea_typeof(properties.helpText)==="object"?properties.helpText:{children:properties.helpText},properties.helpText);return/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("label",{ref:setLabelReference,onClick:(0,external_react_generic_tools_.useMemorizedValue)(function(event){if(properties.onLabelClick)properties.onLabelClick(event)},properties.onLabelClick),className:[classNamePrefix,"mdc-text-field","mdc-text-field--textarea"].concat(properties.value===""?"mdc-text-field--textarea":"".concat(classNamePrefix,"--has-content")).concat(properties.disabled?"mdc-text-field--disabled":[])/*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */.concat(OUTLINED?"mdc-text-field--outlined":"mdc-text-field--filled")/*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */.concat(properties.characterCount&&isMaximumLength?"mdc-text-field--with-internal-counter":[]).concat(properties.invalid?"mdc-text-field--invalid":[]).join(" "),children:[((_properties$component=properties.componentProperties)===null||_properties$component===void 0?void 0:_properties$component.ripple)!==false&&!properties.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__ripple"}):"",/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-floating-label",id:"".concat(id,"-label"),children:properties.label}),properties.resizeable?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-text-field__resizer",children:editorContent}):editorContent,((_properties$component2=properties.componentProperties)===null||_properties$component2===void 0?void 0:_properties$component2.ripple)!==false?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"mdc-line-ripple"}):""]}),helpText.children?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"mdc-text-field-helper-line",children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:["mdc-text-field-helper-text"].concat(helpText.persistent?"mdc-text-field-helper-text--persistent":[]).join(" "),id:"".concat(id,"-helper"),children:(_properties$helpText=properties.helpText)!==null&&_properties$helpText!==void 0&&_properties$helpText.children?properties.helpText.children:properties.helpText})}):""]})})// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;TextArea.CSS_CLASS_NAMES=TextArea_CSS_CLASS_NAMES;/* harmony default export */ var rmwc_TextArea = (TextArea);
// EXTERNAL MODULE: ./src/helper.ts + 1 modules
var helper = __webpack_require__(8);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapConfigurations.tsx
var WrapConfigurations = __webpack_require__(12);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapTooltip.tsx + 1 modules
var WrapTooltip = __webpack_require__(9);
// EXTERNAL MODULE: ./src/components/TextInput/helper.ts + 1 modules
var TextInput_helper = __webpack_require__(17);
;// ./src/components/TextInput/transformer.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module transformer *//* !
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
function transformer_typeof(o){"@babel/helpers - typeof";return transformer_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},transformer_typeof(o)}function transformer_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function transformer_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?transformer_ownKeys(Object(o),!0).forEach(function(t){transformer_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):transformer_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function transformer_defineProperty(r,t,o){return(t=transformer_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function transformer_toPropertyKey(r){var o=transformer_toPrimitive(r,"string");return"symbol"==transformer_typeof(o)?o:o+""}function transformer_toPrimitive(t,e){if("object"!=transformer_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=transformer_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var convertEdgeValueToString=function convertEdgeValueToString(value){if(value===Infinity)return"Infinitely far in the future";if(value===-Infinity)return"Infinitely early in the past";if(!isFinite(value))return"";return null};/*
    Matches native date time input representations ("YYYY-MM-DDTHH:MM" with
    optional seconds) which have to be completed to utc date time strings.
    NOTE: Completing arbitrary strings is not an option since the legacy date
    parser interprets any text suffixed with ".000Z" as a date in year 2000.
*/var DATE_TIME_INPUT_PATTERN=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/;var parseDateTimeInputAsUTC=function parseDateTimeInputAsUTC(value){var match=DATE_TIME_INPUT_PATTERN.exec(value);return match?Date.parse("".concat(value).concat(match[1]?"":":00",".000Z")):NaN};var utcSecondsToISOString=function utcSecondsToISOString(value){return new Date(Math.round(value*1000)).toISOString()};var normalizeDateRepresentation=function normalizeDateRepresentation(value){if(value instanceof Date)return value.getTime()/1000;return value};var TRANSFORMER={boolean:{parse:function parse(value){var _Map$get;return typeof value==="boolean"?value:(_Map$get=new Map([["false",false],["true",true],[0,false],[1,true]]).get(value))!==null&&_Map$get!==void 0?_Map$get:true},type:"text"},currency:{format:{final:{options:{currency:"USD"},transform:function transform(value,_ref){var _ref2,_format$final$options,_format$final$options2;var format=_ref.currency.format;var currency=(_ref2=format===null||format===void 0||(_format$final$options=format.final.options)===null||_format$final$options===void 0?void 0:_format$final$options.currency)!==null&&_ref2!==void 0?_ref2:"USD";if(value===Infinity)return"Infinity ".concat(currency);if(value===-Infinity)return"- Infinity ".concat(currency);if(isNaN(value))return"unknown";return new Intl.NumberFormat(TextInput.locales,transformer_objectSpread({style:"currency"},(_format$final$options2=format===null||format===void 0?void 0:format.final.options)!==null&&_format$final$options2!==void 0?_format$final$options2:{})).format(value)}}},parse:function parse(value,transformation,configuration){return transformation.float.parse?transformation.float.parse(value,transformation,configuration):NaN},type:"text"},datetime:{// Converts given utc date representation into iso date time string.
format:{final:{transform:function transform(value,transformation,configuration){if(typeof value!=="number"){if(!transformation.datetime.parse)throw new Error("Missing datetime parse transformation configured. "+"Datetime formatting depends on it.");value=transformation.datetime.parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration)}var edgeValueDescription=convertEdgeValueToString(value);if(typeof edgeValueDescription==="string")return edgeValueDescription;var formattedValue=utcSecondsToISOString(value);/*
                NOTE: This is only needed since the browser input support does
                not expect to adapt more specific than seconds.
            */return formattedValue.substring(0,formattedValue.lastIndexOf("."))}}},parse:function parse(value,_ref3){var useISOString=_ref3.date.useISOString;value=normalizeDateRepresentation(value);if(typeof value==="string"){var parsedDate=parseDateTimeInputAsUTC(value);var modifiedParsing=isNaN(parsedDate);if(modifiedParsing){parsedDate=Date.parse(value);if(isNaN(parsedDate))value=parseFloat(value);else value=parsedDate/1000}if(!modifiedParsing)value=parsedDate/1000}if(isNaN(value))value=0;if(typeof value==="number"&&!isFinite(value))return value;return useISOString?utcSecondsToISOString(value):value},type:"datetime-local"},"datetime-local":{// Converts given utc date representation into iso date time string.
format:{final:{transform:function transform(value,transformation,configuration){if(typeof value!=="number"){if(!transformation["datetime-local"].parse)throw new Error("Missing datetime local parse transformation "+"configured. Datetime local formatting depends on.");value=transformation["datetime-local"].parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration)}var edgeValueDescription=convertEdgeValueToString(value);if(typeof edgeValueDescription==="string")return edgeValueDescription;var formattedValue=utcSecondsToISOString(value-new Date(value*1000).getTimezoneOffset()*60);return formattedValue.substring(0,formattedValue.lastIndexOf("."))}}},parse:function parse(value,_ref4){var useISOString=_ref4.date.useISOString;value=normalizeDateRepresentation(value);if(typeof value==="string"){var parsedDate=parseDateTimeInputAsUTC(value);var modifiedParsing=isNaN(parsedDate);if(modifiedParsing){parsedDate=Date.parse(value);if(isNaN(parsedDate))value=parseFloat(value);else value=parsedDate/1000}/*
                    NOTE: If needed to adapt formatted date time
                    representation.
                */if(!modifiedParsing)value=parsedDate/1000+new Date(parsedDate).getTimezoneOffset()*60}if(isNaN(value))value=0;if(typeof value==="number"&&!isFinite(value))return value;return useISOString?utcSecondsToISOString(value):value}},date:{// Converts given date representation into utc iso date time string.
format:{final:{transform:function transform(value,transformation,configuration){var _transformation$datet;if(!((_transformation$datet=transformation.datetime.format)!==null&&_transformation$datet!==void 0&&_transformation$datet.final.transform))throw new Error("Missing datetime final format transformation "+"configured. Date formatting depends on it.");var formattedValue=transformation.datetime.format.final.transform(value,transformation,configuration);var index=formattedValue.indexOf("T");if(index===-1)return formattedValue;return formattedValue.substring(0,index)}}},/*
            Converts date or strings into unix timestamps (numbers will not be
            changed).
        */parse:function parse(value,transformation,configuration){if(!transformation.datetime.parse)throw new Error("Missing datetime parse transformation configured. "+"Date parsing depends on it.");return transformation.datetime.parse(value,transformation,configuration)},useISOString:true},"date-local":{format:{final:{transform:function transform(value,transformation,configuration){if(typeof value!=="number"){if(!transformation["datetime-local"].parse)throw new Error("Missing datetime local parse transformation "+"configured. Date local formatting depends on it.");value=transformation["datetime-local"].parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration)}var edgeValueDescription=convertEdgeValueToString(value);if(typeof edgeValueDescription==="string")return edgeValueDescription;/*
                NOTE: We need to add timezone offset since we slice time
                afterward (rounding to day).
            */value-=new Date(value*1000).getTimezoneOffset()*60;var formattedValue=utcSecondsToISOString(value);return formattedValue.substring(0,formattedValue.lastIndexOf("T"))}}},/*
            Converts date or strings into unix timestamps (numbers will not be
            changed) or iso string.
        */parse:function parse(value,transformation,configuration){if(!transformation.datetime.parse)throw new Error("Missing datetime parse transformation configured. "+"Date local parsing depends on.");value=transformation.datetime.parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration);var isRoundedToDay=value%(24*Math.pow(60,2))===0;// NOTE: We need to re-apply sliced time for formatting.
if(isRoundedToDay)value+=new Date(value*1000).getTimezoneOffset()*60;if(typeof value==="number"&&!isFinite(value))return value;return transformation.date.useISOString?utcSecondsToISOString(value):value},type:"date"},time:{/*
            Converts given date representation into utc iso date time string on
            1/1/1970.
        */format:{final:{transform:function transform(value,transformation,configuration){if(typeof value!=="number"){if(!transformation.datetime.parse)throw new Error("Missing datetime parse transformation configured. "+"Time formatting depends on it.");value=transformation.datetime.parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration)}if(value===Infinity)value=24*60*60+0.999-1;else if(value===-Infinity)value=0;else if(!isFinite(value))return"";var formattedValue=utcSecondsToISOString(value);var index=formattedValue.indexOf("T");if(index===-1)return formattedValue;formattedValue=formattedValue.substring(index+1,formattedValue.length-1);if(configuration.step&&configuration.step>=60&&configuration.step%60===0)return formattedValue.substring(0,formattedValue.lastIndexOf(":"));return formattedValue}}},// Converts given date representation normalized parseable format.
parse:function parse(value,_ref5){var useISOString=_ref5.date.useISOString;value=normalizeDateRepresentation(value);if(typeof value==="string"){var parsedDate=Date.parse(value);if(isNaN(parsedDate)){var parsedFloat=parseFloat(value.replace(/^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,function(_match,hours,minutes,secondsSuffix,seconds){return String(parseInt(hours)*Math.pow(60,2)+parseInt(minutes)*60+(secondsSuffix&&typeof seconds!=="undefined"?parseFloat(seconds):0))}));value=isNaN(parsedFloat)?0:parsedFloat}else value=parsedDate/1000}if(isNaN(value))value=0;if(typeof value==="number"&&!isFinite(value))return value;return useISOString?utcSecondsToISOString(value):value}},/*
        NOTE: Daylight saving time should not make a difference since times
        will always be based on zero unix timestamp (1/1/1970) where no
        daylight saving time rule exist.
    */"time-local":{/*
            Converts given date representation into local iso date time string
            on 1/1/1970.
        */format:{final:{transform:function transform(value,transformation,configuration){if(typeof value!=="number"){if(!transformation["time-local"].parse)throw new Error("Missing time local parse transformation "+"configured. Time local formatting depends on it.");value=transformation["time-local"].parse(value,transformer_objectSpread(transformer_objectSpread({},transformation),{},{date:transformer_objectSpread(transformer_objectSpread({},transformation.date),{},{useISOString:false})}),configuration)}if(value===Infinity)value=24*60*60;else if(value===-Infinity)value=0;else if(!isFinite(value))return"";/*
                NOTE: For time without any date information we cannot determine
                a time zone shift since it depends on connected date because of
                political changes and daylight saving periods.

                When transforming time into local time we would have to add
                the local timezone offset like:

                + CURRENT_DATE.getTimezoneOffset() * 60
            */var dateTime=new Date(value*1000);var hours=dateTime.getHours();var minutes=dateTime.getMinutes();var formattedValue="".concat(hours<10?"0":"").concat(String(hours),":")+"".concat(minutes<10?"0":"").concat(String(minutes));if(!(configuration.step&&configuration.step>=60&&configuration.step%60===0)){var seconds=dateTime.getSeconds();return"".concat(formattedValue,":").concat(seconds<10?"0":"")+String(seconds)}return formattedValue}}},/*
            Converts given date representation into unix time stamp while local
            time shift is taken into account.
        */parse:function parse(value,_ref6){var useISOString=_ref6.date.useISOString;value=normalizeDateRepresentation(value);if(typeof value==="string"){var parsedDate=Date.parse(value);if(isNaN(parsedDate)){var parsedFloat=parseFloat(value.replace(/^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,function(_match,hours,minutes,secondsSuffix,seconds){var zeroDateTime=new Date(0);zeroDateTime.setHours(parseInt(hours));zeroDateTime.setMinutes(parseInt(minutes));if(secondsSuffix&&typeof seconds!=="undefined")zeroDateTime.setSeconds(parseInt(seconds));return String(zeroDateTime.getTime()/1000)}));value=isNaN(parsedFloat)?0:parsedFloat}else value=parsedDate/1000}if(isNaN(value))value=0;if(typeof value==="number"&&!isFinite(value))return value;return useISOString?utcSecondsToISOString(value):value},type:"time"},float:{format:{final:{transform:function transform(value,_ref7){var format=_ref7.float.format;return format?value===Infinity?"Infinity":value===-Infinity?"- Infinity":new Intl.NumberFormat(TextInput.locales,format.final.options||{}).format(value):String(value)}}},parse:function parse(value,_transformation,_ref8){var maximum=_ref8.maximum,minimum=_ref8.minimum;if(typeof value==="string")value=parseFloat(TextInput.locales[0]==="de-DE"?value.replace(/\./g,"").replace(/,/g,"."):value);// Fix sign if possible.
if(typeof minimum==="number"&&minimum>=0&&value<0||typeof maximum==="number"&&maximum<=0&&value>0)value*=-1;return value},type:"text"},integer:{format:{final:{transform:function transform(value,_ref9){var _format$final$options3;var format=_ref9.integer.format;return format?value===Infinity?"Infinity":value===-Infinity?"- Infinity":new Intl.NumberFormat(TextInput.locales,transformer_objectSpread({maximumFractionDigits:0},(_format$final$options3=format.final.options)!==null&&_format$final$options3!==void 0?_format$final$options3:{})).format(value):String(value)}}},parse:function parse(value,_transformation,_ref0){var maximum=_ref0.maximum,minimum=_ref0.minimum;if(typeof value==="string")value=parseInt(TextInput.locales[0]==="de-DE"?value.replace(/[,.]/g,""):value);// Fix sign if possible.
if(typeof minimum==="number"&&minimum>=0&&value<0||typeof maximum==="number"&&maximum<=0&&value>0)value*=-1;return value},type:"text"},number:{parse:function parse(value){return typeof value==="number"?value:parseInt(value)}}};// endregion
/* harmony default export */ var transformer = (TRANSFORMER);
// EXTERNAL MODULE: ./src/components/TextInput/type.ts
var type = __webpack_require__(10);
;// ./src/components/TextInput/index.tsx
/* unused harmony import specifier */ var TextInput_TRANSFORMER;
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
function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=TextInput_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function TextInput_slicedToArray(e,i){return TextInput_iterableToArrayLimit(e,i)||TextInput_unsupportedIterableToArray(e,i)||TextInput_nonIterableRest()}function TextInput_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextInput_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return TextInput_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?TextInput_arrayLikeToArray(t,e):void 0}}function TextInput_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function TextInput_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function TextInput_typeof(o){"@babel/helpers - typeof";return TextInput_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TextInput_typeof(o)}function TextInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function TextInput_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?TextInput_ownKeys(Object(o),!0).forEach(function(t){TextInput_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):TextInput_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function TextInput_defineProperty(r,t,o){return(t=TextInput_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function TextInput_toPropertyKey(r){var o=TextInput_toPrimitive(r,"string");return"symbol"==TextInput_typeof(o)?o:o+""}function TextInput_toPrimitive(t,e){if("object"!=TextInput_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=TextInput_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var INPUT_TRANSFORMER=(/* unused pure expression or super */ null && (TextInput_TRANSFORMER));/*
    NOTE: Editors (and their heavy dependencies) are only loaded when an input
    really needs them. They are referenced via their public package entry
    points to remain separate modules in the final bundle (instead of
    internal chunks which could not be resolved by consumers).
*/var CodeEditorComponent=/*#__PURE__*/(0,external_react_.lazy)(function(){return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 25))});var RichTextEditorComponent=/*#__PURE__*/(0,external_react_.lazy)(function(){return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 26))});/**
 * Generic text input wrapper component which automatically determines a useful
 * input field depending on given model specification.
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
 * @property displayName - Descriptive name for component to show in web
 * developer tools.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */var TextInputInner=function TextInputInner(props,reference){var _props$id,_givenProperties$mode2,_givenProperties$mode3,_givenProperties$mode4,_givenProperties$mode5,_givenProps$model,_properties$value;var defaultID=(0,external_react_.useId)();var id=(_props$id=props.id)!==null&&_props$id!==void 0?_props$id:defaultID;// region context helper
/// region render helper
/**
     * Applies icon preset configurations.
     * @param options - Icon options to extend of known preset identified.
     * @returns Given potential extended icon configuration.
     */var applyIconPreset=function applyIconPreset(options){if(options==="clear_preset"){var handler=function handler(event){if(event.code&&!["Enter","Space"].includes(event.code))return;event.preventDefault();event.stopPropagation();onChangeValue((0,helper/* parseValue */.$x)(properties,properties.default,TextInput.transformer,!controlled&&properties.model.trim))};var hide=(0,external_clientnode_.equals)(properties.value,properties.default)||[null,undefined].includes(properties.value)&&[null,undefined].includes(properties.default);return{icon:/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:!hide,children:TextInput_helper/* UseAnimations */.Zb&&!TextInput_helper/* UseAnimations */.Zb.isDummy&&TextInput_helper/* plusToXAnimation */.a5?/*#__PURE__*/(0,jsx_runtime_.jsx)(TextInput_helper/* UseAnimations */.Zb,{animation:TextInput_helper/* plusToXAnimation */.a5,active:Boolean(properties.value)}):/*#__PURE__*/(0,jsx_runtime_.jsx)(Icon/* default */.A,{icon:"clear"})}),componentProperties:{"aria-hidden":hide?"true":"false","tab-index":hide?-1:0},onClick:handler,onKeyDown:handler,strategy:"component",tooltip:"Clear input"}}if(options==="password_preset"){var _handler=function _handler(event){if(event.code&&!["Enter","Space"].includes(event.code))return;event.preventDefault();event.stopPropagation();setHidden(function(value){if(value===undefined)value=properties.hidden;properties.hidden=!value;onChange(event);return properties.hidden})};return{icon:TextInput_helper/* UseAnimations */.Zb&&!TextInput_helper/* UseAnimations */.Zb.isDummy&&TextInput_helper/* lockAnimation */.Wi?/*#__PURE__*/(0,jsx_runtime_.jsx)(TextInput_helper/* UseAnimations */.Zb,{animation:TextInput_helper/* lockAnimation */.Wi,active:!properties.hidden}):properties.hidden?"lock_open":"lock",onClick:_handler,onKeyDown:_handler,strategy:"component",tooltip:"".concat(properties.hidden?"Show":"Hide"," password")}}if(options){if(typeof options==="string")options={icon:options};if(!Object.prototype.hasOwnProperty.call(options,"onClick")){var _options$domNodePrope;options.domNodeProperties=(_options$domNodePrope=options.domNodeProperties)!==null&&_options$domNodePrope!==void 0?_options$domNodePrope:{};options.domNodeProperties["tab-index"]=-1;options.domNodeProperties["aria-hidden"]=true}}return options};/**
     * Derives native input type from given input property configuration.
     * @param properties - Input configuration to derive native input type
     * from.
     * @returns Determined input type.
     */var determineNativeType=function determineNativeType(properties){var _transformer$type,_transformer;return properties.type==="string"?properties.hidden?"password":useSuggestions?"search":"text":(_transformer$type=(_transformer=transformer[properties.type])===null||_transformer===void 0?void 0:_transformer.type)!==null&&_transformer$type!==void 0?_transformer$type:properties.type};/**
     * Render help or error texts with current validation state color.
     * @returns Determined renderable markup specification.
     */var renderHelpText=function renderHelpText(){return/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:properties.selectableEditor&&properties.type==="string"&&properties.editor!=="plain",children:/*#__PURE__*/(0,jsx_runtime_.jsx)(IconButton/* default */.A,{classNames:[properties.editor.startsWith("code")?TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputCodeEditorButton:TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputRichtextEditorButton],domNodeProperties:{"aria-label":properties.editorIsActive?"plain":properties.editor.startsWith("code")?"code":"richtext"},icon:properties.editorIsActive?"subject":properties.editor.startsWith("code")?"code":"text_format",onClick:onChangeEditorIsActive})}),/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:Boolean(properties.declaration),children:/*#__PURE__*/(0,jsx_runtime_.jsx)(IconButton/* default */.A,{"aria-expanded":properties.showDeclaration?"true":"false","aria-label":"declaration",value:properties.showDeclaration,icon:"more_horiz",onIcon:"more_vert",onChange:onChangeShowDeclaration})}),/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{id:"".concat(id,"-declaration"),in:properties.showDeclaration,children:properties.declaration}),/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:!properties.showDeclaration&&properties.invalid&&properties.showValidationState&&(properties.showInitialValidationState||properties.visited),children:/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Error/* default */.A,{applyToChildren:true,children:/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{id:"".concat(id,"-error-message"),children:(0,helper/* renderMessage */.e4)(properties.invalidMaximum&&properties.maximumText||properties.invalidMaximumLength&&properties.maximumLengthText||properties.invalidMinimum&&properties.minimumText||properties.invalidMinimumLength&&properties.minimumLengthText||properties.invalidInvertedPattern&&properties.invertedPatternText||properties.invalidPattern&&properties.patternText||properties.invalidRequired&&properties.requiredText,TextInput_objectSpread({formatValue:function formatValue(value){return (0,helper/* formatValue */.Fl)(properties,value,transformer)}},properties))})})})]})};/**
     * Wraps given component with animation component if given condition holds.
     * @param content - Component or string to wrap.
     * @param propertiesOrInCondition - Animation properties or in condition
     * only.
     * @param doAnimationCondition - Show condition.
     * @returns Wrapped component.
     */var wrapAnimationConditionally=function wrapAnimationConditionally(content,propertiesOrInCondition,doAnimationCondition){if(propertiesOrInCondition===void 0){propertiesOrInCondition={}}if(doAnimationCondition===void 0){doAnimationCondition=true}if(typeof propertiesOrInCondition==="boolean")return doAnimationCondition?/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:propertiesOrInCondition,children:content}):propertiesOrInCondition?content:"";return doAnimationCondition?/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],TextInput_objectSpread(TextInput_objectSpread({},propertiesOrInCondition),{},{children:content})):propertiesOrInCondition.in?content:""};/**
     * If given icon options has an additional tooltip configuration integrate
     * a wrapping tooltip component into given configuration and remove initial
     * tooltip configuration.
     * @param options - Icon configuration potential extended a tooltip
     * configuration.
     * @returns Resolved icon configuration.
     */var wrapIconWithTooltip=function wrapIconWithTooltip(options){if(TextInput_typeof(options)==="object"&&options.tooltip){var tooltip=options.tooltip;options=TextInput_objectSpread({},options);delete options.tooltip;var nestedOptions=TextInput_objectSpread({},options);options.strategy="component";options.icon=/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapTooltip/* default */.Ay,{value:tooltip,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(Icon/* default */.A,TextInput_objectSpread({},nestedOptions))})}return options};/// endregion
/// region property aggregation
var deriveMissingPropertiesFromState=function deriveMissingPropertiesFromState(){if(givenProperties.editorIsActive===undefined)givenProperties.editorIsActive=editorIsActive;if(givenProperties.hidden===undefined)givenProperties.hidden=hidden;/*
            NOTE: This logic is important to re-determine representation when a
            new value is provided via properties.
        */if(givenProperties.representation===undefined)givenProperties.representation=valueState.representation;if(givenProperties.showDeclaration===undefined)givenProperties.showDeclaration=showDeclaration;(0,helper/* deriveMissingPropertiesFromState */.aU)(givenProperties,valueState);if(givenProperties.value===undefined){var _givenProperties$mode;if(givenProperties.representation===undefined&&((_givenProperties$mode=givenProperties.model)===null||_givenProperties$mode===void 0?void 0:_givenProperties$mode.value)===undefined)givenProperties.representation=valueState.representation}else if(!representationControlled&&givenProperties.value!==valueState.value)/*
                NOTE: Set representation to "undefined" to trigger to derive
                current representation from current value.
            */givenProperties.representation=undefined};/**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @param properties - Properties to merge.
     * @returns Default properties.
     */var mapPropertiesAndValidationStateIntoModel=function mapPropertiesAndValidationStateIntoModel(properties){var _properties$model;var result=(0,helper/* mapPropertiesIntoModel */.hX)(properties,TextInput.defaultProperties.model);result.model.value=(0,helper/* parseValue */.$x)(result,result.model.value,transformer,!controlled&&((_properties$model=properties.model)===null||_properties$model===void 0?void 0:_properties$model.trim));(0,TextInput_helper/* determineValidationState */.sy)(result,result.model.state);return result};/**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */var getConsolidatedProperties=function getConsolidatedProperties(properties){var result=(0,helper/* getConsolidatedProperties */.n$)(mapPropertiesAndValidationStateIntoModel(properties));if(["plain","text"].includes(result.editor))result.selectableEditor=false;// NOTE: If only an editor is specified it should be displayed.
if(!(result.selectableEditor||result.editor==="plain"))result.editorIsActive=true;if(typeof result.representation!=="string")result.representation=(0,helper/* formatValue */.Fl)(result,result.value,transformer,/*
                    NOTE: Handle two cases:

                    1. Representation has to be determined initially
                       (-> usually no focus).
                    2. Representation was set from the outside
                       (-> usually no focus).
                */!result.focused);return result};/// endregion
// endregion
// region properties
var givenProps=(0,helper/* translateKnownSymbols */.F_)(props);var _useState=(0,external_react_.useState)(givenProps.editorIsInitiallyActive||false),_useState2=TextInput_slicedToArray(_useState,2),editorIsActive=_useState2[0],setEditorIsActive=_useState2[1];var _useState3=(0,external_react_.useState)(),_useState4=TextInput_slicedToArray(_useState3,2),hidden=_useState4[0],setHidden=_useState4[1];var _useState5=(0,external_react_.useState)(false),_useState6=TextInput_slicedToArray(_useState5,2),isSuggestionOpen=_useState6[0],setIsSuggestionOpen=_useState6[1];var _useState7=(0,external_react_.useState)(false),_useState8=TextInput_slicedToArray(_useState7,2),showDeclaration=_useState8[0],setShowDeclaration=_useState8[1];var initialValue=(0,helper/* determineInitialValue */.zu)(givenProps,TextInput.defaultProperties.model.default);if(initialValue instanceof Date)initialValue=initialValue.getTime()/1000;/*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */var givenProperties=(0,external_clientnode_.extend)(true,(0,external_clientnode_.copy)(TextInput.defaultProperties),givenProps);var type=givenProperties.type||((_givenProperties$mode2=givenProperties.model)===null||_givenProperties$mode2===void 0?void 0:_givenProperties$mode2.type)||"string";var transformer=givenProperties.transformer?TextInput_objectSpread(TextInput_objectSpread({},TextInput.transformer),{},TextInput_defineProperty({},type,(0,external_clientnode_.extend)(true,(0,external_clientnode_.copy)(TextInput.transformer[type])||{},givenProperties.transformer))):TextInput.transformer;// region selection normalization
var _useState9=(0,external_react_.useState)(),_useState0=TextInput_slicedToArray(_useState9,2),selection=_useState0[0],setSelection=_useState0[1];if(givenProperties.selection||(_givenProperties$mode3=givenProperties.model)!==null&&_givenProperties$mode3!==void 0&&_givenProperties$mode3.selection)selection=givenProperties.selection||((_givenProperties$mode4=givenProperties.model)===null||_givenProperties$mode4===void 0?void 0:_givenProperties$mode4.selection);if(!selection&&(givenProperties.type||((_givenProperties$mode5=givenProperties.model)===null||_givenProperties$mode5===void 0?void 0:_givenProperties$mode5.type))==="boolean")selection=[{label:"No",value:false},{label:"Yes",value:true}];var normalizedSelection=selection instanceof AbortController?[]:(0,helper/* normalizeSelection */.Wz)(selection,givenProperties.labels);var _ref=selection instanceof AbortController?[[],[]]:(0,helper/* getLabelAndValues */.os)(normalizedSelection),_ref2=TextInput_slicedToArray(_ref,2),suggestionLabels=_ref2[0],suggestionValues=_ref2[1];// endregion
/*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */var _useState1=(0,external_react_.useState)(function(){return{modelState:TextInput_objectSpread({},TextInput.defaultModelState),representation:(0,helper/* determineInitialRepresentation */.f4)(givenProperties,TextInput.defaultProperties,initialValue,transformer,normalizedSelection),value:initialValue}}),_useState10=TextInput_slicedToArray(_useState1,2),valueState=_useState10[0],setValueState=_useState10[1];/*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */var controlled=!givenProperties.enforceUncontrolled&&(((_givenProps$model=givenProps.model)===null||_givenProps$model===void 0?void 0:_givenProps$model.value)!==undefined||givenProps.value!==undefined)&&Boolean(givenProps.onChange||givenProps.onChangeValue);var representationControlled=controlled&&givenProps.representation!==undefined;deriveMissingPropertiesFromState();var properties=getConsolidatedProperties(givenProperties);if(properties.hidden===undefined)properties.hidden=properties.name.startsWith("password");/// region synchronize properties into state where values are not controlled
if(properties.editorIsActive!==editorIsActive)setEditorIsActive(properties.editorIsActive);if(properties.hidden!==hidden)setHidden(properties.hidden);if(properties.showDeclaration!==showDeclaration)setShowDeclaration(properties.showDeclaration);var currentValueState={modelState:properties.model.state,representation:properties.representation,value:(_properties$value=properties.value)!==null&&_properties$value!==void 0?_properties$value:null};/*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */if(!controlled&&(!(0,external_clientnode_.equals)(properties.value,valueState.value)||properties.representation!==valueState.representation)||!(0,external_clientnode_.equals)(properties.model.state,valueState.modelState))setValueState(currentValueState);if(controlled)setValueState=(0,helper/* wrapStateSetter */.Dv)(setValueState,currentValueState);/// endregion
var propertiesChangedIndicator=(0,TextInput_helper/* usePropertiesChangedIndicator */.s$)(properties);// endregion
// region event handler
/**
     * Triggered on blur events.
     * @param event - Event object.
     */var onBlur=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){if(event.relatedTarget&&wrapperReference!==null&&wrapperReference!==void 0&&wrapperReference.contains(event.relatedTarget))return oldValueState;setIsSuggestionOpen(false);var changed=false;var stateChanged=false;if(oldValueState.modelState.focused){properties.focused=false;changed=true;stateChanged=true}if(!oldValueState.modelState.visited){properties.visited=true;changed=true;stateChanged=true}if(!useSuggestions||properties.suggestSelection){var candidate=(0,helper/* getValueFromSelection */.M0)(properties.representation,normalizedSelection);if(candidate===null){properties.value=(0,helper/* parseValue */.$x)(properties,properties.value,transformer,properties.model.trim);properties.representation=(0,helper/* formatValue */.Fl)(properties,properties.value,transformer)}else properties.value=candidate}if(!(0,external_clientnode_.equals)(oldValueState.value,properties.value)||oldValueState.representation!==properties.representation)changed=true;if(changed)onChange(event);if(!(0,external_clientnode_.equals)(oldValueState.value,properties.value))(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeValue",controlled,properties.value,event,properties);if(stateChanged)(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties);(0,helper/* triggerCallbackIfExists */.LI)(properties,"blur",controlled,event,properties);return changed?{modelState:properties.model.state,representation:properties.representation,value:properties.value}:oldValueState})},[propertiesChangedIndicator]);/**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     */var onChange=(0,external_react_.useCallback)(function(event){(0,external_clientnode_.extend)(true,properties,getConsolidatedProperties(/*
                        Workaround since "Type" isn't identified as subset of
                        "RecursivePartial<Type>" yet.
                    */properties));(0,helper/* triggerCallbackIfExists */.LI)(properties,"change",controlled,properties,event)},[propertiesChangedIndicator]);/**
     * Triggered when editor is active indicator should be changed.
     * @param event - Mouse event object.
     */var onChangeEditorIsActive=(0,external_react_.useCallback)(function(event){event.preventDefault();event.stopPropagation();setEditorIsActive(function(editorIsActive){properties.editorIsActive=!editorIsActive;onChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeEditorIsActive",controlled,properties.editorIsActive,event,properties);return properties.editorIsActive})},[propertiesChangedIndicator]);/**
     * Triggered when show declaration indicator should be changed.
     * @param event - Potential event object.
     */var onChangeShowDeclaration=(0,external_react_.useCallback)(function(event){setShowDeclaration(function(value){properties.showDeclaration=!value;onChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeShowDeclaration",controlled,properties.showDeclaration,event,properties);return properties.showDeclaration})},[propertiesChangedIndicator]);/**
     * Triggered when ever the value changes.
     * Takes a given value or determines it from given event object and
     * generates new value state (internal value, representation and validation
     * states). Derived event handler will be triggered when internal state has
     * been consolidated.
     * @param eventOrValue - Event object or new value.
     * @param selectedIndex - Indicates whether given event was triggered by a
     * selection.
     */var onChangeValue=(0,external_react_.useCallback)(function(eventOrValue,selectedIndex){if(selectedIndex===void 0){selectedIndex=-1}setIsSuggestionOpen(true);var event;if((0,external_clientnode_.isObject)(eventOrValue)){event=eventOrValue;var target=event.target||event.detail;if(target)properties.value=typeof target.value==="undefined"?null:target.value;else properties.value=eventOrValue}else properties.value=eventOrValue;var setHelper=function setHelper(){setValueState(function(oldValueState){if(!representationControlled&&oldValueState.representation===properties.representation&&/*
                            NOTE: Unstable intermediate states have to be
                            synced of a suggestion creator was pending.
                        */!properties.suggestionCreator&&selectedIndex===-1)/*
                            NOTE: No representation update and no controlled
                            value or representation:

                                -> No value update
                                -> No state update
                                -> Nothing to trigger
                        */return oldValueState;var valueState=TextInput_objectSpread(TextInput_objectSpread({},oldValueState),{},{representation:properties.representation});if(!controlled&&(0,external_clientnode_.equals)(oldValueState.value,properties.value))/*
                            NOTE: No value update and no controlled value:

                                -> No state update
                                -> Nothing to trigger
                        */return valueState;valueState.value=properties.value;var stateChanged=false;if(oldValueState.modelState.pristine){properties.dirty=true;properties.pristine=false;stateChanged=true}onChange(event);if((0,TextInput_helper/* determineValidationState */.sy)(properties,oldValueState.modelState))stateChanged=true;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeValue",controlled,properties.value,event,properties);if(stateChanged&&properties.model.state){valueState.modelState=properties.model.state;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)}if(isSelection||selectedIndex!==-1)(0,helper/* triggerCallbackIfExists */.LI)(properties,"select",controlled,event,properties);return valueState})};var trim=!controlled&&properties.model.trim;properties.representation=selectedIndex!==-1?currentSuggestionLabels[selectedIndex]:typeof properties.value==="string"?properties.value:(0,helper/* formatValue */.Fl)(properties,properties.value,transformer);if(!useSuggestions){properties.value=(0,helper/* parseValue */.$x)(properties,properties.value,transformer,trim);setHelper()}else if(properties.suggestionCreator){var abortController=new AbortController;var onResultsRetrieved=function onResultsRetrieved(results){if(abortController.signal.aborted)return;/*
                        NOTE: A synchronous retrieved selection may have to
                        stop a pending (slower) asynchronous request.
                    */setSelection(function(oldSelection){if(oldSelection instanceof AbortController&&!oldSelection.signal.aborted)oldSelection.abort();return results});if(selectedIndex===-1){var _result=(0,helper/* getValueFromSelection */.M0)(properties.representation,(0,helper/* normalizeSelection */.Wz)(results));if(_result!==null||properties.searchSelection)properties.value=_result;else properties.value=(0,helper/* parseValue */.$x)(properties,properties.representation,transformer,trim)}setHelper()};/*
                    Trigger asynchronous suggestions retrieving and delayed
                    state consolidation.
                */var result=properties.suggestionCreator({abortController:abortController,properties:properties,query:properties.representation});if(result!==null&&result!==void 0&&result.then){setSelection(function(oldSelection){if(oldSelection instanceof AbortController&&!oldSelection.signal.aborted)oldSelection.abort();return abortController});/*
                        NOTE: Immediate sync current representation to maintain
                        cursor state.
                    */setValueState(function(oldValueState){return TextInput_objectSpread(TextInput_objectSpread({},oldValueState),{},{representation:properties.representation})});result.then(onResultsRetrieved,/*
                            NOTE: Avoid to through an exception when aborting
                            the request intentionally.
                        */function(){// Do nothing regardless of an error.
})}else onResultsRetrieved(result)}else{if(selectedIndex===-1){/*
                        Map value from given selections and trigger state
                        consolidation.
                    */var _result2=(0,helper/* getValueFromSelection */.M0)(properties.representation,normalizedSelection);if(_result2!==null||properties.searchSelection)properties.value=_result2;else properties.value=(0,helper/* parseValue */.$x)(properties,properties.representation,transformer,trim)}setHelper()}},[propertiesChangedIndicator]);/**
     * Triggered on click events.
     * @param event - Mouse event object.
     */var onClick=(0,external_react_.useCallback)(function(event){onSelectionChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"click",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggered on focus events and opens suggestions.
     * @param event - Focus event object.
     */var triggerOnFocusAndOpenSuggestions=(0,external_react_.useCallback)(function(event){setIsSuggestionOpen(true);onFocus(event)},[propertiesChangedIndicator]);/**
     * Triggered on focus events.
     * @param event - Focus event object.
     */var onFocus=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"focus",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggered on key down events.
     * @param event - Key up event object.
     */var onKeyDown=(0,external_react_.useCallback)(function(event){if(!properties.disabled&&useSuggestions&&"ArrowDown"===event.code&&event.target===(inputReference===null||inputReference===void 0?void 0:inputReference.input))menuReference===null||menuReference===void 0||menuReference.focusItem(0);/*
                NOTE: We do not want to forward keydown enter events coming
                from textareas.
            */if(isSelection||properties.type==="string"&&properties.editor!=="plain")(0,TextInput_helper/* preventEnterKeyPropagation */.i9)(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"keyDown",controlled,event,properties)},[propertiesChangedIndicator]);/**
     * Triggered on key up events.
     * @param event - Key up event object.
     */var onKeyUp=(0,external_react_.useCallback)(function(event){// NOTE: Avoid breaking password-filler on non textarea fields!
if(event.code){onSelectionChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"keyUp",controlled,event,properties)}},[propertiesChangedIndicator]);/**
     * Triggered on selection change events.
     * @param event - Event which triggered selection change.
     */var onSelectionChange=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"selectionChange",controlled,event,properties)},[propertiesChangedIndicator]);/**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     */var onTouch=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){var changedState=false;if(!oldValueState.modelState.focused){properties.focused=true;changedState=true}if(oldValueState.modelState.untouched){properties.touched=true;properties.untouched=false;changedState=true}var result=oldValueState;if(changedState){onChange(event);result=TextInput_objectSpread(TextInput_objectSpread({},oldValueState),{},{modelState:properties.model.state});(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)};(0,helper/* triggerCallbackIfExists */.LI)(properties,"touch",controlled,event,properties);return result})},[propertiesChangedIndicator]);// endregion
// region export references
var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=TextInput_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=TextInput_slicedToArray(_useReferenceState3,2),menuReference=_useReferenceState4[0],setMenuReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=TextInput_slicedToArray(_useReferenceState5,2),wrapperReference=_useReferenceState6[0],setWrapperReference=_useReferenceState6[1];(0,external_react_.useImperativeHandle)(reference,function(){var state={modelState:properties.model.state};var _iterator=_createForOfIteratorHelper(["editorIsActive","hidden","showDeclaration"]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _properties$name;var name=_step.value;if(!Object.prototype.hasOwnProperty.call(givenProps,name))state[name]=(_properties$name=properties[name])!==null&&_properties$name!==void 0?_properties$name:false}}catch(err){_iterator.e(err)}finally{_iterator.f()}if(!representationControlled)state.representation=properties.representation;if(!controlled)state.value=properties.value;return{properties:properties,references:{input:inputReference,menu:menuReference,wrapper:wrapperReference},state:state}},[propertiesChangedIndicator,inputReference,menuReference,wrapperReference]);// endregion
// region intermediate render properties
var textInputProperties={ref:setInputReference,/*
            NOTE: If not, set label with forbidden symbols will automatically
            be used.
        */id:id,componentProperties:properties.componentProperties,domNodeProperties:properties.domNodeProperties,onClick:onClick,onFocus:triggerOnFocusAndOpenSuggestions,disabled:properties.disabled,invalid:properties.invalid&&properties.showValidationState&&(properties.showInitialValidationState||properties.visited),helpText:{children:renderHelpText(),persistent:true},name:properties.name||properties.description,label:properties.description||properties.name/*
            NOTE: Validation is not handled by the low level component like
            this:

            pattern: properties.pattern,
            required: properties.required
        */};var typeTextInputProperties={placeholder:properties.placeholder,characterCount:typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength>=0,value:properties.representation,/*
            NOTE: Disabled input fields are not focusable via keyboard which
            makes them unreachable for blind people using e.g. screen readers.
            That's why the label gets a tabindex to make the input focusable.
        */domNodeProperties:TextInput_objectSpread({"tab-index":properties.disabled?"0":"-1"},properties.domNodeProperties),onKeyUp:onKeyUp};var isAdvancedEditor=!properties.selection&&properties.type==="string"&&properties.editorIsActive&&(properties.editor==="code"||properties.editor.startsWith("code(")&&properties.editor.endsWith(")")||properties.editor==="richtext"||properties.editor.startsWith("richtext(")&&properties.editor.endsWith(")"));var isCodeEditor=isAdvancedEditor&&properties.editor.startsWith("code");var currentRenderableSuggestions=[];var currentSuggestionLabels=[];var currentSuggestionValues=[];var useSuggestions=Boolean(properties.suggestionCreator||suggestionLabels.length&&(properties.searchSelection||properties.suggestSelection));if(useSuggestions&&suggestionLabels.length){// NOTE: Create consistent property configuration.
properties.suggestSelection=!properties.searchSelection;var index=0;var _iterator2=_createForOfIteratorHelper(suggestionLabels),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var suggestion=_step2.value;if((0,external_clientnode_.isFunction)(properties.children)){var result=properties.children({index:index,normalizedSelection:normalizedSelection,properties:properties,query:properties.representation,suggestion:suggestion,value:suggestionValues[index]});if(result){currentRenderableSuggestions.push(result);currentSuggestionLabels.push(suggestion);currentSuggestionValues.push(suggestionValues[index])}}else if(!properties.representation||properties.suggestionCreator||(0,TextInput_helper/* suggestionMatches */.EM)(suggestion,properties.representation)){var _properties$represent;var marked=(0,external_clientnode_.mark)(String(suggestion),((_properties$represent=properties.representation)===null||_properties$represent===void 0?void 0:_properties$represent.split(" "))||"",{marker:function marker(foundWord){return(/*
                                Just indicate a marked word by wrapping a
                                single element with an array.
                            */[foundWord])},skipTagDelimitedParts:null}).map(function(item,index){return Array.isArray(item)?/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputSuggestionsSuggestionMark,children:item[0]},index):/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{children:item},index)});currentRenderableSuggestions.push(marked);currentSuggestionLabels.push(suggestion);currentSuggestionValues.push(suggestionValues[index])}index+=1}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}var isSelection=(Boolean(normalizedSelection)||Boolean(properties.labels))&&!useSuggestions;// endregion
// region determine type specific constraints
var typeTextConstraints={};if(properties.type==="number"){typeTextConstraints.step=properties.step;if(properties.maximum!==Infinity)typeTextConstraints.max=properties.maximum;if(properties.minimum!==-Infinity)typeTextConstraints.min=properties.minimum}else if(properties.type==="string"){if(properties.maximumLength>=0&&properties.maximumLength!==Infinity)typeTextConstraints.maximumLength=properties.maximumLength;if(properties.minimumLength>0)typeTextConstraints.minimumLength=properties.minimumLength;if(properties.editor!=="plain")typeTextConstraints.rows=properties.rows}else if(["date","date-local","date","date-local","datetime","datetime-local","time","time-local"].includes(properties.type)){typeTextConstraints.step=properties.step;if(properties.maximum!==Infinity)typeTextConstraints.max=(0,helper/* formatValue */.Fl)(properties,properties.maximum,transformer);if(properties.minimum!==-Infinity)typeTextConstraints.min=(0,helper/* formatValue */.Fl)(properties,properties.minimum,transformer)}// endregion
// region live-cycle
/// region input element property synchronization
/**
     * Is triggered immediate after a re-rendering. Connects error message
     * with input element.
     */;(0,external_react_.useEffect)(function(){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var input=inputReference.input;if(Object.prototype.hasOwnProperty.call(input,"input")){input=input.input;if(input&&Object.prototype.hasOwnProperty.call(input,"input"))input=input.input}if(!input)return;var inputDomNode=input;var determinedAttributes={};var attributesToRemove=[];// Apply aria attributes regarding validation state.
if(properties.valid){attributesToRemove.push("ariaErrormessage");attributesToRemove.push("ariaInvalid")}else{determinedAttributes.ariaErrormessage="".concat(id,"-error-message");determinedAttributes.ariaInvalid="true"}// Apply aria attributes regarding searching.
if(useSuggestions){if(inputDomNode.getAttribute("type")!=="search")determinedAttributes.role="searchbox";determinedAttributes.ariaAutocomplete=properties.searchSelection?"inline":"list"}else{attributesToRemove.push("searchbox");attributesToRemove.push("ariaAutocomplete")}if(properties.showDeclaration)determinedAttributes.ariaDescribedby="".concat(id,"-declaration");else attributesToRemove.push("ariaDescribedby");var attributes=TextInput_objectSpread(TextInput_objectSpread({},determinedAttributes),properties.attributes||{});// Apply configured native input properties.
for(var _i=0,_Object$entries=Object.entries(attributes);_i<_Object$entries.length;_i++){var _Object$entries$_i=TextInput_slicedToArray(_Object$entries[_i],2),name=_Object$entries$_i[0],value=_Object$entries$_i[1];var attributeName=(0,external_clientnode_.camelCaseToDelimited)(name);if(typeof value==="boolean"){if(value)inputDomNode.setAttribute(attributeName,"");else inputDomNode.removeAttribute(attributeName);}else inputDomNode.setAttribute(attributeName,String(value))}for(var _i2=0,_attributesToRemove=attributesToRemove;_i2<_attributesToRemove.length;_i2++){var _name=_attributesToRemove[_i2];var _attributeName=(0,external_clientnode_.camelCaseToDelimited)(_name);if(inputDomNode.hasAttribute(_attributeName))inputDomNode.removeAttribute(_attributeName)}}},[inputReference===null||inputReference===void 0?void 0:inputReference.input,useSuggestions,properties.searchSelection,properties.showDeclaration,properties.attributes]);/// endregion
/// region apply missing initial aria attribute regarding menu popup state.
/**
     * Is triggered immediate after a re-rendering. Sets initial aria list box
     * opening and hidden state.
     */(0,external_react_.useEffect)(function(){if(isSelection){var selectionWrapper=wrapperReference===null||wrapperReference===void 0?void 0:wrapperReference.querySelector("[aria-haspopup=\"listbox\"]");if(selectionWrapper){if(!selectionWrapper.hasAttribute("aria-expanded"))selectionWrapper.setAttribute("aria-expanded","false");var activeIcon=selectionWrapper.querySelector(".mdc-select__dropdown-icon-active");if(activeIcon&&!activeIcon.hasAttribute("aria-hidden"))activeIcon.setAttribute("aria-hidden","true");var inactiveIcon=selectionWrapper.querySelector(".mdc-select__dropdown-icon-inactive");if(inactiveIcon&&!inactiveIcon.hasAttribute("aria-hidden"))inactiveIcon.setAttribute("aria-hidden","true")}}});/// endregion
/// region avoid accidentally opening select menu.
/**
     * Is triggered immediate after a re-rendering. Captures key down events
     * on disabled select fields.
     * @returns Nothing.
     */(0,external_react_.useEffect)(function(){if(isSelection){var selectionWrapper=wrapperReference===null||wrapperReference===void 0?void 0:wrapperReference.querySelector("[aria-haspopup=\"listbox\"]");if(selectionWrapper){var handler=function handler(event){if(properties.disabled)event.stopPropagation()};selectionWrapper.addEventListener("keydown",handler,true);return function(){selectionWrapper.removeEventListener("keydown",handler,true)}}}});/// endregion
(0,external_react_.useEffect)(function(){if(properties.triggerInitialPropertiesConsolidation)onChange(new Event("genericInitialPropertiesConsolidation"))},[]);// endregion
var editorProperties={};if(isAdvancedEditor)if(properties.editor.startsWith("code(")&&properties.editor.endsWith(")")){var modeName=properties.editor.substring("code(".length,properties.editor.length-1);if(modeName)/*
                    NOTE: The code editor determines its language support to
                    load it only when needed.
                */editorProperties.editor={modeName:modeName}}else editorProperties.editor=TextInput_helper/* TIPTAP_DEFAULT_OPTIONS */.cR;// region main markup
return/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapConfigurations/* default */.Ay,{strict:TextInput.strict,themeConfiguration:properties.themeConfiguration,tooltip:properties.tooltip,children:/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",TextInput_objectSpread(TextInput_objectSpread({ref:setWrapperReference,className:[TextInput_helper/* CSS_CLASS_NAMES */.sr.textInput].concat(properties.className).join(" "),style:properties.styles,onBlur:onBlur,onKeyDown:onKeyDown},useSuggestions?{role:"search"}:{}),{},{children:[wrapAnimationConditionally(/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Select,TextInput_objectSpread(TextInput_objectSpread({},textInputProperties),{},{name:properties.name,onChange:onChangeValue,onClick:onClick,onKeyDown:(0,external_react_generic_tools_.useMemorizedValue)(function(event){/*
                                Avoid scrolling page interactions when
                                navigating through option.
                            */if(!(properties.disabled||event.code==="Tab"))event.preventDefault()}),options:normalizedSelection,value:properties.value})),isSelection),isAdvancedEditor?/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_.Suspense,{fallback:"",children:isCodeEditor?wrapAnimationConditionally(/*#__PURE__*/(0,jsx_runtime_.jsx)(CodeEditorComponent,TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread({},textInputProperties),typeTextInputProperties),typeTextConstraints),{},{onChange:onChangeValue},editorProperties),{},{ref:setInputReference})),isAdvancedEditor):/*#__PURE__*/(0,jsx_runtime_.jsx)(RichTextEditorComponent,TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread({},textInputProperties),typeTextInputProperties),typeTextConstraints),{},{onChange:onChangeValue},editorProperties),{},{ref:setInputReference}))}):"",wrapAnimationConditionally(/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{children:[useSuggestions?/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_Menu,{ref:setMenuReference,onKeyDown:TextInput_helper/* preventEnterKeyPropagation */.i9,pending:selection instanceof AbortController,classNames:[TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputSuggestions],itemClassNames:[TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputSuggestionsSuggestion],pendingClassNames:[TextInput_helper/* CSS_CLASS_NAMES */.sr.textInputSuggestionsPending],onFocus:onFocus,onSelect:function onSelect(event){onChangeValue(currentSuggestionValues[event.detail.index],event.detail.index);setIsSuggestionOpen(false)},open:Boolean(currentSuggestionLabels.length)&&isSuggestionOpen&&/*
                                    NOTE: If single possibility is already
                                    selected avoid showing this suggestion.
                                */!(currentSuggestionLabels.length===1&&currentSuggestionLabels[0]===properties.representation),options:currentRenderableSuggestions}):"",properties.type==="string"&&properties.editor!=="plain"?/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_TextArea,TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread({},textInputProperties),typeTextInputProperties),typeTextConstraints),{},{ref:setInputReference,onChange:onChangeValue})):/*#__PURE__*/(0,jsx_runtime_.jsx)(rmwc_TextField,TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread(TextInput_objectSpread({},textInputProperties),typeTextInputProperties),typeTextConstraints),{},{onChange:onChangeValue,leadingIcon:wrapIconWithTooltip(applyIconPreset(properties.leadingIcon)),trailingIcon:wrapIconWithTooltip(applyIconPreset(properties.trailingIcon)),type:determineNativeType(properties)}))]}),!(isAdvancedEditor||isSelection),properties.editor.startsWith("code"))]}))});/// endregion
};// NOTE: This is useful in react dev tools.
TextInputInner.displayName="TextInput/index";/**
 * Wrapping web component compatible react component.
 * @property defaultModelState - Initial model state.
 * @property defaultProperties - Initial property configuration.
 * @property locales - Defines input formatting locales.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in react's
 * strict component.
 * @property transformer - Text input data transformation specifications.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */var TextInput=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(TextInputInner));// region static properties
/// region web-component hints
TextInput.wrapped=TextInputInner;TextInput.webComponentAdapterWrapped="react";/// endregion
TextInput.defaultModelState=type/* defaultModelState */.m8;/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/TextInput.defaultProperties=TextInput_objectSpread(TextInput_objectSpread({},type/* defaultProperties */.L6),{},{model:TextInput_objectSpread(TextInput_objectSpread({},type/* defaultProperties */.L6.model),{},{// Trigger initial determination.
state:undefined,value:undefined}),representation:undefined,value:undefined});TextInput.locales=external_clientnode_.LOCALES;TextInput.propTypes=type/* propertyTypes */.Pl;TextInput.renderProperties=type/* renderProperties */.Wc;TextInput.strict=false;TextInput.transformer=transformer;// endregion
/* harmony default export */ var components_TextInput = (TextInput);

/***/ }),
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
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sr: function() { return /* binding */ CSS_CLASS_NAMES; },
  cR: function() { return /* binding */ TIPTAP_DEFAULT_OPTIONS; },
  Zb: function() { return /* binding */ UseAnimations; },
  sy: function() { return /* binding */ determineValidationState; },
  Wi: function() { return /* binding */ lockAnimation; },
  a5: function() { return /* binding */ plusToXAnimation; },
  i9: function() { return /* binding */ preventEnterKeyPropagation; },
  EM: function() { return /* binding */ suggestionMatches; },
  s$: function() { return /* binding */ usePropertiesChangedIndicator; }
});

// UNUSED EXPORTS: CODE_EDITOR_OPTIONS, CURRENT_UTC_BUILD_TIMESTAMP, IS_BROWSER

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(7);
// EXTERNAL MODULE: external "react-generic-dummy"
var external_react_generic_dummy_ = __webpack_require__(23);
// EXTERNAL MODULE: ./src/helper.ts + 1 modules
var helper = __webpack_require__(8);
;// ./src/components/TextInput/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"textInput":"text-input","textInputCodeEditorButton":"text-input__code-editor-button","textInputRichtextEditorButton":"text-input__richtext-editor-button","textInputSuggestions":"text-input__suggestions","textInputSuggestionsPending":"text-input__suggestions--pending","textInputSuggestionsSuggestion":"text-input__suggestions__suggestion","textInputSuggestionsSuggestionMark":"text-input__suggestions__suggestion__mark","codeEditor":"code-editor","cmContent":"cm-content","cmActiveLine":"cm-activeLine","cmGutters":"cm-gutters","cmActiveLineGutter":"cm-activeLineGutter","cmFocused":"cm-focused","codeEditorHasContent":"code-editor--has-content","codeEditorView":"code-editor__view","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","richtextEditorView":"richtext-editor__view","tiptap":"tiptap"});
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
;// ./src/components/TextInput/helper.ts
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
var _default,_default2,_default3;/*
"namedExport" version of css-loader:

import {
    textInputSuggestionsSuggestionClassName,
    textInputSuggestionsSuggestionMarkClassName,
    textInputClassName,
    textInputCustomClassName,
    textInputEditorLabelClassName,
    textInputSuggestionsClassName,
    textInputSuggestionsPendingClassName
} from './style.module.css'
 */// endregion
// region constants
var IS_BROWSER=!( false||typeof window==="undefined");var UseAnimations=IS_BROWSER?(_default=external_react_generic_dummy_["default"]===null||external_react_generic_dummy_["default"]===void 0?void 0:external_react_generic_dummy_["default"]["default"])!==null&&_default!==void 0?_default:external_react_generic_dummy_["default"]:null;var lockAnimation=IS_BROWSER?(_default2=external_react_generic_dummy_["default"]===null||external_react_generic_dummy_["default"]===void 0?void 0:external_react_generic_dummy_["default"]["default"])!==null&&_default2!==void 0?_default2:external_react_generic_dummy_["default"]:null;var plusToXAnimation=IS_BROWSER?(_default3=external_react_generic_dummy_["default"]===null||external_react_generic_dummy_["default"]===void 0?void 0:external_react_generic_dummy_["default"]["default"])!==null&&_default3!==void 0?_default3:external_react_generic_dummy_["default"]:null;// endregion
var CSS_CLASS_NAMES=style_module;// region code editor configuration
var CODE_EDITOR_OPTIONS=(/* unused pure expression or super */ null && ({}));/// region rich text editor configuration
// NOTE: Could be set via module bundler environment variables.
var CURRENT_UTC_BUILD_TIMESTAMP=(/* unused pure expression or super */ null && ( false?0:1794300519.504));var TIPTAP_DEFAULT_OPTIONS={injectCSS:true,enableContentCheck:true};/// endregion
// endregion
// region functions
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param currentState - Current component state.
 * @returns Boolean indicating whether component is in an aggregated valid or
 * invalid state.
 */var determineValidationState=function determineValidationState(properties,currentState){return (0,helper/* determineValidationState */.sy)(properties,currentState,{invalidMaximum:function invalidMaximum(){return typeof properties.model.maximum==="number"&&typeof properties.model.value==="number"&&!isNaN(properties.model.value)&&properties.model.maximum>=0&&properties.model.maximum<properties.model.value},invalidMinimum:function invalidMinimum(){return typeof properties.model.minimum==="number"&&typeof properties.model.value==="number"&&!isNaN(properties.model.value)&&properties.model.value<properties.model.minimum},invalidMaximumLength:function invalidMaximumLength(){return typeof properties.model.maximumLength==="number"&&typeof properties.model.value==="string"&&properties.model.maximumLength>=0&&properties.model.maximumLength<properties.model.value.length},invalidMinimumLength:function invalidMinimumLength(){return typeof properties.model.minimumLength==="number"&&typeof properties.model.value==="string"&&properties.model.value.length<properties.model.minimumLength},invalidInvertedPattern:function invalidInvertedPattern(){return typeof properties.model.value==="string"&&typeof properties.model.invertedPattern!=="undefined"&&Boolean(properties.model.invertedPattern)&&[].concat(properties.model.invertedPattern).some(function(expression){return new RegExp(expression).test(properties.model.value)})},invalidPattern:function invalidPattern(){return typeof properties.model.value==="string"&&typeof properties.model.pattern!=="undefined"&&Boolean(properties.model.pattern)&&[].concat(properties.model.pattern).some(function(expression){return!new RegExp(expression).test(properties.model.value)})}})};/**
 * Avoid propagating the enter key event since this usually sends a form which
 * is not intended when working in a text field.
 * @param event - Keyboard event.
 */function preventEnterKeyPropagation(event){if(event.code==="Enter")event.stopPropagation()}/**
 * Indicates whether a provided query is matching currently provided
 * suggestion.
 * @param suggestion - Candidate to match again.
 * @param query - Search query to check for matching.
 * @returns Boolean result whether provided suggestion matches given query or
 * not.
 */function suggestionMatches(suggestion,query){if(query){suggestion=suggestion.toLowerCase();return query.replace(/  +/g," ").toLowerCase().split(" ").every(function(part){return suggestion.includes(part)})}return false}var usePropertiesChangedIndicator=function usePropertiesChangedIndicator(properties){return (0,external_react_generic_tools_.useMemorizedValue)({},(0,helper/* usePropertiesChangedIndicator */.s$)(properties),properties.pattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.pattern):properties.pattern,properties.invertedPattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.invertedPattern):properties.invertedPattern,properties.onChangeEditorIsActive,properties.onKeyDown,properties.onKeyUp,properties.onSelect,properties.onSelectionChange,properties.suggestionCreator)};// endregion

/***/ }),
/* 18 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_animate_783e9a9c__["default"]; } });

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ rmwc_CircularProgress; }
});

// UNUSED EXPORTS: CircularProgress

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
;// external "@rmwc/circular-progress"

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/CircularProgress.tsx
// -*- coding: utf-8 -*-
/** @module CircularProgress *//* !
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
var CircularProgress=/*#__PURE__*/(0,external_react_.forwardRef)(function(_ref,reference){var componentProperties=_ref.componentProperties,size=_ref.size;return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_circular_progress_592b28dd_CircularProgress__,_objectSpread({ref:reference,size:size===null||size===void 0?void 0:size.replace("extra-small","xsmall").replace("extra-large","xlarge")},componentProperties))});/* harmony default export */ var rmwc_CircularProgress = (CircularProgress);

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ rmwc_Icon; }
});

// UNUSED EXPORTS: Icon

;// external "@rmwc/icon"

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/Icon.tsx
// -*- coding: utf-8 -*-
/** @module Icon *//* !
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
var Icon=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$className,_properties$component,_properties$size;var fallbackComponentProperties=(0,external_react_generic_tools_.useMemorizedValue)({});return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_icon_2d90e25a_Icon__,_objectSpread(_objectSpread({className:(_properties$className=properties.classNames)===null||_properties$className===void 0?void 0:_properties$className.join(" "),style:properties.styles},(_properties$component=properties.componentProperties)!==null&&_properties$component!==void 0?_properties$component:fallbackComponentProperties),{},{onClick:properties.onClick,onKeyDown:properties.onKeyDown,onKeyUp:properties.onKeyUp,onFocus:properties.onFocus,onBlur:properties.onBlur,icon:(0,external_react_generic_tools_.useMemorizedValue)({icon:properties.icon,size:(_properties$size=properties.size)===null||_properties$size===void 0?void 0:_properties$size.replace("extra-small","xsmall").replace("extra-large","xlarge"),strategy:properties.strategy},properties.icon,properties.size,properties.strategy),ref:reference}))});/* harmony default export */ var rmwc_Icon = (Icon);

/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["IconButton"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_icon_button_347be2b6__.IconButton; } });

/***/ }),
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
/* 23 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_dummy_34225edd__["default"]; } });

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export IconButton */
/* harmony import */ var _rmwc_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var IconButton=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(properties,reference){var _properties$size,_properties$className,_properties$component;var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),baseReference=_useReferenceState2[0],setBaseReference=_useReferenceState2[1];var _useReferenceState3=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),foundationReference=_useReferenceState4[0],setFoundationReference=_useReferenceState4[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(reference,function(){return{base:baseReference,foundation:foundationReference}},[baseReference,foundationReference]);var size=(_properties$size=properties.size)===null||_properties$size===void 0?void 0:_properties$size.replace("extra-small","xsmall").replace("extra-large","xlarge");var fallbackComponentProperties=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__.useMemorizedValue)({});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_rmwc_icon_button__WEBPACK_IMPORTED_MODULE_0__.IconButton,_objectSpread({checked:properties.value,disabled:properties.disabled,className:(_properties$className=properties.classNames)===null||_properties$className===void 0?void 0:_properties$className.join(" "),style:properties.styles,icon:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__.useMemorizedValue)({icon:properties.icon,size:size,strategy:properties.strategy},properties.icon,size,properties.strategy),onIcon:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__.useMemorizedValue)({icon:properties.onIcon||properties.icon,size:size,strategy:properties.strategy},properties.onIcon,properties.icon,size,properties.strategy),onClick:properties.onClick,onChange:properties.onChange,ref:setBaseReference,foundationRef:setFoundationReference},(_properties$component=properties.componentProperties)!==null&&_properties$component!==void 0?_properties$component:fallbackComponentProperties))});/* harmony default export */ __webpack_exports__.A = (IconButton);

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = import("react-input-material/components/TextInput/CodeMirror");;

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = import("react-input-material/components/TextInput/Tiptap");;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ex: function() { return /* binding */ RepresentationType; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Mx: function() { return /* binding */ defaultFileNameInputProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Wc: function() { return /* binding */ renderProperties; },
/* harmony export */   m8: function() { return /* binding */ defaultModelState; }
/* harmony export */ });
/* unused harmony exports dedicatedPropertyTypes, modelPropertyTypes, modelStatePropertyTypes, defaultModel */
/* harmony import */ var clientnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _TextInput_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
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
var RepresentationType=/*#__PURE__*/function(RepresentationType){RepresentationType["BINARY"]="binary";RepresentationType["IMAGE"]="image";RepresentationType["EMBEDABLE_TEXT"]="embedableText";RepresentationType["TEXT"]="text";RepresentationType["VIDEO"]="video";return RepresentationType}({});var renderProperties=["children","generateFileNameInputProperties"];// region constants
var dedicatedPropertyTypes={contentTypePattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),invertedContentTypePattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),maximumSize:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.number,minimumSize:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.number};var modelPropertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .modelPropertyTypes */ .qw),dedicatedPropertyTypes),{},{fileName:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.shape)(_TextInput_type_js__WEBPACK_IMPORTED_MODULE_3__/* .propertyTypes */ .Pl)});var modelStatePropertyTypes=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .modelStatePropertyTypes */ .Zl),{},{invalidContentTypePattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.symbol]),invalidInvertedContentTypePattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.symbol]),invalidMaximumSize:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.symbol]),invalidMinimumSize:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.symbol]),invalidName:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.symbol])});var propertyTypes=_objectSpread(_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .propertyTypes */ .Pl),dedicatedPropertyTypes),modelStatePropertyTypes),{},{children:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.func,contentTypePatternText:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),invertedContentTypePatternText:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),maximumSizeText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string,minimumSizeText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string,model:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.shape)(modelPropertyTypes),deleteButton:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),downloadButton:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),editButton:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),newButton:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string]),encoding:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string,generateFileNameInputProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.func,onBlur:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.func,outlined:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.boolean});var defaultModelState=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultModelState */ .m8),{},{invalidContentTypePattern:false,invalidInvertedContentTypePattern:false,invalidMaximumSize:false,invalidMinimumSize:false,invalidName:false});var defaultModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultModel */ .$I),{},{contentTypePattern:/^.+\/.+$/,invertedContentTypePattern:undefined,fileName:_objectSpread(_objectSpread({},_TextInput_type_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultInputModel */ .v8),{},{maximumLength:1024,name:"Name",pattern:/^[^/]+$/}),maximumSize:Infinity,minimumSize:0,state:defaultModelState});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultFileNameInputProperties=_objectSpread(_objectSpread({},_TextInput_type_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultProperties */ .L6),{},{emptyEqualsNull:false,invertedPatternText:"Your file's name should not match the regular expression"+"${[].concat(invertedPattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(invertedPattern).join(\"\\\", \\\"\")}\".",patternText:"Your file's name has to match the regular expression"+"${[].concat(pattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(pattern).join(\"\\\", \\\"\")}\".",required:true});delete defaultFileNameInputProperties.model;var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultProperties */ .L6),{},{contentTypePatternText:"Your file's mime-type has to match the regular expression"+"${[].concat(contentTypePattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(contentTypePattern).join(\"\\\", \\\"\")}\".",invertedContentTypePatternText:"Your file's mime-type should not match the regular expression"+"${[].concat(invertedContentTypePattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(invertedContentTypePattern).join(\"\\\", \\\"\")}\".",maximumSizeText:"Please provide a file with less or equal size than ${maximumSize} "+"byte.",minimumSizeText:"Please provide a file with more or equal size than ${maximumSize} "+"byte.",requiredText:"Please select a file.",deleteButton:"delete",downloadButton:"download",editButton:"edit",newButton:"new",encoding:"utf-8",generateFileNameInputProperties:clientnode__WEBPACK_IMPORTED_MODULE_0__.identity,model:_objectSpread({},defaultModel),sourceToBlobOptions:{endings:"transparent",type:"text/plain"},hashingConfiguration:{binaryString:false,prefix:"",readChunkSizeInByte:2097152// 2 MiB
}});/// endregion

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

;// external "blob-util"

// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(6);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(3);
;// external "spark-md5"

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(7);
// EXTERNAL MODULE: external "@rmwc/typography"
var typography_ = __webpack_require__(13);
// EXTERNAL MODULE: external "@rmwc/theme"
var theme_ = __webpack_require__(5);
;// external "@rmwc/card"

// EXTERNAL MODULE: external "react-generic-animate"
var external_react_generic_animate_ = __webpack_require__(18);
;// ./src/implementations/type.ts
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
// endregion
// region exports
var MediaCardRepresentationType=/*#__PURE__*/function(MediaCardRepresentationType){MediaCardRepresentationType["IMAGE"]="image";MediaCardRepresentationType["IFRAME"]="iframe";MediaCardRepresentationType["TEXT"]="text";MediaCardRepresentationType["VIDEO"]="video";MediaCardRepresentationType["PENDING"]="pending";return MediaCardRepresentationType}({});// endregion
// EXTERNAL MODULE: ./src/implementations/rmwc/CircularProgress.tsx + 1 modules
var CircularProgress = __webpack_require__(19);
;// ./src/implementations/rmwc/MediaCard/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"fileInput":"file-input","mdcTypographyHeadline6":"mdc-typography--headline6","mdcTypographySubtitle2":"mdc-typography--subtitle2","fileInputInfo":"file-input__info","fileInputInfoBody":"file-input__info__body","fileInputDownload":"file-input__download","textInput":"text-input","mdcTextField":"mdc-text-field","fileInputIframeWrapper":"file-input__iframe-wrapper","fileInputTextRepresentation":"file-input__text-representation","fileInputIframeWrapperPadding":"file-input__iframe-wrapper--padding"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);
;// ./src/implementations/rmwc/MediaCard/index.tsx
// -*- coding: utf-8 -*-
/** @module Card *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var MediaCardInner=function MediaCardInner(properties,reference){var _properties$id,_properties$className,_properties$infoClass,_properties$infoBodyC,_properties$downloadL;var defaultID=(0,external_react_.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;// region references
var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),cardReference=_useReferenceState2[0],setCardReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),iFrameReference=_useReferenceState4[0],setIFrameReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),deleteButtonReference=_useReferenceState6[0],setDeleteButtonReference=_useReferenceState6[1];var _useReferenceState7=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState8=_slicedToArray(_useReferenceState7,2),downloadLinkReference=_useReferenceState8[0],setDownloadLinkReference=_useReferenceState8[1];var _useReferenceState9=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState0=_slicedToArray(_useReferenceState9,2),uploadButtonReference=_useReferenceState0[0],setUploadButtonReference=_useReferenceState0[1];(0,external_react_.useImperativeHandle)(reference,function(){return{card:cardReference,iFrame:iFrameReference,downloadLink:downloadLinkReference,deleteButton:deleteButtonReference,uploadButton:uploadButtonReference}},[cardReference,iFrameReference,downloadLinkReference,deleteButtonReference,uploadButtonReference]);// endregion
var iFrameStyles=(0,external_react_generic_tools_.useMemorizedValue)({border:0,overflow:"hidden"});var mediaStyles=(0,external_react_generic_tools_.useMemorizedValue)(properties.url?{backgroundImage:"url(".concat(properties.url,")")}:{},properties.url);var determineMediaContent=function determineMediaContent(){var _properties$imageClas,_properties$iframeWra,_properties$textRepre;if(properties.type===MediaCardRepresentationType.PENDING)return/*#__PURE__*/(0,jsx_runtime_.jsx)(CircularProgress/* default */.A,{size:"large"});if(properties.type===MediaCardRepresentationType.IMAGE&&properties.url)return/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardMedia__,{sixteenByNine:true,className:(_properties$imageClas=properties.imageClassNames)===null||_properties$imageClas===void 0?void 0:_properties$imageClas.join(" "),style:mediaStyles});if(properties.type===MediaCardRepresentationType.VIDEO)return/*#__PURE__*/(0,jsx_runtime_.jsx)("video",{autoPlay:true,loop:true,muted:true,children:/*#__PURE__*/(0,jsx_runtime_.jsx)("source",{src:properties.url,type:properties.contentType})});if(properties.type===MediaCardRepresentationType.IFRAME)return/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:[CSS_CLASS_NAMES.fileInputIframeWrapper].concat(["text/html","text/plain"].includes(properties.contentType)?CSS_CLASS_NAMES.fileInputIframeWrapperPadding:[]).concat((_properties$iframeWra=properties.iframeWrapperClassNames)!==null&&_properties$iframeWra!==void 0?_properties$iframeWra:[]).join(" "),children:/*#__PURE__*/(0,jsx_runtime_.jsx)("iframe",{ref:setIFrameReference,style:iFrameStyles,src:properties.url})});if(properties.type===MediaCardRepresentationType.TEXT)return/*#__PURE__*/(0,jsx_runtime_.jsx)("pre",{className:[CSS_CLASS_NAMES.fileInputTextRepresentation].concat((_properties$textRepre=properties.textRepresentationClassNames)!==null&&_properties$textRepre!==void 0?_properties$textRepre:[]).join(" "),children:properties.content});return""};var description=properties.description?properties.description:properties.name;return/*#__PURE__*/(0,jsx_runtime_.jsxs)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_Card__,_objectSpread(_objectSpread({ref:setCardReference,className:(_properties$className=properties.classNames)===null||_properties$className===void 0?void 0:_properties$className.join(" "),style:properties.styles,onBlur:properties.onBlur,onClick:properties.onClick,onFocus:properties.onFocus},properties.componentProperties),{},{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardPrimaryAction__,{children:[determineMediaContent(),/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:[CSS_CLASS_NAMES.fileInputInfo].concat((_properties$infoClass=properties.infoClassNames)!==null&&_properties$infoClass!==void 0?_properties$infoClass:[]).join(" "),children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(typography_.Typography,{tag:"h2",use:"headline6",children:properties.invalid?/*#__PURE__*/(0,jsx_runtime_.jsx)(theme_.Theme,{use:"error",children:description}):description}),/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_generic_animate_["default"],{in:properties.invalid||Boolean(properties.declaration),children:/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:[CSS_CLASS_NAMES.fileInputInfoBody].concat((_properties$infoBodyC=properties.infoBodyClassNames)!==null&&_properties$infoBodyC!==void 0?_properties$infoBodyC:[]).join(" "),children:[properties.declaration?/*#__PURE__*/(0,jsx_runtime_.jsx)(typography_.Typography,{style:{marginTop:"-1rem"},tag:"h3",theme:"textSecondaryOnBackground",use:"subtitle2",children:properties.invalid?/*#__PURE__*/(0,jsx_runtime_.jsx)(theme_.Theme,{use:"error",children:properties.declaration}):properties.declaration}):"",/*#__PURE__*/(0,jsx_runtime_.jsx)(theme_.Theme,{use:"error",wrap:true,children:/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{id:"".concat(id,"-error-message"),children:properties.errorMessage})})]})}),properties.children]})]}),!properties.disabled&&(properties.empty?properties.newButton:properties.editButton)||!properties.empty&&(!properties.disabled&&properties.deleteButton||properties.url&&properties.downloadButton)?/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActions__,{children:/*#__PURE__*/(0,jsx_runtime_.jsxs)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButtons__,{children:[!properties.disabled&&(properties.empty?properties.newButton:properties.editButton)?/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButton__,{onClick:properties.onClickAddOrEdit,ref:setUploadButtonReference,children:properties.empty?properties.newButton:properties.editButton}):"",properties.empty?"":/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment,{children:[!properties.disabled&&properties.deleteButton?/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButton__,{onClick:function onClick(event){if(properties.onChange)properties.onChange(event)},ref:setDeleteButtonReference,children:properties.deleteButton}):"",properties.url&&properties.downloadButton?/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_card_7a2607b9_CardActionButton__,{onClick:function onClick(){downloadLinkReference===null||downloadLinkReference===void 0||downloadLinkReference.click()},children:/*#__PURE__*/(0,jsx_runtime_.jsx)("a",_objectSpread(_objectSpread({className:[CSS_CLASS_NAMES.fileInputDownload].concat((_properties$downloadL=properties.downloadLinkClassNames)!==null&&_properties$downloadL!==void 0?_properties$downloadL:[]).join(" "),download:properties.fileName,href:properties.url,ref:setDownloadLinkReference,target:"_blank"},properties.contentType?{type:properties.contentType}:{}),{},{children:properties.downloadButton}))}):""]})]})}):""]}))};var MediaCard=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(MediaCardInner));/* harmony default export */ var rmwc_MediaCard = (MediaCard);
// EXTERNAL MODULE: ./src/helper.ts + 1 modules
var helper = __webpack_require__(8);
// EXTERNAL MODULE: ./src/components/TextInput/index.tsx + 11 modules
var TextInput = __webpack_require__(14);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapConfigurations.tsx
var WrapConfigurations = __webpack_require__(12);
;// ./src/components/FileInput/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var FileInput_style_module = ({"fileInput":"file-input","fileInputNative":"file-input__native"});
// EXTERNAL MODULE: ./src/components/FileInput/type.ts
var FileInput_type = __webpack_require__(29);
;// ./src/components/FileInput/helper.ts
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
function helper_typeof(o){"@babel/helpers - typeof";return helper_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},helper_typeof(o)};function helper_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function helper_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?helper_ownKeys(Object(o),!0).forEach(function(t){helper_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):helper_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function helper_defineProperty(r,t,o){return(t=helper_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function helper_toPropertyKey(r){var o=helper_toPrimitive(r,"string");return"symbol"==helper_typeof(o)?o:o+""}function helper_toPrimitive(t,e){if("object"!=helper_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=helper_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};/*
"namedExport" version of css-loader:

import {
    fileInputClassName,
    fileInputDownloadClassName,
    fileInputIframeWrapperPaddingClassName,
    fileInputNativeClassName,
    fileInputTextRepresentationClassName
} from './style.module.css'
*/// endregion
// region constants
var helper_CSS_CLASS_NAMES=FileInput_style_module;/*
    NOTE: Caused by a bug transpiling regular expression which ignores needed
    escape sequences for "/" when using the nativ regular expression type.
*/var IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION=new RegExp("^image\\/(?:p?jpe?g|png|svg(?:\\+xml)?|vnd\\.microsoft\\.icon|gif|tiff|"+"webp|vnd\\.wap\\.wbmp|x-(?:icon|jng|ms-bmp))$","i");var TEXT_CONTENT_TYPE_REGULAR_EXPRESSION=new RegExp("^"+"(?:application\\/(?:json|xml))|"+"(?:text\\/(?:"+("plain|x-ndpb[wy]html|javascript|x?html?|xml|(?:(?:x-)?(?:"+"csv|python-script"+"))")+"))"+"$","i");var EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION=// Plain version:
/^text\/plain$/i;// Rendered version:
// /^(application\/xml)|(text\/(plain|x?html?|xml))$/i
var VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION=new RegExp("^video\\/(?:(?:x-)?(?:x-)?webm|3gpp|mp2t|mp4|mpeg|quicktime|(?:x-)?flv"+"|(?:x-)?m4v|(?:x-)mng|x-ms-as|x-ms-wmv|x-msvideo)"+"|(?:application\\/(?:x-)?shockwave-flash)$","i");// endregion
// region functions
/**
 * Generates properties for nested text input to edit file name.
 * @param prototype - Base properties to extend from.
 * @param properties - Actual properties to derive from.
 * @param properties.name - Name of filename input field.
 * @param properties.value - Current edited file value.
 * @returns Input properties.
 */var preserveStaticFileBaseNameInputGenerator=function preserveStaticFileBaseNameInputGenerator(prototype,_ref){var _value$name;var name=_ref.name,value=_ref.value;return helper_objectSpread(helper_objectSpread({},prototype),{},{disabled:true,value:name+(value!==null&&value!==void 0&&(_value$name=value.name)!==null&&_value$name!==void 0&&_value$name.includes(".")?value.name.substring(value.name.lastIndexOf(".")).toLowerCase():"")})};/**
 * Determines files content type for given file input properties.
 * @param properties - File input properties to analyze.
 * @returns The determined content type.
 */var determineContentType=function determineContentType(properties){if(properties.value){var _properties$value$blo,_properties$value$url;if((_properties$value$blo=properties.value.blob)!==null&&_properties$value$blo!==void 0&&_properties$value$blo.type)return properties.value.blob.type;if((_properties$value$url=properties.value.url)!==null&&_properties$value$url!==void 0&&_properties$value$url.startsWith("data:")){var contentTypeMatch=properties.value.url.match(/^data:([^/]+\/[^;]+).*$/);if(contentTypeMatch)return contentTypeMatch[1]}}return null};/**
 * Determines which type of file we have to present.
 * @param contentType - File type to derive representation type from.
 * @returns Representative string for given content type.
 */var determineRepresentationType=function determineRepresentationType(contentType){contentType=contentType.replace(/; *charset=.+$/,"");if(TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))return FileInput_type/* RepresentationType */.Ex.TEXT;if(EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))return FileInput_type/* RepresentationType */.Ex.EMBEDABLE_TEXT;if(IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))return FileInput_type/* RepresentationType */.Ex.IMAGE;if(VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))return FileInput_type/* RepresentationType */.Ex.VIDEO;return FileInput_type/* RepresentationType */.Ex.BINARY};/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param invalidName - Determines if edited file name is invalid or not.
 * @param currentState - Current component state.
 * @returns Boolean indicating Whether component is in an aggregated valid or
 * invalid state.
 */var determineValidationState=function determineValidationState(properties,_invalidName,currentState){var invalidMaximumSize=function invalidMaximumSize(){var _properties$model$val;return typeof properties.model.maximumSize==="number"&&properties.model.maximumSize<(((_properties$model$val=properties.model.value)===null||_properties$model$val===void 0||(_properties$model$val=_properties$model$val.blob)===null||_properties$model$val===void 0?void 0:_properties$model$val.size)||0)};var invalidMinimumSize=function invalidMinimumSize(){var _properties$model$val2;return typeof properties.model.minimumSize==="number"&&properties.model.minimumSize>(((_properties$model$val2=properties.model.value)===null||_properties$model$val2===void 0||(_properties$model$val2=_properties$model$val2.blob)===null||_properties$model$val2===void 0?void 0:_properties$model$val2.size)||0)};var invalidContentTypePattern=function invalidContentTypePattern(){var _properties$model$val3,_properties$model$con;return Boolean(properties.model.contentTypePattern)&&typeof((_properties$model$val3=properties.model.value)===null||_properties$model$val3===void 0||(_properties$model$val3=_properties$model$val3.blob)===null||_properties$model$val3===void 0?void 0:_properties$model$val3.type)==="string"&&[].concat((_properties$model$con=properties.model.contentTypePattern)!==null&&_properties$model$con!==void 0?_properties$model$con:[]).some(function(expression){var _properties$model$val4,_properties$model$val5;return typeof expression==="string"&&!new RegExp(expression).test(((_properties$model$val4=properties.model.value)===null||_properties$model$val4===void 0?void 0:_properties$model$val4.blob).type)||helper_typeof(expression)==="object"&&!expression.test(((_properties$model$val5=properties.model.value)===null||_properties$model$val5===void 0?void 0:_properties$model$val5.blob).type)})};var invalidInvertedContentTypePattern=function invalidInvertedContentTypePattern(){var _properties$model$val6,_properties$model$inv;return Boolean(properties.model.invertedContentTypePattern)&&typeof((_properties$model$val6=properties.model.value)===null||_properties$model$val6===void 0||(_properties$model$val6=_properties$model$val6.blob)===null||_properties$model$val6===void 0?void 0:_properties$model$val6.type)==="string"&&[].concat((_properties$model$inv=properties.model.invertedContentTypePattern)!==null&&_properties$model$inv!==void 0?_properties$model$inv:[]).some(function(expression){var _properties$model$val7,_properties$model$val8;return typeof expression==="string"&&new RegExp(expression).test(((_properties$model$val7=properties.model.value)===null||_properties$model$val7===void 0?void 0:_properties$model$val7.blob).type)||helper_typeof(expression)==="object"&&expression.test(((_properties$model$val8=properties.model.value)===null||_properties$model$val8===void 0?void 0:_properties$model$val8.blob).type)})};return (0,helper/* determineValidationState */.sy)(properties,currentState,{invalidMaximumSize:invalidMaximumSize,invalidMinimumSize:invalidMinimumSize,invalidName:function invalidName(){return _invalidName},invalidContentTypePattern:invalidContentTypePattern,invalidInvertedContentTypePattern:invalidInvertedContentTypePattern})};/// region data transformer
/**
 * Derive base46 string from given file value.
 * @param value - File to derive string from.
 * @returns A promise holding base64 string.
 */var deriveBase64String=function deriveBase64String(value){return value.blob?__WEBPACK_EXTERNAL_MODULE_blob_util_516ea100_blobToBase64String__(value.blob):value.source?Promise.resolve(Buffer.from(value.source).toString("base64")):Promise.reject(new Error("Base 64 string could not be determined."))};/**
 * Read text from given binary data with given encoding.
 * @param blob - Binary data object.
 * @param encoding - Encoding for reading file correctly.
 * @param registerAbortController - Callback to register an abort controller.
 * @returns A promise holding parsed text as string.
 */var readBinaryDataIntoText=function readBinaryDataIntoText(blob,encoding,registerAbortController){if(encoding===void 0){encoding="utf-8"}if(registerAbortController===void 0){registerAbortController=external_clientnode_.NOOP}return new Promise(function(resolve,reject){var fileReader=new FileReader;registerAbortController(fileReader.abort.bind(fileReader));fileReader.onload=function(event){var content=event.target.result;// Remove preceding BOM.
if(content.length&&encoding.endsWith("-sig")&&content.charCodeAt(0)===65279)content=content.slice(1);// Normalize line endings to unix format.
content=content.replace(/\r\n/g,"\n");resolve(content)};fileReader.onabort=function(){reject(new Error("abort"))};fileReader.onerror=function(){reject(new Error)};fileReader.readAsText(blob,encoding.endsWith("-sig")?encoding.substring(0,encoding.length-"-sig".length):encoding)})};/// endregion
var usePropertiesChangedIndicator=function usePropertiesChangedIndicator(properties){return (0,external_react_generic_tools_.useMemorizedValue)({},(0,helper/* usePropertiesChangedIndicator */.s$)(properties),JSON.stringify(properties.model.fileName),properties.model.fileName.pattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.model.fileName.pattern):properties.model.fileName.pattern,properties.model.fileName.invertedPattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.model.fileName.invertedPattern):properties.model.fileName.invertedPattern,properties.children,properties.contentTypePattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.contentTypePattern):properties.contentTypePattern,properties.invertedContentTypePattern instanceof RegExp?(0,helper/* hashRegularExpression */.FS)(properties.invertedContentTypePattern):properties.invertedContentTypePattern,properties.deleteButton,properties.downloadButton,properties.editButton,properties.newButton,properties.generateFileNameInputProperties)};// endregion
;// ./src/components/FileInput/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module FileInput *//* !
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
function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function FileInput_typeof(o){"@babel/helpers - typeof";return FileInput_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},FileInput_typeof(o)}function FileInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function FileInput_objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?FileInput_ownKeys(Object(o),!0).forEach(function(t){FileInput_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):FileInput_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function FileInput_defineProperty(r,t,o){return(t=FileInput_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function FileInput_toPropertyKey(r){var o=FileInput_toPrimitive(r,"string");return"symbol"==FileInput_typeof(o)?o:o+""}function FileInput_toPrimitive(t,e){if("object"!=FileInput_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=FileInput_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function FileInput_slicedToArray(e,i){return FileInput_iterableToArrayLimit(e,i)||FileInput_unsupportedIterableToArray(e,i)||FileInput_nonIterableRest()}function FileInput_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInput_unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return FileInput_arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?FileInput_arrayLikeToArray(t,e):void 0}}function FileInput_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function FileInput_iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var log=new external_clientnode_.Logger({name:"react-input-material.file-input"});/**
 * Validatable checkbox wrapper component.
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
 */var FileInputInner=function FileInputInner(props,reference){var _givenProps$model,_givenProperties$mode,_givenProps$model2,_properties$id,_properties$value5,_properties$value6,_properties$value7,_properties$value8,_properties$value9,_determineContentType,_properties$value0,_properties$value1,_properties$value10,_properties$value11,_properties$value12,_properties$acceptedC,_properties$fileInput,_properties$value13;// region references initialization
var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=FileInput_slicedToArray(_useReferenceState,2),fileInputReference=_useReferenceState2[0],setFileInputReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=FileInput_slicedToArray(_useReferenceState3,2),mediaCardReference=_useReferenceState4[0],setMediaCardReference=_useReferenceState4[1];var _useReferenceState5=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState6=FileInput_slicedToArray(_useReferenceState5,2),nameInputReference=_useReferenceState6[0],setNameInputReference=_useReferenceState6[1];// endregion
// region property aggregation
/**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */var getConsolidatedProperties=function getConsolidatedProperties(properties){var _ref,_ref2,_nameInputReference$p,_result$model$fileNam,_result$model$state;var result=(0,helper/* mapPropertiesIntoModel */.hX)(properties,FileInput.defaultProperties.model);determineValidationState(result,Boolean((_ref=(_ref2=nameInputReference===null||nameInputReference===void 0||(_nameInputReference$p=nameInputReference.properties)===null||_nameInputReference$p===void 0?void 0:_nameInputReference$p.invalid)!==null&&_ref2!==void 0?_ref2:(_result$model$fileNam=result.model.fileName.state)===null||_result$model$fileNam===void 0?void 0:_result$model$fileNam.invalid)!==null&&_ref!==void 0?_ref:(_result$model$state=result.model.state)===null||_result$model$state===void 0?void 0:_result$model$state.invalidName),result.model.state);return (0,helper/* getConsolidatedProperties */.n$)(result)};// endregion
// region properties
var givenProps=(0,helper/* translateKnownSymbols */.F_)(props);var defaultValue=givenProps.default||((_givenProps$model=givenProps.model)===null||_givenProps$model===void 0?void 0:_givenProps$model.default);var firstDefaultFileName=defaultValue&&Object.keys(defaultValue).length?Object.keys(defaultValue)[0]:null;var initialValue=(0,helper/* determineInitialValue */.zu)(FileInput_objectSpread(FileInput_objectSpread({},givenProps),{},{default:defaultValue&&firstDefaultFileName?defaultValue[firstDefaultFileName]:null}),FileInput.defaultProperties.model.default&&Object.keys(FileInput.defaultProperties.model.default).length?Object.values(FileInput.defaultProperties.model.default)[0]:undefined);/*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */var givenProperties=(0,external_clientnode_.extend)(true,(0,external_clientnode_.copy)(FileInput.defaultProperties),givenProps);if(firstDefaultFileName&&(_givenProperties$mode=givenProperties.model)!==null&&_givenProperties$mode!==void 0&&_givenProperties$mode.fileName&&!givenProperties.model.fileName.default)givenProperties.model.fileName.default=firstDefaultFileName;/*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */var _useState=(0,external_react_.useState)({attachBlobProperty:false,modelState:FileInput_objectSpread({},FileInput.defaultModelState),value:initialValue}),_useState2=FileInput_slicedToArray(_useState,2),valueState=_useState2[0],setValueState=_useState2[1];var controlled=!givenProperties.enforceUncontrolled&&(((_givenProps$model2=givenProps.model)===null||_givenProps$model2===void 0?void 0:_givenProps$model2.value)!==undefined||givenProps.value!==undefined)&&Boolean(givenProps.onChange||givenProps.onChangeValue);(0,helper/* deriveMissingPropertiesFromState */.aU)(givenProperties,valueState);var properties=getConsolidatedProperties(givenProperties);var propertiesChangedIndicator=usePropertiesChangedIndicator(properties);/*
        NOTE: We have to merge asynchronous determined missing value properties
        to avoid endless rendering loops when a value is provided via
        properties.
    */if(valueState.attachBlobProperty&&valueState.value&&properties.value)properties.value=(0,external_clientnode_.extend)(true,valueState.value,properties.value);/// region synchronize uncontrolled properties into state
var currentValueState={attachBlobProperty:false,modelState:properties.model.state,value:properties.value};/*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */if(valueState.attachBlobProperty||!(controlled||(0,external_clientnode_.equals)(properties.value,valueState.value))||!(0,external_clientnode_.equals)(properties.model.state,valueState.modelState))setValueState(currentValueState);if(controlled)setValueState=(0,helper/* wrapStateSetter */.Dv)(setValueState,currentValueState);/// endregion
// endregion
// region references
(0,external_react_.useImperativeHandle)(reference,function(){return{properties:properties,references:{fileInput:fileInputReference,mediaCard:mediaCardReference,nameInput:nameInputReference},state:FileInput_objectSpread({modelState:properties.model.state},controlled?{}:{value:properties.value})}},[fileInputReference,mediaCardReference,nameInputReference,propertiesChangedIndicator]);// endregion
// region event handler
/**
     * Triggered on blur events.
     * @param event - Event object.
     */var onBlur=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){var changed=false;if(oldValueState.modelState.focused){properties.focused=false;changed=true}if(!oldValueState.modelState.visited){properties.visited=true;changed=true}if(changed){onChange(event);(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)};(0,helper/* triggerCallbackIfExists */.LI)(properties,"blur",controlled,event,properties);return changed?FileInput_objectSpread(FileInput_objectSpread({},oldValueState),{},{modelState:properties.model.state}):oldValueState})},[propertiesChangedIndicator,mediaCardReference]);/**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     */var onChange=(0,external_react_.useCallback)(function(event){var customEvent=event||{};customEvent.originalCurrentTarget=(event===null||event===void 0?void 0:event.currentTarget)||null;customEvent.currentTarget=mediaCardReference===null||mediaCardReference===void 0?void 0:mediaCardReference.card;if(nameInputReference!==null&&nameInputReference!==void 0&&nameInputReference.properties)properties.model.fileName=nameInputReference.properties.model;var consolidatedProperties=getConsolidatedProperties(/*
                        Workaround since "Type" isn't identified as subset of
                        "RecursivePartial<Type>" yet.
                    */properties);// NOTE: Avoid recursive merging of deprecated value properties.
delete properties.model.value;delete properties.value;// NOTE: Avoid trying to write into a readonly object.
properties.styles=(0,external_clientnode_.copy)(properties.styles);(0,external_clientnode_.extend)(true,properties,consolidatedProperties);(0,helper/* triggerCallbackIfExists */.LI)(properties,"change",controlled,properties,customEvent)},[propertiesChangedIndicator,mediaCardReference]);/**
     * Triggered when ever the value changes.
     * @param eventSourceOrName - Event object or new value.
     * @param event - Optional event object (if not provided as first
     * argument).
     * @param _inputProperties - Current properties state.
     * @param extendBlobProperties - Indicates whether additional data is added
     * through post processed data properties.
     */var onChangeValue=(0,external_react_.useCallback)(function(eventSourceOrName,event,_inputProperties,extendBlobProperties){if(extendBlobProperties===void 0){extendBlobProperties=false}if(!(properties.model.mutable&&properties.model.writable))return;if(eventSourceOrName&&fileInputReference&&eventSourceOrName.target===fileInputReference){var _files;event=eventSourceOrName;if((_files=event.target.files)!==null&&_files!==void 0&&_files.length){var _properties$generateF;var blob=event.target.files[0];properties.value={blob:blob,name:blob.name};properties.value.name=((_properties$generateF=properties.generateFileNameInputProperties(FileInput_objectSpread(FileInput_objectSpread({disabled:properties.disabled,value:blob.name},FileInput_type/* defaultFileNameInputProperties */.Mx),{},{model:properties.model.fileName,onChangeValue:onChangeValue,default:properties.value.name}),properties))===null||_properties$generateF===void 0?void 0:_properties$generateF.value)||blob.name}else return}setValueState(function(oldValueState){var _nameInputReference$p2;if(typeof eventSourceOrName==="undefined"||eventSourceOrName!==null&&FileInput_typeof(eventSourceOrName)==="object"&&eventSourceOrName.target&&!(eventSourceOrName.target.tagName==="INPUT"&&eventSourceOrName.target.getAttribute("type")==="file"))// NOTE: Mark file as deleted.
properties.value=null;else if(typeof eventSourceOrName==="string")/*
                        NOTE: A name can only be changed if a blob is available
                        beforehand.
                    */properties.value=FileInput_objectSpread(FileInput_objectSpread({},oldValueState.value),{},{name:eventSourceOrName});else if(eventSourceOrName&&(typeof eventSourceOrName.source==="string"||typeof eventSourceOrName.url==="string"||typeof eventSourceOrName.hash==="string"))if(extendBlobProperties)properties.value=FileInput_objectSpread(FileInput_objectSpread({},oldValueState.value),eventSourceOrName);else properties.value=eventSourceOrName;if((0,external_clientnode_.equals)(oldValueState.value,properties.value))return oldValueState;var stateChanged=false;var result=FileInput_objectSpread(FileInput_objectSpread({},oldValueState),{},{value:properties.value});if(oldValueState.modelState.pristine){properties.dirty=true;properties.pristine=false;stateChanged=true}onChange(event);if(determineValidationState(properties,(nameInputReference===null||nameInputReference===void 0||(_nameInputReference$p2=nameInputReference.properties)===null||_nameInputReference$p2===void 0?void 0:_nameInputReference$p2.invalid)||false,oldValueState.modelState))stateChanged=true;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeValue",controlled,properties.value,event,properties);if(stateChanged){result.modelState=properties.model.state;(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)}if(extendBlobProperties)result.attachBlobProperty=true;return result})},[propertiesChangedIndicator,mediaCardReference]);/**
     * Triggered on click events.
     * @param event - Mouse event object.
     */var onClick=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"click",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggered on focus events.
     * @param event - Focus event object.
     */var onFocus=(0,external_react_.useCallback)(function(event){(0,helper/* triggerCallbackIfExists */.LI)(properties,"focus",controlled,event,properties);onTouch(event)},[propertiesChangedIndicator]);/**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     */var onTouch=(0,external_react_.useCallback)(function(event){setValueState(function(oldValueState){var changedState=false;if(!oldValueState.modelState.focused){properties.focused=true;changedState=true}if(oldValueState.modelState.untouched){properties.touched=true;properties.untouched=false;changedState=true}var result=oldValueState;if(changedState){onChange(event);result=FileInput_objectSpread(FileInput_objectSpread({},oldValueState),{},{modelState:properties.model.state});(0,helper/* triggerCallbackIfExists */.LI)(properties,"changeState",controlled,properties.model.state,event,properties)};(0,helper/* triggerCallbackIfExists */.LI)(properties,"touch",controlled,event,properties);return result})},[propertiesChangedIndicator,mediaCardReference]);// endregion
var defaultID=(0,external_react_.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;(0,external_react_.useEffect)(function(){var ignore=false;var abortHandler=external_clientnode_.NOOP;var fetchAbortController=new AbortController;_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _properties$value;var valueChanged,_properties$value$url,type,_properties$value2,_properties$value3,_properties$value4,blob,currentChunk,chunkSize,chunks,buffer,fileReader,hash,_t,_t2,_t3;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:valueChanged={};if(!((_properties$value=properties.value)!==null&&_properties$value!==void 0&&_properties$value.source)){_context.n=4;break}if(properties.value.blob){_context.n=1;break}// Derive missing blob from given source.
if((_properties$value$url=properties.value.url)!==null&&_properties$value$url!==void 0&&_properties$value$url.startsWith("data:"))valueChanged.blob=__WEBPACK_EXTERNAL_MODULE_blob_util_516ea100_dataURLToBlob__(properties.value.url);else if(properties.sourceToBlobOptions)valueChanged.blob=new Blob([properties.value.source],properties.sourceToBlobOptions);_context.n=3;break;case 1:if(properties.value.url){_context.n=3;break}type=contentType||"text/plain";/*
                            Try to derive missing encoded base64 url from given
                            blob or plain source.
                        */_t="data:".concat(type,";charset=").concat(properties.encoding,";")+"base64,";_context.n=2;return deriveBase64String(properties.value);case 2:_t2=_context.v;valueChanged.url=_t+_t2;case 3:if(!properties.value.hash)valueChanged.hash=properties.hashingConfiguration.prefix+__WEBPACK_EXTERNAL_MODULE_spark_md5_5906cbd1_hash__(properties.value.source);_context.n=14;break;case 4:if(!(typeof Blob!=="undefined"&&((_properties$value2=properties.value)===null||_properties$value2===void 0?void 0:_properties$value2.blob)instanceof Blob)){_context.n=5;break}blob=properties.value.blob;_context.n=10;break;case 5:if(!((_properties$value3=properties.value)!==null&&_properties$value3!==void 0&&_properties$value3.url)){_context.n=10;break}if(!properties.value.url.startsWith("data:")){_context.n=6;break}_t3=__WEBPACK_EXTERNAL_MODULE_blob_util_516ea100_dataURLToBlob__(properties.value.url);_context.n=8;break;case 6:_context.n=7;return fetch(properties.value.url,{signal:fetchAbortController.signal});case 7:_t3=_context.v.blob();case 8:_context.n=9;return _t3;case 9:blob=_context.v;if(!properties.value.blob)valueChanged.blob=blob;case 10:if(!blob){_context.n=12;break}_context.n=11;return representationType===FileInput_type/* RepresentationType */.Ex.TEXT?readBinaryDataIntoText(blob,properties.encoding,function(abortController){abortHandler=abortController}):deriveBase64String({blob:blob});case 11:valueChanged.source=_context.v;abortHandler=external_clientnode_.NOOP;case 12:if(!(!((_properties$value4=properties.value)!==null&&_properties$value4!==void 0&&_properties$value4.hash)&&blob)){_context.n=14;break}/*
                            We have a blob but no hash so far, therefore we
                            read the file with reduced memory effort chunk by
                            chunk having the configured size.
                        */currentChunk=0;chunkSize=properties.hashingConfiguration.readChunkSizeInByte;chunks=Math.ceil(blob.size/chunkSize);buffer=new __WEBPACK_EXTERNAL_MODULE_spark_md5_5906cbd1_ArrayBuffer__;fileReader=new FileReader;abortHandler=function abortHandler(){fileReader.abort()};_context.n=13;return new Promise(function(resolve,reject){fileReader.onload=function(event){var _event$target;buffer.append((_event$target=event.target)===null||_event$target===void 0?void 0:_event$target.result);currentChunk++;if(currentChunk<chunks)loadNext();else resolve(buffer.end(properties.hashingConfiguration.binaryString))};fileReader.onerror=reject;var loadNext=function loadNext(){var start=currentChunk*chunkSize;var end=start+chunkSize>=blob.size?blob.size:start+chunkSize;fileReader.readAsArrayBuffer(blob.slice(start,end))};loadNext()});case 13:hash=_context.v;abortHandler=external_clientnode_.NOOP;valueChanged.hash=properties.hashingConfiguration.prefix+(properties.hashingConfiguration.binaryString?btoa(hash):hash);case 14:/*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */if(!ignore&&Object.keys(valueChanged).length>0)onChangeValue(valueChanged,undefined,undefined,true);/*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */case 15:return _context.a(2)}},_callee)}))().catch(function(reason){void log.warn(reason)});return function(){ignore=true;abortHandler();fetchAbortController.abort("file hase been changed")}},[properties.encoding,/*
                NOTE: It is possible to hand in a mocked blob object to define
                type and size of remotely referenced file (e.g. by url).
            */((_properties$value5=properties.value)===null||_properties$value5===void 0?void 0:_properties$value5.blob)instanceof Blob?properties.value.blob:JSON.stringify((_properties$value6=properties.value)===null||_properties$value6===void 0?void 0:_properties$value6.blob),(_properties$value7=properties.value)===null||_properties$value7===void 0?void 0:_properties$value7.hash,(_properties$value8=properties.value)===null||_properties$value8===void 0?void 0:_properties$value8.source,(_properties$value9=properties.value)===null||_properties$value9===void 0?void 0:_properties$value9.url,JSON.stringify(properties.sourceToBlobOptions),properties.hashingConfiguration.prefix,properties.hashingConfiguration.readChunkSizeInByte,properties.hashingConfiguration.binaryString]);(0,external_react_.useEffect)(function(){if(properties.triggerInitialPropertiesConsolidation)onChange()},[]);var contentType=(_determineContentType=determineContentType(properties))!==null&&_determineContentType!==void 0?_determineContentType:"application/binary";// region render
var representationType=contentType?determineRepresentationType(contentType):FileInput_type/* RepresentationType */.Ex.BINARY;var invalid=properties.invalid&&properties.showValidationState&&(properties.showInitialValidationState||properties.visited);var triggerInitialPropertiesConsolidation=properties.triggerInitialPropertiesConsolidation;return/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapConfigurations/* WrapConfigurations */.Es,{strict:FileInput.strict,themeConfiguration:properties.themeConfiguration,tooltip:properties.tooltip,children:/*#__PURE__*/(0,jsx_runtime_.jsxs)(rmwc_MediaCard,{ref:setMediaCardReference,componentProperties:properties.componentProperties,id:props.id,classNames:(0,external_react_generic_tools_.useMemorizedValue)([helper_CSS_CLASS_NAMES.fileInput].concat(properties.className),properties.className),imageClassNames:properties.imageClassNames,styles:properties.styles,deleteButton:properties.deleteButton,downloadButton:properties.downloadButton,editButton:properties.editButton,newButton:properties.newButton,fileName:(_properties$value0=properties.value)===null||_properties$value0===void 0?void 0:_properties$value0.name,type:(_properties$value1=properties.value)!==null&&_properties$value1!==void 0&&_properties$value1.url?representationType===FileInput_type/* RepresentationType */.Ex.IMAGE?MediaCardRepresentationType.IMAGE:representationType===FileInput_type/* RepresentationType */.Ex.VIDEO?MediaCardRepresentationType.VIDEO:representationType===FileInput_type/* RepresentationType */.Ex.EMBEDABLE_TEXT?MediaCardRepresentationType.IFRAME:representationType===FileInput_type/* RepresentationType */.Ex.TEXT?MediaCardRepresentationType.TEXT:undefined:(_properties$value10=properties.value)!==null&&_properties$value10!==void 0&&_properties$value10.blob&&properties.value.blob instanceof Blob?MediaCardRepresentationType.PENDING:undefined,disabled:properties.disabled,invalid:invalid,empty:!properties.value,description:properties.description,name:properties.name,errorMessage:(0,helper/* renderMessage */.e4)(properties.invalidContentTypePattern&&properties.contentTypePatternText||properties.invalidInvertedContentTypePattern&&properties.invertedContentTypePatternText||properties.invalidMaximumSize&&properties.maximumSizeText||properties.invalidMinimumSize&&properties.minimumSizeText||properties.invalidRequired&&properties.requiredText,properties),url:(_properties$value11=properties.value)===null||_properties$value11===void 0?void 0:_properties$value11.url,contentType:contentType,content:(_properties$value12=properties.value)===null||_properties$value12===void 0?void 0:_properties$value12.source,onBlur:onBlur,onClick:onClick,onClickAddOrEdit:(0,external_react_generic_tools_.useMemorizedValue)(function(){fileInputReference===null||fileInputReference===void 0||fileInputReference.click()},fileInputReference),onChange:onChangeValue,onFocus:onFocus,children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("input",{accept:[].concat((_properties$acceptedC=properties.acceptedContentTypes)!==null&&_properties$acceptedC!==void 0?_properties$acceptedC:[]).join(", "),disabled:properties.disabled,className:[helper_CSS_CLASS_NAMES.fileInputNative].concat((_properties$fileInput=properties.fileInputClassNames)!==null&&_properties$fileInput!==void 0?_properties$fileInput:[]).join(" "),id:id,name:properties.name,onChange:onChangeValue,ref:setFileInputReference,type:"file"}),properties.value?/*#__PURE__*/(0,jsx_runtime_.jsx)(TextInput/* default */.Ay,FileInput_objectSpread({ref:setNameInputReference},properties.generateFileNameInputProperties(FileInput_objectSpread(FileInput_objectSpread({disabled:properties.disabled,value:(_properties$value13=properties.value)===null||_properties$value13===void 0?void 0:_properties$value13.name},(0,external_clientnode_.mask)(FileInput_type/* defaultFileNameInputProperties */.Mx,{exclude:Object.keys(properties.model.fileName)})),{},{default:properties.value.name,model:properties.model.fileName,onChangeValue:onChangeValue,triggerInitialPropertiesConsolidation:triggerInitialPropertiesConsolidation}),properties))):"",properties.children?properties.children({declaration:properties.declaration,invalid:invalid,properties:properties,value:properties.value}):""]})});// endregion
};// NOTE: This is useful in react dev tools.
FileInputInner.displayName="FileInput";/**
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
 */var FileInput=/*#__PURE__*/(0,external_react_.memo)(/*#__PURE__*/(0,external_react_.forwardRef)(FileInputInner));// region static properties
/// region web-component hints
FileInput.wrapped=FileInputInner;FileInput.webComponentAdapterWrapped="react";/// endregion
FileInput.defaultModelState=FileInput_type/* defaultModelState */.m8;/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/FileInput.defaultProperties=FileInput_objectSpread(FileInput_objectSpread({},FileInput_type/* defaultProperties */.L6),{},{model:FileInput_objectSpread(FileInput_objectSpread({},FileInput_type/* defaultProperties */.L6.model),{},{// Trigger initial determination.
state:undefined,value:undefined}),value:undefined});FileInput.propTypes=FileInput_type/* propertyTypes */.Pl;FileInput.renderProperties=FileInput_type/* renderProperties */.Wc;FileInput.strict=false;// endregion
/* harmony default export */ var components_FileInput = (FileInput);
export { helper_CSS_CLASS_NAMES as CSS_CLASS_NAMES, EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION, FileInput, FileInputInner, IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION, TEXT_CONTENT_TYPE_REGULAR_EXPRESSION, VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION, components_FileInput as default, deriveBase64String, determineRepresentationType, determineValidationState, log, preserveStaticFileBaseNameInputGenerator, readBinaryDataIntoText };

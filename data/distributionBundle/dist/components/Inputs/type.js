if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_push_js_baa3ea94__ from "core-js/modules/es.array.push.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_constructor_js_833f4df9__ from "core-js/modules/es.iterator.constructor.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_filter_js_abae28b4__ from "core-js/modules/es.iterator.filter.js";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_for_each_js_2628f2dd__ from "core-js/modules/es.iterator.for-each.js";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["any"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.any; }, ["arrayOf"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.arrayOf; }, ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["func"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.func; }, ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["oneOfType"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.oneOfType; }, ["shape"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.shape; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; }, ["symbol"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.symbol; } });

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Zl: function() { return /* binding */ modelStatePropertyTypes; },
/* harmony export */   m8: function() { return /* binding */ defaultModelState; }
/* harmony export */ });
/* unused harmony exports PrimitiveTypes, baseModelPropertyTypes, modelPropertyTypes */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
// -*- coding: utf-8 -*-
/** @module type *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
// region exports
/// region generic
var PrimitiveTypes=(/* unused pure expression or super */ null && (["boolean","DateTime","integer","number","string"]));// | PrimitiveType
//// region model
//// endregion
//// region state
//// endregion
//// region constants
var baseModelPropertyTypes={name:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,declaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,description:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,default:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.any,// NOTE: Corresponds to type "SelectionDefinition".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.shape)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object]),/*
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
    */type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,value:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.any};var modelStatePropertyTypes={dirty:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),pristine:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),touched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),untouched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),focused:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),visited:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidRequired:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),valid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol])};var modelPropertyTypes=_objectSpread(_objectSpread({},baseModelPropertyTypes),{},{emptyEqualsNull:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,trim:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,invertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),pattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),maximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),minimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),maximumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,minimumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,mutable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,writable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,state:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.shape)(modelStatePropertyTypes)});var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},baseModelPropertyTypes),modelStatePropertyTypes),{},{className:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)(clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),styles:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,themeConfiguration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,disabled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,enforceUncontrolled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,initialValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.any,model:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.shape)(modelPropertyTypes),// NOTE: Overwrites model selection and corresponds to type "Selection".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]))),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.shape)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object]),onChange:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onChangeValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onChangeShowDeclaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onChangeState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onClick:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onFocus:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onTouch:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,required:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,requiredText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,componentProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,domNodeProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,showDeclaration:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),showInitialValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,showValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,/*
        NOTE: Not yet working:
        tooltip?: string | TooltipProps
        trailingIcon?:
            string |
             (IconOptions & {tooltip?: string | TooltipProps})
    */tooltip:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.any});var defaultModelState={dirty:false,pristine:true,focused:false,visited:false,invalid:false,invalidRequired:false,valid:true,touched:false,untouched:true};var defaultModel={declaration:"",description:"",name:"NO_NAME_DEFINED",emptyEqualsNull:true,pattern:undefined,invertedPattern:undefined,maximum:Infinity,minimum:-Infinity,maximumLength:Infinity,minimumLength:0,mutable:true,/*
        NOTE: We do not want to shadow "default" here:
        value: null,
    */writable:true,nullable:true,state:_objectSpread({},defaultModelState),trim:true,type:"string"};/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties={className:[],styles:{},componentProperties:{},domNodeProperties:{},enforceUncontrolled:false,model:_objectSpread({},defaultModel),triggerInitialPropertiesConsolidation:false,showDeclaration:undefined,showInitialValidationState:false,showValidationState:true,requiredText:"Please fill this field."};//// endregion
/// endregion
// endregion

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zl: function() { return /* binding */ modelStatePropertyTypes; }
/* harmony export */ });
/* unused harmony exports propertyTypes, renderProperties, defaultModelState, defaultInputModel, defaultProperties */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
// -*- coding: utf-8 -*-
/** @module type *//* !
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
var modelStatePropertyTypes=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_5__/* .modelStatePropertyTypes */ .Zl),{},{invalidMaximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidMinimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidMaximumLength:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidMinimumLength:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidInvertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),invalidPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol])});var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_5__/* .propertyTypes */ .Pl),modelStatePropertyTypes),{},{/*
        NOTE: Not yet working:
        align: oneOf(['end', 'start']),
    */align:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,children:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,/*
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
    */editor:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,editorIsActive:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),editorIsInitiallyActive:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,hidden:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),leadingIcon:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object]),trailingIcon:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object]),attributes:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,invertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),invertedPatternText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,labels:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.any,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]))),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)(clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object]),maximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),maximumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,minimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),minimumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,maximumLengthText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,minimumLengthText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,maximumText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,minimumText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,onBlur:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onChangeEditorIsActive:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onKeyDown:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onKeyUp:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onSelect:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,onSelectionChange:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,pattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string]),patternText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,placeholder:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,representation:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.symbol]),rows:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,searchSelection:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,selectableEditor:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,step:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,suggestionCreator:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,suggestSelection:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.boolean,transformer:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.object});var renderProperties=(/* unused pure expression or super */ null && (["children","suggestionCreator"]));var defaultModelState=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultModelState */ .m8),{},{invalidMaximum:false,invalidMinimum:false,invalidMaximumLength:false,invalidMinimumLength:false,invalidInvertedPattern:false,invalidPattern:false});var defaultInputModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultModel */ .$I),{},{state:defaultModelState});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultProperties */ .L6),{},{editor:"plain",selectableEditor:false,rows:4,invertedPatternText:"Your string should not match the regular expression"+"${[].concat(invertedPattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(invertedPattern).join(\"\\\", \\\"\")}\".",maximumLengthText:"Please type less or equal than ${maximumLength} symbols.",minimumLengthText:"Please type at least or equal ${minimumLength} symbols.",maximumText:"Please type less or equal than ${formatValue(maximum)}.",minimumText:"Please type at least or equal ${formatValue(minimum)}.",model:_objectSpread({},defaultInputModel),patternText:"Your string have to match the regular expression"+"${[].concat(pattern).length > 1 ? \"s\" : \"\"}: "+"\"${[].concat(pattern).join(\"\\\", \\\"\")}\".",searchSelection:false,suggestSelection:false,step:1});// endregion

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
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Wc: function() { return /* binding */ renderProperties; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _TextInput_type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
// -*- coding: utf-8 -*-
/** @module type *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
// region constants
var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_6__/* .propertyTypes */ .Pl),_TextInput_type_js__WEBPACK_IMPORTED_MODULE_5__/* .modelStatePropertyTypes */ .Zl),{},{// We use that function (render prop) to produce input component instances.
children:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,createItem:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,createPrototype:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.func,maximumNumber:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number,minimumNumber:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.number});var renderProperties=["children","createItem","createPrototype"];var defaultModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_6__/* .defaultModel */ .$I),{},{state:_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_6__/* .defaultModel */ .$I.state),{},{invalidMaximumNumber:false,invalidMinimumNumber:false}),maximumNumber:Infinity,minimumNumber:0,type:"string[]"});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_6__/* .defaultProperties */ .L6),{},{addIcon:"add",removeIcon:"clear",createItem:function createItem(_ref){var item=_ref.item;return item},createPrototype:function createPrototype(_ref2){var item=_ref2.item;return item},model:_objectSpread({},defaultModel)});// endregion
export { defaultModel, defaultProperties, propertyTypes, renderProperties };

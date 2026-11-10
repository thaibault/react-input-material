if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
/******/ var __webpack_modules__ = ({

/***/ 2:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["any"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.any; }, ["arrayOf"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.arrayOf; }, ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["func"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.func; }, ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["oneOfType"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.oneOfType; }, ["shape"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.shape; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; }, ["symbol"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.symbol; } });

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
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   JV: function() { return /* binding */ PrimitiveTypes; },
/* harmony export */   Je: function() { return /* binding */ baseModelPropertyTypes; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Zl: function() { return /* binding */ modelStatePropertyTypes; },
/* harmony export */   m8: function() { return /* binding */ defaultModelState; },
/* harmony export */   qw: function() { return /* binding */ modelPropertyTypes; }
/* harmony export */ });
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
var PrimitiveTypes=["boolean","DateTime","integer","number","string"];// | PrimitiveType
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
export { PrimitiveTypes, baseModelPropertyTypes, defaultModel, defaultModelState, defaultProperties, modelPropertyTypes, modelStatePropertyTypes, propertyTypes };

if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),
/* 1 */
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(97);
} else // removed by dead control flow
{}


/***/ }),
/* 3 */
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(98);
} else // removed by dead control flow
{}


/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(21);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var toObject = __webpack_require__(56);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(1);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(32);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(35);
var anObject = __webpack_require__(10);
var toPropertyKey = __webpack_require__(25);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(8);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(45);
var requireObjectCoercible = __webpack_require__(23);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ MDCFoundation; }
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MDCFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(21);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isCallable = __webpack_require__(1);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),
/* 15 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(55);
var globalThis = __webpack_require__(0);
var defineGlobalProperty = __webpack_require__(16);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.50.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 16 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),
/* 17 */
/***/ (function(module) {


module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 19 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pc: function() { return /* binding */ useMemorizedValue; },
/* harmony export */   yb: function() { return /* binding */ useReferenceState; }
/* harmony export */ });
/* unused harmony export Pagination */
/* unused harmony import specifier */ var __WEBPACK_EXTERNAL_MODULE_clientnode_paginate__;
/* unused harmony import specifier */ var __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__;
/* unused harmony import specifier */ var __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_Fragment__;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;



;// external "clientnode"

;// external "react"

;// external "react/jsx-runtime"

;// ./src/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Generic *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=(/* unused pure expression or super */ null && (["boundaryCount","className","disabled","hideNextButton","hidePrevButton","page","pageSize","render","showFirstButton","showLastButton","siblingCount","total"]));function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _objectWithoutProperties(t,r){if(null==t)return{};var o,n,i=_objectWithoutPropertiesLoose(t,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],-1===r.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
// region hooks
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */function useMemorizedValue(value){for(var _len=arguments.length,dependencies=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){dependencies[_key-1]=arguments[_key]}return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return value},dependencies)}/**
 * Use state wrapper to deal with references. It only sets a new state if the
 * given reference isn't null.
 * @param initialValue - To set state to.
 * @returns Whatever "useState" would return.
 */var useReferenceState=function useReferenceState(initialValue){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),_useState2=_slicedToArray(_useState,2),value=_useState2[0],setValue=_useState2[1];return[value,useMemorizedValue(function(reference){if(reference!==null)setValue(reference)})]};// endregion
// region components
var Pagination=function Pagination(_ref){var _ref$boundaryCount=_ref.boundaryCount,boundaryCount=_ref$boundaryCount===void 0?1:_ref$boundaryCount,_ref$className=_ref.className,className=_ref$className===void 0?"pagination":_ref$className,_ref$disabled=_ref.disabled,disabled=_ref$disabled===void 0?false:_ref$disabled,_ref$hideNextButton=_ref.hideNextButton,hideNextButton=_ref$hideNextButton===void 0?false:_ref$hideNextButton,_ref$hidePrevButton=_ref.hidePrevButton,hidePrevButton=_ref$hidePrevButton===void 0?false:_ref$hidePrevButton,_ref$page=_ref.page,page=_ref$page===void 0?1:_ref$page,_ref$pageSize=_ref.pageSize,pageSize=_ref$pageSize===void 0?5:_ref$pageSize,_ref$render=_ref.render,render=_ref$render===void 0?function(_ref2){var page=_ref2.page,type=_ref2.type;return String(page)||type}:_ref$render,_ref$showFirstButton=_ref.showFirstButton,showFirstButton=_ref$showFirstButton===void 0?false:_ref$showFirstButton,_ref$showLastButton=_ref.showLastButton,showLastButton=_ref$showLastButton===void 0?false:_ref$showLastButton,_ref$siblingCount=_ref.siblingCount,siblingCount=_ref$siblingCount===void 0?1:_ref$siblingCount,_ref$total=_ref.total,total=_ref$total===void 0?100:_ref$total,additionalProperties=_objectWithoutProperties(_ref,_excluded);return total>(pageSize!==null&&pageSize!==void 0?pageSize:1)?/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("div",{className:className,children:/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("ul",_objectSpread(_objectSpread({},additionalProperties),{},{children:__WEBPACK_EXTERNAL_MODULE_clientnode_paginate__({boundaryCount:boundaryCount,disabled:disabled,hideNextButton:hideNextButton,hidePrevButton:hidePrevButton,page:page,pageSize:pageSize,showFirstButton:showFirstButton,showLastButton:showLastButton,siblingCount:siblingCount,total:total}).map(function(item){return/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("li",{children:render(item)},item.type+(typeof item.page==="number"?"-".concat(String(item.page)):""))})}))}):/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__(__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_Fragment__,{})};// endregion



/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(43);
var $includes = (__webpack_require__(38).includes);
var fails = __webpack_require__(3);
var addToUnscopables = __webpack_require__(69);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// Safari 26.4- bug
var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function () {
  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
  return [, 1].includes(undefined, 1);
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 22 */
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(24);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 25 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(47);
var isSymbol = __webpack_require__(26);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 26 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(14);
var isCallable = __webpack_require__(1);
var isPrototypeOf = __webpack_require__(48);
var USE_SYMBOL_AS_UID = __webpack_require__(27);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 27 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(28);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),
/* 28 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(49);
var fails = __webpack_require__(3);
var globalThis = __webpack_require__(0);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 29 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var shared = __webpack_require__(30);
var hasOwn = __webpack_require__(7);
var uid = __webpack_require__(31);
var NATIVE_SYMBOL = __webpack_require__(28);
var USE_SYMBOL_AS_UID = __webpack_require__(27);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 30 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(15);
// eslint-disable-next-line es/no-object-create -- safe
var create = Object.create || Object;

module.exports = function (key, value) {
  return store[key] || (store[key] = value || create(null));
};


/***/ }),
/* 31 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 32 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(33);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),
/* 33 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isObject = __webpack_require__(8);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(9);
var createPropertyDescriptor = __webpack_require__(22);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 35 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(3);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),
/* 36 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(30);
var uid = __webpack_require__(31);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var hasOwn = __webpack_require__(7);
var toIndexedObject = __webpack_require__(11);
var indexOf = (__webpack_require__(38).indexOf);
var hiddenKeys = __webpack_require__(17);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(64);
var lengthOfArrayLike = __webpack_require__(66);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 39 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(65);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);
var hasOwn = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(58).CONFIGURABLE);
var inspectSource = __webpack_require__(59);
var InternalStateModule = __webpack_require__(60);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var getOwnPropertyDescriptor = (__webpack_require__(44).f);
var createNonEnumerableProperty = __webpack_require__(34);
var defineBuiltIn = __webpack_require__(57);
var defineGlobalProperty = __webpack_require__(16);
var copyConstructorProperties = __webpack_require__(62);
var isForced = __webpack_require__(68);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var call = __webpack_require__(13);
var propertyIsEnumerableModule = __webpack_require__(83);
var createPropertyDescriptor = __webpack_require__(22);
var toIndexedObject = __webpack_require__(11);
var toPropertyKey = __webpack_require__(25);
var hasOwn = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(32);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 45 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var fails = __webpack_require__(3);
var classof = __webpack_require__(46);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 46 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(13);
var isObject = __webpack_require__(8);
var isSymbol = __webpack_require__(26);
var getMethod = __webpack_require__(51);
var ordinaryToPrimitive = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(29);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 48 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 49 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var userAgent = __webpack_require__(50);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 50 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),
/* 51 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(52);
var isNullOrUndefined = __webpack_require__(24);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 52 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(1);
var tryToString = __webpack_require__(53);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 53 */
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 54 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(13);
var isCallable = __webpack_require__(1);
var isObject = __webpack_require__(8);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 55 */
/***/ (function(module) {


module.exports = false;


/***/ }),
/* 56 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(23);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 57 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(1);
var definePropertyModule = __webpack_require__(9);
var makeBuiltIn = __webpack_require__(41);
var defineGlobalProperty = __webpack_require__(16);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),
/* 58 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var hasOwn = __webpack_require__(7);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 59 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var isCallable = __webpack_require__(1);
var store = __webpack_require__(15);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 60 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(61);
var globalThis = __webpack_require__(0);
var isObject = __webpack_require__(8);
var createNonEnumerableProperty = __webpack_require__(34);
var hasOwn = __webpack_require__(7);
var shared = __webpack_require__(15);
var sharedKey = __webpack_require__(36);
var hiddenKeys = __webpack_require__(17);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 61 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isCallable = __webpack_require__(1);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 62 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(7);
var ownKeys = __webpack_require__(63);
var getOwnPropertyDescriptorModule = __webpack_require__(44);
var definePropertyModule = __webpack_require__(9);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 63 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(14);
var uncurryThis = __webpack_require__(5);
var getOwnPropertyNamesModule = __webpack_require__(84);
var getOwnPropertySymbolsModule = __webpack_require__(85);
var anObject = __webpack_require__(10);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 64 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(39);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 65 */
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 66 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(67);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 67 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(39);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 69 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(29);
var create = __webpack_require__(70);
var defineProperty = (__webpack_require__(9).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 70 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(10);
var definePropertiesModule = __webpack_require__(86);
var enumBugKeys = __webpack_require__(18);
var hiddenKeys = __webpack_require__(17);
var html = __webpack_require__(72);
var documentCreateElement = __webpack_require__(33);
var sharedKey = __webpack_require__(36);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 71 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(18);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 72 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(14);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 73 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tEg: function() { return /* binding */ __webpack_exports__NOOP; }
/* harmony export */ });
/* unused harmony exports ABBREVIATIONS, ALLOWED_STARTING_VARIABLE_SYMBOLS, ALLOWED_VARIABLE_SYMBOLS, ANIMATION_END_EVENT_NAMES, AsyncFunction, CLASS_TO_TYPE_MAPPING, CLI_COLOR, CLOSE_EVENT_NAMES, CONSOLE_METHODS, DATE_TIME_PATTERN_CACHE, DEFAULT_ENCODING, DEFAULT_OPTIONS, FIX_ENCODING_ERROR_MAPPING, IGNORE_NULL_AND_UNDEFINED_SYMBOL, KEYBOARD_CODES, KEY_CODES, KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS, LEVELS, LEVELS_COLOR, LOCALES, Lock, Logger, MANUAL_SCROLL_EVENT_NAMES, MAXIMAL_NUMBER_OF_ITERATIONS, NO_ITEM_FOUND_SYMBOL, PLAIN_OBJECT_PROTOTYPES, POLYFILL_TEMPLATE_STRINGS, SCROLL_EVENT_NAMES, SELECTOR_KEY_NAMES, SPECIAL_REGEX_SEQUENCES, STOP_AUTO_SCROLLING, Semaphore, TRANSITION_END_EVENT_NAMES, UTILITY_SCOPE, UTILITY_SCOPE_NAMES, UTILITY_SCOPE_VALUES, VALUE_COPY_SYMBOL, addDynamicGetterAndSetter, addSeparatorToPath, aggregatePropertyIfEqual, cacheImage, camelCaseToDelimited, capitalize, ceil, checkReachability, checkUnreachability, clearRequireCache, closest, compile, compressStyleValue, convertCircularObjectToJSON, convertMapToPlainObject, convertPlainObjectToMap, convertSubstringInPlainObject, convertToValidVariableName, copy, copyDirectoryRecursive, copyDirectoryRecursiveSync, copyFile, copyFileSync, createDomNodes, currentRequire, dateTimeFormat, debounce, decodeHTMLEntities, deleteCookie, deleteEmptyItems, delimitedToCamelCase, determineGlobalContext, determineType, determineUniqueScopeName, encodeURIComponentExtended, equals, escapeRegularExpressions, evaluate, evaluateAnd, evaluateArrayContains, evaluateAsyncDynamicData, evaluateConcat, evaluateCondition, evaluateDynamicData, evaluateExpression, evaluateIf, evaluateMapping, evaluateOperation, evaluateOptionalThen, evaluateOr, evaluateOrThrowError, evaluateSelector, evaluateSelectorUntilLastObject, evaluateSwitch, evaluateUnaryOperation, extend, extract, extractIfMatches, extractIfPropertyExists, extractIfPropertyMatches, fade, fadeIn, fadeOut, findNormalizedMatchRange, fixKnownEncodingErrors, floor, format, getAll, getCookie, getCurrentRequire, getDomainName, getEditDistance, getParameterNames, getParents, getPortNumber, getProcessCloseHandler, getProtocolName, getProxyHandler, getText, getURLParameter, getUTCTimestamp, globalContext, handleChildProcess, hasPathPrefix, identity, importFilesystemAPI, imports, interpretDateTime, interruptableScrollTo, intersect, invertArrayFilter, isAndExpression, isAnyMatching, isArrayContainsExpression, isArrayLike, isConcatExpression, isCondition, isDirectory, isDirectorySync, isEquivalent, isFile, isFileSync, isFunction, isHidden, isIfExpression, isImportSyntaxSupported, isMap, isMappingExpression, isNotANumber, isNumeric, isObject, isOperation, isOrExpression, isPlainObject, isProxy, isSelector, isSet, isSpecificExpression, isSwitchExpression, isUnaryOperation, isValue, isWindow, isolateScope, isolatedRequire, limit, lowerCase, makeArray, makeRange, mark, mask, maskForRegularExpression, merge, mockConsole, modifyObject, normalizeDateTime, normalizeDomNodeSelector, normalizePhoneNumber, normalizeSelector, normalizeURL, normalizeZipCode, onDocumentReady, optionalImport, optionalRequire, paginate, parseEncodedObject, permute, permuteLength, preventDefault, removeArrayItem, removeKeyPrefixes, removeKeysInEvaluation, replace, represent, representPhoneNumber, representURL, round, scrollTo, selectArrayItem, serviceURLEquals, setCookie, setGlobalContext, setOptionalRequire, sliceAllExceptNumberAndLastSeparator, sliceWeekday, sort, sortTopological, stopPropagation, sumUpProperty, timeout, trailingThrottle, unique, unwrap, unwrapProxy, viewArrayAsScope, viewObjectAsScope, walkDirectoryRecursively, walkDirectoryRecursivelySync, wrap */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;

/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_478__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_478__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_742__) {

/* harmony export */ __nested_webpack_require_742__.d(__nested_webpack_exports__, {
/* harmony export */   FI: function() { return /* binding */ SPECIAL_REGEX_SEQUENCES; },
/* harmony export */   Fp: function() { return /* binding */ VALUE_COPY_SYMBOL; },
/* harmony export */   GU: function() { return /* binding */ TRANSITION_END_EVENT_NAMES; },
/* harmony export */   Iy: function() { return /* binding */ ABBREVIATIONS; },
/* harmony export */   Lb: function() { return /* binding */ KEY_CODES; },
/* harmony export */   Vx: function() { return /* binding */ ANIMATION_END_EVENT_NAMES; },
/* harmony export */   YZ: function() { return /* binding */ LOCALES; },
/* harmony export */   c_: function() { return /* reexport safe */ _Lock_js__WEBPACK_IMPORTED_MODULE_0__.c; },
/* harmony export */   dy: function() { return /* binding */ KEYBOARD_CODES; },
/* harmony export */   jE: function() { return /* binding */ PLAIN_OBJECT_PROTOTYPES; },
/* harmony export */   jG: function() { return /* binding */ CLOSE_EVENT_NAMES; },
/* harmony export */   jf: function() { return /* reexport safe */ _Semaphore_js__WEBPACK_IMPORTED_MODULE_1__.j; },
/* harmony export */   jg: function() { return /* binding */ CONSOLE_METHODS; },
/* harmony export */   l_: function() { return /* binding */ CLI_COLOR; },
/* harmony export */   p_: function() { return /* binding */ IGNORE_NULL_AND_UNDEFINED_SYMBOL; },
/* harmony export */   rq: function() { return /* binding */ CLASS_TO_TYPE_MAPPING; },
/* harmony export */   uJ: function() { return /* binding */ DEFAULT_ENCODING; }
/* harmony export */ });
/* harmony import */ var _Lock_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_742__(10);
/* harmony import */ var _Semaphore_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_742__(11);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module constants *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var CLI_COLOR={black:"\x1B[30m",blink:"\x1B[5m",blue:"\x1B[0;34m",bold:"\x1B[1m",cyan:"\x1B[36m",darkGray:"\x1B[0;90m",default:"\x1B[0m",dim:"\x1B[2m",green:"\x1B[32m",invert:"\x1B[7m",invisible:"\x1B[8m",lightBlue:"\x1B[0;94m",lightCyan:"\x1B[0;96m",lightGray:"\x1B[0;37m",lightGreen:"\x1B[0;92m",lightMagenta:"\x1B[0;95m",lightRed:"\x1B[0;91m",lightYellow:"\x1B[0;93m",magenta:"\x1B[35m",nodim:"\x1B[22m",noblink:"\x1B[25m",nobold:"\x1B[21m",noinvert:"\x1B[27m",noinvisible:"\x1B[28m",nounderline:"\x1B[24m",red:"\x1B[31m",underline:"\x1B[4m",white:"\x1B[37m",yellow:"\x1B[33m"};var DEFAULT_ENCODING="utf8";var CLOSE_EVENT_NAMES=["close","exit","SIGINT","SIGTERM","SIGQUIT","uncaughtException"];var CONSOLE_METHODS=["debug","error","info","log","warn"];var VALUE_COPY_SYMBOL=Symbol.for("clientnodeValue");var IGNORE_NULL_AND_UNDEFINED_SYMBOL=Symbol.for("clientnodeIgnoreNullAndUndefined");// Lists all known abbreviation for proper camel case to delimited and back
// conversion.
var ABBREVIATIONS=["html","id","url","us","de","api","href"];// Saves a string with all css3 browser specific animation end event names.
var ANIMATION_END_EVENT_NAMES="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";// String representation to object type name mapping.
var CLASS_TO_TYPE_MAPPING={"[object Array]":"array","[object Boolean]":"boolean","[object Date]":"date","[object Error]":"error","[object Function]":"function","[object Map]":"map","[object Number]":"number","[object Object]":"object","[object RegExp]":"regexp","[object Set]":"set","[object String]":"string"};// Saves a mapping from key codes to their corresponding name.
var KEY_CODES={BACKSPACE:8,SPACE:32,TAB:9,DELETE:46,ENTER:13,COMMA:188,PERIOD:190,END:35,ESCAPE:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,HOME:36,NUMPAD_ADD:107,NUMPAD_SUBTRACT:109,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,PAGE_UP:33,PAGE_DOWN:34,UP:38,DOWN:40,LEFT:37,RIGHT:39};var KEYBOARD_CODES={BACKSPACE:"Backspace",SPACE:"Space",TAB:"Tab",DELETE:"Delete",ENTER:"Enter",COMMA:"Comma",PERIOD:"Period",END:"End",ESCAPE:"Escape",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F111",F12:"F12",HOME:"Home",NUMPAD_ADD:"NumpadAdd",NUMPAD_SUBTRACT:"NumpadSubtract",NUMPAD_DECIMAL:"NumpadDecimal",NUMPAD_DIVIDE:"NumpadDivide",NUMPAD_ENTER:"NumpadEnter",NUMPAD_MULTIPLY:"NumpadMultiply",PAGE_UP:"PageUp",PAGE_DOWN:"PageUp",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowUp"};var LOCALES=[];var PLAIN_OBJECT_PROTOTYPES=[Object.prototype];// A list of special regular expression symbols.
var SPECIAL_REGEX_SEQUENCES=["-","[","]","(",")","^","$","*","+",".","{","}"];// Saves a string with all css3 browser specific transition end event names.
var TRANSITION_END_EVENT_NAMES="transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";

/***/ }),
/* 2 */
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_5927__) {

__nested_webpack_require_5927__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5927__.d(__nested_webpack_exports__, {
/* harmony export */   Dx: function() { return /* binding */ isolatedRequire; },
/* harmony export */   I5: function() { return /* binding */ optionalRequire; },
/* harmony export */   Ni: function() { return /* binding */ clearRequireCache; },
/* harmony export */   SD: function() { return /* binding */ setOptionalRequire; },
/* harmony export */   Sw: function() { return /* binding */ optionalImport; },
/* harmony export */   a8: function() { return /* binding */ determineGlobalContext; },
/* harmony export */   lE: function() { return /* binding */ currentRequire; },
/* harmony export */   xN: function() { return /* binding */ isImportSyntaxSupported; },
/* harmony export */   zM: function() { return /* binding */ getCurrentRequire; }
/* harmony export */ });
/* module decorator */ module = __nested_webpack_require_5927__.hmd(module);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module module *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}var determineGlobalContext=function determineGlobalContext(){if(typeof globalThis==="undefined"){if(typeof window==="undefined"){if(typeof __nested_webpack_require_5927__.g==="undefined")return   false?0:module;if(Object.prototype.hasOwnProperty.call(__nested_webpack_require_5927__.g,"window"))return __nested_webpack_require_5927__.g.window;return __nested_webpack_require_5927__.g}return window}return globalThis};var globalContext=determineGlobalContext();var currentRequire=typeof globalContext.require==="undefined"?null:globalContext.require;var optionalRequire;var setOptionalRequire=function setOptionalRequire(localCurrentRequire){optionalRequire=function optionalRequire(id){try{return localCurrentRequire?localCurrentRequire(id):null}catch(_unused){return null}}};setOptionalRequire(currentRequire);var clearRequireCache=function clearRequireCache(cache){if(cache===void 0){var _currentRequire;cache=((_currentRequire=currentRequire)===null||_currentRequire===void 0?void 0:_currentRequire.cache)||__nested_webpack_require_5927__.c}var backup={};for(var _i=0,_Object$entries=Object.entries(cache);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],_module=_Object$entries$_i[1];backup[key]=_module;delete cache[key]}return backup};// Make preprocessed require function available at runtime.
var getCurrentRequire=/*#__PURE__*/function(){var _getCurrentRequire=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _yield$import,createRequire,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(!currentRequire){_context.n=1;break}return _context.a(2,currentRequire);case 1:_context.p=1;_context.n=2;return import(/* webpackIgnore: true */"node:module");case 2:_yield$import=_context.v;createRequire=_yield$import.createRequire;currentRequire=createRequire("file:///__w/react-input-material/react-input-material/node_modules/clientnode/dist/index.js");setOptionalRequire(currentRequire);return _context.a(2,currentRequire);case 3:_context.p=3;_t=_context.v;console.error(_t);return _context.a(2,null)}},_callee,null,[[1,3]])}));function getCurrentRequire(){return _getCurrentRequire.apply(this,arguments)}return getCurrentRequire}();var isImportSyntaxSupported=function isImportSyntaxSupported(){try{// eslint-disable-next-line @typescript-eslint/no-implied-eval
new Function("import(\"data:text/javascript,\")");return true}catch(_unused2){return false}};var isolatedRequire=function isolatedRequire(path,requireFunction){if(requireFunction===void 0){requireFunction=currentRequire||__nested_webpack_require_5927__(6)}var backup=clearRequireCache(requireFunction.cache);try{return requireFunction(path);// eslint-disable-next-line no-useless-catch
}catch(error){throw error}finally{restoreRequireCache(requireFunction.cache,backup)}};var optionalImport=/*#__PURE__*/function(){var _optionalImport=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id,options){var _t2,_t3;return _regenerator().w(function(_context2){while(1)switch(_context2.p=_context2.n){case 0:if(options===void 0){options={}}_context2.p=1;if(!isImportSyntaxSupported()){_context2.n=3;break}_context2.n=2;return import(/* webpackIgnore: true */id,options);case 2:_t2=_context2.v;_context2.n=5;break;case 3:_context2.n=4;return Promise.resolve(null);case 4:_t2=_context2.v;case 5:return _context2.a(2,_t2);case 6:_context2.p=6;_t3=_context2.v;_context2.n=7;return Promise.resolve(null);case 7:return _context2.a(2,_context2.v)}},_callee2,null,[[1,6]])}));function optionalImport(_x,_x2){return _optionalImport.apply(this,arguments)}return optionalImport}();var restoreRequireCache=function restoreRequireCache(cache,backup){if(cache===void 0){var _currentRequire2;cache=((_currentRequire2=currentRequire)===null||_currentRequire2===void 0?void 0:_currentRequire2.cache)||__nested_webpack_require_5927__.c}clearRequireCache();for(var _i2=0,_Object$entries2=Object.entries(backup);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),key=_Object$entries2$_i[0],_module2=_Object$entries2$_i[1];cache[key]=_module2}};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_15942__) {

__nested_webpack_require_15942__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_15942__.d(__nested_webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ _copy; },
/* harmony export */   Do: function() { return /* binding */ _represent; },
/* harmony export */   J3: function() { return /* binding */ evaluateDynamicData; },
/* harmony export */   Pi: function() { return /* binding */ _evaluateAsyncDynamicData; },
/* harmony export */   QB: function() { return /* binding */ _addDynamicGetterAndSetter; },
/* harmony export */   Sj: function() { return /* binding */ determineType; },
/* harmony export */   X$: function() { return /* binding */ _extend; },
/* harmony export */   _2: function() { return /* binding */ _modifyObject; },
/* harmony export */   aI: function() { return /* binding */ _equals; },
/* harmony export */   bo: function() { return /* binding */ getProxyHandler; },
/* harmony export */   dK: function() { return /* binding */ _mask; },
/* harmony export */   di: function() { return /* binding */ sort; },
/* harmony export */   dr: function() { return /* binding */ _convertSubstringInPlainObject; },
/* harmony export */   eQ: function() { return /* binding */ _convertPlainObjectToMap; },
/* harmony export */   iE: function() { return /* binding */ _removeKeysInEvaluation; },
/* harmony export */   oW: function() { return /* binding */ _convertMapToPlainObject; },
/* harmony export */   q1: function() { return /* binding */ _unwrapProxy; },
/* harmony export */   uu: function() { return /* binding */ _removeKeyPrefixes; },
/* harmony export */   zP: function() { return /* binding */ convertCircularObjectToJSON; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15942__(0);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_15942__(8);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_15942__(1);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_15942__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_15942__(9);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_15942__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module object *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};/**
 * Adds dynamic getter and setter to any given data structure such as maps.
 * @param object - Object to proxy.
 * @param getterWrapper - Function to wrap each property get.
 * @param setterWrapper - Function to wrap each property set.
 * @param methodNames - Method names to perform actions on the given
 * object.
 * @param deep - Indicates to perform a deep wrapping of specified types.
 * @param typesToExtend - Types which should be extended (Checks are
 * performed via "value instanceof type".).
 * @returns Returns given object wrapped with a dynamic getter proxy.
 */var _addDynamicGetterAndSetter=function addDynamicGetterAndSetter(object,getterWrapper,setterWrapper,methodNames,deep,typesToExtend){if(getterWrapper===void 0){getterWrapper=null}if(setterWrapper===void 0){setterWrapper=null}if(methodNames===void 0){methodNames={}}if(deep===void 0){deep=true}if(typesToExtend===void 0){typesToExtend=[Object]}if(deep&&_typeof(object)==="object")if(Array.isArray(object)){var index=0;var _iterator=_createForOfIteratorHelper(object),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var value=_step.value;object[index]=_addDynamicGetterAndSetter(value,getterWrapper,setterWrapper,methodNames,deep);index+=1}}catch(err){_iterator.e(err)}finally{_iterator.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator2=_createForOfIteratorHelper(object),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _step2$value=_slicedToArray(_step2.value,2),key=_step2$value[0],_value=_step2$value[1];object.set(key,_addDynamicGetterAndSetter(_value,getterWrapper,setterWrapper,methodNames,deep))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator3=_createForOfIteratorHelper(object),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _value3=_step3.value;object.delete(_value3);cache.push(_addDynamicGetterAndSetter(_value3,getterWrapper,setterWrapper,methodNames,deep))}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}for(var _i=0,_cache=cache;_i<_cache.length;_i++){var _value2=_cache[_i];object.add(_value2)}}else if(object!==null)for(var _i2=0,_Object$entries=Object.entries(object);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),_key=_Object$entries$_i[0],_value4=_Object$entries$_i[1];object[_key]=_addDynamicGetterAndSetter(_value4,getterWrapper,setterWrapper,methodNames,deep)}if(getterWrapper||setterWrapper){var _iterator4=_createForOfIteratorHelper(typesToExtend),_step4;try{var _loop=function _loop(){var type=_step4.value;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object)&&object instanceof type){var defaultHandler=getProxyHandler(object,methodNames);var handler=getProxyHandler(object,methodNames);if(getterWrapper)handler.get=function(_target,name){if(name==="__target__")return object;if(name==="__revoke__")return function(){revoke();return object};if(typeof object[name]==="function")return object[name];return getterWrapper(defaultHandler.get(proxy,name),name,object)};if(setterWrapper)handler.set=function(_target,name,value){return defaultHandler.set(proxy,name,setterWrapper(name,value,object))};var _Proxy$revocable=Proxy.revocable({},handler),proxy=_Proxy$revocable.proxy,revoke=_Proxy$revocable.revoke;return{v:proxy}}},_ret;for(_iterator4.s();!(_step4=_iterator4.n()).done;){_ret=_loop();if(_ret)return _ret.v}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}return object};/**
 * Converts given object into its serialized JSON representation by
 * replacing circular references with a given provided value.
 *
 * This method traverses given object recursively and tracks of seen and
 * already serialized structures to reuse generated strings or mark a
 * circular reference.
 * @param object - Object to serialize.
 * @param determineCircularReferenceValue - Callback to create a fallback
 * value depending on given redundant value.
 * @param numberOfSpaces - Number of spaces to use for string formatting.
 * @returns The formatted JSON string.
 */var convertCircularObjectToJSON=function convertCircularObjectToJSON(object,determineCircularReferenceValue,numberOfSpaces){if(determineCircularReferenceValue===void 0){determineCircularReferenceValue=function determineCircularReferenceValue(serializedValue){return serializedValue!==null&&serializedValue!==void 0?serializedValue:"__circularReference__"}}if(numberOfSpaces===void 0){numberOfSpaces=0}var seenObjects=new Map;var stringifier=function stringifier(object){var _replacer=function replacer(key,value){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(value)){var _seenObjects$get;if(seenObjects.has(value))return determineCircularReferenceValue((_seenObjects$get=seenObjects.get(value))!==null&&_seenObjects$get!==void 0?_seenObjects$get:null,key,value,seenObjects);// NOTE: Set before traversing deeper to detect cycles.
seenObjects.set(value,null);var result;if(Array.isArray(value)){result=[];var _iterator5=_createForOfIteratorHelper(value),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var item=_step5.value;result.push(_replacer(null,item))}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}else{result={};for(var _i3=0,_Object$entries2=Object.entries(value);_i3<_Object$entries2.length;_i3++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i3],2),name=_Object$entries2$_i[0],subValue=_Object$entries2$_i[1];result[name]=_replacer(name,subValue)}}seenObjects.set(value,result);return result}return value};return JSON.stringify(object,_replacer,numberOfSpaces)};return stringifier(object)};/**
 * Converts given map and all nested found maps objects to corresponding
 * object.
 * @param object - Map to convert to.
 * @param deep - Indicates whether to perform a recursive conversion.
 * @returns Given map as object.
 */var _convertMapToPlainObject=function convertMapToPlainObject(object,deep){if(deep===void 0){deep=true}if(_typeof(object)==="object"){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var newObject={};var _iterator6=_createForOfIteratorHelper(object),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _step6$value=_slicedToArray(_step6.value,2),key=_step6$value[0],value=_step6$value[1];if(deep)value=_convertMapToPlainObject(value,deep);if(["number","string"].includes(_typeof(key)))newObject[String(key)]=value}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return newObject}if(deep)if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(object))for(var _i4=0,_Object$entries3=Object.entries(object);_i4<_Object$entries3.length;_i4++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i4],2),_key2=_Object$entries3$_i[0],_value5=_Object$entries3$_i[1];object[_key2]=_convertMapToPlainObject(_value5,deep)}else if(Array.isArray(object)){var index=0;for(var _i5=0,_arr=object;_i5<_arr.length;_i5++){var _value6=_arr[_i5];object[index]=_convertMapToPlainObject(_value6,deep);index+=1}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator7=_createForOfIteratorHelper(object),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var _value8=_step7.value;object.delete(_value8);cache.push(_convertMapToPlainObject(_value8,deep))}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}for(var _i6=0,_cache2=cache;_i6<_cache2.length;_i6++){var _value7=_cache2[_i6];object.add(_value7)}}}return object};/**
 * Converts given plain object and all nested found objects to
 * corresponding map.
 * @param object - Object to convert to.
 * @param deep - Indicates whether to perform a recursive conversion.
 * @returns Given object as map.
 */var _convertPlainObjectToMap=function convertPlainObjectToMap(object,deep){if(deep===void 0){deep=true}if(_typeof(object)==="object"){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(object)){var newObject=new Map;for(var _i7=0,_Object$entries4=Object.entries(object);_i7<_Object$entries4.length;_i7++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i7],2),key=_Object$entries4$_i[0],value=_Object$entries4$_i[1];if(deep)object[key]=_convertPlainObjectToMap(value,deep);newObject.set(key,object[key])}return newObject}if(deep)if(Array.isArray(object)){var index=0;for(var _i8=0,_arr2=object;_i8<_arr2.length;_i8++){var _value9=_arr2[_i8];object[index]=_convertPlainObjectToMap(_value9,deep);index+=1}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator8=_createForOfIteratorHelper(object),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var _step8$value=_slicedToArray(_step8.value,2),_key3=_step8$value[0],_value0=_step8$value[1];object.set(_key3,_convertPlainObjectToMap(_value0,deep))}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator9=_createForOfIteratorHelper(object),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var _value10=_step9.value;object.delete(_value10);cache.push(_convertPlainObjectToMap(_value10,deep))}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}for(var _i9=0,_cache3=cache;_i9<_cache3.length;_i9++){var _value1=_cache3[_i9];object.add(_value1)}}}return object};/**
 * Replaces given pattern in each value in given object recursively with
 * given string replacement.
 * @param object - Object to convert substrings in.
 * @param pattern - Regular expression to replace.
 * @param replacement - String to use as replacement for found patterns.
 * @returns Converted object with replaced patterns.
 */var _convertSubstringInPlainObject=function convertSubstringInPlainObject(object,pattern,replacement){for(var _i0=0,_Object$entries5=Object.entries(object);_i0<_Object$entries5.length;_i0++){var _Object$entries5$_i=_slicedToArray(_Object$entries5[_i0],2),key=_Object$entries5$_i[0],value=_Object$entries5$_i[1];if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value))object[key]=_convertSubstringInPlainObject(value,pattern,replacement);else if(typeof value==="string")object[key]=value.replace(pattern,replacement)}return object};/* eslint-disable jsdoc/require-description-complete-sentence *//**
 * Copies given object (of any type) into optionally given destination.
 * @param source - Object to copy.
 * @param copyBlobs - Determines whether to copy blobs as well.
 * @param recursionLimit - Specifies how deep we should traverse into given
 * object recursively.
 * @param recursionEndValue - Indicates which value to use for recursion ends.
 * Usually a reference to corresponding source value will be used.
 * @param destination - Target to copy source to.
 * @param cyclic - Indicates whether known sub structures should be copied or
 * referenced (if "true" endless loops can occur if source has cyclic
 * structures).
 * @param knownReferences - Used to avoid traversing loops and not to copy
 * references e.g. to objects not to copy (e.g. symbol polyfills).
 * @param recursionLevel - Internally used to track current recursion level in
 * given source data structure.
 * @returns Value "true" if both objects are equal and "false" otherwise.
 */var _copy=function copy(source,copyBlobs,recursionLimit,recursionEndValue,destination,cyclic,knownReferences,recursionLevel){if(copyBlobs===void 0){copyBlobs=false}if(recursionLimit===void 0){recursionLimit=-1}if(recursionEndValue===void 0){recursionEndValue=_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .VALUE_COPY_SYMBOL */ .Fp}if(destination===void 0){destination=null}if(cyclic===void 0){cyclic=false}if(knownReferences===void 0){knownReferences=[]}if(recursionLevel===void 0){recursionLevel=0}/* eslint-enable jsdoc/require-description-complete-sentence */if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source))if(destination){if(source===destination)throw new Error("Can't copy because source and destination are "+"identical.");if(!cyclic&&![undefined,null].includes(source)){var index=knownReferences.indexOf(source);if(index!==-1)return knownReferences[index];knownReferences.push(source)}var copyValue=function copyValue(value){if(recursionLimit!==-1&&recursionLimit<recursionLevel+1)return recursionEndValue===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .VALUE_COPY_SYMBOL */ .Fp?value:recursionEndValue;var result=_copy(value,copyBlobs,recursionLimit,recursionEndValue,null,cyclic,knownReferences,recursionLevel+1);if(!cyclic&&![undefined,null].includes(value)&&_typeof(value)==="object")knownReferences.push(value);return result};if(Array.isArray(source)){var _iterator0=_createForOfIteratorHelper(source),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var item=_step0.value;destination.push(copyValue(item))}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}}else if(source instanceof Map){var _iterator1=_createForOfIteratorHelper(source),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var _step1$value=_slicedToArray(_step1.value,2),key=_step1$value[0],value=_step1$value[1];destination.set(key,copyValue(value))}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}}else if(source instanceof Set){var _iterator10=_createForOfIteratorHelper(source),_step10;try{for(_iterator10.s();!(_step10=_iterator10.n()).done;){var _value11=_step10.value;destination.add(copyValue(_value11))}}catch(err){_iterator10.e(err)}finally{_iterator10.f()}}else for(var _i1=0,_Object$entries6=Object.entries(source);_i1<_Object$entries6.length;_i1++){var _Object$entries6$_i=_slicedToArray(_Object$entries6[_i1],2),_key4=_Object$entries6$_i[0],_value12=_Object$entries6$_i[1];try{destination[_key4]=copyValue(_value12)}catch(error){throw new Error("Failed to copy property value object \""+"".concat(_key4,"\": ").concat(_represent(error)),{cause:error})}}}else{if(Array.isArray(source))return _copy(source,copyBlobs,recursionLimit,recursionEndValue,[],cyclic,knownReferences,recursionLevel);if(source instanceof Map)return _copy(source,copyBlobs,recursionLimit,recursionEndValue,new Map,cyclic,knownReferences,recursionLevel);if(source instanceof Set)return _copy(source,copyBlobs,recursionLimit,recursionEndValue,new Set,cyclic,knownReferences,recursionLevel);if(source instanceof Date)return new Date(source.getTime());if(source instanceof RegExp){var modifier=/[^/]*$/.exec(source.toString());destination=new RegExp(source.source,modifier?modifier[0]:undefined);destination.lastIndex=source.lastIndex;return destination}if(typeof Blob!=="undefined"&&source instanceof Blob)return copyBlobs?source.slice(0,source.size,source.type):source;return _copy(source,copyBlobs,recursionLimit,recursionEndValue,{},cyclic,knownReferences,recursionLevel)}return destination||source};/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param value - Value to analyze.
 * @returns Name of determined type.
 */var determineType=function determineType(value){if([null,undefined].includes(value))return String(value);var type=_typeof(value);if(["function","object"].includes(type)&&"toString"in value){var stringRepresentation=Object.prototype.toString.call(value);if(Object.prototype.hasOwnProperty.call(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_TO_TYPE_MAPPING */ .rq,stringRepresentation))return _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_TO_TYPE_MAPPING */ .rq[stringRepresentation]}return type};/**
 * Returns true if given items are equal for given property list. If
 * property list isn't set all properties will be checked. All keys which
 * starts with one of the exception prefixes will be omitted.
 * @param firstValue - First object to compare.
 * @param secondValue - Second object to compare.
 * @param givenOptions - Options to define how to compare.
 * @param givenOptions.properties - Property names to check. Check all if
 * "null" is selected (default).
 * @param givenOptions.deep - Recursion depth negative values means
 * infinitely deep (default).
 * @param givenOptions.exceptionPrefixes - Property prefixes which
 * indicates properties to ignore.
 * @param givenOptions.ignoreFunctions - Indicates whether functions have
 * to be identical to interpret is as equal. If set to "true" two functions
 * will be assumed to be equal (default).
 * @param givenOptions.compareBlobs - Indicates whether binary data should
 * be converted to a base64 string to compare their content. Makes this
 * function asynchronous in browsers and potentially takes a lot of
 * resources.
 * @returns Value "true" if both objects are equal and "false" otherwise.
 * If "compareBlobs" is activated, and we're running in a browser like
 * environment and binary data is given, then a promise wrapping the
 * determined boolean values is returned.
 */var _equals=function equals(firstValue,secondValue,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({compareBlobs:false,deep:-1,exceptionPrefixes:[],ignoreFunctions:true,properties:null,returnReasonIfNotEqual:false},givenOptions);if(options.ignoreFunctions&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(firstValue)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(secondValue)||firstValue===secondValue||(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .isNotANumber */ .W2)(firstValue)&&(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .isNotANumber */ .W2)(secondValue)||firstValue instanceof RegExp&&secondValue instanceof RegExp&&firstValue.toString()===secondValue.toString()&&firstValue.flags.split("").sort().join("")===secondValue.flags.split("").sort().join("")||firstValue instanceof Date&&secondValue instanceof Date&&(isNaN(firstValue.getTime())&&isNaN(secondValue.getTime())||!isNaN(firstValue.getTime())&&!isNaN(secondValue.getTime())&&firstValue.getTime()===secondValue.getTime())||options.compareBlobs&&eval("typeof Buffer")!=="undefined"&&Object.prototype.hasOwnProperty.call(eval("Buffer"),"isBuffer")&&firstValue instanceof eval("Buffer")&&secondValue instanceof eval("Buffer")&&firstValue.toString("base64")===secondValue.toString("base64"))return true;if(options.compareBlobs&&typeof Blob!=="undefined"&&firstValue instanceof Blob&&secondValue instanceof Blob)return new Promise(function(resolve){var values=[];for(var _i10=0,_arr3=[firstValue,secondValue];_i10<_arr3.length;_i10++){var value=_arr3[_i10];var fileReader=new FileReader;fileReader.onload=function(event){if(event.target===null)values.push(null);else values.push(event.target.result);if(values.length===2)if(values[0]===values[1])resolve(true);else resolve(options.returnReasonIfNotEqual?">>> Blob(".concat(_represent(values[0]),")  !== ")+"Blob(".concat(_represent(values[1]),")"):false)};fileReader.readAsDataURL(value)}});if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(firstValue)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(secondValue)&&!(firstValue instanceof RegExp||secondValue instanceof RegExp)||Array.isArray(firstValue)&&Array.isArray(secondValue)&&firstValue.length===secondValue.length||determineType(firstValue)===determineType(secondValue)&&["map","set"].includes(determineType(firstValue))&&firstValue.size===secondValue.size){var promises=[];for(var _i11=0,_arr4=[[firstValue,secondValue],[secondValue,firstValue]];_i11<_arr4.length;_i11++){var _arr4$_i=_slicedToArray(_arr4[_i11],2),first=_arr4$_i[0],second=_arr4$_i[1];var firstIsArray=Array.isArray(first);if(firstIsArray&&(!Array.isArray(second)||first.length!==second.length))return options.returnReasonIfNotEqual?".length":false;var firstIsMap=(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(first);if(firstIsMap&&(!(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(second)||first.size!==second.size))return options.returnReasonIfNotEqual?".size":false;var firstIsSet=(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(first);if(firstIsSet&&(!(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(second)||first.size!==second.size))return options.returnReasonIfNotEqual?".size":false;if(firstIsArray){var index=0;var _loop2=function _loop2(){var value=_arr5[_i12];if(options.deep!==0){var result=_equals(value,second[index],_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var currentIndex=index;var determineResult=function determineResult(result){var _$$result$;return typeof result==="string"?"[".concat(String(currentIndex),"]")+((_$$result$={"[":"",">":" "}[result[0]])!==null&&_$$result$!==void 0?_$$result$:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}index+=1},_ret2;for(var _i12=0,_arr5=first;_i12<_arr5.length;_i12++){_ret2=_loop2();if(_ret2)return _ret2.v}}else if(firstIsMap){var _iterator11=_createForOfIteratorHelper(first),_step11;try{var _loop3=function _loop3(){var _step11$value=_slicedToArray(_step11.value,2),key=_step11$value[0],value=_step11$value[1];if(options.deep!==0){var result=_equals(value,second.get(key),_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var determineResult=function determineResult(result){var _$$result$2;return typeof result==="string"?"get(".concat(_represent(key),")")+((_$$result$2={"[":"",">":" "}[result[0]])!==null&&_$$result$2!==void 0?_$$result$2:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}},_ret3;for(_iterator11.s();!(_step11=_iterator11.n()).done;){_ret3=_loop3();if(_ret3)return _ret3.v}}catch(err){_iterator11.e(err)}finally{_iterator11.f()}}else if(firstIsSet){var _iterator12=_createForOfIteratorHelper(first),_step12;try{var _loop4=function _loop4(){var value=_step12.value;if(options.deep!==0){var equal=false;var subPromises=[];/*
                            NOTE: Check if their exists at least one being
                            equally.
                        */var _iterator13=_createForOfIteratorHelper(second),_step13;try{for(_iterator13.s();!(_step13=_iterator13.n()).done;){var _secondValue=_step13.value;var result=_equals(value,_secondValue,_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(typeof result==="boolean"){if(result){equal=true;break}}else subPromises.push(result)}}catch(err){_iterator13.e(err)}finally{_iterator13.f()}var determineResult=function determineResult(equal){return equal?true:options.returnReasonIfNotEqual?">>> {-> ".concat(_represent(value)," not found}"):false};if(equal)/*
                                NOTE: We do not have to wait for promises to be
                                resolved when one match could be found.
                            */return 0;// continue
if(subPromises.length)promises.push(new Promise(function(resolve){Promise.all(subPromises).then(function(results){resolve(determineResult(results.some(function(result){return result})))},function(){// Do nothing.
})}));return{v:determineResult(false)}}},_ret4;for(_iterator12.s();!(_step12=_iterator12.n()).done;){_ret4=_loop4();if(_ret4===0)continue;if(_ret4)return _ret4.v}}catch(err){_iterator12.e(err)}finally{_iterator12.f()}}else{var _loop5=function _loop5(){var _Object$entries7$_i=_slicedToArray(_Object$entries7[_i13],2),key=_Object$entries7$_i[0],value=_Object$entries7$_i[1];if(options.properties&&!options.properties.includes(key))return 0;// break
var doBreak=false;var _iterator14=_createForOfIteratorHelper(options.exceptionPrefixes),_step14;try{for(_iterator14.s();!(_step14=_iterator14.n()).done;){var exceptionPrefix=_step14.value;if(key.startsWith(exceptionPrefix)){doBreak=true;break}}}catch(err){_iterator14.e(err)}finally{_iterator14.f()}if(doBreak)return 0;// break
if(options.deep!==0){var result=_equals(value,second[key],_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var determineResult=function determineResult(result){var _$$result$3;return typeof result==="string"?key+((_$$result$3={"[":"",">":" "}[result[0]])!==null&&_$$result$3!==void 0?_$$result$3:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}},_ret5;for(var _i13=0,_Object$entries7=Object.entries(first);_i13<_Object$entries7.length;_i13++){_ret5=_loop5();if(_ret5===0)break;if(_ret5)return _ret5.v}}}if(promises.length)return new Promise(function(resolve){Promise.all(promises).then(function(results){var _iterator15=_createForOfIteratorHelper(results),_step15;try{for(_iterator15.s();!(_step15=_iterator15.n()).done;){var result=_step15.value;if(!result||typeof result==="string"){resolve(result);break}}}catch(err){_iterator15.e(err)}finally{_iterator15.f()}resolve(true)},function(){// Do nothing.
})});return true}return options.returnReasonIfNotEqual?">>> ".concat(_represent(firstValue)," !== ").concat(_represent(secondValue)):false};/**
 * Searches for indicating keys and replaces that data with corresponding
 * evaluated and promise resolved value.
 * @param data - Given mapping to resolve.
 * @param givenOptions - Options to configure evaluation.
 * @param givenOptions.scope - Scope to use evaluate again.
 * @param givenOptions.selfReferenceName - Name to use for reference to given
 * object.
 * @param givenOptions.expressionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @param givenOptions.executionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @returns Evaluated given mapping.
 */var _evaluateAsyncDynamicData=/*#__PURE__*/function(){var _evaluateAsyncDynamicData2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data,givenOptions){var options,result,index,_iterator16,_step16,item,_i14,_Object$entries8,_Object$entries8$_i,key,value,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(givenOptions===void 0){givenOptions={}}options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__async_evaluate__",executionIndicatorKey:"__async_execute__"},givenOptions);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){_context.n=1;break}return _context.a(2,data);case 1:if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=data;result=data;if(!Array.isArray(data)){_context.n=10;break}index=0;_iterator16=_createForOfIteratorHelper(data);_context.p=2;_iterator16.s();case 3:if((_step16=_iterator16.n()).done){_context.n=6;break}item=_step16.value;_context.n=4;return _evaluateAsyncDynamicData(item,options);case 4:result[index]=_context.v;index+=1;case 5:_context.n=3;break;case 6:_context.n=8;break;case 7:_context.p=7;_t=_context.v;_iterator16.e(_t);case 8:_context.p=8;_iterator16.f();return _context.f(8);case 9:return _context.a(2,result);case 10:_i14=0,_Object$entries8=Object.entries(data);case 11:if(!(_i14<_Object$entries8.length)){_context.n=16;break}_Object$entries8$_i=_slicedToArray(_Object$entries8[_i14],2),key=_Object$entries8$_i[0],value=_Object$entries8$_i[1];if(![options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){_context.n=13;break}_context.n=12;return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(value,{scope:options.scope,async:true,execute:key===options.executionIndicatorKey});case 12:return _context.a(2,_context.v);case 13:_context.n=14;return _evaluateAsyncDynamicData(value,options);case 14:result[key]=_context.v;case 15:_i14++;_context.n=11;break;case 16:return _context.a(2,result)}},_callee,null,[[2,7,8,9]])}));function evaluateAsyncDynamicData(_x,_x2){return _evaluateAsyncDynamicData2.apply(this,arguments)}return evaluateAsyncDynamicData}();/**
 * Wraps given data structure into proxies recursively to evaluate and resolve
 * each get request to data having an object with indicating keys and replaces
 * that object with corresponding evaluated values. All nested objects are
 * wrapped with a proxy to resolve chains of referencing expressions as well.
 * @param object - Given mapping to resolve.
 * @param givenOptions - Options to configure evaluation.
 * @param givenOptions.scope - Scope to use evaluate again.
 * @param givenOptions.selfReferenceName - Name to use for reference to given
 * object.
 * @param givenOptions.expressionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @param givenOptions.executionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @returns Evaluated given mapping.
 */var evaluateDynamicData=function evaluateDynamicData(object,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__evaluate__",executionIndicatorKey:"__execute__"},givenOptions);if(_typeof(object)!=="object"||object===null)return object;if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=object;var internalEvaluateAndThrowError=function internalEvaluateAndThrowError(code,type){if(type===void 0){type=options.expressionIndicatorKey}return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(code,{scope:options.scope,async:false,execute:type===options.executionIndicatorKey})};var _addProxyRecursively=function addProxyRecursively(data){if(_typeof(data)!=="object"||data===null||typeof Proxy==="undefined")return data;for(var _i15=0,_Object$entries9=Object.entries(data);_i15<_Object$entries9.length;_i15++){var _Object$entries9$_i=_slicedToArray(_Object$entries9[_i15],2),key=_Object$entries9$_i[0],givenValue=_Object$entries9$_i[1];if(key!=="__target__"&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(givenValue)){var value=givenValue;_addProxyRecursively(value);// NOTE: We only wrap needed objects for performance reasons.
if(Object.prototype.hasOwnProperty.call(value,options.expressionIndicatorKey)||Object.prototype.hasOwnProperty.call(value,options.executionIndicatorKey)){var backup=value;data[key]=new Proxy(value,{get:function get(target,key){if(key==="__target__")return target;if(key==="hasOwnProperty")/*
                                        eslint-disable
                                        @typescript-eslint/unbound-method
                                    */return target[key];/*
                                        eslint-enable
                                        @typescript-eslint/unbound-method
                                    *//*
                                    NOTE: Very complicated section, do only
                                    changes while having good tests.
                                */for(var _i16=0,_arr6=[options.expressionIndicatorKey,options.executionIndicatorKey];_i16<_arr6.length;_i16++){var type=_arr6[_i16];if(key===type&&typeof target[key]==="string")return _resolve(internalEvaluateAndThrowError(target[key],type))}var resolvedTarget=_resolve(target);if(key==="toString"){var result=internalEvaluateAndThrowError(resolvedTarget);return result[key].bind(result)}if(typeof key!=="string"){var _result$key;var _result=internalEvaluateAndThrowError(resolvedTarget);if((_result$key=_result[key])!==null&&_result$key!==void 0&&_result$key.bind)return _result[key].bind(_result);return _result[key]}for(var _i17=0,_arr7=[options.expressionIndicatorKey,options.executionIndicatorKey];_i17<_arr7.length;_i17++){var _type=_arr7[_i17];if(Object.prototype.hasOwnProperty.call(target,_type)){var _result2=internalEvaluateAndThrowError(target[_type],_type);/*
                                            NOTE: Resolving the whole
                                            evaluated result could re-enter
                                            the currently running evaluation
                                            (cyclic references between
                                            dynamic values) so only the
                                            accessed value gets resolved.
                                        */var _value13=_resolve(_result2[key]);if(_value13!==null&&_value13!==void 0&&_value13.bind)return _value13.bind(_result2);return _value13}}return resolvedTarget[key];// End of complicated stuff.
},ownKeys:function ownKeys(target){for(var _i18=0,_arr8=[options.expressionIndicatorKey,options.executionIndicatorKey];_i18<_arr8.length;_i18++){var type=_arr8[_i18];if(Object.prototype.hasOwnProperty.call(target,type))return Object.getOwnPropertyNames(_resolve(internalEvaluateAndThrowError(target[type],type)))}return Object.getOwnPropertyNames(target)}});/*
                        NOTE: Known proxy polyfills does not provide the
                        "__target__" api.
                    */if(!data[key].__target__)data[key].__target__=backup}}}return data};var _resolve=function resolve(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isProxy */ .ju)(data)){// NOTE: We have to skip "ownKeys" proxy trap here.
for(var _i19=0,_arr9=[options.expressionIndicatorKey,options.executionIndicatorKey];_i19<_arr9.length;_i19++){var type=_arr9[_i19];if(Object.prototype.hasOwnProperty.call(data,type))return data[type]}data=data.__target__}for(var _i20=0,_Object$entries0=Object.entries(data);_i20<_Object$entries0.length;_i20++){var _Object$entries0$_i=_slicedToArray(_Object$entries0[_i20],2),key=_Object$entries0$_i[0],value=_Object$entries0$_i[1];if([options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){if(typeof Proxy==="undefined")return _resolve(internalEvaluateAndThrowError(value));return value}data[key]=_resolve(value)}}return data};options.scope.resolve=_resolve;var _removeProxyRecursively=function removeProxyRecursively(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data))for(var _i21=0,_Object$entries1=Object.entries(data);_i21<_Object$entries1.length;_i21++){var _Object$entries1$_i=_slicedToArray(_Object$entries1[_i21],2),key=_Object$entries1$_i[0],value=_Object$entries1$_i[1];if(key!=="__target__"&&value!==null&&["function","undefined"].includes(_typeof(value))){var target=value.__target__;if(typeof target!=="undefined")data[key]=target;_removeProxyRecursively(value)}}return data};if(Object.prototype.hasOwnProperty.call(object,options.expressionIndicatorKey))return internalEvaluateAndThrowError(object[options.expressionIndicatorKey]);else if(Object.prototype.hasOwnProperty.call(object,options.executionIndicatorKey))return internalEvaluateAndThrowError(object[options.executionIndicatorKey],options.executionIndicatorKey);return _removeProxyRecursively(_resolve(_addProxyRecursively(object)))};/**
 * Removes properties in objects where a dynamic indicator lives.
 * @param data - Object to traverse recursively.
 * @param expressionIndicators - Property key to remove.
 * @returns Given object with removed properties.
 */var _removeKeysInEvaluation=function removeKeysInEvaluation(data,expressionIndicators){if(expressionIndicators===void 0){expressionIndicators=["__evaluate__","__execute__"]}for(var _i22=0,_Object$entries10=Object.entries(data);_i22<_Object$entries10.length;_i22++){var _Object$entries10$_i=_slicedToArray(_Object$entries10[_i22],2),key=_Object$entries10$_i[0],value=_Object$entries10$_i[1];if(!expressionIndicators.includes(key)&&expressionIndicators.some(function(name){return Object.prototype.hasOwnProperty.call(data,name)}))delete data[key];else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value))_removeKeysInEvaluation(value,expressionIndicators)}return data};/**
 * Extends given target object with given sources object. As target and
 * sources many expandable types are allowed but target and sources have to
 * come from the same type.
 * @param targetOrDeepIndicator - Maybe the target or deep indicator.
 * @param targetOrSource - Target or source object; depending on first
 * argument.
 * @param additionalSources - Source objects to extend into target.
 * @returns Returns given target extended with all given sources.
 */var _extend=function extend(targetOrDeepIndicator,targetOrSource){var deep=false;for(var _len=arguments.length,additionalSources=new Array(_len>2?_len-2:0),_key5=2;_key5<_len;_key5++){additionalSources[_key5-2]=arguments[_key5]}var sources=additionalSources;var target;if(targetOrDeepIndicator===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .IGNORE_NULL_AND_UNDEFINED_SYMBOL */ .p_||typeof targetOrDeepIndicator==="boolean"){// Handle a deep copy situation and skip deep indicator and target.
deep=targetOrDeepIndicator;target=targetOrSource}else{target=targetOrDeepIndicator;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(targetOrSource))sources=[targetOrSource].concat(_toConsumableArray(sources));else if(targetOrSource!==undefined)target=targetOrSource}var mergeValue=function mergeValue(targetValue,value){if(value===targetValue)return targetValue;// Traverse recursively if we're merging plain objects or maps.
if(deep&&value&&((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value)||(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(value))){var clone;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(value))clone=targetValue&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(targetValue)?targetValue:new Map;else clone=targetValue&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(targetValue)?targetValue:{};return _extend(deep,clone,value)}return value};var _iterator17=_createForOfIteratorHelper(sources),_step17;try{for(_iterator17.s();!(_step17=_iterator17.n()).done;){var source=_step17.value;var targetType=_typeof(target);var sourceType=_typeof(source);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target))targetType+=" Map";if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source))sourceType+=" Map";if(targetType===sourceType&&target!==source){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source)){var _iterator18=_createForOfIteratorHelper(source),_step18;try{for(_iterator18.s();!(_step18=_iterator18.n()).done;){var _step18$value=_slicedToArray(_step18.value,2),key=_step18$value[0],value=_step18$value[1];target.set(key,mergeValue(target.get(key),value))}}catch(err){_iterator18.e(err)}finally{_iterator18.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target)&&!Array.isArray(target)&&!(typeof Blob!=="undefined"&&target instanceof Blob)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source)&&!Array.isArray(source)&&!(typeof Blob!=="undefined"&&source instanceof Blob)){for(var _i23=0,_Object$entries11=Object.entries(source);_i23<_Object$entries11.length;_i23++){var _Object$entries11$_i=_slicedToArray(_Object$entries11[_i23],2),_key6=_Object$entries11$_i[0],_value14=_Object$entries11$_i[1];if(!(deep===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .IGNORE_NULL_AND_UNDEFINED_SYMBOL */ .p_&&[null,undefined].includes(_value14)))target[_key6]=mergeValue(target[_key6],_value14)}}else target=source;}else target=source}}catch(err){_iterator17.e(err)}finally{_iterator17.f()}return target};/**
 * Generates a proxy handler which forwards all operations to given object
 * as there wouldn't be a proxy.
 * @param target - Object to proxy.
 * @param methodNames - Mapping of operand name to object specific method
 * name.
 * @returns Determined proxy handler.
 */var getProxyHandler=function getProxyHandler(target,methodNames){if(methodNames===void 0){methodNames={}}methodNames=_objectSpread({delete:"[]",get:"[]",has:"[]",set:"[]"},methodNames);return{deleteProperty:function deleteProperty(_targetObject,key){if(methodNames.delete==="[]"&&typeof key==="string")delete target[key];else return target[methodNames.delete](key);return true},get:function get(_targetObject,key){if(methodNames.get==="[]"&&typeof key==="string")return target[key];return target[methodNames.get](key)},has:function has(_targetObject,key){if(methodNames.has==="[]")return key in target;return target[methodNames.has](key)},set:function set(_targetObject,key,value){if(methodNames.set==="[]"&&typeof key==="string")target[key]=value;else return target[methodNames.set](key,value);return true}}};/**
 * Slices all properties from given object which does not match provided
 * object mask. Items can be explicitly whitelisted via "include" mask
 * configuration or black listed via "exclude" mask configuration.
 * @param object - Object to slice.
 * @param maskConfiguration - Mask configuration.
 * @returns Given but sliced object. If (nested) object will be modified a
 * flat copy of that object will be returned.
 */var _mask=function mask(object,maskConfiguration){maskConfiguration=_objectSpread({exclude:false,include:true},maskConfiguration);if(maskConfiguration.exclude===true||Array.isArray(maskConfiguration.exclude)&&maskConfiguration.exclude.length===0||maskConfiguration.include===false||_typeof(object)!=="object")return{};var exclude=Array.isArray(maskConfiguration.exclude)?maskConfiguration.exclude.reduce(function(mask,key){return _objectSpread(_objectSpread({},mask),{},_defineProperty({},key,true))},{}):maskConfiguration.exclude;var include=Array.isArray(maskConfiguration.include)?maskConfiguration.include.reduce(function(mask,key){return _objectSpread(_objectSpread({},mask),{},_defineProperty({},key,true))},{}):maskConfiguration.include;var result={};if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(include)){for(var _i24=0,_Object$entries12=Object.entries(include);_i24<_Object$entries12.length;_i24++){var _Object$entries12$_i=_slicedToArray(_Object$entries12[_i24],2),key=_Object$entries12$_i[0],value=_Object$entries12$_i[1];if(Object.prototype.hasOwnProperty.call(object,key))if(value===true)result[key]=object[key];else if(((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value)||Array.isArray(value)&&value.length)&&_typeof(object[key])==="object")result[key]=_mask(object[key],{include:value})}}else// In this branch "mask.include === true" holds.
result=object;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(exclude)){var useCopy=false;var copy=_objectSpread({},result);for(var _i25=0,_Object$entries13=Object.entries(exclude);_i25<_Object$entries13.length;_i25++){var _Object$entries13$_i=_slicedToArray(_Object$entries13[_i25],2),_key7=_Object$entries13$_i[0],_value15=_Object$entries13$_i[1];if(Object.prototype.hasOwnProperty.call(copy,_key7))if(_value15===true){useCopy=true;delete copy[_key7]}else if(((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(_value15)||Array.isArray(_value15)&&_value15.length)&&_typeof(copy[_key7])==="object"){var current=copy[_key7];copy[_key7]=_mask(copy[_key7],{exclude:_value15});if(copy[_key7]!==current)useCopy=true}}if(useCopy)result=copy}return result};/**
 * Modifies given target corresponding to given source and removes source
 * modification infos.
 * @param target - Object to modify.
 * @param source - Source object to load modifications from.
 * @param removeIndicatorKey - Indicator property name or value to mark a
 * value to remove from object or list.
 * @param prependIndicatorKey - Indicator property name to mark a value to
 * prepend to target list.
 * @param appendIndicatorKey - Indicator property name to mark a value to
 * append to target list.
 * @param positionPrefix - Indicates a prefix to use a value on given
 * position to add or remove.
 * @param positionSuffix - Indicates a suffix to use a value on given
 * position to add or remove.
 * @param parentSource - Source context to remove modification info from
 * (usually only needed internally).
 * @param parentKey - Source key in given source context to remove
 * modification info from (usually only needed internally).
 * @returns Given target modified with given source.
 */var _modifyObject=function modifyObject(target,source,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,parentSource,parentKey){if(removeIndicatorKey===void 0){removeIndicatorKey="__remove__"}if(prependIndicatorKey===void 0){prependIndicatorKey="__prepend__"}if(appendIndicatorKey===void 0){appendIndicatorKey="__append__"}if(positionPrefix===void 0){positionPrefix="__"}if(positionSuffix===void 0){positionSuffix="__"}if(parentSource===void 0){parentSource=null}if(parentKey===void 0){parentKey=null}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target)){var _iterator19=_createForOfIteratorHelper(source),_step19;try{for(_iterator19.s();!(_step19=_iterator19.n()).done;){var _step19$value=_slicedToArray(_step19.value,2),key=_step19$value[0],value=_step19$value[1];if(target.has(key))_modifyObject(target.get(key),value,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,key)}}catch(err){_iterator19.e(err)}finally{_iterator19.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target))for(var _i26=0,_Object$entries14=Object.entries(source);_i26<_Object$entries14.length;_i26++){var _Object$entries14$_i=_slicedToArray(_Object$entries14[_i26],2),_key8=_Object$entries14$_i[0],sourceValue=_Object$entries14$_i[1];var index=NaN;if(Array.isArray(target)&&_key8.startsWith(positionPrefix)&&_key8.endsWith(positionSuffix)){index=parseInt(_key8.substring(positionPrefix.length,_key8.length-positionSuffix.length),10);if(index<0||index>=target.length)index=NaN}if([removeIndicatorKey,prependIndicatorKey,appendIndicatorKey].includes(_key8)||!isNaN(index)){if(Array.isArray(target)){if(_key8===removeIndicatorKey){var values=[].concat(sourceValue);var _iterator20=_createForOfIteratorHelper(values),_step20;try{for(_iterator20.s();!(_step20=_iterator20.n()).done;){var _value16=_step20.value;if(typeof _value16==="string"&&_value16.startsWith(positionPrefix)&&_value16.endsWith(positionSuffix))target.splice(parseInt(_value16.substring(positionPrefix.length,_value16.length-positionSuffix.length),10),1);else if(target.includes(_value16))target.splice(target.indexOf(_value16),1);else if(typeof _value16==="number"&&_value16<target.length)target.splice(_value16,1)}}catch(err){_iterator20.e(err)}finally{_iterator20.f()}}else if(_key8===appendIndicatorKey)target=target.concat(sourceValue);else if(_key8===prependIndicatorKey)target=[].concat(sourceValue).concat(target);else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target[index])&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(sourceValue))_extend(true,_modifyObject(target[index],sourceValue,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix),target[index],sourceValue);else target[index]=sourceValue;}else if(_key8===removeIndicatorKey){var _iterator21=_createForOfIteratorHelper([].concat(sourceValue)),_step21;try{for(_iterator21.s();!(_step21=_iterator21.n()).done;){var _value17=_step21.value;if(typeof _value17==="string"&&Object.prototype.hasOwnProperty.call(target,_value17))delete target[_value17]}}catch(err){_iterator21.e(err)}finally{_iterator21.f()}}delete source[_key8];if(parentSource&&typeof parentKey==="string")delete parentSource[parentKey]}else if(target!==null&&Object.prototype.hasOwnProperty.call(target,_key8))target[_key8]=_modifyObject(target[_key8],sourceValue,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,_key8)}return target};/**
 * Removes given key from given object recursively.
 * @param object - Object to process.
 * @param keys - List of keys to remove.
 * @returns Processed given object.
 */var _removeKeyPrefixes=function removeKeyPrefixes(object,keys){if(keys===void 0){keys="#"}var resolvedKeys=[].concat(keys);if(Array.isArray(object)){var index=0;var _iterator22=_createForOfIteratorHelper(object.slice()),_step22;try{for(_iterator22.s();!(_step22=_iterator22.n()).done;){var subObject=_step22.value;var skip=false;if(typeof subObject==="string"){var _iterator23=_createForOfIteratorHelper(resolvedKeys),_step23;try{for(_iterator23.s();!(_step23=_iterator23.n()).done;){var key=_step23.value;if(subObject.startsWith("".concat(key,":"))){object.splice(index,1);skip=true;break}}}catch(err){_iterator23.e(err)}finally{_iterator23.f()}if(skip)continue}object[index]=_removeKeyPrefixes(subObject,resolvedKeys);index+=1}}catch(err){_iterator22.e(err)}finally{_iterator22.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var _iterator24=_createForOfIteratorHelper(new Set(object)),_step24;try{for(_iterator24.s();!(_step24=_iterator24.n()).done;){var _subObject=_step24.value;var _skip=false;if(typeof _subObject==="string"){var _iterator25=_createForOfIteratorHelper(resolvedKeys),_step25;try{for(_iterator25.s();!(_step25=_iterator25.n()).done;){var _key9=_step25.value;if(_subObject.startsWith("".concat(_key9,":"))){object.delete(_subObject);_skip=true;break}}}catch(err){_iterator25.e(err)}finally{_iterator25.f()}if(_skip)continue}_removeKeyPrefixes(_subObject,resolvedKeys)}}catch(err){_iterator24.e(err)}finally{_iterator24.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator26=_createForOfIteratorHelper(new Map(object)),_step26;try{for(_iterator26.s();!(_step26=_iterator26.n()).done;){var _step26$value=_slicedToArray(_step26.value,2),_key0=_step26$value[0],_subObject2=_step26$value[1];var _skip2=false;if(typeof _key0==="string"){var _iterator27=_createForOfIteratorHelper(resolvedKeys),_step27;try{for(_iterator27.s();!(_step27=_iterator27.n()).done;){var resolvedKey=_step27.value;var escapedKey=(0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .escapeRegularExpressions */ .jt)(resolvedKey);if(new RegExp("^".concat(escapedKey,"[0-9]*$")).test(_key0)){object.delete(_key0);_skip2=true;break}}}catch(err){_iterator27.e(err)}finally{_iterator27.f()}if(_skip2)continue}object.set(_key0,_removeKeyPrefixes(_subObject2,resolvedKeys))}}catch(err){_iterator26.e(err)}finally{_iterator26.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object))for(var _i27=0,_Object$entries15=Object.entries(Object.assign({},object));_i27<_Object$entries15.length;_i27++){var _Object$entries15$_i=_slicedToArray(_Object$entries15[_i27],2),_key1=_Object$entries15$_i[0],value=_Object$entries15$_i[1];var _skip3=false;var _iterator28=_createForOfIteratorHelper(resolvedKeys),_step28;try{for(_iterator28.s();!(_step28=_iterator28.n()).done;){var _resolvedKey=_step28.value;var _escapedKey=(0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .escapeRegularExpressions */ .jt)(_resolvedKey);if(new RegExp("^".concat(_escapedKey,"[0-9]*$")).test(_key1)){delete object[_key1];_skip3=true;break}}}catch(err){_iterator28.e(err)}finally{_iterator28.f()}if(_skip3)continue;object[_key1]=_removeKeyPrefixes(value,resolvedKeys)}return object};/**
 * Represents given object as formatted string.
 * @param object - Object to represent.
 * @param maximumLengthOfLists - Maximum number of array item to render.
 * @param indention - String (usually whitespaces) to use as indention.
 * @param initialIndention - String (usually whitespaces) to use as
 * additional indention for the first object traversing level.
 * @param maximumNumberOfLevelsReachedIdentifier - Replacement for objects
 * which are out of specified bounds to traverse.
 * @param numberOfLevels - Specifies number of levels to traverse given
 * data structure.
 * @returns Representation string.
 */var _represent=function represent(object,maximumLengthOfLists,indention,initialIndention,maximumNumberOfLevelsReachedIdentifier,numberOfLevels){if(maximumLengthOfLists===void 0){maximumLengthOfLists=30}if(indention===void 0){indention="    "}if(initialIndention===void 0){initialIndention=""}if(maximumNumberOfLevelsReachedIdentifier===void 0){maximumNumberOfLevelsReachedIdentifier="__maximum_number_of_levels_reached__"}if(numberOfLevels===void 0){numberOfLevels=8}if(numberOfLevels===0)return String(maximumNumberOfLevelsReachedIdentifier);if(object===null)return"null";if(object===undefined)return"undefined";if(typeof object==="string")return"\"".concat(object.replace(/\n/g,"\n".concat(initialIndention)),"\"");if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumeric */ .kf)(object)||typeof object==="boolean")return String(object);if(object instanceof Date)return object.toISOString();if(Array.isArray(object)){var _result3="[";var _firstSeen=false;var _counter=1;var _iterator29=_createForOfIteratorHelper(object),_step29;try{for(_iterator29.s();!(_step29=_iterator29.n()).done;){var item=_step29.value;if(_counter>maximumLengthOfLists){_result3+="\n".concat(initialIndention,"...");break}if(_firstSeen)_result3+=",";_result3+="\n".concat(initialIndention).concat(indention)+_represent(item,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen=true;_counter+=1}}catch(err){_iterator29.e(err)}finally{_iterator29.f()}if(_firstSeen)_result3+="\n".concat(initialIndention);_result3+="]";return _result3}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _result4="";var _firstSeen2=false;var _counter2=1;var _iterator30=_createForOfIteratorHelper(object),_step30;try{for(_iterator30.s();!(_step30=_iterator30.n()).done;){var _step30$value=_slicedToArray(_step30.value,2),key=_step30$value[0],_item=_step30$value[1];if(_counter2>maximumLengthOfLists){_result4+=",\n".concat(initialIndention,"...");break}if(_firstSeen2)_result4+=",\n".concat(initialIndention).concat(indention);_result4+=_represent(key,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1)+" -> "+_represent(_item,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen2=true;_counter2+=1}}catch(err){_iterator30.e(err)}finally{_iterator30.f()}if(!_firstSeen2)_result4="EmptyMap";return _result4}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var _result5="{";var _firstSeen3=false;var _counter3=1;var _iterator31=_createForOfIteratorHelper(object),_step31;try{for(_iterator31.s();!(_step31=_iterator31.n()).done;){var _item2=_step31.value;if(_counter3>maximumLengthOfLists){_result5+=",\n".concat(initialIndention,"...");break}if(_firstSeen3)_result5+=",";_result5+="\n".concat(initialIndention).concat(indention)+_represent(_item2,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen3=true;_counter3+=1}}catch(err){_iterator31.e(err)}finally{_iterator31.f()}if(_firstSeen3)_result5+="\n".concat(initialIndention,"}");else _result5="EmptySet";return _result5}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(object))return"__function__";var result="{";var keys=Object.getOwnPropertyNames(object).sort();var firstSeen=false;var counter=1;var _iterator32=_createForOfIteratorHelper(keys),_step32;try{for(_iterator32.s();!(_step32=_iterator32.n()).done;){var _key10=_step32.value;if(counter>maximumLengthOfLists){result+=",\n".concat(initialIndention,"...");break}if(firstSeen)result+=",";result+="\n".concat(initialIndention).concat(indention).concat(_key10,": ")+_represent(object[_key10],maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);firstSeen=true;counter+=1}}catch(err){_iterator32.e(err)}finally{_iterator32.f()}if(firstSeen)result+="\n".concat(initialIndention);result+="}";return result};/**
 * Sort given objects keys.
 * @param object - Object which keys should be sorted.
 * @returns Sorted list of given keys.
 */var sort=function sort(object){var keys=[];if(Array.isArray(object))for(var index=0;index<object.length;index++)keys.push(index);else if(_typeof(object)==="object")if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator33=_createForOfIteratorHelper(object),_step33;try{for(_iterator33.s();!(_step33=_iterator33.n()).done;){var keyValuePair=_step33.value;keys.push(keyValuePair[0])}}catch(err){_iterator33.e(err)}finally{_iterator33.f()}}else if(object!==null)for(var _i28=0,_Object$keys=Object.keys(object);_i28<_Object$keys.length;_i28++){var key=_Object$keys[_i28];keys.push(key)}return keys.sort()};/**
 * Removes a proxy from given data structure recursively.
 * @param object - Object to proxy.
 * @param seenObjects - Tracks all already processed objects to avoid
 * endless loops (usually only needed for internal purpose).
 * @returns Returns given object unwrapped from a dynamic proxy.
 */var _unwrapProxy=function unwrapProxy(object,seenObjects){if(seenObjects===void 0){seenObjects=new Set}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object)){if(seenObjects.has(object))return object;try{if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(object.__revoke__)){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isProxy */ .ju)(object))object=object.__target__;object.__revoke__()}}catch(_unused){return object}finally{seenObjects.add(object)}if(Array.isArray(object)){var index=0;var _iterator34=_createForOfIteratorHelper(object),_step34;try{for(_iterator34.s();!(_step34=_iterator34.n()).done;){var value=_step34.value;object[index]=_unwrapProxy(value,seenObjects);index+=1}}catch(err){_iterator34.e(err)}finally{_iterator34.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator35=_createForOfIteratorHelper(object),_step35;try{for(_iterator35.s();!(_step35=_iterator35.n()).done;){var _step35$value=_slicedToArray(_step35.value,2),key=_step35$value[0],_value18=_step35$value[1];object.set(key,_unwrapProxy(_value18,seenObjects))}}catch(err){_iterator35.e(err)}finally{_iterator35.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator36=_createForOfIteratorHelper(object),_step36;try{for(_iterator36.s();!(_step36=_iterator36.n()).done;){var _value20=_step36.value;object.delete(_value20);cache.push(_unwrapProxy(_value20,seenObjects))}}catch(err){_iterator36.e(err)}finally{_iterator36.f()}for(var _i29=0,_cache4=cache;_i29<_cache4.length;_i29++){var _value19=_cache4[_i29];object.add(_value19)}}else for(var _i30=0,_Object$entries16=Object.entries(object);_i30<_Object$entries16.length;_i30++){var _Object$entries16$_i=_slicedToArray(_Object$entries16[_i30],2),_key11=_Object$entries16$_i[0],_value21=_Object$entries16$_i[1];object[_key11]=_unwrapProxy(_value21,seenObjects)}}return object};

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_85457__) {

__nested_webpack_require_85457__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_85457__.d(__nested_webpack_exports__, {
/* harmony export */   GP: function() { return /* binding */ isAnyMatching; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   Qd: function() { return /* binding */ isPlainObject; },
/* harmony export */   Tn: function() { return /* binding */ isFunction; },
/* harmony export */   Xj: function() { return /* binding */ isArrayLike; },
/* harmony export */   jh: function() { return /* binding */ isMap; },
/* harmony export */   ju: function() { return /* binding */ isProxy; },
/* harmony export */   kf: function() { return /* binding */ isNumeric; },
/* harmony export */   l6: function() { return /* binding */ isWindow; },
/* harmony export */   vM: function() { return /* binding */ isSet; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85457__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85457__(1);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_85457__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module indicators *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Checks whether one of the given pattern matches given string.
 * @param target - Target to check in pattern for.
 * @param pattern - List of pattern to check for.
 * @returns Value "true" if given object is matches by at leas one of the
 * given pattern and "false" otherwise.
 */var isAnyMatching=function isAnyMatching(target,pattern){var _iterator=_createForOfIteratorHelper(pattern),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var currentPattern=_step.value;if(typeof currentPattern==="string"){if(currentPattern===target)return true}else if(currentPattern.test(target))return true}}catch(err){_iterator.e(err)}finally{_iterator.f()}return false};/**
 * Checks if given object is similar to an array and can be handled like an
 * array.
 * @param object - Object to check behavior for.
 * @returns A boolean value indicating whether given object is array like.
 */var isArrayLike=function isArrayLike(object){var length;try{length=Boolean(object)&&object.length}catch(_unused){return false}var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(object);if(type==="function"||isWindow(object))return false;if(type==="array"||length===0)return true;if(typeof length==="number"&&length>0)try{var _dump=object[length-1];return true}catch(_unused2){// Continue regardless of an error.
}return false};/**
 * Checks whether given object is a function.
 * @param value - Value to check.
 * @returns Value "true" if given object is a function and "false"
 * otherwise.
 */var isFunction=function isFunction(value){return Boolean(value)&&["[object AsyncFunction]","[object Function]"].includes({}.toString.call(value))};/**
 * Checks whether given object is a map.
 * @param value - Value to check.
 * @returns Value "true" if given object is a map and "false" otherwise.
 */var isMap=function isMap(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="map"};/**
 * Determines whether its argument represents a JavaScript number.
 * @param value - Value to analyze.
 * @returns A boolean value indicating whether given object is numeric
 * like.
 */var isNumeric=function isNumeric(value){var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value);/*
        NOTE: "parseFloat" "NaNs" numeric-cast false positives ("") but
        misinterprets leading-number strings, particularly hex literals
        ("0x...") subtraction forces infinities to NaN.
    */return["number","string"].includes(type)&&!isNaN(value-parseFloat(value))};/**
 * Checks whether given object is a native object but not null.
 * @param value - Value to check.
 * @returns Value "true" if given object is a plain javaScript object and
 * "false" otherwise.
 */var isObject=function isObject(value){return value!==null&&_typeof(value)==="object"};/**
 * Checks whether given object is a plain native object.
 * @param value - Value to check.
 * @returns Value "true" if given object is a plain javaScript object and
 * "false" otherwise.
 */var isPlainObject=function isPlainObject(value){var _prototype$constructo;if(!isObject(value))return false;var prototype=Object.getPrototypeOf(value);if(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PLAIN_OBJECT_PROTOTYPES */ .jE.includes(prototype))return true;/*
        NOTE: Plain objects created in another realm (a vm context like used by
        test runners or a worker for example) have their own "Object.prototype"
        instance and would not be recognized by the identity check above.
    */return prototype!==null&&Object.getPrototypeOf(prototype)===null&&((_prototype$constructo=prototype.constructor)===null||_prototype$constructo===void 0?void 0:_prototype$constructo.name)==="Object"};/**
 * Checks whether given object is a proxy.
 * @param value - Value to check.
 * @returns Value "true" if given object is a proxy and "false" otherwise.
 */var isProxy=function isProxy(value){return Boolean(value===null||value===void 0?void 0:value.__target__)};/**
 * Checks whether given object is a set.
 * @param value - Value to check.
 * @returns Value "true" if given object is a set and "false" otherwise.
 */var isSet=function isSet(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="set"};/**
 * Determine whether the argument is a window.
 * @param value - Value to check for.
 * @returns Boolean value indicating the result.
 */var isWindow=function isWindow(value){return![null,undefined].includes(value)&&_typeof(value)==="object"&&value===(value===null||value===void 0?void 0:value.window)};

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_93223__) {

/* harmony export */ __nested_webpack_require_93223__.d(__nested_webpack_exports__, {
/* harmony export */   $Q: function() { return /* binding */ MAXIMAL_NUMBER_OF_ITERATIONS; },
/* harmony export */   Lz: function() { return /* binding */ globalContext; },
/* harmony export */   QH: function() { return /* binding */ mockConsole; },
/* harmony export */   tE: function() { return /* binding */ NOOP; },
/* harmony export */   zm: function() { return /* binding */ setGlobalContext; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93223__(1);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93223__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module context *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _optionalRequire$defa,_optionalRequire;function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var globalContext=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .determineGlobalContext */ .a8)();var setGlobalContext=function setGlobalContext(context){globalContext=context};globalContext.fetch=globalContext.fetch?globalContext.fetch.bind(globalContext):(_optionalRequire$defa=(_optionalRequire=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalRequire */ .I5)("node-fetch"))===null||_optionalRequire===void 0?void 0:_optionalRequire.default)!==null&&_optionalRequire$defa!==void 0?_optionalRequire$defa:function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return (0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalImport */ .Sw)(/* webpackIgnore: true */"node-fetch").then(function(module){var _ref;return(_ref=module).default.apply(_ref,parameters)})};var MAXIMAL_NUMBER_OF_ITERATIONS={value:100};// A no-op dummy function.
var NOOP=function NOOP(){// Do nothing.
};var mockConsole=function mockConsole(){// Avoid errors in browsers that lack a console.
if(!Object.prototype.hasOwnProperty.call(globalContext,"console"))globalContext.console={};if(!globalContext.console)globalContext.console={};var _iterator=_createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .CONSOLE_METHODS */ .jg),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var methodName=_step.value;if(!(methodName in globalContext.console))globalContext.console[methodName]=NOOP}}catch(err){_iterator.e(err)}finally{_iterator.f()}};

/***/ }),
/* 6 */
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 6;
module.exports = webpackEmptyContext;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_97539__) {

__nested_webpack_require_97539__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_97539__.d(__nested_webpack_exports__, {
/* harmony export */   AB: function() { return /* binding */ limit; },
/* harmony export */   GP: function() { return /* binding */ format; },
/* harmony export */   Gy: function() { return /* binding */ mark; },
/* harmony export */   K$: function() { return /* binding */ normalizeZipCode; },
/* harmony export */   KC: function() { return /* binding */ representPhoneNumber; },
/* harmony export */   LK: function() { return /* binding */ getURLParameter; },
/* harmony export */   Lt: function() { return /* binding */ decodeHTMLEntities; },
/* harmony export */   RS: function() { return /* binding */ normalizeDomNodeSelector; },
/* harmony export */   Tx: function() { return /* binding */ findNormalizedMatchRange; },
/* harmony export */   U7: function() { return /* binding */ sliceAllExceptNumberAndLastSeparator; },
/* harmony export */   Ud: function() { return /* binding */ POLYFILL_TEMPLATE_STRINGS; },
/* harmony export */   Un: function() { return /* binding */ getEditDistance; },
/* harmony export */   V5: function() { return /* binding */ encodeURIComponentExtended; },
/* harmony export */   VK: function() { return /* binding */ evaluateOrThrowError; },
/* harmony export */   VU: function() { return /* binding */ getPortNumber; },
/* harmony export */   W5: function() { return /* binding */ maskForRegularExpression; },
/* harmony export */   Wq: function() { return /* binding */ getDomainName; },
/* harmony export */   XD: function() { return /* binding */ delimitedToCamelCase; },
/* harmony export */   Yn: function() { return /* binding */ hasPathPrefix; },
/* harmony export */   ZH: function() { return /* binding */ capitalize; },
/* harmony export */   _3: function() { return /* binding */ evaluate; },
/* harmony export */   _4: function() { return /* binding */ serviceURLEquals; },
/* harmony export */   _x: function() { return /* binding */ KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS; },
/* harmony export */   a$: function() { return /* binding */ convertToValidVariableName; },
/* harmony export */   aL: function() { return /* binding */ ALLOWED_VARIABLE_SYMBOLS; },
/* harmony export */   bM: function() { return /* binding */ ALLOWED_STARTING_VARIABLE_SYMBOLS; },
/* harmony export */   dc: function() { return /* binding */ normalizeURL; },
/* harmony export */   fS: function() { return /* binding */ AsyncFunction; },
/* harmony export */   gB: function() { return /* binding */ getProtocolName; },
/* harmony export */   gQ: function() { return /* binding */ lowerCase; },
/* harmony export */   h1: function() { return /* binding */ camelCaseToDelimited; },
/* harmony export */   h2: function() { return /* binding */ normalizePhoneNumber; },
/* harmony export */   jL: function() { return /* binding */ parseEncodedObject; },
/* harmony export */   jt: function() { return /* binding */ escapeRegularExpressions; },
/* harmony export */   k7: function() { return /* binding */ FIX_ENCODING_ERROR_MAPPING; },
/* harmony export */   oz: function() { return /* binding */ representURL; },
/* harmony export */   p0: function() { return /* binding */ addSeparatorToPath; },
/* harmony export */   pM: function() { return /* binding */ fixKnownEncodingErrors; },
/* harmony export */   v0: function() { return /* binding */ compressStyleValue; },
/* harmony export */   wE: function() { return /* binding */ compile; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97539__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97539__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_97539__(5);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_97539__(12);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_97539__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module string *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};// endregion
var KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS=["default","if","for","class","function","return","const","let","var"];var POLYFILL_TEMPLATE_STRINGS={value:false};// Partial regular expression matching symbols which should be allowed within a
// variable name excluding the first character.
var ALLOWED_VARIABLE_SYMBOLS="0-9a-zA-Z_$";// Partial regular expression matching symbols which should be allowed as
// starting character for a variable name.
var ALLOWED_STARTING_VARIABLE_SYMBOLS="a-zA-Z_$";var FIX_ENCODING_ERROR_MAPPING=[["\xC3\\x84","\xC4"],["\xC3\\x96","\xD6"],["\xC3\\x9c","\xDC"],["\xC3\xA4","\xE4"],["\xC3\xB6","\xF6"],["\xC3\xBC","\xFC"],["\\x96","-"],["\xC3\xA9","\xE9"],["\xC3\xA8","e"],["\xC3\xB4","o"],["\xC3 ","\xE1"],["\xC3\xB8","\xF8"],["\xC3\\x9f","\xDF"],["\xC3","\xDF"]];var AsyncFunction=/*
        eslint-disable
        @typescript-eslint/no-implied-eval,@typescript-eslint/no-unsafe-call
    */new Function("return Object.getPrototypeOf(async function() {})")().constructor;/*
        eslint-enable
        @typescript-eslint/no-implied-eval,@typescript-eslint/no-unsafe-call
    */// region url handling
/**
 * Appends a path selector to the given path if there isn't one yet.
 * @param path - The path for appending a selector.
 * @param pathSeparator - The selector for appending to a path.
 * @returns The appended path.
 */var addSeparatorToPath=function addSeparatorToPath(path,pathSeparator){if(pathSeparator===void 0){pathSeparator="/"}path=path.trim();if(path.substring(path.length-1)!==pathSeparator&&path.length)return path+pathSeparator;return path};/**
 * This method is intended for encoding *key* or *value* parts of a query
 * component. We need a custom method because "encodeURIComponent()" is too
 * aggressive and encodes stuff that doesn't have to be encoded per
 * "http://tools.ietf.org/html/rfc3986:".
 * @param url - URL to encode.
 * @param encodeSpaces - Indicates whether given url should encode
 * whitespaces as "+" or "%20".
 * @returns Encoded given url.
 */var encodeURIComponentExtended=function encodeURIComponentExtended(url,encodeSpaces){if(encodeSpaces===void 0){encodeSpaces=false}return encodeURIComponent(url).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,encodeSpaces?"%20":"+")};/**
 * Extracts domain name from given url. If no explicit domain name given
 * current domain name will be assumed. If no parameter is given, the current
 * domain name will be determined.
 * @param url - The url to extract domain from.
 * @param fallback - The fallback host name if no one exits in given url
 * (default is current hostname).
 * @returns Extracted domain.
 */var getDomainName=function getDomainName(url,fallback){if(url===void 0){var _globalContext$locati;url=((_globalContext$locati=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati===void 0?void 0:_globalContext$locati.href)||""}if(fallback===void 0){var _globalContext$locati2;fallback=((_globalContext$locati2=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati2===void 0?void 0:_globalContext$locati2.hostname)||""}var result=/^([a-z]*:?\/\/)?([^/]+?)(?::[0-9]+)?(?:\/.*|$)/i.exec(url);if(result&&result.length>2&&result[1]&&result[2])return result[2];return fallback};/**
 * Extracts port number from given url. If no explicit port number is given
 * and no fallback is defined, the current port number will be assumed for local
 * links. For external links 80 will be assumed for http protocols and 443
 * for https protocols.
 * @param url - The url to extract port from.
 * @param fallback - Fallback port number if no explicit one was found.
 * Default is derived from the current protocol name.
 * @returns Extracted port number.
 */var getPortNumber=function getPortNumber(url,fallback){var _globalContext$locati5;if(url===void 0){var _globalContext$locati3;url=((_globalContext$locati3=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati3===void 0?void 0:_globalContext$locati3.href)||""}if(fallback===void 0){var _globalContext$locati4;fallback=(_globalContext$locati4=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati4!==void 0&&_globalContext$locati4.port?parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port):null}var result=/^(?:[a-z]*:?\/\/[^/]+?)?[^/]+?:([0-9]+)/i.exec(url);if(result&&result.length>1)return parseInt(result[1],10);if(fallback!==null)return fallback;if(// NOTE: Would result in an endless loop:
// serviceURLEquals(url, ...parameters) &&
(_globalContext$locati5=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati5!==void 0&&_globalContext$locati5.port&&parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10))return parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10);return getProtocolName(url)==="https"?443:80};/**
 * Extracts protocol name from given url. If no explicit url is given,
 * the current protocol will be assumed. If no parameter is given, the current
 * protocol number will be determined.
 * @param url - The url to extract protocol from.
 * @param fallback - Fallback port to use if no protocol exists in given
 * url (default is current protocol).
 * @returns Extracted protocol.
 */var getProtocolName=function getProtocolName(url,fallback){if(url===void 0){var _globalContext$locati6;url=((_globalContext$locati6=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati6===void 0?void 0:_globalContext$locati6.href)||""}if(fallback===void 0){var _globalContext$locati7;fallback=((_globalContext$locati7=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati7===void 0?void 0:_globalContext$locati7.protocol)&&_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.substring(0,_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.length-1)||""}var result=/^([a-z]+):\/\//i.exec(url);if(result&&result.length>1&&result[1])return result[1];return fallback};/**
 * Read a page's GET URL variables and return them as an associative array
 * and preserves ordering.
 * @param keyToGet - If provided the corresponding value for a given key is
 * returned or full object otherwise.
 * @param allowDuplicates - Indicates whether to return arrays of values or
 * single values. If set to "false" (default) last values will overwrite
 * preceding values.
 * @param givenInput - An alternative input to the url search parameter. If
 * "#" is given, the complete current hashtag will be interpreted as url and
 * search parameter will be extracted from there. If "&" is given a classical
 * search parameter, and hash parameter will be taken in an account. If a
 * search string is given, this will be analyzed. The default is to take a
 * given search part into account.
 * @param subDelimiter - Defines which sequence indicates the start of
 * parameter in a hash part of the url.
 * @param hashedPathIndicator - If defined and given hash starts with this
 * indicator, given hash will be interpreted as a path containing search and
 * hash parts.
 * @param givenSearch - Search part to take into account defaults to
 * current url search part.
 * @param givenHash - Hash part to take into account defaults to current
 * url hash part.
 * @returns Returns the current get array or requested value. If the requested
 * key doesn't exist, "undefined" is returned.
 */var getURLParameter=function getURLParameter(keyToGet,allowDuplicates,givenInput,subDelimiter,hashedPathIndicator,givenSearch,givenHash){if(keyToGet===void 0){keyToGet=null}if(allowDuplicates===void 0){allowDuplicates=false}if(givenInput===void 0){givenInput=null}if(subDelimiter===void 0){subDelimiter="$"}if(hashedPathIndicator===void 0){hashedPathIndicator="!"}if(givenSearch===void 0){givenSearch=null}if(givenHash===void 0){var _globalContext$locati8,_globalContext$locati9;givenHash=(_globalContext$locati8=(_globalContext$locati9=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati9===void 0?void 0:_globalContext$locati9.hash)!==null&&_globalContext$locati8!==void 0?_globalContext$locati8:""}// region set search and hash
var hash=givenHash!==null&&givenHash!==void 0?givenHash:"#";var search="";if(givenSearch)search=givenSearch;else if(hashedPathIndicator&&hash.startsWith(hashedPathIndicator)){var subHashStartIndex=hash.indexOf("#");var pathAndSearch;if(subHashStartIndex===-1){pathAndSearch=hash.substring(hashedPathIndicator.length);hash=""}else{pathAndSearch=hash.substring(hashedPathIndicator.length,subHashStartIndex);hash=hash.substring(subHashStartIndex)}var subSearchStartIndex=pathAndSearch.indexOf("?");if(subSearchStartIndex!==-1)search=pathAndSearch.substring(subSearchStartIndex)}else if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)search=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.search||"";var input=givenInput?givenInput:search;// endregion
// region determine data from search and hash if specified
var both=input==="&";if(both||input==="#"){var decodedHash="";try{decodedHash=decodeURIComponent(hash)}catch(_unused){// Continue regardless of an error.
}var subDelimiterIndex=decodedHash.indexOf(subDelimiter);if(subDelimiterIndex===-1)input="";else{input=decodedHash.substring(subDelimiterIndex);if(input.startsWith(subDelimiter))input=input.substring(subDelimiter.length)}}else if(input.startsWith("?"))input=input.substring("?".length);var data=input?input.split("&"):[];search=search.substring("?".length);if(both&&search)data=data.concat(search.split("&"));// endregion
// region construct data structure
var parameters=[];var _iterator=_createForOfIteratorHelper(data),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _value=_step.value;var keyValuePair=_value.split("=");var key=void 0;try{key=decodeURIComponent(keyValuePair[0])}catch(_unused2){key=""}try{_value=decodeURIComponent(keyValuePair[1])}catch(_unused3){_value=""}parameters.push(key);if(allowDuplicates){if(Object.prototype.hasOwnProperty.call(parameters,key)&&Array.isArray(parameters[key]))parameters[key].push(_value);else parameters[key]=[_value];}else parameters[key]=_value}// endregion
}catch(err){_iterator.e(err)}finally{_iterator.f()}if(keyToGet){if(Object.prototype.hasOwnProperty.call(parameters,keyToGet))return parameters[keyToGet];return null}return parameters};/**
 * Checks if a given path has given path prefix.
 * @param prefix - Path prefix to search for.
 * @param path - Path to search in.
 * @param separator - Delimiter to use in a path (default is the posix
 * conform slash).
 * @returns Value "true" if given prefix occurs and "false" otherwise.
 */var hasPathPrefix=function hasPathPrefix(prefix,path,separator){if(prefix===void 0){prefix="/admin"}if(path===void 0){var _globalContext$locati0;path=((_globalContext$locati0=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati0===void 0?void 0:_globalContext$locati0.pathname)||""}if(separator===void 0){separator="/"}if(typeof prefix==="string"){if(!prefix.endsWith(separator))prefix+=separator;return path===prefix.substring(0,prefix.length-separator.length)||path.startsWith(prefix)}return false};/**
 * Normalized given website url.
 * @param givenURL - Uniform resource locator to normalize.
 * @returns Normalized result.
 */var normalizeURL=function normalizeURL(givenURL){if(typeof givenURL==="string"){var url=givenURL.replace(/^:?\/+/,"").replace(/\/+$/,"").trim();if(url.startsWith("http"))return url;return"http://".concat(url)}return""};/**
 * Represents given website url.
 * @param url - Uniform resource locator to represent.
 * @returns Represented result.
 */var representURL=function representURL(url){if(typeof url==="string")return url.replace(/^(https?)?:?\/+/,"").replace(/\/+$/,"").trim();return""};/**
 * Checks if given url points to another "service" than the second given url.
 * If no second given url is provided, the current url will be assumed.
 * @param url - URL to check against second url.
 * @param referenceURL - URL to check against first url.
 * @returns Returns "true" if given first url has same domain as given
 * second (or current).
 */var serviceURLEquals=function serviceURLEquals(url,referenceURL){if(referenceURL===void 0){var _globalContext$locati1;referenceURL=((_globalContext$locati1=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati1===void 0?void 0:_globalContext$locati1.href)||""}var domain=getDomainName(url,"");var protocol=getProtocolName(url,"");var port=getPortNumber(url);return(domain===""||domain===getDomainName(referenceURL))&&(protocol===""||protocol===getProtocolName(referenceURL))&&(port===null||port===getPortNumber(referenceURL))};// endregion
/**
 * Converts a camel-cased string to its delimited string version.
 * @param value - The string to format.
 * @param delimiter - Defines delimiter string.
 * @param abbreviations - Collection of shortcut words to represent uppercased.
 * @returns The formatted string.
 */var camelCaseToDelimited=function camelCaseToDelimited(value,delimiter,abbreviations){if(delimiter===void 0){delimiter="-"}if(abbreviations===void 0){abbreviations=null}if(!abbreviations)abbreviations=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy;var escapedDelimiter=maskForRegularExpression(delimiter);if(abbreviations.length){var abbreviationPattern="";var _iterator2=_createForOfIteratorHelper(abbreviations),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var abbreviation=_step2.value;if(abbreviationPattern)abbreviationPattern+="|";abbreviationPattern+=abbreviation.toUpperCase()}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}value=value.replace(new RegExp("(".concat(abbreviationPattern,")(").concat(abbreviationPattern,")"),"g"),"$1".concat(delimiter,"$2"))}value=value.replace(new RegExp("([^".concat(escapedDelimiter,"])([A-Z][a-z]+)"),"g"),"$1".concat(delimiter,"$2"));return value.replace(new RegExp("([a-z0-9])([A-Z])","g"),"$1".concat(delimiter,"$2")).toLowerCase()};/**
 * Converts a string to its capitalized representation.
 * @param string - The string to format.
 * @returns The formatted string.
 */var capitalize=function capitalize(string){return string.charAt(0).toUpperCase()+string.substring(1)};/**
 * Compiles a given string as an expression with given scope names.
 * @param expression - The string to interpret.
 * @param givenOptions - Expression options.
 * @param givenOptions.scope - Scope to extract names from.
 * @param givenOptions.execute - Indicates whether to execute or evaluate.
 * @param givenOptions.removeGlobalScope - Indicates whether to shadow global
 * scope.
 * @param givenOptions.binding - Object to apply as "this" in evaluation scope.
 * @param givenOptions.async - Indicates whether to compile an async function.
 * @returns Object of prepared scope name mappings and compiled function or
 * error string message if given expression couldn't be compiled.
 */var compile=function compile(expression,givenOptions){var _Babel;if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:[],async:false,execute:false,removeGlobalScope:true,binding:{}},givenOptions);/*
        NOTE: We do this global variable name determining as close as possible
        to the compiling step to cover as much as possible global introduces
        variables.
    */var globalNames=Object.keys(globalThis).concat("globalThis").filter(function(name){return new RegExp("^[".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]")+"[".concat(ALLOWED_VARIABLE_SYMBOLS,"]*$")).test(name)&&!KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS.includes(name)});var result={error:null,globalNames:globalNames,globalNamesUndefinedList:globalNames.map(function(){return undefined}),originalScopeNames:Array.isArray(options.scope)?options.scope:typeof options.scope==="string"?[options.scope]:Object.keys(options.scope),scopeNameMapping:{},scopeNames:[],templateFunction:function templateFunction(){return undefined}};var _iterator3=_createForOfIteratorHelper(result.originalScopeNames),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var name=_step3.value;var newName=convertToValidVariableName(name);result.scopeNameMapping[name]=newName;result.scopeNames.push(newName)}// region try to polyfill template string literals for older engines
}catch(err){_iterator3.e(err)}finally{_iterator3.f()}if(POLYFILL_TEMPLATE_STRINGS.value)if((_Babel=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel)!==null&&_Babel!==void 0&&_Babel.transform)expression=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel.transform("(".concat(expression,")"),{plugins:["transform-template-literals"]}).code;else if(expression.startsWith("`")&&expression.endsWith("`")){var escapeMarker="####";// Convert template string into legacy string concatenations.
expression=expression// Mark simple escape sequences.
.replace(/\\\$/g,escapeMarker)// Handle avoidable template expression: Use raw code.
.replace(/^`\$\{([\s\S]+)}`$/,"String($1)")// Use plain string with single quotes.
.replace(/^`([^']+)`$/,"'$1'")// Use plain string with double quotes.
.replace(/^`([^"]+)`$/,"\"$1\"");// Use single quotes and hope (just a heuristic).
var quote=expression.charAt(0)==="`"?"'":expression.charAt(0);expression=expression// Replace a simple placeholder.
// NOTE: Replace complete bracket pairs.
.replace(/\$\{((([^{]*{[^}]*}[^}]*})|[^{}]+)+)}/g,"".concat(quote,"+($1)+").concat(quote)).replace(/^`([\s\S]+)`$/,"".concat(quote,"$1").concat(quote))// Remove remaining newlines.
.replace(/\n+/g,"")// Replace marked escape sequences.
.replace(new RegExp(escapeMarker,"g"),"\\$")}// endregion
var innerTemplateFunction;try{// eslint-disable-next-line @typescript-eslint/no-unsafe-call
innerTemplateFunction=_construct(options.async?AsyncFunction:Function,_toConsumableArray(options.removeGlobalScope?result.globalNames:[]).concat(_toConsumableArray(result.scopeNames),["".concat(options.execute?"":"return ").concat(expression)]))}catch(error){result.error="Given ".concat(options.async?"async":"sync"," expression ")+"\"".concat(expression,"\" could not be compiled width ")+"given scope names \"".concat(result.scopeNames.join("\", \""),"\": ")+(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .represent */ .Do)(error)}if(innerTemplateFunction){var boundInnerTemplateFunction=innerTemplateFunction.bind(options.binding);result.templateFunction=options.removeGlobalScope?function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return(/*
                    NOTE: We shadow existing global names to sandbox
                    expressions.
                */boundInnerTemplateFunction.apply(void 0,_toConsumableArray(result.globalNamesUndefinedList).concat(parameters)))}:boundInnerTemplateFunction}return result};/**
 * Evaluates a given string as an expression against a given scope.
 * @param expression - The string to interpret.
 * @param givenOptions - Expression options.
 * @param givenOptions.scope - Scope to extract names from.
 * @param givenOptions.execute - Indicates whether to execute or evaluate.
 * @param givenOptions.removeGlobalScope - Indicates whether to shadow global
 * scope.
 * @param givenOptions.binding - Object to apply as "this" in evaluation scope.
 * @param givenOptions.async - Indicates whether to compile an async function.
 * @returns Object with an error message during parsing / running or result.
 */var evaluate=function evaluate(expression,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:{},async:false,execute:false,removeGlobalScope:true,binding:{}},givenOptions);// NOTE: We extract string-only types from given scope type.
var _compile=compile(expression,options),error=_compile.error,originalScopeNames=_compile.originalScopeNames,scopeNames=_compile.scopeNames,templateFunction=_compile.templateFunction;var result={compileError:null,runtimeError:null,error:"Not yet evaluated.",result:undefined};if(error){result.compileError=result.error=error;return result}try{result={compileError:null,runtimeError:null,error:null,result:templateFunction.apply(void 0,_toConsumableArray(originalScopeNames.map(function(name){return options.scope[name]})))}}catch(error){result.error=result.runtimeError="Given ".concat(options.async?"async":"sync"," expression ")+"\"".concat(expression,"\" could not be evaluated with given scope ")+"names \"".concat(scopeNames.join("\", \""),"\": ")+(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .represent */ .Do)(error)}return result};/**
 * Evaluates a given string as an expression against a given scope. Does same
 * as "evaluate" but throws an exception if an error occurs and returns the
 * evaluated value instead of an object with error and result.
 * @param expression - The string to interpret.
 * @param options - Expression options.
 * @param options.scope - Scope to extract names from.
 * @param options.execute - Indicates whether to execute or evaluate.
 * @param options.removeGlobalScope - Indicates whether to shadow global scope.
 * @param options.binding - Object to apply as "this" in evaluation scope.
 * @param options.async - Indicates whether to compile an async function.
 * @returns Object with an error message during parsing / running or result.
 */var evaluateOrThrowError=function evaluateOrThrowError(expression,options){if(options===void 0){options={}}var evaluated=evaluate(expression,options);if(evaluated.error)throw new Error(evaluated.error);return evaluated.result};/**
 * Compresses given style attribute value.
 * @param styleValue - Style value to compress.
 * @returns The compressed value.
 */var compressStyleValue=function compressStyleValue(styleValue){return styleValue.replace(/ *([:;]) */g,"$1").replace(/ +/g," ").replace(/^;+/,"").replace(/;+$/,"").trim()};/**
 * Translates a given name into a valid JavaScript one.
 * @param name - Name to convert.
 * @returns Converted name is returned.
 */var convertToValidVariableName=function convertToValidVariableName(name){if(["class","default"].includes(name))return"_".concat(name);return name// Remove all disallowed starting characters.
.replace(new RegExp("^[^".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]+")),"")// Remove all disallowed characters within a variable name and make
// continuing character upper case.
.replace(new RegExp("[^".concat(ALLOWED_VARIABLE_SYMBOLS,"]+([a-zA-Z])"),"g"),function(_fullMatch,firstLetter){return firstLetter.toUpperCase()})};/**
 * Decodes all html symbols in text nodes in a given html string.
 * @param htmlString - HTML string to decode.
 * @returns Decoded html string.
 */var decodeHTMLEntities=function decodeHTMLEntities(htmlString){if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.document){var textareaDomNode=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.document.createElement("textarea");textareaDomNode.innerHTML=htmlString;return textareaDomNode.value}return null};/**
 * Converts a delimited string to its camel case representation.
 * @param value - The string to format.
 * @param delimiter - Delimiter string to use.
 * @param abbreviations - Collection of shortcut words to represent uppercased.
 * @param preserveWrongFormattedAbbreviations - If set to "True" wrong
 * formatted camel case abbreviations will be ignored.
 * @param removeMultipleDelimiter - Indicates whether a series of delimiter
 * should be consolidated.
 * @returns The formatted string.
 */var delimitedToCamelCase=function delimitedToCamelCase(value,delimiter,abbreviations,preserveWrongFormattedAbbreviations,removeMultipleDelimiter){if(delimiter===void 0){delimiter="-"}if(abbreviations===void 0){abbreviations=null}if(preserveWrongFormattedAbbreviations===void 0){preserveWrongFormattedAbbreviations=false}if(removeMultipleDelimiter===void 0){removeMultipleDelimiter=false}var escapedDelimiter=maskForRegularExpression(delimiter);if(!abbreviations)abbreviations=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy;var abbreviationPattern;if(preserveWrongFormattedAbbreviations)abbreviationPattern=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy.join("|");else{abbreviationPattern="";var _iterator4=_createForOfIteratorHelper(abbreviations),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var abbreviation=_step4.value;if(abbreviationPattern)abbreviationPattern+="|";abbreviationPattern+="".concat(capitalize(abbreviation),"|").concat(abbreviation)}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}var stringStartsWithDelimiter=value.startsWith(delimiter);if(stringStartsWithDelimiter)value=value.substring(delimiter.length);value=value.replace(new RegExp("(".concat(escapedDelimiter,")(").concat(abbreviationPattern,")")+"(".concat(escapedDelimiter,"|$)"),"g"),function(_fullMatch,before,abbreviation,after){return before+abbreviation.toUpperCase()+after});if(removeMultipleDelimiter)escapedDelimiter="(?:".concat(escapedDelimiter,")+");value=value.replace(new RegExp("".concat(escapedDelimiter,"([a-zA-Z0-9])"),"g"),function(_fullMatch,firstLetter){return firstLetter.toUpperCase()});if(stringStartsWithDelimiter)value=delimiter+value;return value};/**
 * Translates a given string into the regular expression validated
 * representation.
 * @param value - String to convert.
 * @param excludeSymbols - Symbols not to escape.
 * @returns Converted string.
 */var escapeRegularExpressions=function escapeRegularExpressions(value,excludeSymbols){if(excludeSymbols===void 0){excludeSymbols=[]}// NOTE: This is only for performance improvements.
if(value.length===1&&!_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI.includes(value))return value;// The escape sequence must also be escaped; but at first.
if(!excludeSymbols.includes("\\"))value.replace(/\\/g,"\\\\");var _iterator5=_createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var replace=_step5.value;if(!excludeSymbols.includes(replace))value=value.replace(new RegExp("\\".concat(replace),"g"),"\\".concat(replace))}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}return value};/**
 * Finds the string match of a given query in a given target text by applying a
 * given normalization function to target and query.
 * @param target - Target to search in.
 * @param query - Search string to search for.
 * @param normalizer - Function to use as normalization for queries and search
 * targets.
 * @param skipTagDelimitedParts - Indicates whether to, for example, ignore
 * html tags via "['<', '>']" (the default).
 * @returns Start and end index of matching range.
 */var findNormalizedMatchRange=function findNormalizedMatchRange(target,query,normalizer,skipTagDelimitedParts){if(normalizer===void 0){normalizer=function normalizer(value){return typeof value==="string"?value.trim().toLowerCase():value}}if(skipTagDelimitedParts===void 0){skipTagDelimitedParts=["<",">"]}var normalizedQuery=normalizer(query);var stringNormalizedQuery;if(typeof normalizedQuery==="string")stringNormalizedQuery=normalizedQuery;else{var match=target.match(normalizedQuery);stringNormalizedQuery=match?match[0]:""}if(!stringNormalizedQuery)return null;var normalizedTarget=normalizer(target);if(!normalizedTarget)return null;var stringTarget=typeof target==="string"?target:normalizedTarget;var inTag=false;for(var index=0;index<stringTarget.length;index+=1){if(inTag){if(Array.isArray(skipTagDelimitedParts)&&stringTarget.charAt(index)===skipTagDelimitedParts[1])inTag=false;continue}if(Array.isArray(skipTagDelimitedParts)&&stringTarget.charAt(index)===skipTagDelimitedParts[0]){inTag=true;continue}/*
            Skip positions the normalizer strips away (e.g. leading
            whitespace), so the reported match index aligns with the real
            character.
        */if(!normalizer(stringTarget.charAt(index)))continue;if(normalizer(stringTarget.substring(index)).startsWith(stringNormalizedQuery)){if(stringNormalizedQuery.length===1)return[index,index+1];for(var subIndex=stringTarget.length;subIndex>index;subIndex-=1)if(!normalizer(stringTarget.substring(index,subIndex)).startsWith(stringNormalizedQuery))return[index,subIndex+1]}}return null};/**
 * Fixes known encoding problems in given data.
 * @param data - To process.
 * @returns Processed data.
 */var fixKnownEncodingErrors=function fixKnownEncodingErrors(data){for(var _i=0,_FIX_ENCODING_ERROR_M=FIX_ENCODING_ERROR_MAPPING;_i<_FIX_ENCODING_ERROR_M.length;_i++){var _FIX_ENCODING_ERROR_M2=_slicedToArray(_FIX_ENCODING_ERROR_M[_i],2),search=_FIX_ENCODING_ERROR_M2[0],replacement=_FIX_ENCODING_ERROR_M2[1];data=data.replace(new RegExp(search,"g"),replacement)}return data};/**
 * Performs a string formation. Replaces every placeholder "{i}" with the i'th
 * argument.
 * @param string - The string to format.
 * @param additionalArguments - Additional arguments are interpreted as
 * replacements for string formatting.
 * @returns The formatted string.
 */var format=function format(string){for(var _len2=arguments.length,additionalArguments=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){additionalArguments[_key2-1]=arguments[_key2]}additionalArguments.unshift(string);var index=0;for(var _i2=0,_additionalArguments=additionalArguments;_i2<_additionalArguments.length;_i2++){var _value2=_additionalArguments[_i2];string=string.replace(new RegExp("\\{".concat(String(index),"\\}"),"gm"),String(_value2));index+=1}return string};/**
 * Calculates the edit (levenstein) distance between two given strings.
 * @param first - First string to compare.
 * @param second - Second string to compare.
 * @returns The distance as number.
 */var getEditDistance=function getEditDistance(first,second){/*
        Create empty edit distance matrix for all possible modifications of
        substrings of "first" to substrings of "second".
    */var distanceMatrix=Array(second.length+1).fill(null).map(function(){return Array(first.length+1).fill(null)});/*
        Fill the first row of the matrix.
        If this is the first row, then, we're transforming an empty string to
        "first". In this case the number of transformations equals to the size
        of the "first" substring.
    */for(var index=0;index<=first.length;index++)distanceMatrix[0][index]=index;/*
        Fill the first column of the matrix.
        If this is the first column, then we're transforming an empty string to
        "second".
        In this case the number of transformations equals to the size of the
        "second" substring.
    */for(var _index=0;_index<=second.length;_index++)distanceMatrix[_index][0]=_index;for(var firstIndex=1;firstIndex<=second.length;firstIndex++)for(var secondIndex=1;secondIndex<=first.length;secondIndex++){var indicator=first[secondIndex-1]===second[firstIndex-1]?0:1;distanceMatrix[firstIndex][secondIndex]=Math.min(// deletion
distanceMatrix[firstIndex][secondIndex-1]+1,// insertion
distanceMatrix[firstIndex-1][secondIndex]+1,// substitution
distanceMatrix[firstIndex-1][secondIndex-1]+indicator)}return distanceMatrix[second.length][first.length]};/**
 * Abbreviates a given string if it excesses a given limit.
 * @param value - String to abbreviate.
 * @param limit - Maximum length of processed string.
 * @returns Abbreviated given string.
 */var limit=function limit(value,_limit){if(_limit===void 0){_limit=100}if(value.length<=_limit)return value;var dots="...";return value.substring(0,_limit-dots.length)+dots};/**
 * Converts a string to its lower case representation.
 * @param string - The string to format.
 * @returns The formatted string.
 */var lowerCase=function lowerCase(string){return string.charAt(0).toLowerCase()+string.substring(1)};/**
 * Wraps given mark strings in a given target with a given marker.
 * @param target - String to search in.
 * @param givenSearchWords - String or regular expression or array of those to
 * search for.
 * @param givenOptions - Defines highlighting behavior.
 * @param givenOptions.marker - HTML template string to mark.
 * @param givenOptions.normalizer - Pure normalization function to use before
 * searching for matches.
 * @param givenOptions.skipTagDelimitedParts - Indicates whether to, for
 * example, ignore html tags via "['<', '>']" (the default).
 * @returns Processed result.
 */var mark=function mark(target,givenSearchWords,givenOptions){if(givenOptions===void 0){givenOptions={}}if(typeof target==="string"&&(Array.isArray(givenSearchWords)&&givenSearchWords.length||givenSearchWords instanceof RegExp||typeof givenSearchWords==="string"&&givenSearchWords.length)){var options=_objectSpread({marker:"<span class=\"tools-mark\">{1}</span>",normalizer:function normalizer(value){return typeof value==="string"?value.trim().toLowerCase():value},skipTagDelimitedParts:["<",">"]},givenOptions);target=target.trim();var markedTarget=[];var searchWords=[].concat(givenSearchWords);var index=0;var _iterator6=_createForOfIteratorHelper(searchWords),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _word=_step6.value;searchWords[index]=options.normalizer(_word);index+=1}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}var restTarget=target;var offset=0;/*
            Search for matches as long there is enough target text remaining to
            walk through.
        */for(var iteration=0;iteration<_context_js__WEBPACK_IMPORTED_MODULE_2__/* .MAXIMAL_NUMBER_OF_ITERATIONS */ .$Q.value;iteration++){var nearestRange=null;var currentRange=void 0;// Find the nearest next matching word.
var _iterator7=_createForOfIteratorHelper(searchWords),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var word=_step7.value;currentRange=findNormalizedMatchRange(restTarget,word,options.normalizer,options.skipTagDelimitedParts);if(currentRange&&(!nearestRange||currentRange[0]<nearestRange[0]))nearestRange=currentRange}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(nearestRange){if(nearestRange[0]>0)markedTarget.push(target.substring(offset,offset+nearestRange[0]));markedTarget.push(typeof options.marker==="string"?format(options.marker,target.substring(offset+nearestRange[0],offset+nearestRange[1])):options.marker(target.substring(offset+nearestRange[0],offset+nearestRange[1]),markedTarget));offset+=nearestRange[1];restTarget=target.substring(offset)}else{if(restTarget.length)markedTarget.push(restTarget);break}}return typeof options.marker==="string"?markedTarget.join(""):markedTarget}return target};/**
 * Validates the current string for using in a regular expression pattern.
 * Special regular expression chars will be escaped.
 * @param value - The string to format.
 * @returns The formatted string.
 */var maskForRegularExpression=function maskForRegularExpression(value){return value.replace(/([\\|.*$^+[\]()?\-{}])/g,"\\$1")};/**
 * Converts a dom selector to a prefixed dom selector string.
 * @param selector - A dom node selector.
 * @param selectorPrefix - A dom node selector prefix to take into account.
 * @returns Returns given selector prefixed.
 */var normalizeDomNodeSelector=function normalizeDomNodeSelector(selector,selectorPrefix){if(selectorPrefix===void 0){selectorPrefix=""}var domNodeSelectorPrefix="";if(selectorPrefix)domNodeSelectorPrefix="".concat(selectorPrefix," ");if(!(selector.startsWith(domNodeSelectorPrefix)||selector.trim().startsWith("<")))selector=domNodeSelectorPrefix+selector;return selector.trim()};/**
 * Normalizes a given phone number for automatic dialing or comparison.
 * @param value - Number to normalize.
 * @param dialable - Indicates whether the result should be dialed or
 * represented as lossless data.
 * @returns Normalized number.
 */var normalizePhoneNumber=function normalizePhoneNumber(value,dialable){if(dialable===void 0){dialable=true}if(typeof value==="string"||typeof value==="number"){var normalizedValue=String(value).trim();// Normalize country code prefix.
normalizedValue=normalizedValue.replace(/^[^0-9]*\+/,"00");// Remove alternate direct dial numbers.
normalizedValue=normalizedValue.replace(/([0-9].*?) *(,|o[rd]?)\.? ?-?[0-9]+$/,"$1");if(dialable)return normalizedValue.replace(/[^0-9]+/g,"");var separatorPattern="(?:[ /\\-]+)";// Remove unneeded area code zero in brackets.
normalizedValue=normalizedValue.replace(new RegExp("^(.+?)".concat(separatorPattern,"?\\(0\\)").concat(separatorPattern,"?")+"(.+)$"),"$1-$2");// Remove unneeded area code brackets.
normalizedValue=normalizedValue.replace(new RegExp("^(.+?)".concat(separatorPattern,"?\\((.+)\\)")+"".concat(separatorPattern,"?(.+)$")),"$1-$2-$3");/*
            Remove separators that don't mark semantics:
            1: Country code
            2: Area code
            3: Number
        */var compiledPattern=new RegExp("^(00[0-9]+)".concat(separatorPattern,"([0-9]+)").concat(separatorPattern)+"(.+)$");if(compiledPattern.test(normalizedValue))// Country code and area code matched.
normalizedValue=normalizedValue.replace(compiledPattern,function(_match,countryCode,areaCode,number){return"".concat(countryCode,"-").concat(areaCode,"-")+sliceAllExceptNumberAndLastSeparator(number)});else{/*
                One prefix code matched:
                1: Prefix code
                2: Number
            */compiledPattern=/^([0-9 ]+)[/-](.+)$/;var replacer=function replacer(_match,prefixCode,number){return"".concat(prefixCode.replace(/ +/,""),"-")+sliceAllExceptNumberAndLastSeparator(number)};if(compiledPattern.test(normalizedValue))// Prefer "/" or "-" over " " as area code separator.
normalizedValue=normalizedValue.replace(compiledPattern,replacer);else normalizedValue=normalizedValue.replace(new RegExp("^([0-9]+)".concat(separatorPattern,"(.+)$")),replacer)}return normalizedValue.replace(/[^0-9-]+/g,"").replace(/^-+$/,"")}return""};/**
 * Normalizes a given zip code for automatic address processing.
 * @param value - Number to normalize.
 * @returns Normalized number.
 */var normalizeZipCode=function normalizeZipCode(value){if(typeof value==="string"||typeof value==="number")return String(value).trim().replace(/^([^0-9]*[a-zA-Z]-)?(.+)$/,function(match,prefix,code){if(prefix)prefix=prefix.substring(prefix.length-2).charAt(0).toUpperCase()+"-";return(prefix!==null&&prefix!==void 0?prefix:"")+(code!==null&&code!==void 0?code:"").trim().replace(/[^0-9]+/g,"")});return""};/**
 * Converts a given serialized, base64 encoded or file path given object into a
 * native JavaScript one if possible.
 * @param serializedObject - Object as string.
 * @param scope - An optional scope which will be used to evaluate given object
 * in.
 * @param name - The name under given scope will be available.
 * @returns The parsed object if possible and null otherwise.
 */var parseEncodedObject=function parseEncodedObject(serializedObject,scope,name){var _imports$fs;if(scope===void 0){scope={}}if(name===void 0){name="scope"}if(!((_imports$fs=_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .imports */ .VW.fs)!==null&&_imports$fs!==void 0&&_imports$fs.readFileSync))throw new Error("File system api could not be loaded.");if(serializedObject.endsWith(".json")&&(0,_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .isFileSync */ .WY)(serializedObject))serializedObject=_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .imports */ .VW.fs.readFileSync(serializedObject,{encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ});serializedObject=serializedObject.trim();if(!serializedObject.startsWith("{"))serializedObject=eval("Buffer").from(serializedObject,"base64").toString(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ);var result=evaluate(serializedObject,{scope:_defineProperty({},name,scope)});if(_typeof(result.result)==="object")return result.result;return null};/**
 * Represents a given phone number. NOTE: Currently only support German phone
 * numbers.
 * @param value - Number to format.
 * @returns Formatted number.
 */var representPhoneNumber=function representPhoneNumber(value){if(["number","string"].includes((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(value))&&value){// Represent country code and leading area code zero.
var normalizedValue=// eslint-disable-next-line @typescript-eslint/no-base-to-string
String(value).replace(/^(00|\+)([0-9]+)-([0-9-]+)$/,"+$2 (0) $3");// Add German country code if not exists.
normalizedValue=normalizedValue.replace(/^0([1-9][0-9-]+)$/,"+49 (0) $1");// Separate area code from base number.
normalizedValue=normalizedValue.replace(/^([^-]+)-([0-9-]+)$/,"$1 / $2");// Partition base number in one triple and tuples or tuples only.
return normalizedValue.replace(/^(.*?)([0-9]+)(-?[0-9]*)$/,function(_match,prefix,number,suffix){return prefix+(number.length%2===0?number.replace(/([0-9]{2})/g,"$1 "):number.replace(/^([0-9]{3})([0-9]+)$/,function(_match,triple,rest){return"".concat(triple," ")+rest.replace(/([0-9]{2})/g,"$1 ").trim()})+suffix).trim()}).trim()}return""};/**
 * Slices all none numbers but preserves last separator.
 * @param value - String to process.
 * @returns - Sliced given value.
 */var sliceAllExceptNumberAndLastSeparator=function sliceAllExceptNumberAndLastSeparator(value){/*
        1: baseNumber
        2: directDialingNumberSuffix
    */var compiledPattern=/^(.*[0-9].*)-([0-9]+)$/;if(compiledPattern.test(value))return value.replace(compiledPattern,function(_match,baseNumber,directDialingNumberSuffix){return"".concat(baseNumber.replace(/[^0-9]+/g,""),"-")+directDialingNumberSuffix});return value.replace(/[^0-9]+/g,"")};

/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_148917__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_148917__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_149181__) {

__nested_webpack_require_149181__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_149181__.d(__nested_webpack_exports__, {
/* harmony export */   LI: function() { return /* binding */ round; },
/* harmony export */   RI: function() { return /* binding */ floor; },
/* harmony export */   W2: function() { return /* binding */ isNotANumber; },
/* harmony export */   mk: function() { return /* binding */ ceil; },
/* harmony export */   n$: function() { return /* binding */ getUTCTimestamp; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149181__(0);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_149181__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module number *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//**
 * Rounds a given number up accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var ceil=function ceil(number,digits){if(digits===void 0){digits=0}return Math.ceil(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number down accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var floor=function floor(number,digits){if(digits===void 0){digits=0}return Math.floor(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var round=function round(number,digits){if(digits===void 0){digits=0}return Math.round(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Determines corresponding utc timestamp for given date object.
 * @param value - Date to convert.
 * @param inMilliseconds - Indicates whether given number should be in
 * seconds (default) or milliseconds.
 * @returns Determined numerous value.
 */var getUTCTimestamp=function getUTCTimestamp(value,inMilliseconds){if(inMilliseconds===void 0){inMilliseconds=false}var date=[null,undefined].includes(value)?new Date:new Date(value);return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds())/(inMilliseconds?1:1000)};/**
 * Checks if given object is java scripts native "Number.NaN" object.
 * @param value - Value to check.
 * @returns Returns whether given value is not a number or not.
 */var isNotANumber=function isNotANumber(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_1__/* .determineType */ .Sj)(value)==="number"&&isNaN(value)};

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_152400__) {

/* harmony export */ __nested_webpack_require_152400__.d(__nested_webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ Lock; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Lock *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}/**
 * Represents the lock state.
 * @property locks - Mapping of lock descriptions to their corresponding
 * callbacks.
 */var Lock=/*#__PURE__*/function(){/**
     * Initializes locks.
     * @param locks - Mapping of a lock description to callbacks for calling
     * when given lock should be released.
     */function Lock(locks){if(locks===void 0){locks={}}_classCallCheck(this,Lock);_defineProperty(this,"lock",void 0);_defineProperty(this,"locks",void 0);this.locks=locks}/**
     * Calling this method introduces a starting point for a critical area with
     * potential race conditions. The area will be bind to given description
     * string. So don't use same names for different areas.
     * @param description - A short string describing the critical areas
     * properties.
     * @param callback - A procedure which should only be executed if the
     * interpreter isn't in the given critical area. The lock description
     * string will be given to the callback function.
     * @param autoRelease - Release the lock after execution of given callback.
     * @returns Returns a promise which will be resolved after releasing lock.
     */return _createClass(Lock,[{key:"acquire",value:function acquire(description,callback,autoRelease){var _this=this;if(autoRelease===void 0){autoRelease=false}return new Promise(function(resolve){var wrappedCallback=function wrappedCallback(description){var _result;var result;if(callback)result=callback(description);var finish=function finish(value){if(autoRelease)void _this.release(description);resolve(value);return value};if((_result=result)!==null&&_result!==void 0&&_result.then)return result.then(finish);finish(result);return result};if(description){if(Object.prototype.hasOwnProperty.call(_this.locks,description))_this.locks[description].push(wrappedCallback);else{_this.locks[description]=[];void wrappedCallback(description)}return}if(_this.lock)_this.lock.push(wrappedCallback);else{_this.lock=[];void wrappedCallback(description)}})}/**
     * Calling this method causes the given critical area to be finished and
     * all functions given to "acquire()" will be executed in right order.
     * @param description - A short string describing the critical areas
     * properties.
     * @returns Returns the return (maybe promise resolved) value of the
     * callback given to the "acquire" method.
     */},{key:"release",value:(function(){var _release=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(description){var _this$lock;var _callback,callback;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(!description){_context.n=4;break}if(!Object.prototype.hasOwnProperty.call(this.locks,description)){_context.n=3;break}_callback=this.locks[description].shift();if(!(_callback===undefined)){_context.n=1;break}delete this.locks[description];_context.n=3;break;case 1:_context.n=2;return _callback(description);case 2:return _context.a(2,_context.v);case 3:return _context.a(2);case 4:callback=(_this$lock=this.lock)===null||_this$lock===void 0?void 0:_this$lock.shift();if(!(callback===undefined)){_context.n=5;break}this.lock=undefined;_context.n=7;break;case 5:_context.n=6;return callback();case 6:return _context.a(2,_context.v);case 7:return _context.a(2)}},_callee,this)}));function release(_x){return _release.apply(this,arguments)}return release}())}])}();/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_161114__) {

/* harmony export */ __nested_webpack_require_161114__.d(__nested_webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ Semaphore; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Semaphore *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}/**
 * Represents the semaphore state.
 * @property queue - List of waiting resource requests.
 * @property numberOfFreeResources - Number free allowed concurrent resource
 * uses.
 * @property numberOfResources - Number of allowed concurrent resource uses.
 */var Semaphore=/*#__PURE__*/function(){/**
     * Initializes number of resources.
     * @param numberOfResources - Number of resources to manage.
     */function Semaphore(numberOfResources){if(numberOfResources===void 0){numberOfResources=2}_classCallCheck(this,Semaphore);_defineProperty(this,"queue",[]);_defineProperty(this,"numberOfResources",void 0);_defineProperty(this,"numberOfFreeResources",void 0);this.numberOfResources=numberOfResources;this.numberOfFreeResources=numberOfResources}/**
     * Acquires a new resource and runs given callback if available.
     * @returns A promise which will be resolved if requested resource is
     * available.
     */return _createClass(Semaphore,[{key:"acquire",value:function acquire(){var _this=this;return new Promise(function(resolve){if(_this.numberOfFreeResources<=0)_this.queue.push(resolve);else{_this.numberOfFreeResources-=1;resolve(_this.numberOfFreeResources)}})}/**
     * Releases a resource and runs a waiting resolver if there exists some.
     */},{key:"release",value:function release(){var callback=this.queue.shift();if(callback===undefined)this.numberOfFreeResources+=1;else callback(this.numberOfFreeResources)}}])}();/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_164680__) {

__nested_webpack_require_164680__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_164680__.d(__nested_webpack_exports__, {
/* harmony export */   L5: function() { return /* binding */ importFilesystemAPI; },
/* harmony export */   VW: function() { return /* binding */ imports; },
/* harmony export */   WY: function() { return /* binding */ isFileSync; },
/* harmony export */   Xp: function() { return /* binding */ copyFileSync; },
/* harmony export */   ZP: function() { return /* binding */ isDirectorySync; },
/* harmony export */   fo: function() { return /* binding */ isFile; },
/* harmony export */   hu: function() { return /* binding */ _walkDirectoryRecursivelySync; },
/* harmony export */   m3: function() { return /* binding */ copyFile; },
/* harmony export */   uD: function() { return /* binding */ copyDirectoryRecursiveSync; },
/* harmony export */   vX: function() { return /* binding */ copyDirectoryRecursive; },
/* harmony export */   wd: function() { return /* binding */ isDirectory; },
/* harmony export */   y3: function() { return /* binding */ _walkDirectoryRecursively; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_164680__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_164680__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_164680__(5);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_164680__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module filesystem *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};var imports={};var mkdirSync;var readdirSync;var readFileSync;var statSync;var writeFileSync;var mkdir;var readdir;var readFile;var stat;var writeFile;var basename;var join;var resolve;var importPromises=[];var importFilesystemAPI=function importFilesystemAPI(){if(importPromises.length>0)return Promise.all(importPromises);var fsImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs");void fsImportPromise.then(function(module){imports.fs=module;if(module){mkdirSync=module.mkdirSync;readdirSync=module.readdirSync;readFileSync=module.readFileSync;statSync=module.statSync;writeFileSync=module.writeFileSync}else{mkdirSync=null;readdirSync=null;readFileSync=null;statSync=null;writeFileSync=null}});var fsPromisesImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs/promises");void fsPromisesImportPromise.then(function(module){imports.fsPromises=module;if(module){mkdir=module.mkdir;readdir=module.readdir;readFile=module.readFile;stat=module.stat;writeFile=module.writeFile}else{mkdir=null;readdir=null;readFile=null;stat=null;writeFile=null}});var pathImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("path");void pathImportPromise.then(function(module){imports.path=module;if(module){basename=module.basename;join=module.join;resolve=module.resolve}else{basename=null;join=null;resolve=null}});importPromises.push(fsImportPromise,fsPromisesImportPromise,pathImportPromise);return Promise.all(importPromises)};/**
 * Copies given source directory via path to given target directory location
 * with same target name as source file has or copy to given complete target
 * directory path.
 * @param sourcePath - Path to directory to copy.
 * @param targetPath - Target directory or complete directory location to copy
 * in.
 * @param contents - Indicates whether we only want to copy content of source
 * path without recreating the sourcefile itself on target location.
 * @param callback - Function to invoke for each traversed file.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Promise holding the determined target directory path.
 */var copyDirectoryRecursive=/*#__PURE__*/function(){var _copyDirectoryRecursive=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(sourcePath,targetPath,contents,callback,readOptions,writeOptions){var _iterator,_step,_currentSourceFile$st,currentSourceFile,currentTargetPath,_t,_t2,_t3,_t4,_t5;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(contents===void 0){contents=false}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(basename&&join&&mkdir&&resolve){_context.n=1;break}throw new Error("Could not load filesystem functions.");case 1:sourcePath=resolve(sourcePath);_t=!contents;if(!_t){_context.n=3;break}_context.n=2;return isDirectory(targetPath);case 2:_t=_context.v;case 3:if(!_t){_context.n=4;break}targetPath=resolve(targetPath,basename(sourcePath));case 4:_context.p=4;_context.n=5;return mkdir(targetPath);case 5:_context.n=7;break;case 6:_context.p=6;_t2=_context.v;if(!(_t2.code!=="EEXIST")){_context.n=7;break}throw _t2;case 7:_t3=_createForOfIteratorHelper;_context.n=8;return _walkDirectoryRecursively(sourcePath,callback);case 8:_iterator=_t3(_context.v);_context.p=9;_iterator.s();case 10:if((_step=_iterator.n()).done){_context.n=17;break}currentSourceFile=_step.value;currentTargetPath=join(targetPath,currentSourceFile.path.substring(sourcePath.length));if(!((_currentSourceFile$st=currentSourceFile.stats)!==null&&_currentSourceFile$st!==void 0&&_currentSourceFile$st.isDirectory())){_context.n=15;break}_context.p=11;_context.n=12;return mkdir(currentTargetPath);case 12:_context.n=14;break;case 13:_context.p=13;_t4=_context.v;if(!(_t4.code!=="EEXIST")){_context.n=14;break}throw _t4;case 14:_context.n=16;break;case 15:_context.n=16;return copyFile(currentSourceFile.path,currentTargetPath,readOptions,writeOptions);case 16:_context.n=10;break;case 17:_context.n=19;break;case 18:_context.p=18;_t5=_context.v;_iterator.e(_t5);case 19:_context.p=19;_iterator.f();return _context.f(19);case 20:return _context.a(2,targetPath)}},_callee,null,[[11,13],[9,18,19,20],[4,6]])}));function copyDirectoryRecursive(_x,_x2,_x3,_x4,_x5,_x6){return _copyDirectoryRecursive.apply(this,arguments)}return copyDirectoryRecursive}();/**
 * Copies given source directory via path to given target directory location
 * with same target name as source file has or copy to given complete target
 * directory path.
 * @param sourcePath - Path to directory to copy.
 * @param targetPath - Target directory or complete directory location to copy
 * in.
 * @param contents - Indicates whether we only want to copy content of source
 * path without recreating the sourcefile itself on target location.
 * @param callback - Function to invoke for each traversed file.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target directory path.
 */var copyDirectoryRecursiveSync=function copyDirectoryRecursiveSync(sourcePath,targetPath,contents,callback,readOptions,writeOptions){if(contents===void 0){contents=false}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(!(basename&&join&&mkdirSync&&resolve))throw new Error("Could not load filesystem functions.");sourcePath=resolve(sourcePath);if(!contents&&isDirectorySync(targetPath))targetPath=resolve(targetPath,basename(sourcePath));// NOTE: Try/Check if target folder needs to be created.
try{mkdirSync(targetPath)}catch(error){if(error.code!=="EEXIST")throw error}for(var _i=0,_walkDirectoryRecursi=_walkDirectoryRecursivelySync(sourcePath,callback);_i<_walkDirectoryRecursi.length;_i++){var _currentSourceFile$st2;var currentSourceFile=_walkDirectoryRecursi[_i];var currentTargetPath=join(targetPath,currentSourceFile.path.substring(sourcePath.length));if((_currentSourceFile$st2=currentSourceFile.stats)!==null&&_currentSourceFile$st2!==void 0&&_currentSourceFile$st2.isDirectory())try{mkdirSync(currentTargetPath)}catch(error){if(error.code!=="EEXIST")throw error}else copyFileSync(currentSourceFile.path,currentTargetPath,readOptions,writeOptions)}return targetPath};/**
 * Copies given source file via path to given target directory location with
 * same target name as source file has or copy to given complete target file
 * path.
 * @param sourcePath - Path to file to copy.
 * @param targetPath - Target directory or complete file location to copy to.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target file path.
 */var copyFile=/*#__PURE__*/function(){var _copyFile=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(sourcePath,targetPath,readOptions,writeOptions){var _t6,_t7;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(basename&&readFile&&resolve&&writeFile){_context2.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context2.n=2;return isDirectory(targetPath);case 2:if(!_context2.v){_context2.n=3;break}targetPath=resolve(targetPath,basename(sourcePath));case 3:_t6=writeFile;_t7=targetPath;_context2.n=4;return readFile(sourcePath,readOptions);case 4:_context2.n=5;return _t6(_t7,_context2.v,writeOptions);case 5:return _context2.a(2,targetPath)}},_callee2)}));function copyFile(_x7,_x8,_x9,_x0){return _copyFile.apply(this,arguments)}return copyFile}();/**
 * Copies given source file via path to given target directory location with
 * same target name as source file has or copy to given complete target file
 * path.
 * @param sourcePath - Path to file to copy.
 * @param targetPath - Target directory or complete file location to copy to.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target file path.
 */var copyFileSync=function copyFileSync(sourcePath,targetPath,readOptions,writeOptions){if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(!(basename&&readFileSync&&resolve&&writeFileSync))throw new Error("Could not load filesystem functions.");/*
        NOTE: If target path references a directory a new file with the same
        name will be created.
    */if(isDirectorySync(targetPath))targetPath=resolve(targetPath,basename(sourcePath));writeFileSync(targetPath,readFileSync(sourcePath,readOptions),writeOptions);return targetPath};/**
 * Checks if given path points to a valid directory.
 * @param filePath - Path to directory.
 * @returns A promise holding a boolean which indicates directory existence.
 */var isDirectory=/*#__PURE__*/function(){var _isDirectory=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(filePath){var _t8;return _regenerator().w(function(_context3){while(1)switch(_context3.p=_context3.n){case 0:if(stat){_context3.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context3.p=1;_context3.n=2;return stat(filePath);case 2:return _context3.a(2,_context3.v.isDirectory());case 3:_context3.p=3;_t8=_context3.v;if(!(Object.prototype.hasOwnProperty.call(_t8,"code")&&["ENOENT","ENOTDIR"].includes(_t8.code))){_context3.n=4;break}return _context3.a(2,false);case 4:throw _t8;case 5:return _context3.a(2)}},_callee3,null,[[1,3]])}));function isDirectory(_x1){return _isDirectory.apply(this,arguments)}return isDirectory}();/**
 * Checks if given path points to a valid directory.
 * @param filePath - Path to directory.
 * @returns A boolean which indicates directory existence.
 */var isDirectorySync=function isDirectorySync(filePath){if(!statSync)throw new Error("Could not load filesystem functions.");try{return statSync(filePath).isDirectory()}catch(error){if(Object.prototype.hasOwnProperty.call(error,"code")&&["ENOENT","ENOTDIR"].includes(error.code))return false;throw error}};/**
 * Checks if given path points to a valid file.
 * @param filePath - Path to directory.
 * @returns A promise holding a boolean which indicates directory existence.
 */var isFile=/*#__PURE__*/function(){var _isFile=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(filePath){var _t9;return _regenerator().w(function(_context4){while(1)switch(_context4.p=_context4.n){case 0:if(stat){_context4.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context4.p=1;_context4.n=2;return stat(filePath);case 2:return _context4.a(2,_context4.v.isFile());case 3:_context4.p=3;_t9=_context4.v;if(!(Object.prototype.hasOwnProperty.call(_t9,"code")&&["ENOENT","ENOTDIR"].includes(_t9.code))){_context4.n=4;break}return _context4.a(2,false);case 4:throw _t9;case 5:return _context4.a(2)}},_callee4,null,[[1,3]])}));function isFile(_x10){return _isFile.apply(this,arguments)}return isFile}();/**
 * Checks if given path points to a valid file.
 * @param filePath - Path to file.
 * @returns A boolean which indicates file existence.
 */var isFileSync=function isFileSync(filePath){if(!statSync)throw new Error("Could not load filesystem functions.");try{return statSync(filePath).isFile()}catch(error){if(Object.prototype.hasOwnProperty.call(error,"code")&&["ENOENT","ENOTDIR"].includes(error.code))return false;throw error}};/**
 * Iterates through given directory structure recursively and calls given
 * callback for each found file. Callback gets file path and corresponding stat
 * object as argument.
 * @param directoryPath - Path to directory structure to traverse.
 * @param callback - Function to invoke for each traversed file and potentially
 * manipulate further traversing in alphabetical sorted order.
 * If it returns "null" or a promise resolving to "null", no further files
 * will be traversed afterward.
 * If it handles a directory and returns "false" or a promise resolving to
 * "false" no traversing into that directory will occur.
 * @param options - Options to use for nested "readdir" calls.
 * @returns A promise holding the determined files.
 */var _walkDirectoryRecursively=/*#__PURE__*/function(){var _walkDirectoryRecursively2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(directoryPath,callback,options){var files,_iterator2,_step2,directoryEntry,filePath,_file,finalFiles,_i2,_files,_file$stats,file,result,_t0,_t1,_t10,_t11;return _regenerator().w(function(_context5){while(1)switch(_context5.p=_context5.n){case 0:if(callback===void 0){callback=null}if(options===void 0){options=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ}if(readdir&&resolve&&stat){_context5.n=1;break}throw new Error("Could not load filesystem functions.");case 1:files=[];_t0=_createForOfIteratorHelper;_context5.n=2;return readdir(directoryPath,typeof options==="string"?{encoding:options,withFileTypes:true}:_objectSpread(_objectSpread({},options),{},{withFileTypes:true}));case 2:_iterator2=_t0(_context5.v);_context5.p=3;_iterator2.s();case 4:if((_step2=_iterator2.n()).done){_context5.n=10;break}directoryEntry=_step2.value;filePath=resolve(directoryPath,directoryEntry.name);_file={directoryPath:directoryPath,directoryEntry:directoryEntry,error:null,name:directoryEntry.name,path:filePath,stats:null};_context5.p=5;_context5.n=6;return stat(filePath);case 6:_file.stats=_context5.v;_context5.n=8;break;case 7:_context5.p=7;_t1=_context5.v;_file.error=_t1;case 8:files.push(_file);case 9:_context5.n=4;break;case 10:_context5.n=12;break;case 11:_context5.p=11;_t10=_context5.v;_iterator2.e(_t10);case 12:_context5.p=12;_iterator2.f();return _context5.f(12);case 13:if(callback)/*
            NOTE: Directories and have to be iterated first to be able to
            avoid deeper unwanted traversing.
        */files.sort(function(firstFile,secondFile){var _firstFile$stats,_secondFile$stats2;if((_firstFile$stats=firstFile.stats)!==null&&_firstFile$stats!==void 0&&_firstFile$stats.isDirectory()){var _secondFile$stats;if((_secondFile$stats=secondFile.stats)!==null&&_secondFile$stats!==void 0&&_secondFile$stats.isDirectory())return 0;return-1}if((_secondFile$stats2=secondFile.stats)!==null&&_secondFile$stats2!==void 0&&_secondFile$stats2.isDirectory())return 1;return 0});finalFiles=[];_i2=0,_files=files;case 14:if(!(_i2<_files.length)){_context5.n=21;break}file=_files[_i2];finalFiles.push(file);result=callback?callback(file):undefined;if(!(result===null)){_context5.n=15;break}return _context5.a(3,21);case 15:if(!(_typeof(result)==="object"&&"then"in result)){_context5.n=17;break}_context5.n=16;return result;case 16:result=_context5.v;case 17:if(!(result===null)){_context5.n=18;break}return _context5.a(3,21);case 18:if(!(result!==false&&(_file$stats=file.stats)!==null&&_file$stats!==void 0&&_file$stats.isDirectory())){_context5.n=20;break}_t11=finalFiles;_context5.n=19;return _walkDirectoryRecursively(file.path,callback,options);case 19:finalFiles=_t11.concat.call(_t11,_context5.v);case 20:_i2++;_context5.n=14;break;case 21:return _context5.a(2,finalFiles)}},_callee5,null,[[5,7],[3,11,12,13]])}));function walkDirectoryRecursively(_x11,_x12,_x13){return _walkDirectoryRecursively2.apply(this,arguments)}return walkDirectoryRecursively}();/**
 * Iterates through given directory structure recursively and calls given
 * callback for each found file. Callback gets file path and corresponding
 * stats object as argument.
 * @param directoryPath - Path to directory structure to traverse.
 * @param callback - Function to invoke for each traversed file.
 * @param options - Options to use for nested "readdir" calls.
 * @returns Determined list if all files.
 */var _walkDirectoryRecursivelySync=function walkDirectoryRecursivelySync(directoryPath,callback,options){if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(options===void 0){options=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ}if(!(readdirSync&&resolve&&statSync))throw new Error("Could not load filesystem functions.");var files=[];var _iterator3=_createForOfIteratorHelper(readdirSync(directoryPath,typeof options==="string"?{encoding:options,withFileTypes:true}:_objectSpread(_objectSpread({},options),{},{withFileTypes:true}))),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var directoryEntry=_step3.value;var filePath=resolve(directoryPath,directoryEntry.name);var _file2={directoryPath:directoryPath,directoryEntry:directoryEntry,error:null,name:directoryEntry.name,path:filePath,stats:null};try{_file2.stats=statSync(filePath)}catch(error){_file2.error=error}files.push(_file2)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}var finalFiles=[];if(callback){/*
            NOTE: Directories have to be iterated first to potentially
            avoid deeper iterations.
        */files.sort(function(firstFile,secondFile){var _firstFile$stats2,_secondFile$stats4;if((_firstFile$stats2=firstFile.stats)!==null&&_firstFile$stats2!==void 0&&_firstFile$stats2.isDirectory()){var _secondFile$stats3;if((_secondFile$stats3=secondFile.stats)!==null&&_secondFile$stats3!==void 0&&_secondFile$stats3.isDirectory())return 0;return-1}if((_secondFile$stats4=secondFile.stats)!==null&&_secondFile$stats4!==void 0&&_secondFile$stats4.isDirectory())return 1;return 0});var _iterator4=_createForOfIteratorHelper(files),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _file$stats2;var file=_step4.value;finalFiles.push(file);var result=callback(file);if(result===null)break;if(result!==false&&(_file$stats2=file.stats)!==null&&_file$stats2!==void 0&&_file$stats2.isDirectory())finalFiles=finalFiles.concat(_walkDirectoryRecursivelySync(file.path,callback,options))}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}return finalFiles};

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_191251__) {

__nested_webpack_require_191251__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_191251__.d(__nested_webpack_exports__, {
/* harmony export */   dG: function() { return /* binding */ stopPropagation; },
/* harmony export */   p0: function() { return /* binding */ trailingThrottle; },
/* harmony export */   sg: function() { return /* binding */ debounce; },
/* harmony export */   wR: function() { return /* binding */ timeout; },
/* harmony export */   wo: function() { return /* binding */ preventDefault; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191251__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191251__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module utility *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Prevents event functions from triggering too close after each trigger by
 * defining a minimal span between each function call. Additional arguments
 * given to this function will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var debounce=function debounce(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len=arguments.length,additionalArguments=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){additionalArguments[_key-2]=arguments[_key]}var timeoutPromise;var nextResultPromiseResolver;var nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve});return function(){var _timeoutPromise;for(var _len2=arguments.length,parameters=new Array(_len2),_key2=0;_key2<_len2;_key2++){parameters[_key2]=arguments[_key2]}parameters=parameters.concat(additionalArguments);(_timeoutPromise=timeoutPromise)===null||_timeoutPromise===void 0||_timeoutPromise.clear();timeoutPromise=timeout(function(){nextResultPromiseResolver(callback.apply(void 0,_toConsumableArray(parameters)));nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve})},thresholdInMilliseconds);return nextResultPromise}};/**
 * Prevents event functions from triggering too often by defining a minimal
 * span between each function call. Additional arguments given to this function
 * will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var trailingThrottle=function trailingThrottle(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len3=arguments.length,additionalArguments=new Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){additionalArguments[_key3-2]=arguments[_key3]}var timeoutID=null;var recentParameters=[];return function(){for(var _len4=arguments.length,parameters=new Array(_len4),_key4=0;_key4<_len4;_key4++){parameters[_key4]=arguments[_key4]}recentParameters=parameters;if(timeoutID)return;timeoutID=setTimeout(function(){callback.apply(void 0,_toConsumableArray(recentParameters).concat(additionalArguments));// Reset for next cycle.
timeoutID=null;recentParameters=[]},thresholdInMilliseconds)}};var preventDefault=function preventDefault(event){event.preventDefault()};var stopPropagation=function stopPropagation(event){event.stopPropagation()};/**
 * Triggers given callback after given duration. Supports unlimited
 * duration length and returns a promise which will be resolved after given
 * duration has been passed.
 * @param parameters - Observes the first three existing parameters. If one
 * is a number it will be interpreted as delay in milliseconds until given
 * callback will be triggered. If one is of type function it will be used
 * as callback and if one is of type boolean it will indicate if returning
 * promise should be rejected or resolved if given internally created
 * timeout should be canceled. Additional parameters will be forwarded to
 * given callback.
 * @returns A promise resolving after given delay or being rejected if
 * value "true" is within one of the first three parameters. The promise
 * holds a boolean indicating whether timeout has been canceled or
 * resolved.
 */var timeout=function timeout(){for(var _len5=arguments.length,parameters=new Array(_len5),_key5=0;_key5<_len5;_key5++){parameters[_key5]=arguments[_key5]}var callback=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .NOOP */ .tE;var delayInMilliseconds=0;var throwOnTimeoutClear=false;for(var _i=0,_parameters=parameters;_i<_parameters.length;_i++){var value=_parameters[_i];if(typeof value==="number"&&!isNaN(value))delayInMilliseconds=value;else if(typeof value==="boolean")throwOnTimeoutClear=value;else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(value))callback=value}var rejectCallback;var resolveCallback;var result=new Promise(function(resolve,reject){rejectCallback=reject;resolveCallback=resolve});var wrappedCallback=function wrappedCallback(){var _callback;(_callback=callback).call.apply(_callback,[result].concat(parameters));resolveCallback(false)};var maximumTimeoutDelayInMilliseconds=2147483647;if(delayInMilliseconds<=maximumTimeoutDelayInMilliseconds)result.timeoutID=setTimeout(wrappedCallback,delayInMilliseconds);else{/*
            Determine the number of times we need to delay by maximum
            possible timeout duration.
        */var numberOfRemainingTimeouts=Math.floor(delayInMilliseconds/maximumTimeoutDelayInMilliseconds);var finalTimeoutDuration=delayInMilliseconds%maximumTimeoutDelayInMilliseconds;var _delay=function delay(){if(numberOfRemainingTimeouts>0){numberOfRemainingTimeouts-=1;result.timeoutID=setTimeout(_delay,maximumTimeoutDelayInMilliseconds)}else result.timeoutID=setTimeout(wrappedCallback,finalTimeoutDuration)};_delay()}result.clear=function(){if(Object.prototype.hasOwnProperty.call(result,"timeoutID")){clearTimeout(result.timeoutID);(throwOnTimeoutClear?rejectCallback:resolveCallback)(true)}};return result};

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_199157__) {

/* harmony export */ __nested_webpack_require_199157__.d(__nested_webpack_exports__, {
/* harmony export */   $y: function() { return /* binding */ isSwitchExpression; },
/* harmony export */   G3: function() { return /* binding */ isCondition; },
/* harmony export */   Gc: function() { return /* binding */ isAndExpression; },
/* harmony export */   HK: function() { return /* binding */ isConcatExpression; },
/* harmony export */   MP: function() { return /* binding */ isIfExpression; },
/* harmony export */   YG: function() { return /* binding */ isOperation; },
/* harmony export */   Z9: function() { return /* binding */ isMappingExpression; },
/* harmony export */   ZI: function() { return /* binding */ isArrayContainsExpression; },
/* harmony export */   bF: function() { return /* binding */ isUnaryOperation; },
/* harmony export */   bQ: function() { return /* binding */ isSpecificExpression; },
/* harmony export */   cB: function() { return /* binding */ isSelector; },
/* harmony export */   g6: function() { return /* binding */ isOrExpression; },
/* harmony export */   ml: function() { return /* binding */ isValue; }
/* harmony export */ });
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_199157__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var isSpecificExpression=function isSpecificExpression(expression,indicatorKey,properties){if(properties===void 0){properties=[]}if(!((0,_indicators_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(expression)&&Object.prototype.hasOwnProperty.call(expression,indicatorKey)))return false;var _iterator=_createForOfIteratorHelper(properties),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var name=_step.value;if(!Object.prototype.hasOwnProperty.call(expression,name))return false}}catch(err){_iterator.e(err)}finally{_iterator.f()}return true};var isCondition=function isCondition(expression){return isSpecificExpression(expression,"$comparator",["value1","value2"])};var isAndExpression=function isAndExpression(expression){return isSpecificExpression(expression,"$and")};var isOrExpression=function isOrExpression(expression){return isSpecificExpression(expression,"$or")};var isConcatExpression=function isConcatExpression(expression){return isSpecificExpression(expression,"$concat")};var isMappingExpression=function isMappingExpression(expression){return isSpecificExpression(expression,"$mapping",["data"])};var isOperation=function isOperation(expression){return isSpecificExpression(expression,"$operator",["operand1","operand2"])};var isUnaryOperation=function isUnaryOperation(expression){return isSpecificExpression(expression,"$operator",["operand"])};var isIfExpression=function isIfExpression(expression){return isSpecificExpression(expression,"$if")};var isSwitchExpression=function isSwitchExpression(expression){return isSpecificExpression(expression,"$switch")};var isArrayContainsExpression=function isArrayContainsExpression(expression){return isSpecificExpression(expression,"$arrayContains")};var isSelector=function isSelector(expression){return isSpecificExpression(expression,"$select")};var isValue=function isValue(expression){return!(isSelector(expression)||isCondition(expression)||isUnaryOperation(expression)||isOperation(expression)||isAndExpression(expression)||isOrExpression(expression)||isConcatExpression(expression)||isMappingExpression(expression)||isIfExpression(expression)||isSwitchExpression(expression)||isArrayContainsExpression(expression))};

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_204319__) {

__nested_webpack_require_204319__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_204319__.d(__nested_webpack_exports__, {
/* harmony export */   A_: function() { return /* binding */ LEVELS; },
/* harmony export */   Vy: function() { return /* binding */ Logger; },
/* harmony export */   Wh: function() { return /* binding */ LEVELS_COLOR; }
/* harmony export */ });
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204319__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204319__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204319__(4);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204319__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Logger *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _Logger;function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};var LEVELS=["error","critical","warn","info","debug"];var LEVELS_COLOR=[_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.red,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.magenta,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.yellow,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.green,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.blue];/**
 * This plugin provides such interface logic like generic controller logic for
 * integrating plugins into $, mutual exclusion for dependent gui elements,
 * logging additional string, array or function handling. A set of helper
 * functions to parse  option objects dom trees or handle events is also
 * provided.
 * @property level - Logging level.
 * @property name - Logger description.
 */var Logger=/*#__PURE__*/function(){/**
     * Initializes logger.
     * @param options - Options to set.
     */function Logger(options){if(options===void 0){options={}}_classCallCheck(this,Logger);_defineProperty(this,"level",Logger.defaultLevel);_defineProperty(this,"name",Logger.defaultName);this.configure(options);Logger.instances[this.name]=this}/**
     * Configures logger.
     * @param options - Options to set.
     * @param options.name - Description of the logger instance.
     * @param options.level - Logging level to configure.
     */return _createClass(Logger,[{key:"configure",value:function configure(_ref){var name=_ref.name,level=_ref.level;if(level)this.level=level;else this.level=Logger.defaultLevel;if(name)this.name=name;else this.name=Logger.defaultName}/**
     * Shows the given object's representation in the browsers console if
     * possible or in a standalone alert-window as fallback.
     * @param object - Any object to print.
     * @param force - If set to "true" given input will be shown independently
     * of current logging configuration or interpreter's console
     * implementation.
     * @param avoidAnnotation - If set to "true" given input has no module or
     * log level specific annotations.
     * @param level - Description of log messages importance.
     * @param additionalArguments - Additional values to print.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"log",value:(function(){var _log=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(object,force,avoidAnnotation,level){var currentLevelIndex,levelIndex,_globalContext$consol,messages,annotation,_len,additionalArguments,_key,multiLineAnnotation,lineLength,remainingLength,halfRemainingLength,consoleMethodName,_globalContext$window,_args=arguments;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(object===void 0){object=""}if(force===void 0){force=false}if(avoidAnnotation===void 0){avoidAnnotation=false}if(level===void 0){level="info"}currentLevelIndex=LEVELS.indexOf(this.level);levelIndex=LEVELS.indexOf(level);if(!(force||currentLevelIndex>=levelIndex)){_context.n=9;break}messages=[];annotation="".concat(LEVELS_COLOR[levelIndex]).concat(level)+"".concat(_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default,":").concat(this.name,":")+"".concat((new Date).toISOString(),":");for(_len=_args.length,additionalArguments=new Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){additionalArguments[_key-4]=_args[_key]}if(!avoidAnnotation){_context.n=1;break}messages.push(object);_context.n=6;break;case 1:if(!(typeof object==="string")){_context.n=2;break}messages.push.apply(messages,[annotation,object].concat(additionalArguments));_context.n=6;break;case 2:if(!((0,_indicators_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumeric */ .kf)(object)||typeof object==="boolean")){_context.n=3;break}messages.push.apply(messages,[annotation,object.toString()].concat(additionalArguments));_context.n=6;break;case 3:multiLineAnnotation=annotation.substring(0,annotation.length-1);lineLength=79-2;// Color codes are invisible so we have to add it.
remainingLength=lineLength+LEVELS_COLOR[levelIndex].length+_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default.length-multiLineAnnotation.length;halfRemainingLength=Math.floor(remainingLength/2);_context.n=4;return this.log(",".concat("-".repeat(halfRemainingLength))+multiLineAnnotation+"-".repeat(halfRemainingLength)+"".concat("-".repeat(remainingLength%2),","),force,true,level);case 4:_context.n=5;return this.log(object,force,true,level);case 5:_context.n=6;return this.log("'".concat("-".repeat(lineLength),"'"),force,true,level);case 6:// NOTE: There is no native "console.critical" method.
consoleMethodName=level==="critical"?"error":level;if(!messages.length){_context.n=9;break}if(!(typeof process!=="undefined"&&process.stdout)){_context.n=8;break}_context.n=7;return new Promise(function(resolve,reject){process.stdout.write("".concat(messages.map(String).join(" "),"\n"),function(error){if(error)/*
                                            eslint-disable
                                            prefer-promise-reject-errors
                                        */reject(error);/*
                                            eslint-enable
                                            prefer-promise-reject-errors
                                        */else resolve()})});case 7:_context.n=9;break;case 8:if(!(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console&&consoleMethodName in _context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)||_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console[consoleMethodName]===_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE){if(Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz,"window")&&Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window,"alert"))(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.alert(messages.join(" "))}else(_globalContext$consol=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)[consoleMethodName].apply(_globalContext$consol,messages);case 9:return _context.a(2)}},_callee,this)}));function log(_x,_x2,_x3,_x4){return _log.apply(this,arguments)}return log}()/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */)},{key:"info",value:function info(object){if(object===void 0){object=""}for(var _len2=arguments.length,additionalArguments=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){additionalArguments[_key2-1]=arguments[_key2]}return this.log.apply(this,[object,false,false,"info"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"debug",value:function debug(object){if(object===void 0){object=""}for(var _len3=arguments.length,additionalArguments=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){additionalArguments[_key3-1]=arguments[_key3]}return this.log.apply(this,[object,false,false,"debug"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"error",value:function error(object){if(object===void 0){object=""}for(var _len4=arguments.length,additionalArguments=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){additionalArguments[_key4-1]=arguments[_key4]}return this.log.apply(this,[object,true,false,"error"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"critical",value:function critical(object){if(object===void 0){object=""}for(var _len5=arguments.length,additionalArguments=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){additionalArguments[_key5-1]=arguments[_key5]}return this.log.apply(this,[object,true,false,"critical"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"warn",value:function warn(object){if(object===void 0){object=""}for(var _len6=arguments.length,additionalArguments=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){additionalArguments[_key6-1]=arguments[_key6]}return this.log.apply(this,[object,false,false,"warn"].concat(additionalArguments))}/**
     * Dumps a given object in a human-readable format.
     * @param object - Any object to show.
     * @param level - Number of levels to dig into given object recursively.
     * @param currentLevel - Maximal number of recursive function calls to
     * represent given object.
     * @returns Returns the serialized version of given object.
     */}],[{key:"configureAllInstances",value:/**
     * Configures all logger instances.
     * @param options - Options to set.
     */function configureAllInstances(options){if(options===void 0){options={}}if(options.level)Logger.defaultLevel=options.level;if(options.name)Logger.defaultName=options.name;for(var _i=0,_Object$values=Object.values(Logger.instances);_i<_Object$values.length;_i++){var logger=_Object$values[_i];logger.configure(options)}}},{key:"show",value:function show(object,level,currentLevel){if(level===void 0){level=3}if(currentLevel===void 0){currentLevel=0}var output="";if((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(object)==="object"){for(var _i2=0,_Object$entries=Object.entries(object);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];output+="".concat(key,": ");if(currentLevel<=level)output+=Logger.show(value,level,currentLevel+1);else output+=String(value);output+="\n"}return output.trim()}output=String(object).trim();return"".concat(output," (Type: \"").concat((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(object),"\")")}}])}();_Logger=Logger;_defineProperty(Logger,"defaultLevel","warn");_defineProperty(Logger,"defaultName","app");_defineProperty(Logger,"selfClass",_Logger);_defineProperty(Logger,"instances",{});_defineProperty(Logger,"runtimeVersion",Math.random());/* harmony default export */ __nested_webpack_exports__.Ay = (Logger);

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_222850__) {

__nested_webpack_require_222850__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_222850__.d(__nested_webpack_exports__, {
/* harmony export */   Am: function() { return /* binding */ unique; },
/* harmony export */   En: function() { return /* binding */ paginate; },
/* harmony export */   Hb: function() { return /* binding */ removeArrayItem; },
/* harmony export */   Ht: function() { return /* binding */ extractIfPropertyMatches; },
/* harmony export */   Ny: function() { return /* binding */ _permute2; },
/* harmony export */   QR: function() { return /* binding */ makeRange; },
/* harmony export */   ST: function() { return /* binding */ aggregatePropertyIfEqual; },
/* harmony export */   UX: function() { return /* binding */ sortTopological; },
/* harmony export */   _2: function() { return /* binding */ sumUpProperty; },
/* harmony export */   bH: function() { return /* binding */ permuteLength; },
/* harmony export */   dO: function() { return /* binding */ deleteEmptyItems; },
/* harmony export */   gv: function() { return /* binding */ makeArray; },
/* harmony export */   h1: function() { return /* binding */ merge; },
/* harmony export */   o6: function() { return /* binding */ extract; },
/* harmony export */   q6: function() { return /* binding */ extractIfPropertyExists; },
/* harmony export */   u7: function() { return /* binding */ extractIfMatches; },
/* harmony export */   y$: function() { return /* binding */ intersect; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_222850__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_222850__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module array *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};/**
 * Summarizes given property of given item list.
 * @param data - Array of objects with given property name.
 * @param propertyName - Property name to summarize.
 * @param defaultValue - Value to return if property values doesn't match.
 * @returns Aggregated value.
 */var aggregatePropertyIfEqual=function aggregatePropertyIfEqual(data,propertyName,defaultValue){if(defaultValue===void 0){defaultValue=""}var result=defaultValue;if(Array.isArray(data)&&data.length&&Object.prototype.hasOwnProperty.call(data[0],propertyName)){result=data[0][propertyName];for(var _i=0,_makeArray=makeArray(data);_i<_makeArray.length;_i++){var item=_makeArray[_i];if(item[propertyName]!==result)return defaultValue}}return result};/**
 * Deletes every item witch has only empty attributes for given property names.
 * If given property names are empty each attribute will be considered. The
 * empty string, "null" and "undefined" will be interpreted as empty.
 * @param data - Data to filter.
 * @param propertyNames - Properties to consider.
 * @returns Given data without empty items.
 */var deleteEmptyItems=function deleteEmptyItems(data,propertyNames){if(propertyNames===void 0){propertyNames=[]}var result=[];for(var _i2=0,_makeArray2=makeArray(data);_i2<_makeArray2.length;_i2++){var item=_makeArray2[_i2];var empty=true;for(var _i3=0,_Object$entries=Object.entries(item);_i3<_Object$entries.length;_i3++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i3],2),propertyName=_Object$entries$_i[0],value=_Object$entries$_i[1];if(!["",null,undefined].includes(value)&&(!propertyNames.length||makeArray(propertyNames).includes(propertyName))){empty=false;break}}if(!empty)result.push(item)}return result};/**
 * Extracts all properties from all items which occur in given property names.
 * @param data - Data where each item should be sliced.
 * @param propertyNames - Property names to extract.
 * @returns Data with sliced items.
 */var extract=function extract(data,propertyNames){var result=[];for(var _i4=0,_makeArray3=makeArray(data);_i4<_makeArray3.length;_i4++){var item=_makeArray3[_i4];var newItem={};for(var _i5=0,_makeArray4=makeArray(propertyNames);_i5<_makeArray4.length;_i5++){var propertyName=_makeArray4[_i5];if(Object.prototype.hasOwnProperty.call(item,propertyName))newItem[propertyName]=item[propertyName]}result.push(newItem)}return result};/**
 * Extracts all values which matches given regular expression.
 * @param data - Data to filter.
 * @param regularExpression - Pattern to match for.
 * @returns Filtered data.
 */var extractIfMatches=function extractIfMatches(data,regularExpression){if(!regularExpression)return makeArray(data);var result=[];for(var _i6=0,_makeArray5=makeArray(data);_i6<_makeArray5.length;_i6++){var value=_makeArray5[_i6];if((typeof regularExpression==="string"?new RegExp(regularExpression):regularExpression).test(value))result.push(value)}return result};/**
 * Filters given data if given property is set or not.
 * @param data - Data to filter.
 * @param propertyName - Property name to check for existence.
 * @returns Given data without the items which doesn't have specified property.
 */var extractIfPropertyExists=function extractIfPropertyExists(data,propertyName){if(data&&propertyName){var result=[];for(var _i7=0,_makeArray6=makeArray(data);_i7<_makeArray6.length;_i7++){var item=_makeArray6[_i7];var exists=false;for(var _i8=0,_Object$entries2=Object.entries(item);_i8<_Object$entries2.length;_i8++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i8],2),key=_Object$entries2$_i[0],value=_Object$entries2$_i[1];if(key===propertyName&&![null,undefined].includes(value)){exists=true;break}}if(exists)result.push(item)}return result}return data};/**
 * Extract given data where specified property value matches given patterns.
 * @param data - Data to filter.
 * @param propertyPattern - Mapping of property names to pattern.
 * @returns Filtered data.
 */var extractIfPropertyMatches=function extractIfPropertyMatches(data,propertyPattern){if(data){var result=[];for(var _i9=0,_makeArray7=makeArray(data);_i9<_makeArray7.length;_i9++){var item=_makeArray7[_i9];var matches=true;for(var propertyName in propertyPattern)if(!(propertyPattern[propertyName]&&(typeof propertyPattern[propertyName]==="string"?new RegExp(propertyPattern[propertyName]):propertyPattern[propertyName]).test(item[propertyName]))){matches=false;break}if(matches)result.push(item)}return result}return data};/**
 * Determines all objects which exists in "first" and in "second".
 * Object key which will be compared are given by "keys". If an empty array is
 * given each key will be compared. If an object is given corresponding initial
 * data key will be mapped to referenced new data key.
 * @param first - Referenced data to check for.
 * @param second - Data to check for existence.
 * @param keys - Keys to define equality.
 * @param strict - The strict parameter indicates whether "null" and
 * "undefined" should be interpreted as equal (takes only effect if given keys
 * aren't empty).
 * @returns Data which does exit in given initial data.
 */var intersect=function intersect(first,second,keys,strict){if(keys===void 0){keys=[]}if(strict===void 0){strict=true}var containingData=[];second=makeArray(second);var intersectItem=function intersectItem(firstItem,secondItem,firstKey,secondKey,keysAreAnArray,iterateGivenKeys){if(iterateGivenKeys){if(keysAreAnArray)firstKey=secondKey}else secondKey=firstKey;if(secondItem[secondKey]!==firstItem[firstKey]&&(strict||!([null,undefined].includes(secondItem[secondKey])&&[null,undefined].includes(firstItem[firstKey]))))return false};for(var _i0=0,_makeArray8=makeArray(first);_i0<_makeArray8.length;_i0++){var firstItem=_makeArray8[_i0];if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(firstItem))for(var _i1=0,_arr=second;_i1<_arr.length;_i1++){var secondItem=_arr[_i1];var exists=true;var iterateGivenKeys=void 0;var keysAreAnArray=Array.isArray(keys);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(keys)||keysAreAnArray&&keys.length)iterateGivenKeys=true;else{iterateGivenKeys=false;keys=firstItem}if(Array.isArray(keys)){var index=0;var _iterator=_createForOfIteratorHelper(keys),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var key=_step.value;if(intersectItem(firstItem,secondItem,index,key,keysAreAnArray,iterateGivenKeys)===false){exists=false;break}index+=1}}catch(err){_iterator.e(err)}finally{_iterator.f()}}else for(var _i10=0,_Object$entries3=Object.entries(keys);_i10<_Object$entries3.length;_i10++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i10],2),_key=_Object$entries3$_i[0],value=_Object$entries3$_i[1];if(intersectItem(firstItem,secondItem,_key,value,keysAreAnArray,iterateGivenKeys)===false){exists=false;break}}if(exists){containingData.push(firstItem);break}}else if(second.includes(firstItem))containingData.push(firstItem)}return containingData};/**
 * Converts given object into an array.
 * @param object - Target to convert.
 * @returns Generated array.
 */var makeArray=function makeArray(object){var result=[];if(![null,undefined].includes(object))if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isArrayLike */ .Xj)(Object(object)))merge(result,typeof object==="string"?[object]:object);else result.push(object);return result};/**
 * Creates a list of items within given range.
 * @param range - Array of lower and upper bounds. If only one value is given
 * lower bound will be assumed to be zero. Both integers have to be positive
 * and will be contained in the resulting array. If more than two numbers are
 * provided given range will be returned.
 * @param step - Space between two consecutive values.
 * @param ignoreLastStep - Removes last step.
 * @returns Produced array of integers.
 */var makeRange=function makeRange(range,step,ignoreLastStep){if(step===void 0){step=1}if(ignoreLastStep===void 0){ignoreLastStep=false}range=[].concat(range);var index;var higherBound;if(range.length===1){index=0;higherBound=parseInt(String(range[0]),10)}else if(range.length===2){index=parseInt(String(range[0]),10);higherBound=parseInt(String(range[1]),10)}else return range;if(higherBound<index)return[];var result=[index];while(index<=higherBound-step){index+=step;if(!ignoreLastStep||index<=higherBound-step)result.push(index)}return result};/**
 * Merge the contents of two arrays together into the first array.
 * @param target - Target array.
 * @param source - Source array.
 * @returns Target array with merged given source one.
 */var merge=function merge(target,source){if(!Array.isArray(source))source=Array.prototype.slice.call(source);var _iterator2=_createForOfIteratorHelper(source),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var value=_step2.value;target.push(value)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return target};/**
 * Generates a list if pagination symbols to render a pagination from.
 * @param options - Configure bounds and current page of pagination to
 * determine.
 * @param options.boundaryCount - Indicates where to start pagination within
 * given total range.
 * @param options.disabled - Indicates whether to disable all items.
 * @param options.hideNextButton - Indicates whether to show a jump to next
 * item.
 * @param options.hidePrevButton - Indicates whether to show a jump to previous
 * item.
 * @param options.page - Indicates current visible page.
 * @param options.pageSize - Number of items per page.
 * @param options.showFirstButton - Indicates whether to show a jump to first
 * item.
 * @param options.showLastButton - Indicates whether to show a jump to last
 * item.
 * @param options.siblingCount - Number of sibling page symbols next to current
 * page symbol.
 * @param options.total - Number of all items to paginate.
 * @returns A list of pagination symbols.
 */var paginate=function paginate(options){if(options===void 0){options={}}var _options=options,_options$boundaryCoun=_options.boundaryCount,boundaryCount=_options$boundaryCoun===void 0?1:_options$boundaryCoun,_options$disabled=_options.disabled,disabled=_options$disabled===void 0?false:_options$disabled,_options$hideNextButt=_options.hideNextButton,hideNextButton=_options$hideNextButt===void 0?false:_options$hideNextButt,_options$hidePrevButt=_options.hidePrevButton,hidePrevButton=_options$hidePrevButt===void 0?false:_options$hidePrevButt,_options$page=_options.page,page=_options$page===void 0?1:_options$page,_options$pageSize=_options.pageSize,pageSize=_options$pageSize===void 0?5:_options$pageSize,_options$showFirstBut=_options.showFirstButton,showFirstButton=_options$showFirstBut===void 0?false:_options$showFirstBut,_options$showLastButt=_options.showLastButton,showLastButton=_options$showLastButt===void 0?false:_options$showLastButt,_options$siblingCount=_options.siblingCount,siblingCount=_options$siblingCount===void 0?4:_options$siblingCount,_options$total=_options.total,total=_options$total===void 0?100:_options$total;var numberOfPages=typeof pageSize==="number"&&!isNaN(pageSize)?Math.ceil(total/pageSize):total;var startPages=makeRange([1,Math.min(boundaryCount,numberOfPages)]);var endPages=makeRange([Math.max(numberOfPages-boundaryCount+1,boundaryCount+1),numberOfPages]);var siblingsStart=Math.max(Math.min(// Left boundary for lower pages.
page-siblingCount,// Lower boundary for higher pages.
numberOfPages-boundaryCount-siblingCount*2-1),// If number is greater than number of "startPages".
boundaryCount+2);var siblingsEnd=Math.min(Math.max(// Right bound for higher pages.
page+siblingCount,// Upper boundary for lower pages.
boundaryCount+siblingCount*2+2),// If number is less than number of "endPages".
endPages.length>0?endPages[0]-2:numberOfPages-1);/*
        Symbol list of items to render represent as pagination.

        Example result:

        [
            'first', 'previous',
            1,
            'start-ellipsis',
            4, 5, 6,
            'end-ellipsis',
            10,
            'next', 'last'
        ]
    */return[].concat(_toConsumableArray(showFirstButton?["first"]:[]),_toConsumableArray(hidePrevButton?[]:["previous"]),_toConsumableArray(startPages),_toConsumableArray(siblingsStart>boundaryCount+2?["start-ellipsis"]:boundaryCount+1<numberOfPages-boundaryCount?[boundaryCount+1]:[]),_toConsumableArray(makeRange([siblingsStart,siblingsEnd])),_toConsumableArray(siblingsEnd<numberOfPages-boundaryCount-1?["end-ellipsis"]:numberOfPages-boundaryCount>boundaryCount?[numberOfPages-boundaryCount]:[]),_toConsumableArray(endPages),_toConsumableArray(hideNextButton?[]:["next"]),_toConsumableArray(showLastButton?["last"]:[])).map(function(item){var _first$last;return typeof item==="number"?{disabled:disabled,page:item,selected:item===page,type:"page"}:_objectSpread({disabled:disabled||item.indexOf("ellipsis")===-1&&(item==="next"||item==="last"?page>=numberOfPages:page<=1),selected:false,type:item},item.endsWith("-ellipsis")?{}:{page:((_first$last={first:1,last:numberOfPages}[item])!==null&&_first$last!==void 0?_first$last:item==="next")?Math.min(page+1,numberOfPages):// NOTE: Is "previous" type.
Math.max(page-1,1)})})};/**
 * Generates all permutations of given iterable.
 * @param data - Array like object.
 * @returns Array of permuted arrays.
 */var _permute2=function permute(data){var result=[];var _permute=function permute(currentData,dataToMixin){if(dataToMixin===void 0){dataToMixin=[]}if(currentData.length===0)result.push(dataToMixin);else for(var index=0;index<currentData.length;index++){var copy=currentData.slice();_permute(copy,dataToMixin.concat(copy.splice(index,1)))}};_permute(data);return result};/**
 * Generates all lengths permutations of given iterable.
 * @param data - Array like object.
 * @param minimalSubsetLength - Defines how long the minimal subset length
 * should be.
 * @returns Array of permuted arrays.
 */var permuteLength=function permuteLength(data,minimalSubsetLength){if(minimalSubsetLength===void 0){minimalSubsetLength=1}var result=[];if(data.length===0)return result;var _generate=function generate(index,source,rest){if(index===0){if(rest.length>0)result[result.length]=rest;return}for(var sourceIndex=0;sourceIndex<source.length;sourceIndex++)_generate(index-1,source.slice(sourceIndex+1),rest.concat([source[sourceIndex]]))};for(var index=minimalSubsetLength;index<data.length;index++)_generate(index,data,[]);result.push(data);return result};/**
 * Removes given target on given list.
 * @param list - Array to splice.
 * @param target - Target to remove from given list.
 * @param strict - Indicates whether to fire an exception if given target
 * doesn't exist given list.
 * @returns Item with the appended target.
 */var removeArrayItem=function removeArrayItem(list,target,strict){if(strict===void 0){strict=false}var index=list.indexOf(target);if(index===-1){if(strict)throw new Error("Given target doesn't exists in given list.")}else list.splice(index,1);return list};/**
 * Sorts given object of dependencies in a topological order.
 * @param items - Items to sort.
 * @returns Sorted array of given items respecting their dependencies.
 */var sortTopological=function sortTopological(items){var edges=[];for(var _i11=0,_Object$entries4=Object.entries(items);_i11<_Object$entries4.length;_i11++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i11],2),name=_Object$entries4$_i[0],value=_Object$entries4$_i[1];items[name]=[].concat(value);if(value.length>0){var _iterator3=_createForOfIteratorHelper(makeArray(value)),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var dependencyName=_step3.value;edges.push([name,dependencyName])}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}else edges.push([name])}var nodes=[];// Accumulate unique nodes into a large list.
for(var _i12=0,_edges=edges;_i12<_edges.length;_i12++){var edge=_edges[_i12];var _iterator4=_createForOfIteratorHelper(edge),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var node=_step4.value;if(!nodes.includes(node))nodes.push(node)}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}var sorted=[];// Define a visitor function that recursively traverses dependencies.
var _visit=function visit(node,predecessors){// Check if a node is dependent of itself.
if(predecessors.length!==0&&predecessors.includes(node))throw new Error("Cyclic dependency found. \"".concat(node,"\" is dependent of ")+"itself.\n"+"Dependency chain: \"".concat(predecessors.join("\" -> \""),"\" => \"")+"".concat(node,"\"."));var index=nodes.indexOf(node);// If the node still exists, traverse its dependencies.
if(index!==-1){var copy;// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                Loop through all edges and follow dependencies of the current
                node
            */for(var _i13=0,_edges2=edges;_i13<_edges2.length;_i13++){var _edge=_edges2[_i13];if(_edge[0]===node){/*
                        Lazily create a copy of predecessors with the current
                        node concatenated onto it.
                    */copy=copy||predecessors.concat([node]);// Recursively traverse to node dependencies.
_visit(_edge[1],copy)}}sorted.push(node)}};for(var index=0;index<nodes.length;index++){var _node=nodes[index];// Ignore nodes that have been excluded.
if(_node){// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                Loop through all edges and follow dependencies of the current
                node.
            */var _iterator5=_createForOfIteratorHelper(edges),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _edge2=_step5.value;if(_edge2[0]===_node)// Recursively traverse to node dependencies.
_visit(_edge2[1],[_node])}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}sorted.push(_node)}}return sorted};/**
 * Sums up given property of given item list.
 * @param data - The objects with specified property to sum up.
 * @param propertyName - Property name to sum up its value.
 * @returns The aggregated value.
 */var sumUpProperty=function sumUpProperty(data,propertyName){var result=0;if(Array.isArray(data)&&data.length){var _iterator6=_createForOfIteratorHelper(data),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var item=_step6.value;if(Object.prototype.hasOwnProperty.call(item,propertyName))result+=parseFloat(item[propertyName]||0)}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}return result};/**
 * Makes all values in given iterable unique by removing duplicates (The first
 * occurrences will be left).
 * @param data - Array like object.
 * @returns Sliced version of given object.
 */var unique=function unique(data){var result=[];var _iterator7=_createForOfIteratorHelper(makeArray(data)),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var value=_step7.value;if(!result.includes(value))result.push(value)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}return result};

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_248200__) {

__nested_webpack_require_248200__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_248200__.d(__nested_webpack_exports__, {
/* harmony export */   DP: function() { return /* binding */ normalizeDateTime; },
/* harmony export */   JZ: function() { return /* binding */ _interpretDateTime; },
/* harmony export */   LE: function() { return /* binding */ dateTimeFormat; },
/* harmony export */   hr: function() { return /* binding */ DATE_TIME_PATTERN_CACHE; },
/* harmony export */   jJ: function() { return /* binding */ sliceWeekday; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_248200__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_248200__(1);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_248200__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module dateTime *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// Caches compiled date tine pattern regular expressions.
var DATE_TIME_PATTERN_CACHE=[];/**
 * Formats given date or current via given format specification.
 * @param format - Format specification.
 * @param dateTime - Date time to format.
 * @param options - Additional configuration options for "Intl.DateTimeFormat".
 * @param locales - Locale or list of locales to use for formatting. First one
 * take precedence of latter ones.
 * @returns Formatted date time string.
 */var dateTimeFormat=function dateTimeFormat(format,dateTime,options,locales){if(format===void 0){format="full"}if(dateTime===void 0){dateTime=new Date}if(options===void 0){options={}}if(locales===void 0){locales=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .LOCALES */ .YZ}if(typeof dateTime==="number")/*
            NOTE: "Date" constructor expects milliseconds as unit instead
            of more common used seconds.
        */dateTime*=1000;var normalizedDateTime=new Date(dateTime);if(["full","long","medium","short"].includes(format))return new Intl.DateTimeFormat([].concat(locales,"en-US"),_objectSpread({dateStyle:format,timeStyle:format},options)).format(normalizedDateTime);var scope={};var _iterator=_createForOfIteratorHelper(["full","long","medium","short"]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var style=_step.value;scope["".concat(style,"Literals")]=[];var _dateTimeFormat=new Intl.DateTimeFormat([].concat(locales,"en-US"),_objectSpread({dateStyle:style,timeStyle:style},options));scope[style]=_dateTimeFormat.format(normalizedDateTime);var _iterator2=_createForOfIteratorHelper(_dateTimeFormat.formatToParts(normalizedDateTime)),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var item=_step2.value;if(item.type==="literal")scope["".concat(style,"Literals")].push(item.value);else scope["".concat(style).concat((0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .capitalize */ .ZH)(item.type))]=item.value}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}var evaluated=(0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)("`".concat(format,"`"),{scope:scope});if(evaluated.error)throw new Error(evaluated.error);/*
        NOTE: For some reason hidden symbols are injected differently on
        different platforms, so we have to normalize for predictable
        testing.
    */return evaluated.result.replace(/\s/g," ")};/**
 * Interprets given content string as date time.
 * @param value - Date time string to interpret.
 * @param interpretAsUTC - Identifies if given date should be interpreted as
 * utc. If not set given strings will be interpreted as it is depended on
 * given format and number like string as utc.
 * @returns Interpret date time object.
 */var _interpretDateTime=function interpretDateTime(value,interpretAsUTC){var resolvedInterpretAsUTC=Boolean(interpretAsUTC);// region iso format
/*
        Let's first check if we have a simplified iso 8602 date time
        representation like:

        "YYYY-MM-DDTHH:mm:ss.sssZ" or "YYYY-MM-DDTHH:mm:ss.sss+HH:mm".

        Please note for the native "Date" implementation:

        When the time zone offset is absent, date-only forms are interpreted as
        a UTC time and date-time forms are interpreted as local time. This is
        due to a historical spec error that was not consistent with ISO 8601
        but could not be changed due to web compatibility.
    */var hourAndMinutesPattern="[0-2][0-9]:[0-6][0-9]";var pattern="^"+(// Year, month and day:
"[0-9]{4}-[01][0-9]-[0-3][0-9]"+"(?<time>"+("(?:T"+(hourAndMinutesPattern+"(?:"+(// Seconds:
":[0-6][0-9]"+// Milliseconds:
"(?:\\.[0-9]+)?")+")?"+// Timezone definition:
"(?<dateTimeTimezone>Z|(?:[+-]".concat(hourAndMinutesPattern,"))?"))+")"+"|"+// Timezone definition:
"(?<dateTimezone>Z|(?:[+-]".concat(hourAndMinutesPattern,"))"))+")?")+"$";var match=value.match(new RegExp(pattern,"i"));if(match){var _match$groups$dateTim,_match$groups,_match$groups2;var result=new Date(value);if(isNaN(result.getDate()))return null;var timezone=(_match$groups$dateTim=(_match$groups=match.groups)===null||_match$groups===void 0?void 0:_match$groups.dateTimeTimezone)!==null&&_match$groups$dateTim!==void 0?_match$groups$dateTim:(_match$groups2=match.groups)===null||_match$groups2===void 0?void 0:_match$groups2.dateTimezone;if(!timezone){var _match$groups4;if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=false;if(resolvedInterpretAsUTC){var _match$groups3;if(!((_match$groups3=match.groups)!==null&&_match$groups3!==void 0&&_match$groups3.time))/*
                        NOTE: Date only strings will be interpreted as UTC
                        already.
                    */return result;// local to utc
return new Date(result.getTime()-result.getTimezoneOffset()*60*1000)}if((_match$groups4=match.groups)!==null&&_match$groups4!==void 0&&_match$groups4.time)/*
                    NOTE: Date time strings will be interpreted as local
                    already.
                */return result;// utc to local
return new Date(result.getTime()+result.getTimezoneOffset()*60*1000)}return result}// endregion
value=value.replace(/^(-?)-*0*([1-9][0-9]*)$/,"$1$2");// region interpret integer number
/*
        NOTE: Do not use "parseFloat" since we want to interpret delimiter as
        date delimiters.
    */if(String(parseInt(value))===value){if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=true;var roughDateForTimeZoneDetermining=new Date(parseInt(value)*1000);return new Date((parseInt(value)+(resolvedInterpretAsUTC?0:roughDateForTimeZoneDetermining.getTimezoneOffset()*60))*1000)}// endregion
if(!DATE_TIME_PATTERN_CACHE.length){// region pre-compile regular expressions
/// region pattern
var millisecondPattern="(?<millisecond>(?:0{0,3}[0-9])|(?:0{0,2}[1-9]{2})|"+"(?:0?[1-9]{3})|(?:1[1-9]{3}))";var minuteAndSecondPattern="(?:0?[0-9])|(?:[1-5][0-9])|(?:60)";var secondPattern="(?<second>".concat(minuteAndSecondPattern,")");var minutePattern="(?<minute>".concat(minuteAndSecondPattern,")");var hourPattern="(?<hour>(?:0?[0-9])|(?:1[0-9])|(?:2[0-4]))";var noonIndicatorPattern="(?<noonIndicator> *(?:(?:a\\.?m\\.?)|(?:p\\.?m\\.?)))?";var dayPattern="(?<day>(?:0?[1-9])|(?:[1-2][0-9])|(?:3[01]))";var monthPattern="(?<month>(?:0?[1-9])|(?:1[0-2]))";var yearPattern="(?<year>(?:0?[1-9])|(?:[1-9][0-9]+))";/// endregion
var patternPresenceCache={};var _iterator3=_createForOfIteratorHelper(["t"," "]),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var timeDelimiter=_step3.value;var _iterator4=_createForOfIteratorHelper([":","/","-"," "]),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var timeComponentDelimiter=_step4.value;for(var _i=0,_arr=[hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+noonIndicatorPattern,hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+"".concat(timeComponentDelimiter,"+")+secondPattern+noonIndicatorPattern,hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+"".concat(timeComponentDelimiter,"+")+secondPattern+"".concat(timeComponentDelimiter,"+")+millisecondPattern+noonIndicatorPattern,hourPattern+noonIndicatorPattern];_i<_arr.length;_i++){var timeFormat=_arr[_i];for(var _i2=0,_arr2=[{delimiter:["/","-"," "],pattern:[monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern,monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern,yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern,yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern,monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern,timeFormat+"".concat(timeDelimiter,"+")+monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern,yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern+"".concat(timeDelimiter,"+")+timeFormat,yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern]},{delimiter:"\\.",pattern:[dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern,dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern,yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern,yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern,dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern,timeFormat+"".concat(timeDelimiter,"+")+dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern,yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern+"".concat(timeDelimiter,"+")+timeFormat,yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern]},{pattern:timeFormat}];_i2<_arr2.length;_i2++){var _dateTimeFormat2=_arr2[_i2];var _iterator5=_createForOfIteratorHelper([].concat(Object.prototype.hasOwnProperty.call(_dateTimeFormat2,"delimiter")?_dateTimeFormat2.delimiter:"-")),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var delimiter=_step5.value;var _iterator6=_createForOfIteratorHelper([].concat(_dateTimeFormat2.pattern)),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _pattern=_step6.value;var evaluatedPattern=(0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)("`^".concat(_pattern,"$`"),{scope:{delimiter:"".concat(delimiter,"+")}}).result;if(evaluatedPattern&&!Object.prototype.hasOwnProperty.call(patternPresenceCache,evaluatedPattern)){patternPresenceCache[evaluatedPattern]=true;DATE_TIME_PATTERN_CACHE.push(new RegExp(evaluatedPattern))}}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}// endregion
}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}// region pre-process
// NOTE: All patterns can assume lower cased strings.
value=value.toLowerCase();/*
        Reduce each sequence on none alphanumeric symbols to the first
        symbol (consolidate delimiters).
    */value=value.replace(/([^0-9a-z])[^0-9a-z]+/g,"$1");var monthNumber=1;for(var _i3=0,_arr3=[["jan","january?","janvier"],["feb","february?","f\xE9vrier"],["m(?:a|ae|\xE4)r","m(?:a|ae|\xE4)r(?:ch|s|z)"],["ap[rv]","a[pv]ril"],["ma[iy]"],["ju[ein]","jui?n[ei]?"],["jul","jul[iy]","juillet"],["aug","august","ao\xFBt"],["sep","septemb(?:er|re)"],["o[ck]t","o[ck]tob(?:er|re)"],["nov","novemb(?:er|re)"],["de[cz]","d[e\xE9][cz]emb(?:er|re)"]];_i3<_arr3.length;_i3++){var monthVariation=_arr3[_i3];var matched=false;var _iterator7=_createForOfIteratorHelper(monthVariation),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var name=_step7.value;var _pattern2=new RegExp("(^|[^a-z])".concat(name,"([^a-z]|$)"));if(_pattern2.test(value)){value=value.replace(_pattern2,"$1".concat(String(monthNumber),"$2"));matched=true;break}}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(matched)break;monthNumber+=1}value=sliceWeekday(value);var timezonePattern=/(.+)\+(.+)$/;var timezoneMatch=timezonePattern.exec(value);if(timezoneMatch)value=value.replace(timezonePattern,"$1");var _iterator8=_createForOfIteratorHelper(["","Uhr","o'clock"]),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var wordToSlice=_step8.value;value=value.replace(wordToSlice,"")}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}value=value.trim();// endregion
// region try to match a pattern
var _loop=function _loop(){var dateTimePattern=_DATE_TIME_PATTERN_CA[_i4];var match=null;try{match=value.match(dateTimePattern)}catch(_unused){// Continue regardless of an error.
}if(match){var _match$groups5;var get=function get(name,fallback){if(fallback===void 0){fallback=0}return match.groups&&name in match.groups?parseInt(match.groups[name],10):fallback};var parameter=[get("year",1970),get("month",1)-1,get("day",1),get("hour"),get("minute"),get("second"),get("millisecond")];if((_match$groups5=match.groups)!==null&&_match$groups5!==void 0&&_match$groups5.noonIndicator&&match.groups.noonIndicator.trim().replace(/\./g,"")==="pm"&&parameter[3]<=12)parameter[3]+=12;var _result=null;if(timezoneMatch){var timeShift=_interpretDateTime(timezoneMatch[2],true);if(timeShift)_result=new Date(Date.UTC.apply(Date,parameter)-timeShift.getTime())}if(!_result)if(resolvedInterpretAsUTC)_result=new Date(Date.UTC.apply(Date,parameter));else _result=_construct(Date,parameter);if(isNaN(_result.getDate()))return{v:null};return{v:_result}}},_ret;for(var _i4=0,_DATE_TIME_PATTERN_CA=DATE_TIME_PATTERN_CACHE;_i4<_DATE_TIME_PATTERN_CA.length;_i4++){_ret=_loop();if(_ret)return _ret.v}// endregion
return null};/**
 * Interprets a date object from given artefact.
 * @param value - To interpret.
 * @param interpretAsUTC - Identifies if given date should be interpreted as
 * utc. If not set given strings will be interpreted as it is dependent on
 * given format and numbers as utc.
 * @returns Interpreted date object or "null" if given value couldn't be
 * interpreted.
 */var normalizeDateTime=function normalizeDateTime(value,interpretAsUTC){if(value===void 0){value=null}var resolvedInterpretAsUTC=Boolean(interpretAsUTC);if(value===null)return new Date;if(typeof value==="string"){/*
            We make a simple pre-check to determine if it could be a date like
            representation. Idea: There should be at least some numbers and
            separators.
        */if(/^.*(?:(?:[0-9]{1,4}[^0-9]){2}|[0-9]{1,4}[^0-9.]).*$/.test(value)){value=_interpretDateTime(value,resolvedInterpretAsUTC);if(value===null)return value;return value}var floatRepresentation=parseFloat(value);if(String(floatRepresentation)===value)value=floatRepresentation}if(typeof value==="number"){if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=true;var roughDateForTimeZoneDetermining=new Date(value*1000);return new Date((value+(resolvedInterpretAsUTC?0:roughDateForTimeZoneDetermining.getTimezoneOffset()*60))*1000)}// Try to deal with types which are either numbers or strings.
var result=new Date(value);if(isNaN(result.getDate()))return null;return result};/**
 * Slice weekday from given date representation.
 * @param value - String to process.
 * @returns Sliced given string.
 */var sliceWeekday=function sliceWeekday(value){var weekdayPattern=/[a-z]{2}\.+ *([^ ].*)$/i;var weekdayMatch=weekdayPattern.exec(value);if(weekdayMatch)return value.replace(weekdayPattern,"$1");return value};

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_267931__) {

__nested_webpack_require_267931__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_267931__.d(__nested_webpack_exports__, {
/* harmony export */   D_: function() { return /* binding */ identity; },
/* harmony export */   Gj: function() { return /* binding */ _getParameterNames; },
/* harmony export */   gH: function() { return /* binding */ invertArrayFilter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_267931__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module function *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}/**
 * Determines all parameter names from given callable (function or class,
 * ...).
 * @param callable - Function or function code to inspect.
 * @returns List of parameter names.
 */var _getParameterNames=function getParameterNames(callable){var functionCode=(typeof callable==="string"?callable:// Strip comments.
callable.toString()).replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,"");if(functionCode.startsWith("class"))return _getParameterNames("function "+functionCode.replace(/.*(constructor\([^)]+\))/m,"$1"));// Try classic function declaration.
var parameter=/^function\s*[^(]*\(\s*([^)]*)\)/m.exec(functionCode);if(parameter===null)// Try arrow function declaration.
parameter=/^[^(]*\(\s*([^)]*)\) *=>.*/m.exec(functionCode);if(parameter===null)// Try one argument and without brackets arrow function declaration.
parameter=/([^= ]+) *=>.*/m.exec(functionCode);var names=[];if(parameter&&parameter.length>1&&parameter[1].trim().length){var _iterator=_createForOfIteratorHelper(parameter[1].split(",")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;)// Remove default parameter values.
{var name=_step.value;names.push(name.replace(/=.+$/g,"").trim())}}catch(err){_iterator.e(err)}finally{_iterator.f()}return names}return names};/**
 * Implements the identity function.
 * @param value - A value to return.
 * @returns Returns the given value.
 */var identity=function identity(value){return value};/**
 * Inverted filter helper to inverse each given filter.
 * @param filter - A function that filters an array.
 * @returns The inverted filter.
 */var invertArrayFilter=function invertArrayFilter(filter){return function(data){if(Array.isArray(data)){for(var _len=arguments.length,additionalParameter=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){additionalParameter[_key-1]=arguments[_key]}var filteredData=filter.apply(void 0,[data].concat(additionalParameter));var result=[];if(filteredData.length){var _iterator2=_createForOfIteratorHelper(data),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var date=_step2.value;if(!filteredData.includes(date))result.push(date)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}else result=data;return result}return data}};

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_272369__) {

/* harmony export */ __nested_webpack_require_272369__.d(__nested_webpack_exports__, {
/* harmony export */   CH: function() { return /* binding */ evaluateUnaryOperation; },
/* harmony export */   Cp: function() { return /* binding */ evaluateArrayContains; },
/* harmony export */   F9: function() { return /* binding */ evaluateCondition; },
/* harmony export */   Fm: function() { return /* binding */ selectArrayItem; },
/* harmony export */   Hg: function() { return /* binding */ evaluateOr; },
/* harmony export */   Lm: function() { return /* binding */ evaluateSelector; },
/* harmony export */   Pl: function() { return /* binding */ _normalizeSelector; },
/* harmony export */   Q2: function() { return /* binding */ evaluateConcat; },
/* harmony export */   YN: function() { return /* binding */ NO_ITEM_FOUND_SYMBOL; },
/* harmony export */   ZF: function() { return /* binding */ evaluateOperation; },
/* harmony export */   cB: function() { return /* binding */ evaluateMapping; },
/* harmony export */   f7: function() { return /* binding */ evaluateOptionalThen; },
/* harmony export */   fG: function() { return /* binding */ SELECTOR_KEY_NAMES; },
/* harmony export */   j0: function() { return /* binding */ evaluateAnd; },
/* harmony export */   j4: function() { return /* binding */ evaluateSwitch; },
/* harmony export */   lp: function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   rb: function() { return /* binding */ evaluateIf; },
/* harmony export */   yf: function() { return /* binding */ evaluateSelectorUntilLastObject; }
/* harmony export */ });
/* unused harmony export evaluateExpression */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_272369__(4);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_272369__(3);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_272369__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var SELECTOR_KEY_NAMES=new Set(["name"]);var NO_ITEM_FOUND_SYMBOL=Symbol.for("EXPRESSION_EVALUATOR_NO_ITEM_FOUND");var DEFAULT_OPTIONS={skipMissingLevel:false,contextReplacements:{},delimiter:"."};var addBracketBasedPathElements=function addBracketBasedPathElements(subParts){var path=[];// NOTE: We add index assignments into path array.
var _iterator=_createForOfIteratorHelper(subParts),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var subPart=_step.value;var openingBracketPosition=subPart.indexOf("[");if(openingBracketPosition>0)path.push(subPart.substring(0,openingBracketPosition));// Trim bracket padding "[index]" => "index".
path.push(subPart.substring(openingBracketPosition+1,subPart.length-1))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return path};var _normalizeSelector=function normalizeSelector(selector,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread(_objectSpread({},DEFAULT_OPTIONS),{},{scope:{}},givenOptions);var path=[];var _iterator2=_createForOfIteratorHelper([].concat(selector)),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var component=_step2.value;if(typeof component==="string"){var parts=component.split(options.delimiter);var _iterator3=_createForOfIteratorHelper(parts),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var part=_step3.value;if(!part)continue;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(part)){path.push(part);continue}// Identify bracket based selectors like "[index]".
var openingBracketPosition=part.indexOf("[");var restPart=part;if(openingBracketPosition!==-1){restPart=part.substring(openingBracketPosition);part=part.substring(0,openingBracketPosition)}if(Object.prototype.hasOwnProperty.call(options.contextReplacements,part))path.push.apply(path,_toConsumableArray(_normalizeSelector(options.contextReplacements[part],options)));else path.push(part);if(restPart!==part){// Trim bracket padding "[index]" => "index".
var subParts=restPart.match(/[^[]*\[\d+]/g);path.push.apply(path,_toConsumableArray(addBracketBasedPathElements(subParts)))}}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}else path.push(evaluateExpression(component,options.scope,options))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return path};var selectArrayItem=function selectArrayItem(data,keyOrIndex){// Assume that an array item should be found by its property name.
var _iterator4=_createForOfIteratorHelper(data),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var item=_step4.value;var _iterator5=_createForOfIteratorHelper(SELECTOR_KEY_NAMES),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var selectorKeyName=_step5.value;if(Object.prototype.hasOwnProperty.call(item,selectorKeyName)&&item[selectorKeyName]===keyOrIndex)return item}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}return NO_ITEM_FOUND_SYMBOL};/**
 * Retrieves substructure in given object referenced by given selector
 * path.
 * @param selector - Selector path.
 * @param scope - Object to search in.
 * @param givenOptions - Object to configure evaluation.
 * @param givenOptions.contextReplacements - Configuration how to replace
 * "this" and "thisParent" keywords in selectors.
 * @param givenOptions.delimiter - Delimiter to delimit given selector
 * components.
 * @param givenOptions.skipMissingLevel - Indicates to skip missing level in
 * given path.
 * @returns Determined sub structure of given data or "undefined".
 */var evaluateSelectorUntilLastObject=function evaluateSelectorUntilLastObject(selector,scope,givenOptions){if(scope===void 0){scope={}}if(givenOptions===void 0){givenOptions={}}var options=_objectSpread(_objectSpread({},DEFAULT_OPTIONS),givenOptions);/*
        Create a list of keys or indexes to retrieve specified value from given
        object.
    */var path=_normalizeSelector(selector,_objectSpread(_objectSpread({},options),{},{scope:scope}));// Dig into given scope for each previously found key or index.
var result=scope;var index=0;var _iterator6=_createForOfIteratorHelper(path),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var keyOrIndex=_step6.value;var isLastPart=index===path.length-1;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(result)){if(Array.isArray(result)&&typeof keyOrIndex==="string"&&isNaN(parseInt(keyOrIndex))){var item=selectArrayItem(result,keyOrIndex);if(item!==NO_ITEM_FOUND_SYMBOL){if(isLastPart)return typeof keyOrIndex==="number"?[result,keyOrIndex]:[result,result.indexOf(item)];result=item}}else if(isLastPart)return[result,keyOrIndex];else if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(keyOrIndex))result=keyOrIndex(result);else if(Object.prototype.hasOwnProperty.call(result,keyOrIndex))result=result[keyOrIndex];else if(!options.skipMissingLevel)return[result,keyOrIndex]}else if(isLastPart)return[result,keyOrIndex];else if(!options.skipMissingLevel)return[result,keyOrIndex];index+=1}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return[{},""]};/**
 * Retrieves substructure in given object referenced by given selector
 * path.
 * @param selector - Selector path.
 * @param scope - Object to search in.
 * @param options - Options object to configure evaluation.
 * @param options.contextReplacements - Configuration how to replace "this"
 * and "thisParent" keywords in selectors.
 * @param options.delimiter - Delimiter to delimit given selector components.
 * @param options.skipMissingLevel - Indicates to skip missing level in given
 * path.
 * @returns Determined sub structure of given data or "undefined".
 */var evaluateSelector=function evaluateSelector(selector,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}var _evaluateSelectorUnti=evaluateSelectorUntilLastObject(selector,scope,options),_evaluateSelectorUnti2=_slicedToArray(_evaluateSelectorUnti,2),lastObject=_evaluateSelectorUnti2[0],lastKey=_evaluateSelectorUnti2[1];if(lastKey==="")return scope;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(lastKey))return lastKey(lastObject);if(Object.prototype.hasOwnProperty.call(lastObject,lastKey))return lastObject[lastKey];return options.skipMissingLevel?lastObject:undefined};var evaluateCondition=function evaluateCondition(condition,scope,options){var value1=evaluateExpression(condition.value1,scope,options);var value2=evaluateExpression(condition.value2,scope,options);switch(condition.$comparator){case"==":return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"!=":return!(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"<":return value1<value2;case"<=":return value1<=value2;case">":return value1>value2;case">=":return value1>=value2}};var evaluateOperation=function evaluateOperation(operation,scope,options){var operand1=evaluateExpression(operation.operand1,scope,options);var operand2=evaluateExpression(operation.operand2,scope,options);switch(operation.$operator){case"+":return operand1+operand2;case"-":return operand1-operand2;case"*":return operand1*operand2;case"**":return Math.pow(operand1,operand2);case"/":return operand1/operand2}};var evaluateUnaryOperation=function evaluateUnaryOperation(operation,scope,options){var operand=evaluateExpression(operation.operand,scope,options);switch(operation.$operator){case"!":return!operand;case"!!":return Boolean(operand)}};var evaluateOptionalThen=function evaluateOptionalThen(expression,scope,options){if(typeof expression.then==="undefined")return undefined;return evaluateExpression(expression.then,scope,options)};var evaluateIf=function evaluateIf(expression,scope,options){if(evaluateExpression(expression.$if,scope,options))return evaluateOptionalThen(expression,scope,options);return typeof expression.else==="undefined"?undefined:evaluateExpression(expression.else,scope)};var evaluateSwitch=function evaluateSwitch(expression,scope,options){var value=evaluateExpression(expression.$switch,scope);var _iterator7=_createForOfIteratorHelper(expression.caseExpressions),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var caseExpression=_step7.value;if(value===evaluateExpression(caseExpression.$case,scope,options))return evaluateOptionalThen(caseExpression,scope,options)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(typeof expression.default!=="undefined")return evaluateExpression(expression.default,scope,options);return undefined};var evaluateAnd=function evaluateAnd(expression,scope,options){var _iterator8=_createForOfIteratorHelper(expression.$and),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var condition=_step8.value;if(!evaluateExpression(condition,scope,options))return false}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}return true};var evaluateOr=function evaluateOr(expression,scope,options){var _iterator9=_createForOfIteratorHelper(expression.$or),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var condition=_step9.value;if(evaluateExpression(condition,scope,options))return true}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}return false};var evaluateConcat=function evaluateConcat(expression,scope,options){var result=[];var isArray=false;var _iterator0=_createForOfIteratorHelper(expression.$concat),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var item=_step0.value;var value=evaluateExpression(item,scope,options);if(Array.isArray(value))isArray=true;result=result.concat(value)}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}return isArray?result:result.join("")};var evaluateMapping=function evaluateMapping(expression,scope,options){var givenData=evaluateExpression(expression.data,scope,options);var normalizedGivenData=[];if(Array.isArray(givenData))normalizedGivenData=givenData;else for(var _i=0,_Object$entries=Object.entries(givenData);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];normalizedGivenData.push(_objectSpread(_objectSpread({},value),{},{$key:key}))}var result=[];var _iterator1=_createForOfIteratorHelper(normalizedGivenData),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var item=_step1.value;var _value={};for(var _i2=0,_Object$entries2=Object.entries(expression.$mapping);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),sourceName=_Object$entries2$_i[0],targetName=_Object$entries2$_i[1];if(Object.prototype.hasOwnProperty.call(item,sourceName))_value[targetName]=item[sourceName]}result.push(_value)}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}return result};var evaluateArrayContains=function evaluateArrayContains(expression,scope,options){var array=scope;if(expression.$arrayContains.target!=null)array=evaluateExpression(expression.$arrayContains.target,scope,options);var value=evaluateExpression(expression.$arrayContains.value,scope,options);var key=evaluateExpression(expression.$arrayContains.key,scope,options);if(!Array.isArray(array))return false;return array.some(function(item){if(typeof key==="string"&&(0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(item)&&Object.prototype.hasOwnProperty.call(item,key)){var record=item;return record[key]===value}return item===value})};function evaluateExpression(expression,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSelector */ .cB)(expression))return evaluateSelector(expression.$select,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isCondition */ .G3)(expression))return evaluateCondition(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isUnaryOperation */ .bF)(expression))return evaluateUnaryOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOperation */ .YG)(expression))return evaluateOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOrExpression */ .g6)(expression))return evaluateOr(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isAndExpression */ .Gc)(expression))return evaluateAnd(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isConcatExpression */ .HK)(expression))return evaluateConcat(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isMappingExpression */ .Z9)(expression))return evaluateMapping(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isIfExpression */ .MP)(expression))return evaluateIf(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSwitchExpression */ .$y)(expression))return evaluateSwitch(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isArrayContainsExpression */ .ZI)(expression))return evaluateArrayContains(expression,scope,options);return expression}/* harmony default export */ __nested_webpack_exports__.Ay = (evaluateExpression);

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_292202__) {

/* harmony export */ __nested_webpack_require_292202__.d(__nested_webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ viewArrayAsScope; },
/* harmony export */   x: function() { return /* binding */ _viewObjectAsScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_292202__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var viewArrayAsScope=function viewArrayAsScope(data,childrenPropertyNames,propertyReferenceKeys){return new Proxy(data,{ownKeys:function ownKeys(target){return Reflect.ownKeys(target)},get:function get(target,name){var _iterator=_createForOfIteratorHelper(target),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var element=_step.value;var _iterator2=_createForOfIteratorHelper(propertyReferenceKeys),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var key=_step2.value;if(element[key]===name){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
// type ScopeValueType = object
/*
                            eslint-disable
                            @typescript-eslint/no-unnecessary-type-arguments
                        */return _viewObjectAsScope(element,childrenPropertyNames,propertyReferenceKeys);/*
                            eslint-enable
                            @typescript-eslint/no-unnecessary-type-arguments
                        */}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return undefined},set:function set(target,name,value){var index=0;var _iterator3=_createForOfIteratorHelper(target),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var item=_step3.value;var _iterator4=_createForOfIteratorHelper(propertyReferenceKeys),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var key=_step4.value;if(item[key]===name){target[index]=value;return true}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}index+=1}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}return false}})};var _viewObjectAsScope=function viewObjectAsScope(data,childrenPropertyNames,propertyReferenceKeys){if(childrenPropertyNames===void 0){childrenPropertyNames=["children"]}if(propertyReferenceKeys===void 0){propertyReferenceKeys=["name"]}return new Proxy(data,{ownKeys:function ownKeys(target){return Reflect.ownKeys(target)},get:function get(target,name){var value=target[name];if(Object.prototype.hasOwnProperty.call(target,name)){if(childrenPropertyNames.includes(name)&&Array.isArray(value)){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
return viewArrayAsScope(value,childrenPropertyNames,propertyReferenceKeys)}if(value!==null&&_typeof(value)==="object"){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
// type ScopeValueType = object
/*
                        eslint-disable
                        @typescript-eslint/no-unnecessary-type-arguments
                    */return _viewObjectAsScope(value,childrenPropertyNames,propertyReferenceKeys);/*
                        eslint-enable
                        @typescript-eslint/no-unnecessary-type-arguments
                    */}return value}return undefined},set:function set(target,name,value){if(Object.prototype.hasOwnProperty.call(target,name))if(Object.prototype.hasOwnProperty.call(target,name)){target[name]=value;return true}return false}})};

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_297532__) {

/* harmony export */ __nested_webpack_require_297532__.d(__nested_webpack_exports__, {
/* harmony export */   $y: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.$y; },
/* harmony export */   CH: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.CH; },
/* harmony export */   Cp: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Cp; },
/* harmony export */   F9: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.F9; },
/* harmony export */   Fm: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Fm; },
/* harmony export */   G3: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.G3; },
/* harmony export */   Gc: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.Gc; },
/* harmony export */   HK: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.HK; },
/* harmony export */   Hg: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Hg; },
/* harmony export */   Ld: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.cB; },
/* harmony export */   Lm: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Lm; },
/* harmony export */   MP: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.MP; },
/* harmony export */   O4: function() { return /* binding */ evaluateExpression; },
/* harmony export */   Pl: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Pl; },
/* harmony export */   Q2: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Q2; },
/* harmony export */   YG: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.YG; },
/* harmony export */   YN: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.YN; },
/* harmony export */   Z9: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.Z9; },
/* harmony export */   ZF: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.ZF; },
/* harmony export */   ZI: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.ZI; },
/* harmony export */   bC: function() { return /* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.b; },
/* harmony export */   bF: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.bF; },
/* harmony export */   bQ: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.bQ; },
/* harmony export */   cB: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.cB; },
/* harmony export */   f7: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.f7; },
/* harmony export */   fG: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.fG; },
/* harmony export */   g6: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.g6; },
/* harmony export */   j0: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.j0; },
/* harmony export */   j4: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.j4; },
/* harmony export */   lp: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.lp; },
/* harmony export */   ml: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.ml; },
/* harmony export */   rb: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.rb; },
/* harmony export */   xk: function() { return /* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.x; },
/* harmony export */   yf: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.yf; }
/* harmony export */ });
/* harmony import */ var _evaluators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_297532__(19);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_297532__(20);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_297532__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var evaluateExpression=_evaluators_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_302742__) {

/* harmony export */ __nested_webpack_require_302742__.d(__nested_webpack_exports__, {
/* harmony export */   l: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.l_; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_302742__(1);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cli *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//*
    NOTE: "CLI_COLOR" is defined in and re-exported from "./constants" (instead
    of being declared here directly) to avoid a webpack code generation issue
    where an import-less module loses its export declarations when bundled as a
    dependency of another entry point.
*/

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_303856__) {

/* harmony export */ __nested_webpack_require_303856__.d(__nested_webpack_exports__, {
/* harmony export */   Ri: function() { return /* binding */ getCookie; },
/* harmony export */   TV: function() { return /* binding */ setCookie; },
/* harmony export */   Yj: function() { return /* binding */ deleteCookie; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_303856__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cookie *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Deletes a cookie value by given name.
 * @param name - Name to identify requested value.
 */var deleteCookie=function deleteCookie(name){if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document)_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie="".concat(name,"=; Max-Age=-99999999;")};/**
 * Gets a cookie value by given name.
 * @param name - Name to identify requested value.
 * @returns Requested value.
 */var getCookie=function getCookie(name){if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document){var key="".concat(name,"=");var decodedCookie=decodeURIComponent(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie);var _iterator=_createForOfIteratorHelper(decodedCookie.split(";")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var date=_step.value;while(date.startsWith(" "))date=date.substring(1);if(date.startsWith(key))return date.substring(key.length,date.length)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return""}return null};/**
 * Sets a cookie key-value-pair.
 * @param name - Name to identify given value.
 * @param value - Value to set.
 * @param givenOptions - Cookie set options.
 * @param givenOptions.domain - Domain to reference with given key-value-pair.
 * @param givenOptions.httpOnly - Indicates if this cookie should be accessible
 * from client or not.
 * @param givenOptions.minimal - Set only minimum number of options.
 * @param givenOptions.numberOfDaysUntilExpiration - Number of days until given
 * key shouldn't be deleted.
 * @param givenOptions.path - Path to reference with given key-value-pair.
 * @param givenOptions.sameSite - Set same site policy to "Lax", "None" or
 * "Strict".
 * @param givenOptions.secure - Indicates if this cookie is only valid for
 * "https" connections.
 * @returns A boolean indicating whether cookie could be set or not.
 */var setCookie=function setCookie(name,value,givenOptions){if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document){var _globalContext$locati;var options=_objectSpread({domain:"",httpOnly:false,minimal:false,numberOfDaysUntilExpiration:365,path:"/",sameSite:"Lax",secure:true},givenOptions);var now=new Date;now.setTime(now.getTime()+options.numberOfDaysUntilExpiration*24*60*60*1000);if(options.domain===""&&(_globalContext$locati=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati!==void 0&&_globalContext$locati.hostname)options.domain=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.location.hostname;_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie="".concat(name,"=").concat(value)+(options.minimal?"":";Expires=\"".concat(now.toUTCString())+";Path=".concat(options.path)+";Domain=".concat(options.domain)+(options.sameSite?";SameSite=".concat(options.sameSite):"")+(options.secure?";Secure":"")+(options.httpOnly?";HttpOnly":""));return true}return false};

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_310491__) {

/* harmony export */ __nested_webpack_require_310491__.d(__nested_webpack_exports__, {
/* harmony export */   CJ: function() { return /* binding */ cacheImage; },
/* harmony export */   QB: function() { return /* binding */ checkReachability; },
/* harmony export */   Zx: function() { return /* binding */ checkUnreachability; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_310491__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_310491__(4);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_310491__(5);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_310491__(3);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_310491__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module data-transfer *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)};function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};/**
 * Preloads a given url via a temporary created image element.
 * @param url - To image which should be downloaded.
 * @returns A Promise indicating whether the image was loaded.
 */var cacheImage=function cacheImage(url){return new Promise(function(resolve,reject){var imageElement=document.createElement("img");imageElement.onload=function(){var isLoaded=imageElement.complete;imageElement.remove();if(isLoaded)resolve();else reject(new Error("Image could not be loaded."))};imageElement.src=url})};/**
 * Checks if given url response with given status code.
 * @param url - Url to check reachability.
 * @param givenOptions - Options to configure.
 * @param givenOptions.wait - Boolean indicating if we should retry until a
 * status code will be given.
 * @param givenOptions.statusCodes - Status codes to check for.
 * @param givenOptions.timeoutInSeconds - Delay after assuming given resource
 * isn't available if no response is coming.
 * @param givenOptions.pollIntervalInSeconds - Seconds between two tries to
 * reach given url.
 * @param givenOptions.options - Fetch options to use.
 * @param givenOptions.expectedIntermediateStatusCodes - A list of expected but
 * unwanted response codes. If detecting them waiting will continue until an
 * expected (positive) code occurs or timeout is reached.
 * @returns A promise which will be resolved if a request to given url has
 * finished and resulting status code matches given expected status code.
 * Otherwise, returned promise will be rejected.
 */var checkReachability=/*#__PURE__*/function(){var _checkReachability=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url,givenOptions){var _ref;var abortController,options,statusCodes,expectedIntermediateStatusCodes,isStatusCodeExpected,checkAndThrow,_t3;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch){_context2.n=1;break}throw new Error("Missing fetch implementation available.");case 1:abortController=(_ref=givenOptions.abortController)!==null&&_ref!==void 0?_ref:new AbortController;options=(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .X$)(true,{expectedIntermediateStatusCodes:[],options:{signal:abortController.signal},pollIntervalInSeconds:0.1,statusCodes:200,timeoutInSeconds:10,wait:false},givenOptions);statusCodes=[].concat(options.statusCodes);expectedIntermediateStatusCodes=[].concat(options.expectedIntermediateStatusCodes);isStatusCodeExpected=function isStatusCodeExpected(response,statusCodes){return"status"in response&&statusCodes.includes(response.status)};checkAndThrow=function checkAndThrow(response){if(!isStatusCodeExpected(response,statusCodes))throw new Error("Given status code ".concat(String(response.status)," ")+"differs from ".concat(statusCodes.join(", "),"."));return response};if(!options.wait){_context2.n=2;break}return _context2.a(2,new Promise(function(resolve,reject){var timedOut=false;var timer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.timeoutInSeconds*1000);var retryErrorHandler=function retryErrorHandler(error){if(!timedOut){currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.pollIntervalInSeconds*1000,wrapper);/*
                        NOTE: A timer rejection is expected. Avoid throwing
                        errors about unhandled promise rejections.
                    */currentlyRunningTimer.catch(function(){// Do nothing regardless of an error.
})}return error};var wrapper=/*#__PURE__*/function(){var _wrapper=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var response,_t,_t2;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:_context.p=0;_context.n=1;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 1:response=_context.v;_context.n=3;break;case 2:_context.p=2;_t=_context.v;return _context.a(2,retryErrorHandler(_t));case 3:_context.p=3;resolve(checkAndThrow(response));timer.clear();_context.n=6;break;case 4:_context.p=4;_t2=_context.v;if(!isStatusCodeExpected(response,expectedIntermediateStatusCodes)){_context.n=5;break}return _context.a(2,retryErrorHandler(_t2));case 5:/* eslint-disable prefer-promise-reject-errors */reject(_t2);/* eslint-enable prefer-promise-reject-errors */timer.clear();case 6:return _context.a(2,response)}},_callee,null,[[3,4],[0,2]])}));function wrapper(){return _wrapper.apply(this,arguments)}return wrapper}();var currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(wrapper);timer.then(function(){timedOut=true;currentlyRunningTimer.clear();reject(new Error("Timeout of ".concat(String(options.timeoutInSeconds)," ")+"seconds reached."));abortController.abort()},function(){// Do nothing.
})}));case 2:_t3=checkAndThrow;_context2.n=3;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 3:return _context2.a(2,_t3(_context2.v))}},_callee2)}));function checkReachability(_x,_x2){return _checkReachability.apply(this,arguments)}return checkReachability}();/**
 * Checks if given url isn't reachable.
 * @param url - Url to check reachability.
 * @param givenOptions - Options to configure.
 * @param givenOptions.wait - Boolean indicating if we should retry until a
 * status code will be given.
 * @param givenOptions.timeoutInSeconds - Delay after assuming given resource
 * will stay available.
 * @param givenOptions.pollIntervalInSeconds - Seconds between two tries to
 * reach given url.
 * @param givenOptions.statusCodes - Status codes to check for.
 * @param givenOptions.options - Fetch options to use.
 * @returns A promise which will be resolved if a request to given url couldn't
 * be finished. Otherwise, returned promise will be rejected. If "wait" is set
 * to "true" we will resolve to another promise still resolving when final
 * timeout is reached or the endpoint is unreachable (after some tries).
 */var checkUnreachability=/*#__PURE__*/function(){var _checkUnreachability=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(url,givenOptions){var _ref2;var abortController,options,check,result,_t5,_t6;return _regenerator().w(function(_context4){while(1)switch(_context4.p=_context4.n){case 0:if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch){_context4.n=1;break}throw new Error("Missing fetch implementation available.");case 1:abortController=(_ref2=givenOptions.abortController)!==null&&_ref2!==void 0?_ref2:new AbortController;options=(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .X$)(true,{options:{signal:abortController.signal},pollIntervalInSeconds:0.1,statusCodes:[],timeoutInSeconds:10,wait:false},givenOptions);check=function check(response){var statusCodes=[].concat(options.statusCodes);if(statusCodes.length){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(response)&&"status"in response&&statusCodes.includes(response.status))throw new Error("Given url \"".concat(url,"\" is reachable and responses with ")+"status code \"".concat(String(response.status),"\"."));return new Error("Given status code is not \"".concat(statusCodes.join(", "),"\"."))}return null};if(!options.wait){_context4.n=2;break}return _context4.a(2,new Promise(function(resolve,reject){var timedOut=false;var _wrapper2=/*#__PURE__*/function(){var _wrapper3=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(){var response,result,_t4;return _regenerator().w(function(_context3){while(1)switch(_context3.p=_context3.n){case 0:_context3.p=0;_context3.n=1;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 1:response=_context3.v;if(!timedOut){_context3.n=2;break}return _context3.a(2,response);case 2:result=check(response);if(!result){_context3.n=3;break}timer.clear();resolve(result);return _context3.a(2,result);case 3:currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.pollIntervalInSeconds*1000,_wrapper2);/*
                        NOTE: A timer rejection is expected. Avoid throwing
                        errors about unhandled promise rejections.
                    */currentlyRunningTimer.catch(function(){// Do nothing regardless of an error.
});_context3.n=5;break;case 4:_context3.p=4;_t4=_context3.v;timer.clear();resolve(_t4);return _context3.a(2,_t4);case 5:return _context3.a(2,null)}},_callee3,null,[[0,4]])}));function wrapper(){return _wrapper3.apply(this,arguments)}return wrapper}();var currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(_wrapper2);var timer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.timeoutInSeconds*1000);timer.then(function(){timedOut=true;currentlyRunningTimer.clear();reject(new Error("Timeout of ".concat(String(options.timeoutInSeconds)," ")+"seconds reached."));abortController.abort()},function(){// Do nothing.
})}));case 2:_context4.p=2;_t5=check;_context4.n=3;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 3:result=_t5(_context4.v);if(!result){_context4.n=4;break}return _context4.a(2,result);case 4:_context4.n=6;break;case 5:_context4.p=5;_t6=_context4.v;return _context4.a(2,_t6);case 6:throw new Error("Given url \"".concat(url,"\" is reachable."));case 7:return _context4.a(2)}},_callee4,null,[[2,5]])}));function checkUnreachability(_x3,_x4){return _checkUnreachability.apply(this,arguments)}return checkUnreachability}();

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_324777__) {

/* harmony export */ __nested_webpack_require_324777__.d(__nested_webpack_exports__, {
/* harmony export */   C_: function() { return /* binding */ createDomNodes; },
/* harmony export */   Cc: function() { return /* binding */ interruptableScrollTo; },
/* harmony export */   D7: function() { return /* binding */ STOP_AUTO_SCROLLING; },
/* harmony export */   HC: function() { return /* binding */ replace; },
/* harmony export */   LV: function() { return /* binding */ wrap; },
/* harmony export */   Rv: function() { return /* binding */ fade; },
/* harmony export */   S: function() { return /* binding */ SCROLL_EVENT_NAMES; },
/* harmony export */   UK: function() { return /* binding */ getAll; },
/* harmony export */   VG: function() { return /* binding */ scrollTo; },
/* harmony export */   Xn: function() { return /* binding */ fadeOut; },
/* harmony export */   ZQ: function() { return /* binding */ MANUAL_SCROLL_EVENT_NAMES; },
/* harmony export */   dK: function() { return /* binding */ _isHidden; },
/* harmony export */   kp: function() { return /* binding */ closest; },
/* harmony export */   l2: function() { return /* binding */ isEquivalent; },
/* harmony export */   oA: function() { return /* binding */ unwrap; },
/* harmony export */   q4: function() { return /* binding */ _getText; },
/* harmony export */   qG: function() { return /* binding */ fadeIn; },
/* harmony export */   qq: function() { return /* binding */ onDocumentReady; },
/* harmony export */   wT: function() { return /* binding */ getParents; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_324777__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_324777__(5);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_324777__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module domNode *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var STOP_AUTO_SCROLLING={value:_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE};var MANUAL_SCROLL_EVENT_NAMES=["DOMMouseScroll","keydown","mousedown","mousewheel","wheel","touchstart","touchmove"];var SCROLL_EVENT_NAMES=["scroll"].concat(MANUAL_SCROLL_EVENT_NAMES);var closest=function closest(node,selector,startWithParent){var _node$parentElement;if(startWithParent===void 0){startWithParent=false}return"closest"in node&&!startWithParent?node.closest(selector):((_node$parentElement=node.parentElement)===null||_node$parentElement===void 0?void 0:_node$parentElement.closest(selector))||null};var createDomNodes=function createDomNodes(html){var domNodeWrapper=document.createElement("div");domNodeWrapper.innerHTML=html;if(domNodeWrapper.childNodes.length===1)/*
            NOTE: We need to clone the nested child to decouple it from its
            parent node.
        */return domNodeWrapper.childNodes[0].cloneNode(true);return domNodeWrapper};var fade=function fade(domNode,intervalInMilliseconds,out){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}if(out===void 0){out=true}var transitionBackup=domNode.style.transition;var visibleBackup=domNode.style.visibility;var opacityBackup=domNode.style.opacity;var hadStyleAttribute=domNode.hasAttribute("style");if(out){domNode.style.visibility="hidden";domNode.style.opacity="0";domNode.style.transition="visibility 0s ".concat(String(intervalInMilliseconds),"ms, ")+"opacity ".concat(String(intervalInMilliseconds),"ms linear")}else{domNode.style.visibility="visible";domNode.style.opacity="1";domNode.style.transition="opacity ".concat(String(intervalInMilliseconds),"ms linear")}var clearTimeoutAndResetDomNode=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE;var resolved=false;var promise=new Promise(function(resolve){clearTimeoutAndResetDomNode=function clearTimeoutAndResetDomNode(){domNode.style.transition=transitionBackup;resolved=true;resolve()};void (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .timeout */ .wR)(intervalInMilliseconds).then(clearTimeoutAndResetDomNode)});promise.clear=function(){if(!resolved){domNode.style.transition="none";clearTimeoutAndResetDomNode()}};promise.resetStyles=function(){if(hadStyleAttribute){domNode.style.transition=transitionBackup;domNode.style.visibility=visibleBackup;domNode.style.opacity=opacityBackup}else domNode.removeAttribute("style")};return promise};var fadeIn=function fadeIn(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds,false)};var fadeOut=function fadeOut(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds)};var getAll=function getAll(root){if(!_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)return[];var nodes=[];// SHOW_ALL includes elements, text, and comments
var walker=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document.createTreeWalker(root,NodeFilter.SHOW_ALL,null);var currentNode=walker.currentNode;while(currentNode){nodes.push(currentNode);currentNode=walker.nextNode()}return nodes};var getParents=function getParents(node){var result=[];while(node.parentNode){result.push(node.parentNode);node=node.parentNode}return result};var _getText=function getText(root,recursive){if(recursive===void 0){recursive=false}if(root.nodeType===Node.TEXT_NODE){var _root$nodeValue;var content=(_root$nodeValue=root.nodeValue)===null||_root$nodeValue===void 0?void 0:_root$nodeValue.trim();if(content)return[content]}var result=[];var _iterator=_createForOfIteratorHelper(root.childNodes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var domNode=_step.value;if(recursive||domNode.nodeType===Node.TEXT_NODE)result.push.apply(result,_toConsumableArray(_getText(domNode)))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result};/**
 * Smoothly scrolls both horizontally and vertically to a target DOM node.
 * Cancels instantly if the user interacts with the mouse, touch, or keys.
 * @param givenOptions - Configuration options.
 * @param givenOptions.targetDomNode - The DOM node you want to scroll to.
 * @param givenOptions.containerDomNode - The scrollable parent.
 * @param givenOptions.durationInMilliseconds - Animation duration in
 * milliseconds.
 * @param givenOptions.interruptOnManualScroll - Whether to stop the animation
 * if the user starts to scroll manually.
 * @param givenOptions.offset - Pixel offsets.
 * @param givenOptions.offset.top - Vertical offset in pixels.
 * @param givenOptions.offset.left - Horizontal offset in pixels.
 */var interruptableScrollTo=function interruptableScrollTo(givenOptions){if(givenOptions===void 0){givenOptions={}}if(!(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document&&_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window))return;var document=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document;var body=document.body;var window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window;if(givenOptions.containerDomNode&&!("getBoundingClientRect"in givenOptions.containerDomNode)&&"parentElement"in givenOptions.containerDomNode)givenOptions.containerDomNode=givenOptions.containerDomNode.parentElement;if(givenOptions.targetDomNode&&!("getBoundingClientRect"in givenOptions.targetDomNode)&&"parentElement"in givenOptions.targetDomNode)givenOptions.targetDomNode=givenOptions.targetDomNode.parentElement;var options=_objectSpread({targetDomNode:body,containerDomNode:window,durationInMilliseconds:500,offset:_objectSpread({top:0,left:0},givenOptions.offset||{}),interruptOnManualScroll:true},givenOptions);var isWindow=options.containerDomNode===window;// 1. Get current starting scroll positions
var startY=isWindow?window.scrollY||document.documentElement.scrollTop:options.containerDomNode.scrollTop;var startX=isWindow?window.scrollX||document.documentElement.scrollLeft:options.containerDomNode.scrollLeft;// 2. Calculate targetDomNode positions for both axes
var targetY;var targetX;if(isWindow){var rect=options.targetDomNode.getBoundingClientRect();targetY=rect.top+(window.scrollY||document.documentElement.scrollTop)-options.offset.top;targetX=rect.left+(window.scrollX||document.documentElement.scrollLeft)-options.offset.left}else{// Relative to the scrollable parent container
targetY=options.targetDomNode.offsetTop-options.containerDomNode.offsetTop-options.offset.top;targetX=options.targetDomNode.offsetLeft-options.containerDomNode.offsetLeft-options.offset.left}var distanceY=targetY-startY;var distanceX=targetX-startX;// If no movement is needed, exit immediately
if(distanceY===0&&distanceX===0)return;var startTime=null;var animationFrameId=null;// Easing function
var easeInOutQuad=function easeInOutQuad(time){return time<0.5?2*time*time:-1+(4-2*time)*time};if(options.interruptOnManualScroll){// 3. Define the interrupt / teardown system
STOP_AUTO_SCROLLING.value=function(){if(animationFrameId){cancelAnimationFrame(animationFrameId);animationFrameId=null}for(var _i=0,_arr=[body,document.querySelector("html"),window];_i<_arr.length;_i++){var node=_arr[_i];for(var _i2=0,_MANUAL_SCROLL_EVENT_=MANUAL_SCROLL_EVENT_NAMES;_i2<_MANUAL_SCROLL_EVENT_.length;_i2++){var name=_MANUAL_SCROLL_EVENT_[_i2];node===null||node===void 0||node.removeEventListener(name,STOP_AUTO_SCROLLING.value)}}STOP_AUTO_SCROLLING.value=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE};for(var _i3=0,_arr2=[body,document.querySelector("html"),window];_i3<_arr2.length;_i3++){var node=_arr2[_i3];for(var _i4=0,_MANUAL_SCROLL_EVENT_2=MANUAL_SCROLL_EVENT_NAMES;_i4<_MANUAL_SCROLL_EVENT_2.length;_i4++){var name=_MANUAL_SCROLL_EVENT_2[_i4];node===null||node===void 0||node.addEventListener(name,STOP_AUTO_SCROLLING.value,{passive:true})}}}// 4. Multi-axis animation loop
var _step2=function step(currentTime){if(!startTime)startTime=currentTime;var progress=currentTime-startTime;var timeRatio=Math.min(progress/options.durationInMilliseconds,1);var easedRatio=easeInOutQuad(timeRatio);// Linearly interpolate the positions based on eased progress.
var nextY=startY+distanceY*easedRatio;var nextX=startX+distanceX*easedRatio;// Apply scroll to window or container.
if(isWindow)window.scrollTo(nextX,nextY);else{;options.containerDomNode.scrollTop=nextY;options.containerDomNode.scrollLeft=nextX}if(timeRatio<1)animationFrameId=requestAnimationFrame(_step2);else STOP_AUTO_SCROLLING.value()};animationFrameId=requestAnimationFrame(_step2)};/**
 * Scrolls to the given DomNode's location or tio of the page.
 * @param targetDomNode - DomNode to scroll to. If not given, scrolls to the
 * top of the page.
 * @param behavior - Scroll behavior to use.
 */var scrollTo=function scrollTo(targetDomNode,behavior){var _globalContext$window;if(targetDomNode===void 0){targetDomNode=null}if(behavior===void 0){behavior="smooth"}if(targetDomNode&&!("getBoundingClientRect"in targetDomNode))targetDomNode=targetDomNode.parentElement;var _ref=targetDomNode?targetDomNode.getBoundingClientRect():{left:0,top:0},left=_ref.left,top=_ref.top;(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.scrollTo({left:left,top:top,behavior:behavior})};/**
 * Checks whether given html or text strings are equal.
 * @param first - First html, selector to dom node or text to compare.
 * @param second - Second html, selector to dom node or text to compare.
 * @param forceHTMLString - Indicates whether given contents are
 * interpreted as html string (otherwise automatic detection will be
 * triggered).
 * @returns Returns true if both dom representations are equivalent.
 */var isEquivalent=function isEquivalent(first,second,forceHTMLString){if(forceHTMLString===void 0){forceHTMLString=false}if(first===second)return true;if(!(first&&second))return false;if(!_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)throw new Error("Missing document in global context.");var createElement=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document.createElement.bind(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document);var determineHTMLPattern=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;var inputs={first:first,second:second};var domNodes={first:createElement("dummy"),second:createElement("dummy")};/*
        NOTE: Assume that strings that start "<" and end with ">" are mark up
        and skip the more expensive regular expression check.
    */for(var _i5=0,_Object$entries=Object.entries(inputs);_i5<_Object$entries.length;_i5++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i5],2),type=_Object$entries$_i[0],html=_Object$entries$_i[1];if(typeof html==="string"){if(forceHTMLString||html.startsWith("<")&&html.endsWith(">")&&html.length>=3||determineHTMLPattern.test(html))domNodes[type]=createDomNodes(html);else{var domNode=document.querySelector(html);if(domNode)/*
                        NOTE: We copy the node tree to not manipulate the
                        original dom node by normalizing it afterward.
                    */domNodes[type]=domNode.cloneNode(true);else return false}}else if("cloneNode"in html)domNodes[type]=html.cloneNode(true);else return false}domNodes.first.normalize();domNodes.second.normalize();return domNodes.first.isEqualNode(domNodes.second)};/**
 * Checks whether the given dom node is visible or takes space in the document
 * flow.
 * Elements with visibility: hidden or opacity: 0 are considered to be visible,
 * since they still consume space in the layout. During animations that hide an
 * element, the element is considered to be visible until the end of the
 * animation.
 * @param domNode - To inspect.
 * @returns A boolean indicating the visibility.
 */var _isHidden=function isHidden(domNode){var _globalContext$docume;return!((_globalContext$docume=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)!==null&&_globalContext$docume!==void 0&&_globalContext$docume.contains(domNode))||domNode.style.display==="none"||domNode.nodeName==="INPUT"&&domNode.getAttribute("type")==="hidden"||["contents","inline"].includes(domNode.style.display)&&(!("innerHTML"in domNode)||domNode.innerHTML.trim()==="")||domNode.style.height==="0px"&&domNode.style.width==="0px"||Boolean(domNode.parentElement)&&_isHidden(domNode.parentElement)};var onDocumentReady=function onDocumentReady(callback){return new Promise(function(resolve){return void _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(!["complete","interactive"].includes(document.readyState)){_context.n=2;break}_context.n=1;return (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .timeout */ .wR)();case 1:resolve();callback===null||callback===void 0||callback();_context.n=3;break;case 2:document.addEventListener("DOMContentLoaded",function(){resolve();callback===null||callback===void 0||callback()});case 3:return _context.a(2)}},_callee)}))()})};/**
 * Replaces a given dom node with given nodes.
 * @param domNodeToReplace - Node to replace its children.
 * @param replacementDomNodes - Node or array of nodes to use as replacement.
 * @param skipEmptyTextNodes - Configures whether to trim text.
 */var replace=function replace(domNodeToReplace,replacementDomNodes,skipEmptyTextNodes){if(skipEmptyTextNodes===void 0){skipEmptyTextNodes=false}var _iterator2=_createForOfIteratorHelper([].concat(replacementDomNodes).reverse()),_step3;try{for(_iterator2.s();!(_step3=_iterator2.n()).done;){var _replacement$nodeValu;var replacement=_step3.value;if(!(skipEmptyTextNodes&&replacement.nodeType===Node.TEXT_NODE&&((_replacement$nodeValu=replacement.nodeValue)===null||_replacement$nodeValu===void 0?void 0:_replacement$nodeValu.trim())===""))domNodeToReplace.after(replacement)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}domNodeToReplace.remove()};/**
 * Moves the content of a given dom node one level up and removes the given
 * node.
 * @param domNode - Node to unwrap.
 * @returns List of unwrapped nodes.
 */var unwrap=function unwrap(domNode){var parent=domNode.parentNode;var result=[];// NOTE: We need to use "Array.from" to copy the list.
for(var _i6=0,_Array$from=Array.from(domNode.childNodes);_i6<_Array$from.length;_i6++){var childNode=_Array$from[_i6];result.push(childNode);if(parent)parent.insertBefore(childNode,domNode)}if(parent)parent.removeChild(domNode);return result};var wrap=function wrap(domNodes,wrapper){var domNodeList=domNodes.length?Array.from(domNodes):[domNodes];// Use the first element's position as the anchor point
var first=domNodeList[0];if(first.parentNode)first.parentNode.insertBefore(wrapper,first);var _iterator3=_createForOfIteratorHelper(domNodeList),_step4;try{for(_iterator3.s();!(_step4=_iterator3.n()).done;){var domNode=_step4.value;wrapper.appendChild(domNode)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}};

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_349654__) {

/* harmony export */ __nested_webpack_require_349654__.d(__nested_webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ handleChildProcess; },
/* harmony export */   q: function() { return /* binding */ getProcessCloseHandler; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_349654__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module process *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//**
 * Generates a one shot close handler which triggers given promise methods.
 * If a reason is provided it will be given as resolve target. An Error will be
 * generated if return code is not zero. The generated Error has a property
 * "returnCode" which provides corresponding process return code.
 * @param resolve - Promise's resolve function.
 * @param reject - Promise's reject function.
 * @param reason - Promise target if process has a zero return code.
 * @param callback - Optional function to call of process has successfully
 * finished.
 * @returns Process close handler function.
 */var getProcessCloseHandler=function getProcessCloseHandler(resolve,reject,reason,callback){if(reason===void 0){reason=null}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .NOOP */ .tE}var finished=false;return function(returnCode){if(finished)finished=true;else{finished=true;for(var _len=arguments.length,parameters=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){parameters[_key-1]=arguments[_key]}if(typeof returnCode!=="number"||returnCode===0){callback();resolve({reason:reason,parameters:parameters})}else{var error=new Error("Task exited with error code ".concat(String(returnCode)));error.returnCode=returnCode;error.parameters=parameters;reject(error)}}}};/**
 * Forwards given child process communication channels to corresponding current
 * process communication channels.
 * @param childProcess - Child process meta data.
 * @returns Given child process meta data.
 */var handleChildProcess=function handleChildProcess(childProcess){if(childProcess.stdout)childProcess.stdout.pipe(process.stdout);if(childProcess.stderr)childProcess.stderr.pipe(process.stderr);childProcess.on("close",function(returnCode){if(returnCode!==0)console.error("Task exited with error code ".concat(String(returnCode)))});return childProcess};

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_352404__) {

/* harmony export */ __nested_webpack_require_352404__.d(__nested_webpack_exports__, {
/* harmony export */   Ez: function() { return /* binding */ determineUniqueScopeName; },
/* harmony export */   MX: function() { return /* binding */ UTILITY_SCOPE; },
/* harmony export */   Xw: function() { return /* binding */ UTILITY_SCOPE_VALUES; },
/* harmony export */   bG: function() { return /* binding */ UTILITY_SCOPE_NAMES; },
/* harmony export */   uf: function() { return /* binding */ isolateScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_352404__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_352404__(5);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_352404__(16);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_352404__(17);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_352404__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_352404__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_352404__(4);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_352404__(15);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_352404__(2);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_352404__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_352404__(3);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_352404__(7);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_352404__(13);
var _array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object = {};
__nested_webpack_require_352404__.r(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object);
__nested_webpack_require_352404__.d(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object, {
	aggregatePropertyIfEqual: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.ST; },
	deleteEmptyItems: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.dO; },
	extract: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.o6; },
	extractIfMatches: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.u7; },
	extractIfPropertyExists: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.q6; },
	extractIfPropertyMatches: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Ht; },
	intersect: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.y$; },
	makeArray: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.gv; },
	makeRange: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.QR; },
	merge: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.h1; },
	paginate: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.En; },
	permute: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Ny; },
	permuteLength: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.bH; },
	removeArrayItem: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Hb; },
	sortTopological: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.UX; },
	sumUpProperty: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__._2; },
	unique: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Am; }
});
var _datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object = {};
__nested_webpack_require_352404__.r(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object);
__nested_webpack_require_352404__.d(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object, {
	DATE_TIME_PATTERN_CACHE: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.hr; },
	dateTimeFormat: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.LE; },
	interpretDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.JZ; },
	normalizeDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.DP; },
	sliceWeekday: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.jJ; }
});
var _filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object = {};
__nested_webpack_require_352404__.r(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object);
__nested_webpack_require_352404__.d(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object, {
	copyDirectoryRecursive: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.vX; },
	copyDirectoryRecursiveSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.uD; },
	copyFile: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.m3; },
	copyFileSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.Xp; },
	importFilesystemAPI: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.L5; },
	imports: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.VW; },
	isDirectory: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.wd; },
	isDirectorySync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.ZP; },
	isFile: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.fo; },
	isFileSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.WY; },
	walkDirectoryRecursively: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.y3; },
	walkDirectoryRecursivelySync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.hu; }
});
var _function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object = {};
__nested_webpack_require_352404__.r(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object);
__nested_webpack_require_352404__.d(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object, {
	getParameterNames: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.Gj; },
	identity: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.D_; },
	invertArrayFilter: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.gH; }
});
var _indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object = {};
__nested_webpack_require_352404__.r(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object);
__nested_webpack_require_352404__.d(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object, {
	isAnyMatching: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.GP; },
	isArrayLike: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Xj; },
	isFunction: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Tn; },
	isMap: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.jh; },
	isNumeric: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.kf; },
	isObject: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Gv; },
	isPlainObject: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Qd; },
	isProxy: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.ju; },
	isSet: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.vM; },
	isWindow: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.l6; }
});
var _Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object = {};
__nested_webpack_require_352404__.r(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object);
__nested_webpack_require_352404__.d(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object, {
	LEVELS: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.A_; },
	LEVELS_COLOR: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Wh; },
	Logger: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Vy; },
	"default": function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Ay; }
});
var _module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object = {};
__nested_webpack_require_352404__.r(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object);
__nested_webpack_require_352404__.d(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object, {
	clearRequireCache: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Ni; },
	currentRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.lE; },
	determineGlobalContext: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.a8; },
	getCurrentRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.zM; },
	isImportSyntaxSupported: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.xN; },
	isolatedRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Dx; },
	optionalImport: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Sw; },
	optionalRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.I5; },
	setOptionalRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.SD; }
});
var _number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object = {};
__nested_webpack_require_352404__.r(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object);
__nested_webpack_require_352404__.d(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object, {
	ceil: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.mk; },
	floor: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.RI; },
	getUTCTimestamp: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.n$; },
	isNotANumber: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.W2; },
	round: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.LI; }
});
var _object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object = {};
__nested_webpack_require_352404__.r(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object);
__nested_webpack_require_352404__.d(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object, {
	addDynamicGetterAndSetter: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.QB; },
	convertCircularObjectToJSON: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.zP; },
	convertMapToPlainObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.oW; },
	convertPlainObjectToMap: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.eQ; },
	convertSubstringInPlainObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.dr; },
	copy: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.C; },
	determineType: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Sj; },
	equals: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.aI; },
	evaluateAsyncDynamicData: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Pi; },
	evaluateDynamicData: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.J3; },
	extend: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.X$; },
	getProxyHandler: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.bo; },
	mask: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.dK; },
	modifyObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__._2; },
	removeKeyPrefixes: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.uu; },
	removeKeysInEvaluation: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.iE; },
	represent: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Do; },
	sort: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.di; },
	unwrapProxy: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.q1; }
});
var _string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object = {};
__nested_webpack_require_352404__.r(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object);
__nested_webpack_require_352404__.d(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object, {
	ALLOWED_STARTING_VARIABLE_SYMBOLS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.bM; },
	ALLOWED_VARIABLE_SYMBOLS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.aL; },
	AsyncFunction: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.fS; },
	FIX_ENCODING_ERROR_MAPPING: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.k7; },
	KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._x; },
	POLYFILL_TEMPLATE_STRINGS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Ud; },
	addSeparatorToPath: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.p0; },
	camelCaseToDelimited: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.h1; },
	capitalize: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.ZH; },
	compile: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.wE; },
	compressStyleValue: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.v0; },
	convertToValidVariableName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.a$; },
	decodeHTMLEntities: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Lt; },
	delimitedToCamelCase: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.XD; },
	encodeURIComponentExtended: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.V5; },
	escapeRegularExpressions: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.jt; },
	evaluate: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._3; },
	evaluateOrThrowError: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.VK; },
	findNormalizedMatchRange: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Tx; },
	fixKnownEncodingErrors: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.pM; },
	format: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.GP; },
	getDomainName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Wq; },
	getEditDistance: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Un; },
	getPortNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.VU; },
	getProtocolName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.gB; },
	getURLParameter: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.LK; },
	hasPathPrefix: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Yn; },
	limit: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.AB; },
	lowerCase: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.gQ; },
	mark: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Gy; },
	maskForRegularExpression: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.W5; },
	normalizeDomNodeSelector: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.RS; },
	normalizePhoneNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.h2; },
	normalizeURL: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.dc; },
	normalizeZipCode: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.K$; },
	parseEncodedObject: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.jL; },
	representPhoneNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.KC; },
	representURL: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.oz; },
	serviceURLEquals: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._4; },
	sliceAllExceptNumberAndLastSeparator: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.U7; }
});
var _utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object = {};
__nested_webpack_require_352404__.r(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object);
__nested_webpack_require_352404__.d(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object, {
	debounce: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.sg; },
	preventDefault: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.wo; },
	stopPropagation: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.dG; },
	timeout: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.wR; },
	trailingThrottle: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.p0; }
});
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module scope *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var UTILITY_SCOPE={array:_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object,datetime:_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object,filesystem:_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object,functions:_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object,indicators:_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object,logger:_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object,module:_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object,number:_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object,object:_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object,string:_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object,utility:_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object};/*
    NOTE: Not generating these two arrays facilitates static code analysis in
    consuming code.
*/var UTILITY_SCOPE_NAMES=["array","datetime","filesystem","functions","indicators","logger","module","number","object","string","utility"];var UTILITY_SCOPE_VALUES=[_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object,_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object,_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object,_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object,_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object,_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object,_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object,_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object,_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object,_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object,_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object];/**
 * Generates a unique name in given scope (useful for jsonp requests).
 * @param prefix - A prefix which will be prepended to unique name.
 * @param suffix - A suffix which will be prepended to unique name.
 * @param scope - A scope where the name should be unique.
 * @param initialUniqueName - An initial scope name to use if not exists.
 * @returns The function name.
 */var determineUniqueScopeName=function determineUniqueScopeName(prefix,suffix,scope,initialUniqueName){if(prefix===void 0){prefix="callback"}if(suffix===void 0){suffix=""}if(scope===void 0){scope=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz}if(initialUniqueName===void 0){initialUniqueName=""}if(initialUniqueName.length&&!(initialUniqueName in scope))return initialUniqueName;var uniqueName=prefix+suffix;for(var iteration=0;iteration<_context_js__WEBPACK_IMPORTED_MODULE_1__/* .MAXIMAL_NUMBER_OF_ITERATIONS */ .$Q.value;iteration++){uniqueName=prefix+String(Math.round(Math.random()*Math.pow(10,10)))+suffix;if(!(uniqueName in scope))break}return uniqueName};/**
 * Overwrites all inherited variables from parent scope with "undefined".
 * @param scope - A scope where inherited names will be removed.
 * @param prefixesToIgnore - Name prefixes to ignore during deleting names in
 * given scope.
 * @returns The isolated scope.
 */var isolateScope=function isolateScope(scope,prefixesToIgnore){if(prefixesToIgnore===void 0){prefixesToIgnore=[]}for(var name in scope)if(!(prefixesToIgnore.includes(name.charAt(0))||["constructor","prototype","this"].includes(name)||Object.prototype.hasOwnProperty.call(scope,name)))/*
                NOTE: Delete ("delete $scope[name]") doesn't destroy the
                automatic lookup to parent scope.
            */scope[name]=undefined;return scope};

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_371860__) {

/* harmony export */ __nested_webpack_require_371860__.d(__nested_webpack_exports__, {
/* harmony export */   $Qt: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.$Q; },
/* harmony export */   $yZ: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.$y; },
/* harmony export */   ABv: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.AB; },
/* harmony export */   A_Y: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.A_; },
/* harmony export */   AmM: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Am; },
/* harmony export */   CHz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.CH; },
/* harmony export */   CJD: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.CJ; },
/* harmony export */   C_t: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.C_; },
/* harmony export */   Cal: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.C; },
/* harmony export */   CcH: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Cc; },
/* harmony export */   CpF: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.j4; },
/* harmony export */   Cpg: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Cp; },
/* harmony export */   D70: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.D7; },
/* harmony export */   DPF: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.DP; },
/* harmony export */   D_O: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.D_; },
/* harmony export */   DoQ: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Do; },
/* harmony export */   Dx_: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Dx; },
/* harmony export */   EnV: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.En; },
/* harmony export */   EzC: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.Ez; },
/* harmony export */   F9T: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.F9; },
/* harmony export */   FIJ: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.FI; },
/* harmony export */   FmA: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Fm; },
/* harmony export */   FpT: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Fp; },
/* harmony export */   G3o: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.G3; },
/* harmony export */   GPX: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.GP; },
/* harmony export */   GPZ: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.GP; },
/* harmony export */   GUh: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.GU; },
/* harmony export */   Gcp: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Gc; },
/* harmony export */   GjK: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.Gj; },
/* harmony export */   Gvm: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Gv; },
/* harmony export */   GyP: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Gy; },
/* harmony export */   Gye: function() { return /* reexport safe */ _process_js__WEBPACK_IMPORTED_MODULE_14__.G; },
/* harmony export */   HCR: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.HC; },
/* harmony export */   HKz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.HK; },
/* harmony export */   Hb_: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Hb; },
/* harmony export */   Hgw: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Hg; },
/* harmony export */   HtC: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Ht; },
/* harmony export */   I5u: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.I5; },
/* harmony export */   Iyg: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Iy; },
/* harmony export */   J3U: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.J3; },
/* harmony export */   JZy: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.JZ; },
/* harmony export */   K$h: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.K$; },
/* harmony export */   KC: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.KC; },
/* harmony export */   L5n: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.L5; },
/* harmony export */   LE6: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.LE; },
/* harmony export */   LIG: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.LI; },
/* harmony export */   LK5: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.LK; },
/* harmony export */   LV7: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.LV; },
/* harmony export */   Lbj: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Lb; },
/* harmony export */   Lmt: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Lm; },
/* harmony export */   LtR: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Lt; },
/* harmony export */   Lz6: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.Lz; },
/* harmony export */   MPP: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.MP; },
/* harmony export */   MXd: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.MX; },
/* harmony export */   NiH: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Ni; },
/* harmony export */   Ny6: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Ny; },
/* harmony export */   O4d: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.O4; },
/* harmony export */   PiL: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Pi; },
/* harmony export */   Plz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Pl; },
/* harmony export */   Q2$: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Q2; },
/* harmony export */   QB1: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.QB; },
/* harmony export */   QBp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.QB; },
/* harmony export */   QH2: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.QH; },
/* harmony export */   QR5: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.QR; },
/* harmony export */   QdQ: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Qd; },
/* harmony export */   RIf: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.RI; },
/* harmony export */   RSk: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.RS; },
/* harmony export */   Ri8: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.Ri; },
/* harmony export */   Rvh: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Rv; },
/* harmony export */   SDh: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.SD; },
/* harmony export */   STO: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.ST; },
/* harmony export */   Sai: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.S; },
/* harmony export */   Sjp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Sj; },
/* harmony export */   Swo: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Sw; },
/* harmony export */   TVt: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.TV; },
/* harmony export */   Tnt: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Tn; },
/* harmony export */   Txh: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Tx; },
/* harmony export */   U7e: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.U7; },
/* harmony export */   UKu: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.UK; },
/* harmony export */   UXV: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.UX; },
/* harmony export */   Ud8: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Ud; },
/* harmony export */   UnK: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Un; },
/* harmony export */   V5V: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.V5; },
/* harmony export */   VGy: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.VG; },
/* harmony export */   VK1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.VK; },
/* harmony export */   VU: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.VU; },
/* harmony export */   VWk: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.VW; },
/* harmony export */   Vxr: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Vx; },
/* harmony export */   VyI: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.Vy; },
/* harmony export */   W2K: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.W2; },
/* harmony export */   W5V: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.W5; },
/* harmony export */   WYL: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.WY; },
/* harmony export */   WhR: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.Wh; },
/* harmony export */   WqZ: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Wq; },
/* harmony export */   X$i: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.X$; },
/* harmony export */   XD1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.XD; },
/* harmony export */   Xj4: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Xj; },
/* harmony export */   XnV: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Xn; },
/* harmony export */   XpE: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.Xp; },
/* harmony export */   Xwj: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.Xw; },
/* harmony export */   YG: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.YG; },
/* harmony export */   YNy: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.YN; },
/* harmony export */   YZc: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.YZ; },
/* harmony export */   Yj7: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.Yj; },
/* harmony export */   Yn1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Yn; },
/* harmony export */   Z9G: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Z9; },
/* harmony export */   ZF5: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ZF; },
/* harmony export */   ZHe: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.ZH; },
/* harmony export */   ZIk: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ZI; },
/* harmony export */   ZPH: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.ZP; },
/* harmony export */   ZQM: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.ZQ; },
/* harmony export */   Zxe: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.Zx; },
/* harmony export */   _2M: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__._2; },
/* harmony export */   _2j: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__._2; },
/* harmony export */   _3z: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._3; },
/* harmony export */   _4_: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._4; },
/* harmony export */   _xl: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._x; },
/* harmony export */   a$v: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.a$; },
/* harmony export */   a85: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.a8; },
/* harmony export */   aIS: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.aI; },
/* harmony export */   aLL: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.aL; },
/* harmony export */   bCg: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bC; },
/* harmony export */   bF9: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bF; },
/* harmony export */   bGc: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.bG; },
/* harmony export */   bHv: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.bH; },
/* harmony export */   bMn: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.bM; },
/* harmony export */   bQE: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bQ; },
/* harmony export */   boz: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.bo; },
/* harmony export */   cB6: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Ld; },
/* harmony export */   cBX: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.cB; },
/* harmony export */   c_I: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.c_; },
/* harmony export */   dGi: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.dG; },
/* harmony export */   dK4: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.dK; },
/* harmony export */   dKf: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.dK; },
/* harmony export */   dO3: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.dO; },
/* harmony export */   dcF: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.dc; },
/* harmony export */   diJ: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.di; },
/* harmony export */   drT: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.dr; },
/* harmony export */   dy: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.dy; },
/* harmony export */   eQA: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.eQ; },
/* harmony export */   f7_: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.f7; },
/* harmony export */   fGw: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.fG; },
/* harmony export */   fSi: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.fS; },
/* harmony export */   fo6: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.fo; },
/* harmony export */   g6W: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.g6; },
/* harmony export */   gBH: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.gB; },
/* harmony export */   gHf: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.gH; },
/* harmony export */   gQT: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.gQ; },
/* harmony export */   gvj: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.gv; },
/* harmony export */   h1I: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.h1; },
/* harmony export */   h1R: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.h1; },
/* harmony export */   h2u: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.h2; },
/* harmony export */   hrV: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.hr; },
/* harmony export */   hue: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.hu; },
/* harmony export */   iEp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.iE; },
/* harmony export */   j0_: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.j0; },
/* harmony export */   jEx: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jE; },
/* harmony export */   jGn: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jG; },
/* harmony export */   jJA: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.jJ; },
/* harmony export */   jLw: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.jL; },
/* harmony export */   jft: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jf; },
/* harmony export */   jgV: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jg; },
/* harmony export */   jhc: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.jh; },
/* harmony export */   jtP: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.jt; },
/* harmony export */   ju_: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.ju; },
/* harmony export */   k7H: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.k7; },
/* harmony export */   kf$: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.kf; },
/* harmony export */   kpl: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.kp; },
/* harmony export */   l2f: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.l2; },
/* harmony export */   l6U: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.l6; },
/* harmony export */   lE: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.lE; },
/* harmony export */   l_R: function() { return /* reexport safe */ _cli_js__WEBPACK_IMPORTED_MODULE_2__.l; },
/* harmony export */   lp4: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.lp; },
/* harmony export */   m3v: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.m3; },
/* harmony export */   mkO: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.mk; },
/* harmony export */   mlT: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ml; },
/* harmony export */   n$t: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.n$; },
/* harmony export */   o6p: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.o6; },
/* harmony export */   oAg: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.oA; },
/* harmony export */   oWd: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.oW; },
/* harmony export */   ozN: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.oz; },
/* harmony export */   p06: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.p0; },
/* harmony export */   p0o: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.p0; },
/* harmony export */   pMn: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.pM; },
/* harmony export */   p_N: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.p_; },
/* harmony export */   q1l: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.q1; },
/* harmony export */   q4_: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.q4; },
/* harmony export */   q6J: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.q6; },
/* harmony export */   qAE: function() { return /* reexport safe */ _process_js__WEBPACK_IMPORTED_MODULE_14__.q; },
/* harmony export */   qGl: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.qG; },
/* harmony export */   qqP: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.qq; },
/* harmony export */   rbM: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.rb; },
/* harmony export */   rqe: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.rq; },
/* harmony export */   sg1: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.sg; },
/* harmony export */   tEg: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.tE; },
/* harmony export */   u7e: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.u7; },
/* harmony export */   uDW: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.uD; },
/* harmony export */   uJx: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.uJ; },
/* harmony export */   ufo: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.uf; },
/* harmony export */   uuH: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.uu; },
/* harmony export */   v0e: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.v0; },
/* harmony export */   vMM: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.vM; },
/* harmony export */   vXz: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.vX; },
/* harmony export */   wEV: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.wE; },
/* harmony export */   wRz: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.wR; },
/* harmony export */   wTB: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.wT; },
/* harmony export */   wdB: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.wd; },
/* harmony export */   woC: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.wo; },
/* harmony export */   xNv: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.xN; },
/* harmony export */   xkW: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.xk; },
/* harmony export */   y$5: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.y$; },
/* harmony export */   y3h: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.y3; },
/* harmony export */   yfJ: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.yf; },
/* harmony export */   zMs: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.zM; },
/* harmony export */   zPE: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.zP; },
/* harmony export */   zm2: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.zm; }
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_371860__(16);
/* harmony import */ var _domNode_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_371860__(25);
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_371860__(22);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_371860__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_371860__(5);
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_371860__(23);
/* harmony import */ var _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_371860__(24);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_371860__(17);
/* harmony import */ var _expression_index_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_371860__(21);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_371860__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_371860__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_371860__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_371860__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_371860__(3);
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_371860__(26);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_371860__(2);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_371860__(27);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_371860__(7);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_371860__(15);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_371860__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module clientnode *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_399954__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_399954__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the module cache
/******/ __nested_webpack_require_399954__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__nested_webpack_require_399954__.d = function(exports, definition) {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__nested_webpack_require_399954__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_399954__.o(definition, key) && !__nested_webpack_require_399954__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__nested_webpack_require_399954__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ }();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ !function() {
/******/ 	__nested_webpack_require_399954__.hmd = function(module) {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: function() {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__nested_webpack_require_399954__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_399954__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __nested_webpack_exports__ = __nested_webpack_require_399954__(28);
/******/ var __webpack_exports__ABBREVIATIONS = __nested_webpack_exports__.Iyg;
/******/ var __webpack_exports__ALLOWED_STARTING_VARIABLE_SYMBOLS = __nested_webpack_exports__.bMn;
/******/ var __webpack_exports__ALLOWED_VARIABLE_SYMBOLS = __nested_webpack_exports__.aLL;
/******/ var __webpack_exports__ANIMATION_END_EVENT_NAMES = __nested_webpack_exports__.Vxr;
/******/ var __webpack_exports__AsyncFunction = __nested_webpack_exports__.fSi;
/******/ var __webpack_exports__CLASS_TO_TYPE_MAPPING = __nested_webpack_exports__.rqe;
/******/ var __webpack_exports__CLI_COLOR = __nested_webpack_exports__.l_R;
/******/ var __webpack_exports__CLOSE_EVENT_NAMES = __nested_webpack_exports__.jGn;
/******/ var __webpack_exports__CONSOLE_METHODS = __nested_webpack_exports__.jgV;
/******/ var __webpack_exports__DATE_TIME_PATTERN_CACHE = __nested_webpack_exports__.hrV;
/******/ var __webpack_exports__DEFAULT_ENCODING = __nested_webpack_exports__.uJx;
/******/ var __webpack_exports__DEFAULT_OPTIONS = __nested_webpack_exports__.lp4;
/******/ var __webpack_exports__FIX_ENCODING_ERROR_MAPPING = __nested_webpack_exports__.k7H;
/******/ var __webpack_exports__IGNORE_NULL_AND_UNDEFINED_SYMBOL = __nested_webpack_exports__.p_N;
/******/ var __webpack_exports__KEYBOARD_CODES = __nested_webpack_exports__.dy;
/******/ var __webpack_exports__KEY_CODES = __nested_webpack_exports__.Lbj;
/******/ var __webpack_exports__KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS = __nested_webpack_exports__._xl;
/******/ var __webpack_exports__LEVELS = __nested_webpack_exports__.A_Y;
/******/ var __webpack_exports__LEVELS_COLOR = __nested_webpack_exports__.WhR;
/******/ var __webpack_exports__LOCALES = __nested_webpack_exports__.YZc;
/******/ var __webpack_exports__Lock = __nested_webpack_exports__.c_I;
/******/ var __webpack_exports__Logger = __nested_webpack_exports__.VyI;
/******/ var __webpack_exports__MANUAL_SCROLL_EVENT_NAMES = __nested_webpack_exports__.ZQM;
/******/ var __webpack_exports__MAXIMAL_NUMBER_OF_ITERATIONS = __nested_webpack_exports__.$Qt;
/******/ var __webpack_exports__NOOP = __nested_webpack_exports__.tEg;
/******/ var __webpack_exports__NO_ITEM_FOUND_SYMBOL = __nested_webpack_exports__.YNy;
/******/ var __webpack_exports__PLAIN_OBJECT_PROTOTYPES = __nested_webpack_exports__.jEx;
/******/ var __webpack_exports__POLYFILL_TEMPLATE_STRINGS = __nested_webpack_exports__.Ud8;
/******/ var __webpack_exports__SCROLL_EVENT_NAMES = __nested_webpack_exports__.Sai;
/******/ var __webpack_exports__SELECTOR_KEY_NAMES = __nested_webpack_exports__.fGw;
/******/ var __webpack_exports__SPECIAL_REGEX_SEQUENCES = __nested_webpack_exports__.FIJ;
/******/ var __webpack_exports__STOP_AUTO_SCROLLING = __nested_webpack_exports__.D70;
/******/ var __webpack_exports__Semaphore = __nested_webpack_exports__.jft;
/******/ var __webpack_exports__TRANSITION_END_EVENT_NAMES = __nested_webpack_exports__.GUh;
/******/ var __webpack_exports__UTILITY_SCOPE = __nested_webpack_exports__.MXd;
/******/ var __webpack_exports__UTILITY_SCOPE_NAMES = __nested_webpack_exports__.bGc;
/******/ var __webpack_exports__UTILITY_SCOPE_VALUES = __nested_webpack_exports__.Xwj;
/******/ var __webpack_exports__VALUE_COPY_SYMBOL = __nested_webpack_exports__.FpT;
/******/ var __webpack_exports__addDynamicGetterAndSetter = __nested_webpack_exports__.QBp;
/******/ var __webpack_exports__addSeparatorToPath = __nested_webpack_exports__.p0o;
/******/ var __webpack_exports__aggregatePropertyIfEqual = __nested_webpack_exports__.STO;
/******/ var __webpack_exports__cacheImage = __nested_webpack_exports__.CJD;
/******/ var __webpack_exports__camelCaseToDelimited = __nested_webpack_exports__.h1R;
/******/ var __webpack_exports__capitalize = __nested_webpack_exports__.ZHe;
/******/ var __webpack_exports__ceil = __nested_webpack_exports__.mkO;
/******/ var __webpack_exports__checkReachability = __nested_webpack_exports__.QB1;
/******/ var __webpack_exports__checkUnreachability = __nested_webpack_exports__.Zxe;
/******/ var __webpack_exports__clearRequireCache = __nested_webpack_exports__.NiH;
/******/ var __webpack_exports__closest = __nested_webpack_exports__.kpl;
/******/ var __webpack_exports__compile = __nested_webpack_exports__.wEV;
/******/ var __webpack_exports__compressStyleValue = __nested_webpack_exports__.v0e;
/******/ var __webpack_exports__convertCircularObjectToJSON = __nested_webpack_exports__.zPE;
/******/ var __webpack_exports__convertMapToPlainObject = __nested_webpack_exports__.oWd;
/******/ var __webpack_exports__convertPlainObjectToMap = __nested_webpack_exports__.eQA;
/******/ var __webpack_exports__convertSubstringInPlainObject = __nested_webpack_exports__.drT;
/******/ var __webpack_exports__convertToValidVariableName = __nested_webpack_exports__.a$v;
/******/ var __webpack_exports__copy = __nested_webpack_exports__.Cal;
/******/ var __webpack_exports__copyDirectoryRecursive = __nested_webpack_exports__.vXz;
/******/ var __webpack_exports__copyDirectoryRecursiveSync = __nested_webpack_exports__.uDW;
/******/ var __webpack_exports__copyFile = __nested_webpack_exports__.m3v;
/******/ var __webpack_exports__copyFileSync = __nested_webpack_exports__.XpE;
/******/ var __webpack_exports__createDomNodes = __nested_webpack_exports__.C_t;
/******/ var __webpack_exports__currentRequire = __nested_webpack_exports__.lE;
/******/ var __webpack_exports__dateTimeFormat = __nested_webpack_exports__.LE6;
/******/ var __webpack_exports__debounce = __nested_webpack_exports__.sg1;
/******/ var __webpack_exports__decodeHTMLEntities = __nested_webpack_exports__.LtR;
/******/ var __webpack_exports__deleteCookie = __nested_webpack_exports__.Yj7;
/******/ var __webpack_exports__deleteEmptyItems = __nested_webpack_exports__.dO3;
/******/ var __webpack_exports__delimitedToCamelCase = __nested_webpack_exports__.XD1;
/******/ var __webpack_exports__determineGlobalContext = __nested_webpack_exports__.a85;
/******/ var __webpack_exports__determineType = __nested_webpack_exports__.Sjp;
/******/ var __webpack_exports__determineUniqueScopeName = __nested_webpack_exports__.EzC;
/******/ var __webpack_exports__encodeURIComponentExtended = __nested_webpack_exports__.V5V;
/******/ var __webpack_exports__equals = __nested_webpack_exports__.aIS;
/******/ var __webpack_exports__escapeRegularExpressions = __nested_webpack_exports__.jtP;
/******/ var __webpack_exports__evaluate = __nested_webpack_exports__._3z;
/******/ var __webpack_exports__evaluateAnd = __nested_webpack_exports__.j0_;
/******/ var __webpack_exports__evaluateArrayContains = __nested_webpack_exports__.Cpg;
/******/ var __webpack_exports__evaluateAsyncDynamicData = __nested_webpack_exports__.PiL;
/******/ var __webpack_exports__evaluateConcat = __nested_webpack_exports__.Q2$;
/******/ var __webpack_exports__evaluateCondition = __nested_webpack_exports__.F9T;
/******/ var __webpack_exports__evaluateDynamicData = __nested_webpack_exports__.J3U;
/******/ var __webpack_exports__evaluateExpression = __nested_webpack_exports__.O4d;
/******/ var __webpack_exports__evaluateIf = __nested_webpack_exports__.rbM;
/******/ var __webpack_exports__evaluateMapping = __nested_webpack_exports__.cBX;
/******/ var __webpack_exports__evaluateOperation = __nested_webpack_exports__.ZF5;
/******/ var __webpack_exports__evaluateOptionalThen = __nested_webpack_exports__.f7_;
/******/ var __webpack_exports__evaluateOr = __nested_webpack_exports__.Hgw;
/******/ var __webpack_exports__evaluateOrThrowError = __nested_webpack_exports__.VK1;
/******/ var __webpack_exports__evaluateSelector = __nested_webpack_exports__.Lmt;
/******/ var __webpack_exports__evaluateSelectorUntilLastObject = __nested_webpack_exports__.yfJ;
/******/ var __webpack_exports__evaluateSwitch = __nested_webpack_exports__.CpF;
/******/ var __webpack_exports__evaluateUnaryOperation = __nested_webpack_exports__.CHz;
/******/ var __webpack_exports__extend = __nested_webpack_exports__.X$i;
/******/ var __webpack_exports__extract = __nested_webpack_exports__.o6p;
/******/ var __webpack_exports__extractIfMatches = __nested_webpack_exports__.u7e;
/******/ var __webpack_exports__extractIfPropertyExists = __nested_webpack_exports__.q6J;
/******/ var __webpack_exports__extractIfPropertyMatches = __nested_webpack_exports__.HtC;
/******/ var __webpack_exports__fade = __nested_webpack_exports__.Rvh;
/******/ var __webpack_exports__fadeIn = __nested_webpack_exports__.qGl;
/******/ var __webpack_exports__fadeOut = __nested_webpack_exports__.XnV;
/******/ var __webpack_exports__findNormalizedMatchRange = __nested_webpack_exports__.Txh;
/******/ var __webpack_exports__fixKnownEncodingErrors = __nested_webpack_exports__.pMn;
/******/ var __webpack_exports__floor = __nested_webpack_exports__.RIf;
/******/ var __webpack_exports__format = __nested_webpack_exports__.GPZ;
/******/ var __webpack_exports__getAll = __nested_webpack_exports__.UKu;
/******/ var __webpack_exports__getCookie = __nested_webpack_exports__.Ri8;
/******/ var __webpack_exports__getCurrentRequire = __nested_webpack_exports__.zMs;
/******/ var __webpack_exports__getDomainName = __nested_webpack_exports__.WqZ;
/******/ var __webpack_exports__getEditDistance = __nested_webpack_exports__.UnK;
/******/ var __webpack_exports__getParameterNames = __nested_webpack_exports__.GjK;
/******/ var __webpack_exports__getParents = __nested_webpack_exports__.wTB;
/******/ var __webpack_exports__getPortNumber = __nested_webpack_exports__.VU;
/******/ var __webpack_exports__getProcessCloseHandler = __nested_webpack_exports__.qAE;
/******/ var __webpack_exports__getProtocolName = __nested_webpack_exports__.gBH;
/******/ var __webpack_exports__getProxyHandler = __nested_webpack_exports__.boz;
/******/ var __webpack_exports__getText = __nested_webpack_exports__.q4_;
/******/ var __webpack_exports__getURLParameter = __nested_webpack_exports__.LK5;
/******/ var __webpack_exports__getUTCTimestamp = __nested_webpack_exports__.n$t;
/******/ var __webpack_exports__globalContext = __nested_webpack_exports__.Lz6;
/******/ var __webpack_exports__handleChildProcess = __nested_webpack_exports__.Gye;
/******/ var __webpack_exports__hasPathPrefix = __nested_webpack_exports__.Yn1;
/******/ var __webpack_exports__identity = __nested_webpack_exports__.D_O;
/******/ var __webpack_exports__importFilesystemAPI = __nested_webpack_exports__.L5n;
/******/ var __webpack_exports__imports = __nested_webpack_exports__.VWk;
/******/ var __webpack_exports__interpretDateTime = __nested_webpack_exports__.JZy;
/******/ var __webpack_exports__interruptableScrollTo = __nested_webpack_exports__.CcH;
/******/ var __webpack_exports__intersect = __nested_webpack_exports__.y$5;
/******/ var __webpack_exports__invertArrayFilter = __nested_webpack_exports__.gHf;
/******/ var __webpack_exports__isAndExpression = __nested_webpack_exports__.Gcp;
/******/ var __webpack_exports__isAnyMatching = __nested_webpack_exports__.GPX;
/******/ var __webpack_exports__isArrayContainsExpression = __nested_webpack_exports__.ZIk;
/******/ var __webpack_exports__isArrayLike = __nested_webpack_exports__.Xj4;
/******/ var __webpack_exports__isConcatExpression = __nested_webpack_exports__.HKz;
/******/ var __webpack_exports__isCondition = __nested_webpack_exports__.G3o;
/******/ var __webpack_exports__isDirectory = __nested_webpack_exports__.wdB;
/******/ var __webpack_exports__isDirectorySync = __nested_webpack_exports__.ZPH;
/******/ var __webpack_exports__isEquivalent = __nested_webpack_exports__.l2f;
/******/ var __webpack_exports__isFile = __nested_webpack_exports__.fo6;
/******/ var __webpack_exports__isFileSync = __nested_webpack_exports__.WYL;
/******/ var __webpack_exports__isFunction = __nested_webpack_exports__.Tnt;
/******/ var __webpack_exports__isHidden = __nested_webpack_exports__.dK4;
/******/ var __webpack_exports__isIfExpression = __nested_webpack_exports__.MPP;
/******/ var __webpack_exports__isImportSyntaxSupported = __nested_webpack_exports__.xNv;
/******/ var __webpack_exports__isMap = __nested_webpack_exports__.jhc;
/******/ var __webpack_exports__isMappingExpression = __nested_webpack_exports__.Z9G;
/******/ var __webpack_exports__isNotANumber = __nested_webpack_exports__.W2K;
/******/ var __webpack_exports__isNumeric = __nested_webpack_exports__.kf$;
/******/ var __webpack_exports__isObject = __nested_webpack_exports__.Gvm;
/******/ var __webpack_exports__isOperation = __nested_webpack_exports__.YG;
/******/ var __webpack_exports__isOrExpression = __nested_webpack_exports__.g6W;
/******/ var __webpack_exports__isPlainObject = __nested_webpack_exports__.QdQ;
/******/ var __webpack_exports__isProxy = __nested_webpack_exports__.ju_;
/******/ var __webpack_exports__isSelector = __nested_webpack_exports__.cB6;
/******/ var __webpack_exports__isSet = __nested_webpack_exports__.vMM;
/******/ var __webpack_exports__isSpecificExpression = __nested_webpack_exports__.bQE;
/******/ var __webpack_exports__isSwitchExpression = __nested_webpack_exports__.$yZ;
/******/ var __webpack_exports__isUnaryOperation = __nested_webpack_exports__.bF9;
/******/ var __webpack_exports__isValue = __nested_webpack_exports__.mlT;
/******/ var __webpack_exports__isWindow = __nested_webpack_exports__.l6U;
/******/ var __webpack_exports__isolateScope = __nested_webpack_exports__.ufo;
/******/ var __webpack_exports__isolatedRequire = __nested_webpack_exports__.Dx_;
/******/ var __webpack_exports__limit = __nested_webpack_exports__.ABv;
/******/ var __webpack_exports__lowerCase = __nested_webpack_exports__.gQT;
/******/ var __webpack_exports__makeArray = __nested_webpack_exports__.gvj;
/******/ var __webpack_exports__makeRange = __nested_webpack_exports__.QR5;
/******/ var __webpack_exports__mark = __nested_webpack_exports__.GyP;
/******/ var __webpack_exports__mask = __nested_webpack_exports__.dKf;
/******/ var __webpack_exports__maskForRegularExpression = __nested_webpack_exports__.W5V;
/******/ var __webpack_exports__merge = __nested_webpack_exports__.h1I;
/******/ var __webpack_exports__mockConsole = __nested_webpack_exports__.QH2;
/******/ var __webpack_exports__modifyObject = __nested_webpack_exports__._2M;
/******/ var __webpack_exports__normalizeDateTime = __nested_webpack_exports__.DPF;
/******/ var __webpack_exports__normalizeDomNodeSelector = __nested_webpack_exports__.RSk;
/******/ var __webpack_exports__normalizePhoneNumber = __nested_webpack_exports__.h2u;
/******/ var __webpack_exports__normalizeSelector = __nested_webpack_exports__.Plz;
/******/ var __webpack_exports__normalizeURL = __nested_webpack_exports__.dcF;
/******/ var __webpack_exports__normalizeZipCode = __nested_webpack_exports__.K$h;
/******/ var __webpack_exports__onDocumentReady = __nested_webpack_exports__.qqP;
/******/ var __webpack_exports__optionalImport = __nested_webpack_exports__.Swo;
/******/ var __webpack_exports__optionalRequire = __nested_webpack_exports__.I5u;
/******/ var __webpack_exports__paginate = __nested_webpack_exports__.EnV;
/******/ var __webpack_exports__parseEncodedObject = __nested_webpack_exports__.jLw;
/******/ var __webpack_exports__permute = __nested_webpack_exports__.Ny6;
/******/ var __webpack_exports__permuteLength = __nested_webpack_exports__.bHv;
/******/ var __webpack_exports__preventDefault = __nested_webpack_exports__.woC;
/******/ var __webpack_exports__removeArrayItem = __nested_webpack_exports__.Hb_;
/******/ var __webpack_exports__removeKeyPrefixes = __nested_webpack_exports__.uuH;
/******/ var __webpack_exports__removeKeysInEvaluation = __nested_webpack_exports__.iEp;
/******/ var __webpack_exports__replace = __nested_webpack_exports__.HCR;
/******/ var __webpack_exports__represent = __nested_webpack_exports__.DoQ;
/******/ var __webpack_exports__representPhoneNumber = __nested_webpack_exports__.KC;
/******/ var __webpack_exports__representURL = __nested_webpack_exports__.ozN;
/******/ var __webpack_exports__round = __nested_webpack_exports__.LIG;
/******/ var __webpack_exports__scrollTo = __nested_webpack_exports__.VGy;
/******/ var __webpack_exports__selectArrayItem = __nested_webpack_exports__.FmA;
/******/ var __webpack_exports__serviceURLEquals = __nested_webpack_exports__._4_;
/******/ var __webpack_exports__setCookie = __nested_webpack_exports__.TVt;
/******/ var __webpack_exports__setGlobalContext = __nested_webpack_exports__.zm2;
/******/ var __webpack_exports__setOptionalRequire = __nested_webpack_exports__.SDh;
/******/ var __webpack_exports__sliceAllExceptNumberAndLastSeparator = __nested_webpack_exports__.U7e;
/******/ var __webpack_exports__sliceWeekday = __nested_webpack_exports__.jJA;
/******/ var __webpack_exports__sort = __nested_webpack_exports__.diJ;
/******/ var __webpack_exports__sortTopological = __nested_webpack_exports__.UXV;
/******/ var __webpack_exports__stopPropagation = __nested_webpack_exports__.dGi;
/******/ var __webpack_exports__sumUpProperty = __nested_webpack_exports__._2j;
/******/ var __webpack_exports__timeout = __nested_webpack_exports__.wRz;
/******/ var __webpack_exports__trailingThrottle = __nested_webpack_exports__.p06;
/******/ var __webpack_exports__unique = __nested_webpack_exports__.AmM;
/******/ var __webpack_exports__unwrap = __nested_webpack_exports__.oAg;
/******/ var __webpack_exports__unwrapProxy = __nested_webpack_exports__.q1l;
/******/ var __webpack_exports__viewArrayAsScope = __nested_webpack_exports__.bCg;
/******/ var __webpack_exports__viewObjectAsScope = __nested_webpack_exports__.xkW;
/******/ var __webpack_exports__walkDirectoryRecursively = __nested_webpack_exports__.y3h;
/******/ var __webpack_exports__walkDirectoryRecursivelySync = __nested_webpack_exports__.hue;
/******/ var __webpack_exports__wrap = __nested_webpack_exports__.LV7;
/******/ 
/******/ 


/***/ }),
/* 74 */,
/* 75 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: function() { return /* binding */ __extends; },
/* harmony export */   Cl: function() { return /* binding */ __assign; },
/* harmony export */   Ju: function() { return /* binding */ __values; }
/* harmony export */ });
/* unused harmony exports __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ }),
/* 76 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(41);
var defineProperty = __webpack_require__(9);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 77 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var fails = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

module.exports = { correct: FLAGS_GETTER_IS_CORRECT };


/***/ }),
/* 78 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(10);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
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
/* 83 */
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(18);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(35);
var definePropertyModule = __webpack_require__(9);
var anObject = __webpack_require__(10);
var toIndexedObject = __webpack_require__(11);
var objectKeys = __webpack_require__(71);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: function() { return /* binding */ supportsCssVariables; },
/* harmony export */   y: function() { return /* binding */ getNormalizedEventCoords; }
/* harmony export */ });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(6);
var defineBuiltInAccessor = __webpack_require__(76);
var regExpFlagsDetection = __webpack_require__(77);
var regExpFlagsGetterImplementation = __webpack_require__(78);

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && !regExpFlagsDetection.correct) {
  defineBuiltInAccessor(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlagsGetterImplementation
  });

  regExpFlagsDetection.correct = true;
}


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(2),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),
/* 99 */,
/* 100 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: function() { return /* binding */ __extends; },
/* harmony export */   Cl: function() { return /* binding */ __assign; },
/* harmony export */   Ju: function() { return /* binding */ __values; }
/* harmony export */ });
/* unused harmony exports __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ }),
/* 101 */,
/* 102 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: function() { return /* binding */ MDCRippleFoundation; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@material/ripple/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(100);
// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/@material/ripple/util.js
var util = __webpack_require__(89);
;// ./node_modules/@material/ripple/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = (0,tslib_es6/* __values */.Ju)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0,tslib_es6/* __values */.Ju)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = (0,tslib_es6/* __values */.Ju)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0,tslib_es6/* __values */.Ju)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = (0,util/* getNormalizedEventCoords */.y)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = (0,tslib_es6/* __assign */.Cl)({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var ripple_foundation = ((/* unused pure expression or super */ null && (MDCRippleFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: function() { return /* binding */ __extends; },
/* harmony export */   Cl: function() { return /* binding */ __assign; }
/* harmony export */ });
/* unused harmony exports __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ }),
/* 105 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: function() { return /* binding */ __extends; },
/* harmony export */   Cl: function() { return /* binding */ __assign; }
/* harmony export */ });
/* unused harmony exports __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ }),
/* 106 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: function() { return /* binding */ __extends; },
/* harmony export */   Cl: function() { return /* binding */ __assign; }
/* harmony export */ });
/* unused harmony exports __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P$: function() { return /* binding */ strings; },
/* harmony export */   Y7: function() { return /* binding */ cssClasses; },
/* harmony export */   nL: function() { return /* binding */ numbers; }
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NZ: function() { return /* binding */ ALWAYS_FLOAT_TYPES; },
/* harmony export */   P$: function() { return /* binding */ strings; },
/* harmony export */   Y7: function() { return /* binding */ cssClasses; },
/* harmony export */   YU: function() { return /* binding */ VALIDATION_ATTR_WHITELIST; },
/* harmony export */   nL: function() { return /* binding */ numbers; }
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
};
var numbers = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ rmwc_TextArea; }
});

// UNUSED EXPORTS: CSS_CLASS_NAMES, OUTLINED, TextArea

// EXTERNAL MODULE: ./node_modules/clientnode/dist/index.js
var dist = __webpack_require__(73);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);
// EXTERNAL MODULE: ./node_modules/react-generic-tools/dist/index.js
var react_generic_tools_dist = __webpack_require__(19);
// EXTERNAL MODULE: ./node_modules/@material/textfield/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(75);
;// ./node_modules/@material/base/node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ var tslib_tslib_es6 = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));

// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/base/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root = root;
        this.initialize.apply(this, __spreadArray([], __read(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation =
            foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new foundation/* MDCFoundation */.I({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var component = ((/* unused pure expression or super */ null && (MDCComponent)));
//# sourceMappingURL=component.js.map
;// ./node_modules/@material/dom/events.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map
;// ./node_modules/@material/dom/ponyfill.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map
// EXTERNAL MODULE: ./node_modules/@material/floating-label/node_modules/tslib/tslib.es6.mjs
var node_modules_tslib_tslib_es6 = __webpack_require__(104);
// EXTERNAL MODULE: ./node_modules/@material/floating-label/foundation.js + 1 modules
var floating_label_foundation = __webpack_require__(113);
;// ./node_modules/@material/floating-label/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFloatingLabel = /** @class */ (function (_super) {
    (0,node_modules_tslib_tslib_es6/* __extends */.C6)(MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabel.prototype.setRequired = function (isRequired) {
        this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getWidth: function () { return estimateScrollWidth(_this.root); },
            registerInteractionHandler: function (evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new floating_label_foundation/* MDCFloatingLabelFoundation */.K(adapter);
    };
    return MDCFloatingLabel;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/line-ripple/node_modules/tslib/tslib.es6.mjs
var line_ripple_node_modules_tslib_tslib_es6 = __webpack_require__(105);
// EXTERNAL MODULE: ./node_modules/@material/line-ripple/foundation.js + 1 modules
var line_ripple_foundation = __webpack_require__(114);
;// ./node_modules/@material/line-ripple/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRipple = /** @class */ (function (_super) {
    (0,line_ripple_node_modules_tslib_tslib_es6/* __extends */.C6)(MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new line_ripple_foundation/* MDCLineRippleFoundation */.C(adapter);
    };
    return MDCLineRipple;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/notched-outline/node_modules/tslib/tslib.es6.mjs
var notched_outline_node_modules_tslib_tslib_es6 = __webpack_require__(106);
// EXTERNAL MODULE: ./node_modules/@material/notched-outline/constants.js
var constants = __webpack_require__(107);
// EXTERNAL MODULE: ./node_modules/@material/notched-outline/foundation.js
var notched_outline_foundation = __webpack_require__(115);
;// ./node_modules/@material/notched-outline/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCNotchedOutline = /** @class */ (function (_super) {
    (0,notched_outline_node_modules_tslib_tslib_es6/* __extends */.C6)(MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement =
            this.root.querySelector(constants/* strings */.P$.NOTCH_ELEMENT_SELECTOR);
        var label = this.root.querySelector('.' + floating_label_foundation/* MDCFloatingLabelFoundation */.K.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root.classList.add(constants/* cssClasses */.Y7.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root.classList.add(constants/* cssClasses */.Y7.NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNotchWidthProperty: function (width) {
                _this.notchElement.style.setProperty('width', width + 'px');
            },
            removeNotchWidthProperty: function () {
                _this.notchElement.style.removeProperty('width');
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new notched_outline_foundation/* MDCNotchedOutlineFoundation */.z(adapter);
    };
    return MDCNotchedOutline;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/ripple/node_modules/tslib/tslib.es6.mjs
var ripple_node_modules_tslib_tslib_es6 = __webpack_require__(100);
// EXTERNAL MODULE: ./node_modules/@material/ripple/foundation.js + 1 modules
var ripple_foundation = __webpack_require__(102);
// EXTERNAL MODULE: ./node_modules/@material/ripple/util.js
var util = __webpack_require__(89);
;// ./node_modules/@material/ripple/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRipple = /** @class */ (function (_super) {
    (0,ripple_node_modules_tslib_tslib_es6/* __extends */.C6)(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = {
            isUnbounded: undefined
        }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root.classList.add(className); },
            browserSupportsCssVars: function () { return util/* supportsCssVariables */.d(window); },
            computeBoundingRect: function () { return instance.root.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, applyPassive());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root
                    .removeEventListener(evtType, handler, applyPassive());
            },
            deregisterResizeHandler: function (handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function () {
                return ({ x: window.pageXOffset, y: window.pageYOffset });
            },
            isSurfaceActive: function () { return matches(instance.root, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, applyPassive());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root
                    .addEventListener(evtType, handler, applyPassive());
            },
            registerResizeHandler: function (handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function (className) { return instance.root.classList.remove(className); },
            updateCssVariable: function (varName, value) {
                return instance.root.style.setProperty(varName, value);
            },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.isUnbounded);
        },
        set: function (unbounded) {
            this.isUnbounded = Boolean(unbounded);
            this.setUnbounded();
        },
        enumerable: false,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new ripple_foundation/* MDCRippleFoundation */.E(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root;
        this.isUnbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded = function () {
        this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/textfield/character-counter/foundation.js + 1 modules
var character_counter_foundation = __webpack_require__(116);
;// ./node_modules/@material/textfield/character-counter/component.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        return new character_counter_foundation/* MDCTextFieldCharacterCounterFoundation */.y(adapter);
    };
    return MDCTextFieldCharacterCounter;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/textfield/constants.js
var textfield_constants = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/@material/textfield/foundation.js
var textfield_foundation = __webpack_require__(117);
;// ./node_modules/@material/textfield/helper-text/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map
;// ./node_modules/@material/textfield/helper-text/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCTextFieldHelperTextFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperTextFoundation.prototype.getId = function () {
        return this.adapter.getAttr('id');
    };
    MDCTextFieldHelperTextFoundation.prototype.isVisible = function () {
        return this.adapter.getAttr(strings.ARIA_HIDDEN) !== 'true';
    };
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldHelperTextFoundation.prototype.isPersistent = function () {
        return this.adapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter.addClass(cssClasses.HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter.removeClass(cssClasses.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @return whether the helper text acts as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.isValidation = function () {
        return this.adapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter.addClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter.removeClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter.removeAttr(strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.showToScreenReader();
            // If role is already alert, refresh it to trigger another announcement
            // from screenreader.
            if (this.adapter.getAttr(strings.ROLE) === 'alert') {
                this.refreshAlertRole();
            }
            else {
                this.adapter.setAttr(strings.ROLE, 'alert');
            }
        }
        else {
            this.adapter.removeAttr(strings.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide = function () {
        this.adapter.setAttr(strings.ARIA_HIDDEN, 'true');
    };
    MDCTextFieldHelperTextFoundation.prototype.refreshAlertRole = function () {
        var _this = this;
        this.adapter.removeAttr(strings.ROLE);
        requestAnimationFrame(function () {
            _this.adapter.setAttr(strings.ROLE, 'alert');
        });
    };
    return MDCTextFieldHelperTextFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var helper_text_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldHelperTextFoundation)));
//# sourceMappingURL=foundation.js.map
;// ./node_modules/@material/textfield/helper-text/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperText = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTextFieldHelperTextFoundation(adapter);
    };
    return MDCTextFieldHelperText;
}(MDCComponent));

//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ./node_modules/@material/textfield/icon/foundation.js + 1 modules
var icon_foundation = __webpack_require__(118);
;// ./node_modules/@material/textfield/icon/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldIcon = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(icon_foundation/* MDCTextFieldIconFoundation */.C.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new icon_foundation/* MDCTextFieldIconFoundation */.C(adapter);
    };
    return MDCTextFieldIcon;
}(MDCComponent));

//# sourceMappingURL=component.js.map
;// ./node_modules/@material/textfield/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
















var MDCTextField = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextField, _super);
    function MDCTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField.attachTo = function (root) {
        return new MDCTextField(root);
    };
    MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new MDCRipple(el, foundation); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new MDCLineRipple(el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) {
            return new MDCTextFieldHelperText(el);
        }; }
        if (characterCounterFactory === void 0) { characterCounterFactory = function (el) {
            return new MDCTextFieldCharacterCounter(el);
        }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new MDCTextFieldIcon(el); }; }
        if (labelFactory === void 0) { labelFactory = function (el) { return new MDCFloatingLabel(el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new MDCNotchedOutline(el); }; }
        this.input =
            this.root.querySelector(textfield_constants/* strings */.P$.INPUT_SELECTOR);
        var labelElement = this.root.querySelector(textfield_constants/* strings */.P$.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector(textfield_constants/* strings */.P$.LINE_RIPPLE_SELECTOR);
        this.lineRipple =
            lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector(textfield_constants/* strings */.P$.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = MDCTextFieldHelperTextFoundation.strings;
        var nextElementSibling = this.root.nextElementSibling;
        var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(textfield_constants/* cssClasses */.Y7.HELPER_LINE));
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = character_counter_foundation/* MDCTextFieldCharacterCounterFoundation */.y.strings;
        var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) {
            characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        }
        this.characterCounter =
            characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        // Leading icon
        var leadingIconEl = this.root.querySelector(textfield_constants/* strings */.P$.LEADING_ICON_SELECTOR);
        this.leadingIcon = leadingIconEl ? iconFactory(leadingIconEl) : null;
        // Trailing icon
        var trailingIconEl = this.root.querySelector(textfield_constants/* strings */.P$.TRAILING_ICON_SELECTOR);
        this.trailingIcon = trailingIconEl ? iconFactory(trailingIconEl) : null;
        // Prefix and Suffix
        this.prefix = this.root.querySelector(textfield_constants/* strings */.P$.PREFIX_SELECTOR);
        this.suffix = this.root.querySelector(textfield_constants/* strings */.P$.SUFFIX_SELECTOR);
        this.ripple = this.createRipple(rippleFactory);
    };
    MDCTextField.prototype.destroy = function () {
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.lineRipple) {
            this.lineRipple.destroy();
        }
        if (this.helperText) {
            this.helperText.destroy();
        }
        if (this.characterCounter) {
            this.characterCounter.destroy();
        }
        if (this.leadingIcon) {
            this.leadingIcon.destroy();
        }
        if (this.trailingIcon) {
            this.trailingIcon.destroy();
        }
        if (this.label) {
            this.label.destroy();
        }
        if (this.outline) {
            this.outline.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    MDCTextField.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input.disabled;
    };
    Object.defineProperty(MDCTextField.prototype, "value", {
        get: function () {
            return this.foundation.getValue();
        },
        /**
         * @param value The value to set on the input.
         */
        set: function (value) {
            this.foundation.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "disabled", {
        get: function () {
            return this.foundation.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "valid", {
        get: function () {
            return this.foundation.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */
        set: function (valid) {
            this.foundation.setValid(valid);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "required", {
        get: function () {
            return this.input.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */
        set: function (required) {
            this.input.required = required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "pattern", {
        get: function () {
            return this.input.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */
        set: function (pattern) {
            this.input.pattern = pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "minLength", {
        get: function () {
            return this.input.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */
        set: function (minLength) {
            this.input.minLength = minLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "maxLength", {
        get: function () {
            return this.input.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */
        set: function (maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) {
                this.input.removeAttribute('maxLength');
            }
            else {
                this.input.maxLength = maxLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "min", {
        get: function () {
            return this.input.min;
        },
        /**
         * @param min Sets the input element's min.
         */
        set: function (min) {
            this.input.min = min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "max", {
        get: function () {
            return this.input.max;
        },
        /**
         * @param max Sets the input element's max.
         */
        set: function (max) {
            this.input.max = max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "step", {
        get: function () {
            return this.input.step;
        },
        /**
         * @param step Sets the input element's step.
         */
        set: function (step) {
            this.input.step = step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */
        set: function (content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */
        set: function (label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */
        set: function (label) {
            this.foundation.setTrailingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */
        set: function (content) {
            this.foundation.setTrailingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */
        set: function (useNativeValidation) {
            this.foundation.setUseNativeValidation(useNativeValidation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "prefixText", {
        /**
         * Gets the text content of the prefix, or null if it does not exist.
         */
        get: function () {
            return this.prefix ? this.prefix.textContent : null;
        },
        /**
         * Sets the text content of the prefix, if it exists.
         */
        set: function (prefixText) {
            if (this.prefix) {
                this.prefix.textContent = prefixText;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "suffixText", {
        /**
         * Gets the text content of the suffix, or null if it does not exist.
         */
        get: function () {
            return this.suffix ? this.suffix.textContent : null;
        },
        /**
         * Sets the text content of the suffix, if it exists.
         */
        set: function (suffixText) {
            if (this.suffix) {
                this.suffix.textContent = suffixText;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Focuses the input element.
     */
    MDCTextField.prototype.focus = function () {
        this.input.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCTextField.prototype.layout = function () {
        var openNotch = this.foundation.shouldFloat;
        this.foundation.notchOutline(openNotch);
    };
    MDCTextField.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
        // tslint:enable:object-literal-sort-keys
        return new textfield_foundation/* MDCTextFieldFoundation */.r(adapter, this.getFoundationMap());
    };
    MDCTextField.prototype.getRootAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) {
                _this.listen(evtType, handler);
            },
            deregisterTextFieldInteractionHandler: function (evtType, handler) {
                _this.unlisten(evtType, handler);
            },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) {
                observer.disconnect();
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getInputAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function () { return _this.input; },
            setInputAttr: function (attr, value) {
                _this.input.setAttribute(attr, value);
            },
            removeInputAttr: function (attr) {
                _this.input.removeAttribute(attr);
            },
            isFocused: function () { return document.activeElement === _this.input; },
            registerInputInteractionHandler: function (evtType, handler) {
                _this.input.addEventListener(evtType, handler, applyPassive());
            },
            deregisterInputInteractionHandler: function (evtType, handler) {
                _this.input.removeEventListener(evtType, handler, applyPassive());
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getLabelAdapterMethods = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function () { return _this.label ? _this.label.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label); },
            shakeLabel: function (shouldShake) {
                _this.label && _this.label.shake(shouldShake);
            },
            setLabelRequired: function (isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            },
        };
    };
    MDCTextField.prototype.getLineRippleAdapterMethods = function () {
        var _this = this;
        return {
            activateLineRipple: function () {
                if (_this.lineRipple) {
                    _this.lineRipple.activate();
                }
            },
            deactivateLineRipple: function () {
                if (_this.lineRipple) {
                    _this.lineRipple.deactivate();
                }
            },
            setLineRippleTransformOrigin: function (normalizedX) {
                if (_this.lineRipple) {
                    _this.lineRipple.setRippleCenter(normalizedX);
                }
            },
        };
    };
    MDCTextField.prototype.getOutlineAdapterMethods = function () {
        var _this = this;
        return {
            closeOutline: function () {
                _this.outline && _this.outline.closeNotch();
            },
            hasOutline: function () { return Boolean(_this.outline); },
            notchOutline: function (labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MDCTextField.prototype.getFoundationMap = function () {
        return {
            characterCounter: this.characterCounter ?
                this.characterCounter.foundationForTextField :
                undefined,
            helperText: this.helperText ? this.helperText.foundationForTextField :
                undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField :
                undefined,
            trailingIcon: this.trailingIcon ?
                this.trailingIcon.foundationForTextField :
                undefined,
        };
    };
    MDCTextField.prototype.createRipple = function (rippleFactory) {
        var _this = this;
        var isTextArea = this.root.classList.contains(textfield_constants/* cssClasses */.Y7.TEXTAREA);
        var isOutlined = this.root.classList.contains(textfield_constants/* cssClasses */.Y7.OUTLINED);
        if (isTextArea || isOutlined) {
            return null;
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCRipple.createAdapter(this)), { isSurfaceActive: function () { return matches(_this.input, ':active'); }, registerInteractionHandler: function (evtType, handler) {
                _this.input.addEventListener(evtType, handler, applyPassive());
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.input.removeEventListener(evtType, handler, applyPassive());
            } });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root, new ripple_foundation/* MDCRippleFoundation */.E(adapter));
    };
    return MDCTextField;
}(MDCComponent));

//# sourceMappingURL=component.js.map
;// ./src/implementations/rmwc/TextArea/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"textInput":"text-input","codeEditor":"code-editor","mdcTextFieldDisabled":"mdc-text-field--disabled","cmEditor":"cm-editor","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","mdcIconButtonChecked":"mdc-icon-button--checked","mdcTextFieldCharacterCounter":"mdc-text-field-character-counter","mdcTextFieldWithInternalCounter":"mdc-text-field--with-internal-counter"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4);
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function TextArea_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?TextArea_ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):TextArea_ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module;var OUTLINED=false;var TextArea=/*#__PURE__*/(0,react.forwardRef)(function(properties,reference){var _properties$id,_properties$className,_properties$component,_properties$component2,_properties$helpText;var defaultID=(0,react.useId)();var id=(_properties$id=properties.id)!==null&&_properties$id!==void 0?_properties$id:defaultID;var classNamePrefix=(_properties$className=properties.classNamePrefix)!==null&&_properties$className!==void 0?_properties$className:"text-area";var _useReferenceState=(0,react_generic_tools_dist/* useReferenceState */.yb)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];var _useReferenceState3=(0,react_generic_tools_dist/* useReferenceState */.yb)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),materialTextFieldReference=_useReferenceState4[0],setMaterialTextFieldReference=_useReferenceState4[1];var _useReferenceState5=(0,react_generic_tools_dist/* useReferenceState */.yb)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),labelReference=_useReferenceState6[0],setLabelReference=_useReferenceState6[1];var _useReferenceState7=(0,react_generic_tools_dist/* useReferenceState */.yb)(null),_useReferenceState8=_slicedToArray(_useReferenceState7,2),foundationReference=_useReferenceState8[0],setFoundationReference=_useReferenceState8[1];(0,react.useImperativeHandle)(reference,function(){return{foundation:foundationReference,input:inputReference,label:labelReference,materialTextField:materialTextFieldReference}},[foundationReference,inputReference,labelReference,materialTextFieldReference]);(0,react.useEffect)(function(){if(labelReference){var _materialTextFieldReference=new MDCTextField(labelReference);setMaterialTextFieldReference(_materialTextFieldReference);setFoundationReference(_materialTextFieldReference.getDefaultFoundation());if(typeof properties.value==="string"){foundationReference===null||foundationReference===void 0||foundationReference.setValue(properties.value);_materialTextFieldReference.value=properties.value}if(typeof properties.disabled==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setDisabled(properties.disabled);_materialTextFieldReference.disabled=properties.disabled}if(typeof properties.invalid==="boolean"){foundationReference===null||foundationReference===void 0||foundationReference.setValid(!properties.invalid);_materialTextFieldReference.valid=!properties.invalid}if(typeof properties.required==="boolean")_materialTextFieldReference.required=properties.required;foundationReference===null||foundationReference===void 0||foundationReference.setUseNativeValidation(false);return function(){_materialTextFieldReference.destroy()}}},[labelReference,properties.value,properties.disabled,properties.invalid,properties.required,properties.minimumLength,properties.maximumLength]);/*
       NOTE: Applying the event listeners declaratively do not work to observe
       events triggered by advanced editors manually.
    */(0,react.useEffect)(function(){var onInput=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we stay in focus state when
                        do clearing the textarea's input value.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.autoCompleteFocus()})}:dist/* NOOP */.tEg;inputReference===null||inputReference===void 0||inputReference.addEventListener("input",onInput);var onFocus=properties.children?function(){/*
                        Since we do not operate on the native textarea element
                        we need to make sure that we maintain focus state when
                        focusing the advanced editor.
                    */setTimeout(function(){foundationReference===null||foundationReference===void 0||foundationReference.activateFocus()})}:dist/* NOOP */.tEg;inputReference===null||inputReference===void 0||inputReference.addEventListener("focus",onFocus);return function(){inputReference===null||inputReference===void 0||inputReference.removeEventListener("input",onInput);inputReference===null||inputReference===void 0||inputReference.removeEventListener("focus",onFocus)}},[foundationReference,inputReference,properties.children]);// NOTE: Character count is only supported if maximum length is given.
var isMaximumLength=typeof properties.maximumLength==="number"&&!isNaN(properties.maximumLength)&&properties.maximumLength!==Infinity&&properties.maximumLength>=0;var editorContent=/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",_objectSpread({ref:setInputReference,id:id,name:properties.name,disabled:properties.disabled,className:"mdc-text-field__input",style:(0,react_generic_tools_dist/* useMemorizedValue */.Pc)(properties.children?_objectSpread({visibility:"hidden",position:"absolute"},properties.styles):properties.styles,properties.styles),rows:properties.rows,"aria-labelledby":"".concat(id,"-label"),"aria-controls":"".concat(id,"-helper"),"aria-describedby":"".concat(id,"-helper"),readOnly:Boolean(properties.children),value:properties.value,minLength:properties.minimumLength,maxLength:properties.maximumLength,onChange:properties.onChange,onClick:properties.onClick,onBlur:properties.onBlur,onFocus:properties.onFocus,onKeyUp:properties.onKeyUp,onKeyDown:properties.onKeyDown},properties.domNodeProperties)),properties.children,properties.barContentSlot?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(classNamePrefix,"__bar"),children:[properties.barContentSlot,properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mdc-text-field-character-counter"}):""]}):properties.characterCount&&isMaximumLength?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mdc-text-field-character-counter"}):""]});var helpText=(0,react_generic_tools_dist/* useMemorizedValue */.Pc)(_typeof(properties.helpText)==="object"?properties.helpText:{children:properties.helpText},properties.helpText);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{ref:setLabelReference,onClick:(0,react_generic_tools_dist/* useMemorizedValue */.Pc)(function(event){if(properties.onLabelClick)properties.onLabelClick(event)},properties.onLabelClick),className:[classNamePrefix,"mdc-text-field","mdc-text-field--textarea"].concat(properties.value===""?"mdc-text-field--textarea":"".concat(classNamePrefix,"--has-content")).concat(properties.disabled?"mdc-text-field--disabled":[])/*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */.concat(OUTLINED?"mdc-text-field--outlined":"mdc-text-field--filled")/*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */.concat(properties.characterCount&&isMaximumLength?"mdc-text-field--with-internal-counter":[]).concat(properties.invalid?"mdc-text-field--invalid":[]).join(" "),children:[((_properties$component=properties.componentProperties)===null||_properties$component===void 0?void 0:_properties$component.ripple)!==false&&!properties.children?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"mdc-text-field__ripple"}):"",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"mdc-floating-label",id:"".concat(id,"-label"),children:properties.label}),properties.resizeable?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"mdc-text-field__resizer",children:editorContent}):editorContent,((_properties$component2=properties.componentProperties)===null||_properties$component2===void 0?void 0:_properties$component2.ripple)!==false?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"mdc-line-ripple"}):""]}),helpText.children?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mdc-text-field-helper-line",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:["mdc-text-field-helper-text"].concat(helpText.persistent?"mdc-text-field-helper-text--persistent":[]).join(" "),id:"".concat(id,"-helper"),children:(_properties$helpText=properties.helpText)!==null&&_properties$helpText!==void 0&&_properties$helpText.children?properties.helpText.children:properties.helpText})}):""]})})// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;TextArea.CSS_CLASS_NAMES=CSS_CLASS_NAMES;/* harmony default export */ var rmwc_TextArea = (TextArea);

/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: function() { return /* binding */ MDCFloatingLabelFoundation; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@material/floating-label/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(104);
// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/floating-label/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map
;// ./node_modules/@material/floating-label/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function () {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var floating_label_foundation = ((/* unused pure expression or super */ null && (MDCFloatingLabelFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 114 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: function() { return /* binding */ MDCLineRippleFoundation; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@material/line-ripple/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(105);
// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/line-ripple/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map
;// ./node_modules/@material/line-ripple/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function (evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var line_ripple_foundation = ((/* unused pure expression or super */ null && (MDCLineRippleFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 115 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ MDCNotchedOutlineFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .C6)(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .Cl)({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .strings */ .P$;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .cssClasses */ .Y7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .numbers */ .nL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__/* .numbers */ .nL.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__/* .MDCFoundation */ .I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MDCNotchedOutlineFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: function() { return /* binding */ MDCTextFieldCharacterCounterFoundation; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@material/textfield/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(75);
// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/textfield/character-counter/constants.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map
;// ./node_modules/@material/textfield/character-counter/foundation.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var character_counter_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldCharacterCounterFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 117 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ MDCTextFieldFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .C6)(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .Cl)({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function () {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function () {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function () {
            _this.handleInput();
        };
        _this.setPointerXOffset = function (evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function () {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function (attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .cssClasses */ .Y7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .strings */ .P$;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .numbers */ .nL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
        get: function () {
            var type = this.getNativeInput().type;
            return _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALWAYS_FLOAT_TYPES */ .NZ.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__values */ .Ju)(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var INTERACTION_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__values */ .Ju)(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__values */ .Ju)(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var INTERACTION_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__values */ .Ju)(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (_constants__WEBPACK_IMPORTED_MODULE_2__/* .VALIDATION_ATTR_WHITELIST */ .YU.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setcharacterCounter(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * _constants__WEBPACK_IMPORTED_MODULE_2__/* .numbers */ .nL.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText &&
            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                !this.valid)) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon) {
            this.trailingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon) {
            this.trailingIcon.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
        if (!this.characterCounter) {
            return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(_constants__WEBPACK_IMPORTED_MODULE_2__/* .strings */ .P$.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(_constants__WEBPACK_IMPORTED_MODULE_2__/* .strings */ .P$.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
            this.trailingIcon.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__/* .MDCFoundation */ .I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MDCTextFieldFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 118 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: function() { return /* binding */ MDCTextFieldIconFoundation; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@material/textfield/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(75);
// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(12);
;// ./node_modules/@material/textfield/icon/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var cssClasses = {
    ROOT: 'mdc-text-field__icon',
};

//# sourceMappingURL=constants.js.map
;// ./node_modules/@material/textfield/icon/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.C6)(MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, MDCTextFieldIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function (evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr('tabindex');
        try {
            for (var INTERACTION_EVENTS_1 = (0,tslib_es6/* __values */.Ju)(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var e_2, _a;
        try {
            for (var INTERACTION_EVENTS_2 = (0,tslib_es6/* __values */.Ju)(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex);
            this.adapter.setAttr('role', strings.ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(foundation/* MDCFoundation */.I));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var icon_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldIconFoundation)));
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__.A = ({"textInput":"text-input","textInputCodeEditorButton":"text-input__code-editor-button","textInputRichtextEditorButton":"text-input__richtext-editor-button","textInputSuggestions":"text-input__suggestions","textInputSuggestionsPending":"text-input__suggestions--pending","textInputSuggestionsSuggestion":"text-input__suggestions__suggestion","textInputSuggestionsSuggestionMark":"text-input__suggestions__suggestion__mark","codeEditor":"code-editor","cmContent":"cm-content","cmActiveLine":"cm-activeLine","cmGutters":"cm-gutters","cmActiveLineGutter":"cm-activeLineGutter","cmFocused":"cm-focused","codeEditorHasContent":"code-editor--has-content","codeEditorView":"code-editor__view","richtextEditor":"richtext-editor","richtextEditorBar":"richtext-editor__bar","richtextEditorMenuBar":"richtext-editor-menu-bar","richtextEditorView":"richtext-editor__view","tiptap":"tiptap"});

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Index */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _implementations_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Index=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(properties,reference){var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_1__/* .useReferenceState */ .yb)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(reference,function(){return{input:inputReference,/*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */eventMapper:{blur:function blur(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("blur");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},focus:function focus(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("focus");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},input:function input(value,event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("input");syntheticEvent.detail=event;inputReference.input.value=String(value);inputReference.input.dispatchEvent(syntheticEvent)}}}}},[inputReference,inputReference===null||inputReference===void 0?void 0:inputReference.input]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_implementations_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay,_objectSpread(_objectSpread({ref:setInputReference},properties),{},{children:properties.children}))});/* harmony default export */ __webpack_exports__.A = (Index);

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
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ !function() {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ }();
/******/ 
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
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _InputEventMapperWrapper_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};// endregion
var BASIC_KEYMAPS=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .autocompletion */ .yU?[].concat(_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .closeBracketsKeymap */ .Bc),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .defaultKeymap */ .pw),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .searchKeymap */ .Eo),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .historyKeymap */ .cL),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .foldKeymap */ .f7),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .completionKeymap */ .OO),_toConsumableArray(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .lintKeymap */ .$w)):[];var BASIC_EXTENSIONS=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorView */ .Lz?[(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .lineNumbers */ .$K)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .highlightActiveLineGutter */ .Wu)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .highlightSpecialChars */ .N$)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .history */ .b6)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .foldGutter */ .Lv)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .drawSelection */ .VH)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .dropCursor */ .A)(),_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorState */ .$t.allowMultipleSelections.of(true),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .indentOnInput */ .WD)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .syntaxHighlighting */ .y9)(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .defaultHighlightStyle */ .Zt,{fallback:true}),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .bracketMatching */ .SG)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .closeBrackets */ .wm)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .autocompletion */ .yU)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .rectangularSelection */ .D4)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .crosshairCursor */ .HJ)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .highlightActiveLine */ .dz)(),(0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .highlightSelectionMatches */ .gN)(),_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .keymap */ .w4.of(BASIC_KEYMAPS)]:[];var CSS_CLASS_NAMES=_style_module_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A;/**
 * Determines code language support for given mode name.
 * @param name - Mode name to determine language support for.
 * @returns Language support or "undefined" if not supported.
 */var determineMode=function determineMode(name){if(!name)return undefined;if(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .javascript */ .Q2&&["js","jsx","ts","tsx","script","javascript","typescript"].includes(name.toLowerCase()))return (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .javascript */ .Q2)({jsx:true,typescript:true});if(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .css */ .AH&&["css","style","styles","cascadingstylesheet","cascadingstylesheets"].includes(name.toLowerCase()))return (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .css */ .AH)()};var Index=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(properties,reference){var _properties$value,_properties$editor,_properties$editor$mo,_properties$editor2,_properties$editor3,_inputEventMapperRefe;if(!(_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .autocompletion */ .yU&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .history */ .b6&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .syntaxHighlighting */ .y9&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .lintKeymap */ .$w&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .searchKeymap */ .Eo&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorState */ .$t&&_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorView */ .Lz))throw Error("Missing codemirror dependencies.");var value=(_properties$value=properties.value)!==null&&_properties$value!==void 0?_properties$value:"";var modeName=(_properties$editor=properties.editor)===null||_properties$editor===void 0?void 0:_properties$editor.modeName;var mode=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useMemorizedValue */ .Pc)((_properties$editor$mo=(_properties$editor2=properties.editor)===null||_properties$editor2===void 0?void 0:_properties$editor2.mode)!==null&&_properties$editor$mo!==void 0?_properties$editor$mo:determineMode(modeName),(_properties$editor3=properties.editor)===null||_properties$editor3===void 0?void 0:_properties$editor3.mode,modeName);var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useReferenceState */ .yb)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputEventMapperReference=_useReferenceState2[0],setInputEventMapperReference=_useReferenceState2[1];var _useReferenceState3=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useReferenceState */ .yb)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),editorView=_useReferenceState4[0],setEditorView=_useReferenceState4[1];var _useReferenceState5=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useReferenceState */ .yb)(null),_useReferenceState6=_slicedToArray(_useReferenceState5,2),editorViewReference=_useReferenceState6[0],setEditorViewReference=_useReferenceState6[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(reference,function(){return{input:inputEventMapperReference,editorView:editorView,editorViewReference:editorViewReference}},[inputEventMapperReference,editorView,editorViewReference]);/*
        NOTE: We do need to store the input event mapper reference in a ref
        here, because otherwise we would need to re-initialize the editor on
        every change of the input event mapper reference, which would cause a
        lot of performance issues and also cause the editor to lose focus on
        every change of the input event mapper reference.
     */var internalInputEventMapperReference=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(inputEventMapperReference);internalInputEventMapperReference.current=inputEventMapperReference;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(!editorViewReference)return;var state=_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorState */ .$t.create({doc:String(value),extensions:[BASIC_EXTENSIONS,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorState */ .$t.changeFilter.of(function(transaction){var newValue=transaction.state.doc.toString();if(transaction.startState.doc.toString()!==newValue){var _internalInputEventMa;if(properties.maximumLength!==undefined&&newValue.length>properties.maximumLength)return false;if(properties.disabled)return true;(_internalInputEventMa=internalInputEventMapperReference.current)===null||_internalInputEventMa===void 0||_internalInputEventMa.eventMapper.input(newValue,{transaction:transaction});if(properties.onChange)properties.onChange(newValue)}return true}),mode!==null&&mode!==void 0?mode:[]]});setEditorView(new _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .EditorView */ .Lz({state:state,parent:editorViewReference}));return function(){if(editorView){editorView.destroy();setEditorView(null)}}},[editorViewReference,mode===null||mode===void 0?void 0:mode.language.name]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(editorView&&properties.value!==editorView.state.doc.toString())editorView.state.update({changes:{from:0,insert:_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY.empty}},{changes:{from:0,insert:String(properties.value)}})},[editorView,properties.value]);var textAreaDomNode=inputEventMapperReference===null||inputEventMapperReference===void 0||(_inputEventMapperRefe=inputEventMapperReference.input)===null||_inputEventMapperRefe===void 0?void 0:_inputEventMapperRefe.input;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var resizeObserver=new ResizeObserver(function(){var clientHeight=textAreaDomNode===null||textAreaDomNode===void 0?void 0:textAreaDomNode.clientHeight;if(editorViewReference&&clientHeight){var scrollableViewNode=editorViewReference.querySelector(".cm-scroller");if(scrollableViewNode){var newHeightValue=String(clientHeight)+"px";editorViewReference.style.height=newHeightValue;scrollableViewNode.style.height=newHeightValue;return}}});if(textAreaDomNode)resizeObserver.observe(textAreaDomNode);return function(){resizeObserver.disconnect()}},[editorViewReference,textAreaDomNode]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_InputEventMapperWrapper_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,_objectSpread(_objectSpread({},properties),{},{ref:setInputEventMapperReference,value:value,classNamePrefix:CSS_CLASS_NAMES.codeEditor,onLabelClick:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useMemorizedValue */ .Pc)(function(){editorViewReference===null||editorViewReference===void 0||editorViewReference.focus()},editorViewReference),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{ref:setEditorViewReference,onBlur:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useMemorizedValue */ .Pc)(function(event){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.blur(event);if(properties.onBlur)properties.onBlur(event)},inputEventMapperReference===null||inputEventMapperReference===void 0?void 0:inputEventMapperReference.eventMapper.blur,properties.onBlur),onFocus:(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_2__/* .useMemorizedValue */ .Pc)(function(event){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.focus(event);if(properties.onFocus)properties.onFocus(event)},inputEventMapperReference===null||inputEventMapperReference===void 0?void 0:inputEventMapperReference.eventMapper.focus,properties.onFocus),className:"".concat(CSS_CLASS_NAMES.codeEditorView," mdc-text-field__input")})}))});/* harmony default export */ __webpack_exports__["default"] = (Index);
var __webpack_exports__default = __webpack_exports__["default"];
export { BASIC_EXTENSIONS, BASIC_KEYMAPS, CSS_CLASS_NAMES, Index, __webpack_exports__default as default, determineMode };

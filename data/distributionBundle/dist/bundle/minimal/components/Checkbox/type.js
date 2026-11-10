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
/* 2 */,
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
/* 4 */,
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
/* 12 */,
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
/* 19 */,
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
/* 42 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gr: function() { return /* binding */ oneOfType; },
/* harmony export */   HR: function() { return /* binding */ symbol; },
/* harmony export */   Ik: function() { return /* binding */ object; },
/* harmony export */   Pc: function() { return /* binding */ func; },
/* harmony export */   Yj: function() { return /* binding */ string; },
/* harmony export */   ai: function() { return /* binding */ number; },
/* harmony export */   bz: function() { return /* binding */ any; },
/* harmony export */   cW: function() { return /* binding */ shape; },
/* harmony export */   jk: function() { return /* binding */ arrayOf; },
/* harmony export */   zM: function() { return /* binding */ property_types_boolean; }
/* harmony export */ });
/* unused harmony exports DummyTypes, NullSymbol, PropertyTypes, RealTypes, UndefinedSymbol, ValidationError, array, bool, createDummy, default, element, elementType, exact, instanceOf, node, objectOf, oneOf */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;


;// external "core-js/modules/es.array.includes.js"

;// external "prop-types"

;// ./src/property-types.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module propertTypes *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&_setPrototypeOf(t,r)}function _callSuper(e,c,p){return c=_getPrototypeOf(c),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(c,p||[],_getPrototypeOf(e).constructor):c.apply(e,p))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(p){var n="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(p){if(null===p||!_isNativeFunction(p))return p;if("function"!=typeof p)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(p))return n.get(p);n.set(p,Wrapper)}function Wrapper(){return _construct(p,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(p.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,p)},_wrapNativeSuper(p)}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var NullSymbol=Symbol("clientnodePropertyTypesNull");var UndefinedSymbol=Symbol("clientnodePropertyTypesUndefined");var RealTypes={any:prop_types__WEBPACK_IMPORTED_MODULE_1__.any,array:prop_types__WEBPACK_IMPORTED_MODULE_1__.array,arrayOf:prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf,bool:prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,boolean:prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,element:prop_types__WEBPACK_IMPORTED_MODULE_1__.element,elementType:prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,exact:prop_types__WEBPACK_IMPORTED_MODULE_1__.exact,func:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,instanceOf:prop_types__WEBPACK_IMPORTED_MODULE_1__.instanceOf,node:prop_types__WEBPACK_IMPORTED_MODULE_1__.node,number:prop_types__WEBPACK_IMPORTED_MODULE_1__.number,object:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,objectOf:prop_types__WEBPACK_IMPORTED_MODULE_1__.objectOf,oneOf:prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf,oneOfType:prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType,shape:prop_types__WEBPACK_IMPORTED_MODULE_1__.shape,string:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,symbol:prop_types__WEBPACK_IMPORTED_MODULE_1__.symbol};var createDummy=function createDummy(result){if(result===void 0){result=null}var type=function type(){return result};type.isRequired=function(){return null};return type};/**
 * Dummy validation class.
 * @property message - Holds error message as string.
 */var ValidationError=/*#__PURE__*/function(_Function){/**
     * Initializes dummy validation error instance.
     */function ValidationError(){var _this;_classCallCheck(this,ValidationError);_this=_callSuper(this,ValidationError,["return null"]);_defineProperty(_this,"message","DummyErrorMessage");return _this}_inherits(ValidationError,_Function);return _createClass(ValidationError)}(/*#__PURE__*/_wrapNativeSuper(Function));/*
    NOTE: Each value has to be different (a real copy) to distinguish them from
    each other during runtime property reflections.
    Strict equality checks between different values have to be negative.
*/var DummyTypes={any:createDummy(),array:createDummy(),arrayOf:createDummy(new ValidationError),bool:createDummy(),boolean:createDummy(),element:createDummy(),elementType:createDummy(new ValidationError),exact:createDummy(),func:createDummy(),instanceOf:createDummy(new ValidationError),node:createDummy(),number:createDummy(),object:createDummy(),objectOf:createDummy(new ValidationError),oneOf:createDummy(new ValidationError),oneOfType:createDummy(new ValidationError),shape:createDummy(new ValidationError),string:createDummy(),symbol:createDummy()};var PropertyTypes=["debug","dev","development"].includes(("production"||0).trim().toLowerCase())?RealTypes:DummyTypes;var any=PropertyTypes.any;var array=PropertyTypes.array;var arrayOf=PropertyTypes.arrayOf;var bool=PropertyTypes.bool;var property_types_boolean=PropertyTypes.bool;var property_types_element=PropertyTypes.element;var elementType=PropertyTypes.elementType;var exact=PropertyTypes.exact;var func=PropertyTypes.func;var instanceOf=PropertyTypes.instanceOf;var node=PropertyTypes.node;var number=PropertyTypes.number;var object=PropertyTypes.object;var objectOf=PropertyTypes.objectOf;var oneOf=PropertyTypes.oneOf;var oneOfType=PropertyTypes.oneOfType;var shape=PropertyTypes.shape;var string=PropertyTypes.string;var symbol=PropertyTypes.symbol;/* harmony default export */ var property_types = ((/* unused pure expression or super */ null && (PropertyTypes)));



/***/ }),
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
/* 73 */,
/* 74 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; },
/* harmony export */   Zl: function() { return /* binding */ modelStatePropertyTypes; }
/* harmony export */ });
/* unused harmony exports PrimitiveTypes, baseModelPropertyTypes, modelPropertyTypes, defaultModelState */
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
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
var baseModelPropertyTypes={name:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,declaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,description:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,default:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .any */ .bz,// NOTE: Corresponds to type "SelectionDefinition".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .shape */ .cW)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik]),/*
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
    */type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,value:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .any */ .bz};var modelStatePropertyTypes={dirty:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),pristine:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),touched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),untouched:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),focused:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),visited:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),invalid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),invalidRequired:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),valid:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR])};var modelPropertyTypes=_objectSpread(_objectSpread({},baseModelPropertyTypes),{},{emptyEqualsNull:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,trim:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,invertedPattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]),pattern:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]),maximum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]),minimum:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]),maximumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,minimumLength:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,mutable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,writable:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,state:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .shape */ .cW)(modelStatePropertyTypes)});var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},baseModelPropertyTypes),modelStatePropertyTypes),{},{className:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)(clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]),styles:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,themeConfiguration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,disabled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,enforceUncontrolled:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,initialValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .any */ .bz,model:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .shape */ .cW)(modelPropertyTypes),// NOTE: Overwrites model selection and corresponds to type "Selection".
selection:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj]))),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])),(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .arrayOf */ .jk)((0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .shape */ .cW)({label:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,value:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .number */ .ai,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj])})),clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik]),onChange:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onChangeValue:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onChangeShowDeclaration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onChangeState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onClick:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onFocus:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,onTouch:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .func */ .Pc,required:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,requiredText:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj,componentProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,domNodeProperties:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ik,showDeclaration:(0,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .oneOfType */ .Gr)([clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .symbol */ .HR]),showInitialValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,showValidationState:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,/*
        NOTE: Not yet working:
        tooltip?: string | TooltipProps
        trailingIcon?:
            string |
             (IconOptions & {tooltip?: string | TooltipProps})
    */tooltip:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .any */ .bz});var defaultModelState={dirty:false,pristine:true,focused:false,visited:false,invalid:false,invalidRequired:false,valid:true,touched:false,untouched:true};var defaultModel={declaration:"",description:"",name:"NO_NAME_DEFINED",emptyEqualsNull:true,pattern:undefined,invertedPattern:undefined,maximum:Infinity,minimum:-Infinity,maximumLength:Infinity,minimumLength:0,mutable:true,/*
        NOTE: We do not want to shadow "default" here:
        value: null,
    */writable:true,nullable:true,state:_objectSpread({},defaultModelState),trim:true,type:"string"};/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties={className:[],styles:{},componentProperties:{},domNodeProperties:{},enforceUncontrolled:false,model:_objectSpread({},defaultModel),triggerInitialPropertiesConsolidation:false,showDeclaration:undefined,showInitialValidationState:false,showValidationState:true,requiredText:"Please fill this field."};//// endregion
/// endregion
// endregion

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(80);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 80 */
/***/ (function(module) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 81 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(79)();
}


/***/ }),
/* 82 */,
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
/* harmony export */   $I: function() { return /* binding */ defaultModel; },
/* harmony export */   L6: function() { return /* binding */ defaultProperties; },
/* harmony export */   Pl: function() { return /* binding */ propertyTypes; }
/* harmony export */ });
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
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
var propertyTypes=_objectSpread(_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .propertyTypes */ .Pl),_type_js__WEBPACK_IMPORTED_MODULE_1__/* .modelStatePropertyTypes */ .Zl),{},{checked:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .zM,id:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Yj});var defaultModel=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultModel */ .$I),{},{default:false,type:"boolean",value:false});/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/var defaultProperties=_objectSpread(_objectSpread({},_type_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultProperties */ .L6),{},{default:false,model:_objectSpread({},defaultModel),requiredText:"Please check this field."});// endregion
export { defaultModel, defaultProperties, propertyTypes };

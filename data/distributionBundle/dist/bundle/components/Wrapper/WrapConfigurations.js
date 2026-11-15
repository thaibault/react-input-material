if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_dom_c0b5c364__ from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ([
/* 0 */
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
/* 1 */
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(10);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 4 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(31);

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


var NATIVE_BIND = __webpack_require__(31);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var toObject = __webpack_require__(33);

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

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["StrictMode"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.StrictMode; }, ["createContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.createContext; }, ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__["default"]; }, ["forwardRef"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.forwardRef; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useLayoutEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useLayoutEffect; }, ["useMemo"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useMemo; } });

/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; } });

/***/ }),
/* 10 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(0);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var shared = __webpack_require__(51);
var hasOwn = __webpack_require__(7);
var uid = __webpack_require__(45);
var NATIVE_SYMBOL = __webpack_require__(44);
var USE_SYMBOL_AS_UID = __webpack_require__(50);

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
/* 12 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var getOwnPropertyDescriptor = (__webpack_require__(67).f);
var createNonEnumerableProperty = __webpack_require__(34);
var defineBuiltIn = __webpack_require__(40);
var defineGlobalProperty = __webpack_require__(26);
var copyConstructorProperties = __webpack_require__(76);
var isForced = __webpack_require__(81);

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
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6);
var anObject = __webpack_require__(3);
var getMethod = __webpack_require__(23);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(52);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(54);
var anObject = __webpack_require__(3);
var toPropertyKey = __webpack_require__(49);

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
/* 15 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(12);
var toObject = __webpack_require__(33);
var lengthOfArrayLike = __webpack_require__(36);
var setArrayLength = __webpack_require__(82);
var doesNotExceedSafeInteger = __webpack_require__(83);
var fails = __webpack_require__(1);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(12);
var globalThis = __webpack_require__(2);
var anInstance = __webpack_require__(92);
var anObject = __webpack_require__(3);
var isCallable = __webpack_require__(0);
var getPrototypeOf = __webpack_require__(62);
var defineBuiltInAccessor = __webpack_require__(60);
var createProperty = __webpack_require__(94);
var fails = __webpack_require__(1);
var hasOwn = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(11);
var IteratorPrototype = (__webpack_require__(63).IteratorPrototype);
var DESCRIPTORS = __webpack_require__(4);
var IS_PURE = __webpack_require__(20);

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(12);
var call = __webpack_require__(6);
var aCallable = __webpack_require__(19);
var anObject = __webpack_require__(3);
var getIteratorDirect = __webpack_require__(41);
var createIteratorProxy = __webpack_require__(86);
var callWithSafeIterationClosing = __webpack_require__(87);
var IS_PURE = __webpack_require__(20);
var iteratorClose = __webpack_require__(13);
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__(88);
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(42);

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(12);
var call = __webpack_require__(6);
var iterate = __webpack_require__(66);
var aCallable = __webpack_require__(19);
var anObject = __webpack_require__(3);
var getIteratorDirect = __webpack_require__(41);
var iteratorClose = __webpack_require__(13);
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(42);

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),
/* 19 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(0);
var tryToString = __webpack_require__(39);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 20 */
/***/ (function(module) {


module.exports = false;


/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(68);
var requireObjectCoercible = __webpack_require__(48);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 23 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(19);
var isNullOrUndefined = __webpack_require__(32);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 24 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var isCallable = __webpack_require__(0);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),
/* 25 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(20);
var globalThis = __webpack_require__(2);
var defineGlobalProperty = __webpack_require__(26);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.51.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 26 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);

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
/* 27 */
/***/ (function(module) {


module.exports = {};


/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(3);
var definePropertiesModule = __webpack_require__(108);
var enumBugKeys = __webpack_require__(28);
var hiddenKeys = __webpack_require__(27);
var html = __webpack_require__(85);
var documentCreateElement = __webpack_require__(53);
var sharedKey = __webpack_require__(35);

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
/* 31 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 32 */
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 33 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(48);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 34 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(14);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 35 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(51);
var uid = __webpack_require__(45);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(80);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(0);
var definePropertyModule = __webpack_require__(14);
var makeBuiltIn = __webpack_require__(55);
var defineGlobalProperty = __webpack_require__(26);

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
/* 41 */
/***/ (function(module) {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),
/* 42 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),
/* 43 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(24);
var isCallable = __webpack_require__(0);
var isPrototypeOf = __webpack_require__(38);
var USE_SYMBOL_AS_UID = __webpack_require__(50);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 44 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(70);
var fails = __webpack_require__(1);
var globalThis = __webpack_require__(2);

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
/* 45 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 46 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(78);
var lengthOfArrayLike = __webpack_require__(36);

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
/* 47 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(75);
var globalThis = __webpack_require__(2);
var isObject = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(34);
var hasOwn = __webpack_require__(7);
var shared = __webpack_require__(25);
var sharedKey = __webpack_require__(35);
var hiddenKeys = __webpack_require__(27);

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
/* 48 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(32);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(69);
var isSymbol = __webpack_require__(43);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 50 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(44);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),
/* 51 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(25);
// eslint-disable-next-line es/no-object-create -- safe
var create = Object.create || Object;

module.exports = function (key, value) {
  return store[key] || (store[key] = value || create(null));
};


/***/ }),
/* 52 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(53);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),
/* 53 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var isObject = __webpack_require__(10);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 54 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(1);

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
/* 55 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var fails = __webpack_require__(1);
var isCallable = __webpack_require__(0);
var hasOwn = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(4);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(73).CONFIGURABLE);
var inspectSource = __webpack_require__(74);
var InternalStateModule = __webpack_require__(47);

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
/* 56 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var hasOwn = __webpack_require__(7);
var toIndexedObject = __webpack_require__(22);
var indexOf = (__webpack_require__(46).indexOf);
var hiddenKeys = __webpack_require__(27);

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
/* 57 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(79);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(55);
var defineProperty = __webpack_require__(14);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 61 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a0: function() { return /* binding */ re; }
/* harmony export */ });
/* unused harmony exports ArrayEmitter, DataTableContext, DataTableHeadContext, EventEmitter, FoundationElement, Portal, PortalChild, PortalContext, PortalProvider, RMWC_VERSION, classNames, closest, createMemoComponent, debounce, deprecationWarning, emptyClientRect, eventsMap, focusTrapFactory, getDisplayName, handleDeprecations, handleRef, matches, mergeRefs, portalContextDefaultValues, raf, randomId, toCamel, triggerWindowResize, useFoundation, useId, withTheme */
/* unused harmony import specifier */ var d;
/* unused harmony import specifier */ var x;
/* unused harmony import specifier */ var g;
/* unused harmony import specifier */ var l;
/* unused harmony import specifier */ var k;
/* unused harmony import specifier */ var A;
/* unused harmony import specifier */ var w;
/* unused harmony import specifier */ var m;
/* unused harmony import specifier */ var S;
/* unused harmony import specifier */ var I;
/* unused harmony import specifier */ var _;
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var _material_dom_dist_mdc_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);




const j = "@rmwc/base", F = "14.3.5", U = "RMWC base module", W = "./index.js", $ = "./index.d.ts", z = {
  ".": {
    import: "./index.mjs",
    types: "./index.d.ts",
    require: "./index.js"
  }
}, V = {
  access: "public"
}, B = {
  type: "git",
  url: "git+https://github.com/rmwc/rmwc.git"
}, q = [
  "rmwc"
], H = "rmwc", K = "MIT", G = {
  url: "https://github.com/rmwc/rmwc/issues"
}, J = "https://github.com/rmwc/rmwc/tree/master/packages/base#readme", Z = {
  react: ">=16.8.x",
  "react-dom": ">=16.8.x"
}, Q = {
  "@material/dom": "^14.0.0",
  "@rmwc/types": "14.3.5",
  classnames: "^2.3.1",
  hyperform: "^0.11.0",
  "mutation-observer": "^1.0.3",
  tslib: "^2.4.0"
}, X = {
  name: j,
  version: F,
  description: U,
  main: W,
  types: $,
  exports: z,
  publishConfig: V,
  repository: B,
  keywords: q,
  author: H,
  private: !1,
  license: K,
  bugs: G,
  homepage: J,
  peerDependencies: Z,
  dependencies: Q
};
function Y(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var R = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        a && (o = r(o, s(a)));
      }
      return o;
    }
    function s(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var a in o)
        e.call(o, a) && o[a] && (i = r(i, a));
      return i;
    }
    function r(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(R);
var ee = R.exports;
const p = /* @__PURE__ */ Y(ee), te = {
  portalElement: null,
  setPortalElement: null
}, y = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(
  te
), we = ({
  children: t
}) => {
  const [e, n] = g(null);
  return /* @__PURE__ */ d(
    y.Provider,
    {
      value: {
        portalElement: e,
        setPortalElement: n
      },
      children: t
    }
  );
}, ne = (t) => t.replace(/(-[a-z])/g, (e) => e.toUpperCase().replace("-", "")), oe = (t) => t.replace(/(^[a-z]+|[A-Z][a-z]*|\d+)/g, (e) => "-" + e.toLowerCase()).slice(1), M = (t) => (Array.isArray(t) ? t : [t]).filter((n) => !!n).map((n) => `mdc-theme--${oe(n)}`), _e = (t) => {
  const e = ({ theme: n, className: s, ...r }) => {
    if (n) {
      const o = p(s, M(n));
      return /* @__PURE__ */ d(t, { className: o, ...r });
    }
    return /* @__PURE__ */ d(t, { className: s, ...r });
  };
  return e.displayName = "withTheme", e;
}, be = react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef(function({ tag: e = "div", theme: n, element: s, ...r }, o) {
  const i = s ? s.props(r) : r, a = s ? se(o, s.reactRef) : o;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { ...i, ref: a });
}), Pe = (t, e) => p(
  t.className,
  ...t.theme ? M(t.theme) : [],
  ...typeof e == "function" ? e(t) : e
), se = (...t) => (e) => {
  for (const n of t)
    typeof n == "function" ? n(e) : n && "current" in n && (n.current = e);
}, h = (t, e) => {
  typeof t == "function" ? t(e) : t && "current" in t && (t.current = e);
};
function re(t) {
  const e = react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef(t), n = (s, r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
  return n.displayName = t.constructor.name || "RMWCComponent", e.displayName = n.displayName, e;
}
function Ee(t) {
  const e = re(t);
  return l.memo(e);
}
const ie = (/* unused pure expression or super */ null && ({
  blur: "onBlur",
  cancel: "onCancel",
  click: "onClick",
  close: "onClose",
  contextmenu: "onContextMenu",
  copy: "onCopy",
  cut: "onCut",
  auxclick: "onAuxClick",
  doubleclick: "onDoubleClick",
  dragend: "onDragEnd",
  dragstart: "onDragStart",
  drop: "onDrop",
  focus: "onFocus",
  input: "onInput",
  invalid: "onInvalid",
  keydown: "onKeyDown",
  keypress: "onKeyPress",
  keyup: "onKeyUp",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  paste: "onPaste",
  pause: "onPause",
  play: "onPlay",
  pointercancel: "onPointerCancel",
  pointerdown: "onPointerDown",
  pointerup: "onPointerUp",
  ratechange: "onRateChange",
  reset: "onReset",
  seeked: "onSeeked",
  submit: "onSubmit",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchstart: "onTouchStart",
  volumechange: "onVolumeChange",
  abort: "onAbort",
  animationend: "onAnimationEnd",
  animationiteration: "onAnimationIteration",
  animationstart: "onAnimationStart",
  canplay: "onCanPlay",
  canplaythrough: "onCanPlayThrough",
  drag: "onDrag",
  dragenter: "onDragEnter",
  dragexit: "onDragExit",
  dragleave: "onDragLeave",
  dragover: "onDragOver",
  durationchange: "onDurationChange",
  emptied: "onEmptied",
  encrypted: "onEncrypted",
  ended: "onEnded",
  error: "onError",
  gotpointercapture: "onGotPointerCapture",
  load: "onLoad",
  loadeddata: "onLoadedData",
  loadedmetadata: "onLoadedMetadata",
  loadstart: "onLoadStart",
  lostpointercapture: "onLostPointerCapture",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseover: "onMouseOver",
  playing: "onPlaying",
  pointermove: "onPointerMove",
  pointerout: "onPointerOut",
  pointerover: "onPointerOver",
  progress: "onProgress",
  scroll: "onScroll",
  seeking: "onSeeking",
  stalled: "onStalled",
  suspend: "onSuspend",
  timeupdate: "onTimeUpdate",
  toggle: "onToggle",
  touchmove: "onTouchMove",
  transitionend: "onTransitionEnd",
  waiting: "onWaiting",
  wheel: "onWheel",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  pointerenter: "onPointerEnter",
  pointerleave: "onPointerLeave",
  change: "onChange",
  select: "onSelect",
  beforeinput: "onBeforeInput",
  compositionend: "onCompositionEnd",
  compositionstart: "onCompositionStart",
  compositionupdate: "onCompositionUpdate"
})), b = (t) => ie[t] || t;
class ae {
  constructor(e) {
    this._classes = /* @__PURE__ */ new Set(), this._events = {}, this._style = {}, this._props = {}, this._onChange = null, this.reactRef = l.createRef(), this._onChange = e, this.onChange = this.onChange.bind(this), this.addClass = this.addClass.bind(this), this.removeClass = this.removeClass.bind(this), this.hasClass = this.hasClass.bind(this), this.setProp = this.setProp.bind(this), this.getProp = this.getProp.bind(this), this.removeProp = this.removeProp.bind(this), this.setStyle = this.setStyle.bind(this), this.addEventListener = this.addEventListener.bind(this), this.removeEventListener = this.removeEventListener.bind(this);
  }
  onChange() {
    this._onChange && this._onChange();
  }
  destroy() {
    this._onChange = null, this._events = {}, this._style = {}, this._props = {}, this._classes = /* @__PURE__ */ new Set();
  }
  /**************************************************
   * Classes
   **************************************************/
  addClass(e) {
    this._classes.has(e) || (this._classes.add(e), this.onChange());
  }
  removeClass(e) {
    this._classes.has(e) && (this._classes.delete(e), this.onChange());
  }
  hasClass(e) {
    return this._classes.has(e);
  }
  /**************************************************
   * Props
   **************************************************/
  setProp(e, n, s = !1) {
    this._props[e] !== n && (this._props[e] = n, !s && this.onChange());
  }
  getProp(e) {
    return this._props[e];
  }
  removeProp(e) {
    this._props[e] !== void 0 && (delete this._props[e], this.onChange());
  }
  props(e) {
    const { className: n = "", style: s = {} } = e, r = Object.entries(e).reduce(
      (a, [c, u]) => {
        const v = this._events[c];
        if (typeof u == "function" && typeof v == "function") {
          const O = (C) => (v(C), u(C));
          a[c] = O;
        }
        return a;
      },
      { ...this._events }
    ), o = p(n, [...this._classes]), i = {
      ...this._style,
      ...s
    };
    return {
      ...e,
      ...this._props,
      ...r,
      style: i,
      className: o
    };
  }
  /**************************************************
   * Styles
   **************************************************/
  setStyle(e, n) {
    e = e.startsWith("--") ? e : ne(e), this._style[e] !== n && (this._style[e] = n, this.onChange());
  }
  /**************************************************
   * Events
   **************************************************/
  addEventListener(e, n) {
    const s = b(e);
    this._events[s] !== n && (this._events[s] = n, this.onChange());
  }
  removeEventListener(e, n) {
    const s = b(e);
    this._events[s] && (delete this._events[s], this.onChange());
  }
  get ref() {
    return this.reactRef.current;
  }
}
const ce = (t) => (e, n, s = !1) => {
  let r;
  r = new CustomEvent(e, {
    detail: n,
    bubbles: s
  }), Object.defineProperty(r, "target", {
    value: n,
    writable: !1
  }), Object.defineProperty(r, "currentTarget", {
    value: n,
    writable: !1
  });
  const o = e;
  return t[o] && t[o](r), r;
}, xe = ({
  foundation: t,
  props: e,
  elements: n,
  api: s
}) => {
  const [, r] = k((c) => c + 1, 0), o = A(e);
  o.current = e;
  const i = w(
    () => Object.keys(n).reduce((c, u) => (c[u] = new ae(() => {
      r();
    }), c), {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), a = w(() => {
    const c = t({
      ...i,
      getProps: () => o.current,
      emit: (...u) => ce(o.current)(...u)
    });
    return s && h(o.current.apiRef, s({ foundation: c, ...i })), c;
  }, []);
  return m(() => {
    const c = a;
    return c.init(), s && h(o.current.apiRef, s({ foundation: c, ...i })), h(o.current.foundationRef, c), () => {
      c.destroy(), h(o.current.apiRef, null), h(o.current.foundationRef, null), Object.values(i).map((u) => u.destroy()), o.current = {};
    };
  }, [a, i]), { foundation: a, ...i };
}, D = "rmwcPortal", Se = (t) => {
  const e = S(y), n = e == null ? void 0 : e.setPortalElement, s = I(
    (r) => {
      r !== null && n && n(r);
    },
    [n]
  );
  return /* @__PURE__ */ d("div", { ref: s, id: D, ...t });
};
function Re({
  children: t,
  renderTo: e,
  menuSurfaceDomPositionRef: n
}) {
  const [s, r] = g(), { portalElement: o } = S(y);
  return m(() => {
    let i;
    e === !0 && o ? i = o : e === !0 ? (i = (document == null ? void 0 : document.getElementById(D)) ?? void 0, i || console.warn(
      'No default Portal found. Did you forget to include it in the root of your app? `import { Portal } from "@rmwc/base";`'
    )) : typeof e == "string" ? (i = (document == null ? void 0 : document.querySelector(e)) ?? void 0, i || console.warn(
      `The selector you provided for renderToPortal "${e}" didn't find any elements.`
    )) : e instanceof Element && (i = e), i !== s && r(i);
  }, [e, s, o]), e ? s ? n ? /* @__PURE__ */ d("div", { ref: n, children: _(t, s) }) : _(t, s) : null : /* @__PURE__ */ d(x, { children: t });
}
const Me = function(t, e) {
  var n;
  return function() {
    var s = this, r = arguments, o = function() {
      n = null, t.apply(s, r);
    };
    n !== null && clearTimeout(n), n = setTimeout(o, e);
  };
}, De = (t) => {
}, Oe = (t, e, n) => {
  t = { ...t };
  for (const s in e) {
    const r = e[s];
    let o, i = (a) => a;
    Array.isArray(r) ? (o = r[0], i = r[1]) : o = r, t[s] !== void 0 && (o === "" || (t[o] = i(t[s]), t[o] !== t[s] && `${t[s]}${t[o]}`), delete t[s]);
  }
  return t;
}, le = _material_dom_dist_mdc_dom_js__WEBPACK_IMPORTED_MODULE_3__.focusTrap.FocusTrap, Le = (t, e) => new le(t, e);
function ue() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
const de = ue() ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
let f = (/* unused pure expression or super */ null && (!1)), he = 0;
function P() {
  return ++he;
}
const E = react__WEBPACK_IMPORTED_MODULE_1__["default"].useId, ke = (t, e) => {
  var r;
  const n = (r = e.label) == null ? void 0 : r.replace(/\s/g, "___"), s = me(n);
  return e.id ? e.id : `${t}-${s}`;
}, me = (t) => {
  if (E !== void 0) {
    let r = E();
    return t ?? r;
  }
  let e = t ?? (f ? P() : null), [n, s] = g(e);
  return de(() => {
    n === null && s(P());
  }, []), m(() => {
    f === !1 && (f = !0);
  }, []), t ?? n ?? void 0;
}, Ae = (t, e) => {
  if (t instanceof Element) {
    if (t && t.closest)
      return t.closest(e);
    {
      let n = t;
      for (; n; ) {
        if (pe(n, e))
          return n;
        n = n.parentElement;
      }
    }
  }
  return null;
}, pe = (t, e) => (t.matches || t.webkitMatchesSelector || // @ts-ignore
t.msMatchesSelector).call(t, e), Ie = (t) => {
  const e = (Math.random() + Math.random() + 1).toString(36).substring(2);
  return `${t}-${e}`;
}, Ne = (t) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__["default"].Children.only(t.children);
  return react__WEBPACK_IMPORTED_MODULE_1__["default"].cloneElement(e, {
    ...t,
    ...e.props,
    className: p(t.className, e.props.className),
    style: { ...e.props.style, ...t.style }
  });
};
class fe {
  constructor() {
    this.events_ = {};
  }
  on(e, n) {
    this.events_ = this.events_ || {}, this.events_[e] = this.events_[e] || [], this.events_[e].push(n);
  }
  off(e, n) {
    this.events_ = this.events_ || {}, e in this.events_ && this.events_[e].splice(this.events_[e].indexOf(n), 1);
  }
  trigger(e, ...n) {
    if (this.events_ = this.events_ || {}, e in this.events_)
      for (var s = 0; s < this.events_[e].length; s++)
        this.events_[e][s].apply(
          this,
          Array.prototype.slice.call(arguments, 1)
        );
  }
}
class Te extends fe {
  constructor() {
    super(...arguments), this.array = [];
  }
  push(...e) {
    const n = this.array.push(...e);
    return this.trigger("change"), n;
  }
  empty() {
    this.array.length = 0, this.trigger("change");
  }
  remove(e) {
    const n = this.array.indexOf(e);
    return n > -1 ? (this.array.splice(n, 1), this.trigger("change"), !0) : !1;
  }
}
const je = (t) => {
  var s, r, o;
  const e = Array.isArray(t) ? t[0] : t;
  return ((s = e == null ? void 0 : e.type) == null ? void 0 : s.displayName) || ((r = e == null ? void 0 : e.constructor) == null ? void 0 : r.displayName) || (e == null ? void 0 : e.displayName) || (e == null ? void 0 : e.name) || ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) || "Unknown";
}, Fe = (/* unused pure expression or super */ null && ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
})), Ue = react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(!1), We = react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(!1), $e = () => {
  window.dispatchEvent(new Event("resize"));
}, ge = (t, e = 1, n = 1) => {
  window.requestAnimationFrame(() => {
    n >= e ? t() : ge(t, e, n + 1);
  });
}, ze = X.version;


/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Bu", 0, /* binding */ M,
/* harmony export */   "O_", 0, /* binding */ oe,
/* harmony export */   "Tp", 0, /* binding */ Ne,
/* harmony export */   "UP", 0, /* binding */ Pe,
/* harmony export */   "vw", 0, /* binding */ be
/* harmony export */ ]);


/***/ }),
/* 62 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(7);
var isCallable = __webpack_require__(0);
var toObject = __webpack_require__(33);
var sharedKey = __webpack_require__(35);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(93);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),
/* 63 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);
var isCallable = __webpack_require__(0);
var isObject = __webpack_require__(10);
var create = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(62);
var defineBuiltIn = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(11);
var IS_PURE = __webpack_require__(20);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 64 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(21);
var isNullOrUndefined = __webpack_require__(32);
var getMethod = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(11);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined);
};


/***/ }),
/* 65 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(21);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),
/* 66 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(99);
var call = __webpack_require__(6);
var anObject = __webpack_require__(3);
var tryToString = __webpack_require__(39);
var isArrayIteratorMethod = __webpack_require__(101);
var lengthOfArrayLike = __webpack_require__(36);
var isPrototypeOf = __webpack_require__(38);
var getIterator = __webpack_require__(103);
var getIteratorMethod = __webpack_require__(64);
var iteratorClose = __webpack_require__(13);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var call = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(105);
var createPropertyDescriptor = __webpack_require__(29);
var toIndexedObject = __webpack_require__(22);
var toPropertyKey = __webpack_require__(49);
var hasOwn = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(52);

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
/* 68 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var fails = __webpack_require__(1);
var classof = __webpack_require__(21);

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
/* 69 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6);
var isObject = __webpack_require__(10);
var isSymbol = __webpack_require__(43);
var getMethod = __webpack_require__(23);
var ordinaryToPrimitive = __webpack_require__(72);
var wellKnownSymbol = __webpack_require__(11);

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
/* 70 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var userAgent = __webpack_require__(71);

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
/* 71 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),
/* 72 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6);
var isCallable = __webpack_require__(0);
var isObject = __webpack_require__(10);

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
/* 73 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
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
/* 74 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(5);
var isCallable = __webpack_require__(0);
var store = __webpack_require__(25);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 75 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(2);
var isCallable = __webpack_require__(0);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 76 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(7);
var ownKeys = __webpack_require__(77);
var getOwnPropertyDescriptorModule = __webpack_require__(67);
var definePropertyModule = __webpack_require__(14);

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
/* 77 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(24);
var uncurryThis = __webpack_require__(5);
var getOwnPropertyNamesModule = __webpack_require__(106);
var getOwnPropertySymbolsModule = __webpack_require__(107);
var anObject = __webpack_require__(3);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 78 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(57);

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
/* 79 */
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
/* 80 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(57);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 81 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);
var isCallable = __webpack_require__(0);

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
/* 82 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var isArray = __webpack_require__(65);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),
/* 83 */
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),
/* 84 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(28);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 85 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(24);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 86 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6);
var create = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(34);
var defineBuiltIns = __webpack_require__(95);
var wellKnownSymbol = __webpack_require__(11);
var InternalStateModule = __webpack_require__(47);
var getMethod = __webpack_require__(23);
var IteratorPrototype = (__webpack_require__(63).IteratorPrototype);
var createIterResultObject = __webpack_require__(96);
var iteratorClose = __webpack_require__(13);
var iteratorCloseAll = __webpack_require__(97);
var cleanupState = __webpack_require__(98);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        if (state.done) cleanupState(state);
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        cleanupState(state);
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var inner = state.inner;
      var openIters = state.openIters;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      cleanupState(state);
      if (done) return createIterResultObject(undefined, true);
      if (inner) try {
        iteratorClose(inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (openIters) try {
        iteratorCloseAll(openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),
/* 87 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(3);
var iteratorClose = __webpack_require__(13);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 88 */
/***/ (function(module) {


// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isPrototypeOf = __webpack_require__(38);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),
/* 93 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 94 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(14);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),
/* 95 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(40);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),
/* 96 */
/***/ (function(module) {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),
/* 97 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var iteratorClose = __webpack_require__(13);

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ }),
/* 98 */
/***/ (function(module) {


// release references held by exhausted / closed iterator helpers to allow GC of the source chain
module.exports = function (state) {
  state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
};


/***/ }),
/* 99 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(100);
var aCallable = __webpack_require__(19);
var NATIVE_BIND = __webpack_require__(31);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 100 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classofRaw = __webpack_require__(21);
var uncurryThis = __webpack_require__(5);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),
/* 101 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(11);
var Iterators = __webpack_require__(102);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 102 */
/***/ (function(module) {


module.exports = Object.create ? Object.create(null) : {};


/***/ }),
/* 103 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6);
var isCallable = __webpack_require__(0);
var anObject = __webpack_require__(3);
var tryToString = __webpack_require__(39);
var getIteratorMethod = __webpack_require__(64);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 104 */,
/* 105 */
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
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(28);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(4);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(54);
var definePropertyModule = __webpack_require__(14);
var anObject = __webpack_require__(3);
var toIndexedObject = __webpack_require__(22);
var objectKeys = __webpack_require__(84);

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
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 116 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports ProviderContext, RMWCProvider, typographyDefaults */
/* unused harmony import specifier */ var n;
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


const t = {
  ripple: !0,
  tooltip: {
    align: "top",
    showArrow: !1,
    activateOn: ["hover", "focus"],
    enterDelay: 0,
    leaveDelay: 0
  },
  typography: {},
  icon: {
    icon: "",
    basename: "material-icons",
    prefix: "",
    strategy: "auto",
    render: void 0
  }
}, p = (/* unused pure expression or super */ null && ({
  defaultTag: "span"
})), o = react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(t), c = () => react__WEBPACK_IMPORTED_MODULE_1__["default"].useContext(o), l = ({ children: r, ...a }) => /* @__PURE__ */ n(
  o.Provider,
  {
    value: {
      ...t,
      ...a
    },
    children: r
  }
);


/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "oh", 0, /* binding */ c
/* harmony export */ ]);


/***/ }),
/* 117 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports contrast, getAutoColorsForTheme, getRgb, hexToRgb, isLight, luminance, nameToHex */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);



const N = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  transparent: "#ffffff",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
}, M = (e) => N[e] || e, O = (e) => {
  e.length === 4 && (e = e + e.slice(1));
  const a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return a ? {
    r: parseInt(a[1], 16),
    g: parseInt(a[2], 16),
    b: parseInt(a[3], 16)
  } : {
    r: 0,
    g: 0,
    b: 0
  };
}, u = (e, a, r) => {
  let f = [e, a, r].map(function(t) {
    return t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
  });
  return f[0] * 0.2126 + f[1] * 0.7152 + f[2] * 0.0722;
}, P = (e, a) => (u(e[0], e[1], e[2]) + 0.05) / (u(a[0], a[1], a[2]) + 0.05), I = (e) => (e = M(e), O(e)), R = (e) => {
  const { r: a, g: r, b: f } = I(e);
  return !(P([255, 255, 255], [a, r, f]) > 3);
}, g = {
  "--mdc-theme-primary": [["--mdc-theme-on-primary", 0]],
  "--mdc-theme-surface": [["--mdc-theme-on-surface", 0]],
  "--mdc-theme-secondary": [["--mdc-theme-on-secondary", 0]],
  "--mdc-theme-background": [
    ["--mdc-theme-text-primary-on-background", 0],
    ["--mdc-theme-text-secondary-on-background", 1],
    ["--mdc-theme-text-hint-on-background", 2],
    ["--mdc-theme-text-disabled-on-background", 2],
    ["--mdc-theme-text-icon-on-background", 2]
  ]
}, S = [
  "rgba(0, 0, 0, 0.87)",
  "rgba(0, 0, 0, 0.54)",
  "rgba(0, 0, 0, 0.38)"
], $ = [
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 0.7)",
  "rgba(255, 255, 255, 0.5)"
], z = (e) => ({
  ...Object.keys(g).reduce(
    (r, f) => {
      if (e[f]) {
        const t = R(e[f]) ? S : $;
        g[f].forEach((n) => {
          r[n[0]] = t[n[1]];
        });
      }
      return r;
    },
    {}
  ),
  ...e
}), F = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)(function(a, r) {
  const { use: f, wrap: t, ...n } = a, c = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .useClassNames */ .UP)(a, [(0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .parseThemeOptions */ .Bu)(f).join(" ")]);
  return t ? (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .wrapChild */ .Tp)({
    ...n,
    ref: r,
    className: c
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .Tag */ .vw, { tag: "span", theme: f, ...n, ref: r, className: c });
}), H = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)(
  function(a, r) {
    var i, b;
    const f = JSON.stringify(a.options), t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
      const T = Object.keys(a.options).reduce(
        (m, o) => {
          const q = a.options[o];
          return o = o.startsWith("--") ? o : `--mdc-theme-${(0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .toDashCase */ .O_)(o)}`, m[o] = q, m;
        },
        {}
      );
      return z(T);
    }, [f]), { options: n, style: c = {}, wrap: l, ...d } = a, v = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .useClassNames */ .UP)(a, [
      l && typeof d.children == "object" && // @ts-ignore
      ((b = (i = d.children) == null ? void 0 : i.props) == null ? void 0 : b.className)
    ]), s = {
      ...c,
      ...t
    };
    return l && d.children ? (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .wrapChild */ .Tp)({ ...d, style: s, ref: r }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__/* .Tag */ .vw, { ...d, style: s, className: v, ref: r });
  }
);


/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "NP", 0, /* binding */ H,
/* harmony export */   "Sx", 0, /* binding */ F
/* harmony export */ ]);


/***/ }),
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module) {

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_844__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_844__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_844__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_844__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_844__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_844__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_844__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_844__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_844__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_844__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_844__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_844__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_844__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_844__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_844__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_844__(__nested_webpack_require_844__.s = "./packages/mdc-dom/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/mdc-dom/events.ts":
/*!************************************!*\
  !*** ./packages/mdc-dom/events.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPassive = void 0;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) {
        globalObj = window;
    }
    return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
exports.applyPassive = applyPassive;
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) {
        globalObj = window;
    }
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
        var handler = function handler() {};
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

/***/ }),

/***/ "./packages/mdc-dom/focus-trap.ts":
/*!****************************************!*\
  !*** ./packages/mdc-dom/focus-trap.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusTrap = void 0;
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
var FocusTrap = /** @class */function () {
    function FocusTrap(root, options) {
        if (options === void 0) {
            options = {};
        }
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */
    FocusTrap.prototype.trapFocus = function () {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) {
            throw new Error('FocusTrap: Element must have at least one focusable child.');
        }
        this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) {
            this.focusInitialElement(focusableEls, this.options.initialFocusEl);
        }
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */
    FocusTrap.prototype.releaseFocus = function () {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
            this.elFocusedBeforeTrapFocus.focus();
        }
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */
    FocusTrap.prototype.wrapTabFocus = function (el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[focusableEls.length - 1].focus();
            }
        });
        sentinelEnd.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */
    FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) {
            focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        }
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function (root) {
        var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function (el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function () {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}();
exports.FocusTrap = FocusTrap;

/***/ }),

/***/ "./packages/mdc-dom/index.ts":
/*!***********************************!*\
  !*** ./packages/mdc-dom/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_13499__) {

"use strict";

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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ponyfill = exports.keyboard = exports.focusTrap = exports.events = void 0;
var events = __importStar(__nested_webpack_require_13499__(/*! ./events */ "./packages/mdc-dom/events.ts"));
exports.events = events;
var focusTrap = __importStar(__nested_webpack_require_13499__(/*! ./focus-trap */ "./packages/mdc-dom/focus-trap.ts"));
exports.focusTrap = focusTrap;
var keyboard = __importStar(__nested_webpack_require_13499__(/*! ./keyboard */ "./packages/mdc-dom/keyboard.ts"));
exports.keyboard = keyboard;
var ponyfill = __importStar(__nested_webpack_require_13499__(/*! ./ponyfill */ "./packages/mdc-dom/ponyfill.ts"));
exports.ponyfill = ponyfill;

/***/ }),

/***/ "./packages/mdc-dom/keyboard.ts":
/*!**************************************!*\
  !*** ./packages/mdc-dom/keyboard.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.isNavigationEvent = exports.normalizeKey = exports.KEY = void 0;
/**
 * KEY provides normalized string values for keys.
 */
exports.KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab'
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(exports.KEY.BACKSPACE);
normalizedKeys.add(exports.KEY.ENTER);
normalizedKeys.add(exports.KEY.SPACEBAR);
normalizedKeys.add(exports.KEY.PAGE_UP);
normalizedKeys.add(exports.KEY.PAGE_DOWN);
normalizedKeys.add(exports.KEY.END);
normalizedKeys.add(exports.KEY.HOME);
normalizedKeys.add(exports.KEY.ARROW_LEFT);
normalizedKeys.add(exports.KEY.ARROW_UP);
normalizedKeys.add(exports.KEY.ARROW_RIGHT);
normalizedKeys.add(exports.KEY.ARROW_DOWN);
normalizedKeys.add(exports.KEY.DELETE);
normalizedKeys.add(exports.KEY.ESCAPE);
normalizedKeys.add(exports.KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, exports.KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, exports.KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, exports.KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, exports.KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, exports.KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, exports.KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, exports.KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, exports.KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, exports.KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, exports.KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, exports.KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, exports.KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, exports.KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, exports.KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(exports.KEY.PAGE_UP);
navigationKeys.add(exports.KEY.PAGE_DOWN);
navigationKeys.add(exports.KEY.END);
navigationKeys.add(exports.KEY.HOME);
navigationKeys.add(exports.KEY.ARROW_LEFT);
navigationKeys.add(exports.KEY.ARROW_UP);
navigationKeys.add(exports.KEY.ARROW_RIGHT);
navigationKeys.add(exports.KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return exports.KEY.UNKNOWN;
}
exports.normalizeKey = normalizeKey;
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}
exports.isNavigationEvent = isNavigationEvent;

/***/ }),

/***/ "./packages/mdc-dom/ponyfill.ts":
/*!**************************************!*\
  !*** ./packages/mdc-dom/ponyfill.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateScrollWidth = exports.matches = exports.closest = void 0;
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
exports.closest = closest;
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
exports.matches = matches;
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
exports.estimateScrollWidth = estimateScrollWidth;

/***/ })

/******/ });
});
//# sourceMappingURL=mdc.dom.js.map

/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Et: function() { return /* binding */ WrapTooltip; }
});

// UNUSED EXPORTS: default, isDummy

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(15);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(16);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(17);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(18);
// EXTERNAL MODULE: ./src/shims/optionals.ts
var optionals = __webpack_require__(140);
// EXTERNAL MODULE: ./node_modules/@rmwc/typography/index.mjs
var typography = __webpack_require__(139);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(9);
;// ./src/implementations/rmwc/Tooltip.tsx
// -*- coding: utf-8 -*-
/** @module Tooltip *//* !
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
var isDummy=!optionals/* Tooltip */.m_||Boolean(optionals/* Tooltip */.m_.isDummy);var Tooltip=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){if(isDummy)return/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"generic-tooltip",ref:reference,title:properties.value,children:properties.children});return/*#__PURE__*/(0,jsx_runtime_.jsx)(optionals/* Tooltip */.m_,_objectSpread(_objectSpread({overlay:/*#__PURE__*/(0,jsx_runtime_.jsx)(typography/* Typography */.o,{use:"caption",children:properties.value}),ref:reference},properties.componentProperties),{},{children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"generic-tooltip",children:properties.children})}))});/* harmony default export */ var rmwc_Tooltip = (Tooltip);
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
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
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
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _rmwc_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);



const u = {
  headline1: "h1",
  headline2: "h2",
  headline3: "h3",
  headline4: "h4",
  headline5: "h5",
  headline6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  button: "span",
  overline: "span"
}, C = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_1__/* .createComponent */ .a0)(
  function(t, o) {
    const { use: n, ...a } = t, e = (0,_rmwc_provider__WEBPACK_IMPORTED_MODULE_2__/* .useProviderContext */ .oh)().typography, s = (e == null ? void 0 : e[n]) || (e == null ? void 0 : e.defaultTag) || u[n], r = (0,_rmwc_base__WEBPACK_IMPORTED_MODULE_1__/* .useClassNames */ .UP)(t, [
      {
        [`mdc-typography--${t.use}`]: t.use
      }
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .vw, { tag: s, ...a, ref: o, className: r });
  }
);


/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "o", 0, /* binding */ C
/* harmony export */ ]);


/***/ }),
/* 140 */
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
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ WrapStrict; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-strict *//* !
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
/* 160 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ WrapThemeProvider; }
/* harmony export */ });
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapThemeProvider *//* !
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
 */var WrapThemeProvider=function WrapThemeProvider(_ref){var children=_ref.children,configuration=_ref.configuration,wrap=_ref.wrap;return configuration?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_0__/* .ThemeProvider */ .NP,{options:configuration,wrap:wrap!==false,children:children}):children};/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WrapThemeProvider)));

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
/* harmony export */   Es: function() { return /* binding */ WrapConfigurations; },
/* harmony export */   zb: function() { return /* binding */ createWrapConfigurationsComponent; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _WrapStrict_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(159);
/* harmony import */ var _WrapThemeProvider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(160);
/* harmony import */ var _WrapTooltip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapConfigurations *//* !
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
 */var WrapConfigurations=function WrapConfigurations(_ref){var children=_ref.children,strict=_ref.strict,themeConfiguration=_ref.themeConfiguration,tooltip=_ref.tooltip,wrap=_ref.wrap;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_WrapStrict_js__WEBPACK_IMPORTED_MODULE_6__/* .WrapStrict */ .g,{strict:Boolean(strict),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_WrapTooltip_js__WEBPACK_IMPORTED_MODULE_8__/* .WrapTooltip */ .Et,{value:tooltip,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_WrapThemeProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .WrapThemeProvider */ .R,{configuration:themeConfiguration,wrap:wrap,children:children})})})};/**
 * Component factory to dynamically create a wrapped component.
 * @param WrappedComponent - Component to wrap.
 * @param options - Options configure wrapping.
 * @param options.withReference - Indicates whether to add a mutable reference
 * to wrapping component.
 * @param options.withThemeWrapper - Indicates whether all theme configurations
 * should be provided.
 * @returns Created wrapped component.
 */function createWrapConfigurationsComponent(WrappedComponent,options){if(options===void 0){options={}}var component=function component(_ref2,reference){var strict=_ref2.strict,theme=_ref2.theme,themeConfiguration=_ref2.themeConfiguration,tooltip=_ref2.tooltip,wrap=_ref2.wrap,properties=_objectWithoutProperties(_ref2,_excluded);var wrapped=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(WrappedComponent,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},properties),options.withReference===false?{}:reference?{ref:reference}:{}),options.withThemeWrapper&&theme?{theme:theme}:{})));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(WrapConfigurations,{strict:strict,themeConfiguration:themeConfiguration,tooltip:tooltip,wrap:wrap,children:options.withThemeWrapper&&theme?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_4__/* .Theme */ .Sx,{use:theme,wrap:wrap,children:wrapped}):wrapped})};return options.withReference?/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(component):component}/* harmony default export */ __webpack_exports__.Ay = (WrapConfigurations);
var __webpack_exports__default = __webpack_exports__.Ay;
export { WrapConfigurations, createWrapConfigurationsComponent, __webpack_exports__default as default };

'use strict';if(typeof module!=='undefined'&&module!==null&&eval('typeof require')!=='undefined'&&eval('require')!==null&&'main'in eval('require')&&eval('typeof require.main')!=='undefined'&&eval('require.main')!==null){var ORIGINAL_MAIN_MODULE=module;if(module!==eval('require.main')&&'paths'in module&&'paths'in eval('require.main')&&typeof __dirname!=='undefined'&&__dirname!==null)module.paths=eval('require.main.paths').concat(module.paths.filter(function(path){return eval('require.main.paths').includes(path)}))};if(typeof window==='undefined'||window===null)var window=(typeof global==='undefined'||global===null)?{}:global;!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(){return function(){"use strict";var e={106:function(e,t,r){var n=r(0),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function a(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!f.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:c.current}}t.jsx=a},26:function(e,t){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var S=h.prototype=new b;S.constructor=h,_(S,m.prototype),S.isPureReactComponent=!0;var E=Array.isArray,R=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=t[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function g(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return i=i(f=e),e=""===u?"."+$(f,0):u,E(i)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),g(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||f&&f.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(f=0,u=""===u?".":u+":",E(e))for(var a=0;a<e.length;a++){var l=u+$(c=e[a],a);f+=g(c,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)f+=g(c=c.value,t,o,l=u+$(c,a++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function C(e,t,r){if(null==e)return e;var n=[],o=0;return g(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=h,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in t)R.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==f?f[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){f=Array(a);for(var l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},0:function(e,t,r){e.exports=r(26)},4:function(e,t,r){e.exports=r(106)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{CodeEditor:function(){return u},Dummy:function(){return o},Editor:function(){return i},RichTextEditor:function(){return c},TextEditor:function(){return f}});var e=r(0),t=r(4),o=(0,e.forwardRef)((function(e,r){var n;return(0,t.jsx)("div",{children:null!==(n=e.children)&&void 0!==n?n:null})}));o.isDummy=!0;var u=o,i=o,c=o,f=o;n.default=o}(),n}()}));
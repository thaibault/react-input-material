if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { timeout as __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__ } from "clientnode";
import { formatEndUserTime as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_endToEndTestHelper_js_31fee84c_formatEndUserTime__ } from "react-generic-tools/endToEndTestHelper.js";
/******/ var __webpack_modules__ = ({

/***/ 28:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ textInput; }
});

// UNUSED EXPORTS: default

;// external "clientnode"

;// ./src/components/TextInput/harness.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};var textInput=function textInput(parent){var inputNode=parent.locator("input, textarea");var richInputNode=parent.locator("[contenteditable]");var menuNode=parent.locator(".mdc-menu-surface");var optionListNode=parent.locator("ul li");var selectedItemNode=parent.locator(".mdc-select__selected-text");var codeEditorButton=parent.locator(".text-input__code-editor-button");var richtextEditorButton=parent.locator(".text-input__richtext-editor-button");/*
        NOTE: The plain input is animated out (and unmounted afterwards) while
        the editor (which brings its own hidden textarea) is already mounted.
        So wait until only one input node remains.
    */var waitForSingleInput=/*#__PURE__*/function(){var _waitForSingleInput=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _t;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return inputNode.count();case 1:_t=_context.v;if(!(_t>1)){_context.n=3;break}_context.n=2;return __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__(20);case 2:_context.n=0;break;case 3:return _context.a(2)}},_callee)}));function waitForSingleInput(){return _waitForSingleInput.apply(this,arguments)}return waitForSingleInput}();/*
        NOTE: Opening and closing the menu is animated. Clicking again before
        the animation has finished toggles the menu back, so wait until the
        requested state has settled before clicking again.
    */var animatingMenuNode=menuNode.and(parent.locator(".mdc-menu-surface--animating-open, "+".mdc-menu-surface--animating-closed"));var setMenuOpen=/*#__PURE__*/function(){var _setMenuOpen=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(open){var tries,_t2,_t3,_t4,_t5,_t6,_t7,_t8;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:_context2.n=1;return result.isMenuOpen();case 1:_t2=_context2.v;_t3=open;if(!(_t2!==_t3)){_context2.n=10;break}_context2.n=2;return selectedItemNode.click();case 2:tries=50;case 3:_t4=tries-->0;if(!_t4){_context2.n=7;break}_context2.n=4;return animatingMenuNode.count();case 4:_t6=_context2.v;_t5=_t6>0;if(_t5){_context2.n=6;break}_context2.n=5;return result.isMenuOpen();case 5:_t7=_context2.v;_t8=open;_t5=_t7!==_t8;case 6:_t4=_t5;case 7:if(!_t4){_context2.n=9;break}_context2.n=8;return __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__(20);case 8:_context2.n=3;break;case 9:_context2.n=0;break;case 10:return _context2.a(2)}},_callee2)}));function setMenuOpen(_x){return _setMenuOpen.apply(this,arguments)}return setMenuOpen}();var result={main:parent,inputNode:inputNode,richInputNode:richInputNode,activateCodeEditor:function(){var _activateCodeEditor=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(){var _t9;return _regenerator().w(function(_context3){while(1)switch(_context3.n){case 0:_context3.n=1;return richInputNode.count();case 1:_t9=_context3.v;if(!(_t9===0)){_context3.n=3;break}_context3.n=2;return codeEditorButton.click();case 2:_context3.n=3;return waitForSingleInput();case 3:return _context3.a(2)}},_callee3)}));function activateCodeEditor(){return _activateCodeEditor.apply(this,arguments)}return activateCodeEditor}(),activateRichtextEditor:function(){var _activateRichtextEditor=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(){var _t0;return _regenerator().w(function(_context4){while(1)switch(_context4.n){case 0:_context4.n=1;return richInputNode.count();case 1:_t0=_context4.v;if(!(_t0===0)){_context4.n=3;break}_context4.n=2;return richtextEditorButton.click();case 2:_context4.n=3;return waitForSingleInput();case 3:return _context4.a(2)}},_callee4)}));function activateRichtextEditor(){return _activateRichtextEditor.apply(this,arguments)}return activateRichtextEditor}(),getOptions:function(){var _getOptions=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(){var result,_iterator,_step,_yield$listNode$textC,listNode,_t1,_t10,_t11,_t12,_t13,_t14;return _regenerator().w(function(_context5){while(1)switch(_context5.p=_context5.n){case 0:result=[];_t1=_createForOfIteratorHelper;_context5.n=1;return optionListNode.elementHandles();case 1:_iterator=_t1(_context5.v);_context5.p=2;_iterator.s();case 3:if((_step=_iterator.n()).done){_context5.n=9;break}listNode=_step.value;_t10=result;_context5.n=4;return listNode.textContent();case 4:_t12=_yield$listNode$textC=_context5.v;_t11=_t12!==null;if(!_t11){_context5.n=5;break}_t11=_yield$listNode$textC!==void 0;case 5:if(!_t11){_context5.n=6;break}_t13=_yield$listNode$textC;_context5.n=7;break;case 6:_t13="";case 7:_t10.push.call(_t10,_t13);case 8:_context5.n=3;break;case 9:_context5.n=11;break;case 10:_context5.p=10;_t14=_context5.v;_iterator.e(_t14);case 11:_context5.p=11;_iterator.f();return _context5.f(11);case 12:return _context5.a(2,result)}},_callee5,null,[[2,10,11,12]])}));function getOptions(){return _getOptions.apply(this,arguments)}return getOptions}(),isMenuOpen:function(){var _isMenuOpen=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(){var _t15;return _regenerator().w(function(_context6){while(1)switch(_context6.n){case 0:_context6.n=1;return menuNode.and(parent.locator(".mdc-menu-surface--open")).count();case 1:_t15=_context6.v;return _context6.a(2,_t15>0)}},_callee6)}));function isMenuOpen(){return _isMenuOpen.apply(this,arguments)}return isMenuOpen}(),fill:function(){var _fill=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(valueRepresentation){var _iterator2,_step2,listNode,_t16,_t17,_t18,_t19,_t20,_t21,_t22,_t23;return _regenerator().w(function(_context7){while(1)switch(_context7.p=_context7.n){case 0:_context7.n=1;return richInputNode.count();case 1:_t16=_context7.v;if(!(_t16>0)){_context7.n=3;break}_context7.n=2;return richInputNode.fill(valueRepresentation);case 2:return _context7.a(2);case 3:_context7.n=4;return inputNode.count();case 4:_t17=_context7.v;if(!(_t17>0)){_context7.n=6;break}_context7.n=5;return inputNode.fill(valueRepresentation);case 5:return _context7.a(2);case 6:_context7.n=7;return setMenuOpen(true);case 7:_t18=_createForOfIteratorHelper;_context7.n=8;return optionListNode.elementHandles();case 8:_iterator2=_t18(_context7.v);_context7.p=9;_iterator2.s();case 10:if((_step2=_iterator2.n()).done){_context7.n=19;break}listNode=_step2.value;_context7.n=11;return listNode.textContent();case 11:_t19=_context7.v;_t20=valueRepresentation;if(!(_t19===_t20)){_context7.n=18;break}case 12:_context7.n=13;return result.inputValue();case 13:_t21=_context7.v;_t22=valueRepresentation;if(!(_t21!==_t22)){_context7.n=17;break}_context7.n=14;return setMenuOpen(true);case 14:_context7.n=15;return listNode.click();case 15:_context7.n=16;return __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__(20);case 16:_context7.n=12;break;case 17:return _context7.a(3,19);case 18:_context7.n=10;break;case 19:_context7.n=21;break;case 20:_context7.p=20;_t23=_context7.v;_iterator2.e(_t23);case 21:_context7.p=21;_iterator2.f();return _context7.f(21);case 22:_context7.n=23;return setMenuOpen(false);case 23:return _context7.a(2)}},_callee7,null,[[9,20,21,22]])}));function fill(_x2){return _fill.apply(this,arguments)}return fill}(),inputValue:function(){var _inputValue=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(){var _t24;return _regenerator().w(function(_context8){while(1)switch(_context8.n){case 0:_context8.n=1;return inputNode.count();case 1:_t24=_context8.v;if(!(_t24>0)){_context8.n=3;break}_context8.n=2;return inputNode.inputValue();case 2:return _context8.a(2,_context8.v);case 3:_context8.n=4;return selectedItemNode.textContent();case 4:return _context8.a(2,_context8.v)}},_callee8)}));function inputValue(){return _inputValue.apply(this,arguments)}return inputValue}()};return result};/* harmony default export */ var harness = ((/* unused pure expression or super */ null && (textInput)));

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

;// external "react-generic-tools/endToEndTestHelper.js"

// EXTERNAL MODULE: ./src/components/TextInput/harness.ts + 1 modules
var harness = __webpack_require__(28);
;// ./src/components/Interval/harness.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};var intervalInput=function intervalInput(parent){var startInput=(0,harness/* textInput */._)(parent.locator(".interval__start"));var endInput=(0,harness/* textInput */._)(parent.locator(".interval__end"));var result={main:parent,startInput:startInput,endInput:endInput,fillStart:startInput.fill.bind(startInput),startInputValue:startInput.inputValue.bind(startInput),fillEnd:endInput.fill.bind(endInput),endInputValue:endInput.inputValue.bind(endInput),fill:function(){var _fill=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(start,end){return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return result.fillEnd(__WEBPACK_EXTERNAL_MODULE_react_generic_tools_endToEndTestHelper_js_31fee84c_formatEndUserTime__(new Date(end)));case 1:_context.n=2;return result.fillStart(__WEBPACK_EXTERNAL_MODULE_react_generic_tools_endToEndTestHelper_js_31fee84c_formatEndUserTime__(new Date(start)));case 2:return _context.a(2)}},_callee)}));function fill(_x,_x2){return _fill.apply(this,arguments)}return fill}()};return result};/* harmony default export */ var Interval_harness = (intervalInput);
export { Interval_harness as default, intervalInput };

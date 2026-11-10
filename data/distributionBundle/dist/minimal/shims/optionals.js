if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;/******/ // The require scope
/******/ var __webpack_require__ = {};
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
/* harmony export */   $K: function() { return /* binding */ lineNumbers; },
/* harmony export */   $Z: function() { return /* binding */ EditorContent; },
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
/* harmony export */   hG: function() { return /* binding */ useEditor; },
/* harmony export */   m_: function() { return /* binding */ Tooltip; },
/* harmony export */   n4: function() { return /* binding */ CharacterCount; },
/* harmony export */   pw: function() { return /* binding */ defaultKeymap; },
/* harmony export */   w4: function() { return /* binding */ keymap; },
/* harmony export */   wm: function() { return /* binding */ closeBrackets; },
/* harmony export */   y9: function() { return /* binding */ syntaxHighlighting; },
/* harmony export */   yU: function() { return /* binding */ autocompletion; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module reactGenericDummy */var MOCK_RESULT=undefined;// @rmwc/tooltip
var Tooltip=MOCK_RESULT;// @tiptap/extensions
var CharacterCount=MOCK_RESULT;// @tiptap/react
var EditorContent=MOCK_RESULT;var useEditor=MOCK_RESULT;// @codemirror/state
var EditorState=MOCK_RESULT;var Text=MOCK_RESULT;// @codemirror/view
var EditorView=MOCK_RESULT;// @codemirror/autocomplete
var autocompletion=MOCK_RESULT;// @codemirror/language
var bracketMatching=MOCK_RESULT;var closeBrackets=MOCK_RESULT;var closeBracketsKeymap=MOCK_RESULT;var completionKeymap=MOCK_RESULT;var crosshairCursor=MOCK_RESULT;var css=MOCK_RESULT;var defaultHighlightStyle=MOCK_RESULT;var defaultKeymap=MOCK_RESULT;var drawSelection=MOCK_RESULT;var dropCursor=MOCK_RESULT;var foldGutter=MOCK_RESULT;var foldKeymap=MOCK_RESULT;var highlightActiveLine=MOCK_RESULT;var highlightActiveLineGutter=MOCK_RESULT;var highlightSelectionMatches=MOCK_RESULT;var highlightSpecialChars=MOCK_RESULT;var indentOnInput=MOCK_RESULT;var javascript=MOCK_RESULT;var keymap=MOCK_RESULT;var lineNumbers=MOCK_RESULT;var lintKeymap=MOCK_RESULT;var rectangularSelection=MOCK_RESULT;var searchKeymap=MOCK_RESULT;var syntaxHighlighting=MOCK_RESULT;// @codemirror/commands
// NOTE: We need to alias the history export to avoid a name mangeling.
var optionalsHistory=MOCK_RESULT;var historyKeymap=MOCK_RESULT;
export { CharacterCount, EditorContent, EditorState, EditorView, Text, Tooltip, autocompletion, bracketMatching, closeBrackets, closeBracketsKeymap, completionKeymap, crosshairCursor, css, defaultHighlightStyle, defaultKeymap, drawSelection, dropCursor, foldGutter, foldKeymap, highlightActiveLine, highlightActiveLineGutter, highlightSelectionMatches, highlightSpecialChars, optionalsHistory as history, historyKeymap, indentOnInput, javascript, keymap, lineNumbers, lintKeymap, rectangularSelection, searchKeymap, syntaxHighlighting, useEditor };

if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;export const __webpack_esm_id__ = 32;
export const __webpack_esm_ids__ = [32];
export const __webpack_esm_modules__ = {

/***/ 47:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Index */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var react_generic_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _implementations_TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var Index=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function(properties,reference){var _useReferenceState=(0,react_generic_tools__WEBPACK_IMPORTED_MODULE_5__.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputReference=_useReferenceState2[0],setInputReference=_useReferenceState2[1];(0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(reference,function(){return{input:inputReference,/*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */eventMapper:{blur:function blur(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("blur");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},focus:function focus(event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("focus");syntheticEvent.detail=event;inputReference.input.dispatchEvent(syntheticEvent)}},input:function input(value,event){if(inputReference!==null&&inputReference!==void 0&&inputReference.input){var syntheticEvent=new Event("input");syntheticEvent.detail=event;inputReference.input.value=String(value);inputReference.input.dispatchEvent(syntheticEvent)}}}}},[inputReference,inputReference===null||inputReference===void 0?void 0:inputReference.input]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_implementations_TextArea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay,_objectSpread(_objectSpread({ref:setInputReference},properties),{},{children:properties.children}))});/* harmony default export */ __webpack_exports__.A = (Index);

/***/ }),

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CSS_CLASS_NAMES: function() { return /* binding */ CSS_CLASS_NAMES; },
  Index: function() { return /* binding */ Tiptap_Index; },
  VIEW_CONTENT_OFFSET_IN_PX: function() { return /* binding */ VIEW_CONTENT_OFFSET_IN_PX; },
  "default": function() { return /* binding */ Tiptap; }
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.array.push.js"
var es_array_push_js_ = __webpack_require__(1);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.constructor.js"
var es_iterator_constructor_js_ = __webpack_require__(0);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.filter.js"
var es_iterator_filter_js_ = __webpack_require__(2);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.for-each.js"
var es_iterator_for_each_js_ = __webpack_require__(3);
// EXTERNAL MODULE: ./src/shims/optionals.ts
var optionals = __webpack_require__(15);
// EXTERNAL MODULE: external "react-generic-dummy"
var external_react_generic_dummy_ = __webpack_require__(32);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(6);
// EXTERNAL MODULE: ./src/components/TextInput/InputEventMapperWrapper/index.tsx
var InputEventMapperWrapper = __webpack_require__(47);
// EXTERNAL MODULE: ./src/components/TextInput/style.module.css
var style_module = __webpack_require__(27);
// EXTERNAL MODULE: ./src/implementations/rmwc/IconButton.tsx + 1 modules
var IconButton = __webpack_require__(26);
// EXTERNAL MODULE: ./src/components/Wrapper/WrapTooltip.tsx + 1 modules
var WrapTooltip = __webpack_require__(13);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4);
;// ./src/components/TextInput/Tiptap/MenuBar.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
var EditorContext=/*#__PURE__*/(0,external_react_.createContext)(null);var Button=function Button(_ref){var _ref2;var action=_ref.action,activeIndicator=_ref.activeIndicator,checkedIconName=_ref.checkedIconName,enabledIndicator=_ref.enabledIndicator,iconName=_ref.iconName,label=_ref.label;var editor=(0,external_react_.useContext)(EditorContext);if(!editor)return null;var enabled=true;if(enabledIndicator)enabled=enabledIndicator(editor.can().chain().focus()).run();else if(enabledIndicator!==null)enabled=action(editor.can().chain().focus()).run();var checked=Boolean(activeIndicator&&editor.isActive(activeIndicator));var description=(_ref2=label!==null&&label!==void 0?label:activeIndicator)!==null&&_ref2!==void 0?_ref2:iconName;return/*#__PURE__*/(0,jsx_runtime_.jsx)(WrapTooltip/* default */.Ay,{value:description,children:/*#__PURE__*/(0,jsx_runtime_.jsx)(IconButton/* default */.A,{value:checked,disabled:!enabled,classNames:checked?["mdc-icon-button--checked"]:[],onClick:(0,external_react_generic_tools_.useMemorizedValue)(function(event){event.stopPropagation();action(editor.chain().focus()).run()},action,editor),size:"extra-small",icon:iconName,onIcon:checkedIconName!==null&&checkedIconName!==void 0?checkedIconName:iconName,domNodeProperties:{"aria-label":description}})})};var Index=function Index(_ref3){var editor=_ref3.editor;if(!editor)return null;return/*#__PURE__*/(0,jsx_runtime_.jsx)("span",{className:"richtext-editor-menu-bar",children:/*#__PURE__*/(0,jsx_runtime_.jsxs)(EditorContext.Provider,{value:editor,children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__history",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.undo()},iconName:"undo"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.redo()},iconName:"redo"})]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__marks",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.unsetAllMarks()},enabledIndicator:null,iconName:"format_clear",label:"clear formatting"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleBold()},activeIndicator:"bold",iconName:"format_bold"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleItalic()},activeIndicator:"italic",iconName:"format_italic"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleStrike()},activeIndicator:"strike",iconName:"format_strikethrough",label:"strikethrough"})]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("span",{className:"richtext-editor-menu-bar__nodes",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.clearNodes()},enabledIndicator:null,iconName:"layers_clear",label:"clear markup"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleHeading({level:2})},enabledIndicator:null,activeIndicator:"heading",iconName:"title",label:"headline"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.setParagraph()},enabledIndicator:null,activeIndicator:"paragraph",iconName:"segment"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleBulletList()},enabledIndicator:null,activeIndicator:"bulletList",iconName:"format_list_bulleted",label:"Unordered List"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.toggleOrderedList()},enabledIndicator:null,activeIndicator:"orderedList",iconName:"format_list_numbered",label:"Ordered List"}),/*#__PURE__*/(0,jsx_runtime_.jsx)(Button,{action:function action(command){return command.setHardBreak()},enabledIndicator:null,iconName:"insert_page_break",label:"Hard break"})]})]})})};/* harmony default export */ var MenuBar = (Index);
;// ./src/components/TextInput/Tiptap/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var CSS_CLASS_NAMES=style_module/* default */.A;var VIEW_CONTENT_OFFSET_IN_PX=8;var Tiptap_Index=/*#__PURE__*/(0,external_react_.forwardRef)(function(properties,reference){var _properties$value,_properties$editor,_properties$editor2,_properties$editor3,_inputEventMapperRefe;if(!optionals/* useEditor */.hG||external_react_generic_dummy_["default"].isDummy)throw Error("Missing tiptap dependencies.");var value=(_properties$value=properties.value)!==null&&_properties$value!==void 0?_properties$value:"";var _useReferenceState=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState2=_slicedToArray(_useReferenceState,2),inputEventMapperReference=_useReferenceState2[0],setInputEventMapperReference=_useReferenceState2[1];var _useReferenceState3=(0,external_react_generic_tools_.useReferenceState)(null),_useReferenceState4=_slicedToArray(_useReferenceState3,2),editorViewReference=_useReferenceState4[0],setEditorViewReference=_useReferenceState4[1];(0,external_react_.useImperativeHandle)(reference,function(){return{input:inputEventMapperReference,editorViewReference:editorViewReference}},[inputEventMapperReference,editorViewReference]);var extensions=((_properties$editor=properties.editor)===null||_properties$editor===void 0?void 0:_properties$editor.extensions)||[].concat(_toConsumableArray(properties.maximumLength===undefined?[]:[optionals/* CharacterCount */.n4.configure({limit:properties.maximumLength})]),[external_react_generic_dummy_["default"].configure(((_properties$editor2=properties.editor)===null||_properties$editor2===void 0?void 0:_properties$editor2.starterKitOptions)||{})]);var editor=(0,optionals/* useEditor */.hG)(_objectSpread({extensions:extensions,editable:!properties.disabled,content:String(value),onBlur:function onBlur(editorEvent){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.blur(editorEvent);if(properties.onBlur)properties.onBlur(editorEvent)},onFocus:function onFocus(editorEvent){inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.focus(editorEvent);if(properties.onFocus)properties.onFocus(editorEvent)},onUpdate:function onUpdate(editorEvent){var html=editorEvent.editor.getHTML();inputEventMapperReference===null||inputEventMapperReference===void 0||inputEventMapperReference.eventMapper.input(html==="<p></p>"?"":html,editorEvent);if(properties.onChange)properties.onChange(html,{contentTree:editorEvent.editor.getJSON()})}},((_properties$editor3=properties.editor)===null||_properties$editor3===void 0?void 0:_properties$editor3.options)||{}));var htmlContent=editor.getHTML();var clientHeight=inputEventMapperReference===null||inputEventMapperReference===void 0||(_inputEventMapperRefe=inputEventMapperReference.input)===null||_inputEventMapperRefe===void 0||(_inputEventMapperRefe=_inputEventMapperRefe.input)===null||_inputEventMapperRefe===void 0?void 0:_inputEventMapperRefe.clientHeight;(0,external_react_.useEffect)(function(){if(editorViewReference&&clientHeight)editorViewReference.style.height=String(clientHeight+VIEW_CONTENT_OFFSET_IN_PX)+"px"},[editorViewReference,clientHeight]);return/*#__PURE__*/(0,jsx_runtime_.jsx)(InputEventMapperWrapper/* default */.A,_objectSpread(_objectSpread({},properties),{},{ref:setInputEventMapperReference,barContentSlot:/*#__PURE__*/(0,jsx_runtime_.jsx)(MenuBar,{editor:editor}),value:htmlContent==="<p></p>"?"":htmlContent,classNamePrefix:CSS_CLASS_NAMES.richtextEditor,onLabelClick:(0,external_react_generic_tools_.useMemorizedValue)(function(){editor.chain().focus().run()},editor),children:/*#__PURE__*/(0,jsx_runtime_.jsx)(optionals/* EditorContent */.$Z,{className:"".concat(CSS_CLASS_NAMES.richtextEditorView," mdc-text-field__input"),editor:editor,innerRef:setEditorViewReference})}))});/* harmony default export */ var Tiptap = (Tiptap_Index);

/***/ })

};

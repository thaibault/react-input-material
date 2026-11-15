if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_dom_c0b5c364__ from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ({

/***/ 120:
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

/***/ 8:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.createContext; }, ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__["default"]; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useLayoutEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useLayoutEffect; }, ["useMemo"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useMemo; } });

/***/ }),

/***/ 115:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),

/***/ 9:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; } });

/***/ }),

/***/ 61:
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

/***/ 117:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports Theme, contrast, getAutoColorsForTheme, getRgb, hexToRgb, isLight, luminance, nameToHex */
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
/* harmony export */   "NP", 0, /* binding */ H
/* harmony export */ ]);


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
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
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
 */var WrapThemeProvider=function WrapThemeProvider(_ref){var children=_ref.children,configuration=_ref.configuration,wrap=_ref.wrap;return configuration?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_rmwc_theme__WEBPACK_IMPORTED_MODULE_0__/* .ThemeProvider */ .NP,{options:configuration,wrap:wrap!==false,children:children}):children};/* harmony default export */ __webpack_exports__.A = (WrapThemeProvider);
var __webpack_exports__default = __webpack_exports__.A;
export { WrapThemeProvider, __webpack_exports__default as default };

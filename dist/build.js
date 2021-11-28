/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\nfunction main() {\n    _settings__WEBPACK_IMPORTED_MODULE_0__.setting.init();\n    const problemFrame = document.getElementById('problem');\n    const fieldNum1 = document.getElementById('num-1');\n    const fieldNum2 = document.getElementById('num-2');\n    const fieldOperator = document.getElementById('operator');\n    const fieldResult = document.getElementById('result');\n    \n    const buttonEvaluate = document.getElementById('evaluate');\n    const buttonRandom = document.getElementById('random');\n\n    buttonRandom.onclick = function() {\n        fieldNum1.textContent = random(_settings__WEBPACK_IMPORTED_MODULE_0__.setting.NUM1_MIN, _settings__WEBPACK_IMPORTED_MODULE_0__.setting.NUM1_MAX);\n        fieldNum2.textContent = random(_settings__WEBPACK_IMPORTED_MODULE_0__.setting.NUM2_MIN, _settings__WEBPACK_IMPORTED_MODULE_0__.setting.NUM2_MAX);\n        \n        problemFrame.setAttribute('class', '');\n        fieldResult.value = '';\n    };\n    buttonEvaluate.onclick = function() {\n        let result = 0;\n        switch(fieldOperator.textContent) {\n            case '+':\n                result = Number(fieldNum1.textContent) + Number(fieldNum2.textContent);\n                break;\n            case '-':\n                result = Number(fieldNum1.textContent) - Number(fieldNum2.textContent);\n                break;\n            case '×':\n                result = Number(fieldNum1.textContent) * Number(fieldNum2.textContent);\n                break;\n            case ':':\n                result = Number(fieldNum1.textContent) / Number(fieldNum2.textContent);\n                break;\n        }\n\n        if (result === Number(fieldResult.value)) {\n            problemFrame.setAttribute('class', 'correct');\n        } else {\n            problemFrame.setAttribute('class', 'wrong');\n        }\n    };\n}\n\nfunction random(min, max) {\n    const value = min + (Math.random() * (max - min));\n    return Math.round(value);\n}\n\nwindow.onload = main;\n\n\n//# sourceURL=webpack://qmath/./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setting\": () => (/* binding */ setting)\n/* harmony export */ });\nconst setting = {\n    init: function() {\n        this.isOpen = false;\n        this._triggerer = document.getElementById('setting-icon');\n        this._settings = document.getElementById('settings')\n        this._operation = document.getElementById('settings-operation');\n        this._num1Range = {\n            min: document.getElementById('num1-min'),\n            max: document.getElementById('num1-max')\n        };\n        this._num2Range = {\n            min: document.getElementById('num2-min'),\n            max: document.getElementById('num2-max')\n        };\n        this._buttonSave = document.getElementById('save-settings');\n\n\n        this._buttonSave.onclick = () => {\n            this.update();\n            this._settings.style.display = \"none\";\n        };\n        this._triggerer.onclick = () => {\n            if (this.isOpen) {\n                this.isOpen = false;\n                this._settings.style.display = \"none\";\n            } else {\n                this.isOpen = true;\n                this._settings.style.display = \"initial\";\n            }\n        }\n        this.update();\n    },\n    update: function() {\n        this.OPERATION = this._operation.value;\n        this.NUM1_MIN = Number(this._num1Range.min.value);\n        this.NUM1_MAX = Number(this._num1Range.max.value);\n        this.NUM2_MIN = Number(this._num2Range.min.value);\n        this.NUM2_MAX = Number(this._num2Range.max.value);\n\n        document.getElementById('operator').textContent = this.OPERATION;\n    }\n}\n\n\n//# sourceURL=webpack://qmath/./src/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
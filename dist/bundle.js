/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MainContainer = __webpack_require__(/*! ./src/components/MainContainer/MainContainer */ "./src/components/MainContainer/MainContainer.js");

var _MainContainer2 = _interopRequireDefault(_MainContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainContainer = new _MainContainer2.default();

function init() {
  mainContainer.render(document.body);
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/GraphContainer/GraphContainer.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/GraphContainer/GraphContainer.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".GraphContainer {\n  background-color: lightcyan;\n  -webkit-box-flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center; }\n  .GraphContainer .container {\n    height: 100%;\n    width: 100%;\n    transform-origin: left top 0px;\n    -webkit-transform-origin: left top; }\n    .GraphContainer .container .content {\n      background-color: white;\n      width: 2800px;\n      height: 3000px; }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/GraphContainer/GraphContainer.scss"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,0BAA0B,EAAE;EAC5B;IACE,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,mCAAmC,EAAE;IACrC;MACE,wBAAwB;MACxB,cAAc;MACd,eAAe,EAAE","file":"GraphContainer.scss","sourcesContent":[".GraphContainer {\n  background-color: lightcyan;\n  -webkit-box-flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center; }\n  .GraphContainer .container {\n    height: 100%;\n    width: 100%;\n    transform-origin: left top 0px;\n    -webkit-transform-origin: left top; }\n    .GraphContainer .container .content {\n      background-color: white;\n      width: 2800px;\n      height: 3000px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/MainContainer/MainContainer.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/MainContainer/MainContainer.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".MainContainer {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box; }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/MainContainer/MainContainer.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB,EAAE","file":"MainContainer.scss","sourcesContent":[".MainContainer {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/SwitchButton/SwitchButton.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/SwitchButton/SwitchButton.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".SwitchButton {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-align: center;\n  padding: 10px; }\n  .SwitchButton .switch {\n    position: absolute;\n    margin-left: -9999px;\n    visibility: hidden; }\n  .SwitchButton .switch + label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    user-select: none; }\n  .SwitchButton .switch--shadow + label {\n    padding: 2px;\n    width: 60px;\n    height: 25px;\n    background-color: #dddddd;\n    border-radius: 25px; }\n  .SwitchButton .switch--shadow + label:before,\n  .SwitchButton .switch--shadow + label:after {\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    content: \"\"; }\n  .SwitchButton .switch--shadow + label:before {\n    right: 1px;\n    background-color: #f1f1f1;\n    border-radius: 25px;\n    transition: all 0.4s; }\n  .SwitchButton .switch--shadow + label:after {\n    width: 27px;\n    background-color: #fff;\n    border-radius: 100%;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    transition: all 0.4s; }\n  .SwitchButton .switch--shadow:disabled + label:after {\n    background-color: #f1f1f1; }\n  .SwitchButton .switch--shadow:checked + label:before {\n    background-color: #8ce196; }\n  .SwitchButton .switch--shadow:checked + label:after {\n    transform: translateX(35px); }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/SwitchButton/SwitchButton.scss"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,6BAA6B;EAC7B,0BAA0B;EAC1B,cAAc,EAAE;EAChB;IACE,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB,EAAE;EACvB;IACE,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,kBAAkB,EAAE;EACtB;IACE,aAAa;IACb,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB,EAAE;EACxB;;IAEE,eAAe;IACf,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY,EAAE;EAChB;IACE,WAAW;IACX,0BAA0B;IAC1B,oBAAoB;IACpB,qBAAqB,EAAE;EACzB;IACE,YAAY;IACZ,uBAAuB;IACvB,oBAAoB;IACpB,yCAAyC;IACzC,qBAAqB,EAAE;EACzB;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,4BAA4B,EAAE","file":"SwitchButton.scss","sourcesContent":[".SwitchButton {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-align: center;\n  padding: 10px; }\n  .SwitchButton .switch {\n    position: absolute;\n    margin-left: -9999px;\n    visibility: hidden; }\n  .SwitchButton .switch + label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    user-select: none; }\n  .SwitchButton .switch--shadow + label {\n    padding: 2px;\n    width: 60px;\n    height: 25px;\n    background-color: #dddddd;\n    border-radius: 25px; }\n  .SwitchButton .switch--shadow + label:before,\n  .SwitchButton .switch--shadow + label:after {\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    content: \"\"; }\n  .SwitchButton .switch--shadow + label:before {\n    right: 1px;\n    background-color: #f1f1f1;\n    border-radius: 25px;\n    transition: all 0.4s; }\n  .SwitchButton .switch--shadow + label:after {\n    width: 27px;\n    background-color: #fff;\n    border-radius: 100%;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    transition: all 0.4s; }\n  .SwitchButton .switch--shadow:disabled + label:after {\n    background-color: #f1f1f1; }\n  .SwitchButton .switch--shadow:checked + label:before {\n    background-color: #8ce196; }\n  .SwitchButton .switch--shadow:checked + label:after {\n    transform: translateX(35px); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/ToolPanel/ToolPanel.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/ToolPanel/ToolPanel.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".ToolPanel {\n  background-color: lightblue;\n  width: 300px;\n  height: 100%;\n  border-left: 1px solid black; }\n  .ToolPanel .container-components {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    background-color: lightcyan;\n    margin-top: 20px; }\n    .ToolPanel .container-components .container-vertice-sample {\n      text-align: center;\n      padding: 10px; }\n    .ToolPanel .container-components .container-vertice-sample p {\n      margin: 10px 0px 0px 0px; }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/ToolPanel/ToolPanel.scss"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,aAAa;EACb,aAAa;EACb,6BAA6B,EAAE;EAC/B;IACE,cAAc;IACd,gBAAgB;IAChB,8BAA8B;IAC9B,4BAA4B;IAC5B,iBAAiB,EAAE;IACnB;MACE,mBAAmB;MACnB,cAAc,EAAE;IAClB;MACE,yBAAyB,EAAE","file":"ToolPanel.scss","sourcesContent":[".ToolPanel {\n  background-color: lightblue;\n  width: 300px;\n  height: 100%;\n  border-left: 1px solid black; }\n  .ToolPanel .container-components {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    background-color: lightcyan;\n    margin-top: 20px; }\n    .ToolPanel .container-components .container-vertice-sample {\n      text-align: center;\n      padding: 10px; }\n    .ToolPanel .container-components .container-vertice-sample p {\n      margin: 10px 0px 0px 0px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Vertice/Vertice.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Vertice/Vertice.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.Vertice {\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  background-color: #00abd7;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute; }\n  .Vertice input {\n    display: -webkit-box;\n    text-align: center;\n    width: 80%;\n    border: none;\n    background: transparent;\n    outline-style: none;\n    text-overflow: ellipsis; }\n    .Vertice input:focus {\n      background: white; }\n  .Vertice.Vertice-Sample {\n    position: initial; }\n  .Vertice.drop-active {\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n    transition: box-shadow .4s; }\n  .Vertice.isFinal:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #00abd7;\n    border-radius: 50%;\n    padding: 2px;\n    margin-left: -4px;\n    margin-top: -4px;\n    position: absolute; }\n  .Vertice.isFinal.drop-active:before {\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n    transition: box-shadow .4s; }\n  .Vertice.isInitial:after {\n    content: '\\25B2';\n    display: block;\n    margin-left: -100px;\n    margin-top: -8px;\n    font-size: 60px;\n    color: #00abd7;\n    position: absolute;\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  .Vertice.isInitial.drop-active:after {\n    text-shadow: 0 0px 20px rgba(0, 0, 0, 0.3);\n    transition: text-shadow .4s; }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/Vertice/Vertice.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE,qBAAqB;EACrB,yBAAyB;EACzB,0BAA0B;EAC1B,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAE;EACrB;IACE,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,wBAAwB;IACxB,oBAAoB;IACpB,wBAAwB,EAAE;IAC1B;MACE,kBAAkB,EAAE;EACxB;IACE,kBAAkB,EAAE;EACtB;IACE,4EAA4E;IAC5E,2BAA2B,EAAE;EAC/B;IACE,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB,EAAE;EACvB;IACE,4EAA4E;IAC5E,2BAA2B,EAAE;EAC/B;IACE,iBAAa;IACb,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,iCAAiC;IACjC,8BAA8B;IAC9B,4BAA4B;IAC5B,6BAA6B;IAC7B,yBAAyB,EAAE;EAC7B;IACE,2CAA2C;IAC3C,4BAA4B,EAAE","file":"Vertice.scss","sourcesContent":["@charset \"UTF-8\";\n.Vertice {\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  background-color: #00abd7;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute; }\n  .Vertice input {\n    display: -webkit-box;\n    text-align: center;\n    width: 80%;\n    border: none;\n    background: transparent;\n    outline-style: none;\n    text-overflow: ellipsis; }\n    .Vertice input:focus {\n      background: white; }\n  .Vertice.Vertice-Sample {\n    position: initial; }\n  .Vertice.drop-active {\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n    transition: box-shadow .4s; }\n  .Vertice.isFinal:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #00abd7;\n    border-radius: 50%;\n    padding: 2px;\n    margin-left: -4px;\n    margin-top: -4px;\n    position: absolute; }\n  .Vertice.isFinal.drop-active:before {\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n    transition: box-shadow .4s; }\n  .Vertice.isInitial:after {\n    content: '▲';\n    display: block;\n    margin-left: -100px;\n    margin-top: -8px;\n    font-size: 60px;\n    color: #00abd7;\n    position: absolute;\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  .Vertice.isInitial.drop-active:after {\n    text-shadow: 0 0px 20px rgba(0, 0, 0, 0.3);\n    transition: text-shadow .4s; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/VerticePanel/VerticePanel.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/VerticePanel/VerticePanel.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".VerticePanel {\n  background-color: lightblue;\n  width: 100px;\n  height: 100%;\n  border-right: 1px solid black; }\n  .VerticePanel.disable {\n    background-color: #f1f1f1; }\n  .VerticePanel.hidden {\n    display: none; }\n  .VerticePanel .data-container {\n    margin-top: 20px;\n    background-color: lightcyan; }\n    .VerticePanel .data-container .sub-container {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-box-align: center;\n      padding: 5px; }\n      .VerticePanel .data-container .sub-container input {\n        width: 100%;\n        text-overflow: ellipsis; }\n", "", {"version":3,"sources":["/home/igor/Documentos/projetos/theory-of-graphs/src/components/VerticePanel/VerticePanel.scss"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,aAAa;EACb,aAAa;EACb,8BAA8B,EAAE;EAChC;IACE,0BAA0B,EAAE;EAC9B;IACE,cAAc,EAAE;EAClB;IACE,iBAAiB;IACjB,4BAA4B,EAAE;IAC9B;MACE,qBAAqB;MACrB,6BAA6B;MAC7B,0BAA0B;MAC1B,aAAa,EAAE;MACf;QACE,YAAY;QACZ,wBAAwB,EAAE","file":"VerticePanel.scss","sourcesContent":[".VerticePanel {\n  background-color: lightblue;\n  width: 100px;\n  height: 100%;\n  border-right: 1px solid black; }\n  .VerticePanel.disable {\n    background-color: #f1f1f1; }\n  .VerticePanel.hidden {\n    display: none; }\n  .VerticePanel .data-container {\n    margin-top: 20px;\n    background-color: lightcyan; }\n    .VerticePanel .data-container .sub-container {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-box-align: center;\n      padding: 5px; }\n      .VerticePanel .data-container .sub-container input {\n        width: 100%;\n        text-overflow: ellipsis; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/interactjs/dist/interact.js":
/*!**************************************************!*\
  !*** ./node_modules/interactjs/dist/interact.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**
 * interact.js v1.3.4
 *
 * Copyright (c) 2012-2018 Taye Adeyemi <dev@taye.me>
 * Released under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
 * In a (windowless) server environment this file exports a factory function
 * that takes the window to use.
 *
 *     var interact = require('interact.js')(windowObject);
 *
 * See https://github.com/taye/interact.js/issues/187
 */
if (typeof window === 'undefined') {
  module.exports = function (window) {
    require('./src/utils/window').init(window);

    return require('./src/index');
  };
} else {
  module.exports = require('./src/index');
}

},{"./src/index":19,"./src/utils/window":52}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('./utils/extend.js');

function fireUntilImmediateStopped(event, listeners) {
  for (var _i = 0; _i < listeners.length; _i++) {
    var _ref;

    _ref = listeners[_i];
    var listener = _ref;

    if (event.immediatePropagationStopped) {
      break;
    }

    listener(event);
  }
}

var Eventable = function () {
  function Eventable(options) {
    _classCallCheck(this, Eventable);

    this.options = extend({}, options || {});
  }

  Eventable.prototype.fire = function fire(event) {
    var listeners = void 0;
    var onEvent = 'on' + event.type;
    var global = this.global;

    // Interactable#on() listeners
    if (listeners = this[event.type]) {
      fireUntilImmediateStopped(event, listeners);
    }

    // interactable.onevent listener
    if (this[onEvent]) {
      this[onEvent](event);
    }

    // interact.on() listeners
    if (!event.propagationStopped && global && (listeners = global[event.type])) {
      fireUntilImmediateStopped(event, listeners);
    }
  };

  Eventable.prototype.on = function on(eventType, listener) {
    // if this type of event was never bound
    if (this[eventType]) {
      this[eventType].push(listener);
    } else {
      this[eventType] = [listener];
    }
  };

  Eventable.prototype.off = function off(eventType, listener) {
    // if it is an action event type
    var eventList = this[eventType];
    var index = eventList ? eventList.indexOf(listener) : -1;

    if (index !== -1) {
      eventList.splice(index, 1);
    }

    if (eventList && eventList.length === 0 || !listener) {
      this[eventType] = undefined;
    }
  };

  return Eventable;
}();

module.exports = Eventable;

},{"./utils/extend.js":41}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('./utils/extend');
var getOriginXY = require('./utils/getOriginXY');
var defaults = require('./defaultOptions');
var signals = require('./utils/Signals').new();

var InteractEvent = function () {
  /** */
  function InteractEvent(interaction, event, action, phase, element, related) {
    var preEnd = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    _classCallCheck(this, InteractEvent);

    var target = interaction.target;
    var deltaSource = (target && target.options || defaults).deltaSource;
    var origin = getOriginXY(target, element, action);
    var starting = phase === 'start';
    var ending = phase === 'end';
    var coords = starting ? interaction.startCoords : interaction.curCoords;
    var prevEvent = interaction.prevEvent;

    element = element || interaction.element;

    var page = extend({}, coords.page);
    var client = extend({}, coords.client);

    page.x -= origin.x;
    page.y -= origin.y;

    client.x -= origin.x;
    client.y -= origin.y;

    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.button = event.button;
    this.buttons = event.buttons;
    this.target = element;
    this.currentTarget = element;
    this.relatedTarget = related || null;
    this.preEnd = preEnd;
    this.type = action + (phase || '');
    this.interaction = interaction;
    this.interactable = target;

    this.t0 = starting ? interaction.downTimes[interaction.downTimes.length - 1] : prevEvent.t0;

    var signalArg = {
      interaction: interaction,
      event: event,
      action: action,
      phase: phase,
      element: element,
      related: related,
      page: page,
      client: client,
      coords: coords,
      starting: starting,
      ending: ending,
      deltaSource: deltaSource,
      iEvent: this
    };

    signals.fire('set-xy', signalArg);

    if (ending) {
      // use previous coords when ending
      this.pageX = prevEvent.pageX;
      this.pageY = prevEvent.pageY;
      this.clientX = prevEvent.clientX;
      this.clientY = prevEvent.clientY;
    } else {
      this.pageX = page.x;
      this.pageY = page.y;
      this.clientX = client.x;
      this.clientY = client.y;
    }

    this.x0 = interaction.startCoords.page.x - origin.x;
    this.y0 = interaction.startCoords.page.y - origin.y;
    this.clientX0 = interaction.startCoords.client.x - origin.x;
    this.clientY0 = interaction.startCoords.client.y - origin.y;

    signals.fire('set-delta', signalArg);

    this.timeStamp = coords.timeStamp;
    this.dt = interaction.pointerDelta.timeStamp;
    this.duration = this.timeStamp - this.t0;

    // speed and velocity in pixels per second
    this.speed = interaction.pointerDelta[deltaSource].speed;
    this.velocityX = interaction.pointerDelta[deltaSource].vx;
    this.velocityY = interaction.pointerDelta[deltaSource].vy;

    this.swipe = ending || phase === 'inertiastart' ? this.getSwipe() : null;

    signals.fire('new', signalArg);
  }

  InteractEvent.prototype.getSwipe = function getSwipe() {
    var interaction = this.interaction;

    if (interaction.prevEvent.speed < 600 || this.timeStamp - interaction.prevEvent.timeStamp > 150) {
      return null;
    }

    var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI;
    var overlap = 22.5;

    if (angle < 0) {
      angle += 360;
    }

    var left = 135 - overlap <= angle && angle < 225 + overlap;
    var up = 225 - overlap <= angle && angle < 315 + overlap;

    var right = !left && (315 - overlap <= angle || angle < 45 + overlap);
    var down = !up && 45 - overlap <= angle && angle < 135 + overlap;

    return {
      up: up,
      down: down,
      left: left,
      right: right,
      angle: angle,
      speed: interaction.prevEvent.speed,
      velocity: {
        x: interaction.prevEvent.velocityX,
        y: interaction.prevEvent.velocityY
      }
    };
  };

  InteractEvent.prototype.preventDefault = function preventDefault() {};

  /** */


  InteractEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };

  /** */


  InteractEvent.prototype.stopPropagation = function stopPropagation() {
    this.propagationStopped = true;
  };

  return InteractEvent;
}();

signals.on('set-delta', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction,
      starting = _ref.starting,
      deltaSource = _ref.deltaSource;

  var prevEvent = starting ? iEvent : interaction.prevEvent;

  if (deltaSource === 'client') {
    iEvent.dx = iEvent.clientX - prevEvent.clientX;
    iEvent.dy = iEvent.clientY - prevEvent.clientY;
  } else {
    iEvent.dx = iEvent.pageX - prevEvent.pageX;
    iEvent.dy = iEvent.pageY - prevEvent.pageY;
  }
});

InteractEvent.signals = signals;

module.exports = InteractEvent;

},{"./defaultOptions":18,"./utils/Signals":34,"./utils/extend":41,"./utils/getOriginXY":42}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clone = require('./utils/clone');
var is = require('./utils/is');
var events = require('./utils/events');
var extend = require('./utils/extend');
var actions = require('./actions/base');
var scope = require('./scope');
var Eventable = require('./Eventable');
var defaults = require('./defaultOptions');
var signals = require('./utils/Signals').new();

var _require = require('./utils/domUtils'),
    getElementRect = _require.getElementRect,
    nodeContains = _require.nodeContains,
    trySelector = _require.trySelector,
    matchesSelector = _require.matchesSelector;

var _require2 = require('./utils/window'),
    getWindow = _require2.getWindow;

var _require3 = require('./utils/arr'),
    contains = _require3.contains;

var _require4 = require('./utils/browser'),
    wheelEvent = _require4.wheelEvent;

// all set interactables


scope.interactables = [];

var Interactable = function () {
  /** */
  function Interactable(target, options) {
    _classCallCheck(this, Interactable);

    options = options || {};

    this.target = target;
    this.events = new Eventable();
    this._context = options.context || scope.document;
    this._win = getWindow(trySelector(target) ? this._context : target);
    this._doc = this._win.document;

    signals.fire('new', {
      target: target,
      options: options,
      interactable: this,
      win: this._win
    });

    scope.addDocument(this._doc, this._win);

    scope.interactables.push(this);

    this.set(options);
  }

  Interactable.prototype.setOnEvents = function setOnEvents(action, phases) {
    var onAction = 'on' + action;

    if (is.function(phases.onstart)) {
      this.events[onAction + 'start'] = phases.onstart;
    }
    if (is.function(phases.onmove)) {
      this.events[onAction + 'move'] = phases.onmove;
    }
    if (is.function(phases.onend)) {
      this.events[onAction + 'end'] = phases.onend;
    }
    if (is.function(phases.oninertiastart)) {
      this.events[onAction + 'inertiastart'] = phases.oninertiastart;
    }

    return this;
  };

  Interactable.prototype.setPerAction = function setPerAction(action, options) {
    // for all the default per-action options
    for (var option in options) {
      // if this option exists for this action
      if (option in defaults[action]) {
        // if the option in the options arg is an object value
        if (is.object(options[option])) {
          // duplicate the object and merge
          this.options[action][option] = clone(this.options[action][option] || {});
          extend(this.options[action][option], options[option]);

          if (is.object(defaults.perAction[option]) && 'enabled' in defaults.perAction[option]) {
            this.options[action][option].enabled = options[option].enabled === false ? false : true;
          }
        } else if (is.bool(options[option]) && is.object(defaults.perAction[option])) {
          this.options[action][option].enabled = options[option];
        } else if (options[option] !== undefined) {
          // or if it's not undefined, do a plain assignment
          this.options[action][option] = options[option];
        }
      }
    }
  };

  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {object} The object's bounding rectangle.
   */


  Interactable.prototype.getRect = function getRect(element) {
    element = element || this.target;

    if (is.string(this.target) && !is.element(element)) {
      element = this._context.querySelector(this.target);
    }

    return getElementRect(element);
  };

  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */


  Interactable.prototype.rectChecker = function rectChecker(checker) {
    if (is.function(checker)) {
      this.getRect = checker;

      return this;
    }

    if (checker === null) {
      delete this.options.getRect;

      return this;
    }

    return this.getRect;
  };

  Interactable.prototype._backCompatOption = function _backCompatOption(optionName, newValue) {
    if (trySelector(newValue) || is.object(newValue)) {
      this.options[optionName] = newValue;

      for (var _i = 0; _i < actions.names.length; _i++) {
        var _ref;

        _ref = actions.names[_i];
        var action = _ref;

        this.options[action][optionName] = newValue;
      }

      return this;
    }

    return this.options[optionName];
  };

  /**
   * Gets or sets the origin of the Interactable's element.  The x and y
   * of the origin will be subtracted from action event coordinates.
   *
   * @param {Element | object | string} [origin] An HTML or SVG Element whose
   * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
   * or any CSS selector
   *
   * @return {object} The current origin or this Interactable
   */


  Interactable.prototype.origin = function origin(newValue) {
    return this._backCompatOption('origin', newValue);
  };

  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */


  Interactable.prototype.deltaSource = function deltaSource(newValue) {
    if (newValue === 'page' || newValue === 'client') {
      this.options.deltaSource = newValue;

      return this;
    }

    return this.options.deltaSource;
  };

  /**
   * Gets the selector context Node of the Interactable. The default is
   * `window.document`.
   *
   * @return {Node} The context Node of this Interactable
   */


  Interactable.prototype.context = function context() {
    return this._context;
  };

  Interactable.prototype.inContext = function inContext(element) {
    return this._context === element.ownerDocument || nodeContains(this._context, element);
  };

  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */


  Interactable.prototype.fire = function fire(iEvent) {
    this.events.fire(iEvent);

    return this;
  };

  Interactable.prototype._onOffMultiple = function _onOffMultiple(method, eventType, listener, options) {
    if (is.string(eventType) && eventType.search(' ') !== -1) {
      eventType = eventType.trim().split(/ +/);
    }

    if (is.array(eventType)) {
      for (var _i2 = 0; _i2 < eventType.length; _i2++) {
        var _ref2;

        _ref2 = eventType[_i2];
        var type = _ref2;

        this[method](type, listener, options);
      }

      return true;
    }

    if (is.object(eventType)) {
      for (var prop in eventType) {
        this[method](prop, eventType[prop], listener);
      }

      return true;
    }
  };

  /**
   * Binds a listener for an InteractEvent, pointerEvent or DOM event.
   *
   * @param {string | array | object} eventType  The types of events to listen
   * for
   * @param {function} listener   The function event (s)
   * @param {object | boolean} [options]    options object or useCapture flag
   * for addEventListener
   * @return {object} This Interactable
   */


  Interactable.prototype.on = function on(eventType, listener, options) {
    if (this._onOffMultiple('on', eventType, listener, options)) {
      return this;
    }

    if (eventType === 'wheel') {
      eventType = wheelEvent;
    }

    if (contains(Interactable.eventTypes, eventType)) {
      this.events.on(eventType, listener);
    }
    // delegated event for selector
    else if (is.string(this.target)) {
        events.addDelegate(this.target, this._context, eventType, listener, options);
      } else {
        events.add(this.target, eventType, listener, options);
      }

    return this;
  };

  /**
   * Removes an InteractEvent, pointerEvent or DOM event listener
   *
   * @param {string | array | object} eventType The types of events that were
   * listened for
   * @param {function} listener The listener function to be removed
   * @param {object | boolean} [options] options object or useCapture flag for
   * removeEventListener
   * @return {object} This Interactable
   */


  Interactable.prototype.off = function off(eventType, listener, options) {
    if (this._onOffMultiple('off', eventType, listener, options)) {
      return this;
    }

    if (eventType === 'wheel') {
      eventType = wheelEvent;
    }

    // if it is an action event type
    if (contains(Interactable.eventTypes, eventType)) {
      this.events.off(eventType, listener);
    }
    // delegated event
    else if (is.string(this.target)) {
        events.removeDelegate(this.target, this._context, eventType, listener, options);
      }
      // remove listener from this Interatable's element
      else {
          events.remove(this.target, eventType, listener, options);
        }

    return this;
  };

  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */


  Interactable.prototype.set = function set(options) {
    if (!is.object(options)) {
      options = {};
    }

    this.options = clone(defaults.base);

    var perActions = clone(defaults.perAction);

    for (var actionName in actions.methodDict) {
      var methodName = actions.methodDict[actionName];

      this.options[actionName] = clone(defaults[actionName]);

      this.setPerAction(actionName, perActions);

      this[methodName](options[actionName]);
    }

    for (var _i3 = 0; _i3 < Interactable.settingsMethods.length; _i3++) {
      var _ref3;

      _ref3 = Interactable.settingsMethods[_i3];
      var setting = _ref3;

      this.options[setting] = defaults.base[setting];

      if (setting in options) {
        this[setting](options[setting]);
      }
    }

    signals.fire('set', {
      options: options,
      interactable: this
    });

    return this;
  };

  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   *
   * @return {interact}
   */


  Interactable.prototype.unset = function unset() {
    events.remove(this.target, 'all');

    if (is.string(this.target)) {
      // remove delegated events
      for (var type in events.delegatedEvents) {
        var delegated = events.delegatedEvents[type];

        if (delegated.selectors[0] === this.target && delegated.contexts[0] === this._context) {

          delegated.selectors.splice(0, 1);
          delegated.contexts.splice(0, 1);
          delegated.listeners.splice(0, 1);

          // remove the arrays if they are empty
          if (!delegated.selectors.length) {
            delegated[type] = null;
          }
        }

        events.remove(this._context, type, events.delegateListener);
        events.remove(this._context, type, events.delegateUseCapture, true);
      }
    } else {
      events.remove(this, 'all');
    }

    signals.fire('unset', { interactable: this });

    scope.interactables.splice(scope.interactables.indexOf(this), 1);

    // Stop related interactions when an Interactable is unset
    for (var _i4 = 0; _i4 < (scope.interactions || []).length; _i4++) {
      var _ref4;

      _ref4 = (scope.interactions || [])[_i4];
      var interaction = _ref4;

      if (interaction.target === this && interaction.interacting() && !interaction._ending) {
        interaction.stop();
      }
    }

    return scope.interact;
  };

  return Interactable;
}();

scope.interactables.indexOfElement = function indexOfElement(target, context) {
  context = context || scope.document;

  for (var i = 0; i < this.length; i++) {
    var interactable = this[i];

    if (interactable.target === target && interactable._context === context) {
      return i;
    }
  }
  return -1;
};

scope.interactables.get = function interactableGet(element, options, dontCheckInContext) {
  var ret = this[this.indexOfElement(element, options && options.context)];

  return ret && (is.string(element) || dontCheckInContext || ret.inContext(element)) ? ret : null;
};

scope.interactables.forEachMatch = function (element, callback) {
  for (var _i5 = 0; _i5 < this.length; _i5++) {
    var _ref5;

    _ref5 = this[_i5];
    var interactable = _ref5;

    var ret = void 0;

    if ((is.string(interactable.target)
    // target is a selector and the element matches
    ? is.element(element) && matchesSelector(element, interactable.target) :
    // target is the element
    element === interactable.target) &&
    // the element is in context
    interactable.inContext(element)) {
      ret = callback(interactable);
    }

    if (ret !== undefined) {
      return ret;
    }
  }
};

// all interact.js eventTypes
Interactable.eventTypes = scope.eventTypes = [];

Interactable.signals = signals;

Interactable.settingsMethods = ['deltaSource', 'origin', 'preventDefault', 'rectChecker'];

module.exports = Interactable;

},{"./Eventable":2,"./actions/base":6,"./defaultOptions":18,"./scope":33,"./utils/Signals":34,"./utils/arr":35,"./utils/browser":36,"./utils/clone":37,"./utils/domUtils":39,"./utils/events":40,"./utils/extend":41,"./utils/is":46,"./utils/window":52}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var scope = require('./scope');
var utils = require('./utils');
var events = require('./utils/events');
var browser = require('./utils/browser');
var domObjects = require('./utils/domObjects');
var finder = require('./utils/interactionFinder');
var signals = require('./utils/Signals').new();

var listeners = {};
var methodNames = ['pointerDown', 'pointerMove', 'pointerUp', 'updatePointer', 'removePointer'];

// for ignoring browser's simulated mouse events
var prevTouchTime = 0;

// all active and idle interactions
scope.interactions = [];

var Interaction = function () {
  /** */
  function Interaction(_ref) {
    var pointerType = _ref.pointerType;

    _classCallCheck(this, Interaction);

    this.target = null; // current interactable being interacted with
    this.element = null; // the target element of the interactable

    this.prepared = { // action that's ready to be fired on next move event
      name: null,
      axis: null,
      edges: null
    };

    // keep track of added pointers
    this.pointers = [];
    this.pointerIds = [];
    this.downTargets = [];
    this.downTimes = [];

    // Previous native pointer move event coordinates
    this.prevCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };
    // current native pointer move event coordinates
    this.curCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };

    // Starting InteractEvent pointer coordinates
    this.startCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };

    // Change in coordinates and time of the pointer
    this.pointerDelta = {
      page: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      client: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      timeStamp: 0
    };

    this.downEvent = null; // pointerdown/mousedown/touchstart event
    this.downPointer = {};

    this._eventTarget = null;
    this._curEventTarget = null;

    this.prevEvent = null; // previous action event

    this.pointerIsDown = false;
    this.pointerWasMoved = false;
    this._interacting = false;
    this._ending = false;

    this.pointerType = pointerType;

    signals.fire('new', this);

    scope.interactions.push(this);
  }

  Interaction.prototype.pointerDown = function pointerDown(pointer, event, eventTarget) {
    var pointerIndex = this.updatePointer(pointer, event, true);

    signals.fire('down', {
      pointer: pointer,
      event: event,
      eventTarget: eventTarget,
      pointerIndex: pointerIndex,
      interaction: this
    });
  };

  /**
   * ```js
   * interact(target)
   *   .draggable({
   *     // disable the default drag start by down->move
   *     manualStart: true
   *   })
   *   // start dragging after the user holds the pointer down
   *   .on('hold', function (event) {
   *     var interaction = event.interaction;
   *
   *     if (!interaction.interacting()) {
   *       interaction.start({ name: 'drag' },
   *                         event.interactable,
   *                         event.currentTarget);
   *     }
   * });
   * ```
   *
   * Start an action with the given Interactable and Element as tartgets. The
   * action must be enabled for the target Interactable and an appropriate
   * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
   *
   * Use it with `interactable.<action>able({ manualStart: false })` to always
   * [start actions manually](https://github.com/taye/interact.js/issues/114)
   *
   * @param {object} action   The action to be performed - drag, resize, etc.
   * @param {Interactable} target  The Interactable to target
   * @param {Element} element The DOM Element to target
   * @return {object} interact
   */


  Interaction.prototype.start = function start(action, target, element) {
    if (this.interacting() || !this.pointerIsDown || this.pointerIds.length < (action.name === 'gesture' ? 2 : 1)) {
      return;
    }

    // if this interaction had been removed after stopping
    // add it back
    if (scope.interactions.indexOf(this) === -1) {
      scope.interactions.push(this);
    }

    utils.copyAction(this.prepared, action);
    this.target = target;
    this.element = element;

    signals.fire('action-start', {
      interaction: this,
      event: this.downEvent
    });
  };

  Interaction.prototype.pointerMove = function pointerMove(pointer, event, eventTarget) {
    if (!this.simulation) {
      this.updatePointer(pointer);
      utils.setCoords(this.curCoords, this.pointers);
    }

    var duplicateMove = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y;

    var dx = void 0;
    var dy = void 0;

    // register movement greater than pointerMoveTolerance
    if (this.pointerIsDown && !this.pointerWasMoved) {
      dx = this.curCoords.client.x - this.startCoords.client.x;
      dy = this.curCoords.client.y - this.startCoords.client.y;

      this.pointerWasMoved = utils.hypot(dx, dy) > Interaction.pointerMoveTolerance;
    }

    var signalArg = {
      pointer: pointer,
      pointerIndex: this.getPointerIndex(pointer),
      event: event,
      eventTarget: eventTarget,
      dx: dx,
      dy: dy,
      duplicate: duplicateMove,
      interaction: this,
      interactingBeforeMove: this.interacting()
    };

    if (!duplicateMove) {
      // set pointer coordinate, time changes and speeds
      utils.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
    }

    signals.fire('move', signalArg);

    if (!duplicateMove) {
      // if interacting, fire an 'action-move' signal etc
      if (this.interacting()) {
        this.doMove(signalArg);
      }

      if (this.pointerWasMoved) {
        utils.copyCoords(this.prevCoords, this.curCoords);
      }
    }
  };

  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('dragmove', function (event) {
   *     if (someCondition) {
   *       // change the snap settings
   *       event.interactable.draggable({ snap: { targets: [] }});
   *       // fire another move event with re-calculated snap
   *       event.interaction.doMove();
   *     }
   *   });
   * ```
   *
   * Force a move of the current action at the same coordinates. Useful if
   * snap/restrict has been changed and you want a movement with the new
   * settings.
   */


  Interaction.prototype.doMove = function doMove(signalArg) {
    signalArg = utils.extend({
      pointer: this.pointers[0],
      event: this.prevEvent,
      eventTarget: this._eventTarget,
      interaction: this
    }, signalArg || {});

    signals.fire('before-action-move', signalArg);

    if (!this._dontFireMove) {
      signals.fire('action-move', signalArg);
    }

    this._dontFireMove = false;
  };

  // End interact move events and stop auto-scroll unless simulation is running


  Interaction.prototype.pointerUp = function pointerUp(pointer, event, eventTarget, curEventTarget) {
    var pointerIndex = this.getPointerIndex(pointer);

    signals.fire(/cancel$/i.test(event.type) ? 'cancel' : 'up', {
      pointer: pointer,
      pointerIndex: pointerIndex,
      event: event,
      eventTarget: eventTarget,
      curEventTarget: curEventTarget,
      interaction: this
    });

    if (!this.simulation) {
      this.end(event);
    }

    this.pointerIsDown = false;
    this.removePointer(pointer, event);
  };

  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('move', function (event) {
   *     if (event.pageX > 1000) {
   *       // end the current action
   *       event.interaction.end();
   *       // stop all further listeners from being called
   *       event.stopImmediatePropagation();
   *     }
   *   });
   * ```
   *
   * Stop the current action and fire an end event. Inertial movement does
   * not happen.
   *
   * @param {PointerEvent} [event]
   */


  Interaction.prototype.end = function end(event) {
    this._ending = true;

    event = event || this.prevEvent;

    if (this.interacting()) {
      signals.fire('action-end', {
        event: event,
        interaction: this
      });
    }

    this.stop();
    this._ending = false;
  };

  Interaction.prototype.currentAction = function currentAction() {
    return this._interacting ? this.prepared.name : null;
  };

  Interaction.prototype.interacting = function interacting() {
    return this._interacting;
  };

  /** */


  Interaction.prototype.stop = function stop() {
    signals.fire('stop', { interaction: this });

    if (this._interacting) {
      signals.fire('stop-active', { interaction: this });
      signals.fire('stop-' + this.prepared.name, { interaction: this });
    }

    this.target = this.element = null;

    this._interacting = false;
    this.prepared.name = this.prevEvent = null;
  };

  Interaction.prototype.getPointerIndex = function getPointerIndex(pointer) {
    // mouse and pen interactions may have only one pointer
    if (this.pointerType === 'mouse' || this.pointerType === 'pen') {
      return 0;
    }

    return this.pointerIds.indexOf(utils.getPointerId(pointer));
  };

  Interaction.prototype.updatePointer = function updatePointer(pointer, event) {
    var down = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : event && /(down|start)$/i.test(event.type);

    var id = utils.getPointerId(pointer);
    var index = this.getPointerIndex(pointer);

    if (index === -1) {
      index = this.pointerIds.length;
      this.pointerIds[index] = id;
    }

    if (down) {
      signals.fire('update-pointer-down', {
        pointer: pointer,
        event: event,
        down: down,
        pointerId: id,
        pointerIndex: index,
        interaction: this
      });
    }

    this.pointers[index] = pointer;

    return index;
  };

  Interaction.prototype.removePointer = function removePointer(pointer, event) {
    var index = this.getPointerIndex(pointer);

    if (index === -1) {
      return;
    }

    signals.fire('remove-pointer', {
      pointer: pointer,
      event: event,
      pointerIndex: index,
      interaction: this
    });

    this.pointers.splice(index, 1);
    this.pointerIds.splice(index, 1);
    this.downTargets.splice(index, 1);
    this.downTimes.splice(index, 1);
  };

  Interaction.prototype._updateEventTargets = function _updateEventTargets(target, currentTarget) {
    this._eventTarget = target;
    this._curEventTarget = currentTarget;
  };

  return Interaction;
}();

for (var _i = 0; _i < methodNames.length; _i++) {
  var method = methodNames[_i];
  listeners[method] = doOnInteractions(method);
}

function doOnInteractions(method) {
  return function (event) {
    var pointerType = utils.getPointerType(event);

    var _utils$getEventTarget = utils.getEventTargets(event),
        eventTarget = _utils$getEventTarget[0],
        curEventTarget = _utils$getEventTarget[1];

    var matches = []; // [ [pointer, interaction], ...]

    if (browser.supportsTouch && /touch/.test(event.type)) {
      prevTouchTime = new Date().getTime();

      for (var _i2 = 0; _i2 < event.changedTouches.length; _i2++) {
        var _ref2;

        _ref2 = event.changedTouches[_i2];
        var changedTouch = _ref2;

        var pointer = changedTouch;
        var interaction = finder.search(pointer, event.type, eventTarget);

        matches.push([pointer, interaction || new Interaction({ pointerType: pointerType })]);
      }
    } else {
      var invalidPointer = false;

      if (!browser.supportsPointerEvent && /mouse/.test(event.type)) {
        // ignore mouse events while touch interactions are active
        for (var i = 0; i < scope.interactions.length && !invalidPointer; i++) {
          invalidPointer = scope.interactions[i].pointerType !== 'mouse' && scope.interactions[i].pointerIsDown;
        }

        // try to ignore mouse events that are simulated by the browser
        // after a touch event
        invalidPointer = invalidPointer || new Date().getTime() - prevTouchTime < 500
        // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        || event.timeStamp === 0;
      }

      if (!invalidPointer) {
        var _interaction = finder.search(event, event.type, eventTarget);

        if (!_interaction) {
          _interaction = new Interaction({ pointerType: pointerType });
        }

        matches.push([event, _interaction]);
      }
    }

    for (var _i3 = 0; _i3 < matches.length; _i3++) {
      var _ref3 = matches[_i3];
      var _pointer = _ref3[0];
      var _interaction2 = _ref3[1];

      _interaction2._updateEventTargets(eventTarget, curEventTarget);
      _interaction2[method](_pointer, event, eventTarget, curEventTarget);
    }
  };
}

function endAll(event) {
  for (var _i4 = 0; _i4 < scope.interactions.length; _i4++) {
    var _ref4;

    _ref4 = scope.interactions[_i4];
    var interaction = _ref4;

    interaction.end(event);
    signals.fire('endall', { event: event, interaction: interaction });
  }
}

var docEvents = {/* 'eventType': listenerFunc */};
var pEventTypes = browser.pEventTypes;

if (domObjects.PointerEvent) {
  docEvents[pEventTypes.down] = listeners.pointerDown;
  docEvents[pEventTypes.move] = listeners.pointerMove;
  docEvents[pEventTypes.up] = listeners.pointerUp;
  docEvents[pEventTypes.cancel] = listeners.pointerUp;
} else {
  docEvents.mousedown = listeners.pointerDown;
  docEvents.mousemove = listeners.pointerMove;
  docEvents.mouseup = listeners.pointerUp;

  docEvents.touchstart = listeners.pointerDown;
  docEvents.touchmove = listeners.pointerMove;
  docEvents.touchend = listeners.pointerUp;
  docEvents.touchcancel = listeners.pointerUp;
}

docEvents.blur = endAll;

function onDocSignal(_ref5, signalName) {
  var doc = _ref5.doc;

  var eventMethod = signalName.indexOf('add') === 0 ? events.add : events.remove;

  // delegate event listener
  for (var eventType in scope.delegatedEvents) {
    eventMethod(doc, eventType, events.delegateListener);
    eventMethod(doc, eventType, events.delegateUseCapture, true);
  }

  for (var _eventType in docEvents) {
    eventMethod(doc, _eventType, docEvents[_eventType], browser.isIOS ? { passive: false } : undefined);
  }
}

signals.on('update-pointer-down', function (_ref6) {
  var interaction = _ref6.interaction,
      pointer = _ref6.pointer,
      pointerId = _ref6.pointerId,
      pointerIndex = _ref6.pointerIndex,
      event = _ref6.event,
      eventTarget = _ref6.eventTarget,
      down = _ref6.down;

  interaction.pointerIds[pointerIndex] = pointerId;
  interaction.pointers[pointerIndex] = pointer;

  if (down) {
    interaction.pointerIsDown = true;
  }

  if (!interaction.interacting()) {
    utils.setCoords(interaction.startCoords, interaction.pointers);

    utils.copyCoords(interaction.curCoords, interaction.startCoords);
    utils.copyCoords(interaction.prevCoords, interaction.startCoords);

    interaction.downEvent = event;
    interaction.downTimes[pointerIndex] = interaction.curCoords.timeStamp;
    interaction.downTargets[pointerIndex] = eventTarget || event && utils.getEventTargets(event)[0];
    interaction.pointerWasMoved = false;

    utils.pointerExtend(interaction.downPointer, pointer);
  }
});

scope.signals.on('add-document', onDocSignal);
scope.signals.on('remove-document', onDocSignal);

Interaction.pointerMoveTolerance = 1;
Interaction.doOnInteractions = doOnInteractions;
Interaction.endAll = endAll;
Interaction.signals = signals;
Interaction.docEvents = docEvents;

scope.endAllInteractions = endAll;

module.exports = Interaction;

},{"./scope":33,"./utils":44,"./utils/Signals":34,"./utils/browser":36,"./utils/domObjects":38,"./utils/events":40,"./utils/interactionFinder":45}],6:[function(require,module,exports){
'use strict';

var Interaction = require('../Interaction');
var InteractEvent = require('../InteractEvent');

var actions = {
  firePrepared: firePrepared,
  names: [],
  methodDict: {}
};

Interaction.signals.on('action-start', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  interaction._interacting = true;
  firePrepared(interaction, event, 'start');
});

Interaction.signals.on('action-move', function (_ref2) {
  var interaction = _ref2.interaction,
      event = _ref2.event,
      preEnd = _ref2.preEnd;

  firePrepared(interaction, event, 'move', preEnd);

  // if the action was ended in a listener
  if (!interaction.interacting()) {
    return false;
  }
});

Interaction.signals.on('action-end', function (_ref3) {
  var interaction = _ref3.interaction,
      event = _ref3.event;

  firePrepared(interaction, event, 'end');
});

function firePrepared(interaction, event, phase, preEnd) {
  var actionName = interaction.prepared.name;

  var newEvent = new InteractEvent(interaction, event, actionName, phase, interaction.element, null, preEnd);

  interaction.target.fire(newEvent);
  interaction.prevEvent = newEvent;
}

module.exports = actions;

},{"../InteractEvent":3,"../Interaction":5}],7:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var drag = {
  defaults: {
    enabled: false,
    mouseButtons: null,

    origin: null,
    snap: null,
    restrict: null,
    inertia: null,
    autoScroll: null,

    startAxis: 'xy',
    lockAxis: 'xy'
  },

  checker: function checker(pointer, event, interactable) {
    var dragOptions = interactable.options.drag;

    return dragOptions.enabled ? { name: 'drag', axis: dragOptions.lockAxis === 'start' ? dragOptions.startAxis : dragOptions.lockAxis } : null;
  },

  getCursor: function getCursor() {
    return 'move';
  }
};

Interaction.signals.on('before-action-move', function (_ref) {
  var interaction = _ref.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x') {
    interaction.curCoords.page.y = interaction.startCoords.page.y;
    interaction.curCoords.client.y = interaction.startCoords.client.y;

    interaction.pointerDelta.page.speed = Math.abs(interaction.pointerDelta.page.vx);
    interaction.pointerDelta.client.speed = Math.abs(interaction.pointerDelta.client.vx);
    interaction.pointerDelta.client.vy = 0;
    interaction.pointerDelta.page.vy = 0;
  } else if (axis === 'y') {
    interaction.curCoords.page.x = interaction.startCoords.page.x;
    interaction.curCoords.client.x = interaction.startCoords.client.x;

    interaction.pointerDelta.page.speed = Math.abs(interaction.pointerDelta.page.vy);
    interaction.pointerDelta.client.speed = Math.abs(interaction.pointerDelta.client.vy);
    interaction.pointerDelta.client.vx = 0;
    interaction.pointerDelta.page.vx = 0;
  }
});

// dragmove
InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      interaction = _ref2.interaction;

  if (iEvent.type !== 'dragmove') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x') {
    iEvent.pageY = interaction.startCoords.page.y;
    iEvent.clientY = interaction.startCoords.client.y;
    iEvent.dy = 0;
  } else if (axis === 'y') {
    iEvent.pageX = interaction.startCoords.page.x;
    iEvent.clientX = interaction.startCoords.client.x;
    iEvent.dx = 0;
  }
});

/**
 * ```js
 * interact(element).draggable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // the axis in which the first movement must be
 *     // for the drag sequence to start
 *     // 'xy' by default - any direction
 *     startAxis: 'x' || 'y' || 'xy',
 *
 *     // 'xy' by default - don't restrict to one axis (move in any direction)
 *     // 'x' or 'y' to restrict movement to either axis
 *     // 'start' to restrict movement to the axis the drag started in
 *     lockAxis: 'x' || 'y' || 'xy' || 'start',
 *
 *     // max number of drags that can happen concurrently
 *     // with elements of this Interactable. Infinity by default
 *     max: Infinity,
 *
 *     // max number of drags that can target the same element+Interactable
 *     // 1 by default
 *     maxPerElement: 2
 * });
 *
 * var isDraggable = interact('element').draggable(); // true
 * ```
 *
 * Get or set whether drag actions can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on drag events (object makes the Interactable
 * draggable)
 * @return {boolean | Interactable} boolean indicating if this can be the
 * target of drag events, or this Interctable
 */
Interactable.prototype.draggable = function (options) {
  if (utils.is.object(options)) {
    this.options.drag.enabled = options.enabled === false ? false : true;
    this.setPerAction('drag', options);
    this.setOnEvents('drag', options);

    if (/^(xy|x|y|start)$/.test(options.lockAxis)) {
      this.options.drag.lockAxis = options.lockAxis;
    }
    if (/^(xy|x|y)$/.test(options.startAxis)) {
      this.options.drag.startAxis = options.startAxis;
    }

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.drag.enabled = options;

    if (!options) {
      this.ondragstart = this.ondragstart = this.ondragend = null;
    }

    return this;
  }

  return this.options.drag;
};

actions.drag = drag;
actions.names.push('drag');
utils.merge(Interactable.eventTypes, ['dragstart', 'dragmove', 'draginertiastart', 'draginertiaresume', 'dragend']);
actions.methodDict.drag = 'draggable';

defaultOptions.drag = drag.defaults;

module.exports = drag;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],8:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var scope = require('../scope');
/** @lends module:interact */
var interact = require('../interact');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var drop = {
  defaults: {
    enabled: false,
    accept: null,
    overlap: 'pointer'
  }
};

var dynamicDrop = false;

Interaction.signals.on('action-start', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  // reset active dropzones
  interaction.activeDrops.dropzones = [];
  interaction.activeDrops.elements = [];
  interaction.activeDrops.rects = [];

  interaction.dropEvents = null;

  if (!interaction.dynamicDrop) {
    setActiveDrops(interaction.activeDrops, interaction.element);
  }

  var dragEvent = interaction.prevEvent;
  var dropEvents = getDropEvents(interaction, event, dragEvent);

  if (dropEvents.activate) {
    fireActiveDrops(interaction.activeDrops, dropEvents.activate);
  }
});

InteractEvent.signals.on('new', function (_ref2) {
  var interaction = _ref2.interaction,
      iEvent = _ref2.iEvent,
      event = _ref2.event;

  if (iEvent.type !== 'dragmove' && iEvent.type !== 'dragend') {
    return;
  }

  var draggableElement = interaction.element;
  var dragEvent = iEvent;
  var dropResult = getDrop(dragEvent, event, draggableElement);

  interaction.dropTarget = dropResult.dropzone;
  interaction.dropElement = dropResult.element;

  interaction.dropEvents = getDropEvents(interaction, event, dragEvent);
});

Interaction.signals.on('action-move', function (_ref3) {
  var interaction = _ref3.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  fireDropEvents(interaction, interaction.dropEvents);
});

Interaction.signals.on('action-end', function (_ref4) {
  var interaction = _ref4.interaction;

  if (interaction.prepared.name === 'drag') {
    fireDropEvents(interaction, interaction.dropEvents);
  }
});

Interaction.signals.on('stop-drag', function (_ref5) {
  var interaction = _ref5.interaction;

  interaction.activeDrops = {
    dropzones: null,
    elements: null,
    rects: null
  };

  interaction.dropEvents = null;
});

function collectDrops(activeDrops, element) {
  var drops = [];
  var elements = [];

  // collect all dropzones and their elements which qualify for a drop
  for (var _i = 0; _i < scope.interactables.length; _i++) {
    var _ref6;

    _ref6 = scope.interactables[_i];
    var current = _ref6;

    if (!current.options.drop.enabled) {
      continue;
    }

    var accept = current.options.drop.accept;

    // test the draggable element against the dropzone's accept setting
    if (utils.is.element(accept) && accept !== element || utils.is.string(accept) && !utils.matchesSelector(element, accept)) {

      continue;
    }

    // query for new elements if necessary
    var dropElements = utils.is.string(current.target) ? current._context.querySelectorAll(current.target) : [current.target];

    for (var _i2 = 0; _i2 < dropElements.length; _i2++) {
      var _ref7;

      _ref7 = dropElements[_i2];
      var currentElement = _ref7;

      if (currentElement !== element) {
        drops.push(current);
        elements.push(currentElement);
      }
    }
  }

  return {
    elements: elements,
    dropzones: drops
  };
}

function fireActiveDrops(activeDrops, event) {
  var prevElement = void 0;

  // loop through all active dropzones and trigger event
  for (var i = 0; i < activeDrops.dropzones.length; i++) {
    var current = activeDrops.dropzones[i];
    var currentElement = activeDrops.elements[i];

    // prevent trigger of duplicate events on same element
    if (currentElement !== prevElement) {
      // set current element as event target
      event.target = currentElement;
      current.fire(event);
    }
    prevElement = currentElement;
  }
}

// Collect a new set of possible drops and save them in activeDrops.
// setActiveDrops should always be called when a drag has just started or a
// drag event happens while dynamicDrop is true
function setActiveDrops(activeDrops, dragElement) {
  // get dropzones and their elements that could receive the draggable
  var possibleDrops = collectDrops(activeDrops, dragElement);

  activeDrops.dropzones = possibleDrops.dropzones;
  activeDrops.elements = possibleDrops.elements;
  activeDrops.rects = [];

  for (var i = 0; i < activeDrops.dropzones.length; i++) {
    activeDrops.rects[i] = activeDrops.dropzones[i].getRect(activeDrops.elements[i]);
  }
}

function getDrop(dragEvent, event, dragElement) {
  var interaction = dragEvent.interaction;
  var validDrops = [];

  if (dynamicDrop) {
    setActiveDrops(interaction.activeDrops, dragElement);
  }

  // collect all dropzones and their elements which qualify for a drop
  for (var j = 0; j < interaction.activeDrops.dropzones.length; j++) {
    var current = interaction.activeDrops.dropzones[j];
    var currentElement = interaction.activeDrops.elements[j];
    var rect = interaction.activeDrops.rects[j];

    validDrops.push(current.dropCheck(dragEvent, event, interaction.target, dragElement, currentElement, rect) ? currentElement : null);
  }

  // get the most appropriate dropzone based on DOM depth and order
  var dropIndex = utils.indexOfDeepestElement(validDrops);

  return {
    dropzone: interaction.activeDrops.dropzones[dropIndex] || null,
    element: interaction.activeDrops.elements[dropIndex] || null
  };
}

function getDropEvents(interaction, pointerEvent, dragEvent) {
  var dropEvents = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };

  var tmpl = {
    dragEvent: dragEvent,
    interaction: interaction,
    target: interaction.dropElement,
    dropzone: interaction.dropTarget,
    relatedTarget: dragEvent.target,
    draggable: dragEvent.interactable,
    timeStamp: dragEvent.timeStamp
  };

  if (interaction.dropElement !== interaction.prevDropElement) {
    // if there was a prevDropTarget, create a dragleave event
    if (interaction.prevDropTarget) {
      dropEvents.leave = utils.extend({ type: 'dragleave' }, tmpl);

      dragEvent.dragLeave = dropEvents.leave.target = interaction.prevDropElement;
      dragEvent.prevDropzone = dropEvents.leave.dropzone = interaction.prevDropTarget;
    }
    // if the dropTarget is not null, create a dragenter event
    if (interaction.dropTarget) {
      dropEvents.enter = {
        dragEvent: dragEvent,
        interaction: interaction,
        target: interaction.dropElement,
        dropzone: interaction.dropTarget,
        relatedTarget: dragEvent.target,
        draggable: dragEvent.interactable,
        timeStamp: dragEvent.timeStamp,
        type: 'dragenter'
      };

      dragEvent.dragEnter = interaction.dropElement;
      dragEvent.dropzone = interaction.dropTarget;
    }
  }

  if (dragEvent.type === 'dragend' && interaction.dropTarget) {
    dropEvents.drop = utils.extend({ type: 'drop' }, tmpl);

    dragEvent.dropzone = interaction.dropTarget;
    dragEvent.relatedTarget = interaction.dropElement;
  }
  if (dragEvent.type === 'dragstart') {
    dropEvents.activate = utils.extend({ type: 'dropactivate' }, tmpl);

    dropEvents.activate.target = null;
    dropEvents.activate.dropzone = null;
  }
  if (dragEvent.type === 'dragend') {
    dropEvents.deactivate = utils.extend({ type: 'dropdeactivate' }, tmpl);

    dropEvents.deactivate.target = null;
    dropEvents.deactivate.dropzone = null;
  }
  if (dragEvent.type === 'dragmove' && interaction.dropTarget) {
    dropEvents.move = utils.extend({
      dragmove: dragEvent,
      type: 'dropmove'
    }, tmpl);

    dragEvent.dropzone = interaction.dropTarget;
  }

  return dropEvents;
}

function fireDropEvents(interaction, dropEvents) {
  var activeDrops = interaction.activeDrops,
      prevDropTarget = interaction.prevDropTarget,
      dropTarget = interaction.dropTarget,
      dropElement = interaction.dropElement;


  if (dropEvents.leave) {
    prevDropTarget.fire(dropEvents.leave);
  }
  if (dropEvents.move) {
    dropTarget.fire(dropEvents.move);
  }
  if (dropEvents.enter) {
    dropTarget.fire(dropEvents.enter);
  }
  if (dropEvents.drop) {
    dropTarget.fire(dropEvents.drop);
  }
  if (dropEvents.deactivate) {
    fireActiveDrops(activeDrops, dropEvents.deactivate);
  }

  interaction.prevDropTarget = dropTarget;
  interaction.prevDropElement = dropElement;
}

/**
 * ```js
 * interact(target)
 * .dropChecker(function(dragEvent,         // related dragmove or dragend event
 *                       event,             // TouchEvent/PointerEvent/MouseEvent
 *                       dropped,           // bool result of the default checker
 *                       dropzone,          // dropzone Interactable
 *                       dropElement,       // dropzone elemnt
 *                       draggable,         // draggable Interactable
 *                       draggableElement) {// draggable element
 *
 *   return dropped && event.target.hasAttribute('allow-drop');
 * }
 * ```
 *
 * ```js
 * interact('.drop').dropzone({
 *   accept: '.can-drop' || document.getElementById('single-drop'),
 *   overlap: 'pointer' || 'center' || zeroToOne
 * }
 * ```
 *
 * Returns or sets whether draggables can be dropped onto this target to
 * trigger drop events
 *
 * Dropzones can receive the following events:
 *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
 *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
 *  - `dragmove` when a draggable that has entered the dropzone is moved
 *  - `drop` when a draggable is dropped into this dropzone
 *
 * Use the `accept` option to allow only elements that match the given CSS
 * selector or element. The value can be:
 *
 *  - **an Element** - only that element can be dropped into this dropzone.
 *  - **a string**, - the element being dragged must match it as a CSS selector.
 *  - **`null`** - accept options is cleared - it accepts any element.
 *
 * Use the `overlap` option to set how drops are checked for. The allowed
 * values are:
 *
 *   - `'pointer'`, the pointer must be over the dropzone (default)
 *   - `'center'`, the draggable element's center must be over the dropzone
 *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
 *   e.g. `0.5` for drop to happen when half of the area of the draggable is
 *   over the dropzone
 *
 * Use the `checker` option to specify a function to check if a dragged element
 * is over this Interactable.
 *
 * @param {boolean | object | null} [options] The new options to be set.
 * @return {boolean | Interactable} The current setting or this Interactable
 */
Interactable.prototype.dropzone = function (options) {
  if (utils.is.object(options)) {
    this.options.drop.enabled = options.enabled === false ? false : true;

    if (utils.is.function(options.ondrop)) {
      this.events.ondrop = options.ondrop;
    }
    if (utils.is.function(options.ondropactivate)) {
      this.events.ondropactivate = options.ondropactivate;
    }
    if (utils.is.function(options.ondropdeactivate)) {
      this.events.ondropdeactivate = options.ondropdeactivate;
    }
    if (utils.is.function(options.ondragenter)) {
      this.events.ondragenter = options.ondragenter;
    }
    if (utils.is.function(options.ondragleave)) {
      this.events.ondragleave = options.ondragleave;
    }
    if (utils.is.function(options.ondropmove)) {
      this.events.ondropmove = options.ondropmove;
    }

    if (/^(pointer|center)$/.test(options.overlap)) {
      this.options.drop.overlap = options.overlap;
    } else if (utils.is.number(options.overlap)) {
      this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
    }
    if ('accept' in options) {
      this.options.drop.accept = options.accept;
    }
    if ('checker' in options) {
      this.options.drop.checker = options.checker;
    }

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.drop.enabled = options;

    if (!options) {
      this.ondragenter = this.ondragleave = this.ondrop = this.ondropactivate = this.ondropdeactivate = null;
    }

    return this;
  }

  return this.options.drop;
};

Interactable.prototype.dropCheck = function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
  var dropped = false;

  // if the dropzone has no rect (eg. display: none)
  // call the custom dropChecker or just return false
  if (!(rect = rect || this.getRect(dropElement))) {
    return this.options.drop.checker ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement) : false;
  }

  var dropOverlap = this.options.drop.overlap;

  if (dropOverlap === 'pointer') {
    var origin = utils.getOriginXY(draggable, draggableElement, 'drag');
    var page = utils.getPageXY(dragEvent);

    page.x += origin.x;
    page.y += origin.y;

    var horizontal = page.x > rect.left && page.x < rect.right;
    var vertical = page.y > rect.top && page.y < rect.bottom;

    dropped = horizontal && vertical;
  }

  var dragRect = draggable.getRect(draggableElement);

  if (dragRect && dropOverlap === 'center') {
    var cx = dragRect.left + dragRect.width / 2;
    var cy = dragRect.top + dragRect.height / 2;

    dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
  }

  if (dragRect && utils.is.number(dropOverlap)) {
    var overlapArea = Math.max(0, Math.min(rect.right, dragRect.right) - Math.max(rect.left, dragRect.left)) * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top, dragRect.top));

    var overlapRatio = overlapArea / (dragRect.width * dragRect.height);

    dropped = overlapRatio >= dropOverlap;
  }

  if (this.options.drop.checker) {
    dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
  }

  return dropped;
};

Interactable.signals.on('unset', function (_ref8) {
  var interactable = _ref8.interactable;

  interactable.dropzone(false);
});

Interactable.settingsMethods.push('dropChecker');

Interaction.signals.on('new', function (interaction) {
  interaction.dropTarget = null; // the dropzone a drag target might be dropped into
  interaction.dropElement = null; // the element at the time of checking
  interaction.prevDropTarget = null; // the dropzone that was recently dragged away from
  interaction.prevDropElement = null; // the element at the time of checking
  interaction.dropEvents = null; // the dropEvents related to the current drag event

  interaction.activeDrops = {
    dropzones: [], // the dropzones that are mentioned below
    elements: [], // elements of dropzones that accept the target draggable
    rects: [] // the rects of the elements mentioned above
  };
});

Interaction.signals.on('stop', function (_ref9) {
  var interaction = _ref9.interaction;

  interaction.dropTarget = interaction.dropElement = interaction.prevDropTarget = interaction.prevDropElement = null;
});

/**
 * Returns or sets whether the dimensions of dropzone elements are calculated
 * on every dragmove or only on dragstart for the default dropChecker
 *
 * @param {boolean} [newValue] True to check on each move. False to check only
 * before start
 * @return {boolean | interact} The current setting or interact
 */
interact.dynamicDrop = function (newValue) {
  if (utils.is.bool(newValue)) {
    //if (dragging && dynamicDrop !== newValue && !newValue) {
    //calcRects(dropzones);
    //}

    dynamicDrop = newValue;

    return interact;
  }
  return dynamicDrop;
};

utils.merge(Interactable.eventTypes, ['dragenter', 'dragleave', 'dropactivate', 'dropdeactivate', 'dropmove', 'drop']);
actions.methodDict.drop = 'dropzone';

defaultOptions.drop = drop.defaults;

module.exports = drop;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"./base":6}],9:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var InteractEvent = require('../InteractEvent');
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var gesture = {
  defaults: {
    enabled: false,
    origin: null,
    restrict: null
  },

  checker: function checker(pointer, event, interactable, element, interaction) {
    if (interaction.pointerIds.length >= 2) {
      return { name: 'gesture' };
    }

    return null;
  },

  getCursor: function getCursor() {
    return '';
  }
};

InteractEvent.signals.on('new', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction;

  if (iEvent.type !== 'gesturestart') {
    return;
  }
  iEvent.ds = 0;

  interaction.gesture.startDistance = interaction.gesture.prevDistance = iEvent.distance;
  interaction.gesture.startAngle = interaction.gesture.prevAngle = iEvent.angle;
  interaction.gesture.scale = 1;
});

InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      interaction = _ref2.interaction;

  if (iEvent.type !== 'gesturemove') {
    return;
  }

  iEvent.ds = iEvent.scale - interaction.gesture.scale;

  interaction.target.fire(iEvent);

  interaction.gesture.prevAngle = iEvent.angle;
  interaction.gesture.prevDistance = iEvent.distance;

  if (iEvent.scale !== Infinity && iEvent.scale !== null && iEvent.scale !== undefined && !isNaN(iEvent.scale)) {

    interaction.gesture.scale = iEvent.scale;
  }
});

/**
 * ```js
 * interact(element).gesturable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // limit multiple gestures.
 *     // See the explanation in {@link Interactable.draggable} example
 *     max: Infinity,
 *     maxPerElement: 1,
 * });
 *
 * var isGestureable = interact(element).gesturable();
 * ```
 *
 * Gets or sets whether multitouch gestures can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on gesture events (makes the Interactable gesturable)
 * @return {boolean | Interactable} A boolean indicating if this can be the
 * target of gesture events, or this Interactable
 */
Interactable.prototype.gesturable = function (options) {
  if (utils.is.object(options)) {
    this.options.gesture.enabled = options.enabled === false ? false : true;
    this.setPerAction('gesture', options);
    this.setOnEvents('gesture', options);

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.gesture.enabled = options;

    if (!options) {
      this.ongesturestart = this.ongesturestart = this.ongestureend = null;
    }

    return this;
  }

  return this.options.gesture;
};

InteractEvent.signals.on('set-delta', function (_ref3) {
  var interaction = _ref3.interaction,
      iEvent = _ref3.iEvent,
      action = _ref3.action,
      event = _ref3.event,
      starting = _ref3.starting,
      ending = _ref3.ending,
      deltaSource = _ref3.deltaSource;

  if (action !== 'gesture') {
    return;
  }

  var pointers = interaction.pointers;

  iEvent.touches = [pointers[0], pointers[1]];

  if (starting) {
    iEvent.distance = utils.touchDistance(pointers, deltaSource);
    iEvent.box = utils.touchBBox(pointers);
    iEvent.scale = 1;
    iEvent.ds = 0;
    iEvent.angle = utils.touchAngle(pointers, undefined, deltaSource);
    iEvent.da = 0;
  } else if (ending || event instanceof InteractEvent) {
    iEvent.distance = interaction.prevEvent.distance;
    iEvent.box = interaction.prevEvent.box;
    iEvent.scale = interaction.prevEvent.scale;
    iEvent.ds = iEvent.scale - 1;
    iEvent.angle = interaction.prevEvent.angle;
    iEvent.da = iEvent.angle - interaction.gesture.startAngle;
  } else {
    iEvent.distance = utils.touchDistance(pointers, deltaSource);
    iEvent.box = utils.touchBBox(pointers);
    iEvent.scale = iEvent.distance / interaction.gesture.startDistance;
    iEvent.angle = utils.touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);

    iEvent.ds = iEvent.scale - interaction.gesture.prevScale;
    iEvent.da = iEvent.angle - interaction.gesture.prevAngle;
  }
});

Interaction.signals.on('new', function (interaction) {
  interaction.gesture = {
    start: { x: 0, y: 0 },

    startDistance: 0, // distance between two touches of touchStart
    prevDistance: 0,
    distance: 0,

    scale: 1, // gesture.distance / gesture.startDistance

    startAngle: 0, // angle of line joining two touches
    prevAngle: 0 // angle of the previous gesture event
  };
});

actions.gesture = gesture;
actions.names.push('gesture');
utils.merge(Interactable.eventTypes, ['gesturestart', 'gesturemove', 'gestureend']);
actions.methodDict.gesture = 'gesturable';

defaultOptions.gesture = gesture.defaults;

module.exports = gesture;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],10:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var browser = require('../utils/browser');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

// Less Precision with touch input
var defaultMargin = browser.supportsTouch || browser.supportsPointerEvent ? 20 : 10;

var resize = {
  defaults: {
    enabled: false,
    mouseButtons: null,

    origin: null,
    snap: null,
    restrict: null,
    inertia: null,
    autoScroll: null,

    square: false,
    preserveAspectRatio: false,
    axis: 'xy',

    // use default margin
    margin: NaN,

    // object with props left, right, top, bottom which are
    // true/false values to resize when the pointer is over that edge,
    // CSS selectors to match the handles for each direction
    // or the Elements for each handle
    edges: null,

    // a value of 'none' will limit the resize rect to a minimum of 0x0
    // 'negate' will alow the rect to have negative width/height
    // 'reposition' will keep the width/height positive by swapping
    // the top and bottom edges and/or swapping the left and right edges
    invert: 'none'
  },

  checker: function checker(pointer, event, interactable, element, interaction, rect) {
    if (!rect) {
      return null;
    }

    var page = utils.extend({}, interaction.curCoords.page);
    var options = interactable.options;

    if (options.resize.enabled) {
      var resizeOptions = options.resize;
      var resizeEdges = { left: false, right: false, top: false, bottom: false };

      // if using resize.edges
      if (utils.is.object(resizeOptions.edges)) {
        for (var edge in resizeEdges) {
          resizeEdges[edge] = checkResizeEdge(edge, resizeOptions.edges[edge], page, interaction._eventTarget, element, rect, resizeOptions.margin || defaultMargin);
        }

        resizeEdges.left = resizeEdges.left && !resizeEdges.right;
        resizeEdges.top = resizeEdges.top && !resizeEdges.bottom;

        if (resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom) {
          return {
            name: 'resize',
            edges: resizeEdges
          };
        }
      } else {
        var right = options.resize.axis !== 'y' && page.x > rect.right - defaultMargin;
        var bottom = options.resize.axis !== 'x' && page.y > rect.bottom - defaultMargin;

        if (right || bottom) {
          return {
            name: 'resize',
            axes: (right ? 'x' : '') + (bottom ? 'y' : '')
          };
        }
      }
    }

    return null;
  },

  cursors: browser.isIe9 ? {
    x: 'e-resize',
    y: 's-resize',
    xy: 'se-resize',

    top: 'n-resize',
    left: 'w-resize',
    bottom: 's-resize',
    right: 'e-resize',
    topleft: 'se-resize',
    bottomright: 'se-resize',
    topright: 'ne-resize',
    bottomleft: 'ne-resize'
  } : {
    x: 'ew-resize',
    y: 'ns-resize',
    xy: 'nwse-resize',

    top: 'ns-resize',
    left: 'ew-resize',
    bottom: 'ns-resize',
    right: 'ew-resize',
    topleft: 'nwse-resize',
    bottomright: 'nwse-resize',
    topright: 'nesw-resize',
    bottomleft: 'nesw-resize'
  },

  getCursor: function getCursor(action) {
    if (action.axis) {
      return resize.cursors[action.name + action.axis];
    } else if (action.edges) {
      var cursorKey = '';
      var edgeNames = ['top', 'bottom', 'left', 'right'];

      for (var i = 0; i < 4; i++) {
        if (action.edges[edgeNames[i]]) {
          cursorKey += edgeNames[i];
        }
      }

      return resize.cursors[cursorKey];
    }
  }
};

// resizestart
InteractEvent.signals.on('new', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction;

  if (iEvent.type !== 'resizestart' || !interaction.prepared.edges) {
    return;
  }

  var startRect = interaction.target.getRect(interaction.element);
  var resizeOptions = interaction.target.options.resize;

  /*
   * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
   * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
   * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
   * on the active edges and the edge being interacted with.
   */
  if (resizeOptions.square || resizeOptions.preserveAspectRatio) {
    var linkedEdges = utils.extend({}, interaction.prepared.edges);

    linkedEdges.top = linkedEdges.top || linkedEdges.left && !linkedEdges.bottom;
    linkedEdges.left = linkedEdges.left || linkedEdges.top && !linkedEdges.right;
    linkedEdges.bottom = linkedEdges.bottom || linkedEdges.right && !linkedEdges.top;
    linkedEdges.right = linkedEdges.right || linkedEdges.bottom && !linkedEdges.left;

    interaction.prepared._linkedEdges = linkedEdges;
  } else {
    interaction.prepared._linkedEdges = null;
  }

  // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
  if (resizeOptions.preserveAspectRatio) {
    interaction.resizeStartAspectRatio = startRect.width / startRect.height;
  }

  interaction.resizeRects = {
    start: startRect,
    current: utils.extend({}, startRect),
    inverted: utils.extend({}, startRect),
    previous: utils.extend({}, startRect),
    delta: {
      left: 0, right: 0, width: 0,
      top: 0, bottom: 0, height: 0
    }
  };

  iEvent.rect = interaction.resizeRects.inverted;
  iEvent.deltaRect = interaction.resizeRects.delta;
});

// resizemove
InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      phase = _ref2.phase,
      interaction = _ref2.interaction;

  if (phase !== 'move' || !interaction.prepared.edges) {
    return;
  }

  var resizeOptions = interaction.target.options.resize;
  var invert = resizeOptions.invert;
  var invertible = invert === 'reposition' || invert === 'negate';

  var edges = interaction.prepared.edges;

  var start = interaction.resizeRects.start;
  var current = interaction.resizeRects.current;
  var inverted = interaction.resizeRects.inverted;
  var delta = interaction.resizeRects.delta;
  var previous = utils.extend(interaction.resizeRects.previous, inverted);
  var originalEdges = edges;

  var dx = iEvent.dx;
  var dy = iEvent.dy;

  if (resizeOptions.preserveAspectRatio || resizeOptions.square) {
    // `resize.preserveAspectRatio` takes precedence over `resize.square`
    var startAspectRatio = resizeOptions.preserveAspectRatio ? interaction.resizeStartAspectRatio : 1;

    edges = interaction.prepared._linkedEdges;

    if (originalEdges.left && originalEdges.bottom || originalEdges.right && originalEdges.top) {
      dy = -dx / startAspectRatio;
    } else if (originalEdges.left || originalEdges.right) {
      dy = dx / startAspectRatio;
    } else if (originalEdges.top || originalEdges.bottom) {
      dx = dy * startAspectRatio;
    }
  }

  // update the 'current' rect without modifications
  if (edges.top) {
    current.top += dy;
  }
  if (edges.bottom) {
    current.bottom += dy;
  }
  if (edges.left) {
    current.left += dx;
  }
  if (edges.right) {
    current.right += dx;
  }

  if (invertible) {
    // if invertible, copy the current rect
    utils.extend(inverted, current);

    if (invert === 'reposition') {
      // swap edge values if necessary to keep width/height positive
      var swap = void 0;

      if (inverted.top > inverted.bottom) {
        swap = inverted.top;

        inverted.top = inverted.bottom;
        inverted.bottom = swap;
      }
      if (inverted.left > inverted.right) {
        swap = inverted.left;

        inverted.left = inverted.right;
        inverted.right = swap;
      }
    }
  } else {
    // if not invertible, restrict to minimum of 0x0 rect
    inverted.top = Math.min(current.top, start.bottom);
    inverted.bottom = Math.max(current.bottom, start.top);
    inverted.left = Math.min(current.left, start.right);
    inverted.right = Math.max(current.right, start.left);
  }

  inverted.width = inverted.right - inverted.left;
  inverted.height = inverted.bottom - inverted.top;

  for (var edge in inverted) {
    delta[edge] = inverted[edge] - previous[edge];
  }

  iEvent.edges = interaction.prepared.edges;
  iEvent.rect = inverted;
  iEvent.deltaRect = delta;
});

/**
 * ```js
 * interact(element).resizable({
 *   onstart: function (event) {},
 *   onmove : function (event) {},
 *   onend  : function (event) {},
 *
 *   edges: {
 *     top   : true,       // Use pointer coords to check for resize.
 *     left  : false,      // Disable resizing from left edge.
 *     bottom: '.resize-s',// Resize if pointer target matches selector
 *     right : handleEl    // Resize if pointer target is the given Element
 *   },
 *
 *     // Width and height can be adjusted independently. When `true`, width and
 *     // height are adjusted at a 1:1 ratio.
 *     square: false,
 *
 *     // Width and height can be adjusted independently. When `true`, width and
 *     // height maintain the aspect ratio they had when resizing started.
 *     preserveAspectRatio: false,
 *
 *   // a value of 'none' will limit the resize rect to a minimum of 0x0
 *   // 'negate' will allow the rect to have negative width/height
 *   // 'reposition' will keep the width/height positive by swapping
 *   // the top and bottom edges and/or swapping the left and right edges
 *   invert: 'none' || 'negate' || 'reposition'
 *
 *   // limit multiple resizes.
 *   // See the explanation in the {@link Interactable.draggable} example
 *   max: Infinity,
 *   maxPerElement: 1,
 * });
 *
 * var isResizeable = interact(element).resizable();
 * ```
 *
 * Gets or sets whether resize actions can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on resize events (object makes the Interactable
 * resizable)
 * @return {boolean | Interactable} A boolean indicating if this can be the
 * target of resize elements, or this Interactable
 */
Interactable.prototype.resizable = function (options) {
  if (utils.is.object(options)) {
    this.options.resize.enabled = options.enabled === false ? false : true;
    this.setPerAction('resize', options);
    this.setOnEvents('resize', options);

    if (/^x$|^y$|^xy$/.test(options.axis)) {
      this.options.resize.axis = options.axis;
    } else if (options.axis === null) {
      this.options.resize.axis = defaultOptions.resize.axis;
    }

    if (utils.is.bool(options.preserveAspectRatio)) {
      this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
    } else if (utils.is.bool(options.square)) {
      this.options.resize.square = options.square;
    }

    return this;
  }
  if (utils.is.bool(options)) {
    this.options.resize.enabled = options;

    if (!options) {
      this.onresizestart = this.onresizestart = this.onresizeend = null;
    }

    return this;
  }
  return this.options.resize;
};

function checkResizeEdge(name, value, page, element, interactableElement, rect, margin) {
  // false, '', undefined, null
  if (!value) {
    return false;
  }

  // true value, use pointer coords and element rect
  if (value === true) {
    // if dimensions are negative, "switch" edges
    var width = utils.is.number(rect.width) ? rect.width : rect.right - rect.left;
    var height = utils.is.number(rect.height) ? rect.height : rect.bottom - rect.top;

    if (width < 0) {
      if (name === 'left') {
        name = 'right';
      } else if (name === 'right') {
        name = 'left';
      }
    }
    if (height < 0) {
      if (name === 'top') {
        name = 'bottom';
      } else if (name === 'bottom') {
        name = 'top';
      }
    }

    if (name === 'left') {
      return page.x < (width >= 0 ? rect.left : rect.right) + margin;
    }
    if (name === 'top') {
      return page.y < (height >= 0 ? rect.top : rect.bottom) + margin;
    }

    if (name === 'right') {
      return page.x > (width >= 0 ? rect.right : rect.left) - margin;
    }
    if (name === 'bottom') {
      return page.y > (height >= 0 ? rect.bottom : rect.top) - margin;
    }
  }

  // the remaining checks require an element
  if (!utils.is.element(element)) {
    return false;
  }

  return utils.is.element(value)
  // the value is an element to use as a resize handle
  ? value === element
  // otherwise check if element matches value as selector
  : utils.matchesUpTo(element, value, interactableElement);
}

Interaction.signals.on('new', function (interaction) {
  interaction.resizeAxes = 'xy';
});

InteractEvent.signals.on('set-delta', function (_ref3) {
  var interaction = _ref3.interaction,
      iEvent = _ref3.iEvent,
      action = _ref3.action;

  if (action !== 'resize' || !interaction.resizeAxes) {
    return;
  }

  var options = interaction.target.options;

  if (options.resize.square) {
    if (interaction.resizeAxes === 'y') {
      iEvent.dx = iEvent.dy;
    } else {
      iEvent.dy = iEvent.dx;
    }
    iEvent.axes = 'xy';
  } else {
    iEvent.axes = interaction.resizeAxes;

    if (interaction.resizeAxes === 'x') {
      iEvent.dy = 0;
    } else if (interaction.resizeAxes === 'y') {
      iEvent.dx = 0;
    }
  }
});

actions.resize = resize;
actions.names.push('resize');
utils.merge(Interactable.eventTypes, ['resizestart', 'resizemove', 'resizeinertiastart', 'resizeinertiaresume', 'resizeend']);
actions.methodDict.resize = 'resizable';

defaultOptions.resize = resize.defaults;

module.exports = resize;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/browser":36,"./base":6}],11:[function(require,module,exports){
'use strict';

var raf = require('./utils/raf');
var getWindow = require('./utils/window').getWindow;
var is = require('./utils/is');
var domUtils = require('./utils/domUtils');
var Interaction = require('./Interaction');
var defaultOptions = require('./defaultOptions');

var autoScroll = {
  defaults: {
    enabled: false,
    container: null, // the item that is scrolled (Window or HTMLElement)
    margin: 60,
    speed: 300 // the scroll speed in pixels per second
  },

  interaction: null,
  i: null, // the handle returned by window.setInterval
  x: 0, y: 0, // Direction each pulse is to scroll in

  isScrolling: false,
  prevTime: 0,

  start: function start(interaction) {
    autoScroll.isScrolling = true;
    raf.cancel(autoScroll.i);

    autoScroll.interaction = interaction;
    autoScroll.prevTime = new Date().getTime();
    autoScroll.i = raf.request(autoScroll.scroll);
  },

  stop: function stop() {
    autoScroll.isScrolling = false;
    raf.cancel(autoScroll.i);
  },

  // scroll the window by the values in scroll.x/y
  scroll: function scroll() {
    var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll;
    var container = options.container || getWindow(autoScroll.interaction.element);
    var now = new Date().getTime();
    // change in time in seconds
    var dt = (now - autoScroll.prevTime) / 1000;
    // displacement
    var s = options.speed * dt;

    if (s >= 1) {
      if (is.window(container)) {
        container.scrollBy(autoScroll.x * s, autoScroll.y * s);
      } else if (container) {
        container.scrollLeft += autoScroll.x * s;
        container.scrollTop += autoScroll.y * s;
      }

      autoScroll.prevTime = now;
    }

    if (autoScroll.isScrolling) {
      raf.cancel(autoScroll.i);
      autoScroll.i = raf.request(autoScroll.scroll);
    }
  },
  check: function check(interactable, actionName) {
    var options = interactable.options;

    return options[actionName].autoScroll && options[actionName].autoScroll.enabled;
  },
  onInteractionMove: function onInteractionMove(_ref) {
    var interaction = _ref.interaction,
        pointer = _ref.pointer;

    if (!(interaction.interacting() && autoScroll.check(interaction.target, interaction.prepared.name))) {
      return;
    }

    if (interaction.simulation) {
      autoScroll.x = autoScroll.y = 0;
      return;
    }

    var top = void 0;
    var right = void 0;
    var bottom = void 0;
    var left = void 0;

    var options = interaction.target.options[interaction.prepared.name].autoScroll;
    var container = options.container || getWindow(interaction.element);

    if (is.window(container)) {
      left = pointer.clientX < autoScroll.margin;
      top = pointer.clientY < autoScroll.margin;
      right = pointer.clientX > container.innerWidth - autoScroll.margin;
      bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
    } else {
      var rect = domUtils.getElementClientRect(container);

      left = pointer.clientX < rect.left + autoScroll.margin;
      top = pointer.clientY < rect.top + autoScroll.margin;
      right = pointer.clientX > rect.right - autoScroll.margin;
      bottom = pointer.clientY > rect.bottom - autoScroll.margin;
    }

    autoScroll.x = right ? 1 : left ? -1 : 0;
    autoScroll.y = bottom ? 1 : top ? -1 : 0;

    if (!autoScroll.isScrolling) {
      // set the autoScroll properties to those of the target
      autoScroll.margin = options.margin;
      autoScroll.speed = options.speed;

      autoScroll.start(interaction);
    }
  }
};

Interaction.signals.on('stop-active', function () {
  autoScroll.stop();
});

Interaction.signals.on('action-move', autoScroll.onInteractionMove);

defaultOptions.perAction.autoScroll = autoScroll.defaults;

module.exports = autoScroll;

},{"./Interaction":5,"./defaultOptions":18,"./utils/domUtils":39,"./utils/is":46,"./utils/raf":50,"./utils/window":52}],12:[function(require,module,exports){
'use strict';

/** @lends Interactable */
var Interactable = require('../Interactable');
var actions = require('../actions/base');
var is = require('../utils/is');
var domUtils = require('../utils/domUtils');

var _require = require('../utils'),
    warnOnce = _require.warnOnce;

Interactable.prototype.getAction = function (pointer, event, interaction, element) {
  var action = this.defaultActionChecker(pointer, event, interaction, element);

  if (this.options.actionChecker) {
    return this.options.actionChecker(pointer, event, action, this, element, interaction);
  }

  return action;
};

/**
 * ```js
 * interact(element, { ignoreFrom: document.getElementById('no-action') });
 * // or
 * interact(element).ignoreFrom('input, textarea, a');
 * ```
 * @deprecated
 * If the target of the `mousedown`, `pointerdown` or `touchstart` event or any
 * of it's parents match the given CSS selector or Element, no
 * drag/resize/gesture is started.
 *
 * Don't use this method. Instead set the `ignoreFrom` option for each action
 * or for `pointerEvents`
 *
 * @example
 * interact(targett)
 *   .draggable({
 *     ignoreFrom: 'input, textarea, a[href]'',
 *   })
 *   .pointerEvents({
 *     ignoreFrom: '[no-pointer]',
 *   });
 *
 * @param {string | Element | null} [newValue] a CSS selector string, an
 * Element or `null` to not ignore any elements
 * @return {string | Element | object} The current ignoreFrom value or this
 * Interactable
 */
Interactable.prototype.ignoreFrom = warnOnce(function (newValue) {
  return this._backCompatOption('ignoreFrom', newValue);
}, 'Interactable.ignoreForm() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).');

/**
 * ```js
 *
 * @deprecated
 * A drag/resize/gesture is started only If the target of the `mousedown`,
 * `pointerdown` or `touchstart` event or any of it's parents match the given
 * CSS selector or Element.
 *
 * Don't use this method. Instead set the `allowFrom` option for each action
 * or for `pointerEvents`
 *
 * @example
 * interact(targett)
 *   .resizable({
 *     allowFrom: '.resize-handle',
 *   .pointerEvents({
 *     allowFrom: '.handle',,
 *   });
 *
 * @param {string | Element | null} [newValue] a CSS selector string, an
 * Element or `null` to allow from any element
 * @return {string | Element | object} The current allowFrom value or this
 * Interactable
 */
Interactable.prototype.allowFrom = warnOnce(function (newValue) {
  return this._backCompatOption('allowFrom', newValue);
}, 'Interactable.allowForm() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).');

Interactable.prototype.testIgnore = function (ignoreFrom, interactableElement, element) {
  if (!ignoreFrom || !is.element(element)) {
    return false;
  }

  if (is.string(ignoreFrom)) {
    return domUtils.matchesUpTo(element, ignoreFrom, interactableElement);
  } else if (is.element(ignoreFrom)) {
    return domUtils.nodeContains(ignoreFrom, element);
  }

  return false;
};

Interactable.prototype.testAllow = function (allowFrom, interactableElement, element) {
  if (!allowFrom) {
    return true;
  }

  if (!is.element(element)) {
    return false;
  }

  if (is.string(allowFrom)) {
    return domUtils.matchesUpTo(element, allowFrom, interactableElement);
  } else if (is.element(allowFrom)) {
    return domUtils.nodeContains(allowFrom, element);
  }

  return false;
};

Interactable.prototype.testIgnoreAllow = function (options, interactableElement, eventTarget) {
  return !this.testIgnore(options.ignoreFrom, interactableElement, eventTarget) && this.testAllow(options.allowFrom, interactableElement, eventTarget);
};

/**
 * ```js
 * interact('.resize-drag')
 *   .resizable(true)
 *   .draggable(true)
 *   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
 *
 *   if (interact.matchesSelector(event.target, '.drag-handle') {
 *     // force drag with handle target
 *     action.name = drag;
 *   }
 *   else {
 *     // resize from the top and right edges
 *     action.name  = 'resize';
 *     action.edges = { top: true, right: true };
 *   }
 *
 *   return action;
 * });
 * ```
 *
 * Gets or sets the function used to check action to be performed on
 * pointerDown
 *
 * @param {function | null} [checker] A function which takes a pointer event,
 * defaultAction string, interactable, element and interaction as parameters
 * and returns an object with name property 'drag' 'resize' or 'gesture' and
 * optionally an `edges` object with boolean 'top', 'left', 'bottom' and right
 * props.
 * @return {Function | Interactable} The checker function or this Interactable
 */
Interactable.prototype.actionChecker = function (checker) {
  if (is.function(checker)) {
    this.options.actionChecker = checker;

    return this;
  }

  if (checker === null) {
    delete this.options.actionChecker;

    return this;
  }

  return this.options.actionChecker;
};

/**
 * Returns or sets whether the the cursor should be changed depending on the
 * action that would be performed if the mouse were pressed and dragged.
 *
 * @param {boolean} [newValue]
 * @return {boolean | Interactable} The current setting or this Interactable
 */
Interactable.prototype.styleCursor = function (newValue) {
  if (is.bool(newValue)) {
    this.options.styleCursor = newValue;

    return this;
  }

  if (newValue === null) {
    delete this.options.styleCursor;

    return this;
  }

  return this.options.styleCursor;
};

Interactable.prototype.defaultActionChecker = function (pointer, event, interaction, element) {
  var rect = this.getRect(element);
  var buttons = event.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[event.button];
  var action = null;

  for (var _i = 0; _i < actions.names.length; _i++) {
    var _ref;

    _ref = actions.names[_i];
    var actionName = _ref;

    // check mouseButton setting if the pointer is down
    if (interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & this.options[actionName].mouseButtons) === 0) {
      continue;
    }

    action = actions[actionName].checker(pointer, event, this, element, interaction, rect);

    if (action) {
      return action;
    }
  }
};

},{"../Interactable":4,"../actions/base":6,"../utils":44,"../utils/domUtils":39,"../utils/is":46}],13:[function(require,module,exports){
'use strict';

var interact = require('../interact');
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var actions = require('../actions/base');
var defaultOptions = require('../defaultOptions');
var scope = require('../scope');
var utils = require('../utils');
var signals = require('../utils/Signals').new();

require('./InteractableMethods');

var autoStart = {
  signals: signals,
  withinInteractionLimit: withinInteractionLimit,
  // Allow this many interactions to happen simultaneously
  maxInteractions: Infinity,
  defaults: {
    perAction: {
      manualStart: false,
      max: Infinity,
      maxPerElement: 1,
      allowFrom: null,
      ignoreFrom: null,

      // only allow left button by default
      // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
      mouseButtons: 1
    }
  },
  setActionDefaults: function setActionDefaults(action) {
    utils.extend(action.defaults, autoStart.defaults.perAction);
  },
  validateAction: validateAction
};

// set cursor style on mousedown
Interaction.signals.on('down', function (_ref) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget;

  if (interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget);
  prepare(interaction, actionInfo);
});

// set cursor style on mousemove
Interaction.signals.on('move', function (_ref2) {
  var interaction = _ref2.interaction,
      pointer = _ref2.pointer,
      event = _ref2.event,
      eventTarget = _ref2.eventTarget;

  if (interaction.pointerType !== 'mouse' || interaction.pointerIsDown || interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget);
  prepare(interaction, actionInfo);
});

Interaction.signals.on('move', function (arg) {
  var interaction = arg.interaction,
      event = arg.event;


  if (!interaction.pointerIsDown || interaction.interacting() || !interaction.pointerWasMoved || !interaction.prepared.name) {
    return;
  }

  signals.fire('before-start', arg);

  var target = interaction.target;

  if (interaction.prepared.name && target) {
    // check manualStart and interaction limit
    if (target.options[interaction.prepared.name].manualStart || !withinInteractionLimit(target, interaction.element, interaction.prepared)) {
      interaction.stop(event);
    } else {
      interaction.start(interaction.prepared, target, interaction.element);
    }
  }
});

// Check if the current target supports the action.
// If so, return the validated action. Otherwise, return null
function validateAction(action, interactable, element, eventTarget) {
  if (utils.is.object(action) && interactable.testIgnoreAllow(interactable.options[action.name], element, eventTarget) && interactable.options[action.name].enabled && withinInteractionLimit(interactable, element, action)) {
    return action;
  }

  return null;
}

function validateSelector(interaction, pointer, event, matches, matchElements, eventTarget) {
  for (var i = 0, len = matches.length; i < len; i++) {
    var match = matches[i];
    var matchElement = matchElements[i];
    var action = validateAction(match.getAction(pointer, event, interaction, matchElement), match, matchElement, eventTarget);

    if (action) {
      return {
        action: action,
        target: match,
        element: matchElement
      };
    }
  }

  return {};
}

function getActionInfo(interaction, pointer, event, eventTarget) {
  var matches = [];
  var matchElements = [];

  var element = eventTarget;

  function pushMatches(interactable) {
    matches.push(interactable);
    matchElements.push(element);
  }

  while (utils.is.element(element)) {
    matches = [];
    matchElements = [];

    scope.interactables.forEachMatch(element, pushMatches);

    var actionInfo = validateSelector(interaction, pointer, event, matches, matchElements, eventTarget);

    if (actionInfo.action && !actionInfo.target.options[actionInfo.action.name].manualStart) {
      return actionInfo;
    }

    element = utils.parentNode(element);
  }

  return {};
}

function prepare(interaction, _ref3) {
  var action = _ref3.action,
      target = _ref3.target,
      element = _ref3.element;

  action = action || {};

  if (interaction.target && interaction.target.options.styleCursor) {
    interaction.target._doc.documentElement.style.cursor = '';
  }

  interaction.target = target;
  interaction.element = element;
  utils.copyAction(interaction.prepared, action);

  if (target && target.options.styleCursor) {
    var cursor = action ? actions[action.name].getCursor(action) : '';
    interaction.target._doc.documentElement.style.cursor = cursor;
  }

  signals.fire('prepared', { interaction: interaction });
}

Interaction.signals.on('stop', function (_ref4) {
  var interaction = _ref4.interaction;

  var target = interaction.target;

  if (target && target.options.styleCursor) {
    target._doc.documentElement.style.cursor = '';
  }
});

function withinInteractionLimit(interactable, element, action) {
  var options = interactable.options;
  var maxActions = options[action.name].max;
  var maxPerElement = options[action.name].maxPerElement;
  var activeInteractions = 0;
  var targetCount = 0;
  var targetElementCount = 0;

  // no actions if any of these values == 0
  if (!(maxActions && maxPerElement && autoStart.maxInteractions)) {
    return;
  }

  for (var _i = 0; _i < scope.interactions.length; _i++) {
    var _ref5;

    _ref5 = scope.interactions[_i];
    var interaction = _ref5;

    var otherAction = interaction.prepared.name;

    if (!interaction.interacting()) {
      continue;
    }

    activeInteractions++;

    if (activeInteractions >= autoStart.maxInteractions) {
      return false;
    }

    if (interaction.target !== interactable) {
      continue;
    }

    targetCount += otherAction === action.name | 0;

    if (targetCount >= maxActions) {
      return false;
    }

    if (interaction.element === element) {
      targetElementCount++;

      if (otherAction !== action.name || targetElementCount >= maxPerElement) {
        return false;
      }
    }
  }

  return autoStart.maxInteractions > 0;
}

/**
 * Returns or sets the maximum number of concurrent interactions allowed.  By
 * default only 1 interaction is allowed at a time (for backwards
 * compatibility). To allow multiple interactions on the same Interactables and
 * elements, you need to enable it in the draggable, resizable and gesturable
 * `'max'` and `'maxPerElement'` options.
 *
 * @alias module:interact.maxInteractions
 *
 * @param {number} [newValue] Any number. newValue <= 0 means no interactions.
 */
interact.maxInteractions = function (newValue) {
  if (utils.is.number(newValue)) {
    autoStart.maxInteractions = newValue;

    return interact;
  }

  return autoStart.maxInteractions;
};

Interactable.settingsMethods.push('styleCursor');
Interactable.settingsMethods.push('actionChecker');
Interactable.settingsMethods.push('ignoreFrom');
Interactable.settingsMethods.push('allowFrom');

defaultOptions.base.actionChecker = null;
defaultOptions.base.styleCursor = true;

utils.extend(defaultOptions.perAction, autoStart.defaults.perAction);

module.exports = autoStart;

},{"../Interactable":4,"../Interaction":5,"../actions/base":6,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"../utils/Signals":34,"./InteractableMethods":12}],14:[function(require,module,exports){
'use strict';

var autoStart = require('./base');
var scope = require('../scope');
var is = require('../utils/is');

var _require = require('../utils/domUtils'),
    parentNode = _require.parentNode;

autoStart.setActionDefaults(require('../actions/drag'));

autoStart.signals.on('before-start', function (_ref) {
  var interaction = _ref.interaction,
      eventTarget = _ref.eventTarget,
      dx = _ref.dx,
      dy = _ref.dy;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  // check if a drag is in the correct axis
  var absX = Math.abs(dx);
  var absY = Math.abs(dy);
  var targetOptions = interaction.target.options.drag;
  var startAxis = targetOptions.startAxis;
  var currentAxis = absX > absY ? 'x' : absX < absY ? 'y' : 'xy';

  interaction.prepared.axis = targetOptions.lockAxis === 'start' ? currentAxis[0] // always lock to one axis even if currentAxis === 'xy'
  : targetOptions.lockAxis;

  // if the movement isn't in the startAxis of the interactable
  if (currentAxis !== 'xy' && startAxis !== 'xy' && startAxis !== currentAxis) {
    // cancel the prepared action
    interaction.prepared.name = null;

    // then try to get a drag from another ineractable
    var element = eventTarget;

    var getDraggable = function getDraggable(interactable) {
      if (interactable === interaction.target) {
        return;
      }

      var options = interaction.target.options.drag;

      if (!options.manualStart && interactable.testIgnoreAllow(options, element, eventTarget)) {

        var action = interactable.getAction(interaction.downPointer, interaction.downEvent, interaction, element);

        if (action && action.name === 'drag' && checkStartAxis(currentAxis, interactable) && autoStart.validateAction(action, interactable, element, eventTarget)) {

          return interactable;
        }
      }
    };

    // check all interactables
    while (is.element(element)) {
      var interactable = scope.interactables.forEachMatch(element, getDraggable);

      if (interactable) {
        interaction.prepared.name = 'drag';
        interaction.target = interactable;
        interaction.element = element;
        break;
      }

      element = parentNode(element);
    }
  }
});

function checkStartAxis(startAxis, interactable) {
  if (!interactable) {
    return false;
  }

  var thisAxis = interactable.options.drag.startAxis;

  return startAxis === 'xy' || thisAxis === 'xy' || thisAxis === startAxis;
}

},{"../actions/drag":7,"../scope":33,"../utils/domUtils":39,"../utils/is":46,"./base":13}],15:[function(require,module,exports){
'use strict';

require('./base').setActionDefaults(require('../actions/gesture'));

},{"../actions/gesture":9,"./base":13}],16:[function(require,module,exports){
'use strict';

var autoStart = require('./base');
var Interaction = require('../Interaction');

autoStart.defaults.perAction.hold = 0;
autoStart.defaults.perAction.delay = 0;

Interaction.signals.on('new', function (interaction) {
  interaction.autoStartHoldTimer = null;
});

autoStart.signals.on('prepared', function (_ref) {
  var interaction = _ref.interaction;

  var hold = getHoldDuration(interaction);

  if (hold > 0) {
    interaction.autoStartHoldTimer = setTimeout(function () {
      interaction.start(interaction.prepared, interaction.target, interaction.element);
    }, hold);
  }
});

Interaction.signals.on('move', function (_ref2) {
  var interaction = _ref2.interaction,
      duplicate = _ref2.duplicate;

  if (interaction.pointerWasMoved && !duplicate) {
    clearTimeout(interaction.autoStartHoldTimer);
  }
});

// prevent regular down->move autoStart
autoStart.signals.on('before-start', function (_ref3) {
  var interaction = _ref3.interaction;

  var hold = getHoldDuration(interaction);

  if (hold > 0) {
    interaction.prepared.name = null;
  }
});

function getHoldDuration(interaction) {
  var actionName = interaction.prepared && interaction.prepared.name;

  if (!actionName) {
    return null;
  }

  var options = interaction.target.options;

  return options[actionName].hold || options[actionName].delay;
}

module.exports = {
  getHoldDuration: getHoldDuration
};

},{"../Interaction":5,"./base":13}],17:[function(require,module,exports){
'use strict';

require('./base').setActionDefaults(require('../actions/resize'));

},{"../actions/resize":10,"./base":13}],18:[function(require,module,exports){
'use strict';

module.exports = {
  base: {
    accept: null,
    preventDefault: 'auto',
    deltaSource: 'page'
  },

  perAction: {
    origin: { x: 0, y: 0 },

    inertia: {
      enabled: false,
      resistance: 10, // the lambda in exponential decay
      minSpeed: 100, // target speed must be above this for inertia to start
      endSpeed: 10, // the speed at which inertia is slow enough to stop
      allowResume: true, // allow resuming an action in inertia phase
      smoothEndDuration: 300 // animate to snap/restrict endOnly if there's no inertia
    }
  }
};

},{}],19:[function(require,module,exports){
'use strict';

/* browser entry point */

// inertia
require('./inertia');

// modifiers
require('./modifiers/snap');
require('./modifiers/restrict');

// pointerEvents
require('./pointerEvents/base');
require('./pointerEvents/holdRepeat');
require('./pointerEvents/interactableTargets');

// autoStart hold
require('./autoStart/hold');

// actions
require('./actions/gesture');
require('./actions/resize');
require('./actions/drag');
require('./actions/drop');

// load these modifiers after resize is loaded
require('./modifiers/snapSize');
require('./modifiers/restrictEdges');
require('./modifiers/restrictSize');

// autoStart actions
require('./autoStart/gesture');
require('./autoStart/resize');
require('./autoStart/drag');

// Interactable preventDefault setting
require('./interactablePreventDefault.js');

// autoScroll
require('./autoScroll');

// export interact
module.exports = require('./interact');

},{"./actions/drag":7,"./actions/drop":8,"./actions/gesture":9,"./actions/resize":10,"./autoScroll":11,"./autoStart/drag":14,"./autoStart/gesture":15,"./autoStart/hold":16,"./autoStart/resize":17,"./inertia":20,"./interact":21,"./interactablePreventDefault.js":22,"./modifiers/restrict":24,"./modifiers/restrictEdges":25,"./modifiers/restrictSize":26,"./modifiers/snap":27,"./modifiers/snapSize":28,"./pointerEvents/base":30,"./pointerEvents/holdRepeat":31,"./pointerEvents/interactableTargets":32}],20:[function(require,module,exports){
'use strict';

var InteractEvent = require('./InteractEvent');
var Interaction = require('./Interaction');
var modifiers = require('./modifiers/base');
var utils = require('./utils');
var animationFrame = require('./utils/raf');

Interaction.signals.on('new', function (interaction) {
  interaction.inertiaStatus = {
    active: false,
    smoothEnd: false,
    allowResume: false,

    startEvent: null,
    upCoords: {},

    xe: 0, ye: 0,
    sx: 0, sy: 0,

    t0: 0,
    vx0: 0, vys: 0,
    duration: 0,

    lambda_v0: 0,
    one_ve_v0: 0,
    i: null
  };

  interaction.boundInertiaFrame = function () {
    return inertiaFrame.apply(interaction);
  };
  interaction.boundSmoothEndFrame = function () {
    return smoothEndFrame.apply(interaction);
  };
});

Interaction.signals.on('down', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event,
      pointer = _ref.pointer,
      eventTarget = _ref.eventTarget;

  var status = interaction.inertiaStatus;

  // Check if the down event hits the current inertia target
  if (status.active) {
    var element = eventTarget;

    // climb up the DOM tree from the event target
    while (utils.is.element(element)) {

      // if interaction element is the current inertia target element
      if (element === interaction.element) {
        // stop inertia
        animationFrame.cancel(status.i);
        status.active = false;
        interaction.simulation = null;

        // update pointers to the down event's coordinates
        interaction.updatePointer(pointer);
        utils.setCoords(interaction.curCoords, interaction.pointers);

        // fire appropriate signals
        var signalArg = { interaction: interaction };
        Interaction.signals.fire('before-action-move', signalArg);
        Interaction.signals.fire('action-resume', signalArg);

        // fire a reume event
        var resumeEvent = new InteractEvent(interaction, event, interaction.prepared.name, 'inertiaresume', interaction.element);

        interaction.target.fire(resumeEvent);
        interaction.prevEvent = resumeEvent;
        modifiers.resetStatuses(interaction.modifierStatuses);

        utils.copyCoords(interaction.prevCoords, interaction.curCoords);
        break;
      }

      element = utils.parentNode(element);
    }
  }
});

Interaction.signals.on('up', function (_ref2) {
  var interaction = _ref2.interaction,
      event = _ref2.event;

  var status = interaction.inertiaStatus;

  if (!interaction.interacting() || status.active) {
    return;
  }

  var target = interaction.target;
  var options = target && target.options;
  var inertiaOptions = options && interaction.prepared.name && options[interaction.prepared.name].inertia;

  var now = new Date().getTime();
  var statuses = {};
  var page = utils.extend({}, interaction.curCoords.page);
  var pointerSpeed = interaction.pointerDelta.client.speed;

  var smoothEnd = false;
  var modifierResult = void 0;

  // check if inertia should be started
  var inertiaPossible = inertiaOptions && inertiaOptions.enabled && interaction.prepared.name !== 'gesture' && event !== status.startEvent;

  var inertia = inertiaPossible && now - interaction.curCoords.timeStamp < 50 && pointerSpeed > inertiaOptions.minSpeed && pointerSpeed > inertiaOptions.endSpeed;

  var modifierArg = {
    interaction: interaction,
    pageCoords: page,
    statuses: statuses,
    preEnd: true,
    requireEndOnly: true
  };

  // smoothEnd
  if (inertiaPossible && !inertia) {
    modifiers.resetStatuses(statuses);

    modifierResult = modifiers.setAll(modifierArg);

    if (modifierResult.shouldMove && modifierResult.locked) {
      smoothEnd = true;
    }
  }

  if (!(inertia || smoothEnd)) {
    return;
  }

  utils.copyCoords(status.upCoords, interaction.curCoords);

  interaction.pointers[0] = status.startEvent = new InteractEvent(interaction, event, interaction.prepared.name, 'inertiastart', interaction.element);

  status.t0 = now;

  status.active = true;
  status.allowResume = inertiaOptions.allowResume;
  interaction.simulation = status;

  target.fire(status.startEvent);

  if (inertia) {
    status.vx0 = interaction.pointerDelta.client.vx;
    status.vy0 = interaction.pointerDelta.client.vy;
    status.v0 = pointerSpeed;

    calcInertia(interaction, status);

    utils.extend(page, interaction.curCoords.page);

    page.x += status.xe;
    page.y += status.ye;

    modifiers.resetStatuses(statuses);

    modifierResult = modifiers.setAll(modifierArg);

    status.modifiedXe += modifierResult.dx;
    status.modifiedYe += modifierResult.dy;

    status.i = animationFrame.request(interaction.boundInertiaFrame);
  } else {
    status.smoothEnd = true;
    status.xe = modifierResult.dx;
    status.ye = modifierResult.dy;

    status.sx = status.sy = 0;

    status.i = animationFrame.request(interaction.boundSmoothEndFrame);
  }
});

Interaction.signals.on('stop-active', function (_ref3) {
  var interaction = _ref3.interaction;

  var status = interaction.inertiaStatus;

  if (status.active) {
    animationFrame.cancel(status.i);
    status.active = false;
    interaction.simulation = null;
  }
});

function calcInertia(interaction, status) {
  var inertiaOptions = interaction.target.options[interaction.prepared.name].inertia;
  var lambda = inertiaOptions.resistance;
  var inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;

  status.x0 = interaction.prevEvent.pageX;
  status.y0 = interaction.prevEvent.pageY;
  status.t0 = status.startEvent.timeStamp / 1000;
  status.sx = status.sy = 0;

  status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
  status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
  status.te = inertiaDur;

  status.lambda_v0 = lambda / status.v0;
  status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
}

function inertiaFrame() {
  updateInertiaCoords(this);
  utils.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

  var status = this.inertiaStatus;
  var options = this.target.options[this.prepared.name].inertia;
  var lambda = options.resistance;
  var t = new Date().getTime() / 1000 - status.t0;

  if (t < status.te) {

    var progress = 1 - (Math.exp(-lambda * t) - status.lambda_v0) / status.one_ve_v0;

    if (status.modifiedXe === status.xe && status.modifiedYe === status.ye) {
      status.sx = status.xe * progress;
      status.sy = status.ye * progress;
    } else {
      var quadPoint = utils.getQuadraticCurvePoint(0, 0, status.xe, status.ye, status.modifiedXe, status.modifiedYe, progress);

      status.sx = quadPoint.x;
      status.sy = quadPoint.y;
    }

    this.doMove();

    status.i = animationFrame.request(this.boundInertiaFrame);
  } else {
    status.sx = status.modifiedXe;
    status.sy = status.modifiedYe;

    this.doMove();
    this.end(status.startEvent);
    status.active = false;
    this.simulation = null;
  }

  utils.copyCoords(this.prevCoords, this.curCoords);
}

function smoothEndFrame() {
  updateInertiaCoords(this);

  var status = this.inertiaStatus;
  var t = new Date().getTime() - status.t0;
  var duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;

  if (t < duration) {
    status.sx = utils.easeOutQuad(t, 0, status.xe, duration);
    status.sy = utils.easeOutQuad(t, 0, status.ye, duration);

    this.pointerMove(status.startEvent, status.startEvent);

    status.i = animationFrame.request(this.boundSmoothEndFrame);
  } else {
    status.sx = status.xe;
    status.sy = status.ye;

    this.pointerMove(status.startEvent, status.startEvent);
    this.end(status.startEvent);

    status.smoothEnd = status.active = false;
    this.simulation = null;
  }
}

function updateInertiaCoords(interaction) {
  var status = interaction.inertiaStatus;

  // return if inertia isn't running
  if (!status.active) {
    return;
  }

  var pageUp = status.upCoords.page;
  var clientUp = status.upCoords.client;

  utils.setCoords(interaction.curCoords, [{
    pageX: pageUp.x + status.sx,
    pageY: pageUp.y + status.sy,
    clientX: clientUp.x + status.sx,
    clientY: clientUp.y + status.sy
  }]);
}

},{"./InteractEvent":3,"./Interaction":5,"./modifiers/base":23,"./utils":44,"./utils/raf":50}],21:[function(require,module,exports){
'use strict';

/** @module interact */

var browser = require('./utils/browser');
var events = require('./utils/events');
var utils = require('./utils');
var scope = require('./scope');
var Interactable = require('./Interactable');
var Interaction = require('./Interaction');

var globalEvents = {};

/**
 * ```js
 * interact('#draggable').draggable(true);
 *
 * var rectables = interact('rect');
 * rectables
 *   .gesturable(true)
 *   .on('gesturemove', function (event) {
 *       // ...
 *   });
 * ```
 *
 * The methods of this variable can be used to set elements as interactables
 * and also to change various default settings.
 *
 * Calling it as a function and passing an element or a valid CSS selector
 * string returns an Interactable object which has various methods to configure
 * it.
 *
 * @global
 *
 * @param {Element | string} element The HTML or SVG Element to interact with
 * or CSS selector
 * @return {Interactable}
 */
function interact(element, options) {
  var interactable = scope.interactables.get(element, options);

  if (!interactable) {
    interactable = new Interactable(element, options);
    interactable.events.global = globalEvents;
  }

  return interactable;
}

/**
 * Check if an element or selector has been set with the {@link interact}
 * function
 *
 * @alias module:interact.isSet
 *
 * @param {Element} element The Element being searched for
 * @return {boolean} Indicates if the element or CSS selector was previously
 * passed to interact
*/
interact.isSet = function (element, options) {
  return scope.interactables.indexOfElement(element, options && options.context) !== -1;
};

/**
 * Add a global listener for an InteractEvent or adds a DOM event to `document`
 *
 * @alias module:interact.on
 *
 * @param {string | array | object} type The types of events to listen for
 * @param {function} listener The function event (s)
 * @param {object | boolean} [options] object or useCapture flag for
 * addEventListener
 * @return {object} interact
 */
interact.on = function (type, listener, options) {
  if (utils.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (utils.is.array(type)) {
    for (var _i = 0; _i < type.length; _i++) {
      var _ref;

      _ref = type[_i];
      var eventType = _ref;

      interact.on(eventType, listener, options);
    }

    return interact;
  }

  if (utils.is.object(type)) {
    for (var prop in type) {
      interact.on(prop, type[prop], listener);
    }

    return interact;
  }

  // if it is an InteractEvent type, add listener to globalEvents
  if (utils.contains(Interactable.eventTypes, type)) {
    // if this type of event was never bound
    if (!globalEvents[type]) {
      globalEvents[type] = [listener];
    } else {
      globalEvents[type].push(listener);
    }
  }
  // If non InteractEvent type, addEventListener to document
  else {
      events.add(scope.document, type, listener, { options: options });
    }

  return interact;
};

/**
 * Removes a global InteractEvent listener or DOM event from `document`
 *
 * @alias module:interact.off
 *
 * @param {string | array | object} type The types of events that were listened
 * for
 * @param {function} listener The listener function to be removed
 * @param {object | boolean} options [options] object or useCapture flag for
 * removeEventListener
 * @return {object} interact
 */
interact.off = function (type, listener, options) {
  if (utils.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (utils.is.array(type)) {
    for (var _i2 = 0; _i2 < type.length; _i2++) {
      var _ref2;

      _ref2 = type[_i2];
      var eventType = _ref2;

      interact.off(eventType, listener, options);
    }

    return interact;
  }

  if (utils.is.object(type)) {
    for (var prop in type) {
      interact.off(prop, type[prop], listener);
    }

    return interact;
  }

  if (!utils.contains(Interactable.eventTypes, type)) {
    events.remove(scope.document, type, listener, options);
  } else {
    var index = void 0;

    if (type in globalEvents && (index = globalEvents[type].indexOf(listener)) !== -1) {
      globalEvents[type].splice(index, 1);
    }
  }

  return interact;
};

/**
 * Returns an object which exposes internal data

 * @alias module:interact.debug
 *
 * @return {object} An object with properties that outline the current state
 * and expose internal functions and variables
 */
interact.debug = function () {
  return scope;
};

// expose the functions used to calculate multi-touch properties
interact.getPointerAverage = utils.pointerAverage;
interact.getTouchBBox = utils.touchBBox;
interact.getTouchDistance = utils.touchDistance;
interact.getTouchAngle = utils.touchAngle;

interact.getElementRect = utils.getElementRect;
interact.getElementClientRect = utils.getElementClientRect;
interact.matchesSelector = utils.matchesSelector;
interact.closest = utils.closest;

/**
 * @alias module:interact.supportsTouch
 *
 * @return {boolean} Whether or not the browser supports touch input
 */
interact.supportsTouch = function () {
  return browser.supportsTouch;
};

/**
 * @alias module:interact.supportsPointerEvent
 *
 * @return {boolean} Whether or not the browser supports PointerEvents
 */
interact.supportsPointerEvent = function () {
  return browser.supportsPointerEvent;
};

/**
 * Cancels all interactions (end events are not fired)
 *
 * @alias module:interact.stop
 *
 * @param {Event} event An event on which to call preventDefault()
 * @return {object} interact
 */
interact.stop = function (event) {
  for (var i = scope.interactions.length - 1; i >= 0; i--) {
    scope.interactions[i].stop(event);
  }

  return interact;
};

/**
 * Returns or sets the distance the pointer must be moved before an action
 * sequence occurs. This also affects tolerance for tap events.
 *
 * @alias module:interact.pointerMoveTolerance
 *
 * @param {number} [newValue] The movement from the start position must be greater than this value
 * @return {interact | number}
 */
interact.pointerMoveTolerance = function (newValue) {
  if (utils.is.number(newValue)) {
    Interaction.pointerMoveTolerance = newValue;

    return interact;
  }

  return Interaction.pointerMoveTolerance;
};

interact.addDocument = scope.addDocument;
interact.removeDocument = scope.removeDocument;

scope.interact = interact;

module.exports = interact;

},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils":44,"./utils/browser":36,"./utils/events":40}],22:[function(require,module,exports){
'use strict';

var Interactable = require('./Interactable');
var Interaction = require('./Interaction');
var scope = require('./scope');
var is = require('./utils/is');
var events = require('./utils/events');
var browser = require('./utils/browser');

var _require = require('./utils/domUtils'),
    nodeContains = _require.nodeContains,
    matchesSelector = _require.matchesSelector;

/**
 * Returns or sets whether to prevent the browser's default behaviour in
 * response to pointer events. Can be set to:
 *  - `'always'` to always prevent
 *  - `'never'` to never prevent
 *  - `'auto'` to let interact.js try to determine what would be best
 *
 * @param {string} [newValue] `true`, `false` or `'auto'`
 * @return {string | Interactable} The current setting or this Interactable
 */


Interactable.prototype.preventDefault = function (newValue) {
  if (/^(always|never|auto)$/.test(newValue)) {
    this.options.preventDefault = newValue;
    return this;
  }

  if (is.bool(newValue)) {
    this.options.preventDefault = newValue ? 'always' : 'never';
    return this;
  }

  return this.options.preventDefault;
};

Interactable.prototype.checkAndPreventDefault = function (event) {
  var setting = this.options.preventDefault;

  if (setting === 'never') {
    return;
  }

  if (setting === 'always') {
    event.preventDefault();
    return;
  }

  // setting === 'auto'

  // don't preventDefault of touch{start,move} events if the browser supports passive
  // events listeners. CSS touch-action and user-selecct should be used instead
  if (events.supportsPassive && /^touch(start|move)$/.test(event.type) && !browser.isIOS) {
    return;
  }

  // don't preventDefault of pointerdown events
  if (/^(mouse|pointer|touch)*(down|start)/i.test(event.type)) {
    return;
  }

  // don't preventDefault on editable elements
  if (is.element(event.target) && matchesSelector(event.target, 'input,select,textarea,[contenteditable=true],[contenteditable=true] *')) {
    return;
  }

  event.preventDefault();
};

function onInteractionEvent(_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  if (interaction.target) {
    interaction.target.checkAndPreventDefault(event);
  }
}

var _arr = ['down', 'move', 'up', 'cancel'];
for (var _i = 0; _i < _arr.length; _i++) {
  var eventSignal = _arr[_i];
  Interaction.signals.on(eventSignal, onInteractionEvent);
}

// prevent native HTML5 drag on interact.js target elements
Interaction.docEvents.dragstart = function preventNativeDrag(event) {
  for (var _i2 = 0; _i2 < scope.interactions.length; _i2++) {
    var _ref2;

    _ref2 = scope.interactions[_i2];
    var interaction = _ref2;


    if (interaction.element && (interaction.element === event.target || nodeContains(interaction.element, event.target))) {

      interaction.target.checkAndPreventDefault(event);
      return;
    }
  }
};

},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils/browser":36,"./utils/domUtils":39,"./utils/events":40,"./utils/is":46}],23:[function(require,module,exports){
'use strict';

var InteractEvent = require('../InteractEvent');
var Interaction = require('../Interaction');
var extend = require('../utils/extend');

var modifiers = {
  names: [],

  setOffsets: function setOffsets(arg) {
    var interaction = arg.interaction,
        page = arg.pageCoords;
    var target = interaction.target,
        element = interaction.element,
        startOffset = interaction.startOffset;

    var rect = target.getRect(element);

    if (rect) {
      startOffset.left = page.x - rect.left;
      startOffset.top = page.y - rect.top;

      startOffset.right = rect.right - page.x;
      startOffset.bottom = rect.bottom - page.y;

      if (!('width' in rect)) {
        rect.width = rect.right - rect.left;
      }
      if (!('height' in rect)) {
        rect.height = rect.bottom - rect.top;
      }
    } else {
      startOffset.left = startOffset.top = startOffset.right = startOffset.bottom = 0;
    }

    arg.rect = rect;
    arg.interactable = target;
    arg.element = element;

    for (var _i = 0; _i < modifiers.names.length; _i++) {
      var _ref;

      _ref = modifiers.names[_i];
      var modifierName = _ref;

      arg.options = target.options[interaction.prepared.name][modifierName];

      if (!arg.options) {
        continue;
      }

      interaction.modifierOffsets[modifierName] = modifiers[modifierName].setOffset(arg);
    }
  },

  setAll: function setAll(arg) {
    var interaction = arg.interaction,
        statuses = arg.statuses,
        preEnd = arg.preEnd,
        requireEndOnly = arg.requireEndOnly;

    var result = {
      dx: 0,
      dy: 0,
      changed: false,
      locked: false,
      shouldMove: true
    };

    arg.modifiedCoords = extend({}, arg.pageCoords);

    for (var _i2 = 0; _i2 < modifiers.names.length; _i2++) {
      var _ref2;

      _ref2 = modifiers.names[_i2];
      var modifierName = _ref2;

      var modifier = modifiers[modifierName];
      var options = interaction.target.options[interaction.prepared.name][modifierName];

      if (!shouldDo(options, preEnd, requireEndOnly)) {
        continue;
      }

      arg.status = arg.status = statuses[modifierName];
      arg.options = options;
      arg.offset = arg.interaction.modifierOffsets[modifierName];

      modifier.set(arg);

      if (arg.status.locked) {
        arg.modifiedCoords.x += arg.status.dx;
        arg.modifiedCoords.y += arg.status.dy;

        result.dx += arg.status.dx;
        result.dy += arg.status.dy;

        result.locked = true;
      }
    }

    // a move should be fired if:
    //  - there are no modifiers enabled,
    //  - no modifiers are "locked" i.e. have changed the pointer's coordinates, or
    //  - the locked coords have changed since the last pointer move
    result.shouldMove = !arg.status || !result.locked || arg.status.changed;

    return result;
  },

  resetStatuses: function resetStatuses(statuses) {
    for (var _i3 = 0; _i3 < modifiers.names.length; _i3++) {
      var _ref3;

      _ref3 = modifiers.names[_i3];
      var modifierName = _ref3;

      var status = statuses[modifierName] || {};

      status.dx = status.dy = 0;
      status.modifiedX = status.modifiedY = NaN;
      status.locked = false;
      status.changed = true;

      statuses[modifierName] = status;
    }

    return statuses;
  },

  start: function start(_ref4, signalName) {
    var interaction = _ref4.interaction;

    var arg = {
      interaction: interaction,
      pageCoords: (signalName === 'action-resume' ? interaction.curCoords : interaction.startCoords).page,
      startOffset: interaction.startOffset,
      statuses: interaction.modifierStatuses,
      preEnd: false,
      requireEndOnly: false
    };

    modifiers.setOffsets(arg);
    modifiers.resetStatuses(arg.statuses);

    arg.pageCoords = extend({}, interaction.startCoords.page);
    interaction.modifierResult = modifiers.setAll(arg);
  },

  beforeMove: function beforeMove(_ref5) {
    var interaction = _ref5.interaction,
        preEnd = _ref5.preEnd,
        interactingBeforeMove = _ref5.interactingBeforeMove;

    var modifierResult = modifiers.setAll({
      interaction: interaction,
      preEnd: preEnd,
      pageCoords: interaction.curCoords.page,
      statuses: interaction.modifierStatuses,
      requireEndOnly: false
    });

    // don't fire an action move if a modifier would keep the event in the same
    // cordinates as before
    if (!modifierResult.shouldMove && interactingBeforeMove) {
      interaction._dontFireMove = true;
    }

    interaction.modifierResult = modifierResult;
  },

  end: function end(_ref6) {
    var interaction = _ref6.interaction,
        event = _ref6.event;

    for (var _i4 = 0; _i4 < modifiers.names.length; _i4++) {
      var _ref7;

      _ref7 = modifiers.names[_i4];
      var modifierName = _ref7;

      var options = interaction.target.options[interaction.prepared.name][modifierName];

      // if the endOnly option is true for any modifier
      if (shouldDo(options, true, true)) {
        // fire a move event at the modified coordinates
        interaction.doMove({ event: event, preEnd: true });
        break;
      }
    }
  },

  setXY: function setXY(arg) {
    var iEvent = arg.iEvent,
        interaction = arg.interaction;

    var modifierArg = extend({}, arg);

    for (var i = 0; i < modifiers.names.length; i++) {
      var modifierName = modifiers.names[i];
      modifierArg.options = interaction.target.options[interaction.prepared.name][modifierName];

      if (!modifierArg.options) {
        continue;
      }

      var modifier = modifiers[modifierName];

      modifierArg.status = interaction.modifierStatuses[modifierName];

      iEvent[modifierName] = modifier.modifyCoords(modifierArg);
    }
  }
};

Interaction.signals.on('new', function (interaction) {
  interaction.startOffset = { left: 0, right: 0, top: 0, bottom: 0 };
  interaction.modifierOffsets = {};
  interaction.modifierStatuses = modifiers.resetStatuses({});
  interaction.modifierResult = null;
});

Interaction.signals.on('action-start', modifiers.start);
Interaction.signals.on('action-resume', modifiers.start);
Interaction.signals.on('before-action-move', modifiers.beforeMove);
Interaction.signals.on('action-end', modifiers.end);

InteractEvent.signals.on('set-xy', modifiers.setXY);

function shouldDo(options, preEnd, requireEndOnly) {
  return options && options.enabled && (preEnd || !options.endOnly) && (!requireEndOnly || options.endOnly);
}

module.exports = modifiers;

},{"../InteractEvent":3,"../Interaction":5,"../utils/extend":41}],24:[function(require,module,exports){
'use strict';

var modifiers = require('./base');
var utils = require('../utils');
var defaultOptions = require('../defaultOptions');

var restrict = {
  defaults: {
    enabled: false,
    endOnly: false,
    restriction: null,
    elementRect: null
  },

  setOffset: function setOffset(_ref) {
    var rect = _ref.rect,
        startOffset = _ref.startOffset,
        options = _ref.options;

    var elementRect = options && options.elementRect;
    var offset = {};

    if (rect && elementRect) {
      offset.left = startOffset.left - rect.width * elementRect.left;
      offset.top = startOffset.top - rect.height * elementRect.top;

      offset.right = startOffset.right - rect.width * (1 - elementRect.right);
      offset.bottom = startOffset.bottom - rect.height * (1 - elementRect.bottom);
    } else {
      offset.left = offset.top = offset.right = offset.bottom = 0;
    }

    return offset;
  },

  set: function set(_ref2) {
    var modifiedCoords = _ref2.modifiedCoords,
        interaction = _ref2.interaction,
        status = _ref2.status,
        options = _ref2.options;

    if (!options) {
      return status;
    }

    var page = status.useStatusXY ? { x: status.x, y: status.y } : utils.extend({}, modifiedCoords);

    var restriction = getRestrictionRect(options.restriction, interaction, page);

    if (!restriction) {
      return status;
    }

    status.dx = 0;
    status.dy = 0;
    status.locked = false;

    var rect = restriction;
    var modifiedX = page.x;
    var modifiedY = page.y;

    var offset = interaction.modifierOffsets.restrict;

    // object is assumed to have
    // x, y, width, height or
    // left, top, right, bottom
    if ('x' in restriction && 'y' in restriction) {
      modifiedX = Math.max(Math.min(rect.x + rect.width - offset.right, page.x), rect.x + offset.left);
      modifiedY = Math.max(Math.min(rect.y + rect.height - offset.bottom, page.y), rect.y + offset.top);
    } else {
      modifiedX = Math.max(Math.min(rect.right - offset.right, page.x), rect.left + offset.left);
      modifiedY = Math.max(Math.min(rect.bottom - offset.bottom, page.y), rect.top + offset.top);
    }

    status.dx = modifiedX - page.x;
    status.dy = modifiedY - page.y;

    status.changed = status.modifiedX !== modifiedX || status.modifiedY !== modifiedY;
    status.locked = !!(status.dx || status.dy);

    status.modifiedX = modifiedX;
    status.modifiedY = modifiedY;
  },

  modifyCoords: function modifyCoords(_ref3) {
    var page = _ref3.page,
        client = _ref3.client,
        status = _ref3.status,
        phase = _ref3.phase,
        options = _ref3.options;

    var elementRect = options && options.elementRect;

    if (options && options.enabled && !(phase === 'start' && elementRect && status.locked)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;

        return {
          dx: status.dx,
          dy: status.dy
        };
      }
    }
  },

  getRestrictionRect: getRestrictionRect
};

function getRestrictionRect(value, interaction, page) {
  if (utils.is.function(value)) {
    return utils.resolveRectLike(value, interaction.target, interaction.element, [page.x, page.y, interaction]);
  } else {
    return utils.resolveRectLike(value, interaction.target, interaction.element);
  }
}

modifiers.restrict = restrict;
modifiers.names.push('restrict');

defaultOptions.perAction.restrict = restrict.defaults;

module.exports = restrict;

},{"../defaultOptions":18,"../utils":44,"./base":23}],25:[function(require,module,exports){
'use strict';

// This module adds the options.resize.restrictEdges setting which sets min and
// max for the top, left, bottom and right edges of the target being resized.
//
// interact(target).resize({
//   edges: { top: true, left: true },
//   restrictEdges: {
//     inner: { top: 200, left: 200, right: 400, bottom: 400 },
//     outer: { top:   0, left:   0, right: 600, bottom: 600 },
//   },
// });

var modifiers = require('./base');
var utils = require('../utils');
var rectUtils = require('../utils/rect');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');

var _require = require('./restrict'),
    getRestrictionRect = _require.getRestrictionRect;

var noInner = { top: +Infinity, left: +Infinity, bottom: -Infinity, right: -Infinity };
var noOuter = { top: -Infinity, left: -Infinity, bottom: +Infinity, right: +Infinity };

var restrictEdges = {
  defaults: {
    enabled: false,
    endOnly: false,
    min: null,
    max: null,
    offset: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction,
        startOffset = _ref.startOffset,
        options = _ref.options;

    if (!options) {
      return utils.extend({}, startOffset);
    }

    var offset = getRestrictionRect(options.offset, interaction, interaction.startCoords.page);

    if (offset) {
      return {
        top: startOffset.top + offset.y,
        left: startOffset.left + offset.x,
        bottom: startOffset.bottom + offset.y,
        right: startOffset.right + offset.x
      };
    }

    return startOffset;
  },

  set: function set(_ref2) {
    var modifiedCoords = _ref2.modifiedCoords,
        interaction = _ref2.interaction,
        status = _ref2.status,
        offset = _ref2.offset,
        options = _ref2.options;

    var edges = interaction.prepared.linkedEdges || interaction.prepared.edges;

    if (!interaction.interacting() || !edges) {
      return;
    }

    var page = status.useStatusXY ? { x: status.x, y: status.y } : utils.extend({}, modifiedCoords);
    var inner = rectUtils.xywhToTlbr(getRestrictionRect(options.inner, interaction, page)) || noInner;
    var outer = rectUtils.xywhToTlbr(getRestrictionRect(options.outer, interaction, page)) || noOuter;

    var modifiedX = page.x;
    var modifiedY = page.y;

    status.dx = 0;
    status.dy = 0;
    status.locked = false;

    if (edges.top) {
      modifiedY = Math.min(Math.max(outer.top + offset.top, page.y), inner.top + offset.top);
    } else if (edges.bottom) {
      modifiedY = Math.max(Math.min(outer.bottom - offset.bottom, page.y), inner.bottom - offset.bottom);
    }
    if (edges.left) {
      modifiedX = Math.min(Math.max(outer.left + offset.left, page.x), inner.left + offset.left);
    } else if (edges.right) {
      modifiedX = Math.max(Math.min(outer.right - offset.right, page.x), inner.right - offset.right);
    }

    status.dx = modifiedX - page.x;
    status.dy = modifiedY - page.y;

    status.changed = status.modifiedX !== modifiedX || status.modifiedY !== modifiedY;
    status.locked = !!(status.dx || status.dy);

    status.modifiedX = modifiedX;
    status.modifiedY = modifiedY;
  },

  modifyCoords: function modifyCoords(_ref3) {
    var page = _ref3.page,
        client = _ref3.client,
        status = _ref3.status,
        phase = _ref3.phase,
        options = _ref3.options;

    if (options && options.enabled && !(phase === 'start' && status.locked)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;

        return {
          dx: status.dx,
          dy: status.dy
        };
      }
    }
  },

  noInner: noInner,
  noOuter: noOuter,
  getRestrictionRect: getRestrictionRect
};

modifiers.restrictEdges = restrictEdges;
modifiers.names.push('restrictEdges');

defaultOptions.perAction.restrictEdges = restrictEdges.defaults;
resize.defaults.restrictEdges = restrictEdges.defaults;

module.exports = restrictEdges;

},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrict":24}],26:[function(require,module,exports){
'use strict';

// This module adds the options.resize.restrictSize setting which sets min and
// max width and height for the target being resized.
//
// interact(target).resize({
//   edges: { top: true, left: true },
//   restrictSize: {
//     min: { width: -600, height: -600 },
//     max: { width:  600, height:  600 },
//   },
// });

var modifiers = require('./base');
var restrictEdges = require('./restrictEdges');
var utils = require('../utils');
var rectUtils = require('../utils/rect');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');

var noMin = { width: -Infinity, height: -Infinity };
var noMax = { width: +Infinity, height: +Infinity };

var restrictSize = {
  defaults: {
    enabled: false,
    endOnly: false,
    min: null,
    max: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction;

    return interaction.startOffset;
  },

  set: function set(arg) {
    var interaction = arg.interaction,
        options = arg.options;

    var edges = interaction.prepared.linkedEdges || interaction.prepared.edges;

    if (!interaction.interacting() || !edges) {
      return;
    }

    var rect = rectUtils.xywhToTlbr(interaction.resizeRects.inverted);

    var minSize = rectUtils.tlbrToXywh(restrictEdges.getRestrictionRect(options.min, interaction)) || noMin;
    var maxSize = rectUtils.tlbrToXywh(restrictEdges.getRestrictionRect(options.max, interaction)) || noMax;

    arg.options = {
      enabled: options.enabled,
      endOnly: options.endOnly,
      inner: utils.extend({}, restrictEdges.noInner),
      outer: utils.extend({}, restrictEdges.noOuter)
    };

    if (edges.top) {
      arg.options.inner.top = rect.bottom - minSize.height;
      arg.options.outer.top = rect.bottom - maxSize.height;
    } else if (edges.bottom) {
      arg.options.inner.bottom = rect.top + minSize.height;
      arg.options.outer.bottom = rect.top + maxSize.height;
    }
    if (edges.left) {
      arg.options.inner.left = rect.right - minSize.width;
      arg.options.outer.left = rect.right - maxSize.width;
    } else if (edges.right) {
      arg.options.inner.right = rect.left + minSize.width;
      arg.options.outer.right = rect.left + maxSize.width;
    }

    restrictEdges.set(arg);
  },

  modifyCoords: restrictEdges.modifyCoords
};

modifiers.restrictSize = restrictSize;
modifiers.names.push('restrictSize');

defaultOptions.perAction.restrictSize = restrictSize.defaults;
resize.defaults.restrictSize = restrictSize.defaults;

module.exports = restrictSize;

},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrictEdges":25}],27:[function(require,module,exports){
'use strict';

var modifiers = require('./base');
var interact = require('../interact');
var utils = require('../utils');
var defaultOptions = require('../defaultOptions');

var snap = {
  defaults: {
    enabled: false,
    endOnly: false,
    range: Infinity,
    targets: null,
    offsets: null,

    relativePoints: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction,
        interactable = _ref.interactable,
        element = _ref.element,
        rect = _ref.rect,
        startOffset = _ref.startOffset,
        options = _ref.options;

    var offsets = [];
    var optionsOrigin = utils.rectToXY(utils.resolveRectLike(options.origin));
    var origin = optionsOrigin || utils.getOriginXY(interactable, element, interaction.prepared.name);
    options = options || interactable.options[interaction.prepared.name].snap || {};

    var snapOffset = void 0;

    if (options.offset === 'startCoords') {
      snapOffset = {
        x: interaction.startCoords.page.x - origin.x,
        y: interaction.startCoords.page.y - origin.y
      };
    } else {
      var offsetRect = utils.resolveRectLike(options.offset, interactable, element, [interaction]);

      snapOffset = utils.rectToXY(offsetRect) || { x: 0, y: 0 };
    }

    if (rect && options.relativePoints && options.relativePoints.length) {
      for (var _i = 0; _i < options.relativePoints.length; _i++) {
        var _ref3;

        _ref3 = options.relativePoints[_i];
        var _ref2 = _ref3;
        var relativeX = _ref2.x;
        var relativeY = _ref2.y;

        offsets.push({
          x: startOffset.left - rect.width * relativeX + snapOffset.x,
          y: startOffset.top - rect.height * relativeY + snapOffset.y
        });
      }
    } else {
      offsets.push(snapOffset);
    }

    return offsets;
  },

  set: function set(_ref4) {
    var interaction = _ref4.interaction,
        modifiedCoords = _ref4.modifiedCoords,
        status = _ref4.status,
        options = _ref4.options,
        offsets = _ref4.offset;

    var targets = [];
    var target = void 0;
    var page = void 0;
    var i = void 0;

    if (status.useStatusXY) {
      page = { x: status.x, y: status.y };
    } else {
      var origin = utils.getOriginXY(interaction.target, interaction.element, interaction.prepared.name);

      page = utils.extend({}, modifiedCoords);

      page.x -= origin.x;
      page.y -= origin.y;
    }

    status.realX = page.x;
    status.realY = page.y;

    var len = options.targets ? options.targets.length : 0;

    for (var _i2 = 0; _i2 < offsets.length; _i2++) {
      var _ref6;

      _ref6 = offsets[_i2];
      var _ref5 = _ref6;
      var offsetX = _ref5.x;
      var offsetY = _ref5.y;

      var relativeX = page.x - offsetX;
      var relativeY = page.y - offsetY;

      for (var _i3 = 0; _i3 < (options.targets || []).length; _i3++) {
        var _ref7;

        _ref7 = (options.targets || [])[_i3];
        var snapTarget = _ref7;

        if (utils.is.function(snapTarget)) {
          target = snapTarget(relativeX, relativeY, interaction);
        } else {
          target = snapTarget;
        }

        if (!target) {
          continue;
        }

        targets.push({
          x: utils.is.number(target.x) ? target.x + offsetX : relativeX,
          y: utils.is.number(target.y) ? target.y + offsetY : relativeY,

          range: utils.is.number(target.range) ? target.range : options.range
        });
      }
    }

    var closest = {
      target: null,
      inRange: false,
      distance: 0,
      range: 0,
      dx: 0,
      dy: 0
    };

    for (i = 0, len = targets.length; i < len; i++) {
      target = targets[i];

      var range = target.range;
      var dx = target.x - page.x;
      var dy = target.y - page.y;
      var distance = utils.hypot(dx, dy);
      var inRange = distance <= range;

      // Infinite targets count as being out of range
      // compared to non infinite ones that are in range
      if (range === Infinity && closest.inRange && closest.range !== Infinity) {
        inRange = false;
      }

      if (!closest.target || (inRange
      // is the closest target in range?
      ? closest.inRange && range !== Infinity
      // the pointer is relatively deeper in this target
      ? distance / range < closest.distance / closest.range
      // this target has Infinite range and the closest doesn't
      : range === Infinity && closest.range !== Infinity ||
      // OR this target is closer that the previous closest
      distance < closest.distance :
      // The other is not in range and the pointer is closer to this target
      !closest.inRange && distance < closest.distance)) {

        closest.target = target;
        closest.distance = distance;
        closest.range = range;
        closest.inRange = inRange;
        closest.dx = dx;
        closest.dy = dy;

        status.range = range;
      }
    }

    var snapChanged = void 0;

    if (closest.target) {
      snapChanged = status.modifiedX !== closest.target.x || status.modifiedY !== closest.target.y;

      status.modifiedX = closest.target.x;
      status.modifiedY = closest.target.y;
    } else {
      snapChanged = true;

      status.modifiedX = NaN;
      status.modifiedY = NaN;
    }

    status.dx = closest.dx;
    status.dy = closest.dy;

    status.changed = snapChanged || closest.inRange && !status.locked;
    status.locked = closest.inRange;
  },

  modifyCoords: function modifyCoords(_ref8) {
    var page = _ref8.page,
        client = _ref8.client,
        status = _ref8.status,
        phase = _ref8.phase,
        options = _ref8.options;

    var relativePoints = options && options.relativePoints;

    if (options && options.enabled && !(phase === 'start' && relativePoints && relativePoints.length)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;
      }

      return {
        range: status.range,
        locked: status.locked,
        x: status.modifiedX,
        y: status.modifiedY,
        realX: status.realX,
        realY: status.realY,
        dx: status.dx,
        dy: status.dy
      };
    }
  }
};

interact.createSnapGrid = function (grid) {
  return function (x, y) {
    var limits = grid.limits || {
      left: -Infinity,
      right: Infinity,
      top: -Infinity,
      bottom: Infinity
    };
    var offsetX = 0;
    var offsetY = 0;

    if (utils.is.object(grid.offset)) {
      offsetX = grid.offset.x;
      offsetY = grid.offset.y;
    }

    var gridx = Math.round((x - offsetX) / grid.x);
    var gridy = Math.round((y - offsetY) / grid.y);

    var newX = Math.max(limits.left, Math.min(limits.right, gridx * grid.x + offsetX));
    var newY = Math.max(limits.top, Math.min(limits.bottom, gridy * grid.y + offsetY));

    return {
      x: newX,
      y: newY,
      range: grid.range
    };
  };
};

modifiers.snap = snap;
modifiers.names.push('snap');

defaultOptions.perAction.snap = snap.defaults;

module.exports = snap;

},{"../defaultOptions":18,"../interact":21,"../utils":44,"./base":23}],28:[function(require,module,exports){
'use strict';

// This module allows snapping of the size of targets during resize
// interactions.

var modifiers = require('./base');
var snap = require('./snap');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');
var utils = require('../utils/');

var snapSize = {
  defaults: {
    enabled: false,
    endOnly: false,
    range: Infinity,
    targets: null,
    offsets: null
  },

  setOffset: function setOffset(arg) {
    var interaction = arg.interaction,
        options = arg.options;

    var edges = interaction.prepared.edges;

    if (!edges) {
      return;
    }

    arg.options = {
      relativePoints: [{
        x: edges.left ? 0 : 1,
        y: edges.top ? 0 : 1
      }],
      origin: { x: 0, y: 0 },
      offset: 'self',
      range: options.range
    };

    var offsets = snap.setOffset(arg);
    arg.options = options;

    return offsets;
  },

  set: function set(arg) {
    var interaction = arg.interaction,
        options = arg.options,
        offset = arg.offset,
        modifiedCoords = arg.modifiedCoords;

    var page = utils.extend({}, modifiedCoords);
    var relativeX = page.x - offset[0].x;
    var relativeY = page.y - offset[0].y;

    arg.options = utils.extend({}, options);
    arg.options.targets = [];

    for (var _i = 0; _i < (options.targets || []).length; _i++) {
      var _ref;

      _ref = (options.targets || [])[_i];
      var snapTarget = _ref;

      var target = void 0;

      if (utils.is.function(snapTarget)) {
        target = snapTarget(relativeX, relativeY, interaction);
      } else {
        target = snapTarget;
      }

      if (!target) {
        continue;
      }

      if ('width' in target && 'height' in target) {
        target.x = target.width;
        target.y = target.height;
      }

      arg.options.targets.push(target);
    }

    snap.set(arg);
  },

  modifyCoords: function modifyCoords(arg) {
    var options = arg.options;


    arg.options = utils.extend({}, options);
    arg.options.enabled = options.enabled;
    arg.options.relativePoints = [null];

    snap.modifyCoords(arg);
  }
};

modifiers.snapSize = snapSize;
modifiers.names.push('snapSize');

defaultOptions.perAction.snapSize = snapSize.defaults;
resize.defaults.snapSize = snapSize.defaults;

module.exports = snapSize;

},{"../actions/resize":10,"../defaultOptions":18,"../utils/":44,"./base":23,"./snap":27}],29:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pointerUtils = require('../utils/pointerUtils');

module.exports = function () {
  /** */
  function PointerEvent(type, pointer, event, eventTarget, interaction) {
    _classCallCheck(this, PointerEvent);

    pointerUtils.pointerExtend(this, event);

    if (event !== pointer) {
      pointerUtils.pointerExtend(this, pointer);
    }

    this.interaction = interaction;

    this.timeStamp = new Date().getTime();
    this.originalEvent = event;
    this.type = type;
    this.pointerId = pointerUtils.getPointerId(pointer);
    this.pointerType = pointerUtils.getPointerType(pointer);
    this.target = eventTarget;
    this.currentTarget = null;

    if (type === 'tap') {
      var pointerIndex = interaction.getPointerIndex(pointer);
      this.dt = this.timeStamp - interaction.downTimes[pointerIndex];

      var interval = this.timeStamp - interaction.tapTime;

      this.double = !!(interaction.prevTap && interaction.prevTap.type !== 'doubletap' && interaction.prevTap.target === this.target && interval < 500);
    } else if (type === 'doubletap') {
      this.dt = pointer.timeStamp - interaction.tapTime;
    }
  }

  PointerEvent.prototype.subtractOrigin = function subtractOrigin(_ref) {
    var originX = _ref.x,
        originY = _ref.y;

    this.pageX -= originX;
    this.pageY -= originY;
    this.clientX -= originX;
    this.clientY -= originY;

    return this;
  };

  PointerEvent.prototype.addOrigin = function addOrigin(_ref2) {
    var originX = _ref2.x,
        originY = _ref2.y;

    this.pageX += originX;
    this.pageY += originY;
    this.clientX += originX;
    this.clientY += originY;

    return this;
  };

  /** */


  PointerEvent.prototype.preventDefault = function preventDefault() {
    this.originalEvent.preventDefault();
  };

  /** */


  PointerEvent.prototype.stopPropagation = function stopPropagation() {
    this.propagationStopped = true;
  };

  /** */


  PointerEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };

  return PointerEvent;
}();

},{"../utils/pointerUtils":49}],30:[function(require,module,exports){
'use strict';

var PointerEvent = require('./PointerEvent');
var Interaction = require('../Interaction');
var utils = require('../utils');
var defaults = require('../defaultOptions');
var signals = require('../utils/Signals').new();

var simpleSignals = ['down', 'up', 'cancel'];
var simpleEvents = ['down', 'up', 'cancel'];

var pointerEvents = {
  PointerEvent: PointerEvent,
  fire: fire,
  collectEventTargets: collectEventTargets,
  signals: signals,
  defaults: {
    holdDuration: 600,
    ignoreFrom: null,
    allowFrom: null,
    origin: { x: 0, y: 0 }
  },
  types: ['down', 'move', 'up', 'cancel', 'tap', 'doubletap', 'hold']
};

function fire(arg) {
  var interaction = arg.interaction,
      pointer = arg.pointer,
      event = arg.event,
      eventTarget = arg.eventTarget,
      _arg$type = arg.type,
      type = _arg$type === undefined ? arg.pointerEvent.type : _arg$type,
      _arg$targets = arg.targets,
      targets = _arg$targets === undefined ? collectEventTargets(arg) : _arg$targets,
      _arg$pointerEvent = arg.pointerEvent,
      pointerEvent = _arg$pointerEvent === undefined ? new PointerEvent(type, pointer, event, eventTarget, interaction) : _arg$pointerEvent;


  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    targets: targets,
    type: type,
    pointerEvent: pointerEvent
  };

  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];

    for (var prop in target.props || {}) {
      pointerEvent[prop] = target.props[prop];
    }

    var origin = utils.getOriginXY(target.eventable, target.element);

    pointerEvent.subtractOrigin(origin);
    pointerEvent.eventable = target.eventable;
    pointerEvent.currentTarget = target.element;

    target.eventable.fire(pointerEvent);

    pointerEvent.addOrigin(origin);

    if (pointerEvent.immediatePropagationStopped || pointerEvent.propagationStopped && i + 1 < targets.length && targets[i + 1].element !== pointerEvent.currentTarget) {
      break;
    }
  }

  signals.fire('fired', signalArg);

  if (type === 'tap') {
    // if pointerEvent should make a double tap, create and fire a doubletap
    // PointerEvent and use that as the prevTap
    var prevTap = pointerEvent.double ? fire({
      interaction: interaction, pointer: pointer, event: event, eventTarget: eventTarget,
      type: 'doubletap'
    }) : pointerEvent;

    interaction.prevTap = prevTap;
    interaction.tapTime = prevTap.timeStamp;
  }

  return pointerEvent;
}

function collectEventTargets(_ref) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget,
      type = _ref.type;

  var pointerIndex = interaction.getPointerIndex(pointer);

  // do not fire a tap event if the pointer was moved before being lifted
  if (type === 'tap' && (interaction.pointerWasMoved
  // or if the pointerup target is different to the pointerdown target
  || !(interaction.downTargets[pointerIndex] && interaction.downTargets[pointerIndex] === eventTarget))) {
    return [];
  }

  var path = utils.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: type,
    path: path,
    targets: [],
    element: null
  };

  for (var _i = 0; _i < path.length; _i++) {
    var _ref2;

    _ref2 = path[_i];
    var element = _ref2;

    signalArg.element = element;

    signals.fire('collect-targets', signalArg);
  }

  if (type === 'hold') {
    signalArg.targets = signalArg.targets.filter(function (target) {
      return target.eventable.options.holdDuration === interaction.holdTimers[pointerIndex].duration;
    });
  }

  return signalArg.targets;
}

Interaction.signals.on('update-pointer-down', function (_ref3) {
  var interaction = _ref3.interaction,
      pointerIndex = _ref3.pointerIndex;

  interaction.holdTimers[pointerIndex] = { duration: Infinity, timeout: null };
});

Interaction.signals.on('remove-pointer', function (_ref4) {
  var interaction = _ref4.interaction,
      pointerIndex = _ref4.pointerIndex;

  interaction.holdTimers.splice(pointerIndex, 1);
});

Interaction.signals.on('move', function (_ref5) {
  var interaction = _ref5.interaction,
      pointer = _ref5.pointer,
      event = _ref5.event,
      eventTarget = _ref5.eventTarget,
      duplicateMove = _ref5.duplicateMove;

  var pointerIndex = interaction.getPointerIndex(pointer);

  if (!duplicateMove && (!interaction.pointerIsDown || interaction.pointerWasMoved)) {
    if (interaction.pointerIsDown) {
      clearTimeout(interaction.holdTimers[pointerIndex].timeout);
    }

    fire({
      interaction: interaction, pointer: pointer, event: event, eventTarget: eventTarget,
      type: 'move'
    });
  }
});

Interaction.signals.on('down', function (_ref6) {
  var interaction = _ref6.interaction,
      pointer = _ref6.pointer,
      event = _ref6.event,
      eventTarget = _ref6.eventTarget,
      pointerIndex = _ref6.pointerIndex;

  var timer = interaction.holdTimers[pointerIndex];
  var path = utils.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: 'hold',
    targets: [],
    path: path,
    element: null
  };

  for (var _i2 = 0; _i2 < path.length; _i2++) {
    var _ref7;

    _ref7 = path[_i2];
    var element = _ref7;

    signalArg.element = element;

    signals.fire('collect-targets', signalArg);
  }

  if (!signalArg.targets.length) {
    return;
  }

  var minDuration = Infinity;

  for (var _i3 = 0; _i3 < signalArg.targets.length; _i3++) {
    var _ref8;

    _ref8 = signalArg.targets[_i3];
    var target = _ref8;

    var holdDuration = target.eventable.options.holdDuration;

    if (holdDuration < minDuration) {
      minDuration = holdDuration;
    }
  }

  timer.duration = minDuration;
  timer.timeout = setTimeout(function () {
    fire({
      interaction: interaction,
      eventTarget: eventTarget,
      pointer: pointer,
      event: event,
      type: 'hold'
    });
  }, minDuration);
});

Interaction.signals.on('up', function (_ref9) {
  var interaction = _ref9.interaction,
      pointer = _ref9.pointer,
      event = _ref9.event,
      eventTarget = _ref9.eventTarget;

  if (!interaction.pointerWasMoved) {
    fire({ interaction: interaction, eventTarget: eventTarget, pointer: pointer, event: event, type: 'tap' });
  }
});

var _arr = ['up', 'cancel'];
for (var _i4 = 0; _i4 < _arr.length; _i4++) {
  var signalName = _arr[_i4];
  Interaction.signals.on(signalName, function (_ref11) {
    var interaction = _ref11.interaction,
        pointerIndex = _ref11.pointerIndex;

    if (interaction.holdTimers[pointerIndex]) {
      clearTimeout(interaction.holdTimers[pointerIndex].timeout);
    }
  });
}

function createSignalListener(type) {
  return function (_ref10) {
    var interaction = _ref10.interaction,
        pointer = _ref10.pointer,
        event = _ref10.event,
        eventTarget = _ref10.eventTarget;

    fire({ interaction: interaction, eventTarget: eventTarget, pointer: pointer, event: event, type: type });
  };
}

for (var i = 0; i < simpleSignals.length; i++) {
  Interaction.signals.on(simpleSignals[i], createSignalListener(simpleEvents[i]));
}

Interaction.signals.on('new', function (interaction) {
  interaction.prevTap = null; // the most recent tap event on this interaction
  interaction.tapTime = 0; // time of the most recent tap event
  interaction.holdTimers = []; // [{ duration, timeout }]
});

defaults.pointerEvents = pointerEvents.defaults;
module.exports = pointerEvents;

},{"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/Signals":34,"./PointerEvent":29}],31:[function(require,module,exports){
'use strict';

var pointerEvents = require('./base');
var Interaction = require('../Interaction');

pointerEvents.signals.on('new', onNew);
pointerEvents.signals.on('fired', onFired);

var _arr = ['move', 'up', 'cancel', 'endall'];
for (var _i = 0; _i < _arr.length; _i++) {
  var signal = _arr[_i];
  Interaction.signals.on(signal, endHoldRepeat);
}

function onNew(_ref) {
  var pointerEvent = _ref.pointerEvent;

  if (pointerEvent.type !== 'hold') {
    return;
  }

  pointerEvent.count = (pointerEvent.count || 0) + 1;
}

function onFired(_ref2) {
  var interaction = _ref2.interaction,
      pointerEvent = _ref2.pointerEvent,
      eventTarget = _ref2.eventTarget,
      targets = _ref2.targets;

  if (pointerEvent.type !== 'hold' || !targets.length) {
    return;
  }

  // get the repeat interval from the first eventable
  var interval = targets[0].eventable.options.holdRepeatInterval;

  // don't repeat if the interval is 0 or less
  if (interval <= 0) {
    return;
  }

  // set a timeout to fire the holdrepeat event
  interaction.holdIntervalHandle = setTimeout(function () {
    pointerEvents.fire({
      interaction: interaction,
      eventTarget: eventTarget,
      type: 'hold',
      pointer: pointerEvent,
      event: pointerEvent
    });
  }, interval);
}

function endHoldRepeat(_ref3) {
  var interaction = _ref3.interaction;

  // set the interaction's holdStopTime property
  // to stop further holdRepeat events
  if (interaction.holdIntervalHandle) {
    clearInterval(interaction.holdIntervalHandle);
    interaction.holdIntervalHandle = null;
  }
}

// don't repeat by default
pointerEvents.defaults.holdRepeatInterval = 0;
pointerEvents.types.push('holdrepeat');

module.exports = {
  onNew: onNew,
  onFired: onFired,
  endHoldRepeat: endHoldRepeat
};

},{"../Interaction":5,"./base":30}],32:[function(require,module,exports){
'use strict';

var pointerEvents = require('./base');
var Interactable = require('../Interactable');
var is = require('../utils/is');
var scope = require('../scope');
var extend = require('../utils/extend');

var _require = require('../utils/arr'),
    merge = _require.merge;

pointerEvents.signals.on('collect-targets', function (_ref) {
  var targets = _ref.targets,
      element = _ref.element,
      type = _ref.type,
      eventTarget = _ref.eventTarget;

  scope.interactables.forEachMatch(element, function (interactable) {
    var eventable = interactable.events;
    var options = eventable.options;

    if (eventable[type] && is.element(element) && interactable.testIgnoreAllow(options, element, eventTarget)) {

      targets.push({
        element: element,
        eventable: eventable,
        props: { interactable: interactable }
      });
    }
  });
});

Interactable.signals.on('new', function (_ref2) {
  var interactable = _ref2.interactable;

  interactable.events.getRect = function (element) {
    return interactable.getRect(element);
  };
});

Interactable.signals.on('set', function (_ref3) {
  var interactable = _ref3.interactable,
      options = _ref3.options;

  extend(interactable.events.options, pointerEvents.defaults);
  extend(interactable.events.options, options);
});

merge(Interactable.eventTypes, pointerEvents.types);

Interactable.prototype.pointerEvents = function (options) {
  extend(this.events.options, options);

  return this;
};

var __backCompatOption = Interactable.prototype._backCompatOption;

Interactable.prototype._backCompatOption = function (optionName, newValue) {
  var ret = __backCompatOption.call(this, optionName, newValue);

  if (ret === this) {
    this.events.options[optionName] = newValue;
  }

  return ret;
};

Interactable.settingsMethods.push('pointerEvents');

},{"../Interactable":4,"../scope":33,"../utils/arr":35,"../utils/extend":41,"../utils/is":46,"./base":30}],33:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var events = require('./utils/events');
var signals = require('./utils/Signals').new();

var _require = require('./utils/window'),
    getWindow = _require.getWindow;

var scope = {
  signals: signals,
  events: events,
  utils: utils,

  // main document
  document: require('./utils/domObjects').document,
  // all documents being listened to
  documents: [],

  addDocument: function addDocument(doc, win) {
    // do nothing if document is already known
    if (utils.contains(scope.documents, doc)) {
      return false;
    }

    win = win || getWindow(doc);

    scope.documents.push(doc);
    events.documents.push(doc);

    // don't add an unload event for the main document
    // so that the page may be cached in browser history
    if (doc !== scope.document) {
      events.add(win, 'unload', scope.onWindowUnload);
    }

    signals.fire('add-document', { doc: doc, win: win });
  },

  removeDocument: function removeDocument(doc, win) {
    var index = scope.documents.indexOf(doc);

    win = win || getWindow(doc);

    events.remove(win, 'unload', scope.onWindowUnload);

    scope.documents.splice(index, 1);
    events.documents.splice(index, 1);

    signals.fire('remove-document', { win: win, doc: doc });
  },

  onWindowUnload: function onWindowUnload() {
    scope.removeDocument(this.document, this);
  }
};

module.exports = scope;

},{"./utils":44,"./utils/Signals":34,"./utils/domObjects":38,"./utils/events":40,"./utils/window":52}],34:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Signals = function () {
  function Signals() {
    _classCallCheck(this, Signals);

    this.listeners = {
      // signalName: [listeners],
    };
  }

  Signals.prototype.on = function on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [listener];
      return;
    }

    this.listeners[name].push(listener);
  };

  Signals.prototype.off = function off(name, listener) {
    if (!this.listeners[name]) {
      return;
    }

    var index = this.listeners[name].indexOf(listener);

    if (index !== -1) {
      this.listeners[name].splice(index, 1);
    }
  };

  Signals.prototype.fire = function fire(name, arg) {
    var targetListeners = this.listeners[name];

    if (!targetListeners) {
      return;
    }

    for (var _i = 0; _i < targetListeners.length; _i++) {
      var _ref;

      _ref = targetListeners[_i];
      var listener = _ref;

      if (listener(arg, name) === false) {
        return;
      }
    }
  };

  return Signals;
}();

Signals.new = function () {
  return new Signals();
};

module.exports = Signals;

},{}],35:[function(require,module,exports){
"use strict";

function contains(array, target) {
  return array.indexOf(target) !== -1;
}

function merge(target, source) {
  for (var _i = 0; _i < source.length; _i++) {
    var _ref;

    _ref = source[_i];
    var item = _ref;

    target.push(item);
  }

  return target;
}

module.exports = {
  contains: contains,
  merge: merge
};

},{}],36:[function(require,module,exports){
'use strict';

var _require = require('./window'),
    window = _require.window;

var is = require('./is');
var domObjects = require('./domObjects');

var Element = domObjects.Element;
var navigator = window.navigator;

var browser = {
  // Does the browser support touch input?
  supportsTouch: !!('ontouchstart' in window || is.function(window.DocumentTouch) && domObjects.document instanceof window.DocumentTouch),

  // Does the browser support PointerEvents
  supportsPointerEvent: !!domObjects.PointerEvent,

  isIOS: /iP(hone|od|ad)/.test(navigator.platform),

  // scrolling doesn't change the result of getClientRects on iOS 7
  isIOS7: /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion),

  isIe9: /MSIE 9/.test(navigator.userAgent),

  // prefix matchesSelector
  prefixedMatchesSelector: 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector',

  pEventTypes: domObjects.PointerEvent ? domObjects.PointerEvent === window.MSPointerEvent ? {
    up: 'MSPointerUp',
    down: 'MSPointerDown',
    over: 'mouseover',
    out: 'mouseout',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel'
  } : {
    up: 'pointerup',
    down: 'pointerdown',
    over: 'pointerover',
    out: 'pointerout',
    move: 'pointermove',
    cancel: 'pointercancel'
  } : null,

  // because Webkit and Opera still use 'mousewheel' event type
  wheelEvent: 'onmousewheel' in domObjects.document ? 'mousewheel' : 'wheel'

};

// Opera Mobile must be handled differently
browser.isOperaMobile = navigator.appName === 'Opera' && browser.supportsTouch && navigator.userAgent.match('Presto');

module.exports = browser;

},{"./domObjects":38,"./is":46,"./window":52}],37:[function(require,module,exports){
'use strict';

var is = require('./is');

module.exports = function clone(source) {
  var dest = {};
  for (var prop in source) {
    if (is.plainObject(source[prop])) {
      dest[prop] = clone(source[prop]);
    } else {
      dest[prop] = source[prop];
    }
  }
  return dest;
};

},{"./is":46}],38:[function(require,module,exports){
'use strict';

var domObjects = {};
var win = require('./window').window;

function blank() {}

domObjects.document = win.document;
domObjects.DocumentFragment = win.DocumentFragment || blank;
domObjects.SVGElement = win.SVGElement || blank;
domObjects.SVGSVGElement = win.SVGSVGElement || blank;
domObjects.SVGElementInstance = win.SVGElementInstance || blank;
domObjects.Element = win.Element || blank;
domObjects.HTMLElement = win.HTMLElement || domObjects.Element;

domObjects.Event = win.Event;
domObjects.Touch = win.Touch || blank;
domObjects.PointerEvent = win.PointerEvent || win.MSPointerEvent;

module.exports = domObjects;

},{"./window":52}],39:[function(require,module,exports){
'use strict';

var win = require('./window');
var browser = require('./browser');
var is = require('./is');
var domObjects = require('./domObjects');

var domUtils = {
  nodeContains: function nodeContains(parent, child) {
    while (child) {
      if (child === parent) {
        return true;
      }

      child = child.parentNode;
    }

    return false;
  },

  closest: function closest(element, selector) {
    while (is.element(element)) {
      if (domUtils.matchesSelector(element, selector)) {
        return element;
      }

      element = domUtils.parentNode(element);
    }

    return null;
  },

  parentNode: function parentNode(node) {
    var parent = node.parentNode;

    if (is.docFrag(parent)) {
      // skip past #shado-root fragments
      while ((parent = parent.host) && is.docFrag(parent)) {
        continue;
      }

      return parent;
    }

    return parent;
  },

  matchesSelector: function matchesSelector(element, selector) {
    // remove /deep/ from selectors if shadowDOM polyfill is used
    if (win.window !== win.realWindow) {
      selector = selector.replace(/\/deep\//g, ' ');
    }

    return element[browser.prefixedMatchesSelector](selector);
  },

  // Test for the element that's "above" all other qualifiers
  indexOfDeepestElement: function indexOfDeepestElement(elements) {
    var deepestZoneParents = [];
    var dropzoneParents = [];
    var dropzone = void 0;
    var deepestZone = elements[0];
    var index = deepestZone ? 0 : -1;
    var parent = void 0;
    var child = void 0;
    var i = void 0;
    var n = void 0;

    for (i = 1; i < elements.length; i++) {
      dropzone = elements[i];

      // an element might belong to multiple selector dropzones
      if (!dropzone || dropzone === deepestZone) {
        continue;
      }

      if (!deepestZone) {
        deepestZone = dropzone;
        index = i;
        continue;
      }

      // check if the deepest or current are document.documentElement or document.rootElement
      // - if the current dropzone is, do nothing and continue
      if (dropzone.parentNode === dropzone.ownerDocument) {
        continue;
      }
      // - if deepest is, update with the current dropzone and continue to next
      else if (deepestZone.parentNode === dropzone.ownerDocument) {
          deepestZone = dropzone;
          index = i;
          continue;
        }

      if (!deepestZoneParents.length) {
        parent = deepestZone;
        while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
          deepestZoneParents.unshift(parent);
          parent = parent.parentNode;
        }
      }

      // if this element is an svg element and the current deepest is
      // an HTMLElement
      if (deepestZone instanceof domObjects.HTMLElement && dropzone instanceof domObjects.SVGElement && !(dropzone instanceof domObjects.SVGSVGElement)) {

        if (dropzone === deepestZone.parentNode) {
          continue;
        }

        parent = dropzone.ownerSVGElement;
      } else {
        parent = dropzone;
      }

      dropzoneParents = [];

      while (parent.parentNode !== parent.ownerDocument) {
        dropzoneParents.unshift(parent);
        parent = parent.parentNode;
      }

      n = 0;

      // get (position of last common ancestor) + 1
      while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
        n++;
      }

      var parents = [dropzoneParents[n - 1], dropzoneParents[n], deepestZoneParents[n]];

      child = parents[0].lastChild;

      while (child) {
        if (child === parents[1]) {
          deepestZone = dropzone;
          index = i;
          deepestZoneParents = [];

          break;
        } else if (child === parents[2]) {
          break;
        }

        child = child.previousSibling;
      }
    }

    return index;
  },

  matchesUpTo: function matchesUpTo(element, selector, limit) {
    while (is.element(element)) {
      if (domUtils.matchesSelector(element, selector)) {
        return true;
      }

      element = domUtils.parentNode(element);

      if (element === limit) {
        return domUtils.matchesSelector(element, selector);
      }
    }

    return false;
  },

  getActualElement: function getActualElement(element) {
    return element instanceof domObjects.SVGElementInstance ? element.correspondingUseElement : element;
  },

  getScrollXY: function getScrollXY(relevantWindow) {
    relevantWindow = relevantWindow || win.window;
    return {
      x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
      y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop
    };
  },

  getElementClientRect: function getElementClientRect(element) {
    var clientRect = element instanceof domObjects.SVGElement ? element.getBoundingClientRect() : element.getClientRects()[0];

    return clientRect && {
      left: clientRect.left,
      right: clientRect.right,
      top: clientRect.top,
      bottom: clientRect.bottom,
      width: clientRect.width || clientRect.right - clientRect.left,
      height: clientRect.height || clientRect.bottom - clientRect.top
    };
  },

  getElementRect: function getElementRect(element) {
    var clientRect = domUtils.getElementClientRect(element);

    if (!browser.isIOS7 && clientRect) {
      var scroll = domUtils.getScrollXY(win.getWindow(element));

      clientRect.left += scroll.x;
      clientRect.right += scroll.x;
      clientRect.top += scroll.y;
      clientRect.bottom += scroll.y;
    }

    return clientRect;
  },

  getPath: function getPath(element) {
    var path = [];

    while (element) {
      path.push(element);
      element = domUtils.parentNode(element);
    }

    return path;
  },

  trySelector: function trySelector(value) {
    if (!is.string(value)) {
      return false;
    }

    // an exception will be raised if it is invalid
    domObjects.document.querySelector(value);
    return true;
  }
};

module.exports = domUtils;

},{"./browser":36,"./domObjects":38,"./is":46,"./window":52}],40:[function(require,module,exports){
'use strict';

var is = require('./is');
var domUtils = require('./domUtils');
var pointerUtils = require('./pointerUtils');
var pExtend = require('./pointerExtend');

var _require = require('./window'),
    window = _require.window;

var _require2 = require('./arr'),
    contains = _require2.contains;

var elements = [];
var targets = [];

// {
//   type: {
//     selectors: ['selector', ...],
//     contexts : [document, ...],
//     listeners: [[listener, capture, passive], ...]
//   }
//  }
var delegatedEvents = {};
var documents = [];

var supportsOptions = function () {
  var supported = false;

  window.document.createElement('div').addEventListener('test', null, {
    get capture() {
      supported = true;
    }
  });

  return supported;
}();

function add(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target) {
    target = {
      events: {},
      typeCount: 0
    };

    elementIndex = elements.push(element) - 1;
    targets.push(target);
  }

  if (!target.events[type]) {
    target.events[type] = [];
    target.typeCount++;
  }

  if (!contains(target.events[type], listener)) {
    element.addEventListener(type, listener, supportsOptions ? options : !!options.capture);
    target.events[type].push(listener);
  }
}

function remove(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target || !target.events) {
    return;
  }

  if (type === 'all') {
    for (type in target.events) {
      if (target.events.hasOwnProperty(type)) {
        remove(element, type, 'all');
      }
    }
    return;
  }

  if (target.events[type]) {
    var len = target.events[type].length;

    if (listener === 'all') {
      for (var i = 0; i < len; i++) {
        remove(element, type, target.events[type][i], options);
      }
      return;
    } else {
      for (var _i = 0; _i < len; _i++) {
        if (target.events[type][_i] === listener) {
          element.removeEventListener('on' + type, listener, supportsOptions ? options : !!options.capture);
          target.events[type].splice(_i, 1);

          break;
        }
      }
    }

    if (target.events[type] && target.events[type].length === 0) {
      target.events[type] = null;
      target.typeCount--;
    }
  }

  if (!target.typeCount) {
    targets.splice(elementIndex, 1);
    elements.splice(elementIndex, 1);
  }
}

function addDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  if (!delegatedEvents[type]) {
    delegatedEvents[type] = {
      selectors: [],
      contexts: [],
      listeners: []
    };

    // add delegate listener functions
    for (var _i2 = 0; _i2 < documents.length; _i2++) {
      var doc = documents[_i2];
      add(doc, type, delegateListener);
      add(doc, type, delegateUseCapture, true);
    }
  }

  var delegated = delegatedEvents[type];
  var index = void 0;

  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {
      break;
    }
  }

  if (index === -1) {
    index = delegated.selectors.length;

    delegated.selectors.push(selector);
    delegated.contexts.push(context);
    delegated.listeners.push([]);
  }

  // keep listener and capture and passive flags
  delegated.listeners[index].push([listener, !!options.capture, options.passive]);
}

function removeDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var delegated = delegatedEvents[type];
  var matchFound = false;
  var index = void 0;

  if (!delegated) {
    return;
  }

  // count from last index of delegated to 0
  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    // look for matching selector and context Node
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {

      var listeners = delegated.listeners[index];

      // each item of the listeners array is an array: [function, capture, passive]
      for (var i = listeners.length - 1; i >= 0; i--) {
        var _listeners$i = listeners[i],
            fn = _listeners$i[0],
            capture = _listeners$i[1],
            passive = _listeners$i[2];

        // check if the listener functions and capture and passive flags match

        if (fn === listener && capture === !!options.capture && passive === options.passive) {
          // remove the listener from the array of listeners
          listeners.splice(i, 1);

          // if all listeners for this interactable have been removed
          // remove the interactable from the delegated arrays
          if (!listeners.length) {
            delegated.selectors.splice(index, 1);
            delegated.contexts.splice(index, 1);
            delegated.listeners.splice(index, 1);

            // remove delegate function from context
            remove(context, type, delegateListener);
            remove(context, type, delegateUseCapture, true);

            // remove the arrays if they are empty
            if (!delegated.selectors.length) {
              delegatedEvents[type] = null;
            }
          }

          // only remove one listener
          matchFound = true;
          break;
        }
      }

      if (matchFound) {
        break;
      }
    }
  }
}

// bound to the interactable context when a DOM event
// listener is added to a selector interactable
function delegateListener(event, optionalArg) {
  var options = getOptions(optionalArg);
  var fakeEvent = {};
  var delegated = delegatedEvents[event.type];

  var _pointerUtils$getEven = pointerUtils.getEventTargets(event),
      eventTarget = _pointerUtils$getEven[0];

  var element = eventTarget;

  // duplicate the event so that currentTarget can be changed
  pExtend(fakeEvent, event);

  fakeEvent.originalEvent = event;
  fakeEvent.preventDefault = preventOriginalDefault;

  // climb up document tree looking for selector matches
  while (is.element(element)) {
    for (var i = 0; i < delegated.selectors.length; i++) {
      var selector = delegated.selectors[i];
      var context = delegated.contexts[i];

      if (domUtils.matchesSelector(element, selector) && domUtils.nodeContains(context, eventTarget) && domUtils.nodeContains(context, element)) {

        var listeners = delegated.listeners[i];

        fakeEvent.currentTarget = element;

        for (var j = 0; j < listeners.length; j++) {
          var _listeners$j = listeners[j],
              fn = _listeners$j[0],
              capture = _listeners$j[1],
              passive = _listeners$j[2];


          if (capture === !!options.capture && passive === options.passive) {
            fn(fakeEvent);
          }
        }
      }
    }

    element = domUtils.parentNode(element);
  }
}

function delegateUseCapture(event) {
  return delegateListener.call(this, event, true);
}

function preventOriginalDefault() {
  this.originalEvent.preventDefault();
}

function getOptions(param) {
  return is.object(param) ? param : { capture: param };
}

module.exports = {
  add: add,
  remove: remove,

  addDelegate: addDelegate,
  removeDelegate: removeDelegate,

  delegateListener: delegateListener,
  delegateUseCapture: delegateUseCapture,
  delegatedEvents: delegatedEvents,
  documents: documents,

  supportsOptions: supportsOptions,

  _elements: elements,
  _targets: targets
};

},{"./arr":35,"./domUtils":39,"./is":46,"./pointerExtend":48,"./pointerUtils":49,"./window":52}],41:[function(require,module,exports){
"use strict";

module.exports = function extend(dest, source) {
  for (var prop in source) {
    dest[prop] = source[prop];
  }
  return dest;
};

},{}],42:[function(require,module,exports){
'use strict';

var _require = require('./rect'),
    resolveRectLike = _require.resolveRectLike,
    rectToXY = _require.rectToXY;

module.exports = function (target, element, action) {
  var actionOptions = target.options[action];
  var actionOrigin = actionOptions && actionOptions.origin;
  var origin = actionOrigin || target.options.origin;

  var originRect = resolveRectLike(origin, target, element, [target && element]);

  return rectToXY(originRect) || { x: 0, y: 0 };
};

},{"./rect":51}],43:[function(require,module,exports){
"use strict";

module.exports = function (x, y) {
  return Math.sqrt(x * x + y * y);
};

},{}],44:[function(require,module,exports){
'use strict';

var extend = require('./extend');
var win = require('./window');

var utils = {
  warnOnce: function warnOnce(method, message) {
    var warned = false;

    return function () {
      if (!warned) {
        win.window.console.warn(message);
        warned = true;
      }

      return method.apply(this, arguments);
    };
  },

  // http://stackoverflow.com/a/5634528/2280888
  _getQBezierValue: function _getQBezierValue(t, p1, p2, p3) {
    var iT = 1 - t;
    return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
  },

  getQuadraticCurvePoint: function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
    return {
      x: utils._getQBezierValue(position, startX, cpX, endX),
      y: utils._getQBezierValue(position, startY, cpY, endY)
    };
  },

  // http://gizma.com/easing/
  easeOutQuad: function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  },

  copyAction: function copyAction(dest, src) {
    dest.name = src.name;
    dest.axis = src.axis;
    dest.edges = src.edges;

    return dest;
  },

  is: require('./is'),
  extend: extend,
  hypot: require('./hypot'),
  getOriginXY: require('./getOriginXY')
};

extend(utils, require('./arr'));
extend(utils, require('./domUtils'));
extend(utils, require('./pointerUtils'));
extend(utils, require('./rect'));

module.exports = utils;

},{"./arr":35,"./domUtils":39,"./extend":41,"./getOriginXY":42,"./hypot":43,"./is":46,"./pointerUtils":49,"./rect":51,"./window":52}],45:[function(require,module,exports){
'use strict';

var scope = require('../scope');
var utils = require('./index');

var finder = {
  methodOrder: ['simulationResume', 'mouseOrPen', 'hasPointer', 'idle'],

  search: function search(pointer, eventType, eventTarget) {
    var pointerType = utils.getPointerType(pointer);
    var pointerId = utils.getPointerId(pointer);
    var details = { pointer: pointer, pointerId: pointerId, pointerType: pointerType, eventType: eventType, eventTarget: eventTarget };

    for (var _i = 0; _i < finder.methodOrder.length; _i++) {
      var _ref;

      _ref = finder.methodOrder[_i];
      var method = _ref;

      var interaction = finder[method](details);

      if (interaction) {
        return interaction;
      }
    }
  },

  // try to resume simulation with a new pointer
  simulationResume: function simulationResume(_ref2) {
    var pointerType = _ref2.pointerType,
        eventType = _ref2.eventType,
        eventTarget = _ref2.eventTarget;

    if (!/down|start/i.test(eventType)) {
      return null;
    }

    for (var _i2 = 0; _i2 < scope.interactions.length; _i2++) {
      var _ref3;

      _ref3 = scope.interactions[_i2];
      var interaction = _ref3;

      var element = eventTarget;

      if (interaction.simulation && interaction.simulation.allowResume && interaction.pointerType === pointerType) {
        while (element) {
          // if the element is the interaction element
          if (element === interaction.element) {
            return interaction;
          }
          element = utils.parentNode(element);
        }
      }
    }

    return null;
  },

  // if it's a mouse or pen interaction
  mouseOrPen: function mouseOrPen(_ref4) {
    var pointerId = _ref4.pointerId,
        pointerType = _ref4.pointerType,
        eventType = _ref4.eventType;

    if (pointerType !== 'mouse' && pointerType !== 'pen') {
      return null;
    }

    var firstNonActive = void 0;

    for (var _i3 = 0; _i3 < scope.interactions.length; _i3++) {
      var _ref5;

      _ref5 = scope.interactions[_i3];
      var interaction = _ref5;

      if (interaction.pointerType === pointerType) {
        // if it's a down event, skip interactions with running simulations
        if (interaction.simulation && !utils.contains(interaction.pointerIds, pointerId)) {
          continue;
        }

        // if the interaction is active, return it immediately
        if (interaction.interacting()) {
          return interaction;
        }
        // otherwise save it and look for another active interaction
        else if (!firstNonActive) {
            firstNonActive = interaction;
          }
      }
    }

    // if no active mouse interaction was found use the first inactive mouse
    // interaction
    if (firstNonActive) {
      return firstNonActive;
    }

    // find any mouse or pen interaction.
    // ignore the interaction if the eventType is a *down, and a simulation
    // is active
    for (var _i4 = 0; _i4 < scope.interactions.length; _i4++) {
      var _ref6;

      _ref6 = scope.interactions[_i4];
      var _interaction = _ref6;

      if (_interaction.pointerType === pointerType && !(/down/i.test(eventType) && _interaction.simulation)) {
        return _interaction;
      }
    }

    return null;
  },

  // get interaction that has this pointer
  hasPointer: function hasPointer(_ref7) {
    var pointerId = _ref7.pointerId;

    for (var _i5 = 0; _i5 < scope.interactions.length; _i5++) {
      var _ref8;

      _ref8 = scope.interactions[_i5];
      var interaction = _ref8;

      if (utils.contains(interaction.pointerIds, pointerId)) {
        return interaction;
      }
    }
  },

  // get first idle interaction with a matching pointerType
  idle: function idle(_ref9) {
    var pointerType = _ref9.pointerType;

    for (var _i6 = 0; _i6 < scope.interactions.length; _i6++) {
      var _ref10;

      _ref10 = scope.interactions[_i6];
      var interaction = _ref10;

      // if there's already a pointer held down
      if (interaction.pointerIds.length === 1) {
        var target = interaction.target;
        // don't add this pointer if there is a target interactable and it
        // isn't gesturable
        if (target && !target.options.gesture.enabled) {
          continue;
        }
      }
      // maximum of 2 pointers per interaction
      else if (interaction.pointerIds.length >= 2) {
          continue;
        }

      if (!interaction.interacting() && pointerType === interaction.pointerType) {
        return interaction;
      }
    }

    return null;
  }
};

module.exports = finder;

},{"../scope":33,"./index":44}],46:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var win = require('./window');
var isWindow = require('./isWindow');

var is = {
  array: function array() {},

  window: function window(thing) {
    return thing === win.window || isWindow(thing);
  },

  docFrag: function docFrag(thing) {
    return is.object(thing) && thing.nodeType === 11;
  },

  object: function object(thing) {
    return !!thing && (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
  },

  function: function _function(thing) {
    return typeof thing === 'function';
  },

  number: function number(thing) {
    return typeof thing === 'number';
  },

  bool: function bool(thing) {
    return typeof thing === 'boolean';
  },

  string: function string(thing) {
    return typeof thing === 'string';
  },

  element: function element(thing) {
    if (!thing || (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) !== 'object') {
      return false;
    }

    var _window = win.getWindow(thing) || win.window;

    return (/object|function/.test(_typeof(_window.Element)) ? thing instanceof _window.Element //DOM2
      : thing.nodeType === 1 && typeof thing.nodeName === 'string'
    );
  },

  plainObject: function plainObject(thing) {
    return is.object(thing) && thing.constructor.name === 'Object';
  }
};

is.array = function (thing) {
  return is.object(thing) && typeof thing.length !== 'undefined' && is.function(thing.splice);
};

module.exports = is;

},{"./isWindow":47,"./window":52}],47:[function(require,module,exports){
"use strict";

module.exports = function (thing) {
  return !!(thing && thing.Window) && thing instanceof thing.Window;
};

},{}],48:[function(require,module,exports){
'use strict';

function pointerExtend(dest, source) {
  for (var prop in source) {
    var prefixedPropREs = module.exports.prefixedPropREs;
    var deprecated = false;

    // skip deprecated prefixed properties
    for (var vendor in prefixedPropREs) {
      if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
        deprecated = true;
        break;
      }
    }

    if (!deprecated && typeof source[prop] !== 'function') {
      dest[prop] = source[prop];
    }
  }
  return dest;
}

pointerExtend.prefixedPropREs = {
  webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
};

module.exports = pointerExtend;

},{}],49:[function(require,module,exports){
'use strict';

var hypot = require('./hypot');
var browser = require('./browser');
var dom = require('./domObjects');
var domUtils = require('./domUtils');
var domObjects = require('./domObjects');
var is = require('./is');
var pointerExtend = require('./pointerExtend');

var pointerUtils = {
  copyCoords: function copyCoords(dest, src) {
    dest.page = dest.page || {};
    dest.page.x = src.page.x;
    dest.page.y = src.page.y;

    dest.client = dest.client || {};
    dest.client.x = src.client.x;
    dest.client.y = src.client.y;

    dest.timeStamp = src.timeStamp;
  },

  setCoordDeltas: function setCoordDeltas(targetObj, prev, cur) {
    targetObj.page.x = cur.page.x - prev.page.x;
    targetObj.page.y = cur.page.y - prev.page.y;
    targetObj.client.x = cur.client.x - prev.client.x;
    targetObj.client.y = cur.client.y - prev.client.y;
    targetObj.timeStamp = cur.timeStamp - prev.timeStamp;

    // set pointer velocity
    var dt = Math.max(targetObj.timeStamp / 1000, 0.001);

    targetObj.page.speed = hypot(targetObj.page.x, targetObj.page.y) / dt;
    targetObj.page.vx = targetObj.page.x / dt;
    targetObj.page.vy = targetObj.page.y / dt;

    targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
    targetObj.client.vx = targetObj.client.x / dt;
    targetObj.client.vy = targetObj.client.y / dt;
  },

  isNativePointer: function isNativePointer(pointer) {
    return pointer instanceof dom.Event || pointer instanceof dom.Touch;
  },

  // Get specified X/Y coords for mouse or event.touches[0]
  getXY: function getXY(type, pointer, xy) {
    xy = xy || {};
    type = type || 'page';

    xy.x = pointer[type + 'X'];
    xy.y = pointer[type + 'Y'];

    return xy;
  },

  getPageXY: function getPageXY(pointer, page) {
    page = page || {};

    // Opera Mobile handles the viewport and scrolling oddly
    if (browser.isOperaMobile && pointerUtils.isNativePointer(pointer)) {
      pointerUtils.getXY('screen', pointer, page);

      page.x += window.scrollX;
      page.y += window.scrollY;
    } else {
      pointerUtils.getXY('page', pointer, page);
    }

    return page;
  },

  getClientXY: function getClientXY(pointer, client) {
    client = client || {};

    if (browser.isOperaMobile && pointerUtils.isNativePointer(pointer)) {
      // Opera Mobile handles the viewport and scrolling oddly
      pointerUtils.getXY('screen', pointer, client);
    } else {
      pointerUtils.getXY('client', pointer, client);
    }

    return client;
  },

  getPointerId: function getPointerId(pointer) {
    return is.number(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
  },

  setCoords: function setCoords(targetObj, pointers, timeStamp) {
    var pointer = pointers.length > 1 ? pointerUtils.pointerAverage(pointers) : pointers[0];

    var tmpXY = {};

    pointerUtils.getPageXY(pointer, tmpXY);
    targetObj.page.x = tmpXY.x;
    targetObj.page.y = tmpXY.y;

    pointerUtils.getClientXY(pointer, tmpXY);
    targetObj.client.x = tmpXY.x;
    targetObj.client.y = tmpXY.y;

    targetObj.timeStamp = is.number(timeStamp) ? timeStamp : new Date().getTime();
  },

  pointerExtend: pointerExtend,

  getTouchPair: function getTouchPair(event) {
    var touches = [];

    // array of touches is supplied
    if (is.array(event)) {
      touches[0] = event[0];
      touches[1] = event[1];
    }
    // an event
    else {
        if (event.type === 'touchend') {
          if (event.touches.length === 1) {
            touches[0] = event.touches[0];
            touches[1] = event.changedTouches[0];
          } else if (event.touches.length === 0) {
            touches[0] = event.changedTouches[0];
            touches[1] = event.changedTouches[1];
          }
        } else {
          touches[0] = event.touches[0];
          touches[1] = event.touches[1];
        }
      }

    return touches;
  },

  pointerAverage: function pointerAverage(pointers) {
    var average = {
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      screenX: 0,
      screenY: 0
    };

    for (var _i = 0; _i < pointers.length; _i++) {
      var _ref;

      _ref = pointers[_i];
      var pointer = _ref;

      for (var _prop in average) {
        average[_prop] += pointer[_prop];
      }
    }
    for (var prop in average) {
      average[prop] /= pointers.length;
    }

    return average;
  },

  touchBBox: function touchBBox(event) {
    if (!event.length && !(event.touches && event.touches.length > 1)) {
      return;
    }

    var touches = pointerUtils.getTouchPair(event);
    var minX = Math.min(touches[0].pageX, touches[1].pageX);
    var minY = Math.min(touches[0].pageY, touches[1].pageY);
    var maxX = Math.max(touches[0].pageX, touches[1].pageX);
    var maxY = Math.max(touches[0].pageY, touches[1].pageY);

    return {
      x: minX,
      y: minY,
      left: minX,
      top: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  },

  touchDistance: function touchDistance(event, deltaSource) {
    var sourceX = deltaSource + 'X';
    var sourceY = deltaSource + 'Y';
    var touches = pointerUtils.getTouchPair(event);

    var dx = touches[0][sourceX] - touches[1][sourceX];
    var dy = touches[0][sourceY] - touches[1][sourceY];

    return hypot(dx, dy);
  },

  touchAngle: function touchAngle(event, prevAngle, deltaSource) {
    var sourceX = deltaSource + 'X';
    var sourceY = deltaSource + 'Y';
    var touches = pointerUtils.getTouchPair(event);
    var dx = touches[1][sourceX] - touches[0][sourceX];
    var dy = touches[1][sourceY] - touches[0][sourceY];
    var angle = 180 * Math.atan2(dy, dx) / Math.PI;

    return angle;
  },

  getPointerType: function getPointerType(pointer) {
    return is.string(pointer.pointerType) ? pointer.pointerType : is.number(pointer.pointerType) ? [undefined, undefined, 'touch', 'pen', 'mouse'][pointer.pointerType]
    // if the PointerEvent API isn't available, then the "pointer" must
    // be either a MouseEvent, TouchEvent, or Touch object
    : /touch/.test(pointer.type) || pointer instanceof domObjects.Touch ? 'touch' : 'mouse';
  },

  // [ event.target, event.currentTarget ]
  getEventTargets: function getEventTargets(event) {
    var path = is.function(event.composedPath) ? event.composedPath() : event.path;

    return [domUtils.getActualElement(path ? path[0] : event.target), domUtils.getActualElement(event.currentTarget)];
  }
};

module.exports = pointerUtils;

},{"./browser":36,"./domObjects":38,"./domUtils":39,"./hypot":43,"./is":46,"./pointerExtend":48}],50:[function(require,module,exports){
'use strict';

var _require = require('./window'),
    window = _require.window;

var vendors = ['ms', 'moz', 'webkit', 'o'];
var lastTime = 0;
var request = void 0;
var cancel = void 0;

for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++) {
  request = window[vendors[x] + 'RequestAnimationFrame'];
  cancel = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!request) {
  request = function request(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);

    lastTime = currTime + timeToCall;
    return id;
  };
}

if (!cancel) {
  cancel = function cancel(id) {
    clearTimeout(id);
  };
}

module.exports = {
  request: request,
  cancel: cancel
};

},{"./window":52}],51:[function(require,module,exports){
'use strict';

var extend = require('./extend');
var is = require('./is');

var _require = require('./domUtils'),
    closest = _require.closest,
    parentNode = _require.parentNode,
    getElementRect = _require.getElementRect;

var rectUtils = {
  getStringOptionResult: function getStringOptionResult(value, interactable, element) {
    if (!is.string(value)) {
      return null;
    }

    if (value === 'parent') {
      value = parentNode(element);
    } else if (value === 'self') {
      value = interactable.getRect(element);
    } else {
      value = closest(element, value);
    }

    return value;
  },

  resolveRectLike: function resolveRectLike(value, interactable, element, functionArgs) {
    value = rectUtils.getStringOptionResult(value, interactable, element) || value;

    if (is.function(value)) {
      value = value.apply(null, functionArgs);
    }

    if (is.element(value)) {
      value = getElementRect(value);
    }

    return value;
  },

  rectToXY: function rectToXY(rect) {
    return rect && {
      x: 'x' in rect ? rect.x : rect.left,
      y: 'y' in rect ? rect.y : rect.top
    };
  },

  xywhToTlbr: function xywhToTlbr(rect) {
    if (rect && !('left' in rect && 'top' in rect)) {
      rect = extend({}, rect);

      rect.left = rect.x || 0;
      rect.top = rect.y || 0;
      rect.right = rect.right || rect.left + rect.width;
      rect.bottom = rect.bottom || rect.top + rect.height;
    }

    return rect;
  },

  tlbrToXywh: function tlbrToXywh(rect) {
    if (rect && !('x' in rect && 'y' in rect)) {
      rect = extend({}, rect);

      rect.x = rect.left || 0;
      rect.top = rect.top || 0;
      rect.width = rect.width || rect.right - rect.x;
      rect.height = rect.height || rect.bottom - rect.y;
    }

    return rect;
  }
};

module.exports = rectUtils;

},{"./domUtils":39,"./extend":41,"./is":46}],52:[function(require,module,exports){
'use strict';

var win = module.exports;
var isWindow = require('./isWindow');

function init(window) {
  // get wrapped window if using Shadow DOM polyfill

  win.realWindow = window;

  // create a TextNode
  var el = window.document.createTextNode('');

  // check if it's wrapped by a polyfill
  if (el.ownerDocument !== window.document && typeof window.wrap === 'function' && window.wrap(el) === el) {
    // use wrapped window
    window = window.wrap(window);
  }

  win.window = window;
}

if (typeof window === 'undefined') {
  win.window = undefined;
  win.realWindow = undefined;
} else {
  init(window);
}

win.getWindow = function getWindow(node) {
  if (isWindow(node)) {
    return node;
  }

  var rootNode = node.ownerDocument || node;

  return rootNode.defaultView || rootNode.parentWindow || win.window;
};

win.init = init;

},{"./isWindow":47}]},{},[1])(1)
});


//# sourceMappingURL=interact.js.map


/***/ }),

/***/ "./node_modules/resize-sensor-es6/ResizeSensor.js":
/*!********************************************************!*\
  !*** ./node_modules/resize-sensor-es6/ResizeSensor.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */


/**
 * Class for dimension change detection.
 *
 * @param {Element|Element[]|Elements|jQuery} element
 * @param {Function} callback
 *
 * @constructor
 */
const ResizeSensor = function ResizeSensor(element, callback) {
  /**
   *
   * @constructor
   */
  function EventQueue() {
    this.q = [];
    this.add = (ev) => {
      this.q.push(ev);
    };

    let i;
    let j;
    this.call = () => {
      for (i = 0, j = this.q.length; i < j; i += 1) {
        this.q[i].call();
      }
    };
  }

  /**
   * @param {HTMLElement} element
   * @param {String}      prop
   * @returns {String|Number}
   */
  function getComputedStyle(elementCS, prop) {
    if (elementCS.currentStyle) {
      return elementCS.currentStyle[prop];
    } else if (window.getComputedStyle) {
      return window.getComputedStyle(elementCS, null).getPropertyValue(prop);
    }
    return elementCS.style[prop];
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {Function}    resized
   */
  function attachResizeEvent(elementRE, resized) {
    const elementResize = elementRE;
    if (!elementResize.resizedAttached) {
      elementResize.resizedAttached = new EventQueue();
      elementResize.resizedAttached.add(resized);
    } else if (elementResize.resizedAttached) {
      elementResize.resizedAttached.add(resized);
      return;
    }

    elementResize.resizeSensor = document.createElement('div');
    elementResize.resizeSensor.className = 'resize-sensor';
    const style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;';
    const styleChild = 'position: absolute; left: 0; top: 0;';

    elementResize.resizeSensor.style.cssText = style;
    elementResize.resizeSensor.innerHTML =
      `<div class="resize-sensor-expand" style="${style}">` +
      `<div style="${styleChild}"></div>` +
      '</div>' +
      `<div class="resize-sensor-shrink" style="${style}">` +
      `<div style="${styleChild} width: 200%; height: 200%"></div>` +
      '</div>';
    elementResize.appendChild(elementResize.resizeSensor);

    if (!{
      fixed: 1,
      absolute: 1,
    }[getComputedStyle(elementResize, 'position')]) {
      elementResize.style.position = 'relative';
    }

    const expand = elementResize.resizeSensor.childNodes[0];
    const expandChild = expand.childNodes[0];
    const shrink = elementResize.resizeSensor.childNodes[1];

    let lastWidth;
    let lastHeight;

    const reset = () => {
      expandChild.style.width = `${expand.offsetWidth + 10}px`;
      expandChild.style.height = `${expand.offsetHeight + 10}px`;
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
      shrink.scrollLeft = shrink.scrollWidth;
      shrink.scrollTop = shrink.scrollHeight;
      lastWidth = elementResize.offsetWidth;
      lastHeight = elementResize.offsetHeight;
    };

    reset();

    const changed = () => {
      if (elementResize.resizedAttached) {
        elementResize.resizedAttached.call();
      }
    };

    const addEvent = (el, name, cb) => {
      if (el.attachEvent) {
        el.attachEvent(`on${name}`, cb);
      } else {
        el.addEventListener(name, cb);
      }
    };

    addEvent(expand, 'scroll', () => {
      if (elementResize.offsetWidth > lastWidth || elementResize.offsetHeight > lastHeight) {
        changed();
      }
      reset();
    });

    addEvent(shrink, 'scroll', () => {
      if (elementResize.offsetWidth < lastWidth || elementResize.offsetHeight < lastHeight) {
        changed();
      }
      reset();
    });
  }

  if (Object.prototype.toString.call(element) === '[object Array]' ||
    (typeof jQuery !== 'undefined' && element instanceof jQuery) // jquery
    ||
    (typeof Elements !== 'undefined' && element instanceof Elements) // mootools
  ) {
    let i = 0;
    const j = element.length;
    for (; i < j; i += 1) {
      attachResizeEvent(element[i], callback);
    }
  } else {
    attachResizeEvent(element, callback);
  }

  this.detach = () => {
    ResizeSensor.detach(element);
  };
};

ResizeSensor.detach = (elem) => {
  const element = elem;
  if (element.resizeSensor) {
    element.removeChild(element.resizeSensor);
    delete element.resizeSensor;
    delete element.resizedAttached;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ResizeSensor);


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/zynga-scroller-woodbettle-es6/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/zynga-scroller-woodbettle-es6/index.js ***!
  \*************************************************************/
/*! exports provided: Scroller, Animate, ScrollRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Animate */ "./node_modules/zynga-scroller-woodbettle-es6/src/Animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animate", function() { return _src_Animate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Scroller */ "./node_modules/zynga-scroller-woodbettle-es6/src/Scroller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return _src_Scroller__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_ScrollRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ScrollRender */ "./node_modules/zynga-scroller-woodbettle-es6/src/ScrollRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollRender", function() { return _src_ScrollRender__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/zynga-scroller-woodbettle-es6/src/Animate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/zynga-scroller-woodbettle-es6/src/Animate.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

/**
 * Generic animation class with support for dropped frames both optional easing and duration.
 *
 * Optional duration is useful when the lifetime is defined by another condition than time
 * e.g. speed of an animating object, etc.
 *
 * Dropped frame logic allows to keep using the same updater logic independent from the actual
 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
 * based on the pure time difference.
 */

const time = Date.now || function time() {
  return +new Date();
};
const desiredFrames = 60;
const millisecondsPerSecond = 1000;
let running = {};
let counter = 1;

const Animate = {

  /**
   * A requestAnimationFrame wrapper / polyfill.
   *
   * @param callback {Function} The callback to be invoked before the next repaint.
   * @param root {HTMLElement} The root element for the repaint
   */
  requestAnimationFrame: ((() => {
    // Check for request animation Frame support
    const requestFrame = global.requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      global.oRequestAnimationFrame;
    let isNative = !!requestFrame;

    if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
      isNative = false;
    }

    if (isNative) {
      return (callback, root) => {
        requestFrame(callback, root);
      };
    }

    const TARGET_FPS = 60;
    let requests = {};
    let rafHandle = 1;
    let intervalHandle = null;
    let lastActive = +new Date();

    return (callback) => {
      const callbackHandle = rafHandle;
      rafHandle += 1;

      // Store callback
      requests[callbackHandle] = callback;

      // Create timeout at first request
      if (intervalHandle === null) {
        intervalHandle = setInterval(() => {
          const start = time();
          const currentRequests = requests;

          // Reset data structure before executing callbacks
          requests = {};

          Object.keys(currentRequests).forEach((key) => {
            currentRequests[key](start);
            lastActive = start;
          });

          // Disable the timeout when nothing happens for a certain
          // period of time
          if (start - lastActive > 2500) {
            clearInterval(intervalHandle);
            intervalHandle = null;
          }
        }, 1000 / TARGET_FPS);
      }

      return callbackHandle;
    };
  })()),


  /**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
  stop: (id) => {
    const cleared = running[id] != null;
    if (cleared) {
      running[id] = null;
    }

    return cleared;
  },


  /**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
  isRunning: id => running[id] != null,


  /**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be
   * `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @param root {Element ? document.body} Render root, when available. Used for internal
   *   usage of requestAnimationFrame.
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
  start: (stepCallback, verifyCallback, completedCallback, duration, easingMethod, r) => {
    let root = r;
    const start = time();
    let lastFrame = start;
    let percent = 0;
    let dropCounter = 0;
    counter += 1;
    const id = counter;

    if (!root) {
      root = document.body;
    }

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      const newRunning = {};
      Object.keys(running).forEach((usedId) => {
        newRunning[usedId] = true;
      });
      running = newRunning;
    }

    // This is the internal step method which is called every few milliseconds
    const step = function step(virtual) {
      // Normalize virtual value
      const render = virtual !== true;

      // Get current time
      const now = time();

      // Verification is executed before next animation step
      if (!running[id] || (verifyCallback && !verifyCallback(id))) {
        running[id] = null;
        if (completedCallback) {
          completedCallback(
            desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)),
            id,
            false,
          );
        }
        return;
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state variables up-to-date with progress in time.
      if (render) {
        const droppedFrames =
          Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (let j = 0; j < Math.min(droppedFrames, 4); j += 1) {
          step(true);
          dropCounter += 1;
        }
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      // Execute step callback, then...
      const value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        if (completedCallback) {
          completedCallback(
            desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)),
            id,
            percent === 1 || duration == null,
          );
        }
      } else if (render) {
        lastFrame = now;
        Animate.requestAnimationFrame(step, root);
      }
    };

    // Mark as running
    running[id] = true;

    // Init first step
    Animate.requestAnimationFrame(step, root);

    // Return unique animation ID
    return id;
  },
};

/* harmony default export */ __webpack_exports__["default"] = (Animate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/zynga-scroller-woodbettle-es6/src/ScrollRender.js":
/*!************************************************************************!*\
  !*** ./node_modules/zynga-scroller-woodbettle-es6/src/ScrollRender.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ScrollRender(content, forceIsTranslate) {
  return ((global) => {
    const docStyle = document.documentElement.style;

    let engine;
    if (global && global.opera && Object.prototype.toString.call(global.opera) === '[object Opera]') {
      engine = 'presto';
    } else if ('MozAppearance' in docStyle) {
      engine = 'gecko';
    } else if ('WebkitAppearance' in docStyle) {
      engine = 'webkit';
    } else if (typeof navigator.cpuClass === 'string') {
      engine = 'trident';
    }

    const vendorPrefix = {
      trident: 'ms',
      gecko: 'Moz',
      webkit: 'Webkit',
      presto: 'O',
    }[engine];

    const helperElem = document.createElement('div');
    const undef = undefined;

    const perspectiveProperty = `${vendorPrefix}Perspective`;
    const transformProperty = `${vendorPrefix}Transform`;

    if (forceIsTranslate && helperElem.style[perspectiveProperty] !== undef) {
      return (left, top, zoom) => {
        content.style[transformProperty] = `translate3d(${(-left)}px,${(-top)}px,0) scale(${zoom})`;
      };
    } else if (forceIsTranslate && helperElem.style[transformProperty] !== undef) {
      return (left, top, zoom) => {
        content.style[transformProperty] = `translate(${(-left)}px,${(-top)}px) scale(${zoom})`;
      };
    }
    return (left, top, zoom) => {
      // content.style[transformProperty] = 'translateZ(0)';
      content.style.marginLeft = left ? `${(-left / zoom)}px` : '';
      content.style.marginTop = top ? `${(-top / zoom)}px` : '';
      content.style.zoom = zoom || '';
    };
  })(this);
}

/* harmony default export */ __webpack_exports__["default"] = (ScrollRender);


/***/ }),

/***/ "./node_modules/zynga-scroller-woodbettle-es6/src/Scroller.js":
/*!********************************************************************!*\
  !*** ./node_modules/zynga-scroller-woodbettle-es6/src/Scroller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate */ "./node_modules/zynga-scroller-woodbettle-es6/src/Animate.js");
/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */



const NOOP = () => {};

/**
 * A pure logic 'component' for 'virtual' scrolling/zooming.
 */
function Scroller(callback, options) {
  this.__callback = callback;

  this.options = {

    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: true,

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /* Multiply or decrease scrolling speed */
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
      provided that another scrolling action has not begun. Used to know
      when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    // callback para função de scroll
    onScroll: NOOP,

    /* This configures the amount of change applied to deceleration when reaching boundaries */
    penetrationDeceleration: 0.03,

    /* This configures the amount of change applied to acceleration when reaching boundaries */
    penetrationAcceleration: 0.08,

  };

  Object.keys(options).forEach((key) => {
    this.options[key] = options[key];
  });
}


// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.

/*
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 */
const easeOutCubic = pos => (((pos - 1) ** 3) + 1);

/*
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 */
const easeInOutCubic = (p) => {
  const pos = p / 0.5;
  if (pos < 1) {
    return 0.5 * (pos ** 3);
  }

  return 0.5 * (((pos - 2) ** 3) + 2);
};


const members = {

  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: STATUS
  ---------------------------------------------------------------------------
  */

  /** {Boolean} Whether only a single finger is used in touch handling */
  __isSingleTouch: false,

  /** {Boolean} Whether a touch event sequence is in progress */
  __isTracking: false,

  /** {Boolean} Whether a deceleration animation went to completion. */
  __didDecelerationComplete: false,

  /**
   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
   * a gesturestart event happens. This has higher priority than dragging.
   */
  __isGesturing: false,

  /**
   * {Boolean} Whether the user has moved by such a distance that we have enabled
   * dragging mode. Hint: It's only enabled after some pixels of movement to
   * not interrupt with clicks etc.
   */
  __isDragging: false,

  /**
   * {Boolean} Not touching and dragging anymore, and smoothly animating the
   * touch sequence using deceleration.
   */
  __isDecelerating: false,

  /**
   * {Boolean} Smoothly animating the currently configured change
   */
  __isAnimating: false,


  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: DIMENSIONS
  ---------------------------------------------------------------------------
  */

  /** {Integer} Available outer left position (from document perspective) */
  __clientLeft: 0,

  /** {Integer} Available outer top position (from document perspective) */
  __clientTop: 0,

  /** {Integer} Available outer width */
  __clientWidth: 0,

  /** {Integer} Available outer height */
  __clientHeight: 0,

  /** {Integer} Outer width of content */
  __contentWidth: 0,

  /** {Integer} Outer height of content */
  __contentHeight: 0,

  /** {Integer} Snapping width for content */
  __snapWidth: 100,

  /** {Integer} Snapping height for content */
  __snapHeight: 100,

  /** {Integer} Height to assign to refresh area */
  __refreshHeight: null,

  /** {Boolean} Whether the refresh process is enabled when the event is released now */
  __refreshActive: false,

  /** {Function} Callback to execute on activation.
   * This is for signalling the user about a refresh is about to happen when he release */
  __refreshActivate: null,

  /** {Function} Callback to execute on deactivation.
   * This is for signalling the user about the refresh being cancelled */
  __refreshDeactivate: null,

  /** {Function} Callback to execute to start the actual refresh.
   * Call {@link #refreshFinish} when done */
  __refreshStart: null,

  /** {Number} Zoom level */
  __zoomLevel: 1,

  /** {Number} Scroll position on x-axis */
  __scrollLeft: 0,

  /** {Number} Scroll position on y-axis */
  __scrollTop: 0,

  /** {Integer} Maximum allowed scroll position on x-axis */
  __maxScrollLeft: 0,

  /** {Integer} Minimum allowed scroll position on x-axis */
  __minScrollLeft: 0,

  /** {Integer} Maximum allowed scroll position on y-axis */
  __maxScrollTop: 0,

  /** {Integer} Minimum allowed scroll position on y-axis */
  __minScrollTop: 0,

  /* {Number} Scheduled left position (final position when animating) */
  __scheduledLeft: 0,

  /* {Number} Scheduled top position (final position when animating) */
  __scheduledTop: 0,

  /* {Number} Scheduled zoom level (final scale when animating) */
  __scheduledZoom: 0,


  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: LAST POSITIONS
  ---------------------------------------------------------------------------
  */

  /** {Number} Left position of finger at start */
  __lastTouchLeft: null,

  /** {Number} Top position of finger at start */
  __lastTouchTop: null,

  /** {Date} Timestamp of last move of finger.
   * Used to limit tracking range for deceleration speed. */
  __lastTouchMove: null,

  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
  __positions: null,


  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: DECELERATION SUPPORT
  ---------------------------------------------------------------------------
  */

  /** {Integer} Minimum left scroll position during deceleration */
  __minDecelerationScrollLeft: null,

  /** {Integer} Minimum top scroll position during deceleration */
  __minDecelerationScrollTop: null,

  /** {Integer} Maximum left scroll position during deceleration */
  __maxDecelerationScrollLeft: null,

  /** {Integer} Maximum top scroll position during deceleration */
  __maxDecelerationScrollTop: null,

  /** {Number} Current factor to modify horizontal scroll position with on every step */
  __decelerationVelocityX: null,

  /** {Number} Current factor to modify vertical scroll position with on every step */
  __decelerationVelocityY: null,


  /*
  ---------------------------------------------------------------------------
    PUBLIC API
  ---------------------------------------------------------------------------
  */

  /**
   * Configures the dimensions of the client (outer) and content (inner) elements.
   * Requires the available space for the outer element and the outer size of the inner element.
   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
   *
   * @param clientWidth {Integer ? null} Inner width of outer element
   * @param clientHeight {Integer ? null} Inner height of outer element
   * @param contentWidth {Integer ? null} Outer width of inner element
   * @param contentHeight {Integer ? null} Outer height of inner element
   */
  setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
    // Only update values which are defined
    if (clientWidth === +clientWidth) {
      this.__clientWidth = clientWidth;
    }

    if (clientHeight === +clientHeight) {
      this.__clientHeight = clientHeight;
    }

    if (contentWidth === +contentWidth) {
      this.__contentWidth = contentWidth;
    }

    if (contentHeight === +contentHeight) {
      this.__contentHeight = contentHeight;
    }

    // Refresh maximums
    this.__computeScrollMax();

    // Refresh scroll position
    this.scrollTo(this.__scrollLeft, this.__scrollTop, true);
  },


  /**
   * Sets the client coordinates in relation to the document.
   *
   * @param left {Integer ? 0} Left position of outer element
   * @param top {Integer ? 0} Top position of outer element
   */
  setPosition(left, top) {
    this.__clientLeft = left || 0;
    this.__clientTop = top || 0;
  },


  /**
   * Configures the snapping (when snapping is active)
   *
   * @param width {Integer} Snapping width
   * @param height {Integer} Snapping height
   */
  setSnapSize(width, height) {
    this.__snapWidth = width;
    this.__snapHeight = height;
  },


  /**
   * Activates pull-to-refresh.
   * A special zone on the top of the list to start a list refresh whenever
   * the user event is released during visibility of this zone.
   * This was introduced by some apps on iOS like
   * the official Twitter client.
   *
   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
   * @param activateCallback {Function} Callback to execute on activation.
   * This is for signalling the user about a refresh is about to happen when he release.
   * @param deactivateCallback {Function} Callback to execute on deactivation.
   * This is for signalling the user about the refresh being cancelled.
   * @param startCallback {Function} Callback to execute to start the real async refresh action.
   * Call {@link #finishPullToRefresh} after finish of refresh.
   */
  activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {
    this.__refreshHeight = height;
    this.__refreshActivate = activateCallback;
    this.__refreshDeactivate = deactivateCallback;
    this.__refreshStart = startCallback;
  },


  /**
   * Starts pull-to-refresh manually.
   */
  triggerPullToRefresh() {
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc.
    // here because we only y-scrolling when pull-to-refresh is enabled
    this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

    if (this.__refreshStart) {
      this.__refreshStart();
    }
  },


  /**
   * Signalizes that pull-to-refresh is finished.
   */
  finishPullToRefresh() {
    this.__refreshActive = false;
    if (this.__refreshDeactivate) {
      this.__refreshDeactivate();
    }

    this.scrollTo(this.__scrollLeft, this.__scrollTop, true);
  },


  /**
   * Returns the scroll position and zooming values
   *
   * @return {Map} `left` and `top` scroll position and `zoom` level
   */
  getValues() {
    return {
      left: this.__scrollLeft,
      top: this.__scrollTop,
      zoom: this.__zoomLevel,
    };
  },


  /**
   * Returns the maximum scroll values
   *
   * @return {Map} `left` and `top` maximum scroll values
   */
  getScrollMax() {
    return {
      left: this.__maxScrollLeft,
      top: this.__maxScrollTop,
    };
  },


  /**
   * Zooms to the given level. Supports optional animation. Zooms
   * the center when no coordinates are given.
   *
   * @param level {Number} Level to zoom to
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? null} Zoom in at given left coordinate
   * @param originTop {Number ? null} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomTo(lvl, animate, oLeft, oTop, callback) {
    let originLeft = oLeft;
    let originTop = oTop;
    let level = lvl;

    if (!this.options.zooming) {
      throw new Error('Zooming is not enabled!');
    }

    // Add callback if exists
    if (callback) {
      this.__zoomComplete = callback;
    }

    // Stop deceleration
    if (this.__isDecelerating) {
      _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].stop(this.__isDecelerating);
      this.__isDecelerating = false;
    }

    const oldLevel = this.__zoomLevel;

    // Normalize input origin to center of viewport if not defined
    if (originLeft == null || !this.options.scrollingX) {
      originLeft = this.__clientWidth / 2;
    }

    if (originTop == null || !this.options.scrollingY) {
      originTop = this.__clientHeight / 2;
    }

    // Limit level according to configuration
    level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

    // Recompute maximum values while temporary tweaking maximum scroll ranges
    this.__computeScrollMax(level);

    // Recompute left and top coordinates based on new zoom level
    let left = ((originLeft + this.__scrollLeft) * (level / oldLevel)) - originLeft;
    let top = ((originTop + this.__scrollTop) * (level / oldLevel)) - originTop;

    // Limit x-axis
    if (left > this.__maxScrollLeft) {
      left = this.__maxScrollLeft;
    } else if (left < this.__minScrollLeft) {
      left = this.__minScrollLeft;
    }

    // Limit y-axis
    if (top > this.__maxScrollTop) {
      top = this.__maxScrollTop;
    } else if (top < this.__minScrollTop) {
      top = this.__minScrollTop;
    }

    // Push values out
    this.__publish(left, top, level, animate);
  },


  /**
   * Zooms the content by the given factor.
   *
   * @param factor {Number} Zoom by given factor
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? 0} Zoom in at given left coordinate
   * @param originTop {Number ? 0} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomBy(factor, animate, originLeft, originTop, callback) {
    this.zoomTo(this.__zoomLevel * factor, animate, originLeft, originTop, callback);
  },


  /**
   * Scrolls to the given position. Respect limitations and snapping automatically.
   *
   * @param left {Number?null} Horizontal scroll position,
   * keeps current if value is <code>null</code>
   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
   * @param zoom {Number?null} Zoom level to go to
   */
  scrollTo(l, t, a, z) {
    let left = l;
    let top = t;
    let animate = a;
    let zoom = z;

    // Stop deceleration
    if (this.__isDecelerating) {
      _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].stop(this.__isDecelerating);
      this.__isDecelerating = false;
    }

    // Correct coordinates based on new zoom level
    if (zoom != null && zoom !== this.__zoomLevel) {
      if (!this.options.zooming) {
        throw new Error('Zooming is not enabled!');
      }

      left *= zoom;
      top *= zoom;

      // Recompute maximum values while temporary tweaking maximum scroll ranges
      this.__computeScrollMax(zoom);
    } else {
      // Keep zoom when not defined
      zoom = this.__zoomLevel;
    }

    if (!this.options.scrollingX) {
      left = this.__scrollLeft;
    } else if (this.options.paging) {
      left = Math.round(left / this.__clientWidth) * this.__clientWidth;
    } else if (this.options.snapping) {
      left = Math.round(left / this.__snapWidth) * this.__snapWidth;
    }


    if (!this.options.scrollingY) {
      top = this.__scrollTop;
    } else if (this.options.paging) {
      top = Math.round(top / this.__clientHeight) * this.__clientHeight;
    } else if (this.options.snapping) {
      top = Math.round(top / this.__snapHeight) * this.__snapHeight;
    }


    // Limit for allowed ranges
    left = Math.max(Math.min(this.__maxScrollLeft, left), this.__minScrollLeft);
    top = Math.max(Math.min(this.__maxScrollTop, top), this.__minScrollTop);

    // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data
    if (left === this.__scrollLeft && top === this.__scrollTop) {
      animate = false;
    }

    // Publish new values
    if (!this.__isTracking) {
      this.__publish(left, top, zoom, animate);
    }
  },


  /**
   * Scroll by the given offset
   *
   * @param left {Number ? 0} Scroll x-axis by given offset
   * @param top {Number ? 0} Scroll x-axis by given offset
   * @param animate {Boolean ? false} Whether to animate the given change
   */
  scrollBy(left, top, animate) {
    const startLeft = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft;
    const startTop = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;

    this.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
  },


  /*
  ---------------------------------------------------------------------------
    EVENT CALLBACKS
  ---------------------------------------------------------------------------
  */

  /**
   * Mouse wheel handler for zooming support
   */
  doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {
    const change = wheelDelta > 0 ? 0.97 : 1.03;

    return this.zoomTo(
      this.__zoomLevel * change,
      false,
      pageX - this.__clientLeft,
      pageY - this.__clientTop,
    );
  },


  /**
   * Touch start handler for scrolling support
   */
  doTouchStart(touches, time) {
    let timeStamp = time;

    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error(`Invalid touch list: ${touches}`);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error(`Invalid timestamp value: ${timeStamp}`);
    }

    // Reset interruptedAnimation flag
    this.__interruptedAnimation = true;

    // Stop deceleration
    if (this.__isDecelerating) {
      _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].stop(this.__isDecelerating);
      this.__isDecelerating = false;
      this.__interruptedAnimation = true;
    }

    // Stop animation
    if (this.__isAnimating) {
      _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].stop(this.__isAnimating);
      this.__isAnimating = false;
      this.__interruptedAnimation = true;
    }

    // Use center point when dealing with two fingers
    let currentTouchLeft;
    let currentTouchTop;
    const isSingleTouch = touches.length === 1;
    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    }

    // Store initial positions
    this.__initialTouchLeft = currentTouchLeft;
    this.__initialTouchTop = currentTouchTop;

    // Store current zoom level
    this.__zoomLevelStart = this.__zoomLevel;

    // Store initial touch positions
    this.__lastTouchLeft = currentTouchLeft;
    this.__lastTouchTop = currentTouchTop;

    // Store initial move time stamp
    this.__lastTouchMove = timeStamp;

    // Reset initial scale
    this.__lastScale = 1;

    // Reset locking flags
    this.__enableScrollX = !isSingleTouch && this.options.scrollingX;
    this.__enableScrollY = !isSingleTouch && this.options.scrollingY;

    // Reset tracking flag
    this.__isTracking = true;

    // Reset deceleration complete flag
    this.__didDecelerationComplete = false;

    // Dragging starts directly with two fingers, otherwise lazy with an offset
    this.__isDragging = !isSingleTouch;

    // Some features are disabled in multi touch scenarios
    this.__isSingleTouch = isSingleTouch;

    // Clearing data structure
    this.__positions = [];
  },


  /**
   * Touch move handler for scrolling support
   */
  doTouchMove(touches, time, scale) {
    let timeStamp = time;

    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error(`Invalid touch list: ${touches}`);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error(`Invalid timestamp value: ${timeStamp}`);
    }

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!this.__isTracking) {
      return;
    }


    let currentTouchLeft;
    let currentTouchTop;

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } else {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    }

    const positions = this.__positions;

    // Are we already is dragging mode?
    if (this.__isDragging) {
      // Compute move distance
      const moveX = currentTouchLeft - this.__lastTouchLeft;
      const moveY = currentTouchTop - this.__lastTouchTop;

      // Read previous scroll position and zooming
      let scrollLeft = this.__scrollLeft;
      let scrollTop = this.__scrollTop;
      let level = this.__zoomLevel;

      // Work with scaling
      if (scale != null && this.options.zooming) {
        const oldLevel = level;

        // Recompute level based on previous scale and new scale
        level = (level / this.__lastScale) * scale;

        // Limit level according to configuration
        level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

        // Only do further compution when change happened
        if (oldLevel !== level) {
          // Compute relative event position to container
          const currentTouchLeftRel = currentTouchLeft - this.__clientLeft;
          const currentTouchTopRel = currentTouchTop - this.__clientTop;

          // Recompute left and top coordinates based on new zoom level
          scrollLeft = ((currentTouchLeftRel + scrollLeft) * (level / oldLevel)) -
            currentTouchLeftRel;
          scrollTop = ((currentTouchTopRel + scrollTop) * (level / oldLevel)) - currentTouchTopRel;

          // Recompute max scroll values
          this.__computeScrollMax(level);
        }
      }

      if (this.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier;
        const maxScrollLeft = this.__maxScrollLeft;
        const minScrollLeft = this.__minScrollLeft;

        if (scrollLeft > maxScrollLeft || scrollLeft < minScrollLeft) {
          // Slow down on the edges
          if (this.options.bouncing) {
            scrollLeft += ((moveX / 2) * this.options.speedMultiplier);
          } else if (scrollLeft > maxScrollLeft) {
            scrollLeft = maxScrollLeft;
          } else {
            scrollLeft = minScrollLeft;
          }
        }
      }

      // Compute new vertical scroll position
      if (this.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier;
        const maxScrollTop = this.__maxScrollTop;
        const minScrollTop = this.__minScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < minScrollTop) {
          // Slow down on the edges
          if (this.options.bouncing) {
            scrollTop += ((moveY / 2) * this.options.speedMultiplier);

            // Support pull-to-refresh (only when only y is scrollable)
            if (!this.__enableScrollX && this.__refreshHeight != null) {
              if (!this.__refreshActive && scrollTop <= -this.__refreshHeight) {
                this.__refreshActive = true;
                if (this.__refreshActivate) {
                  this.__refreshActivate();
                }
              } else if (this.__refreshActive && scrollTop > -this.__refreshHeight) {
                this.__refreshActive = false;
                if (this.__refreshDeactivate) {
                  this.__refreshDeactivate();
                }
              }
            }
          } else if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop;
          } else {
            scrollTop = minScrollTop;
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30);
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp);

      // Sync scroll position
      this.__publish(scrollLeft, scrollTop, level);

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      const minimumTrackingForScroll = this.options.locking ? 3 : 0;
      const minimumTrackingForDrag = 5;

      const distanceX = Math.abs(currentTouchLeft - this.__initialTouchLeft);
      const distanceY = Math.abs(currentTouchTop - this.__initialTouchTop);

      this.__enableScrollX = this.options.scrollingX && distanceX >= minimumTrackingForScroll;
      this.__enableScrollY = this.options.scrollingY && distanceY >= minimumTrackingForScroll;

      positions.push(this.__scrollLeft, this.__scrollTop, timeStamp);

      this.__isDragging =
        (this.__enableScrollX || this.__enableScrollY) &&
        (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
      if (this.__isDragging) {
        this.__interruptedAnimation = false;
      }
    }

    // Update last touch positions and time stamp for next event
    this.__lastTouchLeft = currentTouchLeft;
    this.__lastTouchTop = currentTouchTop;
    this.__lastTouchMove = timeStamp;
    this.__lastScale = scale;
  },


  /**
   * Touch end handler for scrolling support
   */
  doTouchEnd(time) {
    let timeStamp = time;
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error(`Invalid timestamp value: ${timeStamp}`);
    }

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove')
    // sits on the document and not on the element itself.
    if (!this.__isTracking) {
      return;
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    this.__isTracking = false;

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (this.__isDragging) {
      // Reset dragging flag
      this.__isDragging = false;

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (this.__isSingleTouch && this.options.animating &&
        (timeStamp - this.__lastTouchMove) <= 100) {
        // Then figure out what the scroll position was about 100ms ago
        const positions = this.__positions;
        const endPos = positions.length - 1;
        let startPos = endPos;

        // Move pointer to position measured 100ms ago
        for (let i = endPos; i > 0 && positions[i] > (this.__lastTouchMove - 100); i -= 3) {
          startPos = i;
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          const timeOffset = positions[endPos] - positions[startPos];
          const movedLeft = this.__scrollLeft - positions[startPos - 2];
          const movedTop = this.__scrollTop - positions[startPos - 1];

          // Based on 50ms compute the movement to apply for each render step
          this.__decelerationVelocityX = (movedLeft / timeOffset) * (1000 / 60);
          this.__decelerationVelocityY = (movedTop / timeOffset) * (1000 / 60);

          // How much velocity is required to start the deceleration
          const minVelocityToStartDeceleration =
            this.options.paging || this.options.snapping ? 4 : 1;

          // Verify that we have enough velocity to start deceleration
          if (Math.abs(this.__decelerationVelocityX) > minVelocityToStartDeceleration ||
            Math.abs(this.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            // Deactivate pull-to-refresh when decelerating
            if (!this.__refreshActive) {
              this.__startDeceleration(timeStamp);
            }
          } else {
            this.options.scrollingComplete();
          }
        } else {
          this.options.scrollingComplete();
        }
      } else if ((timeStamp - this.__lastTouchMove) > 100) {
        this.options.scrollingComplete();
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!this.__isDecelerating) {
      if (this.__refreshActive && this.__refreshStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc.
        // here because we only y-scrolling when pull-to-refresh is enabled
        this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

        if (this.__refreshStart) {
          this.__refreshStart();
        }
      } else {
        if (this.__interruptedAnimation || this.__isDragging) {
          this.options.scrollingComplete();
        }
        this.scrollTo(this.__scrollLeft, this.__scrollTop, true, this.__zoomLevel);

        // Directly signalize deactivation (nothing todo on refresh?)
        if (this.__refreshActive) {
          this.__refreshActive = false;
          if (this.__refreshDeactivate) {
            this.__refreshDeactivate();
          }
        }
      }
    }

    // Fully cleanup list
    this.__positions.length = 0;
  },


  /*
  ---------------------------------------------------------------------------
    PRIVATE API
  ---------------------------------------------------------------------------
  */

  /**
   * Applies the scroll position to the content element
   *
   * @param left {Number} Left scroll position
   * @param top {Number} Top scroll position
   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
   */
  __publish(left, top, zoom, animate) {
    this.options.onScroll(left, top, zoom, animate);

    // Remember whether we had an animation,
    // then we try to continue based on the current "drive" of the animation
    const wasAnimating = this.__isAnimating;
    if (wasAnimating) {
      _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].stop(wasAnimating);
      this.__isAnimating = false;
    }

    if (animate && this.options.animating) {
      // Keep scheduled positions for scrollBy/zoomBy functionality
      this.__scheduledLeft = left;
      this.__scheduledTop = top;
      this.__scheduledZoom = zoom;

      const oldLeft = this.__scrollLeft;
      const oldTop = this.__scrollTop;
      const oldZoom = this.__zoomLevel;

      const diffLeft = left - oldLeft;
      const diffTop = top - oldTop;
      const diffZoom = zoom - oldZoom;

      const step = (percent, now, render) => {
        if (render) {
          this.__scrollLeft = oldLeft + (diffLeft * percent);
          this.__scrollTop = oldTop + (diffTop * percent);
          this.__zoomLevel = oldZoom + (diffZoom * percent);

          // Push values out
          if (this.__callback) {
            this.__callback(this.__scrollLeft, this.__scrollTop, this.__zoomLevel);
          }
        }
      };

      const verify = id => this.__isAnimating === id;

      const completed = (renderedFramesPerSecond, animationId, wasFinished) => {
        if (animationId === this.__isAnimating) {
          this.__isAnimating = false;
        }
        if (this.__didDecelerationComplete || wasFinished) {
          this.options.scrollingComplete();
        }

        if (this.options.zooming) {
          this.__computeScrollMax();
          if (this.__zoomComplete) {
            this.__zoomComplete();
            this.__zoomComplete = null;
          }
        }
      };

      // When continuing based on previous animation
      // we choose an ease-out animation instead of ease-in-out
      this.__isAnimating = _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].start(
        step,
        verify,
        completed,
        this.options.animationDuration,
        wasAnimating ? easeOutCubic : easeInOutCubic,
      );
    } else {
      this.__scheduledLeft = left;
      this.__scrollLeft = left;
      this.__scheduledTop = top;
      this.__scrollTop = top;
      this.__scheduledZoom = zoom;
      this.__zoomLevel = zoom;

      // Push values out
      if (this.__callback) {
        this.__callback(left, top, zoom);
      }

      // Fix max scroll ranges
      if (this.options.zooming) {
        this.__computeScrollMax();
        if (this.__zoomComplete) {
          this.__zoomComplete();
          this.__zoomComplete = null;
        }
      }
    }
  },


  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax(z) {
    let zoomLevel = z;

    if (zoomLevel == null) {
      zoomLevel = this.__zoomLevel;
    }


    if (this.options.img) {
      // pega tamanho atual da imagem
      this.rectImg = this.rectImg ? this.rectImg : this.options.img.getBoundingClientRect();
      const unlockScrollX = this.rectImg.width * zoomLevel > this.__clientWidth;
      // trava scrollX caso a largura da imagem seja menor que a largura do client
      if (!unlockScrollX) this.options.scrollingX = false;
      else this.options.scrollingX = true;

      const unlockScrollY = this.rectImg.height * zoomLevel > this.__clientHeight;
      // trava scrollY caso a altura da imagem seja menor que a altura do client
      if (!unlockScrollY) this.options.scrollingY = false;
      else this.options.scrollingY = true;

      // obtem a diferença da imagem em relação ao seu container
      this.diffWidthInitial = this.diffWidthInitial ?
        this.diffWidthInitial :
        (this.__clientWidth - (this.rectImg.width * zoomLevel)) / 2;

      // obtem a diferença da imagem em relação ao seu container
      this.diffHeightInitial = this.diffHeightInitial ?
        this.diffHeightInitial :
        (this.__clientHeight - (this.rectImg.height * zoomLevel)) / 2;

      if (unlockScrollX && this.diffWidthInitial > 0) {
        this.__maxScrollLeft =
          Math.max(((this.__contentWidth - this.diffWidthInitial) * zoomLevel) -
            this.__clientWidth, 0);
        this.__minScrollLeft = this.diffWidthInitial * zoomLevel;
      } else {
        this.__maxScrollLeft = Math.max((this.__contentWidth * zoomLevel) - this.__clientWidth, 0);
        this.__minScrollLeft = 0;
      }

      if (unlockScrollY && this.diffHeightInitial > 0) {
        this.__maxScrollTop =
          Math.max(((this.__contentHeight - this.diffHeightInitial - 5) * zoomLevel) -
            this.__clientHeight, 0);
        this.__minScrollTop = this.diffHeightInitial * zoomLevel;
      } else {
        this.__maxScrollTop = Math.max((this.__contentHeight * zoomLevel) - this.__clientHeight, 0);
        this.__minScrollTop = 0;
      }
    } else {
      this.__maxScrollLeft = Math.max((this.__contentWidth * zoomLevel) - this.__clientWidth, 0);
      this.__maxScrollTop = Math.max((this.__contentHeight * zoomLevel) - this.__clientHeight, 0);

      this.__minScrollTop = 0;
    }
  },


  /*
  ---------------------------------------------------------------------------
    ANIMATION (DECELERATION) SUPPORT
  ---------------------------------------------------------------------------
  */

  /**
   * Called when a touch sequence end and the speed of the finger was high enough
   * to switch into deceleration mode.
   */
  __startDeceleration() {
    if (this.options.paging) {
      const scrollLeft = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0);
      const scrollTop = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0);
      const clientWidth = this.__clientWidth;
      const clientHeight = this.__clientHeight;

      // We limit deceleration not to the min/max values of the allowed range,
      // but to the size of the visible client area.
      // Each page should have exactly the size of the client area.
      this.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
      this.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
      this.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
      this.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
    } else {
      if (this.options.img) this.__minDecelerationScrollLeft = this.__minScrollLeft;
      else this.__minDecelerationScrollLeft = 0;

      if (this.options.img) this.__minDecelerationScrollTop = this.__minScrollTop;
      else this.__minDecelerationScrollTop = 0;

      this.__maxDecelerationScrollLeft = this.__maxScrollLeft;
      this.__maxDecelerationScrollTop = this.__maxScrollTop;
    }

    // Wrap class method
    const step = (percent, now, render) => {
      this.__stepThroughDeceleration(render);
    };

    // How much velocity is required to keep the deceleration running
    const minVelocityToKeepDecelerating = this.options.snapping ? 4 : 0.001;

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore,
    // we stop the whole process here.
    const verify = () => {
      // alterção
      const shouldContinue =
        Math.abs(this.__decelerationVelocityX) >= minVelocityToKeepDecelerating ||
        Math.abs(this.__decelerationVelocityY) >= minVelocityToKeepDecelerating + 0.100;
      if (!shouldContinue) {
        this.__didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    const completed = () => {
      this.__isDecelerating = false;
      if (this.__didDecelerationComplete) {
        this.options.scrollingComplete();
      }

      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
      this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping);
    };

    // Start animation and switch on flag
    this.__isDecelerating = _Animate__WEBPACK_IMPORTED_MODULE_0__["default"].start(step, verify, completed);
  },


  /**
   * Called on every step of the animation
   *
   * @param inMemory {Boolean?false} Whether to not render the current step,
   * but keep it in memory only. Used internally only!
   */
  __stepThroughDeceleration(render) {
    //
    // COMPUTE NEXT SCROLL POSITION
    //

    // Add deceleration to scroll position
    let scrollLeft = this.__scrollLeft + this.__decelerationVelocityX;
    let scrollTop = this.__scrollTop + this.__decelerationVelocityY;


    //
    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
    //

    if (!this.options.bouncing) {
      const scrollLeftFixed =
        Math.max(
          Math.min(this.__maxDecelerationScrollLeft, scrollLeft),
          this.__minDecelerationScrollLeft,
        );
      if (scrollLeftFixed !== scrollLeft) {
        scrollLeft = scrollLeftFixed;
        this.__decelerationVelocityX = 0;
      }

      const scrollTopFixed =
        Math.max(
          Math.min(this.__maxDecelerationScrollTop, scrollTop),
          this.__minDecelerationScrollTop,
        );
      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed;
        this.__decelerationVelocityY = 0;
      }
    }


    //
    // UPDATE SCROLL POSITION
    //

    if (render) {
      this.__publish(scrollLeft, scrollTop, this.__zoomLevel);
    } else {
      this.__scrollLeft = scrollLeft;
      this.__scrollTop = scrollTop;
    }


    //
    // SLOW DOWN
    //

    // Slow down velocity on every iteration
    if (!this.options.paging) {
      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      const frictionFactor = 0.95;

      this.__decelerationVelocityX *= frictionFactor;
      this.__decelerationVelocityY *= frictionFactor;
    }


    //
    // BOUNCING SUPPORT
    //

    if (this.options.bouncing) {
      let scrollOutsideX = 0;
      let scrollOutsideY = 0;

      // This configures the amount of change applied
      // to deceleration/acceleration when reaching boundaries
      const {
        penetrationDeceleration,
      } = this.options;
      const {
        penetrationAcceleration,
      } = this.options;

      // Check limits
      if (scrollLeft < this.__minDecelerationScrollLeft) {
        scrollOutsideX = this.__minDecelerationScrollLeft - scrollLeft;
      } else if (scrollLeft > this.__maxDecelerationScrollLeft) {
        scrollOutsideX = this.__maxDecelerationScrollLeft - scrollLeft;
      }

      if (scrollTop < this.__minDecelerationScrollTop) {
        scrollOutsideY = this.__minDecelerationScrollTop - scrollTop;
      } else if (scrollTop > this.__maxDecelerationScrollTop) {
        scrollOutsideY = this.__maxDecelerationScrollTop - scrollTop;
      }

      // Slow down until slow enough, then flip back to snap position
      if (scrollOutsideX !== 0) {
        if (scrollOutsideX * this.__decelerationVelocityX <= 0) {
          this.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
        } else {
          this.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
        }
      }

      if (scrollOutsideY !== 0) {
        if (scrollOutsideY * this.__decelerationVelocityY <= 0) {
          this.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
        } else {
          this.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
        }
      }
    }
  },
};

// Copy over members to prototype
Object.keys(members).forEach((key) => {
  Scroller.prototype[key] = members[key];
});

/* harmony default export */ __webpack_exports__["default"] = (Scroller);


/***/ }),

/***/ "./src/components/Component/Component.js":
/*!***********************************************!*\
  !*** ./src/components/Component/Component.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _interactjs = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");

var _interactjs2 = _interopRequireDefault(_interactjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: 'render',

    // render element in container received as param
    value: function render(container) {
      container.appendChild(this.elem);
    }

    // config resizable for the component that calls this method

  }, {
    key: 'configResizable',
    value: function configResizable(o) {
      var opts = o || {
        // default options
        left: true,
        minWidth: 150,
        maxWidth: 300,
        minHeight: '100%',
        maxHeight: '100%'
      };
      this.interactElem = (0, _interactjs2.default)(this.elem).resizable({
        // resize from all edges and corners
        edges: {
          left: opts.left,
          right: opts.right
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true
        },

        // minimum size
        restrictSize: {
          min: {
            width: opts.minWidth ? opts.minWidth : 150,
            height: opts.minHeight ? opts.minHeight : '100%'
          },
          max: {
            width: opts.maxWidth ? opts.maxWidth : 300,
            height: opts.maxHeight ? opts.maxHeight : '100%'
          }
        },

        inertia: true
      }).on('resizemove', function (event) {
        var target = event.target;

        // update the element's style

        target.style.width = event.rect.width + 'px';
      });
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),

/***/ "./src/components/GraphContainer/GraphContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/GraphContainer/GraphContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _interactjs = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");

var _interactjs2 = _interopRequireDefault(_interactjs);

var _zyngaScrollerWoodbettleEs = __webpack_require__(/*! zynga-scroller-woodbettle-es6 */ "./node_modules/zynga-scroller-woodbettle-es6/index.js");

var _resizeSensorEs = __webpack_require__(/*! resize-sensor-es6 */ "./node_modules/resize-sensor-es6/ResizeSensor.js");

var _resizeSensorEs2 = _interopRequireDefault(_resizeSensorEs);

__webpack_require__(/*! ./GraphContainer.scss */ "./src/components/GraphContainer/GraphContainer.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

var _Vertice = __webpack_require__(/*! ../Vertice/Vertice */ "./src/components/Vertice/Vertice.js");

var _Vertice2 = _interopRequireDefault(_Vertice);

var _ManageData = __webpack_require__(/*! ../ManageData/ManageData */ "./src/components/ManageData/ManageData.js");

var _ManageData2 = _interopRequireDefault(_ManageData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphContainer = function (_Component) {
  _inherits(GraphContainer, _Component);

  function GraphContainer() {
    _classCallCheck(this, GraphContainer);

    var _this = _possibleConstructorReturn(this, (GraphContainer.__proto__ || Object.getPrototypeOf(GraphContainer)).call(this));

    _this.init();
    _this.configDropZone();

    setTimeout(function () {
      _this.configZoom();
      _this.bindEvents();
    });
    return _this;
  }

  _createClass(GraphContainer, [{
    key: 'init',
    value: function init() {
      this.elem = document.createElement('div');
      this.elem.classList.add('GraphContainer');

      this.container = document.createElement('div');
      this.container.classList.add('container');
      this.elem.appendChild(this.container);

      this.content = document.createElement('div');
      this.content.classList.add('content');
      this.container.appendChild(this.content);

      this.manageData = new _ManageData2.default();
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      this.resizeSensor = new _resizeSensorEs2.default(this.elem, function () {
        _this2.reflowScroll();
      });
    }
  }, {
    key: 'configDropZone',
    value: function configDropZone() {
      var _this3 = this;

      (0, _interactjs2.default)(this.content).dropzone({
        // only accept elements matching this CSS selector
        accept: '.Vertice, .Aresta',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,

        // listen for drop related events:

        ondropactivate: function ondropactivate(event) {
          // add active dropzone feedback
          event.target.classList.add('drop-active');
          event.relatedTarget.classList.add('drop-active');
        },
        ondragenter: function ondragenter(event) {
          var draggableElement = event.relatedTarget;
          var dropzoneElement = event.target;

          // feedback the possibility of a drop
          dropzoneElement.classList.add('drop-target');
          draggableElement.classList.add('can-drop');
        },
        ondragleave: function ondragleave(event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
        },

        ondrop: function ondrop(event) {
          var e = event;
          // case sample
          if (e.relatedTarget.getAttribute('is-sample')) {
            // get dimension of vertice sample
            var rect = e.relatedTarget.getBoundingClientRect();

            var rectContent = _this3.content.getBoundingClientRect();

            // create new Vertice
            var vertice = new _Vertice2.default({
              top: rect.top - rectContent.top,
              left: rect.left - rectContent.left
            });
            _this3.manageData.pushVerticeData(vertice);
            vertice.render(_this3.content);
            vertice.focus();
          }
        },
        ondropdeactivate: function ondropdeactivate(event) {
          // remove active dropzone feedback
          event.target.classList.remove('drop-active');
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('drop-active');
        }
      });
    }
  }, {
    key: 'configZoom',
    value: function configZoom() {
      this.scroller = new _zyngaScrollerWoodbettleEs.Scroller(new _zyngaScrollerWoodbettleEs.ScrollRender(this.container, true), {
        scrollingX: true,
        scrollingY: true,
        animating: true,
        bouncing: false,
        locking: false,
        paging: false,
        zooming: true,
        minZoom: 0.5,
        maxZoom: 3,
        scrollingComplete: function _NOOP() {}
      });

      // Reflow handling
      this.reflowScroll();
      this.configTouchiesZoom();
    }
  }, {
    key: 'reflowScroll',
    value: function reflowScroll() {
      var clientRect = this.container.getBoundingClientRect();
      this.scroller.setPosition(clientRect.left + this.container.clientLeft, clientRect.top + this.container.clientHeight);

      this.scroller.options.img = this.content;
      var contentRect = this.content.getBoundingClientRect();

      var clientWidth = clientRect.width;
      var clientHeight = clientRect.height;
      var contentWidth = contentRect.width;
      var contentHeight = contentRect.height;
      this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
    }
  }, {
    key: 'configTouchiesZoom',
    value: function configTouchiesZoom() {
      var _this4 = this;

      this.minScale = 0.5;
      this.maxScale = 3;
      this.lastZoom = null;

      // register pinch event
      var scaling = void 0;

      var increment = 0.3;
      var sensitivity = 25;

      function getDistancePinch(e) {
        return Math.sqrt((e.touches[0].clientX - e.touches[1].clientX) * (e.touches[0].clientX - e.touches[1].clientX) + (e.touches[0].clientY - e.touches[1].clientY) * (e.touches[0].clientY - e.touches[1].clientY));
      }

      function getPositionPinch(e) {
        return {
          y: (e.touches[1].clientY + e.touches[0].clientY) / 2,
          x: (e.touches[1].clientX + e.touches[0].clientX) / 2
        };
      }

      var startDistance = void 0;
      var startScale = void 0;

      function pinchStart(e) {
        startDistance = getDistancePinch(e);
        startScale = this.lastZoom;
      }

      function pinchMove(e) {
        var dist = getDistancePinch(e);

        this.pinchZoom = ((dist - startDistance) * (increment / sensitivity) + startScale).between(this.minScale, this.maxScale);

        if (this.pinchZoom === this.lastZoom) return;

        this.scroller.zoomTo(this.pinchZoom, false, getPositionPinch(e).x, getPositionPinch(e).y);
      }

      function pinchEnd() {
        this.lastZoom = this.pinchZoom;
      }

      if ('ontouchstart' in window) {
        var touchStartFunction = function touchStartFunction(e) {
          if (e.touches.length === 2) {
            scaling = true;
            e.returnValue = false;
            pinchStart(e);
          }
          _this4.scroller.doTouchStart(e.touches, e.timeStamp);

          e.preventDefault();
        };

        var touchMoveFunction = function touchMoveFunction(e) {
          if (scaling) {
            pinchMove(e);
            e.returnValue = false;
          }
          _this4.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
        };

        var touchEndFunction = function touchEndFunction(e) {
          if (scaling) {
            pinchEnd(e);
            scaling = false;
            e.returnValue = false;
          }
          _this4.scroller.doTouchEnd(e.timeStamp);
        };

        var touchCancelFunction = function touchCancelFunction(e) {
          _this4.scroller.doTouchEnd(e.timeStamp);
        };

        this.elem.addEventListener('touchstart', touchStartFunction);
        this.elem.addEventListener('touchmove', touchMoveFunction);
        this.elem.addEventListener('touchend', touchEndFunction);
        this.elem.addEventListener('touchcancel', touchCancelFunction);
      } else {
        var mousedown = false;
        var mouseDownFunction = function mouseDownFunction(e) {
          // Don't react if initial down happens on a form element
          if (e.target.tagName.match(/input|textarea|select/i)) {
            return;
          }

          _this4.scroller.doTouchStart([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);

          mousedown = true;
        };

        var mouseMoveFunction = function mouseMoveFunction(e) {
          if (!mousedown) {
            return;
          }
          _this4.scroller.doTouchMove([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);
          mousedown = true;
        };

        var mouseUpFunction = function mouseUpFunction(e) {
          if (!mousedown) {
            return;
          }
          _this4.scroller.doTouchEnd(e.timeStamp);

          mousedown = false;
        };

        var mouseWheelFunction = function mouseWheelFunction(e) {
          _this4.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
          _this4.pinchZoom = _this4.scroller.getValues().zoom;
        };

        this.elem.addEventListener('mousedown', mouseDownFunction, false);
        this.elem.addEventListener('mousemove', mouseMoveFunction, false);
        this.elem.addEventListener('mouseup', mouseUpFunction, false);
        this.elem.addEventListener('mousewheel', mouseWheelFunction, false);
      }

      // $ionicGesture.on('doubletap', function (e) {
      //   // only executes the action if it is not in the middle of an image transition
      //   if (scrollerMain.getValues().left / widthView % 1 === 0) {
      //     var scale = pinchZoom ? pinchZoom : lastZoom;
      //     if (scale < maxScale) {
      //       pinchZoom = maxScale;
      //       inZoom = true;
      //     } else {
      //       pinchZoom = minScale;
      //       inZoom = false;
      //     }

      //     lastZoom = pinchZoom

      //     // zoom to the point where the user clicked
      //     zooming = true;
      //     arrayScrollers[currentIndex].zoomTo(
      //        pinchZoom, true, e.gesture.center.pageX, e.gesture.center.pageY, function () {
      //       zooming = false;
      //     });
      //   }
      // }, $(divContainerView));
    }
  }]);

  return GraphContainer;
}(_Component3.default);

exports.default = GraphContainer;

/***/ }),

/***/ "./src/components/GraphContainer/GraphContainer.scss":
/*!***********************************************************!*\
  !*** ./src/components/GraphContainer/GraphContainer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./GraphContainer.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/GraphContainer/GraphContainer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/MainContainer/MainContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/MainContainer/MainContainer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./MainContainer.scss */ "./src/components/MainContainer/MainContainer.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

var _GraphContainer = __webpack_require__(/*! ../GraphContainer/GraphContainer */ "./src/components/GraphContainer/GraphContainer.js");

var _GraphContainer2 = _interopRequireDefault(_GraphContainer);

var _ToolPanel = __webpack_require__(/*! ../ToolPanel/ToolPanel */ "./src/components/ToolPanel/ToolPanel.js");

var _ToolPanel2 = _interopRequireDefault(_ToolPanel);

var _VerticePanel = __webpack_require__(/*! ../VerticePanel/VerticePanel */ "./src/components/VerticePanel/VerticePanel.js");

var _VerticePanel2 = _interopRequireDefault(_VerticePanel);

var _ManageData = __webpack_require__(/*! ../ManageData/ManageData */ "./src/components/ManageData/ManageData.js");

var _ManageData2 = _interopRequireDefault(_ManageData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContainer = function (_Component) {
  _inherits(MainContainer, _Component);

  function MainContainer() {
    _classCallCheck(this, MainContainer);

    var _this = _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).call(this));

    _this.init();
    return _this;
  }

  _createClass(MainContainer, [{
    key: 'init',
    value: function init() {
      this.elem = document.createElement('div');
      this.elem.classList.add('MainContainer');

      // create new VerticePanel
      var verticePanel = new _VerticePanel2.default();
      verticePanel.render(this.elem);
      this.manageData = new _ManageData2.default();
      this.manageData.verticePanel = verticePanel;

      // create new GraphContainer
      var graphContainer = new _GraphContainer2.default();
      graphContainer.render(this.elem);

      // create new ToolPanel
      var toolPanel = new _ToolPanel2.default();
      toolPanel.render(this.elem);
    }
  }]);

  return MainContainer;
}(_Component3.default);

exports.default = MainContainer;

/***/ }),

/***/ "./src/components/MainContainer/MainContainer.scss":
/*!*********************************************************!*\
  !*** ./src/components/MainContainer/MainContainer.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./MainContainer.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/MainContainer/MainContainer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/ManageData/ManageData.js":
/*!*************************************************!*\
  !*** ./src/components/ManageData/ManageData.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerticePanel = __webpack_require__(/*! ../VerticePanel/VerticePanel */ "./src/components/VerticePanel/VerticePanel.js");

var _VerticePanel2 = _interopRequireDefault(_VerticePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var ManageData = function () {
  function ManageData() {
    _classCallCheck(this, ManageData);

    // construct a singleton
    if (instance) return instance;
    instance = this;

    // get instance of VerticePanel
    this.verticePanel = new _VerticePanel2.default();

    this.init();
  }

  _createClass(ManageData, [{
    key: 'init',
    value: function init() {
      this.data = [];
    }

    // push vertice element into array data

  }, {
    key: 'pushVerticeData',
    value: function pushVerticeData(vertice) {
      this.data.push({
        name: '',
        vertice: vertice,
        value: vertice.value,
        isInitial: false,
        isFinal: false
      });
    }

    // get Vertice data passing the Vertice instance

  }, {
    key: 'getVerticeData',
    value: function getVerticeData(vertice) {
      return this.data.find(function (v) {
        if (v.vertice === vertice) return v;
        return false;
      });
    }

    // show data of the Vertice passed in VerticePanel

  }, {
    key: 'showDataVertice',
    value: function showDataVertice(vertice) {
      this.verticePanel.showData(this.getVerticeData(vertice));
    }

    // set Vertice data value passing the Vertice instance and value

  }, {
    key: 'setVerticeData',
    value: function setVerticeData(vertice, f, value, verticeCaller) {
      var _this = this;

      var field = f || 'value';
      this.data.some(function (v) {
        var v1 = v;
        if (v1.vertice === vertice) {
          v1[field] = value;
          // update data into verticePanel
          if (verticeCaller) _this.verticePanel.showData(v1);else v1.vertice[field] = value;
          return true;
        }
        return false;
      });
    }
  }]);

  return ManageData;
}();

exports.default = ManageData;

/***/ }),

/***/ "./src/components/SwitchButton/SwitchButton.js":
/*!*****************************************************!*\
  !*** ./src/components/SwitchButton/SwitchButton.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./SwitchButton.scss */ "./src/components/SwitchButton/SwitchButton.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchButton = function (_Component) {
  _inherits(SwitchButton, _Component);

  function SwitchButton(opts) {
    _classCallCheck(this, SwitchButton);

    var _this = _possibleConstructorReturn(this, (SwitchButton.__proto__ || Object.getPrototypeOf(SwitchButton)).call(this));

    _this.opts = opts || {};
    // get dynamic id
    if (!_this.opts.id) _this.opts.id = _this.opts.title || 'shadow';

    _this.init();
    return _this;
  }

  _createClass(SwitchButton, [{
    key: 'init',
    value: function init() {
      this.elem = document.createElement('div');
      this.elem.classList.add('SwitchButton');

      // create title if passed param
      if (this.opts && this.opts.title) {
        this.title = document.createElement('p');
        this.title.innerText = this.opts.title;
        this.elem.appendChild(this.title);
      }

      // create element input
      this.input = document.createElement('input');
      this.input.id = 'switch-' + this.opts.id;
      this.input.classList.add('switch');
      this.input.classList.add('switch--shadow');
      this.input.type = 'checkbox';
      this.elem.appendChild(this.input);

      // create element label
      this.label = document.createElement('label');
      this.label.htmlFor = 'switch-' + this.opts.id;
      this.elem.appendChild(this.label);

      this.bindEvents();
    }
  }, {
    key: 'change',
    value: function change(callback) {
      this.callback = callback;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      this.input.addEventListener('change', function (e) {
        _this2.callback(e.target.checked);
      });
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.input.checked;
    },
    set: function set(value) {
      this.input.checked = value;
    }
  }, {
    key: 'disabled',
    get: function get() {
      return !!this.init.disabled;
    },
    set: function set(value) {
      this.input.disabled = !!value;
    }
  }]);

  return SwitchButton;
}(_Component3.default);

exports.default = SwitchButton;

/***/ }),

/***/ "./src/components/SwitchButton/SwitchButton.scss":
/*!*******************************************************!*\
  !*** ./src/components/SwitchButton/SwitchButton.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./SwitchButton.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/SwitchButton/SwitchButton.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/ToolPanel/ToolPanel.js":
/*!***********************************************!*\
  !*** ./src/components/ToolPanel/ToolPanel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(/*! ./ToolPanel.scss */ "./src/components/ToolPanel/ToolPanel.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

var _Vertice = __webpack_require__(/*! ../Vertice/Vertice */ "./src/components/Vertice/Vertice.js");

var _Vertice2 = _interopRequireDefault(_Vertice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolPanel = function (_Component) {
  _inherits(ToolPanel, _Component);

  function ToolPanel() {
    _classCallCheck(this, ToolPanel);

    var _this = _possibleConstructorReturn(this, (ToolPanel.__proto__ || Object.getPrototypeOf(ToolPanel)).call(this));

    _this.init();
    return _this;
  }

  _createClass(ToolPanel, [{
    key: 'init',
    value: function init() {
      // create main element
      this.elem = document.createElement('div');
      this.elem.classList.add('ToolPanel');

      // create container for Components
      this.containerComponents = document.createElement('div');
      this.containerComponents.classList.add('container-components');

      // create Vertice to show on the panel
      this.verticeSample = _Vertice2.default.verticeSample();

      // append verticeSample
      this.containerComponents.appendChild(this.verticeSample);

      // append container of components
      this.elem.appendChild(this.containerComponents);

      // config component resizing
      _get(ToolPanel.prototype.__proto__ || Object.getPrototypeOf(ToolPanel.prototype), 'configResizable', this).call(this);
    }
  }, {
    key: 'changeSide',
    value: function changeSide(side) {
      this.inLeft = side === 'left';
      this.interactElem.options.resize.edges.left = !this.inLeft;
      this.interactElem.options.resize.edges.right = this.inLeft;
      if (this.inLeft) this.elem.classList.add('in-left');else this.elem.classList.remove('in-left');
    }
  }]);

  return ToolPanel;
}(_Component3.default);

exports.default = ToolPanel;

/***/ }),

/***/ "./src/components/ToolPanel/ToolPanel.scss":
/*!*************************************************!*\
  !*** ./src/components/ToolPanel/ToolPanel.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./ToolPanel.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/ToolPanel/ToolPanel.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Vertice/Vertice.js":
/*!*******************************************!*\
  !*** ./src/components/Vertice/Vertice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _interactjs = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");

var _interactjs2 = _interopRequireDefault(_interactjs);

__webpack_require__(/*! ./Vertice.scss */ "./src/components/Vertice/Vertice.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

var _ManageData = __webpack_require__(/*! ../ManageData/ManageData */ "./src/components/ManageData/ManageData.js");

var _ManageData2 = _interopRequireDefault(_ManageData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vertice = function (_Component) {
  _inherits(Vertice, _Component);

  _createClass(Vertice, null, [{
    key: 'verticeSample',

    // create elem to show in the panel to listener hold event
    // call callback on hold event to create new component
    value: function verticeSample() {
      var container = document.createElement('div');
      container.classList.add('container-vertice-sample');
      var elem = Vertice.createElem();
      elem.classList.add('Vertice-Sample');
      elem.setAttribute('is-sample', 1);
      container.appendChild(elem);
      var p = document.createElement('p');
      p.innerText = 'Vértice';
      container.appendChild(p);
      return container;
    }

    // create default Vertice element

  }, {
    key: 'createElem',
    value: function createElem(newInstance) {
      var elem = document.createElement('div');
      elem.classList.add('Vertice');
      Vertice.configDrag(elem, newInstance);
      return elem;
    }
  }, {
    key: 'configDrag',
    value: function configDrag(elem, newInstance) {
      // target elements with the "draggable" class
      (0, _interactjs2.default)(elem).preventDefault(true).draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
          restriction: newInstance ? 'parent' : undefined,
          endOnly: true,
          elementRect: {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1
          }
        },
        // disable autoScroll
        autoScroll: false,

        // call this function on every dragmove event
        onmove: function onmove(event) {
          var target = event.target;
          // keep the dragged position in the data-x/data-y attributes

          var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)';
          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },

        // call this function on every dragend event
        onend: function onend(event) {
          var target = event.target;


          var textEl = target.querySelector('p');

          if (textEl) {
            textEl.textContent = 'moved a distance of ' + Math.sqrt(Math.pow(event.pageX - event.x0, 2) + Math.pow(event.pageY - event.y0, 2)).toFixed(2) + 'px';
          }

          // reset vertice sample if is static VerticeSample
          if (!newInstance) {
            setTimeout(function () {
              // translate the element
              target.style.webkitTransform = 'translate(0px, 0px)';
              target.style.transform = 'translate(0px, 0px)';

              // update the posiion attributes
              target.setAttribute('data-x', 0);
              target.setAttribute('data-y', 0);
            });
          }
        }
      });
    }
  }]);

  function Vertice(opts) {
    _classCallCheck(this, Vertice);

    var _this = _possibleConstructorReturn(this, (Vertice.__proto__ || Object.getPrototypeOf(Vertice)).call(this));

    _this.opts = typeof opts === 'undefined' ? {} : opts;
    _this.opts.top = typeof _this.opts.top === 'undefined' ? 0 : _this.opts.top;
    _this.opts.left = typeof _this.opts.left === 'undefined' ? 0 : _this.opts.left;
    _this.init();
    return _this;
  }

  // get component value


  _createClass(Vertice, [{
    key: 'configTap',
    value: function configTap() {
      var _this2 = this;

      (0, _interactjs2.default)(this.elem).on('tap', function () {
        _this2.manageData.showDataVertice(_this2);
        _this2.focus();
      });
    }

    // init component

  }, {
    key: 'init',
    value: function init() {
      // create main elem using static method
      this.elem = Vertice.createElem(true);
      this.elem.style.marginTop = this.opts.top + 'px';
      this.elem.style.marginLeft = this.opts.left + 'px';
      this.input = document.createElement('input');
      this.elem.appendChild(this.input);
      this.manageData = new _ManageData2.default();
      this.configTap();
      this.bindEvents();
    }

    // focus in input element

  }, {
    key: 'focus',
    value: function focus() {
      this.input.focus();
      this.manageData.showDataVertice(this);
    }

    // bind events

  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this3 = this;

      this.input.addEventListener('input', function (e) {
        // set new value in array of data
        _this3.manageData.setVerticeData(_this3, 'value', e.target.value, true);
      });
    }
  }, {
    key: 'value',
    get: function get() {
      return this.input.value;
    }

    // get if component is final
    ,


    // set componente value
    set: function set(value) {
      var v = value;
      if (!v || typeof v !== 'string') v = '';
      this.input.value = v;
    }

    // set if component is final

  }, {
    key: 'isFinal',
    get: function get() {
      return !!this.elem.classList.contains('isFinal');
    }

    // get if component is initial
    ,
    set: function set(value) {
      if ((!value || typeof value !== 'string') && this.elem.classList.contains('isFinal')) {
        this.elem.classList.remove('isFinal');
      } else {
        this.elem.classList.add('isFinal');
      }
    }

    // set if component is initial

  }, {
    key: 'isInitial',
    get: function get() {
      return !!this.elem.classList.contains('isInitial');
    },
    set: function set(value) {
      if ((!value || typeof value !== 'string') && this.elem.classList.contains('isInitial')) {
        this.elem.classList.remove('isInitial');
      } else {
        this.elem.classList.add('isInitial');
      }
    }
  }]);

  return Vertice;
}(_Component3.default);

exports.default = Vertice;

/***/ }),

/***/ "./src/components/Vertice/Vertice.scss":
/*!*********************************************!*\
  !*** ./src/components/Vertice/Vertice.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./Vertice.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Vertice/Vertice.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/VerticePanel/VerticePanel.js":
/*!*****************************************************!*\
  !*** ./src/components/VerticePanel/VerticePanel.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(/*! ./VerticePanel.scss */ "./src/components/VerticePanel/VerticePanel.scss");

var _Component2 = __webpack_require__(/*! ../Component/Component */ "./src/components/Component/Component.js");

var _Component3 = _interopRequireDefault(_Component2);

var _ManageData = __webpack_require__(/*! ../ManageData/ManageData */ "./src/components/ManageData/ManageData.js");

var _ManageData2 = _interopRequireDefault(_ManageData);

var _SwitchButton = __webpack_require__(/*! ../SwitchButton/SwitchButton */ "./src/components/SwitchButton/SwitchButton.js");

var _SwitchButton2 = _interopRequireDefault(_SwitchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var instance = null;

var VerticePanel = function (_Component) {
  _inherits(VerticePanel, _Component);

  function VerticePanel() {
    var _ret;

    _classCallCheck(this, VerticePanel);

    // construct a singleton
    var _this = _possibleConstructorReturn(this, (VerticePanel.__proto__ || Object.getPrototypeOf(VerticePanel)).call(this));

    if (instance) return _ret = instance, _possibleConstructorReturn(_this, _ret);
    instance = _this;

    _this.init();
    return _this;
  }

  _createClass(VerticePanel, [{
    key: 'init',
    value: function init() {
      this.manageData = new _ManageData2.default();

      // create main element
      this.elem = document.createElement('div');
      this.elem.classList.add('VerticePanel');

      this.dataContainer = document.createElement('div');
      this.dataContainer.classList.add('data-container');

      // create name container
      this.nameContainer = document.createElement('div');
      this.nameContainer.classList.add('sub-container');
      this.nameContainer.innerHTML = '<p>Nome: </p>';
      this.nameInput = document.createElement('input');
      this.nameContainer.appendChild(this.nameInput);
      this.dataContainer.appendChild(this.nameContainer);

      // create value container
      this.valueContainer = document.createElement('div');
      this.valueContainer.classList.add('sub-container');
      this.valueContainer.innerHTML = '<p>Valor: </p>';
      this.valueInput = document.createElement('input');
      this.valueContainer.appendChild(this.valueInput);
      this.dataContainer.appendChild(this.valueContainer);

      // create switch button for isInitial
      this.isInitial = new _SwitchButton2.default({
        title: 'Inicial'
      });
      this.isInitial.render(this.dataContainer);

      // create switch button for isFinal
      this.isFinal = new _SwitchButton2.default({
        title: 'Final'
      });
      this.isFinal.render(this.dataContainer);

      this.elem.appendChild(this.dataContainer);

      // element init hidden
      this.disable();

      this.bindEvents();

      // config component resizing
      _get(VerticePanel.prototype.__proto__ || Object.getPrototypeOf(VerticePanel.prototype), 'configResizable', this).call(this, {
        right: true,
        minWidth: 100,
        maxWidth: 150
      });
    }
  }, {
    key: 'showData',
    value: function showData(data) {
      this.dataVertice = data;
      this.nameInput.value = this.dataVertice.name;
      this.valueInput.value = this.dataVertice.value;
      this.isInitial.checked = this.dataVertice.isInitial;
      this.isFinal.checked = this.dataVertice.isFinal;
      this.enable();
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.elem.classList.contains('disable')) {
        this.elem.classList.add('disable');
        this.nameInput.disabled = true;
        this.valueInput.disabled = true;
        this.isInitial.disabled = true;
        this.isFinal.disabled = true;
      }
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.elem.classList.contains('disable')) {
        this.elem.classList.remove('disable');
        this.nameInput.disabled = false;
        this.valueInput.disabled = false;
        this.isInitial.disabled = false;
        this.isFinal.disabled = false;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      if (this.elem.classList.contains('hidden')) this.elem.classList.remove('hidden');
    }
  }, {
    key: 'hidden',
    value: function hidden() {
      if (!this.elem.classList.contains('hidden')) this.elem.classList.add('hidden');
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      // update name vertice
      this.nameInput.addEventListener('input', function (e) {
        // change direct object because propagate into ManageData
        if (_this2.dataVertice) _this2.dataVertice.name = e.target.value;
      });

      this.valueInput.addEventListener('input', function (e) {
        if (_this2.dataVertice) _this2.manageData.setVerticeData(_this2.dataVertice.vertice, 'value', e.target.value);
      });

      this.isInitial.change(function (value) {
        if (_this2.dataVertice) _this2.manageData.setVerticeData(_this2.dataVertice.vertice, 'isInitial', value);
      });

      this.isFinal.change(function (value) {
        if (_this2.dataVertice) _this2.manageData.setVerticeData(_this2.dataVertice.vertice, 'isFinal', value);
      });
    }
  }]);

  return VerticePanel;
}(_Component3.default);

exports.default = VerticePanel;

/***/ }),

/***/ "./src/components/VerticePanel/VerticePanel.scss":
/*!*******************************************************!*\
  !*** ./src/components/VerticePanel/VerticePanel.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./VerticePanel.scss */ "./node_modules/css-loader/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/VerticePanel/VerticePanel.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WarpRouter=e():t.WarpRouter=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var o=function(){function t(){this.defaultRoute=null}return t}();e.Configuration=o},function(t,e,n){"use strict";var o=n(0),r=function(){function t(t,e,n){void 0===n&&(n=new o.Configuration),this.selector=t,this.routes=e,this.configuration=n,this.hostElement=document.querySelector(t),null!==n.defaultRoute&&(window.location.hash=n.defaultRoute,this.applyRouteContentFunction(n.defaultRoute)),this.addListeners()}return t.prototype.applyRouteContentFunction=function(t){try{var e=this.routes.get(t);this.hostElement.innerHTML=e()}catch(t){throw new Error("Unrecognised route")}},t.prototype.addListeners=function(){var t=this;window.addEventListener("hashchange",function(e){t.applyRouteContentFunction(window.location.hash)})},t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=r}])});
//# sourceMappingURL=warp-router.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Configuration = (function () {
    function Configuration() {
        this.defaultRoute = null;
    }
    return Configuration;
}());
exports.Configuration = Configuration;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var warp_router_1 = __webpack_require__(0);
var Configuration_1 = __webpack_require__(1);
function createDemo() {
    var routes = new Map();
    routes.set("", function () {
        return "This is the home page";
    });
    routes.set("#page1", function () {
        return "This is page 1";
    });
    routes.set("#page2", function () {
        return "This is page 2";
    });
    var configuration = new Configuration_1.Configuration();
    configuration.defaultRoute = "";
    var component = new warp_router_1.default('.container', routes, configuration);
}
createDemo();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
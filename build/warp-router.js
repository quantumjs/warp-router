!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WarpRouter=e():t.WarpRouter=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var o=function(){function t(){this.defaultRoute=null}return t}();e.Configuration=o},function(t,e,n){"use strict";var o=n(0),r=function(){function t(t,e,n){void 0===n&&(n=new o.Configuration),this.selector=t,this.routes=e,this.configuration=n,this.hostElement=document.querySelector(t),null!==n.defaultRoute&&(window.location.hash=n.defaultRoute,this.applyRouteContentFunction(n.defaultRoute)),this.addListeners()}return t.prototype.applyRouteContentFunction=function(t){try{var e=this.routes.get(t);this.hostElement.innerHTML=e()}catch(t){throw new Error("Unrecognised route")}},t.prototype.addListeners=function(){var t=this;window.addEventListener("hashchange",function(e){t.applyRouteContentFunction(window.location.hash)})},t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=r}])});
//# sourceMappingURL=warp-router.js.map
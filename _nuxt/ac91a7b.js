(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},238:function(t,e,n){var r=n(239);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.default=t.exports,t.exports.__esModule=!0},239:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.default=t.exports,t.exports.__esModule=!0},240:function(t,e,n){"use strict";n.r(e);n(39);var r=n(241),o={name:"LangSwitcher",components:{ArrowIcon:n.n(r).a},data:function(){return{currentLang:"PL",langOpen:!1}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},currentLocale:function(){return this.$i18n.localeProperties}},mounted:function(){console.log(this.$i18n)}},c=n(54),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"navbar__item dropdown",on:{click:function(e){e.preventDefault(),t.langOpen=!t.langOpen}}},[n("span",{staticClass:"navbar__link navbar__link--red navbar__dropdown",attrs:{id:"langSwitcher","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("img",{attrs:{src:t.currentLocale.code+".png",alt:t.currentLocale.name}}),t._v("\n    "+t._s(t.currentLocale.name)+"\n    "),n("ArrowIcon")],1),t._v(" "),n("div",{staticClass:"dropdown-menu",class:t.langOpen?"d-block":null,attrs:{"aria-labelledby":"langSwitcher"}},t._l(t.availableLocales,(function(e){return n("nuxt-link",{key:e.code,staticClass:"dropdown-item",attrs:{to:t.switchLocalePath(e.code)}},[n("img",{attrs:{src:e.code+".png",alt:e.name}}),t._v("\n\n      "+t._s(e.name))])})),1)])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){n(32),n(24),n(39),n(48),n(31),n(49);var r=n(237),o=n(238),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(55),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,O=data.class,v=data.staticClass,style=data.style,w=data.staticStyle,y=data.attrs,_=void 0===y?{}:y,m=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[O,v],style:[style,w],attrs:Object.assign({viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg"},_)},m),d.concat([n("title"),n("path",{attrs:{d:"M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z"}})]))}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["siterecording","ninjacapture96"],{"0cb2":function(e,r,t){var _=t("7b0b"),n=Math.floor,a="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,s=/\$([$&'`]|\d\d?)/g;e.exports=function(e,r,t,o,c,u){var l=t+e.length,f=o.length,d=s;return void 0!==c&&(c=_(c),d=i),a.call(u,d,(function(_,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,t);case"'":return r.slice(l);case"<":i=c[a.slice(1,-1)];break;default:var s=+a;if(0===s)return _;if(s>f){var u=n(s/10);return 0===u?_:u<=f?void 0===o[u-1]?a.charAt(1):o[u-1]+a.charAt(1):_}i=o[s-1]}return void 0===i?"":i}))}},"159b":function(e,r,t){var _=t("da84"),n=t("fdbc"),a=t("17c2"),i=t("9112");for(var s in n){var o=_[s],c=o&&o.prototype;if(c&&c.forEach!==a)try{i(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(e,r,t){"use strict";var _=t("b727").forEach,n=t("a640"),a=t("ae40"),i=n("forEach"),s=a("forEach");e.exports=i&&s?[].forEach:function(e){return _(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,r,t){var _=t("d039"),n=t("b622"),a=t("2d00"),i=n("species");e.exports=function(e){return a>=51||!_((function(){var r=[],t=r.constructor={};return t[i]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},4160:function(e,r,t){"use strict";var _=t("23e7"),n=t("17c2");_({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},5319:function(e,r,t){"use strict";var _=t("d784"),n=t("825a"),a=t("50c4"),i=t("a691"),s=t("1d80"),o=t("8aa5"),c=t("0cb2"),u=t("14c3"),l=Math.max,f=Math.min,d=function(e){return void 0===e?e:String(e)};_("replace",2,(function(e,r,t,_){var p=_.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=_.REPLACE_KEEPS_$0,m=p?"$":"$0";return[function(t,_){var n=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n,_):r.call(String(n),t,_)},function(e,_){if(!p&&h||"string"===typeof _&&-1===_.indexOf(m)){var s=t(r,e,this,_);if(s.done)return s.value}var b=n(e),E=String(this),g="function"===typeof _;g||(_=String(_));var v=b.global;if(v){var O=b.unicode;b.lastIndex=0}var y=[];while(1){var P=u(b,E);if(null===P)break;if(y.push(P),!v)break;var D=String(P[0]);""===D&&(b.lastIndex=o(E,a(b.lastIndex),O))}for(var w="",k=0,C=0;C<y.length;C++){P=y[C];for(var M=String(P[0]),R=l(f(i(P.index),E.length),0),j=[],x=1;x<P.length;x++)j.push(d(P[x]));var T=P.groups;if(g){var A=[M].concat(j,R,E);void 0!==T&&A.push(T);var I=String(_.apply(void 0,A))}else I=c(M,E,R,j,T,_);R>=k&&(w+=E.slice(k,R)+I,k=R+M.length)}return w+E.slice(k)}]}))},"65f0":function(e,r,t){var _=t("861d"),n=t("e8b5"),a=t("b622"),i=a("species");e.exports=function(e,r){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)?_(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},"99af":function(e,r,t){"use strict";var _=t("23e7"),n=t("d039"),a=t("e8b5"),i=t("861d"),s=t("7b0b"),o=t("50c4"),c=t("8418"),u=t("65f0"),l=t("1dde"),f=t("b622"),d=t("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=d>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),E=l("concat"),g=function(e){if(!i(e))return!1;var r=e[p];return void 0!==r?!!r:a(e)},v=!b||!E;_({target:"Array",proto:!0,forced:v},{concat:function(e){var r,t,_,n,a,i=s(this),l=u(i,0),f=0;for(r=-1,_=arguments.length;r<_;r++)if(a=-1===r?i:arguments[r],g(a)){if(n=o(a.length),f+n>h)throw TypeError(m);for(t=0;t<n;t++,f++)t in a&&c(l,f,a[t])}else{if(f>=h)throw TypeError(m);c(l,f++,a)}return l.length=f,l}})},a11a:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Data}));var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4160"),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("bee2"),axios=__webpack_require__("bc3a"),PCors="https://my.${region}.500apps.com/pcors",Region=window.region,Data=function(){function Data(url,params){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["a"])(this,Data);var region=Region;this.url=eval("`"+url+"`"),params&&(this.params=params),this.pcors=!0,this.offset=0,this.limit=50,this.enableOffset=!1}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["a"])(Data,[{key:"useOffset",value:function(){this.enableOffset=!0,this.limit=25}},{key:"disablePCors",value:function(){this.pcors=!1}},{key:"getConfig",value:function(){return{headers:{withCredentials:!0}}}},{key:"getPCors",value:function getPCors(url){if(url||(url=this.url),!this.pcors)return url;var PCors_URL="".concat(PCors,"?url=").concat(encodeURIComponent(url));return PCors_URL=eval("`"+PCors_URL+"`"),PCors_URL}},{key:"getOffset",value:function(e){return this.enableOffset?(e=this.append(e,"offset=".concat(this.offset)),e):e}},{key:"setOffset",value:function(e){this.offset=e}},{key:"incrementOffset",value:function(){this.offset+=this.limit}},{key:"getLimit",value:function(e){return e=this.append(e,"limit=".concat(this.limit)),e}},{key:"getParams",value:function(e){return this.params?this.append(e,this.params):e}},{key:"setParams",value:function(e){e&&(this.params=e)}},{key:"append",value:function(e,r){e||(e="");var t="?";return-1!=e.indexOf("?")&&(t="&"),e="".concat(e).concat(t).concat(r),e}},{key:"get",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url),r=this.url,r=this.getLimit(r),r=this.getOffset(r),r=this.getParams(r),e.next=7,axios.get(this.getPCors(r),this.getConfig());case 7:return t=e.sent,t=t.data,this.incrementOffset(),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"get_details",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var t,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url,r),t="".concat(this.url,"/").concat(r),e.next=4,axios.get(this.getPCors(t),this.getConfig());case 4:return _=e.sent,_=_.data,e.abrupt("return",_);case 7:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}()},{key:"add",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,r),e.next=3,axios.post(this.getPCors(),{data:[r]},this.getConfig());case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}()},{key:"edit",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r,t){var _;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Editing",this.url,r,t),t.id||(t.id=r),e.next=4,axios.put(this.getPCors(),t,this.getConfig());case 4:return _=e.sent,e.abrupt("return",_.data);case 6:case"end":return e.stop()}}),e,this)})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"delete",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var t,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Deleting",this.url,r),t="".concat(this.url,"?where=id=").concat(r),e.next=4,axios.delete(t,this.getConfig());case 4:return _=e.sent,e.abrupt("return",_);case 6:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}()},{key:"count",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat(this.url.replace("/v2","/v2/aggregate"),"/count"),e.next=3,axios.get(this.getPCors(r),this.getConfig());case 3:return t=e.sent,t=t.data,e.abrupt("return",t[0].count);case 6:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"editForm",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r,t){var _,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _=new FormData,Object.keys(t).forEach((function(e){_.append(e,t[e])})),e.next=4,this.edit(r,_);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"multi_call",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,r),this.url=this.getParams(this.url),e.next=4,axios.post(this.getPCors(),r,this.getConfig());case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}()},{key:"pageCacheClear",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={headers:{"secret-header":!0}},e.next=3,axios.head(this.getPCors(),r);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"getURL",value:function(){return this.url}},{key:"getRegion",value:function(){return Region}}]),Data}()},a640:function(e,r,t){"use strict";var _=t("d039");e.exports=function(e,r){var t=[][e];return!!t&&_((function(){t.call(null,r||function(){throw 1},1)}))}},b64b:function(e,r,t){var _=t("23e7"),n=t("7b0b"),a=t("df75"),i=t("d039"),s=i((function(){a(1)}));_({target:"Object",stat:!0,forced:s},{keys:function(e){return a(n(e))}})},b727:function(e,r,t){var _=t("0366"),n=t("44ad"),a=t("7b0b"),i=t("50c4"),s=t("65f0"),o=[].push,c=function(e){var r=1==e,t=2==e,c=3==e,u=4==e,l=6==e,f=7==e,d=5==e||l;return function(p,h,m,b){for(var E,g,v=a(p),O=n(v),y=_(h,m,3),P=i(O.length),D=0,w=b||s,k=r?w(p,P):t||f?w(p,0):void 0;P>D;D++)if((d||D in O)&&(E=O[D],g=y(E,D,v),e))if(r)k[D]=g;else if(g)switch(e){case 3:return!0;case 5:return E;case 6:return D;case 2:o.call(k,E)}else switch(e){case 4:return!1;case 7:o.call(k,E)}return l?-1:c||u?u:k}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},bee2:function(e,r,t){"use strict";function _(e,r){for(var t=0;t<r.length;t++){var _=r[t];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function n(e,r,t){return r&&_(e.prototype,r),t&&_(e,t),e}t.d(r,"a",(function(){return n}))},c747:function(e,r,t){"use strict";t("d3b7");var _=t("d4ec"),n=t("bee2"),a=function(){function e(){Object(_["a"])(this,e)}return Object(n["a"])(e,[{key:"downloadJS",value:function(e){var r=document.createElement("script");r.src=e,r.type="text/javascript",r.async=!1,document.getElementsByTagName("head")[0].appendChild(r)}},{key:"downloadCSS",value:function(e,r){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,r&&(t.id=r),document.getElementsByTagName("head")[0].appendChild(t)}},{key:"remove",value:function(e){document.getElementById(e)&&document.getElementById(e).remove()}},{key:"loadWithPromise",value:function(e,r){return new Promise((function(t,_){if(document.querySelector('script[src="'+e+'"]'))t("done");else{var n=document.createElement("script");n.src=e,r&&(n.id=r),document.head.appendChild(n),n.addEventListener("load",(function(){t("done")}))}}))}}]),e}();r["a"]=new a},c975:function(e,r,t){"use strict";var _=t("23e7"),n=t("4d64").indexOf,a=t("a640"),i=t("ae40"),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});_({target:"Array",proto:!0,forced:o||!c||!u},{indexOf:function(e){return o?s.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},cea1:function(e,r,t){"use strict";t.r(r);var _=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",{attrs:{fluid:""}},[t("b-container",{staticClass:"h-100"},[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("div",{staticClass:"main-player mx-auto w-100",attrs:{id:"siteplayer"}},[e.loader?t("div",{staticClass:"d-flex justify-content-center py-5",attrs:{id:"siteplayer-loader"}},[t("b-spinner",{attrs:{label:"Loading...",variant:"primary"}})],1):e._e()])])],1)],1)],1)},n=[],a=(t("96cf"),t("1da1")),i=t("c747"),s=t("a11a"),o={data:function(){return{loader:!0}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].downloadCSS("https://infinity.500apps.com/css/siterecording/player-styles.css");case 2:return e.next=4,i["a"].loadWithPromise("https://infinity.500apps.com/js/siterecording/player.min.js","player");case 4:this.playBackPlayer();case 5:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),methods:{playBackPlayer:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t,_;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=(new s["a"]).getRegion(),r.next=3,window._sr_p.init(e.$route.params.session_id,"",t,window.domain);case 3:_=setInterval((function(){window.completed&&(e.loader=!1,clearInterval(_))}),0);case 4:case"end":return r.stop()}}),r)})))()}}},c=o,u=t("2877"),l=Object(u["a"])(c,_,n,!1,null,null,null);r["default"]=l.exports},d4ec:function(e,r,t){"use strict";function _(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}t.d(r,"a",(function(){return _}))},e8b5:function(e,r,t){var _=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==_(e)}}}]);
//# sourceMappingURL=siterecording.fdbf50ec.js.map
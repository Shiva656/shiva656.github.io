(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form~ninjacapture60~ninjacapture62~ninjacapture90~ninjacapture92~ninjacapture94~recruit","ninjacapture96"],{"0538":function(e,_,t){"use strict";var r=t("1c0b"),n=t("861d"),a=[].slice,i={},s=function(e,_,t){if(!(_ in i)){for(var r=[],n=0;n<_;n++)r[n]="a["+n+"]";i[_]=Function("C,a","return new C("+r.join(",")+")")}return i[_](e,t)};e.exports=Function.bind||function(e){var _=r(this),t=a.call(arguments,1),i=function(){var r=t.concat(a.call(arguments));return this instanceof i?s(_,r.length,r):_.apply(e,r)};return n(_.prototype)&&(i.prototype=_.prototype),i}},"257e":function(e,_,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(_,"a",(function(){return r}))},"262e":function(e,_,t){"use strict";function r(e,_){return r=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e},r(e,_)}function n(e,_){if("function"!==typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&r(e,_)}t.d(_,"a",(function(){return n}))},"2caf":function(e,_,t){"use strict";t.d(_,"a",(function(){return o}));t("4ae1");var r=t("7e84");t("d3b7"),t("25f0");function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var a=t("53ca"),i=t("257e");function s(e,_){return!_||"object"!==Object(a["a"])(_)&&"function"!==typeof _?Object(i["a"])(e):_}function o(e){var _=n();return function(){var t,n=Object(r["a"])(e);if(_){var a=Object(r["a"])(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return s(this,t)}}},3410:function(e,_,t){var r=t("23e7"),n=t("d039"),a=t("7b0b"),i=t("e163"),s=t("e177"),o=n((function(){i(1)}));r({target:"Object",stat:!0,forced:o,sham:!s},{getPrototypeOf:function(e){return i(a(e))}})},"4ae1":function(e,_,t){var r=t("23e7"),n=t("d066"),a=t("1c0b"),i=t("825a"),s=t("861d"),o=t("7c73"),c=t("0538"),u=t("d039"),l=n("Reflect","construct"),p=u((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),f=!u((function(){l((function(){}))})),m=p||f;r({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(e,_){a(e),i(_);var t=arguments.length<3?e:a(arguments[2]);if(f&&!p)return l(e,_,t);if(e==t){switch(_.length){case 0:return new e;case 1:return new e(_[0]);case 2:return new e(_[0],_[1]);case 3:return new e(_[0],_[1],_[2]);case 4:return new e(_[0],_[1],_[2],_[3])}var r=[null];return r.push.apply(r,_),new(c.apply(e,r))}var n=t.prototype,u=o(s(n)?n:Object.prototype),m=Function.apply.call(e,u,_);return s(m)?m:u}})},"583b":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("bee2"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("262e"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("2caf"),_core_data__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("a11a"),Forms_URL="https://api.${region}.500apps.com/forms/",Forms=function(_Data){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["a"])(Forms,_Data);var _super=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["a"])(Forms);function Forms(){return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["a"])(this,Forms),_super.call(this,Forms_URL)}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["a"])(Forms,[{key:"getData",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(_,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.generateURL(_,t),e.next=3,this.get();case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function _(_,t){return e.apply(this,arguments)}return _}()},{key:"saveForm",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(_,t,r,n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.generateURL(t,r,n,a),e.next=3,this.multi_call(_);case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)})));function _(_,t,r,n,a){return e.apply(this,arguments)}return _}()},{key:"generateURL",value:function generateURL(form_id,email,embed,request_id){this.disablePCors(),this.url="";var region=this.getRegion();this.params=request_id?"email=".concat(email,"&request_id=").concat(request_id):embed?"type=".concat(embed):"email=".concat(email);var url="".concat(Forms_URL).concat(window.domain,"/").concat(form_id);this.url=eval("`"+url+"`")}}]),Forms}(_core_data__WEBPACK_IMPORTED_MODULE_7__["a"]);__webpack_exports__["a"]=new Forms},"7e84":function(e,_,t){"use strict";t.d(_,"a",(function(){return r}));t("3410");function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}},"9aa6":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("bee2"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("262e"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("2caf"),_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("a11a"),axios=__webpack_require__("bc3a"),File_Manager_URL="https://api.${region}.500apps.com/files/public/signed",Delete_File_URL="https://api.${region}.500apps.com/files/object",FileManager=function(_Data){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["a"])(FileManager,_Data);var _super=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["a"])(FileManager);function FileManager(){return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["a"])(this,FileManager),_super.call(this,File_Manager_URL)}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["a"])(FileManager,[{key:"getFiles",value:function(){var _getFiles=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee(appname){var region,url,results;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return region=this.getRegion(),url="".concat(File_Manager_URL,"/?app=").concat(appname),this.url=eval("`"+url+"`"),this.disablePCors(),this.setOffset(0),_context.next=7,this.get();case 7:return results=_context.sent,_context.abrupt("return",results);case 9:case"end":return _context.stop()}}),_callee,this)})));function getFiles(e){return _getFiles.apply(this,arguments)}return getFiles}()},{key:"getSignedLink",value:function(){var _getSignedLink=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee2(appname,postType,file,contentType,acl){var region,url,results;return regeneratorRuntime.wrap((function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:return region=this.getRegion(),url="".concat(File_Manager_URL,"/").concat(window.domain,"?key=").concat(file,"&type=").concat(postType,"&content_type=").concat(contentType,"&acl=").concat(acl,"&app=").concat(appname),this.url=eval("`"+url+"`"),this.disablePCors(),this.setOffset(0),console.log("Get signed Link",this.url),_context2.next=8,this.get();case 8:return results=_context2.sent,_context2.abrupt("return",results.presign_url);case 10:case"end":return _context2.stop()}}),_callee2,this)})));function getSignedLink(e,_,t,r,n){return _getSignedLink.apply(this,arguments)}return getSignedLink}()},{key:"upload",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function e(_,t,r,n,a,i){var s,o,c,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getSignedLink(_,t,r.name,a,i);case 2:for(u in s=e.sent,o=new FormData,c=s.fields,c)o.append(u,c[u]);return o.append("file",r),n=n||o,l={headers:{"Content-Type":"".concat(a),"x-amz-acl":"".concat(i)}},console.log("File upload function URL ",s.url),e.next=12,axios.post(s.url,n,l);case 12:return p=e.sent,p=p.data,e.abrupt("return",{upload_data:p,presign_data:s});case 15:case"end":return e.stop()}}),e,this)})));function _(_,t,r,n,a,i){return e.apply(this,arguments)}return _}()},{key:"delete",value:function(){var _delete2=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee4(appname,file_name){var url,region,config,delete_response;return regeneratorRuntime.wrap((function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:return url="".concat(Delete_File_URL,"?key=").concat(file_name,"&app=").concat(appname),region=this.getRegion(),url=eval("`"+url+"`"),config={headers:{Authorization:"Bearer",withCredentials:!0}},_context4.next=6,axios.delete(url,config);case 6:return delete_response=_context4.sent,_context4.abrupt("return",delete_response);case 8:case"end":return _context4.stop()}}),_callee4,this)})));function _delete(e,_){return _delete2.apply(this,arguments)}return _delete}()}]),FileManager}(_data__WEBPACK_IMPORTED_MODULE_8__["a"]);__webpack_exports__["a"]=new FileManager},a11a:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Data}));var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4160"),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("bee2"),axios=__webpack_require__("bc3a"),PCors="https://my.${region}.500apps.com/pcors",Region=window.region,Data=function(){function Data(url,params){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["a"])(this,Data);var region=Region;this.url=eval("`"+url+"`"),params&&(this.params=params),this.pcors=!0,this.offset=0,this.limit=50,this.enableOffset=!1}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["a"])(Data,[{key:"useOffset",value:function(){this.enableOffset=!0,this.limit=25}},{key:"disablePCors",value:function(){this.pcors=!1}},{key:"getConfig",value:function(){return{headers:{withCredentials:!0}}}},{key:"getPCors",value:function getPCors(url){if(url||(url=this.url),!this.pcors)return url;var PCors_URL="".concat(PCors,"?url=").concat(encodeURIComponent(url));return PCors_URL=eval("`"+PCors_URL+"`"),PCors_URL}},{key:"getOffset",value:function(e){return this.enableOffset?(e=this.append(e,"offset=".concat(this.offset)),e):e}},{key:"setOffset",value:function(e){this.offset=e}},{key:"incrementOffset",value:function(){this.offset+=this.limit}},{key:"getLimit",value:function(e){return e=this.append(e,"limit=".concat(this.limit)),e}},{key:"getParams",value:function(e){return this.params?this.append(e,this.params):e}},{key:"setParams",value:function(e){e&&(this.params=e)}},{key:"append",value:function(e,_){e||(e="");var t="?";return-1!=e.indexOf("?")&&(t="&"),e="".concat(e).concat(t).concat(_),e}},{key:"get",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var _,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url),_=this.url,_=this.getLimit(_),_=this.getOffset(_),_=this.getParams(_),e.next=7,axios.get(this.getPCors(_),this.getConfig());case 7:return t=e.sent,t=t.data,this.incrementOffset(),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,this)})));function _(){return e.apply(this,arguments)}return _}()},{key:"get_details",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url,_),t="".concat(this.url,"/").concat(_),e.next=4,axios.get(this.getPCors(t),this.getConfig());case 4:return r=e.sent,r=r.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));function _(_){return e.apply(this,arguments)}return _}()},{key:"add",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,_),e.next=3,axios.post(this.getPCors(),{data:[_]},this.getConfig());case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));function _(_){return e.apply(this,arguments)}return _}()},{key:"edit",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Editing",this.url,_,t),t.id||(t.id=_),e.next=4,axios.put(this.getPCors(),t,this.getConfig());case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e,this)})));function _(_,t){return e.apply(this,arguments)}return _}()},{key:"delete",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Deleting",this.url,_),t="".concat(this.url,"?where=id=").concat(_),e.next=4,axios.delete(t,this.getConfig());case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function _(_){return e.apply(this,arguments)}return _}()},{key:"count",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var _,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _="".concat(this.url.replace("/v2","/v2/aggregate"),"/count"),e.next=3,axios.get(this.getPCors(_),this.getConfig());case 3:return t=e.sent,t=t.data,e.abrupt("return",t[0].count);case 6:case"end":return e.stop()}}),e,this)})));function _(){return e.apply(this,arguments)}return _}()},{key:"editForm",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_,t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,Object.keys(t).forEach((function(e){r.append(e,t[e])})),e.next=4,this.edit(_,r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function _(_,t){return e.apply(this,arguments)}return _}()},{key:"multi_call",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(_){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,_),this.url=this.getParams(this.url),e.next=4,axios.post(this.getPCors(),_,this.getConfig());case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e,this)})));function _(_){return e.apply(this,arguments)}return _}()},{key:"pageCacheClear",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var _,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _={headers:{"secret-header":!0}},e.next=3,axios.head(this.getPCors(),_);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function _(){return e.apply(this,arguments)}return _}()},{key:"getURL",value:function(){return this.url}},{key:"getRegion",value:function(){return Region}}]),Data}()},bee2:function(e,_,t){"use strict";function r(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,_,t){return _&&r(e.prototype,_),t&&r(e,t),e}t.d(_,"a",(function(){return n}))},c975:function(e,_,t){"use strict";var r=t("23e7"),n=t("4d64").indexOf,a=t("a640"),i=t("ae40"),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:o||!c||!u},{indexOf:function(e){return o?s.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d4ec:function(e,_,t){"use strict";function r(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}t.d(_,"a",(function(){return r}))}}]);
//# sourceMappingURL=form~ninjacapture60~ninjacapture62~ninjacapture90~ninjacapture92~ninjacapture94~recruit.5c9d81b4.js.map
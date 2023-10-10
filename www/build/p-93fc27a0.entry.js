import{r as t,h as r,H as n}from"./p-fc9cd10b.js";import{s as e}from"./p-195fe440.js";function i(t){const{host:r,path:n,query:e}=t;const i=r.endsWith("/")?r:`${r}/`;const s=new URL(n,i);s.search=o(e);return s.toString()}function o(t={}){const r=Object.keys(t).filter((r=>t[r]!==undefined)).reduce(((r,n)=>{r[n]=t[n];return r}),{});return new URLSearchParams(r).toString()}class s extends Error{constructor(t,r,n){super(t);this.status=n;this.url=r}}var u=typeof globalThis!=="undefined"&&globalThis||typeof self!=="undefined"&&self||typeof u!=="undefined"&&u;var a={searchParams:"URLSearchParams"in u,iterable:"Symbol"in u&&"iterator"in Symbol,blob:"FileReader"in u&&"Blob"in u&&function(){try{new Blob;return true}catch(t){return false}}(),formData:"FormData"in u,arrayBuffer:"ArrayBuffer"in u};function f(t){return t&&DataView.prototype.isPrototypeOf(t)}if(a.arrayBuffer){var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"];var h=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1}}function l(t){if(typeof t!=="string"){t=String(t)}if(/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||t===""){throw new TypeError('Invalid character in header field name: "'+t+'"')}return t.toLowerCase()}function v(t){if(typeof t!=="string"){t=String(t)}return t}function w(t){var r={next:function(){var r=t.shift();return{done:r===undefined,value:r}}};if(a.iterable){r[Symbol.iterator]=function(){return r}}return r}function d(t){this.map={};if(t instanceof d){t.forEach((function(t,r){this.append(r,t)}),this)}else if(Array.isArray(t)){t.forEach((function(t){this.append(t[0],t[1])}),this)}else if(t){Object.getOwnPropertyNames(t).forEach((function(r){this.append(r,t[r])}),this)}}d.prototype.append=function(t,r){t=l(t);r=v(r);var n=this.map[t];this.map[t]=n?n+", "+r:r};d.prototype["delete"]=function(t){delete this.map[l(t)]};d.prototype.get=function(t){t=l(t);return this.has(t)?this.map[t]:null};d.prototype.has=function(t){return this.map.hasOwnProperty(l(t))};d.prototype.set=function(t,r){this.map[l(t)]=v(r)};d.prototype.forEach=function(t,r){for(var n in this.map){if(this.map.hasOwnProperty(n)){t.call(r,this.map[n],n,this)}}};d.prototype.keys=function(){var t=[];this.forEach((function(r,n){t.push(n)}));return w(t)};d.prototype.values=function(){var t=[];this.forEach((function(r){t.push(r)}));return w(t)};d.prototype.entries=function(){var t=[];this.forEach((function(r,n){t.push([n,r])}));return w(t)};if(a.iterable){d.prototype[Symbol.iterator]=d.prototype.entries}function y(t){if(t.bodyUsed){return Promise.reject(new TypeError("Already read"))}t.bodyUsed=true}function p(t){return new Promise((function(r,n){t.onload=function(){r(t.result)};t.onerror=function(){n(t.error)}}))}function b(t){var r=new FileReader;var n=p(r);r.readAsArrayBuffer(t);return n}function m(t){var r=new FileReader;var n=p(r);r.readAsText(t);return n}function g(t){var r=new Uint8Array(t);var n=new Array(r.length);for(var e=0;e<r.length;e++){n[e]=String.fromCharCode(r[e])}return n.join("")}function T(t){if(t.slice){return t.slice(0)}else{var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(t));return r.buffer}}function j(){this.bodyUsed=false;this._initBody=function(t){this.bodyUsed=this.bodyUsed;this._bodyInit=t;if(!t){this._bodyText=""}else if(typeof t==="string"){this._bodyText=t}else if(a.blob&&Blob.prototype.isPrototypeOf(t)){this._bodyBlob=t}else if(a.formData&&FormData.prototype.isPrototypeOf(t)){this._bodyFormData=t}else if(a.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)){this._bodyText=t.toString()}else if(a.arrayBuffer&&a.blob&&f(t)){this._bodyArrayBuffer=T(t.buffer);this._bodyInit=new Blob([this._bodyArrayBuffer])}else if(a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))){this._bodyArrayBuffer=T(t)}else{this._bodyText=t=Object.prototype.toString.call(t)}if(!this.headers.get("content-type")){if(typeof t==="string"){this.headers.set("content-type","text/plain;charset=UTF-8")}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set("content-type",this._bodyBlob.type)}else if(a.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)){this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8")}}};if(a.blob){this.blob=function(){var t=y(this);if(t){return t}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))}else if(this._bodyFormData){throw new Error("could not read FormData body as blob")}else{return Promise.resolve(new Blob([this._bodyText]))}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);if(t){return t}if(ArrayBuffer.isView(this._bodyArrayBuffer)){return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength))}else{return Promise.resolve(this._bodyArrayBuffer)}}else{return this.blob().then(b)}}}this.text=function(){var t=y(this);if(t){return t}if(this._bodyBlob){return m(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(g(this._bodyArrayBuffer))}else if(this._bodyFormData){throw new Error("could not read FormData body as text")}else{return Promise.resolve(this._bodyText)}};if(a.formData){this.formData=function(){return this.text().then(O)}}this.json=function(){return this.text().then(JSON.parse)};return this}var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function A(t){var r=t.toUpperCase();return E.indexOf(r)>-1?r:t}function D(t,r){if(!(this instanceof D)){throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')}r=r||{};var n=r.body;if(t instanceof D){if(t.bodyUsed){throw new TypeError("Already read")}this.url=t.url;this.credentials=t.credentials;if(!r.headers){this.headers=new d(t.headers)}this.method=t.method;this.mode=t.mode;this.signal=t.signal;if(!n&&t._bodyInit!=null){n=t._bodyInit;t.bodyUsed=true}}else{this.url=String(t)}this.credentials=r.credentials||this.credentials||"same-origin";if(r.headers||!this.headers){this.headers=new d(r.headers)}this.method=A(r.method||this.method||"GET");this.mode=r.mode||this.mode||null;this.signal=r.signal||this.signal;this.referrer=null;if((this.method==="GET"||this.method==="HEAD")&&n){throw new TypeError("Body not allowed for GET or HEAD requests")}this._initBody(n);if(this.method==="GET"||this.method==="HEAD"){if(r.cache==="no-store"||r.cache==="no-cache"){var e=/([?&])_=[^&]*/;if(e.test(this.url)){this.url=this.url.replace(e,"$1_="+(new Date).getTime())}else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}}D.prototype.clone=function(){return new D(this,{body:this._bodyInit})};function O(t){var r=new FormData;t.trim().split("&").forEach((function(t){if(t){var n=t.split("=");var e=n.shift().replace(/\+/g," ");var i=n.join("=").replace(/\+/g," ");r.append(decodeURIComponent(e),decodeURIComponent(i))}}));return r}function P(t){var r=new d;var n=t.replace(/\r?\n[\t ]+/g," ");n.split("\r").map((function(t){return t.indexOf("\n")===0?t.substr(1,t.length):t})).forEach((function(t){var n=t.split(":");var e=n.shift().trim();if(e){var i=n.join(":").trim();r.append(e,i)}}));return r}j.call(D.prototype);function S(t,r){if(!(this instanceof S)){throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')}if(!r){r={}}this.type="default";this.status=r.status===undefined?200:r.status;this.ok=this.status>=200&&this.status<300;this.statusText=r.statusText===undefined?"":""+r.statusText;this.headers=new d(r.headers);this.url=r.url||"";this._initBody(t)}j.call(S.prototype);S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})};S.error=function(){var t=new S(null,{status:0,statusText:""});t.type="error";return t};var x=[301,302,303,307,308];S.redirect=function(t,r){if(x.indexOf(r)===-1){throw new RangeError("Invalid status code")}return new S(null,{status:r,headers:{location:t}})};var R=u.DOMException;try{new R}catch(t){R=function(t,r){this.message=t;this.name=r;var n=Error(t);this.stack=n.stack};R.prototype=Object.create(Error.prototype);R.prototype.constructor=R}function U(t,r){return new Promise((function(n,e){var i=new D(t,r);if(i.signal&&i.signal.aborted){return e(new R("Aborted","AbortError"))}var o=new XMLHttpRequest;function s(){o.abort()}o.onload=function(){var t={status:o.status,statusText:o.statusText,headers:P(o.getAllResponseHeaders()||"")};t.url="responseURL"in o?o.responseURL:t.headers.get("X-Request-URL");var r="response"in o?o.response:o.responseText;setTimeout((function(){n(new S(r,t))}),0)};o.onerror=function(){setTimeout((function(){e(new TypeError("Network request failed"))}),0)};o.ontimeout=function(){setTimeout((function(){e(new TypeError("Network request failed"))}),0)};o.onabort=function(){setTimeout((function(){e(new R("Aborted","AbortError"))}),0)};function f(t){try{return t===""&&u.location.href?u.location.href:t}catch(r){return t}}o.open(i.method,f(i.url),true);if(i.credentials==="include"){o.withCredentials=true}else if(i.credentials==="omit"){o.withCredentials=false}if("responseType"in o){if(a.blob){o.responseType="blob"}else if(a.arrayBuffer&&i.headers.get("Content-Type")&&i.headers.get("Content-Type").indexOf("application/octet-stream")!==-1){o.responseType="arraybuffer"}}if(r&&typeof r.headers==="object"&&!(r.headers instanceof d)){Object.getOwnPropertyNames(r.headers).forEach((function(t){o.setRequestHeader(t,v(r.headers[t]))}))}else{i.headers.forEach((function(t,r){o.setRequestHeader(r,t)}))}if(i.signal){i.signal.addEventListener("abort",s);o.onreadystatechange=function(){if(o.readyState===4){i.signal.removeEventListener("abort",s)}}}o.send(typeof i._bodyInit==="undefined"?null:i._bodyInit)}))}U.polyfill=true;if(!u.fetch){u.fetch=U;u.Headers=d;u.Request=D;u.Response=S}self.fetch.bind(self);function F(t,r,n,e,i,o,s){try{var u=t[o](s);var a=u.value}catch(t){n(t);return}if(u.done){r(a)}else{Promise.resolve(a).then(e,i)}}function L(t){return function(){var r=this,n=arguments;return new Promise((function(e,i){var o=t.apply(r,n);function s(t){F(o,e,i,s,u,"next",t)}function u(t){F(o,e,i,s,u,"throw",t)}s(undefined)}))}}function B(){B=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n){if(Object.prototype.hasOwnProperty.call(n,e)){t[e]=n[e]}}}return t};return B.apply(this,arguments)}function _(t,r){return r={exports:{}},t(r,r.exports),r.exports}var G=_((function(t){var r=function(t){var r=Object.prototype;var n=r.hasOwnProperty;var e;var i=typeof Symbol==="function"?Symbol:{};var o=i.iterator||"@@iterator";var s=i.asyncIterator||"@@asyncIterator";var u=i.toStringTag||"@@toStringTag";function a(t,r,n){Object.defineProperty(t,r,{value:n,enumerable:true,configurable:true,writable:true});return t[r]}try{a({},"")}catch(t){a=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof y?r:y;var o=Object.create(i.prototype);var s=new x(e||[]);o._invoke=D(t,n,s);return o}t.wrap=f;function c(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}var h="suspendedStart";var l="suspendedYield";var v="executing";var w="completed";var d={};function y(){}function p(){}function b(){}var m={};a(m,o,(function(){return this}));var g=Object.getPrototypeOf;var T=g&&g(g(R([])));if(T&&T!==r&&n.call(T,o)){m=T}var j=b.prototype=y.prototype=Object.create(m);p.prototype=b;a(j,"constructor",b);a(b,"constructor",p);p.displayName=a(b,u,"GeneratorFunction");function E(t){["next","throw","return"].forEach((function(r){a(t,r,(function(t){return this._invoke(r,t)}))}))}t.isGeneratorFunction=function(t){var r=typeof t==="function"&&t.constructor;return r?r===p||(r.displayName||r.name)==="GeneratorFunction":false};t.mark=function(t){if(Object.setPrototypeOf){Object.setPrototypeOf(t,b)}else{t.__proto__=b;a(t,u,"GeneratorFunction")}t.prototype=Object.create(j);return t};t.awrap=function(t){return{__await:t}};function A(t,r){function e(i,o,s,u){var a=c(t[i],t,o);if(a.type==="throw"){u(a.arg)}else{var f=a.arg;var h=f.value;if(h&&typeof h==="object"&&n.call(h,"__await")){return r.resolve(h.__await).then((function(t){e("next",t,s,u)}),(function(t){e("throw",t,s,u)}))}return r.resolve(h).then((function(t){f.value=t;s(f)}),(function(t){return e("throw",t,s,u)}))}}var i;function o(t,n){function o(){return new r((function(r,i){e(t,n,r,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}E(A.prototype);a(A.prototype,s,(function(){return this}));t.AsyncIterator=A;t.async=function(r,n,e,i,o){if(o===void 0)o=Promise;var s=new A(f(r,n,e,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))};function D(t,r,n){var e=h;return function i(o,s){if(e===v){throw new Error("Generator is already running")}if(e===w){if(o==="throw"){throw s}return U()}n.method=o;n.arg=s;while(true){var u=n.delegate;if(u){var a=O(u,n);if(a){if(a===d)continue;return a}}if(n.method==="next"){n.sent=n._sent=n.arg}else if(n.method==="throw"){if(e===h){e=w;throw n.arg}n.dispatchException(n.arg)}else if(n.method==="return"){n.abrupt("return",n.arg)}e=v;var f=c(t,r,n);if(f.type==="normal"){e=n.done?w:l;if(f.arg===d){continue}return{value:f.arg,done:n.done}}else if(f.type==="throw"){e=w;n.method="throw";n.arg=f.arg}}}}function O(t,r){var n=t.iterator[r.method];if(n===e){r.delegate=null;if(r.method==="throw"){if(t.iterator["return"]){r.method="return";r.arg=e;O(t,r);if(r.method==="throw"){return d}}r.method="throw";r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=c(n,t.iterator,r.arg);if(i.type==="throw"){r.method="throw";r.arg=i.arg;r.delegate=null;return d}var o=i.arg;if(!o){r.method="throw";r.arg=new TypeError("iterator result is not an object");r.delegate=null;return d}if(o.done){r[t.resultName]=o.value;r.next=t.nextLoc;if(r.method!=="return"){r.method="next";r.arg=e}}else{return o}r.delegate=null;return d}E(j);a(j,u,"Generator");a(j,o,(function(){return this}));a(j,"toString",(function(){return"[object Generator]"}));function P(t){var r={tryLoc:t[0]};if(1 in t){r.catchLoc=t[1]}if(2 in t){r.finallyLoc=t[2];r.afterLoc=t[3]}this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal";delete r.arg;t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}];t.forEach(P,this);this.reset(true)}t.keys=function(t){var r=[];for(var n in t){r.push(n)}r.reverse();return function n(){while(r.length){var e=r.pop();if(e in t){n.value=e;n.done=false;return n}}n.done=true;return n}};function R(t){if(t){var r=t[o];if(r){return r.call(t)}if(typeof t.next==="function"){return t}if(!isNaN(t.length)){var i=-1,s=function r(){while(++i<t.length){if(n.call(t,i)){r.value=t[i];r.done=false;return r}}r.value=e;r.done=true;return r};return s.next=s}}return{next:U}}t.values=R;function U(){return{value:e,done:true}}x.prototype={constructor:x,reset:function(t){this.prev=0;this.next=0;this.sent=this._sent=e;this.done=false;this.delegate=null;this.method="next";this.arg=e;this.tryEntries.forEach(S);if(!t){for(var r in this){if(r.charAt(0)==="t"&&n.call(this,r)&&!isNaN(+r.slice(1))){this[r]=e}}}},stop:function(){this.done=true;var t=this.tryEntries[0];var r=t.completion;if(r.type==="throw"){throw r.arg}return this.rval},dispatchException:function(t){if(this.done){throw t}var r=this;function i(n,i){u.type="throw";u.arg=t;r.next=n;if(i){r.method="next";r.arg=e}return!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o];var u=s.completion;if(s.tryLoc==="root"){return i("end")}if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc");var f=n.call(s,"finallyLoc");if(a&&f){if(this.prev<s.catchLoc){return i(s.catchLoc,true)}else if(this.prev<s.finallyLoc){return i(s.finallyLoc)}}else if(a){if(this.prev<s.catchLoc){return i(s.catchLoc,true)}}else if(f){if(this.prev<s.finallyLoc){return i(s.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}if(o&&(t==="break"||t==="continue")&&o.tryLoc<=r&&r<=o.finallyLoc){o=null}var s=o?o.completion:{};s.type=t;s.arg=r;if(o){this.method="next";this.next=o.finallyLoc;return d}return this.complete(s)},complete:function(t,r){if(t.type==="throw"){throw t.arg}if(t.type==="break"||t.type==="continue"){this.next=t.arg}else if(t.type==="return"){this.rval=this.arg=t.arg;this.method="return";this.next="end"}else if(t.type==="normal"&&r){this.next=r}return d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t){this.complete(n.completion,n.afterLoc);S(n);return d}}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if(e.type==="throw"){var i=e.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){this.delegate={iterator:R(t),resultName:r,nextLoc:n};if(this.method==="next"){this.arg=e}return d}};return t}(t.exports);try{regeneratorRuntime=r}catch(t){if(typeof globalThis==="object"){globalThis.regeneratorRuntime=r}else{Function("r","regeneratorRuntime = r")(r)}}}));function N(t,r){var n=t.scope,e=t.startDate,i=t.endDate,o=t.metrics,s=t.dimensions,u=t.dimensionFilters,a=u===void 0?[]:u,f=t.timeDimension,c=t.orderBy,h=t.limit,l=t.offset,v=t.emptyRows;var w=r.customDimensionsConfig;var d=s!=null&&s.length&&w?k(s,w):s;var y=w?I(a,w):a;return B({},r,{httpMethod:"POST",params:{scope:n,dateRange:{startDate:e,endDate:i},metrics:o,dimensions:d,dimensionFilters:y,timeDimension:f,orderBy:c,limit:h,offset:l,emptyRows:v}})}function k(t,r){return t.map((function(t){var n=r[t];if(n){return"dimension"+n}return t}))}function I(t,r){if(t===void 0){t=[]}return t.map((function(t){var n=r[t.name];if(n){return B({},t,{name:"dimension"+n})}return t}))}function q(t,r,n){return C.apply(this,arguments)}function C(){C=L(G.mark((function t(r,n,e){var o,u,a,f,c,h,l,v;return G.wrap((function t(w){while(1){switch(w.prev=w.next){case 0:o=N(n,e),u=o.authentication,a=o.httpMethod,f=o.params,c=o.hubApiUrl;h={headers:{"Content-Type":"application/json",Authorization:""+(u==null?void 0:u.token)},method:a,body:JSON.stringify(f)};l=i({host:c||"https://hub.arcgis.com",path:"/api/telemetry/v1/"+r.replace(/^\//,"")});w.next=5;return fetch(l,h);case 5:v=w.sent;if(v.ok){w.next=8;break}throw new s("Error! status: ",l,v.status);case 8:return w.abrupt("return",v.json());case 9:case"end":return w.stop()}}}),t)})));return C.apply(this,arguments)}function H(t,r){return M.apply(this,arguments)}function M(){M=L(G.mark((function t(r,n){var e,i;return G.wrap((function t(o){while(1){switch(o.prev=o.next){case 0:o.next=2;return q("/report",r,n);case 2:e=o.sent;i=n.customDimensionsConfig;if(!$(r.dimensions,i)){o.next=6;break}return o.abrupt("return",z(e,i));case 6:return o.abrupt("return",e);case 7:case"end":return o.stop()}}}),t)})));return M.apply(this,arguments)}function $(t,r){if(!t||!r){return false}return t.some((function(t){return Object.keys(r).includes(t)}))}function J(t){if(t===void 0){t={}}return Object.keys(t).reduce((function(r,n){r["dimension"+t[n]]=n;return r}),{})}function z(t,r){var n=t.data;var e=J(r);t.data=n.map((function(t){return Object.keys(t).reduce((function(r,n){if(n.includes("dimension")){r[e[n]]=t[n]}else{r[n]=t[n]}return r}),{})}));return t}var X;(function(t){t["sessions"]="sessions:count";t["custom"]="other-events:count";t["page-views"]="page-views:count";t["session-activity"]="session-activity:average"})(X||(X={}));var Y;(function(t){t["hour"]="hour";t["day"]="day";t["week"]="week";t["month"]="month"})(Y||(Y={}));const Z={scope:null,startDate:"2023-05-11T13:42:32.396Z",endDate:"2023-05-18T13:42:32.396Z",timeDimension:Y.day,metrics:["page-views:count"]};const V={httpMethod:"POST",params:{},authentication:{token:""},hubApiUrl:"https://hubqa.arcgis.com"};function W(t){console.debug("getCedarUrl",{metricType:t});switch(t){case"page-views:count":{return"/data/telemetry_views_bar.json"}case"session-activity:average":{return"/data/telemetry_sessions.json"}}}function K(t){const r=/^[0-9a-fA-F]{32}$/;if(r.test(t)){return{contentId:t}}else{return{hostname:t}}}async function Q(t,r=null,n,i){V.authentication.token=e.token;V.hubApiUrl=e.apiUrl;if(!!t){Z.scope=K(t)}if(!!r){Z.metrics=r}if(!!n&&!!i){Z.startDate=n;Z.endDate=i}const o=await H(Z,V);return o}function tt(t){const r=t.data.map((t=>({attributes:t})));return r}function rt(t){return new Date(t)}function nt(t,r){const n=new Date(t.getTime());n.setDate(n.getDate()-r);return n}const et=":host{display:block;height:100%}cedar-chart{height:80%}cedar-table{overflow:auto}";const it=class{constructor(r){t(this,r);this.chartTitle=null;this.scope=null;this.startDate=null;this.endDate=null;this.metric=null;this.cedarUrl=null;this.report=undefined;this.features=undefined}getStartDate(t){const r=t?rt(t):new Date;const n=t?r:nt(r,30);return n.toISOString()}getEndDate(t){const r=t?rt(t):new Date;return r.toISOString()}async componentWillLoad(){this.cedarUrl=W(this.metric);await this.getReport()}async getReport(){const t=this.getStartDate(this.startDate);const r=this.getEndDate(this.endDate);this.report=await Q(this.scope,[this.metric],t,r);this.features=tt(this.report);console.log("telemetry response",{report:this.report,features:this.features,json:JSON.stringify(this.report)})}render(){return r(n,null,r("slot",null),r("cedar-chart",{"cedar-url":this.cedarUrl,"chart-title":this.chartTitle||"",data:this.features}),r("cedar-table",{data:this.report.data}))}static get watchers(){return{scope:["getReport"],startDate:["getReport"],endDate:["getReport"]}}};it.style=et;export{it as cedar_telemetry_report};
//# sourceMappingURL=p-93fc27a0.entry.js.map
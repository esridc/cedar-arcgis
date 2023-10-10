import{t as n}from"./p-9f1a0adc.js";function t(n,t){for(var r=0;r<t.length;r++){const e=t[r];if("string"!=typeof e&&!Array.isArray(e))for(const t in e)if("default"!==t&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var r,e,o={exports:{}};r=o,void 0!==(e=function(){function n(n){const t=n.locateFile,e={};var o=void 0!==o?o:{};const i=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})(),u=()=>i.promise;o.locateFile=t,o.onRuntimeInitialized=()=>{i.resolve(e)},e.Module=o,e.whenLoaded=u;var f,c={};for(f in o)o.hasOwnProperty(f)&&(c[f]=o[f]);var a,l,s,p,v,y="object"==typeof window,h="function"==typeof importScripts,m="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";function w(n){return o.locateFile?o.locateFile(n,d):d+n}m?(d=h?require("path").dirname(d)+"/":__dirname+"/",a=function(n,t){return p||(p=require("fs")),v||(v=require("path")),n=v.normalize(n),p.readFileSync(n,t?null:"utf8")},s=function(n){var t=a(n,!0);return t.buffer||(t=new Uint8Array(t)),x(t.buffer),t},l=function(n,t,r){p||(p=require("fs")),v||(v=require("path")),n=v.normalize(n),p.readFile(n,(function(n,e){n?r(n):t(e.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),r.exports=o,process.on("uncaughtException",(function(n){if(!(n instanceof qn))throw n})),process.on("unhandledRejection",V),o.inspect=function(){return"[Emscripten Module object]"}):(y||h)&&(h?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),d=0!==d.indexOf("blob:")?d.substr(0,d.lastIndexOf("/")+1):"",a=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},h&&(s=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),l=function(n,t,r){var e=new XMLHttpRequest;e.open("GET",n,!0),e.responseType="arraybuffer",e.onload=function(){200==e.status||0==e.status&&e.response?t(e.response):r()},e.onerror=r,e.send(null)});var b=o.print||console.log.bind(console),g=o.printErr||console.warn.bind(console);for(f in c)c.hasOwnProperty(f)&&(o[f]=c[f]);c=null,o.quit&&o.quit;var A,j,S=0,M=function(n){S=n},q=function(){return S};o.wasmBinary&&(A=o.wasmBinary),"object"!=typeof WebAssembly&&V("no native wasm support detected");var T=!1;function x(n,t){n||V("Assertion failed: "+t)}var E,U,R,W,_="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function O(n,t,r){for(var e=t+r,o=t;n[o]&&!(o>=e);)++o;if(o-t>16&&n.subarray&&_)return _.decode(n.subarray(t,o));for(var i="";t<o;){var u=n[t++];if(128&u){var f=63&n[t++];if(192!=(224&u)){var c=63&n[t++];if((u=224==(240&u)?(15&u)<<12|f<<6|c:(7&u)<<18|f<<12|c<<6|63&n[t++])<65536)i+=String.fromCharCode(u);else{var a=u-65536;i+=String.fromCharCode(55296|a>>10,56320|1023&a)}}else i+=String.fromCharCode((31&u)<<6|f)}else i+=String.fromCharCode(u)}return i}function I(n,t){return n?O(U,n,t):""}function P(n,t){return n%t>0&&(n+=t-n%t),n}function k(n){E=n,o.HEAP8=new Int8Array(n),o.HEAP16=new Int16Array(n),o.HEAP32=R=new Int32Array(n),o.HEAPU8=U=new Uint8Array(n),o.HEAPU16=new Uint16Array(n),o.HEAPU32=new Uint32Array(n),o.HEAPF32=new Float32Array(n),o.HEAPF64=new Float64Array(n)}var G=[],H=[],L=[];function X(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)F(o.preRun.shift());on(G)}function B(){on(H)}function D(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)N(o.postRun.shift());on(L)}function F(n){G.unshift(n)}function C(n){H.unshift(n)}function N(n){L.unshift(n)}var z=0,J=null;function K(n){z++,o.monitorRunDependencies&&o.monitorRunDependencies(z)}function Q(n){if(z--,o.monitorRunDependencies&&o.monitorRunDependencies(z),0==z&&J){var t=J;J=null,t()}}function V(n){throw o.onAbort&&o.onAbort(n),g(n+=""),T=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}o.preloadedImages={},o.preloadedAudios={};var Y,Z="data:application/octet-stream;base64,";function $(n){return n.startsWith(Z)}function nn(n){return n.startsWith("file://")}function tn(n){try{if(n==Y&&A)return new Uint8Array(A);if(s)return s(n);throw"both async and sync fetching of the wasm failed"}catch(n){V(n)}}function rn(){if(!A&&(y||h)){if("function"==typeof fetch&&!nn(Y))return fetch(Y,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+Y+"'";return n.arrayBuffer()})).catch((function(){return tn(Y)}));if(l)return new Promise((function(n,t){l(Y,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return tn(Y)}))}function en(){var n={a:yn};function t(n,t){var r=n.exports;o.asm=r,k((j=o.asm.m).buffer),W=o.asm.q,C(o.asm.n),Q()}function r(n){t(n.instance)}function e(t){return rn().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){g("failed to asynchronously prepare wasm: "+n),V(n)}))}function i(){return A||"function"!=typeof WebAssembly.instantiateStreaming||$(Y)||nn(Y)||"function"!=typeof fetch?e(r):fetch(Y,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(r,(function(n){return g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),e(r)}))}))}if(K(),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(n){return g("Module.instantiateWasm callback failed with error: "+n),!1}return i(),{}}function on(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?W.get(r)():W.get(r)(t.arg):r(void 0===t.arg?null:t.arg)}else t(o)}}function un(){throw"longjmp"}function fn(n,t,r){U.copyWithin(n,t,t+r)}function cn(n){try{return j.grow(n-E.byteLength+65535>>>16),k(j.buffer),1}catch(n){}}function an(n){var t=U.length,r=2147483648;if((n>>>=0)>r)return!1;for(var e=1;e<=4;e*=2){var o=t*(1+.2/e);if(o=Math.min(o,n+100663296),cn(Math.min(r,P(Math.max(n,o),65536))))return!0}return!1}$(Y="libtess.wasm")||(Y=w(Y));var ln={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var r=ln.buffers[n];0===t||10===t?((1===n?b:g)(O(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return ln.varargs+=4,R[ln.varargs-4>>2]},getStr:function(n){return I(n)},get64:function(n,t){return n}};function sn(n,t,r,e){for(var o=0,i=0;i<r;i++){for(var u=R[t+8*i>>2],f=R[t+(8*i+4)>>2],c=0;c<f;c++)ln.printChar(n,U[u+c]);o+=f}return R[e>>2]=o,0}function pn(){return q()}function vn(n){M(n)}var yn={h:un,l:fn,g:an,f:sn,b:pn,k:jn,d:An,j:Sn,i:Mn,e:gn,c:bn,a:vn};en(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.n).apply(null,arguments)},o._malloc=function(){return(o._malloc=o.asm.o).apply(null,arguments)},o._free=function(){return(o._free=o.asm.p).apply(null,arguments)},o._triangulate=function(){return(o._triangulate=o.asm.r).apply(null,arguments)};var hn,mn=o.stackSave=function(){return(mn=o.stackSave=o.asm.s).apply(null,arguments)},dn=o.stackRestore=function(){return(dn=o.stackRestore=o.asm.t).apply(null,arguments)},wn=o._setThrew=function(){return(wn=o._setThrew=o.asm.u).apply(null,arguments)};function bn(n,t,r){var e=mn();try{W.get(n)(t,r)}catch(n){if(dn(e),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function gn(n,t){var r=mn();try{W.get(n)(t)}catch(n){if(dn(r),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function An(n,t){var r=mn();try{return W.get(n)(t)}catch(n){if(dn(r),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function jn(n){var t=mn();try{return W.get(n)()}catch(n){if(dn(t),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function Sn(n,t,r){var e=mn();try{return W.get(n)(t,r)}catch(n){if(dn(e),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function Mn(n,t,r,e){var o=mn();try{return W.get(n)(t,r,e)}catch(n){if(dn(o),n!==n+0&&"longjmp"!==n)throw n;wn(1,0)}}function qn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Tn(n){function t(){hn||(hn=!0,o.calledRun=!0,T||(B(),o.onRuntimeInitialized&&o.onRuntimeInitialized(),D()))}z>0||(X(),z>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(J=function n(){hn||Tn(),hn||(J=n)},o.run=Tn,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();Tn();let xn=null,En=null,Un=null,Rn=null;const Wn=e.Module,_n=2,On=4e3;let In=0;const Pn=(n,t,r)=>{xn||(xn=Wn._triangulate);let e=Wn.HEAPF32;const o=Wn.HEAP32.BYTES_PER_ELEMENT,i=2,u=e.BYTES_PER_ELEMENT;r>In&&(In=r,Un&&(Wn._free(Un),Un=0),En&&(Wn._free(En),En=0)),Un||(Un=Wn._malloc(r*u)),Rn||(Rn=Wn._malloc(On*o));const f=r*_n;En||(En=Wn._malloc(f*u)),e=Wn.HEAPF32,e.set(n,Un/u),Wn.HEAP32.set(t,Rn/o);const c=f/i,a=xn(Un,Rn,Math.min(t.length,On),i,En,c),l=a*i;e=Wn.HEAPF32;const s=e.slice(En/u,En/u+l),p={};return p.buffer=s,p.vertexCount=a,p};return e.triangulate=Pn,e.whenLoaded()}return{load:n}}())&&(r.exports=e);var i=o.exports;const u=t({__proto__:null,default:n(i)},[i]);export{u as l};
//# sourceMappingURL=p-af7a049a.js.map
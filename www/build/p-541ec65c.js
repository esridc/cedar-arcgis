import{h as n}from"./p-b54724b6.js";var r;function o(n,o,t={}){const e=o===r.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const r of e){const o=n.getContext(r,t);if(o)return o}return null}function t(n,r,t={}){const c=e(n);for(const n of c){const e=o(r,n,t);if(e)return e}return null}function e(o){if("3d"===o)return[r.WEBGL2];const t=n("esri-force-webgl");return t===r.WEBGL1||t===r.WEBGL2?[t]:n("mac")&&n("chrome")?[r.WEBGL1,r.WEBGL2]:[r.WEBGL2,r.WEBGL1]}!function(n){n[n.WEBGL1=1]="WEBGL1",n[n.WEBGL2=2]="WEBGL2"}(r||(r={}));export{r as n,t as o,e as r,o as t};
//# sourceMappingURL=p-541ec65c.js.map
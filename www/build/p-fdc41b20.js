import{$ as n,bu as e,bv as t,bw as c,bx as r,by as l,bz as o}from"./p-b54724b6.js";import{u,M as i,y as s,m as a,f}from"./p-ecc7ed03.js";function b(e){const t=[];return w(f(e),t),t.length?new n(u(t[0])):null}function w(n,e){if(!n)return;let t;t="CIMTextSymbol"===n.type?n.symbol:n;const c="CIMPolygonSymbol"===n.type;if(t?.symbolLayers)for(const n of t.symbolLayers)if(!(n.colorLocked||c&&(i(n)||s(n)&&n.markerPlacement&&a(n.markerPlacement))))switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":n.tintColor&&m(e,n.tintColor);break;case"CIMVectorMarker":n.markerGraphics?.forEach((n=>{w(n.symbol,e)}));break;case"CIMSolidStroke":case"CIMSolidFill":m(e,n.color);break;case"CIMHatchFill":w(n.lineSymbol,e)}}function m(n,e){for(const t of n)if(t.join(".")===e.join("."))return;n.push(e)}new e(1e3);new n([128,128,128]);const k=new n("white");function p(e,r){if(!e)return null;let l=null;return t(e)?l=y(e):c(e)&&(l="cim"===e.type?b(e):e.color?new n(e.color):null),l?h(l,r):null}function y(e){const t=e.symbolLayers;if(!t)return null;let c=null;return t.forEach((n=>{"object"===n.type&&n.resource?.href||(c="water"===n.type?n.color:n.material?n.material.color:null)})),c?new n(c):null}function h(e,t){if(null==t||null==e)return e;const c=e.toRgba();return c[3]=c[3]*t,new n(c)}function d(n,e,t){const c=n.symbolLayers;if(!c)return;const r=n=>h(e=e??n??(null!=t?k:null),t);c.forEach((n=>{if("object"!==n.type||!n.resource?.href||e)if("water"===n.type)n.color=r(n.color);else{const e=null!=n.material?n.material.color:null,c=r(e);null==n.material?n.material=new l({color:c}):n.material.color=c,null!=t&&"outline"in n&&null!=n.outline&&null!=n.outline.color&&(n.outline.color=h(n.outline.color,t))}}))}function M(n,e,t){(e=e??n.color)&&(n.color=h(e,t)),null!=t&&"outline"in n&&n.outline&&n.outline.color&&(n.outline.color=h(n.outline.color,t))}function S(e,r,l){e&&(r||null!=l)&&(r&&(r=new n(r)),t(e)?d(e,r,l):c(e)&&M(e,r,l))}async function C(n,e){const t=n.symbolLayers;t&&await r(t,(async n=>I(n,e)))}async function I(n,e){switch(n.type){case"extrude":z(n,e);break;case"icon":case"line":case"text":j(n,e);break;case"path":P(n,e);break;case"object":await v(n,e)}}function j(n,e){const t=x(e);null!=t&&(n.size=t)}function x(n){for(const e of n)if("number"==typeof e)return e;return null}function z(n,e){n.size="number"==typeof e[2]?e[2]:0}async function v(n,e){const{resourceSize:t,symbolSize:c}=await g(n),r=F(e,t,c);n.width=H(e[0],c[0],t[0],r),n.depth=H(e[1],c[1],t[1],r),n.height=H(e[2],c[2],t[2],r)}function P(n,e){const t=F(e,o,[n.width,void 0,n.height]);n.width=H(e[0],n.width,1,t),n.height=H(e[2],n.height,1,t)}function F(n,e,t){for(let c=0;c<3;c++){const r=n[c];switch(r){case"symbol-value":{const n=t[c];return null!=n?n/e[c]:1}case"proportional":break;default:if(r&&e[c])return r/e[c]}}return 1}async function g(n){const{computeObjectLayerResourceSize:e}=await import("./p-66d4717c.js"),t=await e(n,10),{width:c,height:r,depth:l}=n,o=[c,l,r];let u=1;for(let n=0;n<3;n++){const e=o[n];if(null!=e){u=e/t[n];break}}for(let n=0;n<3;n++)null==o[n]&&(o[n]=t[n]*u);return{resourceSize:t,symbolSize:o}}function H(n,e,t,c){switch(n){case"proportional":return t*c;case"symbol-value":return null!=e?e:t;default:return n}}function L(n,e){const t=x(e);if(null!=t)switch(n.type){case"simple-marker":n.size=t;break;case"picture-marker":{const e=n.width/n.height;e>1?(n.width=t,n.height=t*e):(n.width=t*e,n.height=t);break}case"simple-line":n.width=t;break;case"text":n.font.size=t}}async function O(n,e){if(n&&e)return t(n)?C(n,e):void(c(n)&&L(n,e))}function R(n,e,r){if(n&&null!=e)if(t(n)){const t=n.symbolLayers;t&&t.forEach((n=>{if(n&&"object"===n.type)switch(r){case"tilt":n.tilt=e;break;case"roll":n.roll=e;break;default:n.heading=e}}))}else c(n)&&("simple-marker"!==n.type&&"picture-marker"!==n.type&&"text"!==n.type||(n.angle=e))}async function T(n,e){const t=await n.fetchSymbol(e);return t||n.fetchCIMSymbol(e)}export{O as D,R as I,p as b,h as d,S as g,T as q};
//# sourceMappingURL=p-fdc41b20.js.map
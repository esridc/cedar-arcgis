import{s as n,dE as e,L as t}from"./p-b54724b6.js";import{a as o,t as r}from"./p-e6a64715.js";const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(n){return i[n]}function*s(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const e of n.features)e&&(yield e)}}function*u(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const e of n.coordinates)yield*e;break;case"MultiPolygon":for(const e of n.coordinates)for(const n of e)yield*n}}function*l(n,e={}){const{geometryType:t,objectIdField:i}=e;for(const s of n){const{geometry:n,properties:u,id:l}=s;if(n&&c(n.type)!==t)continue;const f=u||{};let a;i&&(a=f[i],null==l||a||(f[i]=a=l));const y=new o(n?g(new r,n,e):null,f,null,a??void 0);yield y}}function f(n){for(const e of n)if(e.length>2)return!0;return!1}function a(n){return!p(n)}function y(n){return p(n)}function p(n){let e=0;for(let t=0;t<n.length;t++){const o=n[t],r=n[(t+1)%n.length];e+=o[0]*r[1]-r[0]*o[1]}return e<=0}function d(n){const e=n[0],t=n[n.length-1];return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]||n.push(e),n}function g(n,e,t){switch(e.type){case"LineString":return m(n,e,t);case"MultiLineString":return w(n,e,t);case"MultiPoint":return P(n,e,t);case"MultiPolygon":return b(n,e,t);case"Point":return S(n,e,t);case"Polygon":return j(n,e,t)}}function m(n,e,t){return M(n,e.coordinates,t),n}function w(n,e,t){for(const o of e.coordinates)M(n,o,t);return n}function P(n,e,t){return M(n,e.coordinates,t),n}function b(n,e,t){for(const o of e.coordinates){F(n,o[0],t);for(let e=1;e<o.length;e++)G(n,o[e],t)}return n}function S(n,e,t){return k(n,e.coordinates,t),n}function j(n,e,t){const o=e.coordinates;F(n,o[0],t);for(let e=1;e<o.length;e++)G(n,o[e],t);return n}function F(n,e,t){const o=d(e);a(o)?h(n,o,t):M(n,o,t)}function G(n,e,t){const o=d(e);y(o)?h(n,o,t):M(n,o,t)}function M(n,e,t){for(const o of e)k(n,o,t);n.lengths.push(e.length)}function h(n,e,t){for(let o=e.length-1;o>=0;o--)k(n,e[o],t);n.lengths.push(e.length)}function k(n,e,t){const[o,r,i]=e;n.coords.push(o,r),t.hasZ&&n.coords.push(i||0)}function L(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new n("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const o="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new n("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function O(n,o={}){const r=[],i=new Set,l=new Set;let a,y=!1,p=null,d=!1,{geometryType:g=null}=o,m=!1;for(const t of s(n)){const{geometry:n,properties:o,id:s}=t;if(!n||(g||(g=c(n.type)),c(n.type)===g)){if(!y){y=f(u(n))}if(d||(d=null!=s,d&&(a=typeof s,o&&(p=Object.keys(o).filter((n=>o[n]===s))))),o&&p&&d&&null!=s&&(p.length>1?p=p.filter((n=>o[n]===s)):1===p.length&&(p=o[p[0]]===s?p:[])),!m&&o){let n=!0;for(const t in o){if(i.has(t))continue;const c=o[t];if(null==c){n=!1,l.add(t);continue}const s=L(c);if("unknown"===s){l.add(t);continue}l.delete(t),i.add(t);const u=e(t);u&&r.push({name:u,alias:t,type:s})}m=n}}}const w=e(1===p?.length&&p[0]||null)??void 0;if(w)for(const n of r)if(n.name===w&&t(n)){n.type="esriFieldTypeOID";break}return{fields:r,geometryType:g,hasZ:y,objectIdFieldName:w,objectIdFieldType:a,unknownFields:Array.from(l)}}function I(n,e){return Array.from(l(s(n),e))}export{I,O as L,T,c as s};
//# sourceMappingURL=p-7a0db0bb.js.map
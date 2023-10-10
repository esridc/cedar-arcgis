import{b as t,s as n,c2 as e,c4 as r,c3 as o,c5 as s,cg as u,ch as l,ci as i,F as c}from"./p-b54724b6.js";import{t as f,a}from"./p-e6a64715.js";import{e as y}from"./p-dc29c329.js";function m(t,n){return t?n?4:3:n?3:2}const g=t.getLogger("esri.layers.graphics.featureConversionUtils"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},d=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s},p=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+2]},b=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+3]},w=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+2],t[e+3]=n[r+3]};function G(t,n,e,r){if(t){if(e)return n&&r?w:p;if(n&&r)return b}else if(n&&r)return p;return d}function M({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function P({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function k({scale:t,translate:n},e,r){return e*t[r]+n[r]}function v(t,n,e){return t?n?e?x(t):Z(t):e?j(t):F(t):null}function F(t){const n=t.coords;return{x:n[0],y:n[1]}}function T(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t}function Z(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2]}}function N(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t}function j(t){const n=t.coords;return{x:n[0],y:n[1],m:n[2]}}function I(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.m,t}function x(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function U(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t.coords[3]=n.m,t}function q(t,n,e,r){let o=F;e&&r?o=x:e?o=Z:r&&(o=j);for(const e of n){const{geometry:n,attributes:r}=e,s=null!=n?o(n):null;t.push({attributes:r,geometry:s})}return t}function $(t,n){return t&&n?U:t?N:n?I:T}function z(t,n,e,r,o){const s=$(e,r);for(const{geometry:e,attributes:r}of n){const n=null!=e?s(new f,e):null;t.push(new a(n,r,null,o?r[o]:void 0))}return t}function L(t,n,e=$(null!=n.z,null!=n.m)){return e(t,n)}function R(t,n,e,r){for(const{geometry:o,attributes:s}of n)t.push({attributes:s,geometry:null!=o?S(o,e,r):null});return t}function S(t,n,e){if(null==t)return null;const r=m(n,e),o=[];for(let n=0;n<t.coords.length;n+=r){const e=[];for(let o=0;o<r;o++)e.push(t.coords[n+o]);o.push(e)}return n?e?{points:o,hasZ:n,hasM:e}:{points:o,hasZ:n}:e?{points:o,hasM:e}:{points:o}}function C(t,n,e,r,o){const s=m(e,r);for(const{geometry:e,attributes:r}of n){const n=null!=e?E(new f,e,s):null;t.push(new a(n,r,null,o?r[o]:void 0))}return t}function E(t,n,e=m(n.hasZ,n.hasM)){t.lengths[0]=n.points.length;const r=t.coords;let o=0;for(const t of n.points)for(let n=0;n<e;n++)r[o++]=t[n];return t}function A(t,n,e,r){for(const{geometry:o,attributes:s}of n)t.push({attributes:s,geometry:null!=o?B(o,e,r):null});return t}function B(t,n,e){if(!t)return null;const r=m(n,e),{coords:o,lengths:s}=t,u=[];let l=0;for(const t of s){const n=[];for(let e=0;e<t;e++){const t=[];for(let n=0;n<r;n++)t.push(o[l++]);n.push(t)}u.push(n)}return n?e?{paths:u,hasZ:n,hasM:e}:{paths:u,hasZ:n}:e?{paths:u,hasM:e}:{paths:u}}function D(t,n,e,r,o){const s=m(e,r);for(const{geometry:e,attributes:r}of n){const n=null!=e?H(new f,e,s):null;t.push(new a(n,r,null,o?r[o]:void 0))}return t}function H(t,n,e=m(n.hasZ,n.hasM)){const{lengths:r,coords:o}=t;let s=0;for(const t of n.paths){for(const n of t)for(let t=0;t<e;t++)o[s++]=n[t];r.push(t.length)}return t}function J(t,n,e,r){for(const{geometry:o,attributes:s,centroid:u}of n){const n=null!=o?K(o,e,r):null;if(null!=u){const e=F(u);t.push({attributes:s,centroid:e,geometry:n})}else t.push({attributes:s,geometry:n})}return t}function K(t,n,e){if(!t)return null;const r=m(n,e),{coords:o,lengths:s}=t,u=[];let l=0;for(const t of s){const n=[];for(let e=0;e<t;e++){const t=[];for(let n=0;n<r;n++)t.push(o[l++]);n.push(t)}u.push(n)}return n?e?{rings:u,hasZ:n,hasM:e}:{rings:u,hasZ:n}:e?{rings:u,hasM:e}:{rings:u}}function O(t,n,e,r,o){for(const{geometry:s,centroid:u,attributes:l}of n){const n=null!=s?Q(new f,s,e,r):null,i=o?l[o]:void 0;null!=u?t.push(new a(n,l,T(new f,u),i)):t.push(new a(n,l,null,i))}return t}function Q(t,n,e=n.hasZ,r=n.hasM){return V(t,n.rings,e,r)}function V(t,n,e,r){const o=m(e,r),{lengths:s,coords:u}=t;let l=0;wt(t);for(const t of n){for(const n of t)for(let t=0;t<o;t++)u[l++]=n[t];s.push(t.length)}return t}const W=[],X=[];function Y(t,n,e,r,o){W[0]=t;const[s]=_(X,W,n,e,r,o);return Gt(W),Gt(X),s}function _(t,e,r,o,s,u){if(Gt(t),!r){for(const n of e){const e=u?n.attributes[u]:void 0;t.push(new a(null,n.attributes,null,e))}return t}switch(r){case"esriGeometryPoint":return z(t,e,o,s,u);case"esriGeometryMultipoint":return C(t,e,o,s,u);case"esriGeometryPolyline":return D(t,e,o,s,u);case"esriGeometryPolygon":return O(t,e,o,s,u);default:g.error("convertToFeatureSet:unknown-geometry",new n(`Unable to parse unknown geometry type '${r}'`)),Gt(t)}return t}function tt(t,e,r,o,s,u){const l=t.length;switch(r){case"esriGeometryPoint":z(t,e,o,s,u);break;case"esriGeometryMultipoint":C(t,e,o,s,u);break;case"esriGeometryPolyline":D(t,e,o,s,u);break;case"esriGeometryPolygon":O(t,e,o,s,u);break;default:g.error("convertToFeatureSet:unknown-geometry",new n(`Unable to parse unknown geometry type '${r}'`))}for(let n=0;n<e.length;n++)t[n+l].geometryType=r,t[n+l].insertAfter=e[n].insertAfter,t[n+l].groupId=e[n].groupId;return t}function nt(t,n,e,r){X[0]=t,st(W,X,n,e,r);const o=W[0];return Gt(W),Gt(X),o}function et(t,u,l){if(null==t)return null;const i=new f;if("hasZ"in t&&null==u&&(u=t.hasZ),"hasM"in t&&null==l&&(l=t.hasM),e(t)){return $(null!=u?u:null!=t.z,null!=l?l:null!=t.m)(i,t)}return r(t)?Q(i,t,u,l):o(t)?H(i,t,m(u,l)):s(t)?E(i,t,m(u,l)):void g.error("convertFromGeometry:unknown-geometry",new n(`Unable to parse unknown geometry type '${t}'`))}function rt(t,e,r,o){const s=t&&("coords"in t?t:t.geometry);if(null==s)return null;switch(e){case"esriGeometryPoint":{let t=F;return r&&o?t=x:r?t=Z:o&&(t=j),t(s)}case"esriGeometryMultipoint":return S(s,r,o);case"esriGeometryPolyline":return B(s,r,o);case"esriGeometryPolygon":return K(s,r,o);default:return g.error("convertToGeometry:unknown-geometry",new n(`Unable to parse unknown geometry type '${e}'`)),null}}function ot(t,n){for(const e of n)t.push({attributes:e.attributes});return t}function st(t,e,r,o,s){if(Gt(t),null==r)return ot(t,e);switch(r){case"esriGeometryPoint":return q(t,e,o,s);case"esriGeometryMultipoint":return R(t,e,o,s);case"esriGeometryPolyline":return A(t,e,o,s);case"esriGeometryPolygon":return J(t,e,o,s);default:g.error("convertToFeatureSet:unknown-geometry",new n(`Unable to parse unknown geometry type '${r}'`))}return t}function ut(t){const{objectIdFieldName:n,spatialReference:e,transform:r,fields:o,hasM:s,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:f,queryGeometry:a,queryGeometryType:y}=t,m={features:st([],l,i,u,s),fields:o,geometryType:i,objectIdFieldName:n,spatialReference:e,uniqueIdField:f,queryGeometry:rt(a,y,!1,!1)};return r&&(m.transform=r),c&&(m.exceededTransferLimit=c),s&&(m.hasM=s),u&&(m.hasZ=u),m}function lt(t,e){const r=new y,{hasM:o,hasZ:s,features:u,objectIdFieldName:l,spatialReference:i,geometryType:c,exceededTransferLimit:f,transform:a,fields:m}=t;return m&&(r.fields=m),r.geometryType=c??null,r.objectIdFieldName=l??e??null,r.spatialReference=i??null,r.objectIdFieldName?(u&&_(r.features,u,c,s,o,r.objectIdFieldName),f&&(r.exceededTransferLimit=f),o&&(r.hasM=o),s&&(r.hasZ=s),a&&(r.transform=a),r):(g.error(new n("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function it(t){const{transform:n,features:e,hasM:r,hasZ:o}=t;if(!n)return t;for(const t of e)null!=t.geometry&&ht(t.geometry,t.geometry,r,o,n),null!=t.centroid&&ht(t.centroid,t.centroid,r,o,n);return t.transform=null,t}function ct(t,n){const{geometryType:e,features:r,hasM:o,hasZ:s}=n;if(!t)return n;for(let n=0;n<r.length;n++){const u=r[n],l=u.weakClone();l.geometry=new f,ft(l.geometry,u.geometry,o,s,e,t),u.centroid&&(l.centroid=new f,ft(l.centroid,u.centroid,o,s,"esriGeometryPoint",t)),r[n]=l}return n.transform=t,n}function ft(t,n,e,r,o,s,u=e,l=r){if(wt(t),null==n||!n.coords.length)return null;const i=h[o],{coords:c,lengths:f}=n,a=m(e,r),y=m(e&&u,r&&l),g=G(e,r,u,l);if(!f.length)return g(t.coords,c,0,0,M(s,c[0]),P(s,c[1])),wt(t,a,0),t;let d,p,b,w,k=0,v=0,F=v;for(const n of f){if(n<i)continue;let e=0;v=F,b=d=M(s,c[k]),w=p=P(s,c[k+1]),g(t.coords,c,v,k,b,w),e++,k+=a,v+=y;for(let r=1;r<n;r++,k+=a)b=M(s,c[k]),w=P(s,c[k+1]),b===d&&w===p||(g(t.coords,c,v,k,b-d,w-p),v+=y,e++,d=b,p=w);e>=i&&(t.lengths.push(e),F=v)}return Gt(t.coords,F),t.coords.length?t:null}function at(t,n,e,r,o,s,u=e,l=r){if(wt(t),!n||!n.coords.length)return null;const i=h[o],{coords:c,lengths:f}=n,a=m(e,r),y=m(e&&u,r&&l),g=G(e,r,u,l);if(!f.length)return g(t.coords,c,0,0,c[0],c[1]),wt(t,a,0),t;let d=0;const p=s*s;for(const n of f){if(n<i){d+=n*a;continue}const e=t.coords.length/y,r=d,o=d+(n-1)*a;g(t.coords,c,t.coords.length,r,c[r],c[r+1]),mt(t.coords,c,a,p,g,r,o),g(t.coords,c,t.coords.length,o,c[o],c[o+1]);const s=t.coords.length/y-e;s>=i?t.lengths.push(s):Gt(t.coords,e*y),d+=n*a}return t.coords.length?t:null}function yt(t,n,e,r){const o=t[n],s=t[n+1],u=t[e],l=t[e+1],i=t[r],c=t[r+1];let f=u,a=l,y=i-f,m=c-a;if(0!==y||0!==m){const t=((o-f)*y+(s-a)*m)/(y*y+m*m);t>1?(f=i,a=c):t>0&&(f+=y*t,a+=m*t)}return y=o-f,m=s-a,y*y+m*m}function mt(t,n,e,r,o,s,u){let l,i=r,c=0;for(let t=s+e;t<u;t+=e)l=yt(n,t,s,u),l>i&&(c=t,i=l);i>r&&(c-s>e&&mt(t,n,e,r,o,s,c),o(t,n,t.length,c,n[c],n[c+1]),u-c>e&&mt(t,n,e,r,o,c,u))}function gt(t,n,e,r){if(null==n||!n.coords||!n.coords.length)return null;const o=m(e,r);let s=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(n&&n.coords){const t=n.coords;for(let n=0;n<t.length;n+=o){const e=t[n],r=t[n+1];s=Math.min(s,e),f=Math.max(f,e),c=Math.min(c,r),a=Math.max(a,r)}}return u(t)?l(t,s,c,f,a):i(s,c,f,a,t),t}function ht(t,n,e,r,o){const{coords:s,lengths:u}=n,l=m(e,r);if(!s.length)return t!==n&&wt(t),t;c(o);const{originPosition:i,scale:f,translate:a}=o,y=Mt;y.originPosition=i;const g=y.scale;g[0]=f[0]??1,g[1]=-(f[1]??1),g[2]=f[2]??1,g[3]=f[3]??1;const h=y.translate;if(h[0]=a[0]??0,h[1]=a[1]??0,h[2]=a[2]??0,h[3]=a[3]??0,!u.length){for(let n=0;n<l;++n)t.coords[n]=k(y,s[n],n);return t!==n&&wt(t,l,0),t}let d=0;for(let n=0;n<u.length;n++){const e=u[n];t.lengths[n]=e;for(let n=0;n<l;++n)t.coords[d+n]=k(y,s[d+n],n);let r=t.coords[d],o=t.coords[d+1];d+=l;for(let n=1;n<e;n++,d+=l){r+=s[d]*g[0],o+=s[d+1]*g[1],t.coords[d]=r,t.coords[d+1]=o;for(let n=2;n<l;++n)t.coords[d+n]=k(y,s[d+n],n)}}return t!==n&&wt(t,s.length,u.length),t}function dt(t,n,e,r,o,s){if(wt(t),t.lengths.push(...n.lengths),e===o&&r===s)for(let e=0;e<n.coords.length;e++)t.coords.push(n.coords[e]);else{const u=m(e,r),l=G(e,r,o,s),i=n.coords;for(let n=0;n<i.length;n+=u)l(t.coords,i,t.coords.length,n,i[n],i[n+1])}return t}function pt(t,n,e,r){let o=0,s=t[r*n],u=t[r*(n+1)];for(let l=1;l<e;l++){const e=s+t[r*(n+l)],i=u+t[r*(n+l)+1],c=(e-s)*(i+u);s=e,u=i,o+=c}return.5*o}function bt(t,n){const{coords:e,lengths:r}=t;let o=0,s=0;for(let t=0;t<r.length;t++){const u=r[t];s+=pt(e,o,u,n),o+=u}return Math.abs(s)}function wt(t,n=0,e=0){Gt(t.lengths,e),Gt(t.coords,n)}function Gt(t,n=0){t.length!==n&&(t.length=n)}const Mt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{B as $,H as C,K as H,ht as I,Q as K,L,M,P as N,v as P,V as Q,S as U,ct as a,dt as b,bt as c,at as d,_ as e,it as f,ut as g,ft as h,lt as i,nt as n,tt as o,et as r,rt as s,Y as t,gt as y};
//# sourceMappingURL=p-a3f0a5f3.js.map
import{aA as n,eV as t,$ as o,fF as e,cW as r,k9 as s,e as a}from"./p-b54724b6.js";import{g as l}from"./p-52a9dec5.js";import{e as c}from"./p-de65f975.js";import{m as i,c as u,a as p,p as f,g as m}from"./p-da19ac13.js";import{T as d,i as j,c as b,x,u as w,L as g,O as T,E as y}from"./p-76eeb521.js";import{t as h,f as v,i as $,o as M}from"./p-1cec84d0.js";import{l as _,c as A,o as C,d as S,r as O,e as k,g as I,h as R,i as q,j as B,k as E,m as F,n as L}from"./p-8a0d6d4b.js";import{e as N}from"./p-0609006d.js";import{q as U}from"./p-3800516a.js";import"./p-25e77904.js";import{D as V}from"./p-13e550f5.js";import"./p-2b55d8a8.js";import"./p-728b50df.js";import"./p-4f2ece68.js";import"./p-38e70926.js";import"./p-9f1a0adc.js";import"./p-c736af50.js";import"./p-8cdc652c.js";import"./p-8a927e72.js";import"./p-5abe9c67.js";import"./p-cc24e5bd.js";import"./p-2563414c.js";import"./p-74887bd8.js";import"./p-cc3f40fb.js";import"./p-603bf978.js";import"./p-295917b5.js";function z(n,t,o){const e=n.typedBuffer,r=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*r,i=(o&&o.srcIndex?o.srcIndex:0)*a;for(let n=0;n<l;++n){for(let n=0;n<9;++n)e[c+n]=s[i+n];c+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:z},Symbol.toStringTag,{value:"Module"}));function D(n,t,o){const e=n.typedBuffer,r=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*r,i=(o&&o.srcIndex?o.srcIndex:0)*a;for(let n=0;n<l;++n){for(let n=0;n<16;++n)e[c+n]=s[i+n];c+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:D},Symbol.toStringTag,{value:"Module"}));function G(n,t){return new n(new ArrayBuffer(t*n.ElementCount*N(n.ElementType)))}async function K(n,t,o){const e={...o,useTransform:o?.useTransform??!0},r=new L(P(e)),s=(await _(r,t,e,!0)).model,a=s.lods.shift(),l=new Map,c=new Map;s.textures.forEach(((n,t)=>l.set(t,J(n)))),s.materials.forEach(((n,t)=>c.set(t,X(n,l))));const i=H(a);for(const n of i.parts)Y(i,n,c);const{position:u,normal:p,tangent:m,color:d,texCoord0:j}=i.vertexAttributes,b={position:u.typedBuffer,normal:null!=p?p.typedBuffer:null,tangent:null!=m?m.typedBuffer:null,uv:null!=j?j.typedBuffer:null,color:null!=d?d.typedBuffer:null},x=U(b,n,e);return{transform:x.transform,vertexSpace:x.vertexSpace,components:i.components,spatialReference:n.spatialReference,vertexAttributes:new f({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function P(n){const t=n?.resolveFile;return t?{busy:!1,request:async(n,o,e)=>{const r=t(n),s="image"===o?"image":"binary"===o?"array-buffer":"json";return(await a(r,{responseType:s,signal:null!=e?e.signal:null})).data}}:null}function Q(n,o){if(null==n)return"-";const e=n.typedBuffer;return`${t(o,e.buffer,(()=>o.size))}/${e.byteOffset}/${e.byteLength}`}function W(n){return null!=n?n.toString():"-"}function H(n){let o=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,s=new Map,a=[];for(const l of n.parts){const{attributes:{position:n,normal:c,color:i,tangent:u,texCoord0:p}}=l,f=`\n      ${Q(n,r)}/\n      ${Q(c,r)}/\n      ${Q(i,r)}/\n      ${Q(u,r)}/\n      ${Q(p,r)}/\n      ${W(l.transform)}\n    `;let m=!1;const d=t(s,f,(()=>(m=!0,{start:o,length:n.count})));m&&(o+=n.count),c&&(e.normal=!0),i&&(e.color=!0),u&&(e.tangent=!0),p&&(e.texCoord0=!0),a.push({gltf:l,writeVertices:m,region:d})}return{vertexAttributes:{position:G(d,o),normal:e.normal?G(j,o):null,tangent:e.tangent?G(b,o):null,color:e.color?G(x,o):null,texCoord0:e.texCoord0?G(w,o):null},parts:a,components:[]}}function J(n){return new i({data:n.data,wrap:tn(n.parameters.wrap)})}function X(t,e){const r=new o(rn(t.color,t.opacity)),s=t.emissiveFactor?new o(sn(t.emissiveFactor)):null,a=t=>t?new p({scale:t.scale?[t.scale[0],t.scale[1]]:[1,1],rotation:n(t.rotation??0),offset:t.offset?[t.offset[0],t.offset[1]]:[0,0]}):null;return new u({color:r,colorTexture:e.get(t.textureColor),normalTexture:e.get(t.textureNormal),emissiveColor:s,emissiveTexture:e.get(t.textureEmissive),occlusionTexture:e.get(t.textureOcclusion),alphaMode:nn(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:e.get(t.textureMetallicRoughness),colorTextureTransform:a(t.colorTextureTransform),normalTextureTransform:a(t.normalTextureTransform),occlusionTextureTransform:a(t.occlusionTextureTransform),emissiveTextureTransform:a(t.emissiveTextureTransform),metallicRoughnessTextureTransform:a(t.metallicRoughnessTextureTransform)})}function Y(n,t,o){t.writeVertices&&Z(n,t);const{indices:e,attributes:r,primitiveType:s,material:a}=t.gltf;let l=C(e||r.position.count,s);const c=t.region.start;if(c){const n=new Uint32Array(l);for(let t=0;t<l.length;t++)n[t]+=c;l=n}n.components.push(new m({faces:l,material:o.get(a),shading:r.normal?"source":"flat",trustSourceNormals:!0}))}function Z(n,t){const{position:o,normal:e,tangent:r,color:a,texCoord0:i}=n.vertexAttributes,u=t.region.start,{attributes:p,transform:f}=t.gltf,m=p.position.count;if(h(o.slice(u,m),p.position,f),null!=p.normal&&null!=e){const n=l(c(),f),t=e.slice(u,m);v(t,p.normal,n),s(n)&&$(t,t)}else null!=e&&S(e,0,0,1,{dstIndex:u,count:m});if(null!=p.tangent&&null!=r){const n=l(c(),f),t=r.slice(u,m);O(t,p.tangent,n),s(n)&&k(t,t)}else null!=r&&I(r,0,0,1,1,{dstIndex:u,count:m});if(null!=p.texCoord0&&null!=i?R(i.slice(u,m),p.texCoord0):null!=i&&q(i,0,0,{dstIndex:u,count:m}),null!=p.color&&null!=a){const n=p.color,t=a.slice(u,m);if(4===n.elementCount)n instanceof b?B(t,n,255):n instanceof x?E(t,n):n instanceof g&&B(t,n,1/256);else{I(t,255,255,255,255);const o=T.fromTypedArray(t.typedBuffer,t.typedBufferStride);n instanceof j?M(o,n,255):n instanceof T?F(o,n):n instanceof y&&M(o,n,1/256)}}else null!=a&&I(a.slice(u,m),255,255,255,255)}function nn(n){switch(n){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function tn(n){return{horizontal:on(n.s),vertical:on(n.t)}}function on(n){switch(n){case V.CLAMP_TO_EDGE:return"clamp";case V.MIRRORED_REPEAT:return"mirror";case V.REPEAT:return"repeat"}}function en(n){return n**(1/A)*255}function rn(n,t){return e(en(n[0]),en(n[1]),en(n[2]),t)}function sn(n){return r(en(n[0]),en(n[1]),en(n[2]))}export{K as loadGLTFMesh};
//# sourceMappingURL=p-6b0fd432.js.map
import{u as t,m as s,i as r,T as i,c as e,h as n,l as h,a as u,p as o,b as c,x as f,y as a,o as l,d as w,g as p,j as v,V as d,q as m,A as y,L as g,B as A,O as b,w as $,E as M,F as j,I as U,U as x,M as F,S as B,k as E,v as _,z,C as D,D as G,G as H,H as I}from"./p-76eeb521.js";import{e as L}from"./p-0609006d.js";import"./p-783b6965.js";import"./p-b54724b6.js";class O{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function S(t,s){if(!t){s=s||"Assertion";const t=new Error(s).stack;throw new O(`${s} at ${t}`)}}function V(t,s,r,i){let e,n=(r[0]-t[0])/s[0],h=(i[0]-t[0])/s[0];n>h&&(e=n,n=h,h=e);let u=(r[1]-t[1])/s[1],o=(i[1]-t[1])/s[1];if(u>o&&(e=u,u=o,o=e),n>o||u>h)return!1;u>n&&(n=u),o<h&&(h=o);let c=(r[2]-t[2])/s[2],f=(i[2]-t[2])/s[2];return c>f&&(e=c,c=f,f=e),!(n>f||c>h)&&(f<h&&(h=f),!(h<0))}class k{constructor(t,s){this.layout=t,this.buffer="number"==typeof s?new ArrayBuffer(s*t.stride):s;for(const s of t.fields.keys()){const r=t.fields.get(s);this[s]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,s){const r=this[t];return r&&r.elementCount===s.ElementCount&&r.elementType===s.ElementType?r:null}slice(t,s){return new k(this.layout,this.buffer.slice(t*this.stride,s*this.stride))}copyFrom(t,s=0,r=0,i=t.count){const e=this.stride;if(e%4==0){const n=new Uint32Array(t.buffer,s*e,i*e/4);new Uint32Array(this.buffer,r*e,i*e/4).set(n)}else{const n=new Uint8Array(t.buffer,s*e,i*e);new Uint8Array(this.buffer,r*e,i*e).set(n)}return this}}class q{constructor(t=null){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:P(t[1].constructor)}))))}vec2f(s,r){return this._appendField(s,t,r),this}vec2f64(t,r){return this._appendField(t,s,r),this}vec3f(t,s){return this._appendField(t,r,s),this}vec3f64(t,s){return this._appendField(t,i,s),this}vec4f(t,s){return this._appendField(t,e,s),this}vec4f64(t,s){return this._appendField(t,n,s),this}mat3f(t,s){return this._appendField(t,h,s),this}mat3f64(t,s){return this._appendField(t,u,s),this}mat4f(t,s){return this._appendField(t,o,s),this}mat4f64(t,s){return this._appendField(t,c,s),this}vec4u8(t,s){return this._appendField(t,f,s),this}f32(t,s){return this._appendField(t,a,s),this}f64(t,s){return this._appendField(t,l,s),this}u8(t,s){return this._appendField(t,w,s),this}u16(t,s){return this._appendField(t,p,s),this}i8(t,s){return this._appendField(t,v,s),this}vec2i8(t,s){return this._appendField(t,d,s),this}vec2i16(t,s){return this._appendField(t,m,s),this}vec2u8(t,s){return this._appendField(t,y,s),this}vec4u16(t,s){return this._appendField(t,g,s),this}u32(t,s){return this._appendField(t,A,s),this}_appendField(t,s,r){if(this._fields.has(t))return void S(!1,`${t} already added to vertex buffer layout`);const i=s.ElementCount*L(s.ElementType),e=this._stride;this._stride+=i,this._fields.set(t,{size:i,constructor:s,offset:e,optional:r})}createBuffer(t){return new k(this,t)}createView(t){return new k(this,t)}clone(){const t=new q;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((s,r)=>t._fields.set(r,s))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((s=>t=Math.max(t,L(s.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function C(){return new q}class J{constructor(t){this.fields=new Array,t.fields.forEach(((t,s)=>{const r={...t,constructor:N(t.constructor)};this.fields.push([s,r])})),this.stride=t.stride}}const K=[a,t,r,e,h,o,l,s,i,n,u,c,w,y,b,f,p,$,M,g,A,j,U,x,v,d,F,B,E,m,_,z,D,G,H,I];function N(t){return`${t.ElementType}_${t.ElementCount}`}function P(t){return Q.get(t)}const Q=new Map;K.forEach((t=>Q.set(N(t),t)));export{C as H,J as I,V as i,S as s};
//# sourceMappingURL=p-673b0971.js.map
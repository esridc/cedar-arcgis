import{e as t}from"./p-8cdc652c.js";import{H as n}from"./p-673b0971.js";import{O as r}from"./p-2570f2bd.js";import{C as e}from"./p-13e550f5.js";import{t as o}from"./p-795f7c81.js";import{e4 as s,e5 as c,e6 as i,e7 as a,e8 as f,e9 as l,ea as u,eb as h,ec as g,ed as w,cV as d,ee as p,ef as m,eg as A}from"./p-b54724b6.js";function y(t,n=0){const r=t.stride;return Array.from(t.fields.keys()).filter((n=>{const r=t.fields.get(n)?.optional;return!(r&&r.glPadding)})).map((e=>{const s=t.fields.get(e),c=s.constructor.ElementCount,i=I(s.constructor.ElementType),a=s.offset,f=!(!s.optional||!s.optional.glNormalized);return new o(e,c,i,a,r,f,n)}))}function I(t){const n=b[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const b={u8:e.UNSIGNED_BYTE,u16:e.UNSIGNED_SHORT,u32:e.UNSIGNED_INT,i8:e.BYTE,i16:e.SHORT,i32:e.INT,f32:e.FLOAT};const j=n().vec3f(r.POSITION).u16(r.COMPONENTINDEX).u16(r.U16PADDING),v=n().vec2u8(r.SIDENESS);y(v);const M=n().vec3f(r.POSITION0).vec3f(r.POSITION1).u16(r.COMPONENTINDEX).u8(r.VARIANTOFFSET,{glNormalized:!0}).u8(r.VARIANTSTROKE).u8(r.VARIANTEXTENSION,{glNormalized:!0}).u8(r.U8PADDING,{glPadding:!0}).u16(r.U16PADDING,{glPadding:!0}),S=M.clone().vec3f(r.NORMAL),F=M.clone().vec3f(r.NORMALA).vec3f(r.NORMALB);const L=-1;var U;function E(t,n,r,e=C){const o=t.vertices.position,l=t.vertices.componentIndex,u=p(e.anglePlanar),h=p(e.angleSignificantEdge),g=Math.cos(h),w=Math.cos(u),d=T.edge,m=d.position0,A=d.position1,y=d.faceNormal0,I=d.faceNormal1,b=z(t),j=x(t),v=j.length/4,M=n.allocate(v);let S=0;const F=v,U=r.allocate(F);let E=0,B=0,G=0;const H=s(0,v),K=new Float32Array(v);K.forEach(((t,n,r)=>{o.getVec(j[4*n],m),o.getVec(j[4*n+1],A),r[n]=c(m,A)})),H.sort(((t,n)=>K[n]-K[t]));const O=new Array,V=new Array;for(let t=0;t<v;t++){const e=H[t],s=K[e],c=j[4*e],h=j[4*e+1],p=j[4*e+2],v=j[4*e+3],F=v===L;if(o.getVec(c,m),o.getVec(h,A),F)i(y,b[3*p],b[3*p+1],b[3*p+2]),a(I,y),d.componentIndex=l.get(c),d.cosAngle=f(y,I);else{if(i(y,b[3*p],b[3*p+1],b[3*p+2]),i(I,b[3*v],b[3*v+1],b[3*v+2]),d.componentIndex=l.get(c),d.cosAngle=f(y,I),P(d,w))continue;d.cosAngle<-.9999&&a(I,y)}B+=s,G++,F||N(d,g)?(n.write(M,S++,d),O.push(s)):D(d,u)&&(r.write(U,E++,d),V.push(s))}const W=new Float32Array(O.reverse()),k=new Float32Array(V.reverse());return{regular:{instancesData:n.trim(M,S),lodInfo:{lengths:W}},silhouette:{instancesData:r.trim(U,E),lodInfo:{lengths:k}},averageEdgeLength:B/G}}function N(t,n){return t.cosAngle<n}function P(t,n){return t.cosAngle>n}function D(t,n){const r=u(t.cosAngle),e=T.fwd,o=T.ortho;h(e,t.position1,t.position0);return r*(f(l(o,t.faceNormal0,t.faceNormal1),e)>0?-1:1)>n}function x(t){const n=t.faces.length/3,r=t.faces,e=t.neighbors;let o=0;for(let t=0;t<n;t++){const n=e[3*t],s=e[3*t+1],c=e[3*t+2],i=r[3*t],a=r[3*t+1],f=r[3*t+2];o+=n===L||i<a?1:0,o+=s===L||a<f?1:0,o+=c===L||f<i?1:0}const s=new Int32Array(4*o);let c=0;for(let t=0;t<n;t++){const n=e[3*t],o=e[3*t+1],i=e[3*t+2],a=r[3*t],f=r[3*t+1],l=r[3*t+2];(n===L||a<f)&&(s[c++]=a,s[c++]=f,s[c++]=t,s[c++]=n),(o===L||f<l)&&(s[c++]=f,s[c++]=l,s[c++]=t,s[c++]=o),(i===L||l<a)&&(s[c++]=l,s[c++]=a,s[c++]=t,s[c++]=i)}return s}function z(t){const n=t.faces.length/3,r=t.vertices.position,e=t.faces,o=B.v0,s=B.v1,c=B.v2,i=new Float32Array(3*n);for(let t=0;t<n;t++){const n=e[3*t],a=e[3*t+1],f=e[3*t+2];r.getVec(n,o),r.getVec(a,s),r.getVec(f,c),g(s,s,o),g(c,c,o),l(o,s,c),w(o,o),i[3*t]=o[0],i[3*t+1]=o[1],i[3*t+2]=o[2]}return i}!function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"}(U||(U={}));const T={edge:{position0:d(),position1:d(),faceNormal0:d(),faceNormal1:d(),componentIndex:0,cosAngle:0},ortho:d(),fwd:d()},B={v0:d(),v1:d(),v2:d()},C={anglePlanar:4,angleSignificantEdge:35};function G(t,n,r){const e=n/3,o=new Uint32Array(r+1),s=new Uint32Array(r+1),c=(t,n)=>{t<n?o[t+1]++:s[n+1]++};for(let n=0;n<e;n++){const r=t[3*n],e=t[3*n+1],o=t[3*n+2];c(r,e),c(e,o),c(o,r)}let i=0,a=0;for(let t=0;t<r;t++){const n=o[t+1],r=s[t+1];o[t+1]=i,s[t+1]=a,i+=n,a+=r}const f=new Uint32Array(6*e),l=o[r],u=(t,n,r)=>{if(t<n){const e=o[t+1]++;f[2*e]=n,f[2*e+1]=r}else{const e=s[n+1]++;f[2*l+2*e]=t,f[2*l+2*e+1]=r}};for(let n=0;n<e;n++){const r=t[3*n],e=t[3*n+1],o=t[3*n+2];u(r,e,n),u(e,o,n),u(o,r,n)}const h=(t,n)=>{const r=2*t,e=n-t;for(let t=1;t<e;t++){const n=f[r+2*t],e=f[r+2*t+1];let o=t-1;for(;o>=0&&f[r+2*o]>n;o--)f[r+2*o+2]=f[r+2*o],f[r+2*o+3]=f[r+2*o+1];f[r+2*o+2]=n,f[r+2*o+3]=e}};for(let t=0;t<r;t++)h(o[t],o[t+1]),h(l+s[t],l+s[t+1]);const g=new Int32Array(3*e),w=(n,r)=>n===t[3*r]?0:n===t[3*r+1]?1:n===t[3*r+2]?2:-1,d=(t,n)=>{const r=w(t,n);g[3*n+r]=-1},p=(t,n,r,e)=>{const o=w(t,n);g[3*n+o]=e;const s=w(r,e);g[3*e+s]=n};for(let t=0;t<r;t++){let n=o[t];const r=o[t+1];let e=s[t];const c=s[t+1];for(;n<r&&e<c;){const r=f[2*n],o=f[2*l+2*e];r===o?(p(t,f[2*n+1],o,f[2*l+2*e+1]),n++,e++):r<o?(d(t,f[2*n+1]),n++):(d(o,f[2*l+2*e+1]),e++)}for(;n<r;)d(t,f[2*n+1]),n++;for(;e<c;){d(f[2*l+2*e],f[2*l+2*e+1]),e++}}return g}class H{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?k:W}write(t,n,r){const e=this._edgeHashFunction(r);Z.seed=e;const o=Z.getIntRange(0,255),s=Z.getIntRange(0,this.settings.variants-1),c=.7,i=Z.getFloat(),a=255*(.5*Q(-(1-Math.min(i/c,1))+Math.max(0,i-c)/(1-c),1.2)+.5);t.position0.setVec(n,r.position0),t.position1.setVec(n,r.position1),t.componentIndex.set(n,r.componentIndex),t.variantOffset.set(n,o),t.variantStroke.set(n,s),t.variantExtension.set(n,a)}trim(t,n){return t.slice(0,n)}}const K=new Float32Array(6),O=new Uint32Array(K.buffer),V=new Uint32Array(1);function W(t){const n=K;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],V[0]=5381;for(let t=0;t<O.length;t++)V[0]=31*V[0]+O[t];return V[0]}function k(t){const n=K;n[0]=J(t.position0[0]),n[1]=J(t.position0[1]),n[2]=J(t.position0[2]),n[3]=J(t.position1[0]),n[4]=J(t.position1[1]),n[5]=J(t.position1[2]),V[0]=5381;for(let t=0;t<O.length;t++)V[0]=31*V[0]+O[t];return V[0]}const q=1e4;function J(t){return Math.round(t*q)/q}function Q(t,n){const r=t<0?-1:1;return Math.abs(t)**n*r}class R{constructor(){this._commonWriter=new H}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return S.createBuffer(t)}write(t,n,r){this._commonWriter.write(t,n,r),m(Y,r.faceNormal0,r.faceNormal1),w(Y,Y),t.normal.setVec(n,Y)}trim(t,n){return this._commonWriter.trim(t,n)}}R.Layout=S,R.glLayout=y(S,1);class X{constructor(){this._commonWriter=new H}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return F.createBuffer(t)}write(t,n,r){this._commonWriter.write(t,n,r),t.normalA.setVec(n,r.faceNormal0),t.normalB.setVec(n,r.faceNormal1)}trim(t,n){return this._commonWriter.trim(t,n)}}X.Layout=F,X.glLayout=y(F,1);const Y=d(),Z=new A;function $(t){const n=_(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return nt.updateSettings(t.writerSettings),rt.updateSettings(t.writerSettings),E(n,nt,rt)}function _(n,r,e,o){if(r){const t=G(e,o,n.count);return new tt(e,o,t,n)}const s=t(n.buffer,n.stride/4,{originalIndices:e,originalIndicesLength:o}),c=G(s.indices,o,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:c,vertices:j.createView(s.buffer)}}class tt{constructor(t,n,r,e){this.faces=t,this.facesLength=n,this.neighbors=r,this.vertices=e}}const nt=new R,rt=new X,et=n().vec3f(r.POSITION0).vec3f(r.POSITION1),ot=n().vec3f(r.POSITION0).vec3f(r.POSITION1).u16(r.COMPONENTINDEX).u16(r.U16PADDING,{glPadding:!0});export{j as A,et as a,$ as f,ot as m,E as p,_ as u};
//# sourceMappingURL=p-c9a18189.js.map
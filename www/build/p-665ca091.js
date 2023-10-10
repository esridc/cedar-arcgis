import{r as t,e6 as s,ec as e,e9 as i,ed as r,a6 as n,cV as o,b as h,eo as a,ee as c,eV as f,eB as u,eC as l,bz as p,d1 as d,k8 as w}from"./p-b54724b6.js";import{K as m,k as y}from"./p-cc3f40fb.js";import{o as b,r as A,e as g}from"./p-603bf978.js";import{m as E}from"./p-728b50df.js";import{p as T}from"./p-4f2ece68.js";import{c as _}from"./p-da19ac13.js";import{b as N}from"./p-3800516a.js";import{C as O,D as S}from"./p-13e550f5.js";import{r as x,a as B,g as I,c as j}from"./p-265ce3d1.js";import{t as C}from"./p-295917b5.js";import"./p-de65f975.js";import"./p-2b55d8a8.js";import"./p-38e70926.js";import"./p-9f1a0adc.js";import"./p-c736af50.js";import"./p-8cdc652c.js";import"./p-8a927e72.js";import"./p-5abe9c67.js";import"./p-52a9dec5.js";import"./p-cc24e5bd.js";import"./p-2563414c.js";import"./p-1cec84d0.js";import"./p-76eeb521.js";import"./p-74887bd8.js";import"./p-25e77904.js";var L;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"}(L||(L={}));class R{constructor(t,s){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=R.HEADER_SIZE,this._length+=R.CHUNK_HEADER_SIZE;const e=this._textToArrayBuffer(t);if(this._length+=this._alignTo(e.byteLength,4),s&&(this._length+=R.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const i=this._writeChunk(e,12,L.JSON,32);s&&this._writeChunk(s,i,L.BIN)}_writeHeader(){this._outView.setUint32(0,R.MAGIC,!0),this._outView.setUint32(4,R.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,s,e,i=0){const r=this._alignTo(t.byteLength,4);for(this._outView.setUint32(s,r,!0),this._outView.setUint32(s+=4,e,!0),this._writeArrayBuffer(this._outView.buffer,t,s+=4,0,t.byteLength),s+=t.byteLength;s%4;)i&&this._outView.setUint8(s,i),s++;return s}_writeArrayBuffer(t,s,e,i,r){new Uint8Array(t,e,r).set(new Uint8Array(s,i,r),0)}_textToArrayBuffer(t){return(new TextEncoder).encode(t).buffer}_alignTo(t,s){return s*Math.ceil(t/s)}}R.HEADER_SIZE=12,R.CHUNK_HEADER_SIZE=8,R.MAGIC=1179937895,R.VERSION=2;var M,z,v,k,V,P,F;!function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(M||(M={})),function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(z||(z={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(v||(v={})),function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(k||(k={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(V||(V={})),function(t){t.OPAQUE="OPAQUE",t.MASK="MASK",t.BLEND="BLEND"}(P||(P={})),function(t){t[t.NoColor=0]="NoColor",t[t.FaceColor=1]="FaceColor",t[t.VertexColor=2]="VertexColor"}(F||(F={}));class G{constructor(t,s,e,i,r){this._buffer=t,this._componentType=e,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:r};const n=this._getElementSize();n>=4&&r!==v.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=n),s.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const s=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const e=s%this._numComponentsForDataType,i=this._accessorMin[e];this._accessorMin[e]="number"!=typeof i?t:Math.min(i,t);const r=this._accessorMax[e];this._accessorMax[e]="number"!=typeof r?t:Math.max(r,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(t,s){return s*Math.ceil(t/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,s){switch(this._componentType){case O.BYTE:return new Int8Array(t,s);case O.FLOAT:return new Float32Array(t,s);case O.SHORT:return new Int16Array(t,s);case O.UNSIGNED_BYTE:return new Uint8Array(t,s);case O.UNSIGNED_INT:return new Uint32Array(t,s);case O.UNSIGNED_SHORT:return new Uint16Array(t,s)}}writeOutToBuffer(t,s){this._createTypedArray(t,s).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then((t=>{const s=new Uint8Array(t);for(let t=0;t<s.length;++t)this._data.push(s[t]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const s=this._numComponentsForDataType;this._accessorMin=new Array(s),this._accessorMax=new Array(s)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),s=this._numComponentsForDataType,e=(this._data.length-this._accessorIndex)/s;if(e%1)throw new Error("An accessor was ended with missing component values");for(let t=0;t<this._accessorMin.length;++t)"number"!=typeof this._accessorMin[t]&&(this._accessorMin[t]=0),"number"!=typeof this._accessorMax[t]&&(this._accessorMax[t]=0);const i={byteOffset:t*(this._accessorIndex/s),componentType:this._componentType,count:e,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case O.UNSIGNED_BYTE:case O.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((t=>this._finalizedPromiseResolve=t))}finalize(){const s=this._bufferView;return new Promise((s=>{const e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),s(t(e))})).then((()=>{this._isFinalized=!0,s.byteOffset=this.getByteOffset(),s.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case O.BYTE:case O.UNSIGNED_BYTE:return 1;case O.SHORT:case O.UNSIGNED_SHORT:return 2;case O.UNSIGNED_INT:case O.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case k.SCALAR:return 1;case k.VEC2:return 2;case k.VEC3:return 3;case k.VEC4:case k.MAT2:return 4;case k.MAT3:return 9;case k.MAT4:return 16}}}class U{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const s={byteLength:-1};t.buffers.push(s),this._buffer=s}addBufferView(t,s,e){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new G(this,this._gltf,t,s,e);return this._bufferViews.push(i),i}getByteOffset(t){let s=0;for(const e of this._bufferViews){if(e===t)return s;s+=e.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const s=[];for(const e of this._bufferViews){if(t&&e===t)return s;s.push(e.finalized)}return s}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),s=new ArrayBuffer(t);let e=0;for(const t of this._bufferViews)t.writeOutToBuffer(s,e),e+=t.byteSize;return s}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((s=>{s(t(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const s of this._bufferViews)t+=s.byteSize;return t}}function D(t,s){if(t.components)for(const e of t.components)e.faces&&"smooth"===e.shading&&J(e,s)}function J(t,n){null==n.normal&&(n.normal=new Float32Array(n.position.length));const o=t.faces,{position:h,normal:a}=n,c=o.length/3;for(let t=0;t<c;++t){const r=3*o[3*t],n=3*o[3*t+1],c=3*o[3*t+2],f=s(X,h[r],h[r+1],h[r+2]),u=s($,h[n],h[n+1],h[n+2]),l=s(H,h[c],h[c+1],h[c+2]),p=e(u,u,f),d=e(l,l,f),w=i(p,p,d);a[r]+=w[0],a[r+1]+=w[1],a[r+2]+=w[2],a[n]+=w[0],a[n+1]+=w[1],a[n+2]+=w[2],a[c]+=w[0],a[c+1]+=w[1],a[c+2]+=w[2]}for(let t=0;t<a.length;t+=3)s(Z,a[t],a[t+1],a[t+2]),r(Z,Z),a[t]=Z[0],a[t+1]=Z[1],a[t+2]=Z[2]}function Y(t){const{vertexSpace:s}=t;if(s.isRelative)return s.getOriginPoint(t.spatialReference);const{extent:e}=t,i=e.xmax-e.width/2,r=e.ymax-e.height/2,o=e.zmin;return new n({x:i,y:r,z:o,spatialReference:e.spatialReference})}const X=o(),$=o(),H=o(),Z=o();const q=h.getLogger("gltf");class K{constructor(t,s,e){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:s,binChunkBuffer:null,promises:[]}},e&&(this.params=e),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const s=this.gltf.extras,e=s.options.bufferOutputType===M.GLB||s.options.imageOutputType===z.GLB;e&&(s.binChunkBuffer=new U(this.gltf)),t.forEachScene((t=>{this._addScene(t)})),e&&s.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const s={};t.name&&(s.name=t.name),t.forEachNode((t=>{s.nodes||(s.nodes=[]);const e=this._addNode(t);s.nodes.push(e)})),this.gltf.scenes.push(s)}_addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const s={};t.name&&(s.name=t.name);const e=t.translation;u(e,l)||(s.translation=a(e));const i=t.rotation;m(i,b)||(s.rotation=A(i));const r=t.scale;u(r,p)||(s.scale=a(r)),t.mesh&&t.mesh.vertexAttributes.position?s.mesh=this._addMesh(t.mesh):t.forEachNode((t=>{s.children||(s.children=[]);const e=this._addNode(t);s.children.push(e)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(s),n}_addMesh(t){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},e=this.gltf.extras,i=e.options.bufferOutputType===M.GLB;let r;r=i?e.binChunkBuffer:new U(this.gltf),this.params.origin||(this.params.origin=Y(t));const{ignoreLocalTransform:n}=this.params,o=n?null:t.transform,{vertexSpace:h}=t,c=n?h.isRelative?new E({origin:a(h.origin)}):new T:h,f=N(t.vertexAttributes,c,o,this.params.origin,{geographic:this.params.geographic,unit:"meters"});D(t,f),this._flipYZAxis(f);const u=r.addBufferView(O.FLOAT,k.VEC3,v.ARRAY_BUFFER);let l,p,d,w;f.normal&&(l=r.addBufferView(O.FLOAT,k.VEC3,v.ARRAY_BUFFER)),t.vertexAttributes.uv&&(p=r.addBufferView(O.FLOAT,k.VEC2,v.ARRAY_BUFFER)),f.tangent&&(d=r.addBufferView(O.FLOAT,k.VEC4,v.ARRAY_BUFFER)),t.vertexAttributes.color&&(w=r.addBufferView(O.UNSIGNED_BYTE,k.VEC4,v.ARRAY_BUFFER)),u.startAccessor("POSITION"),l&&l.startAccessor("NORMAL"),p&&p.startAccessor("TEXCOORD_0"),d&&d.startAccessor("TANGENT"),w&&w.startAccessor("COLOR_0");const m=f.position.length/3,{position:y,normal:b,tangent:A}=f,{color:g,uv:_}=t.vertexAttributes;for(let t=0;t<m;++t)u.push(y[3*t]),u.push(y[3*t+1]),u.push(y[3*t+2]),l&&null!=b&&(l.push(b[3*t]),l.push(b[3*t+1]),l.push(b[3*t+2])),p&&null!=_&&(p.push(_[2*t]),p.push(_[2*t+1])),d&&null!=A&&(d.push(A[4*t]),d.push(A[4*t+1]),d.push(A[4*t+2]),d.push(A[4*t+3])),w&&null!=g&&(w.push(g[4*t]),w.push(g[4*t+1]),w.push(g[4*t+2]),w.push(g[4*t+3]));const S=u.endAccessor(),x=this._addAccessor(u.index,S);let B,I,j,C,L;if(l){const t=l.endAccessor();B=this._addAccessor(l.index,t)}if(p){const t=p.endAccessor();I=this._addAccessor(p.index,t)}if(d){const t=d.endAccessor();j=this._addAccessor(d.index,t)}if(w){const t=w.endAccessor();C=this._addAccessor(w.index,t)}t.components&&t.components.length>0&&t.components[0].faces?(L=r.addBufferView(O.UNSIGNED_INT,k.SCALAR,v.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(L,t.components,s,x,B,I,j,C)):this._addMeshVertexNonIndexed(t.components,s,x,B,I,j,C),u.finalize(),l&&l.finalize(),p&&p.finalize(),d&&d.finalize(),L&&L.finalize(),w&&w.finalize(),i||r.finalize();const R=this.gltf.meshes.length;return this.gltf.meshes.push(s),R}_flipYZAxis({position:t,normal:s,tangent:e}){this._flipYZBuffer(t,3),this._flipYZBuffer(s,3),this._flipYZBuffer(e,4)}_flipYZBuffer(t,s){if(null!=t)for(let e=1,i=2;e<t.length;e+=s,i+=s){const s=t[e],r=t[i];t[e]=r,t[i]=-s}}_addMaterial(t){if(null===t)return;const s=this._materialMap.indexOf(t);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const e={};switch(t.alphaMode){case"mask":e.alphaMode=P.MASK;break;case"auto":case"blend":e.alphaMode=P.BLEND}.5!==t.alphaCutoff&&(e.alphaCutoff=t.alphaCutoff),t.doubleSided&&(e.doubleSided=t.doubleSided),e.pbrMetallicRoughness={};const i=t=>t**2.1,r=t=>{const s=t.toRgba();return s[0]=i(s[0]/255),s[1]=i(s[1]/255),s[2]=i(s[2]/255),s};if(null!=t.color&&(e.pbrMetallicRoughness.baseColorFactor=r(t.color)),null!=t.colorTexture&&(e.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(t.colorTexture,t.colorTextureTransform)),null!=t.normalTexture&&(e.normalTexture=this._createTextureInfo(t.normalTexture,t.normalTextureTransform)),t instanceof _){if(null!=t.emissiveTexture&&(e.emissiveTexture=this._createTextureInfo(t.emissiveTexture,t.emissiveTextureTransform)),null!=t.emissiveColor){const s=r(t.emissiveColor);e.emissiveFactor=[s[0],s[1],s[2]]}null!=t.occlusionTexture&&(e.occlusionTexture=this._createTextureInfo(t.occlusionTexture,t.occlusionTextureTransform)),null!=t.metallicRoughnessTexture&&(e.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(t.metallicRoughnessTexture,t.metallicRoughnessTextureTransform)),e.pbrMetallicRoughness.metallicFactor=t.metallic,e.pbrMetallicRoughness.roughnessFactor=t.roughness}else e.pbrMetallicRoughness.metallicFactor=1,e.pbrMetallicRoughness.roughnessFactor=1,q.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const n=this.gltf.materials.length;return this.gltf.materials.push(e),this._materialMap.push(t),n}_createTextureInfo(t,s){const e={index:this._addTexture(t)};return s?(e.extensions||(e.extensions={}),e.extensions.KHR_texture_transform={scale:s.scale,offset:s.offset,rotation:c(s.rotation)},e):e}_addTexture(t){const s=this.gltf.textures??[];return this.gltf.textures=s,f(this._textureMap,t,(()=>{const e={sampler:this._addSampler(t),source:this._addImage(t)},i=s.length;return s.push(e),i}))}_addImage(t){const s=this._imageMap.get(t);if(null!=s)return s;this.gltf.images||(this.gltf.images=[]);const e={};if(t.url)e.uri=t.url;else{const s=t.data;e.extras=s;for(let t=0;t<this.gltf.images.length;++t)if(s===this.gltf.images[t].extras)return t;const i=this.gltf.extras;switch(i.options.imageOutputType){case z.GLB:{const t=i.binChunkBuffer.addBufferView(O.UNSIGNED_BYTE,k.SCALAR);if(C(s))null!=s.data&&t.writeOutToBuffer(s.data,0);else{const i=x(s).then((({data:t,type:s})=>(e.mimeType=s,t)));t.writeAsync(i).then((()=>{t.finalize()}))}e.bufferView=t.index;break}case z.DataURI:if(C(s)){q.warnOnce("Image export for basis compressed textures not available.");break}e.uri=B(s);break;default:if(C(s)){q.warnOnce("Image export for basis compressed textures not available.");break}i.promises.push(x(s).then((({data:t,type:s})=>{e.uri=t,e.mimeType=s})))}}const i=this.gltf.images.length;return this.gltf.images.push(e),this._imageMap.set(t,i),i}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let s=S.REPEAT,e=S.REPEAT;if("string"==typeof t.wrap)switch(t.wrap){case"clamp":s=S.CLAMP_TO_EDGE,e=S.CLAMP_TO_EDGE;break;case"mirror":s=S.MIRRORED_REPEAT,e=S.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":e=S.CLAMP_TO_EDGE;break;case"mirror":e=S.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":s=S.CLAMP_TO_EDGE;break;case"mirror":s=S.MIRRORED_REPEAT}}const i={wrapS:s,wrapT:e};for(let t=0;t<this.gltf.samplers.length;++t)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[t]))return t;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}_addAccessor(t,s){this.gltf.accessors||(this.gltf.accessors=[]);const e={bufferView:t,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(e.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(e),i}_addMeshVertexIndexed(t,s,e,i,r,n,o,h){for(const a of s){t.startAccessor("INDICES");for(let s=0;s<a.faces.length;++s)t.push(a.faces[s]);const s=t.endAccessor(),c={attributes:{POSITION:i},indices:this._addAccessor(t.index,s),material:this._addMaterial(a.material)};r&&"flat"!==a.shading&&(c.attributes.NORMAL=r),n&&(c.attributes.TEXCOORD_0=n),o&&"flat"!==a.shading&&(c.attributes.TANGENT=o),h&&(c.attributes.COLOR_0=h),e.primitives.push(c)}}_addMeshVertexNonIndexed(t,s,e,i,r,n,o){const h={attributes:{POSITION:e}};i&&(h.attributes.NORMAL=i),r&&(h.attributes.TEXCOORD_0=r),n&&(h.attributes.TANGENT=n),o&&(h.attributes.COLOR_0=o),t&&(h.material=this._addMaterial(t[0].material)),s.primitives.push(h)}}class Q{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){d(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}}class W{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class tt{constructor(t){this.mesh=t,this.name="",this.translation=o(),this.rotation=g(),this.scale=a(p),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){y(this.rotation,t[0],t[1],t[2])}}const st="model.gltf",et="model.glb";function it(s,e,i){const r=new K(s,e=e||{},i);let o=r.params;o?o.origin||(o.origin=new n({x:-1,y:-1,z:-1})):o={origin:new n({x:-1,y:-1,z:-1})};const h=o.origin,a=r.gltf,c=a.extras?.promises??[];let f=1,u=1,l=null;return t(c).then((()=>{const t={origin:h};delete a.extras;const s="number"==typeof e.jsonSpacing?e.jsonSpacing:4,i=JSON.stringify(a,((s,i)=>{if("extras"!==s){if(i instanceof ArrayBuffer){if(I(i))switch(e.imageOutputType){case z.DataURI:case z.GLB:break;case z.External:default:{const s=`img${u}.png`;return u++,t[s]=i,s}}switch(e.bufferOutputType){case M.DataURI:return j(i);case M.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=i);case M.External:default:{const s=`data${f}.bin`;return f++,t[s]=i,s}}}return i}}),s);return e.bufferOutputType===M.GLB||e.imageOutputType===z.GLB?t[et]=new R(i,l).buffer:t[st]=i,t}))}function rt(t,s){return it(t,{bufferOutputType:M.GLB,imageOutputType:z.GLB,jsonSpacing:0},s)}class nt{constructor(t,s){this._file={type:"model/gltf-binary",data:t},this.origin=s}buffer(){return Promise.resolve(this._file)}download(t){w(new Blob([this._file.data],{type:this._file.type}),t)}}function ot(t,s){const e=new Q,i=new W;return e.addScene(i),i.addNode(new tt(t)),rt(e,s).then((t=>new nt(t[et],t.origin)))}export{ot as toBinaryGLTF};
//# sourceMappingURL=p-665ca091.js.map
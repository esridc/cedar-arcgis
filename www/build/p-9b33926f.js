import{cr as e,e as t,w as s,K as a,s as o,cK as r,b as n,cN as i,aX as c}from"./p-b54724b6.js";import{r as u}from"./p-8043ab9b.js";import{m as l,a as p,i as f,g as d,N as w}from"./p-8a927e72.js";import{e as y,o as m,u as h}from"./p-5abe9c67.js";const g=1e6,b=20*g,T=2e9,j=3;async function E({data:o,name:r,description:n},i,c){let u=null;try{const l=e(i,"uploads"),p=e(l,"info"),{data:f}=await t(p,{query:{f:"json"},responseType:"json"});s(c);const d=a(i),w=f.maxUploadFileSize*g,y=d?T:w,m=d?Math.min(b,w):b;if(o.size>y)throw new Error("Data too large");const h=e(l,"register"),{data:E}=await t(h,{query:{f:"json",itemName:r,description:n},responseType:"json",method:"post"});if(s(c),!E.success)throw new Error("Registration failed");const{itemID:$}=E.item;u=e(l,$);const D=e(u,"uploadPart"),F=Math.ceil(o.size/m),A=new Array;for(let e=0;e<F;++e)A.push(o.slice(e*m,Math.min((e+1)*m,o.size)));const N=A.slice().reverse(),v=new Array,q=async()=>{for(;0!==N.length;){const e=A.length-N.length,a=N.pop(),o=new FormData;o.append("f","json"),o.append("file",a),o.append("partId",`${e}`);const{data:r}=await t(D,{timeout:0,body:o,responseType:"json",method:"post"});if(s(c),!r.success)throw new Error("Part upload failed")}};for(let e=0;e<j&&0!==N.length;++e)v.push(q());await Promise.all(v);const x=e(u,"commit"),{data:I}=await t(x,{query:{f:"json",parts:A.map(((e,t)=>t)).join(",")},responseType:"json",method:"post"});if(s(c),!I.success)throw new Error("Commit failed");return I.item}catch(s){if(null!=u){const s=e(u,"delete");await t(s,{query:{f:"json"},responseType:"json",method:"post"})}throw s}}async function $(e,t,s){return e.length?Promise.all(e.map((e=>D(e,t,s)))):[]}async function D(e,{layer:t,ongoingUploads:s},a){const r=s.get(e);if(r)return r;if(!K(t))throw new o(`${t.type}-layer:upload-failure`,"Layer does not support asset uploads.",new Error);if(F(e,t))return e;const n=A(e,t,a);s.set(e,n);try{await n}finally{s.delete(e)}return e}function F(e,t){const{parsedUrl:s}=t;return null!=s&&e.metadata.externalSources.some((e=>l(e,s)))}async function A(e,t,a){const{metadata:o}=e,{displaySource:r}=o,n=P(r?.source,t),i=!!n,c=o.externalSources.length>0,u=i?N(n,t,a):c?v(e,t,a):q(e,t,a),l=await u;return s(a),e.addExternalSources([l]),e}async function N(e,t,s){return{source:await S(e,t,s),original:!0}}async function v(e,t,s){const a=O(t),{externalSources:r}=e.metadata,n=I(r,t);if(!n)throw new o(`${t.type}-layer:upload-failure`,"Could not find an external source that is supported by the service.",new Error);const i=await S(n,t,s);e.addExternalSources([{source:i,original:!0}]);return{source:await H(i,t,a)}}async function q(e,t,s){const a=x(e,t,s);return{source:await C([a],t,s),extent:e.extent.clone(),original:!0}}async function x(e,t,a){const o=O(t),r=await e.load(a),n=await r.toBinaryGLTF({ignoreLocalTransform:!0});s(a);const i=await n.buffer();return s(a),{blob:new Blob([i.data],{type:i.type}),assetName:`${u()}.glb`,assetType:o}}function I(e,t){for(const s of e){const e=P(s.source,t);if(e)return e}return null}function P(e,t){if(!e)return null;const{infoFor3D:{supportedFormats:s,editFormats:a}}=t,o=w(e),r=new Array;let n=!1;for(let e=0;e<o.length;++e){const t=U(o[e],s);if(!t)return null;a.includes(t.assetType)&&(n=!0),r.push(t)}return n?r:null}function U(e,t){const s=d(e,t);return s?{asset:e,assetType:s}:null}async function S(e,t,s){return C(e.map((e=>R(e,s))),t,s)}async function C(e,t,a){const o=await Promise.all(e.map((async e=>{const o=L(await e,t,a);return s(a),o})));s(a);const{uploadResults:r}=await M(o.map((({item:e})=>e)),t,a);return s(a),e.map(((e,s)=>B(o[s],r[s],t)))}async function R(e,t){const{asset:a,assetType:o}=e;if(a instanceof File)return{blob:a,assetName:a.name,assetType:o};const r=await a.toBlob(t);return s(t),{blob:r,assetName:a.assetName,assetType:o}}async function L(e,t,a){const{blob:c,assetType:u,assetName:l}=e;let p=null;try{const e=await E({data:c,name:l},t.url,a);s(a),p={assetType:u,assetUploadId:e.itemID}}catch(e){r(e),n.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!p){const e=await i(c);if(s(a),!e.isBase64)throw new o(`${t.type}-layer:uploadAssets-failure`,"Expected gltf data in base64 format after conversion.",new Error);p={assetType:u,assetData:e.data}}if(!p)throw new o(`${t.type}-layer:uploadAssets-failure`,"Unable to prepare uploadAsset request options.",new Error);return{item:p,assetName:l}}async function M(a,r,n){const i=await t(e(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(a)},method:"post",responseType:"json"});if(s(n),i.data.uploadResults.length!==a.length)throw new o(`${r.type}-layer:uploadAssets-failure`,`Bad response. Uploaded ${a.length} items and received ${i.data.uploadResults.length} results.`,new Error);return i.data}function B(e,t,s){const{success:a}=t;if(!a){const{error:a}=t;throw new o(`${s.type}-layer:upload-failure`,`Failed to upload mesh file ${e.assetName}. Error code: ${a.code}. Error message: ${a.messages}`,new Error)}const{assetHash:r}=t,{assetName:n,item:{assetType:i}}=e,{infoFor3D:{supportedFormats:c}}=s,u=y(i,c);if(!u)throw new o(`${s.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${i}, but it does not list it in its supported formats.`,new Error);return new p(n,u,[new f(`${s.parsedUrl.path}/assets/${r}`,r)])}async function H(s,a,r){const n=s.map((({assetName:e,parts:t})=>({assetName:e,assetHash:t[0].partHash}))),i=a.capabilities?.operations.supportsAsyncConvert3D,c={query:{f:"json",assets:JSON.stringify(n),transportType:"esriTransportTypeUrl",targetFormat:r,async:i},responseType:"json",timeout:0},u=e(a.parsedUrl.path,"convert3D"),l=(i?await J(u,c):await t(u,c)).data,{infoFor3D:{supportedFormats:d}}=a;return l.assets.map((e=>{const t=m(e.contentType,d);if(!t)throw new o(`${a.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${t}, but it does not list it in its supported formats.`,new Error);return new p(e.assetName,e.contentType,[new f(e.assetURL,e.assetHash)])}))}async function J(e,s){const a=(await t(e,s)).data.statusUrl;for(;;){const e=(await t(a,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return t(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new o("async-convert3D-failed","asynchronous convert3D call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new o("async-convert3D-failed","asynchronous convert3D call failed (undefined response status)")}await c(k)}}function K(e){return!!e.infoFor3D&&!!e.url}function O(e){const{infoFor3D:t}=e,s=m("model/gltf-binary",t.supportedFormats)??h("glb",t.supportedFormats);if(!s)throw new o(`${e.type}-layer:upload-failure`,"Layer does not support glb.",new Error);return s}const k=1e3;export{$ as uploadAssets};
//# sourceMappingURL=p-9b33926f.js.map
import{fh as t,R as r,aU as e,et as n,fi as o}from"./p-b54724b6.js";import{S as s}from"./p-cc3f40fb.js";import{I as l,w as a,c as f,l as i,e as u}from"./p-5a001adc.js";import{r as c,n as p}from"./p-b4b7d6a0.js";import{a as b,b as d,d as m}from"./p-14f4aabe.js";import"./p-de65f975.js";import"./p-603bf978.js";import"./p-2570f2bd.js";function h(t,r,e,n){const{rendererJSON:o,isRGBRenderer:s}=t;let l=null,a=null;if(r&&s)l=r;else if(r&&"pointCloudUniqueValueRenderer"===o?.type){a=b.fromJSON(o);const t=a.colorUniqueValueInfos;l=new Uint8Array(3*n);const e=j(a.fieldTransformType);for(let o=0;o<n;o++){const n=(e?e(r[o]):r[o])+"";for(let r=0;r<t.length;r++)if(t[r].values.includes(n)){l[3*o]=t[r].color.r,l[3*o+1]=t[r].color.g,l[3*o+2]=t[r].color.b;break}}}else if(r&&"pointCloudStretchRenderer"===o?.type){a=d.fromJSON(o);const t=a.stops;l=new Uint8Array(3*n);const e=j(a.fieldTransformType);for(let o=0;o<n;o++){const n=e?e(r[o]):r[o],s=t.length-1;if(n<t[0].value)l[3*o]=t[0].color.r,l[3*o+1]=t[0].color.g,l[3*o+2]=t[0].color.b;else if(n>=t[s].value)l[3*o]=t[s].color.r,l[3*o+1]=t[s].color.g,l[3*o+2]=t[s].color.b;else for(let r=1;r<t.length;r++)if(n<t[r].value){const e=(n-t[r-1].value)/(t[r].value-t[r-1].value);l[3*o]=t[r].color.r*e+t[r-1].color.r*(1-e),l[3*o+1]=t[r].color.g*e+t[r-1].color.g*(1-e),l[3*o+2]=t[r].color.b*e+t[r-1].color.b*(1-e);break}}}else if(r&&"pointCloudClassBreaksRenderer"===o?.type){a=m.fromJSON(o);const t=a.colorClassBreakInfos;l=new Uint8Array(3*n);const e=j(a.fieldTransformType);for(let o=0;o<n;o++){const n=e?e(r[o]):r[o];for(let r=0;r<t.length;r++)if(n>=t[r].minValue&&n<=t[r].maxValue){l[3*o]=t[r].color.r,l[3*o+1]=t[r].color.g,l[3*o+2]=t[r].color.b;break}}}else l=new Uint8Array(3*n).fill(255);if(e&&a&&a.colorModulation){const t=a.colorModulation.minValue,r=a.colorModulation.maxValue,o=.3;for(let s=0;s<n;s++){const n=e[s],a=n>=r?1:n<=t?o:o+(1-o)*(n-t)/(r-t);l[3*s]=a*l[3*s],l[3*s+1]=a*l[3*s+1],l[3*s+2]=a*l[3*s+2]}}return l}function w(t,r){if(null==t.encoding||""===t.encoding){const e=a(r,t);if(null==e.vertexAttributes.position)return;const n=i(r,e.vertexAttributes.position),o=e.header.fields,s=[o.offsetX,o.offsetY,o.offsetZ],l=[o.scaleX,o.scaleY,o.scaleZ],f=n.length/3,u=new Float64Array(3*f);for(let t=0;t<f;t++)u[3*t]=n[3*t]*l[0]+s[0],u[3*t+1]=n[3*t+1]*l[1]+s[1],u[3*t+2]=n[3*t+2]*l[2]+s[2];return u}if("lepcc-xyz"===t.encoding)return f(r).result}function y(t,r,e){return null!=t&&t.attributeInfo.useElevation?r?A(r,e):null:null!=t&&t.attributeInfo.storageInfo?l(t.attributeInfo.storageInfo,t.buffer,e):null}function A(t,r){const e=new Float64Array(r);for(let n=0;n<r;n++)e[n]=t[3*n+2];return e}function M(t,r,e,n,o){const s=t.length/3;let l=0;for(let a=0;a<s;a++){let s=!0;for(let t=0;t<n.length&&s;t++){const{filterJSON:r}=n[t],e=o[t].values[a];switch(r.type){case"pointCloudValueFilter":{const t="exclude"===r.mode;r.values.includes(e)===t&&(s=!1);break}case"pointCloudBitfieldFilter":{const t=C(r.requiredSetBits),n=C(r.requiredClearBits);(e&t)===t&&0==(e&n)||(s=!1);break}case"pointCloudReturnFilter":{const t=15&e,n=e>>>4&15,o=n>1,l=1===t,a=t===n;let f=!1;for(const t of r.includedReturns)if("last"===t&&a||"firstOfMany"===t&&l&&o||"lastOfMany"===t&&a&&o||"single"===t&&!o){f=!0;break}f||(s=!1);break}}}s&&(e[l]=a,t[3*l]=t[3*a],t[3*l+1]=t[3*a+1],t[3*l+2]=t[3*a+2],r[3*l]=r[3*a],r[3*l+1]=r[3*a+1],r[3*l+2]=r[3*a+2],l++)}return l}function j(t){switch(t){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function C(t){let r=0;for(const e of t||[])r|=1<<e;return r}class k{transform(r){const e=this._transform(r),n=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&n.push(e.pointIdFilterMap.buffer);for(const r of e.attributes)"buffer"in r.values&&t(r.values.buffer)&&r.values.buffer!==e.rgb.buffer&&n.push(r.values.buffer);return Promise.resolve({result:e,transferList:n})}_transform(t){const n=w(t.schema,t.geometryBuffer);let o=n.length/3,s=null;const l=new Array,a=y(t.primaryAttributeData,n,o);null!=t.primaryAttributeData&&a&&l.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:a});const f=y(t.modulationAttributeData,n,o);null!=t.modulationAttributeData&&f&&l.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:f});let i=h(t.rendererInfo,a,f,o);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const e=t.filterAttributesData.filter(r).map((t=>{const r=y(t,n,o),e={attributeInfo:t.attributeInfo,values:r};return l.push(e),e}));s=new Uint32Array(o),o=M(n,i,s,t.filterInfo,e)}for(const r of t.userAttributesData){const t=y(r,n,o);l.push({attributeInfo:r.attributeInfo,values:t})}3*o<i.length&&(i=new Uint8Array(i.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(n,o,t.elevationOffset);const u=this._transformCoordinates(n,o,t.obb,e.fromJSON(t.inSR),e.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:i,attributes:l,pointIdFilterMap:s}}_transformCoordinates(t,r,e,l,a){if(!n(t,l,0,t,a,0,r))throw new Error("Can't reproject");const f=c(e.center[0],e.center[1],e.center[2]),i=p(),u=p();s(U,e.quaternion);const b=new Float32Array(3*r);for(let n=0;n<r;n++)i[0]=t[3*n]-f[0],i[1]=t[3*n+1]-f[1],i[2]=t[3*n+2]-f[2],o(u,i,U),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(u[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(u[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(u[2])),b[3*n]=i[0],b[3*n+1]=i[1],b[3*n+2]=i[2];return b}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let n=0;n<r;n++)t[3*n+2]+=e}}const U=u();function F(){return new k}export default F;
//# sourceMappingURL=p-d46c7f0c.js.map
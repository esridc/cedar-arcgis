import{I as t}from"./p-673b0971.js";import{A as r,f as e,u as n,p as s,a,m as i}from"./p-c9a18189.js";import"./p-76eeb521.js";import"./p-74887bd8.js";import"./p-b54724b6.js";import"./p-0609006d.js";import"./p-783b6965.js";import"./p-8cdc652c.js";import"./p-c736af50.js";import"./p-2570f2bd.js";import"./p-13e550f5.js";import"./p-795f7c81.js";function o(r,e){return e.push(r.buffer),{buffer:r.buffer,layout:new t(r.layout)}}class c{async extract(t){const r=p(t),n=e(r),s=[r.data.buffer];return{result:l(n,s),transferList:s}}async extractComponentsEdgeLocations(t){const r=p(t),e=n(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=s(e,d,j),i=[];return{result:o(a.regular.instancesData,i),transferList:i}}async extractEdgeLocations(t){const r=p(t),e=n(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=s(e,m,j),i=[];return{result:o(a.regular.instancesData,i),transferList:i}}}function p(t){return{data:r.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indices):"Uint16Array"===t.indicesType?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function l(t,r){r.push(t.regular.lodInfo.lengths.buffer),r.push(t.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:o(t.regular.instancesData,r),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o(t.silhouette.instancesData,r),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(t){return a.createBuffer(t)}trim(t,r){return t.slice(0,r)}write(t,r,e){t.position0.setVec(r,e.position0),t.position1.setVec(r,e.position1)}}class f{allocate(t){return i.createBuffer(t)}trim(t,r){return t.slice(0,r)}write(t,r,e){t.position0.setVec(r,e.position0),t.position1.setVec(r,e.position1),t.componentIndex.set(r,e.componentIndex)}}const m=new u,d=new f,j={allocate:()=>null,write:()=>{},trim:()=>null};export default c;
//# sourceMappingURL=p-705bc121.js.map
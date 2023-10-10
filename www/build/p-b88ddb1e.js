import{e as n,cr as t,bP as e,cs as r,cc as u}from"./p-b54724b6.js";import{b as o}from"./p-a5e3ec2a.js";import{t as l}from"./p-8dc3148c.js";function c(n){const t={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){t[e]=[];for(let n=0;n<r.length;n++)t[e][n]=c(r[n])}else"object"==typeof r?r.toJSON&&(t[e]=JSON.stringify(r)):t[e]=r}return t}const s="Layer does not support extent calculation.";function a(n,t){if(t&&"extent"===n.type)return`${n.xmin},${n.ymin},${n.xmax},${n.ymax}`;if(t&&"point"===n.type)return`${n.x},${n.y}`;const e=n.toJSON();return delete e.spatialReference,JSON.stringify(e)}function f(n,t){const e=n.geometry,r=n.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;const o=r;let l,c,s;if(null!=e&&(c=e.spatialReference,s=e.spatialReference.wkid||JSON.stringify(e.spatialReference),o.geometryType=u(e),o.geometry=a(e,n.compactGeometryEnabled),o.inSR=s),r.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete o.outFields:r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","),r.outSR?(o.outSR=r.outSR.wkid||JSON.stringify(r.outSR),l=n.outSpatialReference):e&&(r.returnGeometry||r.returnCentroid)&&(o.outSR=o.inSR,l=c),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(o.outStatistics=JSON.stringify(r.outStatistics)),r.fullText&&(o.fullText=JSON.stringify(r.fullText)),r.pixelSize&&(o.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(n.defaultSpatialReferenceEnabled&&null!=c&&null!=n.quantizationParameters&&null!=n.quantizationParameters.extent&&c.equals(n.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(o.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(o.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(o.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){const n=r.timeExtent,{start:t,end:e}=n;null==t&&null==e||(o.time=t===e?t:`${t??"null"},${e??"null"}`),delete r.timeExtent}return n.defaultSpatialReferenceEnabled&&null!=c&&null!=l&&c.equals(l)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function i(n,t,e,u){const o=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await N(n,t,"json",u);return r(t,e,o.data),o}async function d(n,t,e,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:e.createFeatureResult()};const u=await y(n,t,r),o=u;return o.data=l(u.data,e),o}function y(n,t,e){return N(n,t,"pbf",e)}function O(n,t,e){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):N(n,t,"json",e,{returnIdsOnly:!0})}function p(n,t,e){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):N(n,t,"json",e,{returnIdsOnly:!0,returnCountOnly:!0})}async function J(n,t,e){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await N(n,t,"json",e,{returnExtentOnly:!0,returnCountOnly:!0}),u=r.data;if(u.hasOwnProperty("extent"))return r;if(u.features)throw new Error(s);if(u.hasOwnProperty("count"))throw new Error(s);return r}async function N(r,u,l,s={},a={}){const i="string"==typeof r?e(r):r,d=u.geometry?[u.geometry]:[];s.responseType="pbf"===l?"array-buffer":"json";const y=await o(d,null,s),O=y&&y[0];null!=O&&((u=u.clone()).geometry=O);const p=c({...i.query,f:l,...a,...f(u,a)});return n(t(i.path,S(u,a)?"query3d":"query"),{...s,query:{...p,...s.query}})}function S(n,t){return null!=n.formatOf3DObjects&&!(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)}export{J as S,d as c,O as d,y as f,i as m,p,c as t};
//# sourceMappingURL=p-b88ddb1e.js.map
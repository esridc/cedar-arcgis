import{cS as t,cT as s,cU as e,U as r,h as p}from"./p-b54724b6.js";import{t as o}from"./p-1b4a7439.js";function u(r){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?t:"esriGeometryPolyline"===r?s:e}}}const n=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let a=1;function i(t,s){if(p("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const s in t){e+=`this${n.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(t[s])};`}const r=new Function(`\n      return class AttributesClass$${a++} {\n        constructor() {\n          ${e};\n        }\n      }\n    `)();return()=>new r}catch(e){return()=>({[s]:null,...t})}}function c(t={}){return[{name:"New Feature",description:"",prototype:{attributes:r(t)}}]}function l(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}export{c as a,l as c,i,u as o};
//# sourceMappingURL=p-5525ea5e.js.map
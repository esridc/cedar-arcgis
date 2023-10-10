import{k as t,aT as e,l as s,y as r,cb as i,n as o,a3 as n,bP as a,h as u,N as c,ca as p,s as l}from"./p-b54724b6.js";import{o as h,u as f}from"./p-5abe9c67.js";import{f as m}from"./p-a5e3ec2a.js";import{n as d,s as y}from"./p-d77465bf.js";import{S as b}from"./p-b88ddb1e.js";import{a as x}from"./p-0856fe30.js";import{n as F}from"./p-d7fc78fa.js";async function j(s,r,i){const o=m(s);return b(o,t.from(r),{...i}).then((t=>({count:t.data.count,extent:e.fromJSON(t.data.extent)})))}let w=class extends n{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return a(this.url)}async execute(t,e){const s=await this.executeJSON(t,e);return this.featureSetFromJSON(t,s,e)}async executeJSON(t,e){const s=this._normalizeQuery(t),r=null!=t.outStatistics?.[0],i=u("featurelayer-pbf-statistics"),o=!r||i;let n;if(this.pbfSupported&&o)try{n=await F(this.url,s,e)}catch(t){if("query:parsing-pbf"!==t.name)throw t;this.pbfSupported=!1}return this.pbfSupported&&o||(n=await x(this.url,s,e)),this._normalizeFields(n.fields),n}async featureSetFromJSON(t,e,s){if(!this._queryIs3DObjectFormat(t)||null==this.infoFor3D||!e.features)return c.fromJSON(e);const{meshFeatureSetFromJSON:r}=await p(import("./p-da19ac13.js").then((function(t){return t.b})),s);return r(t,this.infoFor3D,e)}executeForCount(t,e){return d(this.url,this._normalizeQuery(t),e)}executeForExtent(t,e){return j(this.url,this._normalizeQuery(t),e)}executeForIds(t,e){return y(this.url,this._normalizeQuery(t),e)}async executeRelationshipQuery(t,e){const[{default:s},{executeRelationshipQuery:r}]=await p(Promise.all([import("./p-b54724b6.js").then((function(t){return t.kd})),import("./p-225418b8.js")]),e);return t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),r(this.url,t,e)}async executeRelationshipQueryForCount(t,e){const[{default:s},{executeRelationshipQueryForCount:r}]=await p(Promise.all([import("./p-b54724b6.js").then((function(t){return t.kd})),import("./p-225418b8.js")]),e);return t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),r(this.url,t,e)}async executeAttachmentQuery(t,e){const{executeAttachmentQuery:s,fetchAttachments:r,processAttachmentQueryResult:i}=await p(import("./p-0483db18.js"),e),o=m(this.url);return i(o,await(this.queryAttachmentsSupported?s(o,t,e):r(o,t,e)))}async executeTopFeaturesQuery(t,e){const{executeTopFeaturesQuery:s}=await p(import("./p-ae0b212d.js"),e);return s(this.parsedUrl,t,this.sourceSpatialReference,e)}async executeForTopIds(t,e){const{executeForTopIds:s}=await p(import("./p-2801820c.js"),e);return s(this.parsedUrl,t,e)}async executeForTopExtents(t,e){const{executeForTopExtents:s}=await p(import("./p-5c5f9ea1.js"),e);return s(this.parsedUrl,t,e)}async executeForTopCount(t,e){const{executeForTopCount:s}=await p(import("./p-63eeb7e6.js"),e);return s(this.parsedUrl,t,e)}_normalizeQuery(e){let s=t.from(e);s.sourceSpatialReference=s.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(s=s===e?s.clone():s,s.gdbVersion=e.gdbVersion||this.gdbVersion,s.dynamicDataSource=e.dynamicDataSource?i.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(e)){s=s===e?s.clone():s,s.formatOf3DObjects=null;const{supportedFormats:t,queryFormats:i}=r,o=h("model/gltf-binary",t)??f("glb",t),n=h("model/gltf+json",t)??f("gtlf",t);for(const t of i){if(t===o){s.formatOf3DObjects=t;break}t!==n||s.formatOf3DObjects||(s.formatOf3DObjects=t)}if(!s.formatOf3DObjects)throw new l("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==s.outFields||!s.outFields.includes("*")){s=s===e?s.clone():s,null==s.outFields&&(s.outFields=[]);const{originX:t,originY:i,originZ:o,translationX:n,translationY:a,translationZ:u,scaleX:c,scaleY:p,scaleZ:l,rotationX:h,rotationY:f,rotationZ:m,rotationDeg:d}=r.transformFieldRoles;s.outFields.push(t,i,o,n,a,u,c,p,l,h,f,m,d)}}return s}_normalizeFields(t){if(null!=this.fieldsIndex&&null!=t)for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return null!=this.infoFor3D&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};s([r({type:i})],w.prototype,"dynamicDataSource",void 0),s([r()],w.prototype,"fieldsIndex",void 0),s([r()],w.prototype,"gdbVersion",void 0),s([r()],w.prototype,"infoFor3D",void 0),s([r({readOnly:!0})],w.prototype,"parsedUrl",null),s([r()],w.prototype,"pbfSupported",void 0),s([r()],w.prototype,"queryAttachmentsSupported",void 0),s([r()],w.prototype,"sourceSpatialReference",void 0),s([r({type:String})],w.prototype,"url",void 0),w=s([o("esri.tasks.QueryTask")],w);const g=w;export{g as x};
//# sourceMappingURL=p-ac0dfd7c.js.map
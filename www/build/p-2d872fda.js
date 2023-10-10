import{hG as e,i6 as t,hH as s,d2 as i,d3 as r,d4 as a,d5 as o,hJ as n,hR as l,i3 as p,aO as h,bS as d,cK as c,ha as m,e as u,aT as y,aV as f,is as g,s as b,Q as v,l as j,y as w,aQ as x,a8 as S,W as I,X as T,d7 as R,n as E,iH as M}from"./p-b54724b6.js";import{t as F}from"./p-a779e49b.js";import{i as O}from"./p-5d1ac384.js";import{E as q,f as L,Y as k}from"./p-f9e5f1f2.js";import{m as A}from"./p-95a83697.js";import{t as G}from"./p-f3bb10eb.js";import{e as H}from"./p-053dc63d.js";import"./p-2a2efb66.js";import"./p-ac0dfd7c.js";import"./p-5abe9c67.js";import"./p-a5e3ec2a.js";import"./p-80be55a5.js";import"./p-d77465bf.js";import"./p-b88ddb1e.js";import"./p-8dc3148c.js";import"./p-ca5fb53c.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-0856fe30.js";import"./p-d7fc78fa.js";import"./p-a3f0a5f3.js";import"./p-6b09cddc.js";let P=class extends(e(t(s(q(L(i(r(a(o(n(l(p(h(d)))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const s=t.supportedImageFormatTypes;return s&&s.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,s,i){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap?.supportsDynamicLayers){const e=M(i.origin);if(e===m.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=H(r,e,m.SERVICE)}else if(e>m.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=H(r,e.sublayers,M(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;r.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")}));o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=r.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,s,i){const r=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new A({layer:this,floors:i?.floors,scale:O({extent:e,width:t})*r}),o=a.toJSON();a.destroy();const n=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());o.dpi*=r;const h={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();h.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+s,...o,...n,...h}}async fetchImage(e,t,s,i){const{data:r}=await this._fetchImage("image",e,t,s,i);return r}async fetchImageBitmap(e,t,s,i){const{data:r,url:a}=await this._fetchImage("blob",e,t,s,i);return G(r,a,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:s}=await u(this.url,t),{extent:i,fullExtent:r,timeExtent:a}=s,o=i||r;return{fullExtent:o&&y.fromJSON(o),timeExtent:a&&f.fromJSON({start:a[0],end:a[1]})}}loadAll(){return F(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return g(this,e)}async _fetchImage(e,t,s,i,r){const a={responseType:e,signal:r?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,s,i,r),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},o=this.parsedUrl.path+"/export";if(null!=a.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query});try{const{data:e}=await u(o,a);return{data:e,url:o}}catch(e){if(v(e))throw e;throw new b("mapimagelayer:image-fetch-error",`Unable to load image: ${o}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:s}=await u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});s&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};j([w({type:x})],P.prototype,"dateFieldsTimeReference",void 0),j([w({type:Boolean})],P.prototype,"datesInUnknownTimezone",void 0),j([w()],P.prototype,"dpi",void 0),j([w()],P.prototype,"gdbVersion",void 0),j([w()],P.prototype,"imageFormat",void 0),j([S("imageFormat",["supportedImageFormatTypes"])],P.prototype,"readImageFormat",null),j([w({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],P.prototype,"imageMaxHeight",void 0),j([w({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],P.prototype,"imageMaxWidth",void 0),j([w()],P.prototype,"imageTransparency",void 0),j([w({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],P.prototype,"isReference",void 0),j([w({json:{read:!1,write:!1}})],P.prototype,"labelsVisible",void 0),j([w({type:["ArcGISMapServiceLayer"]})],P.prototype,"operationalLayerType",void 0),j([w({json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),j([w({type:x})],P.prototype,"preferredTimeReference",void 0),j([w()],P.prototype,"sourceJSON",void 0),j([w({json:{write:{ignoreOrigin:!0}}})],P.prototype,"sublayers",void 0),j([I("sublayers",{layers:{type:[k]},visibleLayers:{type:[T]}})],P.prototype,"writeSublayers",null),j([w({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),j([w({json:{read:!1},readOnly:!0,value:"map-image"})],P.prototype,"type",void 0),j([w(R)],P.prototype,"url",void 0),P=j([E("esri.layers.MapImageLayer")],P);const $=P;export default $;
//# sourceMappingURL=p-2d872fda.js.map
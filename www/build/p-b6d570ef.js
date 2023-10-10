import{hG as e,hJ as t,d3 as s,d4 as i,hH as r,d5 as o,bS as l,dg as a,cK as n,e as h,ii as u,c as y,l as d,y as p,a8 as c,aT as S,hV as v,hT as m,d7 as g,n as b,ij as f,ik as C,il as G,h5 as j,h2 as x}from"./p-b54724b6.js";const k=["atom","xml"],P={base:f,key:"type",typeMap:{"simple-line":C},errorContext:"symbol"},w={base:f,key:"type",typeMap:{"picture-marker":G,"simple-marker":j},errorContext:"symbol"},F={base:f,key:"type",typeMap:{"simple-fill":x},errorContext:"symbol"};let M=class extends(e(t(s(i(r(o(l))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?a(this.url,k)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:s}=await h(y.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:u(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return s}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};d([p()],M.prototype,"description",void 0),d([p()],M.prototype,"featureCollections",void 0),d([c("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),d([p({type:S,json:{name:"lookAtExtent"}})],M.prototype,"fullExtent",void 0),d([p(v)],M.prototype,"id",void 0),d([p(m)],M.prototype,"legendEnabled",void 0),d([p({types:P,json:{write:!0}})],M.prototype,"lineSymbol",void 0),d([p({type:["show","hide"]})],M.prototype,"listMode",void 0),d([p({types:w,json:{write:!0}})],M.prototype,"pointSymbol",void 0),d([p({types:F,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),d([p({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),d([p(g)],M.prototype,"url",void 0),d([p({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],M.prototype,"title",null),d([p({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=d([b("esri.layers.GeoRSSLayer")],M);const R=M;export default R;
//# sourceMappingURL=p-b6d570ef.js.map
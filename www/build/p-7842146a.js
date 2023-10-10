import{l as e,y as t,b7 as s,W as i,n as r,o,aJ as a,b8 as n,iE as l,U as p,P as d,V as h,bP as c,e as y,d2 as u,d3 as m,d4 as f,hH as v,d5 as w,hR as g,bS as b,ac as S,au as j,dx as x,cK as M,s as T,a8 as L,hU as I,aW as O}from"./p-b54724b6.js";import{g as N}from"./p-3a359945.js";import{N as K,K as U}from"./p-221e6973.js";import{s as V,l as D,u as J,m as P}from"./p-097c58e3.js";import"./p-bf0e41eb.js";import"./p-8043ab9b.js";import"./p-0db5f47d.js";import"./p-bafc5e09.js";import"./p-56278127.js";var R;let z=R=class extends o{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!a(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new n("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new s;l(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new R({geometry:p(this.geometry),type:this.type})}};e([t({type:s}),N()],z.prototype,"geometry",void 0),e([i(["web-scene","portal-item"],"geometry")],z.prototype,"writeGeometry",null),e([t({type:["clip","mask","replace"],nonNullable:!0}),N()],z.prototype,"type",void 0),z=R=e([r("esri.layers.support.SceneModification")],z);const A=z;var G;let W=G=class extends(d(h.ofType(A))){constructor(e){super(e),this.url=null}clone(){return new G({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const s=new G;for(const i of e)s.add(A.fromJSON(i,t));return s}static async fromUrl(e,t,s){const i={url:c(e),origin:"service"},r=await y(e,{responseType:"json",signal:s?.signal}),o=t.toJSON(),a=[];for(const e of r.data)a.push(A.fromJSON({...e,geometry:{...e.geometry,spatialReference:o}},i));return new G({url:e,items:a})}};e([t({type:String})],W.prototype,"url",void 0),W=G=e([r("esri.layers.support.SceneModifications")],W);const _=W;let k=class extends(K(u(m(f(v(w(g(b)))))))){constructor(...e){super(...e),this._handles=new S,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(j((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),O))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,s){this._modificationsSource={url:x(e,s),context:s}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){M(e)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(U.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(U.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new T("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new T("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new T("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};e([t({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),e([t({type:["show","hide"]})],k.prototype,"listMode",void 0),e([t({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),e([t({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),e([t({type:V,readOnly:!0})],k.prototype,"nodePages",void 0),e([t({type:[D],readOnly:!0})],k.prototype,"materialDefinitions",void 0),e([t({type:[J],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),e([t({type:[P],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),e([t({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),e([t({type:_}),N({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),e([L(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),e([t(I)],k.prototype,"elevationInfo",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=e([r("esri.layers.IntegratedMeshLayer")],k);const C=k;export default C;
//# sourceMappingURL=p-7842146a.js.map
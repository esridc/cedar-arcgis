import{l as e,y as t,a8 as r,W as i,n as s,o as n,je as a,jf as l,aO as o,d5 as u,g1 as d,_ as h,U as y,cJ as c,b as p,s as b,i7 as f,hq as g,ig as m,hM as v,jg as w,gw as j,ha as S,k as O,jh as F,i9 as I,ia as T,ib as E,hT as A,jd as G,jc as L,hO as x,hp as $,ji as q,iA as C,iy as D,hP as P,jj as R,jk as N,jl as M,jm as V,j7 as k,hG as Q,i6 as U,hH as _,hJ as B,d2 as H,d3 as J,d4 as W,i3 as z,hR as K,bS as Z,V as X,ad as Y,aW as ee,cK as te,jn as re,jo as ie,bP as se,cr as ne,hW as ae,jp as le,jq as oe,jr as ue,ca as de,js as he,jt as ye,ju as ce,jv as pe,jw as be,jx as fe,jy as ge,jz as me,is as ve,i8 as we,jA as je,hV as Se,iH as Oe,jB as Fe}from"./p-b54724b6.js";import{t as Ie}from"./p-a779e49b.js";let Te=class extends n{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=a(e[r]);return t}writeDomains(e,t){if(!e)return;const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};e([t({type:Number,json:{write:!0}})],Te.prototype,"code",void 0),e([t({type:Object,json:{write:!0}})],Te.prototype,"defaultValues",void 0),e([t({json:{write:!0}})],Te.prototype,"domains",void 0),e([r("domains")],Te.prototype,"readDomains",null),e([i("domains")],Te.prototype,"writeDomains",null),e([t({type:String,json:{write:!0}})],Te.prototype,"name",void 0),Te=e([s("esri.layers.support.Subtype")],Te);const Ee=Te;const Ae=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Ge={key:"type",base:q,errorContext:"renderer",typeMap:{simple:g,"unique-value":C,"class-breaks":D}},Le=P(),xe=l({types:Ge});let $e=0;function qe(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function Ce(e){return new g({symbol:De(e)})}function De(e){switch(e){case"point":case"multipoint":return M.clone();case"polyline":return N.clone();case"polygon":case"multipatch":return R.clone();default:return null}}function Pe(e,t){return!!t&&("unique-value"===e?.type&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression)}function Re(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function Ne(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:r=null}const i={},s=Re(e,t);if(null!=s){const{defaultValues:e}=s;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new m({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const Me="esri.layers.support.SubtypeSublayer";let Ve=class extends(o(u(d(h)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${$e++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:s}=this;let n;if(i){n=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:a})=>{if(!a)return;const l=s?.fields?.find((e=>e.name===t));if(!l)return;const o={name:t};let u=!1;r!==l.alias&&(o.alias=r,u=!0),i!==l.editable&&(o.editable=i,u=!0),n.push(o),u&&e++})),0===e&&n.length===i.length&&(n=null)}else n=y(e);n?.length&&c(r,n,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:s,subtypeField:n}=e,a=s?.find((e=>e.code===r)),l=a?.defaultValues,o=a?.domains,u=[];for(const e of i){const i=e.clone(),{name:s}=i,a=t?.find((e=>e.name===s));if(i.visible=!t||!!a,a){const{alias:e,editable:t}=a;e&&(i.alias=e),!1===t&&(i.editable=!1)}const d=l?.[s]??null;i.defaultValue=s===n?r:d;const h=o?.[s]??null;i.domain=s===n?null:h?"inherited"===h.type?i.domain:h.clone():null,u.push(i)}return u}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||p.getLogger(Me).error(Qe("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){f(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?Ce(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,s=xe(i,t,r);let n;const{subtypeCode:a}=this;if(null!=a&&Pe(s,t.subtypeField)){const e=s.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(a)));e&&(n=new g({symbol:e.symbol}))}else"simple"!==s?.type||s.visualVariables?.length||(n=s);return n}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const s=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return s?void 0:xe(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[Ne(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Re(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw Qe("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw Qe("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw Qe("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw Qe("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:s}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:a}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:a,title:s}}return v(t,e)}createQuery(){if(!this.parent)throw Qe("createQuery");const e=w(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=j(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return Ae.some((e=>this.originIdOf(e)===S.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw Qe("queryAttachments");const i=e.clone();return i.where=ke(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw Qe("queryFeatures");const i=O.from(e)??r.createQuery();return null!=e&&(i.where=ke(i.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(i,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"capabilities",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"effectiveCapabilities",null),e([t({json:{write:{ignoreOrigin:!0}}})],Ve.prototype,"charts",void 0),e([t({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],Ve.prototype,"editingEnabled",void 0),e([t({type:Boolean,readOnly:!0})],Ve.prototype,"effectiveEditingEnabled",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"elevationInfo",null),e([t({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],Ve.prototype,"fieldOverrides",void 0),e([i("fieldOverrides")],Ve.prototype,"writeFieldOverrides",null),e([t({...Le.fields,readOnly:!0,json:{read:!1}})],Ve.prototype,"fields",null),e([t(Le.fieldsIndex)],Ve.prototype,"fieldsIndex",void 0),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"floorInfo",null),e([t({type:F,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],Ve.prototype,"formTemplate",void 0),e([t({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],Ve.prototype,"id",void 0),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"geometryType",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"type",void 0),e([t(qe(y(I)))],Ve.prototype,"labelsVisible",void 0),e([t({type:[T],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:E},write:{ignoreOrigin:!0}}})],Ve.prototype,"labelingInfo",void 0),e([t({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],Ve.prototype,"layerType",void 0),e([t(qe(y(A)))],Ve.prototype,"legendEnabled",void 0),e([t({type:["show","hide"]})],Ve.prototype,"listMode",void 0),e([t((()=>{const e=y(G);return e.json.origins.service.read=!1,qe(e)})())],Ve.prototype,"minScale",void 0),e([t((()=>{const e=y(L);return e.json.origins.service.read=!1,qe(e)})())],Ve.prototype,"maxScale",void 0),e([t({readOnly:!0})],Ve.prototype,"effectiveScaleRange",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"objectIdField",null),e([t({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],Ve.prototype,"opacity",void 0),e([t()],Ve.prototype,"parent",void 0),e([t(qe(y(x)))],Ve.prototype,"popupEnabled",void 0),e([t({type:$,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],Ve.prototype,"popupTemplate",void 0),e([t({readOnly:!0})],Ve.prototype,"defaultPopupTemplate",null),e([t({types:Ge,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],Ve.prototype,"renderer",null),e([r("service","renderer",["drawingInfo.renderer","subtypeField","type"])],Ve.prototype,"readRendererFromService",null),e([r("renderer",["layerDefinition.drawingInfo.renderer"])],Ve.prototype,"readRenderer",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"spatialReference",null),e([t({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],Ve.prototype,"subtypeCode",void 0),e([t({type:[m],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],Ve.prototype,"templates",void 0),e([r("service","templates",["geometryType","subtypeField","subtypes","type"])],Ve.prototype,"readTemplatesFromService",null),e([t({type:String,json:{write:{ignoreOrigin:!0}}})],Ve.prototype,"title",void 0),e([r("service","title",["subtypes"])],Ve.prototype,"readTitleFromService",null),e([t({readOnly:!0,json:{read:!1}})],Ve.prototype,"url",null),e([t({readOnly:!0})],Ve.prototype,"userHasUpdateItemPrivileges",null),e([t({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],Ve.prototype,"visible",void 0),Ve=e([s(Me)],Ve);const ke=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),s=`${t}=${r}`,n=e??"";return i.test(n)?n.replace(i,s):j(s,n)},Qe=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),Ue=Ve;const _e="SubtypeGroupLayer",Be="esri.layers.SubtypeGroupLayer";function He(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const Je=P();let We=class extends(V(k(Q(U(_(B(H(J(W(u(z(K(o(Z)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(X.ofType(Ue)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(Y((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),ee))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(te).then((async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>this._setUserPrivileges(this.serviceItemId,e))).then((()=>re(this,e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return ie(this)}get parsedUrl(){const e=se(this.url);return null!=e&&null!=this.layerId&&(e.path=ne(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ae(this.url,t):t}async addAttachment(e,t){return le(this,e,t,_e)}async updateAttachment(e,t,r){return oe(this,e,t,r,_e)}async applyEdits(e,t){return ue(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await de(import("./p-848e63b2.js"),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=w(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=j(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return he(this,e,t,_e)}async fetchRecomputedExtents(e){return ye(this,e,_e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Ie(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return ce(this,e,t,_e)}async queryFeatures(e,t){const r=await this.load(),i=O.from(e)??r.createQuery(),s=i.outFields??[];s.includes(this.subtypeField)||(s.push(this.subtypeField),i.outFields=s);const n=await r.source.queryFeatures(i,t);if(n?.features)for(const e of n.features)e.layer=e.sourceLayer=this.findSublayerForFeature(e);return n}async queryObjectIds(e,t){return pe(this,e,t,_e)}async queryFeatureCount(e,t){return be(this,e,t,_e)}async queryExtent(e,t){return fe(this,e,t,_e)}async queryRelatedFeatures(e,t){return ge(this,e,t,_e)}async queryRelatedFeaturesCount(e,t){return me(this,e,t,_e)}write(e,t){const{origin:r,layerContainerType:i,messages:s}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return s?.push(He(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return s?.push(He(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(s?.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&ve(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new b("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),we(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return je(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};e([t({readOnly:!0})],We.prototype,"createQueryVersion",null),e([t({readOnly:!0})],We.prototype,"editingEnabled",null),e([t({readOnly:!0})],We.prototype,"effectiveEditingEnabled",null),e([t({...Je.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],We.prototype,"fields",void 0),e([t(Je.fieldsIndex)],We.prototype,"fieldsIndex",void 0),e([t(Se)],We.prototype,"id",void 0),e([t({type:["show","hide","hide-children"]})],We.prototype,"listMode",void 0),e([t({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],We.prototype,"operationalLayerType",void 0),e([t(Je.outFields)],We.prototype,"outFields",void 0),e([t({readOnly:!0})],We.prototype,"parsedUrl",null),e([t()],We.prototype,"source",null),e([t({type:[Ee],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],We.prototype,"subtypes",void 0),e([t({type:X.ofType(Ue),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((({code:e})=>{const i=new Ue({subtypeCode:e});return i.read(t,r),i}));return new(X.ofType(Ue))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),s=S.PORTAL_ITEM;let n=!0;if(Oe(i)===s&&Oe(r.origin)>s){const t=e.some((e=>e.hasUserOverrides()));n=this._sublayersCollectionChanged||t}return{enabled:n,ignoreOrigin:!0}}}}})],We.prototype,"sublayers",void 0),e([t({type:Fe})],We.prototype,"timeInfo",void 0),e([t({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],We.prototype,"title",void 0),e([r("service","title",["name"])],We.prototype,"readTitleFromService",null),e([t({json:{read:!1}})],We.prototype,"type",void 0),We=e([s(Be)],We);const ze=We;export default ze;
//# sourceMappingURL=p-716cdc73.js.map
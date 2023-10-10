import{s as t,e as s,i as e,n as i,c as r,I as n}from"./p-a3f0a5f3.js";import{t as h,s as o}from"./p-e6a64715.js";import{h as u,ab as a,ck as l,dr as c,b as f,ah as d,f8 as p,as as m,Q as g,s as y,fe as b,ff as x,aB as w,a9 as A}from"./p-b54724b6.js";import{T as S,c as I}from"./p-2f568dc7.js";import{t as F}from"./p-8eb5caaf.js";import{V as T,W as M,S as C,t as _,Q as D,R as z}from"./p-570a8a46.js";import{c as v,u as N,f as U,e as O,i as j,a as k,l as G,b as E,s as B,n as R}from"./p-db174923.js";import{W as H}from"./p-29040467.js";import{U as $}from"./p-13e550f5.js";class J{static fromBuffer(t,s){return new J(t,s)}static create(t,s=4294967295){const e=new Uint32Array(Math.ceil(t/32));return new J(e,s)}constructor(t,s){this._mask=0,this._buf=t,this._mask=s}_getIndex(t){return Math.floor(t/32)}has(t){const s=this._mask&t;return!!(this._buf[this._getIndex(s)]&1<<s%32)}hasRange(t,s){let e=t,i=s;for(;e%32&&e!==i;){if(this.has(e))return!0;e++}for(;i%32&&e!==i;){if(this.has(e))return!0;i--}if(e===i)return!1;for(let t=e/32;t!==i/32;t++){if(this._buf[t])return!0}return!1}set(t){const s=this._mask&t,e=this._getIndex(s),i=1<<s%32;this._buf[e]|=i}setRange(t,s){let e=t,i=s;for(;e%32&&e!==i;)this.set(e++);for(;i%32&&e!==i;)this.set(i--);if(e!==i)for(let t=e/32;t!==i/32;t++)this._buf[t]=4294967295}unset(t){const s=this._mask&t,e=this._getIndex(s),i=1<<s%32;this._buf[e]&=4294967295^i}resize(t){const s=this._buf,e=new Uint32Array(Math.ceil(t/32));e.set(s),this._buf=e}or(t){for(let s=0;s<this._buf.length;s++)this._buf[s]|=t._buf[s];return this}and(t){for(let s=0;s<this._buf.length;s++)this._buf[s]&=t._buf[s];return this}xor(t){for(let s=0;s<this._buf.length;s++)this._buf[s]^=t._buf[s];return this}ior(t){for(let s=0;s<this._buf.length;s++)this._buf[s]|=~t._buf[s];return this}iand(t){for(let s=0;s<this._buf.length;s++)this._buf[s]&=~t._buf[s];return this}ixor(t){for(let s=0;s<this._buf.length;s++)this._buf[s]^=~t._buf[s];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let s=0;s<this._buf.length;s++)this._buf[s]=t._buf[s];return this}clone(){return new J(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let s=0;s<this._buf.length;s++){let e=this._buf[s],i=32*s;if(e)for(;e;){1&e&&t(i),e>>>=1,i++}}}countSet(){let t=0;return this.forEachSet((s=>{t++})),t}}let L=0;const P=u("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],Q=P[0],X=P[1],Y=P[2],Z=P[3],q=u("featurelayer-simplify-payload-size-factors")??[1,2,4],V=q[0],W=q[1],K=q[2],tt=u("featurelayer-simplify-mobile-factor")??2,st=u("esri-mobile");class et{constructor(t,s){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=t,this._layerSchema=s}static createInstance(){return L++,L=L>65535?0:L,L}get isEmpty(){return null!=this._deleted&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,s){let e=1;const i=st?tt:1;s>4e6?e=K*i:s>1e6?e=W*i:s>5e5?e=V*i:s>1e5&&(e=i);let r=0;t>4e3?r=Z*e:t>2e3?r=Y*e:t>100?r=X:t>15&&(r=Q);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),r*n}createQuantizedExtrudedQuad(t,s){return new h([5],[t-1,s,1,-1,1,1,-1,1,-1,-1])}parseTimestampOffset(t){return t}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,s){return this.setComputedNumericAtIndex(s,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,s){return this.setComputedStringAtIndex(0,s)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,s){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,s)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,s){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,s)}transform(t,s,e,i){const r=this.copy();return r._tx+=t,r._ty+=s,r._sx*=e,r._sy*=i,r}readAttribute(t,s=!1){const e=this._readAttribute(t,s);if(void 0!==e)return e;for(const e of this._joined){e.setIndex(this.getIndex());const i=e._readAttribute(t,s);if(void 0!==i)return i}}readAttributes(){const t=this._readAttributes();for(const s of this._joined){s.setIndex(this.getIndex());const e=s._readAttributes();for(const s of Object.keys(e))t[s]=e[s]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}hasField(t){return this.fields.has(t)}geometry(){const s=this.readHydratedGeometry(),e=t(s,this.geometryType,this.hasZ,this.hasM),i=a(e);return i&&(i.spatialReference=this._arcadeSpatialReference),i}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=S.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(t,s){return s&&s instanceof Date?this.isUnknownDateTimeField(t)?I.unknownDateJSToArcadeDate(s):I.dateJSAndZoneToArcadeDate(s,this.contextTimeReference?.timeZone??"system"):s}isUnknownDateTimeField(t){return"unknown"===this.dateTimeReferenceFieldIndex?.fieldTimeZone(t)}fieldSourceTimeZone(t){return this.dateTimeReferenceFieldIndex?.fieldTimeZone(t)??""}get layerPreferredTimeZone(){return this.dateTimeReferenceFieldIndex?.layerPreferredTimeZone??""}field(t){if(this.hasField(t))return this.autocastArcadeDate(t,this.readAttribute(t,!0));for(const s of this._joined)if(s.setIndex(this.getIndex()),s.hasField(t)){const e=s._readAttribute(t,!0);return this.autocastArcadeDate(t,e)}throw new Error(`Field ${t} does not exist`)}setField(t,s){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map((t=>t.name))}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const s=this.readLegacyFeature();if(!s)return JSON.stringify(null);const e={geometry:s.geometry,attributes:{...s.attributes??{}}};for(const t in e.attributes){const s=e.attributes[t];s instanceof Date&&(e.attributes[t]=s.getTime())}return JSON.stringify(e)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:!0===t?.keepGeometryType?this.geometry():this.geometry()?.toJSON()??null}}castAsJsonAsync(t=null,s=null){return Promise.resolve(this.castAsJson(s))}removeIds(t){if(null==this._objectIdToIndex){const t=new Map,s=this.getCursor();for(;s.next();){const e=l(s.getObjectId());t.set(e,s.getIndex())}this._objectIdToIndex=t}const s=this._objectIdToIndex;for(const e of t)s.has(e)&&this.removeAtIndex(s.get(e))}removeAtIndex(t){null==this._deleted&&(this._deleted=J.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return null==this._deleted||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const s=this.getQuantizationTransform()??null;return F(new h,t,this.hasM,this.hasZ,s)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}function it({coords:t,lengths:s}){let e=0;for(const i of s){for(let s=1;s<i;s++)t[2*(e+s)]+=t[2*(e+s)-2],t[2*(e+s)+1]+=t[2*(e+s)-1];e+=i}}class rt extends et{static fromFeatures(t,e){const{objectIdField:i,geometryType:r}=e,n=s([],t,r,!1,!1,i);for(let s=0;s<n.length;s++)n[s].displayId=t[s].displayId;return rt.fromOptimizedFeatures(n,e)}static fromFeatureSet(t,s){const i=e(t,s.objectIdField);return rt.fromOptimizedFeatureSet(i,s)}static fromOptimizedFeatureSet(t,s){const{features:e}=t,i=rt.fromOptimizedFeatures(e,s);return i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform,i._fieldsIndex=new c(s.fields),i}static fromOptimizedFeatures(t,s,e){const i=et.createInstance(),r=new rt(i,t,s);return r._fieldsIndex=new c(s.fields),r._transform=e,r}constructor(t,s,e){super(t,e),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=e?.geometryType,this._features=s}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const s=new Set(t);this._features=this._features.filter((t=>!(null!=t.objectId&&s.has(t.objectId))))}append(t){for(const s of t)this._features.push(s)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const s in this._current.attributes)t+=this._current.attributes[s];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new rt(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return i(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const s=this.readUnquantizedGeometry();return t(s,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return null==t?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return o(this._current)?r(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const s=t.clone();return it(s),s}readHydratedGeometry(){const t=this._current.geometry;if(null==t)return null;const s=t.clone();return null!=this._transform&&n(s,s,this.hasZ,this.hasM,this._transform),s}getXHydrated(){if(!o(this._current))return 0;const t=this._current.geometry.coords[0],s=this.getQuantizationTransform();return null==s?t:t*s.scale[0]+s.translate[0]}getYHydrated(){if(!o(this._current))return 0;const t=this._current.geometry.coords[1],s=this.getQuantizationTransform();return null==s?t:s.translate[1]-t*s.scale[1]}getX(){return o(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return o(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!o(this._current)){if(null!=this._current.centroid){const[t,s]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(t,s)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let s=0;for(const e of t.lengths)t.coords[2*s]=t.coords[2*s]*this._sx+this._tx,t.coords[2*s+1]=t.coords[2*s+1]*this._sy+this._ty,s+=e;return t}readCentroid(){return o(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,s){const e=this._fieldsIndex.get(t);if(!e)return;let i=this._current.attributes[e.name];return null==i?i:("esriFieldTypeTimestampOffset"===this.fields.get(t)?.type&&(i=this.parseTimestampOffset(i)),s&&this.fields.isDateField(t)?new Date(i):i)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}const nt=f.getLogger("esri.views.layers.2d.features.support.AttributeStore"),ht=k(G,nt),ot={sharedArrayBuffer:u("esri-shared-array-buffer"),atomics:u("esri-atomics")};function ut(t,s){return e=>s(t(e))}class at{constructor(t,s,e,i){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:r,layout:n,textureOnly:h}=i;this.textureOnly=h||!1,this.pixelType=r,this._ctype=s,this.layout=n,this._resetRange(),this._shared=t,this.size=e,h||(this.data=this._initData(r,e,t,s))}get buffer(){return w(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,s){const e=this.data;for(let i=0;i<this.size*this.size;i++)e[i*this.texelSize+t]&=~s;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,s){const e=this.data;for(let i=0;i<this.size*this.size;i++)e[i*this.texelSize+t]|=255&s;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,s,e){const i=this.data;for(const r of e)i[r*this.texelSize+t]|=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,s,e){this.data[e*this.texelSize+t]|=s,this.dirtyStart=Math.min(this.dirtyStart,e),this.dirtyEnd=Math.max(this.dirtyEnd,e)}unsetComponentTexel(t,s,e){this.data[e*this.texelSize+t]&=~s,this.dirtyStart=Math.min(this.dirtyStart,e),this.dirtyEnd=Math.max(this.dirtyEnd,e)}getData(t,s){const e=U(t);return this.data[e*this.texelSize+s]}setData(t,s,e){const i=U(t),r=1<<s;0!=(this.layout&r)?null!=this.data&&(this.data[i*this.texelSize+s]=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):nt.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===$.UNSIGNED_BYTE&&this._shared&&ot.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===$.UNSIGNED_BYTE&&this._shared&&ot.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const s=this._initData(this.pixelType,t,this._shared,this._ctype),e=this.data;s.set(e),this.data=s}}toMessage(){const t=this.dirtyStart,s=this.dirtyEnd,e=this.texelSize;if(t>s)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,h=this.data;return{start:t,end:s,data:i&&h.slice(t*e,(s+1)*e)||null,pixelType:r,layout:n}}_initData(t,s,e,i){const r=e&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=H(t),h=new n(new r(s*s*4*n.BYTES_PER_ELEMENT));for(let t=0;t<h.length;t+=4)h[t+1]=255;return h}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class lt{constructor(t,s){this._client=t,this.config=s,this.updatingHandles=new d,this._blocks=new Array,this._filters=new Array(T),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const e=s.supportsTextureFloat?$.FLOAT:$.UNSIGNED_BYTE;ht(`Creating AttributeStore ${ot.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:$.UNSIGNED_BYTE,layout:1},{pixelType:$.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:$.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:e,layout:15},{pixelType:e,layout:15},{pixelType:e,layout:15},{pixelType:e,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return u("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${t}\n  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})\n  -> nextUpdate: ${!!this._nextUpdate}\n`),t}update(t,s){this.config=s;const e=s.schema.processors[0].storage,i=p(this._schema,e);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),i&&(u("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=e,this._attributeComputeInfo=null,null!=e)){switch(e.target){case"feature":this._targetType=N;break;case"aggregate":this._targetType=v}if("subtype"===e.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:e.subtypeField,map:new Map};for(const t in e.mapping){const s=e.mapping[t];if(null!=s&&null!=s.vvMapping)for(const e of s.vvMapping)this._bindAttribute(e,parseInt(t,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},null!=e.vvMapping)for(const t of e.vvMapping)this._bindAttribute(t);if(null!=e.attributeMapping)for(const t of e.attributeMapping)this._bindAttribute(t)}}}onTileData(t,s){if(null==s.addOrUpdate)return;const e=s.addOrUpdate.getCursor();for(;e.next();){const t=e.getDisplayId();this.setAttributeData(t,e)}}async setHighlight(t,s){const e=1,i=this._getBlock(0),r=s.map((t=>U(t)));i.lock(),i.unsetComponentAllTexels(0,e),i.setComponent(0,e,r),i.unlock(),this._idsToHighlight.clear();for(const s of t)this._idsToHighlight.add(s);await this.sendUpdates()}async updateFilters(t,s,e){u("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:i,spatialReference:r}=e,{filters:n}=s,h=n.map(((t,s)=>this._updateFilter(t,s,i,r))),o=(await Promise.all(h)).some((t=>t));u("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),o&&(t.storage.filters=!0,u("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,s,e,i){const r=U(t);this._ensureSizeForTexel(r),this._getBlock(s).setData(t,e,i)}getData(t,s,e){return this._getBlock(s).getData(t,e)}getHighlightFlag(t){return this._idsToHighlight.has(t)?M:0}unsetAttributeData(t){const s=U(t);this._getBlock(0).setData(s,0,0)}setAttributeData(t,s){const e=U(t);if(this._ensureSizeForTexel(e),this._getBlock(0).setData(e,0,this.getFilterFlags(s)),this._targetType!==O(t))return;const i=this._attributeComputeInfo,r=this.config.supportsTextureFloat?1:2,n=4;let h=null;i&&(h=i.isSubtype?i.map.get(s.readAttribute(i.subtypeField)):i.map,h&&h.size&&h.forEach(((t,i)=>{const h=i*r%n,o=Math.floor(i*r/n),u=this._getBlock(o+C),a=t(s);if(this.config.supportsTextureFloat)u.setData(e,h,a);else if(a===_)u.setData(e,h,255),u.setData(e,h+1,255);else{const t=A(Math.round(a),-32767,32766)+32768,s=255&t,i=(65280&t)>>8;u.setData(e,h,s),u.setData(e,h+1,i)}})))}sendUpdates(){if(u("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=m(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>null!=t?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const s=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}else u("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};u("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const e=this.updatingHandles.addPromise(this._client.update(t,this._signal).then(s).catch(s));return this._client.render(this._signal),e})).catch((t=>{if(g(t))return this._createResourcesPromise=null,this._createResources();nt.error(new y("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,s){function e(){const{normalizationField:s}=t;return s?e=>{const i=e.readAttribute(s);if(!i)return null;return e.readAttribute(t.field)/i}:s=>s.readAttribute(t.field)}function i(){return t.normalizationField&&nt.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),s=>s.getComputedNumericAtIndex(t.fieldIndex)}let r;if(null!=t.fieldIndex)r=i();else{if(!t.field)return;r=e()}const{valueRepresentation:n}=t;if(n){r=ut(r,(t=>E(t,n)))}const h=t=>null===t||isNaN(t)||t===1/0||t===-1/0?_:t,o=this._attributeComputeInfo;if(o.isSubtype){const e=o.map.get(s)??new Map;e.set(t.binding,ut(r,h)),o.map.set(s,e)}else o.map.set(t.binding,ut(r,h))}_createResources(){if(null!=this._createResourcesPromise)return this._createResourcesPromise;this._getBlock(D),this._getBlock(z),ht("Initializing AttributeStore");const t={shared:ot.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:b(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},s=this._client.initialize(t,this._signal).catch((t=>{g(t)?this._createResourcesPromise=null:nt.error(new y("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=s,s.then((()=>null==this._createResourcesPromise?this._createResources():void 0)),s}_getBlock(t){const s=this._blocks[t];if(null!=s)return s;ht(`Initializing AttributeBlock at index ${t}`);const e=ot.sharedArrayBuffer,i=this._client.type,r=new at(e,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return ht("Expanding block size to",t,this._blocks),x(this._blocks,(s=>s.expand(t))),this._createResourcesPromise=null,this._size=t,0}return nt.error(new y("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,s,e,i){const r=this._filters[s],n=null!=r&&r.hash;if(!r&&!t)return!1;if(n===JSON.stringify(t))return!1;if(null==t){if(!r)return!1;const t=1<<s+1,e=this._getBlock(0);return this._filters[s]=null,e.setComponentAllTexels(0,t),this.sendUpdates(),!0}const h=await this._getFilter(s,e);return await h.update(t,i),!0}async _getFilter(t,s){const e=this._filters[t];if(null!=e)return e;const{default:i}=await import("./p-32ac702a.js"),r=new i({geometryType:s.geometryType,hasM:!1,hasZ:!1,timeInfo:s.timeInfo,fieldsIndex:new c(s.fields)});return this._filters[t]=r,r}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let s=0;const e=j(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const r=!!(e&1<<i),n=this._filters[i];s|=(!r||null==n||n.check(t)?1:0)<<i}let i=0;if(this._idsToHighlight.size){const s=t.getObjectId();i=this.getHighlightFlag(s)}return s<<1|i}}class ct{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return B(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function ft(t,s,e){if(!(t.length>s))for(;t.length<=s;)t.push(e)}class dt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new ct,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(J.create(this._allocatedSize,R)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,s){this._numerics[t]||(this._numerics[t]=[]);ft(this._numerics[t],s,0)}_ensureInstanceId(t){ft(this._instanceIds,t,0)}_ensureString(t,s){this._strings[t]||(this._strings[t]=[]);ft(this._strings[t],s,null)}createDisplayId(t=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),B(s,t)}releaseDisplayId(t){for(const s of this._bitsets)s.unset(t);return this._idGenerator.releaseId(t&R)}getComputedNumeric(t,s){return this.getComputedNumericAtIndex(t&R,0)}setComputedNumeric(t,s,e){return this.setComputedNumericAtIndex(t&R,e,0)}getComputedString(t,s){return this.getComputedStringAtIndex(t&R,0)}setComputedString(t,s,e){return this.setComputedStringAtIndex(t&R,0,e)}getComputedNumericAtIndex(t,s){const e=t&R;return this._ensureNumeric(s,e),this._numerics[s][e]}setComputedNumericAtIndex(t,s,e){const i=t&R;this._ensureNumeric(s,i),this._numerics[s][i]=e}getInstanceId(t){const s=t&R;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(t,s){const e=t&R;this._ensureInstanceId(e),this._instanceIds[e]=s}getComputedStringAtIndex(t,s){const e=t&R;return this._ensureString(s,e),this._strings[s][e]}setComputedStringAtIndex(t,s,e){const i=t&R;this._ensureString(s,i),this._strings[s][i]=e}getXMin(t){return this._bounds[4*(t&R)]}getYMin(t){return this._bounds[4*(t&R)+1]}getXMax(t){return this._bounds[4*(t&R)+2]}getYMax(t){return this._bounds[4*(t&R)+3]}setBounds(t,s){const e=s.readHydratedGeometry();if(!e||!e.coords.length)return!1;let i=1/0,r=1/0,n=-1/0,h=-1/0;e.forEachVertex(((t,s)=>{i=Math.min(i,t),r=Math.min(r,s),n=Math.max(n,t),h=Math.max(h,s)}));const o=t&R;return ft(this._bounds,4*o+4,0),this._bounds[4*o]=i,this._bounds[4*o+1]=r,this._bounds[4*o+2]=n,this._bounds[4*o+3]=h,!0}}export{lt as B,et as I,rt as h,dt as r,J as t};
//# sourceMappingURL=p-0357efed.js.map
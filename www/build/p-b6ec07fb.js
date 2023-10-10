import{s as t,n as e,o as s}from"./p-faf4e331.js";import{s as i,i as r}from"./p-52a9dec5.js";import{e as n}from"./p-07f12c16.js";import{c as o,h as l,S as a,E as u,F as h,G as c,H as f,I as d,J as p,a3 as y,a4 as m,R as g,Q as b,a5 as w}from"./p-570a8a46.js";import{r as x}from"./p-b3dc802f.js";import{b as v,h as F,s as T,fg as S,f8 as I,bX as V,gv as z,R as E,gw as M,gx as A,gy as k,fe as C,aB as B,as as j,ff as D}from"./p-b54724b6.js";import{L as R,S as U,V as O,W as $,K as _}from"./p-29040467.js";import{d as K}from"./p-0fe6a545.js";import{d as L,a as q,l as H,f as G}from"./p-db174923.js";import{createSymbolSchema as P}from"./p-8eafbd05.js";import"./p-399020b7.js";import"./p-5b0b1d68.js";import"./p-74887bd8.js";import"./p-2d1dac84.js";import{n as N}from"./p-a379c2ce.js";import{e as W}from"./p-015ba93b.js";import{D as J,L as Z,U as Q}from"./p-13e550f5.js";import{x as X}from"./p-1fd43aa6.js";import{T as Y,b as tt}from"./p-49f0006c.js";class et{constructor(t){if(this.next=null,!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new et([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){return t(this.data)?this:this.next?.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next?.remove(t,this)??null}get last(){return this.next?this.next.last:this}}class st{constructor(t){this._head=null,null!=t&&(this._head=new et(t))}get head(){return this._head}maxAvailableSpace(){if(null==this._head)return 0;const t=this._head.max((t=>t.end-t.start));return t.data.end-t.data.start}firstFit(t){if(null==this._head)return null;let e=null,s=this._head;for(;s;){const i=s.data.end-s.data.start;if(i===t)return e?e.next=s.next:this._head=s.next,s.data.start;if(i>t){const e=s.data.start;return s.data.start+=t,e}e=s,s=s.next}return null}free(t,e){const s=t+e;if(null==this._head){const e=new et({start:t,end:s});return void(this._head=e)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=e);const i=new et({start:t,end:s});return i.next=this._head,void(this._head=i)}let i=this._head,r=i.next;for(;r;){if(r.data.start>=s){if(i.data.end===t){if(i.data.end+=e,i.data.end===r.data.start){const t=r.data.end-r.data.start;return i.data.end+=t,void(i.next=r.next)}return}if(r.data.start===s)return void(r.data.start-=e);const n=new et({start:t,end:s});return n.next=i.next,void(i.next=n)}i=r,r=r.next}if(t===i.data.end)return void(i.data.end+=e);const n=new et({start:t,end:s});i.next=n}}class it{acquire(t){return{refCount:1,version:-1,labelMat2d:e(),tileMat3:n(),dvs:n()}}release(t){}}class rt extends x{constructor(t,e,s,i){super(t,e,s,i,o,o)}destroy(){super.destroy(),this._transforms&&rt.TransformCache.release(this.key.hash)}setTransform(n){const o=this.resolution/n.resolution,l=this.transforms.tileMat3,[a,u]=n.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*o,c=this.height/this.rangeY*o;i(l,h,0,0,0,c,0,a,u,1),r(this.transforms.dvs,n.displayViewMat3,l);const f=this.transforms.labelMat2d,d=window.devicePixelRatio,p=t(e(),h*d,0,0,c*d,a*d,u*d);s(f,n.viewMat2d,p)}_createTransforms(){return rt.TransformCache.acquire(this.key.hash)}}rt.TransformCache=new it;class nt{constructor(t,e,s,i,r){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=i,this.indexCount=r}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class ot{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,s,i){const r=new ot(t,e);if(null!=i)for(const t of i)s.seekIndex(t),r.addRecord(s);else for(;s.next();)r.addRecord(s);return r}addRecord(t){const e=this._target,s=this.geometryType,i=t.materialKey;let r=t.indexFrom,n=t.indexCount;const o=t.vertexFrom,l=t.vertexCount;if(n||(r=o,n=l),null==this._head){const t=new nt(e,s,i,r,n);return void(this._head=new et(t))}let a=null,u=this._head;for(;u;){if(r<u.data.indexFrom)return this._insert(i,r,n,a,u);a=u,u=u.next}this._insert(i,r,n,a,null)}forEach(t){null!=this._head&&this._head.forEach(t)}*infos(){if(null!=this._head)for(const t of this._head.values())yield t}_insert(t,e,s,i,r){if(null==i&&null==r){const i=new nt(this._target,this.geometryType,t,e,s);this._head=new et(i)}return null==i&&null!=r?this._insertAtHead(t,e,s,r):null!=i&&null==r?this._insertAtEnd(t,e,s,i):null!=i&&null!=r?this._insertAtMiddle(t,e,s,i,r):void 0}_insertAtHead(t,e,s,i){const r=e+s;if(t===i.data.materialKey&&r===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const r=new nt(this._target,this.geometryType,t,e,s);this._head=new et(r),this._head.next=i}}_insertAtEnd(t,e,s,i){if(i.data.materialKey===t&&i.data.indexEnd===e)i.data.indexCount+=s;else{const r=new nt(this._target,this.geometryType,t,e,s),n=new et(r);i.next=n}}_insertAtMiddle(t,e,s,i,r){const n=e+s;if(i.data.materialKey===t&&i.data.indexEnd===e)i.data.indexCount+=s,i.data.materialKey===r.data.materialKey&&i.data.indexEnd===r.data.indexFrom&&(i.data.indexCount+=r.data.indexCount,i.next=r.next);else if(t===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const n=new nt(this._target,this.geometryType,t,e,s),o=new et(n);i.next=o,o.next=r}}}const lt=2147483647;class at{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/ut.BYTES_PER_RECORD-e){const i=new ut(new Int32Array(t,e*ut.BYTES_PER_RECORD,s*ut.ELEMENTS_PER_RECORD));return new at(i)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}getDrawInfo(t,e){return new nt(t,e,this.materialKey,this.indexFrom,this.indexCount)}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){const t=new at(this._head?.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(null!=s&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link}return!1}}at.ELEMENTS_PER_RECORD=l,at.BYTES_PER_RECORD=at.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class ut{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new ut(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=lt,++this._deletedCount;this.next()&&this.id===t;)this.id=lt,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(null==this._offsets.instance){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1;const e=this._index;return this._index=this._offsets.instance.get(t),this.id!==lt||(this._index=e,!1)}get id(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*ut.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*ut.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*ut.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/ut.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===lt;);return this._index<this.size()}peekId(){const t=(this._index+1)*ut.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new ut(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}ut.ELEMENTS_PER_RECORD=l,ut.BYTES_PER_RECORD=ut.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;function ht(t){if(!t)return R.NONE;let e=0;for(const s of t)if("size"===s.type){const t=L(s);e|=t,"outline"===s.target&&(e|=t<<4)}else"color"===s.type?e|=R.COLOR:"opacity"===s.type?e|=R.OPACITY:"rotation"===s.type&&(e|=R.ROTATION);return e}function ct(t,e){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const s=t.getVisualVariablesForType("size");if(!s[0])return 0;const i=s[0];if(e&&"cluster_count"===i.field&&"cluster"===e.type)return e.clusterMaxSize;if("outline"===i.target)return 0;if("stops"===i.transformationType)return i.stops.map((t=>t.size)).reduce(ft,0);if("clamped-linear"===i.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((t=>t.size)).reduce(ft,0),e="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((t=>t.size)).reduce(ft,0),Math.max(t,e)}return"real-world-size"===i.transformationType?30:void 0}function ft(t,e){return Math.max(t,e)}const dt=8,pt=dt-2,yt=v.getLogger("esri.views.2d.layers.features.support.rendererUtils"),mt=t=>{if(!("visualVariables"in t)||!t.visualVariables||!t.visualVariables.length)return t;const e=t.clone(),s=e.visualVariables.map((t=>bt(t)?wt(t):t));return e.visualVariables=s,e};function gt(t){return t.map((t=>bt(t)?wt(t.clone()):t))}function bt(t){return("size"===t.type||"color"===t.type||"opacity"===t.type)&&null!=t.stops}function wt(t){return t.stops=Tt(t.type,t.stops??[]),t}function xt(t,e,s){return(1-s)*t+s*e}function vt(t,e){const[s,...i]=e,r=i.pop(),n=i[0].value,o=i[i.length-1].value,l=(o-n)/pt,a=[];for(let s=n;s<o;s+=l){let r=0;for(;s>=i[r].value;)r++;const n=i[r],o=e[r-1],l=s-o.value,u=n.value===o.value?1:l/(n.value-o.value);if("color"===t){const t=i[r],n=e[r-1],o=t.color.clone();o.r=xt(n.color.r,o.r,u),o.g=xt(n.color.g,o.g,u),o.b=xt(n.color.b,o.b,u),o.a=xt(n.color.a,o.a,u),a.push({value:s,color:o,label:t.label})}else if("size"===t){const t=i[r],n=e[r-1],o=S(t.size),l=xt(S(n.size),o,u);a.push({value:s,size:l,label:t.label})}else{const t=i[r],n=xt(e[r-1].opacity,t.opacity,u);a.push({value:s,opacity:n,label:t.label})}}return[s,...a,r]}function Ft(t){const[e,...s]=t,i=s.pop();for(;s.length>pt;){let t=0,e=0;for(let i=1;i<s.length;i++){const r=s[i-1],n=s[i],o=Math.abs(n.value-r.value);o>e&&(e=o,t=i)}s.splice(t,1)}return[e,...s,i]}function Tt(t,e){return e.length<=dt?e:(yt.warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${dt}. Displayed stops will be simplified.`),e.length>2*dt?vt(t,e):Ft(e))}function St(){if(F("heatmap-force-raster"))return"raster";const{supportsTextureFloat:t,supportsTextureHalfFloat:e,supportsColorBufferFloat:s,supportsColorBufferFloatBlend:i,supportsColorBufferHalfFloat:r}=N("2d");return t&&s&&i||e&&r?"symbol":F("heatmap-allow-raster-fallback")?"raster":"none"}function It(t){if(!t)return!0;switch(t.type){case"dot-density":if(!N("2d").supportsTextureFloat)return yt.error(new T("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const t=St();if("none"===t||"raster"===t&&!F("heatmap-force-raster")){const e=N("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((t=>!e[t])).join(", ");if("none"===t)return yt.errorOnce(new T("webgl-missing-extension",`Missing WebGL${e.type} requirements for Heatmap: ${s}`)),!1;"raster"===t&&yt.warnOnce(`Missing WebGL${e.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const Vt=v.getLogger("esri.views.2d.layers.features.schemaUtils"),zt="ValidationError";function Et(t){return t}function Mt(t,e){let s=0,i=0,r=U.DEFAULT;if(null!=t){if(i=ct(t,e),"visualVariables"in t&&(s=ht(t.visualVariables||[]),"dot-density"===t.type&&(r=U.DOT_DENSITY)),"heatmap"===t.type&&(r=U.HEATMAP),"dictionary"===t.type)return{maxVVSize:i,vvFlags:s,symbologyType:U.DEFAULT};if("pie-chart"===t.type)return{maxVVSize:i,vvFlags:s,symbologyType:U.PIE_CHART};if(r!==U.DOT_DENSITY&&r!==U.HEATMAP){const e=t.getSymbols();"backgroundFillSymbol"in t&&t.backgroundFillSymbol&&e.push(t.backgroundFillSymbol);let s=!0,i=!0;for(const t of e)if("cim"!==t.type&&"web-style"!==t.type||(i=!1),"simple-fill"===t.type||"picture-fill"===t.type){const e=t.outline,r=e&&"none"!==e.style&&"solid"!==e.style,n="simple-fill"===t.type&&"none"!==t.style&&"solid"!==t.style;r&&(s=!1),("picture-fill"===t.type||n||r)&&(i=!1)}s?r=i?U.OUTLINE_FILL_SIMPLE:U.OUTLINE_FILL:i&&(r=U.SIMPLE)}}return{vvFlags:s,maxVVSize:i,symbologyType:r}}let At=null;function kt(t){if(F("esri-2d-update-debug")){const e=Ct(t,!0);console.debug("Created new schema",e),console.debug("Schema diff",I(At,e)),At=e}return Ct(t)}function Ct(t,e=!1){try{const s=Lt(t,e),i=Pt(t),r={};s.map((e=>Bt(r,t,e)));const n=null!=t.subtypeCode?`${t.subtypeField} = ${t.subtypeCode}`:null,o=M(t.definitionExpression,n);return{source:{definitionExpression:o,fields:t.fields.map((t=>t.toJSON())),gdbVersion:t.gdbVersion,historicMoment:t.historicMoment?.getTime(),outFields:t.availableFields,pixelBuffer:t.pixelBuffer,spatialReference:t.spatialReference.toJSON(),timeExtent:t.timeExtent?.toJSON(),customParameters:t.customParameters},attributes:{fields:{},indexCount:0},processors:s,tileRenderer:i,targets:r}}catch(t){if(t.fieldName===zt)return Vt.error(t),null;throw t}}function Bt(t,e,s){switch(s.target){case"feature":return void Rt(t,Dt(e),s);case"aggregate":{if(!("featureReduction"in e))return;const i=e.featureReduction;switch(i?.type){case"selection":throw new T(zt,"Mapview does not support `selection` reduction type",i);case"binning":return Rt(t,Dt(e),s),void Ot(t,i,e.fields.map((t=>t.toJSON())),s);case"cluster":return Rt(t,Dt(e),s),void $t(t,i,e.fields.map((t=>t.toJSON())),s)}}}}function jt(t,e){for(const s in e){const i=e[s];if(i.target!==t.name)continue;const r=t.attributes[s];if(r?.context){const t=r.context;t.mesh=t.mesh||i.context?.mesh,t.storage=t.storage||i.context?.storage}else t.attributes[s]=i}return t}function Dt(t){return[t.filter?.toJSON()??null,t.featureEffect?.filter?.toJSON()??null]}function Rt(t,e,s){return t.feature||(t.feature={name:"feature",input:"source",filters:e,attributes:{}}),jt(t.feature,s.attributes.fields),t}function Ut(t,e){const{onStatisticExpression:s,onStatisticField:i,statisticType:r}=t;switch(r){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(s){const{returnType:e}=s;return e?"string"===e?"esriFieldTypeString":"esriFieldTypeDouble":(Vt.error(new T(zt,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",t)),"esriFieldTypeString")}const r=e.find((t=>t.name===i));return r?r.type:(Vt.error(new T(zt,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",t)),"esriFieldTypeString")}}}function Ot(t,e,s,i){return t.aggregate||(t.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:e.fixedBinLevel,fields:(e.fields??[]).map((t=>({...t.toJSON(),type:Ut(t,s)})))},attributes:{}}),jt(t.aggregate,i.attributes.fields),t}function $t(t,e,s,i){const r=i.aggregateFields??[],n=new Set;for(const t of r)n.add(t.name);for(const t of e?.fields??[])n.has(t.name)||r.push(t);return t.aggregate||(t.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:V(e.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(V(e.clusterMaxSize)/64),fields:r.map((t=>({...t.toJSON(),type:Ut(t,s)})))}}),jt(t.aggregate,i.attributes.fields),t}function _t(t,e){return e.field?Kt(t,{...e,type:"field",field:e.field}):e.valueExpression?Kt(t,{...e,type:"expression",valueExpression:e.valueExpression}):{field:void 0,fieldIndex:void 0}}function Kt(t,e){switch(e.type){case"expression":{const s=Et(e.valueExpression);if(!t.fields[s]){const i=t.indexCount++;t.fields[s]={...e,name:s,fieldIndex:i}}return{fieldIndex:t.fields[s].fieldIndex}}case"label-expression":{const s=Et(JSON.stringify(e.label));if(!t.fields[s]){const i=t.indexCount++;t.fields[s]={...e,name:s,fieldIndex:i}}return{fieldIndex:t.fields[s].fieldIndex}}case"field":{const s=e.field;return"aggregate"===e.target&&t.fields[s]||(t.fields[s]={...e,name:s}),{field:s}}case"statistic":return t.fields[e.name]={...e},{field:e.name}}}function Lt(t,e=!1){const s=new Array;let i=0;return s.push(Gt(t,i++,e)),s}function qt(t,e,s,i,r,n=!1){const o=Kt(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:e.labelExpression,labelExpressionInfo:e.labelExpressionInfo?{expression:e.labelExpressionInfo.expression}:null,symbol:!!e.symbol,where:e.where}}),{fieldIndex:l}=o;return{...P(e,r,n),fieldIndex:l,target:s,index:i}}function Ht(t,e,s){const i="featureReduction"in e&&e.featureReduction;if(!i)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const r="aggregate",n=[];let o=null,l=W(e.geometryType),a=[],u=null;if(i)switch(i.type){case"selection":return Vt.error(new T(zt,"Mapview does not support `selection` reduction type",i)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...i.fields??[]),"cluster"===i.type?l="esriGeometryPoint":"binning"===i.type&&(l="esriGeometryPolygon"),i.renderer&&!i.renderer.authoringInfo?.isAutoGenerated){if("cluster"===i.type){const{renderer:t}=A(i.renderer,i,null);u=t}else u=i.renderer;const e=Mt(i.renderer,i);o=Xt(t,r,i.renderer,e,s),a=i&&i.labelsVisible&&i.labelingInfo||[]}else if("cluster"===i.type){if(u=k(n,e.renderer,i,null,!0),i.symbol){const t=Mt(u,i);o={type:"simple",symbol:P(i.symbol,t,s),symbologyType:t.symbologyType}}a=i&&i.labelsVisible&&i.labelingInfo||[]}}Wt(t,n);return{labels:z(a,"binning"===i.type?"esriGeometryPolygon":l),matcher:o,fields:n,rendererOverride:u}}function Gt(t,e,s=!1){const i={indexCount:0,fields:{}},r="featureReduction"in t?t.featureReduction??void 0:void 0,n=r?"aggregate":"feature";if("sublayers"in t){const e={type:"subtype",subtypeField:t.subtypeField,renderers:{},symbologyType:U.DEFAULT},r={type:"subtype",mapping:{},target:"feature",subtypeField:t.subtypeField},o={type:"subtype",classes:{}},l={type:"symbol",target:"feature",aggregateFields:[],attributes:i,storage:r,mesh:{matcher:e,aggregateMatcher:null,labels:o,sortKey:null}},a=new Set;let u=0;for(const{renderer:l,subtypeCode:h,labelingInfo:c,labelsVisible:f}of t.sublayers){let t=0;"visualVariables"in l&&l.visualVariables&&(l.visualVariables.some((t=>"rotation"!==t.type))&&Vt.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),t=ht(l.visualVariables.filter((t=>"size"!==t.type))));const d={symbologyType:U.DEFAULT,vvFlags:t,maxVVSize:0},p=Xt(i,n,l,d,s),y=Jt(i,n,l),m=f&&c;if("dictionary"===p.type)throw new T(zt,"Dictionary renderer is not supported in subtype layers");if("subtype"===p.type)throw new T(zt,"Nested subtype renderers is not supported");if(null!=y&&"subtype"===y.type)throw new T(zt,"Nested subtype storage is not supported");if(null!=y&&null!=y.attributeMapping)throw new T(zt,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===p.type)throw new T(zt,"Heatmaps are not supported in subtype layers");if("pie-chart"===p.type)throw new T(zt,"Pie-charts are not supported in subtype layers");if(a.has(h))throw new T(zt,"Subtype codes for sublayers must be unique");a.add(h),e.renderers[h]=p,r.mapping[h]=y,m&&(o.classes[h]=m.map((t=>qt(i,t,"feature",u++,d,s))))}return l}if("heatmap"===t.renderer?.type&&"raster"===St()){const{radius:e,fieldOffset:s,field:r}=t.renderer;return{type:"heatmap",aggregateFields:[],attributes:i,target:n,storage:null,mesh:{radius:e,fieldOffset:s,field:_t(i,{target:n,field:r,resultType:"numeric"}).field}}}const o=Ht(i,t,s),l=W(t.geometryType),a=o.rendererOverride??t.renderer,u=Mt(a,r),h=Xt(i,n,a,u,s),c=Jt(i,n,a),f=Nt(i,t.orderBy,t.renderer,r),d=t.labelsVisible&&t.labelingInfo||[],p=z(d,l);let y=0;const m=[...p.map((t=>qt(i,t,"feature",y++,u,s))),...o.labels.map((t=>qt(i,t,"aggregate",y++,u,s)))];return{type:"symbol",target:n,attributes:i,aggregateFields:o.fields,storage:c,mesh:{matcher:h,labels:{type:"simple",classes:m},aggregateMatcher:o.matcher,sortKey:f}}}function Pt(t){return"heatmap"===t.renderer?.type&&"raster"===St()?{type:"heatmap"}:{type:"symbol"}}function Nt(t,e,s,i){if(null!=i)return null;if(null!=e&&e.length){e.length>1&&Vt.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${e.length}. All but the first will be discarded`);const s=e[0],i="ascending"===s.order?"asc":"desc";if(s.field)return{field:s.field,order:i};if(s.valueExpression){return{fieldIndex:Kt(t,{type:"expression",target:"feature",valueExpression:s.valueExpression,resultType:"numeric"}).fieldIndex,order:i}}return Vt.error(new T(zt,"Expected to find a field or valueExpression for OrderByInfo",s)),null}if(null!=s&&"unique-value"===s.type&&s.orderByClassesEnabled){return{byRenderer:!0,order:"asc"}}return null}function Wt(t,e){const s={mesh:!0,storage:!0};for(const i of e){const{name:e,onStatisticField:r,onStatisticExpression:n,statisticType:o}=i;let l,a;const u="numeric",h="feature";if(n){a=Kt(t,{type:"expression",target:h,valueExpression:n.expression,resultType:u}).fieldIndex}else{l=Kt(t,{type:"field",target:h,field:r,resultType:u}).field}Kt(t,{type:"statistic",target:"aggregate",name:e,context:s,inField:l,inFieldIndex:a,statisticType:o})}}function Jt(t,e,s){let i;switch(s.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":i={visualVariables:!0,attributes:null};break;default:i=K(s).getStorageSpec(s)}return Zt(t,e,i,s)}function Zt(t,e,s,i){if(null==s)return null;const{visualVariables:r,attributes:n}=s;let o=null;r&&"visualVariables"in i&&(o=Qt(t,e,i.visualVariables));const l=null!=o?4:0;let a=null;return null!=n&&(a=n.map(((s,i)=>{const{field:r,fieldIndex:n}=_t(t,{valueExpression:s.valueExpression,field:s.field,resultType:"numeric",target:e});return{binding:i+l,field:r,fieldIndex:n}}))),{type:"simple",target:e,attributeMapping:a,vvMapping:o}}function Qt(t,e,s){if(!s||!s.length)return[];const i={storage:!0},r="numeric";return gt(s).map((s=>{const n=O(s.type),{field:o,fieldIndex:l}=_t(t,{target:e,valueExpression:s.valueExpression,field:s.field,context:i,resultType:r});switch(s.type){case"size":return"$view.scale"===s.valueExpression?null:{type:"size",binding:n,field:o,fieldIndex:l,normalizationField:_t(t,{target:e,field:s.normalizationField,context:i,resultType:r}).field,valueRepresentation:s.valueRepresentation??null};case"color":return{type:"color",binding:n,field:o,fieldIndex:l,normalizationField:_t(t,{target:e,field:s.normalizationField,context:i,resultType:r}).field};case"opacity":return{type:"opacity",binding:n,field:o,fieldIndex:l,normalizationField:_t(t,{target:e,field:s.normalizationField,context:i,resultType:r}).field};case"rotation":return{type:"rotation",binding:n,field:o,fieldIndex:l}}})).filter(E)}function Xt(t,e,s,i,r=!1){const n=t??{indexCount:0,fields:{}};switch(s.type){case"simple":case"dot-density":return Yt(n,s,i,r);case"class-breaks":return ee(n,e,s,i,r);case"unique-value":return se(n,e,s,i,r);case"dictionary":return ie(n,s,i,r);case"heatmap":return re(n,s,i,r);case"pie-chart":return te(n,s,i,r)}}function Yt(t,e,s,i=!1){const r=e.getSymbols(),n=r.length?r[0]:null;return{type:"simple",symbol:P(n,s,i),symbologyType:s.symbologyType}}function te(t,e,s,i=!1){const r=e.getSymbols(),n=r[0],o=r.length>1?r[1]:null;return{type:"pie-chart",markerSymbol:P(n,s,i),fillSymbol:P(o,s,i),symbologyType:s.symbologyType}}function ee(t,e,s,i,r=!1){const n={mesh:!0,use:"renderer.field"},o=s.backgroundFillSymbol,{field:l,fieldIndex:a}=_t(t,{target:e,field:s.field,valueExpression:s.valueExpression,resultType:"numeric",context:n}),u=s.normalizationType,h="log"===u?"esriNormalizeByLog":"percent-of-total"===u?"esriNormalizeByPercentOfTotal":"field"===u?"esriNormalizeByField":null,c=s.classBreakInfos.map((t=>({symbol:P(t.symbol,i,r),min:t.minValue,max:t.maxValue}))).sort(((t,e)=>t.min-e.min));return{type:"interval",attributes:t.fields,field:l,fieldIndex:a,backgroundFillSymbol:P(o,i,r),defaultSymbol:P(s.defaultSymbol,i,r),intervals:c,normalizationField:s.normalizationField,normalizationTotal:s.normalizationTotal,normalizationType:h,isMaxInclusive:s.isMaxInclusive,symbologyType:i.symbologyType}}function se(t,e,s,i,r=!1){const n=[],o=s.backgroundFillSymbol,l={target:e,context:{mesh:!0},resultType:"string"};if(s.field&&"string"!=typeof s.field)throw new T(zt,"Expected renderer.field to be a string",s);const{field:a,fieldIndex:u}=_t(t,{...l,field:s.field,valueExpression:s.valueExpression});for(const t of s.uniqueValueInfos??[])n.push({value:""+t.value,symbol:P(t.symbol,i,r)});return{type:"map",attributes:t.fields,field:a,fieldIndex:u,field2:_t(t,{...l,field:s.field2}).field,field3:_t(t,{...l,field:s.field3}).field,fieldDelimiter:s.fieldDelimiter??void 0,backgroundFillSymbol:P(o,i),defaultSymbol:P(s.defaultSymbol,i),map:n,symbologyType:i.symbologyType}}function ie(t,e,s,i=!1){return{type:"dictionary",config:e.config,fieldMap:e.fieldMap,scaleExpression:e.scaleExpression,url:e.url,symbolOptions:s,symbologyType:s.symbologyType}}function re(t,e,s,i=!1){const r=e.getSymbols(),n=r.length?r[0]:null;return{type:"heatmap",symbol:P(n,s,i),symbologyType:s.symbologyType}}const ne=v.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),oe=q(H,ne);class le{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:n}=t,o=$(r);this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new o(i)),this._resetRange()}destroy(){B(this._texture,(t=>t.dispose()));for(const t in this._fbos)B(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){const t=new tt;return t.wrapMode=J.CLAMP_TO_EDGE,t.samplingMode=Z.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,s){const i=G(t),r=this.data,n=i*this.texelSize+e;!r||n>=r.length||(r[n]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(null==this.data)return null;const s=G(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new X(t,s)}return this._fbos[e]}get locked(){return!(this.pixelType!==Q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!F("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const i=this.data.buffer,r=this.getTexture(t),n=4,o=(e-e%this.size)/this.size,l=(s-s%this.size)/this.size,a=o,u=this.size,h=l,c=o*this.size*n,f=(u+h*this.size)*n-c,d=$(this.pixelType),p=new d(i,c*d.BYTES_PER_ELEMENT,f),y=this.size,m=h-a+1;if(m>this.size)return void ne.error(new T("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,a,y,m,p)}catch(t){}e()}}update(t){const{data:e,start:s,end:i}=t;if(null!=e&&null!=this.data){const i=this.data,r=s*this.texelSize;for(let s=0;s<e.length;s++){const n=1<<s%this.texelSize;t.layout&n&&(i[r+s]=e[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size;if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=$(this.pixelType);this.destroy(),this.data=new i(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new Y(t,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(t),l=_(r),a=new($(r))(new ArrayBuffer(s*i*l*this.texelSize)),u=t.getBoundFramebufferObject(),{x:h,y:c,width:f,height:d}=t.getViewport();t.bindFramebuffer(o),o.readPixels(0,0,s,i,n,r,a),e.updateData(0,0,0,2*s,i/2,a),t.setViewport(h,c,f,d),t.bindFramebuffer(u)}return this.destroy(),this._texture=e,this._texture}}class ae{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t;if(this.shared=s,this.size=i,oe("Initializing AttributeStoreView",t),null==this._data)this._data=C(e,(t=>new le(t,i,s)));else for(let t=0;t<this._data.length;t++){const r=this._data[t],n=e[t];null!=n&&(null==r?this._data[t]=new le(n,i,s):r.resize(n,i))}this._initialized=!0}destroy(){B(this._data,(t=>C(t,(t=>t.destroy())))),B(this._defaultTexture,(t=>t.dispose()))}isEmpty(){return null==this._data}isUpdating(){const t=null!=this._pendingAttributeUpdate,e=t;return F("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){if(null==this._data)return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,a,0,0)}getData(t,e,s,i){if(!this._data)return 0;const r=this._data[e];if(null==r)return 0;const n=r.getData(t,s);return null!=n?n:i}setData(t,e,s,i){this._data[e].setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void ne.error(new T("mapview-webgl","Tried to update attribute data with a pending update"));const e=j();return oe("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},this._onUpdate(),e.promise}update(){if(this._initialized&&null!=this._pendingAttributeUpdate){F("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,s=this._data;for(let e=0;e<t.blocks.length;e++){const i=t.blocks[e],r=s[e];B(r,(t=>B(i,(s=>{oe(`Updating block ${e}`,s),t.update(s)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){const s=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(s,u),void(e&&(t.bindTexture(s,h),t.bindTexture(s,c),t.bindTexture(s,f),t.bindTexture(s,d),t.bindTexture(s,p),t.bindTexture(s,y)));const i=this._data;this._locked&&!this._forceNextUpload||(D(i,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(i[m]?.getTexture(t)??s,u),e&&(t.bindTexture(i[g]?.getTexture(t)??s,y),t.bindTexture(i[b]?.getTexture(t)??s,h),t.bindTexture(i[a]?.getTexture(t)??s,c),t.bindTexture(i[w]?.getTexture(t)??s,f),t.bindTexture(i[d]?.getTexture(t)??s,d),t.bindTexture(i[p]?.getTexture(t)??s,p))}_getDefaultTexture(t){if(null==this._defaultTexture){const e=new tt;e.wrapMode=J.CLAMP_TO_EDGE,e.samplingMode=Z.NEAREST,e.width=1,e.height=1,this._defaultTexture=new Y(t,e,new Uint8Array(4))}return this._defaultTexture}}export{ae as O,Mt as T,Xt as _,st as a,mt as b,It as h,rt as m,ot as n,at as r,kt as w};
//# sourceMappingURL=p-b6ec07fb.js.map
import{b as t,s,bM as e,k as i,dX as r}from"./p-b54724b6.js";import{z as a,a as n,n as o}from"./p-d8b2b368.js";import{I as h}from"./p-8a366502.js";import"./p-a3f0a5f3.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-8eb5caaf.js";import"./p-c6ce33a2.js";import"./p-a5e3ec2a.js";import"./p-80be55a5.js";import"./p-30bab7e4.js";import"./p-cd4a8b9a.js";import"./p-cae2235f.js";import"./p-9a4094ba.js";import"./p-9f1a0adc.js";import"./p-0357efed.js";import"./p-2f568dc7.js";import"./p-623dbe5e.js";import"./p-570a8a46.js";import"./p-db174923.js";import"./p-29040467.js";import"./p-0e94eaa4.js";import"./p-13e550f5.js";import"./p-795f7c81.js";const p=t.getLogger("esri.views.2d.layers.features.support.whereUtils"),l={getAttribute:(t,s)=>t.field(s)};async function c(t,e){const i=await import("./p-b8ded059.js").then((function(t){return t.W}));try{const r=i.WhereClause.create(t,e);if(!r.isStandardized){const t=new s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);p.error(t)}return t=>{const s=t.readArcadeFeature();return r.testFeature(s,l)}}catch(s){return p.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),t=>!0}}const u=1,m=2;class d{constructor(t){this._geometryBounds=e(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,s)=>{this._idToVisibility.set(s,0)}))}setKnownIds(t){for(const s of t)this._idToVisibility.set(s,u)}setTrue(t){const s=[],e=[],i=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const a=!!(this._idToVisibility.get(r)&u),n=i.has(r);!a&&n?s.push(r):a&&!n&&e.push(r),this._idToVisibility.set(r,n?u|m:0)})),{show:s,hide:e}}createQuery(){const{geometry:t,spatialRel:s,where:e,timeExtent:r,objectIds:a}=this;return i.fromJSON({geometry:t,spatialRel:s,where:e,timeExtent:r,objectIds:a})}async update(t,s){this._hash=JSON.stringify(t);const e=await a(t,null,s);await Promise.all([this._setGeometryFilter(e),this._setIdFilter(e),this._setAttributeFilter(e),this._setTimeFilter(e)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await c(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const s=t.geometry,e=t.spatialRel||"esriSpatialRelIntersects",i=await n(e,s,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);r(this._geometryBounds,s),this._spatialQueryOperator=i,this.geometry=s,this.spatialRel=e}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=o(this._serviceInfo.timeInfo,e.timeExtent,h);else{const i=new s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);t.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(i)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const s=t.readHydratedGeometry();return!!s&&this._spatialQueryOperator(s)}_filterByTime(t){return null==this._timeOperator||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((s,e)=>{s&u||(this._idToVisibility.set(e,u),t.push(e))})),t}}export default d;
//# sourceMappingURL=p-32ac702a.js.map
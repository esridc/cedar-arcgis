import{cj as t,aU as s,u as e,f6 as i}from"./p-b54724b6.js";import{I as n,s as r}from"./p-a3f0a5f3.js";import{t as o}from"./p-8dc3148c.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-ca5fb53c.js";class h{constructor(t,s,e){this.uid=t,this.geometry=s,this.attributes=e,this.visible=!0,this.objectId=null,this.centroid=null}}class a{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function l(t,s){return s}function c(t,s,e,i){switch(e){case 0:return f(t,s+i,0);case 1:return"lowerLeft"===t.originPosition?f(t,s+i,1):d(t,s+i,1)}}function u(t,s,e,i){return 2===e?f(t,s,2):c(t,s,e,i)}function p(t,s,e,i){return 2===e?f(t,s,3):c(t,s,e,i)}function y(t,s,e,i){return 3===e?f(t,s,3):u(t,s,e,i)}function f({translate:t,scale:s},e,i){return t[i]+e*s[i]}function d({translate:t,scale:s},e,i){return t[i]-e*s[i]}class m{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=l,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new a}finishFeatureResult(s){if(this._options.applyTransform&&(s.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!s.hasZ)return;const e=t(s.geometryType,this._options.sourceSpatialReference,s.spatialReference);if(null!=e)for(const t of s.features)e(t.geometry)}createSpatialReference(){return new s}addField(t,s){t.fields.push(e.fromJSON(s));const i=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of i)this[t]=null}}addFeature(t,s){const e=this._options.maxStringAttributeLength??0;if(e>0)for(const t in s.attributes){const i=s.attributes[t];"string"==typeof i&&i.length>e&&(s.attributes[t]="")}t.features.push(s)}addQueryGeometry(t,s){const{queryGeometry:e,queryGeometryType:i}=s,o=n(e.clone(),e,!1,!1,this._transform),h=r(o,i,!1,!1);let a=null;switch(i){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}h.type=a,t.queryGeometryType=i,t.queryGeometry=h}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,s,e)=>this.addCoordinatePoint(t,s,e),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,s,e)=>this._addCoordinatePolygon(t,s,e),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,s,e)=>this._addCoordinatePolyline(t,s,e),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,s,e)=>this._addCoordinateMultipoint(t,s,e),this.createGeometry=t=>this._createMultipointGeometry(t);break}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new h(i(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,s)=>t+s),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,s){0===this._lengths.length&&(this._toAddInCurrentPath=s),this._lengths.push(s)}createPointGeometry(t){const s={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return s.hasZ&&(s.z=0),s.hasM&&(s.m=0),s}addCoordinatePoint(t,s,e){const i=this._transform?this._applyTransform(this._transform,s,e,0):s;if(null!=i)switch(e){case 0:t.x=i;break;case 1:t.y=i;break;case 2:t.hasZ?t.z=i:t.m=i;break;case 3:t.m=i}}_transformPathLikeValue(t,s){let e=0;return s<=1&&(e=this._previousCoordinate[s],this._previousCoordinate[s]+=t),this._transform?this._applyTransform(this._transform,t,s,e):t}_addCoordinatePolyline(t,s,e){this._dehydratedAddPointsCoordinate(t.paths,s,e)}_addCoordinatePolygon(t,s,e){this._dehydratedAddPointsCoordinate(t.rings,s,e)}_addCoordinateMultipoint(t,s,e){0===e&&t.points.push([]);const i=this._transformPathLikeValue(s,e);t.points[t.points.length-1].push(i)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,s,e){0===e&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const i=this._transformPathLikeValue(s,e),n=t[t.length-1],r=this._coordinateBuffer;if(r){if(0===e){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(r.buffer,t,this._vertexDimension))}r[this._coordinateBufferPtr++]=i}}_deriveApplyTransform(t){const{hasZ:s,hasM:e}=t;return s&&e?y:s?u:e?p:c}}class b{_parseFeatureQuery(t){const s=o(t.buffer,new m(t.options)),e={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map((t=>t.toJSON())):void 0};return Promise.resolve(e)}}function w(){return new b}export default w;
//# sourceMappingURL=p-bf42f3b8.js.map
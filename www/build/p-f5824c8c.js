import{di as e,r,bQ as a,V as y}from"./p-b54724b6.js";import{a as t}from"./p-b940e1c6.js";import{selectLayerClassPath as i}from"./p-9fe551f2.js";import"./p-ea3d1c3e.js";import"./p-4d809a12.js";import"./p-a10686d4.js";function L(e){return o(e,"notes")}function n(e){return o(e,"markup")}function c(e){return o(e,"route")}function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}async function S(e,a,y){if(!a)return;const t=[];for(const e of a){const r=m(e,y);"GroupLayer"===e.layerType?t.push(w(r,e,y)):t.push(r)}const i=await r(t);for(const r of i)r.value&&e.add(r.value)}const s={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},l={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},u={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},G={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},d={...p,LinkChartLayer:"LinkChartLayer"},g={...I},T={...G};async function m(e,r){return M(await f(e,r),e,r)}async function M(r,a,y){const t=new r;return t.read(a,y.context),"group"===t.type&&A(a)&&await W(t,a,y.context),await e(t,y.context),t}async function f(e,r){const y=r.context,o=v(y);let S=e.layerType||e.type;!S&&r&&r.defaultLayerType&&(S=r.defaultLayerType);const s=o[S];let l=s?t[s]:t.UnknownLayer;if(b(e)){const r=y?.portal;if(e.itemId){const y=new a({id:e.itemId,portal:r});await y.load();const L=(await i(y)).className||"UnknownLayer";l=t[L]}}else"ArcGISFeatureLayer"===S?L(e)||n(e)?l=t.MapNotesLayer:c(e)?l=t.RouteLayer:A(e)&&(l=t.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?l=t.WMTSLayer:"WFS"===S&&"2.0.0"!==e.wfsInfo?.version&&(l=t.UnsupportedLayer);return l()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||b(e))return!1;return(e.featureCollection?.layers?.length??0)>1}function b(e){return"Feature Collection"===e.type}function v(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=u;break;case"ground":r=l;break;default:r=s}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=d}break;default:switch(e.layerContainerType){case"basemap":r=G;break;case"tables":r=I;break;default:r=p}}return r}async function w(e,r,a){const t=new y,i=S(t,Array.isArray(r.layers)?r.layers:[],a);try{const r=await e;try{if(await i,"group"===r.type)return r.layers.addMany(t),r}catch(e){r.destroy();for(const e of t)e.destroy();throw e}}catch(e){throw e}}async function W(e,r,a){const y=t.FeatureLayer,i=await y(),L=r.featureCollection,n=L?.showLegend,c=L?.layers?.map(((y,t)=>{const L=new i;L.read(y,a);const c={...a,ignoreDefaults:!0};return L.read({id:`${e.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},c),null!=n&&L.read({showLegend:n},c),L}));e.layers.addMany(c??[])}export{S as populateOperationalLayers};
//# sourceMappingURL=p-f5824c8c.js.map
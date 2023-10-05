import { an as l, b2 as S$1, a3 as d$1, k as s, B as e$1, E as y$1, F as a$1 } from './interfaces-f9f0dded.js';
import { i } from './GraphicsCollection-a0dc229c.js';
import './Rasterizer-2747011f.js';
import './Container-d8a68f3e.js';
import './BufferPool-095f03dd.js';
import './color-f1195a3b.js';
import './WGLContainer-7c66c447.js';
import './enums-f1bebe6f.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './ProgramTemplate-977fc931.js';
import './definitions-b0fcbe43.js';
import './GeometryUtils-141a489a.js';
import './VertexArrayObject-1461cfeb.js';
import './number-4aaa92a3.js';
import './StyleDefinition-d5519700.js';
import './vec2f32-cdd4dd4e.js';
import './enums-64077e1c.js';
import './MagnifierPrograms-ebf1b843.js';
import './OrderIndependentTransparency-2a855020.js';
import './floatRGBA-bde46530.js';
import './testSVGPremultipliedAlpha-36067eb4.js';
import { o as oe } from './GraphicsView2D-fbdfda4f.js';
import './AttributeStoreView-57709d94.js';
import './earcut-61f66feb.js';
import './featureConversionUtils-da87b7fc.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtils-6257e368.js';
import { t, o, n as n$1 } from './imageUtils-99a7fee7.js';
import { f, d } from './LayerView-0ac02167.js';
import { n } from './HighlightGraphicContainer-7ca036cd.js';
import { h } from './TileStore-178dd7b2.js';
import { e } from './TileKey-4c2c49c7.js';
import { y, d as r } from './TileStrategy-7487a7f8.js';
import { a } from './RefreshableLayerView-903a5fdd.js';
import { S, U, r as r$1 } from './drapedUtils-2877c942.js';
import './_commonjsHelpers-b08b522c.js';
import './cimAnalyzer-3bf5efb3.js';
import './fontUtils-84ca76ae.js';
import './BidiEngine-20165a23.js';
import './OptimizedFeature-fb4fb1cb.js';
import './GeometryUtils-f6b4ca45.js';
import './enums-ca582117.js';
import './utils-6e0c5e09.js';
import './alignmentUtils-63467b02.js';
import './vec2-c2da03bd.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-33eaa35c.js';
import './rasterizingUtils-15ce6205.js';
import './mat3f32-1cfc4913.js';
import './VertexElementDescriptor-33a64685.js';
import './config-78edfbcd.js';
import './vec2f64-25ab05ca.js';
import './pbf-70fc9f43.js';
import './imageutils-5301aafb.js';
import './Matcher-550439a8.js';
import './visualVariablesUtils-0358a92b.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-e911eb9c.js';
import './cimSymbolUtils-7e76fb38.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-0542add6.js';
import './CircularArray-00e66d79.js';
import './throttle-4b0bde7a.js';
import './ComputedAttributeStorage-eaf2407e.js';
import './arcadeTimeUtils-79914cb4.js';
import './executionError-5ec41157.js';
import './projectionSupport-edf32891.js';
import './json-4697dff9.js';
import './config-update-89e29a27.js';
import './index-0c4dc1bb.js';
import './utils-3c908942.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './statsWorker-e4850868.js';
import './utils-9b101bd7.js';
import './generateRendererUtils-ef8214c8.js';
import './Basemap-0d067aec.js';
import './loadAll-dc49c260.js';
import './writeUtils-3dcfa57f.js';
import './executeQuery-dca07954.js';
import './infoFor3D-0047d262.js';
import './executeQueryJSON-a16aae69.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './executeQueryPBF-24a7740f.js';
import './AttachmentInfo-fac6a5e9.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
import './Cyclical-5ec65b13.js';
import './TileInfo-4a28547b.js';
import './Scheduler-1e6f0e40.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './mat3-eb290db7.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './basicInterfaces-ce8a6401.js';
import './normalizeUtilsSync-898773b1.js';
import './normalizeUtilsCommon-b073ef53.js';
import './createSymbolSchema-62dd11b3.js';
import './TiledDisplayObject-2ca56649.js';
import './util-8efa6fb7.js';
import './BitmapTileContainer-189203ea.js';
import './Bitmap-86029069.js';
import './TileContainer-b89f9eec.js';
import './BaseGraphicContainer-4cece76f.js';
import './FeatureContainer-f2c76701.js';
import './quickselect-cc68e3d5.js';
import './scaleUtils-e3cd02d2.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-84c54601.js';
import './popupUtils-4fcdffd0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const T=[0,0];let v=class extends(a(t(f(d)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new i,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$1(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this.updatingHandles});}this.requestUpdate(),this.addAttachHandles(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return S$1(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const r=this.tilemapCache,{signal:s,resamplingLevel:o$1=0}=t;if(!r)try{return await this._fetchImage(e$1,s)}catch(a){if(!d$1(a)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const r=new e(i),s=await this.fetchTile(r,{...t,resamplingLevel:o$1+1});return n$1(this._tileInfoView,s,r,e$1)}}throw a}const l=new e(0,0,0,0);let h;try{if(await r.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:s}),l.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);h=await this._fetchImage(l,s);}catch(a){if(d$1(a))throw a;h=await this._fetchImage(e$1,s);}return this.resampling?n$1(this._tileInfoView,h,l,e$1):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.requestRender(),e.once("attach",(()=>this.requestUpdate()));}catch(r){d$1(r)||s.getLogger(this).error(r);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$1([y$1()],v.prototype,"_fetchQueue",void 0),e$1([y$1()],v.prototype,"resampling",null),e$1([y$1()],v.prototype,"tilemapCache",null),v=e$1([a$1("esri.views.2d.layers.TileLayerView2D")],v);const I=v;

export default I;

//# sourceMappingURL=TileLayerView2D-a18bdd2e.js.map
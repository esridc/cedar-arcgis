import{ad as t,aR as i,Q as s,b as p,l as r,y as e,n as a}from"./p-b54724b6.js";import{i as o}from"./p-c8e3775b.js";import"./p-c3aa4fdf.js";import"./p-843f0c78.js";import"./p-505c1a4d.js";import"./p-29040467.js";import"./p-570a8a46.js";import"./p-1fd43aa6.js";import"./p-13e550f5.js";import"./p-0fe6a545.js";import"./p-49f0006c.js";import"./p-541ec65c.js";import"./p-33c0f331.js";import"./p-5b0b1d68.js";import"./p-4f76b2d1.js";import"./p-2d1dac84.js";import"./p-8a4ae095.js";import"./p-25e77904.js";import"./p-8e3fbd83.js";import"./p-791e5c7c.js";import"./p-760b97ac.js";import{o as h}from"./p-8b9c0412.js";import"./p-b6ec07fb.js";import"./p-38e70926.js";import"./p-a3f0a5f3.js";import"./p-b4b7d6a0.js";import"./p-a5e3ec2a.js";import{t as m,o as c,n as j}from"./p-14679aa5.js";import{f,d as n}from"./p-5f5f43c2.js";import{n as l}from"./p-cbd322b3.js";import{h as b}from"./p-cd4a8b9a.js";import{e as d}from"./p-cae2235f.js";import{y as u,d as w}from"./p-faf4e331.js";import{a as g}from"./p-3faf3e32.js";import{S as y,U as v,r as T}from"./p-2db16041.js";import"./p-9f1a0adc.js";import"./p-399020b7.js";import"./p-50b034e8.js";import"./p-e6a64715.js";import"./p-6bb7b693.js";import"./p-0e94eaa4.js";import"./p-ecc7ed03.js";import"./p-74887bd8.js";import"./p-de65627f.js";import"./p-98e621d1.js";import"./p-1b31d781.js";import"./p-8fce63b9.js";import"./p-ca5fb53c.js";import"./p-265ce3d1.js";import"./p-fb79aaf0.js";import"./p-db174923.js";import"./p-5977fcaf.js";import"./p-873e8cec.js";import"./p-21ae9bf7.js";import"./p-2a6d626a.js";import"./p-30bab7e4.js";import"./p-73062657.js";import"./p-0357efed.js";import"./p-2f568dc7.js";import"./p-623dbe5e.js";import"./p-8eb5caaf.js";import"./p-c6ce33a2.js";import"./p-6ffbaa7a.js";import"./p-fc9cd10b.js";import"./p-fdc41b20.js";import"./p-05938a61.js";import"./p-8043ab9b.js";import"./p-1184cc61.js";import"./p-f7f8e6f9.js";import"./p-a779e49b.js";import"./p-7572c366.js";import"./p-832f907c.js";import"./p-5abe9c67.js";import"./p-0856fe30.js";import"./p-b88ddb1e.js";import"./p-8dc3148c.js";import"./p-dc29c329.js";import"./p-d7fc78fa.js";import"./p-581eca80.js";import"./p-2a2efb66.js";import"./p-1701e549.js";import"./p-07a1e707.js";import"./p-8bc47c76.js";import"./p-c19b935f.js";import"./p-e75aa2b5.js";import"./p-f5f26b1f.js";import"./p-783b6965.js";import"./p-52a9dec5.js";import"./p-07f12c16.js";import"./p-a379c2ce.js";import"./p-795f7c81.js";import"./p-42c332a2.js";import"./p-89e4900b.js";import"./p-80be55a5.js";import"./p-8eafbd05.js";import"./p-b3dc802f.js";import"./p-015ba93b.js";import"./p-a25d6f7d.js";import"./p-cc8b27b8.js";import"./p-58405edc.js";import"./p-ae4c1e05.js";import"./p-a3e88624.js";import"./p-9a4094ba.js";import"./p-5d1ac384.js";import"./p-6b09cddc.js";import"./p-053dc63d.js";import"./p-52324761.js";const C=[0,0];let q=class extends(g(m(f(n)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new o,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),this._highlightView?.processUpdate(t)}attach(){const i="tileServers"in this.layer?this.layer.tileServers:null,s=this.tilemapCache;if(this._tileInfoView=new b(this.layer.tileInfo,this.layer.fullExtent,s?.effectiveMinLOD,s?.effectiveMaxLOD),this._fetchQueue=new u({tileInfoView:this._tileInfoView,concurrency:i&&10*i.length||10,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new w({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),y(this,this.layer)){const t=this._highlightView=new h({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new l(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new v({createFetchPopupFeaturesQueryGeometry:(t,i)=>T(t,i,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(i,s)=>{t.graphicUpdateHandler({graphic:i,property:s})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(t((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return i(this.layer.tileInfo?.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((t=>this._enqueueTileFetch(t))))}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(t){const i=this._bitmapView.createTile(t),s=i.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(C,i.key),s.resolution=this._tileInfoView.getTileResolution(i.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(i),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",(()=>t.destroy())),this.requestUpdate()}async fetchTile(t,i={}){const p=this.tilemapCache,{signal:r,resamplingLevel:e=0}=i;if(!p)try{return await this._fetchImage(t,r)}catch(p){if(!s(p)&&!this.resampling)return c(this._tileInfoView.tileInfo.size);if(e<3){const s=this._tileInfoView.getTileParentId(t.id);if(s){const p=new d(s),r=await this.fetchTile(p,{...i,resamplingLevel:e+1});return j(this._tileInfoView,r,p,t)}}throw p}const a=new d(0,0,0,0);let o;try{if(await p.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),a.level!==t.level&&!this.resampling)return c(this._tileInfoView.tileInfo.size);o=await this._fetchImage(a,r)}catch(i){if(s(i))throw i;o=await this._fetchImage(t,r)}return this.resampling?j(this._tileInfoView,o,a,t):o}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",(()=>this.requestUpdate()))}catch(t){s(t)||p.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};r([e()],q.prototype,"_fetchQueue",void 0),r([e()],q.prototype,"resampling",null),r([e()],q.prototype,"tilemapCache",null),q=r([a("esri.views.2d.layers.TileLayerView2D")],q);const F=q;export default F;
//# sourceMappingURL=p-835f7c42.js.map
import{l as t,n}from"./p-b54724b6.js";import{n as e}from"./p-a25d6f7d.js";const s=s=>{let a=class extends s{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new e(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren()}};return a=t([n("esri.views.2d.layers.BitmapTileLayerView2D")],a),a};function a(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function i(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function r(t,n,e,s){if(e.level===s.level)return n;const r=t.tileInfo.size,o=t.getTileResolution(e.level),h=t.getTileResolution(s.level);let m=t.getLODInfoAt(s.level);const u=m.getXForColumn(s.col),f=m.getYForRow(s.row);m=t.getLODInfoAt(e.level);const l=m.getXForColumn(e.col),d=m.getYForRow(e.row),p=a(n)/r[0],M=i(n)/r[1],L=Math.round(p*((u-l)/o)),T=Math.round(M*(-(f-d)/o)),w=Math.round(p*r[0]*(h/o)),y=Math.round(M*r[1]*(h/o)),b=c(r);return b.getContext("2d").drawImage(n,L,T,w,y,0,0,r[0],r[1]),b}function c(t){const n=document.createElement("canvas");return[n.width,n.height]=t,n}export{r as n,c as o,s as t};
//# sourceMappingURL=p-14679aa5.js.map
import{l as t,y as s,n as i,V as e,bR as n}from"./p-b54724b6.js";let o=class extends e{constructor(t){super(t),this.getCollections=null}initialize(){this.own(n((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let s=0;for(const i of t)null!=i&&(s=this._processCollection(s,i));this.splice(s,this.length)}_createNewInstance(t){return new e(t)}_processCollection(t,s){if(!s)return t;const i=this.itemFilterFunction??(t=>!!t);for(const e of s)if(e){if(i(e)){const s=this.indexOf(e,t);s>=0?s!==t&&this.reorder(e,t):this.add(e,t),++t}if(this.getChildrenFunction){const s=this.getChildrenFunction(e);if(Array.isArray(s))for(const i of s)t=this._processCollection(t,i);else t=this._processCollection(t,s)}}return t}};t([s()],o.prototype,"getCollections",void 0),t([s()],o.prototype,"getChildrenFunction",void 0),t([s()],o.prototype,"itemFilterFunction",void 0),o=t([i("esri.core.CollectionFlattener")],o);const r=o;export{r as n};
//# sourceMappingURL=p-2a2efb66.js.map
import{h as t,d_ as s}from"./p-b54724b6.js";import{h as i}from"./p-fd8dc94a.js";const h=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function e(t){n.minX=t[0],n.minY=t[1],n.maxX=t[2],n.maxY=t[3]}function r(t,s,i){e(s),t.search(n,i)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i(9,t("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((i,h)=>{t[s++]=h})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=s();for(const s of this._boundsById.values())s&&(t[0]=Math.min(s[0],t[0]),t[1]=Math.min(s[1],t[1]),t[2]=Math.max(s[2],t[2]),t[3]=Math.max(s[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const s=this._boundsById.get(t);this._boundsById.delete(t),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(t,s){this._loadIndex(),r(this._index,t,(t=>s(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,s){if(!this._indexInvalid){const s=this._boundsById.get(t);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(t,s),s&&(this._idByBounds.set(s,t),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>h&&this._loadIndex()))}}export{a as o};
//# sourceMappingURL=p-48f43d72.js.map
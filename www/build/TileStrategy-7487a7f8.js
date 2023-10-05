import { b_ as a$5, ad as m$1, ap as l$3, B as e$2, E as y$3, F as a$6, bZ as i$2, b$ as E } from './interfaces-f9f0dded.js';
import { m as m$2, b as b$1 } from './vec2-c2da03bd.js';
import { u as u$3, l as l$4 } from './TileStore-178dd7b2.js';
import { e as e$3 } from './TileKey-4c2c49c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n$1(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function t$1(n){const t=new Float32Array(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function r$2(n,t,r,e,o,a){const c=new Float32Array(6);return c[0]=n,c[1]=t,c[2]=r,c[3]=e,c[4]=o,c[5]=a,c}function e$1(n,t){return new Float32Array(n,t,6)}function o$2(n,t,r,e){const o=t[e],a=t[e+1];n[e]=r[0]*o+r[2]*a+r[4],n[e+1]=r[1]*o+r[3]*a+r[5];}function a$4(n,t,r,e=0,a=0,c=2){const s=a||t.length/c;for(let u=e;u<s;u++){o$2(n,t,r,u*c);}}const c$4=Object.freeze(Object.defineProperty({__proto__:null,clone:t$1,create:n$1,createView:e$1,fromValues:r$2,transform:o$2,transformMany:a$4},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$3(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t}function n(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function s(t,a,n,s,r,u,o){return t[0]=a,t[1]=n,t[2]=s,t[3]=r,t[4]=u,t[5]=o,t}function r$1(t,a){const n=a[0],s=a[1],r=a[2],u=a[3],o=a[4],e=a[5];let c=n*u-s*r;return c?(c=1/c,t[0]=u*c,t[1]=-s*c,t[2]=-r*c,t[3]=n*c,t[4]=(r*e-u*o)*c,t[5]=(s*o-n*e)*c,t):null}function u$2(t){return t[0]*t[3]-t[1]*t[2]}function o$1(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],e=a[4],c=a[5],i=n[0],h=n[1],M=n[2],f=n[3],b=n[4],l=n[5];return t[0]=s*i+u*h,t[1]=r*i+o*h,t[2]=s*M+u*f,t[3]=r*M+o*f,t[4]=s*b+u*l+e,t[5]=r*b+o*l+c,t}function e(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],e=a[4],c=a[5],i=Math.sin(n),h=Math.cos(n);return t[0]=s*h+u*i,t[1]=r*h+o*i,t[2]=s*-i+u*h,t[3]=r*-i+o*h,t[4]=e,t[5]=c,t}function c$3(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],e=a[4],c=a[5],i=n[0],h=n[1];return t[0]=s*i,t[1]=r*i,t[2]=u*h,t[3]=o*h,t[4]=e,t[5]=c,t}function i$1(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],e=a[4],c=a[5],i=n[0],h=n[1];return t[0]=s,t[1]=r,t[2]=u,t[3]=o,t[4]=s*i+u*h+e,t[5]=r*i+o*h+c,t}function h$3(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=-n,t[3]=s,t[4]=0,t[5]=0,t}function M(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t}function f(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t}function b(t){return "mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function l$2(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)}function m(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t}function d(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}function p$2(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t}function x(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t}function y$2(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]}function g(a,n){const s=a[0],r=a[1],u=a[2],o=a[3],e=a[4],c=a[5],i=n[0],h=n[1],M=n[2],f=n[3],b=n[4],l=n[5],m=a$5();return Math.abs(s-i)<=m*Math.max(1,Math.abs(s),Math.abs(i))&&Math.abs(r-h)<=m*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(u-M)<=m*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-f)<=m*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(e-b)<=m*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(c-l)<=m*Math.max(1,Math.abs(c),Math.abs(l))}const S=o$1,j=d,q=Object.freeze(Object.defineProperty({__proto__:null,add:m,copy:a$3,determinant:u$2,equals:g,exactEquals:y$2,frob:l$2,fromRotation:h$3,fromScaling:M,fromTranslation:f,identity:n,invert:r$1,mul:S,multiply:o$1,multiplyScalar:p$2,multiplyScalarAndAdd:x,rotate:e,scale:c$3,set:s,str:b,sub:j,subtract:d,translate:i$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u$1(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const a$2=new Set,c$2=[],h$2=new Map,l$1=[0,0];let p$1=class extends m$1{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null;}initialize(){const{concurrency:e,process:t}=this;this._queue=new u$3({concurrency:e,process:(e,s)=>{const r=this._keyToItem.get(e);return t(r,{signal:s})},peeker:e=>e.values().next().value});}destroy(){this.clear(),this._queue=l$3(this._queue);}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t);}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating");}has(e){return "string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause();}push(e,t){const s=e.key.id+"-"+t;if(this.has(s))return this.get(s);const r=this._queue.push(s),o=()=>{this._keyToItem.delete(s),this.notifyChange("updating");};return this._keyToItem.set(s,e),r.then(o,o),this.notifyChange("updating"),r}reset(){this._queue.reset(),this.notifyChange("updating");}resume(){this._queue.resume();}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);h$2.has(o)||(h$2.set(o,[]),s=Math.max(o,s),r=Math.min(o,r)),h$2.get(o).push(t.key),a$2.add(o);}));let o=this.state.scale;h$2.has(o)||(u$1(c$2,a$2),c$2.sort(((e,t)=>e-t)),o=c$2.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),c$2[0])),o=Math.min(o,s),o=Math.max(o,r);const i=h$2.get(o),n=t.getClosestInfoForScale(o),l=n.getColumnForX(this.state.center[0]),p=n.getRowForY(this.state.center[1]);return i.sort(((e,t)=>{const s=n.denormalizeCol(e.col,e.world),r=n.denormalizeCol(t.col,t.world);return Math.sqrt((l-s)*(l-s)+(p-e.row)*(p-e.row))-Math.sqrt((l-r)*(l-r)+(p-t.row)*(p-t.row))})),a$2.clear(),h$2.clear(),i[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let r,o=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(l$1,n.key);const u=m$2(l$1,s);u<o&&(o=u,r=n.key);})),r.id}};e$2([y$3({constructOnly:!0})],p$1.prototype,"concurrency",void 0),e$2([y$3({constructOnly:!0})],p$1.prototype,"process",void 0),e$2([y$3()],p$1.prototype,"state",void 0),e$2([y$3({constructOnly:!0})],p$1.prototype,"strategy",void 0),e$2([y$3({constructOnly:!0})],p$1.prototype,"tileInfoView",void 0),e$2([y$3({readOnly:!0})],p$1.prototype,"updating",null),p$1=e$2([a$6("esri.views.2d.tiling.PagedTileQueue")],p$1);const y$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const c$1=new Set,a$1=[],h$1=new Map,l=[0,0];let p=class extends m$1{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null;}initialize(){const{concurrency:e,process:t,strategy:s}=this;this._queue=new u$3({concurrency:e,process:(e,s)=>{const r=this._keyToItem.get(e);return t(r,{signal:s})},peeker:"scale-first"===s?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)});}destroy(){this.clear(),this._queue=l$3(this._queue);}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t);}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating");}has(e){return "string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause();}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const s=this._queue.push(t),r=()=>{this._keyToItem.delete(t),this.notifyChange("updating");};return this._keyToItem.set(t,e),s.then(r,r),this.notifyChange("updating"),s}reset(){this._queue.reset();}resume(){this._queue.resume();}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);h$1.has(o)||(h$1.set(o,[]),s=Math.max(o,s),r=Math.min(o,r)),h$1.get(o).push(t.key),c$1.add(o);}));let o=this.state.scale;h$1.has(o)||(u(a$1,c$1),a$1.sort(((e,t)=>e-t)),o=a$1.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),a$1[0])),o=Math.min(o,s),o=Math.max(o,r);const i=h$1.get(o),n=t.getClosestInfoForScale(o),l=n.getColumnForX(this.state.center[0]),p=n.getRowForY(this.state.center[1]);return i.sort(((e,t)=>{const s=n.denormalizeCol(e.col,e.world),r=n.denormalizeCol(t.col,t.world);return Math.sqrt((l-s)*(l-s)+(p-e.row)*(p-e.row))-Math.sqrt((l-r)*(l-r)+(p-t.row)*(p-t.row))})),c$1.clear(),h$1.clear(),i[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let r,o=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(l,n.key);const u=m$2(l,s);u<o&&(o=u,r=n.key);})),r.id}};e$2([y$3({constructOnly:!0})],p.prototype,"concurrency",void 0),e$2([y$3({constructOnly:!0})],p.prototype,"process",void 0),e$2([y$3()],p.prototype,"state",void 0),e$2([y$3({constructOnly:!0})],p.prototype,"strategy",void 0),e$2([y$3({constructOnly:!0})],p.prototype,"tileInfoView",void 0),e$2([y$3({readOnly:!0})],p.prototype,"updating",null),p=e$2([a$6("esri.views.2d.tiling.TileQueue")],p);const y=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(e,t,i){this.maxSize=e,this._tileInfoView=t,this._removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[];}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[];}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return;const r=t.key.level,s=this._tileKeysPerLevel[r];i(this._tilePerId,e);for(let i=0;i<s.length;i++)if(s[i].id===e){s.splice(i,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,i=t.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const r=t.level;this._tileKeysPerLevel[r]||(this._tileKeysPerLevel[r]=[]),this._tileKeysPerLevel[r].push(t);}prune(e,t,i){let r=this._tilePerId.size;if(r<=this.maxSize)return;let s=this._tileKeysPerLevel.length-1;for(;r>this.maxSize&&s>=0;)s!==e&&(r=this._pruneAroundCenterTile(r,t,i,s)),s--;r>this.maxSize&&(r=this._pruneAroundCenterTile(r,t,i,e));}_pruneAroundCenterTile(t,i,r,s){const l=this._tileKeysPerLevel[s];if(!l||0===l.length)return t;const{size:n,origin:h}=this._tileInfoView.tileInfo,o=r*n[0],_=r*n[1],d=[0,0],u=[0,0];for(l.sort(((t,r)=>(d[0]=h.x+o*(t.col+.5),d[1]=h.y-_*(t.row+.5),u[0]=h.x+o*(r.col+.5),u[1]=h.y-_*(r.row+.5),b$1(d,i)-b$1(u,i))));l.length>0;){const e=l.pop();if(this._removeTile(e.id),--t===this.maxSize)break}return t}_removeTile(e){const t=this._tilePerId.get(e);this._removedFunc&&t&&this._removedFunc(t),i(this._tilePerId,e);}}function i(e,t){e.delete(t);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=new e$3(0,0,0,0),h=new Map,a=[],c=[];class r{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,null!=e.resampling&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new t(e.cacheSize,this.tileInfoView,(e=>{this.releaseTile(e);})));}destroy(){this.tileIndex.clear();}update(e){const{resampling:i,tileIndex:t}=this,{scale:l,center:r,resolution:n}=e.state,{minScale:f,maxScale:d}=this.tileInfoView,u=!e.stationary&&l>this._previousScale;if(this._previousScale=l,!i&&(l>f||l<d))return this.tiles.length=0,void this.clear();const p=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!p)return this.tiles.length=0,void this.clear();const{spans:y,lodInfo:g}=p,{level:I}=g;this.tiles.length=0,t.forEach((e=>e.visible=!0));let v=0,m=0;if(y.length>0)for(const{row:s,colFrom:a,colTo:c}of y)for(let e=a;e<=c;e++){v++;const i=o.set(I,s,g.normalizeCol(e),g.getWorldForColumn(e)).id;let l=t.get(i);if(l)l.isReady?(h.set(i,l),m++):u||this._addParentTile(i,h);else {if(this._tileCache?.has(i)){if(l=this._tileCache.pop(i),this.tileIndex.set(i,l),l.isReady){h.set(i,l),m++;continue}}else l=this.acquireTile(o),this.tileIndex.set(i,l);u||this._addParentTile(i,h);}}const T=m===v;for(const[s,_]of t){if(h.has(s))continue;o.set(s);const e=this.tileInfoView.intersects(p,o),i="purge"===this.cachePolicy?o.level!==I:o.level>I;!e||!u&&T?!i&&e||a.push(_):_.isReady?i&&"purge"===this.cachePolicy&&this._hasReadyAncestor(o,I)?a.push(_):c.push(_):i&&a.push(_);}for(const s of c)s.isReady&&h.set(s.key.id,s);for(const s of a)this._tileCache?this._tileCache.add(s):this.releaseTile(s),t.delete(s.key.id);for(const s of h.values())this.tiles.push(s);for(const s of t.values())h.has(s.key.id)||(s.visible=!1);this._tileCache?.prune(I,r,n),l$4.pool.release(p),c.length=0,a.length=0,h.clear();}clear(){const{tileIndex:e}=this;for(const i of e.values())this.releaseTile(i);e.clear();}refresh(e){for(const i of this.tileIndex.values())this.tiles.includes(i)?e(i):a.push(i);for(const i of a)this.releaseTile(i),this.tileIndex.delete(i.key.id);this._tileCache?.clear();}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e);}_addParentTile(e,i){let t=e,s=null;for(;t=this.tileInfoView.getTileParentId(t),t;)if(this.tileIndex.has(t)){if(s=this.tileIndex.get(t),s?.isReady){i.has(s.key.id)||i.set(s.key.id,s);break}}else if(this._tileCache?.has(t)&&(s=this._tileCache.pop(t),this.tileIndex.set(t,s),s?.isReady)){i.has(s.key.id)||i.set(s.key.id,s);break}}_hasReadyAncestor(t,s){const l=i$2();this.tileInfoView.getTileBounds(l,t,!0);for(const o of this.tileIndex.values())if(o.isReady&&o.key.level>=s&&o.key.level<t.level){const t=i$2();if(this.tileInfoView.getTileBounds(t,o.key,!0),E(t,l))return !0}return !1}}

export { M, n$1 as a, a$4 as b, c$3 as c, r as d, e, f, h$3 as h, i$1 as i, n, o$1 as o, r$1 as r, s, y };

//# sourceMappingURL=TileStrategy-7487a7f8.js.map
import{h as t,ck as s}from"./p-b54724b6.js";import{a as r}from"./p-b6ec07fb.js";const e=t("esri-2d-log-allocations");class i{constructor(t,s){this._array=t,this._pool=s}get array(){return this._array}get length(){return this._array.length}static create(t,s){const r=s.acquire(t);return new i(r,s)}expand(t){const s=this._pool.acquire(t);s.set(this._array),this._pool.release(this._array),this._array=s}destroy(){this._pool.release(this._array)}set(t,s){this._array.set(t._array,s)}slice(){const t=this._pool.acquire(this._array.byteLength);return t.set(this._array),new i(t,this._pool)}}class n{constructor(){this._data=new ArrayBuffer(n.BYTE_LENGTH),this._freeList=new r({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const s=this._freeList.firstFit(t);return null==s?null:new Uint32Array(this._data,s,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class h{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*n.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,e&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>n.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const s of this._pages){const r=s.allocate(t);if(null!=r)return r}return s(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,e&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const s=this._pagesByBuffer.get(t.buffer);s&&s.free(t)}_addPage(){const t=new n;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}export{h as i,i as r};
//# sourceMappingURL=p-505c1a4d.js.map
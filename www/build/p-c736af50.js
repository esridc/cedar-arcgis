import{ej as r,d9 as n}from"./p-b54724b6.js";function t(t){return r(t)?t.length<n?t:e(t):t.length<n?Array.from(t):t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:e(t)}function e(n){let t=!0;for(const e of n){if(e>=65536)return r(n)?new Uint32Array(n):n;e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=n?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const o=[0],f=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function y(r){if(1===r)return o;if(r<n)return Array.from(new Uint16Array(f.buffer,0,r));if(r<f.length)return new Uint16Array(f.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r}return new Uint32Array(a.buffer,0,r)}export{i,t,y};
//# sourceMappingURL=p-c736af50.js.map
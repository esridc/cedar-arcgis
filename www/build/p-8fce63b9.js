import{o as r}from"./p-791e5c7c.js";import{fY as o}from"./p-b54724b6.js";const t=r=>"vertical"===r||"horizontal"===r||"cross"===r||"esriSFSCross"===r||"esriSFSVertical"===r||"esriSFSHorizontal"===r;function a(r,a,s){const n=o(Math.ceil(s)),i=t(a)?8*n:16*n,e=2*n;r.width=i,r.height=i;const c=r.getContext("2d");c.strokeStyle="#FFFFFF",c.lineWidth=n,c.beginPath(),"vertical"!==a&&"cross"!==a&&"esriSFSCross"!==a&&"esriSFSVertical"!==a||(c.moveTo(i/2,-e),c.lineTo(i/2,i+e)),"horizontal"!==a&&"cross"!==a&&"esriSFSCross"!==a&&"esriSFSHorizontal"!==a||(c.moveTo(-e,i/2),c.lineTo(i+e,i/2)),"forward-diagonal"!==a&&"diagonal-cross"!==a&&"esriSFSDiagonalCross"!==a&&"esriSFSForwardDiagonal"!==a||(c.moveTo(-e,-e),c.lineTo(i+e,i+e),c.moveTo(i-e,-e),c.lineTo(i+e,e),c.moveTo(-e,i-e),c.lineTo(e,i+e)),"backward-diagonal"!==a&&"diagonal-cross"!==a&&"esriSFSBackwardDiagonal"!==a&&"esriSFSDiagonalCross"!==a||(c.moveTo(i+e,-e),c.lineTo(-e,i+e),c.moveTo(e,-e),c.lineTo(-e,e),c.moveTo(i+e,i-e),c.lineTo(i-e,i+e)),c.stroke();const l=c.getImageData(0,0,r.width,r.height),S=new Uint8Array(l.data);let F;for(let r=0;r<S.length;r+=4)F=S[r+3]/255,S[r]=S[r]*F,S[r+1]=S[r+1]*F,S[r+2]=S[r+2]*F;return[S,r.width,r.height]}function s(o,t){const a="Butt"===t,s="Square"===t,n=!a&&!s;o.length%2==1&&(o=[...o,...o]);const i=15.5,e=2*i;let c=0;for(const r of o)c+=r;const l=Math.round(c*i),S=new Float32Array(l*e),F=.5*i;let h=0,f=0,M=.5,d=!0;for(const r of o){for(h=f,f+=r*i;M<=f;){let r=.5;for(;r<e;){const o=(r-.5)*l+M-.5,t=n?(r-i)*(r-i):Math.abs(r-i);S[o]=d?a?Math.max(Math.max(h+F-M,t),Math.max(M-f+F,t)):t:n?Math.min((M-h)*(M-h)+t,(M-f)*(M-f)+t):s?Math.min(Math.max(M-h,t),Math.max(f-M,t)):Math.min(Math.max(M-h+F,t),Math.max(f+F-M,t)),r++}M++}d=!d}const g=S.length,w=new Uint8Array(4*g);for(let o=0;o<g;++o){const t=(n?Math.sqrt(S[o]):S[o])/i;r(t,w,4*o)}return[w,l,e]}export{s as e,a as r};
//# sourceMappingURL=p-8fce63b9.js.map
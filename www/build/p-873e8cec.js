import{h as t,bB as i}from"./p-b54724b6.js";import{e as s,n as o}from"./p-0e94eaa4.js";import{$ as h}from"./p-570a8a46.js";const n=128e3;let e=null,c=null;async function r(){return e||(e=l()),e}async function l(){const s=t("esri-csp-restrictions")?await import("./p-d38e6b72.js").then((t=>t.l)):await import("./p-af7a049a.js").then((t=>t.l));c=await s.load({locateFile:t=>i(`esri/core/libs/libtess/${t}`)})}function a(t,i){const s=Math.max(t.length,n);return c.triangulate(t,i,s)}function u(t,i){return t.x===i.x&&t.y===i.y}function f(t){if(!t)return;const i=t.length;if(i<=1)return;let s=0;for(let o=1;o<i;o++)u(t[o],t[s])||++s===o||(t[s]=t[o]);t.length=s+1}function d(t,i){return t.x=i.y,t.y=-i.x,t}function v(t,i){return t.x=-i.y,t.y=i.x,t}function y(t,i){return t.x=i.x,t.y=i.y,t}function x(t,i){return t.x=-i.x,t.y=-i.y,t}function b(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function p(t,i){return t.x*i.y-t.y*i.x}function m(t,i){return t.x*i.x+t.y*i.y}function k(t,i,s,o){return t.x=i.x*s+i.y*o,t.y=i.x*o-i.y*s,t}class M{constructor(t,i,s){this._writeVertex=t,this._writeTriangle=i,this._canUseThinTessellation=s,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){f(t),this._canUseThinTessellation&&i.halfWidth<h&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}_tessellateThin(t,i){if(t.length<2)return;const s=i.wrapDistance||65535;let o=i.initialDistance||0,h=!1,n=t[0].x,e=t[0].y;const c=t.length;for(let i=1;i<c;++i){h&&(h=!1,o=0);let c=t[i].x,r=t[i].y,l=c-n,a=r-e,u=Math.sqrt(l*l+a*a);if(l/=u,a/=u,o+u>s){h=!0;const t=(s-o)/u;u=s-o,c=(1-t)*n+t*c,r=(1-t)*e+t*r,--i}const f=this._writeVertex(n,e,0,0,l,a,a,-l,0,-1,o),d=this._writeVertex(n,e,0,0,l,a,-a,l,0,1,o);o+=u;const v=this._writeVertex(c,r,0,0,l,a,a,-l,0,-1,o),y=this._writeVertex(c,r,0,0,l,a,-a,l,0,1,o);this._writeTriangle(f,d,v),this._writeTriangle(d,v,y),n=c,e=r}}_tessellate(t,i){const h=t[0],n=t[t.length-1],e=u(h,n),c=e?3:2;if(t.length<c)return;const r=i.pixelCoordRatio,l=null!=i.capType?i.capType:s.BUTT,a=null!=i.joinType?i.joinType:o.MITER,f=null!=i.miterLimit?Math.min(i.miterLimit,4):2,M=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,j=null!=i.halfWidth?i.halfWidth:2,w=!!i.textured;let N,_,B,F=null;const T=this._prevNormal,$=this._nextNormal;let g=-1,q=-1;const z=this._joinNormal;let A,C;const D=this._textureNormalLeft,E=this._textureNormalRight,G=this._textureNormal;let H=-1,I=-1;const J=i.wrapDistance||65535;let K=i.initialDistance||0;const L=this._writeVertex,O=this._writeTriangle,P=(t,i,s,o,h,n)=>{const e=L(_,B,A,C,s,o,t,i,h,n,K);return H>=0&&I>=0&&e>=0&&O(H,I,e),H=I,I=e,e};e&&(N=t[t.length-2],$.x=n.x-N.x,$.y=n.y-N.y,q=b($),$.x/=q,$.y/=q);let Q=!1;for(let i=0;i<t.length;++i){if(Q&&(Q=!1,K=0),N&&(T.x=-$.x,T.y=-$.y,g=q,K+g>J&&(Q=!0)),Q){const s=(J-K)/g;g=J-K,N={x:(1-s)*N.x+s*t[i].x,y:(1-s)*N.y+s*t[i].y},--i}else N=t[i];_=N.x,B=N.y;const h=i<=0&&!Q,n=i===t.length-1;if(h||(K+=g),F=n?e?t[1]:null:t[i+1],F?($.x=F.x-_,$.y=F.y-B,q=b($),$.x/=q,$.y/=q):($.x=void 0,$.y=void 0),!e){if(h){v(z,$),A=z.x,C=z.y,l===s.SQUARE&&(P(-$.y-$.x,$.x-$.y,$.x,$.y,0,-1),P($.y-$.x,-$.x-$.y,$.x,$.y,0,1)),l===s.ROUND&&(P(-$.y-$.x,$.x-$.y,$.x,$.y,-1,-1),P($.y-$.x,-$.x-$.y,$.x,$.y,-1,1)),l!==s.ROUND&&l!==s.BUTT||(P(-$.y,$.x,$.x,$.y,0,-1),P($.y,-$.x,$.x,$.y,0,1));continue}if(n){d(z,T),A=z.x,C=z.y,l!==s.ROUND&&l!==s.BUTT||(P(T.y,-T.x,-T.x,-T.y,0,-1),P(-T.y,T.x,-T.x,-T.y,0,1)),l===s.SQUARE&&(P(T.y-T.x,-T.x-T.y,-T.x,-T.y,0,-1),P(-T.y-T.x,T.x-T.y,-T.x,-T.y,0,1)),l===s.ROUND&&(P(T.y-T.x,-T.x-T.y,-T.x,-T.y,1,-1),P(-T.y-T.x,T.x-T.y,-T.x,-T.y,1,1));continue}}let c,u,L=-p(T,$);if(Math.abs(L)<.01)m(T,$)>0?(z.x=T.x,z.y=T.y,L=1,c=Number.MAX_VALUE,u=!0):(v(z,$),L=1,c=1,u=!1);else{z.x=(T.x+$.x)/L,z.y=(T.y+$.y)/L,c=b(z);const t=(c-1)*j*r;u=c>4||t>g&&t>q}A=z.x,C=z.y;let O=a;switch(a){case o.BEVEL:c<1.05&&(O=o.MITER);break;case o.ROUND:c<M&&(O=o.MITER);break;case o.MITER:c>f&&(O=o.BEVEL)}switch(O){case o.MITER:if(P(z.x,z.y,-T.x,-T.y,0,-1),P(-z.x,-z.y,-T.x,-T.y,0,1),n)break;if(w){const t=Q?0:K;H=this._writeVertex(_,B,A,C,$.x,$.y,z.x,z.y,0,-1,t),I=this._writeVertex(_,B,A,C,$.x,$.y,-z.x,-z.y,0,1,t)}break;case o.BEVEL:{const t=L<0;let i,s,o,h;if(t){const t=H;H=I,I=t,i=D,s=E}else i=E,s=D;if(u)o=t?v(this._innerPrev,T):d(this._innerPrev,T),h=t?d(this._innerNext,$):v(this._innerNext,$);else{const i=t?x(this._inner,z):y(this._inner,z);o=i,h=i}const e=t?d(this._bevelStart,T):v(this._bevelStart,T);P(o.x,o.y,-T.x,-T.y,i.x,i.y);const c=P(e.x,e.y,-T.x,-T.y,s.x,s.y);if(n)break;const r=t?v(this._bevelEnd,$):d(this._bevelEnd,$);if(u){const t=this._writeVertex(_,B,A,C,-T.x,-T.y,0,0,0,0,K);H=this._writeVertex(_,B,A,C,$.x,$.y,h.x,h.y,i.x,i.y,K),I=this._writeVertex(_,B,A,C,$.x,$.y,r.x,r.y,s.x,s.y,K),this._writeTriangle(c,t,I)}else{if(w){const t=this._bevelMiddle;t.x=(e.x+r.x)/2,t.y=(e.y+r.y)/2,k(G,t,-T.x,-T.y),P(t.x,t.y,-T.x,-T.y,G.x,G.y),k(G,t,$.x,$.y),H=this._writeVertex(_,B,A,C,$.x,$.y,t.x,t.y,G.x,G.y,K),I=this._writeVertex(_,B,A,C,$.x,$.y,h.x,h.y,i.x,i.y,K)}else{const t=H;H=I,I=t}P(r.x,r.y,$.x,$.y,s.x,s.y)}if(t){const t=H;H=I,I=t}break}case o.ROUND:{const t=L<0;let i,s;if(t){const t=H;H=I,I=t,i=D,s=E}else i=E,s=D;const o=t?x(this._inner,z):y(this._inner,z);let h,e;u?(h=t?v(this._innerPrev,T):d(this._innerPrev,T),e=t?d(this._innerNext,$):v(this._innerNext,$)):(h=o,e=o);const r=t?d(this._roundStart,T):v(this._roundStart,T),l=t?v(this._roundEnd,$):d(this._roundEnd,$),a=P(h.x,h.y,-T.x,-T.y,i.x,i.y),f=P(r.x,r.y,-T.x,-T.y,s.x,s.y);if(n)break;const b=this._writeVertex(_,B,A,C,-T.x,-T.y,0,0,0,0,K);u||this._writeTriangle(H,I,b);const p=x(this._outer,o),M=this._writeVertex(_,B,A,C,$.x,$.y,l.x,l.y,s.x,s.y,K);let j,N;const F=c>2;if(F){let i;c!==Number.MAX_VALUE?(p.x/=c,p.y/=c,i=m(T,p),i=(c*(i*i-1)+1)/i):i=-1,j=t?d(this._startBreak,T):v(this._startBreak,T),j.x+=T.x*i,j.y+=T.y*i,N=t?v(this._endBreak,$):d(this._endBreak,$),N.x+=$.x*i,N.y+=$.y*i}k(G,p,-T.x,-T.y);const g=this._writeVertex(_,B,A,C,-T.x,-T.y,p.x,p.y,G.x,G.y,K);k(G,p,$.x,$.y);const q=w?this._writeVertex(_,B,A,C,$.x,$.y,p.x,p.y,G.x,G.y,K):g,J=b,O=w?this._writeVertex(_,B,A,C,$.x,$.y,0,0,0,0,K):b;let Q=-1,R=-1;if(F&&(k(G,j,-T.x,-T.y),Q=this._writeVertex(_,B,A,C,-T.x,-T.y,j.x,j.y,G.x,G.y,K),k(G,N,$.x,$.y),R=this._writeVertex(_,B,A,C,$.x,$.y,N.x,N.y,G.x,G.y,K)),w?F?(this._writeTriangle(J,f,Q),this._writeTriangle(J,Q,g),this._writeTriangle(O,q,R),this._writeTriangle(O,R,M)):(this._writeTriangle(J,f,g),this._writeTriangle(O,q,M)):F?(this._writeTriangle(b,f,Q),this._writeTriangle(b,Q,R),this._writeTriangle(b,R,M)):(this._writeTriangle(b,f,g),this._writeTriangle(b,q,M)),u?(H=this._writeVertex(_,B,A,C,$.x,$.y,e.x,e.y,i.x,i.y,K),I=M):(H=w?this._writeVertex(_,B,A,C,$.x,$.y,e.x,e.y,i.x,i.y,K):a,this._writeTriangle(H,O,M),I=M),t){const t=H;H=I,I=t}break}}}}}export{M as c,r as i,a as r};
//# sourceMappingURL=p-873e8cec.js.map
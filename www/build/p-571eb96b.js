import{s as t,j as n}from"./p-05938a61.js";import{d as e}from"./p-ebdc21a4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.0
 */const o=["top","right","bottom","left"];const i=["start","end"];const r=o.reduce(((t,n)=>t.concat(n,n+"-"+i[0],n+"-"+i[1])),[]);const s=Math.min;const c=Math.max;const a=Math.round;const l=Math.floor;const f=t=>({x:t,y:t});const u={left:"right",right:"left",bottom:"top",top:"bottom"};const d={start:"end",end:"start"};function m(t,n,e){return c(t,s(n,e))}function p(t,n){return typeof t==="function"?t(n):t}function y(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function g(t){return t==="x"?"y":"x"}function w(t){return t==="y"?"height":"width"}function x(t){return["top","bottom"].includes(y(t))?"y":"x"}function v(t){return g(x(t))}function b(t,n,e){if(e===void 0){e=false}const o=h(t);const i=v(t);const r=w(i);let s=i==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";if(n.reference[r]>n.floating[r]){s=$(s)}return[s,$(s)]}function k(t){const n=$(t);return[A(t),n,A(n)]}function A(t){return t.replace(/start|end/g,(t=>d[t]))}function S(t,n,e){const o=["left","right"];const i=["right","left"];const r=["top","bottom"];const s=["bottom","top"];switch(t){case"top":case"bottom":if(e)return n?i:o;return n?o:i;case"left":case"right":return n?r:s;default:return[]}}function P(t,n,e,o){const i=h(t);let r=S(y(t),e==="start",o);if(i){r=r.map((t=>t+"-"+i));if(n){r=r.concat(r.map(A))}}return r}function $(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function D(t){return{top:0,right:0,bottom:0,left:0,...t}}function O(t){return typeof t!=="number"?D(t):{top:t,right:t,bottom:t,left:t}}function R(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,n,e){let{reference:o,floating:i}=t;const r=x(n);const s=v(n);const c=w(s);const a=y(n);const l=r==="y";const f=o.x+o.width/2-i.width/2;const u=o.y+o.height/2-i.height/2;const d=o[c]/2-i[c]/2;let m;switch(a){case"top":m={x:f,y:o.y-i.height};break;case"bottom":m={x:f,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:u};break;case"left":m={x:o.x-i.width,y:u};break;default:m={x:o.x,y:o.y}}switch(h(n)){case"start":m[s]-=d*(e&&l?-1:1);break;case"end":m[s]+=d*(e&&l?-1:1);break}return m}const M=async(t,n,e)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=e;const c=r.filter(Boolean);const a=await(s.isRTL==null?void 0:s.isRTL(n));let l=await s.getElementRects({reference:t,floating:n,strategy:i});let{x:f,y:u}=E(l,o,a);let d=o;let m={};let p=0;for(let e=0;e<c.length;e++){const{name:r,fn:y}=c[e];const{x:h,y:g,data:w,reset:x}=await y({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:t,floating:n}});f=h!=null?h:f;u=g!=null?g:u;m={...m,[r]:{...m[r],...w}};if(x&&p<=50){p++;if(typeof x==="object"){if(x.placement){d=x.placement}if(x.rects){l=x.rects===true?await s.getElementRects({reference:t,floating:n,strategy:i}):x.rects}({x:f,y:u}=E(l,d,a))}e=-1;continue}}return{x:f,y:u,placement:d,strategy:i,middlewareData:m}};async function F(t,n){var e;if(n===void 0){n={}}const{x:o,y:i,platform:r,rects:s,elements:c,strategy:a}=t;const{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=false,padding:m=0}=p(n,t);const y=O(m);const h=u==="floating"?"reference":"floating";const g=c[d?h:u];const w=R(await r.getClippingRect({element:((e=await(r.isElement==null?void 0:r.isElement(g)))!=null?e:true)?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a}));const x=u==="floating"?{...s.floating,x:o,y:i}:s.reference;const v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating));const b=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1};const k=R(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:v,strategy:a}):x);return{top:(w.top-k.top+y.top)/b.y,bottom:(k.bottom-w.bottom+y.bottom)/b.y,left:(w.left-k.left+y.left)/b.x,right:(k.right-w.right+y.right)/b.x}}const T=t=>({name:"arrow",options:t,async fn(n){const{x:e,y:o,placement:i,rects:r,platform:c,elements:a,middlewareData:l}=n;const{element:f,padding:u=0}=p(t,n)||{};if(f==null){return{}}const d=O(u);const y={x:e,y:o};const g=v(i);const x=w(g);const b=await c.getDimensions(f);const k=g==="y";const A=k?"top":"left";const S=k?"bottom":"right";const P=k?"clientHeight":"clientWidth";const $=r.reference[x]+r.reference[g]-y[g]-r.floating[x];const D=y[g]-r.reference[g];const R=await(c.getOffsetParent==null?void 0:c.getOffsetParent(f));let E=R?R[P]:0;if(!E||!await(c.isElement==null?void 0:c.isElement(R))){E=a.floating[P]||r.floating[x]}const M=$/2-D/2;const F=E/2-b[x]/2-1;const T=s(d[A],F);const C=s(d[S],F);const L=T;const B=E-b[x]-C;const j=E/2-b[x]/2+M;const z=m(L,j,B);const H=!l.arrow&&h(i)!=null&&j!=z&&r.reference[x]/2-(j<L?T:C)-b[x]/2<0;const W=H?j<L?j-L:j-B:0;return{[g]:y[g]+W,data:{[g]:z,centerOffset:j-z-W,...H&&{alignmentOffset:W}},reset:H}}});function C(t,n,e){const o=t?[...e.filter((n=>h(n)===t)),...e.filter((n=>h(n)!==t))]:e.filter((t=>y(t)===t));return o.filter((e=>{if(t){return h(e)===t||(n?A(e)!==e:false)}return true}))}const L=function(t){if(t===void 0){t={}}return{name:"autoPlacement",options:t,async fn(n){var e,o,i;const{rects:s,middlewareData:c,placement:a,platform:l,elements:f}=n;const{crossAxis:u=false,alignment:d,allowedPlacements:m=r,autoAlignment:g=true,...w}=p(t,n);const x=d!==undefined||m===r?C(d||null,g,m):m;const v=await F(n,w);const k=((e=c.autoPlacement)==null?void 0:e.index)||0;const A=x[k];if(A==null){return{}}const S=b(A,s,await(l.isRTL==null?void 0:l.isRTL(f.floating)));if(a!==A){return{reset:{placement:x[0]}}}const P=[v[y(A)],v[S[0]],v[S[1]]];const $=[...((o=c.autoPlacement)==null?void 0:o.overflows)||[],{placement:A,overflows:P}];const D=x[k+1];if(D){return{data:{index:k+1,overflows:$},reset:{placement:D}}}const O=$.map((t=>{const n=h(t.placement);return[t.placement,n&&u?t.overflows.slice(0,2).reduce(((t,n)=>t+n),0):t.overflows[0],t.overflows]})).sort(((t,n)=>t[1]-n[1]));const R=O.filter((t=>t[2].slice(0,h(t[0])?2:3).every((t=>t<=0))));const E=((i=R[0])==null?void 0:i[0])||O[0][0];if(E!==a){return{data:{index:k+1,overflows:$},reset:{placement:E}}}return{}}}};const B=function(t){if(t===void 0){t={}}return{name:"flip",options:t,async fn(n){var e,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:a,elements:l}=n;const{mainAxis:f=true,crossAxis:u=true,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=true,...w}=p(t,n);if((e=r.arrow)!=null&&e.alignmentOffset){return{}}const x=y(i);const v=y(c)===c;const A=await(a.isRTL==null?void 0:a.isRTL(l.floating));const S=d||(v||!g?[$(c)]:k(c));if(!d&&h!=="none"){S.push(...P(c,g,h,A))}const D=[c,...S];const O=await F(n,w);const R=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(f){R.push(O[x])}if(u){const t=b(i,s,A);R.push(O[t[0]],O[t[1]])}E=[...E,{placement:i,overflows:R}];if(!R.every((t=>t<=0))){var M,T;const t=(((M=r.flip)==null?void 0:M.index)||0)+1;const n=D[t];if(n){return{data:{index:t,overflows:E},reset:{placement:n}}}let e=(T=E.filter((t=>t.overflows[0]<=0)).sort(((t,n)=>t.overflows[1]-n.overflows[1]))[0])==null?void 0:T.placement;if(!e){switch(m){case"bestFit":{var C;const t=(C=E.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,n)=>t+n),0)])).sort(((t,n)=>t[1]-n[1]))[0])==null?void 0:C[0];if(t){e=t}break}case"initialPlacement":e=c;break}}if(i!==e){return{reset:{placement:e}}}}return{}}}};function j(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function z(t){return o.some((n=>t[n]>=0))}const H=function(t){if(t===void 0){t={}}return{name:"hide",options:t,async fn(n){const{rects:e}=n;const{strategy:o="referenceHidden",...i}=p(t,n);switch(o){case"referenceHidden":{const t=await F(n,{...i,elementContext:"reference"});const o=j(t,e.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:z(o)}}}case"escaped":{const t=await F(n,{...i,altBoundary:true});const o=j(t,e.floating);return{data:{escapedOffsets:o,escaped:z(o)}}}default:{return{}}}}}};async function W(t,n){const{placement:e,platform:o,elements:i}=t;const r=await(o.isRTL==null?void 0:o.isRTL(i.floating));const s=y(e);const c=h(e);const a=x(e)==="y";const l=["left","top"].includes(s)?-1:1;const f=r&&a?-1:1;const u=p(n,t);let{mainAxis:d,crossAxis:m,alignmentAxis:g}=typeof u==="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};if(c&&typeof g==="number"){m=c==="end"?g*-1:g}return a?{x:m*f,y:d*l}:{x:d*l,y:m*f}}const I=function(t){if(t===void 0){t=0}return{name:"offset",options:t,async fn(n){const{x:e,y:o}=n;const i=await W(n,t);return{x:e+i.x,y:o+i.y,data:i}}}};const N=function(t){if(t===void 0){t={}}return{name:"shift",options:t,async fn(n){const{x:e,y:o,placement:i}=n;const{mainAxis:r=true,crossAxis:s=false,limiter:c={fn:t=>{let{x:n,y:e}=t;return{x:n,y:e}}},...a}=p(t,n);const l={x:e,y:o};const f=await F(n,a);const u=x(y(i));const d=g(u);let h=l[d];let w=l[u];if(r){const t=d==="y"?"top":"left";const n=d==="y"?"bottom":"right";const e=h+f[t];const o=h-f[n];h=m(e,h,o)}if(s){const t=u==="y"?"top":"left";const n=u==="y"?"bottom":"right";const e=w+f[t];const o=w-f[n];w=m(e,w,o)}const v=c.fn({...n,[d]:h,[u]:w});return{...v,data:{x:v.x-e,y:v.y-o}}}}};function _(t){if(Q(t)){return(t.nodeName||"").toLowerCase()}return"#document"}function q(t){var n;return(t==null?void 0:(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Y(t){var n;return(n=(Q(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function Q(t){return t instanceof Node||t instanceof q(t).Node}function V(t){return t instanceof Element||t instanceof q(t).Element}function X(t){return t instanceof HTMLElement||t instanceof q(t).HTMLElement}function Z(t){if(typeof ShadowRoot==="undefined"){return false}return t instanceof ShadowRoot||t instanceof q(t).ShadowRoot}function G(t){const{overflow:n,overflowX:e,overflowY:o,display:i}=et(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+e)&&!["inline","contents"].includes(i)}function J(t){return["table","td","th"].includes(_(t))}function K(t){const n=tt();const e=et(t);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":false)||!n&&(e.backdropFilter?e.backdropFilter!=="none":false)||!n&&(e.filter?e.filter!=="none":false)||["transform","perspective","filter"].some((t=>(e.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(e.contain||"").includes(t)))}function U(t){let n=it(t);while(X(n)&&!nt(n)){if(K(n)){return n}else{n=it(n)}}return null}function tt(){if(typeof CSS==="undefined"||!CSS.supports)return false;return CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(_(t))}function et(t){return q(t).getComputedStyle(t)}function ot(t){if(V(t)){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function it(t){if(_(t)==="html"){return t}const n=t.assignedSlot||t.parentNode||Z(t)&&t.host||Y(t);return Z(n)?n.host:n}function rt(t){const n=it(t);if(nt(n)){return t.ownerDocument?t.ownerDocument.body:t.body}if(X(n)&&G(n)){return n}return rt(n)}function st(t,n,e){var o;if(n===void 0){n=[]}if(e===void 0){e=true}const i=rt(t);const r=i===((o=t.ownerDocument)==null?void 0:o.body);const s=q(i);if(r){return n.concat(s,s.visualViewport||[],G(i)?i:[],s.frameElement&&e?st(s.frameElement):[])}return n.concat(i,st(i,[],e))}function ct(t){const n=et(t);let e=parseFloat(n.width)||0;let o=parseFloat(n.height)||0;const i=X(t);const r=i?t.offsetWidth:e;const s=i?t.offsetHeight:o;const c=a(e)!==r||a(o)!==s;if(c){e=r;o=s}return{width:e,height:o,$:c}}function at(t){return!V(t)?t.contextElement:t}function lt(t){const n=at(t);if(!X(n)){return f(1)}const e=n.getBoundingClientRect();const{width:o,height:i,$:r}=ct(n);let s=(r?a(e.width):e.width)/o;let c=(r?a(e.height):e.height)/i;if(!s||!Number.isFinite(s)){s=1}if(!c||!Number.isFinite(c)){c=1}return{x:s,y:c}}const ft=f(0);function ut(t){const n=q(t);if(!tt()||!n.visualViewport){return ft}return{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function dt(t,n,e){if(n===void 0){n=false}if(!e||n&&e!==q(t)){return false}return n}function mt(t,n,e,o){if(n===void 0){n=false}if(e===void 0){e=false}const i=t.getBoundingClientRect();const r=at(t);let s=f(1);if(n){if(o){if(V(o)){s=lt(o)}}else{s=lt(t)}}const c=dt(r,e,o)?ut(r):f(0);let a=(i.left+c.x)/s.x;let l=(i.top+c.y)/s.y;let u=i.width/s.x;let d=i.height/s.y;if(r){const t=q(r);const n=o&&V(o)?q(o):o;let e=t.frameElement;while(e&&o&&n!==t){const t=lt(e);const n=e.getBoundingClientRect();const o=et(e);const i=n.left+(e.clientLeft+parseFloat(o.paddingLeft))*t.x;const r=n.top+(e.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x;l*=t.y;u*=t.x;d*=t.y;a+=i;l+=r;e=q(e).frameElement}}return R({width:u,height:d,x:a,y:l})}function pt(t){let{rect:n,offsetParent:e,strategy:o}=t;const i=X(e);const r=Y(e);if(e===r){return n}let s={scrollLeft:0,scrollTop:0};let c=f(1);const a=f(0);if(i||!i&&o!=="fixed"){if(_(e)!=="body"||G(r)){s=ot(e)}if(X(e)){const t=mt(e);c=lt(e);a.x=t.x+e.clientLeft;a.y=t.y+e.clientTop}}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+a.x,y:n.y*c.y-s.scrollTop*c.y+a.y}}function yt(t){return Array.from(t.getClientRects())}function ht(t){return mt(Y(t)).left+ot(t).scrollLeft}function gt(t){const n=Y(t);const e=ot(t);const o=t.ownerDocument.body;const i=c(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth);const r=c(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let s=-e.scrollLeft+ht(t);const a=-e.scrollTop;if(et(o).direction==="rtl"){s+=c(n.clientWidth,o.clientWidth)-i}return{width:i,height:r,x:s,y:a}}function wt(t,n){const e=q(t);const o=Y(t);const i=e.visualViewport;let r=o.clientWidth;let s=o.clientHeight;let c=0;let a=0;if(i){r=i.width;s=i.height;const t=tt();if(!t||t&&n==="fixed"){c=i.offsetLeft;a=i.offsetTop}}return{width:r,height:s,x:c,y:a}}function xt(t,n){const e=mt(t,true,n==="fixed");const o=e.top+t.clientTop;const i=e.left+t.clientLeft;const r=X(t)?lt(t):f(1);const s=t.clientWidth*r.x;const c=t.clientHeight*r.y;const a=i*r.x;const l=o*r.y;return{width:s,height:c,x:a,y:l}}function vt(t,n,e){let o;if(n==="viewport"){o=wt(t,e)}else if(n==="document"){o=gt(Y(t))}else if(V(n)){o=xt(n,e)}else{const e=ut(t);o={...n,x:n.x-e.x,y:n.y-e.y}}return R(o)}function bt(t,n){const e=it(t);if(e===n||!V(e)||nt(e)){return false}return et(e).position==="fixed"||bt(e,n)}function kt(t,n){const e=n.get(t);if(e){return e}let o=st(t,[],false).filter((t=>V(t)&&_(t)!=="body"));let i=null;const r=et(t).position==="fixed";let s=r?it(t):t;while(V(s)&&!nt(s)){const n=et(s);const e=K(s);if(!e&&n.position==="fixed"){i=null}const c=r?!e&&!i:!e&&n.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(s)&&!e&&bt(t,s);if(c){o=o.filter((t=>t!==s))}else{i=n}s=it(s)}n.set(t,o);return o}function At(t){let{element:n,boundary:e,rootBoundary:o,strategy:i}=t;const r=e==="clippingAncestors"?kt(n,this._c):[].concat(e);const a=[...r,o];const l=a[0];const f=a.reduce(((t,e)=>{const o=vt(n,e,i);t.top=c(o.top,t.top);t.right=s(o.right,t.right);t.bottom=s(o.bottom,t.bottom);t.left=c(o.left,t.left);return t}),vt(n,l,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function St(t){return ct(t)}function Pt(t,n,e){const o=X(n);const i=Y(n);const r=e==="fixed";const s=mt(t,true,r,n);let c={scrollLeft:0,scrollTop:0};const a=f(0);if(o||!o&&!r){if(_(n)!=="body"||G(i)){c=ot(n)}if(o){const t=mt(n,true,r,n);a.x=t.x+n.clientLeft;a.y=t.y+n.clientTop}else if(i){a.x=ht(i)}}return{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function $t(t,n){if(!X(t)||et(t).position==="fixed"){return null}if(n){return n(t)}return t.offsetParent}function Dt(t,n){const e=q(t);if(!X(t)){return e}let o=$t(t,n);while(o&&J(o)&&et(o).position==="static"){o=$t(o,n)}if(o&&(_(o)==="html"||_(o)==="body"&&et(o).position==="static"&&!K(o))){return e}return o||U(t)||e}const Ot=async function(t){let{reference:n,floating:e,strategy:o}=t;const i=this.getOffsetParent||Dt;const r=this.getDimensions;return{reference:Pt(n,await i(e),o),floating:{x:0,y:0,...await r(e)}}};function Rt(t){return et(t).direction==="rtl"}const Et={convertOffsetParentRelativeRectToViewportRelativeRect:pt,getDocumentElement:Y,getClippingRect:At,getOffsetParent:Dt,getElementRects:Ot,getClientRects:yt,getDimensions:St,getScale:lt,isElement:V,isRTL:Rt};function Mt(t,n){let e=null;let o;const i=Y(t);function r(){clearTimeout(o);e&&e.disconnect();e=null}function a(f,u){if(f===void 0){f=false}if(u===void 0){u=1}r();const{left:d,top:m,width:p,height:y}=t.getBoundingClientRect();if(!f){n()}if(!p||!y){return}const h=l(m);const g=l(i.clientWidth-(d+p));const w=l(i.clientHeight-(m+y));const x=l(d);const v=-h+"px "+-g+"px "+-w+"px "+-x+"px";const b={rootMargin:v,threshold:c(0,s(1,u))||1};let k=true;function A(t){const n=t[0].intersectionRatio;if(n!==u){if(!k){return a()}if(!n){o=setTimeout((()=>{a(false,1e-7)}),100)}else{a(false,n)}}k=false}try{e=new IntersectionObserver(A,{...b,root:i.ownerDocument})}catch(t){e=new IntersectionObserver(A,b)}e.observe(t)}a(true);return r}function Ft(t,n,e,o){if(o===void 0){o={}}const{ancestorScroll:i=true,ancestorResize:r=true,elementResize:s=typeof ResizeObserver==="function",layoutShift:c=typeof IntersectionObserver==="function",animationFrame:a=false}=o;const l=at(t);const f=i||r?[...l?st(l):[],...st(n)]:[];f.forEach((t=>{i&&t.addEventListener("scroll",e,{passive:true});r&&t.addEventListener("resize",e)}));const u=l&&c?Mt(l,e):null;let d=-1;let m=null;if(s){m=new ResizeObserver((t=>{let[o]=t;if(o&&o.target===l&&m){m.unobserve(n);cancelAnimationFrame(d);d=requestAnimationFrame((()=>{m&&m.observe(n)}))}e()}));if(l&&!a){m.observe(l)}m.observe(n)}let p;let y=a?mt(t):null;if(a){h()}function h(){const n=mt(t);if(y&&(n.x!==y.x||n.y!==y.y||n.width!==y.width||n.height!==y.height)){e()}y=n;p=requestAnimationFrame(h)}e();return()=>{f.forEach((t=>{i&&t.removeEventListener("scroll",e);r&&t.removeEventListener("resize",e)}));u&&u();m&&m.disconnect();m=null;if(a){cancelAnimationFrame(p)}}}const Tt=(t,n,e)=>{const o=new Map;const i={platform:Et,...e};const r={...i.platform,_c:o};return M(t,n,{...i,platform:r})};function Ct(t){return Bt(t)}function Lt(t){if(t.assignedSlot){return t.assignedSlot}if(t.parentNode instanceof ShadowRoot){return t.parentNode.host}return t.parentNode}function Bt(t){for(let n=t;n;n=Lt(n)){if(!(n instanceof Element)){continue}if(getComputedStyle(n).display==="none"){return null}}for(let n=Lt(t);n;n=Lt(n)){if(!(n instanceof Element)){continue}const t=getComputedStyle(n);if(t.display==="contents"){continue}if(t.position!=="static"||t.filter!=="none"){return n}if(n.tagName==="BODY"){return n}}return null}(function t(){{const t=Et.getOffsetParent;Et.getOffsetParent=n=>t(n,Ct)}})();const jt=async(t,{referenceEl:n,floatingEl:e,overlayPositioning:o="absolute",placement:i,flipDisabled:r,flipPlacements:s,offsetDistance:c,offsetSkidding:a,arrowEl:l,type:f})=>{if(!n||!e){return null}const{x:u,y:d,placement:m,strategy:p,middlewareData:y}=await Tt(n,e,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?undefined:qt(e,i),middleware:Nt({placement:i,flipDisabled:r,flipPlacements:s,offsetDistance:c,offsetSkidding:a,arrowEl:l,type:f})});if(l&&y.arrow){const{x:n,y:e}=y.arrow;const o=m.split("-")[0];const i=n!=null?"left":"top";const r=Vt[o];const s={left:"",top:"",bottom:"",right:""};if("floatingLayout"in t){t.floatingLayout=o==="left"||o==="right"?"horizontal":"vertical"}Object.assign(l.style,{...s,[i]:`${i=="left"?n:e}px`,[o]:"100%",transform:r})}const h=y.hide?.referenceHidden;const g=h?"hidden":null;const w=g?"none":null;e.setAttribute(zt,m);const x=`translate(${Math.round(u)}px,${Math.round(d)}px)`;Object.assign(e.style,{visibility:g,pointerEvents:w,position:p,top:"0",left:"0",transform:x})};const zt="data-placement";const Ht=100;const Wt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"];const It={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Nt({placement:t,flipDisabled:n,flipPlacements:e,offsetDistance:o,offsetSkidding:i,arrowEl:r,type:s}){const c=[N(),H()];if(s==="menu"){return[...c,B({fallbackPlacements:e||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]}if(s==="popover"||s==="tooltip"){const s=[...c,I({mainAxis:typeof o==="number"?o:0,crossAxis:typeof i==="number"?i:0})];if(t==="auto"||t==="auto-start"||t==="auto-end"){s.push(L({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null}))}else if(!n){s.push(B(e?{fallbackPlacements:e}:{}))}if(r){s.push(T({element:r}))}return s}return[]}function _t(t,n){const e=t.filter((t=>Wt.includes(t)));if(e.length!==t.length){console.warn(`${n.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Wt.map((t=>`"${t}"`)).join(", ").trim()}`,{el:n})}return e}function qt(n,e){const o=["left","right"];if(t(n)==="rtl"){o.reverse()}return e.replace(/leading/gi,o[0]).replace(/trailing/gi,o[1])}async function Yt(t,n,e=false){if(!t.open){return}const o=e?Qt(t):jt;return o(t,n)}function Qt(t){let n=Zt.get(t);if(n){return n}n=e(jt,Ht,{leading:true,maxWait:Ht});Zt.set(t,n);return n}const Vt={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"};const Xt=new WeakMap;const Zt=new WeakMap;function Gt(t,n,e){if(!e||!n){return}Jt(t,n,e);Object.assign(e.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const o=Ft;Xt.set(t,o(n,e,(()=>t.reposition())))}function Jt(t,n,e){if(!e||!n){return}Xt.get(t)?.();Xt.delete(t);Zt.get(t)?.cancel();Zt.delete(t)}const Kt=4;const Ut=Math.ceil(Math.hypot(Kt,Kt));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.0
 */const tn={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const nn={width:12,height:6,strokeWidth:1};const en=({floatingLayout:t,key:e,ref:o})=>{const{width:i,height:r,strokeWidth:s}=nn;const c=i/2;const a=t==="vertical";const l="M0,0"+` H${i}`+` L${i-c},${r}`+` Q${c},${r} ${c},${r}`+" Z";return n("svg",{"aria-hidden":"true",class:tn.arrow,height:i,key:e,ref:o,viewBox:`0 0 ${i} ${i+(!a?s:0)}`,width:i+(a?s:0)},s>0&&n("path",{class:tn.arrowStroke,d:l,fill:"none","stroke-width":s+1}),n("path",{d:l,stroke:"none"}))};export{It as F,Jt as a,en as b,Gt as c,Ut as d,_t as f,Yt as r};
//# sourceMappingURL=p-571eb96b.js.map
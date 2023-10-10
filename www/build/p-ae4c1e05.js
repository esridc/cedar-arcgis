import{fS as t,af as s}from"./p-b54724b6.js";import{o as i}from"./p-a3e88624.js";import{r as o,i as r,M as n,f as e,h as a}from"./p-52a9dec5.js";import{e as h}from"./p-07f12c16.js";import{t as p}from"./p-2d1dac84.js";import{r as c}from"./p-b4b7d6a0.js";import{v as m}from"./p-a5e3ec2a.js";import{a as l}from"./p-843f0c78.js";import{e as f}from"./p-29040467.js";import{c as u,u as d}from"./p-1fd43aa6.js";import{R as v,E as _,C as y,F as j,I as g}from"./p-13e550f5.js";const x=Math.PI/180,b=4;class M extends l{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=h(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=t(this._program)}doRender(t){const{context:s}=t,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(s),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(s,i),s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setColorMask(!0,!0,!0,!0);const o=this._program;s.bindVAO(this._vao),s.useProgram(o),o.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),s.gl.lineWidth(1),s.drawElements(_.LINES,8*i.length,y.UNSIGNED_INT,0),s.bindVAO()}_createTransforms(){return{dvs:h()}}_createShaderProgram(t){if(this._program)return;const s="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",i="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=t.programCache.acquire(s,i,w().attributes)}_updateMatricesAndLocalOrigin(t){const{state:s}=t,{displayMat3:i,size:h,resolution:l,pixelRatio:f,rotation:u,viewpoint:d}=s,v=x*u,{x:_,y}=d.targetGeometry,j=m(_,s.spatialReference);this._localOrigin.x=j,this._localOrigin.y=y;const g=f*h[0],b=f*h[1],M=l*g,w=l*b,A=o(this._dvsMat3);r(A,A,i),n(A,A,p(g/2,b/2)),e(A,A,c(h[0]/M,-b/w,1)),a(A,A,-v)}_updateBufferData(t,s){const{x:i,y:o}=this._localOrigin,r=2*b*s.length,n=new Float32Array(r),e=new Uint32Array(8*s.length);let a=0,h=0;for(const t of s)t&&(n[2*a]=t[0]-i,n[2*a+1]=t[1]-o,n[2*a+2]=t[0]-i,n[2*a+3]=t[3]-o,n[2*a+4]=t[2]-i,n[2*a+5]=t[3]-o,n[2*a+6]=t[2]-i,n[2*a+7]=t[1]-o,e[h]=a+0,e[h+1]=a+3,e[h+2]=a+3,e[h+3]=a+2,e[h+4]=a+2,e[h+5]=a+1,e[h+6]=a+1,e[h+7]=a+0,a+=4,h+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=u.createVertex(t,j.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(e):this._indexBuffer=u.createIndex(t,j.DYNAMIC_DRAW,e),!this._vao){const s=w();this._vao=new d(t,s.attributes,s.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const w=()=>f("bounds",{geometry:[{location:0,name:"a_position",count:2,type:y.FLOAT}]});let A=class extends i{constructor(t){super(t),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=s(this._boundsRenderer)}enableRenderingBounds(t){this._boundsRenderer=new M(t),this.requestRender()}get hasLabels(){return!1}onTileData(t,s){t.patch(s),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){t.clear(),this.contains(t)||this.addChild(t)}_renderChildren(t,s){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(t),t.context.setStencilFunction(g.EQUAL,i.stencilRef,255),i.getDisplayList().replay(t,i,s))}};export{A as n};
//# sourceMappingURL=p-ae4c1e05.js.map
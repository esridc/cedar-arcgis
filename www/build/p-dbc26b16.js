import{bX as t,w as s,b as e,ee as i,l as a,y as n,n as r,a3 as o,Q as h,a6 as c,aT as l,ad as u,M as d}from"./p-b54724b6.js";import{c as f,u as p}from"./p-1fd43aa6.js";import{R as m,E as _,F as y,G as w,D as g,C as v,I as x,O as b}from"./p-13e550f5.js";import{T as S,b as M}from"./p-49f0006c.js";import{t as z}from"./p-795f7c81.js";import{q as R,t as P,_ as D}from"./p-f7376ac9.js";import{e as k}from"./p-07f12c16.js";import{g as A,i as F}from"./p-0fe6a545.js";import{T,e as C}from"./p-29040467.js";import{l as O,f as j,M as V,h as I,r as L,b as q,i as E}from"./p-52a9dec5.js";import{a as $}from"./p-843f0c78.js";import{t as U}from"./p-2d1dac84.js";function Z(s){const e=G(B(s)),i=e,a=!0,n=Math.max(e/2,5),r=Math.round(t(s.maxPathLength)/n)+1,o=10,{density:h}=s;return{smoothing:t(s.smoothing),interpolate:!0,velocityScale:"flow-from"===s.flowRepresentation?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:n,maxTurnAngle:1,collisions:a,lineCollisionWidth:i,lineSpacing:o,density:h}}function G(t){return"constant"===t.kind?t.value[0]:t.values[t.values.length-1]}function J(t){const s=t.toRgba();return[s[0]/255,s[1]/255,s[2]/255,s[3]]}function N(t){return{kind:"constant",value:[.1,.1,.1,1]}}function B(s){if(!s.hasVisualVariables("size"))return{kind:"constant",value:[t(s.trailWidth)]};const e=s.getVisualVariablesForType("size")[0],i=[],a=[];let n;if(e.stops){for(const s of e.stops)i.push(s.value),a.push(t(s.size));n=e.stops.length}else i.push(e.minDataValue,e.maxDataValue),a.push(t(e.minSize),t(e.maxSize)),n=2;return{kind:"ramp",stops:i,values:a,count:n}}function Q(t){if(!t.hasVisualVariables("color"))return{kind:"constant",value:J(t.color)};const s=t.getVisualVariablesForType("color")[0],e=[],i=[];for(const t of s.stops)e.push(t.value),Array.prototype.push.apply(i,J(t.color));return{kind:"ramp",stops:e,values:i,count:s.stops.length}}function W(t){if(!t.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const s=t.getVisualVariablesForType("opacity")[0],e=[],i=[];for(const t of s.stops)e.push(t.value),i.push(t.opacity);return{kind:"ramp",stops:e,values:i,count:s.stops.length}}function X(t,s,e,i){switch(s){case"int":t.setUniform1iv(e,i);break;case"float":t.setUniform1fv(e,i);break;case"vec2":t.setUniform2fv(e,i);break;case"vec3":t.setUniform3fv(e,i);break;case"vec4":t.setUniform4fv(e,i)}}function H(t,s,e,i){"constant"===i.kind?X(t,e,`u_${s}`,i.value):(X(t,"float",`u_${s}_stops`,i.stops),X(t,e,`u_${s}_values`,i.values),t.setUniform1i(`u_${s}_count`,i.count))}function K(t,s){let e=!0;return e=e&&t.collisions===s.collisions,e=e&&t.density===s.density,e=e&&t.interpolate===s.interpolate,e=e&&t.lineCollisionWidth===s.lineCollisionWidth,e=e&&t.lineSpacing===s.lineSpacing,e=e&&t.maxTurnAngle===s.maxTurnAngle,e=e&&t.minSpeedThreshold===s.minSpeedThreshold,e=e&&t.segmentLength===s.segmentLength,e=e&&t.smoothing===s.smoothing,e=e&&t.velocityScale===s.velocityScale,e=e&&t.verticesPerLine===s.verticesPerLine,e}function Y(t,s){return t===s||null!=t&&null!=s&&t.equals(s)}function tt(t,s){if(!K(t.simulationSettings,s.simulationSettings))return!1;if(!Y(t.timeExtent,s.timeExtent))return!1;let e=!0;return e=e&&t.loadImagery===s.loadImagery,e=e&&t.createFlowMesh===s.createFlowMesh,e=e&&t.color.kind===s.color.kind,e=e&&t.opacity.kind===s.opacity.kind,e=e&&t.size.kind===s.size.kind,e}class st{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof st))return!1;if(!Y(this._params.timeExtent,t._params.timeExtent))return!1;let s=!0;return s=s&&this._params.loadImagery===t._params.loadImagery,s=s&&this._params.color.kind===t._params.color.kind,s=s&&this._params.opacity.kind===t._params.opacity.kind,s}async load(t,e){const{extent:i,size:a}=t;s(e);const n=await this._params.loadImagery(i,a[0],a[1],this._params.timeExtent,e);return new nt(n,{color:this._params.color,opacity:this._params.opacity})}render(t,s,e){const{context:i}=t,{program:a}=e;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),i.useProgram(a),a.setUniformMatrix3fv("u_dvsMat3",s.dvsMat3),i.bindTexture(e.texture,0),a.setUniform1i("u_texture",0),a.setUniform1f("u_Min",e.min),a.setUniform1f("u_Max",e.max),H(a,"color","vec4",this._params.color),H(a,"opacity","float",this._params.opacity),i.bindVAO(e.vertexArray),i.drawArrays(_.TRIANGLE_STRIP,0,4)}}const et=new Map;et.set("a_position",0),et.set("a_texcoord",1);const it={geometry:[new z("a_position",2,v.UNSIGNED_SHORT,0,8),new z("a_texcoord",2,v.UNSIGNED_SHORT,4,8)]},at={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:et};class nt{constructor(t,s){this._flowData=t,this._values=s}attach(t){const{context:s}=t,{width:e,height:i}=this._flowData,a=f.createVertex(s,y.STATIC_DRAW,new Uint16Array([0,0,0,1,e,0,1,1,0,i,0,0,e,i,1,0])),n=new p(s,et,it,{geometry:a}),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity");const o=t.painter.materialManager.getProgram(at,r);let h=1e6,c=-1e6;for(let t=0;t<i;t++)for(let s=0;s<e;s++)if(0!==this._flowData.mask[t*e+s]){const i=this._flowData.data[2*(t*e+s)],a=this._flowData.data[2*(t*e+s)+1],n=Math.sqrt(i*i+a*a);h=Math.min(h,n),c=Math.max(c,n)}const l=new Uint8Array(4*e*i);for(let t=0;t<i;t++)for(let s=0;s<e;s++)if(0!==this._flowData.mask[t*e+s]){const i=this._flowData.data[2*(t*e+s)],a=this._flowData.data[2*(t*e+s)+1],n=(Math.sqrt(i*i+a*a)-h)/(c-h);l[4*(t*e+s)]=255*n,l[4*(t*e+s)+1]=0,l[4*(t*e+s)+2]=0,l[4*(t*e+s)+3]=255}else l[4*(t*e+s)]=0,l[4*(t*e+s)+1]=0,l[4*(t*e+s)+2]=0,l[4*(t*e+s)+3]=0;const u=new M;u.internalFormat=w.RGBA,u.wrapMode=g.CLAMP_TO_EDGE,u.flipped=!0,u.width=e,u.height=i;const d=new S(s,u,l);this.vertexArray=n,this.program=o,this.texture=d,this.min=h,this.max=c,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}class rt{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof rt&&tt(this._params,t._params)}async load(t,e){const{extent:i,size:a}=t;s(e);const n=await this._params.loadImagery(i,a[0],a[1],this._params.timeExtent,e),{vertexData:r,indexData:o}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,n,e);return new lt(r,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,s,e){const{context:i}=t,{program:a}=e;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),i.useProgram(a),a.setUniform1f("u_time",s.time),a.setUniform1f("u_trailLength",this._params.trailLength),a.setUniform1f("u_flowSpeed",this._params.flowSpeed),a.setUniform1f("u_featheringSize",this._params.featheringSize),a.setUniform1f("u_featheringOffset",this._params.featheringOffset),a.setUniform1f("u_introFade",this._params.introFade?1:0),a.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),a.setUniform1f("u_decayRate",this._params.decayRate),a.setUniformMatrix3fv("u_dvsMat3",s.dvsMat3),a.setUniformMatrix3fv("u_displayViewMat3",s.displayViewMat3),H(a,"color","vec4",this._params.color),H(a,"opacity","float",this._params.opacity),H(a,"size","float",this._params.size),i.bindVAO(e.vertexArray),i.drawElements(_.TRIANGLES,e.indexCount,v.UNSIGNED_INT,0)}}const ot=new Map;ot.set("a_xyts0",0),ot.set("a_xyts1",1),ot.set("a_typeIdDurationSeed",2),ot.set("a_extrudeInfo",3);const ht={geometry:[new z("a_xyts0",4,v.FLOAT,0,64),new z("a_xyts1",4,v.FLOAT,16,64),new z("a_typeIdDurationSeed",4,v.FLOAT,32,64),new z("a_extrudeInfo",4,v.FLOAT,48,64)]},ct={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:ot};class lt{constructor(t,s,e){this._vertexData=t,this._indexData=s,this._values=e}attach(t){const{context:s}=t,e=f.createVertex(s,y.STATIC_DRAW,this._vertexData),i=f.createIndex(s,y.STATIC_DRAW,this._indexData),a=new p(s,ot,ht,{geometry:e},i),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity"),"ramp"===this._values.size.kind&&n.push("vvSize");const r=t.painter.materialManager.getProgram(ct,n);this.vertexArray=a,this.program=r,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}class ut{constructor(t){this._styles=t}get animated(){return this._styles.reduce(((t,s)=>t||s.animated),!1)}isCompatible(t){if(!(t instanceof ut))return!1;if(this._styles.length!==t._styles.length)return!1;const s=this._styles.length;for(let e=0;e<s;e++)if(!this._styles[e].isCompatible(t._styles[e]))return!1;return!0}async load(t,s){const e=await Promise.all(this._styles.map((e=>e.load(t,s))));return new dt(e)}render(t,s,e){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,s,e.resources[i])}}class dt{constructor(t){this.resources=t}attach(t){for(const s of this.resources)s.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce(((t,s)=>t&&s.ready),!0)}}class ft{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof ft&&tt(this._params,t._params)}async load(t,e){const{extent:i,size:a}=t;s(e);const n=await this._params.loadImagery(i,a[0],a[1],this._params.timeExtent,e),{vertexData:r,indexData:o}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,n,e);return new yt(r,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,s,e){const{context:i}=t,{program:a}=e;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),i.useProgram(a),a.setUniform1f("u_time",s.time),a.setUniform1f("u_trailLength",this._params.trailLength),a.setUniform1f("u_flowSpeed",this._params.flowSpeed),a.setUniform1f("u_featheringSize",this._params.featheringSize),a.setUniform1f("u_featheringOffset",this._params.featheringOffset),a.setUniform1f("u_introFade",this._params.introFade?1:0),a.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),a.setUniform1f("u_decayRate",this._params.decayRate),a.setUniformMatrix3fv("u_dvsMat3",s.dvsMat3),a.setUniformMatrix3fv("u_displayViewMat3",s.displayViewMat3),H(a,"color","vec4",this._params.color),H(a,"opacity","float",this._params.opacity),H(a,"size","float",this._params.size),i.bindVAO(e.vertexArray),i.drawElements(_.TRIANGLES,e.indexCount,v.UNSIGNED_INT,0)}}const pt=new Map;pt.set("a_positionAndSide",0),pt.set("a_timeInfo",1),pt.set("a_extrude",2),pt.set("a_speed",3);const mt={geometry:[new z("a_positionAndSide",3,v.FLOAT,0,36),new z("a_timeInfo",3,v.FLOAT,12,36),new z("a_extrude",2,v.FLOAT,24,36),new z("a_speed",1,v.FLOAT,32,36)]},_t={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:pt};class yt{constructor(t,s,e){this._vertexData=t,this._indexData=s,this._values=e}attach(t){const{context:s}=t,e=f.createVertex(s,y.STATIC_DRAW,this._vertexData),i=f.createIndex(s,y.STATIC_DRAW,this._indexData),a=new p(s,pt,mt,{geometry:e},i),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity"),"ramp"===this._values.size.kind&&n.push("vvSize");const r=t.painter.materialManager.getProgram(_t,n);this.vertexArray=a,this.program=r,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}const wt=4,gt=1,vt=.5,xt=!0,bt=!0,St=2.3;function Mt(t,s){const{flowSpeed:e,trailLength:i}=t,a=Z(t);let n=null;const r={opacity:W(t),size:B(t)};let o=Q(t);if("none"===t.background)r.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const t={loadImagery:s.loadImagery,timeExtent:s.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};n=new st(t),r.color=N()}const h={loadImagery:s.loadImagery,createFlowMesh:s.createFlowMesh,simulationSettings:a,timeExtent:s.timeExtent,trailLength:i,flowSpeed:e,featheringSize:gt,featheringOffset:vt,introFade:xt,fadeToZero:bt,decayRate:St,color:r.color,opacity:r.opacity,size:r.size},c="butt"===t.trailCap||G(B(t))<=wt?new ft(h):new rt(h);return null!=n?new ut([n,c]):c}class zt extends A{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:k(),displayViewMat3:k()}}dispose(){}prepareState(t){const{context:s}=t;s.setColorMask(!0,!0,!0,!0),s.setStencilFunction(x.EQUAL,0,255)}draw(t,s){const{requestRender:e,allowDelayedRender:i}=t,{displayData:a}=s;if(null==a)return;if("loaded"===a.state.name&&a.attach(t),"attached"!==a.state.name)return;const n=a.state.resources;!i||n.ready||null==e?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=s.transforms.dvs,this._visualState.displayViewMat3=t.state.displayViewMat3,a.flowStyle.render(t,this._visualState,n),a.flowStyle.animated&&null!=e&&e()):e()}}class Rt extends F{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const s=t.registerRenderPass({name:"flow",brushes:[zt],target:()=>this.children,drawPhase:T.MAP});return[...super.prepareRenderPasses(t),s]}}class Pt{constructor(t,s,e,i){this.state={name:"created"},this.flowStyle=t,this.extent=s,this.size=e,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const s={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e=await this.flowStyle.load(s,t.signal);this.state={name:"loaded",resources:e}}attach(t){if("loaded"!==this.state.name)return void e.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const s=this.state.resources;s.attach(t),this.state={name:"attached",resources:s}}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){if(!this.flowStyle.isCompatible(t.flowStyle))return!1;return!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0)}}class Dt extends ${constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:s}=this;if(null==s)return;const e=s.extent.xmin,a=s.extent.ymax,n=[0,0];t.toScreen(n,[e,a]);const r=(s.extent.xmax-s.extent.xmin)/s.size[0]/t.resolution,o=i(t.rotation),{dvs:h}=this.transforms;O(h,[-1,1,0]),j(h,h,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),V(h,h,[n[0],n[1],0]),I(h,h,o),j(h,h,[r*t.pixelRatio,r*t.pixelRatio,1])}_createTransforms(){return{dvs:k()}}}const kt=1.15;let At=class extends o{constructor(t){super(t),this._flowDisplayObject=new Dt,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:s}=this.flowContainer;if(null==s)return void this._clear();const{extent:i,rotation:a,resolution:n,pixelRatio:r}=t.state,o=Tt(i,a);o.expand(kt);const c=[Math.round((o.xmax-o.xmin)/n),Math.round((o.ymax-o.ymin)/n)],l=new Pt(s,o,c,r);if(null!=this._loading){if(this._loading.update(l))return;this._loading.detach(),this._loading=null}null!=this._flowDisplayObject.displayData&&this._flowDisplayObject.displayData.update(l)||(l.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{h(t)||(e.getLogger(this).error("A resource failed to load.",t),this._loading=null)})),this._loading=l)}_clear(){this._flowDisplayObject.clear(),null!=this._loading&&(this._loading.detach(),this._loading=null)}};a([n()],At.prototype,"_loading",void 0),a([n()],At.prototype,"flowContainer",void 0),a([n()],At.prototype,"updating",null),At=a([r("esri.views.2d.engine.flow.FlowStrategy")],At);const Ft=At;function Tt(t,s){const e=new c({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),a=t.xmax-t.xmin,n=t.ymax-t.ymin,r=Math.abs(Math.cos(i(s))),o=Math.abs(Math.sin(i(s))),h=r*a+o*n,u=o*a+r*n,d=new l({xmin:e.x-h/2,ymin:e.y-u/2,xmax:e.x+h/2,ymax:e.y+u/2,spatialReference:t.spatialReference});return d.centerAt(e),d}let Ct=class extends o{constructor(){super(...arguments),this._loadImagery=(t,s,e,i,a)=>R(this.layer,t,s,e,i,a),this._createFlowMesh=(t,s,e,i)=>this.layer.createFlowMesh({meshType:t,flowData:e,simulationSettings:s},{signal:i}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:t}=this,s=()=>{this._loadImagery=(s,e,i,a,n)=>R(t,s,e,i,a,n),this._updateVisualization()};"multidimensionalDefinition"in t?this.addHandles(u((()=>t.multidimensionalDefinition),s)):this.addHandles([u((()=>t.mosaicRule),s),u((()=>t.rasterFunction),s),u((()=>t.definitionExpression),s)]),this.container=new Rt,this._strategy=new Ft({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new d({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const t=this.layer.renderer;if(null==t||"flow"!==t.type)return;const s=Mt(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=s,this.layerView.requestUpdate()}};a([n()],Ct.prototype,"_strategy",void 0),a([n()],Ct.prototype,"attached",void 0),a([n()],Ct.prototype,"container",void 0),a([n()],Ct.prototype,"layer",void 0),a([n()],Ct.prototype,"layerView",void 0),a([n()],Ct.prototype,"type",void 0),a([n()],Ct.prototype,"updating",null),a([n()],Ct.prototype,"timeExtent",void 0),Ct=a([r("esri.views.2d.engine.flow.FlowView2D")],Ct);const Ot=Ct;const jt=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),Vt=new Float32Array([0,92/255,230/255,1]),It={beaufort_ft:jt,beaufort_m:jt,beaufort_km:jt,beaufort_mi:jt,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:Vt,single_arrow:Vt,wind_speed:new Float32Array([0,0,0,1])},Lt=[0,20];class qt extends A{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(m.ONE,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(b.KEEP,b.KEEP,b.REPLACE)}draw(t,s){if(null==s.source||0===s.source.validPixelCount)return;const{context:e,timeline:i}=t;if(i.begin(this.name),e.setStencilFunction(x.EQUAL,s.stencilRef,255),s.updateVectorFieldVAO(t),"scalar"===t.renderPass){const e=s.vaoData.scalar;e&&this._drawScalars(t,s,e.vao,e.elementCount)}else{const e=s.vaoData.magdir;e&&this._drawTriangles(t,s,e.vao,e.elementCount)}i.end(this.name)}_drawTriangles(t,s,e,i){const{context:a,painter:n,requestRender:r,allowDelayedRender:o}=t,{symbolizerParameters:h}=s,c=h.dataRange?["dataRange"]:[];"geographic"===h.rotationType&&c.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.magdir,c);if(o&&null!=r&&!l.compiled)return void r();a.useProgram(l);const{coordScale:u,opacity:d,transforms:f}=s;l.setUniform2fv("u_coordScale",u),l.setUniform1f("u_opacity",d),l.setUniformMatrix3fv("u_dvsMat3",f.dvs);const{style:p,dataRange:m,rotation:y,symbolPercentRange:w}=h;l.setUniform4fv("u_colors",It[p]),l.setUniform2fv("u_dataRange",m||Lt),l.setUniform1f("u_rotation",y),l.setUniform2fv("u_symbolPercentRange",w);const g=this._getSymbolSize(t,s);l.setUniform2fv("u_symbolSize",g),a.bindVAO(e),a.drawElements(_.TRIANGLES,i,v.UNSIGNED_INT,0)}_drawScalars(t,s,e,i){const{context:a,painter:n,requestRender:r,allowDelayedRender:o}=t,{symbolizerParameters:h}=s,c=[];"wind_speed"===h.style?c.push("innerCircle"):h.dataRange&&c.push("dataRange"),"geographic"===h.rotationType&&c.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.scalar,c);if(o&&null!=r&&!l.compiled)return void r();a.useProgram(l);const{coordScale:u,opacity:d,transforms:f}=s;l.setUniform2fv("u_coordScale",u),l.setUniform1f("u_opacity",d),l.setUniformMatrix3fv("u_dvsMat3",f.dvs);const{dataRange:p,symbolPercentRange:m}=h;l.setUniform2fv("u_dataRange",p||Lt),l.setUniform2fv("u_symbolPercentRange",m);const y=this._getSymbolSize(t,s);l.setUniform2fv("u_symbolSize",y),a.bindVAO(e),a.drawElements(_.TRIANGLES,i,v.UNSIGNED_INT,0)}_getSymbolSize(t,s){const e=s.key?2**(t.displayLevel-s.key.level):s.resolution/t.state.resolution,{symbolTileSize:i}=s.symbolizerParameters;return[i/(Math.round((s.width-s.offset[0])/i)*i)/e,i/(Math.round((s.height-s.offset[1])/i)*i)/e]}}class Et extends ${constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){null!=this.vaoData&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){this._vaoInvalidated||null==this.vaoData||(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,null!=this.source&&null==this.vaoData){const{style:s}=this.symbolizerParameters;switch(s){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const s=P(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:e}}break;case"simple_scalar":{const s=D(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(t.context,s);this.vaoData={scalar:e}}break;case"wind_speed":{const s=P(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(t.context,s),i=D(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:e,scalar:a}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:k()}}setTransform(t){const s=L(this.transforms.dvs),[e,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/t.resolution,n=a*this.width,r=a*this.height,o=Math.PI*this.rotation/180;V(s,s,U(e,i)),V(s,s,U(n/2,r/2)),I(s,s,-o),V(s,s,U(-n/2,-r/2)),q(s,s,U(n,r)),E(this.transforms.dvs,t.displayViewMat3,s)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,s){const{vertexData:e,indexData:i}=s,a=f.createVertex(t,y.STATIC_DRAW,new Float32Array(e)),n=f.createIndex(t,y.STATIC_DRAW,new Uint32Array(i)),r=C("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:v.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:v.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:v.FLOAT,normalized:!1}]});return{vao:new p(t,r.attributes,r.bufferLayouts,{geometry:a},n),elementCount:i.length}}}export{qt as d,Et as f,Ot as h};
//# sourceMappingURL=p-dbc26b16.js.map
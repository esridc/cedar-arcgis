import{l as t,y as s,n as e,o as i,ab as r,b0 as h,aT as n,b7 as a,V as l,T as o,s as u,ad as p,av as c,au as d,aO as y,g1 as v,aP as g,a2 as m,a3 as f,b}from"./p-b54724b6.js";import{h as w}from"./p-843f0c78.js";import{E as S}from"./p-6ffbaa7a.js";let O=class extends i{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([s({readOnly:!0})],O.prototype,"version",null),O=t([e("esri.views.layers.support.ClipArea")],O);const P=O;var R;let j=R=class extends P{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new R({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([s({type:[Number,String],json:{write:!0}})],j.prototype,"left",void 0),t([s({type:[Number,String],json:{write:!0}})],j.prototype,"right",void 0),t([s({type:[Number,String],json:{write:!0}})],j.prototype,"top",void 0),t([s({type:[Number,String],json:{write:!0}})],j.prototype,"bottom",void 0),j=R=t([e("esri.views.layers.support.ClipRect")],j);const x=j;var A;const V={base:h,key:"type",typeMap:{extent:n,polygon:a}};let N=A=class extends P{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){return new A({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([s({types:V,json:{read:r,write:!0}})],N.prototype,"geometry",void 0),N=A=t([e("esri.views.layers.support.Geometry")],N);const C=N;let I=class extends P{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([s({type:[[[Number]]],json:{write:!0}})],I.prototype,"path",void 0),I=t([e("esri.views.layers.support.Path")],I);const T=I;const q=l.ofType({key:"type",base:null,typeMap:{rect:x,path:T,geometry:C}}),E=i=>{let r=class extends i{constructor(){super(...arguments),this.attached=!1,this.clips=new q,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const t=this.view?.spatialReferenceLocked??!0,s=this.view?.spatialReference;s&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new u("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new w),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([p((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),c),p((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),c),p((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),c),p((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),c),p((()=>this.highlightOptions),(t=>this.container.highlightOptions=t),c),d((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),c),p((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:t})=>{const s=null!=t&&this.isVisibleAtScale(t);s!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",s)}),c)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!s)return!0;const{minScale:e,maxScale:i}=s;return(0===e||t<=e)&&(0===i||t>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,s){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const t=super.getSuspendInfo(),s=!this.spatialReferenceSupported,e=this.visibleAtCurrentScale;return s&&(t.spatialReferenceNotSupported=s),e&&(t.outsideScaleRange=e),t}addAttachHandles(t){this.addHandles(t,"attach")}};return t([s()],r.prototype,"attached",void 0),t([s({type:q,set(t){const s=o(t,this._get("clips"),q);this._set("clips",s)}})],r.prototype,"clips",void 0),t([s()],r.prototype,"container",void 0),t([s()],r.prototype,"moving",void 0),t([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([s({readOnly:!0})],r.prototype,"updateParameters",void 0),t([s()],r.prototype,"updateRequested",void 0),t([s()],r.prototype,"updating",null),t([s()],r.prototype,"view",void 0),t([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),t([s({type:S})],r.prototype,"highlightOptions",void 0),r=t([e("esri.views.2d.layers.LayerView2D")],r),r};let M=class extends(y(v(g(m.EventedMixin(f))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const s=this.layer&&this.layer.id||"no id",e=this.layer&&this.layer.title||"no title";b.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${e}', id: '${s}')`,t)}}))}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},s=this;return s.view&&s.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};t([s()],M.prototype,"fullOpacity",null),t([s()],M.prototype,"layer",void 0),t([s()],M.prototype,"parent",void 0),t([s({readOnly:!0})],M.prototype,"suspended",null),t([s({readOnly:!0})],M.prototype,"suspendInfo",null),t([s({readOnly:!0})],M.prototype,"legendEnabled",null),t([s({type:Boolean,readOnly:!0})],M.prototype,"updating",null),t([s({readOnly:!0})],M.prototype,"updatingProgress",null),t([s()],M.prototype,"visible",null),t([s()],M.prototype,"view",void 0),M=t([e("esri.views.layers.LayerView")],M);const U=M;export{U as d,E as f};
//# sourceMappingURL=p-5f5f43c2.js.map
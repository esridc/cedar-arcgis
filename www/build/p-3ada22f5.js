import{l as t,y as e,he as i,n as p,af as s,s as r,Q as a,b as o,ad as m,aT as c}from"./p-b54724b6.js";import{a as h}from"./p-68411adb.js";import{f as n,d as j}from"./p-5f5f43c2.js";import{v as f}from"./p-fe46c115.js";import{a as d}from"./p-3faf3e32.js";import{l as u}from"./p-91d2aab6.js";import"./p-0fe6a545.js";import"./p-07f12c16.js";import"./p-570a8a46.js";import"./p-1fd43aa6.js";import"./p-49f0006c.js";import"./p-541ec65c.js";import"./p-13e550f5.js";import"./p-795f7c81.js";import"./p-29040467.js";import"./p-0e94eaa4.js";import"./p-33c0f331.js";import"./p-9f1a0adc.js";import"./p-5b0b1d68.js";import"./p-4f76b2d1.js";import"./p-2d1dac84.js";import"./p-42c332a2.js";import"./p-843f0c78.js";import"./p-38e70926.js";import"./p-74887bd8.js";import"./p-783b6965.js";import"./p-a3f0a5f3.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-6ffbaa7a.js";import"./p-fc9cd10b.js";import"./p-fdc41b20.js";import"./p-ecc7ed03.js";import"./p-05938a61.js";import"./p-8043ab9b.js";import"./p-faf4e331.js";import"./p-cd4a8b9a.js";import"./p-cae2235f.js";import"./p-9a4094ba.js";import"./p-1184cc61.js";import"./p-98e621d1.js";import"./p-1b31d781.js";import"./p-f7f8e6f9.js";import"./p-a779e49b.js";import"./p-7572c366.js";import"./p-832f907c.js";import"./p-5abe9c67.js";import"./p-0856fe30.js";import"./p-a5e3ec2a.js";import"./p-80be55a5.js";import"./p-b88ddb1e.js";import"./p-8dc3148c.js";import"./p-ca5fb53c.js";import"./p-d7fc78fa.js";import"./p-581eca80.js";import"./p-2a2efb66.js";import"./p-1701e549.js";import"./p-07a1e707.js";import"./p-8bc47c76.js";import"./p-c19b935f.js";import"./p-c8e3775b.js";import"./p-e75aa2b5.js";import"./p-f5f26b1f.js";import"./p-52a9dec5.js";import"./p-a379c2ce.js";import"./p-cc8b27b8.js";const b=a=>{let o=class extends a{initialize(){this.exportImageParameters=new u({layer:this.layer})}destroy(){this.exportImageParameters=s(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:e}=this;if(!t)return Promise.reject(new r("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:e}));const{popupEnabled:i}=e;if(!i)return Promise.reject(new r("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}));const p=this.createFetchPopupFeaturesQuery(t);if(!p)return Promise.resolve([]);const{extent:s,width:a,height:o,x:m,y:c}=p;if(!(s&&a&&o))throw new r("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:o});return e.fetchFeatureInfo(s,a,o,m,c)}};return t([e()],o.prototype,"exportImageParameters",void 0),t([e({readOnly:!0})],o.prototype,"exportImageVersion",null),t([e()],o.prototype,"layer",void 0),t([e(i)],o.prototype,"timeExtent",void 0),o=t([p("esri.layers.mixins.WMSLayerView")],o),o};let l=class extends(b(d(n(j)))){constructor(){super(...arguments),this.bitmapContainer=new h}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch((t=>{a(t)||o.getLogger(this).error(t)}))}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:i}=t;this.bitmapContainer=new h,this.container.addChild(this.bitmapContainer),this.strategy=new f({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(m((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=s(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:i}=this,{x:p,y:s}=t,{spatialReference:r}=e;let a,o=0,m=0;if(i.children.some((t=>{const{width:e,height:i,resolution:h,x:n,y:j}=t,f=n+h*e,d=j-h*i;return p>=n&&p<=f&&s<=j&&s>=d&&(a=new c({xmin:n,ymin:d,xmax:f,ymax:j,spatialReference:r}),o=e,m=i,!0)})),!a)return null;const h=a.width/o,n=Math.round((p-a.xmin)/h),j=Math.round((a.ymax-s)/h);return{extent:a,width:o,height:m,x:n,y:j}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,p){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,...p})}};t([e()],l.prototype,"strategy",void 0),t([e()],l.prototype,"updating",void 0),l=t([p("esri.views.2d.layers.WMSLayerView2D")],l);const x=l;export default x;
//# sourceMappingURL=p-3ada22f5.js.map
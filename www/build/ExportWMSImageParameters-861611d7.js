import { aZ as a$1, ad as m, B as e, E as y, F as a$2 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends(a$1(m)){constructor(e){super(e),this.scale=0;}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"));}get layers(){return this.visibleSublayers.filter((({name:e})=>e)).map((({name:e})=>e)).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=e?.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.push(e));};return s?.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return {format:s,request:"GetMap",service:"WMS",styles:"",transparent:t?"TRUE":"FALSE",version:o,layers:r}}};e([y()],l.prototype,"layer",null),e([y({readOnly:!0})],l.prototype,"layers",null),e([y({type:Number})],l.prototype,"scale",void 0),e([y({readOnly:!0})],l.prototype,"version",null),e([y({readOnly:!0})],l.prototype,"visibleSublayers",null),l=e([a$2("esri.layers.support.ExportWMSImageParameters")],l);

export { l };

//# sourceMappingURL=ExportWMSImageParameters-861611d7.js.map
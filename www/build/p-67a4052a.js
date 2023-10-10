import{jG as e,b1 as t,e7 as i,fi as s,ed as n,cV as r,cW as o,a5 as l,o as a,a7 as u,l as h,y as c,a4 as d,n as y,i0 as p,X as v,$ as b,V as m,T as f,jH as w,a9 as x,U as g,b as j,aU as S,aR as V,ec as N,jI as R,a6 as q,en as D,jJ as I,ef as L,d2 as M,d3 as A,d4 as F,hH as T,d5 as z,hR as P,bS as B,iD as O,cK as E,s as C,aT as U,u as $,hM as k,hT as W,d7 as _,a8 as H,hO as J}from"./p-b54724b6.js";import{N as X}from"./p-221e6973.js";import{s as G}from"./p-07a1e707.js";import{g as K}from"./p-3a359945.js";import{v as Y,y as Q}from"./p-cc3f40fb.js";import{e as Z}from"./p-603bf978.js";import"./p-bafc5e09.js";import"./p-bf0e41eb.js";import"./p-8043ab9b.js";import"./p-56278127.js";import"./p-0db5f47d.js";import"./p-de65f975.js";const ee=r(),te=Z(),ie=Z(),se=Z(),ne=o(0,0,1),re=o(0,1,0),oe=o(1,0,0);function le(t){i(ee,t),n(ee,ee);const r=Math.atan2(ee[1],ee[0]),o=Y(Z(),ne,-r);s(ee,ee,o);const l=-1*Math.atan2(ee[2],ee[0]);return[e(r)+270,e(l)+90]}function ae(e,r){return Y(ie,ne,t(e-270)),Y(se,re,t(r-90)),Q(te,ie,se),i(ee,oe),s(ee,ee,te),n(ee,ee),[ee[0],ee[1],ee[2]]}let ue=class extends(l(a)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(e),0,!0)}set orientation(e){const t=ae(e,this.tilt);this._set("normal",t),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(t),0,!0)}set tilt(e){const t=ae(this.orientation,e);this._set("normal",t),this._set("tilt",e)}};h([c({type:Boolean,json:{write:!0}})],ue.prototype,"enabled",void 0),h([c({type:String,json:{write:!0}})],ue.prototype,"label",void 0),h([c({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),d((e=>G.normalize(u(e),0,!0)))],ue.prototype,"orientation",null),h([c({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),d((e=>G.normalize(u(e),0,!0)))],ue.prototype,"tilt",null),h([c({type:[Number],json:{write:!0}})],ue.prototype,"normal",void 0),h([c({type:[Number],json:{write:!0}})],ue.prototype,"point",void 0),ue=h([y("esri.layers.voxel.VoxelSlice")],ue);const he=ue;let ce=class extends(l(a)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(t),0,!0)}};h([c({type:Boolean,json:{default:!0,write:!0}})],ce.prototype,"enabled",void 0),h([c({type:String,json:{origins:{service:{read:p}},write:{enabled:!0,isRequired:!0}}}),K({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],ce.prototype,"href",void 0),h([c({type:v,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"id",void 0),h([c({type:String,json:{write:!0}})],ce.prototype,"label",void 0),h([c({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],ce.prototype,"orientation",null),h([c({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],ce.prototype,"tilt",null),h([c({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"normal",void 0),h([c({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"point",void 0),h([c({type:[v],json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"sizeInPixel",void 0),h([c({type:[he],json:{write:!0}})],ce.prototype,"slices",void 0),h([c({type:v,json:{default:0,write:!0}})],ce.prototype,"timeId",void 0),h([c({type:v,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"variableId",void 0),ce=h([y("esri.layers.voxel.VoxelSection")],ce);const de=ce;let ye=class extends a{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};h([c({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],ye.prototype,"diffuseFactor",void 0),h([c({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],ye.prototype,"specularFactor",void 0),ye=h([y("esri.layers.voxel.VoxelSimpleShading")],ye);const pe=ye;let ve=class extends a{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};h([c({type:["discrete","continuous"],json:{write:!0}})],ve.prototype,"continuity",void 0),h([c({type:Boolean,json:{write:!0}})],ve.prototype,"hasNoData",void 0),h([c({type:Number,json:{write:!0}})],ve.prototype,"noData",void 0),h([c({type:Number,json:{write:!0}})],ve.prototype,"offset",void 0),h([c({type:Number,json:{write:!0}})],ve.prototype,"scale",void 0),h([c({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ve.prototype,"type",void 0),ve=h([y("esri.layers.voxel.VoxelFormat")],ve);const be=ve;let me=class extends a{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],me.prototype,"id",void 0),h([c({type:String,json:{write:!0}})],me.prototype,"description",void 0),h([c({type:String,json:{write:{enabled:!0,isRequired:!0}}})],me.prototype,"name",void 0),h([c({type:be,json:{write:!0}})],me.prototype,"originalFormat",void 0),h([c({type:be,json:{write:{enabled:!0,isRequired:!0}}})],me.prototype,"renderingFormat",void 0),h([c({type:String,json:{write:!0}})],me.prototype,"unit",void 0),h([c({type:Number,json:{write:!0}})],me.prototype,"volumeId",void 0),h([c({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],me.prototype,"type",void 0),me=h([y("esri.layers.voxel.VoxelVariable")],me);const fe=me;let we=class extends(l(a)){constructor(){super(...arguments),this.color=b.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};h([c({type:b,json:{type:[v],write:{enabled:!0,isRequired:!0}}})],we.prototype,"color",void 0),h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],we.prototype,"value",void 0),h([c({type:Boolean,json:{default:!0,write:!0}})],we.prototype,"enabled",void 0),h([c({type:String,json:{write:!0}})],we.prototype,"label",void 0),h([c({type:Boolean,json:{default:!1,write:!0}})],we.prototype,"colorLocked",void 0),we=h([y("esri.layers.voxel.VoxelIsosurface")],we);const xe=we;let ge=class extends(l(a)){constructor(){super(...arguments),this.color=null,this.position=0}};h([c({type:b,json:{type:[v],write:{enabled:!0,isRequired:!0}}})],ge.prototype,"color",void 0),h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],ge.prototype,"position",void 0),ge=h([y("esri.layers.voxel.VoxelColorStop")],ge);const je=ge;let Se=class extends(l(a)){constructor(){super(...arguments),this.opacity=1,this.position=0}};h([c({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],Se.prototype,"opacity",void 0),h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Se.prototype,"position",void 0),Se=h([y("esri.layers.voxel.VoxelOpacityStop")],Se);const Ve=Se;let Ne=class extends(l(a)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};h([c({type:Boolean,json:{default:!1,write:!0}})],Ne.prototype,"enabled",void 0),h([c({type:[Number],json:{write:!0}})],Ne.prototype,"range",void 0),Ne=h([y("esri.layers.voxel.VoxelRangeFilter")],Ne);const Re=Ne;var qe;!function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"}(qe||(qe={}));let De=class extends(l(a)){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(m.ofType(je)),this.opacityStops=new(m.ofType(Ve))}set colorStops(e){this._set("colorStops",f(e,this._get("colorStops"),m.ofType(je)))}set opacityStops(e){this._set("opacityStops",f(e,this._get("opacityStops"),m.ofType(Ve)))}getPreviousNext(e,t,i){let s=e;for(;--s>0&&t[s].type!==i&&t[s].type!==qe.Both;);let n=e;const r=t.length;for(;++n<r&&t[n].type!==i&&t[n].type!==qe.Both;);return[s,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const t=[],i=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return e;i.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:qe.Color})}if(0===this.opacityStops.length)for(const e of i)t.push({color:e.color,position:e.position});else{for(const e of this.opacityStops){const t=x(e.position,0,1),n=Math.round(255*x(1-e.opacity,0,1));let r=!1;for(const e of i)if(e.type===qe.Color&&Math.abs(e.position-t)<s){e.color.a=n,e.type=qe.Both,r=!0;break}r||i.push({color:{r:0,g:0,b:0,a:n},position:e.position,type:qe.Alpha})}i.sort(((e,t)=>e.position<t.position?-1:1));const e=i.length;for(let t=0;t<e;++t){const s=i[t];if(s.type!==qe.Both)if(s.type===qe.Color){const[n,r]=this.getPreviousNext(t,i,qe.Alpha);if(-1!==n&&r!==e){const e=(s.position-i[n].position)/(i[r].position-i[n].position);s.color.a=Math.round(w(i[n].color.a,i[r].color.a,e))}else s.color.a=-1!==n?i[n].color.a:i[r].color.a}else{const[n,r]=this.getPreviousNext(t,i,qe.Color);if(-1!==n&&r!==e){const e=(s.position-i[n].position)/(i[r].position-i[n].position),t=i[n].color,o=i[r].color;Le.forEach((i=>{s.color[i]=Math.round(w(t[i],o[i],e))}))}else-1!==n?Le.forEach((e=>{s.color[e]=i[n].color[e]})):Le.forEach((e=>{s.color[e]=i[r].color[e]}))}}for(const e of i)t.push({color:e.color,position:e.position})}t[0].position=0,t[t.length-1].position=1;let n=0,r=1;for(let i=0;i<this._colorMapSize;++i){const s=i/this._colorMapSize;for(;s>t[r].position;)n=r++;const o=(s-t[n].position)/(t[r].position-t[n].position),l=t[n].color,a=t[r].color,u=new b;Le.forEach((e=>{u[e]=Math.round(w(l[e],a[e],o))})),u.a=x(1-w(l.a,a.a,o)/255,0,1),e.push(u)}return e}getColorForContinuousDataValue(e,t){const i=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||i.length<256)return null;let s=this.stretchRange[0],n=this.stretchRange[1];if(s>n){const e=s;s=n,n=e}e=x(e,s,n);const r=i[Math.round((e-s)/(n-s)*(this._colorMapSize-1))].clone();return t||(r.a=1),r}};h([c({type:["linear","nearest"],json:{write:!0}})],De.prototype,"interpolation",void 0),h([c({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"stretchRange",void 0),h([c({type:m.ofType(je),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],De.prototype,"colorStops",null),h([c({type:m.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],De.prototype,"opacityStops",null),h([c({type:Re,json:{write:!0}})],De.prototype,"rangeFilter",void 0),h([c({type:[b],clonable:!1,json:{read:!1}})],De.prototype,"rasterizedTransferFunction",null),De=h([y("esri.layers.voxel.VoxelTransferFunctionStyle")],De);const Ie=De,Le=["r","g","b"];let Me=class extends(l(a)){constructor(){super(...arguments),this.color=b.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};h([c({type:b,json:{type:[v],write:{enabled:!0,isRequired:!0}}})],Me.prototype,"color",void 0),h([c({type:v,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"value",void 0),h([c({type:Boolean,json:{default:!0,write:!0}})],Me.prototype,"enabled",void 0),h([c({type:String,json:{write:!0}})],Me.prototype,"label",void 0),Me=h([y("esri.layers.voxel.VoxelUniqueValue")],Me);const Ae=Me;var Fe;let Te=Fe=class extends a{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(m.ofType(Ae)),this.isosurfaces=new(m.ofType(xe))}clone(){return new Fe({variableId:this.variableId,label:this.label,transferFunction:g(this.transferFunction),uniqueValues:g(this.uniqueValues),isosurfaces:g(this.isosurfaces)})}};h([c({type:v,json:{write:{enabled:!0,isRequired:!0}}})],Te.prototype,"variableId",void 0),h([c({type:String,json:{write:!0}})],Te.prototype,"label",void 0),h([c({type:Ie,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],Te.prototype,"transferFunction",void 0),h([c({type:m.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],Te.prototype,"uniqueValues",void 0),h([c({type:m.ofType(xe),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],Te.prototype,"isosurfaces",void 0),Te=Fe=h([y("esri.layers.voxel.VoxelVariableStyle")],Te);const ze=Te;let Pe=class extends a{constructor(){super(...arguments),this.values=null}};h([c({type:[Number],json:{write:!0}})],Pe.prototype,"values",void 0),Pe=h([y("esri.layers.voxel.VoxelIrregularSpacing")],Pe);const Be=Pe;let Oe=class extends a{constructor(){super(...arguments),this.scale=1,this.offset=0}};h([c({type:Number,json:{write:!0}})],Oe.prototype,"scale",void 0),h([c({type:Number,json:{write:!0}})],Oe.prototype,"offset",void 0),Oe=h([y("esri.layers.voxel.VoxelRegularSpacing")],Oe);const Ee=Oe;let Ce=class extends a{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};h([c({type:Be,json:{write:!0}})],Ce.prototype,"irregularSpacing",void 0),h([c({type:Boolean,json:{write:!0}})],Ce.prototype,"isPositiveUp",void 0),h([c({type:Boolean,json:{write:!0}})],Ce.prototype,"isWrappedDateLine",void 0),h([c({type:String,json:{write:!0}})],Ce.prototype,"label",void 0),h([c({type:String,json:{write:!0}})],Ce.prototype,"name",void 0),h([c({type:String,json:{write:!0}})],Ce.prototype,"quantity",void 0),h([c({type:Ee,json:{write:!0}})],Ce.prototype,"regularSpacing",void 0),h([c({type:Number,json:{write:!0}})],Ce.prototype,"size",void 0),h([c({type:String,json:{write:!0}})],Ce.prototype,"unit",void 0),h([c({type:Boolean,json:{read:!1}})],Ce.prototype,"isRegular",null),Ce=h([y("esri.layers.voxel.VoxelDimension")],Ce);const Ue=Ce;const $e="esri.layers.voxel.VoxelVolume",ke=j.getLogger($e);let We=class extends a{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=S.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),i=this.dimensions[2],s=i.isRegular?i.getRange():[0,i.size];return[e[0],t[0],s[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),i=this.dimensions[2],s=i.isRegular?i.getRange():[0,i.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let e=0;e<3;++e)n[e]<2?n[e]=1:n[e]-=1;return i.isRegular&&!i.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(t[1]-t[0])/n[1],(s[1]-s[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,t=this.dimensions[3].size>0;if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return ke.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!V(this.spatialReference,e.spatialReference))return ke.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const t=o(e.x,e.y,e.z??0);N(t,t,this.originInLayerSpace3D),R(t,t,this.voxelSizeInLayerSpaceSigned);const i=this.dimensions[this.zDimension];if(!i.isRegular&&Array.isArray(i.irregularSpacing?.values)&&i.irregularSpacing.values.length>1){const s=e.z??0,n=i.irregularSpacing.values,r=i.isPositiveUp?1:-1,o=n.reduce(((e,t)=>Math.abs(r*t-s)<Math.abs(r*e-s)?t:e));for(let e=0;e<n.length;++e)if(n[e]===o){t[2]=e;break}}return[t[0],t[1],t[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new q({x:0,y:0,spatialReference:this.spatialReference});const t=D(e);if(I(t,t,this.voxelSizeInLayerSpaceSigned),L(t,t,this.originInLayerSpace3D),"xyt"===this.volumeType)return new q({x:t[0],y:t[1],spatialReference:this.spatialReference});const i=this.dimensions[this.zDimension];return i.isRegular||Array.isArray(i.irregularSpacing?.values)&&(e[2]<0?t[2]=i.irregularSpacing.values[0]:e[2]<i.irregularSpacing.values.length?t[2]=i.irregularSpacing.values[e[2]]:t[2]=i.irregularSpacing.values[i.irregularSpacing.values.length-1],i.isPositiveUp||(t[2]*=-1)),new q({x:t[0],y:t[1],z:t[2],spatialReference:this.spatialReference})}};h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],We.prototype,"id",void 0),h([c({type:[Ue],json:{write:{enabled:!0,isRequired:!0}}})],We.prototype,"dimensions",void 0),h([c({type:S,json:{read:{enabled:!1}}})],We.prototype,"spatialReference",void 0),h([c({type:Number,json:{read:!1}})],We.prototype,"zDimension",null),h([c({type:[Boolean],json:{read:!1}})],We.prototype,"isValid",null),h([c({type:[Number],json:{read:!1}})],We.prototype,"originInLayerSpace3D",null),h([c({type:[Number],json:{read:!1}})],We.prototype,"voxelSizeInLayerSpaceSigned",null),h([c({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],We.prototype,"volumeType",null),h([c({type:[Number],json:{read:!1}})],We.prototype,"sizeInVoxels",null),We=h([y($e)],We);const _e=We;var He;let Je=He=class extends a{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new He;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"apronWidth",void 0),h([c({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"brickSize",void 0),h([c({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"maxLodLevel",void 0),h([c({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"nodeSize",void 0),Je=He=h([y("esri.layers.voxel.VoxelVolumeIndex")],Je);const Xe=Je;let Ge=class extends(l(a)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(e),0,!0)}set orientation(e){const t=ae(e,this.tilt);this._set("normal",t),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=le(this.normal);return G.normalize(u(t),0,!0)}set tilt(e){const t=ae(this.orientation,e);this._set("normal",t),this._set("tilt",e)}};h([c({type:Boolean,json:{default:!0,write:!0}})],Ge.prototype,"enabled",void 0),h([c({type:String,json:{write:!0}})],Ge.prototype,"label",void 0),h([c({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),d((e=>G.normalize(u(e),0,!0)))],Ge.prototype,"orientation",null),h([c({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),d((e=>G.normalize(u(e),0,!0)))],Ge.prototype,"tilt",null),h([c({type:[Number],json:{write:!0}})],Ge.prototype,"normal",void 0),h([c({type:[Number],json:{write:!0}})],Ge.prototype,"point",void 0),Ge=h([y("esri.layers.voxel.VoxelDynamicSection")],Ge);const Ke=Ge;var Ye;let Qe=Ye=class extends a{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(m.ofType(he)),this.dynamicSections=new(m.ofType(Ke))}set slices(e){this._set("slices",f(e,this._get("slices"),m.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",f(e,this._get("dynamicSections"),m.ofType(Ke)))}clone(){return new Ye({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:g(this.slices),dynamicSections:g(this.dynamicSections)})}};h([c({type:v,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"volumeId",void 0),h([c({type:Number,json:{default:1,write:!0}})],Qe.prototype,"verticalExaggeration",void 0),h([c({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],Qe.prototype,"exaggerationMode",void 0),h([c({type:Number,json:{default:0,write:!0}})],Qe.prototype,"verticalOffset",void 0),h([c({type:m.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],Qe.prototype,"slices",null),h([c({type:m.ofType(Ke),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],Qe.prototype,"dynamicSections",null),Qe=Ye=h([y("esri.layers.voxel.VoxelVolumeStyle")],Qe);const Ze=Qe;const et="esri.layers.VoxelLayer",tt=j.getLogger(et);let it=class extends(X(M(A(F(T(z(P(B)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new pe,this.opacity=1,this.variables=new m,this.volumes=new m,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!0,this.popupTemplate=null,this.test=null,this.volumeStyles=new(m.ofType(Ze)),this.variableStyles=new(m.ofType(ze)),this.sections=new(m.ofType(de)),e?.constantUpscaling&&(this.test={constantUpscaling:!0})}set url(e){this._set("url",O(e,tt))}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(E).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t);for(const e of this.volumes)e.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new C("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new C("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new C("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const s=U.fromJSON(e,i);if(0===s.zmin&&0===s.zmax&&Array.isArray(t.volumes)){const e=_e.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t}s.zmin=e,s.zmax=i}}}return s}return null}get voxelFields(){const e=[new $({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new $({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new $({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new $({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(t);const i=new $({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(i)}if("xyt"!==t.volumeType){const t=new $({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(t)}}return e}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,i=this.title;return k({fields:t,title:i},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;t=null!=e?e:this.currentVariableId;if(!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,i){const s=this.getVariable(e);if(null==s||"continuous"!==s.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const n=this.variableStyles.findIndex((t=>t.variableId===e));if(n<0)return null;const r=this.variableStyles.at(n);return r?.transferFunction?r.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new de({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const s=t.clone();s.isosurfaces.length>4&&(s.isosurfaces=s.isosurfaces.slice(0,3),tt.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of s.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(s.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t)}if("continuous"===i.renderingFormat.continuity)(null===s.transferFunction||s.transferFunction.colorStops.length<2)&&tt.error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==s.transferFunction&&(Array.isArray(s.transferFunction.stretchRange)&&2===s.transferFunction.stretchRange.length||(tt.error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),s.transferFunction.stretchRange=[0,1],s.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)tt.error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(s)}else tt.error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const s=t.clone();for(const e of s.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of s.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(s)}else tt.error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const e of this.variables)if(e.id===t)return e;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const s=o(e.normal[0],e.normal[1],e.normal[2]);n(s,s);const r=1e-6;return!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<r)&&(e.normal[0]=s[0],e.normal[1]=s[1],e.normal[2]=s[2],!0)}};h([c({type:["Voxel"]})],it.prototype,"operationalLayerType",void 0),h([c(W)],it.prototype,"legendEnabled",void 0),h([c({json:{write:!0}})],it.prototype,"title",void 0),h([c(_)],it.prototype,"url",null),h([c({type:m.ofType(de),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],it.prototype,"sections",void 0),h([c({type:v,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],it.prototype,"currentVariableId",void 0),h([c({type:m.ofType(Ze),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],it.prototype,"volumeStyles",void 0),h([c({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],it.prototype,"renderMode",void 0),h([c({type:m.ofType(ze),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],it.prototype,"variableStyles",void 0),h([c({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],it.prototype,"enableSlices",void 0),h([c({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],it.prototype,"enableSections",void 0),h([c({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],it.prototype,"enableDynamicSections",void 0),h([c({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],it.prototype,"enableIsosurfaces",void 0),h([c({type:pe,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],it.prototype,"shading",void 0),h([c({type:["show","hide"]})],it.prototype,"listMode",void 0),h([c({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],it.prototype,"opacity",void 0),h([c({type:m.ofType(fe)})],it.prototype,"variables",void 0),h([c({type:m.ofType(_e)})],it.prototype,"volumes",void 0),h([c({type:Xe})],it.prototype,"index",void 0),h([c({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],it.prototype,"minScale",void 0),h([c({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],it.prototype,"maxScale",void 0),h([c({json:{read:!1},readOnly:!0})],it.prototype,"type",void 0),h([c({readOnly:!0,json:{name:"serviceVersion"}})],it.prototype,"version",void 0),h([H("service","version")],it.prototype,"readVersion",null),h([c({type:U})],it.prototype,"fullExtent",void 0),h([H("service","fullExtent",["fullExtent"])],it.prototype,"readFullExtent",null),h([c({readOnly:!0,clonable:!1,json:{read:!1}})],it.prototype,"voxelFields",null),h([c(J)],it.prototype,"popupEnabled",void 0),h([c({readOnly:!0})],it.prototype,"defaultPopupTemplate",null),it=h([y(et)],it);const st=it;export default st;
//# sourceMappingURL=p-67a4052a.js.map
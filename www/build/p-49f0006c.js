import{b as e,h as t,s,fV as i}from"./p-b54724b6.js";import{n}from"./p-541ec65c.js";import{A as a,f as r,P as o,B as c,G as u,M as h,U as l,L as f,D as d,V as p}from"./p-13e550f5.js";const m=e.getLogger("esri.views.webgl.checkWebGLError");function w(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const b=!!t("enable-feature:webgl-debug");function g(){return b}function x(){return b}function M(e){if(g()){const t=e.getError();if(t){const i=w(e,t),n=(new Error).stack;m.error(new s("webgl-error","WebGL error occured",{message:i,stack:n}))}}}var v;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(v||(v={}));function D(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function y(e,t,s,i,n=0){const a=e.gl,r=e.capabilities.instancing;e.bindBuffer(s);for(const e of i){const s=t.get(e.name);void 0===s&&console.error(`There is no location for vertex attribute '${e.name}' defined.`);const i=n*e.stride;if(e.count<=4)a.vertexAttribPointer(s,e.count,e.type,e.normalized,e.stride,e.offset+i),a.enableVertexAttribArray(s),e.divisor>0&&r&&r.vertexAttribDivisor(s,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)a.vertexAttribPointer(s+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),a.enableVertexAttribArray(s+t),e.divisor>0&&r&&r.vertexAttribDivisor(s+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)a.vertexAttribPointer(s+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),a.enableVertexAttribArray(s+t),e.divisor>0&&r&&r.vertexAttribDivisor(s+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function A(e,t,s,i){const n=e.gl,r=e.capabilities.instancing;e.bindBuffer(s);for(const e of i){const s=t.get(e.name);if(e.count<=4)n.disableVertexAttribArray(s),e.divisor&&e.divisor>0&&r&&r.vertexAttribDivisor(s,0);else if(9===e.count)for(let t=0;t<3;t++)n.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r&&r.vertexAttribDivisor(s+t,0);else if(16===e.count)for(let t=0;t<4;t++)n.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r&&r.vertexAttribDivisor(s+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(a.ARRAY_BUFFER)}function I(e){switch(e){case u.ALPHA:case u.LUMINANCE:case u.RED:case u.RED_INTEGER:case o.R8:case o.R8I:case o.R8UI:case o.R8_SNORM:case c.STENCIL_INDEX8:return 1;case u.LUMINANCE_ALPHA:case u.RG:case u.RG_INTEGER:case o.RGBA4:case o.R16F:case o.R16I:case o.R16UI:case o.RG8:case o.RG8I:case o.RG8UI:case o.RG8_SNORM:case o.RGB565:case o.RGB5_A1:case c.DEPTH_COMPONENT16:return 2;case u.DEPTH_COMPONENT:case u.RGB:case u.RGB_INTEGER:case o.RGB8:case o.RGB8I:case o.RGB8UI:case o.RGB8_SNORM:case o.SRGB8:case c.DEPTH_COMPONENT24:return 3;case u.DEPTH_STENCIL:case u.DEPTH24_STENCIL8:case u.RGBA:case u.RGBA_INTEGER:case o.RGBA8:case o.R32F:case o.R11F_G11F_B10F:case o.RG16F:case o.R32I:case o.R32UI:case o.RG16I:case o.RG16UI:case o.RGBA8I:case o.RGBA8UI:case o.RGBA8_SNORM:case o.SRGB8_ALPHA8:case o.RGB9_E5:case o.RGB10_A2UI:case o.RGB10_A2:case c.DEPTH_STENCIL:case c.DEPTH_COMPONENT32F:case c.DEPTH24_STENCIL8:return 4;case c.DEPTH32F_STENCIL8:return 5;case o.RGB16F:case o.RGB16I:case o.RGB16UI:return 6;case o.RG32F:case o.RG32I:case o.RG32UI:case o.RGBA16F:case o.RGBA16I:case o.RGBA16UI:return 8;case o.RGB32F:case o.RGB32I:case o.RGB32UI:return 12;case o.RGBA32F:case o.RGBA32I:case o.RGBA32UI:return 16;case r.COMPRESSED_RGB_S3TC_DXT1_EXT:case r.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case r.COMPRESSED_RGBA_S3TC_DXT3_EXT:case r.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case r.COMPRESSED_R11_EAC:case r.COMPRESSED_SIGNED_R11_EAC:case r.COMPRESSED_RGB8_ETC2:case r.COMPRESSED_SRGB8_ETC2:case r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case r.COMPRESSED_RG11_EAC:case r.COMPRESSED_SIGNED_RG11_EAC:case r.COMPRESSED_RGBA8_ETC2_EAC:case r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class L{constructor(e=0,t=e){this.width=e,this.height=t,this.target=h.TEXTURE_2D,this.pixelFormat=u.RGBA,this.dataType=l.UNSIGNED_BYTE,this.samplingMode=f.LINEAR,this.wrapMode=d.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function T(e){return e.width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(e.hasMipmap?4/3:1)*I(e.internalFormat)}class W extends L{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case o.R16F:case o.R16I:case o.R16UI:case o.R32F:case o.R32I:case o.R32UI:case o.R8_SNORM:case o.R8:case o.R8I:case o.R8UI:this.pixelFormat=u.RED}}static validate(e,t){return new W(e,t)}}const _=4;let G=class{constructor(e,t=null,i=null){if(this.type=v.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,i=t;else{const i=W.validate(e,t);if(!i)throw new s("Texture descriptor invalid");this._descriptor=i}if(this._descriptor.context.instanceCounter.increment(p.Texture,this),this._descriptor.context.type!==n.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),P(this._descriptor.target)))throw new s("3D and array textures are not supported in WebGL1");this._descriptor.target===h.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return S.delete(this),T(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(p.Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;if(i.width!==e||i.height!==t){if(this._wasImmutablyAllocated)throw new s("Immutable textures can't be resized!");i.width=e,i.height=t,this._descriptor.target===h.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=h.TEXTURE_CUBE_MAP_POSITIVE_X;t<=h.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._descriptor.context||!this._descriptor.context.gl)return;const i=this._descriptor.context.gl;M(i),this._glName||(this._glName=i.createTexture()),void 0===e&&(e=null);const n=this._descriptor,a=t??n.target,r=P(a);null===e&&(n.width=n.width||_,n.height=n.height||_,r&&(n.depth=n.depth??1));const o=this._descriptor.context.bindTexture(this,G.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(G.TEXTURE_UNIT_FOR_UPDATES),E(this._descriptor.context,n),this._configurePixelStorage(),M(i);const c=this._deriveInternalFormat();if(j(e)){let t=e.width,s=e.height;const o=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,s=e.videoHeight),n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,c,n.hasMipmap,t,s,o),this._texImage(a,0,c,t,s,o,e),M(i),n.hasMipmap&&this.generateMipmap(),n.width||(n.width=t),n.height||(n.height=s),r&&!n.depth&&(n.depth=o)}else{const{width:t,height:o,depth:u}=n;if(null==t||null==o)throw new s("Width and height must be specified!");if(r&&null==u)throw new s("Depth must be specified!");if(n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,c,n.hasMipmap,t,o,u),U(e)){const r=e.levels,h=R(a,t,o,u),l=Math.min(h-1,r.length-1);null!=this._descriptor.context.gl2?i.texParameteri(n.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,l):n.hasMipmap=n.hasMipmap&&h===r.length;const f=c;if(!N(f))throw new s("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,s,i)=>{const n=r[Math.min(e,r.length-1)];this._compressedTexImage(a,e,f,t,s,i,n)}),l)}else this._texImage(a,0,c,t,o,u,e),M(i),n.hasMipmap&&this.generateMipmap()}z(i,this._descriptor),C(i,this._descriptor),O(this._descriptor.context,this._descriptor),M(i),this._descriptor.context.bindTexture(o,G.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,n,a,r,o=0){r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor.context.gl,u=this._descriptor.context.gl2,h=this._descriptor,l=this._deriveInternalFormat(),{pixelFormat:f,dataType:d,target:p,isImmutable:m}=h;if(m&&!this._wasImmutablyAllocated)throw new s("Cannot update immutable texture before allocation!");const w=this._descriptor.context.bindTexture(this,G.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||i<0||n>h.width||a>h.height||t+n>h.width||i+a>h.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),o){if(!u)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(u.UNPACK_SKIP_ROWS,o)}if(j(r)?u?u.texSubImage2D(p,e,t,i,n,a,f,d,r):c.texSubImage2D(p,e,t,i,f,d,r):U(r)?c.compressedTexSubImage2D(p,e,t,i,n,a,l,r.levels[e]):c.texSubImage2D(p,e,t,i,n,a,f,d,r),o){if(!u)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(u.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(w,G.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,i,n,a,r,o,c){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const u=this._descriptor.context.gl2;if(null==u)throw new s("3D textures are not supported in WebGL1");const h=this._descriptor,l=this._deriveInternalFormat(),{pixelFormat:f,dataType:d,isImmutable:p,target:m}=h;if(p&&!this._wasImmutablyAllocated)throw new s("Cannot update immutable texture before allocation!");P(m)||console.warn("Attempting to set 3D texture data on a non-3D texture");const w=this._descriptor.context.bindTexture(this,G.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(G.TEXTURE_UNIT_FOR_UPDATES),(t<0||i<0||n<0||a>h.width||r>h.height||o>h.depth||t+a>h.width||i+r>h.height||n+o>h.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),U(c))c=c.levels[e],u.compressedTexSubImage3D(m,e,t,i,n,a,r,o,l,c);else{const s=c;u.texSubImage3D(m,e,t,i,n,a,r,o,f,d,s)}this._descriptor.context.bindTexture(w,G.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new s("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,E(this._descriptor.context,e)}e.samplingMode===f.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=f.LINEAR_MIPMAP_NEAREST):e.samplingMode===f.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=f.NEAREST_MIPMAP_NEAREST);const t=this._descriptor.context.bindTexture(this,G.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(G.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(t,G.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,E(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor.context.gl,t=this._descriptor;this._samplingModeDirty&&(z(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(C(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===n.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===u.DEPTH_STENCIL&&(this._descriptor.internalFormat=u.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case l.FLOAT:switch(this._descriptor.pixelFormat){case u.RGBA:return this._descriptor.internalFormat=o.RGBA32F;case u.RGB:return this._descriptor.internalFormat=o.RGB32F;default:throw new s("Unable to derive format")}case l.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case u.RGBA:return this._descriptor.internalFormat=o.RGBA8;case u.RGB:return this._descriptor.internalFormat=o.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===u.DEPTH_STENCIL?u.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:s,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,i,n,a,r){const o=this._descriptor.context.gl2;if(null==o)throw new s("Immutable textures are not supported in WebGL1");if(!k(t))throw new s("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=i?R(e,n,a,r):1;if(P(e)){if(null==r)throw new s("Missing depth dimension for 3D texture upload");o.texStorage3D(e,c,t,n,a,r)}else o.texStorage2D(e,c,t,n,a);this._wasImmutablyAllocated=!0}_texImage(e,t,i,a,r,o,c){const u=this._descriptor.context.gl,h=P(e),{isImmutable:l,pixelFormat:f,dataType:d}=this._descriptor,p=this._descriptor.context.type===n.WEBGL2,m=p?u:null;if(p||!j(c))if(l){if(null!=c){const i=c;if(h){if(null==o)throw new s("Missing depth dimension for 3D texture upload");m.texSubImage3D(e,t,0,0,0,a,r,o,f,d,i)}else u.texSubImage2D(e,t,0,0,a,r,f,d,i)}}else{const n=c;if(h){if(null==o)throw new s("Missing depth dimension for 3D texture upload");m.texImage3D(e,t,i,a,r,o,0,f,d,n)}else u.texImage2D(e,t,i,a,r,0,f,d,n)}else u.texImage2D(e,0,i,f,d,c)}_compressedTexImage(e,t,i,a,r,o,c){const u=this._descriptor.context.gl;let h=null;const l=P(e),f=this._descriptor.isImmutable;if(l){if(this._descriptor.context.type!==n.WEBGL2)throw new s("3D textures are not supported in WebGL1");h=u}if(f){if(null!=c)if(l){if(null==o)throw new s("Missing depth dimension for 3D texture upload");h.compressedTexSubImage3D(e,t,0,0,0,a,r,o,i,c)}else u.compressedTexSubImage2D(e,t,0,0,a,r,i,c)}else if(l){if(null==o)throw new s("Missing depth dimension for 3D texture upload");h.compressedTexImage3D(e,t,i,a,r,o,0,c)}else u.compressedTexImage2D(e,t,i,a,r,0,c)}_forEachMipmapLevel(e,t=1/0){let{width:i,height:n,depth:a,hasMipmap:r,target:o}=this._descriptor;const c=o===h.TEXTURE_3D;if(null==i||null==n||c&&null==a)throw new s("Missing texture dimensions for mipmap calculation");for(let s=0;e(s,i,n,a),r&&(1!==i||1!==n||c&&1!==a)&&!(s>=t);++s)i=Math.max(1,i>>1),n=Math.max(1,n>>1),c&&(a=Math.max(1,a>>1))}};function E(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const s=e.type===n.WEBGL2;if(s||!t.isImmutable&&!P(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),s)return;null!=t.width&&i(t.width)&&null!=t.height&&i(t.height)||("number"==typeof t.wrapMode?t.wrapMode!==d.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===d.CLAMP_TO_EDGE&&t.wrapMode.t===d.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function z(e,t){let s=t.samplingMode,i=t.samplingMode;s===f.LINEAR_MIPMAP_NEAREST||s===f.LINEAR_MIPMAP_LINEAR?(s=f.LINEAR,t.hasMipmap||(i=f.LINEAR)):s!==f.NEAREST_MIPMAP_NEAREST&&s!==f.NEAREST_MIPMAP_LINEAR||(s=f.NEAREST,t.hasMipmap||(i=f.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,s),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function C(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function O(e,t){const s=e.capabilities.textureFilterAnisotropic;if(!s)return;e.gl.texParameterf(t.target,s.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}function k(e){return e in o}function N(e){return e in r}function U(e){return null!=e&&"type"in e&&"compressed"===e.type}function F(e){return null!=e&&"byteLength"in e}function j(e){return null!=e&&!U(e)&&!F(e)}function P(e){return e===h.TEXTURE_3D||e===h.TEXTURE_2D_ARRAY}function R(e,t,s,i=1){let n=Math.max(t,s);return e===h.TEXTURE_3D&&(n=Math.max(n,i)),Math.round(Math.log(n)/Math.LN2)+1}G.TEXTURE_UNIT_FOR_UPDATES=0;const S=new Map;export{I as E,y as R,G as T,g as a,L as b,x as c,D as d,v as e,A as o,M as u};
//# sourceMappingURL=p-49f0006c.js.map
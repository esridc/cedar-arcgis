import{r as t,n,t as e}from"./p-541ec65c.js";let l,r;function s(n){const e=t(n);for(;e.length>1;){const t=u(e.shift());if(t.available)return t}return u(e.shift())}function u(t){switch(t){case n.WEBGL1:return o();case n.WEBGL2:return i()}}function o(){return l||(l=h()),l}function i(){return r||(r=d()),r}class f{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1,this.supportsTextureHalfFloat=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1}}class c extends f{constructor(){super(...arguments),this.type=n.WEBGL1}}class a extends f{constructor(){super(...arguments),this.type=n.WEBGL2,this.supportsElementIndexUint=!0,this.supportsStandardDerivatives=!0,this.supportsInstancedArrays=!0,this.supportsTextureFloat=!0,this.supportsTextureHalfFloat=!0}}function _(t,l){if(t===n.WEBGL1&&"undefined"==typeof WebGLRenderingContext||t===n.WEBGL2&&"undefined"==typeof WebGL2RenderingContext)return null;const r=document.createElement("canvas");if(!r)return null;let s=e(r,t,{failIfMajorPerformanceCaveat:!0});if(null==s&&(s=e(r,t),null!=s&&(l.majorPerformanceCaveat=!0)),null==s)return s;if(t===n.WEBGL1){const t=s.getParameter(s.VERSION),n=t?.match(/^WebGL\s+([\d.]*)/);if(n){const t=parseFloat(n[1]);l.available=t>=.94}}else l.available=!0;l.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),l.supportsVertexShaderSamplers=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const u=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT);return u&&(l.supportsHighPrecisionFragment=u.precision>0),s}function h(){const t=new c,e=_(n.WEBGL1,t);return null==e||(t.supportsElementIndexUint=null!==e.getExtension("OES_element_index_uint"),t.supportsStandardDerivatives=null!==e.getExtension("OES_standard_derivatives"),t.supportsInstancedArrays=null!==e.getExtension("ANGLE_instanced_arrays"),t.supportsTextureFloat=null!==e.getExtension("OES_texture_float"),t.supportsTextureHalfFloat=null!==e.getExtension("OES_texture_half_float"),t.supportsColorBufferFloat=null!==e.getExtension("WEBGL_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==e.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=null!==e.getExtension("EXT_color_buffer_half_float")),t}function d(){const t=new a,e=_(n.WEBGL2,t);return null==e||(t.supportsColorBufferFloat=null!==e.getExtension("EXT_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==e.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=t.supportsColorBufferFloat||null!==e.getExtension("EXT_color_buffer_half_float")),t}export{s as n};
//# sourceMappingURL=p-a379c2ce.js.map
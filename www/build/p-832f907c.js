import{h as t,N as n,ca as o,k as r,cb as a,s}from"./p-b54724b6.js";import{o as i,u as e}from"./p-5abe9c67.js";import{a as l}from"./p-0856fe30.js";import{n as f}from"./p-d7fc78fa.js";async function u(t,n,o,r){return m(n,await c(t,n,o,r),o,r)}async function c(n,o,r,a){const s={...a},i=y(o,r),e=null!=o.outStatistics?.[0],u=t("featurelayer-pbf-statistics"),c=!e||u;let m;if("pbf"===r?.format&&c)try{m=await f(n,i,s)}catch(t){if("query:parsing-pbf"!==t.name)throw t;r.format="json"}return"json"!==r?.format&&c||(m=await l(n,i,s)),p(r?.fieldsIndex,m.fields),m}function p(t,n){if(null!=t&&null!=n)for(const o of n){const n=t.get(o.name);n&&Object.assign(o,n.toJSON())}}async function m(t,r,a,s){const i=a?.infoFor3D;if(!(b(t,i)&&null!=i&&r.assetMaps&&r.features&&r.features.length))return n.fromJSON(r);const{meshFeatureSetFromJSON:e}=await o(import("./p-da19ac13.js").then((function(t){return t.b})),s);return e(t,i,r)}function y(t,n){let o=r.from(t);o.sourceSpatialReference=o.sourceSpatialReference??n?.sourceSpatialReference??null,(n?.gdbVersion||n?.dynamicDataSource)&&(o=o===t?o.clone():o,o.gdbVersion=t.gdbVersion||n.gdbVersion,o.dynamicDataSource=t.dynamicDataSource?a.from(t.dynamicDataSource):n.dynamicDataSource);const l=n?.infoFor3D;if(null!=l&&b(t,l)){o=o===t?o.clone():o,o.formatOf3DObjects=null;const{supportedFormats:n,queryFormats:r}=l,a=i("model/gltf-binary",n)??e("glb",n),f=i("model/gltf+json",n)??e("gtlf",n);for(const t of r){if(t===a){o.formatOf3DObjects=t;break}t!==f||o.formatOf3DObjects||(o.formatOf3DObjects=t)}if(!o.formatOf3DObjects)throw new s("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==o.outFields||!o.outFields.includes("*")){o=o===t?o.clone():o,null==o.outFields&&(o.outFields=[]);const{originX:n,originY:r,originZ:a,translationX:s,translationY:i,translationZ:e,scaleX:f,scaleY:u,scaleZ:c,rotationX:p,rotationY:m,rotationZ:y,rotationDeg:b}=l.transformFieldRoles;o.outFields.push(n,r,a,s,i,e,f,u,c,p,m,y,b)}}return o}function b(t,n){return null!=n&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}export{u as f};
//# sourceMappingURL=p-832f907c.js.map
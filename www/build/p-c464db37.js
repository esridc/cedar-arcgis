import{t as e,e as r}from"./p-623dbe5e.js";import{l as t,V as n,ao as i,Q as s,d as a}from"./p-122f2dcc.js";import{c as l,e as u}from"./p-b835ec9d.js";import{b0 as o}from"./p-b54724b6.js";import{crosses as f,touches as p,within as c,overlaps as m,contains as w,intersects as R,relate as S}from"./p-3ba72354.js";import"./p-2f568dc7.js";import"./p-70146138.js";import"./p-a3f0a5f3.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-b8ded059.js";function h(e){return e instanceof o}function j(s,a,S,j){return j(s,a,(async(j,d,b)=>{if(b.length<2)throw new e(s,r.WrongNumberOfParameters,a);if(null===(b=t(b))[0]&&null===b[1])return!1;if(n(b[0])){if(b[1]instanceof o)return new l({parentfeatureset:b[0],relation:S,relationGeom:b[1]});if(null===b[1])return new u({parentfeatureset:b[0]});throw new e(s,r.InvalidParameter,a)}if(h(b[0])){if(h(b[1])){switch(S){case"esriSpatialRelEnvelopeIntersects":return R(i(b[0]),i(b[1]));case"esriSpatialRelIntersects":return R(b[0],b[1]);case"esriSpatialRelContains":return w(b[0],b[1]);case"esriSpatialRelOverlaps":return m(b[0],b[1]);case"esriSpatialRelWithin":return c(b[0],b[1]);case"esriSpatialRelTouches":return p(b[0],b[1]);case"esriSpatialRelCrosses":return f(b[0],b[1])}throw new e(s,r.InvalidParameter,a)}if(n(b[1]))return new l({parentfeatureset:b[1],relation:S,relationGeom:b[0]});if(null===b[1])return!1;throw new e(s,r.InvalidParameter,a)}if(null!==b[0])throw new e(s,r.InvalidParameter,a);return n(b[1])?new u({parentfeatureset:b[1]}):!(b[1]instanceof o||null===b[1])&&void 0}))}function d(i){"async"===i.mode&&(i.functions.intersects=function(e,r){return j(e,r,"esriSpatialRelIntersects",i.standardFunctionAsync)},i.functions.envelopeintersects=function(e,r){return j(e,r,"esriSpatialRelEnvelopeIntersects",i.standardFunctionAsync)},i.signatures.push({name:"envelopeintersects",min:2,max:2}),i.functions.contains=function(e,r){return j(e,r,"esriSpatialRelContains",i.standardFunctionAsync)},i.functions.overlaps=function(e,r){return j(e,r,"esriSpatialRelOverlaps",i.standardFunctionAsync)},i.functions.within=function(e,r){return j(e,r,"esriSpatialRelWithin",i.standardFunctionAsync)},i.functions.touches=function(e,r){return j(e,r,"esriSpatialRelTouches",i.standardFunctionAsync)},i.functions.crosses=function(e,r){return j(e,r,"esriSpatialRelCrosses",i.standardFunctionAsync)},i.functions.relate=function(l,f){return i.standardFunctionAsync(l,f,((i,p,c)=>{if(c=t(c),s(c,3,3,l,f),h(c[0])&&h(c[1]))return S(c[0],c[1],a(c[2]));if(c[0]instanceof o&&null===c[1])return!1;if(c[1]instanceof o&&null===c[0])return!1;if(n(c[0])&&null===c[1])return new u({parentfeatureset:c[0]});if(n(c[1])&&null===c[0])return new u({parentfeatureset:c[1]});if(n(c[0])&&c[1]instanceof o)return c[0].relate(c[1],a(c[2]));if(n(c[1])&&c[0]instanceof o)return c[1].relate(c[0],a(c[2]));if(null===c[0]&&null===c[1])return!1;throw new e(l,r.InvalidParameter,f)}))})}export{d as registerFunctions};
//# sourceMappingURL=p-c464db37.js.map
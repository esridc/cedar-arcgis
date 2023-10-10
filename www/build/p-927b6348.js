import{c as n}from"./p-2f568dc7.js";import{Q as e,V as t,A as r,L as o,d as i,aj as s,B as a,H as l,I as f,z as u,E as c,P as m,q as w,ak as p,O as d,a as E,b as y,al as N,am as h,a0 as b,an as $,S as A}from"./p-122f2dcc.js";import{t as D,e as x}from"./p-623dbe5e.js";import{e as I,j as g,q as j,f as L,c as T,a as F,b as S,d as M,g as O,k as H,F as C,T as R,y as z,x as k,E as G,D as W,A as P}from"./p-38049757.js";import{t as _}from"./p-f89e9181.js";import{e as v,N as B}from"./p-b835ec9d.js";import{bn as J,aZ as Z,bl as q,u as K}from"./p-b54724b6.js";import{f as U}from"./p-b8ded059.js";import"./p-70146138.js";import"./p-a3f0a5f3.js";import"./p-e6a64715.js";import"./p-dc29c329.js";import"./p-832f907c.js";import"./p-5abe9c67.js";import"./p-0856fe30.js";import"./p-a5e3ec2a.js";import"./p-80be55a5.js";import"./p-b88ddb1e.js";import"./p-8dc3148c.js";import"./p-ca5fb53c.js";import"./p-d7fc78fa.js";import"./p-581eca80.js";import"./p-d77465bf.js";import"./p-716cdc73.js";import"./p-a779e49b.js";import"./p-3ba72354.js";function V(n,e,t,r){if(1===r.length){if(u(r[0]))return $(n,r[0],-1);if(w(r[0]))return $(n,r[0].toArray(),-1)}return $(n,r,-1)}async function Y(n,e,t){const r=n.getVariables();if(r.length>0){const o=[];for(let n=0;n<r.length;n++){const i={name:r[n]};o.push(await e.evaluateIdentifier(t,i))}const i={};for(let n=0;n<r.length;n++)i[r[n]]=o[n];return n.parameters=i,n}return n}function Q(n,e,t=null){for(const t in n)if(t.toLowerCase()===e.toLowerCase())return n[t];return t}function X(n){if(null===n)return null;const e={type:Q(n,"type",""),name:Q(n,"name","")};if("range"===e.type)e.range=Q(n,"range",[]);else{e.codedValues=[];for(const t of Q(n,"codedValues",[]))e.codedValues.push({name:Q(t,"name",""),code:Q(t,"code",null)})}return e}function nn(n){if(null===n)return null;const e={},t=Q(n,"wkt",null);null!==t&&(e.wkt=t);const r=Q(n,"wkid",null);return null!==r&&(e.wkid=r),e}function en(n){if(null===n)return null;const e={hasZ:Q(n,"hasz",!1),hasM:Q(n,"hasm",!1)},t=Q(n,"spatialreference",null);t&&(e.spatialReference=nn(t));const r=Q(n,"x",null);if(null!==r)return e.x=r,e.y=Q(n,"y",null),e;const o=Q(n,"rings",null);if(null!==o)return e.rings=o,e;const i=Q(n,"paths",null);if(null!==i)return e.paths=i,e;const s=Q(n,"points",null);if(null!==s)return e.points=s,e;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=Q(n,t,null);null!==r&&(e[t]=r)}return e}function tn(n,e){for(const t of e)if(t===n)return!0;return!1}function rn(n){return!!n.layerDefinition&&(!!n.featureSet&&(!1!==tn(n.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(!1!==u(n.layerDefinition.fields)&&!1!==u(n.featureSet.features))))}function on($){"async"===$.mode&&($.functions.timezone=function(a,l){return $.standardFunctionAsync(a,l,(async(f,u,c)=>{if(e(c,1,2,a,l),t(c[0])){if(await c[0].load(),1===c.length||null===c[1])return c[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(c[1]instanceof r)||!1===c[1].hasField("type"))throw new D(a,x.InvalidParameter,l);const n=c[1].field("type");if(!1===o(n))throw new D(a,x.InvalidParameter,l);switch(i(n).toLowerCase()){case"preferredtimezone":return c[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return c[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return c[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(c[1].hasField("fieldname")&&o(c[1].field("fieldname")))return c[0].dateTimeReferenceFieldIndex.fieldTimeZone(i(c[1].field("fieldname")))}throw new D(a,x.InvalidParameter,l)}const m=s(c[0],A(a));if(null===m)return null;const w=m.timeZone;return"system"===w?n.systemTimeZoneCanonicalName:w}))},$.functions.sqltimestamp=function(n,r){return $.standardFunctionAsync(n,r,(async(o,s,l)=>{e(l,1,3,n,r);const f=l[0];if(a(f)){if(1===l.length)return f.toSQLString();if(2===l.length)return f.changeTimeZone(i(l[1])).toSQLString();throw new D(n,x.InvalidParameter,r)}if(t(f)){if(3!==l.length)throw new D(n,x.InvalidParameter,r);await f.load();const e=i(l[1]);if(!1===a(l[2]))throw new D(n,x.InvalidParameter,r);const t=f.fieldTimeZone(e);return null===t?l[2].toSQLString():l[2].changeTimeZone(t).toSQLString()}throw new D(n,x.InvalidParameter,r)}))},$.signatures.push({name:"sqltimestamp",min:2,max:4}),$.functions.featuresetbyid=function(n,t){return $.standardFunctionAsync(n,t,((r,o,s)=>{if(e(s,2,4,n,t),s[0]instanceof I){const e=i(s[1]);let r=f(s[2],null);const o=l(f(s[3],!0));if(null===r&&(r=["*"]),!1===u(r))throw new D(n,x.InvalidParameter,t);return s[0].featureSetById(e,o,r)}throw new D(n,x.InvalidParameter,t)}))},$.signatures.push({name:"featuresetbyid",min:2,max:4}),$.functions.getfeatureset=function(n,t){return $.standardFunctionAsync(n,t,((r,o,s)=>{if(e(s,1,2,n,t),c(s[0])){let e=f(s[1],"datasource");return null===e&&(e="datasource"),e=i(e).toLowerCase(),g(s[0].fullSchema(),e,n.lrucache,n.interceptor,n.spatialReference)}throw new D(n,x.InvalidParameter,t)}))},$.signatures.push({name:"getfeatureset",min:1,max:2}),$.functions.featuresetbyportalitem=function(n,t){return $.standardFunctionAsync(n,t,((r,s,a)=>{if(e(a,2,5,n,t),null===a[0])throw new D(n,x.PortalRequired,t);if(a[0]instanceof m){const e=i(a[1]),r=i(a[2]);let o=f(a[3],null);const s=l(f(a[4],!0));if(null===o&&(o=["*"]),!1===u(o))throw new D(n,x.InvalidParameter,t);let c=null;return c=n.services&&n.services.portal?n.services.portal:J.getDefault(),c=_(a[0],c),j(e,r,n.spatialReference,o,s,c,n.lrucache,n.interceptor)}if(!1===o(a[0]))throw new D(n,x.PortalRequired,t);const c=i(a[0]),w=i(a[1]);let p=f(a[2],null);const d=l(f(a[3],!0));if(null===p&&(p=["*"]),!1===u(p))throw new D(n,x.InvalidParameter,t);return j(c,w,n.spatialReference,p,d,n.services?.portal??J.getDefault(),n.lrucache,n.interceptor)}))},$.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),$.functions.featuresetbyname=function(n,t){return $.standardFunctionAsync(n,t,((r,o,s)=>{if(e(s,2,4,n,t),s[0]instanceof I){const e=i(s[1]);let r=f(s[2],null);const o=l(f(s[3],!0));if(null===r&&(r=["*"]),!1===u(r))throw new D(n,x.InvalidParameter,t);return s[0].featureSetByName(e,o,r)}throw new D(n,x.InvalidParameter,t)}))},$.signatures.push({name:"featuresetbyname",min:2,max:4}),$.functions.featureset=function(n,t){return $.standardFunction(n,t,((i,s,a)=>{e(a,1,1,n,t);let l=a[0];const f={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(o(l))l=JSON.parse(l),void 0!==l.layerDefinition?(f.layerDefinition=l.layerDefinition,f.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(f.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(f.featureSet.features=l.features,f.featureSet.geometryType=l.geometryType,f.layerDefinition.geometryType=f.featureSet.geometryType,f.layerDefinition.objectIdField=l.objectIdFieldName??"",f.layerDefinition.typeIdField=l.typeIdFieldName,f.layerDefinition.globalIdField=l.globalIdFieldName,f.layerDefinition.fields=l.fields,l.spatialReference&&(f.layerDefinition.spatialReference=l.spatialReference));else{if(!(a[0]instanceof r))throw new D(n,x.InvalidParameter,t);{l=JSON.parse(a[0].castToText(!0));const n=Q(l,"layerdefinition");if(null!==n){f.layerDefinition.geometryType=Q(n,"geometrytype",""),f.featureSet.geometryType=f.layerDefinition.geometryType,f.layerDefinition.globalIdField=Q(n,"globalidfield",""),f.layerDefinition.objectIdField=Q(n,"objectidfield",""),f.layerDefinition.typeIdField=Q(n,"typeidfield",""),f.layerDefinition.hasZ=!0===Q(n,"hasz",!1),f.layerDefinition.hasM=!0===Q(n,"hasm",!1);const e=Q(n,"spatialreference",null);e&&(f.layerDefinition.spatialReference=nn(e));for(const e of Q(n,"fields",[])){const n={name:Q(e,"name",""),alias:Q(e,"alias",""),type:Q(e,"type",""),nullable:Q(e,"nullable",!0),editable:Q(e,"editable",!0),length:Q(e,"length",null),domain:X(Q(e,"domain"))};f.layerDefinition.fields.push(n)}const t=Q(l,"featureset",null);if(t){const n={};for(const e of f.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;for(const e of Q(t,"features",[])){const t={},r=Q(e,"attributes",{});for(const e in r)t[n[e.toLowerCase()]]=r[e];f.featureSet.features.push({attributes:t,geometry:en(Q(e,"geometry",null))})}}}else{f.layerDefinition.hasZ=!0===Q(l,"hasz",!1),f.layerDefinition.hasM=!0===Q(l,"hasm",!1),f.layerDefinition.geometryType=Q(l,"geometrytype",""),f.featureSet.geometryType=f.layerDefinition.geometryType,f.layerDefinition.objectIdField=Q(l,"objectidfieldname",""),f.layerDefinition.typeIdField=Q(l,"typeidfieldname","");const n=Q(l,"spatialreference",null);n&&(f.layerDefinition.spatialReference=nn(n));let e=Q(l,"fields",null);if(u(e))for(const n of e){const e={name:Q(n,"name",""),alias:Q(n,"alias",""),type:Q(n,"type",""),nullable:Q(n,"nullable",!0),editable:Q(n,"editable",!0),length:Q(n,"length",null),domain:X(Q(n,"domain"))};f.layerDefinition.fields.push(e)}else e=null,f.layerDefinition.fields=e;const t={};for(const n of f.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;let r=Q(l,"features",null);if(u(r))for(const n of r){const e={},r=Q(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];f.featureSet.features.push({attributes:e,geometry:en(Q(n,"geometry",null))})}else r=null,f.featureSet.features=r}}}if(!1===rn(f))throw new D(n,x.InvalidParameter,t);return""===(f?.layerDefinition?.geometryType||"")&&(f.layerDefinition.geometryType="esriGeometryNull"),L.create(f,n.spatialReference)}))},$.signatures.push({name:"featureset",min:1,max:1}),$.functions.filter=function(n,r){return $.standardFunctionAsync(n,r,(async(o,i,s)=>{if(e(s,2,2,n,r),u(s[0])||w(s[0])){const e=[];let t=s[0];t instanceof p&&(t=t.toArray());let o=null;if(!d(s[1]))throw new D(n,x.InvalidParameter,r);o=s[1].createFunction(n);for(const n of t){const t=o(n);Z(t)?!0===await t&&e.push(n):!0===t&&e.push(n)}return e}if(t(s[0])){const e=await s[0].load(),t=U.create(s[1],e.getFieldsIndex()),r=t.getVariables();if(r.length>0){const e=[];for(let t=0;t<r.length;t++){const o={name:r[t]};e.push(await $.evaluateIdentifier(n,o))}const o={};for(let n=0;n<r.length;n++)o[r[n]]=e[n];return t.parameters=o,new T({parentfeatureset:s[0],whereclause:t})}return new T({parentfeatureset:s[0],whereclause:t})}throw new D(n,x.InvalidParameter,r)}))},$.signatures.push({name:"filter",min:2,max:2}),$.functions.orderby=function(n,r){return $.standardFunctionAsync(n,r,(async(o,i,s)=>{if(e(s,2,2,n,r),t(s[0])){const n=new F(s[1]);return new S({parentfeatureset:s[0],orderbyclause:n})}throw new D(n,x.InvalidParameter,r)}))},$.signatures.push({name:"orderby",min:2,max:2}),$.functions.top=function(n,r){return $.standardFunctionAsync(n,r,(async(o,i,s)=>{if(e(s,2,2,n,r),t(s[0]))return new M({parentfeatureset:s[0],topnum:s[1]});if(u(s[0]))return E(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,E(s[1]));if(w(s[0]))return E(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,E(s[1]));throw new D(n,x.InvalidParameter,r)}))},$.signatures.push({name:"top",min:2,max:2}),$.functions.first=function(n,r){return $.standardFunctionAsync(n,r,(async(o,i,s)=>{if(e(s,1,1,n,r),t(s[0])){const e=await s[0].first(o.abortSignal);if(null!==e){const t=y.createFromGraphicLikeObject(e.geometry,e.attributes,s[0],n.timeReference);return t._underlyingGraphic=e,t}return e}return u(s[0])?0===s[0].length?null:s[0][0]:w(s[0])?0===s[0].length()?null:s[0].get(0):null}))},$.signatures.push({name:"first",min:1,max:1}),$.functions.attachments=function(n,o){return $.standardFunctionAsync(n,o,(async(i,s,a)=>{e(a,1,2,n,o);const f={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(a.length>1)if(a[1]instanceof r){if(a[1].hasField("minsize")&&(f.minsize=E(a[1].field("minsize"))),a[1].hasField("metadata")&&(f.returnMetadata=l(a[1].field("metadata"))),a[1].hasField("maxsize")&&(f.maxsize=E(a[1].field("maxsize"))),a[1].hasField("types")){const n=N(a[1].field("types"),!1);n.length>0&&(f.types=n)}}else if(null!==a[1])throw new D(n,x.InvalidParameter,o);if(c(a[0])){let e=a[0]._layer;return e instanceof q&&(e=O(e,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===e?[]:!1===t(e)?[]:(await e.load(),e.queryAttachments(a[0].field(e.objectIdField),f.minsize,f.maxsize,f.types,f.returnMetadata))}if(null===a[0])return[];throw new D(n,x.InvalidParameter,o)}))},$.signatures.push({name:"attachments",min:1,max:2}),$.functions.featuresetbyrelationshipname=function(n,r){return $.standardFunctionAsync(n,r,(async(o,s,a)=>{e(a,2,4,n,r);const m=a[0],w=i(a[1]);let p=f(a[2],null);const d=l(f(a[3],!0));if(null===p&&(p=["*"]),!1===u(p))throw new D(n,x.InvalidParameter,r);if(null===a[0])return null;if(!c(a[0]))throw new D(n,x.InvalidParameter,r);let E=m._layer;if(E instanceof q&&(E=O(E,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===E)return null;if(!1===t(E))return null;E=await E.load();const y=E.relationshipMetaData().filter((n=>n.name===w));if(0===y.length)return null;if(void 0!==y[0].relationshipTableId&&null!==y[0].relationshipTableId&&y[0].relationshipTableId>-1)return H(E,y[0],m.field(E.objectIdField),E.spatialReference,p,d,n.lrucache,n.interceptor);let N=E.serviceUrl();if(!N)return null;N="/"===N.charAt(N.length-1)?N+y[0].relatedTableId.toString():N+"/"+y[0].relatedTableId.toString();const h=await C(N,E.spatialReference,p,d,n.lrucache,n.interceptor);await h.load();let b=h.relationshipMetaData();if(b=b.filter((n=>n.id===y[0].id)),!1===m.hasField(y[0].keyField)||null===m.field(y[0].keyField)){const n=await E.getFeatureByObjectId(m.field(E.objectIdField),[y[0].keyField]);if(n){const e=U.create(b[0].keyField+"= @id",h.getFieldsIndex());return e.parameters={id:n.attributes[y[0].keyField]},h.filter(e)}return new v({parentfeatureset:h})}const $=U.create(b[0].keyField+"= @id",h.getFieldsIndex());return $.parameters={id:m.field(y[0].keyField)},h.filter($)}))},$.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),$.functions.featuresetbyassociation=function(n,r){return $.standardFunctionAsync(n,r,(async(s,a,l)=>{e(l,2,3,n,r);const u=l[0],m=i(f(l[1],"")).toLowerCase(),w=o(l[2])?i(l[2]):null;if(null===l[0])return null;if(!c(l[0]))throw new D(n,x.InvalidParameter,r);let p=u._layer;if(p instanceof q&&(p=O(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===p)return null;if(!1===t(p))return null;await p.load();const d=p.serviceUrl(),E=await R(d,n.spatialReference);let y=null,N=null,$=!1;if(null!==w&&""!==w&&void 0!==w){for(const n of E.terminals)n.terminalName===w&&(N=n.terminalId);null===N&&($=!0)}const A=E.associations.getFieldsIndex(),I=A.get("TOGLOBALID").name,g=A.get("FROMGLOBALID").name,j=A.get("TOTERMINALID").name,L=A.get("FROMTERMINALID").name,T=A.get("FROMNETWORKSOURCEID").name,F=A.get("TONETWORKSOURCEID").name,S=A.get("ASSOCIATIONTYPE").name,M=A.get("ISCONTENTVISIBLE").name,H=A.get("OBJECTID").name;for(const n of p.fields)if("global-id"===n.type){y=u.field(n.name);break}let C=null,_=new z(new K({name:"percentalong",alias:"percentalong",type:"double"}),U.create("0",E.associations.getFieldsIndex())),v=new z(new K({name:"side",alias:"side",type:"string"}),U.create("''",E.associations.getFieldsIndex()));const B="globalid",J="globalId",Z={};for(const n in E.lkp)Z[n]=E.lkp[n].sourceId;const V=new k(new K({name:"classname",alias:"classname",type:"string"}),null,Z);let Y="";switch(m){case"midspan":{Y=`((${I}='${y}') OR ( ${g}='${y}')) AND (${S} IN (5))`,V.codefield=U.create(`CASE WHEN (${I}='${y}') THEN ${T} ELSE ${F} END`,E.associations.getFieldsIndex());const n=b(W.findField(E.associations.fields,g));n.name=B,n.alias=B,C=new z(n,U.create(`CASE WHEN (${g}='${y}') THEN ${I} ELSE ${g} END`,E.associations.getFieldsIndex())),_=E.unVersion>=4?new P(W.findField(E.associations.fields,A.get("PERCENTALONG").name)):new z(new K({name:"percentalong",alias:"percentalong",type:"double"}),U.create("0",E.associations.getFieldsIndex()));break}case"junctionedge":{Y=`((${I}='${y}') OR ( ${g}='${y}')) AND (${S} IN (4,6))`,V.codefield=U.create(`CASE WHEN (${I}='${y}') THEN ${T} ELSE ${F} END`,E.associations.getFieldsIndex());const n=b(W.findField(E.associations.fields,g));n.name=B,n.alias=B,C=new z(n,U.create(`CASE WHEN (${g}='${y}') THEN ${I} ELSE ${g} END`,E.associations.getFieldsIndex())),v=new z(new K({name:"side",alias:"side",type:"string"}),U.create(`CASE WHEN (${S}=4) THEN 'from' ELSE 'to' END`,E.associations.getFieldsIndex()));break}case"connected":{let n=`${I}='@T'`,e=`${g}='@T'`;null!==N&&(n+=` AND ${j}=@A`,e+=` AND ${L}=@A`),Y="(("+n+") OR ("+e+"))",Y=h(Y,"@T",y??""),n=h(n,"@T",y??""),null!==N&&(n=h(n,"@A",N.toString()),Y=h(Y,"@A",N.toString())),V.codefield=U.create("CASE WHEN "+n+` THEN ${T} ELSE ${F} END`,E.associations.getFieldsIndex());const t=b(W.findField(E.associations.fields,g));t.name=B,t.alias=B,C=new z(t,U.create("CASE WHEN "+n+` THEN ${g} ELSE ${I} END`,E.associations.getFieldsIndex()));break}case"container":Y=`${I}='${y}' AND ${S} = 2`,null!==N&&(Y+=` AND ${j} = `+N.toString()),V.codefield=T,Y="( "+Y+" )",C=new G(W.findField(E.associations.fields,g),B,B);break;case"content":Y=`(${g}='${y}' AND ${S} = 2)`,null!==N&&(Y+=` AND ${L} = `+N.toString()),V.codefield=F,Y="( "+Y+" )",C=new G(W.findField(E.associations.fields,I),B,B);break;case"structure":Y=`(${I}='${y}' AND ${S} = 3)`,null!==N&&(Y+=` AND ${j} = `+N.toString()),V.codefield=T,Y="( "+Y+" )",C=new G(W.findField(E.associations.fields,g),B,J);break;case"attached":Y=`(${g}='${y}' AND ${S} = 3)`,null!==N&&(Y+=` AND ${L} = `+N.toString()),V.codefield=F,Y="( "+Y+" )",C=new G(W.findField(E.associations.fields,I),B,J);break;default:throw new D(n,x.InvalidParameter,r)}$&&(Y="1 <> 1");return new W({parentfeatureset:E.associations,adaptedFields:[new P(W.findField(E.associations.fields,H)),new P(W.findField(E.associations.fields,M)),C,v,V,_],extraFilter:Y?U.create(Y,E.associations.getFieldsIndex()):null})}))},$.signatures.push({name:"featuresetbyassociation",min:2,max:6}),$.functions.groupby=function(n,s){return $.standardFunctionAsync(n,s,(async(a,l,f)=>{if(e(f,3,3,n,s),!t(f[0]))throw new D(n,x.InvalidParameter,s);const c=await f[0].load(),m=[],p=[];let d=!1,E=[];if(o(f[1]))E.push(f[1]);else if(f[1]instanceof r)E.push(f[1]);else if(u(f[1]))E=f[1];else{if(!w(f[1]))throw new D(n,x.InvalidParameter,s);E=f[1].toArray()}for(const e of E)if(o(e)){const n=U.create(i(e),c.getFieldsIndex()),t=!0===B(n)?i(e):"%%%%FIELDNAME";m.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(d=!0)}else{if(!(e instanceof r))throw new D(n,x.InvalidParameter,s);{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(d=!0),!t)throw new D(n,x.InvalidParameter,s);m.push({name:t,expression:U.create(r||t,c.getFieldsIndex())})}}if(E=[],o(f[2]))E.push(f[2]);else if(u(f[2]))E=f[2];else if(w(f[2]))E=f[2].toArray();else{if(!(f[2]instanceof r))throw new D(n,x.InvalidParameter,s);E.push(f[2])}for(const e of E){if(!(e instanceof r))throw new D(n,x.InvalidParameter,s);{const t=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",o=e.hasField("expression")?e.field("expression"):"";if(!t||!r||!o)throw new D(n,x.InvalidParameter,s);p.push({name:t,statistic:r.toLowerCase(),expression:U.create(o,c.getFieldsIndex())})}}if(d){const n={};for(const e of c.fields)n[e.name.toLowerCase()]=1;for(const e of m)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);for(const e of p)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);let e=0;for(const t of m)if("%%%%FIELDNAME"===t.name){for(;1===n["field_"+e.toString()];)e++;n["field_"+e.toString()]=1,t.name="FIELD_"+e.toString()}}for(const e of m)await Y(e.expression,$,n);for(const e of p)await Y(e.expression,$,n);return f[0].groupby(m,p)}))},$.signatures.push({name:"groupby",min:3,max:3}),$.functions.distinct=function(n,s){return $.standardFunctionAsync(n,s,(async(a,l,f)=>{if(t(f[0])){e(f,2,2,n,s);const t=await f[0].load(),a=[];let l=[];if(o(f[1]))l.push(f[1]);else if(f[1]instanceof r)l.push(f[1]);else if(u(f[1]))l=f[1];else{if(!w(f[1]))throw new D(n,x.InvalidParameter,s);l=f[1].toArray()}let c=!1;for(const e of l)if(o(e)){const n=U.create(i(e),t.getFieldsIndex()),r=!0===B(n)?i(e):"%%%%FIELDNAME";a.push({name:r,expression:n}),"%%%%FIELDNAME"===r&&(c=!0)}else{if(!(e instanceof r))throw new D(n,x.InvalidParameter,s);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",o=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(c=!0),!r)throw new D(n,x.InvalidParameter,s);a.push({name:r,expression:U.create(o||r,t.getFieldsIndex())})}}if(c){const n={};for(const e of t.fields)n[e.name.toLowerCase()]=1;for(const e of a)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);let e=0;for(const t of a)if("%%%%FIELDNAME"===t.name){for(;1===n["field_"+e.toString()];)e++;n["field_"+e.toString()]=1,t.name="FIELD_"+e.toString()}}for(const e of a)await Y(e.expression,$,n);return f[0].groupby(a,[])}return V("distinct",a,l,f)}))})}export{on as registerFunctions};
//# sourceMappingURL=p-927b6348.js.map
import{s as e}from"./p-b54724b6.js";let t;function s(s,r){let n=r.responseType;n?"array-buffer"!==n&&"blob"!==n&&"json"!==n&&"native"!==n&&"native-request-init"!==n&&"text"!==n&&(n="text"):n="json",r.responseType=n;const a=r.signal;return delete r.signal,globalThis.invokeStaticMessage("request",{url:s,options:r},{signal:a}).then((async o=>{let i,l,u,c,b;if(o.data)if(o.data instanceof ArrayBuffer){if(!("json"!==n&&"text"!==n&&"blob"!==n||(i=new Blob([o.data]),"json"!==n&&"text"!==n||(t||(t=new FileReaderSync),c=t.readAsText(i),"json"!==n)))){try{l=JSON.parse(c||null)}catch(t){const n={...t,url:s,requestOptions:r};throw new e("request:server",t.message,n)}if(l.error){const t={...l.error,url:s,requestOptions:r};throw new e("request:server",l.error.message,t)}}}else"native"===n&&(o.data.signal=a,u=await fetch(o.data.url,o.data),o.httpStatus=u.status);switch(n){case"blob":b=i;break;case"json":b=l;break;case"native":b=u;break;case"text":b=c;break;default:b=o.data}return{data:b,httpStatus:o.httpStatus,requestOptions:r,ssl:o.ssl,url:s}}))}export{s as execute};
//# sourceMappingURL=p-117890fa.js.map
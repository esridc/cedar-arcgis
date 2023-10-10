import{bc as n,dd as t}from"./p-b54724b6.js";const e={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(t=n()){let r=(t=t.toLowerCase())in e;if(!r){const n=t.split("-");n.length>1&&n[0]in e&&(t=n[0],r=!0),r||(t="en")}const[o,i,s="#,##0.###"]=e[t];return{decimal:o,group:i,pattern:s}}function o(n,t){const e=r((t={...t}).locale);t.customs=e;const o=t.pattern||e.pattern;return isNaN(n)||Math.abs(n)===1/0?null:s(n,o,t)}const i=/[#0,]*[#0](?:\.0*#*)?/;function s(n,t,e){const r=(e=e||{}).customs.group,o=e.customs.decimal,s=t.split(";"),u=s[0];if((t=s[n<0?1:0]||"-"+u).includes("%"))n*=100;else if(t.includes("‰"))n*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=i,f=u.match(a);if(!f)throw new Error("unable to find a number expression in pattern: "+t);return!1===e.fractional&&(e.places=0),t.replace(a,c(n,f[0],{decimal:o,group:r,places:e.places,round:e.round}))}function c(n,t,e){!0===(e=e||{}).places&&(e.places=0),e.places===1/0&&(e.places=6);const r=t.split("."),o="string"==typeof e.places&&e.places.indexOf(",");let i=e.places;o?i=e.places.substring(o+1):+i>=0||(i=(r[1]||[]).length),e.round<0||(n=Number(n.toFixed(Number(i))));const s=String(Math.abs(n)).split("."),c=s[1]||"";if(r[1]||e.places){o&&(e.places=e.places.substring(0,o));const n=void 0!==e.places?e.places:r[1]&&r[1].lastIndexOf("0")+1;+n>c.length&&(s[1]=c.padEnd(Number(n),"0")),+i<c.length&&(s[1]=c.substr(0,Number(i)))}else s[1]&&s.pop();const u=r[0].replace(",","");let a=u.indexOf("0");-1!==a&&(a=u.length-a,a>s[0].length&&(s[0]=s[0].padStart(a,"0")),u.includes("#")||(s[0]=s[0].substr(s[0].length-a)));let f,l,p=r[0].lastIndexOf(",");if(-1!==p){f=r[0].length-p-1;const n=r[0].substr(0,p);p=n.lastIndexOf(","),-1!==p&&(l=n.length-p-1)}const d=[];for(let n=s[0];n;){const t=n.length-f;d.push(t>0?n.substr(t):n),n=t>0?n.slice(0,t):"",l&&(f=l,l=void 0)}return s[0]=d.reverse().join(e.group||","),s.join(e.decimal||".")}function u(n){const e=r((n=n||{}).locale),o=n.pattern||e.pattern,s=e.group,c=e.decimal;let u=1;if(o.includes("%"))u/=100;else if(o.includes("‰"))u/=1e3;else if(o.includes("¤"))throw new Error("currency notation not supported");const a=o.split(";");1===a.length&&a.push("-"+a[0]);const l=p(a,(e=>(e="(?:"+t(e,".")+")").replace(i,(t=>{const e={signed:!1,separator:n.strict?s:[s,""],fractional:n.fractional,decimal:c,exponent:!1},r=t.split(".");let o=n.places;1===r.length&&1!==u&&(r[1]="###"),1===r.length||0===o?e.fractional=!1:(void 0===o&&(o=n.pattern?r[1].lastIndexOf("0")+1:1/0),o&&null==n.fractional&&(e.fractional=!0),!n.places&&+o<r[1].length&&(o+=","+r[1].length),e.places=o);const i=r[0].split(",");return i.length>1&&(e.groupSize=i.pop().length,i.length>1&&(e.groupSize2=i.pop().length)),"("+f(e)+")"}))),!0);return{regexp:l.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:c,factor:u}}function a(n,t){const e=u(t),r=new RegExp("^"+e.regexp+"$").exec(n);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replaceAll(new RegExp("["+e.group+"\\s\\xa0]","g"),"").replace(e.decimal,"."),Number(o)*e.factor}function f(n){"places"in(n=n||{})||(n.places=1/0),"string"!=typeof n.decimal&&(n.decimal="."),"fractional"in n&&!/^0/.test(String(n.places))||(n.fractional=[!0,!1]),"exponent"in n||(n.exponent=[!0,!1]),"eSigned"in n||(n.eSigned=[!0,!1]);const t=l(n),e=p(n.fractional,(t=>{let e="";return t&&0!==n.places&&(e="\\"+n.decimal,n.places===1/0?e="(?:"+e+"\\d+)?":e+="\\d{"+n.places+"}"),e}),!0);let r=t+e;return e&&(r="(?:(?:"+r+")|(?:"+e+"))"),r+p(n.exponent,(t=>t?"([eE]"+l({signed:n.eSigned})+")":""))}function l(n){"signed"in(n=n||{})||(n.signed=[!0,!1]),"separator"in n?"groupSize"in n||(n.groupSize=3):n.separator="";return p(n.signed,(n=>n?"[-+]":""),!0)+p(n.separator,(e=>{if(!e)return"(?:\\d+)";" "===(e=t(e))?e="\\s":" "===e&&(e="\\s\\xa0");const r=n.groupSize,o=n.groupSize2;if(o){const n="(?:0|[1-9]\\d{0,"+(o-1)+"}(?:["+e+"]\\d{"+o+"})*["+e+"]\\d{"+r+"})";return r-o>0?"(?:"+n+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":n}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+e+"]\\d{"+r+"})*)"}),!0)}const p=(n,t,e)=>{if(!(n instanceof Array))return t(n);const r=[];for(let e=0;e<n.length;e++)r.push(t(n[e]));return d(r.join("|"),Boolean(e))},d=(n,t)=>"("+(t?"?:":"")+n+")";export{u as a,a as p,o as s};
//# sourceMappingURL=p-70146138.js.map
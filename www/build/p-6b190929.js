const t=new Float64Array(2),n=new Float64Array(2),o="0123456789bcdefghjkmnpqrstuvwxyz";function r(t){return o[t]}function e(t){return(t[0]+t[1])/2}function c(t,n,o){return t[0]=n,t[1]=o,t}function f(t,n){const o=e(t),r=n,c=!n;t[0]=c*t[0]+r*o,t[1]=c*o+r*t[1]}function l(t,n){const o=n>e(t);return f(t,o),o}function u(t,n){let o=-90,r=90,e=-180,c=180;for(let f=0;f<n;f++){const n=Math.ceil((f+1)/2),l=Math.floor((f+1)/2),u=1-f%2,s=30-(3*n+2*l),i=30-(2*n+3*l),a=3*u+2*(1-u),h=2*u+3*(1-u),w=3*u+7*(1-u)<<i,y=(7*u+3*(1-u)<<s&t.geohashX)>>s,p=(w&t.geohashY)>>i;for(let t=a-1;t>=0;t--){const n=(e+c)/2,o=y&1<<t?1:0;e=(1-o)*e+o*n,c=(1-o)*n+o*c}for(let t=h-1;t>=0;t--){const n=(o+r)/2,e=p&1<<t?1:0;o=(1-e)*o+e*n,r=(1-e)*n+e*r}}return[e,o,c,r]}function s(t,n,o,r){r%2&&(r+=1);let e=0,c=0,f=-90,l=90,u=-180,s=180;for(let t=0;t<r/2;t++){for(let n=0;n<5;n++){const r=(u+s)/2,c=o>r?1:0;e|=c<<29-(n+5*t),u=(1-c)*u+c*r,s=(1-c)*r+c*s}for(let o=0;o<5;o++){const r=(f+l)/2,e=n>r?1:0;c|=e<<29-(o+5*t),f=(1-e)*f+e*r,l=(1-e)*r+e*l}}t.geohashX=e,t.geohashY=c}function i(t,n,o,r,e){e%2&&(e+=1);let c=0,f=0,l=-90,u=90,s=-180,i=180;for(let t=0;t<e/2;t++){for(let n=0;n<5;n++){const o=(s+i)/2,e=r>o?1:0;c|=e<<29-(n+5*t),s=(1-e)*s+e*o,i=(1-e)*o+e*i}for(let n=0;n<5;n++){const r=(l+u)/2,e=o>r?1:0;f|=e<<29-(n+5*t),l=(1-e)*l+e*r,u=(1-e)*r+e*u}}t[2*n]=c,t[2*n+1]=f}function a(o,e,f){let u="";const s=c(t,-90,90),i=c(n,-180,180);for(let t=0;t<f;t++){let n=0;!(t%2)?(n|=l(i,e)<<4,n|=l(s,o)<<3,n|=l(i,e)<<2,n|=l(s,o)<<1,n|=l(i,e)<<0):(n|=l(s,o)<<4,n|=l(i,e)<<3,n|=l(s,o)<<2,n|=l(i,e)<<1,n|=l(s,o)<<0),u+=r(n)}return u}export{u as X,s as Y,i as b,a as p};
//# sourceMappingURL=p-6b190929.js.map
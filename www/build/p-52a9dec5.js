import{bK as t}from"./p-b54724b6.js";function n(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function a(t,n,r,a,o,u,c,e,M,i){return t[0]=n,t[1]=r,t[2]=a,t[3]=o,t[4]=u,t[5]=c,t[6]=e,t[7]=M,t[8]=i,t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function u(t,n){if(t===n){const r=n[1],a=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=a,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function c(t,n){const r=n[0],a=n[1],o=n[2],u=n[3],c=n[4],e=n[5],M=n[6],i=n[7],h=n[8],f=h*c-e*i,l=-h*u+e*M,s=i*u-c*M;let m=r*f+a*l+o*s;return m?(m=1/m,t[0]=f*m,t[1]=(-h*a+o*i)*m,t[2]=(e*a-o*c)*m,t[3]=l*m,t[4]=(h*r-o*M)*m,t[5]=(-e*r+o*u)*m,t[6]=s*m,t[7]=(-i*r+a*M)*m,t[8]=(c*r-a*u)*m,t):null}function e(t,n){const r=n[0],a=n[1],o=n[2],u=n[3],c=n[4],e=n[5],M=n[6],i=n[7],h=n[8];return t[0]=c*h-e*i,t[1]=o*i-a*h,t[2]=a*e-o*c,t[3]=e*M-u*h,t[4]=r*h-o*M,t[5]=o*u-r*e,t[6]=u*i-c*M,t[7]=a*M-r*i,t[8]=r*c-a*u,t}function M(t){const n=t[0],r=t[1],a=t[2],o=t[3],u=t[4],c=t[5],e=t[6],M=t[7],i=t[8];return n*(i*u-c*M)+r*(-i*o+c*e)+a*(M*o-u*e)}function i(t,n,r){const a=n[0],o=n[1],u=n[2],c=n[3],e=n[4],M=n[5],i=n[6],h=n[7],f=n[8],l=r[0],s=r[1],m=r[2],d=r[3],p=r[4],b=r[5],y=r[6],j=r[7],S=r[8];return t[0]=l*a+s*c+m*i,t[1]=l*o+s*e+m*h,t[2]=l*u+s*M+m*f,t[3]=d*a+p*c+b*i,t[4]=d*o+p*e+b*h,t[5]=d*u+p*M+b*f,t[6]=y*a+j*c+S*i,t[7]=y*o+j*e+S*h,t[8]=y*u+j*M+S*f,t}function h(t,n,r){const a=n[0],o=n[1],u=n[2],c=n[3],e=n[4],M=n[5],i=n[6],h=n[7],f=n[8],l=r[0],s=r[1];return t[0]=a,t[1]=o,t[2]=u,t[3]=c,t[4]=e,t[5]=M,t[6]=l*a+s*c+i,t[7]=l*o+s*e+h,t[8]=l*u+s*M+f,t}function f(t,n,r){const a=n[0],o=n[1],u=n[2],c=n[3],e=n[4],M=n[5],i=n[6],h=n[7],f=n[8],l=Math.sin(r),s=Math.cos(r);return t[0]=s*a+l*c,t[1]=s*o+l*e,t[2]=s*u+l*M,t[3]=s*c-l*a,t[4]=s*e-l*o,t[5]=s*M-l*u,t[6]=i,t[7]=h,t[8]=f,t}function l(t,n,r){const a=r[0],o=r[1],u=r[2];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=u*n[6],t[7]=u*n[7],t[8]=u*n[8],t}function s(t,n,r){const a=r[0],o=r[1];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t}function m(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function d(t,n){const r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function p(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function b(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function y(t,n){const r=n[0],a=n[1],o=n[2],u=n[3],c=r+r,e=a+a,M=o+o,i=r*c,h=a*c,f=a*e,l=o*c,s=o*e,m=o*M,d=u*c,p=u*e,b=u*M;return t[0]=1-f-m,t[3]=h-b,t[6]=l+p,t[1]=h+b,t[4]=1-i-m,t[7]=s-d,t[2]=l-p,t[5]=s+d,t[8]=1-i-f,t}function j(t,n){const r=n[0],a=n[1],o=n[2],u=n[4],c=n[5],e=n[6],M=n[8],i=n[9],h=n[10],f=h*c-e*i,l=-h*u+e*M,s=i*u-c*M,m=r*f+a*l+o*s;if(!m)return null;const d=1/m;return t[0]=f*d,t[1]=(-h*a+o*i)*d,t[2]=(e*a-o*c)*d,t[3]=l*d,t[4]=(h*r-o*M)*d,t[5]=(-e*r+o*u)*d,t[6]=s*d,t[7]=(-i*r+a*M)*d,t[8]=(c*r-a*u)*d,t}function S(t,n){const r=n[0],a=n[1],o=n[2],u=n[3],c=n[4],e=n[5],M=n[6],i=n[7],h=n[8],f=n[9],l=n[10],s=n[11],m=n[12],d=n[13],p=n[14],b=n[15],y=r*e-a*c,j=r*M-o*c,S=r*i-u*c,_=a*M-o*e,O=a*i-u*e,g=o*i-u*M,q=h*d-f*m,v=h*p-l*m,x=h*b-s*m,A=f*p-l*d,F=f*b-s*d,B=l*b-s*p;let E=y*B-j*F+S*A+_*x-O*v+g*q;return E?(E=1/E,t[0]=(e*B-M*F+i*A)*E,t[1]=(M*x-c*B-i*v)*E,t[2]=(c*F-e*x+i*q)*E,t[3]=(o*F-a*B-u*A)*E,t[4]=(r*B-o*x+u*v)*E,t[5]=(a*x-r*F-u*q)*E,t[6]=(d*g-p*O+b*_)*E,t[7]=(p*S-m*g-b*j)*E,t[8]=(m*O-d*S+b*y)*E,t):null}function _(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function O(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function g(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function q(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t}function v(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}function x(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t}function A(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t}function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function B(n,r){const a=n[0],o=n[1],u=n[2],c=n[3],e=n[4],M=n[5],i=n[6],h=n[7],f=n[8],l=r[0],s=r[1],m=r[2],d=r[3],p=r[4],b=r[5],y=r[6],j=r[7],S=r[8],_=t();return Math.abs(a-l)<=_*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(o-s)<=_*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(u-m)<=_*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-d)<=_*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(e-p)<=_*Math.max(1,Math.abs(e),Math.abs(p))&&Math.abs(M-b)<=_*Math.max(1,Math.abs(M),Math.abs(b))&&Math.abs(i-y)<=_*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(h-j)<=_*Math.max(1,Math.abs(h),Math.abs(j))&&Math.abs(f-S)<=_*Math.max(1,Math.abs(f),Math.abs(S))}function E(n){const r=t(),a=n[0],o=n[1],u=n[2],c=n[3],e=n[4],M=n[5],i=n[6],h=n[7],f=n[8];return Math.abs(1-(a*a+c*c+i*i))<=r&&Math.abs(1-(o*o+e*e+h*h))<=r&&Math.abs(1-(u*u+M*M+f*f))<=r}const K=i,L=v;Object.freeze(Object.defineProperty({__proto__:null,add:q,adjoint:e,copy:r,determinant:M,equals:B,exactEquals:F,frob:g,fromMat2d:b,fromMat4:n,fromQuat:y,fromRotation:d,fromScaling:p,fromTranslation:m,identity:o,invert:c,isOrthoNormal:E,mul:K,multiply:i,multiplyScalar:x,multiplyScalarAndAdd:A,normalFromMat4:S,normalFromMat4Legacy:j,projection:_,rotate:f,scale:l,scaleByVec2:s,set:a,str:O,sub:L,subtract:v,translate:h,transpose:u},Symbol.toStringTag,{value:"Module"}));export{E as B,h as M,n as a,s as b,e as c,l as f,S as g,f as h,i,m as l,u as o,o as r,a as s,c as u};
//# sourceMappingURL=p-52a9dec5.js.map
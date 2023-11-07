(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cs="158",Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=0,$s=1,wl=2,Lo=1,Rl=2,nn=3,_n=0,Et=1,Wt=2,pn=0,si=1,Zs=2,js=3,Ks=4,Cl=5,An=100,Ll=101,Pl=102,Js=103,Qs=104,Dl=200,Ul=201,Il=202,Nl=203,gs=204,_s=205,Fl=206,Ol=207,Bl=208,zl=209,Hl=210,Gl=211,Vl=212,kl=213,Wl=214,Xl=0,Yl=1,ql=2,mr=3,$l=4,Zl=5,jl=6,Kl=7,Po=0,Jl=1,Ql=2,mn=0,ec=1,tc=2,nc=3,ic=4,rc=5,Do=300,li=301,ci=302,gr=303,vs=304,yr=306,xs=1e3,Rt=1001,Ms=1002,dt=1003,ea=1004,Nr=1005,st=1006,sc=1007,hi=1008,gn=1009,ac=1010,oc=1011,Ls=1012,Uo=1013,fn=1014,zt=1015,sn=1016,Io=1017,No=1018,Rn=1020,lc=1021,Bt=1023,cc=1024,hc=1025,Cn=1026,ui=1027,uc=1028,Fo=1029,dc=1030,Oo=1031,Bo=1033,Fr=33776,Or=33777,Br=33778,zr=33779,ta=35840,na=35841,ia=35842,ra=35843,fc=36196,sa=37492,aa=37496,oa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,Hr=36492,Sa=36494,Ea=36495,pc=36283,ya=36284,Ta=36285,ba=36286,zo=3e3,Ln=3001,mc=3200,gc=3201,Ho=0,_c=1,Dt="",rt="srgb",qt="srgb-linear",Ps="display-p3",Tr="display-p3-linear",_r="linear",je="srgb",vr="rec709",xr="p3",Hn=7680,Aa=519,vc=512,xc=513,Mc=514,Sc=515,Ec=516,yc=517,Tc=518,bc=519,wa=35044,Ra="300 es",Ss=1035,an=2e3,Mr=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const yi=Math.PI/180,Ri=180/Math.PI;function On(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Ds(i,e){return(i%e+e)%e}function Ac(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wc(i,e,t){return i!==e?(t-i)/(e-i):0}function Ti(i,e,t){return(1-t)*i+t*e}function Rc(i,e,t,n){return Ti(i,e,1-Math.exp(-t*n))}function Cc(i,e=1){return e-Math.abs(Ds(i,e*2)-e)}function Lc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uc(i,e){return i+Math.random()*(e-i)}function Ic(i){return i*(.5-Math.random())}function Nc(i){i!==void 0&&(Ca=i);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fc(i){return i*yi}function Oc(i){return i*Ri}function Es(i){return(i&i-1)===0&&i!==0}function Bc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hc={DEG2RAD:yi,RAD2DEG:Ri,generateUUID:On,clamp:at,euclideanModulo:Ds,mapLinear:Ac,inverseLerp:wc,lerp:Ti,damp:Rc,pingpong:Cc,smoothstep:Lc,smootherstep:Pc,randInt:Dc,randFloat:Uc,randFloatSpread:Ic,seededRandom:Nc,degToRad:Fc,radToDeg:Oc,isPowerOfTwo:Es,ceilPowerOfTwo:Bc,floorPowerOfTwo:Sr,setQuaternionFromProperEuler:zc,normalize:Mt,denormalize:ni};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],d=r[6],y=r[1],v=r[4],S=r[7],w=r[2],P=r[5],A=r[8];return s[0]=a*_+o*y+l*w,s[3]=a*p+o*v+l*P,s[6]=a*d+o*S+l*A,s[1]=c*_+h*y+u*w,s[4]=c*p+h*v+u*P,s[7]=c*d+h*S+u*A,s[2]=f*_+m*y+g*w,s[5]=f*p+m*v+g*P,s[8]=f*d+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=t*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Ve;function Go(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gc(){const i=Ci("canvas");return i.style.display="block",i}const La={};function bi(i){i in La||(La[i]=!0,console.warn(i))}const Pa=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bi={[qt]:{transfer:_r,primaries:vr,toReference:i=>i,fromReference:i=>i},[rt]:{transfer:je,primaries:vr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tr]:{transfer:_r,primaries:xr,toReference:i=>i.applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa)},[Ps]:{transfer:je,primaries:xr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa).convertLinearToSRGB()}},Vc=new Set([qt,Tr]),$e={enabled:!0,_workingColorSpace:qt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Bi[e].toReference,r=Bi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bi[i].primaries},getTransfer:function(i){return i===Dt?_r:Bi[i].transfer}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Vo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Ci("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kc=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(kr(r[a].image)):s.push(kr(r[a]))}else s=kr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wc=0;class gt extends Fn{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Rt,r=Rt,s=st,a=hi,o=Bt,l=gn,c=gt.DEFAULT_ANISOTROPY,h=Dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=On(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ln?rt:Dt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Ln:zo}set encoding(e){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?rt:Dt}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Do;gt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,w=(d+1)/2,P=(h+f)/4,A=(u+_)/4,I=(g+p)/4;return v>S&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=P/n,s=A/n):S>w?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=P/r,s=I/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=A/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends Fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?rt:Dt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:st,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wo extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const w=Math.sqrt(v),P=Math.atan2(w,d*y);p=Math.sin(p*P)/w,o=Math.sin(o*P)/w}const S=o*y;if(l=l*p+f*S,c=c*p+m*S,h=h*p+g*S,u=u*p+_*S,p===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new U,Ua=new Dn;class Ni{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,It):It.fromBufferAttribute(s,a),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Hi.subVectors(this.max,vi),Vn.subVectors(e.a,vi),kn.subVectors(e.b,vi),Wn.subVectors(e.c,vi),on.subVectors(kn,Vn),ln.subVectors(Wn,kn),Sn.subVectors(Vn,Wn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,on.z,0,-on.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!Xr(t,Vn,kn,Wn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Vn,kn,Wn,Hi))?!1:(Gi.crossVectors(on,ln),t=[Gi.x,Gi.y,Gi.z],Xr(t,Vn,kn,Wn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new U,new U,new U,new U,new U,new U,new U,new U],It=new U,zi=new Ni,Vn=new U,kn=new U,Wn=new U,on=new U,ln=new U,Sn=new U,vi=new U,Hi=new U,Gi=new U,En=new U;function Xr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){En.fromArray(i,s);const o=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qc=new Ni,xi=new U,Yr=new U;class br{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Yr)),this.expandByPoint(xi.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new U,qr=new U,Vi=new U,cn=new U,$r=new U,ki=new U,Zr=new U;class Us{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=cn.dot(this.direction),l=-cn.dot(Vi),c=cn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qr).addScaledVector(Vi,f),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,s){$r.subVectors(t,e),ki.subVectors(n,e),Zr.crossVectors($r,ki);let a=this.direction.dot(Zr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);const l=o*this.direction.dot(ki.crossVectors(cn,ki));if(l<0)return null;const c=o*this.direction.dot($r.cross(cn));if(c<0||l+c>a)return null;const h=-o*cn.dot(Zr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,a,o,l,c,h,u,f,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,m,g,_,p)}set(e,t,n,r,s,a,o,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Xn.setFromMatrixColumn(e,0).length(),s=1/Xn.setFromMatrixColumn(e,1).length(),a=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($c,e,Zc)}lookAt(e,t,n){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),hn.crossVectors(n,At),hn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),hn.crossVectors(n,At)),hn.normalize(),Wi.crossVectors(At,hn),r[0]=hn.x,r[4]=Wi.x,r[8]=At.x,r[1]=hn.y,r[5]=Wi.y,r[9]=At.y,r[2]=hn.z,r[6]=Wi.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],y=n[3],v=n[7],S=n[11],w=n[15],P=r[0],A=r[4],I=r[8],M=r[12],T=r[1],B=r[5],q=r[9],Z=r[13],C=r[2],O=r[6],G=r[10],X=r[14],ne=r[3],K=r[7],j=r[11],N=r[15];return s[0]=a*P+o*T+l*C+c*ne,s[4]=a*A+o*B+l*O+c*K,s[8]=a*I+o*q+l*G+c*j,s[12]=a*M+o*Z+l*X+c*N,s[1]=h*P+u*T+f*C+m*ne,s[5]=h*A+u*B+f*O+m*K,s[9]=h*I+u*q+f*G+m*j,s[13]=h*M+u*Z+f*X+m*N,s[2]=g*P+_*T+p*C+d*ne,s[6]=g*A+_*B+p*O+d*K,s[10]=g*I+_*q+p*G+d*j,s[14]=g*M+_*Z+p*X+d*N,s[3]=y*P+v*T+S*C+w*ne,s[7]=y*A+v*B+S*O+w*K,s[11]=y*I+v*q+S*G+w*j,s[15]=y*M+v*Z+S*X+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*o*f+n*c*f+r*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],y=u*p*c-_*f*c+_*l*m-o*p*m-u*l*d+o*f*d,v=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,S=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,w=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,P=t*y+n*v+r*S+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=y*A,e[1]=(_*f*s-u*p*s-_*r*m+n*p*m+u*r*d-n*f*d)*A,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*d+n*l*d)*A,e[3]=(u*l*s-o*f*s-u*r*c+n*f*c+o*r*m-n*l*m)*A,e[4]=v*A,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*d+t*f*d)*A,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*d-t*l*d)*A,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*m+t*l*m)*A,e[8]=S*A,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*d-t*u*d)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*A,e[12]=w*A,e[13]=(h*_*r-g*u*r+g*n*f-t*_*f-h*n*p+t*u*p)*A,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,m=s*h,g=s*u,_=a*h,p=a*u,d=o*u,y=l*c,v=l*h,S=l*u,w=n.x,P=n.y,A=n.z;return r[0]=(1-(_+d))*w,r[1]=(m+S)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(m-S)*P,r[5]=(1-(f+d))*P,r[6]=(p+y)*P,r[7]=0,r[8]=(g+v)*A,r[9]=(p-y)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const a=Xn.set(r[4],r[5],r[6]).length(),o=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const c=1/s,h=1/a,u=1/o;return Nt.elements[0]*=c,Nt.elements[1]*=c,Nt.elements[2]*=c,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=an){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(o===an)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Mr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),f=(t+e)*c,m=(n+r)*h;let g,_;if(o===an)g=(a+s)*u,_=-2*u;else if(o===Mr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new U,Nt=new ot,$c=new U(0,0,0),Zc=new U(1,1,1),hn=new U,Wi=new U,At=new U,Ia=new ot,Na=new Dn;class Ar{constructor(e=0,t=0,n=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jc=0;const Fa=new U,Yn=new Dn,Jt=new ot,Xi=new U,Mi=new U,Kc=new U,Jc=new Dn,Oa=new U(1,0,0),Ba=new U(0,1,0),za=new U(0,0,1),Qc={type:"added"},eh={type:"removed"};class yt extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new U,t=new Ar,n=new Dn,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ve}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Oa,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oa,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Mi,Xi,this.up):Jt.lookAt(Xi,Mi,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,Kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new U(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new U,Qt=new U,jr=new U,en=new U,qn=new U,$n=new U,Ha=new U,Kr=new U,Jr=new U,Qr=new U;let Yi=!1;class Ot{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),Qt.subVectors(n,t),jr.subVectors(e,t);const a=Ft.dot(Ft),o=Ft.dot(Qt),l=Ft.dot(jr),c=Qt.dot(Qt),h=Qt.dot(jr),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,r,s,a,o,l){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,en),l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),Qt.subVectors(e,t),Ft.cross(Qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ft.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;qn.subVectors(r,n),$n.subVectors(s,n),Kr.subVectors(e,n);const l=qn.dot(Kr),c=$n.dot(Kr);if(l<=0&&c<=0)return t.copy(n);Jr.subVectors(e,r);const h=qn.dot(Jr),u=$n.dot(Jr);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qn,a);Qr.subVectors(e,s);const m=qn.dot(Qr),g=$n.dot(Qr);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector($n,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ha.subVectors(s,r),o=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(Ha,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},qi={h:0,s:0,l:0};function es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=Ds(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=es(a,s,e+1/3),this.g=es(a,s,e),this.b=es(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const n=Yo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return $e.fromWorkingColorSpace(mt.copy(this),e),Math.round(at(mt.r*255,0,255))*65536+Math.round(at(mt.g*255,0,255))*256+Math.round(at(mt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=rt){$e.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(qi);const n=Ti(un.h,qi.h,t),r=Ti(un.s,qi.s,t),s=Ti(un.l,qi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new qe;qe.NAMES=Yo;let th=0;class fi extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=On(),this.name="",this.type="Material",this.blending=si,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gs&&(n.blendSrc=this.blendSrc),this.blendDst!==_s&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wr extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=nh();function nh(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function ih(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),rn.floatView[0]=i;const e=rn.uint32View[0],t=e>>23&511;return rn.baseTable[t]+((e&8388607)>>rn.shiftTable[t])}function rh(i){const e=i>>10;return rn.uint32View[0]=rn.mantissaTable[rn.offsetTable[e]+(i&1023)]+rn.exponentTable[e],rn.floatView[0]}const $i={toHalfFloat:ih,fromHalfFloat:rh},it=new U,Zi=new de;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this.updateRange={offset:0,count:-1},this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class qo extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $o extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sh=0;const Lt=new ot,ts=new yt,Zn=new U,wt=new Ni,Si=new Ni,ut=new U;class Ht extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Go(e)?$o:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return ts.lookAt(e),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(wt.min,Si.min),wt.expandByPoint(ut),ut.addVectors(wt.max,Si.max),wt.expandByPoint(ut)):(wt.expandByPoint(Si.min),wt.expandByPoint(Si.max))}wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ut.fromBufferAttribute(o,c),l&&(Zn.fromBufferAttribute(e,c),ut.add(Zn)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new U,h[T]=new U;const u=new U,f=new U,m=new U,g=new de,_=new de,p=new de,d=new U,y=new U;function v(T,B,q){u.fromArray(r,T*3),f.fromArray(r,B*3),m.fromArray(r,q*3),g.fromArray(a,T*2),_.fromArray(a,B*2),p.fromArray(a,q*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const Z=1/(_.x*p.y-p.x*_.y);isFinite(Z)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Z),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Z),c[T].add(d),c[B].add(d),c[q].add(d),h[T].add(y),h[B].add(y),h[q].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,B=S.length;T<B;++T){const q=S[T],Z=q.start,C=q.count;for(let O=Z,G=Z+C;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const w=new U,P=new U,A=new U,I=new U;function M(T){A.fromArray(s,T*3),I.copy(A);const B=c[T];w.copy(B),w.sub(A.multiplyScalar(A.dot(B))).normalize(),P.crossVectors(I,B);const Z=P.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=Z}for(let T=0,B=S.length;T<B;++T){const q=S[T],Z=q.start,C=q.count;for(let O=Z,G=Z+C;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new ot,yn=new Us,ji=new br,Va=new U,jn=new U,Kn=new U,Jn=new U,ns=new U,Ki=new U,Ji=new de,Qi=new de,er=new de,ka=new U,Wa=new U,Xa=new U,tr=new U,nr=new U;class Ut extends yt{constructor(e=new Ht,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ki.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ns.fromBufferAttribute(u,e),a?Ki.addScaledVector(ns,h):Ki.addScaledVector(ns.sub(t),h))}t.add(Ki)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(ji.containsPoint(yn.origin)===!1&&(yn.intersectSphere(ji,Va)===null||yn.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(Ga.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,w=v;S<w;S+=3){const P=o.getX(S),A=o.getX(S+1),I=o.getX(S+2);r=ir(this,d,e,n,c,h,u,P,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);r=ir(this,a,e,n,c,h,u,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,w=v;S<w;S+=3){const P=S,A=S+1,I=S+2;r=ir(this,d,e,n,c,h,u,P,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=p,v=p+1,S=p+2;r=ir(this,a,e,n,c,h,u,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ah(i,e,t,n,r,s,a,o){let l;if(e.side===Et?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===_n,o),l===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:i}}function ir(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,jn),i.getVertexPosition(l,Kn),i.getVertexPosition(c,Jn);const h=ah(i,e,t,n,jn,Kn,Jn,tr);if(h){r&&(Ji.fromBufferAttribute(r,o),Qi.fromBufferAttribute(r,l),er.fromBufferAttribute(r,c),h.uv=Ot.getInterpolation(tr,jn,Kn,Jn,Ji,Qi,er,new de)),s&&(Ji.fromBufferAttribute(s,o),Qi.fromBufferAttribute(s,l),er.fromBufferAttribute(s,c),h.uv1=Ot.getInterpolation(tr,jn,Kn,Jn,Ji,Qi,er,new de),h.uv2=h.uv1),a&&(ka.fromBufferAttribute(a,o),Wa.fromBufferAttribute(a,l),Xa.fromBufferAttribute(a,c),h.normal=Ot.getInterpolation(tr,jn,Kn,Jn,ka,Wa,Xa,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Ot.getNormal(jn,Kn,Jn,u.normal),h.face=u}return h}class pi extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function g(_,p,d,y,v,S,w,P,A,I,M){const T=S/A,B=w/I,q=S/2,Z=w/2,C=P/2,O=A+1,G=I+1;let X=0,ne=0;const K=new U;for(let j=0;j<G;j++){const N=j*B-Z;for(let z=0;z<O;z++){const ce=z*T-q;K[_]=ce*y,K[p]=N*v,K[d]=C,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[d]=P>0?1:-1,h.push(K.x,K.y,K.z),u.push(z/A),u.push(1-j/I),X+=1}}for(let j=0;j<I;j++)for(let N=0;N<A;N++){const z=f+N+O*j,ce=f+N+O*(j+1),me=f+(N+1)+O*(j+1),xe=f+(N+1)+O*j;l.push(z,ce,xe),l.push(ce,me,xe),ne+=6}o.addGroup(m,ne,M),m+=ne,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zo(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const lh={clone:di,merge:St};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jo extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends jo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class uh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pt(Qn,ei,e,t);r.layers=this.layers,this.add(r);const s=new Pt(Qn,ei,e,t);s.layers=this.layers,this.add(s);const a=new Pt(Qn,ei,e,t);a.layers=this.layers,this.add(a);const o=new Pt(Qn,ei,e,t);o.layers=this.layers,this.add(o);const l=new Pt(Qn,ei,e,t);l.layers=this.layers,this.add(l);const c=new Pt(Qn,ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ko extends gt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?rt:Dt),this.texture=new Ko(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pi(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:pn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=st),new uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const is=new U,fh=new U,ph=new Ve;class dn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=is.subVectors(n,t).cross(fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ph.getNormalMatrix(e),r=this.coplanarPoint(is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new br,rr=new U;class Jo{constructor(e=new dn,t=new dn,n=new dn,r=new dn,s=new dn,a=new dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],y=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,p-m,S-d).normalize(),n[1].setComponents(l+s,f+c,p+m,S+d).normalize(),n[2].setComponents(l+a,f+h,p+g,S+y).normalize(),n[3].setComponents(l-a,f-h,p-g,S-y).normalize(),n[4].setComponents(l-o,f-u,p-_,S-v).normalize(),t===an)n[5].setComponents(l+o,f+u,p+_,S+v).normalize();else if(t===Mr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rr.x=r.normal.x>0?e.max.x:e.min.x,rr.y=r.normal.y>0?e.max.y:e.min.y,rr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function mh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,m=h.updateRange;i.bindBuffer(u,c),m.count===-1?i.bufferSubData(u,0,f):(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Rr extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const y=d*f-a;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const v=y+c*d,S=y+c*(d+1),w=y+1+c*(d+1),P=y+1+c*d;m.push(v,S,P),m.push(S,w,P)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,fu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Md=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ed=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:gh,alphahash_pars_fragment:_h,alphamap_fragment:vh,alphamap_pars_fragment:xh,alphatest_fragment:Mh,alphatest_pars_fragment:Sh,aomap_fragment:Eh,aomap_pars_fragment:yh,begin_vertex:Th,beginnormal_vertex:bh,bsdfs:Ah,iridescence_fragment:wh,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Dh,color_fragment:Uh,color_pars_fragment:Ih,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Gh,emissivemap_fragment:Vh,emissivemap_pars_fragment:kh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:Yh,envmap_common_pars_fragment:qh,envmap_pars_fragment:$h,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:ou,envmap_vertex:jh,fog_vertex:Kh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:eu,gradientmap_pars_fragment:tu,lightmap_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:ru,lights_lambert_pars_fragment:su,lights_pars_begin:au,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:hu,lights_phong_pars_fragment:uu,lights_physical_fragment:du,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:Mu,map_fragment:Su,map_pars_fragment:Eu,map_particle_fragment:yu,map_particle_pars_fragment:Tu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Au,morphcolor_vertex:wu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Lu,normal_fragment_begin:Pu,normal_fragment_maps:Du,normal_pars_fragment:Uu,normal_pars_vertex:Iu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Vu,premultiplied_alpha_fragment:ku,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:Yu,roughnessmap_fragment:qu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:ju,shadowmap_vertex:Ku,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:ed,skinning_vertex:td,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:rd,tonemapping_fragment:sd,tonemapping_pars_fragment:ad,transmission_fragment:od,transmission_pars_fragment:ld,uv_pars_fragment:cd,uv_pars_vertex:hd,uv_vertex:ud,worldpos_vertex:dd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:gd,cube_vert:_d,cube_frag:vd,depth_vert:xd,depth_frag:Md,distanceRGBA_vert:Sd,distanceRGBA_frag:Ed,equirect_vert:yd,equirect_frag:Td,linedashed_vert:bd,linedashed_frag:Ad,meshbasic_vert:wd,meshbasic_frag:Rd,meshlambert_vert:Cd,meshlambert_frag:Ld,meshmatcap_vert:Pd,meshmatcap_frag:Dd,meshnormal_vert:Ud,meshnormal_frag:Id,meshphong_vert:Nd,meshphong_frag:Fd,meshphysical_vert:Od,meshphysical_frag:Bd,meshtoon_vert:zd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Vd,shadow_vert:kd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:Yd},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Vt={basic:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:St([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:St([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:St([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:St([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:St([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:St([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:St([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:St([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:St([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:St([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Vt.physical={uniforms:St([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const sr={r:0,b:0,g:0};function qd(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yr)?(h===void 0&&(h=new Ut(new pi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:di(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$e.getTransfer(v.colorSpace)!==je,(u!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new Rr(2,2),new Un({name:"BackgroundMaterial",uniforms:di(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(sr,Zo(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function $d(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(C,O,G,X,ne){let K=!1;if(a){const j=_(X,G,O);c!==j&&(c=j,m(c.object)),K=d(C,X,G,ne),K&&y(C,X,G,ne)}else{const j=O.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=G.id,c.wireframe=j,K=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,I(C,O,G,X),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,O,G){const X=G.wireframe===!0;let ne=o[C.id];ne===void 0&&(ne={},o[C.id]=ne);let K=ne[O.id];K===void 0&&(K={},ne[O.id]=K);let j=K[X];return j===void 0&&(j=p(f()),K[X]=j),j}function p(C){const O=[],G=[],X=[];for(let ne=0;ne<r;ne++)O[ne]=0,G[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:X,object:C,attributes:{},index:null}}function d(C,O,G,X){const ne=c.attributes,K=O.attributes;let j=0;const N=G.getAttributes();for(const z in N)if(N[z].location>=0){const me=ne[z];let xe=K[z];if(xe===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function y(C,O,G,X){const ne={},K=O.attributes;let j=0;const N=G.getAttributes();for(const z in N)if(N[z].location>=0){let me=K[z];me===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),ne[z]=xe,j++}c.attributes=ne,c.attributesNum=j,c.index=X}function v(){const C=c.newAttributes;for(let O=0,G=C.length;O<G;O++)C[O]=0}function S(C){w(C,0)}function w(C,O){const G=c.newAttributes,X=c.enabledAttributes,ne=c.attributeDivisors;G[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),ne[C]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,O),ne[C]=O)}function P(){const C=c.newAttributes,O=c.enabledAttributes;for(let G=0,X=O.length;G<X;G++)O[G]!==C[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(C,O,G,X,ne,K,j){j===!0?i.vertexAttribIPointer(C,O,G,ne,K):i.vertexAttribPointer(C,O,G,X,ne,K)}function I(C,O,G,X){if(n.isWebGL2===!1&&(C.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ne=X.attributes,K=G.getAttributes(),j=O.defaultAttributeValues;for(const N in K){const z=K[N];if(z.location>=0){let ce=ne[N];if(ce===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const me=ce.normalized,xe=ce.itemSize,Ce=t.get(ce);if(Ce===void 0)continue;const Ie=Ce.buffer,Re=Ce.type,Ne=Ce.bytesPerElement,Ye=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||ce.gpuType===Uo);if(ce.isInterleavedBufferAttribute){const Le=ce.data,R=Le.stride,he=ce.offset;if(Le.isInstancedInterleavedBuffer){for(let $=0;$<z.locationSize;$++)w(z.location+$,Le.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let $=0;$<z.locationSize;$++)S(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let $=0;$<z.locationSize;$++)A(z.location+$,xe/z.locationSize,Re,me,R*Ne,(he+xe/z.locationSize*$)*Ne,Ye)}else{if(ce.isInstancedBufferAttribute){for(let Le=0;Le<z.locationSize;Le++)w(z.location+Le,ce.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<z.locationSize;Le++)S(z.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Le=0;Le<z.locationSize;Le++)A(z.location+Le,xe/z.locationSize,Re,me,xe*Ne,xe/z.locationSize*Le*Ne,Ye)}}else if(j!==void 0){const me=j[N];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(z.location,me);break;case 3:i.vertexAttrib3fv(z.location,me);break;case 4:i.vertexAttrib4fv(z.location,me);break;default:i.vertexAttrib1fv(z.location,me)}}}}P()}function M(){q();for(const C in o){const O=o[C];for(const G in O){const X=O[G];for(const ne in X)g(X[ne].object),delete X[ne];delete O[G]}delete o[C]}}function T(C){if(o[C.id]===void 0)return;const O=o[C.id];for(const G in O){const X=O[G];for(const ne in X)g(X[ne].object),delete X[ne];delete O[G]}delete o[C.id]}function B(C){for(const O in o){const G=o[O];if(G[C.id]===void 0)continue;const X=G[C.id];for(const ne in X)g(X[ne].object),delete X[ne];delete G[C.id]}}function q(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:P}}function Zd(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function jd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),w=v&&S,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:P}}function Kd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new dn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let S=d.clippingState||null;l.value=S,S=h(g,f,v,m);for(let w=0;w!==v;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,S=m;v!==_;++v,S+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Jd(i){let e=new WeakMap;function t(a,o){return o===gr?a.mapping=li:o===vs&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===gr||o===vs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dh(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qd extends jo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=4,Ya=[.125,.215,.35,.446,.526,.582],wn=20,rs=new Qd,qa=new qe;let ss=null,as=0,os=0;const bn=(1+Math.sqrt(5))/2,ti=1/bn,$a=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,bn,ti),new U(0,bn,-ti),new U(ti,0,bn),new U(-ti,0,bn),new U(bn,ti,0),new U(-bn,ti,0)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,as,os),e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:st,minFilter:st,generateMipmaps:!1,type:sn,format:Bt,colorSpace:qt,depthBuffer:!1},r=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(s)),this._blurMaterial=tf(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,r){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qa),h.toneMapping=mn,h.autoClear=!1;const m=new wr({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new Ut(new pi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(qa),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;ar(r,y*v,d>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,rs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$a[(r-1)%$a.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ut(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):wn;p>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wn}`);const d=[];let y=0;for(let A=0;A<wn;++A){const I=A/_,M=Math.exp(-I*I/2);d.push(M),A===0?y+=M:A<p&&(y+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[r],w=3*S*(r>v-ii?r-v+ii:0),P=4*(this._cubeSize-S);ar(t,w,P,3*S,2*S),l.setRenderTarget(t),l.render(u,rs)}}function ef(i){const e=[],t=[],n=[];let r=i;const s=i-ii+1+Ya.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ii?l=Ya[a-i+ii-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,I=P>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(M,_*g*P),v.set(f,p*g*P);const T=[P,P,P,P,P,P];S.set(T,d*g*P)}const w=new Ht;w.setAttribute("position",new Xt(y,_)),w.setAttribute("uv",new Xt(v,p)),w.setAttribute("faceIndex",new Xt(S,d)),e.push(w),r>ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ja(i,e,t){const n=new Pn(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tf(i,e,t){const n=new Float32Array(wn),r=new U(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ka(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ja(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gr||l===vs,h=l===li||l===ci;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Za(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Za(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sf(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,S=y.length;v<S;v+=3){const w=y[v+0],P=y[v+1],A=y[v+2];f.push(w,P,P,A,A,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const w=v+0,P=v+1,A=v+2;f.push(w,P,P,A,A,w)}}else return;const p=new(Go(f)?$o:qo)(f,1);p.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function af(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,m){i.drawElements(s,m,o,f*l),t.update(m,s,1)}function u(f,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function of(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lf(i,e){return i[0]-e[0]}function cf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let O=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),w===!0&&(M=3);let T=h.attributes.position.count*M,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*B*4*_),Z=new Wo(q,T,B,_);Z.type=zt,Z.needsUpdate=!0;const C=M*4;for(let G=0;G<_;G++){const X=P[G],ne=A[G],K=I[G],j=T*B*4*G;for(let N=0;N<X.count;N++){const z=N*C;v===!0&&(a.fromBufferAttribute(X,N),q[j+z+0]=a.x,q[j+z+1]=a.y,q[j+z+2]=a.z,q[j+z+3]=0),S===!0&&(a.fromBufferAttribute(ne,N),q[j+z+4]=a.x,q[j+z+5]=a.y,q[j+z+6]=a.z,q[j+z+7]=0),w===!0&&(a.fromBufferAttribute(K,N),q[j+z+8]=a.x,q[j+z+9]=a.y,q[j+z+10]=a.z,q[j+z+11]=K.itemSize===4?a.w:1)}}p={count:_,texture:Z,size:new de(T,B)},s.set(h,p),h.addEventListener("dispose",O)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const w=_[S];w[0]=S,w[1]=f[S]}_.sort(cf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(lf);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const w=o[S],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[P]&&h.setAttribute("morphTarget"+S,p[P]),d&&h.getAttribute("morphNormal"+S)!==d[P]&&h.setAttribute("morphNormal"+S,d[P]),r[S]=A,y+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function uf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const el=new gt,tl=new Wo,nl=new Yc,il=new Ko,Qa=[],eo=[],to=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qa[r];if(s===void 0&&(s=new Float32Array(r),Qa[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=eo[e];t===void 0&&(t=new Int32Array(e),eo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;io.set(n),i.uniformMatrix2fv(this.addr,!1,io),ct(t,n)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;no.set(n),i.uniformMatrix3fv(this.addr,!1,no),ct(t,n)}}function vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;to.set(n),i.uniformMatrix4fv(this.addr,!1,to),ct(t,n)}}function xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||el,r)}function Rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nl,r)}function Cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||il,r)}function Lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tl,r)}function Pf(i){switch(i){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return yf;case 36294:return Tf;case 36295:return bf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Df(i,e){i.uniform1fv(this.addr,e)}function Uf(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function If(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Nf(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function Ff(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Of(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bf(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zf(i,e){i.uniform1iv(this.addr,e)}function Hf(i,e){i.uniform2iv(this.addr,e)}function Gf(i,e){i.uniform3iv(this.addr,e)}function Vf(i,e){i.uniform4iv(this.addr,e)}function kf(i,e){i.uniform1uiv(this.addr,e)}function Wf(i,e){i.uniform2uiv(this.addr,e)}function Xf(i,e){i.uniform3uiv(this.addr,e)}function Yf(i,e){i.uniform4uiv(this.addr,e)}function qf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||el,s[a])}function $f(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nl,s[a])}function Zf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||il,s[a])}function jf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tl,s[a])}function Kf(i){switch(i){case 5126:return Df;case 35664:return Uf;case 35665:return If;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Hf;case 35668:case 35672:return Gf;case 35669:case 35673:return Vf;case 5125:return kf;case 36294:return Wf;case 36295:return Xf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return jf}}class Jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Pf(t.type)}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Kf(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function ro(i,e){i.seq.push(e),i.map[e.id]=e}function tp(i,e,t){const n=i.name,r=n.length;for(ls.lastIndex=0;;){const s=ls.exec(n),a=ls.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ro(t,c===void 0?new Jf(o,i,e):new Qf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ep(o),ro(t,u)),t=u}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);tp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function so(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const np=37297;let ip=0;function rp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function sp(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===xr&&t===vr?n="LinearDisplayP3ToLinearSRGB":e===vr&&t===xr&&(n="LinearSRGBToLinearDisplayP3"),i){case qt:case Tr:return[n,"LinearTransferOETF"];case rt:case Ps:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ao(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rp(i.getShaderSource(e),a)}else return r}function ap(i,e){const t=sp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function op(i,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function cp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ei(i){return i!==""}function oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(i){return i.replace(up,fp)}const dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fp(i,e){let t=ze[e];if(t===void 0){const n=dp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ys(t)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(i){return i.replace(pp,mp)}function mp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ho(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function _p(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function xp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:e="ENVMAP_BLENDING_MULTIPLY";break;case Jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function Mp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gp(t),c=_p(t),h=vp(t),u=xp(t),f=Mp(t),m=t.isWebGL2?"":lp(t),g=cp(s),_=r.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ei).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ei).join(`
`),d.length>0&&(d+=`
`)):(p=[ho(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),d=[m,ho(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?ze.tonemapping_pars_fragment:"",t.toneMapping!==mn?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),a=ys(a),a=oo(a,t),a=lo(a,t),o=ys(o),o=oo(o,t),o=lo(o,t),a=co(a),o=co(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=y+p+a,S=y+d+o,w=so(r,r.VERTEX_SHADER,v),P=so(r,r.FRAGMENT_SHADER,S);r.attachShader(_,w),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(B){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(_).trim(),Z=r.getShaderInfoLog(w).trim(),C=r.getShaderInfoLog(P).trim();let O=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,P);else{const X=ao(r,w,"vertex"),ne=ao(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+X+`
`+ne)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||C==="")&&(G=!1);G&&(B.diagnostics={runnable:O,programLog:q,vertexShader:{log:Z,prefix:p},fragmentShader:{log:C,prefix:d}})}r.deleteShader(w),r.deleteShader(P),I=new fr(r,_),M=hp(r,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,np)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=P,this}let Ep=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tp(e),t.set(e,n)),n}}class Tp{constructor(e){this.id=Ep++,this.code=e,this.usedTimes=0}}function bp(i,e,t,n,r,s,a){const o=new Xo,l=new yp,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,B,q,Z){const C=q.fog,O=Z.geometry,G=M.isMeshStandardMaterial?q.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),ne=X&&X.mapping===yr?X.image.height:null,K=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=j!==void 0?j.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let ce,me,xe,Ce;if(K){const tt=Vt[K];ce=tt.vertexShader,me=tt.fragmentShader}else ce=M.vertexShader,me=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),Ce=l.getFragmentShaderID(M);const Ie=i.getRenderTarget(),Re=Z.isInstancedMesh===!0,Ne=!!M.map,Ye=!!M.matcap,Le=!!X,R=!!M.aoMap,he=!!M.lightMap,$=!!M.bumpMap,ie=!!M.normalMap,Q=!!M.displacementMap,Te=!!M.emissiveMap,ge=!!M.metalnessMap,Me=!!M.roughnessMap,Pe=M.anisotropy>0,Ge=M.clearcoat>0,Ke=M.iridescence>0,b=M.sheen>0,x=M.transmission>0,H=Pe&&!!M.anisotropyMap,re=Ge&&!!M.clearcoatMap,ee=Ge&&!!M.clearcoatNormalMap,se=Ge&&!!M.clearcoatRoughnessMap,Se=Ke&&!!M.iridescenceMap,oe=Ke&&!!M.iridescenceThicknessMap,pe=b&&!!M.sheenColorMap,L=b&&!!M.sheenRoughnessMap,le=!!M.specularMap,J=!!M.specularColorMap,De=!!M.specularIntensityMap,ye=x&&!!M.transmissionMap,we=x&&!!M.thicknessMap,Ee=!!M.gradientMap,ve=!!M.alphaMap,ke=M.alphaTest>0,D=!!M.alphaHash,ue=!!M.extensions,te=!!O.attributes.uv1,Y=!!O.attributes.uv2,ae=!!O.attributes.uv3;let Ae=mn;return M.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ae=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:me,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:qt,map:Ne,matcap:Ye,envMap:Le,envMapMode:Le&&X.mapping,envMapCubeUVHeight:ne,aoMap:R,lightMap:he,bumpMap:$,normalMap:ie,displacementMap:f&&Q,emissiveMap:Te,normalMapObjectSpace:ie&&M.normalMapType===_c,normalMapTangentSpace:ie&&M.normalMapType===Ho,metalnessMap:ge,roughnessMap:Me,anisotropy:Pe,anisotropyMap:H,clearcoat:Ge,clearcoatMap:re,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,iridescence:Ke,iridescenceMap:Se,iridescenceThicknessMap:oe,sheen:b,sheenColorMap:pe,sheenRoughnessMap:L,specularMap:le,specularColorMap:J,specularIntensityMap:De,transmission:x,transmissionMap:ye,thicknessMap:we,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===si,alphaMap:ve,alphaTest:ke,alphaHash:D,combine:M.combine,mapUv:Ne&&_(M.map.channel),aoMapUv:R&&_(M.aoMap.channel),lightMapUv:he&&_(M.lightMap.channel),bumpMapUv:$&&_(M.bumpMap.channel),normalMapUv:ie&&_(M.normalMap.channel),displacementMapUv:Q&&_(M.displacementMap.channel),emissiveMapUv:Te&&_(M.emissiveMap.channel),metalnessMapUv:ge&&_(M.metalnessMap.channel),roughnessMapUv:Me&&_(M.roughnessMap.channel),anisotropyMapUv:H&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(M.sheenRoughnessMap.channel),specularMapUv:le&&_(M.specularMap.channel),specularColorMapUv:J&&_(M.specularColorMap.channel),specularIntensityMapUv:De&&_(M.specularIntensityMap.channel),transmissionMapUv:ye&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:ve&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ie||Pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:Y,vertexUv3s:ae,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(Ne||ve),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===Et,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const T=g[M.type];let B;if(T){const q=Vt[T];B=lh.clone(q.uniforms)}else B=M.uniforms;return B}function w(M,T){let B;for(let q=0,Z=c.length;q<Z;q++){const C=c[q];if(C.cacheKey===T){B=C,++B.usedTimes;break}}return B===void 0&&(B=new Sp(i,T,M,s),c.push(B)),B}function P(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:P,releaseShaderCache:A,programs:c,dispose:I}}function Ap(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,m,g,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||wp),n.length>1&&n.sort(f||uo),r.length>1&&r.sort(f||uo)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Rp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new fo,i.set(n,[a])):r>=s.length?(a=new fo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pp=0;function Dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Up(i,e){const t=new Cp,n=Lp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,a=new ot,o=new ot;function l(h,u){let f=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,d=0,y=0,v=0,S=0,w=0,P=0,A=0,I=0,M=0;h.sort(Dp);const T=u===!0?Math.PI:1;for(let q=0,Z=h.length;q<Z;q++){const C=h[q],O=C.color,G=C.intensity,X=C.distance,ne=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=O.r*G*T,m+=O.g*G*T,g+=O.b*G*T;else if(C.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(C.sh.coefficients[K],G);M++}else if(C.isDirectionalLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const j=C.shadow,N=n.get(C);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=ne,r.directionalShadowMatrix[_]=C.shadow.matrix,S++}r.directional[_]=K,_++}else if(C.isSpotLight){const K=t.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(O).multiplyScalar(G*T),K.distance=X,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,r.spot[d]=K;const j=C.shadow;if(C.map&&(r.spotLightMap[A]=C.map,A++,j.updateMatrices(C),C.castShadow&&I++),r.spotLightMatrix[d]=j.matrix,C.castShadow){const N=n.get(C);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,r.spotShadow[d]=N,r.spotShadowMap[d]=ne,P++}d++}else if(C.isRectAreaLight){const K=t.get(C);K.color.copy(O).multiplyScalar(G),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),r.rectArea[y]=K,y++}else if(C.isPointLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*T),K.distance=C.distance,K.decay=C.decay,C.castShadow){const j=C.shadow,N=n.get(C);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,N.shadowCameraNear=j.camera.near,N.shadowCameraFar=j.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=C.shadow.matrix,w++}r.point[p]=K,p++}else if(C.isHemisphereLight){const K=t.get(C);K.skyColor.copy(C.color).multiplyScalar(G*T),K.groundColor.copy(C.groundColor).multiplyScalar(G*T),r.hemi[v]=K,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const B=r.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==y||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==w||B.numSpotShadows!==P||B.numSpotMaps!==A||B.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=M,B.directionalLength=_,B.pointLength=p,B.spotLength=d,B.rectAreaLength=y,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=w,B.numSpotShadows=P,B.numSpotMaps=A,B.numLightProbes=M,r.version=Pp++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(S.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function po(i,e){const t=new Up(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ip(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new po(i,e),t.set(s,[l])):a>=o.length?(l=new po(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Np extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zp(i,e,t){let n=new Jo;const r=new de,s=new de,a=new ft,o=new Np({depthPacking:gc}),l=new Fp,c={},h=t.maxTextureSize,u={[_n]:Et,[Et]:_n,[Wt]:Wt},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Op,fragmentShader:Bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let d=this.type;this.render=function(w,P,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=d!==nn&&this.type===nn,Z=d===nn&&this.type!==nn;for(let C=0,O=w.length;C<O;C++){const G=w[C],X=G.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ne=X.getFrameExtents();if(r.multiply(ne),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,X.mapSize.y=s.y)),X.map===null||q===!0||Z===!0){const j=this.type!==nn?{minFilter:dt,magFilter:dt}:{};X.map!==null&&X.map.dispose(),X.map=new Pn(r.x,r.y,j),X.map.texture.name=G.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let j=0;j<K;j++){const N=X.getViewport(j);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),B.viewport(a),X.updateMatrices(G,j),n=X.getFrustum(),S(P,A,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===nn&&y(X,A),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(I,M,T)};function y(w,P){const A=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,A,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,A,m,_,null)}function v(w,P,A,I){let M=null;const T=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=M.uuid,q=P.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let C=Z[q];C===void 0&&(C=M.clone(),Z[q]=C),M=C}if(M.visible=P.visible,M.wireframe=P.wireframe,I===nn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=A}return M}function S(w,P,A,I,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const q=e.update(w),Z=w.material;if(Array.isArray(Z)){const C=q.groups;for(let O=0,G=C.length;O<G;O++){const X=C[O],ne=Z[X.materialIndex];if(ne&&ne.visible){const K=v(w,ne,I,M);i.renderBufferDirect(A,null,q,K,w,X)}}}else if(Z.visible){const C=v(w,Z,I,M);i.renderBufferDirect(A,null,q,C,w,null)}}const B=w.children;for(let q=0,Z=B.length;q<Z;q++)S(B[q],P,A,I,M)}}function Hp(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const ue=new ft;let te=null;const Y=new ft(0,0,0,0);return{setMask:function(ae){te!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),te=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Ae,We,tt,Ct){Ct===!0&&(ae*=tt,Ae*=tt,We*=tt),ue.set(ae,Ae,We,tt),Y.equals(ue)===!1&&(i.clearColor(ae,Ae,We,tt),Y.copy(ue))},reset:function(){D=!1,te=null,Y.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,te=null,Y=null;return{setTest:function(ae){ae?Ne(i.DEPTH_TEST):Ye(i.DEPTH_TEST)},setMask:function(ae){ue!==ae&&!D&&(i.depthMask(ae),ue=ae)},setFunc:function(ae){if(te!==ae){switch(ae){case Xl:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case ql:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case $l:i.depthFunc(i.EQUAL);break;case Zl:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ae}},setLocked:function(ae){D=ae},setClear:function(ae){Y!==ae&&(i.clearDepth(ae),Y=ae)},reset:function(){D=!1,ue=null,te=null,Y=null}}}function a(){let D=!1,ue=null,te=null,Y=null,ae=null,Ae=null,We=null,tt=null,Ct=null;return{setTest:function(Ze){D||(Ze?Ne(i.STENCIL_TEST):Ye(i.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!D&&(i.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,vt,Gt){(te!==Ze||Y!==vt||ae!==Gt)&&(i.stencilFunc(Ze,vt,Gt),te=Ze,Y=vt,ae=Gt)},setOp:function(Ze,vt,Gt){(Ae!==Ze||We!==vt||tt!==Gt)&&(i.stencilOp(Ze,vt,Gt),Ae=Ze,We=vt,tt=Gt)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Ct!==Ze&&(i.clearStencil(Ze),Ct=Ze)},reset:function(){D=!1,ue=null,te=null,Y=null,ae=null,Ae=null,We=null,tt=null,Ct=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,v=null,S=null,w=null,P=null,A=null,I=null,M=new qe(0,0,0),T=0,B=!1,q=null,Z=null,C=null,O=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=K>=2);let N=null,z={};const ce=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),xe=new ft().fromArray(ce),Ce=new ft().fromArray(me);function Ie(D,ue,te,Y){const ae=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(D,Ae),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<te;We++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ue,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ue+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Ae}const Re={};Re[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(mr),ge(!1),Me($s),Ne(i.CULL_FACE),Q(pn);function Ne(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Ye(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Le(D,ue){return m[D]!==ue?(i.bindFramebuffer(D,ue),m[D]=ue,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ue)),!0):!1}function R(D,ue){let te=_,Y=!1;if(D)if(te=g.get(ue),te===void 0&&(te=[],g.set(ue,te)),D.isWebGLMultipleRenderTargets){const ae=D.texture;if(te.length!==ae.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,We=ae.length;Ae<We;Ae++)te[Ae]=i.COLOR_ATTACHMENT0+Ae;te.length=ae.length,Y=!0}}else te[0]!==i.COLOR_ATTACHMENT0&&(te[0]=i.COLOR_ATTACHMENT0,Y=!0);else te[0]!==i.BACK&&(te[0]=i.BACK,Y=!0);Y&&(t.isWebGL2?i.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function he(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const $={[An]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Pl]:i.FUNC_REVERSE_SUBTRACT};if(n)$[Js]=i.MIN,$[Qs]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&($[Js]=D.MIN_EXT,$[Qs]=D.MAX_EXT)}const ie={[Dl]:i.ZERO,[Ul]:i.ONE,[Il]:i.SRC_COLOR,[gs]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Fl]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[_s]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Ol]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Wl]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(D,ue,te,Y,ae,Ae,We,tt,Ct,Ze){if(D===pn){d===!0&&(Ye(i.BLEND),d=!1);return}if(d===!1&&(Ne(i.BLEND),d=!0),D!==Cl){if(D!==y||Ze!==B){if((v!==An||P!==An)&&(i.blendEquation(i.FUNC_ADD),v=An,P=An),Ze)switch(D){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case js:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ks:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case js:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ks:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,A=null,I=null,M.set(0,0,0),T=0,y=D,B=Ze}return}ae=ae||ue,Ae=Ae||te,We=We||Y,(ue!==v||ae!==P)&&(i.blendEquationSeparate($[ue],$[ae]),v=ue,P=ae),(te!==S||Y!==w||Ae!==A||We!==I)&&(i.blendFuncSeparate(ie[te],ie[Y],ie[Ae],ie[We]),S=te,w=Y,A=Ae,I=We),(tt.equals(M)===!1||Ct!==T)&&(i.blendColor(tt.r,tt.g,tt.b,Ct),M.copy(tt),T=Ct),y=D,B=!1}function Te(D,ue){D.side===Wt?Ye(i.CULL_FACE):Ne(i.CULL_FACE);let te=D.side===Et;ue&&(te=!te),ge(te),D.blending===si&&D.transparent===!1?Q(pn):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Y=D.stencilWrite;c.setTest(Y),Y&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(D){q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),q=D)}function Me(D){D!==Al?(Ne(i.CULL_FACE),D!==Z&&(D===$s?i.cullFace(i.BACK):D===wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ye(i.CULL_FACE),Z=D}function Pe(D){D!==C&&(ne&&i.lineWidth(D),C=D)}function Ge(D,ue,te){D?(Ne(i.POLYGON_OFFSET_FILL),(O!==ue||G!==te)&&(i.polygonOffset(ue,te),O=ue,G=te)):Ye(i.POLYGON_OFFSET_FILL)}function Ke(D){D?Ne(i.SCISSOR_TEST):Ye(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+X-1),N!==D&&(i.activeTexture(D),N=D)}function x(D,ue,te){te===void 0&&(N===null?te=i.TEXTURE0+X-1:te=N);let Y=z[te];Y===void 0&&(Y={type:void 0,texture:void 0},z[te]=Y),(Y.type!==D||Y.texture!==ue)&&(N!==te&&(i.activeTexture(te),N=te),i.bindTexture(D,ue||Re[D]),Y.type=D,Y.texture=ue)}function H(){const D=z[N];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){xe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function we(D){Ce.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ce.copy(D))}function Ee(D,ue){let te=u.get(ue);te===void 0&&(te=new WeakMap,u.set(ue,te));let Y=te.get(D);Y===void 0&&(Y=i.getUniformBlockIndex(ue,D.name),te.set(D,Y))}function ve(D,ue){const Y=u.get(ue).get(D);h.get(ue)!==Y&&(i.uniformBlockBinding(ue,Y,D.__bindingPointIndex),h.set(ue,Y))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},N=null,z={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,v=null,S=null,w=null,P=null,A=null,I=null,M=new qe(0,0,0),T=0,B=!1,q=null,Z=null,C=null,O=null,G=null,xe.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ye,bindFramebuffer:Le,drawBuffers:R,useProgram:he,setBlending:Q,setMaterial:Te,setFlipSided:ge,setCullFace:Me,setLineWidth:Pe,setPolygonOffset:Ge,setScissorTest:Ke,activeTexture:b,bindTexture:x,unbindTexture:H,compressedTexImage2D:re,compressedTexImage3D:ee,texImage2D:J,texImage3D:De,updateUBOMapping:Ee,uniformBlockBinding:ve,texStorage2D:L,texStorage3D:le,texSubImage2D:se,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:ye,viewport:we,reset:ke}}function Gp(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,x){return d?new OffscreenCanvas(b,x):Ci("canvas")}function v(b,x,H,re){let ee=1;if((b.width>re||b.height>re)&&(ee=re/Math.max(b.width,b.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=x?Sr:Math.floor,Se=se(ee*b.width),oe=se(ee*b.height);_===void 0&&(_=y(Se,oe));const pe=H?y(Se,oe):_;return pe.width=Se,pe.height=oe,pe.getContext("2d").drawImage(b,0,0,Se,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Se+"x"+oe+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Es(b.width)&&Es(b.height)}function w(b){return o?!1:b.wrapS!==Rt||b.wrapT!==Rt||b.minFilter!==dt&&b.minFilter!==st}function P(b,x){return b.generateMipmaps&&x&&b.minFilter!==dt&&b.minFilter!==st}function A(b){i.generateMipmap(b)}function I(b,x,H,re,ee=!1){if(o===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=x;if(x===i.RED&&(H===i.FLOAT&&(se=i.R32F),H===i.HALF_FLOAT&&(se=i.R16F),H===i.UNSIGNED_BYTE&&(se=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(se=i.R8UI),H===i.UNSIGNED_SHORT&&(se=i.R16UI),H===i.UNSIGNED_INT&&(se=i.R32UI),H===i.BYTE&&(se=i.R8I),H===i.SHORT&&(se=i.R16I),H===i.INT&&(se=i.R32I)),x===i.RG&&(H===i.FLOAT&&(se=i.RG32F),H===i.HALF_FLOAT&&(se=i.RG16F),H===i.UNSIGNED_BYTE&&(se=i.RG8)),x===i.RGBA){const Se=ee?_r:$e.getTransfer(re);H===i.FLOAT&&(se=i.RGBA32F),H===i.HALF_FLOAT&&(se=i.RGBA16F),H===i.UNSIGNED_BYTE&&(se=Se===je?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(b,x,H){return P(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==dt&&b.minFilter!==st?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){return b===dt||b===ea||b===Nr?i.NEAREST:i.LINEAR}function B(b){const x=b.target;x.removeEventListener("dispose",B),Z(x),x.isVideoTexture&&g.delete(x)}function q(b){const x=b.target;x.removeEventListener("dispose",q),O(x)}function Z(b){const x=n.get(b);if(x.__webglInit===void 0)return;const H=b.source,re=p.get(H);if(re){const ee=re[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(b),Object.keys(re).length===0&&p.delete(H)}n.remove(b)}function C(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const H=b.source,re=p.get(H);delete re[x.__cacheKey],a.memory.textures--}function O(b){const x=b.texture,H=n.get(b),re=n.get(x);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let se=0;se<H.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(H.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)i.deleteFramebuffer(H.__webglFramebuffer[ee]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,se=x.length;ee<se;ee++){const Se=n.get(x[ee]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(b)}let G=0;function X(){G=0}function ne(){const b=G;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),G+=1,b}function K(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function j(b,x){const H=n.get(b);if(b.isVideoTexture&&Ge(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(H,b,x);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function N(b,x){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ne(H,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function z(b,x){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ne(H,b,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function ce(b,x){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ye(H,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const me={[xs]:i.REPEAT,[Rt]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},xe={[dt]:i.NEAREST,[ea]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[st]:i.LINEAR,[sc]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Ce={[vc]:i.NEVER,[bc]:i.ALWAYS,[xc]:i.LESS,[Sc]:i.LEQUAL,[Mc]:i.EQUAL,[Tc]:i.GEQUAL,[Ec]:i.GREATER,[yc]:i.NOTEQUAL};function Ie(b,x,H){if(H?(i.texParameteri(b,i.TEXTURE_WRAP_S,me[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,me[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,me[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,xe[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Rt||x.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==dt&&x.minFilter!==st&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===dt||x.minFilter!==Nr&&x.minFilter!==hi||x.type===zt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===sn&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Re(b,x){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",B));const re=x.source;let ee=p.get(re);ee===void 0&&(ee={},p.set(re,ee));const se=K(x);if(se!==b.__cacheKey){ee[se]===void 0&&(ee[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[se].usedTimes++;const Se=ee[b.__cacheKey];Se!==void 0&&(ee[b.__cacheKey].usedTimes--,Se.usedTimes===0&&C(x)),b.__cacheKey=se,b.__webglTexture=ee[se].texture}return H}function Ne(b,x,H){let re=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=i.TEXTURE_3D);const ee=Re(b,x),se=x.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+H);const Se=n.get(se);if(se.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const oe=$e.getPrimaries($e.workingColorSpace),pe=x.colorSpace===Dt?null:$e.getPrimaries(x.colorSpace),L=x.colorSpace===Dt||oe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const le=w(x)&&S(x.image)===!1;let J=v(x.image,le,!1,h);J=Ke(x,J);const De=S(J)||o,ye=s.convert(x.format,x.colorSpace);let we=s.convert(x.type),Ee=I(x.internalFormat,ye,we,x.colorSpace,x.isVideoTexture);Ie(re,x,De);let ve;const ke=x.mipmaps,D=o&&x.isVideoTexture!==!0,ue=Se.__version===void 0||ee===!0,te=M(x,J,De);if(x.isDepthTexture)Ee=i.DEPTH_COMPONENT,o?x.type===zt?Ee=i.DEPTH_COMPONENT32F:x.type===fn?Ee=i.DEPTH_COMPONENT24:x.type===Rn?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:x.type===zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cn&&Ee===i.DEPTH_COMPONENT&&x.type!==Ls&&x.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fn,we=s.convert(x.type)),x.format===ui&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Rn,we=s.convert(x.type))),ue&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ee,J.width,J.height,0,ye,we,null));else if(x.isDataTexture)if(ke.length>0&&De){D&&ue&&t.texStorage2D(i.TEXTURE_2D,te,Ee,ke[0].width,ke[0].height);for(let Y=0,ae=ke.length;Y<ae;Y++)ve=ke[Y],D?t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,we,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Ee,ve.width,ve.height,0,ye,we,ve.data);x.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,te,Ee,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ye,we,J.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,J.width,J.height,0,ye,we,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ee,ke[0].width,ke[0].height,J.depth);for(let Y=0,ae=ke.length;Y<ae;Y++)ve=ke[Y],x.format!==Bt?ye!==null?D?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,J.depth,ye,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ee,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,J.depth,ye,we,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ee,ve.width,ve.height,J.depth,0,ye,we,ve.data)}else{D&&ue&&t.texStorage2D(i.TEXTURE_2D,te,Ee,ke[0].width,ke[0].height);for(let Y=0,ae=ke.length;Y<ae;Y++)ve=ke[Y],x.format!==Bt?ye!==null?D?t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,we,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Ee,ve.width,ve.height,0,ye,we,ve.data)}else if(x.isDataArrayTexture)D?(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ee,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ye,we,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,ye,we,J.data);else if(x.isData3DTexture)D?(ue&&t.texStorage3D(i.TEXTURE_3D,te,Ee,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ye,we,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,ye,we,J.data);else if(x.isFramebufferTexture){if(ue)if(D)t.texStorage2D(i.TEXTURE_2D,te,Ee,J.width,J.height);else{let Y=J.width,ae=J.height;for(let Ae=0;Ae<te;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ee,Y,ae,0,ye,we,null),Y>>=1,ae>>=1}}else if(ke.length>0&&De){D&&ue&&t.texStorage2D(i.TEXTURE_2D,te,Ee,ke[0].width,ke[0].height);for(let Y=0,ae=ke.length;Y<ae;Y++)ve=ke[Y],D?t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye,we,ve):t.texImage2D(i.TEXTURE_2D,Y,Ee,ye,we,ve);x.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,te,Ee,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,we,J)):t.texImage2D(i.TEXTURE_2D,0,Ee,ye,we,J);P(x,De)&&A(re),Se.__version=se.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ye(b,x,H){if(x.image.length!==6)return;const re=Re(b,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const se=n.get(ee);if(ee.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+H);const Se=$e.getPrimaries($e.workingColorSpace),oe=x.colorSpace===Dt?null:$e.getPrimaries(x.colorSpace),pe=x.colorSpace===Dt||Se===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const L=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,J=[];for(let Y=0;Y<6;Y++)!L&&!le?J[Y]=v(x.image[Y],!1,!0,c):J[Y]=le?x.image[Y].image:x.image[Y],J[Y]=Ke(x,J[Y]);const De=J[0],ye=S(De)||o,we=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),ve=I(x.internalFormat,we,Ee,x.colorSpace),ke=o&&x.isVideoTexture!==!0,D=se.__version===void 0||re===!0;let ue=M(x,De,ye);Ie(i.TEXTURE_CUBE_MAP,x,ye);let te;if(L){ke&&D&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ve,De.width,De.height);for(let Y=0;Y<6;Y++){te=J[Y].mipmaps;for(let ae=0;ae<te.length;ae++){const Ae=te[ae];x.format!==Bt?we!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,we,Ee,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,ve,Ae.width,Ae.height,0,we,Ee,Ae.data)}}}else{te=x.mipmaps,ke&&D&&(te.length>0&&ue++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ve,J[0].width,J[0].height));for(let Y=0;Y<6;Y++)if(le){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,J[Y].width,J[Y].height,we,Ee,J[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ve,J[Y].width,J[Y].height,0,we,Ee,J[Y].data);for(let ae=0;ae<te.length;ae++){const We=te[ae].image[Y].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,We.width,We.height,we,Ee,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,ve,We.width,We.height,0,we,Ee,We.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,Ee,J[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ve,we,Ee,J[Y]);for(let ae=0;ae<te.length;ae++){const Ae=te[ae];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,we,Ee,Ae.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,ve,we,Ee,Ae.image[Y])}}}P(x,ye)&&A(i.TEXTURE_CUBE_MAP),se.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Le(b,x,H,re,ee,se){const Se=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),pe=I(H.internalFormat,Se,oe,H.colorSpace);if(!n.get(x).__hasExternalTextures){const le=Math.max(1,x.width>>se),J=Math.max(1,x.height>>se);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,pe,le,J,x.depth,0,Se,oe,null):t.texImage2D(ee,se,pe,le,J,0,Se,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Pe(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ee,n.get(H).__webglTexture,0,Me(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ee,n.get(H).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function R(b,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let re=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Pe(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===zt?re=i.DEPTH_COMPONENT32F:ee.type===fn&&(re=i.DEPTH_COMPONENT24));const se=Me(x);Pe(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,re,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,re,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const re=Me(x);H&&Pe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,x.width,x.height):Pe(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const re=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<re.length;ee++){const se=re[ee],Se=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),pe=I(se.internalFormat,Se,oe,se.colorSpace),L=Me(x);H&&Pe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,pe,x.width,x.height):Pe(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,pe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const re=n.get(x.depthTexture).__webglTexture,ee=Me(x);if(x.depthTexture.format===Cn)Pe(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(x.depthTexture.format===ui)Pe(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $(b){const x=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,b)}else if(H){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]=i.createRenderbuffer(),R(x.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),R(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(b,x,H){const re=n.get(b);x!==void 0&&Le(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&$(b)}function Q(b){const x=b.texture,H=n.get(b),re=n.get(x);b.addEventListener("dispose",q),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=x.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Se=S(b)||o;if(ee){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let pe=0;pe<x.mipmaps.length;pe++)H.__webglFramebuffer[oe][pe]=i.createFramebuffer()}else H.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)H.__webglFramebuffer[oe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(se)if(r.drawBuffers){const oe=b.texture;for(let pe=0,L=oe.length;pe<L;pe++){const le=n.get(oe[pe]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Pe(b)===!1){const oe=se?x:[x];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const L=oe[pe];H.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const le=s.convert(L.format,L.colorSpace),J=s.convert(L.type),De=I(L.internalFormat,le,J,L.colorSpace,b.isXRRenderTarget===!0),ye=Me(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,De,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),R(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,x,Se);for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Le(H.__webglFramebuffer[oe][pe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else Le(H.__webglFramebuffer[oe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);P(x,Se)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const oe=b.texture;for(let pe=0,L=oe.length;pe<L;pe++){const le=oe[pe],J=n.get(le);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ie(i.TEXTURE_2D,le,Se),Le(H.__webglFramebuffer,b,le,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),P(le,Se)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,re.__webglTexture),Ie(oe,x,Se),o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Le(H.__webglFramebuffer[pe],b,x,i.COLOR_ATTACHMENT0,oe,pe);else Le(H.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,oe,0);P(x,Se)&&A(oe),t.unbindTexture()}b.depthBuffer&&$(b)}function Te(b){const x=S(b)||o,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,ee=H.length;re<ee;re++){const se=H[re];if(P(se,x)){const Se=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(se).__webglTexture;t.bindTexture(Se,oe),A(Se),t.unbindTexture()}}}function ge(b){if(o&&b.samples>0&&Pe(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,re=b.height;let ee=i.COLOR_BUFFER_BIT;const se=[],Se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let L=0;L<x.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let L=0;L<x.length;L++){se.push(i.COLOR_ATTACHMENT0+L),b.depthBuffer&&se.push(Se);const le=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(le===!1&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[L]),le===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),pe){const J=n.get(x[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,H,re,0,0,H,re,ee,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let L=0;L<x.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,oe.__webglColorRenderbuffer[L]);const le=n.get(x[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Me(b){return Math.min(u,b.samples)}function Pe(b){const x=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ge(b){const x=a.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function Ke(b,x){const H=b.colorSpace,re=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ss||H!==qt&&H!==Dt&&($e.getTransfer(H)===je?o===!1?e.has("EXT_sRGB")===!0&&re===Bt?(b.format=Ss,b.minFilter=st,b.generateMipmaps=!1):x=Vo.sRGBToLinear(x):(re!==Bt||ee!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}this.allocateTextureUnit=ne,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=ce,this.rebindTextures=ie,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Pe}function Vp(i,e,t){const n=t.isWebGL2;function r(s,a=Dt){let o;const l=$e.getTransfer(a);if(s===gn)return i.UNSIGNED_BYTE;if(s===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(s===No)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ac)return i.BYTE;if(s===oc)return i.SHORT;if(s===Ls)return i.UNSIGNED_SHORT;if(s===Uo)return i.INT;if(s===fn)return i.UNSIGNED_INT;if(s===zt)return i.FLOAT;if(s===sn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lc)return i.ALPHA;if(s===Bt)return i.RGBA;if(s===cc)return i.LUMINANCE;if(s===hc)return i.LUMINANCE_ALPHA;if(s===Cn)return i.DEPTH_COMPONENT;if(s===ui)return i.DEPTH_STENCIL;if(s===Ss)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===uc)return i.RED;if(s===Fo)return i.RED_INTEGER;if(s===dc)return i.RG;if(s===Oo)return i.RG_INTEGER;if(s===Bo)return i.RGBA_INTEGER;if(s===Fr||s===Or||s===Br||s===zr)if(l===je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ta||s===na||s===ia||s===ra)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ta)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===na)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ia)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ra)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sa||s===aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sa)return l===je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===aa)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===Ma)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===oa)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===la)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ca)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ha)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ua)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===da)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fa)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pa)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ma)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ga)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_a)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===va)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ma)return l===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hr||s===Sa||s===Ea)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Hr)return l===je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ea)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pc||s===ya||s===Ta||s===ba)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Hr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ya)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ta)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class kp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xp extends gt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:Cn,h!==Cn&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cn&&(n=fn),n===void 0&&h===ui&&(n=Rn),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yp extends Fn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const y=[],v=[],S=new Pt;S.layers.enable(1),S.viewport=new ft;const w=new Pt;w.layers.enable(2),w.viewport=new ft;const P=[S,w],A=new kp;A.layers.enable(1),A.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=y[N];return z===void 0&&(z=new cs,y[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=y[N];return z===void 0&&(z=new cs,y[N]=z),z.getGripSpace()},this.getHand=function(N){let z=y[N];return z===void 0&&(z=new cs,y[N]=z),z.getHandSpace()};function T(N){const z=v.indexOf(N.inputSource);if(z===-1)return;const ce=y[z];ce!==void 0&&(ce.update(N.inputSource,N.frame,c||a),ce.dispatchEvent({type:N.type,data:N.inputSource}))}function B(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let N=0;N<y.length;N++){const z=v[N];z!==null&&(v[N]=null,y[N].disconnect(z))}I=null,M=null,e.setRenderTarget(p),m=null,f=null,u=null,r=null,d=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:m}),d=new Pn(m.framebufferWidth,m.framebufferHeight,{format:Bt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,ce=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=_.stencil?ui:Cn,ce=_.stencil?Rn:fn);const xe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),d=new Pn(f.textureWidth,f.textureHeight,{format:Bt,type:gn,depthTexture:new Xp(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(N){for(let z=0;z<N.removed.length;z++){const ce=N.removed[z],me=v.indexOf(ce);me>=0&&(v[me]=null,y[me].disconnect(ce))}for(let z=0;z<N.added.length;z++){const ce=N.added[z];let me=v.indexOf(ce);if(me===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=v.length){v.push(ce),me=Ce;break}else if(v[Ce]===null){v[Ce]=ce,me=Ce;break}if(me===-1)break}const xe=y[me];xe&&xe.connect(ce)}}const Z=new U,C=new U;function O(N,z,ce){Z.setFromMatrixPosition(z.matrixWorld),C.setFromMatrixPosition(ce.matrixWorld);const me=Z.distanceTo(C),xe=z.projectionMatrix.elements,Ce=ce.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),Re=xe[14]/(xe[10]+1),Ne=(xe[9]+1)/xe[5],Ye=(xe[9]-1)/xe[5],Le=(xe[8]-1)/xe[0],R=(Ce[8]+1)/Ce[0],he=Ie*Le,$=Ie*R,ie=me/(-Le+R),Q=ie*-Le;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Q),N.translateZ(ie),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Te=Ie+ie,ge=Re+ie,Me=he-Q,Pe=$+(me-Q),Ge=Ne*Re/ge*Te,Ke=Ye*Re/ge*Te;N.projectionMatrix.makePerspective(Me,Pe,Ge,Ke,Te,ge),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function G(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;A.near=w.near=S.near=N.near,A.far=w.far=S.far=N.far,(I!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,M=A.far);const z=N.parent,ce=A.cameras;G(A,z);for(let me=0;me<ce.length;me++)G(ce[me],z);ce.length===2?O(A,S,w):A.projectionMatrix.copy(S.projectionMatrix),X(N,A,z)};function X(N,z,ce){ce===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(ce.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ri*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let ne=null;function K(N,z){if(h=z.getViewerPose(c||a),g=z,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let me=!1;ce.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let xe=0;xe<ce.length;xe++){const Ce=ce[xe];let Ie=null;if(m!==null)Ie=m.getViewport(Ce);else{const Ne=u.getViewSubImage(f,Ce);Ie=Ne.viewport,xe===0&&(e.setRenderTargetTextures(d,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(d))}let Re=P[xe];Re===void 0&&(Re=new Pt,Re.layers.enable(xe),Re.viewport=new ft,P[xe]=Re),Re.matrix.fromArray(Ce.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ce.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(Re)}}for(let ce=0;ce<y.length;ce++){const me=v[ce],xe=y[ce];me!==null&&xe!==void 0&&xe.update(me,z,c||a)}ne&&ne(N,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const j=new Qo;j.setAnimationLoop(K),this.setAnimationLoop=function(N){ne=N},this.dispose=function(){}}}function qp(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Zo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Et&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Et&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Et&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $p(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(g(y),S=h(y),r[y.id]=S,y.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(y,w);const P=e.render.frame;s[y.id]!==P&&(f(y),s[y.id]=P)}function h(y){const v=u();y.__bindingPointIndex=v;const S=i.createBuffer(),w=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],S=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,A=S.length;P<A;P++){const I=S[P];if(m(I,P,w)===!0){const M=I.__offset,T=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let q=0;q<T.length;q++){const Z=T[q],C=_(Z);typeof Z=="number"?(I.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,M+B,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=Z.elements[0],I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=Z.elements[0],I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=Z.elements[0]):(Z.toArray(I.__data,B),B+=C.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,I.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,S){const w=y.value;if(S[v]===void 0){if(typeof w=="number")S[v]=w;else{const P=Array.isArray(w)?w:[w],A=[];for(let I=0;I<P.length;I++)A.push(P[I].clone());S[v]=A}return!0}else if(typeof w=="number"){if(S[v]!==w)return S[v]=w,!0}else{const P=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(w)?w:[w];for(let I=0;I<P.length;I++){const M=P[I];if(M.equals(A[I])===!1)return M.copy(A[I]),!0}}return!1}function g(y){const v=y.uniforms;let S=0;const w=16;let P=0;for(let A=0,I=v.length;A<I;A++){const M=v[A],T={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let q=0,Z=B.length;q<Z;q++){const C=B[q],O=_(C);T.boundary+=O.boundary,T.storage+=O.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,A>0){P=S%w;const q=w-P;P!==0&&q-T.boundary<0&&(S+=w-P,M.__offset=S)}S+=T.storage}return P=S%w,P>0&&(S+=w-P),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class rl{constructor(e={}){const{canvas:t=Gc(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let S=!1,w=0,P=0,A=null,I=-1,M=null;const T=new ft,B=new ft;let q=null;const Z=new qe(0);let C=0,O=t.width,G=t.height,X=1,ne=null,K=null;const j=new ft(0,0,O,G),N=new ft(0,0,O,G);let z=!1;const ce=new Jo;let me=!1,xe=!1,Ce=null;const Ie=new ot,Re=new de,Ne=new U,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return A===null?X:1}let R=n;function he(E,F){for(let V=0;V<E.length;V++){const k=E[V],W=t.getContext(k,F);if(W!==null)return W}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cs}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),R===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),R=he(F,E),R===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $,ie,Q,Te,ge,Me,Pe,Ge,Ke,b,x,H,re,ee,se,Se,oe,pe,L,le,J,De,ye,we;function Ee(){$=new rf(R),ie=new jd(R,$,e),$.init(ie),De=new Vp(R,$,ie),Q=new Hp(R,$,ie),Te=new of(R),ge=new Ap,Me=new Gp(R,$,Q,ge,ie,De,Te),Pe=new Jd(v),Ge=new nf(v),Ke=new mh(R,ie),ye=new $d(R,$,Ke,ie),b=new sf(R,Ke,Te,ye),x=new uf(R,b,Ke,Te),L=new hf(R,ie,Me),Se=new Kd(ge),H=new bp(v,Pe,Ge,$,ie,ye,Se),re=new qp(v,ge),ee=new Rp,se=new Ip($,ie),pe=new qd(v,Pe,Ge,Q,x,f,l),oe=new zp(v,x,ie),we=new $p(R,Te,ie,Q),le=new Zd(R,$,Te,ie),J=new af(R,$,Te,ie),Te.programs=H.programs,v.capabilities=ie,v.extensions=$,v.properties=ge,v.renderLists=ee,v.shadowMap=oe,v.state=Q,v.info=Te}Ee();const ve=new Yp(v,R);this.xr=ve,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(O,G,!1))},this.getSize=function(E){return E.set(O,G)},this.setSize=function(E,F,V=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,G=F,t.width=Math.floor(E*X),t.height=Math.floor(F*X),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(O*X,G*X).floor()},this.setDrawingBufferSize=function(E,F,V){O=E,G=F,X=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,F,V,k){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,V,k),Q.viewport(T.copy(j).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,F,V,k){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,F,V,k),Q.scissor(B.copy(N).multiplyScalar(X).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){Q.setScissorTest(z=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,F=!0,V=!0){let k=0;if(E){let W=!1;if(A!==null){const _e=A.texture.format;W=_e===Bo||_e===Oo||_e===Fo}if(W){const _e=A.texture.type,be=_e===gn||_e===fn||_e===Ls||_e===Rn||_e===Io||_e===No,Ue=pe.getClearColor(),Fe=pe.getClearAlpha(),He=Ue.r,Oe=Ue.g,Be=Ue.b;be?(m[0]=He,m[1]=Oe,m[2]=Be,m[3]=Fe,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=He,g[1]=Oe,g[2]=Be,g[3]=Fe,R.clearBufferiv(R.COLOR,0,g))}else k|=R.COLOR_BUFFER_BIT}F&&(k|=R.DEPTH_BUFFER_BIT),V&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ee.dispose(),se.dispose(),ge.dispose(),Pe.dispose(),Ge.dispose(),x.dispose(),ye.dispose(),we.dispose(),H.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ct),ve.removeEventListener("sessionend",Ze),Ce&&(Ce.dispose(),Ce=null),vt.stop()};function ke(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Te.autoReset,F=oe.enabled,V=oe.autoUpdate,k=oe.needsUpdate,W=oe.type;Ee(),Te.autoReset=E,oe.enabled=F,oe.autoUpdate=V,oe.needsUpdate=k,oe.type=W}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const F=E.target;F.removeEventListener("dispose",te),Y(F)}function Y(E){ae(E),ge.remove(E)}function ae(E){const F=ge.get(E).programs;F!==void 0&&(F.forEach(function(V){H.releaseProgram(V)}),E.isShaderMaterial&&H.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,k,W,_e){F===null&&(F=Ye);const be=W.isMesh&&W.matrixWorld.determinant()<0,Ue=El(E,F,V,k,W);Q.setMaterial(k,be);let Fe=V.index,He=1;if(k.wireframe===!0){if(Fe=b.getWireframeAttribute(V),Fe===void 0)return;He=2}const Oe=V.drawRange,Be=V.attributes.position;let et=Oe.start*He,Tt=(Oe.start+Oe.count)*He;_e!==null&&(et=Math.max(et,_e.start*He),Tt=Math.min(Tt,(_e.start+_e.count)*He)),Fe!==null?(et=Math.max(et,0),Tt=Math.min(Tt,Fe.count)):Be!=null&&(et=Math.max(et,0),Tt=Math.min(Tt,Be.count));const ht=Tt-et;if(ht<0||ht===1/0)return;ye.setup(W,k,Ue,V,Fe);let Zt,Qe=le;if(Fe!==null&&(Zt=Ke.get(Fe),Qe=J,Qe.setIndex(Zt)),W.isMesh)k.wireframe===!0?(Q.setLineWidth(k.wireframeLinewidth*Le()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(W.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),Q.setLineWidth(Xe*Le()),W.isLineSegments?Qe.setMode(R.LINES):W.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else W.isPoints?Qe.setMode(R.POINTS):W.isSprite&&Qe.setMode(R.TRIANGLES);if(W.isInstancedMesh)Qe.renderInstances(et,ht,W.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pr=Math.min(V.instanceCount,Xe);Qe.renderInstances(et,ht,Pr)}else Qe.render(et,ht)};function Ae(E,F,V){E.transparent===!0&&E.side===Wt&&E.forceSinglePass===!1?(E.side=Et,E.needsUpdate=!0,Oi(E,F,V),E.side=_n,E.needsUpdate=!0,Oi(E,F,V),E.side=Wt):Oi(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),p=se.get(V),p.init(),y.push(p),V.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==V&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);const k=new Set;return E.traverse(function(W){const _e=W.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const Ue=_e[be];Ae(Ue,V,W),k.add(Ue)}else Ae(_e,V,W),k.add(_e)}),y.pop(),p=null,k},this.compileAsync=function(E,F,V=null){const k=this.compile(E,F,V);return new Promise(W=>{function _e(){if(k.forEach(function(be){ge.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){W(E);return}setTimeout(_e,10)}$.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let We=null;function tt(E){We&&We(E)}function Ct(){vt.stop()}function Ze(){vt.start()}const vt=new Qo;vt.setAnimationLoop(tt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(E){We=E,ve.setAnimationLoop(E),E===null?vt.stop():vt.start()},ve.addEventListener("sessionstart",Ct),ve.addEventListener("sessionend",Ze),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,A),p=se.get(E,y.length),p.init(),y.push(p),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ce.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,me=Se.init(this.clippingPlanes,xe),_=ee.get(E,d.length),_.init(),d.push(_),Gt(E,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ne,K),this.info.render.frame++,me===!0&&Se.beginShadows();const V=p.state.shadowsArray;if(oe.render(V,E,F),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(_,E),p.setupLights(v._useLegacyLights),F.isArrayCamera){const k=F.cameras;for(let W=0,_e=k.length;W<_e;W++){const be=k[W];Vs(_,E,be,be.viewport)}}else Vs(_,E,F);A!==null&&(Me.updateMultisampleRenderTarget(A),Me.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,F),ye.resetDefaultState(),I=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Gt(E,F,V,k){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ce.intersectsSprite(E)){k&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const be=x.update(E),Ue=E.material;Ue.visible&&_.push(E,be,Ue,V,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ce.intersectsObject(E))){const be=x.update(E),Ue=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ue)){const Fe=be.groups;for(let He=0,Oe=Fe.length;He<Oe;He++){const Be=Fe[He],et=Ue[Be.materialIndex];et&&et.visible&&_.push(E,be,et,V,Ne.z,Be)}}else Ue.visible&&_.push(E,be,Ue,V,Ne.z,null)}}const _e=E.children;for(let be=0,Ue=_e.length;be<Ue;be++)Gt(_e[be],F,V,k)}function Vs(E,F,V,k){const W=E.opaque,_e=E.transmissive,be=E.transparent;p.setupLightsView(V),me===!0&&Se.setGlobalState(v.clippingPlanes,V),_e.length>0&&Sl(W,_e,F,V),k&&Q.viewport(T.copy(k)),W.length>0&&Fi(W,F,V),_e.length>0&&Fi(_e,F,V),be.length>0&&Fi(be,F,V),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Sl(E,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const _e=ie.isWebGL2;Ce===null&&(Ce=new Pn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?sn:gn,minFilter:hi,samples:_e?4:0})),v.getDrawingBufferSize(Re),_e?Ce.setSize(Re.x,Re.y):Ce.setSize(Sr(Re.x),Sr(Re.y));const be=v.getRenderTarget();v.setRenderTarget(Ce),v.getClearColor(Z),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=mn,Fi(E,V,k),Me.updateMultisampleRenderTarget(Ce),Me.updateRenderTargetMipmap(Ce);let Fe=!1;for(let He=0,Oe=F.length;He<Oe;He++){const Be=F[He],et=Be.object,Tt=Be.geometry,ht=Be.material,Zt=Be.group;if(ht.side===Wt&&et.layers.test(k.layers)){const Qe=ht.side;ht.side=Et,ht.needsUpdate=!0,ks(et,V,k,Tt,ht,Zt),ht.side=Qe,ht.needsUpdate=!0,Fe=!0}}Fe===!0&&(Me.updateMultisampleRenderTarget(Ce),Me.updateRenderTargetMipmap(Ce)),v.setRenderTarget(be),v.setClearColor(Z,C),v.toneMapping=Ue}function Fi(E,F,V){const k=F.isScene===!0?F.overrideMaterial:null;for(let W=0,_e=E.length;W<_e;W++){const be=E[W],Ue=be.object,Fe=be.geometry,He=k===null?be.material:k,Oe=be.group;Ue.layers.test(V.layers)&&ks(Ue,F,V,Fe,He,Oe)}}function ks(E,F,V,k,W,_e){E.onBeforeRender(v,F,V,k,W,_e),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(v,F,V,k,E,_e),W.transparent===!0&&W.side===Wt&&W.forceSinglePass===!1?(W.side=Et,W.needsUpdate=!0,v.renderBufferDirect(V,F,k,W,E,_e),W.side=_n,W.needsUpdate=!0,v.renderBufferDirect(V,F,k,W,E,_e),W.side=Wt):v.renderBufferDirect(V,F,k,W,E,_e),E.onAfterRender(v,F,V,k,W,_e)}function Oi(E,F,V){F.isScene!==!0&&(F=Ye);const k=ge.get(E),W=p.state.lights,_e=p.state.shadowsArray,be=W.state.version,Ue=H.getParameters(E,W.state,_e,F,V),Fe=H.getProgramCacheKey(Ue);let He=k.programs;k.environment=E.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(E.isMeshStandardMaterial?Ge:Pe).get(E.envMap||k.environment),He===void 0&&(E.addEventListener("dispose",te),He=new Map,k.programs=He);let Oe=He.get(Fe);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===be)return Xs(E,Ue),Oe}else Ue.uniforms=H.getUniforms(E),E.onBuild(V,Ue,v),E.onBeforeCompile(Ue,v),Oe=H.acquireProgram(Ue,Fe),He.set(Fe,Oe),k.uniforms=Ue.uniforms;const Be=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Se.uniform),Xs(E,Ue),k.needsLights=Tl(E),k.lightsStateVersion=be,k.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Ws(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Xs(E,F){const V=ge.get(E);V.outputColorSpace=F.outputColorSpace,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function El(E,F,V,k,W){F.isScene!==!0&&(F=Ye),Me.resetTextureUnits();const _e=F.fog,be=k.isMeshStandardMaterial?F.environment:null,Ue=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt,Fe=(k.isMeshStandardMaterial?Ge:Pe).get(k.envMap||be),He=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Be=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,Tt=!!V.morphAttributes.color;let ht=mn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ht=v.toneMapping);const Zt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Zt!==void 0?Zt.length:0,Xe=ge.get(k),Pr=p.state.lights;if(me===!0&&(xe===!0||E!==M)){const bt=E===M&&k.id===I;Se.setState(k,E,bt)}let nt=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Pr.state.version||Xe.outputColorSpace!==Ue||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||Xe.envMap!==Fe||k.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Oe||Xe.morphTargets!==Be||Xe.morphNormals!==et||Xe.morphColors!==Tt||Xe.toneMapping!==ht||ie.isWebGL2===!0&&Xe.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Xe.__version=k.version);let xn=Xe.currentProgram;nt===!0&&(xn=Oi(k,F,W));let Ys=!1,_i=!1,Dr=!1;const xt=xn.getUniforms(),Mn=Xe.uniforms;if(Q.useProgram(xn.program)&&(Ys=!0,_i=!0,Dr=!0),k.id!==I&&(I=k.id,_i=!0),Ys||M!==E){xt.setValue(R,"projectionMatrix",E.projectionMatrix),xt.setValue(R,"viewMatrix",E.matrixWorldInverse);const bt=xt.map.cameraPosition;bt!==void 0&&bt.setValue(R,Ne.setFromMatrixPosition(E.matrixWorld)),ie.logarithmicDepthBuffer&&xt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,_i=!0,Dr=!0)}if(W.isSkinnedMesh){xt.setOptional(R,W,"bindMatrix"),xt.setOptional(R,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(ie.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),xt.setValue(R,"boneTexture",bt.boneTexture,Me),xt.setValue(R,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ur=V.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&ie.isWebGL2===!0)&&L.update(W,V,xn),(_i||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,xt.setValue(R,"receiveShadow",W.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=Fe,Mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),_i&&(xt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&yl(Mn,Dr),_e&&k.fog===!0&&re.refreshFogUniforms(Mn,_e),re.refreshMaterialUniforms(Mn,k,X,G,Ce),fr.upload(R,Ws(Xe),Mn,Me)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fr.upload(R,Ws(Xe),Mn,Me),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(R,"center",W.center),xt.setValue(R,"modelViewMatrix",W.modelViewMatrix),xt.setValue(R,"normalMatrix",W.normalMatrix),xt.setValue(R,"modelMatrix",W.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const bt=k.uniformsGroups;for(let Ir=0,bl=bt.length;Ir<bl;Ir++)if(ie.isWebGL2){const qs=bt[Ir];we.update(qs,xn),we.bind(qs,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function yl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Tl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,F,V){ge.get(E.texture).__webglTexture=F,ge.get(E.depthTexture).__webglTexture=V;const k=ge.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const V=ge.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){A=E,w=F,P=V;let k=!0,W=null,_e=!1,be=!1;if(E){const Fe=ge.get(E);Fe.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(R.FRAMEBUFFER,null),k=!1):Fe.__webglFramebuffer===void 0?Me.setupRenderTarget(E):Fe.__hasExternalTextures&&Me.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Oe=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?W=Oe[F][V]:W=Oe[F],_e=!0):ie.isWebGL2&&E.samples>0&&Me.useMultisampledRTT(E)===!1?W=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[V]:W=Oe,T.copy(E.viewport),B.copy(E.scissor),q=E.scissorTest}else T.copy(j).multiplyScalar(X).floor(),B.copy(N).multiplyScalar(X).floor(),q=z;if(Q.bindFramebuffer(R.FRAMEBUFFER,W)&&ie.drawBuffers&&k&&Q.drawBuffers(E,W),Q.viewport(T),Q.scissor(B),Q.setScissorTest(q),_e){const Fe=ge.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Fe.__webglTexture,V)}else if(be){const Fe=ge.get(E.texture),He=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,He)}I=-1},this.readRenderTargetPixels=function(E,F,V,k,W,_e,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){Q.bindFramebuffer(R.FRAMEBUFFER,Ue);try{const Fe=E.texture,He=Fe.format,Oe=Fe.type;if(He!==Bt&&De.convert(He)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===sn&&($.has("EXT_color_buffer_half_float")||ie.isWebGL2&&$.has("EXT_color_buffer_float"));if(Oe!==gn&&De.convert(Oe)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===zt&&(ie.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-k&&V>=0&&V<=E.height-W&&R.readPixels(F,V,k,W,De.convert(He),De.convert(Oe),_e)}finally{const Fe=A!==null?ge.get(A).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,F,V=0){const k=Math.pow(2,-V),W=Math.floor(F.image.width*k),_e=Math.floor(F.image.height*k);Me.setTexture2D(F,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,E.x,E.y,W,_e),Q.unbindTexture()},this.copyTextureToTexture=function(E,F,V,k=0){const W=F.image.width,_e=F.image.height,be=De.convert(V.format),Ue=De.convert(V.type);Me.setTexture2D(V,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,E.x,E.y,W,_e,be,Ue,F.image.data):F.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,be,F.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,k,E.x,E.y,be,Ue,F.image),k===0&&V.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V,k,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,be=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Fe=De.convert(k.format),He=De.convert(k.type);let Oe;if(k.isData3DTexture)Me.setTexture3D(k,0),Oe=R.TEXTURE_3D;else if(k.isDataArrayTexture)Me.setTexture2DArray(k,0),Oe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const Be=R.getParameter(R.UNPACK_ROW_LENGTH),et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=R.getParameter(R.UNPACK_SKIP_PIXELS),ht=R.getParameter(R.UNPACK_SKIP_ROWS),Zt=R.getParameter(R.UNPACK_SKIP_IMAGES),Qe=V.isCompressedTexture?V.mipmaps[0]:V.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,E.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,E.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?R.texSubImage3D(Oe,W,F.x,F.y,F.z,_e,be,Ue,Fe,He,Qe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Oe,W,F.x,F.y,F.z,_e,be,Ue,Fe,Qe.data)):R.texSubImage3D(Oe,W,F.x,F.y,F.z,_e,be,Ue,Fe,He,Qe),R.pixelStorei(R.UNPACK_ROW_LENGTH,Be),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt),W===0&&k.generateMipmaps&&R.generateMipmap(Oe),Q.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Me.setTextureCube(E,0):E.isData3DTexture?Me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Me.setTexture2DArray(E,0):Me.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){w=0,P=0,A=null,Q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ps?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Tr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Ln:zo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?rt:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zp extends rl{}Zp.prototype.isWebGL1Renderer=!0;class jp extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Kp extends gt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=dt,h=dt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new U,go=new U,_o=new ot,hs=new Us,lr=new br;class Jp extends yt{constructor(e=new Ht,t=new sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)mo.fromBufferAttribute(t,r-1),go.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=mo.distanceTo(go);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),lr.radius+=s,e.ray.intersectsSphere(lr)===!1)return;_o.copy(r).invert(),hs.copy(e.ray).applyMatrix4(_o);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=d,S=y-1;v<S;v+=m){const w=g.getX(v),P=g.getX(v+1);if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,P),hs.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=d,S=y-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),hs.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const vo=new U,xo=new U;class Qp extends Jp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)vo.fromBufferAttribute(t,r),xo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+vo.distanceTo(xo);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class em extends gt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:st,this.magFilter=s!==void 0?s:st,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new de:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,r=[],s=[],a=[],o=new U,l=new ot;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(at(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(at(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ns extends $t{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tm extends Ns{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fs(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const cr=new U,us=new Fs,ds=new Fs,fs=new Fs;class nm extends $t{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(cr.subVectors(r[0],r[1]).add(r[0]),c=cr);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(cr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),us.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),ds.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),fs.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(us.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ds.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fs.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(us.calc(l),ds.calc(l),fs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function im(i,e){const t=1-i;return t*t*e}function rm(i,e){return 2*(1-i)*i*e}function sm(i,e){return i*i*e}function Ai(i,e,t,n){return im(i,e)+rm(i,t)+sm(i,n)}function am(i,e){const t=1-i;return t*t*t*e}function om(i,e){const t=1-i;return 3*t*t*i*e}function lm(i,e){return 3*(1-i)*i*i*e}function cm(i,e){return i*i*i*e}function wi(i,e,t,n,r){return am(i,e)+om(i,t)+lm(i,n)+cm(i,r)}class al extends $t{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wi(e,r.x,s.x,a.x,o.x),wi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends $t{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wi(e,r.x,s.x,a.x,o.x),wi(e,r.y,s.y,a.y,o.y),wi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ol extends $t{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends $t{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ll extends $t{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ai(e,r.x,s.x,a.x),Ai(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends $t{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ai(e,r.x,s.x,a.x),Ai(e,r.y,s.y,a.y),Ai(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cl extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Mo(o,l.x,c.x,h.x,u.x),Mo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Ts=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:nm,CubicBezierCurve:al,CubicBezierCurve3:hm,EllipseCurve:Ns,LineCurve:ol,LineCurve3:um,QuadraticBezierCurve:ll,QuadraticBezierCurve3:dm,SplineCurve:cl});class fm extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ts[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ts[r.type]().fromJSON(r))}return this}}class bs extends fm{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ol(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ll(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new al(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Ns(e,t,n,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pr extends bs{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new bs().fromJSON(r))}return this}}const pm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=hl(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,m;if(n&&(s=xm(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Li(s,a,t,o,l,m,0),a}};function hl(i,e,t,n,r){let s,a;if(r===Lm(i,e,t,n)>0)for(s=e;s<t;s+=n)a=So(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=So(s,i[s],i[s+1],a);return a&&Lr(a,a.next)&&(Di(a),a=a.next),a}function In(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lr(t,t.next)||Je(t.prev,t,t.next)===0)){if(Di(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Li(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Tm(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?gm(i,n,r,s):mm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Di(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_m(In(i),e,t),Li(i,e,t,n,r,s,2)):a===2&&vm(i,e,t,n,r,s):Li(In(i),e,t,n,r,s,1);break}}}function mm(i){const e=i.prev,t=i,n=i.next;if(Je(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ri(r,o,s,l,a,c,g.x,g.y)&&Je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gm(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Je(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,d=As(m,g,e,t,n),y=As(_,p,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=d&&S&&S.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&ri(o,h,l,u,c,f,v.x,v.y)&&Je(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&ri(o,h,l,u,c,f,S.x,S.y)&&Je(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&ri(o,h,l,u,c,f,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&ri(o,h,l,u,c,f,S.x,S.y)&&Je(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function _m(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Lr(r,s)&&ul(r,n,n.next,s)&&Pi(r,s)&&Pi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Di(n),Di(n.next),n=i=s),n=n.next}while(n!==i);return In(n)}function vm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wm(a,o)){let l=dl(a,o);a=In(a,a.next),l=In(l,l.next),Li(a,e,t,n,r,s,0),Li(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function xm(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=hl(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Am(c));for(r.sort(Mm),s=0;s<r.length;s++)t=Sm(r[s],t);return t}function Mm(i,e){return i.x-e.x}function Sm(i,e){const t=Em(i,e);if(!t)return e;const n=dl(t,i);return In(n,n.next),In(t,t.next)}function Em(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ri(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Pi(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&ym(r,t)))&&(r=t,h=u)),t=t.next;while(t!==o);return r}function ym(i,e){return Je(i.prev,i,e.prev)<0&&Je(e.next,i,i.next)<0}function Tm(i,e,t,n){let r=i;do r.z===0&&(r.z=As(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,bm(r)}function bm(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function As(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Am(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ri(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function wm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rm(i,e)&&(Pi(i,e)&&Pi(e,i)&&Cm(i,e)&&(Je(i.prev,i,e.prev)||Je(i,e.prev,e))||Lr(i,e)&&Je(i.prev,i,i.next)>0&&Je(e.prev,e,e.next)>0)}function Je(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lr(i,e){return i.x===e.x&&i.y===e.y}function ul(i,e,t,n){const r=ur(Je(i,e,t)),s=ur(Je(i,e,n)),a=ur(Je(t,n,i)),o=ur(Je(t,n,e));return!!(r!==s&&a!==o||r===0&&hr(i,t,e)||s===0&&hr(i,n,e)||a===0&&hr(t,i,n)||o===0&&hr(t,e,n))}function hr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ur(i){return i>0?1:i<0?-1:0}function Rm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ul(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pi(i,e){return Je(i.prev,i,i.next)<0?Je(i,e,i.next)>=0&&Je(i,i.prev,e)>=0:Je(i,e,i.prev)<0||Je(i,i.next,e)<0}function Cm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dl(i,e){const t=new ws(i.i,i.x,i.y),n=new ws(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function So(i,e,t,n){const r=new ws(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Di(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ws(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lm(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class oi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Eo(e),yo(n,e);let a=e.length;t.forEach(Eo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,yo(n,t[l]);const o=pm.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Eo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Os extends Ht{constructor(e=new pr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new _t(r,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Pm;let v,S=!1,w,P,A,I;d&&(v=d.getSpacedPoints(h),S=!0,f=!1,w=d.computeFrenetFrames(h,!1),P=new U,A=new U,I=new U),f||(p=0,m=0,g=0,_=0);const M=o.extractPoints(c);let T=M.shape;const B=M.holes;if(!oi.isClockWise(T)){T=T.reverse();for(let R=0,he=B.length;R<he;R++){const $=B[R];oi.isClockWise($)&&(B[R]=$.reverse())}}const Z=oi.triangulateShape(T,B),C=T;for(let R=0,he=B.length;R<he;R++){const $=B[R];T=T.concat($)}function O(R,he,$){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(he,$)}const G=T.length,X=Z.length;function ne(R,he,$){let ie,Q,Te;const ge=R.x-he.x,Me=R.y-he.y,Pe=$.x-R.x,Ge=$.y-R.y,Ke=ge*ge+Me*Me,b=ge*Ge-Me*Pe;if(Math.abs(b)>Number.EPSILON){const x=Math.sqrt(Ke),H=Math.sqrt(Pe*Pe+Ge*Ge),re=he.x-Me/x,ee=he.y+ge/x,se=$.x-Ge/H,Se=$.y+Pe/H,oe=((se-re)*Ge-(Se-ee)*Pe)/(ge*Ge-Me*Pe);ie=re+ge*oe-R.x,Q=ee+Me*oe-R.y;const pe=ie*ie+Q*Q;if(pe<=2)return new de(ie,Q);Te=Math.sqrt(pe/2)}else{let x=!1;ge>Number.EPSILON?Pe>Number.EPSILON&&(x=!0):ge<-Number.EPSILON?Pe<-Number.EPSILON&&(x=!0):Math.sign(Me)===Math.sign(Ge)&&(x=!0),x?(ie=-Me,Q=ge,Te=Math.sqrt(Ke)):(ie=ge,Q=Me,Te=Math.sqrt(Ke/2))}return new de(ie/Te,Q/Te)}const K=[];for(let R=0,he=C.length,$=he-1,ie=R+1;R<he;R++,$++,ie++)$===he&&($=0),ie===he&&(ie=0),K[R]=ne(C[R],C[$],C[ie]);const j=[];let N,z=K.concat();for(let R=0,he=B.length;R<he;R++){const $=B[R];N=[];for(let ie=0,Q=$.length,Te=Q-1,ge=ie+1;ie<Q;ie++,Te++,ge++)Te===Q&&(Te=0),ge===Q&&(ge=0),N[ie]=ne($[ie],$[Te],$[ge]);j.push(N),z=z.concat(N)}for(let R=0;R<p;R++){const he=R/p,$=m*Math.cos(he*Math.PI/2),ie=g*Math.sin(he*Math.PI/2)+_;for(let Q=0,Te=C.length;Q<Te;Q++){const ge=O(C[Q],K[Q],ie);Ie(ge.x,ge.y,-$)}for(let Q=0,Te=B.length;Q<Te;Q++){const ge=B[Q];N=j[Q];for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ge=O(ge[Me],N[Me],ie);Ie(Ge.x,Ge.y,-$)}}}const ce=g+_;for(let R=0;R<G;R++){const he=f?O(T[R],z[R],ce):T[R];S?(A.copy(w.normals[0]).multiplyScalar(he.x),P.copy(w.binormals[0]).multiplyScalar(he.y),I.copy(v[0]).add(A).add(P),Ie(I.x,I.y,I.z)):Ie(he.x,he.y,0)}for(let R=1;R<=h;R++)for(let he=0;he<G;he++){const $=f?O(T[he],z[he],ce):T[he];S?(A.copy(w.normals[R]).multiplyScalar($.x),P.copy(w.binormals[R]).multiplyScalar($.y),I.copy(v[R]).add(A).add(P),Ie(I.x,I.y,I.z)):Ie($.x,$.y,u/h*R)}for(let R=p-1;R>=0;R--){const he=R/p,$=m*Math.cos(he*Math.PI/2),ie=g*Math.sin(he*Math.PI/2)+_;for(let Q=0,Te=C.length;Q<Te;Q++){const ge=O(C[Q],K[Q],ie);Ie(ge.x,ge.y,u+$)}for(let Q=0,Te=B.length;Q<Te;Q++){const ge=B[Q];N=j[Q];for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ge=O(ge[Me],N[Me],ie);S?Ie(Ge.x,Ge.y+v[h-1].y,v[h-1].x+$):Ie(Ge.x,Ge.y,u+$)}}}me(),xe();function me(){const R=r.length/3;if(f){let he=0,$=G*he;for(let ie=0;ie<X;ie++){const Q=Z[ie];Re(Q[2]+$,Q[1]+$,Q[0]+$)}he=h+p*2,$=G*he;for(let ie=0;ie<X;ie++){const Q=Z[ie];Re(Q[0]+$,Q[1]+$,Q[2]+$)}}else{for(let he=0;he<X;he++){const $=Z[he];Re($[2],$[1],$[0])}for(let he=0;he<X;he++){const $=Z[he];Re($[0]+G*h,$[1]+G*h,$[2]+G*h)}}n.addGroup(R,r.length/3-R,0)}function xe(){const R=r.length/3;let he=0;Ce(C,he),he+=C.length;for(let $=0,ie=B.length;$<ie;$++){const Q=B[$];Ce(Q,he),he+=Q.length}n.addGroup(R,r.length/3-R,1)}function Ce(R,he){let $=R.length;for(;--$>=0;){const ie=$;let Q=$-1;Q<0&&(Q=R.length-1);for(let Te=0,ge=h+p*2;Te<ge;Te++){const Me=G*Te,Pe=G*(Te+1),Ge=he+ie+Me,Ke=he+Q+Me,b=he+Q+Pe,x=he+ie+Pe;Ne(Ge,Ke,b,x)}}}function Ie(R,he,$){l.push(R),l.push(he),l.push($)}function Re(R,he,$){Ye(R),Ye(he),Ye($);const ie=r.length/3,Q=y.generateTopUV(n,r,ie-3,ie-2,ie-1);Le(Q[0]),Le(Q[1]),Le(Q[2])}function Ne(R,he,$,ie){Ye(R),Ye(he),Ye(ie),Ye(he),Ye($),Ye(ie);const Q=r.length/3,Te=y.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);Le(Te[0]),Le(Te[1]),Le(Te[3]),Le(Te[1]),Le(Te[2]),Le(Te[3])}function Ye(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function Le(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ts[r.type]().fromJSON(r)),new Os(n,e.options)}}const Pm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new de(s,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-u),new de(f,1-g),new de(_,1-d)]:[new de(o,1-l),new de(h,1-u),new de(m,1-g),new de(p,1-d)]}};function Dm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bs extends Ht{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new U,u=new U,f=new U;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,y=(r+1)*m+g;a.push(_,p,y),a.push(p,d,y)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fl extends fi{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new qe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Er={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Um{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Im=new Um;class gi{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const tn={};class Nm extends Error{constructor(e,t){super(e),this.response=t}}class pl extends gi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(tn[e]!==void 0){tn[e].push({onLoad:t,onProgress:n,onError:r});return}tn[e]=[],tn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=tn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let _=0;const p=new ReadableStream({start(d){y();function y(){u.read().then(({done:v,value:S})=>{if(v)d.close();else{_+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let P=0,A=h.length;P<A;P++){const I=h[P];I.onProgress&&I.onProgress(w)}d.enqueue(S),y()}})}}});return new Response(p)}else throw new Nm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Er.add(e,c);const h=tn[e];delete tn[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete tn[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fm extends gi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ci("img");function l(){h(),Er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Om extends gi{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Kp,o=new pl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Rt,a.wrapT=c.wrapT!==void 0?c.wrapT:Rt,a.magFilter=c.magFilter!==void 0?c.magFilter:st,a.minFilter=c.minFilter!==void 0?c.minFilter:st,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=hi),c.mipmapCount===1&&(a.minFilter=st),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class Bm extends gi{constructor(e){super(e)}load(e,t,n,r){const s=new gt,a=new Fm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=To(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=To();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function To(){return(typeof performance>"u"?Date:performance).now()}class bo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hm extends Qp{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ht;r.setAttribute("position",new _t(t,3)),r.setAttribute("color",new _t(n,3));const s=new sl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gm{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new bs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const y=[];for(let v=0,S=d.length;v<S;v++){const w=d[v],P=new pr;P.curves=w.curves,y.push(P)}return y}function n(d,y){const v=y.length;let S=!1;for(let w=v-1,P=0;P<v;w=P++){let A=y[w],I=y[P],M=I.x-A.x,T=I.y-A.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(A=y[P],M=-M,I=y[w],T=-T),d.y<A.y||d.y>I.y)continue;if(d.y===A.y){if(d.x===A.x)return!0}else{const B=T*(d.x-A.x)-M*(d.y-A.y);if(B===0)return!0;if(B<0)continue;S=!S}}else{if(d.y!==A.y)continue;if(I.x<=d.x&&d.x<=A.x||A.x<=d.x&&d.x<=I.x)return!0}}return S}const r=oi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new pr,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const u=[],f=[];let m=[],g=0,_;f[g]=void 0,m[g]=[];for(let d=0,y=s.length;d<y;d++)o=s[d],_=o.getPoints(),a=r(_),a=e?!a:a,a?(!h&&f[g]&&g++,f[g]={s:new pr,p:_},f[g].s.curves=o.curves,h&&g++,m[g]=[]):m[g].push({h:o,p:_[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,y=0;for(let v=0,S=f.length;v<S;v++)u[v]=[];for(let v=0,S=f.length;v<S;v++){const w=m[v];for(let P=0;P<w.length;P++){const A=w[P];let I=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(v!==M&&y++,I?(I=!1,u[M].push(A)):d=!0);I&&u[v].push(A)}}y>0&&d===!1&&(m=u)}let p;for(let d=0,y=f.length;d<y;d++){l=f[d].s,c.push(l),p=m[d];for(let v=0,S=p.length;v<S;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cs);const Ao={type:"change"},ps={type:"start"},wo={type:"end"},dr=new Us,Ro=new dn,Vm=Math.cos(70*Hc.DEG2RAD);class km extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",x),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ao),n.update(),s=r.NONE},this.update=function(){const L=new U,le=new Dn().setFromUnitVectors(e.up,new U(0,1,0)),J=le.clone().invert(),De=new U,ye=new Dn,we=new U,Ee=2*Math.PI;return function(ke=null){const D=n.object.position;L.copy(D).sub(n.target),L.applyQuaternion(le),o.setFromVector3(L),n.autoRotate&&s===r.NONE&&B(M(ke)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ue=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(ue)&&isFinite(te)&&(ue<-Math.PI?ue+=Ee:ue>Math.PI&&(ue-=Ee),te<-Math.PI?te+=Ee:te>Math.PI&&(te-=Ee),ue<=te?o.theta=Math.max(ue,Math.min(te,o.theta)):o.theta=o.theta>(ue+te)/2?Math.max(ue,o.theta):Math.min(te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(J),D.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Y=!1;if(n.zoomToCursor&&P){let ae=null;if(n.object.isPerspectiveCamera){const Ae=L.length();ae=K(Ae*c);const We=Ae-ae;n.object.position.addScaledVector(S,We),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ae=new U(w.x,w.y,0);Ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Y=!0;const We=new U(w.x,w.y,0);We.unproject(n.object),n.object.position.sub(We).add(Ae),n.object.updateMatrixWorld(),ae=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(dr.origin.copy(n.object.position),dr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(dr.direction))<Vm?e.lookAt(n.target):(Ro.setFromNormalAndCoplanarPoint(n.object.up,n.target),dr.intersectPlane(Ro,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Y=!0);return c=1,P=!1,Y||De.distanceToSquared(n.object.position)>a||8*(1-ye.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>0?(n.dispatchEvent(Ao),De.copy(n.object.position),ye.copy(n.object.quaternion),we.copy(n.target),Y=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",ge),n.domElement.removeEventListener("pointercancel",Pe),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",x),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new bo,l=new bo;let c=1;const h=new U,u=new de,f=new de,m=new de,g=new de,_=new de,p=new de,d=new de,y=new de,v=new de,S=new U,w=new de;let P=!1;const A=[],I={};function M(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function B(L){l.theta-=L}function q(L){l.phi-=L}const Z=function(){const L=new U;return function(J,De){L.setFromMatrixColumn(De,0),L.multiplyScalar(-J),h.add(L)}}(),C=function(){const L=new U;return function(J,De){n.screenSpacePanning===!0?L.setFromMatrixColumn(De,1):(L.setFromMatrixColumn(De,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(J),h.add(L)}}(),O=function(){const L=new U;return function(J,De){const ye=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;L.copy(we).sub(n.target);let Ee=L.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*J*Ee/ye.clientHeight,n.object.matrix),C(2*De*Ee/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(J*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),C(De*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(L){if(!n.zoomToCursor)return;P=!0;const le=n.domElement.getBoundingClientRect(),J=L.clientX-le.left,De=L.clientY-le.top,ye=le.width,we=le.height;w.x=J/ye*2-1,w.y=-(De/we)*2+1,S.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function j(L){u.set(L.clientX,L.clientY)}function N(L){ne(L),d.set(L.clientX,L.clientY)}function z(L){g.set(L.clientX,L.clientY)}function ce(L){f.set(L.clientX,L.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*m.x/le.clientHeight),q(2*Math.PI*m.y/le.clientHeight),u.copy(f),n.update()}function me(L){y.set(L.clientX,L.clientY),v.subVectors(y,d),v.y>0?G(T()):v.y<0&&X(T()),d.copy(y),n.update()}function xe(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_),n.update()}function Ce(L){ne(L),L.deltaY<0?X(T()):L.deltaY>0&&G(T()),n.update()}function Ie(L){let le=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),le=!0;break}le&&(L.preventDefault(),n.update())}function Re(){if(A.length===1)u.set(A[0].pageX,A[0].pageY);else{const L=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);u.set(L,le)}}function Ne(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const L=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);g.set(L,le)}}function Ye(){const L=A[0].pageX-A[1].pageX,le=A[0].pageY-A[1].pageY,J=Math.sqrt(L*L+le*le);d.set(0,J)}function Le(){n.enableZoom&&Ye(),n.enablePan&&Ne()}function R(){n.enableZoom&&Ye(),n.enableRotate&&Re()}function he(L){if(A.length==1)f.set(L.pageX,L.pageY);else{const J=pe(L),De=.5*(L.pageX+J.x),ye=.5*(L.pageY+J.y);f.set(De,ye)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*m.x/le.clientHeight),q(2*Math.PI*m.y/le.clientHeight),u.copy(f)}function $(L){if(A.length===1)_.set(L.pageX,L.pageY);else{const le=pe(L),J=.5*(L.pageX+le.x),De=.5*(L.pageY+le.y);_.set(J,De)}p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_)}function ie(L){const le=pe(L),J=L.pageX-le.x,De=L.pageY-le.y,ye=Math.sqrt(J*J+De*De);y.set(0,ye),v.set(0,Math.pow(y.y/d.y,n.zoomSpeed)),G(v.y),d.copy(y)}function Q(L){n.enableZoom&&ie(L),n.enablePan&&$(L)}function Te(L){n.enableZoom&&ie(L),n.enableRotate&&he(L)}function ge(L){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",Pe)),se(L),L.pointerType==="touch"?H(L):Ge(L))}function Me(L){n.enabled!==!1&&(L.pointerType==="touch"?re(L):Ke(L))}function Pe(L){Se(L),A.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Pe)),n.dispatchEvent(wo),s=r.NONE}function Ge(L){let le;switch(L.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Bn.DOLLY:if(n.enableZoom===!1)return;N(L),s=r.DOLLY;break;case Bn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;z(L),s=r.PAN}else{if(n.enableRotate===!1)return;j(L),s=r.ROTATE}break;case Bn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;j(L),s=r.ROTATE}else{if(n.enablePan===!1)return;z(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ps)}function Ke(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(L);break;case r.DOLLY:if(n.enableZoom===!1)return;me(L);break;case r.PAN:if(n.enablePan===!1)return;xe(L);break}}function b(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(ps),Ce(L),n.dispatchEvent(wo))}function x(L){n.enabled===!1||n.enablePan===!1||Ie(L)}function H(L){switch(oe(L),A.length){case 1:switch(n.touches.ONE){case zn.ROTATE:if(n.enableRotate===!1)return;Re(),s=r.TOUCH_ROTATE;break;case zn.PAN:if(n.enablePan===!1)return;Ne(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ps)}function re(L){switch(oe(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;$(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(L),n.update();break;default:s=r.NONE}}function ee(L){n.enabled!==!1&&L.preventDefault()}function se(L){A.push(L)}function Se(L){delete I[L.pointerId];for(let le=0;le<A.length;le++)if(A[le].pointerId==L.pointerId){A.splice(le,1);return}}function oe(L){let le=I[L.pointerId];le===void 0&&(le=new de,I[L.pointerId]=le),le.set(L.pageX,L.pageY)}function pe(L){const le=L.pointerId===A[0].pointerId?A[1]:A[0];return I[le.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",ge),n.domElement.addEventListener("pointercancel",Pe),n.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.0
 * @author George Michael Brower
 * @license MIT
 */class Yt{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Yt.nextNameID=Yt.nextNameID||0,this.$name.id=`lil-gui-name-${++Yt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Wm extends Yt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Rs(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Xm={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Rs,toHexString:Rs},Ui={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Ym={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Ui.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ui.toHexString(r)}},qm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Ui.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ui.toHexString(r)}},$m=[Xm,Ui,Ym,qm];function Zm(i){return $m.find(e=>e.match(i))}class jm extends Yt{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zm(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Rs(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ms extends Yt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Km extends Yt{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+y),this.$input.value=this.getValue())},r=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,h,u;const f=5,m=y=>{o=y.clientX,l=c=y.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=y=>{if(a){const v=y.clientX-o,S=y.clientY-l;Math.abs(S)>f?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>f&&_()}if(!a){const v=y.clientY-c;u-=v*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,y,v,S,w)=>(d-y)/(v-y)*(w-S)+S,t=d=>{const y=this.$slider.getBoundingClientRect();let v=e(d,y.left,y.right,this._min,this._max);this._snapClampSetValue(v)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=d=>{t(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),a=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):c(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(a){const y=d.touches[0].clientX-o,v=d.touches[0].clientY-l;Math.abs(y)>Math.abs(v)?c(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),t(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),g=400;let _;const p=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const v=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Jm extends Yt{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.innerHTML=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Qm extends Yt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const eg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function tg(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Co=!1;class zs{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Co&&o&&(tg(eg),Co=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new Jm(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Km(this,e,t,n,r,s);case"boolean":return new Wm(this,e,t);case"string":return new Qm(this,e,t);case"function":return new ms(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new jm(this,e,t,n)}addFolder(e){const t=new zs({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ms||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ms)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const ng=zs;class ig extends gi{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new pl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,r)}parse(e){return new rg(e)}}class rg{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=sg(e,t,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function sg(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const u=ag(h,r,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function ag(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new Gm;let o,l,c,h,u,f,m,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,d=_.length;p<d;)switch(_[p++]){case"m":o=_[p++]*e+t,l=_[p++]*e+n,a.moveTo(o,l);break;case"l":o=_[p++]*e+t,l=_[p++]*e+n,a.lineTo(o,l);break;case"q":c=_[p++]*e+t,h=_[p++]*e+n,u=_[p++]*e+t,f=_[p++]*e+n,a.quadraticCurveTo(u,f,c,h);break;case"b":c=_[p++]*e+t,h=_[p++]*e+n,u=_[p++]*e+t,f=_[p++]*e+n,m=_[p++]*e+t,g=_[p++]*e+n,a.bezierCurveTo(u,f,m,g,c,h);break}}return{offsetX:s.ha*e,path:a}}class og extends Os{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class lg extends Om{constructor(e){super(e),this.type=sn}parse(e){const a=function(I,M){switch(I){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=`
`,u=function(I,M,T){M=M||1024;let q=I.pos,Z=-1,C=0,O="",G=String.fromCharCode.apply(null,new Uint16Array(I.subarray(q,q+128)));for(;0>(Z=G.indexOf(h))&&C<M&&q<I.byteLength;)O+=G,C+=G.length,q+=128,G+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(q,q+128)));return-1<Z?(T!==!1&&(I.pos+=C+Z+1),O+G.slice(0,Z)):!1},f=function(I){const M=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,Z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,G;for((I.pos>=I.byteLength||!(O=u(I)))&&a(1,"no header found"),(G=O.match(M))||a(3,"bad initial token"),C.valid|=1,C.programtype=G[1],C.string+=O+`
`;O=u(I),O!==!1;){if(C.string+=O+`
`,O.charAt(0)==="#"){C.comments+=O+`
`;continue}if((G=O.match(T))&&(C.gamma=parseFloat(G[1])),(G=O.match(B))&&(C.exposure=parseFloat(G[1])),(G=O.match(q))&&(C.valid|=2,C.format=G[1]),(G=O.match(Z))&&(C.valid|=4,C.height=parseInt(G[1],10),C.width=parseInt(G[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},m=function(I,M,T){const B=M;if(B<8||B>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);B!==(I[2]<<8|I[3])&&a(3,"wrong scanline width");const q=new Uint8Array(4*M*T);q.length||a(4,"unable to allocate buffer space");let Z=0,C=0;const O=4*B,G=new Uint8Array(4),X=new Uint8Array(O);let ne=T;for(;ne>0&&C<I.byteLength;){C+4>I.byteLength&&a(1),G[0]=I[C++],G[1]=I[C++],G[2]=I[C++],G[3]=I[C++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=B)&&a(3,"bad rgbe scanline format");let K=0,j;for(;K<O&&C<I.byteLength;){j=I[C++];const z=j>128;if(z&&(j-=128),(j===0||K+j>O)&&a(3,"bad scanline data"),z){const ce=I[C++];for(let me=0;me<j;me++)X[K++]=ce}else X.set(I.subarray(C,C+j),K),K+=j,C+=j}const N=B;for(let z=0;z<N;z++){let ce=0;q[Z]=X[z+ce],ce+=B,q[Z+1]=X[z+ce],ce+=B,q[Z+2]=X[z+ce],ce+=B,q[Z+3]=X[z+ce],Z+=4}ne--}return q},g=function(I,M,T,B){const q=I[M+3],Z=Math.pow(2,q-128)/255;T[B+0]=I[M+0]*Z,T[B+1]=I[M+1]*Z,T[B+2]=I[M+2]*Z,T[B+3]=1},_=function(I,M,T,B){const q=I[M+3],Z=Math.pow(2,q-128)/255;T[B+0]=$i.toHalfFloat(Math.min(I[M+0]*Z,65504)),T[B+1]=$i.toHalfFloat(Math.min(I[M+1]*Z,65504)),T[B+2]=$i.toHalfFloat(Math.min(I[M+2]*Z,65504)),T[B+3]=$i.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const d=f(p),y=d.width,v=d.height,S=m(p.subarray(p.pos),y,v);let w,P,A;switch(this.type){case zt:A=S.length/4;const I=new Float32Array(A*4);for(let T=0;T<A;T++)g(S,T*4,I,T*4);w=I,P=zt;break;case sn:A=S.length/4;const M=new Uint16Array(A*4);for(let T=0;T<A;T++)_(S,T*4,M,T*4);w=M,P=sn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:v,data:w,header:d.string,gamma:d.gamma,exposure:d.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case zt:case sn:a.colorSpace=qt,a.minFilter=st,a.magFilter=st,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}new ng;const ml=document.querySelector("canvas.webgl"),Nn=new jp;new Hm;const cg=new lg;cg.load("/textures/environmentMap/2k.hdr",i=>{i.mapping=gr,Nn.background=i,Nn.environment=i});const Hs=new Bm,Gs=Hs.load("/textures/matcaps/1.png");Hs.load("/textures/matcaps/2.png");Hs.load("/textures/matcaps/3.png");Gs.colorSpace=rt;const hg=new Ut(new pi(1,1,1),new wr);hg.position.y=-1;const gl=document.getElementById("video");gl.play();let _l=new em(gl);_l.colorSpace=rt;const ug={color:16777215,map:_l,side:Wt},dg=new wr(ug),fg=new Rr(3,1),vl=new Ut(fg,dg);vl.position.y=1;Nn.add(vl);const pg=new ig;pg.load("/fonts/helvetiker_regular.typeface.json",i=>{const e=new og("Epic Clan",{font:i,size:.5,height:.2,curvesSegments:5,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:4});e.computeBoundingBox(),e.center(),console.log(e.boundingBox);const t=new fl;t.matcap=Gs;const n=new Ut(e,t);Nn.add(n)});console.time("donuts");const mg=new Bs(.3,.2,20,45),gg=new fl({matcap:Gs});for(let i=0;i<40;i++){const e=new Ut(mg,gg);e.position.x=(Math.random()-.5)*10,e.position.y=(Math.random()-.5)*10,e.position.z=(Math.random()-.5)*10,e.rotation.x=Math.random()*Math.PI,e.rotation.z=Math.random()*Math.PI;const t=Math.random();e.scale.set(t,t,t),Nn.add(e)}console.timeEnd("donuts");const kt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{kt.width=window.innerWidth,kt.height=window.innerHeight,vn.aspect=kt.width/kt.height,vn.updateProjectionMatrix(),Ii.setSize(kt.width,kt.height),Ii.setPixelRatio(Math.min(window.devicePixelRatio,2))});const vn=new Pt(75,kt.width/kt.height,.1,100);vn.position.x=1;vn.position.y=1;vn.position.z=2;Nn.add(vn);const xl=new km(vn,ml);xl.enableDamping=!0;const Ii=new rl({canvas:ml});Ii.setSize(kt.width,kt.height);Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));const _g=new zm,Ml=()=>{_g.getElapsedTime(),xl.update(),Ii.render(Nn,vn),window.requestAnimationFrame(Ml)};Ml();
//# sourceMappingURL=index-f8850e91.js.map

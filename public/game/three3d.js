"use strict";(()=>{var Ol="149";var op=0,qu=1,cp=2;var Da=1,Or=2,oa=3,hi=0,wn=1,hn=2;var ls=0,us=1,Ii=2,ju=3,Xu=4,lp=5,hr=100,up=101,hp=102,Yu=103,Ku=104,fp=200,dp=201,pp=202,mp=203,xf=204,yf=205,gp=206,bp=207,xp=208,yp=209,vp=210,_p=0,Mp=1,wp=2,Zc=3,Sp=4,Tp=5,Ap=6,Ep=7,vf=0,Cp=1,Rp=2,ai=0,Nl=1,Pp=2,Ip=3,ka=4,Lp=5,_f=300,br=301,xr=302,Qc=303,$c=304,Ho=306,Kn=1e3,ri=1001,ga=1002,Mn=1003,vo=1004;var la=1005;var Cn=1006,zl=1007;var Si=1008;var fi=1009,Dp=1010,kp=1011,Mf=1012,Fp=1013,Bs=1014,cs=1015,Ti=1016,Op=1017,Np=1018,mr=1020,zp=1021,Fn=1023,Bp=1024,Up=1025,Us=1026,yr=1027,Gp=1028,Vp=1029,Hp=1030,Wp=1031,qp=1033,mc=33776,gc=33777,bc=33778,xc=33779,Ju=35840,Zu=35841,Qu=35842,$u=35843,jp=36196,eh=37492,th=37496,nh=37808,ih=37809,sh=37810,rh=37811,ah=37812,oh=37813,ch=37814,lh=37815,uh=37816,hh=37817,fh=37818,dh=37819,ph=37820,mh=37821,yc=36492,Xp=36283,gh=36284,bh=36285,xh=36286,Bl=2200,Wo=2201,Yp=2202,vr=2300,Vs=2301,vc=2302,fr=2400,dr=2401,_o=2402,Ul=2500,Kp=2501,wf=0,qo=1,Fa=2,Li=3e3,yt=3001,Jp=3200,Zp=3201,Sf=0,Qp=1;var Ri="srgb",Hs="srgb-linear";var _c=7680;var $p=519,el=35044;var yh="300 es",tl=1035,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,ua=Math.PI/180,ba=180/Math.PI;function wi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Rn(r,e,t){return Math.max(e,Math.min(t,r))}function Gl(r,e){return(r%e+e)%e}function e0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function t0(r,e,t){return r!==e?(t-r)/(e-r):0}function ha(r,e,t){return(1-t)*r+t*e}function n0(r,e,t,n){return ha(r,e,1-Math.exp(-t*n))}function i0(r,e=1){return e-Math.abs(Gl(r,e*2)-e)}function s0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function r0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function a0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function o0(r,e){return r+Math.random()*(e-r)}function c0(r){return r*(.5-Math.random())}function l0(r){r!==void 0&&(vh=r);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(r){return r*ua}function h0(r){return r*ba}function nl(r){return(r&r-1)===0&&r!==0}function Tf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function f0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*f,o*l);break;case"YZY":r.set(c*f,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*f,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Af=Object.freeze({__proto__:null,DEG2RAD:ua,RAD2DEG:ba,ceilPowerOfTwo:Tf,clamp:Rn,damp:n0,degToRad:u0,denormalize:Yi,euclideanModulo:Gl,floorPowerOfTwo:Mo,generateUUID:wi,inverseLerp:t0,isPowerOfTwo:nl,lerp:ha,mapLinear:e0,normalize:Xt,pingpong:i0,radToDeg:h0,randFloat:o0,randFloatSpread:c0,randInt:a0,seededRandom:l0,setQuaternionFromProperEuler:f0,smootherstep:r0,smoothstep:s0}),Oe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],x=i[6],_=i[1],b=i[4],v=i[7],A=i[2],P=i[5],B=i[8];return s[0]=a*m+o*_+c*A,s[3]=a*p+o*b+c*P,s[6]=a*x+o*v+c*B,s[1]=l*m+u*_+h*A,s[4]=l*p+u*b+h*P,s[7]=l*x+u*v+h*B,s[2]=f*m+d*_+g*A,s[5]=f*p+d*b+g*P,s[8]=f*x+d*v+g*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=h*m,e[1]=(i*l-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(u*t-i*c)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new Pn;function Ef(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wc={[Ri]:{[Hs]:Gs},[Hs]:{[Ri]:yo}},kn={legacyMode:!0,get workingColorSpace(){return Hs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(wc[e]&&wc[e][t]!==void 0){let n=wc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={r:0,g:0,b:0},vi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ka(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=kn.workingColorSpace){return this.r=e,this.g=t,this.b=n,kn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=kn.workingColorSpace){if(e=Gl(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Sc(a,s,e+1/3),this.g=Sc(a,s,e),this.b=Sc(a,s,e-1/3)}return kn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ri){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ri){let n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return kn.fromWorkingColorSpace(Ka(this,_n),e),Rn(_n.r*255,0,255)<<16^Rn(_n.g*255,0,255)<<8^Rn(_n.b*255,0,255)<<0}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kn.workingColorSpace){kn.fromWorkingColorSpace(Ka(this,_n),t);let n=_n.r,i=_n.g,s=_n.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=kn.workingColorSpace){return kn.fromWorkingColorSpace(Ka(this,_n),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Ri){return kn.fromWorkingColorSpace(Ka(this,_n),e),e!==Ri?`color(${e} ${_n.r} ${_n.g} ${_n.b})`:`rgb(${_n.r*255|0},${_n.g*255|0},${_n.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(vi),vi.h+=e,vi.s+=t,vi.l+=n,this.setHSL(vi.h,vi.s,vi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ya);let n=ha(vi.h,Ya.h,t),i=ha(vi.s,Ya.s,t),s=ha(vi.l,Ya.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};De.NAMES=Cf;var Zs,wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=xa("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Gs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},So=class{constructor(e=null){this.isSource=!0,this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tc(i[a].image)):s.push(Tc(i[a]))}else s=Tc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Tc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var d0=0,On=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=ri,i=ri,s=Cn,a=Si,o=Fn,c=fi,l=r.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=wi(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=_f;On.DEFAULT_ANISOTROPY=1;var zt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(d+1)/2,A=(x+1)/2,P=(u+f)/4,B=(h+m)/4,S=(g+p)/4;return b>v&&b>A?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=P/n,s=B/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=P/i,s=S/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=B/s,i=S/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-m)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Un=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new On(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new So(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var il=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||c!==f||l!==d||u!==g){let p=1-o,x=c*f+l*d+u*g+h*m,_=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){let A=Math.sqrt(b),P=Math.atan2(A,x*_);p=Math.sin(p*P)/A,o=Math.sin(o*P)/A}let v=o*_;if(c=c*p+f*v,l=l*p+d*v,u=u*p+g*v,h=h*p+m*v,p===1-o){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-s*i,h=c*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=l*c+f*-s+u*-o-h*-a,this.y=u*c+f*-a+h*-s-l*-o,this.z=h*c+f*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new F,_h=new yn,oi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ks.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)ks.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ks)}else n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox),Ec.applyMatrix4(e.matrixWorld),this.union(Ec);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ks),ks.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ja.subVectors(this.max,Qr),Qs.subVectors(e.a,Qr),$s.subVectors(e.b,Qr),er.subVectors(e.c,Qr),is.subVectors($s,Qs),ss.subVectors(er,$s),Fs.subVectors(Qs,er);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Fs.z,Fs.y,is.z,0,-is.x,ss.z,0,-ss.x,Fs.z,0,-Fs.x,-is.y,is.x,0,-ss.y,ss.x,0,-Fs.y,Fs.x,0];return!Cc(t,Qs,$s,er,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Qs,$s,er,Ja))?!1:(Za.crossVectors(is,ss),t=[Za.x,Za.y,Za.z],Cc(t,Qs,$s,er,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ks.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ks).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new F,new F,new F,new F,new F,new F,new F,new F],ks=new F,Ec=new oi,Qs=new F,$s=new F,er=new F,is=new F,ss=new F,Fs=new F,Qr=new F,Ja=new F,Za=new F,Os=new F;function Cc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Os.fromArray(r,s);let o=i.x*Math.abs(Os.x)+i.y*Math.abs(Os.y)+i.z*Math.abs(Os.z),c=e.dot(Os),l=t.dot(Os),u=n.dot(Os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var p0=new oi,$r=new F,Rc=new F,Ji=class{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Rc)),this.expandByPoint($r.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new F,Pc=new F,Qa=new F,rs=new F,Ic=new F,$a=new F,Lc=new F,ya=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.direction).multiplyScalar(t).add(this.origin),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pc.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Pc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Qa),o=rs.dot(this.direction),c=-rs.dot(Qa),l=rs.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let m=1/u;h*=m,f*=m,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Qa).multiplyScalar(f).add(Pc),d}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,s){Ic.subVectors(t,e),$a.subVectors(n,e),Lc.crossVectors(Ic,$a);let a=this.direction.dot(Lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rs.subVectors(this.origin,e);let c=o*this.direction.dot($a.crossVectors(rs,$a));if(c<0)return null;let l=o*this.direction.dot(Ic.cross(rs));if(l<0||c+l>a)return null;let u=-o*rs.dot(Lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,u,h,f,d,g,m,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,m=l*h;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,m=l*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+m,t[1]=c*h,t[5]=m*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+m,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,t,n){let i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),as.crossVectors(n,ii),as.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),as.crossVectors(n,ii)),as.normalize(),eo.crossVectors(ii,as),i[0]=as.x,i[4]=eo.x,i[8]=ii.x,i[1]=as.y,i[5]=eo.y,i[9]=ii.y,i[2]=as.z,i[6]=eo.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],x=n[14],_=n[3],b=n[7],v=n[11],A=n[15],P=i[0],B=i[4],S=i[8],R=i[12],Y=i[1],ae=i[5],j=i[9],K=i[13],J=i[2],ne=i[6],le=i[10],me=i[14],q=i[3],ie=i[7],Q=i[11],Ce=i[15];return s[0]=a*P+o*Y+c*J+l*q,s[4]=a*B+o*ae+c*ne+l*ie,s[8]=a*S+o*j+c*le+l*Q,s[12]=a*R+o*K+c*me+l*Ce,s[1]=u*P+h*Y+f*J+d*q,s[5]=u*B+h*ae+f*ne+d*ie,s[9]=u*S+h*j+f*le+d*Q,s[13]=u*R+h*K+f*me+d*Ce,s[2]=g*P+m*Y+p*J+x*q,s[6]=g*B+m*ae+p*ne+x*ie,s[10]=g*S+m*j+p*le+x*Q,s[14]=g*R+m*K+p*me+x*Ce,s[3]=_*P+b*Y+v*J+A*q,s[7]=_*B+b*ae+v*ne+A*ie,s[11]=_*S+b*j+v*le+A*Q,s[15]=_*R+b*K+v*me+A*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],x=e[15];return g*(+s*c*h-i*l*h-s*o*f+n*l*f+i*o*d-n*c*d)+m*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*u-s*c*u)+p*(+t*l*h-t*o*d-s*a*h+n*a*d+s*o*u-n*l*u)+x*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],x=e[15],_=h*p*l-m*f*l+m*c*d-o*p*d-h*c*x+o*f*x,b=g*f*l-u*p*l-g*c*d+a*p*d+u*c*x-a*f*x,v=u*m*l-g*h*l+g*o*d-a*m*d-u*o*x+a*h*x,A=g*h*c-u*m*c-g*o*f+a*m*f+u*o*p-a*h*p,P=t*_+n*b+i*v+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return e[0]=_*B,e[1]=(m*f*s-h*p*s-m*i*d+n*p*d+h*i*x-n*f*x)*B,e[2]=(o*p*s-m*c*s+m*i*l-n*p*l-o*i*x+n*c*x)*B,e[3]=(h*c*s-o*f*s-h*i*l+n*f*l+o*i*d-n*c*d)*B,e[4]=b*B,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*x+t*f*x)*B,e[6]=(g*c*s-a*p*s-g*i*l+t*p*l+a*i*x-t*c*x)*B,e[7]=(a*f*s-u*c*s+u*i*l-t*f*l-a*i*d+t*c*d)*B,e[8]=v*B,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*x-t*h*x)*B,e[10]=(a*m*s-g*o*s+g*n*l-t*m*l-a*n*x+t*o*x)*B,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*d-t*o*d)*B,e[12]=A*B,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*p+t*h*p)*B,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*p-t*o*p)*B,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,m=a*u,p=a*h,x=o*h,_=c*l,b=c*u,v=c*h,A=n.x,P=n.y,B=n.z;return i[0]=(1-(m+x))*A,i[1]=(d+v)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(d-v)*P,i[5]=(1-(f+x))*P,i[6]=(p+_)*P,i[7]=0,i[8]=(g+b)*B,i[9]=(p-_)*B,i[10]=(1-(f+m))*B,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=tr.set(i[0],i[1],i[2]).length(),a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);let l=1/s,u=1/a,h=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=h,_i.elements[9]*=h,_i.elements[10]*=h,t.setFromRotationMatrix(_i),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-s),h=(t+e)*c,f=(n+i)*l,d=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new F,_i=new gt,m0=new F(0,0,0),g0=new F(1,1,1),as=new F,eo=new F,ii=new F,Mh=new gt,wh=new yn,_r=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b0=0,Sh=new F,nr=new yn,Hi=new gt,to=new F,ea=new F,x0=new F,y0=new yn,Th=new F(1,0,0),Ah=new F(0,1,0),Eh=new F(0,0,1),v0={type:"added"},Ch={type:"removed"},nn=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new F,t=new _r,n=new yn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Pn}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ea,to,this.up):Hi.lookAt(to,ea,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(Hi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Ch)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,x0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};nn.DEFAULT_UP=new F(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new F,Wi=new F,Dc=new F,qi=new F,ir=new F,sr=new F,Rh=new F,kc=new F,Fc=new F,Oc=new F,fa=class r{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),Wi.subVectors(n,t),Dc.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(Wi),c=Mi.dot(Dc),l=Wi.dot(Wi),u=Wi.dot(Dc),h=a*l-o*o;if(h===0)return s.set(-2,-1,-1);let f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi),qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,qi),c.set(0,0),c.addScaledVector(s,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),Wi.subVectors(e,t),Mi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ir.subVectors(i,n),sr.subVectors(s,n),kc.subVectors(e,n);let c=ir.dot(kc),l=sr.dot(kc);if(c<=0&&l<=0)return t.copy(n);Fc.subVectors(e,i);let u=ir.dot(Fc),h=sr.dot(Fc);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ir,a);Oc.subVectors(e,s);let d=ir.dot(Oc),g=sr.dot(Oc);if(g>=0&&d<=g)return t.copy(s);let m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(sr,o);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Rh.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Rh,o);let x=1/(p+m+f);return a=m*x,o=f*x,t.copy(n).addScaledVector(ir,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_0=0,ci=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=us,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xf,this.blendDst=yf,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_c,this.stencilZFail=_c,this.stencilZPass=_c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xn=new F,no=new Oe,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Zi=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Eo=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var M0=0,ui=new gt,Nc=new nn,rr=new F,si=new oi,ta=new oi,En=new F,Ct=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?Eo:Zi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(si.min,ta.min),si.expandByPoint(En),En.addVectors(si.max,ta.max),si.expandByPoint(En)):(si.expandByPoint(ta.min),si.expandByPoint(ta.max))}si.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)En.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(En));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)En.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),En.add(rr)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let Y=0;Y<o;Y++)l[Y]=new F,u[Y]=new F;let h=new F,f=new F,d=new F,g=new Oe,m=new Oe,p=new Oe,x=new F,_=new F;function b(Y,ae,j){h.fromArray(i,Y*3),f.fromArray(i,ae*3),d.fromArray(i,j*3),g.fromArray(a,Y*2),m.fromArray(a,ae*2),p.fromArray(a,j*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);let K=1/(m.x*p.y-p.x*m.y);isFinite(K)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(K),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(K),l[Y].add(x),l[ae].add(x),l[j].add(x),u[Y].add(_),u[ae].add(_),u[j].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let Y=0,ae=v.length;Y<ae;++Y){let j=v[Y],K=j.start,J=j.count;for(let ne=K,le=K+J;ne<le;ne+=3)b(n[ne+0],n[ne+1],n[ne+2])}let A=new F,P=new F,B=new F,S=new F;function R(Y){B.fromArray(s,Y*3),S.copy(B);let ae=l[Y];A.copy(ae),A.sub(B.multiplyScalar(B.dot(ae))).normalize(),P.crossVectors(S,ae);let K=P.dot(u[Y])<0?-1:1;c[Y*4]=A.x,c[Y*4+1]=A.y,c[Y*4+2]=A.z,c[Y*4+3]=K}for(let Y=0,ae=v.length;Y<ae;++Y){let j=v[Y],K=j.start,J=j.count;for(let ne=K,le=K+J;ne<le;ne+=3)R(n[ne+0]),R(n[ne+1]),R(n[ne+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*u;for(let x=0;x<u;x++)f[g++]=l[d++]}return new pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new gt,ar=new ya,zc=new Ji,na=new F,ia=new F,sa=new F,Bc=new F,io=new F,so=new Oe,ro=new Oe,ao=new Oe,Uc=new F,oo=new F,St=class extends nn{constructor(e=new Ct,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){io.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(Bc.fromBufferAttribute(h,e),a?io.addScaledVector(Bc,u):io.addScaledVector(Bc.sub(t),u))}t.add(io)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(s),e.ray.intersectsSphere(zc)===!1)||(Ph.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Ph),n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){let m=h[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let A=o.getX(b),P=o.getX(b+1),B=o.getX(b+2);a=co(this,p,e,ar,l,u,A,P,B),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);a=co(this,i,e,ar,l,u,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){let m=h[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let A=b,P=b+1,B=b+2;a=co(this,p,e,ar,l,u,A,P,B),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=m,_=m+1,b=m+2;a=co(this,i,e,ar,l,u,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function w0(r,e,t,n,i,s,a,o){let c;if(e.side===wn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===hi,o),c===null)return null;oo.copy(o),oo.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(oo);return l<t.near||l>t.far?null:{distance:l,point:oo.clone(),object:r}}function co(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,na),r.getVertexPosition(o,ia),r.getVertexPosition(c,sa);let l=w0(r,e,t,n,na,ia,sa,Uc);if(l){i&&(so.fromBufferAttribute(i,a),ro.fromBufferAttribute(i,o),ao.fromBufferAttribute(i,c),l.uv=fa.getUV(Uc,na,ia,sa,so,ro,ao,new Oe)),s&&(so.fromBufferAttribute(s,a),ro.fromBufferAttribute(s,o),ao.fromBufferAttribute(s,c),l.uv2=fa.getUV(Uc,na,ia,sa,so,ro,ao,new Oe));let u={a,b:o,c,normal:new F,materialIndex:0};fa.getNormal(na,ia,sa,u.normal),l.face=u}return l}var Ai=class r extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(m,p,x,_,b,v,A,P,B,S,R){let Y=v/B,ae=A/S,j=v/2,K=A/2,J=P/2,ne=B+1,le=S+1,me=0,q=0,ie=new F;for(let Q=0;Q<le;Q++){let Ce=Q*ae-K;for(let se=0;se<ne;se++){let be=se*Y-j;ie[m]=be*_,ie[p]=Ce*b,ie[x]=J,l.push(ie.x,ie.y,ie.z),ie[m]=0,ie[p]=0,ie[x]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(se/B),h.push(1-Q/S),me+=1}}for(let Q=0;Q<S;Q++)for(let Ce=0;Ce<B;Ce++){let se=f+Ce+ne*Q,be=f+Ce+ne*(Q+1),we=f+(Ce+1)+ne*(Q+1),Fe=f+(Ce+1)+ne*Q;c.push(se,be,Fe),c.push(be,we,Fe),q+=6}o.addGroup(d,q,R),d+=q,f+=me}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qn(r){let e={};for(let t=0;t<r.length;t++){let n=Mr(r[t]);for(let i in n)e[i]=n[i]}return e}function S0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rf(r){return r.getRenderTarget()===null&&r.outputEncoding===yt?Ri:Hs}var ws={clone:Mr,merge:qn},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Co=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends Co{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,cr=1,va=class extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new mn(or,cr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new mn(or,cr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new mn(or,cr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new mn(or,cr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new mn(or,cr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new mn(or,cr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ro=class extends On{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_a=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ro(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:ls});s.uniforms.tEquirect.value=t;let a=new St(i,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Cn),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Gc=new F,E0=new F,C0=new Pn,Xi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Gc.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||C0.getNormalMatrix(e),i=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new Ji,lo=new F,Ma=class{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],x=n[13],_=n[14],b=n[15];return t[0].setComponents(o-i,h-c,m-f,b-p).normalize(),t[1].setComponents(o+i,h+c,m+f,b+p).normalize(),t[2].setComponents(o+s,h+l,m+d,b+x).normalize(),t[3].setComponents(o-s,h-l,m-d,b-x).normalize(),t[4].setComponents(o-a,h-u,m-g,b-_).normalize(),t[5].setComponents(o+a,h+u,m+g,b+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function R0(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let f=u.array,d=u.updateRange;r.bindBuffer(h,l),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}var di=class r extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],m=[],p=[];for(let x=0;x<u;x++){let _=x*f-a;for(let b=0;b<l;b++){let v=b*h-s;g.push(v,-_,0),m.push(0,0,1),p.push(b/o),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let b=_+l*x,v=_+l*(x+1),A=_+1+l*(x+1),P=_+1+l*x;d.push(b,v,P),d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0="vec3 transformed = vec3( position );",N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,B0=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,U0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K0=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ym=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Tm=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Wm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_g=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kg=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Og=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Zg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,$g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ab=`uniform float rotation;
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
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:P0,alphamap_pars_fragment:I0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:k0,aomap_pars_fragment:F0,begin_vertex:O0,beginnormal_vertex:N0,bsdfs:z0,iridescence_fragment:B0,bumpmap_pars_fragment:U0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:W0,color_fragment:q0,color_pars_fragment:j0,color_pars_vertex:X0,color_vertex:Y0,common:K0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:Q0,displacementmap_vertex:$0,emissivemap_fragment:em,emissivemap_pars_fragment:tm,encodings_fragment:nm,encodings_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:ym,envmap_vertex:cm,fog_vertex:lm,fog_pars_vertex:um,fog_fragment:hm,fog_pars_fragment:fm,gradientmap_pars_fragment:dm,lightmap_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:bm,lights_pars_begin:xm,lights_toon_fragment:vm,lights_toon_pars_fragment:_m,lights_phong_fragment:Mm,lights_phong_pars_fragment:wm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Em,lights_fragment_end:Cm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:km,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:zm,morphcolor_vertex:Bm,morphnormal_vertex:Um,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Hm,normal_fragment_maps:Wm,normal_pars_fragment:qm,normal_pars_vertex:jm,normal_vertex:Xm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Qm,output_fragment:$m,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:cg,shadowmap_vertex:lg,shadowmask_pars_fragment:ug,skinbase_vertex:hg,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:bg,tonemapping_pars_fragment:xg,transmission_fragment:yg,transmission_pars_fragment:vg,uv_pars_fragment:_g,uv_pars_vertex:Mg,uv_vertex:wg,uv2_pars_fragment:Sg,uv2_pars_vertex:Tg,uv2_vertex:Ag,worldpos_vertex:Eg,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Lg,cube_frag:Dg,depth_vert:kg,depth_frag:Fg,distanceRGBA_vert:Og,distanceRGBA_frag:Ng,equirect_vert:zg,equirect_frag:Bg,linedashed_vert:Ug,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Hg,meshlambert_vert:Wg,meshlambert_frag:qg,meshmatcap_vert:jg,meshmatcap_frag:Xg,meshnormal_vert:Yg,meshnormal_frag:Kg,meshphong_vert:Jg,meshphong_frag:Zg,meshphysical_vert:Qg,meshphysical_frag:$g,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:sb,shadow_frag:rb,sprite_vert:ab,sprite_frag:ob},je={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pn},uv2Transform:{value:new Pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}}},Pi={basic:{uniforms:qn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:qn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new De(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:qn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:qn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:qn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new De(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:qn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:qn([je.points,je.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:qn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:qn([je.common,je.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:qn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:qn([je.sprite,je.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:qn([je.common,je.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:qn([je.lights,je.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Pi.physical={uniforms:qn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var uo={r:0,b:0,g:0};function cb(r,e,t,n,i,s,a){let o=new De(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(p,x){let _=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b));let v=r.xr,A=v.getSession&&v.getSession();A&&A.environmentBlendMode==="additive"&&(b=null),b===null?m(o,c):b&&b.isColor&&(m(b,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ho)?(u===void 0&&(u=new St(new Ai(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Mr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,B,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=b.encoding!==yt,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new di(2,2),new gn({name:"BackgroundMaterial",uniforms:Mr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=b.encoding!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,x){p.getRGB(uo,Rf(r)),n.buffers.color.setClear(uo.r,uo.g,uo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function lb(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,u=!1;function h(J,ne,le,me,q){let ie=!1;if(a){let Q=m(me,le,ne);l!==Q&&(l=Q,d(l.object)),ie=x(J,me,le,q),ie&&_(J,me,le,q)}else{let Q=ne.wireframe===!0;(l.geometry!==me.id||l.program!==le.id||l.wireframe!==Q)&&(l.geometry=me.id,l.program=le.id,l.wireframe=Q,ie=!0)}q!==null&&t.update(q,34963),(ie||u)&&(u=!1,S(J,ne,le,me),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(J){return n.isWebGL2?r.bindVertexArray(J):s.bindVertexArrayOES(J)}function g(J){return n.isWebGL2?r.deleteVertexArray(J):s.deleteVertexArrayOES(J)}function m(J,ne,le){let me=le.wireframe===!0,q=o[J.id];q===void 0&&(q={},o[J.id]=q);let ie=q[ne.id];ie===void 0&&(ie={},q[ne.id]=ie);let Q=ie[me];return Q===void 0&&(Q=p(f()),ie[me]=Q),Q}function p(J){let ne=[],le=[],me=[];for(let q=0;q<i;q++)ne[q]=0,le[q]=0,me[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:le,attributeDivisors:me,object:J,attributes:{},index:null}}function x(J,ne,le,me){let q=l.attributes,ie=ne.attributes,Q=0,Ce=le.getAttributes();for(let se in Ce)if(Ce[se].location>=0){let we=q[se],Fe=ie[se];if(Fe===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(Fe=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(Fe=J.instanceColor)),we===void 0||we.attribute!==Fe||Fe&&we.data!==Fe.data)return!0;Q++}return l.attributesNum!==Q||l.index!==me}function _(J,ne,le,me){let q={},ie=ne.attributes,Q=0,Ce=le.getAttributes();for(let se in Ce)if(Ce[se].location>=0){let we=ie[se];we===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(we=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(we=J.instanceColor));let Fe={};Fe.attribute=we,we&&we.data&&(Fe.data=we.data),q[se]=Fe,Q++}l.attributes=q,l.attributesNum=Q,l.index=me}function b(){let J=l.newAttributes;for(let ne=0,le=J.length;ne<le;ne++)J[ne]=0}function v(J){A(J,0)}function A(J,ne){let le=l.newAttributes,me=l.enabledAttributes,q=l.attributeDivisors;le[J]=1,me[J]===0&&(r.enableVertexAttribArray(J),me[J]=1),q[J]!==ne&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ne),q[J]=ne)}function P(){let J=l.newAttributes,ne=l.enabledAttributes;for(let le=0,me=ne.length;le<me;le++)ne[le]!==J[le]&&(r.disableVertexAttribArray(le),ne[le]=0)}function B(J,ne,le,me,q,ie){n.isWebGL2===!0&&(le===5124||le===5125)?r.vertexAttribIPointer(J,ne,le,q,ie):r.vertexAttribPointer(J,ne,le,me,q,ie)}function S(J,ne,le,me){if(n.isWebGL2===!1&&(J.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=me.attributes,ie=le.getAttributes(),Q=ne.defaultAttributeValues;for(let Ce in ie){let se=ie[Ce];if(se.location>=0){let be=q[Ce];if(be===void 0&&(Ce==="instanceMatrix"&&J.instanceMatrix&&(be=J.instanceMatrix),Ce==="instanceColor"&&J.instanceColor&&(be=J.instanceColor)),be!==void 0){let we=be.normalized,Fe=be.itemSize,fe=t.get(be);if(fe===void 0)continue;let ct=fe.buffer,st=fe.type,Je=fe.bytesPerElement;if(be.isInterleavedBufferAttribute){let We=be.data,tt=We.stride,Ve=be.offset;if(We.isInstancedInterleavedBuffer){for(let Ge=0;Ge<se.locationSize;Ge++)A(se.location+Ge,We.meshPerAttribute);J.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ge=0;Ge<se.locationSize;Ge++)v(se.location+Ge);r.bindBuffer(34962,ct);for(let Ge=0;Ge<se.locationSize;Ge++)B(se.location+Ge,Fe/se.locationSize,st,we,tt*Je,(Ve+Fe/se.locationSize*Ge)*Je)}else{if(be.isInstancedBufferAttribute){for(let We=0;We<se.locationSize;We++)A(se.location+We,be.meshPerAttribute);J.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let We=0;We<se.locationSize;We++)v(se.location+We);r.bindBuffer(34962,ct);for(let We=0;We<se.locationSize;We++)B(se.location+We,Fe/se.locationSize,st,we,Fe*Je,Fe/se.locationSize*We*Je)}}else if(Q!==void 0){let we=Q[Ce];if(we!==void 0)switch(we.length){case 2:r.vertexAttrib2fv(se.location,we);break;case 3:r.vertexAttrib3fv(se.location,we);break;case 4:r.vertexAttrib4fv(se.location,we);break;default:r.vertexAttrib1fv(se.location,we)}}}}P()}function R(){j();for(let J in o){let ne=o[J];for(let le in ne){let me=ne[le];for(let q in me)g(me[q].object),delete me[q];delete ne[le]}delete o[J]}}function Y(J){if(o[J.id]===void 0)return;let ne=o[J.id];for(let le in ne){let me=ne[le];for(let q in me)g(me[q].object),delete me[q];delete ne[le]}delete o[J.id]}function ae(J){for(let ne in o){let le=o[ne];if(le[J.id]===void 0)continue;let me=le[J.id];for(let q in me)g(me[q].object),delete me[q];delete le[J.id]}}function j(){K(),u=!0,l!==c&&(l=c,d(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:K,dispose:R,releaseStatesOfGeometry:Y,releaseStatesOfProgram:ae,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function ub(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function hb(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(B){if(B==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),_=r.getParameter(36349),b=f>0,v=a||e.has("OES_texture_float"),A=b&&v,P=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:P}}function fb(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Xi,o=new Pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):l();else{let _=s?0:n,b=_*4,v=x.clippingState||null;c.value=v,v=u(g,f,b,d);for(let A=0;A!==b;++A)v[A]=t[A];x.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let m=h!==null?h.length:0,p=null;if(m!==0){if(p=c.value,g!==!0||p===null){let x=d+m*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<x)&&(p=new Float32Array(x));for(let b=0,v=d;b!==m;++b,v+=4)a.copy(h[b]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function db(r){let e=new WeakMap;function t(a,o){return o===Qc?a.mapping=br:o===$c&&(a.mapping=xr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Qc||o===$c)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new _a(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var hs=class extends Co{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pr=4,Ih=[.125,.215,.35,.446,.526,.582],zs=20,Vc=new hs,Lh=new De,Hc=null,Ns=(1+Math.sqrt(5))/2,ur=1/Ns,Dh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ns,ur),new F(0,Ns,-ur),new F(ur,0,Ns),new F(-ur,0,Ns),new F(Ns,ur,0),new F(-Ns,ur,0)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hc=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc),e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ti,format:Fn,encoding:Li,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(s)),this._blurMaterial=mb(s,e,t)}return i}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,i){let o=new mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lh),u.toneMapping=ai,u.autoClear=!1;let d=new sn({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new St(new Ai,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Lh),m=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(o.up.set(0,c[x],0),o.lookAt(l[x],0,0)):_===1?(o.up.set(0,0,c[x]),o.lookAt(0,l[x],0)):(o.up.set(0,c[x],0),o.lookAt(0,0,l[x]));let b=this._cubeSize;ho(i,_*b,x>2?b:0,b,b),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===br||e.mapping===xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Dh[(i-1)%Dh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new St(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zs-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):zs;p>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zs}`);let x=[],_=0;for(let B=0;B<zs;++B){let S=B/m,R=Math.exp(-S*S/2);x.push(R),B===0?_+=R:B<p&&(_+=2*R)}for(let B=0;B<x.length;B++)x[B]=x[B]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let v=this._sizeLods[i],A=3*v*(i>b-pr?i-b+pr:0),P=4*(this._cubeSize-v);ho(t,A,P,3*v,2*v),c.setRenderTarget(t),c.render(h,Vc)}};function pb(r){let e=[],t=[],n=[],i=r,s=r-pr+1+Ih.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-pr?c=Ih[a-r+pr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,x=1,_=new Float32Array(m*g*d),b=new Float32Array(p*g*d),v=new Float32Array(x*g*d);for(let P=0;P<d;P++){let B=P%3*2/3-1,S=P>2?0:-1,R=[B,S,0,B+2/3,S,0,B+2/3,S+1,0,B,S,0,B+2/3,S+1,0,B,S+1,0];_.set(R,m*g*P),b.set(f,p*g*P);let Y=[P,P,P,P,P,P];v.set(Y,x*g*P)}let A=new Ct;A.setAttribute("position",new pt(_,m)),A.setAttribute("uv",new pt(b,p)),A.setAttribute("faceIndex",new pt(v,x)),e.push(A),i>pr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(r,e,t){let n=new Un(r,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mb(r,e,t){let n=new Float32Array(zs),i=new F(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Fh(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Oh(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function gb(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Qc||c===$c,u=c===br||c===xr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new wr(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new wr(r));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bb(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xb(r,e,t,n){let i={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],34962);let d=h.morphAttributes;for(let g in d){let m=d[g];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function l(h){let f=[],d=h.index,g=h.attributes.position,m=0;if(d!==null){let _=d.array;m=d.version;for(let b=0,v=_.length;b<v;b+=3){let A=_[b+0],P=_[b+1],B=_[b+2];f.push(A,P,P,B,B,A)}}else{let _=g.array;m=g.version;for(let b=0,v=_.length/3-1;b<v;b+=3){let A=b+0,P=b+1,B=b+2;f.push(A,P,P,B,B,A)}}let p=new(Ef(f)?Eo:Zi)(f,1);p.version=m;let x=s.get(h);x&&e.remove(x),s.set(h,p)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function yb(r,e,t,n){let i=n.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,d){r.drawElements(s,d,o,f*c),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*c,g),t.update(d,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function vb(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _b(r,e){return r[0]-e[0]}function Mb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function wb(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==m){let ne=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",ne)};p!==void 0&&p.texture.dispose();let b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],B=u.morphAttributes.normal||[],S=u.morphAttributes.color||[],R=0;b===!0&&(R=1),v===!0&&(R=2),A===!0&&(R=3);let Y=u.attributes.position.count*R,ae=1;Y>e.maxTextureSize&&(ae=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);let j=new Float32Array(Y*ae*4*m),K=new To(j,Y,ae,m);K.type=cs,K.needsUpdate=!0;let J=R*4;for(let le=0;le<m;le++){let me=P[le],q=B[le],ie=S[le],Q=Y*ae*4*le;for(let Ce=0;Ce<me.count;Ce++){let se=Ce*J;b===!0&&(a.fromBufferAttribute(me,Ce),j[Q+se+0]=a.x,j[Q+se+1]=a.y,j[Q+se+2]=a.z,j[Q+se+3]=0),v===!0&&(a.fromBufferAttribute(q,Ce),j[Q+se+4]=a.x,j[Q+se+5]=a.y,j[Q+se+6]=a.z,j[Q+se+7]=0),A===!0&&(a.fromBufferAttribute(ie,Ce),j[Q+se+8]=a.x,j[Q+se+9]=a.y,j[Q+se+10]=a.z,j[Q+se+11]=ie.itemSize===4?a.w:1)}}p={count:m,texture:K,size:new Oe(Y,ae)},s.set(u,p),u.addEventListener("dispose",ne)}let x=0;for(let b=0;b<d.length;b++)x+=d[b];let _=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let g=d===void 0?0:d.length,m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<g;v++){let A=m[v];A[0]=v,A[1]=d[v]}m.sort(Mb);for(let v=0;v<8;v++)v<g&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(_b);let p=u.morphAttributes.position,x=u.morphAttributes.normal,_=0;for(let v=0;v<8;v++){let A=o[v],P=A[0],B=A[1];P!==Number.MAX_SAFE_INTEGER&&B?(p&&u.getAttribute("morphTarget"+v)!==p[P]&&u.setAttribute("morphTarget"+v,p[P]),x&&u.getAttribute("morphNormal"+v)!==x[P]&&u.setAttribute("morphNormal"+v,x[P]),i[v]=B,_+=B):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),x&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let b=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Sb(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var If=new On,Lf=new To,Df=new il,kf=new Ro,Nh=[],zh=[],Bh=new Float32Array(16),Uh=new Float32Array(9),Gh=new Float32Array(4);function Nr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Nh[i];if(s===void 0&&(s=new Float32Array(i),Nh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function jo(r,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Tb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ab(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2fv(this.addr,e),Tn(t,e)}}function Eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;r.uniform3fv(this.addr,e),Tn(t,e)}}function Cb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4fv(this.addr,e),Tn(t,e)}}function Rb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Gh.set(n),r.uniformMatrix2fv(this.addr,!1,Gh),Tn(t,n)}}function Pb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Uh.set(n),r.uniformMatrix3fv(this.addr,!1,Uh),Tn(t,n)}}function Ib(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Bh.set(n),r.uniformMatrix4fv(this.addr,!1,Bh),Tn(t,n)}}function Lb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Db(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2iv(this.addr,e),Tn(t,e)}}function kb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3iv(this.addr,e),Tn(t,e)}}function Fb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4iv(this.addr,e),Tn(t,e)}}function Ob(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2uiv(this.addr,e),Tn(t,e)}}function zb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3uiv(this.addr,e),Tn(t,e)}}function Bb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4uiv(this.addr,e),Tn(t,e)}}function Ub(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||If,i)}function Gb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Df,i)}function Vb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kf,i)}function Hb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lf,i)}function Wb(r){switch(r){case 5126:return Tb;case 35664:return Ab;case 35665:return Eb;case 35666:return Cb;case 35674:return Rb;case 35675:return Pb;case 35676:return Ib;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return kb;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return Nb;case 36295:return zb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}function qb(r,e){r.uniform1fv(this.addr,e)}function jb(r,e){let t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Xb(r,e){let t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Yb(r,e){let t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Kb(r,e){let t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Jb(r,e){let t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Zb(r,e){let t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qb(r,e){r.uniform1iv(this.addr,e)}function $b(r,e){r.uniform2iv(this.addr,e)}function ex(r,e){r.uniform3iv(this.addr,e)}function tx(r,e){r.uniform4iv(this.addr,e)}function nx(r,e){r.uniform1uiv(this.addr,e)}function ix(r,e){r.uniform2uiv(this.addr,e)}function sx(r,e){r.uniform3uiv(this.addr,e)}function rx(r,e){r.uniform4uiv(this.addr,e)}function ax(r,e,t){let n=this.cache,i=e.length,s=jo(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||If,s[a])}function ox(r,e,t){let n=this.cache,i=e.length,s=jo(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Df,s[a])}function cx(r,e,t){let n=this.cache,i=e.length,s=jo(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kf,s[a])}function lx(r,e,t){let n=this.cache,i=e.length,s=jo(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lf,s[a])}function ux(r){switch(r){case 5126:return qb;case 35664:return jb;case 35665:return Xb;case 35666:return Yb;case 35674:return Kb;case 35675:return Jb;case 35676:return Zb;case 5124:case 35670:return Qb;case 35667:case 35671:return $b;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return lx}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Wb(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ux(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Vh(r,e){r.seq.push(e),r.map[e.id]=e}function hx(r,e,t){let n=r.name,i=n.length;for(Wc.lastIndex=0;;){let s=Wc.exec(n),a=Wc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Vh(t,l===void 0?new sl(o,r,e):new rl(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new al(o),Vh(t,h)),t=h}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);hx(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Hh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var fx=0;function dx(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function px(r){switch(r){case Li:return["Linear","( value )"];case yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Wh(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+dx(r.getShaderSource(e),a)}else return i}function mx(r,e){let t=px(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gx(r,e){let t;switch(e){case Nl:t="Linear";break;case Pp:t="Reinhard";break;case Ip:t="OptimizedCineon";break;case ka:t="ACESFilmic";break;case Lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ca).join(`
`)}function xx(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yx(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ca(r){return r!==""}function qh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(r){return r.replace(vx,_x)}function _x(r,e){let t=wt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ol(t)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(r){return r.replace(Mx,wx)}function wx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Or?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function Tx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case xr:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ax(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ex(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vf:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function Cx(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rx(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Sx(t),l=Tx(t),u=Ax(t),h=Ex(t),f=Cx(t),d=t.isWebGL2?"":bx(t),g=xx(s),m=i.createProgram(),p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(ca).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter(ca).join(`
`),x.length>0&&(x+=`
`)):(p=[Yh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),x=[d,Yh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?wt.tonemapping_pars_fragment:"",t.toneMapping!==ai?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,mx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=ol(a),a=qh(a,t),a=jh(a,t),o=ol(o),o=qh(o,t),o=jh(o,t),a=Xh(a),o=Xh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+p+a,v=_+x+o,A=Hh(i,35633,b),P=Hh(i,35632,v);if(i.attachShader(m,A),i.attachShader(m,P),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let R=i.getProgramInfoLog(m).trim(),Y=i.getShaderInfoLog(A).trim(),ae=i.getShaderInfoLog(P).trim(),j=!0,K=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;let J=Wh(i,A,"vertex"),ne=Wh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+J+`
`+ne)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(Y===""||ae==="")&&(K=!1);K&&(this.diagnostics={runnable:j,programLog:R,vertexShader:{log:Y,prefix:p},fragmentShader:{log:ae,prefix:x}})}i.deleteShader(A),i.deleteShader(P);let B;this.getUniforms=function(){return B===void 0&&(B=new gr(i,m)),B};let S;return this.getAttributes=function(){return S===void 0&&(S=yx(i,m)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=P,this}var Px=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}};function Ix(r,e,t,n,i,s,a){let o=new Ao,c=new cl,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S,R,Y,ae,j){let K=ae.fog,J=j.geometry,ne=S.isMeshStandardMaterial?ae.environment:null,le=(S.isMeshStandardMaterial?t:e).get(S.envMap||ne),me=le&&le.mapping===Ho?le.image.height:null,q=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Q=ie!==void 0?ie.length:0,Ce=0;J.morphAttributes.position!==void 0&&(Ce=1),J.morphAttributes.normal!==void 0&&(Ce=2),J.morphAttributes.color!==void 0&&(Ce=3);let se,be,we,Fe;if(q){let tt=Pi[q];se=tt.vertexShader,be=tt.fragmentShader}else se=S.vertexShader,be=S.fragmentShader,c.update(S),we=c.getVertexShaderID(S),Fe=c.getFragmentShaderID(S);let fe=r.getRenderTarget(),ct=S.alphaTest>0,st=S.clearcoat>0,Je=S.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:S.type,vertexShader:se,fragmentShader:be,defines:S.defines,customVertexShaderID:we,customFragmentShaderID:Fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:fe===null?r.outputEncoding:fe.isXRRenderTarget===!0?fe.texture.encoding:Li,map:!!S.map,matcap:!!S.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:me,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Qp,tangentSpaceNormalMap:S.normalMapType===Sf,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===yt,clearcoat:st,clearcoatMap:st&&!!S.clearcoatMap,clearcoatRoughnessMap:st&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:st&&!!S.clearcoatNormalMap,iridescence:Je,iridescenceMap:Je&&!!S.iridescenceMap,iridescenceThicknessMap:Je&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===us,alphaMap:!!S.alphaMap,alphaTest:ct,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!J.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!K,useFog:S.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:ai,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===wn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let Y in S.defines)R.push(Y),R.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(x(R,S),_(R,S),R.push(r.outputEncoding)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputEncoding),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.combine),S.push(R.vertexUvs),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.physicallyCorrectLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.specularIntensityMap&&o.enable(15),R.specularColorMap&&o.enable(16),R.transmission&&o.enable(17),R.transmissionMap&&o.enable(18),R.thicknessMap&&o.enable(19),R.sheen&&o.enable(20),R.sheenColorMap&&o.enable(21),R.sheenRoughnessMap&&o.enable(22),R.decodeVideoTexture&&o.enable(23),R.opaque&&o.enable(24),S.push(o.mask)}function b(S){let R=g[S.type],Y;if(R){let ae=Pi[R];Y=ws.clone(ae.uniforms)}else Y=S.uniforms;return Y}function v(S,R){let Y;for(let ae=0,j=l.length;ae<j;ae++){let K=l[ae];if(K.cacheKey===R){Y=K,++Y.usedTimes;break}}return Y===void 0&&(Y=new Rx(r,R,S,s),l.push(Y)),Y}function A(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:B}}function Lx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Dx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jh(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,m,p){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=m,x.group=p),e++,x}function o(h,f,d,g,m,p){let x=a(h,f,d,g,m,p);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):t.push(x)}function c(h,f,d,g,m,p){let x=a(h,f,d,g,m,p);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,f){t.length>1&&t.sort(h||Dx),n.length>1&&n.sort(f||Kh),i.length>1&&i.sort(f||Kh)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function kx(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Jh,r.set(n,[a])):i>=s.length?(a=new Jh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new De};break;case"SpotLight":t={position:new F,direction:new F,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Ox(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Nx=0;function zx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bx(r,e){let t=new Fx,n=Ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);let s=new F,a=new gt,o=new gt;function c(u,h){let f=0,d=0,g=0;for(let ae=0;ae<9;ae++)i.probe[ae].set(0,0,0);let m=0,p=0,x=0,_=0,b=0,v=0,A=0,P=0,B=0,S=0;u.sort(zx);let R=h!==!0?Math.PI:1;for(let ae=0,j=u.length;ae<j;ae++){let K=u[ae],J=K.color,ne=K.intensity,le=K.distance,me=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)f+=J.r*ne*R,d+=J.g*ne*R,g+=J.b*ne*R;else if(K.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(K.sh.coefficients[q],ne);else if(K.isDirectionalLight){let q=t.get(K);if(q.color.copy(K.color).multiplyScalar(K.intensity*R),K.castShadow){let ie=K.shadow,Q=n.get(K);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=me,i.directionalShadowMatrix[m]=K.shadow.matrix,v++}i.directional[m]=q,m++}else if(K.isSpotLight){let q=t.get(K);q.position.setFromMatrixPosition(K.matrixWorld),q.color.copy(J).multiplyScalar(ne*R),q.distance=le,q.coneCos=Math.cos(K.angle),q.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),q.decay=K.decay,i.spot[x]=q;let ie=K.shadow;if(K.map&&(i.spotLightMap[B]=K.map,B++,ie.updateMatrices(K),K.castShadow&&S++),i.spotLightMatrix[x]=ie.matrix,K.castShadow){let Q=n.get(K);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=me,P++}x++}else if(K.isRectAreaLight){let q=t.get(K);q.color.copy(J).multiplyScalar(ne),q.halfWidth.set(K.width*.5,0,0),q.halfHeight.set(0,K.height*.5,0),i.rectArea[_]=q,_++}else if(K.isPointLight){let q=t.get(K);if(q.color.copy(K.color).multiplyScalar(K.intensity*R),q.distance=K.distance,q.decay=K.decay,K.castShadow){let ie=K.shadow,Q=n.get(K);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,Q.shadowCameraNear=ie.camera.near,Q.shadowCameraFar=ie.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=K.shadow.matrix,A++}i.point[p]=q,p++}else if(K.isHemisphereLight){let q=t.get(K);q.skyColor.copy(K.color).multiplyScalar(ne*R),q.groundColor.copy(K.groundColor).multiplyScalar(ne*R),i.hemi[b]=q,b++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let Y=i.hash;(Y.directionalLength!==m||Y.pointLength!==p||Y.spotLength!==x||Y.rectAreaLength!==_||Y.hemiLength!==b||Y.numDirectionalShadows!==v||Y.numPointShadows!==A||Y.numSpotShadows!==P||Y.numSpotMaps!==B)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=P+B-S,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=S,Y.directionalLength=m,Y.pointLength=p,Y.spotLength=x,Y.rectAreaLength=_,Y.hemiLength=b,Y.numDirectionalShadows=v,Y.numPointShadows=A,Y.numSpotShadows=P,Y.numSpotMaps=B,i.version=Nx++)}function l(u,h){let f=0,d=0,g=0,m=0,p=0,x=h.matrixWorldInverse;for(let _=0,b=u.length;_<b;_++){let v=u[_];if(v.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),f++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),g++}else if(v.isRectAreaLight){let A=i.rectArea[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(x),o.identity(),a.copy(v.matrixWorld),a.premultiply(x),o.extractRotation(a),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function Zh(r,e){let t=new Bx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ux(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Zh(r,e),t.set(s,[c])):a>=o.length?(c=new Zh(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var ul=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hl=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`;function Hx(r,e,t){let n=new Ma,i=new Oe,s=new Oe,a=new zt,o=new ul({depthPacking:Zp}),c=new hl,l={},u=t.maxTextureSize,h={[hi]:wn,[wn]:hi,[hn]:hn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Gx,fragmentShader:Vx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new St(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da,this.render=function(v,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let B=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(ls),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let ae=0,j=v.length;ae<j;ae++){let K=v[ae],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let ne=J.getFrameExtents();if(i.multiply(ne),s.copy(J.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,J.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,J.mapSize.y=s.y)),J.map===null){let me=this.type!==oa?{minFilter:Mn,magFilter:Mn}:{};J.map=new Un(i.x,i.y,me),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();let le=J.getViewportCount();for(let me=0;me<le;me++){let q=J.getViewport(me);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),Y.viewport(a),J.updateMatrices(K,me),n=J.getFrustum(),b(A,P,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===oa&&x(J,P),J.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(B,S,R)};function x(v,A){let P=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Un(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(A,null,P,d,m,null)}function _(v,A,P,B,S,R){let Y=null,ae=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(ae!==void 0)Y=ae;else if(Y=P.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let j=Y.uuid,K=A.uuid,J=l[j];J===void 0&&(J={},l[j]=J);let ne=J[K];ne===void 0&&(ne=Y.clone(),J[K]=ne),Y=ne}return Y.visible=A.visible,Y.wireframe=A.wireframe,R===oa?Y.side=A.shadowSide!==null?A.shadowSide:A.side:Y.side=A.shadowSide!==null?A.shadowSide:h[A.side],Y.alphaMap=A.alphaMap,Y.alphaTest=A.alphaTest,Y.map=A.map,Y.clipShadows=A.clipShadows,Y.clippingPlanes=A.clippingPlanes,Y.clipIntersection=A.clipIntersection,Y.displacementMap=A.displacementMap,Y.displacementScale=A.displacementScale,Y.displacementBias=A.displacementBias,Y.wireframeLinewidth=A.wireframeLinewidth,Y.linewidth=A.linewidth,P.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(P.matrixWorld),Y.nearDistance=B,Y.farDistance=S),Y}function b(v,A,P,B,S){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===oa)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);let ae=e.update(v),j=v.material;if(Array.isArray(j)){let K=ae.groups;for(let J=0,ne=K.length;J<ne;J++){let le=K[J],me=j[le.materialIndex];if(me&&me.visible){let q=_(v,me,B,P.near,P.far,S);r.renderBufferDirect(P,null,ae,q,v,le)}}}else if(j.visible){let K=_(v,j,B,P.near,P.far,S);r.renderBufferDirect(P,null,ae,K,v,null)}}let Y=v.children;for(let ae=0,j=Y.length;ae<j;ae++)b(Y[ae],A,P,B,S)}}function Wx(r,e,t){let n=t.isWebGL2;function i(){let te=!1,Me=new zt,Ie=null,ze=new zt(0,0,0,0);return{setMask:function(et){Ie!==et&&!te&&(r.colorMask(et,et,et,et),Ie=et)},setLocked:function(et){te=et},setClear:function(et,mt,Bt,on,li){li===!0&&(et*=on,mt*=on,Bt*=on),Me.set(et,mt,Bt,on),ze.equals(Me)===!1&&(r.clearColor(et,mt,Bt,on),ze.copy(Me))},reset:function(){te=!1,Ie=null,ze.set(-1,0,0,0)}}}function s(){let te=!1,Me=null,Ie=null,ze=null;return{setTest:function(et){et?ct(2929):st(2929)},setMask:function(et){Me!==et&&!te&&(r.depthMask(et),Me=et)},setFunc:function(et){if(Ie!==et){switch(et){case _p:r.depthFunc(512);break;case Mp:r.depthFunc(519);break;case wp:r.depthFunc(513);break;case Zc:r.depthFunc(515);break;case Sp:r.depthFunc(514);break;case Tp:r.depthFunc(518);break;case Ap:r.depthFunc(516);break;case Ep:r.depthFunc(517);break;default:r.depthFunc(515)}Ie=et}},setLocked:function(et){te=et},setClear:function(et){ze!==et&&(r.clearDepth(et),ze=et)},reset:function(){te=!1,Me=null,Ie=null,ze=null}}}function a(){let te=!1,Me=null,Ie=null,ze=null,et=null,mt=null,Bt=null,on=null,li=null;return{setTest:function(Ut){te||(Ut?ct(2960):st(2960))},setMask:function(Ut){Me!==Ut&&!te&&(r.stencilMask(Ut),Me=Ut)},setFunc:function(Ut,ti,An){(Ie!==Ut||ze!==ti||et!==An)&&(r.stencilFunc(Ut,ti,An),Ie=Ut,ze=ti,et=An)},setOp:function(Ut,ti,An){(mt!==Ut||Bt!==ti||on!==An)&&(r.stencilOp(Ut,ti,An),mt=Ut,Bt=ti,on=An)},setLocked:function(Ut){te=Ut},setClear:function(Ut){li!==Ut&&(r.clearStencil(Ut),li=Ut)},reset:function(){te=!1,Me=null,Ie=null,ze=null,et=null,mt=null,Bt=null,on=null,li=null}}}let o=new i,c=new s,l=new a,u=new WeakMap,h=new WeakMap,f={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,A=null,P=null,B=null,S=null,R=!1,Y=null,ae=null,j=null,K=null,J=null,ne=r.getParameter(35661),le=!1,me=0,q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(q)[1]),le=me>=1):q.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),le=me>=2);let ie=null,Q={},Ce=r.getParameter(3088),se=r.getParameter(2978),be=new zt().fromArray(Ce),we=new zt().fromArray(se);function Fe(te,Me,Ie){let ze=new Uint8Array(4),et=r.createTexture();r.bindTexture(te,et),r.texParameteri(te,10241,9728),r.texParameteri(te,10240,9728);for(let mt=0;mt<Ie;mt++)r.texImage2D(Me+mt,0,6408,1,1,0,6408,5121,ze);return et}let fe={};fe[3553]=Fe(3553,3553,1),fe[34067]=Fe(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ct(2929),c.setFunc(Zc),an(!1),bn(qu),ct(2884),dn(ls);function ct(te){f[te]!==!0&&(r.enable(te),f[te]=!0)}function st(te){f[te]!==!1&&(r.disable(te),f[te]=!1)}function Je(te,Me){return d[te]!==Me?(r.bindFramebuffer(te,Me),d[te]=Me,n&&(te===36009&&(d[36160]=Me),te===36160&&(d[36009]=Me)),!0):!1}function We(te,Me){let Ie=m,ze=!1;if(te)if(Ie=g.get(Me),Ie===void 0&&(Ie=[],g.set(Me,Ie)),te.isWebGLMultipleRenderTargets){let et=te.texture;if(Ie.length!==et.length||Ie[0]!==36064){for(let mt=0,Bt=et.length;mt<Bt;mt++)Ie[mt]=36064+mt;Ie.length=et.length,ze=!0}}else Ie[0]!==36064&&(Ie[0]=36064,ze=!0);else Ie[0]!==1029&&(Ie[0]=1029,ze=!0);ze&&(t.isWebGL2?r.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function tt(te){return p!==te?(r.useProgram(te),p=te,!0):!1}let Ve={[hr]:32774,[up]:32778,[hp]:32779};if(n)Ve[Yu]=32775,Ve[Ku]=32776;else{let te=e.get("EXT_blend_minmax");te!==null&&(Ve[Yu]=te.MIN_EXT,Ve[Ku]=te.MAX_EXT)}let Ge={[fp]:0,[dp]:1,[pp]:768,[xf]:770,[vp]:776,[xp]:774,[gp]:772,[mp]:769,[yf]:771,[yp]:775,[bp]:773};function dn(te,Me,Ie,ze,et,mt,Bt,on){if(te===ls){x===!0&&(st(3042),x=!1);return}if(x===!1&&(ct(3042),x=!0),te!==lp){if(te!==_||on!==R){if((b!==hr||P!==hr)&&(r.blendEquation(32774),b=hr,P=hr),on)switch(te){case us:r.blendFuncSeparate(1,771,1,771);break;case Ii:r.blendFunc(1,1);break;case ju:r.blendFuncSeparate(0,769,0,1);break;case Xu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case us:r.blendFuncSeparate(770,771,1,771);break;case Ii:r.blendFunc(770,1);break;case ju:r.blendFuncSeparate(0,769,0,1);break;case Xu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}v=null,A=null,B=null,S=null,_=te,R=on}return}et=et||Me,mt=mt||Ie,Bt=Bt||ze,(Me!==b||et!==P)&&(r.blendEquationSeparate(Ve[Me],Ve[et]),b=Me,P=et),(Ie!==v||ze!==A||mt!==B||Bt!==S)&&(r.blendFuncSeparate(Ge[Ie],Ge[ze],Ge[mt],Ge[Bt]),v=Ie,A=ze,B=mt,S=Bt),_=te,R=!1}function rn(te,Me){te.side===hn?st(2884):ct(2884);let Ie=te.side===wn;Me&&(Ie=!Ie),an(Ie),te.blending===us&&te.transparent===!1?dn(ls):dn(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.premultipliedAlpha),c.setFunc(te.depthFunc),c.setTest(te.depthTest),c.setMask(te.depthWrite),o.setMask(te.colorWrite);let ze=te.stencilWrite;l.setTest(ze),ze&&(l.setMask(te.stencilWriteMask),l.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),l.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),ut(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?ct(32926):st(32926)}function an(te){Y!==te&&(te?r.frontFace(2304):r.frontFace(2305),Y=te)}function bn(te){te!==op?(ct(2884),te!==ae&&(te===qu?r.cullFace(1029):te===cp?r.cullFace(1028):r.cullFace(1032))):st(2884),ae=te}function ft(te){te!==j&&(le&&r.lineWidth(te),j=te)}function ut(te,Me,Ie){te?(ct(32823),(K!==Me||J!==Ie)&&(r.polygonOffset(Me,Ie),K=Me,J=Ie)):st(32823)}function Nn(te){te?ct(3089):st(3089)}function Ot(te){te===void 0&&(te=33984+ne-1),ie!==te&&(r.activeTexture(te),ie=te)}function U(te,Me,Ie){Ie===void 0&&(ie===null?Ie=33984+ne-1:Ie=ie);let ze=Q[Ie];ze===void 0&&(ze={type:void 0,texture:void 0},Q[Ie]=ze),(ze.type!==te||ze.texture!==Me)&&(ie!==Ie&&(r.activeTexture(Ie),ie=Ie),r.bindTexture(te,Me||fe[te]),ze.type=te,ze.texture=Me)}function I(){let te=Q[ie];te!==void 0&&te.type!==void 0&&(r.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ue(){try{r.texSubImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function bt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Se(){try{r.texStorage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ht(){try{r.texImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ot(te){be.equals(te)===!1&&(r.scissor(te.x,te.y,te.z,te.w),be.copy(te))}function rt(te){we.equals(te)===!1&&(r.viewport(te.x,te.y,te.z,te.w),we.copy(te))}function Rt(te,Me){let Ie=h.get(Me);Ie===void 0&&(Ie=new WeakMap,h.set(Me,Ie));let ze=Ie.get(te);ze===void 0&&(ze=r.getUniformBlockIndex(Me,te.name),Ie.set(te,ze))}function Gt(te,Me){let ze=h.get(Me).get(te);u.get(Me)!==ze&&(r.uniformBlockBinding(Me,ze,te.__bindingPointIndex),u.set(Me,ze))}function fn(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ie=null,Q={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,A=null,P=null,B=null,S=null,R=!1,Y=null,ae=null,j=null,K=null,J=null,be.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ct,disable:st,bindFramebuffer:Je,drawBuffers:We,useProgram:tt,setBlending:dn,setMaterial:rn,setFlipSided:an,setCullFace:bn,setLineWidth:ft,setPolygonOffset:ut,setScissorTest:Nn,activeTexture:Ot,bindTexture:U,unbindTexture:I,compressedTexImage2D:xe,compressedTexImage3D:Ne,texImage2D:ht,texImage3D:$e,updateUBOMapping:Rt,uniformBlockBinding:Gt,texStorage2D:Se,texStorage3D:at,texSubImage2D:Ue,texSubImage3D:Xe,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ye,scissor:ot,viewport:rt,reset:fn}}function qx(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,m,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,I){return x?new OffscreenCanvas(U,I):xa("canvas")}function b(U,I,xe,Ne){let Ue=1;if((U.width>Ne||U.height>Ne)&&(Ue=Ne/Math.max(U.width,U.height)),Ue<1||I===!0)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap){let Xe=I?Mo:Math.floor,bt=Xe(Ue*U.width),Ye=Xe(Ue*U.height);m===void 0&&(m=_(bt,Ye));let Se=xe?_(bt,Ye):m;return Se.width=bt,Se.height=Ye,Se.getContext("2d").drawImage(U,0,0,bt,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+bt+"x"+Ye+")."),Se}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return nl(U.width)&&nl(U.height)}function A(U){return o?!1:U.wrapS!==ri||U.wrapT!==ri||U.minFilter!==Mn&&U.minFilter!==Cn}function P(U,I){return U.generateMipmaps&&I&&U.minFilter!==Mn&&U.minFilter!==Cn}function B(U){r.generateMipmap(U)}function S(U,I,xe,Ne,Ue=!1){if(o===!1)return I;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Xe=I;return I===6403&&(xe===5126&&(Xe=33326),xe===5131&&(Xe=33325),xe===5121&&(Xe=33321)),I===33319&&(xe===5126&&(Xe=33328),xe===5131&&(Xe=33327),xe===5121&&(Xe=33323)),I===6408&&(xe===5126&&(Xe=34836),xe===5131&&(Xe=34842),xe===5121&&(Xe=Ne===yt&&Ue===!1?35907:32856),xe===32819&&(Xe=32854),xe===32820&&(Xe=32855)),(Xe===33325||Xe===33326||Xe===33327||Xe===33328||Xe===34842||Xe===34836)&&e.get("EXT_color_buffer_float"),Xe}function R(U,I,xe){return P(U,xe)===!0||U.isFramebufferTexture&&U.minFilter!==Mn&&U.minFilter!==Cn?Math.log2(Math.max(I.width,I.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?I.mipmaps.length:1}function Y(U){return U===Mn||U===vo||U===la?9728:9729}function ae(U){let I=U.target;I.removeEventListener("dispose",ae),K(I),I.isVideoTexture&&g.delete(I)}function j(U){let I=U.target;I.removeEventListener("dispose",j),ne(I)}function K(U){let I=n.get(U);if(I.__webglInit===void 0)return;let xe=U.source,Ne=p.get(xe);if(Ne){let Ue=Ne[I.__cacheKey];Ue.usedTimes--,Ue.usedTimes===0&&J(U),Object.keys(Ne).length===0&&p.delete(xe)}n.remove(U)}function J(U){let I=n.get(U);r.deleteTexture(I.__webglTexture);let xe=U.source,Ne=p.get(xe);delete Ne[I.__cacheKey],a.memory.textures--}function ne(U){let I=U.texture,xe=n.get(U),Ne=n.get(I);if(Ne.__webglTexture!==void 0&&(r.deleteTexture(Ne.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Ue=0;Ue<6;Ue++)r.deleteFramebuffer(xe.__webglFramebuffer[Ue]),xe.__webglDepthbuffer&&r.deleteRenderbuffer(xe.__webglDepthbuffer[Ue]);else{if(r.deleteFramebuffer(xe.__webglFramebuffer),xe.__webglDepthbuffer&&r.deleteRenderbuffer(xe.__webglDepthbuffer),xe.__webglMultisampledFramebuffer&&r.deleteFramebuffer(xe.__webglMultisampledFramebuffer),xe.__webglColorRenderbuffer)for(let Ue=0;Ue<xe.__webglColorRenderbuffer.length;Ue++)xe.__webglColorRenderbuffer[Ue]&&r.deleteRenderbuffer(xe.__webglColorRenderbuffer[Ue]);xe.__webglDepthRenderbuffer&&r.deleteRenderbuffer(xe.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let Ue=0,Xe=I.length;Ue<Xe;Ue++){let bt=n.get(I[Ue]);bt.__webglTexture&&(r.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(I[Ue])}n.remove(I),n.remove(U)}let le=0;function me(){le=0}function q(){let U=le;return U>=c&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+c),le+=1,U}function ie(U){let I=[];return I.push(U.wrapS),I.push(U.wrapT),I.push(U.wrapR||0),I.push(U.magFilter),I.push(U.minFilter),I.push(U.anisotropy),I.push(U.internalFormat),I.push(U.format),I.push(U.type),I.push(U.generateMipmaps),I.push(U.premultiplyAlpha),I.push(U.flipY),I.push(U.unpackAlignment),I.push(U.encoding),I.join()}function Q(U,I){let xe=n.get(U);if(U.isVideoTexture&&Nn(U),U.isRenderTargetTexture===!1&&U.version>0&&xe.__version!==U.version){let Ne=U.image;if(Ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(xe,U,I);return}}t.bindTexture(3553,xe.__webglTexture,33984+I)}function Ce(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){st(xe,U,I);return}t.bindTexture(35866,xe.__webglTexture,33984+I)}function se(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){st(xe,U,I);return}t.bindTexture(32879,xe.__webglTexture,33984+I)}function be(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){Je(xe,U,I);return}t.bindTexture(34067,xe.__webglTexture,33984+I)}let we={[Kn]:10497,[ri]:33071,[ga]:33648},Fe={[Mn]:9728,[vo]:9984,[la]:9986,[Cn]:9729,[zl]:9985,[Si]:9987};function fe(U,I,xe){if(xe?(r.texParameteri(U,10242,we[I.wrapS]),r.texParameteri(U,10243,we[I.wrapT]),(U===32879||U===35866)&&r.texParameteri(U,32882,we[I.wrapR]),r.texParameteri(U,10240,Fe[I.magFilter]),r.texParameteri(U,10241,Fe[I.minFilter])):(r.texParameteri(U,10242,33071),r.texParameteri(U,10243,33071),(U===32879||U===35866)&&r.texParameteri(U,32882,33071),(I.wrapS!==ri||I.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,10240,Y(I.magFilter)),r.texParameteri(U,10241,Y(I.minFilter)),I.minFilter!==Mn&&I.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Ne=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===Mn||I.minFilter!==la&&I.minFilter!==Si||I.type===cs&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(r.texParameterf(U,Ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function ct(U,I){let xe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,I.addEventListener("dispose",ae));let Ne=I.source,Ue=p.get(Ne);Ue===void 0&&(Ue={},p.set(Ne,Ue));let Xe=ie(I);if(Xe!==U.__cacheKey){Ue[Xe]===void 0&&(Ue[Xe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,xe=!0),Ue[Xe].usedTimes++;let bt=Ue[U.__cacheKey];bt!==void 0&&(Ue[U.__cacheKey].usedTimes--,bt.usedTimes===0&&J(I)),U.__cacheKey=Xe,U.__webglTexture=Ue[Xe].texture}return xe}function st(U,I,xe){let Ne=3553;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Ne=35866),I.isData3DTexture&&(Ne=32879);let Ue=ct(U,I),Xe=I.source;t.bindTexture(Ne,U.__webglTexture,33984+xe);let bt=n.get(Xe);if(Xe.version!==bt.__version||Ue===!0){t.activeTexture(33984+xe),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let Ye=A(I)&&v(I.image)===!1,Se=b(I.image,Ye,!1,u);Se=Ot(I,Se);let at=v(Se)||o,ht=s.convert(I.format,I.encoding),$e=s.convert(I.type),ot=S(I.internalFormat,ht,$e,I.encoding,I.isVideoTexture);fe(Ne,I,at);let rt,Rt=I.mipmaps,Gt=o&&I.isVideoTexture!==!0,fn=bt.__version===void 0||Ue===!0,te=R(I,Se,at);if(I.isDepthTexture)ot=6402,o?I.type===cs?ot=36012:I.type===Bs?ot=33190:I.type===mr?ot=35056:ot=33189:I.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Us&&ot===6402&&I.type!==Mf&&I.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Bs,$e=s.convert(I.type)),I.format===yr&&ot===6402&&(ot=34041,I.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=mr,$e=s.convert(I.type))),fn&&(Gt?t.texStorage2D(3553,1,ot,Se.width,Se.height):t.texImage2D(3553,0,ot,Se.width,Se.height,0,ht,$e,null));else if(I.isDataTexture)if(Rt.length>0&&at){Gt&&fn&&t.texStorage2D(3553,te,ot,Rt[0].width,Rt[0].height);for(let Me=0,Ie=Rt.length;Me<Ie;Me++)rt=Rt[Me],Gt?t.texSubImage2D(3553,Me,0,0,rt.width,rt.height,ht,$e,rt.data):t.texImage2D(3553,Me,ot,rt.width,rt.height,0,ht,$e,rt.data);I.generateMipmaps=!1}else Gt?(fn&&t.texStorage2D(3553,te,ot,Se.width,Se.height),t.texSubImage2D(3553,0,0,0,Se.width,Se.height,ht,$e,Se.data)):t.texImage2D(3553,0,ot,Se.width,Se.height,0,ht,$e,Se.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Gt&&fn&&t.texStorage3D(35866,te,ot,Rt[0].width,Rt[0].height,Se.depth);for(let Me=0,Ie=Rt.length;Me<Ie;Me++)rt=Rt[Me],I.format!==Fn?ht!==null?Gt?t.compressedTexSubImage3D(35866,Me,0,0,0,rt.width,rt.height,Se.depth,ht,rt.data,0,0):t.compressedTexImage3D(35866,Me,ot,rt.width,rt.height,Se.depth,0,rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage3D(35866,Me,0,0,0,rt.width,rt.height,Se.depth,ht,$e,rt.data):t.texImage3D(35866,Me,ot,rt.width,rt.height,Se.depth,0,ht,$e,rt.data)}else{Gt&&fn&&t.texStorage2D(3553,te,ot,Rt[0].width,Rt[0].height);for(let Me=0,Ie=Rt.length;Me<Ie;Me++)rt=Rt[Me],I.format!==Fn?ht!==null?Gt?t.compressedTexSubImage2D(3553,Me,0,0,rt.width,rt.height,ht,rt.data):t.compressedTexImage2D(3553,Me,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage2D(3553,Me,0,0,rt.width,rt.height,ht,$e,rt.data):t.texImage2D(3553,Me,ot,rt.width,rt.height,0,ht,$e,rt.data)}else if(I.isDataArrayTexture)Gt?(fn&&t.texStorage3D(35866,te,ot,Se.width,Se.height,Se.depth),t.texSubImage3D(35866,0,0,0,0,Se.width,Se.height,Se.depth,ht,$e,Se.data)):t.texImage3D(35866,0,ot,Se.width,Se.height,Se.depth,0,ht,$e,Se.data);else if(I.isData3DTexture)Gt?(fn&&t.texStorage3D(32879,te,ot,Se.width,Se.height,Se.depth),t.texSubImage3D(32879,0,0,0,0,Se.width,Se.height,Se.depth,ht,$e,Se.data)):t.texImage3D(32879,0,ot,Se.width,Se.height,Se.depth,0,ht,$e,Se.data);else if(I.isFramebufferTexture){if(fn)if(Gt)t.texStorage2D(3553,te,ot,Se.width,Se.height);else{let Me=Se.width,Ie=Se.height;for(let ze=0;ze<te;ze++)t.texImage2D(3553,ze,ot,Me,Ie,0,ht,$e,null),Me>>=1,Ie>>=1}}else if(Rt.length>0&&at){Gt&&fn&&t.texStorage2D(3553,te,ot,Rt[0].width,Rt[0].height);for(let Me=0,Ie=Rt.length;Me<Ie;Me++)rt=Rt[Me],Gt?t.texSubImage2D(3553,Me,0,0,ht,$e,rt):t.texImage2D(3553,Me,ot,ht,$e,rt);I.generateMipmaps=!1}else Gt?(fn&&t.texStorage2D(3553,te,ot,Se.width,Se.height),t.texSubImage2D(3553,0,0,0,ht,$e,Se)):t.texImage2D(3553,0,ot,ht,$e,Se);P(I,at)&&B(Ne),bt.__version=Xe.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function Je(U,I,xe){if(I.image.length!==6)return;let Ne=ct(U,I),Ue=I.source;t.bindTexture(34067,U.__webglTexture,33984+xe);let Xe=n.get(Ue);if(Ue.version!==Xe.__version||Ne===!0){t.activeTexture(33984+xe),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let bt=I.isCompressedTexture||I.image[0].isCompressedTexture,Ye=I.image[0]&&I.image[0].isDataTexture,Se=[];for(let Me=0;Me<6;Me++)!bt&&!Ye?Se[Me]=b(I.image[Me],!1,!0,l):Se[Me]=Ye?I.image[Me].image:I.image[Me],Se[Me]=Ot(I,Se[Me]);let at=Se[0],ht=v(at)||o,$e=s.convert(I.format,I.encoding),ot=s.convert(I.type),rt=S(I.internalFormat,$e,ot,I.encoding),Rt=o&&I.isVideoTexture!==!0,Gt=Xe.__version===void 0||Ne===!0,fn=R(I,at,ht);fe(34067,I,ht);let te;if(bt){Rt&&Gt&&t.texStorage2D(34067,fn,rt,at.width,at.height);for(let Me=0;Me<6;Me++){te=Se[Me].mipmaps;for(let Ie=0;Ie<te.length;Ie++){let ze=te[Ie];I.format!==Fn?$e!==null?Rt?t.compressedTexSubImage2D(34069+Me,Ie,0,0,ze.width,ze.height,$e,ze.data):t.compressedTexImage2D(34069+Me,Ie,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?t.texSubImage2D(34069+Me,Ie,0,0,ze.width,ze.height,$e,ot,ze.data):t.texImage2D(34069+Me,Ie,rt,ze.width,ze.height,0,$e,ot,ze.data)}}}else{te=I.mipmaps,Rt&&Gt&&(te.length>0&&fn++,t.texStorage2D(34067,fn,rt,Se[0].width,Se[0].height));for(let Me=0;Me<6;Me++)if(Ye){Rt?t.texSubImage2D(34069+Me,0,0,0,Se[Me].width,Se[Me].height,$e,ot,Se[Me].data):t.texImage2D(34069+Me,0,rt,Se[Me].width,Se[Me].height,0,$e,ot,Se[Me].data);for(let Ie=0;Ie<te.length;Ie++){let et=te[Ie].image[Me].image;Rt?t.texSubImage2D(34069+Me,Ie+1,0,0,et.width,et.height,$e,ot,et.data):t.texImage2D(34069+Me,Ie+1,rt,et.width,et.height,0,$e,ot,et.data)}}else{Rt?t.texSubImage2D(34069+Me,0,0,0,$e,ot,Se[Me]):t.texImage2D(34069+Me,0,rt,$e,ot,Se[Me]);for(let Ie=0;Ie<te.length;Ie++){let ze=te[Ie];Rt?t.texSubImage2D(34069+Me,Ie+1,0,0,$e,ot,ze.image[Me]):t.texImage2D(34069+Me,Ie+1,rt,$e,ot,ze.image[Me])}}}P(I,ht)&&B(34067),Xe.__version=Ue.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function We(U,I,xe,Ne,Ue){let Xe=s.convert(xe.format,xe.encoding),bt=s.convert(xe.type),Ye=S(xe.internalFormat,Xe,bt,xe.encoding);n.get(I).__hasExternalTextures||(Ue===32879||Ue===35866?t.texImage3D(Ue,0,Ye,I.width,I.height,I.depth,0,Xe,bt,null):t.texImage2D(Ue,0,Ye,I.width,I.height,0,Xe,bt,null)),t.bindFramebuffer(36160,U),ut(I)?f.framebufferTexture2DMultisampleEXT(36160,Ne,Ue,n.get(xe).__webglTexture,0,ft(I)):(Ue===3553||Ue>=34069&&Ue<=34074)&&r.framebufferTexture2D(36160,Ne,Ue,n.get(xe).__webglTexture,0),t.bindFramebuffer(36160,null)}function tt(U,I,xe){if(r.bindRenderbuffer(36161,U),I.depthBuffer&&!I.stencilBuffer){let Ne=33189;if(xe||ut(I)){let Ue=I.depthTexture;Ue&&Ue.isDepthTexture&&(Ue.type===cs?Ne=36012:Ue.type===Bs&&(Ne=33190));let Xe=ft(I);ut(I)?f.renderbufferStorageMultisampleEXT(36161,Xe,Ne,I.width,I.height):r.renderbufferStorageMultisample(36161,Xe,Ne,I.width,I.height)}else r.renderbufferStorage(36161,Ne,I.width,I.height);r.framebufferRenderbuffer(36160,36096,36161,U)}else if(I.depthBuffer&&I.stencilBuffer){let Ne=ft(I);xe&&ut(I)===!1?r.renderbufferStorageMultisample(36161,Ne,35056,I.width,I.height):ut(I)?f.renderbufferStorageMultisampleEXT(36161,Ne,35056,I.width,I.height):r.renderbufferStorage(36161,34041,I.width,I.height),r.framebufferRenderbuffer(36160,33306,36161,U)}else{let Ne=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Ue=0;Ue<Ne.length;Ue++){let Xe=Ne[Ue],bt=s.convert(Xe.format,Xe.encoding),Ye=s.convert(Xe.type),Se=S(Xe.internalFormat,bt,Ye,Xe.encoding),at=ft(I);xe&&ut(I)===!1?r.renderbufferStorageMultisample(36161,at,Se,I.width,I.height):ut(I)?f.renderbufferStorageMultisampleEXT(36161,at,Se,I.width,I.height):r.renderbufferStorage(36161,Se,I.width,I.height)}}r.bindRenderbuffer(36161,null)}function Ve(U,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,U),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Q(I.depthTexture,0);let Ne=n.get(I.depthTexture).__webglTexture,Ue=ft(I);if(I.depthTexture.format===Us)ut(I)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Ne,0,Ue):r.framebufferTexture2D(36160,36096,3553,Ne,0);else if(I.depthTexture.format===yr)ut(I)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Ne,0,Ue):r.framebufferTexture2D(36160,33306,3553,Ne,0);else throw new Error("Unknown depthTexture format")}function Ge(U){let I=n.get(U),xe=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!I.__autoAllocateDepthBuffer){if(xe)throw new Error("target.depthTexture not supported in Cube render targets");Ve(I.__webglFramebuffer,U)}else if(xe){I.__webglDepthbuffer=[];for(let Ne=0;Ne<6;Ne++)t.bindFramebuffer(36160,I.__webglFramebuffer[Ne]),I.__webglDepthbuffer[Ne]=r.createRenderbuffer(),tt(I.__webglDepthbuffer[Ne],U,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=r.createRenderbuffer(),tt(I.__webglDepthbuffer,U,!1);t.bindFramebuffer(36160,null)}function dn(U,I,xe){let Ne=n.get(U);I!==void 0&&We(Ne.__webglFramebuffer,U,U.texture,36064,3553),xe!==void 0&&Ge(U)}function rn(U){let I=U.texture,xe=n.get(U),Ne=n.get(I);U.addEventListener("dispose",j),U.isWebGLMultipleRenderTargets!==!0&&(Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture()),Ne.__version=I.version,a.memory.textures++);let Ue=U.isWebGLCubeRenderTarget===!0,Xe=U.isWebGLMultipleRenderTargets===!0,bt=v(U)||o;if(Ue){xe.__webglFramebuffer=[];for(let Ye=0;Ye<6;Ye++)xe.__webglFramebuffer[Ye]=r.createFramebuffer()}else{if(xe.__webglFramebuffer=r.createFramebuffer(),Xe)if(i.drawBuffers){let Ye=U.texture;for(let Se=0,at=Ye.length;Se<at;Se++){let ht=n.get(Ye[Se]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&U.samples>0&&ut(U)===!1){let Ye=Xe?I:[I];xe.__webglMultisampledFramebuffer=r.createFramebuffer(),xe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer);for(let Se=0;Se<Ye.length;Se++){let at=Ye[Se];xe.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(36161,xe.__webglColorRenderbuffer[Se]);let ht=s.convert(at.format,at.encoding),$e=s.convert(at.type),ot=S(at.internalFormat,ht,$e,at.encoding,U.isXRRenderTarget===!0),rt=ft(U);r.renderbufferStorageMultisample(36161,rt,ot,U.width,U.height),r.framebufferRenderbuffer(36160,36064+Se,36161,xe.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(36161,null),U.depthBuffer&&(xe.__webglDepthRenderbuffer=r.createRenderbuffer(),tt(xe.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(36160,null)}}if(Ue){t.bindTexture(34067,Ne.__webglTexture),fe(34067,I,bt);for(let Ye=0;Ye<6;Ye++)We(xe.__webglFramebuffer[Ye],U,I,36064,34069+Ye);P(I,bt)&&B(34067),t.unbindTexture()}else if(Xe){let Ye=U.texture;for(let Se=0,at=Ye.length;Se<at;Se++){let ht=Ye[Se],$e=n.get(ht);t.bindTexture(3553,$e.__webglTexture),fe(3553,ht,bt),We(xe.__webglFramebuffer,U,ht,36064+Se,3553),P(ht,bt)&&B(3553)}t.unbindTexture()}else{let Ye=3553;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(o?Ye=U.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ye,Ne.__webglTexture),fe(Ye,I,bt),We(xe.__webglFramebuffer,U,I,36064,Ye),P(I,bt)&&B(Ye),t.unbindTexture()}U.depthBuffer&&Ge(U)}function an(U){let I=v(U)||o,xe=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let Ne=0,Ue=xe.length;Ne<Ue;Ne++){let Xe=xe[Ne];if(P(Xe,I)){let bt=U.isWebGLCubeRenderTarget?34067:3553,Ye=n.get(Xe).__webglTexture;t.bindTexture(bt,Ye),B(bt),t.unbindTexture()}}}function bn(U){if(o&&U.samples>0&&ut(U)===!1){let I=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],xe=U.width,Ne=U.height,Ue=16384,Xe=[],bt=U.stencilBuffer?33306:36096,Ye=n.get(U),Se=U.isWebGLMultipleRenderTargets===!0;if(Se)for(let at=0;at<I.length;at++)t.bindFramebuffer(36160,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+at,36161,null),t.bindFramebuffer(36160,Ye.__webglFramebuffer),r.framebufferTexture2D(36009,36064+at,3553,null,0);t.bindFramebuffer(36008,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ye.__webglFramebuffer);for(let at=0;at<I.length;at++){Xe.push(36064+at),U.depthBuffer&&Xe.push(bt);let ht=Ye.__ignoreDepthValues!==void 0?Ye.__ignoreDepthValues:!1;if(ht===!1&&(U.depthBuffer&&(Ue|=256),U.stencilBuffer&&(Ue|=1024)),Se&&r.framebufferRenderbuffer(36008,36064,36161,Ye.__webglColorRenderbuffer[at]),ht===!0&&(r.invalidateFramebuffer(36008,[bt]),r.invalidateFramebuffer(36009,[bt])),Se){let $e=n.get(I[at]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,$e,0)}r.blitFramebuffer(0,0,xe,Ne,0,0,xe,Ne,Ue,9728),d&&r.invalidateFramebuffer(36008,Xe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Se)for(let at=0;at<I.length;at++){t.bindFramebuffer(36160,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+at,36161,Ye.__webglColorRenderbuffer[at]);let ht=n.get(I[at]).__webglTexture;t.bindFramebuffer(36160,Ye.__webglFramebuffer),r.framebufferTexture2D(36009,36064+at,3553,ht,0)}t.bindFramebuffer(36009,Ye.__webglMultisampledFramebuffer)}}function ft(U){return Math.min(h,U.samples)}function ut(U){let I=n.get(U);return o&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Nn(U){let I=a.render.frame;g.get(U)!==I&&(g.set(U,I),U.update())}function Ot(U,I){let xe=U.encoding,Ne=U.format,Ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===tl||xe!==Li&&(xe===yt?o===!1?e.has("EXT_sRGB")===!0&&Ne===Fn?(U.format=tl,U.minFilter=Cn,U.generateMipmaps=!1):I=wo.sRGBToLinear(I):(Ne!==Fn||Ue!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",xe)),I}this.allocateTextureUnit=q,this.resetTextureUnits=me,this.setTexture2D=Q,this.setTexture2DArray=Ce,this.setTexture3D=se,this.setTextureCube=be,this.rebindTextures=dn,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ut}function jx(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===fi)return 5121;if(s===Op)return 32819;if(s===Np)return 32820;if(s===Dp)return 5120;if(s===kp)return 5122;if(s===Mf)return 5123;if(s===Fp)return 5124;if(s===Bs)return 5125;if(s===cs)return 5126;if(s===Ti)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zp)return 6406;if(s===Fn)return 6408;if(s===Bp)return 6409;if(s===Up)return 6410;if(s===Us)return 6402;if(s===yr)return 34041;if(s===tl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gp)return 6403;if(s===Vp)return 36244;if(s===Hp)return 33319;if(s===Wp)return 33320;if(s===qp)return 36249;if(s===mc||s===gc||s===bc||s===xc)if(a===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===mc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===mc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ju||s===Zu||s===Qu||s===$u)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ju)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$u)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eh||s===th)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===eh)return a===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===th)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nh||s===ih||s===sh||s===rh||s===ah||s===oh||s===ch||s===lh||s===uh||s===hh||s===fh||s===dh||s===ph||s===mh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ih)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ah)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ph)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mh)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===yc)return a===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xp||s===gh||s===bh||s===xh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===yc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var fl=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),x=this._getHandJoint(l,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dl=class extends On{constructor(e,t,n,i,s,a,o,c,l,u){if(u=u!==void 0?u:Us,u!==Us&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=Bs),n===void 0&&u===yr&&(n=mr),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1}},pl=class extends Ki{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,m=t.getContextAttributes(),p=null,x=null,_=[],b=[],v=new Set,A=new Map,P=new mn;P.layers.enable(1),P.viewport=new zt;let B=new mn;B.layers.enable(2),B.viewport=new zt;let S=[P,B],R=new fl;R.layers.enable(1),R.layers.enable(2);let Y=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=_[se];return be===void 0&&(be=new da,_[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=_[se];return be===void 0&&(be=new da,_[se]=be),be.getGripSpace()},this.getHand=function(se){let be=_[se];return be===void 0&&(be=new da,_[se]=be),be.getHandSpace()};function j(se){let be=b.indexOf(se.inputSource);if(be===-1)return;let we=_[be];we!==void 0&&we.dispatchEvent({type:se.type,data:se.inputSource})}function K(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",J);for(let se=0;se<_.length;se++){let be=b[se];be!==null&&(b[se]=null,_[se].disconnect(be))}Y=null,ae=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,x=null,Ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",K),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let be={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:d}),x=new Un(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:fi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let be=null,we=null,Fe=null;m.depth&&(Fe=m.stencil?35056:33190,be=m.stencil?yr:Us,we=m.stencil?mr:Bs);let fe={colorFormat:32856,depthFormat:Fe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),x=new Un(f.textureWidth,f.textureHeight,{format:Fn,type:fi,depthTexture:new dl(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let ct=e.properties.get(x);ct.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(se){for(let be=0;be<se.removed.length;be++){let we=se.removed[be],Fe=b.indexOf(we);Fe>=0&&(b[Fe]=null,_[Fe].disconnect(we))}for(let be=0;be<se.added.length;be++){let we=se.added[be],Fe=b.indexOf(we);if(Fe===-1){for(let ct=0;ct<_.length;ct++)if(ct>=b.length){b.push(we),Fe=ct;break}else if(b[ct]===null){b[ct]=we,Fe=ct;break}if(Fe===-1)break}let fe=_[Fe];fe&&fe.connect(we)}}let ne=new F,le=new F;function me(se,be,we){ne.setFromMatrixPosition(be.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);let Fe=ne.distanceTo(le),fe=be.projectionMatrix.elements,ct=we.projectionMatrix.elements,st=fe[14]/(fe[10]-1),Je=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],tt=(fe[9]-1)/fe[5],Ve=(fe[8]-1)/fe[0],Ge=(ct[8]+1)/ct[0],dn=st*Ve,rn=st*Ge,an=Fe/(-Ve+Ge),bn=an*-Ve;be.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(bn),se.translateZ(an),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();let ft=st+an,ut=Je+an,Nn=dn-bn,Ot=rn+(Fe-bn),U=We*Je/ut*ft,I=tt*Je/ut*ft;se.projectionMatrix.makePerspective(Nn,Ot,U,I,ft,ut)}function q(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;R.near=B.near=P.near=se.near,R.far=B.far=P.far=se.far,(Y!==R.near||ae!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),Y=R.near,ae=R.far);let be=se.parent,we=R.cameras;q(R,be);for(let fe=0;fe<we.length;fe++)q(we[fe],be);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),se.matrix.copy(R.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale);let Fe=se.children;for(let fe=0,ct=Fe.length;fe<ct;fe++)Fe[fe].updateMatrixWorld(!0);we.length===2?me(R,P,B):R.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(se){c=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.getPlanes=function(){return v};let ie=null;function Q(se,be){if(u=be.getViewerPose(l||a),g=be,u!==null){let we=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Fe=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Fe=!0);for(let fe=0;fe<we.length;fe++){let ct=we[fe],st=null;if(d!==null)st=d.getViewport(ct);else{let We=h.getViewSubImage(f,ct);st=We.viewport,fe===0&&(e.setRenderTargetTextures(x,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(x))}let Je=S[fe];Je===void 0&&(Je=new mn,Je.layers.enable(fe),Je.viewport=new zt,S[fe]=Je),Je.matrix.fromArray(ct.transform.matrix),Je.projectionMatrix.fromArray(ct.projectionMatrix),Je.viewport.set(st.x,st.y,st.width,st.height),fe===0&&R.matrix.copy(Je.matrix),Fe===!0&&R.cameras.push(Je)}}for(let we=0;we<_.length;we++){let Fe=b[we],fe=_[we];Fe!==null&&fe!==void 0&&fe.update(Fe,be,l||a)}if(ie&&ie(se,be),be.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:be.detectedPlanes});let we=null;for(let Fe of v)be.detectedPlanes.has(Fe)||(we===null&&(we=[]),we.push(Fe));if(we!==null)for(let Fe of we)v.delete(Fe),A.delete(Fe),n.dispatchEvent({type:"planeremoved",data:Fe});for(let Fe of be.detectedPlanes)if(!v.has(Fe))v.add(Fe),A.set(Fe,be.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Fe});else{let fe=A.get(Fe);Fe.lastChangedTime>fe&&(A.set(Fe,Fe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Fe}))}}g=null}let Ce=new Pf;Ce.setAnimationLoop(Q),this.setAnimationLoop=function(se){ie=se},this.dispose=function(){}}};function Yx(r,e){function t(m,p){p.color.getRGB(m.fogColor.value,Rf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Kx(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(_,b){let v=b.program;n.uniformBlockBinding(_,v)}function l(_,b){let v=i[_.id];v===void 0&&(g(_),v=u(_),i[_.id]=v,_.addEventListener("dispose",p));let A=b.program;n.updateUBOMapping(_,A);let P=e.render.frame;s[_.id]!==P&&(f(_),s[_.id]=P)}function u(_){let b=h();_.__bindingPointIndex=b;let v=r.createBuffer(),A=_.__size,P=_.usage;return r.bindBuffer(35345,v),r.bufferData(35345,A,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,v),v}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=i[_.id],v=_.uniforms,A=_.__cache;r.bindBuffer(35345,b);for(let P=0,B=v.length;P<B;P++){let S=v[P];if(d(S,P,A)===!0){let R=S.__offset,Y=Array.isArray(S.value)?S.value:[S.value],ae=0;for(let j=0;j<Y.length;j++){let K=Y[j],J=m(K);typeof K=="number"?(S.__data[0]=K,r.bufferSubData(35345,R+ae,S.__data)):K.isMatrix3?(S.__data[0]=K.elements[0],S.__data[1]=K.elements[1],S.__data[2]=K.elements[2],S.__data[3]=K.elements[0],S.__data[4]=K.elements[3],S.__data[5]=K.elements[4],S.__data[6]=K.elements[5],S.__data[7]=K.elements[0],S.__data[8]=K.elements[6],S.__data[9]=K.elements[7],S.__data[10]=K.elements[8],S.__data[11]=K.elements[0]):(K.toArray(S.__data,ae),ae+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,R,S.__data)}}r.bindBuffer(35345,null)}function d(_,b,v){let A=_.value;if(v[b]===void 0){if(typeof A=="number")v[b]=A;else{let P=Array.isArray(A)?A:[A],B=[];for(let S=0;S<P.length;S++)B.push(P[S].clone());v[b]=B}return!0}else if(typeof A=="number"){if(v[b]!==A)return v[b]=A,!0}else{let P=Array.isArray(v[b])?v[b]:[v[b]],B=Array.isArray(A)?A:[A];for(let S=0;S<P.length;S++){let R=P[S];if(R.equals(B[S])===!1)return R.copy(B[S]),!0}}return!1}function g(_){let b=_.uniforms,v=0,A=16,P=0;for(let B=0,S=b.length;B<S;B++){let R=b[B],Y={boundary:0,storage:0},ae=Array.isArray(R.value)?R.value:[R.value];for(let j=0,K=ae.length;j<K;j++){let J=ae[j],ne=m(J);Y.boundary+=ne.boundary,Y.storage+=ne.storage}if(R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,B>0){P=v%A;let j=A-P;P!==0&&j-Y.boundary<0&&(v+=A-P,R.__offset=v)}v+=Y.storage}return P=v%A,P>0&&(v+=A-P),_.__size=v,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){let b=_.target;b.removeEventListener("dispose",p);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:x}}function Jx(){let r=xa("canvas");return r.style.display="block",r}function Oa(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:Jx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null,d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;let m=this,p=!1,x=0,_=0,b=null,v=-1,A=null,P=new zt,B=new zt,S=null,R=e.width,Y=e.height,ae=1,j=null,K=null,J=new zt(0,0,R,Y),ne=new zt(0,0,R,Y),le=!1,me=new Ma,q=!1,ie=!1,Q=null,Ce=new gt,se=new Oe,be=new F,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?ae:1}let fe=t;function ct(D,y){for(let M=0;M<D.length;M++){let E=D[M],L=e.getContext(E,y);if(L!==null)return L}return null}try{let D={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),fe===null){let y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&y.shift(),fe=ct(y,D),fe===null)throw ct(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}fe.getShaderPrecisionFormat===void 0&&(fe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let st,Je,We,tt,Ve,Ge,dn,rn,an,bn,ft,ut,Nn,Ot,U,I,xe,Ne,Ue,Xe,bt,Ye,Se,at;function ht(){st=new bb(fe),Je=new hb(fe,st,r),st.init(Je),Ye=new jx(fe,st,Je),We=new Wx(fe,st,Je),tt=new vb,Ve=new Lx,Ge=new qx(fe,st,We,Ve,Je,Ye,tt),dn=new db(m),rn=new gb(m),an=new R0(fe,Je),Se=new lb(fe,st,an,Je),bn=new xb(fe,an,tt,Se),ft=new Sb(fe,bn,an,tt),Ue=new wb(fe,Je,Ge),I=new fb(Ve),ut=new Ix(m,dn,rn,st,Je,Se,I),Nn=new Yx(m,Ve),Ot=new kx,U=new Ux(st,Je),Ne=new cb(m,dn,rn,We,ft,u,a),xe=new Hx(m,ft,Je),at=new Kx(fe,tt,Je,We),Xe=new ub(fe,st,tt,Je),bt=new yb(fe,st,tt,Je),tt.programs=ut.programs,m.capabilities=Je,m.extensions=st,m.properties=Ve,m.renderLists=Ot,m.shadowMap=xe,m.state=We,m.info=tt}ht();let $e=new pl(m,fe);this.xr=$e,this.getContext=function(){return fe},this.getContextAttributes=function(){return fe.getContextAttributes()},this.forceContextLoss=function(){let D=st.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=st.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(D){D!==void 0&&(ae=D,this.setSize(R,Y,!1))},this.getSize=function(D){return D.set(R,Y)},this.setSize=function(D,y,M){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=D,Y=y,e.width=Math.floor(D*ae),e.height=Math.floor(y*ae),M!==!1&&(e.style.width=D+"px",e.style.height=y+"px"),this.setViewport(0,0,D,y)},this.getDrawingBufferSize=function(D){return D.set(R*ae,Y*ae).floor()},this.setDrawingBufferSize=function(D,y,M){R=D,Y=y,ae=M,e.width=Math.floor(D*M),e.height=Math.floor(y*M),this.setViewport(0,0,D,y)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,y,M,E){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,y,M,E),We.viewport(P.copy(J).multiplyScalar(ae).floor())},this.getScissor=function(D){return D.copy(ne)},this.setScissor=function(D,y,M,E){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,y,M,E),We.scissor(B.copy(ne).multiplyScalar(ae).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(D){We.setScissorTest(le=D)},this.setOpaqueSort=function(D){j=D},this.setTransparentSort=function(D){K=D},this.getClearColor=function(D){return D.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(D=!0,y=!0,M=!0){let E=0;D&&(E|=16384),y&&(E|=256),M&&(E|=1024),fe.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Ot.dispose(),U.dispose(),Ve.dispose(),dn.dispose(),rn.dispose(),ft.dispose(),Se.dispose(),at.dispose(),ut.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ze),$e.removeEventListener("sessionend",et),Q&&(Q.dispose(),Q=null),mt.stop()};function ot(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let D=tt.autoReset,y=xe.enabled,M=xe.autoUpdate,E=xe.needsUpdate,L=xe.type;ht(),tt.autoReset=D,xe.enabled=y,xe.autoUpdate=M,xe.needsUpdate=E,xe.type=L}function Rt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Gt(D){let y=D.target;y.removeEventListener("dispose",Gt),fn(y)}function fn(D){te(D),Ve.remove(D)}function te(D){let y=Ve.get(D).programs;y!==void 0&&(y.forEach(function(M){ut.releaseProgram(M)}),D.isShaderMaterial&&ut.releaseShaderCache(D))}this.renderBufferDirect=function(D,y,M,E,L,$){y===null&&(y=we);let V=L.isMesh&&L.matrixWorld.determinant()<0,Z=qr(D,y,M,E,L);We.setMaterial(E,V);let ee=M.index,ue=1;E.wireframe===!0&&(ee=bn.getWireframeAttribute(M),ue=2);let ye=M.drawRange,Ae=M.attributes.position,Ze=ye.start*ue,Tt=(ye.start+ye.count)*ue;$!==null&&(Ze=Math.max(Ze,$.start*ue),Tt=Math.min(Tt,($.start+$.count)*ue)),ee!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,ee.count)):Ae!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Ae.count));let Wt=Tt-Ze;if(Wt<0||Wt===1/0)return;Se.setup(L,E,Z,M,ee);let Nt,vt=Xe;if(ee!==null&&(Nt=an.get(ee),vt=bt,vt.setIndex(Nt)),L.isMesh)E.wireframe===!0?(We.setLineWidth(E.wireframeLinewidth*Fe()),vt.setMode(1)):vt.setMode(4);else if(L.isLine){let qe=E.linewidth;qe===void 0&&(qe=1),We.setLineWidth(qe*Fe()),L.isLineSegments?vt.setMode(1):L.isLineLoop?vt.setMode(2):vt.setMode(3)}else L.isPoints?vt.setMode(0):L.isSprite&&vt.setMode(4);if(L.isInstancedMesh)vt.renderInstances(Ze,Wt,L.count);else if(M.isInstancedBufferGeometry){let qe=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,Ft=Math.min(M.instanceCount,qe);vt.renderInstances(Ze,Wt,Ft)}else vt.render(Ze,Wt)},this.compile=function(D,y){function M(E,L,$){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,An(E,L,$),E.side=hi,E.needsUpdate=!0,An(E,L,$),E.side=hn):An(E,L,$)}f=U.get(D),f.init(),g.push(f),D.traverseVisible(function(E){E.isLight&&E.layers.test(y.layers)&&(f.pushLight(E),E.castShadow&&f.pushShadow(E))}),f.setupLights(m.physicallyCorrectLights),D.traverse(function(E){let L=E.material;if(L)if(Array.isArray(L))for(let $=0;$<L.length;$++){let V=L[$];M(V,D,E)}else M(L,D,E)}),g.pop(),f=null};let Me=null;function Ie(D){Me&&Me(D)}function ze(){mt.stop()}function et(){mt.start()}let mt=new Pf;mt.setAnimationLoop(Ie),typeof self!="undefined"&&mt.setContext(self),this.setAnimationLoop=function(D){Me=D,$e.setAnimationLoop(D),D===null?mt.stop():mt.start()},$e.addEventListener("sessionstart",ze),$e.addEventListener("sessionend",et),this.render=function(D,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(y),y=$e.getCamera()),D.isScene===!0&&D.onBeforeRender(m,D,y,b),f=U.get(D,g.length),f.init(),g.push(f),Ce.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),me.setFromProjectionMatrix(Ce),ie=this.localClippingEnabled,q=I.init(this.clippingPlanes,ie),h=Ot.get(D,d.length),h.init(),d.push(h),Bt(D,y,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(j,K),q===!0&&I.beginShadows();let M=f.state.shadowsArray;if(xe.render(M,D,y),q===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ne.render(h,D),f.setupLights(m.physicallyCorrectLights),y.isArrayCamera){let E=y.cameras;for(let L=0,$=E.length;L<$;L++){let V=E[L];on(h,D,V,V.viewport)}}else on(h,D,y);b!==null&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(m,D,y),Se.resetDefaultState(),v=-1,A=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Bt(D,y,M,E){if(D.visible===!1)return;if(D.layers.test(y.layers)){if(D.isGroup)M=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(y);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||me.intersectsSprite(D)){E&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ce);let V=ft.update(D),Z=D.material;Z.visible&&h.push(D,V,Z,M,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==tt.render.frame&&(D.skeleton.update(),D.skeleton.frame=tt.render.frame),!D.frustumCulled||me.intersectsObject(D))){E&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ce);let V=ft.update(D),Z=D.material;if(Array.isArray(Z)){let ee=V.groups;for(let ue=0,ye=ee.length;ue<ye;ue++){let Ae=ee[ue],Ze=Z[Ae.materialIndex];Ze&&Ze.visible&&h.push(D,V,Ze,M,be.z,Ae)}}else Z.visible&&h.push(D,V,Z,M,be.z,null)}}let $=D.children;for(let V=0,Z=$.length;V<Z;V++)Bt($[V],y,M,E)}function on(D,y,M,E){let L=D.opaque,$=D.transmissive,V=D.transparent;f.setupLightsView(M),q===!0&&I.setGlobalState(m.clippingPlanes,M),$.length>0&&li(L,y,M),E&&We.viewport(P.copy(E)),L.length>0&&Ut(L,y,M),$.length>0&&Ut($,y,M),V.length>0&&Ut(V,y,M),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function li(D,y,M){let E=Je.isWebGL2;Q===null&&(Q=new Un(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")?Ti:fi,minFilter:Si,samples:E&&s===!0?4:0})),m.getDrawingBufferSize(se),E?Q.setSize(se.x,se.y):Q.setSize(Mo(se.x),Mo(se.y));let L=m.getRenderTarget();m.setRenderTarget(Q),m.clear();let $=m.toneMapping;m.toneMapping=ai,Ut(D,y,M),m.toneMapping=$,Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),m.setRenderTarget(L)}function Ut(D,y,M){let E=y.isScene===!0?y.overrideMaterial:null;for(let L=0,$=D.length;L<$;L++){let V=D[L],Z=V.object,ee=V.geometry,ue=E===null?V.material:E,ye=V.group;Z.layers.test(M.layers)&&ti(Z,y,M,ee,ue,ye)}}function ti(D,y,M,E,L,$){D.onBeforeRender(m,y,M,E,L,$),D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),L.onBeforeRender(m,y,M,E,D,$),L.transparent===!0&&L.side===hn&&L.forceSinglePass===!1?(L.side=wn,L.needsUpdate=!0,m.renderBufferDirect(M,y,E,L,D,$),L.side=hi,L.needsUpdate=!0,m.renderBufferDirect(M,y,E,L,D,$),L.side=hn):m.renderBufferDirect(M,y,E,L,D,$),D.onAfterRender(m,y,M,E,L,$)}function An(D,y,M){y.isScene!==!0&&(y=we);let E=Ve.get(D),L=f.state.lights,$=f.state.shadowsArray,V=L.state.version,Z=ut.getParameters(D,L.state,$,y,M),ee=ut.getProgramCacheKey(Z),ue=E.programs;E.environment=D.isMeshStandardMaterial?y.environment:null,E.fog=y.fog,E.envMap=(D.isMeshStandardMaterial?rn:dn).get(D.envMap||E.environment),ue===void 0&&(D.addEventListener("dispose",Gt),ue=new Map,E.programs=ue);let ye=ue.get(ee);if(ye!==void 0){if(E.currentProgram===ye&&E.lightsStateVersion===V)return ts(D,Z),ye}else Z.uniforms=ut.getUniforms(D),D.onBuild(M,Z,m),D.onBeforeCompile(Z,m),ye=ut.acquireProgram(Z,ee),ue.set(ee,ye),E.uniforms=Z.uniforms;let Ae=E.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ae.clippingPlanes=I.uniform),ts(D,Z),E.needsLights=Es(D),E.lightsStateVersion=V,E.needsLights&&(Ae.ambientLightColor.value=L.state.ambient,Ae.lightProbe.value=L.state.probe,Ae.directionalLights.value=L.state.directional,Ae.directionalLightShadows.value=L.state.directionalShadow,Ae.spotLights.value=L.state.spot,Ae.spotLightShadows.value=L.state.spotShadow,Ae.rectAreaLights.value=L.state.rectArea,Ae.ltc_1.value=L.state.rectAreaLTC1,Ae.ltc_2.value=L.state.rectAreaLTC2,Ae.pointLights.value=L.state.point,Ae.pointLightShadows.value=L.state.pointShadow,Ae.hemisphereLights.value=L.state.hemi,Ae.directionalShadowMap.value=L.state.directionalShadowMap,Ae.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ae.spotShadowMap.value=L.state.spotShadowMap,Ae.spotLightMatrix.value=L.state.spotLightMatrix,Ae.spotLightMap.value=L.state.spotLightMap,Ae.pointShadowMap.value=L.state.pointShadowMap,Ae.pointShadowMatrix.value=L.state.pointShadowMatrix);let Ze=ye.getUniforms(),Tt=gr.seqWithValue(Ze.seq,Ae);return E.currentProgram=ye,E.uniformsList=Tt,ye}function ts(D,y){let M=Ve.get(D);M.outputEncoding=y.outputEncoding,M.instancing=y.instancing,M.skinning=y.skinning,M.morphTargets=y.morphTargets,M.morphNormals=y.morphNormals,M.morphColors=y.morphColors,M.morphTargetsCount=y.morphTargetsCount,M.numClippingPlanes=y.numClippingPlanes,M.numIntersection=y.numClipIntersection,M.vertexAlphas=y.vertexAlphas,M.vertexTangents=y.vertexTangents,M.toneMapping=y.toneMapping}function qr(D,y,M,E,L){y.isScene!==!0&&(y=we),Ge.resetTextureUnits();let $=y.fog,V=E.isMeshStandardMaterial?y.environment:null,Z=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Li,ee=(E.isMeshStandardMaterial?rn:dn).get(E.envMap||V),ue=E.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,ye=!!E.normalMap&&!!M.attributes.tangent,Ae=!!M.morphAttributes.position,Ze=!!M.morphAttributes.normal,Tt=!!M.morphAttributes.color,Wt=E.toneMapped?m.toneMapping:ai,Nt=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,vt=Nt!==void 0?Nt.length:0,qe=Ve.get(E),Ft=f.state.lights;if(q===!0&&(ie===!0||D!==A)){let cn=D===A&&E.id===v;I.setState(E,D,cn)}let dt=!1;E.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ft.state.version||qe.outputEncoding!==Z||L.isInstancedMesh&&qe.instancing===!1||!L.isInstancedMesh&&qe.instancing===!0||L.isSkinnedMesh&&qe.skinning===!1||!L.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ee||E.fog===!0&&qe.fog!==$||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==I.numPlanes||qe.numIntersection!==I.numIntersection)||qe.vertexAlphas!==ue||qe.vertexTangents!==ye||qe.morphTargets!==Ae||qe.morphNormals!==Ze||qe.morphColors!==Tt||qe.toneMapping!==Wt||Je.isWebGL2===!0&&qe.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,qe.__version=E.version);let Ke=qe.currentProgram;dt===!0&&(Ke=An(E,y,L));let At=!1,Jt=!1,pn=!1,_t=Ke.getUniforms(),Zt=qe.uniforms;if(We.useProgram(Ke.program)&&(At=!0,Jt=!0,pn=!0),E.id!==v&&(v=E.id,Jt=!0),At||A!==D){if(_t.setValue(fe,"projectionMatrix",D.projectionMatrix),Je.logarithmicDepthBuffer&&_t.setValue(fe,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),A!==D&&(A=D,Jt=!0,pn=!0),E.isShaderMaterial||E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshStandardMaterial||E.envMap){let cn=_t.map.cameraPosition;cn!==void 0&&cn.setValue(fe,be.setFromMatrixPosition(D.matrixWorld))}(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&_t.setValue(fe,"isOrthographic",D.isOrthographicCamera===!0),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial||E.isShadowMaterial||L.isSkinnedMesh)&&_t.setValue(fe,"viewMatrix",D.matrixWorldInverse)}if(L.isSkinnedMesh){_t.setOptional(fe,L,"bindMatrix"),_t.setOptional(fe,L,"bindMatrixInverse");let cn=L.skeleton;cn&&(Je.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),_t.setValue(fe,"boneTexture",cn.boneTexture,Ge),_t.setValue(fe,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let qt=M.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&Je.isWebGL2===!0)&&Ue.update(L,M,E,Ke),(Jt||qe.receiveShadow!==L.receiveShadow)&&(qe.receiveShadow=L.receiveShadow,_t.setValue(fe,"receiveShadow",L.receiveShadow)),E.isMeshGouraudMaterial&&E.envMap!==null&&(Zt.envMap.value=ee,Zt.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),Jt&&(_t.setValue(fe,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&jr(Zt,pn),$&&E.fog===!0&&Nn.refreshFogUniforms(Zt,$),Nn.refreshMaterialUniforms(Zt,E,ae,Y,Q),gr.upload(fe,qe.uniformsList,Zt,Ge)),E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(gr.upload(fe,qe.uniformsList,Zt,Ge),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&_t.setValue(fe,"center",L.center),_t.setValue(fe,"modelViewMatrix",L.modelViewMatrix),_t.setValue(fe,"normalMatrix",L.normalMatrix),_t.setValue(fe,"modelMatrix",L.matrixWorld),E.isShaderMaterial||E.isRawShaderMaterial){let cn=E.uniformsGroups;for(let Yn=0,Gn=cn.length;Yn<Gn;Yn++)if(Je.isWebGL2){let xi=cn[Yn];at.update(xi,Ke),at.bind(xi,Ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ke}function jr(D,y){D.ambientLightColor.needsUpdate=y,D.lightProbe.needsUpdate=y,D.directionalLights.needsUpdate=y,D.directionalLightShadows.needsUpdate=y,D.pointLights.needsUpdate=y,D.pointLightShadows.needsUpdate=y,D.spotLights.needsUpdate=y,D.spotLightShadows.needsUpdate=y,D.rectAreaLights.needsUpdate=y,D.hemisphereLights.needsUpdate=y}function Es(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,y,M){Ve.get(D.texture).__webglTexture=y,Ve.get(D.depthTexture).__webglTexture=M;let E=Ve.get(D);E.__hasExternalTextures=!0,E.__hasExternalTextures&&(E.__autoAllocateDepthBuffer=M===void 0,E.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),E.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,y){let M=Ve.get(D);M.__webglFramebuffer=y,M.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(D,y=0,M=0){b=D,x=y,_=M;let E=!0,L=null,$=!1,V=!1;if(D){let ee=Ve.get(D);ee.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(36160,null),E=!1):ee.__webglFramebuffer===void 0?Ge.setupRenderTarget(D):ee.__hasExternalTextures&&Ge.rebindTextures(D,Ve.get(D.texture).__webglTexture,Ve.get(D.depthTexture).__webglTexture);let ue=D.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(V=!0);let ye=Ve.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(L=ye[y],$=!0):Je.isWebGL2&&D.samples>0&&Ge.useMultisampledRTT(D)===!1?L=Ve.get(D).__webglMultisampledFramebuffer:L=ye,P.copy(D.viewport),B.copy(D.scissor),S=D.scissorTest}else P.copy(J).multiplyScalar(ae).floor(),B.copy(ne).multiplyScalar(ae).floor(),S=le;if(We.bindFramebuffer(36160,L)&&Je.drawBuffers&&E&&We.drawBuffers(D,L),We.viewport(P),We.scissor(B),We.setScissorTest(S),$){let ee=Ve.get(D.texture);fe.framebufferTexture2D(36160,36064,34069+y,ee.__webglTexture,M)}else if(V){let ee=Ve.get(D.texture),ue=y||0;fe.framebufferTextureLayer(36160,36064,ee.__webglTexture,M||0,ue)}v=-1},this.readRenderTargetPixels=function(D,y,M,E,L,$,V){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=Ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&V!==void 0&&(Z=Z[V]),Z){We.bindFramebuffer(36160,Z);try{let ee=D.texture,ue=ee.format,ye=ee.type;if(ue!==Fn&&Ye.convert(ue)!==fe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=ye===Ti&&(st.has("EXT_color_buffer_half_float")||Je.isWebGL2&&st.has("EXT_color_buffer_float"));if(ye!==fi&&Ye.convert(ye)!==fe.getParameter(35738)&&!(ye===cs&&(Je.isWebGL2||st.has("OES_texture_float")||st.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=D.width-E&&M>=0&&M<=D.height-L&&fe.readPixels(y,M,E,L,Ye.convert(ue),Ye.convert(ye),$)}finally{let ee=b!==null?Ve.get(b).__webglFramebuffer:null;We.bindFramebuffer(36160,ee)}}},this.copyFramebufferToTexture=function(D,y,M=0){let E=Math.pow(2,-M),L=Math.floor(y.image.width*E),$=Math.floor(y.image.height*E);Ge.setTexture2D(y,0),fe.copyTexSubImage2D(3553,M,0,0,D.x,D.y,L,$),We.unbindTexture()},this.copyTextureToTexture=function(D,y,M,E=0){let L=y.image.width,$=y.image.height,V=Ye.convert(M.format),Z=Ye.convert(M.type);Ge.setTexture2D(M,0),fe.pixelStorei(37440,M.flipY),fe.pixelStorei(37441,M.premultiplyAlpha),fe.pixelStorei(3317,M.unpackAlignment),y.isDataTexture?fe.texSubImage2D(3553,E,D.x,D.y,L,$,V,Z,y.image.data):y.isCompressedTexture?fe.compressedTexSubImage2D(3553,E,D.x,D.y,y.mipmaps[0].width,y.mipmaps[0].height,V,y.mipmaps[0].data):fe.texSubImage2D(3553,E,D.x,D.y,V,Z,y.image),E===0&&M.generateMipmaps&&fe.generateMipmap(3553),We.unbindTexture()},this.copyTextureToTexture3D=function(D,y,M,E,L=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let $=D.max.x-D.min.x+1,V=D.max.y-D.min.y+1,Z=D.max.z-D.min.z+1,ee=Ye.convert(E.format),ue=Ye.convert(E.type),ye;if(E.isData3DTexture)Ge.setTexture3D(E,0),ye=32879;else if(E.isDataArrayTexture)Ge.setTexture2DArray(E,0),ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}fe.pixelStorei(37440,E.flipY),fe.pixelStorei(37441,E.premultiplyAlpha),fe.pixelStorei(3317,E.unpackAlignment);let Ae=fe.getParameter(3314),Ze=fe.getParameter(32878),Tt=fe.getParameter(3316),Wt=fe.getParameter(3315),Nt=fe.getParameter(32877),vt=M.isCompressedTexture?M.mipmaps[0]:M.image;fe.pixelStorei(3314,vt.width),fe.pixelStorei(32878,vt.height),fe.pixelStorei(3316,D.min.x),fe.pixelStorei(3315,D.min.y),fe.pixelStorei(32877,D.min.z),M.isDataTexture||M.isData3DTexture?fe.texSubImage3D(ye,L,y.x,y.y,y.z,$,V,Z,ee,ue,vt.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),fe.compressedTexSubImage3D(ye,L,y.x,y.y,y.z,$,V,Z,ee,vt.data)):fe.texSubImage3D(ye,L,y.x,y.y,y.z,$,V,Z,ee,ue,vt),fe.pixelStorei(3314,Ae),fe.pixelStorei(32878,Ze),fe.pixelStorei(3316,Tt),fe.pixelStorei(3315,Wt),fe.pixelStorei(32877,Nt),L===0&&E.generateMipmaps&&fe.generateMipmap(ye),We.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ge.setTextureCube(D,0):D.isData3DTexture?Ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ge.setTexture2DArray(D,0):Ge.setTexture2D(D,0),We.unbindTexture()},this.resetState=function(){x=0,_=0,b=null,We.reset(),Se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ml=class extends Oa{};ml.prototype.isWebGL1Renderer=!0;var Sr=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},wa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Wn=new F,Sa=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Qh=new F,$h=new zt,ef=new zt,Zx=new F,tf=new gt,Qi=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new gt,this.bindMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new zt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;$h.fromBufferAttribute(i.attributes.skinIndex,e),ef.fromBufferAttribute(i.attributes.skinWeight,e),Qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=ef.getComponent(s);if(a!==0){let o=$h.getComponent(s);tf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zx.copy(Qh).applyMatrix4(tf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ws=class extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Tr=class extends On{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Mn,u=Mn,h,f){super(null,a,o,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nf=new gt,Qx=new gt,ds=class r{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new gt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Qx;nf.multiplyMatrices(o,t[s]),nf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tf(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Tr(t,e,e,Fn,cs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ws),this.bones.push(a),this.boneInverses.push(new gt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ta=class extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sf=new gt,rf=new gt,fo=[],$x=new gt,ra=new St,Ar=class extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ta(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,$x)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,sf),rf.multiplyMatrices(n,sf),ra.matrixWorld=rf,ra.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){let c=fo[a];c.instanceId=s,c.object=this,t.push(c)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ta(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Aa=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},af=new F,of=new F,cf=new gt,qc=new ya,po=new Ji,Er=class extends nn{constructor(e=new Ct,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)af.fromBufferAttribute(t,i-1),of.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=af.distanceTo(of);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;cf.copy(i).invert(),qc.copy(e.ray).applyMatrix4(cf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let x=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){let A=g.getX(b),P=g.getX(b+1);if(l.fromBufferAttribute(p,A),u.fromBufferAttribute(p,P),qc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){if(l.fromBufferAttribute(p,b),u.fromBufferAttribute(p,b+1),qc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},lf=new F,uf=new F,Po=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)lf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lf.distanceTo(uf);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Io=class extends Er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qs=class extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new gt,gl=new ya,mo=new Ji,go=new F,ps=class extends nn{constructor(e=new Ct,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;hf.copy(i).invert(),gl.copy(e.ray).applyMatrix4(hf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,m=d;g<m;g++){let p=l.getX(g);go.fromBufferAttribute(h,p),ff(go,p,c,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,m=d;g<m;g++)go.fromBufferAttribute(h,g),ff(go,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ff(r,e,t,n,i,s,a){let o=gl.distanceSqToPoint(r);if(o<t){let c=new F;gl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var pi=class extends On{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Oe:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,i=[],s=[],a=[],o=new F,c=new gt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new F)}s[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Rn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ea=class extends mi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Oe,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bl=class extends Ea{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var bo=new F,jc=new Hl,Xc=new Hl,Yc=new Hl,xl=class extends mi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%s]:(bo.subVectors(i[0],i[1]).add(i[0]),l=bo);let h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(bo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),jc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,m,p),Xc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,m,p),Yc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Xc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Yc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(jc.calc(c),Xc.calc(c),Yc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function df(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function e1(r,e){let t=1-r;return t*t*e}function t1(r,e){return 2*(1-r)*r*e}function n1(r,e){return r*r*e}function pa(r,e,t,n){return e1(r,e)+t1(r,t)+n1(r,n)}function i1(r,e){let t=1-r;return t*t*t*e}function s1(r,e){let t=1-r;return 3*t*t*r*e}function r1(r,e){return 3*(1-r)*r*r*e}function a1(r,e){return r*r*r*e}function ma(r,e,t,n,i){return i1(r,e)+s1(r,t)+r1(r,n)+a1(r,i)}var Lo=class extends mi{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,i.x,s.x,a.x,o.x),ma(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends mi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,i.x,s.x,a.x,o.x),ma(e,i.y,s.y,a.y,o.y),ma(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends mi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new Oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends mi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends mi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(pa(e,i.x,s.x,a.x),pa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends mi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(pa(e,i.x,s.x,a.x),pa(e,i.y,s.y,a.y),pa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(df(o,c.x,l.x,u.x,h.x),df(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}},o1=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:xl,CubicBezierCurve:Lo,CubicBezierCurve3:yl,EllipseCurve:Ea,LineCurve:Ca,LineCurve3:vl,QuadraticBezierCurve:Do,QuadraticBezierCurve3:_l,SplineCurve:ko}),Ml=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ca(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new o1[i.type]().fromJSON(i))}return this}},wl=class extends Ml{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ca(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Do(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Lo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i),new Oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Ea(e,t,n,i,s,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ra=class r extends Ct{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rn(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],u=1/t,h=new F,f=new Oe,d=new F,g=new F,m=new F,p=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(g)}for(let _=0;_<=t;_++){let b=n+_*u*i,v=Math.sin(b),A=Math.cos(b);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*v,h.y=e[P].y,h.z=e[P].x*A,a.push(h.x,h.y,h.z),f.x=_/t,f.y=P/(e.length-1),o.push(f.x,f.y);let B=c[3*P+0]*v,S=c[3*P+1],R=c[3*P+0]*A;l.push(B,S,R)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let v=b+_*e.length,A=v,P=v+e.length,B=v+e.length+1,S=v+1;s.push(A,P,S),s.push(B,S,P)}this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(l,3))}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Fo=class r extends Ra{constructor(e=1,t=1,n=4,i=8){let s=new wl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Pa=class r extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new F,u=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},In=class r extends Ct{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],g=0,m=[],p=n/2,x=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function _(){let v=new F,A=new F,P=0,B=(t-e)/n;for(let S=0;S<=s;S++){let R=[],Y=S/s,ae=Y*(t-e)+e;for(let j=0;j<=i;j++){let K=j/i,J=K*c+o,ne=Math.sin(J),le=Math.cos(J);A.x=ae*ne,A.y=-Y*n+p,A.z=ae*le,h.push(A.x,A.y,A.z),v.set(ne,B,le).normalize(),f.push(v.x,v.y,v.z),d.push(K,1-Y),R.push(g++)}m.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let Y=m[R][S],ae=m[R+1][S],j=m[R+1][S+1],K=m[R][S+1];u.push(Y,ae,K),u.push(ae,j,K),P+=6}l.addGroup(x,P,0),x+=P}function b(v){let A=g,P=new Oe,B=new F,S=0,R=v===!0?e:t,Y=v===!0?1:-1;for(let j=1;j<=i;j++)h.push(0,p*Y,0),f.push(0,Y,0),d.push(.5,.5),g++;let ae=g;for(let j=0;j<=i;j++){let J=j/i*c+o,ne=Math.cos(J),le=Math.sin(J);B.x=R*le,B.y=p*Y,B.z=R*ne,h.push(B.x,B.y,B.z),f.push(0,Y,0),P.x=ne*.5+.5,P.y=le*.5*Y+.5,d.push(P.x,P.y),g++}for(let j=0;j<i;j++){let K=A+j,J=ae+j;v===!0?u.push(J,J+1,K):u.push(J+1,J,K),S+=3}l.addGroup(x,S,v===!0?1:2),x+=S}}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=class r extends In{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class r extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),u(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new F,v=new F,A=new F;for(let P=0;P<t.length;P+=3)d(t[P+0],b),d(t[P+1],v),d(t[P+2],A),c(b,v,A,_)}function c(_,b,v,A){let P=A+1,B=[];for(let S=0;S<=P;S++){B[S]=[];let R=_.clone().lerp(v,S/P),Y=b.clone().lerp(v,S/P),ae=P-S;for(let j=0;j<=ae;j++)j===0&&S===P?B[S][j]=R:B[S][j]=R.clone().lerp(Y,j/ae)}for(let S=0;S<P;S++)for(let R=0;R<2*(P-S)-1;R++){let Y=Math.floor(R/2);R%2===0?(f(B[S][Y+1]),f(B[S+1][Y]),f(B[S][Y])):(f(B[S][Y+1]),f(B[S+1][Y+1]),f(B[S+1][Y]))}}function l(_){let b=new F;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(_),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function u(){let _=new F;for(let b=0;b<s.length;b+=3){_.x=s[b+0],_.y=s[b+1],_.z=s[b+2];let v=p(_)/2/Math.PI+.5,A=x(_)/Math.PI+.5;a.push(v,1-A)}g(),h()}function h(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],A=a[_+4],P=Math.max(b,v,A),B=Math.min(b,v,A);P>.9&&B<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,b){let v=_*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){let _=new F,b=new F,v=new F,A=new F,P=new Oe,B=new Oe,S=new Oe;for(let R=0,Y=0;R<s.length;R+=9,Y+=6){_.set(s[R+0],s[R+1],s[R+2]),b.set(s[R+3],s[R+4],s[R+5]),v.set(s[R+6],s[R+7],s[R+8]),P.set(a[Y+0],a[Y+1]),B.set(a[Y+2],a[Y+3]),S.set(a[Y+4],a[Y+5]),A.copy(_).add(b).add(v).divideScalar(3);let ae=p(A);m(P,Y+0,_,ae),m(B,Y+2,b,ae),m(S,Y+4,v,ae)}}function m(_,b,v,A){A<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=A/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var $i=class r extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ms=class r extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},gs=class r extends Ct{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,f=(t-e)/i,d=new F,g=new Oe;for(let m=0;m<=i;m++){for(let p=0;p<=n;p++){let x=s+p/n*a;d.x=h*Math.cos(x),d.y=h*Math.sin(x),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let m=0;m<i;m++){let p=m*(n+1);for(let x=0;x<n;x++){let _=x+p,b=_,v=_+n+1,A=_+n+2,P=_+1;o.push(b,v,P),o.push(v,A,P)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(u,2))}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Di=class r extends Ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new F,f=new F,d=[],g=[],m=[],p=[];for(let x=0;x<=n;x++){let _=[],b=x/n,v=0;x==0&&a==0?v=.5/t:x==n&&c==Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let P=A/t;h.x=-e*Math.cos(i+P*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+P*s)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(P+v,1-b),_.push(l++)}u.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let b=u[x][_+1],v=u[x][_],A=u[x+1][_],P=u[x+1][_+1];(x!==0||a>0)&&d.push(b,v,P),(x!==n-1||c<Math.PI)&&d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rr=class r extends Ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new F,h=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(m),h.y=(e+t*Math.cos(p))*Math.sin(m),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,x=(i+1)*(d-1)+g,_=(i+1)*d+g;a.push(m,p,_),a.push(p,x,_)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ht=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ki=class extends Ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function os(r,e,t){return Ff(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function xo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ff(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function c1(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Of(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var bs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends bs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fr,endingEnd:fr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case dr:s=e,o=2*t-n;break;case _o:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dr:a=e,c=2*n-t;break;case _o:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,x=-f*p+2*f*m-f*g,_=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,b=(-1-d)*p+(1.5+d)*m+.5*g,v=d*p-d*m;for(let A=0;A!==o;++A)s[A]=x*a[u+A]+_*a[l+A]+b*a[c+A]+v*a[h+A];return s}},No=class extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}},Tl=class extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=os(n,s,a),this.values=os(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ff(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=os(this.times),t=os(this.values),n=this.getValueSize(),i=this.getInterpolation()===vc,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=os(e,0,a),this.values=os(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=os(this.times,0),t=os(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Vs;var xs=class extends gi{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=vr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends gi{};zo.prototype.ValueTypeName="color";var ys=class extends gi{};ys.prototype.ValueTypeName="number";var Al=class extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)yn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Fi=class extends gi{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=Vs;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends gi{};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=vr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends gi{};_s.prototype.ValueTypeName="vector";var Pr=class{constructor(e,t=-1,n,i=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(u1(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(gi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=c1(c);c=pf(c,1,u),l=pf(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ys(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,m){if(d.length!==0){let p=[],x=[];Of(d,p,x,g),p.length!==0&&m.push(new h(f,p,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(let m in d){let p=[],x=[];for(let _=0;_!==f[g].morphTargets.length;++_){let b=f[g];p.push(b.time),x.push(b.morphTarget===m?1:0)}i.push(new ys(".morphTargetInfluence["+m+"]",p,x))}c=d.length*a}else{let d=".bones["+t[h].name+"]";n(_s,d+".position",f,"pos",i),n(Fi,d+".quaternion",f,"rot",i),n(_s,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function l1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return zo;case"quaternion":return Fi;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l1(r.type);if(r.times===void 0){let t=[],n=[];Of(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ir={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},El=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},h1=new El,Ms=class{constructor(e){this.manager=e!==void 0?e:h1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},ji={},Cl=class extends Error{constructor(e,t){super(e),this.response=t}},Ia=class extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=ji[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,m=0,p=new ReadableStream({start(x){_();function _(){h.read().then(({done:b,value:v})=>{if(b)x.close();else{m+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let P=0,B=u.length;P<B;P++){let S=u[P];S.onProgress&&S.onProgress(A)}x.enqueue(v),_()}})}}});return new Response(p)}else throw new Cl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ir.add(e,l);let u=ji[e];delete ji[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Rl=class extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=xa("img");function c(){u(),Ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Bo=class extends Ms{constructor(e){super(e)}load(e,t,n,i){let s=new On,a=new Rl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Lr=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Dr=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kc=new gt,mf=new F,gf=new F,La=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=class extends La{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Uo=class extends Lr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bf=new gt,aa=new F,Jc=new F,Il=class extends La{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(aa),Jc.copy(n.position),Jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jc),n.updateMatrixWorld(),i.makeTranslation(-aa.x,-aa.y,-aa.z),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}},kr=class extends Lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ll=class extends La{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fr=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Go=class extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ir.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var Dl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){yn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;yn.multiplyQuaternionsFlat(e,a,e,t,e,n),yn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Wl="\\[\\]\\.:\\/",f1=new RegExp("["+Wl+"]","g"),ql="[^"+Wl+"]",d1="[^"+Wl.replace("\\.","")+"]",p1=/((?:WC+[\/:])*)/.source.replace("WC",ql),m1=/(WCOD+)?/.source.replace("WCOD",d1),g1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),b1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),x1=new RegExp("^"+p1+m1+g1+b1+"$"),y1=["material","materials","bones","map"],kl=class{constructor(e,t,n){let i=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f1,"")}static parseTrackName(e){let t=x1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);y1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=kl;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:fr,endingEnd:fr};for(let l=0;l!==a;++l){let u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Kp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Ul:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===Yp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Bl){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=dr,i.endingEnd=dr):(e?i.endingStart=this.zeroSlopeAtStart?dr:fr:i.endingStart=_o,t?i.endingEnd=this.zeroSlopeAtEnd?dr:fr:i.endingEnd=_o)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},v1=new Float32Array(1),Vo=class extends Ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){let f=i[h],d=f.name,g=u[d];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let m=t&&t._propertyBindings[h].binding.parsedPath;g=new Dl(Yt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new No(new Float32Array(2),new Float32Array(2),1,v1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?Pr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new Fl(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Pr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Xo(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Ct,l=0;for(let u=0;u<r.length;++u){let h=r[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=r[f].attributes.position.count}c.setIndex(h)}for(let u in s){let h=Nf(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let m=0;m<a[u].length;++m)d.push(a[u][m][f]);let g=Nf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Nf(r){let e,t,n,i=0;for(let o=0;o<r.length;++o){let c=r[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}let s=new e(i),a=0;for(let o=0;o<r.length;++o)s.set(r[o].array,a),a+=r[o].array.length;return new pt(s,t,n)}function jl(r,e){if(e===wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Fa||e===qo){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Fa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Yo=class extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ql(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)})}load(e,t,n,i){let s=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Fr.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ia(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hf){try{a[Dt.KHR_BINARY_GLTF]=new lu(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new gu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Dt.KHR_MATERIALS_UNLIT:a[h]=new Jl;break;case Dt.KHR_DRACO_MESH_COMPRESSION:a[h]=new uu(s,this.dracoLoader);break;case Dt.KHR_TEXTURE_TRANSFORM:a[h]=new hu;break;case Dt.KHR_MESH_QUANTIZATION:a[h]=new fu;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function _1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kl=class{constructor(e){this.parser=e,this.name=Dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new De(16777215);c.color!==void 0&&u.fromArray(c.color);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jn(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new kr(u),l.distance=h;break;case"spot":l=new Uo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Jl=class{constructor(){this.name=Dt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let i=[];e.color=new De(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(i)}},Zl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Ql=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}},$l=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},eu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,yt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},nu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new De(o[0],o[1],o[2]),Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new De(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,yt)),Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=Dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},au=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ou=class{constructor(e){this.name=Dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},cu=class{constructor(e){this.name=Dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==bi.TRIANGLES&&l.mode!==bi.TRIANGLE_STRIP&&l.mode!==bi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let m=new gt,p=new F,x=new yn,_=new F(1,1,1),b=new Ar(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&x.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,m.compose(p,x,_));for(let v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);nn.prototype.copy.call(b,g),b.frustumCulled=!1,this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Hf="glTF",za=12,zf={JSON:1313821514,BIN:5130562},lu=class{constructor(e){this.name=Dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-za,s=new DataView(e,za),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===zf.JSON){let l=new Uint8Array(e,za+a,o);this.content=n.decode(l)}else if(c===zf.BIN){let l=za+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=pu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=pu[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=zr[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(let d in f.attributes){let g=f.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}h(f)},o,l)})})}},hu=class{constructor(){this.name=Dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fu=class{constructor(){this.name=Dt.KHR_MESH_QUANTIZATION}},Ko=class extends bs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,m=g-l,p=-2*d+3*f,x=d-f,_=1-p,b=x-f+h;for(let v=0;v!==o;v++){let A=a[m+v+o],P=a[m+v+c]*u,B=a[g+v+o],S=a[g+v]*u;s[v]=_*A+b*P+p*B+x*S}return s}},M1=new yn,du=class extends Ko{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return M1.fromArray(s).normalize().toArray(s),s}},bi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:Mn,9729:Cn,9984:vo,9985:zl,9986:la,9987:Si},Uf={33071:ri,33648:ga,10497:Kn},Xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:Vs,STEP:vr},Yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),r.DefaultMaterial}function Ba(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ts(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T1(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function A1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function E1(r){let e=r.extensions&&r.extensions[Dt.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Gf(e.attributes):t=r.indices+":"+Gf(r.attributes)+":"+r.mode,t}function Gf(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function mu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var R1=new gt,gu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _1,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new Bo(this.options.manager):this.textureLoader=new Go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Ba(s,o,i),Ts(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Dt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Fr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Xl[i.type],o=zr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new pt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Xl[i.type],l=zr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,m,p;if(d&&d!==h){let x=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,b=t.cache.get(_);b||(m=new l(o,x*d,i.count*d/u),b=new wa(m,d/u),t.cache.add(_,b)),p=new Sa(b,c,f%d/u,g)}else o===null?m=new l(i.count*c):m=new l(o,f,i.count*c),p=new pt(m,c,g);if(i.sparse!==void 0){let x=Xl.SCALAR,_=zr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new _(a[1],b,i.sparse.count*x),P=new l(a[2],v,i.sparse.count*c);o!==null&&(p=new pt(p.array.slice(),p.itemSize,p.normalized));for(let B=0,S=A.length;B<S;B++){let R=A[B];if(p.setX(R,P[B*c]),c>=2&&p.setY(R,P[B*c+1]),c>=3&&p.setZ(R,P[B*c+2]),c>=4&&p.setW(R,P[B*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Bf[f.magFilter]||Cn,u.minFilter=Bf[f.minFilter]||Si,u.wrapS=Uf[f.wrapS]||Kn,u.wrapT=Uf[f.wrapT]||Kn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let p=new On(m);p.needsUpdate=!0,f(p)}),t.load(Fr.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||C1(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qs,ci.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Aa,ci.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ht}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Dt.KHR_MATERIALS_UNLIT]){let h=i[Dt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=hn);let u=s.alphaMode||Yl.OPAQUE;if(u===Yl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Yl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==sn&&(o.emissive=new De().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==sn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,yt)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Ts(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ba(i,h,s),h})}createUniqueName(e){let t=Yt.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Vf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=E1(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[Dt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Vf(new Ct,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?S1(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let m=u[d],p=a[d],x,_=l[d];if(p.mode===bi.TRIANGLES||p.mode===bi.TRIANGLE_STRIP||p.mode===bi.TRIANGLE_FAN||p.mode===void 0)x=s.isSkinnedMesh===!0?new Qi(m,_):new St(m,_),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),p.mode===bi.TRIANGLE_STRIP?x.geometry=jl(x.geometry,qo):p.mode===bi.TRIANGLE_FAN&&(x.geometry=jl(x.geometry,Fa));else if(p.mode===bi.LINES)x=new Po(m,_);else if(p.mode===bi.LINE_STRIP)x=new Er(m,_);else if(p.mode===bi.LINE_LOOP)x=new Io(m,_);else if(p.mode===bi.POINTS)x=new ps(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(x.geometry.morphAttributes).length>0&&A1(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Ts(x,s),p.extensions&&Ba(i,x,p),t.assignFinalMaterial(x),h.push(x)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];let f=new Kt;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(Af.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ts(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new gt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ds(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let l=0,u=n.channels.length;l<u;l++){let h=n.channels[l],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(f),c.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2],d=l[3],g=l[4],m=[];for(let x=0,_=u.length;x<_;x++){let b=u[x],v=h[x],A=f[x],P=d[x],B=g[x];if(b===void 0)continue;b.updateMatrix();let S;switch(Ss[B.path]){case Ss.weights:S=ys;break;case Ss.rotation:S=Fi;break;case Ss.position:case Ss.scale:default:S=_s;break}let R=b.name?b.name:b.uuid,Y=P.interpolation!==void 0?w1[P.interpolation]:Vs,ae=[];Ss[B.path]===Ss.weights?b.traverse(function(K){K.morphTargetInfluences&&ae.push(K.name?K.name:K.uuid)}):ae.push(R);let j=A.array;if(A.normalized){let K=mu(j.constructor),J=new Float32Array(j.length);for(let ne=0,le=j.length;ne<le;ne++)J[ne]=j[ne]*K;j=J}for(let K=0,J=ae.length;K<J;K++){let ne=new S(ae[K]+"."+Ss[B.path],v.array,j,Y);P.interpolation==="CUBICSPLINE"&&(ne.createInterpolant=function(me){let q=this instanceof Fi?du:Ko;return new q(this.times,this.values,this.getValueSize()/3,me)},ne.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(ne)}}let p=n.name?n.name:"animation_"+e;return new Pr(p,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){let o=[],c=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});let l=[],u=s.children||[];for(let f=0,d=u.length;f<d;f++)l.push(i.getDependency("node",u[f]));let h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(l),h])}().then(function(o){let c=o[0],l=o[1],u=o[2],h;if(s.isBone===!0?h=new Ws:c.length>1?h=new Kt:c.length===1?h=c[0]:h=new nn,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(s.name&&(h.userData.name=s.name,h.name=a),Ts(h,s),s.extensions&&Ba(n,h,s),s.matrix!==void 0){let f=new gt;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,R1)});for(let f=0,d=l.length;f<d;f++)h.add(l[f]);return h})}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Kt;n.name&&(s.name=i.createUniqueName(n.name)),Ts(s,n),n.extensions&&Ba(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof ci||f instanceof On)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}};function P1(r,e,t){let n=e.attributes,i=new oi;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){let u=mu(zr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new F,c=new F;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let m=mu(zr[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Ji;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Vf(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=pu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ts(r,e),P1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?T1(r,e.targets,t):r})}var Wf=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(x){s=x.instance,s.exports.__wasm_call_ctors()});function o(x){for(var _=new Uint8Array(x.length),b=0;b<x.length;++b){var v=x.charCodeAt(b);_[b]=v>96?v-97:v>64?v-39:v+4}for(var A=0,b=0;b<x.length;++b)_[A++]=_[b]<60?n[_[b]]:(_[b]-60)*64+_[++b];return _.buffer.slice(0,A)}function c(x,_,b,v,A,P){var B=s.exports.sbrk,S=b+3&-4,R=B(S*v),Y=B(A.length),ae=new Uint8Array(s.exports.memory.buffer);ae.set(A,Y);var j=x(R,b,v,Y,A.length);if(j==0&&P&&P(R,S,v),_.set(ae.subarray(R,R+b*v)),B(R-B(0)),j!=0)throw new Error("Malformed buffer data: "+j)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(x){var _={object:new Worker(x),pending:0,requests:{}};return _.object.onmessage=function(b){var v=b.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(x){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),b=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(b),A=0;A<x;++A)h[A]=d(v);URL.revokeObjectURL(v)}function m(x,_,b,v,A){for(var P=h[0],B=1;B<h.length;++B)h[B].pending<P.pending&&(P=h[B]);return new Promise(function(S,R){var Y=new Uint8Array(b),ae=f++;P.pending+=x,P.requests[ae]={resolve:S,reject:R},P.object.postMessage({id:ae,count:x,size:_,source:Y,mode:v,filter:A},[Y.buffer])})}function p(x){a.then(function(){var _=x.data;try{var b=new Uint8Array(_.count*_.size);c(s.exports[_.mode],b,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(x){g(x)},decodeVertexBuffer:function(x,_,b,v,A){c(s.exports.meshopt_decodeVertexBuffer,x,_,b,v,s.exports[l[A]])},decodeIndexBuffer:function(x,_,b,v){c(s.exports.meshopt_decodeIndexBuffer,x,_,b,v)},decodeIndexSequence:function(x,_,b,v){c(s.exports.meshopt_decodeIndexSequence,x,_,b,v)},decodeGltfBuffer:function(x,_,b,v,A,P){c(s.exports[u[A]],x,_,b,v,s.exports[l[P]])},decodeGltfBufferAsync:function(x,_,b,v,A){return h.length>0?m(x,_,b,u[v],l[A]):a.then(function(){var P=new Uint8Array(x*_);return c(s.exports[u[v]],P,x,_,b,s.exports[l[A]]),P})}}}();function qf(r){let e=new Map,t=new Map,n=r.clone();return jf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function jf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)jf(r.children[n],e.children[n],t)}function I1(r){let e=r>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var bu=r=>r*r*(3-2*r),xu=r=>r<0?0:r>1?1:r,Ua=r=>r-Math.floor(r),js=(r,e,t)=>bu(xu((t-r)/(e-r)));function L1(r,e,t){let n=new Float32Array(e*t);for(let i=0;i<n.length;i++)n[i]=r();return(i,s)=>{let a=Ua(i)*e,o=Ua(s)*t,c=Math.floor(a),l=Math.floor(o),u=bu(a-c),h=bu(o-l),f=(c+1)%e,d=(l+1)%t,g=n[l*e+c],m=n[l*e+f],p=n[d*e+c],x=n[d*e+f];return g+(m-g)*u+(p-g)*h+(g-m-p+x)*u*h}}function jn(r,e,t,n=4,i=.5){let s=[],a=1,o=0;for(let c=0;c<n;c++)s.push([L1(r,e<<c,t<<c),a]),o+=a,a*=i;return(c,l)=>{let u=0;for(let h=0;h<s.length;h++)u+=s[h][0](c,l)*s[h][1];return u/o}}function Br(r,e,t=.85){let n=new Float32Array(e*e*2),i=new Float32Array(e*e);for(let a=0;a<e*e;a++)n[a*2]=.5+(r()-.5)*t,n[a*2+1]=.5+(r()-.5)*t,i[a]=r();let s={f1:0,f2:0,id:0};return(a,o)=>{let c=Ua(a)*e,l=Ua(o)*e,u=Math.floor(c),h=Math.floor(l),f=1e9,d=1e9,g=0;for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++){let x=u+p,_=h+m,b=(_+e)%e*e+(x+e)%e,v=x+n[b*2]-c,A=_+n[b*2+1]-l,P=Math.sqrt(v*v+A*A);P<f?(d=f,f=P,g=i[b]):P<d&&(d=P)}return s.f1=f,s.f2=d,s.id=g,s}}var yu={metal(r,e,t,n,i){let s=jn(e,2,96,3,.55),a=jn(e,3,3,3);for(let o=0;o<r;o++)for(let c=0;c<r;c++){let l=c/r,u=o/r,h=o*r+c,f=s(l,u),d=a(l,u);t[h]=f*.6+d*.4,n[h]=.88+f*.08+d*.04,i[h]=.68+f*.15+js(.45,.8,d)*.12}for(let o=0;o<14;o++){let c=e()*r,l=e()*r,u=(e()-.5)*.9,h=r*(.08+e()*.18),f=Math.cos(u),d=Math.sin(u);for(let g=0;g<h;g++){let m=(Math.round(c+f*g)%r+r)%r,x=(Math.round(l+d*g)%r+r)%r*r+m;t[x]=Math.max(0,t[x]-.18),n[x]=Math.min(1,n[x]+.05),i[x]*=.7}}},hammered(r,e,t,n,i){let s=Br(e,7,.9),a=Br(e,13,.9),o=jn(e,4,4,3);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let u=l/r,h=c/r,f=c*r+l,d=s(u,h).f1,g=a(u,h).f1,m=o(u,h),p=Math.min(1,d*d*1.4)*.65+Math.min(1,g*g*1.6)*.35;t[f]=p*.85+m*.15,n[f]=.88+p*.09+m*.03,i[f]=.66+(1-p)*.22+m*.08}},leather(r,e,t,n,i){let s=Br(e,22,1),a=jn(e,3,5,4),o=jn(e,2,2,3),c=jn(e,32,32,2);for(let l=0;l<r;l++)for(let u=0;u<r;u++){let h=u/r,f=l/r,d=l*r+u,g=s(h,f),m=js(0,.22,g.f2-g.f1),p=1-js(0,.05,Math.abs(a(h,f)-.5)),x=o(h,f);t[d]=m*.7+c(h,f)*.2+.1-p*.35,n[d]=.8+x*.14+m*.06-p*.06,i[d]=.7+(1-x)*.2+(1-m)*.1}},cloth(r,e,t,n,i){let a=jn(e,2,48,2),o=jn(e,48,2,2),c=jn(e,3,3,3);for(let l=0;l<r;l++)for(let u=0;u<r;u++){let h=u/r,f=l/r,d=l*r+u,g=h*24,m=f*24,p=Math.floor(g),x=Math.floor(m),_=g-p,b=m-x,v=(p+x&1)===0,A=v?_:b,P=v?b:_,B=Math.sin(Math.PI*A),S=.6+.4*Math.sin(Math.PI*P),R=v?a(h,f):o(h,f);t[d]=B*S*(.8+R*.2),n[d]=.8+B*.1+R*.06+c(h,f)*.04,i[d]=.92+(1-B)*.08}},wood(r,e,t,n,i){let s=jn(e,2,3,4),a=jn(e,3,64,2),o=Br(e,3,.8);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let u=l/r,h=c/r,f=c*r+l,d=o(u,h),g=Math.max(0,1-d.f1*2.4),m=Ua(h*7+s(u,h)*1.6+g*g*.6),p=Math.pow(Math.sin(Math.PI*m),.6),x=a(u,h);t[f]=p*.55+x*.45,n[f]=.74+p*.16+x*.1-g*g*.1,i[f]=.75+(1-p)*.12+x*.13}},stone(r,e,t,n,i){let s=Br(e,5,.9),a=Br(e,11,.9),o=jn(e,4,4,5),c=jn(e,24,24,2);for(let l=0;l<r;l++)for(let u=0;u<r;u++){let h=u/r,f=l/r,d=l*r+u,g=s(h,f),m=1-js(0,.06,g.f2-g.f1),p=g.id,x=a(h,f),_=1-js(0,.03,x.f2-x.f1),b=o(h,f),v=js(.62,.8,c(h,f));t[d]=.25+b*.55+p*.2-m*.55-_*.12-v*.15,n[d]=.8+b*.1+p*.08-m*.2-_*.05-v*.06,i[d]=.82+b*.12+m*.06}},scale(r,e,t,n,i){let u=jn(e,8,8,2),h=jn(e,6,6,3);for(let f=0;f<r;f++)for(let d=0;d<r;d++){let g=d/r,m=f/r,p=f*r+d,x=null,_=Math.floor(m/.125);for(let B=_+2;B>=_-1;B--){let S=(B+1)*.125,R=S-.21875;if(m>S+1e-6||m<R)continue;let Y=(B%2+2)%2*.5,ae=(Math.round(g*8-Y)+Y)/8,j=g-ae;j-=Math.round(j);let K=.0625*1.02,J=S-K,ne,le;if(m<=J)ne=Math.abs(j)<=K,le=(K-Math.abs(j))/K;else{let me=Math.hypot(j,m-J);ne=me<=K,le=(K-me)/K}ne&&(x={t:(m-R)/.21875,edge:le,dx:j/K,id:u(ae,S)})}if(!x){t[p]=0,n[p]=.6,i[p]=.9;continue}let b=js(0,.18,x.edge),v=1-x.dx*x.dx*.35,A=(.35+x.t*.65)*v*b,P=h(g,m);t[p]=A*.9+P*.1,n[p]=.72+b*.14+x.id*.08+P*.06,i[p]=.6+(1-b)*.25+x.id*.15}}},ky=Object.keys(yu);function Xf(r){if(typeof document!="undefined"){let e=document.createElement("canvas");return e.width=r,e.height=r,e}return new OffscreenCanvas(r,r)}function D1(r){let e=1/0,t=-1/0;for(let i=0;i<r.length;i++)r[i]<e&&(e=r[i]),r[i]>t&&(t=r[i]);let n=t>e?1/(t-e):0;for(let i=0;i<r.length;i++)r[i]=(r[i]-e)*n}var Yf=new Map,Kf=new Map;function Ga(r,e={}){if(!yu[r])throw new Error("proceduralTexture: unknown kind "+r);let t=Math.min(512,Math.max(16,1<<Math.round(Math.log2(e.size||128)))),n=e.seed==null?1:e.seed|0,i=e.repeat==null?[1,1]:Array.isArray(e.repeat)?e.repeat:[e.repeat,e.repeat],s=e.anisotropy||1,a=r+"|"+t+"|"+n+"|"+s,o=Yf.get(a);if(!o){let u=I1(n*7919+r.length*104729+r.charCodeAt(0)*31),h=t*t,f=new Float32Array(h),d=new Float32Array(h),g=new Float32Array(h);yu[r](t,u,f,d,g),D1(f);let m=Xf(t),p=Xf(t),x=m.getContext("2d"),_=p.getContext("2d"),b=x.createImageData(t,t),v=_.createImageData(t,t);for(let B=0;B<h;B++){let S=Math.round(xu(d[B])*255),R=B*4;b.data[R]=S,b.data[R+1]=S,b.data[R+2]=S,b.data[R+3]=255,v.data[R]=Math.round(f[B]*255),v.data[R+1]=Math.round(xu(g[B])*255),v.data[R+2]=0,v.data[R+3]=255}x.putImageData(b,0,0),_.putImageData(v,0,0);let A=new pi(m),P=new pi(p);for(let B of[A,P])B.wrapS=B.wrapT=Kn,B.anisotropy=s;A.encoding=yt,P.encoding=Li,A.name="pt-"+r+"-map",P.name="pt-"+r+"-data",o={map:A,roughnessMap:P,bumpMap:P},Yf.set(a,o)}if(i[0]===1&&i[1]===1)return o;let c=a+"|"+i[0]+"x"+i[1],l=Kf.get(c);if(!l){let u=o.map.clone(),h=o.roughnessMap.clone();u.repeat.set(i[0],i[1]),h.repeat.set(i[0],i[1]),l={map:u,roughnessMap:h,bumpMap:h},Kf.set(c,l)}return l}var Zf={metal:{tex:"metal",rough:.42,metal:.9,bump:.0035,env:.9,color:10133672},gold:{tex:"hammered",rough:.36,metal:1,bump:.0025,env:1,color:14264389},leather:{tex:"leather",rough:.78,metal:0,bump:.006,env:.3,color:7031347},cloth:{tex:"cloth",rough:.95,metal:0,bump:.005,env:.2,color:8007214},wood:{tex:"wood",rough:.72,metal:0,bump:.006,env:.3,color:8016948},stone:{tex:"stone",rough:.9,metal:0,bump:.009,env:.25,color:5592154},gem:{tex:null,rough:.1,metal:.3,bump:0,env:1,color:3837183},bone:{tex:"leather",rough:.55,metal:0,bump:.0015,env:.35,color:14208432},skin:{tex:"leather",rough:.62,metal:0,bump:8e-4,env:.25,color:13146746},hair:{tex:"metal",rough:.5,metal:0,bump:.002,env:.35,color:3811870}},Fy=Object.keys(Zf),Jf=new Map;function k1(r){return r==null?"d":r.isColor?"c"+r.getHexString():String(r)}function Oi(r,e,t={}){var l,u,h,f,d,g;let n=Zf[r];if(!n)throw new Error("detailMaterial: unknown role "+r);let i={};for(let m of Object.keys(t).sort()){let p=t[m];i[m]=p&&p.isTexture?"tex:"+p.uuid:p&&p.isColor?"#"+p.getHexString():p}let s=r+"|"+k1(e)+"|"+JSON.stringify(i),a=Jf.get(s);if(a)return a;let o=new De(e==null?n.color:e);a=new Ht({color:o,roughness:(l=t.roughness)!=null?l:n.rough,metalness:(u=t.metalness)!=null?u:n.metal,flatShading:!!t.flatShading,side:(h=t.side)!=null?h:hi});let c=t.texture===!1?null:t.texture||n.tex;if(c){let m=Ga(c,{size:t.size,seed:t.seed,repeat:t.repeat});a.map=m.map,a.roughnessMap=m.roughnessMap;let p=n.bump*((f=t.bump)!=null?f:1);p>0&&(a.bumpMap=m.bumpMap,a.bumpScale=p),a.roughness=Math.min(1,a.roughness/.78)}return r==="gem"&&(a.emissive=new De(t.glow==null?o:t.glow),a.emissiveIntensity=(d=t.glowIntensity)!=null?d:.7,a.color.multiplyScalar(.25)),t.envMap&&(a.envMap=t.envMap),a.envMapIntensity=(g=t.envMapIntensity)!=null?g:n.env,a.name="dm-"+r,a.userData.shared=!0,Jf.set(s,a),a}var Jo=new WeakMap;function F1(){let r=new fs,e=new Di(10,32,16),t=e.attributes.position,n=new Float32Array(t.count*3),i=new De(.2,.21,.25),s=new De(.2,.18,.16),a=new De(.025,.022,.02),o=new De;for(let l=0;l<t.count;l++){let u=t.getY(l)/10;u>=0?o.copy(s).lerp(i,Math.pow(u,.6)):o.copy(s).lerp(a,Math.min(1,Math.pow(-u*4,.5))),n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b}e.setAttribute("color",new pt(n,3)),r.add(new St(e,new sn({vertexColors:!0,side:wn,fog:!1})));let c=(l,u,h,f)=>{let d=new sn({color:new De().setRGB(h[0],h[1],h[2],Hs),side:hn,fog:!1}),g=new St(new di(l,u),d);g.position.set(f[0],f[1],f[2]),g.lookAt(0,0,0),r.add(g)};return c(5,3.5,[5,3.9,2.8],[-4.5,6,5]),c(3,6,[1.6,2.1,3.6],[5,3,-6]),c(9,4,[.9,.86,.8],[0,2.5,8.5]),c(2.5,2.5,[.9,.8,.7],[-8,.5,-2]),r}function Zo(r,e={}){let t=Jo.get(r);if(t)return t.texture;let n=e.size||64,i=F1(),s=new wr(r),a;if(n>=256)a=s.fromScene(i,.02,.1,50);else{let o=new _a(n,{type:Ti,generateMipmaps:!1}),c=new va(.1,50,o),l=r.getRenderTarget(),u=r.toneMapping,h=r.outputEncoding;r.toneMapping=ai,r.outputEncoding=Li,c.update(r,i),r.toneMapping=u,r.outputEncoding=h,r.setRenderTarget(l),a=s.fromCubemap(o.texture),o.dispose()}return s.dispose(),i.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a.texture.name="sigil-env",Jo.set(r,a),a.texture}function Qo(r){let e=Jo.get(r);e&&(e.dispose(),Jo.delete(r))}function O1(r,e,t,n){let i=new Ct;return i.setAttribute("position",new lt(r,3)),e&&i.setAttribute("normal",new lt(e,3)),i.setAttribute("uv",new lt(t,2)),i.setIndex(n),e||i.computeVertexNormals(),i.computeBoundingSphere(),i}function Qf(r=1,e=1,t=1,n,i=2,s={}){let a=r/2,o=e/2,c=t/2;n=Math.min(n==null?Math.min(r,e,t)*.1:n,a,o,c),i=Math.max(1,i|0);let l=2*i+1,u=new Ai(1,1,1,l,l,l),h=u.attributes.position,f=u.attributes.normal,d=u.attributes.uv,g=s.uvScale||1/Math.max(r,e,t),m=(b,v)=>{let A=Math.round((b+.5)*l);return A<=i?-v+n*(A/i):A>=l-i?v-n*((l-A)/i):-v+n},p=new F,x=new F,_=new F;for(let b=0;b<h.count;b++){p.set(m(h.getX(b),a),m(h.getY(b),o),m(h.getZ(b),c));let v=new F(f.getX(b),f.getY(b),f.getZ(b));v.x&&(p.x=Math.sign(v.x)*a),v.y&&(p.y=Math.sign(v.y)*o),v.z&&(p.z=Math.sign(v.z)*c),x.set(Math.max(-a+n,Math.min(a-n,p.x)),Math.max(-o+n,Math.min(o-n,p.y)),Math.max(-c+n,Math.min(c-n,p.z))),_.subVectors(p,x),_.lengthSq()<1e-12?_.copy(v):_.normalize(),p.copy(x).addScaledVector(_,n),h.setXYZ(b,p.x,p.y,p.z),f.setXYZ(b,_.x,_.y,_.z);let A,P;v.x?(A=p.z*-Math.sign(v.x),P=p.y):v.y?(A=p.x,P=p.z*-Math.sign(v.y)):(A=p.x*Math.sign(v.z),P=p.y),d.setXY(b,A*g+.5,P*g+.5)}return u.computeBoundingSphere(),u}function $f(r=1,e=1,t=.04,n,i={}){var Y,ae;n=Math.min(n==null?Math.min(r,e)*.2:n,r/2-1e-4,e/2-1e-4);let s=i.curve||0,a=i.curveY||0,o=Math.max(1,(Y=i.cornerSeg)!=null?Y:3),c=Math.max(1,(ae=i.seg)!=null?ae:s||a?4:1),l=j=>{let K=[],J=j/2;for(let ne=0;ne<=o;ne++)K.push(-J+n*(ne/o));for(let ne=1;ne<c;ne++)K.push(-J+n+(j-2*n)*(ne/c));for(let ne=o;ne>=0;ne--)K.push(J-n*(ne/o));return K},u=l(r),h=l(e),f=u.length,d=h.length,g=1/Math.max(r,e),m=(j,K)=>{let J=r/2-n,ne=e/2-n,le=Math.abs(j),me=Math.abs(K);if(le>J+1e-9&&me>ne+1e-9){let q=le-J,ie=me-ne,Q=Math.max(q,ie),Ce=Math.hypot(q,ie),se=Q/Ce;return[Math.sign(j)*(J+q*se),Math.sign(K)*(ne+ie*se)]}return[j,K]},p=(j,K,J,ne)=>{let le=j,me=K,q=J;if(s){let ie=le/s,Q=s+q;le=Q*Math.sin(ie),q=Q*Math.cos(ie)-s}if(a){let ie=me/a,Q=a+q;me=Q*Math.sin(ie),q=Q*Math.cos(ie)-a}ne.push(le,me,q)},x=[],_=[],b=[],v=t/2,A=i.back===!1?[1]:[1,-1];for(let j of A){let K=x.length/3;for(let J=0;J<d;J++)for(let ne=0;ne<f;ne++){let[le,me]=m(u[ne],h[J]);p(le,me,j*v,x),_.push((j>0?le:-le)*g+.5,me*g+.5)}for(let J=0;J<d-1;J++)for(let ne=0;ne<f-1;ne++){let le=K+J*f+ne,me=le+1,q=le+f,ie=q+1;j>0?b.push(le,me,ie,le,ie,q):b.push(le,ie,me,le,q,ie)}}let P=[];for(let j=0;j<f;j++)P.push([j,0]);for(let j=1;j<d;j++)P.push([f-1,j]);for(let j=f-2;j>=0;j--)P.push([j,d-1]);for(let j=d-2;j>0;j--)P.push([0,j]);let B=x.length/3,S=0,R=null;for(let j=0;j<=P.length;j++){let[K,J]=P[j%P.length],[ne,le]=m(u[K],h[J]);R&&(S+=Math.hypot(ne-R[0],le-R[1])),R=[ne,le],p(ne,le,v,x),p(ne,le,-v,x),_.push(S*g,0,S*g,t*g)}for(let j=0;j<P.length;j++){let K=B+j*2,J=K+1,ne=K+2,le=K+3;b.push(K,J,le,K,le,ne)}return O1(x,null,_,b)}var $o=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},N1=new hs(-1,1,1,-1,0,1),vu=new Ct;vu.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));vu.setAttribute("uv",new lt([0,2,0,0,2,0],2));var Ur=class{constructor(e){this._mesh=new St(vu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,N1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ed={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var td={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var As=class r extends $o{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Un(s,a);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Un(s,a);d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=td;this.highPassUniforms=ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Oe(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ed;this.copyUniforms=ws.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new gn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ii,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new Ur(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new Oe(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new gn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};As.BlurDirectionX=new Oe(1,0);As.BlurDirectionY=new Oe(0,1);var ec={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};var Zn=Object.freeze({Ultra:Object.freeze({name:"Ultra",pixelRatio:3,post:!0,msaa:8,fxaa:!1,target:"half",shadowMapSize:4096,shadowType:Or,propShadows:!0,bloom:!0,bloomStrength:1.45,bloomScale:1,maxLights:8,textureSize:512}),High:Object.freeze({name:"High",pixelRatio:2,post:!0,msaa:4,fxaa:!1,target:"half",shadowMapSize:2048,shadowType:Or,propShadows:!0,bloom:!0,bloomStrength:1.4,bloomScale:1,maxLights:6,textureSize:512}),Medium:Object.freeze({name:"Medium",pixelRatio:1.5,post:!0,msaa:2,fxaa:!1,target:"byte",shadowMapSize:1024,shadowType:Da,propShadows:!1,bloom:!0,bloomStrength:1.25,bloomScale:.5,maxLights:4,textureSize:256}),Low:Object.freeze({name:"Low",pixelRatio:1.25,post:!1,msaa:0,fxaa:!1,target:"byte",shadowMapSize:512,shadowType:Da,propShadows:!1,bloom:!1,bloomStrength:0,bloomScale:.5,maxLights:3,textureSize:128})}),tc=["Ultra","High","Medium","Low"],z1=Object.freeze({exposure:null,bloomThreshold:.88,bloomKnee:.08,bloomRadius:.25,bloomStrength:null,lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1.06,vignette:.2,dither:1}),Qy=Object.freeze({lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1,vignette:0}),B1=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,id=`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`,U1=`
uniform sampler2D tDiffuse;
uniform vec2 texel;
uniform float luminosityThreshold;
uniform float smoothWidth;
varying vec2 vUv;
${id}
vec3 tap(vec2 o) { return clamp(texture2D(tDiffuse, vUv + o * texel).rgb, 0.0, 1.0); }
void main() {
  vec3 c = 0.25 * (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)));
  float br = max(c.r, max(c.g, c.b));
  float k = max(smoothWidth, 1e-4);
  float soft = clamp(br - luminosityThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k);
  float w = max(soft, br - luminosityThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(srgbToLinear(c) * w, 1.0);
}`,G1=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform vec3 lift, gammaInv, gain;
uniform float saturation, vignette, dither;
varying vec2 vUv;
${id}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 col = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));   // display-referred, linear light
#ifdef USE_BLOOM
  vec3 b = max(texture2D(tBloom, vUv).rgb, 0.0);
  col = 1.0 - (1.0 - col) * exp(-b);   // soft screen: never clips, ~additive for faint bloom
#endif
#ifdef USE_GRADE
  col = gain * (col + lift * (1.0 - col));
  col = pow(max(col, 0.0), gammaInv);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(l), col, saturation), 0.0);
  float r = length(vUv - 0.5) * 1.41421;                   // oval vignette, follows the screen shape
  col *= 1.0 - vignette * smoothstep(0.35, 1.05, r);
#endif
  vec3 o = linearToSrgb(clamp(col, 0.0, 1.0));
  o += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.xy + 17.31) - 1.0) * dither / 255.0;
  gl_FragColor = vec4(o, 1.0);
}`;function V1(r){return!!(r.capabilities&&r.capabilities.isWebGL2)}function H1(r){let e=r.extensions;return e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")}function W1(r,e,t,n,i){let s=new Un(e,t,{type:i?Ti:fi,format:Fn,samples:n,depthBuffer:!0,stencilBuffer:!1,encoding:yt});return s.isXRRenderTarget=!0,s.texture.internalFormat=i?"RGBA16F":"RGBA8",s.texture.name="Sigil.scene",s.texture.generateMipmaps=!1,r.properties.get(s).__ignoreDepthValues=!0,s}function sd(r,e,t,n={}){let i=V1(r),s=r.getPixelRatio(),a=Object.assign({},z1,n.params||{});a.exposure==null&&(a.exposure=r.toneMappingExposure);let o=n.applyShadows!==!1,c=Zn[n.quality]||Zn.High,l=1,u=1,h=1,f=1,d=null,g=null,m=null,p=!1,x=new De,_=new De,b=new De,v=new gn({name:"SigilFinal",uniforms:{tScene:{value:null},tBloom:{value:null},lift:{value:new F},gammaInv:{value:new F(1,1,1)},gain:{value:new F(1,1,1)},saturation:{value:1},vignette:{value:0},dither:{value:1}},defines:{},vertexShader:B1,fragmentShader:G1,depthTest:!1,depthWrite:!1,toneMapped:!1}),A=new gn({name:"SigilFXAA",uniforms:ws.clone(ec.uniforms),vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader,depthTest:!1,depthWrite:!1,toneMapped:!1}),P=new Ur(v);function B(me,q){me in v.defines!==q&&(q?v.defines[me]="":delete v.defines[me],v.needsUpdate=!0)}function S(){let me=new As(new Oe(256,256),c.bloomStrength,a.bloomRadius,a.bloomThreshold);for(let q of[me.renderTargetBright,...me.renderTargetsHorizontal,...me.renderTargetsVertical])q.texture.type=Ti;return me.highPassUniforms.texel={value:new Oe},me.materialHighPassFilter.fragmentShader=U1,me.materialHighPassFilter.needsUpdate=!0,me}function R(){d&&d.dispose(),g&&g.dispose(),m&&m.dispose(),d=g=m=null}function Y(){if(R(),p=i&&c.post,!p)return;let me=Math.min(c.msaa|0,r.capabilities.maxSamples||0);d=W1(r,h,f,me,c.target==="half"&&H1(r)),(c.fxaa||me===0)&&(g=new Un(h,f,{depthBuffer:!1,stencilBuffer:!1}),g.texture.generateMipmaps=!1),c.bloom&&(m=S()),B("USE_BLOOM",!!m),ae()}function ae(){d&&d.setSize(h,f),g&&(g.setSize(h,f),A.uniforms.resolution.value.set(1/h,1/f)),m&&(m.setSize(Math.max(2,Math.round(h*c.bloomScale)),Math.max(2,Math.round(f*c.bloomScale))),m.highPassUniforms.texel.value.set(.5/h,.5/f))}function j(me,q){l=Math.max(1,me|0),u=Math.max(1,q|0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,c.pixelRatio)),r.setSize(l,u,!1);let ie=r.getDrawingBufferSize(new Oe);h=ie.x,f=ie.y,ae()}function K(me){let q=Zn[me];q&&(c=q,o&&nd(r,e,q),Y(),j(l,u))}function J(me){let q=m,ie=q.fsQuad;q.highPassUniforms.tDiffuse.value=me,q.highPassUniforms.luminosityThreshold.value=a.bloomThreshold,q.highPassUniforms.smoothWidth.value=a.bloomKnee,ie.material=q.materialHighPassFilter,r.setRenderTarget(q.renderTargetBright),r.clear(),ie.render(r);let Q=q.renderTargetBright;for(let se=0;se<q.nMips;se++){let be=q.separableBlurMaterials[se];ie.material=be,be.uniforms.colorTexture.value=Q.texture,be.uniforms.direction.value=As.BlurDirectionX,r.setRenderTarget(q.renderTargetsHorizontal[se]),r.clear(),ie.render(r),be.uniforms.colorTexture.value=q.renderTargetsHorizontal[se].texture,be.uniforms.direction.value=As.BlurDirectionY,r.setRenderTarget(q.renderTargetsVertical[se]),r.clear(),ie.render(r),Q=q.renderTargetsVertical[se]}let Ce=q.compositeMaterial;return Ce.uniforms.bloomStrength.value=a.bloomStrength==null?c.bloomStrength:a.bloomStrength,Ce.uniforms.bloomRadius.value=a.bloomRadius,ie.material=Ce,r.setRenderTarget(q.renderTargetsHorizontal[0]),r.clear(),ie.render(r),q.renderTargetsHorizontal[0].texture}function ne(){if(r.toneMappingExposure=a.exposure,!p){r.render(e,t);return}let me=e.background,q=!!(me&&me.isColor);r.getClearColor(x);let ie=r.getClearAlpha();q?(_.copy(me).convertLinearToSRGB(),e.background=null,r.setClearColor(_,1)):(_.copy(x).convertLinearToSRGB(),r.setClearColor(_,ie));let Q=e.fog;Q&&(b.copy(Q.color),Q.color.convertLinearToSRGB()),r.setRenderTarget(d),r.render(e,t),Q&&Q.color.copy(b),q&&(e.background=me),r.setClearColor(x,ie);let Ce=r.autoClear;r.autoClear=!1;let se=!!m&&(a.bloomStrength==null?c.bloomStrength:a.bloomStrength)>0;B("USE_BLOOM",se),se&&(v.uniforms.tBloom.value=J(d.texture));let be=v.uniforms,we=a.gamma;be.tScene.value=d.texture,be.lift.value.fromArray(a.lift),be.gammaInv.value.set(1/Math.max(.001,we[0]),1/Math.max(.001,we[1]),1/Math.max(.001,we[2])),be.gain.value.fromArray(a.gain),be.saturation.value=a.saturation,be.vignette.value=a.vignette,be.dither.value=a.dither;let Fe=a.vignette===0&&a.saturation===1&&[0,1,2].every(fe=>a.lift[fe]===0&&we[fe]===1&&a.gain[fe]===1);B("USE_GRADE",!Fe),P.material=v,g&&(r.setRenderTarget(g),P.render(r),A.uniforms.tDiffuse.value=g.texture,P.material=A),r.setRenderTarget(null),P.render(r),r.autoClear=Ce}function le(){R(),v.dispose(),A.dispose(),P.dispose(),r.setPixelRatio(s)}o&&nd(r,e,c),Y();{let me=r.getSize(new Oe);j(me.x,me.y)}return{render:ne,setSize:j,setQuality:K,dispose:le,params:a,get quality(){return c.name},get preset(){return c},get active(){return p},get supported(){return i},info:()=>({quality:c.name,active:p,width:h,height:f,samples:d?d.samples:0,target:d?d.texture.type===Ti?"half":"byte":"canvas",bloom:!!m,fxaa:!!g})}}function nd(r,e,t){if(typeof t=="string"&&(t=Zn[t]),!t||!e)return;let n=r.shadowMap.type!==t.shadowType;r.shadowMap.type=t.shadowType,e.traverse(i=>{if(i.isLight&&i.castShadow&&i.shadow){let s=i.isPointLight?Math.min(t.shadowMapSize,1024):t.shadowMapSize;i.shadow.mapSize.x!==s&&(i.shadow.mapSize.set(s,s),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null))}if(i.isMesh&&i.userData&&i.userData.prop===!0&&(i.castShadow=!!t.propShadows),n&&i.material)for(let s of Array.isArray(i.material)?i.material:[i.material])s.needsUpdate=!0}),r.shadowMap.needsUpdate=!0}var nc;function q1(r){if(r&&r.getContext&&(r=r.getContext()),!r&&nc!==void 0)return nc;let e="",t=null;try{if(!r&&typeof document!="undefined"&&(t=document.createElement("canvas"),r=t.getContext("webgl2",{powerPreference:"high-performance"})||t.getContext("webgl")),r){let n=r.getExtension("WEBGL_debug_renderer_info");if(e=n&&r.getParameter(n.UNMASKED_RENDERER_WEBGL)||r.getParameter(r.RENDERER)||"",t){let i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}}}catch{e=""}return e=String(e),(t||nc===void 0)&&(nc=e),e}function j1(r){if(!r)return null;if(/swiftshader|llvmpipe|softpipe|software|microsoft basic/i.test(r))return"Low";let e=r.match(/Adreno\D{0,8}(\d{3})/i);if(e){let t=+e[1];return t>=730?"Ultra":t>=700||t>=630?"High":t>=615||t>=540?"Medium":"Low"}if(e=r.match(/Mali-?G(\d{2,3})/i),e){let t=e[1];if(t.length===3)return+t>=715?"Ultra":+t[0]>=7||+t>=610&&+t<615?"High":"Medium";let n=+t;return n>=76?"High":n>=71||n>=57?"Medium":"Low"}return/Immortalis|Xclipse\s*9[4-9]\d|Xclipse\s*\d{4}/i.test(r)?"Ultra":/Xclipse|Apple|PowerVR.*(BXM|DXT|CXT)/i.test(r)?"High":/Mali-T|Mali-4|PowerVR|Vivante|VideoCore|Tegra 3/i.test(r)?"Low":/NVIDIA|GeForce|Radeon|AMD|Intel.*(Iris|Arc|Xe)/i.test(r)?"High":/Intel/i.test(r)?"Medium":null}function ic(r){let e=typeof navigator!="undefined"?navigator:{},t=e.hardwareConcurrency||4,n=e.deviceMemory,i=typeof screen!="undefined"?screen:{width:1280,height:720},s=typeof window!="undefined"&&window.devicePixelRatio||1,a=i.width*i.height*s*s,o=j1(q1(r));return o||(o=t>=8&&(n==null||n>=6)?"High":t>=6&&(n==null||n>=4)?"Medium":"Low"),n!=null&&n<=2?o="Low":n!=null&&n<=3&&(o==="High"||o==="Ultra")?o="Medium":n!=null&&n<8&&o==="Ultra"&&(o="High"),t<=4&&(o==="High"||o==="Ultra")&&(o="Medium"),a>45e5&&o==="Medium"&&(o="Low"),o}var rd="sigilbound.gfx.v1";function X1(){try{let r=JSON.parse(localStorage.getItem(rd)||"null");return r&&typeof r=="object"?r:null}catch{return null}}function Y1(r){try{localStorage.setItem(rd,JSON.stringify(r))}catch{}}function ad(r={}){let{onChange:e,sampleSeconds:t=3,minFps:n=50,upFps:i=58,warmupWindows:s=1,upWindows:a=4}=r,o=X1(),c=o&&Zn[o.forced]?o.forced:null,l=o&&o.v===2&&Zn[o.tier]?o.tier:null,u=c||l||(Zn[r.initial]?r.initial:null)||ic(),h=!c,f=-1,d=0,g=0,m=s,p=0,x=0,_=[],b=!1,v=0,A=()=>Y1({v:2,tier:u,forced:c,t:Date.now()});function P(j){d=j,g=0,_=[]}function B(j,K){!Zn[j]||j===u||(u=j,m=s,p=0,A(),e&&e(j,Zn[j],K))}function S(){if(_.length<20)return!1;let j=_.slice().sort((ne,le)=>ne-le),K=j[Math.floor(j.length/2)];return j[Math.floor(j.length*.9)]<=K*1.25}function R(j){x=j;let K=S();if(!h)return;if(m>0){m--;return}let J=tc.indexOf(u);if(j<n){if(p=0,K)return;J<tc.length-1&&(b=!0,B(tc[J+1],"slow"))}else j>=i&&J>0&&!b&&v<1?++p>=a&&(v++,B(tc[J-1],"fast")):p=0}function Y(j){if(j==null&&(j=performance.now()),f<0){f=j,P(j);return}let K=j-f;if(f=j,K>1e3||K<=0){P(j);return}g++,_.push(K);let J=j-d;J>=t*1e3&&(R(g*1e3/J),P(j))}function ae(j){if(j==null||j==="auto"){let J=Zn[r.initial]?r.initial:ic();c=null,h=!0,m=s,p=0,b=!1,u=J,A(),e&&e(u,Zn[u],"auto");return}if(!Zn[j])return;let K=j!==u;c=j,h=!1,u=j,A(),K&&e&&e(j,Zn[j],"forced")}return{tick:Y,force:ae,get current(){return u},get preset(){return Zn[u]},get fps(){return x},get forced(){return c},get auto(){return h},set auto(j){h=!!j,h&&(c=null,A())}}}var od=[["#1f2b46","#c9805a","#2a2a22","#16141f","#ffc068"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22","#e8f4ff"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e","#ff9a4a"],["#1a2e2a","#7fa088","#23362a","#101c16","#d8ff8a"],["#28203a","#c8a870","#2c2640","#14101e","#ffcf6a"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0","#ffb0d8"],["#101a2e","#5a7ab0","#1a2440","#0c1220","#bcd8ff"],["#0e0a16","#3a2a5a","#180f26","#b080ff","#c890ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606","#ff7a30"]],cd=["#1a0a0a","#c0401a","#24100c","#100606","#ff6a20"],md=[{name:"dusk forest",grass:"#4f6a2a",grass2:"#6f7432",worn:"#8a6844",hill:"#41582a",rock:"#7d746a",bark:"#4e3726",leaves:["#3c6a26","#557a2a","#a8702a","#b8522a"],tuft:"#5f7a2c",cloth:"#7a2a22",sil:"#2e2c46",motes:"leaves",moteColor:"#e08a3a"},{name:"teal shore",grass:"#c2a87e",grass2:"#b39b72",worn:"#8c7a5e",hill:"#a8956a",rock:"#6a7078",bark:"#9a8a76",leaves:["#4a6a3a","#5a7a40"],tuft:"#8f9a52",water:"#1f5f6c",cloth:"#d8d0b8",sil:"#24404e",motes:"spray",moteColor:"#e8f6ff"},{name:"red badlands",grass:"#94503a",grass2:"#ad6844",worn:"#c09070",hill:"#8a4632",rock:"#a0553a",bark:"#5e4636",strata:["#8a4430","#b06a46","#6e3426","#c4885a"],tuft:"#857040",cloth:"#d0a040",sil:"#44201f",motes:"dust",moteColor:"#ffc890"},{name:"green marsh",grass:"#3a5630",grass2:"#4f6236",worn:"#6e5a40",hill:"#34502e",rock:"#58605a",bark:"#433a30",leaves:["#4a5a30"],tuft:"#7a8a44",water:"#22402f",cloth:"#5a4a30",sil:"#223c36",motes:"fireflies",moteColor:"#d8ff7a"},{name:"gold ruins",grass:"#58652f",grass2:"#76763c",worn:"#8e8474",hill:"#4c5a2c",rock:"#a49a88",bark:"#5a4636",leaves:["#4c682c","#667a32"],tuft:"#6a7a34",cloth:"#7a2a4a",sil:"#36304c",motes:"sparks",moteColor:"#ffd27a",crystals:!0},{name:"blossom forest",grass:"#557636",grass2:"#748646",worn:"#977660",hill:"#4a6a34",rock:"#8a8088",bark:"#4a3036",leaves:["#e89ac0","#f0b0cc","#d880aa","#f8cade"],tuft:"#6a8a3c",cloth:"#5a3a7a",sil:"#463858",motes:"petals",moteColor:"#ffc0dc"},{name:"moonlit shore",grass:"#a39c8c",grass2:"#958e80",worn:"#77705f",hill:"#8a8474",rock:"#5c6272",bark:"#8a8478",leaves:["#3a5a4a"],tuft:"#6a7a5a",water:"#1a3658",cloth:"#c8d0e0",sil:"#1a2642",motes:"spray",moteColor:"#cfe2ff"},{name:"amethyst badlands",grass:"#5e4e6c",grass2:"#6f5c80",worn:"#9584a6",hill:"#54466a",rock:"#5e4c70",bark:"#4a3c4e",strata:["#56466c","#6f5c86","#463a5a","#88729e"],tuft:"#6a5a7a",cloth:"#3a2a5a",sil:"#221a36",motes:"sparks",moteColor:"#c890ff",crystals:!0},{name:"glow marsh",grass:"#2c4846",grass2:"#385850",worn:"#5e586c",hill:"#284242",rock:"#4a5460",bark:"#38384a",leaves:["#2a4a4a"],tuft:"#4a7a6a",water:"#123040",cloth:"#2a3a5a",sil:"#122838",motes:"fireflies",moteColor:"#80e8ff",mushrooms:!0},{name:"burning ruins",grass:"#665834",grass2:"#7a6238",worn:"#8a7a6a",hill:"#5a4a30",rock:"#7a6e64",bark:"#4a3a2e",leaves:["#5a5a2a","#7a5a26"],tuft:"#7a6a3a",cloth:"#6a1a1a",sil:"#381410",motes:"embers",moteColor:"#ff8a3a",crystals:!0}],gd={name:"titan caldera",grass:"#3a3436",grass2:"#463e3e",worn:"#6a625e",hill:"#332e30",rock:"#2e2a2e",bark:"#2a2222",tuft:"#3a3030",cloth:"#5a1a10",sil:"#1e0c0a",motes:"embers",moteColor:"#ff7a2a"},ld=[{a:"grass",b:"soil",hills:4.5,sil:"trees",silFar:"peaks"},{a:"sand",b:"shingle",hills:2,sil:"islands",silFar:"peaks"},{a:"cracked",b:"gravel",hills:3,sil:"mesa",silFar:"mesa"},{a:"grass",b:"mud",hills:1.6,sil:"trees",silFar:"peaks"},{a:"grass",b:"flagstone",hills:3.5,sil:"ruins",silFar:"peaks"},{a:"basalt",b:"ash",hills:4,sil:"peaks",silFar:"volcano"}],ud={ultra:{tex:1024,grid:160,tufts:2600,scatter2:700,rocks:300,props:1,motes:260,aniso:16,casters:!0,ringSeg:300},high:{tex:512,grid:120,tufts:1500,scatter2:420,rocks:190,props:1,motes:160,aniso:4,casters:!0,ringSeg:220},medium:{tex:256,grid:90,tufts:850,scatter2:240,rocks:120,props:.7,motes:90,aniso:2,casters:!0,ringSeg:160},low:{tex:128,grid:64,tufts:380,scatter2:100,rocks:60,props:.45,motes:0,aniso:1,casters:!1,ringSeg:110}};function Mu(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $n(r,e,t){let n=Math.imul(r|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var wu=r=>r*r*(3-2*r),es=r=>r<0?0:r>1?1:r,kt=(r,e,t)=>wu(es((t-r)/(e-r))),Vr=(r,e,t)=>r+(e-r)*t;function Ni(r,e,t,n=0,i=0){let s=Math.floor(r),a=Math.floor(e),o=wu(r-s),c=wu(e-a),l=s,u=s+1,h=a,f=a+1;n&&(l=(l%n+n)%n,u=(u%n+n)%n),i&&(h=(h%i+i)%i,f=(f%i+i)%i);let d=$n(l,h,t),g=$n(u,h,t),m=$n(l,f,t),p=$n(u,f,t);return d+(g-d)*o+(m-d)*c+(d-g-m+p)*o*c}function Qn(r,e,t,n=4){let i=0,s=1,a=0,o=1;for(let c=0;c<n;c++)i+=Ni(r*o,e*o,t+c*17)*s,a+=s,s*=.5,o*=2;return i/a}function Xn(r,e,t,n,i,s=4){let a=0,o=1,c=0,l=1;for(let u=0;u<s;u++)a+=Ni(r*t*l,e*n*l,i+u*31,t*l,n*l)*o,c+=o,o*=.5,l*=2;return a/c}function Gr(r,e,t=.85){let n=new Float32Array(r*r*2);for(let i=0;i<r;i++)for(let s=0;s<r;s++)n[(i*r+s)*2]=s+.5+($n(s,i,e)-.5)*t,n[(i*r+s)*2+1]=i+.5+($n(s,i,e+9)-.5)*t;return(i,s,a)=>{let o=i*r,c=s*r,l=Math.floor(o),u=Math.floor(c),h=9,f=9,d=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let p=l+m,x=u+g,_=(p%r+r)%r,b=(x%r+r)%r,v=(b*r+_)*2,A=n[v]+(p-_),P=n[v+1]+(x-b),B=Math.hypot(A-o,P-c);B<h?(f=h,h=B,d=b*r+_):B<f&&(f=B)}a.f1=h,a.f2=f,a.id=d}}var hd={grass(r){return(e,t,n)=>{let i=Ni(e*160,t*48,r,160,48),s=Ni(e*64,t*200,r+3,64,200),a=Xn(e,t,6,6,r+5,3),o=Ni(e*256,t*256,r+7,256,256),c=i*.55+s*.45;n.a=.58+.28*c+.2*a-(o>.86?.16:0)+(o<.06?.12:0),n.h=c*.6+a*.4,n.r=.92,n.g=0}},soil(r){let e=Gr(22,r),t={};return(n,i,s)=>{e(n,i,t);let a=Xn(n,i,5,5,r+2,4),o=Ni(n*220,i*220,r+4,220,220),c=kt(.42,.18,t.f1)*($n(t.id,1,r)>.45?1:0);s.a=.66+.22*a+.1*o+c*(.12+.12*$n(t.id,2,r)),s.h=a*.5+c*.5+o*.1,s.r=.95-c*.15,s.g=0}},sand(r){return(e,t,n)=>{let i=Xn(e,t,3,3,r,3),s=Math.sin((t+i*.35+e*.15)*Math.PI*2*18)*.5+.5,a=Ni(e*256,t*256,r+2,256,256),o=Xn(e,t,4,4,r+6,3);n.a=.8+.1*s+.08*a+.06*o-(a>.93?.2:0),n.h=s*.7+a*.15+o*.15,n.r=.96,n.g=0}},shingle(r){let e=Gr(26,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=kt(0,.32,t.f2-t.f1),o=$n(t.id,3,r);s.a=.5+a*(.28+.25*o),s.h=a*(.6+.4*(1-t.f1)),s.r=.55+.3*(1-a),s.g=0}},cracked(r){let e=Gr(9,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=Xn(n,i,8,8,r+1,4),o=kt(.07,.015,t.f2-t.f1+(a-.5)*.03),c=$n(t.id,5,r);s.a=.72+.16*c+.12*a-o*.42,s.h=(.7+.3*a)*(1-o)+.05,s.r=.95,s.g=o}},gravel(r){let e=Gr(40,r,.95),t={};return(n,i,s)=>{e(n,i,t);let a=kt(0,.25,t.f2-t.f1),o=Xn(n,i,6,6,r+2,3);s.a=.68+a*.26*$n(t.id,4,r)+o*.12,s.h=a*.7+o*.3,s.r=.93,s.g=0}},mud(r){return(e,t,n)=>{let i=Xn(e,t,4,4,r,5),s=Xn(e,t,12,12,r+3,3),a=kt(.55,.66,i);n.a=.72+.16*s-a*.22,n.h=i*.8+s*.2-a*.3,n.r=Vr(.85,.28,a),n.g=0}},flagstone(r){let e=Gr(6,r,.75),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=Xn(n,i,10,10,r+2,4),c=Ni(n*180,i*180,r+4,180,180),l=kt(.09,.03,a),u=kt(.03,.2,a),h=$n(t.id,6,r);s.a=(.7+.2*h+.1*o-(c>.9?.1:0))*(1-l*.5),s.h=u*(.75+.25*o),s.r=.82+l*.1,s.g=0}},basalt(r){let e=Gr(10,r,.4),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=Xn(n,i,8,8,r+1,4),c=kt(.08,.02,a),l=$n(t.id,8,r);s.a=.66+.16*l+.14*o-c*.4,s.h=(1-c)*(.7+.3*o),s.r=.78+.15*o,s.g=c}},ash(r){return(e,t,n)=>{let i=Xn(e,t,6,6,r,4),s=Ni(e*240,t*240,r+2,240,240);n.a=.72+.18*i+.1*s,n.h=i*.7+s*.3,n.r=.97,n.g=0}}},Su=new Map;function K1(r,e,t,n){let i=r+"|"+e+"|"+t+"|"+n,s=Su.get(i);if(s)return s.refs++,s;let a=hd[r](11),o=hd[e](23),c={},l={},u=new Uint8Array(t*t*4),h=new Uint8Array(t*t*4),f=m=>Math.max(0,Math.min(255,Math.round(m*255)));for(let m=0;m<t;m++)for(let p=0;p<t;p++){let x=p/t,_=m/t,b=(m*t+p)*4;a(x,_,c),o(x,_,l),u[b]=f(c.a),u[b+1]=f(l.a),u[b+2]=f(Xn(x,_,3,3,77,3)),u[b+3]=f(c.g),h[b]=f(c.h),h[b+1]=f(c.r),h[b+2]=f(l.h),h[b+3]=f(l.r)}let d=(m,p)=>{let x=new Tr(m,t,t,Fn,fi);return x.wrapS=x.wrapT=Kn,x.magFilter=Cn,x.minFilter=Si,x.generateMipmaps=!0,x.anisotropy=n,x.name=p,x.needsUpdate=!0,x},g={map:d(u,"arena-ground-map"),data:d(h,"arena-ground-data"),refs:1,key:i,bytes:t*t*4*2*1.333};return Su.set(i,g),g}function J1(r){--r.refs>0||(r.map.dispose(),r.data.dispose(),Su.delete(r.key))}var tv=new gt,fd=new yn,dd=new _r,Z1=new F,_u=new F;function Q1(r,e=[0,0,0],t=1){return dd.set(e[0],e[1],e[2]),fd.setFromEuler(dd),typeof t=="number"?_u.set(t,t,t):_u.set(t[0],t[1],t[2]),new gt().compose(Z1.set(r[0],r[1],r[2]),fd,_u)}function Va(r,e,t,n=1.6){let i=r.attributes.position;for(let s=0;s<i.count;s++){let a=i.getX(s),o=i.getY(s),c=i.getZ(s),l=Qn(a*n+13.1,c*n+o*n*.7+7.7,t,2)-.5,u=1+l*e*2;i.setXYZ(s,a*u,o*(1+l*e),c*u)}return r.computeVertexNormals(),r}function $1(r){let e=0,t=0;for(let d of r)e+=d.g.attributes.position.count,t+=d.g.index?d.g.index.count:d.g.attributes.position.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2),a=new Float32Array(e*3),o=e>65535?new Uint32Array(t):new Uint16Array(t),c=new Pn,l=new F,u=0,h=0;for(let{g:d,m:g,c:m}of r){let p=d.attributes.position,x=d.attributes.normal,_=d.attributes.uv,b=d.attributes.color;c.getNormalMatrix(g);for(let v=0;v<p.count;v++){l.fromBufferAttribute(p,v).applyMatrix4(g),n.set([l.x,l.y,l.z],(u+v)*3),x&&(l.fromBufferAttribute(x,v).applyMatrix3(c).normalize(),i.set([l.x,l.y,l.z],(u+v)*3)),_&&(s[(u+v)*2]=_.getX(v),s[(u+v)*2+1]=_.getY(v));let A=b?b.getX(v):1;a[(u+v)*3]=m.r*A,a[(u+v)*3+1]=m.g*(b?b.getY(v):1),a[(u+v)*3+2]=m.b*(b?b.getZ(v):1)}if(d.index)for(let v=0;v<d.index.count;v++)o[h++]=d.index.getX(v)+u;else for(let v=0;v<p.count;v++)o[h++]=v+u;u+=p.count}let f=new Ct;return f.setAttribute("position",new pt(n,3)),f.setAttribute("normal",new pt(i,3)),f.setAttribute("uv",new pt(s,2)),f.setAttribute("color",new pt(a,3)),f.setIndex(new pt(o,1)),f.computeBoundingSphere(),f.computeBoundingBox(),f}function Ha(r,e,t,n,i,s=.035){let a=Mu(i),o=[],c=[],l=[],u=[];for(let f=0;f<r;f++){let d=f/r*Math.PI*2+a()*.8,g=t*(.2+a()*.8),m=e*(.6+a()*.5),p=s*(.7+a()*.6),x=Math.cos(d)*g*.3,_=Math.sin(d)*g*.3,b=Math.cos(d)*(g+n*m),v=Math.sin(d)*(g+n*m),A=-Math.sin(d)*p,P=Math.cos(d)*p,B=(x+b)*.5,S=(_+v)*.5,R=[[x-A,0,_-P],[x+A,0,_+P],[B+A*.6,m*.55,S+P*.6],[B-A*.6,m*.55,S-P*.6],[b,m,v]],Y=[[0,1,2],[0,2,3],[3,2,4]];for(let ae of Y)for(let j of ae){o.push(...R[j]),c.push(Math.cos(d)*.35,.9,Math.sin(d)*.35);let K=R[j][1]/m;l.push(.45+.65*K,.5+.6*K,.45+.55*K),u.push(0,K)}}let h=new Ct;return h.setAttribute("position",new lt(o,3)),h.setAttribute("normal",new lt(c,3)),h.setAttribute("color",new lt(l,3)),h.setAttribute("uv",new lt(u,2)),h}var ey=wt.bumpmap_pars_fragment.replace("uniform float bumpScale;",`uniform float bumpScale;
	float sbH( vec2 uv ) { vec4 t = texture2D( bumpMap, uv ); return mix( t.x, t.z, vSb.x ); }`).replace(/texture2D\( bumpMap, (vUv[^)]*)\)\.x/g,"sbH( $1 )");function ty(r,e,t){let n=new Ht({color:16777215,vertexColors:!0,roughness:1,metalness:0,map:r.map,roughnessMap:r.data,bumpMap:r.data,bumpScale:.035});return n.onBeforeCompile=i=>{i.uniforms.uGlow={value:t},i.uniforms.uTime=e.uTime,i.vertexShader=`attribute vec2 aSb;
varying vec2 vSb;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSb = aSb;`),i.fragmentShader=`varying vec2 vSb;
uniform vec3 uGlow;
uniform float uTime;
`+i.fragmentShader.replace("#include <bumpmap_pars_fragment>",ey).replace("#include <map_fragment>",`
        vec4 sbT = texture2D( map, vUv );
        float sbM = texture2D( map, vUv * 0.0917 + vec2( 0.31, 0.17 ) ).b;
        diffuseColor.rgb *= mix( sbT.r, sbT.g, vSb.x ) * ( 0.78 + 0.44 * sbM );`).replace("#include <roughnessmap_fragment>",`
        float roughnessFactor = roughness;
        vec4 texelRoughness = texture2D( roughnessMap, vUv );
        roughnessFactor *= mix( texelRoughness.g, texelRoughness.a, vSb.x );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uGlow * sbT.a * vSb.y * ( 0.75 + 0.25 * sin( uTime * 1.7 + vUv.x * 3.0 + vUv.y * 2.0 ) );`)},n.customProgramCacheKey=()=>"sb-ground",n}var ny=wt.normal_fragment_begin.replace("normal = normal * faceDirection;","");function Wa(r,e,t,n){return r.onBeforeCompile=i=>{i.uniforms.uTime=e.uTime,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+n),r.side===hn&&t!=="cloth"&&(i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",ny))},r.customProgramCacheKey=()=>"sb-wind-"+t,r}var iy=`
uniform float uTime, uScale, uSway, uFlicker, uFall;
uniform vec3 uDrift, uBox, uCenter;
attribute vec4 aSeed;
attribute vec3 aColor;
attribute float aSize;
varying vec3 vColor;
varying float vAlpha;
varying float vSpin;
void main() {
  vec3 p = position;
  float t = uTime + aSeed.x * 100.0;
  vAlpha = 1.0;
  if ( uBox.x > 0.0 ) {
    p += uDrift * uTime * ( 0.6 + 0.8 * aSeed.y );
    p = uCenter + mod( p - uCenter + uBox, 2.0 * uBox ) - uBox;
    p.x += sin( t * 1.3 + aSeed.z * 6.28 ) * uSway;
    p.z += cos( t * 0.9 + aSeed.w * 6.28 ) * uSway;
    p.y += sin( t * 0.7 ) * uSway * 0.4;
    vec3 q = abs( p - uCenter ) / uBox;
    vAlpha = smoothstep( 1.0, 0.7, max( q.x, max( q.y, q.z ) ) );
  }
  vAlpha *= 1.0 - uFlicker + uFlicker * ( 0.5 + 0.5 * sin( t * ( 2.0 + aSeed.y * 4.0 ) ) );
  vSpin = abs( sin( t * ( 1.5 + aSeed.z * 2.0 ) ) ) * uFall;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4( p, 1.0 );
  gl_PointSize = aSize * uScale / max( 0.5, -mv.z );
  gl_Position = projectionMatrix * mv;
}`,sy=`
uniform float uOpacity, uHard;
varying vec3 vColor;
varying float vAlpha;
varying float vSpin;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  c.x /= max( 0.25, 1.0 - vSpin * 0.75 );
  float d = length( c ) * 2.0;
  float a = mix( pow( clamp( 1.0 - d, 0.0, 1.0 ), 1.6 ), smoothstep( 1.0, 0.75, d ), uHard );
  if ( a < 0.01 ) discard;
  gl_FragColor = vec4( vColor, a * vAlpha * uOpacity );
  #include <encodings_fragment>
}`;function pd(r,e){var t;return new gn({uniforms:{uTime:r.uTime,uScale:r.uScale,uSway:{value:e.sway||0},uFlicker:{value:e.flicker||0},uFall:{value:e.fall||0},uDrift:{value:new F().fromArray(e.drift||[0,0,0])},uBox:{value:new F().fromArray(e.box||[0,0,0])},uCenter:{value:new F().fromArray(e.center||[0,0,0])},uOpacity:{value:(t=e.opacity)!=null?t:1},uHard:{value:e.hard||0}},vertexShader:iy,fragmentShader:sy,transparent:!0,depthWrite:!1,blending:e.additive===!1?us:Ii})}function bd(r,e={}){let t=((e.chapter|0)%10+10)%10,n=!!e.titan,i=n?5:t%5,s=ld[i],a=ud[e.quality]||ud.high,o=(e.palette&&e.palette.length>=4?e.palette:n?cd:od[t]).slice();o[4]||(o[4]=(n?cd:od[t])[4]);let c=n?gd:md[t],l=y=>new De(y),u=.42,h=.55,f=(y,M)=>new De(y).multiplyScalar(M),d={skyTop:l(o[0]),horizon:l(o[1]),accent:l(o[4]),grass:f(c.grass,u),grass2:f(c.grass2,u),worn:f(c.worn,u*.9),hill:f(c.hill,u),rock:f(c.rock,h),bark:f(c.bark,h),tuft:f(c.tuft,u*1.1),cloth:f(c.cloth,h),sil:l(c.sil)};d.fog=d.horizon.clone().lerp(d.skyTop,.45).multiplyScalar(.85);let g=n?1337:101+t*7,m=Mu(g),p=(y,M)=>y+(M-y)*m(),x=new Kt;x.name="arena",r.add(x);let _={geos:new Set,mats:new Set,texs:new Set},b=y=>y&&(y.isBufferGeometry?_.geos.add(y):y.isMaterial?y.userData.shared||_.mats.add(y):y.isTexture&&_.texs.add(y),y),v=0,A={uTime:{value:0},uScale:{value:800}},P=[],B=()=>{if(!e.renderer)return 1688;let y=new Oe;return e.renderer.getDrawingBufferSize(y),y.y};A.uScale.value=B()*.5*1.07;let S=s===ld[1]?-.12:i===3?-.1:null,R=n?-.25:null,Y=[[.6,14],[.4,5],[0,-.5],[-.8,-6.5],[-2.6,-13],[-1.2,-21],[2.6,-30],[4.5,-42]],ae=(y,M)=>{let E=1e9;for(let L=0;L<Y.length-1;L++){let[$,V]=Y[L],[Z,ee]=Y[L+1],ue=Z-$,ye=ee-V,Ae=es(((y-$)*ue+(M-V)*ye)/(ue*ue+ye*ye)),Ze=Math.hypot(y-$-ue*Ae,M-V-ye*Ae);Ze<E&&(E=Ze)}return E},j=(y,M)=>Math.hypot(y/4.8,(M+.6)/4.5),K=(y,M)=>Math.hypot(y/6.8,(M+1.2)/6.8),J=(y,M)=>{let E=kt(1,2.3,K(y,M)),L=(Qn(y*.07,M*.07,g+1,3)-.5)*1.4*E,$=kt(-9,-38,M),V=kt(9,26,Math.abs(y));if(L+=s.hills*Math.max($,V*.85)*(.35+.9*Qn(y*.035+3,M*.035,g+2,3))*E,i===1){let ee=-11-y*.3+(Qn(y*.08,M*.08,g+3,3)-.5)*6,ue=kt(ee+1.5,ee-2.5,M)*E;L=Vr(L,-1.6,ue)}else if(i===3){let ee=Qn(y*.09+5,M*.09,g+4,3),ue=kt(.5,.6,ee)*kt(1.05,1.5,K(y,M));L=Vr(L,-.9,ue)}else if(n){let ee=-14+Math.sin(y*.18)*2.2+(Qn(y*.1,3,g+5,2)-.5)*2,ue=kt(2.4,1.2,Math.abs(M-ee))*kt(.9,1.4,K(y,M)),ye=kt(.62,.7,Qn(y*.08+9,M*.08,g+6,3))*kt(1.3,1.8,K(y,M));L=Vr(L,-1.4,Math.max(ue,ye))}let Z=ae(y,M);return L=Vr(L,Math.min(L,.15+L*.2),kt(2.5,.8,Z)*E),L},ne=(y,M)=>{let E=Qn(y*.6,M*.6,g+7,3),L=kt(1.08,.78,j(y,M)+(E-.5)*.35),$=.85+(Qn(y*.2,M*.2,g+8,2)-.5)*.6,V=kt($,$*.45,ae(y,M)+(E-.5)*.4),Z=Math.max(L*(.75+.25*E),V*.9);return Z=Math.max(Z,kt(.72,.8,Qn(y*.15+2,M*.15,g+9,3))*.8),es(Z)},le=a.grid,me=95,q=new Float32Array((le+1)*(le+1)),ie=y=>me*(.22*y+.78*y*y*y),Q=y=>{let M=-1,E=1;for(let L=0;L<24;L++){let $=(M+E)/2;ie($)<y?M=$:E=$}return(M+E)/2},Ce=(y,M)=>{let E=(Q(y)+1)/2*le,L=(Q(M+6)+1)/2*le,$=Math.min(le-1,Math.max(0,Math.floor(E))),V=Math.min(le-1,Math.max(0,Math.floor(L))),Z=es(E-$),ee=es(L-V),ue=le+1,ye=q[V*ue+$],Ae=q[V*ue+$+1],Ze=q[(V+1)*ue+$],Tt=q[(V+1)*ue+$+1];return Z+ee<=1?ye+(Ae-ye)*Z+(Ze-ye)*ee:Tt+(Ze-Tt)*(1-Z)+(Ae-Tt)*(1-ee)};{let y=le,M=(y+1)*(y+1),E=new Float32Array(M*3),L=new Float32Array(M*2),$=new Float32Array(M*3),V=new Float32Array(M*2),Z=4.2,ee=new De;for(let vt=0;vt<=y;vt++)for(let qe=0;qe<=y;qe++){let Ft=ie(qe/y*2-1),dt=ie(vt/y*2-1)-6,Ke=vt*(y+1)+qe,At=J(Ft,dt),Jt=ne(Ft,dt);E[Ke*3]=Ft,E[Ke*3+1]=At,E[Ke*3+2]=dt,q[Ke]=At,L[Ke*2]=Ft/Z,L[Ke*2+1]=-dt/Z;let pn=Qn(Ft*.12,dt*.12,g+10,3),_t=Qn(Ft*.5,dt*.5,g+11,2);ee.copy(d.grass).lerp(d.grass2,kt(.35,.7,pn)),ee.lerp(d.hill,es(At/Math.max(1,s.hills))*.8),ee.multiplyScalar(.9+.2*_t),ee.lerp(d.worn,Jt);let Zt=0;if(S!=null){let qt=kt(S+.5,S+.05,At);ee.multiplyScalar(1-qt*.4),i===1&&ee.lerp(f("#e8f0f0",.55),kt(.09,0,Math.abs(At-S-.04))*.8)}n&&(Zt=kt(R+.9,R+.15,At)+kt(.9,.55,j(Ft,dt))*.3+.06,ee.lerp(new De("#2a1210"),kt(R+.6,R,At)*.6)),$[Ke*3]=ee.r,$[Ke*3+1]=ee.g,$[Ke*3+2]=ee.b,V[Ke*2]=Jt,V[Ke*2+1]=Zt}let ue=new Uint32Array(y*y*6),ye=0;for(let vt=0;vt<y;vt++)for(let qe=0;qe<y;qe++){let Ft=vt*(y+1)+qe,dt=Ft+1,Ke=Ft+y+1,At=Ke+1;ue[ye++]=Ft,ue[ye++]=Ke,ue[ye++]=dt,ue[ye++]=dt,ue[ye++]=Ke,ue[ye++]=At}let Ae=b(new Ct);Ae.setAttribute("position",new pt(E,3)),Ae.setAttribute("uv",new pt(L,2)),Ae.setAttribute("color",new pt($,3)),Ae.setAttribute("aSb",new pt(V,2)),Ae.setIndex(new pt(ue,1)),Ae.computeVertexNormals(),Ae.computeBoundingSphere();let Ze=Math.min(a.aniso,e.renderer?e.renderer.capabilities.getMaxAnisotropy():a.aniso);var se=K1(s.a,s.b,a.tex,Ze);v+=se.bytes;let Tt=n?new De("#ff5a14").multiplyScalar(2.2):new De(0,0,0),Wt=b(ty(se,A,Tt)),Nt=new St(Ae,Wt);Nt.receiveShadow=!0,Nt.name="arena-ground",x.add(Nt)}if(S!=null||n){let M=new Uint8Array(65536),E=(ee,ue)=>Xn(ee/128,ue/128,6,6,g+40,3)*.7+Ni(ee/128*24,ue/128*24,g+41,24,24)*.3;for(let ee=0;ee<128;ee++)for(let ue=0;ue<128;ue++){let ye=(ee*128+ue)*4;if(n){let Ae=Xn(ue/128,ee/128,4,4,g+42,4),Ze=Xn(ue/128,ee/128,9,9,g+43,3),Tt=kt(.1,0,Math.abs(Ae-.5))*.8+Ze*.35;M[ye]=255*es(.55+Tt*.45),M[ye+1]=255*es(.18+Tt*.55),M[ye+2]=255*es(.05+Tt*.2),M[ye+3]=255}else{let Ae=E(ue+1,ee)-E(ue-1,ee),Ze=E(ue,ee+1)-E(ue,ee-1),Tt=-Ae*6,Wt=-Ze*6,Nt=1,vt=Math.hypot(Tt,Wt,Nt);M[ye]=(Tt/vt*.5+.5)*255,M[ye+1]=(Wt/vt*.5+.5)*255,M[ye+2]=(Nt/vt*.5+.5)*255,M[ye+3]=255}}let L=b(new Tr(M,128,128,Fn,fi));L.wrapS=L.wrapT=Kn,L.magFilter=Cn,L.minFilter=Si,L.generateMipmaps=!0,L.repeat.set(18,18),L.needsUpdate=!0,n&&(L.encoding=yt),v+=128*128*4*1.33;let $;if(n)$=b(new sn({map:L,color:new De(1.5,1.05,.85),toneMapped:!1})),P.push(ee=>{L.offset.set(ee*.004,ee*.007)});else{let ee=f(c.water,.5);$=b(new Ht({color:ee,roughness:.18,metalness:.2,normalMap:L,normalScale:new Oe(.3,.3),envMapIntensity:.55})),P.push(ue=>{L.offset.set(ue*.006,ue*.011)})}let V=b(new di(190,190,1,1));V.rotateX(-Math.PI/2);let Z=new St(V,$);Z.position.set(0,n?R:S,-6),Z.receiveShadow=!n,Z.name=n?"arena-lava":"arena-water",x.add(Z)}{let y=a.tex>=512||a.tex>=256?512:256,M=n||c.crystals||i===3&&t===8,E=()=>{let Ke=document.createElement("canvas");return Ke.width=Ke.height=y,Ke},L=E(),$=L.getContext("2d"),V=M?E():null,Z=V&&V.getContext("2d"),ee=Mu(g+99),ue=y/2,ye=y/2,Ae=y*.43,Ze=Ke=>{Ke($,1),Z&&Ke(Z,0)};$.fillStyle="#000",$.fillRect(0,0,y,y),Z&&(Z.fillStyle="#000",Z.fillRect(0,0,y,y)),$.lineCap="round",$.lineJoin="round",Z&&(Z.lineCap="round",Z.lineJoin="round"),Ze((Ke,At)=>{Ke.strokeStyle=At?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.9)",Ke.lineWidth=y*.011,Ke.beginPath(),Ke.arc(ue,ye,Ae,0,Math.PI*2),Ke.stroke(),Ke.lineWidth=y*.006,Ke.beginPath(),Ke.arc(ue,ye,Ae*.86,0,Math.PI*2),Ke.stroke(),At&&(Ke.lineWidth=y*.004,Ke.beginPath(),Ke.arc(ue,ye,Ae*.42,0,Math.PI*2),Ke.stroke())});let Tt=[];for(let Ke=0;Ke<6;Ke++){let At=[],Jt=2+Math.floor(ee()*3);for(let pn=0;pn<Jt;pn++)At.push([ee()*2-1,ee()*2-1,ee()*2-1,ee()*2-1,ee()<.3]);Tt.push(At)}let Wt=18;for(let Ke=0;Ke<Wt;Ke++){let At=Ke/Wt*Math.PI*2,Jt=ue+Math.cos(At)*Ae*.93,pn=ye+Math.sin(At)*Ae*.93,_t=y*.018,Zt=Tt[Ke%Tt.length];Ze((qt,cn)=>{qt.save(),qt.translate(Jt,pn),qt.rotate(At+Math.PI/2),qt.strokeStyle=cn?"rgba(255,255,255,0.6)":"rgba(255,255,255,1)",qt.lineWidth=y*.0045;for(let[Yn,Gn,xi,Cs,yi]of Zt)qt.beginPath(),yi?qt.arc(Yn*_t*.5,Gn*_t*.5,_t*.5,0,Math.PI*(1+Math.abs(xi))):(qt.moveTo(Yn*_t,Gn*_t),qt.lineTo(xi*_t,Cs*_t)),qt.stroke();qt.restore()})}let Nt=(Ke,At,Jt,pn,_t,Zt)=>{let qt=Ke,cn=At,Yn=6+Math.floor(ee()*6);for(let Gn=0;Gn<Yn;Gn++){Jt+=(ee()-.5)*.9;let xi=qt+Math.cos(Jt)*pn/Yn,Cs=cn+Math.sin(Jt)*pn/Yn;Ze((yi,oc)=>{yi.strokeStyle=oc?"rgba(255,255,255,0.75)":"rgba(255,255,255,0.8)",yi.lineWidth=Math.max(1,_t*(1-Gn/Yn)),yi.beginPath(),yi.moveTo(qt,cn),yi.lineTo(xi,Cs),yi.stroke()}),Zt<2&&ee()<.18&&Nt(xi,Cs,Jt+(ee()<.5?.7:-.7),pn*.45,_t*.6,Zt+1),qt=xi,cn=Cs}};for(let Ke=0;Ke<9;Ke++){let At=ee()*Math.PI*2,Jt=ee()<.6;Nt(ue+Math.cos(At)*Ae,ye+Math.sin(At)*Ae,At+(Jt?0:Math.PI)+(ee()-.5)*.6,y*(.08+ee()*.12),y*.008,0)}{let Ke=$.createRadialGradient(ue,ye,Ae*.7,ue,ye,Ae*1.02);Ke.addColorStop(0,"rgba(255,255,255,0)"),Ke.addColorStop(.88,"rgba(255,255,255,0.08)"),Ke.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=Ke,$.fillRect(0,0,y,y)}let vt=b(new pi(L));vt.anisotropy=Math.min(4,a.aniso),v+=y*y*4*1.33;let qe=b(new Ht({color:n?new De("#120806"):d.worn.clone().multiplyScalar(.28),roughness:.95,metalness:0,alphaMap:vt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));if(V){let Ke=b(new pi(V));Ke.encoding=yt,v+=y*y*4*1.33,qe.emissiveMap=Ke,qe.emissive=d.accent.clone(),qe.emissiveIntensity=n?3:2.2,P.push(At=>{qe.emissiveIntensity=(n?2.8:2)+Math.sin(At*1.6)*.4})}let Ft=b(new di(1,1));Ft.rotateX(-Math.PI/2);let dt=new St(Ft,qe);dt.scale.set(10.4,1,9.8),dt.position.set(0,.02,-.6),dt.receiveShadow=!0,dt.renderOrder=1,dt.name="arena-decal",x.add(dt)}let be=Ga("stone",{size:a.tex>=512?256:128,repeat:1}),we=Ga("wood",{size:a.tex>=512?256:128}),Fe=Ga("cloth",{size:128}),fe={stone:b(new Ht({color:16777215,vertexColors:!0,map:be.map,roughnessMap:be.roughnessMap,bumpMap:be.bumpMap,bumpScale:.03,roughness:1,flatShading:!0,envMapIntensity:.3})),bark:b(new Ht({color:16777215,vertexColors:!0,map:we.map,roughnessMap:we.roughnessMap,bumpMap:we.bumpMap,bumpScale:.02,roughness:1,envMapIntensity:.3})),leaf:b(Wa(new Ht({color:16777215,vertexColors:!0,roughness:.85,flatShading:!0,envMapIntensity:.4}),A,"leaf","transformed.x += sin( uTime * 1.3 + position.x * 0.35 + position.z * 0.2 ) * 0.04 * max( position.y - 1.5, 0.0 );")),cloth:b(Wa(new Ht({color:16777215,vertexColors:!0,map:Fe.map,roughness:.95,side:hn,envMapIntensity:.3}),A,"cloth","transformed.z += sin( uTime * 2.6 - uv.y * 5.0 + position.x * 0.7 ) * 0.09 * ( 1.0 - uv.y );")),metal:b(new Ht({color:16777215,vertexColors:!0,roughness:.45,metalness:.8,envMapIntensity:1})),crystal:b(new Ht({color:d.accent.clone().multiplyScalar(.25),emissive:d.accent,emissiveIntensity:2.5,roughness:.2,metalness:.1,flatShading:!0,envMapIntensity:1.2})),glow:b(new sn({vertexColors:!0,color:new De(2.2,2.2,2.2),toneMapped:!1}))};(c.crystals||c.mushrooms)&&P.push(y=>{fe.crystal.emissiveIntensity=2.5+Math.sin(y*1.9)*.4});let ct={},st=new Set,Je=y=>(st.add(y),y),We=y=>y?"s":0,tt=(y,M,E,L,$,V,Z)=>{let ee=y+"|"+(Z==="s"?"s":Z?1:0);(ct[ee]||(ct[ee]=[])).push({g:M,m:Q1(E,L,$),c:V.isColor?V:l(V)})},Ve=(y,M=.12)=>y.clone().multiplyScalar(1-M+m()*M*2),Ge={cyl6:Je(new In(.5,.5,1,6,1)),cyl8:Je(new In(.5,.5,1,8,1)),trunk:Je(new In(.32,.5,1,7,2)),cone:Je(new Cr(.5,1,7,1)),blob:Je(Va(new $i(1,1),.18,g+3,1.2)),blob2:Je(Va(new $i(1,1),.22,g+5,1.6)),boulder:Je(Va(new $i(1,1),.25,g+7,1.1)),box:Je(new Ai(1,1,1)),col:Je(new In(.3,.34,1,10,1)),oct:Je(new ms(.5,0)),hex:Je(new In(.5,.5,1,6,1)),rockCyl:Je(Va(new In(.5,.56,1,9,3),.12,g+9,2.2)),banner:Je(new di(.7,1.5,3,6)),bowl:Je(new In(.42,.22,.28,10,1,!0)),cap:Je(new Di(.5,8,4,0,Math.PI*2,0,Math.PI/2))};Ge.banner.translate(0,-.75,0);let dn=[],rn=(y,M,E,L,$)=>dn.push({p:[y,M,E],c:L.isColor?L:l(L),s:$}),an=(y,M,E=0)=>!(Math.abs(y)<4.5+E&&M>-7-E&&M<4.5+E)&&ae(y,M)>1.3+E*.5,bn=[],ft=(y,M,E,L,$,V=0,Z=40)=>{for(let ee=0;ee<Z;ee++){let ue=p(y,M),ye=p(E,L);if(an(ue,ye,V)&&!(S!=null&&Ce(ue,ye)<S+.05&&i!==1)&&!(R!=null&&Ce(ue,ye)<0)&&!bn.some(Ae=>Math.hypot(Ae[0]-ue,Ae[1]-ye)<Math.max($,Ae[2])))return bn.push([ue,ye,$]),[ue,Ce(ue,ye),ye]}return null},ut=y=>Math.max(1,Math.round(y*a.props)),Nn=(y,M,E,L,$=1)=>{for(let V of[-1,1])for(let Z=0;Z<M;Z++){let ee=ft(V*4.8,V*7.5,-8.5,-1,2.4*$);ee&&y(ee,!0,1)}for(let V=0;V<E;V++){let Z=ft(-10,10,-15,-8.2,2.6*$);Z&&y(Z,Z[2]>-13,.95)}for(let V=0;V<ut(L);V++){let Z=ft(-28,28,-42,-14,3*$);Z&&y(Z,!1,1.2)}},Ot=([y,M,E],L,$=1)=>{let V=p(.85,1.35)*$,Z=[p(-.08,.08),0,p(-.08,.08)];tt("bark",Ge.trunk,[y,M+1.3*V,E],Z,[.42*V,2.6*V,.42*V],Ve(d.bark),L);let ee=c.leaves||["#4a6a30"],ue=3+Math.floor(m()*2);for(let ye=0;ye<ue;ye++){let Ae=m()*6.28,Ze=ye===0?0:p(.6,1)*V;tt("leaf",ye%2?Ge.blob2:Ge.blob,[y+Math.cos(Ae)*Ze,M+(ye===0?3.3:p(2.5,3.2))*V,E+Math.sin(Ae)*Ze*.8],[m()*3,m()*3,0],[p(1,1.35)*V,p(.8,1)*V,p(1,1.35)*V],Ve(f(ee[Math.floor(m()*ee.length)],h),.1),L)}},U=([y,M,E],L,$=1)=>{let V=p(.9,1.5)*$;tt("bark",Ge.trunk,[y,M+.8*V,E],[0,0,0],[.3*V,1.6*V,.3*V],Ve(d.bark),L);let Z=Ve(f((c.leaves||["#3a5a2a"])[0],h*.75),.1);for(let ee=0;ee<3;ee++)tt("leaf",Ge.cone,[y,M+(1.5+ee*1.05)*V,E],[0,m()*3,0],[(2.2-ee*.55)*V,1.8*V,(2.2-ee*.55)*V],Z,L)},I=([y,M,E],L,$=1)=>{let V=p(.9,1.4)*$,Z=Ve(d.bark.clone().multiplyScalar(.85));tt("bark",Ge.trunk,[y,M+1.2*V,E],[p(-.12,.12),0,p(-.12,.12)],[.36*V,2.4*V,.36*V],Z,L);for(let ee=0;ee<4;ee++){let ue=m()*6.28,ye=p(1.4,2.3)*V,Ae=p(.6,1.1);tt("bark",Ge.trunk,[y+Math.cos(ue)*.35*V,M+ye+.35*V,E+Math.sin(ue)*.35*V],[Math.sin(ue)*Ae,0,-Math.cos(ue)*Ae],[.12*V,p(1,1.6)*V,.12*V],Z,L)}},xe=([y,M,E],L,$=1,V=d.rock)=>{let Z=p(.6,1.3)*$;tt("stone",Ge.boulder,[y,M+.25*Z,E],[m()*3,m()*3,m()*3],[Z*p(.9,1.4),Z*p(.6,.9),Z*p(.9,1.3)],Ve(V),We(L))},Ne=([y,M,E],L,$=1,V=!0)=>{let Z=p(.8,1.3)*$,ee=c.strata||[c.rock],ue=M,ye=p(1,1.6)*Z,Ae=3+Math.floor(m()*3);for(let Ze=0;Ze<Ae;Ze++){let Tt=p(.9,1.6)*Z;tt("stone",Ge.rockCyl,[y+p(-.1,.1),ue+Tt/2,E+p(-.1,.1)],[0,m()*6,0],[ye*2,Tt,ye*2],Ve(f(ee[Ze%ee.length],h),.08),L),ue+=Tt*.96,ye*=p(.72,1.02)}V&&tt("stone",Ge.boulder,[y,ue+.2*Z,E],[m(),m()*3,m()],[ye*1.5,.5*Z,ye*1.4],Ve(f(ee[ee.length-1],h),.05),L)},Ue=([y,M,E],L,$=1)=>{let V=p(1,1.6)*$,Z=c.strata||[c.rock],ee=M-.5,ue=p(3.5,6)*V;for(let ye=0;ye<3;ye++){let Ae=p(1.6,3.2)*V;tt("stone",Ge.rockCyl,[y,ee+Ae/2,E],[0,m()*6,0],[ue*2,Ae,ue*1.6],Ve(f(Z[(ye+1)%Z.length],h),.06),L),ee+=Ae*.97,ue*=p(.8,.95)}},Xe=([y,M,E],L,$=1,V=m()<.55)=>{let Z=p(.9,1.2)*$,ee=V?p(1.2,3.2)*Z:4.4*Z,ue=Ve(d.rock,.06);tt("stone",Ge.box,[y,M+.2*Z,E],[0,0,0],[1*Z,.4*Z,1*Z],ue,L),tt("stone",Ge.col,[y,M+.4*Z+ee/2,E],[V?p(-.06,.06):0,m(),V?p(-.06,.06):0],[1.25*Z,ee,1.25*Z],ue,L),V?tt("stone",Ge.col,[y+p(.8,1.6)*(m()<.5?-1:1),M+.35*Z,E+p(-.8,.8)],[0,m()*6,Math.PI/2],[1.2*Z,p(.7,1.3)*Z,1.2*Z],Ve(d.rock,.06),!1):tt("stone",Ge.box,[y,M+.4*Z+ee+.18*Z,E],[0,0,0],[1.05*Z,.36*Z,1.05*Z],ue,L)},bt=([y,M,E],L,$=1)=>{let V=$,Z=Ve(d.rock,.05),ee=p(-.25,.25),ue=Math.cos(ee)*1.7*V,ye=-Math.sin(ee)*1.7*V;for(let Ae of[-1,1])tt("stone",Ge.box,[y+ue*Ae,M+2*V,E+ye*Ae],[0,ee,0],[.9*V,4*V,.9*V],Z,L);tt("stone",Ge.box,[y,M+4.3*V,E],[0,ee,p(-.04,.04)],[4.5*V,.7*V,1*V],Z,L)},Ye=([y,M,E],L,$=1)=>{let V=$,Z=d.rock,ee=p(-.4,.4),ue=4+Math.floor(m()*3);for(let ye=0;ye<ue;ye++){let Ae=(ye-ue/2)*.95*V,Ze=p(.8,2.6)*V*(ye===0||ye===ue-1?.6:1);tt("stone",Ge.box,[y+Math.cos(ee)*Ae,M+Ze/2,E-Math.sin(ee)*Ae],[0,ee,0],[.92*V,Ze,.7*V],Ve(Z,.08),L)}},Se=([y,M,E],L,$=1)=>{let V=p(.7,1.2)*$,Z=3+Math.floor(m()*4);tt("stone",Ge.boulder,[y,M+.1,E],[m(),m()*3,m()],[.9*V,.4*V,.9*V],Ve(d.rock.clone().multiplyScalar(.7)),We(L));for(let ee=0;ee<Z;ee++){let ue=m()*6.28,ye=ee===0?0:p(.3,.7),Ae=(ee===0?2.2:p(.9,1.6))*V;tt("crystal",Ge.oct,[y+Math.cos(ue)*.25*V,M+Ae*.4,E+Math.sin(ue)*.25*V],[Math.sin(ue)*ye,m()*3,-Math.cos(ue)*ye],[.45*V,Ae,.45*V],d.accent,We(L))}rn(y,M+1*V,E,d.accent,3.2*V)},at=([y,M,E],L)=>{tt("stone",Ge.cyl8,[y,M+.5,E],[0,0,0],[.5,1,.5],Ve(d.rock),We(L)),tt("metal",Ge.bowl,[y,M+1.12,E],[0,0,0],1,f("#6a5a48",h),We(L)),tt("glow",Ge.cone,[y,M+1.42,E],[0,0,0],[.5,.6,.5],l(t===9||n?"#ff8a30":"#ffb050"),!1),rn(y,M+1.5,E,t===7?d.accent:l("#ff9a40"),3.4),fn.push([y,M+1.5,E])},ht=([y,M,E],L,$=1)=>{let V=$;tt("bark",Ge.cyl6,[y,M+1.7*V,E],[0,0,0],[.09*V,3.4*V,.09*V],Ve(d.bark),We(L)),tt("bark",Ge.cyl6,[y,M+3.25*V,E+.05],[0,0,Math.PI/2],[.06*V,.9*V,.06*V],Ve(d.bark),We(L)),tt("cloth",Ge.banner,[y,M+3.2*V,E+.08],[0,p(-.15,.15),0],[V,V,V],Ve(d.cloth,.08),We(L))},$e=([y,M,E],L,$=1,V=!1)=>{let Z=p(.8,1.2)*$,ee=[p(-.12,.12),0,p(-.12,.12)];tt("bark",Ge.cyl6,[y,M+.9*Z,E],ee,[.18*Z,2.6*Z,.18*Z],Ve(d.bark.clone().multiplyScalar(.8)),We(L)),V&&(tt("glow",Ge.box,[y+.25,M+2*Z,E],[0,.5,0],[.2,.28,.2],d.accent,!1),rn(y+.25,M+2*Z,E,d.accent,2.6))},ot=([y,M,E],L,$=1)=>{let V=p(.8,1.3)*$;tt("bark",Ge.trunk,[y,M+.22*V,E],[Math.PI/2,0,m()*3],[.45*V,p(2.2,3.4)*V,.45*V],Ve(d.bark),We(L))},rt=([y,M,E],L)=>tt("bark",Ge.trunk,[y,M+.3,E],[0,m()*3,0],[.6,.6,.6],Ve(d.bark),We(L)),Rt=([y,M,E],L,$=1)=>{let V=5+Math.floor(m()*6),Z=p(.8,1.3)*$;for(let ee=0;ee<V;ee++){let ue=m()*6.28,ye=Math.sqrt(m())*1.3*Z,Ae=p(1.2,4.6)*Z*(1-ye/(2*Z)),Ze=y+Math.cos(ue)*ye,Tt=E+Math.sin(ue)*ye,Wt=M+Ae-.2,Nt=Math.min(M,Ce(Ze,Tt))-.4;tt("stone",Ge.hex,[Ze,(Wt+Nt)/2,Tt],[0,m(),0],[.75*Z,Wt-Nt,.75*Z],Ve(d.rock,.15),L)}},Gt=([y,M,E],L)=>{for(let $=0;$<3;$++){let V=p(.4,.9),Z=p(-.5,.5),ee=p(-.5,.5);tt("bark",Ge.cyl6,[y+Z,M+.35*V,E+ee],[0,0,0],[.12*V,.7*V,.12*V],f("#c8d8d8",h),We(L)),tt("crystal",Ge.cap,[y+Z,M+.68*V,E+ee],[0,0,0],[.9*V,.5*V,.9*V],d.accent,We(L))}rn(y,M+.6,E,d.accent,2.2)},fn=[];if(n){Nn((y,M,E)=>Rt(y,M,E*1.15),2,3,12,1.2);for(let y=0;y<ut(16);y++){let M=ft(-24,24,-40,-7.2,1.6);M&&xe(M,!1,p(.8,2.2),d.rock)}for(let y=0;y<2;y++){let M=ft(-9,9,-12,-7,3);M&&at(M,!0)}}else if(i===0){Nn((y,M,E)=>(m()<.7?Ot:U)(y,M,E),2,4,30,1.1);for(let y=0;y<ut(8);y++){let M=ft(-14,14,-20,-7.2,1.5);M&&(y%3?xe:y%2?ot:rt)(M,M[2]>-12,.9)}for(let y=0;y<ut(10);y++){let M=ft(-30,30,-45,-20,4);M&&U(M,!1,1.6)}}else if(i===1){for(let y of[-1,1])for(let M=0;M<2;M++){let E=ft(y*5.2,y*10,-10,0,2.5);E&&(M?xe(E,!0,1.6):$e(E,!0,1.3))}for(let y=0;y<ut(9);y++){let M=ft(-26,10,-34,-12,2);M&&$e(M,!1,1.2)}for(let y=0;y<ut(6);y++){let M=ft(-30,20,-45,-16,6);M&&te(M)}for(let y=0;y<ut(8);y++){let M=ft(-14,18,-18,-7.2,1.8);M&&(y%2?ot:xe)(M,M[2]>-12,1)}for(let y=0;y<ut(8);y++){let M=ft(8,30,-40,-10,3);M&&(m()<.6?U:xe)(M,!1,1.2)}}else if(i===2){Nn((y,M,E)=>Ne(y,M,E),2,3,10,1.3);for(let y=0;y<ut(5);y++){let M=ft(-34,34,-48,-24,8);M&&Ue(M,!1,1.2)}for(let y=0;y<ut(12);y++){let M=ft(-16,16,-24,-7.2,1.6);M&&xe(M,M[2]>-12,p(.6,1.4))}for(let y=0;y<3;y++){let M=ft(-10,10,-14,-7.5,2.5);M&&(y<2?ht(M,!0,1):I(M,!0))}if(c.crystals)for(let y=0;y<ut(6);y++){let M=ft(-14,14,-22,-7.5,2.5);M&&Se(M,M[2]>-12,1.1)}}else if(i===3){Nn((y,M,E)=>I(y,M,E*1.1),2,4,18,1);for(let y=0;y<ut(6);y++){let M=ft(-12,12,-18,-7.5,2.4);M&&$e(M,M[2]>-12,1,!0)}for(let y=0;y<ut(8);y++){let M=ft(-16,16,-24,-7.2,1.6);M&&(y%2?rt:xe)(M,M[2]>-12,.8)}if(c.mushrooms)for(let y=0;y<ut(8);y++){let M=ft(-12,12,-20,-7.5,1.8);M&&Gt(M,!1)}for(let y=0;y<ut(10);y++){let M=ft(-30,30,-45,-22,4);M&&Ot(M,!1,1.3)}}else{for(let y of[-1,1])for(let M=0;M<3;M++){let E=-10+M*3.6+p(-.4,.4),L=y*p(5.4,6.6);an(L,E)&&(bn.push([L,E,1.8]),Xe([L,Ce(L,E),E],!0,1,M!==1))}{let M=Me(-16);bn.push([M,-16,3]),bt([M,Ce(M,-16),-16],!1,1.1)}for(let y=0;y<ut(7);y++){let M=ft(-26,26,-38,-11,4);M&&Ye(M,!1,1.1)}for(let y=0;y<ut(8);y++){let M=ft(-26,26,-40,-11,3);M&&Xe(M,!1,1.1)}for(let y=0;y<ut(5);y++){let M=ft(-12,12,-18,-7.5,2.4);M&&Se(M,M[2]>-12,1.1)}for(let y=0;y<2;y++){let M=ft(-8,8,-9.5,-6.5,3);M&&at(M,!0)}for(let y=0;y<2;y++){let M=ft(-10,10,-14,-7,3);M&&ht(M,!0,1.1)}for(let y=0;y<ut(8);y++){let M=ft(-30,30,-46,-20,4);M&&Ot(M,!1,1.2)}}function te(y){let[M,,E]=y,L=Math.min(Ce(M,E),-.6),$=p(1.6,2.6),V=L,Z=$;for(let ee=0;ee<4;ee++){let ue=p(1.2,2.2);tt("stone",Ge.rockCyl,[M+p(-.3,.3),V+ue/2,E+p(-.3,.3)],[p(-.08,.08),m()*6,p(-.08,.08)],[Z*2,ue,Z*1.7],Ve(d.rock,.1),!1),V+=ue*.95,Z*=p(.7,.9)}}function Me(y){for(let M=0;M<Y.length-1;M++){let[E,L]=Y[M],[$,V]=Y[M+1];if(y<=L&&y>=V)return Vr(E,$,(y-L)/(V-L))}return 0}for(let y of Object.keys(ct)){let[M,E]=y.split("|"),L=b($1(ct[y])),$=new St(L,fe[M]);$.receiveShadow=M!=="glow",$.castShadow=(E==="1"||E==="s")&&a.casters&&M!=="glow"&&M!=="cloth",E==="s"&&($.userData.prop=!0),$.name="arena-props-"+M+(E==="1"?"-near":E==="s"?"-small":""),x.add($)}for(let y of st)y.dispose();let Ie=()=>{let y=m(),M=6.5-44*Math.pow(y,1.25),E=3.2+(6.5-M)*.32;return[p(-E,E),M]},ze=(y,M,E)=>!(M>1.6-E&&M<2.9+E&&Math.abs(y)<2.35+E)&&!(M>-4.1-E&&M<-2.8+E&&Math.abs(y)<2.5+E)&&!(n&&Math.hypot(y,M+3.8)<2.2+E),et=(y,M,E)=>(S==null||M>S+.04)&&(R==null||M>R+.5),mt=new nn,Bt=(y,M,E,L,$)=>{let V=new Ar(b(y),M,E),Z=0;for(let ee=0;ee<E*6&&Z<E;ee++){let ue=L(mt,Z);ue&&(mt.updateMatrix(),V.setMatrixAt(Z,mt.matrix),V.setColorAt(Z,ue),Z++)}return V.count=Z,V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0),V.receiveShadow=!0,V.name=$,V.frustumCulled=!1,x.add(V),V};{let y=Va(new $i(1,1),.28,g+21,1.4),M=b(new Ht({color:16777215,map:be.map,roughnessMap:be.roughnessMap,roughness:1,flatShading:!0,envMapIntensity:.3})),E=a.rocks;Bt(y,M,E,(L,$)=>{let V,Z,ee,ue=$/E;if(ue<.45){let Ae=m()*6.28,Ze=p(.85,1.25);if(m()<.6)V=Math.cos(Ae)*5*Ze,Z=Math.sin(Ae)*3.9*Ze-.5;else if([V,Z]=Ie(),ae(V,Z)>1.4)return null;ee=p(.04,.12)}else if(ue<.85){if([V,Z]=Ie(),ee=p(.12,.38),j(V,Z)<.9)return null}else if([V,Z]=Ie(),ee=p(.4,.9),!an(V,Z,.3))return null;if(!ze(V,Z,ee))return null;let ye=Ce(V,Z);return R!=null&&ye<R+.3?null:(L.position.set(V,ye+ee*.15,Z),L.rotation.set(m()*3,m()*3,m()*3),L.scale.set(ee*p(.9,1.5),ee*p(.5,.9),ee*p(.9,1.4)),Ve(d.rock,.18))},"arena-rocks")}if(!n){let y=Ha(i===2?9:8,i===2?.18:.22,.1,i===2?.6:.4,g+31,i===2?.014:.024),M=b(Wa(new Ht({color:16777215,vertexColors:!0,roughness:.9,side:hn,envMapIntensity:.3}),A,"tuft","transformed.x += sin( uTime * 2.1 + instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.5 ) * 0.25 * position.y * position.y;"));Bt(y,M,a.tufts,()=>{let[E,L]=Ie(),$=Ce(E,L);if(!et(E,$,L))return null;let V=ne(E,L),Z=Qn(E*.25,L*.25,g+33,2);if(m()<V*1.2||m()>.35+Z||!ze(E,L,.2))return null;let ee=p(.6,1.2)*(i===1?1.15:1);return mt.position.set(E,$,L),mt.rotation.set(0,m()*6.28,0),mt.scale.set(ee,ee*p(.8,1.3),ee),Ve(d.tuft,.2)},"arena-tufts")}{let y,M,E;if(i===1||i===3)y=Ha(9,.9,.14,.12,g+41,.018),M=b(Wa(new Ht({color:16777215,vertexColors:!0,roughness:.85,side:hn}),A,"reed","transformed.x += sin( uTime * 1.6 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3 ) * 0.08 * position.y * position.y;")),E=()=>{for(let L=0;L<8;L++){let[$,V]=Ie(),Z=Ce($,V);if(Z>S-.45&&Z<S+.35&&ze($,V,.4)&&an($,V,-2.5)){let ee=p(.7,1.3);return mt.position.set($,Z,V),mt.rotation.set(0,m()*6.28,0),mt.scale.set(ee,ee*p(.8,1.4),ee),Ve(d.tuft.clone().lerp(f("#a89a58",u),.3),.15)}}return null};else if(n)y=new ms(.5,0),y.scale(.55,1.2,.5),M=b(new Ht({color:"#151216",roughness:.15,metalness:.3,flatShading:!0,envMapIntensity:1.4})),E=()=>{let[L,$]=Ie(),V=Ce(L,$);if(V<R+.4||!ze(L,$,.4)||j(L,$)<1||$<-8||m()<.6)return null;let Z=p(.15,.4);return mt.position.set(L,V+Z*.1,$),mt.rotation.set(p(-.5,.5),m()*6,p(-.5,.5)),mt.scale.set(Z,Z,Z),l("#ffffff")};else{let L=i===4||t===5;y=i===2?Ha(14,.5,.2,.9,g+43,.012):L?Ha(5,.22,.08,.3,g+45,.04):Ha(8,.55,.15,.8,g+47,.07),M=b(Wa(new Ht({color:16777215,vertexColors:!0,roughness:.85,side:hn}),A,"s2","transformed.x += sin( uTime * 1.8 + instanceMatrix[3].x * 0.5 ) * 0.12 * position.y;"));let $=L?[f(o[4],.6),f("#f4f0e0",.6),f(t===5?"#ff9ac8":"#e8d070",.6)]:null;E=()=>{let[V,Z]=Ie(),ee=Ce(V,Z);if(!ze(V,Z,.3)||ne(V,Z)>.4||j(V,Z)<1.05)return null;let ue=p(.7,1.3);return mt.position.set(V,ee,Z),mt.rotation.set(0,m()*6.28,0),mt.scale.set(ue,ue,ue),L?$[Math.floor(m()*3)].clone():i===2?Ve(f("#6a5034",u),.2):Ve(d.tuft.clone().multiplyScalar(.8),.15)}}Bt(y,M,n?Math.round(a.scatter2*.25):a.scatter2,E,"arena-scatter2")}let on=new F(-.35,.1,-1).normalize();{let y=b(new Di(140,32,16)),M=y.attributes.position,E=new Float32Array(M.count*3),L=new De,$=new F,V=d.horizon.clone().lerp(new De(1,1,1),.15);for(let ee=0;ee<M.count;ee++){if($.fromBufferAttribute(M,ee).normalize(),$.y>=0){L.copy(V).lerp(d.skyTop,Math.pow(Math.min(1,$.y*2.2),.55));let ue=Math.pow(Math.max(0,$.dot(on)),6);L.lerp(V.clone().multiplyScalar(1.3),ue*.6)}else L.copy(d.fog);E[ee*3]=L.r,E[ee*3+1]=L.g,E[ee*3+2]=L.b}y.setAttribute("color",new pt(E,3));let Z=new St(y,b(new sn({vertexColors:!0,side:wn,fog:!1,depthWrite:!1})));Z.position.set(0,0,-4),Z.renderOrder=-10,Z.name="arena-sky",x.add(Z)}let li=(y,M,E)=>{let L=($,V=4)=>Qn(Math.cos(M)*$+50,Math.sin(M)*$+50,E,V);switch(y){case"peaks":{let $=1-Math.abs(L(2.2)*2-1);return 3+Math.pow($,2.2)*16+L(9,2)*2}case"mesa":{let $=L(1.8),V=Math.floor($*4)/4;return 2+kt(.35,.5,$)*(4+V*14)+L(14,2)*.8}case"trees":{let $=4+L(1.5)*6,V=Math.abs((M*70%2+2)%2-1);return $+V*2.2*(.6+L(20,2))}case"ruins":{let $=Math.floor((M+7)*22),V=$n($,3,E);return 2+L(1.4)*5+(V>.82?9+V*6:V>.4?V*5:.3)}case"islands":{let $=L(1.6);return-1+kt(.48,.62,$)*(4+L(6,2)*5)}case"volcano":{let $=Math.abs(Math.atan2(Math.sin(M-.15),Math.cos(M-.15))),V=Math.max(0,1-$/.5),Z=kt(.05,0,$)*2.5,ee=1-Math.abs(L(4,3)*2-1);return 3+Math.pow(V,1.6)*20-Z+ee*6}default:return 4}},Ut=(y,M,E,L,$,V)=>{let Z=a.ringSeg,ee=[],ue=[],ye=new De,Ae=[];for(let qe=0;qe<=Z;qe++){let Ft=qe/Z*Math.PI*2-Math.PI;Ae.push(Math.max(.5,li(y,Ft,$))*E)}let Ze=(qe,Ft)=>{let dt=qe/Z*Math.PI*2-Math.PI;return[Math.sin(dt)*M,Ft,-Math.cos(dt)*M-4]},Tt=d.sil.clone().lerp(d.fog,L),Wt=(qe,Ft,dt)=>{let Ke=new F(Ft[0]-qe[0],Ft[1]-qe[1],Ft[2]-qe[2]),At=new F(dt[0]-qe[0],dt[1]-qe[1],dt[2]-qe[2]),Jt=Ke.cross(At).normalize(),pn=.75+.5*Math.max(0,-Jt.dot(on)*.6+Jt.y*.5);for(let _t of[qe,Ft,dt]){ee.push(_t[0],_t[1],_t[2]);let Zt=kt(-3,Math.max(4,_t[1])*.9+1,_t[1]);ye.copy(d.fog).lerp(Tt.clone().multiplyScalar(pn),.35+.65*Zt),ue.push(ye.r,ye.g,ye.b)}};for(let qe=0;qe<Z;qe++){let Ft=Ae[qe],dt=Ae[qe+1],Ke=Ft*.55,At=dt*.55,Jt=Ze(qe,-4),pn=Ze(qe+1,-4),_t=Ze(qe,Ke),Zt=Ze(qe+1,At),qt=1+.03*Math.sin(qe*2.3);_t[0]*=qt,_t[2]=(_t[2]+4)*qt-4,Zt[0]*=1+.03*Math.sin((qe+1)*2.3),Zt[2]=(Zt[2]+4)*(1+.03*Math.sin((qe+1)*2.3))-4;let cn=Ze(qe,Ft),Yn=Ze(qe+1,dt);Wt(Jt,_t,pn),Wt(pn,_t,Zt),Wt(_t,cn,Zt),Wt(Zt,cn,Yn)}let Nt=b(new Ct);Nt.setAttribute("position",new lt(ee,3)),Nt.setAttribute("color",new lt(ue,3)),Nt.computeBoundingSphere();let vt=new St(Nt,ti);vt.name=V,vt.renderOrder=-5,x.add(vt)},ti=b(new sn({vertexColors:!0,fog:!1,side:hn}));Ut(s.silFar,112,1.25,.55,g+61,"arena-horizon-far"),Ut(s.sil,74,i===1?.8:.75,.25,g+62,"arena-horizon-mid");let An=(y,M,E)=>{let L=y.length,$=new Float32Array(L*3),V=new Float32Array(L*3),Z=new Float32Array(L),ee=new Float32Array(L*4);y.forEach((Ae,Ze)=>{$.set(Ae.p,Ze*3),V.set([Ae.c.r,Ae.c.g,Ae.c.b],Ze*3),Z[Ze]=Ae.s,ee.set([m(),m(),m(),m()],Ze*4)});let ue=b(new Ct);ue.setAttribute("position",new pt($,3)),ue.setAttribute("aColor",new pt(V,3)),ue.setAttribute("aSize",new pt(Z,1)),ue.setAttribute("aSeed",new pt(ee,4));let ye=new ps(ue,M);return ye.frustumCulled=!1,ye.name=E,ye.renderOrder=5,x.add(ye),ye};if(n)for(let y=0;y<18;y++){let M=p(-22,22),E=-14+Math.sin(M*.18)*2.2;rn(M,R+.6,E,l("#ff6a20"),p(5,9))}if(dn.length&&An(dn,b(pd(A,{flicker:.35,opacity:.55})),"arena-glows"),a.motes>0){let y=c.motes,M=l(c.moteColor),E=[],L=a.motes,$={leaves:{drift:[.25,-.32,.05],sway:.5,additive:!1,size:.13,hard:1,fall:1,opacity:.95},petals:{drift:[.3,-.25,.08],sway:.5,additive:!1,size:.12,hard:1,fall:1,opacity:.95},spray:{drift:[.4,.05,.1],sway:.3,size:.12,opacity:.55},dust:{drift:[.6,.02,.1],sway:.25,size:.14,opacity:.45},fireflies:{drift:[.05,.04,0],sway:.9,size:.2,flicker:.9,opacity:1},sparks:{drift:[0,.25,0],sway:.4,size:.14,flicker:.6,opacity:.9},embers:{drift:[.12,.7,0],sway:.35,size:.12,flicker:.7,opacity:1}}[y],V=[12,4,10],Z=[0,3.4,-5];for(let ee=0;ee<L;ee++){let ue=M.clone().multiplyScalar($.additive===!1?p(.4,.6):p(.8,1.6));E.push({p:[p(-V[0],V[0])+Z[0],p(-V[1],V[1])+Z[1],p(-V[2],V[2])+Z[2]],c:ue,s:$.size*p(.7,1.4)})}An(E,b(pd(A,{...$,box:V,center:Z})),"arena-motes")}let ts={};if(n&&e.quality!=="low"){let y=new kr(16738858,3,26,1.6);y.position.set(0,1.5,-11),x.add(y),ts.ember=y,P.push(M=>{y.intensity=2.6+Math.sin(M*3.1)*.3+Math.sin(M*7.3)*.15})}let qr=r.fog,jr=r.background;e.fog!==!1&&(r.fog=new Sr(d.fog.clone(),25,70),r.background=d.fog.clone());let Es=0,D=0;return x.traverse(y=>{if(!y.isMesh&&!y.isPoints)return;D++;let M=y.geometry,E=M.index?M.index.count/3:M.attributes.position.count/3;y.isMesh&&(Es+=E*(y.isInstancedMesh?y.count:1))}),{root:x,lights:ts,colors:{fog:d.fog,accent:d.accent,hemiSky:d.horizon.clone().lerp(new De(1,1,1),.35),hemiGround:d.worn.clone().multiplyScalar(.6)},stats:{drawCalls:D,triangles:Math.round(Es),textureMB:+(v/1048576).toFixed(2),kind:n?"titan":["forest","shore","badlands","marsh","ruins"][i],theme:c.name},update(y){A.uTime.value=y;for(let M of P)M(y)},dispose(){r.remove(x);for(let y of _.geos)y.dispose();for(let y of _.mats)y.dispose();for(let y of _.texs)y.dispose();J1(se),e.fog!==!1&&r.fog&&r.fog.isFog&&(r.fog=qr,r.background=jr),_.geos.clear(),_.mats.clear(),_.texs.clear(),P.length=0}}}var nv=md.map(r=>r.name).concat(gd.name);var Eu={default:0,skin:1,hair:2,cloth:3,leather:4,metal:5,gold:6,gem:7,eye:8},Hr=9,rc={default:{A:[.18,0,0,0],B:[-1,-1,1,0],C:[1,1,0,.5],D:[1,1,0,0]},skin:{A:[.5,.75,0,0],B:[.5,0,.5,0],C:[.75,1.18,0,.5],D:[1,.8,0,0]},hair:{A:[.28,.12,0,1],B:[.55,0,.3,0],C:[1,1.1,0,.5],D:[1,1,0,0]},cloth:{A:[.32,0,.55,0],B:[.88,0,.35,0],C:[1,.85,0,.5],D:[1,1,0,0]},leather:{A:[.2,0,.15,0],B:[.52,0,.85,.25],C:[.9,1,0,.5],D:[1,1,0,0]},metal:{A:[.06,0,0,0],B:[.3,.88,1,1],C:[.75,1,0,.5],D:[1.2,.7,0,0]},gold:{A:[.06,0,0,0],B:[.26,1,1,1],C:[.75,1.1,0,.5],D:[1.15,.7,0,0]},gem:{A:[.2,0,0,0],B:[.12,0,1.5,.3],C:[1.2,1.2,1,.5],D:[1,.5,0,0]},eye:{A:[.1,0,0,0],B:[.18,0,1,0],C:[.25,1,-1,.5],D:[1,0,0,0]}},Wr={A:[],B:[],C:[],D:[]};for(let r=0;r<Hr;r++)for(let e of"ABCD")Wr[e].push(new zt);var ry={uSbRoleA:{value:Wr.A},uSbRoleB:{value:Wr.B},uSbRoleC:{value:Wr.C},uSbRoleD:{value:Wr.D}};function ay(){for(let[r,e]of Object.entries(Eu)){let t=rc[r];for(let n of"ABCD")Wr[n][e].fromArray(t[n])}}ay();var oy=`
#ifdef SB_ROLE_ATTR
attribute vec2 sbRole;
#endif
uniform float uSbRole;
uniform vec4 uSbRoleA[${Hr}];
uniform vec4 uSbRoleB[${Hr}];
uniform vec4 uSbRoleC[${Hr}];
uniform vec4 uSbRoleD[${Hr}];
varying vec4 vSbA;
varying vec4 vSbB;
varying vec4 vSbC;
varying vec2 vSbD;
`,cy=`
{
#ifdef SB_ROLE_ATTR
  int sbI = int(clamp(sbRole.x, 0.0, ${Hr-1}.0) + 0.5); float sbAux = sbRole.y;
#else
  int sbI = int(uSbRole + 0.5); float sbAux = 0.5;
#endif
  vSbA = uSbRoleA[sbI]; vSbB = uSbRoleB[sbI]; vSbC = uSbRoleC[sbI]; vSbC.w = sbAux; vSbD = uSbRoleD[sbI].xy;
}
`,ly=`
varying vec4 vSbA;
varying vec4 vSbB;
varying vec4 vSbC;
varying vec2 vSbD;
uniform vec3 uSbRimColor;
uniform float uSbRim;
uniform float uSbRamp;
uniform vec3 uSbSky;
uniform vec3 uSbGround;
uniform float uSbSat;
uniform float uSbEnvBoost;
uniform vec3 uSbSssColor;
float sbLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// Painterly ramp: three soft bands (shadow / mid / light) \u2014 blended with the PBR term by uSbRamp.
float sbRampF(float d) { return 0.05 + 0.45 * smoothstep(0.03, 0.17, d) + 0.42 * smoothstep(0.42, 0.6, d) + 0.08 * smoothstep(0.86, 0.98, d); }
`,uy=`
void RE_Direct_Sigil( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 N = geometry.normal; vec3 V = geometry.viewDir; vec3 L = directLight.direction;
  float nl = dot( N, L );
  float w = vSbA.x;
  float d = saturate( ( nl + w ) / ( 1.0 + w ) );
#if SB_Q >= 1
  d = mix( d, sbRampF( d ), uSbRamp * vSbD.y );
#endif
  // Subsurface-like scatter: a warm, red-shifted band around the terminator.
  float t = smoothstep( -0.5, 0.0, nl ) * ( 1.0 - smoothstep( 0.0, 0.55, nl ) );
  vec3 diff = vec3( d ) + uSbSssColor * ( t * vSbA.y * 0.5 );
  reflectedLight.directDiffuse += directLight.color * diff * BRDF_Lambert( material.diffuseColor );
  vec3 irr = saturate( nl ) * directLight.color;
  reflectedLight.directSpecular += irr * BRDF_GGX( L, V, N, material.specularColor, material.specularF90, material.roughness ) * vSbB.z;
#if SB_Q >= 1
  float nv = saturate( dot( N, V ) );
  // Cloth: sheen at grazing view + fuzz that wraps into the shadow side.
  if ( vSbA.z > 0.001 ) {
    float fuzz = pow( 1.0 - nv, 3.0 ) * smoothstep( -0.3, 0.6, nl );
    reflectedLight.directSpecular += directLight.color * ( fuzz * vSbA.z * 0.35 ) * mix( material.diffuseColor, vec3( 1.0 ), 0.45 );
  }
  // Hair: tangent-free Kajiya-Kay band. Strand direction = world up projected on the surface.
  if ( vSbA.w > 0.001 ) {
    vec3 up = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
    vec3 Tg = up - N * dot( N, up );
    Tg = Tg / max( length( Tg ), 1e-3 );
    vec3 H = normalize( L + V );
    float th = dot( normalize( Tg + N * 0.1 ), H );
    float band = pow( sqrt( max( 1.0 - th * th, 0.0 ) ), 110.0 ) * 0.5;
  #if SB_Q >= 2
    float th2 = dot( normalize( Tg - N * 0.18 ), H );
    band += pow( sqrt( max( 1.0 - th2 * th2, 0.0 ) ), 24.0 ) * 0.22 * sbLuma( material.diffuseColor ) * 3.0;
  #endif
    float hl = smoothstep( -0.1, 0.4, nl ) * vSbA.w;
    reflectedLight.directSpecular += directLight.color * hl * band * mix( vec3( 1.0 ), material.diffuseColor * 2.0 + 0.2, 0.4 );
  }
#endif
}
#undef RE_Direct
#define RE_Direct RE_Direct_Sigil
`,hy=`
#ifndef SB_KEEP_FINISH
  if ( vSbB.x >= 0.0 ) roughnessFactor = vSbB.x;
  if ( vSbB.y >= 0.0 ) metalnessFactor = vSbB.y;
#endif
`,fy=`
  diffuseColor.rgb *= vSbD.x;
  // Hair: darker toward the bottom of each hair part (and its roots/underside), lighter on top.
  diffuseColor.rgb *= mix( 1.0, mix( 0.6, 1.08, smoothstep( 0.0, 0.8, vSbC.w ) ), vSbA.w );
`,dy=`
{
  vec3 sbN = geometry.normal; vec3 sbV = geometry.viewDir;
  float sbNV = saturate( dot( sbN, sbV ) );
  vec3 sbNw = ( vec4( sbN, 0.0 ) * viewMatrix ).xyz; // view \u2192 world (rotation only)
  // Ambient / shadow-side saturation per role (cloth a touch greyer, skin warmer and richer).
  float sbIl = sbLuma( reflectedLight.indirectDiffuse );
  reflectedLight.indirectDiffuse = max( mix( vec3( sbIl ), reflectedLight.indirectDiffuse, vSbC.y ), 0.0 );
  float sbDl = sbLuma( reflectedLight.directDiffuse );
  reflectedLight.directDiffuse = max( mix( vec3( sbDl ), reflectedLight.directDiffuse, mix( 1.0, vSbC.y, 0.5 ) ), 0.0 );
  // Per-role specular scale, and metals get the env at full strength even on dim-env finishes.
  reflectedLight.indirectSpecular *= vSbB.z * mix( 1.0, uSbEnvBoost, metalnessFactor );
#if SB_Q >= 1
  vec3 sbRw = ( vec4( reflect( -sbV, sbN ), 0.0 ) * viewMatrix ).xyz;
  float sbSky = smoothstep( -0.3, 0.5, sbRw.y );
  // Stylised sky/ground reflection + a painted horizon streak so metal always reads as metal.
  vec3 sbEnv = mix( uSbGround, uSbSky, sbSky ) + uSbSky * ( 1.2 * smoothstep( 0.05, 0.2, sbRw.y ) * ( 1.0 - smoothstep( 0.2, 0.45, sbRw.y ) ) );
  reflectedLight.indirectSpecular += sbEnv * material.specularColor * ( metalnessFactor * vSbB.w * 0.55 );
#endif
#if SB_Q >= 2
  // Painted edge highlight on tight curvature (metal and gold rims, rivets, plate borders).
  float sbCurv = length( fwidth( sbN ) ) / max( length( fwidth( geometry.position ) ), 1e-5 );
  float sbEdge = smoothstep( 6.0, 22.0, sbCurv ) * vSbB.w;
  totalEmissiveRadiance += material.specularColor * sbEdge * ( 0.18 + 0.25 * sbSky );
#endif
  // Fresnel rim in the hero's element colour, favouring up-facing surfaces.
  float sbRimF = smoothstep( 0.5, 0.95, 1.0 - sbNV ) * ( 0.45 + 0.55 * saturate( sbNw.y + 0.4 ) );
  totalEmissiveRadiance += uSbRimColor * ( uSbRim * vSbC.x * sbRimF );
#if SB_Q >= 1
  if ( vSbC.z > 0.0 ) { // gem: glowing core + white fresnel
    totalEmissiveRadiance += diffuseColor.rgb * vSbC.z * ( 0.25 + 0.9 * pow( sbNV, 2.5 ) ) + vec3( 0.5 ) * pow( 1.0 - sbNV, 4.0 ) * vSbC.z;
  } else if ( vSbC.z < 0.0 ) { // eye: a small fixed catchlight (upper left, toward the camera)
    vec3 sbCl = normalize( vec3( -0.35, 0.5, 1.0 ) );
    totalEmissiveRadiance += vec3( 0.9 ) * ( pow( saturate( dot( reflect( -sbV, sbN ), sbCl ) ), 24.0 ) * -vSbC.z );
    totalEmissiveRadiance += diffuseColor.rgb * 0.25 * -vSbC.z;
  }
#endif
}
`,py=`
#if SB_Q >= 2
  { float sbL = sbLuma( outgoingLight ); outgoingLight = max( mix( vec3( sbL ), outgoingLight, 1.0 + uSbSat ), 0.0 ); }
#endif
`;function my(r,e){Object.assign(r.uniforms,ry,e),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
`+oy).replace("#include <begin_vertex>",`#include <begin_vertex>
`+cy),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+ly).replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
`+uy).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
`+hy).replace("#include <color_fragment>",`#include <color_fragment>
`+fy).replace("#include <aomap_fragment>",`#include <aomap_fragment>
`+dy).replace("#include <output_fragment>",py+`
#include <output_fragment>`)}var gy={low:0,medium:1,high:2,ultra:2},Sd=r=>r==null?"high":String(r).toLowerCase(),xd=new Map,by={rim:.55,ramp:.35,saturation:.1,sky:"#cfe0ff",ground:"#4a3a30",sss:"#ff5a3a",rimColor:"#9fb4ff"},sc=r=>new De(r).getHexString();function yd(r,e="default",t={}){var g,m,p,x;if(!r||r.userData.sbShade||((r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&(r=xy(r)),!r.isMeshStandardMaterial||r.transparent&&r.opacity<.98))return r;let n=Sd(t.quality),i=(g=gy[n])!=null?g:2,s=e==="multi",a=s?0:(m=Eu[e])!=null?m:0,o=Object.assign({},by,t),c=[r.uuid,e,i,sc(o.rimColor),o.rim,o.ramp,o.saturation,sc(o.sky),sc(o.ground),sc(o.sss),!!o.keepFinish,o.metalEnv].join("|"),l=xd.get(c);if(l)return l;let u=r.clone(),h=Object.prototype.hasOwnProperty.call(r,"onBeforeCompile")?r.onBeforeCompile:null,f=Object.prototype.hasOwnProperty.call(r,"customProgramCacheKey")?r.customProgramCacheKey.call(r):"";if(u.defines=Object.assign({},r.defines,{SB_Q:i}),s&&(u.defines.SB_ROLE_ATTR=""),o.keepFinish&&(u.defines.SB_KEEP_FINISH=""),!s&&!o.keepFinish){let _=rc[e]?rc[e].B:rc.default.B;_[0]>=0&&(u.roughness=_[0]),_[1]>=0&&(u.metalness=_[1])}let d={uSbRole:{value:a},uSbRimColor:{value:new De(o.rimColor)},uSbRim:{value:o.rim},uSbRamp:{value:i>=1?o.ramp:0},uSbSky:{value:new De(o.sky)},uSbGround:{value:new De(o.ground)},uSbSat:{value:o.saturation},uSbEnvBoost:{value:(x=o.metalEnv)!=null?x:Math.min(4,1/Math.max(.25,(p=u.envMapIntensity)!=null?p:1))},uSbSssColor:{value:new De(o.sss)}};return u.onBeforeCompile=function(_,b){h&&h.call(this,_,b),my(_,d)},u.customProgramCacheKey=()=>`sbshade|${f}`,u.userData=Object.assign({},r.userData,{sbShade:{role:e,quality:n},sbUniforms:d,sbSource:r.uuid}),xd.set(c,u),u}function xy(r){let e=new Ht({name:r.name,color:r.color,map:r.map,vertexColors:r.vertexColors,emissive:r.emissive,emissiveIntensity:r.emissiveIntensity,emissiveMap:r.emissiveMap,side:r.side,roughness:.7,metalness:0,transparent:r.transparent,opacity:r.opacity,alphaTest:r.alphaTest,normalMap:r.normalMap||null});return e.userData=Object.assign({},r.userData),e}function Td(r){let e=(r&&r.name||"").toLowerCase();return/skin|face|body_skin/.test(e)?"skin":/hair|brow|beard|fur/.test(e)?"hair":/^eye|eye_|iris|pupil/.test(e)&&!/white/.test(e)?"eye":/gold|brass|crown/.test(e)?"gold":/metal|steel|iron|silver|blade|armou?r/.test(e)?"metal":/gem|crystal|jewel|ruby|sapphire/.test(e)?"gem":/leather|brown|boot|belt|strap|wood/.test(e)?"leather":"cloth"}function Ad(r,e,t=""){switch(r){case"skin":return"skin";case"hair":case"brow":return"hair";case"eye":return"eye";case"crown":return"gold";case"trim":case"blade":return"metal";case"accent":return/gold/i.test(t)?"gold":"leather";case"armor":return e==="monarch"?"metal":e==="hooded"?"leather":"cloth";case"boot":case"wood":return"leather";case"cloth":case"pants":case"hood":return"cloth";case"gem":return"gem";case"maw":case"glow":case"stone":case"stoneDark":case"socket":case"fang":case"tongue":return null;default:return r?Td({name:t}):"default"}}function Cu(r,e){var l;let t=r.attributes.position,n=t.count,i=typeof e=="number"?e:(l=Eu[e])!=null?l:0,s=1/0,a=-1/0;for(let u=0;u<n;u++){let h=t.getY(u);h<s&&(s=h),h>a&&(a=h)}let o=a-s||1,c=new Float32Array(n*2);for(let u=0;u<n;u++)c[u*2]=i,c[u*2+1]=(t.getY(u)-s)/o;return r.setAttribute("sbRole",new pt(c,2)),r}var yy=["getX","getY","getZ","getW"];function Ru(r){let e=r.count,t=r.itemSize,n=new Float32Array(e*t);for(let i=0;i<t;i++){let s=r[yy[i]];for(let a=0;a<e;a++)n[a*t+i]=s.call(r,a)}return n}function Ed(r){if(r.index)return r.index.array.length===r.index.count?r.index.array:Uint32Array.from({length:r.index.count},(n,i)=>r.index.getX(i));let e=r.attributes.position.count,t=new Uint32Array(e);for(let n=0;n<e;n++)t[n]=n;return t}function Pu(r,e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let l=0;l<e;l++)for(let u=0;u<3;u++){let h=r[l*3+u];h<t[u]&&(t[u]=h),h>n[u]&&(n[u]=h)}let i=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2])||1,s=1/(i*1e-5),a=new Map,o=new Int32Array(e),c=[];for(let l=0;l<e;l++){let u=`${Math.round(r[l*3]*s)},${Math.round(r[l*3+1]*s)},${Math.round(r[l*3+2]*s)}`,h=a.get(u);h===void 0&&(h=c.length/3,a.set(u,h),c.push(r[l*3],r[l*3+1],r[l*3+2])),o[l]=h}return{pid:o,rep:new Float32Array(c),count:c.length/3}}function Iu(r,e,t,n){let i=new Float32Array(n*3),s=new Float32Array(n);for(let a=0;a<n;a++){let o=e[r[a*3]]*3,c=e[r[a*3+1]]*3,l=e[r[a*3+2]]*3,u=t[c]-t[o],h=t[c+1]-t[o+1],f=t[c+2]-t[o+2],d=t[l]-t[o],g=t[l+1]-t[o+1],m=t[l+2]-t[o+2],p=h*m-f*g,x=f*d-u*m,_=u*g-h*d,b=Math.hypot(p,x,_);s[a]=b/2,b>0&&(p/=b,x/=b,_/=b),i[a*3]=p,i[a*3+1]=x,i[a*3+2]=_}return{fn:i,area:s}}var ac=class{constructor(e,t,n=[]){this.attrs=[];for(let[i,s]of Object.entries(e.attributes))n.includes(i)||this.attrs.push({name:i,size:s.itemSize,src:Ru(s),out:new Float32Array(t*s.itemSize),skin:i==="skinIndex"});this.sw=this.attrs.find(i=>i.name==="skinWeight"),this.si=this.attrs.find(i=>i.name==="skinIndex"),this.pos=this.attrs.find(i=>i.name==="position"),this.n=0}copy(e){let t=this.n++;for(let n of this.attrs)for(let i=0;i<n.size;i++)n.out[t*n.size+i]=n.src[e*n.size+i];return t}blend(e,t){let n=this.n++;for(let i of this.attrs)if(!(i===this.si||i===this.sw))for(let s=0;s<i.size;s++)i.out[n*i.size+s]=(i.src[e*i.size+s]+i.src[t*i.size+s])*.5;if(this.si&&this.sw){let i=new Map;for(let o of[e,t])for(let c=0;c<4;c++){let l=this.sw.src[o*4+c]*.5;if(l<=0)continue;let u=this.si.src[o*4+c];i.set(u,(i.get(u)||0)+l)}let s=[...i].sort((o,c)=>c[1]-o[1]).slice(0,4),a=s.reduce((o,c)=>o+c[1],0)||1;for(let o=0;o<4;o++)this.si.out[n*4+o]=s[o]?s[o][0]:0,this.sw.out[n*4+o]=s[o]?s[o][1]/a:0}return n}setPos(e,t,n,i){let s=this.pos.out;s[e*3]=t,s[e*3+1]=n,s[e*3+2]=i}build(e,t){let n=new Ct;for(let i of this.attrs){let s=i.out.subarray(0,this.n*i.size);i.skin?n.setAttribute(i.name,new Zi(Uint16Array.from(s,Math.round),i.size)):n.setAttribute(i.name,new pt(s.slice(),i.size))}return n.setIndex(new pt(this.n>65535?Uint32Array.from(e):Uint16Array.from(e),1)),t&&(n.name=t.name,n.userData=Object.assign({},t.userData)),n}};function Cd(r,e=50){let t=r;r=Rd(r);let n=r.attributes.position.array,i=r.index.array,s=i.length/3|0,a=r.attributes.position.count,{pid:o,rep:c,count:l}=Pu(n,a),{fn:u}=Iu(i,o,c,s),h=new Float32Array(s*3),f=new Int32Array(l+1);for(let A=0;A<s;A++)for(let P=0;P<3;P++){let B=o[i[A*3+P]],S=o[i[A*3+(P+1)%3]],R=o[i[A*3+(P+2)%3]],Y=c[S*3]-c[B*3],ae=c[S*3+1]-c[B*3+1],j=c[S*3+2]-c[B*3+2],K=c[R*3]-c[B*3],J=c[R*3+1]-c[B*3+1],ne=c[R*3+2]-c[B*3+2],le=(Y*K+ae*J+j*ne)/(Math.hypot(Y,ae,j)*Math.hypot(K,J,ne)||1);h[A*3+P]=Math.acos(Math.max(-1,Math.min(1,le))),f[B+1]++}for(let A=0;A<l;A++)f[A+1]+=f[A];let d=f.slice(0,l),g=new Int32Array(s*3);for(let A=0;A<s*3;A++)g[d[o[i[A]]]++]=A;let m=Math.cos(e*Math.PI/180),p=new ac(r,s*3,["normal"]),x=new Float32Array(s*9),_=new Uint32Array(s*3),b=new Map;for(let A=0;A<s*3;A++){let P=A/3|0,B=o[i[A]],S=0,R=0,Y=0;for(let ne=f[B];ne<f[B+1];ne++){let le=g[ne],me=le/3|0;if(u[P*3]*u[me*3]+u[P*3+1]*u[me*3+1]+u[P*3+2]*u[me*3+2]>=m){let ie=h[le];S+=u[me*3]*ie,R+=u[me*3+1]*ie,Y+=u[me*3+2]*ie}}let ae=Math.hypot(S,R,Y)||1;S/=ae,R/=ae,Y/=ae;let j=i[A],K=`${j}|${Math.round(S*1e3)},${Math.round(R*1e3)},${Math.round(Y*1e3)}`,J=b.get(K);J===void 0&&(J=p.copy(j),b.set(K,J),x[J*3]=S,x[J*3+1]=R,x[J*3+2]=Y),_[A]=J}let v=p.build(_,t);v.setAttribute("normal",new pt(x.slice(0,p.n*3),3));for(let A of t.groups)v.addGroup(A.start,A.count,A.materialIndex);return v.computeBoundingSphere(),v.computeBoundingBox(),v}function Rd(r){let e=Object.keys(r.attributes).filter(u=>u!=="normal"),t=e.map(u=>[Ru(r.attributes[u]),r.attributes[u].itemSize]),n=r.attributes.position.count,i=new Map,s=new Uint32Array(n),a=[];for(let u=0;u<n;u++){let h="";for(let[d,g]of t)for(let m=0;m<g;m++)h+=Math.round(d[u*g+m]*1e5)+",";let f=i.get(h);f===void 0&&(f=a.length,a.push(u),i.set(h,f)),s[u]=f}let o=new Ct;e.forEach((u,h)=>{let[f,d]=t[h],g=new Float32Array(a.length*d);a.forEach((m,p)=>{for(let x=0;x<d;x++)g[p*d+x]=f[m*d+x]}),o.setAttribute(u,new pt(g,d))});let c=Ed(r),l=new Uint32Array(c.length);for(let u=0;u<c.length;u++)l[u]=s[c[u]];o.setIndex(new pt(l,1));for(let u of r.groups)o.addGroup(u.start,u.count,u.materialIndex);return o}function vy(r,e,t){let n=Rd(r),i=n.attributes.position.array,s=n.index.array,a=s.length/3|0,o=n.attributes.position.count,{pid:c,rep:l,count:u}=Pu(i,o),{fn:h}=Iu(s,c,l,a),f=new Map,d=[],g=[],m=[],p=[],x=[],_=new Int32Array(a*3);for(let q=0;q<a;q++)for(let ie=0;ie<3;ie++){let Q=c[s[q*3+ie]],Ce=c[s[q*3+(ie+1)%3]],se=c[s[q*3+(ie+2)%3]],be=Math.min(Q,Ce),we=Math.max(Q,Ce),Fe=be*u+we,fe=f.get(Fe);fe===void 0?(fe=d.length,f.set(Fe,fe),d.push(be),g.push(we),m.push([q]),p.push([se]),x.push(0)):(m[fe].push(q),p[fe].push(se)),_[q*3+ie]=fe}let b=d.length,v=new Uint8Array(b);for(let q=0;q<b;q++){if(d[q]===g[q]||m[q].length!==2){v[q]=1;continue}let ie=m[q][0],Q=m[q][1];h[ie*3]*h[Q*3]+h[ie*3+1]*h[Q*3+1]+h[ie*3+2]*h[Q*3+2]<e&&(v[q]=1)}let A=new Float64Array(u*3),P=new Int32Array(u),B=new Float64Array(u*3),S=new Int32Array(u);for(let q=0;q<b;q++){let ie=d[q],Q=g[q];if(ie!==Q){for(let Ce=0;Ce<3;Ce++)A[ie*3+Ce]+=l[Q*3+Ce],A[Q*3+Ce]+=l[ie*3+Ce];if(P[ie]++,P[Q]++,v[q]){for(let Ce=0;Ce<3;Ce++)B[ie*3+Ce]+=l[Q*3+Ce],B[Q*3+Ce]+=l[ie*3+Ce];S[ie]++,S[Q]++}}}let R=new Float32Array(u*3);for(let q=0;q<u;q++)for(let ie=0;ie<3;ie++){let Q=l[q*3+ie],Ce;if(S[q]>=3||P[q]<2)Ce=Q;else if(S[q]===2)Ce=.75*Q+.125*B[q*3+ie];else{let se=P[q],be=se===3?3/16:3/(8*se);Ce=(1-se*be)*Q+be*A[q*3+ie]}R[q*3+ie]=Q+(Ce-Q)*t}let Y=new Float32Array(b*3);for(let q=0;q<b;q++)for(let ie=0;ie<3;ie++){let Q=(l[d[q]*3+ie]+l[g[q]*3+ie])*.5,Ce=Q;v[q]||(Ce=.375*(l[d[q]*3+ie]+l[g[q]*3+ie])+.125*(l[p[q][0]*3+ie]+l[p[q][1]*3+ie])),Y[q*3+ie]=Q+(Ce-Q)*t}let ae=new ac(n,o+a*3),j=new Int32Array(o).fill(-1),K=new Map,J=new Uint32Array(a*12),ne=q=>{if(j[q]<0){let ie=ae.copy(q),Q=c[q];ae.setPos(ie,R[Q*3],R[Q*3+1],R[Q*3+2]),j[q]=ie}return j[q]},le=(q,ie,Q)=>{let Ce=Math.min(q,ie)*o+Math.max(q,ie),se=K.get(Ce);return se===void 0&&(se=ae.blend(q,ie),ae.setPos(se,Y[Q*3],Y[Q*3+1],Y[Q*3+2]),K.set(Ce,se)),se};for(let q=0;q<a;q++){let ie=s[q*3],Q=s[q*3+1],Ce=s[q*3+2],se=ne(ie),be=ne(Q),we=ne(Ce),Fe=le(ie,Q,_[q*3]),fe=le(Q,Ce,_[q*3+1]),ct=le(Ce,ie,_[q*3+2]);J.set([se,Fe,ct,Fe,be,fe,ct,fe,we,Fe,fe,ct],q*12)}let me=ae.build(J,r);for(let q of r.groups)me.addGroup(q.start*4,q.count*4,q.materialIndex);return me}function _y(r,e=1,t={}){var a,o,c;let n=Math.cos(((a=t.creaseAngle)!=null?a:40)*Math.PI/180),i=(o=t.smooth)!=null?o:1,s=r;for(let l=0;l<e;l++)s=vy(s,n,i);return s=Cd(s,(c=t.normalAngle)!=null?c:50),s}var Tu=r=>(r.index?r.index.count:r.attributes.position.count)/3,vd=new WeakMap;function My(r){if(vd.has(r))return;let e=Ru(r.attributes.position),t=Ed(r),n=r.attributes.position.count,{pid:i,rep:s,count:a}=Pu(e,n),{fn:o,area:c}=Iu(t,i,s,t.length/3|0),l=new Float32Array(a*3);for(let h=0;h<t.length/3;h++)for(let f=0;f<3;f++){let d=i[t[h*3+f]];for(let g=0;g<3;g++)l[d*3+g]+=o[h*3+g]*c[h]}let u=new Float32Array(n*3);for(let h=0;h<n;h++){let f=i[h],d=Math.hypot(l[f*3],l[f*3+1],l[f*3+2])||1;for(let g=0;g<3;g++)u[h*3+g]=l[f*3+g]/d}r.setAttribute("sbOutlineN",new pt(u,3)),vd.set(r,!0)}var wy=`
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
attribute vec3 sbOutlineN;
#ifdef USE_COLOR
attribute vec3 color;
varying vec3 vOColor;
#endif
uniform float uWidth;
uniform vec2 uRes;
void main() {
  vec3 objectNormal = sbOutlineN;
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <fog_vertex>
  vec2 n2 = ( projectionMatrix * vec4( transformedNormal, 0.0 ) ).xy;
  float l = length( n2 );
  if ( l > 1e-5 ) gl_Position.xy += ( n2 / l ) * ( uWidth * 2.0 / uRes ) * gl_Position.w;
  gl_Position.z += 0.0004 * gl_Position.w; // tuck behind the surface a hair
#ifdef USE_COLOR
  vOColor = color;
#endif
}`,Sy=`
#include <common>
#include <fog_pars_fragment>
uniform vec3 uColor;
uniform float uTint;
#ifdef USE_COLOR
varying vec3 vOColor;
#endif
void main() {
  vec3 c = uColor;
#ifdef USE_COLOR
  c = mix( c, vOColor * 0.22, uTint );
#endif
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
}`,Au=new zt;function Ty(r,e={}){var a,o;if(r.userData.sbOutline)return r.userData.sbOutline;let t=r.geometry;My(t);let n=!!t.attributes.color,i=new gn({uniforms:ws.merge([je.fog,{uColor:{value:new De(e.color||"#1b1422")},uWidth:{value:(a=e.width)!=null?a:1.6},uRes:{value:new Oe(1,1)},uTint:{value:(o=e.tint)!=null?o:.6}}]),vertexShader:wy,fragmentShader:Sy,side:wn,fog:!0,vertexColors:n}),s;return r.isSkinnedMesh?(s=new Qi(t,i),s.position.copy(r.position),s.quaternion.copy(r.quaternion),s.scale.copy(r.scale),r.parent.add(s),s.bind(r.skeleton,r.bindMatrix),s.bindMode=r.bindMode):(s=new St(t,i),r.add(s)),s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1,s.userData.sbOutlineOf=r,s.onBeforeRender=c=>{c.getCurrentViewport(Au),i.uniforms.uRes.value.set(Au.z||1,Au.w||1)},r.userData.sbOutline=s,s}var _d={ultra:{Q:2,smooth:!0,subdiv:1,subdivMaxTris:16e3},high:{Q:2,smooth:!0,subdiv:0,subdivMaxTris:0},medium:{Q:1,smooth:!0,subdiv:0,subdivMaxTris:0},low:{Q:0,smooth:!0,subdiv:0,subdivMaxTris:0}},Md=new WeakMap;function wd(r,e,t){let n=Md.get(r);n||(n=new Map,Md.set(r,n));let i=n.get(e);return i||(i=t(),i.userData.sbProcessed=e,n.set(e,i)),i}function Pd(r,e={}){var f,d,g,m;let t=Sd(e.quality),n=_d[t]||_d.high,i=(f=e.subdiv)!=null?f:n.subdiv,s=(d=e.subdivMaxTris)!=null?d:n.subdivMaxTris||1/0,a=(g=e.smoothAngle)!=null?g:50,o=(m=e.creaseAngle)!=null?m:40,c=e.roleOf||(p=>Td(p)),l=Object.assign({},e,{quality:t}),u=[];r.traverse(p=>{p.isMesh&&!p.userData.sbOutlineOf&&!p.isInstancedMesh&&u.push(p)});let h=0;for(let p of u){if(!(Array.isArray(p.material)?p.material:[p.material]).some(B=>B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)){h+=Tu(p.geometry);continue}let _=p.geometry,b=!!_.attributes.sbRole,v=!Array.isArray(p.material),A=b?"multi":v?c(p.material,p):null;if(e.geometry!==!1&&_.attributes.position&&!_.morphAttributes.position&&!p.material.flatShading){let B=Tu(_),S=_,R=!b&&v&&A?A:"",Y=ae=>(R&&Cu(ae,R),ae);i>0&&B<=s?_=wd(S,`sub${i}|${o}|${a}|${R}`,()=>Y(_y(S,i,{creaseAngle:o,normalAngle:a}))):n.smooth&&(_=wd(S,`sm${a}|${R}`,()=>Y(Cd(S,a)))),p.geometry=_}let P=!!p.geometry.attributes.sbRole;v?A!==null&&(p.material=yd(p.material,P?"multi":A,l)):p.material=p.material.map(B=>{let S=c(B,p);return S===null?B:yd(B,S,l)}),e.outline&&Ty(p,e.outline),h+=Tu(p.geometry)}return{tris:h,meshes:u.length}}kn.legacyMode=!1;var ei=Object.assign({tone:"aces",exposure:1.3,hemi:1.25,sun:2,rim:.8,front:.6,groundLift:.3,shadow:2048,pixelRatio:2},window.SB_GFX||{}),Ay=(()=>{let r=null,e=null,t=null,n=null,i=0,s=0,a=new Map,o=[],c=[],l=[],u=new F,h=0,f=0,d=new Map,g={},m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=()=>typeof G!="undefined"&&G.settings&&G.settings.speed||1,x=null;function _(){if(x!==null)return x;try{let T=document.createElement("canvas");return x=!!(T.getContext("webgl2")||T.getContext("webgl"))}catch{return x=!1}}let b={hask:"monarch",ulfgar:"monarch",gorrum:"monarch",thrain:"monarch",corvan:"monarch",odo:"monarch",mira:"hooded",wren:"hooded",kettle:"adventurer",ysolde:"hooded",nyx:"hooded",tamsin:"hooded",velka:"hooded",aurelia:"monarch",sable:"hooded",maelis:"monarch",morwenna:"hooded",seraphine:"hooded",brannoc:"adventurer",pell:"adventurer",lumen:"adventurer",kaito:"adventurer",oriel:"adventurer",vaelith:"adventurer"},v={hooded:"hooded_adventurer",adventurer:"adventurer",monarch:"monarch",titan:"yeti"},A={hooded:{DarkBrown:"armor",Black:"cloth",Brown:"cloth",LightBrown:"accent",Gold:"accent",Metal:"trim",Metal_Dark:"blade",Brown2:"wood",Skin:"skin","head:Black":"cloth","head:Brown":"eye","head:DarkBrown":"hood",White:"hair"},adventurer:{LightGreen:"armor",Green:"cloth",Brown:"pants",Brown2:"pants",Black:"boot",Grey:"boot",Hair:"hair",Eyebrows:"hair",Gold:"accent",Skin:"skin",Eye:"eye"},monarch:{Metal:"armor",Metal_Dark:"trim",Blue:"cloth",DarkBrown:"pants",Beige:"accent",Gold:"crown",Hair_White:"hair",Skin:"skin",Eye:"eye"},titan:{Yeti_Main:"stone",Yeti_Secondary:"stoneDark",Eye_White:"socket",Eye_Black:"maw",Yeti_Teeth:"fang",Tongue:"tongue"}},P={monarch:{head:"King_Head",body:"King_Body",legs:"King_Legs",feet:"King_Feet"},hooded:{head:"Medieval_Head",body:"Medieval_Body",legs:"Medieval_Legs",feet:"Medieval_Feet"},adventurer:{head:"Adventurer_Head",body:"Adventurer_Body",legs:"Adventurer_Legs",feet:"Adventurer_Feet"}},B={brannoc:{bulk:[.96,1,.96]},mira:{hide:["hood"],parts:{legs:"adventurer"},h:.95,head:1.04},pell:{shave:!0,h:.9,head:1.08,bulk:[.92,1,.95],arms:.94},odo:{bald:!0,parts:{body:"adventurer",legs:"adventurer"},h:1.03,bulk:[1.28,1.05,1.3],arms:1.3,legs:1.25,sh:.035,head:.94},wren:{h:.94},kettle:{parts:{head:"monarch",body:"hooded"},shave:!0,h:1.02,arms:1.15,bulk:[1.08,1,1.05],head:.95},ysolde:{hide:["hood"],bulk:[.94,1,.94]},corvan:{parts:{body:"adventurer"},h:.97},hask:{h:1,bulk:[1.15,1,1.12],sh:.025,arms:1.1},lumen:{shave:!0,parts:{body:"monarch"},h:1.06,head:.93},nyx:{h:.97,bulk:[.9,1,.9],arms:.92,legs:.92},tamsin:{hide:["hood"],parts:{body:"adventurer"},h:.98},gorrum:{bald:!0,h:1.1,bulk:[1.3,1.05,1.25],arms:1.3,legs:1.25,sh:.04,head:.92},velka:{hide:["hood"],h:1.03,bulk:[.92,1,.92]},aurelia:{hide:["hood"],parts:{head:"hooded"},h:1.03,head:1.02},sable:{hide:["hood"],h:1},kaito:{shave:!0,parts:{body:"hooded"},h:1.02,head:.96},maelis:{hide:["hood"],parts:{head:"hooded",legs:"hooded",feet:"hooded"},h:1.04},thrain:{parts:{body:"adventurer"},h:.88,bulk:[1.25,1,1.2],arms:1.25,legs:1.2,head:1.06,sh:.02},oriel:{shave:!0,h:1.04},vaelith:{hide:["hair"],parts:{body:"monarch",legs:"monarch",feet:"monarch"},h:1.06,head:.94},morwenna:{hide:["hood"],h:1.06},seraphine:{hide:["hood"],h:1.02},ulfgar:{h:1.08,bulk:[1.25,1.05,1.2],arms:1.2,legs:1.15,sh:.03}},S={brannoc:{brow:4,mouth:"smile",iris:"#5a3a1a"},mira:{brow:2,mouth:"flat",iris:"#2a7a8a"},pell:{brow:-10,mouth:"smile",iris:"#3a6a2a"},odo:{brow:-6,mouth:"smile",iris:"#3a2a1a"},wren:{brow:-12,mouth:"smile",iris:"#6a4a2a"},kettle:{brow:14,mouth:"smirk",iris:"#7a4ad8"},ysolde:{brow:16,mouth:"smirk",iris:"#ffa030"},corvan:{brow:-8,mouth:"flat",iris:"#3a8ad8"},hask:{brow:12,mouth:"frown",iris:"#4a5a3a"},lumen:{brow:6,mouth:"smile",iris:"#f0c040"},nyx:{brow:14,mouth:"flat",iris:"#c9a3ff"},tamsin:{brow:-4,mouth:"smile",iris:"#5a7a2a"},gorrum:{brow:18,mouth:"frown",iris:"#ff7a2a"},velka:{brow:-14,mouth:"frown",iris:"#9ad8ff"},aurelia:{brow:8,mouth:"flat",iris:"#e8c860"},sable:{brow:10,mouth:"smirk",iris:"#b48cff"},kaito:{brow:16,mouth:"flat",iris:"#4affb0"},maelis:{brow:10,mouth:"smirk",iris:"#2ad0ff"},thrain:{brow:8,mouth:"smile",iris:"#8a4a1a"},oriel:{brow:-8,mouth:"smile",iris:"#ffd060"},vaelith:{brow:18,mouth:"frown",iris:"#ffb020"},morwenna:{brow:14,mouth:"smirk",iris:"#d090ff"},seraphine:{brow:-12,mouth:"smile",iris:"#ffe080"},ulfgar:{brow:10,mouth:"flat",iris:"#8acaff"}},R=T=>Object.assign({},B[T],(window.SB_BODY_TEST||{})[T]),Y={idle:["Idle_Sword","Idle"],melee:["Sword_Slash","Punch_Right","Punch"],cast:["Gun_Shoot","Interact","Weapon","Punch"],hit:["HitRecieve","HitReact"],die:["Death"]},ae={},j=!1,K,J=new Promise(T=>{K=T});function ne(){let T=new Yo;T.setMeshoptDecoder(Wf);let w=window.SB_MODEL_DATA||{},C=N=>w[N]?T.parseAsync(Uint8Array.from(atob(w[N]),W=>W.charCodeAt(0)).buffer,""):T.loadAsync(`models/${N}.glb`),X=Object.entries(v).map(([N,W])=>C(W).then(H=>{H.scene.updateMatrixWorld(!0);let oe=1.55;H.scene.traverse(ge=>{if(ge.isBone&&ge.name==="Head"){let Re=new F;ge.getWorldPosition(Re),oe=Re.y}});let O={};for(let ge of H.animations)O[ge.name.split("|").pop()]=ge;ae[N]={scene:H.scene,clips:O,headY:oe}}).catch(H=>console.warn("Sigilbound: model failed to load",W,H)));Promise.all(X).then(()=>{j=!0,K()})}let le=(T=8e3)=>Promise.race([J,new Promise(w=>setTimeout(w,T))]).then(()=>{j=!0});function me(){if(g.box)return g;g.box=new Ai(1,1,1),g.sphere=new Di(.5,20,14),g.capsule=new Fo(.5,1,6,14),g.cyl=new In(.5,.5,2,20),g.rod=new In(.5,.5,1,18),g.disc=new In(.5,.5,1,36),g.cone=new Cr(.5,1,18),g.taper=new In(.5,.32,1,36,4),g.bell=new In(.22,.5,1,16),g.ring=new Rr(.5,.07,8,40),g.hook=new Rr(.5,.18,6,14,Math.PI*1.25),g.crook=new Rr(.5,.2,6,12,Math.PI),g.octa=new ms(.5),g.rock=(()=>{let w=new $i(.5,1),C=w.attributes.position,X=new F;for(let N=0;N<C.count;N++){X.fromBufferAttribute(C,N);let W=1+.12*Math.sin(X.x*23.1+X.y*17.3)*Math.cos(X.z*19.7-X.y*7.1);C.setXYZ(N,X.x*W,X.y*W,X.z*W)}return w.computeVertexNormals(),w})(),g.half=new In(.5,.5,1,12,1,!1,0,Math.PI),g.dome=new Di(.5,24,10,0,Math.PI*2,0,Math.PI/2),g.bbox=Qf(1,1,1,.14,2);let T=(w,C=32)=>{let X=new Ra(w.map(([N,W])=>new Oe(N,W)),C);return X.computeVertexNormals(),X};return g.helm=T([[.53,-.04],[.55,0],[.52,.04],[.5,.12],[.48,.3],[.42,.5],[.33,.66],[.2,.79],[.07,.86],[0,.875]]),g.shell=T([[.54,-.02],[.53,.03],[.5,.06],[.47,.18],[.4,.36],[.3,.5],[.18,.58],[.1,.63],[0,.64]],28),g.boss=T([[.5,0],[.5,.1],[.42,.18],[.36,.42],[.22,.62],[.08,.72],[0,.74]],28),g.gem=new ms(.5,1),g.breast=$f(.3,.27,.03,.07,{curve:.17,curveY:.45,cornerSeg:4,seg:6}),g}function q(T,w=0){let C=`l${T}${w}`;return d.has(C)||d.set(C,new Ht({color:new De(T),roughness:w?.35:.65,metalness:w})),d.get(C)}function ie(T,w=1){let C=`g${T}${w}`;return d.has(C)||d.set(C,new sn({color:new De(T),transparent:w<1,opacity:w,depthWrite:w>=1,toneMapped:!1})),d.get(C)}function Q(T,w,C,X,N,W){let H=new St(typeof T=="string"?me()[T]:T,N);return H.position.set(C[0],C[1],C[2]),H.scale.set(X[0],X[1],X[2]),W&&(H.rotation.order="YXZ",H.rotation.set(W[0]*Math.PI/180,W[1]*Math.PI/180,W[2]*Math.PI/180)),H.castShadow=!0,w.add(H),H}let Ce=new Map;function se(T,w,C,X,N=16,W=8){let H=[T,w,C,X].join("|");if(Ce.has(H))return Ce.get(H);let oe=[],O=[],ge=[];for(let he=0;he<=W;he++)for(let Ee=0;Ee<=N;Ee++){let nt=Ee/N,Mt=he/W,ke=T+(w-T)*Mt,xt=nt*2-1;oe.push(xt*ke/2,-Mt*C,-X*(1-xt*xt)*(.7+.3*Mt)+Math.sin(xt*3+1)*.012*Mt),O.push(nt*ke*3,Mt*C*3)}for(let he=0;he<W;he++)for(let Ee=0;Ee<N;Ee++){let nt=he*(N+1)+Ee,Mt=nt+1,ke=nt+N+1,xt=ke+1;ge.push(nt,ke,Mt,Mt,ke,xt)}let Re=new Ct;Re.setAttribute("position",new lt(oe,3)),Re.setAttribute("uv",new lt(O,2)),Re.setIndex(ge),Re.computeVertexNormals();let _e=Re.toNonIndexed();return _e.computeVertexNormals(),Ce.set(H,_e),_e}function be(T,w){let C=new Kt;return C.position.set(w[0],w[1],w[2]),T.add(C),C}let we=(T,w,C)=>"#"+new De(T).lerp(new De(w),C).getHexString(),Fe=(T,w)=>"#"+new De(T).multiplyScalar(w).getHexString();function fe(T,w){let C=document.createElement("canvas");C.width=2,C.height=256;let X=C.getContext("2d"),N=X.createLinearGradient(0,0,0,256);N.addColorStop(0,T),N.addColorStop(1,w),X.fillStyle=N,X.fillRect(0,0,2,256);let W=new pi(C);return W.encoding=yt,W}function ct(){let T=document.createElement("canvas");T.width=T.height=128;let w=T.getContext("2d");w.fillStyle="#b8b8b8",w.fillRect(0,0,128,128);let C=7,X=()=>(C=(C*9301+49297)%233280)/233280;for(let W=0;W<260;W++){let H=150+Math.floor(X()*105),oe=2+X()*9;w.fillStyle=`rgba(${H},${H},${H},0.18)`,w.beginPath(),w.arc(X()*128,X()*128,oe,0,7),w.fill()}let N=new pi(T);return N.wrapS=N.wrapT=Kn,N.encoding=yt,N}let st=null;function Je(){if(st)return st;let T=document.createElement("canvas");T.width=T.height=64;let w=T.getContext("2d"),C=w.createRadialGradient(32,32,0,32,32,32);return C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.4,"rgba(255,255,255,.6)"),C.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=C,w.fillRect(0,0,64,64),st=new pi(T)}function We(T){return[["#1f2b46","#c9805a","#2a2a22","#16141f"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e"],["#1a2e2a","#7fa088","#23362a","#101c16"],["#28203a","#c8a870","#2c2640","#14101e"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0"],["#101a2e","#5a7ab0","#1a2440","#0c1220"],["#0e0a16","#3a2a5a","#180f26","#b080ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606"]][((T||0)%10+10)%10]}function tt(T,w){Xe(),n=T,an=!!w.titan,r=new Oa({antialias:!0,alpha:!1,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(ei.pixelRatio,window.devicePixelRatio||1)),r.outputEncoding=yt,r.toneMapping=ei.tone==="aces"?ka:ei.tone==="linear"?Nl:ai,r.toneMappingExposure=ei.exposure,r.shadowMap.enabled=!0,r.shadowMap.type=Or,r.domElement.className="w3d-canvas",T.prepend(r.domElement),e=new fs;let C=w.titan?["#1a0a0a","#c0401a","#24100c","#100606"]:We(w.chapter);e.background=fe(C[0],C[1]),e.fog=new Sr(new De(C[1]),18,48),e.environment=Zo(r,{size:xe(r).current==="Ultra"?256:64});let X=new Dr(new De(we(C[1],"#ffffff",.35)),new De(C[2]),ei.hemi);e.add(X);let N=new Jn(16773597,ei.sun);N.position.set(-5,10,6),N.castShadow=!0,N.shadow.mapSize.set(ei.shadow,ei.shadow),N.shadow.radius=3,N.shadow.bias=-4e-4,N.shadow.normalBias=.02,Object.assign(N.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),e.add(N);let W=new Jn(10070783,ei.rim);W.position.set(4,5,-8),e.add(W);let H=new Jn(16777215,ei.front);H.position.set(0,4,10),e.add(H);let oe=xe(r);try{Ve=bd(e,{chapter:w.titan?9:w.chapter||0,titan:!!w.titan,quality:oe.current.toLowerCase(),renderer:r})}catch(O){console.warn("Sigilbound: arena failed, using the plain field",O),Ve=null}Ve?Ve.colors&&Ve.colors.hemiSky&&(X.color.copy(Ve.colors.hemiSky),Ve.colors.hemiGround&&X.groundColor.copy(Ve.colors.hemiGround)):Ge(C,w),N.shadow.camera.left=N.shadow.camera.bottom=-9,N.shadow.camera.right=N.shadow.camera.top=9,t=new mn(50,1,.1,150);try{Ot=sd(r,e,t,{quality:oe.current}),Ot.params.exposure=ei.exposure}catch(O){console.warn("Sigilbound: post-processing unavailable",O),Ot=null}r.domElement.addEventListener("webglcontextrestored",()=>{Ot&&U&&Ot.setQuality(U.current)}),Ue(),window.addEventListener("resize",Ue),s=performance.now(),i=requestAnimationFrame(Du)}let Ve=null;function Ge(T,w){let C=new Ht({color:new De(we(T[2],"#8c8680",ei.groundLift)),roughness:1,map:ct()});C.map.repeat.set(24,24);let X=new St(new di(120,120),C);X.rotation.x=-Math.PI/2,X.receiveShadow=!0,e.add(X);let N=new St(new gs(3.4,3.6,64),ie("#ffffff",.08));N.rotation.x=-Math.PI/2,N.position.set(0,.01,-.6),N.scale.set(1.25,1,1),e.add(N),dn(w.titan?2:(w.chapter||0)%5,T,w.chapter||0)}function dn(T,w,C){let X=C*9301+49297,N=()=>(X=(X*9301+49297)%233280)/233280,W=q(w[3]),H=ie(we(w[1],"#ffffff",.3),.7);for(let oe=0;oe<30;oe++){let O=N()*Math.PI*2,ge=7.5+N()*10,Re=Math.cos(O)*ge,_e=Math.sin(O)*ge*.8-5;if(_e>4||_e>-4.5&&Math.abs(Re)<7)continue;let he=.6+N()*1.4;T===0?(Q("cyl",e,[Re,.65*he,_e],[.25*he,.65*he,.25*he],W),Q("capsule",e,[Re,2*he,_e],[1.4*he,.8*he,1.4*he],W)):T===1||T===3?Q("cyl",e,[Re,.5*he,_e],[.12,.5*he,.12],W):T===2?Q("box",e,[Re,.7*he,_e],[1.2*he,1.6*he,1*he],W,[N()*30-15,N()*90,N()*30-15]):oe%2?Q("box",e,[Re,1.2*he,_e],[.5*he,2.4*he,.5*he],W):Q("box",e,[Re,.8*he,_e],[.35*he,1.6*he,.35*he],H,[0,45,N()*40-20])}}let rn=new F(0,1,-.5),an=!1,bn=50,ft={classic:{name:"Classic",yaw:0,pitch:34},high:{name:"Overhead",yaw:0,pitch:60},low:{name:"Cinematic",yaw:0,pitch:16},angle:{name:"Three-quarter",yaw:38,pitch:30},front:{name:"Hero view",yaw:180,pitch:30}},ut=()=>{let T=typeof G!="undefined"&&G.settings&&G.settings.cam;return ft[T]?T:"angle"};function Nn(T){ft[T]&&typeof G!="undefined"&&(G.settings.cam=T,typeof save=="function"&&save()),r&&Ue()}let Ot=null,U=null,I=()=>(U?U.current:"High").toLowerCase();function xe(T){return U||(U=ad({initial:ic(T),onChange:w=>{Ot&&Ot.setQuality(w)}})),U}function Ne(T){xe(r).force(T||"auto")}function Ue(){if(!r||!n)return;let T=n.clientWidth||1,w=n.clientHeight||1;Ot?Ot.setSize(T,w):r.setSize(T,w,!1),t.aspect=T/w,t.fov=bn=t.aspect<.75?62:50;let C=ft[ut()],X=C.pitch*ze,N=C.yaw*ze,W=[];for(let Re of[-1,1])for(let _e=0;_e<=6;_e++){let he=_e/6*Math.PI,Ee=Re*Math.sin(he)*(4.2+.4),nt=-.6+Math.cos(he)*(3.95+.4);W.push([Ee,0,nt]),W.push([Ee,nt>0?2.75:3.3,nt])}W.push([0,3.75,-3.95]),an&&(W.push([0,5.6,-4]),W.push([-2.3,3.4,-4]),W.push([2.3,3.4,-4]));let H=new F,oe=Re=>{let _e=Math.cos(X)*Re;return t.position.set(rn.x+Math.sin(N)*_e,rn.y+Math.sin(X)*Re,rn.z+Math.cos(N)*_e),t.lookAt(rn),t.updateMatrixWorld(),t.updateProjectionMatrix(),W.every(he=>(H.set(he[0],he[1],he[2]).project(t),Math.abs(H.x)<=.95&&H.y<=.84&&H.y>=-.84))},O=5,ge=40;for(let Re=0;Re<22;Re++){let _e=(O+ge)/2;oe(_e)?ge=_e:O=_e}oe(ge),u.copy(t.position)}function Xe(){if(Rs=0,Xs=0,Ys=0,Xr++,cancelAnimationFrame(i),i=0,window.removeEventListener("resize",Ue),r){if(Ot&&(Ot.dispose(),Ot=null),Ve){try{Ve.dispose()}catch{}Ve=null}r.domElement.remove(),Qo(r),r.dispose()}r=e=t=n=null,a.clear(),o=[],c=[],l=[]}function bt(T,w){let C=N=>w?we(N,"#2e1f33",.5):N,X=SKIN[T.skin];return{armor:C(T.armor),cloth:C(T.cloth||Fe(T.armor,.62)),pants:C(T.pants||we(T.cloth||T.armor,"#2a2522",T.cloth?.35:.6)),accent:C(T.accent),trim:C(T.trim||we(T.accent,"#c8ccd4",.4)),blade:C("#c8d0dc"),wood:C("#6b4a29"),boot:C(T.boot||"#2a1f1a"),hair:C(T.hair),brow:C(Fe(T.hair,.8)),hood:C(T.hood||T.armor),skin:C(X),crown:C(T.accent),eye:w?"#ff2a2a":T.glow||"#1a141f"}}let Ye=(T,w,C)=>(A[T]||{})[`${w}:${C}`]||(A[T]||{})[C],Se=(T,w)=>{let C=P[T];if(C){for(let X in C)if(C[X]===w)return X}return""};function at(T,w,C){let X={};T.traverse(N=>{N.isBone&&(X[N.name]=N)});for(let[N,W]of Object.entries(C)){let H=T.getObjectByName(P[w][N]);if(W===w)continue;let oe=ae[W],O=oe&&P[W]&&oe.scene.getObjectByName(P[W][N]);if(W!=="none"&&!O)continue;let ge=H?H.parent:T;if(H&&ge.remove(H),W==="none")continue;let Re=O.clone(!0);Re.traverse(_e=>{if(_e.userData.sbBase=W,_e.userData.sbKind=N,!_e.isSkinnedMesh)return;let he=_e.skeleton;_e.bind(new ds(he.bones.map(Ee=>X[Ee.name]||Ee),he.boneInverses.map(Ee=>Ee.clone())),_e.bindMatrix.clone())}),ge.add(Re)}}function ht(T,w){let C={};T.traverse(W=>{W.isBone&&(C[W.name]=W)});let X=new Pn,N=(W,H)=>{if(W){W.scale.set(H[0],H[1],H[2]);for(let oe of W.children){if(!oe.isBone)continue;X.setFromMatrix4(new gt().makeRotationFromQuaternion(oe.quaternion));let O=X.elements,ge=[1/H[0],1/H[1],1/H[2]];oe.scale.set(O[0]*O[0]*ge[0]+O[1]*O[1]*ge[1]+O[2]*O[2]*ge[2],O[3]*O[3]*ge[0]+O[4]*O[4]*ge[1]+O[5]*O[5]*ge[2],O[6]*O[6]*ge[0]+O[7]*O[7]*ge[1]+O[8]*O[8]*ge[2])}}};if(w.bulk&&N(C.Chest,w.bulk),w.arms)for(let W of["UpperArmL","UpperArmR","LowerArmL","LowerArmR"])N(C[W],[w.arms,1,w.arms]);if(w.legs)for(let W of["UpperLegL","UpperLegR"])N(C[W],[w.legs,1,w.legs]);if(w.sh)for(let[W,H]of[["ShoulderL",1],["ShoulderR",-1]]){let oe=C[W];if(!oe)continue;T.updateMatrixWorld(!0);let O=new F;oe.parent.getWorldScale(O),oe.position.x+=H*w.sh*T.scale.x/(O.x||1)}w.head&&C.Head&&C.Head.scale.multiplyScalar(w.head)}let $e=new Map;function ot(T,w){let C=T.geometry.uuid+w;if($e.has(C))return $e.get(C);let X=T.skeleton,N=X.bones.findIndex(Ee=>Ee.name==="Head"),W=T.geometry,H=W.attributes.position,oe=W.index,O=new gt().multiplyMatrices(X.boneInverses[N],T.bindMatrix),ge=new F,Re=[],_e=oe?oe.count:H.count;for(let Ee=0;Ee<_e;Ee+=3){let nt=0,Mt=0;for(let xt=0;xt<3;xt++)ge.fromBufferAttribute(H,oe?oe.getX(Ee+xt):Ee+xt).applyMatrix4(O).multiplyScalar(100),nt+=ge.y/3,Mt+=ge.z/3;if((nt<.075&&Mt>-.03)===(w==="beard"))for(let xt=0;xt<3;xt++)Re.push(oe?oe.getX(Ee+xt):Ee+xt)}let he=W.clone();return he.setIndex(Re),$e.set(C,he),he}function rt(T,w,C,X,N){let W=ae[w];if(!W)return null;let H=w==="titan"?null:LOOKS[T]||LOOKS.brannoc,oe=w==="titan"?{}:R(T),O=H&&H.kit||{},ge=qf(W.scene),Re=O.robe==="long"?Object.assign({legs:"none"},oe.parts):oe.parts;Re&&at(ge,w,Re);let _e=[],he=X&&ELEMENTS[X]?ELEMENTS[X].color:"#e8553a",Ee=w==="titan"?{stone:"#16130f",stoneDark:"#0c0a09",fang:"#0e0c0a",socket:"#040303",tongue:"#0a0606"}:bt(H,C),nt=new Set(oe.hide||[]),Mt=H&&H.gear==="crown"&&!nt.has("crown");ge.traverse($t=>{if(!$t.isMesh)return;$t.castShadow=!0,$t.frustumCulled=!1;let vn=w,ln="";for(let un=$t;un&&un!==ge;un=un.parent)if(un.userData.sbBase){vn=un.userData.sbBase,ln=un.userData.sbKind;break}if(!ln)for(let un=$t;un&&un!==ge&&!ln;un=un.parent)ln=Se(w,un.name);!Array.isArray($t.material)&&Ye(vn,ln,$t.material.name)==="hair"&&ln==="head"&&vn!=="hooded"&&(oe.shave||oe.bald)&&($t.geometry=ot($t,oe.bald?"beard":"scalp"));let k=un=>{let Et=Ye(vn,ln,un.name),Vt=un.clone();if(Et==="crown"&&!Mt||Et==="tongue"||nt.has(Et)||nt.has(`${ln}:${Et}`))return Vt.visible=!1,Vt;if(Et==="maw")return Vt.color.set(Fe(he,.3)),Vt.emissive=new De(he),Vt.emissiveIntensity=1.8,Vt.metalness=0,Vt;if(Et==="eye"&&(C||H&&H.glow))return Vt.color.set(Ee.eye),Vt.emissive=new De(Ee.eye),Vt.emissiveIntensity=3,Vt;Et&&Et!=="keep"&&Ee[Et]?Vt.color.set(Ee[Et]):C&&Vt.color.lerp(new De("#2e1f33"),.5),Et==="armor"&&vn==="monarch"&&(Vt.metalness=.2,Vt.roughness=.55),w==="titan"&&(Vt.metalness=0,Vt.roughness=.95),(Et==="blade"||Et==="trim")&&(Vt.metalness=.3,Vt.roughness=.5);let Qt=Et==="armor"&&vn==="monarch"||Et==="trim"||Et==="blade"||Et==="crown";return Vt.envMapIntensity=w==="titan"?.15:Qt?.8:.25,w!=="titan"&&(Vt.roughness=Qt?.5:.8,Vt.metalness=Qt?.3:0),O.seams&&(Et==="armor"||Et==="trim"||Et==="pants")&&Ke(Vt,C?"#ff2a2a":O.seams,_e,O.seamScale||3.2),Vt.userData.sbRole=Ad(Et,vn,un.name)||"default",Vt};$t.material=Array.isArray($t.material)?$t.material.map(k):k($t.material)});let ke=new Kt;ke.add(ge);let xt=w==="titan"?3.6:1.85,Ei=oe.h||1;ge.scale.setScalar(xt/W.headY*Ei);let Ci=new Vo(ge),Pt=$t=>{for(let vn of Y[$t])if(W.clips[vn])return W.clips[vn];return null},It={};for(let $t of Object.keys(Y)){let vn=Pt($t);vn&&(It[$t]=Ci.clipAction(vn))}let re=Me(Ci,W,w==="titan"?te:fn(T,H),It);if(H){Ft(T,H,w,ge,C,_e,oe,N),qr(ge,`${T}|${C?1:0}|${w}|${yi(N)}`),jr(ge,`${T}|${C?1:0}|${w}`),ht(ge,oe);try{Pd(ge,{quality:I(),rimColor:C?"#ff3355":X&&ELEMENTS[X]?ELEMENTS[X].color:"#9fb4ff"})}catch($t){console.warn("Sigilbound: character shading failed",$t)}}else Jt(ge,X,_e);return{model:ke,mixer:Ci,actions:It,anim:re,fx:_e,height:w==="titan"?4.7:2.3*Ei}}let Rt={odo:1,kettle:1,gorrum:1,thrain:1},Gt={candle:1,mirror:1,bell:1,orb:1,lantern:1};function fn(T,w){let C=w.prop;return{idle:Gt[C]?"Idle_Neutral":C==="bow"?"Idle_Gun":"Idle_Sword",strike:Rt[T]?["Punch_Right","Punch_Left","Kick_Right"]:C==="daggers"?["Sword_Slash","Punch_Left","Kick_Left"]:C==="spear"||C==="trident"?["Sword_Slash","Kick_Right"]:["Sword_Slash","Sword_Slash","Kick_Right"],cast:"Gun_Shoot",support:"Interact",fidget:["Idle","Idle_Neutral","Interact"],win:"Wave"}}let te={idle:"Idle",strike:["Punch","Weapon","Punch"],cast:"Punch",support:"Yes",fidget:["No"],win:"Yes",titan:!0};function Me(T,w,C,X){let N={},W=O=>w.clips[O]?N[O]||(N[O]=T.clipAction(w.clips[O])):null,H=w.clips[C.idle]?C.idle:Object.keys(w.clips).find(O=>/^Idle/.test(O)),oe={S:C,cur:null,strikeN:0,hold:!1,has:O=>!!w.clips[O],play(O,ge={}){let Re=W(O);if(!Re)return null;let _e=oe.cur;return Re.reset(),Re.setLoop(ge.loop?Wo:Bl,ge.loop?1/0:1),Re.clampWhenFinished=!!ge.clamp,Re.setEffectiveTimeScale(ge.speed||(C.titan&&O===H?.7:1)),Re.setEffectiveWeight(1),Re.play(),_e&&_e!==Re&&_e.crossFadeTo(Re,ge.fade==null?.18:ge.fade,!1),oe.cur=Re,oe.hold=!!ge.hold,Re},idle(O=.25){return oe.play(H,{loop:!0,fade:O})},strike(){let O=C.strike.filter(ge=>w.clips[ge]);return oe.play(O[oe.strikeN++%O.length]||"Sword_Slash",{fade:.1})},duration:O=>w.clips[O]?w.clips[O].duration:0};return H&&(X.idle=W(H)),oe.idle(0),T.addEventListener("finished",O=>{O.action!==oe.cur||O.action.clampWhenFinished||oe.hold||oe.idle(.22)}),oe}let Ie=new Map,ze=Math.PI/180,et={monarch:{top:.26,r:.13,face:.15,eye:.09,crown:.18},adventurer:{top:.25,r:.12,face:.14,eye:.09,crown:.18},hooded:{top:.27,r:.15,face:.16,eye:.09,crown:.25},hair:{top:.25,r:.12,face:.14,eye:.1,crown:.2},bald:{top:.235,r:.11,face:.135,eye:.09,crown:.17}};function mt(T){T.updateMatrixWorld(!0);let w=new Map;return T.traverse(C=>{if(!C.isMesh)return;let X=C.geometry.clone().applyMatrix4(C.matrixWorld),N=X.index?X.toNonIndexed():X;w.has(C.material)||w.set(C.material,[]),w.get(C.material).push(N)}),[...w].map(([C,X])=>({mat:C,geo:Xo(X)}))}let Bt=new Map,on=new Map;function li(T){if(T.transparent&&T.isMeshBasicMaterial){let N=T.opacity<.45?.3:.6,W=`glow|${N}`,H=Bt.get(W);return H||(H=T.clone(),H.color=new De(1,1,1),H.opacity=N,H.vertexColors=!0,H.userData.shared=!0,Bt.set(W,H)),{key:W,mat:H}}let w=N=>N==null?"":N.toFixed(2);if(T.userData.crack){let N=`crack|${T.userData.crack}|${w(T.roughness)}|${w(T.metalness)}`,W=Bt.get(N);return W||(W=T.clone(),W.onBeforeCompile=T.onBeforeCompile,W.customProgramCacheKey=T.customProgramCacheKey,W.color=new De(1,1,1),W.vertexColors=!0,W.userData.shared=!0,Bt.set(N,W)),{key:N,mat:W}}let C=[T.type,T.map?T.map.uuid:"",w(T.roughness),w(T.metalness),T.side,T.transparent?T.opacity:1,w(T.envMapIntensity),T.bumpScale||0,T.emissive?T.emissive.getHexString()+T.emissiveIntensity:""].join("|"),X=Bt.get(C);return X||(X=T.clone(),X.color=new De(1,1,1),X.vertexColors=!0,X.userData.shared=!0,Bt.set(C,X)),{key:C,mat:X}}let Ut=T=>{let w=T.count,C=T.itemSize,X=new Float32Array(w*C),N=[T.getX,T.getY,T.getZ,T.getW];for(let W=0;W<w;W++)for(let H=0;H<C;H++)X[W*C+H]=N[H].call(T,W);return new pt(X,C)},ti={"dm-metal":"metal","dm-gold":"gold","dm-leather":"leather","dm-cloth":"cloth","dm-wood":"leather","dm-hair":"hair","dm-bone":"leather","dm-skin":"skin","dm-gem":"gem","dm-stone":"leather"},An=T=>T.userData.sbRole||ti[T.name]||(T.isMeshBasicMaterial?"gem":"default");function ts(T,w,C,X){let N=new Ct;for(let O of["position","normal","uv",...C?["skinIndex","skinWeight"]:[]])T.attributes[O]&&N.setAttribute(O,Ut(T.attributes[O]));T.index&&N.setIndex(T.index);let W=N.index?N.toNonIndexed():N;W.attributes.uv||W.setAttribute("uv",new lt(new Float32Array(W.attributes.position.count*2),2));let H=W.attributes.position.count,oe=new Float32Array(H*3);for(let O=0;O<H;O++)oe[O*3]=w.r,oe[O*3+1]=w.g,oe[O*3+2]=w.b;return W.setAttribute("color",new pt(oe,3)),X&&Cu(W,X),W}function qr(T,w){let C=[];if(T.traverse(O=>{O.isMesh&&O.userData.kit&&C.push(O)}),!C.length)return;let X=C.map(O=>{let ge=new Ws;return O.add(ge),O.visible=!1,ge}),N=on.get(w);if(!N){let O=new Map;C.forEach((ge,Re)=>{let _e=li(ge.material),he=ts(ge.geometry,ge.material.color,!1,An(ge.material)),Ee=he.attributes.position.count,nt=new Uint16Array(Ee*4),Mt=new Float32Array(Ee*4);for(let ke=0;ke<Ee;ke++)nt[ke*4]=Re,Mt[ke*4]=1;he.setAttribute("skinIndex",new Zi(nt,4)),he.setAttribute("skinWeight",new lt(Mt,4)),O.has(_e.key)||O.set(_e.key,{mat:_e.mat,list:[]}),O.get(_e.key).list.push(he)}),N=[...O.values()].map(({mat:ge,list:Re})=>({mat:ge,geo:Xo(Re)})),on.set(w,N)}T.updateMatrixWorld(!0);let W=new Kt;T.add(W),W.updateMatrixWorld(!0);let H=W.matrixWorld.clone().invert(),oe=new ds(X,X.map(()=>H.clone()));for(let{mat:O,geo:ge}of N){let Re=new Qi(ge,O);Re.frustumCulled=!1,Re.castShadow=!O.isMeshBasicMaterial,Re.userData.kitMerged=1,W.add(Re),Re.updateMatrixWorld(!0),Re.bind(oe,Re.matrixWorld.clone())}}function jr(T,w){let C=[];T.traverse(H=>{H.isSkinnedMesh&&!H.userData.kit&&!H.userData.kitMerged&&H.parent&&!H.parent.isBone&&C.push(H)});let X=[],N=(H,oe)=>H.elements.every((O,ge)=>Math.abs(O-oe.elements[ge])<.001*(1+Math.abs(O))),W=(H,oe)=>{let O=null;for(let ge=0;ge<oe.skeleton.bones.length;ge++){let Re=H.bones.indexOf(oe.skeleton.bones[ge]);if(!(Re<0)){if(!O){O=H.inverses[Re].clone().invert().multiply(oe.skeleton.boneInverses[ge]);continue}if(!N(H.inverses[Re].clone().multiply(O),oe.skeleton.boneInverses[ge]))return null}}return O||new gt};for(let H of C){let oe=H.material;if(Array.isArray(oe)||oe.map)continue;if(!H.visible||!oe.visible){H.parent.remove(H);continue}let O=li(oe),ge=null,Re=null;for(let he of X)if(he.key===O.key&&(Re=W(he,H))){ge=he;break}ge||(ge={key:O.key,mat:O.mat,bones:[],inverses:[],list:[],xs:[]},X.push(ge),Re=new gt);let _e=Re.clone().invert();H.skeleton.bones.forEach((he,Ee)=>{ge.bones.indexOf(he)<0&&(ge.bones.push(he),ge.inverses.push(H.skeleton.boneInverses[Ee].clone().multiply(_e)))}),ge.list.push(H),ge.xs.push(Re)}X.forEach((H,oe)=>{let O=H.list[0],ge=`${w}|${oe}|${H.key}|${H.list.length}`,Re=on.get(ge);if(!Re){let he=new gt,Ee=new Pn;Re=Xo(H.list.map((nt,Mt)=>{let ke=ts(nt.geometry,nt.material.color,!0,An(nt.material));he.copy(O.bindMatrix).invert().multiply(H.xs[Mt]).multiply(nt.bindMatrix),ke.applyMatrix4(he);let xt=ke.attributes.skinIndex,Ei=nt.skeleton.bones.map(Pt=>H.bones.indexOf(Pt)),Ci=new Uint16Array(xt.count*4);for(let Pt=0;Pt<xt.count;Pt++)for(let It=0;It<4;It++)Ci[Pt*4+It]=Math.max(0,Ei[Math.round(xt.array[Pt*4+It])]);if(ke.setAttribute("skinIndex",new Zi(Ci,4)),ke.attributes.skinWeight.normalized||!(ke.attributes.skinWeight.array instanceof Float32Array)){let Pt=ke.attributes.skinWeight,It=new Float32Array(Pt.count*4);for(let re=0;re<Pt.count;re++)It[re*4]=Pt.getX(re),It[re*4+1]=Pt.getY(re),It[re*4+2]=Pt.getZ(re),It[re*4+3]=Pt.getW(re);ke.setAttribute("skinWeight",new lt(It,4))}return ke})),on.set(ge,Re)}let _e=new Qi(Re,H.mat);_e.position.copy(O.position),_e.quaternion.copy(O.quaternion),_e.scale.copy(O.scale),_e.castShadow=!0,_e.frustumCulled=!1,O.parent.add(_e),_e.bind(new ds(H.bones,H.inverses.map(he=>he.clone())),O.bindMatrix.clone());for(let he of H.list)he.parent.remove(he)})}function Es(T){let w=new Kt;for(let{mat:C,geo:X}of T){let N=new St(X,C);N.castShadow=!C.isMeshBasicMaterial,N.frustumCulled=!1,w.add(N)}return w}function D(T,w,C,X,N=0){let W=new F;T.getWorldScale(W);let H=new Kt;H.scale.setScalar(w.scale.x/(W.x||1)),T.add(H);let oe=new Kt;if(oe.position.set(C[0],C[1],C[2]),X){let O=new F(X[0],X[1],X[2]).normalize();oe.quaternion.setFromUnitVectors(new F(0,1,0),O),N&&oe.quaternion.multiply(new yn().setFromAxisAngle(new F(0,1,0),N*ze))}return H.add(oe),oe}let y=(T,w)=>[T==="R"?-Math.cos(w*ze):Math.cos(w*ze),-Math.sin(w*ze),0],M={R:[0,.075,.01],L:[0,.075,.01]},E=new gt,L=new yn,$=new F,V=new F;function Z(T,w,C=[0,0,0]){w.updateMatrixWorld(!0),T.getWorldScale(V);let X=new Kt;X.scale.setScalar(w.scale.x/(V.x||1)),T.add(X),E.copy(w.matrixWorld).invert().multiply(T.matrixWorld).decompose($,L,V);let N=new Kt;return N.quaternion.copy(L).invert(),N.position.set(C[0],C[1],C[2]).applyQuaternion(N.quaternion),X.add(N),N}function ee(T,w){return w.updateMatrixWorld(!0),E.copy(w.matrixWorld).invert().multiply(T.matrixWorld),$.setFromMatrixPosition(E).y}let ue=["","#6b5d50","#9aa3ad","#c6ced8","#dfe3ea","#f0e6d0"],ye=["","#8a7a68","#5bc46a","#4aa3ff","#b46cff","#ffb02e"],Ae={fury:"#ff4a3a",vigor:"#4ae07a",bulwark:"#b8b4aa",haste:"#3ad8cc",keen:"#ffd040"},Ze=T=>T?`${T.r}${T.s?T.s[0]:"-"}`:"0",Tt={helm:1,horns:1},Wt={crown:1,halo:1,circlet:1,veil:1,mask:1},Nt=new F,vt=new yn;function qe(T,w){return(C,X)=>{let N=C.userData.sp||(C.userData.sp={p:new F,t:X,ax:0,az:0,vx:0,vz:0,on:!1,addX:0,addZ:0});C.rotation.x-=N.addX,C.rotation.z-=N.addZ,N.addX=N.addZ=0,T(C,X);let W=Math.min(.05,Math.max(.001,X-N.t));if(N.t=X,!C.parent)return;C.parent.getWorldPosition(Nt),N.on||(N.p.copy(Nt),N.on=!0);let H=Nt.clone().sub(N.p).divideScalar(W);N.p.copy(Nt),H.length()>3&&H.setLength(3),C.parent.getWorldQuaternion(vt),H.applyQuaternion(vt.invert());let oe=(Re,_e,he)=>Math.max(_e,Math.min(he,Re)),O=oe((H.z*.08-H.y*.04)*w,-.12,.42),ge=oe(-H.x*.08*w,-.3,.3);N.vx+=((O-N.ax)*70-N.vx*16.7)*W,N.ax+=N.vx*W,N.vz+=((ge-N.az)*70-N.vz*16.7)*W,N.az+=N.vz*W,N.ax=oe(N.ax,-.15,.45),N.az=oe(N.az,-.32,.32),(!isFinite(N.ax)||!isFinite(N.az))&&(N.ax=N.az=N.vx=N.vz=0),C.rotation.x+=N.ax,C.rotation.z+=N.az,N.addX=N.ax,N.addZ=N.az}}function Ft(T,w,C,X,N,W,H={},oe=null){let O=w.kit||{},ge=H.parts&&H.parts.head||C,Re=new Set(H.hide||[]),_e=ge==="hooded"&&!Re.has("hood"),he=_e?et.hooded:ge==="hooded"?et.hair:H.bald||Re.has("hair")?et.bald:et[ge]||et.adventurer,Ee={};X.traverse(z=>{z.isBone&&(Ee[z.name]=z)}),X.updateMatrixWorld(!0);let nt=z=>N?we(z,"#2e1f33",.5):z,Mt=U?U.preset.textureSize:256,ke=(z,de=0)=>de>=.5?Oi("metal",nt(z),{metalness:.75,size:Mt}):de>0?Oi("leather",nt(z),{roughness:.55,metalness:.35,size:Mt}):Oi("leather",nt(z),{size:Mt}),xt=z=>Oi("cloth",nt(z),{side:hn,repeat:4,bump:.6,size:Mt}),Ei=z=>Oi("wood",nt(z),{size:Mt}),Ci=z=>Oi("gold",nt(z),{size:Mt}),Pt=(z,de=1)=>ie(N?we(z,"#ff3355",.45):z,de),It=oe&&oe.weapon,re={steel:ke(It?ue[It.r]:"#c4ccd6",It&&It.r===1?.3:.6),iron:ke("#4a4a52",.5),wood:Ei("#6b4a29"),leather:ke("#3a2a20"),acc:ke(w.accent,.35),accG:Pt(w.accent),accH:Pt(w.accent,.28),armor:ke(w.armor),armorD:ke(Fe(w.armor,.6)),gold:Ci(we(w.accent,"#e8c070",.5)),glowC:Pt(w.glow||w.accent),glowH:Pt(w.glow||w.accent,.3),cloth:xt(w.cloth||Fe(w.armor,.62)),hair:Oi("hair",nt(w.hair),{size:Mt})},$t=(z,de=.7)=>z===1?"#5a4232":we(ue[z],w.armor,de),vn=z=>N?ke(we(ye[z],"#3a3340",.75),.5):z>=4?Ci(ye[z]):ke(ye[z],.4),ln=(z,de,ce,Le="")=>{let Te=`${T}|${N?1:0}|${z}|${Le}`,Pe=Ie.get(Te);if(!Pe){let He=new Kt,Qe=[];ce(He,Qe),Qe.forEach(ve=>He.remove(ve.obj)),Pe={baked:mt(He),live:Qe},Ie.set(Te,Pe)}let pe=Es(Pe.baked);pe.traverse(He=>{He.isMesh&&(He.userData.kit=1)}),de.add(pe);for(let He of Pe.live){let Qe=He.obj.clone();de.add(Qe),Qe.traverse(ve=>{ve.isMesh&&(ve.userData.kit=1)}),W.push(ve=>He.fn(Qe,ve))}},k=(z,de,ce,Le,Te,Pe)=>Q(de==="box"?"bbox":de,z,ce,Le,Te,Pe),un=(z,de)=>{let ce=z.userData.base,Le=1+Math.sin(de*17+z.id)*.12+Math.sin(de*29)*.06;z.scale.set(ce[0]*Le,ce[1]*(2-Le),ce[2]*Le)},Et=(z,de)=>{let ce=z.userData.base,Le=1+Math.sin(de*3+z.id)*.12;z.scale.set(ce[0]*Le,ce[1]*Le,ce[2]*Le)},Vt=(z,de)=>(ce,Le)=>{ce.rotation[z]=Le*de},Qt=(z,de,ce,Le,Te,Pe,pe,He)=>{let Qe=Array.isArray(Te)?Te:[Te,Te,Te],ve=k(z,ce,Le,Qe,Pe,He);return ve.userData.base=Qe.slice(),ve.castShadow=!1,de.push({obj:ve,fn:pe}),ve},Ls=(z,de,ce,Le,Te=0)=>{let Pe=be(z,ce);return de.push({obj:Pe,fn:Te?qe(Le,Te):Le}),Pe},dc={spear(z){if(k(z,"rod",[0,.3,0],[.042,1.75,.042],re.wood),k(z,"rod",[0,1.15,0],[.06,.07,.06],re.acc),k(z,"cone",[0,1.32,0],[.09,.28,.03],re.steel),k(z,"cone",[0,1.08,0],[.09,.12,.09],re.acc,[180,0,0]),O.pennant){let de=xt(O.pennant);k(z,"box",[0,1,.11],[.012,.13,.2],de),k(z,"cone",[0,1,.27],[.12,.14,.012],de,[90,90,0])}},staff(z,de){let ce=O.staff||"orb",Le=O.staffLen||1,Te=1.5*(Le-1),Pe=ce==="ice"?ke("#cfe8f4",.2):ce==="sun"?re.gold:ce==="drift"?ke("#8a7458"):re.wood;if(k(z,"rod",[0,.3+Te/2,0],[.05,1.5*Le,.05],Pe),ce==="ice")k(z,"octa",[0,1.17+Te,0],[.13,.32,.13],re.accG),k(z,"octa",[.07,1.06+Te,0],[.06,.16,.06],re.accG,[0,0,-30]),k(z,"octa",[-.07,1.06+Te,0],[.06,.16,.06],re.accG,[0,0,30]),Qt(z,de,"sphere",[0,1.17+Te,0],.34,re.accH,Et);else if(ce==="sun"){k(z,"sphere",[0,1.16+Te,0],[.16,.16,.16],re.glowC);for(let pe=0;pe<8;pe++){let He=pe*45*ze;k(z,"cone",[Math.cos(He)*.15,1.16+Te+Math.sin(He)*.15,0],[.04,.1,.04],re.gold,[0,0,pe*45-90])}Qt(z,de,"sphere",[0,1.16+Te,0],.42,re.glowH,Et)}else{if(ce==="drift"){for(let pe of[-1,1])k(z,"rod",[pe*.06,1.04+Te,0],[.035,.22,.035],Pe,[0,0,pe*-25]);k(z,"sphere",[0,.86+Te,0],[.08,.06,.08],Pe),k(z,"cone",[.06,.8+Te,.03],[.06,.08,.02],ke("#f0e0c8"),[180,0,0])}else k(z,"ring",[0,1.12+Te,0],[.2,.2,.2],re.acc),k(z,"cone",[0,1.01+Te,0],[.07,.1,.07],re.acc,[180,0,0]);k(z,"sphere",[0,1.12+Te,0],[.13,.13,.13],re.accG),Qt(z,de,"sphere",[0,1.12+Te,0],.3,re.accH,Et)}},hammer(z,de){let ce=O.big?1.25:1;k(z,"rod",[0,O.big?.2:.25,0],[.045*ce,O.big?.85:.95,.045*ce],re.wood),O.big?(k(z,"box",[0,.62,0],[.32,.2,.2],ke("#2a2426",.5)),k(z,"box",[0,.62,0],[.34,.045,.21],re.accG),k(z,"box",[0,.62,0],[.045,.22,.22],re.accG),k(z,"cone",[.19,.62,0],[.11,.11,.11],ke("#2a2426",.5),[0,0,-90]),k(z,"rod",[0,-.2,0],[.07,.06,.07],re.iron)):(k(z,"box",[0,.68,0],[.3,.16,.16],re.iron),k(z,"box",[0,.68,0],[.32,.04,.17],re.acc),k(z,"box",[.16,.68,0],[.02,.15,.15],re.accG),k(z,"box",[-.16,.68,0],[.02,.15,.15],re.accG),Qt(z,de,"sphere",[.16,.68,0],.22,re.accH,Et))},club(z){let de=ke(w.accent);k(z,"taper",[0,.38,0],[.16,.8,.16],re.wood),k(z,"sphere",[0,.78,0],[.16,.14,.16],re.wood),k(z,"sphere",[.07,.62,.04],[.08,.08,.08],re.wood),k(z,"sphere",[-.06,.74,-.05],[.07,.07,.07],re.wood),k(z,"sphere",[.02,.84,.05],[.12,.07,.1],de),k(z,"sphere",[-.08,.66,.02],[.07,.1,.07],de),k(z,"rod",[0,.08,0],[.11,.12,.11],re.leather)},trident(z){k(z,"rod",[0,.28,0],[.042,1.6,.042],re.armorD),k(z,"box",[0,1.08,0],[.3,.04,.04],re.gold),k(z,"cone",[0,1.27,0],[.06,.34,.06],re.acc);for(let de of[-.13,.13])k(z,"rod",[de,1.16,0],[.03,.16,.03],re.acc),k(z,"cone",[de,1.3,0],[.05,.14,.05],re.acc);k(z,"sphere",[0,1.08,0],[.07,.07,.07],re.accG)},katana(z){k(z,"rod",[0,.03,0],[.04,.26,.04],ke("#1c1c22")),k(z,"disc",[0,.17,0],[.1,.02,.1],re.gold),k(z,"box",[0,.48,0],[.012,.6,.045],re.steel),k(z,"box",[0,.92,-.025],[.012,.3,.04],re.steel,[-9,0,0]),k(z,"box",[0,.48,.03],[.014,.6,.016],re.glowC),k(z,"box",[0,.91,.006],[.014,.3,.016],re.glowC,[-9,0,0])},sword(z,de){let ce=O.side==="sword"&&w.prop==="shield"?.8:1;if(k(z,"rod",[0,.02,0],[.04,.22,.04],re.leather),k(z,"sphere",[0,-.1,0],[.06,.06,.06],re.gold),k(z,"box",[0,.14,0],[.26,.04,.05],re.gold),k(z,"box",[0,.16+.45*ce,0],[.075,.9*ce,.022],re.steel),k(z,"cone",[0,.16+.9*ce+.05,0],[.075,.1,.022],re.steel),w.glow||O.flame){let Le=O.flame?Pt(w.accent,.55):re.glowH;Qt(z,de,"box",[0,.16+.47*ce,0],[.13,.98*ce,.05],Le,O.flame?un:Et)}},axe(z){k(z,"rod",[0,.25,0],[.045,.85,.045],re.wood),k(z,"half",[0,.6,0],[.34,.025,.3],re.steel,[90,90,0]),k(z,"box",[0,.6,0],[.08,.12,.06],re.acc),k(z,"cone",[0,.72,0],[.05,.1,.05],re.acc)},dagger(z){k(z,"rod",[0,.01,0],[.034,.13,.034],re.leather),k(z,"box",[0,.09,0],[.12,.025,.03],re.acc),k(z,"cone",[0,.28,0],[.065,.36,.015],re.steel),k(z,"cone",[0,.28,0],[.09,.4,.02],re.glowH)},whip(z){k(z,"rod",[0,.06,0],[.045,.3,.045],re.leather),k(z,"sphere",[0,-.1,0],[.055,.055,.055],re.acc),k(z,"rod",[0,.2,0],[.06,.04,.06],re.acc)},hook(z){k(z,"rod",[0,.2,0],[.04,.7,.04],ke("#5a4034",.4)),k(z,"hook",[.09,.56,0],[.18,.18,.18],ke("#7a5a48",.5),[0,0,-20]),k(z,"cone",[.2,.52,0],[.04,.1,.04],ke("#7a5a48",.5),[0,0,150]),k(z,"rod",[0,-.12,0],[.06,.05,.06],re.acc),k(z,"rod",[0,-.2,0],[.012,.14,.012],re.iron)},bow(z){k(z,"rod",[0,0,0],[.04,.16,.04],re.leather);for(let de of[1,-1])k(z,"rod",[0,de*.22,-.02],[.03,.32,.03],re.wood,[de*-8,0,0]),k(z,"rod",[0,de*.5,-.09],[.024,.28,.024],re.wood,[de*-28,0,0]),k(z,"sphere",[0,de*.63,-.16],[.035,.035,.035],re.acc);k(z,"rod",[0,0,-.16],[.006,1.26,.006],re.accG)},lantern(z,de){k(z,"rod",[0,.3,0],[.04,1.5,.04],re.wood),k(z,"crook",[.1,1.05,0],[.2,.2,.2],re.gold),k(z,"rod",[.2,.97,0],[.008,.12,.008],re.gold),k(z,"box",[.2,.84,0],[.13,.17,.13],ke(we(w.accent,"#6a4a20",.6),.5)),k(z,"cone",[.2,.95,0],[.16,.06,.16],re.gold),k(z,"sphere",[.2,.84,0],[.15,.13,.15],re.accG),Qt(z,de,"sphere",[.2,.84,0],.4,re.accH,Et)},candle(z,de){k(z,"disc",[0,.06,0],[.22,.03,.22],re.gold),k(z,"rod",[0,-.03,0],[.045,.16,.045],re.gold),k(z,"rod",[0,.2,0],[.11,.28,.11],ke("#f2e6c8")),k(z,"ring",[.13,.03,0],[.08,.08,.2],re.gold,[90,0,0]),Qt(z,de,"cone",[0,.42,0],[.11,.22,.11],re.accG,un),Qt(z,de,"sphere",[0,.4,0],.42,re.accH,Et)},mirror(z,de){k(z,"rod",[0,.05,0],[.035,.2,.035],re.gold),k(z,"ring",[0,.3,0],[.24,.24,.3],re.gold),k(z,"disc",[0,.3,0],[.22,.012,.22],re.accG,[90,0,0]),Qt(z,de,"sphere",[0,.3,0],.4,re.accH,Et)},bell(z,de){k(z,"rod",[0,.05,0],[.04,.18,.04],re.wood),k(z,"sphere",[0,-.08,0],[.12,.1,.12],re.gold),k(z,"bell",[0,-.22,0],[.32,.28,.32],re.gold,[180,0,0]),k(z,"ring",[0,-.36,0],[.32,.32,.4],re.gold,[90,0,0]),k(z,"sphere",[0,-.39,0],[.07,.07,.07],re.glowC),Qt(z,de,"sphere",[0,-.24,0],.55,re.glowH,Et)},orb(z,de){k(z,"sphere",[0,.22,0],[.18,.18,.18],ke("#140a1e",.3)),Qt(z,de,"sphere",[0,.22,0],.3,re.accH,Et),Qt(z,de,"ring",[0,.22,0],.3,re.accG,Vt("y",2.2),[70,0,0]),Qt(z,de,"ring",[0,.22,0],.24,re.glowC,Vt("x",-1.6),[0,0,60])}},ip={spear:25,staff:32,lantern:32,candle:42,bell:35,orb:40,mirror:30,bow:15,trident:30,club:12,hammer:15,axe:15,hook:25,whip:10},sp={bow:90},Hu=(z,de,ce)=>{let Le=vn(ce.r),Te=Pt(Ae[ce.s]||w.accent);if(k(z,"ring",[0,.06,0],[.075,.075,.3],Le,[90,0,0]),ce.r>=2&&k(z,"ring",[0,-.02,0],[.07,.07,.3],Le,[90,0,0]),ce.r>=3&&k(z,"gem",[0,-.14,0],[.065,.085,.065],Te),ce.r>=4)for(let Pe of[-1,1])k(z,"cone",[Pe*.06,.12,0],[.03,.09,.03],Le,[0,0,Pe*-60]);ce.r>=5&&(k(z,"octa",[0,.13,0],[.07,.09,.07],Te),Qt(z,de,"sphere",[0,.13,0],.13,Pt(Ae[ce.s]||w.accent,.3),Et))},rp=[1,1,1.04,1.08,1.13,1.18],Ks=w.prop==="shield"?O.side:w.prop==="daggers"?"dagger":w.prop,Wu=!1;if(X.traverse(z=>{z.name==="Sword"&&(z.visible=Wu),z.name==="Backpack"&&(O.cape||O.pack===!1||O.back)&&(z.visible=!1)}),Ks&&!Wu&&dc[Ks]&&Ee.WristR){let z=Ks==="hammer"&&O.big?58:ip[Ks]||0,de=D(Ee.WristR,X,M.R,y("R",z),sp[Ks]||0);It&&de.scale.multiplyScalar(rp[It.r]),ln("R",de,(ce,Le)=>{dc[Ks](ce,Le),It&&Hu(ce,Le,It)},Ze(It))}if(w.prop==="whip"&&Ee.WristR&&ln("Wl",Z(Ee.WristR,X,[0,0,0]),(z,de)=>{let ce=Ls(z,de,[0,0,0],(Pe,pe)=>{Pe.rotation.y=Math.sin(pe*1.7)*.35,Pe.rotation.x=Math.sin(pe*2.3)*.06},.6),Le=[];for(let Pe=0;Pe<=12;Pe++){let pe=Pe/12,He=pe<.7?-Math.pow(pe/.7,1.4)*.92:-.92,Qe=.12+pe*.75,ve=Math.sin(pe*9)*.1*pe;Le.push(new F(-.08-ve,He,Qe))}for(let Pe=0;Pe<12;Pe++){let pe=Le[Pe],He=Le[Pe+1],Qe=pe.distanceTo(He);k(ce,"rod",[(pe.x+He.x)/2,(pe.y+He.y)/2,(pe.z+He.z)/2],[.035-Pe*.002,Qe+.01,.035-Pe*.002],re.accG).quaternion.setFromUnitVectors(new F(0,1,0),He.clone().sub(pe).normalize())}let Te=Le[12];k(ce,"sphere",[Te.x,Te.y+.03,Te.z],[.09,.07,.09],re.glowC),k(ce,"cone",[Te.x,Te.y+.12,Te.z],[.08,.2,.08],re.glowC)}),Ee.WristL&&w.prop==="daggers"&&ln("L",D(Ee.WristL,X,M.L,y("L",0)),(z,de)=>{dc.dagger(z,de),It&&Hu(z,de,It)},Ze(It)),Ee.WristL&&w.prop==="shield"){let z=D(Ee.WristL,X,[0,0,.08],null);z.quaternion.setFromRotationMatrix(new gt().makeBasis(new F(0,0,1),new F(0,-1,0),new F(1,0,0)));let de=O.shield||"round";ln("S",z,ce=>{let Le=ke(O.shieldFace||we(w.armor,w.accent,.25),.4),Te=ke(It&&It.r>=3?ye[It.r]:we(w.accent,"#c8ccd4",.4),.6);if(de==="kite")k(ce,"box",[0,.1,0],[.4,.42,.035],Le),k(ce,"cone",[0,-.27,0],[.4,.32,.035],Le,[180,0,0]),k(ce,"box",[0,0,.022],[.06,.62,.012],Te),k(ce,"box",[0,.14,.022],[.34,.06,.012],Te),k(ce,"ring",[0,.1,0],[.4,.42,.35],Te,[0,0,0]);else if(de==="tower")k(ce,"box",[0,.05,0],[.44,.78,.04],ke(w.armor,.4)),k(ce,"box",[0,.05,-.006],[.5,.84,.03],Pt(w.glow||w.accent,.7)),k(ce,"sphere",[0,.12,.03],[.14,.14,.05],re.glowC),k(ce,"box",[0,.05,.024],[.05,.66,.012],re.gold);else{let Pe=O.big?.62:.56;if(k(ce,"disc",[0,0,0],[Pe,.035,Pe],Le,[90,0,0]),k(ce,"ring",[0,0,0],[Pe,Pe,.6],O.big?Pt(w.accent):Te),k(ce,"boss",[0,0,.012],[.16,.16,.12],Te,[90,0,0]),O.studs)for(let pe=0;pe<6;pe++){let He=pe*60*ze;k(ce,"sphere",[Math.cos(He)*Pe*.36,Math.sin(He)*Pe*.36,.02],[.045,.045,.03],ke(w.accent))}if(O.big)for(let pe=0;pe<8;pe++){let He=pe*45*ze;k(ce,"box",[Math.cos(He)*Pe*.3,Math.sin(He)*Pe*.3,.02],[.03,Pe*.5,.012],Te,[0,0,pe*45+90])}}},It&&It.r>=3?String(It.r):"")}let en=oe&&oe.helm,pc=Tt[w.gear]?"helm":Wt[w.gear]||_e||O.hat?"adorn":"open";if(Ee.Head){let z=D(Ee.Head,X,[0,0,0],null),de=he.top,ce=he.r,Le=(pe,He,Qe)=>{k(pe,"helm",[0,de-.12,-.01],[ce*2.2,ce*1.75,ce*2.3],He),k(pe,"ring",[0,de-.105,-.01],[ce*2.28,ce*2.4,.4],He,[90,0,0]);for(let ve=0;ve<8;ve++){let it=ve/8*Math.PI*2;k(pe,"sphere",[Math.sin(it)*ce*1.13,de-.1,-.01+Math.cos(it)*ce*1.18],[.016,.016,.016],He)}if(k(pe,"box",[0,de-.17,he.face+.012],[.03,.1,.02],He),Qe)for(let ve of[-1,1])k(pe,"box",[ve*ce*.98,de-.21,.04],[.03,.12,.1],He)},Te=pe=>{for(let He of[-.05,.05])k(pe,"sphere",[He,he.eye,he.face],[.035,.022,.02],Pt(N?"#ff2a2a":w.glow))},Pe=w.gear;ln("H",z,(pe,He)=>{if(Pe==="helm"){let ve=ke(en?we(ue[en.r],w.armor,.3):we(w.armor,"#c8ccd4",O.helm==="winged"?.2:.5),.6);if(Le(pe,ve,O.helm!=="great"),O.helm==="winged")for(let it of[-1,1])k(pe,"cone",[it*(ce+.03),de-0,-.05],[.1,.32,.03],ke("#ffffff",.2),[-35,90,it*-35]),k(pe,"cone",[it*(ce+.02),de-.06,-.08],[.08,.24,.025],re.glowC,[-50,90,it*-50]);else if(O.helm==="horned"){for(let it of[-1,1])k(pe,"cone",[it*(ce+.05),de+0,0],[.075,.3,.075],ke("#e8e4da"),[0,0,it*-35]),k(pe,"cone",[it*(ce+.13),de+.15,0],[.035,.08,.035],re.accG,[0,0,it*-35]);k(pe,"box",[0,de+0,0],[.03,.07,.26],re.acc)}else if(O.helm==="great"){k(pe,"rod",[0,de-.2,0],[ce*2.25,.16,ce*2.3],ve),k(pe,"box",[0,he.eye+.005,he.face+.005],[.17,.022,.02],ke("#141418")),k(pe,"box",[0,de-.04,0],[.025,.05,ce*2.1],re.acc);for(let it of[-1,1])k(pe,"sphere",[it*ce*1.1,de-.15,0],[.04,.04,.04],re.acc)}}else if(Pe==="horns"){k(pe,"dome",[0,de-.12,-.01],[ce*2.3,ce*1.7,ce*2.45],ke("#26201e",.5));let ve=Oi("bone",nt("#e8dcc0"),{size:Mt});for(let it of[-1,1])k(pe,"rod",[it*(ce+.03),de-.08,.01],[.085,.12,.085],ve,[0,0,it*75]),k(pe,"rod",[it*(ce+.1),de-.03,.02],[.07,.12,.07],ve,[-10,0,it*35]),k(pe,"cone",[it*(ce+.13),de+.07,.04],[.065,.16,.065],ve,[-20,0,it*5]);k(pe,"box",[0,de-.15,he.face+.01],[.16,.025,.02],re.glowC)}else if(Pe==="halo"){let ve=be(pe,[0,de+.13,-.06]);if(ve.rotation.x=70*ze,k(ve,"ring",[0,0,0],[.34,.34,.5],re.glowC),O.staff==="sun")for(let it=0;it<8;it++){let jt=it*45*ze;k(ve,"cone",[Math.cos(jt)*.23,Math.sin(jt)*.23,0],[.035,.08,.035],re.gold,[0,0,it*45-90])}Qt(pe,He,"sphere",[0,de+.13,-.06],[.42,.12,.42],re.glowH,Et)}else if(Pe==="circlet"){let ve=he.eye+.07;k(pe,"ring",[0,ve,0],[ce*1.85,ce*1.95,.2],re.gold,[80,0,0]),k(pe,"octa",[0,ve-.005,ce*.95+.02],[.05,.075,.03],re.glowC)}else if(Pe==="bandana"){let ve=xt(O.band||w.accent),it=he.eye+.08;k(pe,"ring",[0,it,0],[ce*2.25,ce*2.4,.35],ve,[80,0,0]);let jt=Ls(pe,He,[0,it,-ce-.03],(tn,Dn)=>{tn.rotation.x=.5+Math.sin(Dn*3.1+tn.id)*.18,tn.rotation.z=Math.sin(Dn*2.3)*.15},1.6);k(jt,"box",[.03,-.12,-.02],[.05,.26,.012],ve,[0,0,10]),k(jt,"box",[-.03,-.15,-.01],[.05,.32,.012],ve,[0,0,-8]),w.glow&&k(pe,"sphere",[0,it,ce*1.1],[.04,.04,.02],re.glowC)}else if(Pe==="crown"){let ve=ke(O.crownBand||we(w.accent,"#e8c070",.4),.6),it=he.crown,jt=ce*1.05;k(pe,"ring",[0,it,0],[jt*2,jt*2.1,.6],ve,[90,0,0]);let tn=7,Dn=O.crown||"spike";for(let zn=0;zn<tn;zn++){let Ds=zn/tn*Math.PI*2+Math.PI/2,Ui=Math.cos(Ds)*jt,ns=Math.sin(Ds)*jt*1.05,Xa=Dn==="jagged"?zn%2?.12:.24:Dn==="coral"?.12+zn%3*.05:zn===0?.16:.11,ni=Dn==="coral"?zn%2?18:-14:0;k(pe,"cone",[Ui,it+Xa/2,ns],[.05,Xa,.05],Dn==="jagged"?ke("#1a1020",.4):ve,[0,0,ni]),(Dn!=="spike"||zn===0)&&k(pe,"sphere",[Ui,it+Xa+.005,ns],[.035,.035,.035],re.glowC)}if(O.flame)for(let zn=0;zn<3;zn++)Qt(pe,He,"cone",[(zn-1)*.07,it+.13,jt*.95],[.05,.13,.05],re.glowC,un)}else if(Pe==="mask"){let ve=xt(we(w.armor,"#000000",.25));k(pe,"dome",[0,he.eye-.07,he.face-.06],[.22,.1,.17],ve,[90,0,0]),k(pe,"box",[0,he.eye-.035,he.face+0],[.2,.01,.03],re.acc)}else Pe==="veil"&&(k(pe,"cone",[0,de+.02,-.01],[.3,.24,.3],ke("#1a1028")),k(pe,"disc",[0,de-.09,-.01],[.42,.012,.42],ke("#1a1028")),k(pe,"cone",[0,de-.2,-.04],[.5,.42,.5],Pt("#1a1028",.55)),k(pe,"ring",[0,de-.09,0],[.21,.21,.3],re.accG,[90,0,0]));let Qe=re.hair;if(O.hair==="ponytail"){k(pe,"sphere",[0,de-.05,-ce*.95],[.07,.07,.07],re.acc);let ve=Ls(pe,He,[0,de-.05,-ce-.02],(it,jt)=>{it.rotation.x=Math.sin(jt*2.2+1)*.08,it.rotation.z=Math.sin(jt*1.6)*.06},1.3);k(ve,"capsule",[0,-.1,-.06],[.11,.1,.09],Qe,[-30,0,0]),k(ve,"capsule",[0,-.24,-.1],[.08,.1,.07],Qe,[-12,0,0]),k(ve,"cone",[0,-.37,-.11],[.07,.12,.06],Qe,[180,0,0])}else if(O.hair==="braid"){for(let ve=0;ve<6;ve++)k(pe,"sphere",[0,de-.12-ve*.075,-ce-.03-ve*.008],[.085-ve*.006,.09,.08-ve*.005],Qe);k(pe,"ring",[0,de-.6,-ce-.07],[.05,.05,.4],re.acc,[90,0,0]),k(pe,"cone",[0,de-.66,-ce-.07],[.06,.1,.05],Qe,[180,0,0])}else if(O.hair==="bun")k(pe,"sphere",[0,de-.02,-ce*.8],[.13,.12,.12],Qe),k(pe,"rod",[.04,de+.02,-ce*.8],[.015,.2,.015],re.gold,[0,0,60]);else if(O.hair==="flame")for(let ve=0;ve<5;ve++){let it=(ve-2)*.5;Qt(pe,He,"cone",[Math.sin(it)*.08,de+.04-Math.abs(ve-2)*.03,-.04-Math.cos(it)*.03],[.09,.26-Math.abs(ve-2)*.05,.09],ve%2?re.glowC:Pt(w.hair),un,[-20,0,(ve-2)*-14])}else O.hair==="long"&&(k(pe,"box",[0,de-.33,-ce*.6],[ce*1.9,.36,.08],Qe,[8,0,0]),k(pe,"cone",[0,de-.55,-ce*.62],[ce*1.9,.12,.08],Qe,[180,0,0]));if(O.beardBraid){k(pe,"ring",[0,-.06,.13],[.05,.05,.4],re.gold,[90,0,0]);for(let ve=0;ve<3;ve++)k(pe,"sphere",[0,-.1-ve*.05,.13+ve*.01],[.055-ve*.008,.06,.05],Qe);k(pe,"sphere",[0,-.25,.155],[.04,.04,.04],re.gold)}if(O.hat==="straw"){let ve=ke("#d8bb6a"),it=ke(w.accent);k(pe,"disc",[0,de-.04,0],[.62,.02,.62],ve,[-6,0,0]),k(pe,"cone",[0,de+.06,-.01],[.32,.2,.32],ve),k(pe,"rod",[0,de-.02,-.01],[.27,.04,.27],it)}if(!N&&O.face!==!1){let ve=Object.assign({brow:6,mouth:"flat",iris:"#4a3a2a"},S[T]||{}),it=ge==="hooded"?.046:.045,jt=ge==="hooded"?.113:.109,tn=ge==="hooded"?.118:.11,Dn=Pe==="mask",zn=ie(ve.iris),Ds=ie("#fbf6ee"),Ui=ke(Fe(w.hair,.55)),ns=ke(we(SKIN[w.skin]||"#c99068","#5a2a2a",.55));for(let ni of[-1,1])k(pe,"sphere",[ni*it,jt,tn],[.026,.028,.008],Ds),k(pe,"sphere",[ni*it,jt-.001,tn+.003],[.016,.02,.006],zn),k(pe,"sphere",[ni*it+.004,jt+.005,tn+.006],[.006,.006,.003],Ds),Pe==="helm"&&O.helm==="great"||k(pe,"box",[ni*(it+.002),jt+.026,tn+.002],[.036,.009,.008],Ui,[0,0,ni*ve.brow]);if(!(ge!=="hooded"&&!H.shave&&!Re.has("hair"))&&!Dn){let ni=jt-.06,Jr=tn+.004;if(ve.mouth==="smile")for(let Zr of[-1,1])k(pe,"box",[Zr*.011,ni+.002,Jr],[.022,.005,.006],ns,[0,0,Zr*14]);else if(ve.mouth==="frown")for(let Zr of[-1,1])k(pe,"box",[Zr*.011,ni,Jr],[.022,.005,.006],ns,[0,0,Zr*-12]);else ve.mouth==="smirk"?(k(pe,"box",[-.004,ni,Jr],[.022,.005,.006],ns),k(pe,"box",[.013,ni+.003,Jr],[.012,.005,.006],ns,[0,0,22])):k(pe,"box",[0,ni,Jr],[.03,.005,.006],ns)}}_e&&(w.glow||N)&&Pe!=="halo"&&Te(pe)}),en&&ln("gH",z,(pe,He)=>{let Qe=ke($t(en.r,.4),en.r===1?0:.6),ve=vn(en.r),it=Pt(Ae[en.s]||w.accent),jt=ke("#5a4232");if(pc==="open"||pc==="adorn"){let tn=_e?he.eye+.11:he.eye+.065,Dn=ce*(_e?1.02:1);O.hat?k(pe,"rod",[0,de-.005,-.01],[.28,.025,.28],ve):k(pe,"ring",[0,tn,-.005],[Dn*1.98,Dn*2.08,en.r===1?.22:.16],en.r===1?jt:ve,[80,0,0]);let zn=O.hat?de:tn,Ds=O.hat?.14:_e?he.face:Dn*.98+.012;if(en.r>=2&&k(pe,"octa",[0,zn,Ds],[.035+en.r*.005,.045+en.r*.007,.022],en.r>=3?it:Qe),en.r>=3&&!O.hat&&!_e)for(let Ui of[-1,1])k(pe,"box",[Ui*(Dn+.005),tn-.035,-.01],[.022,.07,.09],Qe);if(en.r>=4)for(let Ui of[-1,1])k(pe,"cone",[Ui*(Dn+.02),tn+.025,-.03],[.045,.11+(en.r-4)*.06,.016],ve,[-40,90,Ui*-40]);en.r>=5&&!O.hat&&k(pe,"octa",[0,tn+.03,-Dn-.01],[.05,.08,.03],it),O.hat&&en.r>=3&&k(pe,"cone",[.1,de+.08,-.08],[.035,.22+en.r*.02,.018],it,[-30,0,-30])}else k(pe,"rod",[0,de-.115,-.01],[ce*2.4,.03,ce*2.5],ve),en.r>=2&&k(pe,"box",[0,de-.085,he.face-.01],[.12+en.r*.01,.03,.025],Qe),en.r>=3&&k(pe,"octa",[0,de-.06,he.face+0],[.04,.055,.028],it),en.r>=4&&k(pe,"box",[0,de+.02,-.02],[.025,.06+(en.r-4)*.04,ce*2],ve)},`${pc}${Ze(en)}`)}let ap=Ee.Hips?ee(Ee.Hips,X):.9;Ee.Hips&&(O.robe||O.coat||O.tabard||O.apron||O.belt||O.scabbard||O.coil)&&ln("Hp",Z(Ee.Hips,X,[0,0,0]),z=>{let de=xt(O.robeColor||w.cloth||w.armor),ce=ke(w.accent,.3);if(O.robe){let Te=O.robe==="long"?ap+.12-.07:.45,Pe=O.robeW||1;if(k(z,"taper",[0,.12-Te/2,0],[.5*Pe,Te,.42*Pe],de,[180,0,0]),O.robe==="long"){let pe=Te*.42,He=xt(we(O.robeColor||w.cloth||w.armor,"#000000",.18));k(z,"taper",[0,.12-pe/2+.01,0],[.53*Pe,pe,.45*Pe],He,[180,0,0]),k(z,"taper",[0,.12-pe+.02,0],[.555*Pe,.03,.47*Pe],ce,[180,0,0])}if(k(z,"taper",[0,.12-Te+.03,0],[.53*Pe,.06,.45*Pe],ce,[180,0,0]),O.robe==="long"&&O.stole!==!1&&k(z,"box",[0,.12-Te/2,.205*Pe],[.12,Te*.96,.02],ce,[-9,0,0]),O.bells)for(let pe=0;pe<6;pe++){let He=pe/6*Math.PI*2+.3;k(z,"bell",[Math.sin(He)*.235*Pe,.12-Te+.05,Math.cos(He)*.195*Pe],[.05,.06,.05],re.gold,[180,0,0])}}if(O.coat){let Le=xt(O.coat===!0?w.armor:O.coat),Te=.5;k(z,"box",[0,.02-Te/2,-.12],[.36,Te,.03],Le,[8,0,0]);for(let Pe of[-1,1])k(z,"box",[Pe*.15,.02-Te/2,0],[.03,Te,.22],Le,[0,0,Pe*4]),k(z,"box",[Pe*.12,.02-Te/2,.1],[.1,Te,.03],Le,[-6,Pe*20,0]);k(z,"box",[0,.02-Te+.02,-.135],[.37,.03,.035],ce,[8,0,0])}if(O.tabard){let Le=xt(O.tabard),Te=.5;k(z,"box",[0,.25-Te/2+.05,.16],[.22,Te+.25,.02],Le,[-6,0,0]),k(z,"box",[0,.25-Te/2+.05,-.14],[.22,Te+.25,.02],Le,[6,0,0]),k(z,"box",[0,.25-Te-.05,.19],[.24,.03,.025],ce,[-6,0,0]),k(z,"box",[0,.25-Te-.05,-.17],[.24,.03,.025],ce,[6,0,0]),O.emblem&&k(z,"octa",[0,.2,.18],[.08,.11,.02],ke(O.emblem,.3))}if(O.apron){let Le=ke("#4a3426");k(z,"box",[0,.05,.17],[.3,.75,.025],Le,[-4,0,0]),k(z,"box",[0,-.31,.19],[.31,.03,.03],re.acc,[-4,0,0]),k(z,"box",[.08,-.05,.19],[.1,.1,.02],ke("#3a281c"),[-4,0,0]),k(z,"rod",[.08,-.01,.205],[.012,.12,.012],re.iron,[0,0,20])}if(O.belt){let Le=ke(O.belt===!0?"#3a2a20":O.belt);k(z,"rod",[0,.1,0],[.38,.05,.32],Le),k(z,"ring",[0,.1,.162],[.06,.05,.3],re.gold),k(z,"box",[0,.1,.165],[.008,.045,.01],re.gold),k(z,"box",[-.16,.04,.05],[.065,.1,.08],Le),k(z,"box",[-.165,.08,.06],[.07,.035,.085],ke(Fe(O.belt===!0?"#3a2a20":O.belt,.8)),[-12,0,0]),k(z,"sphere",[-.165,.065,.1],[.014,.014,.014],re.gold),k(z,"rod",[.16,.05,.07],[.03,.07,.03],ie(we(w.accent,"#ffffff",.2),.85)),k(z,"rod",[.16,.095,.07],[.02,.02,.02],re.wood)}if(O.scabbard&&(k(z,"box",[-.19,-.05,-.02],[.03,.7,.05],ke("#1c1c22"),[62,0,-8]),k(z,"box",[-.19,-.05,-.02],[.035,.05,.06],re.gold,[62,0,-8])),O.coil)for(let Le=0;Le<3;Le++)k(z,"ring",[.2,0-Le*.012,.03],[.14,.14,.3],Le===1?re.accG:re.leather,[10,90,0])});let Lt=oe&&oe.chest,Js=O.pauldrons||(Lt?Lt.r===1?"leather":"plate":null);if(Js)for(let[z,de]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Ee[de]&&ln("P"+z,Z(Ee[de],X,[z*.02,.01,0]),(ce,Le)=>{let Te=(O.pauldronSize||1)*(Lt?.72+Lt.r*.05:1),Pe=Lt?ke($t(Lt.r,.75),Lt.r===1?0:.55):ke(O.pauldronColor||we(w.armor,"#c8ccd4",.25),.4),pe=Lt?vn(Lt.r):re.acc,He=z*-50,Qe=be(ce,[0,0,0]);if(Qe.scale.setScalar(Te),Js==="leather")k(Qe,"sphere",[z*.02,0,0],[.2,.12,.2],ke("#5a4232"),[0,0,He]);else if(Js==="shell"){k(Qe,"shell",[z*.02,-.03,0],[.24,.26,.22],Pe,[0,0,He]);for(let ve=-1;ve<=1;ve++)k(Qe,"box",[z*.06,.03,ve*.05],[.02,.1,.02],pe,[ve*20,0,He])}else if(Js==="ice"){k(Qe,"shell",[z*.01,-.03,0],[.2,.2,.2],Pe,[0,0,He]);for(let ve=-1;ve<=1;ve++)k(Qe,"octa",[z*(.06+Math.abs(ve)*.01),.07-Math.abs(ve)*.02,ve*.05],[.04,.16-Math.abs(ve)*.04,.04],re.accG,[ve*15,0,z*-25])}else if(Js==="spike"){k(Qe,"shell",[z*.02,-.03,0],[.24,.27,.24],Pe,[0,0,He]);for(let ve=-1;ve<=1;ve++)k(Qe,"cone",[z*.08,.06,ve*.06],[.04,.14,.04],pe,[ve*15,0,z*-45])}else{k(Qe,"shell",[z*.02,-.03,0],[.26,.27,.25],Pe,[0,0,He]),k(Qe,"ring",[z*0,-.035,0],[.13,.13,.4],pe,[90,0,He]);for(let ve=1;ve<=2;ve++)k(Qe,"dome",[z*(.03+ve*.012),-.035-ve*.03,0],[.24-ve*.025,.1,.23-ve*.025],Pe,[0,0,He-z*8*ve]);for(let ve=-1;ve<=1;ve++)k(Qe,"sphere",[z*.075,.035,ve*.06],[.018,.018,.018],pe);Lt&&Lt.r>=3&&k(Qe,"dome",[z*.05,-.07,0],[.22,.12,.22],Pe,[0,0,z*-65]),Lt&&Lt.r>=4&&k(Qe,"ring",[z*.035,-.075,0],[.12,.12,.35],pe,[90,0,z*-65])}Lt&&Lt.r>=3&&Js!=="leather"&&k(Qe,"octa",[z*.1,.02,0],[.035,.045,.035],Pt(Ae[Lt.s]||w.accent)),O.aura&&(k(ce,"sphere",[z*.05,.06,0],[.11,.11,.11],re.glowC),Qt(ce,Le,"sphere",[z*.05,.06,0],.2,re.glowH,Et))},Lt?`${Lt.r}${Lt.s?Lt.s[0]:""}`:"");else if(O.aura)for(let[z,de]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Ee[de]&&ln("A"+z,Z(Ee[de],X,[z*.03,.04,0]),(ce,Le)=>{k(ce,"sphere",[0,0,0],[.15,.15,.15],re.glowC),Qt(ce,Le,"sphere",[0,0,0],.3,re.glowH,Et)});if(Lt&&Lt.r>=2&&Ee.Chest&&ln("gC",Z(Ee.Chest,X,[0,0,0]),(z,de)=>{let ce=ke($t(Lt.r),.55),Le=vn(Lt.r),Te=Pt(Ae[Lt.s]||w.accent),Pe=C==="hooded"?.035:.045,pe=.3+Lt.r*.012;k(z,"rod",[0,.13,0],[.24,.05,.2],ce),k(z,"rod",[0,.13,0],[.25,.012,.21],Le);let He=.92+Lt.r*.03;if(k(z,"breast",[0,0,Pe+.075],[He,He,1],ce,[-6,0,0]),k(z,"box",[0,0,Pe+.1],[.022,.24,.02],Le,[-6,0,0]),Lt.r>=3&&k(z,"octa",[0,.03,Pe+.115],[.045+Lt.r*.004,.06+Lt.r*.005,.025],Te),Lt.r>=4&&k(z,"box",[0,-.13,Pe+.085],[.24,.025,.03],Le,[-6,0,0]),Lt.r>=5)for(let Qe of[-1,1])k(z,"box",[Qe*.1,.08,Pe+.1],[.07,.02,.02],Le,[-6,0,Qe*-25])},Ze(Lt)),Ee.Chest&&(O.mantle||O.collar||O.scarf)&&ln("Mn",Z(Ee.Chest,X,[0,0,0]),(z,de)=>{if(O.mantle==="fur"||O.mantle==="moss"){let ce=ke(O.mantle==="fur"?O.furColor||"#e8e4dc":w.accent),Le=ke(Fe(O.mantle==="fur"?O.furColor||"#e8e4dc":w.accent,.75));for(let Te=0;Te<9;Te++){let Pe=Te/8*Math.PI*1.25-Math.PI*.625;k(z,"sphere",[Math.sin(Pe)*.2,.14-Math.abs(Math.sin(Pe))*.03,-Math.cos(Pe)*.1-.02],[.16,.12,.14],Te%2?ce:Le)}if(k(z,"sphere",[0,.06,-.15],[.36,.2,.14],Le),O.mantle==="moss")for(let Te=0;Te<5;Te++)k(z,"cone",[-.16+Te*.08,.2,-.12],[.02,.16,.02],ke("#8a9a50"),[-20+Te*5,0,(Te-2)*12])}else if(O.mantle==="ember")for(let ce=0;ce<5;ce++)for(let Le of[-1,1])Qt(z,de,"cone",[Le*(.12+ce*.03),.17-ce*.015,-.06-ce*.02],[.06,.2-ce*.02,.06],ce%2?re.glowC:re.accG,un,[-25,0,Le*(-20-ce*8)]);if(O.collar==="spike")for(let ce=0;ce<7;ce++){let Le=(ce-3)*.32;k(z,"cone",[Math.sin(Le)*.17,.27+Math.cos(Le*1.4)*.05,-.1-Math.cos(Le)*.03],[.05,.26-Math.abs(ce-3)*.03,.03],ce%2?ke("#1a1020",.4):re.acc,[-15,0,-Le*40])}if(O.scarf){let ce=xt(O.scarf);k(z,"rod",[0,.16,0],[.22,.07,.2],ce);let Le=Ls(z,de,[.06,.15,-.1],(Te,Pe)=>{Te.rotation.x=.6+Math.sin(Pe*3.4+Te.id)*.2,Te.rotation.y=Math.sin(Pe*1.9)*.25},1.6);k(Le,"box",[0,-.18,0],[.07,.36,.012],ce,[0,0,6]),k(Le,"box",[-.06,-.14,0],[.06,.28,.012],ce,[0,0,-8])}}),Ee.Chest&&(O.cape||w.prop==="bow"||O.back)){let z=Z(Ee.Chest,X,[0,0,0]);ln("B",z,(de,ce)=>{let Le=C==="hooded"?-.15:-.14;if(O.cape){let Te=xt(O.capeColor||Fe(w.armor,.55)),Pe=xt(w.accent),pe=O.capeLen||1;for(let ve of[-1,1])k(de,"sphere",[ve*.12,.14,Le+.04],[.05,.05,.03],re.gold);let He=Ls(de,ce,[0,.14,Le],(ve,it)=>{ve.rotation.x=.1+Math.sin(it*1.3+ve.id)*.035;let jt=ve.children[ve.children.length-1],tn=ve.userData.sp;jt.rotation.x=.06+Math.sin(it*1.9+.8+ve.id)*.08+(tn?tn.ax*.4:0),jt.rotation.z=Math.sin(it*1.1+ve.id)*.04+(tn?tn.az*.3:0)},1);k(He,se(.24,.42,.52,.09),[0,0,-.01],[1,1,1],Te),k(He,se(.22,.39,.5,.085),[0,-.01,-.002],[1,1,1],xt(we(w.accent,"#000000",.35)));let Qe=be(He,[0,-.47,-.01]);k(Qe,se(.4,.56,.06+.5*pe,.11),[0,.06,0],[1,1,1],Te),k(Qe,se(.56,.57,.045,.11,10,1),[0,-.5*pe+.02,.003],[1.01,1,1.01],Pe)}if(w.prop==="bow"){k(de,"rod",[.06,-.05,-.2],[.12,.46,.12],re.leather,[0,0,-25]);for(let Te=0;Te<3;Te++)k(de,"cone",[.15+Te*.03,.2+Te*.01,-.2+(Te-1)*.03],[.04,.08,.015],re.acc,[0,0,-25])}if(O.back==="shovel")k(de,"rod",[0,0,Le-.04],[.04,1,.04],re.wood,[0,0,35]),k(de,"box",[.3,-.42,Le-.04],[.2,.26,.02],re.iron,[0,0,35]),k(de,"box",[-.28,.4,Le-.04],[.14,.04,.04],re.wood,[0,0,35]);else if(O.back==="wings"){let Te=Oi("bone",nt("#fbf6ea")),Pe=Ci(we(w.accent,"#ffffff",.3));for(let pe of[-1,1]){let He=Ls(de,ce,[pe*.07,.12,Le-.03],(Qe,ve)=>{Qe.rotation.y=pe*(.55+Math.sin(ve*1.4)*.1),Qe.rotation.z=pe*Math.sin(ve*1.4)*.05});for(let Qe=0;Qe<4;Qe++)k(He,"sphere",[pe*(.06+Qe*.07),.2+Qe*.03,-.04],[.13,.1,.035],Te,[0,0,pe*-20]);for(let Qe=0;Qe<7;Qe++){let ve=(10+Qe*13)*ze,it=.48-Math.abs(Qe-3)*.04,jt=Math.cos(ve)*it/2,tn=-Math.sin(ve)*it/2;k(He,"sphere",[pe*(.24+jt),.28+tn,-.05-Qe*.004],[.12,it,.025],Qe<2?Pe:Te,[0,0,pe*(90-(10+Qe*13))])}}}else if(O.back==="sunburst"){let Te=be(de,[0,.3,Le-.08]);k(Te,"ring",[0,0,0],[.46,.46,.5],re.gold);for(let Pe=0;Pe<12;Pe++){let pe=Pe*30*ze;k(Te,"cone",[Math.cos(pe)*.3,Math.sin(pe)*.3,0],[.05,Pe%2?.14:.22,.02],re.gold,[0,0,Pe*30-90])}Qt(de,ce,"sphere",[0,.3,Le-.1],[.5,.5,.1],re.glowH,Et)}})}O.shards&&Ee.Hips&&ln("Sh",Z(Ee.Hips,X,[0,.35,0]),(z,de)=>{let ce=Ls(z,de,[0,0,0],(Le,Te)=>{Le.rotation.y=Te*.9,Le.position.y=Math.sin(Te*1.3)*.04});for(let Le=0;Le<5;Le++){let Te=Le*72*ze;k(ce,"octa",[Math.cos(Te)*.45,Math.sin(Le*2.1)*.12,Math.sin(Te)*.45],[.06,.13,.02],Le%2?re.accG:ke("#cfe4ff",.6),[0,-Le*72+90,20])}});let Hn=oe&&oe.boots;if(Hn){let z=O.robe==="long";for(let[de,ce,Le]of[[1,"LowerLegL","FootL"],[-1,"LowerLegR","FootR"]]){let Te=ke($t(Hn.r),Hn.r===1?0:.55),Pe=vn(Hn.r),pe=Pt(Ae[Hn.s]||w.accent);!z&&Ee[ce]&&ln("gL"+de,Z(Ee[ce],X,[0,0,0]),(He,Qe)=>{if(Hn.r===1){k(He,"rod",[0,-.24,0],[.125,.22,.125],ke("#5a4232")),k(He,"rod",[0,-.16,0],[.13,.02,.13],ke("#3a2a20"));return}k(He,"taper",[0,-.21,.005],[.13,.3,.13],Te),k(He,"rod",[0,-.355,.005],[.115,.025,.115],Pe),k(He,"box",[0,-.2,.06],[.03,.26,.02],Pe),Hn.r>=3&&k(He,"sphere",[0,-.03,.035],[.11,.1,.09],Te),Hn.r>=4&&k(He,"cone",[de*.065,-.04,0],[.03,.12+(Hn.r-4)*.06,.03],Pe,[0,0,de*-70]),Hn.r>=5&&(k(He,"octa",[0,-.03,.085],[.035,.045,.02],pe),Qt(He,Qe,"sphere",[0,-.03,.08],.1,Pt(Ae[Hn.s]||w.accent,.35),Et))},Ze(Hn)),Ee[Le]&&ln("gF"+de,Z(Ee[Le],X,[0,0,0]),He=>{if(Hn.r===1){k(He,"rod",[0,.06,-.01],[.12,.05,.14],ke("#5a4232"));return}k(He,"dome",[0,.02,.06],[.12,.08,.14],Te),k(He,"rod",[0,.08,-.01],[.13,.035,.14],Pe),z&&Hn.r>=3&&k(He,"octa",[0,.06,.12],[.03,.04,.02],pe)},Ze(Hn)+(z?"r":""))}}}let dt=new Map;function Ke(T,w,C,X=3.2){let N=`${w}|${X}`;dt.has(N)||dt.set(N,{uCrack:{value:new De(w).multiplyScalar(.75)},uPulse:{value:1},uScale:{value:X}});let W=dt.get(N);return T.userData.crack=N,T.onBeforeCompile=H=>{Object.assign(H.uniforms,W),H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCrackP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCrackP = position;`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCrackP; uniform vec3 uCrack; uniform float uPulse; uniform float uScale;
float cHash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float cNoise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(cHash(i), cHash(i + vec3(1,0,0)), f.x), mix(cHash(i + vec3(0,1,0)), cHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(cHash(i + vec3(0,0,1)), cHash(i + vec3(1,0,1)), f.x), mix(cHash(i + vec3(0,1,1)), cHash(i + vec3(1,1,1)), f.x), f.y), f.z); }
float cN2(vec3 p){ return cNoise(p) * 0.75 + cNoise(p * 2.7 + 3.1) * 0.25; }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{ // Seams where the noise crosses 0.5, kept a constant width by dividing by its gradient.
  vec3 cp = vCrackP * uScale; const float e = 0.04;
  float n = cN2(cp), gx = cN2(cp + vec3(e, 0, 0)) - n, gy = cN2(cp + vec3(0, e, 0)) - n, gz = cN2(cp + vec3(0, 0, e)) - n;
  float d = abs(n - 0.5) / max(length(vec3(gx, gy, gz)) / e, 0.05);
  float line = 1.0 - smoothstep(0.012, 0.03, d), heat = (1.0 - smoothstep(0.0, 0.09, d)) * 0.35;
  totalEmissiveRadiance += uCrack * (line + heat) * uPulse; diffuseColor.rgb *= 1.0 - line * 0.9; }`)},T.customProgramCacheKey=()=>"sb-crack",C.push(H=>{W.uPulse.value=.75+Math.sin(H*1.6)*.25}),T}let At={x:.24,y:.27,z:.46};function Jt(T,w,C){let X=ELEMENTS[w]?ELEMENTS[w].color:"#e8553a";T.traverse(_e=>{if(!_e.isMesh)return;let he=Array.isArray(_e.material)?_e.material:[_e.material];for(let Ee of he)(Ee.name==="Yeti_Main"||Ee.name==="Yeti_Secondary")&&Ke(Ee,X,C)});let N={};T.traverse(_e=>{_e.isBone&&(N[_e.name]=_e)}),T.updateMatrixWorld(!0);let W=q("#1e1a17"),H=q("#110f0d"),oe=ie(X),O=ie(X,.3),ge=`titan|${w}`,Re=(_e,he)=>{let Ee=ge+_e;if(!Ie.has(Ee)){let nt=new Kt;he(nt),Ie.set(Ee,{baked:mt(nt),live:[]})}return Es(Ie.get(Ee).baked)};N.Head&&D(N.Head,T,[0,0,0],null).add(Re("H",he=>{for(let Ee of[-1,1])Q("cone",he,[Ee*.34,.5,-.02],[.22,.5,.22],W,[0,0,Ee*-42]),Q("cone",he,[Ee*.56,.8,.08],[.14,.4,.14],H,[-30,0,Ee*-14]),Q("box",he,[Ee*(At.x-.02),At.y+.12,At.z-.02],[.32,.08,.16],H,[15,0,Ee*-24]);for(let Ee of[-1,1])Q("rock",he,[Ee*.22,.17,.55],[.2,.09,.12],W,[10,0,Ee*38]),Q("cone",he,[Ee*.13,.05,.58],[.06,.16,.06],q("#5a4e44"),[-12,0,Ee*-12]);Q("box",he,[0,-.03,.53],[.42,.06,.12],H,[-8,0,0]),Q("rock",he,[0,.62,.12],[.3,.6,.26],H,[-15,0,0]),Q("rock",he,[.13,.56,-.06],[.22,.44,.2],W,[-35,0,-22]),Q("rock",he,[-.13,.56,-.06],[.22,.44,.2],W,[-35,0,22]),Q("rock",he,[0,.44,-.3],[.2,.4,.18],H,[-60,0,0])})),N.Torso&&D(N.Torso,T,[0,0,0],null).add(Re("T",_e=>{[[0,.45,-.38,.5],[.22,.32,-.35,.36],[-.22,.32,-.35,.36],[0,.15,-.44,.34]].forEach(([he,Ee,nt,Mt],ke)=>{Q("rock",_e,[he,Ee,nt],[.16,Mt,.14],ke%2?H:W,[-50,0,he*-60])}),Q("sphere",_e,[0,.3,-.33],[.1,.1,.1],oe)}));for(let _e of["UpperArmL","UpperArmR"])N[_e]&&D(N[_e],T,[0,0,0],null).add(Re(_e,he=>{Q("rock",he,[0,.12,0],[.24,.38,.22],W,[0,0,20]),Q("rock",he,[.06,.02,.12],[.14,.26,.14],H,[30,0,-10]),Q("sphere",he,[0,.12,0],[.4,.4,.4],O)}))}function pn(T,w){let C=LOOKS[T]||LOOKS.brannoc,X=ke=>w?we(ke,"#2e1f33",.55):ke,N=q(X(SKIN[C.skin])),W=q(X(C.hair)),H=q(X(C.armor)),oe=q(X(Fe(C.armor,.7))),O=q(X(C.accent)),ge=q(X("#b8c0cc"),.6),Re=q("#2a1f1a"),_e=w||C.glow?ie(w?"#ff2a2a":C.glow):q("#1a141f"),he=new Kt;Q("capsule",he,[-.15,.35,0],[.2,.16,.2],oe),Q("capsule",he,[.15,.35,0],[.2,.16,.2],oe),Q("box",he,[-.15,.07,.04],[.2,.14,.3],Re),Q("box",he,[.15,.07,.04],[.2,.14,.3],Re),Q("capsule",he,[0,.95,0],[.62,.21,.42],H),Q("cyl",he,[0,.74,0],[.58,.015,.42],O),Q("sphere",he,[-.33,1.22,0],[.26,.2,.26],O),Q("sphere",he,[.33,1.22,0],[.26,.2,.26],O);let Ee=be(he,[0,1.55,0]);Q("sphere",Ee,[0,0,0],[.5,.54,.5],N),Q("sphere",Ee,[-.1,.02,.22],[.08,.06,.04],_e),Q("sphere",Ee,[.1,.02,.22],[.08,.06,.04],_e),C.gear==="helm"?Q("sphere",Ee,[0,.1,-.01],[.55,.46,.55],ge):C.style!=="bald"&&Q("sphere",Ee,[0,.1,-.05],[.54,.44,.52],W);let nt=be(he,[-.38,1.18,0]);Q("capsule",nt,[0,-.28,0],[.16,.14,.16],oe);let Mt=be(he,[.38,1.18,0]);return Q("capsule",Mt,[0,-.28,0],[.16,.14,.16],oe),{model:he,armL:nt,armR:Mt,height:2}}function _t(T){let w=ELEMENTS[T].color,C=q("#6b635c"),X=q("#3d3833"),N=ie(w),W=new Kt;Q("box",W,[-.5,.6,0],[.6,1.2,.6],X),Q("box",W,[.5,.6,0],[.6,1.2,.6],X),Q("box",W,[0,2,0],[2,1.8,1.2],C),Q("box",W,[0,3.25,.1],[1,.9,.9],C),Q("sphere",W,[-.22,3.3,.55],[.2,.12,.06],N),Q("sphere",W,[.22,3.3,.55],[.2,.12,.06],N);let H=be(W,[-1.25,2.7,0]);Q("box",H,[0,-.8,0],[.6,1.7,.6],C);let oe=be(W,[1.25,2.7,0]);return Q("box",oe,[0,-.8,0],[.6,1.7,.6],C),{model:W,armL:H,armR:oe,height:4.1}}let Zt=Math.PI-.95,qt=new F(0,0,-.6),cn=T=>Math.atan2(qt.x-T.x,qt.z-T.z),Yn=T=>(T<=.05?1:-1)*(1.05+.2*Math.min(1,Math.abs(T)/1.8)),Gn={cx:0,cz:-.6,rx:4.2,rz:3.95};function xi(T,w,C){let X=2.2/((Gn.rx+Gn.rz)/2),N=C<=1?0:Math.min(70*ze,X*(C-1)/2),W=C<=1?0:-N+w*(2*N/(C-1)),H=T?W:Math.PI-W;return new F(Gn.cx+Math.sin(H)*Gn.rx,0,Gn.cz+Math.cos(H)*Gn.rz)}function Cs(T){if(T.gear!==void 0)return T.gear;if(T.side==="A")try{return typeof heroGearLook=="function"&&T.heroUid&&typeof heroByUid=="function"?heroGearLook(heroByUid(T.heroUid)):null}catch{return null}let w=T.level||1;if(w<8)return null;let C=Math.min(5,1+Math.floor(w/12)),X={helm:{r:C,s:""},chest:{r:C,s:""}};return(w>=20||T.boss)&&(X.boots={r:C,s:""},X.weapon={r:C,s:""}),X}let yi=T=>T?["weapon","helm","chest","boots"].map(w=>T[w]?`${T[w].r}${T[w].s||""}`:"0").join("."):"";function oc(T){if(!T.mixer)return T.height;T.mixer.update(.01),T.model.updateMatrixWorld(!0);let w=null;if(T.model.traverse(H=>{!w&&H.isBone&&H.name==="Head"&&(w=H)}),!w)return T.height;let C=new F;w.getWorldPosition(C);let X=C.y+.35,N=new oi,W=new F;return T.model.traverse(H=>{if(!(!H.isMesh||!H.userData.kit||!H.geometry)){for(let oe=H;oe;oe=oe.parent)if(oe===w){H.geometry.boundingBox||H.geometry.computeBoundingBox(),N.copy(H.geometry.boundingBox).applyMatrix4(H.matrixWorld),X=Math.max(X,Math.min(N.max.y,C.y+.9));break}}}),X}function Id(T,w,C){let X=T.side==="A",N=T.titan?1:T.boss?1.3:1,H=(T.titan?rt("titan","titan",!1,T.el):rt(T.template.id,b[T.template.id]||"adventurer",!X&&!T.rival,T.el,Cs(T)))||(T.titan?_t(T.el):pn(T.template.id,!X&&!T.rival)),oe=new Kt;oe.add(H.model),H.model.scale.multiplyScalar(N);let O=T.titan?new F(0,0,-4):xi(X,w,C);oe.position.copy(O);let ge=cn(O);oe.rotation.y=ge;let Re=new St(new Pa(.62*(T.titan?2:N),32),ie(ELEMENTS[T.el].color,.35));Re.rotation.x=-Math.PI/2,Re.position.y=.02,oe.add(Re);let _e=new St(new gs(.72*(T.titan?2:N),.86*(T.titan?2:N),40),new sn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));_e.rotation.x=-Math.PI/2,_e.position.y=.03,oe.add(_e),e.add(oe);let he=T.titan?H.height:oc(H)*N;a.set(T.key,{u:T,root:oe,model:H.model,armL:H.armL,armR:H.armR,mixer:H.mixer,actions:H.actions,anim:H.anim,fx:H.fx||[],aura:Re,ring:_e,home:O.clone(),idleRot:ge,height:H.height*N,top:he,phase:Math.random()*10,busy:!1,dead:!1,fidgetAt:6+Math.random()*10})}function Ld(T){for(let[w,C]of a)C.u.side===T&&(e.remove(C.root),a.delete(w))}let Xs=0,Ys=0,Rs=0,Xr=0,Lu=new F,Yr=new F,qa=new F;function Du(T){if(!r)return;let w=Math.min(.05,(T-s)/1e3);s=T;let C=Xs>0?w*.06:w;Xs=Math.max(0,Xs-w);let X=T/1e3;for(let W of a.values()){if(W.mixer&&W.mixer.update(C*p()),W.dead)continue;for(let oe of W.fx)oe(X);if(!W.mixer)W.model.position.y=Math.sin(X*2.4+W.phase)*.025,!W.busy&&W.armR&&(W.armR.rotation.x=(Math.sin(X*2.4+W.phase)*5-8)*Math.PI/180,W.armL.rotation.x=(-Math.sin(X*2.4+W.phase)*4-4)*Math.PI/180);else if(W.anim&&!W.busy&&!W.won&&(W.fidgetAt-=w,W.fidgetAt<=0)){W.fidgetAt=8+Math.random()*12;let oe=W.anim.S.fidget.filter(W.anim.has);if(oe.length&&W.anim.cur&&W.anim.cur.loop===Wo){let O=W.anim.play(oe[Math.floor(Math.random()*oe.length)],{fade:.35});O&&O.getClip().duration>3&&setTimeout(()=>{W.anim.cur===O&&!W.busy&&W.anim.idle(.4)},2200)}}let H=1+Math.sin(X*3+W.phase)*.05;W.aura.scale.set(H,H,H)}if(c=c.filter(W=>(W.k=Math.min(1,W.k+C*p()/W.dur),W.fn(W.k),W.k>=1?(W.done(),!1):!0)),o=o.filter(W=>W.update(C*p())),Yr.copy(u),qa.copy(rn),Rs>0){let W=zi(Rs);qa.lerp(Lu,W*.22)}let N=bn*(1-.12*zi(Rs));if(Math.abs(t.fov-N)>.001&&(t.fov=N,t.updateProjectionMatrix()),Ys>0&&(Ys=Math.max(0,Ys-w),Yr.lerp(qa,.06*Math.sin(Ys/.25*Math.PI))),h>0){h-=w;let W=f*Math.max(0,h/.22);Yr.x+=(Math.random()-.5)*W,Yr.y+=(Math.random()-.5)*W}t.position.copy(Yr),t.lookAt(qa),U&&U.tick(T),Ve&&Ve.update(X),Ot?Ot.render(w):r.render(e,t);for(let W of l)W();i=requestAnimationFrame(Du)}function Dd(T=6e3,w=120,C=0){if(!window.SB_DEBUG)return!1;let X=performance.now()/1e3;for(let N=0;N<T;N++){X+=1/w;for(let W of a.values()){if(C&&W.root.position.set(W.home.x+Math.sin(X*2.3+W.phase)*C*Math.max(0,Math.sin(X*.7)),W.home.y,W.home.z+Math.sin(X*3.1)*C*.5),W.mixer&&W.mixer.update(1/w),!W.dead)for(let H of W.fx)H(X);W.root.updateMatrixWorld(!0)}}if(C)for(let N of a.values())N.root.position.copy(N.home);return!0}function Vn(T,w){return new Promise(C=>c.push({dur:T,fn:w,done:C,k:0}))}let zi=T=>1-Math.pow(1-T,3),ku=T=>T<.5?2*T*T:1-Math.pow(-2*T+2,2)/2;function Fu(T,w){let C=T.actions&&T.actions[w];if(!C)return!1;for(let X of Object.values(T.actions))X!==C&&X.isRunning()&&X.fadeOut(.15);return C.reset().setEffectiveTimeScale(1).fadeIn(.12).play(),!0}let cc=new F;function kd(T,w="head"){let C=a.get(T);if(!C||!t||!n)return null;let X=w==="feet"?0:w==="center"?C.height*.55:(C.top||C.height)+.12;return cc.set(C.root.position.x,C.root.position.y+X,C.root.position.z).project(t),{x:(cc.x+1)/2*n.clientWidth,y:(1-cc.y)/2*n.clientHeight}}let Kr=T=>{let w=a.get(T);return w?new F(w.root.position.x,w.height*.55,w.root.position.z):null};function Fd(T,w){if(!e)return;let C=new Kt,X=new sn({color:new De(w),transparent:!0,opacity:.9,depthWrite:!1,blending:Ii,side:hn}),N=new St(new gs(.75,.82,48),X),W=new St(new gs(.5,.54,6),X);C.add(N,W);for(let H=0;H<6;H++){let oe=new St(new di(.06,.28),X);oe.position.set(Math.cos(H*Math.PI/3)*.64,Math.sin(H*Math.PI/3)*.64,0),oe.rotation.z=H*Math.PI/3,C.add(oe)}C.rotation.x=-Math.PI/2,C.position.copy(T.root.position).setY(.05),e.add(C),Vn(.75,H=>{C.rotation.z=H*2.2,C.scale.setScalar(.6+zi(Math.min(1,H*2.5))*.6),X.opacity=.9*(H<.6?1:1-(H-.6)/.4)}).then(()=>{e&&e.remove(C),C.traverse(H=>H.geometry&&H.geometry.dispose()),X.dispose()})}async function Od(T,w,C,X={}){let N=a.get(T);if(!N)return;N.busy=!0;let W=a.get(w),H=W?W.root.position.clone().sub(N.home).setY(0):new F(0,0,N.u.side==="A"?-1:1),oe=Math.atan2(H.x,H.z),O=N.root.rotation.y,ge=N.anim;if(X.ult&&!m){let _e=++Xr;Lu.copy(N.root.position).setY(1.2);let he=Rs;Vn(.25,Ee=>{Xr===_e&&(Rs=he+(1-he)*Ee)}).then(()=>Bi(.55)).then(()=>{if(Xr===_e)return Vn(.35,Ee=>{Xr===_e&&(Rs=1-Ee)})})}if(ge&&N.u.titan){ge.has("Jump")&&ge.has("Jump_Land")&&(X.ult||Math.random()<.4)?(ge.play("Jump",{fade:.12,speed:1.6,hold:!0}),await Bi(.3),ge.play("Jump_Land",{fade:.08,speed:1.4}),await Bi(.12),Ou(.35),await Bi(.2)):(ge.strike(),await Bi(.5));return}if(ge&&C){let _e=N.home.clone().add(H.clone().multiplyScalar(Math.max(.35,1-1.15/Math.max(1.2,H.length()))));ge.play("Run",{loop:!0,fade:.12,speed:1.4}),await Vn(.26,he=>{N.root.position.lerpVectors(N.home,_e,ku(he)),N.root.rotation.y=O+ja(O,oe)*zi(Math.min(1,he*1.6))}),ge.strike(),await Bi(.35);return}if(ge){N.root.rotation.y=O+ja(O,oe),ge.play(X.support&&ge.has(ge.S.support)?ge.S.support:ge.S.cast,{fade:.12}),Fd(N,ELEMENTS[N.u.el]?ELEMENTS[N.u.el].color:"#ffffff");let _e=N.home.clone().add(H.clone().normalize().multiplyScalar(.2));await Vn(.2,he=>{N.root.position.lerpVectors(N.home,_e,zi(he))}),await Bi(.15);return}let Re=C?N.home.clone().add(H.clone().multiplyScalar(.55)):N.home.clone().add(H.clone().normalize().multiplyScalar(.25));await Vn(C?.22:.2,_e=>{N.root.position.lerpVectors(N.home,Re,zi(_e)),N.armR&&(N.armR.rotation.x=-(C?150:160)*_e*Math.PI/180,C||(N.armL.rotation.x=-160*_e*Math.PI/180))}),C&&N.armR&&await Vn(.1,_e=>{N.armR.rotation.x=(-150+190*_e)*Math.PI/180})}let ja=(T,w)=>{let C=(w-T)%(Math.PI*2);return C>Math.PI&&(C-=Math.PI*2),C<-Math.PI&&(C+=Math.PI*2),C},Bi=T=>Vn(T,()=>{});async function Nd(T){let w=a.get(T);if(!w||w.dead)return;let C=w.root.position.clone(),X=w.root.rotation.y,N=w.idleRot!=null?w.idleRot:w.u.side==="A"?Zt:0,W=w.armR?w.armR.rotation.x:0,H=w.armL?w.armL.rotation.x:0,oe=C.distanceTo(w.home)>.6;if(w.anim&&w.u.titan&&Math.random()<.5){let O=["Yes","No","Wave"].filter(w.anim.has);O.length&&w.anim.play(O[Math.floor(Math.random()*O.length)],{fade:.2,speed:1.3})}else w.anim&&oe&&w.anim.play(w.anim.has("Run_Back")?"Run_Back":"Run",{loop:!0,fade:.15,speed:1.5});await Vn(.25,O=>{w.root.position.lerpVectors(C,w.home,ku(O)),w.root.rotation.y=X+ja(X,N)*zi(O),w.armR&&!w.mixer&&(w.armR.rotation.x=W*(1-O),w.armL.rotation.x=H*(1-O))}),w.anim&&oe&&!w.u.titan&&w.anim.idle(.2),w.busy=!1}function zd(T,w){let C=a.get(T);if(!C||C.dead)return;let X=w&&C.u.maxHp?w.amount/C.u.maxHp:0,N=!!(w&&w.crit),W=N||X>.14,H=C.anim;if(N&&(Xs=Math.max(Xs,m?0:.09),Ys=.25),H&&!C.busy?C.u.titan?H.play(H.has("HitReact")?"HitReact":"Idle",{fade:.1}):!W&&w&&(w.em<1||X<.04)&&Math.random()<.35&&H.has("Roll")?H.play("Roll",{fade:.1,speed:1.5}):H.play(W&&H.has("HitRecieve_2")?"HitRecieve_2":"HitRecieve",{fade:.08}):H||Fu(C,"hit"),C.u.titan)return;let oe=new F(0,0,(C.u.side==="A"?1:-1)*(W?.34:.2)),O=C.root.position.clone();Vn(W?.24:.18,ge=>{C.root.position.copy(O).addScaledVector(oe,Math.sin(ge*Math.PI))})}function Bd(T){let w=a.get(T);if(!w||w.dead)return;w.dead=!0;let C=w.root.position.y;(w.anim&&w.anim.has("Death")?(w.anim.play("Death",{fade:.12,clamp:!0}),Promise.resolve()):Fu(w,"die")?Promise.resolve():Vn(.45,N=>{w.root.rotation.x=-1.4*zi(N)*(w.u.side==="A"?-1:1)})).then(()=>Bi(1.1)).then(()=>Vn(.8,N=>{w.root.position.y=C-.9*N})).then(()=>{w.aura.visible=!1,w.ring.visible=!1}),Ps(Kr(T),"#8a8a96",26,1.6,.6,-.3)}function Ud(T="A"){let w=0;for(let C of a.values()){if(C.u.side!==T||C.dead||!C.anim)continue;C.won=!0,C.busy=!0;let X=C.root.rotation.y,N=.1+w++*.12;Bi(N).then(()=>{Vn(.35,W=>{C.root.rotation.y=X+ja(X,-.25+C.home.x*.08)*zi(W)}),C.anim.play(C.anim.S.win,{loop:!0,fade:.25})})}}function Gd(T,w){let C=a.get(T);C&&(w?(C.ring.material.color.set(w),C.ring.material.opacity=.85):C.ring.material.opacity=0)}function Ps(T,w,C,X,N,W){if(!T||!e)return;m&&(C=Math.ceil(C/3));let H=new Ct,oe=new Float32Array(C*3),O=[];for(let he=0;he<C;he++)oe[he*3]=T.x,oe[he*3+1]=T.y,oe[he*3+2]=T.z,O.push(new F(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(X*(.4+Math.random()*.6)));H.setAttribute("position",new pt(oe,3));let ge=new qs({color:new De(w),size:N,map:Je(),transparent:!0,depthWrite:!1,blending:Ii,sizeAttenuation:!0}),Re=new ps(H,ge);e.add(Re);let _e=0;o.push({update(he){_e+=he;let Ee=H.attributes.position.array;for(let nt=0;nt<C;nt++)O[nt].y-=W*he*6,Ee[nt*3]+=O[nt].x*he,Ee[nt*3+1]+=O[nt].y*he,Ee[nt*3+2]+=O[nt].z*he;return H.attributes.position.needsUpdate=!0,ge.opacity=Math.max(0,1-_e/.7),_e>.7?(e&&e.remove(Re),H.dispose(),ge.dispose(),!1):!0}})}function Vd(T,w,C){let X=Kr(T);Ps(X,w,C?44:22,C?5:3.2,C?.45:.32,.6),Ps(X,"#ffffff",C?10:5,1.4,C?1.1:.7,0)}function Hd(T){let w=a.get(T);w&&Ps(w.root.position.clone().setY(.3),"#7dff8a",18,1,.3,-.6)}function Wd(T,w){let C=a.get(T);C&&Ps(C.root.position.clone().setY(.4),w?"#ffd86a":"#c07aff",10,.9,.28,-.5)}function qd(T,w){let C=a.get(T);C&&Ps(C.root.position.clone().setY(.1),w,26,1.4,.35,-.7)}function jd(T,w,C,X=.3){let N=Kr(T),W=Kr(w);if(!N||!W||!e)return Promise.resolve();let H=new St(me().sphere,ie(we(C,"#ffffff",.4)));H.scale.setScalar(.3),e.add(H);let oe=0;return Vn(X,O=>{H.position.lerpVectors(N,W,O),H.position.y+=Math.sin(O*Math.PI)*.9,++oe%2===0&&Ps(H.position.clone(),C,3,.3,.35,0)}).then(()=>{e&&e.remove(H)})}function Xd(T,w){let C=Kr(T);if(!C||!e)return;let X=new St(new gs(.55,.75,32,1,-.9,2.2),new sn({color:new De(w),transparent:!0,side:hn,blending:Ii,depthWrite:!1}));X.position.copy(C),X.quaternion.copy(t.quaternion),X.rotateZ(Math.random()*.8-.4),e.add(X),Vn(.22,N=>{X.material.opacity=1-N,X.scale.setScalar(.8+N*.5)}).then(()=>{e&&e.remove(X),X.geometry.dispose(),X.material.dispose()})}function Ou(T=.25){m||(h=.22,f=T)}function Yd(T){l.push(T)}let Nu=256,zu=window.SB_VERSION&&window.SB_VERSION.version||"dev",Bu="sigilbound.faces.v1",Is=new Map;try{let T=JSON.parse(localStorage.getItem(Bu)||"null");if(T&&T.ver===zu)for(let[w,C]of Object.entries(T.faces||{}))Is.set(w,C)}catch{}let lc=[],uc=!1,Ln=null,Uu=[],Gu=0,hc=(T,w,C)=>T==="titan"?`titan|${w}`:`${T}|${C?1:0}`;function Kd(){clearTimeout(Gu),Gu=setTimeout(()=>{try{localStorage.setItem(Bu,JSON.stringify({ver:zu,faces:Object.fromEntries(Is)}))}catch{}},400)}function Jd(T,w,C){let X=T==="titan"?"titan":b[T]||"adventurer",N=rt(T,X,C,w);if(!N)return null;Ln||(Ln=new Oa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(1),Ln.setSize(Nu,Nu,!1),Ln.outputEncoding=yt,Ln.toneMapping=ka,Ln.toneMappingExposure=ei.exposure,Ln.setClearColor(0,0));let W=new fs;W.environment=Zo(Ln),W.add(new Dr(16774374,3813440,1.3));let H=new Jn(16773597,2.2);H.position.set(-2,3,4),W.add(H);let oe=new Jn(16777215,.6);oe.position.set(3,1,3),W.add(oe);let O=new Jn(w&&ELEMENTS[w]?new De(ELEMENTS[w].color):10070783,1.4);O.position.set(2,3,-4),W.add(O);let ge=N.model;ge.rotation.y=-.35,W.add(ge),N.mixer&&N.mixer.update(.6);for(let xt of N.fx||[])xt(.6);ge.updateMatrixWorld(!0);let Re=null;ge.traverse(xt=>{!Re&&xt.isBone&&xt.name==="Head"&&(Re=xt)});let _e=new F;Re?Re.getWorldPosition(_e):_e.set(0,N.height*.8,0);let he=X==="titan",Ee=he?2.9:.74;_e.y+=.15;let nt=new mn(28,1,.05,50),Mt=Ee/2/Math.tan(14*ze);nt.position.set(_e.x,_e.y+Ee*.08,_e.z+Mt),nt.lookAt(_e.x,_e.y-Ee*.04,_e.z),Ln.render(W,nt);let ke=null;try{ke=Ln.domElement.toDataURL("image/webp",.86),ke.startsWith("data:image/webp")||(ke=Ln.domElement.toDataURL("image/png"))}catch{ke=null}return W.traverse(xt=>{xt.isMesh&&(Array.isArray(xt.material)?xt.material:[xt.material]).forEach(Ei=>!Ei.userData.shared&&Ei.dispose&&Ei.dispose())}),ke}function Zd(){uc||(uc=!0,le().then(()=>{let T=()=>{let w=lc.shift();if(!w){uc=!1,Ln&&(Qo(Ln),Ln.dispose(),Ln.forceContextLoss(),Ln=null),Kd(),Uu.forEach(X=>{try{X()}catch{}});return}let C=hc(w.id,w.el,w.hollow);if(!Is.has(C))try{let X=Jd(w.id,w.el,w.hollow);Is.set(C,X)}catch(X){console.warn("Sigilbound: face failed",w.id,X),Is.set(C,null)}setTimeout(T,0)};T()}))}function Qd(T,w,C=!1){if(!_())return null;let X=hc(T,w,C);return Is.has(X)?Is.get(X):(lc.some(N=>hc(N.id,N.el,N.hollow)===X)||lc.push({id:T,el:w,hollow:C}),Zd(),null)}let $d=T=>Uu.push(T),Be={renderer:null,scene:null,camera:null,built:null,key:"",raf:0,last:0,yaw:-.35,spin:0,host:null};function Vu(T){if(Be.raf=0,!Be.renderer||!Be.renderer.domElement.isConnected)return;let w=Math.min(.05,(T-Be.last)/1e3);if(Be.last=T,Be.built){Be.built.mixer&&Be.built.mixer.update(w);for(let C of Be.built.fx||[])C(T/1e3);Be.drag||(Be.yaw+=Be.spin*w,Be.spin*=Math.pow(.04,w)),Be.built.model.rotation.y=Be.yaw}Be.renderer.render(Be.scene,Be.camera),Be.raf=requestAnimationFrame(Vu)}function fc(){if(!Be.renderer||!Be.host)return;let T=Be.host.clientWidth||110,w=Be.host.clientHeight||165;Be.renderer.setSize(T,w,!1),Be.camera.aspect=T/w,Be.camera.updateProjectionMatrix()}function ep(){let T=new Oa({antialias:!0,alpha:!0});T.setPixelRatio(Math.min(U&&U.current==="Ultra"?3:2,window.devicePixelRatio||1)),T.outputEncoding=yt,T.toneMapping=ka,T.toneMappingExposure=ei.exposure,T.setClearColor(0,0),T.domElement.className="show3d",Be.renderer=T,Be.scene=new fs,Be.scene.environment=Zo(T),Be.scene.add(new Dr(16774374,3813440,1.3));let w=new Jn(16773597,2.2);w.position.set(-2,3,4),Be.scene.add(w);let C=new Jn(16777215,.6);C.position.set(3,1,3),Be.scene.add(C),Be.rim=new Jn(10070783,1.4),Be.rim.position.set(2,3,-4),Be.scene.add(Be.rim),Be.camera=new mn(30,110/165,.1,50);let X=T.domElement,N=0,W=0,H=0,oe=0;X.addEventListener("pointerdown",ge=>{Be.drag=!0,N=H=ge.clientX,oe=performance.now(),W=0,Be.spin=0,X.setPointerCapture&&X.setPointerCapture(ge.pointerId)}),X.addEventListener("pointermove",ge=>{if(!Be.drag)return;let Re=ge.clientX-H,_e=performance.now();Be.yaw+=Re*.012,W+=Math.abs(Re),Be.spin=Re*.012/Math.max(.008,(_e-oe)/1e3),H=ge.clientX,oe=_e});let O=()=>{Be.drag&&(Be.drag=!1,performance.now()-oe>80&&(Be.spin=0),Be.spin=Math.max(-8,Math.min(8,Be.spin)),W<6&&Be.built&&Be.built.anim&&Be.built.anim.strike())};X.addEventListener("pointerup",O),X.addEventListener("pointercancel",O),window.addEventListener("resize",fc)}function tp(T,w,C,X){if(!T||!_()||!j)return!1;Be.renderer||ep();let N=`${w}|${C}|${yi(X)}`;if(Be.key!==N){Be.built&&Be.scene.remove(Be.built.model);let W=rt(w,b[w]||"adventurer",!1,C,X||null);if(!W)return!1;Be.built=W,Be.key=N,Be.yaw=-.35,Be.spin=0,Be.scene.add(W.model),Be.rim.color.set(ELEMENTS[C]?ELEMENTS[C].color:"#99aaff"),W.mixer&&W.mixer.update(.5),W.model.updateMatrixWorld(!0);let H=new oi().set(new F(-.45,0,-.45),new F(.45,W.height-.2,.45)),oe=new oi;W.model.traverse(Mt=>{Mt.isMesh&&Mt.userData.kit&&Mt.geometry&&(Mt.geometry.boundingBox||Mt.geometry.computeBoundingBox(),H.union(oe.copy(Mt.geometry.boundingBox).applyMatrix4(Mt.matrixWorld)))});let O=Math.min(1.3,Math.max(-H.min.x,H.max.x,-H.min.z,H.max.z)),ge=Math.min(-.3,Math.max(-.5,H.min.y)),Re=Math.max(2.65,Math.min(3.3,H.max.y+.05)),_e=Math.tan(15*ze),he=(T.clientWidth||110)/(T.clientHeight||165),Ee=Math.max(5.5,Math.max((Re-ge)/2/_e,O/(_e*he))*1.04+O*.4);Be.camera.position.set(0,(ge+Re)/2+.18,Ee),Be.camera.lookAt(0,(ge+Re)/2,0);let nt=ELEMENTS[C]?ELEMENTS[C].color:"#ffffff";Be.aura?Be.aura.material=ie(nt,.3):(Be.aura=new St(new Pa(.6,40),ie(nt,.3)),Be.aura.rotation.x=-Math.PI/2,Be.aura.position.y=.01,Be.scene.add(Be.aura))}return Be.host=T,Be.renderer.domElement.parentNode!==T&&T.prepend(Be.renderer.domElement),T.classList.add("has3d"),fc(),Be.raf||(Be.last=performance.now(),Be.raf=requestAnimationFrame(Vu)),!0}function np(T){Be.renderer&&(T&&!(Be.host&&Be.host.matches&&Be.host.matches(T))||(cancelAnimationFrame(Be.raf),Be.raf=0,window.removeEventListener("resize",fc),Be.renderer.domElement.remove(),Qo(Be.renderer),Be.renderer.dispose(),Be.renderer.forceContextLoss(),Object.assign(Be,{renderer:null,scene:null,camera:null,built:null,key:"",host:null,aura:null})))}return ne(),{supported:_,mount:tt,unmount:Xe,addUnit:Id,removeSide:Ld,screen:kd,attack:Od,recover:Nd,hit:zd,die:Bd,victory:Ud,setHighlight:Gd,setQuality:Ne,get quality(){return U?U.current:null},get qualityAuto(){return U?U.auto:!0},burst:Vd,heal:Hd,buff:Wd,cast:qd,projectile:jd,slash:Xd,shake:Ou,onFrame:Yd,whenReady:le,face:Qd,onFaces:$d,showcase:tp,showcaseStop:np,setCamera:Nn,cameras:ft,get camera(){return ut()},debugStep:Dd,has:T=>a.has(T),get active(){return!!r},get modelsReady(){return j}}})();window.W3D=Ay;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

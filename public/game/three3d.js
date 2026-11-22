"use strict";(()=>{var Sl="149";var Rd=0,Eh=1,Pd=2;var wa=1,Lr=2,Qr=3,fi=0,Fn=1,cn=2;var as=0,os=1,Li=2,Ch=3,Rh=4,Id=5,or=100,Ld=101,Dd=102,Ph=103,Ih=104,kd=200,Fd=201,Od=202,Nd=203,$u=204,ef=205,zd=206,Bd=207,Ud=208,Gd=209,Hd=210,Vd=0,Wd=1,qd=2,zc=3,jd=4,Xd=5,Yd=6,Kd=7,tf=0,Jd=1,Zd=2,ai=0,Tl=1,Qd=2,$d=3,Sa=4,ep=5,nf=300,dr=301,pr=302,Bc=303,Uc=304,Lo=306,Kn=1e3,ri=1001,oa=1002,_n=1003,co=1004;var ea=1005;var Cn=1006,Al=1007;var Si=1008;var di=1009,tp=1010,np=1011,sf=1012,ip=1013,Is=1014,rs=1015,Ti=1016,sp=1017,rp=1018,ur=1020,ap=1021,kn=1023,op=1024,cp=1025,Ls=1026,mr=1027,lp=1028,hp=1029,up=1030,fp=1031,dp=1033,nc=33776,ic=33777,sc=33778,rc=33779,Lh=35840,Dh=35841,kh=35842,Fh=35843,pp=36196,Oh=37492,Nh=37496,zh=37808,Bh=37809,Uh=37810,Gh=37811,Hh=37812,Vh=37813,Wh=37814,qh=37815,jh=37816,Xh=37817,Yh=37818,Kh=37819,Jh=37820,Zh=37821,ac=36492,mp=36283,Qh=36284,$h=36285,eu=36286,El=2200,Do=2201,gp=2202,gr=2300,ks=2301,oc=2302,cr=2400,lr=2401,lo=2402,Cl=2500,bp=2501,rf=0,ko=1,Ta=2,Di=3e3,xt=3001,xp=3200,yp=3201,af=0,vp=1;var Pi="srgb",Fs="srgb-linear";var cc=7680;var _p=519,Gc=35044;var tu="300 es",Hc=1035,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=1234567,ta=Math.PI/180,ca=180/Math.PI;function wi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Rn(r,e,t){return Math.max(e,Math.min(t,r))}function Rl(r,e){return(r%e+e)%e}function Mp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wp(r,e,t){return r!==e?(t-r)/(e-r):0}function na(r,e,t){return(1-t)*r+t*e}function Sp(r,e,t,n){return na(r,e,1-Math.exp(-t*n))}function Tp(r,e=1){return e-Math.abs(Rl(r,e*2)-e)}function Ap(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ep(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Rp(r,e){return r+Math.random()*(e-r)}function Pp(r){return r*(.5-Math.random())}function Ip(r){r!==void 0&&(nu=r);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(r){return r*ta}function Dp(r){return r*ca}function Vc(r){return(r&r-1)===0&&r!==0}function of(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kp(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var cf=Object.freeze({__proto__:null,DEG2RAD:ta,RAD2DEG:ca,ceilPowerOfTwo:of,clamp:Rn,damp:Sp,degToRad:Lp,denormalize:Ki,euclideanModulo:Rl,floorPowerOfTwo:ho,generateUUID:wi,inverseLerp:wp,isPowerOfTwo:Vc,lerp:na,mapLinear:Mp,normalize:Wt,pingpong:Tp,radToDeg:Dp,randFloat:Rp,randFloatSpread:Pp,randInt:Cp,seededRandom:Ip,setQuaternionFromProperEuler:kp,smootherstep:Ep,smoothstep:Ap}),Oe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],x=i[6],_=i[1],b=i[4],v=i[7],E=i[2],P=i[5],V=i[8];return s[0]=a*m+o*_+c*E,s[3]=a*p+o*b+c*P,s[6]=a*x+o*v+c*V,s[1]=l*m+h*_+u*E,s[4]=l*p+h*b+u*P,s[7]=l*x+h*v+u*V,s[2]=f*m+d*_+g*E,s[5]=f*p+d*b+g*P,s[8]=f*x+d*v+g*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=u*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(h*t-i*c)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new Pn;function lf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function la(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var hc={[Pi]:{[Fs]:Ds},[Fs]:{[Pi]:oo}},Dn={legacyMode:!0,get workingColorSpace(){return Fs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(hc[e]&&hc[e][t]!==void 0){let n=hc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={r:0,g:0,b:0},vi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function za(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dn.workingColorSpace){if(e=Rl(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return Dn.toWorkingColorSpace(this,i),this}setStyle(e,t=Pi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pi){let n=hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Dn.fromWorkingColorSpace(za(this,vn),e),Rn(vn.r*255,0,255)<<16^Rn(vn.g*255,0,255)<<8^Rn(vn.b*255,0,255)<<0}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dn.workingColorSpace){Dn.fromWorkingColorSpace(za(this,vn),t);let n=vn.r,i=vn.g,s=vn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Dn.workingColorSpace){return Dn.fromWorkingColorSpace(za(this,vn),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Pi){return Dn.fromWorkingColorSpace(za(this,vn),e),e!==Pi?`color(${e} ${vn.r} ${vn.g} ${vn.b})`:`rgb(${vn.r*255|0},${vn.g*255|0},${vn.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(vi),vi.h+=e,vi.s+=t,vi.l+=n,this.setHSL(vi.h,vi.s,vi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Na);let n=na(vi.h,Na.h,t),i=na(vi.s,Na.s,t),s=na(vi.l,Na.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Ie.NAMES=hf;var Xs,uo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=la("canvas")),Xs.width=e.width,Xs.height=e.height;let n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ds(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fo=class{constructor(e=null){this.isSource=!0,this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(fc(i[a].image)):s.push(fc(i[a]))}else s=fc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function fc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?uo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,On=class r extends Ji{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=ri,i=ri,s=Cn,a=Si,o=kn,c=di,l=r.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=wi(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=nf;On.DEFAULT_ANISOTROPY=1;var jt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],x=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(d+1)/2,E=(x+1)/2,P=(h+f)/4,V=(u+m)/4,T=(g+p)/4;return b>v&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=P/n,s=V/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=P/i,s=T/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=V/s,i=T/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-m)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zn=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new On(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},po=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wc=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u!==m||c!==f||l!==d||h!==g){let p=1-o,x=c*f+l*d+h*g+u*m,_=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){let E=Math.sqrt(b),P=Math.atan2(E,x*_);p=Math.sin(p*P)/E,o=Math.sin(o*P)/E}let v=o*_;if(c=c*p+f*v,l=l*p+d*v,h=h*p+g*v,u=u*p+m*v,p===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,u=c*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=l*c+f*-s+h*-o-u*-a,this.y=h*c+f*-a+u*-s-l*-o,this.z=u*c+f*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new D,iu=new xn,oi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],f=e[c+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=As.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)As.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(As)}else n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox),pc.applyMatrix4(e.matrixWorld),this.union(pc);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,As),As.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ba.subVectors(this.max,Vr),Ys.subVectors(e.a,Vr),Ks.subVectors(e.b,Vr),Js.subVectors(e.c,Vr),es.subVectors(Ks,Ys),ts.subVectors(Js,Ks),Es.subVectors(Ys,Js);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!mc(t,Ys,Ks,Js,Ba)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Ys,Ks,Js,Ba))?!1:(Ua.crossVectors(es,ts),t=[Ua.x,Ua.y,Ua.z],mc(t,Ys,Ks,Js,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return As.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(As).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hi=[new D,new D,new D,new D,new D,new D,new D,new D],As=new D,pc=new oi,Ys=new D,Ks=new D,Js=new D,es=new D,ts=new D,Es=new D,Vr=new D,Ba=new D,Ua=new D,Cs=new D;function mc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Cs.fromArray(r,s);let o=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),c=e.dot(Cs),l=t.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Op=new oi,Wr=new D,gc=new D,Zi=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Op.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(gc)),this.expandByPoint(Wr.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new D,bc=new D,Ga=new D,ns=new D,xc=new D,Ha=new D,yc=new D,ha=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.direction).multiplyScalar(t).add(this.origin),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bc.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(bc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=ns.dot(this.direction),c=-ns.dot(Ga),l=ns.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ga).multiplyScalar(f).add(bc),d}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,s){xc.subVectors(t,e),Ha.subVectors(n,e),yc.crossVectors(xc,Ha);let a=this.direction.dot(yc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);let c=o*this.direction.dot(Ha.crossVectors(ns,Ha));if(c<0)return null;let l=o*this.direction.dot(xc.cross(ns));if(l<0||c+l>a)return null;let h=-o*ns.dot(yc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,h,u,f,d,g,m,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f-m*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+m,t[1]=c*u,t[5]=m*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-m*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+m,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,zp)}lookAt(e,t,n){let i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),is.crossVectors(n,ii),is.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),is.crossVectors(n,ii)),is.normalize(),Va.crossVectors(ii,is),i[0]=is.x,i[4]=Va.x,i[8]=ii.x,i[1]=is.y,i[5]=Va.y,i[9]=ii.y,i[2]=is.z,i[6]=Va.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],x=n[14],_=n[3],b=n[7],v=n[11],E=n[15],P=i[0],V=i[4],T=i[8],R=i[12],Y=i[1],fe=i[5],j=i[9],K=i[13],J=i[2],te=i[6],ue=i[10],le=i[14],ee=i[3],ie=i[7],Me=i[11],Ve=i[15];return s[0]=a*P+o*Y+c*J+l*ee,s[4]=a*V+o*fe+c*te+l*ie,s[8]=a*T+o*j+c*ue+l*Me,s[12]=a*R+o*K+c*le+l*Ve,s[1]=h*P+u*Y+f*J+d*ee,s[5]=h*V+u*fe+f*te+d*ie,s[9]=h*T+u*j+f*ue+d*Me,s[13]=h*R+u*K+f*le+d*Ve,s[2]=g*P+m*Y+p*J+x*ee,s[6]=g*V+m*fe+p*te+x*ie,s[10]=g*T+m*j+p*ue+x*Me,s[14]=g*R+m*K+p*le+x*Ve,s[3]=_*P+b*Y+v*J+E*ee,s[7]=_*V+b*fe+v*te+E*ie,s[11]=_*T+b*j+v*ue+E*Me,s[15]=_*R+b*K+v*le+E*Ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],x=e[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+m*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+p*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+x*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],x=e[15],_=u*p*l-m*f*l+m*c*d-o*p*d-u*c*x+o*f*x,b=g*f*l-h*p*l-g*c*d+a*p*d+h*c*x-a*f*x,v=h*m*l-g*u*l+g*o*d-a*m*d-h*o*x+a*u*x,E=g*u*c-h*m*c-g*o*f+a*m*f+h*o*p-a*u*p,P=t*_+n*b+i*v+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=_*V,e[1]=(m*f*s-u*p*s-m*i*d+n*p*d+u*i*x-n*f*x)*V,e[2]=(o*p*s-m*c*s+m*i*l-n*p*l-o*i*x+n*c*x)*V,e[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*V,e[4]=b*V,e[5]=(h*p*s-g*f*s+g*i*d-t*p*d-h*i*x+t*f*x)*V,e[6]=(g*c*s-a*p*s-g*i*l+t*p*l+a*i*x-t*c*x)*V,e[7]=(a*f*s-h*c*s+h*i*l-t*f*l-a*i*d+t*c*d)*V,e[8]=v*V,e[9]=(g*u*s-h*m*s-g*n*d+t*m*d+h*n*x-t*u*x)*V,e[10]=(a*m*s-g*o*s+g*n*l-t*m*l-a*n*x+t*o*x)*V,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*V,e[12]=E*V,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*p+t*u*p)*V,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*p-t*o*p)*V,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,m=a*h,p=a*u,x=o*u,_=c*l,b=c*h,v=c*u,E=n.x,P=n.y,V=n.z;return i[0]=(1-(m+x))*E,i[1]=(d+v)*E,i[2]=(g-b)*E,i[3]=0,i[4]=(d-v)*P,i[5]=(1-(f+x))*P,i[6]=(p+_)*P,i[7]=0,i[8]=(g+b)*V,i[9]=(p-_)*V,i[10]=(1-(f+m))*V,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Zs.set(i[0],i[1],i[2]).length(),a=Zs.set(i[4],i[5],i[6]).length(),o=Zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);let l=1/s,h=1/a,u=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-s),u=(t+e)*c,f=(n+i)*l,d=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new D,_i=new mt,Np=new D(0,0,0),zp=new D(1,1,1),is=new D,Va=new D,ii=new D,su=new mt,ru=new xn,br=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};br.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bp=0,au=new D,Qs=new xn,Wi=new mt,Wa=new D,qr=new D,Up=new D,Gp=new xn,ou=new D(1,0,0),cu=new D(0,1,0),lu=new D(0,0,1),Hp={type:"added"},hu={type:"removed"},nn=class r extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new D,t=new br,n=new xn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Pn}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(qr,Wa,this.up):Wi.lookAt(Wa,qr,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(hu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};nn.DEFAULT_UP=new D(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new D,qi=new D,vc=new D,ji=new D,$s=new D,er=new D,uu=new D,_c=new D,Mc=new D,wc=new D,ia=class r{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),qi.subVectors(n,t),vc.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(qi),c=Mi.dot(vc),l=qi.dot(qi),h=qi.dot(vc),u=a*l-o*o;if(u===0)return s.set(-2,-1,-1);let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji),ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ji),c.set(0,0),c.addScaledVector(s,ji.x),c.addScaledVector(a,ji.y),c.addScaledVector(o,ji.z),c}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),qi.subVectors(e,t),Mi.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Mi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;$s.subVectors(i,n),er.subVectors(s,n),_c.subVectors(e,n);let c=$s.dot(_c),l=er.dot(_c);if(c<=0&&l<=0)return t.copy(n);Mc.subVectors(e,i);let h=$s.dot(Mc),u=er.dot(Mc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector($s,a);wc.subVectors(e,s);let d=$s.dot(wc),g=er.dot(wc);if(g>=0&&d<=g)return t.copy(s);let m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(er,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return uu.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(uu,o);let x=1/(p+m+f);return a=m*x,o=f*x,t.copy(n).addScaledVector($s,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vp=0,ci=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=os,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$u,this.blendDst=ef,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bn=new D,qa=new Oe,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Os=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Wp=0,ui=new mt,Sc=new nn,tr=new D,si=new oi,jr=new oi,En=new D,Rt=class r extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?go:Os)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(si.min,jr.min),si.expandByPoint(En),En.addVectors(si.max,jr.max),si.expandByPoint(En)):(si.expandByPoint(jr.min),si.expandByPoint(jr.max))}si.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)En.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(En));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)En.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),En.add(tr)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let Y=0;Y<o;Y++)l[Y]=new D,h[Y]=new D;let u=new D,f=new D,d=new D,g=new Oe,m=new Oe,p=new Oe,x=new D,_=new D;function b(Y,fe,j){u.fromArray(i,Y*3),f.fromArray(i,fe*3),d.fromArray(i,j*3),g.fromArray(a,Y*2),m.fromArray(a,fe*2),p.fromArray(a,j*2),f.sub(u),d.sub(u),m.sub(g),p.sub(g);let K=1/(m.x*p.y-p.x*m.y);isFinite(K)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(K),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(K),l[Y].add(x),l[fe].add(x),l[j].add(x),h[Y].add(_),h[fe].add(_),h[j].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let Y=0,fe=v.length;Y<fe;++Y){let j=v[Y],K=j.start,J=j.count;for(let te=K,ue=K+J;te<ue;te+=3)b(n[te+0],n[te+1],n[te+2])}let E=new D,P=new D,V=new D,T=new D;function R(Y){V.fromArray(s,Y*3),T.copy(V);let fe=l[Y];E.copy(fe),E.sub(V.multiplyScalar(V.dot(fe))).normalize(),P.crossVectors(T,fe);let K=P.dot(h[Y])<0?-1:1;c[Y*4]=E.x,c[Y*4+1]=E.y,c[Y*4+2]=E.z,c[Y*4+3]=K}for(let Y=0,fe=v.length;Y<fe;++Y){let j=v[Y],K=j.start,J=j.count;for(let te=K,ue=K+J;te<ue;te+=3)R(n[te+0]),R(n[te+1]),R(n[te+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*h;for(let x=0;x<h;x++)f[g++]=l[d++]}return new wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new mt,nr=new ha,Tc=new Zi,Xr=new D,Yr=new D,Kr=new D,Ac=new D,ja=new D,Xa=new Oe,Ya=new Oe,Ka=new Oe,Ec=new D,Ja=new D,Tt=class extends nn{constructor(e=new Rt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Ac.fromBufferAttribute(u,e),a?ja.addScaledVector(Ac,h):ja.addScaledVector(Ac.sub(t),h))}t.add(ja)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),e.ray.intersectsSphere(Tc)===!1)||(fu.copy(s).invert(),nr.copy(e.ray).applyMatrix4(fu),n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let E=o.getX(b),P=o.getX(b+1),V=o.getX(b+2);a=Za(this,p,e,nr,l,h,E,P,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);a=Za(this,i,e,nr,l,h,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let E=b,P=b+1,V=b+2;a=Za(this,p,e,nr,l,h,E,P,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=m,_=m+1,b=m+2;a=Za(this,i,e,nr,l,h,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function qp(r,e,t,n,i,s,a,o){let c;if(e.side===Fn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===fi,o),c===null)return null;Ja.copy(o),Ja.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Ja);return l<t.near||l>t.far?null:{distance:l,point:Ja.clone(),object:r}}function Za(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,Xr),r.getVertexPosition(o,Yr),r.getVertexPosition(c,Kr);let l=qp(r,e,t,n,Xr,Yr,Kr,Ec);if(l){i&&(Xa.fromBufferAttribute(i,a),Ya.fromBufferAttribute(i,o),Ka.fromBufferAttribute(i,c),l.uv=ia.getUV(Ec,Xr,Yr,Kr,Xa,Ya,Ka,new Oe)),s&&(Xa.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,o),Ka.fromBufferAttribute(s,c),l.uv2=ia.getUV(Ec,Xr,Yr,Kr,Xa,Ya,Ka,new Oe));let h={a,b:o,c,normal:new D,materialIndex:0};ia.getNormal(Xr,Yr,Kr,h.normal),l.face=h}return l}var Ai=class r extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(m,p,x,_,b,v,E,P,V,T,R){let Y=v/V,fe=E/T,j=v/2,K=E/2,J=P/2,te=V+1,ue=T+1,le=0,ee=0,ie=new D;for(let Me=0;Me<ue;Me++){let Ve=Me*fe-K;for(let ne=0;ne<te;ne++){let ge=ne*Y-j;ie[m]=ge*_,ie[p]=Ve*b,ie[x]=J,l.push(ie.x,ie.y,ie.z),ie[m]=0,ie[p]=0,ie[x]=P>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(ne/V),u.push(1-Me/T),le+=1}}for(let Me=0;Me<T;Me++)for(let Ve=0;Ve<V;Ve++){let ne=f+Ve+te*Me,ge=f+Ve+te*(Me+1),De=f+(Ve+1)+te*(Me+1),He=f+(Ve+1)+te*Me;c.push(ne,ge,He),c.push(ge,De,He),ee+=6}o.addGroup(d,ee,R),d+=ee,f+=le}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qn(r){let e={};for(let t=0;t<r.length;t++){let n=xr(r[t]);for(let i in n)e[i]=n[i]}return e}function jp(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uf(r){return r.getRenderTarget()===null&&r.outputEncoding===xt?Pi:Fs}var Dr={clone:xr,merge:qn},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gn=class extends bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,ua=class extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new gn(ir,sr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new gn(ir,sr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new gn(ir,sr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new gn(ir,sr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new gn(ir,sr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new gn(ir,sr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},xo=class extends On{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fa=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:as});s.uniforms.tEquirect.value=t;let a=new Tt(i,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Cn),new ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Cc=new D,Kp=new D,Jp=new Pn,Yi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Cc.subVectors(n,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jp.getNormalMatrix(e),i=this.coplanarPoint(Cc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Zi,Qa=new D,da=class{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,s=new Yi,a=new Yi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],x=n[13],_=n[14],b=n[15];return t[0].setComponents(o-i,u-c,m-f,b-p).normalize(),t[1].setComponents(o+i,u+c,m+f,b+p).normalize(),t[2].setComponents(o+s,u+l,m+d,b+x).normalize(),t[3].setComponents(o-s,u-l,m-d,b-x).normalize(),t[4].setComponents(o-a,u-h,m-g,b-_).normalize(),t[5].setComponents(o+a,u+h,m+g,b+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qa.x=i.normal.x>0?e.max.x:e.min.x,Qa.y=i.normal.y>0?e.max.y:e.min.y,Qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ff(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zp(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,d=h.updateRange;r.bindBuffer(u,l),d.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}var pi=class r extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],m=[],p=[];for(let x=0;x<h;x++){let _=x*f-a;for(let b=0;b<l;b++){let v=b*u-s;g.push(v,-_,0),m.push(0,0,1),p.push(b/o),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let b=_+l*x,v=_+l*(x+1),E=_+1+l*(x+1),P=_+1+l*x;d.push(b,v,P),d.push(v,E,P)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(p,2))}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0="vec3 transformed = vec3( position );",r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
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
}`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
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
#endif`,G0=`#if defined( USE_ENVMAP )
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,fm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Mt={alphamap_fragment:Qp,alphamap_pars_fragment:$p,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:c0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:f0,color_fragment:d0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:b0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:y0,displacementmap_pars_vertex:v0,displacementmap_vertex:_0,emissivemap_fragment:M0,emissivemap_pars_fragment:w0,encodings_fragment:S0,encodings_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:E0,envmap_pars_fragment:C0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:G0,envmap_vertex:P0,fog_vertex:I0,fog_pars_vertex:L0,fog_fragment:D0,fog_pars_fragment:k0,gradientmap_pars_fragment:F0,lightmap_fragment:O0,lightmap_pars_fragment:N0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:B0,lights_pars_begin:U0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:q0,lights_physical_fragment:j0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:K0,lights_fragment_end:J0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:am,morphcolor_vertex:om,morphnormal_vertex:cm,morphtarget_pars_vertex:lm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:vm,output_fragment:_m,packing:Mm,premultiplied_alpha_fragment:wm,project_vertex:Sm,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Im,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:km,skinning_vertex:Fm,skinnormal_vertex:Om,specularmap_fragment:Nm,specularmap_pars_fragment:zm,tonemapping_fragment:Bm,tonemapping_pars_fragment:Um,transmission_fragment:Gm,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:qm,uv2_pars_fragment:jm,uv2_pars_vertex:Xm,uv2_vertex:Ym,worldpos_vertex:Km,background_vert:Jm,background_frag:Zm,backgroundCube_vert:Qm,backgroundCube_frag:$m,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:fg,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:bg,meshphong_vert:xg,meshphong_frag:yg,meshphysical_vert:vg,meshphysical_frag:_g,meshtoon_vert:Mg,meshtoon_frag:wg,points_vert:Sg,points_frag:Tg,shadow_vert:Ag,shadow_frag:Eg,sprite_vert:Cg,sprite_frag:Rg},We={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pn},uv2Transform:{value:new Pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}}},Ii={basic:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:qn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:qn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:qn([We.points,We.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:qn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:qn([We.common,We.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:qn([We.sprite,We.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:qn([We.common,We.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:qn([We.lights,We.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ii.physical={uniforms:qn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var $a={r:0,b:0,g:0};function Pg(r,e,t,n,i,s,a){let o=new Ie(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(p,x){let _=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b));let v=r.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?m(o,c):b&&b.isColor&&(m(b,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Lo)?(h===void 0&&(h=new Tt(new Ai(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:xr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,V,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=b.encoding!==xt,(u!==b||f!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Tt(new pi(2,2),new Mn({name:"BackgroundMaterial",uniforms:xr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=b.encoding!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,x){p.getRGB($a,uf(r)),n.buffers.color.setClear($a.r,$a.g,$a.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function Ig(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function u(J,te,ue,le,ee){let ie=!1;if(a){let Me=m(le,ue,te);l!==Me&&(l=Me,d(l.object)),ie=x(J,le,ue,ee),ie&&_(J,le,ue,ee)}else{let Me=te.wireframe===!0;(l.geometry!==le.id||l.program!==ue.id||l.wireframe!==Me)&&(l.geometry=le.id,l.program=ue.id,l.wireframe=Me,ie=!0)}ee!==null&&t.update(ee,34963),(ie||h)&&(h=!1,T(J,te,ue,le),ee!==null&&r.bindBuffer(34963,t.get(ee).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(J){return n.isWebGL2?r.bindVertexArray(J):s.bindVertexArrayOES(J)}function g(J){return n.isWebGL2?r.deleteVertexArray(J):s.deleteVertexArrayOES(J)}function m(J,te,ue){let le=ue.wireframe===!0,ee=o[J.id];ee===void 0&&(ee={},o[J.id]=ee);let ie=ee[te.id];ie===void 0&&(ie={},ee[te.id]=ie);let Me=ie[le];return Me===void 0&&(Me=p(f()),ie[le]=Me),Me}function p(J){let te=[],ue=[],le=[];for(let ee=0;ee<i;ee++)te[ee]=0,ue[ee]=0,le[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ue,attributeDivisors:le,object:J,attributes:{},index:null}}function x(J,te,ue,le){let ee=l.attributes,ie=te.attributes,Me=0,Ve=ue.getAttributes();for(let ne in Ve)if(Ve[ne].location>=0){let De=ee[ne],He=ie[ne];if(He===void 0&&(ne==="instanceMatrix"&&J.instanceMatrix&&(He=J.instanceMatrix),ne==="instanceColor"&&J.instanceColor&&(He=J.instanceColor)),De===void 0||De.attribute!==He||He&&De.data!==He.data)return!0;Me++}return l.attributesNum!==Me||l.index!==le}function _(J,te,ue,le){let ee={},ie=te.attributes,Me=0,Ve=ue.getAttributes();for(let ne in Ve)if(Ve[ne].location>=0){let De=ie[ne];De===void 0&&(ne==="instanceMatrix"&&J.instanceMatrix&&(De=J.instanceMatrix),ne==="instanceColor"&&J.instanceColor&&(De=J.instanceColor));let He={};He.attribute=De,De&&De.data&&(He.data=De.data),ee[ne]=He,Me++}l.attributes=ee,l.attributesNum=Me,l.index=le}function b(){let J=l.newAttributes;for(let te=0,ue=J.length;te<ue;te++)J[te]=0}function v(J){E(J,0)}function E(J,te){let ue=l.newAttributes,le=l.enabledAttributes,ee=l.attributeDivisors;ue[J]=1,le[J]===0&&(r.enableVertexAttribArray(J),le[J]=1),ee[J]!==te&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,te),ee[J]=te)}function P(){let J=l.newAttributes,te=l.enabledAttributes;for(let ue=0,le=te.length;ue<le;ue++)te[ue]!==J[ue]&&(r.disableVertexAttribArray(ue),te[ue]=0)}function V(J,te,ue,le,ee,ie){n.isWebGL2===!0&&(ue===5124||ue===5125)?r.vertexAttribIPointer(J,te,ue,ee,ie):r.vertexAttribPointer(J,te,ue,le,ee,ie)}function T(J,te,ue,le){if(n.isWebGL2===!1&&(J.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let ee=le.attributes,ie=ue.getAttributes(),Me=te.defaultAttributeValues;for(let Ve in ie){let ne=ie[Ve];if(ne.location>=0){let ge=ee[Ve];if(ge===void 0&&(Ve==="instanceMatrix"&&J.instanceMatrix&&(ge=J.instanceMatrix),Ve==="instanceColor"&&J.instanceColor&&(ge=J.instanceColor)),ge!==void 0){let De=ge.normalized,He=ge.itemSize,de=t.get(ge);if(de===void 0)continue;let ht=de.buffer,nt=de.type,Ye=de.bytesPerElement;if(ge.isInterleavedBufferAttribute){let Ge=ge.data,je=Ge.stride,Ze=ge.offset;if(Ge.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ne.locationSize;Ne++)E(ne.location+Ne,Ge.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)v(ne.location+Ne);r.bindBuffer(34962,ht);for(let Ne=0;Ne<ne.locationSize;Ne++)V(ne.location+Ne,He/ne.locationSize,nt,De,je*Ye,(Ze+He/ne.locationSize*Ne)*Ye)}else{if(ge.isInstancedBufferAttribute){for(let Ge=0;Ge<ne.locationSize;Ge++)E(ne.location+Ge,ge.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ge=0;Ge<ne.locationSize;Ge++)v(ne.location+Ge);r.bindBuffer(34962,ht);for(let Ge=0;Ge<ne.locationSize;Ge++)V(ne.location+Ge,He/ne.locationSize,nt,De,He*Ye,He/ne.locationSize*Ge*Ye)}}else if(Me!==void 0){let De=Me[Ve];if(De!==void 0)switch(De.length){case 2:r.vertexAttrib2fv(ne.location,De);break;case 3:r.vertexAttrib3fv(ne.location,De);break;case 4:r.vertexAttrib4fv(ne.location,De);break;default:r.vertexAttrib1fv(ne.location,De)}}}}P()}function R(){j();for(let J in o){let te=o[J];for(let ue in te){let le=te[ue];for(let ee in le)g(le[ee].object),delete le[ee];delete te[ue]}delete o[J]}}function Y(J){if(o[J.id]===void 0)return;let te=o[J.id];for(let ue in te){let le=te[ue];for(let ee in le)g(le[ee].object),delete le[ee];delete te[ue]}delete o[J.id]}function fe(J){for(let te in o){let ue=o[te];if(ue[J.id]===void 0)continue;let le=ue[J.id];for(let ee in le)g(le[ee].object),delete le[ee];delete ue[J.id]}}function j(){K(),h=!0,l!==c&&(l=c,d(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:j,resetDefaultState:K,dispose:R,releaseStatesOfGeometry:Y,releaseStatesOfProgram:fe,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function Lg(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=c}function Dg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(V){if(V==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),_=r.getParameter(36349),b=f>0,v=a||e.has("OES_texture_float"),E=b&&v,P=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:P}}function kg(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Yi,o=new Pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let _=s?0:n,b=_*4,v=x.clippingState||null;c.value=v,v=h(g,f,b,d);for(let E=0;E!==b;++E)v[E]=t[E];x.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=c.value,g!==!0||p===null){let x=d+m*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<x)&&(p=new Float32Array(x));for(let b=0,v=d;b!==m;++b,v+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Fg(r){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=dr:o===Uc&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Bc||o===Uc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new fa(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var cs=class extends bo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,du=[.125,.215,.35,.446,.526,.582],Ps=20,Rc=new cs,pu=new Ie,Pc=null,Rs=(1+Math.sqrt(5))/2,ar=1/Rs,mu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Rs,ar),new D(0,Rs,-ar),new D(ar,0,Rs),new D(-ar,0,Rs),new D(Rs,ar,0),new D(-Rs,ar,0)],yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pc=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc),e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ti,format:kn,encoding:Di,depthBuffer:!1},i=gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=Ng(s,e,t)}return i}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,i){let o=new gn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(pu),h.toneMapping=ai,h.autoClear=!1;let d=new sn({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Tt(new Ai,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(pu),m=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(o.up.set(0,c[x],0),o.lookAt(l[x],0,0)):_===1?(o.up.set(0,0,c[x]),o.lookAt(0,l[x],0)):(o.up.set(0,c[x],0),o.lookAt(0,0,l[x]));let b=this._cubeSize;eo(i,_*b,x>2?b:0,b,b),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===dr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=mu[(i-1)%mu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):Ps;p>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);let x=[],_=0;for(let V=0;V<Ps;++V){let T=V/m,R=Math.exp(-T*T/2);x.push(R),V===0?_+=R:V<p&&(_+=2*R)}for(let V=0;V<x.length;V++)x[V]=x[V]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let v=this._sizeLods[i],E=3*v*(i>b-hr?i-b+hr:0),P=4*(this._cubeSize-v);eo(t,E,P,3*v,2*v),c.setRenderTarget(t),c.render(u,Rc)}};function Og(r){let e=[],t=[],n=[],i=r,s=r-hr+1+du.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-hr?c=du[a-r+hr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,p=2,x=1,_=new Float32Array(m*g*d),b=new Float32Array(p*g*d),v=new Float32Array(x*g*d);for(let P=0;P<d;P++){let V=P%3*2/3-1,T=P>2?0:-1,R=[V,T,0,V+2/3,T,0,V+2/3,T+1,0,V,T,0,V+2/3,T+1,0,V,T+1,0];_.set(R,m*g*P),b.set(f,p*g*P);let Y=[P,P,P,P,P,P];v.set(Y,x*g*P)}let E=new Rt;E.setAttribute("position",new wt(_,m)),E.setAttribute("uv",new wt(b,p)),E.setAttribute("faceIndex",new wt(v,x)),e.push(E),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gu(r,e,t){let n=new zn(r,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ng(r,e,t){let n=new Float32Array(Ps),i=new D(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function bu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function xu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function zg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Bc||c===Uc,h=c===dr||c===pr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new yr(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new yr(r));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ug(r,e,t,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],34962);let d=u.morphAttributes;for(let g in d){let m=d[g];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function l(u){let f=[],d=u.index,g=u.attributes.position,m=0;if(d!==null){let _=d.array;m=d.version;for(let b=0,v=_.length;b<v;b+=3){let E=_[b+0],P=_[b+1],V=_[b+2];f.push(E,P,P,V,V,E)}}else{let _=g.array;m=g.version;for(let b=0,v=_.length/3-1;b<v;b+=3){let E=b+0,P=b+1,V=b+2;f.push(E,P,P,V,V,E)}}let p=new(lf(f)?go:Os)(f,1);p.version=m;let x=s.get(u);x&&e.remove(x),s.set(u,p)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Gg(r,e,t,n){let i=n.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,d){r.drawElements(s,d,o,f*c),t.update(d,s,1)}function u(f,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*c,g),t.update(d,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function Hg(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vg(r,e){return r[0]-e[0]}function Wg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function qg(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new jt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==m){let te=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",te)};p!==void 0&&p.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],V=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],R=0;b===!0&&(R=1),v===!0&&(R=2),E===!0&&(R=3);let Y=h.attributes.position.count*R,fe=1;Y>e.maxTextureSize&&(fe=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);let j=new Float32Array(Y*fe*4*m),K=new po(j,Y,fe,m);K.type=rs,K.needsUpdate=!0;let J=R*4;for(let ue=0;ue<m;ue++){let le=P[ue],ee=V[ue],ie=T[ue],Me=Y*fe*4*ue;for(let Ve=0;Ve<le.count;Ve++){let ne=Ve*J;b===!0&&(a.fromBufferAttribute(le,Ve),j[Me+ne+0]=a.x,j[Me+ne+1]=a.y,j[Me+ne+2]=a.z,j[Me+ne+3]=0),v===!0&&(a.fromBufferAttribute(ee,Ve),j[Me+ne+4]=a.x,j[Me+ne+5]=a.y,j[Me+ne+6]=a.z,j[Me+ne+7]=0),E===!0&&(a.fromBufferAttribute(ie,Ve),j[Me+ne+8]=a.x,j[Me+ne+9]=a.y,j[Me+ne+10]=a.z,j[Me+ne+11]=ie.itemSize===4?a.w:1)}}p={count:m,texture:K,size:new Oe(Y,fe)},s.set(h,p),h.addEventListener("dispose",te)}let x=0;for(let b=0;b<d.length;b++)x+=d[b];let _=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let g=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<g;v++){let E=m[v];E[0]=v,E[1]=d[v]}m.sort(Wg);for(let v=0;v<8;v++)v<g&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Vg);let p=h.morphAttributes.position,x=h.morphAttributes.normal,_=0;for(let v=0;v<8;v++){let E=o[v],P=E[0],V=E[1];P!==Number.MAX_SAFE_INTEGER&&V?(p&&h.getAttribute("morphTarget"+v)!==p[P]&&h.setAttribute("morphTarget"+v,p[P]),x&&h.getAttribute("morphNormal"+v)!==x[P]&&h.setAttribute("morphNormal"+v,x[P]),i[v]=V,_+=V):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),x&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let b=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function jg(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var df=new On,pf=new po,mf=new Wc,gf=new xo,yu=[],vu=[],_u=new Float32Array(16),Mu=new Float32Array(9),wu=new Float32Array(4);function kr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=yu[i];if(s===void 0&&(s=new Float32Array(i),yu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fo(r,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2fv(this.addr,e),Sn(t,e)}}function Kg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;r.uniform3fv(this.addr,e),Sn(t,e)}}function Jg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4fv(this.addr,e),Sn(t,e)}}function Zg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;wu.set(n),r.uniformMatrix2fv(this.addr,!1,wu),Sn(t,n)}}function Qg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;Mu.set(n),r.uniformMatrix3fv(this.addr,!1,Mu),Sn(t,n)}}function $g(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;_u.set(n),r.uniformMatrix4fv(this.addr,!1,_u),Sn(t,n)}}function eb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2iv(this.addr,e),Sn(t,e)}}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3iv(this.addr,e),Sn(t,e)}}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4iv(this.addr,e),Sn(t,e)}}function sb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2uiv(this.addr,e),Sn(t,e)}}function ab(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3uiv(this.addr,e),Sn(t,e)}}function ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4uiv(this.addr,e),Sn(t,e)}}function cb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||df,i)}function lb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mf,i)}function hb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gf,i)}function ub(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pf,i)}function fb(r){switch(r){case 5126:return Xg;case 35664:return Yg;case 35665:return Kg;case 35666:return Jg;case 35674:return Zg;case 35675:return Qg;case 35676:return $g;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return sb;case 36294:return rb;case 36295:return ab;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}function db(r,e){r.uniform1fv(this.addr,e)}function pb(r,e){let t=kr(e,this.size,2);r.uniform2fv(this.addr,t)}function mb(r,e){let t=kr(e,this.size,3);r.uniform3fv(this.addr,t)}function gb(r,e){let t=kr(e,this.size,4);r.uniform4fv(this.addr,t)}function bb(r,e){let t=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xb(r,e){let t=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yb(r,e){let t=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vb(r,e){r.uniform1iv(this.addr,e)}function _b(r,e){r.uniform2iv(this.addr,e)}function Mb(r,e){r.uniform3iv(this.addr,e)}function wb(r,e){r.uniform4iv(this.addr,e)}function Sb(r,e){r.uniform1uiv(this.addr,e)}function Tb(r,e){r.uniform2uiv(this.addr,e)}function Ab(r,e){r.uniform3uiv(this.addr,e)}function Eb(r,e){r.uniform4uiv(this.addr,e)}function Cb(r,e,t){let n=this.cache,i=e.length,s=Fo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||df,s[a])}function Rb(r,e,t){let n=this.cache,i=e.length,s=Fo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mf,s[a])}function Pb(r,e,t){let n=this.cache,i=e.length,s=Fo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gf,s[a])}function Ib(r,e,t){let n=this.cache,i=e.length,s=Fo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pf,s[a])}function Lb(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return bb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return vb;case 35667:case 35671:return _b;case 35668:case 35672:return Mb;case 35669:case 35673:return wb;case 5125:return Sb;case 36294:return Tb;case 36295:return Ab;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=fb(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lb(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Su(r,e){r.seq.push(e),r.map[e.id]=e}function Db(r,e,t){let n=r.name,i=n.length;for(Ic.lastIndex=0;;){let s=Ic.exec(n),a=Ic.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Su(t,l===void 0?new qc(o,r,e):new jc(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Xc(o),Su(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Db(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Tu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var kb=0;function Fb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ob(r){switch(r){case Di:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Au(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Fb(r.getShaderSource(e),a)}else return i}function Nb(r,e){let t=Ob(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zb(r,e){let t;switch(e){case Tl:t="Linear";break;case Qd:t="Reinhard";break;case $d:t="OptimizedCineon";break;case Sa:t="ACESFilmic";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Ub(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gb(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function $r(r){return r!==""}function Eu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(r){return r.replace(Hb,Vb)}function Vb(r,e){let t=Mt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yc(t)}var Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(r){return r.replace(Wb,qb)}function qb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lr?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qr&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Kb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=jb(t),l=Xb(t),h=Yb(t),u=Kb(t),f=Jb(t),d=t.isWebGL2?"":Bb(t),g=Ub(s),m=i.createProgram(),p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter($r).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter($r).join(`
`),x.length>0&&(x+=`
`)):(p=[Pu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),x=[d,Pu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Mt.tonemapping_pars_fragment:"",t.toneMapping!==ai?zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,Nb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Yc(a),a=Eu(a,t),a=Cu(a,t),o=Yc(o),o=Eu(o,t),o=Cu(o,t),a=Ru(a),o=Ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+p+a,v=_+x+o,E=Tu(i,35633,b),P=Tu(i,35632,v);if(i.attachShader(m,E),i.attachShader(m,P),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let R=i.getProgramInfoLog(m).trim(),Y=i.getShaderInfoLog(E).trim(),fe=i.getShaderInfoLog(P).trim(),j=!0,K=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;let J=Au(i,E,"vertex"),te=Au(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+J+`
`+te)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(Y===""||fe==="")&&(K=!1);K&&(this.diagnostics={runnable:j,programLog:R,vertexShader:{log:Y,prefix:p},fragmentShader:{log:fe,prefix:x}})}i.deleteShader(E),i.deleteShader(P);let V;this.getUniforms=function(){return V===void 0&&(V=new fr(i,m)),V};let T;return this.getAttributes=function(){return T===void 0&&(T=Gb(i,m)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=P,this}var Qb=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jc(e),t.set(e,n)),n}},Jc=class{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}};function $b(r,e,t,n,i,s,a){let o=new mo,c=new Kc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T,R,Y,fe,j){let K=fe.fog,J=j.geometry,te=T.isMeshStandardMaterial?fe.environment:null,ue=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),le=ue&&ue.mapping===Lo?ue.image.height:null,ee=g[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=ie!==void 0?ie.length:0,Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let ne,ge,De,He;if(ee){let je=Ii[ee];ne=je.vertexShader,ge=je.fragmentShader}else ne=T.vertexShader,ge=T.fragmentShader,c.update(T),De=c.getVertexShaderID(T),He=c.getFragmentShaderID(T);let de=r.getRenderTarget(),ht=T.alphaTest>0,nt=T.clearcoat>0,Ye=T.iridescence>0;return{isWebGL2:h,shaderID:ee,shaderName:T.type,vertexShader:ne,fragmentShader:ge,defines:T.defines,customVertexShaderID:De,customFragmentShaderID:He,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:de===null?r.outputEncoding:de.isXRRenderTarget===!0?de.texture.encoding:Di,map:!!T.map,matcap:!!T.matcap,envMap:!!ue,envMapMode:ue&&ue.mapping,envMapCubeUVHeight:le,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===vp,tangentSpaceNormalMap:T.normalMapType===af,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===xt,clearcoat:nt,clearcoatMap:nt&&!!T.clearcoatMap,clearcoatRoughnessMap:nt&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:nt&&!!T.clearcoatNormalMap,iridescence:Ye,iridescenceMap:Ye&&!!T.iridescenceMap,iridescenceThicknessMap:Ye&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===os,alphaMap:!!T.alphaMap,alphaTest:ht,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!J.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!K,useFog:T.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:T.toneMapped?r.toneMapping:ai,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===Fn,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let Y in T.defines)R.push(Y),R.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(x(R,T),_(R,T),R.push(r.outputEncoding)),R.push(T.customProgramCacheKey),R.join()}function x(T,R){T.push(R.precision),T.push(R.outputEncoding),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.combine),T.push(R.vertexUvs),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function _(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.physicallyCorrectLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.specularIntensityMap&&o.enable(15),R.specularColorMap&&o.enable(16),R.transmission&&o.enable(17),R.transmissionMap&&o.enable(18),R.thicknessMap&&o.enable(19),R.sheen&&o.enable(20),R.sheenColorMap&&o.enable(21),R.sheenRoughnessMap&&o.enable(22),R.decodeVideoTexture&&o.enable(23),R.opaque&&o.enable(24),T.push(o.mask)}function b(T){let R=g[T.type],Y;if(R){let fe=Ii[R];Y=Dr.clone(fe.uniforms)}else Y=T.uniforms;return Y}function v(T,R){let Y;for(let fe=0,j=l.length;fe<j;fe++){let K=l[fe];if(K.cacheKey===R){Y=K,++Y.usedTimes;break}}return Y===void 0&&(Y=new Zb(r,R,T,s),l.push(Y)),Y}function E(T){if(--T.usedTimes===0){let R=l.indexOf(T);l[R]=l[l.length-1],l.pop(),T.destroy()}}function P(T){c.remove(T)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:P,programs:l,dispose:V}}function ex(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Iu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lu(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,m,p){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),e++,x}function o(u,f,d,g,m,p){let x=a(u,f,d,g,m,p);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):t.push(x)}function c(u,f,d,g,m,p){let x=a(u,f,d,g,m,p);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):t.unshift(x)}function l(u,f){t.length>1&&t.sort(u||tx),n.length>1&&n.sort(f||Iu),i.length>1&&i.sort(f||Iu)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function nx(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Lu,r.set(n,[a])):i>=s.length?(a=new Lu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ix(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function sx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var rx=0;function ax(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ox(r,e){let t=new ix,n=sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);let s=new D,a=new mt,o=new mt;function c(h,u){let f=0,d=0,g=0;for(let fe=0;fe<9;fe++)i.probe[fe].set(0,0,0);let m=0,p=0,x=0,_=0,b=0,v=0,E=0,P=0,V=0,T=0;h.sort(ax);let R=u!==!0?Math.PI:1;for(let fe=0,j=h.length;fe<j;fe++){let K=h[fe],J=K.color,te=K.intensity,ue=K.distance,le=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)f+=J.r*te*R,d+=J.g*te*R,g+=J.b*te*R;else if(K.isLightProbe)for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(K.sh.coefficients[ee],te);else if(K.isDirectionalLight){let ee=t.get(K);if(ee.color.copy(K.color).multiplyScalar(K.intensity*R),K.castShadow){let ie=K.shadow,Me=n.get(K);Me.shadowBias=ie.bias,Me.shadowNormalBias=ie.normalBias,Me.shadowRadius=ie.radius,Me.shadowMapSize=ie.mapSize,i.directionalShadow[m]=Me,i.directionalShadowMap[m]=le,i.directionalShadowMatrix[m]=K.shadow.matrix,v++}i.directional[m]=ee,m++}else if(K.isSpotLight){let ee=t.get(K);ee.position.setFromMatrixPosition(K.matrixWorld),ee.color.copy(J).multiplyScalar(te*R),ee.distance=ue,ee.coneCos=Math.cos(K.angle),ee.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ee.decay=K.decay,i.spot[x]=ee;let ie=K.shadow;if(K.map&&(i.spotLightMap[V]=K.map,V++,ie.updateMatrices(K),K.castShadow&&T++),i.spotLightMatrix[x]=ie.matrix,K.castShadow){let Me=n.get(K);Me.shadowBias=ie.bias,Me.shadowNormalBias=ie.normalBias,Me.shadowRadius=ie.radius,Me.shadowMapSize=ie.mapSize,i.spotShadow[x]=Me,i.spotShadowMap[x]=le,P++}x++}else if(K.isRectAreaLight){let ee=t.get(K);ee.color.copy(J).multiplyScalar(te),ee.halfWidth.set(K.width*.5,0,0),ee.halfHeight.set(0,K.height*.5,0),i.rectArea[_]=ee,_++}else if(K.isPointLight){let ee=t.get(K);if(ee.color.copy(K.color).multiplyScalar(K.intensity*R),ee.distance=K.distance,ee.decay=K.decay,K.castShadow){let ie=K.shadow,Me=n.get(K);Me.shadowBias=ie.bias,Me.shadowNormalBias=ie.normalBias,Me.shadowRadius=ie.radius,Me.shadowMapSize=ie.mapSize,Me.shadowCameraNear=ie.camera.near,Me.shadowCameraFar=ie.camera.far,i.pointShadow[p]=Me,i.pointShadowMap[p]=le,i.pointShadowMatrix[p]=K.shadow.matrix,E++}i.point[p]=ee,p++}else if(K.isHemisphereLight){let ee=t.get(K);ee.skyColor.copy(K.color).multiplyScalar(te*R),ee.groundColor.copy(K.groundColor).multiplyScalar(te*R),i.hemi[b]=ee,b++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let Y=i.hash;(Y.directionalLength!==m||Y.pointLength!==p||Y.spotLength!==x||Y.rectAreaLength!==_||Y.hemiLength!==b||Y.numDirectionalShadows!==v||Y.numPointShadows!==E||Y.numSpotShadows!==P||Y.numSpotMaps!==V)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=P+V-T,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=T,Y.directionalLength=m,Y.pointLength=p,Y.spotLength=x,Y.rectAreaLength=_,Y.hemiLength=b,Y.numDirectionalShadows=v,Y.numPointShadows=E,Y.numSpotShadows=P,Y.numSpotMaps=V,i.version=rx++)}function l(h,u){let f=0,d=0,g=0,m=0,p=0,x=u.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){let v=h[_];if(v.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),g++}else if(v.isRectAreaLight){let E=i.rectArea[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),o.identity(),a.copy(v.matrixWorld),a.premultiply(x),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function Du(r,e){let t=new ox(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function cx(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Du(r,e),t.set(s,[c])):a>=o.length?(c=new Du(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Zc=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qc=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`;function ux(r,e,t){let n=new da,i=new Oe,s=new Oe,a=new jt,o=new Zc({depthPacking:yp}),c=new Qc,l={},h=t.maxTextureSize,u={[fi]:Fn,[Fn]:fi,[cn]:cn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:lx,fragmentShader:hx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa,this.render=function(v,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let V=r.getRenderTarget(),T=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(as),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let fe=0,j=v.length;fe<j;fe++){let K=v[fe],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let te=J.getFrameExtents();if(i.multiply(te),s.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,J.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,J.mapSize.y=s.y)),J.map===null){let le=this.type!==Qr?{minFilter:_n,magFilter:_n}:{};J.map=new zn(i.x,i.y,le),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();let ue=J.getViewportCount();for(let le=0;le<ue;le++){let ee=J.getViewport(le);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),Y.viewport(a),J.updateMatrices(K,le),n=J.getFrustum(),b(E,P,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===Qr&&x(J,P),J.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(V,T,R)};function x(v,E){let P=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(E,null,P,d,m,null)}function _(v,E,P,V,T,R){let Y=null,fe=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(fe!==void 0)Y=fe;else if(Y=P.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let j=Y.uuid,K=E.uuid,J=l[j];J===void 0&&(J={},l[j]=J);let te=J[K];te===void 0&&(te=Y.clone(),J[K]=te),Y=te}return Y.visible=E.visible,Y.wireframe=E.wireframe,R===Qr?Y.side=E.shadowSide!==null?E.shadowSide:E.side:Y.side=E.shadowSide!==null?E.shadowSide:u[E.side],Y.alphaMap=E.alphaMap,Y.alphaTest=E.alphaTest,Y.map=E.map,Y.clipShadows=E.clipShadows,Y.clippingPlanes=E.clippingPlanes,Y.clipIntersection=E.clipIntersection,Y.displacementMap=E.displacementMap,Y.displacementScale=E.displacementScale,Y.displacementBias=E.displacementBias,Y.wireframeLinewidth=E.wireframeLinewidth,Y.linewidth=E.linewidth,P.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(P.matrixWorld),Y.nearDistance=V,Y.farDistance=T),Y}function b(v,E,P,V,T){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===Qr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);let fe=e.update(v),j=v.material;if(Array.isArray(j)){let K=fe.groups;for(let J=0,te=K.length;J<te;J++){let ue=K[J],le=j[ue.materialIndex];if(le&&le.visible){let ee=_(v,le,V,P.near,P.far,T);r.renderBufferDirect(P,null,fe,ee,v,ue)}}}else if(j.visible){let K=_(v,j,V,P.near,P.far,T);r.renderBufferDirect(P,null,fe,K,v,null)}}let Y=v.children;for(let fe=0,j=Y.length;fe<j;fe++)b(Y[fe],E,P,V,T)}}function fx(r,e,t){let n=t.isWebGL2;function i(){let $=!1,pe=new jt,Re=null,qe=new jt(0,0,0,0);return{setMask:function(tt){Re!==tt&&!$&&(r.colorMask(tt,tt,tt,tt),Re=tt)},setLocked:function(tt){$=tt},setClear:function(tt,ft,$t,dn,li){li===!0&&(tt*=dn,ft*=dn,$t*=dn),pe.set(tt,ft,$t,dn),qe.equals(pe)===!1&&(r.clearColor(tt,ft,$t,dn),qe.copy(pe))},reset:function(){$=!1,Re=null,qe.set(-1,0,0,0)}}}function s(){let $=!1,pe=null,Re=null,qe=null;return{setTest:function(tt){tt?ht(2929):nt(2929)},setMask:function(tt){pe!==tt&&!$&&(r.depthMask(tt),pe=tt)},setFunc:function(tt){if(Re!==tt){switch(tt){case Vd:r.depthFunc(512);break;case Wd:r.depthFunc(519);break;case qd:r.depthFunc(513);break;case zc:r.depthFunc(515);break;case jd:r.depthFunc(514);break;case Xd:r.depthFunc(518);break;case Yd:r.depthFunc(516);break;case Kd:r.depthFunc(517);break;default:r.depthFunc(515)}Re=tt}},setLocked:function(tt){$=tt},setClear:function(tt){qe!==tt&&(r.clearDepth(tt),qe=tt)},reset:function(){$=!1,pe=null,Re=null,qe=null}}}function a(){let $=!1,pe=null,Re=null,qe=null,tt=null,ft=null,$t=null,dn=null,li=null;return{setTest:function(zt){$||(zt?ht(2960):nt(2960))},setMask:function(zt){pe!==zt&&!$&&(r.stencilMask(zt),pe=zt)},setFunc:function(zt,ti,Tn){(Re!==zt||qe!==ti||tt!==Tn)&&(r.stencilFunc(zt,ti,Tn),Re=zt,qe=ti,tt=Tn)},setOp:function(zt,ti,Tn){(ft!==zt||$t!==ti||dn!==Tn)&&(r.stencilOp(zt,ti,Tn),ft=zt,$t=ti,dn=Tn)},setLocked:function(zt){$=zt},setClear:function(zt){li!==zt&&(r.clearStencil(zt),li=zt)},reset:function(){$=!1,pe=null,Re=null,qe=null,tt=null,ft=null,$t=null,dn=null,li=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,E=null,P=null,V=null,T=null,R=!1,Y=null,fe=null,j=null,K=null,J=null,te=r.getParameter(35661),ue=!1,le=0,ee=r.getParameter(7938);ee.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ue=le>=1):ee.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ue=le>=2);let ie=null,Me={},Ve=r.getParameter(3088),ne=r.getParameter(2978),ge=new jt().fromArray(Ve),De=new jt().fromArray(ne);function He($,pe,Re){let qe=new Uint8Array(4),tt=r.createTexture();r.bindTexture($,tt),r.texParameteri($,10241,9728),r.texParameteri($,10240,9728);for(let ft=0;ft<Re;ft++)r.texImage2D(pe+ft,0,6408,1,1,0,6408,5121,qe);return tt}let de={};de[3553]=He(3553,3553,1),de[34067]=He(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ht(2929),c.setFunc(zc),rn(!1),ln(Eh),ht(2884),Qt(as);function ht($){f[$]!==!0&&(r.enable($),f[$]=!0)}function nt($){f[$]!==!1&&(r.disable($),f[$]=!1)}function Ye($,pe){return d[$]!==pe?(r.bindFramebuffer($,pe),d[$]=pe,n&&($===36009&&(d[36160]=pe),$===36160&&(d[36009]=pe)),!0):!1}function Ge($,pe){let Re=m,qe=!1;if($)if(Re=g.get(pe),Re===void 0&&(Re=[],g.set(pe,Re)),$.isWebGLMultipleRenderTargets){let tt=$.texture;if(Re.length!==tt.length||Re[0]!==36064){for(let ft=0,$t=tt.length;ft<$t;ft++)Re[ft]=36064+ft;Re.length=tt.length,qe=!0}}else Re[0]!==36064&&(Re[0]=36064,qe=!0);else Re[0]!==1029&&(Re[0]=1029,qe=!0);qe&&(t.isWebGL2?r.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function je($){return p!==$?(r.useProgram($),p=$,!0):!1}let Ze={[or]:32774,[Ld]:32778,[Dd]:32779};if(n)Ze[Ph]=32775,Ze[Ih]=32776;else{let $=e.get("EXT_blend_minmax");$!==null&&(Ze[Ph]=$.MIN_EXT,Ze[Ih]=$.MAX_EXT)}let Ne={[kd]:0,[Fd]:1,[Od]:768,[$u]:770,[Hd]:776,[Ud]:774,[zd]:772,[Nd]:769,[ef]:771,[Gd]:775,[Bd]:773};function Qt($,pe,Re,qe,tt,ft,$t,dn){if($===as){x===!0&&(nt(3042),x=!1);return}if(x===!1&&(ht(3042),x=!0),$!==Id){if($!==_||dn!==R){if((b!==or||P!==or)&&(r.blendEquation(32774),b=or,P=or),dn)switch($){case os:r.blendFuncSeparate(1,771,1,771);break;case Li:r.blendFunc(1,1);break;case Ch:r.blendFuncSeparate(0,769,0,1);break;case Rh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case os:r.blendFuncSeparate(770,771,1,771);break;case Li:r.blendFunc(770,1);break;case Ch:r.blendFuncSeparate(0,769,0,1);break;case Rh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,E=null,V=null,T=null,_=$,R=dn}return}tt=tt||pe,ft=ft||Re,$t=$t||qe,(pe!==b||tt!==P)&&(r.blendEquationSeparate(Ze[pe],Ze[tt]),b=pe,P=tt),(Re!==v||qe!==E||ft!==V||$t!==T)&&(r.blendFuncSeparate(Ne[Re],Ne[qe],Ne[ft],Ne[$t]),v=Re,E=qe,V=ft,T=$t),_=$,R=!1}function fn($,pe){$.side===cn?nt(2884):ht(2884);let Re=$.side===Fn;pe&&(Re=!Re),rn(Re),$.blending===os&&$.transparent===!1?Qt(as):Qt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);let qe=$.stencilWrite;l.setTest(qe),qe&&(l.setMask($.stencilWriteMask),l.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),l.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ut($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ht(32926):nt(32926)}function rn($){Y!==$&&($?r.frontFace(2304):r.frontFace(2305),Y=$)}function ln($){$!==Rd?(ht(2884),$!==fe&&($===Eh?r.cullFace(1029):$===Pd?r.cullFace(1028):r.cullFace(1032))):nt(2884),fe=$}function dt($){$!==j&&(ue&&r.lineWidth($),j=$)}function ut($,pe,Re){$?(ht(32823),(K!==pe||J!==Re)&&(r.polygonOffset(pe,Re),K=pe,J=Re)):nt(32823)}function Nt($){$?ht(3089):nt(3089)}function Ot($){$===void 0&&($=33984+te-1),ie!==$&&(r.activeTexture($),ie=$)}function U($,pe,Re){Re===void 0&&(ie===null?Re=33984+te-1:Re=ie);let qe=Me[Re];qe===void 0&&(qe={type:void 0,texture:void 0},Me[Re]=qe),(qe.type!==$||qe.texture!==pe)&&(ie!==Re&&(r.activeTexture(Re),ie=Re),r.bindTexture($,pe||de[$]),qe.type=$,qe.texture=pe)}function I(){let $=Me[ie];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ze(){try{r.texSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{r.texStorage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at($){ge.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),ge.copy($))}function it($){De.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),De.copy($))}function Et($,pe){let Re=u.get(pe);Re===void 0&&(Re=new WeakMap,u.set(pe,Re));let qe=Re.get($);qe===void 0&&(qe=r.getUniformBlockIndex(pe,$.name),Re.set($,qe))}function Ut($,pe){let qe=u.get(pe).get($);h.get(pe)!==qe&&(r.uniformBlockBinding(pe,qe,$.__bindingPointIndex),h.set(pe,qe))}function hn(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ie=null,Me={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,E=null,P=null,V=null,T=null,R=!1,Y=null,fe=null,j=null,K=null,J=null,ge.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ht,disable:nt,bindFramebuffer:Ye,drawBuffers:Ge,useProgram:je,setBlending:Qt,setMaterial:fn,setFlipSided:rn,setCullFace:ln,setLineWidth:dt,setPolygonOffset:ut,setScissorTest:Nt,activeTexture:Ot,bindTexture:U,unbindTexture:I,compressedTexImage2D:xe,compressedTexImage3D:ke,texImage2D:lt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:Ut,texStorage2D:we,texStorage3D:st,texSubImage2D:ze,texSubImage3D:Xe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Ke,scissor:at,viewport:it,reset:hn}}function dx(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,m,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,I){return x?new OffscreenCanvas(U,I):la("canvas")}function b(U,I,xe,ke){let ze=1;if((U.width>ke||U.height>ke)&&(ze=ke/Math.max(U.width,U.height)),ze<1||I===!0)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap){let Xe=I?ho:Math.floor,gt=Xe(ze*U.width),Ke=Xe(ze*U.height);m===void 0&&(m=_(gt,Ke));let we=xe?_(gt,Ke):m;return we.width=gt,we.height=Ke,we.getContext("2d").drawImage(U,0,0,gt,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+gt+"x"+Ke+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return Vc(U.width)&&Vc(U.height)}function E(U){return o?!1:U.wrapS!==ri||U.wrapT!==ri||U.minFilter!==_n&&U.minFilter!==Cn}function P(U,I){return U.generateMipmaps&&I&&U.minFilter!==_n&&U.minFilter!==Cn}function V(U){r.generateMipmap(U)}function T(U,I,xe,ke,ze=!1){if(o===!1)return I;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Xe=I;return I===6403&&(xe===5126&&(Xe=33326),xe===5131&&(Xe=33325),xe===5121&&(Xe=33321)),I===33319&&(xe===5126&&(Xe=33328),xe===5131&&(Xe=33327),xe===5121&&(Xe=33323)),I===6408&&(xe===5126&&(Xe=34836),xe===5131&&(Xe=34842),xe===5121&&(Xe=ke===xt&&ze===!1?35907:32856),xe===32819&&(Xe=32854),xe===32820&&(Xe=32855)),(Xe===33325||Xe===33326||Xe===33327||Xe===33328||Xe===34842||Xe===34836)&&e.get("EXT_color_buffer_float"),Xe}function R(U,I,xe){return P(U,xe)===!0||U.isFramebufferTexture&&U.minFilter!==_n&&U.minFilter!==Cn?Math.log2(Math.max(I.width,I.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?I.mipmaps.length:1}function Y(U){return U===_n||U===co||U===ea?9728:9729}function fe(U){let I=U.target;I.removeEventListener("dispose",fe),K(I),I.isVideoTexture&&g.delete(I)}function j(U){let I=U.target;I.removeEventListener("dispose",j),te(I)}function K(U){let I=n.get(U);if(I.__webglInit===void 0)return;let xe=U.source,ke=p.get(xe);if(ke){let ze=ke[I.__cacheKey];ze.usedTimes--,ze.usedTimes===0&&J(U),Object.keys(ke).length===0&&p.delete(xe)}n.remove(U)}function J(U){let I=n.get(U);r.deleteTexture(I.__webglTexture);let xe=U.source,ke=p.get(xe);delete ke[I.__cacheKey],a.memory.textures--}function te(U){let I=U.texture,xe=n.get(U),ke=n.get(I);if(ke.__webglTexture!==void 0&&(r.deleteTexture(ke.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ze=0;ze<6;ze++)r.deleteFramebuffer(xe.__webglFramebuffer[ze]),xe.__webglDepthbuffer&&r.deleteRenderbuffer(xe.__webglDepthbuffer[ze]);else{if(r.deleteFramebuffer(xe.__webglFramebuffer),xe.__webglDepthbuffer&&r.deleteRenderbuffer(xe.__webglDepthbuffer),xe.__webglMultisampledFramebuffer&&r.deleteFramebuffer(xe.__webglMultisampledFramebuffer),xe.__webglColorRenderbuffer)for(let ze=0;ze<xe.__webglColorRenderbuffer.length;ze++)xe.__webglColorRenderbuffer[ze]&&r.deleteRenderbuffer(xe.__webglColorRenderbuffer[ze]);xe.__webglDepthRenderbuffer&&r.deleteRenderbuffer(xe.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ze=0,Xe=I.length;ze<Xe;ze++){let gt=n.get(I[ze]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(I[ze])}n.remove(I),n.remove(U)}let ue=0;function le(){ue=0}function ee(){let U=ue;return U>=c&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+c),ue+=1,U}function ie(U){let I=[];return I.push(U.wrapS),I.push(U.wrapT),I.push(U.wrapR||0),I.push(U.magFilter),I.push(U.minFilter),I.push(U.anisotropy),I.push(U.internalFormat),I.push(U.format),I.push(U.type),I.push(U.generateMipmaps),I.push(U.premultiplyAlpha),I.push(U.flipY),I.push(U.unpackAlignment),I.push(U.encoding),I.join()}function Me(U,I){let xe=n.get(U);if(U.isVideoTexture&&Nt(U),U.isRenderTargetTexture===!1&&U.version>0&&xe.__version!==U.version){let ke=U.image;if(ke===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ke.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(xe,U,I);return}}t.bindTexture(3553,xe.__webglTexture,33984+I)}function Ve(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){nt(xe,U,I);return}t.bindTexture(35866,xe.__webglTexture,33984+I)}function ne(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){nt(xe,U,I);return}t.bindTexture(32879,xe.__webglTexture,33984+I)}function ge(U,I){let xe=n.get(U);if(U.version>0&&xe.__version!==U.version){Ye(xe,U,I);return}t.bindTexture(34067,xe.__webglTexture,33984+I)}let De={[Kn]:10497,[ri]:33071,[oa]:33648},He={[_n]:9728,[co]:9984,[ea]:9986,[Cn]:9729,[Al]:9985,[Si]:9987};function de(U,I,xe){if(xe?(r.texParameteri(U,10242,De[I.wrapS]),r.texParameteri(U,10243,De[I.wrapT]),(U===32879||U===35866)&&r.texParameteri(U,32882,De[I.wrapR]),r.texParameteri(U,10240,He[I.magFilter]),r.texParameteri(U,10241,He[I.minFilter])):(r.texParameteri(U,10242,33071),r.texParameteri(U,10243,33071),(U===32879||U===35866)&&r.texParameteri(U,32882,33071),(I.wrapS!==ri||I.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,10240,Y(I.magFilter)),r.texParameteri(U,10241,Y(I.minFilter)),I.minFilter!==_n&&I.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ke=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===_n||I.minFilter!==ea&&I.minFilter!==Si||I.type===rs&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(r.texParameterf(U,ke.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function ht(U,I){let xe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,I.addEventListener("dispose",fe));let ke=I.source,ze=p.get(ke);ze===void 0&&(ze={},p.set(ke,ze));let Xe=ie(I);if(Xe!==U.__cacheKey){ze[Xe]===void 0&&(ze[Xe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,xe=!0),ze[Xe].usedTimes++;let gt=ze[U.__cacheKey];gt!==void 0&&(ze[U.__cacheKey].usedTimes--,gt.usedTimes===0&&J(I)),U.__cacheKey=Xe,U.__webglTexture=ze[Xe].texture}return xe}function nt(U,I,xe){let ke=3553;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ke=35866),I.isData3DTexture&&(ke=32879);let ze=ht(U,I),Xe=I.source;t.bindTexture(ke,U.__webglTexture,33984+xe);let gt=n.get(Xe);if(Xe.version!==gt.__version||ze===!0){t.activeTexture(33984+xe),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let Ke=E(I)&&v(I.image)===!1,we=b(I.image,Ke,!1,h);we=Ot(I,we);let st=v(we)||o,lt=s.convert(I.format,I.encoding),et=s.convert(I.type),at=T(I.internalFormat,lt,et,I.encoding,I.isVideoTexture);de(ke,I,st);let it,Et=I.mipmaps,Ut=o&&I.isVideoTexture!==!0,hn=gt.__version===void 0||ze===!0,$=R(I,we,st);if(I.isDepthTexture)at=6402,o?I.type===rs?at=36012:I.type===Is?at=33190:I.type===ur?at=35056:at=33189:I.type===rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Ls&&at===6402&&I.type!==sf&&I.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Is,et=s.convert(I.type)),I.format===mr&&at===6402&&(at=34041,I.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=ur,et=s.convert(I.type))),hn&&(Ut?t.texStorage2D(3553,1,at,we.width,we.height):t.texImage2D(3553,0,at,we.width,we.height,0,lt,et,null));else if(I.isDataTexture)if(Et.length>0&&st){Ut&&hn&&t.texStorage2D(3553,$,at,Et[0].width,Et[0].height);for(let pe=0,Re=Et.length;pe<Re;pe++)it=Et[pe],Ut?t.texSubImage2D(3553,pe,0,0,it.width,it.height,lt,et,it.data):t.texImage2D(3553,pe,at,it.width,it.height,0,lt,et,it.data);I.generateMipmaps=!1}else Ut?(hn&&t.texStorage2D(3553,$,at,we.width,we.height),t.texSubImage2D(3553,0,0,0,we.width,we.height,lt,et,we.data)):t.texImage2D(3553,0,at,we.width,we.height,0,lt,et,we.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Ut&&hn&&t.texStorage3D(35866,$,at,Et[0].width,Et[0].height,we.depth);for(let pe=0,Re=Et.length;pe<Re;pe++)it=Et[pe],I.format!==kn?lt!==null?Ut?t.compressedTexSubImage3D(35866,pe,0,0,0,it.width,it.height,we.depth,lt,it.data,0,0):t.compressedTexImage3D(35866,pe,at,it.width,it.height,we.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage3D(35866,pe,0,0,0,it.width,it.height,we.depth,lt,et,it.data):t.texImage3D(35866,pe,at,it.width,it.height,we.depth,0,lt,et,it.data)}else{Ut&&hn&&t.texStorage2D(3553,$,at,Et[0].width,Et[0].height);for(let pe=0,Re=Et.length;pe<Re;pe++)it=Et[pe],I.format!==kn?lt!==null?Ut?t.compressedTexSubImage2D(3553,pe,0,0,it.width,it.height,lt,it.data):t.compressedTexImage2D(3553,pe,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage2D(3553,pe,0,0,it.width,it.height,lt,et,it.data):t.texImage2D(3553,pe,at,it.width,it.height,0,lt,et,it.data)}else if(I.isDataArrayTexture)Ut?(hn&&t.texStorage3D(35866,$,at,we.width,we.height,we.depth),t.texSubImage3D(35866,0,0,0,0,we.width,we.height,we.depth,lt,et,we.data)):t.texImage3D(35866,0,at,we.width,we.height,we.depth,0,lt,et,we.data);else if(I.isData3DTexture)Ut?(hn&&t.texStorage3D(32879,$,at,we.width,we.height,we.depth),t.texSubImage3D(32879,0,0,0,0,we.width,we.height,we.depth,lt,et,we.data)):t.texImage3D(32879,0,at,we.width,we.height,we.depth,0,lt,et,we.data);else if(I.isFramebufferTexture){if(hn)if(Ut)t.texStorage2D(3553,$,at,we.width,we.height);else{let pe=we.width,Re=we.height;for(let qe=0;qe<$;qe++)t.texImage2D(3553,qe,at,pe,Re,0,lt,et,null),pe>>=1,Re>>=1}}else if(Et.length>0&&st){Ut&&hn&&t.texStorage2D(3553,$,at,Et[0].width,Et[0].height);for(let pe=0,Re=Et.length;pe<Re;pe++)it=Et[pe],Ut?t.texSubImage2D(3553,pe,0,0,lt,et,it):t.texImage2D(3553,pe,at,lt,et,it);I.generateMipmaps=!1}else Ut?(hn&&t.texStorage2D(3553,$,at,we.width,we.height),t.texSubImage2D(3553,0,0,0,lt,et,we)):t.texImage2D(3553,0,at,lt,et,we);P(I,st)&&V(ke),gt.__version=Xe.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function Ye(U,I,xe){if(I.image.length!==6)return;let ke=ht(U,I),ze=I.source;t.bindTexture(34067,U.__webglTexture,33984+xe);let Xe=n.get(ze);if(ze.version!==Xe.__version||ke===!0){t.activeTexture(33984+xe),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let gt=I.isCompressedTexture||I.image[0].isCompressedTexture,Ke=I.image[0]&&I.image[0].isDataTexture,we=[];for(let pe=0;pe<6;pe++)!gt&&!Ke?we[pe]=b(I.image[pe],!1,!0,l):we[pe]=Ke?I.image[pe].image:I.image[pe],we[pe]=Ot(I,we[pe]);let st=we[0],lt=v(st)||o,et=s.convert(I.format,I.encoding),at=s.convert(I.type),it=T(I.internalFormat,et,at,I.encoding),Et=o&&I.isVideoTexture!==!0,Ut=Xe.__version===void 0||ke===!0,hn=R(I,st,lt);de(34067,I,lt);let $;if(gt){Et&&Ut&&t.texStorage2D(34067,hn,it,st.width,st.height);for(let pe=0;pe<6;pe++){$=we[pe].mipmaps;for(let Re=0;Re<$.length;Re++){let qe=$[Re];I.format!==kn?et!==null?Et?t.compressedTexSubImage2D(34069+pe,Re,0,0,qe.width,qe.height,et,qe.data):t.compressedTexImage2D(34069+pe,Re,it,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?t.texSubImage2D(34069+pe,Re,0,0,qe.width,qe.height,et,at,qe.data):t.texImage2D(34069+pe,Re,it,qe.width,qe.height,0,et,at,qe.data)}}}else{$=I.mipmaps,Et&&Ut&&($.length>0&&hn++,t.texStorage2D(34067,hn,it,we[0].width,we[0].height));for(let pe=0;pe<6;pe++)if(Ke){Et?t.texSubImage2D(34069+pe,0,0,0,we[pe].width,we[pe].height,et,at,we[pe].data):t.texImage2D(34069+pe,0,it,we[pe].width,we[pe].height,0,et,at,we[pe].data);for(let Re=0;Re<$.length;Re++){let tt=$[Re].image[pe].image;Et?t.texSubImage2D(34069+pe,Re+1,0,0,tt.width,tt.height,et,at,tt.data):t.texImage2D(34069+pe,Re+1,it,tt.width,tt.height,0,et,at,tt.data)}}else{Et?t.texSubImage2D(34069+pe,0,0,0,et,at,we[pe]):t.texImage2D(34069+pe,0,it,et,at,we[pe]);for(let Re=0;Re<$.length;Re++){let qe=$[Re];Et?t.texSubImage2D(34069+pe,Re+1,0,0,et,at,qe.image[pe]):t.texImage2D(34069+pe,Re+1,it,et,at,qe.image[pe])}}}P(I,lt)&&V(34067),Xe.__version=ze.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function Ge(U,I,xe,ke,ze){let Xe=s.convert(xe.format,xe.encoding),gt=s.convert(xe.type),Ke=T(xe.internalFormat,Xe,gt,xe.encoding);n.get(I).__hasExternalTextures||(ze===32879||ze===35866?t.texImage3D(ze,0,Ke,I.width,I.height,I.depth,0,Xe,gt,null):t.texImage2D(ze,0,Ke,I.width,I.height,0,Xe,gt,null)),t.bindFramebuffer(36160,U),ut(I)?f.framebufferTexture2DMultisampleEXT(36160,ke,ze,n.get(xe).__webglTexture,0,dt(I)):(ze===3553||ze>=34069&&ze<=34074)&&r.framebufferTexture2D(36160,ke,ze,n.get(xe).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(U,I,xe){if(r.bindRenderbuffer(36161,U),I.depthBuffer&&!I.stencilBuffer){let ke=33189;if(xe||ut(I)){let ze=I.depthTexture;ze&&ze.isDepthTexture&&(ze.type===rs?ke=36012:ze.type===Is&&(ke=33190));let Xe=dt(I);ut(I)?f.renderbufferStorageMultisampleEXT(36161,Xe,ke,I.width,I.height):r.renderbufferStorageMultisample(36161,Xe,ke,I.width,I.height)}else r.renderbufferStorage(36161,ke,I.width,I.height);r.framebufferRenderbuffer(36160,36096,36161,U)}else if(I.depthBuffer&&I.stencilBuffer){let ke=dt(I);xe&&ut(I)===!1?r.renderbufferStorageMultisample(36161,ke,35056,I.width,I.height):ut(I)?f.renderbufferStorageMultisampleEXT(36161,ke,35056,I.width,I.height):r.renderbufferStorage(36161,34041,I.width,I.height),r.framebufferRenderbuffer(36160,33306,36161,U)}else{let ke=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ze=0;ze<ke.length;ze++){let Xe=ke[ze],gt=s.convert(Xe.format,Xe.encoding),Ke=s.convert(Xe.type),we=T(Xe.internalFormat,gt,Ke,Xe.encoding),st=dt(I);xe&&ut(I)===!1?r.renderbufferStorageMultisample(36161,st,we,I.width,I.height):ut(I)?f.renderbufferStorageMultisampleEXT(36161,st,we,I.width,I.height):r.renderbufferStorage(36161,we,I.width,I.height)}}r.bindRenderbuffer(36161,null)}function Ze(U,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,U),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Me(I.depthTexture,0);let ke=n.get(I.depthTexture).__webglTexture,ze=dt(I);if(I.depthTexture.format===Ls)ut(I)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ke,0,ze):r.framebufferTexture2D(36160,36096,3553,ke,0);else if(I.depthTexture.format===mr)ut(I)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ke,0,ze):r.framebufferTexture2D(36160,33306,3553,ke,0);else throw new Error("Unknown depthTexture format")}function Ne(U){let I=n.get(U),xe=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!I.__autoAllocateDepthBuffer){if(xe)throw new Error("target.depthTexture not supported in Cube render targets");Ze(I.__webglFramebuffer,U)}else if(xe){I.__webglDepthbuffer=[];for(let ke=0;ke<6;ke++)t.bindFramebuffer(36160,I.__webglFramebuffer[ke]),I.__webglDepthbuffer[ke]=r.createRenderbuffer(),je(I.__webglDepthbuffer[ke],U,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=r.createRenderbuffer(),je(I.__webglDepthbuffer,U,!1);t.bindFramebuffer(36160,null)}function Qt(U,I,xe){let ke=n.get(U);I!==void 0&&Ge(ke.__webglFramebuffer,U,U.texture,36064,3553),xe!==void 0&&Ne(U)}function fn(U){let I=U.texture,xe=n.get(U),ke=n.get(I);U.addEventListener("dispose",j),U.isWebGLMultipleRenderTargets!==!0&&(ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture()),ke.__version=I.version,a.memory.textures++);let ze=U.isWebGLCubeRenderTarget===!0,Xe=U.isWebGLMultipleRenderTargets===!0,gt=v(U)||o;if(ze){xe.__webglFramebuffer=[];for(let Ke=0;Ke<6;Ke++)xe.__webglFramebuffer[Ke]=r.createFramebuffer()}else{if(xe.__webglFramebuffer=r.createFramebuffer(),Xe)if(i.drawBuffers){let Ke=U.texture;for(let we=0,st=Ke.length;we<st;we++){let lt=n.get(Ke[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&U.samples>0&&ut(U)===!1){let Ke=Xe?I:[I];xe.__webglMultisampledFramebuffer=r.createFramebuffer(),xe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer);for(let we=0;we<Ke.length;we++){let st=Ke[we];xe.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(36161,xe.__webglColorRenderbuffer[we]);let lt=s.convert(st.format,st.encoding),et=s.convert(st.type),at=T(st.internalFormat,lt,et,st.encoding,U.isXRRenderTarget===!0),it=dt(U);r.renderbufferStorageMultisample(36161,it,at,U.width,U.height),r.framebufferRenderbuffer(36160,36064+we,36161,xe.__webglColorRenderbuffer[we])}r.bindRenderbuffer(36161,null),U.depthBuffer&&(xe.__webglDepthRenderbuffer=r.createRenderbuffer(),je(xe.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(36160,null)}}if(ze){t.bindTexture(34067,ke.__webglTexture),de(34067,I,gt);for(let Ke=0;Ke<6;Ke++)Ge(xe.__webglFramebuffer[Ke],U,I,36064,34069+Ke);P(I,gt)&&V(34067),t.unbindTexture()}else if(Xe){let Ke=U.texture;for(let we=0,st=Ke.length;we<st;we++){let lt=Ke[we],et=n.get(lt);t.bindTexture(3553,et.__webglTexture),de(3553,lt,gt),Ge(xe.__webglFramebuffer,U,lt,36064+we,3553),P(lt,gt)&&V(3553)}t.unbindTexture()}else{let Ke=3553;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(o?Ke=U.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ke,ke.__webglTexture),de(Ke,I,gt),Ge(xe.__webglFramebuffer,U,I,36064,Ke),P(I,gt)&&V(Ke),t.unbindTexture()}U.depthBuffer&&Ne(U)}function rn(U){let I=v(U)||o,xe=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ke=0,ze=xe.length;ke<ze;ke++){let Xe=xe[ke];if(P(Xe,I)){let gt=U.isWebGLCubeRenderTarget?34067:3553,Ke=n.get(Xe).__webglTexture;t.bindTexture(gt,Ke),V(gt),t.unbindTexture()}}}function ln(U){if(o&&U.samples>0&&ut(U)===!1){let I=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],xe=U.width,ke=U.height,ze=16384,Xe=[],gt=U.stencilBuffer?33306:36096,Ke=n.get(U),we=U.isWebGLMultipleRenderTargets===!0;if(we)for(let st=0;st<I.length;st++)t.bindFramebuffer(36160,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+st,36161,null),t.bindFramebuffer(36160,Ke.__webglFramebuffer),r.framebufferTexture2D(36009,36064+st,3553,null,0);t.bindFramebuffer(36008,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ke.__webglFramebuffer);for(let st=0;st<I.length;st++){Xe.push(36064+st),U.depthBuffer&&Xe.push(gt);let lt=Ke.__ignoreDepthValues!==void 0?Ke.__ignoreDepthValues:!1;if(lt===!1&&(U.depthBuffer&&(ze|=256),U.stencilBuffer&&(ze|=1024)),we&&r.framebufferRenderbuffer(36008,36064,36161,Ke.__webglColorRenderbuffer[st]),lt===!0&&(r.invalidateFramebuffer(36008,[gt]),r.invalidateFramebuffer(36009,[gt])),we){let et=n.get(I[st]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,et,0)}r.blitFramebuffer(0,0,xe,ke,0,0,xe,ke,ze,9728),d&&r.invalidateFramebuffer(36008,Xe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),we)for(let st=0;st<I.length;st++){t.bindFramebuffer(36160,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+st,36161,Ke.__webglColorRenderbuffer[st]);let lt=n.get(I[st]).__webglTexture;t.bindFramebuffer(36160,Ke.__webglFramebuffer),r.framebufferTexture2D(36009,36064+st,3553,lt,0)}t.bindFramebuffer(36009,Ke.__webglMultisampledFramebuffer)}}function dt(U){return Math.min(u,U.samples)}function ut(U){let I=n.get(U);return o&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Nt(U){let I=a.render.frame;g.get(U)!==I&&(g.set(U,I),U.update())}function Ot(U,I){let xe=U.encoding,ke=U.format,ze=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Hc||xe!==Di&&(xe===xt?o===!1?e.has("EXT_sRGB")===!0&&ke===kn?(U.format=Hc,U.minFilter=Cn,U.generateMipmaps=!1):I=uo.sRGBToLinear(I):(ke!==kn||ze!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",xe)),I}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=Me,this.setTexture2DArray=Ve,this.setTexture3D=ne,this.setTextureCube=ge,this.rebindTextures=Qt,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=ut}function px(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===di)return 5121;if(s===sp)return 32819;if(s===rp)return 32820;if(s===tp)return 5120;if(s===np)return 5122;if(s===sf)return 5123;if(s===ip)return 5124;if(s===Is)return 5125;if(s===rs)return 5126;if(s===Ti)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ap)return 6406;if(s===kn)return 6408;if(s===op)return 6409;if(s===cp)return 6410;if(s===Ls)return 6402;if(s===mr)return 34041;if(s===Hc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===lp)return 6403;if(s===hp)return 36244;if(s===up)return 33319;if(s===fp)return 33320;if(s===dp)return 36249;if(s===nc||s===ic||s===sc||s===rc)if(a===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===nc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===nc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ic)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Dh||s===kh||s===Fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oh||s===Nh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Oh)return a===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Nh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zh||s===Bh||s===Uh||s===Gh||s===Hh||s===Vh||s===Wh||s===qh||s===jh||s===Xh||s===Yh||s===Kh||s===Jh||s===Zh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ac)return a===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===mp||s===Qh||s===$h||s===eu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ac)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$h)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===eu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ur?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var $c=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),x=this._getHandJoint(l,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},el=class extends On{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Ls,h!==Ls&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Is),n===void 0&&h===mr&&(n=ur),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1}},tl=class extends Ji{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,m=t.getContextAttributes(),p=null,x=null,_=[],b=[],v=new Set,E=new Map,P=new gn;P.layers.enable(1),P.viewport=new jt;let V=new gn;V.layers.enable(2),V.viewport=new jt;let T=[P,V],R=new $c;R.layers.enable(1),R.layers.enable(2);let Y=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=_[ne];return ge===void 0&&(ge=new sa,_[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=_[ne];return ge===void 0&&(ge=new sa,_[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=_[ne];return ge===void 0&&(ge=new sa,_[ne]=ge),ge.getHandSpace()};function j(ne){let ge=b.indexOf(ne.inputSource);if(ge===-1)return;let De=_[ge];De!==void 0&&De.dispatchEvent({type:ne.type,data:ne.inputSource})}function K(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",J);for(let ne=0;ne<_.length;ne++){let ge=b[ne];ge!==null&&(b[ne]=null,_[ne].disconnect(ge))}Y=null,fe=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",K),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ge={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:d}),x=new zn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:di,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let ge=null,De=null,He=null;m.depth&&(He=m.stencil?35056:33190,ge=m.stencil?mr:Ls,De=m.stencil?ur:Is);let de={colorFormat:32856,depthFormat:He,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(de),i.updateRenderState({layers:[f]}),x=new zn(f.textureWidth,f.textureHeight,{format:kn,type:di,depthTexture:new el(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let ht=e.properties.get(x);ht.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(ne){for(let ge=0;ge<ne.removed.length;ge++){let De=ne.removed[ge],He=b.indexOf(De);He>=0&&(b[He]=null,_[He].disconnect(De))}for(let ge=0;ge<ne.added.length;ge++){let De=ne.added[ge],He=b.indexOf(De);if(He===-1){for(let ht=0;ht<_.length;ht++)if(ht>=b.length){b.push(De),He=ht;break}else if(b[ht]===null){b[ht]=De,He=ht;break}if(He===-1)break}let de=_[He];de&&de.connect(De)}}let te=new D,ue=new D;function le(ne,ge,De){te.setFromMatrixPosition(ge.matrixWorld),ue.setFromMatrixPosition(De.matrixWorld);let He=te.distanceTo(ue),de=ge.projectionMatrix.elements,ht=De.projectionMatrix.elements,nt=de[14]/(de[10]-1),Ye=de[14]/(de[10]+1),Ge=(de[9]+1)/de[5],je=(de[9]-1)/de[5],Ze=(de[8]-1)/de[0],Ne=(ht[8]+1)/ht[0],Qt=nt*Ze,fn=nt*Ne,rn=He/(-Ze+Ne),ln=rn*-Ze;ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ln),ne.translateZ(rn),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();let dt=nt+rn,ut=Ye+rn,Nt=Qt-ln,Ot=fn+(He-ln),U=Ge*Ye/ut*dt,I=je*Ye/ut*dt;ne.projectionMatrix.makePerspective(Nt,Ot,U,I,dt,ut)}function ee(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;R.near=V.near=P.near=ne.near,R.far=V.far=P.far=ne.far,(Y!==R.near||fe!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),Y=R.near,fe=R.far);let ge=ne.parent,De=R.cameras;ee(R,ge);for(let de=0;de<De.length;de++)ee(De[de],ge);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),ne.matrix.copy(R.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale);let He=ne.children;for(let de=0,ht=He.length;de<ht;de++)He[de].updateMatrixWorld(!0);De.length===2?le(R,P,V):R.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.getPlanes=function(){return v};let ie=null;function Me(ne,ge){if(h=ge.getViewerPose(l||a),g=ge,h!==null){let De=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let He=!1;De.length!==R.cameras.length&&(R.cameras.length=0,He=!0);for(let de=0;de<De.length;de++){let ht=De[de],nt=null;if(d!==null)nt=d.getViewport(ht);else{let Ge=u.getViewSubImage(f,ht);nt=Ge.viewport,de===0&&(e.setRenderTargetTextures(x,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(x))}let Ye=T[de];Ye===void 0&&(Ye=new gn,Ye.layers.enable(de),Ye.viewport=new jt,T[de]=Ye),Ye.matrix.fromArray(ht.transform.matrix),Ye.projectionMatrix.fromArray(ht.projectionMatrix),Ye.viewport.set(nt.x,nt.y,nt.width,nt.height),de===0&&R.matrix.copy(Ye.matrix),He===!0&&R.cameras.push(Ye)}}for(let De=0;De<_.length;De++){let He=b[De],de=_[De];He!==null&&de!==void 0&&de.update(He,ge,l||a)}if(ie&&ie(ne,ge),ge.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ge.detectedPlanes});let De=null;for(let He of v)ge.detectedPlanes.has(He)||(De===null&&(De=[]),De.push(He));if(De!==null)for(let He of De)v.delete(He),E.delete(He),n.dispatchEvent({type:"planeremoved",data:He});for(let He of ge.detectedPlanes)if(!v.has(He))v.add(He),E.set(He,ge.lastChangedTime),n.dispatchEvent({type:"planeadded",data:He});else{let de=E.get(He);He.lastChangedTime>de&&(E.set(He,He.lastChangedTime),n.dispatchEvent({type:"planechanged",data:He}))}}g=null}let Ve=new ff;Ve.setAnimationLoop(Me),this.setAnimationLoop=function(ne){ie=ne},this.dispose=function(){}}};function gx(r,e){function t(m,p){p.color.getRGB(m.fogColor.value,uf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function bx(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(_,b){let v=b.program;n.uniformBlockBinding(_,v)}function l(_,b){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(_,E);let P=e.render.frame;s[_.id]!==P&&(f(_),s[_.id]=P)}function h(_){let b=u();_.__bindingPointIndex=b;let v=r.createBuffer(),E=_.__size,P=_.usage;return r.bindBuffer(35345,v),r.bufferData(35345,E,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=i[_.id],v=_.uniforms,E=_.__cache;r.bindBuffer(35345,b);for(let P=0,V=v.length;P<V;P++){let T=v[P];if(d(T,P,E)===!0){let R=T.__offset,Y=Array.isArray(T.value)?T.value:[T.value],fe=0;for(let j=0;j<Y.length;j++){let K=Y[j],J=m(K);typeof K=="number"?(T.__data[0]=K,r.bufferSubData(35345,R+fe,T.__data)):K.isMatrix3?(T.__data[0]=K.elements[0],T.__data[1]=K.elements[1],T.__data[2]=K.elements[2],T.__data[3]=K.elements[0],T.__data[4]=K.elements[3],T.__data[5]=K.elements[4],T.__data[6]=K.elements[5],T.__data[7]=K.elements[0],T.__data[8]=K.elements[6],T.__data[9]=K.elements[7],T.__data[10]=K.elements[8],T.__data[11]=K.elements[0]):(K.toArray(T.__data,fe),fe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,R,T.__data)}}r.bindBuffer(35345,null)}function d(_,b,v){let E=_.value;if(v[b]===void 0){if(typeof E=="number")v[b]=E;else{let P=Array.isArray(E)?E:[E],V=[];for(let T=0;T<P.length;T++)V.push(P[T].clone());v[b]=V}return!0}else if(typeof E=="number"){if(v[b]!==E)return v[b]=E,!0}else{let P=Array.isArray(v[b])?v[b]:[v[b]],V=Array.isArray(E)?E:[E];for(let T=0;T<P.length;T++){let R=P[T];if(R.equals(V[T])===!1)return R.copy(V[T]),!0}}return!1}function g(_){let b=_.uniforms,v=0,E=16,P=0;for(let V=0,T=b.length;V<T;V++){let R=b[V],Y={boundary:0,storage:0},fe=Array.isArray(R.value)?R.value:[R.value];for(let j=0,K=fe.length;j<K;j++){let J=fe[j],te=m(J);Y.boundary+=te.boundary,Y.storage+=te.storage}if(R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,V>0){P=v%E;let j=E-P;P!==0&&j-Y.boundary<0&&(v+=E-P,R.__offset=v)}v+=Y.storage}return P=v%E,P>0&&(v+=E-P),_.__size=v,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){let b=_.target;b.removeEventListener("dispose",p);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:x}}function xx(){let r=la("canvas");return r.style.display="block",r}function Aa(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:xx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null,d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Di,this.physicallyCorrectLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;let m=this,p=!1,x=0,_=0,b=null,v=-1,E=null,P=new jt,V=new jt,T=null,R=e.width,Y=e.height,fe=1,j=null,K=null,J=new jt(0,0,R,Y),te=new jt(0,0,R,Y),ue=!1,le=new da,ee=!1,ie=!1,Me=null,Ve=new mt,ne=new Oe,ge=new D,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?fe:1}let de=t;function ht(k,y){for(let M=0;M<k.length;M++){let A=k[M],L=e.getContext(A,y);if(L!==null)return L}return null}try{let k={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",Et,!1),de===null){let y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&y.shift(),de=ht(y,k),de===null)throw ht(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}de.getShaderPrecisionFormat===void 0&&(de.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let nt,Ye,Ge,je,Ze,Ne,Qt,fn,rn,ln,dt,ut,Nt,Ot,U,I,xe,ke,ze,Xe,gt,Ke,we,st;function lt(){nt=new Bg(de),Ye=new Dg(de,nt,r),nt.init(Ye),Ke=new px(de,nt,Ye),Ge=new fx(de,nt,Ye),je=new Hg,Ze=new ex,Ne=new dx(de,nt,Ge,Ze,Ye,Ke,je),Qt=new Fg(m),fn=new zg(m),rn=new Zp(de,Ye),we=new Ig(de,nt,rn,Ye),ln=new Ug(de,rn,je,we),dt=new jg(de,ln,rn,je),ze=new qg(de,Ye,Ne),I=new kg(Ze),ut=new $b(m,Qt,fn,nt,Ye,we,I),Nt=new gx(m,Ze),Ot=new nx,U=new cx(nt,Ye),ke=new Pg(m,Qt,fn,Ge,dt,h,a),xe=new ux(m,dt,Ye),st=new bx(de,je,Ye,Ge),Xe=new Lg(de,nt,je,Ye),gt=new Gg(de,nt,je,Ye),je.programs=ut.programs,m.capabilities=Ye,m.extensions=nt,m.properties=Ze,m.renderLists=Ot,m.shadowMap=xe,m.state=Ge,m.info=je}lt();let et=new tl(m,de);this.xr=et,this.getContext=function(){return de},this.getContextAttributes=function(){return de.getContextAttributes()},this.forceContextLoss=function(){let k=nt.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=nt.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(k){k!==void 0&&(fe=k,this.setSize(R,Y,!1))},this.getSize=function(k){return k.set(R,Y)},this.setSize=function(k,y,M){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=k,Y=y,e.width=Math.floor(k*fe),e.height=Math.floor(y*fe),M!==!1&&(e.style.width=k+"px",e.style.height=y+"px"),this.setViewport(0,0,k,y)},this.getDrawingBufferSize=function(k){return k.set(R*fe,Y*fe).floor()},this.setDrawingBufferSize=function(k,y,M){R=k,Y=y,fe=M,e.width=Math.floor(k*M),e.height=Math.floor(y*M),this.setViewport(0,0,k,y)},this.getCurrentViewport=function(k){return k.copy(P)},this.getViewport=function(k){return k.copy(J)},this.setViewport=function(k,y,M,A){k.isVector4?J.set(k.x,k.y,k.z,k.w):J.set(k,y,M,A),Ge.viewport(P.copy(J).multiplyScalar(fe).floor())},this.getScissor=function(k){return k.copy(te)},this.setScissor=function(k,y,M,A){k.isVector4?te.set(k.x,k.y,k.z,k.w):te.set(k,y,M,A),Ge.scissor(V.copy(te).multiplyScalar(fe).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(k){Ge.setScissorTest(ue=k)},this.setOpaqueSort=function(k){j=k},this.setTransparentSort=function(k){K=k},this.getClearColor=function(k){return k.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(k=!0,y=!0,M=!0){let A=0;k&&(A|=16384),y&&(A|=256),M&&(A|=1024),de.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Ot.dispose(),U.dispose(),Ze.dispose(),Qt.dispose(),fn.dispose(),dt.dispose(),we.dispose(),st.dispose(),ut.dispose(),et.dispose(),et.removeEventListener("sessionstart",qe),et.removeEventListener("sessionend",tt),Me&&(Me.dispose(),Me=null),ft.stop()};function at(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let k=je.autoReset,y=xe.enabled,M=xe.autoUpdate,A=xe.needsUpdate,L=xe.type;lt(),je.autoReset=k,xe.enabled=y,xe.autoUpdate=M,xe.needsUpdate=A,xe.type=L}function Et(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Ut(k){let y=k.target;y.removeEventListener("dispose",Ut),hn(y)}function hn(k){$(k),Ze.remove(k)}function $(k){let y=Ze.get(k).programs;y!==void 0&&(y.forEach(function(M){ut.releaseProgram(M)}),k.isShaderMaterial&&ut.releaseShaderCache(k))}this.renderBufferDirect=function(k,y,M,A,L,Q){y===null&&(y=De);let N=L.isMesh&&L.matrixWorld.determinant()<0,X=Vs(k,y,M,A,L);Ge.setMaterial(A,N);let Z=M.index,oe=1;A.wireframe===!0&&(Z=ln.getWireframeAttribute(M),oe=2);let ve=M.drawRange,Te=M.attributes.position,$e=ve.start*oe,St=(ve.start+ve.count)*oe;Q!==null&&($e=Math.max($e,Q.start*oe),St=Math.min(St,(Q.start+Q.count)*oe)),Z!==null?($e=Math.max($e,0),St=Math.min(St,Z.count)):Te!=null&&($e=Math.max($e,0),St=Math.min(St,Te.count));let Gt=St-$e;if(Gt<0||Gt===1/0)return;we.setup(L,A,X,M,Z);let Bt,yt=Xe;if(Z!==null&&(Bt=rn.get(Z),yt=gt,yt.setIndex(Bt)),L.isMesh)A.wireframe===!0?(Ge.setLineWidth(A.wireframeLinewidth*He()),yt.setMode(1)):yt.setMode(4);else if(L.isLine){let Be=A.linewidth;Be===void 0&&(Be=1),Ge.setLineWidth(Be*He()),L.isLineSegments?yt.setMode(1):L.isLineLoop?yt.setMode(2):yt.setMode(3)}else L.isPoints?yt.setMode(0):L.isSprite&&yt.setMode(4);if(L.isInstancedMesh)yt.renderInstances($e,Gt,L.count);else if(M.isInstancedBufferGeometry){let Be=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,Ft=Math.min(M.instanceCount,Be);yt.renderInstances($e,Gt,Ft)}else yt.render($e,Gt)},this.compile=function(k,y){function M(A,L,Q){A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Tn(A,L,Q),A.side=fi,A.needsUpdate=!0,Tn(A,L,Q),A.side=cn):Tn(A,L,Q)}f=U.get(k),f.init(),g.push(f),k.traverseVisible(function(A){A.isLight&&A.layers.test(y.layers)&&(f.pushLight(A),A.castShadow&&f.pushShadow(A))}),f.setupLights(m.physicallyCorrectLights),k.traverse(function(A){let L=A.material;if(L)if(Array.isArray(L))for(let Q=0;Q<L.length;Q++){let N=L[Q];M(N,k,A)}else M(L,k,A)}),g.pop(),f=null};let pe=null;function Re(k){pe&&pe(k)}function qe(){ft.stop()}function tt(){ft.start()}let ft=new ff;ft.setAnimationLoop(Re),typeof self!="undefined"&&ft.setContext(self),this.setAnimationLoop=function(k){pe=k,et.setAnimationLoop(k),k===null?ft.stop():ft.start()},et.addEventListener("sessionstart",qe),et.addEventListener("sessionend",tt),this.render=function(k,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(y),y=et.getCamera()),k.isScene===!0&&k.onBeforeRender(m,k,y,b),f=U.get(k,g.length),f.init(),g.push(f),Ve.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),le.setFromProjectionMatrix(Ve),ie=this.localClippingEnabled,ee=I.init(this.clippingPlanes,ie),u=Ot.get(k,d.length),u.init(),d.push(u),$t(k,y,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(j,K),ee===!0&&I.beginShadows();let M=f.state.shadowsArray;if(xe.render(M,k,y),ee===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(u,k),f.setupLights(m.physicallyCorrectLights),y.isArrayCamera){let A=y.cameras;for(let L=0,Q=A.length;L<Q;L++){let N=A[L];dn(u,k,N,N.viewport)}}else dn(u,k,y);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),k.isScene===!0&&k.onAfterRender(m,k,y),we.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function $t(k,y,M,A){if(k.visible===!1)return;if(k.layers.test(y.layers)){if(k.isGroup)M=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(y);else if(k.isLight)f.pushLight(k),k.castShadow&&f.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||le.intersectsSprite(k)){A&&ge.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ve);let N=dt.update(k),X=k.material;X.visible&&u.push(k,N,X,M,ge.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(k.isSkinnedMesh&&k.skeleton.frame!==je.render.frame&&(k.skeleton.update(),k.skeleton.frame=je.render.frame),!k.frustumCulled||le.intersectsObject(k))){A&&ge.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ve);let N=dt.update(k),X=k.material;if(Array.isArray(X)){let Z=N.groups;for(let oe=0,ve=Z.length;oe<ve;oe++){let Te=Z[oe],$e=X[Te.materialIndex];$e&&$e.visible&&u.push(k,N,$e,M,ge.z,Te)}}else X.visible&&u.push(k,N,X,M,ge.z,null)}}let Q=k.children;for(let N=0,X=Q.length;N<X;N++)$t(Q[N],y,M,A)}function dn(k,y,M,A){let L=k.opaque,Q=k.transmissive,N=k.transparent;f.setupLightsView(M),ee===!0&&I.setGlobalState(m.clippingPlanes,M),Q.length>0&&li(L,y,M),A&&Ge.viewport(P.copy(A)),L.length>0&&zt(L,y,M),Q.length>0&&zt(Q,y,M),N.length>0&&zt(N,y,M),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function li(k,y,M){let A=Ye.isWebGL2;Me===null&&(Me=new zn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?Ti:di,minFilter:Si,samples:A&&s===!0?4:0})),m.getDrawingBufferSize(ne),A?Me.setSize(ne.x,ne.y):Me.setSize(ho(ne.x),ho(ne.y));let L=m.getRenderTarget();m.setRenderTarget(Me),m.clear();let Q=m.toneMapping;m.toneMapping=ai,zt(k,y,M),m.toneMapping=Q,Ne.updateMultisampleRenderTarget(Me),Ne.updateRenderTargetMipmap(Me),m.setRenderTarget(L)}function zt(k,y,M){let A=y.isScene===!0?y.overrideMaterial:null;for(let L=0,Q=k.length;L<Q;L++){let N=k[L],X=N.object,Z=N.geometry,oe=A===null?N.material:A,ve=N.group;X.layers.test(M.layers)&&ti(X,y,M,Z,oe,ve)}}function ti(k,y,M,A,L,Q){k.onBeforeRender(m,y,M,A,L,Q),k.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),L.onBeforeRender(m,y,M,A,k,Q),L.transparent===!0&&L.side===cn&&L.forceSinglePass===!1?(L.side=Fn,L.needsUpdate=!0,m.renderBufferDirect(M,y,A,L,k,Q),L.side=fi,L.needsUpdate=!0,m.renderBufferDirect(M,y,A,L,k,Q),L.side=cn):m.renderBufferDirect(M,y,A,L,k,Q),k.onAfterRender(m,y,M,A,L,Q)}function Tn(k,y,M){y.isScene!==!0&&(y=De);let A=Ze.get(k),L=f.state.lights,Q=f.state.shadowsArray,N=L.state.version,X=ut.getParameters(k,L.state,Q,y,M),Z=ut.getProgramCacheKey(X),oe=A.programs;A.environment=k.isMeshStandardMaterial?y.environment:null,A.fog=y.fog,A.envMap=(k.isMeshStandardMaterial?fn:Qt).get(k.envMap||A.environment),oe===void 0&&(k.addEventListener("dispose",Ut),oe=new Map,A.programs=oe);let ve=oe.get(Z);if(ve!==void 0){if(A.currentProgram===ve&&A.lightsStateVersion===N)return ni(k,X),ve}else X.uniforms=ut.getUniforms(k),k.onBuild(M,X,m),k.onBeforeCompile(X,m),ve=ut.acquireProgram(X,Z),oe.set(Z,ve),A.uniforms=X.uniforms;let Te=A.uniforms;(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Te.clippingPlanes=I.uniform),ni(k,X),A.needsLights=$i(k),A.lightsStateVersion=N,A.needsLights&&(Te.ambientLightColor.value=L.state.ambient,Te.lightProbe.value=L.state.probe,Te.directionalLights.value=L.state.directional,Te.directionalLightShadows.value=L.state.directionalShadow,Te.spotLights.value=L.state.spot,Te.spotLightShadows.value=L.state.spotShadow,Te.rectAreaLights.value=L.state.rectArea,Te.ltc_1.value=L.state.rectAreaLTC1,Te.ltc_2.value=L.state.rectAreaLTC2,Te.pointLights.value=L.state.point,Te.pointLightShadows.value=L.state.pointShadow,Te.hemisphereLights.value=L.state.hemi,Te.directionalShadowMap.value=L.state.directionalShadowMap,Te.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Te.spotShadowMap.value=L.state.spotShadowMap,Te.spotLightMatrix.value=L.state.spotLightMatrix,Te.spotLightMap.value=L.state.spotLightMap,Te.pointShadowMap.value=L.state.pointShadowMap,Te.pointShadowMatrix.value=L.state.pointShadowMatrix);let $e=ve.getUniforms(),St=fr.seqWithValue($e.seq,Te);return A.currentProgram=ve,A.uniformsList=St,ve}function ni(k,y){let M=Ze.get(k);M.outputEncoding=y.outputEncoding,M.instancing=y.instancing,M.skinning=y.skinning,M.morphTargets=y.morphTargets,M.morphNormals=y.morphNormals,M.morphColors=y.morphColors,M.morphTargetsCount=y.morphTargetsCount,M.numClippingPlanes=y.numClippingPlanes,M.numIntersection=y.numClipIntersection,M.vertexAlphas=y.vertexAlphas,M.vertexTangents=y.vertexTangents,M.toneMapping=y.toneMapping}function Vs(k,y,M,A,L){y.isScene!==!0&&(y=De),Ne.resetTextureUnits();let Q=y.fog,N=A.isMeshStandardMaterial?y.environment:null,X=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Di,Z=(A.isMeshStandardMaterial?fn:Qt).get(A.envMap||N),oe=A.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,ve=!!A.normalMap&&!!M.attributes.tangent,Te=!!M.morphAttributes.position,$e=!!M.morphAttributes.normal,St=!!M.morphAttributes.color,Gt=A.toneMapped?m.toneMapping:ai,Bt=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,yt=Bt!==void 0?Bt.length:0,Be=Ze.get(A),Ft=f.state.lights;if(ee===!0&&(ie===!0||k!==E)){let en=k===E&&A.id===v;I.setState(A,k,en)}let pt=!1;A.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ft.state.version||Be.outputEncoding!==X||L.isInstancedMesh&&Be.instancing===!1||!L.isInstancedMesh&&Be.instancing===!0||L.isSkinnedMesh&&Be.skinning===!1||!L.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Z||A.fog===!0&&Be.fog!==Q||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==I.numPlanes||Be.numIntersection!==I.numIntersection)||Be.vertexAlphas!==oe||Be.vertexTangents!==ve||Be.morphTargets!==Te||Be.morphNormals!==$e||Be.morphColors!==St||Be.toneMapping!==Gt||Ye.isWebGL2===!0&&Be.morphTargetsCount!==yt)&&(pt=!0):(pt=!0,Be.__version=A.version);let Je=Be.currentProgram;pt===!0&&(Je=Tn(A,y,L));let Ct=!1,Ht=!1,pn=!1,vt=Je.getUniforms(),Yt=Be.uniforms;if(Ge.useProgram(Je.program)&&(Ct=!0,Ht=!0,pn=!0),A.id!==v&&(v=A.id,Ht=!0),Ct||E!==k){if(vt.setValue(de,"projectionMatrix",k.projectionMatrix),Ye.logarithmicDepthBuffer&&vt.setValue(de,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),E!==k&&(E=k,Ht=!0,pn=!0),A.isShaderMaterial||A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshStandardMaterial||A.envMap){let en=vt.map.cameraPosition;en!==void 0&&en.setValue(de,ge.setFromMatrixPosition(k.matrixWorld))}(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&vt.setValue(de,"isOrthographic",k.isOrthographicCamera===!0),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial||A.isShadowMaterial||L.isSkinnedMesh)&&vt.setValue(de,"viewMatrix",k.matrixWorldInverse)}if(L.isSkinnedMesh){vt.setOptional(de,L,"bindMatrix"),vt.setOptional(de,L,"bindMatrixInverse");let en=L.skeleton;en&&(Ye.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),vt.setValue(de,"boneTexture",en.boneTexture,Ne),vt.setValue(de,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Kt=M.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0&&Ye.isWebGL2===!0)&&ze.update(L,M,A,Je),(Ht||Be.receiveShadow!==L.receiveShadow)&&(Be.receiveShadow=L.receiveShadow,vt.setValue(de,"receiveShadow",L.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Yt.envMap.value=Z,Yt.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),Ht&&(vt.setValue(de,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&Ws(Yt,pn),Q&&A.fog===!0&&Nt.refreshFogUniforms(Yt,Q),Nt.refreshMaterialUniforms(Yt,A,fe,Y,Me),fr.upload(de,Be.uniformsList,Yt,Ne)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(fr.upload(de,Be.uniformsList,Yt,Ne),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&vt.setValue(de,"center",L.center),vt.setValue(de,"modelViewMatrix",L.modelViewMatrix),vt.setValue(de,"normalMatrix",L.normalMatrix),vt.setValue(de,"modelMatrix",L.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){let en=A.uniformsGroups;for(let Bn=0,Ei=en.length;Bn<Ei;Bn++)if(Ye.isWebGL2){let yi=en[Bn];st.update(yi,Je),st.bind(yi,Je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Je}function Ws(k,y){k.ambientLightColor.needsUpdate=y,k.lightProbe.needsUpdate=y,k.directionalLights.needsUpdate=y,k.directionalLightShadows.needsUpdate=y,k.pointLights.needsUpdate=y,k.pointLightShadows.needsUpdate=y,k.spotLights.needsUpdate=y,k.spotLightShadows.needsUpdate=y,k.rectAreaLights.needsUpdate=y,k.hemisphereLights.needsUpdate=y}function $i(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(k,y,M){Ze.get(k.texture).__webglTexture=y,Ze.get(k.depthTexture).__webglTexture=M;let A=Ze.get(k);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=M===void 0,A.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(k,y){let M=Ze.get(k);M.__webglFramebuffer=y,M.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(k,y=0,M=0){b=k,x=y,_=M;let A=!0,L=null,Q=!1,N=!1;if(k){let Z=Ze.get(k);Z.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(36160,null),A=!1):Z.__webglFramebuffer===void 0?Ne.setupRenderTarget(k):Z.__hasExternalTextures&&Ne.rebindTextures(k,Ze.get(k.texture).__webglTexture,Ze.get(k.depthTexture).__webglTexture);let oe=k.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(N=!0);let ve=Ze.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(L=ve[y],Q=!0):Ye.isWebGL2&&k.samples>0&&Ne.useMultisampledRTT(k)===!1?L=Ze.get(k).__webglMultisampledFramebuffer:L=ve,P.copy(k.viewport),V.copy(k.scissor),T=k.scissorTest}else P.copy(J).multiplyScalar(fe).floor(),V.copy(te).multiplyScalar(fe).floor(),T=ue;if(Ge.bindFramebuffer(36160,L)&&Ye.drawBuffers&&A&&Ge.drawBuffers(k,L),Ge.viewport(P),Ge.scissor(V),Ge.setScissorTest(T),Q){let Z=Ze.get(k.texture);de.framebufferTexture2D(36160,36064,34069+y,Z.__webglTexture,M)}else if(N){let Z=Ze.get(k.texture),oe=y||0;de.framebufferTextureLayer(36160,36064,Z.__webglTexture,M||0,oe)}v=-1},this.readRenderTargetPixels=function(k,y,M,A,L,Q,N){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=Ze.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&N!==void 0&&(X=X[N]),X){Ge.bindFramebuffer(36160,X);try{let Z=k.texture,oe=Z.format,ve=Z.type;if(oe!==kn&&Ke.convert(oe)!==de.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Te=ve===Ti&&(nt.has("EXT_color_buffer_half_float")||Ye.isWebGL2&&nt.has("EXT_color_buffer_float"));if(ve!==di&&Ke.convert(ve)!==de.getParameter(35738)&&!(ve===rs&&(Ye.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=k.width-A&&M>=0&&M<=k.height-L&&de.readPixels(y,M,A,L,Ke.convert(oe),Ke.convert(ve),Q)}finally{let Z=b!==null?Ze.get(b).__webglFramebuffer:null;Ge.bindFramebuffer(36160,Z)}}},this.copyFramebufferToTexture=function(k,y,M=0){let A=Math.pow(2,-M),L=Math.floor(y.image.width*A),Q=Math.floor(y.image.height*A);Ne.setTexture2D(y,0),de.copyTexSubImage2D(3553,M,0,0,k.x,k.y,L,Q),Ge.unbindTexture()},this.copyTextureToTexture=function(k,y,M,A=0){let L=y.image.width,Q=y.image.height,N=Ke.convert(M.format),X=Ke.convert(M.type);Ne.setTexture2D(M,0),de.pixelStorei(37440,M.flipY),de.pixelStorei(37441,M.premultiplyAlpha),de.pixelStorei(3317,M.unpackAlignment),y.isDataTexture?de.texSubImage2D(3553,A,k.x,k.y,L,Q,N,X,y.image.data):y.isCompressedTexture?de.compressedTexSubImage2D(3553,A,k.x,k.y,y.mipmaps[0].width,y.mipmaps[0].height,N,y.mipmaps[0].data):de.texSubImage2D(3553,A,k.x,k.y,N,X,y.image),A===0&&M.generateMipmaps&&de.generateMipmap(3553),Ge.unbindTexture()},this.copyTextureToTexture3D=function(k,y,M,A,L=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Q=k.max.x-k.min.x+1,N=k.max.y-k.min.y+1,X=k.max.z-k.min.z+1,Z=Ke.convert(A.format),oe=Ke.convert(A.type),ve;if(A.isData3DTexture)Ne.setTexture3D(A,0),ve=32879;else if(A.isDataArrayTexture)Ne.setTexture2DArray(A,0),ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}de.pixelStorei(37440,A.flipY),de.pixelStorei(37441,A.premultiplyAlpha),de.pixelStorei(3317,A.unpackAlignment);let Te=de.getParameter(3314),$e=de.getParameter(32878),St=de.getParameter(3316),Gt=de.getParameter(3315),Bt=de.getParameter(32877),yt=M.isCompressedTexture?M.mipmaps[0]:M.image;de.pixelStorei(3314,yt.width),de.pixelStorei(32878,yt.height),de.pixelStorei(3316,k.min.x),de.pixelStorei(3315,k.min.y),de.pixelStorei(32877,k.min.z),M.isDataTexture||M.isData3DTexture?de.texSubImage3D(ve,L,y.x,y.y,y.z,Q,N,X,Z,oe,yt.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),de.compressedTexSubImage3D(ve,L,y.x,y.y,y.z,Q,N,X,Z,yt.data)):de.texSubImage3D(ve,L,y.x,y.y,y.z,Q,N,X,Z,oe,yt),de.pixelStorei(3314,Te),de.pixelStorei(32878,$e),de.pixelStorei(3316,St),de.pixelStorei(3315,Gt),de.pixelStorei(32877,Bt),L===0&&A.generateMipmaps&&de.generateMipmap(ve),Ge.unbindTexture()},this.initTexture=function(k){k.isCubeTexture?Ne.setTextureCube(k,0):k.isData3DTexture?Ne.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?Ne.setTexture2DArray(k,0):Ne.setTexture2D(k,0),Ge.unbindTexture()},this.resetState=function(){x=0,_=0,b=null,Ge.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var nl=class extends Aa{};nl.prototype.isWebGL1Renderer=!0;var vr=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},pa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Wn=new D,ma=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ku=new D,Fu=new jt,Ou=new jt,yx=new D,Nu=new mt,Ns=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new mt,this.bindMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new jt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Fu.fromBufferAttribute(i.attributes.skinIndex,e),Ou.fromBufferAttribute(i.attributes.skinWeight,e),ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Ou.getComponent(s);if(a!==0){let o=Fu.getComponent(s);Nu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yx.copy(ku).applyMatrix4(Nu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},zs=class extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}},_r=class extends On{constructor(e=null,t=1,n=1,i,s,a,o,c,l=_n,h=_n,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zu=new mt,vx=new mt,hs=class r{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:vx;zu.multiplyMatrices(o,t[s]),zu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=of(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _r(t,e,e,kn,rs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new zs),this.bones.push(a),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ga=class extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bu=new mt,Uu=new mt,to=[],_x=new mt,Jr=new Tt,Mr=class extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,_x)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Bu),Uu.multiplyMatrices(n,Bu),Jr.matrixWorld=Uu,Jr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let c=to[a];c.instanceId=s,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},ba=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gu=new D,Hu=new D,Vu=new mt,Lc=new ha,no=new Zi,wr=class extends nn{constructor(e=new Rt,t=new ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gu.fromBufferAttribute(t,i-1),Hu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gu.distanceTo(Hu);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Vu.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(Vu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let x=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){let E=g.getX(b),P=g.getX(b+1);if(l.fromBufferAttribute(p,E),h.fromBufferAttribute(p,P),Lc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){if(l.fromBufferAttribute(p,b),h.fromBufferAttribute(p,b+1),Lc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Wu=new D,qu=new D,yo=class extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Wu.fromBufferAttribute(t,i),qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wu.distanceTo(qu);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},vo=class extends wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new mt,il=new ha,io=new Zi,so=new D,us=class extends nn{constructor(e=new Rt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;ju.copy(i).invert(),il.copy(e.ray).applyMatrix4(ju);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,m=d;g<m;g++){let p=l.getX(g);so.fromBufferAttribute(u,p),Xu(so,p,c,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,m=d;g<m;g++)so.fromBufferAttribute(u,g),Xu(so,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Xu(r,e,t,n,i,s,a){let o=il.distanceSqToPoint(r);if(o<t){let c=new D;il.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var mi=class extends On{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Oe:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],s=[],a=[],o=new D,c=new mt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Rn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xa=class extends gi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Oe,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sl=class extends xa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Il(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var ro=new D,Dc=new Il,kc=new Il,Fc=new Il,rl=class extends gi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(ro.subVectors(i[0],i[1]).add(i[0]),l=ro);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(ro.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Dc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,m,p),kc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,m,p),Fc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),kc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Fc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Dc.calc(c),kc.calc(c),Fc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Mx(r,e){let t=1-r;return t*t*e}function wx(r,e){return 2*(1-r)*r*e}function Sx(r,e){return r*r*e}function ra(r,e,t,n){return Mx(r,e)+wx(r,t)+Sx(r,n)}function Tx(r,e){let t=1-r;return t*t*t*e}function Ax(r,e){let t=1-r;return 3*t*t*r*e}function Ex(r,e){return 3*(1-r)*r*r*e}function Cx(r,e){return r*r*r*e}function aa(r,e,t,n,i){return Tx(r,e)+Ax(r,t)+Ex(r,n)+Cx(r,i)}var _o=class extends gi{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,i.x,s.x,a.x,o.x),aa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends gi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,i.x,s.x,a.x,o.x),aa(e,i.y,s.y,a.y,o.y),aa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends gi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new Oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends gi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends gi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ra(e,i.x,s.x,a.x),ra(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends gi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ra(e,i.x,s.x,a.x),ra(e,i.y,s.y,a.y),ra(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Yu(o,c.x,l.x,h.x,u.x),Yu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}},Rx=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:_o,CubicBezierCurve3:al,EllipseCurve:xa,LineCurve:ya,LineCurve3:ol,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:cl,SplineCurve:wo}),ll=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ya(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Rx[i.type]().fromJSON(i))}return this}},hl=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ya(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Mo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new _o(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i),new Oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new xa(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ul=class r extends Rt{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rn(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new D,f=new Oe,d=new D,g=new D,m=new D,p=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*i,v=Math.sin(b),E=Math.cos(b);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*v,u.y=e[P].y,u.z=e[P].x*E,a.push(u.x,u.y,u.z),f.x=_/t,f.y=P/(e.length-1),o.push(f.x,f.y);let V=c[3*P+0]*v,T=c[3*P+1],R=c[3*P+0]*E;l.push(V,T,R)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let v=b+_*e.length,E=v,P=v+e.length,V=v+e.length+1,T=v+1;s.push(E,P,T),s.push(V,T,P)}this.setIndex(s),this.setAttribute("position",new ct(a,3)),this.setAttribute("uv",new ct(o,2)),this.setAttribute("normal",new ct(l,3))}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},So=class r extends ul{constructor(e=1,t=1,n=4,i=8){let s=new hl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},va=class r extends Rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new D,h=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(c,2))}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},In=class r extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,m=[],p=n/2,x=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function _(){let v=new D,E=new D,P=0,V=(t-e)/n;for(let T=0;T<=s;T++){let R=[],Y=T/s,fe=Y*(t-e)+e;for(let j=0;j<=i;j++){let K=j/i,J=K*c+o,te=Math.sin(J),ue=Math.cos(J);E.x=fe*te,E.y=-Y*n+p,E.z=fe*ue,u.push(E.x,E.y,E.z),v.set(te,V,ue).normalize(),f.push(v.x,v.y,v.z),d.push(K,1-Y),R.push(g++)}m.push(R)}for(let T=0;T<i;T++)for(let R=0;R<s;R++){let Y=m[R][T],fe=m[R+1][T],j=m[R+1][T+1],K=m[R][T+1];h.push(Y,fe,K),h.push(fe,j,K),P+=6}l.addGroup(x,P,0),x+=P}function b(v){let E=g,P=new Oe,V=new D,T=0,R=v===!0?e:t,Y=v===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,p*Y,0),f.push(0,Y,0),d.push(.5,.5),g++;let fe=g;for(let j=0;j<=i;j++){let J=j/i*c+o,te=Math.cos(J),ue=Math.sin(J);V.x=R*ue,V.y=p*Y,V.z=R*te,u.push(V.x,V.y,V.z),f.push(0,Y,0),P.x=te*.5+.5,P.y=ue*.5*Y+.5,d.push(P.x,P.y),g++}for(let j=0;j<i;j++){let K=E+j,J=fe+j;v===!0?h.push(J,J+1,K):h.push(J+1,J,K),T+=3}l.addGroup(x,T,v===!0?1:2),x+=T}}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class r extends In{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class r extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new D,v=new D,E=new D;for(let P=0;P<t.length;P+=3)d(t[P+0],b),d(t[P+1],v),d(t[P+2],E),c(b,v,E,_)}function c(_,b,v,E){let P=E+1,V=[];for(let T=0;T<=P;T++){V[T]=[];let R=_.clone().lerp(v,T/P),Y=b.clone().lerp(v,T/P),fe=P-T;for(let j=0;j<=fe;j++)j===0&&T===P?V[T][j]=R:V[T][j]=R.clone().lerp(Y,j/fe)}for(let T=0;T<P;T++)for(let R=0;R<2*(P-T)-1;R++){let Y=Math.floor(R/2);R%2===0?(f(V[T][Y+1]),f(V[T+1][Y]),f(V[T][Y])):(f(V[T][Y+1]),f(V[T+1][Y+1]),f(V[T+1][Y]))}}function l(_){let b=new D;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(_),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function h(){let _=new D;for(let b=0;b<s.length;b+=3){_.x=s[b+0],_.y=s[b+1],_.z=s[b+2];let v=p(_)/2/Math.PI+.5,E=x(_)/Math.PI+.5;a.push(v,1-E)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],E=a[_+4],P=Math.max(b,v,E),V=Math.min(b,v,E);P>.9&&V<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,b){let v=_*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){let _=new D,b=new D,v=new D,E=new D,P=new Oe,V=new Oe,T=new Oe;for(let R=0,Y=0;R<s.length;R+=9,Y+=6){_.set(s[R+0],s[R+1],s[R+2]),b.set(s[R+3],s[R+4],s[R+5]),v.set(s[R+6],s[R+7],s[R+8]),P.set(a[Y+0],a[Y+1]),V.set(a[Y+2],a[Y+3]),T.set(a[Y+4],a[Y+5]),E.copy(_).add(b).add(v).divideScalar(3);let fe=p(E);m(P,Y+0,_,fe),m(V,Y+2,b,fe),m(T,Y+4,v,fe)}}function m(_,b,v,E){E<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=E/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Us=class r extends To{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Gs=class r extends To{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fs=class r extends Rt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,g=new Oe;for(let m=0;m<=i;m++){for(let p=0;p<=n;p++){let x=s+p/n*a;d.x=u*Math.cos(x),d.y=u*Math.sin(x),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let m=0;m<i;m++){let p=m*(n+1);for(let x=0;x<n;x++){let _=x+p,b=_,v=_+n+1,E=_+n+2,P=_+1;o.push(b,v,P),o.push(v,E,P)}}this.setIndex(o),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ki=class r extends Rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,d=[],g=[],m=[],p=[];for(let x=0;x<=n;x++){let _=[],b=x/n,v=0;x==0&&a==0?v=.5/t:x==n&&c==Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let P=E/t;u.x=-e*Math.cos(i+P*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+P*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(P+v,1-b),_.push(l++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let b=h[x][_+1],v=h[x][_],E=h[x+1][_],P=h[x+1][_+1];(x!==0||a>0)&&d.push(b,v,P),(x!==n-1||c<Math.PI)&&d.push(v,E,P)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(p,2))}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tr=class r extends Rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,x=(i+1)*(d-1)+g,_=(i+1)*d+g;a.push(m,p,_),a.push(p,x,_)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zt=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fi=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ss(r,e,t){return bf(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ao(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Px(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function xf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var ds=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cr,endingEnd:cr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case lr:s=e,o=2*t-n;break;case lo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case lr:a=e,c=2*n-t;break;case lo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,x=-f*p+2*f*m-f*g,_=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,b=(-1-d)*p+(1.5+d)*m+.5*g,v=d*p-d*m;for(let E=0;E!==o;++E)s[E]=x*a[h+E]+_*a[l+E]+b*a[c+E]+v*a[u+E];return s}},Ao=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},dl=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case oc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=ss(n,s,a),this.values=ss(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&bf(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=ss(this.times),t=ss(this.values),n=this.getValueSize(),i=this.getInterpolation()===oc,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let m=t[u+g];if(m!==t[f+g]||m!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=ss(e,0,a),this.values=ss(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=ss(this.times,0),t=ss(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=ks;var ps=class extends bi{};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=gr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends bi{};Eo.prototype.ValueTypeName="color";var ms=class extends bi{};ms.prototype.ValueTypeName="number";var pl=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)xn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Oi=class extends bi{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=ks;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends bi{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=gr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends bi{};bs.prototype.ValueTypeName="vector";var Ar=class{constructor(e,t=-1,n,i=Cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lx(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Px(c);c=Ku(c,1,h),l=Ku(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ms(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,m){if(d.length!==0){let p=[],x=[];xf(d,p,x,g),p.length!==0&&m.push(new u(f,p,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(let m in d){let p=[],x=[];for(let _=0;_!==f[g].morphTargets.length;++_){let b=f[g];p.push(b.time),x.push(b.morphTarget===m?1:0)}i.push(new ms(".morphTargetInfluence["+m+"]",p,x))}c=d.length*a}else{let d=".bones["+t[u].name+"]";n(bs,d+".position",f,"pos",i),n(Oi,d+".quaternion",f,"rot",i),n(bs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ix(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return Eo;case"quaternion":return Oi;case"bool":case"boolean":return ps;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Lx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ix(r.type);if(r.times===void 0){let t=[],n=[];xf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Er={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ml=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Dx=new ml,xs=class{constructor(e){this.manager=e!==void 0?e:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Xi={},gl=class extends Error{constructor(e,t){super(e),this.response=t}},_a=class extends xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Xi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,m=0,p=new ReadableStream({start(x){_();function _(){u.read().then(({done:b,value:v})=>{if(b)x.close();else{m+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let P=0,V=h.length;P<V;P++){let T=h[P];T.onProgress&&T.onProgress(E)}x.enqueue(v),_()}})}}});return new Response(p)}else throw new gl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Er.add(e,l);let h=Xi[e];delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var bl=class extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=la("img");function c(){h(),Er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Co=class extends xs{constructor(e){super(e)}load(e,t,n,i){let s=new On,a=new bl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Cr=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Rr=class extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oc=new mt,Ju=new D,Zu=new D,Ma=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xl=class extends Ma{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ca*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends Cr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qu=new mt,Zr=new D,Nc=new D,yl=class extends Ma{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Nc.copy(n.position),Nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nc),n.updateMatrixWorld(),i.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}},Pr=class extends Cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vl=class extends Ma{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ir=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Er.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var _l=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){xn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;xn.multiplyQuaternionsFlat(e,a,e,t,e,n),xn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Ll="\\[\\]\\.:\\/",kx=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",Fx="[^"+Ll.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Nx=/(WCOD+)?/.source.replace("WCOD",Fx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Ux=new RegExp("^"+Ox+Nx+zx+Bx+"$"),Gx=["material","materials","bones","map"],Ml=class{constructor(e,t,n){let i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Gx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Ml;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:cr,endingEnd:cr};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Do,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case bp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Cl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===gp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===El){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=lr,i.endingEnd=lr):(e?i.endingStart=this.zeroSlopeAtStart?lr:cr:i.endingStart=lo,t?i.endingEnd=this.zeroSlopeAtEnd?lr:cr:i.endingEnd=lo)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Hx=new Float32Array(1),Io=class extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;g=new _l(qt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ao(new Float32Array(2),new Float32Array(2),1,Hx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?Ar.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cl),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new wl(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Ar.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);function No(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Rt,l=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=yf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][f]);let g=yf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function yf(r){let e,t,n,i=0;for(let o=0;o<r.length;++o){let c=r[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}let s=new e(i),a=0;for(let o=0;o<r.length;++o)s.set(r[o].array,a),a+=r[o].array.length;return new wt(s,t,n)}function kl(r,e){if(e===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ta||e===ko){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ta)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var zo=class extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ul(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new Jl(t)})}load(e,t,n,i){let s=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ir.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new _a(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tf){try{a[Dt.KHR_BINARY_GLTF]=new Zl(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new sh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Dt.KHR_MATERIALS_UNLIT:a[u]=new zl;break;case Dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ql(s,this.dracoLoader);break;case Dt.KHR_TEXTURE_TRANSFORM:a[u]=new $l;break;case Dt.KHR_MESH_QUANTIZATION:a[u]=new eh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Vx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nl=class{constructor(e){this.parser=e,this.name=Dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.fromArray(c.color);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Pr(h),l.distance=u;break;case"spot":l=new Ro(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},zl=class{constructor(){this.name=Dt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}},Bl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Ul=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}},Gl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Hl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Vl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Wl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(o[0],o[1],o[2]),Promise.all(s)}},ql=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},jl=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(s)}},Xl=class{constructor(e){this.parser=e,this.name=Dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Yl=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kl=class{constructor(e){this.name=Dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Jl=class{constructor(e){this.name=Dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==xi.TRIANGLES&&l.mode!==xi.TRIANGLE_STRIP&&l.mode!==xi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let m=new mt,p=new D,x=new xn,_=new D(1,1,1),b=new Mr(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&x.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,m.compose(p,x,_));for(let v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);nn.prototype.copy.call(b,g),b.frustumCulled=!1,this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Tf="glTF",Ea=12,vf={JSON:1313821514,BIN:5130562},Zl=class{constructor(e){this.name=Dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ea,s=new DataView(e,Ea),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===vf.JSON){let l=new Uint8Array(e,Ea+a,o);this.content=n.decode(l)}else if(c===vf.BIN){let l=Ea+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ql=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=nh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=nh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Fr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(let d in f.attributes){let g=f.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}u(f)},o,l)})})}},$l=class{constructor(){this.name=Dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},eh=class{constructor(){this.name=Dt.KHR_MESH_QUANTIZATION}},Bo=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,m=g-l,p=-2*d+3*f,x=d-f,_=1-p,b=x-f+u;for(let v=0;v!==o;v++){let E=a[m+v+o],P=a[m+v+c]*h,V=a[g+v+o],T=a[g+v]*h;s[v]=_*E+b*P+p*V+x*T}return s}},Wx=new xn,th=class extends Bo{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Wx.fromArray(s).normalize().toArray(s),s}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:_n,9729:Cn,9984:co,9985:Al,9986:ea,9987:Si},Mf={33071:ri,33648:oa,10497:Kn},Fl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qx={CUBICSPLINE:void 0,LINEAR:ks,STEP:gr},Ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),r.DefaultMaterial}function Ca(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vs(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Yx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kx(r){let e=r.extensions&&r.extensions[Dt.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+wf(e.attributes):t=r.indices+":"+wf(r.attributes)+":"+r.mode,t}function wf(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ih(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zx=new mt,sh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new Co(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _a(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Ca(s,o,i),vs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Dt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ir.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Fl[i.type],o=Fr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new wt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Fl[i.type],l=Fr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,m,p;if(d&&d!==u){let x=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,b=t.cache.get(_);b||(m=new l(o,x*d,i.count*d/h),b=new pa(m,d/h),t.cache.add(_,b)),p=new ma(b,c,f%d/h,g)}else o===null?m=new l(i.count*c):m=new l(o,f,i.count*c),p=new wt(m,c,g);if(i.sparse!==void 0){let x=Fl.SCALAR,_=Fr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new _(a[1],b,i.sparse.count*x),P=new l(a[2],v,i.sparse.count*c);o!==null&&(p=new wt(p.array.slice(),p.itemSize,p.normalized));for(let V=0,T=E.length;V<T;V++){let R=E[V];if(p.setX(R,P[V*c]),c>=2&&p.setY(R,P[V*c+1]),c>=3&&p.setZ(R,P[V*c+2]),c>=4&&p.setW(R,P[V*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"";let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=_f[f.magFilter]||Cn,h.minFilter=_f[f.minFilter]||Si,h.wrapS=Mf[f.wrapS]||Kn,h.wrapT=Mf[f.wrapT]||Kn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let p=new On(m);p.needsUpdate=!0,f(p)}),t.load(Ir.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Jx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Bs,ci.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ba,ci.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Zt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Dt.KHR_MATERIALS_UNLIT]){let u=i[Dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=cn);let h=s.alphaMode||Ol.OPAQUE;if(h===Ol.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ol.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==sn&&(o.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==sn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),vs(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ca(i,u,s),u})}createUniqueName(e){let t=qt.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Kx(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Dt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Sf(new Rt,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?jx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let m=h[d],p=a[d],x,_=l[d];if(p.mode===xi.TRIANGLES||p.mode===xi.TRIANGLE_STRIP||p.mode===xi.TRIANGLE_FAN||p.mode===void 0)x=s.isSkinnedMesh===!0?new Ns(m,_):new Tt(m,_),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),p.mode===xi.TRIANGLE_STRIP?x.geometry=kl(x.geometry,ko):p.mode===xi.TRIANGLE_FAN&&(x.geometry=kl(x.geometry,Ta));else if(p.mode===xi.LINES)x=new yo(m,_);else if(p.mode===xi.LINE_STRIP)x=new wr(m,_);else if(p.mode===xi.LINE_LOOP)x=new vo(m,_);else if(p.mode===xi.POINTS)x=new us(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(x.geometry.morphAttributes).length>0&&Yx(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),vs(x,s),p.extensions&&Ca(i,x,p),t.assignFinalMaterial(x),u.push(x)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];let f=new Xt;t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(cf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new cs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new mt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hs(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let l=0,h=n.channels.length;l<h;l++){let u=n.channels[l],f=n.samplers[u.sampler],d=u.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(f),c.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2],d=l[3],g=l[4],m=[];for(let x=0,_=h.length;x<_;x++){let b=h[x],v=u[x],E=f[x],P=d[x],V=g[x];if(b===void 0)continue;b.updateMatrix();let T;switch(ys[V.path]){case ys.weights:T=ms;break;case ys.rotation:T=Oi;break;case ys.position:case ys.scale:default:T=bs;break}let R=b.name?b.name:b.uuid,Y=P.interpolation!==void 0?qx[P.interpolation]:ks,fe=[];ys[V.path]===ys.weights?b.traverse(function(K){K.morphTargetInfluences&&fe.push(K.name?K.name:K.uuid)}):fe.push(R);let j=E.array;if(E.normalized){let K=ih(j.constructor),J=new Float32Array(j.length);for(let te=0,ue=j.length;te<ue;te++)J[te]=j[te]*K;j=J}for(let K=0,J=fe.length;K<J;K++){let te=new T(fe[K]+"."+ys[V.path],v.array,j,Y);P.interpolation==="CUBICSPLINE"&&(te.createInterpolant=function(le){let ee=this instanceof Oi?th:Bo;return new ee(this.times,this.values,this.getValueSize()/3,le)},te.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(te)}}let p=n.name?n.name:"animation_"+e;return new Ar(p,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){let o=[],c=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});let l=[],h=s.children||[];for(let f=0,d=h.length;f<d;f++)l.push(i.getDependency("node",h[f]));let u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(l),u])}().then(function(o){let c=o[0],l=o[1],h=o[2],u;if(s.isBone===!0?u=new zs:c.length>1?u=new Xt:c.length===1?u=c[0]:u=new nn,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),vs(u,s),s.extensions&&Ca(n,u,s),s.matrix!==void 0){let f=new mt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Zx)});for(let f=0,d=l.length;f<d;f++)u.add(l[f]);return u})}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),vs(s,n),n.extensions&&Ca(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof ci||f instanceof On)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}};function Qx(r,e,t){let n=e.attributes,i=new oi;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let h=ih(Fr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let m=ih(Fr[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Zi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Sf(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=nh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return vs(r,e),Qx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Xx(r,e.targets,t):r})}var Af=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(x){s=x.instance,s.exports.__wasm_call_ctors()});function o(x){for(var _=new Uint8Array(x.length),b=0;b<x.length;++b){var v=x.charCodeAt(b);_[b]=v>96?v-97:v>64?v-39:v+4}for(var E=0,b=0;b<x.length;++b)_[E++]=_[b]<60?n[_[b]]:(_[b]-60)*64+_[++b];return _.buffer.slice(0,E)}function c(x,_,b,v,E,P){var V=s.exports.sbrk,T=b+3&-4,R=V(T*v),Y=V(E.length),fe=new Uint8Array(s.exports.memory.buffer);fe.set(E,Y);var j=x(R,b,v,Y,E.length);if(j==0&&P&&P(R,T,v),_.set(fe.subarray(R,R+b*v)),V(R-V(0)),j!=0)throw new Error("Malformed buffer data: "+j)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(x){var _={object:new Worker(x),pending:0,requests:{}};return _.object.onmessage=function(b){var v=b.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(x){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),b=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(b),E=0;E<x;++E)u[E]=d(v);URL.revokeObjectURL(v)}function m(x,_,b,v,E){for(var P=u[0],V=1;V<u.length;++V)u[V].pending<P.pending&&(P=u[V]);return new Promise(function(T,R){var Y=new Uint8Array(b),fe=f++;P.pending+=x,P.requests[fe]={resolve:T,reject:R},P.object.postMessage({id:fe,count:x,size:_,source:Y,mode:v,filter:E},[Y.buffer])})}function p(x){a.then(function(){var _=x.data;try{var b=new Uint8Array(_.count*_.size);c(s.exports[_.mode],b,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(x){g(x)},decodeVertexBuffer:function(x,_,b,v,E){c(s.exports.meshopt_decodeVertexBuffer,x,_,b,v,s.exports[l[E]])},decodeIndexBuffer:function(x,_,b,v){c(s.exports.meshopt_decodeIndexBuffer,x,_,b,v)},decodeIndexSequence:function(x,_,b,v){c(s.exports.meshopt_decodeIndexSequence,x,_,b,v)},decodeGltfBuffer:function(x,_,b,v,E,P){c(s.exports[h[E]],x,_,b,v,s.exports[l[P]])},decodeGltfBufferAsync:function(x,_,b,v,E){return u.length>0?m(x,_,b,h[v],l[E]):a.then(function(){var P=new Uint8Array(x*_);return c(s.exports[h[v]],P,x,_,b,s.exports[l[E]]),P})}}}();function Ef(r){let e=new Map,t=new Map,n=r.clone();return Cf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Cf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Cf(r.children[n],e.children[n],t)}function $x(r){let e=r>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var rh=r=>r*r*(3-2*r),ah=r=>r<0?0:r>1?1:r,Ra=r=>r-Math.floor(r),Hs=(r,e,t)=>rh(ah((t-r)/(e-r)));function e1(r,e,t){let n=new Float32Array(e*t);for(let i=0;i<n.length;i++)n[i]=r();return(i,s)=>{let a=Ra(i)*e,o=Ra(s)*t,c=Math.floor(a),l=Math.floor(o),h=rh(a-c),u=rh(o-l),f=(c+1)%e,d=(l+1)%t,g=n[l*e+c],m=n[l*e+f],p=n[d*e+c],x=n[d*e+f];return g+(m-g)*h+(p-g)*u+(g-m-p+x)*h*u}}function jn(r,e,t,n=4,i=.5){let s=[],a=1,o=0;for(let c=0;c<n;c++)s.push([e1(r,e<<c,t<<c),a]),o+=a,a*=i;return(c,l)=>{let h=0;for(let u=0;u<s.length;u++)h+=s[u][0](c,l)*s[u][1];return h/o}}function Or(r,e,t=.85){let n=new Float32Array(e*e*2),i=new Float32Array(e*e);for(let a=0;a<e*e;a++)n[a*2]=.5+(r()-.5)*t,n[a*2+1]=.5+(r()-.5)*t,i[a]=r();let s={f1:0,f2:0,id:0};return(a,o)=>{let c=Ra(a)*e,l=Ra(o)*e,h=Math.floor(c),u=Math.floor(l),f=1e9,d=1e9,g=0;for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++){let x=h+p,_=u+m,b=(_+e)%e*e+(x+e)%e,v=x+n[b*2]-c,E=_+n[b*2+1]-l,P=Math.sqrt(v*v+E*E);P<f?(d=f,f=P,g=i[b]):P<d&&(d=P)}return s.f1=f,s.f2=d,s.id=g,s}}var oh={metal(r,e,t,n,i){let s=jn(e,2,96,3,.55),a=jn(e,3,3,3);for(let o=0;o<r;o++)for(let c=0;c<r;c++){let l=c/r,h=o/r,u=o*r+c,f=s(l,h),d=a(l,h);t[u]=f*.6+d*.4,n[u]=.88+f*.08+d*.04,i[u]=.68+f*.15+Hs(.45,.8,d)*.12}for(let o=0;o<14;o++){let c=e()*r,l=e()*r,h=(e()-.5)*.9,u=r*(.08+e()*.18),f=Math.cos(h),d=Math.sin(h);for(let g=0;g<u;g++){let m=(Math.round(c+f*g)%r+r)%r,x=(Math.round(l+d*g)%r+r)%r*r+m;t[x]=Math.max(0,t[x]-.18),n[x]=Math.min(1,n[x]+.05),i[x]*=.7}}},hammered(r,e,t,n,i){let s=Or(e,7,.9),a=Or(e,13,.9),o=jn(e,4,4,3);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=l/r,u=c/r,f=c*r+l,d=s(h,u).f1,g=a(h,u).f1,m=o(h,u),p=Math.min(1,d*d*1.4)*.65+Math.min(1,g*g*1.6)*.35;t[f]=p*.85+m*.15,n[f]=.88+p*.09+m*.03,i[f]=.66+(1-p)*.22+m*.08}},leather(r,e,t,n,i){let s=Or(e,22,1),a=jn(e,3,5,4),o=jn(e,2,2,3),c=jn(e,32,32,2);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=s(u,f),m=Hs(0,.22,g.f2-g.f1),p=1-Hs(0,.05,Math.abs(a(u,f)-.5)),x=o(u,f);t[d]=m*.7+c(u,f)*.2+.1-p*.35,n[d]=.8+x*.14+m*.06-p*.06,i[d]=.7+(1-x)*.2+(1-m)*.1}},cloth(r,e,t,n,i){let a=jn(e,2,48,2),o=jn(e,48,2,2),c=jn(e,3,3,3);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=u*24,m=f*24,p=Math.floor(g),x=Math.floor(m),_=g-p,b=m-x,v=(p+x&1)===0,E=v?_:b,P=v?b:_,V=Math.sin(Math.PI*E),T=.6+.4*Math.sin(Math.PI*P),R=v?a(u,f):o(u,f);t[d]=V*T*(.8+R*.2),n[d]=.8+V*.1+R*.06+c(u,f)*.04,i[d]=.92+(1-V)*.08}},wood(r,e,t,n,i){let s=jn(e,2,3,4),a=jn(e,3,64,2),o=Or(e,3,.8);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=l/r,u=c/r,f=c*r+l,d=o(h,u),g=Math.max(0,1-d.f1*2.4),m=Ra(u*7+s(h,u)*1.6+g*g*.6),p=Math.pow(Math.sin(Math.PI*m),.6),x=a(h,u);t[f]=p*.55+x*.45,n[f]=.74+p*.16+x*.1-g*g*.1,i[f]=.75+(1-p)*.12+x*.13}},stone(r,e,t,n,i){let s=Or(e,5,.9),a=Or(e,11,.9),o=jn(e,4,4,5),c=jn(e,24,24,2);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=s(u,f),m=1-Hs(0,.06,g.f2-g.f1),p=g.id,x=a(u,f),_=1-Hs(0,.03,x.f2-x.f1),b=o(u,f),v=Hs(.62,.8,c(u,f));t[d]=.25+b*.55+p*.2-m*.55-_*.12-v*.15,n[d]=.8+b*.1+p*.08-m*.2-_*.05-v*.06,i[d]=.82+b*.12+m*.06}},scale(r,e,t,n,i){let h=jn(e,8,8,2),u=jn(e,6,6,3);for(let f=0;f<r;f++)for(let d=0;d<r;d++){let g=d/r,m=f/r,p=f*r+d,x=null,_=Math.floor(m/.125);for(let V=_+2;V>=_-1;V--){let T=(V+1)*.125,R=T-.21875;if(m>T+1e-6||m<R)continue;let Y=(V%2+2)%2*.5,fe=(Math.round(g*8-Y)+Y)/8,j=g-fe;j-=Math.round(j);let K=.0625*1.02,J=T-K,te,ue;if(m<=J)te=Math.abs(j)<=K,ue=(K-Math.abs(j))/K;else{let le=Math.hypot(j,m-J);te=le<=K,ue=(K-le)/K}te&&(x={t:(m-R)/.21875,edge:ue,dx:j/K,id:h(fe,T)})}if(!x){t[p]=0,n[p]=.6,i[p]=.9;continue}let b=Hs(0,.18,x.edge),v=1-x.dx*x.dx*.35,E=(.35+x.t*.65)*v*b,P=u(g,m);t[p]=E*.9+P*.1,n[p]=.72+b*.14+x.id*.08+P*.06,i[p]=.6+(1-b)*.25+x.id*.15}}},F1=Object.keys(oh);function Rf(r){if(typeof document!="undefined"){let e=document.createElement("canvas");return e.width=r,e.height=r,e}return new OffscreenCanvas(r,r)}function t1(r){let e=1/0,t=-1/0;for(let i=0;i<r.length;i++)r[i]<e&&(e=r[i]),r[i]>t&&(t=r[i]);let n=t>e?1/(t-e):0;for(let i=0;i<r.length;i++)r[i]=(r[i]-e)*n}var Pf=new Map,If=new Map;function Pa(r,e={}){if(!oh[r])throw new Error("proceduralTexture: unknown kind "+r);let t=Math.min(512,Math.max(16,1<<Math.round(Math.log2(e.size||128)))),n=e.seed==null?1:e.seed|0,i=e.repeat==null?[1,1]:Array.isArray(e.repeat)?e.repeat:[e.repeat,e.repeat],s=e.anisotropy||1,a=r+"|"+t+"|"+n+"|"+s,o=Pf.get(a);if(!o){let h=$x(n*7919+r.length*104729+r.charCodeAt(0)*31),u=t*t,f=new Float32Array(u),d=new Float32Array(u),g=new Float32Array(u);oh[r](t,h,f,d,g),t1(f);let m=Rf(t),p=Rf(t),x=m.getContext("2d"),_=p.getContext("2d"),b=x.createImageData(t,t),v=_.createImageData(t,t);for(let V=0;V<u;V++){let T=Math.round(ah(d[V])*255),R=V*4;b.data[R]=T,b.data[R+1]=T,b.data[R+2]=T,b.data[R+3]=255,v.data[R]=Math.round(f[V]*255),v.data[R+1]=Math.round(ah(g[V])*255),v.data[R+2]=0,v.data[R+3]=255}x.putImageData(b,0,0),_.putImageData(v,0,0);let E=new mi(m),P=new mi(p);for(let V of[E,P])V.wrapS=V.wrapT=Kn,V.anisotropy=s;E.encoding=xt,P.encoding=Di,E.name="pt-"+r+"-map",P.name="pt-"+r+"-data",o={map:E,roughnessMap:P,bumpMap:P},Pf.set(a,o)}if(i[0]===1&&i[1]===1)return o;let c=a+"|"+i[0]+"x"+i[1],l=If.get(c);if(!l){let h=o.map.clone(),u=o.roughnessMap.clone();h.repeat.set(i[0],i[1]),u.repeat.set(i[0],i[1]),l={map:h,roughnessMap:u,bumpMap:u},If.set(c,l)}return l}var Df={metal:{tex:"metal",rough:.42,metal:.9,bump:.0035,env:.9,color:10133672},gold:{tex:"hammered",rough:.36,metal:1,bump:.0025,env:1,color:14264389},leather:{tex:"leather",rough:.78,metal:0,bump:.006,env:.3,color:7031347},cloth:{tex:"cloth",rough:.95,metal:0,bump:.005,env:.2,color:8007214},wood:{tex:"wood",rough:.72,metal:0,bump:.006,env:.3,color:8016948},stone:{tex:"stone",rough:.9,metal:0,bump:.009,env:.25,color:5592154},gem:{tex:null,rough:.1,metal:.3,bump:0,env:1,color:3837183},bone:{tex:"leather",rough:.55,metal:0,bump:.0015,env:.35,color:14208432},skin:{tex:"leather",rough:.62,metal:0,bump:8e-4,env:.25,color:13146746},hair:{tex:"metal",rough:.5,metal:0,bump:.002,env:.35,color:3811870}},O1=Object.keys(Df),Lf=new Map;function n1(r){return r==null?"d":r.isColor?"c"+r.getHexString():String(r)}function Ni(r,e,t={}){var l,h,u,f,d,g;let n=Df[r];if(!n)throw new Error("detailMaterial: unknown role "+r);let i={};for(let m of Object.keys(t).sort()){let p=t[m];i[m]=p&&p.isTexture?"tex:"+p.uuid:p&&p.isColor?"#"+p.getHexString():p}let s=r+"|"+n1(e)+"|"+JSON.stringify(i),a=Lf.get(s);if(a)return a;let o=new Ie(e==null?n.color:e);a=new Zt({color:o,roughness:(l=t.roughness)!=null?l:n.rough,metalness:(h=t.metalness)!=null?h:n.metal,flatShading:!!t.flatShading,side:(u=t.side)!=null?u:fi});let c=t.texture===!1?null:t.texture||n.tex;if(c){let m=Pa(c,{size:t.size,seed:t.seed,repeat:t.repeat});a.map=m.map,a.roughnessMap=m.roughnessMap;let p=n.bump*((f=t.bump)!=null?f:1);p>0&&(a.bumpMap=m.bumpMap,a.bumpScale=p),a.roughness=Math.min(1,a.roughness/.78)}return r==="gem"&&(a.emissive=new Ie(t.glow==null?o:t.glow),a.emissiveIntensity=(d=t.glowIntensity)!=null?d:.7,a.color.multiplyScalar(.25)),t.envMap&&(a.envMap=t.envMap),a.envMapIntensity=(g=t.envMapIntensity)!=null?g:n.env,a.name="dm-"+r,a.userData.shared=!0,Lf.set(s,a),a}var Uo=new WeakMap;function i1(){let r=new ls,e=new ki(10,32,16),t=e.attributes.position,n=new Float32Array(t.count*3),i=new Ie(.2,.21,.25),s=new Ie(.2,.18,.16),a=new Ie(.025,.022,.02),o=new Ie;for(let l=0;l<t.count;l++){let h=t.getY(l)/10;h>=0?o.copy(s).lerp(i,Math.pow(h,.6)):o.copy(s).lerp(a,Math.min(1,Math.pow(-h*4,.5))),n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b}e.setAttribute("color",new wt(n,3)),r.add(new Tt(e,new sn({vertexColors:!0,side:Fn,fog:!1})));let c=(l,h,u,f)=>{let d=new sn({color:new Ie().setRGB(u[0],u[1],u[2],Fs),side:cn,fog:!1}),g=new Tt(new pi(l,h),d);g.position.set(f[0],f[1],f[2]),g.lookAt(0,0,0),r.add(g)};return c(5,3.5,[5,3.9,2.8],[-4.5,6,5]),c(3,6,[1.6,2.1,3.6],[5,3,-6]),c(9,4,[.9,.86,.8],[0,2.5,8.5]),c(2.5,2.5,[.9,.8,.7],[-8,.5,-2]),r}function Go(r,e={}){let t=Uo.get(r);if(t)return t.texture;let n=e.size||64,i=i1(),s=new yr(r),a;if(n>=256)a=s.fromScene(i,.02,.1,50);else{let o=new fa(n,{type:Ti,generateMipmaps:!1}),c=new ua(.1,50,o),l=r.getRenderTarget(),h=r.toneMapping,u=r.outputEncoding;r.toneMapping=ai,r.outputEncoding=Di,c.update(r,i),r.toneMapping=h,r.outputEncoding=u,r.setRenderTarget(l),a=s.fromCubemap(o.texture),o.dispose()}return s.dispose(),i.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a.texture.name="sigil-env",Uo.set(r,a),a.texture}function Ho(r){let e=Uo.get(r);e&&(e.dispose(),Uo.delete(r))}function s1(r,e,t,n){let i=new Rt;return i.setAttribute("position",new ct(r,3)),e&&i.setAttribute("normal",new ct(e,3)),i.setAttribute("uv",new ct(t,2)),i.setIndex(n),e||i.computeVertexNormals(),i.computeBoundingSphere(),i}function kf(r=1,e=1,t=1,n,i=2,s={}){let a=r/2,o=e/2,c=t/2;n=Math.min(n==null?Math.min(r,e,t)*.1:n,a,o,c),i=Math.max(1,i|0);let l=2*i+1,h=new Ai(1,1,1,l,l,l),u=h.attributes.position,f=h.attributes.normal,d=h.attributes.uv,g=s.uvScale||1/Math.max(r,e,t),m=(b,v)=>{let E=Math.round((b+.5)*l);return E<=i?-v+n*(E/i):E>=l-i?v-n*((l-E)/i):-v+n},p=new D,x=new D,_=new D;for(let b=0;b<u.count;b++){p.set(m(u.getX(b),a),m(u.getY(b),o),m(u.getZ(b),c));let v=new D(f.getX(b),f.getY(b),f.getZ(b));v.x&&(p.x=Math.sign(v.x)*a),v.y&&(p.y=Math.sign(v.y)*o),v.z&&(p.z=Math.sign(v.z)*c),x.set(Math.max(-a+n,Math.min(a-n,p.x)),Math.max(-o+n,Math.min(o-n,p.y)),Math.max(-c+n,Math.min(c-n,p.z))),_.subVectors(p,x),_.lengthSq()<1e-12?_.copy(v):_.normalize(),p.copy(x).addScaledVector(_,n),u.setXYZ(b,p.x,p.y,p.z),f.setXYZ(b,_.x,_.y,_.z);let E,P;v.x?(E=p.z*-Math.sign(v.x),P=p.y):v.y?(E=p.x,P=p.z*-Math.sign(v.y)):(E=p.x*Math.sign(v.z),P=p.y),d.setXY(b,E*g+.5,P*g+.5)}return h.computeBoundingSphere(),h}function Ff(r=1,e=1,t=.04,n,i={}){var Y,fe;n=Math.min(n==null?Math.min(r,e)*.2:n,r/2-1e-4,e/2-1e-4);let s=i.curve||0,a=i.curveY||0,o=Math.max(1,(Y=i.cornerSeg)!=null?Y:3),c=Math.max(1,(fe=i.seg)!=null?fe:s||a?4:1),l=j=>{let K=[],J=j/2;for(let te=0;te<=o;te++)K.push(-J+n*(te/o));for(let te=1;te<c;te++)K.push(-J+n+(j-2*n)*(te/c));for(let te=o;te>=0;te--)K.push(J-n*(te/o));return K},h=l(r),u=l(e),f=h.length,d=u.length,g=1/Math.max(r,e),m=(j,K)=>{let J=r/2-n,te=e/2-n,ue=Math.abs(j),le=Math.abs(K);if(ue>J+1e-9&&le>te+1e-9){let ee=ue-J,ie=le-te,Me=Math.max(ee,ie),Ve=Math.hypot(ee,ie),ne=Me/Ve;return[Math.sign(j)*(J+ee*ne),Math.sign(K)*(te+ie*ne)]}return[j,K]},p=(j,K,J,te)=>{let ue=j,le=K,ee=J;if(s){let ie=ue/s,Me=s+ee;ue=Me*Math.sin(ie),ee=Me*Math.cos(ie)-s}if(a){let ie=le/a,Me=a+ee;le=Me*Math.sin(ie),ee=Me*Math.cos(ie)-a}te.push(ue,le,ee)},x=[],_=[],b=[],v=t/2,E=i.back===!1?[1]:[1,-1];for(let j of E){let K=x.length/3;for(let J=0;J<d;J++)for(let te=0;te<f;te++){let[ue,le]=m(h[te],u[J]);p(ue,le,j*v,x),_.push((j>0?ue:-ue)*g+.5,le*g+.5)}for(let J=0;J<d-1;J++)for(let te=0;te<f-1;te++){let ue=K+J*f+te,le=ue+1,ee=ue+f,ie=ee+1;j>0?b.push(ue,le,ie,ue,ie,ee):b.push(ue,ie,le,ue,ee,ie)}}let P=[];for(let j=0;j<f;j++)P.push([j,0]);for(let j=1;j<d;j++)P.push([f-1,j]);for(let j=f-2;j>=0;j--)P.push([j,d-1]);for(let j=d-2;j>0;j--)P.push([0,j]);let V=x.length/3,T=0,R=null;for(let j=0;j<=P.length;j++){let[K,J]=P[j%P.length],[te,ue]=m(h[K],u[J]);R&&(T+=Math.hypot(te-R[0],ue-R[1])),R=[te,ue],p(te,ue,v,x),p(te,ue,-v,x),_.push(T*g,0,T*g,t*g)}for(let j=0;j<P.length;j++){let K=V+j*2,J=K+1,te=K+2,ue=K+3;b.push(K,J,ue,K,ue,te)}return s1(x,null,_,b)}var Vo=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},r1=new cs(-1,1,1,-1,0,1),ch=new Rt;ch.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3));ch.setAttribute("uv",new ct([0,2,0,0,2,0],2));var Nr=class{constructor(e){this._mesh=new Tt(ch,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Of={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Nf={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _s=class r extends Vo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new zn(s,a);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new zn(s,a);d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=Nf;this.highPassUniforms=Dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new Oe(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Of;this.copyUniforms=Dr.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Mn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new Nr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new Oe(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Mn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Mn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_s.BlurDirectionX=new Oe(1,0);_s.BlurDirectionY=new Oe(0,1);var Wo={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

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
	`};var Zn=Object.freeze({Ultra:Object.freeze({name:"Ultra",pixelRatio:3,post:!0,msaa:8,fxaa:!1,target:"half",shadowMapSize:4096,shadowType:Lr,propShadows:!0,bloom:!0,bloomStrength:1.45,bloomScale:1,maxLights:8,textureSize:512}),High:Object.freeze({name:"High",pixelRatio:2,post:!0,msaa:4,fxaa:!1,target:"half",shadowMapSize:2048,shadowType:Lr,propShadows:!0,bloom:!0,bloomStrength:1.4,bloomScale:1,maxLights:6,textureSize:512}),Medium:Object.freeze({name:"Medium",pixelRatio:1.5,post:!0,msaa:2,fxaa:!1,target:"byte",shadowMapSize:1024,shadowType:wa,propShadows:!1,bloom:!0,bloomStrength:1.25,bloomScale:.5,maxLights:4,textureSize:256}),Low:Object.freeze({name:"Low",pixelRatio:1.25,post:!1,msaa:0,fxaa:!1,target:"byte",shadowMapSize:512,shadowType:wa,propShadows:!1,bloom:!1,bloomStrength:0,bloomScale:.5,maxLights:3,textureSize:128})}),qo=["Ultra","High","Medium","Low"],a1=Object.freeze({exposure:null,bloomThreshold:.88,bloomKnee:.08,bloomRadius:.25,bloomStrength:null,lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1.06,vignette:.2,dither:1}),$1=Object.freeze({lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1,vignette:0}),o1=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Bf=`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`,c1=`
uniform sampler2D tDiffuse;
uniform vec2 texel;
uniform float luminosityThreshold;
uniform float smoothWidth;
varying vec2 vUv;
${Bf}
vec3 tap(vec2 o) { return clamp(texture2D(tDiffuse, vUv + o * texel).rgb, 0.0, 1.0); }
void main() {
  vec3 c = 0.25 * (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)));
  float br = max(c.r, max(c.g, c.b));
  float k = max(smoothWidth, 1e-4);
  float soft = clamp(br - luminosityThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k);
  float w = max(soft, br - luminosityThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(srgbToLinear(c) * w, 1.0);
}`,l1=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform vec3 lift, gammaInv, gain;
uniform float saturation, vignette, dither;
varying vec2 vUv;
${Bf}
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
}`;function h1(r){return!!(r.capabilities&&r.capabilities.isWebGL2)}function u1(r){let e=r.extensions;return e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")}function f1(r,e,t,n,i){let s=new zn(e,t,{type:i?Ti:di,format:kn,samples:n,depthBuffer:!0,stencilBuffer:!1,encoding:xt});return s.isXRRenderTarget=!0,s.texture.internalFormat=i?"RGBA16F":"RGBA8",s.texture.name="Sigil.scene",s.texture.generateMipmaps=!1,r.properties.get(s).__ignoreDepthValues=!0,s}function Uf(r,e,t,n={}){let i=h1(r),s=r.getPixelRatio(),a=Object.assign({},a1,n.params||{});a.exposure==null&&(a.exposure=r.toneMappingExposure);let o=n.applyShadows!==!1,c=Zn[n.quality]||Zn.High,l=1,h=1,u=1,f=1,d=null,g=null,m=null,p=!1,x=new Ie,_=new Ie,b=new Ie,v=new Mn({name:"SigilFinal",uniforms:{tScene:{value:null},tBloom:{value:null},lift:{value:new D},gammaInv:{value:new D(1,1,1)},gain:{value:new D(1,1,1)},saturation:{value:1},vignette:{value:0},dither:{value:1}},defines:{},vertexShader:o1,fragmentShader:l1,depthTest:!1,depthWrite:!1,toneMapped:!1}),E=new Mn({name:"SigilFXAA",uniforms:Dr.clone(Wo.uniforms),vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,depthTest:!1,depthWrite:!1,toneMapped:!1}),P=new Nr(v);function V(le,ee){le in v.defines!==ee&&(ee?v.defines[le]="":delete v.defines[le],v.needsUpdate=!0)}function T(){let le=new _s(new Oe(256,256),c.bloomStrength,a.bloomRadius,a.bloomThreshold);for(let ee of[le.renderTargetBright,...le.renderTargetsHorizontal,...le.renderTargetsVertical])ee.texture.type=Ti;return le.highPassUniforms.texel={value:new Oe},le.materialHighPassFilter.fragmentShader=c1,le.materialHighPassFilter.needsUpdate=!0,le}function R(){d&&d.dispose(),g&&g.dispose(),m&&m.dispose(),d=g=m=null}function Y(){if(R(),p=i&&c.post,!p)return;let le=Math.min(c.msaa|0,r.capabilities.maxSamples||0);d=f1(r,u,f,le,c.target==="half"&&u1(r)),(c.fxaa||le===0)&&(g=new zn(u,f,{depthBuffer:!1,stencilBuffer:!1}),g.texture.generateMipmaps=!1),c.bloom&&(m=T()),V("USE_BLOOM",!!m),fe()}function fe(){d&&d.setSize(u,f),g&&(g.setSize(u,f),E.uniforms.resolution.value.set(1/u,1/f)),m&&(m.setSize(Math.max(2,Math.round(u*c.bloomScale)),Math.max(2,Math.round(f*c.bloomScale))),m.highPassUniforms.texel.value.set(.5/u,.5/f))}function j(le,ee){l=Math.max(1,le|0),h=Math.max(1,ee|0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,c.pixelRatio)),r.setSize(l,h,!1);let ie=r.getDrawingBufferSize(new Oe);u=ie.x,f=ie.y,fe()}function K(le){let ee=Zn[le];ee&&(c=ee,o&&zf(r,e,ee),Y(),j(l,h))}function J(le){let ee=m,ie=ee.fsQuad;ee.highPassUniforms.tDiffuse.value=le,ee.highPassUniforms.luminosityThreshold.value=a.bloomThreshold,ee.highPassUniforms.smoothWidth.value=a.bloomKnee,ie.material=ee.materialHighPassFilter,r.setRenderTarget(ee.renderTargetBright),r.clear(),ie.render(r);let Me=ee.renderTargetBright;for(let ne=0;ne<ee.nMips;ne++){let ge=ee.separableBlurMaterials[ne];ie.material=ge,ge.uniforms.colorTexture.value=Me.texture,ge.uniforms.direction.value=_s.BlurDirectionX,r.setRenderTarget(ee.renderTargetsHorizontal[ne]),r.clear(),ie.render(r),ge.uniforms.colorTexture.value=ee.renderTargetsHorizontal[ne].texture,ge.uniforms.direction.value=_s.BlurDirectionY,r.setRenderTarget(ee.renderTargetsVertical[ne]),r.clear(),ie.render(r),Me=ee.renderTargetsVertical[ne]}let Ve=ee.compositeMaterial;return Ve.uniforms.bloomStrength.value=a.bloomStrength==null?c.bloomStrength:a.bloomStrength,Ve.uniforms.bloomRadius.value=a.bloomRadius,ie.material=Ve,r.setRenderTarget(ee.renderTargetsHorizontal[0]),r.clear(),ie.render(r),ee.renderTargetsHorizontal[0].texture}function te(){if(r.toneMappingExposure=a.exposure,!p){r.render(e,t);return}let le=e.background,ee=!!(le&&le.isColor);r.getClearColor(x);let ie=r.getClearAlpha();ee?(_.copy(le).convertLinearToSRGB(),e.background=null,r.setClearColor(_,1)):(_.copy(x).convertLinearToSRGB(),r.setClearColor(_,ie));let Me=e.fog;Me&&(b.copy(Me.color),Me.color.convertLinearToSRGB()),r.setRenderTarget(d),r.render(e,t),Me&&Me.color.copy(b),ee&&(e.background=le),r.setClearColor(x,ie);let Ve=r.autoClear;r.autoClear=!1;let ne=!!m&&(a.bloomStrength==null?c.bloomStrength:a.bloomStrength)>0;V("USE_BLOOM",ne),ne&&(v.uniforms.tBloom.value=J(d.texture));let ge=v.uniforms,De=a.gamma;ge.tScene.value=d.texture,ge.lift.value.fromArray(a.lift),ge.gammaInv.value.set(1/Math.max(.001,De[0]),1/Math.max(.001,De[1]),1/Math.max(.001,De[2])),ge.gain.value.fromArray(a.gain),ge.saturation.value=a.saturation,ge.vignette.value=a.vignette,ge.dither.value=a.dither;let He=a.vignette===0&&a.saturation===1&&[0,1,2].every(de=>a.lift[de]===0&&De[de]===1&&a.gain[de]===1);V("USE_GRADE",!He),P.material=v,g&&(r.setRenderTarget(g),P.render(r),E.uniforms.tDiffuse.value=g.texture,P.material=E),r.setRenderTarget(null),P.render(r),r.autoClear=Ve}function ue(){R(),v.dispose(),E.dispose(),P.dispose(),r.setPixelRatio(s)}o&&zf(r,e,c),Y();{let le=r.getSize(new Oe);j(le.x,le.y)}return{render:te,setSize:j,setQuality:K,dispose:ue,params:a,get quality(){return c.name},get preset(){return c},get active(){return p},get supported(){return i},info:()=>({quality:c.name,active:p,width:u,height:f,samples:d?d.samples:0,target:d?d.texture.type===Ti?"half":"byte":"canvas",bloom:!!m,fxaa:!!g})}}function zf(r,e,t){if(typeof t=="string"&&(t=Zn[t]),!t||!e)return;let n=r.shadowMap.type!==t.shadowType;r.shadowMap.type=t.shadowType,e.traverse(i=>{if(i.isLight&&i.castShadow&&i.shadow){let s=i.isPointLight?Math.min(t.shadowMapSize,1024):t.shadowMapSize;i.shadow.mapSize.x!==s&&(i.shadow.mapSize.set(s,s),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null))}if(i.isMesh&&i.userData&&i.userData.prop===!0&&(i.castShadow=!!t.propShadows),n&&i.material)for(let s of Array.isArray(i.material)?i.material:[i.material])s.needsUpdate=!0}),r.shadowMap.needsUpdate=!0}var jo;function d1(r){if(r&&r.getContext&&(r=r.getContext()),!r&&jo!==void 0)return jo;let e="",t=null;try{if(!r&&typeof document!="undefined"&&(t=document.createElement("canvas"),r=t.getContext("webgl2",{powerPreference:"high-performance"})||t.getContext("webgl")),r){let n=r.getExtension("WEBGL_debug_renderer_info");if(e=n&&r.getParameter(n.UNMASKED_RENDERER_WEBGL)||r.getParameter(r.RENDERER)||"",t){let i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}}}catch{e=""}return e=String(e),(t||jo===void 0)&&(jo=e),e}function p1(r){if(!r)return null;if(/swiftshader|llvmpipe|softpipe|software|microsoft basic/i.test(r))return"Low";let e=r.match(/Adreno\D{0,8}(\d{3})/i);if(e){let t=+e[1];return t>=730?"Ultra":t>=700||t>=630?"High":t>=615||t>=540?"Medium":"Low"}if(e=r.match(/Mali-?G(\d{2,3})/i),e){let t=e[1];if(t.length===3)return+t>=715?"Ultra":+t[0]>=7||+t>=610&&+t<615?"High":"Medium";let n=+t;return n>=76?"High":n>=71||n>=57?"Medium":"Low"}return/Immortalis|Xclipse\s*9[4-9]\d|Xclipse\s*\d{4}/i.test(r)?"Ultra":/Xclipse|Apple|PowerVR.*(BXM|DXT|CXT)/i.test(r)?"High":/Mali-T|Mali-4|PowerVR|Vivante|VideoCore|Tegra 3/i.test(r)?"Low":/NVIDIA|GeForce|Radeon|AMD|Intel.*(Iris|Arc|Xe)/i.test(r)?"High":/Intel/i.test(r)?"Medium":null}function Xo(r){let e=typeof navigator!="undefined"?navigator:{},t=e.hardwareConcurrency||4,n=e.deviceMemory,i=typeof screen!="undefined"?screen:{width:1280,height:720},s=typeof window!="undefined"&&window.devicePixelRatio||1,a=i.width*i.height*s*s,o=p1(d1(r));return o||(o=t>=8&&(n==null||n>=6)?"High":t>=6&&(n==null||n>=4)?"Medium":"Low"),n!=null&&n<=2?o="Low":n!=null&&n<=3&&(o==="High"||o==="Ultra")?o="Medium":n!=null&&n<8&&o==="Ultra"&&(o="High"),t<=4&&(o==="High"||o==="Ultra")&&(o="Medium"),a>45e5&&o==="Medium"&&(o="Low"),o}var Gf="sigilbound.gfx.v1";function m1(){try{let r=JSON.parse(localStorage.getItem(Gf)||"null");return r&&typeof r=="object"?r:null}catch{return null}}function g1(r){try{localStorage.setItem(Gf,JSON.stringify(r))}catch{}}function Hf(r={}){let{onChange:e,sampleSeconds:t=3,minFps:n=50,upFps:i=58,warmupWindows:s=1,upWindows:a=4}=r,o=m1(),c=o&&Zn[o.forced]?o.forced:null,l=o&&o.v===2&&Zn[o.tier]?o.tier:null,h=c||l||(Zn[r.initial]?r.initial:null)||Xo(),u=!c,f=-1,d=0,g=0,m=s,p=0,x=0,_=[],b=!1,v=0,E=()=>g1({v:2,tier:h,forced:c,t:Date.now()});function P(j){d=j,g=0,_=[]}function V(j,K){!Zn[j]||j===h||(h=j,m=s,p=0,E(),e&&e(j,Zn[j],K))}function T(){if(_.length<20)return!1;let j=_.slice().sort((te,ue)=>te-ue),K=j[Math.floor(j.length/2)];return j[Math.floor(j.length*.9)]<=K*1.25}function R(j){x=j;let K=T();if(!u)return;if(m>0){m--;return}let J=qo.indexOf(h);if(j<n){if(p=0,K)return;J<qo.length-1&&(b=!0,V(qo[J+1],"slow"))}else j>=i&&J>0&&!b&&v<1?++p>=a&&(v++,V(qo[J-1],"fast")):p=0}function Y(j){if(j==null&&(j=performance.now()),f<0){f=j,P(j);return}let K=j-f;if(f=j,K>1e3||K<=0){P(j);return}g++,_.push(K);let J=j-d;J>=t*1e3&&(R(g*1e3/J),P(j))}function fe(j){if(j==null||j==="auto"){let J=Zn[r.initial]?r.initial:Xo();c=null,u=!0,m=s,p=0,b=!1,h=J,E(),e&&e(h,Zn[h],"auto");return}if(!Zn[j])return;let K=j!==h;c=j,u=!1,h=j,E(),K&&e&&e(j,Zn[j],"forced")}return{tick:Y,force:fe,get current(){return h},get preset(){return Zn[h]},get fps(){return x},get forced(){return c},get auto(){return u},set auto(j){u=!!j,u&&(c=null,E())}}}var Vf=[["#1f2b46","#c9805a","#2a2a22","#16141f","#ffc068"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22","#e8f4ff"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e","#ff9a4a"],["#1a2e2a","#7fa088","#23362a","#101c16","#d8ff8a"],["#28203a","#c8a870","#2c2640","#14101e","#ffcf6a"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0","#ffb0d8"],["#101a2e","#5a7ab0","#1a2440","#0c1220","#bcd8ff"],["#0e0a16","#3a2a5a","#180f26","#b080ff","#c890ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606","#ff7a30"]],Wf=["#1a0a0a","#c0401a","#24100c","#100606","#ff6a20"],Zf=[{name:"dusk forest",grass:"#4f6a2a",grass2:"#6f7432",worn:"#8a6844",hill:"#41582a",rock:"#7d746a",bark:"#4e3726",leaves:["#3c6a26","#557a2a","#a8702a","#b8522a"],tuft:"#5f7a2c",cloth:"#7a2a22",sil:"#2e2c46",motes:"leaves",moteColor:"#e08a3a"},{name:"teal shore",grass:"#c2a87e",grass2:"#b39b72",worn:"#8c7a5e",hill:"#a8956a",rock:"#6a7078",bark:"#9a8a76",leaves:["#4a6a3a","#5a7a40"],tuft:"#8f9a52",water:"#1f5f6c",cloth:"#d8d0b8",sil:"#24404e",motes:"spray",moteColor:"#e8f6ff"},{name:"red badlands",grass:"#94503a",grass2:"#ad6844",worn:"#c09070",hill:"#8a4632",rock:"#a0553a",bark:"#5e4636",strata:["#8a4430","#b06a46","#6e3426","#c4885a"],tuft:"#857040",cloth:"#d0a040",sil:"#44201f",motes:"dust",moteColor:"#ffc890"},{name:"green marsh",grass:"#3a5630",grass2:"#4f6236",worn:"#6e5a40",hill:"#34502e",rock:"#58605a",bark:"#433a30",leaves:["#4a5a30"],tuft:"#7a8a44",water:"#22402f",cloth:"#5a4a30",sil:"#223c36",motes:"fireflies",moteColor:"#d8ff7a"},{name:"gold ruins",grass:"#58652f",grass2:"#76763c",worn:"#8e8474",hill:"#4c5a2c",rock:"#a49a88",bark:"#5a4636",leaves:["#4c682c","#667a32"],tuft:"#6a7a34",cloth:"#7a2a4a",sil:"#36304c",motes:"sparks",moteColor:"#ffd27a",crystals:!0},{name:"blossom forest",grass:"#557636",grass2:"#748646",worn:"#977660",hill:"#4a6a34",rock:"#8a8088",bark:"#4a3036",leaves:["#e89ac0","#f0b0cc","#d880aa","#f8cade"],tuft:"#6a8a3c",cloth:"#5a3a7a",sil:"#463858",motes:"petals",moteColor:"#ffc0dc"},{name:"moonlit shore",grass:"#a39c8c",grass2:"#958e80",worn:"#77705f",hill:"#8a8474",rock:"#5c6272",bark:"#8a8478",leaves:["#3a5a4a"],tuft:"#6a7a5a",water:"#1a3658",cloth:"#c8d0e0",sil:"#1a2642",motes:"spray",moteColor:"#cfe2ff"},{name:"amethyst badlands",grass:"#5e4e6c",grass2:"#6f5c80",worn:"#9584a6",hill:"#54466a",rock:"#5e4c70",bark:"#4a3c4e",strata:["#56466c","#6f5c86","#463a5a","#88729e"],tuft:"#6a5a7a",cloth:"#3a2a5a",sil:"#221a36",motes:"sparks",moteColor:"#c890ff",crystals:!0},{name:"glow marsh",grass:"#2c4846",grass2:"#385850",worn:"#5e586c",hill:"#284242",rock:"#4a5460",bark:"#38384a",leaves:["#2a4a4a"],tuft:"#4a7a6a",water:"#123040",cloth:"#2a3a5a",sil:"#122838",motes:"fireflies",moteColor:"#80e8ff",mushrooms:!0},{name:"burning ruins",grass:"#665834",grass2:"#7a6238",worn:"#8a7a6a",hill:"#5a4a30",rock:"#7a6e64",bark:"#4a3a2e",leaves:["#5a5a2a","#7a5a26"],tuft:"#7a6a3a",cloth:"#6a1a1a",sil:"#381410",motes:"embers",moteColor:"#ff8a3a",crystals:!0}],Qf={name:"titan caldera",grass:"#3a3436",grass2:"#463e3e",worn:"#6a625e",hill:"#332e30",rock:"#2e2a2e",bark:"#2a2222",tuft:"#3a3030",cloth:"#5a1a10",sil:"#1e0c0a",motes:"embers",moteColor:"#ff7a2a"},qf=[{a:"grass",b:"soil",hills:4.5,sil:"trees",silFar:"peaks"},{a:"sand",b:"shingle",hills:2,sil:"islands",silFar:"peaks"},{a:"cracked",b:"gravel",hills:3,sil:"mesa",silFar:"mesa"},{a:"grass",b:"mud",hills:1.6,sil:"trees",silFar:"peaks"},{a:"grass",b:"flagstone",hills:3.5,sil:"ruins",silFar:"peaks"},{a:"basalt",b:"ash",hills:4,sil:"peaks",silFar:"volcano"}],jf={ultra:{tex:1024,grid:160,tufts:2600,scatter2:700,rocks:300,props:1,motes:260,aniso:16,casters:!0,ringSeg:300},high:{tex:512,grid:120,tufts:1500,scatter2:420,rocks:190,props:1,motes:160,aniso:4,casters:!0,ringSeg:220},medium:{tex:256,grid:90,tufts:850,scatter2:240,rocks:120,props:.7,motes:90,aniso:2,casters:!0,ringSeg:160},low:{tex:128,grid:64,tufts:380,scatter2:100,rocks:60,props:.45,motes:0,aniso:1,casters:!1,ringSeg:110}};function hh(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $n(r,e,t){let n=Math.imul(r|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var uh=r=>r*r*(3-2*r),Qi=r=>r<0?0:r>1?1:r,kt=(r,e,t)=>uh(Qi((t-r)/(e-r))),Br=(r,e,t)=>r+(e-r)*t;function zi(r,e,t,n=0,i=0){let s=Math.floor(r),a=Math.floor(e),o=uh(r-s),c=uh(e-a),l=s,h=s+1,u=a,f=a+1;n&&(l=(l%n+n)%n,h=(h%n+n)%n),i&&(u=(u%i+i)%i,f=(f%i+i)%i);let d=$n(l,u,t),g=$n(h,u,t),m=$n(l,f,t),p=$n(h,f,t);return d+(g-d)*o+(m-d)*c+(d-g-m+p)*o*c}function Qn(r,e,t,n=4){let i=0,s=1,a=0,o=1;for(let c=0;c<n;c++)i+=zi(r*o,e*o,t+c*17)*s,a+=s,s*=.5,o*=2;return i/a}function Xn(r,e,t,n,i,s=4){let a=0,o=1,c=0,l=1;for(let h=0;h<s;h++)a+=zi(r*t*l,e*n*l,i+h*31,t*l,n*l)*o,c+=o,o*=.5,l*=2;return a/c}function zr(r,e,t=.85){let n=new Float32Array(r*r*2);for(let i=0;i<r;i++)for(let s=0;s<r;s++)n[(i*r+s)*2]=s+.5+($n(s,i,e)-.5)*t,n[(i*r+s)*2+1]=i+.5+($n(s,i,e+9)-.5)*t;return(i,s,a)=>{let o=i*r,c=s*r,l=Math.floor(o),h=Math.floor(c),u=9,f=9,d=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let p=l+m,x=h+g,_=(p%r+r)%r,b=(x%r+r)%r,v=(b*r+_)*2,E=n[v]+(p-_),P=n[v+1]+(x-b),V=Math.hypot(E-o,P-c);V<u?(f=u,u=V,d=b*r+_):V<f&&(f=V)}a.f1=u,a.f2=f,a.id=d}}var Xf={grass(r){return(e,t,n)=>{let i=zi(e*160,t*48,r,160,48),s=zi(e*64,t*200,r+3,64,200),a=Xn(e,t,6,6,r+5,3),o=zi(e*256,t*256,r+7,256,256),c=i*.55+s*.45;n.a=.58+.28*c+.2*a-(o>.86?.16:0)+(o<.06?.12:0),n.h=c*.6+a*.4,n.r=.92,n.g=0}},soil(r){let e=zr(22,r),t={};return(n,i,s)=>{e(n,i,t);let a=Xn(n,i,5,5,r+2,4),o=zi(n*220,i*220,r+4,220,220),c=kt(.42,.18,t.f1)*($n(t.id,1,r)>.45?1:0);s.a=.66+.22*a+.1*o+c*(.12+.12*$n(t.id,2,r)),s.h=a*.5+c*.5+o*.1,s.r=.95-c*.15,s.g=0}},sand(r){return(e,t,n)=>{let i=Xn(e,t,3,3,r,3),s=Math.sin((t+i*.35+e*.15)*Math.PI*2*18)*.5+.5,a=zi(e*256,t*256,r+2,256,256),o=Xn(e,t,4,4,r+6,3);n.a=.8+.1*s+.08*a+.06*o-(a>.93?.2:0),n.h=s*.7+a*.15+o*.15,n.r=.96,n.g=0}},shingle(r){let e=zr(26,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=kt(0,.32,t.f2-t.f1),o=$n(t.id,3,r);s.a=.5+a*(.28+.25*o),s.h=a*(.6+.4*(1-t.f1)),s.r=.55+.3*(1-a),s.g=0}},cracked(r){let e=zr(9,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=Xn(n,i,8,8,r+1,4),o=kt(.07,.015,t.f2-t.f1+(a-.5)*.03),c=$n(t.id,5,r);s.a=.72+.16*c+.12*a-o*.42,s.h=(.7+.3*a)*(1-o)+.05,s.r=.95,s.g=o}},gravel(r){let e=zr(40,r,.95),t={};return(n,i,s)=>{e(n,i,t);let a=kt(0,.25,t.f2-t.f1),o=Xn(n,i,6,6,r+2,3);s.a=.68+a*.26*$n(t.id,4,r)+o*.12,s.h=a*.7+o*.3,s.r=.93,s.g=0}},mud(r){return(e,t,n)=>{let i=Xn(e,t,4,4,r,5),s=Xn(e,t,12,12,r+3,3),a=kt(.55,.66,i);n.a=.72+.16*s-a*.22,n.h=i*.8+s*.2-a*.3,n.r=Br(.85,.28,a),n.g=0}},flagstone(r){let e=zr(6,r,.75),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=Xn(n,i,10,10,r+2,4),c=zi(n*180,i*180,r+4,180,180),l=kt(.09,.03,a),h=kt(.03,.2,a),u=$n(t.id,6,r);s.a=(.7+.2*u+.1*o-(c>.9?.1:0))*(1-l*.5),s.h=h*(.75+.25*o),s.r=.82+l*.1,s.g=0}},basalt(r){let e=zr(10,r,.4),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=Xn(n,i,8,8,r+1,4),c=kt(.08,.02,a),l=$n(t.id,8,r);s.a=.66+.16*l+.14*o-c*.4,s.h=(1-c)*(.7+.3*o),s.r=.78+.15*o,s.g=c}},ash(r){return(e,t,n)=>{let i=Xn(e,t,6,6,r,4),s=zi(e*240,t*240,r+2,240,240);n.a=.72+.18*i+.1*s,n.h=i*.7+s*.3,n.r=.97,n.g=0}}},fh=new Map;function b1(r,e,t,n){let i=r+"|"+e+"|"+t+"|"+n,s=fh.get(i);if(s)return s.refs++,s;let a=Xf[r](11),o=Xf[e](23),c={},l={},h=new Uint8Array(t*t*4),u=new Uint8Array(t*t*4),f=m=>Math.max(0,Math.min(255,Math.round(m*255)));for(let m=0;m<t;m++)for(let p=0;p<t;p++){let x=p/t,_=m/t,b=(m*t+p)*4;a(x,_,c),o(x,_,l),h[b]=f(c.a),h[b+1]=f(l.a),h[b+2]=f(Xn(x,_,3,3,77,3)),h[b+3]=f(c.g),u[b]=f(c.h),u[b+1]=f(c.r),u[b+2]=f(l.h),u[b+3]=f(l.r)}let d=(m,p)=>{let x=new _r(m,t,t,kn,di);return x.wrapS=x.wrapT=Kn,x.magFilter=Cn,x.minFilter=Si,x.generateMipmaps=!0,x.anisotropy=n,x.name=p,x.needsUpdate=!0,x},g={map:d(h,"arena-ground-map"),data:d(u,"arena-ground-data"),refs:1,key:i,bytes:t*t*4*2*1.333};return fh.set(i,g),g}function x1(r){--r.refs>0||(r.map.dispose(),r.data.dispose(),fh.delete(r.key))}var ny=new mt,Yf=new xn,Kf=new br,y1=new D,lh=new D;function v1(r,e=[0,0,0],t=1){return Kf.set(e[0],e[1],e[2]),Yf.setFromEuler(Kf),typeof t=="number"?lh.set(t,t,t):lh.set(t[0],t[1],t[2]),new mt().compose(y1.set(r[0],r[1],r[2]),Yf,lh)}function Ia(r,e,t,n=1.6){let i=r.attributes.position;for(let s=0;s<i.count;s++){let a=i.getX(s),o=i.getY(s),c=i.getZ(s),l=Qn(a*n+13.1,c*n+o*n*.7+7.7,t,2)-.5,h=1+l*e*2;i.setXYZ(s,a*h,o*(1+l*e),c*h)}return r.computeVertexNormals(),r}function _1(r){let e=0,t=0;for(let d of r)e+=d.g.attributes.position.count,t+=d.g.index?d.g.index.count:d.g.attributes.position.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2),a=new Float32Array(e*3),o=e>65535?new Uint32Array(t):new Uint16Array(t),c=new Pn,l=new D,h=0,u=0;for(let{g:d,m:g,c:m}of r){let p=d.attributes.position,x=d.attributes.normal,_=d.attributes.uv,b=d.attributes.color;c.getNormalMatrix(g);for(let v=0;v<p.count;v++){l.fromBufferAttribute(p,v).applyMatrix4(g),n.set([l.x,l.y,l.z],(h+v)*3),x&&(l.fromBufferAttribute(x,v).applyMatrix3(c).normalize(),i.set([l.x,l.y,l.z],(h+v)*3)),_&&(s[(h+v)*2]=_.getX(v),s[(h+v)*2+1]=_.getY(v));let E=b?b.getX(v):1;a[(h+v)*3]=m.r*E,a[(h+v)*3+1]=m.g*(b?b.getY(v):1),a[(h+v)*3+2]=m.b*(b?b.getZ(v):1)}if(d.index)for(let v=0;v<d.index.count;v++)o[u++]=d.index.getX(v)+h;else for(let v=0;v<p.count;v++)o[u++]=v+h;h+=p.count}let f=new Rt;return f.setAttribute("position",new wt(n,3)),f.setAttribute("normal",new wt(i,3)),f.setAttribute("uv",new wt(s,2)),f.setAttribute("color",new wt(a,3)),f.setIndex(new wt(o,1)),f.computeBoundingSphere(),f.computeBoundingBox(),f}function La(r,e,t,n,i,s=.035){let a=hh(i),o=[],c=[],l=[],h=[];for(let f=0;f<r;f++){let d=f/r*Math.PI*2+a()*.8,g=t*(.2+a()*.8),m=e*(.6+a()*.5),p=s*(.7+a()*.6),x=Math.cos(d)*g*.3,_=Math.sin(d)*g*.3,b=Math.cos(d)*(g+n*m),v=Math.sin(d)*(g+n*m),E=-Math.sin(d)*p,P=Math.cos(d)*p,V=(x+b)*.5,T=(_+v)*.5,R=[[x-E,0,_-P],[x+E,0,_+P],[V+E*.6,m*.55,T+P*.6],[V-E*.6,m*.55,T-P*.6],[b,m,v]],Y=[[0,1,2],[0,2,3],[3,2,4]];for(let fe of Y)for(let j of fe){o.push(...R[j]),c.push(Math.cos(d)*.35,.9,Math.sin(d)*.35);let K=R[j][1]/m;l.push(.45+.65*K,.5+.6*K,.45+.55*K),h.push(0,K)}}let u=new Rt;return u.setAttribute("position",new ct(o,3)),u.setAttribute("normal",new ct(c,3)),u.setAttribute("color",new ct(l,3)),u.setAttribute("uv",new ct(h,2)),u}var M1=Mt.bumpmap_pars_fragment.replace("uniform float bumpScale;",`uniform float bumpScale;
	float sbH( vec2 uv ) { vec4 t = texture2D( bumpMap, uv ); return mix( t.x, t.z, vSb.x ); }`).replace(/texture2D\( bumpMap, (vUv[^)]*)\)\.x/g,"sbH( $1 )");function w1(r,e,t){let n=new Zt({color:16777215,vertexColors:!0,roughness:1,metalness:0,map:r.map,roughnessMap:r.data,bumpMap:r.data,bumpScale:.035});return n.onBeforeCompile=i=>{i.uniforms.uGlow={value:t},i.uniforms.uTime=e.uTime,i.vertexShader=`attribute vec2 aSb;
varying vec2 vSb;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSb = aSb;`),i.fragmentShader=`varying vec2 vSb;
uniform vec3 uGlow;
uniform float uTime;
`+i.fragmentShader.replace("#include <bumpmap_pars_fragment>",M1).replace("#include <map_fragment>",`
        vec4 sbT = texture2D( map, vUv );
        float sbM = texture2D( map, vUv * 0.0917 + vec2( 0.31, 0.17 ) ).b;
        diffuseColor.rgb *= mix( sbT.r, sbT.g, vSb.x ) * ( 0.78 + 0.44 * sbM );`).replace("#include <roughnessmap_fragment>",`
        float roughnessFactor = roughness;
        vec4 texelRoughness = texture2D( roughnessMap, vUv );
        roughnessFactor *= mix( texelRoughness.g, texelRoughness.a, vSb.x );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uGlow * sbT.a * vSb.y * ( 0.75 + 0.25 * sin( uTime * 1.7 + vUv.x * 3.0 + vUv.y * 2.0 ) );`)},n.customProgramCacheKey=()=>"sb-ground",n}var S1=Mt.normal_fragment_begin.replace("normal = normal * faceDirection;","");function Da(r,e,t,n){return r.onBeforeCompile=i=>{i.uniforms.uTime=e.uTime,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+n),r.side===cn&&t!=="cloth"&&(i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",S1))},r.customProgramCacheKey=()=>"sb-wind-"+t,r}var T1=`
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
}`,A1=`
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
}`;function Jf(r,e){var t;return new Mn({uniforms:{uTime:r.uTime,uScale:r.uScale,uSway:{value:e.sway||0},uFlicker:{value:e.flicker||0},uFall:{value:e.fall||0},uDrift:{value:new D().fromArray(e.drift||[0,0,0])},uBox:{value:new D().fromArray(e.box||[0,0,0])},uCenter:{value:new D().fromArray(e.center||[0,0,0])},uOpacity:{value:(t=e.opacity)!=null?t:1},uHard:{value:e.hard||0}},vertexShader:T1,fragmentShader:A1,transparent:!0,depthWrite:!1,blending:e.additive===!1?os:Li})}function $f(r,e={}){let t=((e.chapter|0)%10+10)%10,n=!!e.titan,i=n?5:t%5,s=qf[i],a=jf[e.quality]||jf.high,o=(e.palette&&e.palette.length>=4?e.palette:n?Wf:Vf[t]).slice();o[4]||(o[4]=(n?Wf:Vf[t])[4]);let c=n?Qf:Zf[t],l=y=>new Ie(y),h=.42,u=.55,f=(y,M)=>new Ie(y).multiplyScalar(M),d={skyTop:l(o[0]),horizon:l(o[1]),accent:l(o[4]),grass:f(c.grass,h),grass2:f(c.grass2,h),worn:f(c.worn,h*.9),hill:f(c.hill,h),rock:f(c.rock,u),bark:f(c.bark,u),tuft:f(c.tuft,h*1.1),cloth:f(c.cloth,u),sil:l(c.sil)};d.fog=d.horizon.clone().lerp(d.skyTop,.45).multiplyScalar(.85);let g=n?1337:101+t*7,m=hh(g),p=(y,M)=>y+(M-y)*m(),x=new Xt;x.name="arena",r.add(x);let _={geos:new Set,mats:new Set,texs:new Set},b=y=>y&&(y.isBufferGeometry?_.geos.add(y):y.isMaterial?y.userData.shared||_.mats.add(y):y.isTexture&&_.texs.add(y),y),v=0,E={uTime:{value:0},uScale:{value:800}},P=[],V=()=>{if(!e.renderer)return 1688;let y=new Oe;return e.renderer.getDrawingBufferSize(y),y.y};E.uScale.value=V()*.5*1.07;let T=s===qf[1]?-.12:i===3?-.1:null,R=n?-.25:null,Y=[[.6,14],[.4,5],[0,-.5],[-.8,-6.5],[-2.6,-13],[-1.2,-21],[2.6,-30],[4.5,-42]],fe=(y,M)=>{let A=1e9;for(let L=0;L<Y.length-1;L++){let[Q,N]=Y[L],[X,Z]=Y[L+1],oe=X-Q,ve=Z-N,Te=Qi(((y-Q)*oe+(M-N)*ve)/(oe*oe+ve*ve)),$e=Math.hypot(y-Q-oe*Te,M-N-ve*Te);$e<A&&(A=$e)}return A},j=(y,M)=>Math.hypot(y/4.8,(M+.6)/4.5),K=(y,M)=>Math.hypot(y/6.8,(M+1.2)/6.8),J=(y,M)=>{let A=kt(1,2.3,K(y,M)),L=(Qn(y*.07,M*.07,g+1,3)-.5)*1.4*A,Q=kt(-9,-38,M),N=kt(9,26,Math.abs(y));if(L+=s.hills*Math.max(Q,N*.85)*(.35+.9*Qn(y*.035+3,M*.035,g+2,3))*A,i===1){let Z=-11-y*.3+(Qn(y*.08,M*.08,g+3,3)-.5)*6,oe=kt(Z+1.5,Z-2.5,M)*A;L=Br(L,-1.6,oe)}else if(i===3){let Z=Qn(y*.09+5,M*.09,g+4,3),oe=kt(.5,.6,Z)*kt(1.05,1.5,K(y,M));L=Br(L,-.9,oe)}else if(n){let Z=-14+Math.sin(y*.18)*2.2+(Qn(y*.1,3,g+5,2)-.5)*2,oe=kt(2.4,1.2,Math.abs(M-Z))*kt(.9,1.4,K(y,M)),ve=kt(.62,.7,Qn(y*.08+9,M*.08,g+6,3))*kt(1.3,1.8,K(y,M));L=Br(L,-1.4,Math.max(oe,ve))}let X=fe(y,M);return L=Br(L,Math.min(L,.15+L*.2),kt(2.5,.8,X)*A),L},te=(y,M)=>{let A=Qn(y*.6,M*.6,g+7,3),L=kt(1.08,.78,j(y,M)+(A-.5)*.35),Q=.85+(Qn(y*.2,M*.2,g+8,2)-.5)*.6,N=kt(Q,Q*.45,fe(y,M)+(A-.5)*.4),X=Math.max(L*(.75+.25*A),N*.9);return X=Math.max(X,kt(.72,.8,Qn(y*.15+2,M*.15,g+9,3))*.8),Qi(X)},ue=a.grid,le=95,ee=new Float32Array((ue+1)*(ue+1)),ie=y=>le*(.22*y+.78*y*y*y),Me=y=>{let M=-1,A=1;for(let L=0;L<24;L++){let Q=(M+A)/2;ie(Q)<y?M=Q:A=Q}return(M+A)/2},Ve=(y,M)=>{let A=(Me(y)+1)/2*ue,L=(Me(M+6)+1)/2*ue,Q=Math.min(ue-1,Math.max(0,Math.floor(A))),N=Math.min(ue-1,Math.max(0,Math.floor(L))),X=Qi(A-Q),Z=Qi(L-N),oe=ue+1,ve=ee[N*oe+Q],Te=ee[N*oe+Q+1],$e=ee[(N+1)*oe+Q],St=ee[(N+1)*oe+Q+1];return X+Z<=1?ve+(Te-ve)*X+($e-ve)*Z:St+($e-St)*(1-X)+(Te-St)*(1-Z)};{let y=ue,M=(y+1)*(y+1),A=new Float32Array(M*3),L=new Float32Array(M*2),Q=new Float32Array(M*3),N=new Float32Array(M*2),X=4.2,Z=new Ie;for(let yt=0;yt<=y;yt++)for(let Be=0;Be<=y;Be++){let Ft=ie(Be/y*2-1),pt=ie(yt/y*2-1)-6,Je=yt*(y+1)+Be,Ct=J(Ft,pt),Ht=te(Ft,pt);A[Je*3]=Ft,A[Je*3+1]=Ct,A[Je*3+2]=pt,ee[Je]=Ct,L[Je*2]=Ft/X,L[Je*2+1]=-pt/X;let pn=Qn(Ft*.12,pt*.12,g+10,3),vt=Qn(Ft*.5,pt*.5,g+11,2);Z.copy(d.grass).lerp(d.grass2,kt(.35,.7,pn)),Z.lerp(d.hill,Qi(Ct/Math.max(1,s.hills))*.8),Z.multiplyScalar(.9+.2*vt),Z.lerp(d.worn,Ht);let Yt=0;if(T!=null){let Kt=kt(T+.5,T+.05,Ct);Z.multiplyScalar(1-Kt*.4),i===1&&Z.lerp(f("#e8f0f0",.55),kt(.09,0,Math.abs(Ct-T-.04))*.8)}n&&(Yt=kt(R+.9,R+.15,Ct)+kt(.9,.55,j(Ft,pt))*.3+.06,Z.lerp(new Ie("#2a1210"),kt(R+.6,R,Ct)*.6)),Q[Je*3]=Z.r,Q[Je*3+1]=Z.g,Q[Je*3+2]=Z.b,N[Je*2]=Ht,N[Je*2+1]=Yt}let oe=new Uint32Array(y*y*6),ve=0;for(let yt=0;yt<y;yt++)for(let Be=0;Be<y;Be++){let Ft=yt*(y+1)+Be,pt=Ft+1,Je=Ft+y+1,Ct=Je+1;oe[ve++]=Ft,oe[ve++]=Je,oe[ve++]=pt,oe[ve++]=pt,oe[ve++]=Je,oe[ve++]=Ct}let Te=b(new Rt);Te.setAttribute("position",new wt(A,3)),Te.setAttribute("uv",new wt(L,2)),Te.setAttribute("color",new wt(Q,3)),Te.setAttribute("aSb",new wt(N,2)),Te.setIndex(new wt(oe,1)),Te.computeVertexNormals(),Te.computeBoundingSphere();let $e=Math.min(a.aniso,e.renderer?e.renderer.capabilities.getMaxAnisotropy():a.aniso);var ne=b1(s.a,s.b,a.tex,$e);v+=ne.bytes;let St=n?new Ie("#ff5a14").multiplyScalar(2.2):new Ie(0,0,0),Gt=b(w1(ne,E,St)),Bt=new Tt(Te,Gt);Bt.receiveShadow=!0,Bt.name="arena-ground",x.add(Bt)}if(T!=null||n){let M=new Uint8Array(65536),A=(Z,oe)=>Xn(Z/128,oe/128,6,6,g+40,3)*.7+zi(Z/128*24,oe/128*24,g+41,24,24)*.3;for(let Z=0;Z<128;Z++)for(let oe=0;oe<128;oe++){let ve=(Z*128+oe)*4;if(n){let Te=Xn(oe/128,Z/128,4,4,g+42,4),$e=Xn(oe/128,Z/128,9,9,g+43,3),St=kt(.1,0,Math.abs(Te-.5))*.8+$e*.35;M[ve]=255*Qi(.55+St*.45),M[ve+1]=255*Qi(.18+St*.55),M[ve+2]=255*Qi(.05+St*.2),M[ve+3]=255}else{let Te=A(oe+1,Z)-A(oe-1,Z),$e=A(oe,Z+1)-A(oe,Z-1),St=-Te*6,Gt=-$e*6,Bt=1,yt=Math.hypot(St,Gt,Bt);M[ve]=(St/yt*.5+.5)*255,M[ve+1]=(Gt/yt*.5+.5)*255,M[ve+2]=(Bt/yt*.5+.5)*255,M[ve+3]=255}}let L=b(new _r(M,128,128,kn,di));L.wrapS=L.wrapT=Kn,L.magFilter=Cn,L.minFilter=Si,L.generateMipmaps=!0,L.repeat.set(18,18),L.needsUpdate=!0,n&&(L.encoding=xt),v+=128*128*4*1.33;let Q;if(n)Q=b(new sn({map:L,color:new Ie(1.5,1.05,.85),toneMapped:!1})),P.push(Z=>{L.offset.set(Z*.004,Z*.007)});else{let Z=f(c.water,.5);Q=b(new Zt({color:Z,roughness:.18,metalness:.2,normalMap:L,normalScale:new Oe(.3,.3),envMapIntensity:.55})),P.push(oe=>{L.offset.set(oe*.006,oe*.011)})}let N=b(new pi(190,190,1,1));N.rotateX(-Math.PI/2);let X=new Tt(N,Q);X.position.set(0,n?R:T,-6),X.receiveShadow=!n,X.name=n?"arena-lava":"arena-water",x.add(X)}{let y=a.tex>=512||a.tex>=256?512:256,M=n||c.crystals||i===3&&t===8,A=()=>{let Je=document.createElement("canvas");return Je.width=Je.height=y,Je},L=A(),Q=L.getContext("2d"),N=M?A():null,X=N&&N.getContext("2d"),Z=hh(g+99),oe=y/2,ve=y/2,Te=y*.43,$e=Je=>{Je(Q,1),X&&Je(X,0)};Q.fillStyle="#000",Q.fillRect(0,0,y,y),X&&(X.fillStyle="#000",X.fillRect(0,0,y,y)),Q.lineCap="round",Q.lineJoin="round",X&&(X.lineCap="round",X.lineJoin="round"),$e((Je,Ct)=>{Je.strokeStyle=Ct?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.9)",Je.lineWidth=y*.011,Je.beginPath(),Je.arc(oe,ve,Te,0,Math.PI*2),Je.stroke(),Je.lineWidth=y*.006,Je.beginPath(),Je.arc(oe,ve,Te*.86,0,Math.PI*2),Je.stroke(),Ct&&(Je.lineWidth=y*.004,Je.beginPath(),Je.arc(oe,ve,Te*.42,0,Math.PI*2),Je.stroke())});let St=[];for(let Je=0;Je<6;Je++){let Ct=[],Ht=2+Math.floor(Z()*3);for(let pn=0;pn<Ht;pn++)Ct.push([Z()*2-1,Z()*2-1,Z()*2-1,Z()*2-1,Z()<.3]);St.push(Ct)}let Gt=18;for(let Je=0;Je<Gt;Je++){let Ct=Je/Gt*Math.PI*2,Ht=oe+Math.cos(Ct)*Te*.93,pn=ve+Math.sin(Ct)*Te*.93,vt=y*.018,Yt=St[Je%St.length];$e((Kt,en)=>{Kt.save(),Kt.translate(Ht,pn),Kt.rotate(Ct+Math.PI/2),Kt.strokeStyle=en?"rgba(255,255,255,0.6)":"rgba(255,255,255,1)",Kt.lineWidth=y*.0045;for(let[Bn,Ei,yi,hi,Un]of Yt)Kt.beginPath(),Un?Kt.arc(Bn*vt*.5,Ei*vt*.5,vt*.5,0,Math.PI*(1+Math.abs(yi))):(Kt.moveTo(Bn*vt,Ei*vt),Kt.lineTo(yi*vt,hi*vt)),Kt.stroke();Kt.restore()})}let Bt=(Je,Ct,Ht,pn,vt,Yt)=>{let Kt=Je,en=Ct,Bn=6+Math.floor(Z()*6);for(let Ei=0;Ei<Bn;Ei++){Ht+=(Z()-.5)*.9;let yi=Kt+Math.cos(Ht)*pn/Bn,hi=en+Math.sin(Ht)*pn/Bn;$e((Un,Bi)=>{Un.strokeStyle=Bi?"rgba(255,255,255,0.75)":"rgba(255,255,255,0.8)",Un.lineWidth=Math.max(1,vt*(1-Ei/Bn)),Un.beginPath(),Un.moveTo(Kt,en),Un.lineTo(yi,hi),Un.stroke()}),Yt<2&&Z()<.18&&Bt(yi,hi,Ht+(Z()<.5?.7:-.7),pn*.45,vt*.6,Yt+1),Kt=yi,en=hi}};for(let Je=0;Je<9;Je++){let Ct=Z()*Math.PI*2,Ht=Z()<.6;Bt(oe+Math.cos(Ct)*Te,ve+Math.sin(Ct)*Te,Ct+(Ht?0:Math.PI)+(Z()-.5)*.6,y*(.08+Z()*.12),y*.008,0)}{let Je=Q.createRadialGradient(oe,ve,Te*.7,oe,ve,Te*1.02);Je.addColorStop(0,"rgba(255,255,255,0)"),Je.addColorStop(.88,"rgba(255,255,255,0.08)"),Je.addColorStop(1,"rgba(255,255,255,0)"),Q.fillStyle=Je,Q.fillRect(0,0,y,y)}let yt=b(new mi(L));yt.anisotropy=Math.min(4,a.aniso),v+=y*y*4*1.33;let Be=b(new Zt({color:n?new Ie("#120806"):d.worn.clone().multiplyScalar(.28),roughness:.95,metalness:0,alphaMap:yt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));if(N){let Je=b(new mi(N));Je.encoding=xt,v+=y*y*4*1.33,Be.emissiveMap=Je,Be.emissive=d.accent.clone(),Be.emissiveIntensity=n?3:2.2,P.push(Ct=>{Be.emissiveIntensity=(n?2.8:2)+Math.sin(Ct*1.6)*.4})}let Ft=b(new pi(1,1));Ft.rotateX(-Math.PI/2);let pt=new Tt(Ft,Be);pt.scale.set(10.4,1,9.8),pt.position.set(0,.02,-.6),pt.receiveShadow=!0,pt.renderOrder=1,pt.name="arena-decal",x.add(pt)}let ge=Pa("stone",{size:a.tex>=512?256:128,repeat:1}),De=Pa("wood",{size:a.tex>=512?256:128}),He=Pa("cloth",{size:128}),de={stone:b(new Zt({color:16777215,vertexColors:!0,map:ge.map,roughnessMap:ge.roughnessMap,bumpMap:ge.bumpMap,bumpScale:.03,roughness:1,flatShading:!0,envMapIntensity:.3})),bark:b(new Zt({color:16777215,vertexColors:!0,map:De.map,roughnessMap:De.roughnessMap,bumpMap:De.bumpMap,bumpScale:.02,roughness:1,envMapIntensity:.3})),leaf:b(Da(new Zt({color:16777215,vertexColors:!0,roughness:.85,flatShading:!0,envMapIntensity:.4}),E,"leaf","transformed.x += sin( uTime * 1.3 + position.x * 0.35 + position.z * 0.2 ) * 0.04 * max( position.y - 1.5, 0.0 );")),cloth:b(Da(new Zt({color:16777215,vertexColors:!0,map:He.map,roughness:.95,side:cn,envMapIntensity:.3}),E,"cloth","transformed.z += sin( uTime * 2.6 - uv.y * 5.0 + position.x * 0.7 ) * 0.09 * ( 1.0 - uv.y );")),metal:b(new Zt({color:16777215,vertexColors:!0,roughness:.45,metalness:.8,envMapIntensity:1})),crystal:b(new Zt({color:d.accent.clone().multiplyScalar(.25),emissive:d.accent,emissiveIntensity:2.5,roughness:.2,metalness:.1,flatShading:!0,envMapIntensity:1.2})),glow:b(new sn({vertexColors:!0,color:new Ie(2.2,2.2,2.2),toneMapped:!1}))};(c.crystals||c.mushrooms)&&P.push(y=>{de.crystal.emissiveIntensity=2.5+Math.sin(y*1.9)*.4});let ht={},nt=new Set,Ye=y=>(nt.add(y),y),Ge=y=>y?"s":0,je=(y,M,A,L,Q,N,X)=>{let Z=y+"|"+(X==="s"?"s":X?1:0);(ht[Z]||(ht[Z]=[])).push({g:M,m:v1(A,L,Q),c:N.isColor?N:l(N)})},Ze=(y,M=.12)=>y.clone().multiplyScalar(1-M+m()*M*2),Ne={cyl6:Ye(new In(.5,.5,1,6,1)),cyl8:Ye(new In(.5,.5,1,8,1)),trunk:Ye(new In(.32,.5,1,7,2)),cone:Ye(new Sr(.5,1,7,1)),blob:Ye(Ia(new Us(1,1),.18,g+3,1.2)),blob2:Ye(Ia(new Us(1,1),.22,g+5,1.6)),boulder:Ye(Ia(new Us(1,1),.25,g+7,1.1)),box:Ye(new Ai(1,1,1)),col:Ye(new In(.3,.34,1,10,1)),oct:Ye(new Gs(.5,0)),hex:Ye(new In(.5,.5,1,6,1)),rockCyl:Ye(Ia(new In(.5,.56,1,9,3),.12,g+9,2.2)),banner:Ye(new pi(.7,1.5,3,6)),bowl:Ye(new In(.42,.22,.28,10,1,!0)),cap:Ye(new ki(.5,8,4,0,Math.PI*2,0,Math.PI/2))};Ne.banner.translate(0,-.75,0);let Qt=[],fn=(y,M,A,L,Q)=>Qt.push({p:[y,M,A],c:L.isColor?L:l(L),s:Q}),rn=(y,M,A=0)=>!(Math.abs(y)<4.5+A&&M>-7-A&&M<4.5+A)&&fe(y,M)>1.3+A*.5,ln=[],dt=(y,M,A,L,Q,N=0,X=40)=>{for(let Z=0;Z<X;Z++){let oe=p(y,M),ve=p(A,L);if(rn(oe,ve,N)&&!(T!=null&&Ve(oe,ve)<T+.05&&i!==1)&&!(R!=null&&Ve(oe,ve)<0)&&!ln.some(Te=>Math.hypot(Te[0]-oe,Te[1]-ve)<Math.max(Q,Te[2])))return ln.push([oe,ve,Q]),[oe,Ve(oe,ve),ve]}return null},ut=y=>Math.max(1,Math.round(y*a.props)),Nt=(y,M,A,L,Q=1)=>{for(let N of[-1,1])for(let X=0;X<M;X++){let Z=dt(N*4.8,N*7.5,-8.5,-1,2.4*Q);Z&&y(Z,!0,1)}for(let N=0;N<A;N++){let X=dt(-10,10,-15,-8.2,2.6*Q);X&&y(X,X[2]>-13,.95)}for(let N=0;N<ut(L);N++){let X=dt(-28,28,-42,-14,3*Q);X&&y(X,!1,1.2)}},Ot=([y,M,A],L,Q=1)=>{let N=p(.85,1.35)*Q,X=[p(-.08,.08),0,p(-.08,.08)];je("bark",Ne.trunk,[y,M+1.3*N,A],X,[.42*N,2.6*N,.42*N],Ze(d.bark),L);let Z=c.leaves||["#4a6a30"],oe=3+Math.floor(m()*2);for(let ve=0;ve<oe;ve++){let Te=m()*6.28,$e=ve===0?0:p(.6,1)*N;je("leaf",ve%2?Ne.blob2:Ne.blob,[y+Math.cos(Te)*$e,M+(ve===0?3.3:p(2.5,3.2))*N,A+Math.sin(Te)*$e*.8],[m()*3,m()*3,0],[p(1,1.35)*N,p(.8,1)*N,p(1,1.35)*N],Ze(f(Z[Math.floor(m()*Z.length)],u),.1),L)}},U=([y,M,A],L,Q=1)=>{let N=p(.9,1.5)*Q;je("bark",Ne.trunk,[y,M+.8*N,A],[0,0,0],[.3*N,1.6*N,.3*N],Ze(d.bark),L);let X=Ze(f((c.leaves||["#3a5a2a"])[0],u*.75),.1);for(let Z=0;Z<3;Z++)je("leaf",Ne.cone,[y,M+(1.5+Z*1.05)*N,A],[0,m()*3,0],[(2.2-Z*.55)*N,1.8*N,(2.2-Z*.55)*N],X,L)},I=([y,M,A],L,Q=1)=>{let N=p(.9,1.4)*Q,X=Ze(d.bark.clone().multiplyScalar(.85));je("bark",Ne.trunk,[y,M+1.2*N,A],[p(-.12,.12),0,p(-.12,.12)],[.36*N,2.4*N,.36*N],X,L);for(let Z=0;Z<4;Z++){let oe=m()*6.28,ve=p(1.4,2.3)*N,Te=p(.6,1.1);je("bark",Ne.trunk,[y+Math.cos(oe)*.35*N,M+ve+.35*N,A+Math.sin(oe)*.35*N],[Math.sin(oe)*Te,0,-Math.cos(oe)*Te],[.12*N,p(1,1.6)*N,.12*N],X,L)}},xe=([y,M,A],L,Q=1,N=d.rock)=>{let X=p(.6,1.3)*Q;je("stone",Ne.boulder,[y,M+.25*X,A],[m()*3,m()*3,m()*3],[X*p(.9,1.4),X*p(.6,.9),X*p(.9,1.3)],Ze(N),Ge(L))},ke=([y,M,A],L,Q=1,N=!0)=>{let X=p(.8,1.3)*Q,Z=c.strata||[c.rock],oe=M,ve=p(1,1.6)*X,Te=3+Math.floor(m()*3);for(let $e=0;$e<Te;$e++){let St=p(.9,1.6)*X;je("stone",Ne.rockCyl,[y+p(-.1,.1),oe+St/2,A+p(-.1,.1)],[0,m()*6,0],[ve*2,St,ve*2],Ze(f(Z[$e%Z.length],u),.08),L),oe+=St*.96,ve*=p(.72,1.02)}N&&je("stone",Ne.boulder,[y,oe+.2*X,A],[m(),m()*3,m()],[ve*1.5,.5*X,ve*1.4],Ze(f(Z[Z.length-1],u),.05),L)},ze=([y,M,A],L,Q=1)=>{let N=p(1,1.6)*Q,X=c.strata||[c.rock],Z=M-.5,oe=p(3.5,6)*N;for(let ve=0;ve<3;ve++){let Te=p(1.6,3.2)*N;je("stone",Ne.rockCyl,[y,Z+Te/2,A],[0,m()*6,0],[oe*2,Te,oe*1.6],Ze(f(X[(ve+1)%X.length],u),.06),L),Z+=Te*.97,oe*=p(.8,.95)}},Xe=([y,M,A],L,Q=1,N=m()<.55)=>{let X=p(.9,1.2)*Q,Z=N?p(1.2,3.2)*X:4.4*X,oe=Ze(d.rock,.06);je("stone",Ne.box,[y,M+.2*X,A],[0,0,0],[1*X,.4*X,1*X],oe,L),je("stone",Ne.col,[y,M+.4*X+Z/2,A],[N?p(-.06,.06):0,m(),N?p(-.06,.06):0],[1.25*X,Z,1.25*X],oe,L),N?je("stone",Ne.col,[y+p(.8,1.6)*(m()<.5?-1:1),M+.35*X,A+p(-.8,.8)],[0,m()*6,Math.PI/2],[1.2*X,p(.7,1.3)*X,1.2*X],Ze(d.rock,.06),!1):je("stone",Ne.box,[y,M+.4*X+Z+.18*X,A],[0,0,0],[1.05*X,.36*X,1.05*X],oe,L)},gt=([y,M,A],L,Q=1)=>{let N=Q,X=Ze(d.rock,.05),Z=p(-.25,.25),oe=Math.cos(Z)*1.7*N,ve=-Math.sin(Z)*1.7*N;for(let Te of[-1,1])je("stone",Ne.box,[y+oe*Te,M+2*N,A+ve*Te],[0,Z,0],[.9*N,4*N,.9*N],X,L);je("stone",Ne.box,[y,M+4.3*N,A],[0,Z,p(-.04,.04)],[4.5*N,.7*N,1*N],X,L)},Ke=([y,M,A],L,Q=1)=>{let N=Q,X=d.rock,Z=p(-.4,.4),oe=4+Math.floor(m()*3);for(let ve=0;ve<oe;ve++){let Te=(ve-oe/2)*.95*N,$e=p(.8,2.6)*N*(ve===0||ve===oe-1?.6:1);je("stone",Ne.box,[y+Math.cos(Z)*Te,M+$e/2,A-Math.sin(Z)*Te],[0,Z,0],[.92*N,$e,.7*N],Ze(X,.08),L)}},we=([y,M,A],L,Q=1)=>{let N=p(.7,1.2)*Q,X=3+Math.floor(m()*4);je("stone",Ne.boulder,[y,M+.1,A],[m(),m()*3,m()],[.9*N,.4*N,.9*N],Ze(d.rock.clone().multiplyScalar(.7)),Ge(L));for(let Z=0;Z<X;Z++){let oe=m()*6.28,ve=Z===0?0:p(.3,.7),Te=(Z===0?2.2:p(.9,1.6))*N;je("crystal",Ne.oct,[y+Math.cos(oe)*.25*N,M+Te*.4,A+Math.sin(oe)*.25*N],[Math.sin(oe)*ve,m()*3,-Math.cos(oe)*ve],[.45*N,Te,.45*N],d.accent,Ge(L))}fn(y,M+1*N,A,d.accent,3.2*N)},st=([y,M,A],L)=>{je("stone",Ne.cyl8,[y,M+.5,A],[0,0,0],[.5,1,.5],Ze(d.rock),Ge(L)),je("metal",Ne.bowl,[y,M+1.12,A],[0,0,0],1,f("#6a5a48",u),Ge(L)),je("glow",Ne.cone,[y,M+1.42,A],[0,0,0],[.5,.6,.5],l(t===9||n?"#ff8a30":"#ffb050"),!1),fn(y,M+1.5,A,t===7?d.accent:l("#ff9a40"),3.4),hn.push([y,M+1.5,A])},lt=([y,M,A],L,Q=1)=>{let N=Q;je("bark",Ne.cyl6,[y,M+1.7*N,A],[0,0,0],[.09*N,3.4*N,.09*N],Ze(d.bark),Ge(L)),je("bark",Ne.cyl6,[y,M+3.25*N,A+.05],[0,0,Math.PI/2],[.06*N,.9*N,.06*N],Ze(d.bark),Ge(L)),je("cloth",Ne.banner,[y,M+3.2*N,A+.08],[0,p(-.15,.15),0],[N,N,N],Ze(d.cloth,.08),Ge(L))},et=([y,M,A],L,Q=1,N=!1)=>{let X=p(.8,1.2)*Q,Z=[p(-.12,.12),0,p(-.12,.12)];je("bark",Ne.cyl6,[y,M+.9*X,A],Z,[.18*X,2.6*X,.18*X],Ze(d.bark.clone().multiplyScalar(.8)),Ge(L)),N&&(je("glow",Ne.box,[y+.25,M+2*X,A],[0,.5,0],[.2,.28,.2],d.accent,!1),fn(y+.25,M+2*X,A,d.accent,2.6))},at=([y,M,A],L,Q=1)=>{let N=p(.8,1.3)*Q;je("bark",Ne.trunk,[y,M+.22*N,A],[Math.PI/2,0,m()*3],[.45*N,p(2.2,3.4)*N,.45*N],Ze(d.bark),Ge(L))},it=([y,M,A],L)=>je("bark",Ne.trunk,[y,M+.3,A],[0,m()*3,0],[.6,.6,.6],Ze(d.bark),Ge(L)),Et=([y,M,A],L,Q=1)=>{let N=5+Math.floor(m()*6),X=p(.8,1.3)*Q;for(let Z=0;Z<N;Z++){let oe=m()*6.28,ve=Math.sqrt(m())*1.3*X,Te=p(1.2,4.6)*X*(1-ve/(2*X)),$e=y+Math.cos(oe)*ve,St=A+Math.sin(oe)*ve,Gt=M+Te-.2,Bt=Math.min(M,Ve($e,St))-.4;je("stone",Ne.hex,[$e,(Gt+Bt)/2,St],[0,m(),0],[.75*X,Gt-Bt,.75*X],Ze(d.rock,.15),L)}},Ut=([y,M,A],L)=>{for(let Q=0;Q<3;Q++){let N=p(.4,.9),X=p(-.5,.5),Z=p(-.5,.5);je("bark",Ne.cyl6,[y+X,M+.35*N,A+Z],[0,0,0],[.12*N,.7*N,.12*N],f("#c8d8d8",u),Ge(L)),je("crystal",Ne.cap,[y+X,M+.68*N,A+Z],[0,0,0],[.9*N,.5*N,.9*N],d.accent,Ge(L))}fn(y,M+.6,A,d.accent,2.2)},hn=[];if(n){Nt((y,M,A)=>Et(y,M,A*1.15),2,3,12,1.2);for(let y=0;y<ut(16);y++){let M=dt(-24,24,-40,-7.2,1.6);M&&xe(M,!1,p(.8,2.2),d.rock)}for(let y=0;y<2;y++){let M=dt(-9,9,-12,-7,3);M&&st(M,!0)}}else if(i===0){Nt((y,M,A)=>(m()<.7?Ot:U)(y,M,A),2,4,30,1.1);for(let y=0;y<ut(8);y++){let M=dt(-14,14,-20,-7.2,1.5);M&&(y%3?xe:y%2?at:it)(M,M[2]>-12,.9)}for(let y=0;y<ut(10);y++){let M=dt(-30,30,-45,-20,4);M&&U(M,!1,1.6)}}else if(i===1){for(let y of[-1,1])for(let M=0;M<2;M++){let A=dt(y*5.2,y*10,-10,0,2.5);A&&(M?xe(A,!0,1.6):et(A,!0,1.3))}for(let y=0;y<ut(9);y++){let M=dt(-26,10,-34,-12,2);M&&et(M,!1,1.2)}for(let y=0;y<ut(6);y++){let M=dt(-30,20,-45,-16,6);M&&$(M)}for(let y=0;y<ut(8);y++){let M=dt(-14,18,-18,-7.2,1.8);M&&(y%2?at:xe)(M,M[2]>-12,1)}for(let y=0;y<ut(8);y++){let M=dt(8,30,-40,-10,3);M&&(m()<.6?U:xe)(M,!1,1.2)}}else if(i===2){Nt((y,M,A)=>ke(y,M,A),2,3,10,1.3);for(let y=0;y<ut(5);y++){let M=dt(-34,34,-48,-24,8);M&&ze(M,!1,1.2)}for(let y=0;y<ut(12);y++){let M=dt(-16,16,-24,-7.2,1.6);M&&xe(M,M[2]>-12,p(.6,1.4))}for(let y=0;y<3;y++){let M=dt(-10,10,-14,-7.5,2.5);M&&(y<2?lt(M,!0,1):I(M,!0))}if(c.crystals)for(let y=0;y<ut(6);y++){let M=dt(-14,14,-22,-7.5,2.5);M&&we(M,M[2]>-12,1.1)}}else if(i===3){Nt((y,M,A)=>I(y,M,A*1.1),2,4,18,1);for(let y=0;y<ut(6);y++){let M=dt(-12,12,-18,-7.5,2.4);M&&et(M,M[2]>-12,1,!0)}for(let y=0;y<ut(8);y++){let M=dt(-16,16,-24,-7.2,1.6);M&&(y%2?it:xe)(M,M[2]>-12,.8)}if(c.mushrooms)for(let y=0;y<ut(8);y++){let M=dt(-12,12,-20,-7.5,1.8);M&&Ut(M,!1)}for(let y=0;y<ut(10);y++){let M=dt(-30,30,-45,-22,4);M&&Ot(M,!1,1.3)}}else{for(let y of[-1,1])for(let M=0;M<3;M++){let A=-10+M*3.6+p(-.4,.4),L=y*p(5.4,6.6);rn(L,A)&&(ln.push([L,A,1.8]),Xe([L,Ve(L,A),A],!0,1,M!==1))}{let M=pe(-16);ln.push([M,-16,3]),gt([M,Ve(M,-16),-16],!1,1.1)}for(let y=0;y<ut(7);y++){let M=dt(-26,26,-38,-11,4);M&&Ke(M,!1,1.1)}for(let y=0;y<ut(8);y++){let M=dt(-26,26,-40,-11,3);M&&Xe(M,!1,1.1)}for(let y=0;y<ut(5);y++){let M=dt(-12,12,-18,-7.5,2.4);M&&we(M,M[2]>-12,1.1)}for(let y=0;y<2;y++){let M=dt(-8,8,-9.5,-6.5,3);M&&st(M,!0)}for(let y=0;y<2;y++){let M=dt(-10,10,-14,-7,3);M&&lt(M,!0,1.1)}for(let y=0;y<ut(8);y++){let M=dt(-30,30,-46,-20,4);M&&Ot(M,!1,1.2)}}function $(y){let[M,,A]=y,L=Math.min(Ve(M,A),-.6),Q=p(1.6,2.6),N=L,X=Q;for(let Z=0;Z<4;Z++){let oe=p(1.2,2.2);je("stone",Ne.rockCyl,[M+p(-.3,.3),N+oe/2,A+p(-.3,.3)],[p(-.08,.08),m()*6,p(-.08,.08)],[X*2,oe,X*1.7],Ze(d.rock,.1),!1),N+=oe*.95,X*=p(.7,.9)}}function pe(y){for(let M=0;M<Y.length-1;M++){let[A,L]=Y[M],[Q,N]=Y[M+1];if(y<=L&&y>=N)return Br(A,Q,(y-L)/(N-L))}return 0}for(let y of Object.keys(ht)){let[M,A]=y.split("|"),L=b(_1(ht[y])),Q=new Tt(L,de[M]);Q.receiveShadow=M!=="glow",Q.castShadow=(A==="1"||A==="s")&&a.casters&&M!=="glow"&&M!=="cloth",A==="s"&&(Q.userData.prop=!0),Q.name="arena-props-"+M+(A==="1"?"-near":A==="s"?"-small":""),x.add(Q)}for(let y of nt)y.dispose();let Re=()=>{let y=m(),M=6.5-44*Math.pow(y,1.25),A=3.2+(6.5-M)*.32;return[p(-A,A),M]},qe=(y,M,A)=>!(M>1.6-A&&M<2.9+A&&Math.abs(y)<2.35+A)&&!(M>-4.1-A&&M<-2.8+A&&Math.abs(y)<2.5+A)&&!(n&&Math.hypot(y,M+3.8)<2.2+A),tt=(y,M,A)=>(T==null||M>T+.04)&&(R==null||M>R+.5),ft=new nn,$t=(y,M,A,L,Q)=>{let N=new Mr(b(y),M,A),X=0;for(let Z=0;Z<A*6&&X<A;Z++){let oe=L(ft,X);oe&&(ft.updateMatrix(),N.setMatrixAt(X,ft.matrix),N.setColorAt(X,oe),X++)}return N.count=X,N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),N.receiveShadow=!0,N.name=Q,N.frustumCulled=!1,x.add(N),N};{let y=Ia(new Us(1,1),.28,g+21,1.4),M=b(new Zt({color:16777215,map:ge.map,roughnessMap:ge.roughnessMap,roughness:1,flatShading:!0,envMapIntensity:.3})),A=a.rocks;$t(y,M,A,(L,Q)=>{let N,X,Z,oe=Q/A;if(oe<.45){let Te=m()*6.28,$e=p(.85,1.25);if(m()<.6)N=Math.cos(Te)*5*$e,X=Math.sin(Te)*3.9*$e-.5;else if([N,X]=Re(),fe(N,X)>1.4)return null;Z=p(.04,.12)}else if(oe<.85){if([N,X]=Re(),Z=p(.12,.38),j(N,X)<.9)return null}else if([N,X]=Re(),Z=p(.4,.9),!rn(N,X,.3))return null;if(!qe(N,X,Z))return null;let ve=Ve(N,X);return R!=null&&ve<R+.3?null:(L.position.set(N,ve+Z*.15,X),L.rotation.set(m()*3,m()*3,m()*3),L.scale.set(Z*p(.9,1.5),Z*p(.5,.9),Z*p(.9,1.4)),Ze(d.rock,.18))},"arena-rocks")}if(!n){let y=La(i===2?9:8,i===2?.18:.22,.1,i===2?.6:.4,g+31,i===2?.014:.024),M=b(Da(new Zt({color:16777215,vertexColors:!0,roughness:.9,side:cn,envMapIntensity:.3}),E,"tuft","transformed.x += sin( uTime * 2.1 + instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.5 ) * 0.25 * position.y * position.y;"));$t(y,M,a.tufts,()=>{let[A,L]=Re(),Q=Ve(A,L);if(!tt(A,Q,L))return null;let N=te(A,L),X=Qn(A*.25,L*.25,g+33,2);if(m()<N*1.2||m()>.35+X||!qe(A,L,.2))return null;let Z=p(.6,1.2)*(i===1?1.15:1);return ft.position.set(A,Q,L),ft.rotation.set(0,m()*6.28,0),ft.scale.set(Z,Z*p(.8,1.3),Z),Ze(d.tuft,.2)},"arena-tufts")}{let y,M,A;if(i===1||i===3)y=La(9,.9,.14,.12,g+41,.018),M=b(Da(new Zt({color:16777215,vertexColors:!0,roughness:.85,side:cn}),E,"reed","transformed.x += sin( uTime * 1.6 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3 ) * 0.08 * position.y * position.y;")),A=()=>{for(let L=0;L<8;L++){let[Q,N]=Re(),X=Ve(Q,N);if(X>T-.45&&X<T+.35&&qe(Q,N,.4)&&rn(Q,N,-2.5)){let Z=p(.7,1.3);return ft.position.set(Q,X,N),ft.rotation.set(0,m()*6.28,0),ft.scale.set(Z,Z*p(.8,1.4),Z),Ze(d.tuft.clone().lerp(f("#a89a58",h),.3),.15)}}return null};else if(n)y=new Gs(.5,0),y.scale(.55,1.2,.5),M=b(new Zt({color:"#151216",roughness:.15,metalness:.3,flatShading:!0,envMapIntensity:1.4})),A=()=>{let[L,Q]=Re(),N=Ve(L,Q);if(N<R+.4||!qe(L,Q,.4)||j(L,Q)<1||Q<-8||m()<.6)return null;let X=p(.15,.4);return ft.position.set(L,N+X*.1,Q),ft.rotation.set(p(-.5,.5),m()*6,p(-.5,.5)),ft.scale.set(X,X,X),l("#ffffff")};else{let L=i===4||t===5;y=i===2?La(14,.5,.2,.9,g+43,.012):L?La(5,.22,.08,.3,g+45,.04):La(8,.55,.15,.8,g+47,.07),M=b(Da(new Zt({color:16777215,vertexColors:!0,roughness:.85,side:cn}),E,"s2","transformed.x += sin( uTime * 1.8 + instanceMatrix[3].x * 0.5 ) * 0.12 * position.y;"));let Q=L?[f(o[4],.6),f("#f4f0e0",.6),f(t===5?"#ff9ac8":"#e8d070",.6)]:null;A=()=>{let[N,X]=Re(),Z=Ve(N,X);if(!qe(N,X,.3)||te(N,X)>.4||j(N,X)<1.05)return null;let oe=p(.7,1.3);return ft.position.set(N,Z,X),ft.rotation.set(0,m()*6.28,0),ft.scale.set(oe,oe,oe),L?Q[Math.floor(m()*3)].clone():i===2?Ze(f("#6a5034",h),.2):Ze(d.tuft.clone().multiplyScalar(.8),.15)}}$t(y,M,n?Math.round(a.scatter2*.25):a.scatter2,A,"arena-scatter2")}let dn=new D(-.35,.1,-1).normalize();{let y=b(new ki(140,32,16)),M=y.attributes.position,A=new Float32Array(M.count*3),L=new Ie,Q=new D,N=d.horizon.clone().lerp(new Ie(1,1,1),.15);for(let Z=0;Z<M.count;Z++){if(Q.fromBufferAttribute(M,Z).normalize(),Q.y>=0){L.copy(N).lerp(d.skyTop,Math.pow(Math.min(1,Q.y*2.2),.55));let oe=Math.pow(Math.max(0,Q.dot(dn)),6);L.lerp(N.clone().multiplyScalar(1.3),oe*.6)}else L.copy(d.fog);A[Z*3]=L.r,A[Z*3+1]=L.g,A[Z*3+2]=L.b}y.setAttribute("color",new wt(A,3));let X=new Tt(y,b(new sn({vertexColors:!0,side:Fn,fog:!1,depthWrite:!1})));X.position.set(0,0,-4),X.renderOrder=-10,X.name="arena-sky",x.add(X)}let li=(y,M,A)=>{let L=(Q,N=4)=>Qn(Math.cos(M)*Q+50,Math.sin(M)*Q+50,A,N);switch(y){case"peaks":{let Q=1-Math.abs(L(2.2)*2-1);return 3+Math.pow(Q,2.2)*16+L(9,2)*2}case"mesa":{let Q=L(1.8),N=Math.floor(Q*4)/4;return 2+kt(.35,.5,Q)*(4+N*14)+L(14,2)*.8}case"trees":{let Q=4+L(1.5)*6,N=Math.abs((M*70%2+2)%2-1);return Q+N*2.2*(.6+L(20,2))}case"ruins":{let Q=Math.floor((M+7)*22),N=$n(Q,3,A);return 2+L(1.4)*5+(N>.82?9+N*6:N>.4?N*5:.3)}case"islands":{let Q=L(1.6);return-1+kt(.48,.62,Q)*(4+L(6,2)*5)}case"volcano":{let Q=Math.abs(Math.atan2(Math.sin(M-.15),Math.cos(M-.15))),N=Math.max(0,1-Q/.5),X=kt(.05,0,Q)*2.5,Z=1-Math.abs(L(4,3)*2-1);return 3+Math.pow(N,1.6)*20-X+Z*6}default:return 4}},zt=(y,M,A,L,Q,N)=>{let X=a.ringSeg,Z=[],oe=[],ve=new Ie,Te=[];for(let Be=0;Be<=X;Be++){let Ft=Be/X*Math.PI*2-Math.PI;Te.push(Math.max(.5,li(y,Ft,Q))*A)}let $e=(Be,Ft)=>{let pt=Be/X*Math.PI*2-Math.PI;return[Math.sin(pt)*M,Ft,-Math.cos(pt)*M-4]},St=d.sil.clone().lerp(d.fog,L),Gt=(Be,Ft,pt)=>{let Je=new D(Ft[0]-Be[0],Ft[1]-Be[1],Ft[2]-Be[2]),Ct=new D(pt[0]-Be[0],pt[1]-Be[1],pt[2]-Be[2]),Ht=Je.cross(Ct).normalize(),pn=.75+.5*Math.max(0,-Ht.dot(dn)*.6+Ht.y*.5);for(let vt of[Be,Ft,pt]){Z.push(vt[0],vt[1],vt[2]);let Yt=kt(-3,Math.max(4,vt[1])*.9+1,vt[1]);ve.copy(d.fog).lerp(St.clone().multiplyScalar(pn),.35+.65*Yt),oe.push(ve.r,ve.g,ve.b)}};for(let Be=0;Be<X;Be++){let Ft=Te[Be],pt=Te[Be+1],Je=Ft*.55,Ct=pt*.55,Ht=$e(Be,-4),pn=$e(Be+1,-4),vt=$e(Be,Je),Yt=$e(Be+1,Ct),Kt=1+.03*Math.sin(Be*2.3);vt[0]*=Kt,vt[2]=(vt[2]+4)*Kt-4,Yt[0]*=1+.03*Math.sin((Be+1)*2.3),Yt[2]=(Yt[2]+4)*(1+.03*Math.sin((Be+1)*2.3))-4;let en=$e(Be,Ft),Bn=$e(Be+1,pt);Gt(Ht,vt,pn),Gt(pn,vt,Yt),Gt(vt,en,Yt),Gt(Yt,en,Bn)}let Bt=b(new Rt);Bt.setAttribute("position",new ct(Z,3)),Bt.setAttribute("color",new ct(oe,3)),Bt.computeBoundingSphere();let yt=new Tt(Bt,ti);yt.name=N,yt.renderOrder=-5,x.add(yt)},ti=b(new sn({vertexColors:!0,fog:!1,side:cn}));zt(s.silFar,112,1.25,.55,g+61,"arena-horizon-far"),zt(s.sil,74,i===1?.8:.75,.25,g+62,"arena-horizon-mid");let Tn=(y,M,A)=>{let L=y.length,Q=new Float32Array(L*3),N=new Float32Array(L*3),X=new Float32Array(L),Z=new Float32Array(L*4);y.forEach((Te,$e)=>{Q.set(Te.p,$e*3),N.set([Te.c.r,Te.c.g,Te.c.b],$e*3),X[$e]=Te.s,Z.set([m(),m(),m(),m()],$e*4)});let oe=b(new Rt);oe.setAttribute("position",new wt(Q,3)),oe.setAttribute("aColor",new wt(N,3)),oe.setAttribute("aSize",new wt(X,1)),oe.setAttribute("aSeed",new wt(Z,4));let ve=new us(oe,M);return ve.frustumCulled=!1,ve.name=A,ve.renderOrder=5,x.add(ve),ve};if(n)for(let y=0;y<18;y++){let M=p(-22,22),A=-14+Math.sin(M*.18)*2.2;fn(M,R+.6,A,l("#ff6a20"),p(5,9))}if(Qt.length&&Tn(Qt,b(Jf(E,{flicker:.35,opacity:.55})),"arena-glows"),a.motes>0){let y=c.motes,M=l(c.moteColor),A=[],L=a.motes,Q={leaves:{drift:[.25,-.32,.05],sway:.5,additive:!1,size:.13,hard:1,fall:1,opacity:.95},petals:{drift:[.3,-.25,.08],sway:.5,additive:!1,size:.12,hard:1,fall:1,opacity:.95},spray:{drift:[.4,.05,.1],sway:.3,size:.12,opacity:.55},dust:{drift:[.6,.02,.1],sway:.25,size:.14,opacity:.45},fireflies:{drift:[.05,.04,0],sway:.9,size:.2,flicker:.9,opacity:1},sparks:{drift:[0,.25,0],sway:.4,size:.14,flicker:.6,opacity:.9},embers:{drift:[.12,.7,0],sway:.35,size:.12,flicker:.7,opacity:1}}[y],N=[12,4,10],X=[0,3.4,-5];for(let Z=0;Z<L;Z++){let oe=M.clone().multiplyScalar(Q.additive===!1?p(.4,.6):p(.8,1.6));A.push({p:[p(-N[0],N[0])+X[0],p(-N[1],N[1])+X[1],p(-N[2],N[2])+X[2]],c:oe,s:Q.size*p(.7,1.4)})}Tn(A,b(Jf(E,{...Q,box:N,center:X})),"arena-motes")}let ni={};if(n&&e.quality!=="low"){let y=new Pr(16738858,3,26,1.6);y.position.set(0,1.5,-11),x.add(y),ni.ember=y,P.push(M=>{y.intensity=2.6+Math.sin(M*3.1)*.3+Math.sin(M*7.3)*.15})}let Vs=r.fog,Ws=r.background;e.fog!==!1&&(r.fog=new vr(d.fog.clone(),25,70),r.background=d.fog.clone());let $i=0,k=0;return x.traverse(y=>{if(!y.isMesh&&!y.isPoints)return;k++;let M=y.geometry,A=M.index?M.index.count/3:M.attributes.position.count/3;y.isMesh&&($i+=A*(y.isInstancedMesh?y.count:1))}),{root:x,lights:ni,colors:{fog:d.fog,accent:d.accent,hemiSky:d.horizon.clone().lerp(new Ie(1,1,1),.35),hemiGround:d.worn.clone().multiplyScalar(.6)},stats:{drawCalls:k,triangles:Math.round($i),textureMB:+(v/1048576).toFixed(2),kind:n?"titan":["forest","shore","badlands","marsh","ruins"][i],theme:c.name},update(y){E.uTime.value=y;for(let M of P)M(y)},dispose(){r.remove(x);for(let y of _.geos)y.dispose();for(let y of _.mats)y.dispose();for(let y of _.texs)y.dispose();x1(ne),e.fog!==!1&&r.fog&&r.fog.isFog&&(r.fog=Vs,r.background=Ws),_.geos.clear(),_.mats.clear(),_.texs.clear(),P.length=0}}}var iy=Zf.map(r=>r.name).concat(Qf.name);Dn.legacyMode=!1;var ei=Object.assign({tone:"aces",exposure:1.3,hemi:1.25,sun:2,rim:.8,front:.6,groundLift:.3,shadow:2048,pixelRatio:2},window.SB_GFX||{}),E1=(()=>{let r=null,e=null,t=null,n=null,i=0,s=0,a=new Map,o=[],c=[],l=[],h=new D,u=0,f=0,d=new Map,g={},m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=()=>typeof G!="undefined"&&G.settings&&G.settings.speed||1,x=null;function _(){if(x!==null)return x;try{let S=document.createElement("canvas");return x=!!(S.getContext("webgl2")||S.getContext("webgl"))}catch{return x=!1}}let b={hask:"monarch",ulfgar:"monarch",gorrum:"monarch",thrain:"monarch",corvan:"monarch",odo:"monarch",mira:"hooded",wren:"hooded",kettle:"adventurer",ysolde:"hooded",nyx:"hooded",tamsin:"hooded",velka:"hooded",aurelia:"monarch",sable:"hooded",maelis:"monarch",morwenna:"hooded",seraphine:"hooded",brannoc:"adventurer",pell:"adventurer",lumen:"adventurer",kaito:"adventurer",oriel:"adventurer",vaelith:"adventurer"},v={hooded:"hooded_adventurer",adventurer:"adventurer",monarch:"monarch",titan:"yeti"},E={hooded:{DarkBrown:"armor",Black:"cloth",Brown:"cloth",LightBrown:"accent",Gold:"accent",Metal:"trim",Metal_Dark:"blade",Brown2:"wood",Skin:"skin","head:Black":"cloth","head:Brown":"eye","head:DarkBrown":"hood",White:"hair"},adventurer:{LightGreen:"armor",Green:"cloth",Brown:"pants",Brown2:"pants",Black:"boot",Grey:"boot",Hair:"hair",Eyebrows:"hair",Gold:"accent",Skin:"skin",Eye:"eye"},monarch:{Metal:"armor",Metal_Dark:"trim",Blue:"cloth",DarkBrown:"pants",Beige:"accent",Gold:"crown",Hair_White:"hair",Skin:"skin",Eye:"eye"},titan:{Yeti_Main:"stone",Yeti_Secondary:"stoneDark",Eye_White:"socket",Eye_Black:"maw",Yeti_Teeth:"fang",Tongue:"tongue"}},P={monarch:{head:"King_Head",body:"King_Body",legs:"King_Legs",feet:"King_Feet"},hooded:{head:"Medieval_Head",body:"Medieval_Body",legs:"Medieval_Legs",feet:"Medieval_Feet"},adventurer:{head:"Adventurer_Head",body:"Adventurer_Body",legs:"Adventurer_Legs",feet:"Adventurer_Feet"}},V={brannoc:{bulk:[.96,1,.96]},mira:{hide:["hood"],parts:{legs:"adventurer"},h:.95,head:1.04},pell:{shave:!0,h:.9,head:1.08,bulk:[.92,1,.95],arms:.94},odo:{bald:!0,parts:{body:"adventurer",legs:"adventurer"},h:1.03,bulk:[1.28,1.05,1.3],arms:1.3,legs:1.25,sh:.035,head:.94},wren:{h:.94},kettle:{parts:{head:"monarch",body:"hooded"},shave:!0,h:1.02,arms:1.15,bulk:[1.08,1,1.05],head:.95},ysolde:{hide:["hood"],bulk:[.94,1,.94]},corvan:{parts:{body:"adventurer"},h:.97},hask:{h:1,bulk:[1.15,1,1.12],sh:.025,arms:1.1},lumen:{shave:!0,parts:{body:"monarch"},h:1.06,head:.93},nyx:{h:.97,bulk:[.9,1,.9],arms:.92,legs:.92},tamsin:{hide:["hood"],parts:{body:"adventurer"},h:.98},gorrum:{bald:!0,h:1.1,bulk:[1.3,1.05,1.25],arms:1.3,legs:1.25,sh:.04,head:.92},velka:{hide:["hood"],h:1.03,bulk:[.92,1,.92]},aurelia:{hide:["hood"],parts:{head:"hooded"},h:1.03,head:1.02},sable:{hide:["hood"],h:1},kaito:{shave:!0,parts:{body:"hooded"},h:1.02,head:.96},maelis:{hide:["hood"],parts:{head:"hooded",legs:"hooded",feet:"hooded"},h:1.04},thrain:{parts:{body:"adventurer"},h:.88,bulk:[1.25,1,1.2],arms:1.25,legs:1.2,head:1.06,sh:.02},oriel:{shave:!0,h:1.04},vaelith:{hide:["hair"],parts:{body:"monarch",legs:"monarch",feet:"monarch"},h:1.06,head:.94},morwenna:{hide:["hood"],h:1.06},seraphine:{hide:["hood"],h:1.02},ulfgar:{h:1.08,bulk:[1.25,1.05,1.2],arms:1.2,legs:1.15,sh:.03}},T=S=>Object.assign({},V[S],(window.SB_BODY_TEST||{})[S]),R={idle:["Idle_Sword","Idle"],melee:["Sword_Slash","Punch_Right","Punch"],cast:["Gun_Shoot","Interact","Weapon","Punch"],hit:["HitRecieve","HitReact"],die:["Death"]},Y={},fe=!1,j,K=new Promise(S=>{j=S});function J(){let S=new zo;S.setMeshoptDecoder(Af);let w=window.SB_MODEL_DATA||{},C=O=>w[O]?S.parseAsync(Uint8Array.from(atob(w[O]),W=>W.charCodeAt(0)).buffer,""):S.loadAsync(`models/${O}.glb`),q=Object.entries(v).map(([O,W])=>C(W).then(H=>{H.scene.updateMatrixWorld(!0);let se=1.55;H.scene.traverse(me=>{if(me.isBone&&me.name==="Head"){let Ae=new D;me.getWorldPosition(Ae),se=Ae.y}});let B={};for(let me of H.animations)B[me.name.split("|").pop()]=me;Y[O]={scene:H.scene,clips:B,headY:se}}).catch(H=>console.warn("Sigilbound: model failed to load",W,H)));Promise.all(q).then(()=>{fe=!0,j()})}let te=(S=8e3)=>Promise.race([K,new Promise(w=>setTimeout(w,S))]).then(()=>{fe=!0});function ue(){return g.box||(g.box=new Ai(1,1,1),g.sphere=new ki(.5,20,14),g.capsule=new So(.5,1,6,14),g.cyl=new In(.5,.5,2,20),g.rod=new In(.5,.5,1,18),g.disc=new In(.5,.5,1,36),g.cone=new Sr(.5,1,18),g.taper=new In(.5,.32,1,36,4),g.bell=new In(.22,.5,1,16),g.ring=new Tr(.5,.07,8,40),g.hook=new Tr(.5,.18,6,14,Math.PI*1.25),g.crook=new Tr(.5,.2,6,12,Math.PI),g.octa=new Gs(.5),g.half=new In(.5,.5,1,12,1,!1,0,Math.PI),g.dome=new ki(.5,24,10,0,Math.PI*2,0,Math.PI/2),g.bbox=kf(1,1,1,.14,2),g.breast=Ff(.3,.27,.03,.07,{curve:.17,curveY:.45,cornerSeg:4,seg:6})),g}function le(S,w=0){let C=`l${S}${w}`;return d.has(C)||d.set(C,new Zt({color:new Ie(S),roughness:w?.35:.65,metalness:w})),d.get(C)}function ee(S,w=1){let C=`g${S}${w}`;return d.has(C)||d.set(C,new sn({color:new Ie(S),transparent:w<1,opacity:w,depthWrite:w>=1,toneMapped:!1})),d.get(C)}function ie(S,w,C,q,O,W){let H=new Tt(typeof S=="string"?ue()[S]:S,O);return H.position.set(C[0],C[1],C[2]),H.scale.set(q[0],q[1],q[2]),W&&(H.rotation.order="YXZ",H.rotation.set(W[0]*Math.PI/180,W[1]*Math.PI/180,W[2]*Math.PI/180)),H.castShadow=!0,w.add(H),H}let Me=new Map;function Ve(S,w,C,q,O=16,W=8){let H=[S,w,C,q].join("|");if(Me.has(H))return Me.get(H);let se=[],B=[],me=[];for(let ce=0;ce<=W;ce++)for(let Ee=0;Ee<=O;Ee++){let rt=Ee/O,_t=ce/W,Le=S+(w-S)*_t,bt=rt*2-1;se.push(bt*Le/2,-_t*C,-q*(1-bt*bt)*(.7+.3*_t)+Math.sin(bt*3+1)*.012*_t),B.push(rt*Le*3,_t*C*3)}for(let ce=0;ce<W;ce++)for(let Ee=0;Ee<O;Ee++){let rt=ce*(O+1)+Ee,_t=rt+1,Le=rt+O+1,bt=Le+1;me.push(rt,Le,_t,_t,Le,bt)}let Ae=new Rt;Ae.setAttribute("position",new ct(se,3)),Ae.setAttribute("uv",new ct(B,2)),Ae.setIndex(me),Ae.computeVertexNormals();let ye=Ae.toNonIndexed();return ye.computeVertexNormals(),Me.set(H,ye),ye}function ne(S,w){let C=new Xt;return C.position.set(w[0],w[1],w[2]),S.add(C),C}let ge=(S,w,C)=>"#"+new Ie(S).lerp(new Ie(w),C).getHexString(),De=(S,w)=>"#"+new Ie(S).multiplyScalar(w).getHexString();function He(S,w){let C=document.createElement("canvas");C.width=2,C.height=256;let q=C.getContext("2d"),O=q.createLinearGradient(0,0,0,256);O.addColorStop(0,S),O.addColorStop(1,w),q.fillStyle=O,q.fillRect(0,0,2,256);let W=new mi(C);return W.encoding=xt,W}function de(){let S=document.createElement("canvas");S.width=S.height=128;let w=S.getContext("2d");w.fillStyle="#b8b8b8",w.fillRect(0,0,128,128);let C=7,q=()=>(C=(C*9301+49297)%233280)/233280;for(let W=0;W<260;W++){let H=150+Math.floor(q()*105),se=2+q()*9;w.fillStyle=`rgba(${H},${H},${H},0.18)`,w.beginPath(),w.arc(q()*128,q()*128,se,0,7),w.fill()}let O=new mi(S);return O.wrapS=O.wrapT=Kn,O.encoding=xt,O}let ht=null;function nt(){if(ht)return ht;let S=document.createElement("canvas");S.width=S.height=64;let w=S.getContext("2d"),C=w.createRadialGradient(32,32,0,32,32,32);return C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.4,"rgba(255,255,255,.6)"),C.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=C,w.fillRect(0,0,64,64),ht=new mi(S)}function Ye(S){return[["#1f2b46","#c9805a","#2a2a22","#16141f"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e"],["#1a2e2a","#7fa088","#23362a","#101c16"],["#28203a","#c8a870","#2c2640","#14101e"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0"],["#101a2e","#5a7ab0","#1a2440","#0c1220"],["#0e0a16","#3a2a5a","#180f26","#b080ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606"]][((S||0)%10+10)%10]}function Ge(S,w){ke(),n=S,fn=!!w.titan,r=new Aa({antialias:!0,alpha:!1,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(ei.pixelRatio,window.devicePixelRatio||1)),r.outputEncoding=xt,r.toneMapping=ei.tone==="aces"?Sa:ei.tone==="linear"?Tl:ai,r.toneMappingExposure=ei.exposure,r.shadowMap.enabled=!0,r.shadowMap.type=Lr,r.domElement.className="w3d-canvas",S.prepend(r.domElement),e=new ls;let C=w.titan?["#1a0a0a","#c0401a","#24100c","#100606"]:Ye(w.chapter);e.background=He(C[0],C[1]),e.fog=new vr(new Ie(C[1]),18,48),e.environment=Go(r,{size:U(r).current==="Ultra"?256:64});let q=new Rr(new Ie(ge(C[1],"#ffffff",.35)),new Ie(C[2]),ei.hemi);e.add(q);let O=new Jn(16773597,ei.sun);O.position.set(-5,10,6),O.castShadow=!0,O.shadow.mapSize.set(ei.shadow,ei.shadow),O.shadow.radius=3,O.shadow.bias=-4e-4,O.shadow.normalBias=.02,Object.assign(O.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),e.add(O);let W=new Jn(10070783,ei.rim);W.position.set(4,5,-8),e.add(W);let H=new Jn(16777215,ei.front);H.position.set(0,4,10),e.add(H);let se=U(r);try{je=$f(e,{chapter:w.titan?9:w.chapter||0,titan:!!w.titan,quality:se.current.toLowerCase(),renderer:r})}catch(B){console.warn("Sigilbound: arena failed, using the plain field",B),je=null}je?je.colors&&je.colors.hemiSky&&(q.color.copy(je.colors.hemiSky),je.colors.hemiGround&&q.groundColor.copy(je.colors.hemiGround)):Ze(C,w),O.shadow.camera.left=O.shadow.camera.bottom=-9,O.shadow.camera.right=O.shadow.camera.top=9,t=new gn(50,1,.1,150);try{Nt=Uf(r,e,t,{quality:se.current}),Nt.params.exposure=ei.exposure}catch(B){console.warn("Sigilbound: post-processing unavailable",B),Nt=null}r.domElement.addEventListener("webglcontextrestored",()=>{Nt&&Ot&&Nt.setQuality(Ot.current)}),xe(),window.addEventListener("resize",xe),s=performance.now(),i=requestAnimationFrame(ph)}let je=null;function Ze(S,w){let C=new Zt({color:new Ie(ge(S[2],"#8c8680",ei.groundLift)),roughness:1,map:de()});C.map.repeat.set(24,24);let q=new Tt(new pi(120,120),C);q.rotation.x=-Math.PI/2,q.receiveShadow=!0,e.add(q);let O=new Tt(new fs(3.4,3.6,64),ee("#ffffff",.08));O.rotation.x=-Math.PI/2,O.position.set(0,.01,-.6),O.scale.set(1.25,1,1),e.add(O),Ne(w.titan?2:(w.chapter||0)%5,S,w.chapter||0)}function Ne(S,w,C){let q=C*9301+49297,O=()=>(q=(q*9301+49297)%233280)/233280,W=le(w[3]),H=ee(ge(w[1],"#ffffff",.3),.7);for(let se=0;se<30;se++){let B=O()*Math.PI*2,me=7.5+O()*10,Ae=Math.cos(B)*me,ye=Math.sin(B)*me*.8-5;if(ye>4||ye>-4.5&&Math.abs(Ae)<7)continue;let ce=.6+O()*1.4;S===0?(ie("cyl",e,[Ae,.65*ce,ye],[.25*ce,.65*ce,.25*ce],W),ie("capsule",e,[Ae,2*ce,ye],[1.4*ce,.8*ce,1.4*ce],W)):S===1||S===3?ie("cyl",e,[Ae,.5*ce,ye],[.12,.5*ce,.12],W):S===2?ie("box",e,[Ae,.7*ce,ye],[1.2*ce,1.6*ce,1*ce],W,[O()*30-15,O()*90,O()*30-15]):se%2?ie("box",e,[Ae,1.2*ce,ye],[.5*ce,2.4*ce,.5*ce],W):ie("box",e,[Ae,.8*ce,ye],[.35*ce,1.6*ce,.35*ce],H,[0,45,O()*40-20])}}let Qt=new D(0,1,-.5),fn=!1,rn=50,ln={classic:{name:"Classic",yaw:0,pitch:34},high:{name:"Overhead",yaw:0,pitch:60},low:{name:"Cinematic",yaw:0,pitch:16},angle:{name:"Three-quarter",yaw:38,pitch:30},front:{name:"Hero view",yaw:180,pitch:30}},dt=()=>{let S=typeof G!="undefined"&&G.settings&&G.settings.cam;return ln[S]?S:"classic"};function ut(S){ln[S]&&typeof G!="undefined"&&(G.settings.cam=S,typeof save=="function"&&save()),r&&xe()}let Nt=null,Ot=null;function U(S){return Ot||(Ot=Hf({initial:Xo(S),onChange:w=>{Nt&&Nt.setQuality(w)}})),Ot}function I(S){U(r).force(S||"auto")}function xe(){if(!r||!n)return;let S=n.clientWidth||1,w=n.clientHeight||1;Nt?Nt.setSize(S,w):r.setSize(S,w,!1),t.aspect=S/w,t.fov=rn=t.aspect<.75?62:50;let C=ln[dt()],q=C.pitch*pe,O=C.yaw*pe,W=[];for(let Ae of[-1,1]){for(let ye of[0,2.75])W.push([Ae*2.45,ye,2.6]),W.push([Ae*2.45,ye,2]);for(let ye of[0,3.2])W.push([Ae*2.85,ye,-3.6])}W.push([0,3.75,-3.95]),fn&&(W.push([0,5.6,-4]),W.push([-2.3,3.4,-4]),W.push([2.3,3.4,-4]));let H=new D,se=Ae=>{let ye=Math.cos(q)*Ae;return t.position.set(Qt.x+Math.sin(O)*ye,Qt.y+Math.sin(q)*Ae,Qt.z+Math.cos(O)*ye),t.lookAt(Qt),t.updateMatrixWorld(),t.updateProjectionMatrix(),W.every(ce=>(H.set(ce[0],ce[1],ce[2]).project(t),Math.abs(H.x)<=.95&&H.y<=.84&&H.y>=-.84))},B=5,me=40;for(let Ae=0;Ae<22;Ae++){let ye=(B+me)/2;se(ye)?me=ye:B=ye}se(me),h.copy(t.position)}function ke(){if(Bi=0,hi=0,Un=0,Ur++,cancelAnimationFrame(i),i=0,window.removeEventListener("resize",xe),r){if(Nt&&(Nt.dispose(),Nt=null),je){try{je.dispose()}catch{}je=null}r.domElement.remove(),Ho(r),r.dispose()}r=e=t=n=null,a.clear(),o=[],c=[],l=[]}function ze(S,w){let C=O=>w?ge(O,"#2e1f33",.5):O,q=SKIN[S.skin];return{armor:C(S.armor),cloth:C(S.cloth||De(S.armor,.62)),pants:C(S.pants||ge(S.cloth||S.armor,"#2a2522",S.cloth?.35:.6)),accent:C(S.accent),trim:C(S.trim||ge(S.accent,"#c8ccd4",.4)),blade:C("#c8d0dc"),wood:C("#6b4a29"),boot:C(S.boot||"#2a1f1a"),hair:C(S.hair),brow:C(De(S.hair,.8)),hood:C(S.hood||S.armor),skin:C(q),crown:C(S.accent),eye:w?"#ff2a2a":S.glow||"#1a141f"}}let Xe=(S,w,C)=>(E[S]||{})[`${w}:${C}`]||(E[S]||{})[C],gt=(S,w)=>{let C=P[S];if(C){for(let q in C)if(C[q]===w)return q}return""};function Ke(S,w,C){let q={};S.traverse(O=>{O.isBone&&(q[O.name]=O)});for(let[O,W]of Object.entries(C)){let H=S.getObjectByName(P[w][O]);if(W===w)continue;let se=Y[W],B=se&&P[W]&&se.scene.getObjectByName(P[W][O]);if(W!=="none"&&!B)continue;let me=H?H.parent:S;if(H&&me.remove(H),W==="none")continue;let Ae=B.clone(!0);Ae.traverse(ye=>{if(ye.userData.sbBase=W,ye.userData.sbKind=O,!ye.isSkinnedMesh)return;let ce=ye.skeleton;ye.bind(new hs(ce.bones.map(Ee=>q[Ee.name]||Ee),ce.boneInverses.map(Ee=>Ee.clone())),ye.bindMatrix.clone())}),me.add(Ae)}}function we(S,w){let C={};S.traverse(W=>{W.isBone&&(C[W.name]=W)});let q=new Pn,O=(W,H)=>{if(W){W.scale.set(H[0],H[1],H[2]);for(let se of W.children){if(!se.isBone)continue;q.setFromMatrix4(new mt().makeRotationFromQuaternion(se.quaternion));let B=q.elements,me=[1/H[0],1/H[1],1/H[2]];se.scale.set(B[0]*B[0]*me[0]+B[1]*B[1]*me[1]+B[2]*B[2]*me[2],B[3]*B[3]*me[0]+B[4]*B[4]*me[1]+B[5]*B[5]*me[2],B[6]*B[6]*me[0]+B[7]*B[7]*me[1]+B[8]*B[8]*me[2])}}};if(w.bulk&&O(C.Chest,w.bulk),w.arms)for(let W of["UpperArmL","UpperArmR","LowerArmL","LowerArmR"])O(C[W],[w.arms,1,w.arms]);if(w.legs)for(let W of["UpperLegL","UpperLegR"])O(C[W],[w.legs,1,w.legs]);if(w.sh)for(let[W,H]of[["ShoulderL",1],["ShoulderR",-1]]){let se=C[W];if(!se)continue;S.updateMatrixWorld(!0);let B=new D;se.parent.getWorldScale(B),se.position.x+=H*w.sh*S.scale.x/(B.x||1)}w.head&&C.Head&&C.Head.scale.multiplyScalar(w.head)}let st=new Map;function lt(S,w){let C=S.geometry.uuid+w;if(st.has(C))return st.get(C);let q=S.skeleton,O=q.bones.findIndex(Ee=>Ee.name==="Head"),W=S.geometry,H=W.attributes.position,se=W.index,B=new mt().multiplyMatrices(q.boneInverses[O],S.bindMatrix),me=new D,Ae=[],ye=se?se.count:H.count;for(let Ee=0;Ee<ye;Ee+=3){let rt=0,_t=0;for(let bt=0;bt<3;bt++)me.fromBufferAttribute(H,se?se.getX(Ee+bt):Ee+bt).applyMatrix4(B).multiplyScalar(100),rt+=me.y/3,_t+=me.z/3;if((rt<.075&&_t>-.03)===(w==="beard"))for(let bt=0;bt<3;bt++)Ae.push(se?se.getX(Ee+bt):Ee+bt)}let ce=W.clone();return ce.setIndex(Ae),st.set(C,ce),ce}function et(S,w,C,q,O){let W=Y[w];if(!W)return null;let H=w==="titan"?null:LOOKS[S]||LOOKS.brannoc,se=w==="titan"?{}:T(S),B=H&&H.kit||{},me=Ef(W.scene),Ae=B.robe==="long"?Object.assign({legs:"none"},se.parts):se.parts;Ae&&Ke(me,w,Ae);let ye=[],ce=q&&ELEMENTS[q]?ELEMENTS[q].color:"#e8553a",Ee=w==="titan"?{stone:"#16130f",stoneDark:"#0c0a09",fang:"#0e0c0a",socket:"#040303",tongue:"#0a0606"}:ze(H,C),rt=new Set(se.hide||[]),_t=H&&H.gear==="crown"&&!rt.has("crown");me.traverse(on=>{if(!on.isMesh)return;on.castShadow=!0,on.frustumCulled=!1;let An=w,an="";for(let un=on;un&&un!==me;un=un.parent)if(un.userData.sbBase){An=un.userData.sbBase,an=un.userData.sbKind;break}if(!an)for(let un=on;un&&un!==me&&!an;un=un.parent)an=gt(w,un.name);!Array.isArray(on.material)&&Xe(An,an,on.material.name)==="hair"&&an==="head"&&An!=="hooded"&&(se.shave||se.bald)&&(on.geometry=lt(on,se.bald?"beard":"scalp"));let z=un=>{let At=Xe(An,an,un.name),Vt=un.clone();if(At==="crown"&&!_t||At==="tongue"||rt.has(At)||rt.has(`${an}:${At}`))return Vt.visible=!1,Vt;if(At==="maw")return Vt.color.set(De(ce,.3)),Vt.emissive=new Ie(ce),Vt.emissiveIntensity=1.8,Vt.metalness=0,Vt;if(At==="eye"&&(C||H&&H.glow))return Vt.color.set(Ee.eye),Vt.emissive=new Ie(Ee.eye),Vt.emissiveIntensity=3,Vt;At&&At!=="keep"&&Ee[At]?Vt.color.set(Ee[At]):C&&Vt.color.lerp(new Ie("#2e1f33"),.5),At==="armor"&&An==="monarch"&&(Vt.metalness=.2,Vt.roughness=.55),w==="titan"&&(Vt.metalness=0,Vt.roughness=.95),(At==="blade"||At==="trim")&&(Vt.metalness=.3,Vt.roughness=.5);let Jt=At==="armor"&&An==="monarch"||At==="trim"||At==="blade"||At==="crown";return Vt.envMapIntensity=w==="titan"?.15:Jt?.8:.25,w!=="titan"&&(Vt.roughness=Jt?.5:.8,Vt.metalness=Jt?.3:0),B.seams&&(At==="armor"||At==="trim"||At==="pants")&&yt(Vt,C?"#ff2a2a":B.seams,ye,B.seamScale||3.2),Vt};on.material=Array.isArray(on.material)?on.material.map(z):z(on.material)});let Le=new Xt;Le.add(me);let bt=w==="titan"?3.6:1.85,Ci=se.h||1;me.scale.setScalar(bt/W.headY*Ci);let Ri=new Io(me),Pt=on=>{for(let An of R[on])if(W.clips[An])return W.clips[An];return null},It={};for(let on of Object.keys(R)){let An=Pt(on);An&&(It[on]=Ri.clipAction(An))}let re=hn(Ri,W,w==="titan"?Ut:Et(S,H),It);return H?(Gt(S,H,w,me,C,ye,se,O),zt(me,`${S}|${C?1:0}|${w}|${en(O)}`),ti(me,`${S}|${C?1:0}|${w}`),we(me,se)):Ft(me,q,ye),{model:Le,mixer:Ri,actions:It,anim:re,fx:ye,height:w==="titan"?4.7:2.3*Ci}}let at={odo:1,kettle:1,gorrum:1,thrain:1},it={candle:1,mirror:1,bell:1,orb:1,lantern:1};function Et(S,w){let C=w.prop;return{idle:it[C]?"Idle_Neutral":C==="bow"?"Idle_Gun":"Idle_Sword",strike:at[S]?["Punch_Right","Punch_Left","Kick_Right"]:C==="daggers"?["Sword_Slash","Punch_Left","Kick_Left"]:C==="spear"||C==="trident"?["Sword_Slash","Kick_Right"]:["Sword_Slash","Sword_Slash","Kick_Right"],cast:"Gun_Shoot",support:"Interact",fidget:["Idle","Idle_Neutral","Interact"],win:"Wave"}}let Ut={idle:"Idle",strike:["Punch","Weapon","Punch"],cast:"Punch",support:"Yes",fidget:["No"],win:"Yes",titan:!0};function hn(S,w,C,q){let O={},W=B=>w.clips[B]?O[B]||(O[B]=S.clipAction(w.clips[B])):null,H=w.clips[C.idle]?C.idle:Object.keys(w.clips).find(B=>/^Idle/.test(B)),se={S:C,cur:null,strikeN:0,hold:!1,has:B=>!!w.clips[B],play(B,me={}){let Ae=W(B);if(!Ae)return null;let ye=se.cur;return Ae.reset(),Ae.setLoop(me.loop?Do:El,me.loop?1/0:1),Ae.clampWhenFinished=!!me.clamp,Ae.setEffectiveTimeScale(me.speed||(C.titan&&B===H?.7:1)),Ae.setEffectiveWeight(1),Ae.play(),ye&&ye!==Ae&&ye.crossFadeTo(Ae,me.fade==null?.18:me.fade,!1),se.cur=Ae,se.hold=!!me.hold,Ae},idle(B=.25){return se.play(H,{loop:!0,fade:B})},strike(){let B=C.strike.filter(me=>w.clips[me]);return se.play(B[se.strikeN++%B.length]||"Sword_Slash",{fade:.1})},duration:B=>w.clips[B]?w.clips[B].duration:0};return H&&(q.idle=W(H)),se.idle(0),S.addEventListener("finished",B=>{B.action!==se.cur||B.action.clampWhenFinished||se.hold||se.idle(.22)}),se}let $=new Map,pe=Math.PI/180,Re={monarch:{top:.26,r:.13,face:.15,eye:.09,crown:.18},adventurer:{top:.25,r:.12,face:.14,eye:.09,crown:.18},hooded:{top:.27,r:.15,face:.16,eye:.09,crown:.25},hair:{top:.25,r:.12,face:.14,eye:.1,crown:.2},bald:{top:.235,r:.11,face:.135,eye:.09,crown:.17}};function qe(S){S.updateMatrixWorld(!0);let w=new Map;return S.traverse(C=>{if(!C.isMesh)return;let q=C.geometry.clone().applyMatrix4(C.matrixWorld),O=q.index?q.toNonIndexed():q;w.has(C.material)||w.set(C.material,[]),w.get(C.material).push(O)}),[...w].map(([C,q])=>({mat:C,geo:No(q)}))}let tt=new Map,ft=new Map;function $t(S){if(S.transparent&&S.isMeshBasicMaterial){let O=S.opacity<.45?.3:.6,W=`glow|${O}`,H=tt.get(W);return H||(H=S.clone(),H.color=new Ie(1,1,1),H.opacity=O,H.vertexColors=!0,H.userData.shared=!0,tt.set(W,H)),{key:W,mat:H}}let w=O=>O==null?"":O.toFixed(2);if(S.userData.crack){let O=`crack|${S.userData.crack}|${w(S.roughness)}|${w(S.metalness)}`,W=tt.get(O);return W||(W=S.clone(),W.onBeforeCompile=S.onBeforeCompile,W.customProgramCacheKey=S.customProgramCacheKey,W.color=new Ie(1,1,1),W.vertexColors=!0,W.userData.shared=!0,tt.set(O,W)),{key:O,mat:W}}let C=[S.type,S.map?S.map.uuid:"",w(S.roughness),w(S.metalness),S.side,S.transparent?S.opacity:1,w(S.envMapIntensity),S.bumpScale||0,S.emissive?S.emissive.getHexString()+S.emissiveIntensity:""].join("|"),q=tt.get(C);return q||(q=S.clone(),q.color=new Ie(1,1,1),q.vertexColors=!0,q.userData.shared=!0,tt.set(C,q)),{key:C,mat:q}}let dn=S=>{let w=S.count,C=S.itemSize,q=new Float32Array(w*C),O=[S.getX,S.getY,S.getZ,S.getW];for(let W=0;W<w;W++)for(let H=0;H<C;H++)q[W*C+H]=O[H].call(S,W);return new wt(q,C)};function li(S,w,C){let q=new Rt;for(let se of["position","normal","uv",...C?["skinIndex","skinWeight"]:[]])S.attributes[se]&&q.setAttribute(se,dn(S.attributes[se]));S.index&&q.setIndex(S.index);let O=q.index?q.toNonIndexed():q;O.attributes.uv||O.setAttribute("uv",new ct(new Float32Array(O.attributes.position.count*2),2));let W=O.attributes.position.count,H=new Float32Array(W*3);for(let se=0;se<W;se++)H[se*3]=w.r,H[se*3+1]=w.g,H[se*3+2]=w.b;return O.setAttribute("color",new wt(H,3)),O}function zt(S,w){let C=[];if(S.traverse(B=>{B.isMesh&&B.userData.kit&&C.push(B)}),!C.length)return;let q=C.map(B=>{let me=new zs;return B.add(me),B.visible=!1,me}),O=ft.get(w);if(!O){let B=new Map;C.forEach((me,Ae)=>{let ye=$t(me.material),ce=li(me.geometry,me.material.color,!1),Ee=ce.attributes.position.count,rt=new Uint16Array(Ee*4),_t=new Float32Array(Ee*4);for(let Le=0;Le<Ee;Le++)rt[Le*4]=Ae,_t[Le*4]=1;ce.setAttribute("skinIndex",new Os(rt,4)),ce.setAttribute("skinWeight",new ct(_t,4)),B.has(ye.key)||B.set(ye.key,{mat:ye.mat,list:[]}),B.get(ye.key).list.push(ce)}),O=[...B.values()].map(({mat:me,list:Ae})=>({mat:me,geo:No(Ae)})),ft.set(w,O)}S.updateMatrixWorld(!0);let W=new Xt;S.add(W),W.updateMatrixWorld(!0);let H=W.matrixWorld.clone().invert(),se=new hs(q,q.map(()=>H.clone()));for(let{mat:B,geo:me}of O){let Ae=new Ns(me,B);Ae.frustumCulled=!1,Ae.castShadow=!B.isMeshBasicMaterial,Ae.userData.kitMerged=1,W.add(Ae),Ae.updateMatrixWorld(!0),Ae.bind(se,Ae.matrixWorld.clone())}}function ti(S,w){let C=[];S.traverse(H=>{H.isSkinnedMesh&&!H.userData.kit&&!H.userData.kitMerged&&H.parent&&!H.parent.isBone&&C.push(H)});let q=[],O=(H,se)=>H.elements.every((B,me)=>Math.abs(B-se.elements[me])<.001*(1+Math.abs(B))),W=(H,se)=>{let B=null;for(let me=0;me<se.skeleton.bones.length;me++){let Ae=H.bones.indexOf(se.skeleton.bones[me]);if(!(Ae<0)){if(!B){B=H.inverses[Ae].clone().invert().multiply(se.skeleton.boneInverses[me]);continue}if(!O(H.inverses[Ae].clone().multiply(B),se.skeleton.boneInverses[me]))return null}}return B||new mt};for(let H of C){let se=H.material;if(Array.isArray(se)||se.map)continue;if(!H.visible||!se.visible){H.parent.remove(H);continue}let B=$t(se),me=null,Ae=null;for(let ce of q)if(ce.key===B.key&&(Ae=W(ce,H))){me=ce;break}me||(me={key:B.key,mat:B.mat,bones:[],inverses:[],list:[],xs:[]},q.push(me),Ae=new mt);let ye=Ae.clone().invert();H.skeleton.bones.forEach((ce,Ee)=>{me.bones.indexOf(ce)<0&&(me.bones.push(ce),me.inverses.push(H.skeleton.boneInverses[Ee].clone().multiply(ye)))}),me.list.push(H),me.xs.push(Ae)}q.forEach((H,se)=>{let B=H.list[0],me=`${w}|${se}|${H.key}|${H.list.length}`,Ae=ft.get(me);if(!Ae){let ce=new mt,Ee=new Pn;Ae=No(H.list.map((rt,_t)=>{let Le=li(rt.geometry,rt.material.color,!0);ce.copy(B.bindMatrix).invert().multiply(H.xs[_t]).multiply(rt.bindMatrix),Le.applyMatrix4(ce);let bt=Le.attributes.skinIndex,Ci=rt.skeleton.bones.map(Pt=>H.bones.indexOf(Pt)),Ri=new Uint16Array(bt.count*4);for(let Pt=0;Pt<bt.count;Pt++)for(let It=0;It<4;It++)Ri[Pt*4+It]=Math.max(0,Ci[Math.round(bt.array[Pt*4+It])]);if(Le.setAttribute("skinIndex",new Os(Ri,4)),Le.attributes.skinWeight.normalized||!(Le.attributes.skinWeight.array instanceof Float32Array)){let Pt=Le.attributes.skinWeight,It=new Float32Array(Pt.count*4);for(let re=0;re<Pt.count;re++)It[re*4]=Pt.getX(re),It[re*4+1]=Pt.getY(re),It[re*4+2]=Pt.getZ(re),It[re*4+3]=Pt.getW(re);Le.setAttribute("skinWeight",new ct(It,4))}return Le})),ft.set(me,Ae)}let ye=new Ns(Ae,H.mat);ye.position.copy(B.position),ye.quaternion.copy(B.quaternion),ye.scale.copy(B.scale),ye.castShadow=!0,ye.frustumCulled=!1,B.parent.add(ye),ye.bind(new hs(H.bones,H.inverses.map(ce=>ce.clone())),B.bindMatrix.clone());for(let ce of H.list)ce.parent.remove(ce)})}function Tn(S){let w=new Xt;for(let{mat:C,geo:q}of S){let O=new Tt(q,C);O.castShadow=!C.isMeshBasicMaterial,O.frustumCulled=!1,w.add(O)}return w}function ni(S,w,C,q,O=0){let W=new D;S.getWorldScale(W);let H=new Xt;H.scale.setScalar(w.scale.x/(W.x||1)),S.add(H);let se=new Xt;if(se.position.set(C[0],C[1],C[2]),q){let B=new D(q[0],q[1],q[2]).normalize();se.quaternion.setFromUnitVectors(new D(0,1,0),B),O&&se.quaternion.multiply(new xn().setFromAxisAngle(new D(0,1,0),O*pe))}return H.add(se),se}let Vs=(S,w)=>[S==="R"?-Math.cos(w*pe):Math.cos(w*pe),-Math.sin(w*pe),0],Ws={R:[0,.075,.01],L:[0,.075,.01]},$i=new mt,k=new xn,y=new D,M=new D;function A(S,w,C=[0,0,0]){w.updateMatrixWorld(!0),S.getWorldScale(M);let q=new Xt;q.scale.setScalar(w.scale.x/(M.x||1)),S.add(q),$i.copy(w.matrixWorld).invert().multiply(S.matrixWorld).decompose(y,k,M);let O=new Xt;return O.quaternion.copy(k).invert(),O.position.set(C[0],C[1],C[2]).applyQuaternion(O.quaternion),q.add(O),O}function L(S,w){return w.updateMatrixWorld(!0),$i.copy(w.matrixWorld).invert().multiply(S.matrixWorld),y.setFromMatrixPosition($i).y}let Q=["","#6b5d50","#9aa3ad","#c6ced8","#dfe3ea","#f0e6d0"],N=["","#8a7a68","#5bc46a","#4aa3ff","#b46cff","#ffb02e"],X={fury:"#ff4a3a",vigor:"#4ae07a",bulwark:"#b8b4aa",haste:"#3ad8cc",keen:"#ffd040"},Z=S=>S?`${S.r}${S.s?S.s[0]:"-"}`:"0",oe={helm:1,horns:1},ve={crown:1,halo:1,circlet:1,veil:1,mask:1},Te=new D,$e=new xn;function St(S,w){return(C,q)=>{let O=C.userData.sp||(C.userData.sp={p:new D,t:q,ax:0,az:0,vx:0,vz:0,on:!1,addX:0,addZ:0});C.rotation.x-=O.addX,C.rotation.z-=O.addZ,O.addX=O.addZ=0,S(C,q);let W=Math.min(.05,Math.max(.001,q-O.t));if(O.t=q,!C.parent)return;C.parent.getWorldPosition(Te),O.on||(O.p.copy(Te),O.on=!0);let H=Te.clone().sub(O.p).divideScalar(W);O.p.copy(Te),H.length()>3&&H.setLength(3),C.parent.getWorldQuaternion($e),H.applyQuaternion($e.invert());let se=(Ae,ye,ce)=>Math.max(ye,Math.min(ce,Ae)),B=se((H.z*.08-H.y*.04)*w,-.12,.42),me=se(-H.x*.08*w,-.3,.3);O.vx+=((B-O.ax)*70-O.vx*16.7)*W,O.ax+=O.vx*W,O.vz+=((me-O.az)*70-O.vz*16.7)*W,O.az+=O.vz*W,O.ax=se(O.ax,-.15,.45),O.az=se(O.az,-.32,.32),(!isFinite(O.ax)||!isFinite(O.az))&&(O.ax=O.az=O.vx=O.vz=0),C.rotation.x+=O.ax,C.rotation.z+=O.az,O.addX=O.ax,O.addZ=O.az}}function Gt(S,w,C,q,O,W,H={},se=null){let B=w.kit||{},me=H.parts&&H.parts.head||C,Ae=new Set(H.hide||[]),ye=me==="hooded"&&!Ae.has("hood"),ce=ye?Re.hooded:me==="hooded"?Re.hair:H.bald||Ae.has("hair")?Re.bald:Re[me]||Re.adventurer,Ee={};q.traverse(F=>{F.isBone&&(Ee[F.name]=F)}),q.updateMatrixWorld(!0);let rt=F=>O?ge(F,"#2e1f33",.5):F,_t=Ot?Ot.preset.textureSize:256,Le=(F,he=0)=>he>=.5?Ni("metal",rt(F),{metalness:.75,size:_t}):he>0?Ni("leather",rt(F),{roughness:.55,metalness:.35,size:_t}):Ni("leather",rt(F),{size:_t}),bt=F=>Ni("cloth",rt(F),{side:cn,repeat:4,bump:.6,size:_t}),Ci=F=>Ni("wood",rt(F),{size:_t}),Ri=F=>Ni("gold",rt(F),{size:_t}),Pt=(F,he=1)=>ee(O?ge(F,"#ff3355",.45):F,he),It=se&&se.weapon,re={steel:Le(It?Q[It.r]:"#c4ccd6",It&&It.r===1?.3:.6),iron:Le("#4a4a52",.5),wood:Ci("#6b4a29"),leather:Le("#3a2a20"),acc:Le(w.accent,.35),accG:Pt(w.accent),accH:Pt(w.accent,.28),armor:Le(w.armor),armorD:Le(De(w.armor,.6)),gold:Ri(ge(w.accent,"#e8c070",.5)),glowC:Pt(w.glow||w.accent),glowH:Pt(w.glow||w.accent,.3),cloth:bt(w.cloth||De(w.armor,.62)),hair:Ni("hair",rt(w.hair),{size:_t})},on=(F,he=.7)=>F===1?"#5a4232":ge(Q[F],w.armor,he),An=F=>O?Le(ge(N[F],"#3a3340",.75),.5):F>=4?Ri(N[F]):Le(N[F],.4),an=(F,he,ae,Pe="")=>{let Se=`${S}|${O?1:0}|${F}|${Pe}`,Ce=$.get(Se);if(!Ce){let Ue=new Xt,Qe=[];ae(Ue,Qe),Qe.forEach(_e=>Ue.remove(_e.obj)),Ce={baked:qe(Ue),live:Qe},$.set(Se,Ce)}let be=Tn(Ce.baked);be.traverse(Ue=>{Ue.isMesh&&(Ue.userData.kit=1)}),he.add(be);for(let Ue of Ce.live){let Qe=Ue.obj.clone();he.add(Qe),Qe.traverse(_e=>{_e.isMesh&&(_e.userData.kit=1)}),W.push(_e=>Ue.fn(Qe,_e))}},z=(F,he,ae,Pe,Se,Ce)=>ie(he==="box"?"bbox":he,F,ae,Pe,Se,Ce),un=(F,he)=>{let ae=F.userData.base,Pe=1+Math.sin(he*17+F.id)*.12+Math.sin(he*29)*.06;F.scale.set(ae[0]*Pe,ae[1]*(2-Pe),ae[2]*Pe)},At=(F,he)=>{let ae=F.userData.base,Pe=1+Math.sin(he*3+F.id)*.12;F.scale.set(ae[0]*Pe,ae[1]*Pe,ae[2]*Pe)},Vt=(F,he)=>(ae,Pe)=>{ae.rotation[F]=Pe*he},Jt=(F,he,ae,Pe,Se,Ce,be,Ue)=>{let Qe=Array.isArray(Se)?Se:[Se,Se,Se],_e=z(F,ae,Pe,Qe,Ce,Ue);return _e.userData.base=Qe.slice(),_e.castShadow=!1,he.push({obj:_e,fn:be}),_e},Ss=(F,he,ae,Pe,Se=0)=>{let Ce=ne(F,ae);return he.push({obj:Ce,fn:Se?St(Pe,Se):Pe}),Ce},$o={spear(F){if(z(F,"rod",[0,.3,0],[.042,1.75,.042],re.wood),z(F,"rod",[0,1.15,0],[.06,.07,.06],re.acc),z(F,"cone",[0,1.32,0],[.09,.28,.03],re.steel),z(F,"cone",[0,1.08,0],[.09,.12,.09],re.acc,[180,0,0]),B.pennant){let he=bt(B.pennant);z(F,"box",[0,1,.11],[.012,.13,.2],he),z(F,"cone",[0,1,.27],[.12,.14,.012],he,[90,90,0])}},staff(F,he){let ae=B.staff||"orb",Pe=B.staffLen||1,Se=1.5*(Pe-1),Ce=ae==="ice"?Le("#cfe8f4",.2):ae==="sun"?re.gold:ae==="drift"?Le("#8a7458"):re.wood;if(z(F,"rod",[0,.3+Se/2,0],[.05,1.5*Pe,.05],Ce),ae==="ice")z(F,"octa",[0,1.17+Se,0],[.13,.32,.13],re.accG),z(F,"octa",[.07,1.06+Se,0],[.06,.16,.06],re.accG,[0,0,-30]),z(F,"octa",[-.07,1.06+Se,0],[.06,.16,.06],re.accG,[0,0,30]),Jt(F,he,"sphere",[0,1.17+Se,0],.34,re.accH,At);else if(ae==="sun"){z(F,"sphere",[0,1.16+Se,0],[.16,.16,.16],re.glowC);for(let be=0;be<8;be++){let Ue=be*45*pe;z(F,"cone",[Math.cos(Ue)*.15,1.16+Se+Math.sin(Ue)*.15,0],[.04,.1,.04],re.gold,[0,0,be*45-90])}Jt(F,he,"sphere",[0,1.16+Se,0],.42,re.glowH,At)}else{if(ae==="drift"){for(let be of[-1,1])z(F,"rod",[be*.06,1.04+Se,0],[.035,.22,.035],Ce,[0,0,be*-25]);z(F,"sphere",[0,.86+Se,0],[.08,.06,.08],Ce),z(F,"cone",[.06,.8+Se,.03],[.06,.08,.02],Le("#f0e0c8"),[180,0,0])}else z(F,"ring",[0,1.12+Se,0],[.2,.2,.2],re.acc),z(F,"cone",[0,1.01+Se,0],[.07,.1,.07],re.acc,[180,0,0]);z(F,"sphere",[0,1.12+Se,0],[.13,.13,.13],re.accG),Jt(F,he,"sphere",[0,1.12+Se,0],.3,re.accH,At)}},hammer(F,he){let ae=B.big?1.25:1;z(F,"rod",[0,B.big?.2:.25,0],[.045*ae,B.big?.85:.95,.045*ae],re.wood),B.big?(z(F,"box",[0,.62,0],[.32,.2,.2],Le("#2a2426",.5)),z(F,"box",[0,.62,0],[.34,.045,.21],re.accG),z(F,"box",[0,.62,0],[.045,.22,.22],re.accG),z(F,"cone",[.19,.62,0],[.11,.11,.11],Le("#2a2426",.5),[0,0,-90]),z(F,"rod",[0,-.2,0],[.07,.06,.07],re.iron)):(z(F,"box",[0,.68,0],[.3,.16,.16],re.iron),z(F,"box",[0,.68,0],[.32,.04,.17],re.acc),z(F,"box",[.16,.68,0],[.02,.15,.15],re.accG),z(F,"box",[-.16,.68,0],[.02,.15,.15],re.accG),Jt(F,he,"sphere",[.16,.68,0],.22,re.accH,At))},club(F){let he=Le(w.accent);z(F,"taper",[0,.38,0],[.16,.8,.16],re.wood),z(F,"sphere",[0,.78,0],[.16,.14,.16],re.wood),z(F,"sphere",[.07,.62,.04],[.08,.08,.08],re.wood),z(F,"sphere",[-.06,.74,-.05],[.07,.07,.07],re.wood),z(F,"sphere",[.02,.84,.05],[.12,.07,.1],he),z(F,"sphere",[-.08,.66,.02],[.07,.1,.07],he),z(F,"rod",[0,.08,0],[.11,.12,.11],re.leather)},trident(F){z(F,"rod",[0,.28,0],[.042,1.6,.042],re.armorD),z(F,"box",[0,1.08,0],[.3,.04,.04],re.gold),z(F,"cone",[0,1.27,0],[.06,.34,.06],re.acc);for(let he of[-.13,.13])z(F,"rod",[he,1.16,0],[.03,.16,.03],re.acc),z(F,"cone",[he,1.3,0],[.05,.14,.05],re.acc);z(F,"sphere",[0,1.08,0],[.07,.07,.07],re.accG)},katana(F){z(F,"rod",[0,.03,0],[.04,.26,.04],Le("#1c1c22")),z(F,"disc",[0,.17,0],[.1,.02,.1],re.gold),z(F,"box",[0,.48,0],[.012,.6,.045],re.steel),z(F,"box",[0,.92,-.025],[.012,.3,.04],re.steel,[-9,0,0]),z(F,"box",[0,.48,.03],[.014,.6,.016],re.glowC),z(F,"box",[0,.91,.006],[.014,.3,.016],re.glowC,[-9,0,0])},sword(F,he){let ae=B.side==="sword"&&w.prop==="shield"?.8:1;if(z(F,"rod",[0,.02,0],[.04,.22,.04],re.leather),z(F,"sphere",[0,-.1,0],[.06,.06,.06],re.gold),z(F,"box",[0,.14,0],[.26,.04,.05],re.gold),z(F,"box",[0,.16+.45*ae,0],[.075,.9*ae,.022],re.steel),z(F,"cone",[0,.16+.9*ae+.05,0],[.075,.1,.022],re.steel),w.glow||B.flame){let Pe=B.flame?Pt(w.accent,.55):re.glowH;Jt(F,he,"box",[0,.16+.47*ae,0],[.13,.98*ae,.05],Pe,B.flame?un:At)}},axe(F){z(F,"rod",[0,.25,0],[.045,.85,.045],re.wood),z(F,"half",[0,.6,0],[.34,.025,.3],re.steel,[90,90,0]),z(F,"box",[0,.6,0],[.08,.12,.06],re.acc),z(F,"cone",[0,.72,0],[.05,.1,.05],re.acc)},dagger(F){z(F,"rod",[0,.01,0],[.034,.13,.034],re.leather),z(F,"box",[0,.09,0],[.12,.025,.03],re.acc),z(F,"cone",[0,.28,0],[.065,.36,.015],re.steel),z(F,"cone",[0,.28,0],[.09,.4,.02],re.glowH)},whip(F){z(F,"rod",[0,.06,0],[.045,.3,.045],re.leather),z(F,"sphere",[0,-.1,0],[.055,.055,.055],re.acc),z(F,"rod",[0,.2,0],[.06,.04,.06],re.acc)},hook(F){z(F,"rod",[0,.2,0],[.04,.7,.04],Le("#5a4034",.4)),z(F,"hook",[.09,.56,0],[.18,.18,.18],Le("#7a5a48",.5),[0,0,-20]),z(F,"cone",[.2,.52,0],[.04,.1,.04],Le("#7a5a48",.5),[0,0,150]),z(F,"rod",[0,-.12,0],[.06,.05,.06],re.acc),z(F,"rod",[0,-.2,0],[.012,.14,.012],re.iron)},bow(F){z(F,"rod",[0,0,0],[.04,.16,.04],re.leather);for(let he of[1,-1])z(F,"rod",[0,he*.22,-.02],[.03,.32,.03],re.wood,[he*-8,0,0]),z(F,"rod",[0,he*.5,-.09],[.024,.28,.024],re.wood,[he*-28,0,0]),z(F,"sphere",[0,he*.63,-.16],[.035,.035,.035],re.acc);z(F,"rod",[0,0,-.16],[.006,1.26,.006],re.accG)},lantern(F,he){z(F,"rod",[0,.3,0],[.04,1.5,.04],re.wood),z(F,"crook",[.1,1.05,0],[.2,.2,.2],re.gold),z(F,"rod",[.2,.97,0],[.008,.12,.008],re.gold),z(F,"box",[.2,.84,0],[.13,.17,.13],Le(ge(w.accent,"#6a4a20",.6),.5)),z(F,"cone",[.2,.95,0],[.16,.06,.16],re.gold),z(F,"sphere",[.2,.84,0],[.15,.13,.15],re.accG),Jt(F,he,"sphere",[.2,.84,0],.4,re.accH,At)},candle(F,he){z(F,"disc",[0,.06,0],[.22,.03,.22],re.gold),z(F,"rod",[0,-.03,0],[.045,.16,.045],re.gold),z(F,"rod",[0,.2,0],[.11,.28,.11],Le("#f2e6c8")),z(F,"ring",[.13,.03,0],[.08,.08,.2],re.gold,[90,0,0]),Jt(F,he,"cone",[0,.42,0],[.11,.22,.11],re.accG,un),Jt(F,he,"sphere",[0,.4,0],.42,re.accH,At)},mirror(F,he){z(F,"rod",[0,.05,0],[.035,.2,.035],re.gold),z(F,"ring",[0,.3,0],[.24,.24,.3],re.gold),z(F,"disc",[0,.3,0],[.22,.012,.22],re.accG,[90,0,0]),Jt(F,he,"sphere",[0,.3,0],.4,re.accH,At)},bell(F,he){z(F,"rod",[0,.05,0],[.04,.18,.04],re.wood),z(F,"sphere",[0,-.08,0],[.12,.1,.12],re.gold),z(F,"bell",[0,-.22,0],[.32,.28,.32],re.gold,[180,0,0]),z(F,"ring",[0,-.36,0],[.32,.32,.4],re.gold,[90,0,0]),z(F,"sphere",[0,-.39,0],[.07,.07,.07],re.glowC),Jt(F,he,"sphere",[0,-.24,0],.55,re.glowH,At)},orb(F,he){z(F,"sphere",[0,.22,0],[.18,.18,.18],Le("#140a1e",.3)),Jt(F,he,"sphere",[0,.22,0],.3,re.accH,At),Jt(F,he,"ring",[0,.22,0],.3,re.accG,Vt("y",2.2),[70,0,0]),Jt(F,he,"ring",[0,.22,0],.24,re.glowC,Vt("x",-1.6),[0,0,60])}},Sd={spear:25,staff:32,lantern:32,candle:42,bell:35,orb:40,mirror:30,bow:15,trident:30,club:12,hammer:15,axe:15,hook:25,whip:10},Td={bow:90},Sh=(F,he,ae)=>{let Pe=An(ae.r),Se=Pt(X[ae.s]||w.accent);if(z(F,"ring",[0,.06,0],[.075,.075,.3],Pe,[90,0,0]),ae.r>=2&&z(F,"ring",[0,-.02,0],[.07,.07,.3],Pe,[90,0,0]),ae.r>=3&&z(F,"octa",[0,-.14,0],[.06,.08,.06],Se),ae.r>=4)for(let Ce of[-1,1])z(F,"cone",[Ce*.06,.12,0],[.03,.09,.03],Pe,[0,0,Ce*-60]);ae.r>=5&&(z(F,"octa",[0,.13,0],[.07,.09,.07],Se),Jt(F,he,"sphere",[0,.13,0],.13,Pt(X[ae.s]||w.accent,.3),At))},Ad=[1,1,1.04,1.08,1.13,1.18],qs=w.prop==="shield"?B.side:w.prop==="daggers"?"dagger":w.prop,Th=!1;if(q.traverse(F=>{F.name==="Sword"&&(F.visible=Th),F.name==="Backpack"&&(B.cape||B.pack===!1||B.back)&&(F.visible=!1)}),qs&&!Th&&$o[qs]&&Ee.WristR){let F=qs==="hammer"&&B.big?58:Sd[qs]||0,he=ni(Ee.WristR,q,Ws.R,Vs("R",F),Td[qs]||0);It&&he.scale.multiplyScalar(Ad[It.r]),an("R",he,(ae,Pe)=>{$o[qs](ae,Pe),It&&Sh(ae,Pe,It)},Z(It))}if(w.prop==="whip"&&Ee.WristR&&an("Wl",A(Ee.WristR,q,[0,0,0]),(F,he)=>{let ae=Ss(F,he,[0,0,0],(Ce,be)=>{Ce.rotation.y=Math.sin(be*1.7)*.35,Ce.rotation.x=Math.sin(be*2.3)*.06},.6),Pe=[];for(let Ce=0;Ce<=12;Ce++){let be=Ce/12,Ue=be<.7?-Math.pow(be/.7,1.4)*.92:-.92,Qe=.12+be*.75,_e=Math.sin(be*9)*.1*be;Pe.push(new D(-.08-_e,Ue,Qe))}for(let Ce=0;Ce<12;Ce++){let be=Pe[Ce],Ue=Pe[Ce+1],Qe=be.distanceTo(Ue);z(ae,"rod",[(be.x+Ue.x)/2,(be.y+Ue.y)/2,(be.z+Ue.z)/2],[.035-Ce*.002,Qe+.01,.035-Ce*.002],re.accG).quaternion.setFromUnitVectors(new D(0,1,0),Ue.clone().sub(be).normalize())}let Se=Pe[12];z(ae,"sphere",[Se.x,Se.y+.03,Se.z],[.09,.07,.09],re.glowC),z(ae,"cone",[Se.x,Se.y+.12,Se.z],[.08,.2,.08],re.glowC)}),Ee.WristL&&w.prop==="daggers"&&an("L",ni(Ee.WristL,q,Ws.L,Vs("L",0)),(F,he)=>{$o.dagger(F,he),It&&Sh(F,he,It)},Z(It)),Ee.WristL&&w.prop==="shield"){let F=ni(Ee.WristL,q,[0,0,.08],null);F.quaternion.setFromRotationMatrix(new mt().makeBasis(new D(0,0,1),new D(0,-1,0),new D(1,0,0)));let he=B.shield||"round";an("S",F,ae=>{let Pe=Le(B.shieldFace||ge(w.armor,w.accent,.25),.4),Se=Le(It&&It.r>=3?N[It.r]:ge(w.accent,"#c8ccd4",.4),.6);if(he==="kite")z(ae,"box",[0,.1,0],[.4,.42,.035],Pe),z(ae,"cone",[0,-.27,0],[.4,.32,.035],Pe,[180,0,0]),z(ae,"box",[0,0,.022],[.06,.62,.012],Se),z(ae,"box",[0,.14,.022],[.34,.06,.012],Se),z(ae,"ring",[0,.1,0],[.4,.42,.35],Se,[0,0,0]);else if(he==="tower")z(ae,"box",[0,.05,0],[.44,.78,.04],Le(w.armor,.4)),z(ae,"box",[0,.05,-.006],[.5,.84,.03],Pt(w.glow||w.accent,.7)),z(ae,"sphere",[0,.12,.03],[.14,.14,.05],re.glowC),z(ae,"box",[0,.05,.024],[.05,.66,.012],re.gold);else{let Ce=B.big?.62:.56;if(z(ae,"disc",[0,0,0],[Ce,.035,Ce],Pe,[90,0,0]),z(ae,"ring",[0,0,0],[Ce,Ce,.6],B.big?Pt(w.accent):Se),z(ae,"sphere",[0,0,.02],[.12,.12,.08],Se),B.studs)for(let be=0;be<6;be++){let Ue=be*60*pe;z(ae,"sphere",[Math.cos(Ue)*Ce*.36,Math.sin(Ue)*Ce*.36,.02],[.045,.045,.03],Le(w.accent))}if(B.big)for(let be=0;be<8;be++){let Ue=be*45*pe;z(ae,"box",[Math.cos(Ue)*Ce*.3,Math.sin(Ue)*Ce*.3,.02],[.03,Ce*.5,.012],Se,[0,0,be*45+90])}}},It&&It.r>=3?String(It.r):"")}let tn=se&&se.helm,ec=oe[w.gear]?"helm":ve[w.gear]||ye||B.hat?"adorn":"open";if(Ee.Head){let F=ni(Ee.Head,q,[0,0,0],null),he=ce.top,ae=ce.r,Pe=(be,Ue,Qe)=>{if(z(be,"dome",[0,he-.12,-.01],[ae*2.25,ae*1.55,ae*2.35],Ue),z(be,"rod",[0,he-.12,-.01],[ae*2.3,.035,ae*2.4],Ue),z(be,"box",[0,he-.17,ce.face+.012],[.03,.1,.02],Ue),Qe)for(let _e of[-1,1])z(be,"box",[_e*ae*.98,he-.21,.04],[.03,.12,.1],Ue)},Se=be=>{for(let Ue of[-.05,.05])z(be,"sphere",[Ue,ce.eye,ce.face],[.035,.022,.02],Pt(O?"#ff2a2a":w.glow))},Ce=w.gear;an("H",F,(be,Ue)=>{if(Ce==="helm"){let _e=Le(tn?ge(Q[tn.r],w.armor,.3):ge(w.armor,"#c8ccd4",B.helm==="winged"?.2:.5),.6);if(Pe(be,_e,B.helm!=="great"),B.helm==="winged")for(let ot of[-1,1])z(be,"cone",[ot*(ae+.03),he-0,-.05],[.1,.32,.03],Le("#ffffff",.2),[-35,90,ot*-35]),z(be,"cone",[ot*(ae+.02),he-.06,-.08],[.08,.24,.025],re.glowC,[-50,90,ot*-50]);else if(B.helm==="horned"){for(let ot of[-1,1])z(be,"cone",[ot*(ae+.05),he+0,0],[.075,.3,.075],Le("#e8e4da"),[0,0,ot*-35]),z(be,"cone",[ot*(ae+.13),he+.15,0],[.035,.08,.035],re.accG,[0,0,ot*-35]);z(be,"box",[0,he+0,0],[.03,.07,.26],re.acc)}else if(B.helm==="great"){z(be,"rod",[0,he-.2,0],[ae*2.25,.16,ae*2.3],_e),z(be,"box",[0,ce.eye+.005,ce.face+.005],[.17,.022,.02],Le("#141418")),z(be,"box",[0,he-.04,0],[.025,.05,ae*2.1],re.acc);for(let ot of[-1,1])z(be,"sphere",[ot*ae*1.1,he-.15,0],[.04,.04,.04],re.acc)}}else if(Ce==="horns"){z(be,"dome",[0,he-.12,-.01],[ae*2.3,ae*1.7,ae*2.45],Le("#26201e",.5));let _e=Ni("bone",rt("#e8dcc0"),{size:_t});for(let ot of[-1,1])z(be,"rod",[ot*(ae+.03),he-.08,.01],[.085,.12,.085],_e,[0,0,ot*75]),z(be,"rod",[ot*(ae+.1),he-.03,.02],[.07,.12,.07],_e,[-10,0,ot*35]),z(be,"cone",[ot*(ae+.13),he+.07,.04],[.065,.16,.065],_e,[-20,0,ot*5]);z(be,"box",[0,he-.15,ce.face+.01],[.16,.025,.02],re.glowC)}else if(Ce==="halo"){let _e=ne(be,[0,he+.13,-.06]);if(_e.rotation.x=70*pe,z(_e,"ring",[0,0,0],[.34,.34,.5],re.glowC),B.staff==="sun")for(let ot=0;ot<8;ot++){let mn=ot*45*pe;z(_e,"cone",[Math.cos(mn)*.23,Math.sin(mn)*.23,0],[.035,.08,.035],re.gold,[0,0,ot*45-90])}Jt(be,Ue,"sphere",[0,he+.13,-.06],[.42,.12,.42],re.glowH,At)}else if(Ce==="circlet"){let _e=ce.eye+.07;z(be,"ring",[0,_e,0],[ae*1.85,ae*1.95,.2],re.gold,[80,0,0]),z(be,"octa",[0,_e-.005,ae*.95+.02],[.05,.075,.03],re.glowC)}else if(Ce==="bandana"){let _e=bt(B.band||w.accent),ot=ce.eye+.08;z(be,"ring",[0,ot,0],[ae*2.25,ae*2.4,.35],_e,[80,0,0]);let mn=Ss(be,Ue,[0,ot,-ae-.03],(yn,Vn)=>{yn.rotation.x=.5+Math.sin(Vn*3.1+yn.id)*.18,yn.rotation.z=Math.sin(Vn*2.3)*.15},1.6);z(mn,"box",[.03,-.12,-.02],[.05,.26,.012],_e,[0,0,10]),z(mn,"box",[-.03,-.15,-.01],[.05,.32,.012],_e,[0,0,-8]),w.glow&&z(be,"sphere",[0,ot,ae*1.1],[.04,.04,.02],re.glowC)}else if(Ce==="crown"){let _e=Le(B.crownBand||ge(w.accent,"#e8c070",.4),.6),ot=ce.crown,mn=ae*1.05;z(be,"ring",[0,ot,0],[mn*2,mn*2.1,.6],_e,[90,0,0]);let yn=7,Vn=B.crown||"spike";for(let Yn=0;Yn<yn;Yn++){let Oa=Yn/yn*Math.PI*2+Math.PI/2,Ts=Math.cos(Oa)*mn,Ah=Math.sin(Oa)*mn*1.05,tc=Vn==="jagged"?Yn%2?.12:.24:Vn==="coral"?.12+Yn%3*.05:Yn===0?.16:.11,Cd=Vn==="coral"?Yn%2?18:-14:0;z(be,"cone",[Ts,ot+tc/2,Ah],[.05,tc,.05],Vn==="jagged"?Le("#1a1020",.4):_e,[0,0,Cd]),(Vn!=="spike"||Yn===0)&&z(be,"sphere",[Ts,ot+tc+.005,Ah],[.035,.035,.035],re.glowC)}if(B.flame)for(let Yn=0;Yn<3;Yn++)Jt(be,Ue,"cone",[(Yn-1)*.07,ot+.13,mn*.95],[.05,.13,.05],re.glowC,un)}else if(Ce==="mask"){let _e=bt(ge(w.armor,"#000000",.25));z(be,"dome",[0,ce.eye-.07,ce.face-.06],[.22,.1,.17],_e,[90,0,0]),z(be,"box",[0,ce.eye-.035,ce.face+0],[.2,.01,.03],re.acc)}else Ce==="veil"&&(z(be,"cone",[0,he+.02,-.01],[.3,.24,.3],Le("#1a1028")),z(be,"disc",[0,he-.09,-.01],[.42,.012,.42],Le("#1a1028")),z(be,"cone",[0,he-.2,-.04],[.5,.42,.5],Pt("#1a1028",.55)),z(be,"ring",[0,he-.09,0],[.21,.21,.3],re.accG,[90,0,0]));let Qe=re.hair;if(B.hair==="ponytail"){z(be,"sphere",[0,he-.05,-ae*.95],[.07,.07,.07],re.acc);let _e=Ss(be,Ue,[0,he-.05,-ae-.02],(ot,mn)=>{ot.rotation.x=Math.sin(mn*2.2+1)*.08,ot.rotation.z=Math.sin(mn*1.6)*.06},1.3);z(_e,"capsule",[0,-.1,-.06],[.11,.1,.09],Qe,[-30,0,0]),z(_e,"capsule",[0,-.24,-.1],[.08,.1,.07],Qe,[-12,0,0]),z(_e,"cone",[0,-.37,-.11],[.07,.12,.06],Qe,[180,0,0])}else if(B.hair==="braid"){for(let _e=0;_e<6;_e++)z(be,"sphere",[0,he-.12-_e*.075,-ae-.03-_e*.008],[.085-_e*.006,.09,.08-_e*.005],Qe);z(be,"ring",[0,he-.6,-ae-.07],[.05,.05,.4],re.acc,[90,0,0]),z(be,"cone",[0,he-.66,-ae-.07],[.06,.1,.05],Qe,[180,0,0])}else if(B.hair==="bun")z(be,"sphere",[0,he-.02,-ae*.8],[.13,.12,.12],Qe),z(be,"rod",[.04,he+.02,-ae*.8],[.015,.2,.015],re.gold,[0,0,60]);else if(B.hair==="flame")for(let _e=0;_e<5;_e++){let ot=(_e-2)*.5;Jt(be,Ue,"cone",[Math.sin(ot)*.08,he+.04-Math.abs(_e-2)*.03,-.04-Math.cos(ot)*.03],[.09,.26-Math.abs(_e-2)*.05,.09],_e%2?re.glowC:Pt(w.hair),un,[-20,0,(_e-2)*-14])}else B.hair==="long"&&(z(be,"box",[0,he-.33,-ae*.6],[ae*1.9,.36,.08],Qe,[8,0,0]),z(be,"cone",[0,he-.55,-ae*.62],[ae*1.9,.12,.08],Qe,[180,0,0]));if(B.beardBraid){z(be,"ring",[0,-.06,.13],[.05,.05,.4],re.gold,[90,0,0]);for(let _e=0;_e<3;_e++)z(be,"sphere",[0,-.1-_e*.05,.13+_e*.01],[.055-_e*.008,.06,.05],Qe);z(be,"sphere",[0,-.25,.155],[.04,.04,.04],re.gold)}if(B.hat==="straw"){let _e=Le("#d8bb6a"),ot=Le(w.accent);z(be,"disc",[0,he-.04,0],[.62,.02,.62],_e,[-6,0,0]),z(be,"cone",[0,he+.06,-.01],[.32,.2,.32],_e),z(be,"rod",[0,he-.02,-.01],[.27,.04,.27],ot)}ye&&(w.glow||O)&&Ce!=="halo"&&Se(be)}),tn&&an("gH",F,(be,Ue)=>{let Qe=Le(on(tn.r,.4),tn.r===1?0:.6),_e=An(tn.r),ot=Pt(X[tn.s]||w.accent),mn=Le("#5a4232");if(ec==="open"||ec==="adorn"){let yn=ye?ce.eye+.11:ce.eye+.065,Vn=ae*(ye?1.02:1);B.hat?z(be,"rod",[0,he-.005,-.01],[.28,.025,.28],_e):z(be,"ring",[0,yn,-.005],[Vn*1.98,Vn*2.08,tn.r===1?.22:.16],tn.r===1?mn:_e,[80,0,0]);let Yn=B.hat?he:yn,Oa=B.hat?.14:ye?ce.face:Vn*.98+.012;if(tn.r>=2&&z(be,"octa",[0,Yn,Oa],[.035+tn.r*.005,.045+tn.r*.007,.022],tn.r>=3?ot:Qe),tn.r>=3&&!B.hat&&!ye)for(let Ts of[-1,1])z(be,"box",[Ts*(Vn+.005),yn-.035,-.01],[.022,.07,.09],Qe);if(tn.r>=4)for(let Ts of[-1,1])z(be,"cone",[Ts*(Vn+.02),yn+.025,-.03],[.045,.11+(tn.r-4)*.06,.016],_e,[-40,90,Ts*-40]);tn.r>=5&&!B.hat&&z(be,"octa",[0,yn+.03,-Vn-.01],[.05,.08,.03],ot),B.hat&&tn.r>=3&&z(be,"cone",[.1,he+.08,-.08],[.035,.22+tn.r*.02,.018],ot,[-30,0,-30])}else z(be,"rod",[0,he-.115,-.01],[ae*2.4,.03,ae*2.5],_e),tn.r>=2&&z(be,"box",[0,he-.085,ce.face-.01],[.12+tn.r*.01,.03,.025],Qe),tn.r>=3&&z(be,"octa",[0,he-.06,ce.face+0],[.04,.055,.028],ot),tn.r>=4&&z(be,"box",[0,he+.02,-.02],[.025,.06+(tn.r-4)*.04,ae*2],_e)},`${ec}${Z(tn)}`)}let Ed=Ee.Hips?L(Ee.Hips,q):.9;Ee.Hips&&(B.robe||B.coat||B.tabard||B.apron||B.belt||B.scabbard||B.coil)&&an("Hp",A(Ee.Hips,q,[0,0,0]),F=>{let he=bt(B.robeColor||w.cloth||w.armor),ae=Le(w.accent,.3);if(B.robe){let Se=B.robe==="long"?Ed+.12-.07:.45,Ce=B.robeW||1;if(z(F,"taper",[0,.12-Se/2,0],[.5*Ce,Se,.42*Ce],he,[180,0,0]),B.robe==="long"){let be=Se*.42,Ue=bt(ge(B.robeColor||w.cloth||w.armor,"#000000",.18));z(F,"taper",[0,.12-be/2+.01,0],[.53*Ce,be,.45*Ce],Ue,[180,0,0]),z(F,"taper",[0,.12-be+.02,0],[.555*Ce,.03,.47*Ce],ae,[180,0,0])}if(z(F,"taper",[0,.12-Se+.03,0],[.53*Ce,.06,.45*Ce],ae,[180,0,0]),B.robe==="long"&&B.stole!==!1&&z(F,"box",[0,.12-Se/2,.205*Ce],[.12,Se*.96,.02],ae,[-9,0,0]),B.bells)for(let be=0;be<6;be++){let Ue=be/6*Math.PI*2+.3;z(F,"bell",[Math.sin(Ue)*.235*Ce,.12-Se+.05,Math.cos(Ue)*.195*Ce],[.05,.06,.05],re.gold,[180,0,0])}}if(B.coat){let Pe=bt(B.coat===!0?w.armor:B.coat),Se=.5;z(F,"box",[0,.02-Se/2,-.12],[.36,Se,.03],Pe,[8,0,0]);for(let Ce of[-1,1])z(F,"box",[Ce*.15,.02-Se/2,0],[.03,Se,.22],Pe,[0,0,Ce*4]),z(F,"box",[Ce*.12,.02-Se/2,.1],[.1,Se,.03],Pe,[-6,Ce*20,0]);z(F,"box",[0,.02-Se+.02,-.135],[.37,.03,.035],ae,[8,0,0])}if(B.tabard){let Pe=bt(B.tabard),Se=.5;z(F,"box",[0,.25-Se/2+.05,.16],[.22,Se+.25,.02],Pe,[-6,0,0]),z(F,"box",[0,.25-Se/2+.05,-.14],[.22,Se+.25,.02],Pe,[6,0,0]),z(F,"box",[0,.25-Se-.05,.19],[.24,.03,.025],ae,[-6,0,0]),z(F,"box",[0,.25-Se-.05,-.17],[.24,.03,.025],ae,[6,0,0]),B.emblem&&z(F,"octa",[0,.2,.18],[.08,.11,.02],Le(B.emblem,.3))}if(B.apron){let Pe=Le("#4a3426");z(F,"box",[0,.05,.17],[.3,.75,.025],Pe,[-4,0,0]),z(F,"box",[0,-.31,.19],[.31,.03,.03],re.acc,[-4,0,0]),z(F,"box",[.08,-.05,.19],[.1,.1,.02],Le("#3a281c"),[-4,0,0]),z(F,"rod",[.08,-.01,.205],[.012,.12,.012],re.iron,[0,0,20])}if(B.belt){let Pe=Le(B.belt===!0?"#3a2a20":B.belt);z(F,"rod",[0,.1,0],[.38,.05,.32],Pe),z(F,"box",[0,.1,.16],[.07,.06,.02],re.gold),z(F,"box",[-.16,.04,.05],[.06,.1,.08],Pe)}if(B.scabbard&&(z(F,"box",[-.19,-.05,-.02],[.03,.7,.05],Le("#1c1c22"),[62,0,-8]),z(F,"box",[-.19,-.05,-.02],[.035,.05,.06],re.gold,[62,0,-8])),B.coil)for(let Pe=0;Pe<3;Pe++)z(F,"ring",[.2,0-Pe*.012,.03],[.14,.14,.3],Pe===1?re.accG:re.leather,[10,90,0])});let Lt=se&&se.chest,js=B.pauldrons||(Lt?Lt.r===1?"leather":"plate":null);if(js)for(let[F,he]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Ee[he]&&an("P"+F,A(Ee[he],q,[F*.02,.01,0]),(ae,Pe)=>{let Se=(B.pauldronSize||1)*(Lt?.72+Lt.r*.05:1),Ce=Lt?Le(on(Lt.r,.75),Lt.r===1?0:.55):Le(B.pauldronColor||ge(w.armor,"#c8ccd4",.25),.4),be=Lt?An(Lt.r):re.acc,Ue=F*-50,Qe=ne(ae,[0,0,0]);if(Qe.scale.setScalar(Se),js==="leather")z(Qe,"sphere",[F*.02,0,0],[.2,.12,.2],Le("#5a4232"),[0,0,Ue]);else if(js==="shell"){z(Qe,"dome",[F*.02,-.01,0],[.24,.16,.22],Ce,[0,0,Ue]);for(let _e=-1;_e<=1;_e++)z(Qe,"box",[F*.06,.03,_e*.05],[.02,.1,.02],be,[_e*20,0,Ue])}else if(js==="ice"){z(Qe,"dome",[F*.01,-.01,0],[.2,.12,.2],Ce,[0,0,Ue]);for(let _e=-1;_e<=1;_e++)z(Qe,"octa",[F*(.06+Math.abs(_e)*.01),.07-Math.abs(_e)*.02,_e*.05],[.04,.16-Math.abs(_e)*.04,.04],re.accG,[_e*15,0,F*-25])}else if(js==="spike"){z(Qe,"dome",[F*.02,-.01,0],[.24,.17,.24],Ce,[0,0,Ue]);for(let _e=-1;_e<=1;_e++)z(Qe,"cone",[F*.08,.06,_e*.06],[.04,.14,.04],be,[_e*15,0,F*-45])}else{z(Qe,"dome",[F*.02,-.01,0],[.26,.17,.25],Ce,[0,0,Ue]),z(Qe,"ring",[F*0,-.035,0],[.13,.13,.4],be,[90,0,Ue]);for(let _e=1;_e<=2;_e++)z(Qe,"dome",[F*(.03+_e*.012),-.035-_e*.03,0],[.24-_e*.025,.1,.23-_e*.025],Ce,[0,0,Ue-F*8*_e]);for(let _e=-1;_e<=1;_e++)z(Qe,"sphere",[F*.075,.035,_e*.06],[.018,.018,.018],be);Lt&&Lt.r>=3&&z(Qe,"dome",[F*.05,-.07,0],[.22,.12,.22],Ce,[0,0,F*-65]),Lt&&Lt.r>=4&&z(Qe,"ring",[F*.035,-.075,0],[.12,.12,.35],be,[90,0,F*-65])}Lt&&Lt.r>=3&&js!=="leather"&&z(Qe,"octa",[F*.1,.02,0],[.035,.045,.035],Pt(X[Lt.s]||w.accent)),B.aura&&(z(ae,"sphere",[F*.05,.06,0],[.11,.11,.11],re.glowC),Jt(ae,Pe,"sphere",[F*.05,.06,0],.2,re.glowH,At))},Lt?`${Lt.r}${Lt.s?Lt.s[0]:""}`:"");else if(B.aura)for(let[F,he]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Ee[he]&&an("A"+F,A(Ee[he],q,[F*.03,.04,0]),(ae,Pe)=>{z(ae,"sphere",[0,0,0],[.15,.15,.15],re.glowC),Jt(ae,Pe,"sphere",[0,0,0],.3,re.glowH,At)});if(Lt&&Lt.r>=2&&Ee.Chest&&an("gC",A(Ee.Chest,q,[0,0,0]),(F,he)=>{let ae=Le(on(Lt.r),.55),Pe=An(Lt.r),Se=Pt(X[Lt.s]||w.accent),Ce=C==="hooded"?.035:.045,be=.3+Lt.r*.012;z(F,"rod",[0,.13,0],[.24,.05,.2],ae),z(F,"rod",[0,.13,0],[.25,.012,.21],Pe);let Ue=.92+Lt.r*.03;if(z(F,"breast",[0,0,Ce+.075],[Ue,Ue,1],ae,[-6,0,0]),z(F,"box",[0,0,Ce+.1],[.022,.24,.02],Pe,[-6,0,0]),Lt.r>=3&&z(F,"octa",[0,.03,Ce+.115],[.045+Lt.r*.004,.06+Lt.r*.005,.025],Se),Lt.r>=4&&z(F,"box",[0,-.13,Ce+.085],[.24,.025,.03],Pe,[-6,0,0]),Lt.r>=5)for(let Qe of[-1,1])z(F,"box",[Qe*.1,.08,Ce+.1],[.07,.02,.02],Pe,[-6,0,Qe*-25])},Z(Lt)),Ee.Chest&&(B.mantle||B.collar||B.scarf)&&an("Mn",A(Ee.Chest,q,[0,0,0]),(F,he)=>{if(B.mantle==="fur"||B.mantle==="moss"){let ae=Le(B.mantle==="fur"?B.furColor||"#e8e4dc":w.accent),Pe=Le(De(B.mantle==="fur"?B.furColor||"#e8e4dc":w.accent,.75));for(let Se=0;Se<9;Se++){let Ce=Se/8*Math.PI*1.25-Math.PI*.625;z(F,"sphere",[Math.sin(Ce)*.2,.14-Math.abs(Math.sin(Ce))*.03,-Math.cos(Ce)*.1-.02],[.16,.12,.14],Se%2?ae:Pe)}if(z(F,"sphere",[0,.06,-.15],[.36,.2,.14],Pe),B.mantle==="moss")for(let Se=0;Se<5;Se++)z(F,"cone",[-.16+Se*.08,.2,-.12],[.02,.16,.02],Le("#8a9a50"),[-20+Se*5,0,(Se-2)*12])}else if(B.mantle==="ember")for(let ae=0;ae<5;ae++)for(let Pe of[-1,1])Jt(F,he,"cone",[Pe*(.12+ae*.03),.17-ae*.015,-.06-ae*.02],[.06,.2-ae*.02,.06],ae%2?re.glowC:re.accG,un,[-25,0,Pe*(-20-ae*8)]);if(B.collar==="spike")for(let ae=0;ae<7;ae++){let Pe=(ae-3)*.32;z(F,"cone",[Math.sin(Pe)*.17,.27+Math.cos(Pe*1.4)*.05,-.1-Math.cos(Pe)*.03],[.05,.26-Math.abs(ae-3)*.03,.03],ae%2?Le("#1a1020",.4):re.acc,[-15,0,-Pe*40])}if(B.scarf){let ae=bt(B.scarf);z(F,"rod",[0,.16,0],[.22,.07,.2],ae);let Pe=Ss(F,he,[.06,.15,-.1],(Se,Ce)=>{Se.rotation.x=.6+Math.sin(Ce*3.4+Se.id)*.2,Se.rotation.y=Math.sin(Ce*1.9)*.25},1.6);z(Pe,"box",[0,-.18,0],[.07,.36,.012],ae,[0,0,6]),z(Pe,"box",[-.06,-.14,0],[.06,.28,.012],ae,[0,0,-8])}}),Ee.Chest&&(B.cape||w.prop==="bow"||B.back)){let F=A(Ee.Chest,q,[0,0,0]);an("B",F,(he,ae)=>{let Pe=C==="hooded"?-.15:-.14;if(B.cape){let Se=bt(B.capeColor||De(w.armor,.55)),Ce=bt(w.accent),be=B.capeLen||1;for(let _e of[-1,1])z(he,"sphere",[_e*.12,.14,Pe+.04],[.05,.05,.03],re.gold);let Ue=Ss(he,ae,[0,.14,Pe],(_e,ot)=>{_e.rotation.x=.1+Math.sin(ot*1.3+_e.id)*.035;let mn=_e.children[_e.children.length-1],yn=_e.userData.sp;mn.rotation.x=.06+Math.sin(ot*1.9+.8+_e.id)*.08+(yn?yn.ax*.4:0),mn.rotation.z=Math.sin(ot*1.1+_e.id)*.04+(yn?yn.az*.3:0)},1);z(Ue,Ve(.24,.42,.52,.09),[0,0,-.01],[1,1,1],Se),z(Ue,Ve(.22,.39,.5,.085),[0,-.01,-.002],[1,1,1],bt(ge(w.accent,"#000000",.35)));let Qe=ne(Ue,[0,-.47,-.01]);z(Qe,Ve(.4,.56,.06+.5*be,.11),[0,.06,0],[1,1,1],Se),z(Qe,Ve(.56,.57,.045,.11,10,1),[0,-.5*be+.02,.003],[1.01,1,1.01],Ce)}if(w.prop==="bow"){z(he,"rod",[.06,-.05,-.2],[.12,.46,.12],re.leather,[0,0,-25]);for(let Se=0;Se<3;Se++)z(he,"cone",[.15+Se*.03,.2+Se*.01,-.2+(Se-1)*.03],[.04,.08,.015],re.acc,[0,0,-25])}if(B.back==="shovel")z(he,"rod",[0,0,Pe-.04],[.04,1,.04],re.wood,[0,0,35]),z(he,"box",[.3,-.42,Pe-.04],[.2,.26,.02],re.iron,[0,0,35]),z(he,"box",[-.28,.4,Pe-.04],[.14,.04,.04],re.wood,[0,0,35]);else if(B.back==="wings"){let Se=Ni("bone",rt("#fbf6ea")),Ce=Ri(ge(w.accent,"#ffffff",.3));for(let be of[-1,1]){let Ue=Ss(he,ae,[be*.07,.12,Pe-.03],(Qe,_e)=>{Qe.rotation.y=be*(.55+Math.sin(_e*1.4)*.1),Qe.rotation.z=be*Math.sin(_e*1.4)*.05});for(let Qe=0;Qe<4;Qe++)z(Ue,"sphere",[be*(.06+Qe*.07),.2+Qe*.03,-.04],[.13,.1,.035],Se,[0,0,be*-20]);for(let Qe=0;Qe<7;Qe++){let _e=(10+Qe*13)*pe,ot=.48-Math.abs(Qe-3)*.04,mn=Math.cos(_e)*ot/2,yn=-Math.sin(_e)*ot/2;z(Ue,"sphere",[be*(.24+mn),.28+yn,-.05-Qe*.004],[.12,ot,.025],Qe<2?Ce:Se,[0,0,be*(90-(10+Qe*13))])}}}else if(B.back==="sunburst"){let Se=ne(he,[0,.3,Pe-.08]);z(Se,"ring",[0,0,0],[.46,.46,.5],re.gold);for(let Ce=0;Ce<12;Ce++){let be=Ce*30*pe;z(Se,"cone",[Math.cos(be)*.3,Math.sin(be)*.3,0],[.05,Ce%2?.14:.22,.02],re.gold,[0,0,Ce*30-90])}Jt(he,ae,"sphere",[0,.3,Pe-.1],[.5,.5,.1],re.glowH,At)}})}B.shards&&Ee.Hips&&an("Sh",A(Ee.Hips,q,[0,.35,0]),(F,he)=>{let ae=Ss(F,he,[0,0,0],(Pe,Se)=>{Pe.rotation.y=Se*.9,Pe.position.y=Math.sin(Se*1.3)*.04});for(let Pe=0;Pe<5;Pe++){let Se=Pe*72*pe;z(ae,"octa",[Math.cos(Se)*.45,Math.sin(Pe*2.1)*.12,Math.sin(Se)*.45],[.06,.13,.02],Pe%2?re.accG:Le("#cfe4ff",.6),[0,-Pe*72+90,20])}});let Hn=se&&se.boots;if(Hn){let F=B.robe==="long";for(let[he,ae,Pe]of[[1,"LowerLegL","FootL"],[-1,"LowerLegR","FootR"]]){let Se=Le(on(Hn.r),Hn.r===1?0:.55),Ce=An(Hn.r),be=Pt(X[Hn.s]||w.accent);!F&&Ee[ae]&&an("gL"+he,A(Ee[ae],q,[0,0,0]),(Ue,Qe)=>{if(Hn.r===1){z(Ue,"rod",[0,-.24,0],[.125,.22,.125],Le("#5a4232")),z(Ue,"rod",[0,-.16,0],[.13,.02,.13],Le("#3a2a20"));return}z(Ue,"taper",[0,-.21,.005],[.13,.3,.13],Se),z(Ue,"rod",[0,-.355,.005],[.115,.025,.115],Ce),z(Ue,"box",[0,-.2,.06],[.03,.26,.02],Ce),Hn.r>=3&&z(Ue,"sphere",[0,-.03,.035],[.11,.1,.09],Se),Hn.r>=4&&z(Ue,"cone",[he*.065,-.04,0],[.03,.12+(Hn.r-4)*.06,.03],Ce,[0,0,he*-70]),Hn.r>=5&&(z(Ue,"octa",[0,-.03,.085],[.035,.045,.02],be),Jt(Ue,Qe,"sphere",[0,-.03,.08],.1,Pt(X[Hn.s]||w.accent,.35),At))},Z(Hn)),Ee[Pe]&&an("gF"+he,A(Ee[Pe],q,[0,0,0]),Ue=>{if(Hn.r===1){z(Ue,"rod",[0,.06,-.01],[.12,.05,.14],Le("#5a4232"));return}z(Ue,"dome",[0,.02,.06],[.12,.08,.14],Se),z(Ue,"rod",[0,.08,-.01],[.13,.035,.14],Ce),F&&Hn.r>=3&&z(Ue,"octa",[0,.06,.12],[.03,.04,.02],be)},Z(Hn)+(F?"r":""))}}}let Bt=new Map;function yt(S,w,C,q=3.2){let O=`${w}|${q}`;Bt.has(O)||Bt.set(O,{uCrack:{value:new Ie(w).multiplyScalar(.75)},uPulse:{value:1},uScale:{value:q}});let W=Bt.get(O);return S.userData.crack=O,S.onBeforeCompile=H=>{Object.assign(H.uniforms,W),H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
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
  totalEmissiveRadiance += uCrack * (line + heat) * uPulse; diffuseColor.rgb *= 1.0 - line * 0.9; }`)},S.customProgramCacheKey=()=>"sb-crack",C.push(H=>{W.uPulse.value=.75+Math.sin(H*1.6)*.25}),S}let Be={x:.24,y:.27,z:.46};function Ft(S,w,C){let q=ELEMENTS[w]?ELEMENTS[w].color:"#e8553a";S.traverse(ye=>{if(!ye.isMesh)return;let ce=Array.isArray(ye.material)?ye.material:[ye.material];for(let Ee of ce)(Ee.name==="Yeti_Main"||Ee.name==="Yeti_Secondary")&&yt(Ee,q,C)});let O={};S.traverse(ye=>{ye.isBone&&(O[ye.name]=ye)}),S.updateMatrixWorld(!0);let W=le("#1e1a17"),H=le("#110f0d"),se=ee(q),B=ee(q,.3),me=`titan|${w}`,Ae=(ye,ce)=>{let Ee=me+ye;if(!$.has(Ee)){let rt=new Xt;ce(rt),$.set(Ee,{baked:qe(rt),live:[]})}return Tn($.get(Ee).baked)};O.Head&&ni(O.Head,S,[0,0,0],null).add(Ae("H",ce=>{for(let Ee of[-1,1])ie("cone",ce,[Ee*.34,.5,-.02],[.22,.5,.22],W,[0,0,Ee*-42]),ie("cone",ce,[Ee*.56,.8,.08],[.14,.4,.14],H,[-30,0,Ee*-14]),ie("box",ce,[Ee*(Be.x-.02),Be.y+.12,Be.z-.02],[.32,.08,.16],H,[15,0,Ee*-24]);for(let Ee of[-1,1])ie("octa",ce,[Ee*.22,.17,.55],[.2,.09,.12],W,[10,0,Ee*38]),ie("cone",ce,[Ee*.13,.05,.58],[.06,.16,.06],le("#5a4e44"),[-12,0,Ee*-12]);ie("box",ce,[0,-.03,.53],[.42,.06,.12],H,[-8,0,0]),ie("octa",ce,[0,.62,.12],[.3,.6,.26],H,[-15,0,0]),ie("octa",ce,[.13,.56,-.06],[.22,.44,.2],W,[-35,0,-22]),ie("octa",ce,[-.13,.56,-.06],[.22,.44,.2],W,[-35,0,22]),ie("octa",ce,[0,.44,-.3],[.2,.4,.18],H,[-60,0,0])})),O.Torso&&ni(O.Torso,S,[0,0,0],null).add(Ae("T",ye=>{[[0,.45,-.38,.5],[.22,.32,-.35,.36],[-.22,.32,-.35,.36],[0,.15,-.44,.34]].forEach(([ce,Ee,rt,_t],Le)=>{ie("octa",ye,[ce,Ee,rt],[.16,_t,.14],Le%2?H:W,[-50,0,ce*-60])}),ie("sphere",ye,[0,.3,-.33],[.1,.1,.1],se)}));for(let ye of["UpperArmL","UpperArmR"])O[ye]&&ni(O[ye],S,[0,0,0],null).add(Ae(ye,ce=>{ie("octa",ce,[0,.12,0],[.24,.38,.22],W,[0,0,20]),ie("octa",ce,[.06,.02,.12],[.14,.26,.14],H,[30,0,-10]),ie("sphere",ce,[0,.12,0],[.4,.4,.4],B)}))}function pt(S,w){let C=LOOKS[S]||LOOKS.brannoc,q=Le=>w?ge(Le,"#2e1f33",.55):Le,O=le(q(SKIN[C.skin])),W=le(q(C.hair)),H=le(q(C.armor)),se=le(q(De(C.armor,.7))),B=le(q(C.accent)),me=le(q("#b8c0cc"),.6),Ae=le("#2a1f1a"),ye=w||C.glow?ee(w?"#ff2a2a":C.glow):le("#1a141f"),ce=new Xt;ie("capsule",ce,[-.15,.35,0],[.2,.16,.2],se),ie("capsule",ce,[.15,.35,0],[.2,.16,.2],se),ie("box",ce,[-.15,.07,.04],[.2,.14,.3],Ae),ie("box",ce,[.15,.07,.04],[.2,.14,.3],Ae),ie("capsule",ce,[0,.95,0],[.62,.21,.42],H),ie("cyl",ce,[0,.74,0],[.58,.015,.42],B),ie("sphere",ce,[-.33,1.22,0],[.26,.2,.26],B),ie("sphere",ce,[.33,1.22,0],[.26,.2,.26],B);let Ee=ne(ce,[0,1.55,0]);ie("sphere",Ee,[0,0,0],[.5,.54,.5],O),ie("sphere",Ee,[-.1,.02,.22],[.08,.06,.04],ye),ie("sphere",Ee,[.1,.02,.22],[.08,.06,.04],ye),C.gear==="helm"?ie("sphere",Ee,[0,.1,-.01],[.55,.46,.55],me):C.style!=="bald"&&ie("sphere",Ee,[0,.1,-.05],[.54,.44,.52],W);let rt=ne(ce,[-.38,1.18,0]);ie("capsule",rt,[0,-.28,0],[.16,.14,.16],se);let _t=ne(ce,[.38,1.18,0]);return ie("capsule",_t,[0,-.28,0],[.16,.14,.16],se),{model:ce,armL:rt,armR:_t,height:2}}function Je(S){let w=ELEMENTS[S].color,C=le("#6b635c"),q=le("#3d3833"),O=ee(w),W=new Xt;ie("box",W,[-.5,.6,0],[.6,1.2,.6],q),ie("box",W,[.5,.6,0],[.6,1.2,.6],q),ie("box",W,[0,2,0],[2,1.8,1.2],C),ie("box",W,[0,3.25,.1],[1,.9,.9],C),ie("sphere",W,[-.22,3.3,.55],[.2,.12,.06],O),ie("sphere",W,[.22,3.3,.55],[.2,.12,.06],O);let H=ne(W,[-1.25,2.7,0]);ie("box",H,[0,-.8,0],[.6,1.7,.6],C);let se=ne(W,[1.25,2.7,0]);return ie("box",se,[0,-.8,0],[.6,1.7,.6],C),{model:W,armL:H,armR:se,height:4.1}}let Ct=Math.PI-.95,Ht=new D(0,0,(2+-3.6)/2),pn=S=>Math.atan2(Ht.x-S.x,Ht.z-S.z),vt=S=>(S<=.05?1:-1)*(1.05+.2*Math.min(1,Math.abs(S)/1.8));function Yt(S,w,C){let q=C<=1?0:Math.min(S?4:4.8,(S?1:2.2)*(C-1)),O=C<=1?0:-q/2+w*(q/(C-1)),W=C>=4&&w%2?S?.5:.35:0;return S?new D(O,0,2+W):new D(O,0,-3.6-W)}function Kt(S){if(S.gear!==void 0)return S.gear;if(S.side==="A")try{return typeof heroGearLook=="function"&&S.heroUid&&typeof heroByUid=="function"?heroGearLook(heroByUid(S.heroUid)):null}catch{return null}let w=S.level||1;if(w<8)return null;let C=Math.min(5,1+Math.floor(w/12)),q={helm:{r:C,s:""},chest:{r:C,s:""}};return(w>=20||S.boss)&&(q.boots={r:C,s:""},q.weapon={r:C,s:""}),q}let en=S=>S?["weapon","helm","chest","boots"].map(w=>S[w]?`${S[w].r}${S[w].s||""}`:"0").join("."):"";function Bn(S){if(!S.mixer)return S.height;S.mixer.update(.01),S.model.updateMatrixWorld(!0);let w=null;if(S.model.traverse(H=>{!w&&H.isBone&&H.name==="Head"&&(w=H)}),!w)return S.height;let C=new D;w.getWorldPosition(C);let q=C.y+.35,O=new oi,W=new D;return S.model.traverse(H=>{if(!(!H.isMesh||!H.userData.kit||!H.geometry)){for(let se=H;se;se=se.parent)if(se===w){H.geometry.boundingBox||H.geometry.computeBoundingBox(),O.copy(H.geometry.boundingBox).applyMatrix4(H.matrixWorld),q=Math.max(q,Math.min(O.max.y,C.y+.9));break}}}),q}function Ei(S,w,C){let q=S.side==="A",O=S.titan?1:S.boss?1.3:1,H=(S.titan?et("titan","titan",!1,S.el):et(S.template.id,b[S.template.id]||"adventurer",!q&&!S.rival,void 0,Kt(S)))||(S.titan?Je(S.el):pt(S.template.id,!q&&!S.rival)),se=new Xt;se.add(H.model),H.model.scale.multiplyScalar(O);let B=S.titan?new D(0,0,-4):Yt(q,w,C);se.position.copy(B);let me=pn(B);se.rotation.y=me;let Ae=new Tt(new va(.62*(S.titan?2:O),32),ee(ELEMENTS[S.el].color,.35));Ae.rotation.x=-Math.PI/2,Ae.position.y=.02,se.add(Ae);let ye=new Tt(new fs(.72*(S.titan?2:O),.86*(S.titan?2:O),40),new sn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));ye.rotation.x=-Math.PI/2,ye.position.y=.03,se.add(ye),e.add(se);let ce=S.titan?H.height:Bn(H)*O;a.set(S.key,{u:S,root:se,model:H.model,armL:H.armL,armR:H.armR,mixer:H.mixer,actions:H.actions,anim:H.anim,fx:H.fx||[],aura:Ae,ring:ye,home:B.clone(),idleRot:me,height:H.height*O,top:ce,phase:Math.random()*10,busy:!1,dead:!1,fidgetAt:6+Math.random()*10})}function yi(S){for(let[w,C]of a)C.u.side===S&&(e.remove(C.root),a.delete(w))}let hi=0,Un=0,Bi=0,Ur=0,dh=new D,Gr=new D,ka=new D;function ph(S){if(!r)return;let w=Math.min(.05,(S-s)/1e3);s=S;let C=hi>0?w*.06:w;hi=Math.max(0,hi-w);let q=S/1e3;for(let W of a.values()){if(W.mixer&&W.mixer.update(C*p()),W.dead)continue;for(let se of W.fx)se(q);if(!W.mixer)W.model.position.y=Math.sin(q*2.4+W.phase)*.025,!W.busy&&W.armR&&(W.armR.rotation.x=(Math.sin(q*2.4+W.phase)*5-8)*Math.PI/180,W.armL.rotation.x=(-Math.sin(q*2.4+W.phase)*4-4)*Math.PI/180);else if(W.anim&&!W.busy&&!W.won&&(W.fidgetAt-=w,W.fidgetAt<=0)){W.fidgetAt=8+Math.random()*12;let se=W.anim.S.fidget.filter(W.anim.has);if(se.length&&W.anim.cur&&W.anim.cur.loop===Do){let B=W.anim.play(se[Math.floor(Math.random()*se.length)],{fade:.35});B&&B.getClip().duration>3&&setTimeout(()=>{W.anim.cur===B&&!W.busy&&W.anim.idle(.4)},2200)}}let H=1+Math.sin(q*3+W.phase)*.05;W.aura.scale.set(H,H,H)}if(c=c.filter(W=>(W.k=Math.min(1,W.k+C*p()/W.dur),W.fn(W.k),W.k>=1?(W.done(),!1):!0)),o=o.filter(W=>W.update(C*p())),Gr.copy(h),ka.copy(Qt),Bi>0){let W=Ui(Bi);ka.lerp(dh,W*.22)}let O=rn*(1-.12*Ui(Bi));if(Math.abs(t.fov-O)>.001&&(t.fov=O,t.updateProjectionMatrix()),Un>0&&(Un=Math.max(0,Un-w),Gr.lerp(ka,.06*Math.sin(Un/.25*Math.PI))),u>0){u-=w;let W=f*Math.max(0,u/.22);Gr.x+=(Math.random()-.5)*W,Gr.y+=(Math.random()-.5)*W}t.position.copy(Gr),t.lookAt(ka),Ot&&Ot.tick(S),je&&je.update(q),Nt?Nt.render(w):r.render(e,t);for(let W of l)W();i=requestAnimationFrame(ph)}function ed(S=6e3,w=120,C=0){if(!window.SB_DEBUG)return!1;let q=performance.now()/1e3;for(let O=0;O<S;O++){q+=1/w;for(let W of a.values()){if(C&&W.root.position.set(W.home.x+Math.sin(q*2.3+W.phase)*C*Math.max(0,Math.sin(q*.7)),W.home.y,W.home.z+Math.sin(q*3.1)*C*.5),W.mixer&&W.mixer.update(1/w),!W.dead)for(let H of W.fx)H(q);W.root.updateMatrixWorld(!0)}}if(C)for(let O of a.values())O.root.position.copy(O.home);return!0}function Gn(S,w){return new Promise(C=>c.push({dur:S,fn:w,done:C,k:0}))}let Ui=S=>1-Math.pow(1-S,3),mh=S=>S<.5?2*S*S:1-Math.pow(-2*S+2,2)/2;function gh(S,w){let C=S.actions&&S.actions[w];if(!C)return!1;for(let q of Object.values(S.actions))q!==C&&q.isRunning()&&q.fadeOut(.15);return C.reset().setEffectiveTimeScale(1).fadeIn(.12).play(),!0}let Yo=new D;function td(S,w="head"){let C=a.get(S);if(!C||!t||!n)return null;let q=w==="feet"?0:w==="center"?C.height*.55:(C.top||C.height)+.12;return Yo.set(C.root.position.x,C.root.position.y+q,C.root.position.z).project(t),{x:(Yo.x+1)/2*n.clientWidth,y:(1-Yo.y)/2*n.clientHeight}}let Hr=S=>{let w=a.get(S);return w?new D(w.root.position.x,w.height*.55,w.root.position.z):null};function nd(S,w){if(!e)return;let C=new Xt,q=new sn({color:new Ie(w),transparent:!0,opacity:.9,depthWrite:!1,blending:Li,side:cn}),O=new Tt(new fs(.75,.82,48),q),W=new Tt(new fs(.5,.54,6),q);C.add(O,W);for(let H=0;H<6;H++){let se=new Tt(new pi(.06,.28),q);se.position.set(Math.cos(H*Math.PI/3)*.64,Math.sin(H*Math.PI/3)*.64,0),se.rotation.z=H*Math.PI/3,C.add(se)}C.rotation.x=-Math.PI/2,C.position.copy(S.root.position).setY(.05),e.add(C),Gn(.75,H=>{C.rotation.z=H*2.2,C.scale.setScalar(.6+Ui(Math.min(1,H*2.5))*.6),q.opacity=.9*(H<.6?1:1-(H-.6)/.4)}).then(()=>{e&&e.remove(C),C.traverse(H=>H.geometry&&H.geometry.dispose()),q.dispose()})}async function id(S,w,C,q={}){let O=a.get(S);if(!O)return;O.busy=!0;let W=a.get(w),H=W?W.root.position.clone().sub(O.home).setY(0):new D(0,0,O.u.side==="A"?-1:1),se=Math.atan2(H.x,H.z),B=O.root.rotation.y,me=O.anim;if(q.ult&&!m){let ye=++Ur;dh.copy(O.root.position).setY(1.2);let ce=Bi;Gn(.25,Ee=>{Ur===ye&&(Bi=ce+(1-ce)*Ee)}).then(()=>Gi(.55)).then(()=>{if(Ur===ye)return Gn(.35,Ee=>{Ur===ye&&(Bi=1-Ee)})})}if(me&&O.u.titan){me.has("Jump")&&me.has("Jump_Land")&&(q.ult||Math.random()<.4)?(me.play("Jump",{fade:.12,speed:1.6,hold:!0}),await Gi(.3),me.play("Jump_Land",{fade:.08,speed:1.4}),await Gi(.12),bh(.35),await Gi(.2)):(me.strike(),await Gi(.5));return}if(me&&C){let ye=O.home.clone().add(H.clone().multiplyScalar(Math.max(.35,1-1.15/Math.max(1.2,H.length()))));me.play("Run",{loop:!0,fade:.12,speed:1.4}),await Gn(.26,ce=>{O.root.position.lerpVectors(O.home,ye,mh(ce)),O.root.rotation.y=B+Fa(B,se)*Ui(Math.min(1,ce*1.6))}),me.strike(),await Gi(.35);return}if(me){O.root.rotation.y=B+Fa(B,se),me.play(q.support&&me.has(me.S.support)?me.S.support:me.S.cast,{fade:.12}),nd(O,ELEMENTS[O.u.el]?ELEMENTS[O.u.el].color:"#ffffff");let ye=O.home.clone().add(H.clone().normalize().multiplyScalar(.2));await Gn(.2,ce=>{O.root.position.lerpVectors(O.home,ye,Ui(ce))}),await Gi(.15);return}let Ae=C?O.home.clone().add(H.clone().multiplyScalar(.55)):O.home.clone().add(H.clone().normalize().multiplyScalar(.25));await Gn(C?.22:.2,ye=>{O.root.position.lerpVectors(O.home,Ae,Ui(ye)),O.armR&&(O.armR.rotation.x=-(C?150:160)*ye*Math.PI/180,C||(O.armL.rotation.x=-160*ye*Math.PI/180))}),C&&O.armR&&await Gn(.1,ye=>{O.armR.rotation.x=(-150+190*ye)*Math.PI/180})}let Fa=(S,w)=>{let C=(w-S)%(Math.PI*2);return C>Math.PI&&(C-=Math.PI*2),C<-Math.PI&&(C+=Math.PI*2),C},Gi=S=>Gn(S,()=>{});async function sd(S){let w=a.get(S);if(!w||w.dead)return;let C=w.root.position.clone(),q=w.root.rotation.y,O=w.idleRot!=null?w.idleRot:w.u.side==="A"?Ct:0,W=w.armR?w.armR.rotation.x:0,H=w.armL?w.armL.rotation.x:0,se=C.distanceTo(w.home)>.6;if(w.anim&&w.u.titan&&Math.random()<.5){let B=["Yes","No","Wave"].filter(w.anim.has);B.length&&w.anim.play(B[Math.floor(Math.random()*B.length)],{fade:.2,speed:1.3})}else w.anim&&se&&w.anim.play(w.anim.has("Run_Back")?"Run_Back":"Run",{loop:!0,fade:.15,speed:1.5});await Gn(.25,B=>{w.root.position.lerpVectors(C,w.home,mh(B)),w.root.rotation.y=q+Fa(q,O)*Ui(B),w.armR&&!w.mixer&&(w.armR.rotation.x=W*(1-B),w.armL.rotation.x=H*(1-B))}),w.anim&&se&&!w.u.titan&&w.anim.idle(.2),w.busy=!1}function rd(S,w){let C=a.get(S);if(!C||C.dead)return;let q=w&&C.u.maxHp?w.amount/C.u.maxHp:0,O=!!(w&&w.crit),W=O||q>.14,H=C.anim;if(O&&(hi=Math.max(hi,m?0:.09),Un=.25),H&&!C.busy?C.u.titan?H.play(H.has("HitReact")?"HitReact":"Idle",{fade:.1}):!W&&w&&(w.em<1||q<.04)&&Math.random()<.35&&H.has("Roll")?H.play("Roll",{fade:.1,speed:1.5}):H.play(W&&H.has("HitRecieve_2")?"HitRecieve_2":"HitRecieve",{fade:.08}):H||gh(C,"hit"),C.u.titan)return;let se=new D(0,0,(C.u.side==="A"?1:-1)*(W?.34:.2)),B=C.root.position.clone();Gn(W?.24:.18,me=>{C.root.position.copy(B).addScaledVector(se,Math.sin(me*Math.PI))})}function ad(S){let w=a.get(S);if(!w||w.dead)return;w.dead=!0;let C=w.root.position.y;(w.anim&&w.anim.has("Death")?(w.anim.play("Death",{fade:.12,clamp:!0}),Promise.resolve()):gh(w,"die")?Promise.resolve():Gn(.45,O=>{w.root.rotation.x=-1.4*Ui(O)*(w.u.side==="A"?-1:1)})).then(()=>Gi(1.1)).then(()=>Gn(.8,O=>{w.root.position.y=C-.9*O})).then(()=>{w.aura.visible=!1,w.ring.visible=!1}),Ms(Hr(S),"#8a8a96",26,1.6,.6,-.3)}function od(S="A"){let w=0;for(let C of a.values()){if(C.u.side!==S||C.dead||!C.anim)continue;C.won=!0,C.busy=!0;let q=C.root.rotation.y,O=.1+w++*.12;Gi(O).then(()=>{Gn(.35,W=>{C.root.rotation.y=q+Fa(q,-.25+C.home.x*.08)*Ui(W)}),C.anim.play(C.anim.S.win,{loop:!0,fade:.25})})}}function cd(S,w){let C=a.get(S);C&&(w?(C.ring.material.color.set(w),C.ring.material.opacity=.85):C.ring.material.opacity=0)}function Ms(S,w,C,q,O,W){if(!S||!e)return;m&&(C=Math.ceil(C/3));let H=new Rt,se=new Float32Array(C*3),B=[];for(let ce=0;ce<C;ce++)se[ce*3]=S.x,se[ce*3+1]=S.y,se[ce*3+2]=S.z,B.push(new D(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(q*(.4+Math.random()*.6)));H.setAttribute("position",new wt(se,3));let me=new Bs({color:new Ie(w),size:O,map:nt(),transparent:!0,depthWrite:!1,blending:Li,sizeAttenuation:!0}),Ae=new us(H,me);e.add(Ae);let ye=0;o.push({update(ce){ye+=ce;let Ee=H.attributes.position.array;for(let rt=0;rt<C;rt++)B[rt].y-=W*ce*6,Ee[rt*3]+=B[rt].x*ce,Ee[rt*3+1]+=B[rt].y*ce,Ee[rt*3+2]+=B[rt].z*ce;return H.attributes.position.needsUpdate=!0,me.opacity=Math.max(0,1-ye/.7),ye>.7?(e&&e.remove(Ae),H.dispose(),me.dispose(),!1):!0}})}function ld(S,w,C){let q=Hr(S);Ms(q,w,C?44:22,C?5:3.2,C?.45:.32,.6),Ms(q,"#ffffff",C?10:5,1.4,C?1.1:.7,0)}function hd(S){let w=a.get(S);w&&Ms(w.root.position.clone().setY(.3),"#7dff8a",18,1,.3,-.6)}function ud(S,w){let C=a.get(S);C&&Ms(C.root.position.clone().setY(.4),w?"#ffd86a":"#c07aff",10,.9,.28,-.5)}function fd(S,w){let C=a.get(S);C&&Ms(C.root.position.clone().setY(.1),w,26,1.4,.35,-.7)}function dd(S,w,C,q=.3){let O=Hr(S),W=Hr(w);if(!O||!W||!e)return Promise.resolve();let H=new Tt(ue().sphere,ee(ge(C,"#ffffff",.4)));H.scale.setScalar(.3),e.add(H);let se=0;return Gn(q,B=>{H.position.lerpVectors(O,W,B),H.position.y+=Math.sin(B*Math.PI)*.9,++se%2===0&&Ms(H.position.clone(),C,3,.3,.35,0)}).then(()=>{e&&e.remove(H)})}function pd(S,w){let C=Hr(S);if(!C||!e)return;let q=new Tt(new fs(.55,.75,32,1,-.9,2.2),new sn({color:new Ie(w),transparent:!0,side:cn,blending:Li,depthWrite:!1}));q.position.copy(C),q.quaternion.copy(t.quaternion),q.rotateZ(Math.random()*.8-.4),e.add(q),Gn(.22,O=>{q.material.opacity=1-O,q.scale.setScalar(.8+O*.5)}).then(()=>{e&&e.remove(q),q.geometry.dispose(),q.material.dispose()})}function bh(S=.25){m||(u=.22,f=S)}function md(S){l.push(S)}let xh=256,yh=window.SB_VERSION&&window.SB_VERSION.version||"dev",vh="sigilbound.faces.v1",ws=new Map;try{let S=JSON.parse(localStorage.getItem(vh)||"null");if(S&&S.ver===yh)for(let[w,C]of Object.entries(S.faces||{}))ws.set(w,C)}catch{}let Ko=[],Jo=!1,Ln=null,_h=[],Mh=0,Zo=(S,w,C)=>S==="titan"?`titan|${w}`:`${S}|${C?1:0}`;function gd(){clearTimeout(Mh),Mh=setTimeout(()=>{try{localStorage.setItem(vh,JSON.stringify({ver:yh,faces:Object.fromEntries(ws)}))}catch{}},400)}function bd(S,w,C){let q=S==="titan"?"titan":b[S]||"adventurer",O=et(S,q,C,w);if(!O)return null;Ln||(Ln=new Aa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(1),Ln.setSize(xh,xh,!1),Ln.outputEncoding=xt,Ln.toneMapping=Sa,Ln.toneMappingExposure=ei.exposure,Ln.setClearColor(0,0));let W=new ls;W.environment=Go(Ln),W.add(new Rr(16774374,3813440,1.3));let H=new Jn(16773597,2.2);H.position.set(-2,3,4),W.add(H);let se=new Jn(16777215,.6);se.position.set(3,1,3),W.add(se);let B=new Jn(w&&ELEMENTS[w]?new Ie(ELEMENTS[w].color):10070783,1.4);B.position.set(2,3,-4),W.add(B);let me=O.model;me.rotation.y=-.35,W.add(me),O.mixer&&O.mixer.update(.6);for(let bt of O.fx||[])bt(.6);me.updateMatrixWorld(!0);let Ae=null;me.traverse(bt=>{!Ae&&bt.isBone&&bt.name==="Head"&&(Ae=bt)});let ye=new D;Ae?Ae.getWorldPosition(ye):ye.set(0,O.height*.8,0);let ce=q==="titan",Ee=ce?2.9:.74;ye.y+=.15;let rt=new gn(28,1,.05,50),_t=Ee/2/Math.tan(14*pe);rt.position.set(ye.x,ye.y+Ee*.08,ye.z+_t),rt.lookAt(ye.x,ye.y-Ee*.04,ye.z),Ln.render(W,rt);let Le=null;try{Le=Ln.domElement.toDataURL("image/webp",.86),Le.startsWith("data:image/webp")||(Le=Ln.domElement.toDataURL("image/png"))}catch{Le=null}return W.traverse(bt=>{bt.isMesh&&(Array.isArray(bt.material)?bt.material:[bt.material]).forEach(Ci=>!Ci.userData.shared&&Ci.dispose&&Ci.dispose())}),Le}function xd(){Jo||(Jo=!0,te().then(()=>{let S=()=>{let w=Ko.shift();if(!w){Jo=!1,Ln&&(Ho(Ln),Ln.dispose(),Ln.forceContextLoss(),Ln=null),gd(),_h.forEach(q=>{try{q()}catch{}});return}let C=Zo(w.id,w.el,w.hollow);if(!ws.has(C))try{let q=bd(w.id,w.el,w.hollow);ws.set(C,q)}catch(q){console.warn("Sigilbound: face failed",w.id,q),ws.set(C,null)}setTimeout(S,0)};S()}))}function yd(S,w,C=!1){if(!_())return null;let q=Zo(S,w,C);return ws.has(q)?ws.get(q):(Ko.some(O=>Zo(O.id,O.el,O.hollow)===q)||Ko.push({id:S,el:w,hollow:C}),xd(),null)}let vd=S=>_h.push(S),Fe={renderer:null,scene:null,camera:null,built:null,key:"",raf:0,last:0,yaw:-.35,spin:0,host:null};function wh(S){if(Fe.raf=0,!Fe.renderer||!Fe.renderer.domElement.isConnected)return;let w=Math.min(.05,(S-Fe.last)/1e3);if(Fe.last=S,Fe.built){Fe.built.mixer&&Fe.built.mixer.update(w);for(let C of Fe.built.fx||[])C(S/1e3);Fe.drag||(Fe.yaw+=Fe.spin*w,Fe.spin*=Math.pow(.04,w)),Fe.built.model.rotation.y=Fe.yaw}Fe.renderer.render(Fe.scene,Fe.camera),Fe.raf=requestAnimationFrame(wh)}function Qo(){if(!Fe.renderer||!Fe.host)return;let S=Fe.host.clientWidth||110,w=Fe.host.clientHeight||165;Fe.renderer.setSize(S,w,!1),Fe.camera.aspect=S/w,Fe.camera.updateProjectionMatrix()}function _d(){let S=new Aa({antialias:!0,alpha:!0});S.setPixelRatio(Math.min(Ot&&Ot.current==="Ultra"?3:2,window.devicePixelRatio||1)),S.outputEncoding=xt,S.toneMapping=Sa,S.toneMappingExposure=ei.exposure,S.setClearColor(0,0),S.domElement.className="show3d",Fe.renderer=S,Fe.scene=new ls,Fe.scene.environment=Go(S),Fe.scene.add(new Rr(16774374,3813440,1.3));let w=new Jn(16773597,2.2);w.position.set(-2,3,4),Fe.scene.add(w);let C=new Jn(16777215,.6);C.position.set(3,1,3),Fe.scene.add(C),Fe.rim=new Jn(10070783,1.4),Fe.rim.position.set(2,3,-4),Fe.scene.add(Fe.rim),Fe.camera=new gn(30,110/165,.1,50);let q=S.domElement,O=0,W=0,H=0,se=0;q.addEventListener("pointerdown",me=>{Fe.drag=!0,O=H=me.clientX,se=performance.now(),W=0,Fe.spin=0,q.setPointerCapture&&q.setPointerCapture(me.pointerId)}),q.addEventListener("pointermove",me=>{if(!Fe.drag)return;let Ae=me.clientX-H,ye=performance.now();Fe.yaw+=Ae*.012,W+=Math.abs(Ae),Fe.spin=Ae*.012/Math.max(.008,(ye-se)/1e3),H=me.clientX,se=ye});let B=()=>{Fe.drag&&(Fe.drag=!1,performance.now()-se>80&&(Fe.spin=0),Fe.spin=Math.max(-8,Math.min(8,Fe.spin)),W<6&&Fe.built&&Fe.built.anim&&Fe.built.anim.strike())};q.addEventListener("pointerup",B),q.addEventListener("pointercancel",B),window.addEventListener("resize",Qo)}function Md(S,w,C,q){if(!S||!_()||!fe)return!1;Fe.renderer||_d();let O=`${w}|${C}|${en(q)}`;if(Fe.key!==O){Fe.built&&Fe.scene.remove(Fe.built.model);let W=et(w,b[w]||"adventurer",!1,C,q||null);if(!W)return!1;Fe.built=W,Fe.key=O,Fe.yaw=-.35,Fe.spin=0,Fe.scene.add(W.model),Fe.rim.color.set(ELEMENTS[C]?ELEMENTS[C].color:"#99aaff"),W.mixer&&W.mixer.update(.5),W.model.updateMatrixWorld(!0);let H=new oi().set(new D(-.45,0,-.45),new D(.45,W.height-.2,.45)),se=new oi;W.model.traverse(_t=>{_t.isMesh&&_t.userData.kit&&_t.geometry&&(_t.geometry.boundingBox||_t.geometry.computeBoundingBox(),H.union(se.copy(_t.geometry.boundingBox).applyMatrix4(_t.matrixWorld)))});let B=Math.min(1.3,Math.max(-H.min.x,H.max.x,-H.min.z,H.max.z)),me=Math.min(-.3,Math.max(-.5,H.min.y)),Ae=Math.max(2.65,Math.min(3.3,H.max.y+.05)),ye=Math.tan(15*pe),ce=(S.clientWidth||110)/(S.clientHeight||165),Ee=Math.max(5.5,Math.max((Ae-me)/2/ye,B/(ye*ce))*1.04+B*.4);Fe.camera.position.set(0,(me+Ae)/2+.18,Ee),Fe.camera.lookAt(0,(me+Ae)/2,0);let rt=ELEMENTS[C]?ELEMENTS[C].color:"#ffffff";Fe.aura?Fe.aura.material=ee(rt,.3):(Fe.aura=new Tt(new va(.6,40),ee(rt,.3)),Fe.aura.rotation.x=-Math.PI/2,Fe.aura.position.y=.01,Fe.scene.add(Fe.aura))}return Fe.host=S,Fe.renderer.domElement.parentNode!==S&&S.prepend(Fe.renderer.domElement),S.classList.add("has3d"),Qo(),Fe.raf||(Fe.last=performance.now(),Fe.raf=requestAnimationFrame(wh)),!0}function wd(S){Fe.renderer&&(S&&!(Fe.host&&Fe.host.matches&&Fe.host.matches(S))||(cancelAnimationFrame(Fe.raf),Fe.raf=0,window.removeEventListener("resize",Qo),Fe.renderer.domElement.remove(),Ho(Fe.renderer),Fe.renderer.dispose(),Fe.renderer.forceContextLoss(),Object.assign(Fe,{renderer:null,scene:null,camera:null,built:null,key:"",host:null,aura:null})))}return J(),{supported:_,mount:Ge,unmount:ke,addUnit:Ei,removeSide:yi,screen:td,attack:id,recover:sd,hit:rd,die:ad,victory:od,setHighlight:cd,setQuality:I,get quality(){return Ot?Ot.current:null},get qualityAuto(){return Ot?Ot.auto:!0},burst:ld,heal:hd,buff:ud,cast:fd,projectile:dd,slash:pd,shake:bh,onFrame:md,whenReady:te,face:yd,onFaces:vd,showcase:Md,showcaseStop:wd,setCamera:ut,cameras:ln,get camera(){return dt()},debugStep:ed,has:S=>a.has(S),get active(){return!!r},get modelsReady(){return fe}}})();window.W3D=E1;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

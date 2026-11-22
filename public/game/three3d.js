"use strict";(()=>{var vl="149";var wd=0,Mh=1,Sd=2;var ya=1,va=2,Yr=3,fi=0,Fn=1,cn=2;var rs=0,as=1,Ii=2,wh=3,Sh=4,Td=5,ar=100,Ad=101,Ed=102,Th=103,Ah=104,Cd=200,Rd=201,Pd=202,Id=203,Yu=204,Ku=205,Ld=206,Dd=207,kd=208,Fd=209,Od=210,Nd=0,zd=1,Bd=2,kc=3,Ud=4,Gd=5,Hd=6,Vd=7,Ju=0,Wd=1,qd=2,ri=0,_l=1,jd=2,Xd=3,_a=4,Yd=5,Zu=300,fr=301,dr=302,Fc=303,Oc=304,Ro=306,Jn=1e3,si=1001,ia=1002,_n=1003,ro=1004;var Jr=1005;var Cn=1006,Ml=1007;var Si=1008;var di=1009,Kd=1010,Jd=1011,Qu=1012,Zd=1013,Ps=1014,ss=1015,Ti=1016,Qd=1017,$d=1018,hr=1020,ep=1021,kn=1023,tp=1024,np=1025,Is=1026,pr=1027,ip=1028,sp=1029,rp=1030,ap=1031,op=1033,Qo=33776,$o=33777,ec=33778,tc=33779,Eh=35840,Ch=35841,Rh=35842,Ph=35843,cp=36196,Ih=37492,Lh=37496,Dh=37808,kh=37809,Fh=37810,Oh=37811,Nh=37812,zh=37813,Bh=37814,Uh=37815,Gh=37816,Hh=37817,Vh=37818,Wh=37819,qh=37820,jh=37821,nc=36492,lp=36283,Xh=36284,Yh=36285,Kh=36286,wl=2200,Po=2201,hp=2202,mr=2300,Ds=2301,ic=2302,or=2400,cr=2401,ao=2402,Sl=2500,up=2501,$u=0,Io=1,Ma=2,Li=3e3,xt=3001,fp=3200,dp=3201,ef=0,pp=1;var Ri="srgb",ks="srgb-linear";var sc=7680;var mp=519,Nc=35044;var Jh="300 es",zc=1035,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,Zr=Math.PI/180,sa=180/Math.PI;function wi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function Rn(r,e,t){return Math.max(e,Math.min(t,r))}function Tl(r,e){return(r%e+e)%e}function gp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function bp(r,e,t){return r!==e?(t-r)/(e-r):0}function Qr(r,e,t){return(1-t)*r+t*e}function xp(r,e,t,n){return Qr(r,e,1-Math.exp(-t*n))}function yp(r,e=1){return e-Math.abs(Tl(r,e*2)-e)}function vp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _p(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Mp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wp(r,e){return r+Math.random()*(e-r)}function Sp(r){return r*(.5-Math.random())}function Tp(r){r!==void 0&&(Zh=r);let e=Zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(r){return r*Zr}function Ep(r){return r*sa}function Bc(r){return(r&r-1)===0&&r!==0}function tf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cp(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var nf=Object.freeze({__proto__:null,DEG2RAD:Zr,RAD2DEG:sa,ceilPowerOfTwo:tf,clamp:Rn,damp:xp,degToRad:Ap,denormalize:Yi,euclideanModulo:Tl,floorPowerOfTwo:oo,generateUUID:wi,inverseLerp:bp,isPowerOfTwo:Bc,lerp:Qr,mapLinear:gp,normalize:qt,pingpong:yp,radToDeg:Ep,randFloat:wp,randFloatSpread:Sp,randInt:Mp,seededRandom:Tp,setQuaternionFromProperEuler:Cp,smootherstep:_p,smoothstep:vp}),Oe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],x=i[6],_=i[1],b=i[4],v=i[7],E=i[2],P=i[5],V=i[8];return s[0]=a*m+o*_+c*E,s[3]=a*p+o*b+c*P,s[6]=a*x+o*v+c*V,s[1]=l*m+h*_+u*E,s[4]=l*p+h*b+u*P,s[7]=l*x+h*v+u*V,s[2]=f*m+d*_+g*E,s[5]=f*p+d*b+g*P,s[8]=f*x+d*v+g*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=u*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(h*t-i*c)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Pn;function sf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ra(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ac={[Ri]:{[ks]:Ls},[ks]:{[Ri]:so}},Dn={legacyMode:!0,get workingColorSpace(){return ks},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ac[e]&&ac[e][t]!==void 0){let n=ac[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={r:0,g:0,b:0},vi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function oc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Fa(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dn.workingColorSpace){if(e=Tl(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=oc(a,s,e+1/3),this.g=oc(a,s,e),this.b=oc(a,s,e-1/3)}return Dn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ri){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ri){let n=rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Dn.fromWorkingColorSpace(Fa(this,vn),e),Rn(vn.r*255,0,255)<<16^Rn(vn.g*255,0,255)<<8^Rn(vn.b*255,0,255)<<0}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dn.workingColorSpace){Dn.fromWorkingColorSpace(Fa(this,vn),t);let n=vn.r,i=vn.g,s=vn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Dn.workingColorSpace){return Dn.fromWorkingColorSpace(Fa(this,vn),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Ri){return Dn.fromWorkingColorSpace(Fa(this,vn),e),e!==Ri?`color(${e} ${vn.r} ${vn.g} ${vn.b})`:`rgb(${vn.r*255|0},${vn.g*255|0},${vn.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(vi),vi.h+=e,vi.s+=t,vi.l+=n,this.setHSL(vi.h,vi.s,vi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ka);let n=Qr(vi.h,ka.h,t),i=Qr(vi.s,ka.s,t),s=Qr(vi.l,ka.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Ie.NAMES=rf;var js,co=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=ra("canvas")),js.width=e.width,js.height=e.height;let n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ls(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lo=class{constructor(e=null){this.isSource=!0,this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(cc(i[a].image)):s.push(cc(i[a]))}else s=cc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function cc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?co.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rp=0,On=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=si,i=si,s=Cn,a=Si,o=kn,c=di,l=r.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=wi(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Zu;On.DEFAULT_ANISOTROPY=1;var Xt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],x=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(d+1)/2,E=(x+1)/2,P=(h+f)/4,V=(u+m)/4,S=(g+p)/4;return b>v&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=P/n,s=V/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=P/i,s=S/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=V/s,i=S/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-m)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bn=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new On(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ho=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uc=class extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u!==m||c!==f||l!==d||h!==g){let p=1-o,x=c*f+l*d+h*g+u*m,_=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){let E=Math.sqrt(b),P=Math.atan2(E,x*_);p=Math.sin(p*P)/E,o=Math.sin(o*P)/E}let v=o*_;if(c=c*p+f*v,l=l*p+d*v,h=h*p+g*v,u=u*p+m*v,p===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,u=c*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=l*c+f*-s+h*-o-u*-a,this.y=h*c+f*-a+u*-s-l*-o,this.z=u*c+f*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new k,Qh=new bn,ai=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],f=e[c+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Ts.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ts)}else n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox),hc.applyMatrix4(e.matrixWorld),this.union(hc);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ts),Ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Oa.subVectors(this.max,Br),Xs.subVectors(e.a,Br),Ys.subVectors(e.b,Br),Ks.subVectors(e.c,Br),$i.subVectors(Ys,Xs),es.subVectors(Ks,Ys),As.subVectors(Xs,Ks);let t=[0,-$i.z,$i.y,0,-es.z,es.y,0,-As.z,As.y,$i.z,0,-$i.x,es.z,0,-es.x,As.z,0,-As.x,-$i.y,$i.x,0,-es.y,es.x,0,-As.y,As.x,0];return!uc(t,Xs,Ys,Ks,Oa)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Xs,Ys,Ks,Oa))?!1:(Na.crossVectors($i,es),t=[Na.x,Na.y,Na.z],uc(t,Xs,Ys,Ks,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ts.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ts).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new k,new k,new k,new k,new k,new k,new k,new k],Ts=new k,hc=new ai,Xs=new k,Ys=new k,Ks=new k,$i=new k,es=new k,As=new k,Br=new k,Oa=new k,Na=new k,Es=new k;function uc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Es.fromArray(r,s);let o=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pp=new ai,Ur=new k,fc=new k,Ji=class{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(fc)),this.expandByPoint(Ur.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new k,dc=new k,za=new k,ts=new k,pc=new k,Ba=new k,mc=new k,aa=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.direction).multiplyScalar(t).add(this.origin),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(dc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=ts.dot(this.direction),c=-ts.dot(za),l=ts.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(za).multiplyScalar(f).add(dc),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){pc.subVectors(t,e),Ba.subVectors(n,e),mc.crossVectors(pc,Ba);let a=this.direction.dot(mc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ts.subVectors(this.origin,e);let c=o*this.direction.dot(Ba.crossVectors(ts,Ba));if(c<0)return null;let l=o*this.direction.dot(pc.cross(ts));if(l<0||c+l>a)return null;let h=-o*ts.dot(mc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,h,u,f,d,g,m,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Js.setFromMatrixColumn(e,0).length(),s=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f-m*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+m,t[1]=c*u,t[5]=m*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-m*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+m,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Lp)}lookAt(e,t,n){let i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ns.crossVectors(n,ni),ns.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ns.crossVectors(n,ni)),ns.normalize(),Ua.crossVectors(ni,ns),i[0]=ns.x,i[4]=Ua.x,i[8]=ni.x,i[1]=ns.y,i[5]=Ua.y,i[9]=ni.y,i[2]=ns.z,i[6]=Ua.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],x=n[14],_=n[3],b=n[7],v=n[11],E=n[15],P=i[0],V=i[4],S=i[8],R=i[12],j=i[1],ee=i[5],K=i[9],X=i[13],Q=i[2],ne=i[6],de=i[10],le=i[14],te=i[3],se=i[7],Me=i[11],Ve=i[15];return s[0]=a*P+o*j+c*Q+l*te,s[4]=a*V+o*ee+c*ne+l*se,s[8]=a*S+o*K+c*de+l*Me,s[12]=a*R+o*X+c*le+l*Ve,s[1]=h*P+u*j+f*Q+d*te,s[5]=h*V+u*ee+f*ne+d*se,s[9]=h*S+u*K+f*de+d*Me,s[13]=h*R+u*X+f*le+d*Ve,s[2]=g*P+m*j+p*Q+x*te,s[6]=g*V+m*ee+p*ne+x*se,s[10]=g*S+m*K+p*de+x*Me,s[14]=g*R+m*X+p*le+x*Ve,s[3]=_*P+b*j+v*Q+E*te,s[7]=_*V+b*ee+v*ne+E*se,s[11]=_*S+b*K+v*de+E*Me,s[15]=_*R+b*X+v*le+E*Ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],x=e[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+m*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+p*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+x*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],x=e[15],_=u*p*l-m*f*l+m*c*d-o*p*d-u*c*x+o*f*x,b=g*f*l-h*p*l-g*c*d+a*p*d+h*c*x-a*f*x,v=h*m*l-g*u*l+g*o*d-a*m*d-h*o*x+a*u*x,E=g*u*c-h*m*c-g*o*f+a*m*f+h*o*p-a*u*p,P=t*_+n*b+i*v+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=_*V,e[1]=(m*f*s-u*p*s-m*i*d+n*p*d+u*i*x-n*f*x)*V,e[2]=(o*p*s-m*c*s+m*i*l-n*p*l-o*i*x+n*c*x)*V,e[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*V,e[4]=b*V,e[5]=(h*p*s-g*f*s+g*i*d-t*p*d-h*i*x+t*f*x)*V,e[6]=(g*c*s-a*p*s-g*i*l+t*p*l+a*i*x-t*c*x)*V,e[7]=(a*f*s-h*c*s+h*i*l-t*f*l-a*i*d+t*c*d)*V,e[8]=v*V,e[9]=(g*u*s-h*m*s-g*n*d+t*m*d+h*n*x-t*u*x)*V,e[10]=(a*m*s-g*o*s+g*n*l-t*m*l-a*n*x+t*o*x)*V,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*V,e[12]=E*V,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*p+t*u*p)*V,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*p-t*o*p)*V,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,m=a*h,p=a*u,x=o*u,_=c*l,b=c*h,v=c*u,E=n.x,P=n.y,V=n.z;return i[0]=(1-(m+x))*E,i[1]=(d+v)*E,i[2]=(g-b)*E,i[3]=0,i[4]=(d-v)*P,i[5]=(1-(f+x))*P,i[6]=(p+_)*P,i[7]=0,i[8]=(g+b)*V,i[9]=(p-_)*V,i[10]=(1-(f+m))*V,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Js.set(i[0],i[1],i[2]).length(),a=Js.set(i[4],i[5],i[6]).length(),o=Js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);let l=1/s,h=1/a,u=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-s),u=(t+e)*c,f=(n+i)*l,d=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Js=new k,_i=new gt,Ip=new k(0,0,0),Lp=new k(1,1,1),ns=new k,Ua=new k,ni=new k,$h=new gt,eu=new bn,gr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gr.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,tu=new k,Zs=new bn,Vi=new gt,Ga=new k,Gr=new k,kp=new k,Fp=new bn,nu=new k(1,0,0),iu=new k(0,1,0),su=new k(0,0,1),Op={type:"added"},ru={type:"removed"},tn=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new k,t=new gr,n=new bn,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Pn}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Gr,Ga,this.up):Vi.lookAt(Ga,Gr,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ru)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(ru)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};tn.DEFAULT_UP=new k(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new k,Wi=new k,gc=new k,qi=new k,Qs=new k,$s=new k,au=new k,bc=new k,xc=new k,yc=new k,$r=class r{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),Wi.subVectors(n,t),gc.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(Wi),c=Mi.dot(gc),l=Wi.dot(Wi),h=Wi.dot(gc),u=a*l-o*o;if(u===0)return s.set(-2,-1,-1);let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi),qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,qi),c.set(0,0),c.addScaledVector(s,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),Wi.subVectors(e,t),Mi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Qs.subVectors(i,n),$s.subVectors(s,n),bc.subVectors(e,n);let c=Qs.dot(bc),l=$s.dot(bc);if(c<=0&&l<=0)return t.copy(n);xc.subVectors(e,i);let h=Qs.dot(xc),u=$s.dot(xc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Qs,a);yc.subVectors(e,s);let d=Qs.dot(yc),g=$s.dot(yc);if(g>=0&&d<=g)return t.copy(s);let m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector($s,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return au.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(au,o);let x=1/(p+m+f);return a=m*x,o=f*x,t.copy(n).addScaledVector(Qs,a).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Np=0,oi=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=as,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yu,this.blendDst=Ku,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gn=new k,Ha=new Oe,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Fs=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fo=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var zp=0,ui=new gt,vc=new tn,er=new k,ii=new ai,Hr=new ai,En=new k,It=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?fo:Fs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(ii.min,Hr.min),ii.expandByPoint(En),En.addVectors(ii.max,Hr.max),ii.expandByPoint(En)):(ii.expandByPoint(Hr.min),ii.expandByPoint(Hr.max))}ii.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)En.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(En));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)En.fromBufferAttribute(o,l),c&&(er.fromBufferAttribute(e,l),En.add(er)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let j=0;j<o;j++)l[j]=new k,h[j]=new k;let u=new k,f=new k,d=new k,g=new Oe,m=new Oe,p=new Oe,x=new k,_=new k;function b(j,ee,K){u.fromArray(i,j*3),f.fromArray(i,ee*3),d.fromArray(i,K*3),g.fromArray(a,j*2),m.fromArray(a,ee*2),p.fromArray(a,K*2),f.sub(u),d.sub(u),m.sub(g),p.sub(g);let X=1/(m.x*p.y-p.x*m.y);isFinite(X)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(X),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(X),l[j].add(x),l[ee].add(x),l[K].add(x),h[j].add(_),h[ee].add(_),h[K].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let j=0,ee=v.length;j<ee;++j){let K=v[j],X=K.start,Q=K.count;for(let ne=X,de=X+Q;ne<de;ne+=3)b(n[ne+0],n[ne+1],n[ne+2])}let E=new k,P=new k,V=new k,S=new k;function R(j){V.fromArray(s,j*3),S.copy(V);let ee=l[j];E.copy(ee),E.sub(V.multiplyScalar(V.dot(ee))).normalize(),P.crossVectors(S,ee);let X=P.dot(h[j])<0?-1:1;c[j*4]=E.x,c[j*4+1]=E.y,c[j*4+2]=E.z,c[j*4+3]=X}for(let j=0,ee=v.length;j<ee;++j){let K=v[j],X=K.start,Q=K.count;for(let ne=X,de=X+Q;ne<de;ne+=3)R(n[ne+0]),R(n[ne+1]),R(n[ne+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new k,s=new k,a=new k,o=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*h;for(let x=0;x<h;x++)f[g++]=l[d++]}return new Tt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new gt,tr=new aa,_c=new Ji,Vr=new k,Wr=new k,qr=new k,Mc=new k,Va=new k,Wa=new Oe,qa=new Oe,ja=new Oe,wc=new k,Xa=new k,Et=class extends tn{constructor(e=new It,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Va.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Mc.fromBufferAttribute(u,e),a?Va.addScaledVector(Mc,h):Va.addScaledVector(Mc.sub(t),h))}t.add(Va)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),e.ray.intersectsSphere(_c)===!1)||(ou.copy(s).invert(),tr.copy(e.ray).applyMatrix4(ou),n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let E=o.getX(b),P=o.getX(b+1),V=o.getX(b+2);a=Ya(this,p,e,tr,l,h,E,P,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);a=Ya(this,i,e,tr,l,h,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,v=_;b<v;b+=3){let E=b,P=b+1,V=b+2;a=Ya(this,p,e,tr,l,h,E,P,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let x=m,_=m+1,b=m+2;a=Ya(this,i,e,tr,l,h,x,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function Bp(r,e,t,n,i,s,a,o){let c;if(e.side===Fn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===fi,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Xa);return l<t.near||l>t.far?null:{distance:l,point:Xa.clone(),object:r}}function Ya(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,Vr),r.getVertexPosition(o,Wr),r.getVertexPosition(c,qr);let l=Bp(r,e,t,n,Vr,Wr,qr,wc);if(l){i&&(Wa.fromBufferAttribute(i,a),qa.fromBufferAttribute(i,o),ja.fromBufferAttribute(i,c),l.uv=$r.getUV(wc,Vr,Wr,qr,Wa,qa,ja,new Oe)),s&&(Wa.fromBufferAttribute(s,a),qa.fromBufferAttribute(s,o),ja.fromBufferAttribute(s,c),l.uv2=$r.getUV(wc,Vr,Wr,qr,Wa,qa,ja,new Oe));let h={a,b:o,c,normal:new k,materialIndex:0};$r.getNormal(Vr,Wr,qr,h.normal),l.face=h}return l}var Ai=class r extends It{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(m,p,x,_,b,v,E,P,V,S,R){let j=v/V,ee=E/S,K=v/2,X=E/2,Q=P/2,ne=V+1,de=S+1,le=0,te=0,se=new k;for(let Me=0;Me<de;Me++){let Ve=Me*ee-X;for(let ie=0;ie<ne;ie++){let me=ie*j-K;se[m]=me*_,se[p]=Ve*b,se[x]=Q,l.push(se.x,se.y,se.z),se[m]=0,se[p]=0,se[x]=P>0?1:-1,h.push(se.x,se.y,se.z),u.push(ie/V),u.push(1-Me/S),le+=1}}for(let Me=0;Me<S;Me++)for(let Ve=0;Ve<V;Ve++){let ie=f+Ve+ne*Me,me=f+Ve+ne*(Me+1),De=f+(Ve+1)+ne*(Me+1),Ge=f+(Ve+1)+ne*Me;c.push(ie,me,Ge),c.push(me,De,Ge),te+=6}o.addGroup(d,te,R),d+=te,f+=le}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wn(r){let e={};for(let t=0;t<r.length;t++){let n=br(r[t]);for(let i in n)e[i]=n[i]}return e}function Up(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function af(r){return r.getRenderTarget()===null&&r.outputEncoding===xt?Ri:ks}var Ir={clone:br,merge:Wn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},po=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nr=-90,ir=1,oa=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new mn(nr,ir,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new mn(nr,ir,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new mn(nr,ir,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new mn(nr,ir,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new mn(nr,ir,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new mn(nr,ir,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},mo=class extends On{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ca=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:rs});s.uniforms.tEquirect.value=t;let a=new Et(i,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Cn),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Sc=new k,Vp=new k,Wp=new Pn,Xi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sc.subVectors(n,t).cross(Vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wp.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new Ji,Ka=new k,la=class{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],x=n[13],_=n[14],b=n[15];return t[0].setComponents(o-i,u-c,m-f,b-p).normalize(),t[1].setComponents(o+i,u+c,m+f,b+p).normalize(),t[2].setComponents(o+s,u+l,m+d,b+x).normalize(),t[3].setComponents(o-s,u-l,m-d,b-x).normalize(),t[4].setComponents(o-a,u-h,m-g,b-_).normalize(),t[5].setComponents(o+a,u+h,m+g,b+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ka.x=i.normal.x>0?e.max.x:e.min.x,Ka.y=i.normal.y>0?e.max.y:e.min.y,Ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function of(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qp(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,d=h.updateRange;r.bindBuffer(u,l),d.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}var pi=class r extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],m=[],p=[];for(let x=0;x<h;x++){let _=x*f-a;for(let b=0;b<l;b++){let v=b*u-s;g.push(v,-_,0),m.push(0,0,1),p.push(b/o),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let b=_+l*x,v=_+l*(x+1),E=_+1+l*(x+1),P=_+1+l*x;d.push(b,v,P),d.push(v,E,P)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp="vec3 transformed = vec3( position );",$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u0=`#define PI 3.141592653589793
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
}`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#endif`,F0=`#if defined( USE_ENVMAP )
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,G0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,am=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Um=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jm=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,bg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,St={alphamap_fragment:jp,alphamap_pars_fragment:Xp,alphatest_fragment:Yp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Zp,begin_vertex:Qp,beginnormal_vertex:$p,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:c0,color_pars_vertex:l0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:b0,encodings_fragment:x0,encodings_pars_fragment:y0,envmap_fragment:v0,envmap_common_pars_fragment:_0,envmap_pars_fragment:M0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:F0,envmap_vertex:S0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:E0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:k0,lights_toon_fragment:O0,lights_toon_pars_fragment:N0,lights_phong_fragment:z0,lights_phong_pars_fragment:B0,lights_physical_fragment:U0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:Y0,map_fragment:K0,map_pars_fragment:J0,map_particle_fragment:Z0,map_particle_pars_fragment:Q0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:cm,normal_vertex:lm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,output_fragment:mm,packing:gm,premultiplied_alpha_fragment:bm,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:vm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Em,skinning_pars_vertex:Cm,skinning_vertex:Rm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:km,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Nm,uv_pars_vertex:zm,uv_vertex:Bm,uv2_pars_fragment:Um,uv2_pars_vertex:Gm,uv2_vertex:Hm,worldpos_vertex:Vm,background_vert:Wm,background_frag:qm,backgroundCube_vert:jm,backgroundCube_frag:Xm,cube_vert:Ym,cube_frag:Km,depth_vert:Jm,depth_frag:Zm,distanceRGBA_vert:Qm,distanceRGBA_frag:$m,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:dg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:bg,points_vert:xg,points_frag:yg,shadow_vert:vg,shadow_frag:_g,sprite_vert:Mg,sprite_frag:wg},We={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pn},uv2Transform:{value:new Pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}}},Pi={basic:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ie(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Wn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Wn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ie(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Wn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Wn([We.points,We.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Wn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Wn([We.common,We.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Wn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Wn([We.sprite,We.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Wn([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Wn([We.lights,We.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Pi.physical={uniforms:Wn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var Ja={r:0,b:0,g:0};function Sg(r,e,t,n,i,s,a){let o=new Ie(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(p,x){let _=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b));let v=r.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?m(o,c):b&&b.isColor&&(m(b,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ro)?(h===void 0&&(h=new Et(new Ai(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:br(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,V,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=b.encoding!==xt,(u!==b||f!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Et(new pi(2,2),new Mn({name:"BackgroundMaterial",uniforms:br(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=b.encoding!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,x){p.getRGB(Ja,af(r)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function Tg(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function u(Q,ne,de,le,te){let se=!1;if(a){let Me=m(le,de,ne);l!==Me&&(l=Me,d(l.object)),se=x(Q,le,de,te),se&&_(Q,le,de,te)}else{let Me=ne.wireframe===!0;(l.geometry!==le.id||l.program!==de.id||l.wireframe!==Me)&&(l.geometry=le.id,l.program=de.id,l.wireframe=Me,se=!0)}te!==null&&t.update(te,34963),(se||h)&&(h=!1,S(Q,ne,de,le),te!==null&&r.bindBuffer(34963,t.get(te).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(Q){return n.isWebGL2?r.bindVertexArray(Q):s.bindVertexArrayOES(Q)}function g(Q){return n.isWebGL2?r.deleteVertexArray(Q):s.deleteVertexArrayOES(Q)}function m(Q,ne,de){let le=de.wireframe===!0,te=o[Q.id];te===void 0&&(te={},o[Q.id]=te);let se=te[ne.id];se===void 0&&(se={},te[ne.id]=se);let Me=se[le];return Me===void 0&&(Me=p(f()),se[le]=Me),Me}function p(Q){let ne=[],de=[],le=[];for(let te=0;te<i;te++)ne[te]=0,de[te]=0,le[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:de,attributeDivisors:le,object:Q,attributes:{},index:null}}function x(Q,ne,de,le){let te=l.attributes,se=ne.attributes,Me=0,Ve=de.getAttributes();for(let ie in Ve)if(Ve[ie].location>=0){let De=te[ie],Ge=se[ie];if(Ge===void 0&&(ie==="instanceMatrix"&&Q.instanceMatrix&&(Ge=Q.instanceMatrix),ie==="instanceColor"&&Q.instanceColor&&(Ge=Q.instanceColor)),De===void 0||De.attribute!==Ge||Ge&&De.data!==Ge.data)return!0;Me++}return l.attributesNum!==Me||l.index!==le}function _(Q,ne,de,le){let te={},se=ne.attributes,Me=0,Ve=de.getAttributes();for(let ie in Ve)if(Ve[ie].location>=0){let De=se[ie];De===void 0&&(ie==="instanceMatrix"&&Q.instanceMatrix&&(De=Q.instanceMatrix),ie==="instanceColor"&&Q.instanceColor&&(De=Q.instanceColor));let Ge={};Ge.attribute=De,De&&De.data&&(Ge.data=De.data),te[ie]=Ge,Me++}l.attributes=te,l.attributesNum=Me,l.index=le}function b(){let Q=l.newAttributes;for(let ne=0,de=Q.length;ne<de;ne++)Q[ne]=0}function v(Q){E(Q,0)}function E(Q,ne){let de=l.newAttributes,le=l.enabledAttributes,te=l.attributeDivisors;de[Q]=1,le[Q]===0&&(r.enableVertexAttribArray(Q),le[Q]=1),te[Q]!==ne&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Q,ne),te[Q]=ne)}function P(){let Q=l.newAttributes,ne=l.enabledAttributes;for(let de=0,le=ne.length;de<le;de++)ne[de]!==Q[de]&&(r.disableVertexAttribArray(de),ne[de]=0)}function V(Q,ne,de,le,te,se){n.isWebGL2===!0&&(de===5124||de===5125)?r.vertexAttribIPointer(Q,ne,de,te,se):r.vertexAttribPointer(Q,ne,de,le,te,se)}function S(Q,ne,de,le){if(n.isWebGL2===!1&&(Q.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let te=le.attributes,se=de.getAttributes(),Me=ne.defaultAttributeValues;for(let Ve in se){let ie=se[Ve];if(ie.location>=0){let me=te[Ve];if(me===void 0&&(Ve==="instanceMatrix"&&Q.instanceMatrix&&(me=Q.instanceMatrix),Ve==="instanceColor"&&Q.instanceColor&&(me=Q.instanceColor)),me!==void 0){let De=me.normalized,Ge=me.itemSize,pe=t.get(me);if(pe===void 0)continue;let ft=pe.buffer,it=pe.type,Ye=pe.bytesPerElement;if(me.isInterleavedBufferAttribute){let Ue=me.data,je=Ue.stride,Ze=me.offset;if(Ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ie.locationSize;Ne++)E(ie.location+Ne,Ue.meshPerAttribute);Q.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)v(ie.location+Ne);r.bindBuffer(34962,ft);for(let Ne=0;Ne<ie.locationSize;Ne++)V(ie.location+Ne,Ge/ie.locationSize,it,De,je*Ye,(Ze+Ge/ie.locationSize*Ne)*Ye)}else{if(me.isInstancedBufferAttribute){for(let Ue=0;Ue<ie.locationSize;Ue++)E(ie.location+Ue,me.meshPerAttribute);Q.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ue=0;Ue<ie.locationSize;Ue++)v(ie.location+Ue);r.bindBuffer(34962,ft);for(let Ue=0;Ue<ie.locationSize;Ue++)V(ie.location+Ue,Ge/ie.locationSize,it,De,Ge*Ye,Ge/ie.locationSize*Ue*Ye)}}else if(Me!==void 0){let De=Me[Ve];if(De!==void 0)switch(De.length){case 2:r.vertexAttrib2fv(ie.location,De);break;case 3:r.vertexAttrib3fv(ie.location,De);break;case 4:r.vertexAttrib4fv(ie.location,De);break;default:r.vertexAttrib1fv(ie.location,De)}}}}P()}function R(){K();for(let Q in o){let ne=o[Q];for(let de in ne){let le=ne[de];for(let te in le)g(le[te].object),delete le[te];delete ne[de]}delete o[Q]}}function j(Q){if(o[Q.id]===void 0)return;let ne=o[Q.id];for(let de in ne){let le=ne[de];for(let te in le)g(le[te].object),delete le[te];delete ne[de]}delete o[Q.id]}function ee(Q){for(let ne in o){let de=o[ne];if(de[Q.id]===void 0)continue;let le=de[Q.id];for(let te in le)g(le[te].object),delete le[te];delete de[Q.id]}}function K(){X(),h=!0,l!==c&&(l=c,d(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:j,releaseStatesOfProgram:ee,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function Ag(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=c}function Eg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(V){if(V==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),_=r.getParameter(36349),b=f>0,v=a||e.has("OES_texture_float"),E=b&&v,P=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:P}}function Cg(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Xi,o=new Pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let _=s?0:n,b=_*4,v=x.clippingState||null;c.value=v,v=h(g,f,b,d);for(let E=0;E!==b;++E)v[E]=t[E];x.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=c.value,g!==!0||p===null){let x=d+m*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<x)&&(p=new Float32Array(x));for(let b=0,v=d;b!==m;++b,v+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Rg(r){let e=new WeakMap;function t(a,o){return o===Fc?a.mapping=fr:o===Oc&&(a.mapping=dr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Fc||o===Oc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ca(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var os=class extends po{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lr=4,cu=[.125,.215,.35,.446,.526,.582],Rs=20,Tc=new os,lu=new Ie,Ac=null,Cs=(1+Math.sqrt(5))/2,rr=1/Cs,hu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Cs,rr),new k(0,Cs,-rr),new k(rr,0,Cs),new k(-rr,0,Cs),new k(Cs,rr,0),new k(-Cs,rr,0)],xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ac=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ti,format:kn,encoding:Li,depthBuffer:!1},i=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(s)),this._blurMaterial=Ig(s,e,t)}return i}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,i){let o=new mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(lu),h.toneMapping=ri,h.autoClear=!1;let d=new nn({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Et(new Ai,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(lu),m=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(o.up.set(0,c[x],0),o.lookAt(l[x],0,0)):_===1?(o.up.set(0,0,c[x]),o.lookAt(0,l[x],0)):(o.up.set(0,c[x],0),o.lookAt(0,0,l[x]));let b=this._cubeSize;Za(i,_*b,x>2?b:0,b,b),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===fr||e.mapping===dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=hu[(i-1)%hu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Et(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):Rs;p>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rs}`);let x=[],_=0;for(let V=0;V<Rs;++V){let S=V/m,R=Math.exp(-S*S/2);x.push(R),V===0?_+=R:V<p&&(_+=2*R)}for(let V=0;V<x.length;V++)x[V]=x[V]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let v=this._sizeLods[i],E=3*v*(i>b-lr?i-b+lr:0),P=4*(this._cubeSize-v);Za(t,E,P,3*v,2*v),c.setRenderTarget(t),c.render(u,Tc)}};function Pg(r){let e=[],t=[],n=[],i=r,s=r-lr+1+cu.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-lr?c=cu[a-r+lr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,p=2,x=1,_=new Float32Array(m*g*d),b=new Float32Array(p*g*d),v=new Float32Array(x*g*d);for(let P=0;P<d;P++){let V=P%3*2/3-1,S=P>2?0:-1,R=[V,S,0,V+2/3,S,0,V+2/3,S+1,0,V,S,0,V+2/3,S+1,0,V,S+1,0];_.set(R,m*g*P),b.set(f,p*g*P);let j=[P,P,P,P,P,P];v.set(j,x*g*P)}let E=new It;E.setAttribute("position",new Tt(_,m)),E.setAttribute("uv",new Tt(b,p)),E.setAttribute("faceIndex",new Tt(v,x)),e.push(E),i>lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(r,e,t){let n=new Bn(r,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ig(r,e,t){let n=new Float32Array(Rs),i=new k(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function fu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function du(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Lg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fc||c===Oc,h=c===fr||c===dr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new xr(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new xr(r));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kg(r,e,t,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],34962);let d=u.morphAttributes;for(let g in d){let m=d[g];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function l(u){let f=[],d=u.index,g=u.attributes.position,m=0;if(d!==null){let _=d.array;m=d.version;for(let b=0,v=_.length;b<v;b+=3){let E=_[b+0],P=_[b+1],V=_[b+2];f.push(E,P,P,V,V,E)}}else{let _=g.array;m=g.version;for(let b=0,v=_.length/3-1;b<v;b+=3){let E=b+0,P=b+1,V=b+2;f.push(E,P,P,V,V,E)}}let p=new(sf(f)?fo:Fs)(f,1);p.version=m;let x=s.get(u);x&&e.remove(x),s.set(u,p)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fg(r,e,t,n){let i=n.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,d){r.drawElements(s,d,o,f*c),t.update(d,s,1)}function u(f,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*c,g),t.update(d,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function Og(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ng(r,e){return r[0]-e[0]}function zg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bg(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Xt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==m){let ne=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",ne)};p!==void 0&&p.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],V=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],R=0;b===!0&&(R=1),v===!0&&(R=2),E===!0&&(R=3);let j=h.attributes.position.count*R,ee=1;j>e.maxTextureSize&&(ee=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);let K=new Float32Array(j*ee*4*m),X=new ho(K,j,ee,m);X.type=ss,X.needsUpdate=!0;let Q=R*4;for(let de=0;de<m;de++){let le=P[de],te=V[de],se=S[de],Me=j*ee*4*de;for(let Ve=0;Ve<le.count;Ve++){let ie=Ve*Q;b===!0&&(a.fromBufferAttribute(le,Ve),K[Me+ie+0]=a.x,K[Me+ie+1]=a.y,K[Me+ie+2]=a.z,K[Me+ie+3]=0),v===!0&&(a.fromBufferAttribute(te,Ve),K[Me+ie+4]=a.x,K[Me+ie+5]=a.y,K[Me+ie+6]=a.z,K[Me+ie+7]=0),E===!0&&(a.fromBufferAttribute(se,Ve),K[Me+ie+8]=a.x,K[Me+ie+9]=a.y,K[Me+ie+10]=a.z,K[Me+ie+11]=se.itemSize===4?a.w:1)}}p={count:m,texture:X,size:new Oe(j,ee)},s.set(h,p),h.addEventListener("dispose",ne)}let x=0;for(let b=0;b<d.length;b++)x+=d[b];let _=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let g=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<g;v++){let E=m[v];E[0]=v,E[1]=d[v]}m.sort(zg);for(let v=0;v<8;v++)v<g&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ng);let p=h.morphAttributes.position,x=h.morphAttributes.normal,_=0;for(let v=0;v<8;v++){let E=o[v],P=E[0],V=E[1];P!==Number.MAX_SAFE_INTEGER&&V?(p&&h.getAttribute("morphTarget"+v)!==p[P]&&h.setAttribute("morphTarget"+v,p[P]),x&&h.getAttribute("morphNormal"+v)!==x[P]&&h.setAttribute("morphNormal"+v,x[P]),i[v]=V,_+=V):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),x&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let b=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Ug(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var cf=new On,lf=new ho,hf=new Uc,uf=new mo,pu=[],mu=[],gu=new Float32Array(16),bu=new Float32Array(9),xu=new Float32Array(4);function Lr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=pu[i];if(s===void 0&&(s=new Float32Array(i),pu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lo(r,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2fv(this.addr,e),Sn(t,e)}}function Vg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;r.uniform3fv(this.addr,e),Sn(t,e)}}function Wg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4fv(this.addr,e),Sn(t,e)}}function qg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;xu.set(n),r.uniformMatrix2fv(this.addr,!1,xu),Sn(t,n)}}function jg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;bu.set(n),r.uniformMatrix3fv(this.addr,!1,bu),Sn(t,n)}}function Xg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(wn(t,n))return;gu.set(n),r.uniformMatrix4fv(this.addr,!1,gu),Sn(t,n)}}function Yg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2iv(this.addr,e),Sn(t,e)}}function Jg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3iv(this.addr,e),Sn(t,e)}}function Zg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4iv(this.addr,e),Sn(t,e)}}function Qg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $g(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2uiv(this.addr,e),Sn(t,e)}}function eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3uiv(this.addr,e),Sn(t,e)}}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4uiv(this.addr,e),Sn(t,e)}}function nb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cf,i)}function ib(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function sb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function rb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function ab(r){switch(r){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return qg;case 35675:return jg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Zg;case 5125:return Qg;case 36294:return $g;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(r,e){r.uniform1fv(this.addr,e)}function cb(r,e){let t=Lr(e,this.size,2);r.uniform2fv(this.addr,t)}function lb(r,e){let t=Lr(e,this.size,3);r.uniform3fv(this.addr,t)}function hb(r,e){let t=Lr(e,this.size,4);r.uniform4fv(this.addr,t)}function ub(r,e){let t=Lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fb(r,e){let t=Lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function db(r,e){let t=Lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pb(r,e){r.uniform1iv(this.addr,e)}function mb(r,e){r.uniform2iv(this.addr,e)}function gb(r,e){r.uniform3iv(this.addr,e)}function bb(r,e){r.uniform4iv(this.addr,e)}function xb(r,e){r.uniform1uiv(this.addr,e)}function yb(r,e){r.uniform2uiv(this.addr,e)}function vb(r,e){r.uniform3uiv(this.addr,e)}function _b(r,e){r.uniform4uiv(this.addr,e)}function Mb(r,e,t){let n=this.cache,i=e.length,s=Lo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cf,s[a])}function wb(r,e,t){let n=this.cache,i=e.length,s=Lo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hf,s[a])}function Sb(r,e,t){let n=this.cache,i=e.length,s=Lo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uf,s[a])}function Tb(r,e,t){let n=this.cache,i=e.length,s=Lo(t,i);wn(n,s)||(r.uniform1iv(this.addr,s),Sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lf,s[a])}function Ab(r){switch(r){case 5126:return ob;case 35664:return cb;case 35665:return lb;case 35666:return hb;case 35674:return ub;case 35675:return fb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return bb;case 5125:return xb;case 36294:return yb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Tb}}var Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ab(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ab(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function yu(r,e){r.seq.push(e),r.map[e.id]=e}function Eb(r,e,t){let n=r.name,i=n.length;for(Ec.lastIndex=0;;){let s=Ec.exec(n),a=Ec.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yu(t,l===void 0?new Gc(o,r,e):new Hc(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Vc(o),yu(t,u)),t=u}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Eb(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function vu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Cb=0;function Rb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Pb(r){switch(r){case Li:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function _u(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rb(r.getShaderSource(e),a)}else return i}function Ib(r,e){let t=Pb(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lb(r,e){let t;switch(e){case _l:t="Linear";break;case jd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case _a:t="ACESFilmic";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Db(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kr).join(`
`)}function kb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fb(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Kr(r){return r!==""}function Mu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(r){return r.replace(Ob,Nb)}function Nb(r,e){let t=St[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wc(t)}var zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(r){return r.replace(zb,Bb)}function Bb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ub(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ya?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===va?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yr&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Vb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ju:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ub(t),l=Gb(t),h=Hb(t),u=Vb(t),f=Wb(t),d=t.isWebGL2?"":Db(t),g=kb(s),m=i.createProgram(),p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Kr).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter(Kr).join(`
`),x.length>0&&(x+=`
`)):(p=[Tu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),x=[d,Tu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?St.tonemapping_pars_fragment:"",t.toneMapping!==ri?Lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.encodings_pars_fragment,Ib("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Wc(a),a=Mu(a,t),a=wu(a,t),o=Wc(o),o=Mu(o,t),o=wu(o,t),a=Su(a),o=Su(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+p+a,v=_+x+o,E=vu(i,35633,b),P=vu(i,35632,v);if(i.attachShader(m,E),i.attachShader(m,P),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let R=i.getProgramInfoLog(m).trim(),j=i.getShaderInfoLog(E).trim(),ee=i.getShaderInfoLog(P).trim(),K=!0,X=!0;if(i.getProgramParameter(m,35714)===!1){K=!1;let Q=_u(i,E,"vertex"),ne=_u(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+Q+`
`+ne)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(j===""||ee==="")&&(X=!1);X&&(this.diagnostics={runnable:K,programLog:R,vertexShader:{log:j,prefix:p},fragmentShader:{log:ee,prefix:x}})}i.deleteShader(E),i.deleteShader(P);let V;this.getUniforms=function(){return V===void 0&&(V=new ur(i,m)),V};let S;return this.getAttributes=function(){return S===void 0&&(S=Fb(i,m)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=P,this}var jb=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}};function Xb(r,e,t,n,i,s,a){let o=new uo,c=new qc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S,R,j,ee,K){let X=ee.fog,Q=K.geometry,ne=S.isMeshStandardMaterial?ee.environment:null,de=(S.isMeshStandardMaterial?t:e).get(S.envMap||ne),le=de&&de.mapping===Ro?de.image.height:null,te=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Me=se!==void 0?se.length:0,Ve=0;Q.morphAttributes.position!==void 0&&(Ve=1),Q.morphAttributes.normal!==void 0&&(Ve=2),Q.morphAttributes.color!==void 0&&(Ve=3);let ie,me,De,Ge;if(te){let je=Pi[te];ie=je.vertexShader,me=je.fragmentShader}else ie=S.vertexShader,me=S.fragmentShader,c.update(S),De=c.getVertexShaderID(S),Ge=c.getFragmentShaderID(S);let pe=r.getRenderTarget(),ft=S.alphaTest>0,it=S.clearcoat>0,Ye=S.iridescence>0;return{isWebGL2:h,shaderID:te,shaderName:S.type,vertexShader:ie,fragmentShader:me,defines:S.defines,customVertexShaderID:De,customFragmentShaderID:Ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:pe===null?r.outputEncoding:pe.isXRRenderTarget===!0?pe.texture.encoding:Li,map:!!S.map,matcap:!!S.matcap,envMap:!!de,envMapMode:de&&de.mapping,envMapCubeUVHeight:le,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===pp,tangentSpaceNormalMap:S.normalMapType===ef,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===xt,clearcoat:it,clearcoatMap:it&&!!S.clearcoatMap,clearcoatRoughnessMap:it&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:it&&!!S.clearcoatNormalMap,iridescence:Ye,iridescenceMap:Ye&&!!S.iridescenceMap,iridescenceThicknessMap:Ye&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===as,alphaMap:!!S.alphaMap,alphaTest:ft,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!Q.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!X,useFog:S.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:ri,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Fn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let j in S.defines)R.push(j),R.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(x(R,S),_(R,S),R.push(r.outputEncoding)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputEncoding),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.combine),S.push(R.vertexUvs),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.physicallyCorrectLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.specularIntensityMap&&o.enable(15),R.specularColorMap&&o.enable(16),R.transmission&&o.enable(17),R.transmissionMap&&o.enable(18),R.thicknessMap&&o.enable(19),R.sheen&&o.enable(20),R.sheenColorMap&&o.enable(21),R.sheenRoughnessMap&&o.enable(22),R.decodeVideoTexture&&o.enable(23),R.opaque&&o.enable(24),S.push(o.mask)}function b(S){let R=g[S.type],j;if(R){let ee=Pi[R];j=Ir.clone(ee.uniforms)}else j=S.uniforms;return j}function v(S,R){let j;for(let ee=0,K=l.length;ee<K;ee++){let X=l[ee];if(X.cacheKey===R){j=X,++j.usedTimes;break}}return j===void 0&&(j=new qb(r,R,S,s),l.push(j)),j}function E(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:P,programs:l,dispose:V}}function Yb(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Au(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Eu(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,m,p){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),e++,x}function o(u,f,d,g,m,p){let x=a(u,f,d,g,m,p);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):t.push(x)}function c(u,f,d,g,m,p){let x=a(u,f,d,g,m,p);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):t.unshift(x)}function l(u,f){t.length>1&&t.sort(u||Kb),n.length>1&&n.sort(f||Au),i.length>1&&i.sort(f||Au)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Jb(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Eu,r.set(n,[a])):i>=s.length?(a=new Eu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Zb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ie};break;case"SpotLight":t={position:new k,direction:new k,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function Qb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var $b=0;function ex(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tx(r,e){let t=new Zb,n=Qb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new k);let s=new k,a=new gt,o=new gt;function c(h,u){let f=0,d=0,g=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let m=0,p=0,x=0,_=0,b=0,v=0,E=0,P=0,V=0,S=0;h.sort(ex);let R=u!==!0?Math.PI:1;for(let ee=0,K=h.length;ee<K;ee++){let X=h[ee],Q=X.color,ne=X.intensity,de=X.distance,le=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)f+=Q.r*ne*R,d+=Q.g*ne*R,g+=Q.b*ne*R;else if(X.isLightProbe)for(let te=0;te<9;te++)i.probe[te].addScaledVector(X.sh.coefficients[te],ne);else if(X.isDirectionalLight){let te=t.get(X);if(te.color.copy(X.color).multiplyScalar(X.intensity*R),X.castShadow){let se=X.shadow,Me=n.get(X);Me.shadowBias=se.bias,Me.shadowNormalBias=se.normalBias,Me.shadowRadius=se.radius,Me.shadowMapSize=se.mapSize,i.directionalShadow[m]=Me,i.directionalShadowMap[m]=le,i.directionalShadowMatrix[m]=X.shadow.matrix,v++}i.directional[m]=te,m++}else if(X.isSpotLight){let te=t.get(X);te.position.setFromMatrixPosition(X.matrixWorld),te.color.copy(Q).multiplyScalar(ne*R),te.distance=de,te.coneCos=Math.cos(X.angle),te.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),te.decay=X.decay,i.spot[x]=te;let se=X.shadow;if(X.map&&(i.spotLightMap[V]=X.map,V++,se.updateMatrices(X),X.castShadow&&S++),i.spotLightMatrix[x]=se.matrix,X.castShadow){let Me=n.get(X);Me.shadowBias=se.bias,Me.shadowNormalBias=se.normalBias,Me.shadowRadius=se.radius,Me.shadowMapSize=se.mapSize,i.spotShadow[x]=Me,i.spotShadowMap[x]=le,P++}x++}else if(X.isRectAreaLight){let te=t.get(X);te.color.copy(Q).multiplyScalar(ne),te.halfWidth.set(X.width*.5,0,0),te.halfHeight.set(0,X.height*.5,0),i.rectArea[_]=te,_++}else if(X.isPointLight){let te=t.get(X);if(te.color.copy(X.color).multiplyScalar(X.intensity*R),te.distance=X.distance,te.decay=X.decay,X.castShadow){let se=X.shadow,Me=n.get(X);Me.shadowBias=se.bias,Me.shadowNormalBias=se.normalBias,Me.shadowRadius=se.radius,Me.shadowMapSize=se.mapSize,Me.shadowCameraNear=se.camera.near,Me.shadowCameraFar=se.camera.far,i.pointShadow[p]=Me,i.pointShadowMap[p]=le,i.pointShadowMatrix[p]=X.shadow.matrix,E++}i.point[p]=te,p++}else if(X.isHemisphereLight){let te=t.get(X);te.skyColor.copy(X.color).multiplyScalar(ne*R),te.groundColor.copy(X.groundColor).multiplyScalar(ne*R),i.hemi[b]=te,b++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let j=i.hash;(j.directionalLength!==m||j.pointLength!==p||j.spotLength!==x||j.rectAreaLength!==_||j.hemiLength!==b||j.numDirectionalShadows!==v||j.numPointShadows!==E||j.numSpotShadows!==P||j.numSpotMaps!==V)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=P+V-S,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=S,j.directionalLength=m,j.pointLength=p,j.spotLength=x,j.rectAreaLength=_,j.hemiLength=b,j.numDirectionalShadows=v,j.numPointShadows=E,j.numSpotShadows=P,j.numSpotMaps=V,i.version=$b++)}function l(h,u){let f=0,d=0,g=0,m=0,p=0,x=u.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){let v=h[_];if(v.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),g++}else if(v.isRectAreaLight){let E=i.rectArea[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),o.identity(),a.copy(v.matrixWorld),a.premultiply(x),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function Cu(r,e){let t=new tx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function nx(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Cu(r,e),t.set(s,[c])):a>=o.length?(c=new Cu(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Xc=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yc=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function rx(r,e,t){let n=new la,i=new Oe,s=new Oe,a=new Xt,o=new Xc({depthPacking:dp}),c=new Yc,l={},h=t.maxTextureSize,u={[fi]:Fn,[Fn]:fi,[cn]:cn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Et(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya,this.render=function(v,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let V=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),j=r.state;j.setBlending(rs),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);for(let ee=0,K=v.length;ee<K;ee++){let X=v[ee],Q=X.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let ne=Q.getFrameExtents();if(i.multiply(ne),s.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,Q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,Q.mapSize.y=s.y)),Q.map===null){let le=this.type!==Yr?{minFilter:_n,magFilter:_n}:{};Q.map=new Bn(i.x,i.y,le),Q.map.texture.name=X.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();let de=Q.getViewportCount();for(let le=0;le<de;le++){let te=Q.getViewport(le);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),j.viewport(a),Q.updateMatrices(X,le),n=Q.getFrustum(),b(E,P,Q.camera,X,this.type)}Q.isPointLightShadow!==!0&&this.type===Yr&&x(Q,P),Q.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(V,S,R)};function x(v,E){let P=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(E,null,P,d,m,null)}function _(v,E,P,V,S,R){let j=null,ee=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(ee!==void 0)j=ee;else if(j=P.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let K=j.uuid,X=E.uuid,Q=l[K];Q===void 0&&(Q={},l[K]=Q);let ne=Q[X];ne===void 0&&(ne=j.clone(),Q[X]=ne),j=ne}return j.visible=E.visible,j.wireframe=E.wireframe,R===Yr?j.side=E.shadowSide!==null?E.shadowSide:E.side:j.side=E.shadowSide!==null?E.shadowSide:u[E.side],j.alphaMap=E.alphaMap,j.alphaTest=E.alphaTest,j.map=E.map,j.clipShadows=E.clipShadows,j.clippingPlanes=E.clippingPlanes,j.clipIntersection=E.clipIntersection,j.displacementMap=E.displacementMap,j.displacementScale=E.displacementScale,j.displacementBias=E.displacementBias,j.wireframeLinewidth=E.wireframeLinewidth,j.linewidth=E.linewidth,P.isPointLight===!0&&j.isMeshDistanceMaterial===!0&&(j.referencePosition.setFromMatrixPosition(P.matrixWorld),j.nearDistance=V,j.farDistance=S),j}function b(v,E,P,V,S){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===Yr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);let ee=e.update(v),K=v.material;if(Array.isArray(K)){let X=ee.groups;for(let Q=0,ne=X.length;Q<ne;Q++){let de=X[Q],le=K[de.materialIndex];if(le&&le.visible){let te=_(v,le,V,P.near,P.far,S);r.renderBufferDirect(P,null,ee,te,v,de)}}}else if(K.visible){let X=_(v,K,V,P.near,P.far,S);r.renderBufferDirect(P,null,ee,X,v,null)}}let j=v.children;for(let ee=0,K=j.length;ee<K;ee++)b(j[ee],E,P,V,S)}}function ax(r,e,t){let n=t.isWebGL2;function i(){let $=!1,xe=new Xt,Re=null,qe=new Xt(0,0,0,0);return{setMask:function(nt){Re!==nt&&!$&&(r.colorMask(nt,nt,nt,nt),Re=nt)},setLocked:function(nt){$=nt},setClear:function(nt,pt,rn,un,li){li===!0&&(nt*=un,pt*=un,rn*=un),xe.set(nt,pt,rn,un),qe.equals(xe)===!1&&(r.clearColor(nt,pt,rn,un),qe.copy(xe))},reset:function(){$=!1,Re=null,qe.set(-1,0,0,0)}}}function s(){let $=!1,xe=null,Re=null,qe=null;return{setTest:function(nt){nt?ft(2929):it(2929)},setMask:function(nt){xe!==nt&&!$&&(r.depthMask(nt),xe=nt)},setFunc:function(nt){if(Re!==nt){switch(nt){case Nd:r.depthFunc(512);break;case zd:r.depthFunc(519);break;case Bd:r.depthFunc(513);break;case kc:r.depthFunc(515);break;case Ud:r.depthFunc(514);break;case Gd:r.depthFunc(518);break;case Hd:r.depthFunc(516);break;case Vd:r.depthFunc(517);break;default:r.depthFunc(515)}Re=nt}},setLocked:function(nt){$=nt},setClear:function(nt){qe!==nt&&(r.clearDepth(nt),qe=nt)},reset:function(){$=!1,xe=null,Re=null,qe=null}}}function a(){let $=!1,xe=null,Re=null,qe=null,nt=null,pt=null,rn=null,un=null,li=null;return{setTest:function(Pt){$||(Pt?ft(2960):it(2960))},setMask:function(Pt){xe!==Pt&&!$&&(r.stencilMask(Pt),xe=Pt)},setFunc:function(Pt,Xn,Tn){(Re!==Pt||qe!==Xn||nt!==Tn)&&(r.stencilFunc(Pt,Xn,Tn),Re=Pt,qe=Xn,nt=Tn)},setOp:function(Pt,Xn,Tn){(pt!==Pt||rn!==Xn||un!==Tn)&&(r.stencilOp(Pt,Xn,Tn),pt=Pt,rn=Xn,un=Tn)},setLocked:function(Pt){$=Pt},setClear:function(Pt){li!==Pt&&(r.clearStencil(Pt),li=Pt)},reset:function(){$=!1,xe=null,Re=null,qe=null,nt=null,pt=null,rn=null,un=null,li=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,E=null,P=null,V=null,S=null,R=!1,j=null,ee=null,K=null,X=null,Q=null,ne=r.getParameter(35661),de=!1,le=0,te=r.getParameter(7938);te.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(te)[1]),de=le>=1):te.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),de=le>=2);let se=null,Me={},Ve=r.getParameter(3088),ie=r.getParameter(2978),me=new Xt().fromArray(Ve),De=new Xt().fromArray(ie);function Ge($,xe,Re){let qe=new Uint8Array(4),nt=r.createTexture();r.bindTexture($,nt),r.texParameteri($,10241,9728),r.texParameteri($,10240,9728);for(let pt=0;pt<Re;pt++)r.texImage2D(xe+pt,0,6408,1,1,0,6408,5121,qe);return nt}let pe={};pe[3553]=Ge(3553,3553,1),pe[34067]=Ge(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(2929),c.setFunc(kc),sn(!1),Nt(Mh),ft(2884),$t(rs);function ft($){f[$]!==!0&&(r.enable($),f[$]=!0)}function it($){f[$]!==!1&&(r.disable($),f[$]=!1)}function Ye($,xe){return d[$]!==xe?(r.bindFramebuffer($,xe),d[$]=xe,n&&($===36009&&(d[36160]=xe),$===36160&&(d[36009]=xe)),!0):!1}function Ue($,xe){let Re=m,qe=!1;if($)if(Re=g.get(xe),Re===void 0&&(Re=[],g.set(xe,Re)),$.isWebGLMultipleRenderTargets){let nt=$.texture;if(Re.length!==nt.length||Re[0]!==36064){for(let pt=0,rn=nt.length;pt<rn;pt++)Re[pt]=36064+pt;Re.length=nt.length,qe=!0}}else Re[0]!==36064&&(Re[0]=36064,qe=!0);else Re[0]!==1029&&(Re[0]=1029,qe=!0);qe&&(t.isWebGL2?r.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function je($){return p!==$?(r.useProgram($),p=$,!0):!1}let Ze={[ar]:32774,[Ad]:32778,[Ed]:32779};if(n)Ze[Th]=32775,Ze[Ah]=32776;else{let $=e.get("EXT_blend_minmax");$!==null&&(Ze[Th]=$.MIN_EXT,Ze[Ah]=$.MAX_EXT)}let Ne={[Cd]:0,[Rd]:1,[Pd]:768,[Yu]:770,[Od]:776,[kd]:774,[Ld]:772,[Id]:769,[Ku]:771,[Fd]:775,[Dd]:773};function $t($,xe,Re,qe,nt,pt,rn,un){if($===rs){x===!0&&(it(3042),x=!1);return}if(x===!1&&(ft(3042),x=!0),$!==Td){if($!==_||un!==R){if((b!==ar||P!==ar)&&(r.blendEquation(32774),b=ar,P=ar),un)switch($){case as:r.blendFuncSeparate(1,771,1,771);break;case Ii:r.blendFunc(1,1);break;case wh:r.blendFuncSeparate(0,769,0,1);break;case Sh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case as:r.blendFuncSeparate(770,771,1,771);break;case Ii:r.blendFunc(770,1);break;case wh:r.blendFuncSeparate(0,769,0,1);break;case Sh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,E=null,V=null,S=null,_=$,R=un}return}nt=nt||xe,pt=pt||Re,rn=rn||qe,(xe!==b||nt!==P)&&(r.blendEquationSeparate(Ze[xe],Ze[nt]),b=xe,P=nt),(Re!==v||qe!==E||pt!==V||rn!==S)&&(r.blendFuncSeparate(Ne[Re],Ne[qe],Ne[pt],Ne[rn]),v=Re,E=qe,V=pt,S=rn),_=$,R=!1}function hn($,xe){$.side===cn?it(2884):ft(2884);let Re=$.side===Fn;xe&&(Re=!Re),sn(Re),$.blending===as&&$.transparent===!1?$t(rs):$t($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);let qe=$.stencilWrite;l.setTest(qe),qe&&(l.setMask($.stencilWriteMask),l.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),l.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ht($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ft(32926):it(32926)}function sn($){j!==$&&($?r.frontFace(2304):r.frontFace(2305),j=$)}function Nt($){$!==wd?(ft(2884),$!==ee&&($===Mh?r.cullFace(1029):$===Sd?r.cullFace(1028):r.cullFace(1032))):it(2884),ee=$}function tt($){$!==K&&(de&&r.lineWidth($),K=$)}function ht($,xe,Re){$?(ft(32823),(X!==xe||Q!==Re)&&(r.polygonOffset(xe,Re),X=xe,Q=Re)):it(32823)}function Nn($){$?ft(3089):it(3089)}function xn($){$===void 0&&($=33984+ne-1),se!==$&&(r.activeTexture($),se=$)}function B($,xe,Re){Re===void 0&&(se===null?Re=33984+ne-1:Re=se);let qe=Me[Re];qe===void 0&&(qe={type:void 0,texture:void 0},Me[Re]=qe),(qe.type!==$||qe.texture!==xe)&&(se!==Re&&(r.activeTexture(Re),se=Re),r.bindTexture($,xe||pe[$]),qe.type=$,qe.texture=xe)}function I(){let $=Me[se];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function be(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ze(){try{r.texSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ut(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ot($){me.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),me.copy($))}function st($){De.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),De.copy($))}function At($,xe){let Re=u.get(xe);Re===void 0&&(Re=new WeakMap,u.set(xe,Re));let qe=Re.get($);qe===void 0&&(qe=r.getUniformBlockIndex(xe,$.name),Re.set($,qe))}function vt($,xe){let qe=u.get(xe).get($);h.get(xe)!==qe&&(r.uniformBlockBinding(xe,qe,$.__bindingPointIndex),h.set(xe,qe))}function Kt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},se=null,Me={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,b=null,v=null,E=null,P=null,V=null,S=null,R=!1,j=null,ee=null,K=null,X=null,Q=null,me.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ft,disable:it,bindFramebuffer:Ye,drawBuffers:Ue,useProgram:je,setBlending:$t,setMaterial:hn,setFlipSided:sn,setCullFace:Nt,setLineWidth:tt,setPolygonOffset:ht,setScissorTest:Nn,activeTexture:xn,bindTexture:B,unbindTexture:I,compressedTexImage2D:be,compressedTexImage3D:ke,texImage2D:ut,texImage3D:et,updateUBOMapping:At,uniformBlockBinding:vt,texStorage2D:_e,texStorage3D:at,texSubImage2D:ze,texSubImage3D:Xe,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ke,scissor:ot,viewport:st,reset:Kt}}function ox(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,m,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(B,I){return x?new OffscreenCanvas(B,I):ra("canvas")}function b(B,I,be,ke){let ze=1;if((B.width>ke||B.height>ke)&&(ze=ke/Math.max(B.width,B.height)),ze<1||I===!0)if(typeof HTMLImageElement!="undefined"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&B instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&B instanceof ImageBitmap){let Xe=I?oo:Math.floor,dt=Xe(ze*B.width),Ke=Xe(ze*B.height);m===void 0&&(m=_(dt,Ke));let _e=be?_(dt,Ke):m;return _e.width=dt,_e.height=Ke,_e.getContext("2d").drawImage(B,0,0,dt,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+dt+"x"+Ke+")."),_e}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function v(B){return Bc(B.width)&&Bc(B.height)}function E(B){return o?!1:B.wrapS!==si||B.wrapT!==si||B.minFilter!==_n&&B.minFilter!==Cn}function P(B,I){return B.generateMipmaps&&I&&B.minFilter!==_n&&B.minFilter!==Cn}function V(B){r.generateMipmap(B)}function S(B,I,be,ke,ze=!1){if(o===!1)return I;if(B!==null){if(r[B]!==void 0)return r[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Xe=I;return I===6403&&(be===5126&&(Xe=33326),be===5131&&(Xe=33325),be===5121&&(Xe=33321)),I===33319&&(be===5126&&(Xe=33328),be===5131&&(Xe=33327),be===5121&&(Xe=33323)),I===6408&&(be===5126&&(Xe=34836),be===5131&&(Xe=34842),be===5121&&(Xe=ke===xt&&ze===!1?35907:32856),be===32819&&(Xe=32854),be===32820&&(Xe=32855)),(Xe===33325||Xe===33326||Xe===33327||Xe===33328||Xe===34842||Xe===34836)&&e.get("EXT_color_buffer_float"),Xe}function R(B,I,be){return P(B,be)===!0||B.isFramebufferTexture&&B.minFilter!==_n&&B.minFilter!==Cn?Math.log2(Math.max(I.width,I.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?I.mipmaps.length:1}function j(B){return B===_n||B===ro||B===Jr?9728:9729}function ee(B){let I=B.target;I.removeEventListener("dispose",ee),X(I),I.isVideoTexture&&g.delete(I)}function K(B){let I=B.target;I.removeEventListener("dispose",K),ne(I)}function X(B){let I=n.get(B);if(I.__webglInit===void 0)return;let be=B.source,ke=p.get(be);if(ke){let ze=ke[I.__cacheKey];ze.usedTimes--,ze.usedTimes===0&&Q(B),Object.keys(ke).length===0&&p.delete(be)}n.remove(B)}function Q(B){let I=n.get(B);r.deleteTexture(I.__webglTexture);let be=B.source,ke=p.get(be);delete ke[I.__cacheKey],a.memory.textures--}function ne(B){let I=B.texture,be=n.get(B),ke=n.get(I);if(ke.__webglTexture!==void 0&&(r.deleteTexture(ke.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let ze=0;ze<6;ze++)r.deleteFramebuffer(be.__webglFramebuffer[ze]),be.__webglDepthbuffer&&r.deleteRenderbuffer(be.__webglDepthbuffer[ze]);else{if(r.deleteFramebuffer(be.__webglFramebuffer),be.__webglDepthbuffer&&r.deleteRenderbuffer(be.__webglDepthbuffer),be.__webglMultisampledFramebuffer&&r.deleteFramebuffer(be.__webglMultisampledFramebuffer),be.__webglColorRenderbuffer)for(let ze=0;ze<be.__webglColorRenderbuffer.length;ze++)be.__webglColorRenderbuffer[ze]&&r.deleteRenderbuffer(be.__webglColorRenderbuffer[ze]);be.__webglDepthRenderbuffer&&r.deleteRenderbuffer(be.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let ze=0,Xe=I.length;ze<Xe;ze++){let dt=n.get(I[ze]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(I[ze])}n.remove(I),n.remove(B)}let de=0;function le(){de=0}function te(){let B=de;return B>=c&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+c),de+=1,B}function se(B){let I=[];return I.push(B.wrapS),I.push(B.wrapT),I.push(B.wrapR||0),I.push(B.magFilter),I.push(B.minFilter),I.push(B.anisotropy),I.push(B.internalFormat),I.push(B.format),I.push(B.type),I.push(B.generateMipmaps),I.push(B.premultiplyAlpha),I.push(B.flipY),I.push(B.unpackAlignment),I.push(B.encoding),I.join()}function Me(B,I){let be=n.get(B);if(B.isVideoTexture&&Nn(B),B.isRenderTargetTexture===!1&&B.version>0&&be.__version!==B.version){let ke=B.image;if(ke===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ke.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(be,B,I);return}}t.bindTexture(3553,be.__webglTexture,33984+I)}function Ve(B,I){let be=n.get(B);if(B.version>0&&be.__version!==B.version){it(be,B,I);return}t.bindTexture(35866,be.__webglTexture,33984+I)}function ie(B,I){let be=n.get(B);if(B.version>0&&be.__version!==B.version){it(be,B,I);return}t.bindTexture(32879,be.__webglTexture,33984+I)}function me(B,I){let be=n.get(B);if(B.version>0&&be.__version!==B.version){Ye(be,B,I);return}t.bindTexture(34067,be.__webglTexture,33984+I)}let De={[Jn]:10497,[si]:33071,[ia]:33648},Ge={[_n]:9728,[ro]:9984,[Jr]:9986,[Cn]:9729,[Ml]:9985,[Si]:9987};function pe(B,I,be){if(be?(r.texParameteri(B,10242,De[I.wrapS]),r.texParameteri(B,10243,De[I.wrapT]),(B===32879||B===35866)&&r.texParameteri(B,32882,De[I.wrapR]),r.texParameteri(B,10240,Ge[I.magFilter]),r.texParameteri(B,10241,Ge[I.minFilter])):(r.texParameteri(B,10242,33071),r.texParameteri(B,10243,33071),(B===32879||B===35866)&&r.texParameteri(B,32882,33071),(I.wrapS!==si||I.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(B,10240,j(I.magFilter)),r.texParameteri(B,10241,j(I.minFilter)),I.minFilter!==_n&&I.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ke=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===_n||I.minFilter!==Jr&&I.minFilter!==Si||I.type===ss&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(r.texParameterf(B,ke.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function ft(B,I){let be=!1;B.__webglInit===void 0&&(B.__webglInit=!0,I.addEventListener("dispose",ee));let ke=I.source,ze=p.get(ke);ze===void 0&&(ze={},p.set(ke,ze));let Xe=se(I);if(Xe!==B.__cacheKey){ze[Xe]===void 0&&(ze[Xe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,be=!0),ze[Xe].usedTimes++;let dt=ze[B.__cacheKey];dt!==void 0&&(ze[B.__cacheKey].usedTimes--,dt.usedTimes===0&&Q(I)),B.__cacheKey=Xe,B.__webglTexture=ze[Xe].texture}return be}function it(B,I,be){let ke=3553;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ke=35866),I.isData3DTexture&&(ke=32879);let ze=ft(B,I),Xe=I.source;t.bindTexture(ke,B.__webglTexture,33984+be);let dt=n.get(Xe);if(Xe.version!==dt.__version||ze===!0){t.activeTexture(33984+be),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let Ke=E(I)&&v(I.image)===!1,_e=b(I.image,Ke,!1,h);_e=xn(I,_e);let at=v(_e)||o,ut=s.convert(I.format,I.encoding),et=s.convert(I.type),ot=S(I.internalFormat,ut,et,I.encoding,I.isVideoTexture);pe(ke,I,at);let st,At=I.mipmaps,vt=o&&I.isVideoTexture!==!0,Kt=dt.__version===void 0||ze===!0,$=R(I,_e,at);if(I.isDepthTexture)ot=6402,o?I.type===ss?ot=36012:I.type===Ps?ot=33190:I.type===hr?ot=35056:ot=33189:I.type===ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Is&&ot===6402&&I.type!==Qu&&I.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Ps,et=s.convert(I.type)),I.format===pr&&ot===6402&&(ot=34041,I.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=hr,et=s.convert(I.type))),Kt&&(vt?t.texStorage2D(3553,1,ot,_e.width,_e.height):t.texImage2D(3553,0,ot,_e.width,_e.height,0,ut,et,null));else if(I.isDataTexture)if(At.length>0&&at){vt&&Kt&&t.texStorage2D(3553,$,ot,At[0].width,At[0].height);for(let xe=0,Re=At.length;xe<Re;xe++)st=At[xe],vt?t.texSubImage2D(3553,xe,0,0,st.width,st.height,ut,et,st.data):t.texImage2D(3553,xe,ot,st.width,st.height,0,ut,et,st.data);I.generateMipmaps=!1}else vt?(Kt&&t.texStorage2D(3553,$,ot,_e.width,_e.height),t.texSubImage2D(3553,0,0,0,_e.width,_e.height,ut,et,_e.data)):t.texImage2D(3553,0,ot,_e.width,_e.height,0,ut,et,_e.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){vt&&Kt&&t.texStorage3D(35866,$,ot,At[0].width,At[0].height,_e.depth);for(let xe=0,Re=At.length;xe<Re;xe++)st=At[xe],I.format!==kn?ut!==null?vt?t.compressedTexSubImage3D(35866,xe,0,0,0,st.width,st.height,_e.depth,ut,st.data,0,0):t.compressedTexImage3D(35866,xe,ot,st.width,st.height,_e.depth,0,st.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage3D(35866,xe,0,0,0,st.width,st.height,_e.depth,ut,et,st.data):t.texImage3D(35866,xe,ot,st.width,st.height,_e.depth,0,ut,et,st.data)}else{vt&&Kt&&t.texStorage2D(3553,$,ot,At[0].width,At[0].height);for(let xe=0,Re=At.length;xe<Re;xe++)st=At[xe],I.format!==kn?ut!==null?vt?t.compressedTexSubImage2D(3553,xe,0,0,st.width,st.height,ut,st.data):t.compressedTexImage2D(3553,xe,ot,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage2D(3553,xe,0,0,st.width,st.height,ut,et,st.data):t.texImage2D(3553,xe,ot,st.width,st.height,0,ut,et,st.data)}else if(I.isDataArrayTexture)vt?(Kt&&t.texStorage3D(35866,$,ot,_e.width,_e.height,_e.depth),t.texSubImage3D(35866,0,0,0,0,_e.width,_e.height,_e.depth,ut,et,_e.data)):t.texImage3D(35866,0,ot,_e.width,_e.height,_e.depth,0,ut,et,_e.data);else if(I.isData3DTexture)vt?(Kt&&t.texStorage3D(32879,$,ot,_e.width,_e.height,_e.depth),t.texSubImage3D(32879,0,0,0,0,_e.width,_e.height,_e.depth,ut,et,_e.data)):t.texImage3D(32879,0,ot,_e.width,_e.height,_e.depth,0,ut,et,_e.data);else if(I.isFramebufferTexture){if(Kt)if(vt)t.texStorage2D(3553,$,ot,_e.width,_e.height);else{let xe=_e.width,Re=_e.height;for(let qe=0;qe<$;qe++)t.texImage2D(3553,qe,ot,xe,Re,0,ut,et,null),xe>>=1,Re>>=1}}else if(At.length>0&&at){vt&&Kt&&t.texStorage2D(3553,$,ot,At[0].width,At[0].height);for(let xe=0,Re=At.length;xe<Re;xe++)st=At[xe],vt?t.texSubImage2D(3553,xe,0,0,ut,et,st):t.texImage2D(3553,xe,ot,ut,et,st);I.generateMipmaps=!1}else vt?(Kt&&t.texStorage2D(3553,$,ot,_e.width,_e.height),t.texSubImage2D(3553,0,0,0,ut,et,_e)):t.texImage2D(3553,0,ot,ut,et,_e);P(I,at)&&V(ke),dt.__version=Xe.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function Ye(B,I,be){if(I.image.length!==6)return;let ke=ft(B,I),ze=I.source;t.bindTexture(34067,B.__webglTexture,33984+be);let Xe=n.get(ze);if(ze.version!==Xe.__version||ke===!0){t.activeTexture(33984+be),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);let dt=I.isCompressedTexture||I.image[0].isCompressedTexture,Ke=I.image[0]&&I.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)!dt&&!Ke?_e[xe]=b(I.image[xe],!1,!0,l):_e[xe]=Ke?I.image[xe].image:I.image[xe],_e[xe]=xn(I,_e[xe]);let at=_e[0],ut=v(at)||o,et=s.convert(I.format,I.encoding),ot=s.convert(I.type),st=S(I.internalFormat,et,ot,I.encoding),At=o&&I.isVideoTexture!==!0,vt=Xe.__version===void 0||ke===!0,Kt=R(I,at,ut);pe(34067,I,ut);let $;if(dt){At&&vt&&t.texStorage2D(34067,Kt,st,at.width,at.height);for(let xe=0;xe<6;xe++){$=_e[xe].mipmaps;for(let Re=0;Re<$.length;Re++){let qe=$[Re];I.format!==kn?et!==null?At?t.compressedTexSubImage2D(34069+xe,Re,0,0,qe.width,qe.height,et,qe.data):t.compressedTexImage2D(34069+xe,Re,st,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?t.texSubImage2D(34069+xe,Re,0,0,qe.width,qe.height,et,ot,qe.data):t.texImage2D(34069+xe,Re,st,qe.width,qe.height,0,et,ot,qe.data)}}}else{$=I.mipmaps,At&&vt&&($.length>0&&Kt++,t.texStorage2D(34067,Kt,st,_e[0].width,_e[0].height));for(let xe=0;xe<6;xe++)if(Ke){At?t.texSubImage2D(34069+xe,0,0,0,_e[xe].width,_e[xe].height,et,ot,_e[xe].data):t.texImage2D(34069+xe,0,st,_e[xe].width,_e[xe].height,0,et,ot,_e[xe].data);for(let Re=0;Re<$.length;Re++){let nt=$[Re].image[xe].image;At?t.texSubImage2D(34069+xe,Re+1,0,0,nt.width,nt.height,et,ot,nt.data):t.texImage2D(34069+xe,Re+1,st,nt.width,nt.height,0,et,ot,nt.data)}}else{At?t.texSubImage2D(34069+xe,0,0,0,et,ot,_e[xe]):t.texImage2D(34069+xe,0,st,et,ot,_e[xe]);for(let Re=0;Re<$.length;Re++){let qe=$[Re];At?t.texSubImage2D(34069+xe,Re+1,0,0,et,ot,qe.image[xe]):t.texImage2D(34069+xe,Re+1,st,et,ot,qe.image[xe])}}}P(I,ut)&&V(34067),Xe.__version=ze.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function Ue(B,I,be,ke,ze){let Xe=s.convert(be.format,be.encoding),dt=s.convert(be.type),Ke=S(be.internalFormat,Xe,dt,be.encoding);n.get(I).__hasExternalTextures||(ze===32879||ze===35866?t.texImage3D(ze,0,Ke,I.width,I.height,I.depth,0,Xe,dt,null):t.texImage2D(ze,0,Ke,I.width,I.height,0,Xe,dt,null)),t.bindFramebuffer(36160,B),ht(I)?f.framebufferTexture2DMultisampleEXT(36160,ke,ze,n.get(be).__webglTexture,0,tt(I)):(ze===3553||ze>=34069&&ze<=34074)&&r.framebufferTexture2D(36160,ke,ze,n.get(be).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(B,I,be){if(r.bindRenderbuffer(36161,B),I.depthBuffer&&!I.stencilBuffer){let ke=33189;if(be||ht(I)){let ze=I.depthTexture;ze&&ze.isDepthTexture&&(ze.type===ss?ke=36012:ze.type===Ps&&(ke=33190));let Xe=tt(I);ht(I)?f.renderbufferStorageMultisampleEXT(36161,Xe,ke,I.width,I.height):r.renderbufferStorageMultisample(36161,Xe,ke,I.width,I.height)}else r.renderbufferStorage(36161,ke,I.width,I.height);r.framebufferRenderbuffer(36160,36096,36161,B)}else if(I.depthBuffer&&I.stencilBuffer){let ke=tt(I);be&&ht(I)===!1?r.renderbufferStorageMultisample(36161,ke,35056,I.width,I.height):ht(I)?f.renderbufferStorageMultisampleEXT(36161,ke,35056,I.width,I.height):r.renderbufferStorage(36161,34041,I.width,I.height),r.framebufferRenderbuffer(36160,33306,36161,B)}else{let ke=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ze=0;ze<ke.length;ze++){let Xe=ke[ze],dt=s.convert(Xe.format,Xe.encoding),Ke=s.convert(Xe.type),_e=S(Xe.internalFormat,dt,Ke,Xe.encoding),at=tt(I);be&&ht(I)===!1?r.renderbufferStorageMultisample(36161,at,_e,I.width,I.height):ht(I)?f.renderbufferStorageMultisampleEXT(36161,at,_e,I.width,I.height):r.renderbufferStorage(36161,_e,I.width,I.height)}}r.bindRenderbuffer(36161,null)}function Ze(B,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,B),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Me(I.depthTexture,0);let ke=n.get(I.depthTexture).__webglTexture,ze=tt(I);if(I.depthTexture.format===Is)ht(I)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ke,0,ze):r.framebufferTexture2D(36160,36096,3553,ke,0);else if(I.depthTexture.format===pr)ht(I)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ke,0,ze):r.framebufferTexture2D(36160,33306,3553,ke,0);else throw new Error("Unknown depthTexture format")}function Ne(B){let I=n.get(B),be=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!I.__autoAllocateDepthBuffer){if(be)throw new Error("target.depthTexture not supported in Cube render targets");Ze(I.__webglFramebuffer,B)}else if(be){I.__webglDepthbuffer=[];for(let ke=0;ke<6;ke++)t.bindFramebuffer(36160,I.__webglFramebuffer[ke]),I.__webglDepthbuffer[ke]=r.createRenderbuffer(),je(I.__webglDepthbuffer[ke],B,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=r.createRenderbuffer(),je(I.__webglDepthbuffer,B,!1);t.bindFramebuffer(36160,null)}function $t(B,I,be){let ke=n.get(B);I!==void 0&&Ue(ke.__webglFramebuffer,B,B.texture,36064,3553),be!==void 0&&Ne(B)}function hn(B){let I=B.texture,be=n.get(B),ke=n.get(I);B.addEventListener("dispose",K),B.isWebGLMultipleRenderTargets!==!0&&(ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture()),ke.__version=I.version,a.memory.textures++);let ze=B.isWebGLCubeRenderTarget===!0,Xe=B.isWebGLMultipleRenderTargets===!0,dt=v(B)||o;if(ze){be.__webglFramebuffer=[];for(let Ke=0;Ke<6;Ke++)be.__webglFramebuffer[Ke]=r.createFramebuffer()}else{if(be.__webglFramebuffer=r.createFramebuffer(),Xe)if(i.drawBuffers){let Ke=B.texture;for(let _e=0,at=Ke.length;_e<at;_e++){let ut=n.get(Ke[_e]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&B.samples>0&&ht(B)===!1){let Ke=Xe?I:[I];be.__webglMultisampledFramebuffer=r.createFramebuffer(),be.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,be.__webglMultisampledFramebuffer);for(let _e=0;_e<Ke.length;_e++){let at=Ke[_e];be.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(36161,be.__webglColorRenderbuffer[_e]);let ut=s.convert(at.format,at.encoding),et=s.convert(at.type),ot=S(at.internalFormat,ut,et,at.encoding,B.isXRRenderTarget===!0),st=tt(B);r.renderbufferStorageMultisample(36161,st,ot,B.width,B.height),r.framebufferRenderbuffer(36160,36064+_e,36161,be.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(36161,null),B.depthBuffer&&(be.__webglDepthRenderbuffer=r.createRenderbuffer(),je(be.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(36160,null)}}if(ze){t.bindTexture(34067,ke.__webglTexture),pe(34067,I,dt);for(let Ke=0;Ke<6;Ke++)Ue(be.__webglFramebuffer[Ke],B,I,36064,34069+Ke);P(I,dt)&&V(34067),t.unbindTexture()}else if(Xe){let Ke=B.texture;for(let _e=0,at=Ke.length;_e<at;_e++){let ut=Ke[_e],et=n.get(ut);t.bindTexture(3553,et.__webglTexture),pe(3553,ut,dt),Ue(be.__webglFramebuffer,B,ut,36064+_e,3553),P(ut,dt)&&V(3553)}t.unbindTexture()}else{let Ke=3553;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(o?Ke=B.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ke,ke.__webglTexture),pe(Ke,I,dt),Ue(be.__webglFramebuffer,B,I,36064,Ke),P(I,dt)&&V(Ke),t.unbindTexture()}B.depthBuffer&&Ne(B)}function sn(B){let I=v(B)||o,be=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let ke=0,ze=be.length;ke<ze;ke++){let Xe=be[ke];if(P(Xe,I)){let dt=B.isWebGLCubeRenderTarget?34067:3553,Ke=n.get(Xe).__webglTexture;t.bindTexture(dt,Ke),V(dt),t.unbindTexture()}}}function Nt(B){if(o&&B.samples>0&&ht(B)===!1){let I=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],be=B.width,ke=B.height,ze=16384,Xe=[],dt=B.stencilBuffer?33306:36096,Ke=n.get(B),_e=B.isWebGLMultipleRenderTargets===!0;if(_e)for(let at=0;at<I.length;at++)t.bindFramebuffer(36160,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+at,36161,null),t.bindFramebuffer(36160,Ke.__webglFramebuffer),r.framebufferTexture2D(36009,36064+at,3553,null,0);t.bindFramebuffer(36008,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ke.__webglFramebuffer);for(let at=0;at<I.length;at++){Xe.push(36064+at),B.depthBuffer&&Xe.push(dt);let ut=Ke.__ignoreDepthValues!==void 0?Ke.__ignoreDepthValues:!1;if(ut===!1&&(B.depthBuffer&&(ze|=256),B.stencilBuffer&&(ze|=1024)),_e&&r.framebufferRenderbuffer(36008,36064,36161,Ke.__webglColorRenderbuffer[at]),ut===!0&&(r.invalidateFramebuffer(36008,[dt]),r.invalidateFramebuffer(36009,[dt])),_e){let et=n.get(I[at]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,et,0)}r.blitFramebuffer(0,0,be,ke,0,0,be,ke,ze,9728),d&&r.invalidateFramebuffer(36008,Xe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let at=0;at<I.length;at++){t.bindFramebuffer(36160,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+at,36161,Ke.__webglColorRenderbuffer[at]);let ut=n.get(I[at]).__webglTexture;t.bindFramebuffer(36160,Ke.__webglFramebuffer),r.framebufferTexture2D(36009,36064+at,3553,ut,0)}t.bindFramebuffer(36009,Ke.__webglMultisampledFramebuffer)}}function tt(B){return Math.min(u,B.samples)}function ht(B){let I=n.get(B);return o&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Nn(B){let I=a.render.frame;g.get(B)!==I&&(g.set(B,I),B.update())}function xn(B,I){let be=B.encoding,ke=B.format,ze=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||B.format===zc||be!==Li&&(be===xt?o===!1?e.has("EXT_sRGB")===!0&&ke===kn?(B.format=zc,B.minFilter=Cn,B.generateMipmaps=!1):I=co.sRGBToLinear(I):(ke!==kn||ze!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",be)),I}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=Me,this.setTexture2DArray=Ve,this.setTexture3D=ie,this.setTextureCube=me,this.rebindTextures=$t,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ht}function cx(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===di)return 5121;if(s===Qd)return 32819;if(s===$d)return 32820;if(s===Kd)return 5120;if(s===Jd)return 5122;if(s===Qu)return 5123;if(s===Zd)return 5124;if(s===Ps)return 5125;if(s===ss)return 5126;if(s===Ti)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ep)return 6406;if(s===kn)return 6408;if(s===tp)return 6409;if(s===np)return 6410;if(s===Is)return 6402;if(s===pr)return 34041;if(s===zc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ip)return 6403;if(s===sp)return 36244;if(s===rp)return 33319;if(s===ap)return 33320;if(s===op)return 36249;if(s===Qo||s===$o||s===ec||s===tc)if(a===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ec)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===Ch||s===Rh||s===Ph)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ih||s===Lh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ih)return a===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Lh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dh||s===kh||s===Fh||s===Oh||s===Nh||s===zh||s===Bh||s===Uh||s===Gh||s===Hh||s===Vh||s===Wh||s===qh||s===jh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jh)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===nc)return a===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lp||s===Xh||s===Yh||s===Kh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===nc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Xh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Kc=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Yt=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),x=this._getHandJoint(l,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jc=class extends On{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Is,h!==Is&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Ps),n===void 0&&h===pr&&(n=hr),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1}},Zc=class extends Ki{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,m=t.getContextAttributes(),p=null,x=null,_=[],b=[],v=new Set,E=new Map,P=new mn;P.layers.enable(1),P.viewport=new Xt;let V=new mn;V.layers.enable(2),V.viewport=new Xt;let S=[P,V],R=new Kc;R.layers.enable(1),R.layers.enable(2);let j=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=_[ie];return me===void 0&&(me=new ea,_[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=_[ie];return me===void 0&&(me=new ea,_[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=_[ie];return me===void 0&&(me=new ea,_[ie]=me),me.getHandSpace()};function K(ie){let me=b.indexOf(ie.inputSource);if(me===-1)return;let De=_[me];De!==void 0&&De.dispatchEvent({type:ie.type,data:ie.inputSource})}function X(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<_.length;ie++){let me=b[ie];me!==null&&(b[ie]=null,_[ie].disconnect(me))}j=null,ee=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let me={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:d}),x=new Bn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:di,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let me=null,De=null,Ge=null;m.depth&&(Ge=m.stencil?35056:33190,me=m.stencil?pr:Is,De=m.stencil?hr:Ps);let pe={colorFormat:32856,depthFormat:Ge,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(pe),i.updateRenderState({layers:[f]}),x=new Bn(f.textureWidth,f.textureHeight,{format:kn,type:di,depthTexture:new Jc(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let ft=e.properties.get(x);ft.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Q(ie){for(let me=0;me<ie.removed.length;me++){let De=ie.removed[me],Ge=b.indexOf(De);Ge>=0&&(b[Ge]=null,_[Ge].disconnect(De))}for(let me=0;me<ie.added.length;me++){let De=ie.added[me],Ge=b.indexOf(De);if(Ge===-1){for(let ft=0;ft<_.length;ft++)if(ft>=b.length){b.push(De),Ge=ft;break}else if(b[ft]===null){b[ft]=De,Ge=ft;break}if(Ge===-1)break}let pe=_[Ge];pe&&pe.connect(De)}}let ne=new k,de=new k;function le(ie,me,De){ne.setFromMatrixPosition(me.matrixWorld),de.setFromMatrixPosition(De.matrixWorld);let Ge=ne.distanceTo(de),pe=me.projectionMatrix.elements,ft=De.projectionMatrix.elements,it=pe[14]/(pe[10]-1),Ye=pe[14]/(pe[10]+1),Ue=(pe[9]+1)/pe[5],je=(pe[9]-1)/pe[5],Ze=(pe[8]-1)/pe[0],Ne=(ft[8]+1)/ft[0],$t=it*Ze,hn=it*Ne,sn=Ge/(-Ze+Ne),Nt=sn*-Ze;me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Nt),ie.translateZ(sn),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();let tt=it+sn,ht=Ye+sn,Nn=$t-Nt,xn=hn+(Ge-Nt),B=Ue*Ye/ht*tt,I=je*Ye/ht*tt;ie.projectionMatrix.makePerspective(Nn,xn,B,I,tt,ht)}function te(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;R.near=V.near=P.near=ie.near,R.far=V.far=P.far=ie.far,(j!==R.near||ee!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,ee=R.far);let me=ie.parent,De=R.cameras;te(R,me);for(let pe=0;pe<De.length;pe++)te(De[pe],me);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),ie.matrix.copy(R.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale);let Ge=ie.children;for(let pe=0,ft=Ge.length;pe<ft;pe++)Ge[pe].updateMatrixWorld(!0);De.length===2?le(R,P,V):R.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ie){c=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.getPlanes=function(){return v};let se=null;function Me(ie,me){if(h=me.getViewerPose(l||a),g=me,h!==null){let De=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ge=!1;De.length!==R.cameras.length&&(R.cameras.length=0,Ge=!0);for(let pe=0;pe<De.length;pe++){let ft=De[pe],it=null;if(d!==null)it=d.getViewport(ft);else{let Ue=u.getViewSubImage(f,ft);it=Ue.viewport,pe===0&&(e.setRenderTargetTextures(x,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(x))}let Ye=S[pe];Ye===void 0&&(Ye=new mn,Ye.layers.enable(pe),Ye.viewport=new Xt,S[pe]=Ye),Ye.matrix.fromArray(ft.transform.matrix),Ye.projectionMatrix.fromArray(ft.projectionMatrix),Ye.viewport.set(it.x,it.y,it.width,it.height),pe===0&&R.matrix.copy(Ye.matrix),Ge===!0&&R.cameras.push(Ye)}}for(let De=0;De<_.length;De++){let Ge=b[De],pe=_[De];Ge!==null&&pe!==void 0&&pe.update(Ge,me,l||a)}if(se&&se(ie,me),me.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:me.detectedPlanes});let De=null;for(let Ge of v)me.detectedPlanes.has(Ge)||(De===null&&(De=[]),De.push(Ge));if(De!==null)for(let Ge of De)v.delete(Ge),E.delete(Ge),n.dispatchEvent({type:"planeremoved",data:Ge});for(let Ge of me.detectedPlanes)if(!v.has(Ge))v.add(Ge),E.set(Ge,me.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Ge});else{let pe=E.get(Ge);Ge.lastChangedTime>pe&&(E.set(Ge,Ge.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Ge}))}}g=null}let Ve=new of;Ve.setAnimationLoop(Me),this.setAnimationLoop=function(ie){se=ie},this.dispose=function(){}}};function hx(r,e){function t(m,p){p.color.getRGB(m.fogColor.value,af(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ux(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(_,b){let v=b.program;n.uniformBlockBinding(_,v)}function l(_,b){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(_,E);let P=e.render.frame;s[_.id]!==P&&(f(_),s[_.id]=P)}function h(_){let b=u();_.__bindingPointIndex=b;let v=r.createBuffer(),E=_.__size,P=_.usage;return r.bindBuffer(35345,v),r.bufferData(35345,E,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=i[_.id],v=_.uniforms,E=_.__cache;r.bindBuffer(35345,b);for(let P=0,V=v.length;P<V;P++){let S=v[P];if(d(S,P,E)===!0){let R=S.__offset,j=Array.isArray(S.value)?S.value:[S.value],ee=0;for(let K=0;K<j.length;K++){let X=j[K],Q=m(X);typeof X=="number"?(S.__data[0]=X,r.bufferSubData(35345,R+ee,S.__data)):X.isMatrix3?(S.__data[0]=X.elements[0],S.__data[1]=X.elements[1],S.__data[2]=X.elements[2],S.__data[3]=X.elements[0],S.__data[4]=X.elements[3],S.__data[5]=X.elements[4],S.__data[6]=X.elements[5],S.__data[7]=X.elements[0],S.__data[8]=X.elements[6],S.__data[9]=X.elements[7],S.__data[10]=X.elements[8],S.__data[11]=X.elements[0]):(X.toArray(S.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,R,S.__data)}}r.bindBuffer(35345,null)}function d(_,b,v){let E=_.value;if(v[b]===void 0){if(typeof E=="number")v[b]=E;else{let P=Array.isArray(E)?E:[E],V=[];for(let S=0;S<P.length;S++)V.push(P[S].clone());v[b]=V}return!0}else if(typeof E=="number"){if(v[b]!==E)return v[b]=E,!0}else{let P=Array.isArray(v[b])?v[b]:[v[b]],V=Array.isArray(E)?E:[E];for(let S=0;S<P.length;S++){let R=P[S];if(R.equals(V[S])===!1)return R.copy(V[S]),!0}}return!1}function g(_){let b=_.uniforms,v=0,E=16,P=0;for(let V=0,S=b.length;V<S;V++){let R=b[V],j={boundary:0,storage:0},ee=Array.isArray(R.value)?R.value:[R.value];for(let K=0,X=ee.length;K<X;K++){let Q=ee[K],ne=m(Q);j.boundary+=ne.boundary,j.storage+=ne.storage}if(R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,V>0){P=v%E;let K=E-P;P!==0&&K-j.boundary<0&&(v+=E-P,R.__offset=v)}v+=j.storage}return P=v%E,P>0&&(v+=E-P),_.__size=v,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){let b=_.target;b.removeEventListener("dispose",p);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:x}}function fx(){let r=ra("canvas");return r.style.display="block",r}function wa(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:fx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null,d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;let m=this,p=!1,x=0,_=0,b=null,v=-1,E=null,P=new Xt,V=new Xt,S=null,R=e.width,j=e.height,ee=1,K=null,X=null,Q=new Xt(0,0,R,j),ne=new Xt(0,0,R,j),de=!1,le=new la,te=!1,se=!1,Me=null,Ve=new gt,ie=new Oe,me=new k,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return b===null?ee:1}let pe=t;function ft(D,y){for(let M=0;M<D.length;M++){let A=D[M],L=e.getContext(A,y);if(L!==null)return L}return null}try{let D={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",At,!1),pe===null){let y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&y.shift(),pe=ft(y,D),pe===null)throw ft(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}pe.getShaderPrecisionFormat===void 0&&(pe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let it,Ye,Ue,je,Ze,Ne,$t,hn,sn,Nt,tt,ht,Nn,xn,B,I,be,ke,ze,Xe,dt,Ke,_e,at;function ut(){it=new Dg(pe),Ye=new Eg(pe,it,r),it.init(Ye),Ke=new cx(pe,it,Ye),Ue=new ax(pe,it,Ye),je=new Og,Ze=new Yb,Ne=new ox(pe,it,Ue,Ze,Ye,Ke,je),$t=new Rg(m),hn=new Lg(m),sn=new qp(pe,Ye),_e=new Tg(pe,it,sn,Ye),Nt=new kg(pe,sn,je,_e),tt=new Ug(pe,Nt,sn,je),ze=new Bg(pe,Ye,Ne),I=new Cg(Ze),ht=new Xb(m,$t,hn,it,Ye,_e,I),Nn=new hx(m,Ze),xn=new Jb,B=new nx(it,Ye),ke=new Sg(m,$t,hn,Ue,tt,h,a),be=new rx(m,tt,Ye),at=new ux(pe,je,Ye,Ue),Xe=new Ag(pe,it,je,Ye),dt=new Fg(pe,it,je,Ye),je.programs=ht.programs,m.capabilities=Ye,m.extensions=it,m.properties=Ze,m.renderLists=xn,m.shadowMap=be,m.state=Ue,m.info=je}ut();let et=new Zc(m,pe);this.xr=et,this.getContext=function(){return pe},this.getContextAttributes=function(){return pe.getContextAttributes()},this.forceContextLoss=function(){let D=it.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=it.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(D){D!==void 0&&(ee=D,this.setSize(R,j,!1))},this.getSize=function(D){return D.set(R,j)},this.setSize=function(D,y,M){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=D,j=y,e.width=Math.floor(D*ee),e.height=Math.floor(y*ee),M!==!1&&(e.style.width=D+"px",e.style.height=y+"px"),this.setViewport(0,0,D,y)},this.getDrawingBufferSize=function(D){return D.set(R*ee,j*ee).floor()},this.setDrawingBufferSize=function(D,y,M){R=D,j=y,ee=M,e.width=Math.floor(D*M),e.height=Math.floor(y*M),this.setViewport(0,0,D,y)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(Q)},this.setViewport=function(D,y,M,A){D.isVector4?Q.set(D.x,D.y,D.z,D.w):Q.set(D,y,M,A),Ue.viewport(P.copy(Q).multiplyScalar(ee).floor())},this.getScissor=function(D){return D.copy(ne)},this.setScissor=function(D,y,M,A){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,y,M,A),Ue.scissor(V.copy(ne).multiplyScalar(ee).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(D){Ue.setScissorTest(de=D)},this.setOpaqueSort=function(D){K=D},this.setTransparentSort=function(D){X=D},this.getClearColor=function(D){return D.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(D=!0,y=!0,M=!0){let A=0;D&&(A|=16384),y&&(A|=256),M&&(A|=1024),pe.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",At,!1),xn.dispose(),B.dispose(),Ze.dispose(),$t.dispose(),hn.dispose(),tt.dispose(),_e.dispose(),at.dispose(),ht.dispose(),et.dispose(),et.removeEventListener("sessionstart",qe),et.removeEventListener("sessionend",nt),Me&&(Me.dispose(),Me=null),pt.stop()};function ot(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let D=je.autoReset,y=be.enabled,M=be.autoUpdate,A=be.needsUpdate,L=be.type;ut(),je.autoReset=D,be.enabled=y,be.autoUpdate=M,be.needsUpdate=A,be.type=L}function At(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vt(D){let y=D.target;y.removeEventListener("dispose",vt),Kt(y)}function Kt(D){$(D),Ze.remove(D)}function $(D){let y=Ze.get(D).programs;y!==void 0&&(y.forEach(function(M){ht.releaseProgram(M)}),D.isShaderMaterial&&ht.releaseShaderCache(D))}this.renderBufferDirect=function(D,y,M,A,L,J){y===null&&(y=De);let z=L.isMesh&&L.matrixWorld.determinant()<0,Y=Hs(D,y,M,A,L);Ue.setMaterial(A,z);let Z=M.index,ce=1;A.wireframe===!0&&(Z=Nt.getWireframeAttribute(M),ce=2);let ye=M.drawRange,Ae=M.attributes.position,$e=ye.start*ce,_t=(ye.start+ye.count)*ce;J!==null&&($e=Math.max($e,J.start*ce),_t=Math.min(_t,(J.start+J.count)*ce)),Z!==null?($e=Math.max($e,0),_t=Math.min(_t,Z.count)):Ae!=null&&($e=Math.max($e,0),_t=Math.min(_t,Ae.count));let Ut=_t-$e;if(Ut<0||Ut===1/0)return;_e.setup(L,A,Y,M,Z);let Ht,Mt=Xe;if(Z!==null&&(Ht=sn.get(Z),Mt=dt,Mt.setIndex(Ht)),L.isMesh)A.wireframe===!0?(Ue.setLineWidth(A.wireframeLinewidth*Ge()),Mt.setMode(1)):Mt.setMode(4);else if(L.isLine){let He=A.linewidth;He===void 0&&(He=1),Ue.setLineWidth(He*Ge()),L.isLineSegments?Mt.setMode(1):L.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else L.isPoints?Mt.setMode(0):L.isSprite&&Mt.setMode(4);if(L.isInstancedMesh)Mt.renderInstances($e,Ut,L.count);else if(M.isInstancedBufferGeometry){let He=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,zt=Math.min(M.instanceCount,He);Mt.renderInstances($e,Ut,zt)}else Mt.render($e,Ut)},this.compile=function(D,y){function M(A,L,J){A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Tn(A,L,J),A.side=fi,A.needsUpdate=!0,Tn(A,L,J),A.side=cn):Tn(A,L,J)}f=B.get(D),f.init(),g.push(f),D.traverseVisible(function(A){A.isLight&&A.layers.test(y.layers)&&(f.pushLight(A),A.castShadow&&f.pushShadow(A))}),f.setupLights(m.physicallyCorrectLights),D.traverse(function(A){let L=A.material;if(L)if(Array.isArray(L))for(let J=0;J<L.length;J++){let z=L[J];M(z,D,A)}else M(L,D,A)}),g.pop(),f=null};let xe=null;function Re(D){xe&&xe(D)}function qe(){pt.stop()}function nt(){pt.start()}let pt=new of;pt.setAnimationLoop(Re),typeof self!="undefined"&&pt.setContext(self),this.setAnimationLoop=function(D){xe=D,et.setAnimationLoop(D),D===null?pt.stop():pt.start()},et.addEventListener("sessionstart",qe),et.addEventListener("sessionend",nt),this.render=function(D,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(y),y=et.getCamera()),D.isScene===!0&&D.onBeforeRender(m,D,y,b),f=B.get(D,g.length),f.init(),g.push(f),Ve.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),le.setFromProjectionMatrix(Ve),se=this.localClippingEnabled,te=I.init(this.clippingPlanes,se),u=xn.get(D,d.length),u.init(),d.push(u),rn(D,y,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(K,X),te===!0&&I.beginShadows();let M=f.state.shadowsArray;if(be.render(M,D,y),te===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(u,D),f.setupLights(m.physicallyCorrectLights),y.isArrayCamera){let A=y.cameras;for(let L=0,J=A.length;L<J;L++){let z=A[L];un(u,D,z,z.viewport)}}else un(u,D,y);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(m,D,y),_e.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function rn(D,y,M,A){if(D.visible===!1)return;if(D.layers.test(y.layers)){if(D.isGroup)M=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(y);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||le.intersectsSprite(D)){A&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ve);let z=tt.update(D),Y=D.material;Y.visible&&u.push(D,z,Y,M,me.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==je.render.frame&&(D.skeleton.update(),D.skeleton.frame=je.render.frame),!D.frustumCulled||le.intersectsObject(D))){A&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ve);let z=tt.update(D),Y=D.material;if(Array.isArray(Y)){let Z=z.groups;for(let ce=0,ye=Z.length;ce<ye;ce++){let Ae=Z[ce],$e=Y[Ae.materialIndex];$e&&$e.visible&&u.push(D,z,$e,M,me.z,Ae)}}else Y.visible&&u.push(D,z,Y,M,me.z,null)}}let J=D.children;for(let z=0,Y=J.length;z<Y;z++)rn(J[z],y,M,A)}function un(D,y,M,A){let L=D.opaque,J=D.transmissive,z=D.transparent;f.setupLightsView(M),te===!0&&I.setGlobalState(m.clippingPlanes,M),J.length>0&&li(L,y,M),A&&Ue.viewport(P.copy(A)),L.length>0&&Pt(L,y,M),J.length>0&&Pt(J,y,M),z.length>0&&Pt(z,y,M),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function li(D,y,M){let A=Ye.isWebGL2;Me===null&&(Me=new Bn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?Ti:di,minFilter:Si,samples:A&&s===!0?4:0})),m.getDrawingBufferSize(ie),A?Me.setSize(ie.x,ie.y):Me.setSize(oo(ie.x),oo(ie.y));let L=m.getRenderTarget();m.setRenderTarget(Me),m.clear();let J=m.toneMapping;m.toneMapping=ri,Pt(D,y,M),m.toneMapping=J,Ne.updateMultisampleRenderTarget(Me),Ne.updateRenderTargetMipmap(Me),m.setRenderTarget(L)}function Pt(D,y,M){let A=y.isScene===!0?y.overrideMaterial:null;for(let L=0,J=D.length;L<J;L++){let z=D[L],Y=z.object,Z=z.geometry,ce=A===null?z.material:A,ye=z.group;Y.layers.test(M.layers)&&Xn(Y,y,M,Z,ce,ye)}}function Xn(D,y,M,A,L,J){D.onBeforeRender(m,y,M,A,L,J),D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),L.onBeforeRender(m,y,M,A,D,J),L.transparent===!0&&L.side===cn&&L.forceSinglePass===!1?(L.side=Fn,L.needsUpdate=!0,m.renderBufferDirect(M,y,A,L,D,J),L.side=fi,L.needsUpdate=!0,m.renderBufferDirect(M,y,A,L,D,J),L.side=cn):m.renderBufferDirect(M,y,A,L,D,J),D.onAfterRender(m,y,M,A,L,J)}function Tn(D,y,M){y.isScene!==!0&&(y=De);let A=Ze.get(D),L=f.state.lights,J=f.state.shadowsArray,z=L.state.version,Y=ht.getParameters(D,L.state,J,y,M),Z=ht.getProgramCacheKey(Y),ce=A.programs;A.environment=D.isMeshStandardMaterial?y.environment:null,A.fog=y.fog,A.envMap=(D.isMeshStandardMaterial?hn:$t).get(D.envMap||A.environment),ce===void 0&&(D.addEventListener("dispose",vt),ce=new Map,A.programs=ce);let ye=ce.get(Z);if(ye!==void 0){if(A.currentProgram===ye&&A.lightsStateVersion===z)return zi(D,Y),ye}else Y.uniforms=ht.getUniforms(D),D.onBuild(M,Y,m),D.onBeforeCompile(Y,m),ye=ht.acquireProgram(Y,Z),ce.set(Z,ye),A.uniforms=Y.uniforms;let Ae=A.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ae.clippingPlanes=I.uniform),zi(D,Y),A.needsLights=Qi(D),A.lightsStateVersion=z,A.needsLights&&(Ae.ambientLightColor.value=L.state.ambient,Ae.lightProbe.value=L.state.probe,Ae.directionalLights.value=L.state.directional,Ae.directionalLightShadows.value=L.state.directionalShadow,Ae.spotLights.value=L.state.spot,Ae.spotLightShadows.value=L.state.spotShadow,Ae.rectAreaLights.value=L.state.rectArea,Ae.ltc_1.value=L.state.rectAreaLTC1,Ae.ltc_2.value=L.state.rectAreaLTC2,Ae.pointLights.value=L.state.point,Ae.pointLightShadows.value=L.state.pointShadow,Ae.hemisphereLights.value=L.state.hemi,Ae.directionalShadowMap.value=L.state.directionalShadowMap,Ae.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ae.spotShadowMap.value=L.state.spotShadowMap,Ae.spotLightMatrix.value=L.state.spotLightMatrix,Ae.spotLightMap.value=L.state.spotLightMap,Ae.pointShadowMap.value=L.state.pointShadowMap,Ae.pointShadowMatrix.value=L.state.pointShadowMatrix);let $e=ye.getUniforms(),_t=ur.seqWithValue($e.seq,Ae);return A.currentProgram=ye,A.uniformsList=_t,ye}function zi(D,y){let M=Ze.get(D);M.outputEncoding=y.outputEncoding,M.instancing=y.instancing,M.skinning=y.skinning,M.morphTargets=y.morphTargets,M.morphNormals=y.morphNormals,M.morphColors=y.morphColors,M.morphTargetsCount=y.morphTargetsCount,M.numClippingPlanes=y.numClippingPlanes,M.numIntersection=y.numClipIntersection,M.vertexAlphas=y.vertexAlphas,M.vertexTangents=y.vertexTangents,M.toneMapping=y.toneMapping}function Hs(D,y,M,A,L){y.isScene!==!0&&(y=De),Ne.resetTextureUnits();let J=y.fog,z=A.isMeshStandardMaterial?y.environment:null,Y=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Li,Z=(A.isMeshStandardMaterial?hn:$t).get(A.envMap||z),ce=A.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,ye=!!A.normalMap&&!!M.attributes.tangent,Ae=!!M.morphAttributes.position,$e=!!M.morphAttributes.normal,_t=!!M.morphAttributes.color,Ut=A.toneMapped?m.toneMapping:ri,Ht=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Mt=Ht!==void 0?Ht.length:0,He=Ze.get(A),zt=f.state.lights;if(te===!0&&(se===!0||D!==E)){let Gt=D===E&&A.id===v;I.setState(A,D,Gt)}let mt=!1;A.version===He.__version?(He.needsLights&&He.lightsStateVersion!==zt.state.version||He.outputEncoding!==Y||L.isInstancedMesh&&He.instancing===!1||!L.isInstancedMesh&&He.instancing===!0||L.isSkinnedMesh&&He.skinning===!1||!L.isSkinnedMesh&&He.skinning===!0||He.envMap!==Z||A.fog===!0&&He.fog!==J||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==I.numPlanes||He.numIntersection!==I.numIntersection)||He.vertexAlphas!==ce||He.vertexTangents!==ye||He.morphTargets!==Ae||He.morphNormals!==$e||He.morphColors!==_t||He.toneMapping!==Ut||Ye.isWebGL2===!0&&He.morphTargetsCount!==Mt)&&(mt=!0):(mt=!0,He.__version=A.version);let Je=He.currentProgram;mt===!0&&(Je=Tn(A,y,L));let Rt=!1,Vt=!1,fn=!1,yt=Je.getUniforms(),Jt=He.uniforms;if(Ue.useProgram(Je.program)&&(Rt=!0,Vt=!0,fn=!0),A.id!==v&&(v=A.id,Vt=!0),Rt||E!==D){if(yt.setValue(pe,"projectionMatrix",D.projectionMatrix),Ye.logarithmicDepthBuffer&&yt.setValue(pe,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),E!==D&&(E=D,Vt=!0,fn=!0),A.isShaderMaterial||A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshStandardMaterial||A.envMap){let Gt=yt.map.cameraPosition;Gt!==void 0&&Gt.setValue(pe,me.setFromMatrixPosition(D.matrixWorld))}(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&yt.setValue(pe,"isOrthographic",D.isOrthographicCamera===!0),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial||A.isShadowMaterial||L.isSkinnedMesh)&&yt.setValue(pe,"viewMatrix",D.matrixWorldInverse)}if(L.isSkinnedMesh){yt.setOptional(pe,L,"bindMatrix"),yt.setOptional(pe,L,"bindMatrixInverse");let Gt=L.skeleton;Gt&&(Ye.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),yt.setValue(pe,"boneTexture",Gt.boneTexture,Ne),yt.setValue(pe,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Bt=M.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0&&Ye.isWebGL2===!0)&&ze.update(L,M,A,Je),(Vt||He.receiveShadow!==L.receiveShadow)&&(He.receiveShadow=L.receiveShadow,yt.setValue(pe,"receiveShadow",L.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Jt.envMap.value=Z,Jt.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),Vt&&(yt.setValue(pe,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&Vs(Jt,fn),J&&A.fog===!0&&Nn.refreshFogUniforms(Jt,J),Nn.refreshMaterialUniforms(Jt,A,ee,j,Me),ur.upload(pe,He.uniformsList,Jt,Ne)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(ur.upload(pe,He.uniformsList,Jt,Ne),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&yt.setValue(pe,"center",L.center),yt.setValue(pe,"modelViewMatrix",L.modelViewMatrix),yt.setValue(pe,"normalMatrix",L.normalMatrix),yt.setValue(pe,"modelMatrix",L.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){let Gt=A.uniformsGroups;for(let dn=0,Yn=Gt.length;dn<Yn;dn++)if(Ye.isWebGL2){let hi=Gt[dn];at.update(hi,Je),at.bind(hi,Je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Je}function Vs(D,y){D.ambientLightColor.needsUpdate=y,D.lightProbe.needsUpdate=y,D.directionalLights.needsUpdate=y,D.directionalLightShadows.needsUpdate=y,D.pointLights.needsUpdate=y,D.pointLightShadows.needsUpdate=y,D.spotLights.needsUpdate=y,D.spotLightShadows.needsUpdate=y,D.rectAreaLights.needsUpdate=y,D.hemisphereLights.needsUpdate=y}function Qi(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,y,M){Ze.get(D.texture).__webglTexture=y,Ze.get(D.depthTexture).__webglTexture=M;let A=Ze.get(D);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=M===void 0,A.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,y){let M=Ze.get(D);M.__webglFramebuffer=y,M.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(D,y=0,M=0){b=D,x=y,_=M;let A=!0,L=null,J=!1,z=!1;if(D){let Z=Ze.get(D);Z.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(36160,null),A=!1):Z.__webglFramebuffer===void 0?Ne.setupRenderTarget(D):Z.__hasExternalTextures&&Ne.rebindTextures(D,Ze.get(D.texture).__webglTexture,Ze.get(D.depthTexture).__webglTexture);let ce=D.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(z=!0);let ye=Ze.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(L=ye[y],J=!0):Ye.isWebGL2&&D.samples>0&&Ne.useMultisampledRTT(D)===!1?L=Ze.get(D).__webglMultisampledFramebuffer:L=ye,P.copy(D.viewport),V.copy(D.scissor),S=D.scissorTest}else P.copy(Q).multiplyScalar(ee).floor(),V.copy(ne).multiplyScalar(ee).floor(),S=de;if(Ue.bindFramebuffer(36160,L)&&Ye.drawBuffers&&A&&Ue.drawBuffers(D,L),Ue.viewport(P),Ue.scissor(V),Ue.setScissorTest(S),J){let Z=Ze.get(D.texture);pe.framebufferTexture2D(36160,36064,34069+y,Z.__webglTexture,M)}else if(z){let Z=Ze.get(D.texture),ce=y||0;pe.framebufferTextureLayer(36160,36064,Z.__webglTexture,M||0,ce)}v=-1},this.readRenderTargetPixels=function(D,y,M,A,L,J,z){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&z!==void 0&&(Y=Y[z]),Y){Ue.bindFramebuffer(36160,Y);try{let Z=D.texture,ce=Z.format,ye=Z.type;if(ce!==kn&&Ke.convert(ce)!==pe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=ye===Ti&&(it.has("EXT_color_buffer_half_float")||Ye.isWebGL2&&it.has("EXT_color_buffer_float"));if(ye!==di&&Ke.convert(ye)!==pe.getParameter(35738)&&!(ye===ss&&(Ye.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=D.width-A&&M>=0&&M<=D.height-L&&pe.readPixels(y,M,A,L,Ke.convert(ce),Ke.convert(ye),J)}finally{let Z=b!==null?Ze.get(b).__webglFramebuffer:null;Ue.bindFramebuffer(36160,Z)}}},this.copyFramebufferToTexture=function(D,y,M=0){let A=Math.pow(2,-M),L=Math.floor(y.image.width*A),J=Math.floor(y.image.height*A);Ne.setTexture2D(y,0),pe.copyTexSubImage2D(3553,M,0,0,D.x,D.y,L,J),Ue.unbindTexture()},this.copyTextureToTexture=function(D,y,M,A=0){let L=y.image.width,J=y.image.height,z=Ke.convert(M.format),Y=Ke.convert(M.type);Ne.setTexture2D(M,0),pe.pixelStorei(37440,M.flipY),pe.pixelStorei(37441,M.premultiplyAlpha),pe.pixelStorei(3317,M.unpackAlignment),y.isDataTexture?pe.texSubImage2D(3553,A,D.x,D.y,L,J,z,Y,y.image.data):y.isCompressedTexture?pe.compressedTexSubImage2D(3553,A,D.x,D.y,y.mipmaps[0].width,y.mipmaps[0].height,z,y.mipmaps[0].data):pe.texSubImage2D(3553,A,D.x,D.y,z,Y,y.image),A===0&&M.generateMipmaps&&pe.generateMipmap(3553),Ue.unbindTexture()},this.copyTextureToTexture3D=function(D,y,M,A,L=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let J=D.max.x-D.min.x+1,z=D.max.y-D.min.y+1,Y=D.max.z-D.min.z+1,Z=Ke.convert(A.format),ce=Ke.convert(A.type),ye;if(A.isData3DTexture)Ne.setTexture3D(A,0),ye=32879;else if(A.isDataArrayTexture)Ne.setTexture2DArray(A,0),ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}pe.pixelStorei(37440,A.flipY),pe.pixelStorei(37441,A.premultiplyAlpha),pe.pixelStorei(3317,A.unpackAlignment);let Ae=pe.getParameter(3314),$e=pe.getParameter(32878),_t=pe.getParameter(3316),Ut=pe.getParameter(3315),Ht=pe.getParameter(32877),Mt=M.isCompressedTexture?M.mipmaps[0]:M.image;pe.pixelStorei(3314,Mt.width),pe.pixelStorei(32878,Mt.height),pe.pixelStorei(3316,D.min.x),pe.pixelStorei(3315,D.min.y),pe.pixelStorei(32877,D.min.z),M.isDataTexture||M.isData3DTexture?pe.texSubImage3D(ye,L,y.x,y.y,y.z,J,z,Y,Z,ce,Mt.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),pe.compressedTexSubImage3D(ye,L,y.x,y.y,y.z,J,z,Y,Z,Mt.data)):pe.texSubImage3D(ye,L,y.x,y.y,y.z,J,z,Y,Z,ce,Mt),pe.pixelStorei(3314,Ae),pe.pixelStorei(32878,$e),pe.pixelStorei(3316,_t),pe.pixelStorei(3315,Ut),pe.pixelStorei(32877,Ht),L===0&&A.generateMipmaps&&pe.generateMipmap(ye),Ue.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ne.setTextureCube(D,0):D.isData3DTexture?Ne.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ne.setTexture2DArray(D,0):Ne.setTexture2D(D,0),Ue.unbindTexture()},this.resetState=function(){x=0,_=0,b=null,Ue.reset(),_e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Qc=class extends wa{};Qc.prototype.isWebGL1Renderer=!0;var yr=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},cs=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vn=new k,ua=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ru=new k,Pu=new Xt,Iu=new Xt,dx=new k,Lu=new gt,Os=class extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new gt,this.bindMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Pu.fromBufferAttribute(i.attributes.skinIndex,e),Iu.fromBufferAttribute(i.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Iu.getComponent(s);if(a!==0){let o=Pu.getComponent(s);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dx.copy(Ru).applyMatrix4(Lu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ns=class extends tn{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends On{constructor(e=null,t=1,n=1,i,s,a,o,c,l=_n,h=_n,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Du=new gt,px=new gt,ls=class r{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new gt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:px;Du.multiplyMatrices(o,t[s]),Du.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=tf(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vr(t,e,e,kn,ss);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ns),this.bones.push(a),this.boneInverses.push(new gt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},fa=class extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ku=new gt,Fu=new gt,Qa=[],mx=new gt,jr=new Et,_r=class extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,mx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,ku),Fu.multiplyMatrices(n,ku),jr.matrixWorld=Fu,jr.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){let c=Qa[a];c.instanceId=s,c.object=this,t.push(c)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},da=class extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ou=new k,Nu=new k,zu=new gt,Cc=new aa,$a=new Ji,Mr=class extends tn{constructor(e=new It,t=new da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ou.fromBufferAttribute(t,i-1),Nu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ou.distanceTo(Nu);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=s,e.ray.intersectsSphere($a)===!1)return;zu.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(zu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new k,h=new k,u=new k,f=new k,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let x=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){let E=g.getX(b),P=g.getX(b+1);if(l.fromBufferAttribute(p,E),h.fromBufferAttribute(p,P),Cc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=d){if(l.fromBufferAttribute(p,b),h.fromBufferAttribute(p,b+1),Cc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Bu=new k,Uu=new k,go=class extends Mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bu.fromBufferAttribute(t,i),Uu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(Uu);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends Mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zs=class extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gu=new gt,$c=new aa,eo=new Ji,to=new k,hs=class extends tn{constructor(e=new It,t=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Gu.copy(i).invert(),$c.copy(e.ray).applyMatrix4(Gu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,m=d;g<m;g++){let p=l.getX(g);to.fromBufferAttribute(u,p),Hu(to,p,c,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,m=d;g<m;g++)to.fromBufferAttribute(u,g),Hu(to,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Hu(r,e,t,n,i,s,a){let o=$c.distanceSqToPoint(r);if(o<t){let c=new k;$c.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var mi=class extends On{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Oe:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,i=[],s=[],a=[],o=new k,c=new gt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new k)}s[0]=new k,a[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Rn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pa=class extends gi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Oe,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends pa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var no=new k,Rc=new El,Pc=new El,Ic=new El,tl=class extends gi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(no.subVectors(i[0],i[1]).add(i[0]),l=no);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(no.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Rc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,m,p),Pc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,m,p),Ic.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Pc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ic.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Rc.calc(c),Pc.calc(c),Ic.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vu(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function gx(r,e){let t=1-r;return t*t*e}function bx(r,e){return 2*(1-r)*r*e}function xx(r,e){return r*r*e}function ta(r,e,t,n){return gx(r,e)+bx(r,t)+xx(r,n)}function yx(r,e){let t=1-r;return t*t*t*e}function vx(r,e){let t=1-r;return 3*t*t*r*e}function _x(r,e){return 3*(1-r)*r*r*e}function Mx(r,e){return r*r*r*e}function na(r,e,t,n,i){return yx(r,e)+vx(r,t)+_x(r,n)+Mx(r,i)}var xo=class extends gi{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(na(e,i.x,s.x,a.x,o.x),na(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends gi{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(na(e,i.x,s.x,a.x,o.x),na(e,i.y,s.y,a.y,o.y),na(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends gi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new Oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends gi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends gi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ta(e,i.x,s.x,a.x),ta(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends gi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ta(e,i.x,s.x,a.x),ta(e,i.y,s.y,a.y),ta(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vu(o,c.x,l.x,h.x,u.x),Vu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}},wx=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:tl,CubicBezierCurve:xo,CubicBezierCurve3:nl,EllipseCurve:pa,LineCurve:ma,LineCurve3:il,QuadraticBezierCurve:yo,QuadraticBezierCurve3:sl,SplineCurve:vo}),rl=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ma(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new wx[i.type]().fromJSON(i))}return this}},al=class extends rl{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ma(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new yo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new xo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i),new Oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new pa(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ol=class r extends It{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rn(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new k,f=new Oe,d=new k,g=new k,m=new k,p=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:p=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=x*1,d.y=-p,d.z=x*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*i,v=Math.sin(b),E=Math.cos(b);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*v,u.y=e[P].y,u.z=e[P].x*E,a.push(u.x,u.y,u.z),f.x=_/t,f.y=P/(e.length-1),o.push(f.x,f.y);let V=c[3*P+0]*v,S=c[3*P+1],R=c[3*P+0]*E;l.push(V,S,R)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let v=b+_*e.length,E=v,P=v+e.length,V=v+e.length+1,S=v+1;s.push(E,P,S),s.push(V,S,P)}this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(l,3))}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},_o=class r extends ol{constructor(e=1,t=1,n=4,i=8){let s=new al;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},ga=class r extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new k,h=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},In=class r extends It{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,m=[],p=n/2,x=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function _(){let v=new k,E=new k,P=0,V=(t-e)/n;for(let S=0;S<=s;S++){let R=[],j=S/s,ee=j*(t-e)+e;for(let K=0;K<=i;K++){let X=K/i,Q=X*c+o,ne=Math.sin(Q),de=Math.cos(Q);E.x=ee*ne,E.y=-j*n+p,E.z=ee*de,u.push(E.x,E.y,E.z),v.set(ne,V,de).normalize(),f.push(v.x,v.y,v.z),d.push(X,1-j),R.push(g++)}m.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let j=m[R][S],ee=m[R+1][S],K=m[R+1][S+1],X=m[R][S+1];h.push(j,ee,X),h.push(ee,K,X),P+=6}l.addGroup(x,P,0),x+=P}function b(v){let E=g,P=new Oe,V=new k,S=0,R=v===!0?e:t,j=v===!0?1:-1;for(let K=1;K<=i;K++)u.push(0,p*j,0),f.push(0,j,0),d.push(.5,.5),g++;let ee=g;for(let K=0;K<=i;K++){let Q=K/i*c+o,ne=Math.cos(Q),de=Math.sin(Q);V.x=R*de,V.y=p*j,V.z=R*ne,u.push(V.x,V.y,V.z),f.push(0,j,0),P.x=ne*.5+.5,P.y=de*.5*j+.5,d.push(P.x,P.y),g++}for(let K=0;K<i;K++){let X=E+K,Q=ee+K;v===!0?h.push(Q,Q+1,X):h.push(Q+1,Q,X),S+=3}l.addGroup(x,S,v===!0?1:2),x+=S}}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wr=class r extends In{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class r extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new k,v=new k,E=new k;for(let P=0;P<t.length;P+=3)d(t[P+0],b),d(t[P+1],v),d(t[P+2],E),c(b,v,E,_)}function c(_,b,v,E){let P=E+1,V=[];for(let S=0;S<=P;S++){V[S]=[];let R=_.clone().lerp(v,S/P),j=b.clone().lerp(v,S/P),ee=P-S;for(let K=0;K<=ee;K++)K===0&&S===P?V[S][K]=R:V[S][K]=R.clone().lerp(j,K/ee)}for(let S=0;S<P;S++)for(let R=0;R<2*(P-S)-1;R++){let j=Math.floor(R/2);R%2===0?(f(V[S][j+1]),f(V[S+1][j]),f(V[S][j])):(f(V[S][j+1]),f(V[S+1][j+1]),f(V[S+1][j]))}}function l(_){let b=new k;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(_),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function h(){let _=new k;for(let b=0;b<s.length;b+=3){_.x=s[b+0],_.y=s[b+1],_.z=s[b+2];let v=p(_)/2/Math.PI+.5,E=x(_)/Math.PI+.5;a.push(v,1-E)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],E=a[_+4],P=Math.max(b,v,E),V=Math.min(b,v,E);P>.9&&V<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,b){let v=_*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){let _=new k,b=new k,v=new k,E=new k,P=new Oe,V=new Oe,S=new Oe;for(let R=0,j=0;R<s.length;R+=9,j+=6){_.set(s[R+0],s[R+1],s[R+2]),b.set(s[R+3],s[R+4],s[R+5]),v.set(s[R+6],s[R+7],s[R+8]),P.set(a[j+0],a[j+1]),V.set(a[j+2],a[j+3]),S.set(a[j+4],a[j+5]),E.copy(_).add(b).add(v).divideScalar(3);let ee=p(E);m(P,j+0,_,ee),m(V,j+2,b,ee),m(S,j+4,v,ee)}}function m(_,b,v,E){E<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=E/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Bs=class r extends Mo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Us=class r extends Mo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},us=class r extends It{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new k,g=new Oe;for(let m=0;m<=i;m++){for(let p=0;p<=n;p++){let x=s+p/n*a;d.x=u*Math.cos(x),d.y=u*Math.sin(x),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let m=0;m<i;m++){let p=m*(n+1);for(let x=0;x<n;x++){let _=x+p,b=_,v=_+n+1,E=_+n+2,P=_+1;o.push(b,v,P),o.push(v,E,P)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Di=class r extends It{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new k,f=new k,d=[],g=[],m=[],p=[];for(let x=0;x<=n;x++){let _=[],b=x/n,v=0;x==0&&a==0?v=.5/t:x==n&&c==Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let P=E/t;u.x=-e*Math.cos(i+P*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+P*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(P+v,1-b),_.push(l++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let b=h[x][_+1],v=h[x][_],E=h[x+1][_],P=h[x+1][_+1];(x!==0||a>0)&&d.push(b,v,P),(x!==n-1||c<Math.PI)&&d.push(v,E,P)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sr=class r extends It{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new k,u=new k,f=new k;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,x=(i+1)*(d-1)+g,_=(i+1)*d+g;a.push(m,p,_),a.push(p,x,_)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qt=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ki=class extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function is(r,e,t){return ff(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function io(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ff(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sx(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wu(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function df(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var fs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:s=e,o=2*t-n;break;case ao:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,c=2*n-t;break;case ao:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,x=-f*p+2*f*m-f*g,_=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,b=(-1-d)*p+(1.5+d)*m+.5*g,v=d*p-d*m;for(let E=0;E!==o;++E)s[E]=x*a[h+E]+_*a[l+E]+b*a[c+E]+v*a[u+E];return s}},wo=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},ll=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=is(n,s,a),this.values=is(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ff(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=is(this.times),t=is(this.values),n=this.getValueSize(),i=this.getInterpolation()===ic,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let m=t[u+g];if(m!==t[f+g]||m!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=is(e,0,a),this.values=is(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=is(this.times,0),t=is(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ds;var ds=class extends bi{};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=mr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends bi{};So.prototype.ValueTypeName="color";var ps=class extends bi{};ps.prototype.ValueTypeName="number";var hl=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Fi=class extends bi{InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=Ds;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends bi{};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=mr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends bi{};gs.prototype.ValueTypeName="vector";var Tr=class{constructor(e,t=-1,n,i=Sl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ax(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Sx(c);c=Wu(c,1,h),l=Wu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ps(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,m){if(d.length!==0){let p=[],x=[];df(d,p,x,g),p.length!==0&&m.push(new u(f,p,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(let m in d){let p=[],x=[];for(let _=0;_!==f[g].morphTargets.length;++_){let b=f[g];p.push(b.time),x.push(b.morphTarget===m?1:0)}i.push(new ps(".morphTargetInfluence["+m+"]",p,x))}c=d.length*a}else{let d=".bones["+t[u].name+"]";n(gs,d+".position",f,"pos",i),n(Fi,d+".quaternion",f,"rot",i),n(gs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Tx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return So;case"quaternion":return Fi;case"bool":case"boolean":return ds;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ax(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tx(r.type);if(r.times===void 0){let t=[],n=[];df(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ar={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ul=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ex=new ul,bs=class{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},ji={},fl=class extends Error{constructor(e,t){super(e),this.response=t}},ba=class extends bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ar.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,m=0,p=new ReadableStream({start(x){_();function _(){u.read().then(({done:b,value:v})=>{if(b)x.close();else{m+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let P=0,V=h.length;P<V;P++){let S=h[P];S.onProgress&&S.onProgress(E)}x.enqueue(v),_()}})}}});return new Response(p)}else throw new fl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ar.add(e,l);let h=ji[e];delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var dl=class extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ar.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=ra("img");function c(){h(),Ar.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var To=class extends bs{constructor(e){super(e)}load(e,t,n,i){let s=new On,a=new dl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Er=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Cr=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lc=new gt,qu=new k,ju=new k,xa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=class extends xa{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends Er{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xu=new gt,Xr=new k,Dc=new k,ml=class extends xa{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xr),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu)}},Rr=class extends Er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gl=class extends xa{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zn=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pr=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Eo=class extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ar.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ar.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var bl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;bn.multiplyQuaternionsFlat(e,a,e,t,e,n),bn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Cl="\\[\\]\\.:\\/",Cx=new RegExp("["+Cl+"]","g"),Rl="[^"+Cl+"]",Rx="[^"+Cl.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Ix=/(WCOD+)?/.source.replace("WCOD",Rx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),kx=new RegExp("^"+Px+Ix+Lx+Dx+"$"),Fx=["material","materials","bones","map"],xl=class{constructor(e,t,n){let i=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){let t=kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Fx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=xl;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:or,endingEnd:or};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Po,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case up:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Sl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===hp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===wl){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:or:i.endingStart=ao,t?i.endingEnd=this.zeroSlopeAtEnd?cr:or:i.endingEnd=ao)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Ox=new Float32Array(1),Co=class extends Ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;g=new bl(jt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new wo(new Float32Array(2),new Float32Array(2),1,Ox),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?Tr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Sl),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new yl(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Tr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function ko(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new It,l=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=pf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][f]);let g=pf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function pf(r){let e,t,n,i=0;for(let o=0;o<r.length;++o){let c=r[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}let s=new e(i),a=0;for(let o=0;o<r.length;++o)s.set(r[o].array,a),a+=r[o].array.length;return new Tt(s,t,n)}function Pl(r,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ma||e===Io){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ma)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Fo=class extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ol(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new jl(t)})}load(e,t,n,i){let s=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Pr.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ba(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vf){try{a[Ft.KHR_BINARY_GLTF]=new Xl(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new eh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ft.KHR_MATERIALS_UNLIT:a[u]=new kl;break;case Ft.KHR_DRACO_MESH_COMPRESSION:a[u]=new Yl(s,this.dracoLoader);break;case Ft.KHR_TEXTURE_TRANSFORM:a[u]=new Kl;break;case Ft.KHR_MESH_QUANTIZATION:a[u]=new Jl;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Nx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dl=class{constructor(e){this.parser=e,this.name=Ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.fromArray(c.color);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rr(h),l.distance=u;break;case"spot":l=new Ao(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ys(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},kl=class{constructor(){this.name=Ft.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}},Fl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Ol=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}},Nl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},zl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Bl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Ul=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(o[0],o[1],o[2]),Promise.all(s)}},Gl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Hl=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(s)}},Vl=class{constructor(e){this.parser=e,this.name=Ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Wl=class{constructor(e){this.parser=e,this.name=Ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ql=class{constructor(e){this.name=Ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},jl=class{constructor(e){this.name=Ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==xi.TRIANGLES&&l.mode!==xi.TRIANGLE_STRIP&&l.mode!==xi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let m=new gt,p=new k,x=new bn,_=new k(1,1,1),b=new _r(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&x.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,m.compose(p,x,_));for(let v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);tn.prototype.copy.call(b,g),b.frustumCulled=!1,this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},vf="glTF",Sa=12,mf={JSON:1313821514,BIN:5130562},Xl=class{constructor(e){this.name=Ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Sa,s=new DataView(e,Sa),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===mf.JSON){let l=new Uint8Array(e,Sa+a,o);this.content=n.decode(l)}else if(c===mf.BIN){let l=Sa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ql[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ql[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Dr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(let d in f.attributes){let g=f.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}u(f)},o,l)})})}},Kl=class{constructor(){this.name=Ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jl=class{constructor(){this.name=Ft.KHR_MESH_QUANTIZATION}},Oo=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,m=g-l,p=-2*d+3*f,x=d-f,_=1-p,b=x-f+u;for(let v=0;v!==o;v++){let E=a[m+v+o],P=a[m+v+c]*h,V=a[g+v+o],S=a[g+v]*h;s[v]=_*E+b*P+p*V+x*S}return s}},zx=new bn,Zl=class extends Oo{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return zx.fromArray(s).normalize().toArray(s),s}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gf={9728:_n,9729:Cn,9984:ro,9985:Ml,9986:Jr,9987:Si},bf={33071:si,33648:ia,10497:Jn},Il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bx={CUBICSPLINE:void 0,LINEAR:Ds,STEP:mr},Ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ux(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),r.DefaultMaterial}function Ta(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ys(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Hx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vx(r){let e=r.extensions&&r.extensions[Ft.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+xf(e.attributes):t=r.indices+":"+xf(r.attributes)+":"+r.mode,t}function xf(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function $l(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var qx=new gt,eh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new To(this.options.manager):this.textureLoader=new Eo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ba(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Ta(s,o,i),ys(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ft.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Pr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Il[i.type],o=Dr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Tt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Il[i.type],l=Dr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,m,p;if(d&&d!==u){let x=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,b=t.cache.get(_);b||(m=new l(o,x*d,i.count*d/h),b=new ha(m,d/h),t.cache.add(_,b)),p=new ua(b,c,f%d/h,g)}else o===null?m=new l(i.count*c):m=new l(o,f,i.count*c),p=new Tt(m,c,g);if(i.sparse!==void 0){let x=Il.SCALAR,_=Dr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new _(a[1],b,i.sparse.count*x),P=new l(a[2],v,i.sparse.count*c);o!==null&&(p=new Tt(p.array.slice(),p.itemSize,p.normalized));for(let V=0,S=E.length;V<S;V++){let R=E[V];if(p.setX(R,P[V*c]),c>=2&&p.setY(R,P[V*c+1]),c>=3&&p.setZ(R,P[V*c+2]),c>=4&&p.setW(R,P[V*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"";let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=gf[f.magFilter]||Cn,h.minFilter=gf[f.minFilter]||Si,h.wrapS=bf[f.wrapS]||Jn,h.wrapT=bf[f.wrapT]||Jn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let p=new On(m);p.needsUpdate=!0,f(p)}),t.load(Pr.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Wx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zs,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new da,oi.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Qt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Ft.KHR_MATERIALS_UNLIT]){let u=i[Ft.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=cn);let h=s.alphaMode||Ll.OPAQUE;if(h===Ll.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ll.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==nn&&(o.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==nn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),ys(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ta(i,u,s),u})}createUniqueName(e){let t=jt.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return yf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Vx(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Ft.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=yf(new It,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Ux(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let m=h[d],p=a[d],x,_=l[d];if(p.mode===xi.TRIANGLES||p.mode===xi.TRIANGLE_STRIP||p.mode===xi.TRIANGLE_FAN||p.mode===void 0)x=s.isSkinnedMesh===!0?new Os(m,_):new Et(m,_),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),p.mode===xi.TRIANGLE_STRIP?x.geometry=Pl(x.geometry,Io):p.mode===xi.TRIANGLE_FAN&&(x.geometry=Pl(x.geometry,Ma));else if(p.mode===xi.LINES)x=new go(m,_);else if(p.mode===xi.LINE_STRIP)x=new Mr(m,_);else if(p.mode===xi.LINE_LOOP)x=new bo(m,_);else if(p.mode===xi.POINTS)x=new hs(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(x.geometry.morphAttributes).length>0&&Hx(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),ys(x,s),p.extensions&&Ta(i,x,p),t.assignFinalMaterial(x),u.push(x)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];let f=new Yt;t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(nf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new os(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ys(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new gt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ls(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let l=0,h=n.channels.length;l<h;l++){let u=n.channels[l],f=n.samplers[u.sampler],d=u.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(f),c.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2],d=l[3],g=l[4],m=[];for(let x=0,_=h.length;x<_;x++){let b=h[x],v=u[x],E=f[x],P=d[x],V=g[x];if(b===void 0)continue;b.updateMatrix();let S;switch(xs[V.path]){case xs.weights:S=ps;break;case xs.rotation:S=Fi;break;case xs.position:case xs.scale:default:S=gs;break}let R=b.name?b.name:b.uuid,j=P.interpolation!==void 0?Bx[P.interpolation]:Ds,ee=[];xs[V.path]===xs.weights?b.traverse(function(X){X.morphTargetInfluences&&ee.push(X.name?X.name:X.uuid)}):ee.push(R);let K=E.array;if(E.normalized){let X=$l(K.constructor),Q=new Float32Array(K.length);for(let ne=0,de=K.length;ne<de;ne++)Q[ne]=K[ne]*X;K=Q}for(let X=0,Q=ee.length;X<Q;X++){let ne=new S(ee[X]+"."+xs[V.path],v.array,K,j);P.interpolation==="CUBICSPLINE"&&(ne.createInterpolant=function(le){let te=this instanceof Fi?Zl:Oo;return new te(this.times,this.values,this.getValueSize()/3,le)},ne.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(ne)}}let p=n.name?n.name:"animation_"+e;return new Tr(p,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){let o=[],c=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});let l=[],h=s.children||[];for(let f=0,d=h.length;f<d;f++)l.push(i.getDependency("node",h[f]));let u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(l),u])}().then(function(o){let c=o[0],l=o[1],h=o[2],u;if(s.isBone===!0?u=new Ns:c.length>1?u=new Yt:c.length===1?u=c[0]:u=new tn,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),ys(u,s),s.extensions&&Ta(n,u,s),s.matrix!==void 0){let f=new gt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,qx)});for(let f=0,d=l.length;f<d;f++)u.add(l[f]);return u})}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Yt;n.name&&(s.name=i.createUniqueName(n.name)),ys(s,n),n.extensions&&Ta(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof oi||f instanceof On)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}};function jx(r,e,t){let n=e.attributes,i=new ai;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),o.normalized){let h=$l(Dr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new k,c=new k;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let m=$l(Dr[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Ji;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function yf(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Ql[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ys(r,e),jx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gx(r,e.targets,t):r})}var _f=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(x){s=x.instance,s.exports.__wasm_call_ctors()});function o(x){for(var _=new Uint8Array(x.length),b=0;b<x.length;++b){var v=x.charCodeAt(b);_[b]=v>96?v-97:v>64?v-39:v+4}for(var E=0,b=0;b<x.length;++b)_[E++]=_[b]<60?n[_[b]]:(_[b]-60)*64+_[++b];return _.buffer.slice(0,E)}function c(x,_,b,v,E,P){var V=s.exports.sbrk,S=b+3&-4,R=V(S*v),j=V(E.length),ee=new Uint8Array(s.exports.memory.buffer);ee.set(E,j);var K=x(R,b,v,j,E.length);if(K==0&&P&&P(R,S,v),_.set(ee.subarray(R,R+b*v)),V(R-V(0)),K!=0)throw new Error("Malformed buffer data: "+K)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(x){var _={object:new Worker(x),pending:0,requests:{}};return _.object.onmessage=function(b){var v=b.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(x){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),b=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(b),E=0;E<x;++E)u[E]=d(v);URL.revokeObjectURL(v)}function m(x,_,b,v,E){for(var P=u[0],V=1;V<u.length;++V)u[V].pending<P.pending&&(P=u[V]);return new Promise(function(S,R){var j=new Uint8Array(b),ee=f++;P.pending+=x,P.requests[ee]={resolve:S,reject:R},P.object.postMessage({id:ee,count:x,size:_,source:j,mode:v,filter:E},[j.buffer])})}function p(x){a.then(function(){var _=x.data;try{var b=new Uint8Array(_.count*_.size);c(s.exports[_.mode],b,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(x){g(x)},decodeVertexBuffer:function(x,_,b,v,E){c(s.exports.meshopt_decodeVertexBuffer,x,_,b,v,s.exports[l[E]])},decodeIndexBuffer:function(x,_,b,v){c(s.exports.meshopt_decodeIndexBuffer,x,_,b,v)},decodeIndexSequence:function(x,_,b,v){c(s.exports.meshopt_decodeIndexSequence,x,_,b,v)},decodeGltfBuffer:function(x,_,b,v,E,P){c(s.exports[h[E]],x,_,b,v,s.exports[l[P]])},decodeGltfBufferAsync:function(x,_,b,v,E){return u.length>0?m(x,_,b,h[v],l[E]):a.then(function(){var P=new Uint8Array(x*_);return c(s.exports[h[v]],P,x,_,b,s.exports[l[E]]),P})}}}();function Mf(r){let e=new Map,t=new Map,n=r.clone();return wf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function wf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)wf(r.children[n],e.children[n],t)}function Xx(r){let e=r>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var th=r=>r*r*(3-2*r),nh=r=>r<0?0:r>1?1:r,Aa=r=>r-Math.floor(r),Gs=(r,e,t)=>th(nh((t-r)/(e-r)));function Yx(r,e,t){let n=new Float32Array(e*t);for(let i=0;i<n.length;i++)n[i]=r();return(i,s)=>{let a=Aa(i)*e,o=Aa(s)*t,c=Math.floor(a),l=Math.floor(o),h=th(a-c),u=th(o-l),f=(c+1)%e,d=(l+1)%t,g=n[l*e+c],m=n[l*e+f],p=n[d*e+c],x=n[d*e+f];return g+(m-g)*h+(p-g)*u+(g-m-p+x)*h*u}}function qn(r,e,t,n=4,i=.5){let s=[],a=1,o=0;for(let c=0;c<n;c++)s.push([Yx(r,e<<c,t<<c),a]),o+=a,a*=i;return(c,l)=>{let h=0;for(let u=0;u<s.length;u++)h+=s[u][0](c,l)*s[u][1];return h/o}}function kr(r,e,t=.85){let n=new Float32Array(e*e*2),i=new Float32Array(e*e);for(let a=0;a<e*e;a++)n[a*2]=.5+(r()-.5)*t,n[a*2+1]=.5+(r()-.5)*t,i[a]=r();let s={f1:0,f2:0,id:0};return(a,o)=>{let c=Aa(a)*e,l=Aa(o)*e,h=Math.floor(c),u=Math.floor(l),f=1e9,d=1e9,g=0;for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++){let x=h+p,_=u+m,b=(_+e)%e*e+(x+e)%e,v=x+n[b*2]-c,E=_+n[b*2+1]-l,P=Math.sqrt(v*v+E*E);P<f?(d=f,f=P,g=i[b]):P<d&&(d=P)}return s.f1=f,s.f2=d,s.id=g,s}}var ih={metal(r,e,t,n,i){let s=qn(e,2,96,3,.55),a=qn(e,3,3,3);for(let o=0;o<r;o++)for(let c=0;c<r;c++){let l=c/r,h=o/r,u=o*r+c,f=s(l,h),d=a(l,h);t[u]=f*.6+d*.4,n[u]=.88+f*.08+d*.04,i[u]=.68+f*.15+Gs(.45,.8,d)*.12}for(let o=0;o<14;o++){let c=e()*r,l=e()*r,h=(e()-.5)*.9,u=r*(.08+e()*.18),f=Math.cos(h),d=Math.sin(h);for(let g=0;g<u;g++){let m=(Math.round(c+f*g)%r+r)%r,x=(Math.round(l+d*g)%r+r)%r*r+m;t[x]=Math.max(0,t[x]-.18),n[x]=Math.min(1,n[x]+.05),i[x]*=.7}}},hammered(r,e,t,n,i){let s=kr(e,7,.9),a=kr(e,13,.9),o=qn(e,4,4,3);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=l/r,u=c/r,f=c*r+l,d=s(h,u).f1,g=a(h,u).f1,m=o(h,u),p=Math.min(1,d*d*1.4)*.65+Math.min(1,g*g*1.6)*.35;t[f]=p*.85+m*.15,n[f]=.88+p*.09+m*.03,i[f]=.66+(1-p)*.22+m*.08}},leather(r,e,t,n,i){let s=kr(e,22,1),a=qn(e,3,5,4),o=qn(e,2,2,3),c=qn(e,32,32,2);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=s(u,f),m=Gs(0,.22,g.f2-g.f1),p=1-Gs(0,.05,Math.abs(a(u,f)-.5)),x=o(u,f);t[d]=m*.7+c(u,f)*.2+.1-p*.35,n[d]=.8+x*.14+m*.06-p*.06,i[d]=.7+(1-x)*.2+(1-m)*.1}},cloth(r,e,t,n,i){let a=qn(e,2,48,2),o=qn(e,48,2,2),c=qn(e,3,3,3);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=u*24,m=f*24,p=Math.floor(g),x=Math.floor(m),_=g-p,b=m-x,v=(p+x&1)===0,E=v?_:b,P=v?b:_,V=Math.sin(Math.PI*E),S=.6+.4*Math.sin(Math.PI*P),R=v?a(u,f):o(u,f);t[d]=V*S*(.8+R*.2),n[d]=.8+V*.1+R*.06+c(u,f)*.04,i[d]=.92+(1-V)*.08}},wood(r,e,t,n,i){let s=qn(e,2,3,4),a=qn(e,3,64,2),o=kr(e,3,.8);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=l/r,u=c/r,f=c*r+l,d=o(h,u),g=Math.max(0,1-d.f1*2.4),m=Aa(u*7+s(h,u)*1.6+g*g*.6),p=Math.pow(Math.sin(Math.PI*m),.6),x=a(h,u);t[f]=p*.55+x*.45,n[f]=.74+p*.16+x*.1-g*g*.1,i[f]=.75+(1-p)*.12+x*.13}},stone(r,e,t,n,i){let s=kr(e,5,.9),a=kr(e,11,.9),o=qn(e,4,4,5),c=qn(e,24,24,2);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=h/r,f=l/r,d=l*r+h,g=s(u,f),m=1-Gs(0,.06,g.f2-g.f1),p=g.id,x=a(u,f),_=1-Gs(0,.03,x.f2-x.f1),b=o(u,f),v=Gs(.62,.8,c(u,f));t[d]=.25+b*.55+p*.2-m*.55-_*.12-v*.15,n[d]=.8+b*.1+p*.08-m*.2-_*.05-v*.06,i[d]=.82+b*.12+m*.06}},scale(r,e,t,n,i){let h=qn(e,8,8,2),u=qn(e,6,6,3);for(let f=0;f<r;f++)for(let d=0;d<r;d++){let g=d/r,m=f/r,p=f*r+d,x=null,_=Math.floor(m/.125);for(let V=_+2;V>=_-1;V--){let S=(V+1)*.125,R=S-.21875;if(m>S+1e-6||m<R)continue;let j=(V%2+2)%2*.5,ee=(Math.round(g*8-j)+j)/8,K=g-ee;K-=Math.round(K);let X=.0625*1.02,Q=S-X,ne,de;if(m<=Q)ne=Math.abs(K)<=X,de=(X-Math.abs(K))/X;else{let le=Math.hypot(K,m-Q);ne=le<=X,de=(X-le)/X}ne&&(x={t:(m-R)/.21875,edge:de,dx:K/X,id:h(ee,S)})}if(!x){t[p]=0,n[p]=.6,i[p]=.9;continue}let b=Gs(0,.18,x.edge),v=1-x.dx*x.dx*.35,E=(.35+x.t*.65)*v*b,P=u(g,m);t[p]=E*.9+P*.1,n[p]=.72+b*.14+x.id*.08+P*.06,i[p]=.6+(1-b)*.25+x.id*.15}}},R1=Object.keys(ih);function Sf(r){if(typeof document!="undefined"){let e=document.createElement("canvas");return e.width=r,e.height=r,e}return new OffscreenCanvas(r,r)}function Kx(r){let e=1/0,t=-1/0;for(let i=0;i<r.length;i++)r[i]<e&&(e=r[i]),r[i]>t&&(t=r[i]);let n=t>e?1/(t-e):0;for(let i=0;i<r.length;i++)r[i]=(r[i]-e)*n}var Tf=new Map,Af=new Map;function Ea(r,e={}){if(!ih[r])throw new Error("proceduralTexture: unknown kind "+r);let t=Math.min(256,Math.max(16,1<<Math.round(Math.log2(e.size||128)))),n=e.seed==null?1:e.seed|0,i=e.repeat==null?[1,1]:Array.isArray(e.repeat)?e.repeat:[e.repeat,e.repeat],s=e.anisotropy||1,a=r+"|"+t+"|"+n+"|"+s,o=Tf.get(a);if(!o){let h=Xx(n*7919+r.length*104729+r.charCodeAt(0)*31),u=t*t,f=new Float32Array(u),d=new Float32Array(u),g=new Float32Array(u);ih[r](t,h,f,d,g),Kx(f);let m=Sf(t),p=Sf(t),x=m.getContext("2d"),_=p.getContext("2d"),b=x.createImageData(t,t),v=_.createImageData(t,t);for(let V=0;V<u;V++){let S=Math.round(nh(d[V])*255),R=V*4;b.data[R]=S,b.data[R+1]=S,b.data[R+2]=S,b.data[R+3]=255,v.data[R]=Math.round(f[V]*255),v.data[R+1]=Math.round(nh(g[V])*255),v.data[R+2]=0,v.data[R+3]=255}x.putImageData(b,0,0),_.putImageData(v,0,0);let E=new mi(m),P=new mi(p);for(let V of[E,P])V.wrapS=V.wrapT=Jn,V.anisotropy=s;E.encoding=xt,P.encoding=Li,E.name="pt-"+r+"-map",P.name="pt-"+r+"-data",o={map:E,roughnessMap:P,bumpMap:P},Tf.set(a,o)}if(i[0]===1&&i[1]===1)return o;let c=a+"|"+i[0]+"x"+i[1],l=Af.get(c);if(!l){let h=o.map.clone(),u=o.roughnessMap.clone();h.repeat.set(i[0],i[1]),u.repeat.set(i[0],i[1]),l={map:h,roughnessMap:u,bumpMap:u},Af.set(c,l)}return l}var Cf={metal:{tex:"metal",rough:.42,metal:.9,bump:.0035,env:.9,color:10133672},gold:{tex:"hammered",rough:.36,metal:1,bump:.0025,env:1,color:14264389},leather:{tex:"leather",rough:.78,metal:0,bump:.006,env:.3,color:7031347},cloth:{tex:"cloth",rough:.95,metal:0,bump:.005,env:.2,color:8007214},wood:{tex:"wood",rough:.72,metal:0,bump:.006,env:.3,color:8016948},stone:{tex:"stone",rough:.9,metal:0,bump:.009,env:.25,color:5592154},gem:{tex:null,rough:.1,metal:.3,bump:0,env:1,color:3837183},bone:{tex:"leather",rough:.55,metal:0,bump:.0015,env:.35,color:14208432},skin:{tex:"leather",rough:.62,metal:0,bump:8e-4,env:.25,color:13146746},hair:{tex:"metal",rough:.5,metal:0,bump:.002,env:.35,color:3811870}},P1=Object.keys(Cf),Ef=new Map;function Jx(r){return r==null?"d":r.isColor?"c"+r.getHexString():String(r)}function Oi(r,e,t={}){var l,h,u,f,d,g;let n=Cf[r];if(!n)throw new Error("detailMaterial: unknown role "+r);let i={};for(let m of Object.keys(t).sort()){let p=t[m];i[m]=p&&p.isTexture?"tex:"+p.uuid:p&&p.isColor?"#"+p.getHexString():p}let s=r+"|"+Jx(e)+"|"+JSON.stringify(i),a=Ef.get(s);if(a)return a;let o=new Ie(e==null?n.color:e);a=new Qt({color:o,roughness:(l=t.roughness)!=null?l:n.rough,metalness:(h=t.metalness)!=null?h:n.metal,flatShading:!!t.flatShading,side:(u=t.side)!=null?u:fi});let c=t.texture===!1?null:t.texture||n.tex;if(c){let m=Ea(c,{size:t.size,seed:t.seed,repeat:t.repeat});a.map=m.map,a.roughnessMap=m.roughnessMap;let p=n.bump*((f=t.bump)!=null?f:1);p>0&&(a.bumpMap=m.bumpMap,a.bumpScale=p),a.roughness=Math.min(1,a.roughness/.78)}return r==="gem"&&(a.emissive=new Ie(t.glow==null?o:t.glow),a.emissiveIntensity=(d=t.glowIntensity)!=null?d:.7,a.color.multiplyScalar(.25)),t.envMap&&(a.envMap=t.envMap),a.envMapIntensity=(g=t.envMapIntensity)!=null?g:n.env,a.name="dm-"+r,a.userData.shared=!0,Ef.set(s,a),a}var No=new WeakMap;function Zx(){let r=new cs,e=new Di(10,32,16),t=e.attributes.position,n=new Float32Array(t.count*3),i=new Ie(.2,.21,.25),s=new Ie(.2,.18,.16),a=new Ie(.025,.022,.02),o=new Ie;for(let l=0;l<t.count;l++){let h=t.getY(l)/10;h>=0?o.copy(s).lerp(i,Math.pow(h,.6)):o.copy(s).lerp(a,Math.min(1,Math.pow(-h*4,.5))),n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b}e.setAttribute("color",new Tt(n,3)),r.add(new Et(e,new nn({vertexColors:!0,side:Fn,fog:!1})));let c=(l,h,u,f)=>{let d=new nn({color:new Ie().setRGB(u[0],u[1],u[2],ks),side:cn,fog:!1}),g=new Et(new pi(l,h),d);g.position.set(f[0],f[1],f[2]),g.lookAt(0,0,0),r.add(g)};return c(5,3.5,[5,3.9,2.8],[-4.5,6,5]),c(3,6,[1.6,2.1,3.6],[5,3,-6]),c(9,4,[.9,.86,.8],[0,2.5,8.5]),c(2.5,2.5,[.9,.8,.7],[-8,.5,-2]),r}function zo(r,e={}){let t=No.get(r);if(t)return t.texture;let n=e.size||64,i=Zx(),s=new xr(r),a;if(n>=256)a=s.fromScene(i,.02,.1,50);else{let o=new ca(n,{type:Ti,generateMipmaps:!1}),c=new oa(.1,50,o),l=r.getRenderTarget(),h=r.toneMapping,u=r.outputEncoding;r.toneMapping=ri,r.outputEncoding=Li,c.update(r,i),r.toneMapping=h,r.outputEncoding=u,r.setRenderTarget(l),a=s.fromCubemap(o.texture),o.dispose()}return s.dispose(),i.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a.texture.name="sigil-env",No.set(r,a),a.texture}function Bo(r){let e=No.get(r);e&&(e.dispose(),No.delete(r))}function Qx(r,e,t,n){let i=new It;return i.setAttribute("position",new lt(r,3)),e&&i.setAttribute("normal",new lt(e,3)),i.setAttribute("uv",new lt(t,2)),i.setIndex(n),e||i.computeVertexNormals(),i.computeBoundingSphere(),i}function Rf(r=1,e=1,t=1,n,i=2,s={}){let a=r/2,o=e/2,c=t/2;n=Math.min(n==null?Math.min(r,e,t)*.1:n,a,o,c),i=Math.max(1,i|0);let l=2*i+1,h=new Ai(1,1,1,l,l,l),u=h.attributes.position,f=h.attributes.normal,d=h.attributes.uv,g=s.uvScale||1/Math.max(r,e,t),m=(b,v)=>{let E=Math.round((b+.5)*l);return E<=i?-v+n*(E/i):E>=l-i?v-n*((l-E)/i):-v+n},p=new k,x=new k,_=new k;for(let b=0;b<u.count;b++){p.set(m(u.getX(b),a),m(u.getY(b),o),m(u.getZ(b),c));let v=new k(f.getX(b),f.getY(b),f.getZ(b));v.x&&(p.x=Math.sign(v.x)*a),v.y&&(p.y=Math.sign(v.y)*o),v.z&&(p.z=Math.sign(v.z)*c),x.set(Math.max(-a+n,Math.min(a-n,p.x)),Math.max(-o+n,Math.min(o-n,p.y)),Math.max(-c+n,Math.min(c-n,p.z))),_.subVectors(p,x),_.lengthSq()<1e-12?_.copy(v):_.normalize(),p.copy(x).addScaledVector(_,n),u.setXYZ(b,p.x,p.y,p.z),f.setXYZ(b,_.x,_.y,_.z);let E,P;v.x?(E=p.z*-Math.sign(v.x),P=p.y):v.y?(E=p.x,P=p.z*-Math.sign(v.y)):(E=p.x*Math.sign(v.z),P=p.y),d.setXY(b,E*g+.5,P*g+.5)}return h.computeBoundingSphere(),h}function Pf(r=1,e=1,t=.04,n,i={}){var j,ee;n=Math.min(n==null?Math.min(r,e)*.2:n,r/2-1e-4,e/2-1e-4);let s=i.curve||0,a=i.curveY||0,o=Math.max(1,(j=i.cornerSeg)!=null?j:3),c=Math.max(1,(ee=i.seg)!=null?ee:s||a?4:1),l=K=>{let X=[],Q=K/2;for(let ne=0;ne<=o;ne++)X.push(-Q+n*(ne/o));for(let ne=1;ne<c;ne++)X.push(-Q+n+(K-2*n)*(ne/c));for(let ne=o;ne>=0;ne--)X.push(Q-n*(ne/o));return X},h=l(r),u=l(e),f=h.length,d=u.length,g=1/Math.max(r,e),m=(K,X)=>{let Q=r/2-n,ne=e/2-n,de=Math.abs(K),le=Math.abs(X);if(de>Q+1e-9&&le>ne+1e-9){let te=de-Q,se=le-ne,Me=Math.max(te,se),Ve=Math.hypot(te,se),ie=Me/Ve;return[Math.sign(K)*(Q+te*ie),Math.sign(X)*(ne+se*ie)]}return[K,X]},p=(K,X,Q,ne)=>{let de=K,le=X,te=Q;if(s){let se=de/s,Me=s+te;de=Me*Math.sin(se),te=Me*Math.cos(se)-s}if(a){let se=le/a,Me=a+te;le=Me*Math.sin(se),te=Me*Math.cos(se)-a}ne.push(de,le,te)},x=[],_=[],b=[],v=t/2,E=i.back===!1?[1]:[1,-1];for(let K of E){let X=x.length/3;for(let Q=0;Q<d;Q++)for(let ne=0;ne<f;ne++){let[de,le]=m(h[ne],u[Q]);p(de,le,K*v,x),_.push((K>0?de:-de)*g+.5,le*g+.5)}for(let Q=0;Q<d-1;Q++)for(let ne=0;ne<f-1;ne++){let de=X+Q*f+ne,le=de+1,te=de+f,se=te+1;K>0?b.push(de,le,se,de,se,te):b.push(de,se,le,de,te,se)}}let P=[];for(let K=0;K<f;K++)P.push([K,0]);for(let K=1;K<d;K++)P.push([f-1,K]);for(let K=f-2;K>=0;K--)P.push([K,d-1]);for(let K=d-2;K>0;K--)P.push([0,K]);let V=x.length/3,S=0,R=null;for(let K=0;K<=P.length;K++){let[X,Q]=P[K%P.length],[ne,de]=m(h[X],u[Q]);R&&(S+=Math.hypot(ne-R[0],de-R[1])),R=[ne,de],p(ne,de,v,x),p(ne,de,-v,x),_.push(S*g,0,S*g,t*g)}for(let K=0;K<P.length;K++){let X=V+K*2,Q=X+1,ne=X+2,de=X+3;b.push(X,Q,de,X,de,ne)}return Qx(x,null,_,b)}var Uo=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$x=new os(-1,1,1,-1,0,1),sh=new It;sh.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));sh.setAttribute("uv",new lt([0,2,0,0,2,0],2));var Fr=class{constructor(e){this._mesh=new Et(sh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$x)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var If={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Lf={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var vs=class r extends Uo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bn(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Bn(s,a);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Bn(s,a);d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=Lf;this.highPassUniforms=Ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new Oe(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=If;this.copyUniforms=Ir.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Mn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ii,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new nn,this.fsQuad=new Fr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new Oe(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Mn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}};vs.BlurDirectionX=new Oe(1,0);vs.BlurDirectionY=new Oe(0,1);var Go={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

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
	`};var ci=Object.freeze({High:Object.freeze({name:"High",pixelRatio:2,post:!0,msaa:4,fxaa:!1,target:"half",shadowMapSize:2048,shadowType:va,propShadows:!0,bloom:!0,bloomStrength:1.4,bloomScale:1,maxLights:6,textureSize:512}),Medium:Object.freeze({name:"Medium",pixelRatio:1.5,post:!0,msaa:2,fxaa:!1,target:"byte",shadowMapSize:1024,shadowType:ya,propShadows:!1,bloom:!0,bloomStrength:1.25,bloomScale:.5,maxLights:4,textureSize:256}),Low:Object.freeze({name:"Low",pixelRatio:1.25,post:!1,msaa:0,fxaa:!1,target:"byte",shadowMapSize:512,shadowType:ya,propShadows:!1,bloom:!1,bloomStrength:0,bloomScale:.5,maxLights:3,textureSize:128})}),Ho=["High","Medium","Low"],e1=Object.freeze({exposure:null,bloomThreshold:.88,bloomKnee:.08,bloomRadius:.25,bloomStrength:null,lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1.06,vignette:.2,dither:1}),X1=Object.freeze({lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1,vignette:0}),t1=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,kf=`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`,n1=`
uniform sampler2D tDiffuse;
uniform vec2 texel;
uniform float luminosityThreshold;
uniform float smoothWidth;
varying vec2 vUv;
${kf}
vec3 tap(vec2 o) { return clamp(texture2D(tDiffuse, vUv + o * texel).rgb, 0.0, 1.0); }
void main() {
  vec3 c = 0.25 * (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)));
  float br = max(c.r, max(c.g, c.b));
  float k = max(smoothWidth, 1e-4);
  float soft = clamp(br - luminosityThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k);
  float w = max(soft, br - luminosityThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(srgbToLinear(c) * w, 1.0);
}`,i1=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform vec3 lift, gammaInv, gain;
uniform float saturation, vignette, dither;
varying vec2 vUv;
${kf}
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
}`;function s1(r){return!!(r.capabilities&&r.capabilities.isWebGL2)}function r1(r){let e=r.extensions;return e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")}function a1(r,e,t,n,i){let s=new Bn(e,t,{type:i?Ti:di,format:kn,samples:n,depthBuffer:!0,stencilBuffer:!1,encoding:xt});return s.isXRRenderTarget=!0,s.texture.internalFormat=i?"RGBA16F":"RGBA8",s.texture.name="Sigil.scene",s.texture.generateMipmaps=!1,r.properties.get(s).__ignoreDepthValues=!0,s}function Ff(r,e,t,n={}){let i=s1(r),s=r.getPixelRatio(),a=Object.assign({},e1,n.params||{});a.exposure==null&&(a.exposure=r.toneMappingExposure);let o=n.applyShadows!==!1,c=ci[n.quality]||ci.High,l=1,h=1,u=1,f=1,d=null,g=null,m=null,p=!1,x=new Ie,_=new Ie,b=new Ie,v=new Mn({name:"SigilFinal",uniforms:{tScene:{value:null},tBloom:{value:null},lift:{value:new k},gammaInv:{value:new k(1,1,1)},gain:{value:new k(1,1,1)},saturation:{value:1},vignette:{value:0},dither:{value:1}},defines:{},vertexShader:t1,fragmentShader:i1,depthTest:!1,depthWrite:!1,toneMapped:!1}),E=new Mn({name:"SigilFXAA",uniforms:Ir.clone(Go.uniforms),vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,depthTest:!1,depthWrite:!1,toneMapped:!1}),P=new Fr(v);function V(le,te){le in v.defines!==te&&(te?v.defines[le]="":delete v.defines[le],v.needsUpdate=!0)}function S(){let le=new vs(new Oe(256,256),c.bloomStrength,a.bloomRadius,a.bloomThreshold);for(let te of[le.renderTargetBright,...le.renderTargetsHorizontal,...le.renderTargetsVertical])te.texture.type=Ti;return le.highPassUniforms.texel={value:new Oe},le.materialHighPassFilter.fragmentShader=n1,le.materialHighPassFilter.needsUpdate=!0,le}function R(){d&&d.dispose(),g&&g.dispose(),m&&m.dispose(),d=g=m=null}function j(){if(R(),p=i&&c.post,!p)return;let le=Math.min(c.msaa|0,r.capabilities.maxSamples||0);d=a1(r,u,f,le,c.target==="half"&&r1(r)),(c.fxaa||le===0)&&(g=new Bn(u,f,{depthBuffer:!1,stencilBuffer:!1}),g.texture.generateMipmaps=!1),c.bloom&&(m=S()),V("USE_BLOOM",!!m),ee()}function ee(){d&&d.setSize(u,f),g&&(g.setSize(u,f),E.uniforms.resolution.value.set(1/u,1/f)),m&&(m.setSize(Math.max(2,Math.round(u*c.bloomScale)),Math.max(2,Math.round(f*c.bloomScale))),m.highPassUniforms.texel.value.set(.5/u,.5/f))}function K(le,te){l=Math.max(1,le|0),h=Math.max(1,te|0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,c.pixelRatio)),r.setSize(l,h,!1);let se=r.getDrawingBufferSize(new Oe);u=se.x,f=se.y,ee()}function X(le){let te=ci[le];te&&(c=te,o&&Df(r,e,te),j(),K(l,h))}function Q(le){let te=m,se=te.fsQuad;te.highPassUniforms.tDiffuse.value=le,te.highPassUniforms.luminosityThreshold.value=a.bloomThreshold,te.highPassUniforms.smoothWidth.value=a.bloomKnee,se.material=te.materialHighPassFilter,r.setRenderTarget(te.renderTargetBright),r.clear(),se.render(r);let Me=te.renderTargetBright;for(let ie=0;ie<te.nMips;ie++){let me=te.separableBlurMaterials[ie];se.material=me,me.uniforms.colorTexture.value=Me.texture,me.uniforms.direction.value=vs.BlurDirectionX,r.setRenderTarget(te.renderTargetsHorizontal[ie]),r.clear(),se.render(r),me.uniforms.colorTexture.value=te.renderTargetsHorizontal[ie].texture,me.uniforms.direction.value=vs.BlurDirectionY,r.setRenderTarget(te.renderTargetsVertical[ie]),r.clear(),se.render(r),Me=te.renderTargetsVertical[ie]}let Ve=te.compositeMaterial;return Ve.uniforms.bloomStrength.value=a.bloomStrength==null?c.bloomStrength:a.bloomStrength,Ve.uniforms.bloomRadius.value=a.bloomRadius,se.material=Ve,r.setRenderTarget(te.renderTargetsHorizontal[0]),r.clear(),se.render(r),te.renderTargetsHorizontal[0].texture}function ne(){if(r.toneMappingExposure=a.exposure,!p){r.render(e,t);return}let le=e.background,te=!!(le&&le.isColor);r.getClearColor(x);let se=r.getClearAlpha();te?(_.copy(le).convertLinearToSRGB(),e.background=null,r.setClearColor(_,1)):(_.copy(x).convertLinearToSRGB(),r.setClearColor(_,se));let Me=e.fog;Me&&(b.copy(Me.color),Me.color.convertLinearToSRGB()),r.setRenderTarget(d),r.render(e,t),Me&&Me.color.copy(b),te&&(e.background=le),r.setClearColor(x,se);let Ve=r.autoClear;r.autoClear=!1;let ie=!!m&&(a.bloomStrength==null?c.bloomStrength:a.bloomStrength)>0;V("USE_BLOOM",ie),ie&&(v.uniforms.tBloom.value=Q(d.texture));let me=v.uniforms,De=a.gamma;me.tScene.value=d.texture,me.lift.value.fromArray(a.lift),me.gammaInv.value.set(1/Math.max(.001,De[0]),1/Math.max(.001,De[1]),1/Math.max(.001,De[2])),me.gain.value.fromArray(a.gain),me.saturation.value=a.saturation,me.vignette.value=a.vignette,me.dither.value=a.dither;let Ge=a.vignette===0&&a.saturation===1&&[0,1,2].every(pe=>a.lift[pe]===0&&De[pe]===1&&a.gain[pe]===1);V("USE_GRADE",!Ge),P.material=v,g&&(r.setRenderTarget(g),P.render(r),E.uniforms.tDiffuse.value=g.texture,P.material=E),r.setRenderTarget(null),P.render(r),r.autoClear=Ve}function de(){R(),v.dispose(),E.dispose(),P.dispose(),r.setPixelRatio(s)}o&&Df(r,e,c),j();{let le=r.getSize(new Oe);K(le.x,le.y)}return{render:ne,setSize:K,setQuality:X,dispose:de,params:a,get quality(){return c.name},get preset(){return c},get active(){return p},get supported(){return i},info:()=>({quality:c.name,active:p,width:u,height:f,samples:d?d.samples:0,target:d?d.texture.type===Ti?"half":"byte":"canvas",bloom:!!m,fxaa:!!g})}}function Df(r,e,t){if(typeof t=="string"&&(t=ci[t]),!t||!e)return;let n=r.shadowMap.type!==t.shadowType;r.shadowMap.type=t.shadowType,e.traverse(i=>{if(i.isLight&&i.castShadow&&i.shadow){let s=i.isPointLight?Math.min(t.shadowMapSize,1024):t.shadowMapSize;i.shadow.mapSize.x!==s&&(i.shadow.mapSize.set(s,s),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null))}if(i.isMesh&&i.userData&&i.userData.prop===!0&&(i.castShadow=!!t.propShadows),n&&i.material)for(let s of Array.isArray(i.material)?i.material:[i.material])s.needsUpdate=!0}),r.shadowMap.needsUpdate=!0}var Vo;function o1(r){if(r&&r.getContext&&(r=r.getContext()),!r&&Vo!==void 0)return Vo;let e="",t=null;try{if(!r&&typeof document!="undefined"&&(t=document.createElement("canvas"),r=t.getContext("webgl2",{powerPreference:"high-performance"})||t.getContext("webgl")),r){let n=r.getExtension("WEBGL_debug_renderer_info");if(e=n&&r.getParameter(n.UNMASKED_RENDERER_WEBGL)||r.getParameter(r.RENDERER)||"",t){let i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}}}catch{e=""}return e=String(e),(t||Vo===void 0)&&(Vo=e),e}function c1(r){if(!r)return null;if(/swiftshader|llvmpipe|softpipe|software|microsoft basic/i.test(r))return"Low";let e=r.match(/Adreno\D{0,8}(\d{3})/i);if(e){let t=+e[1];return t>=700||t>=630?"High":t>=615||t>=540?"Medium":"Low"}if(e=r.match(/Mali-?G(\d{2,3})/i),e){let t=e[1];if(t.length===3)return+t[0]>=7||+t>=610&&+t<615?"High":"Medium";let n=+t;return n>=76?"High":n>=71||n>=57?"Medium":"Low"}return/Immortalis|Xclipse|Apple|PowerVR.*(BXM|DXT|CXT)/i.test(r)?"High":/Mali-T|Mali-4|PowerVR|Vivante|VideoCore|Tegra 3/i.test(r)?"Low":/NVIDIA|GeForce|Radeon|AMD|Intel.*(Iris|Arc|Xe)/i.test(r)?"High":/Intel/i.test(r)?"Medium":null}function rh(r){let e=typeof navigator!="undefined"?navigator:{},t=e.hardwareConcurrency||4,n=e.deviceMemory,i=typeof screen!="undefined"?screen:{width:1280,height:720},s=typeof window!="undefined"&&window.devicePixelRatio||1,a=i.width*i.height*s*s,o=c1(o1(r));return o||(o=t>=8&&(n==null||n>=6)?"High":t>=6&&(n==null||n>=4)?"Medium":"Low"),n!=null&&n<=2?o="Low":n!=null&&n<=3&&o==="High"&&(o="Medium"),t<=4&&o==="High"&&(o="Medium"),a>45e5&&o==="Medium"&&(o="Low"),o}var Of="sigilbound.gfx.v1";function l1(){try{let r=JSON.parse(localStorage.getItem(Of)||"null");return r&&typeof r=="object"?r:null}catch{return null}}function h1(r){try{localStorage.setItem(Of,JSON.stringify(r))}catch{}}function Nf(r={}){let{onChange:e,sampleSeconds:t=3,minFps:n=50,upFps:i=58,warmupWindows:s=1,upWindows:a=4}=r,o=l1(),c=o&&ci[o.forced]?o.forced:null,l=c||(o&&ci[o.tier]?o.tier:null)||(ci[r.initial]?r.initial:null)||rh(),h=!c,u=-1,f=0,d=0,g=s,m=0,p=0,x=[],_=!1,b=0,v=()=>h1({tier:l,forced:c,t:Date.now()});function E(ee){f=ee,d=0,x=[]}function P(ee,K){!ci[ee]||ee===l||(l=ee,g=s,m=0,v(),e&&e(ee,ci[ee],K))}function V(){if(x.length<20)return!1;let ee=x.slice().sort((Q,ne)=>Q-ne),K=ee[Math.floor(ee.length/2)];return ee[Math.floor(ee.length*.9)]<=K*1.25}function S(ee){p=ee;let K=V();if(!h)return;if(g>0){g--;return}let X=Ho.indexOf(l);if(ee<n){if(m=0,K)return;X<Ho.length-1&&(_=!0,P(Ho[X+1],"slow"))}else ee>=i&&X>0&&!_&&b<1?++m>=a&&(b++,P(Ho[X-1],"fast")):m=0}function R(ee){if(ee==null&&(ee=performance.now()),u<0){u=ee,E(ee);return}let K=ee-u;if(u=ee,K>1e3||K<=0){E(ee);return}d++,x.push(K);let X=ee-f;X>=t*1e3&&(S(d*1e3/X),E(ee))}function j(ee){if(ee==null||ee==="auto"){c=null,h=!0,g=s,m=0,v(),e&&e(l,ci[l],"auto");return}if(!ci[ee])return;let K=ee!==l;c=ee,h=!1,l=ee,v(),K&&e&&e(ee,ci[ee],"forced")}return{tick:R,force:j,get current(){return l},get preset(){return ci[l]},get fps(){return p},get forced(){return c},get auto(){return h},set auto(ee){h=!!ee,h&&(c=null,v())}}}var zf=[["#1f2b46","#c9805a","#2a2a22","#16141f","#ffc068"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22","#e8f4ff"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e","#ff9a4a"],["#1a2e2a","#7fa088","#23362a","#101c16","#d8ff8a"],["#28203a","#c8a870","#2c2640","#14101e","#ffcf6a"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0","#ffb0d8"],["#101a2e","#5a7ab0","#1a2440","#0c1220","#bcd8ff"],["#0e0a16","#3a2a5a","#180f26","#b080ff","#c890ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606","#ff7a30"]],Bf=["#1a0a0a","#c0401a","#24100c","#100606","#ff6a20"],jf=[{name:"dusk forest",grass:"#4f6a2a",grass2:"#6f7432",worn:"#8a6844",hill:"#41582a",rock:"#7d746a",bark:"#4e3726",leaves:["#3c6a26","#557a2a","#a8702a","#b8522a"],tuft:"#5f7a2c",cloth:"#7a2a22",sil:"#2e2c46",motes:"leaves",moteColor:"#e08a3a"},{name:"teal shore",grass:"#c2a87e",grass2:"#b39b72",worn:"#8c7a5e",hill:"#a8956a",rock:"#6a7078",bark:"#9a8a76",leaves:["#4a6a3a","#5a7a40"],tuft:"#8f9a52",water:"#1f5f6c",cloth:"#d8d0b8",sil:"#24404e",motes:"spray",moteColor:"#e8f6ff"},{name:"red badlands",grass:"#94503a",grass2:"#ad6844",worn:"#c09070",hill:"#8a4632",rock:"#a0553a",bark:"#5e4636",strata:["#8a4430","#b06a46","#6e3426","#c4885a"],tuft:"#857040",cloth:"#d0a040",sil:"#44201f",motes:"dust",moteColor:"#ffc890"},{name:"green marsh",grass:"#3a5630",grass2:"#4f6236",worn:"#6e5a40",hill:"#34502e",rock:"#58605a",bark:"#433a30",leaves:["#4a5a30"],tuft:"#7a8a44",water:"#22402f",cloth:"#5a4a30",sil:"#223c36",motes:"fireflies",moteColor:"#d8ff7a"},{name:"gold ruins",grass:"#58652f",grass2:"#76763c",worn:"#8e8474",hill:"#4c5a2c",rock:"#a49a88",bark:"#5a4636",leaves:["#4c682c","#667a32"],tuft:"#6a7a34",cloth:"#7a2a4a",sil:"#36304c",motes:"sparks",moteColor:"#ffd27a",crystals:!0},{name:"blossom forest",grass:"#557636",grass2:"#748646",worn:"#977660",hill:"#4a6a34",rock:"#8a8088",bark:"#4a3036",leaves:["#e89ac0","#f0b0cc","#d880aa","#f8cade"],tuft:"#6a8a3c",cloth:"#5a3a7a",sil:"#463858",motes:"petals",moteColor:"#ffc0dc"},{name:"moonlit shore",grass:"#a39c8c",grass2:"#958e80",worn:"#77705f",hill:"#8a8474",rock:"#5c6272",bark:"#8a8478",leaves:["#3a5a4a"],tuft:"#6a7a5a",water:"#1a3658",cloth:"#c8d0e0",sil:"#1a2642",motes:"spray",moteColor:"#cfe2ff"},{name:"amethyst badlands",grass:"#5e4e6c",grass2:"#6f5c80",worn:"#9584a6",hill:"#54466a",rock:"#5e4c70",bark:"#4a3c4e",strata:["#56466c","#6f5c86","#463a5a","#88729e"],tuft:"#6a5a7a",cloth:"#3a2a5a",sil:"#221a36",motes:"sparks",moteColor:"#c890ff",crystals:!0},{name:"glow marsh",grass:"#2c4846",grass2:"#385850",worn:"#5e586c",hill:"#284242",rock:"#4a5460",bark:"#38384a",leaves:["#2a4a4a"],tuft:"#4a7a6a",water:"#123040",cloth:"#2a3a5a",sil:"#122838",motes:"fireflies",moteColor:"#80e8ff",mushrooms:!0},{name:"burning ruins",grass:"#665834",grass2:"#7a6238",worn:"#8a7a6a",hill:"#5a4a30",rock:"#7a6e64",bark:"#4a3a2e",leaves:["#5a5a2a","#7a5a26"],tuft:"#7a6a3a",cloth:"#6a1a1a",sil:"#381410",motes:"embers",moteColor:"#ff8a3a",crystals:!0}],Xf={name:"titan caldera",grass:"#3a3436",grass2:"#463e3e",worn:"#6a625e",hill:"#332e30",rock:"#2e2a2e",bark:"#2a2222",tuft:"#3a3030",cloth:"#5a1a10",sil:"#1e0c0a",motes:"embers",moteColor:"#ff7a2a"},Uf=[{a:"grass",b:"soil",hills:4.5,sil:"trees",silFar:"peaks"},{a:"sand",b:"shingle",hills:2,sil:"islands",silFar:"peaks"},{a:"cracked",b:"gravel",hills:3,sil:"mesa",silFar:"mesa"},{a:"grass",b:"mud",hills:1.6,sil:"trees",silFar:"peaks"},{a:"grass",b:"flagstone",hills:3.5,sil:"ruins",silFar:"peaks"},{a:"basalt",b:"ash",hills:4,sil:"peaks",silFar:"volcano"}],Gf={high:{tex:512,grid:120,tufts:1500,scatter2:420,rocks:190,props:1,motes:160,aniso:4,casters:!0,ringSeg:220},medium:{tex:256,grid:90,tufts:850,scatter2:240,rocks:120,props:.7,motes:90,aniso:2,casters:!0,ringSeg:160},low:{tex:128,grid:64,tufts:380,scatter2:100,rocks:60,props:.45,motes:0,aniso:1,casters:!1,ringSeg:110}};function oh(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $n(r,e,t){let n=Math.imul(r|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var ch=r=>r*r*(3-2*r),Zi=r=>r<0?0:r>1?1:r,Ot=(r,e,t)=>ch(Zi((t-r)/(e-r))),Nr=(r,e,t)=>r+(e-r)*t;function Ni(r,e,t,n=0,i=0){let s=Math.floor(r),a=Math.floor(e),o=ch(r-s),c=ch(e-a),l=s,h=s+1,u=a,f=a+1;n&&(l=(l%n+n)%n,h=(h%n+n)%n),i&&(u=(u%i+i)%i,f=(f%i+i)%i);let d=$n(l,u,t),g=$n(h,u,t),m=$n(l,f,t),p=$n(h,f,t);return d+(g-d)*o+(m-d)*c+(d-g-m+p)*o*c}function Qn(r,e,t,n=4){let i=0,s=1,a=0,o=1;for(let c=0;c<n;c++)i+=Ni(r*o,e*o,t+c*17)*s,a+=s,s*=.5,o*=2;return i/a}function jn(r,e,t,n,i,s=4){let a=0,o=1,c=0,l=1;for(let h=0;h<s;h++)a+=Ni(r*t*l,e*n*l,i+h*31,t*l,n*l)*o,c+=o,o*=.5,l*=2;return a/c}function Or(r,e,t=.85){let n=new Float32Array(r*r*2);for(let i=0;i<r;i++)for(let s=0;s<r;s++)n[(i*r+s)*2]=s+.5+($n(s,i,e)-.5)*t,n[(i*r+s)*2+1]=i+.5+($n(s,i,e+9)-.5)*t;return(i,s,a)=>{let o=i*r,c=s*r,l=Math.floor(o),h=Math.floor(c),u=9,f=9,d=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let p=l+m,x=h+g,_=(p%r+r)%r,b=(x%r+r)%r,v=(b*r+_)*2,E=n[v]+(p-_),P=n[v+1]+(x-b),V=Math.hypot(E-o,P-c);V<u?(f=u,u=V,d=b*r+_):V<f&&(f=V)}a.f1=u,a.f2=f,a.id=d}}var Hf={grass(r){return(e,t,n)=>{let i=Ni(e*160,t*48,r,160,48),s=Ni(e*64,t*200,r+3,64,200),a=jn(e,t,6,6,r+5,3),o=Ni(e*256,t*256,r+7,256,256),c=i*.55+s*.45;n.a=.58+.28*c+.2*a-(o>.86?.16:0)+(o<.06?.12:0),n.h=c*.6+a*.4,n.r=.92,n.g=0}},soil(r){let e=Or(22,r),t={};return(n,i,s)=>{e(n,i,t);let a=jn(n,i,5,5,r+2,4),o=Ni(n*220,i*220,r+4,220,220),c=Ot(.42,.18,t.f1)*($n(t.id,1,r)>.45?1:0);s.a=.66+.22*a+.1*o+c*(.12+.12*$n(t.id,2,r)),s.h=a*.5+c*.5+o*.1,s.r=.95-c*.15,s.g=0}},sand(r){return(e,t,n)=>{let i=jn(e,t,3,3,r,3),s=Math.sin((t+i*.35+e*.15)*Math.PI*2*18)*.5+.5,a=Ni(e*256,t*256,r+2,256,256),o=jn(e,t,4,4,r+6,3);n.a=.8+.1*s+.08*a+.06*o-(a>.93?.2:0),n.h=s*.7+a*.15+o*.15,n.r=.96,n.g=0}},shingle(r){let e=Or(26,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=Ot(0,.32,t.f2-t.f1),o=$n(t.id,3,r);s.a=.5+a*(.28+.25*o),s.h=a*(.6+.4*(1-t.f1)),s.r=.55+.3*(1-a),s.g=0}},cracked(r){let e=Or(9,r,.9),t={};return(n,i,s)=>{e(n,i,t);let a=jn(n,i,8,8,r+1,4),o=Ot(.07,.015,t.f2-t.f1+(a-.5)*.03),c=$n(t.id,5,r);s.a=.72+.16*c+.12*a-o*.42,s.h=(.7+.3*a)*(1-o)+.05,s.r=.95,s.g=o}},gravel(r){let e=Or(40,r,.95),t={};return(n,i,s)=>{e(n,i,t);let a=Ot(0,.25,t.f2-t.f1),o=jn(n,i,6,6,r+2,3);s.a=.68+a*.26*$n(t.id,4,r)+o*.12,s.h=a*.7+o*.3,s.r=.93,s.g=0}},mud(r){return(e,t,n)=>{let i=jn(e,t,4,4,r,5),s=jn(e,t,12,12,r+3,3),a=Ot(.55,.66,i);n.a=.72+.16*s-a*.22,n.h=i*.8+s*.2-a*.3,n.r=Nr(.85,.28,a),n.g=0}},flagstone(r){let e=Or(6,r,.75),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=jn(n,i,10,10,r+2,4),c=Ni(n*180,i*180,r+4,180,180),l=Ot(.09,.03,a),h=Ot(.03,.2,a),u=$n(t.id,6,r);s.a=(.7+.2*u+.1*o-(c>.9?.1:0))*(1-l*.5),s.h=h*(.75+.25*o),s.r=.82+l*.1,s.g=0}},basalt(r){let e=Or(10,r,.4),t={};return(n,i,s)=>{e(n,i,t);let a=t.f2-t.f1,o=jn(n,i,8,8,r+1,4),c=Ot(.08,.02,a),l=$n(t.id,8,r);s.a=.66+.16*l+.14*o-c*.4,s.h=(1-c)*(.7+.3*o),s.r=.78+.15*o,s.g=c}},ash(r){return(e,t,n)=>{let i=jn(e,t,6,6,r,4),s=Ni(e*240,t*240,r+2,240,240);n.a=.72+.18*i+.1*s,n.h=i*.7+s*.3,n.r=.97,n.g=0}}},lh=new Map;function u1(r,e,t,n){let i=r+"|"+e+"|"+t+"|"+n,s=lh.get(i);if(s)return s.refs++,s;let a=Hf[r](11),o=Hf[e](23),c={},l={},h=new Uint8Array(t*t*4),u=new Uint8Array(t*t*4),f=m=>Math.max(0,Math.min(255,Math.round(m*255)));for(let m=0;m<t;m++)for(let p=0;p<t;p++){let x=p/t,_=m/t,b=(m*t+p)*4;a(x,_,c),o(x,_,l),h[b]=f(c.a),h[b+1]=f(l.a),h[b+2]=f(jn(x,_,3,3,77,3)),h[b+3]=f(c.g),u[b]=f(c.h),u[b+1]=f(c.r),u[b+2]=f(l.h),u[b+3]=f(l.r)}let d=(m,p)=>{let x=new vr(m,t,t,kn,di);return x.wrapS=x.wrapT=Jn,x.magFilter=Cn,x.minFilter=Si,x.generateMipmaps=!0,x.anisotropy=n,x.name=p,x.needsUpdate=!0,x},g={map:d(h,"arena-ground-map"),data:d(u,"arena-ground-data"),refs:1,key:i,bytes:t*t*4*2*1.333};return lh.set(i,g),g}function f1(r){--r.refs>0||(r.map.dispose(),r.data.dispose(),lh.delete(r.key))}var J1=new gt,Vf=new bn,Wf=new gr,d1=new k,ah=new k;function p1(r,e=[0,0,0],t=1){return Wf.set(e[0],e[1],e[2]),Vf.setFromEuler(Wf),typeof t=="number"?ah.set(t,t,t):ah.set(t[0],t[1],t[2]),new gt().compose(d1.set(r[0],r[1],r[2]),Vf,ah)}function Ca(r,e,t,n=1.6){let i=r.attributes.position;for(let s=0;s<i.count;s++){let a=i.getX(s),o=i.getY(s),c=i.getZ(s),l=Qn(a*n+13.1,c*n+o*n*.7+7.7,t,2)-.5,h=1+l*e*2;i.setXYZ(s,a*h,o*(1+l*e),c*h)}return r.computeVertexNormals(),r}function m1(r){let e=0,t=0;for(let d of r)e+=d.g.attributes.position.count,t+=d.g.index?d.g.index.count:d.g.attributes.position.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2),a=new Float32Array(e*3),o=e>65535?new Uint32Array(t):new Uint16Array(t),c=new Pn,l=new k,h=0,u=0;for(let{g:d,m:g,c:m}of r){let p=d.attributes.position,x=d.attributes.normal,_=d.attributes.uv,b=d.attributes.color;c.getNormalMatrix(g);for(let v=0;v<p.count;v++){l.fromBufferAttribute(p,v).applyMatrix4(g),n.set([l.x,l.y,l.z],(h+v)*3),x&&(l.fromBufferAttribute(x,v).applyMatrix3(c).normalize(),i.set([l.x,l.y,l.z],(h+v)*3)),_&&(s[(h+v)*2]=_.getX(v),s[(h+v)*2+1]=_.getY(v));let E=b?b.getX(v):1;a[(h+v)*3]=m.r*E,a[(h+v)*3+1]=m.g*(b?b.getY(v):1),a[(h+v)*3+2]=m.b*(b?b.getZ(v):1)}if(d.index)for(let v=0;v<d.index.count;v++)o[u++]=d.index.getX(v)+h;else for(let v=0;v<p.count;v++)o[u++]=v+h;h+=p.count}let f=new It;return f.setAttribute("position",new Tt(n,3)),f.setAttribute("normal",new Tt(i,3)),f.setAttribute("uv",new Tt(s,2)),f.setAttribute("color",new Tt(a,3)),f.setIndex(new Tt(o,1)),f.computeBoundingSphere(),f.computeBoundingBox(),f}function Ra(r,e,t,n,i,s=.035){let a=oh(i),o=[],c=[],l=[],h=[];for(let f=0;f<r;f++){let d=f/r*Math.PI*2+a()*.8,g=t*(.2+a()*.8),m=e*(.6+a()*.5),p=s*(.7+a()*.6),x=Math.cos(d)*g*.3,_=Math.sin(d)*g*.3,b=Math.cos(d)*(g+n*m),v=Math.sin(d)*(g+n*m),E=-Math.sin(d)*p,P=Math.cos(d)*p,V=(x+b)*.5,S=(_+v)*.5,R=[[x-E,0,_-P],[x+E,0,_+P],[V+E*.6,m*.55,S+P*.6],[V-E*.6,m*.55,S-P*.6],[b,m,v]],j=[[0,1,2],[0,2,3],[3,2,4]];for(let ee of j)for(let K of ee){o.push(...R[K]),c.push(Math.cos(d)*.35,.9,Math.sin(d)*.35);let X=R[K][1]/m;l.push(.45+.65*X,.5+.6*X,.45+.55*X),h.push(0,X)}}let u=new It;return u.setAttribute("position",new lt(o,3)),u.setAttribute("normal",new lt(c,3)),u.setAttribute("color",new lt(l,3)),u.setAttribute("uv",new lt(h,2)),u}var g1=St.bumpmap_pars_fragment.replace("uniform float bumpScale;",`uniform float bumpScale;
	float sbH( vec2 uv ) { vec4 t = texture2D( bumpMap, uv ); return mix( t.x, t.z, vSb.x ); }`).replace(/texture2D\( bumpMap, (vUv[^)]*)\)\.x/g,"sbH( $1 )");function b1(r,e,t){let n=new Qt({color:16777215,vertexColors:!0,roughness:1,metalness:0,map:r.map,roughnessMap:r.data,bumpMap:r.data,bumpScale:.035});return n.onBeforeCompile=i=>{i.uniforms.uGlow={value:t},i.uniforms.uTime=e.uTime,i.vertexShader=`attribute vec2 aSb;
varying vec2 vSb;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSb = aSb;`),i.fragmentShader=`varying vec2 vSb;
uniform vec3 uGlow;
uniform float uTime;
`+i.fragmentShader.replace("#include <bumpmap_pars_fragment>",g1).replace("#include <map_fragment>",`
        vec4 sbT = texture2D( map, vUv );
        float sbM = texture2D( map, vUv * 0.0917 + vec2( 0.31, 0.17 ) ).b;
        diffuseColor.rgb *= mix( sbT.r, sbT.g, vSb.x ) * ( 0.78 + 0.44 * sbM );`).replace("#include <roughnessmap_fragment>",`
        float roughnessFactor = roughness;
        vec4 texelRoughness = texture2D( roughnessMap, vUv );
        roughnessFactor *= mix( texelRoughness.g, texelRoughness.a, vSb.x );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uGlow * sbT.a * vSb.y * ( 0.75 + 0.25 * sin( uTime * 1.7 + vUv.x * 3.0 + vUv.y * 2.0 ) );`)},n.customProgramCacheKey=()=>"sb-ground",n}var x1=St.normal_fragment_begin.replace("normal = normal * faceDirection;","");function Pa(r,e,t,n){return r.onBeforeCompile=i=>{i.uniforms.uTime=e.uTime,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+n),r.side===cn&&t!=="cloth"&&(i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",x1))},r.customProgramCacheKey=()=>"sb-wind-"+t,r}var y1=`
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
}`,v1=`
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
}`;function qf(r,e){var t;return new Mn({uniforms:{uTime:r.uTime,uScale:r.uScale,uSway:{value:e.sway||0},uFlicker:{value:e.flicker||0},uFall:{value:e.fall||0},uDrift:{value:new k().fromArray(e.drift||[0,0,0])},uBox:{value:new k().fromArray(e.box||[0,0,0])},uCenter:{value:new k().fromArray(e.center||[0,0,0])},uOpacity:{value:(t=e.opacity)!=null?t:1},uHard:{value:e.hard||0}},vertexShader:y1,fragmentShader:v1,transparent:!0,depthWrite:!1,blending:e.additive===!1?as:Ii})}function Yf(r,e={}){let t=((e.chapter|0)%10+10)%10,n=!!e.titan,i=n?5:t%5,s=Uf[i],a=Gf[e.quality]||Gf.high,o=(e.palette&&e.palette.length>=4?e.palette:n?Bf:zf[t]).slice();o[4]||(o[4]=(n?Bf:zf[t])[4]);let c=n?Xf:jf[t],l=y=>new Ie(y),h=.42,u=.55,f=(y,M)=>new Ie(y).multiplyScalar(M),d={skyTop:l(o[0]),horizon:l(o[1]),accent:l(o[4]),grass:f(c.grass,h),grass2:f(c.grass2,h),worn:f(c.worn,h*.9),hill:f(c.hill,h),rock:f(c.rock,u),bark:f(c.bark,u),tuft:f(c.tuft,h*1.1),cloth:f(c.cloth,u),sil:l(c.sil)};d.fog=d.horizon.clone().lerp(d.skyTop,.45).multiplyScalar(.85);let g=n?1337:101+t*7,m=oh(g),p=(y,M)=>y+(M-y)*m(),x=new Yt;x.name="arena",r.add(x);let _={geos:new Set,mats:new Set,texs:new Set},b=y=>y&&(y.isBufferGeometry?_.geos.add(y):y.isMaterial?y.userData.shared||_.mats.add(y):y.isTexture&&_.texs.add(y),y),v=0,E={uTime:{value:0},uScale:{value:800}},P=[],V=()=>{if(!e.renderer)return 1688;let y=new Oe;return e.renderer.getDrawingBufferSize(y),y.y};E.uScale.value=V()*.5*1.07;let S=s===Uf[1]?-.12:i===3?-.1:null,R=n?-.25:null,j=[[.6,14],[.4,5],[0,-.5],[-.8,-6.5],[-2.6,-13],[-1.2,-21],[2.6,-30],[4.5,-42]],ee=(y,M)=>{let A=1e9;for(let L=0;L<j.length-1;L++){let[J,z]=j[L],[Y,Z]=j[L+1],ce=Y-J,ye=Z-z,Ae=Zi(((y-J)*ce+(M-z)*ye)/(ce*ce+ye*ye)),$e=Math.hypot(y-J-ce*Ae,M-z-ye*Ae);$e<A&&(A=$e)}return A},K=(y,M)=>Math.hypot(y/4.8,(M+.6)/4.5),X=(y,M)=>Math.hypot(y/6.8,(M+1.2)/6.8),Q=(y,M)=>{let A=Ot(1,2.3,X(y,M)),L=(Qn(y*.07,M*.07,g+1,3)-.5)*1.4*A,J=Ot(-9,-38,M),z=Ot(9,26,Math.abs(y));if(L+=s.hills*Math.max(J,z*.85)*(.35+.9*Qn(y*.035+3,M*.035,g+2,3))*A,i===1){let Z=-11-y*.3+(Qn(y*.08,M*.08,g+3,3)-.5)*6,ce=Ot(Z+1.5,Z-2.5,M)*A;L=Nr(L,-1.6,ce)}else if(i===3){let Z=Qn(y*.09+5,M*.09,g+4,3),ce=Ot(.5,.6,Z)*Ot(1.05,1.5,X(y,M));L=Nr(L,-.9,ce)}else if(n){let Z=-14+Math.sin(y*.18)*2.2+(Qn(y*.1,3,g+5,2)-.5)*2,ce=Ot(2.4,1.2,Math.abs(M-Z))*Ot(.9,1.4,X(y,M)),ye=Ot(.62,.7,Qn(y*.08+9,M*.08,g+6,3))*Ot(1.3,1.8,X(y,M));L=Nr(L,-1.4,Math.max(ce,ye))}let Y=ee(y,M);return L=Nr(L,Math.min(L,.15+L*.2),Ot(2.5,.8,Y)*A),L},ne=(y,M)=>{let A=Qn(y*.6,M*.6,g+7,3),L=Ot(1.08,.78,K(y,M)+(A-.5)*.35),J=.85+(Qn(y*.2,M*.2,g+8,2)-.5)*.6,z=Ot(J,J*.45,ee(y,M)+(A-.5)*.4),Y=Math.max(L*(.75+.25*A),z*.9);return Y=Math.max(Y,Ot(.72,.8,Qn(y*.15+2,M*.15,g+9,3))*.8),Zi(Y)},de=a.grid,le=95,te=new Float32Array((de+1)*(de+1)),se=y=>le*(.22*y+.78*y*y*y),Me=y=>{let M=-1,A=1;for(let L=0;L<24;L++){let J=(M+A)/2;se(J)<y?M=J:A=J}return(M+A)/2},Ve=(y,M)=>{let A=(Me(y)+1)/2*de,L=(Me(M+6)+1)/2*de,J=Math.min(de-1,Math.max(0,Math.floor(A))),z=Math.min(de-1,Math.max(0,Math.floor(L))),Y=Zi(A-J),Z=Zi(L-z),ce=de+1,ye=te[z*ce+J],Ae=te[z*ce+J+1],$e=te[(z+1)*ce+J],_t=te[(z+1)*ce+J+1];return Y+Z<=1?ye+(Ae-ye)*Y+($e-ye)*Z:_t+($e-_t)*(1-Y)+(Ae-_t)*(1-Z)};{let y=de,M=(y+1)*(y+1),A=new Float32Array(M*3),L=new Float32Array(M*2),J=new Float32Array(M*3),z=new Float32Array(M*2),Y=4.2,Z=new Ie;for(let Mt=0;Mt<=y;Mt++)for(let He=0;He<=y;He++){let zt=se(He/y*2-1),mt=se(Mt/y*2-1)-6,Je=Mt*(y+1)+He,Rt=Q(zt,mt),Vt=ne(zt,mt);A[Je*3]=zt,A[Je*3+1]=Rt,A[Je*3+2]=mt,te[Je]=Rt,L[Je*2]=zt/Y,L[Je*2+1]=-mt/Y;let fn=Qn(zt*.12,mt*.12,g+10,3),yt=Qn(zt*.5,mt*.5,g+11,2);Z.copy(d.grass).lerp(d.grass2,Ot(.35,.7,fn)),Z.lerp(d.hill,Zi(Rt/Math.max(1,s.hills))*.8),Z.multiplyScalar(.9+.2*yt),Z.lerp(d.worn,Vt);let Jt=0;if(S!=null){let Bt=Ot(S+.5,S+.05,Rt);Z.multiplyScalar(1-Bt*.4),i===1&&Z.lerp(f("#e8f0f0",.55),Ot(.09,0,Math.abs(Rt-S-.04))*.8)}n&&(Jt=Ot(R+.9,R+.15,Rt)+Ot(.9,.55,K(zt,mt))*.3+.06,Z.lerp(new Ie("#2a1210"),Ot(R+.6,R,Rt)*.6)),J[Je*3]=Z.r,J[Je*3+1]=Z.g,J[Je*3+2]=Z.b,z[Je*2]=Vt,z[Je*2+1]=Jt}let ce=new Uint32Array(y*y*6),ye=0;for(let Mt=0;Mt<y;Mt++)for(let He=0;He<y;He++){let zt=Mt*(y+1)+He,mt=zt+1,Je=zt+y+1,Rt=Je+1;ce[ye++]=zt,ce[ye++]=Je,ce[ye++]=mt,ce[ye++]=mt,ce[ye++]=Je,ce[ye++]=Rt}let Ae=b(new It);Ae.setAttribute("position",new Tt(A,3)),Ae.setAttribute("uv",new Tt(L,2)),Ae.setAttribute("color",new Tt(J,3)),Ae.setAttribute("aSb",new Tt(z,2)),Ae.setIndex(new Tt(ce,1)),Ae.computeVertexNormals(),Ae.computeBoundingSphere();let $e=Math.min(a.aniso,e.renderer?e.renderer.capabilities.getMaxAnisotropy():a.aniso);var ie=u1(s.a,s.b,a.tex,$e);v+=ie.bytes;let _t=n?new Ie("#ff5a14").multiplyScalar(2.2):new Ie(0,0,0),Ut=b(b1(ie,E,_t)),Ht=new Et(Ae,Ut);Ht.receiveShadow=!0,Ht.name="arena-ground",x.add(Ht)}if(S!=null||n){let M=new Uint8Array(65536),A=(Z,ce)=>jn(Z/128,ce/128,6,6,g+40,3)*.7+Ni(Z/128*24,ce/128*24,g+41,24,24)*.3;for(let Z=0;Z<128;Z++)for(let ce=0;ce<128;ce++){let ye=(Z*128+ce)*4;if(n){let Ae=jn(ce/128,Z/128,4,4,g+42,4),$e=jn(ce/128,Z/128,9,9,g+43,3),_t=Ot(.1,0,Math.abs(Ae-.5))*.8+$e*.35;M[ye]=255*Zi(.55+_t*.45),M[ye+1]=255*Zi(.18+_t*.55),M[ye+2]=255*Zi(.05+_t*.2),M[ye+3]=255}else{let Ae=A(ce+1,Z)-A(ce-1,Z),$e=A(ce,Z+1)-A(ce,Z-1),_t=-Ae*6,Ut=-$e*6,Ht=1,Mt=Math.hypot(_t,Ut,Ht);M[ye]=(_t/Mt*.5+.5)*255,M[ye+1]=(Ut/Mt*.5+.5)*255,M[ye+2]=(Ht/Mt*.5+.5)*255,M[ye+3]=255}}let L=b(new vr(M,128,128,kn,di));L.wrapS=L.wrapT=Jn,L.magFilter=Cn,L.minFilter=Si,L.generateMipmaps=!0,L.repeat.set(18,18),L.needsUpdate=!0,n&&(L.encoding=xt),v+=128*128*4*1.33;let J;if(n)J=b(new nn({map:L,color:new Ie(1.5,1.05,.85),toneMapped:!1})),P.push(Z=>{L.offset.set(Z*.004,Z*.007)});else{let Z=f(c.water,.5);J=b(new Qt({color:Z,roughness:.18,metalness:.2,normalMap:L,normalScale:new Oe(.3,.3),envMapIntensity:.55})),P.push(ce=>{L.offset.set(ce*.006,ce*.011)})}let z=b(new pi(190,190,1,1));z.rotateX(-Math.PI/2);let Y=new Et(z,J);Y.position.set(0,n?R:S,-6),Y.receiveShadow=!n,Y.name=n?"arena-lava":"arena-water",x.add(Y)}{let y=a.tex>=512||a.tex>=256?512:256,M=n||c.crystals||i===3&&t===8,A=()=>{let Je=document.createElement("canvas");return Je.width=Je.height=y,Je},L=A(),J=L.getContext("2d"),z=M?A():null,Y=z&&z.getContext("2d"),Z=oh(g+99),ce=y/2,ye=y/2,Ae=y*.43,$e=Je=>{Je(J,1),Y&&Je(Y,0)};J.fillStyle="#000",J.fillRect(0,0,y,y),Y&&(Y.fillStyle="#000",Y.fillRect(0,0,y,y)),J.lineCap="round",J.lineJoin="round",Y&&(Y.lineCap="round",Y.lineJoin="round"),$e((Je,Rt)=>{Je.strokeStyle=Rt?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.9)",Je.lineWidth=y*.011,Je.beginPath(),Je.arc(ce,ye,Ae,0,Math.PI*2),Je.stroke(),Je.lineWidth=y*.006,Je.beginPath(),Je.arc(ce,ye,Ae*.86,0,Math.PI*2),Je.stroke(),Rt&&(Je.lineWidth=y*.004,Je.beginPath(),Je.arc(ce,ye,Ae*.42,0,Math.PI*2),Je.stroke())});let _t=[];for(let Je=0;Je<6;Je++){let Rt=[],Vt=2+Math.floor(Z()*3);for(let fn=0;fn<Vt;fn++)Rt.push([Z()*2-1,Z()*2-1,Z()*2-1,Z()*2-1,Z()<.3]);_t.push(Rt)}let Ut=18;for(let Je=0;Je<Ut;Je++){let Rt=Je/Ut*Math.PI*2,Vt=ce+Math.cos(Rt)*Ae*.93,fn=ye+Math.sin(Rt)*Ae*.93,yt=y*.018,Jt=_t[Je%_t.length];$e((Bt,Gt)=>{Bt.save(),Bt.translate(Vt,fn),Bt.rotate(Rt+Math.PI/2),Bt.strokeStyle=Gt?"rgba(255,255,255,0.6)":"rgba(255,255,255,1)",Bt.lineWidth=y*.0045;for(let[dn,Yn,hi,yi,ti]of Jt)Bt.beginPath(),ti?Bt.arc(dn*yt*.5,Yn*yt*.5,yt*.5,0,Math.PI*(1+Math.abs(hi))):(Bt.moveTo(dn*yt,Yn*yt),Bt.lineTo(hi*yt,yi*yt)),Bt.stroke();Bt.restore()})}let Ht=(Je,Rt,Vt,fn,yt,Jt)=>{let Bt=Je,Gt=Rt,dn=6+Math.floor(Z()*6);for(let Yn=0;Yn<dn;Yn++){Vt+=(Z()-.5)*.9;let hi=Bt+Math.cos(Vt)*fn/dn,yi=Gt+Math.sin(Vt)*fn/dn;$e((ti,Ia)=>{ti.strokeStyle=Ia?"rgba(255,255,255,0.75)":"rgba(255,255,255,0.8)",ti.lineWidth=Math.max(1,yt*(1-Yn/dn)),ti.beginPath(),ti.moveTo(Bt,Gt),ti.lineTo(hi,yi),ti.stroke()}),Jt<2&&Z()<.18&&Ht(hi,yi,Vt+(Z()<.5?.7:-.7),fn*.45,yt*.6,Jt+1),Bt=hi,Gt=yi}};for(let Je=0;Je<9;Je++){let Rt=Z()*Math.PI*2,Vt=Z()<.6;Ht(ce+Math.cos(Rt)*Ae,ye+Math.sin(Rt)*Ae,Rt+(Vt?0:Math.PI)+(Z()-.5)*.6,y*(.08+Z()*.12),y*.008,0)}{let Je=J.createRadialGradient(ce,ye,Ae*.7,ce,ye,Ae*1.02);Je.addColorStop(0,"rgba(255,255,255,0)"),Je.addColorStop(.88,"rgba(255,255,255,0.08)"),Je.addColorStop(1,"rgba(255,255,255,0)"),J.fillStyle=Je,J.fillRect(0,0,y,y)}let Mt=b(new mi(L));Mt.anisotropy=Math.min(4,a.aniso),v+=y*y*4*1.33;let He=b(new Qt({color:n?new Ie("#120806"):d.worn.clone().multiplyScalar(.28),roughness:.95,metalness:0,alphaMap:Mt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));if(z){let Je=b(new mi(z));Je.encoding=xt,v+=y*y*4*1.33,He.emissiveMap=Je,He.emissive=d.accent.clone(),He.emissiveIntensity=n?3:2.2,P.push(Rt=>{He.emissiveIntensity=(n?2.8:2)+Math.sin(Rt*1.6)*.4})}let zt=b(new pi(1,1));zt.rotateX(-Math.PI/2);let mt=new Et(zt,He);mt.scale.set(10.4,1,9.8),mt.position.set(0,.02,-.6),mt.receiveShadow=!0,mt.renderOrder=1,mt.name="arena-decal",x.add(mt)}let me=Ea("stone",{size:a.tex>=512?256:128,repeat:1}),De=Ea("wood",{size:a.tex>=512?256:128}),Ge=Ea("cloth",{size:128}),pe={stone:b(new Qt({color:16777215,vertexColors:!0,map:me.map,roughnessMap:me.roughnessMap,bumpMap:me.bumpMap,bumpScale:.03,roughness:1,flatShading:!0,envMapIntensity:.3})),bark:b(new Qt({color:16777215,vertexColors:!0,map:De.map,roughnessMap:De.roughnessMap,bumpMap:De.bumpMap,bumpScale:.02,roughness:1,envMapIntensity:.3})),leaf:b(Pa(new Qt({color:16777215,vertexColors:!0,roughness:.85,flatShading:!0,envMapIntensity:.4}),E,"leaf","transformed.x += sin( uTime * 1.3 + position.x * 0.35 + position.z * 0.2 ) * 0.04 * max( position.y - 1.5, 0.0 );")),cloth:b(Pa(new Qt({color:16777215,vertexColors:!0,map:Ge.map,roughness:.95,side:cn,envMapIntensity:.3}),E,"cloth","transformed.z += sin( uTime * 2.6 - uv.y * 5.0 + position.x * 0.7 ) * 0.09 * ( 1.0 - uv.y );")),metal:b(new Qt({color:16777215,vertexColors:!0,roughness:.45,metalness:.8,envMapIntensity:1})),crystal:b(new Qt({color:d.accent.clone().multiplyScalar(.25),emissive:d.accent,emissiveIntensity:2.5,roughness:.2,metalness:.1,flatShading:!0,envMapIntensity:1.2})),glow:b(new nn({vertexColors:!0,color:new Ie(2.2,2.2,2.2),toneMapped:!1}))};(c.crystals||c.mushrooms)&&P.push(y=>{pe.crystal.emissiveIntensity=2.5+Math.sin(y*1.9)*.4});let ft={},it=new Set,Ye=y=>(it.add(y),y),Ue=y=>y?"s":0,je=(y,M,A,L,J,z,Y)=>{let Z=y+"|"+(Y==="s"?"s":Y?1:0);(ft[Z]||(ft[Z]=[])).push({g:M,m:p1(A,L,J),c:z.isColor?z:l(z)})},Ze=(y,M=.12)=>y.clone().multiplyScalar(1-M+m()*M*2),Ne={cyl6:Ye(new In(.5,.5,1,6,1)),cyl8:Ye(new In(.5,.5,1,8,1)),trunk:Ye(new In(.32,.5,1,7,2)),cone:Ye(new wr(.5,1,7,1)),blob:Ye(Ca(new Bs(1,1),.18,g+3,1.2)),blob2:Ye(Ca(new Bs(1,1),.22,g+5,1.6)),boulder:Ye(Ca(new Bs(1,1),.25,g+7,1.1)),box:Ye(new Ai(1,1,1)),col:Ye(new In(.3,.34,1,10,1)),oct:Ye(new Us(.5,0)),hex:Ye(new In(.5,.5,1,6,1)),rockCyl:Ye(Ca(new In(.5,.56,1,9,3),.12,g+9,2.2)),banner:Ye(new pi(.7,1.5,3,6)),bowl:Ye(new In(.42,.22,.28,10,1,!0)),cap:Ye(new Di(.5,8,4,0,Math.PI*2,0,Math.PI/2))};Ne.banner.translate(0,-.75,0);let $t=[],hn=(y,M,A,L,J)=>$t.push({p:[y,M,A],c:L.isColor?L:l(L),s:J}),sn=(y,M,A=0)=>!(Math.abs(y)<4.5+A&&M>-7-A&&M<4.5+A)&&ee(y,M)>1.3+A*.5,Nt=[],tt=(y,M,A,L,J,z=0,Y=40)=>{for(let Z=0;Z<Y;Z++){let ce=p(y,M),ye=p(A,L);if(sn(ce,ye,z)&&!(S!=null&&Ve(ce,ye)<S+.05&&i!==1)&&!(R!=null&&Ve(ce,ye)<0)&&!Nt.some(Ae=>Math.hypot(Ae[0]-ce,Ae[1]-ye)<Math.max(J,Ae[2])))return Nt.push([ce,ye,J]),[ce,Ve(ce,ye),ye]}return null},ht=y=>Math.max(1,Math.round(y*a.props)),Nn=(y,M,A,L,J=1)=>{for(let z of[-1,1])for(let Y=0;Y<M;Y++){let Z=tt(z*4.8,z*7.5,-8.5,-1,2.4*J);Z&&y(Z,!0,1)}for(let z=0;z<A;z++){let Y=tt(-10,10,-15,-8.2,2.6*J);Y&&y(Y,Y[2]>-13,.95)}for(let z=0;z<ht(L);z++){let Y=tt(-28,28,-42,-14,3*J);Y&&y(Y,!1,1.2)}},xn=([y,M,A],L,J=1)=>{let z=p(.85,1.35)*J,Y=[p(-.08,.08),0,p(-.08,.08)];je("bark",Ne.trunk,[y,M+1.3*z,A],Y,[.42*z,2.6*z,.42*z],Ze(d.bark),L);let Z=c.leaves||["#4a6a30"],ce=3+Math.floor(m()*2);for(let ye=0;ye<ce;ye++){let Ae=m()*6.28,$e=ye===0?0:p(.6,1)*z;je("leaf",ye%2?Ne.blob2:Ne.blob,[y+Math.cos(Ae)*$e,M+(ye===0?3.3:p(2.5,3.2))*z,A+Math.sin(Ae)*$e*.8],[m()*3,m()*3,0],[p(1,1.35)*z,p(.8,1)*z,p(1,1.35)*z],Ze(f(Z[Math.floor(m()*Z.length)],u),.1),L)}},B=([y,M,A],L,J=1)=>{let z=p(.9,1.5)*J;je("bark",Ne.trunk,[y,M+.8*z,A],[0,0,0],[.3*z,1.6*z,.3*z],Ze(d.bark),L);let Y=Ze(f((c.leaves||["#3a5a2a"])[0],u*.75),.1);for(let Z=0;Z<3;Z++)je("leaf",Ne.cone,[y,M+(1.5+Z*1.05)*z,A],[0,m()*3,0],[(2.2-Z*.55)*z,1.8*z,(2.2-Z*.55)*z],Y,L)},I=([y,M,A],L,J=1)=>{let z=p(.9,1.4)*J,Y=Ze(d.bark.clone().multiplyScalar(.85));je("bark",Ne.trunk,[y,M+1.2*z,A],[p(-.12,.12),0,p(-.12,.12)],[.36*z,2.4*z,.36*z],Y,L);for(let Z=0;Z<4;Z++){let ce=m()*6.28,ye=p(1.4,2.3)*z,Ae=p(.6,1.1);je("bark",Ne.trunk,[y+Math.cos(ce)*.35*z,M+ye+.35*z,A+Math.sin(ce)*.35*z],[Math.sin(ce)*Ae,0,-Math.cos(ce)*Ae],[.12*z,p(1,1.6)*z,.12*z],Y,L)}},be=([y,M,A],L,J=1,z=d.rock)=>{let Y=p(.6,1.3)*J;je("stone",Ne.boulder,[y,M+.25*Y,A],[m()*3,m()*3,m()*3],[Y*p(.9,1.4),Y*p(.6,.9),Y*p(.9,1.3)],Ze(z),Ue(L))},ke=([y,M,A],L,J=1,z=!0)=>{let Y=p(.8,1.3)*J,Z=c.strata||[c.rock],ce=M,ye=p(1,1.6)*Y,Ae=3+Math.floor(m()*3);for(let $e=0;$e<Ae;$e++){let _t=p(.9,1.6)*Y;je("stone",Ne.rockCyl,[y+p(-.1,.1),ce+_t/2,A+p(-.1,.1)],[0,m()*6,0],[ye*2,_t,ye*2],Ze(f(Z[$e%Z.length],u),.08),L),ce+=_t*.96,ye*=p(.72,1.02)}z&&je("stone",Ne.boulder,[y,ce+.2*Y,A],[m(),m()*3,m()],[ye*1.5,.5*Y,ye*1.4],Ze(f(Z[Z.length-1],u),.05),L)},ze=([y,M,A],L,J=1)=>{let z=p(1,1.6)*J,Y=c.strata||[c.rock],Z=M-.5,ce=p(3.5,6)*z;for(let ye=0;ye<3;ye++){let Ae=p(1.6,3.2)*z;je("stone",Ne.rockCyl,[y,Z+Ae/2,A],[0,m()*6,0],[ce*2,Ae,ce*1.6],Ze(f(Y[(ye+1)%Y.length],u),.06),L),Z+=Ae*.97,ce*=p(.8,.95)}},Xe=([y,M,A],L,J=1,z=m()<.55)=>{let Y=p(.9,1.2)*J,Z=z?p(1.2,3.2)*Y:4.4*Y,ce=Ze(d.rock,.06);je("stone",Ne.box,[y,M+.2*Y,A],[0,0,0],[1*Y,.4*Y,1*Y],ce,L),je("stone",Ne.col,[y,M+.4*Y+Z/2,A],[z?p(-.06,.06):0,m(),z?p(-.06,.06):0],[1.25*Y,Z,1.25*Y],ce,L),z?je("stone",Ne.col,[y+p(.8,1.6)*(m()<.5?-1:1),M+.35*Y,A+p(-.8,.8)],[0,m()*6,Math.PI/2],[1.2*Y,p(.7,1.3)*Y,1.2*Y],Ze(d.rock,.06),!1):je("stone",Ne.box,[y,M+.4*Y+Z+.18*Y,A],[0,0,0],[1.05*Y,.36*Y,1.05*Y],ce,L)},dt=([y,M,A],L,J=1)=>{let z=J,Y=Ze(d.rock,.05),Z=p(-.25,.25),ce=Math.cos(Z)*1.7*z,ye=-Math.sin(Z)*1.7*z;for(let Ae of[-1,1])je("stone",Ne.box,[y+ce*Ae,M+2*z,A+ye*Ae],[0,Z,0],[.9*z,4*z,.9*z],Y,L);je("stone",Ne.box,[y,M+4.3*z,A],[0,Z,p(-.04,.04)],[4.5*z,.7*z,1*z],Y,L)},Ke=([y,M,A],L,J=1)=>{let z=J,Y=d.rock,Z=p(-.4,.4),ce=4+Math.floor(m()*3);for(let ye=0;ye<ce;ye++){let Ae=(ye-ce/2)*.95*z,$e=p(.8,2.6)*z*(ye===0||ye===ce-1?.6:1);je("stone",Ne.box,[y+Math.cos(Z)*Ae,M+$e/2,A-Math.sin(Z)*Ae],[0,Z,0],[.92*z,$e,.7*z],Ze(Y,.08),L)}},_e=([y,M,A],L,J=1)=>{let z=p(.7,1.2)*J,Y=3+Math.floor(m()*4);je("stone",Ne.boulder,[y,M+.1,A],[m(),m()*3,m()],[.9*z,.4*z,.9*z],Ze(d.rock.clone().multiplyScalar(.7)),Ue(L));for(let Z=0;Z<Y;Z++){let ce=m()*6.28,ye=Z===0?0:p(.3,.7),Ae=(Z===0?2.2:p(.9,1.6))*z;je("crystal",Ne.oct,[y+Math.cos(ce)*.25*z,M+Ae*.4,A+Math.sin(ce)*.25*z],[Math.sin(ce)*ye,m()*3,-Math.cos(ce)*ye],[.45*z,Ae,.45*z],d.accent,Ue(L))}hn(y,M+1*z,A,d.accent,3.2*z)},at=([y,M,A],L)=>{je("stone",Ne.cyl8,[y,M+.5,A],[0,0,0],[.5,1,.5],Ze(d.rock),Ue(L)),je("metal",Ne.bowl,[y,M+1.12,A],[0,0,0],1,f("#6a5a48",u),Ue(L)),je("glow",Ne.cone,[y,M+1.42,A],[0,0,0],[.5,.6,.5],l(t===9||n?"#ff8a30":"#ffb050"),!1),hn(y,M+1.5,A,t===7?d.accent:l("#ff9a40"),3.4),Kt.push([y,M+1.5,A])},ut=([y,M,A],L,J=1)=>{let z=J;je("bark",Ne.cyl6,[y,M+1.7*z,A],[0,0,0],[.09*z,3.4*z,.09*z],Ze(d.bark),Ue(L)),je("bark",Ne.cyl6,[y,M+3.25*z,A+.05],[0,0,Math.PI/2],[.06*z,.9*z,.06*z],Ze(d.bark),Ue(L)),je("cloth",Ne.banner,[y,M+3.2*z,A+.08],[0,p(-.15,.15),0],[z,z,z],Ze(d.cloth,.08),Ue(L))},et=([y,M,A],L,J=1,z=!1)=>{let Y=p(.8,1.2)*J,Z=[p(-.12,.12),0,p(-.12,.12)];je("bark",Ne.cyl6,[y,M+.9*Y,A],Z,[.18*Y,2.6*Y,.18*Y],Ze(d.bark.clone().multiplyScalar(.8)),Ue(L)),z&&(je("glow",Ne.box,[y+.25,M+2*Y,A],[0,.5,0],[.2,.28,.2],d.accent,!1),hn(y+.25,M+2*Y,A,d.accent,2.6))},ot=([y,M,A],L,J=1)=>{let z=p(.8,1.3)*J;je("bark",Ne.trunk,[y,M+.22*z,A],[Math.PI/2,0,m()*3],[.45*z,p(2.2,3.4)*z,.45*z],Ze(d.bark),Ue(L))},st=([y,M,A],L)=>je("bark",Ne.trunk,[y,M+.3,A],[0,m()*3,0],[.6,.6,.6],Ze(d.bark),Ue(L)),At=([y,M,A],L,J=1)=>{let z=5+Math.floor(m()*6),Y=p(.8,1.3)*J;for(let Z=0;Z<z;Z++){let ce=m()*6.28,ye=Math.sqrt(m())*1.3*Y,Ae=p(1.2,4.6)*Y*(1-ye/(2*Y)),$e=y+Math.cos(ce)*ye,_t=A+Math.sin(ce)*ye,Ut=M+Ae-.2,Ht=Math.min(M,Ve($e,_t))-.4;je("stone",Ne.hex,[$e,(Ut+Ht)/2,_t],[0,m(),0],[.75*Y,Ut-Ht,.75*Y],Ze(d.rock,.15),L)}},vt=([y,M,A],L)=>{for(let J=0;J<3;J++){let z=p(.4,.9),Y=p(-.5,.5),Z=p(-.5,.5);je("bark",Ne.cyl6,[y+Y,M+.35*z,A+Z],[0,0,0],[.12*z,.7*z,.12*z],f("#c8d8d8",u),Ue(L)),je("crystal",Ne.cap,[y+Y,M+.68*z,A+Z],[0,0,0],[.9*z,.5*z,.9*z],d.accent,Ue(L))}hn(y,M+.6,A,d.accent,2.2)},Kt=[];if(n){Nn((y,M,A)=>At(y,M,A*1.15),2,3,12,1.2);for(let y=0;y<ht(16);y++){let M=tt(-24,24,-40,-7.2,1.6);M&&be(M,!1,p(.8,2.2),d.rock)}for(let y=0;y<2;y++){let M=tt(-9,9,-12,-7,3);M&&at(M,!0)}}else if(i===0){Nn((y,M,A)=>(m()<.7?xn:B)(y,M,A),2,4,30,1.1);for(let y=0;y<ht(8);y++){let M=tt(-14,14,-20,-7.2,1.5);M&&(y%3?be:y%2?ot:st)(M,M[2]>-12,.9)}for(let y=0;y<ht(10);y++){let M=tt(-30,30,-45,-20,4);M&&B(M,!1,1.6)}}else if(i===1){for(let y of[-1,1])for(let M=0;M<2;M++){let A=tt(y*5.2,y*10,-10,0,2.5);A&&(M?be(A,!0,1.6):et(A,!0,1.3))}for(let y=0;y<ht(9);y++){let M=tt(-26,10,-34,-12,2);M&&et(M,!1,1.2)}for(let y=0;y<ht(6);y++){let M=tt(-30,20,-45,-16,6);M&&$(M)}for(let y=0;y<ht(8);y++){let M=tt(-14,18,-18,-7.2,1.8);M&&(y%2?ot:be)(M,M[2]>-12,1)}for(let y=0;y<ht(8);y++){let M=tt(8,30,-40,-10,3);M&&(m()<.6?B:be)(M,!1,1.2)}}else if(i===2){Nn((y,M,A)=>ke(y,M,A),2,3,10,1.3);for(let y=0;y<ht(5);y++){let M=tt(-34,34,-48,-24,8);M&&ze(M,!1,1.2)}for(let y=0;y<ht(12);y++){let M=tt(-16,16,-24,-7.2,1.6);M&&be(M,M[2]>-12,p(.6,1.4))}for(let y=0;y<3;y++){let M=tt(-10,10,-14,-7.5,2.5);M&&(y<2?ut(M,!0,1):I(M,!0))}if(c.crystals)for(let y=0;y<ht(6);y++){let M=tt(-14,14,-22,-7.5,2.5);M&&_e(M,M[2]>-12,1.1)}}else if(i===3){Nn((y,M,A)=>I(y,M,A*1.1),2,4,18,1);for(let y=0;y<ht(6);y++){let M=tt(-12,12,-18,-7.5,2.4);M&&et(M,M[2]>-12,1,!0)}for(let y=0;y<ht(8);y++){let M=tt(-16,16,-24,-7.2,1.6);M&&(y%2?st:be)(M,M[2]>-12,.8)}if(c.mushrooms)for(let y=0;y<ht(8);y++){let M=tt(-12,12,-20,-7.5,1.8);M&&vt(M,!1)}for(let y=0;y<ht(10);y++){let M=tt(-30,30,-45,-22,4);M&&xn(M,!1,1.3)}}else{for(let y of[-1,1])for(let M=0;M<3;M++){let A=-10+M*3.6+p(-.4,.4),L=y*p(5.4,6.6);sn(L,A)&&(Nt.push([L,A,1.8]),Xe([L,Ve(L,A),A],!0,1,M!==1))}{let M=xe(-16);Nt.push([M,-16,3]),dt([M,Ve(M,-16),-16],!1,1.1)}for(let y=0;y<ht(7);y++){let M=tt(-26,26,-38,-11,4);M&&Ke(M,!1,1.1)}for(let y=0;y<ht(8);y++){let M=tt(-26,26,-40,-11,3);M&&Xe(M,!1,1.1)}for(let y=0;y<ht(5);y++){let M=tt(-12,12,-18,-7.5,2.4);M&&_e(M,M[2]>-12,1.1)}for(let y=0;y<2;y++){let M=tt(-8,8,-9.5,-6.5,3);M&&at(M,!0)}for(let y=0;y<2;y++){let M=tt(-10,10,-14,-7,3);M&&ut(M,!0,1.1)}for(let y=0;y<ht(8);y++){let M=tt(-30,30,-46,-20,4);M&&xn(M,!1,1.2)}}function $(y){let[M,,A]=y,L=Math.min(Ve(M,A),-.6),J=p(1.6,2.6),z=L,Y=J;for(let Z=0;Z<4;Z++){let ce=p(1.2,2.2);je("stone",Ne.rockCyl,[M+p(-.3,.3),z+ce/2,A+p(-.3,.3)],[p(-.08,.08),m()*6,p(-.08,.08)],[Y*2,ce,Y*1.7],Ze(d.rock,.1),!1),z+=ce*.95,Y*=p(.7,.9)}}function xe(y){for(let M=0;M<j.length-1;M++){let[A,L]=j[M],[J,z]=j[M+1];if(y<=L&&y>=z)return Nr(A,J,(y-L)/(z-L))}return 0}for(let y of Object.keys(ft)){let[M,A]=y.split("|"),L=b(m1(ft[y])),J=new Et(L,pe[M]);J.receiveShadow=M!=="glow",J.castShadow=(A==="1"||A==="s")&&a.casters&&M!=="glow"&&M!=="cloth",A==="s"&&(J.userData.prop=!0),J.name="arena-props-"+M+(A==="1"?"-near":A==="s"?"-small":""),x.add(J)}for(let y of it)y.dispose();let Re=()=>{let y=m(),M=6.5-44*Math.pow(y,1.25),A=3.2+(6.5-M)*.32;return[p(-A,A),M]},qe=(y,M,A)=>!(M>1.6-A&&M<2.9+A&&Math.abs(y)<2.35+A)&&!(M>-4.1-A&&M<-2.8+A&&Math.abs(y)<2.5+A)&&!(n&&Math.hypot(y,M+3.8)<2.2+A),nt=(y,M,A)=>(S==null||M>S+.04)&&(R==null||M>R+.5),pt=new tn,rn=(y,M,A,L,J)=>{let z=new _r(b(y),M,A),Y=0;for(let Z=0;Z<A*6&&Y<A;Z++){let ce=L(pt,Y);ce&&(pt.updateMatrix(),z.setMatrixAt(Y,pt.matrix),z.setColorAt(Y,ce),Y++)}return z.count=Y,z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0),z.receiveShadow=!0,z.name=J,z.frustumCulled=!1,x.add(z),z};{let y=Ca(new Bs(1,1),.28,g+21,1.4),M=b(new Qt({color:16777215,map:me.map,roughnessMap:me.roughnessMap,roughness:1,flatShading:!0,envMapIntensity:.3})),A=a.rocks;rn(y,M,A,(L,J)=>{let z,Y,Z,ce=J/A;if(ce<.45){let Ae=m()*6.28,$e=p(.85,1.25);if(m()<.6)z=Math.cos(Ae)*5*$e,Y=Math.sin(Ae)*3.9*$e-.5;else if([z,Y]=Re(),ee(z,Y)>1.4)return null;Z=p(.04,.12)}else if(ce<.85){if([z,Y]=Re(),Z=p(.12,.38),K(z,Y)<.9)return null}else if([z,Y]=Re(),Z=p(.4,.9),!sn(z,Y,.3))return null;if(!qe(z,Y,Z))return null;let ye=Ve(z,Y);return R!=null&&ye<R+.3?null:(L.position.set(z,ye+Z*.15,Y),L.rotation.set(m()*3,m()*3,m()*3),L.scale.set(Z*p(.9,1.5),Z*p(.5,.9),Z*p(.9,1.4)),Ze(d.rock,.18))},"arena-rocks")}if(!n){let y=Ra(i===2?9:8,i===2?.18:.22,.1,i===2?.6:.4,g+31,i===2?.014:.024),M=b(Pa(new Qt({color:16777215,vertexColors:!0,roughness:.9,side:cn,envMapIntensity:.3}),E,"tuft","transformed.x += sin( uTime * 2.1 + instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.5 ) * 0.25 * position.y * position.y;"));rn(y,M,a.tufts,()=>{let[A,L]=Re(),J=Ve(A,L);if(!nt(A,J,L))return null;let z=ne(A,L),Y=Qn(A*.25,L*.25,g+33,2);if(m()<z*1.2||m()>.35+Y||!qe(A,L,.2))return null;let Z=p(.6,1.2)*(i===1?1.15:1);return pt.position.set(A,J,L),pt.rotation.set(0,m()*6.28,0),pt.scale.set(Z,Z*p(.8,1.3),Z),Ze(d.tuft,.2)},"arena-tufts")}{let y,M,A;if(i===1||i===3)y=Ra(9,.9,.14,.12,g+41,.018),M=b(Pa(new Qt({color:16777215,vertexColors:!0,roughness:.85,side:cn}),E,"reed","transformed.x += sin( uTime * 1.6 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3 ) * 0.08 * position.y * position.y;")),A=()=>{for(let L=0;L<8;L++){let[J,z]=Re(),Y=Ve(J,z);if(Y>S-.45&&Y<S+.35&&qe(J,z,.4)&&sn(J,z,-2.5)){let Z=p(.7,1.3);return pt.position.set(J,Y,z),pt.rotation.set(0,m()*6.28,0),pt.scale.set(Z,Z*p(.8,1.4),Z),Ze(d.tuft.clone().lerp(f("#a89a58",h),.3),.15)}}return null};else if(n)y=new Us(.5,0),y.scale(.55,1.2,.5),M=b(new Qt({color:"#151216",roughness:.15,metalness:.3,flatShading:!0,envMapIntensity:1.4})),A=()=>{let[L,J]=Re(),z=Ve(L,J);if(z<R+.4||!qe(L,J,.4)||K(L,J)<1||J<-8||m()<.6)return null;let Y=p(.15,.4);return pt.position.set(L,z+Y*.1,J),pt.rotation.set(p(-.5,.5),m()*6,p(-.5,.5)),pt.scale.set(Y,Y,Y),l("#ffffff")};else{let L=i===4||t===5;y=i===2?Ra(14,.5,.2,.9,g+43,.012):L?Ra(5,.22,.08,.3,g+45,.04):Ra(8,.55,.15,.8,g+47,.07),M=b(Pa(new Qt({color:16777215,vertexColors:!0,roughness:.85,side:cn}),E,"s2","transformed.x += sin( uTime * 1.8 + instanceMatrix[3].x * 0.5 ) * 0.12 * position.y;"));let J=L?[f(o[4],.6),f("#f4f0e0",.6),f(t===5?"#ff9ac8":"#e8d070",.6)]:null;A=()=>{let[z,Y]=Re(),Z=Ve(z,Y);if(!qe(z,Y,.3)||ne(z,Y)>.4||K(z,Y)<1.05)return null;let ce=p(.7,1.3);return pt.position.set(z,Z,Y),pt.rotation.set(0,m()*6.28,0),pt.scale.set(ce,ce,ce),L?J[Math.floor(m()*3)].clone():i===2?Ze(f("#6a5034",h),.2):Ze(d.tuft.clone().multiplyScalar(.8),.15)}}rn(y,M,n?Math.round(a.scatter2*.25):a.scatter2,A,"arena-scatter2")}let un=new k(-.35,.1,-1).normalize();{let y=b(new Di(140,32,16)),M=y.attributes.position,A=new Float32Array(M.count*3),L=new Ie,J=new k,z=d.horizon.clone().lerp(new Ie(1,1,1),.15);for(let Z=0;Z<M.count;Z++){if(J.fromBufferAttribute(M,Z).normalize(),J.y>=0){L.copy(z).lerp(d.skyTop,Math.pow(Math.min(1,J.y*2.2),.55));let ce=Math.pow(Math.max(0,J.dot(un)),6);L.lerp(z.clone().multiplyScalar(1.3),ce*.6)}else L.copy(d.fog);A[Z*3]=L.r,A[Z*3+1]=L.g,A[Z*3+2]=L.b}y.setAttribute("color",new Tt(A,3));let Y=new Et(y,b(new nn({vertexColors:!0,side:Fn,fog:!1,depthWrite:!1})));Y.position.set(0,0,-4),Y.renderOrder=-10,Y.name="arena-sky",x.add(Y)}let li=(y,M,A)=>{let L=(J,z=4)=>Qn(Math.cos(M)*J+50,Math.sin(M)*J+50,A,z);switch(y){case"peaks":{let J=1-Math.abs(L(2.2)*2-1);return 3+Math.pow(J,2.2)*16+L(9,2)*2}case"mesa":{let J=L(1.8),z=Math.floor(J*4)/4;return 2+Ot(.35,.5,J)*(4+z*14)+L(14,2)*.8}case"trees":{let J=4+L(1.5)*6,z=Math.abs((M*70%2+2)%2-1);return J+z*2.2*(.6+L(20,2))}case"ruins":{let J=Math.floor((M+7)*22),z=$n(J,3,A);return 2+L(1.4)*5+(z>.82?9+z*6:z>.4?z*5:.3)}case"islands":{let J=L(1.6);return-1+Ot(.48,.62,J)*(4+L(6,2)*5)}case"volcano":{let J=Math.abs(Math.atan2(Math.sin(M-.15),Math.cos(M-.15))),z=Math.max(0,1-J/.5),Y=Ot(.05,0,J)*2.5,Z=1-Math.abs(L(4,3)*2-1);return 3+Math.pow(z,1.6)*20-Y+Z*6}default:return 4}},Pt=(y,M,A,L,J,z)=>{let Y=a.ringSeg,Z=[],ce=[],ye=new Ie,Ae=[];for(let He=0;He<=Y;He++){let zt=He/Y*Math.PI*2-Math.PI;Ae.push(Math.max(.5,li(y,zt,J))*A)}let $e=(He,zt)=>{let mt=He/Y*Math.PI*2-Math.PI;return[Math.sin(mt)*M,zt,-Math.cos(mt)*M-4]},_t=d.sil.clone().lerp(d.fog,L),Ut=(He,zt,mt)=>{let Je=new k(zt[0]-He[0],zt[1]-He[1],zt[2]-He[2]),Rt=new k(mt[0]-He[0],mt[1]-He[1],mt[2]-He[2]),Vt=Je.cross(Rt).normalize(),fn=.75+.5*Math.max(0,-Vt.dot(un)*.6+Vt.y*.5);for(let yt of[He,zt,mt]){Z.push(yt[0],yt[1],yt[2]);let Jt=Ot(-3,Math.max(4,yt[1])*.9+1,yt[1]);ye.copy(d.fog).lerp(_t.clone().multiplyScalar(fn),.35+.65*Jt),ce.push(ye.r,ye.g,ye.b)}};for(let He=0;He<Y;He++){let zt=Ae[He],mt=Ae[He+1],Je=zt*.55,Rt=mt*.55,Vt=$e(He,-4),fn=$e(He+1,-4),yt=$e(He,Je),Jt=$e(He+1,Rt),Bt=1+.03*Math.sin(He*2.3);yt[0]*=Bt,yt[2]=(yt[2]+4)*Bt-4,Jt[0]*=1+.03*Math.sin((He+1)*2.3),Jt[2]=(Jt[2]+4)*(1+.03*Math.sin((He+1)*2.3))-4;let Gt=$e(He,zt),dn=$e(He+1,mt);Ut(Vt,yt,fn),Ut(fn,yt,Jt),Ut(yt,Gt,Jt),Ut(Jt,Gt,dn)}let Ht=b(new It);Ht.setAttribute("position",new lt(Z,3)),Ht.setAttribute("color",new lt(ce,3)),Ht.computeBoundingSphere();let Mt=new Et(Ht,Xn);Mt.name=z,Mt.renderOrder=-5,x.add(Mt)},Xn=b(new nn({vertexColors:!0,fog:!1,side:cn}));Pt(s.silFar,112,1.25,.55,g+61,"arena-horizon-far"),Pt(s.sil,74,i===1?.8:.75,.25,g+62,"arena-horizon-mid");let Tn=(y,M,A)=>{let L=y.length,J=new Float32Array(L*3),z=new Float32Array(L*3),Y=new Float32Array(L),Z=new Float32Array(L*4);y.forEach((Ae,$e)=>{J.set(Ae.p,$e*3),z.set([Ae.c.r,Ae.c.g,Ae.c.b],$e*3),Y[$e]=Ae.s,Z.set([m(),m(),m(),m()],$e*4)});let ce=b(new It);ce.setAttribute("position",new Tt(J,3)),ce.setAttribute("aColor",new Tt(z,3)),ce.setAttribute("aSize",new Tt(Y,1)),ce.setAttribute("aSeed",new Tt(Z,4));let ye=new hs(ce,M);return ye.frustumCulled=!1,ye.name=A,ye.renderOrder=5,x.add(ye),ye};if(n)for(let y=0;y<18;y++){let M=p(-22,22),A=-14+Math.sin(M*.18)*2.2;hn(M,R+.6,A,l("#ff6a20"),p(5,9))}if($t.length&&Tn($t,b(qf(E,{flicker:.35,opacity:.55})),"arena-glows"),a.motes>0){let y=c.motes,M=l(c.moteColor),A=[],L=a.motes,J={leaves:{drift:[.25,-.32,.05],sway:.5,additive:!1,size:.13,hard:1,fall:1,opacity:.95},petals:{drift:[.3,-.25,.08],sway:.5,additive:!1,size:.12,hard:1,fall:1,opacity:.95},spray:{drift:[.4,.05,.1],sway:.3,size:.12,opacity:.55},dust:{drift:[.6,.02,.1],sway:.25,size:.14,opacity:.45},fireflies:{drift:[.05,.04,0],sway:.9,size:.2,flicker:.9,opacity:1},sparks:{drift:[0,.25,0],sway:.4,size:.14,flicker:.6,opacity:.9},embers:{drift:[.12,.7,0],sway:.35,size:.12,flicker:.7,opacity:1}}[y],z=[12,4,10],Y=[0,3.4,-5];for(let Z=0;Z<L;Z++){let ce=M.clone().multiplyScalar(J.additive===!1?p(.4,.6):p(.8,1.6));A.push({p:[p(-z[0],z[0])+Y[0],p(-z[1],z[1])+Y[1],p(-z[2],z[2])+Y[2]],c:ce,s:J.size*p(.7,1.4)})}Tn(A,b(qf(E,{...J,box:z,center:Y})),"arena-motes")}let zi={};if(n&&e.quality!=="low"){let y=new Rr(16738858,3,26,1.6);y.position.set(0,1.5,-11),x.add(y),zi.ember=y,P.push(M=>{y.intensity=2.6+Math.sin(M*3.1)*.3+Math.sin(M*7.3)*.15})}let Hs=r.fog,Vs=r.background;e.fog!==!1&&(r.fog=new yr(d.fog.clone(),25,70),r.background=d.fog.clone());let Qi=0,D=0;return x.traverse(y=>{if(!y.isMesh&&!y.isPoints)return;D++;let M=y.geometry,A=M.index?M.index.count/3:M.attributes.position.count/3;y.isMesh&&(Qi+=A*(y.isInstancedMesh?y.count:1))}),{root:x,lights:zi,colors:{fog:d.fog,accent:d.accent,hemiSky:d.horizon.clone().lerp(new Ie(1,1,1),.35),hemiGround:d.worn.clone().multiplyScalar(.6)},stats:{drawCalls:D,triangles:Math.round(Qi),textureMB:+(v/1048576).toFixed(2),kind:n?"titan":["forest","shore","badlands","marsh","ruins"][i],theme:c.name},update(y){E.uTime.value=y;for(let M of P)M(y)},dispose(){r.remove(x);for(let y of _.geos)y.dispose();for(let y of _.mats)y.dispose();for(let y of _.texs)y.dispose();f1(ie),e.fog!==!1&&r.fog&&r.fog.isFog&&(r.fog=Hs,r.background=Vs),_.geos.clear(),_.mats.clear(),_.texs.clear(),P.length=0}}}var Z1=jf.map(r=>r.name).concat(Xf.name);Dn.legacyMode=!1;var ei=Object.assign({tone:"aces",exposure:1.3,hemi:1.25,sun:2,rim:.8,front:.6,groundLift:.3,shadow:2048,pixelRatio:2},window.SB_GFX||{}),_1=(()=>{let r=null,e=null,t=null,n=null,i=0,s=0,a=new Map,o=[],c=[],l=[],h=new k,u=0,f=0,d=new Map,g={},m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=()=>typeof G!="undefined"&&G.settings&&G.settings.speed||1,x=null;function _(){if(x!==null)return x;try{let T=document.createElement("canvas");return x=!!(T.getContext("webgl2")||T.getContext("webgl"))}catch{return x=!1}}let b={hask:"monarch",ulfgar:"monarch",gorrum:"monarch",thrain:"monarch",corvan:"monarch",odo:"monarch",mira:"hooded",wren:"hooded",kettle:"adventurer",ysolde:"hooded",nyx:"hooded",tamsin:"hooded",velka:"hooded",aurelia:"monarch",sable:"hooded",maelis:"monarch",morwenna:"hooded",seraphine:"hooded",brannoc:"adventurer",pell:"adventurer",lumen:"adventurer",kaito:"adventurer",oriel:"adventurer",vaelith:"adventurer"},v={hooded:"hooded_adventurer",adventurer:"adventurer",monarch:"monarch",titan:"yeti"},E={hooded:{DarkBrown:"armor",Black:"cloth",Brown:"cloth",LightBrown:"accent",Gold:"accent",Metal:"trim",Metal_Dark:"blade",Brown2:"wood",Skin:"skin","head:Black":"cloth","head:Brown":"eye","head:DarkBrown":"hood",White:"hair"},adventurer:{LightGreen:"armor",Green:"cloth",Brown:"pants",Brown2:"pants",Black:"boot",Grey:"boot",Hair:"hair",Eyebrows:"hair",Gold:"accent",Skin:"skin",Eye:"eye"},monarch:{Metal:"armor",Metal_Dark:"trim",Blue:"cloth",DarkBrown:"pants",Beige:"accent",Gold:"crown",Hair_White:"hair",Skin:"skin",Eye:"eye"},titan:{Yeti_Main:"stone",Yeti_Secondary:"stoneDark",Eye_White:"socket",Eye_Black:"maw",Yeti_Teeth:"fang",Tongue:"tongue"}},P={monarch:{head:"King_Head",body:"King_Body",legs:"King_Legs",feet:"King_Feet"},hooded:{head:"Medieval_Head",body:"Medieval_Body",legs:"Medieval_Legs",feet:"Medieval_Feet"},adventurer:{head:"Adventurer_Head",body:"Adventurer_Body",legs:"Adventurer_Legs",feet:"Adventurer_Feet"}},V={brannoc:{bulk:[.96,1,.96]},mira:{hide:["hood"],parts:{legs:"adventurer"},h:.95,head:1.04},pell:{shave:!0,h:.9,head:1.08,bulk:[.92,1,.95],arms:.94},odo:{bald:!0,parts:{body:"adventurer",legs:"adventurer"},h:1.03,bulk:[1.28,1.05,1.3],arms:1.3,legs:1.25,sh:.035,head:.94},wren:{h:.94},kettle:{parts:{head:"monarch",body:"hooded"},shave:!0,h:1.02,arms:1.15,bulk:[1.08,1,1.05],head:.95},ysolde:{hide:["hood"],bulk:[.94,1,.94]},corvan:{parts:{body:"adventurer"},h:.97},hask:{h:1,bulk:[1.15,1,1.12],sh:.025,arms:1.1},lumen:{shave:!0,parts:{body:"monarch"},h:1.06,head:.93},nyx:{h:.97,bulk:[.9,1,.9],arms:.92,legs:.92},tamsin:{hide:["hood"],parts:{body:"adventurer"},h:.98},gorrum:{bald:!0,h:1.1,bulk:[1.3,1.05,1.25],arms:1.3,legs:1.25,sh:.04,head:.92},velka:{hide:["hood"],h:1.03,bulk:[.92,1,.92]},aurelia:{hide:["hood"],parts:{head:"hooded"},h:1.03,head:1.02},sable:{hide:["hood"],h:1},kaito:{shave:!0,parts:{body:"hooded"},h:1.02,head:.96},maelis:{hide:["hood"],parts:{head:"hooded",legs:"hooded",feet:"hooded"},h:1.04},thrain:{parts:{body:"adventurer"},h:.88,bulk:[1.25,1,1.2],arms:1.25,legs:1.2,head:1.06,sh:.02},oriel:{shave:!0,h:1.04},vaelith:{hide:["hair"],parts:{body:"monarch",legs:"monarch",feet:"monarch"},h:1.06,head:.94},morwenna:{hide:["hood"],h:1.06},seraphine:{hide:["hood"],h:1.02},ulfgar:{h:1.08,bulk:[1.25,1.05,1.2],arms:1.2,legs:1.15,sh:.03}},S=T=>Object.assign({},V[T],(window.SB_BODY_TEST||{})[T]),R={idle:["Idle_Sword","Idle"],melee:["Sword_Slash","Punch_Right","Punch"],cast:["Gun_Shoot","Interact","Weapon","Punch"],hit:["HitRecieve","HitReact"],die:["Death"]},j={},ee=!1,K,X=new Promise(T=>{K=T});function Q(){let T=new Fo;T.setMeshoptDecoder(_f);let w=window.SB_MODEL_DATA||{},C=U=>w[U]?T.parseAsync(Uint8Array.from(atob(w[U]),q=>q.charCodeAt(0)).buffer,""):T.loadAsync(`models/${U}.glb`),W=Object.entries(v).map(([U,q])=>C(q).then(H=>{H.scene.updateMatrixWorld(!0);let re=1.55;H.scene.traverse(he=>{if(he.isBone&&he.name==="Head"){let Pe=new k;he.getWorldPosition(Pe),re=Pe.y}});let O={};for(let he of H.animations)O[he.name.split("|").pop()]=he;j[U]={scene:H.scene,clips:O,headY:re}}).catch(H=>console.warn("Sigilbound: model failed to load",q,H)));Promise.all(W).then(()=>{ee=!0,K()})}let ne=(T=8e3)=>Promise.race([X,new Promise(w=>setTimeout(w,T))]).then(()=>{ee=!0});function de(){return g.box||(g.box=new Ai(1,1,1),g.sphere=new Di(.5,20,14),g.capsule=new _o(.5,1,6,14),g.cyl=new In(.5,.5,2,20),g.rod=new In(.5,.5,1,18),g.disc=new In(.5,.5,1,36),g.cone=new wr(.5,1,18),g.taper=new In(.5,.32,1,36,4),g.bell=new In(.22,.5,1,16),g.ring=new Sr(.5,.07,8,40),g.hook=new Sr(.5,.18,6,14,Math.PI*1.25),g.crook=new Sr(.5,.2,6,12,Math.PI),g.octa=new Us(.5),g.half=new In(.5,.5,1,12,1,!1,0,Math.PI),g.dome=new Di(.5,24,10,0,Math.PI*2,0,Math.PI/2),g.bbox=Rf(1,1,1,.14,2),g.breast=Pf(.3,.27,.03,.07,{curve:.17,curveY:.45,cornerSeg:4,seg:6})),g}function le(T,w=0){let C=`l${T}${w}`;return d.has(C)||d.set(C,new Qt({color:new Ie(T),roughness:w?.35:.65,metalness:w})),d.get(C)}function te(T,w=1){let C=`g${T}${w}`;return d.has(C)||d.set(C,new nn({color:new Ie(T),transparent:w<1,opacity:w,depthWrite:w>=1,toneMapped:!1})),d.get(C)}function se(T,w,C,W,U,q){let H=new Et(typeof T=="string"?de()[T]:T,U);return H.position.set(C[0],C[1],C[2]),H.scale.set(W[0],W[1],W[2]),q&&(H.rotation.order="YXZ",H.rotation.set(q[0]*Math.PI/180,q[1]*Math.PI/180,q[2]*Math.PI/180)),H.castShadow=!0,w.add(H),H}let Me=new Map;function Ve(T,w,C,W,U=16,q=8){let H=[T,w,C,W].join("|");if(Me.has(H))return Me.get(H);let re=[],O=[],he=[];for(let fe=0;fe<=q;fe++)for(let Te=0;Te<=U;Te++){let rt=Te/U,wt=fe/q,Le=T+(w-T)*wt,bt=rt*2-1;re.push(bt*Le/2,-wt*C,-W*(1-bt*bt)*(.7+.3*wt)+Math.sin(bt*3+1)*.012*wt),O.push(rt*Le*3,wt*C*3)}for(let fe=0;fe<q;fe++)for(let Te=0;Te<U;Te++){let rt=fe*(U+1)+Te,wt=rt+1,Le=rt+U+1,bt=Le+1;he.push(rt,Le,wt,wt,Le,bt)}let Pe=new It;Pe.setAttribute("position",new lt(re,3)),Pe.setAttribute("uv",new lt(O,2)),Pe.setIndex(he),Pe.computeVertexNormals();let we=Pe.toNonIndexed();return we.computeVertexNormals(),Me.set(H,we),we}function ie(T,w){let C=new Yt;return C.position.set(w[0],w[1],w[2]),T.add(C),C}let me=(T,w,C)=>"#"+new Ie(T).lerp(new Ie(w),C).getHexString(),De=(T,w)=>"#"+new Ie(T).multiplyScalar(w).getHexString();function Ge(T,w){let C=document.createElement("canvas");C.width=2,C.height=256;let W=C.getContext("2d"),U=W.createLinearGradient(0,0,0,256);U.addColorStop(0,T),U.addColorStop(1,w),W.fillStyle=U,W.fillRect(0,0,2,256);let q=new mi(C);return q.encoding=xt,q}function pe(){let T=document.createElement("canvas");T.width=T.height=128;let w=T.getContext("2d");w.fillStyle="#b8b8b8",w.fillRect(0,0,128,128);let C=7,W=()=>(C=(C*9301+49297)%233280)/233280;for(let q=0;q<260;q++){let H=150+Math.floor(W()*105),re=2+W()*9;w.fillStyle=`rgba(${H},${H},${H},0.18)`,w.beginPath(),w.arc(W()*128,W()*128,re,0,7),w.fill()}let U=new mi(T);return U.wrapS=U.wrapT=Jn,U.encoding=xt,U}let ft=null;function it(){if(ft)return ft;let T=document.createElement("canvas");T.width=T.height=64;let w=T.getContext("2d"),C=w.createRadialGradient(32,32,0,32,32,32);return C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.4,"rgba(255,255,255,.6)"),C.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=C,w.fillRect(0,0,64,64),ft=new mi(T)}function Ye(T){return[["#1f2b46","#c9805a","#2a2a22","#16141f"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e"],["#1a2e2a","#7fa088","#23362a","#101c16"],["#28203a","#c8a870","#2c2640","#14101e"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0"],["#101a2e","#5a7ab0","#1a2440","#0c1220"],["#0e0a16","#3a2a5a","#180f26","#b080ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606"]][((T||0)%10+10)%10]}function Ue(T,w){B(),n=T,hn=!!w.titan,r=new wa({antialias:!0,alpha:!1,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(ei.pixelRatio,window.devicePixelRatio||1)),r.outputEncoding=xt,r.toneMapping=ei.tone==="aces"?_a:ei.tone==="linear"?_l:ri,r.toneMappingExposure=ei.exposure,r.shadowMap.enabled=!0,r.shadowMap.type=va,r.domElement.className="w3d-canvas",T.prepend(r.domElement),e=new cs;let C=w.titan?["#1a0a0a","#c0401a","#24100c","#100606"]:Ye(w.chapter);e.background=Ge(C[0],C[1]),e.fog=new yr(new Ie(C[1]),18,48),e.environment=zo(r);let W=new Cr(new Ie(me(C[1],"#ffffff",.35)),new Ie(C[2]),ei.hemi);e.add(W);let U=new Zn(16773597,ei.sun);U.position.set(-5,10,6),U.castShadow=!0,U.shadow.mapSize.set(ei.shadow,ei.shadow),U.shadow.radius=3,U.shadow.bias=-4e-4,U.shadow.normalBias=.02,Object.assign(U.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),e.add(U);let q=new Zn(10070783,ei.rim);q.position.set(4,5,-8),e.add(q);let H=new Zn(16777215,ei.front);H.position.set(0,4,10),e.add(H);let re=ht(r);try{je=Yf(e,{chapter:w.titan?9:w.chapter||0,titan:!!w.titan,quality:re.current.toLowerCase(),renderer:r})}catch(O){console.warn("Sigilbound: arena failed, using the plain field",O),je=null}je?je.colors&&je.colors.hemiSky&&(W.color.copy(je.colors.hemiSky),je.colors.hemiGround&&W.groundColor.copy(je.colors.hemiGround)):Ze(C,w),U.shadow.camera.left=U.shadow.camera.bottom=-9,U.shadow.camera.right=U.shadow.camera.top=9,t=new mn(50,1,.1,150);try{Nt=Ff(r,e,t,{quality:re.current}),Nt.params.exposure=ei.exposure}catch(O){console.warn("Sigilbound: post-processing unavailable",O),Nt=null}r.domElement.addEventListener("webglcontextrestored",()=>{Nt&&tt&&Nt.setQuality(tt.current)}),xn(),window.addEventListener("resize",xn),s=performance.now(),i=requestAnimationFrame(Ia)}let je=null;function Ze(T,w){let C=new Qt({color:new Ie(me(T[2],"#8c8680",ei.groundLift)),roughness:1,map:pe()});C.map.repeat.set(24,24);let W=new Et(new pi(120,120),C);W.rotation.x=-Math.PI/2,W.receiveShadow=!0,e.add(W);let U=new Et(new us(3.4,3.6,64),te("#ffffff",.08));U.rotation.x=-Math.PI/2,U.position.set(0,.01,-.6),U.scale.set(1.25,1,1),e.add(U),Ne(w.titan?2:(w.chapter||0)%5,T,w.chapter||0)}function Ne(T,w,C){let W=C*9301+49297,U=()=>(W=(W*9301+49297)%233280)/233280,q=le(w[3]),H=te(me(w[1],"#ffffff",.3),.7);for(let re=0;re<30;re++){let O=U()*Math.PI*2,he=7.5+U()*10,Pe=Math.cos(O)*he,we=Math.sin(O)*he*.8-5;if(we>4||we>-4.5&&Math.abs(Pe)<7)continue;let fe=.6+U()*1.4;T===0?(se("cyl",e,[Pe,.65*fe,we],[.25*fe,.65*fe,.25*fe],q),se("capsule",e,[Pe,2*fe,we],[1.4*fe,.8*fe,1.4*fe],q)):T===1||T===3?se("cyl",e,[Pe,.5*fe,we],[.12,.5*fe,.12],q):T===2?se("box",e,[Pe,.7*fe,we],[1.2*fe,1.6*fe,1*fe],q,[U()*30-15,U()*90,U()*30-15]):re%2?se("box",e,[Pe,1.2*fe,we],[.5*fe,2.4*fe,.5*fe],q):se("box",e,[Pe,.8*fe,we],[.35*fe,1.6*fe,.35*fe],H,[0,45,U()*40-20])}}let $t=new k(0,1,-.5),hn=!1,sn=50,Nt=null,tt=null;function ht(T){return tt||(tt=Nf({initial:rh(T),onChange:w=>{Nt&&Nt.setQuality(w)}})),tt}function Nn(T){ht(r).force(T||"auto")}function xn(){if(!r||!n)return;let T=n.clientWidth||1,w=n.clientHeight||1;Nt?Nt.setSize(T,w):r.setSize(T,w,!1),t.aspect=T/w,t.fov=sn=t.aspect<.75?62:50;let C=34*vt,W=[];for(let O of[-1,1]){for(let he of[0,2.75])W.push([O*2.35,he,2.6]),W.push([O*2.35,he,2]);for(let he of[0,3.2])W.push([O*2.45,he,-3.2])}W.push([0,3.75,-3.7]),hn&&(W.push([0,5.6,-3.8]),W.push([-2.3,3.4,-3.8]),W.push([2.3,3.4,-3.8]));let U=new k,q=O=>(t.position.set($t.x,$t.y+Math.sin(C)*O,$t.z+Math.cos(C)*O),t.lookAt($t),t.updateMatrixWorld(),t.updateProjectionMatrix(),W.every(he=>(U.set(he[0],he[1],he[2]).project(t),Math.abs(U.x)<=.95&&U.y<=.84&&U.y>=-.84))),H=5,re=40;for(let O=0;O<22;O++){let he=(H+re)/2;q(he)?re=he:H=he}q(re),h.copy(t.position)}function B(){if(dn=0,Bt=0,Gt=0,Yn++,cancelAnimationFrame(i),i=0,window.removeEventListener("resize",xn),r){if(Nt&&(Nt.dispose(),Nt=null),je){try{je.dispose()}catch{}je=null}r.domElement.remove(),Bo(r),r.dispose()}r=e=t=n=null,a.clear(),o=[],c=[],l=[]}function I(T,w){let C=U=>w?me(U,"#2e1f33",.5):U,W=SKIN[T.skin];return{armor:C(T.armor),cloth:C(T.cloth||De(T.armor,.62)),pants:C(T.pants||me(T.cloth||T.armor,"#2a2522",T.cloth?.35:.6)),accent:C(T.accent),trim:C(T.trim||me(T.accent,"#c8ccd4",.4)),blade:C("#c8d0dc"),wood:C("#6b4a29"),boot:C(T.boot||"#2a1f1a"),hair:C(T.hair),brow:C(De(T.hair,.8)),hood:C(T.hood||T.armor),skin:C(W),crown:C(T.accent),eye:w?"#ff2a2a":T.glow||"#1a141f"}}let be=(T,w,C)=>(E[T]||{})[`${w}:${C}`]||(E[T]||{})[C],ke=(T,w)=>{let C=P[T];if(C){for(let W in C)if(C[W]===w)return W}return""};function ze(T,w,C){let W={};T.traverse(U=>{U.isBone&&(W[U.name]=U)});for(let[U,q]of Object.entries(C)){let H=T.getObjectByName(P[w][U]);if(q===w)continue;let re=j[q],O=re&&P[q]&&re.scene.getObjectByName(P[q][U]);if(q!=="none"&&!O)continue;let he=H?H.parent:T;if(H&&he.remove(H),q==="none")continue;let Pe=O.clone(!0);Pe.traverse(we=>{if(we.userData.sbBase=q,we.userData.sbKind=U,!we.isSkinnedMesh)return;let fe=we.skeleton;we.bind(new ls(fe.bones.map(Te=>W[Te.name]||Te),fe.boneInverses.map(Te=>Te.clone())),we.bindMatrix.clone())}),he.add(Pe)}}function Xe(T,w){let C={};T.traverse(q=>{q.isBone&&(C[q.name]=q)});let W=new Pn,U=(q,H)=>{if(q){q.scale.set(H[0],H[1],H[2]);for(let re of q.children){if(!re.isBone)continue;W.setFromMatrix4(new gt().makeRotationFromQuaternion(re.quaternion));let O=W.elements,he=[1/H[0],1/H[1],1/H[2]];re.scale.set(O[0]*O[0]*he[0]+O[1]*O[1]*he[1]+O[2]*O[2]*he[2],O[3]*O[3]*he[0]+O[4]*O[4]*he[1]+O[5]*O[5]*he[2],O[6]*O[6]*he[0]+O[7]*O[7]*he[1]+O[8]*O[8]*he[2])}}};if(w.bulk&&U(C.Chest,w.bulk),w.arms)for(let q of["UpperArmL","UpperArmR","LowerArmL","LowerArmR"])U(C[q],[w.arms,1,w.arms]);if(w.legs)for(let q of["UpperLegL","UpperLegR"])U(C[q],[w.legs,1,w.legs]);if(w.sh)for(let[q,H]of[["ShoulderL",1],["ShoulderR",-1]]){let re=C[q];if(!re)continue;T.updateMatrixWorld(!0);let O=new k;re.parent.getWorldScale(O),re.position.x+=H*w.sh*T.scale.x/(O.x||1)}w.head&&C.Head&&C.Head.scale.multiplyScalar(w.head)}let dt=new Map;function Ke(T,w){let C=T.geometry.uuid+w;if(dt.has(C))return dt.get(C);let W=T.skeleton,U=W.bones.findIndex(Te=>Te.name==="Head"),q=T.geometry,H=q.attributes.position,re=q.index,O=new gt().multiplyMatrices(W.boneInverses[U],T.bindMatrix),he=new k,Pe=[],we=re?re.count:H.count;for(let Te=0;Te<we;Te+=3){let rt=0,wt=0;for(let bt=0;bt<3;bt++)he.fromBufferAttribute(H,re?re.getX(Te+bt):Te+bt).applyMatrix4(O).multiplyScalar(100),rt+=he.y/3,wt+=he.z/3;if((rt<.075&&wt>-.03)===(w==="beard"))for(let bt=0;bt<3;bt++)Pe.push(re?re.getX(Te+bt):Te+bt)}let fe=q.clone();return fe.setIndex(Pe),dt.set(C,fe),fe}function _e(T,w,C,W,U){let q=j[w];if(!q)return null;let H=w==="titan"?null:LOOKS[T]||LOOKS.brannoc,re=w==="titan"?{}:S(T),O=H&&H.kit||{},he=Mf(q.scene),Pe=O.robe==="long"?Object.assign({legs:"none"},re.parts):re.parts;Pe&&ze(he,w,Pe);let we=[],fe=W&&ELEMENTS[W]?ELEMENTS[W].color:"#e8553a",Te=w==="titan"?{stone:"#16130f",stoneDark:"#0c0a09",fang:"#0e0c0a",socket:"#040303",tongue:"#0a0606"}:I(H,C),rt=new Set(re.hide||[]),wt=H&&H.gear==="crown"&&!rt.has("crown");he.traverse(on=>{if(!on.isMesh)return;on.castShadow=!0,on.frustumCulled=!1;let An=w,an="";for(let ln=on;ln&&ln!==he;ln=ln.parent)if(ln.userData.sbBase){An=ln.userData.sbBase,an=ln.userData.sbKind;break}if(!an)for(let ln=on;ln&&ln!==he&&!an;ln=ln.parent)an=ke(w,ln.name);!Array.isArray(on.material)&&be(An,an,on.material.name)==="hair"&&an==="head"&&An!=="hooded"&&(re.shave||re.bald)&&(on.geometry=Ke(on,re.bald?"beard":"scalp"));let N=ln=>{let Ct=be(An,an,ln.name),Wt=ln.clone();if(Ct==="crown"&&!wt||Ct==="tongue"||rt.has(Ct)||rt.has(`${an}:${Ct}`))return Wt.visible=!1,Wt;if(Ct==="maw")return Wt.color.set(De(fe,.3)),Wt.emissive=new Ie(fe),Wt.emissiveIntensity=1.8,Wt.metalness=0,Wt;if(Ct==="eye"&&(C||H&&H.glow))return Wt.color.set(Te.eye),Wt.emissive=new Ie(Te.eye),Wt.emissiveIntensity=3,Wt;Ct&&Ct!=="keep"&&Te[Ct]?Wt.color.set(Te[Ct]):C&&Wt.color.lerp(new Ie("#2e1f33"),.5),Ct==="armor"&&An==="monarch"&&(Wt.metalness=.2,Wt.roughness=.55),w==="titan"&&(Wt.metalness=0,Wt.roughness=.95),(Ct==="blade"||Ct==="trim")&&(Wt.metalness=.3,Wt.roughness=.5);let Zt=Ct==="armor"&&An==="monarch"||Ct==="trim"||Ct==="blade"||Ct==="crown";return Wt.envMapIntensity=w==="titan"?.15:Zt?.8:.25,w!=="titan"&&(Wt.roughness=Zt?.5:.8,Wt.metalness=Zt?.3:0),O.seams&&(Ct==="armor"||Ct==="trim"||Ct==="pants")&&_t(Wt,C?"#ff2a2a":O.seams,we,O.seamScale||3.2),Wt};on.material=Array.isArray(on.material)?on.material.map(N):N(on.material)});let Le=new Yt;Le.add(he);let bt=w==="titan"?3.6:1.85,Ei=re.h||1;he.scale.setScalar(bt/q.headY*Ei);let Ci=new Co(he),Lt=on=>{for(let An of R[on])if(q.clips[An])return q.clips[An];return null},Dt={};for(let on of Object.keys(R)){let An=Lt(on);An&&(Dt[on]=Ci.clipAction(An))}let ae=st(Ci,q,w==="titan"?ot:et(T,H),Dt);return H?(Ae(T,H,w,he,C,we,re,U),rn(he,`${T}|${C?1:0}|${w}|${Vt(U)}`),un(he,`${T}|${C?1:0}|${w}`),Xe(he,re)):Ht(he,W,we),{model:Le,mixer:Ci,actions:Dt,anim:ae,fx:we,height:w==="titan"?4.7:2.3*Ei}}let at={odo:1,kettle:1,gorrum:1,thrain:1},ut={candle:1,mirror:1,bell:1,orb:1,lantern:1};function et(T,w){let C=w.prop;return{idle:ut[C]?"Idle_Neutral":C==="bow"?"Idle_Gun":"Idle_Sword",strike:at[T]?["Punch_Right","Punch_Left","Kick_Right"]:C==="daggers"?["Sword_Slash","Punch_Left","Kick_Left"]:C==="spear"||C==="trident"?["Sword_Slash","Kick_Right"]:["Sword_Slash","Sword_Slash","Kick_Right"],cast:"Gun_Shoot",support:"Interact",fidget:["Idle","Idle_Neutral","Interact"],win:"Wave"}}let ot={idle:"Idle",strike:["Punch","Weapon","Punch"],cast:"Punch",support:"Yes",fidget:["No"],win:"Yes",titan:!0};function st(T,w,C,W){let U={},q=O=>w.clips[O]?U[O]||(U[O]=T.clipAction(w.clips[O])):null,H=w.clips[C.idle]?C.idle:Object.keys(w.clips).find(O=>/^Idle/.test(O)),re={S:C,cur:null,strikeN:0,hold:!1,has:O=>!!w.clips[O],play(O,he={}){let Pe=q(O);if(!Pe)return null;let we=re.cur;return Pe.reset(),Pe.setLoop(he.loop?Po:wl,he.loop?1/0:1),Pe.clampWhenFinished=!!he.clamp,Pe.setEffectiveTimeScale(he.speed||(C.titan&&O===H?.7:1)),Pe.setEffectiveWeight(1),Pe.play(),we&&we!==Pe&&we.crossFadeTo(Pe,he.fade==null?.18:he.fade,!1),re.cur=Pe,re.hold=!!he.hold,Pe},idle(O=.25){return re.play(H,{loop:!0,fade:O})},strike(){let O=C.strike.filter(he=>w.clips[he]);return re.play(O[re.strikeN++%O.length]||"Sword_Slash",{fade:.1})},duration:O=>w.clips[O]?w.clips[O].duration:0};return H&&(W.idle=q(H)),re.idle(0),T.addEventListener("finished",O=>{O.action!==re.cur||O.action.clampWhenFinished||re.hold||re.idle(.22)}),re}let At=new Map,vt=Math.PI/180,Kt={monarch:{top:.26,r:.13,face:.15,eye:.09,crown:.18},adventurer:{top:.25,r:.12,face:.14,eye:.09,crown:.18},hooded:{top:.27,r:.15,face:.16,eye:.09,crown:.25},hair:{top:.25,r:.12,face:.14,eye:.1,crown:.2},bald:{top:.235,r:.11,face:.135,eye:.09,crown:.17}};function $(T){T.updateMatrixWorld(!0);let w=new Map;return T.traverse(C=>{if(!C.isMesh)return;let W=C.geometry.clone().applyMatrix4(C.matrixWorld),U=W.index?W.toNonIndexed():W;w.has(C.material)||w.set(C.material,[]),w.get(C.material).push(U)}),[...w].map(([C,W])=>({mat:C,geo:ko(W)}))}let xe=new Map,Re=new Map;function qe(T){if(T.transparent&&T.isMeshBasicMaterial){let U=T.opacity<.45?.3:.6,q=`glow|${U}`,H=xe.get(q);return H||(H=T.clone(),H.color=new Ie(1,1,1),H.opacity=U,H.vertexColors=!0,H.userData.shared=!0,xe.set(q,H)),{key:q,mat:H}}let w=U=>U==null?"":U.toFixed(2);if(T.userData.crack){let U=`crack|${T.userData.crack}|${w(T.roughness)}|${w(T.metalness)}`,q=xe.get(U);return q||(q=T.clone(),q.onBeforeCompile=T.onBeforeCompile,q.customProgramCacheKey=T.customProgramCacheKey,q.color=new Ie(1,1,1),q.vertexColors=!0,q.userData.shared=!0,xe.set(U,q)),{key:U,mat:q}}let C=[T.type,T.map?T.map.uuid:"",w(T.roughness),w(T.metalness),T.side,T.transparent?T.opacity:1,w(T.envMapIntensity),T.bumpScale||0,T.emissive?T.emissive.getHexString()+T.emissiveIntensity:""].join("|"),W=xe.get(C);return W||(W=T.clone(),W.color=new Ie(1,1,1),W.vertexColors=!0,W.userData.shared=!0,xe.set(C,W)),{key:C,mat:W}}let nt=T=>{let w=T.count,C=T.itemSize,W=new Float32Array(w*C),U=[T.getX,T.getY,T.getZ,T.getW];for(let q=0;q<w;q++)for(let H=0;H<C;H++)W[q*C+H]=U[H].call(T,q);return new Tt(W,C)};function pt(T,w,C){let W=new It;for(let re of["position","normal","uv",...C?["skinIndex","skinWeight"]:[]])T.attributes[re]&&W.setAttribute(re,nt(T.attributes[re]));T.index&&W.setIndex(T.index);let U=W.index?W.toNonIndexed():W;U.attributes.uv||U.setAttribute("uv",new lt(new Float32Array(U.attributes.position.count*2),2));let q=U.attributes.position.count,H=new Float32Array(q*3);for(let re=0;re<q;re++)H[re*3]=w.r,H[re*3+1]=w.g,H[re*3+2]=w.b;return U.setAttribute("color",new Tt(H,3)),U}function rn(T,w){let C=[];if(T.traverse(O=>{O.isMesh&&O.userData.kit&&C.push(O)}),!C.length)return;let W=C.map(O=>{let he=new Ns;return O.add(he),O.visible=!1,he}),U=Re.get(w);if(!U){let O=new Map;C.forEach((he,Pe)=>{let we=qe(he.material),fe=pt(he.geometry,he.material.color,!1),Te=fe.attributes.position.count,rt=new Uint16Array(Te*4),wt=new Float32Array(Te*4);for(let Le=0;Le<Te;Le++)rt[Le*4]=Pe,wt[Le*4]=1;fe.setAttribute("skinIndex",new Fs(rt,4)),fe.setAttribute("skinWeight",new lt(wt,4)),O.has(we.key)||O.set(we.key,{mat:we.mat,list:[]}),O.get(we.key).list.push(fe)}),U=[...O.values()].map(({mat:he,list:Pe})=>({mat:he,geo:ko(Pe)})),Re.set(w,U)}T.updateMatrixWorld(!0);let q=new Yt;T.add(q),q.updateMatrixWorld(!0);let H=q.matrixWorld.clone().invert(),re=new ls(W,W.map(()=>H.clone()));for(let{mat:O,geo:he}of U){let Pe=new Os(he,O);Pe.frustumCulled=!1,Pe.castShadow=!O.isMeshBasicMaterial,Pe.userData.kitMerged=1,q.add(Pe),Pe.updateMatrixWorld(!0),Pe.bind(re,Pe.matrixWorld.clone())}}function un(T,w){let C=[];T.traverse(H=>{H.isSkinnedMesh&&!H.userData.kit&&!H.userData.kitMerged&&H.parent&&!H.parent.isBone&&C.push(H)});let W=[],U=(H,re)=>H.elements.every((O,he)=>Math.abs(O-re.elements[he])<.001*(1+Math.abs(O))),q=(H,re)=>{let O=null;for(let he=0;he<re.skeleton.bones.length;he++){let Pe=H.bones.indexOf(re.skeleton.bones[he]);if(!(Pe<0)){if(!O){O=H.inverses[Pe].clone().invert().multiply(re.skeleton.boneInverses[he]);continue}if(!U(H.inverses[Pe].clone().multiply(O),re.skeleton.boneInverses[he]))return null}}return O||new gt};for(let H of C){let re=H.material;if(Array.isArray(re)||re.map)continue;if(!H.visible||!re.visible){H.parent.remove(H);continue}let O=qe(re),he=null,Pe=null;for(let fe of W)if(fe.key===O.key&&(Pe=q(fe,H))){he=fe;break}he||(he={key:O.key,mat:O.mat,bones:[],inverses:[],list:[],xs:[]},W.push(he),Pe=new gt);let we=Pe.clone().invert();H.skeleton.bones.forEach((fe,Te)=>{he.bones.indexOf(fe)<0&&(he.bones.push(fe),he.inverses.push(H.skeleton.boneInverses[Te].clone().multiply(we)))}),he.list.push(H),he.xs.push(Pe)}W.forEach((H,re)=>{let O=H.list[0],he=`${w}|${re}|${H.key}|${H.list.length}`,Pe=Re.get(he);if(!Pe){let fe=new gt,Te=new Pn;Pe=ko(H.list.map((rt,wt)=>{let Le=pt(rt.geometry,rt.material.color,!0);fe.copy(O.bindMatrix).invert().multiply(H.xs[wt]).multiply(rt.bindMatrix),Le.applyMatrix4(fe);let bt=Le.attributes.skinIndex,Ei=rt.skeleton.bones.map(Lt=>H.bones.indexOf(Lt)),Ci=new Uint16Array(bt.count*4);for(let Lt=0;Lt<bt.count;Lt++)for(let Dt=0;Dt<4;Dt++)Ci[Lt*4+Dt]=Math.max(0,Ei[Math.round(bt.array[Lt*4+Dt])]);if(Le.setAttribute("skinIndex",new Fs(Ci,4)),Le.attributes.skinWeight.normalized||!(Le.attributes.skinWeight.array instanceof Float32Array)){let Lt=Le.attributes.skinWeight,Dt=new Float32Array(Lt.count*4);for(let ae=0;ae<Lt.count;ae++)Dt[ae*4]=Lt.getX(ae),Dt[ae*4+1]=Lt.getY(ae),Dt[ae*4+2]=Lt.getZ(ae),Dt[ae*4+3]=Lt.getW(ae);Le.setAttribute("skinWeight",new lt(Dt,4))}return Le})),Re.set(he,Pe)}let we=new Os(Pe,H.mat);we.position.copy(O.position),we.quaternion.copy(O.quaternion),we.scale.copy(O.scale),we.castShadow=!0,we.frustumCulled=!1,O.parent.add(we),we.bind(new ls(H.bones,H.inverses.map(fe=>fe.clone())),O.bindMatrix.clone());for(let fe of H.list)fe.parent.remove(fe)})}function li(T){let w=new Yt;for(let{mat:C,geo:W}of T){let U=new Et(W,C);U.castShadow=!C.isMeshBasicMaterial,U.frustumCulled=!1,w.add(U)}return w}function Pt(T,w,C,W,U=0){let q=new k;T.getWorldScale(q);let H=new Yt;H.scale.setScalar(w.scale.x/(q.x||1)),T.add(H);let re=new Yt;if(re.position.set(C[0],C[1],C[2]),W){let O=new k(W[0],W[1],W[2]).normalize();re.quaternion.setFromUnitVectors(new k(0,1,0),O),U&&re.quaternion.multiply(new bn().setFromAxisAngle(new k(0,1,0),U*vt))}return H.add(re),re}let Xn=(T,w)=>[T==="R"?-Math.cos(w*vt):Math.cos(w*vt),-Math.sin(w*vt),0],Tn={R:[0,.075,.01],L:[0,.075,.01]},zi=new gt,Hs=new bn,Vs=new k,Qi=new k;function D(T,w,C=[0,0,0]){w.updateMatrixWorld(!0),T.getWorldScale(Qi);let W=new Yt;W.scale.setScalar(w.scale.x/(Qi.x||1)),T.add(W),zi.copy(w.matrixWorld).invert().multiply(T.matrixWorld).decompose(Vs,Hs,Qi);let U=new Yt;return U.quaternion.copy(Hs).invert(),U.position.set(C[0],C[1],C[2]).applyQuaternion(U.quaternion),W.add(U),U}function y(T,w){return w.updateMatrixWorld(!0),zi.copy(w.matrixWorld).invert().multiply(T.matrixWorld),Vs.setFromMatrixPosition(zi).y}let M=["","#6b5d50","#9aa3ad","#c6ced8","#dfe3ea","#f0e6d0"],A=["","#8a7a68","#5bc46a","#4aa3ff","#b46cff","#ffb02e"],L={fury:"#ff4a3a",vigor:"#4ae07a",bulwark:"#b8b4aa",haste:"#3ad8cc",keen:"#ffd040"},J=T=>T?`${T.r}${T.s?T.s[0]:"-"}`:"0",z={helm:1,horns:1},Y={crown:1,halo:1,circlet:1,veil:1,mask:1},Z=new k,ce=new bn;function ye(T,w){return(C,W)=>{T(C,W);let U=C.userData.sp||(C.userData.sp={p:new k,t:W,ax:0,az:0,vx:0,vz:0,on:!1}),q=Math.min(.05,Math.max(.001,W-U.t));if(U.t=W,!C.parent)return;C.parent.getWorldPosition(Z),U.on||(U.p.copy(Z),U.on=!0);let H=Z.clone().sub(U.p).divideScalar(q);U.p.copy(Z),C.parent.getWorldQuaternion(ce),H.applyQuaternion(ce.invert());let re=(Pe,we,fe)=>Math.max(we,Math.min(fe,Pe)),O=re((H.z*.11-H.y*.05)*w,-.5,1),he=re(-H.x*.11*w,-.7,.7);U.vx+=((O-U.ax)*70-U.vx*9)*q,U.ax+=U.vx*q,U.vz+=((he-U.az)*70-U.vz*9)*q,U.az+=U.vz*q,C.rotation.x+=U.ax,C.rotation.z+=U.az}}function Ae(T,w,C,W,U,q,H={},re=null){let O=w.kit||{},he=H.parts&&H.parts.head||C,Pe=new Set(H.hide||[]),we=he==="hooded"&&!Pe.has("hood"),fe=we?Kt.hooded:he==="hooded"?Kt.hair:H.bald||Pe.has("hair")?Kt.bald:Kt[he]||Kt.adventurer,Te={};W.traverse(F=>{F.isBone&&(Te[F.name]=F)}),W.updateMatrixWorld(!0);let rt=F=>U?me(F,"#2e1f33",.5):F,wt=tt?tt.preset.textureSize:256,Le=(F,ue=0)=>ue>=.5?Oi("metal",rt(F),{metalness:.75,size:wt}):ue>0?Oi("leather",rt(F),{roughness:.55,metalness:.35,size:wt}):Oi("leather",rt(F),{size:wt}),bt=F=>Oi("cloth",rt(F),{side:cn,repeat:4,bump:.6,size:wt}),Ei=F=>Oi("wood",rt(F),{size:wt}),Ci=F=>Oi("gold",rt(F),{size:wt}),Lt=(F,ue=1)=>te(U?me(F,"#ff3355",.45):F,ue),Dt=re&&re.weapon,ae={steel:Le(Dt?M[Dt.r]:"#c4ccd6",Dt&&Dt.r===1?.3:.6),iron:Le("#4a4a52",.5),wood:Ei("#6b4a29"),leather:Le("#3a2a20"),acc:Le(w.accent,.35),accG:Lt(w.accent),accH:Lt(w.accent,.28),armor:Le(w.armor),armorD:Le(De(w.armor,.6)),gold:Ci(me(w.accent,"#e8c070",.5)),glowC:Lt(w.glow||w.accent),glowH:Lt(w.glow||w.accent,.3),cloth:bt(w.cloth||De(w.armor,.62)),hair:Oi("hair",rt(w.hair),{size:wt})},on=(F,ue=.7)=>F===1?"#5a4232":me(M[F],w.armor,ue),An=F=>U?Le(me(A[F],"#3a3340",.75),.5):F>=4?Ci(A[F]):Le(A[F],.4),an=(F,ue,oe,Ce="")=>{let Se=`${T}|${U?1:0}|${F}|${Ce}`,Ee=At.get(Se);if(!Ee){let Be=new Yt,Qe=[];oe(Be,Qe),Qe.forEach(ve=>Be.remove(ve.obj)),Ee={baked:$(Be),live:Qe},At.set(Se,Ee)}let ge=li(Ee.baked);ge.traverse(Be=>{Be.isMesh&&(Be.userData.kit=1)}),ue.add(ge);for(let Be of Ee.live){let Qe=Be.obj.clone();ue.add(Qe),Qe.traverse(ve=>{ve.isMesh&&(ve.userData.kit=1)}),q.push(ve=>Be.fn(Qe,ve))}},N=(F,ue,oe,Ce,Se,Ee)=>se(ue==="box"?"bbox":ue,F,oe,Ce,Se,Ee),ln=(F,ue)=>{let oe=F.userData.base,Ce=1+Math.sin(ue*17+F.id)*.12+Math.sin(ue*29)*.06;F.scale.set(oe[0]*Ce,oe[1]*(2-Ce),oe[2]*Ce)},Ct=(F,ue)=>{let oe=F.userData.base,Ce=1+Math.sin(ue*3+F.id)*.12;F.scale.set(oe[0]*Ce,oe[1]*Ce,oe[2]*Ce)},Wt=(F,ue)=>(oe,Ce)=>{oe.rotation[F]=Ce*ue},Zt=(F,ue,oe,Ce,Se,Ee,ge,Be)=>{let Qe=Array.isArray(Se)?Se:[Se,Se,Se],ve=N(F,oe,Ce,Qe,Ee,Be);return ve.userData.base=Qe.slice(),ve.castShadow=!1,ue.push({obj:ve,fn:ge}),ve},ws=(F,ue,oe,Ce,Se=0)=>{let Ee=ie(F,oe);return ue.push({obj:Ee,fn:Se?ye(Ce,Se):Ce}),Ee},Ko={spear(F){if(N(F,"rod",[0,.3,0],[.042,1.75,.042],ae.wood),N(F,"rod",[0,1.15,0],[.06,.07,.06],ae.acc),N(F,"cone",[0,1.32,0],[.09,.28,.03],ae.steel),N(F,"cone",[0,1.08,0],[.09,.12,.09],ae.acc,[180,0,0]),O.pennant){let ue=bt(O.pennant);N(F,"box",[0,1,.11],[.012,.13,.2],ue),N(F,"cone",[0,1,.27],[.12,.14,.012],ue,[90,90,0])}},staff(F,ue){let oe=O.staff||"orb",Ce=O.staffLen||1,Se=1.5*(Ce-1),Ee=oe==="ice"?Le("#cfe8f4",.2):oe==="sun"?ae.gold:oe==="drift"?Le("#8a7458"):ae.wood;if(N(F,"rod",[0,.3+Se/2,0],[.05,1.5*Ce,.05],Ee),oe==="ice")N(F,"octa",[0,1.17+Se,0],[.13,.32,.13],ae.accG),N(F,"octa",[.07,1.06+Se,0],[.06,.16,.06],ae.accG,[0,0,-30]),N(F,"octa",[-.07,1.06+Se,0],[.06,.16,.06],ae.accG,[0,0,30]),Zt(F,ue,"sphere",[0,1.17+Se,0],.34,ae.accH,Ct);else if(oe==="sun"){N(F,"sphere",[0,1.16+Se,0],[.16,.16,.16],ae.glowC);for(let ge=0;ge<8;ge++){let Be=ge*45*vt;N(F,"cone",[Math.cos(Be)*.15,1.16+Se+Math.sin(Be)*.15,0],[.04,.1,.04],ae.gold,[0,0,ge*45-90])}Zt(F,ue,"sphere",[0,1.16+Se,0],.42,ae.glowH,Ct)}else{if(oe==="drift"){for(let ge of[-1,1])N(F,"rod",[ge*.06,1.04+Se,0],[.035,.22,.035],Ee,[0,0,ge*-25]);N(F,"sphere",[0,.86+Se,0],[.08,.06,.08],Ee),N(F,"cone",[.06,.8+Se,.03],[.06,.08,.02],Le("#f0e0c8"),[180,0,0])}else N(F,"ring",[0,1.12+Se,0],[.2,.2,.2],ae.acc),N(F,"cone",[0,1.01+Se,0],[.07,.1,.07],ae.acc,[180,0,0]);N(F,"sphere",[0,1.12+Se,0],[.13,.13,.13],ae.accG),Zt(F,ue,"sphere",[0,1.12+Se,0],.3,ae.accH,Ct)}},hammer(F,ue){let oe=O.big?1.25:1;N(F,"rod",[0,O.big?.2:.25,0],[.045*oe,O.big?.85:.95,.045*oe],ae.wood),O.big?(N(F,"box",[0,.62,0],[.32,.2,.2],Le("#2a2426",.5)),N(F,"box",[0,.62,0],[.34,.045,.21],ae.accG),N(F,"box",[0,.62,0],[.045,.22,.22],ae.accG),N(F,"cone",[.19,.62,0],[.11,.11,.11],Le("#2a2426",.5),[0,0,-90]),N(F,"rod",[0,-.2,0],[.07,.06,.07],ae.iron)):(N(F,"box",[0,.68,0],[.3,.16,.16],ae.iron),N(F,"box",[0,.68,0],[.32,.04,.17],ae.acc),N(F,"box",[.16,.68,0],[.02,.15,.15],ae.accG),N(F,"box",[-.16,.68,0],[.02,.15,.15],ae.accG),Zt(F,ue,"sphere",[.16,.68,0],.22,ae.accH,Ct))},club(F){let ue=Le(w.accent);N(F,"taper",[0,.38,0],[.16,.8,.16],ae.wood),N(F,"sphere",[0,.78,0],[.16,.14,.16],ae.wood),N(F,"sphere",[.07,.62,.04],[.08,.08,.08],ae.wood),N(F,"sphere",[-.06,.74,-.05],[.07,.07,.07],ae.wood),N(F,"sphere",[.02,.84,.05],[.12,.07,.1],ue),N(F,"sphere",[-.08,.66,.02],[.07,.1,.07],ue),N(F,"rod",[0,.08,0],[.11,.12,.11],ae.leather)},trident(F){N(F,"rod",[0,.28,0],[.042,1.6,.042],ae.armorD),N(F,"box",[0,1.08,0],[.3,.04,.04],ae.gold),N(F,"cone",[0,1.27,0],[.06,.34,.06],ae.acc);for(let ue of[-.13,.13])N(F,"rod",[ue,1.16,0],[.03,.16,.03],ae.acc),N(F,"cone",[ue,1.3,0],[.05,.14,.05],ae.acc);N(F,"sphere",[0,1.08,0],[.07,.07,.07],ae.accG)},katana(F){N(F,"rod",[0,.03,0],[.04,.26,.04],Le("#1c1c22")),N(F,"disc",[0,.17,0],[.1,.02,.1],ae.gold),N(F,"box",[0,.48,0],[.012,.6,.045],ae.steel),N(F,"box",[0,.92,-.025],[.012,.3,.04],ae.steel,[-9,0,0]),N(F,"box",[0,.48,.03],[.014,.6,.016],ae.glowC),N(F,"box",[0,.91,.006],[.014,.3,.016],ae.glowC,[-9,0,0])},sword(F,ue){let oe=O.side==="sword"&&w.prop==="shield"?.8:1;if(N(F,"rod",[0,.02,0],[.04,.22,.04],ae.leather),N(F,"sphere",[0,-.1,0],[.06,.06,.06],ae.gold),N(F,"box",[0,.14,0],[.26,.04,.05],ae.gold),N(F,"box",[0,.16+.45*oe,0],[.075,.9*oe,.022],ae.steel),N(F,"cone",[0,.16+.9*oe+.05,0],[.075,.1,.022],ae.steel),w.glow||O.flame){let Ce=O.flame?Lt(w.accent,.55):ae.glowH;Zt(F,ue,"box",[0,.16+.47*oe,0],[.13,.98*oe,.05],Ce,O.flame?ln:Ct)}},axe(F){N(F,"rod",[0,.25,0],[.045,.85,.045],ae.wood),N(F,"half",[0,.6,0],[.34,.025,.3],ae.steel,[90,90,0]),N(F,"box",[0,.6,0],[.08,.12,.06],ae.acc),N(F,"cone",[0,.72,0],[.05,.1,.05],ae.acc)},dagger(F){N(F,"rod",[0,.01,0],[.034,.13,.034],ae.leather),N(F,"box",[0,.09,0],[.12,.025,.03],ae.acc),N(F,"cone",[0,.28,0],[.065,.36,.015],ae.steel),N(F,"cone",[0,.28,0],[.09,.4,.02],ae.glowH)},whip(F){N(F,"rod",[0,.06,0],[.045,.3,.045],ae.leather),N(F,"sphere",[0,-.1,0],[.055,.055,.055],ae.acc),N(F,"rod",[0,.2,0],[.06,.04,.06],ae.acc)},hook(F){N(F,"rod",[0,.2,0],[.04,.7,.04],Le("#5a4034",.4)),N(F,"hook",[.09,.56,0],[.18,.18,.18],Le("#7a5a48",.5),[0,0,-20]),N(F,"cone",[.2,.52,0],[.04,.1,.04],Le("#7a5a48",.5),[0,0,150]),N(F,"rod",[0,-.12,0],[.06,.05,.06],ae.acc),N(F,"rod",[0,-.2,0],[.012,.14,.012],ae.iron)},bow(F){N(F,"rod",[0,0,0],[.04,.16,.04],ae.leather);for(let ue of[1,-1])N(F,"rod",[0,ue*.22,-.02],[.03,.32,.03],ae.wood,[ue*-8,0,0]),N(F,"rod",[0,ue*.5,-.09],[.024,.28,.024],ae.wood,[ue*-28,0,0]),N(F,"sphere",[0,ue*.63,-.16],[.035,.035,.035],ae.acc);N(F,"rod",[0,0,-.16],[.006,1.26,.006],ae.accG)},lantern(F,ue){N(F,"rod",[0,.3,0],[.04,1.5,.04],ae.wood),N(F,"crook",[.1,1.05,0],[.2,.2,.2],ae.gold),N(F,"rod",[.2,.97,0],[.008,.12,.008],ae.gold),N(F,"box",[.2,.84,0],[.13,.17,.13],Le(me(w.accent,"#6a4a20",.6),.5)),N(F,"cone",[.2,.95,0],[.16,.06,.16],ae.gold),N(F,"sphere",[.2,.84,0],[.15,.13,.15],ae.accG),Zt(F,ue,"sphere",[.2,.84,0],.4,ae.accH,Ct)},candle(F,ue){N(F,"disc",[0,.06,0],[.22,.03,.22],ae.gold),N(F,"rod",[0,-.03,0],[.045,.16,.045],ae.gold),N(F,"rod",[0,.2,0],[.11,.28,.11],Le("#f2e6c8")),N(F,"ring",[.13,.03,0],[.08,.08,.2],ae.gold,[90,0,0]),Zt(F,ue,"cone",[0,.42,0],[.11,.22,.11],ae.accG,ln),Zt(F,ue,"sphere",[0,.4,0],.42,ae.accH,Ct)},mirror(F,ue){N(F,"rod",[0,.05,0],[.035,.2,.035],ae.gold),N(F,"ring",[0,.3,0],[.24,.24,.3],ae.gold),N(F,"disc",[0,.3,0],[.22,.012,.22],ae.accG,[90,0,0]),Zt(F,ue,"sphere",[0,.3,0],.4,ae.accH,Ct)},bell(F,ue){N(F,"rod",[0,.05,0],[.04,.18,.04],ae.wood),N(F,"sphere",[0,-.08,0],[.12,.1,.12],ae.gold),N(F,"bell",[0,-.22,0],[.32,.28,.32],ae.gold,[180,0,0]),N(F,"ring",[0,-.36,0],[.32,.32,.4],ae.gold,[90,0,0]),N(F,"sphere",[0,-.39,0],[.07,.07,.07],ae.glowC),Zt(F,ue,"sphere",[0,-.24,0],.55,ae.glowH,Ct)},orb(F,ue){N(F,"sphere",[0,.22,0],[.18,.18,.18],Le("#140a1e",.3)),Zt(F,ue,"sphere",[0,.22,0],.3,ae.accH,Ct),Zt(F,ue,"ring",[0,.22,0],.3,ae.accG,Wt("y",2.2),[70,0,0]),Zt(F,ue,"ring",[0,.22,0],.24,ae.glowC,Wt("x",-1.6),[0,0,60])}},xd={spear:25,staff:32,lantern:32,candle:42,bell:35,orb:40,mirror:30,bow:15,trident:30,club:12,hammer:15,axe:15,hook:25,whip:10},yd={bow:90},yh=(F,ue,oe)=>{let Ce=An(oe.r),Se=Lt(L[oe.s]||w.accent);if(N(F,"ring",[0,.06,0],[.075,.075,.3],Ce,[90,0,0]),oe.r>=2&&N(F,"ring",[0,-.02,0],[.07,.07,.3],Ce,[90,0,0]),oe.r>=3&&N(F,"octa",[0,-.14,0],[.06,.08,.06],Se),oe.r>=4)for(let Ee of[-1,1])N(F,"cone",[Ee*.06,.12,0],[.03,.09,.03],Ce,[0,0,Ee*-60]);oe.r>=5&&(N(F,"octa",[0,.13,0],[.07,.09,.07],Se),Zt(F,ue,"sphere",[0,.13,0],.13,Lt(L[oe.s]||w.accent,.3),Ct))},vd=[1,1,1.04,1.08,1.13,1.18],Ws=w.prop==="shield"?O.side:w.prop==="daggers"?"dagger":w.prop,vh=!1;if(W.traverse(F=>{F.name==="Sword"&&(F.visible=vh),F.name==="Backpack"&&(O.cape||O.pack===!1||O.back)&&(F.visible=!1)}),Ws&&!vh&&Ko[Ws]&&Te.WristR){let F=Ws==="hammer"&&O.big?58:xd[Ws]||0,ue=Pt(Te.WristR,W,Tn.R,Xn("R",F),yd[Ws]||0);Dt&&ue.scale.multiplyScalar(vd[Dt.r]),an("R",ue,(oe,Ce)=>{Ko[Ws](oe,Ce),Dt&&yh(oe,Ce,Dt)},J(Dt))}if(w.prop==="whip"&&Te.WristR&&an("Wl",D(Te.WristR,W,[0,0,0]),(F,ue)=>{let oe=ws(F,ue,[0,0,0],(Ee,ge)=>{Ee.rotation.y=Math.sin(ge*1.7)*.35,Ee.rotation.x=Math.sin(ge*2.3)*.06},.6),Ce=[];for(let Ee=0;Ee<=12;Ee++){let ge=Ee/12,Be=ge<.7?-Math.pow(ge/.7,1.4)*.92:-.92,Qe=.12+ge*.75,ve=Math.sin(ge*9)*.1*ge;Ce.push(new k(-.08-ve,Be,Qe))}for(let Ee=0;Ee<12;Ee++){let ge=Ce[Ee],Be=Ce[Ee+1],Qe=ge.distanceTo(Be);N(oe,"rod",[(ge.x+Be.x)/2,(ge.y+Be.y)/2,(ge.z+Be.z)/2],[.035-Ee*.002,Qe+.01,.035-Ee*.002],ae.accG).quaternion.setFromUnitVectors(new k(0,1,0),Be.clone().sub(ge).normalize())}let Se=Ce[12];N(oe,"sphere",[Se.x,Se.y+.03,Se.z],[.09,.07,.09],ae.glowC),N(oe,"cone",[Se.x,Se.y+.12,Se.z],[.08,.2,.08],ae.glowC)}),Te.WristL&&w.prop==="daggers"&&an("L",Pt(Te.WristL,W,Tn.L,Xn("L",0)),(F,ue)=>{Ko.dagger(F,ue),Dt&&yh(F,ue,Dt)},J(Dt)),Te.WristL&&w.prop==="shield"){let F=Pt(Te.WristL,W,[0,0,.08],null);F.quaternion.setFromRotationMatrix(new gt().makeBasis(new k(0,0,1),new k(0,-1,0),new k(1,0,0)));let ue=O.shield||"round";an("S",F,oe=>{let Ce=Le(O.shieldFace||me(w.armor,w.accent,.25),.4),Se=Le(Dt&&Dt.r>=3?A[Dt.r]:me(w.accent,"#c8ccd4",.4),.6);if(ue==="kite")N(oe,"box",[0,.1,0],[.4,.42,.035],Ce),N(oe,"cone",[0,-.27,0],[.4,.32,.035],Ce,[180,0,0]),N(oe,"box",[0,0,.022],[.06,.62,.012],Se),N(oe,"box",[0,.14,.022],[.34,.06,.012],Se),N(oe,"ring",[0,.1,0],[.4,.42,.35],Se,[0,0,0]);else if(ue==="tower")N(oe,"box",[0,.05,0],[.44,.78,.04],Le(w.armor,.4)),N(oe,"box",[0,.05,-.006],[.5,.84,.03],Lt(w.glow||w.accent,.7)),N(oe,"sphere",[0,.12,.03],[.14,.14,.05],ae.glowC),N(oe,"box",[0,.05,.024],[.05,.66,.012],ae.gold);else{let Ee=O.big?.62:.56;if(N(oe,"disc",[0,0,0],[Ee,.035,Ee],Ce,[90,0,0]),N(oe,"ring",[0,0,0],[Ee,Ee,.6],O.big?Lt(w.accent):Se),N(oe,"sphere",[0,0,.02],[.12,.12,.08],Se),O.studs)for(let ge=0;ge<6;ge++){let Be=ge*60*vt;N(oe,"sphere",[Math.cos(Be)*Ee*.36,Math.sin(Be)*Ee*.36,.02],[.045,.045,.03],Le(w.accent))}if(O.big)for(let ge=0;ge<8;ge++){let Be=ge*45*vt;N(oe,"box",[Math.cos(Be)*Ee*.3,Math.sin(Be)*Ee*.3,.02],[.03,Ee*.5,.012],Se,[0,0,ge*45+90])}}},Dt&&Dt.r>=3?String(Dt.r):"")}let en=re&&re.helm,Jo=z[w.gear]?"helm":Y[w.gear]||we||O.hat?"adorn":"open";if(Te.Head){let F=Pt(Te.Head,W,[0,0,0],null),ue=fe.top,oe=fe.r,Ce=(ge,Be,Qe)=>{if(N(ge,"dome",[0,ue-.12,-.01],[oe*2.25,oe*1.55,oe*2.35],Be),N(ge,"rod",[0,ue-.12,-.01],[oe*2.3,.035,oe*2.4],Be),N(ge,"box",[0,ue-.17,fe.face+.012],[.03,.1,.02],Be),Qe)for(let ve of[-1,1])N(ge,"box",[ve*oe*.98,ue-.21,.04],[.03,.12,.1],Be)},Se=ge=>{for(let Be of[-.05,.05])N(ge,"sphere",[Be,fe.eye,fe.face],[.035,.022,.02],Lt(U?"#ff2a2a":w.glow))},Ee=w.gear;an("H",F,(ge,Be)=>{if(Ee==="helm"){let ve=Le(en?me(M[en.r],w.armor,.3):me(w.armor,"#c8ccd4",O.helm==="winged"?.2:.5),.6);if(Ce(ge,ve,O.helm!=="great"),O.helm==="winged")for(let ct of[-1,1])N(ge,"cone",[ct*(oe+.03),ue-0,-.05],[.1,.32,.03],Le("#ffffff",.2),[-35,90,ct*-35]),N(ge,"cone",[ct*(oe+.02),ue-.06,-.08],[.08,.24,.025],ae.glowC,[-50,90,ct*-50]);else if(O.helm==="horned"){for(let ct of[-1,1])N(ge,"cone",[ct*(oe+.05),ue+0,0],[.075,.3,.075],Le("#e8e4da"),[0,0,ct*-35]),N(ge,"cone",[ct*(oe+.13),ue+.15,0],[.035,.08,.035],ae.accG,[0,0,ct*-35]);N(ge,"box",[0,ue+0,0],[.03,.07,.26],ae.acc)}else if(O.helm==="great"){N(ge,"rod",[0,ue-.2,0],[oe*2.25,.16,oe*2.3],ve),N(ge,"box",[0,fe.eye+.005,fe.face+.005],[.17,.022,.02],Le("#141418")),N(ge,"box",[0,ue-.04,0],[.025,.05,oe*2.1],ae.acc);for(let ct of[-1,1])N(ge,"sphere",[ct*oe*1.1,ue-.15,0],[.04,.04,.04],ae.acc)}}else if(Ee==="horns"){N(ge,"dome",[0,ue-.12,-.01],[oe*2.3,oe*1.7,oe*2.45],Le("#26201e",.5));let ve=Oi("bone",rt("#e8dcc0"),{size:wt});for(let ct of[-1,1])N(ge,"rod",[ct*(oe+.03),ue-.08,.01],[.085,.12,.085],ve,[0,0,ct*75]),N(ge,"rod",[ct*(oe+.1),ue-.03,.02],[.07,.12,.07],ve,[-10,0,ct*35]),N(ge,"cone",[ct*(oe+.13),ue+.07,.04],[.065,.16,.065],ve,[-20,0,ct*5]);N(ge,"box",[0,ue-.15,fe.face+.01],[.16,.025,.02],ae.glowC)}else if(Ee==="halo"){let ve=ie(ge,[0,ue+.13,-.06]);if(ve.rotation.x=70*vt,N(ve,"ring",[0,0,0],[.34,.34,.5],ae.glowC),O.staff==="sun")for(let ct=0;ct<8;ct++){let pn=ct*45*vt;N(ve,"cone",[Math.cos(pn)*.23,Math.sin(pn)*.23,0],[.035,.08,.035],ae.gold,[0,0,ct*45-90])}Zt(ge,Be,"sphere",[0,ue+.13,-.06],[.42,.12,.42],ae.glowH,Ct)}else if(Ee==="circlet"){let ve=fe.eye+.07;N(ge,"ring",[0,ve,0],[oe*1.85,oe*1.95,.2],ae.gold,[80,0,0]),N(ge,"octa",[0,ve-.005,oe*.95+.02],[.05,.075,.03],ae.glowC)}else if(Ee==="bandana"){let ve=bt(O.band||w.accent),ct=fe.eye+.08;N(ge,"ring",[0,ct,0],[oe*2.25,oe*2.4,.35],ve,[80,0,0]);let pn=ws(ge,Be,[0,ct,-oe-.03],(yn,Hn)=>{yn.rotation.x=.5+Math.sin(Hn*3.1+yn.id)*.18,yn.rotation.z=Math.sin(Hn*2.3)*.15},1.6);N(pn,"box",[.03,-.12,-.02],[.05,.26,.012],ve,[0,0,10]),N(pn,"box",[-.03,-.15,-.01],[.05,.32,.012],ve,[0,0,-8]),w.glow&&N(ge,"sphere",[0,ct,oe*1.1],[.04,.04,.02],ae.glowC)}else if(Ee==="crown"){let ve=Le(O.crownBand||me(w.accent,"#e8c070",.4),.6),ct=fe.crown,pn=oe*1.05;N(ge,"ring",[0,ct,0],[pn*2,pn*2.1,.6],ve,[90,0,0]);let yn=7,Hn=O.crown||"spike";for(let Kn=0;Kn<yn;Kn++){let Da=Kn/yn*Math.PI*2+Math.PI/2,Ss=Math.cos(Da)*pn,_h=Math.sin(Da)*pn*1.05,Zo=Hn==="jagged"?Kn%2?.12:.24:Hn==="coral"?.12+Kn%3*.05:Kn===0?.16:.11,Md=Hn==="coral"?Kn%2?18:-14:0;N(ge,"cone",[Ss,ct+Zo/2,_h],[.05,Zo,.05],Hn==="jagged"?Le("#1a1020",.4):ve,[0,0,Md]),(Hn!=="spike"||Kn===0)&&N(ge,"sphere",[Ss,ct+Zo+.005,_h],[.035,.035,.035],ae.glowC)}if(O.flame)for(let Kn=0;Kn<3;Kn++)Zt(ge,Be,"cone",[(Kn-1)*.07,ct+.13,pn*.95],[.05,.13,.05],ae.glowC,ln)}else if(Ee==="mask"){let ve=bt(me(w.armor,"#000000",.25));N(ge,"dome",[0,fe.eye-.07,fe.face-.06],[.22,.1,.17],ve,[90,0,0]),N(ge,"box",[0,fe.eye-.035,fe.face+0],[.2,.01,.03],ae.acc)}else Ee==="veil"&&(N(ge,"cone",[0,ue+.02,-.01],[.3,.24,.3],Le("#1a1028")),N(ge,"disc",[0,ue-.09,-.01],[.42,.012,.42],Le("#1a1028")),N(ge,"cone",[0,ue-.2,-.04],[.5,.42,.5],Lt("#1a1028",.55)),N(ge,"ring",[0,ue-.09,0],[.21,.21,.3],ae.accG,[90,0,0]));let Qe=ae.hair;if(O.hair==="ponytail"){N(ge,"sphere",[0,ue-.05,-oe*.95],[.07,.07,.07],ae.acc);let ve=ws(ge,Be,[0,ue-.05,-oe-.02],(ct,pn)=>{ct.rotation.x=Math.sin(pn*2.2+1)*.08,ct.rotation.z=Math.sin(pn*1.6)*.06},1.3);N(ve,"capsule",[0,-.1,-.06],[.11,.1,.09],Qe,[-30,0,0]),N(ve,"capsule",[0,-.24,-.1],[.08,.1,.07],Qe,[-12,0,0]),N(ve,"cone",[0,-.37,-.11],[.07,.12,.06],Qe,[180,0,0])}else if(O.hair==="braid"){for(let ve=0;ve<6;ve++)N(ge,"sphere",[0,ue-.12-ve*.075,-oe-.03-ve*.008],[.085-ve*.006,.09,.08-ve*.005],Qe);N(ge,"ring",[0,ue-.6,-oe-.07],[.05,.05,.4],ae.acc,[90,0,0]),N(ge,"cone",[0,ue-.66,-oe-.07],[.06,.1,.05],Qe,[180,0,0])}else if(O.hair==="bun")N(ge,"sphere",[0,ue-.02,-oe*.8],[.13,.12,.12],Qe),N(ge,"rod",[.04,ue+.02,-oe*.8],[.015,.2,.015],ae.gold,[0,0,60]);else if(O.hair==="flame")for(let ve=0;ve<5;ve++){let ct=(ve-2)*.5;Zt(ge,Be,"cone",[Math.sin(ct)*.08,ue+.04-Math.abs(ve-2)*.03,-.04-Math.cos(ct)*.03],[.09,.26-Math.abs(ve-2)*.05,.09],ve%2?ae.glowC:Lt(w.hair),ln,[-20,0,(ve-2)*-14])}else O.hair==="long"&&(N(ge,"box",[0,ue-.33,-oe*.6],[oe*1.9,.36,.08],Qe,[8,0,0]),N(ge,"cone",[0,ue-.55,-oe*.62],[oe*1.9,.12,.08],Qe,[180,0,0]));if(O.beardBraid){N(ge,"ring",[0,-.06,.13],[.05,.05,.4],ae.gold,[90,0,0]);for(let ve=0;ve<3;ve++)N(ge,"sphere",[0,-.1-ve*.05,.13+ve*.01],[.055-ve*.008,.06,.05],Qe);N(ge,"sphere",[0,-.25,.155],[.04,.04,.04],ae.gold)}if(O.hat==="straw"){let ve=Le("#d8bb6a"),ct=Le(w.accent);N(ge,"disc",[0,ue-.04,0],[.62,.02,.62],ve,[-6,0,0]),N(ge,"cone",[0,ue+.06,-.01],[.32,.2,.32],ve),N(ge,"rod",[0,ue-.02,-.01],[.27,.04,.27],ct)}we&&(w.glow||U)&&Ee!=="halo"&&Se(ge)}),en&&an("gH",F,(ge,Be)=>{let Qe=Le(on(en.r,.4),en.r===1?0:.6),ve=An(en.r),ct=Lt(L[en.s]||w.accent),pn=Le("#5a4232");if(Jo==="open"||Jo==="adorn"){let yn=we?fe.eye+.11:fe.eye+.065,Hn=oe*(we?1.02:1);O.hat?N(ge,"rod",[0,ue-.005,-.01],[.28,.025,.28],ve):N(ge,"ring",[0,yn,-.005],[Hn*1.98,Hn*2.08,en.r===1?.22:.16],en.r===1?pn:ve,[80,0,0]);let Kn=O.hat?ue:yn,Da=O.hat?.14:we?fe.face:Hn*.98+.012;if(en.r>=2&&N(ge,"octa",[0,Kn,Da],[.035+en.r*.005,.045+en.r*.007,.022],en.r>=3?ct:Qe),en.r>=3&&!O.hat&&!we)for(let Ss of[-1,1])N(ge,"box",[Ss*(Hn+.005),yn-.035,-.01],[.022,.07,.09],Qe);if(en.r>=4)for(let Ss of[-1,1])N(ge,"cone",[Ss*(Hn+.02),yn+.025,-.03],[.045,.11+(en.r-4)*.06,.016],ve,[-40,90,Ss*-40]);en.r>=5&&!O.hat&&N(ge,"octa",[0,yn+.03,-Hn-.01],[.05,.08,.03],ct),O.hat&&en.r>=3&&N(ge,"cone",[.1,ue+.08,-.08],[.035,.22+en.r*.02,.018],ct,[-30,0,-30])}else N(ge,"rod",[0,ue-.115,-.01],[oe*2.4,.03,oe*2.5],ve),en.r>=2&&N(ge,"box",[0,ue-.085,fe.face-.01],[.12+en.r*.01,.03,.025],Qe),en.r>=3&&N(ge,"octa",[0,ue-.06,fe.face+0],[.04,.055,.028],ct),en.r>=4&&N(ge,"box",[0,ue+.02,-.02],[.025,.06+(en.r-4)*.04,oe*2],ve)},`${Jo}${J(en)}`)}let _d=Te.Hips?y(Te.Hips,W):.9;Te.Hips&&(O.robe||O.coat||O.tabard||O.apron||O.belt||O.scabbard||O.coil)&&an("Hp",D(Te.Hips,W,[0,0,0]),F=>{let ue=bt(O.robeColor||w.cloth||w.armor),oe=Le(w.accent,.3);if(O.robe){let Se=O.robe==="long"?_d+.12-.07:.45,Ee=O.robeW||1;if(N(F,"taper",[0,.12-Se/2,0],[.5*Ee,Se,.42*Ee],ue,[180,0,0]),O.robe==="long"){let ge=Se*.42,Be=bt(me(O.robeColor||w.cloth||w.armor,"#000000",.18));N(F,"taper",[0,.12-ge/2+.01,0],[.53*Ee,ge,.45*Ee],Be,[180,0,0]),N(F,"taper",[0,.12-ge+.02,0],[.555*Ee,.03,.47*Ee],oe,[180,0,0])}if(N(F,"taper",[0,.12-Se+.03,0],[.53*Ee,.06,.45*Ee],oe,[180,0,0]),O.robe==="long"&&O.stole!==!1&&N(F,"box",[0,.12-Se/2,.205*Ee],[.12,Se*.96,.02],oe,[-9,0,0]),O.bells)for(let ge=0;ge<6;ge++){let Be=ge/6*Math.PI*2+.3;N(F,"bell",[Math.sin(Be)*.235*Ee,.12-Se+.05,Math.cos(Be)*.195*Ee],[.05,.06,.05],ae.gold,[180,0,0])}}if(O.coat){let Ce=bt(O.coat===!0?w.armor:O.coat),Se=.5;N(F,"box",[0,.02-Se/2,-.12],[.36,Se,.03],Ce,[8,0,0]);for(let Ee of[-1,1])N(F,"box",[Ee*.15,.02-Se/2,0],[.03,Se,.22],Ce,[0,0,Ee*4]),N(F,"box",[Ee*.12,.02-Se/2,.1],[.1,Se,.03],Ce,[-6,Ee*20,0]);N(F,"box",[0,.02-Se+.02,-.135],[.37,.03,.035],oe,[8,0,0])}if(O.tabard){let Ce=bt(O.tabard),Se=.5;N(F,"box",[0,.25-Se/2+.05,.16],[.22,Se+.25,.02],Ce,[-6,0,0]),N(F,"box",[0,.25-Se/2+.05,-.14],[.22,Se+.25,.02],Ce,[6,0,0]),N(F,"box",[0,.25-Se-.05,.19],[.24,.03,.025],oe,[-6,0,0]),N(F,"box",[0,.25-Se-.05,-.17],[.24,.03,.025],oe,[6,0,0]),O.emblem&&N(F,"octa",[0,.2,.18],[.08,.11,.02],Le(O.emblem,.3))}if(O.apron){let Ce=Le("#4a3426");N(F,"box",[0,.05,.17],[.3,.75,.025],Ce,[-4,0,0]),N(F,"box",[0,-.31,.19],[.31,.03,.03],ae.acc,[-4,0,0]),N(F,"box",[.08,-.05,.19],[.1,.1,.02],Le("#3a281c"),[-4,0,0]),N(F,"rod",[.08,-.01,.205],[.012,.12,.012],ae.iron,[0,0,20])}if(O.belt){let Ce=Le(O.belt===!0?"#3a2a20":O.belt);N(F,"rod",[0,.1,0],[.38,.05,.32],Ce),N(F,"box",[0,.1,.16],[.07,.06,.02],ae.gold),N(F,"box",[-.16,.04,.05],[.06,.1,.08],Ce)}if(O.scabbard&&(N(F,"box",[-.19,-.05,-.02],[.03,.7,.05],Le("#1c1c22"),[62,0,-8]),N(F,"box",[-.19,-.05,-.02],[.035,.05,.06],ae.gold,[62,0,-8])),O.coil)for(let Ce=0;Ce<3;Ce++)N(F,"ring",[.2,0-Ce*.012,.03],[.14,.14,.3],Ce===1?ae.accG:ae.leather,[10,90,0])});let kt=re&&re.chest,qs=O.pauldrons||(kt?kt.r===1?"leather":"plate":null);if(qs)for(let[F,ue]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Te[ue]&&an("P"+F,D(Te[ue],W,[F*.02,.01,0]),(oe,Ce)=>{let Se=(O.pauldronSize||1)*(kt?.72+kt.r*.05:1),Ee=kt?Le(on(kt.r,.75),kt.r===1?0:.55):Le(O.pauldronColor||me(w.armor,"#c8ccd4",.25),.4),ge=kt?An(kt.r):ae.acc,Be=F*-50,Qe=ie(oe,[0,0,0]);if(Qe.scale.setScalar(Se),qs==="leather")N(Qe,"sphere",[F*.02,0,0],[.2,.12,.2],Le("#5a4232"),[0,0,Be]);else if(qs==="shell"){N(Qe,"dome",[F*.02,-.01,0],[.24,.16,.22],Ee,[0,0,Be]);for(let ve=-1;ve<=1;ve++)N(Qe,"box",[F*.06,.03,ve*.05],[.02,.1,.02],ge,[ve*20,0,Be])}else if(qs==="ice"){N(Qe,"dome",[F*.01,-.01,0],[.2,.12,.2],Ee,[0,0,Be]);for(let ve=-1;ve<=1;ve++)N(Qe,"octa",[F*(.06+Math.abs(ve)*.01),.07-Math.abs(ve)*.02,ve*.05],[.04,.16-Math.abs(ve)*.04,.04],ae.accG,[ve*15,0,F*-25])}else if(qs==="spike"){N(Qe,"dome",[F*.02,-.01,0],[.24,.17,.24],Ee,[0,0,Be]);for(let ve=-1;ve<=1;ve++)N(Qe,"cone",[F*.08,.06,ve*.06],[.04,.14,.04],ge,[ve*15,0,F*-45])}else{N(Qe,"dome",[F*.02,-.01,0],[.26,.17,.25],Ee,[0,0,Be]),N(Qe,"ring",[F*0,-.035,0],[.13,.13,.4],ge,[90,0,Be]);for(let ve=1;ve<=2;ve++)N(Qe,"dome",[F*(.03+ve*.012),-.035-ve*.03,0],[.24-ve*.025,.1,.23-ve*.025],Ee,[0,0,Be-F*8*ve]);for(let ve=-1;ve<=1;ve++)N(Qe,"sphere",[F*.075,.035,ve*.06],[.018,.018,.018],ge);kt&&kt.r>=3&&N(Qe,"dome",[F*.05,-.07,0],[.22,.12,.22],Ee,[0,0,F*-65]),kt&&kt.r>=4&&N(Qe,"ring",[F*.035,-.075,0],[.12,.12,.35],ge,[90,0,F*-65])}kt&&kt.r>=3&&qs!=="leather"&&N(Qe,"octa",[F*.1,.02,0],[.035,.045,.035],Lt(L[kt.s]||w.accent)),O.aura&&(N(oe,"sphere",[F*.05,.06,0],[.11,.11,.11],ae.glowC),Zt(oe,Ce,"sphere",[F*.05,.06,0],.2,ae.glowH,Ct))},kt?`${kt.r}${kt.s?kt.s[0]:""}`:"");else if(O.aura)for(let[F,ue]of[[1,"UpperArmL"],[-1,"UpperArmR"]])Te[ue]&&an("A"+F,D(Te[ue],W,[F*.03,.04,0]),(oe,Ce)=>{N(oe,"sphere",[0,0,0],[.15,.15,.15],ae.glowC),Zt(oe,Ce,"sphere",[0,0,0],.3,ae.glowH,Ct)});if(kt&&kt.r>=2&&Te.Chest&&an("gC",D(Te.Chest,W,[0,0,0]),(F,ue)=>{let oe=Le(on(kt.r),.55),Ce=An(kt.r),Se=Lt(L[kt.s]||w.accent),Ee=C==="hooded"?.035:.045,ge=.3+kt.r*.012;N(F,"rod",[0,.13,0],[.24,.05,.2],oe),N(F,"rod",[0,.13,0],[.25,.012,.21],Ce);let Be=.92+kt.r*.03;if(N(F,"breast",[0,0,Ee+.075],[Be,Be,1],oe,[-6,0,0]),N(F,"box",[0,0,Ee+.1],[.022,.24,.02],Ce,[-6,0,0]),kt.r>=3&&N(F,"octa",[0,.03,Ee+.115],[.045+kt.r*.004,.06+kt.r*.005,.025],Se),kt.r>=4&&N(F,"box",[0,-.13,Ee+.085],[.24,.025,.03],Ce,[-6,0,0]),kt.r>=5)for(let Qe of[-1,1])N(F,"box",[Qe*.1,.08,Ee+.1],[.07,.02,.02],Ce,[-6,0,Qe*-25])},J(kt)),Te.Chest&&(O.mantle||O.collar||O.scarf)&&an("Mn",D(Te.Chest,W,[0,0,0]),(F,ue)=>{if(O.mantle==="fur"||O.mantle==="moss"){let oe=Le(O.mantle==="fur"?O.furColor||"#e8e4dc":w.accent),Ce=Le(De(O.mantle==="fur"?O.furColor||"#e8e4dc":w.accent,.75));for(let Se=0;Se<9;Se++){let Ee=Se/8*Math.PI*1.25-Math.PI*.625;N(F,"sphere",[Math.sin(Ee)*.2,.14-Math.abs(Math.sin(Ee))*.03,-Math.cos(Ee)*.1-.02],[.16,.12,.14],Se%2?oe:Ce)}if(N(F,"sphere",[0,.06,-.15],[.36,.2,.14],Ce),O.mantle==="moss")for(let Se=0;Se<5;Se++)N(F,"cone",[-.16+Se*.08,.2,-.12],[.02,.16,.02],Le("#8a9a50"),[-20+Se*5,0,(Se-2)*12])}else if(O.mantle==="ember")for(let oe=0;oe<5;oe++)for(let Ce of[-1,1])Zt(F,ue,"cone",[Ce*(.12+oe*.03),.17-oe*.015,-.06-oe*.02],[.06,.2-oe*.02,.06],oe%2?ae.glowC:ae.accG,ln,[-25,0,Ce*(-20-oe*8)]);if(O.collar==="spike")for(let oe=0;oe<7;oe++){let Ce=(oe-3)*.32;N(F,"cone",[Math.sin(Ce)*.17,.27+Math.cos(Ce*1.4)*.05,-.1-Math.cos(Ce)*.03],[.05,.26-Math.abs(oe-3)*.03,.03],oe%2?Le("#1a1020",.4):ae.acc,[-15,0,-Ce*40])}if(O.scarf){let oe=bt(O.scarf);N(F,"rod",[0,.16,0],[.22,.07,.2],oe);let Ce=ws(F,ue,[.06,.15,-.1],(Se,Ee)=>{Se.rotation.x=.6+Math.sin(Ee*3.4+Se.id)*.2,Se.rotation.y=Math.sin(Ee*1.9)*.25},1.6);N(Ce,"box",[0,-.18,0],[.07,.36,.012],oe,[0,0,6]),N(Ce,"box",[-.06,-.14,0],[.06,.28,.012],oe,[0,0,-8])}}),Te.Chest&&(O.cape||w.prop==="bow"||O.back)){let F=D(Te.Chest,W,[0,0,0]);an("B",F,(ue,oe)=>{let Ce=C==="hooded"?-.15:-.14;if(O.cape){let Se=bt(O.capeColor||De(w.armor,.55)),Ee=bt(w.accent),ge=O.capeLen||1;for(let ve of[-1,1])N(ue,"sphere",[ve*.12,.14,Ce+.04],[.05,.05,.03],ae.gold);let Be=ws(ue,oe,[0,.14,Ce],(ve,ct)=>{ve.rotation.x=.1+Math.sin(ct*1.3+ve.id)*.035;let pn=ve.children[ve.children.length-1],yn=ve.userData.sp;pn.rotation.x=.06+Math.sin(ct*1.9+.8+ve.id)*.1+(yn?yn.ax*.7:0),pn.rotation.z=Math.sin(ct*1.1+ve.id)*.05+(yn?yn.az*.5:0)},1);N(Be,Ve(.24,.42,.52,.09),[0,0,-.01],[1,1,1],Se),N(Be,Ve(.22,.39,.5,.085),[0,-.01,-.002],[1,1,1],bt(me(w.accent,"#000000",.35)));let Qe=ie(Be,[0,-.47,-.01]);N(Qe,Ve(.4,.56,.06+.5*ge,.11),[0,.06,0],[1,1,1],Se),N(Qe,Ve(.56,.57,.045,.11,10,1),[0,-.5*ge+.02,.003],[1.01,1,1.01],Ee)}if(w.prop==="bow"){N(ue,"rod",[.06,-.05,-.2],[.12,.46,.12],ae.leather,[0,0,-25]);for(let Se=0;Se<3;Se++)N(ue,"cone",[.15+Se*.03,.2+Se*.01,-.2+(Se-1)*.03],[.04,.08,.015],ae.acc,[0,0,-25])}if(O.back==="shovel")N(ue,"rod",[0,0,Ce-.04],[.04,1,.04],ae.wood,[0,0,35]),N(ue,"box",[.3,-.42,Ce-.04],[.2,.26,.02],ae.iron,[0,0,35]),N(ue,"box",[-.28,.4,Ce-.04],[.14,.04,.04],ae.wood,[0,0,35]);else if(O.back==="wings"){let Se=Oi("bone",rt("#fbf6ea")),Ee=Ci(me(w.accent,"#ffffff",.3));for(let ge of[-1,1]){let Be=ws(ue,oe,[ge*.07,.12,Ce-.03],(Qe,ve)=>{Qe.rotation.y=ge*(.55+Math.sin(ve*1.4)*.1),Qe.rotation.z=ge*Math.sin(ve*1.4)*.05});for(let Qe=0;Qe<4;Qe++)N(Be,"sphere",[ge*(.06+Qe*.07),.2+Qe*.03,-.04],[.13,.1,.035],Se,[0,0,ge*-20]);for(let Qe=0;Qe<7;Qe++){let ve=(10+Qe*13)*vt,ct=.48-Math.abs(Qe-3)*.04,pn=Math.cos(ve)*ct/2,yn=-Math.sin(ve)*ct/2;N(Be,"sphere",[ge*(.24+pn),.28+yn,-.05-Qe*.004],[.12,ct,.025],Qe<2?Ee:Se,[0,0,ge*(90-(10+Qe*13))])}}}else if(O.back==="sunburst"){let Se=ie(ue,[0,.3,Ce-.08]);N(Se,"ring",[0,0,0],[.46,.46,.5],ae.gold);for(let Ee=0;Ee<12;Ee++){let ge=Ee*30*vt;N(Se,"cone",[Math.cos(ge)*.3,Math.sin(ge)*.3,0],[.05,Ee%2?.14:.22,.02],ae.gold,[0,0,Ee*30-90])}Zt(ue,oe,"sphere",[0,.3,Ce-.1],[.5,.5,.1],ae.glowH,Ct)}})}O.shards&&Te.Hips&&an("Sh",D(Te.Hips,W,[0,.35,0]),(F,ue)=>{let oe=ws(F,ue,[0,0,0],(Ce,Se)=>{Ce.rotation.y=Se*.9,Ce.position.y=Math.sin(Se*1.3)*.04});for(let Ce=0;Ce<5;Ce++){let Se=Ce*72*vt;N(oe,"octa",[Math.cos(Se)*.45,Math.sin(Ce*2.1)*.12,Math.sin(Se)*.45],[.06,.13,.02],Ce%2?ae.accG:Le("#cfe4ff",.6),[0,-Ce*72+90,20])}});let Gn=re&&re.boots;if(Gn){let F=O.robe==="long";for(let[ue,oe,Ce]of[[1,"LowerLegL","FootL"],[-1,"LowerLegR","FootR"]]){let Se=Le(on(Gn.r),Gn.r===1?0:.55),Ee=An(Gn.r),ge=Lt(L[Gn.s]||w.accent);!F&&Te[oe]&&an("gL"+ue,D(Te[oe],W,[0,0,0]),(Be,Qe)=>{if(Gn.r===1){N(Be,"rod",[0,-.24,0],[.125,.22,.125],Le("#5a4232")),N(Be,"rod",[0,-.16,0],[.13,.02,.13],Le("#3a2a20"));return}N(Be,"taper",[0,-.21,.005],[.13,.3,.13],Se),N(Be,"rod",[0,-.355,.005],[.115,.025,.115],Ee),N(Be,"box",[0,-.2,.06],[.03,.26,.02],Ee),Gn.r>=3&&N(Be,"sphere",[0,-.03,.035],[.11,.1,.09],Se),Gn.r>=4&&N(Be,"cone",[ue*.065,-.04,0],[.03,.12+(Gn.r-4)*.06,.03],Ee,[0,0,ue*-70]),Gn.r>=5&&(N(Be,"octa",[0,-.03,.085],[.035,.045,.02],ge),Zt(Be,Qe,"sphere",[0,-.03,.08],.1,Lt(L[Gn.s]||w.accent,.35),Ct))},J(Gn)),Te[Ce]&&an("gF"+ue,D(Te[Ce],W,[0,0,0]),Be=>{if(Gn.r===1){N(Be,"rod",[0,.06,-.01],[.12,.05,.14],Le("#5a4232"));return}N(Be,"dome",[0,.02,.06],[.12,.08,.14],Se),N(Be,"rod",[0,.08,-.01],[.13,.035,.14],Ee),F&&Gn.r>=3&&N(Be,"octa",[0,.06,.12],[.03,.04,.02],ge)},J(Gn)+(F?"r":""))}}}let $e=new Map;function _t(T,w,C,W=3.2){let U=`${w}|${W}`;$e.has(U)||$e.set(U,{uCrack:{value:new Ie(w).multiplyScalar(.75)},uPulse:{value:1},uScale:{value:W}});let q=$e.get(U);return T.userData.crack=U,T.onBeforeCompile=H=>{Object.assign(H.uniforms,q),H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
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
  totalEmissiveRadiance += uCrack * (line + heat) * uPulse; diffuseColor.rgb *= 1.0 - line * 0.9; }`)},T.customProgramCacheKey=()=>"sb-crack",C.push(H=>{q.uPulse.value=.75+Math.sin(H*1.6)*.25}),T}let Ut={x:.24,y:.27,z:.46};function Ht(T,w,C){let W=ELEMENTS[w]?ELEMENTS[w].color:"#e8553a";T.traverse(we=>{if(!we.isMesh)return;let fe=Array.isArray(we.material)?we.material:[we.material];for(let Te of fe)(Te.name==="Yeti_Main"||Te.name==="Yeti_Secondary")&&_t(Te,W,C)});let U={};T.traverse(we=>{we.isBone&&(U[we.name]=we)}),T.updateMatrixWorld(!0);let q=le("#1e1a17"),H=le("#110f0d"),re=te(W),O=te(W,.3),he=`titan|${w}`,Pe=(we,fe)=>{let Te=he+we;if(!At.has(Te)){let rt=new Yt;fe(rt),At.set(Te,{baked:$(rt),live:[]})}return li(At.get(Te).baked)};U.Head&&Pt(U.Head,T,[0,0,0],null).add(Pe("H",fe=>{for(let Te of[-1,1])se("cone",fe,[Te*.34,.5,-.02],[.22,.5,.22],q,[0,0,Te*-42]),se("cone",fe,[Te*.56,.8,.08],[.14,.4,.14],H,[-30,0,Te*-14]),se("box",fe,[Te*(Ut.x-.02),Ut.y+.12,Ut.z-.02],[.32,.08,.16],H,[15,0,Te*-24]);for(let Te of[-1,1])se("octa",fe,[Te*.22,.17,.55],[.2,.09,.12],q,[10,0,Te*38]),se("cone",fe,[Te*.13,.05,.58],[.06,.16,.06],le("#5a4e44"),[-12,0,Te*-12]);se("box",fe,[0,-.03,.53],[.42,.06,.12],H,[-8,0,0]),se("octa",fe,[0,.62,.12],[.3,.6,.26],H,[-15,0,0]),se("octa",fe,[.13,.56,-.06],[.22,.44,.2],q,[-35,0,-22]),se("octa",fe,[-.13,.56,-.06],[.22,.44,.2],q,[-35,0,22]),se("octa",fe,[0,.44,-.3],[.2,.4,.18],H,[-60,0,0])})),U.Torso&&Pt(U.Torso,T,[0,0,0],null).add(Pe("T",we=>{[[0,.45,-.38,.5],[.22,.32,-.35,.36],[-.22,.32,-.35,.36],[0,.15,-.44,.34]].forEach(([fe,Te,rt,wt],Le)=>{se("octa",we,[fe,Te,rt],[.16,wt,.14],Le%2?H:q,[-50,0,fe*-60])}),se("sphere",we,[0,.3,-.33],[.1,.1,.1],re)}));for(let we of["UpperArmL","UpperArmR"])U[we]&&Pt(U[we],T,[0,0,0],null).add(Pe(we,fe=>{se("octa",fe,[0,.12,0],[.24,.38,.22],q,[0,0,20]),se("octa",fe,[.06,.02,.12],[.14,.26,.14],H,[30,0,-10]),se("sphere",fe,[0,.12,0],[.4,.4,.4],O)}))}function Mt(T,w){let C=LOOKS[T]||LOOKS.brannoc,W=Le=>w?me(Le,"#2e1f33",.55):Le,U=le(W(SKIN[C.skin])),q=le(W(C.hair)),H=le(W(C.armor)),re=le(W(De(C.armor,.7))),O=le(W(C.accent)),he=le(W("#b8c0cc"),.6),Pe=le("#2a1f1a"),we=w||C.glow?te(w?"#ff2a2a":C.glow):le("#1a141f"),fe=new Yt;se("capsule",fe,[-.15,.35,0],[.2,.16,.2],re),se("capsule",fe,[.15,.35,0],[.2,.16,.2],re),se("box",fe,[-.15,.07,.04],[.2,.14,.3],Pe),se("box",fe,[.15,.07,.04],[.2,.14,.3],Pe),se("capsule",fe,[0,.95,0],[.62,.21,.42],H),se("cyl",fe,[0,.74,0],[.58,.015,.42],O),se("sphere",fe,[-.33,1.22,0],[.26,.2,.26],O),se("sphere",fe,[.33,1.22,0],[.26,.2,.26],O);let Te=ie(fe,[0,1.55,0]);se("sphere",Te,[0,0,0],[.5,.54,.5],U),se("sphere",Te,[-.1,.02,.22],[.08,.06,.04],we),se("sphere",Te,[.1,.02,.22],[.08,.06,.04],we),C.gear==="helm"?se("sphere",Te,[0,.1,-.01],[.55,.46,.55],he):C.style!=="bald"&&se("sphere",Te,[0,.1,-.05],[.54,.44,.52],q);let rt=ie(fe,[-.38,1.18,0]);se("capsule",rt,[0,-.28,0],[.16,.14,.16],re);let wt=ie(fe,[.38,1.18,0]);return se("capsule",wt,[0,-.28,0],[.16,.14,.16],re),{model:fe,armL:rt,armR:wt,height:2}}function He(T){let w=ELEMENTS[T].color,C=le("#6b635c"),W=le("#3d3833"),U=te(w),q=new Yt;se("box",q,[-.5,.6,0],[.6,1.2,.6],W),se("box",q,[.5,.6,0],[.6,1.2,.6],W),se("box",q,[0,2,0],[2,1.8,1.2],C),se("box",q,[0,3.25,.1],[1,.9,.9],C),se("sphere",q,[-.22,3.3,.55],[.2,.12,.06],U),se("sphere",q,[.22,3.3,.55],[.2,.12,.06],U);let H=ie(q,[-1.25,2.7,0]);se("box",H,[0,-.8,0],[.6,1.7,.6],C);let re=ie(q,[1.25,2.7,0]);return se("box",re,[0,-.8,0],[.6,1.7,.6],C),{model:q,armL:H,armR:re,height:4.1}}let zt=Math.PI-.95,mt=T=>(T<=.05?1:-1)*(1.05+.2*Math.min(1,Math.abs(T)/1.8));function Je(T,w,C){let W=C<=1?0:Math.min(T?3.7:4,(T?.95:1)*(C-1)),U=C<=1?0:-W/2+w*(W/(C-1)),q=C>=4&&w%2?.5:0;return T?new k(U,0,2+q):new k(U,0,-3.2-q)}function Rt(T){if(T.gear!==void 0)return T.gear;if(T.side==="A")try{return typeof heroGearLook=="function"&&T.heroUid&&typeof heroByUid=="function"?heroGearLook(heroByUid(T.heroUid)):null}catch{return null}let w=T.level||1;if(w<8)return null;let C=Math.min(5,1+Math.floor(w/12)),W={helm:{r:C,s:""},chest:{r:C,s:""}};return(w>=20||T.boss)&&(W.boots={r:C,s:""},W.weapon={r:C,s:""}),W}let Vt=T=>T?["weapon","helm","chest","boots"].map(w=>T[w]?`${T[w].r}${T[w].s||""}`:"0").join("."):"";function fn(T){if(!T.mixer)return T.height;T.mixer.update(.01),T.model.updateMatrixWorld(!0);let w=null;if(T.model.traverse(H=>{!w&&H.isBone&&H.name==="Head"&&(w=H)}),!w)return T.height;let C=new k;w.getWorldPosition(C);let W=C.y+.35,U=new ai,q=new k;return T.model.traverse(H=>{if(!(!H.isMesh||!H.userData.kit||!H.geometry)){for(let re=H;re;re=re.parent)if(re===w){H.geometry.boundingBox||H.geometry.computeBoundingBox(),U.copy(H.geometry.boundingBox).applyMatrix4(H.matrixWorld),W=Math.max(W,Math.min(U.max.y,C.y+.9));break}}}),W}function yt(T,w,C){let W=T.side==="A",U=T.titan?1:T.boss?1.3:1,H=(T.titan?_e("titan","titan",!1,T.el):_e(T.template.id,b[T.template.id]||"adventurer",!W,void 0,Rt(T)))||(T.titan?He(T.el):Mt(T.template.id,!W)),re=new Yt;re.add(H.model),H.model.scale.multiplyScalar(U);let O=T.titan?new k(0,0,-3.8):Je(W,w,C);re.position.copy(O);let he=W?mt(O.x):0;re.rotation.y=he;let Pe=new Et(new ga(.62*(T.titan?2:U),32),te(ELEMENTS[T.el].color,.35));Pe.rotation.x=-Math.PI/2,Pe.position.y=.02,re.add(Pe);let we=new Et(new us(.72*(T.titan?2:U),.86*(T.titan?2:U),40),new nn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));we.rotation.x=-Math.PI/2,we.position.y=.03,re.add(we),e.add(re);let fe=T.titan?H.height:fn(H)*U;a.set(T.key,{u:T,root:re,model:H.model,armL:H.armL,armR:H.armR,mixer:H.mixer,actions:H.actions,anim:H.anim,fx:H.fx||[],aura:Pe,ring:we,home:O.clone(),idleRot:he,height:H.height*U,top:fe,phase:Math.random()*10,busy:!1,dead:!1,fidgetAt:6+Math.random()*10})}function Jt(T){for(let[w,C]of a)C.u.side===T&&(e.remove(C.root),a.delete(w))}let Bt=0,Gt=0,dn=0,Yn=0,hi=new k,yi=new k,ti=new k;function Ia(T){if(!r)return;let w=Math.min(.05,(T-s)/1e3);s=T;let C=Bt>0?w*.06:w;Bt=Math.max(0,Bt-w);let W=T/1e3;for(let q of a.values()){if(q.mixer&&q.mixer.update(C*p()),q.dead)continue;for(let re of q.fx)re(W);if(!q.mixer)q.model.position.y=Math.sin(W*2.4+q.phase)*.025,!q.busy&&q.armR&&(q.armR.rotation.x=(Math.sin(W*2.4+q.phase)*5-8)*Math.PI/180,q.armL.rotation.x=(-Math.sin(W*2.4+q.phase)*4-4)*Math.PI/180);else if(q.anim&&!q.busy&&!q.won&&(q.fidgetAt-=w,q.fidgetAt<=0)){q.fidgetAt=8+Math.random()*12;let re=q.anim.S.fidget.filter(q.anim.has);if(re.length&&q.anim.cur&&q.anim.cur.loop===Po){let O=q.anim.play(re[Math.floor(Math.random()*re.length)],{fade:.35});O&&O.getClip().duration>3&&setTimeout(()=>{q.anim.cur===O&&!q.busy&&q.anim.idle(.4)},2200)}}let H=1+Math.sin(W*3+q.phase)*.05;q.aura.scale.set(H,H,H)}if(c=c.filter(q=>(q.k=Math.min(1,q.k+C*p()/q.dur),q.fn(q.k),q.k>=1?(q.done(),!1):!0)),o=o.filter(q=>q.update(C*p())),yi.copy(h),ti.copy($t),dn>0){let q=Bi(dn);ti.lerp(hi,q*.22)}let U=sn*(1-.12*Bi(dn));if(Math.abs(t.fov-U)>.001&&(t.fov=U,t.updateProjectionMatrix()),Gt>0&&(Gt=Math.max(0,Gt-w),yi.lerp(ti,.06*Math.sin(Gt/.25*Math.PI))),u>0){u-=w;let q=f*Math.max(0,u/.22);yi.x+=(Math.random()-.5)*q,yi.y+=(Math.random()-.5)*q}t.position.copy(yi),t.lookAt(ti),tt&&tt.tick(T),je&&je.update(W),Nt?Nt.render(w):r.render(e,t);for(let q of l)q();i=requestAnimationFrame(Ia)}function Un(T,w){return new Promise(C=>c.push({dur:T,fn:w,done:C,k:0}))}let Bi=T=>1-Math.pow(1-T,3),hh=T=>T<.5?2*T*T:1-Math.pow(-2*T+2,2)/2;function uh(T,w){let C=T.actions&&T.actions[w];if(!C)return!1;for(let W of Object.values(T.actions))W!==C&&W.isRunning()&&W.fadeOut(.15);return C.reset().setEffectiveTimeScale(1).fadeIn(.12).play(),!0}let Wo=new k;function Kf(T,w="head"){let C=a.get(T);if(!C||!t||!n)return null;let W=w==="feet"?0:w==="center"?C.height*.55:(C.top||C.height)+.12;return Wo.set(C.root.position.x,C.root.position.y+W,C.root.position.z).project(t),{x:(Wo.x+1)/2*n.clientWidth,y:(1-Wo.y)/2*n.clientHeight}}let zr=T=>{let w=a.get(T);return w?new k(w.root.position.x,w.height*.55,w.root.position.z):null};function Jf(T,w){if(!e)return;let C=new Yt,W=new nn({color:new Ie(w),transparent:!0,opacity:.9,depthWrite:!1,blending:Ii,side:cn}),U=new Et(new us(.75,.82,48),W),q=new Et(new us(.5,.54,6),W);C.add(U,q);for(let H=0;H<6;H++){let re=new Et(new pi(.06,.28),W);re.position.set(Math.cos(H*Math.PI/3)*.64,Math.sin(H*Math.PI/3)*.64,0),re.rotation.z=H*Math.PI/3,C.add(re)}C.rotation.x=-Math.PI/2,C.position.copy(T.root.position).setY(.05),e.add(C),Un(.75,H=>{C.rotation.z=H*2.2,C.scale.setScalar(.6+Bi(Math.min(1,H*2.5))*.6),W.opacity=.9*(H<.6?1:1-(H-.6)/.4)}).then(()=>{e&&e.remove(C),C.traverse(H=>H.geometry&&H.geometry.dispose()),W.dispose()})}async function Zf(T,w,C,W={}){let U=a.get(T);if(!U)return;U.busy=!0;let q=a.get(w),H=q?q.root.position.clone().sub(U.home).setY(0):new k(0,0,U.u.side==="A"?-1:1),re=Math.atan2(H.x,H.z),O=U.root.rotation.y,he=U.anim;if(W.ult&&!m){let we=++Yn;hi.copy(U.root.position).setY(1.2);let fe=dn;Un(.25,Te=>{Yn===we&&(dn=fe+(1-fe)*Te)}).then(()=>Ui(.55)).then(()=>{if(Yn===we)return Un(.35,Te=>{Yn===we&&(dn=1-Te)})})}if(he&&U.u.titan){he.has("Jump")&&he.has("Jump_Land")&&(W.ult||Math.random()<.4)?(he.play("Jump",{fade:.12,speed:1.6,hold:!0}),await Ui(.3),he.play("Jump_Land",{fade:.08,speed:1.4}),await Ui(.12),fh(.35),await Ui(.2)):(he.strike(),await Ui(.5));return}if(he&&C){let we=U.home.clone().add(H.clone().multiplyScalar(Math.max(.35,1-1.15/Math.max(1.2,H.length()))));he.play("Run",{loop:!0,fade:.12,speed:1.4}),await Un(.26,fe=>{U.root.position.lerpVectors(U.home,we,hh(fe)),U.root.rotation.y=O+La(O,re)*Bi(Math.min(1,fe*1.6))}),he.strike(),await Ui(.35);return}if(he){U.root.rotation.y=O+La(O,re),he.play(W.support&&he.has(he.S.support)?he.S.support:he.S.cast,{fade:.12}),Jf(U,ELEMENTS[U.u.el]?ELEMENTS[U.u.el].color:"#ffffff");let we=U.home.clone().add(H.clone().normalize().multiplyScalar(.2));await Un(.2,fe=>{U.root.position.lerpVectors(U.home,we,Bi(fe))}),await Ui(.15);return}let Pe=C?U.home.clone().add(H.clone().multiplyScalar(.55)):U.home.clone().add(H.clone().normalize().multiplyScalar(.25));await Un(C?.22:.2,we=>{U.root.position.lerpVectors(U.home,Pe,Bi(we)),U.armR&&(U.armR.rotation.x=-(C?150:160)*we*Math.PI/180,C||(U.armL.rotation.x=-160*we*Math.PI/180))}),C&&U.armR&&await Un(.1,we=>{U.armR.rotation.x=(-150+190*we)*Math.PI/180})}let La=(T,w)=>{let C=(w-T)%(Math.PI*2);return C>Math.PI&&(C-=Math.PI*2),C<-Math.PI&&(C+=Math.PI*2),C},Ui=T=>Un(T,()=>{});async function Qf(T){let w=a.get(T);if(!w||w.dead)return;let C=w.root.position.clone(),W=w.root.rotation.y,U=w.idleRot!=null?w.idleRot:w.u.side==="A"?zt:0,q=w.armR?w.armR.rotation.x:0,H=w.armL?w.armL.rotation.x:0,re=C.distanceTo(w.home)>.6;if(w.anim&&w.u.titan&&Math.random()<.5){let O=["Yes","No","Wave"].filter(w.anim.has);O.length&&w.anim.play(O[Math.floor(Math.random()*O.length)],{fade:.2,speed:1.3})}else w.anim&&re&&w.anim.play(w.anim.has("Run_Back")?"Run_Back":"Run",{loop:!0,fade:.15,speed:1.5});await Un(.25,O=>{w.root.position.lerpVectors(C,w.home,hh(O)),w.root.rotation.y=W+La(W,U)*Bi(O),w.armR&&!w.mixer&&(w.armR.rotation.x=q*(1-O),w.armL.rotation.x=H*(1-O))}),w.anim&&re&&!w.u.titan&&w.anim.idle(.2),w.busy=!1}function $f(T,w){let C=a.get(T);if(!C||C.dead)return;let W=w&&C.u.maxHp?w.amount/C.u.maxHp:0,U=!!(w&&w.crit),q=U||W>.14,H=C.anim;if(U&&(Bt=Math.max(Bt,m?0:.09),Gt=.25),H&&!C.busy?C.u.titan?H.play(H.has("HitReact")?"HitReact":"Idle",{fade:.1}):!q&&w&&(w.em<1||W<.04)&&Math.random()<.35&&H.has("Roll")?H.play("Roll",{fade:.1,speed:1.5}):H.play(q&&H.has("HitRecieve_2")?"HitRecieve_2":"HitRecieve",{fade:.08}):H||uh(C,"hit"),C.u.titan)return;let re=new k(0,0,(C.u.side==="A"?1:-1)*(q?.34:.2)),O=C.root.position.clone();Un(q?.24:.18,he=>{C.root.position.copy(O).addScaledVector(re,Math.sin(he*Math.PI))})}function ed(T){let w=a.get(T);if(!w||w.dead)return;w.dead=!0;let C=w.root.position.y;(w.anim&&w.anim.has("Death")?(w.anim.play("Death",{fade:.12,clamp:!0}),Promise.resolve()):uh(w,"die")?Promise.resolve():Un(.45,U=>{w.root.rotation.x=-1.4*Bi(U)*(w.u.side==="A"?-1:1)})).then(()=>Ui(1.1)).then(()=>Un(.8,U=>{w.root.position.y=C-.9*U})).then(()=>{w.aura.visible=!1,w.ring.visible=!1}),_s(zr(T),"#8a8a96",26,1.6,.6,-.3)}function td(T="A"){let w=0;for(let C of a.values()){if(C.u.side!==T||C.dead||!C.anim)continue;C.won=!0,C.busy=!0;let W=C.root.rotation.y,U=.1+w++*.12;Ui(U).then(()=>{Un(.35,q=>{C.root.rotation.y=W+La(W,-.25+C.home.x*.08)*Bi(q)}),C.anim.play(C.anim.S.win,{loop:!0,fade:.25})})}}function nd(T,w){let C=a.get(T);C&&(w?(C.ring.material.color.set(w),C.ring.material.opacity=.85):C.ring.material.opacity=0)}function _s(T,w,C,W,U,q){if(!T||!e)return;m&&(C=Math.ceil(C/3));let H=new It,re=new Float32Array(C*3),O=[];for(let fe=0;fe<C;fe++)re[fe*3]=T.x,re[fe*3+1]=T.y,re[fe*3+2]=T.z,O.push(new k(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(W*(.4+Math.random()*.6)));H.setAttribute("position",new Tt(re,3));let he=new zs({color:new Ie(w),size:U,map:it(),transparent:!0,depthWrite:!1,blending:Ii,sizeAttenuation:!0}),Pe=new hs(H,he);e.add(Pe);let we=0;o.push({update(fe){we+=fe;let Te=H.attributes.position.array;for(let rt=0;rt<C;rt++)O[rt].y-=q*fe*6,Te[rt*3]+=O[rt].x*fe,Te[rt*3+1]+=O[rt].y*fe,Te[rt*3+2]+=O[rt].z*fe;return H.attributes.position.needsUpdate=!0,he.opacity=Math.max(0,1-we/.7),we>.7?(e&&e.remove(Pe),H.dispose(),he.dispose(),!1):!0}})}function id(T,w,C){let W=zr(T);_s(W,w,C?44:22,C?5:3.2,C?.45:.32,.6),_s(W,"#ffffff",C?10:5,1.4,C?1.1:.7,0)}function sd(T){let w=a.get(T);w&&_s(w.root.position.clone().setY(.3),"#7dff8a",18,1,.3,-.6)}function rd(T,w){let C=a.get(T);C&&_s(C.root.position.clone().setY(.4),w?"#ffd86a":"#c07aff",10,.9,.28,-.5)}function ad(T,w){let C=a.get(T);C&&_s(C.root.position.clone().setY(.1),w,26,1.4,.35,-.7)}function od(T,w,C,W=.3){let U=zr(T),q=zr(w);if(!U||!q||!e)return Promise.resolve();let H=new Et(de().sphere,te(me(C,"#ffffff",.4)));H.scale.setScalar(.3),e.add(H);let re=0;return Un(W,O=>{H.position.lerpVectors(U,q,O),H.position.y+=Math.sin(O*Math.PI)*.9,++re%2===0&&_s(H.position.clone(),C,3,.3,.35,0)}).then(()=>{e&&e.remove(H)})}function cd(T,w){let C=zr(T);if(!C||!e)return;let W=new Et(new us(.55,.75,32,1,-.9,2.2),new nn({color:new Ie(w),transparent:!0,side:cn,blending:Ii,depthWrite:!1}));W.position.copy(C),W.quaternion.copy(t.quaternion),W.rotateZ(Math.random()*.8-.4),e.add(W),Un(.22,U=>{W.material.opacity=1-U,W.scale.setScalar(.8+U*.5)}).then(()=>{e&&e.remove(W),W.geometry.dispose(),W.material.dispose()})}function fh(T=.25){m||(u=.22,f=T)}function ld(T){l.push(T)}let dh=256,ph=window.SB_VERSION&&window.SB_VERSION.version||"dev",mh="sigilbound.faces.v1",Ms=new Map;try{let T=JSON.parse(localStorage.getItem(mh)||"null");if(T&&T.ver===ph)for(let[w,C]of Object.entries(T.faces||{}))Ms.set(w,C)}catch{}let qo=[],jo=!1,Ln=null,gh=[],bh=0,Xo=(T,w,C)=>T==="titan"?`titan|${w}`:`${T}|${C?1:0}`;function hd(){clearTimeout(bh),bh=setTimeout(()=>{try{localStorage.setItem(mh,JSON.stringify({ver:ph,faces:Object.fromEntries(Ms)}))}catch{}},400)}function ud(T,w,C){let W=T==="titan"?"titan":b[T]||"adventurer",U=_e(T,W,C,w);if(!U)return null;Ln||(Ln=new wa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(1),Ln.setSize(dh,dh,!1),Ln.outputEncoding=xt,Ln.toneMapping=_a,Ln.toneMappingExposure=ei.exposure,Ln.setClearColor(0,0));let q=new cs;q.environment=zo(Ln),q.add(new Cr(16774374,3813440,1.3));let H=new Zn(16773597,2.2);H.position.set(-2,3,4),q.add(H);let re=new Zn(16777215,.6);re.position.set(3,1,3),q.add(re);let O=new Zn(w&&ELEMENTS[w]?new Ie(ELEMENTS[w].color):10070783,1.4);O.position.set(2,3,-4),q.add(O);let he=U.model;he.rotation.y=-.35,q.add(he),U.mixer&&U.mixer.update(.6);for(let bt of U.fx||[])bt(.6);he.updateMatrixWorld(!0);let Pe=null;he.traverse(bt=>{!Pe&&bt.isBone&&bt.name==="Head"&&(Pe=bt)});let we=new k;Pe?Pe.getWorldPosition(we):we.set(0,U.height*.8,0);let fe=W==="titan",Te=fe?2.9:.74;we.y+=.15;let rt=new mn(28,1,.05,50),wt=Te/2/Math.tan(14*vt);rt.position.set(we.x,we.y+Te*.08,we.z+wt),rt.lookAt(we.x,we.y-Te*.04,we.z),Ln.render(q,rt);let Le=null;try{Le=Ln.domElement.toDataURL("image/webp",.86),Le.startsWith("data:image/webp")||(Le=Ln.domElement.toDataURL("image/png"))}catch{Le=null}return q.traverse(bt=>{bt.isMesh&&(Array.isArray(bt.material)?bt.material:[bt.material]).forEach(Ei=>!Ei.userData.shared&&Ei.dispose&&Ei.dispose())}),Le}function fd(){jo||(jo=!0,ne().then(()=>{let T=()=>{let w=qo.shift();if(!w){jo=!1,Ln&&(Bo(Ln),Ln.dispose(),Ln.forceContextLoss(),Ln=null),hd(),gh.forEach(W=>{try{W()}catch{}});return}let C=Xo(w.id,w.el,w.hollow);if(!Ms.has(C))try{let W=ud(w.id,w.el,w.hollow);Ms.set(C,W)}catch(W){console.warn("Sigilbound: face failed",w.id,W),Ms.set(C,null)}setTimeout(T,0)};T()}))}function dd(T,w,C=!1){if(!_())return null;let W=Xo(T,w,C);return Ms.has(W)?Ms.get(W):(qo.some(U=>Xo(U.id,U.el,U.hollow)===W)||qo.push({id:T,el:w,hollow:C}),fd(),null)}let pd=T=>gh.push(T),Fe={renderer:null,scene:null,camera:null,built:null,key:"",raf:0,last:0,yaw:-.35,spin:0,host:null};function xh(T){if(Fe.raf=0,!Fe.renderer||!Fe.renderer.domElement.isConnected)return;let w=Math.min(.05,(T-Fe.last)/1e3);if(Fe.last=T,Fe.built){Fe.built.mixer&&Fe.built.mixer.update(w);for(let C of Fe.built.fx||[])C(T/1e3);Fe.drag||(Fe.yaw+=Fe.spin*w,Fe.spin*=Math.pow(.04,w)),Fe.built.model.rotation.y=Fe.yaw}Fe.renderer.render(Fe.scene,Fe.camera),Fe.raf=requestAnimationFrame(xh)}function Yo(){if(!Fe.renderer||!Fe.host)return;let T=Fe.host.clientWidth||110,w=Fe.host.clientHeight||165;Fe.renderer.setSize(T,w,!1),Fe.camera.aspect=T/w,Fe.camera.updateProjectionMatrix()}function md(){let T=new wa({antialias:!0,alpha:!0});T.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),T.outputEncoding=xt,T.toneMapping=_a,T.toneMappingExposure=ei.exposure,T.setClearColor(0,0),T.domElement.className="show3d",Fe.renderer=T,Fe.scene=new cs,Fe.scene.environment=zo(T),Fe.scene.add(new Cr(16774374,3813440,1.3));let w=new Zn(16773597,2.2);w.position.set(-2,3,4),Fe.scene.add(w);let C=new Zn(16777215,.6);C.position.set(3,1,3),Fe.scene.add(C),Fe.rim=new Zn(10070783,1.4),Fe.rim.position.set(2,3,-4),Fe.scene.add(Fe.rim),Fe.camera=new mn(30,110/165,.1,50);let W=T.domElement,U=0,q=0,H=0,re=0;W.addEventListener("pointerdown",he=>{Fe.drag=!0,U=H=he.clientX,re=performance.now(),q=0,Fe.spin=0,W.setPointerCapture&&W.setPointerCapture(he.pointerId)}),W.addEventListener("pointermove",he=>{if(!Fe.drag)return;let Pe=he.clientX-H,we=performance.now();Fe.yaw+=Pe*.012,q+=Math.abs(Pe),Fe.spin=Pe*.012/Math.max(.008,(we-re)/1e3),H=he.clientX,re=we});let O=()=>{Fe.drag&&(Fe.drag=!1,performance.now()-re>80&&(Fe.spin=0),Fe.spin=Math.max(-8,Math.min(8,Fe.spin)),q<6&&Fe.built&&Fe.built.anim&&Fe.built.anim.strike())};W.addEventListener("pointerup",O),W.addEventListener("pointercancel",O),window.addEventListener("resize",Yo)}function gd(T,w,C,W){if(!T||!_()||!ee)return!1;Fe.renderer||md();let U=`${w}|${C}|${Vt(W)}`;if(Fe.key!==U){Fe.built&&Fe.scene.remove(Fe.built.model);let q=_e(w,b[w]||"adventurer",!1,C,W||null);if(!q)return!1;Fe.built=q,Fe.key=U,Fe.yaw=-.35,Fe.spin=0,Fe.scene.add(q.model),Fe.rim.color.set(ELEMENTS[C]?ELEMENTS[C].color:"#99aaff"),q.mixer&&q.mixer.update(.5),q.model.updateMatrixWorld(!0);let H=new ai().set(new k(-.45,0,-.45),new k(.45,q.height-.2,.45)),re=new ai;q.model.traverse(wt=>{wt.isMesh&&wt.userData.kit&&wt.geometry&&(wt.geometry.boundingBox||wt.geometry.computeBoundingBox(),H.union(re.copy(wt.geometry.boundingBox).applyMatrix4(wt.matrixWorld)))});let O=Math.min(1.3,Math.max(-H.min.x,H.max.x,-H.min.z,H.max.z)),he=Math.min(-.3,Math.max(-.5,H.min.y)),Pe=Math.max(2.65,Math.min(3.3,H.max.y+.05)),we=Math.tan(15*vt),fe=(T.clientWidth||110)/(T.clientHeight||165),Te=Math.max(5.5,Math.max((Pe-he)/2/we,O/(we*fe))*1.04+O*.4);Fe.camera.position.set(0,(he+Pe)/2+.18,Te),Fe.camera.lookAt(0,(he+Pe)/2,0);let rt=ELEMENTS[C]?ELEMENTS[C].color:"#ffffff";Fe.aura?Fe.aura.material=te(rt,.3):(Fe.aura=new Et(new ga(.6,40),te(rt,.3)),Fe.aura.rotation.x=-Math.PI/2,Fe.aura.position.y=.01,Fe.scene.add(Fe.aura))}return Fe.host=T,Fe.renderer.domElement.parentNode!==T&&T.prepend(Fe.renderer.domElement),T.classList.add("has3d"),Yo(),Fe.raf||(Fe.last=performance.now(),Fe.raf=requestAnimationFrame(xh)),!0}function bd(T){Fe.renderer&&(T&&!(Fe.host&&Fe.host.matches&&Fe.host.matches(T))||(cancelAnimationFrame(Fe.raf),Fe.raf=0,window.removeEventListener("resize",Yo),Fe.renderer.domElement.remove(),Bo(Fe.renderer),Fe.renderer.dispose(),Fe.renderer.forceContextLoss(),Object.assign(Fe,{renderer:null,scene:null,camera:null,built:null,key:"",host:null,aura:null})))}return Q(),{supported:_,mount:Ue,unmount:B,addUnit:yt,removeSide:Jt,screen:Kf,attack:Zf,recover:Qf,hit:$f,die:ed,victory:td,setHighlight:nd,setQuality:Nn,get quality(){return tt?tt.current:null},get qualityAuto(){return tt?tt.auto:!0},burst:id,heal:sd,buff:rd,cast:ad,projectile:od,slash:cd,shake:fh,onFrame:ld,whenReady:ne,face:dd,onFaces:pd,showcase:gd,showcaseStop:bd,has:T=>a.has(T),get active(){return!!r},get modelsReady(){return ee}}})();window.W3D=_1;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

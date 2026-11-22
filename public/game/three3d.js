"use strict";(()=>{var il="149";var jf=0,nh=1,Xf=2;var $r=1,ea=2,Cr=3,Xn=0,Rn=1,gn=2;var Gi=0,js=1,Hi=2,ih=3,sh=4,Yf=5,Hs=100,Kf=101,Jf=102,rh=103,ah=104,Zf=200,Qf=201,$f=202,ed=203,Cu=204,Ru=205,td=206,nd=207,id=208,sd=209,rd=210,ad=0,od=1,cd=2,mc=3,ld=4,hd=5,ud=6,fd=7,Pu=0,dd=1,pd=2,Un=0,sl=1,md=2,gd=3,ta=4,bd=5,Lu=300,Ks=301,Js=302,gc=303,bc=304,lo=306,ni=1e3,Bn=1001,Or=1002,tn=1003,Fa=1004;var Pr=1005;var Cn=1006,rl=1007;var Vi=1008;var Pi=1009,xd=1010,vd=1011,Iu=1012,yd=1013,ps=1014,Ui=1015,ii=1016,_d=1017,Md=1018,Xs=1020,wd=1021,In=1023,Sd=1024,Td=1025,ms=1026,Zs=1027,Ad=1028,Ed=1029,Cd=1030,Rd=1031,Pd=1033,Do=33776,ko=33777,Fo=33778,No=33779,oh=35840,ch=35841,lh=35842,hh=35843,Ld=36196,uh=37492,fh=37496,dh=37808,ph=37809,mh=37810,gh=37811,bh=37812,xh=37813,vh=37814,yh=37815,_h=37816,Mh=37817,wh=37818,Sh=37819,Th=37820,Ah=37821,Oo=36492,Id=36283,Eh=36284,Ch=36285,Rh=36286,al=2200,ho=2201,Dd=2202,Qs=2300,bs=2301,zo=2302,Vs=2400,Ws=2401,Na=2402,ol=2500,kd=2501,Du=0,uo=1,na=2,ui=3e3,ot=3001,Fd=3200,Nd=3201,ku=0,Od=1;var li="srgb",xs="srgb-linear";var Bo=7680;var zd=519,xc=35044;var Ph="300 es",vc=1035,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Lr=Math.PI/180,zr=180/Math.PI;function ti(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[a&255]+mn[a>>8&255]+mn[a>>16&255]+mn[a>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function cn(a,e,t){return Math.max(e,Math.min(t,a))}function cl(a,e){return(a%e+e)%e}function Bd(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Ud(a,e,t){return a!==e?(t-a)/(e-a):0}function Ir(a,e,t){return(1-t)*a+t*e}function Gd(a,e,t,n){return Ir(a,e,1-Math.exp(-t*n))}function Hd(a,e=1){return e-Math.abs(cl(a,e*2)-e)}function Vd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Wd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function qd(a,e){return a+Math.floor(Math.random()*(e-a+1))}function jd(a,e){return a+Math.random()*(e-a)}function Xd(a){return a*(.5-Math.random())}function Yd(a){a!==void 0&&(Lh=a);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(a){return a*Lr}function Jd(a){return a*zr}function yc(a){return(a&a-1)===0&&a!==0}function Fu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Oa(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Zd(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),f=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*f,o*l);break;case"YZY":a.set(c*f,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*f,o*h,o*l);break;case"XZX":a.set(o*h,c*g,c*d,o*l);break;case"YXY":a.set(c*d,o*h,c*g,o*l);break;case"ZYZ":a.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Pt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Nu=Object.freeze({__proto__:null,DEG2RAD:Lr,RAD2DEG:zr,ceilPowerOfTwo:Fu,clamp:cn,damp:Gd,degToRad:Kd,denormalize:Ri,euclideanModulo:cl,floorPowerOfTwo:Oa,generateUUID:ti,inverseLerp:Ud,isPowerOfTwo:yc,lerp:Ir,mapLinear:Bd,normalize:Pt,pingpong:Hd,radToDeg:Jd,randFloat:jd,randFloatSpread:Xd,randInt:qd,seededRandom:Yd,setQuaternionFromProperEuler:Zd,smootherstep:Wd,smoothstep:Vd}),Ce=class a{constructor(e=0,t=0){a.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class a{constructor(){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],b=i[6],y=i[1],x=i[4],v=i[7],T=i[2],C=i[5],O=i[8];return s[0]=r*m+o*y+c*T,s[3]=r*p+o*x+c*C,s[6]=r*b+o*v+c*O,s[1]=l*m+h*y+u*T,s[4]=l*p+h*x+u*C,s[7]=l*b+h*v+u*O,s[2]=f*m+d*y+g*T,s[5]=f*p+d*x+g*C,s[8]=f*b+d*v+g*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,f=o*c-h*s,d=l*s-r*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=u*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=f*m,e[4]=(h*t-i*c)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new bn;function Ou(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Br(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function gs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Go={[li]:{[xs]:gs},[xs]:{[li]:ka}},un={legacyMode:!0,get workingColorSpace(){return xs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Go[e]&&Go[e][t]!==void 0){let n=Go[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={r:0,g:0,b:0},Qn={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Ho(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ua(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=un.workingColorSpace){return this.r=e,this.g=t,this.b=n,un.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=un.workingColorSpace){if(e=cl(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ho(r,s,e+1/3),this.g=Ho(r,s,e),this.b=Ho(r,s,e-1/3)}return un.toWorkingColorSpace(this,i),this}setStyle(e,t=li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,un.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,un.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,un.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,un.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=li){let n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return un.fromWorkingColorSpace(ua(this,en),e),cn(en.r*255,0,255)<<16^cn(en.g*255,0,255)<<8^cn(en.b*255,0,255)<<0}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.fromWorkingColorSpace(ua(this,en),t);let n=en.r,i=en.g,s=en.b,r=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=un.workingColorSpace){return un.fromWorkingColorSpace(ua(this,en),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=li){return un.fromWorkingColorSpace(ua(this,en),e),e!==li?`color(${e} ${en.r} ${en.g} ${en.b})`:`rgb(${en.r*255|0},${en.g*255|0},${en.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qn),Qn.h+=e,Qn.s+=t,Qn.l+=n,this.setHSL(Qn.h,Qn.s,Qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(ha);let n=Ir(Qn.h,ha.h,t),i=Ir(Qn.s,ha.s,t),s=Ir(Qn.l,ha.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Le.NAMES=zu;var Cs,za=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Br("canvas")),Cs.width=e.width,Cs.height=e.height;let n=Cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=gs(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gs(t[n]/255)*255):t[n]=gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ba=class{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Vo(i[r].image)):s.push(Vo(i[r]))}else s=Vo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Vo(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?za.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,fn=class a extends Li{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Bn,i=Bn,s=Cn,r=Vi,o=In,c=Pi,l=a.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ti(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Lu;fn.DEFAULT_ANISOTROPY=1;var It=class a{constructor(e=0,t=0,n=0,i=1){a.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],b=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(d+1)/2,T=(b+1)/2,C=(h+f)/4,O=(u+m)/4,w=(g+p)/4;return x>v&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=O/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=w/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=O/s,i=w/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xn=class extends Li{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _c=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[r+0],d=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u!==m||c!==f||l!==d||h!==g){let p=1-o,b=c*f+l*d+h*g+u*m,y=b>=0?1:-1,x=1-b*b;if(x>Number.EPSILON){let T=Math.sqrt(x),C=Math.atan2(T,b*y);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}let v=o*y;if(c=c*p+f*v,l=l*p+d*v,h=h*p+g*v,u=u*p+m*v,p===1-o){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class a{constructor(e=0,t=0,n=0){a.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=c*t+r*i-o*n,h=c*n+o*t-s*i,u=c*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=l*c+f*-s+h*-o-u*-r,this.y=h*c+f*-r+u*-s-l*-o,this.z=u*c+f*-o+l*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new I,Ih=new ln,Gn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],f=e[c+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>r&&(r=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>r&&(r=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)ls.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(ls)}else n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox),qo.applyMatrix4(e.matrixWorld),this.union(qo);let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ls),ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),fa.subVectors(this.max,vr),Rs.subVectors(e.a,vr),Ps.subVectors(e.b,vr),Ls.subVectors(e.c,vr),Fi.subVectors(Ps,Rs),Ni.subVectors(Ls,Ps),hs.subVectors(Rs,Ls);let t=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-hs.z,hs.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,hs.z,0,-hs.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-hs.y,hs.x,0];return!jo(t,Rs,Ps,Ls,fa)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Rs,Ps,Ls,fa))?!1:(da.crossVectors(Fi,Ni),t=[da.x,da.y,da.z],jo(t,Rs,Ps,Ls,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ls.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ls).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new I,new I,new I,new I,new I,new I,new I,new I],ls=new I,qo=new Gn,Rs=new I,Ps=new I,Ls=new I,Fi=new I,Ni=new I,hs=new I,vr=new I,fa=new I,da=new I,us=new I;function jo(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){us.fromArray(a,s);let o=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var $d=new Gn,yr=new I,Xo=new I,Ii=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Xo)),this.expandByPoint(yr.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new I,Yo=new I,pa=new I,Oi=new I,Ko=new I,ma=new I,Jo=new I,Ur=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(t).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yo.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Yo);let s=e.distanceTo(t)*.5,r=-this.direction.dot(pa),o=Oi.dot(this.direction),c=-Oi.dot(pa),l=Oi.lengthSq(),h=Math.abs(1-r*r),u,f,d,g;if(h>0)if(u=r*c-o,f=r*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let m=1/h;u*=m,f*=m,d=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(pa).multiplyScalar(f).add(Yo),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,c=n+r;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,s){Ko.subVectors(t,e),ma.subVectors(n,e),Jo.crossVectors(Ko,ma);let r=this.direction.dot(Jo),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Oi.subVectors(this.origin,e);let c=o*this.direction.dot(ma.crossVectors(Oi,ma));if(c<0)return null;let l=o*this.direction.dot(Ko.cross(Oi));if(l<0||c+l>r)return null;let h=-o*Oi.dot(Jo);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class a{constructor(){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,c,l,h,u,f,d,g,m,p){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=s,b[5]=r,b[9]=o,b[13]=c,b[2]=l,b[6]=h,b[10]=u,b[14]=f,b[3]=d,b[7]=g,b[11]=m,b[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),r=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=r*h,d=r*u,g=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+d*l,t[10]=r*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f+m*o,t[4]=g*o-d,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=r*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,m=l*u;t[0]=f-m*o,t[4]=-r*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=m-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let f=r*h,d=r*u,g=o*h,m=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+m,t[1]=c*u,t[5]=m*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let f=r*c,d=r*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-f*u,t[8]=g*u+d,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-m*u}else if(e.order==="XZY"){let f=r*c,d=r*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+m,t[5]=r*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){let i=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),zi.crossVectors(n,On),zi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),zi.crossVectors(n,On)),zi.normalize(),ga.crossVectors(On,zi),i[0]=zi.x,i[4]=ga.x,i[8]=On.x,i[1]=zi.y,i[5]=ga.y,i[9]=On.y,i[2]=zi.z,i[6]=ga.z,i[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],b=n[14],y=n[3],x=n[7],v=n[11],T=n[15],C=i[0],O=i[4],w=i[8],E=i[12],U=i[1],j=i[5],W=i[9],H=i[13],V=i[2],X=i[6],ce=i[10],se=i[14],Y=i[3],Q=i[7],ge=i[11],Ue=i[15];return s[0]=r*C+o*U+c*V+l*Y,s[4]=r*O+o*j+c*X+l*Q,s[8]=r*w+o*W+c*ce+l*ge,s[12]=r*E+o*H+c*se+l*Ue,s[1]=h*C+u*U+f*V+d*Y,s[5]=h*O+u*j+f*X+d*Q,s[9]=h*w+u*W+f*ce+d*ge,s[13]=h*E+u*H+f*se+d*Ue,s[2]=g*C+m*U+p*V+b*Y,s[6]=g*O+m*j+p*X+b*Q,s[10]=g*w+m*W+p*ce+b*ge,s[14]=g*E+m*H+p*se+b*Ue,s[3]=y*C+x*U+v*V+T*Y,s[7]=y*O+x*j+v*X+T*Q,s[11]=y*w+x*W+v*ce+T*ge,s[15]=y*E+x*H+v*se+T*Ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],b=e[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+m*(+t*c*d-t*l*f+s*r*f-i*r*d+i*l*h-s*c*h)+p*(+t*l*u-t*o*d-s*r*u+n*r*d+s*o*h-n*l*h)+b*(-i*o*h-t*c*u+t*o*f+i*r*u-n*r*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],b=e[15],y=u*p*l-m*f*l+m*c*d-o*p*d-u*c*b+o*f*b,x=g*f*l-h*p*l-g*c*d+r*p*d+h*c*b-r*f*b,v=h*m*l-g*u*l+g*o*d-r*m*d-h*o*b+r*u*b,T=g*u*c-h*m*c-g*o*f+r*m*f+h*o*p-r*u*p,C=t*y+n*x+i*v+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=y*O,e[1]=(m*f*s-u*p*s-m*i*d+n*p*d+u*i*b-n*f*b)*O,e[2]=(o*p*s-m*c*s+m*i*l-n*p*l-o*i*b+n*c*b)*O,e[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*O,e[4]=x*O,e[5]=(h*p*s-g*f*s+g*i*d-t*p*d-h*i*b+t*f*b)*O,e[6]=(g*c*s-r*p*s-g*i*l+t*p*l+r*i*b-t*c*b)*O,e[7]=(r*f*s-h*c*s+h*i*l-t*f*l-r*i*d+t*c*d)*O,e[8]=v*O,e[9]=(g*u*s-h*m*s-g*n*d+t*m*d+h*n*b-t*u*b)*O,e[10]=(r*m*s-g*o*s+g*n*l-t*m*l-r*n*b+t*o*b)*O,e[11]=(h*o*s-r*u*s-h*n*l+t*u*l+r*n*d-t*o*d)*O,e[12]=T*O,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*p+t*u*p)*O,e[14]=(g*o*i-r*m*i-g*n*c+t*m*c+r*n*p-t*o*p)*O,e[15]=(r*u*i-h*o*i+h*n*c-t*u*c-r*n*f+t*o*f)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,f=s*l,d=s*h,g=s*u,m=r*h,p=r*u,b=o*u,y=c*l,x=c*h,v=c*u,T=n.x,C=n.y,O=n.z;return i[0]=(1-(m+b))*T,i[1]=(d+v)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(f+b))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(g+x)*O,i[9]=(p-y)*O,i[10]=(1-(f+m))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Is.set(i[0],i[1],i[2]).length(),r=Is.set(i[4],i[5],i[6]).length(),o=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);let l=1/s,h=1/r,u=1/o;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,t.setFromRotationMatrix($n),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){let o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(r-s),u=(t+e)*c,f=(n+i)*l,d=(r+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new I,$n=new nt,ep=new I(0,0,0),tp=new I(1,1,1),zi=new I,ga=new I,On=new I,Dh=new nt,kh=new ln,Ga=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-cn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ga.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,Fh=new I,Ds=new ln,Si=new nt,ba=new I,_r=new I,ip=new I,sp=new ln,Nh=new I(1,0,0),Oh=new I(0,1,0),zh=new I(0,0,1),rp={type:"added"},Bh={type:"removed"},Vt=class a extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new I,t=new Ga,n=new ln,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new bn}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(_r,ba,this.up):Si.lookAt(ba,_r,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(Si),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Bh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new I,Ti=new I,Zo=new I,Ai=new I,ks=new I,Fs=new I,Uh=new I,Qo=new I,$o=new I,ec=new I,Dr=class a{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),Ti.subVectors(n,t),Zo.subVectors(e,t);let r=ei.dot(ei),o=ei.dot(Ti),c=ei.dot(Zo),l=Ti.dot(Ti),h=Ti.dot(Zo),u=r*l-o*o;if(u===0)return s.set(-2,-1,-1);let f=1/u,d=(l*c-o*h)*f,g=(r*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Ai),c.set(0,0),c.addScaledVector(s,Ai.x),c.addScaledVector(r,Ai.y),c.addScaledVector(o,Ai.z),c}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Ti.subVectors(e,t),ei.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ei.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return a.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;ks.subVectors(i,n),Fs.subVectors(s,n),Qo.subVectors(e,n);let c=ks.dot(Qo),l=Fs.dot(Qo);if(c<=0&&l<=0)return t.copy(n);$o.subVectors(e,i);let h=ks.dot($o),u=Fs.dot($o);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(ks,r);ec.subVectors(e,s);let d=ks.dot(ec),g=Fs.dot(ec);if(g>=0&&d<=g)return t.copy(s);let m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Fs,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Uh.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Uh,o);let b=1/(p+m+f);return r=m*b,o=f*b,t.copy(n).addScaledVector(ks,r).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ap=0,Hn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=js,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qt=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zt=new I,xa=new Ce,kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var vs=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var op=0,jn=new nt,tc=new Vt,Ns=new I,zn=new Gn,Mr=new Gn,on=new I,Tt=class a extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Va:vs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new bn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(zn.min,Mr.min),zn.expandByPoint(on),on.addVectors(zn.max,Mr.max),zn.expandByPoint(on)):(zn.expandByPoint(Mr.min),zn.expandByPoint(Mr.max))}zn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Ns.fromBufferAttribute(e,l),on.add(Ns)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let U=0;U<o;U++)l[U]=new I,h[U]=new I;let u=new I,f=new I,d=new I,g=new Ce,m=new Ce,p=new Ce,b=new I,y=new I;function x(U,j,W){u.fromArray(i,U*3),f.fromArray(i,j*3),d.fromArray(i,W*3),g.fromArray(r,U*2),m.fromArray(r,j*2),p.fromArray(r,W*2),f.sub(u),d.sub(u),m.sub(g),p.sub(g);let H=1/(m.x*p.y-p.x*m.y);isFinite(H)&&(b.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(H),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(H),l[U].add(b),l[j].add(b),l[W].add(b),h[U].add(y),h[j].add(y),h[W].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let U=0,j=v.length;U<j;++U){let W=v[U],H=W.start,V=W.count;for(let X=H,ce=H+V;X<ce;X+=3)x(n[X+0],n[X+1],n[X+2])}let T=new I,C=new I,O=new I,w=new I;function E(U){O.fromArray(s,U*3),w.copy(O);let j=l[U];T.copy(j),T.sub(O.multiplyScalar(O.dot(j))).normalize(),C.crossVectors(w,j);let H=C.dot(h[U])<0?-1:1;c[U*4]=T.x,c[U*4+1]=T.y,c[U*4+2]=T.z,c[U*4+3]=H}for(let U=0,j=v.length;U<j;++U){let W=v[U],H=W.start,V=W.count;for(let X=H,ce=H+V;X<ce;X+=3)E(n[X+0]),E(n[X+1]),E(n[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,s=new I,r=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*h;for(let b=0;b<h;b++)f[g++]=l[d++]}return new kt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new nt,Os=new Ur,nc=new Ii,wr=new I,Sr=new I,Tr=new I,ic=new I,va=new I,ya=new Ce,_a=new Ce,Ma=new Ce,sc=new I,wa=new I,yt=class extends Vt{constructor(e=new Tt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){va.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(ic.fromBufferAttribute(u,e),r?va.addScaledVector(ic,h):va.addScaledVector(ic.sub(t),h))}t.add(va)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),e.ray.intersectsSphere(nc)===!1)||(Gh.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Gh),n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1))return;let r,o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,v=y;x<v;x+=3){let T=o.getX(x),C=o.getX(x+1),O=o.getX(x+2);r=Sa(this,p,e,Os,l,h,T,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let b=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=Sa(this,i,e,Os,l,h,b,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){let m=u[d],p=i[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,v=y;x<v;x+=3){let T=x,C=x+1,O=x+2;r=Sa(this,p,e,Os,l,h,T,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let d=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){let b=m,y=m+1,x=m+2;r=Sa(this,i,e,Os,l,h,b,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function cp(a,e,t,n,i,s,r,o){let c;if(e.side===Rn?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Xn,o),c===null)return null;wa.copy(o),wa.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:a}}function Sa(a,e,t,n,i,s,r,o,c){a.getVertexPosition(r,wr),a.getVertexPosition(o,Sr),a.getVertexPosition(c,Tr);let l=cp(a,e,t,n,wr,Sr,Tr,sc);if(l){i&&(ya.fromBufferAttribute(i,r),_a.fromBufferAttribute(i,o),Ma.fromBufferAttribute(i,c),l.uv=Dr.getUV(sc,wr,Sr,Tr,ya,_a,Ma,new Ce)),s&&(ya.fromBufferAttribute(s,r),_a.fromBufferAttribute(s,o),Ma.fromBufferAttribute(s,c),l.uv2=Dr.getUV(sc,wr,Sr,Tr,ya,_a,Ma,new Ce));let h={a:r,b:o,c,normal:new I,materialIndex:0};Dr.getNormal(wr,Sr,Tr,h.normal),l.face=h}return l}var Di=class a extends Tt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(m,p,b,y,x,v,T,C,O,w,E){let U=v/O,j=T/w,W=v/2,H=T/2,V=C/2,X=O+1,ce=w+1,se=0,Y=0,Q=new I;for(let ge=0;ge<ce;ge++){let Ue=ge*j-H;for(let J=0;J<X;J++){let le=J*U-W;Q[m]=le*y,Q[p]=Ue*x,Q[b]=V,l.push(Q.x,Q.y,Q.z),Q[m]=0,Q[p]=0,Q[b]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(J/O),u.push(1-ge/w),se+=1}}for(let ge=0;ge<w;ge++)for(let Ue=0;Ue<O;Ue++){let J=f+Ue+X*ge,le=f+Ue+X*(ge+1),Te=f+(Ue+1)+X*(ge+1),Ie=f+(Ue+1)+X*ge;c.push(J,le,Ie),c.push(le,Te,Ie),Y+=6}o.addGroup(d,Y,E),d+=Y,f+=se}}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(a){let e={};for(let t=0;t<a.length;t++){let n=$s(a[t]);for(let i in n)e[i]=n[i]}return e}function lp(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Bu(a){return a.getRenderTarget()===null&&a.outputEncoding===ot?li:xs}var lr={clone:$s,merge:En},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wa=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends Wa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Bs=1,Gr=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Jt(zs,Bs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Jt(zs,Bs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let r=new Jt(zs,Bs,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);let o=new Jt(zs,Bs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new Jt(zs,Bs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new Jt(zs,Bs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,r,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Un,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},qa=class extends fn{constructor(e,t,n,i,s,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hr=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Gi});s.uniforms.tEquirect.value=t;let r=new yt(i,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Cn),new Gr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}},rc=new I,fp=new I,dp=new bn,Ci=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=rc.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dp.getNormalMatrix(e),i=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Ii,Ta=new I,Vr=class{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,r=new Ci){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],b=n[13],y=n[14],x=n[15];return t[0].setComponents(o-i,u-c,m-f,x-p).normalize(),t[1].setComponents(o+i,u+c,m+f,x+p).normalize(),t[2].setComponents(o+s,u+l,m+d,x+b).normalize(),t[3].setComponents(o-s,u-l,m-d,x-b).normalize(),t[4].setComponents(o-r,u-h,m-g,x-y).normalize(),t[5].setComponents(o+r,u+h,m+g,x+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ta.x=i.normal.x>0?e.max.x:e.min.x,Ta.y=i.normal.y>0?e.max.y:e.min.y,Ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function pp(a,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=a.createBuffer();a.bindBuffer(h,d),a.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,d=h.updateRange;a.bindBuffer(u,l),d.count===-1?a.bufferSubData(u,0,f):(t?a.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:o,update:c}}var Wi=class a extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],m=[],p=[];for(let b=0;b<h;b++){let y=b*f-r;for(let x=0;x<l;x++){let v=x*u-s;g.push(v,-y,0),m.push(0,0,1),p.push(x/o),p.push(1-b/c)}}for(let b=0;b<c;b++)for(let y=0;y<o;y++){let x=y+l*b,v=y+l*(b+1),T=y+1+l*(b+1),C=y+1+l*b;d.push(x,v,C),d.push(v,T,C)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(p,2))}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p="vec3 transformed = vec3( position );",Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Tp=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kp=`#define PI 3.141592653589793
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
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
#endif`,s0=`#if defined( USE_ENVMAP )
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,h0=`struct PhysicalMaterial {
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
}`,u0=`
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,R0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,om=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,um=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,lt={alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:bp,alphatest_pars_fragment:xp,aomap_fragment:vp,aomap_pars_fragment:yp,begin_vertex:_p,beginnormal_vertex:Mp,bsdfs:wp,iridescence_fragment:Sp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Rp,color_fragment:Pp,color_pars_fragment:Lp,color_pars_vertex:Ip,color_vertex:Dp,common:kp,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Np,displacementmap_pars_vertex:Op,displacementmap_vertex:zp,emissivemap_fragment:Bp,emissivemap_pars_fragment:Up,encodings_fragment:Gp,encodings_pars_fragment:Hp,envmap_fragment:Vp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:qp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:s0,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Qp,lightmap_fragment:$p,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:c0,lights_physical_fragment:l0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:f0,lights_fragment_end:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:b0,map_fragment:x0,map_pars_fragment:v0,map_particle_fragment:y0,map_particle_pars_fragment:_0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:w0,morphcolor_vertex:S0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:E0,normal_fragment_begin:C0,normal_fragment_maps:R0,normal_pars_fragment:P0,normal_pars_vertex:L0,normal_vertex:I0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:O0,output_fragment:z0,packing:B0,premultiplied_alpha_fragment:U0,project_vertex:G0,dithering_fragment:H0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:X0,shadowmap_vertex:Y0,shadowmask_pars_fragment:K0,skinbase_vertex:J0,skinning_pars_vertex:Z0,skinning_vertex:Q0,skinnormal_vertex:$0,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:cm,uv2_pars_fragment:lm,uv2_pars_vertex:hm,uv2_vertex:um,worldpos_vertex:fm,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:bm,cube_frag:xm,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:_m,distanceRGBA_frag:Mm,equirect_vert:wm,equirect_frag:Sm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Em,meshbasic_frag:Cm,meshlambert_vert:Rm,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Im,meshnormal_vert:Dm,meshnormal_frag:km,meshphong_vert:Fm,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:zm,meshtoon_vert:Bm,meshtoon_frag:Um,points_vert:Gm,points_frag:Hm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:qm,sprite_frag:jm},De={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bn},uv2Transform:{value:new bn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bn}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bn}}},hi={basic:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:En([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:En([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:En([De.points,De.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:En([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:En([De.common,De.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:En([De.sprite,De.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new bn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:En([De.common,De.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:En([De.lights,De.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};hi.physical={uniforms:En([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Aa={r:0,b:0,g:0};function Xm(a,e,t,n,i,s,r){let o=new Le(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(p,b){let y=!1,x=b.isScene===!0?b.background:null;x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x));let v=a.xr,T=v.getSession&&v.getSession();T&&T.environmentBlendMode==="additive"&&(x=null),x===null?m(o,c):x&&x.isColor&&(m(x,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===lo)?(h===void 0&&(h=new yt(new Di(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:$s(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,O,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=x.encoding!==ot,(u!==x||f!==x.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new yt(new Wi(2,2),new dn({name:"BackgroundMaterial",uniforms:$s(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=x.encoding!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,b){p.getRGB(Aa,Bu(a)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,b,r)}return{getClearColor:function(){return o},setClearColor:function(p,b=1){o.set(p),c=b,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function Ym(a,e,t,n){let i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function u(V,X,ce,se,Y){let Q=!1;if(r){let ge=m(se,ce,X);l!==ge&&(l=ge,d(l.object)),Q=b(V,se,ce,Y),Q&&y(V,se,ce,Y)}else{let ge=X.wireframe===!0;(l.geometry!==se.id||l.program!==ce.id||l.wireframe!==ge)&&(l.geometry=se.id,l.program=ce.id,l.wireframe=ge,Q=!0)}Y!==null&&t.update(Y,34963),(Q||h)&&(h=!1,w(V,X,ce,se),Y!==null&&a.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function d(V){return n.isWebGL2?a.bindVertexArray(V):s.bindVertexArrayOES(V)}function g(V){return n.isWebGL2?a.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function m(V,X,ce){let se=ce.wireframe===!0,Y=o[V.id];Y===void 0&&(Y={},o[V.id]=Y);let Q=Y[X.id];Q===void 0&&(Q={},Y[X.id]=Q);let ge=Q[se];return ge===void 0&&(ge=p(f()),Q[se]=ge),ge}function p(V){let X=[],ce=[],se=[];for(let Y=0;Y<i;Y++)X[Y]=0,ce[Y]=0,se[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ce,attributeDivisors:se,object:V,attributes:{},index:null}}function b(V,X,ce,se){let Y=l.attributes,Q=X.attributes,ge=0,Ue=ce.getAttributes();for(let J in Ue)if(Ue[J].location>=0){let Te=Y[J],Ie=Q[J];if(Ie===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(Ie=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(Ie=V.instanceColor)),Te===void 0||Te.attribute!==Ie||Ie&&Te.data!==Ie.data)return!0;ge++}return l.attributesNum!==ge||l.index!==se}function y(V,X,ce,se){let Y={},Q=X.attributes,ge=0,Ue=ce.getAttributes();for(let J in Ue)if(Ue[J].location>=0){let Te=Q[J];Te===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor));let Ie={};Ie.attribute=Te,Te&&Te.data&&(Ie.data=Te.data),Y[J]=Ie,ge++}l.attributes=Y,l.attributesNum=ge,l.index=se}function x(){let V=l.newAttributes;for(let X=0,ce=V.length;X<ce;X++)V[X]=0}function v(V){T(V,0)}function T(V,X){let ce=l.newAttributes,se=l.enabledAttributes,Y=l.attributeDivisors;ce[V]=1,se[V]===0&&(a.enableVertexAttribArray(V),se[V]=1),Y[V]!==X&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,X),Y[V]=X)}function C(){let V=l.newAttributes,X=l.enabledAttributes;for(let ce=0,se=X.length;ce<se;ce++)X[ce]!==V[ce]&&(a.disableVertexAttribArray(ce),X[ce]=0)}function O(V,X,ce,se,Y,Q){n.isWebGL2===!0&&(ce===5124||ce===5125)?a.vertexAttribIPointer(V,X,ce,Y,Q):a.vertexAttribPointer(V,X,ce,se,Y,Q)}function w(V,X,ce,se){if(n.isWebGL2===!1&&(V.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Y=se.attributes,Q=ce.getAttributes(),ge=X.defaultAttributeValues;for(let Ue in Q){let J=Q[Ue];if(J.location>=0){let le=Y[Ue];if(le===void 0&&(Ue==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Ue==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),le!==void 0){let Te=le.normalized,Ie=le.itemSize,ae=t.get(le);if(ae===void 0)continue;let tt=ae.buffer,We=ae.type,qe=ae.bytesPerElement;if(le.isInterleavedBufferAttribute){let Be=le.data,St=Be.stride,st=le.offset;if(Be.isInstancedInterleavedBuffer){for(let Je=0;Je<J.locationSize;Je++)T(J.location+Je,Be.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Je=0;Je<J.locationSize;Je++)v(J.location+Je);a.bindBuffer(34962,tt);for(let Je=0;Je<J.locationSize;Je++)O(J.location+Je,Ie/J.locationSize,We,Te,St*qe,(st+Ie/J.locationSize*Je)*qe)}else{if(le.isInstancedBufferAttribute){for(let Be=0;Be<J.locationSize;Be++)T(J.location+Be,le.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<J.locationSize;Be++)v(J.location+Be);a.bindBuffer(34962,tt);for(let Be=0;Be<J.locationSize;Be++)O(J.location+Be,Ie/J.locationSize,We,Te,Ie*qe,Ie/J.locationSize*Be*qe)}}else if(ge!==void 0){let Te=ge[Ue];if(Te!==void 0)switch(Te.length){case 2:a.vertexAttrib2fv(J.location,Te);break;case 3:a.vertexAttrib3fv(J.location,Te);break;case 4:a.vertexAttrib4fv(J.location,Te);break;default:a.vertexAttrib1fv(J.location,Te)}}}}C()}function E(){W();for(let V in o){let X=o[V];for(let ce in X){let se=X[ce];for(let Y in se)g(se[Y].object),delete se[Y];delete X[ce]}delete o[V]}}function U(V){if(o[V.id]===void 0)return;let X=o[V.id];for(let ce in X){let se=X[ce];for(let Y in se)g(se[Y].object),delete se[Y];delete X[ce]}delete o[V.id]}function j(V){for(let X in o){let ce=o[X];if(ce[V.id]===void 0)continue;let se=ce[V.id];for(let Y in se)g(se[Y].object),delete se[Y];delete ce[V.id]}}function W(){H(),h=!0,l!==c&&(l=c,d(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:U,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:v,disableUnusedAttributes:C}}function Km(a,e,t,n){let i=n.isWebGL2,s;function r(l){s=l}function o(l,h){a.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),t.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=c}function Jm(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),b=a.getParameter(36348),y=a.getParameter(36349),x=f>0,v=r||e.has("OES_texture_float"),T=x&&v,C=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:C}}function Zm(a){let e=this,t=null,n=0,i=!1,s=!1,r=new Ci,o=new bn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,b=a.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let y=s?0:n,x=y*4,v=b.clippingState||null;c.value=v,v=h(g,f,x,d);for(let T=0;T!==x;++T)v[T]=t[T];b.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=c.value,g!==!0||p===null){let b=d+m*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<b)&&(p=new Float32Array(b));for(let x=0,v=d;x!==m;++x,v+=4)r.copy(u[x]).applyMatrix4(y,o),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Qm(a){let e=new WeakMap;function t(r,o){return o===gc?r.mapping=Ks:o===bc&&(r.mapping=Js),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let o=r.mapping;if(o===gc||o===bc)if(e.has(r)){let c=e.get(r).texture;return t(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new Hr(c.height/2);return l.fromEquirectangularTexture(a,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){let o=r.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var qi=class extends Wa{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,Hh=[.125,.215,.35,.446,.526,.582],ds=20,ac=new qi,Vh=new Le,oc=null,fs=(1+Math.sqrt(5))/2,Gs=1/fs,Wh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,fs,Gs),new I(0,fs,-Gs),new I(Gs,0,fs),new I(-Gs,0,fs),new I(fs,Gs,0),new I(-fs,Gs,0)],er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oc=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ii,format:In,encoding:ui,depthBuffer:!1},i=qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(s)),this._blurMaterial=eg(s,e,t)}return i}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,i){let o=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Vh),h.toneMapping=Un,h.autoClear=!1;let d=new Qt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new yt(new Di,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Vh),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(o.up.set(0,c[b],0),o.lookAt(l[b],0,0)):y===1?(o.up.set(0,0,c[b]),o.lookAt(0,l[b],0)):(o.up.set(0,c[b],0),o.lookAt(0,0,l[b]));let x=this._cubeSize;Ea(i,y*x,b>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ks||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new yt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ea(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,ac)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Wh[(i-1)%Wh.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ds-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):ds;p>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);let b=[],y=0;for(let O=0;O<ds;++O){let w=O/m,E=Math.exp(-w*w/2);b.push(E),O===0?y+=E:O<p&&(y+=2*E)}for(let O=0;O<b.length;O++)b[O]=b[O]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=b,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[i],T=3*v*(i>x-qs?i-x+qs:0),C=4*(this._cubeSize-v);Ea(t,T,C,3*v,2*v),c.setRenderTarget(t),c.render(u,ac)}};function $m(a){let e=[],t=[],n=[],i=a,s=a-qs+1+Hh.length;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let c=1/o;r>a-qs?c=Hh[r-a+qs-1]:r===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,p=2,b=1,y=new Float32Array(m*g*d),x=new Float32Array(p*g*d),v=new Float32Array(b*g*d);for(let C=0;C<d;C++){let O=C%3*2/3-1,w=C>2?0:-1,E=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];y.set(E,m*g*C),x.set(f,p*g*C);let U=[C,C,C,C,C,C];v.set(U,b*g*C)}let T=new Tt;T.setAttribute("position",new kt(y,m)),T.setAttribute("uv",new kt(x,p)),T.setAttribute("faceIndex",new kt(v,b)),e.push(T),i>qs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qh(a,e,t){let n=new xn(a,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function eg(a,e,t){let n=new Float32Array(ds),i=new I(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function jh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Xh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function tg(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===gc||c===bc,h=c===Ks||c===Js;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new er(a)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new er(a));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ng(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(a,e,t,n){let i={},s=new WeakMap;function r(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],34962);let d=u.morphAttributes;for(let g in d){let m=d[g];for(let p=0,b=m.length;p<b;p++)e.update(m[p],34962)}}function l(u){let f=[],d=u.index,g=u.attributes.position,m=0;if(d!==null){let y=d.array;m=d.version;for(let x=0,v=y.length;x<v;x+=3){let T=y[x+0],C=y[x+1],O=y[x+2];f.push(T,C,C,O,O,T)}}else{let y=g.array;m=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let T=x+0,C=x+1,O=x+2;f.push(T,C,C,O,O,T)}}let p=new(Ou(f)?Va:vs)(f,1);p.version=m;let b=s.get(u);b&&e.remove(b),s.set(u,p)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function sg(a,e,t,n){let i=n.isWebGL2,s;function r(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,d){a.drawElements(s,d,o,f*c),t.update(d,s,1)}function u(f,d,g){if(g===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*c,g),t.update(d,s,g)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function rg(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(a,e){return a[0]-e[0]}function og(a,e){return Math.abs(e[1])-Math.abs(a[1])}function cg(a,e,t){let n={},i=new Float32Array(8),s=new WeakMap,r=new It,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==m){let X=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",X)};p!==void 0&&p.texture.dispose();let x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],E=0;x===!0&&(E=1),v===!0&&(E=2),T===!0&&(E=3);let U=h.attributes.position.count*E,j=1;U>e.maxTextureSize&&(j=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);let W=new Float32Array(U*j*4*m),H=new Ua(W,U,j,m);H.type=Ui,H.needsUpdate=!0;let V=E*4;for(let ce=0;ce<m;ce++){let se=C[ce],Y=O[ce],Q=w[ce],ge=U*j*4*ce;for(let Ue=0;Ue<se.count;Ue++){let J=Ue*V;x===!0&&(r.fromBufferAttribute(se,Ue),W[ge+J+0]=r.x,W[ge+J+1]=r.y,W[ge+J+2]=r.z,W[ge+J+3]=0),v===!0&&(r.fromBufferAttribute(Y,Ue),W[ge+J+4]=r.x,W[ge+J+5]=r.y,W[ge+J+6]=r.z,W[ge+J+7]=0),T===!0&&(r.fromBufferAttribute(Q,Ue),W[ge+J+8]=r.x,W[ge+J+9]=r.y,W[ge+J+10]=r.z,W[ge+J+11]=Q.itemSize===4?r.w:1)}}p={count:m,texture:H,size:new Ce(U,j)},s.set(h,p),h.addEventListener("dispose",X)}let b=0;for(let x=0;x<d.length;x++)b+=d[x];let y=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{let g=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<g;v++){let T=m[v];T[0]=v,T[1]=d[v]}m.sort(og);for(let v=0;v<8;v++)v<g&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ag);let p=h.morphAttributes.position,b=h.morphAttributes.normal,y=0;for(let v=0;v<8;v++){let T=o[v],C=T[0],O=T[1];C!==Number.MAX_SAFE_INTEGER&&O?(p&&h.getAttribute("morphTarget"+v)!==p[C]&&h.setAttribute("morphTarget"+v,p[C]),b&&h.getAttribute("morphNormal"+v)!==b[C]&&h.setAttribute("morphNormal"+v,b[C]),i[v]=O,y+=O):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),b&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let x=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function lg(a,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}var Gu=new fn,Hu=new Ua,Vu=new _c,Wu=new qa,Yh=[],Kh=[],Jh=new Float32Array(16),Zh=new Float32Array(9),Qh=new Float32Array(4);function hr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=Yh[i];if(s===void 0&&(s=new Float32Array(i),Yh[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function nn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function sn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function fo(a,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function hg(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ug(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;a.uniform2fv(this.addr,e),sn(t,e)}}function fg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;a.uniform3fv(this.addr,e),sn(t,e)}}function dg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;a.uniform4fv(this.addr,e),sn(t,e)}}function pg(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Qh.set(n),a.uniformMatrix2fv(this.addr,!1,Qh),sn(t,n)}}function mg(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Zh.set(n),a.uniformMatrix3fv(this.addr,!1,Zh),sn(t,n)}}function gg(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Jh.set(n),a.uniformMatrix4fv(this.addr,!1,Jh),sn(t,n)}}function bg(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function xg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;a.uniform2iv(this.addr,e),sn(t,e)}}function vg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;a.uniform3iv(this.addr,e),sn(t,e)}}function yg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;a.uniform4iv(this.addr,e),sn(t,e)}}function _g(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Mg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;a.uniform2uiv(this.addr,e),sn(t,e)}}function wg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;a.uniform3uiv(this.addr,e),sn(t,e)}}function Sg(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;a.uniform4uiv(this.addr,e),sn(t,e)}}function Tg(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Gu,i)}function Ag(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vu,i)}function Eg(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wu,i)}function Cg(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hu,i)}function Rg(a){switch(a){case 5126:return hg;case 35664:return ug;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return bg;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return _g;case 36294:return Mg;case 36295:return wg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(a,e){a.uniform1fv(this.addr,e)}function Lg(a,e){let t=hr(e,this.size,2);a.uniform2fv(this.addr,t)}function Ig(a,e){let t=hr(e,this.size,3);a.uniform3fv(this.addr,t)}function Dg(a,e){let t=hr(e,this.size,4);a.uniform4fv(this.addr,t)}function kg(a,e){let t=hr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Fg(a,e){let t=hr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ng(a,e){let t=hr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Og(a,e){a.uniform1iv(this.addr,e)}function zg(a,e){a.uniform2iv(this.addr,e)}function Bg(a,e){a.uniform3iv(this.addr,e)}function Ug(a,e){a.uniform4iv(this.addr,e)}function Gg(a,e){a.uniform1uiv(this.addr,e)}function Hg(a,e){a.uniform2uiv(this.addr,e)}function Vg(a,e){a.uniform3uiv(this.addr,e)}function Wg(a,e){a.uniform4uiv(this.addr,e)}function qg(a,e,t){let n=this.cache,i=e.length,s=fo(t,i);nn(n,s)||(a.uniform1iv(this.addr,s),sn(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Gu,s[r])}function jg(a,e,t){let n=this.cache,i=e.length,s=fo(t,i);nn(n,s)||(a.uniform1iv(this.addr,s),sn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Vu,s[r])}function Xg(a,e,t){let n=this.cache,i=e.length,s=fo(t,i);nn(n,s)||(a.uniform1iv(this.addr,s),sn(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Wu,s[r])}function Yg(a,e,t){let n=this.cache,i=e.length,s=fo(t,i);nn(n,s)||(a.uniform1iv(this.addr,s),sn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Hu,s[r])}function Kg(a){switch(a){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return kg;case 35675:return Fg;case 35676:return Ng;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return Ug;case 5125:return Gg;case 36294:return Hg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rg(t.type)}},wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Kg(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function $h(a,e){a.seq.push(e),a.map[e.id]=e}function Jg(a,e,t){let n=a.name,i=n.length;for(cc.lastIndex=0;;){let s=cc.exec(n),r=cc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){$h(t,l===void 0?new Mc(o,a,e):new wc(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Sc(o),$h(t,u)),t=u}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Jg(s,r,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function eu(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var Zg=0;function Qg(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function $g(a){switch(a){case ui:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function tu(a,e,t){let n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Qg(a.getShaderSource(e),r)}else return i}function eb(a,e){let t=$g(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tb(a,e){let t;switch(e){case sl:t="Linear";break;case md:t="Reinhard";break;case gd:t="OptimizedCineon";break;case ta:t="ACESFilmic";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nb(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function ib(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sb(a,e){let t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),r=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Rr(a){return a!==""}function nu(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(a){return a.replace(rb,ab)}function ab(a,e){let t=lt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tc(t)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(a){return a.replace(ob,cb)}function cb(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lb(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===$r?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===ea?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function hb(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ub(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function fb(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case pd:e="ENVMAP_BLENDING_ADD";break}return e}function db(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pb(a,e,t,n){let i=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=lb(t),l=hb(t),h=ub(t),u=fb(t),f=db(t),d=t.isWebGL2?"":nb(t),g=ib(s),m=i.createProgram(),p,b,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Rr).join(`
`),p.length>0&&(p+=`
`),b=[d,g].filter(Rr).join(`
`),b.length>0&&(b+=`
`)):(p=[ru(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),b=[d,ru(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?lt.tonemapping_pars_fragment:"",t.toneMapping!==Un?tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.encodings_pars_fragment,eb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),r=Tc(r),r=nu(r,t),r=iu(r,t),o=Tc(o),o=nu(o,t),o=iu(o,t),r=su(r),o=su(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let x=y+p+r,v=y+b+o,T=eu(i,35633,x),C=eu(i,35632,v);if(i.attachShader(m,T),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){let E=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(T).trim(),j=i.getShaderInfoLog(C).trim(),W=!0,H=!0;if(i.getProgramParameter(m,35714)===!1){W=!1;let V=tu(i,T,"vertex"),X=tu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+V+`
`+X)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(U===""||j==="")&&(H=!1);H&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:U,prefix:p},fragmentShader:{log:j,prefix:b}})}i.deleteShader(T),i.deleteShader(C);let O;this.getUniforms=function(){return O===void 0&&(O=new Ys(i,m)),O};let w;return this.getAttributes=function(){return w===void 0&&(w=sb(i,m)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var mb=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ec(e),t.set(e,n)),n}},Ec=class{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}};function gb(a,e,t,n,i,s,r){let o=new Ha,c=new Ac,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w,E,U,j,W){let H=j.fog,V=W.geometry,X=w.isMeshStandardMaterial?j.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),se=ce&&ce.mapping===lo?ce.image.height:null,Y=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=Q!==void 0?Q.length:0,Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let J,le,Te,Ie;if(Y){let St=hi[Y];J=St.vertexShader,le=St.fragmentShader}else J=w.vertexShader,le=w.fragmentShader,c.update(w),Te=c.getVertexShaderID(w),Ie=c.getFragmentShaderID(w);let ae=a.getRenderTarget(),tt=w.alphaTest>0,We=w.clearcoat>0,qe=w.iridescence>0;return{isWebGL2:h,shaderID:Y,shaderName:w.type,vertexShader:J,fragmentShader:le,defines:w.defines,customVertexShaderID:Te,customFragmentShaderID:Ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ae===null?a.outputEncoding:ae.isXRRenderTarget===!0?ae.texture.encoding:ui,map:!!w.map,matcap:!!w.matcap,envMap:!!ce,envMapMode:ce&&ce.mapping,envMapCubeUVHeight:se,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Od,tangentSpaceNormalMap:w.normalMapType===ku,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===ot,clearcoat:We,clearcoatMap:We&&!!w.clearcoatMap,clearcoatRoughnessMap:We&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:We&&!!w.clearcoatNormalMap,iridescence:qe,iridescenceMap:qe&&!!w.iridescenceMap,iridescenceThicknessMap:qe&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===js,alphaMap:!!w.alphaMap,alphaTest:tt,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!V.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!H,useFog:w.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:Un,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===Rn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){let E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)E.push(U),E.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(b(E,w),y(E,w),E.push(a.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function b(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.combine),w.push(E.vertexUvs),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),w.push(o.mask)}function x(w){let E=g[w.type],U;if(E){let j=hi[E];U=lr.clone(j.uniforms)}else U=w.uniforms;return U}function v(w,E){let U;for(let j=0,W=l.length;j<W;j++){let H=l[j];if(H.cacheKey===E){U=H,++U.usedTimes;break}}return U===void 0&&(U=new pb(a,E,w,s),l.push(U)),U}function T(w){if(--w.usedTimes===0){let E=l.indexOf(w);l[E]=l[l.length-1],l.pop(),w.destroy()}}function C(w){c.remove(w)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:O}}function bb(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xb(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function au(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ou(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,f,d,g,m,p){let b=a[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},a[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=d,b.groupOrder=g,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function o(u,f,d,g,m,p){let b=r(u,f,d,g,m,p);d.transmission>0?n.push(b):d.transparent===!0?i.push(b):t.push(b)}function c(u,f,d,g,m,p){let b=r(u,f,d,g,m,p);d.transmission>0?n.unshift(b):d.transparent===!0?i.unshift(b):t.unshift(b)}function l(u,f){t.length>1&&t.sort(u||xb),n.length>1&&n.sort(f||au),i.length>1&&i.sort(f||au)}function h(){for(let u=e,f=a.length;u<f;u++){let d=a[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function vb(){let a=new WeakMap;function e(n,i){let s=a.get(n),r;return s===void 0?(r=new ou,a.set(n,[r])):i>=s.length?(r=new ou,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function yb(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function _b(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Mb=0;function wb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Sb(a,e){let t=new yb,n=_b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new I);let s=new I,r=new nt,o=new nt;function c(h,u){let f=0,d=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let m=0,p=0,b=0,y=0,x=0,v=0,T=0,C=0,O=0,w=0;h.sort(wb);let E=u!==!0?Math.PI:1;for(let j=0,W=h.length;j<W;j++){let H=h[j],V=H.color,X=H.intensity,ce=H.distance,se=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=V.r*X*E,d+=V.g*X*E,g+=V.b*X*E;else if(H.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(H.sh.coefficients[Y],X);else if(H.isDirectionalLight){let Y=t.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*E),H.castShadow){let Q=H.shadow,ge=n.get(H);ge.shadowBias=Q.bias,ge.shadowNormalBias=Q.normalBias,ge.shadowRadius=Q.radius,ge.shadowMapSize=Q.mapSize,i.directionalShadow[m]=ge,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=H.shadow.matrix,v++}i.directional[m]=Y,m++}else if(H.isSpotLight){let Y=t.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(V).multiplyScalar(X*E),Y.distance=ce,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,i.spot[b]=Y;let Q=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,Q.updateMatrices(H),H.castShadow&&w++),i.spotLightMatrix[b]=Q.matrix,H.castShadow){let ge=n.get(H);ge.shadowBias=Q.bias,ge.shadowNormalBias=Q.normalBias,ge.shadowRadius=Q.radius,ge.shadowMapSize=Q.mapSize,i.spotShadow[b]=ge,i.spotShadowMap[b]=se,C++}b++}else if(H.isRectAreaLight){let Y=t.get(H);Y.color.copy(V).multiplyScalar(X),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=Y,y++}else if(H.isPointLight){let Y=t.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*E),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){let Q=H.shadow,ge=n.get(H);ge.shadowBias=Q.bias,ge.shadowNormalBias=Q.normalBias,ge.shadowRadius=Q.radius,ge.shadowMapSize=Q.mapSize,ge.shadowCameraNear=Q.camera.near,ge.shadowCameraFar=Q.camera.far,i.pointShadow[p]=ge,i.pointShadowMap[p]=se,i.pointShadowMatrix[p]=H.shadow.matrix,T++}i.point[p]=Y,p++}else if(H.isHemisphereLight){let Y=t.get(H);Y.skyColor.copy(H.color).multiplyScalar(X*E),Y.groundColor.copy(H.groundColor).multiplyScalar(X*E),i.hemi[x]=Y,x++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let U=i.hash;(U.directionalLength!==m||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==v||U.numPointShadows!==T||U.numSpotShadows!==C||U.numSpotMaps!==O)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=C+O-w,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=w,U.directionalLength=m,U.pointLength=p,U.spotLength=b,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=v,U.numPointShadows=T,U.numSpotShadows=C,U.numSpotMaps=O,i.version=Mb++)}function l(h,u){let f=0,d=0,g=0,m=0,p=0,b=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let v=h[y];if(v.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(b),f++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(b),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(b),g++}else if(v.isRectAreaLight){let T=i.rectArea[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(b),o.identity(),r.copy(v.matrixWorld),r.premultiply(b),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(b),d++}else if(v.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(b),p++}}}return{setup:c,setupView:l,state:i}}function cu(a,e){let t=new Sb(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function Tb(a,e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),c;return o===void 0?(c=new cu(a,e),t.set(s,[c])):r>=o.length?(c=new cu(a,e),o.push(c)):c=o[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Cc=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rc=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`;function Cb(a,e,t){let n=new Vr,i=new Ce,s=new Ce,r=new It,o=new Cc({depthPacking:Nd}),c=new Rc,l={},h=t.maxTextureSize,u={[Xn]:Rn,[Rn]:Xn,[gn]:gn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Ab,fragmentShader:Eb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new yt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r,this.render=function(v,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let O=a.getRenderTarget(),w=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let j=0,W=v.length;j<W;j++){let H=v[j],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let X=V.getFrameExtents();if(i.multiply(X),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,V.mapSize.y=s.y)),V.map===null){let se=this.type!==Cr?{minFilter:tn,magFilter:tn}:{};V.map=new xn(i.x,i.y,se),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();let ce=V.getViewportCount();for(let se=0;se<ce;se++){let Y=V.getViewport(se);r.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),U.viewport(r),V.updateMatrices(H,se),n=V.getFrustum(),x(T,C,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Cr&&b(V,C),V.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(O,w,E)};function b(v,T){let C=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new xn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(T,null,C,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(T,null,C,d,m,null)}function y(v,T,C,O,w,E){let U=null,j=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(j!==void 0)U=j;else if(U=C.isPointLight===!0?c:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=U.uuid,H=T.uuid,V=l[W];V===void 0&&(V={},l[W]=V);let X=V[H];X===void 0&&(X=U.clone(),V[H]=X),U=X}return U.visible=T.visible,U.wireframe=T.wireframe,E===Cr?U.side=T.shadowSide!==null?T.shadowSide:T.side:U.side=T.shadowSide!==null?T.shadowSide:u[T.side],U.alphaMap=T.alphaMap,U.alphaTest=T.alphaTest,U.map=T.map,U.clipShadows=T.clipShadows,U.clippingPlanes=T.clippingPlanes,U.clipIntersection=T.clipIntersection,U.displacementMap=T.displacementMap,U.displacementScale=T.displacementScale,U.displacementBias=T.displacementBias,U.wireframeLinewidth=T.wireframeLinewidth,U.linewidth=T.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(C.matrixWorld),U.nearDistance=O,U.farDistance=w),U}function x(v,T,C,O,w){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===Cr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);let j=e.update(v),W=v.material;if(Array.isArray(W)){let H=j.groups;for(let V=0,X=H.length;V<X;V++){let ce=H[V],se=W[ce.materialIndex];if(se&&se.visible){let Y=y(v,se,O,C.near,C.far,w);a.renderBufferDirect(C,null,j,Y,v,ce)}}}else if(W.visible){let H=y(v,W,O,C.near,C.far,w);a.renderBufferDirect(C,null,j,H,v,null)}}let U=v.children;for(let j=0,W=U.length;j<W;j++)x(U[j],T,C,O,w)}}function Rb(a,e,t){let n=t.isWebGL2;function i(){let q=!1,ue=new It,we=null,Oe=new It(0,0,0,0);return{setMask:function(He){we!==He&&!q&&(a.colorMask(He,He,He,He),we=He)},setLocked:function(He){q=He},setClear:function(He,Mt,Xt,zt,ri){ri===!0&&(He*=zt,Mt*=zt,Xt*=zt),ue.set(He,Mt,Xt,zt),Oe.equals(ue)===!1&&(a.clearColor(He,Mt,Xt,zt),Oe.copy(ue))},reset:function(){q=!1,we=null,Oe.set(-1,0,0,0)}}}function s(){let q=!1,ue=null,we=null,Oe=null;return{setTest:function(He){He?tt(2929):We(2929)},setMask:function(He){ue!==He&&!q&&(a.depthMask(He),ue=He)},setFunc:function(He){if(we!==He){switch(He){case ad:a.depthFunc(512);break;case od:a.depthFunc(519);break;case cd:a.depthFunc(513);break;case mc:a.depthFunc(515);break;case ld:a.depthFunc(514);break;case hd:a.depthFunc(518);break;case ud:a.depthFunc(516);break;case fd:a.depthFunc(517);break;default:a.depthFunc(515)}we=He}},setLocked:function(He){q=He},setClear:function(He){Oe!==He&&(a.clearDepth(He),Oe=He)},reset:function(){q=!1,ue=null,we=null,Oe=null}}}function r(){let q=!1,ue=null,we=null,Oe=null,He=null,Mt=null,Xt=null,zt=null,ri=null;return{setTest:function(Ct){q||(Ct?tt(2960):We(2960))},setMask:function(Ct){ue!==Ct&&!q&&(a.stencilMask(Ct),ue=Ct)},setFunc:function(Ct,Nn,yn){(we!==Ct||Oe!==Nn||He!==yn)&&(a.stencilFunc(Ct,Nn,yn),we=Ct,Oe=Nn,He=yn)},setOp:function(Ct,Nn,yn){(Mt!==Ct||Xt!==Nn||zt!==yn)&&(a.stencilOp(Ct,Nn,yn),Mt=Ct,Xt=Nn,zt=yn)},setLocked:function(Ct){q=Ct},setClear:function(Ct){ri!==Ct&&(a.clearStencil(Ct),ri=Ct)},reset:function(){q=!1,ue=null,we=null,Oe=null,He=null,Mt=null,Xt=null,zt=null,ri=null}}}let o=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,m=[],p=null,b=!1,y=null,x=null,v=null,T=null,C=null,O=null,w=null,E=!1,U=null,j=null,W=null,H=null,V=null,X=a.getParameter(35661),ce=!1,se=0,Y=a.getParameter(7938);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ce=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ce=se>=2);let Q=null,ge={},Ue=a.getParameter(3088),J=a.getParameter(2978),le=new It().fromArray(Ue),Te=new It().fromArray(J);function Ie(q,ue,we){let Oe=new Uint8Array(4),He=a.createTexture();a.bindTexture(q,He),a.texParameteri(q,10241,9728),a.texParameteri(q,10240,9728);for(let Mt=0;Mt<we;Mt++)a.texImage2D(ue+Mt,0,6408,1,1,0,6408,5121,Oe);return He}let ae={};ae[3553]=Ie(3553,3553,1),ae[34067]=Ie(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),tt(2929),c.setFunc(mc),wt(!1),vn(nh),tt(2884),rn(Gi);function tt(q){f[q]!==!0&&(a.enable(q),f[q]=!0)}function We(q){f[q]!==!1&&(a.disable(q),f[q]=!1)}function qe(q,ue){return d[q]!==ue?(a.bindFramebuffer(q,ue),d[q]=ue,n&&(q===36009&&(d[36160]=ue),q===36160&&(d[36009]=ue)),!0):!1}function Be(q,ue){let we=m,Oe=!1;if(q)if(we=g.get(ue),we===void 0&&(we=[],g.set(ue,we)),q.isWebGLMultipleRenderTargets){let He=q.texture;if(we.length!==He.length||we[0]!==36064){for(let Mt=0,Xt=He.length;Mt<Xt;Mt++)we[Mt]=36064+Mt;we.length=He.length,Oe=!0}}else we[0]!==36064&&(we[0]=36064,Oe=!0);else we[0]!==1029&&(we[0]=1029,Oe=!0);Oe&&(t.isWebGL2?a.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function St(q){return p!==q?(a.useProgram(q),p=q,!0):!1}let st={[Hs]:32774,[Kf]:32778,[Jf]:32779};if(n)st[rh]=32775,st[ah]=32776;else{let q=e.get("EXT_blend_minmax");q!==null&&(st[rh]=q.MIN_EXT,st[ah]=q.MAX_EXT)}let Je={[Zf]:0,[Qf]:1,[$f]:768,[Cu]:770,[rd]:776,[id]:774,[td]:772,[ed]:769,[Ru]:771,[sd]:775,[nd]:773};function rn(q,ue,we,Oe,He,Mt,Xt,zt){if(q===Gi){b===!0&&(We(3042),b=!1);return}if(b===!1&&(tt(3042),b=!0),q!==Yf){if(q!==y||zt!==E){if((x!==Hs||C!==Hs)&&(a.blendEquation(32774),x=Hs,C=Hs),zt)switch(q){case js:a.blendFuncSeparate(1,771,1,771);break;case Hi:a.blendFunc(1,1);break;case ih:a.blendFuncSeparate(0,769,0,1);break;case sh:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case js:a.blendFuncSeparate(770,771,1,771);break;case Hi:a.blendFunc(770,1);break;case ih:a.blendFuncSeparate(0,769,0,1);break;case sh:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,T=null,O=null,w=null,y=q,E=zt}return}He=He||ue,Mt=Mt||we,Xt=Xt||Oe,(ue!==x||He!==C)&&(a.blendEquationSeparate(st[ue],st[He]),x=ue,C=He),(we!==v||Oe!==T||Mt!==O||Xt!==w)&&(a.blendFuncSeparate(Je[we],Je[Oe],Je[Mt],Je[Xt]),v=we,T=Oe,O=Mt,w=Xt),y=q,E=!1}function At(q,ue){q.side===gn?We(2884):tt(2884);let we=q.side===Rn;ue&&(we=!we),wt(we),q.blending===js&&q.transparent===!1?rn(Gi):rn(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),o.setMask(q.colorWrite);let Oe=q.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),gt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?tt(32926):We(32926)}function wt(q){U!==q&&(q?a.frontFace(2304):a.frontFace(2305),U=q)}function vn(q){q!==jf?(tt(2884),q!==j&&(q===nh?a.cullFace(1029):q===Xf?a.cullFace(1028):a.cullFace(1032))):We(2884),j=q}function jt(q){q!==W&&(ce&&a.lineWidth(q),W=q)}function gt(q,ue,we){q?(tt(32823),(H!==ue||V!==we)&&(a.polygonOffset(ue,we),H=ue,V=we)):We(32823)}function Wn(q){q?tt(3089):We(3089)}function Fn(q){q===void 0&&(q=33984+X-1),Q!==q&&(a.activeTexture(q),Q=q)}function k(q,ue,we){we===void 0&&(Q===null?we=33984+X-1:we=Q);let Oe=ge[we];Oe===void 0&&(Oe={type:void 0,texture:void 0},ge[we]=Oe),(Oe.type!==q||Oe.texture!==ue)&&(Q!==we&&(a.activeTexture(we),Q=we),a.bindTexture(q,ue||ae[q]),Oe.type=q,Oe.texture=ue)}function A(){let q=ge[Q];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function fe(){try{a.compressedTexImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{a.compressedTexImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{a.texSubImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{a.texSubImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{a.texStorage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{a.texStorage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ze(){try{a.texImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{a.texImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function je(q){le.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),le.copy(q))}function ze(q){Te.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Te.copy(q))}function ht(q,ue){let we=u.get(ue);we===void 0&&(we=new WeakMap,u.set(ue,we));let Oe=we.get(q);Oe===void 0&&(Oe=a.getUniformBlockIndex(ue,q.name),we.set(q,Oe))}function Et(q,ue){let Oe=u.get(ue).get(q);h.get(ue)!==Oe&&(a.uniformBlockBinding(ue,Oe,q.__bindingPointIndex),h.set(ue,Oe))}function Ft(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},Q=null,ge={},d={},g=new WeakMap,m=[],p=null,b=!1,y=null,x=null,v=null,T=null,C=null,O=null,w=null,E=!1,U=null,j=null,W=null,H=null,V=null,le.set(0,0,a.canvas.width,a.canvas.height),Te.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:tt,disable:We,bindFramebuffer:qe,drawBuffers:Be,useProgram:St,setBlending:rn,setMaterial:At,setFlipSided:wt,setCullFace:vn,setLineWidth:jt,setPolygonOffset:gt,setScissorTest:Wn,activeTexture:Fn,bindTexture:k,unbindTexture:A,compressedTexImage2D:fe,compressedTexImage3D:Ae,texImage2D:Ze,texImage3D:Ge,updateUBOMapping:ht,uniformBlockBinding:Et,texStorage2D:xe,texStorage3D:Ke,texSubImage2D:Re,texSubImage3D:Fe,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Ne,scissor:je,viewport:ze,reset:Ft}}function Pb(a,e,t,n,i,s,r){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,m,p=new WeakMap,b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,A){return b?new OffscreenCanvas(k,A):Br("canvas")}function x(k,A,fe,Ae){let Re=1;if((k.width>Ae||k.height>Ae)&&(Re=Ae/Math.max(k.width,k.height)),Re<1||A===!0)if(typeof HTMLImageElement!="undefined"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&k instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&k instanceof ImageBitmap){let Fe=A?Oa:Math.floor,Qe=Fe(Re*k.width),Ne=Fe(Re*k.height);m===void 0&&(m=y(Qe,Ne));let xe=fe?y(Qe,Ne):m;return xe.width=Qe,xe.height=Ne,xe.getContext("2d").drawImage(k,0,0,Qe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Qe+"x"+Ne+")."),xe}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function v(k){return yc(k.width)&&yc(k.height)}function T(k){return o?!1:k.wrapS!==Bn||k.wrapT!==Bn||k.minFilter!==tn&&k.minFilter!==Cn}function C(k,A){return k.generateMipmaps&&A&&k.minFilter!==tn&&k.minFilter!==Cn}function O(k){a.generateMipmap(k)}function w(k,A,fe,Ae,Re=!1){if(o===!1)return A;if(k!==null){if(a[k]!==void 0)return a[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Fe=A;return A===6403&&(fe===5126&&(Fe=33326),fe===5131&&(Fe=33325),fe===5121&&(Fe=33321)),A===33319&&(fe===5126&&(Fe=33328),fe===5131&&(Fe=33327),fe===5121&&(Fe=33323)),A===6408&&(fe===5126&&(Fe=34836),fe===5131&&(Fe=34842),fe===5121&&(Fe=Ae===ot&&Re===!1?35907:32856),fe===32819&&(Fe=32854),fe===32820&&(Fe=32855)),(Fe===33325||Fe===33326||Fe===33327||Fe===33328||Fe===34842||Fe===34836)&&e.get("EXT_color_buffer_float"),Fe}function E(k,A,fe){return C(k,fe)===!0||k.isFramebufferTexture&&k.minFilter!==tn&&k.minFilter!==Cn?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function U(k){return k===tn||k===Fa||k===Pr?9728:9729}function j(k){let A=k.target;A.removeEventListener("dispose",j),H(A),A.isVideoTexture&&g.delete(A)}function W(k){let A=k.target;A.removeEventListener("dispose",W),X(A)}function H(k){let A=n.get(k);if(A.__webglInit===void 0)return;let fe=k.source,Ae=p.get(fe);if(Ae){let Re=Ae[A.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&V(k),Object.keys(Ae).length===0&&p.delete(fe)}n.remove(k)}function V(k){let A=n.get(k);a.deleteTexture(A.__webglTexture);let fe=k.source,Ae=p.get(fe);delete Ae[A.__cacheKey],r.memory.textures--}function X(k){let A=k.texture,fe=n.get(k),Ae=n.get(A);if(Ae.__webglTexture!==void 0&&(a.deleteTexture(Ae.__webglTexture),r.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let Re=0;Re<6;Re++)a.deleteFramebuffer(fe.__webglFramebuffer[Re]),fe.__webglDepthbuffer&&a.deleteRenderbuffer(fe.__webglDepthbuffer[Re]);else{if(a.deleteFramebuffer(fe.__webglFramebuffer),fe.__webglDepthbuffer&&a.deleteRenderbuffer(fe.__webglDepthbuffer),fe.__webglMultisampledFramebuffer&&a.deleteFramebuffer(fe.__webglMultisampledFramebuffer),fe.__webglColorRenderbuffer)for(let Re=0;Re<fe.__webglColorRenderbuffer.length;Re++)fe.__webglColorRenderbuffer[Re]&&a.deleteRenderbuffer(fe.__webglColorRenderbuffer[Re]);fe.__webglDepthRenderbuffer&&a.deleteRenderbuffer(fe.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let Re=0,Fe=A.length;Re<Fe;Re++){let Qe=n.get(A[Re]);Qe.__webglTexture&&(a.deleteTexture(Qe.__webglTexture),r.memory.textures--),n.remove(A[Re])}n.remove(A),n.remove(k)}let ce=0;function se(){ce=0}function Y(){let k=ce;return k>=c&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+c),ce+=1,k}function Q(k){let A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.encoding),A.join()}function ge(k,A){let fe=n.get(k);if(k.isVideoTexture&&Wn(k),k.isRenderTargetTexture===!1&&k.version>0&&fe.__version!==k.version){let Ae=k.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(fe,k,A);return}}t.bindTexture(3553,fe.__webglTexture,33984+A)}function Ue(k,A){let fe=n.get(k);if(k.version>0&&fe.__version!==k.version){We(fe,k,A);return}t.bindTexture(35866,fe.__webglTexture,33984+A)}function J(k,A){let fe=n.get(k);if(k.version>0&&fe.__version!==k.version){We(fe,k,A);return}t.bindTexture(32879,fe.__webglTexture,33984+A)}function le(k,A){let fe=n.get(k);if(k.version>0&&fe.__version!==k.version){qe(fe,k,A);return}t.bindTexture(34067,fe.__webglTexture,33984+A)}let Te={[ni]:10497,[Bn]:33071,[Or]:33648},Ie={[tn]:9728,[Fa]:9984,[Pr]:9986,[Cn]:9729,[rl]:9985,[Vi]:9987};function ae(k,A,fe){if(fe?(a.texParameteri(k,10242,Te[A.wrapS]),a.texParameteri(k,10243,Te[A.wrapT]),(k===32879||k===35866)&&a.texParameteri(k,32882,Te[A.wrapR]),a.texParameteri(k,10240,Ie[A.magFilter]),a.texParameteri(k,10241,Ie[A.minFilter])):(a.texParameteri(k,10242,33071),a.texParameteri(k,10243,33071),(k===32879||k===35866)&&a.texParameteri(k,32882,33071),(A.wrapS!==Bn||A.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(k,10240,U(A.magFilter)),a.texParameteri(k,10241,U(A.minFilter)),A.minFilter!==tn&&A.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Ae=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===tn||A.minFilter!==Pr&&A.minFilter!==Vi||A.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ii&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(a.texParameterf(k,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function tt(k,A){let fe=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",j));let Ae=A.source,Re=p.get(Ae);Re===void 0&&(Re={},p.set(Ae,Re));let Fe=Q(A);if(Fe!==k.__cacheKey){Re[Fe]===void 0&&(Re[Fe]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,fe=!0),Re[Fe].usedTimes++;let Qe=Re[k.__cacheKey];Qe!==void 0&&(Re[k.__cacheKey].usedTimes--,Qe.usedTimes===0&&V(A)),k.__cacheKey=Fe,k.__webglTexture=Re[Fe].texture}return fe}function We(k,A,fe){let Ae=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ae=35866),A.isData3DTexture&&(Ae=32879);let Re=tt(k,A),Fe=A.source;t.bindTexture(Ae,k.__webglTexture,33984+fe);let Qe=n.get(Fe);if(Fe.version!==Qe.__version||Re===!0){t.activeTexture(33984+fe),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);let Ne=T(A)&&v(A.image)===!1,xe=x(A.image,Ne,!1,h);xe=Fn(A,xe);let Ke=v(xe)||o,Ze=s.convert(A.format,A.encoding),Ge=s.convert(A.type),je=w(A.internalFormat,Ze,Ge,A.encoding,A.isVideoTexture);ae(Ae,A,Ke);let ze,ht=A.mipmaps,Et=o&&A.isVideoTexture!==!0,Ft=Qe.__version===void 0||Re===!0,q=E(A,xe,Ke);if(A.isDepthTexture)je=6402,o?A.type===Ui?je=36012:A.type===ps?je=33190:A.type===Xs?je=35056:je=33189:A.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ms&&je===6402&&A.type!==Iu&&A.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ps,Ge=s.convert(A.type)),A.format===Zs&&je===6402&&(je=34041,A.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Xs,Ge=s.convert(A.type))),Ft&&(Et?t.texStorage2D(3553,1,je,xe.width,xe.height):t.texImage2D(3553,0,je,xe.width,xe.height,0,Ze,Ge,null));else if(A.isDataTexture)if(ht.length>0&&Ke){Et&&Ft&&t.texStorage2D(3553,q,je,ht[0].width,ht[0].height);for(let ue=0,we=ht.length;ue<we;ue++)ze=ht[ue],Et?t.texSubImage2D(3553,ue,0,0,ze.width,ze.height,Ze,Ge,ze.data):t.texImage2D(3553,ue,je,ze.width,ze.height,0,Ze,Ge,ze.data);A.generateMipmaps=!1}else Et?(Ft&&t.texStorage2D(3553,q,je,xe.width,xe.height),t.texSubImage2D(3553,0,0,0,xe.width,xe.height,Ze,Ge,xe.data)):t.texImage2D(3553,0,je,xe.width,xe.height,0,Ze,Ge,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Et&&Ft&&t.texStorage3D(35866,q,je,ht[0].width,ht[0].height,xe.depth);for(let ue=0,we=ht.length;ue<we;ue++)ze=ht[ue],A.format!==In?Ze!==null?Et?t.compressedTexSubImage3D(35866,ue,0,0,0,ze.width,ze.height,xe.depth,Ze,ze.data,0,0):t.compressedTexImage3D(35866,ue,je,ze.width,ze.height,xe.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?t.texSubImage3D(35866,ue,0,0,0,ze.width,ze.height,xe.depth,Ze,Ge,ze.data):t.texImage3D(35866,ue,je,ze.width,ze.height,xe.depth,0,Ze,Ge,ze.data)}else{Et&&Ft&&t.texStorage2D(3553,q,je,ht[0].width,ht[0].height);for(let ue=0,we=ht.length;ue<we;ue++)ze=ht[ue],A.format!==In?Ze!==null?Et?t.compressedTexSubImage2D(3553,ue,0,0,ze.width,ze.height,Ze,ze.data):t.compressedTexImage2D(3553,ue,je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?t.texSubImage2D(3553,ue,0,0,ze.width,ze.height,Ze,Ge,ze.data):t.texImage2D(3553,ue,je,ze.width,ze.height,0,Ze,Ge,ze.data)}else if(A.isDataArrayTexture)Et?(Ft&&t.texStorage3D(35866,q,je,xe.width,xe.height,xe.depth),t.texSubImage3D(35866,0,0,0,0,xe.width,xe.height,xe.depth,Ze,Ge,xe.data)):t.texImage3D(35866,0,je,xe.width,xe.height,xe.depth,0,Ze,Ge,xe.data);else if(A.isData3DTexture)Et?(Ft&&t.texStorage3D(32879,q,je,xe.width,xe.height,xe.depth),t.texSubImage3D(32879,0,0,0,0,xe.width,xe.height,xe.depth,Ze,Ge,xe.data)):t.texImage3D(32879,0,je,xe.width,xe.height,xe.depth,0,Ze,Ge,xe.data);else if(A.isFramebufferTexture){if(Ft)if(Et)t.texStorage2D(3553,q,je,xe.width,xe.height);else{let ue=xe.width,we=xe.height;for(let Oe=0;Oe<q;Oe++)t.texImage2D(3553,Oe,je,ue,we,0,Ze,Ge,null),ue>>=1,we>>=1}}else if(ht.length>0&&Ke){Et&&Ft&&t.texStorage2D(3553,q,je,ht[0].width,ht[0].height);for(let ue=0,we=ht.length;ue<we;ue++)ze=ht[ue],Et?t.texSubImage2D(3553,ue,0,0,Ze,Ge,ze):t.texImage2D(3553,ue,je,Ze,Ge,ze);A.generateMipmaps=!1}else Et?(Ft&&t.texStorage2D(3553,q,je,xe.width,xe.height),t.texSubImage2D(3553,0,0,0,Ze,Ge,xe)):t.texImage2D(3553,0,je,Ze,Ge,xe);C(A,Ke)&&O(Ae),Qe.__version=Fe.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function qe(k,A,fe){if(A.image.length!==6)return;let Ae=tt(k,A),Re=A.source;t.bindTexture(34067,k.__webglTexture,33984+fe);let Fe=n.get(Re);if(Re.version!==Fe.__version||Ae===!0){t.activeTexture(33984+fe),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);let Qe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ne=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Qe&&!Ne?xe[ue]=x(A.image[ue],!1,!0,l):xe[ue]=Ne?A.image[ue].image:A.image[ue],xe[ue]=Fn(A,xe[ue]);let Ke=xe[0],Ze=v(Ke)||o,Ge=s.convert(A.format,A.encoding),je=s.convert(A.type),ze=w(A.internalFormat,Ge,je,A.encoding),ht=o&&A.isVideoTexture!==!0,Et=Fe.__version===void 0||Ae===!0,Ft=E(A,Ke,Ze);ae(34067,A,Ze);let q;if(Qe){ht&&Et&&t.texStorage2D(34067,Ft,ze,Ke.width,Ke.height);for(let ue=0;ue<6;ue++){q=xe[ue].mipmaps;for(let we=0;we<q.length;we++){let Oe=q[we];A.format!==In?Ge!==null?ht?t.compressedTexSubImage2D(34069+ue,we,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(34069+ue,we,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?t.texSubImage2D(34069+ue,we,0,0,Oe.width,Oe.height,Ge,je,Oe.data):t.texImage2D(34069+ue,we,ze,Oe.width,Oe.height,0,Ge,je,Oe.data)}}}else{q=A.mipmaps,ht&&Et&&(q.length>0&&Ft++,t.texStorage2D(34067,Ft,ze,xe[0].width,xe[0].height));for(let ue=0;ue<6;ue++)if(Ne){ht?t.texSubImage2D(34069+ue,0,0,0,xe[ue].width,xe[ue].height,Ge,je,xe[ue].data):t.texImage2D(34069+ue,0,ze,xe[ue].width,xe[ue].height,0,Ge,je,xe[ue].data);for(let we=0;we<q.length;we++){let He=q[we].image[ue].image;ht?t.texSubImage2D(34069+ue,we+1,0,0,He.width,He.height,Ge,je,He.data):t.texImage2D(34069+ue,we+1,ze,He.width,He.height,0,Ge,je,He.data)}}else{ht?t.texSubImage2D(34069+ue,0,0,0,Ge,je,xe[ue]):t.texImage2D(34069+ue,0,ze,Ge,je,xe[ue]);for(let we=0;we<q.length;we++){let Oe=q[we];ht?t.texSubImage2D(34069+ue,we+1,0,0,Ge,je,Oe.image[ue]):t.texImage2D(34069+ue,we+1,ze,Ge,je,Oe.image[ue])}}}C(A,Ze)&&O(34067),Fe.__version=Re.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function Be(k,A,fe,Ae,Re){let Fe=s.convert(fe.format,fe.encoding),Qe=s.convert(fe.type),Ne=w(fe.internalFormat,Fe,Qe,fe.encoding);n.get(A).__hasExternalTextures||(Re===32879||Re===35866?t.texImage3D(Re,0,Ne,A.width,A.height,A.depth,0,Fe,Qe,null):t.texImage2D(Re,0,Ne,A.width,A.height,0,Fe,Qe,null)),t.bindFramebuffer(36160,k),gt(A)?f.framebufferTexture2DMultisampleEXT(36160,Ae,Re,n.get(fe).__webglTexture,0,jt(A)):(Re===3553||Re>=34069&&Re<=34074)&&a.framebufferTexture2D(36160,Ae,Re,n.get(fe).__webglTexture,0),t.bindFramebuffer(36160,null)}function St(k,A,fe){if(a.bindRenderbuffer(36161,k),A.depthBuffer&&!A.stencilBuffer){let Ae=33189;if(fe||gt(A)){let Re=A.depthTexture;Re&&Re.isDepthTexture&&(Re.type===Ui?Ae=36012:Re.type===ps&&(Ae=33190));let Fe=jt(A);gt(A)?f.renderbufferStorageMultisampleEXT(36161,Fe,Ae,A.width,A.height):a.renderbufferStorageMultisample(36161,Fe,Ae,A.width,A.height)}else a.renderbufferStorage(36161,Ae,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,k)}else if(A.depthBuffer&&A.stencilBuffer){let Ae=jt(A);fe&&gt(A)===!1?a.renderbufferStorageMultisample(36161,Ae,35056,A.width,A.height):gt(A)?f.renderbufferStorageMultisampleEXT(36161,Ae,35056,A.width,A.height):a.renderbufferStorage(36161,34041,A.width,A.height),a.framebufferRenderbuffer(36160,33306,36161,k)}else{let Ae=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Re=0;Re<Ae.length;Re++){let Fe=Ae[Re],Qe=s.convert(Fe.format,Fe.encoding),Ne=s.convert(Fe.type),xe=w(Fe.internalFormat,Qe,Ne,Fe.encoding),Ke=jt(A);fe&&gt(A)===!1?a.renderbufferStorageMultisample(36161,Ke,xe,A.width,A.height):gt(A)?f.renderbufferStorageMultisampleEXT(36161,Ke,xe,A.width,A.height):a.renderbufferStorage(36161,xe,A.width,A.height)}}a.bindRenderbuffer(36161,null)}function st(k,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);let Ae=n.get(A.depthTexture).__webglTexture,Re=jt(A);if(A.depthTexture.format===ms)gt(A)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Ae,0,Re):a.framebufferTexture2D(36160,36096,3553,Ae,0);else if(A.depthTexture.format===Zs)gt(A)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Ae,0,Re):a.framebufferTexture2D(36160,33306,3553,Ae,0);else throw new Error("Unknown depthTexture format")}function Je(k){let A=n.get(k),fe=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!A.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");st(A.__webglFramebuffer,k)}else if(fe){A.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(36160,A.__webglFramebuffer[Ae]),A.__webglDepthbuffer[Ae]=a.createRenderbuffer(),St(A.__webglDepthbuffer[Ae],k,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),St(A.__webglDepthbuffer,k,!1);t.bindFramebuffer(36160,null)}function rn(k,A,fe){let Ae=n.get(k);A!==void 0&&Be(Ae.__webglFramebuffer,k,k.texture,36064,3553),fe!==void 0&&Je(k)}function At(k){let A=k.texture,fe=n.get(k),Ae=n.get(A);k.addEventListener("dispose",W),k.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=a.createTexture()),Ae.__version=A.version,r.memory.textures++);let Re=k.isWebGLCubeRenderTarget===!0,Fe=k.isWebGLMultipleRenderTargets===!0,Qe=v(k)||o;if(Re){fe.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)fe.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(fe.__webglFramebuffer=a.createFramebuffer(),Fe)if(i.drawBuffers){let Ne=k.texture;for(let xe=0,Ke=Ne.length;xe<Ke;xe++){let Ze=n.get(Ne[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&k.samples>0&&gt(k)===!1){let Ne=Fe?A:[A];fe.__webglMultisampledFramebuffer=a.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer);for(let xe=0;xe<Ne.length;xe++){let Ke=Ne[xe];fe.__webglColorRenderbuffer[xe]=a.createRenderbuffer(),a.bindRenderbuffer(36161,fe.__webglColorRenderbuffer[xe]);let Ze=s.convert(Ke.format,Ke.encoding),Ge=s.convert(Ke.type),je=w(Ke.internalFormat,Ze,Ge,Ke.encoding,k.isXRRenderTarget===!0),ze=jt(k);a.renderbufferStorageMultisample(36161,ze,je,k.width,k.height),a.framebufferRenderbuffer(36160,36064+xe,36161,fe.__webglColorRenderbuffer[xe])}a.bindRenderbuffer(36161,null),k.depthBuffer&&(fe.__webglDepthRenderbuffer=a.createRenderbuffer(),St(fe.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(36160,null)}}if(Re){t.bindTexture(34067,Ae.__webglTexture),ae(34067,A,Qe);for(let Ne=0;Ne<6;Ne++)Be(fe.__webglFramebuffer[Ne],k,A,36064,34069+Ne);C(A,Qe)&&O(34067),t.unbindTexture()}else if(Fe){let Ne=k.texture;for(let xe=0,Ke=Ne.length;xe<Ke;xe++){let Ze=Ne[xe],Ge=n.get(Ze);t.bindTexture(3553,Ge.__webglTexture),ae(3553,Ze,Qe),Be(fe.__webglFramebuffer,k,Ze,36064+xe,3553),C(Ze,Qe)&&O(3553)}t.unbindTexture()}else{let Ne=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(o?Ne=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,Ae.__webglTexture),ae(Ne,A,Qe),Be(fe.__webglFramebuffer,k,A,36064,Ne),C(A,Qe)&&O(Ne),t.unbindTexture()}k.depthBuffer&&Je(k)}function wt(k){let A=v(k)||o,fe=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let Ae=0,Re=fe.length;Ae<Re;Ae++){let Fe=fe[Ae];if(C(Fe,A)){let Qe=k.isWebGLCubeRenderTarget?34067:3553,Ne=n.get(Fe).__webglTexture;t.bindTexture(Qe,Ne),O(Qe),t.unbindTexture()}}}function vn(k){if(o&&k.samples>0&&gt(k)===!1){let A=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],fe=k.width,Ae=k.height,Re=16384,Fe=[],Qe=k.stencilBuffer?33306:36096,Ne=n.get(k),xe=k.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ke=0;Ke<A.length;Ke++)t.bindFramebuffer(36160,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ke,36161,null),t.bindFramebuffer(36160,Ne.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ke,3553,null,0);t.bindFramebuffer(36008,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ne.__webglFramebuffer);for(let Ke=0;Ke<A.length;Ke++){Fe.push(36064+Ke),k.depthBuffer&&Fe.push(Qe);let Ze=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Ze===!1&&(k.depthBuffer&&(Re|=256),k.stencilBuffer&&(Re|=1024)),xe&&a.framebufferRenderbuffer(36008,36064,36161,Ne.__webglColorRenderbuffer[Ke]),Ze===!0&&(a.invalidateFramebuffer(36008,[Qe]),a.invalidateFramebuffer(36009,[Qe])),xe){let Ge=n.get(A[Ke]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Ge,0)}a.blitFramebuffer(0,0,fe,Ae,0,0,fe,Ae,Re,9728),d&&a.invalidateFramebuffer(36008,Fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),xe)for(let Ke=0;Ke<A.length;Ke++){t.bindFramebuffer(36160,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ke,36161,Ne.__webglColorRenderbuffer[Ke]);let Ze=n.get(A[Ke]).__webglTexture;t.bindFramebuffer(36160,Ne.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ke,3553,Ze,0)}t.bindFramebuffer(36009,Ne.__webglMultisampledFramebuffer)}}function jt(k){return Math.min(u,k.samples)}function gt(k){let A=n.get(k);return o&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wn(k){let A=r.render.frame;g.get(k)!==A&&(g.set(k,A),k.update())}function Fn(k,A){let fe=k.encoding,Ae=k.format,Re=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===vc||fe!==ui&&(fe===ot?o===!1?e.has("EXT_sRGB")===!0&&Ae===In?(k.format=vc,k.minFilter=Cn,k.generateMipmaps=!1):A=za.sRGBToLinear(A):(Ae!==In||Re!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",fe)),A}this.allocateTextureUnit=Y,this.resetTextureUnits=se,this.setTexture2D=ge,this.setTexture2DArray=Ue,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=rn,this.setupRenderTarget=At,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=gt}function Lb(a,e,t){let n=t.isWebGL2;function i(s,r=null){let o;if(s===Pi)return 5121;if(s===_d)return 32819;if(s===Md)return 32820;if(s===xd)return 5120;if(s===vd)return 5122;if(s===Iu)return 5123;if(s===yd)return 5124;if(s===ps)return 5125;if(s===Ui)return 5126;if(s===ii)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wd)return 6406;if(s===In)return 6408;if(s===Sd)return 6409;if(s===Td)return 6410;if(s===ms)return 6402;if(s===Zs)return 34041;if(s===vc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ad)return 6403;if(s===Ed)return 36244;if(s===Cd)return 33319;if(s===Rd)return 33320;if(s===Pd)return 36249;if(s===Do||s===ko||s===Fo||s===No)if(r===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oh||s===ch||s===lh||s===hh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uh||s===fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uh)return r===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dh||s===ph||s===mh||s===gh||s===bh||s===xh||s===vh||s===yh||s===_h||s===Mh||s===wh||s===Sh||s===Th||s===Ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===dh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return r===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Oo)return r===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Id||s===Eh||s===Ch||s===Rh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Oo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}var Pc=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ib={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),b=this._getHandJoint(l,m);p!==null&&(b.matrix.fromArray(p.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=p.radius),b.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ib)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lc=class extends fn{constructor(e,t,n,i,s,r,o,c,l,h){if(h=h!==void 0?h:ms,h!==ms&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=ps),n===void 0&&h===Zs&&(n=Xs),super(null,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1}},Ic=class extends Li{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,m=t.getContextAttributes(),p=null,b=null,y=[],x=[],v=new Set,T=new Map,C=new Jt;C.layers.enable(1),C.viewport=new It;let O=new Jt;O.layers.enable(2),O.viewport=new It;let w=[C,O],E=new Pc;E.layers.enable(1),E.layers.enable(2);let U=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=y[J];return le===void 0&&(le=new kr,y[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=y[J];return le===void 0&&(le=new kr,y[J]=le),le.getGripSpace()},this.getHand=function(J){let le=y[J];return le===void 0&&(le=new kr,y[J]=le),le.getHandSpace()};function W(J){let le=x.indexOf(J.inputSource);if(le===-1)return;let Te=y[le];Te!==void 0&&Te.dispatchEvent({type:J.type,data:J.inputSource})}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",V);for(let J=0;J<y.length;J++){let le=x[J];le!==null&&(x[J]=null,y[J].disconnect(le))}U=null,j=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,Ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),b=new xn(d.framebufferWidth,d.framebufferHeight,{format:In,type:Pi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let le=null,Te=null,Ie=null;m.depth&&(Ie=m.stencil?35056:33190,le=m.stencil?Zs:ms,Te=m.stencil?Xs:ps);let ae={colorFormat:32856,depthFormat:Ie,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),b=new xn(f.textureWidth,f.textureHeight,{format:In,type:Pi,depthTexture:new Lc(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let tt=e.properties.get(b);tt.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(J){for(let le=0;le<J.removed.length;le++){let Te=J.removed[le],Ie=x.indexOf(Te);Ie>=0&&(x[Ie]=null,y[Ie].disconnect(Te))}for(let le=0;le<J.added.length;le++){let Te=J.added[le],Ie=x.indexOf(Te);if(Ie===-1){for(let tt=0;tt<y.length;tt++)if(tt>=x.length){x.push(Te),Ie=tt;break}else if(x[tt]===null){x[tt]=Te,Ie=tt;break}if(Ie===-1)break}let ae=y[Ie];ae&&ae.connect(Te)}}let X=new I,ce=new I;function se(J,le,Te){X.setFromMatrixPosition(le.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);let Ie=X.distanceTo(ce),ae=le.projectionMatrix.elements,tt=Te.projectionMatrix.elements,We=ae[14]/(ae[10]-1),qe=ae[14]/(ae[10]+1),Be=(ae[9]+1)/ae[5],St=(ae[9]-1)/ae[5],st=(ae[8]-1)/ae[0],Je=(tt[8]+1)/tt[0],rn=We*st,At=We*Je,wt=Ie/(-st+Je),vn=wt*-st;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vn),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let jt=We+wt,gt=qe+wt,Wn=rn-vn,Fn=At+(Ie-vn),k=Be*qe/gt*jt,A=St*qe/gt*jt;J.projectionMatrix.makePerspective(Wn,Fn,k,A,jt,gt)}function Y(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;E.near=O.near=C.near=J.near,E.far=O.far=C.far=J.far,(U!==E.near||j!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,j=E.far);let le=J.parent,Te=E.cameras;Y(E,le);for(let ae=0;ae<Te.length;ae++)Y(Te[ae],le);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),J.matrix.copy(E.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale);let Ie=J.children;for(let ae=0,tt=Ie.length;ae<tt;ae++)Ie[ae].updateMatrixWorld(!0);Te.length===2?se(E,C,O):E.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.getPlanes=function(){return v};let Q=null;function ge(J,le){if(h=le.getViewerPose(l||r),g=le,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ie=!1;Te.length!==E.cameras.length&&(E.cameras.length=0,Ie=!0);for(let ae=0;ae<Te.length;ae++){let tt=Te[ae],We=null;if(d!==null)We=d.getViewport(tt);else{let Be=u.getViewSubImage(f,tt);We=Be.viewport,ae===0&&(e.setRenderTargetTextures(b,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(b))}let qe=w[ae];qe===void 0&&(qe=new Jt,qe.layers.enable(ae),qe.viewport=new It,w[ae]=qe),qe.matrix.fromArray(tt.transform.matrix),qe.projectionMatrix.fromArray(tt.projectionMatrix),qe.viewport.set(We.x,We.y,We.width,We.height),ae===0&&E.matrix.copy(qe.matrix),Ie===!0&&E.cameras.push(qe)}}for(let Te=0;Te<y.length;Te++){let Ie=x[Te],ae=y[Te];Ie!==null&&ae!==void 0&&ae.update(Ie,le,l||r)}if(Q&&Q(J,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let Te=null;for(let Ie of v)le.detectedPlanes.has(Ie)||(Te===null&&(Te=[]),Te.push(Ie));if(Te!==null)for(let Ie of Te)v.delete(Ie),T.delete(Ie),n.dispatchEvent({type:"planeremoved",data:Ie});for(let Ie of le.detectedPlanes)if(!v.has(Ie))v.add(Ie),T.set(Ie,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Ie});else{let ae=T.get(Ie);Ie.lastChangedTime>ae&&(T.set(Ie,Ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Ie}))}}g=null}let Ue=new Uu;Ue.setAnimationLoop(ge),this.setAnimationLoop=function(J){Q=J},this.dispose=function(){}}};function Db(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,Bu(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,b,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function kb(a,e,t,n){let i={},s={},r=[],o=t.isWebGL2?a.getParameter(35375):0;function c(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",p));let T=x.program;n.updateUBOMapping(y,T);let C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function h(y){let x=u();y.__bindingPointIndex=x;let v=a.createBuffer(),T=y.__size,C=y.usage;return a.bindBuffer(35345,v),a.bufferData(35345,T,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],v=y.uniforms,T=y.__cache;a.bindBuffer(35345,x);for(let C=0,O=v.length;C<O;C++){let w=v[C];if(d(w,C,T)===!0){let E=w.__offset,U=Array.isArray(w.value)?w.value:[w.value],j=0;for(let W=0;W<U.length;W++){let H=U[W],V=m(H);typeof H=="number"?(w.__data[0]=H,a.bufferSubData(35345,E+j,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=H.elements[0],w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=H.elements[0],w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=H.elements[0]):(H.toArray(w.__data,j),j+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,E,w.__data)}}a.bindBuffer(35345,null)}function d(y,x,v){let T=y.value;if(v[x]===void 0){if(typeof T=="number")v[x]=T;else{let C=Array.isArray(T)?T:[T],O=[];for(let w=0;w<C.length;w++)O.push(C[w].clone());v[x]=O}return!0}else if(typeof T=="number"){if(v[x]!==T)return v[x]=T,!0}else{let C=Array.isArray(v[x])?v[x]:[v[x]],O=Array.isArray(T)?T:[T];for(let w=0;w<C.length;w++){let E=C[w];if(E.equals(O[w])===!1)return E.copy(O[w]),!0}}return!1}function g(y){let x=y.uniforms,v=0,T=16,C=0;for(let O=0,w=x.length;O<w;O++){let E=x[O],U={boundary:0,storage:0},j=Array.isArray(E.value)?E.value:[E.value];for(let W=0,H=j.length;W<H;W++){let V=j[W],X=m(V);U.boundary+=X.boundary,U.storage+=X.storage}if(E.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=v,O>0){C=v%T;let W=T-C;C!==0&&W-U.boundary<0&&(v+=T-C,E.__offset=v)}v+=U.storage}return C=v%T,C>0&&(v+=T-C),y.__size=v,y.__cache={},this}function m(y){let x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function b(){for(let y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:c,update:l,dispose:b}}function Fb(){let a=Br("canvas");return a.style.display="block",a}function ia(a={}){this.isWebGLRenderer=!0;let e=a.canvas!==void 0?a.canvas:Fb(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,f=null,d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let m=this,p=!1,b=0,y=0,x=null,v=-1,T=null,C=new It,O=new It,w=null,E=e.width,U=e.height,j=1,W=null,H=null,V=new It(0,0,E,U),X=new It(0,0,E,U),ce=!1,se=new Vr,Y=!1,Q=!1,ge=null,Ue=new nt,J=new Ce,le=new I,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return x===null?j:1}let ae=t;function tt(R,te){for(let he=0;he<R.length;he++){let K=R[he],pe=e.getContext(K,te);if(pe!==null)return pe}return null}try{let R={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",je,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",ht,!1),ae===null){let te=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&te.shift(),ae=tt(te,R),ae===null)throw tt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ae.getShaderPrecisionFormat===void 0&&(ae.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,qe,Be,St,st,Je,rn,At,wt,vn,jt,gt,Wn,Fn,k,A,fe,Ae,Re,Fe,Qe,Ne,xe,Ke;function Ze(){We=new ng(ae),qe=new Jm(ae,We,a),We.init(qe),Ne=new Lb(ae,We,qe),Be=new Rb(ae,We,qe),St=new rg,st=new bb,Je=new Pb(ae,We,Be,st,qe,Ne,St),rn=new Qm(m),At=new tg(m),wt=new pp(ae,qe),xe=new Ym(ae,We,wt,qe),vn=new ig(ae,wt,St,xe),jt=new lg(ae,vn,wt,St),Re=new cg(ae,qe,Je),A=new Zm(st),gt=new gb(m,rn,At,We,qe,xe,A),Wn=new Db(m,st),Fn=new vb,k=new Tb(We,qe),Ae=new Xm(m,rn,At,Be,jt,h,r),fe=new Cb(m,jt,qe),Ke=new kb(ae,St,qe,Be),Fe=new Km(ae,We,St,qe),Qe=new sg(ae,We,St,qe),St.programs=gt.programs,m.capabilities=qe,m.extensions=We,m.properties=st,m.renderLists=Fn,m.shadowMap=fe,m.state=Be,m.info=St}Ze();let Ge=new Ic(m,ae);this.xr=Ge,this.getContext=function(){return ae},this.getContextAttributes=function(){return ae.getContextAttributes()},this.forceContextLoss=function(){let R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(E,U,!1))},this.getSize=function(R){return R.set(E,U)},this.setSize=function(R,te,he){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=R,U=te,e.width=Math.floor(R*j),e.height=Math.floor(te*j),he!==!1&&(e.style.width=R+"px",e.style.height=te+"px"),this.setViewport(0,0,R,te)},this.getDrawingBufferSize=function(R){return R.set(E*j,U*j).floor()},this.setDrawingBufferSize=function(R,te,he){E=R,U=te,j=he,e.width=Math.floor(R*he),e.height=Math.floor(te*he),this.setViewport(0,0,R,te)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,te,he,K){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,te,he,K),Be.viewport(C.copy(V).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,te,he,K){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,te,he,K),Be.scissor(O.copy(X).multiplyScalar(j).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){Be.setScissorTest(ce=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(R=!0,te=!0,he=!0){let K=0;R&&(K|=16384),te&&(K|=256),he&&(K|=1024),ae.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Fn.dispose(),k.dispose(),st.dispose(),rn.dispose(),At.dispose(),jt.dispose(),xe.dispose(),Ke.dispose(),gt.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Oe),Ge.removeEventListener("sessionend",He),ge&&(ge.dispose(),ge=null),Mt.stop()};function je(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let R=St.autoReset,te=fe.enabled,he=fe.autoUpdate,K=fe.needsUpdate,pe=fe.type;Ze(),St.autoReset=R,fe.enabled=te,fe.autoUpdate=he,fe.needsUpdate=K,fe.type=pe}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){let te=R.target;te.removeEventListener("dispose",Et),Ft(te)}function Ft(R){q(R),st.remove(R)}function q(R){let te=st.get(R).programs;te!==void 0&&(te.forEach(function(he){gt.releaseProgram(he)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,te,he,K,pe,Xe){te===null&&(te=Te);let $e=pe.isMesh&&pe.matrixWorld.determinant()<0,at=mr(R,te,he,K,pe);Be.setMaterial(K,$e);let ct=he.index,mt=1;K.wireframe===!0&&(ct=vn.getWireframeAttribute(he),mt=2);let ut=he.drawRange,ft=he.attributes.position,Bt=ut.start*mt,_n=(ut.start+ut.count)*mt;Xe!==null&&(Bt=Math.max(Bt,Xe.start*mt),_n=Math.min(_n,(Xe.start+Xe.count)*mt)),ct!==null?(Bt=Math.max(Bt,0),_n=Math.min(_n,ct.count)):ft!=null&&(Bt=Math.max(Bt,0),_n=Math.min(_n,ft.count));let Zn=_n-Bt;if(Zn<0||Zn===1/0)return;xe.setup(pe,K,at,he,ct);let gi,Gt=Fe;if(ct!==null&&(gi=wt.get(ct),Gt=Qe,Gt.setIndex(gi)),pe.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*Ie()),Gt.setMode(1)):Gt.setMode(4);else if(pe.isLine){let pt=K.linewidth;pt===void 0&&(pt=1),Be.setLineWidth(pt*Ie()),pe.isLineSegments?Gt.setMode(1):pe.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else pe.isPoints?Gt.setMode(0):pe.isSprite&&Gt.setMode(4);if(pe.isInstancedMesh)Gt.renderInstances(Bt,Zn,pe.count);else if(he.isInstancedBufferGeometry){let pt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,gr=Math.min(he.instanceCount,pt);Gt.renderInstances(Bt,Zn,gr)}else Gt.render(Bt,Zn)},this.compile=function(R,te){function he(K,pe,Xe){K.transparent===!0&&K.side===gn&&K.forceSinglePass===!1?(K.side=Rn,K.needsUpdate=!0,yn(K,pe,Xe),K.side=Xn,K.needsUpdate=!0,yn(K,pe,Xe),K.side=gn):yn(K,pe,Xe)}f=k.get(R),f.init(),g.push(f),R.traverseVisible(function(K){K.isLight&&K.layers.test(te.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights(m.physicallyCorrectLights),R.traverse(function(K){let pe=K.material;if(pe)if(Array.isArray(pe))for(let Xe=0;Xe<pe.length;Xe++){let $e=pe[Xe];he($e,R,K)}else he(pe,R,K)}),g.pop(),f=null};let ue=null;function we(R){ue&&ue(R)}function Oe(){Mt.stop()}function He(){Mt.start()}let Mt=new Uu;Mt.setAnimationLoop(we),typeof self!="undefined"&&Mt.setContext(self),this.setAnimationLoop=function(R){ue=R,Ge.setAnimationLoop(R),R===null?Mt.stop():Mt.start()},Ge.addEventListener("sessionstart",Oe),Ge.addEventListener("sessionend",He),this.render=function(R,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(te),te=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,te,x),f=k.get(R,g.length),f.init(),g.push(f),Ue.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),se.setFromProjectionMatrix(Ue),Q=this.localClippingEnabled,Y=A.init(this.clippingPlanes,Q),u=Fn.get(R,d.length),u.init(),d.push(u),Xt(R,te,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(W,H),Y===!0&&A.beginShadows();let he=f.state.shadowsArray;if(fe.render(he,R,te),Y===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(u,R),f.setupLights(m.physicallyCorrectLights),te.isArrayCamera){let K=te.cameras;for(let pe=0,Xe=K.length;pe<Xe;pe++){let $e=K[pe];zt(u,R,$e,$e.viewport)}}else zt(u,R,te);x!==null&&(Je.updateMultisampleRenderTarget(x),Je.updateRenderTargetMipmap(x)),R.isScene===!0&&R.onAfterRender(m,R,te),xe.resetDefaultState(),v=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function Xt(R,te,he,K){if(R.visible===!1)return;if(R.layers.test(te.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(te);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){K&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);let $e=jt.update(R),at=R.material;at.visible&&u.push(R,$e,at,he,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==St.render.frame&&(R.skeleton.update(),R.skeleton.frame=St.render.frame),!R.frustumCulled||se.intersectsObject(R))){K&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);let $e=jt.update(R),at=R.material;if(Array.isArray(at)){let ct=$e.groups;for(let mt=0,ut=ct.length;mt<ut;mt++){let ft=ct[mt],Bt=at[ft.materialIndex];Bt&&Bt.visible&&u.push(R,$e,Bt,he,le.z,ft)}}else at.visible&&u.push(R,$e,at,he,le.z,null)}}let Xe=R.children;for(let $e=0,at=Xe.length;$e<at;$e++)Xt(Xe[$e],te,he,K)}function zt(R,te,he,K){let pe=R.opaque,Xe=R.transmissive,$e=R.transparent;f.setupLightsView(he),Y===!0&&A.setGlobalState(m.clippingPlanes,he),Xe.length>0&&ri(pe,te,he),K&&Be.viewport(C.copy(K)),pe.length>0&&Ct(pe,te,he),Xe.length>0&&Ct(Xe,te,he),$e.length>0&&Ct($e,te,he),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ri(R,te,he){let K=qe.isWebGL2;ge===null&&(ge=new xn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ii:Pi,minFilter:Vi,samples:K&&s===!0?4:0})),m.getDrawingBufferSize(J),K?ge.setSize(J.x,J.y):ge.setSize(Oa(J.x),Oa(J.y));let pe=m.getRenderTarget();m.setRenderTarget(ge),m.clear();let Xe=m.toneMapping;m.toneMapping=Un,Ct(R,te,he),m.toneMapping=Xe,Je.updateMultisampleRenderTarget(ge),Je.updateRenderTargetMipmap(ge),m.setRenderTarget(pe)}function Ct(R,te,he){let K=te.isScene===!0?te.overrideMaterial:null;for(let pe=0,Xe=R.length;pe<Xe;pe++){let $e=R[pe],at=$e.object,ct=$e.geometry,mt=K===null?$e.material:K,ut=$e.group;at.layers.test(he.layers)&&Nn(at,te,he,ct,mt,ut)}}function Nn(R,te,he,K,pe,Xe){R.onBeforeRender(m,te,he,K,pe,Xe),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),pe.onBeforeRender(m,te,he,K,R,Xe),pe.transparent===!0&&pe.side===gn&&pe.forceSinglePass===!1?(pe.side=Rn,pe.needsUpdate=!0,m.renderBufferDirect(he,te,K,pe,R,Xe),pe.side=Xn,pe.needsUpdate=!0,m.renderBufferDirect(he,te,K,pe,R,Xe),pe.side=gn):m.renderBufferDirect(he,te,K,pe,R,Xe),R.onAfterRender(m,te,he,K,pe,Xe)}function yn(R,te,he){te.isScene!==!0&&(te=Te);let K=st.get(R),pe=f.state.lights,Xe=f.state.shadowsArray,$e=pe.state.version,at=gt.getParameters(R,pe.state,Xe,te,he),ct=gt.getProgramCacheKey(at),mt=K.programs;K.environment=R.isMeshStandardMaterial?te.environment:null,K.fog=te.fog,K.envMap=(R.isMeshStandardMaterial?At:rn).get(R.envMap||K.environment),mt===void 0&&(R.addEventListener("dispose",Et),mt=new Map,K.programs=mt);let ut=mt.get(ct);if(ut!==void 0){if(K.currentProgram===ut&&K.lightsStateVersion===$e)return pr(R,at),ut}else at.uniforms=gt.getUniforms(R),R.onBuild(he,at,m),R.onBeforeCompile(at,m),ut=gt.acquireProgram(at,ct),mt.set(ct,ut),K.uniforms=at.uniforms;let ft=K.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ft.clippingPlanes=A.uniform),pr(R,at),K.needsLights=So(R),K.lightsStateVersion=$e,K.needsLights&&(ft.ambientLightColor.value=pe.state.ambient,ft.lightProbe.value=pe.state.probe,ft.directionalLights.value=pe.state.directional,ft.directionalLightShadows.value=pe.state.directionalShadow,ft.spotLights.value=pe.state.spot,ft.spotLightShadows.value=pe.state.spotShadow,ft.rectAreaLights.value=pe.state.rectArea,ft.ltc_1.value=pe.state.rectAreaLTC1,ft.ltc_2.value=pe.state.rectAreaLTC2,ft.pointLights.value=pe.state.point,ft.pointLightShadows.value=pe.state.pointShadow,ft.hemisphereLights.value=pe.state.hemi,ft.directionalShadowMap.value=pe.state.directionalShadowMap,ft.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ft.spotShadowMap.value=pe.state.spotShadowMap,ft.spotLightMatrix.value=pe.state.spotLightMatrix,ft.spotLightMap.value=pe.state.spotLightMap,ft.pointShadowMap.value=pe.state.pointShadowMap,ft.pointShadowMatrix.value=pe.state.pointShadowMatrix);let Bt=ut.getUniforms(),_n=Ys.seqWithValue(Bt.seq,ft);return K.currentProgram=ut,K.uniformsList=_n,ut}function pr(R,te){let he=st.get(R);he.outputEncoding=te.outputEncoding,he.instancing=te.instancing,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function mr(R,te,he,K,pe){te.isScene!==!0&&(te=Te),Je.resetTextureUnits();let Xe=te.fog,$e=K.isMeshStandardMaterial?te.environment:null,at=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ui,ct=(K.isMeshStandardMaterial?At:rn).get(K.envMap||$e),mt=K.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ut=!!K.normalMap&&!!he.attributes.tangent,ft=!!he.morphAttributes.position,Bt=!!he.morphAttributes.normal,_n=!!he.morphAttributes.color,Zn=K.toneMapped?m.toneMapping:Un,gi=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Gt=gi!==void 0?gi.length:0,pt=st.get(K),gr=f.state.lights;if(Y===!0&&(Q===!0||R!==T)){let pn=R===T&&K.id===v;A.setState(K,R,pn)}let Yt=!1;K.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==gr.state.version||pt.outputEncoding!==at||pe.isInstancedMesh&&pt.instancing===!1||!pe.isInstancedMesh&&pt.instancing===!0||pe.isSkinnedMesh&&pt.skinning===!1||!pe.isSkinnedMesh&&pt.skinning===!0||pt.envMap!==ct||K.fog===!0&&pt.fog!==Xe||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==A.numPlanes||pt.numIntersection!==A.numIntersection)||pt.vertexAlphas!==mt||pt.vertexTangents!==ut||pt.morphTargets!==ft||pt.morphNormals!==Bt||pt.morphColors!==_n||pt.toneMapping!==Zn||qe.isWebGL2===!0&&pt.morphTargetsCount!==Gt)&&(Yt=!0):(Yt=!0,pt.__version=K.version);let bi=pt.currentProgram;Yt===!0&&(bi=yn(K,te,pe));let oa=!1,ss=!1,ai=!1,Wt=bi.getUniforms(),Mn=pt.uniforms;if(Be.useProgram(bi.program)&&(oa=!0,ss=!0,ai=!0),K.id!==v&&(v=K.id,ss=!0),oa||T!==R){if(Wt.setValue(ae,"projectionMatrix",R.projectionMatrix),qe.logarithmicDepthBuffer&&Wt.setValue(ae,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),T!==R&&(T=R,ss=!0,ai=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){let pn=Wt.map.cameraPosition;pn!==void 0&&pn.setValue(ae,le.setFromMatrixPosition(R.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Wt.setValue(ae,"isOrthographic",R.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||pe.isSkinnedMesh)&&Wt.setValue(ae,"viewMatrix",R.matrixWorldInverse)}if(pe.isSkinnedMesh){Wt.setOptional(ae,pe,"bindMatrix"),Wt.setOptional(ae,pe,"bindMatrixInverse");let pn=pe.skeleton;pn&&(qe.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Wt.setValue(ae,"boneTexture",pn.boneTexture,Je),Wt.setValue(ae,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let xi=he.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0&&qe.isWebGL2===!0)&&Re.update(pe,he,K,bi),(ss||pt.receiveShadow!==pe.receiveShadow)&&(pt.receiveShadow=pe.receiveShadow,Wt.setValue(ae,"receiveShadow",pe.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mn.envMap.value=ct,Mn.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),ss&&(Wt.setValue(ae,"toneMappingExposure",m.toneMappingExposure),pt.needsLights&&qn(Mn,ai),Xe&&K.fog===!0&&Wn.refreshFogUniforms(Mn,Xe),Wn.refreshMaterialUniforms(Mn,K,j,U,ge),Ys.upload(ae,pt.uniformsList,Mn,Je)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ys.upload(ae,pt.uniformsList,Mn,Je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Wt.setValue(ae,"center",pe.center),Wt.setValue(ae,"modelViewMatrix",pe.modelViewMatrix),Wt.setValue(ae,"normalMatrix",pe.normalMatrix),Wt.setValue(ae,"modelMatrix",pe.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let pn=K.uniformsGroups;for(let vi=0,Ts=pn.length;vi<Ts;vi++)if(qe.isWebGL2){let br=pn[vi];Ke.update(br,bi),Ke.bind(br,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function qn(R,te){R.ambientLightColor.needsUpdate=te,R.lightProbe.needsUpdate=te,R.directionalLights.needsUpdate=te,R.directionalLightShadows.needsUpdate=te,R.pointLights.needsUpdate=te,R.pointLightShadows.needsUpdate=te,R.spotLights.needsUpdate=te,R.spotLightShadows.needsUpdate=te,R.rectAreaLights.needsUpdate=te,R.hemisphereLights.needsUpdate=te}function So(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(R,te,he){st.get(R.texture).__webglTexture=te,st.get(R.depthTexture).__webglTexture=he;let K=st.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=he===void 0,K.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,te){let he=st.get(R);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(R,te=0,he=0){x=R,b=te,y=he;let K=!0,pe=null,Xe=!1,$e=!1;if(R){let ct=st.get(R);ct.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(36160,null),K=!1):ct.__webglFramebuffer===void 0?Je.setupRenderTarget(R):ct.__hasExternalTextures&&Je.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);let mt=R.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&($e=!0);let ut=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(pe=ut[te],Xe=!0):qe.isWebGL2&&R.samples>0&&Je.useMultisampledRTT(R)===!1?pe=st.get(R).__webglMultisampledFramebuffer:pe=ut,C.copy(R.viewport),O.copy(R.scissor),w=R.scissorTest}else C.copy(V).multiplyScalar(j).floor(),O.copy(X).multiplyScalar(j).floor(),w=ce;if(Be.bindFramebuffer(36160,pe)&&qe.drawBuffers&&K&&Be.drawBuffers(R,pe),Be.viewport(C),Be.scissor(O),Be.setScissorTest(w),Xe){let ct=st.get(R.texture);ae.framebufferTexture2D(36160,36064,34069+te,ct.__webglTexture,he)}else if($e){let ct=st.get(R.texture),mt=te||0;ae.framebufferTextureLayer(36160,36064,ct.__webglTexture,he||0,mt)}v=-1},this.readRenderTargetPixels=function(R,te,he,K,pe,Xe,$e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&$e!==void 0&&(at=at[$e]),at){Be.bindFramebuffer(36160,at);try{let ct=R.texture,mt=ct.format,ut=ct.type;if(mt!==In&&Ne.convert(mt)!==ae.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ft=ut===ii&&(We.has("EXT_color_buffer_half_float")||qe.isWebGL2&&We.has("EXT_color_buffer_float"));if(ut!==Pi&&Ne.convert(ut)!==ae.getParameter(35738)&&!(ut===Ui&&(qe.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=R.width-K&&he>=0&&he<=R.height-pe&&ae.readPixels(te,he,K,pe,Ne.convert(mt),Ne.convert(ut),Xe)}finally{let ct=x!==null?st.get(x).__webglFramebuffer:null;Be.bindFramebuffer(36160,ct)}}},this.copyFramebufferToTexture=function(R,te,he=0){let K=Math.pow(2,-he),pe=Math.floor(te.image.width*K),Xe=Math.floor(te.image.height*K);Je.setTexture2D(te,0),ae.copyTexSubImage2D(3553,he,0,0,R.x,R.y,pe,Xe),Be.unbindTexture()},this.copyTextureToTexture=function(R,te,he,K=0){let pe=te.image.width,Xe=te.image.height,$e=Ne.convert(he.format),at=Ne.convert(he.type);Je.setTexture2D(he,0),ae.pixelStorei(37440,he.flipY),ae.pixelStorei(37441,he.premultiplyAlpha),ae.pixelStorei(3317,he.unpackAlignment),te.isDataTexture?ae.texSubImage2D(3553,K,R.x,R.y,pe,Xe,$e,at,te.image.data):te.isCompressedTexture?ae.compressedTexSubImage2D(3553,K,R.x,R.y,te.mipmaps[0].width,te.mipmaps[0].height,$e,te.mipmaps[0].data):ae.texSubImage2D(3553,K,R.x,R.y,$e,at,te.image),K===0&&he.generateMipmaps&&ae.generateMipmap(3553),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,te,he,K,pe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Xe=R.max.x-R.min.x+1,$e=R.max.y-R.min.y+1,at=R.max.z-R.min.z+1,ct=Ne.convert(K.format),mt=Ne.convert(K.type),ut;if(K.isData3DTexture)Je.setTexture3D(K,0),ut=32879;else if(K.isDataArrayTexture)Je.setTexture2DArray(K,0),ut=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ae.pixelStorei(37440,K.flipY),ae.pixelStorei(37441,K.premultiplyAlpha),ae.pixelStorei(3317,K.unpackAlignment);let ft=ae.getParameter(3314),Bt=ae.getParameter(32878),_n=ae.getParameter(3316),Zn=ae.getParameter(3315),gi=ae.getParameter(32877),Gt=he.isCompressedTexture?he.mipmaps[0]:he.image;ae.pixelStorei(3314,Gt.width),ae.pixelStorei(32878,Gt.height),ae.pixelStorei(3316,R.min.x),ae.pixelStorei(3315,R.min.y),ae.pixelStorei(32877,R.min.z),he.isDataTexture||he.isData3DTexture?ae.texSubImage3D(ut,pe,te.x,te.y,te.z,Xe,$e,at,ct,mt,Gt.data):he.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ae.compressedTexSubImage3D(ut,pe,te.x,te.y,te.z,Xe,$e,at,ct,Gt.data)):ae.texSubImage3D(ut,pe,te.x,te.y,te.z,Xe,$e,at,ct,mt,Gt),ae.pixelStorei(3314,ft),ae.pixelStorei(32878,Bt),ae.pixelStorei(3316,_n),ae.pixelStorei(3315,Zn),ae.pixelStorei(32877,gi),pe===0&&K.generateMipmaps&&ae.generateMipmap(ut),Be.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Je.setTextureCube(R,0):R.isData3DTexture?Je.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Je.setTexture2DArray(R,0):Je.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){b=0,y=0,x=null,Be.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Dc=class extends ia{};Dc.prototype.isWebGL1Renderer=!0;var ja=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},ji=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new I,qr=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var lu=new I,hu=new It,uu=new It,Nb=new I,fu=new nt,ys=class extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new nt,this.bindMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;hu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let r=uu.getComponent(s);if(r!==0){let o=hu.getComponent(s);fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Nb.copy(lu).applyMatrix4(fu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},_s=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kc=class extends fn{constructor(e=null,t=1,n=1,i,s,r,o,c,l=tn,h=tn,u,f){super(null,r,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},du=new nt,Ob=new nt,Xi=class a{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:Ob;du.multiplyMatrices(o,t[s]),du.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Fu(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new kc(t,e,e,In,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new _s),this.bones.push(r),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},jr=class extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pu=new nt,mu=new nt,Ca=[],zb=new nt,Ar=new yt,Xa=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,zb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,pu),mu.multiplyMatrices(n,pu),Ar.matrixWorld=mu,Ar.raycast(e,Ca);for(let r=0,o=Ca.length;r<o;r++){let c=Ca[r];c.instanceId=s,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gu=new I,bu=new I,xu=new nt,lc=new Ur,Ra=new Ii,tr=class extends Vt{constructor(e=new Tt,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gu.fromBufferAttribute(t,i-1),bu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gu.distanceTo(bu);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;xu.copy(i).invert(),lc.copy(e.ray).applyMatrix4(xu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,h=new I,u=new I,f=new I,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let b=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let x=b,v=y-1;x<v;x+=d){let T=g.getX(x),C=g.getX(x+1);if(l.fromBufferAttribute(p,T),h.fromBufferAttribute(p,C),lc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let b=Math.max(0,r.start),y=Math.min(p.count,r.start+r.count);for(let x=b,v=y-1;x<v;x+=d){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),lc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},vu=new I,yu=new I,Ya=class extends tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(yu);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ms=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_u=new nt,Fc=new Ur,Pa=new Ii,La=new I,nr=class extends Vt{constructor(e=new Tt,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;_u.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(_u);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=f,m=d;g<m;g++){let p=l.getX(g);La.fromBufferAttribute(u,p),Mu(La,p,c,i,e,t,this)}}else{let f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,m=d;g<m;g++)La.fromBufferAttribute(u,g),Mu(La,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Mu(a,e,t,n,i,s,r){let o=Fc.distanceSqToPoint(a);if(o<t){let c=new I;Fc.closestPointToPoint(a,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:r})}}var ki=class extends fn{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),c=t||(r.isVector2?new Ce:new I);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],s=[],r=[],o=new I,c=new nt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new I)}s[0]=new I,r[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(cn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(cn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yr=class extends Yn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ce,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nc=class extends Yr{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function hl(){let a=0,e=0,t=0,n=0;function i(s,r,o,c){a=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,d=(o-r)/h-(c-r)/(h+u)+(c-o)/u;f*=h,d*=h,i(r,o,f,d)},calc:function(s){let r=s*s,o=r*s;return a+e*s+t*r+n*o}}}var Ia=new I,hc=new hl,uc=new hl,fc=new hl,Oc=class extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Ia.subVectors(i[0],i[1]).add(i[0]),l=Ia);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ia.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),hc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,m,p),uc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,m,p),fc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),fc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),fc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wu(a,e,t,n,i){let s=(n-e)*.5,r=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*a+t}function Bb(a,e){let t=1-a;return t*t*e}function Ub(a,e){return 2*(1-a)*a*e}function Gb(a,e){return a*a*e}function Fr(a,e,t,n){return Bb(a,e)+Ub(a,t)+Gb(a,n)}function Hb(a,e){let t=1-a;return t*t*t*e}function Vb(a,e){let t=1-a;return 3*t*t*a*e}function Wb(a,e){return 3*(1-a)*a*a*e}function qb(a,e){return a*a*a*e}function Nr(a,e,t,n,i){return Hb(a,e)+Vb(a,t)+Wb(a,n)+qb(a,i)}var Ja=class extends Yn{constructor(e=new Ce,t=new Ce,n=new Ce,i=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ce){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Nr(e,i.x,s.x,r.x,o.x),Nr(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends Yn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Nr(e,i.x,s.x,r.x,o.x),Nr(e,i.y,s.y,r.y,o.y),Nr(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kr=class extends Yn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new Ce;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends Yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Yn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Fr(e,i.x,s.x,r.x),Fr(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends Yn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Fr(e,i.x,s.x,r.x),Fr(e,i.y,s.y,r.y),Fr(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(wu(o,c.x,l.x,h.x,u.x),wu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ce().fromArray(i))}return this}},jb=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Oc,CubicBezierCurve:Ja,CubicBezierCurve3:zc,EllipseCurve:Yr,LineCurve:Kr,LineCurve3:Bc,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Uc,SplineCurve:Qa}),Gc=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Kr(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new jb[i.type]().fromJSON(i))}return this}},Hc=class extends Gc{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Kr(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Za(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let o=new Ja(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i),new Ce(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,r,o,c),this}absellipse(e,t,n,i,s,r,o,c){let l=new Yr(e,t,n,i,s,r,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vc=class a extends Tt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=cn(i,0,Math.PI*2);let s=[],r=[],o=[],c=[],l=[],h=1/t,u=new I,f=new Ce,d=new I,g=new I,m=new I,p=0,b=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,b=e[y+1].y-e[y].y,d.x=b*1,d.y=-p,d.z=b*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:p=e[y+1].x-e[y].x,b=e[y+1].y-e[y].y,d.x=b*1,d.y=-p,d.z=b*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=t;y++){let x=n+y*h*i,v=Math.sin(x),T=Math.cos(x);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*v,u.y=e[C].y,u.z=e[C].x*T,r.push(u.x,u.y,u.z),f.x=y/t,f.y=C/(e.length-1),o.push(f.x,f.y);let O=c[3*C+0]*v,w=c[3*C+1],E=c[3*C+0]*T;l.push(O,w,E)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let v=x+y*e.length,T=v,C=v+e.length,O=v+e.length+1,w=v+1;s.push(T,C,w),s.push(O,w,C)}this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}static fromJSON(e){return new a(e.points,e.segments,e.phiStart,e.phiLength)}},$a=class a extends Vc{constructor(e=1,t=1,n=4,i=8){let s=new Hc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new a(e.radius,e.length,e.capSegments,e.radialSegments)}},Jr=class a extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],r=[],o=[],c=[],l=new I,h=new Ce;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fi=class a extends Tt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,m=[],p=n/2,b=0;y(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function y(){let v=new I,T=new I,C=0,O=(t-e)/n;for(let w=0;w<=s;w++){let E=[],U=w/s,j=U*(t-e)+e;for(let W=0;W<=i;W++){let H=W/i,V=H*c+o,X=Math.sin(V),ce=Math.cos(V);T.x=j*X,T.y=-U*n+p,T.z=j*ce,u.push(T.x,T.y,T.z),v.set(X,O,ce).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-U),E.push(g++)}m.push(E)}for(let w=0;w<i;w++)for(let E=0;E<s;E++){let U=m[E][w],j=m[E+1][w],W=m[E+1][w+1],H=m[E][w+1];h.push(U,j,H),h.push(j,W,H),C+=6}l.addGroup(b,C,0),b+=C}function x(v){let T=g,C=new Ce,O=new I,w=0,E=v===!0?e:t,U=v===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,p*U,0),f.push(0,U,0),d.push(.5,.5),g++;let j=g;for(let W=0;W<=i;W++){let V=W/i*c+o,X=Math.cos(V),ce=Math.sin(V);O.x=E*ce,O.y=p*U,O.z=E*X,u.push(O.x,O.y,O.z),f.push(0,U,0),C.x=X*.5+.5,C.y=ce*.5*U+.5,d.push(C.x,C.y),g++}for(let W=0;W<i;W++){let H=T+W,V=j+W;v===!0?h.push(V,V+1,H):h.push(V+1,V,H),w+=3}l.addGroup(b,w,v===!0?1:2),b+=w}}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},eo=class a extends fi{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wc=class a extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new I,v=new I,T=new I;for(let C=0;C<t.length;C+=3)d(t[C+0],x),d(t[C+1],v),d(t[C+2],T),c(x,v,T,y)}function c(y,x,v,T){let C=T+1,O=[];for(let w=0;w<=C;w++){O[w]=[];let E=y.clone().lerp(v,w/C),U=x.clone().lerp(v,w/C),j=C-w;for(let W=0;W<=j;W++)W===0&&w===C?O[w][W]=E:O[w][W]=E.clone().lerp(U,W/j)}for(let w=0;w<C;w++)for(let E=0;E<2*(C-w)-1;E++){let U=Math.floor(E/2);E%2===0?(f(O[w][U+1]),f(O[w+1][U]),f(O[w][U])):(f(O[w][U+1]),f(O[w+1][U+1]),f(O[w+1][U]))}}function l(y){let x=new I;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){let y=new I;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let v=p(y)/2/Math.PI+.5,T=b(y)/Math.PI+.5;r.push(v,1-T)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){let x=r[y+0],v=r[y+2],T=r[y+4],C=Math.max(x,v,T),O=Math.min(x,v,T);C>.9&&O<.1&&(x<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){let v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let y=new I,x=new I,v=new I,T=new I,C=new Ce,O=new Ce,w=new Ce;for(let E=0,U=0;E<s.length;E+=9,U+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),C.set(r[U+0],r[U+1]),O.set(r[U+2],r[U+3]),w.set(r[U+4],r[U+5]),T.copy(y).add(x).add(v).divideScalar(3);let j=p(T);m(C,U+0,y,j),m(O,U+2,x,j),m(w,U+4,v,j)}}function m(y,x,v,T){T<0&&y.x===1&&(r[x]=y.x-1),v.x===0&&v.z===0&&(r[x]=T/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function b(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.details)}};var to=class a extends Wc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},Yi=class a extends Tt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new I,g=new Ce;for(let m=0;m<=i;m++){for(let p=0;p<=n;p++){let b=s+p/n*r;d.x=u*Math.cos(b),d.y=u*Math.sin(b),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let m=0;m<i;m++){let p=m*(n+1);for(let b=0;b<n;b++){let y=b+p,x=y,v=y+n+1,T=y+n+2,C=y+1;o.push(x,v,C),o.push(v,T,C)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ws=class a extends Tt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new I,f=new I,d=[],g=[],m=[],p=[];for(let b=0;b<=n;b++){let y=[],x=b/n,v=0;b==0&&r==0?v=.5/t:b==n&&c==Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let C=T/t;u.x=-e*Math.cos(i+C*s)*Math.sin(r+x*o),u.y=e*Math.cos(r+x*o),u.z=e*Math.sin(i+C*s)*Math.sin(r+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(C+v,1-x),y.push(l++)}h.push(y)}for(let b=0;b<n;b++)for(let y=0;y<t;y++){let x=h[b][y+1],v=h[b][y],T=h[b+1][y],C=h[b+1][y+1];(b!==0||r>0)&&d.push(x,v,C),(b!==n-1||c<Math.PI)&&d.push(v,T,C)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(p,2))}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ir=class a extends Tt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let r=[],o=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,b=(i+1)*(d-1)+g,y=(i+1)*d+g;r.push(m,p,y),r.push(p,b,y)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var si=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},di=class extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Bi(a,e,t){return qu(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Da(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function qu(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Xb(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Su(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function ju(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}var Ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends Ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ws:s=e,o=2*t-n;break;case Na:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ws:r=e,c=2*n-t;break;case Na:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,b=-f*p+2*f*m-f*g,y=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*m+.5*g,v=d*p-d*m;for(let T=0;T!==o;++T)s[T]=b*r[h+T]+y*r[l+T]+x*r[c+T]+v*r[u+T];return s}},no=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*u+r[c+f]*h;return s}},jc=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=Bi(n,s,r),this.values=Bi(this.values,s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&qu(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=Bi(this.times),t=Bi(this.values),n=this.getValueSize(),i=this.getInterpolation()===zo,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let m=t[u+g];if(m!==t[f+g]||m!==t[d+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let u=o*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=Bi(e,0,r),this.values=Bi(t,0,r*n)):(this.times=e,this.values=t),this}clone(){let e=Bi(this.times,0),t=Bi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=bs;var Ji=class extends Kn{};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Qs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Kn{};io.prototype.ValueTypeName="color";var Zi=class extends Kn{};Zi.prototype.ValueTypeName="number";var Xc=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(s,0,r,l-o,r,l,c);return s}},pi=class extends Kn{InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=bs;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Kn{};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Qs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Kn{};$i.prototype.ValueTypeName="vector";var sr=class{constructor(e,t=-1,n,i=ol){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Kb(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Xb(c);c=Su(c,1,h),l=Su(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Zi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,m){if(d.length!==0){let p=[],b=[];ju(d,p,b,g),p.length!==0&&m.push(new u(f,p,b))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(let m in d){let p=[],b=[];for(let y=0;y!==f[g].morphTargets.length;++y){let x=f[g];p.push(x.time),b.push(x.morphTarget===m?1:0)}i.push(new Zi(".morphTargetInfluence["+m+"]",p,b))}c=d.length*r}else{let d=".bones["+t[u].name+"]";n($i,d+".position",f,"pos",i),n(pi,d+".quaternion",f,"rot",i),n($i,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Yb(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return io;case"quaternion":return pi;case"bool":case"boolean":return Ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Kb(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Yb(a.type);if(a.times===void 0){let t=[],n=[];ju(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}var rr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},Yc=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Jb=new Yc,es=class{constructor(e){this.manager=e!==void 0?e:Jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Ei={},Kc=class extends Error{constructor(e,t){super(e),this.response=t}},Zr=class extends es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ei[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,m=0,p=new ReadableStream({start(b){y();function y(){u.read().then(({done:x,value:v})=>{if(x)b.close();else{m+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let C=0,O=h.length;C<O;C++){let w=h[C];w.onProgress&&w.onProgress(T)}b.enqueue(v),y()}})}}});return new Response(p)}else throw new Kc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{rr.add(e,l);let h=Ei[e];delete Ei[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jc=class extends es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=rr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;let o=Br("img");function c(){h(),rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var so=class extends es{constructor(e){super(e)}load(e,t,n,i){let s=new fn,r=new Jc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ar=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},or=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dc=new nt,Tu=new I,Au=new I,Qr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends Qr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=zr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends ar{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Eu=new nt,Er=new I,pc=new I,Qc=class extends Qr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),n.position.copy(Er),pc.copy(n.position),pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pc),n.updateMatrixWorld(),i.makeTranslation(-Er.x,-Er.y,-Er.z),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},ao=class extends ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends Qr{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dn=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var cr=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var oo=class extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=rr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){rr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var el=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;ln.multiplyQuaternionsFlat(e,r,e,t,e,n),ln.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}},ul="\\[\\]\\.:\\/",Zb=new RegExp("["+ul+"]","g"),fl="[^"+ul+"]",Qb="[^"+ul.replace("\\.","")+"]",$b=/((?:WC+[\/:])*)/.source.replace("WC",fl),ex=/(WCOD+)?/.source.replace("WCOD",Qb),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),ix=new RegExp("^"+$b+ex+tx+nx+"$"),sx=["material","materials","bones","map"],tl=class{constructor(e,t,n){let i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zb,"")}static parseTrackName(e){let t=ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);sx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=tl;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,o=new Array(r),c={endingStart:Vs,endingEnd:Vs};for(let l=0;l!==r;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ho,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case ol:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===Dd;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===al){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ws,i.endingEnd=Ws):(e?i.endingStart=this.zeroSlopeAtStart?Ws:Vs:i.endingStart=Na,t?i.endingEnd=this.zeroSlopeAtEnd?Ws:Vs:i.endingEnd=Na)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},rx=new Float32Array(1),co=class extends Li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;g=new el(Lt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new no(new Float32Array(2),new Float32Array(2),1,rx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e=="string"?sr.findByName(i,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=ol),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let h=new nl(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?sr.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){let l=r[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function po(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new Tt,l=0;for(let h=0;h<a.length;++h){let u=a[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<a.length;++f){let d=a[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=a[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Xu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let m=0;m<r[h].length;++m)d.push(r[h][m][f]);let g=Xu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Xu(a){let e,t,n,i=0;for(let o=0;o<a.length;++o){let c=a[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}let s=new e(i),r=0;for(let o=0;o<a.length;++o)s.set(a[o].array,r),r+=a[o].array.length;return new kt(s,t,n)}function pl(a,e){if(e===Du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===na||e===uo){let t=a.getIndex();if(t===null){let r=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===na)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}var mo=class extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new _l(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Pl(t)})}load(e,t,n,i){let s=this,r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=cr.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Zr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$u){try{r[_t.KHR_BINARY_GLTF]=new Ll(e)}catch(u){i&&i(u);return}s=JSON.parse(r[_t.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new zl(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case _t.KHR_MATERIALS_UNLIT:r[u]=new xl;break;case _t.KHR_DRACO_MESH_COMPRESSION:r[u]=new Il(s,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:r[u]=new Dl;break;case _t.KHR_MESH_QUANTIZATION:r[u]=new kl;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function ax(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bl=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Le(16777215);c.color!==void 0&&h.fromArray(c.color);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Dn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ao(h),l.distance=u;break;case"spot":l=new ro(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xl=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let i=[];e.color=new Le(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ot))}return Promise.all(i)}},vl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},yl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(s)}},_l=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}},Ml=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ot)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}},wl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},Sl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;let o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Le(o[0],o[1],o[2]),Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Al=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));let o=r.specularColorFactor||[1,1,1];return t.specularColor=new Le(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ot)),Promise.all(s)}},El=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},Cl=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rl=class{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):r.ready.then(function(){let d=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Pl=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],c={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let m=new nt,p=new I,b=new ln,y=new I(1,1,1),x=new Xa(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&b.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,m.compose(p,b,y));for(let v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Vt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},$u="glTF",sa=12,Yu={JSON:1313821514,BIN:5130562},Ll=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-sa,s=new DataView(e,sa),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let c=s.getUint32(r,!0);if(r+=4,c===Yu.JSON){let l=new Uint8Array(e,sa+r,o);this.content=n.decode(l)}else if(c===Yu.BIN){let l=sa+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Il=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(let h in r){let u=Nl[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=Nl[h]||h.toLowerCase();if(r[h]!==void 0){let f=n.accessors[e.attributes[h]],d=ur[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(let d in f.attributes){let g=f.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}u(f)},o,l)})})}},Dl=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},kl=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},go=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,m=g-l,p=-2*d+3*f,b=d-f,y=1-p,x=b-f+u;for(let v=0;v!==o;v++){let T=r[m+v+o],C=r[m+v+c]*h,O=r[g+v+o],w=r[g+v]*h;s[v]=y*T+x*C+p*O+b*w}return s}},ox=new ln,Fl=class extends go{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return ox.fromArray(s).normalize().toArray(s),s}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ku={9728:tn,9729:Cn,9984:Fa,9985:rl,9986:Pr,9987:Vi},Ju={33071:Bn,33648:Or,10497:ni},ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cx={CUBICSPLINE:void 0,LINEAR:bs,STEP:Qs},gl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lx(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),a.DefaultMaterial}function ra(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hx(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);let r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function ux(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fx(a){let e=a.extensions&&a.extensions[_t.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Zu(e.attributes):t=a.indices+":"+Zu(a.attributes)+":"+a.mode,t}function Zu(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ol(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dx(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var px=new nt,zl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ax,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new so(this.options.manager):this.textureLoader=new oo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};ra(s,o,i),ns(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(cr.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=ml[i.type],o=ur[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new kt(l,r,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],c=ml[i.type],l=ur[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,m,p;if(d&&d!==u){let b=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,x=t.cache.get(y);x||(m=new l(o,b*d,i.count*d/h),x=new Wr(m,d/h),t.cache.add(y,x)),p=new qr(x,c,f%d/h,g)}else o===null?m=new l(i.count*c):m=new l(o,f,i.count*c),p=new kt(m,c,g);if(i.sparse!==void 0){let b=ml.SCALAR,y=ur[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new y(r[1],x,i.sparse.count*b),C=new l(r[2],v,i.sparse.count*c);o!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized));for(let O=0,w=T.length;O<w;O++){let E=T[O];if(p.setX(E,C[O*c]),c>=2&&p.setY(E,C[O*c+1]),c>=3&&p.setZ(E,C[O*c+2]),c>=4&&p.setW(E,C[O*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";let f=(s.samplers||{})[r.sampler]||{};return h.magFilter=Ku[f.magFilter]||Cn,h.minFilter=Ku[f.minFilter]||Vi,h.wrapS=Ju[f.wrapS]||ni,h.wrapT=Ju[f.wrapT]||ni,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(f),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let p=new fn(m);p.needsUpdate=!0,f(p)}),t.load(cr.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=r.mimeType||dx(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[_t.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(r);r=s.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ms,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xr,Hn.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return si}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},c=s.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){let u=i[_t.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=gn);let h=s.alphaMode||gl.OPAQUE;if(h===gl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===gl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Qt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==Qt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Qt&&(o.emissive=new Le().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Qt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ot)),Promise.all(l).then(function(){let u=new r(o);return s.name&&(u.name=s.name),ns(u,s),t.associations.set(u,{materials:e}),s.extensions&&ra(i,u,s),u})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Qu(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=fx(l),u=i[h];if(u)r.push(u.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Qu(new Tt,l,t),i[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){let h=r[c].material===void 0?lx(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let m=h[d],p=r[d],b,y=l[d];if(p.mode===Jn.TRIANGLES||p.mode===Jn.TRIANGLE_STRIP||p.mode===Jn.TRIANGLE_FAN||p.mode===void 0)b=s.isSkinnedMesh===!0?new ys(m,y):new yt(m,y),b.isSkinnedMesh===!0&&!b.geometry.attributes.skinWeight.normalized&&b.normalizeSkinWeights(),p.mode===Jn.TRIANGLE_STRIP?b.geometry=pl(b.geometry,uo):p.mode===Jn.TRIANGLE_FAN&&(b.geometry=pl(b.geometry,na));else if(p.mode===Jn.LINES)b=new Ya(m,y);else if(p.mode===Jn.LINE_STRIP)b=new tr(m,y);else if(p.mode===Jn.LINE_LOOP)b=new Ka(m,y);else if(p.mode===Jn.POINTS)b=new nr(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(b.geometry.morphAttributes).length>0&&ux(b,s),b.name=t.createUniqueName(s.name||"mesh_"+e),ns(b,s),p.extensions&&ra(i,b,p),t.assignFinalMaterial(b),u.push(b)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];let f=new Ot;t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Nu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u){o.push(u);let f=new nt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xi(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],r=[],o=[],c=[];for(let l=0,h=n.channels.length;l<h;l++){let u=n.channels[l],f=n.samplers[u.sampler],d=u.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",p)),o.push(f),c.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2],d=l[3],g=l[4],m=[];for(let b=0,y=h.length;b<y;b++){let x=h[b],v=u[b],T=f[b],C=d[b],O=g[b];if(x===void 0)continue;x.updateMatrix();let w;switch(ts[O.path]){case ts.weights:w=Zi;break;case ts.rotation:w=pi;break;case ts.position:case ts.scale:default:w=$i;break}let E=x.name?x.name:x.uuid,U=C.interpolation!==void 0?cx[C.interpolation]:bs,j=[];ts[O.path]===ts.weights?x.traverse(function(H){H.morphTargetInfluences&&j.push(H.name?H.name:H.uuid)}):j.push(E);let W=T.array;if(T.normalized){let H=Ol(W.constructor),V=new Float32Array(W.length);for(let X=0,ce=W.length;X<ce;X++)V[X]=W[X]*H;W=V}for(let H=0,V=j.length;H<V;H++){let X=new w(j[H]+"."+ts[O.path],v.array,W,U);C.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function(se){let Y=this instanceof pi?Fl:go;return new Y(this.times,this.values,this.getValueSize()/3,se)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(X)}}let p=n.name?n.name:"animation_"+e;return new sr(p,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){let o=[],c=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});let l=[],h=s.children||[];for(let f=0,d=h.length;f<d;f++)l.push(i.getDependency("node",h[f]));let u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(l),u])}().then(function(o){let c=o[0],l=o[1],h=o[2],u;if(s.isBone===!0?u=new _s:c.length>1?u=new Ot:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=r),ns(u,s),s.extensions&&ra(n,u,s),s.matrix!==void 0){let f=new nt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,px)});for(let f=0,d=l.length;f<d;f++)u.add(l[f]);return u})}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ot;n.name&&(s.name=i.createUniqueName(n.name)),ns(s,n),n.extensions&&ra(t,s,n);let r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Hn||f instanceof fn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}};function mx(a,e,t){let n=e.attributes,i=new Gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=Ol(ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new I,c=new I;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let m=Ol(ur[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let r=new Ii;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Qu(a,e,t){let n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(let r in n){let o=Nl[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return ns(a,e),mx(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hx(a,e.targets,t):a})}var ef=function(){"use strict";var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:a,s,r=WebAssembly.instantiate(o(i),{}).then(function(b){s=b.instance,s.exports.__wasm_call_ctors()});function o(b){for(var y=new Uint8Array(b.length),x=0;x<b.length;++x){var v=b.charCodeAt(x);y[x]=v>96?v-97:v>64?v-39:v+4}for(var T=0,x=0;x<b.length;++x)y[T++]=y[x]<60?n[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,T)}function c(b,y,x,v,T,C){var O=s.exports.sbrk,w=x+3&-4,E=O(w*v),U=O(T.length),j=new Uint8Array(s.exports.memory.buffer);j.set(T,U);var W=b(E,x,v,U,T.length);if(W==0&&C&&C(E,w,v),y.set(j.subarray(E,E+x*v)),O(E-O(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(b){var y={object:new Worker(b),pending:0,requests:{}};return y.object.onmessage=function(x){var v=x.data;y.pending-=v.count,y.requests[v.id][v.action](v.value),delete y.requests[v.id]},y}function g(b){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),x=new Blob([y],{type:"text/javascript"}),v=URL.createObjectURL(x),T=0;T<b;++T)u[T]=d(v);URL.revokeObjectURL(v)}function m(b,y,x,v,T){for(var C=u[0],O=1;O<u.length;++O)u[O].pending<C.pending&&(C=u[O]);return new Promise(function(w,E){var U=new Uint8Array(x),j=f++;C.pending+=b,C.requests[j]={resolve:w,reject:E},C.object.postMessage({id:j,count:b,size:y,source:U,mode:v,filter:T},[U.buffer])})}function p(b){r.then(function(){var y=b.data;try{var x=new Uint8Array(y.count*y.size);c(s.exports[y.mode],x,y.count,y.size,y.source,s.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:r,supported:!0,useWorkers:function(b){g(b)},decodeVertexBuffer:function(b,y,x,v,T){c(s.exports.meshopt_decodeVertexBuffer,b,y,x,v,s.exports[l[T]])},decodeIndexBuffer:function(b,y,x,v){c(s.exports.meshopt_decodeIndexBuffer,b,y,x,v)},decodeIndexSequence:function(b,y,x,v){c(s.exports.meshopt_decodeIndexSequence,b,y,x,v)},decodeGltfBuffer:function(b,y,x,v,T,C){c(s.exports[h[T]],b,y,x,v,s.exports[l[C]])},decodeGltfBufferAsync:function(b,y,x,v,T){return u.length>0?m(b,y,x,h[v],l[T]):r.then(function(){var C=new Uint8Array(b*y);return c(s.exports[h[v]],C,b,y,x,s.exports[l[T]]),C})}}}();function tf(a){let e=new Map,t=new Map,n=a.clone();return nf(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function nf(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)nf(a.children[n],e.children[n],t)}function gx(a){let e=a>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Bl=a=>a*a*(3-2*a),Ul=a=>a<0?0:a>1?1:a,aa=a=>a-Math.floor(a),Ss=(a,e,t)=>Bl(Ul((t-a)/(e-a)));function bx(a,e,t){let n=new Float32Array(e*t);for(let i=0;i<n.length;i++)n[i]=a();return(i,s)=>{let r=aa(i)*e,o=aa(s)*t,c=Math.floor(r),l=Math.floor(o),h=Bl(r-c),u=Bl(o-l),f=(c+1)%e,d=(l+1)%t,g=n[l*e+c],m=n[l*e+f],p=n[d*e+c],b=n[d*e+f];return g+(m-g)*h+(p-g)*u+(g-m-p+b)*h*u}}function Pn(a,e,t,n=4,i=.5){let s=[],r=1,o=0;for(let c=0;c<n;c++)s.push([bx(a,e<<c,t<<c),r]),o+=r,r*=i;return(c,l)=>{let h=0;for(let u=0;u<s.length;u++)h+=s[u][0](c,l)*s[u][1];return h/o}}function fr(a,e,t=.85){let n=new Float32Array(e*e*2),i=new Float32Array(e*e);for(let r=0;r<e*e;r++)n[r*2]=.5+(a()-.5)*t,n[r*2+1]=.5+(a()-.5)*t,i[r]=a();let s={f1:0,f2:0,id:0};return(r,o)=>{let c=aa(r)*e,l=aa(o)*e,h=Math.floor(c),u=Math.floor(l),f=1e9,d=1e9,g=0;for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++){let b=h+p,y=u+m,x=(y+e)%e*e+(b+e)%e,v=b+n[x*2]-c,T=y+n[x*2+1]-l,C=Math.sqrt(v*v+T*T);C<f?(d=f,f=C,g=i[x]):C<d&&(d=C)}return s.f1=f,s.f2=d,s.id=g,s}}var Gl={metal(a,e,t,n,i){let s=Pn(e,2,96,3,.55),r=Pn(e,3,3,3);for(let o=0;o<a;o++)for(let c=0;c<a;c++){let l=c/a,h=o/a,u=o*a+c,f=s(l,h),d=r(l,h);t[u]=f*.6+d*.4,n[u]=.88+f*.08+d*.04,i[u]=.68+f*.15+Ss(.45,.8,d)*.12}for(let o=0;o<14;o++){let c=e()*a,l=e()*a,h=(e()-.5)*.9,u=a*(.08+e()*.18),f=Math.cos(h),d=Math.sin(h);for(let g=0;g<u;g++){let m=(Math.round(c+f*g)%a+a)%a,b=(Math.round(l+d*g)%a+a)%a*a+m;t[b]=Math.max(0,t[b]-.18),n[b]=Math.min(1,n[b]+.05),i[b]*=.7}}},hammered(a,e,t,n,i){let s=fr(e,7,.9),r=fr(e,13,.9),o=Pn(e,4,4,3);for(let c=0;c<a;c++)for(let l=0;l<a;l++){let h=l/a,u=c/a,f=c*a+l,d=s(h,u).f1,g=r(h,u).f1,m=o(h,u),p=Math.min(1,d*d*1.4)*.65+Math.min(1,g*g*1.6)*.35;t[f]=p*.85+m*.15,n[f]=.88+p*.09+m*.03,i[f]=.66+(1-p)*.22+m*.08}},leather(a,e,t,n,i){let s=fr(e,22,1),r=Pn(e,3,5,4),o=Pn(e,2,2,3),c=Pn(e,32,32,2);for(let l=0;l<a;l++)for(let h=0;h<a;h++){let u=h/a,f=l/a,d=l*a+h,g=s(u,f),m=Ss(0,.22,g.f2-g.f1),p=1-Ss(0,.05,Math.abs(r(u,f)-.5)),b=o(u,f);t[d]=m*.7+c(u,f)*.2+.1-p*.35,n[d]=.8+b*.14+m*.06-p*.06,i[d]=.7+(1-b)*.2+(1-m)*.1}},cloth(a,e,t,n,i){let r=Pn(e,2,48,2),o=Pn(e,48,2,2),c=Pn(e,3,3,3);for(let l=0;l<a;l++)for(let h=0;h<a;h++){let u=h/a,f=l/a,d=l*a+h,g=u*24,m=f*24,p=Math.floor(g),b=Math.floor(m),y=g-p,x=m-b,v=(p+b&1)===0,T=v?y:x,C=v?x:y,O=Math.sin(Math.PI*T),w=.6+.4*Math.sin(Math.PI*C),E=v?r(u,f):o(u,f);t[d]=O*w*(.8+E*.2),n[d]=.8+O*.1+E*.06+c(u,f)*.04,i[d]=.92+(1-O)*.08}},wood(a,e,t,n,i){let s=Pn(e,2,3,4),r=Pn(e,3,64,2),o=fr(e,3,.8);for(let c=0;c<a;c++)for(let l=0;l<a;l++){let h=l/a,u=c/a,f=c*a+l,d=o(h,u),g=Math.max(0,1-d.f1*2.4),m=aa(u*7+s(h,u)*1.6+g*g*.6),p=Math.pow(Math.sin(Math.PI*m),.6),b=r(h,u);t[f]=p*.55+b*.45,n[f]=.74+p*.16+b*.1-g*g*.1,i[f]=.75+(1-p)*.12+b*.13}},stone(a,e,t,n,i){let s=fr(e,5,.9),r=fr(e,11,.9),o=Pn(e,4,4,5),c=Pn(e,24,24,2);for(let l=0;l<a;l++)for(let h=0;h<a;h++){let u=h/a,f=l/a,d=l*a+h,g=s(u,f),m=1-Ss(0,.06,g.f2-g.f1),p=g.id,b=r(u,f),y=1-Ss(0,.03,b.f2-b.f1),x=o(u,f),v=Ss(.62,.8,c(u,f));t[d]=.25+x*.55+p*.2-m*.55-y*.12-v*.15,n[d]=.8+x*.1+p*.08-m*.2-y*.05-v*.06,i[d]=.82+x*.12+m*.06}},scale(a,e,t,n,i){let h=Pn(e,8,8,2),u=Pn(e,6,6,3);for(let f=0;f<a;f++)for(let d=0;d<a;d++){let g=d/a,m=f/a,p=f*a+d,b=null,y=Math.floor(m/.125);for(let O=y+2;O>=y-1;O--){let w=(O+1)*.125,E=w-.21875;if(m>w+1e-6||m<E)continue;let U=(O%2+2)%2*.5,j=(Math.round(g*8-U)+U)/8,W=g-j;W-=Math.round(W);let H=.0625*1.02,V=w-H,X,ce;if(m<=V)X=Math.abs(W)<=H,ce=(H-Math.abs(W))/H;else{let se=Math.hypot(W,m-V);X=se<=H,ce=(H-se)/H}X&&(b={t:(m-E)/.21875,edge:ce,dx:W/H,id:h(j,w)})}if(!b){t[p]=0,n[p]=.6,i[p]=.9;continue}let x=Ss(0,.18,b.edge),v=1-b.dx*b.dx*.35,T=(.35+b.t*.65)*v*x,C=u(g,m);t[p]=T*.9+C*.1,n[p]=.72+x*.14+b.id*.08+C*.06,i[p]=.6+(1-x)*.25+b.id*.15}}},Vx=Object.keys(Gl);function sf(a){if(typeof document!="undefined"){let e=document.createElement("canvas");return e.width=a,e.height=a,e}return new OffscreenCanvas(a,a)}function xx(a){let e=1/0,t=-1/0;for(let i=0;i<a.length;i++)a[i]<e&&(e=a[i]),a[i]>t&&(t=a[i]);let n=t>e?1/(t-e):0;for(let i=0;i<a.length;i++)a[i]=(a[i]-e)*n}var rf=new Map,af=new Map;function vx(a,e={}){if(!Gl[a])throw new Error("proceduralTexture: unknown kind "+a);let t=Math.min(256,Math.max(16,1<<Math.round(Math.log2(e.size||128)))),n=e.seed==null?1:e.seed|0,i=e.repeat==null?[1,1]:Array.isArray(e.repeat)?e.repeat:[e.repeat,e.repeat],s=e.anisotropy||1,r=a+"|"+t+"|"+n+"|"+s,o=rf.get(r);if(!o){let h=gx(n*7919+a.length*104729+a.charCodeAt(0)*31),u=t*t,f=new Float32Array(u),d=new Float32Array(u),g=new Float32Array(u);Gl[a](t,h,f,d,g),xx(f);let m=sf(t),p=sf(t),b=m.getContext("2d"),y=p.getContext("2d"),x=b.createImageData(t,t),v=y.createImageData(t,t);for(let O=0;O<u;O++){let w=Math.round(Ul(d[O])*255),E=O*4;x.data[E]=w,x.data[E+1]=w,x.data[E+2]=w,x.data[E+3]=255,v.data[E]=Math.round(f[O]*255),v.data[E+1]=Math.round(Ul(g[O])*255),v.data[E+2]=0,v.data[E+3]=255}b.putImageData(x,0,0),y.putImageData(v,0,0);let T=new ki(m),C=new ki(p);for(let O of[T,C])O.wrapS=O.wrapT=ni,O.anisotropy=s;T.encoding=ot,C.encoding=ui,T.name="pt-"+a+"-map",C.name="pt-"+a+"-data",o={map:T,roughnessMap:C,bumpMap:C},rf.set(r,o)}if(i[0]===1&&i[1]===1)return o;let c=r+"|"+i[0]+"x"+i[1],l=af.get(c);if(!l){let h=o.map.clone(),u=o.roughnessMap.clone();h.repeat.set(i[0],i[1]),u.repeat.set(i[0],i[1]),l={map:h,roughnessMap:u,bumpMap:u},af.set(c,l)}return l}var cf={metal:{tex:"metal",rough:.42,metal:.9,bump:.0035,env:.9,color:10133672},gold:{tex:"hammered",rough:.36,metal:1,bump:.0025,env:1,color:14264389},leather:{tex:"leather",rough:.78,metal:0,bump:.006,env:.3,color:7031347},cloth:{tex:"cloth",rough:.95,metal:0,bump:.005,env:.2,color:8007214},wood:{tex:"wood",rough:.72,metal:0,bump:.006,env:.3,color:8016948},stone:{tex:"stone",rough:.9,metal:0,bump:.009,env:.25,color:5592154},gem:{tex:null,rough:.1,metal:.3,bump:0,env:1,color:3837183},bone:{tex:"leather",rough:.55,metal:0,bump:.0015,env:.35,color:14208432},skin:{tex:"leather",rough:.62,metal:0,bump:8e-4,env:.25,color:13146746},hair:{tex:"metal",rough:.5,metal:0,bump:.002,env:.35,color:3811870}},Wx=Object.keys(cf),of=new Map;function yx(a){return a==null?"d":a.isColor?"c"+a.getHexString():String(a)}function mi(a,e,t={}){var l,h,u,f,d,g;let n=cf[a];if(!n)throw new Error("detailMaterial: unknown role "+a);let i={};for(let m of Object.keys(t).sort()){let p=t[m];i[m]=p&&p.isTexture?"tex:"+p.uuid:p&&p.isColor?"#"+p.getHexString():p}let s=a+"|"+yx(e)+"|"+JSON.stringify(i),r=of.get(s);if(r)return r;let o=new Le(e==null?n.color:e);r=new si({color:o,roughness:(l=t.roughness)!=null?l:n.rough,metalness:(h=t.metalness)!=null?h:n.metal,flatShading:!!t.flatShading,side:(u=t.side)!=null?u:Xn});let c=t.texture===!1?null:t.texture||n.tex;if(c){let m=vx(c,{size:t.size,seed:t.seed,repeat:t.repeat});r.map=m.map,r.roughnessMap=m.roughnessMap;let p=n.bump*((f=t.bump)!=null?f:1);p>0&&(r.bumpMap=m.bumpMap,r.bumpScale=p),r.roughness=Math.min(1,r.roughness/.78)}return a==="gem"&&(r.emissive=new Le(t.glow==null?o:t.glow),r.emissiveIntensity=(d=t.glowIntensity)!=null?d:.7,r.color.multiplyScalar(.25)),t.envMap&&(r.envMap=t.envMap),r.envMapIntensity=(g=t.envMapIntensity)!=null?g:n.env,r.name="dm-"+a,r.userData.shared=!0,of.set(s,r),r}var bo=new WeakMap;function _x(){let a=new ji,e=new ws(10,32,16),t=e.attributes.position,n=new Float32Array(t.count*3),i=new Le(.2,.21,.25),s=new Le(.2,.18,.16),r=new Le(.025,.022,.02),o=new Le;for(let l=0;l<t.count;l++){let h=t.getY(l)/10;h>=0?o.copy(s).lerp(i,Math.pow(h,.6)):o.copy(s).lerp(r,Math.min(1,Math.pow(-h*4,.5))),n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b}e.setAttribute("color",new kt(n,3)),a.add(new yt(e,new Qt({vertexColors:!0,side:Rn,fog:!1})));let c=(l,h,u,f)=>{let d=new Qt({color:new Le().setRGB(u[0],u[1],u[2],xs),side:gn,fog:!1}),g=new yt(new Wi(l,h),d);g.position.set(f[0],f[1],f[2]),g.lookAt(0,0,0),a.add(g)};return c(5,3.5,[5,3.9,2.8],[-4.5,6,5]),c(3,6,[1.6,2.1,3.6],[5,3,-6]),c(9,4,[.9,.86,.8],[0,2.5,8.5]),c(2.5,2.5,[.9,.8,.7],[-8,.5,-2]),a}function xo(a,e={}){let t=bo.get(a);if(t)return t.texture;let n=e.size||64,i=_x(),s=new er(a),r;if(n>=256)r=s.fromScene(i,.02,.1,50);else{let o=new Hr(n,{type:ii,generateMipmaps:!1}),c=new Gr(.1,50,o),l=a.getRenderTarget(),h=a.toneMapping,u=a.outputEncoding;a.toneMapping=Un,a.outputEncoding=ui,c.update(a,i),a.toneMapping=h,a.outputEncoding=u,a.setRenderTarget(l),r=s.fromCubemap(o.texture),o.dispose()}return s.dispose(),i.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),r.texture.name="sigil-env",bo.set(a,r),r.texture}function vo(a){let e=bo.get(a);e&&(e.dispose(),bo.delete(a))}function Mx(a,e,t,n){let i=new Tt;return i.setAttribute("position",new it(a,3)),e&&i.setAttribute("normal",new it(e,3)),i.setAttribute("uv",new it(t,2)),i.setIndex(n),e||i.computeVertexNormals(),i.computeBoundingSphere(),i}function lf(a=1,e=1,t=1,n,i=2,s={}){let r=a/2,o=e/2,c=t/2;n=Math.min(n==null?Math.min(a,e,t)*.1:n,r,o,c),i=Math.max(1,i|0);let l=2*i+1,h=new Di(1,1,1,l,l,l),u=h.attributes.position,f=h.attributes.normal,d=h.attributes.uv,g=s.uvScale||1/Math.max(a,e,t),m=(x,v)=>{let T=Math.round((x+.5)*l);return T<=i?-v+n*(T/i):T>=l-i?v-n*((l-T)/i):-v+n},p=new I,b=new I,y=new I;for(let x=0;x<u.count;x++){p.set(m(u.getX(x),r),m(u.getY(x),o),m(u.getZ(x),c));let v=new I(f.getX(x),f.getY(x),f.getZ(x));v.x&&(p.x=Math.sign(v.x)*r),v.y&&(p.y=Math.sign(v.y)*o),v.z&&(p.z=Math.sign(v.z)*c),b.set(Math.max(-r+n,Math.min(r-n,p.x)),Math.max(-o+n,Math.min(o-n,p.y)),Math.max(-c+n,Math.min(c-n,p.z))),y.subVectors(p,b),y.lengthSq()<1e-12?y.copy(v):y.normalize(),p.copy(b).addScaledVector(y,n),u.setXYZ(x,p.x,p.y,p.z),f.setXYZ(x,y.x,y.y,y.z);let T,C;v.x?(T=p.z*-Math.sign(v.x),C=p.y):v.y?(T=p.x,C=p.z*-Math.sign(v.y)):(T=p.x*Math.sign(v.z),C=p.y),d.setXY(x,T*g+.5,C*g+.5)}return h.computeBoundingSphere(),h}function hf(a=1,e=1,t=.04,n,i={}){var U,j;n=Math.min(n==null?Math.min(a,e)*.2:n,a/2-1e-4,e/2-1e-4);let s=i.curve||0,r=i.curveY||0,o=Math.max(1,(U=i.cornerSeg)!=null?U:3),c=Math.max(1,(j=i.seg)!=null?j:s||r?4:1),l=W=>{let H=[],V=W/2;for(let X=0;X<=o;X++)H.push(-V+n*(X/o));for(let X=1;X<c;X++)H.push(-V+n+(W-2*n)*(X/c));for(let X=o;X>=0;X--)H.push(V-n*(X/o));return H},h=l(a),u=l(e),f=h.length,d=u.length,g=1/Math.max(a,e),m=(W,H)=>{let V=a/2-n,X=e/2-n,ce=Math.abs(W),se=Math.abs(H);if(ce>V+1e-9&&se>X+1e-9){let Y=ce-V,Q=se-X,ge=Math.max(Y,Q),Ue=Math.hypot(Y,Q),J=ge/Ue;return[Math.sign(W)*(V+Y*J),Math.sign(H)*(X+Q*J)]}return[W,H]},p=(W,H,V,X)=>{let ce=W,se=H,Y=V;if(s){let Q=ce/s,ge=s+Y;ce=ge*Math.sin(Q),Y=ge*Math.cos(Q)-s}if(r){let Q=se/r,ge=r+Y;se=ge*Math.sin(Q),Y=ge*Math.cos(Q)-r}X.push(ce,se,Y)},b=[],y=[],x=[],v=t/2,T=i.back===!1?[1]:[1,-1];for(let W of T){let H=b.length/3;for(let V=0;V<d;V++)for(let X=0;X<f;X++){let[ce,se]=m(h[X],u[V]);p(ce,se,W*v,b),y.push((W>0?ce:-ce)*g+.5,se*g+.5)}for(let V=0;V<d-1;V++)for(let X=0;X<f-1;X++){let ce=H+V*f+X,se=ce+1,Y=ce+f,Q=Y+1;W>0?x.push(ce,se,Q,ce,Q,Y):x.push(ce,Q,se,ce,Y,Q)}}let C=[];for(let W=0;W<f;W++)C.push([W,0]);for(let W=1;W<d;W++)C.push([f-1,W]);for(let W=f-2;W>=0;W--)C.push([W,d-1]);for(let W=d-2;W>0;W--)C.push([0,W]);let O=b.length/3,w=0,E=null;for(let W=0;W<=C.length;W++){let[H,V]=C[W%C.length],[X,ce]=m(h[H],u[V]);E&&(w+=Math.hypot(X-E[0],ce-E[1])),E=[X,ce],p(X,ce,v,b),p(X,ce,-v,b),y.push(w*g,0,w*g,t*g)}for(let W=0;W<C.length;W++){let H=O+W*2,V=H+1,X=H+2,ce=H+3;x.push(H,V,ce,H,ce,X)}return Mx(b,null,y,x)}var yo=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wx=new qi(-1,1,1,-1,0,1),Hl=new Tt;Hl.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3));Hl.setAttribute("uv",new it([0,2,0,0,2,0],2));var dr=class{constructor(e){this._mesh=new yt(Hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var uf={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ff={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var is=class a extends yo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new xn(s,r);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new xn(s,r);d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let o=ff;this.highPassUniforms=lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new Ce(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=uf;this.copyUniforms=lr.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new dn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new Ce(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new dn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};is.BlurDirectionX=new Ce(1,0);is.BlurDirectionY=new Ce(0,1);var _o={uniforms:{tDiffuse:{value:null},resolution:{value:new Ce(1/1024,1/512)}},vertexShader:`

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
	`};var Vn=Object.freeze({High:Object.freeze({name:"High",pixelRatio:2,post:!0,msaa:4,fxaa:!1,target:"half",shadowMapSize:2048,shadowType:ea,propShadows:!0,bloom:!0,bloomStrength:1.4,bloomScale:1,maxLights:6,textureSize:512}),Medium:Object.freeze({name:"Medium",pixelRatio:1.5,post:!0,msaa:2,fxaa:!1,target:"byte",shadowMapSize:1024,shadowType:$r,propShadows:!1,bloom:!0,bloomStrength:1.25,bloomScale:.5,maxLights:4,textureSize:256}),Low:Object.freeze({name:"Low",pixelRatio:1.25,post:!1,msaa:0,fxaa:!1,target:"byte",shadowMapSize:512,shadowType:$r,propShadows:!1,bloom:!1,bloomStrength:0,bloomScale:.5,maxLights:3,textureSize:128})}),Mo=["High","Medium","Low"],Sx=Object.freeze({exposure:null,bloomThreshold:.88,bloomKnee:.08,bloomRadius:.25,bloomStrength:null,lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1.06,vignette:.2,dither:1}),ov=Object.freeze({lift:[0,0,0],gamma:[1,1,1],gain:[1,1,1],saturation:1,vignette:0}),Tx=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,pf=`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`,Ax=`
uniform sampler2D tDiffuse;
uniform vec2 texel;
uniform float luminosityThreshold;
uniform float smoothWidth;
varying vec2 vUv;
${pf}
vec3 tap(vec2 o) { return clamp(texture2D(tDiffuse, vUv + o * texel).rgb, 0.0, 1.0); }
void main() {
  vec3 c = 0.25 * (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)));
  float br = max(c.r, max(c.g, c.b));
  float k = max(smoothWidth, 1e-4);
  float soft = clamp(br - luminosityThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k);
  float w = max(soft, br - luminosityThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(srgbToLinear(c) * w, 1.0);
}`,Ex=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform vec3 lift, gammaInv, gain;
uniform float saturation, vignette, dither;
varying vec2 vUv;
${pf}
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
}`;function Cx(a){return!!(a.capabilities&&a.capabilities.isWebGL2)}function Rx(a){let e=a.extensions;return e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")}function Px(a,e,t,n,i){let s=new xn(e,t,{type:i?ii:Pi,format:In,samples:n,depthBuffer:!0,stencilBuffer:!1,encoding:ot});return s.isXRRenderTarget=!0,s.texture.internalFormat=i?"RGBA16F":"RGBA8",s.texture.name="Sigil.scene",s.texture.generateMipmaps=!1,a.properties.get(s).__ignoreDepthValues=!0,s}function mf(a,e,t,n={}){let i=Cx(a),s=a.getPixelRatio(),r=Object.assign({},Sx,n.params||{});r.exposure==null&&(r.exposure=a.toneMappingExposure);let o=n.applyShadows!==!1,c=Vn[n.quality]||Vn.High,l=1,h=1,u=1,f=1,d=null,g=null,m=null,p=!1,b=new Le,y=new Le,x=new Le,v=new dn({name:"SigilFinal",uniforms:{tScene:{value:null},tBloom:{value:null},lift:{value:new I},gammaInv:{value:new I(1,1,1)},gain:{value:new I(1,1,1)},saturation:{value:1},vignette:{value:0},dither:{value:1}},defines:{},vertexShader:Tx,fragmentShader:Ex,depthTest:!1,depthWrite:!1,toneMapped:!1}),T=new dn({name:"SigilFXAA",uniforms:lr.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,depthTest:!1,depthWrite:!1,toneMapped:!1}),C=new dr(v);function O(se,Y){se in v.defines!==Y&&(Y?v.defines[se]="":delete v.defines[se],v.needsUpdate=!0)}function w(){let se=new is(new Ce(256,256),c.bloomStrength,r.bloomRadius,r.bloomThreshold);for(let Y of[se.renderTargetBright,...se.renderTargetsHorizontal,...se.renderTargetsVertical])Y.texture.type=ii;return se.highPassUniforms.texel={value:new Ce},se.materialHighPassFilter.fragmentShader=Ax,se.materialHighPassFilter.needsUpdate=!0,se}function E(){d&&d.dispose(),g&&g.dispose(),m&&m.dispose(),d=g=m=null}function U(){if(E(),p=i&&c.post,!p)return;let se=Math.min(c.msaa|0,a.capabilities.maxSamples||0);d=Px(a,u,f,se,c.target==="half"&&Rx(a)),(c.fxaa||se===0)&&(g=new xn(u,f,{depthBuffer:!1,stencilBuffer:!1}),g.texture.generateMipmaps=!1),c.bloom&&(m=w()),O("USE_BLOOM",!!m),j()}function j(){d&&d.setSize(u,f),g&&(g.setSize(u,f),T.uniforms.resolution.value.set(1/u,1/f)),m&&(m.setSize(Math.max(2,Math.round(u*c.bloomScale)),Math.max(2,Math.round(f*c.bloomScale))),m.highPassUniforms.texel.value.set(.5/u,.5/f))}function W(se,Y){l=Math.max(1,se|0),h=Math.max(1,Y|0),a.setPixelRatio(Math.min(window.devicePixelRatio||1,c.pixelRatio)),a.setSize(l,h,!1);let Q=a.getDrawingBufferSize(new Ce);u=Q.x,f=Q.y,j()}function H(se){let Y=Vn[se];Y&&(c=Y,o&&df(a,e,Y),U(),W(l,h))}function V(se){let Y=m,Q=Y.fsQuad;Y.highPassUniforms.tDiffuse.value=se,Y.highPassUniforms.luminosityThreshold.value=r.bloomThreshold,Y.highPassUniforms.smoothWidth.value=r.bloomKnee,Q.material=Y.materialHighPassFilter,a.setRenderTarget(Y.renderTargetBright),a.clear(),Q.render(a);let ge=Y.renderTargetBright;for(let J=0;J<Y.nMips;J++){let le=Y.separableBlurMaterials[J];Q.material=le,le.uniforms.colorTexture.value=ge.texture,le.uniforms.direction.value=is.BlurDirectionX,a.setRenderTarget(Y.renderTargetsHorizontal[J]),a.clear(),Q.render(a),le.uniforms.colorTexture.value=Y.renderTargetsHorizontal[J].texture,le.uniforms.direction.value=is.BlurDirectionY,a.setRenderTarget(Y.renderTargetsVertical[J]),a.clear(),Q.render(a),ge=Y.renderTargetsVertical[J]}let Ue=Y.compositeMaterial;return Ue.uniforms.bloomStrength.value=r.bloomStrength==null?c.bloomStrength:r.bloomStrength,Ue.uniforms.bloomRadius.value=r.bloomRadius,Q.material=Ue,a.setRenderTarget(Y.renderTargetsHorizontal[0]),a.clear(),Q.render(a),Y.renderTargetsHorizontal[0].texture}function X(){if(a.toneMappingExposure=r.exposure,!p){a.render(e,t);return}let se=e.background,Y=!!(se&&se.isColor);a.getClearColor(b);let Q=a.getClearAlpha();Y?(y.copy(se).convertLinearToSRGB(),e.background=null,a.setClearColor(y,1)):(y.copy(b).convertLinearToSRGB(),a.setClearColor(y,Q));let ge=e.fog;ge&&(x.copy(ge.color),ge.color.convertLinearToSRGB()),a.setRenderTarget(d),a.render(e,t),ge&&ge.color.copy(x),Y&&(e.background=se),a.setClearColor(b,Q);let Ue=a.autoClear;a.autoClear=!1;let J=!!m&&(r.bloomStrength==null?c.bloomStrength:r.bloomStrength)>0;O("USE_BLOOM",J),J&&(v.uniforms.tBloom.value=V(d.texture));let le=v.uniforms,Te=r.gamma;le.tScene.value=d.texture,le.lift.value.fromArray(r.lift),le.gammaInv.value.set(1/Math.max(.001,Te[0]),1/Math.max(.001,Te[1]),1/Math.max(.001,Te[2])),le.gain.value.fromArray(r.gain),le.saturation.value=r.saturation,le.vignette.value=r.vignette,le.dither.value=r.dither;let Ie=r.vignette===0&&r.saturation===1&&[0,1,2].every(ae=>r.lift[ae]===0&&Te[ae]===1&&r.gain[ae]===1);O("USE_GRADE",!Ie),C.material=v,g&&(a.setRenderTarget(g),C.render(a),T.uniforms.tDiffuse.value=g.texture,C.material=T),a.setRenderTarget(null),C.render(a),a.autoClear=Ue}function ce(){E(),v.dispose(),T.dispose(),C.dispose(),a.setPixelRatio(s)}o&&df(a,e,c),U();{let se=a.getSize(new Ce);W(se.x,se.y)}return{render:X,setSize:W,setQuality:H,dispose:ce,params:r,get quality(){return c.name},get preset(){return c},get active(){return p},get supported(){return i},info:()=>({quality:c.name,active:p,width:u,height:f,samples:d?d.samples:0,target:d?d.texture.type===ii?"half":"byte":"canvas",bloom:!!m,fxaa:!!g})}}function df(a,e,t){if(typeof t=="string"&&(t=Vn[t]),!t||!e)return;let n=a.shadowMap.type!==t.shadowType;a.shadowMap.type=t.shadowType,e.traverse(i=>{if(i.isLight&&i.castShadow&&i.shadow){let s=i.isPointLight?Math.min(t.shadowMapSize,1024):t.shadowMapSize;i.shadow.mapSize.x!==s&&(i.shadow.mapSize.set(s,s),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null))}if(i.isMesh&&i.userData&&i.userData.prop===!0&&(i.castShadow=!!t.propShadows),n&&i.material)for(let s of Array.isArray(i.material)?i.material:[i.material])s.needsUpdate=!0}),a.shadowMap.needsUpdate=!0}var wo;function Lx(a){if(a&&a.getContext&&(a=a.getContext()),!a&&wo!==void 0)return wo;let e="",t=null;try{if(!a&&typeof document!="undefined"&&(t=document.createElement("canvas"),a=t.getContext("webgl2",{powerPreference:"high-performance"})||t.getContext("webgl")),a){let n=a.getExtension("WEBGL_debug_renderer_info");if(e=n&&a.getParameter(n.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"",t){let i=a.getExtension("WEBGL_lose_context");i&&i.loseContext()}}}catch{e=""}return e=String(e),(t||wo===void 0)&&(wo=e),e}function Ix(a){if(!a)return null;if(/swiftshader|llvmpipe|softpipe|software|microsoft basic/i.test(a))return"Low";let e=a.match(/Adreno\D{0,8}(\d{3})/i);if(e){let t=+e[1];return t>=700||t>=630?"High":t>=615||t>=540?"Medium":"Low"}if(e=a.match(/Mali-?G(\d{2,3})/i),e){let t=e[1];if(t.length===3)return+t[0]>=7||+t>=610&&+t<615?"High":"Medium";let n=+t;return n>=76?"High":n>=71||n>=57?"Medium":"Low"}return/Immortalis|Xclipse|Apple|PowerVR.*(BXM|DXT|CXT)/i.test(a)?"High":/Mali-T|Mali-4|PowerVR|Vivante|VideoCore|Tegra 3/i.test(a)?"Low":/NVIDIA|GeForce|Radeon|AMD|Intel.*(Iris|Arc|Xe)/i.test(a)?"High":/Intel/i.test(a)?"Medium":null}function Vl(a){let e=typeof navigator!="undefined"?navigator:{},t=e.hardwareConcurrency||4,n=e.deviceMemory,i=typeof screen!="undefined"?screen:{width:1280,height:720},s=typeof window!="undefined"&&window.devicePixelRatio||1,r=i.width*i.height*s*s,o=Ix(Lx(a));return o||(o=t>=8&&(n==null||n>=6)?"High":t>=6&&(n==null||n>=4)?"Medium":"Low"),n!=null&&n<=2?o="Low":n!=null&&n<=3&&o==="High"&&(o="Medium"),t<=4&&o==="High"&&(o="Medium"),r>45e5&&o==="Medium"&&(o="Low"),o}var gf="sigilbound.gfx.v1";function Dx(){try{let a=JSON.parse(localStorage.getItem(gf)||"null");return a&&typeof a=="object"?a:null}catch{return null}}function kx(a){try{localStorage.setItem(gf,JSON.stringify(a))}catch{}}function bf(a={}){let{onChange:e,sampleSeconds:t=3,minFps:n=50,upFps:i=58,warmupWindows:s=1,upWindows:r=4}=a,o=Dx(),c=o&&Vn[o.forced]?o.forced:null,l=c||(o&&Vn[o.tier]?o.tier:null)||(Vn[a.initial]?a.initial:null)||Vl(),h=!c,u=-1,f=0,d=0,g=s,m=0,p=0,b=[],y=!1,x=0,v=()=>kx({tier:l,forced:c,t:Date.now()});function T(j){f=j,d=0,b=[]}function C(j,W){!Vn[j]||j===l||(l=j,g=s,m=0,v(),e&&e(j,Vn[j],W))}function O(){if(b.length<20)return!1;let j=b.slice().sort((V,X)=>V-X),W=j[Math.floor(j.length/2)];return j[Math.floor(j.length*.9)]<=W*1.25}function w(j){p=j;let W=O();if(!h)return;if(g>0){g--;return}let H=Mo.indexOf(l);if(j<n){if(m=0,W)return;H<Mo.length-1&&(y=!0,C(Mo[H+1],"slow"))}else j>=i&&H>0&&!y&&x<1?++m>=r&&(x++,C(Mo[H-1],"fast")):m=0}function E(j){if(j==null&&(j=performance.now()),u<0){u=j,T(j);return}let W=j-u;if(u=j,W>1e3||W<=0){T(j);return}d++,b.push(W);let H=j-f;H>=t*1e3&&(w(d*1e3/H),T(j))}function U(j){if(j==null||j==="auto"){c=null,h=!0,g=s,m=0,v(),e&&e(l,Vn[l],"auto");return}if(!Vn[j])return;let W=j!==l;c=j,h=!1,l=j,v(),W&&e&&e(j,Vn[j],"forced")}return{tick:E,force:U,get current(){return l},get preset(){return Vn[l]},get fps(){return p},get forced(){return c},get auto(){return h},set auto(j){h=!!j,h&&(c=null,v())}}}un.legacyMode=!1;var kn=Object.assign({tone:"aces",exposure:1.3,hemi:1.25,sun:2,rim:.8,front:.6,groundLift:.3,shadow:2048,pixelRatio:2},window.SB_GFX||{}),Fx=(()=>{let a=null,e=null,t=null,n=null,i=0,s=0,r=new Map,o=[],c=[],l=[],h=new I,u=0,f=0,d=new Map,g={},m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=()=>typeof G!="undefined"&&G.settings&&G.settings.speed||1,b=null;function y(){if(b!==null)return b;try{let M=document.createElement("canvas");return b=!!(M.getContext("webgl2")||M.getContext("webgl"))}catch{return b=!1}}let x={hask:"monarch",ulfgar:"monarch",gorrum:"monarch",thrain:"monarch",corvan:"monarch",odo:"monarch",mira:"hooded",wren:"hooded",kettle:"adventurer",ysolde:"hooded",nyx:"hooded",tamsin:"hooded",velka:"hooded",aurelia:"monarch",sable:"hooded",maelis:"monarch",morwenna:"hooded",seraphine:"hooded",brannoc:"adventurer",pell:"adventurer",lumen:"adventurer",kaito:"adventurer",oriel:"adventurer",vaelith:"adventurer"},v={hooded:"hooded_adventurer",adventurer:"adventurer",monarch:"monarch",titan:"yeti"},T={hooded:{DarkBrown:"armor",Black:"cloth",Brown:"cloth",LightBrown:"accent",Gold:"accent",Metal:"trim",Metal_Dark:"blade",Brown2:"wood",Skin:"skin","head:Black":"cloth","head:Brown":"eye","head:DarkBrown":"hood",White:"hair"},adventurer:{LightGreen:"armor",Green:"cloth",Brown:"pants",Brown2:"pants",Black:"boot",Grey:"boot",Hair:"hair",Eyebrows:"hair",Gold:"accent",Skin:"skin",Eye:"eye"},monarch:{Metal:"armor",Metal_Dark:"trim",Blue:"cloth",DarkBrown:"pants",Beige:"accent",Gold:"crown",Hair_White:"hair",Skin:"skin",Eye:"eye"},titan:{Yeti_Main:"stone",Yeti_Secondary:"stoneDark",Eye_White:"socket",Eye_Black:"maw",Yeti_Teeth:"fang",Tongue:"tongue"}},C={monarch:{head:"King_Head",body:"King_Body",legs:"King_Legs",feet:"King_Feet"},hooded:{head:"Medieval_Head",body:"Medieval_Body",legs:"Medieval_Legs",feet:"Medieval_Feet"},adventurer:{head:"Adventurer_Head",body:"Adventurer_Body",legs:"Adventurer_Legs",feet:"Adventurer_Feet"}},O={brannoc:{bulk:[.96,1,.96]},mira:{hide:["hood"],parts:{legs:"adventurer"},h:.95,head:1.04},pell:{shave:!0,h:.9,head:1.08,bulk:[.92,1,.95],arms:.94},odo:{bald:!0,parts:{body:"adventurer",legs:"adventurer"},h:1.03,bulk:[1.28,1.05,1.3],arms:1.3,legs:1.25,sh:.035,head:.94},wren:{h:.94},kettle:{parts:{head:"monarch",body:"hooded"},shave:!0,h:1.02,arms:1.15,bulk:[1.08,1,1.05],head:.95},ysolde:{hide:["hood"],bulk:[.94,1,.94]},corvan:{parts:{body:"adventurer"},h:.97},hask:{h:1,bulk:[1.15,1,1.12],sh:.025,arms:1.1},lumen:{shave:!0,parts:{body:"monarch"},h:1.06,head:.93},nyx:{h:.97,bulk:[.9,1,.9],arms:.92,legs:.92},tamsin:{hide:["hood"],parts:{body:"adventurer"},h:.98},gorrum:{bald:!0,h:1.1,bulk:[1.3,1.05,1.25],arms:1.3,legs:1.25,sh:.04,head:.92},velka:{hide:["hood"],h:1.03,bulk:[.92,1,.92]},aurelia:{hide:["hood"],parts:{head:"hooded"},h:1.03,head:1.02},sable:{hide:["hood"],h:1},kaito:{shave:!0,parts:{body:"hooded"},h:1.02,head:.96},maelis:{hide:["hood"],parts:{head:"hooded",legs:"hooded",feet:"hooded"},h:1.04},thrain:{parts:{body:"adventurer"},h:.88,bulk:[1.25,1,1.2],arms:1.25,legs:1.2,head:1.06,sh:.02},oriel:{shave:!0,h:1.04},vaelith:{hide:["hair"],parts:{body:"monarch",legs:"monarch",feet:"monarch"},h:1.06,head:.94},morwenna:{hide:["hood"],h:1.06},seraphine:{hide:["hood"],h:1.02},ulfgar:{h:1.08,bulk:[1.25,1.05,1.2],arms:1.2,legs:1.15,sh:.03}},w=M=>Object.assign({},O[M],(window.SB_BODY_TEST||{})[M]),E={idle:["Idle_Sword","Idle"],melee:["Sword_Slash","Punch_Right","Punch"],cast:["Gun_Shoot","Interact","Weapon","Punch"],hit:["HitRecieve","HitReact"],die:["Death"]},U={},j=!1,W,H=new Promise(M=>{W=M});function V(){let M=new mo;M.setMeshoptDecoder(ef);let _=window.SB_MODEL_DATA||{},S=N=>_[N]?M.parseAsync(Uint8Array.from(atob(_[N]),B=>B.charCodeAt(0)).buffer,""):M.loadAsync(`models/${N}.glb`),z=Object.entries(v).map(([N,B])=>S(B).then(F=>{F.scene.updateMatrixWorld(!0);let Z=1.55;F.scene.traverse(ne=>{if(ne.isBone&&ne.name==="Head"){let Me=new I;ne.getWorldPosition(Me),Z=Me.y}});let P={};for(let ne of F.animations)P[ne.name.split("|").pop()]=ne;U[N]={scene:F.scene,clips:P,headY:Z}}).catch(F=>console.warn("Sigilbound: model failed to load",B,F)));Promise.all(z).then(()=>{j=!0,W()})}let X=(M=8e3)=>Promise.race([H,new Promise(_=>setTimeout(_,M))]).then(()=>{j=!0});function ce(){return g.box||(g.box=new Di(1,1,1),g.sphere=new ws(.5,20,14),g.capsule=new $a(.5,1,6,14),g.cyl=new fi(.5,.5,2,20),g.rod=new fi(.5,.5,1,18),g.disc=new fi(.5,.5,1,36),g.cone=new eo(.5,1,18),g.taper=new fi(.5,.32,1,36,4),g.bell=new fi(.22,.5,1,16),g.ring=new ir(.5,.07,8,40),g.hook=new ir(.5,.18,6,14,Math.PI*1.25),g.crook=new ir(.5,.2,6,12,Math.PI),g.octa=new to(.5),g.half=new fi(.5,.5,1,12,1,!1,0,Math.PI),g.dome=new ws(.5,24,10,0,Math.PI*2,0,Math.PI/2),g.bbox=lf(1,1,1,.14,2),g.breast=hf(.3,.27,.03,.07,{curve:.17,curveY:.45,cornerSeg:4,seg:6})),g}function se(M,_=0){let S=`l${M}${_}`;return d.has(S)||d.set(S,new si({color:new Le(M),roughness:_?.35:.65,metalness:_})),d.get(S)}function Y(M,_=1){let S=`g${M}${_}`;return d.has(S)||d.set(S,new Qt({color:new Le(M),transparent:_<1,opacity:_,depthWrite:_>=1,toneMapped:!1})),d.get(S)}function Q(M,_,S,z,N,B){let F=new yt(typeof M=="string"?ce()[M]:M,N);return F.position.set(S[0],S[1],S[2]),F.scale.set(z[0],z[1],z[2]),B&&(F.rotation.order="YXZ",F.rotation.set(B[0]*Math.PI/180,B[1]*Math.PI/180,B[2]*Math.PI/180)),F.castShadow=!0,_.add(F),F}let ge=new Map;function Ue(M,_,S,z,N=16,B=8){let F=[M,_,S,z].join("|");if(ge.has(F))return ge.get(F);let Z=[],P=[],ne=[];for(let re=0;re<=B;re++)for(let ve=0;ve<=N;ve++){let Ve=ve/N,rt=re/B,Se=M+(_-M)*rt,et=Ve*2-1;Z.push(et*Se/2,-rt*S,-z*(1-et*et)*(.7+.3*rt)+Math.sin(et*3+1)*.012*rt),P.push(Ve*Se*3,rt*S*3)}for(let re=0;re<B;re++)for(let ve=0;ve<N;ve++){let Ve=re*(N+1)+ve,rt=Ve+1,Se=Ve+N+1,et=Se+1;ne.push(Ve,Se,rt,rt,Se,et)}let Me=new Tt;Me.setAttribute("position",new it(Z,3)),Me.setAttribute("uv",new it(P,2)),Me.setIndex(ne),Me.computeVertexNormals();let be=Me.toNonIndexed();return be.computeVertexNormals(),ge.set(F,be),be}function J(M,_){let S=new Ot;return S.position.set(_[0],_[1],_[2]),M.add(S),S}let le=(M,_,S)=>"#"+new Le(M).lerp(new Le(_),S).getHexString(),Te=(M,_)=>"#"+new Le(M).multiplyScalar(_).getHexString();function Ie(M,_){let S=document.createElement("canvas");S.width=2,S.height=256;let z=S.getContext("2d"),N=z.createLinearGradient(0,0,0,256);N.addColorStop(0,M),N.addColorStop(1,_),z.fillStyle=N,z.fillRect(0,0,2,256);let B=new ki(S);return B.encoding=ot,B}function ae(){let M=document.createElement("canvas");M.width=M.height=128;let _=M.getContext("2d");_.fillStyle="#b8b8b8",_.fillRect(0,0,128,128);let S=7,z=()=>(S=(S*9301+49297)%233280)/233280;for(let B=0;B<260;B++){let F=150+Math.floor(z()*105),Z=2+z()*9;_.fillStyle=`rgba(${F},${F},${F},0.18)`,_.beginPath(),_.arc(z()*128,z()*128,Z,0,7),_.fill()}let N=new ki(M);return N.wrapS=N.wrapT=ni,N.encoding=ot,N}let tt=null;function We(){if(tt)return tt;let M=document.createElement("canvas");M.width=M.height=64;let _=M.getContext("2d"),S=_.createRadialGradient(32,32,0,32,32,32);return S.addColorStop(0,"rgba(255,255,255,1)"),S.addColorStop(.4,"rgba(255,255,255,.6)"),S.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=S,_.fillRect(0,0,64,64),tt=new ki(M)}function qe(M){return[["#1f2b46","#c9805a","#2a2a22","#16141f"],["#16283a","#4f7c8a","#1c2a2a","#0e1a22"],["#2a1a1e","#a8483a","#2e1a1c","#160c0e"],["#1a2e2a","#7fa088","#23362a","#101c16"],["#28203a","#c8a870","#2c2640","#14101e"],["#2a2438","#e0b0d0","#3a2e4a","#ffd0f0"],["#101a2e","#5a7ab0","#1a2440","#0c1220"],["#0e0a16","#3a2a5a","#180f26","#b080ff"],["#0e1a2a","#2a5a7a","#10283c","#80e0ff"],["#1a0a0a","#ff6a2a","#24100c","#100606"]][((M||0)%10+10)%10]}function Be(M,_){Wn(),n=M,Je=!!_.titan,a=new ia({antialias:!0,alpha:!1,powerPreference:"high-performance"}),a.setPixelRatio(Math.min(kn.pixelRatio,window.devicePixelRatio||1)),a.outputEncoding=ot,a.toneMapping=kn.tone==="aces"?ta:kn.tone==="linear"?sl:Un,a.toneMappingExposure=kn.exposure,a.shadowMap.enabled=!0,a.shadowMap.type=ea,a.domElement.className="w3d-canvas",M.prepend(a.domElement),e=new ji;let S=_.titan?["#1a0a0a","#c0401a","#24100c","#100606"]:qe(_.chapter);e.background=Ie(S[0],S[1]),e.fog=new ja(new Le(S[1]),18,48),e.environment=xo(a),e.add(new or(new Le(le(S[1],"#ffffff",.35)),new Le(S[2]),kn.hemi));let z=new Dn(16773597,kn.sun);z.position.set(-5,10,6),z.castShadow=!0,z.shadow.mapSize.set(kn.shadow,kn.shadow),z.shadow.radius=3,z.shadow.bias=-4e-4,z.shadow.normalBias=.02,Object.assign(z.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),e.add(z);let N=new Dn(10070783,kn.rim);N.position.set(4,5,-8),e.add(N);let B=new Dn(16777215,kn.front);B.position.set(0,4,10),e.add(B);let F=new si({color:new Le(le(S[2],"#8c8680",kn.groundLift)),roughness:1,map:ae()});F.map.repeat.set(24,24);let Z=new yt(new Wi(120,120),F);Z.rotation.x=-Math.PI/2,Z.receiveShadow=!0,e.add(Z);let P=new yt(new Yi(3.4,3.6,64),Y("#ffffff",.08));P.rotation.x=-Math.PI/2,P.position.set(0,.01,-.6),P.scale.set(1.25,1,1),e.add(P),St(_.titan?2:(_.chapter||0)%5,S,_.chapter||0),t=new Jt(50,1,.1,150);let ne=vn(a);try{At=mf(a,e,t,{quality:ne.current}),At.params.exposure=kn.exposure}catch(Me){console.warn("Sigilbound: post-processing unavailable",Me),At=null}a.domElement.addEventListener("webglcontextrestored",()=>{At&&wt&&At.setQuality(wt.current)}),gt(),window.addEventListener("resize",gt),s=performance.now(),i=requestAnimationFrame(br)}function St(M,_,S){let z=S*9301+49297,N=()=>(z=(z*9301+49297)%233280)/233280,B=se(_[3]),F=Y(le(_[1],"#ffffff",.3),.7);for(let Z=0;Z<30;Z++){let P=N()*Math.PI*2,ne=7.5+N()*10,Me=Math.cos(P)*ne,be=Math.sin(P)*ne*.8-5;if(be>4||be>-4.5&&Math.abs(Me)<7)continue;let re=.6+N()*1.4;M===0?(Q("cyl",e,[Me,.65*re,be],[.25*re,.65*re,.25*re],B),Q("capsule",e,[Me,2*re,be],[1.4*re,.8*re,1.4*re],B)):M===1||M===3?Q("cyl",e,[Me,.5*re,be],[.12,.5*re,.12],B):M===2?Q("box",e,[Me,.7*re,be],[1.2*re,1.6*re,1*re],B,[N()*30-15,N()*90,N()*30-15]):Z%2?Q("box",e,[Me,1.2*re,be],[.5*re,2.4*re,.5*re],B):Q("box",e,[Me,.8*re,be],[.35*re,1.6*re,.35*re],F,[0,45,N()*40-20])}}let st=new I(0,1,-.5),Je=!1,rn=50,At=null,wt=null;function vn(M){return wt||(wt=bf({initial:Vl(M),onChange:_=>{At&&At.setQuality(_)}})),wt}function jt(M){vn(a).force(M||"auto")}function gt(){if(!a||!n)return;let M=n.clientWidth||1,_=n.clientHeight||1;At?At.setSize(M,_):a.setSize(M,_,!1),t.aspect=M/_,t.fov=rn=t.aspect<.75?62:50;let S=34*ze,z=[];for(let P of[-1,1]){for(let ne of[0,2.75])z.push([P*2.35,ne,2.6]),z.push([P*2.35,ne,2]);for(let ne of[0,3.2])z.push([P*2.45,ne,-3.2])}z.push([0,3.75,-3.7]),Je&&(z.push([0,5.6,-3.8]),z.push([-2.3,3.4,-3.8]),z.push([2.3,3.4,-3.8]));let N=new I,B=P=>(t.position.set(st.x,st.y+Math.sin(S)*P,st.z+Math.cos(S)*P),t.lookAt(st),t.updateMatrixWorld(),t.updateProjectionMatrix(),z.every(ne=>(N.set(ne[0],ne[1],ne[2]).project(t),Math.abs(N.x)<=.95&&N.y<=.84&&N.y>=-.84))),F=5,Z=40;for(let P=0;P<22;P++){let ne=(F+Z)/2;B(ne)?Z=ne:F=ne}B(Z),h.copy(t.position)}function Wn(){Mn=0,ai=0,Wt=0,xi++,cancelAnimationFrame(i),i=0,window.removeEventListener("resize",gt),a&&(At&&(At.dispose(),At=null),a.domElement.remove(),vo(a),a.dispose()),a=e=t=n=null,r.clear(),o=[],c=[],l=[]}function Fn(M,_){let S=N=>_?le(N,"#2e1f33",.5):N,z=SKIN[M.skin];return{armor:S(M.armor),cloth:S(M.cloth||Te(M.armor,.62)),pants:S(M.pants||le(M.cloth||M.armor,"#2a2522",M.cloth?.35:.6)),accent:S(M.accent),trim:S(M.trim||le(M.accent,"#c8ccd4",.4)),blade:S("#c8d0dc"),wood:S("#6b4a29"),boot:S(M.boot||"#2a1f1a"),hair:S(M.hair),brow:S(Te(M.hair,.8)),hood:S(M.hood||M.armor),skin:S(z),crown:S(M.accent),eye:_?"#ff2a2a":M.glow||"#1a141f"}}let k=(M,_,S)=>(T[M]||{})[`${_}:${S}`]||(T[M]||{})[S],A=(M,_)=>{let S=C[M];if(S){for(let z in S)if(S[z]===_)return z}return""};function fe(M,_,S){let z={};M.traverse(N=>{N.isBone&&(z[N.name]=N)});for(let[N,B]of Object.entries(S)){let F=M.getObjectByName(C[_][N]);if(B===_)continue;let Z=U[B],P=Z&&C[B]&&Z.scene.getObjectByName(C[B][N]);if(B!=="none"&&!P)continue;let ne=F?F.parent:M;if(F&&ne.remove(F),B==="none")continue;let Me=P.clone(!0);Me.traverse(be=>{if(be.userData.sbBase=B,be.userData.sbKind=N,!be.isSkinnedMesh)return;let re=be.skeleton;be.bind(new Xi(re.bones.map(ve=>z[ve.name]||ve),re.boneInverses.map(ve=>ve.clone())),be.bindMatrix.clone())}),ne.add(Me)}}function Ae(M,_){let S={};M.traverse(B=>{B.isBone&&(S[B.name]=B)});let z=new bn,N=(B,F)=>{if(B){B.scale.set(F[0],F[1],F[2]);for(let Z of B.children){if(!Z.isBone)continue;z.setFromMatrix4(new nt().makeRotationFromQuaternion(Z.quaternion));let P=z.elements,ne=[1/F[0],1/F[1],1/F[2]];Z.scale.set(P[0]*P[0]*ne[0]+P[1]*P[1]*ne[1]+P[2]*P[2]*ne[2],P[3]*P[3]*ne[0]+P[4]*P[4]*ne[1]+P[5]*P[5]*ne[2],P[6]*P[6]*ne[0]+P[7]*P[7]*ne[1]+P[8]*P[8]*ne[2])}}};if(_.bulk&&N(S.Chest,_.bulk),_.arms)for(let B of["UpperArmL","UpperArmR","LowerArmL","LowerArmR"])N(S[B],[_.arms,1,_.arms]);if(_.legs)for(let B of["UpperLegL","UpperLegR"])N(S[B],[_.legs,1,_.legs]);if(_.sh)for(let[B,F]of[["ShoulderL",1],["ShoulderR",-1]]){let Z=S[B];if(!Z)continue;M.updateMatrixWorld(!0);let P=new I;Z.parent.getWorldScale(P),Z.position.x+=F*_.sh*M.scale.x/(P.x||1)}_.head&&S.Head&&S.Head.scale.multiplyScalar(_.head)}let Re=new Map;function Fe(M,_){let S=M.geometry.uuid+_;if(Re.has(S))return Re.get(S);let z=M.skeleton,N=z.bones.findIndex(ve=>ve.name==="Head"),B=M.geometry,F=B.attributes.position,Z=B.index,P=new nt().multiplyMatrices(z.boneInverses[N],M.bindMatrix),ne=new I,Me=[],be=Z?Z.count:F.count;for(let ve=0;ve<be;ve+=3){let Ve=0,rt=0;for(let et=0;et<3;et++)ne.fromBufferAttribute(F,Z?Z.getX(ve+et):ve+et).applyMatrix4(P).multiplyScalar(100),Ve+=ne.y/3,rt+=ne.z/3;if((Ve<.075&&rt>-.03)===(_==="beard"))for(let et=0;et<3;et++)Me.push(Z?Z.getX(ve+et):ve+et)}let re=B.clone();return re.setIndex(Me),Re.set(S,re),re}function Qe(M,_,S,z,N){let B=U[_];if(!B)return null;let F=_==="titan"?null:LOOKS[M]||LOOKS.brannoc,Z=_==="titan"?{}:w(M),P=F&&F.kit||{},ne=tf(B.scene),Me=P.robe==="long"?Object.assign({legs:"none"},Z.parts):Z.parts;Me&&fe(ne,_,Me);let be=[],re=z&&ELEMENTS[z]?ELEMENTS[z].color:"#e8553a",ve=_==="titan"?{stone:"#16130f",stoneDark:"#0c0a09",fang:"#0e0c0a",socket:"#040303",tongue:"#0a0606"}:Fn(F,S),Ve=new Set(Z.hide||[]),rt=F&&F.gear==="crown"&&!Ve.has("crown");ne.traverse(Ht=>{if(!Ht.isMesh)return;Ht.castShadow=!0,Ht.frustumCulled=!1;let an=_,Ut="";for(let qt=Ht;qt&&qt!==ne;qt=qt.parent)if(qt.userData.sbBase){an=qt.userData.sbBase,Ut=qt.userData.sbKind;break}if(!Ut)for(let qt=Ht;qt&&qt!==ne&&!Ut;qt=qt.parent)Ut=A(_,qt.name);!Array.isArray(Ht.material)&&k(an,Ut,Ht.material.name)==="hair"&&Ut==="head"&&an!=="hooded"&&(Z.shave||Z.bald)&&(Ht.geometry=Fe(Ht,Z.bald?"beard":"scalp"));let D=qt=>{let dt=k(an,Ut,qt.name),Rt=qt.clone();if(dt==="crown"&&!rt||dt==="tongue"||Ve.has(dt)||Ve.has(`${Ut}:${dt}`))return Rt.visible=!1,Rt;if(dt==="maw")return Rt.color.set(Te(re,.3)),Rt.emissive=new Le(re),Rt.emissiveIntensity=1.8,Rt.metalness=0,Rt;if(dt==="eye"&&(S||F&&F.glow))return Rt.color.set(ve.eye),Rt.emissive=new Le(ve.eye),Rt.emissiveIntensity=3,Rt;dt&&dt!=="keep"&&ve[dt]?Rt.color.set(ve[dt]):S&&Rt.color.lerp(new Le("#2e1f33"),.5),dt==="armor"&&an==="monarch"&&(Rt.metalness=.2,Rt.roughness=.55),_==="titan"&&(Rt.metalness=0,Rt.roughness=.95),(dt==="blade"||dt==="trim")&&(Rt.metalness=.3,Rt.roughness=.5);let Dt=dt==="armor"&&an==="monarch"||dt==="trim"||dt==="blade"||dt==="crown";return Rt.envMapIntensity=_==="titan"?.15:Dt?.8:.25,_!=="titan"&&(Rt.roughness=Dt?.5:.8,Rt.metalness=Dt?.3:0),P.seams&&(dt==="armor"||dt==="trim"||dt==="pants")&&ft(Rt,S?"#ff2a2a":P.seams,be,P.seamScale||3.2),Rt};Ht.material=Array.isArray(Ht.material)?Ht.material.map(D):D(Ht.material)});let Se=new Ot;Se.add(ne);let et=_==="titan"?3.6:1.85,oi=Z.h||1;ne.scale.setScalar(et/B.headY*oi);let ci=new co(ne),bt=Ht=>{for(let an of E[Ht])if(B.clips[an])return B.clips[an];return null},xt={};for(let Ht of Object.keys(E)){let an=bt(Ht);an&&(xt[Ht]=ci.clipAction(an))}let $=Ge(ci,B,_==="titan"?Ze:Ke(M,F),xt);return F?(mt(M,F,_,ne,S,be,Z,N),He(ne,`${M}|${S?1:0}|${_}|${Yt(N)}`),Mt(ne,`${M}|${S?1:0}|${_}`),Ae(ne,Z)):_n(ne,z,be),{model:Se,mixer:ci,actions:xt,anim:$,fx:be,height:_==="titan"?4.7:2.3*oi}}let Ne={odo:1,kettle:1,gorrum:1,thrain:1},xe={candle:1,mirror:1,bell:1,orb:1,lantern:1};function Ke(M,_){let S=_.prop;return{idle:xe[S]?"Idle_Neutral":S==="bow"?"Idle_Gun":"Idle_Sword",strike:Ne[M]?["Punch_Right","Punch_Left","Kick_Right"]:S==="daggers"?["Sword_Slash","Punch_Left","Kick_Left"]:S==="spear"||S==="trident"?["Sword_Slash","Kick_Right"]:["Sword_Slash","Sword_Slash","Kick_Right"],cast:"Gun_Shoot",support:"Interact",fidget:["Idle","Idle_Neutral","Interact"],win:"Wave"}}let Ze={idle:"Idle",strike:["Punch","Weapon","Punch"],cast:"Punch",support:"Yes",fidget:["No"],win:"Yes",titan:!0};function Ge(M,_,S,z){let N={},B=P=>_.clips[P]?N[P]||(N[P]=M.clipAction(_.clips[P])):null,F=_.clips[S.idle]?S.idle:Object.keys(_.clips).find(P=>/^Idle/.test(P)),Z={S,cur:null,strikeN:0,hold:!1,has:P=>!!_.clips[P],play(P,ne={}){let Me=B(P);if(!Me)return null;let be=Z.cur;return Me.reset(),Me.setLoop(ne.loop?ho:al,ne.loop?1/0:1),Me.clampWhenFinished=!!ne.clamp,Me.setEffectiveTimeScale(ne.speed||(S.titan&&P===F?.7:1)),Me.setEffectiveWeight(1),Me.play(),be&&be!==Me&&be.crossFadeTo(Me,ne.fade==null?.18:ne.fade,!1),Z.cur=Me,Z.hold=!!ne.hold,Me},idle(P=.25){return Z.play(F,{loop:!0,fade:P})},strike(){let P=S.strike.filter(ne=>_.clips[ne]);return Z.play(P[Z.strikeN++%P.length]||"Sword_Slash",{fade:.1})},duration:P=>_.clips[P]?_.clips[P].duration:0};return F&&(z.idle=B(F)),Z.idle(0),M.addEventListener("finished",P=>{P.action!==Z.cur||P.action.clampWhenFinished||Z.hold||Z.idle(.22)}),Z}let je=new Map,ze=Math.PI/180,ht={monarch:{top:.26,r:.13,face:.15,eye:.09,crown:.18},adventurer:{top:.25,r:.12,face:.14,eye:.09,crown:.18},hooded:{top:.27,r:.15,face:.16,eye:.09,crown:.25},hair:{top:.25,r:.12,face:.14,eye:.1,crown:.2},bald:{top:.235,r:.11,face:.135,eye:.09,crown:.17}};function Et(M){M.updateMatrixWorld(!0);let _=new Map;return M.traverse(S=>{if(!S.isMesh)return;let z=S.geometry.clone().applyMatrix4(S.matrixWorld),N=z.index?z.toNonIndexed():z;_.has(S.material)||_.set(S.material,[]),_.get(S.material).push(N)}),[..._].map(([S,z])=>({mat:S,geo:po(z)}))}let Ft=new Map,q=new Map;function ue(M){if(M.transparent&&M.isMeshBasicMaterial){let N=M.opacity<.45?.3:.6,B=`glow|${N}`,F=Ft.get(B);return F||(F=M.clone(),F.color=new Le(1,1,1),F.opacity=N,F.vertexColors=!0,F.userData.shared=!0,Ft.set(B,F)),{key:B,mat:F}}let _=N=>N==null?"":N.toFixed(2);if(M.userData.crack){let N=`crack|${M.userData.crack}|${_(M.roughness)}|${_(M.metalness)}`,B=Ft.get(N);return B||(B=M.clone(),B.onBeforeCompile=M.onBeforeCompile,B.customProgramCacheKey=M.customProgramCacheKey,B.color=new Le(1,1,1),B.vertexColors=!0,B.userData.shared=!0,Ft.set(N,B)),{key:N,mat:B}}let S=[M.type,M.map?M.map.uuid:"",_(M.roughness),_(M.metalness),M.side,M.transparent?M.opacity:1,_(M.envMapIntensity),M.bumpScale||0,M.emissive?M.emissive.getHexString()+M.emissiveIntensity:""].join("|"),z=Ft.get(S);return z||(z=M.clone(),z.color=new Le(1,1,1),z.vertexColors=!0,z.userData.shared=!0,Ft.set(S,z)),{key:S,mat:z}}let we=M=>{let _=M.count,S=M.itemSize,z=new Float32Array(_*S),N=[M.getX,M.getY,M.getZ,M.getW];for(let B=0;B<_;B++)for(let F=0;F<S;F++)z[B*S+F]=N[F].call(M,B);return new kt(z,S)};function Oe(M,_,S){let z=new Tt;for(let Z of["position","normal","uv",...S?["skinIndex","skinWeight"]:[]])M.attributes[Z]&&z.setAttribute(Z,we(M.attributes[Z]));M.index&&z.setIndex(M.index);let N=z.index?z.toNonIndexed():z;N.attributes.uv||N.setAttribute("uv",new it(new Float32Array(N.attributes.position.count*2),2));let B=N.attributes.position.count,F=new Float32Array(B*3);for(let Z=0;Z<B;Z++)F[Z*3]=_.r,F[Z*3+1]=_.g,F[Z*3+2]=_.b;return N.setAttribute("color",new kt(F,3)),N}function He(M,_){let S=[];if(M.traverse(P=>{P.isMesh&&P.userData.kit&&S.push(P)}),!S.length)return;let z=S.map(P=>{let ne=new _s;return P.add(ne),P.visible=!1,ne}),N=q.get(_);if(!N){let P=new Map;S.forEach((ne,Me)=>{let be=ue(ne.material),re=Oe(ne.geometry,ne.material.color,!1),ve=re.attributes.position.count,Ve=new Uint16Array(ve*4),rt=new Float32Array(ve*4);for(let Se=0;Se<ve;Se++)Ve[Se*4]=Me,rt[Se*4]=1;re.setAttribute("skinIndex",new vs(Ve,4)),re.setAttribute("skinWeight",new it(rt,4)),P.has(be.key)||P.set(be.key,{mat:be.mat,list:[]}),P.get(be.key).list.push(re)}),N=[...P.values()].map(({mat:ne,list:Me})=>({mat:ne,geo:po(Me)})),q.set(_,N)}M.updateMatrixWorld(!0);let B=new Ot;M.add(B),B.updateMatrixWorld(!0);let F=B.matrixWorld.clone().invert(),Z=new Xi(z,z.map(()=>F.clone()));for(let{mat:P,geo:ne}of N){let Me=new ys(ne,P);Me.frustumCulled=!1,Me.castShadow=!P.isMeshBasicMaterial,Me.userData.kitMerged=1,B.add(Me),Me.updateMatrixWorld(!0),Me.bind(Z,Me.matrixWorld.clone())}}function Mt(M,_){let S=[];M.traverse(F=>{F.isSkinnedMesh&&!F.userData.kit&&!F.userData.kitMerged&&F.parent&&!F.parent.isBone&&S.push(F)});let z=[],N=(F,Z)=>F.elements.every((P,ne)=>Math.abs(P-Z.elements[ne])<.001*(1+Math.abs(P))),B=(F,Z)=>{let P=null;for(let ne=0;ne<Z.skeleton.bones.length;ne++){let Me=F.bones.indexOf(Z.skeleton.bones[ne]);if(!(Me<0)){if(!P){P=F.inverses[Me].clone().invert().multiply(Z.skeleton.boneInverses[ne]);continue}if(!N(F.inverses[Me].clone().multiply(P),Z.skeleton.boneInverses[ne]))return null}}return P||new nt};for(let F of S){let Z=F.material;if(Array.isArray(Z)||Z.map)continue;if(!F.visible||!Z.visible){F.parent.remove(F);continue}let P=ue(Z),ne=null,Me=null;for(let re of z)if(re.key===P.key&&(Me=B(re,F))){ne=re;break}ne||(ne={key:P.key,mat:P.mat,bones:[],inverses:[],list:[],xs:[]},z.push(ne),Me=new nt);let be=Me.clone().invert();F.skeleton.bones.forEach((re,ve)=>{ne.bones.indexOf(re)<0&&(ne.bones.push(re),ne.inverses.push(F.skeleton.boneInverses[ve].clone().multiply(be)))}),ne.list.push(F),ne.xs.push(Me)}z.forEach((F,Z)=>{let P=F.list[0],ne=`${_}|${Z}|${F.key}|${F.list.length}`,Me=q.get(ne);if(!Me){let re=new nt,ve=new bn;Me=po(F.list.map((Ve,rt)=>{let Se=Oe(Ve.geometry,Ve.material.color,!0);re.copy(P.bindMatrix).invert().multiply(F.xs[rt]).multiply(Ve.bindMatrix),Se.applyMatrix4(re);let et=Se.attributes.skinIndex,oi=Ve.skeleton.bones.map(bt=>F.bones.indexOf(bt)),ci=new Uint16Array(et.count*4);for(let bt=0;bt<et.count;bt++)for(let xt=0;xt<4;xt++)ci[bt*4+xt]=Math.max(0,oi[Math.round(et.array[bt*4+xt])]);if(Se.setAttribute("skinIndex",new vs(ci,4)),Se.attributes.skinWeight.normalized||!(Se.attributes.skinWeight.array instanceof Float32Array)){let bt=Se.attributes.skinWeight,xt=new Float32Array(bt.count*4);for(let $=0;$<bt.count;$++)xt[$*4]=bt.getX($),xt[$*4+1]=bt.getY($),xt[$*4+2]=bt.getZ($),xt[$*4+3]=bt.getW($);Se.setAttribute("skinWeight",new it(xt,4))}return Se})),q.set(ne,Me)}let be=new ys(Me,F.mat);be.position.copy(P.position),be.quaternion.copy(P.quaternion),be.scale.copy(P.scale),be.castShadow=!0,be.frustumCulled=!1,P.parent.add(be),be.bind(new Xi(F.bones,F.inverses.map(re=>re.clone())),P.bindMatrix.clone());for(let re of F.list)re.parent.remove(re)})}function Xt(M){let _=new Ot;for(let{mat:S,geo:z}of M){let N=new yt(z,S);N.castShadow=!S.isMeshBasicMaterial,N.frustumCulled=!1,_.add(N)}return _}function zt(M,_,S,z,N=0){let B=new I;M.getWorldScale(B);let F=new Ot;F.scale.setScalar(_.scale.x/(B.x||1)),M.add(F);let Z=new Ot;if(Z.position.set(S[0],S[1],S[2]),z){let P=new I(z[0],z[1],z[2]).normalize();Z.quaternion.setFromUnitVectors(new I(0,1,0),P),N&&Z.quaternion.multiply(new ln().setFromAxisAngle(new I(0,1,0),N*ze))}return F.add(Z),Z}let ri=(M,_)=>[M==="R"?-Math.cos(_*ze):Math.cos(_*ze),-Math.sin(_*ze),0],Ct={R:[0,.075,.01],L:[0,.075,.01]},Nn=new nt,yn=new ln,pr=new I,mr=new I;function qn(M,_,S=[0,0,0]){_.updateMatrixWorld(!0),M.getWorldScale(mr);let z=new Ot;z.scale.setScalar(_.scale.x/(mr.x||1)),M.add(z),Nn.copy(_.matrixWorld).invert().multiply(M.matrixWorld).decompose(pr,yn,mr);let N=new Ot;return N.quaternion.copy(yn).invert(),N.position.set(S[0],S[1],S[2]).applyQuaternion(N.quaternion),z.add(N),N}function So(M,_){return _.updateMatrixWorld(!0),Nn.copy(_.matrixWorld).invert().multiply(M.matrixWorld),pr.setFromMatrixPosition(Nn).y}let R=["","#6b5d50","#9aa3ad","#c6ced8","#dfe3ea","#f0e6d0"],te=["","#8a7a68","#5bc46a","#4aa3ff","#b46cff","#ffb02e"],he={fury:"#ff4a3a",vigor:"#4ae07a",bulwark:"#b8b4aa",haste:"#3ad8cc",keen:"#ffd040"},K=M=>M?`${M.r}${M.s?M.s[0]:"-"}`:"0",pe={helm:1,horns:1},Xe={crown:1,halo:1,circlet:1,veil:1,mask:1},$e=new I,at=new ln;function ct(M,_){return(S,z)=>{M(S,z);let N=S.userData.sp||(S.userData.sp={p:new I,t:z,ax:0,az:0,vx:0,vz:0,on:!1}),B=Math.min(.05,Math.max(.001,z-N.t));if(N.t=z,!S.parent)return;S.parent.getWorldPosition($e),N.on||(N.p.copy($e),N.on=!0);let F=$e.clone().sub(N.p).divideScalar(B);N.p.copy($e),S.parent.getWorldQuaternion(at),F.applyQuaternion(at.invert());let Z=(Me,be,re)=>Math.max(be,Math.min(re,Me)),P=Z((F.z*.11-F.y*.05)*_,-.5,1),ne=Z(-F.x*.11*_,-.7,.7);N.vx+=((P-N.ax)*70-N.vx*9)*B,N.ax+=N.vx*B,N.vz+=((ne-N.az)*70-N.vz*9)*B,N.az+=N.vz*B,S.rotation.x+=N.ax,S.rotation.z+=N.az}}function mt(M,_,S,z,N,B,F={},Z=null){let P=_.kit||{},ne=F.parts&&F.parts.head||S,Me=new Set(F.hide||[]),be=ne==="hooded"&&!Me.has("hood"),re=be?ht.hooded:ne==="hooded"?ht.hair:F.bald||Me.has("hair")?ht.bald:ht[ne]||ht.adventurer,ve={};z.traverse(L=>{L.isBone&&(ve[L.name]=L)}),z.updateMatrixWorld(!0);let Ve=L=>N?le(L,"#2e1f33",.5):L,rt=wt?wt.preset.textureSize:256,Se=(L,ie=0)=>ie>=.5?mi("metal",Ve(L),{metalness:.75,size:rt}):ie>0?mi("leather",Ve(L),{roughness:.55,metalness:.35,size:rt}):mi("leather",Ve(L),{size:rt}),et=L=>mi("cloth",Ve(L),{side:gn,repeat:4,bump:.6,size:rt}),oi=L=>mi("wood",Ve(L),{size:rt}),ci=L=>mi("gold",Ve(L),{size:rt}),bt=(L,ie=1)=>Y(N?le(L,"#ff3355",.45):L,ie),xt=Z&&Z.weapon,$={steel:Se(xt?R[xt.r]:"#c4ccd6",xt&&xt.r===1?.3:.6),iron:Se("#4a4a52",.5),wood:oi("#6b4a29"),leather:Se("#3a2a20"),acc:Se(_.accent,.35),accG:bt(_.accent),accH:bt(_.accent,.28),armor:Se(_.armor),armorD:Se(Te(_.armor,.6)),gold:ci(le(_.accent,"#e8c070",.5)),glowC:bt(_.glow||_.accent),glowH:bt(_.glow||_.accent,.3),cloth:et(_.cloth||Te(_.armor,.62)),hair:mi("hair",Ve(_.hair),{size:rt})},Ht=(L,ie=.7)=>L===1?"#5a4232":le(R[L],_.armor,ie),an=L=>L>=4?ci(te[L]):Se(te[L],.4),Ut=(L,ie,ee,_e="")=>{let me=`${M}|${N?1:0}|${L}|${_e}`,ye=je.get(me);if(!ye){let Pe=new Ot,ke=[];ee(Pe,ke),ke.forEach(de=>Pe.remove(de.obj)),ye={baked:Et(Pe),live:ke},je.set(me,ye)}let oe=Xt(ye.baked);oe.traverse(Pe=>{Pe.isMesh&&(Pe.userData.kit=1)}),ie.add(oe);for(let Pe of ye.live){let ke=Pe.obj.clone();ie.add(ke),ke.traverse(de=>{de.isMesh&&(de.userData.kit=1)}),B.push(de=>Pe.fn(ke,de))}},D=(L,ie,ee,_e,me,ye)=>Q(ie==="box"?"bbox":ie,L,ee,_e,me,ye),qt=(L,ie)=>{let ee=L.userData.base,_e=1+Math.sin(ie*17+L.id)*.12+Math.sin(ie*29)*.06;L.scale.set(ee[0]*_e,ee[1]*(2-_e),ee[2]*_e)},dt=(L,ie)=>{let ee=L.userData.base,_e=1+Math.sin(ie*3+L.id)*.12;L.scale.set(ee[0]*_e,ee[1]*_e,ee[2]*_e)},Rt=(L,ie)=>(ee,_e)=>{ee.rotation[L]=_e*ie},Dt=(L,ie,ee,_e,me,ye,oe,Pe)=>{let ke=Array.isArray(me)?me:[me,me,me],de=D(L,ee,_e,ke,ye,Pe);return de.userData.base=ke.slice(),de.castShadow=!1,ie.push({obj:de,fn:oe}),de},os=(L,ie,ee,_e,me=0)=>{let ye=J(L,ee);return ie.push({obj:ye,fn:me?ct(_e,me):_e}),ye},Po={spear(L){if(D(L,"rod",[0,.3,0],[.042,1.75,.042],$.wood),D(L,"rod",[0,1.15,0],[.06,.07,.06],$.acc),D(L,"cone",[0,1.32,0],[.09,.28,.03],$.steel),D(L,"cone",[0,1.08,0],[.09,.12,.09],$.acc,[180,0,0]),P.pennant){let ie=et(P.pennant);D(L,"box",[0,1,.11],[.012,.13,.2],ie),D(L,"cone",[0,1,.27],[.12,.14,.012],ie,[90,90,0])}},staff(L,ie){let ee=P.staff||"orb",_e=P.staffLen||1,me=1.5*(_e-1),ye=ee==="ice"?Se("#cfe8f4",.2):ee==="sun"?$.gold:ee==="drift"?Se("#8a7458"):$.wood;if(D(L,"rod",[0,.3+me/2,0],[.05,1.5*_e,.05],ye),ee==="ice")D(L,"octa",[0,1.17+me,0],[.13,.32,.13],$.accG),D(L,"octa",[.07,1.06+me,0],[.06,.16,.06],$.accG,[0,0,-30]),D(L,"octa",[-.07,1.06+me,0],[.06,.16,.06],$.accG,[0,0,30]),Dt(L,ie,"sphere",[0,1.17+me,0],.34,$.accH,dt);else if(ee==="sun"){D(L,"sphere",[0,1.16+me,0],[.16,.16,.16],$.glowC);for(let oe=0;oe<8;oe++){let Pe=oe*45*ze;D(L,"cone",[Math.cos(Pe)*.15,1.16+me+Math.sin(Pe)*.15,0],[.04,.1,.04],$.gold,[0,0,oe*45-90])}Dt(L,ie,"sphere",[0,1.16+me,0],.42,$.glowH,dt)}else{if(ee==="drift"){for(let oe of[-1,1])D(L,"rod",[oe*.06,1.04+me,0],[.035,.22,.035],ye,[0,0,oe*-25]);D(L,"sphere",[0,.86+me,0],[.08,.06,.08],ye),D(L,"cone",[.06,.8+me,.03],[.06,.08,.02],Se("#f0e0c8"),[180,0,0])}else D(L,"ring",[0,1.12+me,0],[.2,.2,.2],$.acc),D(L,"cone",[0,1.01+me,0],[.07,.1,.07],$.acc,[180,0,0]);D(L,"sphere",[0,1.12+me,0],[.13,.13,.13],$.accG),Dt(L,ie,"sphere",[0,1.12+me,0],.3,$.accH,dt)}},hammer(L,ie){let ee=P.big?1.25:1;D(L,"rod",[0,P.big?.2:.25,0],[.045*ee,P.big?.85:.95,.045*ee],$.wood),P.big?(D(L,"box",[0,.62,0],[.32,.2,.2],Se("#2a2426",.5)),D(L,"box",[0,.62,0],[.34,.045,.21],$.accG),D(L,"box",[0,.62,0],[.045,.22,.22],$.accG),D(L,"cone",[.19,.62,0],[.11,.11,.11],Se("#2a2426",.5),[0,0,-90]),D(L,"rod",[0,-.2,0],[.07,.06,.07],$.iron)):(D(L,"box",[0,.68,0],[.3,.16,.16],$.iron),D(L,"box",[0,.68,0],[.32,.04,.17],$.acc),D(L,"box",[.16,.68,0],[.02,.15,.15],$.accG),D(L,"box",[-.16,.68,0],[.02,.15,.15],$.accG),Dt(L,ie,"sphere",[.16,.68,0],.22,$.accH,dt))},club(L){let ie=Se(_.accent);D(L,"taper",[0,.38,0],[.16,.8,.16],$.wood),D(L,"sphere",[0,.78,0],[.16,.14,.16],$.wood),D(L,"sphere",[.07,.62,.04],[.08,.08,.08],$.wood),D(L,"sphere",[-.06,.74,-.05],[.07,.07,.07],$.wood),D(L,"sphere",[.02,.84,.05],[.12,.07,.1],ie),D(L,"sphere",[-.08,.66,.02],[.07,.1,.07],ie),D(L,"rod",[0,.08,0],[.11,.12,.11],$.leather)},trident(L){D(L,"rod",[0,.28,0],[.042,1.6,.042],$.armorD),D(L,"box",[0,1.08,0],[.3,.04,.04],$.gold),D(L,"cone",[0,1.27,0],[.06,.34,.06],$.acc);for(let ie of[-.13,.13])D(L,"rod",[ie,1.16,0],[.03,.16,.03],$.acc),D(L,"cone",[ie,1.3,0],[.05,.14,.05],$.acc);D(L,"sphere",[0,1.08,0],[.07,.07,.07],$.accG)},katana(L){D(L,"rod",[0,.03,0],[.04,.26,.04],Se("#1c1c22")),D(L,"disc",[0,.17,0],[.1,.02,.1],$.gold),D(L,"box",[0,.48,0],[.012,.6,.045],$.steel),D(L,"box",[0,.92,-.025],[.012,.3,.04],$.steel,[-9,0,0]),D(L,"box",[0,.48,.03],[.014,.6,.016],$.glowC),D(L,"box",[0,.91,.006],[.014,.3,.016],$.glowC,[-9,0,0])},sword(L,ie){let ee=P.side==="sword"&&_.prop==="shield"?.8:1;if(D(L,"rod",[0,.02,0],[.04,.22,.04],$.leather),D(L,"sphere",[0,-.1,0],[.06,.06,.06],$.gold),D(L,"box",[0,.14,0],[.26,.04,.05],$.gold),D(L,"box",[0,.16+.45*ee,0],[.075,.9*ee,.022],$.steel),D(L,"cone",[0,.16+.9*ee+.05,0],[.075,.1,.022],$.steel),_.glow||P.flame){let _e=P.flame?bt(_.accent,.55):$.glowH;Dt(L,ie,"box",[0,.16+.47*ee,0],[.13,.98*ee,.05],_e,P.flame?qt:dt)}},axe(L){D(L,"rod",[0,.25,0],[.045,.85,.045],$.wood),D(L,"half",[0,.6,0],[.34,.025,.3],$.steel,[90,90,0]),D(L,"box",[0,.6,0],[.08,.12,.06],$.acc),D(L,"cone",[0,.72,0],[.05,.1,.05],$.acc)},dagger(L){D(L,"rod",[0,.01,0],[.034,.13,.034],$.leather),D(L,"box",[0,.09,0],[.12,.025,.03],$.acc),D(L,"cone",[0,.28,0],[.065,.36,.015],$.steel),D(L,"cone",[0,.28,0],[.09,.4,.02],$.glowH)},whip(L){D(L,"rod",[0,.06,0],[.045,.3,.045],$.leather),D(L,"sphere",[0,-.1,0],[.055,.055,.055],$.acc),D(L,"rod",[0,.2,0],[.06,.04,.06],$.acc)},hook(L){D(L,"rod",[0,.2,0],[.04,.7,.04],Se("#5a4034",.4)),D(L,"hook",[.09,.56,0],[.18,.18,.18],Se("#7a5a48",.5),[0,0,-20]),D(L,"cone",[.2,.52,0],[.04,.1,.04],Se("#7a5a48",.5),[0,0,150]),D(L,"rod",[0,-.12,0],[.06,.05,.06],$.acc),D(L,"rod",[0,-.2,0],[.012,.14,.012],$.iron)},bow(L){D(L,"rod",[0,0,0],[.04,.16,.04],$.leather);for(let ie of[1,-1])D(L,"rod",[0,ie*.22,-.02],[.03,.32,.03],$.wood,[ie*-8,0,0]),D(L,"rod",[0,ie*.5,-.09],[.024,.28,.024],$.wood,[ie*-28,0,0]),D(L,"sphere",[0,ie*.63,-.16],[.035,.035,.035],$.acc);D(L,"rod",[0,0,-.16],[.006,1.26,.006],$.accG)},lantern(L,ie){D(L,"rod",[0,.3,0],[.04,1.5,.04],$.wood),D(L,"crook",[.1,1.05,0],[.2,.2,.2],$.gold),D(L,"rod",[.2,.97,0],[.008,.12,.008],$.gold),D(L,"box",[.2,.84,0],[.13,.17,.13],Se(le(_.accent,"#6a4a20",.6),.5)),D(L,"cone",[.2,.95,0],[.16,.06,.16],$.gold),D(L,"sphere",[.2,.84,0],[.15,.13,.15],$.accG),Dt(L,ie,"sphere",[.2,.84,0],.4,$.accH,dt)},candle(L,ie){D(L,"disc",[0,.06,0],[.22,.03,.22],$.gold),D(L,"rod",[0,-.03,0],[.045,.16,.045],$.gold),D(L,"rod",[0,.2,0],[.11,.28,.11],Se("#f2e6c8")),D(L,"ring",[.13,.03,0],[.08,.08,.2],$.gold,[90,0,0]),Dt(L,ie,"cone",[0,.42,0],[.11,.22,.11],$.accG,qt),Dt(L,ie,"sphere",[0,.4,0],.42,$.accH,dt)},mirror(L,ie){D(L,"rod",[0,.05,0],[.035,.2,.035],$.gold),D(L,"ring",[0,.3,0],[.24,.24,.3],$.gold),D(L,"disc",[0,.3,0],[.22,.012,.22],$.accG,[90,0,0]),Dt(L,ie,"sphere",[0,.3,0],.4,$.accH,dt)},bell(L,ie){D(L,"rod",[0,.05,0],[.04,.18,.04],$.wood),D(L,"sphere",[0,-.08,0],[.12,.1,.12],$.gold),D(L,"bell",[0,-.22,0],[.32,.28,.32],$.gold,[180,0,0]),D(L,"ring",[0,-.36,0],[.32,.32,.4],$.gold,[90,0,0]),D(L,"sphere",[0,-.39,0],[.07,.07,.07],$.glowC),Dt(L,ie,"sphere",[0,-.24,0],.55,$.glowH,dt)},orb(L,ie){D(L,"sphere",[0,.22,0],[.18,.18,.18],Se("#140a1e",.3)),Dt(L,ie,"sphere",[0,.22,0],.3,$.accH,dt),Dt(L,ie,"ring",[0,.22,0],.3,$.accG,Rt("y",2.2),[70,0,0]),Dt(L,ie,"ring",[0,.22,0],.24,$.glowC,Rt("x",-1.6),[0,0,60])}},Gf={spear:25,staff:32,lantern:32,candle:42,bell:35,orb:40,mirror:30,bow:15,trident:30,club:12,hammer:15,axe:15,hook:25,whip:10},Hf={bow:90},$l=(L,ie,ee)=>{let _e=an(ee.r),me=bt(he[ee.s]||_.accent);if(D(L,"ring",[0,.06,0],[.075,.075,.3],_e,[90,0,0]),ee.r>=2&&D(L,"ring",[0,-.02,0],[.07,.07,.3],_e,[90,0,0]),ee.r>=3&&D(L,"octa",[0,-.14,0],[.06,.08,.06],me),ee.r>=4)for(let ye of[-1,1])D(L,"cone",[ye*.06,.12,0],[.03,.09,.03],_e,[0,0,ye*-60]);ee.r>=5&&(D(L,"octa",[0,.13,0],[.07,.09,.07],me),Dt(L,ie,"sphere",[0,.13,0],.13,bt(he[ee.s]||_.accent,.3),dt))},Vf=[1,1,1.04,1.08,1.13,1.18],As=_.prop==="shield"?P.side:_.prop==="daggers"?"dagger":_.prop,eh=!1;if(z.traverse(L=>{L.name==="Sword"&&(L.visible=eh),L.name==="Backpack"&&(P.cape||P.pack===!1||P.back)&&(L.visible=!1)}),As&&!eh&&Po[As]&&ve.WristR){let L=As==="hammer"&&P.big?58:Gf[As]||0,ie=zt(ve.WristR,z,Ct.R,ri("R",L),Hf[As]||0);xt&&ie.scale.multiplyScalar(Vf[xt.r]),Ut("R",ie,(ee,_e)=>{Po[As](ee,_e),xt&&$l(ee,_e,xt)},K(xt))}if(_.prop==="whip"&&ve.WristR&&Ut("Wl",qn(ve.WristR,z,[0,0,0]),(L,ie)=>{let ee=os(L,ie,[0,0,0],(ye,oe)=>{ye.rotation.y=Math.sin(oe*1.7)*.35,ye.rotation.x=Math.sin(oe*2.3)*.06},.6),_e=[];for(let ye=0;ye<=12;ye++){let oe=ye/12,Pe=oe<.7?-Math.pow(oe/.7,1.4)*.92:-.92,ke=.12+oe*.75,de=Math.sin(oe*9)*.1*oe;_e.push(new I(-.08-de,Pe,ke))}for(let ye=0;ye<12;ye++){let oe=_e[ye],Pe=_e[ye+1],ke=oe.distanceTo(Pe);D(ee,"rod",[(oe.x+Pe.x)/2,(oe.y+Pe.y)/2,(oe.z+Pe.z)/2],[.035-ye*.002,ke+.01,.035-ye*.002],$.accG).quaternion.setFromUnitVectors(new I(0,1,0),Pe.clone().sub(oe).normalize())}let me=_e[12];D(ee,"sphere",[me.x,me.y+.03,me.z],[.09,.07,.09],$.glowC),D(ee,"cone",[me.x,me.y+.12,me.z],[.08,.2,.08],$.glowC)}),ve.WristL&&_.prop==="daggers"&&Ut("L",zt(ve.WristL,z,Ct.L,ri("L",0)),(L,ie)=>{Po.dagger(L,ie),xt&&$l(L,ie,xt)},K(xt)),ve.WristL&&_.prop==="shield"){let L=zt(ve.WristL,z,[0,0,.08],null);L.quaternion.setFromRotationMatrix(new nt().makeBasis(new I(0,0,1),new I(0,-1,0),new I(1,0,0)));let ie=P.shield||"round";Ut("S",L,ee=>{let _e=Se(P.shieldFace||le(_.armor,_.accent,.25),.4),me=Se(xt&&xt.r>=3?te[xt.r]:le(_.accent,"#c8ccd4",.4),.6);if(ie==="kite")D(ee,"box",[0,.1,0],[.4,.42,.035],_e),D(ee,"cone",[0,-.27,0],[.4,.32,.035],_e,[180,0,0]),D(ee,"box",[0,0,.022],[.06,.62,.012],me),D(ee,"box",[0,.14,.022],[.34,.06,.012],me),D(ee,"ring",[0,.1,0],[.4,.42,.35],me,[0,0,0]);else if(ie==="tower")D(ee,"box",[0,.05,0],[.44,.78,.04],Se(_.armor,.4)),D(ee,"box",[0,.05,-.006],[.5,.84,.03],bt(_.glow||_.accent,.7)),D(ee,"sphere",[0,.12,.03],[.14,.14,.05],$.glowC),D(ee,"box",[0,.05,.024],[.05,.66,.012],$.gold);else{let ye=P.big?.62:.56;if(D(ee,"disc",[0,0,0],[ye,.035,ye],_e,[90,0,0]),D(ee,"ring",[0,0,0],[ye,ye,.6],P.big?bt(_.accent):me),D(ee,"sphere",[0,0,.02],[.12,.12,.08],me),P.studs)for(let oe=0;oe<6;oe++){let Pe=oe*60*ze;D(ee,"sphere",[Math.cos(Pe)*ye*.36,Math.sin(Pe)*ye*.36,.02],[.045,.045,.03],Se(_.accent))}if(P.big)for(let oe=0;oe<8;oe++){let Pe=oe*45*ze;D(ee,"box",[Math.cos(Pe)*ye*.3,Math.sin(Pe)*ye*.3,.02],[.03,ye*.5,.012],me,[0,0,oe*45+90])}}},xt&&xt.r>=3?String(xt.r):"")}let Nt=Z&&Z.helm,Lo=pe[_.gear]?"helm":Xe[_.gear]||be||P.hat?"adorn":"open";if(ve.Head){let L=zt(ve.Head,z,[0,0,0],null),ie=re.top,ee=re.r,_e=(oe,Pe,ke)=>{if(D(oe,"dome",[0,ie-.12,-.01],[ee*2.25,ee*1.55,ee*2.35],Pe),D(oe,"rod",[0,ie-.12,-.01],[ee*2.3,.035,ee*2.4],Pe),D(oe,"box",[0,ie-.17,re.face+.012],[.03,.1,.02],Pe),ke)for(let de of[-1,1])D(oe,"box",[de*ee*.98,ie-.21,.04],[.03,.12,.1],Pe)},me=oe=>{for(let Pe of[-.05,.05])D(oe,"sphere",[Pe,re.eye,re.face],[.035,.022,.02],bt(N?"#ff2a2a":_.glow))},ye=_.gear;Ut("H",L,(oe,Pe)=>{if(ye==="helm"){let de=Se(Nt?le(R[Nt.r],_.armor,.3):le(_.armor,"#c8ccd4",P.helm==="winged"?.2:.5),.6);if(_e(oe,de,P.helm!=="great"),P.helm==="winged")for(let Ye of[-1,1])D(oe,"cone",[Ye*(ee+.03),ie-0,-.05],[.1,.32,.03],Se("#ffffff",.2),[-35,90,Ye*-35]),D(oe,"cone",[Ye*(ee+.02),ie-.06,-.08],[.08,.24,.025],$.glowC,[-50,90,Ye*-50]);else if(P.helm==="horned"){for(let Ye of[-1,1])D(oe,"cone",[Ye*(ee+.05),ie+0,0],[.075,.3,.075],Se("#e8e4da"),[0,0,Ye*-35]),D(oe,"cone",[Ye*(ee+.13),ie+.15,0],[.035,.08,.035],$.accG,[0,0,Ye*-35]);D(oe,"box",[0,ie+0,0],[.03,.07,.26],$.acc)}else if(P.helm==="great"){D(oe,"rod",[0,ie-.2,0],[ee*2.25,.16,ee*2.3],de),D(oe,"box",[0,re.eye+.005,re.face+.005],[.17,.022,.02],Se("#141418")),D(oe,"box",[0,ie-.04,0],[.025,.05,ee*2.1],$.acc);for(let Ye of[-1,1])D(oe,"sphere",[Ye*ee*1.1,ie-.15,0],[.04,.04,.04],$.acc)}}else if(ye==="horns"){D(oe,"dome",[0,ie-.12,-.01],[ee*2.3,ee*1.7,ee*2.45],Se("#26201e",.5));let de=mi("bone",Ve("#e8dcc0"),{size:rt});for(let Ye of[-1,1])D(oe,"rod",[Ye*(ee+.03),ie-.08,.01],[.085,.12,.085],de,[0,0,Ye*75]),D(oe,"rod",[Ye*(ee+.1),ie-.03,.02],[.07,.12,.07],de,[-10,0,Ye*35]),D(oe,"cone",[Ye*(ee+.13),ie+.07,.04],[.065,.16,.065],de,[-20,0,Ye*5]);D(oe,"box",[0,ie-.15,re.face+.01],[.16,.025,.02],$.glowC)}else if(ye==="halo"){let de=J(oe,[0,ie+.13,-.06]);if(de.rotation.x=70*ze,D(de,"ring",[0,0,0],[.34,.34,.5],$.glowC),P.staff==="sun")for(let Ye=0;Ye<8;Ye++){let Kt=Ye*45*ze;D(de,"cone",[Math.cos(Kt)*.23,Math.sin(Kt)*.23,0],[.035,.08,.035],$.gold,[0,0,Ye*45-90])}Dt(oe,Pe,"sphere",[0,ie+.13,-.06],[.42,.12,.42],$.glowH,dt)}else if(ye==="circlet"){let de=re.eye+.07;D(oe,"ring",[0,de,0],[ee*1.85,ee*1.95,.2],$.gold,[80,0,0]),D(oe,"octa",[0,de-.005,ee*.95+.02],[.05,.075,.03],$.glowC)}else if(ye==="bandana"){let de=et(P.band||_.accent),Ye=re.eye+.08;D(oe,"ring",[0,Ye,0],[ee*2.25,ee*2.4,.35],de,[80,0,0]);let Kt=os(oe,Pe,[0,Ye,-ee-.03],($t,Tn)=>{$t.rotation.x=.5+Math.sin(Tn*3.1+$t.id)*.18,$t.rotation.z=Math.sin(Tn*2.3)*.15},1.6);D(Kt,"box",[.03,-.12,-.02],[.05,.26,.012],de,[0,0,10]),D(Kt,"box",[-.03,-.15,-.01],[.05,.32,.012],de,[0,0,-8]),_.glow&&D(oe,"sphere",[0,Ye,ee*1.1],[.04,.04,.02],$.glowC)}else if(ye==="crown"){let de=Se(P.crownBand||le(_.accent,"#e8c070",.4),.6),Ye=re.crown,Kt=ee*1.05;D(oe,"ring",[0,Ye,0],[Kt*2,Kt*2.1,.6],de,[90,0,0]);let $t=7,Tn=P.crown||"spike";for(let Ln=0;Ln<$t;Ln++){let la=Ln/$t*Math.PI*2+Math.PI/2,cs=Math.cos(la)*Kt,th=Math.sin(la)*Kt*1.05,Io=Tn==="jagged"?Ln%2?.12:.24:Tn==="coral"?.12+Ln%3*.05:Ln===0?.16:.11,qf=Tn==="coral"?Ln%2?18:-14:0;D(oe,"cone",[cs,Ye+Io/2,th],[.05,Io,.05],Tn==="jagged"?Se("#1a1020",.4):de,[0,0,qf]),(Tn!=="spike"||Ln===0)&&D(oe,"sphere",[cs,Ye+Io+.005,th],[.035,.035,.035],$.glowC)}if(P.flame)for(let Ln=0;Ln<3;Ln++)Dt(oe,Pe,"cone",[(Ln-1)*.07,Ye+.13,Kt*.95],[.05,.13,.05],$.glowC,qt)}else if(ye==="mask"){let de=et(le(_.armor,"#000000",.25));D(oe,"dome",[0,re.eye-.07,re.face-.06],[.22,.1,.17],de,[90,0,0]),D(oe,"box",[0,re.eye-.035,re.face+0],[.2,.01,.03],$.acc)}else ye==="veil"&&(D(oe,"cone",[0,ie+.02,-.01],[.3,.24,.3],Se("#1a1028")),D(oe,"disc",[0,ie-.09,-.01],[.42,.012,.42],Se("#1a1028")),D(oe,"cone",[0,ie-.2,-.04],[.5,.42,.5],bt("#1a1028",.55)),D(oe,"ring",[0,ie-.09,0],[.21,.21,.3],$.accG,[90,0,0]));let ke=$.hair;if(P.hair==="ponytail"){D(oe,"sphere",[0,ie-.05,-ee*.95],[.07,.07,.07],$.acc);let de=os(oe,Pe,[0,ie-.05,-ee-.02],(Ye,Kt)=>{Ye.rotation.x=Math.sin(Kt*2.2+1)*.08,Ye.rotation.z=Math.sin(Kt*1.6)*.06},1.3);D(de,"capsule",[0,-.1,-.06],[.11,.1,.09],ke,[-30,0,0]),D(de,"capsule",[0,-.24,-.1],[.08,.1,.07],ke,[-12,0,0]),D(de,"cone",[0,-.37,-.11],[.07,.12,.06],ke,[180,0,0])}else if(P.hair==="braid"){for(let de=0;de<6;de++)D(oe,"sphere",[0,ie-.12-de*.075,-ee-.03-de*.008],[.085-de*.006,.09,.08-de*.005],ke);D(oe,"ring",[0,ie-.6,-ee-.07],[.05,.05,.4],$.acc,[90,0,0]),D(oe,"cone",[0,ie-.66,-ee-.07],[.06,.1,.05],ke,[180,0,0])}else if(P.hair==="bun")D(oe,"sphere",[0,ie-.02,-ee*.8],[.13,.12,.12],ke),D(oe,"rod",[.04,ie+.02,-ee*.8],[.015,.2,.015],$.gold,[0,0,60]);else if(P.hair==="flame")for(let de=0;de<5;de++){let Ye=(de-2)*.5;Dt(oe,Pe,"cone",[Math.sin(Ye)*.08,ie+.04-Math.abs(de-2)*.03,-.04-Math.cos(Ye)*.03],[.09,.26-Math.abs(de-2)*.05,.09],de%2?$.glowC:bt(_.hair),qt,[-20,0,(de-2)*-14])}else P.hair==="long"&&(D(oe,"box",[0,ie-.33,-ee*.6],[ee*1.9,.36,.08],ke,[8,0,0]),D(oe,"cone",[0,ie-.55,-ee*.62],[ee*1.9,.12,.08],ke,[180,0,0]));if(P.beardBraid){D(oe,"ring",[0,-.06,.13],[.05,.05,.4],$.gold,[90,0,0]);for(let de=0;de<3;de++)D(oe,"sphere",[0,-.1-de*.05,.13+de*.01],[.055-de*.008,.06,.05],ke);D(oe,"sphere",[0,-.25,.155],[.04,.04,.04],$.gold)}if(P.hat==="straw"){let de=Se("#d8bb6a"),Ye=Se(_.accent);D(oe,"disc",[0,ie-.04,0],[.62,.02,.62],de,[-6,0,0]),D(oe,"cone",[0,ie+.06,-.01],[.32,.2,.32],de),D(oe,"rod",[0,ie-.02,-.01],[.27,.04,.27],Ye)}be&&(_.glow||N)&&ye!=="halo"&&me(oe)}),Nt&&Ut("gH",L,(oe,Pe)=>{let ke=Se(Ht(Nt.r,.4),Nt.r===1?0:.6),de=an(Nt.r),Ye=bt(he[Nt.s]||_.accent),Kt=Se("#5a4232");if(Lo==="open"||Lo==="adorn"){let $t=be?re.eye+.11:re.eye+.065,Tn=ee*(be?1.02:1);P.hat?D(oe,"rod",[0,ie-.005,-.01],[.28,.025,.28],de):D(oe,"ring",[0,$t,-.005],[Tn*1.98,Tn*2.08,Nt.r===1?.22:.16],Nt.r===1?Kt:de,[80,0,0]);let Ln=P.hat?ie:$t,la=P.hat?.14:be?re.face:Tn*.98+.012;if(Nt.r>=2&&D(oe,"octa",[0,Ln,la],[.035+Nt.r*.005,.045+Nt.r*.007,.022],Nt.r>=3?Ye:ke),Nt.r>=3&&!P.hat&&!be)for(let cs of[-1,1])D(oe,"box",[cs*(Tn+.005),$t-.035,-.01],[.022,.07,.09],ke);if(Nt.r>=4)for(let cs of[-1,1])D(oe,"cone",[cs*(Tn+.02),$t+.025,-.03],[.045,.11+(Nt.r-4)*.06,.016],de,[-40,90,cs*-40]);Nt.r>=5&&!P.hat&&D(oe,"octa",[0,$t+.03,-Tn-.01],[.05,.08,.03],Ye),P.hat&&Nt.r>=3&&D(oe,"cone",[.1,ie+.08,-.08],[.035,.22+Nt.r*.02,.018],Ye,[-30,0,-30])}else D(oe,"rod",[0,ie-.115,-.01],[ee*2.4,.03,ee*2.5],de),Nt.r>=2&&D(oe,"box",[0,ie-.085,re.face-.01],[.12+Nt.r*.01,.03,.025],ke),Nt.r>=3&&D(oe,"octa",[0,ie-.06,re.face+0],[.04,.055,.028],Ye),Nt.r>=4&&D(oe,"box",[0,ie+.02,-.02],[.025,.06+(Nt.r-4)*.04,ee*2],de)},`${Lo}${K(Nt)}`)}let Wf=ve.Hips?So(ve.Hips,z):.9;ve.Hips&&(P.robe||P.coat||P.tabard||P.apron||P.belt||P.scabbard||P.coil)&&Ut("Hp",qn(ve.Hips,z,[0,0,0]),L=>{let ie=et(P.robeColor||_.cloth||_.armor),ee=Se(_.accent,.3);if(P.robe){let me=P.robe==="long"?Wf+.12-.07:.45,ye=P.robeW||1;if(D(L,"taper",[0,.12-me/2,0],[.5*ye,me,.42*ye],ie,[180,0,0]),P.robe==="long"){let oe=me*.42,Pe=et(le(P.robeColor||_.cloth||_.armor,"#000000",.18));D(L,"taper",[0,.12-oe/2+.01,0],[.53*ye,oe,.45*ye],Pe,[180,0,0]),D(L,"taper",[0,.12-oe+.02,0],[.555*ye,.03,.47*ye],ee,[180,0,0])}if(D(L,"taper",[0,.12-me+.03,0],[.53*ye,.06,.45*ye],ee,[180,0,0]),P.robe==="long"&&P.stole!==!1&&D(L,"box",[0,.12-me/2,.205*ye],[.12,me*.96,.02],ee,[-9,0,0]),P.bells)for(let oe=0;oe<6;oe++){let Pe=oe/6*Math.PI*2+.3;D(L,"bell",[Math.sin(Pe)*.235*ye,.12-me+.05,Math.cos(Pe)*.195*ye],[.05,.06,.05],$.gold,[180,0,0])}}if(P.coat){let _e=et(P.coat===!0?_.armor:P.coat),me=.5;D(L,"box",[0,.02-me/2,-.12],[.36,me,.03],_e,[8,0,0]);for(let ye of[-1,1])D(L,"box",[ye*.15,.02-me/2,0],[.03,me,.22],_e,[0,0,ye*4]),D(L,"box",[ye*.12,.02-me/2,.1],[.1,me,.03],_e,[-6,ye*20,0]);D(L,"box",[0,.02-me+.02,-.135],[.37,.03,.035],ee,[8,0,0])}if(P.tabard){let _e=et(P.tabard),me=.5;D(L,"box",[0,.25-me/2+.05,.16],[.22,me+.25,.02],_e,[-6,0,0]),D(L,"box",[0,.25-me/2+.05,-.14],[.22,me+.25,.02],_e,[6,0,0]),D(L,"box",[0,.25-me-.05,.19],[.24,.03,.025],ee,[-6,0,0]),D(L,"box",[0,.25-me-.05,-.17],[.24,.03,.025],ee,[6,0,0]),P.emblem&&D(L,"octa",[0,.2,.18],[.08,.11,.02],Se(P.emblem,.3))}if(P.apron){let _e=Se("#4a3426");D(L,"box",[0,.05,.17],[.3,.75,.025],_e,[-4,0,0]),D(L,"box",[0,-.31,.19],[.31,.03,.03],$.acc,[-4,0,0]),D(L,"box",[.08,-.05,.19],[.1,.1,.02],Se("#3a281c"),[-4,0,0]),D(L,"rod",[.08,-.01,.205],[.012,.12,.012],$.iron,[0,0,20])}if(P.belt){let _e=Se(P.belt===!0?"#3a2a20":P.belt);D(L,"rod",[0,.1,0],[.38,.05,.32],_e),D(L,"box",[0,.1,.16],[.07,.06,.02],$.gold),D(L,"box",[-.16,.04,.05],[.06,.1,.08],_e)}if(P.scabbard&&(D(L,"box",[-.19,-.05,-.02],[.03,.7,.05],Se("#1c1c22"),[62,0,-8]),D(L,"box",[-.19,-.05,-.02],[.035,.05,.06],$.gold,[62,0,-8])),P.coil)for(let _e=0;_e<3;_e++)D(L,"ring",[.2,0-_e*.012,.03],[.14,.14,.3],_e===1?$.accG:$.leather,[10,90,0])});let vt=Z&&Z.chest,Es=P.pauldrons||(vt?vt.r===1?"leather":"plate":null);if(Es)for(let[L,ie]of[[1,"UpperArmL"],[-1,"UpperArmR"]])ve[ie]&&Ut("P"+L,qn(ve[ie],z,[L*.02,.01,0]),(ee,_e)=>{let me=(P.pauldronSize||1)*(vt?.72+vt.r*.05:1),ye=vt?Se(Ht(vt.r,.75),vt.r===1?0:.55):Se(P.pauldronColor||le(_.armor,"#c8ccd4",.25),.4),oe=vt?an(vt.r):$.acc,Pe=L*-50,ke=J(ee,[0,0,0]);if(ke.scale.setScalar(me),Es==="leather")D(ke,"sphere",[L*.02,0,0],[.2,.12,.2],Se("#5a4232"),[0,0,Pe]);else if(Es==="shell"){D(ke,"dome",[L*.02,-.01,0],[.24,.16,.22],ye,[0,0,Pe]);for(let de=-1;de<=1;de++)D(ke,"box",[L*.06,.03,de*.05],[.02,.1,.02],oe,[de*20,0,Pe])}else if(Es==="ice"){D(ke,"dome",[L*.01,-.01,0],[.2,.12,.2],ye,[0,0,Pe]);for(let de=-1;de<=1;de++)D(ke,"octa",[L*(.06+Math.abs(de)*.01),.07-Math.abs(de)*.02,de*.05],[.04,.16-Math.abs(de)*.04,.04],$.accG,[de*15,0,L*-25])}else if(Es==="spike"){D(ke,"dome",[L*.02,-.01,0],[.24,.17,.24],ye,[0,0,Pe]);for(let de=-1;de<=1;de++)D(ke,"cone",[L*.08,.06,de*.06],[.04,.14,.04],oe,[de*15,0,L*-45])}else{D(ke,"dome",[L*.02,-.01,0],[.26,.17,.25],ye,[0,0,Pe]),D(ke,"ring",[L*0,-.035,0],[.13,.13,.4],oe,[90,0,Pe]);for(let de=1;de<=2;de++)D(ke,"dome",[L*(.03+de*.012),-.035-de*.03,0],[.24-de*.025,.1,.23-de*.025],ye,[0,0,Pe-L*8*de]);for(let de=-1;de<=1;de++)D(ke,"sphere",[L*.075,.035,de*.06],[.018,.018,.018],oe);vt&&vt.r>=3&&D(ke,"dome",[L*.05,-.07,0],[.22,.12,.22],ye,[0,0,L*-65]),vt&&vt.r>=4&&D(ke,"ring",[L*.035,-.075,0],[.12,.12,.35],oe,[90,0,L*-65])}vt&&vt.r>=3&&Es!=="leather"&&D(ke,"octa",[L*.1,.02,0],[.035,.045,.035],bt(he[vt.s]||_.accent)),P.aura&&(D(ee,"sphere",[L*.05,.06,0],[.11,.11,.11],$.glowC),Dt(ee,_e,"sphere",[L*.05,.06,0],.2,$.glowH,dt))},vt?`${vt.r}${vt.s?vt.s[0]:""}`:"");else if(P.aura)for(let[L,ie]of[[1,"UpperArmL"],[-1,"UpperArmR"]])ve[ie]&&Ut("A"+L,qn(ve[ie],z,[L*.03,.04,0]),(ee,_e)=>{D(ee,"sphere",[0,0,0],[.15,.15,.15],$.glowC),Dt(ee,_e,"sphere",[0,0,0],.3,$.glowH,dt)});if(vt&&vt.r>=2&&ve.Chest&&Ut("gC",qn(ve.Chest,z,[0,0,0]),(L,ie)=>{let ee=Se(Ht(vt.r),.55),_e=an(vt.r),me=bt(he[vt.s]||_.accent),ye=S==="hooded"?.035:.045,oe=.3+vt.r*.012;D(L,"rod",[0,.13,0],[.24,.05,.2],ee),D(L,"rod",[0,.13,0],[.25,.012,.21],_e);let Pe=.92+vt.r*.03;if(D(L,"breast",[0,0,ye+.075],[Pe,Pe,1],ee,[-6,0,0]),D(L,"box",[0,0,ye+.1],[.022,.24,.02],_e,[-6,0,0]),vt.r>=3&&D(L,"octa",[0,.03,ye+.115],[.045+vt.r*.004,.06+vt.r*.005,.025],me),vt.r>=4&&D(L,"box",[0,-.13,ye+.085],[.24,.025,.03],_e,[-6,0,0]),vt.r>=5)for(let ke of[-1,1])D(L,"box",[ke*.1,.08,ye+.1],[.07,.02,.02],_e,[-6,0,ke*-25])},K(vt)),ve.Chest&&(P.mantle||P.collar||P.scarf)&&Ut("Mn",qn(ve.Chest,z,[0,0,0]),(L,ie)=>{if(P.mantle==="fur"||P.mantle==="moss"){let ee=Se(P.mantle==="fur"?P.furColor||"#e8e4dc":_.accent),_e=Se(Te(P.mantle==="fur"?P.furColor||"#e8e4dc":_.accent,.75));for(let me=0;me<9;me++){let ye=me/8*Math.PI*1.25-Math.PI*.625;D(L,"sphere",[Math.sin(ye)*.2,.14-Math.abs(Math.sin(ye))*.03,-Math.cos(ye)*.1-.02],[.16,.12,.14],me%2?ee:_e)}if(D(L,"sphere",[0,.06,-.15],[.36,.2,.14],_e),P.mantle==="moss")for(let me=0;me<5;me++)D(L,"cone",[-.16+me*.08,.2,-.12],[.02,.16,.02],Se("#8a9a50"),[-20+me*5,0,(me-2)*12])}else if(P.mantle==="ember")for(let ee=0;ee<5;ee++)for(let _e of[-1,1])Dt(L,ie,"cone",[_e*(.12+ee*.03),.17-ee*.015,-.06-ee*.02],[.06,.2-ee*.02,.06],ee%2?$.glowC:$.accG,qt,[-25,0,_e*(-20-ee*8)]);if(P.collar==="spike")for(let ee=0;ee<7;ee++){let _e=(ee-3)*.32;D(L,"cone",[Math.sin(_e)*.17,.27+Math.cos(_e*1.4)*.05,-.1-Math.cos(_e)*.03],[.05,.26-Math.abs(ee-3)*.03,.03],ee%2?Se("#1a1020",.4):$.acc,[-15,0,-_e*40])}if(P.scarf){let ee=et(P.scarf);D(L,"rod",[0,.16,0],[.22,.07,.2],ee);let _e=os(L,ie,[.06,.15,-.1],(me,ye)=>{me.rotation.x=.6+Math.sin(ye*3.4+me.id)*.2,me.rotation.y=Math.sin(ye*1.9)*.25},1.6);D(_e,"box",[0,-.18,0],[.07,.36,.012],ee,[0,0,6]),D(_e,"box",[-.06,-.14,0],[.06,.28,.012],ee,[0,0,-8])}}),ve.Chest&&(P.cape||_.prop==="bow"||P.back)){let L=qn(ve.Chest,z,[0,0,0]);Ut("B",L,(ie,ee)=>{let _e=S==="hooded"?-.15:-.14;if(P.cape){let me=et(P.capeColor||Te(_.armor,.55)),ye=et(_.accent),oe=P.capeLen||1;for(let de of[-1,1])D(ie,"sphere",[de*.12,.14,_e+.04],[.05,.05,.03],$.gold);let Pe=os(ie,ee,[0,.14,_e],(de,Ye)=>{de.rotation.x=.1+Math.sin(Ye*1.3+de.id)*.035;let Kt=de.children[de.children.length-1],$t=de.userData.sp;Kt.rotation.x=.06+Math.sin(Ye*1.9+.8+de.id)*.1+($t?$t.ax*.7:0),Kt.rotation.z=Math.sin(Ye*1.1+de.id)*.05+($t?$t.az*.5:0)},1);D(Pe,Ue(.24,.42,.52,.09),[0,0,-.01],[1,1,1],me),D(Pe,Ue(.22,.39,.5,.085),[0,-.01,-.002],[1,1,1],et(le(_.accent,"#000000",.35)));let ke=J(Pe,[0,-.47,-.01]);D(ke,Ue(.4,.56,.06+.5*oe,.11),[0,.06,0],[1,1,1],me),D(ke,Ue(.56,.57,.045,.11,10,1),[0,-.5*oe+.02,.003],[1.01,1,1.01],ye)}if(_.prop==="bow"){D(ie,"rod",[.06,-.05,-.2],[.12,.46,.12],$.leather,[0,0,-25]);for(let me=0;me<3;me++)D(ie,"cone",[.15+me*.03,.2+me*.01,-.2+(me-1)*.03],[.04,.08,.015],$.acc,[0,0,-25])}if(P.back==="shovel")D(ie,"rod",[0,0,_e-.04],[.04,1,.04],$.wood,[0,0,35]),D(ie,"box",[.3,-.42,_e-.04],[.2,.26,.02],$.iron,[0,0,35]),D(ie,"box",[-.28,.4,_e-.04],[.14,.04,.04],$.wood,[0,0,35]);else if(P.back==="wings"){let me=mi("bone",Ve("#fbf6ea")),ye=ci(le(_.accent,"#ffffff",.3));for(let oe of[-1,1]){let Pe=os(ie,ee,[oe*.07,.12,_e-.03],(ke,de)=>{ke.rotation.y=oe*(.55+Math.sin(de*1.4)*.1),ke.rotation.z=oe*Math.sin(de*1.4)*.05});for(let ke=0;ke<4;ke++)D(Pe,"sphere",[oe*(.06+ke*.07),.2+ke*.03,-.04],[.13,.1,.035],me,[0,0,oe*-20]);for(let ke=0;ke<7;ke++){let de=(10+ke*13)*ze,Ye=.48-Math.abs(ke-3)*.04,Kt=Math.cos(de)*Ye/2,$t=-Math.sin(de)*Ye/2;D(Pe,"sphere",[oe*(.24+Kt),.28+$t,-.05-ke*.004],[.12,Ye,.025],ke<2?ye:me,[0,0,oe*(90-(10+ke*13))])}}}else if(P.back==="sunburst"){let me=J(ie,[0,.3,_e-.08]);D(me,"ring",[0,0,0],[.46,.46,.5],$.gold);for(let ye=0;ye<12;ye++){let oe=ye*30*ze;D(me,"cone",[Math.cos(oe)*.3,Math.sin(oe)*.3,0],[.05,ye%2?.14:.22,.02],$.gold,[0,0,ye*30-90])}Dt(ie,ee,"sphere",[0,.3,_e-.1],[.5,.5,.1],$.glowH,dt)}})}P.shards&&ve.Hips&&Ut("Sh",qn(ve.Hips,z,[0,.35,0]),(L,ie)=>{let ee=os(L,ie,[0,0,0],(_e,me)=>{_e.rotation.y=me*.9,_e.position.y=Math.sin(me*1.3)*.04});for(let _e=0;_e<5;_e++){let me=_e*72*ze;D(ee,"octa",[Math.cos(me)*.45,Math.sin(_e*2.1)*.12,Math.sin(me)*.45],[.06,.13,.02],_e%2?$.accG:Se("#cfe4ff",.6),[0,-_e*72+90,20])}});let Sn=Z&&Z.boots;if(Sn){let L=P.robe==="long";for(let[ie,ee,_e]of[[1,"LowerLegL","FootL"],[-1,"LowerLegR","FootR"]]){let me=Se(Ht(Sn.r),Sn.r===1?0:.55),ye=an(Sn.r),oe=bt(he[Sn.s]||_.accent);!L&&ve[ee]&&Ut("gL"+ie,qn(ve[ee],z,[0,0,0]),(Pe,ke)=>{if(Sn.r===1){D(Pe,"rod",[0,-.24,0],[.125,.22,.125],Se("#5a4232")),D(Pe,"rod",[0,-.16,0],[.13,.02,.13],Se("#3a2a20"));return}D(Pe,"taper",[0,-.21,.005],[.13,.3,.13],me),D(Pe,"rod",[0,-.355,.005],[.115,.025,.115],ye),D(Pe,"box",[0,-.2,.06],[.03,.26,.02],ye),Sn.r>=3&&D(Pe,"sphere",[0,-.03,.035],[.11,.1,.09],me),Sn.r>=4&&D(Pe,"cone",[ie*.065,-.04,0],[.03,.12+(Sn.r-4)*.06,.03],ye,[0,0,ie*-70]),Sn.r>=5&&(D(Pe,"octa",[0,-.03,.085],[.035,.045,.02],oe),Dt(Pe,ke,"sphere",[0,-.03,.08],.1,bt(he[Sn.s]||_.accent,.35),dt))},K(Sn)),ve[_e]&&Ut("gF"+ie,qn(ve[_e],z,[0,0,0]),Pe=>{if(Sn.r===1){D(Pe,"rod",[0,.06,-.01],[.12,.05,.14],Se("#5a4232"));return}D(Pe,"dome",[0,.02,.06],[.12,.08,.14],me),D(Pe,"rod",[0,.08,-.01],[.13,.035,.14],ye),L&&Sn.r>=3&&D(Pe,"octa",[0,.06,.12],[.03,.04,.02],oe)},K(Sn)+(L?"r":""))}}}let ut=new Map;function ft(M,_,S,z=3.2){let N=`${_}|${z}`;ut.has(N)||ut.set(N,{uCrack:{value:new Le(_).multiplyScalar(.75)},uPulse:{value:1},uScale:{value:z}});let B=ut.get(N);return M.userData.crack=N,M.onBeforeCompile=F=>{Object.assign(F.uniforms,B),F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCrackP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCrackP = position;`),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
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
  totalEmissiveRadiance += uCrack * (line + heat) * uPulse; diffuseColor.rgb *= 1.0 - line * 0.9; }`)},M.customProgramCacheKey=()=>"sb-crack",S.push(F=>{B.uPulse.value=.75+Math.sin(F*1.6)*.25}),M}let Bt={x:.24,y:.27,z:.46};function _n(M,_,S){let z=ELEMENTS[_]?ELEMENTS[_].color:"#e8553a";M.traverse(be=>{if(!be.isMesh)return;let re=Array.isArray(be.material)?be.material:[be.material];for(let ve of re)(ve.name==="Yeti_Main"||ve.name==="Yeti_Secondary")&&ft(ve,z,S)});let N={};M.traverse(be=>{be.isBone&&(N[be.name]=be)}),M.updateMatrixWorld(!0);let B=se("#1e1a17"),F=se("#110f0d"),Z=Y(z),P=Y(z,.3),ne=`titan|${_}`,Me=(be,re)=>{let ve=ne+be;if(!je.has(ve)){let Ve=new Ot;re(Ve),je.set(ve,{baked:Et(Ve),live:[]})}return Xt(je.get(ve).baked)};N.Head&&zt(N.Head,M,[0,0,0],null).add(Me("H",re=>{for(let ve of[-1,1])Q("cone",re,[ve*.34,.5,-.02],[.22,.5,.22],B,[0,0,ve*-42]),Q("cone",re,[ve*.56,.8,.08],[.14,.4,.14],F,[-30,0,ve*-14]),Q("box",re,[ve*(Bt.x-.02),Bt.y+.12,Bt.z-.02],[.32,.08,.16],F,[15,0,ve*-24]);for(let ve of[-1,1])Q("octa",re,[ve*.22,.17,.55],[.2,.09,.12],B,[10,0,ve*38]),Q("cone",re,[ve*.13,.05,.58],[.06,.16,.06],se("#5a4e44"),[-12,0,ve*-12]);Q("box",re,[0,-.03,.53],[.42,.06,.12],F,[-8,0,0]),Q("octa",re,[0,.62,.12],[.3,.6,.26],F,[-15,0,0]),Q("octa",re,[.13,.56,-.06],[.22,.44,.2],B,[-35,0,-22]),Q("octa",re,[-.13,.56,-.06],[.22,.44,.2],B,[-35,0,22]),Q("octa",re,[0,.44,-.3],[.2,.4,.18],F,[-60,0,0])})),N.Torso&&zt(N.Torso,M,[0,0,0],null).add(Me("T",be=>{[[0,.45,-.38,.5],[.22,.32,-.35,.36],[-.22,.32,-.35,.36],[0,.15,-.44,.34]].forEach(([re,ve,Ve,rt],Se)=>{Q("octa",be,[re,ve,Ve],[.16,rt,.14],Se%2?F:B,[-50,0,re*-60])}),Q("sphere",be,[0,.3,-.33],[.1,.1,.1],Z)}));for(let be of["UpperArmL","UpperArmR"])N[be]&&zt(N[be],M,[0,0,0],null).add(Me(be,re=>{Q("octa",re,[0,.12,0],[.24,.38,.22],B,[0,0,20]),Q("octa",re,[.06,.02,.12],[.14,.26,.14],F,[30,0,-10]),Q("sphere",re,[0,.12,0],[.4,.4,.4],P)}))}function Zn(M,_){let S=LOOKS[M]||LOOKS.brannoc,z=Se=>_?le(Se,"#2e1f33",.55):Se,N=se(z(SKIN[S.skin])),B=se(z(S.hair)),F=se(z(S.armor)),Z=se(z(Te(S.armor,.7))),P=se(z(S.accent)),ne=se(z("#b8c0cc"),.6),Me=se("#2a1f1a"),be=_||S.glow?Y(_?"#ff2a2a":S.glow):se("#1a141f"),re=new Ot;Q("capsule",re,[-.15,.35,0],[.2,.16,.2],Z),Q("capsule",re,[.15,.35,0],[.2,.16,.2],Z),Q("box",re,[-.15,.07,.04],[.2,.14,.3],Me),Q("box",re,[.15,.07,.04],[.2,.14,.3],Me),Q("capsule",re,[0,.95,0],[.62,.21,.42],F),Q("cyl",re,[0,.74,0],[.58,.015,.42],P),Q("sphere",re,[-.33,1.22,0],[.26,.2,.26],P),Q("sphere",re,[.33,1.22,0],[.26,.2,.26],P);let ve=J(re,[0,1.55,0]);Q("sphere",ve,[0,0,0],[.5,.54,.5],N),Q("sphere",ve,[-.1,.02,.22],[.08,.06,.04],be),Q("sphere",ve,[.1,.02,.22],[.08,.06,.04],be),S.gear==="helm"?Q("sphere",ve,[0,.1,-.01],[.55,.46,.55],ne):S.style!=="bald"&&Q("sphere",ve,[0,.1,-.05],[.54,.44,.52],B);let Ve=J(re,[-.38,1.18,0]);Q("capsule",Ve,[0,-.28,0],[.16,.14,.16],Z);let rt=J(re,[.38,1.18,0]);return Q("capsule",rt,[0,-.28,0],[.16,.14,.16],Z),{model:re,armL:Ve,armR:rt,height:2}}function gi(M){let _=ELEMENTS[M].color,S=se("#6b635c"),z=se("#3d3833"),N=Y(_),B=new Ot;Q("box",B,[-.5,.6,0],[.6,1.2,.6],z),Q("box",B,[.5,.6,0],[.6,1.2,.6],z),Q("box",B,[0,2,0],[2,1.8,1.2],S),Q("box",B,[0,3.25,.1],[1,.9,.9],S),Q("sphere",B,[-.22,3.3,.55],[.2,.12,.06],N),Q("sphere",B,[.22,3.3,.55],[.2,.12,.06],N);let F=J(B,[-1.25,2.7,0]);Q("box",F,[0,-.8,0],[.6,1.7,.6],S);let Z=J(B,[1.25,2.7,0]);return Q("box",Z,[0,-.8,0],[.6,1.7,.6],S),{model:B,armL:F,armR:Z,height:4.1}}let Gt=Math.PI-.95;function pt(M,_,S){let z=S<=1?0:Math.min(M?3.7:4,(M?.95:1)*(S-1)),N=S<=1?0:-z/2+_*(z/(S-1)),B=S>=4&&_%2?.5:0;return M?new I(N,0,2+B):new I(N,0,-3.2-B)}function gr(M){if(M.gear!==void 0)return M.gear;if(M.side==="A")try{return typeof heroGearLook=="function"&&M.heroUid&&typeof heroByUid=="function"?heroGearLook(heroByUid(M.heroUid)):null}catch{return null}let _=M.level||1;if(_<8)return null;let S=Math.min(5,1+Math.floor(_/12)),z={helm:{r:S,s:""},chest:{r:S,s:""}};return(_>=20||M.boss)&&(z.boots={r:S,s:""},z.weapon={r:S,s:""}),z}let Yt=M=>M?["weapon","helm","chest","boots"].map(_=>M[_]?`${M[_].r}${M[_].s||""}`:"0").join("."):"";function bi(M){if(!M.mixer)return M.height;M.mixer.update(.01),M.model.updateMatrixWorld(!0);let _=null;if(M.model.traverse(F=>{!_&&F.isBone&&F.name==="Head"&&(_=F)}),!_)return M.height;let S=new I;_.getWorldPosition(S);let z=S.y+.35,N=new Gn,B=new I;return M.model.traverse(F=>{if(!(!F.isMesh||!F.userData.kit||!F.geometry)){for(let Z=F;Z;Z=Z.parent)if(Z===_){F.geometry.boundingBox||F.geometry.computeBoundingBox(),N.copy(F.geometry.boundingBox).applyMatrix4(F.matrixWorld),z=Math.max(z,Math.min(N.max.y,S.y+.9));break}}}),z}function oa(M,_,S){let z=M.side==="A",N=M.titan?1:M.boss?1.3:1,F=(M.titan?Qe("titan","titan",!1,M.el):Qe(M.template.id,x[M.template.id]||"adventurer",!z,void 0,gr(M)))||(M.titan?gi(M.el):Zn(M.template.id,!z)),Z=new Ot;Z.add(F.model),F.model.scale.multiplyScalar(N);let P=M.titan?new I(0,0,-3.8):pt(z,_,S);Z.position.copy(P),Z.rotation.y=z?Gt:0;let ne=new yt(new Jr(.62*(M.titan?2:N),32),Y(ELEMENTS[M.el].color,.35));ne.rotation.x=-Math.PI/2,ne.position.y=.02,Z.add(ne);let Me=new yt(new Yi(.72*(M.titan?2:N),.86*(M.titan?2:N),40),new Qt({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));Me.rotation.x=-Math.PI/2,Me.position.y=.03,Z.add(Me),e.add(Z);let be=M.titan?F.height:bi(F)*N;r.set(M.key,{u:M,root:Z,model:F.model,armL:F.armL,armR:F.armR,mixer:F.mixer,actions:F.actions,anim:F.anim,fx:F.fx||[],aura:ne,ring:Me,home:P.clone(),height:F.height*N,top:be,phase:Math.random()*10,busy:!1,dead:!1,fidgetAt:6+Math.random()*10})}function ss(M){for(let[_,S]of r)S.u.side===M&&(e.remove(S.root),r.delete(_))}let ai=0,Wt=0,Mn=0,xi=0,pn=new I,vi=new I,Ts=new I;function br(M){if(!a)return;let _=Math.min(.05,(M-s)/1e3);s=M;let S=ai>0?_*.06:_;ai=Math.max(0,ai-_);let z=M/1e3;for(let B of r.values()){if(B.mixer&&B.mixer.update(S*p()),B.dead)continue;for(let Z of B.fx)Z(z);if(!B.mixer)B.model.position.y=Math.sin(z*2.4+B.phase)*.025,!B.busy&&B.armR&&(B.armR.rotation.x=(Math.sin(z*2.4+B.phase)*5-8)*Math.PI/180,B.armL.rotation.x=(-Math.sin(z*2.4+B.phase)*4-4)*Math.PI/180);else if(B.anim&&!B.busy&&!B.won&&(B.fidgetAt-=_,B.fidgetAt<=0)){B.fidgetAt=8+Math.random()*12;let Z=B.anim.S.fidget.filter(B.anim.has);if(Z.length&&B.anim.cur&&B.anim.cur.loop===ho){let P=B.anim.play(Z[Math.floor(Math.random()*Z.length)],{fade:.35});P&&P.getClip().duration>3&&setTimeout(()=>{B.anim.cur===P&&!B.busy&&B.anim.idle(.4)},2200)}}let F=1+Math.sin(z*3+B.phase)*.05;B.aura.scale.set(F,F,F)}if(c=c.filter(B=>(B.k=Math.min(1,B.k+S*p()/B.dur),B.fn(B.k),B.k>=1?(B.done(),!1):!0)),o=o.filter(B=>B.update(S*p())),vi.copy(h),Ts.copy(st),Mn>0){let B=yi(Mn);Ts.lerp(pn,B*.22)}let N=rn*(1-.12*yi(Mn));if(Math.abs(t.fov-N)>.001&&(t.fov=N,t.updateProjectionMatrix()),Wt>0&&(Wt=Math.max(0,Wt-_),vi.lerp(Ts,.06*Math.sin(Wt/.25*Math.PI))),u>0){u-=_;let B=f*Math.max(0,u/.22);vi.x+=(Math.random()-.5)*B,vi.y+=(Math.random()-.5)*B}t.position.copy(vi),t.lookAt(Ts),wt&&wt.tick(M),At?At.render(_):a.render(e,t);for(let B of l)B();i=requestAnimationFrame(br)}function wn(M,_){return new Promise(S=>c.push({dur:M,fn:_,done:S,k:0}))}let yi=M=>1-Math.pow(1-M,3),Wl=M=>M<.5?2*M*M:1-Math.pow(-2*M+2,2)/2;function ql(M,_){let S=M.actions&&M.actions[_];if(!S)return!1;for(let z of Object.values(M.actions))z!==S&&z.isRunning()&&z.fadeOut(.15);return S.reset().setEffectiveTimeScale(1).fadeIn(.12).play(),!0}let To=new I;function xf(M,_="head"){let S=r.get(M);if(!S||!t||!n)return null;let z=_==="feet"?0:_==="center"?S.height*.55:(S.top||S.height)+.12;return To.set(S.root.position.x,S.root.position.y+z,S.root.position.z).project(t),{x:(To.x+1)/2*n.clientWidth,y:(1-To.y)/2*n.clientHeight}}let xr=M=>{let _=r.get(M);return _?new I(_.root.position.x,_.height*.55,_.root.position.z):null};function vf(M,_){if(!e)return;let S=new Ot,z=new Qt({color:new Le(_),transparent:!0,opacity:.9,depthWrite:!1,blending:Hi,side:gn}),N=new yt(new Yi(.75,.82,48),z),B=new yt(new Yi(.5,.54,6),z);S.add(N,B);for(let F=0;F<6;F++){let Z=new yt(new Wi(.06,.28),z);Z.position.set(Math.cos(F*Math.PI/3)*.64,Math.sin(F*Math.PI/3)*.64,0),Z.rotation.z=F*Math.PI/3,S.add(Z)}S.rotation.x=-Math.PI/2,S.position.copy(M.root.position).setY(.05),e.add(S),wn(.75,F=>{S.rotation.z=F*2.2,S.scale.setScalar(.6+yi(Math.min(1,F*2.5))*.6),z.opacity=.9*(F<.6?1:1-(F-.6)/.4)}).then(()=>{e&&e.remove(S),S.traverse(F=>F.geometry&&F.geometry.dispose()),z.dispose()})}async function yf(M,_,S,z={}){let N=r.get(M);if(!N)return;N.busy=!0;let B=r.get(_),F=B?B.root.position.clone().sub(N.home).setY(0):new I(0,0,N.u.side==="A"?-1:1),Z=Math.atan2(F.x,F.z),P=N.root.rotation.y,ne=N.anim;if(z.ult&&!m){let be=++xi;pn.copy(N.root.position).setY(1.2);let re=Mn;wn(.25,ve=>{xi===be&&(Mn=re+(1-re)*ve)}).then(()=>_i(.55)).then(()=>{if(xi===be)return wn(.35,ve=>{xi===be&&(Mn=1-ve)})})}if(ne&&N.u.titan){ne.has("Jump")&&ne.has("Jump_Land")&&(z.ult||Math.random()<.4)?(ne.play("Jump",{fade:.12,speed:1.6,hold:!0}),await _i(.3),ne.play("Jump_Land",{fade:.08,speed:1.4}),await _i(.12),jl(.35),await _i(.2)):(ne.strike(),await _i(.5));return}if(ne&&S){let be=N.home.clone().add(F.clone().multiplyScalar(Math.max(.35,1-1.15/Math.max(1.2,F.length()))));ne.play("Run",{loop:!0,fade:.12,speed:1.4}),await wn(.26,re=>{N.root.position.lerpVectors(N.home,be,Wl(re)),N.root.rotation.y=P+ca(P,Z)*yi(Math.min(1,re*1.6))}),ne.strike(),await _i(.35);return}if(ne){N.root.rotation.y=P+ca(P,Z),ne.play(z.support&&ne.has(ne.S.support)?ne.S.support:ne.S.cast,{fade:.12}),vf(N,ELEMENTS[N.u.el]?ELEMENTS[N.u.el].color:"#ffffff");let be=N.home.clone().add(F.clone().normalize().multiplyScalar(.2));await wn(.2,re=>{N.root.position.lerpVectors(N.home,be,yi(re))}),await _i(.15);return}let Me=S?N.home.clone().add(F.clone().multiplyScalar(.55)):N.home.clone().add(F.clone().normalize().multiplyScalar(.25));await wn(S?.22:.2,be=>{N.root.position.lerpVectors(N.home,Me,yi(be)),N.armR&&(N.armR.rotation.x=-(S?150:160)*be*Math.PI/180,S||(N.armL.rotation.x=-160*be*Math.PI/180))}),S&&N.armR&&await wn(.1,be=>{N.armR.rotation.x=(-150+190*be)*Math.PI/180})}let ca=(M,_)=>{let S=(_-M)%(Math.PI*2);return S>Math.PI&&(S-=Math.PI*2),S<-Math.PI&&(S+=Math.PI*2),S},_i=M=>wn(M,()=>{});async function _f(M){let _=r.get(M);if(!_||_.dead)return;let S=_.root.position.clone(),z=_.root.rotation.y,N=_.u.side==="A"?Gt:0,B=_.armR?_.armR.rotation.x:0,F=_.armL?_.armL.rotation.x:0,Z=S.distanceTo(_.home)>.6;if(_.anim&&_.u.titan&&Math.random()<.5){let P=["Yes","No","Wave"].filter(_.anim.has);P.length&&_.anim.play(P[Math.floor(Math.random()*P.length)],{fade:.2,speed:1.3})}else _.anim&&Z&&_.anim.play(_.anim.has("Run_Back")?"Run_Back":"Run",{loop:!0,fade:.15,speed:1.5});await wn(.25,P=>{_.root.position.lerpVectors(S,_.home,Wl(P)),_.root.rotation.y=z+ca(z,N)*yi(P),_.armR&&!_.mixer&&(_.armR.rotation.x=B*(1-P),_.armL.rotation.x=F*(1-P))}),_.anim&&Z&&!_.u.titan&&_.anim.idle(.2),_.busy=!1}function Mf(M,_){let S=r.get(M);if(!S||S.dead)return;let z=_&&S.u.maxHp?_.amount/S.u.maxHp:0,N=!!(_&&_.crit),B=N||z>.14,F=S.anim;if(N&&(ai=Math.max(ai,m?0:.09),Wt=.25),F&&!S.busy?S.u.titan?F.play(F.has("HitReact")?"HitReact":"Idle",{fade:.1}):!B&&_&&(_.em<1||z<.04)&&Math.random()<.35&&F.has("Roll")?F.play("Roll",{fade:.1,speed:1.5}):F.play(B&&F.has("HitRecieve_2")?"HitRecieve_2":"HitRecieve",{fade:.08}):F||ql(S,"hit"),S.u.titan)return;let Z=new I(0,0,(S.u.side==="A"?1:-1)*(B?.34:.2)),P=S.root.position.clone();wn(B?.24:.18,ne=>{S.root.position.copy(P).addScaledVector(Z,Math.sin(ne*Math.PI))})}function wf(M){let _=r.get(M);if(!_||_.dead)return;_.dead=!0;let S=_.root.position.y;(_.anim&&_.anim.has("Death")?(_.anim.play("Death",{fade:.12,clamp:!0}),Promise.resolve()):ql(_,"die")?Promise.resolve():wn(.45,N=>{_.root.rotation.x=-1.4*yi(N)*(_.u.side==="A"?-1:1)})).then(()=>_i(1.1)).then(()=>wn(.8,N=>{_.root.position.y=S-.9*N})).then(()=>{_.aura.visible=!1,_.ring.visible=!1}),rs(xr(M),"#8a8a96",26,1.6,.6,-.3)}function Sf(M="A"){let _=0;for(let S of r.values()){if(S.u.side!==M||S.dead||!S.anim)continue;S.won=!0,S.busy=!0;let z=S.root.rotation.y,N=.1+_++*.12;_i(N).then(()=>{wn(.35,B=>{S.root.rotation.y=z+ca(z,-.25+S.home.x*.08)*yi(B)}),S.anim.play(S.anim.S.win,{loop:!0,fade:.25})})}}function Tf(M,_){let S=r.get(M);S&&(_?(S.ring.material.color.set(_),S.ring.material.opacity=.85):S.ring.material.opacity=0)}function rs(M,_,S,z,N,B){if(!M||!e)return;m&&(S=Math.ceil(S/3));let F=new Tt,Z=new Float32Array(S*3),P=[];for(let re=0;re<S;re++)Z[re*3]=M.x,Z[re*3+1]=M.y,Z[re*3+2]=M.z,P.push(new I(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(z*(.4+Math.random()*.6)));F.setAttribute("position",new kt(Z,3));let ne=new Ms({color:new Le(_),size:N,map:We(),transparent:!0,depthWrite:!1,blending:Hi,sizeAttenuation:!0}),Me=new nr(F,ne);e.add(Me);let be=0;o.push({update(re){be+=re;let ve=F.attributes.position.array;for(let Ve=0;Ve<S;Ve++)P[Ve].y-=B*re*6,ve[Ve*3]+=P[Ve].x*re,ve[Ve*3+1]+=P[Ve].y*re,ve[Ve*3+2]+=P[Ve].z*re;return F.attributes.position.needsUpdate=!0,ne.opacity=Math.max(0,1-be/.7),be>.7?(e&&e.remove(Me),F.dispose(),ne.dispose(),!1):!0}})}function Af(M,_,S){let z=xr(M);rs(z,_,S?44:22,S?5:3.2,S?.45:.32,.6),rs(z,"#ffffff",S?10:5,1.4,S?1.1:.7,0)}function Ef(M){let _=r.get(M);_&&rs(_.root.position.clone().setY(.3),"#7dff8a",18,1,.3,-.6)}function Cf(M,_){let S=r.get(M);S&&rs(S.root.position.clone().setY(.4),_?"#ffd86a":"#c07aff",10,.9,.28,-.5)}function Rf(M,_){let S=r.get(M);S&&rs(S.root.position.clone().setY(.1),_,26,1.4,.35,-.7)}function Pf(M,_,S,z=.3){let N=xr(M),B=xr(_);if(!N||!B||!e)return Promise.resolve();let F=new yt(ce().sphere,Y(le(S,"#ffffff",.4)));F.scale.setScalar(.3),e.add(F);let Z=0;return wn(z,P=>{F.position.lerpVectors(N,B,P),F.position.y+=Math.sin(P*Math.PI)*.9,++Z%2===0&&rs(F.position.clone(),S,3,.3,.35,0)}).then(()=>{e&&e.remove(F)})}function Lf(M,_){let S=xr(M);if(!S||!e)return;let z=new yt(new Yi(.55,.75,32,1,-.9,2.2),new Qt({color:new Le(_),transparent:!0,side:gn,blending:Hi,depthWrite:!1}));z.position.copy(S),z.quaternion.copy(t.quaternion),z.rotateZ(Math.random()*.8-.4),e.add(z),wn(.22,N=>{z.material.opacity=1-N,z.scale.setScalar(.8+N*.5)}).then(()=>{e&&e.remove(z),z.geometry.dispose(),z.material.dispose()})}function jl(M=.25){m||(u=.22,f=M)}function If(M){l.push(M)}let Xl=256,Yl=window.SB_VERSION&&window.SB_VERSION.version||"dev",Kl="sigilbound.faces.v1",as=new Map;try{let M=JSON.parse(localStorage.getItem(Kl)||"null");if(M&&M.ver===Yl)for(let[_,S]of Object.entries(M.faces||{}))as.set(_,S)}catch{}let Ao=[],Eo=!1,hn=null,Jl=[],Zl=0,Co=(M,_,S)=>M==="titan"?`titan|${_}`:`${M}|${S?1:0}`;function Df(){clearTimeout(Zl),Zl=setTimeout(()=>{try{localStorage.setItem(Kl,JSON.stringify({ver:Yl,faces:Object.fromEntries(as)}))}catch{}},400)}function kf(M,_,S){let z=M==="titan"?"titan":x[M]||"adventurer",N=Qe(M,z,S,_);if(!N)return null;hn||(hn=new ia({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),hn.setPixelRatio(1),hn.setSize(Xl,Xl,!1),hn.outputEncoding=ot,hn.toneMapping=ta,hn.toneMappingExposure=kn.exposure,hn.setClearColor(0,0));let B=new ji;B.environment=xo(hn),B.add(new or(16774374,3813440,1.3));let F=new Dn(16773597,2.2);F.position.set(-2,3,4),B.add(F);let Z=new Dn(16777215,.6);Z.position.set(3,1,3),B.add(Z);let P=new Dn(_&&ELEMENTS[_]?new Le(ELEMENTS[_].color):10070783,1.4);P.position.set(2,3,-4),B.add(P);let ne=N.model;ne.rotation.y=-.35,B.add(ne),N.mixer&&N.mixer.update(.6);for(let et of N.fx||[])et(.6);ne.updateMatrixWorld(!0);let Me=null;ne.traverse(et=>{!Me&&et.isBone&&et.name==="Head"&&(Me=et)});let be=new I;Me?Me.getWorldPosition(be):be.set(0,N.height*.8,0);let re=z==="titan",ve=re?2.9:.74;be.y+=.15;let Ve=new Jt(28,1,.05,50),rt=ve/2/Math.tan(14*ze);Ve.position.set(be.x,be.y+ve*.08,be.z+rt),Ve.lookAt(be.x,be.y-ve*.04,be.z),hn.render(B,Ve);let Se=null;try{Se=hn.domElement.toDataURL("image/webp",.86),Se.startsWith("data:image/webp")||(Se=hn.domElement.toDataURL("image/png"))}catch{Se=null}return B.traverse(et=>{et.isMesh&&(Array.isArray(et.material)?et.material:[et.material]).forEach(oi=>!oi.userData.shared&&oi.dispose&&oi.dispose())}),Se}function Ff(){Eo||(Eo=!0,X().then(()=>{let M=()=>{let _=Ao.shift();if(!_){Eo=!1,hn&&(vo(hn),hn.dispose(),hn.forceContextLoss(),hn=null),Df(),Jl.forEach(z=>{try{z()}catch{}});return}let S=Co(_.id,_.el,_.hollow);if(!as.has(S))try{let z=kf(_.id,_.el,_.hollow);as.set(S,z)}catch(z){console.warn("Sigilbound: face failed",_.id,z),as.set(S,null)}setTimeout(M,0)};M()}))}function Nf(M,_,S=!1){if(!y())return null;let z=Co(M,_,S);return as.has(z)?as.get(z):(Ao.some(N=>Co(N.id,N.el,N.hollow)===z)||Ao.push({id:M,el:_,hollow:S}),Ff(),null)}let Of=M=>Jl.push(M),Ee={renderer:null,scene:null,camera:null,built:null,key:"",raf:0,last:0,yaw:-.35,spin:0,host:null};function Ql(M){if(Ee.raf=0,!Ee.renderer||!Ee.renderer.domElement.isConnected)return;let _=Math.min(.05,(M-Ee.last)/1e3);if(Ee.last=M,Ee.built){Ee.built.mixer&&Ee.built.mixer.update(_);for(let S of Ee.built.fx||[])S(M/1e3);Ee.drag||(Ee.yaw+=Ee.spin*_,Ee.spin*=Math.pow(.04,_)),Ee.built.model.rotation.y=Ee.yaw}Ee.renderer.render(Ee.scene,Ee.camera),Ee.raf=requestAnimationFrame(Ql)}function Ro(){if(!Ee.renderer||!Ee.host)return;let M=Ee.host.clientWidth||110,_=Ee.host.clientHeight||165;Ee.renderer.setSize(M,_,!1),Ee.camera.aspect=M/_,Ee.camera.updateProjectionMatrix()}function zf(){let M=new ia({antialias:!0,alpha:!0});M.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),M.outputEncoding=ot,M.toneMapping=ta,M.toneMappingExposure=kn.exposure,M.setClearColor(0,0),M.domElement.className="show3d",Ee.renderer=M,Ee.scene=new ji,Ee.scene.environment=xo(M),Ee.scene.add(new or(16774374,3813440,1.3));let _=new Dn(16773597,2.2);_.position.set(-2,3,4),Ee.scene.add(_);let S=new Dn(16777215,.6);S.position.set(3,1,3),Ee.scene.add(S),Ee.rim=new Dn(10070783,1.4),Ee.rim.position.set(2,3,-4),Ee.scene.add(Ee.rim),Ee.camera=new Jt(30,110/165,.1,50);let z=M.domElement,N=0,B=0,F=0,Z=0;z.addEventListener("pointerdown",ne=>{Ee.drag=!0,N=F=ne.clientX,Z=performance.now(),B=0,Ee.spin=0,z.setPointerCapture&&z.setPointerCapture(ne.pointerId)}),z.addEventListener("pointermove",ne=>{if(!Ee.drag)return;let Me=ne.clientX-F,be=performance.now();Ee.yaw+=Me*.012,B+=Math.abs(Me),Ee.spin=Me*.012/Math.max(.008,(be-Z)/1e3),F=ne.clientX,Z=be});let P=()=>{Ee.drag&&(Ee.drag=!1,performance.now()-Z>80&&(Ee.spin=0),Ee.spin=Math.max(-8,Math.min(8,Ee.spin)),B<6&&Ee.built&&Ee.built.anim&&Ee.built.anim.strike())};z.addEventListener("pointerup",P),z.addEventListener("pointercancel",P),window.addEventListener("resize",Ro)}function Bf(M,_,S,z){if(!M||!y()||!j)return!1;Ee.renderer||zf();let N=`${_}|${S}|${Yt(z)}`;if(Ee.key!==N){Ee.built&&Ee.scene.remove(Ee.built.model);let B=Qe(_,x[_]||"adventurer",!1,S,z||null);if(!B)return!1;Ee.built=B,Ee.key=N,Ee.yaw=-.35,Ee.spin=0,Ee.scene.add(B.model),Ee.rim.color.set(ELEMENTS[S]?ELEMENTS[S].color:"#99aaff"),B.mixer&&B.mixer.update(.5),B.model.updateMatrixWorld(!0);let F=new Gn().set(new I(-.45,0,-.45),new I(.45,B.height-.2,.45)),Z=new Gn;B.model.traverse(rt=>{rt.isMesh&&rt.userData.kit&&rt.geometry&&(rt.geometry.boundingBox||rt.geometry.computeBoundingBox(),F.union(Z.copy(rt.geometry.boundingBox).applyMatrix4(rt.matrixWorld)))});let P=Math.min(1.3,Math.max(-F.min.x,F.max.x,-F.min.z,F.max.z)),ne=Math.min(-.3,Math.max(-.5,F.min.y)),Me=Math.max(2.65,Math.min(3.3,F.max.y+.05)),be=Math.tan(15*ze),re=(M.clientWidth||110)/(M.clientHeight||165),ve=Math.max(5.5,Math.max((Me-ne)/2/be,P/(be*re))*1.04+P*.4);Ee.camera.position.set(0,(ne+Me)/2+.18,ve),Ee.camera.lookAt(0,(ne+Me)/2,0);let Ve=ELEMENTS[S]?ELEMENTS[S].color:"#ffffff";Ee.aura?Ee.aura.material=Y(Ve,.3):(Ee.aura=new yt(new Jr(.6,40),Y(Ve,.3)),Ee.aura.rotation.x=-Math.PI/2,Ee.aura.position.y=.01,Ee.scene.add(Ee.aura))}return Ee.host=M,Ee.renderer.domElement.parentNode!==M&&M.prepend(Ee.renderer.domElement),M.classList.add("has3d"),Ro(),Ee.raf||(Ee.last=performance.now(),Ee.raf=requestAnimationFrame(Ql)),!0}function Uf(M){Ee.renderer&&(M&&!(Ee.host&&Ee.host.matches&&Ee.host.matches(M))||(cancelAnimationFrame(Ee.raf),Ee.raf=0,window.removeEventListener("resize",Ro),Ee.renderer.domElement.remove(),vo(Ee.renderer),Ee.renderer.dispose(),Ee.renderer.forceContextLoss(),Object.assign(Ee,{renderer:null,scene:null,camera:null,built:null,key:"",host:null,aura:null})))}return V(),{supported:y,mount:Be,unmount:Wn,addUnit:oa,removeSide:ss,screen:xf,attack:yf,recover:_f,hit:Mf,die:wf,victory:Sf,setHighlight:Tf,setQuality:jt,get quality(){return wt?wt.current:null},get qualityAuto(){return wt?wt.auto:!0},burst:Af,heal:Ef,buff:Cf,cast:Rf,projectile:Pf,slash:Lf,shake:jl,onFrame:If,whenReady:X,face:Nf,onFaces:Of,showcase:Bf,showcaseStop:Uf,has:M=>r.has(M),get active(){return!!a},get modelsReady(){return j}}})();window.W3D=Fx;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

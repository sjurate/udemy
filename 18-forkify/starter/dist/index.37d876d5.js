!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},o={},i=t.parcelRequire7e89;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7e89=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"4ko55":"index.37d876d5.js","hOerA":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,p,d={},h="object"==typeof document&&document.all,g=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;d=p.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,y={},m={};v=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var b=Function.prototype,_=b.call,w=v&&b.bind.bind(_,_);m=v?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var O=TypeError;E=function(e){if(S(e))throw O("Can't call method on "+e);return e};var $=Object;k=function(e){return $(E(e))};var j=m({}.hasOwnProperty);y=Object.hasOwn||function(e,t){return j(k(e),t)};var A,T=Function.prototype,L=c&&Object.getOwnPropertyDescriptor,P=y(T,"name"),x={EXISTS:P,PROPER:P&&"something"===function(){}.name,CONFIGURABLE:P&&(!c||c&&L(T,"name").configurable)}.CONFIGURABLE,M={},I={},R=Object.defineProperty;A=function(e,t){try{R(a,e,{value:t,configurable:!0,writable:!0})}catch(r){a[e]=t}return t};var H="__core-js_shared__",C=a[H]||A(H,{});I=C;var F=m(Function.toString);d(I.inspectSource)||(I.inspectSource=function(e){return F(e)}),M=I.inspectSource;var N,q,D=a.WeakMap;q=d(D)&&/native code/.test(String(D));var U={},W=p.all;U=p.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:d(e)||e===W}:function(e){return"object"==typeof e?null!==e:d(e)};var G,B,z,Y={},V=a.document,J=U(V)&&U(V.createElement);z=function(e){return J?V.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(z("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(U(e))return e;throw Z(X(e)+" is not an object")};var ee,te,re={},ne=Function.prototype.call;re=v?ne.bind(ne):function(){return ne.apply(ne,arguments)};var oe,ie={},ae=function(e){return d(e)?e:void 0};oe=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=m({}.isPrototypeOf);var ce,ue,le,fe={};fe=oe("navigator","userAgent")||"";var pe,de,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,ye=ve&&ve.v8;ye&&(de=(pe=ye.split("."))[0]>0&&pe[0]<4?1:+(pe[0]+pe[1])),!de&&fe&&(!(pe=fe.match(/Edge\/(\d+)/))||pe[1]>=74)&&(pe=fe.match(/Chrome\/(\d+)/))&&(de=+pe[1]),le=de,ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})),ce=ue&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;ie=ce?function(e){return"symbol"==typeof e}:function(e){var t=oe("Symbol");return d(t)&&se(t.prototype,me(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(d(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var r=e[t];return S(r)?void 0:_e(r)};var Se,Oe=TypeError;Se=function(e,t){var r,n;if("string"===t&&d(r=e.toString)&&!U(n=re(r,e)))return n;if(d(r=e.valueOf)&&!U(n=re(r,e)))return n;if("string"!==t&&d(r=e.toString)&&!U(n=re(r,e)))return n;throw Oe("Can't convert object to primitive value")};var $e,je;(je=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Ae,Te=0,Le=Math.random(),Pe=m(1..toString);Ae=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Pe(++Te+Le,36)};var xe=je("wks"),Me=a.Symbol,Ie=Me&&Me.for,Re=ce?Me:Me&&Me.withoutSetter||Ae;$e=function(e){if(!y(xe,e)||!ue&&"string"!=typeof xe[e]){var t="Symbol."+e;ue&&y(Me,e)?xe[e]=Me[e]:xe[e]=ce&&Ie?Ie(t):Re(t)}return xe[e]};var He=TypeError,Ce=$e("toPrimitive");te=function(e,t){if(!U(e)||ie(e))return e;var r,n=be(e,Ce);if(n){if(void 0===t&&(t="default"),r=re(n,e,t),!U(r)||ie(r))return r;throw He("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return ie(t)?t:t+""};var Fe=TypeError,Ne=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,De="enumerable",Ue="configurable",We="writable";G=c?Q?function(e,t,r){if(K(e),t=ee(t),K(r),"function"==typeof e&&"prototype"===t&&"value"in r&&We in r&&!r[We]){var n=qe(e,t);n&&n[We]&&(e[t]=r.value,r={configurable:Ue in r?r[Ue]:n[Ue],enumerable:De in r?r[De]:n[De],writable:!1})}return Ne(e,t,r)}:Ne:function(e,t,r){if(K(e),t=ee(t),K(r),B)try{return Ne(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Fe("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var Ge;Ge=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Y=c?function(e,t,r){return G(e,t,Ge(1,r))}:function(e,t,r){return e[t]=r,e};var Be,ze=je("keys");Be=function(e){return ze[e]||(ze[e]=Ae(e))};var Ye={};Ye={};var Ve,Je,Qe,Ke="Object already initialized",Xe=a.TypeError,Ze=a.WeakMap;if(q||I.state){var et=I.state||(I.state=new Ze);et.get=et.get,et.has=et.has,et.set=et.set,Ve=function(e,t){if(et.has(e))throw Xe(Ke);return t.facade=e,et.set(e,t),t},Je=function(e){return et.get(e)||{}},Qe=function(e){return et.has(e)}}else{var tt=Be("state");Ye[tt]=!0,Ve=function(e,t){if(y(e,tt))throw Xe(Ke);return t.facade=e,Y(e,tt,t),t},Je=function(e){return y(e,tt)?e[tt]:{}},Qe=function(e){return y(e,tt)}}var rt=(N={set:Ve,get:Je,has:Qe,enforce:function(e){return Qe(e)?Je(e):Ve(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=Je(t)).type!==e)throw Xe("Incompatible receiver, "+e+" required");return r}}}).enforce,nt=N.get,ot=Object.defineProperty,it=c&&!u((function(){return 8!==ot((function(){}),"length",{value:8}).length})),at=String(String).split("String"),st=f=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!y(e,"name")||x&&e.name!==t)&&(c?ot(e,"name",{value:t,configurable:!0}):e.name=t),it&&r&&y(r,"arity")&&e.length!==r.arity&&ot(e,"length",{value:r.arity});try{r&&y(r,"constructor")&&r.constructor?c&&ot(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=rt(e);return y(n,"source")||(n.source=at.join("string"==typeof t?t:"")),e};Function.prototype.toString=st((function(){return d(this)&&nt(this).source||M(this)}),"toString"),l=function(e,t,r){return r.get&&f(r.get,t,{getter:!0}),r.set&&f(r.set,t,{setter:!0}),G(e,t,r)};var ct;ct=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ut=a.RegExp,lt=ut.prototype;c&&u((function(){var e=!0;try{ut(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",o=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(lt,"flags").get.call(t)!==n||r!==n}))&&l(lt,"flags",{configurable:!0,get:ct});var ft,pt;pt="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var dt,ht={},gt={};gt[$e("toStringTag")]="z",dt="[object z]"===String(gt);var vt,yt=m({}.toString),mt=m("".slice);vt=function(e){return mt(yt(e),8,-1)};var bt=$e("toStringTag"),_t=Object,wt="Arguments"==vt(function(){return arguments}());ht=dt?vt:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=_t(e),bt))?r:wt?vt(t):"Object"==(n=vt(t))&&d(t.callee)?"Arguments":n};var kt;kt=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(d(r)&&f(r,i,n),n.global)o?e[t]=r:A(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:G(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var Et,St=G,Ot={};Et=!u((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}));var $t=Be("IE_PROTO"),jt=Object,At=jt.prototype;Ot=Et?jt.getPrototypeOf:function(e){var t=k(e);if(y(t,$t))return t[$t];var r=t.constructor;return d(r)&&t instanceof r?r.prototype:t instanceof jt?At:null};var Tt,Lt={},Pt=String,xt=TypeError;Tt=function(e){if("object"==typeof e||d(e))return e;throw xt("Can't set "+Pt(e)+" as a prototype")},Lt=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=m(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return K(r),Tt(n),t?e(r,n):r.__proto__=n,r}}():void 0);var Mt,It,Rt,Ht=N.enforce,Ct=N.get,Ft=a.Int8Array,Nt=Ft&&Ft.prototype,qt=a.Uint8ClampedArray,Dt=qt&&qt.prototype,Ut=Ft&&Ot(Ft),Wt=Nt&&Ot(Nt),Gt=Object.prototype,Bt=a.TypeError,zt=$e("toStringTag"),Yt=Ae("TYPED_ARRAY_TAG"),Vt="TypedArrayConstructor",Jt=pt&&!!Lt&&"Opera"!==ht(a.opera),Qt=!1,Kt={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Xt={BigInt64Array:8,BigUint64Array:8},Zt=function(e){var t=Ot(e);if(U(t)){var r=Ct(t);return r&&y(r,Vt)?r[Vt]:Zt(t)}},er=function(e){if(!U(e))return!1;var t=ht(e);return y(Kt,t)||y(Xt,t)};for(Mt in Kt)(Rt=(It=a[Mt])&&It.prototype)?Ht(Rt)[Vt]=It:Jt=!1;for(Mt in Xt)(Rt=(It=a[Mt])&&It.prototype)&&(Ht(Rt)[Vt]=It);if((!Jt||!d(Ut)||Ut===Function.prototype)&&(Ut=function(){throw Bt("Incorrect invocation")},Jt))for(Mt in Kt)a[Mt]&&Lt(a[Mt],Ut);if((!Jt||!Wt||Wt===Gt)&&(Wt=Ut.prototype,Jt))for(Mt in Kt)a[Mt]&&Lt(a[Mt].prototype,Wt);if(Jt&&Ot(Dt)!==Wt&&Lt(Dt,Wt),c&&!y(Wt,zt))for(Mt in Qt=!0,St(Wt,zt,{get:function(){return U(this)?this[Yt]:void 0}}),Kt)a[Mt]&&Y(a[Mt],Yt,Mt);ft={NATIVE_ARRAY_BUFFER_VIEWS:Jt,TYPED_ARRAY_TAG:Qt&&Yt,aTypedArray:function(e){if(er(e))return e;throw Bt("Target is not a typed array")},aTypedArrayConstructor:function(e){if(d(e)&&(!Lt||se(Ut,e)))return e;throw Bt(we(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(c){if(r)for(var o in Kt){var i=a[o];if(i&&y(i.prototype,e))try{delete i.prototype[e]}catch(r){try{i.prototype[e]=t}catch(e){}}}Wt[e]&&!r||kt(Wt,e,r?t:Jt&&Nt[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,o;if(c){if(Lt){if(r)for(n in Kt)if((o=a[n])&&y(o,e))try{delete o[e]}catch(e){}if(Ut[e]&&!r)return;try{return kt(Ut,e,r?t:Jt&&Ut[e]||t)}catch(e){}}for(n in Kt)!(o=a[n])||o[e]&&!r||kt(o,e,t)}},getTypedArrayConstructor:Zt,isView:function(e){if(!U(e))return!1;var t=ht(e);return"DataView"===t||y(Kt,t)||y(Xt,t)},isTypedArray:er,TypedArray:Ut,TypedArrayPrototype:Wt};var tr,rr,nr,or={},ir=Math.ceil,ar=Math.floor;or=Math.trunc||function(e){var t=+e;return(t>0?ar:ir)(t)},nr=function(e){var t=+e;return t!=t||0===t?0:or(t)};var sr=Math.min;rr=function(e){return e>0?sr(nr(e),9007199254740991):0},tr=function(e){return rr(e.length)};var cr,ur,lr=RangeError;ur=function(e){var t=nr(e);if(t<0)throw lr("The argument can't be less than 0");return t};var fr=RangeError;cr=function(e,t){var r=ur(e);if(r%t)throw fr("Wrong offset");return r};var pr=a.RangeError,dr=a.Int8Array,hr=dr&&dr.prototype,gr=hr&&hr.set,vr=ft.aTypedArray,yr=ft.exportTypedArrayMethod,mr=!u((function(){var e=new Uint8ClampedArray(2);return re(gr,e,{length:1,0:3},1),3!==e[1]})),br=mr&&ft.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new dr(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));yr("set",(function(e){vr(this);var t=cr(arguments.length>1?arguments[1]:void 0,1),r=k(e);if(mr)return re(gr,this,r,t);var n=this.length,o=tr(r),i=0;if(o+t>n)throw pr("Wrong length");for(;i<o;)this[t+i]=r[i++]}),!mr||br);var _r,wr,kr,Er={}.propertyIsEnumerable,Sr=Object.getOwnPropertyDescriptor,Or=Sr&&!Er.call({1:2},1);kr=Or?function(e){var t=Sr(this,e);return!!t&&t.enumerable}:Er;var $r,jr={},Ar=Object,Tr=m("".split);jr=u((function(){return!Ar("z").propertyIsEnumerable(0)}))?function(e){return"String"==vt(e)?Tr(e,""):Ar(e)}:Ar,$r=function(e){return jr(E(e))};var Lr,Pr,xr,Mr,Ir=Object.getOwnPropertyDescriptor,Rr=wr=c?Ir:function(e,t){if(e=$r(e),t=ee(t),B)try{return Ir(e,t)}catch(e){}if(y(e,t))return Ge(!re(kr,e,t),e[t])},Hr={},Cr=Math.max,Fr=Math.min;Mr=function(e,t){var r=nr(e);return r<0?Cr(r+t,0):Fr(r,t)};var Nr=function(e){return function(t,r,n){var o,i=$r(t),a=tr(i),s=Mr(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},qr={includes:Nr(!0),indexOf:Nr(!1)}.indexOf,Dr=m([].push);xr=function(e,t){var r,n=$r(e),o=0,i=[];for(r in n)!y(Ye,r)&&y(n,r)&&Dr(i,r);for(;t.length>o;)y(n,r=t[o++])&&(~qr(i,r)||Dr(i,r));return i};var Ur,Wr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Pr=Object.getOwnPropertyNames||function(e){return xr(e,Wr)},Ur=Object.getOwnPropertySymbols;var Gr=m([].concat);Hr=oe("Reflect","ownKeys")||function(e){var t=Pr(K(e));return Ur?Gr(t,Ur(e)):t},Lr=function(e,t,r){for(var n=Hr(t),o=G,i=wr,a=0;a<n.length;a++){var s=n[a];y(e,s)||r&&y(r,s)||o(e,s,i(t,s))}};var Br={},zr=/#|\.prototype\./,Yr=function(e,t){var r=Jr[Vr(e)];return r==Kr||r!=Qr&&(d(t)?u(t):!!t)},Vr=Yr.normalize=function(e){return String(e).replace(zr,".").toLowerCase()},Jr=Yr.data={},Qr=Yr.NATIVE="N",Kr=Yr.POLYFILL="P";Br=Yr,_r=function(e,t){var r,n,o,i,s,c=e.target,u=e.global,l=e.stat;if(r=u?a:l?a[c]||A(c,{}):(a[c]||{}).prototype)for(n in t){if(i=t[n],o=e.dontCallGetSet?(s=Rr(r,n))&&s.value:r[n],!Br(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Lr(i,o)}(e.sham||o&&o.sham)&&Y(i,"sham",!0),kt(r,n,i,e)}};var Xr,Zr={},en=Function.prototype,tn=en.apply,rn=en.call;Zr="object"==typeof Reflect&&Reflect.apply||(v?rn.bind(tn):function(){return rn.apply(tn,arguments)});var nn,on,an=(on=function(e){if("Function"===vt(e))return m(e)})(on.bind);nn=function(e,t){return _e(e),void 0===t?e:v?an(e,t):function(){return e.apply(t,arguments)}};var sn={};sn=oe("document","documentElement");var cn={};cn=m([].slice);var un,ln=TypeError;un=function(e,t){if(e<t)throw ln("Not enough arguments");return e};var fn;fn=/(?:ipad|iphone|ipod).*applewebkit/i.test(fe);var pn;pn="process"==vt(a.process);var dn,hn,gn,vn,yn=a.setImmediate,mn=a.clearImmediate,bn=a.process,_n=a.Dispatch,wn=a.Function,kn=a.MessageChannel,En=a.String,Sn=0,On={},$n="onreadystatechange";try{dn=a.location}catch(e){}var jn=function(e){if(y(On,e)){var t=On[e];delete On[e],t()}},An=function(e){return function(){jn(e)}},Tn=function(e){jn(e.data)},Ln=function(e){a.postMessage(En(e),dn.protocol+"//"+dn.host)};yn&&mn||(yn=function(e){un(arguments.length,1);var t=d(e)?e:wn(e),r=cn(arguments,1);return On[++Sn]=function(){Zr(t,void 0,r)},hn(Sn),Sn},mn=function(e){delete On[e]},pn?hn=function(e){bn.nextTick(An(e))}:_n&&_n.now?hn=function(e){_n.now(An(e))}:kn&&!fn?(vn=(gn=new kn).port2,gn.port1.onmessage=Tn,hn=nn(vn.postMessage,vn)):a.addEventListener&&d(a.postMessage)&&!a.importScripts&&dn&&"file:"!==dn.protocol&&!u(Ln)?(hn=Ln,a.addEventListener("message",Tn,!1)):hn=$n in z("script")?function(e){sn.appendChild(z("script"))[$n]=function(){sn.removeChild(this),jn(e)}}:function(e){setTimeout(An(e),0)});var Pn=(Xr={set:yn,clear:mn}).clear;_r({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Pn},{clearImmediate:Pn});var xn=Xr.set;_r({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==xn},{setImmediate:xn});const Mn="https://forkify-api.herokuapp.com/api/v2/recipes/",In="6782561e-af1e-4e60-ae7e-c05893d64624",Rn=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} Status: ${o.status}`);return i}catch(e){throw e}var r},Hn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Cn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceURL:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Fn=function(e=Hn.search.page){Hn.search.page=e;const t=(e-1)*Hn.search.resultsPerPage,r=e*Hn.search.resultsPerPage;return Hn.search.results.slice(t,r)},Nn=function(){localStorage.setItem("bookmarks",JSON.stringify(Hn.bookmarks))},qn=function(e){Hn.bookmarks.push(e),e.id===Hn.recipe.id&&(Hn.recipe.bookmarked=!0),Nn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Hn.bookmarks=JSON.parse(e))}();function Dn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Un;Un=i("aNJCr").getBundleURL("4ko55")+i("iE7OH").resolve("hOerA");var Wn;function Gn(e,t,r,n,o){const i=[2,3,5];if(!0===o)for(let t=3;t*t<=e;t+=2)e%t==0&&i.push(t);let a=0,s=1,c=e,u=t;for(;a<=i.length;)c%i[a]==0&&u%i[a]==0?(s*=i[a],c/=i[a],u/=i[a]):a++;return function(e,t,r,n){return 1===e&&1===t?`${r=`${n}${(parseInt(r)+1).toString()}`}`:0===t?`${n}${r}`:"0"==r?`${n}${t}/${e}`:`${n}${r} ${t}/${e}`}(u,c,r,n)}Wn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const r=e.toString(),n=r.split(".");let o,i=n[0];if("0"==o&&"0"!==i)return i;if("0"==o&&"0"==i)return"0";if(o=r.length>=17?n[1].slice(0,n[1].length-1):n[1],"99"==o&&"0"!==i)return`${i} 99/100`;if("99"==o&&"0"==i)return"99/100";if(1-parseFloat(`.${o}`)<.0011&&(o="999"),null==o)return i;let a=o.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&o.length>2){let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,t,r,n,o){const i=!0,a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Gn(l,(u-1)*s,n,o,i)}(o,r,e,i,t)}return function(e,t,r){const n=!1,o=parseInt(e,10),i=Math.pow(10,e.length);return Gn(o,i,t,r,n)}(o,i,t)};class Bn{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{const r=o[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n  <div class="spinner">\n  <svg>\n    <use href="${r(Un)}#icon-loader"></use>\n  </svg>\n  </div>\n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n            <div>\n              <svg>\n                <use href="${r(Un)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n        </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n        <div class="message>\n            <div>\n              <svg>\n                <use href="${r(Un)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n        </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}constructor(){Dn(this,"_data",void 0)}}var zn=new class extends Bn{addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const n=+r.dataset.updateTo;n>0&&e(n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn-bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n    </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${r(Un)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${r(Un)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${r(Un)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${r(Un)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${r(Un)}#icon-user"></use>\n          </svg>\n        </div>\n          <button class="btn--round btn-bookmark">\n            <svg class="">\n              <use href="${r(Un)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This this.#data was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceURL}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${r(Un)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n        `}_generateMarkupIngredient(e){return` <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(Un)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?r(Wn)(e.quantity):""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>`}constructor(...e){super(...e),Dn(this,"_parentElement",document.querySelector(".recipe")),Dn(this,"_errorMessage","We could not find this recipe. Please try another one."),Dn(this,"_message","")}};var Yn=new class{getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){Dn(this,"_parentEl",document.querySelector(".search"))}};var Vn=new class extends Bn{_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${r(Un)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}constructor(...e){super(...e),Dn(this,"_parentElement","")}};var Jn=new class extends Bn{_generateMarkup(){return this._data.map((e=>Vn.render(e,!1))).join("")}constructor(...e){super(...e),Dn(this,"_parentElement",document.querySelector(".results")),Dn(this,"_errorMessage","No recipes found for your query! Please try again ;)"),Dn(this,"_message","")}};var Qn=new class extends Bn{addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Vn.render(e,!1))).join("")}constructor(...e){super(...e),Dn(this,"_parentElement",document.querySelector(".bookmarks__list")),Dn(this,"_errorMessage","No bookmarks yet. Find a nice recipe and bookmark it ;)"),Dn(this,"_message","")}};var Kn=new class extends Bn{addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;console.log(n),e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return console.log(t),1===e&&t>1?`\n      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${r(Un)}#icon-arrow-right"></use>\n            </svg>\n          </button>`:e===t&&t>1?`\n      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${r(Un)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>`:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${r(Un)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n          <use href="${r(Un)}#icon-arrow-right"></use>\n        </svg>\n      </button>`:""}constructor(...e){super(...e),Dn(this,"_parentElement",document.querySelector(".pagination"))}};var Xn=new class extends Bn{toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}constructor(){super(),Dn(this,"_parentElement",document.querySelector(".upload")),Dn(this,"_message","Recipe was successfully uploaded :)"),Dn(this,"_window",document.querySelector(".add-recipe-window")),Dn(this,"_overlay",document.querySelector(".overlay")),Dn(this,"_btnOpen",document.querySelector(".nav__btn--add-recipe")),Dn(this,"_btnClose",document.querySelector(".btn--close-modal")),this._addHandlerShowWindow(),this._addHandlerHideWindow()}},Zn=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),s=new T(n||[]);return o(a,"_invoke",{value:O(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,s){var c=f(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=$(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=f(e,t,r);if("normal"===c.type){if(n=r.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function $(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,$(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Zn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Zn:Function("r","regeneratorRuntime = r")(Zn)}document.querySelector(".recipe");const eo=async function(){try{const e=window.location.hash.slice(1);if(!e)return;zn.renderSpinner(),Jn.update(Fn()),Qn.update(Hn.bookmarks),await async function(e){try{const t=await Rn(`${Mn}${e}?key=${In}`);Hn.recipe=Cn(t),Hn.bookmarks.some((t=>t.id===e))?Hn.recipe.bookmarked=!0:Hn.recipe.bookmarked=!1}catch(e){throw console.log(`${e} !*!*!`),e}}(e),zn.render(Hn.recipe)}catch(e){zn.renderError(),console.error(e)}},to=async function(){try{Jn.renderSpinner();const e=Yn.getQuery();if(!e)return;await async function(e){try{Hn.search.query=e;const t=await Rn(`${Mn}?search=${e}&key=${In}`);console.log(t),Hn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Hn.search.page=1}catch(e){throw console.log(`${e} !*!*!`),e}}(e),Jn.render(Fn(1)),Kn.render(Hn.search)}catch(e){console.log(e)}},ro=function(e){Jn.render(Fn(e)),Kn.render(Hn.search)},no=function(e){!function(e){Hn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Hn.recipe.servings})),Hn.recipe.servings=e}(e),zn.update(Hn.recipe)},oo=function(){Hn.recipe.bookmarked?function(e){const t=Hn.bookmarks.findIndex((t=>t.id=e));Hn.bookmarks.splice(t,1),e===Hn.recipe.id&&(Hn.recipe.bookmarked=!1),Nn()}(Hn.recipe.id):qn(Hn.recipe),zn.update(Hn.recipe),Qn.render(Hn.bookmarks)},io=function(){Qn.render(Hn.bookmarks)},ao=async function(e){try{Xn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat! Please use the correct format :)");const[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}})),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await Rn(`${Mn}?key=${In}`,r);Hn.recipe=Cn(n),qn(Hn.recipe)}catch(e){throw e}}(e),console.log(Hn.recipe),zn.render(Hn.recipe),setTimeout((function(){Xn.toggleWindow()}),2500),Xn.renderMessage(),Qn.render(Hn.bookmarks),window.history.pushState(null,"",`#${Hn.recipe.id}`)}catch(e){console.log(e),Xn.renderError(e.message)}};Qn.addHandlerRender(io),zn.addHandlerRender(eo),zn.addHandlerUpdateServings(no),zn.addHandlerAddBookmark(oo),Yn.addHandlerSearch(to),Kn.addHandlerClick(ro),Xn._addHandlerUpload(ao)}();
//# sourceMappingURL=index.37d876d5.js.map
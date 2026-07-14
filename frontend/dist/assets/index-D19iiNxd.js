function od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _s={exports:{}},wl={},Ts={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),sd=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),fd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),gd=Symbol.for("react.memo"),vd=Symbol.for("react.lazy"),da=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Ls={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rs=Object.assign,Ms={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Ls}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Os(){}Os.prototype=vn.prototype;function ho(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Ls}var go=ho.prototype=new Os;go.constructor=ho;Rs(go,vn.prototype);go.isPureReactComponent=!0;var fa=Array.isArray,Fs=Object.prototype.hasOwnProperty,vo={current:null},Is={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Fs.call(t,r)&&!Is.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:o,props:l,_owner:vo.current}}function xd(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pa=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):t.toString(36)}function Ir(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case cr:case sd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Vl(o,0):r,fa(l)?(n="",e!=null&&(n=e.replace(pa,"$&/")+"/"),Ir(l,t,n,"",function(c){return c})):l!=null&&(yo(l)&&(l=xd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(pa,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",fa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Vl(i,s);o+=Ir(i,t,n,u,l)}else if(u=yd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Vl(i,s++),o+=Ir(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(i){return t.call(n,i,l++)}),r}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ar={transition:null},Sd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:vo};function Ds(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=vn;M.Fragment=ud;M.Profiler=dd;M.PureComponent=ho;M.StrictMode=cd;M.Suspense=hd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sd;M.act=Ds;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=vo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Fs.call(t,u)&&!Is.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fd,_context:e},e.Consumer=e};M.createElement=As;M.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:md,render:e}};M.isValidElement=yo;M.lazy=function(e){return{$$typeof:vd,_payload:{_status:-1,_result:e},_init:kd}};M.memo=function(e,t){return{$$typeof:gd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};M.unstable_act=Ds;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Ts.exports=M;var S=Ts.exports;const Us=ad(S),jd=od({__proto__:null,default:Us},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=S,Cd=Symbol.for("react.element"),Ed=Symbol.for("react.fragment"),Pd=Object.prototype.hasOwnProperty,zd=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Pd.call(t,r)&&!_d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Cd,type:e,key:i,ref:o,props:l,_owner:zd.current}}wl.Fragment=Ed;wl.jsx=Bs;wl.jsxs=Bs;_s.exports=wl;var a=_s.exports,vi={},$s={exports:{}},je={},Vs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var R=E.length;E.push(T);e:for(;0<R;){var Q=R-1>>>1,J=E[Q];if(0<l(J,T))E[Q]=T,E[R]=J,R=Q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],R=E.pop();if(R!==T){E[0]=R;e:for(var Q=0,J=E.length,gr=J>>>1;Q<gr;){var jt=2*(Q+1)-1,$l=E[jt],Nt=jt+1,vr=E[Nt];if(0>l($l,R))Nt<J&&0>l(vr,$l)?(E[Q]=vr,E[Nt]=R,Q=Nt):(E[Q]=$l,E[jt]=R,Q=jt);else if(Nt<J&&0>l(vr,R))E[Q]=vr,E[Nt]=R,Q=Nt;else break e}}return T}function l(E,T){var R=E.sortIndex-T.sortIndex;return R!==0?R:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],g=1,m=null,h=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function v(E){if(w=!1,p(E),!y)if(n(u)!==null)y=!0,Ul(j);else{var T=n(c);T!==null&&Bl(v,T.startTime-E)}}function j(E,T){y=!1,w&&(w=!1,f(_),_=-1),x=!0;var R=h;try{for(p(T),m=n(u);m!==null&&(!(m.expirationTime>T)||E&&!ye());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var J=Q(m.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),p(T)}else r(u);m=n(u)}if(m!==null)var gr=!0;else{var jt=n(c);jt!==null&&Bl(v,jt.startTime-T),gr=!1}return gr}finally{m=null,h=R,x=!1}}var P=!1,z=null,_=-1,B=5,L=-1;function ye(){return!(e.unstable_now()-L<B)}function kn(){if(z!==null){var E=e.unstable_now();L=E;var T=!0;try{T=z(!0,E)}finally{T?Sn():(P=!1,z=null)}}else P=!1}var Sn;if(typeof d=="function")Sn=function(){d(kn)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,id=ca.port2;ca.port1.onmessage=kn,Sn=function(){id.postMessage(null)}}else Sn=function(){N(kn,0)};function Ul(E){z=E,P||(P=!0,Sn())}function Bl(E,T){_=N(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Ul(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(E,T,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,E={id:g++,callback:T,priorityLevel:E,startTime:R,expirationTime:J,sortIndex:-1},R>Q?(E.sortIndex=R,t(c,E),n(u)===null&&E===n(c)&&(w?(f(_),_=-1):w=!0,Bl(v,R-Q))):(E.sortIndex=J,t(u,E),y||x||(y=!0,Ul(j))),E},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(E){var T=h;return function(){var R=h;h=T;try{return E.apply(this,arguments)}finally{h=R}}}})(Ws);Vs.exports=Ws;var Td=Vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=S,Se=Td;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hs=new Set,bn={};function Dt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(bn[e]=t,e=0;e<t.length;e++)Hs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ma={},ha={};function Md(e){return yi.call(ha,e)?!0:yi.call(ma,e)?!1:Rd.test(e)?ha[e]=!0:(ma[e]=!0,!1)}function Od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||Od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xo=/[\-:]([a-z])/g;function wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xo,wo);ne[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xo,wo);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xo,wo);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ko(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,l,r)&&(n=null),r||l===null?Md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),bs=Symbol.for("react.provider"),Qs=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ks=Symbol.for("react.offscreen"),ga=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Wl;function Ln(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var Hl=!1;function bl(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function Id(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case Ht:return"Portal";case xi:return"Profiler";case So:return"StrictMode";case wi:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qs:return(e.displayName||"Context")+".Consumer";case bs:return(e._context.displayName||"Context")+".Provider";case jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function Ad(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=Gs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Dd(e))}function Ys(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xs(e,t){t=t.checked,t!=null&&ko(e,"checked",t,!1)}function Ni(e,t){Xs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ci(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ci(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Rn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Js(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Ud.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function tu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Bd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,rn=null,ln=null;function ka(e){if(e=pr(e)){if(typeof Li!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Cl(t),Li(e.stateNode,e.type,t))}}function nu(e){rn?ln?ln.push(e):ln=[e]:rn=e}function ru(){if(rn){var e=rn,t=ln;if(ln=rn=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function lu(e,t){return e(t)}function iu(){}var Ql=!1;function ou(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return lu(e,t,n)}finally{Ql=!1,(rn!==null||ln!==null)&&(iu(),ru())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ri=!1;if(Ge)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ri=!1}function $d(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var An=!1,Yr=null,Xr=!1,Mi=null,Vd={onError:function(e){An=!0,Yr=e}};function Wd(e,t,n,r,l,i,o,s,u){An=!1,Yr=null,$d.apply(Vd,arguments)}function Hd(e,t,n,r,l,i,o,s,u){if(Wd.apply(this,arguments),An){if(An){var c=Yr;An=!1,Yr=null}else throw Error(k(198));Xr||(Xr=!0,Mi=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sa(e){if(Ut(e)!==e)throw Error(k(188))}function bd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Sa(l),e;if(i===r)return Sa(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function su(e){return e=bd(e),e!==null?uu(e):null}function uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uu(e);if(t!==null)return t;e=e.sibling}return null}var cu=Se.unstable_scheduleCallback,ja=Se.unstable_cancelCallback,Qd=Se.unstable_shouldYield,Kd=Se.unstable_requestPaint,K=Se.unstable_now,Gd=Se.unstable_getCurrentPriorityLevel,Eo=Se.unstable_ImmediatePriority,du=Se.unstable_UserBlockingPriority,Jr=Se.unstable_NormalPriority,Yd=Se.unstable_LowPriority,fu=Se.unstable_IdlePriority,kl=null,$e=null;function Xd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:qd,Jd=Math.log,Zd=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Jd(e)/Zd|0)|0}var Sr=64,jr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Mn(s):(i&=o,i!==0&&(r=Mn(i)))}else o=n&~l,o!==0?r=Mn(o):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Fe(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=ef(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,zo,gu,vu,yu,Fi=!1,Nr=[],st=null,ut=null,ct=null,Gn=new Map,Yn=new Map,rt=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=pr(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lf(e,t,n,r,l){switch(t){case"focusin":return st=Cn(st,e,t,n,r,l),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,l),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,Cn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,l)),!0}return!1}function xu(e){var t=zt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=au(n),t!==null){e.blockedOn=t,yu(e.priority,function(){gu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ti=r,n.target.dispatchEvent(r),Ti=null}else return t=pr(n),t!==null&&zo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ca(e,t,n){Dr(e)&&n.delete(t)}function of(){Fi=!1,st!==null&&Dr(st)&&(st=null),ut!==null&&Dr(ut)&&(ut=null),ct!==null&&Dr(ct)&&(ct=null),Gn.forEach(Ca),Yn.forEach(Ca)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Fi||(Fi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,of)))}function Xn(e){function t(l){return En(l,e)}if(0<Nr.length){En(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&En(st,e),ut!==null&&En(ut,e),ct!==null&&En(ct,e),Gn.forEach(t),Yn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)xu(n),n.blockedOn===null&&rt.shift()}var on=Ze.ReactCurrentBatchConfig,qr=!0;function af(e,t,n,r){var l=F,i=on.transition;on.transition=null;try{F=1,_o(e,t,n,r)}finally{F=l,on.transition=i}}function sf(e,t,n,r){var l=F,i=on.transition;on.transition=null;try{F=4,_o(e,t,n,r)}finally{F=l,on.transition=i}}function _o(e,t,n,r){if(qr){var l=Ii(e,t,n,r);if(l===null)ri(e,t,r,el,n),Na(e,r);else if(lf(l,e,t,n,r))r.stopPropagation();else if(Na(e,r),t&4&&-1<rf.indexOf(e)){for(;l!==null;){var i=pr(l);if(i!==null&&hu(i),i=Ii(e,t,n,r),i===null&&ri(e,t,r,el,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var el=null;function Ii(e,t,n,r){if(el=null,e=Co(r),e=zt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gd()){case Eo:return 1;case du:return 4;case Jr:case Yd:return 16;case fu:return 536870912;default:return 16}default:return 16}}var it=null,To=null,Ur=null;function ku(){if(Ur)return Ur;var e,t=To,n=t.length,r,l="value"in it?it.value:it.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Ea(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:Ea,this.isPropagationStopped=Ea,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=Ne(yn),fr=W({},yn,{view:0,detail:0}),uf=Ne(fr),Gl,Yl,Pn,Sl=W({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Gl=e.screenX-Pn.screenX,Yl=e.screenY-Pn.screenY):Yl=Gl=0,Pn=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Pa=Ne(Sl),cf=W({},Sl,{dataTransfer:0}),df=Ne(cf),ff=W({},fr,{relatedTarget:0}),Xl=Ne(ff),pf=W({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=Ne(pf),hf=W({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=Ne(hf),vf=W({},yn,{data:0}),za=Ne(vf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function Ro(){return kf}var Sf=W({},fr,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=Ne(Sf),Nf=W({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=Ne(Nf),Cf=W({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Ef=Ne(Cf),Pf=W({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ne(Pf),_f=W({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=Ne(_f),Lf=[9,13,27,32],Mo=Ge&&"CompositionEvent"in window,Dn=null;Ge&&"documentMode"in document&&(Dn=document.documentMode);var Rf=Ge&&"TextEvent"in window&&!Dn,Su=Ge&&(!Mo||Dn&&8<Dn&&11>=Dn),Ta=" ",La=!1;function ju(e,t){switch(e){case"keyup":return Lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Mf(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(La=!0,Ta);case"textInput":return e=t.data,e===Ta&&La?null:e;default:return null}}function Of(e,t){if(Qt)return e==="compositionend"||!Mo&&ju(e,t)?(e=ku(),Ur=To=it=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function Cu(e,t,n,r){nu(r),t=tl(t,"onChange"),0<t.length&&(n=new Lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Jn=null;function If(e){Iu(e,0)}function jl(e){var t=Yt(e);if(Ys(t))return e}function Af(e,t){if(e==="change")return t}var Eu=!1;if(Ge){var Jl;if(Ge){var Zl="oninput"in document;if(!Zl){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Zl=typeof Ma.oninput=="function"}Jl=Zl}else Jl=!1;Eu=Jl&&(!document.documentMode||9<document.documentMode)}function Oa(){Un&&(Un.detachEvent("onpropertychange",Pu),Jn=Un=null)}function Pu(e){if(e.propertyName==="value"&&jl(Jn)){var t=[];Cu(t,Jn,e,Co(e)),ou(If,t)}}function Df(e,t,n){e==="focusin"?(Oa(),Un=t,Jn=n,Un.attachEvent("onpropertychange",Pu)):e==="focusout"&&Oa()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(Jn)}function Bf(e,t){if(e==="click")return jl(t)}function $f(e,t){if(e==="input"||e==="change")return jl(t)}function Vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:Vf;function Zn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!yi.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function Fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fa(n)}}function zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=_u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zu(n.ownerDocument.documentElement,n)){if(r!==null&&Oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ia(n,i);var o=Ia(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hf=Ge&&"documentMode"in document&&11>=document.documentMode,Kt=null,Ai=null,Bn=null,Di=!1;function Aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Di||Kt==null||Kt!==Gr(r)||(r=Kt,"selectionStart"in r&&Oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Zn(Bn,r)||(Bn=r,r=tl(Ai,"onSelect"),0<r.length&&(t=new Lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},ql={},Tu={};Ge&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Nl(e){if(ql[e])return ql[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tu)return ql[e]=t[n];return e}var Lu=Nl("animationend"),Ru=Nl("animationiteration"),Mu=Nl("animationstart"),Ou=Nl("transitionend"),Fu=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Fu.set(e,t),Dt(t,[e])}for(var ei=0;ei<Da.length;ei++){var ti=Da[ei],bf=ti.toLowerCase(),Qf=ti[0].toUpperCase()+ti.slice(1);xt(bf,"on"+Qf)}xt(Lu,"onAnimationEnd");xt(Ru,"onAnimationIteration");xt(Mu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Ou,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hd(r,t,void 0,e),e.currentTarget=null}function Iu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ua(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ua(l,s,c),i=u}}}if(Xr)throw e=Mi,Xr=!1,Mi=null,e}function A(e,t){var n=t[Wi];n===void 0&&(n=t[Wi]=new Set);var r=e+"__bubble";n.has(r)||(Au(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),Au(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Pr]){e[Pr]=!0,Hs.forEach(function(n){n!=="selectionchange"&&(Kf.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,ni("selectionchange",!1,t))}}function Au(e,t,n,r){switch(wu(t)){case 1:var l=af;break;case 4:l=sf;break;default:l=_o}n=l.bind(null,t,n,e),l=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=zt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}ou(function(){var c=i,g=Co(n),m=[];e:{var h=Fu.get(e);if(h!==void 0){var x=Lo,y=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":x=jf;break;case"focusin":y="focus",x=Xl;break;case"focusout":y="blur",x=Xl;break;case"beforeblur":case"afterblur":x=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ef;break;case Lu:case Ru:case Mu:x=mf;break;case Ou:x=zf;break;case"scroll":x=uf;break;case"wheel":x=Tf;break;case"copy":case"cut":case"paste":x=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_a}var w=(t&4)!==0,N=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Kn(d,f),v!=null&&w.push(er(d,v,p)))),N)break;d=d.return}0<w.length&&(h=new x(h,y,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Ti&&(y=n.relatedTarget||n.fromElement)&&(zt(y)||y[Ye]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?zt(y):null,y!==null&&(N=Ut(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Pa,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=_a,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=x==null?h:Yt(x),p=y==null?h:Yt(y),h=new w(v,d+"leave",x,n,g),h.target=N,h.relatedTarget=p,v=null,zt(g)===c&&(w=new w(f,d+"enter",y,n,g),w.target=p,w.relatedTarget=N,v=w),N=v,x&&y)t:{for(w=x,f=y,d=0,p=w;p;p=Vt(p))d++;for(p=0,v=f;v;v=Vt(v))p++;for(;0<d-p;)w=Vt(w),d--;for(;0<p-d;)f=Vt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Vt(w),f=Vt(f)}w=null}else w=null;x!==null&&Ba(m,h,x,w,!1),y!==null&&N!==null&&Ba(m,N,y,w,!0)}}e:{if(h=c?Yt(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=Af;else if(Ra(h))if(Eu)j=$f;else{j=Uf;var P=Df}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Bf);if(j&&(j=j(e,c))){Cu(m,j,n,g);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ci(h,"number",h.value)}switch(P=c?Yt(c):window,e){case"focusin":(Ra(P)||P.contentEditable==="true")&&(Kt=P,Ai=c,Bn=null);break;case"focusout":Bn=Ai=Kt=null;break;case"mousedown":Di=!0;break;case"contextmenu":case"mouseup":case"dragend":Di=!1,Aa(m,n,g);break;case"selectionchange":if(Hf)break;case"keydown":case"keyup":Aa(m,n,g)}var z;if(Mo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qt?ju(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Su&&n.locale!=="ko"&&(Qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qt&&(z=ku()):(it=g,To="value"in it?it.value:it.textContent,Qt=!0)),P=tl(c,_),0<P.length&&(_=new za(_,e,null,n,g),m.push({event:_,listeners:P}),z?_.data=z:(z=Nu(n),z!==null&&(_.data=z)))),(z=Rf?Mf(e,n):Of(e,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(g=new za("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=z))}Iu(m,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Kn(e,n),i!=null&&r.unshift(er(e,i,l)),i=Kn(e,t),i!=null&&r.push(er(e,i,l))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Kn(n,i),u!=null&&o.unshift(er(n,u,s))):l||(u=Kn(n,i),u!=null&&o.push(er(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gf=/\r\n?/g,Yf=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Yf,"")}function zr(e,t,n){if(t=$a(t),$a(e)!==t&&n)throw Error(k(425))}function nl(){}var Ui=null,Bi=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Va=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Va<"u"?function(e){return Va.resolve(null).then(e).catch(Zf)}:Vi;function Zf(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Be="__reactFiber$"+xn,tr="__reactProps$"+xn,Ye="__reactContainer$"+xn,Wi="__reactEvents$"+xn,qf="__reactListeners$"+xn,ep="__reactHandles$"+xn;function zt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wa(e);e!==null;){if(n=e[Be])return n;e=Wa(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Be]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Cl(e){return e[tr]||null}var Hi=[],Xt=-1;function wt(e){return{current:e}}function D(e){0>Xt||(e.current=Hi[Xt],Hi[Xt]=null,Xt--)}function I(e,t){Xt++,Hi[Xt]=e.current,e.current=t}var yt={},ae=wt(yt),he=wt(!1),Mt=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function rl(){D(he),D(ae)}function Ha(e,t,n){if(ae.current!==yt)throw Error(k(168));I(ae,t),I(he,n)}function Du(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Ad(e)||"Unknown",l));return W({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Mt=ae.current,I(ae,e),I(he,he.current),!0}function ba(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Du(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,D(he),D(ae),I(ae,e)):D(he),I(he,n)}var He=null,El=!1,ii=!1;function Uu(e){He===null?He=[e]:He.push(e)}function tp(e){El=!0,Uu(e)}function kt(){if(!ii&&He!==null){ii=!0;var e=0,t=F;try{var n=He;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,El=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),cu(Eo,kt),l}finally{F=t,ii=!1}}return null}var Jt=[],Zt=0,il=null,ol=0,Ce=[],Ee=0,Ot=null,be=1,Qe="";function Ct(e,t){Jt[Zt++]=ol,Jt[Zt++]=il,il=e,ol=t}function Bu(e,t,n){Ce[Ee++]=be,Ce[Ee++]=Qe,Ce[Ee++]=Ot,Ot=e;var r=be;e=Qe;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var i=32-Fe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,be=1<<32-Fe(t)+l|n<<l|r,Qe=i+e}else be=1<<i|n<<l|r,Qe=e}function Fo(e){e.return!==null&&(Ct(e,1),Bu(e,1,0))}function Io(e){for(;e===il;)il=Jt[--Zt],Jt[Zt]=null,ol=Jt[--Zt],Jt[Zt]=null;for(;e===Ot;)Ot=Ce[--Ee],Ce[Ee]=null,Qe=Ce[--Ee],Ce[Ee]=null,be=Ce[--Ee],Ce[Ee]=null}var ke=null,we=null,U=!1,Oe=null;function $u(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:be,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(U){var t=we;if(t){var n=t;if(!Qa(e,t)){if(bi(e))throw Error(k(418));t=dt(n.nextSibling);var r=ke;t&&Qa(e,t)?$u(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(bi(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function Ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function _r(e){if(e!==ke)return!1;if(!U)return Ka(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=we)){if(bi(e))throw Vu(),Error(k(418));for(;t;)$u(e,t),t=dt(t.nextSibling)}if(Ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?dt(e.stateNode.nextSibling):null;return!0}function Vu(){for(var e=we;e;)e=dt(e.nextSibling)}function dn(){we=ke=null,U=!1}function Ao(e){Oe===null?Oe=[e]:Oe.push(e)}var np=Ze.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function Wu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=fi(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,v){var j=p.type;return j===bt?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Ga(j)===d.type)?(v=l(d,p.props),v.ref=zn(f,d,p),v.return=f,v):(v=Kr(p.type,p.key,p.props,null,f.mode,v),v.ref=zn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=pi(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,j){return d===null||d.tag!==7?(d=Rt(p,f.mode,v,j),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return p=Kr(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Ht:return d=pi(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return m(f,v(d._payload),p)}if(Rn(d)||jn(d))return d=Rt(d,f.mode,p,null),d.return=f,d;Tr(f,d)}return null}function h(f,d,p,v){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===j?u(f,d,p,v):null;case Ht:return p.key===j?c(f,d,p,v):null;case tt:return j=p._init,h(f,d,j(p._payload),v)}if(Rn(p)||jn(p))return j!==null?null:g(f,d,p,v,null);Tr(f,p)}return null}function x(f,d,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,j);case Ht:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,j);case tt:var P=v._init;return x(f,d,p,P(v._payload),j)}if(Rn(v)||jn(v))return f=f.get(p)||null,g(d,f,v,j,null);Tr(d,v)}return null}function y(f,d,p,v){for(var j=null,P=null,z=d,_=d=0,B=null;z!==null&&_<p.length;_++){z.index>_?(B=z,z=null):B=z.sibling;var L=h(f,z,p[_],v);if(L===null){z===null&&(z=B);break}e&&z&&L.alternate===null&&t(f,z),d=i(L,d,_),P===null?j=L:P.sibling=L,P=L,z=B}if(_===p.length)return n(f,z),U&&Ct(f,_),j;if(z===null){for(;_<p.length;_++)z=m(f,p[_],v),z!==null&&(d=i(z,d,_),P===null?j=z:P.sibling=z,P=z);return U&&Ct(f,_),j}for(z=r(f,z);_<p.length;_++)B=x(z,f,_,p[_],v),B!==null&&(e&&B.alternate!==null&&z.delete(B.key===null?_:B.key),d=i(B,d,_),P===null?j=B:P.sibling=B,P=B);return e&&z.forEach(function(ye){return t(f,ye)}),U&&Ct(f,_),j}function w(f,d,p,v){var j=jn(p);if(typeof j!="function")throw Error(k(150));if(p=j.call(p),p==null)throw Error(k(151));for(var P=j=null,z=d,_=d=0,B=null,L=p.next();z!==null&&!L.done;_++,L=p.next()){z.index>_?(B=z,z=null):B=z.sibling;var ye=h(f,z,L.value,v);if(ye===null){z===null&&(z=B);break}e&&z&&ye.alternate===null&&t(f,z),d=i(ye,d,_),P===null?j=ye:P.sibling=ye,P=ye,z=B}if(L.done)return n(f,z),U&&Ct(f,_),j;if(z===null){for(;!L.done;_++,L=p.next())L=m(f,L.value,v),L!==null&&(d=i(L,d,_),P===null?j=L:P.sibling=L,P=L);return U&&Ct(f,_),j}for(z=r(f,z);!L.done;_++,L=p.next())L=x(z,f,_,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?_:L.key),d=i(L,d,_),P===null?j=L:P.sibling=L,P=L);return e&&z.forEach(function(kn){return t(f,kn)}),U&&Ct(f,_),j}function N(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var j=p.key,P=d;P!==null;){if(P.key===j){if(j=p.type,j===bt){if(P.tag===7){n(f,P.sibling),d=l(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Ga(j)===P.type){n(f,P.sibling),d=l(P,p.props),d.ref=zn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===bt?(d=Rt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Kr(p.type,p.key,p.props,null,f.mode,v),v.ref=zn(f,d,p),v.return=f,f=v)}return o(f);case Ht:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=pi(p,f.mode,v),d.return=f,f=d}return o(f);case tt:return P=p._init,N(f,d,P(p._payload),v)}if(Rn(p))return y(f,d,p,v);if(jn(p))return w(f,d,p,v);Tr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=fi(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return N}var fn=Wu(!0),Hu=Wu(!1),al=wt(null),sl=null,qt=null,Do=null;function Uo(){Do=qt=sl=null}function Bo(e){var t=al.current;D(al),e._currentValue=t}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){sl=e,Do=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(sl===null)throw Error(k(308));qt=e,sl.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var _t=null;function $o(e){_t===null?_t=[e]:_t.push(e)}function bu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,$o(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,$o(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,g=c=u=null,s=i;do{var h=s.lane,x=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(h=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,m,h):y,h==null)break e;m=W({},m,h);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=x,u=m):g=g.next=x,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=m}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var mr={},Ve=wt(mr),nr=wt(mr),rr=wt(mr);function Tt(e){if(e===mr)throw Error(k(174));return e}function Wo(e,t){switch(I(rr,t),I(nr,e),I(Ve,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}D(Ve),I(Ve,t)}function pn(){D(Ve),D(nr),D(rr)}function Ku(e){Tt(rr.current);var t=Tt(Ve.current),n=Pi(t,e.type);t!==n&&(I(nr,e),I(Ve,n))}function Ho(e){nr.current===e&&(D(Ve),D(nr))}var $=wt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function bo(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Vr=Ze.ReactCurrentDispatcher,ai=Ze.ReactCurrentBatchConfig,Ft=0,V=null,Y=null,Z=null,dl=!1,$n=!1,lr=0,rp=0;function le(){throw Error(k(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Ko(e,t,n,r,l,i){if(Ft=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?ap:sp,e=n(r,l),$n){i=0;do{if($n=!1,lr=0,25<=i)throw Error(k(301));i+=1,Z=Y=null,t.updateQueue=null,Vr.current=up,e=n(r,l)}while($n)}if(Vr.current=fl,t=Y!==null&&Y.next!==null,Ft=0,Z=Y=V=null,dl=!1,t)throw Error(k(300));return e}function Go(){var e=lr!==0;return lr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(k(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function ir(e,t){return typeof t=="function"?t(e):t}function si(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var g=c.lane;if((Ft&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,V.lanes|=g,It|=g}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Ae(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,It|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gu(){}function Yu(e,t){var n=V,r=Te(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,Yo(Zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,or(9,Ju.bind(null,n,r,l,t),void 0,null),q===null)throw Error(k(349));Ft&30||Xu(n,t,l)}return l}function Xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ju(e,t,n,r){t.value=n,t.getSnapshot=r,qu(t)&&ec(e)}function Zu(e,t,n){return n(function(){qu(t)&&ec(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function ec(e){var t=Xe(e,1);t!==null&&Ie(t,e,1,-1)}function Ja(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,V,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tc(){return Te().memoizedState}function Wr(e,t,n,r){var l=Ue();V.flags|=e,l.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Pl(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Qo(r,o.deps)){l.memoizedState=or(t,n,i,r);return}}V.flags|=e,l.memoizedState=or(1|t,n,i,r)}function Za(e,t){return Wr(8390656,8,e,t)}function Yo(e,t){return Pl(2048,8,e,t)}function nc(e,t){return Pl(4,2,e,t)}function rc(e,t){return Pl(4,4,e,t)}function lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ic(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4,4,lc.bind(null,t,e),n)}function Xo(){}function oc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ac(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sc(e,t,n){return Ft&21?(Ae(n,t)||(n=pu(),V.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function lp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{F=n,ai.transition=r}}function uc(){return Te().memoizedState}function ip(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e))dc(t,n);else if(n=bu(e,t,n,r),n!==null){var l=ce();Ie(n,e,r,l),fc(n,t,r)}}function op(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))dc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var u=t.interleaved;u===null?(l.next=l,$o(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=bu(e,t,l,r),n!==null&&(l=ce(),Ie(n,e,r,l),fc(n,t,r))}}function cc(e){var t=e.alternate;return e===V||t!==null&&t===V}function dc(e,t){$n=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var fl={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},ap={readContext:_e,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Za,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Ja,useDebugValue:Xo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Ja(!1),t=e[0];return e=lp.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ue();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),q===null)throw Error(k(349));Ft&30||Xu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Za(Zu.bind(null,r,i,e),[e]),r.flags|=2048,or(9,Ju.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ue(),t=q.identifierPrefix;if(U){var n=Qe,r=be;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sp={readContext:_e,useCallback:oc,useContext:_e,useEffect:Yo,useImperativeHandle:ic,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ac,useReducer:si,useRef:tc,useState:function(){return si(ir)},useDebugValue:Xo,useDeferredValue:function(e){var t=Te();return sc(t,Y.memoizedState,e)},useTransition:function(){var e=si(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Yu,useId:uc,unstable_isNewReconciler:!1},up={readContext:_e,useCallback:oc,useContext:_e,useEffect:Yo,useImperativeHandle:ic,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ac,useReducer:ui,useRef:tc,useState:function(){return ui(ir)},useDebugValue:Xo,useDeferredValue:function(e){var t=Te();return Y===null?t.memoizedState=e:sc(t,Y.memoizedState,e)},useTransition:function(){var e=ui(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Yu,useId:uc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ke(r,l);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Ie(t,e,l,r),$r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ke(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Ie(t,e,l,r),$r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Ie(t,e,r,n),$r(t,e,r))}};function qa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function pc(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ge(t)?Mt:ae.current,r=t.contextTypes,i=(r=r!=null)?cn(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Vo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ge(t)?Mt:ae.current,l.context=cn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Id(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function mc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,oo=r),Xi(e,t)},n}function hc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Xi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ts(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var dp=Ze.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?Hu(t,null,n,r):fn(t,e.child,n,r)}function ls(e,t,n,r,l){n=n.render;var i=t.ref;return an(t,l),r=Ko(e,t,n,r,i,l),n=Go(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&n&&Fo(t),t.flags|=1,ue(e,t,r,l),t.child)}function is(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!la(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gc(e,t,i,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Je(e,t,l)}return Ji(e,t,n,r,l)}function vc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(tn,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(tn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(tn,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(tn,xe),xe|=r;return ue(e,t,l,n),t.child}function yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,l){var i=ge(n)?Mt:ae.current;return i=cn(t,i),an(t,l),n=Ko(e,t,n,r,i,l),r=Go(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&r&&Fo(t),t.flags|=1,ue(e,t,n,l),t.child)}function os(e,t,n,r,l){if(ge(n)){var i=!0;ll(t)}else i=!1;if(an(t,l),t.stateNode===null)Hr(e,t),pc(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Mt:ae.current,c=cn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&es(t,o,r,c),nt=!1;var h=t.memoizedState;o.state=h,ul(t,r,o,l),u=t.memoizedState,s!==r||h!==u||he.current||nt?(typeof g=="function"&&(Gi(t,n,g,r),u=t.memoizedState),(s=nt||qa(t,n,s,r,h,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Qu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),o.props=c,m=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Mt:ae.current,u=cn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||h!==u)&&es(t,o,r,u),nt=!1,h=t.memoizedState,o.state=h,ul(t,r,o,l);var y=t.memoizedState;s!==m||h!==y||he.current||nt?(typeof x=="function"&&(Gi(t,n,x,r),y=t.memoizedState),(c=nt||qa(t,n,c,r,h,y,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){yc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ba(t,n,!1),Je(e,t,i);r=t.stateNode,dp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,s,i)):ue(e,t,s,i),t.memoizedState=r.state,l&&ba(t,n,!0),t.child}function xc(e){var t=e.stateNode;t.pendingContext?Ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ha(e,t.context,!1),Wo(e,t.containerInfo)}function as(e,t,n,r,l){return dn(),Ao(l),t.flags|=256,ue(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I($,l&1),e===null)return Qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ll(o,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=qi,e):Jo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ht(s,i):(i=Rt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jo(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Ao(r),fn(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(k(422))),Lr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ll({mode:"visible",children:r.children},l,0,null),i=Rt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&fn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=qi,i);if(!(t.mode&1))return Lr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=ci(i,r,void 0),Lr(e,t,o,r)}if(s=(o&e.childLanes)!==0,me||s){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Ie(r,e,l,-1))}return ra(),r=ci(Error(k(421))),Lr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=dt(l.nextSibling),ke=t,U=!0,Oe=null,e!==null&&(Ce[Ee++]=be,Ce[Ee++]=Qe,Ce[Ee++]=Ot,be=e.id,Qe=e.overflow,Ot=t),t=Jo(t,r.children),t.flags|=4096,t)}function ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function di(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function kc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,n,t);else if(e.tag===19)ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),di(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}di(t,!0,n,null,i);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t,n){switch(t.tag){case 3:xc(t),dn();break;case 5:Ku(t);break;case 1:ge(t.type)&&ll(t);break;case 4:Wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I($,$.current&1),t.flags|=128,null):n&t.child.childLanes?wc(e,t,n):(I($,$.current&1),e=Je(e,t,n),e!==null?e.sibling:null);I($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,vc(e,t,n)}return Je(e,t,n)}var Sc,to,jc,Nc;Sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};jc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(Ve.current);var i=null;switch(n){case"input":l=ji(e,l),r=ji(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=Ei(e,l),r=Ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}zi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Nc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mp(e,t,n){var r=t.pendingProps;switch(Io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&rl(),ie(t),null;case 3:return r=t.stateNode,pn(),D(he),D(ae),bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(uo(Oe),Oe=null))),to(e,t),ie(t),null;case 5:Ho(t);var l=Tt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)jc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Tt(Ve.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[tr]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)A(On[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":va(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":xa(r,i),A("invalid",r)}zi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):bn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":wr(r),ya(r,i,!0);break;case"textarea":wr(r),wa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[tr]=r,Sc(e,t,!1,!1),t.stateNode=e;e:{switch(o=_i(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)A(On[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":va(e,r),l=ji(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":xa(e,r),l=Ei(e,r),A("invalid",e);break;default:l=r}zi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?tu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qs(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&A("scroll",e):u!=null&&ko(e,i,u,o))}switch(n){case"input":wr(e),ya(e,r,!1);break;case"textarea":wr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Nc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(rr.current),Tt(Ve.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ie(t),null;case 13:if(D($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Vu(),dn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Be]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Oe!==null&&(uo(Oe),Oe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?X===0&&(X=3):ra())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return pn(),to(e,t),e===null&&qn(t.stateNode.containerInfo),ie(t),null;case 10:return Bo(t.type._context),ie(t),null;case 17:return ge(t.type)&&rl(),ie(t),null;case 19:if(D($),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)_n(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=cl(e),o!==null){for(t.flags|=128,_n(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>hn&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304)}else{if(!r)if(e=cl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ie(t),null}else 2*K()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=$.current,I($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return na(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function hp(e,t){switch(Io(t),t.tag){case 1:return ge(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),D(he),D(ae),bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(D($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D($),null;case 4:return pn(),null;case 10:return Bo(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var Rr=!1,oe=!1,gp=typeof WeakSet=="function"?WeakSet:Set,C=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){H(e,t,r)}}var us=!1;function vp(e,t){if(Ui=qr,e=_u(),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++c===l&&(s=o),h===i&&++g===r&&(u=o),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bi={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=us,us=!1,y}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(t,n,i)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[tr],delete t[Wi],delete t[qf],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var ee=null,Me=!1;function qe(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:oe||en(n,t);case 6:var r=ee,l=Me;ee=null,qe(e,t,n),ee=r,Me=l,ee!==null&&(Me?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Me?(e=ee,n=n.stateNode,e.nodeType===8?li(e.parentNode,n):e.nodeType===1&&li(e,n),Xn(e)):li(ee,n.stateNode));break;case 4:r=ee,l=Me,ee=n.stateNode.containerInfo,Me=!0,qe(e,t,n),ee=r,Me=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&no(n,t,o),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!oe&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,qe(e,t,n),oe=r):qe(e,t,n);break;default:qe(e,t,n)}}function ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(r){var l=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Me=!1;break e;case 3:ee=s.stateNode.containerInfo,Me=!0;break e;case 4:ee=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(ee===null)throw Error(k(160));Pc(i,o,l),ee=null,Me=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{Vn(3,e,e.return),_l(3,e)}catch(w){H(e,e.return,w)}try{Vn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Qn(l,"")}catch(w){H(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Xs(l,i),_i(s,o);var c=_i(s,i);for(o=0;o<u.length;o+=2){var g=u[o],m=u[o+1];g==="style"?tu(l,m):g==="dangerouslySetInnerHTML"?qs(l,m):g==="children"?Qn(l,m):ko(l,g,m,c)}switch(s){case"input":Ni(l,i);break;case"textarea":Js(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?nn(l,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?nn(l,!!i.multiple,i.defaultValue,!0):nn(l,!!i.multiple,i.multiple?[]:"",!1))}l[tr]=i}catch(w){H(e,e.return,w)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){H(e,e.return,w)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ea=K())),r&4&&ds(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Le(t,e),oe=c):Le(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(m=C=g;C!==null;){switch(h=C,x=h.child,h.tag){case 0:case 11:case 14:case 15:Vn(4,h,h.return);break;case 1:en(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:en(h,h.return);break;case 22:if(h.memoizedState!==null){ps(m);continue}}x!==null?(x.return=h,C=x):ps(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=eu("display",o))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),De(e),r&4&&ds(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Qn(l,""),r.flags&=-33);var i=cs(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=cs(e);lo(e,s,o);break;default:throw Error(k(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,n){C=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Rr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=Rr;var c=oe;if(Rr=o,(oe=u)&&!c)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?ms(l):u!==null?(u.return=o,C=u):ms(l);for(;i!==null;)C=i,_c(i),i=i.sibling;C=l,Rr=s,oe=c}fs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):fs(e)}}function fs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Xn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&ro(t)}catch(h){H(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ps(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ms(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var i=t.return;try{ro(t)}catch(u){H(t,i,u)}break;case 5:var o=t.return;try{ro(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var xp=Math.ceil,pl=Ze.ReactCurrentDispatcher,Zo=Ze.ReactCurrentOwner,ze=Ze.ReactCurrentBatchConfig,O=0,q=null,G=null,te=0,xe=0,tn=wt(0),X=0,ar=null,It=0,Tl=0,qo=0,Wn=null,pe=null,ea=0,hn=1/0,We=null,ml=!1,oo=null,pt=null,Mr=!1,ot=null,hl=0,Hn=0,ao=null,br=-1,Qr=0;function ce(){return O&6?K():br!==-1?br:br=K()}function mt(e){return e.mode&1?O&2&&te!==0?te&-te:np.transition!==null?(Qr===0&&(Qr=pu()),Qr):(e=F,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e):1}function Ie(e,t,n,r){if(50<Hn)throw Hn=0,ao=null,Error(k(185));dr(e,n,r),(!(O&2)||e!==q)&&(e===q&&(!(O&2)&&(Tl|=n),X===4&&lt(e,te)),ve(e,r),n===1&&O===0&&!(t.mode&1)&&(hn=K()+500,El&&kt()))}function ve(e,t){var n=e.callbackNode;tf(e,t);var r=Zr(e,e===q?te:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?tp(hs.bind(null,e)):Uu(hs.bind(null,e)),Jf(function(){!(O&6)&&kt()}),n=null;else{switch(mu(r)){case 1:n=Eo;break;case 4:n=du;break;case 16:n=Jr;break;case 536870912:n=fu;break;default:n=Jr}n=Ac(n,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tc(e,t){if(br=-1,Qr=0,O&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Zr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=O;O|=2;var i=Rc();(q!==e||te!==t)&&(We=null,hn=K()+500,Lt(e,t));do try{Sp();break}catch(s){Lc(e,s)}while(!0);Uo(),pl.current=i,O=l,G!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(l=Oi(e),l!==0&&(r=l,t=so(e,l))),t===1)throw n=ar,Lt(e,0),lt(e,r),ve(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!wp(l)&&(t=gl(e,r),t===2&&(i=Oi(e),i!==0&&(r=i,t=so(e,i))),t===1))throw n=ar,Lt(e,0),lt(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,pe,We);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=ea+500-K(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Vi(Et.bind(null,e,pe,We),t);break}Et(e,pe,We);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Fe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xp(r/1960))-r,10<r){e.timeoutHandle=Vi(Et.bind(null,e,pe,We),r);break}Et(e,pe,We);break;case 5:Et(e,pe,We);break;default:throw Error(k(329))}}}return ve(e,K()),e.callbackNode===n?Tc.bind(null,e):null}function so(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=pe,pe=n,t!==null&&uo(t)),e}function uo(e){pe===null?pe=e:pe.push.apply(pe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~qo,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function hs(e){if(O&6)throw Error(k(327));sn();var t=Zr(e,0);if(!(t&1))return ve(e,K()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Oi(e);r!==0&&(t=r,n=so(e,r))}if(n===1)throw n=ar,Lt(e,0),lt(e,t),ve(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,pe,We),ve(e,K()),null}function ta(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(hn=K()+500,El&&kt())}}function At(e){ot!==null&&ot.tag===0&&!(O&6)&&sn();var t=O;O|=1;var n=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=n,O=t,!(O&6)&&kt()}}function na(){xe=tn.current,D(tn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:pn(),D(he),D(ae),bo();break;case 5:Ho(r);break;case 4:pn();break;case 13:D($);break;case 19:D($);break;case 10:Bo(r.type._context);break;case 22:case 23:na()}n=n.return}if(q=e,G=e=ht(e.current,null),te=xe=t,X=0,ar=null,qo=Tl=It=0,pe=Wn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}_t=null}return e}function Lc(e,t){do{var n=G;try{if(Uo(),Vr.current=fl,dl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(Ft=0,Z=Y=V=null,$n=!1,lr=0,Zo.current=null,n===null||n.return===null){X=1,ar=t,G=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=ns(o);if(x!==null){x.flags&=-257,rs(x,o,s,i,t),x.mode&1&&ts(i,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){ts(i,c,t),ra();break e}u=Error(k(426))}}else if(U&&s.mode&1){var N=ns(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),rs(N,o,s,i,t),Ao(mn(u,s));break e}}i=u=mn(u,s),X!==4&&(X=2),Wn===null?Wn=[i]:Wn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=mc(i,u,t);Ya(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=hc(i,s,t);Ya(i,v);break e}}i=i.return}while(i!==null)}Oc(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Rc(){var e=pl.current;return pl.current=fl,e===null?fl:e}function ra(){(X===0||X===3||X===2)&&(X=4),q===null||!(It&268435455)&&!(Tl&268435455)||lt(q,te)}function gl(e,t){var n=O;O|=2;var r=Rc();(q!==e||te!==t)&&(We=null,Lt(e,t));do try{kp();break}catch(l){Lc(e,l)}while(!0);if(Uo(),O=n,pl.current=r,G!==null)throw Error(k(261));return q=null,te=0,X}function kp(){for(;G!==null;)Mc(G)}function Sp(){for(;G!==null&&!Qd();)Mc(G)}function Mc(e){var t=Ic(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Oc(e):G=t,Zo.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hp(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,G=null;return}}else if(n=mp(n,t,xe),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);X===0&&(X=5)}function Et(e,t,n){var r=F,l=ze.transition;try{ze.transition=null,F=1,jp(e,t,n,r)}finally{ze.transition=l,F=r}return null}function jp(e,t,n,r){do sn();while(ot!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nf(e,i),e===q&&(G=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Ac(Jr,function(){return sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var o=F;F=1;var s=O;O|=4,Zo.current=null,vp(e,n),zc(n,e),Wf(Bi),qr=!!Ui,Bi=Ui=null,e.current=n,yp(n),Kd(),O=s,F=o,ze.transition=i}else e.current=n;if(Mr&&(Mr=!1,ot=e,hl=l),i=e.pendingLanes,i===0&&(pt=null),Xd(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=oo,oo=null,e;return hl&1&&e.tag!==0&&sn(),i=e.pendingLanes,i&1?e===ao?Hn++:(Hn=0,ao=e):Hn=0,kt(),null}function sn(){if(ot!==null){var e=mu(hl),t=ze.transition,n=F;try{if(ze.transition=null,F=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,hl=0,O&6)throw Error(k(331));var l=O;for(O|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Vn(8,g,i)}var m=g.child;if(m!==null)m.return=g,C=m;else for(;C!==null;){g=C;var h=g.sibling,x=g.return;if(Cc(g),g===c){C=null;break}if(h!==null){h.return=x,C=h;break}C=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_l(9,s)}}catch(j){H(s,s.return,j)}if(s===o){C=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,C=v;break e}C=s.return}}if(O=l,kt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{F=n,ze.transition=t}}return!1}function gs(e,t,n){t=mn(n,t),t=mc(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(dr(e,1,t),ve(e,t))}function H(e,t,n){if(e.tag===3)gs(e,e,n);else for(;t!==null;){if(t.tag===3){gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=mn(n,e),e=hc(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(dr(t,1,e),ve(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>K()-ea?Lt(e,0):qo|=n),ve(e,t)}function Fc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(dr(e,t,n),ve(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fc(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Fc(e,n)}var Ic;Ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,pp(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Bu(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=cn(t,ae.current);an(t,n),l=Ko(null,t,r,e,l,n);var i=Go();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,ll(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Vo(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&Fo(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zp(r),e=Re(r,e),l){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=os(null,t,r,e,n);break e;case 11:t=ls(null,t,r,e,n);break e;case 14:t=is(null,t,r,Re(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),os(e,t,r,l,n);case 3:e:{if(xc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Qu(e,t),ul(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=mn(Error(k(423)),t),t=as(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(k(424)),t),t=as(e,t,r,n,l);break e}else for(we=dt(t.stateNode.containerInfo.firstChild),ke=t,U=!0,Oe=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=Je(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Ku(t),e===null&&Qi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,$i(r,l)?o=null:i!==null&&$i(r,i)&&(t.flags|=32),yc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Qi(t),null;case 13:return wc(e,t,n);case 4:return Wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),ls(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,I(al,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!he.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ke(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ki(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=_e(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),is(e,t,r,l,n);case 15:return gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Hr(e,t),t.tag=1,ge(r)?(e=!0,ll(t)):e=!1,an(t,n),pc(t,r,l),Yi(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return kc(e,t,n);case 22:return vc(e,t,n)}throw Error(k(156,t.tag))};function Ac(e,t){return cu(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Pp(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jo)return 11;if(e===No)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")la(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bt:return Rt(n.children,l,i,t);case So:o=8,l|=8;break;case xi:return e=Pe(12,n,t,l|2),e.elementType=xi,e.lanes=i,e;case wi:return e=Pe(13,n,t,l),e.elementType=wi,e.lanes=i,e;case ki:return e=Pe(19,n,t,l),e.elementType=ki,e.lanes=i,e;case Ks:return Ll(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bs:o=10;break e;case Qs:o=9;break e;case jo:o=11;break e;case No:o=14;break e;case tt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Ks,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function pi(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,l,i,o,s,u){return e=new _p(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(i),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dc(e){if(!e)return yt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return Du(e,n,t)}return t}function Uc(e,t,n,r,l,i,o,s,u){return e=ia(n,r,!0,e,l,i,o,s,u),e.context=Dc(null),n=e.current,r=ce(),l=mt(n),i=Ke(r,l),i.callback=t??null,ft(n,i,l),e.current.lanes=l,dr(e,l,r),ve(e,r),e}function Rl(e,t,n,r){var l=t.current,i=ce(),o=mt(l);return n=Dc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,o),e!==null&&(Ie(e,l,o,i),$r(e,l,o)),o}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){vs(e,t),(e=e.alternate)&&vs(e,t)}function Lp(){return null}var Bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}Ml.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Rl(e,t,null,null)};Ml.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){Rl(null,e,null,null)}),t[Ye]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&xu(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function Rp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=vl(o);i.call(c)}}var o=Uc(t,r,e,0,null,!1,!1,"",ys);return e._reactRootContainer=o,e[Ye]=o.current,qn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=vl(u);s.call(c)}}var u=ia(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=u,e[Ye]=u.current,qn(e.nodeType===8?e.parentNode:e),At(function(){Rl(t,u,n,r)}),u}function Fl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=vl(o);s.call(u)}}Rl(t,o,e,l)}else o=Rp(n,t,e,l,r);return vl(o)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Po(t,n|1),ve(t,K()),!(O&6)&&(hn=K()+500,kt()))}break;case 13:At(function(){var r=Xe(e,1);if(r!==null){var l=ce();Ie(r,e,1,l)}}),oa(e,1)}};zo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}oa(e,134217728)}};gu=function(e){if(e.tag===13){var t=mt(e),n=Xe(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}oa(e,t)}};vu=function(){return F};yu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Li=function(e,t,n){switch(t){case"input":if(Ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Cl(r);if(!l)throw Error(k(90));Ys(r),Ni(r,l)}}}break;case"textarea":Js(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};lu=ta;iu=At;var Mp={usingClientEntryPoint:!1,Events:[pr,Yt,Cl,nu,ru,ta]},Tn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=su(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{kl=Or.inject(Op),$e=Or}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(k(200));return Tp(e,t,null,n)};je.createRoot=function(e,t){if(!sa(e))throw Error(k(299));var n=!1,r="",l=Bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,qn(e.nodeType===8?e.parentNode:e),new aa(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=su(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return At(e)};je.hydrate=function(e,t,n){if(!Ol(t))throw Error(k(200));return Fl(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Bc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Uc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};je.render=function(e,t,n){if(!Ol(t))throw Error(k(200));return Fl(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(k(40));return e._reactRootContainer?(At(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};je.unstable_batchedUpdates=ta;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Fl(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function $c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c)}catch(e){console.error(e)}}$c(),$s.exports=je;var Fp=$s.exports,xs=Fp;vi.createRoot=xs.createRoot,vi.hydrateRoot=xs.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(null,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const ws="popstate";function Ip(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return co("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:yl(l)}return Dp(t,n,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ua(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ap(){return Math.random().toString(36).substr(2,8)}function ks(e,t){return{usr:e.state,key:e.key,idx:t}}function co(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wn(t):t,{state:n,key:t&&t.key||r||Ap()})}function yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=at.Pop,u=null,c=g();c==null&&(c=0,o.replaceState(sr({},o.state,{idx:c}),""));function g(){return(o.state||{idx:null}).idx}function m(){s=at.Pop;let N=g(),f=N==null?null:N-c;c=N,u&&u({action:s,location:w.location,delta:f})}function h(N,f){s=at.Push;let d=co(w.location,N,f);c=g()+1;let p=ks(d,c),v=w.createHref(d);try{o.pushState(p,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(v)}i&&u&&u({action:s,location:w.location,delta:1})}function x(N,f){s=at.Replace;let d=co(w.location,N,f);c=g();let p=ks(d,c),v=w.createHref(d);o.replaceState(p,"",v),i&&u&&u({action:s,location:w.location,delta:0})}function y(N){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof N=="string"?N:yl(N);return d=d.replace(/ $/,"%20"),b(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(l,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(ws,m),u=N,()=>{l.removeEventListener(ws,m),u=null}},createHref(N){return t(l,N)},createURL:y,encodeLocation(N){let f=y(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:x,go(N){return o.go(N)}};return w}var Ss;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ss||(Ss={}));function Up(e,t,n){return n===void 0&&(n="/"),Bp(e,t,n)}function Bp(e,t,n,r){let l=typeof t=="string"?wn(t):t,i=gn(l.pathname||"/",n);if(i==null)return null;let o=Vc(e);$p(o);let s=null,u=Zp(i);for(let c=0;s==null&&c<o.length;++c)s=Xp(o[c],u);return s}function Vc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(b(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(b(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vc(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Gp(c,i.index),routesMeta:g})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let u of Wc(i.path))l(i,o,u)}),t}function Wc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Wc(r.join("/")),s=[];return s.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function $p(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vp=/^:[\w-]+$/,Wp=3,Hp=2,bp=1,Qp=10,Kp=-2,js=e=>e==="*";function Gp(e,t){let n=e.split("/"),r=n.length;return n.some(js)&&(r+=Kp),t&&(r+=Hp),n.filter(l=>!js(l)).reduce((l,i)=>l+(Vp.test(i)?Wp:i===""?bp:Qp),r)}function Yp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Xp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",m=fo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),h=u.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:gt([i,m.pathname]),pathnameBase:rm(gt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=gt([i,m.pathnameBase]))}return o}function fo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:h,isOptional:x}=g;if(h==="*"){let w=s[m]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[m];return x&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Jp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ua(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Zp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ua(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,em=e=>qp.test(e);function tm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?wn(e):e,i;if(n)if(em(n))i=n;else{if(n.includes("//")){let o=n;n=Qc(n),ua(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Ns(n.substring(1),"/"):i=Ns(n,t)}else i=t;return{pathname:i,search:lm(r),hash:im(l)}}function Ns(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function mi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let n=nm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=wn(e):(l=sr({},e),b(!l.pathname||!l.pathname.includes("?"),mi("?","pathname","search",l)),b(!l.pathname||!l.pathname.includes("#"),mi("#","pathname","hash",l)),b(!l.search||!l.search.includes("#"),mi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}s=m>=0?t[m]:"/"}let u=tm(l,s),c=o&&o!=="/"&&o.endsWith("/"),g=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Qc=e=>e.replace(/\/\/+/g,"/"),gt=e=>Qc(e.join("/")),rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kc=["post","put","patch","delete"];new Set(Kc);const am=["get",...Kc];new Set(am);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(null,arguments)}const Il=S.createContext(null),Gc=S.createContext(null),St=S.createContext(null),Al=S.createContext(null),Bt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Yc=S.createContext(null);function sm(e,t){let{relative:n}=t===void 0?{}:t;hr()||b(!1);let{basename:r,navigator:l}=S.useContext(St),{hash:i,pathname:o,search:s}=Dl(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:gt([r,o])),l.createHref({pathname:u,search:s,hash:i})}function hr(){return S.useContext(Al)!=null}function $t(){return hr()||b(!1),S.useContext(Al).location}function Xc(e){S.useContext(St).static||S.useLayoutEffect(e)}function um(){let{isDataRoute:e}=S.useContext(Bt);return e?Sm():cm()}function cm(){hr()||b(!1);let e=S.useContext(Il),{basename:t,future:n,navigator:r}=S.useContext(St),{matches:l}=S.useContext(Bt),{pathname:i}=$t(),o=JSON.stringify(Hc(l,n.v7_relativeSplatPath)),s=S.useRef(!1);return Xc(()=>{s.current=!0}),S.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=bc(c,JSON.parse(o),i,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gt([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,o,i,e])}function Dl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(St),{matches:l}=S.useContext(Bt),{pathname:i}=$t(),o=JSON.stringify(Hc(l,r.v7_relativeSplatPath));return S.useMemo(()=>bc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function dm(e,t){return fm(e,t)}function fm(e,t,n,r){hr()||b(!1);let{navigator:l}=S.useContext(St),{matches:i}=S.useContext(Bt),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$t(),g;if(t){var m;let N=typeof t=="string"?wn(t):t;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||b(!1),g=N}else g=c;let h=g.pathname||"/",x=h;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=Up(e,{pathname:x}),w=vm(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:gt([u,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:gt([u,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return t&&w?S.createElement(Al.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:at.Pop}},w):w}function pm(){let e=km(),t=om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:l},n):null,null)}const mm=S.createElement(pm,null);class hm extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Bt.Provider,{value:this.props.routeContext},S.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gm(e){let{routeContext:t,match:n,children:r}=e,l=S.useContext(Il);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Bt.Provider,{value:t},r)}function vm(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let g=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);g>=0||b(!1),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let m=o[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:x}=n,y=m.route.loader&&h[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((g,m,h)=>{let x,y=!1,w=null,N=null;n&&(x=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||mm,u&&(c<0&&h===0?(jm("route-fallback"),y=!0,N=null):c===h&&(y=!0,N=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),d=()=>{let p;return x?p=w:y?p=N:m.route.Component?p=S.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,S.createElement(gm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?S.createElement(hm,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Jc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jc||{}),Zc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zc||{});function ym(e){let t=S.useContext(Il);return t||b(!1),t}function xm(e){let t=S.useContext(Gc);return t||b(!1),t}function wm(e){let t=S.useContext(Bt);return t||b(!1),t}function qc(e){let t=wm(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function km(){var e;let t=S.useContext(Yc),n=xm(),r=qc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sm(){let{router:e}=ym(Jc.UseNavigateStable),t=qc(Zc.UseNavigateStable),n=S.useRef(!1);return Xc(()=>{n.current=!0}),S.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ur({fromRouteId:t},i)))},[e,t])}const Cs={};function jm(e,t,n){Cs[e]||(Cs[e]=!0)}function Nm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wt(e){b(!1)}function Cm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=at.Pop,navigator:i,static:o=!1,future:s}=e;hr()&&b(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:i,static:o,future:ur({v7_relativeSplatPath:!1},s)}),[u,s,i,o]);typeof r=="string"&&(r=wn(r));let{pathname:g="/",search:m="",hash:h="",state:x=null,key:y="default"}=r,w=S.useMemo(()=>{let N=gn(g,u);return N==null?null:{location:{pathname:N,search:m,hash:h,state:x,key:y},navigationType:l}},[u,g,m,h,x,y,l]);return w==null?null:S.createElement(St.Provider,{value:c},S.createElement(Al.Provider,{children:n,value:w}))}function Em(e){let{children:t,location:n}=e;return dm(po(t),n)}new Promise(()=>{});function po(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,l)=>{if(!S.isValidElement(r))return;let i=[...t,l];if(r.type===S.Fragment){n.push.apply(n,po(r.props.children,i));return}r.type!==Wt&&b(!1),!r.props.index||!r.props.children||b(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=po(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(null,arguments)}function ed(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Pm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zm(e,t){return e.button===0&&(!t||t==="_self")&&!Pm(e)}const _m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Tm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Lm="6";try{window.__reactRouterVersion=Lm}catch{}const Rm=S.createContext({isTransitioning:!1}),Mm="startTransition",Es=jd[Mm];function Om(e){let{basename:t,children:n,future:r,window:l}=e,i=S.useRef();i.current==null&&(i.current=Ip({window:l,v5Compat:!0}));let o=i.current,[s,u]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},g=S.useCallback(m=>{c&&Es?Es(()=>u(m)):u(m)},[u,c]);return S.useLayoutEffect(()=>o.listen(g),[o,g]),S.useEffect(()=>Nm(r),[r]),S.createElement(Cm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fn=S.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:u,to:c,preventScrollReset:g,viewTransition:m}=t,h=ed(t,_m),{basename:x}=S.useContext(St),y,w=!1;if(typeof c=="string"&&Im.test(c)&&(y=c,Fm))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=gn(v.pathname,x);v.origin===p.origin&&j!=null?c=j+v.search+v.hash:w=!0}catch{}let N=sm(c,{relative:l}),f=Dm(c,{replace:o,state:s,target:u,preventScrollReset:g,relative:l,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return S.createElement("a",xl({},h,{href:y||N,onClick:w||i?r:d,ref:n,target:u}))}),se=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:s,to:u,viewTransition:c,children:g}=t,m=ed(t,Tm),h=Dl(u,{relative:m.relative}),x=$t(),y=S.useContext(Gc),{navigator:w,basename:N}=S.useContext(St),f=y!=null&&Um(h)&&c===!0,d=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,p=x.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;l||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&N&&(v=gn(v,N)||v);const j=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=p===d||!o&&p.startsWith(d)&&p.charAt(j)==="/",z=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),_={isActive:P,isPending:z,isTransitioning:f},B=P?r:void 0,L;typeof i=="function"?L=i(_):L=[i,P?"active":null,z?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ye=typeof s=="function"?s(_):s;return S.createElement(Fn,xl({},m,{"aria-current":B,className:L,ref:n,style:ye,to:u,viewTransition:c}),typeof g=="function"?g(_):g)});var mo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mo||(mo={}));var Ps;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ps||(Ps={}));function Am(e){let t=S.useContext(Il);return t||b(!1),t}function Dm(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,u=um(),c=$t(),g=Dl(e,{relative:o});return S.useCallback(m=>{if(zm(m,n)){m.preventDefault();let h=r!==void 0?r:yl(c)===yl(g);u(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[c,u,g,r,l,n,e,i,o,s])}function Um(e,t){t===void 0&&(t={});let n=S.useContext(Rm);n==null&&b(!1);let{basename:r}=Am(mo.useViewTransitionState),l=Dl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fo(l.pathname,o)!=null||fo(l.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),re=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:u,...c},g)=>S.createElement("svg",{ref:g,...Bm,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${$m(e)}`,s].join(" "),...c},[...t.map(([m,h])=>S.createElement(m,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=re("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=re("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=re("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=re("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=re("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=re("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=re("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=re("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=re("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=re("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xm(){const[e,t]=S.useState([]),[n,r]=S.useState(!1),l=s=>{e.includes(s)||t([...e,s])},i=()=>{t([]),r(!1)},o=()=>{e.includes("Block Ice")&&r(!0)};return a.jsxs("div",{className:"home-container",children:[a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"badge animate-fade",children:[a.jsx(td,{size:16})," Three Generations Since 1940"]}),a.jsxs("h1",{children:["Taiping's Favourite Cendol ",a.jsx("br",{}),a.jsx("span",{children:"Since 1940"})]}),a.jsx("p",{children:"A family-run Indian-Muslim (Mamak) stall serving simple, refreshing cendol with a traditional recipe passed down through generations. Drop by for a cool bowl, a quick chat, or an easy takeaway in Taiping."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(Fn,{to:"/menu",className:"btn-primary",children:["View Our Menu ",a.jsx(hi,{size:20})]}),a.jsx(Fn,{to:"/story",className:"btn-secondary",children:"Discover Our Story"})]})]}),a.jsxs("div",{className:"hero-image-container",children:[a.jsx("img",{src:"/images/shop-pic.png",alt:"Ansari's Famous Cendol Storefront",className:"hero-image"}),a.jsxs("div",{className:"hero-floating-card glass-card",children:[a.jsxs("div",{className:"stars",children:[a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"})]}),a.jsx("p",{children:`"A must-visit whenever I'm in Taiping."`}),a.jsx("span",{children:"— Customer experience"})]})]})]}),a.jsxs("section",{className:"ingredients-spotlight",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Made the familiar way"}),a.jsx("h2",{className:"section-title",children:"What Goes Into a Bowl"}),a.jsx("p",{className:"section-desc",children:"Straightforward ingredients and traditional preparation make each bowl cool, sweet, and satisfying."})]}),a.jsxs("div",{className:"ingredients-grid",children:[a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"01"}),a.jsx("h3",{children:"Pandan Noodles"}),a.jsx("p",{children:"Green cendol noodles give every bowl its familiar pandan flavour and gentle bite."})]}),a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"02"}),a.jsx("h3",{children:"Gula Melaka Syrup"}),a.jsx("p",{children:"Palm sugar syrup brings the deep, comforting sweetness that regulars remember."})]}),a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"03"}),a.jsx("h3",{children:"Creamy Coconut Milk"}),a.jsx("p",{children:"Coconut milk and shaved ice keep the bowl refreshing in Taiping's warm weather."})]})]})]}),a.jsx("section",{className:"heritage-intro",children:a.jsxs("div",{className:"heritage-intro-grid",children:[a.jsx("div",{className:"heritage-intro-image",children:a.jsx("img",{src:"/images/image3.jpg",alt:"Historical Drawing of Ansari Cendol",className:"sketch-img"})}),a.jsxs("div",{className:"heritage-intro-text",children:[a.jsx("span",{className:"section-subtitle",children:"Since 1940"}),a.jsx("h2",{children:"A Family Tradition, One Bowl at a Time"}),a.jsx("p",{children:"Ansari's Famous Cendol has been part of everyday Taiping life since the 1940s. Its Indian-Muslim family roots and traditional way of serving cendol have kept generations of locals coming back."}),a.jsx("p",{children:"Today, the family continues the simple routine: prepare, serve, and welcome everyone looking for a refreshing bowl at a fair price."}),a.jsxs(Fn,{to:"/story",className:"link-button",children:["Read the Full Story ",a.jsx(hi,{size:16})]})]})]})}),a.jsx("section",{className:"ingredients-spotlight",children:a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Before You Visit"}),a.jsx("h2",{className:"section-title",children:"A Few Helpful Things to Know"}),a.jsx("p",{className:"section-desc",children:"Seating is limited and first-come, first-served. Peak times can mean a short wait, and takeaway orders are common. Popular flavours—especially Cendol Pulut—may sell out before closing, so visiting earlier is a good idea."}),a.jsxs(Fn,{to:"/visit",className:"link-button",children:["Plan Your Visit ",a.jsx(hi,{size:16})]})]})}),a.jsxs("section",{className:"interactive-bowl-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Interactive Recipe"}),a.jsx("h2",{className:"section-title",children:"Build Your Own Virtual Bowl"}),a.jsx("p",{className:"section-desc",children:"Follow the traditional preparation steps to create a perfect Malaysian Cendol."})]}),a.jsxs("div",{className:"bowl-builder-container glass-card",children:[a.jsxs("div",{className:"ingredients-selectors",children:[a.jsx("h4",{children:"Select Ingredients in Order:"}),a.jsx("button",{className:`select-btn ${e.includes("Green Noodles (Cendol)")?"active":""}`,onClick:()=>l("Green Noodles (Cendol)"),children:"1. Add Pandan Noodles"}),a.jsx("button",{className:`select-btn ${e.includes("Red Beans")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>l("Red Beans"),children:"2. Add Red Beans"}),a.jsx("button",{className:`select-btn ${e.includes("Glutinous Rice (Pulut)")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>l("Glutinous Rice (Pulut)"),children:"3. Add Glutinous Rice (Pulut)"}),a.jsx("button",{className:`select-btn ${e.includes("Block Ice")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>l("Block Ice"),children:"4. Shave Block Ice"}),a.jsx("button",{className:`select-btn ${e.includes("Coconut Milk")?"active":""}`,disabled:!e.includes("Block Ice"),onClick:()=>l("Coconut Milk"),children:"5. Pour Fresh Coconut Milk"}),a.jsx("button",{className:`select-btn ${n?"active":""}`,disabled:!e.includes("Coconut Milk"),onClick:o,children:"6. Drizzle Gula Melaka Syrup"}),a.jsx("button",{className:"clear-btn",onClick:i,children:"Reset Bowl"})]}),a.jsxs("div",{className:"bowl-visualizer",children:[a.jsx("div",{className:"bowl-rim",children:a.jsxs("div",{className:"bowl-contents",children:[e.includes("Green Noodles (Cendol)")&&a.jsxs("div",{className:"visual-pandan-noodles animate-drop",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),e.includes("Red Beans")&&a.jsxs("div",{className:"visual-beans animate-drop",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),e.includes("Glutinous Rice (Pulut)")&&a.jsx("div",{className:"visual-pulut animate-drop"}),e.includes("Block Ice")&&a.jsx("div",{className:"visual-ice animate-drop",children:a.jsx("div",{className:"ice-mound"})}),e.includes("Coconut Milk")&&a.jsx("div",{className:"visual-coconut-milk animate-fill"}),n&&a.jsx("div",{className:"visual-gula-melaka animate-syrup"})]})}),a.jsxs("div",{className:"bowl-status",children:[e.length===0&&a.jsx("p",{className:"status-text",children:'Select "Pandan Noodles" to begin your bowl!'}),e.length>0&&e.length<5&&a.jsx("p",{className:"status-text",children:"Bowl in preparation... Keep adding ingredients!"}),e.length>=5&&!n&&a.jsx("p",{className:"status-text",children:"Almost ready! Don't forget to drizzle the Gula Melaka syrup!"}),n&&a.jsxs("p",{className:"status-text success-text",children:[a.jsx(Ym,{size:18})," Deliciously Complete! Ready to serve. Enjoy your cold dessert!"]})]})]})]})]}),a.jsx("style",{children:`
        .home-container {
          padding-bottom: 2rem;
        }

        /* Hero */
        .hero {
          min-height: calc(90vh - 80px);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 4rem 8% 2rem 8%;
          background: radial-gradient(circle at 10% 20%, hsla(40, 25%, 94%, 0.8) 0%, hsla(142, 72%, 26%, 0.08) 90%);
        }
        .hero-content {
          animation: slideInLeft 1s var(--transition-smooth);
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--amber-light);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .hero-content h1 {
          font-family: var(--font-serif);
          font-size: 4.8rem;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 1.5rem;
        }
        .hero-content h1 span {
          color: var(--primary);
          background: linear-gradient(to right, var(--primary), var(--amber-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-content p {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 1.2s ease-out;
        }
        .hero-image {
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 4px solid #fff;
          transform: rotate(2deg);
          max-height: 480px;
          object-fit: cover;
          width: 100%;
          transition: var(--transition-smooth);
        }
        .hero-image:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -40px;
          padding: 1.5rem;
          max-width: 280px;
          animation: pulseGlow 5s infinite ease-in-out;
        }
        .stars {
          display: flex;
          gap: 0.25rem;
          color: gold;
          margin-bottom: 0.5rem;
        }
        .hero-floating-card p {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .hero-floating-card span {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-light);
        }

        /* Ingredient Spotlight */
        .ingredients-spotlight {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .ingredient-card {
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .ingredient-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .ingredient-num {
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 700;
          color: var(--primary-glow);
          position: absolute;
          top: 10px;
          right: 20px;
          line-height: 1;
        }
        .ingredient-card h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
          margin-bottom: 1rem;
        }
        .ingredient-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Heritage Intro */
        .heritage-intro {
          padding: 6rem 8%;
          background-color: var(--cream);
        }
        .heritage-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 5rem;
        }
        .sketch-img {
          width: 100%;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          background: #fff;
          padding: 10px;
        }
        .heritage-intro-text h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .quote {
          font-size: 1.2rem;
          font-style: italic;
          color: var(--primary-light);
          border-left: 3px solid var(--primary-light);
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-serif);
        }
        .heritage-intro-text p {
          color: var(--text-dark);
          margin-bottom: 1.2rem;
          font-size: 1rem;
        }
        .link-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--primary);
          transition: var(--transition-smooth);
          margin-top: 1rem;
        }
        .link-button:hover {
          color: var(--primary-light);
          gap: 0.75rem;
        }

        /* Interactive Bowl Builder */
        .interactive-bowl-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .bowl-builder-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          padding: 3.5rem;
          max-width: 1000px;
          margin: 0 auto;
          align-items: center;
        }
        .ingredients-selectors {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .ingredients-selectors h4 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--amber);
        }
        .select-btn {
          text-align: left;
          padding: 0.9rem 1.5rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          font-weight: 500;
          transition: var(--transition-smooth);
        }
        .select-btn:not(:disabled):hover {
          background: #fff;
          border-color: var(--primary-light);
          transform: translateX(5px);
        }
        .select-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .select-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .clear-btn {
          margin-top: 1rem;
          padding: 0.9rem;
          border-radius: var(--radius-sm);
          border: 2px dashed var(--amber);
          color: var(--amber);
          font-weight: 600;
          text-align: center;
          transition: var(--transition-smooth);
        }
        .clear-btn:hover {
          background: var(--amber);
          color: #fff;
        }
        
        .bowl-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        /* Digital Bowl Drawing */
        .bowl-rim {
          width: 320px;
          height: 160px;
          background: #fdfdfd;
          border: 6px solid var(--amber-light);
          border-top: none;
          border-radius: 0 0 160px 160px;
          position: relative;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .bowl-rim::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 25px;
          background: #eaeaea;
          border-radius: 50%;
          z-index: 5;
        }
        .bowl-contents {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        /* Animations & Ingredients inside Bowl */
        .animate-drop {
          animation: dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes dropIn {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .visual-pandan-noodles {
          position: absolute;
          bottom: 20px;
          left: 40px;
          right: 40px;
          height: 35px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
          z-index: 10;
        }
        .visual-pandan-noodles span {
          width: 40px;
          height: 8px;
          background: #3eb85d;
          border-radius: 10px;
          display: inline-block;
          transform: rotate(5deg);
        }
        .visual-pandan-noodles span:nth-child(even) {
          transform: rotate(-10deg);
          background: #4cc76c;
        }
        
        .visual-beans {
          position: absolute;
          bottom: 15px;
          left: 80px;
          right: 80px;
          height: 20px;
          display: flex;
          gap: 6px;
          justify-content: center;
          z-index: 12;
        }
        .visual-beans span {
          width: 14px;
          height: 10px;
          background: #7a2828;
          border-radius: 50%;
          display: inline-block;
        }

        .visual-pulut {
          position: absolute;
          bottom: 25px;
          left: 100px;
          width: 50px;
          height: 25px;
          background: #eae3d2;
          border-radius: 20px;
          z-index: 11;
          box-shadow: inset 2px 2px 5px rgba(0,0,0,0.05);
        }
        
        .visual-ice {
          position: absolute;
          bottom: 45px;
          left: 60px;
          right: 60px;
          height: 60px;
          z-index: 8;
        }
        .ice-mound {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #e2f1f6 100%);
          border-radius: 90px 90px 0 0;
          box-shadow: 0 -5px 15px rgba(255,255,255,0.8);
        }
        
        .visual-coconut-milk {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 115px;
          background: rgba(255, 255, 255, 0.65);
          z-index: 7;
          border-radius: 0 0 160px 160px;
          animation: milkFill 1.2s ease-out forwards;
        }
        @keyframes milkFill {
          from { height: 0; }
          to { height: 115px; }
        }

        .visual-gula-melaka {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 115px;
          background: linear-gradient(to top, rgba(93, 40, 5, 0.45) 20%, rgba(184, 98, 9, 0.25) 70%, transparent 100%);
          z-index: 9;
          border-radius: 0 0 160px 160px;
          animation: syrupPour 1.5s ease-out forwards;
        }
        @keyframes syrupPour {
          from { height: 0; opacity: 0; }
          to { height: 115px; opacity: 1; }
        }

        .bowl-status {
          min-height: 50px;
          text-align: center;
        }
        .status-text {
          font-weight: 500;
          color: var(--text-muted);
        }
        .success-text {
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          background: var(--primary-glow);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--primary-light);
          animation: pulseGlow 2s infinite;
        }

        /* Media Queries for Home */
        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 6rem 4% 3rem 4%;
            gap: 3rem;
          }
          .hero-content h1 {
            font-size: 3.5rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-floating-card {
            left: 20px;
          }
          .ingredients-grid {
            grid-template-columns: 1fr;
          }
          .heritage-intro-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .bowl-builder-container {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }
      `})]})}function Jm(){return a.jsxs("div",{className:"story-container",children:[a.jsx("section",{className:"story-hero",children:a.jsxs("div",{className:"story-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Since 1940"}),a.jsx("h1",{children:"Our Story"}),a.jsx("p",{className:"hero-lead",children:"A family-run Indian-Muslim (Mamak) cendol stall that has been part of Taiping life for generations."})]})}),a.jsx("section",{className:"history-chapter",children:a.jsxs("div",{className:"chapter-grid",children:[a.jsxs("div",{className:"chapter-text",children:[a.jsx("h2",{children:"A Taiping Family Tradition"}),a.jsx("p",{children:"Ansari's Famous Cendol began as a humble family street-food business in Taiping in the 1940s. Its Indian-Muslim roots, familiar flavours, and straightforward service have made it a local favourite across generations."}),a.jsxs("p",{children:["From its Taiping home at ",a.jsx("strong",{children:"92, Jalan Barrack"}),", the stall continues to offer a simple place to cool down, catch up, and enjoy traditional cendol. It is the kind of everyday stop that locals remember and visitors are glad to discover."]}),a.jsxs("div",{className:"story-quote glass-card",children:[a.jsx(Pt,{size:24,className:"quote-icon"}),a.jsx("p",{children:'"The cendol tastes exactly like I remember from childhood."'})]})]}),a.jsxs("div",{className:"chapter-image",children:[a.jsx("img",{src:"/images/image3.jpg",alt:"Vintage Drawing of P.M. Abdul Kader Stall",className:"heritage-photo"}),a.jsx("span",{className:"image-caption",children:"A glimpse of the family street-food tradition behind every bowl."})]})]})}),a.jsxs("section",{className:"timeline-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Our Journey"}),a.jsx("h2",{className:"section-title",children:"Generations of Familiar Flavour"}),a.jsx("p",{className:"section-desc",children:"A long-standing family recipe, prepared simply for the Taiping community."})]}),a.jsxs("div",{className:"timeline",children:[a.jsxs("div",{className:"timeline-item left",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Fr,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"1940s"}),a.jsx("h3",{children:"The Arrival"}),a.jsx("p",{children:"The family starts serving traditional cendol in Taiping, building a following one bowl at a time."})]})]}),a.jsxs("div",{className:"timeline-item right",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Fr,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"1970s"}),a.jsx("h3",{children:"Keeping It Familiar"}),a.jsx("p",{children:"The next generation carries on the family recipe and the small-stall spirit that regulars know."})]})]}),a.jsxs("div",{className:"timeline-item left",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Fr,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"2000s"}),a.jsx("h3",{children:"Growing With the Community"}),a.jsx("p",{children:"Word of mouth brings families, friends, and visitors back for a refreshing, affordable bowl."})]})]}),a.jsxs("div",{className:"timeline-item right",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Fr,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"Present Day"}),a.jsx("h3",{children:"Still Serving Taiping"}),a.jsx("p",{children:"The family keeps the focus on the Taiping stall: traditional cendol, honest portions, and familiar faces."})]})]})]})]}),a.jsxs("section",{className:"family-legacy-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"The Family Behind the Stall"}),a.jsx("h2",{className:"section-title",children:"The Family Lineage"}),a.jsx("p",{className:"section-desc",children:"A family tradition passed from one generation to the next."})]}),a.jsxs("div",{className:"family-tree",children:[a.jsxs("div",{className:"tree-node glass-card",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gi,{size:24})}),a.jsx("span",{className:"node-title",children:"The Initiator"}),a.jsx("h3",{children:"P.M. Abdul Kader"}),a.jsx("span",{className:"node-period",children:"1940s - 1970s"}),a.jsx("p",{children:"Helped establish the family tradition of serving cendol in Taiping."})]}),a.jsx("div",{className:"tree-connector"}),a.jsxs("div",{className:"tree-node glass-card",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gi,{size:24})}),a.jsx("span",{className:"node-title",children:"The Next Generation"}),a.jsx("h3",{children:"S.M. Abdul Rahman"}),a.jsx("span",{className:"node-period",children:"1970s - 2000s"}),a.jsx("p",{children:"Continued the traditional recipe and the family-run way of serving customers."})]}),a.jsx("div",{className:"tree-connector"}),a.jsxs("div",{className:"tree-node glass-card highlight-node",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gi,{size:24})}),a.jsx("span",{className:"node-title",children:"Keeping the Tradition Going"}),a.jsx("h3",{children:"Ansari Abdul Rahman"}),a.jsx("span",{className:"node-period",children:"2000s - Present"}),a.jsx("p",{children:"Keeps the Taiping stall welcoming for regulars and first-time visitors alike."})]})]})]}),a.jsx("section",{className:"secret-showcase",children:a.jsxs("div",{className:"secret-grid",children:[a.jsx("div",{className:"secret-image",children:a.jsx("img",{src:"/images/image1.jpg",alt:"Ansari preparing Cendol",className:"heritage-photo heritage-photo-portrait"})}),a.jsxs("div",{className:"secret-content",children:[a.jsx("h2",{children:"Made the Traditional Way"}),a.jsx("p",{children:"The taste people know comes from a family recipe and a simple, careful preparation passed down over time."}),a.jsx("p",{children:"Green cendol, shaved ice, coconut milk, and palm sugar come together in the familiar balance that makes a hot day in Taiping feel a little easier."}),a.jsxs("div",{className:"heritage-seal",children:[a.jsx(td,{size:36}),a.jsxs("div",{children:[a.jsx("h4",{children:"Family-Run Since 1940"}),a.jsx("p",{children:"Traditional cendol served simply for the Taiping community."})]})]})]})]})}),a.jsx("style",{children:`
        .story-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .story-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .story-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .hero-lead {
          font-size: 1.25rem;
          opacity: 0.9;
          font-weight: 300;
        }

        /* History Chapter */
        .history-chapter {
          padding: 6rem 8%;
        }
        .chapter-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .chapter-text h2 {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
        }
        .chapter-text p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          color: var(--text-dark);
        }
        .story-quote {
          padding: 2rem;
          border-left: 4px solid var(--amber-light);
          margin-top: 2rem;
          position: relative;
        }
        .quote-icon {
          position: absolute;
          top: -15px;
          right: 20px;
          color: var(--amber-glow);
        }
        .story-quote p {
          margin: 0;
          font-style: italic;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--amber);
        }
        .heritage-photo {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 4px solid #fff;
          object-fit: cover;
          max-height: 400px;
        }
        .heritage-photo-portrait {
          display: block;
          width: min(100%, 360px);
          max-height: none;
          margin: 0 auto;
          object-fit: contain;
        }
        .image-caption {
          display: block;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
          font-style: italic;
        }

        /* Timeline */
        .timeline-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--amber-glow);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
        }
        .timeline-item.left { left: 0; }
        .timeline-item.right { left: 50%; }
        
        .timeline-dot {
          width: 32px;
          height: 32px;
          position: absolute;
          background-color: var(--primary);
          border: 4px solid var(--cream-light);
          border-radius: 50%;
          top: 15px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .timeline-item.left .timeline-dot { right: -16px; }
        .timeline-item.right .timeline-dot { left: -16px; }
        
        .timeline-content {
          padding: 2rem;
          position: relative;
        }
        .timeline-date {
          display: inline-block;
          font-weight: 700;
          color: var(--primary-light);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .timeline-content h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .timeline-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Family Legacy Tree */
        .family-legacy-section {
          padding: 6rem 8%;
        }
        .family-tree {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .tree-node {
          padding: 2.5rem;
          width: 100%;
          text-align: center;
          position: relative;
          border-radius: var(--radius-md);
          transition: var(--transition-smooth);
        }
        .tree-node:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .highlight-node {
          border: 2px solid var(--primary-light);
          background: rgba(255, 255, 255, 0.9);
        }
        .node-icon {
          width: 48px;
          height: 48px;
          background: var(--amber-glow);
          color: var(--amber);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }
        .highlight-node .node-icon {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .node-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }
        .tree-node h3 {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .node-period {
          font-size: 0.9rem;
          color: var(--primary-light);
          font-weight: 600;
          display: block;
          margin-bottom: 1rem;
        }
        .tree-node p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }
        .tree-connector {
          width: 4px;
          height: 50px;
          background: var(--amber-glow);
        }
        .highlight-node .node-title {
          color: var(--primary-light);
        }

        /* Secret Showcase */
        .secret-showcase {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .secret-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .secret-content h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
        }
        .secret-content p {
          margin-bottom: 1.2rem;
          color: var(--text-dark);
        }
        .heritage-seal {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: #fff;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
          margin-top: 2rem;
        }
        .heritage-seal svg {
          color: var(--amber-light);
          flex-shrink: 0;
        }
        .heritage-seal h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .heritage-seal p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .chapter-grid, .secret-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .chapter-image {
            order: -1;
          }
          .timeline::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-item.right {
            left: 0;
          }
          .timeline-dot {
            left: 15px !important;
            right: auto !important;
          }
        }
      `})]})}const Zm=[{id:1,name:"Biasa",description:"Classic bowl of Ansari Famous Cendol.",price:2,category:"cendol",tag:"Classic",badge:"Original"},{id:2,name:"Berkacang",description:"Cendol served with red beans.",price:2.2,category:"cendol",tag:"Popular"},{id:3,name:"Berjagung",description:"Cendol served with sweet corn.",price:2.2,category:"cendol"},{id:4,name:"Berpulut",description:"Cendol served with glutinous rice.",price:2.6,category:"cendol",tag:"Popular"},{id:5,name:"Kacang & Jagung",description:"Cendol served with red beans and sweet corn.",price:2.4,category:"cendol"},{id:6,name:"Kacang & Pulut",description:"Cendol served with red beans and glutinous rice.",price:2.8,category:"cendol"},{id:7,name:"Kacang & Pulut & Jagung (SP)",description:"Special cendol with red beans, glutinous rice, and sweet corn.",price:3,category:"cendol",badge:"Special"},{id:8,name:"Take Away Cendol Kecil",description:"Small packed cendol for take away.",price:2.5,category:"takeaway"},{id:9,name:"Take Away Cendol Berkacang",description:"Packed cendol with red beans for take away.",price:2.7,category:"takeaway"},{id:10,name:"Take Away Cendol Besar",description:"Large packed cendol for take away.",price:4.4,category:"takeaway"},{id:11,name:"Take Away Cendol Besar Berkacang",description:"Large packed cendol with red beans for take away.",price:4.7,category:"takeaway"},{id:12,name:"Pasembor",description:"Pasembor served packed or plated.",price:4.7,category:"savory",tag:"Local Favorite"}];function qm(){const[e,t]=S.useState([]),[n,r]=S.useState("all"),[l,i]=S.useState(!0),[o,s]=S.useState(!1);S.useEffect(()=>{fetch("/api/menu").then(c=>{if(!c.ok)throw new Error("API server down");return c.json()}).then(c=>{t(c),i(!1)}).catch(()=>{t(Zm),i(!1),s(!0)})},[]);const u=n==="all"?e:e.filter(c=>c.category===n);return a.jsxs("div",{className:"menu-container",children:[a.jsx("section",{className:"menu-hero",children:a.jsxs("div",{className:"menu-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Freshly Served Daily"}),a.jsx("h1",{children:"Our Menu"}),a.jsx("p",{children:"Choose a classic bowl, add your favourite topping, or take it away. Traditional cendol and Pasembor, served simply in Taiping."})]})}),a.jsxs("section",{className:"menu-section",children:[a.jsxs("div",{className:"category-filters",children:[a.jsx("button",{className:`filter-btn ${n==="all"?"active":""}`,onClick:()=>r("all"),children:"All Items"}),a.jsx("button",{className:`filter-btn ${n==="cendol"?"active":""}`,onClick:()=>r("cendol"),children:"Iced Cendol"}),a.jsx("button",{className:`filter-btn ${n==="savory"?"active":""}`,onClick:()=>r("savory"),children:"Savory Pasembur"}),a.jsx("button",{className:`filter-btn ${n==="takeaway"?"active":""}`,onClick:()=>r("takeaway"),children:"Take Away"})]}),o&&a.jsxs("div",{className:"api-notice",children:[a.jsx("span",{className:"notice-badge",children:"Offline Mode"}),a.jsx("p",{children:"Showing the stall menu while the menu service is unavailable."})]}),a.jsx("div",{className:"menu-grid",children:l?Array(4).fill(0).map((c,g)=>a.jsxs("div",{className:"menu-card glass-card loading-card",children:[a.jsx("div",{className:"loading-line title"}),a.jsx("div",{className:"loading-line desc"}),a.jsx("div",{className:"loading-line price"})]},g)):u.map(c=>a.jsxs("div",{className:"menu-card glass-card",children:[c.badge&&a.jsx("span",{className:"menu-card-badge",children:c.badge}),a.jsxs("div",{className:"menu-card-header",children:[a.jsx("h3",{children:c.name}),a.jsxs("span",{className:"menu-card-price",children:["RM ",c.price.toFixed(2)]})]}),c.tag&&a.jsxs("span",{className:"menu-card-tag",children:[a.jsx(Pt,{size:12,fill:"currentColor"})," ",c.tag]}),a.jsx("p",{className:"menu-card-desc",children:c.description}),a.jsx("div",{className:"menu-card-footer",children:a.jsxs("span",{className:"ingredient-indicator",children:[a.jsx(Qm,{size:14})," Traditional Preparation"]})})]},c.id))})]}),a.jsx("style",{children:`
        .menu-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .menu-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .menu-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .menu-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Filters */
        .menu-section {
          padding: 5rem 8%;
        }
        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.8rem 1.8rem;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .filter-btn:hover {
          background: #fff;
          border-color: var(--primary-light);
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 15px hsla(142, 72%, 26%, 0.2);
        }

        /* API Notice */
        .api-notice {
          max-width: 600px;
          margin: -2rem auto 3rem auto;
          text-align: center;
          background: hsla(28, 70%, 20%, 0.08);
          border: 1px dashed var(--amber-light);
          border-radius: var(--radius-md);
          padding: 1rem 2rem;
        }
        .notice-badge {
          display: inline-block;
          background: var(--amber);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }
        .api-notice p {
          font-size: 0.85rem;
          color: var(--amber);
          font-weight: 500;
          margin: 0;
        }

        /* Menu Grid */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        .menu-card {
          padding: 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-smooth);
        }
        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .menu-card-badge {
          position: absolute;
          top: -12px;
          right: 25px;
          background: var(--primary);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .menu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .menu-card-header h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
          line-height: 1.2;
        }
        .menu-card-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-light);
          flex-shrink: 0;
        }
        .menu-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--amber-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        .menu-card-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .menu-card-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .ingredient-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }
        .ingredient-indicator svg {
          color: var(--primary-light);
        }

        /* Loading Skeleton */
        .loading-card {
          min-height: 200px;
          border-style: dashed;
        }
        .loading-line {
          background: rgba(0,0,0,0.05);
          height: 15px;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .loading-line.title { width: 60%; height: 25px; }
        .loading-line.desc { width: 90%; height: 50px; }
        .loading-line.price { width: 30%; }

        /* Responsive */
        @media (max-width: 900px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const eh=[{id:1,city:"Taiping Stall",address:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia",status:"Active"}];function th(){const[e,t]=S.useState([]),[n,r]=S.useState({name:"",email:"",subject:"",message:""}),[l,i]=S.useState(!1),[o,s]=S.useState(!1),[u,c]=S.useState(null);S.useEffect(()=>{fetch("/api/branches").then(h=>{if(!h.ok)throw new Error("API server down");return h.json()}).then(h=>{t(h)}).catch(()=>{t(eh)})},[]);const g=h=>{const{name:x,value:y}=h.target;r({...n,[x]:y})},m=h=>{h.preventDefault(),i(!0),c(null),s(!1),fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(async x=>{const y=await x.json();if(!x.ok)throw new Error(y.message||"Submission failed");s(!0),r({name:"",email:"",subject:"",message:""})}).catch(x=>{console.error(x);try{const y=JSON.parse(localStorage.getItem("cendol_messages")||"[]");y.push({...n,id:Date.now(),date:new Date().toISOString()}),localStorage.setItem("cendol_messages",JSON.stringify(y)),s(!0),r({name:"",email:"",subject:"",message:""})}catch{c("Failed to send message. Please check your network.")}}).finally(()=>{i(!1)})};return a.jsxs("div",{className:"visit-container",children:[a.jsx("section",{className:"visit-hero",children:a.jsxs("div",{className:"visit-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Find Us in Perak"}),a.jsx("h1",{children:"Visit Us"}),a.jsx("p",{children:"Visit our family-run cendol stall in Taiping for a simple, refreshing bowl or an easy takeaway."})]})}),a.jsx("section",{className:"main-stall-section",children:a.jsxs("div",{className:"main-stall-grid",children:[a.jsxs("div",{className:"stall-info-card glass-card",children:[a.jsx("span",{className:"info-card-badge",children:"Family-Run Stall"}),a.jsx("h2",{children:"Taiping Stall"}),a.jsx("p",{className:"stall-desc",children:"Find us at Jalan Barrack, where locals and visitors stop by for traditional cendol at an affordable price."}),a.jsxs("div",{className:"info-items",children:[a.jsxs("div",{className:"info-item",children:[a.jsx(rd,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Address"}),a.jsx("p",{children:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(nd,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Operating Hours"}),a.jsx("p",{children:"Open Daily: 10:00 AM - 6:30 PM"}),a.jsx("span",{className:"subtext",children:"* Hours can occasionally vary; please call ahead if you are making a special trip."})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(ld,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Phone or WhatsApp"}),a.jsx("p",{children:"+60 5-808 2004"})]})]})]})]}),a.jsx("div",{className:"map-wrapper glass-card",children:a.jsxs("div",{className:"mock-map",children:[a.jsx("div",{className:"map-overlay",children:a.jsxs("div",{className:"map-pin-bubble",children:[a.jsx("strong",{children:"Ansari's Famous Cendol"}),a.jsx("p",{children:"92, Jalan Barrack, Taiping"})]})}),a.jsx("iframe",{title:"Taiping Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9168962366885!2d100.73884171536762!3d4.851944396476901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304adf4be6ecb1bf%3A0xe54e6012fa6b23d9!2sAnsari%20Famous%20Cendol!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy",width:"100%",height:"100%",style:{border:0,borderRadius:"inherit"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})})]})}),a.jsx("section",{className:"main-stall-section",children:a.jsxs("div",{className:"stall-info-card glass-card",style:{maxWidth:"900px",margin:"0 auto"},children:[a.jsx("span",{className:"info-card-badge",children:"Before You Visit"}),a.jsx("h2",{children:"Good to Know"}),a.jsx("p",{className:"stall-desc",children:"Seating is limited and available on a first-come, first-served basis. At busy times there may be a short wait, and takeaway orders are common. Popular choices, especially Cendol Pulut, can sell out before closing. Street parking is subject to availability nearby."})]})}),a.jsx("section",{className:"inquiries-branches-section",children:a.jsxs("div",{className:"inquiry-grid",children:[a.jsxs("div",{className:"contact-form-side glass-card",children:[a.jsx("h3",{children:"Send Us a Message"}),a.jsx("p",{children:"For general questions, directions, or visitor information, send us a message. For a quicker reply, phone or WhatsApp the stall."}),a.jsxs("form",{onSubmit:m,className:"contact-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Your Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:g,required:!0,placeholder:"e.g. John Doe"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:g,required:!0,placeholder:"name@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",children:"Subject"}),a.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:g,required:!0,placeholder:"e.g. Opening hours or directions"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Your Message"}),a.jsx("textarea",{id:"message",name:"message",rows:"5",value:n.message,onChange:g,required:!0,placeholder:"Write your message here..."})]}),a.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",disabled:l,children:[l?"Sending...":"Send Message"," ",a.jsx(Gm,{size:16})]}),o&&a.jsxs("div",{className:"alert alert-success animate-fade",children:[a.jsx(Wm,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:"Message Sent"}),a.jsx("p",{children:"Thank you. We will get back to you when we can."})]})]}),u&&a.jsxs("div",{className:"alert alert-error animate-fade",children:[a.jsx(Vm,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:"Error!"}),a.jsx("p",{children:u})]})]})]})]}),a.jsxs("div",{className:"branches-list-side",children:[a.jsx("span",{className:"section-subtitle",children:"Current Location"}),a.jsx("h3",{children:"Our Taiping Stall"}),a.jsx("p",{className:"branches-intro",children:"Our one family-run location is ready for quick visits, a cool bowl, or takeaway."}),a.jsx("div",{className:"branches-grid",children:e.map(h=>a.jsxs("div",{className:`branch-card glass-card ${h.status==="Active"?"active-branch":""}`,children:[a.jsxs("div",{className:"branch-card-header",children:[a.jsx("h4",{children:h.city}),a.jsx("span",{className:`branch-status-badge ${h.status.toLowerCase()}`,children:h.status})]}),a.jsx("p",{children:h.address})]},h.id))})]})]})}),a.jsx("style",{children:`
        .visit-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .visit-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .visit-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .visit-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Main Stall */
        .main-stall-section {
          padding: 5rem 8%;
        }
        .main-stall-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }
        .stall-info-card {
          padding: 3rem 2.5rem;
          position: relative;
        }
        .info-card-badge {
          position: absolute;
          top: -12px;
          left: 30px;
          background: var(--amber);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .stall-info-card h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1rem;
        }
        .stall-desc {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }
        .info-item svg {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .info-item h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .info-item p {
          font-size: 0.95rem;
          color: var(--text-dark);
        }
        .info-item .subtext {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          margin-top: 0.25rem;
        }

        .map-wrapper {
          overflow: hidden;
          padding: 0.5rem;
          min-height: 400px;
        }
        .mock-map {
          width: 100%;
          height: 100%;
          min-height: 390px;
          border-radius: calc(var(--radius-lg) - 4px);
          position: relative;
          background: #e5e3df;
        }

        /* Contact & Branches */
        .inquiries-branches-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .inquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: flex-start;
        }
        .contact-form-side {
          padding: 3rem;
        }
        .contact-form-side h3 {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .contact-form-side p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .form-group input, .form-group textarea {
          padding: 0.9rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: rgba(255,255,255,0.8);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-light);
          background: #fff;
          outline: none;
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }
        
        /* Alerts */
        .alert {
          margin-top: 1.5rem;
          padding: 1.2rem;
          border-radius: var(--radius-sm);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          font-size: 0.9rem;
        }
        .alert-success {
          background: hsla(142, 72%, 26%, 0.08);
          border: 1px solid var(--primary-light);
          color: var(--primary);
        }
        .alert-error {
          background: rgba(220, 53, 69, 0.08);
          border: 1px solid #dc3545;
          color: #dc3545;
        }
        .alert h5 {
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .alert p {
          margin: 0;
          font-size: 0.85rem;
        }

        /* Branches List */
        .branches-list-side h3 {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .branches-intro {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .branch-card {
          padding: 1.5rem;
          transition: var(--transition-smooth);
        }
        .branch-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .active-branch {
          border: 1.5px solid var(--primary-light);
        }
        .branch-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }
        .branch-card-header h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--amber);
        }
        .branch-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .branch-status-badge.active {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .branch-status-badge.planned {
          background: rgba(0,0,0,0.05);
          color: var(--text-muted);
        }
        .branch-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .main-stall-grid, .inquiry-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .branches-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const et=[{image:"/images/afc-shop-pic.png",title:"Ansari Famous Cendol Shop",description:"The real stall front and counter where bowls are served to Taiping regulars and visitors."},{image:"/images/afc-customers.png",title:"Customers at the Shop",description:"Local customers enjoying a simple break over cendol."},{image:"/images/afc-customerss.png",title:"A Busy Cendol Stop",description:"An everyday busy moment at the family-run stall."},{image:"/images/afc-happy-customers.png",title:"Happy Customers",description:"Customers sharing a cheerful cendol stop together."},{image:"/images/afc-customer.jpg",title:"Customer Moment",description:"A real customer moment from the stall."},{image:"/images/afc-2-cust.jpg",title:"Cendol Together",description:"Cendol shared the easy, local way."},{image:"/images/afc-image4.jpg",title:"Shop Gallery Photo",description:"A look inside the everyday atmosphere around the stall."},{image:"/images/afc-screenshot-1.png",title:"AFC Photo Collection",description:"Freshly prepared cendol and the people who make the stall lively."},{image:"/images/afc-screenshot-2.png",title:"AFC Gallery Highlight",description:"A glimpse of the simple serving tradition at Ansari Famous Cendol."},{image:"/images/afc-screenshot-3.png",title:"AFC Customer Gallery",description:"A familiar Taiping cendol moment with local customers."}],nh=[{id:"Fp9Rq_QhnbU",title:"Ansari Famous Cendol Reputation Video 1"},{id:"9sA_P6GMHVU",title:"Ansari Famous Cendol Reputation Video 2"},{id:"1n59qWD2vrI",title:"Ansari Famous Cendol Reputation Video 3"},{id:"H6TTUvmPrsw",title:"Ansari Famous Cendol Reputation Video 4"},{id:"HMqaMcnhpPo",title:"Ansari Famous Cendol Reputation Video 5"},{id:"Vv912w-Qveg",title:"Ansari Famous Cendol Reputation Video 6"},{id:"ijA_vyLKLbg",title:"Ansari Famous Cendol Reputation Video 7"},{id:"E_hzRn8yzxM",title:"Ansari Famous Cendol Reputation Video 8"},{id:"ObjZ9GeoaJ8",title:"Ansari Famous Cendol Reputation Video 9"}];function rh(){const[e,t]=S.useState(0),n=()=>{t(l=>l===et.length-1?0:l+1)},r=()=>{t(l=>l===0?et.length-1:l-1)};return a.jsxs("div",{className:"media-container",children:[a.jsx("section",{className:"media-hero",children:a.jsxs("div",{className:"media-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Life at the Stall"}),a.jsx("h1",{children:"Media & Gallery"}),a.jsx("p",{children:"See the real stall atmosphere, freshly prepared cendol, and the customers who make Ansari's part of Taiping."})]})}),a.jsxs("section",{className:"carousel-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"From Our Stall"}),a.jsx("h2",{className:"section-title",children:"Everyday Taiping Moments"})]}),a.jsxs("div",{className:"carousel-wrapper glass-card",children:[a.jsxs("div",{className:"carousel-image-container",children:[a.jsx("img",{src:et[e].image,alt:et[e].title,className:"carousel-image animate-fade"},e),a.jsx("button",{className:"carousel-arrow prev",onClick:r,"aria-label":"Previous image",children:a.jsx(Hm,{size:24})}),a.jsx("button",{className:"carousel-arrow next",onClick:n,"aria-label":"Next image",children:a.jsx(bm,{size:24})})]}),a.jsxs("div",{className:"carousel-caption",children:[a.jsxs("div",{className:"caption-header",children:[a.jsx("h3",{children:et[e].title}),a.jsxs("span",{className:"slide-indicator",children:["Slide ",e+1," of ",et.length]})]}),a.jsx("p",{children:et[e].description}),a.jsx("div",{className:"carousel-dots",children:et.map((l,i)=>a.jsx("button",{className:`dot-btn ${e===i?"active":""}`,onClick:()=>t(i),"aria-label":`Go to slide ${i+1}`},i))})]})]})]}),a.jsxs("section",{className:"videos-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Videos"}),a.jsx("h2",{className:"section-title",children:"Watch the Stall in Action"}),a.jsx("p",{className:"section-desc",children:"Watch visits and moments that show the simple, busy rhythm of Ansari's Famous Cendol."})]}),a.jsx("div",{className:"videos-grid",children:nh.map(l=>a.jsx("div",{className:"video-card glass-card",children:a.jsx("iframe",{src:`https://www.youtube.com/embed/${l.id}`,title:l.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,loading:"lazy"})},l.id))})]}),a.jsx("style",{children:`
        .media-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .media-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .media-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .media-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Carousel */
        .carousel-section {
          padding: 5rem 8%;
        }
        .carousel-wrapper {
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .carousel-image-container {
          position: relative;
          width: 100%;
          height: 500px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: var(--transition-smooth);
        }
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(15, 15, 15, 0.7);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .carousel-arrow:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.05);
        }
        .carousel-arrow.prev { left: 20px; }
        .carousel-arrow.next { right: 20px; }

        .carousel-caption {
          padding: 2.5rem;
          background: #fff;
          border-top: 1px solid var(--border-color);
        }
        .caption-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }
        .caption-header h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
        }
        .slide-indicator {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--cream);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }
        .carousel-caption p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
        }
        .dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--amber-glow);
          transition: var(--transition-smooth);
        }
        .dot-btn.active {
          background: var(--primary);
          width: 30px;
          border-radius: 10px;
        }

        /* Videos Section */
        .videos-section {
          padding: 5rem 8% 6rem;
          background-color: var(--cream-light);
        }
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1180px;
          margin: 3rem auto 0;
        }
        .video-card {
          overflow: hidden;
          background: #000;
          aspect-ratio: 16 / 9;
        }
        .video-card iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
        }

        /* Patrons Section */
        .patrons-section {
          padding: 6rem 8%;
          background-color: #fff;
        }
        .heritage-project-title {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-glow);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--primary-light);
          margin-top: 1rem;
        }
        .patrons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .patron-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem 1.5rem;
          background: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          transition: var(--transition-smooth);
        }
        .patron-badge:hover {
          transform: translateY(-2px);
          border-color: var(--primary-light);
          box-shadow: var(--shadow-sm);
        }
        .badge-heart {
          color: var(--primary-light);
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .videos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .patrons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .carousel-image-container {
            height: 350px;
          }
          .patrons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .videos-grid {
            grid-template-columns: 1fr;
          }
          .patrons-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function lh(){const{pathname:e}=$t();return S.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function ih(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1);$t(),S.useEffect(()=>{const i=()=>{window.scrollY>20?t(!0):t(!1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const l=()=>r(!1);return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:`navbar ${e?"scrolled":""}`,children:[a.jsxs("div",{className:"logo-container",children:[a.jsx("img",{src:"/images/image2.jpg",alt:"Cendol Logo",className:"logo-icon"}),a.jsxs("div",{className:"logo-text",children:["Ansari's",a.jsx("span",{children:"Famous"})]})]}),a.jsxs("ul",{className:"nav-links",children:[a.jsx("li",{children:a.jsx(se,{to:"/",className:({isActive:i})=>`nav-link ${i?"active":""}`,end:!0,children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",className:({isActive:i})=>`nav-link ${i?"active":""}`,children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",className:({isActive:i})=>`nav-link ${i?"active":""}`,children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",className:({isActive:i})=>`nav-link ${i?"active":""}`,children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",className:({isActive:i})=>`nav-link ${i?"active":""}`,children:"Media"})})]}),a.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),"aria-label":"Toggle navigation menu",children:n?a.jsx(zs,{size:28}):a.jsx(Km,{size:28})})]}),a.jsxs("div",{className:`mobile-drawer ${n?"open":""}`,children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"logo-text",children:["Ansari's",a.jsx("span",{children:"Famous"})]}),a.jsx("button",{onClick:l,children:a.jsx(zs,{size:28})})]}),a.jsxs("ul",{className:"drawer-links",children:[a.jsx("li",{children:a.jsx(se,{to:"/",className:"drawer-link",onClick:l,end:!0,children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",className:"drawer-link",onClick:l,children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",className:"drawer-link",onClick:l,children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",className:"drawer-link",onClick:l,children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",className:"drawer-link",onClick:l,children:"Media"})})]})]}),n&&a.jsx("div",{className:"drawer-overlay",onClick:l}),a.jsx("style",{children:`
        /* Drawer Styles */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100vh;
          background: var(--dark);
          color: var(--text-light);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-lg);
        }
        .mobile-drawer.open {
          right: 0;
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }
        .drawer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .drawer-link {
          font-size: 1.3rem;
          font-weight: 500;
          display: block;
          transition: var(--transition-smooth);
        }
        .drawer-link:hover, .drawer-link.active {
          color: var(--primary-light);
          padding-left: 10px;
        }
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
        }
      `})]})}function oh(){return a.jsxs(Om,{children:[a.jsx(lh,{}),a.jsxs("div",{className:"app-container",children:[a.jsx(ih,{}),a.jsx("main",{className:"page-content",children:a.jsxs(Em,{children:[a.jsx(Wt,{path:"/",element:a.jsx(Xm,{})}),a.jsx(Wt,{path:"/story",element:a.jsx(Jm,{})}),a.jsx(Wt,{path:"/menu",element:a.jsx(qm,{})}),a.jsx(Wt,{path:"/visit",element:a.jsx(th,{})}),a.jsx(Wt,{path:"/media",element:a.jsx(rh,{})})]})}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("h3",{children:"Ansari's Famous Cendol"}),a.jsx("p",{children:"A family-run Indian-Muslim (Mamak) stall serving refreshing, traditional cendol to Taiping locals and visitors."}),a.jsx("div",{className:"footer-brand-legacy",children:"Since 1940 • A Taiping local favourite"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Quick Links"}),a.jsxs("ul",{className:"footer-links-list",children:[a.jsx("li",{children:a.jsx(se,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",children:"Media & Gallery"})})]})]}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("h4",{children:"Contact Us"}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(rd,{size:20}),a.jsx("span",{children:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(nd,{size:20}),a.jsx("span",{children:"Open Daily: 10:00 AM - 6:30 PM"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(ld,{size:20}),a.jsx("span",{children:"+60 5-808 2004 (Taiping Main)"})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",new Date().getFullYear()," Ansari's Famous Cendol. All Rights Reserved."]}),a.jsx("p",{children:"Made for the Taiping community."})]})]})]})]})}vi.createRoot(document.getElementById("root")).render(a.jsx(Us.StrictMode,{children:a.jsx(oh,{})}));

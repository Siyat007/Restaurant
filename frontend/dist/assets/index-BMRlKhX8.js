function od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ts={exports:{}},wi={},Ls={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),sd=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),fd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),gd=Symbol.for("react.memo"),vd=Symbol.for("react.lazy"),da=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ms=Object.assign,Is={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Rs}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Os(){}Os.prototype=vn.prototype;function ho(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Rs}var go=ho.prototype=new Os;go.constructor=ho;Ms(go,vn.prototype);go.isPureReactComponent=!0;var fa=Array.isArray,Fs=Object.prototype.hasOwnProperty,vo={current:null},As={key:!0,ref:!0,__self:!0,__source:!0};function Ds(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Fs.call(t,r)&&!As.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ur,type:e,key:l,ref:o,props:i,_owner:vo.current}}function xd(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pa=/\/+/g;function Hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):t.toString(36)}function Or(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ur:case sd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Hi(o,0):r,fa(i)?(n="",e!=null&&(n=e.replace(pa,"$&/")+"/"),Or(i,t,n,"",function(c){return c})):i!=null&&(yo(i)&&(i=xd(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",fa(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Hi(l,s);o+=Or(l,t,n,u,i)}else if(u=yd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Hi(l,s++),o+=Or(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,t,n){if(e==null)return e;var r=[],i=0;return Or(e,r,"","",function(l){return t.call(n,l,i++)}),r}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Fr={transition:null},jd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:vo};function Us(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=vn;M.Fragment=ud;M.Profiler=dd;M.PureComponent=ho;M.StrictMode=cd;M.Suspense=hd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;M.act=Us;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ms({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=vo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Fs.call(t,u)&&!As.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ur,type:e.type,key:i,ref:l,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fd,_context:e},e.Consumer=e};M.createElement=Ds;M.createFactory=function(e){var t=Ds.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:md,render:e}};M.isValidElement=yo;M.lazy=function(e){return{$$typeof:vd,_payload:{_status:-1,_result:e},_init:kd}};M.memo=function(e,t){return{$$typeof:gd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};M.unstable_act=Us;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Ls.exports=M;var j=Ls.exports;const Bs=ad(j),Sd=od({__proto__:null,default:Bs},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=j,Cd=Symbol.for("react.element"),Ed=Symbol.for("react.fragment"),Pd=Object.prototype.hasOwnProperty,zd=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Pd.call(t,r)&&!_d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Cd,type:e,key:l,ref:o,props:i,_owner:zd.current}}wi.Fragment=Ed;wi.jsx=$s;wi.jsxs=$s;Ts.exports=wi;var a=Ts.exports,vl={},bs={exports:{}},Se={},Hs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var R=E.length;E.push(T);e:for(;0<R;){var Q=R-1>>>1,X=E[Q];if(0<i(X,T))E[Q]=T,E[R]=X,R=Q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],R=E.pop();if(R!==T){E[0]=R;e:for(var Q=0,X=E.length,hr=X>>>1;Q<hr;){var St=2*(Q+1)-1,bi=E[St],Nt=St+1,gr=E[Nt];if(0>i(bi,R))Nt<X&&0>i(gr,bi)?(E[Q]=gr,E[Nt]=R,Q=Nt):(E[Q]=bi,E[St]=R,Q=St);else if(Nt<X&&0>i(gr,R))E[Q]=gr,E[Nt]=R,Q=Nt;else break e}}return T}function i(E,T){var R=E.sortIndex-T.sortIndex;return R!==0?R:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],g=1,m=null,h=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function v(E){if(w=!1,p(E),!y)if(n(u)!==null)y=!0,Bi(S);else{var T=n(c);T!==null&&$i(v,T.startTime-E)}}function S(E,T){y=!1,w&&(w=!1,f(_),_=-1),x=!0;var R=h;try{for(p(T),m=n(u);m!==null&&(!(m.expirationTime>T)||E&&!ye());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var X=Q(m.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),p(T)}else r(u);m=n(u)}if(m!==null)var hr=!0;else{var St=n(c);St!==null&&$i(v,St.startTime-T),hr=!1}return hr}finally{m=null,h=R,x=!1}}var P=!1,z=null,_=-1,B=5,L=-1;function ye(){return!(e.unstable_now()-L<B)}function kn(){if(z!==null){var E=e.unstable_now();L=E;var T=!0;try{T=z(!0,E)}finally{T?jn():(P=!1,z=null)}}else P=!1}var jn;if(typeof d=="function")jn=function(){d(kn)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,ld=ca.port2;ca.port1.onmessage=kn,jn=function(){ld.postMessage(null)}}else jn=function(){N(kn,0)};function Bi(E){z=E,P||(P=!0,jn())}function $i(E,T){_=N(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Bi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(E,T,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,E={id:g++,callback:T,priorityLevel:E,startTime:R,expirationTime:X,sortIndex:-1},R>Q?(E.sortIndex=R,t(c,E),n(u)===null&&E===n(c)&&(w?(f(_),_=-1):w=!0,$i(v,R-Q))):(E.sortIndex=X,t(u,E),y||x||(y=!0,Bi(S))),E},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(E){var T=h;return function(){var R=h;h=T;try{return E.apply(this,arguments)}finally{h=R}}}})(Vs);Hs.exports=Vs;var Td=Hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=j,je=Td;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ws=new Set,Vn={};function Dt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Ws.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ma={},ha={};function Md(e){return yl.call(ha,e)?!0:yl.call(ma,e)?!1:Rd.test(e)?ha[e]=!0:(ma[e]=!0,!1)}function Id(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Od(e,t,n,r){if(t===null||typeof t>"u"||Id(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xo=/[\-:]([a-z])/g;function wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xo,wo);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xo,wo);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xo,wo);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ko(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Od(t,n,i,r)&&(n=null),r||i===null?Md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Qs=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),So=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ks=Symbol.for("react.offscreen"),ga=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Vi;function Ln(e){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var Wi=!1;function Qi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function Fd(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=Qi(e.type,!1),e;case 11:return e=Qi(e.type.render,!1),e;case 1:return e=Qi(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case xl:return"Profiler";case jo:return"StrictMode";case wl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Qs:return(e._context.displayName||"Context")+".Provider";case So:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function Ad(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=Ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Dd(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xs(e,t){t=t.checked,t!=null&&ko(e,"checked",t,!1)}function Nl(e,t){Xs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cl(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cl(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Rn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function qs(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Ud.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,rn=null,ln=null;function ka(e){if(e=fr(e)){if(typeof Ll!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ci(t),Ll(e.stateNode,e.type,t))}}function ru(e){rn?ln?ln.push(e):ln=[e]:rn=e}function iu(){if(rn){var e=rn,t=ln;if(ln=rn=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function lu(e,t){return e(t)}function ou(){}var Gi=!1;function au(e,t,n){if(Gi)return e(t,n);Gi=!0;try{return lu(e,t,n)}finally{Gi=!1,(rn!==null||ln!==null)&&(ou(),iu())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Rl=!1;if(Ke)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Rl=!1}function $d(e,t,n,r,i,l,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Fn=!1,Yr=null,Jr=!1,Ml=null,bd={onError:function(e){Fn=!0,Yr=e}};function Hd(e,t,n,r,i,l,o,s,u){Fn=!1,Yr=null,$d.apply(bd,arguments)}function Vd(e,t,n,r,i,l,o,s,u){if(Hd.apply(this,arguments),Fn){if(Fn){var c=Yr;Fn=!1,Yr=null}else throw Error(k(198));Jr||(Jr=!0,Ml=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(Ut(e)!==e)throw Error(k(188))}function Wd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ja(i),e;if(l===r)return ja(i),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function uu(e){return e=Wd(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var du=je.unstable_scheduleCallback,Sa=je.unstable_cancelCallback,Qd=je.unstable_shouldYield,Gd=je.unstable_requestPaint,G=je.unstable_now,Kd=je.unstable_getCurrentPriorityLevel,Eo=je.unstable_ImmediatePriority,fu=je.unstable_UserBlockingPriority,Xr=je.unstable_NormalPriority,Yd=je.unstable_LowPriority,pu=je.unstable_IdlePriority,ki=null,$e=null;function Jd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Zd,Xd=Math.log,qd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Xd(e)/qd|0)|0}var kr=64,jr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Mn(s):(l&=o,l!==0&&(r=Mn(l)))}else o=n&~i,o!==0?r=Mn(o):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Oe(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=ef(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function hu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,zo,vu,yu,xu,Ol=!1,Sr=[],st=null,ut=null,ct=null,Gn=new Map,Kn=new Map,rt=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Cn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=fr(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lf(e,t,n,r,i){switch(t){case"focusin":return st=Cn(st,e,t,n,r,i),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,i),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Gn.set(l,Cn(Gn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Kn.set(l,Cn(Kn.get(l)||null,e,t,n,r,i)),!0}return!1}function wu(e){var t=zt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,xu(e.priority,function(){vu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=fr(n),t!==null&&zo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ca(e,t,n){Ar(e)&&n.delete(t)}function of(){Ol=!1,st!==null&&Ar(st)&&(st=null),ut!==null&&Ar(ut)&&(ut=null),ct!==null&&Ar(ct)&&(ct=null),Gn.forEach(Ca),Kn.forEach(Ca)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,of)))}function Yn(e){function t(i){return En(i,e)}if(0<Sr.length){En(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&En(st,e),ut!==null&&En(ut,e),ct!==null&&En(ct,e),Gn.forEach(t),Kn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)wu(n),n.blockedOn===null&&rt.shift()}var on=qe.ReactCurrentBatchConfig,Zr=!0;function af(e,t,n,r){var i=O,l=on.transition;on.transition=null;try{O=1,_o(e,t,n,r)}finally{O=i,on.transition=l}}function sf(e,t,n,r){var i=O,l=on.transition;on.transition=null;try{O=4,_o(e,t,n,r)}finally{O=i,on.transition=l}}function _o(e,t,n,r){if(Zr){var i=Fl(e,t,n,r);if(i===null)il(e,t,r,ei,n),Na(e,r);else if(lf(i,e,t,n,r))r.stopPropagation();else if(Na(e,r),t&4&&-1<rf.indexOf(e)){for(;i!==null;){var l=fr(i);if(l!==null&&gu(l),l=Fl(e,t,n,r),l===null&&il(e,t,r,ei,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var ei=null;function Fl(e,t,n,r){if(ei=null,e=Co(r),e=zt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ei=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case Eo:return 1;case fu:return 4;case Xr:case Yd:return 16;case pu:return 536870912;default:return 16}default:return 16}}var lt=null,To=null,Dr=null;function ju(){if(Dr)return Dr;var e,t=To,n=t.length,r,i="value"in lt?lt.value:lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Ea(){return!1}function Ne(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:Ea,this.isPropagationStopped=Ea,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=Ne(yn),dr=H({},yn,{view:0,detail:0}),uf=Ne(dr),Yi,Ji,Pn,ji=H({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Yi=e.screenX-Pn.screenX,Ji=e.screenY-Pn.screenY):Ji=Yi=0,Pn=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Pa=Ne(ji),cf=H({},ji,{dataTransfer:0}),df=Ne(cf),ff=H({},dr,{relatedTarget:0}),Xi=Ne(ff),pf=H({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=Ne(pf),hf=H({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=Ne(hf),vf=H({},yn,{data:0}),za=Ne(vf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function Ro(){return kf}var jf=H({},dr,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=Ne(jf),Nf=H({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=Ne(Nf),Cf=H({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Ef=Ne(Cf),Pf=H({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ne(Pf),_f=H({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=Ne(_f),Lf=[9,13,27,32],Mo=Ke&&"CompositionEvent"in window,An=null;Ke&&"documentMode"in document&&(An=document.documentMode);var Rf=Ke&&"TextEvent"in window&&!An,Su=Ke&&(!Mo||An&&8<An&&11>=An),Ta=" ",La=!1;function Nu(e,t){switch(e){case"keyup":return Lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Mf(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(La=!0,Ta);case"textInput":return e=t.data,e===Ta&&La?null:e;default:return null}}function If(e,t){if(Qt)return e==="compositionend"||!Mo&&Nu(e,t)?(e=ju(),Dr=To=lt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var Of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Of[e.type]:t==="textarea"}function Eu(e,t,n,r){ru(r),t=ti(t,"onChange"),0<t.length&&(n=new Lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Jn=null;function Ff(e){Au(e,0)}function Si(e){var t=Yt(e);if(Js(t))return e}function Af(e,t){if(e==="change")return t}var Pu=!1;if(Ke){var qi;if(Ke){var Zi="oninput"in document;if(!Zi){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Zi=typeof Ma.oninput=="function"}qi=Zi}else qi=!1;Pu=qi&&(!document.documentMode||9<document.documentMode)}function Ia(){Dn&&(Dn.detachEvent("onpropertychange",zu),Jn=Dn=null)}function zu(e){if(e.propertyName==="value"&&Si(Jn)){var t=[];Eu(t,Jn,e,Co(e)),au(Ff,t)}}function Df(e,t,n){e==="focusin"?(Ia(),Dn=t,Jn=n,Dn.attachEvent("onpropertychange",zu)):e==="focusout"&&Ia()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Jn)}function Bf(e,t){if(e==="click")return Si(t)}function $f(e,t){if(e==="input"||e==="change")return Si(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:bf;function Xn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!Ae(e[i],t[i]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hf(e){var t=Tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_u(n.ownerDocument.documentElement,n)){if(r!==null&&Io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Fa(n,l);var o=Fa(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=Ke&&"documentMode"in document&&11>=document.documentMode,Gt=null,Al=null,Un=null,Dl=!1;function Aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Gt==null||Gt!==Kr(r)||(r=Gt,"selectionStart"in r&&Io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Xn(Un,r)||(Un=r,r=ti(Al,"onSelect"),0<r.length&&(t=new Lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},el={},Lu={};Ke&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Ni(e){if(el[e])return el[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lu)return el[e]=t[n];return e}var Ru=Ni("animationend"),Mu=Ni("animationiteration"),Iu=Ni("animationstart"),Ou=Ni("transitionend"),Fu=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Fu.set(e,t),Dt(t,[e])}for(var tl=0;tl<Da.length;tl++){var nl=Da[tl],Wf=nl.toLowerCase(),Qf=nl[0].toUpperCase()+nl.slice(1);xt(Wf,"on"+Qf)}xt(Ru,"onAnimationEnd");xt(Mu,"onAnimationIteration");xt(Iu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Ou,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function Ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vd(r,t,void 0,e),e.currentTarget=null}function Au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;Ua(i,s,c),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;Ua(i,s,c),l=u}}}if(Jr)throw e=Ml,Jr=!1,Ml=null,e}function A(e,t){var n=t[Hl];n===void 0&&(n=t[Hl]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Er]){e[Er]=!0,Ws.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,rl("selectionchange",!1,t))}}function Du(e,t,n,r){switch(ku(t)){case 1:var i=af;break;case 4:i=sf;break;default:i=_o}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function il(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=zt(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}au(function(){var c=l,g=Co(n),m=[];e:{var h=Fu.get(e);if(h!==void 0){var x=Lo,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":x=Sf;break;case"focusin":y="focus",x=Xi;break;case"focusout":y="blur",x=Xi;break;case"beforeblur":case"afterblur":x=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ef;break;case Ru:case Mu:case Iu:x=mf;break;case Ou:x=zf;break;case"scroll":x=uf;break;case"wheel":x=Tf;break;case"copy":case"cut":case"paste":x=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_a}var w=(t&4)!==0,N=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Qn(d,f),v!=null&&w.push(Zn(d,v,p)))),N)break;d=d.return}0<w.length&&(h=new x(h,y,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Tl&&(y=n.relatedTarget||n.fromElement)&&(zt(y)||y[Ye]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?zt(y):null,y!==null&&(N=Ut(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Pa,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=_a,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=x==null?h:Yt(x),p=y==null?h:Yt(y),h=new w(v,d+"leave",x,n,g),h.target=N,h.relatedTarget=p,v=null,zt(g)===c&&(w=new w(f,d+"enter",y,n,g),w.target=p,w.relatedTarget=N,v=w),N=v,x&&y)t:{for(w=x,f=y,d=0,p=w;p;p=bt(p))d++;for(p=0,v=f;v;v=bt(v))p++;for(;0<d-p;)w=bt(w),d--;for(;0<p-d;)f=bt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=bt(w),f=bt(f)}w=null}else w=null;x!==null&&Ba(m,h,x,w,!1),y!==null&&N!==null&&Ba(m,N,y,w,!0)}}e:{if(h=c?Yt(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=Af;else if(Ra(h))if(Pu)S=$f;else{S=Uf;var P=Df}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Bf);if(S&&(S=S(e,c))){Eu(m,S,n,g);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Cl(h,"number",h.value)}switch(P=c?Yt(c):window,e){case"focusin":(Ra(P)||P.contentEditable==="true")&&(Gt=P,Al=c,Un=null);break;case"focusout":Un=Al=Gt=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Aa(m,n,g);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":Aa(m,n,g)}var z;if(Mo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qt?Nu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Su&&n.locale!=="ko"&&(Qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qt&&(z=ju()):(lt=g,To="value"in lt?lt.value:lt.textContent,Qt=!0)),P=ti(c,_),0<P.length&&(_=new za(_,e,null,n,g),m.push({event:_,listeners:P}),z?_.data=z:(z=Cu(n),z!==null&&(_.data=z)))),(z=Rf?Mf(e,n):If(e,n))&&(c=ti(c,"onBeforeInput"),0<c.length&&(g=new za("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=z))}Au(m,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qn(e,n),l!=null&&r.unshift(Zn(e,l,i)),l=Qn(e,t),l!=null&&r.push(Zn(e,l,i))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Qn(n,l),u!=null&&o.unshift(Zn(n,u,s))):i||(u=Qn(n,l),u!=null&&o.push(Zn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kf=/\r\n?/g,Yf=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace(Kf,`
`).replace(Yf,"")}function Pr(e,t,n){if(t=$a(t),$a(e)!==t&&n)throw Error(k(425))}function ni(){}var Ul=null,Bl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,ba=typeof Promise=="function"?Promise:void 0,Xf=typeof queueMicrotask=="function"?queueMicrotask:typeof ba<"u"?function(e){return ba.resolve(null).then(e).catch(qf)}:bl;function qf(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Be="__reactFiber$"+xn,er="__reactProps$"+xn,Ye="__reactContainer$"+xn,Hl="__reactEvents$"+xn,Zf="__reactListeners$"+xn,ep="__reactHandles$"+xn;function zt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[Be])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Be]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ci(e){return e[er]||null}var Vl=[],Jt=-1;function wt(e){return{current:e}}function D(e){0>Jt||(e.current=Vl[Jt],Vl[Jt]=null,Jt--)}function F(e,t){Jt++,Vl[Jt]=e.current,e.current=t}var yt={},ae=wt(yt),he=wt(!1),Mt=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ri(){D(he),D(ae)}function Va(e,t,n){if(ae.current!==yt)throw Error(k(168));F(ae,t),F(he,n)}function Uu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Ad(e)||"Unknown",i));return H({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Mt=ae.current,F(ae,e),F(he,he.current),!0}function Wa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Uu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,D(he),D(ae),F(ae,e)):D(he),F(he,n)}var Ve=null,Ei=!1,ol=!1;function Bu(e){Ve===null?Ve=[e]:Ve.push(e)}function tp(e){Ei=!0,Bu(e)}function kt(){if(!ol&&Ve!==null){ol=!0;var e=0,t=O;try{var n=Ve;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Ei=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),du(Eo,kt),i}finally{O=t,ol=!1}}return null}var Xt=[],qt=0,li=null,oi=0,Ce=[],Ee=0,It=null,We=1,Qe="";function Ct(e,t){Xt[qt++]=oi,Xt[qt++]=li,li=e,oi=t}function $u(e,t,n){Ce[Ee++]=We,Ce[Ee++]=Qe,Ce[Ee++]=It,It=e;var r=We;e=Qe;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var l=32-Oe(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,We=1<<32-Oe(t)+i|n<<i|r,Qe=l+e}else We=1<<l|n<<i|r,Qe=e}function Oo(e){e.return!==null&&(Ct(e,1),$u(e,1,0))}function Fo(e){for(;e===li;)li=Xt[--qt],Xt[qt]=null,oi=Xt[--qt],Xt[qt]=null;for(;e===It;)It=Ce[--Ee],Ce[Ee]=null,Qe=Ce[--Ee],Ce[Ee]=null,We=Ce[--Ee],Ce[Ee]=null}var ke=null,we=null,U=!1,Ie=null;function bu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:We,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(U){var t=we;if(t){var n=t;if(!Qa(e,t)){if(Wl(e))throw Error(k(418));t=dt(n.nextSibling);var r=ke;t&&Qa(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(Wl(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function Ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function zr(e){if(e!==ke)return!1;if(!U)return Ga(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=we)){if(Wl(e))throw Hu(),Error(k(418));for(;t;)bu(e,t),t=dt(t.nextSibling)}if(Ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?dt(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=we;e;)e=dt(e.nextSibling)}function dn(){we=ke=null,U=!1}function Ao(e){Ie===null?Ie=[e]:Ie.push(e)}var np=qe.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ka(e){var t=e._init;return t(e._payload)}function Vu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=pl(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,v){var S=p.type;return S===Wt?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Ka(S)===d.type)?(v=i(d,p.props),v.ref=zn(f,d,p),v.return=f,v):(v=Qr(p.type,p.key,p.props,null,f.mode,v),v.ref=zn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ml(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,S){return d===null||d.tag!==7?(d=Rt(p,f.mode,v,S),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return p=Qr(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Vt:return d=ml(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return m(f,v(d._payload),p)}if(Rn(d)||Sn(d))return d=Rt(d,f.mode,p,null),d.return=f,d;_r(f,d)}return null}function h(f,d,p,v){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===S?u(f,d,p,v):null;case Vt:return p.key===S?c(f,d,p,v):null;case tt:return S=p._init,h(f,d,S(p._payload),v)}if(Rn(p)||Sn(p))return S!==null?null:g(f,d,p,v,null);_r(f,p)}return null}function x(f,d,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,S);case Vt:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,S);case tt:var P=v._init;return x(f,d,p,P(v._payload),S)}if(Rn(v)||Sn(v))return f=f.get(p)||null,g(d,f,v,S,null);_r(d,v)}return null}function y(f,d,p,v){for(var S=null,P=null,z=d,_=d=0,B=null;z!==null&&_<p.length;_++){z.index>_?(B=z,z=null):B=z.sibling;var L=h(f,z,p[_],v);if(L===null){z===null&&(z=B);break}e&&z&&L.alternate===null&&t(f,z),d=l(L,d,_),P===null?S=L:P.sibling=L,P=L,z=B}if(_===p.length)return n(f,z),U&&Ct(f,_),S;if(z===null){for(;_<p.length;_++)z=m(f,p[_],v),z!==null&&(d=l(z,d,_),P===null?S=z:P.sibling=z,P=z);return U&&Ct(f,_),S}for(z=r(f,z);_<p.length;_++)B=x(z,f,_,p[_],v),B!==null&&(e&&B.alternate!==null&&z.delete(B.key===null?_:B.key),d=l(B,d,_),P===null?S=B:P.sibling=B,P=B);return e&&z.forEach(function(ye){return t(f,ye)}),U&&Ct(f,_),S}function w(f,d,p,v){var S=Sn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var P=S=null,z=d,_=d=0,B=null,L=p.next();z!==null&&!L.done;_++,L=p.next()){z.index>_?(B=z,z=null):B=z.sibling;var ye=h(f,z,L.value,v);if(ye===null){z===null&&(z=B);break}e&&z&&ye.alternate===null&&t(f,z),d=l(ye,d,_),P===null?S=ye:P.sibling=ye,P=ye,z=B}if(L.done)return n(f,z),U&&Ct(f,_),S;if(z===null){for(;!L.done;_++,L=p.next())L=m(f,L.value,v),L!==null&&(d=l(L,d,_),P===null?S=L:P.sibling=L,P=L);return U&&Ct(f,_),S}for(z=r(f,z);!L.done;_++,L=p.next())L=x(z,f,_,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?_:L.key),d=l(L,d,_),P===null?S=L:P.sibling=L,P=L);return e&&z.forEach(function(kn){return t(f,kn)}),U&&Ct(f,_),S}function N(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var S=p.key,P=d;P!==null;){if(P.key===S){if(S=p.type,S===Wt){if(P.tag===7){n(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Ka(S)===P.type){n(f,P.sibling),d=i(P,p.props),d.ref=zn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Wt?(d=Rt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Qr(p.type,p.key,p.props,null,f.mode,v),v.ref=zn(f,d,p),v.return=f,f=v)}return o(f);case Vt:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ml(p,f.mode,v),d.return=f,f=d}return o(f);case tt:return P=p._init,N(f,d,P(p._payload),v)}if(Rn(p))return y(f,d,p,v);if(Sn(p))return w(f,d,p,v);_r(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=pl(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return N}var fn=Vu(!0),Wu=Vu(!1),ai=wt(null),si=null,Zt=null,Do=null;function Uo(){Do=Zt=si=null}function Bo(e){var t=ai.current;D(ai),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){si=e,Do=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(si===null)throw Error(k(308));Zt=e,si.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var _t=null;function $o(e){_t===null?_t=[e]:_t.push(e)}function Qu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$o(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,$o(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(l!==null){var m=i.baseState;o=0,g=c=u=null,s=l;do{var h=s.lane,x=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(h=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,m,h):y,h==null)break e;m=H({},m,h);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=x,u=m):g=g.next=x,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Ft|=o,e.lanes=o,e.memoizedState=m}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var pr={},be=wt(pr),tr=wt(pr),nr=wt(pr);function Tt(e){if(e===pr)throw Error(k(174));return e}function Ho(e,t){switch(F(nr,t),F(tr,e),F(be,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pl(t,e)}D(be),F(be,t)}function pn(){D(be),D(tr),D(nr)}function Ku(e){Tt(nr.current);var t=Tt(be.current),n=Pl(t,e.type);t!==n&&(F(tr,e),F(be,n))}function Vo(e){tr.current===e&&(D(be),D(tr))}var $=wt(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Wo(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var $r=qe.ReactCurrentDispatcher,sl=qe.ReactCurrentBatchConfig,Ot=0,b=null,Y=null,q=null,di=!1,Bn=!1,rr=0,rp=0;function ie(){throw Error(k(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,l){if(Ot=l,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?ap:sp,e=n(r,i),Bn){l=0;do{if(Bn=!1,rr=0,25<=l)throw Error(k(301));l+=1,q=Y=null,t.updateQueue=null,$r.current=up,e=n(r,i)}while(Bn)}if($r.current=fi,t=Y!==null&&Y.next!==null,Ot=0,q=Y=b=null,di=!1,t)throw Error(k(300));return e}function Ko(){var e=rr!==0;return rr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?b.memoizedState=q=e:q=q.next=e,q}function Te(){if(Y===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?b.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(k(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?b.memoizedState=q=e:q=q.next=e}return q}function ir(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,c=l;do{var g=c.lane;if((Ot&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,b.lanes|=g,Ft|=g}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=s,Ae(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,b.lanes|=l,Ft|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ae(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Yu(){}function Ju(e,t){var n=b,r=Te(),i=t(),l=!Ae(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,Yo(Zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,lr(9,qu.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(k(349));Ot&30||Xu(n,t,i)}return i}function Xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qu(e,t,n,r){t.value=n,t.getSnapshot=r,ec(t)&&tc(e)}function Zu(e,t,n){return n(function(){ec(t)&&tc(e)})}function ec(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function tc(e){var t=Je(e,1);t!==null&&Fe(t,e,1,-1)}function Xa(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,b,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nc(){return Te().memoizedState}function br(e,t,n,r){var i=Ue();b.flags|=e,i.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&Qo(r,o.deps)){i.memoizedState=lr(t,n,l,r);return}}b.flags|=e,i.memoizedState=lr(1|t,n,l,r)}function qa(e,t){return br(8390656,8,e,t)}function Yo(e,t){return Pi(2048,8,e,t)}function rc(e,t){return Pi(4,2,e,t)}function ic(e,t){return Pi(4,4,e,t)}function lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function oc(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,lc.bind(null,t,e),n)}function Jo(){}function ac(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uc(e,t,n){return Ot&21?(Ae(n,t)||(n=mu(),b.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function ip(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{O=n,sl.transition=r}}function cc(){return Te().memoizedState}function lp(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(t,n);else if(n=Qu(e,t,n,r),n!==null){var i=ce();Fe(n,e,r,i),pc(n,t,r)}}function op(e,t,n){var r=mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ae(s,o)){var u=t.interleaved;u===null?(i.next=i,$o(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Qu(e,t,i,r),n!==null&&(i=ce(),Fe(n,e,r,i),pc(n,t,r))}}function dc(e){var t=e.alternate;return e===b||t!==null&&t===b}function fc(e,t){Bn=di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var fi={readContext:_e,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},ap={readContext:_e,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lp.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Jo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=ip.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=Ue();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Z===null)throw Error(k(349));Ot&30||Xu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,qa(Zu.bind(null,r,l,e),[e]),r.flags|=2048,lr(9,qu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=Z.identifierPrefix;if(U){var n=Qe,r=We;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sp={readContext:_e,useCallback:ac,useContext:_e,useEffect:Yo,useImperativeHandle:oc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:sc,useReducer:ul,useRef:nc,useState:function(){return ul(ir)},useDebugValue:Jo,useDeferredValue:function(e){var t=Te();return uc(t,Y.memoizedState,e)},useTransition:function(){var e=ul(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Ju,useId:cc,unstable_isNewReconciler:!1},up={readContext:_e,useCallback:ac,useContext:_e,useEffect:Yo,useImperativeHandle:oc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:sc,useReducer:cl,useRef:nc,useState:function(){return cl(ir)},useDebugValue:Jo,useDeferredValue:function(e){var t=Te();return Y===null?t.memoizedState=e:uc(t,Y.memoizedState,e)},useTransition:function(){var e=cl(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Ju,useId:cc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),l=Ge(r,i);l.payload=t,n!=null&&(l.callback=n),t=ft(e,l,i),t!==null&&(Fe(t,e,i,r),Br(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),l=Ge(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ft(e,l,i),t!==null&&(Fe(t,e,i,r),Br(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Fe(t,e,r,n),Br(t,e,r))}};function Za(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(i,l):!0}function mc(e,t,n){var r=!1,i=yt,l=t.contextType;return typeof l=="object"&&l!==null?l=_e(l):(i=ge(t)?Mt:ae.current,r=t.contextTypes,l=(r=r!=null)?cn(e,i):yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=_e(l):(l=ge(t)?Mt:ae.current,i.context=cn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Kl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zi.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Fd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function hc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,oo=r),Jl(e,t)},n}function gc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ts(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var dp=qe.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?Wu(t,null,n,r):fn(t,e.child,n,r)}function is(e,t,n,r,i){n=n.render;var l=t.ref;return an(t,i),r=Go(e,t,n,r,l,i),n=Ko(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&n&&Oo(t),t.flags|=1,ue(e,t,r,i),t.child)}function ls(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ia(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vc(e,t,l,r,i)):(e=Qr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(o,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ht(l,r),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Xn(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Xl(e,t,n,r,i)}function yc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(tn,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(tn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,F(tn,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,F(tn,xe),xe|=r;return ue(e,t,i,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,r,i){var l=ge(n)?Mt:ae.current;return l=cn(t,l),an(t,i),n=Go(e,t,n,r,l,i),r=Ko(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&r&&Oo(t),t.flags|=1,ue(e,t,n,i),t.child)}function os(e,t,n,r,i){if(ge(n)){var l=!0;ii(t)}else l=!1;if(an(t,i),t.stateNode===null)Hr(e,t),mc(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Mt:ae.current,c=cn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&es(t,o,r,c),nt=!1;var h=t.memoizedState;o.state=h,ui(t,r,o,i),u=t.memoizedState,s!==r||h!==u||he.current||nt?(typeof g=="function"&&(Kl(t,n,g,r),u=t.memoizedState),(s=nt||Za(t,n,s,r,h,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),o.props=c,m=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Mt:ae.current,u=cn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||h!==u)&&es(t,o,r,u),nt=!1,h=t.memoizedState,o.state=h,ui(t,r,o,i);var y=t.memoizedState;s!==m||h!==y||he.current||nt?(typeof x=="function"&&(Kl(t,n,x,r),y=t.memoizedState),(c=nt||Za(t,n,c,r,h,y,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ql(e,t,n,r,l,i)}function ql(e,t,n,r,i,l){xc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Wa(t,n,!1),Xe(e,t,l);r=t.stateNode,dp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fn(t,e.child,null,l),t.child=fn(t,null,s,l)):ue(e,t,s,l),t.memoizedState=r.state,i&&Wa(t,n,!0),t.child}function wc(e){var t=e.stateNode;t.pendingContext?Va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Va(e,t.context,!1),Ho(e,t.containerInfo)}function as(e,t,n,r,i){return dn(),Ao(i),t.flags|=256,ue(e,t,n,r),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,t,n){var r=t.pendingProps,i=$.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F($,i&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Li(o,r,0,null),e=Rt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=eo(n),t.memoizedState=Zl,e):Xo(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return fp(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=ht(s,l):(l=Rt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Zl,r}return l=e.child,e=l.sibling,r=ht(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xo(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Ao(r),fn(t,e.child,null,n),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(k(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Li({mode:"visible",children:r.children},i,0,null),l=Rt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&fn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=Zl,l);if(!(t.mode&1))return Tr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=dl(l,r,void 0),Tr(e,t,o,r)}if(s=(o&e.childLanes)!==0,me||s){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),Fe(r,e,i,-1))}return ra(),r=dl(Error(k(421))),Tr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,we=dt(i.nextSibling),ke=t,U=!0,Ie=null,e!==null&&(Ce[Ee++]=We,Ce[Ee++]=Qe,Ce[Ee++]=It,We=e.id,Qe=e.overflow,It=t),t=Xo(t,r.children),t.flags|=4096,t)}function ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function fl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,n,t);else if(e.tag===19)ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ci(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,l);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t,n){switch(t.tag){case 3:wc(t),dn();break;case 5:Ku(t);break;case 1:ge(t.type)&&ii(t);break;case 4:Ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(ai,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):n&t.child.childLanes?kc(e,t,n):(F($,$.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,yc(e,t,n)}return Xe(e,t,n)}var Sc,to,Nc,Cc;Sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};Nc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tt(be.current);var l=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=El(e,i),r=El(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}zl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mp(e,t,n){var r=t.pendingProps;switch(Fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&ri(),le(t),null;case 3:return r=t.stateNode,pn(),D(he),D(ae),Wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(uo(Ie),Ie=null))),to(e,t),le(t),null;case 5:Vo(t);var i=Tt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Tt(be.current),zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Be]=t,r[er]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<In.length;i++)A(In[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":va(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":xa(r,l),A("invalid",r)}zl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),i=["children",""+s]):Vn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":xr(r),ya(r,l,!0);break;case"textarea":xr(r),wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ni)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[er]=r,Sc(e,t,!1,!1),t.stateNode=e;e:{switch(o=_l(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<In.length;i++)A(In[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":va(e,r),i=Sl(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":xa(e,r),i=El(e,r),A("invalid",e);break;default:i=r}zl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?nu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&eu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wn(e,u):typeof u=="number"&&Wn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&A("scroll",e):u!=null&&ko(e,l,u,o))}switch(n){case"input":xr(e),ya(e,r,!1);break;case"textarea":xr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(nr.current),Tt(be.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return le(t),null;case 13:if(D($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Hu(),dn(),t.flags|=98560,l=!1;else if(l=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Be]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Ie!==null&&(uo(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?J===0&&(J=3):ra())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return pn(),to(e,t),e===null&&qn(t.stateNode.containerInfo),le(t),null;case 10:return Bo(t.type._context),le(t),null;case 17:return ge(t.type)&&ri(),le(t),null;case 19:if(D($),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)_n(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ci(e),o!==null){for(t.flags|=128,_n(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F($,$.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>hn&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304)}else{if(!r)if(e=ci(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*G()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=$.current,F($,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return na(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function hp(e,t){switch(Fo(t),t.tag){case 1:return ge(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),D(he),D(ae),Wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vo(t),null;case 13:if(D($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D($),null;case 4:return pn(),null;case 10:return Bo(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var Lr=!1,oe=!1,gp=typeof WeakSet=="function"?WeakSet:Set,C=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){V(e,t,r)}}var us=!1;function vp(e,t){if(Ul=Zr,e=Tu(),Io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(s=o+i),m!==l||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++c===i&&(s=o),h===l&&++g===r&&(u=o),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},Zr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=us,us=!1,y}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&no(t,n,l)}i=i.next}while(i!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[er],delete t[Hl],delete t[Zf],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var te=null,Me=!1;function Ze(e,t,n){for(n=n.child;n!==null;)zc(e,t,n),n=n.sibling}function zc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:oe||en(n,t);case 6:var r=te,i=Me;te=null,Ze(e,t,n),te=r,Me=i,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),Yn(e)):ll(te,n.stateNode));break;case 4:r=te,i=Me,te=n.stateNode.containerInfo,Me=!0,Ze(e,t,n),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&no(n,t,o),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!oe&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ze(e,t,n),oe=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(r){var i=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Me=!1;break e;case 3:te=s.stateNode.containerInfo,Me=!0;break e;case 4:te=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(te===null)throw Error(k(160));zc(l,o,i),te=null,Me=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){V(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_c(t,e),t=t.sibling}function _c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{$n(3,e,e.return),_i(3,e)}catch(w){V(e,e.return,w)}try{$n(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Wn(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Xs(i,l),_l(s,o);var c=_l(s,l);for(o=0;o<u.length;o+=2){var g=u[o],m=u[o+1];g==="style"?nu(i,m):g==="dangerouslySetInnerHTML"?eu(i,m):g==="children"?Wn(i,m):ko(i,g,m,c)}switch(s){case"input":Nl(i,l);break;case"textarea":qs(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?nn(i,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?nn(i,!!l.multiple,l.defaultValue,!0):nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[er]=l}catch(w){V(e,e.return,w)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){V(e,e.return,w)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ea=G())),r&4&&ds(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Le(t,e),oe=c):Le(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(m=C=g;C!==null;){switch(h=C,x=h.child,h.tag){case 0:case 11:case 14:case 15:$n(4,h,h.return);break;case 1:en(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:en(h,h.return);break;case 22:if(h.memoizedState!==null){ps(m);continue}}x!==null?(x.return=h,C=x):ps(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=tu("display",o))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),De(e),r&4&&ds(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wn(i,""),r.flags&=-33);var l=cs(e);lo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=cs(e);io(e,s,o);break;default:throw Error(k(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,n){C=e,Tc(e)}function Tc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||oe;s=Lr;var c=oe;if(Lr=o,(oe=u)&&!c)for(C=i;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?ms(i):u!==null?(u.return=o,C=u):ms(i);for(;l!==null;)C=l,Tc(l),l=l.sibling;C=i,Lr=s,oe=c}fs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):fs(e)}}function fs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ja(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Yn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&ro(t)}catch(h){V(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ps(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ms(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){V(t,i,u)}}var l=t.return;try{ro(t)}catch(u){V(t,l,u)}break;case 5:var o=t.return;try{ro(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var xp=Math.ceil,pi=qe.ReactCurrentDispatcher,qo=qe.ReactCurrentOwner,ze=qe.ReactCurrentBatchConfig,I=0,Z=null,K=null,ne=0,xe=0,tn=wt(0),J=0,or=null,Ft=0,Ti=0,Zo=0,bn=null,pe=null,ea=0,hn=1/0,He=null,mi=!1,oo=null,pt=null,Rr=!1,ot=null,hi=0,Hn=0,ao=null,Vr=-1,Wr=0;function ce(){return I&6?G():Vr!==-1?Vr:Vr=G()}function mt(e){return e.mode&1?I&2&&ne!==0?ne&-ne:np.transition!==null?(Wr===0&&(Wr=mu()),Wr):(e=O,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function Fe(e,t,n,r){if(50<Hn)throw Hn=0,ao=null,Error(k(185));cr(e,n,r),(!(I&2)||e!==Z)&&(e===Z&&(!(I&2)&&(Ti|=n),J===4&&it(e,ne)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(hn=G()+500,Ei&&kt()))}function ve(e,t){var n=e.callbackNode;tf(e,t);var r=qr(e,e===Z?ne:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?tp(hs.bind(null,e)):Bu(hs.bind(null,e)),Xf(function(){!(I&6)&&kt()}),n=null;else{switch(hu(r)){case 1:n=Eo;break;case 4:n=fu;break;case 16:n=Xr;break;case 536870912:n=pu;break;default:n=Xr}n=Dc(n,Lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lc(e,t){if(Vr=-1,Wr=0,I&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=qr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gi(e,r);else{t=r;var i=I;I|=2;var l=Mc();(Z!==e||ne!==t)&&(He=null,hn=G()+500,Lt(e,t));do try{jp();break}catch(s){Rc(e,s)}while(!0);Uo(),pi.current=l,I=i,K!==null?t=0:(Z=null,ne=0,t=J)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(r=i,t=so(e,i))),t===1)throw n=or,Lt(e,0),it(e,r),ve(e,G()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!wp(i)&&(t=gi(e,r),t===2&&(l=Il(e),l!==0&&(r=l,t=so(e,l))),t===1))throw n=or,Lt(e,0),it(e,r),ve(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,pe,He);break;case 3:if(it(e,r),(r&130023424)===r&&(t=ea+500-G(),10<t)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bl(Et.bind(null,e,pe,He),t);break}Et(e,pe,He);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Oe(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xp(r/1960))-r,10<r){e.timeoutHandle=bl(Et.bind(null,e,pe,He),r);break}Et(e,pe,He);break;case 5:Et(e,pe,He);break;default:throw Error(k(329))}}}return ve(e,G()),e.callbackNode===n?Lc.bind(null,e):null}function so(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=gi(e,t),e!==2&&(t=pe,pe=n,t!==null&&uo(t)),e}function uo(e){pe===null?pe=e:pe.push.apply(pe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ae(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Zo,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function hs(e){if(I&6)throw Error(k(327));sn();var t=qr(e,0);if(!(t&1))return ve(e,G()),null;var n=gi(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=so(e,r))}if(n===1)throw n=or,Lt(e,0),it(e,t),ve(e,G()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,pe,He),ve(e,G()),null}function ta(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(hn=G()+500,Ei&&kt())}}function At(e){ot!==null&&ot.tag===0&&!(I&6)&&sn();var t=I;I|=1;var n=ze.transition,r=O;try{if(ze.transition=null,O=1,e)return e()}finally{O=r,ze.transition=n,I=t,!(I&6)&&kt()}}function na(){xe=tn.current,D(tn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:pn(),D(he),D(ae),Wo();break;case 5:Vo(r);break;case 4:pn();break;case 13:D($);break;case 19:D($);break;case 10:Bo(r.type._context);break;case 22:case 23:na()}n=n.return}if(Z=e,K=e=ht(e.current,null),ne=xe=t,J=0,or=null,Zo=Ti=Ft=0,pe=bn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}_t=null}return e}function Rc(e,t){do{var n=K;try{if(Uo(),$r.current=fi,di){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}di=!1}if(Ot=0,q=Y=b=null,Bn=!1,rr=0,qo.current=null,n===null||n.return===null){J=1,or=t,K=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=ns(o);if(x!==null){x.flags&=-257,rs(x,o,s,l,t),x.mode&1&&ts(l,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){ts(l,c,t),ra();break e}u=Error(k(426))}}else if(U&&s.mode&1){var N=ns(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),rs(N,o,s,l,t),Ao(mn(u,s));break e}}l=u=mn(u,s),J!==4&&(J=2),bn===null?bn=[l]:bn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=hc(l,u,t);Ya(l,f);break e;case 1:s=u;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=gc(l,s,t);Ya(l,v);break e}}l=l.return}while(l!==null)}Oc(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Mc(){var e=pi.current;return pi.current=fi,e===null?fi:e}function ra(){(J===0||J===3||J===2)&&(J=4),Z===null||!(Ft&268435455)&&!(Ti&268435455)||it(Z,ne)}function gi(e,t){var n=I;I|=2;var r=Mc();(Z!==e||ne!==t)&&(He=null,Lt(e,t));do try{kp();break}catch(i){Rc(e,i)}while(!0);if(Uo(),I=n,pi.current=r,K!==null)throw Error(k(261));return Z=null,ne=0,J}function kp(){for(;K!==null;)Ic(K)}function jp(){for(;K!==null&&!Qd();)Ic(K)}function Ic(e){var t=Ac(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Oc(e):K=t,qo.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(n=mp(n,t,xe),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function Et(e,t,n){var r=O,i=ze.transition;try{ze.transition=null,O=1,Sp(e,t,n,r)}finally{ze.transition=i,O=r}return null}function Sp(e,t,n,r){do sn();while(ot!==null);if(I&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nf(e,l),e===Z&&(K=Z=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Dc(Xr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var o=O;O=1;var s=I;I|=4,qo.current=null,vp(e,n),_c(n,e),Hf(Bl),Zr=!!Ul,Bl=Ul=null,e.current=n,yp(n),Gd(),I=s,O=o,ze.transition=l}else e.current=n;if(Rr&&(Rr=!1,ot=e,hi=i),l=e.pendingLanes,l===0&&(pt=null),Jd(n.stateNode),ve(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mi)throw mi=!1,e=oo,oo=null,e;return hi&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===ao?Hn++:(Hn=0,ao=e):Hn=0,kt(),null}function sn(){if(ot!==null){var e=hu(hi),t=ze.transition,n=O;try{if(ze.transition=null,O=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,hi=0,I&6)throw Error(k(331));var i=I;for(I|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:$n(8,g,l)}var m=g.child;if(m!==null)m.return=g,C=m;else for(;C!==null;){g=C;var h=g.sibling,x=g.return;if(Ec(g),g===c){C=null;break}if(h!==null){h.return=x,C=h;break}C=x}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$n(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_i(9,s)}}catch(S){V(s,s.return,S)}if(s===o){C=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,C=v;break e}C=s.return}}if(I=i,kt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{O=n,ze.transition=t}}return!1}function gs(e,t,n){t=mn(n,t),t=hc(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(cr(e,1,t),ve(e,t))}function V(e,t,n){if(e.tag===3)gs(e,e,n);else for(;t!==null;){if(t.tag===3){gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=mn(n,e),e=gc(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(cr(t,1,e),ve(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-ea?Lt(e,0):Zo|=n),ve(e,t)}function Fc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(cr(e,t,n),ve(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fc(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Fc(e,n)}var Ac;Ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,pp(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&$u(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var i=cn(t,ae.current);an(t,n),i=Go(null,t,r,e,i,n);var l=Ko();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,ii(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bo(t),i.updater=zi,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=ql(null,t,r,!0,l,n)):(t.tag=0,U&&l&&Oo(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zp(r),e=Re(r,e),i){case 0:t=Xl(null,t,r,e,n);break e;case 1:t=os(null,t,r,e,n);break e;case 11:t=is(null,t,r,e,n);break e;case 14:t=ls(null,t,r,Re(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),os(e,t,r,i,n);case 3:e:{if(wc(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Gu(e,t),ui(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=mn(Error(k(423)),t),t=as(e,t,r,n,i);break e}else if(r!==i){i=mn(Error(k(424)),t),t=as(e,t,r,n,i);break e}else for(we=dt(t.stateNode.containerInfo.firstChild),ke=t,U=!0,Ie=null,n=Wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=Xe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Ku(t),e===null&&Ql(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,$l(r,i)?o=null:l!==null&&$l(r,l)&&(t.flags|=32),xc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Ql(t),null;case 13:return kc(e,t,n);case 4:return Ho(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),is(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,F(ai,r._currentValue),r._currentValue=o,l!==null)if(Ae(l.value,o)){if(l.children===i.children&&!he.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ge(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Gl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=_e(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Re(r,t.pendingProps),i=Re(r.type,i),ls(e,t,r,i,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Hr(e,t),t.tag=1,ge(r)?(e=!0,ii(t)):e=!1,an(t,n),mc(t,r,i),Yl(t,r,i,n),ql(null,t,r,!0,e,n);case 19:return jc(e,t,n);case 22:return yc(e,t,n)}throw Error(k(156,t.tag))};function Dc(e,t){return du(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Pp(e,t,n,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===So)return 11;if(e===No)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")ia(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Rt(n.children,i,l,t);case jo:o=8,i|=8;break;case xl:return e=Pe(12,n,t,i|2),e.elementType=xl,e.lanes=l,e;case wl:return e=Pe(13,n,t,i),e.elementType=wl,e.lanes=l,e;case kl:return e=Pe(19,n,t,i),e.elementType=kl,e.lanes=l,e;case Ks:return Li(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qs:o=10;break e;case Gs:o=9;break e;case So:o=11;break e;case No:o=14;break e;case tt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Rt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Li(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Ks,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,i,l,o,s,u){return e=new _p(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Pe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bo(l),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uc(e){if(!e)return yt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return Uu(e,n,t)}return t}function Bc(e,t,n,r,i,l,o,s,u){return e=la(n,r,!0,e,i,l,o,s,u),e.context=Uc(null),n=e.current,r=ce(),i=mt(n),l=Ge(r,i),l.callback=t??null,ft(n,l,i),e.current.lanes=i,cr(e,i,r),ve(e,r),e}function Ri(e,t,n,r){var i=t.current,l=ce(),o=mt(i);return n=Uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,o),e!==null&&(Fe(e,i,o,l),Br(e,i,o)),o}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){vs(e,t),(e=e.alternate)&&vs(e,t)}function Lp(){return null}var $c=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}Mi.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ri(e,t,null,null)};Mi.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){Ri(null,e,null,null)}),t[Ye]=null}};function Mi(e){this._internalRoot=e}Mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=yu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&wu(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function Rp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=vi(o);l.call(c)}}var o=Bc(t,r,e,0,null,!1,!1,"",ys);return e._reactRootContainer=o,e[Ye]=o.current,qn(e.nodeType===8?e.parentNode:e),At(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=vi(u);s.call(c)}}var u=la(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=u,e[Ye]=u.current,qn(e.nodeType===8?e.parentNode:e),At(function(){Ri(t,u,n,r)}),u}function Oi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=vi(o);s.call(u)}}Ri(t,o,e,i)}else o=Rp(n,t,e,i,r);return vi(o)}gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Po(t,n|1),ve(t,G()),!(I&6)&&(hn=G()+500,kt()))}break;case 13:At(function(){var r=Je(e,1);if(r!==null){var i=ce();Fe(r,e,1,i)}}),oa(e,1)}};zo=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}oa(e,134217728)}};vu=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}oa(e,t)}};yu=function(){return O};xu=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Ll=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(k(90));Js(r),Nl(r,i)}}}break;case"textarea":qs(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};lu=ta;ou=At;var Mp={usingClientEntryPoint:!1,Events:[fr,Yt,Ci,ru,iu,ta]},Tn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ki=Mr.inject(Ip),$e=Mr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(k(200));return Tp(e,t,null,n)};Se.createRoot=function(e,t){if(!sa(e))throw Error(k(299));var n=!1,r="",i=$c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,qn(e.nodeType===8?e.parentNode:e),new aa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return At(e)};Se.hydrate=function(e,t,n){if(!Ii(t))throw Error(k(200));return Oi(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=$c;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bc(t,null,e,1,n??null,i,!1,l,o),e[Ye]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mi(t)};Se.render=function(e,t,n){if(!Ii(t))throw Error(k(200));return Oi(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(k(40));return e._reactRootContainer?(At(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=ta;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Oi(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),bs.exports=Se;var Op=bs.exports,xs=Op;vl.createRoot=xs.createRoot,vl.hydrateRoot=xs.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(null,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const ws="popstate";function Fp(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return co("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yi(i)}return Dp(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ua(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ap(){return Math.random().toString(36).substr(2,8)}function ks(e,t){return{usr:e.state,key:e.key,idx:t}}function co(e,t,n,r){return n===void 0&&(n=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wn(t):t,{state:n,key:t&&t.key||r||Ap()})}function yi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=at.Pop,u=null,c=g();c==null&&(c=0,o.replaceState(ar({},o.state,{idx:c}),""));function g(){return(o.state||{idx:null}).idx}function m(){s=at.Pop;let N=g(),f=N==null?null:N-c;c=N,u&&u({action:s,location:w.location,delta:f})}function h(N,f){s=at.Push;let d=co(w.location,N,f);c=g()+1;let p=ks(d,c),v=w.createHref(d);try{o.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}l&&u&&u({action:s,location:w.location,delta:1})}function x(N,f){s=at.Replace;let d=co(w.location,N,f);c=g();let p=ks(d,c),v=w.createHref(d);o.replaceState(p,"",v),l&&u&&u({action:s,location:w.location,delta:0})}function y(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:yi(N);return d=d.replace(/ $/,"%20"),W(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ws,m),u=N,()=>{i.removeEventListener(ws,m),u=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let f=y(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:x,go(N){return o.go(N)}};return w}var js;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(js||(js={}));function Up(e,t,n){return n===void 0&&(n="/"),Bp(e,t,n)}function Bp(e,t,n,r){let i=typeof t=="string"?wn(t):t,l=gn(i.pathname||"/",n);if(l==null)return null;let o=Hc(e);$p(o);let s=null,u=qp(l);for(let c=0;s==null&&c<o.length;++c)s=Jp(o[c],u);return s}function Hc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let u={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};u.relativePath.startsWith("/")&&(W(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(W(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hc(l.children,t,g,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Kp(c,l.index),routesMeta:g})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let u of Vc(l.path))i(l,o,u)}),t}function Vc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Vc(r.join("/")),s=[];return s.push(...o.map(u=>u===""?l:[l,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function $p(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bp=/^:[\w-]+$/,Hp=3,Vp=2,Wp=1,Qp=10,Gp=-2,Ss=e=>e==="*";function Kp(e,t){let n=e.split("/"),r=n.length;return n.some(Ss)&&(r+=Gp),t&&(r+=Vp),n.filter(i=>!Ss(i)).reduce((i,l)=>i+(bp.test(l)?Hp:l===""?Wp:Qp),r)}function Yp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Jp(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",m=fo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),h=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:gt([l,m.pathname]),pathnameBase:rm(gt([l,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(l=gt([l,m.pathnameBase]))}return o}function fo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:h,isOptional:x}=g;if(h==="*"){let w=s[m]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[m];return x&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function Xp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ua(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function qp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ua(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,em=e=>Zp.test(e);function tm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wn(e):e,l;if(n)if(em(n))l=n;else{if(n.includes("//")){let o=n;n=Gc(n),ua(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Ns(n.substring(1),"/"):l=Ns(n,t)}else l=t;return{pathname:l,search:im(r),hash:lm(i)}}function Ns(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wc(e,t){let n=nm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wn(e):(i=ar({},e),W(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),W(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),W(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}s=m>=0?t[m]:"/"}let u=tm(i,s),c=o&&o!=="/"&&o.endsWith("/"),g=(l||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Gc=e=>e.replace(/\/\/+/g,"/"),gt=e=>Gc(e.join("/")),rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kc=["post","put","patch","delete"];new Set(Kc);const am=["get",...Kc];new Set(am);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(null,arguments)}const Fi=j.createContext(null),Yc=j.createContext(null),jt=j.createContext(null),Ai=j.createContext(null),Bt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Jc=j.createContext(null);function sm(e,t){let{relative:n}=t===void 0?{}:t;mr()||W(!1);let{basename:r,navigator:i}=j.useContext(jt),{hash:l,pathname:o,search:s}=Di(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:gt([r,o])),i.createHref({pathname:u,search:s,hash:l})}function mr(){return j.useContext(Ai)!=null}function $t(){return mr()||W(!1),j.useContext(Ai).location}function Xc(e){j.useContext(jt).static||j.useLayoutEffect(e)}function um(){let{isDataRoute:e}=j.useContext(Bt);return e?jm():cm()}function cm(){mr()||W(!1);let e=j.useContext(Fi),{basename:t,future:n,navigator:r}=j.useContext(jt),{matches:i}=j.useContext(Bt),{pathname:l}=$t(),o=JSON.stringify(Wc(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return Xc(()=>{s.current=!0}),j.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=Qc(c,JSON.parse(o),l,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gt([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,o,l,e])}function Di(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(jt),{matches:i}=j.useContext(Bt),{pathname:l}=$t(),o=JSON.stringify(Wc(i,r.v7_relativeSplatPath));return j.useMemo(()=>Qc(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function dm(e,t){return fm(e,t)}function fm(e,t,n,r){mr()||W(!1);let{navigator:i}=j.useContext(jt),{matches:l}=j.useContext(Bt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$t(),g;if(t){var m;let N=typeof t=="string"?wn(t):t;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||W(!1),g=N}else g=c;let h=g.pathname||"/",x=h;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=Up(e,{pathname:x}),w=vm(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:gt([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:gt([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,n,r);return t&&w?j.createElement(Ai.Provider,{value:{location:sr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:at.Pop}},w):w}function pm(){let e=km(),t=om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const mm=j.createElement(pm,null);class hm extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Bt.Provider,{value:this.props.routeContext},j.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gm(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Fi);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Bt.Provider,{value:t},r)}function vm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);g>=0||W(!1),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let m=o[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:x}=n,y=m.route.loader&&h[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((g,m,h)=>{let x,y=!1,w=null,N=null;n&&(x=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||mm,u&&(c<0&&h===0?(Sm("route-fallback"),y=!0,N=null):c===h&&(y=!0,N=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),d=()=>{let p;return x?p=w:y?p=N:m.route.Component?p=j.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,j.createElement(gm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?j.createElement(hm,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var qc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qc||{}),Zc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zc||{});function ym(e){let t=j.useContext(Fi);return t||W(!1),t}function xm(e){let t=j.useContext(Yc);return t||W(!1),t}function wm(e){let t=j.useContext(Bt);return t||W(!1),t}function ed(e){let t=wm(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function km(){var e;let t=j.useContext(Jc),n=xm(),r=ed();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jm(){let{router:e}=ym(qc.UseNavigateStable),t=ed(Zc.UseNavigateStable),n=j.useRef(!1);return Xc(()=>{n.current=!0}),j.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sr({fromRouteId:t},l)))},[e,t])}const Cs={};function Sm(e,t,n){Cs[e]||(Cs[e]=!0)}function Nm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ht(e){W(!1)}function Cm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=at.Pop,navigator:l,static:o=!1,future:s}=e;mr()&&W(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:l,static:o,future:sr({v7_relativeSplatPath:!1},s)}),[u,s,l,o]);typeof r=="string"&&(r=wn(r));let{pathname:g="/",search:m="",hash:h="",state:x=null,key:y="default"}=r,w=j.useMemo(()=>{let N=gn(g,u);return N==null?null:{location:{pathname:N,search:m,hash:h,state:x,key:y},navigationType:i}},[u,g,m,h,x,y,i]);return w==null?null:j.createElement(jt.Provider,{value:c},j.createElement(Ai.Provider,{children:n,value:w}))}function Em(e){let{children:t,location:n}=e;return dm(po(t),n)}new Promise(()=>{});function po(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let l=[...t,i];if(r.type===j.Fragment){n.push.apply(n,po(r.props.children,l));return}r.type!==Ht&&W(!1),!r.props.index||!r.props.children||W(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=po(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(null,arguments)}function td(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Pm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zm(e,t){return e.button===0&&(!t||t==="_self")&&!Pm(e)}const _m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Tm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Lm="6";try{window.__reactRouterVersion=Lm}catch{}const Rm=j.createContext({isTransitioning:!1}),Mm="startTransition",Es=Sd[Mm];function Im(e){let{basename:t,children:n,future:r,window:i}=e,l=j.useRef();l.current==null&&(l.current=Fp({window:i,v5Compat:!0}));let o=l.current,[s,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},g=j.useCallback(m=>{c&&Es?Es(()=>u(m)):u(m)},[u,c]);return j.useLayoutEffect(()=>o.listen(g),[o,g]),j.useEffect(()=>Nm(r),[r]),j.createElement(Cm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gr=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:u,to:c,preventScrollReset:g,viewTransition:m}=t,h=td(t,_m),{basename:x}=j.useContext(jt),y,w=!1;if(typeof c=="string"&&Fm.test(c)&&(y=c,Om))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=gn(v.pathname,x);v.origin===p.origin&&S!=null?c=S+v.search+v.hash:w=!0}catch{}let N=sm(c,{relative:i}),f=Dm(c,{replace:o,state:s,target:u,preventScrollReset:g,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return j.createElement("a",xi({},h,{href:y||N,onClick:w||l?r:d,ref:n,target:u}))}),se=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:o=!1,style:s,to:u,viewTransition:c,children:g}=t,m=td(t,Tm),h=Di(u,{relative:m.relative}),x=$t(),y=j.useContext(Yc),{navigator:w,basename:N}=j.useContext(jt),f=y!=null&&Um(h)&&c===!0,d=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,p=x.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&N&&(v=gn(v,N)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=p===d||!o&&p.startsWith(d)&&p.charAt(S)==="/",z=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),_={isActive:P,isPending:z,isTransitioning:f},B=P?r:void 0,L;typeof l=="function"?L=l(_):L=[l,P?"active":null,z?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ye=typeof s=="function"?s(_):s;return j.createElement(Gr,xi({},m,{"aria-current":B,className:L,ref:n,style:ye,to:u,viewTransition:c}),typeof g=="function"?g(_):g)});var mo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mo||(mo={}));var Ps;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ps||(Ps={}));function Am(e){let t=j.useContext(Fi);return t||W(!1),t}function Dm(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,u=um(),c=$t(),g=Di(e,{relative:o});return j.useCallback(m=>{if(zm(m,n)){m.preventDefault();let h=r!==void 0?r:yi(c)===yi(g);u(e,{replace:h,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[c,u,g,r,i,n,e,l,o,s])}function Um(e,t){t===void 0&&(t={});let n=j.useContext(Rm);n==null&&W(!1);let{basename:r}=Am(mo.useViewTransitionState),i=Di(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fo(i.pathname,o)!=null||fo(i.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ee=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:u,...c},g)=>j.createElement("svg",{ref:g,...Bm,width:i,height:i,stroke:r,strokeWidth:o?Number(l)*24/Number(i):l,className:["lucide",`lucide-${$m(e)}`,s].join(" "),...c},[...t.map(([m,h])=>j.createElement(m,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=ee("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=ee("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=ee("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=ee("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=ee("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=ee("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=ee("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=ee("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=ee("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=ee("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xm(){const[e,t]=j.useState([]),[n,r]=j.useState(!1),i=s=>{e.includes(s)||t([...e,s])},l=()=>{t([]),r(!1)},o=()=>{e.includes("Block Ice")&&r(!0)};return a.jsxs("div",{className:"home-container",children:[a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"badge animate-fade",children:[a.jsx(Ui,{size:16})," Three Generations Since 1940"]}),a.jsxs("h1",{children:["A Legacy in ",a.jsx("br",{}),a.jsx("span",{children:"Every Single Bowl"})]}),a.jsx("p",{children:"Experience the original Taiping Cendol. Crafted from a secret family recipe passed down through generations, combining fresh pandan noodles, creamy coconut milk, and the rich, authentic sweetness of Gula Melaka."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(Gr,{to:"/menu",className:"btn-primary",children:["View Our Menu ",a.jsx(zs,{size:20})]}),a.jsx(Gr,{to:"/story",className:"btn-secondary",children:"Discover Our Story"})]})]}),a.jsxs("div",{className:"hero-image-container",children:[a.jsx("img",{src:"/images/image5.jpg",alt:"Ansari's Famous Cendol Storefront",className:"hero-image"}),a.jsxs("div",{className:"hero-floating-card glass-card",children:[a.jsxs("div",{className:"stars",children:[a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"}),a.jsx(Pt,{size:16,fill:"currentColor"})]}),a.jsx("p",{children:`"Taiping's legendary street dessert since the 1940s. A must-visit!"`}),a.jsx("span",{children:"- Malaysian Street Heritage Council"})]})]})]}),a.jsxs("section",{className:"ingredients-spotlight",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Crafted with Purity"}),a.jsx("h2",{className:"section-title",children:"The Three Golden Pillars"}),a.jsx("p",{className:"section-desc",children:"The secret behind maintaining the legendary taste of Ansari's Cendol lies in the absolute quality of our natural ingredients."})]}),a.jsxs("div",{className:"ingredients-grid",children:[a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"01"}),a.jsx("h3",{children:"Pandan Noodles"}),a.jsx("p",{children:"Soft, bright green noodles made of high-quality rice flour, colored and flavored naturally by the squeezed juice of freshly harvested pandan leaves. Pushed by hand through a traditional sieve."})]}),a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"02"}),a.jsx("h3",{children:"Gula Melaka Syrup"}),a.jsx("p",{children:"A fine, secret mixture of premium dark palm sugars, cooked slow and caramelized. Handed down directly from Ansari's father, this rich, velvety syrup forms the soul of our cendol."})]}),a.jsxs("div",{className:"ingredient-card glass-card",children:[a.jsx("div",{className:"ingredient-num",children:"03"}),a.jsx("h3",{children:"Creamy Coconut Milk"}),a.jsx("p",{children:"Freshly squeezed daily from mature coconuts. Its rich, velvety texture creates the perfect milky base to balance the caramelized sweetness of the syrup and the coolness of shaved ice."})]})]})]}),a.jsx("section",{className:"heritage-intro",children:a.jsxs("div",{className:"heritage-intro-grid",children:[a.jsx("div",{className:"heritage-intro-image",children:a.jsx("img",{src:"/images/image3.jpg",alt:"Historical Drawing of Ansari Cendol",className:"sketch-img"})}),a.jsxs("div",{className:"heritage-intro-text",children:[a.jsx("span",{className:"section-subtitle",children:"Since 1940"}),a.jsx("h2",{children:'"Taiping Cendol — A Family Trade For Three Generations"'}),a.jsx("p",{className:"quote",children:`"A visit to the town of Taiping is considered incomplete if visitors fail to taste one of Malaysia's favourite drinks, cendol."`}),a.jsxs("p",{children:["Our brand's grandfather, ",a.jsx("strong",{children:"P.M. Abdul Kader"}),", arrived in Taiping from India in the 1940s. Operating near the historical Bismillah Restaurant along Jalan Taming Sari, he introduced this refreshing dessert to the local community. In the late 1940s, a bowl cost just one to three cents."]}),a.jsxs("p",{children:["Today, owner ",a.jsx("strong",{children:"Ansari Abdul Rahman"})," preserves this heritage, using the same recipe passed down by his father, S.M. Abdul Rahman."]}),a.jsxs(Gr,{to:"/story",className:"link-button",children:["Read the Full Story ",a.jsx(zs,{size:16})]})]})]})}),a.jsxs("section",{className:"interactive-bowl-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Interactive Recipe"}),a.jsx("h2",{className:"section-title",children:"Build Your Own Virtual Bowl"}),a.jsx("p",{className:"section-desc",children:"Follow the traditional preparation steps to create a perfect Malaysian Cendol."})]}),a.jsxs("div",{className:"bowl-builder-container glass-card",children:[a.jsxs("div",{className:"ingredients-selectors",children:[a.jsx("h4",{children:"Select Ingredients in Order:"}),a.jsx("button",{className:`select-btn ${e.includes("Green Noodles (Cendol)")?"active":""}`,onClick:()=>i("Green Noodles (Cendol)"),children:"1. Add Pandan Noodles"}),a.jsx("button",{className:`select-btn ${e.includes("Red Beans")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Red Beans"),children:"2. Add Red Beans"}),a.jsx("button",{className:`select-btn ${e.includes("Glutinous Rice (Pulut)")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Glutinous Rice (Pulut)"),children:"3. Add Glutinous Rice (Pulut)"}),a.jsx("button",{className:`select-btn ${e.includes("Block Ice")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Block Ice"),children:"4. Shave Block Ice"}),a.jsx("button",{className:`select-btn ${e.includes("Coconut Milk")?"active":""}`,disabled:!e.includes("Block Ice"),onClick:()=>i("Coconut Milk"),children:"5. Pour Fresh Coconut Milk"}),a.jsx("button",{className:`select-btn ${n?"active":""}`,disabled:!e.includes("Coconut Milk"),onClick:o,children:"6. Drizzle Gula Melaka Syrup"}),a.jsx("button",{className:"clear-btn",onClick:l,children:"Reset Bowl"})]}),a.jsxs("div",{className:"bowl-visualizer",children:[a.jsx("div",{className:"bowl-rim",children:a.jsxs("div",{className:"bowl-contents",children:[e.includes("Green Noodles (Cendol)")&&a.jsxs("div",{className:"visual-pandan-noodles animate-drop",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),e.includes("Red Beans")&&a.jsxs("div",{className:"visual-beans animate-drop",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),e.includes("Glutinous Rice (Pulut)")&&a.jsx("div",{className:"visual-pulut animate-drop"}),e.includes("Block Ice")&&a.jsx("div",{className:"visual-ice animate-drop",children:a.jsx("div",{className:"ice-mound"})}),e.includes("Coconut Milk")&&a.jsx("div",{className:"visual-coconut-milk animate-fill"}),n&&a.jsx("div",{className:"visual-gula-melaka animate-syrup"})]})}),a.jsxs("div",{className:"bowl-status",children:[e.length===0&&a.jsx("p",{className:"status-text",children:'Select "Pandan Noodles" to begin your bowl!'}),e.length>0&&e.length<5&&a.jsx("p",{className:"status-text",children:"Bowl in preparation... Keep adding ingredients!"}),e.length>=5&&!n&&a.jsx("p",{className:"status-text",children:"Almost ready! Don't forget to drizzle the Gula Melaka syrup!"}),n&&a.jsxs("p",{className:"status-text success-text",children:[a.jsx(Jm,{size:18})," Deliciously Complete! Ready to serve. Enjoy your cold dessert!"]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function qm(){return a.jsxs("div",{className:"story-container",children:[a.jsx("section",{className:"story-hero",children:a.jsxs("div",{className:"story-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Since 1940"}),a.jsx("h1",{children:"Our Story"}),a.jsx("p",{className:"hero-lead",children:"Discover the journey of a simple street cart that introduced Cendol to Taiping, growing into a timeless culinary legacy preserved for three generations."})]})}),a.jsx("section",{className:"history-chapter",children:a.jsxs("div",{className:"chapter-grid",children:[a.jsxs("div",{className:"chapter-text",children:[a.jsx("h2",{children:"The Birth of Taiping Cendol"}),a.jsxs("p",{children:["In the early 1940s, a young merchant named ",a.jsx("strong",{children:"P.M. Abdul Kader"})," arrived in the town of Taiping, Perak, from India. Bringing along family traditions and a passion for street cooking, he decided to introduce a refreshing sweet dessert to the warm tropical town: ",a.jsx("strong",{children:"Cendol"}),"."]}),a.jsxs("p",{children:["Operating a modest cart along ",a.jsx("strong",{children:"Jalan Taming Sari"})," (then known as Main Road) near the historic Bismillah Restaurant, his stall quickly became a hub for locals seeking relief from the heat. In those pioneering days, a fresh bowl of hand-shaved ice, coconut milk, and green rice-flour noodles cost merely ",a.jsx("strong",{children:"one to three cents"}),"."]}),a.jsxs("div",{className:"story-quote glass-card",children:[a.jsx(Pt,{size:24,className:"quote-icon"}),a.jsxs("p",{children:['"As the business operated near the Bismillah Restaurant, it became famously known in Perak as',a.jsx("strong",{children:" Bismillah Cendol"})," or simply ",a.jsx("strong",{children:"Taiping Cendol"}),`. It was here that Taiping's reputation as a cendol capital was born."`]})]})]}),a.jsxs("div",{className:"chapter-image",children:[a.jsx("img",{src:"/images/image3.jpg",alt:"Vintage Drawing of P.M. Abdul Kader Stall",className:"heritage-photo"}),a.jsx("span",{className:"image-caption",children:"Pen-and-ink illustration depicting the original street service."})]})]})}),a.jsxs("section",{className:"timeline-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Our Journey"}),a.jsx("h2",{className:"section-title",children:"Timeline of Legacy"}),a.jsx("p",{className:"section-desc",children:"How a three-generation commitment to quality maintained the same authentic recipe for over 80 years."})]}),a.jsxs("div",{className:"timeline",children:[a.jsxs("div",{className:"timeline-item left",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Ir,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"1940s"}),a.jsx("h3",{children:"The Arrival"}),a.jsx("p",{children:"P.M. Abdul Kader introduces Cendol to Taiping, Perak. Using wooden hand shavers and fresh pandan leaves, he serves bowl-by-bowl to travellers and residents on Jalan Taming Sari."})]})]}),a.jsxs("div",{className:"timeline-item right",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Ir,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"1970s"}),a.jsx("h3",{children:"Perfecting the Secret"}),a.jsxs("p",{children:["His son, ",a.jsx("strong",{children:"S.M. Abdul Rahman"}),", takes over the business. He standardizes the cooking processes and refines the mixture of brown sugars, introducing the premium Gula Melaka syrup formula that preserves quality across batches."]})]})]}),a.jsxs("div",{className:"timeline-item left",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Ir,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"2000s"}),a.jsx("h3",{children:"Street Heritage Recognition"}),a.jsx("p",{children:`On 27th November 2004, the restaurant is celebrated in "A Path to Street Heritage", supported by the Ministry of Tourism Malaysia and Perak State authorities, cementing its title as "Ansari's Famous Cendol".`})]})]}),a.jsxs("div",{className:"timeline-item right",children:[a.jsx("div",{className:"timeline-dot",children:a.jsx(Ir,{size:16})}),a.jsxs("div",{className:"timeline-content glass-card",children:[a.jsx("span",{className:"timeline-date",children:"Present Day"}),a.jsx("h3",{children:"The Visionary Growth"}),a.jsxs("p",{children:["Now managed by ",a.jsx("strong",{children:"Ansari Abdul Rahman"}),". While keeping the main Taiping stall's authenticity, he pursues an ambition to share this taste across Malaysia with planned branches in Kuala Lumpur, Penang, Johor Bahru, Alor Setar, and Ipoh."]})]})]})]})]}),a.jsxs("section",{className:"family-legacy-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Heritage Custodians"}),a.jsx("h2",{className:"section-title",children:"The Family Lineage"}),a.jsx("p",{className:"section-desc",children:"Passed down from grandfather, to father, to son. The hands that shaped the history of Taiping Cendol."})]}),a.jsxs("div",{className:"family-tree",children:[a.jsxs("div",{className:"tree-node glass-card",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gl,{size:24})}),a.jsx("span",{className:"node-title",children:"The Initiator"}),a.jsx("h3",{children:"P.M. Abdul Kader"}),a.jsx("span",{className:"node-period",children:"1940s - 1970s"}),a.jsx("p",{children:"Brought the craft of Cendol from India, creating the foundation of Jalan Taming Sari's street icon."})]}),a.jsx("div",{className:"tree-connector"}),a.jsxs("div",{className:"tree-node glass-card",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gl,{size:24})}),a.jsx("span",{className:"node-title",children:"The Refiner"}),a.jsx("h3",{children:"S.M. Abdul Rahman"}),a.jsx("span",{className:"node-period",children:"1970s - 2000s"}),a.jsx("p",{children:"Formulated the signature Gula Melaka sugar blend, ensuring long-term consistency."})]}),a.jsx("div",{className:"tree-connector"}),a.jsxs("div",{className:"tree-node glass-card highlight-node",children:[a.jsx("div",{className:"node-icon",children:a.jsx(gl,{size:24})}),a.jsx("span",{className:"node-title",children:"The Modern Guardian"}),a.jsx("h3",{children:"Ansari Abdul Rahman"}),a.jsx("span",{className:"node-period",children:"2000s - Present"}),a.jsx("p",{children:"Standardized the brand name and expands the legacy to Malaysia's main urban hubs."})]})]})]}),a.jsx("section",{className:"secret-showcase",children:a.jsxs("div",{className:"secret-grid",children:[a.jsx("div",{className:"secret-image",children:a.jsx("img",{src:"/images/image1.jpg",alt:"Ansari preparing Cendol",className:"heritage-photo"})}),a.jsxs("div",{className:"secret-content",children:[a.jsx("h2",{children:"The Secret of Gula Melaka"}),a.jsx("p",{children:"Many ask why Ansari's Famous Cendol tastes distinct from standard commercial varieties. The answer lies in our syrup, prepared in a special way handed down across decades."}),a.jsx("p",{children:"Instead of standard processed white sugar, we blend authentic local palm sugar (Gula Melaka) with two other varieties of brown sugar. Slowly heated in copper vats and double-filtered, this molasses-like liquid delivers a rich, earthy sweetness that never feels overwhelming, clinging perfectly to the shaved ice."}),a.jsxs("div",{className:"heritage-seal",children:[a.jsx(Ui,{size:36}),a.jsxs("div",{children:[a.jsx("h4",{children:"Certified Street Heritage"}),a.jsx("p",{children:"Preserving Traditional Hand-Crafted Production Methods Since 1940."})]})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}const Zm=[{id:1,name:"Cendol Biasa (Traditional Cendol)",description:"The standard heritage bowl. A refreshing mix of fresh pandan green noodles, creamy coconut milk, shaved ice, and our signature Gula Melaka syrup.",price:3.5,category:"cendol",tag:"Classic",badge:"Original"},{id:2,name:"Cendol Kacang (Red Beans)",description:"Our traditional cendol served with a generous topping of slow-cooked, sweetened red kidney beans adding a soft, nutty texture.",price:4,category:"cendol",tag:"Popular"},{id:3,name:"Cendol Pulut (Glutinous Rice)",description:"Features a scoop of sticky, perfectly steamed glutinous rice (pulut), making the dessert richer and extra filling.",price:4.2,category:"cendol",tag:"Heritage"},{id:4,name:"Cendol Special (Red Beans & Pulut)",description:"The ultimate bowl. A double-loaded combination featuring both sweet red kidney beans and sticky glutinous rice (pulut).",price:4.8,category:"cendol",tag:"Highly Recommended",badge:"Best Seller"},{id:5,name:"Pasembur Traditional (Rojak)",description:"Famous Malaysian Indian street salad. A crispy heap of shredded cucumber, turnip, bean curd, and potato fritters topped with a warm, sweet, and spicy peanut gravy.",price:7,category:"savory",tag:"Local Favorite"},{id:6,name:"Pasembur Special (With Squid)",description:"Our traditional Pasembur loaded with premium boiled egg, crispy prawn fritters, and marinated honey-spiced cuttlefish.",price:9,category:"savory",badge:"Premium"},{id:7,name:"Ais Kacang (ABC)",description:"A traditional Malaysian shaved ice mountain topped with sweet cream corn, red beans, grass jelly, rose syrup, and evaporated milk.",price:5,category:"dessert"}];function eh(){const[e,t]=j.useState([]),[n,r]=j.useState("all"),[i,l]=j.useState(!0),[o,s]=j.useState(!1);j.useEffect(()=>{fetch("/api/menu").then(c=>{if(!c.ok)throw new Error("API server down");return c.json()}).then(c=>{t(c),l(!1)}).catch(()=>{t(Zm),l(!1),s(!0)})},[]);const u=n==="all"?e:e.filter(c=>c.category===n);return a.jsxs("div",{className:"menu-container",children:[a.jsx("section",{className:"menu-hero",children:a.jsxs("div",{className:"menu-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Freshly Served Daily"}),a.jsx("h1",{children:"Our Heritage Menu"}),a.jsx("p",{children:"Taste the recipes that defined Taiping's street heritage. Enjoy our signature iced Cendol variations alongside traditional Pasembur, prepared with fresh ingredients every morning."})]})}),a.jsxs("section",{className:"menu-section",children:[a.jsxs("div",{className:"category-filters",children:[a.jsx("button",{className:`filter-btn ${n==="all"?"active":""}`,onClick:()=>r("all"),children:"All Items"}),a.jsx("button",{className:`filter-btn ${n==="cendol"?"active":""}`,onClick:()=>r("cendol"),children:"Iced Cendol"}),a.jsx("button",{className:`filter-btn ${n==="savory"?"active":""}`,onClick:()=>r("savory"),children:"Savory Pasembur"}),a.jsx("button",{className:`filter-btn ${n==="dessert"?"active":""}`,onClick:()=>r("dessert"),children:"Desserts & Drinks"})]}),o&&a.jsxs("div",{className:"api-notice",children:[a.jsx("span",{className:"notice-badge",children:"Offline Mode"}),a.jsx("p",{children:"Displaying authentic local menu copy from heritage records. The Laravel database server is offline."})]}),a.jsx("div",{className:"menu-grid",children:i?Array(4).fill(0).map((c,g)=>a.jsxs("div",{className:"menu-card glass-card loading-card",children:[a.jsx("div",{className:"loading-line title"}),a.jsx("div",{className:"loading-line desc"}),a.jsx("div",{className:"loading-line price"})]},g)):u.map(c=>a.jsxs("div",{className:"menu-card glass-card",children:[c.badge&&a.jsx("span",{className:"menu-card-badge",children:c.badge}),a.jsxs("div",{className:"menu-card-header",children:[a.jsx("h3",{children:c.name}),a.jsxs("span",{className:"menu-card-price",children:["RM ",c.price.toFixed(2)]})]}),c.tag&&a.jsxs("span",{className:"menu-card-tag",children:[a.jsx(Pt,{size:12,fill:"currentColor"})," ",c.tag]}),a.jsx("p",{className:"menu-card-desc",children:c.description}),a.jsx("div",{className:"menu-card-footer",children:a.jsxs("span",{className:"ingredient-indicator",children:[a.jsx(Gm,{size:14})," Traditional Preparation"]})})]},c.id))})]}),a.jsx("section",{className:"recipe-showcase-section",children:a.jsxs("div",{className:"recipe-card-wrapper glass-card",children:[a.jsxs("div",{className:"recipe-image-side",children:[a.jsx("img",{src:"/images/image2.jpg",alt:"Bowl of Cendol",className:"recipe-photo"}),a.jsxs("div",{className:"recipe-tag",children:[a.jsx(Ui,{size:20})," Official Heritage Formulation"]})]}),a.jsxs("div",{className:"recipe-content-side",children:[a.jsx("span",{className:"recipe-subtitle",children:"Grandfather's Kitchen Notebook"}),a.jsx("h2",{children:"How to Assemble Taiping Cendol"}),a.jsx("p",{className:"recipe-intro",children:"The classic preparation steps recorded in the 2004 historical street archives."}),a.jsxs("div",{className:"ingredients-box",children:[a.jsx("h4",{children:"Required Ingredients:"}),a.jsxs("ul",{className:"ingredients-list",children:[a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Green Noodles (Cendol)"]}),a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Slow-cooked Palm Sugar Syrup"]}),a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Braised Red Beans"]}),a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Sticky Glutinous Rice (Pulut)"]}),a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Clean Block of Ice"]}),a.jsxs("li",{children:[a.jsx("span",{children:"•"})," Fresh Coconut Milk"]})]})]}),a.jsxs("div",{className:"preparation-steps",children:[a.jsx("h4",{children:"Preparation Method:"}),a.jsxs("ol",{className:"steps-list",children:[a.jsxs("li",{children:[a.jsx("div",{className:"step-num",children:"1"}),a.jsx("div",{className:"step-text",children:"Put a generous amount of green pandan noodles into a traditional ceramic bowl."})]}),a.jsxs("li",{children:[a.jsx("div",{className:"step-num",children:"2"}),a.jsx("div",{className:"step-text",children:"Add sweet red beans, sticky glutinous rice (pulut), or a blend of both depending on preference."})]}),a.jsxs("li",{children:[a.jsx("div",{className:"step-num",children:"3"}),a.jsx("div",{className:"step-text",children:"Shave pure block ice into a fine mound directly over the ingredients."})]}),a.jsxs("li",{children:[a.jsx("div",{className:"step-num",children:"4"}),a.jsx("div",{className:"step-text",children:"Pour fresh coconut milk around the ice heap and add a thick drizzle of gula melaka palm syrup over the peak."})]}),a.jsxs("li",{children:[a.jsx("div",{className:"step-num",children:"5"}),a.jsx("div",{className:"step-text",children:"Serve immediately while freezing cold."})]})]})]})]})]})}),a.jsx("style",{children:`
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

        /* Recipe Card */
        .recipe-showcase-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .recipe-card-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          overflow: hidden;
        }
        .recipe-image-side {
          position: relative;
        }
        .recipe-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          min-height: 400px;
        }
        .recipe-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(15, 15, 15, 0.85);
          color: var(--text-light);
          padding: 0.8rem 1.2rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-left: 3px solid var(--amber-light);
        }
        .recipe-content-side {
          padding: 3.5rem;
        }
        .recipe-subtitle {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary-light);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }
        .recipe-content-side h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .recipe-intro {
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        
        .ingredients-box {
          background: rgba(255,255,255,0.6);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          margin-bottom: 2.5rem;
        }
        .ingredients-box h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--amber);
          margin-bottom: 0.75rem;
        }
        .ingredients-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          list-style: none;
        }
        .ingredients-list li {
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          gap: 0.5rem;
          color: var(--text-dark);
        }
        .ingredients-list li span {
          color: var(--primary-light);
          font-weight: 700;
        }

        .preparation-steps h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
        }
        .steps-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .steps-list li {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }
        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--amber);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-text {
          font-size: 0.95rem;
          color: var(--text-dark);
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
          .recipe-card-wrapper {
            grid-template-columns: 1fr;
          }
          .recipe-content-side {
            padding: 2rem;
          }
        }
      `})]})}const th=[{id:1,city:"Taiping Flagship",address:"Jalan Taming Sari (Main Road), 34000 Taiping, Perak",status:"Active"},{id:2,city:"Kuala Lumpur",address:"Proposed branch: Golden Triangle district",status:"Planned"},{id:3,city:"Penang",address:"Proposed branch: Georgetown Heritage Zone",status:"Planned"},{id:4,city:"Johor Bahru",address:"Proposed branch: JB Central",status:"Planned"},{id:5,city:"Alor Setar",address:"Proposed branch: City Center",status:"Planned"},{id:6,city:"Ipoh",address:"Proposed branch: Ipoh Old Town",status:"Planned"}];function nh(){const[e,t]=j.useState([]),[n,r]=j.useState({name:"",email:"",subject:"",message:""}),[i,l]=j.useState(!1),[o,s]=j.useState(!1),[u,c]=j.useState(null);j.useEffect(()=>{fetch("/api/branches").then(h=>{if(!h.ok)throw new Error("API server down");return h.json()}).then(h=>{t(h)}).catch(()=>{t(th)})},[]);const g=h=>{const{name:x,value:y}=h.target;r({...n,[x]:y})},m=h=>{h.preventDefault(),l(!0),c(null),s(!1),fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(async x=>{const y=await x.json();if(!x.ok)throw new Error(y.message||"Submission failed");s(!0),r({name:"",email:"",subject:"",message:""})}).catch(x=>{console.error(x);try{const y=JSON.parse(localStorage.getItem("cendol_messages")||"[]");y.push({...n,id:Date.now(),date:new Date().toISOString()}),localStorage.setItem("cendol_messages",JSON.stringify(y)),s(!0),r({name:"",email:"",subject:"",message:""})}catch{c("Failed to send message. Please check your network.")}}).finally(()=>{l(!1)})};return a.jsxs("div",{className:"visit-container",children:[a.jsx("section",{className:"visit-hero",children:a.jsxs("div",{className:"visit-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Find Us in Perak"}),a.jsx("h1",{children:"Visit Us"}),a.jsx("p",{children:"Come visit our historical home in Taiping. Experience the vintage atmosphere where three generations of customers have enjoyed fresh street heritage."})]})}),a.jsx("section",{className:"main-stall-section",children:a.jsxs("div",{className:"main-stall-grid",children:[a.jsxs("div",{className:"stall-info-card glass-card",children:[a.jsx("span",{className:"info-card-badge",children:"Main Flagship"}),a.jsx("h2",{children:"Taiping Stall"}),a.jsx("p",{className:"stall-desc",children:"Located near the historic Bismillah Restaurant along Jalan Taming Sari, right in the heart of Taiping heritage trail."}),a.jsxs("div",{className:"info-items",children:[a.jsxs("div",{className:"info-item",children:[a.jsx(rd,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Address"}),a.jsx("p",{children:"Jalan Taming Sari, 34000 Taiping, Perak, Malaysia"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(nd,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Operating Hours"}),a.jsx("p",{children:"Open Daily: 10:00 AM - 6:30 PM"}),a.jsx("span",{className:"subtext",children:"* Closed on major national public holidays"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(id,{size:24}),a.jsxs("div",{children:[a.jsx("h4",{children:"Phone Inquiries"}),a.jsx("p",{children:"+60 5-808 2004"})]})]})]})]}),a.jsx("div",{className:"map-wrapper glass-card",children:a.jsxs("div",{className:"mock-map",children:[a.jsx("div",{className:"map-overlay",children:a.jsxs("div",{className:"map-pin-bubble",children:[a.jsx("strong",{children:"Ansari's Famous Cendol"}),a.jsx("p",{children:"Jalan Taming Sari, Taiping"})]})}),a.jsx("iframe",{title:"Taiping Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9168962366885!2d100.73884171536762!3d4.851944396476901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304adf4be6ecb1bf%3A0xe54e6012fa6b23d9!2sAnsari%20Famous%20Cendol!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy",width:"100%",height:"100%",style:{border:0,borderRadius:"inherit"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})})]})}),a.jsx("section",{className:"inquiries-branches-section",children:a.jsxs("div",{className:"inquiry-grid",children:[a.jsxs("div",{className:"contact-form-side glass-card",children:[a.jsx("h3",{children:"Send Us a Message"}),a.jsx("p",{children:"Have questions about event bookings, catering services, or our heritage story? Write to us!"}),a.jsxs("form",{onSubmit:m,className:"contact-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Your Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:g,required:!0,placeholder:"e.g. John Doe"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:g,required:!0,placeholder:"name@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",children:"Subject"}),a.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:g,required:!0,placeholder:"e.g. Catering Enquiry"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Your Message"}),a.jsx("textarea",{id:"message",name:"message",rows:"5",value:n.message,onChange:g,required:!0,placeholder:"Write your message here..."})]}),a.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",disabled:i,children:[i?"Sending...":"Send Inquiry"," ",a.jsx(Ym,{size:16})]}),o&&a.jsxs("div",{className:"alert alert-success animate-fade",children:[a.jsx(Hm,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:"Inquiry Sent Successfully!"}),a.jsx("p",{children:"Thank you. We have saved your message and will respond shortly."})]})]}),u&&a.jsxs("div",{className:"alert alert-error animate-fade",children:[a.jsx(bm,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:"Error!"}),a.jsx("p",{children:u})]})]})]})]}),a.jsxs("div",{className:"branches-list-side",children:[a.jsx("span",{className:"section-subtitle",children:"The Grand Ambition"}),a.jsx("h3",{children:"Future Branches"}),a.jsx("p",{className:"branches-intro",children:"Ansari Abdul Rahman's long-held ambition is to expand the authentic Taiping Cendol flavor to major hubs."}),a.jsx("div",{className:"branches-grid",children:e.map(h=>a.jsxs("div",{className:`branch-card glass-card ${h.status==="Active"?"active-branch":""}`,children:[a.jsxs("div",{className:"branch-card-header",children:[a.jsx("h4",{children:h.city}),a.jsx("span",{className:`branch-status-badge ${h.status.toLowerCase()}`,children:h.status})]}),a.jsx("p",{children:h.address})]},h.id))})]})]})}),a.jsx("style",{children:`
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
      `})]})}const et=[{image:"/images/image1.jpg",title:"Handcrafting the Legacy",description:"Ansari Abdul Rahman scooping the rich palm sugar syrup at the iconic ice shaving station, following secret techniques handed down by his father."},{image:"/images/image2.jpg",title:"The Signature Heritage Bowl",description:"A close-up of a perfect serving: soft bright green rice noodles, mountain of shaved ice, coconut milk, and caramel-like Gula Melaka."},{image:"/images/image3.jpg",title:"Street Heritage Illustration",description:"Original pen-and-ink artwork by Ng Kok Hong of Studio Ayer, capturing the timeless experience of Abdul Kader serving customers in the 1940s."},{image:"/images/image4.jpg",title:"Generations of Smiles",description:"Two young local children enjoying their bowls of cold Cendol, showing how this street food favorite continues to unite generations."},{image:"/images/image5.jpg",title:"The Jalan Taming Sari Shopfront",description:"The historic flagship shop of Ansari Famous Cendol in Taiping, Perak, decorated with the Malaysian flag and welcoming guests daily."}],rh=["Ministry of Tourism Malaysia","Tourism Malaysia","Majlis Tindakan Pelancongan Negeri Perak","Taiping Municipal Council (MPT)","Pejabat Daerah Larut & Matang","Muzium Perak","Jabatan Penerangan Perak","Ibu Pejabat Polis Trafik Taiping","Jabatan Bomba Taiping","JKR Taiping","Chuan Sin Sdn. Bhd.","Sanland Paint Industry Sdn. Bhd.","Hotel Panorama Taiping","Taiping Resort","FINAS","Taiping Tourist Association (2002–2004 Committee)"];function ih(){const[e,t]=j.useState(0),n=()=>{t(i=>i===et.length-1?0:i+1)},r=()=>{t(i=>i===0?et.length-1:i-1)};return a.jsxs("div",{className:"media-container",children:[a.jsx("section",{className:"media-hero",children:a.jsxs("div",{className:"media-hero-content",children:[a.jsx("span",{className:"section-subtitle",children:"Heritage in Focus"}),a.jsx("h1",{children:"Media & Gallery"}),a.jsx("p",{children:"Browse historical records, sketches, and photographs documenting the history of Ansari's Famous Cendol in Taiping."})]})}),a.jsxs("section",{className:"carousel-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"Visual Archives"}),a.jsx("h2",{className:"section-title",children:"A Window into History"})]}),a.jsxs("div",{className:"carousel-wrapper glass-card",children:[a.jsxs("div",{className:"carousel-image-container",children:[a.jsx("img",{src:et[e].image,alt:et[e].title,className:"carousel-image animate-fade"},e),a.jsx("button",{className:"carousel-arrow prev",onClick:r,"aria-label":"Previous image",children:a.jsx(Vm,{size:24})}),a.jsx("button",{className:"carousel-arrow next",onClick:n,"aria-label":"Next image",children:a.jsx(Wm,{size:24})})]}),a.jsxs("div",{className:"carousel-caption",children:[a.jsxs("div",{className:"caption-header",children:[a.jsx("h3",{children:et[e].title}),a.jsxs("span",{className:"slide-indicator",children:["Slide ",e+1," of ",et.length]})]}),a.jsx("p",{children:et[e].description}),a.jsx("div",{className:"carousel-dots",children:et.map((i,l)=>a.jsx("button",{className:`dot-btn ${e===l?"active":""}`,onClick:()=>t(l),"aria-label":`Go to slide ${l+1}`},l))})]})]})]}),a.jsxs("section",{className:"patrons-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-subtitle",children:"With Heartfelt Gratitude"}),a.jsx("h2",{className:"section-title",children:"Special Acknowledgements"}),a.jsx("p",{className:"section-desc",children:"We honor the government ministries, municipal departments, and local organizations who contributed to the historic success of:"}),a.jsxs("div",{className:"heritage-project-title",children:[a.jsx(Ui,{size:20}),' "A Path to Street Heritage" • 27 November 2004']})]}),a.jsx("div",{className:"patrons-grid",children:rh.map((i,l)=>a.jsxs("div",{className:"patron-badge glass-card",children:[a.jsx("span",{className:"badge-heart",children:a.jsx(Qm,{size:12,fill:"currentColor"})}),a.jsx("span",{children:i})]},l))})]}),a.jsx("style",{children:`
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

        /* Patrons Section */
        .patrons-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
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
          .patrons-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function lh(){const{pathname:e}=$t();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function oh(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1);$t(),j.useEffect(()=>{const l=()=>{window.scrollY>20?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const i=()=>r(!1);return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:`navbar ${e?"scrolled":""}`,children:[a.jsxs("div",{className:"logo-container",children:[a.jsx("img",{src:"/images/image2.jpg",alt:"Cendol Logo",className:"logo-icon"}),a.jsxs("div",{className:"logo-text",children:["Ansari's",a.jsx("span",{children:"Famous"})]})]}),a.jsxs("ul",{className:"nav-links",children:[a.jsx("li",{children:a.jsx(se,{to:"/",className:({isActive:l})=>`nav-link ${l?"active":""}`,end:!0,children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Media"})})]}),a.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),"aria-label":"Toggle navigation menu",children:n?a.jsx(_s,{size:28}):a.jsx(Km,{size:28})})]}),a.jsxs("div",{className:`mobile-drawer ${n?"open":""}`,children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"logo-text",children:["Ansari's",a.jsx("span",{children:"Famous"})]}),a.jsx("button",{onClick:i,children:a.jsx(_s,{size:28})})]}),a.jsxs("ul",{className:"drawer-links",children:[a.jsx("li",{children:a.jsx(se,{to:"/",className:"drawer-link",onClick:i,end:!0,children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",className:"drawer-link",onClick:i,children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",className:"drawer-link",onClick:i,children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",className:"drawer-link",onClick:i,children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",className:"drawer-link",onClick:i,children:"Media"})})]})]}),n&&a.jsx("div",{className:"drawer-overlay",onClick:i}),a.jsx("style",{children:`
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
      `})]})}function ah(){return a.jsxs(Im,{children:[a.jsx(lh,{}),a.jsxs("div",{className:"app-container",children:[a.jsx(oh,{}),a.jsx("main",{className:"page-content",children:a.jsxs(Em,{children:[a.jsx(Ht,{path:"/",element:a.jsx(Xm,{})}),a.jsx(Ht,{path:"/story",element:a.jsx(qm,{})}),a.jsx(Ht,{path:"/menu",element:a.jsx(eh,{})}),a.jsx(Ht,{path:"/visit",element:a.jsx(nh,{})}),a.jsx(Ht,{path:"/media",element:a.jsx(ih,{})})]})}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("h3",{children:"Ansari's Famous Cendol"}),a.jsx("p",{children:"Serving the original Taiping Cendol. A rich, refreshing family trade perfected over three generations since 1940."}),a.jsx("div",{className:"footer-brand-legacy",children:"Est. 1940 • Street Heritage Certified"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Quick Links"}),a.jsxs("ul",{className:"footer-links-list",children:[a.jsx("li",{children:a.jsx(se,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(se,{to:"/story",children:"Our Story"})}),a.jsx("li",{children:a.jsx(se,{to:"/menu",children:"Menu"})}),a.jsx("li",{children:a.jsx(se,{to:"/visit",children:"Visit Us"})}),a.jsx("li",{children:a.jsx(se,{to:"/media",children:"Media & Gallery"})})]})]}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("h4",{children:"Contact Us"}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(rd,{size:20}),a.jsx("span",{children:"Jalan Taming Sari (Main Road), 34000 Taiping, Perak, Malaysia"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(nd,{size:20}),a.jsx("span",{children:"Open Daily: 10:00 AM - 6:30 PM"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(id,{size:20}),a.jsx("span",{children:"+60 5-808 2004 (Taiping Main)"})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",new Date().getFullYear()," Ansari's Famous Cendol. All Rights Reserved."]}),a.jsx("p",{children:"Developed with Passion for Malaysian Culinary Heritage."})]})]})]})]})}vl.createRoot(document.getElementById("root")).render(a.jsx(Bs.StrictMode,{children:a.jsx(ah,{})}));

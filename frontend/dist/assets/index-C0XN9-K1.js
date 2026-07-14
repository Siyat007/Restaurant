function fd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ls={exports:{}},wi={},Rs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),pd=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),ma=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var Ms={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fs=Object.assign,Is={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Ms}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Os(){}Os.prototype=vn.prototype;function go(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Ms}var vo=go.prototype=new Os;vo.constructor=go;Fs(vo,vn.prototype);vo.isPureReactComponent=!0;var pa=Array.isArray,As=Object.prototype.hasOwnProperty,yo={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)As.call(t,r)&&!Ds.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:cr,type:e,key:l,ref:a,props:i,_owner:yo.current}}function Cd(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ha=/\/+/g;function Bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function Ir(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case pd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Bi(a,0):r,pa(i)?(n="",e!=null&&(n=e.replace(ha,"$&/")+"/"),Ir(i,t,n,"",function(c){return c})):i!=null&&(xo(i)&&(i=Cd(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ha,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",pa(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Bi(l,s);a+=Ir(l,t,n,u,i)}else if(u=Nd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Bi(l,s++),a+=Ir(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yr(e,t,n){if(e==null)return e;var r=[],i=0;return Ir(e,r,"","",function(l){return t.call(n,l,i++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Or={transition:null},Pd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Or,ReactCurrentOwner:yo};function $s(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=vn;R.Fragment=hd;R.Profiler=vd;R.PureComponent=go;R.StrictMode=gd;R.Suspense=kd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd;R.act=$s;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fs({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=yo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)As.call(t,u)&&!Ds.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:cr,type:e.type,key:i,ref:l,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:xd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yd,_context:e},e.Consumer=e};R.createElement=Us;R.createFactory=function(e){var t=Us.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:wd,render:e}};R.isValidElement=xo;R.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:zd}};R.memo=function(e,t){return{$$typeof:jd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};R.unstable_act=$s;R.useCallback=function(e,t){return de.current.useCallback(e,t)};R.useContext=function(e){return de.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return de.current.useDeferredValue(e)};R.useEffect=function(e,t){return de.current.useEffect(e,t)};R.useId=function(){return de.current.useId()};R.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return de.current.useMemo(e,t)};R.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};R.useRef=function(e){return de.current.useRef(e)};R.useState=function(e){return de.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return de.current.useTransition()};R.version="18.3.1";Rs.exports=R;var x=Rs.exports;const Bs=md(x),_d=fd({__proto__:null,default:Bs},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=x,bd=Symbol.for("react.element"),Ld=Symbol.for("react.fragment"),Rd=Object.prototype.hasOwnProperty,Md=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function Vs(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Rd.call(t,r)&&!Fd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bd,type:e,key:l,ref:a,props:i,_owner:Md.current}}wi.Fragment=Ld;wi.jsx=Vs;wi.jsxs=Vs;Ls.exports=wi;var o=Ls.exports,vl={},Ws={exports:{}},Se={},Hs={exports:{}},Qs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,b){var L=_.length;_.push(b);e:for(;0<L;){var K=L-1>>>1,Z=_[K];if(0<i(Z,b))_[K]=b,_[L]=Z,L=K;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var b=_[0],L=_.pop();if(L!==b){_[0]=L;e:for(var K=0,Z=_.length,gr=Z>>>1;K<gr;){var Nt=2*(K+1)-1,$i=_[Nt],Ct=Nt+1,vr=_[Ct];if(0>i($i,L))Ct<Z&&0>i(vr,$i)?(_[K]=vr,_[Ct]=L,K=Ct):(_[K]=$i,_[Nt]=L,K=Nt);else if(Ct<Z&&0>i(vr,L))_[K]=vr,_[Ct]=L,K=Ct;else break e}}return b}function i(_,b){var L=_.sortIndex-b.sortIndex;return L!==0?L:_.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],g=1,p=null,h=3,w=!1,y=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=_)r(c),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(c)}}function v(_){if(k=!1,m(_),!y)if(n(u)!==null)y=!0,Di(S);else{var b=n(c);b!==null&&Ui(v,b.startTime-_)}}function S(_,b){y=!1,k&&(k=!1,f(E),E=-1),w=!0;var L=h;try{for(m(b),p=n(u);p!==null&&(!(p.expirationTime>b)||_&&!ye());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var Z=K(p.expirationTime<=b);b=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),m(b)}else r(u);p=n(u)}if(p!==null)var gr=!0;else{var Nt=n(c);Nt!==null&&Ui(v,Nt.startTime-b),gr=!1}return gr}finally{p=null,h=L,w=!1}}var P=!1,N=null,E=-1,F=5,T=-1;function ye(){return!(e.unstable_now()-T<F)}function kn(){if(N!==null){var _=e.unstable_now();T=_;var b=!0;try{b=N(!0,_)}finally{b?jn():(P=!1,N=null)}}else P=!1}var jn;if(typeof d=="function")jn=function(){d(kn)};else if(typeof MessageChannel<"u"){var fa=new MessageChannel,dd=fa.port2;fa.port1.onmessage=kn,jn=function(){dd.postMessage(null)}}else jn=function(){C(kn,0)};function Di(_){N=_,P||(P=!0,jn())}function Ui(_,b){E=C(function(){_(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Di(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var L=h;h=b;try{return _()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,b){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=h;h=_;try{return b()}finally{h=L}},e.unstable_scheduleCallback=function(_,b,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,_={id:g++,callback:b,priorityLevel:_,startTime:L,expirationTime:Z,sortIndex:-1},L>K?(_.sortIndex=L,t(c,_),n(u)===null&&_===n(c)&&(k?(f(E),E=-1):k=!0,Ui(v,L-K))):(_.sortIndex=Z,t(u,_),y||w||(y=!0,Di(S))),_},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(_){var b=h;return function(){var L=h;h=b;try{return _.apply(this,arguments)}finally{h=L}}}})(Qs);Hs.exports=Qs;var Id=Hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=x,je=Id;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ks=new Set,Hn={};function Dt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},va={};function Dd(e){return yl.call(va,e)?!0:yl.call(ga,e)?!1:Ad.test(e)?va[e]=!0:(ga[e]=!0,!1)}function Ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $d(e,t,n,r){if(t===null||typeof t>"u"||Ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wo,ko);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wo,ko);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wo,ko);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function jo(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($d(t,n,i,r)&&(n=null),r||i===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Gs=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),No=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),Xs=Symbol.for("react.offscreen"),ya=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Vi;function bn(e){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var Wi=!1;function Hi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,s=l.length-1;1<=a&&0<=s&&i[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==l[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Bd(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case xl:return"Profiler";case So:return"StrictMode";case wl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Gs:return(e._context.displayName||"Context")+".Provider";case No:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Co:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function Vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wd(e){var t=Js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Wd(e))}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qs(e,t){t=t.checked,t!=null&&jo(e,"checked",t,!1)}function Nl(e,t){qs(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cl(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ln(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function eu(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function ru(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ru(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,rn=null,ln=null;function Sa(e){if(e=mr(e)){if(typeof bl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ci(t),bl(e.stateNode,e.type,t))}}function lu(e){rn?ln?ln.push(e):ln=[e]:rn=e}function ou(){if(rn){var e=rn,t=ln;if(ln=rn=null,Sa(e),t)for(e=0;e<t.length;e++)Sa(t[e])}}function au(e,t){return e(t)}function su(){}var Qi=!1;function uu(e,t,n){if(Qi)return e(t,n);Qi=!0;try{return au(e,t,n)}finally{Qi=!1,(rn!==null||ln!==null)&&(su(),ou())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ll=!1;if(Ge)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ll=!1}function Kd(e,t,n,r,i,l,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var On=!1,Yr=null,Xr=!1,Rl=null,Gd={onError:function(e){On=!0,Yr=e}};function Yd(e,t,n,r,i,l,a,s,u){On=!1,Yr=null,Kd.apply(Gd,arguments)}function Xd(e,t,n,r,i,l,a,s,u){if(Yd.apply(this,arguments),On){if(On){var c=Yr;On=!1,Yr=null}else throw Error(j(198));Xr||(Xr=!0,Rl=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(Ut(e)!==e)throw Error(j(188))}function Jd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Na(i),e;if(l===r)return Na(i),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function du(e){return e=Jd(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fu(e);if(t!==null)return t;e=e.sibling}return null}var mu=je.unstable_scheduleCallback,Ca=je.unstable_cancelCallback,Zd=je.unstable_shouldYield,qd=je.unstable_requestPaint,G=je.unstable_now,ef=je.unstable_getCurrentPriorityLevel,zo=je.unstable_ImmediatePriority,pu=je.unstable_UserBlockingPriority,Jr=je.unstable_NormalPriority,tf=je.unstable_LowPriority,hu=je.unstable_IdlePriority,ki=null,$e=null;function nf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:of,rf=Math.log,lf=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(rf(e)/lf|0)|0}var jr=64,Sr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Rn(s):(l&=a,l!==0&&(r=Rn(l)))}else a=n&~i,a!==0?r=Rn(a):l!==0&&(r=Rn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Fe(l),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=af(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,_o,xu,wu,ku,Fl=!1,Nr=[],ut=null,ct=null,dt=null,Gn=new Map,Yn=new Map,it=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ea(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=mr(t),t!==null&&_o(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function df(e,t,n,r,i){switch(t){case"focusin":return ut=Cn(ut,e,t,n,r,i),!0;case"dragenter":return ct=Cn(ct,e,t,n,r,i),!0;case"mouseover":return dt=Cn(dt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Gn.set(l,Cn(Gn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Yn.set(l,Cn(Yn.get(l)||null,e,t,n,r,i)),!0}return!1}function ju(e){var t=_t(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=cu(n),t!==null){e.blockedOn=t,ku(e.priority,function(){xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=mr(n),t!==null&&_o(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){Ar(e)&&n.delete(t)}function ff(){Fl=!1,ut!==null&&Ar(ut)&&(ut=null),ct!==null&&Ar(ct)&&(ct=null),dt!==null&&Ar(dt)&&(dt=null),Gn.forEach(za),Yn.forEach(za)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,ff)))}function Xn(e){function t(i){return En(i,e)}if(0<Nr.length){En(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&En(ut,e),ct!==null&&En(ct,e),dt!==null&&En(dt,e),Gn.forEach(t),Yn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&it.shift()}var on=Ze.ReactCurrentBatchConfig,qr=!0;function mf(e,t,n,r){var i=I,l=on.transition;on.transition=null;try{I=1,To(e,t,n,r)}finally{I=i,on.transition=l}}function pf(e,t,n,r){var i=I,l=on.transition;on.transition=null;try{I=4,To(e,t,n,r)}finally{I=i,on.transition=l}}function To(e,t,n,r){if(qr){var i=Il(e,t,n,r);if(i===null)rl(e,t,r,ei,n),Ea(e,r);else if(df(i,e,t,n,r))r.stopPropagation();else if(Ea(e,r),t&4&&-1<cf.indexOf(e)){for(;i!==null;){var l=mr(i);if(l!==null&&yu(l),l=Il(e,t,n,r),l===null&&rl(e,t,r,ei,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var ei=null;function Il(e,t,n,r){if(ei=null,e=Eo(r),e=_t(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ei=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case zo:return 1;case pu:return 4;case Jr:case tf:return 16;case hu:return 536870912;default:return 16}default:return 16}}var ot=null,bo=null,Dr=null;function Nu(){if(Dr)return Dr;var e,t=bo,n=t.length,r,i="value"in ot?ot.value:ot.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Pa(){return!1}function Ne(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cr:Pa,this.isPropagationStopped=Pa,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=Ne(yn),fr=W({},yn,{view:0,detail:0}),hf=Ne(fr),Gi,Yi,zn,ji=W({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Gi=e.screenX-zn.screenX,Yi=e.screenY-zn.screenY):Yi=Gi=0,zn=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),_a=Ne(ji),gf=W({},ji,{dataTransfer:0}),vf=Ne(gf),yf=W({},fr,{relatedTarget:0}),Xi=Ne(yf),xf=W({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Ne(xf),kf=W({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=Ne(kf),Sf=W({},yn,{data:0}),Ta=Ne(Sf),Nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ef[e])?!!t[e]:!1}function Ro(){return zf}var Pf=W({},fr,{key:function(e){if(e.key){var t=Nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=Ne(Pf),Tf=W({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=Ne(Tf),bf=W({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Lf=Ne(bf),Rf=W({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mf=Ne(Rf),Ff=W({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=Ne(Ff),Of=[9,13,27,32],Mo=Ge&&"CompositionEvent"in window,An=null;Ge&&"documentMode"in document&&(An=document.documentMode);var Af=Ge&&"TextEvent"in window&&!An,Cu=Ge&&(!Mo||An&&8<An&&11>=An),La=" ",Ra=!1;function Eu(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Df(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Ra=!0,La);case"textInput":return e=t.data,e===La&&Ra?null:e;default:return null}}function Uf(e,t){if(Qt)return e==="compositionend"||!Mo&&Eu(e,t)?(e=Nu(),Dr=bo=ot=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$f[e.type]:t==="textarea"}function Pu(e,t,n,r){lu(r),t=ti(t,"onChange"),0<t.length&&(n=new Lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Jn=null;function Bf(e){Du(e,0)}function Si(e){var t=Yt(e);if(Zs(t))return e}function Vf(e,t){if(e==="change")return t}var _u=!1;if(Ge){var Ji;if(Ge){var Zi="oninput"in document;if(!Zi){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),Zi=typeof Fa.oninput=="function"}Ji=Zi}else Ji=!1;_u=Ji&&(!document.documentMode||9<document.documentMode)}function Ia(){Dn&&(Dn.detachEvent("onpropertychange",Tu),Jn=Dn=null)}function Tu(e){if(e.propertyName==="value"&&Si(Jn)){var t=[];Pu(t,Jn,e,Eo(e)),uu(Bf,t)}}function Wf(e,t,n){e==="focusin"?(Ia(),Dn=t,Jn=n,Dn.attachEvent("onpropertychange",Tu)):e==="focusout"&&Ia()}function Hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Jn)}function Qf(e,t){if(e==="click")return Si(t)}function Kf(e,t){if(e==="input"||e==="change")return Si(t)}function Gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Gf;function Zn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!Oe(e[i],t[i]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=Lu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&Fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Aa(n,l);var a=Aa(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=Ge&&"documentMode"in document&&11>=document.documentMode,Kt=null,Ol=null,Un=null,Al=!1;function Da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||Kt==null||Kt!==Gr(r)||(r=Kt,"selectionStart"in r&&Fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Zn(Un,r)||(Un=r,r=ti(Ol,"onSelect"),0<r.length&&(t=new Lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},qi={},Ru={};Ge&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ni(e){if(qi[e])return qi[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ru)return qi[e]=t[n];return e}var Mu=Ni("animationend"),Fu=Ni("animationiteration"),Iu=Ni("animationstart"),Ou=Ni("transitionend"),Au=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Au.set(e,t),Dt(t,[e])}for(var el=0;el<Ua.length;el++){var tl=Ua[el],Jf=tl.toLowerCase(),Zf=tl[0].toUpperCase()+tl.slice(1);wt(Jf,"on"+Zf)}wt(Mu,"onAnimationEnd");wt(Fu,"onAnimationIteration");wt(Iu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Ou,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function Du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;$a(i,s,c),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;$a(i,s,c),l=u}}}if(Xr)throw e=Rl,Xr=!1,Rl=null,e}function A(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(Uu(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),Uu(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[zr]){e[zr]=!0,Ks.forEach(function(n){n!=="selectionchange"&&(qf.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,nl("selectionchange",!1,t))}}function Uu(e,t,n,r){switch(Su(t)){case 1:var i=mf;break;case 4:i=pf;break;default:i=To}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=_t(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}uu(function(){var c=l,g=Eo(n),p=[];e:{var h=Au.get(e);if(h!==void 0){var w=Lo,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":w=_f;break;case"focusin":y="focus",w=Xi;break;case"focusout":y="blur",w=Xi;break;case"beforeblur":case"afterblur":w=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Lf;break;case Mu:case Fu:case Iu:w=wf;break;case Ou:w=Mf;break;case"scroll":w=hf;break;case"wheel":w=If;break;case"copy":case"cut":case"paste":w=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ba}var k=(t&4)!==0,C=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var d=c,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Kn(d,f),v!=null&&k.push(er(d,v,m)))),C)break;d=d.return}0<k.length&&(h=new w(h,y,null,n,g),p.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Tl&&(y=n.relatedTarget||n.fromElement)&&(_t(y)||y[Ye]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?_t(y):null,y!==null&&(C=Ut(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(k=_a,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ba,v="onPointerLeave",f="onPointerEnter",d="pointer"),C=w==null?h:Yt(w),m=y==null?h:Yt(y),h=new k(v,d+"leave",w,n,g),h.target=C,h.relatedTarget=m,v=null,_t(g)===c&&(k=new k(f,d+"enter",y,n,g),k.target=m,k.relatedTarget=C,v=k),C=v,w&&y)t:{for(k=w,f=y,d=0,m=k;m;m=Vt(m))d++;for(m=0,v=f;v;v=Vt(v))m++;for(;0<d-m;)k=Vt(k),d--;for(;0<m-d;)f=Vt(f),m--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=Vt(k),f=Vt(f)}k=null}else k=null;w!==null&&Ba(p,h,w,k,!1),y!==null&&C!==null&&Ba(p,C,y,k,!0)}}e:{if(h=c?Yt(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var S=Vf;else if(Ma(h))if(_u)S=Kf;else{S=Hf;var P=Wf}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Qf);if(S&&(S=S(e,c))){Pu(p,S,n,g);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Cl(h,"number",h.value)}switch(P=c?Yt(c):window,e){case"focusin":(Ma(P)||P.contentEditable==="true")&&(Kt=P,Ol=c,Un=null);break;case"focusout":Un=Ol=Kt=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Da(p,n,g);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":Da(p,n,g)}var N;if(Mo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qt?Eu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Cu&&n.locale!=="ko"&&(Qt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qt&&(N=Nu()):(ot=g,bo="value"in ot?ot.value:ot.textContent,Qt=!0)),P=ti(c,E),0<P.length&&(E=new Ta(E,e,null,n,g),p.push({event:E,listeners:P}),N?E.data=N:(N=zu(n),N!==null&&(E.data=N)))),(N=Af?Df(e,n):Uf(e,n))&&(c=ti(c,"onBeforeInput"),0<c.length&&(g=new Ta("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:c}),g.data=N))}Du(p,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Kn(e,n),l!=null&&r.unshift(er(e,l,i)),l=Kn(e,t),l!=null&&r.push(er(e,l,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Kn(n,l),u!=null&&a.unshift(er(n,u,s))):i||(u=Kn(n,l),u!=null&&a.push(er(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Pr(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(j(425))}function ni(){}var Dl=null,Ul=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(im)}:Bl;function im(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+xn,tr="__reactProps$"+xn,Ye="__reactContainer$"+xn,Vl="__reactEvents$"+xn,lm="__reactListeners$"+xn,om="__reactHandles$"+xn;function _t(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[Ue])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ci(e){return e[tr]||null}var Wl=[],Xt=-1;function kt(e){return{current:e}}function D(e){0>Xt||(e.current=Wl[Xt],Wl[Xt]=null,Xt--)}function O(e,t){Xt++,Wl[Xt]=e.current,e.current=t}var xt={},se=kt(xt),he=kt(!1),Mt=xt;function cn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ri(){D(he),D(se)}function Qa(e,t,n){if(se.current!==xt)throw Error(j(168));O(se,t),O(he,n)}function $u(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Vd(e)||"Unknown",i));return W({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Mt=se.current,O(se,e),O(he,he.current),!0}function Ka(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=$u(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,D(he),D(se),O(se,e)):D(he),O(he,n)}var We=null,Ei=!1,ll=!1;function Bu(e){We===null?We=[e]:We.push(e)}function am(e){Ei=!0,Bu(e)}function jt(){if(!ll&&We!==null){ll=!0;var e=0,t=I;try{var n=We;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,Ei=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),mu(zo,jt),i}finally{I=t,ll=!1}}return null}var Jt=[],Zt=0,li=null,oi=0,Ce=[],Ee=0,Ft=null,He=1,Qe="";function Et(e,t){Jt[Zt++]=oi,Jt[Zt++]=li,li=e,oi=t}function Vu(e,t,n){Ce[Ee++]=He,Ce[Ee++]=Qe,Ce[Ee++]=Ft,Ft=e;var r=He;e=Qe;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var l=32-Fe(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,He=1<<32-Fe(t)+i|n<<i|r,Qe=l+e}else He=1<<l|n<<i|r,Qe=e}function Io(e){e.return!==null&&(Et(e,1),Vu(e,1,0))}function Oo(e){for(;e===li;)li=Jt[--Zt],Jt[Zt]=null,oi=Jt[--Zt],Jt[Zt]=null;for(;e===Ft;)Ft=Ce[--Ee],Ce[Ee]=null,Qe=Ce[--Ee],Ce[Ee]=null,He=Ce[--Ee],Ce[Ee]=null}var ke=null,we=null,U=!1,Me=null;function Wu(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ga(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(U){var t=we;if(t){var n=t;if(!Ga(e,t)){if(Hl(e))throw Error(j(418));t=ft(n.nextSibling);var r=ke;t&&Ga(e,t)?Wu(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(Hl(e))throw Error(j(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function _r(e){if(e!==ke)return!1;if(!U)return Ya(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=we)){if(Hl(e))throw Hu(),Error(j(418));for(;t;)Wu(e,t),t=ft(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ft(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=we;e;)e=ft(e.nextSibling)}function dn(){we=ke=null,U=!1}function Ao(e){Me===null?Me=[e]:Me.push(e)}var sm=Ze.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=i.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xa(e){var t=e._init;return t(e._payload)}function Qu(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=gt(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,v){return d===null||d.tag!==6?(d=fl(m,f.mode,v),d.return=f,d):(d=i(d,m),d.return=f,d)}function u(f,d,m,v){var S=m.type;return S===Ht?g(f,d,m.props.children,v,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&Xa(S)===d.type)?(v=i(d,m.props),v.ref=Pn(f,d,m),v.return=f,v):(v=Kr(m.type,m.key,m.props,null,f.mode,v),v.ref=Pn(f,d,m),v.return=f,v)}function c(f,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ml(m,f.mode,v),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function g(f,d,m,v,S){return d===null||d.tag!==7?(d=Rt(m,f.mode,v,S),d.return=f,d):(d=i(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fl(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return m=Kr(d.type,d.key,d.props,null,f.mode,m),m.ref=Pn(f,null,d),m.return=f,m;case Wt:return d=ml(d,f.mode,m),d.return=f,d;case nt:var v=d._init;return p(f,v(d._payload),m)}if(Ln(d)||Sn(d))return d=Rt(d,f.mode,m,null),d.return=f,d;Tr(f,d)}return null}function h(f,d,m,v){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(f,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:return m.key===S?u(f,d,m,v):null;case Wt:return m.key===S?c(f,d,m,v):null;case nt:return S=m._init,h(f,d,S(m._payload),v)}if(Ln(m)||Sn(m))return S!==null?null:g(f,d,m,v,null);Tr(f,m)}return null}function w(f,d,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return f=f.get(v.key===null?m:v.key)||null,u(d,f,v,S);case Wt:return f=f.get(v.key===null?m:v.key)||null,c(d,f,v,S);case nt:var P=v._init;return w(f,d,m,P(v._payload),S)}if(Ln(v)||Sn(v))return f=f.get(m)||null,g(d,f,v,S,null);Tr(d,v)}return null}function y(f,d,m,v){for(var S=null,P=null,N=d,E=d=0,F=null;N!==null&&E<m.length;E++){N.index>E?(F=N,N=null):F=N.sibling;var T=h(f,N,m[E],v);if(T===null){N===null&&(N=F);break}e&&N&&T.alternate===null&&t(f,N),d=l(T,d,E),P===null?S=T:P.sibling=T,P=T,N=F}if(E===m.length)return n(f,N),U&&Et(f,E),S;if(N===null){for(;E<m.length;E++)N=p(f,m[E],v),N!==null&&(d=l(N,d,E),P===null?S=N:P.sibling=N,P=N);return U&&Et(f,E),S}for(N=r(f,N);E<m.length;E++)F=w(N,f,E,m[E],v),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?E:F.key),d=l(F,d,E),P===null?S=F:P.sibling=F,P=F);return e&&N.forEach(function(ye){return t(f,ye)}),U&&Et(f,E),S}function k(f,d,m,v){var S=Sn(m);if(typeof S!="function")throw Error(j(150));if(m=S.call(m),m==null)throw Error(j(151));for(var P=S=null,N=d,E=d=0,F=null,T=m.next();N!==null&&!T.done;E++,T=m.next()){N.index>E?(F=N,N=null):F=N.sibling;var ye=h(f,N,T.value,v);if(ye===null){N===null&&(N=F);break}e&&N&&ye.alternate===null&&t(f,N),d=l(ye,d,E),P===null?S=ye:P.sibling=ye,P=ye,N=F}if(T.done)return n(f,N),U&&Et(f,E),S;if(N===null){for(;!T.done;E++,T=m.next())T=p(f,T.value,v),T!==null&&(d=l(T,d,E),P===null?S=T:P.sibling=T,P=T);return U&&Et(f,E),S}for(N=r(f,N);!T.done;E++,T=m.next())T=w(N,f,E,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?E:T.key),d=l(T,d,E),P===null?S=T:P.sibling=T,P=T);return e&&N.forEach(function(kn){return t(f,kn)}),U&&Et(f,E),S}function C(f,d,m,v){if(typeof m=="object"&&m!==null&&m.type===Ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:e:{for(var S=m.key,P=d;P!==null;){if(P.key===S){if(S=m.type,S===Ht){if(P.tag===7){n(f,P.sibling),d=i(P,m.props.children),d.return=f,f=d;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&Xa(S)===P.type){n(f,P.sibling),d=i(P,m.props),d.ref=Pn(f,P,m),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}m.type===Ht?(d=Rt(m.props.children,f.mode,v,m.key),d.return=f,f=d):(v=Kr(m.type,m.key,m.props,null,f.mode,v),v.ref=Pn(f,d,m),v.return=f,f=v)}return a(f);case Wt:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ml(m,f.mode,v),d.return=f,f=d}return a(f);case nt:return P=m._init,C(f,d,P(m._payload),v)}if(Ln(m))return y(f,d,m,v);if(Sn(m))return k(f,d,m,v);Tr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=fl(m,f.mode,v),d.return=f,f=d),a(f)):n(f,d)}return C}var fn=Qu(!0),Ku=Qu(!1),ai=kt(null),si=null,qt=null,Do=null;function Uo(){Do=qt=si=null}function $o(e){var t=ai.current;D(ai),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){si=e,Do=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(si===null)throw Error(j(308));qt=e,si.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Tt=null;function Bo(e){Tt===null?Tt=[e]:Tt.push(e)}function Gu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Bo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;rt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?l=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(l!==null){var p=i.baseState;a=0,g=c=u=null,s=l;do{var h=s.lane,w=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,k=s;switch(h=t,w=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){p=y.call(w,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,h=typeof y=="function"?y.call(w,p,h):y,h==null)break e;p=W({},p,h);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,u=p):g=g.next=w,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Ot|=a,e.lanes=a,e.memoizedState=p}}function Za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var pr={},Be=kt(pr),nr=kt(pr),rr=kt(pr);function bt(e){if(e===pr)throw Error(j(174));return e}function Wo(e,t){switch(O(rr,t),O(nr,e),O(Be,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}D(Be),O(Be,t)}function mn(){D(Be),D(nr),D(rr)}function Xu(e){bt(rr.current);var t=bt(Be.current),n=zl(t,e.type);t!==n&&(O(nr,e),O(Be,n))}function Ho(e){nr.current===e&&(D(Be),D(nr))}var B=kt(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function Qo(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var Br=Ze.ReactCurrentDispatcher,al=Ze.ReactCurrentBatchConfig,It=0,V=null,X=null,q=null,di=!1,$n=!1,ir=0,um=0;function le(){throw Error(j(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,l){if(It=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?mm:pm,e=n(r,i),$n){l=0;do{if($n=!1,ir=0,25<=l)throw Error(j(301));l+=1,q=X=null,t.updateQueue=null,Br.current=hm,e=n(r,i)}while($n)}if(Br.current=fi,t=X!==null&&X.next!==null,It=0,q=X=V=null,di=!1,t)throw Error(j(300));return e}function Yo(){var e=ir!==0;return ir=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Te(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(j(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function lr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Te(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=a=null,u=null,c=l;do{var g=c.lane;if((It&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,V.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==l);u===null?a=r:u.next=s,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,Ot|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=Te(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Oe(l,t.memoizedState)||(pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ju(){}function Zu(e,t){var n=V,r=Te(),i=t(),l=!Oe(r.memoizedState,i);if(l&&(r.memoizedState=i,pe=!0),r=r.queue,Xo(tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,or(9,ec.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(j(349));It&30||qu(n,t,i)}return i}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ec(e,t,n,r){t.value=n,t.getSnapshot=r,nc(t)&&rc(e)}function tc(e,t,n){return n(function(){nc(t)&&rc(e)})}function nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function rc(e){var t=Xe(e,1);t!==null&&Ie(t,e,1,-1)}function qa(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,V,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ic(){return Te().memoizedState}function Vr(e,t,n,r){var i=De();V.flags|=e,i.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function zi(e,t,n,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(X!==null){var a=X.memoizedState;if(l=a.destroy,r!==null&&Ko(r,a.deps)){i.memoizedState=or(t,n,l,r);return}}V.flags|=e,i.memoizedState=or(1|t,n,l,r)}function es(e,t){return Vr(8390656,8,e,t)}function Xo(e,t){return zi(2048,8,e,t)}function lc(e,t){return zi(4,2,e,t)}function oc(e,t){return zi(4,4,e,t)}function ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sc(e,t,n){return n=n!=null?n.concat([e]):null,zi(4,4,ac.bind(null,t,e),n)}function Jo(){}function uc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dc(e,t,n){return It&21?(Oe(n,t)||(n=gu(),V.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function cm(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{I=n,al.transition=r}}function fc(){return Te().memoizedState}function dm(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))pc(t,n);else if(n=Gu(e,t,n,r),n!==null){var i=ce();Ie(n,e,r,i),hc(n,t,r)}}function fm(e,t,n){var r=ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))pc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(i.hasEagerState=!0,i.eagerState=s,Oe(s,a)){var u=t.interleaved;u===null?(i.next=i,Bo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Gu(e,t,i,r),n!==null&&(i=ce(),Ie(n,e,r,i),hc(n,t,r))}}function mc(e){var t=e.alternate;return e===V||t!==null&&t===V}function pc(e,t){$n=di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var fi={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},mm={readContext:_e,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:qa,useDebugValue:Jo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=qa(!1),t=e[0];return e=cm.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=De();if(U){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ee===null)throw Error(j(349));It&30||qu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,es(tc.bind(null,r,l,e),[e]),r.flags|=2048,or(9,ec.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=De(),t=ee.identifierPrefix;if(U){var n=Qe,r=He;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:_e,useCallback:uc,useContext:_e,useEffect:Xo,useImperativeHandle:sc,useInsertionEffect:lc,useLayoutEffect:oc,useMemo:cc,useReducer:sl,useRef:ic,useState:function(){return sl(lr)},useDebugValue:Jo,useDeferredValue:function(e){var t=Te();return dc(t,X.memoizedState,e)},useTransition:function(){var e=sl(lr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Zu,useId:fc,unstable_isNewReconciler:!1},hm={readContext:_e,useCallback:uc,useContext:_e,useEffect:Xo,useImperativeHandle:sc,useInsertionEffect:lc,useLayoutEffect:oc,useMemo:cc,useReducer:ul,useRef:ic,useState:function(){return ul(lr)},useDebugValue:Jo,useDeferredValue:function(e){var t=Te();return X===null?t.memoizedState=e:dc(t,X.memoizedState,e)},useTransition:function(){var e=ul(lr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Zu,useId:fc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=ht(e),l=Ke(r,i);l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,i),t!==null&&(Ie(t,e,i,r),$r(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=ht(e),l=Ke(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,i),t!==null&&(Ie(t,e,i,r),$r(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=ht(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=mt(e,i,r),t!==null&&(Ie(t,e,r,n),$r(t,e,r))}};function ts(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,l):!0}function gc(e,t,n){var r=!1,i=xt,l=t.contextType;return typeof l=="object"&&l!==null?l=_e(l):(i=ge(t)?Mt:se.current,r=t.contextTypes,l=(r=r!=null)?cn(e,i):xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ns(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=_e(l):(l=ge(t)?Mt:se.current,i.context=cn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pi.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function vc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pi||(pi=!0,oo=r),Xl(e,t)},n}function yc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var vm=Ze.ReactCurrentOwner,pe=!1;function ue(e,t,n,r){t.child=e===null?Ku(t,null,n,r):fn(t,e.child,n,r)}function os(e,t,n,r,i){n=n.render;var l=t.ref;return an(t,i),r=Go(e,t,n,r,l,i),n=Yo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&n&&Io(t),t.flags|=1,ue(e,t,r,i),t.child)}function as(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!la(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,xc(e,t,l,r,i)):(e=Kr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(a,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function xc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Zn(l,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,i)}return Jl(e,t,n,r,i)}function wc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(tn,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(tn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(tn,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(tn,xe),xe|=r;return ue(e,t,i,n),t.child}function kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,i){var l=ge(n)?Mt:se.current;return l=cn(t,l),an(t,i),n=Go(e,t,n,r,l,i),r=Yo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&r&&Io(t),t.flags|=1,ue(e,t,n,i),t.child)}function ss(e,t,n,r,i){if(ge(n)){var l=!0;ii(t)}else l=!1;if(an(t,i),t.stateNode===null)Wr(e,t),gc(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Mt:se.current,c=cn(t,c));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ns(t,a,r,c),rt=!1;var h=t.memoizedState;a.state=h,ui(t,r,a,i),u=t.memoizedState,s!==r||h!==u||he.current||rt?(typeof g=="function"&&(Gl(t,n,g,r),u=t.memoizedState),(s=rt||ts(t,n,s,r,h,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Le(t.type,s),a.props=c,p=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Mt:se.current,u=cn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||h!==u)&&ns(t,a,r,u),rt=!1,h=t.memoizedState,a.state=h,ui(t,r,a,i);var y=t.memoizedState;s!==p||h!==y||he.current||rt?(typeof w=="function"&&(Gl(t,n,w,r),y=t.memoizedState),(c=rt||ts(t,n,c,r,h,y,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,l,i)}function Zl(e,t,n,r,i,l){kc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ka(t,n,!1),Je(e,t,l);r=t.stateNode,vm.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fn(t,e.child,null,l),t.child=fn(t,null,s,l)):ue(e,t,s,l),t.memoizedState=r.state,i&&Ka(t,n,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?Qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qa(e,t.context,!1),Wo(e,t.containerInfo)}function us(e,t,n,r,i){return dn(),Ao(i),t.flags|=256,ue(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sc(e,t,n){var r=t.pendingProps,i=B.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(B,i&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=bi(a,r,0,null),e=Rt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=eo(n),t.memoizedState=ql,e):Zo(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ym(e,t,a,r,s,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=gt(s,l):(l=Rt(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?eo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return l=e.child,e=l.sibling,r=gt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zo(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&Ao(r),fn(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(j(422))),br(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=bi({mode:"visible",children:r.children},i,0,null),l=Rt(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&fn(t,e.child,null,a),t.child.memoizedState=eo(a),t.memoizedState=ql,l);if(!(t.mode&1))return br(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(j(419)),r=cl(l,r,void 0),br(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),Ie(r,e,i,-1))}return ia(),r=cl(Error(j(421))),br(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,we=ft(i.nextSibling),ke=t,U=!0,Me=null,e!==null&&(Ce[Ee++]=He,Ce[Ee++]=Qe,Ce[Ee++]=Ft,He=e.id,Qe=e.overflow,Ft=t),t=Zo(t,r.children),t.flags|=4096,t)}function cs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function dl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,n,t);else if(e.tag===19)cs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ci(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,l);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xm(e,t,n){switch(t.tag){case 3:jc(t),dn();break;case 5:Xu(t);break;case 1:ge(t.type)&&ii(t);break;case 4:Wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(ai,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Sc(e,t,n):(O(B,B.current&1),e=Je(e,t,n),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,wc(e,t,n)}return Je(e,t,n)}var Cc,to,Ec,zc;Cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};Ec=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bt(Be.current);var l=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),l=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":i=El(e,i),r=El(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}Pl(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch(Oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&ri(),oe(t),null;case 3:return r=t.stateNode,mn(),D(he),D(se),Qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(uo(Me),Me=null))),to(e,t),oe(t),null;case 5:Ho(t);var i=bt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ec(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return oe(t),null}if(e=bt(Be.current),_r(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ue]=t,r[tr]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)A(Mn[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":xa(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":ka(r,l),A("invalid",r)}Pl(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),i=["children",""+s]):Hn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&A("scroll",r)}switch(n){case"input":wr(r),wa(r,l,!0);break;case"textarea":wr(r),ja(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ni)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ue]=t,e[tr]=r,Cc(e,t,!1,!1),t.stateNode=e;e:{switch(a=_l(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)A(Mn[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":xa(e,r),i=Sl(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":ka(e,r),i=El(e,r),A("invalid",e);break;default:i=r}Pl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?iu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Hn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&A("scroll",e):u!=null&&jo(e,l,u,a))}switch(n){case"input":wr(e),wa(e,r,!1);break;case"textarea":wr(e),ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=bt(rr.current),bt(Be.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return oe(t),null;case 13:if(D(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Hu(),dn(),t.flags|=98560,l=!1;else if(l=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Ue]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else Me!==null&&(uo(Me),Me=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?J===0&&(J=3):ia())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),to(e,t),e===null&&qn(t.stateNode.containerInfo),oe(t),null;case 10:return $o(t.type._context),oe(t),null;case 17:return ge(t.type)&&ri(),oe(t),null;case 19:if(D(B),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)_n(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ci(e),a!==null){for(t.flags|=128,_n(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(B,B.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>hn&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304)}else{if(!r)if(e=ci(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!U)return oe(t),null}else 2*G()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=B.current,O(B,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function km(e,t){switch(Oo(t),t.tag){case 1:return ge(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),D(he),D(se),Qo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(D(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(B),null;case 4:return mn(),null;case 10:return $o(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Lr=!1,ae=!1,jm=typeof WeakSet=="function"?WeakSet:Set,z=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){H(e,t,r)}}var ds=!1;function Sm(e,t){if(Dl=qr,e=Lu(),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,g=0,p=e,h=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==l||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=a),h===l&&++g===r&&(u=a),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},qr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,C=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=ds,ds=!1,y}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&no(t,n,l)}i=i.next}while(i!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[tr],delete t[Vl],delete t[lm],delete t[om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var te=null,Re=!1;function qe(e,t,n){for(n=n.child;n!==null;)Tc(e,t,n),n=n.sibling}function Tc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:ae||en(n,t);case 6:var r=te,i=Re;te=null,qe(e,t,n),te=r,Re=i,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Xn(e)):il(te,n.stateNode));break;case 4:r=te,i=Re,te=n.stateNode.containerInfo,Re=!0,qe(e,t,n),te=r,Re=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&no(n,t,a),i=i.next}while(i!==r)}qe(e,t,n);break;case 1:if(!ae&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,qe(e,t,n),ae=r):qe(e,t,n);break;default:qe(e,t,n)}}function ms(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jm),t.forEach(function(r){var i=Lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Re=!1;break e;case 3:te=s.stateNode.containerInfo,Re=!0;break e;case 4:te=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(te===null)throw Error(j(160));Tc(l,a,i),te=null,Re=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){H(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Ae(e),r&4){try{Bn(3,e,e.return),_i(3,e)}catch(k){H(e,e.return,k)}try{Bn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:be(t,e),Ae(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(be(t,e),Ae(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Qn(i,"")}catch(k){H(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&qs(i,l),_l(s,a);var c=_l(s,l);for(a=0;a<u.length;a+=2){var g=u[a],p=u[a+1];g==="style"?iu(i,p):g==="dangerouslySetInnerHTML"?nu(i,p):g==="children"?Qn(i,p):jo(i,g,p,c)}switch(s){case"input":Nl(i,l);break;case"textarea":eu(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?nn(i,!!l.multiple,w,!1):h!==!!l.multiple&&(l.defaultValue!=null?nn(i,!!l.multiple,l.defaultValue,!0):nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[tr]=l}catch(k){H(e,e.return,k)}}break;case 6:if(be(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){H(e,e.return,k)}}break;case 3:if(be(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:be(t,e),Ae(e);break;case 13:be(t,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ta=G())),r&4&&ms(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||g,be(t,e),ae=c):be(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(p=z=g;z!==null;){switch(h=z,w=h.child,h.tag){case 0:case 11:case 14:case 15:Bn(4,h,h.return);break;case 1:en(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:en(h,h.return);break;case 22:if(h.memoizedState!==null){hs(p);continue}}w!==null?(w.return=h,z=w):hs(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{i=p.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ru("display",a))}catch(k){H(e,e.return,k)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){H(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:be(t,e),Ae(e),r&4&&ms(e);break;case 21:break;default:be(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_c(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qn(i,""),r.flags&=-33);var l=fs(e);lo(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=fs(e);io(e,s,a);break;default:throw Error(j(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e,t,n){z=e,Lc(e)}function Lc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Lr;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ae;s=Lr;var c=ae;if(Lr=a,(ae=u)&&!c)for(z=i;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?gs(i):u!==null?(u.return=a,z=u):gs(i);for(;l!==null;)z=l,Lc(l),l=l.sibling;z=i,Lr=s,ae=c}ps(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):ps(e)}}function ps(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Za(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Za(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Xn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ae||t.flags&512&&ro(t)}catch(h){H(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function hs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function gs(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){H(t,i,u)}}var l=t.return;try{ro(t)}catch(u){H(t,l,u)}break;case 5:var a=t.return;try{ro(t)}catch(u){H(t,a,u)}}}catch(u){H(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Cm=Math.ceil,mi=Ze.ReactCurrentDispatcher,qo=Ze.ReactCurrentOwner,Pe=Ze.ReactCurrentBatchConfig,M=0,ee=null,Y=null,re=0,xe=0,tn=kt(0),J=0,ar=null,Ot=0,Ti=0,ea=0,Vn=null,me=null,ta=0,hn=1/0,Ve=null,pi=!1,oo=null,pt=null,Rr=!1,at=null,hi=0,Wn=0,ao=null,Hr=-1,Qr=0;function ce(){return M&6?G():Hr!==-1?Hr:Hr=G()}function ht(e){return e.mode&1?M&2&&re!==0?re&-re:sm.transition!==null?(Qr===0&&(Qr=gu()),Qr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function Ie(e,t,n,r){if(50<Wn)throw Wn=0,ao=null,Error(j(185));dr(e,n,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(Ti|=n),J===4&&lt(e,re)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(hn=G()+500,Ei&&jt()))}function ve(e,t){var n=e.callbackNode;sf(e,t);var r=Zr(e,e===ee?re:0);if(r===0)n!==null&&Ca(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ca(n),t===1)e.tag===0?am(vs.bind(null,e)):Bu(vs.bind(null,e)),rm(function(){!(M&6)&&jt()}),n=null;else{switch(vu(r)){case 1:n=zo;break;case 4:n=pu;break;case 16:n=Jr;break;case 536870912:n=hu;break;default:n=Jr}n=Uc(n,Rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rc(e,t){if(Hr=-1,Qr=0,M&6)throw Error(j(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Zr(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gi(e,r);else{t=r;var i=M;M|=2;var l=Fc();(ee!==e||re!==t)&&(Ve=null,hn=G()+500,Lt(e,t));do try{Pm();break}catch(s){Mc(e,s)}while(!0);Uo(),mi.current=l,M=i,Y!==null?t=0:(ee=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Ml(e),i!==0&&(r=i,t=so(e,i))),t===1)throw n=ar,Lt(e,0),lt(e,r),ve(e,G()),n;if(t===6)lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Em(i)&&(t=gi(e,r),t===2&&(l=Ml(e),l!==0&&(r=l,t=so(e,l))),t===1))throw n=ar,Lt(e,0),lt(e,r),ve(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:zt(e,me,Ve);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=ta+500-G(),10<t)){if(Zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(zt.bind(null,e,me,Ve),t);break}zt(e,me,Ve);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Fe(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){e.timeoutHandle=Bl(zt.bind(null,e,me,Ve),r);break}zt(e,me,Ve);break;case 5:zt(e,me,Ve);break;default:throw Error(j(329))}}}return ve(e,G()),e.callbackNode===n?Rc.bind(null,e):null}function so(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=gi(e,t),e!==2&&(t=me,me=n,t!==null&&uo(t)),e}function uo(e){me===null?me=e:me.push.apply(me,e)}function Em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Oe(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~ea,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function vs(e){if(M&6)throw Error(j(327));sn();var t=Zr(e,0);if(!(t&1))return ve(e,G()),null;var n=gi(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=so(e,r))}if(n===1)throw n=ar,Lt(e,0),lt(e,t),ve(e,G()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,me,Ve),ve(e,G()),null}function na(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(hn=G()+500,Ei&&jt())}}function At(e){at!==null&&at.tag===0&&!(M&6)&&sn();var t=M;M|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,M=t,!(M&6)&&jt()}}function ra(){xe=tn.current,D(tn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:mn(),D(he),D(se),Qo();break;case 5:Ho(r);break;case 4:mn();break;case 13:D(B);break;case 19:D(B);break;case 10:$o(r.type._context);break;case 22:case 23:ra()}n=n.return}if(ee=e,Y=e=gt(e.current,null),re=xe=t,J=0,ar=null,ea=Ti=Ot=0,me=Vn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}Tt=null}return e}function Mc(e,t){do{var n=Y;try{if(Uo(),Br.current=fi,di){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}di=!1}if(It=0,q=X=V=null,$n=!1,ir=0,qo.current=null,n===null||n.return===null){J=1,ar=t,Y=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=is(a);if(w!==null){w.flags&=-257,ls(w,a,s,l,t),w.mode&1&&rs(l,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){rs(l,c,t),ia();break e}u=Error(j(426))}}else if(U&&s.mode&1){var C=is(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ls(C,a,s,l,t),Ao(pn(u,s));break e}}l=u=pn(u,s),J!==4&&(J=2),Vn===null?Vn=[l]:Vn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=vc(l,u,t);Ja(l,f);break e;case 1:s=u;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pt===null||!pt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=yc(l,s,t);Ja(l,v);break e}}l=l.return}while(l!==null)}Oc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Fc(){var e=mi.current;return mi.current=fi,e===null?fi:e}function ia(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Ot&268435455)&&!(Ti&268435455)||lt(ee,re)}function gi(e,t){var n=M;M|=2;var r=Fc();(ee!==e||re!==t)&&(Ve=null,Lt(e,t));do try{zm();break}catch(i){Mc(e,i)}while(!0);if(Uo(),M=n,mi.current=r,Y!==null)throw Error(j(261));return ee=null,re=0,J}function zm(){for(;Y!==null;)Ic(Y)}function Pm(){for(;Y!==null&&!Zd();)Ic(Y)}function Ic(e){var t=Dc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Oc(e):Y=t,qo.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=km(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(n=wm(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function zt(e,t,n){var r=I,i=Pe.transition;try{Pe.transition=null,I=1,_m(e,t,n,r)}finally{Pe.transition=i,I=r}return null}function _m(e,t,n,r){do sn();while(at!==null);if(M&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(uf(e,l),e===ee&&(Y=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Uc(Jr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var a=I;I=1;var s=M;M|=4,qo.current=null,Sm(e,n),bc(n,e),Yf(Ul),qr=!!Dl,Ul=Dl=null,e.current=n,Nm(n),qd(),M=s,I=a,Pe.transition=l}else e.current=n;if(Rr&&(Rr=!1,at=e,hi=i),l=e.pendingLanes,l===0&&(pt=null),nf(n.stateNode),ve(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pi)throw pi=!1,e=oo,oo=null,e;return hi&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===ao?Wn++:(Wn=0,ao=e):Wn=0,jt(),null}function sn(){if(at!==null){var e=vu(hi),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,hi=0,M&6)throw Error(j(331));var i=M;for(M|=4,z=e.current;z!==null;){var l=z,a=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(z=c;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Bn(8,g,l)}var p=g.child;if(p!==null)p.return=g,z=p;else for(;z!==null;){g=z;var h=g.sibling,w=g.return;if(Pc(g),g===c){z=null;break}if(h!==null){h.return=w,z=h;break}z=w}}}var y=l.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}z=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,z=a;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,z=f;break e}z=l.return}}var d=e.current;for(z=d;z!==null;){a=z;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,z=m;else e:for(a=d;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_i(9,s)}}catch(S){H(s,s.return,S)}if(s===a){z=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}if(M=i,jt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function ys(e,t,n){t=pn(n,t),t=vc(e,t,1),e=mt(e,t,1),t=ce(),e!==null&&(dr(e,1,t),ve(e,t))}function H(e,t,n){if(e.tag===3)ys(e,e,n);else for(;t!==null;){if(t.tag===3){ys(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=pn(n,e),e=yc(t,e,1),t=mt(t,e,1),e=ce(),t!==null&&(dr(t,1,e),ve(t,e));break}}t=t.return}}function Tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>G()-ta?Lt(e,0):ea|=n),ve(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(dr(e,t,n),ve(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function Lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Ac(e,n)}var Dc;Dc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,xm(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&Vu(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var i=cn(t,se.current);an(t,n),i=Go(null,t,r,e,i,n);var l=Yo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,ii(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vo(t),i.updater=Pi,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Zl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&Io(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mm(r),e=Le(r,e),i){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=ss(null,t,r,e,n);break e;case 11:t=os(null,t,r,e,n);break e;case 14:t=as(null,t,r,Le(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Jl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),ss(e,t,r,i,n);case 3:e:{if(jc(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Yu(e,t),ui(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=pn(Error(j(423)),t),t=us(e,t,r,n,i);break e}else if(r!==i){i=pn(Error(j(424)),t),t=us(e,t,r,n,i);break e}else for(we=ft(t.stateNode.containerInfo.firstChild),ke=t,U=!0,Me=null,n=Ku(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=Je(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Xu(t),e===null&&Ql(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,$l(r,i)?a=null:l!==null&&$l(r,l)&&(t.flags|=32),kc(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&Ql(t),null;case 13:return Sc(e,t,n);case 4:return Wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),os(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,O(ai,r._currentValue),r._currentValue=a,l!==null)if(Oe(l.value,a)){if(l.children===i.children&&!he.current){t=Je(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ke(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Kl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Kl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=_e(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),as(e,t,r,i,n);case 15:return xc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Wr(e,t),t.tag=1,ge(r)?(e=!0,ii(t)):e=!1,an(t,n),gc(t,r,i),Yl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Nc(e,t,n);case 22:return wc(e,t,n)}throw Error(j(156,t.tag))};function Uc(e,t){return mu(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Rm(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mm(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===No)return 11;if(e===Co)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")la(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ht:return Rt(n.children,i,l,t);case So:a=8,i|=8;break;case xl:return e=ze(12,n,t,i|2),e.elementType=xl,e.lanes=l,e;case wl:return e=ze(13,n,t,i),e.elementType=wl,e.lanes=l,e;case kl:return e=ze(19,n,t,i),e.elementType=kl,e.lanes=l,e;case Xs:return bi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gs:a=10;break e;case Ys:a=9;break e;case No:a=11;break e;case Co:a=14;break e;case nt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Rt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Xs,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,i,l,a,s,u){return e=new Fm(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ze(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(l),e}function Im(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $c(e){if(!e)return xt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ge(n))return $u(e,n,t)}return t}function Bc(e,t,n,r,i,l,a,s,u){return e=oa(n,r,!0,e,i,l,a,s,u),e.context=$c(null),n=e.current,r=ce(),i=ht(n),l=Ke(r,i),l.callback=t??null,mt(n,l,i),e.current.lanes=i,dr(e,i,r),ve(e,r),e}function Li(e,t,n,r){var i=t.current,l=ce(),a=ht(i);return n=$c(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(i,t,a),e!==null&&(Ie(e,i,a,l),$r(e,i,a)),a}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function aa(e,t){xs(e,t),(e=e.alternate)&&xs(e,t)}function Om(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Ri.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Li(e,t,null,null)};Ri.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){Li(null,e,null,null)}),t[Ye]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&ju(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ws(){}function Am(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=vi(a);l.call(c)}}var a=Bc(t,r,e,0,null,!1,!1,"",ws);return e._reactRootContainer=a,e[Ye]=a.current,qn(e.nodeType===8?e.parentNode:e),At(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=vi(u);s.call(c)}}var u=oa(e,0,!1,null,null,!1,!1,"",ws);return e._reactRootContainer=u,e[Ye]=u.current,qn(e.nodeType===8?e.parentNode:e),At(function(){Li(t,u,n,r)}),u}function Fi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var s=i;i=function(){var u=vi(a);s.call(u)}}Li(t,a,e,i)}else a=Am(n,t,e,i,r);return vi(a)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(Po(t,n|1),ve(t,G()),!(M&6)&&(hn=G()+500,jt()))}break;case 13:At(function(){var r=Xe(e,1);if(r!==null){var i=ce();Ie(r,e,1,i)}}),aa(e,1)}};_o=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}aa(e,134217728)}};xu=function(e){if(e.tag===13){var t=ht(e),n=Xe(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}aa(e,t)}};wu=function(){return I};ku=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};bl=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(j(90));Zs(r),Nl(r,i)}}}break;case"textarea":eu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};au=na;su=At;var Dm={usingClientEntryPoint:!1,Events:[mr,Yt,Ci,lu,ou,na]},Tn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Um={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ki=Mr.inject(Um),$e=Mr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(j(200));return Im(e,t,null,n)};Se.createRoot=function(e,t){if(!ua(e))throw Error(j(299));var n=!1,r="",i=Vc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,qn(e.nodeType===8?e.parentNode:e),new sa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=du(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return At(e)};Se.hydrate=function(e,t,n){if(!Mi(t))throw Error(j(200));return Fi(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=Vc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bc(t,null,e,1,n??null,i,!1,l,a),e[Ye]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ri(t)};Se.render=function(e,t,n){if(!Mi(t))throw Error(j(200));return Fi(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(j(40));return e._reactRootContainer?(At(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=na;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Fi(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Ws.exports=Se;var $m=Ws.exports,ks=$m;vl.createRoot=ks.createRoot,vl.hydrateRoot=ks.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(null,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const js="popstate";function Bm(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:a,hash:s}=r.location;return co("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yi(i)}return Wm(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vm(){return Math.random().toString(36).substr(2,8)}function Ss(e,t){return{usr:e.state,key:e.key,idx:t}}function co(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wn(t):t,{state:n,key:t&&t.key||r||Vm()})}function yi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,s=st.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(sr({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function p(){s=st.Pop;let C=g(),f=C==null?null:C-c;c=C,u&&u({action:s,location:k.location,delta:f})}function h(C,f){s=st.Push;let d=co(k.location,C,f);c=g()+1;let m=Ss(d,c),v=k.createHref(d);try{a.pushState(m,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}l&&u&&u({action:s,location:k.location,delta:1})}function w(C,f){s=st.Replace;let d=co(k.location,C,f);c=g();let m=Ss(d,c),v=k.createHref(d);a.replaceState(m,"",v),l&&u&&u({action:s,location:k.location,delta:0})}function y(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:yi(C);return d=d.replace(/ $/,"%20"),Q(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(i,a)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(js,p),u=C,()=>{i.removeEventListener(js,p),u=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let f=y(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:w,go(C){return a.go(C)}};return k}var Ns;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ns||(Ns={}));function Hm(e,t,n){return n===void 0&&(n="/"),Qm(e,t,n)}function Qm(e,t,n,r){let i=typeof t=="string"?wn(t):t,l=gn(i.pathname||"/",n);if(l==null)return null;let a=Hc(e);Km(a);let s=null,u=ip(l);for(let c=0;s==null&&c<a.length;++c)s=np(a[c],u);return s}function Hc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,a,s)=>{let u={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};u.relativePath.startsWith("/")&&(Q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hc(l.children,t,g,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:ep(c,l.index),routesMeta:g})};return e.forEach((l,a)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,a);else for(let u of Qc(l.path))i(l,a,u)}),t}function Qc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=Qc(r.join("/")),s=[];return s.push(...a.map(u=>u===""?l:[l,u].join("/"))),i&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Km(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gm=/^:[\w-]+$/,Ym=3,Xm=2,Jm=1,Zm=10,qm=-2,Cs=e=>e==="*";function ep(e,t){let n=e.split("/"),r=n.length;return n.some(Cs)&&(r+=qm),t&&(r+=Xm),n.filter(i=>!Cs(i)).reduce((i,l)=>i+(Gm.test(l)?Ym:l===""?Jm:Zm),r)}function tp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function np(e,t,n){let{routesMeta:r}=e,i={},l="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",p=fo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),h=u.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:vt([l,p.pathname]),pathnameBase:up(vt([l,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(l=vt([l,p.pathnameBase]))}return a}function fo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,p)=>{let{paramName:h,isOptional:w}=g;if(h==="*"){let k=s[p]||"";a=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const y=s[p];return w&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:a,pattern:e}}function rp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ip(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,op=e=>lp.test(e);function ap(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wn(e):e,l;if(n)if(op(n))l=n;else{if(n.includes("//")){let a=n;n=Yc(n),ca(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?l=Es(n.substring(1),"/"):l=Es(n,t)}else l=t;return{pathname:l,search:cp(r),hash:dp(i)}}function Es(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kc(e,t){let n=sp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wn(e):(i=sr({},e),Q(!i.pathname||!i.pathname.includes("?"),pl("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),pl("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),pl("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}s=p>=0?t[p]:"/"}let u=ap(i,s),c=a&&a!=="/"&&a.endsWith("/"),g=(l||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Yc=e=>e.replace(/\/\/+/g,"/"),vt=e=>Yc(e.join("/")),up=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xc=["post","put","patch","delete"];new Set(Xc);const mp=["get",...Xc];new Set(mp);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(null,arguments)}const Ii=x.createContext(null),Jc=x.createContext(null),St=x.createContext(null),Oi=x.createContext(null),$t=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Zc=x.createContext(null);function pp(e,t){let{relative:n}=t===void 0?{}:t;hr()||Q(!1);let{basename:r,navigator:i}=x.useContext(St),{hash:l,pathname:a,search:s}=Ai(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:vt([r,a])),i.createHref({pathname:u,search:s,hash:l})}function hr(){return x.useContext(Oi)!=null}function Bt(){return hr()||Q(!1),x.useContext(Oi).location}function qc(e){x.useContext(St).static||x.useLayoutEffect(e)}function hp(){let{isDataRoute:e}=x.useContext($t);return e?Pp():gp()}function gp(){hr()||Q(!1);let e=x.useContext(Ii),{basename:t,future:n,navigator:r}=x.useContext(St),{matches:i}=x.useContext($t),{pathname:l}=Bt(),a=JSON.stringify(Kc(i,n.v7_relativeSplatPath)),s=x.useRef(!1);return qc(()=>{s.current=!0}),x.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=Gc(c,JSON.parse(a),l,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vt([t,p.pathname])),(g.replace?r.replace:r.push)(p,g.state,g)},[t,r,a,l,e])}function Ai(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(St),{matches:i}=x.useContext($t),{pathname:l}=Bt(),a=JSON.stringify(Kc(i,r.v7_relativeSplatPath));return x.useMemo(()=>Gc(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function vp(e,t){return yp(e,t)}function yp(e,t,n,r){hr()||Q(!1);let{navigator:i}=x.useContext(St),{matches:l}=x.useContext($t),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Bt(),g;if(t){var p;let C=typeof t=="string"?wn(t):t;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Q(!1),g=C}else g=c;let h=g.pathname||"/",w=h;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Hm(e,{pathname:w}),k=Sp(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:vt([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:vt([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&k?x.createElement(Oi.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:st.Pop}},k):k}function xp(){let e=zp(),t=fp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const wp=x.createElement(xp,null);class kp extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement($t.Provider,{value:this.props.routeContext},x.createElement(Zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jp(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Ii);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement($t.Provider,{value:t},r)}function Sp(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);g>=0||Q(!1),a=a.slice(0,Math.min(a.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let p=a[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=g),p.route.id){let{loaderData:h,errors:w}=n,y=p.route.loader&&h[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,p,h)=>{let w,y=!1,k=null,C=null;n&&(w=s&&p.route.id?s[p.route.id]:void 0,k=p.route.errorElement||wp,u&&(c<0&&h===0?(_p("route-fallback"),y=!0,C=null):c===h&&(y=!0,C=p.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,h+1)),d=()=>{let m;return w?m=k:y?m=C:p.route.Component?m=x.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=g,x.createElement(jp,{match:p,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?x.createElement(kp,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var ed=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ed||{}),td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(td||{});function Np(e){let t=x.useContext(Ii);return t||Q(!1),t}function Cp(e){let t=x.useContext(Jc);return t||Q(!1),t}function Ep(e){let t=x.useContext($t);return t||Q(!1),t}function nd(e){let t=Ep(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function zp(){var e;let t=x.useContext(Zc),n=Cp(),r=nd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Pp(){let{router:e}=Np(ed.UseNavigateStable),t=nd(td.UseNavigateStable),n=x.useRef(!1);return qc(()=>{n.current=!0}),x.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ur({fromRouteId:t},l)))},[e,t])}const zs={};function _p(e,t,n){zs[e]||(zs[e]=!0)}function Tp(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function tt(e){Q(!1)}function bp(e){let{basename:t="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:l,static:a=!1,future:s}=e;hr()&&Q(!1);let u=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:u,navigator:l,static:a,future:ur({v7_relativeSplatPath:!1},s)}),[u,s,l,a]);typeof r=="string"&&(r=wn(r));let{pathname:g="/",search:p="",hash:h="",state:w=null,key:y="default"}=r,k=x.useMemo(()=>{let C=gn(g,u);return C==null?null:{location:{pathname:C,search:p,hash:h,state:w,key:y},navigationType:i}},[u,g,p,h,w,y,i]);return k==null?null:x.createElement(St.Provider,{value:c},x.createElement(Oi.Provider,{children:n,value:k}))}function Lp(e){let{children:t,location:n}=e;return vp(mo(t),n)}new Promise(()=>{});function mo(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let l=[...t,i];if(r.type===x.Fragment){n.push.apply(n,mo(r.props.children,l));return}r.type!==tt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=mo(r.props.children,l)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(null,arguments)}function rd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Rp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mp(e,t){return e.button===0&&(!t||t==="_self")&&!Rp(e)}const Fp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ip=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Op="6";try{window.__reactRouterVersion=Op}catch{}const Ap=x.createContext({isTransitioning:!1}),Dp="startTransition",Ps=_d[Dp];function Up(e){let{basename:t,children:n,future:r,window:i}=e,l=x.useRef();l.current==null&&(l.current=Bm({window:i,v5Compat:!0}));let a=l.current,[s,u]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},g=x.useCallback(p=>{c&&Ps?Ps(()=>u(p)):u(p)},[u,c]);return x.useLayoutEffect(()=>a.listen(g),[a,g]),x.useEffect(()=>Tp(r),[r]),x.createElement(bp,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const $p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fn=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:s,target:u,to:c,preventScrollReset:g,viewTransition:p}=t,h=rd(t,Fp),{basename:w}=x.useContext(St),y,k=!1;if(typeof c=="string"&&Bp.test(c)&&(y=c,$p))try{let m=new URL(window.location.href),v=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=gn(v.pathname,w);v.origin===m.origin&&S!=null?c=S+v.search+v.hash:k=!0}catch{}let C=pp(c,{relative:i}),f=Wp(c,{replace:a,state:s,target:u,preventScrollReset:g,relative:i,viewTransition:p});function d(m){r&&r(m),m.defaultPrevented||f(m)}return x.createElement("a",xi({},h,{href:y||C,onClick:k||l?r:d,ref:n,target:u}))}),ne=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:s,to:u,viewTransition:c,children:g}=t,p=rd(t,Ip),h=Ai(u,{relative:p.relative}),w=Bt(),y=x.useContext(Jc),{navigator:k,basename:C}=x.useContext(St),f=y!=null&&Hp(h)&&c===!0,d=k.encodeLocation?k.encodeLocation(h).pathname:h.pathname,m=w.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(m=m.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&C&&(v=gn(v,C)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=m===d||!a&&m.startsWith(d)&&m.charAt(S)==="/",N=v!=null&&(v===d||!a&&v.startsWith(d)&&v.charAt(d.length)==="/"),E={isActive:P,isPending:N,isTransitioning:f},F=P?r:void 0,T;typeof l=="function"?T=l(E):T=[l,P?"active":null,N?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ye=typeof s=="function"?s(E):s;return x.createElement(Fn,xi({},p,{"aria-current":F,className:T,ref:n,style:ye,to:u,viewTransition:c}),typeof g=="function"?g(E):g)});var po;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(po||(po={}));var _s;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_s||(_s={}));function Vp(e){let t=x.useContext(Ii);return t||Q(!1),t}function Wp(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:s}=t===void 0?{}:t,u=hp(),c=Bt(),g=Ai(e,{relative:a});return x.useCallback(p=>{if(Mp(p,n)){p.preventDefault();let h=r!==void 0?r:yi(c)===yi(g);u(e,{replace:h,state:i,preventScrollReset:l,relative:a,viewTransition:s})}},[c,u,g,r,i,n,e,l,a,s])}function Hp(e,t){t===void 0&&(t={});let n=x.useContext(Ap);n==null&&Q(!1);let{basename:r}=Vp(po.useViewTransitionState),i=Ai(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fo(i.pathname,a)!=null||fo(i.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,t)=>{const n=x.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:s="",children:u,...c},g)=>x.createElement("svg",{ref:g,...Qp,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Kp(e)}`,s].join(" "),...c},[...t.map(([p,h])=>x.createElement(p,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=$("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=$("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=$("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=$("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=$("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=$("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=$("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=$("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=$("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=$("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=$("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=$("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=$("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=$("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=$("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ih(){const[e,t]=x.useState([]),[n,r]=x.useState(!1),i=s=>{e.includes(s)||t([...e,s])},l=()=>{t([]),r(!1)},a=()=>{e.includes("Block Ice")&&r(!0)};return o.jsxs("div",{className:"home-container",children:[o.jsxs("section",{className:"hero",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"badge animate-fade",children:[o.jsx(ld,{size:16})," Three Generations Since 1940"]}),o.jsxs("h1",{children:["Taiping's Favourite Cendol ",o.jsx("br",{}),o.jsx("span",{children:"Since 1940"})]}),o.jsx("p",{children:"A family-run Indian-Muslim (Mamak) stall serving simple, refreshing cendol with a traditional recipe passed down through generations. Drop by for a cool bowl, a quick chat, or an easy takeaway in Taiping."}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs(Fn,{to:"/menu",className:"btn-primary",children:["View Our Menu ",o.jsx(hl,{size:20})]}),o.jsx(Fn,{to:"/story",className:"btn-secondary",children:"Discover Our Story"})]})]}),o.jsxs("div",{className:"hero-image-container",children:[o.jsx("img",{src:"/images/shop-pic.png",alt:"Ansari's Famous Cendol Storefront",className:"hero-image"}),o.jsxs("div",{className:"hero-floating-card glass-card",children:[o.jsxs("div",{className:"stars",children:[o.jsx(Pt,{size:16,fill:"currentColor"}),o.jsx(Pt,{size:16,fill:"currentColor"}),o.jsx(Pt,{size:16,fill:"currentColor"}),o.jsx(Pt,{size:16,fill:"currentColor"}),o.jsx(Pt,{size:16,fill:"currentColor"})]}),o.jsx("p",{children:`"A must-visit whenever I'm in Taiping."`}),o.jsx("span",{children:"— Customer experience"})]})]})]}),o.jsxs("section",{className:"ingredients-spotlight",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Made the familiar way"}),o.jsx("h2",{className:"section-title",children:"What Goes Into a Bowl"}),o.jsx("p",{className:"section-desc",children:"Straightforward ingredients and traditional preparation make each bowl cool, sweet, and satisfying."})]}),o.jsxs("div",{className:"ingredients-grid",children:[o.jsxs("div",{className:"ingredient-card glass-card",children:[o.jsx("div",{className:"ingredient-num",children:"01"}),o.jsx("h3",{children:"Pandan Noodles"}),o.jsx("p",{children:"Green cendol noodles give every bowl its familiar pandan flavour and gentle bite."})]}),o.jsxs("div",{className:"ingredient-card glass-card",children:[o.jsx("div",{className:"ingredient-num",children:"02"}),o.jsx("h3",{children:"Gula Melaka Syrup"}),o.jsx("p",{children:"Palm sugar syrup brings the deep, comforting sweetness that regulars remember."})]}),o.jsxs("div",{className:"ingredient-card glass-card",children:[o.jsx("div",{className:"ingredient-num",children:"03"}),o.jsx("h3",{children:"Creamy Coconut Milk"}),o.jsx("p",{children:"Coconut milk and shaved ice keep the bowl refreshing in Taiping's warm weather."})]})]})]}),o.jsx("section",{className:"heritage-intro",children:o.jsxs("div",{className:"heritage-intro-grid",children:[o.jsx("div",{className:"heritage-intro-image",children:o.jsx("img",{src:"/images/image3.jpg",alt:"Historical Drawing of Ansari Cendol",className:"sketch-img"})}),o.jsxs("div",{className:"heritage-intro-text",children:[o.jsx("span",{className:"section-subtitle",children:"Since 1940"}),o.jsx("h2",{children:"A Family Tradition, One Bowl at a Time"}),o.jsx("p",{children:"Ansari's Famous Cendol has been part of everyday Taiping life since the 1940s. Its Indian-Muslim family roots and traditional way of serving cendol have kept generations of locals coming back."}),o.jsx("p",{children:"Today, the family continues the simple routine: prepare, serve, and welcome everyone looking for a refreshing bowl at a fair price."}),o.jsxs(Fn,{to:"/story",className:"link-button",children:["Read the Full Story ",o.jsx(hl,{size:16})]})]})]})}),o.jsx("section",{className:"ingredients-spotlight",children:o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Before You Visit"}),o.jsx("h2",{className:"section-title",children:"A Few Helpful Things to Know"}),o.jsx("p",{className:"section-desc",children:"Seating is limited and first-come, first-served. Peak times can mean a short wait, and takeaway orders are common. Popular flavours—especially Cendol Pulut—may sell out before closing, so visiting earlier is a good idea."}),o.jsxs(Fn,{to:"/visit",className:"link-button",children:["Plan Your Visit ",o.jsx(hl,{size:16})]})]})}),o.jsxs("section",{className:"interactive-bowl-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Interactive Recipe"}),o.jsx("h2",{className:"section-title",children:"Build Your Own Virtual Bowl"}),o.jsx("p",{className:"section-desc",children:"Follow the traditional preparation steps to create a perfect Malaysian Cendol."})]}),o.jsxs("div",{className:"bowl-builder-container glass-card",children:[o.jsxs("div",{className:"ingredients-selectors",children:[o.jsx("h4",{children:"Select Ingredients in Order:"}),o.jsx("button",{className:`select-btn ${e.includes("Green Noodles (Cendol)")?"active":""}`,onClick:()=>i("Green Noodles (Cendol)"),children:"1. Add Pandan Noodles"}),o.jsx("button",{className:`select-btn ${e.includes("Red Beans")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Red Beans"),children:"2. Add Red Beans"}),o.jsx("button",{className:`select-btn ${e.includes("Glutinous Rice (Pulut)")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Glutinous Rice (Pulut)"),children:"3. Add Glutinous Rice (Pulut)"}),o.jsx("button",{className:`select-btn ${e.includes("Block Ice")?"active":""}`,disabled:!e.includes("Green Noodles (Cendol)"),onClick:()=>i("Block Ice"),children:"4. Shave Block Ice"}),o.jsx("button",{className:`select-btn ${e.includes("Coconut Milk")?"active":""}`,disabled:!e.includes("Block Ice"),onClick:()=>i("Coconut Milk"),children:"5. Pour Fresh Coconut Milk"}),o.jsx("button",{className:`select-btn ${n?"active":""}`,disabled:!e.includes("Coconut Milk"),onClick:a,children:"6. Drizzle Gula Melaka Syrup"}),o.jsx("button",{className:"clear-btn",onClick:l,children:"Reset Bowl"})]}),o.jsxs("div",{className:"bowl-visualizer",children:[o.jsx("div",{className:"bowl-rim",children:o.jsxs("div",{className:"bowl-contents",children:[e.includes("Green Noodles (Cendol)")&&o.jsxs("div",{className:"visual-pandan-noodles animate-drop",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),e.includes("Red Beans")&&o.jsxs("div",{className:"visual-beans animate-drop",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),e.includes("Glutinous Rice (Pulut)")&&o.jsx("div",{className:"visual-pulut animate-drop"}),e.includes("Block Ice")&&o.jsx("div",{className:"visual-ice animate-drop",children:o.jsx("div",{className:"ice-mound"})}),e.includes("Coconut Milk")&&o.jsx("div",{className:"visual-coconut-milk animate-fill"}),n&&o.jsx("div",{className:"visual-gula-melaka animate-syrup"})]})}),o.jsxs("div",{className:"bowl-status",children:[e.length===0&&o.jsx("p",{className:"status-text",children:'Select "Pandan Noodles" to begin your bowl!'}),e.length>0&&e.length<5&&o.jsx("p",{className:"status-text",children:"Bowl in preparation... Keep adding ingredients!"}),e.length>=5&&!n&&o.jsx("p",{className:"status-text",children:"Almost ready! Don't forget to drizzle the Gula Melaka syrup!"}),n&&o.jsxs("p",{className:"status-text success-text",children:[o.jsx(th,{size:18})," Deliciously Complete! Ready to serve. Enjoy your cold dessert!"]})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})}function lh(){return o.jsxs("div",{className:"story-container",children:[o.jsx("section",{className:"story-hero",children:o.jsxs("div",{className:"story-hero-content",children:[o.jsx("span",{className:"section-subtitle",children:"Since 1940"}),o.jsx("h1",{children:"Our Story"}),o.jsx("p",{className:"hero-lead",children:"A family-run Indian-Muslim (Mamak) cendol stall that has been part of Taiping life for generations."})]})}),o.jsx("section",{className:"history-chapter",children:o.jsxs("div",{className:"chapter-grid",children:[o.jsxs("div",{className:"chapter-text",children:[o.jsx("h2",{children:"A Taiping Family Tradition"}),o.jsx("p",{children:"Ansari's Famous Cendol began as a humble family street-food business in Taiping in the 1940s. Its Indian-Muslim roots, familiar flavours, and straightforward service have made it a local favourite across generations."}),o.jsxs("p",{children:["From its Taiping home at ",o.jsx("strong",{children:"92, Jalan Barrack"}),", the stall continues to offer a simple place to cool down, catch up, and enjoy traditional cendol. It is the kind of everyday stop that locals remember and visitors are glad to discover."]}),o.jsxs("div",{className:"story-quote glass-card",children:[o.jsx(Pt,{size:24,className:"quote-icon"}),o.jsx("p",{children:'"The cendol tastes exactly like I remember from childhood."'})]})]}),o.jsxs("div",{className:"chapter-image",children:[o.jsx("img",{src:"/images/image3.jpg",alt:"Vintage Drawing of P.M. Abdul Kader Stall",className:"heritage-photo"}),o.jsx("span",{className:"image-caption",children:"A glimpse of the family street-food tradition behind every bowl."})]})]})}),o.jsxs("section",{className:"timeline-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Our Journey"}),o.jsx("h2",{className:"section-title",children:"Generations of Familiar Flavour"}),o.jsx("p",{className:"section-desc",children:"A long-standing family recipe, prepared simply for the Taiping community."})]}),o.jsxs("div",{className:"timeline",children:[o.jsxs("div",{className:"timeline-item left",children:[o.jsx("div",{className:"timeline-dot",children:o.jsx(Fr,{size:16})}),o.jsxs("div",{className:"timeline-content glass-card",children:[o.jsx("span",{className:"timeline-date",children:"1940s"}),o.jsx("h3",{children:"The Arrival"}),o.jsx("p",{children:"The family starts serving traditional cendol in Taiping, building a following one bowl at a time."})]})]}),o.jsxs("div",{className:"timeline-item right",children:[o.jsx("div",{className:"timeline-dot",children:o.jsx(Fr,{size:16})}),o.jsxs("div",{className:"timeline-content glass-card",children:[o.jsx("span",{className:"timeline-date",children:"1970s"}),o.jsx("h3",{children:"Keeping It Familiar"}),o.jsx("p",{children:"The next generation carries on the family recipe and the small-stall spirit that regulars know."})]})]}),o.jsxs("div",{className:"timeline-item left",children:[o.jsx("div",{className:"timeline-dot",children:o.jsx(Fr,{size:16})}),o.jsxs("div",{className:"timeline-content glass-card",children:[o.jsx("span",{className:"timeline-date",children:"2000s"}),o.jsx("h3",{children:"Growing With the Community"}),o.jsx("p",{children:"Word of mouth brings families, friends, and visitors back for a refreshing, affordable bowl."})]})]}),o.jsxs("div",{className:"timeline-item right",children:[o.jsx("div",{className:"timeline-dot",children:o.jsx(Fr,{size:16})}),o.jsxs("div",{className:"timeline-content glass-card",children:[o.jsx("span",{className:"timeline-date",children:"Present Day"}),o.jsx("h3",{children:"Still Serving Taiping"}),o.jsx("p",{children:"The family keeps the focus on the Taiping stall: traditional cendol, honest portions, and familiar faces."})]})]})]})]}),o.jsxs("section",{className:"family-legacy-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"The Family Behind the Stall"}),o.jsx("h2",{className:"section-title",children:"The Family Lineage"}),o.jsx("p",{className:"section-desc",children:"A family tradition passed from one generation to the next."})]}),o.jsxs("div",{className:"family-tree",children:[o.jsxs("div",{className:"tree-node glass-card",children:[o.jsx("div",{className:"node-icon",children:o.jsx(gl,{size:24})}),o.jsx("span",{className:"node-title",children:"The Initiator"}),o.jsx("h3",{children:"P.M. Abdul Kader"}),o.jsx("span",{className:"node-period",children:"1940s - 1970s"}),o.jsx("p",{children:"Helped establish the family tradition of serving cendol in Taiping."})]}),o.jsx("div",{className:"tree-connector"}),o.jsxs("div",{className:"tree-node glass-card",children:[o.jsx("div",{className:"node-icon",children:o.jsx(gl,{size:24})}),o.jsx("span",{className:"node-title",children:"The Next Generation"}),o.jsx("h3",{children:"S.M. Abdul Rahman"}),o.jsx("span",{className:"node-period",children:"1970s - 2000s"}),o.jsx("p",{children:"Continued the traditional recipe and the family-run way of serving customers."})]}),o.jsx("div",{className:"tree-connector"}),o.jsxs("div",{className:"tree-node glass-card highlight-node",children:[o.jsx("div",{className:"node-icon",children:o.jsx(gl,{size:24})}),o.jsx("span",{className:"node-title",children:"Keeping the Tradition Going"}),o.jsx("h3",{children:"Ansari Abdul Rahman"}),o.jsx("span",{className:"node-period",children:"2000s - Present"}),o.jsx("p",{children:"Keeps the Taiping stall welcoming for regulars and first-time visitors alike."})]})]})]}),o.jsx("section",{className:"secret-showcase",children:o.jsxs("div",{className:"secret-grid",children:[o.jsx("div",{className:"secret-image",children:o.jsx("img",{src:"/images/image1.jpg",alt:"Ansari preparing Cendol",className:"heritage-photo heritage-photo-portrait"})}),o.jsxs("div",{className:"secret-content",children:[o.jsx("h2",{children:"Made the Traditional Way"}),o.jsx("p",{children:"The taste people know comes from a family recipe and a simple, careful preparation passed down over time."}),o.jsx("p",{children:"Green cendol, shaved ice, coconut milk, and palm sugar come together in the familiar balance that makes a hot day in Taiping feel a little easier."}),o.jsxs("div",{className:"heritage-seal",children:[o.jsx(ld,{size:36}),o.jsxs("div",{children:[o.jsx("h4",{children:"Family-Run Since 1940"}),o.jsx("p",{children:"Traditional cendol served simply for the Taiping community."})]})]})]})]})}),o.jsx("style",{children:`
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
      `})]})}const oh=[{id:1,name:"Biasa",description:"Classic bowl of Ansari Famous Cendol.",price:2,category:"cendol",tag:"Classic",badge:"Original"},{id:2,name:"Berkacang",description:"Cendol served with red beans.",price:2.2,category:"cendol",tag:"Popular"},{id:3,name:"Berjagung",description:"Cendol served with sweet corn.",price:2.2,category:"cendol"},{id:4,name:"Berpulut",description:"Cendol served with glutinous rice.",price:2.6,category:"cendol",tag:"Popular"},{id:5,name:"Kacang & Jagung",description:"Cendol served with red beans and sweet corn.",price:2.4,category:"cendol"},{id:6,name:"Kacang & Pulut",description:"Cendol served with red beans and glutinous rice.",price:2.8,category:"cendol"},{id:7,name:"Kacang & Pulut & Jagung (SP)",description:"Special cendol with red beans, glutinous rice, and sweet corn.",price:3,category:"cendol",badge:"Special"},{id:8,name:"Take Away Cendol Kecil",description:"Small packed cendol for take away.",price:2.5,category:"takeaway"},{id:9,name:"Take Away Cendol Berkacang",description:"Packed cendol with red beans for take away.",price:2.7,category:"takeaway"},{id:10,name:"Take Away Cendol Besar",description:"Large packed cendol for take away.",price:4.4,category:"takeaway"},{id:11,name:"Take Away Cendol Besar Berkacang",description:"Large packed cendol with red beans for take away.",price:4.7,category:"takeaway"},{id:12,name:"Pasembor",description:"Pasembor served packed or plated.",price:4.7,category:"savory",tag:"Local Favorite"}];function ah(){const[e,t]=x.useState([]),[n,r]=x.useState("all"),[i,l]=x.useState(!0),[a,s]=x.useState(!1);x.useEffect(()=>{fetch("/api/menu").then(c=>{if(!c.ok)throw new Error("API server down");return c.json()}).then(c=>{t(c),l(!1)}).catch(()=>{t(oh),l(!1),s(!0)})},[]);const u=n==="all"?e:e.filter(c=>c.category===n);return o.jsxs("div",{className:"menu-container",children:[o.jsx("section",{className:"menu-hero",children:o.jsxs("div",{className:"menu-hero-content",children:[o.jsx("span",{className:"section-subtitle",children:"Freshly Served Daily"}),o.jsx("h1",{children:"Our Menu"}),o.jsx("p",{children:"Choose a classic bowl, add your favourite topping, or take it away. Traditional cendol and Pasembor, served simply in Taiping."})]})}),o.jsxs("section",{className:"menu-section",children:[o.jsxs("div",{className:"category-filters",children:[o.jsx("button",{className:`filter-btn ${n==="all"?"active":""}`,onClick:()=>r("all"),children:"All Items"}),o.jsx("button",{className:`filter-btn ${n==="cendol"?"active":""}`,onClick:()=>r("cendol"),children:"Iced Cendol"}),o.jsx("button",{className:`filter-btn ${n==="savory"?"active":""}`,onClick:()=>r("savory"),children:"Savory Pasembur"}),o.jsx("button",{className:`filter-btn ${n==="takeaway"?"active":""}`,onClick:()=>r("takeaway"),children:"Take Away"})]}),a&&o.jsxs("div",{className:"api-notice",children:[o.jsx("span",{className:"notice-badge",children:"Offline Mode"}),o.jsx("p",{children:"Showing the stall menu while the menu service is unavailable."})]}),o.jsx("div",{className:"menu-grid",children:i?Array(4).fill(0).map((c,g)=>o.jsxs("div",{className:"menu-card glass-card loading-card",children:[o.jsx("div",{className:"loading-line title"}),o.jsx("div",{className:"loading-line desc"}),o.jsx("div",{className:"loading-line price"})]},g)):u.map(c=>o.jsxs("div",{className:"menu-card glass-card",children:[c.badge&&o.jsx("span",{className:"menu-card-badge",children:c.badge}),o.jsxs("div",{className:"menu-card-header",children:[o.jsx("h3",{children:c.name}),o.jsxs("span",{className:"menu-card-price",children:["RM ",c.price.toFixed(2)]})]}),c.tag&&o.jsxs("span",{className:"menu-card-tag",children:[o.jsx(Pt,{size:12,fill:"currentColor"})," ",c.tag]}),o.jsx("p",{className:"menu-card-desc",children:c.description}),o.jsx("div",{className:"menu-card-footer",children:o.jsxs("span",{className:"ingredient-indicator",children:[o.jsx(Jp,{size:14})," Traditional Preparation"]})})]},c.id))})]}),o.jsx("style",{children:`
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
      `})]})}const sh=[{id:1,city:"Taiping Stall",address:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia",status:"Active"}];function uh(){const[e,t]=x.useState([]),[n,r]=x.useState({name:"",email:"",subject:"",message:""}),[i,l]=x.useState(!1),[a,s]=x.useState(!1),[u,c]=x.useState(null);x.useEffect(()=>{fetch("/api/branches").then(h=>{if(!h.ok)throw new Error("API server down");return h.json()}).then(h=>{t(h)}).catch(()=>{t(sh)})},[]);const g=h=>{const{name:w,value:y}=h.target;r({...n,[w]:y})},p=h=>{h.preventDefault(),l(!0),c(null),s(!1),fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(async w=>{const y=await w.json();if(!w.ok)throw new Error(y.message||"Submission failed");s(!0),r({name:"",email:"",subject:"",message:""})}).catch(w=>{console.error(w);try{const y=JSON.parse(localStorage.getItem("cendol_messages")||"[]");y.push({...n,id:Date.now(),date:new Date().toISOString()}),localStorage.setItem("cendol_messages",JSON.stringify(y)),s(!0),r({name:"",email:"",subject:"",message:""})}catch{c("Failed to send message. Please check your network.")}}).finally(()=>{l(!1)})};return o.jsxs("div",{className:"visit-container",children:[o.jsx("section",{className:"visit-hero",children:o.jsxs("div",{className:"visit-hero-content",children:[o.jsx("span",{className:"section-subtitle",children:"Find Us in Perak"}),o.jsx("h1",{children:"Visit Us"}),o.jsx("p",{children:"Visit our family-run cendol stall in Taiping for a simple, refreshing bowl or an easy takeaway."})]})}),o.jsx("section",{className:"main-stall-section",children:o.jsxs("div",{className:"main-stall-grid",children:[o.jsxs("div",{className:"stall-info-card glass-card",children:[o.jsx("span",{className:"info-card-badge",children:"Family-Run Stall"}),o.jsx("h2",{children:"Taiping Stall"}),o.jsx("p",{className:"stall-desc",children:"Find us at Jalan Barrack, where locals and visitors stop by for traditional cendol at an affordable price."}),o.jsxs("div",{className:"info-items",children:[o.jsxs("div",{className:"info-item",children:[o.jsx(sd,{size:24}),o.jsxs("div",{children:[o.jsx("h4",{children:"Address"}),o.jsx("p",{children:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia"})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(od,{size:24}),o.jsxs("div",{children:[o.jsx("h4",{children:"Operating Hours"}),o.jsx("p",{children:"Open Daily: 10:00 AM - 6:30 PM"}),o.jsx("span",{className:"subtext",children:"* Hours can occasionally vary; please call ahead if you are making a special trip."})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(ud,{size:24}),o.jsxs("div",{children:[o.jsx("h4",{children:"Phone or WhatsApp"}),o.jsx("p",{children:"+60 5-808 2004"})]})]})]})]}),o.jsx("div",{className:"map-wrapper glass-card",children:o.jsxs("div",{className:"mock-map",children:[o.jsx("div",{className:"map-overlay",children:o.jsxs("div",{className:"map-pin-bubble",children:[o.jsx("strong",{children:"Ansari's Famous Cendol"}),o.jsx("p",{children:"92, Jalan Barrack, Taiping"})]})}),o.jsx("iframe",{title:"Taiping Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9168962366885!2d100.73884171536762!3d4.851944396476901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304adf4be6ecb1bf%3A0xe54e6012fa6b23d9!2sAnsari%20Famous%20Cendol!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy",width:"100%",height:"100%",style:{border:0,borderRadius:"inherit"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})})]})}),o.jsx("section",{className:"main-stall-section",children:o.jsxs("div",{className:"stall-info-card glass-card",style:{maxWidth:"900px",margin:"0 auto"},children:[o.jsx("span",{className:"info-card-badge",children:"Before You Visit"}),o.jsx("h2",{children:"Good to Know"}),o.jsx("p",{className:"stall-desc",children:"Seating is limited and available on a first-come, first-served basis. At busy times there may be a short wait, and takeaway orders are common. Popular choices, especially Cendol Pulut, can sell out before closing. Street parking is subject to availability nearby."})]})}),o.jsx("section",{className:"inquiries-branches-section",children:o.jsxs("div",{className:"inquiry-grid",children:[o.jsxs("div",{className:"contact-form-side glass-card",children:[o.jsx("h3",{children:"Send Us a Message"}),o.jsx("p",{children:"For general questions, directions, or visitor information, send us a message. For a quicker reply, phone or WhatsApp the stall."}),o.jsxs("form",{onSubmit:p,className:"contact-form",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:g,required:!0,placeholder:"e.g. John Doe"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Email Address"}),o.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:g,required:!0,placeholder:"name@example.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"subject",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:g,required:!0,placeholder:"e.g. Opening hours or directions"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:"Your Message"}),o.jsx("textarea",{id:"message",name:"message",rows:"5",value:n.message,onChange:g,required:!0,placeholder:"Write your message here..."})]}),o.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",disabled:i,children:[i?"Sending...":"Send Message"," ",o.jsx(cd,{size:16})]}),a&&o.jsxs("div",{className:"alert alert-success animate-fade",children:[o.jsx(da,{size:20}),o.jsxs("div",{children:[o.jsx("strong",{children:"Message Sent"}),o.jsx("p",{children:"Thank you. We will get back to you when we can."})]})]}),u&&o.jsxs("div",{className:"alert alert-error animate-fade",children:[o.jsx(id,{size:20}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error!"}),o.jsx("p",{children:u})]})]})]})]}),o.jsxs("div",{className:"branches-list-side",children:[o.jsx("span",{className:"section-subtitle",children:"Current Location"}),o.jsx("h3",{children:"Our Taiping Stall"}),o.jsx("p",{className:"branches-intro",children:"Our one family-run location is ready for quick visits, a cool bowl, or takeaway."}),o.jsx("div",{className:"branches-grid",children:e.map(h=>o.jsxs("div",{className:`branch-card glass-card ${h.status==="Active"?"active-branch":""}`,children:[o.jsxs("div",{className:"branch-card-header",children:[o.jsx("h4",{children:h.city}),o.jsx("span",{className:`branch-status-badge ${h.status.toLowerCase()}`,children:h.status})]}),o.jsx("p",{children:h.address})]},h.id))})]})]})}),o.jsx("style",{children:`
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
      `})]})}const et=[{image:"/images/afc-shop-pic.png",title:"Ansari Famous Cendol Shop",description:"The real stall front and counter where bowls are served to Taiping regulars and visitors."},{image:"/images/afc-customers.png",title:"Customers at the Shop",description:"Local customers enjoying a simple break over cendol."},{image:"/images/afc-customerss.png",title:"A Busy Cendol Stop",description:"An everyday busy moment at the family-run stall."},{image:"/images/afc-happy-customers.png",title:"Happy Customers",description:"Customers sharing a cheerful cendol stop together."},{image:"/images/afc-customer.jpg",title:"Customer Moment",description:"A real customer moment from the stall."},{image:"/images/afc-2-cust.jpg",title:"Cendol Together",description:"Cendol shared the easy, local way."},{image:"/images/afc-image4.jpg",title:"Shop Gallery Photo",description:"A look inside the everyday atmosphere around the stall."},{image:"/images/afc-screenshot-1.png",title:"AFC Photo Collection",description:"Freshly prepared cendol and the people who make the stall lively."},{image:"/images/afc-screenshot-2.png",title:"AFC Gallery Highlight",description:"A glimpse of the simple serving tradition at Ansari Famous Cendol."},{image:"/images/afc-screenshot-3.png",title:"AFC Customer Gallery",description:"A familiar Taiping cendol moment with local customers."}],ch=[{id:"Fp9Rq_QhnbU",title:"Ansari Famous Cendol Reputation Video 1"},{id:"9sA_P6GMHVU",title:"Ansari Famous Cendol Reputation Video 2"},{id:"1n59qWD2vrI",title:"Ansari Famous Cendol Reputation Video 3"},{id:"H6TTUvmPrsw",title:"Ansari Famous Cendol Reputation Video 4"},{id:"HMqaMcnhpPo",title:"Ansari Famous Cendol Reputation Video 5"},{id:"Vv912w-Qveg",title:"Ansari Famous Cendol Reputation Video 6"},{id:"ijA_vyLKLbg",title:"Ansari Famous Cendol Reputation Video 7"},{id:"E_hzRn8yzxM",title:"Ansari Famous Cendol Reputation Video 8"},{id:"ObjZ9GeoaJ8",title:"Ansari Famous Cendol Reputation Video 9"}];function dh(){const[e,t]=x.useState(0),n=()=>{t(i=>i===et.length-1?0:i+1)},r=()=>{t(i=>i===0?et.length-1:i-1)};return o.jsxs("div",{className:"media-container",children:[o.jsx("section",{className:"media-hero",children:o.jsxs("div",{className:"media-hero-content",children:[o.jsx("span",{className:"section-subtitle",children:"Life at the Stall"}),o.jsx("h1",{children:"Media & Gallery"}),o.jsx("p",{children:"See the real stall atmosphere, freshly prepared cendol, and the customers who make Ansari's part of Taiping."})]})}),o.jsxs("section",{className:"carousel-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"From Our Stall"}),o.jsx("h2",{className:"section-title",children:"Everyday Taiping Moments"})]}),o.jsxs("div",{className:"carousel-wrapper glass-card",children:[o.jsxs("div",{className:"carousel-image-container",children:[o.jsx("img",{src:et[e].image,alt:et[e].title,className:"carousel-image animate-fade"},e),o.jsx("button",{className:"carousel-arrow prev",onClick:r,"aria-label":"Previous image",children:o.jsx(Yp,{size:24})}),o.jsx("button",{className:"carousel-arrow next",onClick:n,"aria-label":"Next image",children:o.jsx(Xp,{size:24})})]}),o.jsxs("div",{className:"carousel-caption",children:[o.jsxs("div",{className:"caption-header",children:[o.jsx("h3",{children:et[e].title}),o.jsxs("span",{className:"slide-indicator",children:["Slide ",e+1," of ",et.length]})]}),o.jsx("p",{children:et[e].description}),o.jsx("div",{className:"carousel-dots",children:et.map((i,l)=>o.jsx("button",{className:`dot-btn ${e===l?"active":""}`,onClick:()=>t(l),"aria-label":`Go to slide ${l+1}`},l))})]})]})]}),o.jsxs("section",{className:"videos-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Videos"}),o.jsx("h2",{className:"section-title",children:"Watch the Stall in Action"}),o.jsx("p",{className:"section-desc",children:"Watch visits and moments that show the simple, busy rhythm of Ansari's Famous Cendol."})]}),o.jsx("div",{className:"videos-grid",children:ch.map(i=>o.jsx("div",{className:"video-card glass-card",children:o.jsx("iframe",{src:`https://www.youtube.com/embed/${i.id}`,title:i.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,loading:"lazy"})},i.id))})]}),o.jsx("style",{children:`
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
      `})]})}const fh=[{id:1,name:"A Long-Time Regular",message:"I have been coming here since I was a child with my grandfather. Nothing beats a hot afternoon in Taiping cooled down by a bowl of Ansari's cendol.",photo_url:null,created_at:new Date().toISOString()}];function mh(){const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,l]=x.useState(!1),[a,s]=x.useState({name:"",email:"",message:""}),[u,c]=x.useState(null),[g,p]=x.useState(null),[h,w]=x.useState(!1),[y,k]=x.useState(!1),[C,f]=x.useState(null),d=x.useRef(null);x.useEffect(()=>{fetch("/api/memories").then(N=>{if(!N.ok)throw new Error("API server down");return N.json()}).then(N=>{t(N),r(!1)}).catch(()=>{t(fh),r(!1),l(!0)})},[]);const m=N=>{const{name:E,value:F}=N.target;s({...a,[E]:F})},v=N=>{const E=N.target.files[0];if(E){if(!E.type.startsWith("image/")){f("Please choose an image file.");return}if(E.size>5*1024*1024){f("Photo is too large. Please choose one under 5MB.");return}f(null),c(E),p(URL.createObjectURL(E))}},S=()=>{c(null),p(null),d.current&&(d.current.value="")},P=N=>{N.preventDefault(),w(!0),f(null),k(!1);const E=new FormData;E.append("name",a.name),E.append("email",a.email),E.append("message",a.message),u&&E.append("photo",u),fetch("/api/memories",{method:"POST",body:E}).then(async F=>{const T=await F.json();if(!F.ok)throw new Error(T.message||"Submission failed");k(!0),s({name:"",email:"",message:""}),S()}).catch(F=>{console.error(F),f(F.message||"Something went wrong. Please check your connection and try again.")}).finally(()=>{w(!1)})};return o.jsxs("div",{className:"memories-container",children:[o.jsx("section",{className:"memories-hero",children:o.jsxs("div",{className:"memories-hero-content",children:[o.jsx("span",{className:"section-subtitle",children:"Shared By You"}),o.jsx("h1",{children:"Community Memories"}),o.jsx("p",{children:"Every bowl of cendol carries a story. Share yours — a childhood memory, a family tradition, or simply a photo from your visit — and we'll feature it here for everyone to see."})]})}),o.jsx("section",{className:"submit-section",children:o.jsxs("div",{className:"submit-card glass-card",children:[o.jsx("span",{className:"info-card-badge",children:"Share Your Story"}),o.jsx("h2",{children:"Tell Us Your Memory"}),o.jsx("p",{className:"submit-desc",children:"Photos are optional but always welcome. Every submission is reviewed by our team before it appears on the wall below — usually within a day or two."}),o.jsxs("form",{onSubmit:P,className:"memory-form",children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:m,required:!0,placeholder:"e.g. Aisyah binti Ahmad"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Email (optional, kept private)"}),o.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:m,placeholder:"name@example.com"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:"Your Memory"}),o.jsx("textarea",{id:"message",name:"message",rows:"5",value:a.message,onChange:m,required:!0,maxLength:2e3,placeholder:"Tell us about your visit or memory of Ansari's Famous Cendol..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Add a Photo (optional)"}),g?o.jsxs("div",{className:"photo-preview-wrapper",children:[o.jsx("img",{src:g,alt:"Selected preview",className:"photo-preview"}),o.jsx("button",{type:"button",className:"remove-photo-btn",onClick:S,"aria-label":"Remove photo",children:o.jsx(ho,{size:18})})]}):o.jsxs("button",{type:"button",className:"photo-upload-btn",onClick:()=>{var N;return(N=d.current)==null?void 0:N.click()},children:[o.jsx(Gp,{size:22}),o.jsx("span",{children:"Tap to take a photo or choose from your gallery"})]}),o.jsx("input",{ref:d,type:"file",accept:"image/*",capture:"environment",onChange:v,hidden:!0})]}),o.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",disabled:h,children:[h?"Sending...":"Share My Memory"," ",o.jsx(cd,{size:16})]}),y&&o.jsxs("div",{className:"alert alert-success animate-fade",children:[o.jsx(da,{size:20}),o.jsxs("div",{children:[o.jsx("strong",{children:"Thank you for sharing!"}),o.jsx("p",{children:"Your memory has been received and will appear here once our team reviews it."})]})]}),C&&o.jsxs("div",{className:"alert alert-error animate-fade",children:[o.jsx(id,{size:20}),o.jsxs("div",{children:[o.jsx("strong",{children:"Couldn't send that."}),o.jsx("p",{children:C})]})]})]})]})}),o.jsxs("section",{className:"wall-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"The Wall"}),o.jsx("h2",{className:"section-title",children:"Memories From Our Guests"}),o.jsx("p",{className:"section-desc",children:"A collection of stories and photos shared by the people who make Ansari's Famous Cendol what it is."})]}),i&&o.jsxs("div",{className:"api-notice",children:[o.jsx("span",{className:"notice-badge",children:"Offline Mode"}),o.jsx("p",{children:"Displaying a sample memory. The Laravel database server is offline."})]}),n?o.jsx("div",{className:"wall-grid",children:Array(3).fill(0).map((N,E)=>o.jsxs("div",{className:"memory-card glass-card loading-card",children:[o.jsx("div",{className:"loading-line photo"}),o.jsx("div",{className:"loading-line title"}),o.jsx("div",{className:"loading-line desc"})]},E))}):e.length===0?o.jsxs("div",{className:"empty-wall glass-card",children:[o.jsx(Ts,{size:32}),o.jsx("p",{children:"No memories published yet — be the first to share yours above!"})]}):o.jsx("div",{className:"wall-grid",children:e.map(N=>o.jsxs("div",{className:"memory-card glass-card",children:[o.jsx("div",{className:"memory-photo-frame",children:N.photo_url?o.jsx("img",{src:N.photo_url,alt:`Memory shared by ${N.name}`,className:"memory-photo"}):o.jsx("div",{className:"memory-photo-placeholder",children:o.jsx(ad,{size:28})})}),o.jsxs("div",{className:"memory-card-body",children:[o.jsxs("p",{className:"memory-message",children:["“",N.message,"”"]}),o.jsxs("div",{className:"memory-author",children:[o.jsx(Ts,{size:14,fill:"currentColor"}),o.jsx("span",{children:N.name})]})]})]},N.id))})]}),o.jsx("style",{children:`
        .memories-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .memories-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .memories-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .memories-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Submission Form */
        .submit-section {
          padding: 5rem 8% 2rem 8%;
        }
        .submit-card {
          max-width: 760px;
          margin: 0 auto;
          padding: 3rem;
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
        .submit-card h2 {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          color: var(--amber);
          margin-bottom: 0.75rem;
        }
        .submit-desc {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .memory-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
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

        .photo-upload-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem;
          border: 2px dashed var(--amber-light);
          border-radius: var(--radius-sm);
          background: var(--cream-light);
          color: var(--amber);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
          width: 100%;
          text-align: left;
        }
        .photo-upload-btn:hover {
          background: var(--amber-glow);
          border-color: var(--amber);
        }
        .photo-preview-wrapper {
          position: relative;
          width: 100%;
          max-width: 260px;
        }
        .photo-preview {
          width: 100%;
          border-radius: var(--radius-sm);
          display: block;
          max-height: 220px;
          object-fit: cover;
        }
        .remove-photo-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--dark);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .remove-photo-btn:hover {
          background: var(--primary);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        /* Alerts (shared style) */
        .alert {
          margin-top: 0.5rem;
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
        .alert p {
          margin: 0;
          font-size: 0.85rem;
        }

        /* Wall Section */
        .wall-section {
          padding: 4rem 8% 6rem 8%;
        }
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem auto;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          color: var(--amber);
          margin: 0.5rem 0 1rem 0;
        }
        .section-desc {
          color: var(--text-muted);
        }
        .section-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-light);
        }

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

        .empty-wall {
          max-width: 480px;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
          color: var(--text-muted);
        }
        .empty-wall svg {
          color: var(--primary-light);
          margin-bottom: 1rem;
        }

        .wall-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .memory-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }
        .memory-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .memory-photo-frame {
          width: 100%;
          height: 220px;
          background: var(--cream-light);
        }
        .memory-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .memory-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          opacity: 0.4;
        }
        .memory-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex-grow: 1;
        }
        .memory-message {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-dark);
          line-height: 1.5;
          flex-grow: 1;
        }
        .memory-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        /* Loading Skeleton */
        .loading-card {
          min-height: 340px;
          border-style: dashed;
        }
        .loading-line {
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .loading-line.photo { height: 220px; border-radius: 0; }
        .loading-line.title { width: 50%; height: 20px; margin: 1.5rem 1.75rem 0.75rem 1.75rem; }
        .loading-line.desc { width: 80%; height: 60px; margin: 0 1.75rem; }

        /* Responsive */
        @media (max-width: 1024px) {
          .wall-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .submit-card {
            padding: 2rem 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .wall-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function ph(){const[e,t]=x.useState(sessionStorage.getItem("afc_admin_token")||""),[n,r]=x.useState(""),[i,l]=x.useState(!!sessionStorage.getItem("afc_admin_token")),[a,s]=x.useState([]),[u,c]=x.useState(!1),[g,p]=x.useState(null),[h,w]=x.useState("pending"),y=v=>{c(!0),p(null),fetch("/api/admin/memories",{headers:{"X-Admin-Token":v}}).then(async S=>{if(S.status===401)throw new Error("Invalid admin token.");if(!S.ok)throw new Error("Could not reach the server.");return S.json()}).then(S=>{s(S),l(!0),sessionStorage.setItem("afc_admin_token",v),t(v)}).catch(S=>{p(S.message),l(!1),sessionStorage.removeItem("afc_admin_token")}).finally(()=>c(!1))};x.useEffect(()=>{e&&y(e)},[]);const k=v=>{v.preventDefault(),y(n)},C=(v,S)=>{fetch(`/api/admin/memories/${v}`,{method:"PATCH",headers:{"Content-Type":"application/json","X-Admin-Token":e},body:JSON.stringify({status:S})}).then(P=>P.json()).then(()=>y(e)).catch(()=>p("Failed to update. Please try again."))},f=v=>{window.confirm("Permanently delete this memory? This cannot be undone.")&&fetch(`/api/admin/memories/${v}`,{method:"DELETE",headers:{"X-Admin-Token":e}}).then(S=>S.json()).then(()=>y(e)).catch(()=>p("Failed to delete. Please try again."))},d=()=>{sessionStorage.removeItem("afc_admin_token"),l(!1),t(""),s([])},m=h==="all"?a:a.filter(v=>v.status===h);return i?o.jsxs("div",{className:"admin-container",children:[o.jsxs("div",{className:"admin-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Memories Moderation"}),o.jsx("p",{children:"Approve or reject visitor-submitted memories before they go live on the public wall."})]}),o.jsxs("div",{className:"admin-header-actions",children:[o.jsx("button",{className:"icon-btn",onClick:()=>y(e),"aria-label":"Refresh",children:o.jsx(eh,{size:18})}),o.jsx("button",{className:"logout-btn",onClick:d,children:"Log Out"})]})]}),o.jsx("div",{className:"admin-filters",children:["pending","approved","rejected","all"].map(v=>o.jsxs("button",{className:`filter-chip ${h===v?"active":""}`,onClick:()=>w(v),children:[v.charAt(0).toUpperCase()+v.slice(1),v!=="all"&&` (${a.filter(S=>S.status===v).length})`]},v))}),g&&o.jsx("p",{className:"admin-error",children:g}),u?o.jsx("p",{className:"admin-loading",children:"Loading submissions..."}):m.length===0?o.jsx("p",{className:"admin-empty",children:"Nothing here."}):o.jsx("div",{className:"admin-grid",children:m.map(v=>o.jsxs("div",{className:`admin-card status-${v.status}`,children:[o.jsx("div",{className:"admin-card-photo",children:v.photo_url?o.jsx("img",{src:v.photo_url,alt:`Submission from ${v.name}`}):o.jsx("div",{className:"no-photo",children:o.jsx(ad,{size:24})})}),o.jsxs("div",{className:"admin-card-body",children:[o.jsxs("div",{className:"admin-card-top",children:[o.jsx("strong",{children:v.name}),o.jsx("span",{className:`status-badge ${v.status}`,children:v.status})]}),v.email&&o.jsx("p",{className:"admin-email",children:v.email}),o.jsx("p",{className:"admin-message",children:v.message}),o.jsx("p",{className:"admin-date",children:new Date(v.created_at).toLocaleString()}),o.jsxs("div",{className:"admin-actions",children:[v.status!=="approved"&&o.jsxs("button",{className:"approve-btn",onClick:()=>C(v.id,"approved"),children:[o.jsx(da,{size:16})," Approve"]}),v.status!=="rejected"&&o.jsxs("button",{className:"reject-btn",onClick:()=>C(v.id,"rejected"),children:[o.jsx(rh,{size:16})," Reject"]}),o.jsx("button",{className:"delete-btn",onClick:()=>f(v.id),children:o.jsx(nh,{size:16})})]})]})]},v.id))}),o.jsx("style",{children:bs})]}):o.jsxs("div",{className:"admin-login-container",children:[o.jsxs("form",{className:"admin-login-card",onSubmit:k,children:[o.jsx(Zp,{size:28}),o.jsx("h2",{children:"Memories Moderation"}),o.jsx("p",{children:"Enter the admin token to review submissions."}),o.jsx("input",{type:"password",placeholder:"Admin token",value:n,onChange:v=>r(v.target.value),autoFocus:!0}),o.jsx("button",{type:"submit",disabled:u,children:u?"Checking...":"Enter"}),g&&o.jsx("p",{className:"admin-error",children:g})]}),o.jsx("style",{children:bs})]})}const bs=`
  .admin-login-container {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .admin-login-card {
    background: #fff;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    max-width: 360px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .admin-login-card svg { color: hsl(28, 70%, 20%); }
  .admin-login-card h2 { font-size: 1.4rem; }
  .admin-login-card p { color: #777; font-size: 0.9rem; margin-bottom: 0.5rem; }
  .admin-login-card input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  .admin-login-card button {
    width: 100%;
    padding: 0.8rem;
    background: hsl(142, 72%, 26%);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
  }
  .admin-error { color: #dc3545; font-size: 0.85rem; }

  .admin-container { padding: 3rem 5%; max-width: 1300px; margin: 0 auto; }
  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .admin-header h1 { font-size: 1.8rem; margin-bottom: 0.25rem; }
  .admin-header p { color: #777; font-size: 0.9rem; }
  .admin-header-actions { display: flex; gap: 0.75rem; }
  .icon-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid #ddd; display: flex; align-items: center; justify-content: center;
  }
  .logout-btn {
    padding: 0.6rem 1.2rem; border: 1px solid #ddd; border-radius: 8px; font-size: 0.85rem;
  }

  .admin-filters { display: flex; gap: 0.6rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .filter-chip {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid #ddd;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .filter-chip.active { background: hsl(142, 72%, 26%); color: #fff; border-color: hsl(142, 72%, 26%); }

  .admin-loading, .admin-empty { color: #777; text-align: center; padding: 3rem; }

  .admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .admin-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-left: 4px solid #ccc;
  }
  .admin-card.status-pending { border-left-color: hsl(35, 75%, 45%); }
  .admin-card.status-approved { border-left-color: hsl(142, 72%, 26%); }
  .admin-card.status-rejected { border-left-color: #dc3545; opacity: 0.7; }

  .admin-card-photo { width: 100%; height: 160px; background: #f0efe9; }
  .admin-card-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .no-photo { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #bbb; }

  .admin-card-body { padding: 1.25rem; }
  .admin-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; }
  .status-badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    background: #eee;
    color: #666;
  }
  .status-badge.pending { background: hsla(35, 75%, 45%, 0.15); color: hsl(35, 75%, 35%); }
  .status-badge.approved { background: hsla(142, 72%, 26%, 0.15); color: hsl(142, 72%, 26%); }
  .status-badge.rejected { background: rgba(220,53,69,0.12); color: #dc3545; }

  .admin-email { font-size: 0.8rem; color: #999; margin-bottom: 0.5rem; }
  .admin-message { font-size: 0.9rem; color: #333; margin-bottom: 0.75rem; line-height: 1.5; }
  .admin-date { font-size: 0.75rem; color: #aaa; margin-bottom: 1rem; }

  .admin-actions { display: flex; gap: 0.5rem; }
  .approve-btn, .reject-btn, .delete-btn {
    display: flex; align-items: center; gap: 0.35rem;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid #ddd;
  }
  .approve-btn { color: hsl(142, 72%, 26%); border-color: hsl(142, 72%, 26%); }
  .approve-btn:hover { background: hsl(142, 72%, 26%); color: #fff; }
  .reject-btn { color: #dc3545; border-color: #dc3545; }
  .reject-btn:hover { background: #dc3545; color: #fff; }
  .delete-btn { color: #999; margin-left: auto; }
  .delete-btn:hover { background: #999; color: #fff; }
`;function hh(){const{pathname:e}=Bt();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function gh(){const[e,t]=x.useState(!1),[n,r]=x.useState(!1);Bt(),x.useEffect(()=>{const l=()=>{window.scrollY>20?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const i=()=>r(!1);return o.jsxs(o.Fragment,{children:[o.jsxs("nav",{className:`navbar ${e?"scrolled":""}`,children:[o.jsxs("div",{className:"logo-container",children:[o.jsx("img",{src:"/images/image2.jpg",alt:"Cendol Logo",className:"logo-icon"}),o.jsxs("div",{className:"logo-text",children:["Ansari's",o.jsx("span",{children:"Famous"})]})]}),o.jsxs("ul",{className:"nav-links",children:[o.jsx("li",{children:o.jsx(ne,{to:"/",className:({isActive:l})=>`nav-link ${l?"active":""}`,end:!0,children:"Home"})}),o.jsx("li",{children:o.jsx(ne,{to:"/story",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Our Story"})}),o.jsx("li",{children:o.jsx(ne,{to:"/menu",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Menu"})}),o.jsx("li",{children:o.jsx(ne,{to:"/visit",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Visit Us"})}),o.jsx("li",{children:o.jsx(ne,{to:"/media",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Media"})}),o.jsx("li",{children:o.jsx(ne,{to:"/memories",className:({isActive:l})=>`nav-link ${l?"active":""}`,children:"Memories"})})]}),o.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),"aria-label":"Toggle navigation menu",children:n?o.jsx(ho,{size:28}):o.jsx(qp,{size:28})})]}),o.jsxs("div",{className:`mobile-drawer ${n?"open":""}`,children:[o.jsxs("div",{className:"drawer-header",children:[o.jsxs("div",{className:"logo-text",children:["Ansari's",o.jsx("span",{children:"Famous"})]}),o.jsx("button",{onClick:i,children:o.jsx(ho,{size:28})})]}),o.jsxs("ul",{className:"drawer-links",children:[o.jsx("li",{children:o.jsx(ne,{to:"/",className:"drawer-link",onClick:i,end:!0,children:"Home"})}),o.jsx("li",{children:o.jsx(ne,{to:"/story",className:"drawer-link",onClick:i,children:"Our Story"})}),o.jsx("li",{children:o.jsx(ne,{to:"/menu",className:"drawer-link",onClick:i,children:"Menu"})}),o.jsx("li",{children:o.jsx(ne,{to:"/visit",className:"drawer-link",onClick:i,children:"Visit Us"})}),o.jsx("li",{children:o.jsx(ne,{to:"/media",className:"drawer-link",onClick:i,children:"Media"})}),o.jsx("li",{children:o.jsx(ne,{to:"/memories",className:"drawer-link",onClick:i,children:"Memories"})})]})]}),n&&o.jsx("div",{className:"drawer-overlay",onClick:i}),o.jsx("style",{children:`
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
      `})]})}function vh(){return o.jsxs(Up,{children:[o.jsx(hh,{}),o.jsxs("div",{className:"app-container",children:[o.jsx(gh,{}),o.jsx("main",{className:"page-content",children:o.jsxs(Lp,{children:[o.jsx(tt,{path:"/",element:o.jsx(ih,{})}),o.jsx(tt,{path:"/story",element:o.jsx(lh,{})}),o.jsx(tt,{path:"/menu",element:o.jsx(ah,{})}),o.jsx(tt,{path:"/visit",element:o.jsx(uh,{})}),o.jsx(tt,{path:"/media",element:o.jsx(dh,{})}),o.jsx(tt,{path:"/memories",element:o.jsx(mh,{})}),o.jsx(tt,{path:"/admin/memories",element:o.jsx(ph,{})})]})}),o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("h3",{children:"Ansari's Famous Cendol"}),o.jsx("p",{children:"A family-run Indian-Muslim (Mamak) stall serving refreshing, traditional cendol to Taiping locals and visitors."}),o.jsx("div",{className:"footer-brand-legacy",children:"Since 1940 • A Taiping local favourite"})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:"Quick Links"}),o.jsxs("ul",{className:"footer-links-list",children:[o.jsx("li",{children:o.jsx(ne,{to:"/",children:"Home"})}),o.jsx("li",{children:o.jsx(ne,{to:"/story",children:"Our Story"})}),o.jsx("li",{children:o.jsx(ne,{to:"/menu",children:"Menu"})}),o.jsx("li",{children:o.jsx(ne,{to:"/visit",children:"Visit Us"})}),o.jsx("li",{children:o.jsx(ne,{to:"/media",children:"Media & Gallery"})})]})]}),o.jsxs("div",{className:"footer-contact",children:[o.jsx("h4",{children:"Contact Us"}),o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(sd,{size:20}),o.jsx("span",{children:"92, Jalan Barrack, 34000 Taiping, Perak, Malaysia"})]}),o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(od,{size:20}),o.jsx("span",{children:"Open Daily: 10:00 AM - 6:30 PM (Fri 12:00-2:30 PM closed)"})]}),o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(ud,{size:20}),o.jsx("span",{children:"012-562 9440"})]})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," Ansari's Famous Cendol. All Rights Reserved."]}),o.jsx("p",{children:"Made for the Taiping community."})]})]})]})]})}vl.createRoot(document.getElementById("root")).render(o.jsx(Bs.StrictMode,{children:o.jsx(vh,{})}));

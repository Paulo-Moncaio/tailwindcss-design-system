"use strict";(self.webpackChunktailwindcss_design_system=self.webpackChunktailwindcss_design_system||[]).push([[305],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@headlessui/react/dist/components/keyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},"./node_modules/@headlessui/react/dist/components/transitions/transition.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>qe});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_is_mounted=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");var use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_server_handoff_complete=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js");function g(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}function M(t,e,n,m){let a=n?"enter":"leave",u=(0,disposables.k)(),p=void 0!==m?function once_l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}(m):()=>{};"enter"===a&&(t.removeAttribute("hidden"),t.style.display="");let o=(0,match.E)(a,{enter:()=>e.enter,leave:()=>e.leave}),l=(0,match.E)(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match.E)(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),g(t,...e.base,...o,...r),u.nextFrame((()=>{v(t,...e.base,...o,...r),g(t,...e.base,...o,...l),function b(t,e){let n=(0,disposables.k)();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:a}=getComputedStyle(t),[u,p]=[m,a].map((l=>{let[r=0]=l.split(",").filter(Boolean).map((i=>i.includes("ms")?parseFloat(i):1e3*parseFloat(i))).sort(((i,T)=>T-i));return r})),o=u+p;if(0!==o){n.group((r=>{r.setTimeout((()=>{e(),r.dispose()}),o),r.addEventListener(t,"transitionrun",(i=>{i.target===i.currentTarget&&r.dispose()}))}));let l=n.addEventListener(t,"transitionend",(r=>{r.target===r.currentTarget&&(e(),l())}))}else e();return n.add((()=>e())),n.dispose}(t,(()=>(v(t,...e.base,...o),g(t,...e.base,...e.entered),p())))})),u.dispose}var open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),class_names=__webpack_require__("./node_modules/@headlessui/react/dist/utils/class-names.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");function S(t=""){return t.split(/\s+/).filter((n=>n.length>1))}let I=(0,react.createContext)(null);I.displayName="TransitionContext";var r,Se=((r=Se||{}).Visible="visible",r.Hidden="hidden",r);let transition_M=(0,react.createContext)(null);function U(t){return"children"in t?U(t.children):t.current.filter((({el:n})=>null!==n.current)).filter((({state:n})=>"visible"===n)).length>0}function se(t,n){let r=(0,use_latest_value.E)(t),s=(0,react.useRef)([]),R=(0,use_is_mounted.t)(),D=(0,use_disposables.G)(),p=(0,use_event.z)(((i,e=render.l4.Hidden)=>{let a=s.current.findIndex((({el:o})=>o===i));-1!==a&&((0,match.E)(e,{[render.l4.Unmount](){s.current.splice(a,1)},[render.l4.Hidden](){s.current[a].state="hidden"}}),D.microTask((()=>{var o;!U(s)&&R.current&&(null==(o=r.current)||o.call(r))})))})),x=(0,use_event.z)((i=>{let e=s.current.find((({el:a})=>a===i));return e?"visible"!==e.state&&(e.state="visible"):s.current.push({el:i,state:"visible"}),()=>p(i,render.l4.Unmount)})),h=(0,react.useRef)([]),v=(0,react.useRef)(Promise.resolve()),u=(0,react.useRef)({enter:[],leave:[],idle:[]}),g=(0,use_event.z)(((i,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter((([o])=>o!==i))),null==n||n.chains.current[e].push([i,new Promise((o=>{h.current.push(o)}))]),null==n||n.chains.current[e].push([i,new Promise((o=>{Promise.all(u.current[e].map((([f,N])=>N))).then((()=>o()))}))]),"enter"===e?v.current=v.current.then((()=>null==n?void 0:n.wait.current)).then((()=>a(e))):a(e)})),d=(0,use_event.z)(((i,e,a)=>{Promise.all(u.current[e].splice(0).map((([o,f])=>f))).then((()=>{var o;null==(o=h.current.shift())||o()})).then((()=>a(e)))}));return(0,react.useMemo)((()=>({children:s,register:x,unregister:p,onStart:g,onStop:d,wait:v,chains:u})),[x,p,s,g,d,u,v])}function Ne(){}transition_M.displayName="NestingContext";let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var r;let n={};for(let s of Pe)n[s]=null!=(r=t[s])?r:Ne;return n}let le=render.AN.RenderStrategy;let q=(0,render.yV)((function Fe(t,n){let{show:r,appear:s=!1,unmount:R=!0,...D}=t,p=(0,react.useRef)(null),x=(0,use_sync_refs.T)(p,n);(0,use_server_handoff_complete.H)();let h=(0,open_closed.oJ)();if(void 0===r&&null!==h&&(r=(h&open_closed.ZM.Open)===open_closed.ZM.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,u]=(0,react.useState)(r?"visible":"hidden"),g=se((()=>{u("hidden")})),[d,i]=(0,react.useState)(!0),e=(0,react.useRef)([r]);(0,use_iso_morphic_effect.e)((()=>{!1!==d&&e.current[e.current.length-1]!==r&&(e.current.push(r),i(!1))}),[e,r]);let a=(0,react.useMemo)((()=>({show:r,appear:s,initial:d})),[r,s,d]);(0,react.useEffect)((()=>{if(r)u("visible");else if(U(g)){let T=p.current;if(!T)return;let l=T.getBoundingClientRect();0===l.x&&0===l.y&&0===l.width&&0===l.height&&u("hidden")}else u("hidden")}),[r,g]);let o={unmount:R},f=(0,use_event.z)((()=>{var T;d&&i(!1),null==(T=t.beforeEnter)||T.call(t)})),N=(0,use_event.z)((()=>{var T;d&&i(!1),null==(T=t.beforeLeave)||T.call(t)}));return react.createElement(transition_M.Provider,{value:g},react.createElement(I.Provider,{value:a},(0,render.sY)({ourProps:{...o,as:react.Fragment,children:react.createElement(ue,{ref:x,...o,...D,beforeEnter:f,beforeLeave:N})},theirProps:{},defaultTag:react.Fragment,features:le,visible:"visible"===v,name:"Transition"})))})),ue=(0,render.yV)((function He(t,n){var Q,Y;let{beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D,enter:p,enterFrom:x,enterTo:h,entered:v,leave:u,leaveFrom:g,leaveTo:d,...i}=t,e=(0,react.useRef)(null),a=(0,use_sync_refs.T)(e,n),o=null==(Q=i.unmount)||Q?render.l4.Unmount:render.l4.Hidden,{show:f,appear:N,initial:T}=function ye(){let t=(0,react.useContext)(I);if(null===t)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}(),[l,j]=(0,react.useState)(f?"visible":"hidden"),z=function xe(){let t=(0,react.useContext)(transition_M);if(null===t)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}(),{register:L,unregister:O}=z;(0,react.useEffect)((()=>L(e)),[L,e]),(0,react.useEffect)((()=>{if(o===render.l4.Hidden&&e.current)return f&&"visible"!==l?void j("visible"):(0,match.E)(l,{hidden:()=>O(e),visible:()=>L(e)})}),[l,e,L,O,f,o]);let k=(0,use_latest_value.E)({base:S(i.className),enter:S(p),enterFrom:S(x),enterTo:S(h),entered:S(v),leave:S(u),leaveFrom:S(g),leaveTo:S(d)}),V=function Re(t){let n=(0,react.useRef)(ae(t));return(0,react.useEffect)((()=>{n.current=ae(t)}),[t]),n}({beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D}),G=(0,use_server_handoff_complete.H)();(0,react.useEffect)((()=>{if(G&&"visible"===l&&null===e.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[e,l,G]);let K=N&&f&&T,de=!G||T&&!N?"idle":f?"enter":"leave",H=function c(a=0){let[l,r]=(0,react.useState)(a),t=(0,use_is_mounted.t)(),o=(0,react.useCallback)((e=>{t.current&&r((u=>u|e))}),[l,t]),m=(0,react.useCallback)((e=>Boolean(l&e)),[l]),s=(0,react.useCallback)((e=>{t.current&&r((u=>u&~e))}),[r,t]),g=(0,react.useCallback)((e=>{t.current&&r((u=>u^e))}),[r]);return{flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}(0),fe=(0,use_event.z)((C=>(0,match.E)(C,{enter:()=>{H.addFlag(open_closed.ZM.Opening),V.current.beforeEnter()},leave:()=>{H.addFlag(open_closed.ZM.Closing),V.current.beforeLeave()},idle:()=>{}}))),me=(0,use_event.z)((C=>(0,match.E)(C,{enter:()=>{H.removeFlag(open_closed.ZM.Opening),V.current.afterEnter()},leave:()=>{H.removeFlag(open_closed.ZM.Closing),V.current.afterLeave()},idle:()=>{}}))),w=se((()=>{j("hidden"),O(e)}),z),B=(0,react.useRef)(!1);!function use_transition_D({immediate:t,container:s,direction:n,classes:u,onStart:a,onStop:c}){let l=(0,use_is_mounted.t)(),d=(0,use_disposables.G)(),e=(0,use_latest_value.E)(n);(0,use_iso_morphic_effect.e)((()=>{t&&(e.current="enter")}),[t]),(0,use_iso_morphic_effect.e)((()=>{let r=(0,disposables.k)();d.add(r.dispose);let i=s.current;if(i&&"idle"!==e.current&&l.current)return r.dispose(),a.current(e.current),r.add(M(i,u.current,"enter"===e.current,(()=>{r.dispose(),c.current(e.current)}))),r.dispose}),[n])}({immediate:K,container:e,classes:k,direction:de,onStart:(0,use_latest_value.E)((C=>{B.current=!0,w.onStart(e,C,fe)})),onStop:(0,use_latest_value.E)((C=>{B.current=!1,w.onStop(e,C,me),"leave"===C&&!U(w)&&(j("hidden"),O(e))}))});let P=i,ce={ref:a};return K?P={...P,className:(0,class_names.A)(i.className,...k.current.enter,...k.current.enterFrom)}:B.current&&(P.className=(0,class_names.A)(i.className,null==(Y=e.current)?void 0:Y.className),""===P.className&&delete P.className),react.createElement(transition_M.Provider,{value:w},react.createElement(open_closed.up,{value:(0,match.E)(l,{visible:open_closed.ZM.Open,hidden:open_closed.ZM.Closed})|H.flags},(0,render.sY)({ourProps:ce,theirProps:P,defaultTag:"div",features:le,visible:"visible"===l,name:"Transition.Child"})))})),Le=(0,render.yV)((function _e(t,n){let r=null!==(0,react.useContext)(I),s=null!==(0,open_closed.oJ)();return react.createElement(react.Fragment,null,!r&&s?react.createElement(q,{ref:n,...t}):react.createElement(ue,{ref:n,...t}))})),qe=Object.assign(q,{Child:Le,Root:q})},"./node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/@headlessui/react/dist/hooks/use-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>o});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...r)=>e.current(...r)),[e])}},"./node_modules/@headlessui/react/dist/hooks/use-id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>I});var o,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");let I=null!=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId():null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.e)((()=>{null===e&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId())}),[e]),null!=e?""+e:void 0}},"./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>f});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},"./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)}},"./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{r.current=e}),[e]),r}},"./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>y});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),platform=__webpack_require__("./node_modules/@headlessui/react/dist/utils/platform.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function d(e,r,n){let o=(0,use_latest_value.E)(r);(0,react.useEffect)((()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var use_window_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-window-event.js");function y(s,m,a=!0){let i=(0,react.useRef)(!1);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(null===t||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return"function"==typeof n?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(null===u)continue;let n=u instanceof HTMLElement?u:u.current;if(null!=n&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!(0,focus_management.sP)(t,focus_management.tJ.Loose)&&-1!==t.tabIndex&&e.preventDefault(),m(e,t)}(0,react.useEffect)((()=>{requestAnimationFrame((()=>{i.current=a}))}),[a]);let o=(0,react.useRef)(null);d("pointerdown",(e=>{var r,t;i.current&&(o.current=(null==(t=null==(r=e.composedPath)?void 0:r.call(e))?void 0:t[0])||e.target)}),!0),d("mousedown",(e=>{var r,t;i.current&&(o.current=(null==(t=null==(r=e.composedPath)?void 0:r.call(e))?void 0:t[0])||e.target)}),!0),d("click",(e=>{(0,platform.tq)()||o.current&&(c(e,(()=>o.current)),o.current=null)}),!0),d("touchend",(e=>c(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,use_window_event.s)("blur",(e=>c(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},"./node_modules/@headlessui/react/dist/hooks/use-owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>n});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");function n(...e){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.r)(...e)),[...e])}},"./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{H:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function l(){let r=function s(){let r="undefined"==typeof document;return(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore((()=>()=>{}),(()=>!1),(()=>!r))}(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete);return e&&!1===_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{!0!==e&&n(!0)}),[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.handoff()),[]),!r&&e}},"./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>y,h:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{n.current=t}),[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}},"./node_modules/@headlessui/react/dist/hooks/use-watch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>m});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}}),[r,...t])}},"./node_modules/@headlessui/react/dist/hooks/use-window-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>s,_:()=>f});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let f=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)((function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":2==(2&t)||(null!=(n=e["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&t)&&2!=(2&t)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:r,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"./node_modules/@headlessui/react/dist/internal/open-closed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZM:()=>d,oJ:()=>u,up:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var e,d=((e=d||{})[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e);function u(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function s({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}},"./node_modules/@headlessui/react/dist/utils/active-element-history.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>active_element_history_t});let active_element_history_t=[];!function t(n){function e(){"loading"!==document.readyState&&(n(),document.removeEventListener("DOMContentLoaded",e))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",e),e())}((()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&active_element_history_t[0]!==n.target&&(active_element_history_t.unshift(n.target),active_element_history_t=active_element_history_t.filter((r=>null!=r&&r.isConnected)),active_element_history_t.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}))},"./node_modules/@headlessui/react/dist/utils/bugs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=""===(null==e?void 0:e.getAttribute("disabled"));return(!t||!function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:()=>r})},"./node_modules/@headlessui/react/dist/utils/class-names.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(...r){return Array.from(new Set(r.flatMap((n=>"string"==typeof n?n.split(" "):[])))).filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>t})},"./node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>o});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js");function o(){let n=[],r={addEventListener:(e,t,s,a)=>(e.addEventListener(t,s,a),r.add((()=>e.removeEventListener(t,s,a)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add((()=>{Object.assign(e.style,{[t]:a})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}),dispose(){for(let e of n.splice(0))e()}};return r}},"./node_modules/@headlessui/react/dist/utils/env.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s});var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},"./node_modules/@headlessui/react/dist/utils/focus-management.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>y,TO:()=>M,fE:()=>N,jA:()=>O,sP:()=>h,tJ:()=>T,z2:()=>I});var _match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),_owner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var t,o,n,M=((n=M||{})[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),F=((t=F||{})[t.Previous=-1]="Previous",t[t.Next=1]="Next",t);function f(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(c)).sort(((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T||{});function h(e,r=0){var t;return e!==(null==(t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e))?void 0:t.body)&&(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(r,{0:()=>e.matches(c),1(){let l=e;for(;null!==l;){if(l.matches(c))return!0;l=l.parentElement}return!1}})}var w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w||{});function y(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let S=["textarea","input"].join(",");function I(e,r=(t=>t)){return e.slice().sort(((t,l)=>{let o=r(t),i=r(l);if(null===o||null===i)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I(e):e:f(e);o.length>0&&n.length>1&&(n=n.filter((s=>!o.includes(s)))),l=null!=l?l:i.activeElement;let u,E=(()=>{if(5&r)return 1;if(10&r)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(1&r)return 0;if(2&r)return Math.max(0,n.indexOf(l))-1;if(4&r)return Math.max(0,n.indexOf(l))+1;if(8&r)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=32&r?{preventScroll:!0}:{},d=0,a=n.length;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(16&r)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],null==u||u.focus(p),d+=E}while(u!==i.activeElement);return 6&r&&function H(e){var r,t;return null!=(t=null==(r=null==e?void 0:e.matches)?void 0:r.call(e,S))&&t}(u)&&u.select(),2}},"./node_modules/@headlessui/react/dist/utils/match.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:()=>u})},"./node_modules/@headlessui/react/dist/utils/micro-task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}__webpack_require__.d(__webpack_exports__,{Y:()=>t})},"./node_modules/@headlessui/react/dist/utils/owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>o});var _env_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function o(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.O.isServer?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},"./node_modules/@headlessui/react/dist/utils/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n(){return t()||function i(){return/Android/gi.test(window.navigator.userAgent)}()}__webpack_require__.d(__webpack_exports__,{gn:()=>t,tq:()=>n})},"./node_modules/@headlessui/react/dist/utils/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AN:()=>O,l4:()=>v,oA:()=>x,sY:()=>C,yV:()=>U});var e,n,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_class_names_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/class-names.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),O=((n=O||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),v=((e=v||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function C({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=null!=l?l:k;let s=R(t,r);if(a)return m(s,e,n,f,l);let y=null!=o?o:0;if(2&y){let{static:u=!1,...d}=s;if(u)return m(d,e,n,f,l)}if(1&y){let{unmount:u=!0,...d}=s;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(u?0:1,{0:()=>null,1:()=>m({...d,hidden:!0,style:{display:"none"}},e,n,f,l)})}return m(s,e,n,f,l)}function m(r,t={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F(r,["unmount","static"]),y=void 0!==r.ref?{[l]:r.ref}:{},u="function"==typeof f?f(t):f;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let i=!1,c=[];for(let[T,p]of Object.entries(t))"boolean"==typeof p&&(i=!0),!0===p&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "))}if(a===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(x(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((p=>`  - ${p}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((p=>`  - ${p}`)).join("\n")].join("\n"));let i=u.props,c="function"==typeof(null==i?void 0:i.className)?(...p)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className(...p),s.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className,s.className),T=c?{className:c}:{};return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(u,Object.assign({},R(u.props,x(F(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(a,Object.assign({},F(s,["ref"]),a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),u)}function k(...r){return r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}function R(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&"function"==typeof o[a]?(null!=e[a]||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((o=>[o,void 0]))));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f)}}});return t}function U(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function x(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function F(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}}}]);
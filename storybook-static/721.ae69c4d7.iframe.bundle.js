/*! For license information please see 721.ae69c4d7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunktailwindcss_design_system=self.webpackChunktailwindcss_design_system||[]).push([[721],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@headlessui/react/dist/components/description/description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>G,f:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),_utils_render_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===r){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function w(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((s=>(t((o=>[...o,s])),()=>t((o=>{let p=o.slice(),c=p.indexOf(s);return-1!==c&&p.splice(c,1),p}))))),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({register:i,slot:e.slot,name:e.name,props:e.props})),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:n},e.children)}),[t])]}let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.yV)((function S(r,t){let a=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.M)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.e)((()=>n.register(e)),[e,n.register]);let o={ref:s,...n.props,id:e};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.sY)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})})),G=Object.assign(h,{})},"./node_modules/@headlessui/react/dist/components/keyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},"./node_modules/@headlessui/react/dist/components/switch/switch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>we});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),use_controllable=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-controllable.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),utils_form=__webpack_require__("./node_modules/@headlessui/react/dist/utils/form.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),description=__webpack_require__("./node_modules/@headlessui/react/dist/components/description/description.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");let d=(0,react.createContext)(null);function u(){let a=(0,react.useContext)(d);if(null===a){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function F(){let[a,t]=(0,react.useState)([]);return[a.length>0?a.join(" "):void 0,(0,react.useMemo)((()=>function(e){let s=(0,use_event.z)((r=>(t((l=>[...l,r])),()=>t((l=>{let n=l.slice(),p=n.indexOf(r);return-1!==p&&n.splice(p,1),n}))))),o=(0,react.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return react.createElement(d.Provider,{value:o},e.children)}),[t])]}let v=(0,render.yV)((function h(a,t){let i=(0,use_id.M)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=(0,use_sync_refs.T)(t);(0,use_iso_morphic_effect.e)((()=>r.register(e)),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),(0,render.sY)({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:"label",name:r.name||"Label"})})),B=Object.assign(v,{}),b=(0,react.createContext)(null);b.displayName="GroupContext";let Y=react.Fragment;let ne=(0,render.yV)((function te(s,n){let p=(0,use_id.M)(),{id:c=`headlessui-switch-${p}`,checked:f,defaultChecked:r=!1,onChange:h,name:l,value:T,form:y,...d}=s,t=(0,react.useContext)(b),u=(0,react.useRef)(null),g=(0,use_sync_refs.T)(u,n,null===t?null:t.setSwitch),[o,a]=(0,use_controllable.q)(f,h,r),S=(0,use_event.z)((()=>null==a?void 0:a(!o))),D=(0,use_event.z)((e=>{if((0,bugs.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),S()})),C=(0,use_event.z)((e=>{e.key===keyboard.R.Space?(e.preventDefault(),S()):e.key===keyboard.R.Enter&&(0,utils_form.g)(e.currentTarget)})),L=(0,use_event.z)((e=>e.preventDefault())),x=(0,react.useMemo)((()=>({checked:o})),[o]),v={id:c,ref:g,role:"switch",type:(0,use_resolve_button_type.f)(s,u),tabIndex:0,"aria-checked":o,"aria-labelledby":null==t?void 0:t.labelledby,"aria-describedby":null==t?void 0:t.describedby,onClick:D,onKeyUp:C,onKeyPress:L},G=(0,use_disposables.G)();return(0,react.useEffect)((()=>{var w;let e=null==(w=u.current)?void 0:w.closest("form");e&&void 0!==r&&G.addEventListener(e,"reset",(()=>{a(r)}))}),[u,a]),react.createElement(react.Fragment,null,null!=l&&o&&react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,...(0,render.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:y,checked:o,name:l,value:T})}),(0,render.sY)({ourProps:v,theirProps:d,slot:x,defaultTag:"button",name:"Switch"}))})),re=function Z(s){var d;let[n,p]=(0,react.useState)(null),[c,f]=F(),[r,h]=(0,description.f)(),l=(0,react.useMemo)((()=>({switch:n,setSwitch:p,labelledby:c,describedby:r})),[n,p,c,r]),y=s;return react.createElement(h,{name:"Switch.Description"},react.createElement(f,{name:"Switch.Label",props:{htmlFor:null==(d=l.switch)?void 0:d.id,onClick(t){n&&("LABEL"===t.currentTarget.tagName&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react.createElement(b.Provider,{value:l},(0,render.sY)({ourProps:{},theirProps:y,defaultTag:Y,name:"Switch.Group"}))))},we=Object.assign(ne,{Group:re,Label:B,Description:description.d})},"./node_modules/@headlessui/react/dist/hooks/use-controllable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=void 0!==l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((n=>(e||s(n),null==r?void 0:r(n))))]}},"./node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/@headlessui/react/dist/hooks/use-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>o});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...r)=>e.current(...r)),[e])}},"./node_modules/@headlessui/react/dist/hooks/use-id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>I});var o,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");let I=null!=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId():null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.e)((()=>{null===e&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId())}),[e]),null!=e?""+e:void 0}},"./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)}},"./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{r.current=e}),[e]),r}},"./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function T(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>i(t)));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{u(i(t))}),[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}},"./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{H:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function l(){let r=function s(){let r="undefined"==typeof document;return(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore((()=>()=>{}),(()=>!1),(()=>!r))}(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete);return e&&!1===_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{!0!==e&&n(!0)}),[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.handoff()),[]),!r&&e}},"./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>y,h:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{n.current=t}),[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>s,_:()=>f});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let f=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)((function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":2==(2&t)||(null!=(n=e["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&t)&&2!=(2&t)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:r,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"./node_modules/@headlessui/react/dist/utils/bugs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=""===(null==e?void 0:e.getAttribute("disabled"));return(!t||!function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:()=>r})},"./node_modules/@headlessui/react/dist/utils/class-names.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function t(...r){return Array.from(new Set(r.flatMap((n=>"string"==typeof n?n.split(" "):[])))).filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>t})},"./node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>o});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js");function o(){let n=[],r={addEventListener:(e,t,s,a)=>(e.addEventListener(t,s,a),r.add((()=>e.removeEventListener(t,s,a)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add((()=>{Object.assign(e.style,{[t]:a})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}),dispose(){for(let e of n.splice(0))e()}};return r}},"./node_modules/@headlessui/react/dist/utils/env.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>s});var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},"./node_modules/@headlessui/react/dist/utils/form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):e(t,s,i)}function p(i){var t,r;let s=null!=(t=null==i?void 0:i.form)?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type))return void n.click();null==(r=s.requestSubmit)||r.call(s)}}__webpack_require__.d(__webpack_exports__,{g:()=>p,t:()=>e})},"./node_modules/@headlessui/react/dist/utils/match.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:()=>u})},"./node_modules/@headlessui/react/dist/utils/micro-task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}__webpack_require__.d(__webpack_exports__,{Y:()=>t})},"./node_modules/@headlessui/react/dist/utils/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AN:()=>O,l4:()=>v,oA:()=>x,sY:()=>C,yV:()=>U});var e,n,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_class_names_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/class-names.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),O=((n=O||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),v=((e=v||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function C({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=null!=l?l:k;let s=R(t,r);if(a)return m(s,e,n,f,l);let y=null!=o?o:0;if(2&y){let{static:u=!1,...d}=s;if(u)return m(d,e,n,f,l)}if(1&y){let{unmount:u=!0,...d}=s;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(u?0:1,{0:()=>null,1:()=>m({...d,hidden:!0,style:{display:"none"}},e,n,f,l)})}return m(s,e,n,f,l)}function m(r,t={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F(r,["unmount","static"]),y=void 0!==r.ref?{[l]:r.ref}:{},u="function"==typeof f?f(t):f;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let i=!1,c=[];for(let[T,p]of Object.entries(t))"boolean"==typeof p&&(i=!0),!0===p&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "))}if(a===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(x(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((p=>`  - ${p}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((p=>`  - ${p}`)).join("\n")].join("\n"));let i=u.props,c="function"==typeof(null==i?void 0:i.className)?(...p)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className(...p),s.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className,s.className),T=c?{className:c}:{};return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(u,Object.assign({},R(u.props,x(F(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(a,Object.assign({},F(s,["ref"]),a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),u)}function k(...r){return r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}function R(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&"function"==typeof o[a]?(null!=e[a]||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((o=>[o,void 0]))));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f)}}});return t}function U(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function x(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function F(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}},"./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))}))},"./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XMarkIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}))},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
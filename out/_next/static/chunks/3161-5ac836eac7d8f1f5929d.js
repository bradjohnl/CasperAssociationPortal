(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{9420:function(e,t,n){"use strict";var r,o=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 41.191 41.191"},e),r||(r=o.createElement("path",{"data-name":"Icon metro-cross",d:"M40.815 33.092l-12.5-12.5 12.5-12.5a1.29 1.29 0 000-1.82l-5.9-5.9a1.291 1.291 0 00-1.82 0l-12.5 12.5L8.099.372a1.29 1.29 0 00-1.82 0l-5.9 5.9a1.29 1.29 0 000 1.82l12.5 12.5-12.5 12.5a1.29 1.29 0 000 1.82l5.9 5.9a1.29 1.29 0 001.82 0l12.5-12.5 12.5 12.5a1.29 1.29 0 001.82 0l5.9-5.9a1.29 1.29 0 000-1.82z",fill:"currentColor"})))}},24015:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(96156),o=n(85893),i=n(67294),u=n(11163),l=n(49226);var a=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e,t){return function(n){var s=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,l.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&u.default.push("/verify-email"),"onboarding"===n.period&&u.default.push("/onboard"),void("final"===n.period&&u.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&u.default.push("/onboard"),void("final"===n.period&&u.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&u.default.push("/verify-email"),void("final"===n.period&&u.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&u.default.push("/verify-email"),void("onboarding"===n.period&&u.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&u.default.push("/verify-email"),"onboarding"===n.period&&u.default.push("/onboard"),"final"===n.period&&u.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&u.default.push("/admin/dashboard");else"auth"!==t&&u.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!s)return(0,o.jsx)(a.Z,{});if("auth"===t&&s.isLoggedIn)return(0,o.jsx)(a.Z,{});if("auth"!==t&&!s.isLoggedIn)return(0,o.jsx)(a.Z,{});if("member"===s.role){if(["final-all","final-member"].includes(t)&&"final"!==s.period)return(0,o.jsx)(a.Z,{});if(["verifying"].includes(t)&&"verifying"!==s.period)return(0,o.jsx)(a.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==s.period)return(0,o.jsx)(a.Z,{})}if(["admin","sub-admin"].includes(s.role)&&["verifying","onboarding","final-member"].includes(t))return(0,o.jsx)(a.Z,{})}return(0,o.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},96375:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),o=n(49226),i=n(43022);function u(){var e=(0,o.v9)((function(e){return e.authReducer.metrics})),t=(0,o.v9)((function(e){return e.authReducer.metricConfig})),n=(0,o.I0)();(0,r.useEffect)((function(){Object.keys(e).length||n((0,i.qA)())}),[e]);return{metrics:e,refreshMetrics:function(){n((0,i.qA)())},metricConfig:t}}},44791:function(e,t,n){"use strict";var r=n(85893),o=n(733),i=n.n(o);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},4478:function(e,t,n){"use strict";n.d(t,{T:function(){return d},R:function(){return s}});var r=n(96156),o=n(85893),i=n(67294),u=n(73935);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=i.createContext({setDialog:function(e){return e}}),s=function(){var e=i.useContext(c);if(!e)throw new Error("useDialog must be used within a DialogProvider");return e},f=function(e){var t,n=e.dialog,l=e.onClosed,a=n.settings?n.settings:{},c=(0,i.useState)(n.defaultValue||""),s=c[0],f=c[1],d=function(e){l(),n.afterClosed&&("DialogPrompt"===n.type?e&&n.afterClosed(s):n.afterClosed(e))};return(0,u.createPortal)((0,o.jsxs)("div",{className:"w-screen h-screen justify-center items-center flex fixed inset-0 ".concat(null!==a&&void 0!==a&&a.zIndex?"z-".concat(null===a||void 0===a?void 0:a.zIndex):""),children:[(0,o.jsx)("div",{onClick:function(){a.noClose||d(!1)},className:"backdrop-filter backdrop-blur-sm fixed inset-0 z-40"}),(0,o.jsxs)("div",{className:"".concat(a.className||""," w-full max-w-2xl shadow-2xl mx-4 relative bg-white z-50"),style:a.style,children:["Dialog"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-2xl text-center pt-4 ".concat(a.titleClass),children:n.data.title}),!a.noClose&&(0,o.jsx)("a",{onClick:function(){return d(!1)},children:(0,o.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-4 top-4",alt:"Cancel"})}),(0,o.jsx)("div",{className:"h-full w-full py-16 flex flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})})]}),!a.hideButton&&(0,o.jsx)("button",{type:"button",className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-lg text-white w-1/2 lg:w-1/2 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return d(!1)},children:"OK"})]}),"DialogConfirm"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[n.data.title&&(0,o.jsx)("h3",{className:"text-2xl text-center mb-6",children:n.data.title}),(0,o.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})}),(0,o.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return d(!1)},children:n.data.cancel}),(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return d(!0)},children:n.data.ok})]})]}),"DialogPrompt"===n.type&&(0,o.jsxs)("div",{className:"border border-gray",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-2xl text-center m-20",children:n.data.title}),(0,o.jsx)("div",{className:"mx-20",children:(0,o.jsx)("input",{type:"text",className:"w-full h-16 text-xl px-4 shadow-md focus:outline-none",placeholder:"Email",value:s,onChange:function(e){f(e.target.value)},name:"email"})})]}),(0,o.jsxs)("div",{className:"flex flex-row justify-center m-20",children:[(0,o.jsx)("button",(t={type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"},(0,r.Z)(t,"className","mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"),(0,r.Z)(t,"onClick",(function(){return d(!0)})),(0,r.Z)(t,"children",n.data.ok),t)),(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return d(!1)},children:n.data.cancel})]})]}),"DialogCustom"===n.type&&(0,o.jsx)("div",{className:"rounded-xl",children:n.data.content}),"Notification"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[n.data.title&&(0,o.jsx)("h3",{className:"text-2xl text-center mb-6",children:n.data.title}),(0,o.jsx)("a",{onClick:function(){return d(!1)},children:(0,o.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-6 top-6",alt:"Cancel"})}),(0,o.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})}),(0,o.jsx)("div",{className:"flex flex-row justify-center",children:n.data.ok&&(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){window.open(n.data.link,"_blank"),d(!0)},children:n.data.ok})})]})]})]}),document.body)},d=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1],u=(0,i.useCallback)((function(){r(null)}),[r]);return(0,o.jsxs)(c.Provider,a(a({value:{dialog:n,onClosed:u,setDialog:r}},e),{},{children:[e.children,n&&(0,o.jsx)(f,{dialog:n,onClosed:u})]}))}},8517:function(e,t,n){"use strict";n.d(t,{sp:function(){return r},HA:function(){return o},uM:function(){return i},mm:function(){return u},u0:function(){return l},Dz:function(){return a},M3:function(){return c},eK:function(){return s},wT:function(){return f},Vu:function(){return d},Hp:function(){return p},Pf:function(){return y},j_:function(){return m},E_:function(){return h},XQ:function(){return x},oo:function(){return b},Vk:function(){return v},vv:function(){return j},kO:function(){return g},nn:function(){return O},ob:function(){return E},O7:function(){return w},Gi:function(){return S},pV:function(){return _},_Y:function(){return C},gg:function(){return N},oH:function(){return T},d2:function(){return D},N5:function(){return I},V6:function(){return P},H:function(){return A},ko:function(){return k}});var r=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS",payload:e}},o=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS_ERROR",payload:e}},i=function(e,t){return{type:"GET_VOTES",payload:e,successCb:t}},u=function(e,t){return{type:"GET_MY_VOTES",payload:e,successCb:t}},l=function(e,t,n){return{type:"GET_VOTE_DETAIL",payload:e,resolve:t,reject:n}},a=function(e){return{type:"GET_VOTE_DETAIL_SUCCESS",payload:e}},c=function(e){return{type:"GET_VOTE_DETAIL_ERROR",payload:e}},s=function(e,t,n){return{type:"RECORD_VOTE",payload:e,resolve:t,reject:n}},f=function(e){return{type:"RECORD_VOTE_SUCCESS",payload:e}},d=function(e){return{type:"RECORD_VOTE_ERROR",payload:e}},p=function(e,t){return{type:"GET_DISCUSSIONS",payload:e,successCb:t}},y=function(e,t,n){return{type:"GET_PINNED_DISCUSSIONS",payload:e,resolve:t,reject:n}},m=function(e,t,n){return{type:"GET_MY_DISCUSSIONS",payload:e,resolve:t,reject:n}},h=function(e,t){return{type:"GET_TRENDING_DISCUSSIONS",payload:e,resolve:t}},x=function(e,t,n){return{type:"GET_DISCUSSION_DETAIL",id:e,resolve:t,reject:n}},b=function(e,t){return{type:"GET_DISCUSSION_COMMENTS",payload:e,resolve:t}},v=function(e){return{type:"SET_DISCUSSION_PIN",id:e}},j=function(e,t,n){return{type:"CREATE_DISCUSSION",payload:e,resolve:t,reject:n}},g=function(e){return{type:"SET_REMOVE_NEW",id:e}},O=function(e,t,n){return{type:"POST_DISCUSSION_COMMENT",payload:e,resolve:t,reject:n}},E=function(e,t){return{type:"VOTE_DISCUSSION",payload:e,successCb:t}},w=function(e,t,n){return{type:"SUBMIT_NODE",payload:e,resolve:t,reject:n}},S=function(e,t,n){return{type:"SUBMIT_DETAIL",payload:e,resolve:t,reject:n}},_=function(e,t,n){return{type:"UPDATE_VERIFICATION_DOCUMENTS",payload:e,resolve:t,reject:n}},C=function(e,t){return{type:"GET_MY_INFO",resolve:e,reject:t}},N=function(e,t,n){return{type:"UPLOAD_AVATAR",payload:e,resolve:t,reject:n}},T=function(e,t,n){return{type:"CHECK_PASSWORD",payload:e,resolve:t,reject:n}},D=function(e,t,n){return{type:"UPDATE_USER_SETTINGS",payload:e,resolve:t,reject:n}},I=function(e,t){return{type:"DISMISS_NOTIFICATION",payload:e,resolve:t}},P=function(e,t){return{type:"UPDATE_VIEW_NOTIFICATION",payload:e,resolve:t}},A=function(e,t){return{type:"UPDATE_CLICK_CTA",payload:e,resolve:t}},k=function(e,t){return{type:"GET_LOCK_PAGE_CONDITIONS",resolve:e,reject:t}}}}]);
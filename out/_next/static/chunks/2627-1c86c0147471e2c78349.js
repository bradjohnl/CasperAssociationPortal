(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2627],{24015:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var r=n(96156),a=n(85893),i=n(67294),o=n(11163),s=n(49226);var l=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=function(e,t){return function(n){var u=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("final"===n.period&&o.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("onboarding"===n.period&&o.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),"final"===n.period&&o.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&o.default.push("/admin/dashboard");else"auth"!==t&&o.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!u)return(0,a.jsx)(l.Z,{});if("auth"===t&&u.isLoggedIn)return(0,a.jsx)(l.Z,{});if("auth"!==t&&!u.isLoggedIn)return(0,a.jsx)(l.Z,{});if("member"===u.role){if(["final-all","final-member"].includes(t)&&"final"!==u.period)return(0,a.jsx)(l.Z,{});if(["verifying"].includes(t)&&"verifying"!==u.period)return(0,a.jsx)(l.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==u.period)return(0,a.jsx)(l.Z,{})}if(["admin","sub-admin"].includes(u.role)&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(l.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},7667:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r,a=n(85893),i=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s,l=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8.087 16.173"},e),r||(r=i.createElement("path",{d:"M2.022 5.391H0v2.7h2.022v8.087h3.369V8.087h2.454l.241-2.7h-2.7V4.268c0-.644.129-.9.751-.9h1.944V0H5.52c-2.423 0-3.5 1.067-3.5 3.11z",fill:"currentColor"})))};function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u,d=function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19.901 16.173"},e),s||(s=i.createElement("path",{d:"M19.9 1.915a8.152 8.152 0 01-2.345.643 4.09 4.09 0 001.8-2.259 8.179 8.179 0 01-2.593.991A4.086 4.086 0 009.8 5.013 11.591 11.591 0 011.386.752a4.088 4.088 0 001.263 5.447A4.066 4.066 0 01.8 5.688a4.086 4.086 0 003.275 4.055 4.092 4.092 0 01-1.844.07 4.086 4.086 0 003.814 2.839A8.21 8.21 0 010 14.339a11.559 11.559 0 006.259 1.834A11.547 11.547 0 0017.864 4.028 8.313 8.313 0 0019.9 1.915z",fill:"currentColor"})))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m,p=function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.564 16.173"},e),u||(u=i.createElement("path",{d:"M17.624.165c-3.238-.221-10.451-.22-13.684 0C.438.4.026 2.519 0 8.087c.026 5.557.435 7.681 3.94 7.921 3.235.22 10.446.221 13.684 0 3.5-.239 3.914-2.354 3.94-7.921-.026-5.558-.435-7.682-3.94-7.922zM8.087 11.681V4.493l7.188 3.588z",fill:"currentColor"})))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v,x=function(e){return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.876 16.173"},e),m||(m=i.createElement("path",{d:"M3.5 1.758A1.744 1.744 0 111.758 0 1.751 1.751 0 013.5 1.758zm.014 3.164H0v11.251h3.516zm5.613 0H5.635v11.251h3.494v-5.906c0-3.284 4.24-3.553 4.24 0v5.906h3.508V9.049c0-5.541-6.274-5.339-7.748-2.612z",fill:"currentColor"})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){return i.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20.373 16.173"},e),v||(v=i.createElement("path",{d:"M2.416 3.3a.788.788 0 00-.257-.666L.257.342V0h5.907l4.565 10.012L14.742 0h5.63v.342L18.746 1.9a.477.477 0 00-.181.457v11.459a.476.476 0 00.181.456l1.588 1.559v.342h-7.989v-.342l1.646-1.6c.161-.161.161-.209.161-.456V4.517L9.578 16.136H8.96L3.633 4.517V12.3a1.075 1.075 0 00.295.893l2.14 2.6v.343H0v-.343l2.14-2.6a1.035 1.035 0 00.276-.893v-9z",fill:"currentColor"})))},y=function(e){var t=e.theme;return(0,a.jsxs)("div",{className:"flex items-center justify-between lg:visible invisible",children:[(0,a.jsx)("p",{className:"".concat("light"===t?"text-white":"text-dark2"," text-xs animate__animated animate__fadeIn animate__delay-5s\n    "),children:"\xa92021 CasperLabs.io"}),(0,a.jsxs)("div",{className:"flex space-x-6 animate__animated animate__fadeIn animate__delay-5s",children:[(0,a.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,a.jsx)(l,{width:"1.2rem",height:"1.2rem",className:"light"===t?"text-white":"text-primary"})}),(0,a.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,a.jsx)(d,{width:"1.2rem",height:"1.2rem",className:"light"===t?"text-white":"text-primary"})}),(0,a.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,a.jsx)(p,{width:"1.2rem",height:"1.2rem",className:"light"===t?"text-white":"text-primary"})}),(0,a.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,a.jsx)(x,{width:"1.2rem",height:"1.2rem",className:"light"===t?"text-white":"text-primary"})}),(0,a.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,a.jsx)(g,{width:"1.2rem",height:"1.2rem",className:"light"===t?"text-white":"text-primary"})})]})]})}},66570:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,a=n(85893),i=n(87757),o=n.n(i),s=n(92137),l=n(25675),c=n(49226),u=n(67294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){return u.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),r||(r=u.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},u.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),u.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),u.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},m=n(43022),p=function(e){var t=e.className,n=e.theme,r=(0,c.I0)();return(0,a.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,a.jsx)(l.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(0,a.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r((0,m.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,a.jsx)(f,{width:"2rem",height:"1.25rem",className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},69299:function(e,t,n){"use strict";var r=n(85893),a=n(11163),i=n(67294),o=n(49226),s=n(43022);t.Z=function(e){var t=e.title,n=e.description,l=e.imageUrl,c=e.currentStep,u=e.totalSteps,d=e.stepContent,f=e.showNextButton,m=e.showContinueButton,p=e.continueButtonTitle,h=e.hideContinueButton,v=e.onPrev,x=e.onNext,b=(0,a.useRouter)(),g=(0,i.useState)(!1),y=g[0],_=g[1],j=(0,o.v9)((function(e){return e.authReducer.userInfo})),N=(0,o.I0)();(0,i.useEffect)((function(){("Upload Letter"===t&&null!==j&&void 0!==j&&j.letter_verified_at&&j.signature_request_id&&j.node_verified_at||"Esign Terms"===t&&2===c&&j.node_verified_at&&null!==j&&void 0!==j&&j.letter_verified_at||"Verify Node Ownership"===t&&3===c&&j.signature_request_id&&null!==j&&void 0!==j&&j.letter_verified_at)&&_(!0)}),[c,t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"block lg:hidden w-full flex justify-between animate__animated animate__fadeInUp",children:[(0,r.jsxs)("button",{type:"button",className:"flex items-center focus:outline-none",onClick:v,children:[(0,r.jsx)("img",{src:"/images/ic_prev_circle.svg",alt:"prev",width:"18",height:"18",className:"mr-2"}),(0,r.jsx)("span",{className:"text-primary text-sm",children:"Back"})]}),"Submit KYC"===t?(0,r.jsx)("ul",{className:"list-disc lg:list-none",children:(0,r.jsx)("li",{className:"text-primary font-bold text-sm",children:4===c||5===c?"CSPR Owner KYC":"Operator KYC"})}):(0,r.jsxs)("button",{type:"button",className:"flex items-center focus:outline-none ".concat(f?"visible":"invisible"),onClick:x,children:[(0,r.jsx)("span",{className:"text-primary text-sm",children:"Next"}),(0,r.jsx)("img",{src:"/images/ic_next_circle.svg",alt:"next",width:"18",height:"18",className:"ml-2"})]}),!f&&"Submit KYC"===t&&(0,r.jsx)("ul",{className:"list-disc lg:list-none",children:(0,r.jsx)("li",{className:"text-primary font-bold text-sm",children:"Operator KYC"})})]}),(0,r.jsxs)("div",{className:"w-full lg:w-8.85/10",children:[(0,r.jsxs)("div",{className:"hidden lg:flex border-b border-gray pb-1 animate__animated animate__fadeInUp",children:[(0,r.jsx)("span",{className:"font-bold text-dark2",children:t}),"Submit KYC"===t&&(0,r.jsxs)("ul",{className:"flex list-disc",children:[(0,r.jsx)("li",{className:"mx-44 text-sm text-primary ".concat(c>=2?"font-bold":"text-opacity-50"),children:"Operator KYC"}),(0,r.jsx)("li",{className:"mx-44 text-sm text-primary ".concat(c>=4?"font-bold":"text-opacity-50"),children:"CSPR Owner KYC"})]})]}),(0,r.jsx)("div",{className:"hidden lg:block border-b border-primary border-2 animate__animated animate__fadeInUp",style:{width:"".concat(100*c/u,"%")}}),(0,r.jsxs)("div",{id:"custom-content",className:"mt-2 lg:flex lg:space-x-12 animate__animated animate__fadeInUp",children:[(0,r.jsxs)("div",{className:"relative w-full lg:w-auto lg:flex-none lg:h-114",children:[(0,r.jsx)("img",{src:l,alt:"esign terms",className:"w-full h-44 lg:h-auto object-cover"}),(0,r.jsxs)("div",{className:"absolute bottom-0 mx-4 my-8 opacity-30",children:[(0,r.jsx)("p",{className:"text-2xl",children:t}),(0,r.jsx)("p",{className:"text-sm text-dark1 mt-2",children:n})]})]}),(0,r.jsx)("div",{className:"flex-grow",children:d})]}),(0,r.jsxs)("div",{className:"hidden lg:flex justify-between border-b border-gray pb-2",children:[(0,r.jsxs)("button",{type:"button",className:"".concat("Submit KYC"===t&&6===c&&"invisible"," text-center ml-4 text-sm text-dark3 flex flex-col items-center justify-end focus:outline-none animate__animated animate__fadeInUp animate__delay-2s"),onClick:v,children:[(0,r.jsx)("img",{src:"/images/ic_prev_circle_gradient_small.svg",alt:"back",className:"mb-1"}),"Back"]}),!h&&(0,r.jsx)("div",{className:"animate__animated animate__fadeInUp animate__delay-4s",children:(0,r.jsxs)("button",{type:"button",className:"text-center ml-5 text-sm text-dark3 focus:outline-none disabled:opacity-25 disabled:cursor-not-allowed",disabled:!m,onClick:function(){y?(b.push("/dashboard"),N((0,s.Nq)({period:"final"}))):x()},children:[(0,r.jsx)("img",{src:"/images/ic_next_circle_gradient_large.svg",alt:"go to esign",className:"mb-1"}),y?"To Dashboard":p]})})]})]})]})}},43022:function(e,t,n){"use strict";n.d(t,{q0:function(){return r},Rg:function(){return a},uB:function(){return i},xv:function(){return o},c0:function(){return s},s:function(){return l},gQ:function(){return c},lm:function(){return u},hh:function(){return d},CS:function(){return f},$Y:function(){return m},B0:function(){return p},av:function(){return h},Nq:function(){return v},pn:function(){return x},V$:function(){return b},x8:function(){return g},Nc:function(){return y},zg:function(){return _},qA:function(){return j},j_:function(){return N},NL:function(){return w},EU:function(){return E},O7:function(){return O},Rv:function(){return I},L1:function(){return C},Pn:function(){return S},cK:function(){return R}});var r=function(e,t,n){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:n}},a=function(){return{type:"LOGOUT_APP"}},i=function(e,t,n){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:n}},o=function(e,t,n){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:n}},s=function(e,t,n){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:n}},l=function(e,t,n){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:n}},c=function(e,t,n){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:n}},u=function(e,t,n){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:n}},d=function(e,t){return{type:"RESEND_VERIFICATION_CODE",resolve:e,reject:t}},f=function(e){return{type:"FETCH_USER_INFO",resolve:e}},m=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},p=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},h=function(e){return{type:"SET_USER_INFO",payload:e}},v=function(e){return{type:"UPDATE_USER_INFO",payload:e}},x=function(){return{type:"CLEAR_USER_INFO"}},b=function(e,t,n){return{type:"CHANGE_EMAIL_CONFIRM",payload:e,resolve:t,reject:n}},g=function(e,t,n){return{type:"CHANGE_EMAIL_CANCEL",payload:e,resolve:t,reject:n}},y=function(e,t,n){return{type:"VERIFY_2FA",payload:e,resolve:t,reject:n}},_=function(e,t,n){return{type:"RESEND_2FA_CODE",resolve:t,reject:n}},j=function(){return{type:"GET_MY_METRICS"}},N=function(e){return{type:"SET_METRICS",payload:e}},w=function(){return{type:"CLEAR_METRICS"}},E=function(){return{type:"GET_BANNER_NOTIFICATIONS"}},O=function(){return{type:"GET_POPUP_NOTIFICATIONS"}},I=function(e){return{type:"SET_NOTIFICATIONS",payload:e}},C=function(){return{type:"CLEAR_NOTIFICATIONS"}},S=function(e,t,n){return{type:"GET_NODES_FROM_USER",payload:e,resolve:t,reject:n}},R=function(e,t){return{type:"GET_USER_DASHBOARD",resolve:e,reject:t}}}}]);
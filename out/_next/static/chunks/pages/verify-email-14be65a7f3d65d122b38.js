(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9070],{24015:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(96156),i=n(85893),o=n(67294),a=n(11163),u=n(49226);var l=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e,t){return function(n){var s=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,u.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&a.default.push("/verify-email"),"onboarding"===n.period&&a.default.push("/onboard"),void("final"===n.period&&a.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&a.default.push("/onboard"),void("final"===n.period&&a.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&a.default.push("/verify-email"),void("final"===n.period&&a.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&a.default.push("/verify-email"),void("onboarding"===n.period&&a.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&a.default.push("/verify-email"),"onboarding"===n.period&&a.default.push("/onboard"),"final"===n.period&&a.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&a.default.push("/admin/dashboard");else"auth"!==t&&a.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!s)return(0,i.jsx)(l.Z,{});if("auth"===t&&s.isLoggedIn)return(0,i.jsx)(l.Z,{});if("auth"!==t&&!s.isLoggedIn)return(0,i.jsx)(l.Z,{});if("member"===s.role){if(["final-all","final-member"].includes(t)&&"final"!==s.period)return(0,i.jsx)(l.Z,{});if(["verifying"].includes(t)&&"verifying"!==s.period)return(0,i.jsx)(l.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==s.period)return(0,i.jsx)(l.Z,{})}if(["admin","sub-admin"].includes(s.role)&&["verifying","onboarding","final-member"].includes(t))return(0,i.jsx)(l.Z,{})}return(0,i.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},7667:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893);n(67294);var i=function(e){var t=e.theme;return(0,r.jsx)("div",{className:"flex items-center justify-center lg:visible invisible",children:(0,r.jsx)("p",{className:"".concat("light"===t?"text-white":"text-dark2"," text-xs animate__animated animate__fadeIn animate__delay-5s\n    "),children:"\xa92021 CasperLabs.io"})})}},66570:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,i=n(85893),o=n(87757),a=n.n(o),u=n(92137),l=n(25675),c=n(49226),s=n(67294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),r||(r=s.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},s.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),s.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),s.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},p=n(43022),m=function(e){var t=e.className,n=e.theme,r=(0,c.I0)(),o=(0,c.v9)((function(e){return e.authReducer.userInfo}));return(0,i.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,i.jsx)(l.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(null===o||void 0===o?void 0:o.isLoggedIn)&&(0,i.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,u.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r((0,p.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,i.jsx)(f,{width:"2rem",height:"1.25rem",className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},44791:function(e,t,n){"use strict";var r=n(85893),i=n(733),o=n.n(i);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},29782:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(96156),o=n(41664),a=n(7318),u=n.n(a),l=n(42283),c=n(11163),s=n(67294),d=n(49226),f=n(7667),p=n(66570),m=n(12245),h=n(43022),y=n(24015),x=n(97705);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,y.a)((function(){var e=(0,l.cI)(),t=e.formState,n=e.register,i=e.handleSubmit,a=(0,d.I0)(),y=(0,c.useRouter)(),g=u()(),b=(0,d.v9)((function(e){return e.authReducer.userInfo.fullInfo})),_=(0,s.useState)(!1),j=_[0],E=_[1],N=(0,s.useContext)(x.AppContext).setLoading,O=function(){N(!0),a((0,h.hh)((function(){N(!1)}),(function(){N(!1)})))},w=function(){N(!0),a((0,h.zg)((function(){N(!1)}),(function(){N(!1)})))},I=function(){var e,i,a,u;return b&&!b.email_verified_at?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-4xl text-center",children:"Verify Your Email"}),(0,r.jsxs)("p",{className:"text-xs text-center mt-2 animate__delay-2s",children:["A verification code was sent to your email ",null===b||void 0===b?void 0:b.email,". You must enter this code in the field below to proceed. If you did not get the code, please check your spam folder."]}),(0,r.jsxs)("div",{className:"w-full flex flex-col",children:[(0,r.jsx)("input",v({type:"text",className:"fw-full text-center h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter Code",name:"code"},n("code",{required:"Code is required"}))),(null===(e=t.errors)||void 0===e?void 0:e.code)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(i=t.errors.code)||void 0===i?void 0:i.message}),(0,r.jsx)("input",v(v({},n("type")),{},{value:"verify-email",hidden:!0}))]}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-4 mt-14 lg:justify-center animate__delay-2s",children:(0,r.jsx)(m.fl,{type:"submit",isDisabled:j,isLoading:j,title:"Verify",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"})}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("a",{className:"text-primary underline font-medium cursor-pointer text-xs text-center animate__delay-4s",onClick:O,children:"Resend Verifcation Code"}),(0,r.jsx)("br",{}),(0,r.jsx)(o.default,{href:"/update-email",children:(0,r.jsx)("a",{className:"text-primary underline font-medium cursor-pointer text-xs text-center animate__delay-4s",children:"Update Email Address"})})]})]}):b&&b.twoFA_login?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-4xl text-center",children:"Two-Factor Authentication"}),(0,r.jsxs)("p",{className:"text-xs text-center mt-2 animate__delay-2s",children:["Please enter the code sent to the email: ",null===b||void 0===b?void 0:b.email]}),(0,r.jsxs)("div",{className:"w-full flex flex-col",children:[(0,r.jsx)("input",v({type:"text",className:"fw-full text-center h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter Code",name:"code"},n("code",{required:"Code is required"}))),(null===(a=t.errors)||void 0===a?void 0:a.code)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(u=t.errors.code)||void 0===u?void 0:u.message}),(0,r.jsx)("input",v(v({},n("type")),{},{value:"2fa",hidden:!0}))]}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-4 mt-14 lg:justify-center animate__delay-2s",children:(0,r.jsx)(m.fl,{type:"submit",isDisabled:j,isLoading:j,title:"Submit",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"})}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)("a",{className:"text-primary underline font-medium cursor-pointer text-xs text-center pt-5 flex justify-center animate__delay-4s",onClick:w,children:"Resend 2fa Code"})})]}):null};return(0,r.jsx)("div",{className:"flex justify-center h-screen",style:{backgroundImage:"url('/images/bg_welcome".concat(g.isMobile()?"_mobile":"",".png')"),backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,r.jsx)(p.Z,{theme:"light"}),(0,r.jsx)("form",{className:"flex-grow flex items-center justify-center",onSubmit:i((function(e){"verify-email"===e.type?(E(!0),a((0,h.lm)({code:e.code},(function(){y.push("/welcome")}),(function(){E(!1)})))):"2fa"===e.type&&(E(!0),a((0,h.Nc)({code:e.code},(function(){y.push("/dashboard")}),(function(){E(!1)}))))})),children:(0,r.jsx)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:p-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:(0,r.jsx)(I,{})})}),(0,r.jsx)(f.Z,{theme:"light"})]})})}),"verifying")},43022:function(e,t,n){"use strict";n.d(t,{q0:function(){return r},Rg:function(){return i},uB:function(){return o},xv:function(){return a},c0:function(){return u},s:function(){return l},gQ:function(){return c},lm:function(){return s},hh:function(){return d},CS:function(){return f},$Y:function(){return p},B0:function(){return m},av:function(){return h},Nq:function(){return y},pn:function(){return x},V$:function(){return g},x8:function(){return v},Nc:function(){return b},zg:function(){return _},qA:function(){return j},j_:function(){return E},NL:function(){return N},EU:function(){return O},O7:function(){return w},Rv:function(){return I},L1:function(){return S},Pn:function(){return R},cK:function(){return C}});var r=function(e,t,n){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:n}},i=function(){return{type:"LOGOUT_APP"}},o=function(e,t,n){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:n}},a=function(e,t,n){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:n}},u=function(e,t,n){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:n}},l=function(e,t,n){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:n}},c=function(e,t,n){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:n}},s=function(e,t,n){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:n}},d=function(e,t){return{type:"RESEND_VERIFICATION_CODE",resolve:e,reject:t}},f=function(e){return{type:"FETCH_USER_INFO",resolve:e}},p=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},m=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},h=function(e){return{type:"SET_USER_INFO",payload:e}},y=function(e){return{type:"UPDATE_USER_INFO",payload:e}},x=function(){return{type:"CLEAR_USER_INFO"}},g=function(e,t,n){return{type:"CHANGE_EMAIL_CONFIRM",payload:e,resolve:t,reject:n}},v=function(e,t,n){return{type:"CHANGE_EMAIL_CANCEL",payload:e,resolve:t,reject:n}},b=function(e,t,n){return{type:"VERIFY_2FA",payload:e,resolve:t,reject:n}},_=function(e,t,n){return{type:"RESEND_2FA_CODE",resolve:t,reject:n}},j=function(){return{type:"GET_MY_METRICS"}},E=function(e){return{type:"SET_METRICS",payload:e}},N=function(){return{type:"CLEAR_METRICS"}},O=function(){return{type:"GET_BANNER_NOTIFICATIONS"}},w=function(){return{type:"GET_POPUP_NOTIFICATIONS"}},I=function(e){return{type:"SET_NOTIFICATIONS",payload:e}},S=function(){return{type:"CLEAR_NOTIFICATIONS"}},R=function(e,t,n){return{type:"GET_NODES_FROM_USER",payload:e,resolve:t,reject:n}},C=function(e,t){return{type:"GET_USER_DASHBOARD",resolve:e,reject:t}}},6991:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify-email",function(){return n(29782)}])},7318:function(e,t,n){"use strict";const{useEffect:r}=n(67294),i=e=>{const t=()=>Boolean(e.match(/Android/i)),n=()=>Boolean(e.match(/iPhone|iPad|iPod/i)),r=()=>Boolean(e.match(/SSR/i)),i=()=>Boolean(t()||n()||Boolean(e.match(/Opera Mini/i))||Boolean(e.match(/IEMobile/i)));return{isMobile:i,isDesktop:()=>Boolean(!i()&&!r()),isAndroid:t,isIos:n,isSSR:r}};e.exports=()=>{const e="undefined"===typeof navigator?"SSR":navigator.userAgent;return i(e)}}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,9669,3913,2283,1045,8216],(function(){return t=6991,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
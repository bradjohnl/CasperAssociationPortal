(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1592],{4015:function(e,t,r){"use strict";r.d(t,{a:function(){return c}});var n=r(6156),a=r(5893),i=r(7294),s=r(1163),l=r(9226);var o=r(4791);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c=function(e,t){return function(r){var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,r=(0,l.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&r)if(r&&null!==r&&void 0!==r&&r.isLoggedIn)if("member"===r.role){if("auth"===t)return"verifying"===r.period&&s.default.push("/verify-email"),"onboarding"===r.period&&s.default.push("/onboard"),void("final"===r.period&&s.default.push("/dashboard"));if("verifying"===t)return"onboarding"===r.period&&s.default.push("/onboard"),void("final"===r.period&&s.default.push("/dashboard"));if("onboarding"===t)return"verifying"===r.period&&s.default.push("/verify-email"),void("final"===r.period&&s.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===r.period&&s.default.push("/verify-email"),void("onboarding"===r.period&&s.default.push("/onboard"));"final-admin"===t&&("verifying"===r.period&&s.default.push("/verify-email"),"onboarding"===r.period&&s.default.push("/onboard"),"final"===r.period&&s.default.push("/dashboard"))}else"admin"===r.role&&"final-all"!==t&&"final-admin"!==t&&s.default.push("/admin/dashboard");else"auth"!==t&&s.default.push("/login")}),[r,t]),{user:r}}({urlType:t}).user;if(t&&"public"!==t){if(!c)return(0,a.jsx)(o.Z,{});if("auth"===t&&c.isLoggedIn)return(0,a.jsx)(o.Z,{});if("auth"!==t&&!c.isLoggedIn)return(0,a.jsx)(o.Z,{});if("member"===c.role){if(["final-all","final-member"].includes(t)&&"final"!==c.period)return(0,a.jsx)(o.Z,{});if(["verifying"].includes(t)&&"verifying"!==c.period)return(0,a.jsx)(o.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==c.period)return(0,a.jsx)(o.Z,{})}if("admin"===c.role&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(o.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r))}}},6570:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n,a=r(5893),i=r(7757),s=r.n(i),l=r(2137),o=r(5675),u=r(9226),c=r(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=function(e){return c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),n||(n=c.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},c.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),c.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),c.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},f=r(3022),p=function(e){var t=e.className,r=e.theme,n=(0,u.I0)();return(0,a.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,a.jsx)(o.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(r,".svg"),alt:"casper logo",width:125,height:33}),(0,a.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,l.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n((0,f.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,a.jsx)(m,{width:"2rem",height:"1.25rem",className:"".concat("light"===r?"text-white":"text-dark2")})})]})}},4791:function(e,t,r){"use strict";var n=r(5893),a=r(733),i=r.n(a);t.Z=function(){return(0,n.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,n.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,n.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},4205:function(e,t,r){"use strict";r.d(t,{Ge:function(){return n},QI:function(){return a},tH:function(){return i},FZ:function(){return s},ec:function(){return l},mS:function(){return o}});var n=/^[\.a-zA-Z\s ]*$/,a=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,i=/^[A-Za-z0-9-]*$/,s=/(^)@[A-Za-z0-9-\_]*$/,l=/^[A-Za-z0-9-\s\.\_ ]*$/,o=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},6178:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(6156),i=r(7294),s=r(1163),l=r(2283),o=r(9226),u=r(4504),c=r(6570),d=r(4205),m=r(8569),f=r(3022),p=r(4015);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=(0,p.a)((function(){var e,t,r,a,p,h,v,g,y,b,j,_,w,N,E,O,P=(0,i.useState)(!1),I=P[0],S=P[1],k=(0,i.useState)(!1),Z=k[0],F=k[1],C=(0,s.useRouter)(),R=(0,l.cI)({mode:"onBlur"}),A=R.control,L=R.formState,D=R.register,T=R.handleSubmit,q=R.getValues,U=R.setValue,z=R.clearErrors,G=R.setError,H=(0,o.I0)(),B=(0,i.useState)(!1),M=B[0],$=B[1];return(0,n.jsx)("div",{className:"flex justify-center min-h-screen",children:(0,n.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,n.jsx)(c.Z,{theme:"dark"}),(0,n.jsx)("form",{className:"flex-grow flex items-center justify-center mt-16 lg:mt-0",onSubmit:T((function(e){$(!0),H((0,f.xv)(x({},e),(function(){C.push("/verify-email")}),(function(){$(!1)})))})),children:(0,n.jsxs)("div",{className:"w-full lg:w-9/12",children:[(0,n.jsx)("p",{className:"text-2xl animate__animated animate__fadeInLeft",children:"New Individual User"}),(0,n.jsx)("p",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInLeft animate__delay-2s",children:"Fill out the form to register."}),(0,n.jsxs)("div",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInUp animate__delay-4s",children:[(0,n.jsxs)("div",{className:"lg:flex mt-10 lg:space-x-5",children:[(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"First Name *",name:"firstName"},D("firstName",{required:"First name is required",pattern:{message:"First name is invalid",value:d.Ge}}))),(null===(e=L.errors)||void 0===e?void 0:e.firstName)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(t=L.errors.firstName)||void 0===t?void 0:t.message})]}),(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Last Name *",name:"lastName"},D("lastName",{required:"Last name is required",pattern:{message:"Last name is invalid",value:d.Ge}}))),(null===(r=L.errors)||void 0===r?void 0:r.lastName)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(a=L.errors.lastName)||void 0===a?void 0:a.message})]})]}),(0,n.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Email *",name:"email"},D("email",{required:"Email is required",pattern:{message:"Email is invalid",value:d.QI},validate:function(e){return e===q().confirmEmail||!L.touchedFields.confirmEmail||"Email not match"}}))),(null===(p=L.errors)||void 0===p?void 0:p.email)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(h=L.errors.email)||void 0===h?void 0:h.message})]}),(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Email *",name:"confirmEmail"},D("confirmEmail",{required:"Email Confirm is required",pattern:{message:"Email Confirm is invalid",value:d.QI},validate:function(e){return e===q().email?z("email"):G("email",{message:"Email not match"})}}))),(null===(v=L.errors)||void 0===v?void 0:v.confirmEmail)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(g=L.errors.confirmEmail)||void 0===g?void 0:g.message})]})]}),(0,n.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"password",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Password *",name:"password"},D("password",{required:"Password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Password is invalid",value:d.mS},validate:function(e){return e===q().confirmPassword||!L.touchedFields.confirmPassword||"Password not match"}}))),(null===(y=L.errors)||void 0===y?void 0:y.password)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(b=L.errors.password)||void 0===b?void 0:b.message})]}),(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"password",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Password *",name:"confirmPassword"},D("confirmPassword",{required:"Confirm password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Confirm password is invalid",value:d.mS},validate:function(e){return e===q().password?z("password"):G("password",{message:"Password not match"})}}))),(null===(j=L.errors)||void 0===j?void 0:j.confirmPassword)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(_=L.errors.confirmPassword)||void 0===_?void 0:_.message})]})]}),(0,n.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)("input",x({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Forum Name / Pseudonym *",name:"pseudonym"},D("pseudonym",{required:"Forum name is required",pattern:{message:"Forum name is invalid",value:d.tH}}))),(null===(w=L.errors)||void 0===w?void 0:w.pseudonym)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(N=L.errors.pseudonym)||void 0===N?void 0:N.message})]}),(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)(l.Qr,{name:"telegram",control:A,rules:{pattern:{message:"Telegram is invalid",value:d.FZ}},render:function(e){var t=e.field,r=t.value,a=t.onChange,i=t.onBlur;return(0,n.jsx)("input",{type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Telegram",name:"telegram",value:r,onChange:function(e){!function(e){""!==e.target.value&&/^@/.test(e.target.value)?U("telegram",e.target.value):(U("telegram","@"),e.target.value="@")}(e),a(e)},onBlur:function(e){!function(e){"@"===e.target.value&&U("telegram","")}(e),i(e)},onFocus:function(e){return function(e){e.target.value&&""!==e.target.value||U("telegram","@")}(e)}})}}),(null===(E=L.errors)||void 0===E?void 0:E.telegram)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(O=L.errors.telegram)||void 0===O?void 0:O.message})]})]})]}),(0,n.jsxs)("div",{className:"flex mt-10 animate__animated animate__fadeInUp animate__delay-6s",children:[(0,n.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return S(!I)},children:(0,n.jsx)("img",{src:"/images/".concat(I?"ic_check.svg":"ic_uncheck.svg"),alt:"agree checkbox",width:18,height:18})}),(0,n.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4",children:"I agree the Terms and Conditions, cookie policy, and privacy policy."})]}),(0,n.jsxs)("div",{className:"flex mt-5 animate__animated animate__fadeInUp animate__delay-7s",children:[(0,n.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return F(!Z)},children:(0,n.jsx)("img",{src:"/images/".concat(Z?"ic_check.svg":"ic_uncheck.svg"),alt:"understand checkbox",width:18,height:18})}),(0,n.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4 break-words",children:"I understand that this portal is only for Casper blockchain node operators and affirm that I do operate a node and understand that I will be required to prove I am a node operator."})]}),(0,n.jsx)("div",{className:"lg:flex lg:flex-row-reverse mt-10",children:(0,n.jsx)("div",{className:"animate__animated animate__fadeInLeft animate__delay-8s",children:(0,n.jsx)(m.fl,{type:"submit",isDisabled:!(I&&Z)||M,isLoading:M,title:"Submit",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md"})})})]})}),(0,n.jsx)(u.Z,{theme:"dark"})]})})}),"auth")},3022:function(e,t,r){"use strict";r.d(t,{q0:function(){return n},Rg:function(){return a},uB:function(){return i},xv:function(){return s},c0:function(){return l},s:function(){return o},gQ:function(){return u},lm:function(){return c},D:function(){return d},CS:function(){return m},$Y:function(){return f},B0:function(){return p},av:function(){return h},Nq:function(){return x},pn:function(){return v}});var n=function(e,t,r){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:r}},a=function(){return{type:"LOGOUT_APP"}},i=function(e,t,r){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:r}},s=function(e,t,r){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:r}},l=function(e,t,r){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:r}},o=function(e,t,r){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:r}},u=function(e,t,r){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:r}},c=function(e,t,r){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:r}},d=function(){return{type:"RESEND_2FA_CODE"}},m=function(e){return{type:"FETCH_USER_INFO",resolve:e}},f=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},p=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},h=function(e){return{type:"SET_USER_INFO",payload:e}},x=function(e){return{type:"UPDATE_USER_INFO",payload:e}},v=function(){return{type:"CLEAR_USER_INFO"}}},6597:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-individual",function(){return r(6178)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,1878],(function(){return t=6597,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
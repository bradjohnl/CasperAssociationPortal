(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766,179],{4015:function(e,a,n){"use strict";n.d(a,{a:function(){return l}});var t=n(6156),r=n(5893),o=n(7294),i=n(1163),s=n(9226);var c=n(4791);function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}var l=function(e,a){return function(n){var l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,a=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==a&&a&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===a)return"verifying"===n.period&&i.default.push("/verify-email"),"onboarding"===n.period&&i.default.push("/onboard"),void("final"===n.period&&i.default.push("/dashboard"));if("verifying"===a)return"onboarding"===n.period&&i.default.push("/onboard"),void("final"===n.period&&i.default.push("/dashboard"));if("onboarding"===a)return"verifying"===n.period&&i.default.push("/verify-email"),void("final"===n.period&&i.default.push("/dashboard"));if("final-member"===a||"final-all"===a)return"verifying"===n.period&&i.default.push("/verify-email"),void("onboarding"===n.period&&i.default.push("/onboard"));"final-admin"===a&&("verifying"===n.period&&i.default.push("/verify-email"),"onboarding"===n.period&&i.default.push("/onboard"),"final"===n.period&&i.default.push("/dashboard"))}else"admin"===n.role&&"final-all"!==a&&"final-admin"!==a&&i.default.push("/admin/dashboard");else"auth"!==a&&i.default.push("/login")}),[n,a]),{user:n}}({urlType:a}).user;if(a&&"public"!==a){if(!l)return(0,r.jsx)(c.Z,{});if("auth"===a&&l.isLoggedIn)return(0,r.jsx)(c.Z,{});if("auth"!==a&&!l.isLoggedIn)return(0,r.jsx)(c.Z,{});if("member"===l.role){if(["final-all","final-member"].includes(a)&&"final"!==l.period)return(0,r.jsx)(c.Z,{});if(["verifying"].includes(a)&&"verifying"!==l.period)return(0,r.jsx)(c.Z,{});if(["onboarding"].includes(a)&&"onboarding"!==l.period)return(0,r.jsx)(c.Z,{})}if("admin"===l.role&&["verifying","onboarding","final-member"].includes(a))return(0,r.jsx)(c.Z,{})}return(0,r.jsx)(e,function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({},n))}}},7667:function(e,a,n){"use strict";n.d(a,{Z:function(){return b}});var t,r=n(5893),o=n(7294);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var s,c=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8.087 16.173"},e),t||(t=o.createElement("path",{d:"M2.022 5.391H0v2.7h2.022v8.087h3.369V8.087h2.454l.241-2.7h-2.7V4.268c0-.644.129-.9.751-.9h1.944V0H5.52c-2.423 0-3.5 1.067-3.5 3.11z",fill:"currentColor"})))};function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var l,m=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19.901 16.173"},e),s||(s=o.createElement("path",{d:"M19.9 1.915a8.152 8.152 0 01-2.345.643 4.09 4.09 0 001.8-2.259 8.179 8.179 0 01-2.593.991A4.086 4.086 0 009.8 5.013 11.591 11.591 0 011.386.752a4.088 4.088 0 001.263 5.447A4.066 4.066 0 01.8 5.688a4.086 4.086 0 003.275 4.055 4.092 4.092 0 01-1.844.07 4.086 4.086 0 003.814 2.839A8.21 8.21 0 010 14.339a11.559 11.559 0 006.259 1.834A11.547 11.547 0 0017.864 4.028 8.313 8.313 0 0019.9 1.915z",fill:"currentColor"})))};function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f,p=function(e){return o.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.564 16.173"},e),l||(l=o.createElement("path",{d:"M17.624.165c-3.238-.221-10.451-.22-13.684 0C.438.4.026 2.519 0 8.087c.026 5.557.435 7.681 3.94 7.921 3.235.22 10.446.221 13.684 0 3.5-.239 3.914-2.354 3.94-7.921-.026-5.558-.435-7.682-3.94-7.922zM8.087 11.681V4.493l7.188 3.588z",fill:"currentColor"})))};function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var v,x=function(e){return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.876 16.173"},e),f||(f=o.createElement("path",{d:"M3.5 1.758A1.744 1.744 0 111.758 0 1.751 1.751 0 013.5 1.758zm.014 3.164H0v11.251h3.516zm5.613 0H5.635v11.251h3.494v-5.906c0-3.284 4.24-3.553 4.24 0v5.906h3.508V9.049c0-5.541-6.274-5.339-7.748-2.612z",fill:"currentColor"})))};function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var y=function(e){return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20.373 16.173"},e),v||(v=o.createElement("path",{d:"M2.416 3.3a.788.788 0 00-.257-.666L.257.342V0h5.907l4.565 10.012L14.742 0h5.63v.342L18.746 1.9a.477.477 0 00-.181.457v11.459a.476.476 0 00.181.456l1.588 1.559v.342h-7.989v-.342l1.646-1.6c.161-.161.161-.209.161-.456V4.517L9.578 16.136H8.96L3.633 4.517V12.3a1.075 1.075 0 00.295.893l2.14 2.6v.343H0v-.343l2.14-2.6a1.035 1.035 0 00.276-.893v-9z",fill:"currentColor"})))},b=function(e){var a=e.theme;return(0,r.jsxs)("div",{className:"flex items-center justify-between lg:visible invisible",children:[(0,r.jsx)("p",{className:"".concat("light"===a?"text-white":"text-dark2"," text-xs animate__animated animate__fadeIn animate__delay-5s\n    "),children:"\xa92021 CasperLabs.io"}),(0,r.jsxs)("div",{className:"flex space-x-6 animate__animated animate__fadeIn animate__delay-5s",children:[(0,r.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,r.jsx)(c,{width:8,height:16,className:"light"===a?"text-white":"text-primary"})}),(0,r.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,r.jsx)(m,{width:20,height:16,className:"light"===a?"text-white":"text-primary"})}),(0,r.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,r.jsx)(p,{width:22,height:16,className:"light"===a?"text-white":"text-primary"})}),(0,r.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,r.jsx)(x,{width:16,height:16,className:"light"===a?"text-white":"text-primary"})}),(0,r.jsx)("button",{className:"flex bottom-0 transition duration-300 ease-in-out transform hover:scale-150",type:"button",children:(0,r.jsx)(y,{width:20,height:16,className:"light"===a?"text-white":"text-primary"})})]})]})}},6570:function(e,a,n){"use strict";n.d(a,{Z:function(){return p}});var t,r=n(5893),o=n(7757),i=n.n(o),s=n(2137),c=n(5675),d=n(9226),l=n(7294);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var u=function(e){return l.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),t||(t=l.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},l.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),l.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),l.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},f=n(3022),p=function(e){var a=e.className,n=e.theme,t=(0,d.I0)();return(0,r.jsxs)("div",{className:"flex items-center justify-between ".concat(a||""),children:[(0,r.jsx)(c.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(0,r.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,s.Z)(i().mark((function e(a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t((0,f.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),children:(0,r.jsx)(u,{width:35,height:20,className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},4791:function(e,a,n){"use strict";var t=n(5893);a.Z=function(){return(0,t.jsx)("p",{children:"Loading"})}},1089:function(e,a,n){"use strict";n.d(a,{z:function(){return i}});var t=n(5893),r=n(733),o=n.n(r);function i(e){var a="flex items-center justify-center ".concat(e.className||""),n=e.colorSpinner?e.colorSpinner:"#FFFFFF";return(0,t.jsxs)("button",{className:a,type:e.type?e.type:"button",disabled:!!e.isDisabled&&e.isDisabled,onClick:function(){e.onClick&&"function"===typeof e.onClick&&e.onClick()},children:[e.isLoading&&(0,t.jsx)(o(),{type:"spinningBubbles",color:n,width:30,height:30}),(0,t.jsx)("span",{className:"pl-3",children:e.title})]})}},4205:function(e,a,n){"use strict";n.d(a,{Ge:function(){return t},QI:function(){return r},tH:function(){return o},FZ:function(){return i},ec:function(){return s},mS:function(){return c}});var t=/^[\.a-zA-Z\s ]*$/,r=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,o=/^[A-Za-z0-9-]*$/,i=/(^)@[A-Za-z0-9-\_]*$/,s=/^[A-Za-z0-9-\s\.\_ ]*$/,c=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},2038:function(e,a,n){"use strict";n.r(a);var t=n(5893),r=n(6156),o=n(7294),i=n(1163),s=n(2283),c=n(9226),d=n(7667),l=n(6570),m=n(3732),u=n(4205),f=n(1089),p=n(3022),h=n(4015);function v(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function x(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?v(Object(n),!0).forEach((function(a){(0,r.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var g=[{code:"LLC",name:"LLC"},{code:"Coporation",name:"Coporation"},{code:"Trust",name:"Trust"},{code:"Foundation",name:"Foundation"},{code:"Association",name:"Association"},{code:"Sole Proprietorship",name:"Sole Proprietorship"},{code:"Other",name:"Other"}];a.default=(0,h.a)((function(){var e,a,n,r,h,v,y,b,N,w,j,S,E,_,C,I,O,P,T,A,M,R,L,G,B,k,F=(0,o.useState)(!1),D=F[0],Z=F[1],U=(0,o.useState)(!1),H=U[0],V=U[1],z=(0,i.useRouter)(),K=(0,s.cI)({mode:"onBlur"}),q=K.control,W=K.formState,J=K.register,Y=K.handleSubmit,Q=K.getValues,$=K.setValue,X=K.clearErrors,ee=K.setError,ae=K.watch,ne=(0,c.I0)(),te=(0,o.useState)(!1),re=te[0],oe=te[1],ie=ae("entityRegisterCountry"),se=ae("entityType");return(0,t.jsx)("div",{className:"flex justify-center min-h-screen",children:(0,t.jsxs)("div",{className:"w-full md:max-w-screen-2xl md:p-9 p-4 flex flex-col",children:[(0,t.jsx)(l.Z,{theme:"dark"}),(0,t.jsx)("form",{className:"flex-grow flex items-center justify-center mt-16 md:mt-0",onSubmit:Y((function(e){oe(!0),ne((0,p.uB)(x({},e),(function(){z.push("/verify-email")}),(function(){oe(!1)})))})),children:(0,t.jsxs)("div",{className:"w-full md:w-9/12",children:[(0,t.jsx)("p",{className:"text-2xl animate__animated animate__fadeInLeft",children:"New Entity User"}),(0,t.jsx)("p",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInLeft animate__delay-2s",children:"LLC/Corp/Trust/Etc. Please fill out the form to register."}),(0,t.jsxs)("div",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInUp animate__delay-4s",children:[(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Entity Name *",name:"entityName"},J("entityName",{required:"Entity name is required",pattern:{message:"Entity name is invalid",value:u.ec}}))),(null===(e=W.errors)||void 0===e?void 0:e.entityName)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(a=W.errors.entityName)||void 0===a?void 0:a.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsxs)("div",{className:"w-full md:flex-1 flex items-center justify-between px-7 mt-2 md:mt-0 h-14 rounded-full shadow-md",children:[(0,t.jsxs)("select",x(x({className:"w-full h-full cursor-pointer focus:outline-none ".concat((null===se||void 0===se?void 0:se.length)>0?"text-black1":"text-gray"),name:"entityType"},J("entityType",{required:"Entity type is require"})),{},{children:[(0,t.jsx)("option",{className:"text-gray",value:"",disabled:!0,selected:!0,children:"Select Entity Type *"}),g.map((function(e,a){return(0,t.jsx)("option",{value:e.code,children:e.name},a)}))]})),(0,t.jsx)("img",{src:"/images/ic_arrow_down.svg",alt:"down"})]}),(null===(n=W.errors)||void 0===n?void 0:n.entityType)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(r=W.errors.entityType)||void 0===r?void 0:r.message})]})]}),(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Entity Registration Number *",name:"entityRegisterNumber"},J("entityRegisterNumber",{required:"Entity registration number is required",pattern:{message:"Entity registration number is invalid",value:u.ec}}))),(null===(h=W.errors)||void 0===h?void 0:h.entityRegisterNumber)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(v=W.errors.entityRegisterNumber)||void 0===v?void 0:v.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsxs)("div",{className:"w-full md:flex-1 flex items-center justify-between px-7 mt-2 md:mt-0 h-14 rounded-full shadow-md",children:[(0,t.jsxs)("select",x(x({className:"w-full h-full cursor-pointer focus:outline-none ".concat((null===ie||void 0===ie?void 0:ie.length)>0?"text-black1":"text-gray"),name:"entityRegisterCountry"},J("entityRegisterCountry",{required:"Entity Registration Country is require"})),{},{children:[(0,t.jsx)("option",{className:"text-gray",value:"",disabled:!0,selected:!0,children:"Entity Registration Country *"}),m.map((function(e,a){return(0,t.jsx)("option",{value:e.code,children:e.name},a)}))]})),(0,t.jsx)("img",{src:"/images/ic_arrow_down.svg",alt:"down"})]}),(null===(y=W.errors)||void 0===y?void 0:y.entityRegisterCountry)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(b=W.errors.entityRegisterCountry)||void 0===b?void 0:b.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Entity Tax ID/VAT Number",name:"entityTax"},J("entityTax",{pattern:{message:"Entity Tax ID/VAT Number is invalid",value:u.ec}}))),(null===(N=W.errors)||void 0===N?void 0:N.entityTax)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(w=W.errors.entityTax)||void 0===w?void 0:w.message})]})]}),(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"First Name of Entity Representative *",name:"firstName"},J("firstName",{required:"First name is required",pattern:{message:"First name is invalid",value:u.Ge}}))),(null===(j=W.errors)||void 0===j?void 0:j.firstName)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(S=W.errors.firstName)||void 0===S?void 0:S.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Last Name of Entity Representative *",name:"lastName"},J("lastName",{required:"Last name is required",pattern:{message:"Last name is invalid",value:u.Ge}}))),(null===(E=W.errors)||void 0===E?void 0:E.lastName)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(_=W.errors.lastName)||void 0===_?void 0:_.message})]})]}),(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Email *",name:"email"},J("email",{required:"Email is required",pattern:{message:"Email is invalid",value:u.QI},validate:function(e){return e===Q().confirmEmail||!W.touchedFields.confirmEmail||"Email not match"}}))),(null===(C=W.errors)||void 0===C?void 0:C.email)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(I=W.errors.email)||void 0===I?void 0:I.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Email *",name:"confirmEmail"},J("confirmEmail",{required:"Email Confirm is required",pattern:{message:"Email Confirm is invalid",value:u.QI},validate:function(e){return e===Q().email?X("email"):ee("email",{message:"Email not match"})}}))),(null===(O=W.errors)||void 0===O?void 0:O.confirmEmail)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(P=W.errors.confirmEmail)||void 0===P?void 0:P.message})]})]}),(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"password",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Password *",name:"password"},J("password",{required:"Password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Password is invalid",value:u.mS},validate:function(e){return e===Q().confirmPassword||!W.touchedFields.confirmPassword||"Password not match"}}))),(null===(T=W.errors)||void 0===T?void 0:T.password)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(A=W.errors.password)||void 0===A?void 0:A.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"password",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Password *",name:"confirmPassword"},J("confirmPassword",{required:"Confirm password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Confirm password is invalid",value:u.mS},validate:function(e){return e===Q().password?X("password"):ee("password",{message:"Password not match"})}}))),(null===(M=W.errors)||void 0===M?void 0:M.confirmPassword)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(R=W.errors.confirmPassword)||void 0===R?void 0:R.message})]})]}),(0,t.jsxs)("div",{className:"md:flex mt-5 md:space-x-5",children:[(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)("input",x({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Forum Name / Pseudonym *",name:"pseudonym"},J("pseudonym",{required:"Forum name is required",pattern:{message:"Forum name is invalid",value:u.tH}}))),(null===(L=W.errors)||void 0===L?void 0:L.pseudonym)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(G=W.errors.pseudonym)||void 0===G?void 0:G.message})]}),(0,t.jsxs)("div",{className:"flex-1 flex-col",children:[(0,t.jsx)(s.Qr,{name:"telegram",control:q,rules:{pattern:{message:"Telegram is invalid",value:u.FZ}},render:function(e){var a=e.field,n=a.value,r=a.onChange,o=a.onBlur;return(0,t.jsx)("input",{type:"text",className:"w-full mt-2 md:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Telegram",name:"telegram",value:n,onChange:function(e){!function(e){""!==e.target.value&&/^@/.test(e.target.value)?$("telegram",e.target.value):($("telegram","@"),e.target.value="@")}(e),r(e)},onBlur:function(e){!function(e){"@"===e.target.value&&$("telegram","")}(e),o(e)},onFocus:function(e){return function(e){e.target.value&&""!==e.target.value||$("telegram","@")}(e)}})}}),(null===(B=W.errors)||void 0===B?void 0:B.telegram)&&(0,t.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(k=W.errors.telegram)||void 0===k?void 0:k.message})]})]})]}),(0,t.jsxs)("div",{className:"flex mt-10 animate__animated animate__fadeInUp animate__delay-6s",children:[(0,t.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return Z(!D)},children:(0,t.jsx)("img",{src:"/images/".concat(D?"ic_check.svg":"ic_uncheck.svg"),alt:"agree checkbox",width:18,height:18})}),(0,t.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4",children:"I agree the Terms and Conditions, cookie policy, and privacy policy."})]}),(0,t.jsxs)("div",{className:"flex mt-5 animate__animated animate__fadeInUp animate__delay-7s",children:[(0,t.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return V(!H)},children:(0,t.jsx)("img",{src:"/images/".concat(H?"ic_check.svg":"ic_uncheck.svg"),alt:"understand checkbox",width:18,height:18})}),(0,t.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4 break-words",children:"I understand that this portal is only for Casper blockchain node operators and affirm that I do operate a node and understand that I will be required to prove I am a node operator."})]}),(0,t.jsx)("div",{className:"md:flex md:flex-row-reverse mt-10",children:(0,t.jsx)("div",{className:"animate__animated animate__fadeInLeft animate__delay-8s",children:(0,t.jsx)(f.z,{type:"submit",isDisabled:!(D&&H)||re,isLoading:re,title:"Submit",className:"text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md"})})})]})}),(0,t.jsx)(d.Z,{theme:"dark"})]})})}),"auth")},3022:function(e,a,n){"use strict";n.d(a,{q0:function(){return t},Rg:function(){return r},uB:function(){return o},xv:function(){return i},c0:function(){return s},s:function(){return c},gQ:function(){return d},lm:function(){return l},D:function(){return m},CS:function(){return u},$Y:function(){return f},B0:function(){return p},av:function(){return h},Nq:function(){return v},pn:function(){return x}});var t=function(e,a,n){return{type:"LOGIN_APP",callback:a,payload:e,resetSubmitting:n}},r=function(){return{type:"LOGOUT_APP"}},o=function(e,a,n){return{type:"REGISTER_ENTITY",callback:a,payload:e,resetSubmitting:n}},i=function(e,a,n){return{type:"REGISTER_INDIVIDUAL",callback:a,payload:e,resetSubmitting:n}},s=function(e,a,n){return{type:"RESET_PASSWORD",callback:a,payload:e,resetSubmitting:n}},c=function(e,a,n){return{type:"UPDATE_EMAIL",callback:a,payload:e,resetSubmitting:n}},d=function(e,a,n){return{type:"UPDATE_PASSWORD",callback:a,payload:e,resetSubmitting:n}},l=function(e,a,n){return{type:"VERIFY_EMAIL",callback:a,payload:e,resetSubmitting:n}},m=function(){return{type:"RESEND_2FA_CODE"}},u=function(){return{type:"FETCH_USER_INFO"}},f=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},p=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},h=function(e){return{type:"SET_USER_INFO",payload:e}},v=function(e){return{type:"UPDATE_USER_INFO",payload:e}},x=function(){return{type:"CLEAR_USER_INFO"}}},1513:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-entity",function(){return n(2038)}])},3732:function(e){"use strict";e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"\xc5land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')},4453:function(){}},function(e){e.O(0,[9774,1282,319,6993,733,2283],(function(){return a=1513,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
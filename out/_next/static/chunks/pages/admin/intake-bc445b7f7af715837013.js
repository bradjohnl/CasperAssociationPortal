(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2747],{99310:function(e,r,t){"use strict";var n,i=t(67294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}r.Z=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:19.997,height:14.452},e),n||(n=i.createElement("path",{fill:"none",stroke:"currentColor",d:"M17.875 2.121L7.044 12.952 2.121 8.029",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3})))}},6280:function(e,r,t){"use strict";t.d(r,{e$:function(){return l},t1:function(){return s},sp:function(){return a}});var n=t(85893),i=t(67294),o=function(e){var r=e.onApproveUser,t=e.onResetUser,i=e.onBanUser;return(0,n.jsxs)("div",{className:"py-16 text-center w-96 mx-auto",children:[(0,n.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Letter Review"}),(0,n.jsx)("p",{className:"text-xs text-gray mb-8",children:"Please click to review the provided letter and make a decision"}),(0,n.jsxs)("div",{className:"flex gap-2.5 flex-col items-center",children:[(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:r,children:"Approve User"}),(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:t,children:"Deny & Reset"}),(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:i,children:"Deny & Ban User"})]})]})},l=function(e){var r=e.description,t=e.onResetUser,o=e.onBack,l=(0,i.useState)(""),s=l[0],a=l[1];return(0,n.jsxs)("div",{className:"py-16 text-center mx-auto",style:{maxWidth:"37.5rem"},children:[(0,n.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Reset User"}),(0,n.jsx)("p",{className:"text-xs text-gray pb-5",children:r}),(0,n.jsx)("textarea",{value:s,onChange:function(e){return a(e.target.value)},rows:"6",className:"p-4 w-full border border-gray focus:outline-none"}),(0,n.jsxs)("div",{className:"mt-8 mx-auto w-96 flex gap-2.5 flex-col items-center",children:[(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:function(){return t(s)},children:"Reset & Email User"}),(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:o,children:"Cancel & Go Back"})]})]})},s=function(e){var r=e.onBanUser,t=e.onBack;return(0,n.jsxs)("div",{className:"text-center mx-auto py-28",style:{maxWidth:"26rem"},children:[(0,n.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Ban User"}),(0,n.jsx)("p",{className:"text-xs text-gray",children:"Are you sure? This will change the user to banned status and prevent login."}),(0,n.jsxs)("div",{className:"w-96 flex gap-2.5 flex-col items-center mx-auto mt-8",children:[(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:r,children:"Yes, Ban This User"}),(0,n.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:t,children:"Cancel & Go Back"})]})]})},a=function(e){var r=e.onApproveUser,t=e.onBanUser,a=e.onResetUser,c=(0,i.useState)("approve"),d=c[0],u=c[1];return(0,n.jsxs)(n.Fragment,{children:["approve"===d&&(0,n.jsx)(o,{onApproveUser:r,onResetUser:function(){return u("reset")},onBanUser:function(){return u("ban")}}),"ban"===d&&(0,n.jsx)(s,{onBanUser:t,onBack:function(){return u("approve")}}),"reset"===d&&(0,n.jsx)(l,{description:"This will reset the submit letter step and tell the user through email to submit again for the following reason:",onResetUser:function(e){return a(e)},onBack:function(){return u("approve")}})]})}},24015:function(e,r,t){"use strict";t.d(r,{a:function(){return d}});var n=t(96156),i=t(85893),o=t(67294),l=t(11163),s=t(49226);var a=t(44791);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var d=function(e,r){return function(t){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,r=void 0===e?"public":e,t=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==r&&r&&t)if(t&&null!==t&&void 0!==t&&t.isLoggedIn)if("member"===t.role){if("auth"===r)return"verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("verifying"===r)return"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("onboarding"===r)return"verifying"===t.period&&l.default.push("/verify-email"),void("final"===t.period&&l.default.push("/dashboard"));if("final-member"===r||"final-all"===r)return"verifying"===t.period&&l.default.push("/verify-email"),void("onboarding"===t.period&&l.default.push("/onboard"));"final-admin"===r&&("verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),"final"===t.period&&l.default.push("/dashboard"))}else"admin"===t.role&&"final-all"!==r&&"final-admin"!==r&&l.default.push("/admin/dashboard");else"auth"!==r&&l.default.push("/login")}),[t,r]),{user:t}}({urlType:r}).user;if(r&&"public"!==r){if(!d)return(0,i.jsx)(a.Z,{});if("auth"===r&&d.isLoggedIn)return(0,i.jsx)(a.Z,{});if("auth"!==r&&!d.isLoggedIn)return(0,i.jsx)(a.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(r)&&"final"!==d.period)return(0,i.jsx)(a.Z,{});if(["verifying"].includes(r)&&"verifying"!==d.period)return(0,i.jsx)(a.Z,{});if(["onboarding"].includes(r)&&"onboarding"!==d.period)return(0,i.jsx)(a.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(r))return(0,i.jsx)(a.Z,{})}return(0,i.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t))}}},54606:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return D}});var n=t(85893),i=t(24015),o=t(25955),l=t(28569),s=t(96156),a=t(87329),c=t(32465),d=t(67294),u=t(49226),p=t(29163),f=t(87028),h=t(64605),x=t(6280),b=t(4478),m=t(29586),j=t(99310),v=t(56073);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(){var e=(0,c.Z)(["\n  .intake-table {\n    .col-1 {\n      width: 25%;\n    }\n    .col-2 {\n      width: 35%;\n    }\n    .col-3 {\n      width: 15%;\n    }\n    .col-4 {\n      width: 15%;\n    }\n    .col-5 {\n      width: 10%;\n    }\n  }\n"]);return w=function(){return e},e}var O=p.ZP.div(w()),N=function(){var e=(0,b.R)(),r=e.setDialog,t=e.onClosed,i=(0,u.I0)(),o=(0,d.useContext)(v.AppContext).setLoading,s=(0,h.x)(),c=s.data,p=s.setData,y=s.register,w=s.hasMore,N=s.appendData,C=s.setHasMore,A=s.page,k=s.setPage,P=function(){i((0,f.c8)({page:A},(function(e,r){C(r),N(e),k((function(e){return e+1}))})))};(0,d.useEffect)((function(){P()}),[]);var _=function(e,l){window.open("".concat(e.letter_file_url),"_blank"),r({type:"DialogCustom",data:{content:(0,n.jsx)(x.sp,{onResetUser:function(r){return function(e,r,n){o(!0),i((0,f.zb)({id:e,message:r},(function(){c[n].letter_file=null,p((0,a.Z)(c)),t(),o(!1)}),(function(){o(!1)})))}(e.id,r,l)},onBanUser:function(){return r=e.id,n=l,o(!0),void i((0,f.QT)({id:r},(function(){c.splice(n,1),p((0,a.Z)(c)),t(),o(!1)}),(function(){o(!1)})));var r,n},onApproveUser:function(){return r=e.id,n=l,o(!0),void i((0,f.Hi)({id:r},(function(){c[n].letter_verified_at=!0,p((0,a.Z)(c)),t(),o(!1)}),(function(){o(!1)})));var r,n}})}})};return(0,n.jsx)(O,{className:"h-full",children:(0,n.jsxs)(l.iA,g(g({},y),{},{className:"intake-table pt-5 h-full",onLoadMore:P,hasMore:w,dataLength:c.length,children:[(0,n.jsxs)(l.iA.Header,{children:[(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Registration Date"})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Users Email"})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsxs)("p",{children:["Signature ",(0,n.jsx)("br",{})," Complete"]})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsxs)("p",{children:["Node Verification ",(0,n.jsx)("br",{})," Complete"]})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Letter of Motivation"})})]}),(0,n.jsx)(l.iA.Body,{children:c.map((function(e,r){return(0,n.jsxs)(l.iA.BodyRow,{children:[(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{children:(0,m.p)(new Date(null===e||void 0===e?void 0:e.created_at))})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{className:"truncate",children:e.email})}),(0,n.jsx)(l.iA.BodyCell,{children:!!e.signature_request_id&&(0,n.jsx)(j.Z,{className:"text-primary"})}),(0,n.jsx)(l.iA.BodyCell,{children:!!e.node_verified_at&&(0,n.jsx)(j.Z,{className:"text-primary"})}),(0,n.jsx)(l.iA.BodyCell,{children:e.letter_verified_at?(0,n.jsx)(j.Z,{className:"text-primary"}):(0,n.jsx)("button",{type:"button",onClick:function(){return _(e,r)},className:"text-primary cursor-pointer underline disabled:opacity-40 disabled:cursor-not-allowed",disabled:!e.letter_file,children:"Review"})})]},r)}))})]}))})},C=t(41664);function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function P(){var e=(0,c.Z)(["\n  .intake-table {\n    .col-1 {\n      width: 20%;\n    }\n    .col-2 {\n      width: 25%;\n    }\n    .col-3 {\n      width: 15%;\n    }\n    .col-4 {\n      width: 15%;\n    }\n    .col-5 {\n      width: 15%;\n    }\n    .col-6 {\n      width: 10%;\n    }\n  }\n"]);return P=function(){return e},e}var _=p.ZP.div(P()),B=function(){var e=(0,u.I0)(),r=(0,h.x)(),t=r.data,i=r.register,o=r.hasMore,s=r.appendData,a=r.setHasMore,c=r.page,p=r.setPage,x=function(){e((0,f.fX)({page:c},(function(e,r){a(r),s(e),p((function(e){return e+1}))})))};return(0,d.useEffect)((function(){x()}),[]),(0,n.jsx)(_,{className:"h-full",children:(0,n.jsxs)(l.iA,k(k({},i),{},{className:"intake-table pt-5 h-full",onLoadMore:x,hasMore:o,dataLength:t.length,children:[(0,n.jsxs)(l.iA.Header,{children:[(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Registration Date"})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Users Email"})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Type"})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsxs)("p",{children:["AML API ",(0,n.jsx)("br",{})," Response"]})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsxs)("p",{children:["KYC API ",(0,n.jsx)("br",{})," Response"]})}),(0,n.jsx)(l.iA.HeaderCell,{children:(0,n.jsx)("p",{children:"Action"})})]}),(0,n.jsx)(l.iA.Body,{children:t.map((function(e,r){return(0,n.jsxs)(l.iA.BodyRow,{children:[(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{children:(0,m.p)(new Date(null===e||void 0===e?void 0:e.created_at))})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{className:"truncate",children:e.email})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{className:"capitalize",children:null===e||void 0===e?void 0:e.type})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{children:null!==e&&void 0!==e&&e.background_checks_result?"OK":"Needs Review"})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)("p",{children:"approved"===(null===e||void 0===e?void 0:e.kyc_status)?"OK":"Needs Review"})}),(0,n.jsx)(l.iA.BodyCell,{children:(0,n.jsx)(C.default,{href:"/admin/intake/verification/".concat(e.user_id),children:(0,n.jsx)("a",{className:"text-primary cursor-pointer underline",children:"Review"})})})]},r)}))})]}))})},D=(0,i.a)((function(){return(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Zb,{className:"h-full px-24 py-7",children:[(0,n.jsxs)("div",{className:"bg-transparent h-1/2 xl:pb-2 2xl:pb-5",children:[(0,n.jsx)("div",{className:"w-full",style:{height:"70px"},children:(0,n.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,n.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-2.5",children:"General Intake"}),(0,n.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"New members needing approval"}),(0,n.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,n.jsx)("div",{className:"flex flex-col",style:{height:"calc(100% - 70px)"},children:(0,n.jsx)(N,{})})]}),(0,n.jsxs)("div",{className:"bg-transparent h-1/2 xl:pt-2 2xl:pt-5",children:[(0,n.jsx)("div",{className:"w-full",style:{height:"70px"},children:(0,n.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,n.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-2.5",children:"IDverification"}),(0,n.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"Members wanting to get verified"}),(0,n.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,n.jsx)("div",{className:"flex flex-col",style:{height:"calc(100% - 70px)"},children:(0,n.jsx)(B,{})})]})]})})}),"final-admin")},29586:function(e,r,t){"use strict";t.d(r,{p:function(){return i},e:function(){return o}});var n=t(38661),i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",t=new Date(e);return"Invalid Date"===t.toString()?t.toString():(0,n.Z)(t,r)},o=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},34936:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/intake",function(){return t(54606)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,9669,3913,8661,1878,5955,5774],(function(){return r=34936,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
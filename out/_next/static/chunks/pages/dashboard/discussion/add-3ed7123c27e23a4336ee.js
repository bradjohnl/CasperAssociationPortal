(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1732],{24015:function(e,r,n){"use strict";n.d(r,{a:function(){return c}});var t=n(96156),i=n(85893),o=n(67294),u=n(11163),a=n(49226);var l=n(44791);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var c=function(e,r){return function(n){var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,r=void 0===e?"public":e,n=(0,a.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==r&&r&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===r)return"verifying"===n.period&&u.default.push("/verify-email"),"onboarding"===n.period&&u.default.push("/onboard"),void("final"===n.period&&u.default.push("/dashboard"));if("verifying"===r)return"onboarding"===n.period&&u.default.push("/onboard"),void("final"===n.period&&u.default.push("/dashboard"));if("onboarding"===r)return"verifying"===n.period&&u.default.push("/verify-email"),void("final"===n.period&&u.default.push("/dashboard"));if("final-member"===r||"final-all"===r)return"verifying"===n.period&&u.default.push("/verify-email"),void("onboarding"===n.period&&u.default.push("/onboard"));"final-admin"===r&&("verifying"===n.period&&u.default.push("/verify-email"),"onboarding"===n.period&&u.default.push("/onboard"),"final"===n.period&&u.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==r&&"final-admin"!==r&&u.default.push("/admin/dashboard");else"auth"!==r&&u.default.push("/login")}),[n,r]),{user:n}}({urlType:r}).user;if(r&&"public"!==r){if(!c)return(0,i.jsx)(l.Z,{});if("auth"===r&&c.isLoggedIn)return(0,i.jsx)(l.Z,{});if("auth"!==r&&!c.isLoggedIn)return(0,i.jsx)(l.Z,{});if("member"===c.role){if(["final-all","final-member"].includes(r)&&"final"!==c.period)return(0,i.jsx)(l.Z,{});if(["verifying"].includes(r)&&"verifying"!==c.period)return(0,i.jsx)(l.Z,{});if(["onboarding"].includes(r)&&"onboarding"!==c.period)return(0,i.jsx)(l.Z,{})}if(["admin","sub-admin"].includes(c.role)&&["verifying","onboarding","final-member"].includes(r))return(0,i.jsx)(l.Z,{})}return(0,i.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},n))}}},44791:function(e,r,n){"use strict";var t=n(85893),i=n(733),o=n.n(i);r.Z=function(){return(0,t.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,t.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,t.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},44891:function(e,r,n){"use strict";n.r(r);var t=n(96156),i=n(85893),o=n(67294),u=n(49226),a=n(42283),l=n(11163),s=n(24015),c=n(25955),d=n(89),f=n(8517);function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.default=(0,s.a)((function(){var e,r,n,t,s=(0,u.I0)(),p=(0,u.v9)((function(e){return e.authReducer.userInfo.fullInfo})),b=(0,o.useState)(!1),v=b[0],O=b[1],m=(0,a.cI)({mode:"onBlur"}),h=m.control,S=m.formState,E=m.register,_=m.handleSubmit;return(0,i.jsx)(c.Z,{children:(0,i.jsx)(d.Zb,{className:"h-full lg:pl-24 lg:py-11 lg:shadow-2xl",noShadow:!0,children:(0,i.jsxs)("div",{className:"w-full h-full",children:[(0,i.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,i.jsx)(d.xE,{href:"/dashboard/discussion",text:"Cancel"}),(0,i.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Create a Discusion"}),(0,i.jsx)("div",{className:"border-primary border-b-2"})]}),(0,i.jsx)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:(0,i.jsx)("form",{onSubmit:_((function(e){O(!0),s((0,f.vv)(e,(function(){l.default.push("/dashboard/discussion"),O(!1)}),(function(){O(!1)})))})),children:(0,i.jsxs)("div",{className:"lg:pr-24",children:[(0,i.jsxs)("p",{className:"text-sm",children:["Posting as: ",(0,i.jsx)("a",{className:"text-primary",children:null===p||void 0===p?void 0:p.email})]}),(0,i.jsx)("input",y({type:"text",className:"border border-gray1 w-full mt-4 flex-1 h-14 px-7 shadow-md focus:outline-none",placeholder:"Title",name:"title"},E("title",{required:"Title is required"}))),(null===(e=S.errors)||void 0===e?void 0:e.title)&&(0,i.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(r=S.errors.title)||void 0===r?void 0:r.message}),(0,i.jsx)("div",{className:"mt-4 shadow-md",children:(0,i.jsx)(a.Qr,{name:"description",control:h,render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,i.jsx)(d.ML,{value:n,onChange:t})},rules:{required:"Description is required"}})}),(null===(n=S.errors)||void 0===n?void 0:n.description)&&(0,i.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(t=S.errors.description)||void 0===t?void 0:t.message}),(0,i.jsxs)("div",{className:"flex flex-col-reverse lg:flex-wrap lg:flex-row pt-8 justify-end",children:[(0,i.jsx)("button",{type:"button",className:"lg:mr-5 my-1 h-16 lg:h-11 w-full text-lg text-primary lg:w-48 rounded-full bg-none border-2 border-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Save Draft"}),(0,i.jsx)(d.zx,{type:"submit",disabled:v,isLoading:v,sizeSpinner:20,primary:!0,className:"my-1 text-lg",children:"Post"})]}),(0,i.jsx)("div",{className:"pt-8 border-primary border-b lg:border-b-2"})]})})})]})})})}),"final-all")},8517:function(e,r,n){"use strict";n.d(r,{sp:function(){return t},HA:function(){return i},uM:function(){return o},mm:function(){return u},u0:function(){return a},Dz:function(){return l},M3:function(){return s},eK:function(){return c},wT:function(){return d},Vu:function(){return f},Hp:function(){return p},Pf:function(){return y},j_:function(){return b},E_:function(){return v},XQ:function(){return O},oo:function(){return m},Vk:function(){return h},vv:function(){return S},kO:function(){return E},nn:function(){return _},ob:function(){return j},O7:function(){return g},Gi:function(){return T},pV:function(){return x},_Y:function(){return I},gg:function(){return N},oH:function(){return D},d2:function(){return C},TH:function(){return w},ui:function(){return A},N5:function(){return P},V6:function(){return R},H:function(){return U}});var t=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS",payload:e}},i=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS_ERROR",payload:e}},o=function(e,r){return{type:"GET_VOTES",payload:e,successCb:r}},u=function(e,r){return{type:"GET_MY_VOTES",payload:e,successCb:r}},a=function(e,r,n){return{type:"GET_VOTE_DETAIL",payload:e,resolve:r,reject:n}},l=function(e){return{type:"GET_VOTE_DETAIL_SUCCESS",payload:e}},s=function(e){return{type:"GET_VOTE_DETAIL_ERROR",payload:e}},c=function(e,r,n){return{type:"RECORD_VOTE",payload:e,resolve:r,reject:n}},d=function(e){return{type:"RECORD_VOTE_SUCCESS",payload:e}},f=function(e){return{type:"RECORD_VOTE_ERROR",payload:e}},p=function(e,r){return{type:"GET_DISCUSSIONS",payload:e,successCb:r}},y=function(e,r,n){return{type:"GET_PINNED_DISCUSSIONS",payload:e,resolve:r,reject:n}},b=function(e,r,n){return{type:"GET_MY_DISCUSSIONS",payload:e,resolve:r,reject:n}},v=function(e,r){return{type:"GET_TRENDING_DISCUSSIONS",payload:e,resolve:r}},O=function(e,r,n){return{type:"GET_DISCUSSION_DETAIL",id:e,resolve:r,reject:n}},m=function(e,r){return{type:"GET_DISCUSSION_COMMENTS",payload:e,resolve:r}},h=function(e){return{type:"SET_DISCUSSION_PIN",id:e}},S=function(e,r,n){return{type:"CREATE_DISCUSSION",payload:e,resolve:r,reject:n}},E=function(e){return{type:"SET_REMOVE_NEW",id:e}},_=function(e,r,n){return{type:"POST_DISCUSSION_COMMENT",payload:e,resolve:r,reject:n}},j=function(e,r){return{type:"VOTE_DISCUSSION",payload:e,successCb:r}},g=function(e,r,n){return{type:"SUBMIT_NODE",payload:e,resolve:r,reject:n}},T=function(e,r,n){return{type:"SUBMIT_DETAIL",payload:e,resolve:r,reject:n}},x=function(e,r,n){return{type:"UPDATE_VERIFICATION_DOCUMENTS",payload:e,resolve:r,reject:n}},I=function(e,r){return{type:"GET_MY_INFO",resolve:e,reject:r}},N=function(e,r,n){return{type:"UPLOAD_AVATAR",payload:e,resolve:r,reject:n}},D=function(e,r,n){return{type:"CHECK_PASSWORD",payload:e,resolve:r,reject:n}},C=function(e,r,n){return{type:"UPDATE_USER_SETTINGS",payload:e,resolve:r,reject:n}},w=function(e,r,n){return{type:"GET_NOTIFICATIONS",payload:e,resolve:r,reject:n}},A=function(e){return{type:"GET_NOTIFICATIONS_SUCCESS",payload:e}},P=function(e,r){return{type:"DISMISS_NOTIFICATION",payload:e,resolve:r}},R=function(e,r){return{type:"UPDATE_VIEW_NOTIFICATION",payload:e,resolve:r}},U=function(e,r){return{type:"UPDATE_CLICK_CTA",payload:e,resolve:r}}},58220:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/discussion/add",function(){return n(44891)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,7010,5955],(function(){return r=58220,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
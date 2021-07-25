(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6187],{9420:function(e,t,n){"use strict";var i,r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}t.Z=function(e){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 41.191 41.191"},e),i||(i=r.createElement("path",{"data-name":"Icon metro-cross",d:"M40.815 33.092l-12.5-12.5 12.5-12.5a1.29 1.29 0 000-1.82l-5.9-5.9a1.291 1.291 0 00-1.82 0l-12.5 12.5L8.099.372a1.29 1.29 0 00-1.82 0l-5.9 5.9a1.29 1.29 0 000 1.82l12.5 12.5-12.5 12.5a1.29 1.29 0 000 1.82l5.9 5.9a1.29 1.29 0 001.82 0l12.5-12.5 12.5 12.5a1.29 1.29 0 001.82 0l5.9-5.9a1.29 1.29 0 000-1.82z",fill:"currentColor"})))}},17202:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var i=n(85893),r=n(41664),o=n(28569),a=function(e){var t,n=e.perk;return(0,i.jsxs)("div",{className:"h-56 flex p-5 pr-2 shadow-card gap-4 rounded-2xl",children:[(0,i.jsx)("div",{className:"w-1/2",children:(0,i.jsx)("img",{className:"object-cover w-full h-full bg-gray1",src:(null===n||void 0===n||null===(t=n.image)||void 0===t?void 0:t.link)||"",alt:""})}),(0,i.jsxs)("div",{className:"w-1/2",children:[(0,i.jsxs)("div",{className:"h-2/3 flex flex-col justify-between",children:[(0,i.jsx)("h4",{className:"font-bold pt-4 line-clamp-2",children:null===n||void 0===n?void 0:n.title}),(0,i.jsxs)("div",{className:"flex text-primary text-xs pb-6",children:[(0,i.jsx)("span",{className:"pr-1",children:"Time Remaining:"}),(0,i.jsx)(o.ZF,{endTime:new Date(null===n||void 0===n?void 0:n.end_date),hideProgressBar:!0})]})]}),(0,i.jsx)("div",{className:"h-1/3",children:(0,i.jsx)(r.default,{href:"".concat(null!==n&&void 0!==n&&n.id?"/dashboard/perks/".concat(n.id):""),children:(0,i.jsx)("a",{children:(0,i.jsx)(o.zx,{primary:!0,children:"More Information"})})})})]})]})}},51040:function(e,t,n){"use strict";n.d(t,{U:function(){return x}});var i=n(85893),r=n(96156),o=n(42283),a=n(19501),s=n(28834),l=n(49226),c=n(67294),u=n(11163),d=n(59936),h=n(28569),p=n(9420),f=n(87028),y=n(29586);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=a.Ry().shape({title:a.Z_().required("Title is required").max(70,"Maximum characters of title is 70"),content:a.Z_().required("Content is required"),action_link:a.Z_().required("Action Link is required"),image:a.Ry().typeError("Image is required")}),x=c.memo((function(e){var t,n,r,a,m,x,g,j,E,w,_=e.editMode,T=e.value,S=e.onChange,N=e.onEditing,k=(0,c.useState)(!1),C=k[0],I=k[1],O=(0,c.useState)(!1),R=O[0],L=O[1],M=(0,l.I0)(),D=(0,o.cI)({resolver:(0,s.X)(b)}),A=D.register,P=D.setValue,U=D.watch,G=D.control,B=D.handleSubmit,F=D.formState,z=D.reset,Z=U();(0,c.useEffect)((function(){S(Z)}),[Z]),(0,c.useEffect)((function(){_&&T&&z(T)}),[T]),(0,c.useEffect)((function(){_&&L(!0)}),[]);var V=function(e){_&&(L(e),N(!e))};return(0,i.jsxs)("form",{onSubmit:B((function(e){var t=e;I(!0),t.start_date&&(t.start_date=(0,y.p)(new Date(e.start_date),"yyyy-MM-dd")),t.end_date&&(t.end_date=(0,y.p)(new Date(e.end_date),"yyyy-MM-dd")),M(_?(0,f.hy)(v({id:T.id},t),(function(){u.default.push("/admin/perks")}),(function(){I(!1)})):(0,f.qG)(t,(function(){u.default.push("/admin/perks")}),(function(){I(!1)})))})),children:[(0,i.jsxs)("div",{className:"mt-4 pb-8 relative",children:[(0,i.jsxs)("div",{className:"max-w-xl pb-6 relative",children:[(0,i.jsx)("label",{htmlFor:"title",children:"Title of Perk (Limit 70 characters)*"}),(0,i.jsx)("input",v(v({id:"title",type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none"},A("title")),{},{disabled:R})),(null===(t=F.errors)||void 0===t?void 0:t.title)&&(0,i.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(n=F.errors.title)||void 0===n?void 0:n.message})]}),(0,i.jsxs)("div",{className:"max-w-xl pb-6 relative",children:[(0,i.jsx)("label",{htmlFor:"content",children:"Content to describe perk*"}),(0,i.jsx)("textarea",v(v({id:"content",type:"text",rows:"5",className:"mt-2 border border-gray1 w-full flex-1 p-5 shadow-md focus:outline-none"},A("content")),{},{disabled:R})),(null===(r=F.errors)||void 0===r?void 0:r.content)&&(0,i.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(a=F.errors.content)||void 0===a?void 0:a.message})]}),(0,i.jsxs)("div",{className:"max-w-200 flex justify-between items-end",children:[(0,i.jsxs)("div",{className:"max-w-xl flex-grow relative pb-6",children:[(0,i.jsx)("label",{htmlFor:"title",children:"Call to action link*"}),(0,i.jsx)("input",v(v({id:"title",type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none"},A("action_link")),{},{disabled:R})),(null===(m=F.errors)||void 0===m?void 0:m.action_link)&&(0,i.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(x=F.errors.action_link)||void 0===x?void 0:x.message})]}),(0,i.jsxs)("div",{className:"relative pb-2 mb-6",children:[(0,i.jsx)("label",{htmlFor:"perkImage",className:"flex justify-center items-center cursor-pointer h-16 lg:h-11 text-lg text-white lg:w-48 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Upload Image"}),(null===(g=Z.image)||void 0===g?void 0:g.name)&&(0,i.jsxs)("div",{className:"flex items-center text-primary absolute -bottom-5 left-4 truncate w-60",children:[(0,i.jsx)("button",{className:"pr-1 w-5 focus:outline-none",onClick:function(){P("image",null,{shouldValidate:!0})},type:"button",children:(0,i.jsx)(p.Z,{className:"text-primary"})}),(0,i.jsx)("span",{className:"text-sm text-primary",children:null===(j=Z.image)||void 0===j?void 0:j.name})]}),(null===(E=F.errors)||void 0===E?void 0:E.image)&&(0,i.jsx)("p",{className:"absolute -bottom-4 left-4 text-primary text-xs",children:null===(w=F.errors.image)||void 0===w?void 0:w.message})]}),(0,i.jsx)("input",{type:"file",id:"perkImage",onClick:function(e){e.target.value=null},onChange:function(e){if(e.target.files){var t=Array.from(e.target.files)[0],n=new FileReader;n.onloadend=function(){P("image",{link:n.result,file:t,name:t.name},{shouldValidate:!0})},n.readAsDataURL(t)}},hidden:!0,accept:"image/*",disabled:R}),(0,i.jsx)("input",v(v({value:null},A("image")),{},{hidden:!0}))]}),(0,i.jsxs)("div",{className:"max-w-xl pb-4 flex gap-4",children:[(0,i.jsxs)("div",{className:"w-1/2",children:[(0,i.jsx)("label",{htmlFor:"title",children:"Start Date"}),(0,i.jsx)(o.Qr,{name:"start_date",control:G,defaultValue:"",render:function(e){var t=e.field,n=t.value,r=t.onChange;return(0,i.jsx)(h.xZ,{value:n,className:"date-time-perks",onChange:r,placeholder:"Select...",disabled:R})}})]}),(0,i.jsxs)("div",{className:"w-1/2",children:[(0,i.jsx)("label",{htmlFor:"title",children:"End Date"}),(0,i.jsx)(o.Qr,{name:"end_date",control:G,defaultValue:"",render:function(e){var t=e.field,n=t.value,r=t.onChange;return(0,i.jsx)(h.xZ,{value:n,className:"date-time-perks",onChange:r,placeholder:"Select...",disabled:R})}})]})]}),(0,i.jsx)("p",{className:"py-4 max-w-200",children:"Should this notification be ON now. Please note if the start time and end time fields are complete, then notifications in ON status will only show visibly if they have passed the start time and not yet passed the end time above."}),(0,i.jsxs)("div",{className:"pb-4 flex items-center gap-4",children:[(0,i.jsx)("label",{htmlFor:"status",className:"".concat(Z.setting?"opacity-30":""),children:"OFF"}),(0,i.jsx)(o.Qr,{name:"setting",control:G,defaultValue:!1,render:function(e){var t=e.field,n=t.value,r=t.onChange;return(0,i.jsx)(d.default,{id:"status",checked:n,onChange:r,checkedIcon:null,uncheckedIcon:null,offColor:"#bbb",onColor:"#ff474e",height:18,width:40,disabled:R})}}),(0,i.jsx)("label",{htmlFor:"status",className:"".concat(Z.setting?"":"opacity-30"),children:"ON"})]})]}),(0,i.jsxs)("div",{className:"flex gap-4",children:[!_&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.zx,{primary:!0,type:"submit",disabled:C,isLoading:C,sizeSpinner:20,children:"Save"}),(0,i.jsx)(h.zx,{primaryOutline:!0,onClick:function(){return u.default.push("/admin/perks")},children:"Cancel"}),(0,i.jsx)("button",{type:"button",className:"text-primary",children:(0,i.jsx)("span",{className:"underline",children:"Refresh Preview"})})]}),_&&R&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.zx,{primary:!0,type:"button",onClick:function(){return V(!1)},children:"Edit"}),(0,i.jsx)("button",{type:"button",className:"text-primary",children:(0,i.jsx)("span",{className:"underline",children:"Refresh Preview"})})]}),_&&!R&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.zx,{primary:!0,disabled:C,isLoading:C,type:"submit",sizeSpinner:20,children:"Commit Edits"}),(0,i.jsx)(h.zx,{primaryOutline:!0,onClick:function(){return V(!0)},children:"Cancel"}),(0,i.jsx)("button",{type:"button",className:"text-primary",children:(0,i.jsx)("span",{className:"underline",children:"Refresh Preview"})})]})]})]})}))},22163:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var i=n(85893),r=n(28569),o=function(e){var t,n=e.perk;return(0,i.jsxs)("div",{className:"flex py-6 gap-8",children:[(0,i.jsx)("div",{className:"w-full lg:w-1/4 h-48",children:(0,i.jsx)("img",{className:"object-cover w-full h-full bg-gray1",src:(null===n||void 0===n||null===(t=n.image)||void 0===t?void 0:t.link)||"",alt:""})}),(0,i.jsxs)("div",{className:"w-full lg:w-3/4",children:[(0,i.jsxs)("div",{className:"flex text-primary text-xs mb-6",children:[(0,i.jsx)("span",{className:"pr-1",children:"Time Remaining:"}),(0,i.jsx)(r.ZF,{endTime:new Date(null===n||void 0===n?void 0:n.end_date),hideProgressBar:!0})]}),(0,i.jsx)("h4",{className:"font-bold mb-4 line-clamp-2",children:null===n||void 0===n?void 0:n.title}),(0,i.jsx)("p",{children:null===n||void 0===n?void 0:n.content})]})]})}},24015:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var i=n(96156),r=n(85893),o=n(67294),a=n(11163),s=n(49226);var l=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var u=function(e,t){return function(n){var u=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&a.default.push("/verify-email"),"onboarding"===n.period&&a.default.push("/onboard"),void("final"===n.period&&a.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&a.default.push("/onboard"),void("final"===n.period&&a.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&a.default.push("/verify-email"),void("final"===n.period&&a.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&a.default.push("/verify-email"),void("onboarding"===n.period&&a.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&a.default.push("/verify-email"),"onboarding"===n.period&&a.default.push("/onboard"),"final"===n.period&&a.default.push("/dashboard"))}else"admin"===n.role&&"final-all"!==t&&"final-admin"!==t&&a.default.push("/admin/dashboard");else"auth"!==t&&a.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!u)return(0,r.jsx)(l.Z,{});if("auth"===t&&u.isLoggedIn)return(0,r.jsx)(l.Z,{});if("auth"!==t&&!u.isLoggedIn)return(0,r.jsx)(l.Z,{});if("member"===u.role){if(["final-all","final-member"].includes(t)&&"final"!==u.period)return(0,r.jsx)(l.Z,{});if(["verifying"].includes(t)&&"verifying"!==u.period)return(0,r.jsx)(l.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==u.period)return(0,r.jsx)(l.Z,{})}if("admin"===u.role&&["verifying","onboarding","final-member"].includes(t))return(0,r.jsx)(l.Z,{})}return(0,r.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},44791:function(e,t,n){"use strict";var i=n(85893),r=n(733),o=n.n(r);t.Z=function(){return(0,i.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,i.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,i.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},29586:function(e,t,n){"use strict";n.d(t,{p:function(){return r},e:function(){return o}});var i=n(38661),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=new Date(e);return"Invalid Date"===n.toString()?n.toString():(0,i.Z)(n,t)},o=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},87028:function(e,t,n){"use strict";n.d(t,{lL:function(){return i},yW:function(){return r},nE:function(){return o},Eg:function(){return a},BQ:function(){return s},FH:function(){return l},C4:function(){return c},iA:function(){return u},Xp:function(){return d},ed:function(){return h},c8:function(){return p},fX:function(){return f},Od:function(){return y},fI:function(){return m},yG:function(){return v},Lx:function(){return b},TT:function(){return x},I2:function(){return g},qG:function(){return j},hy:function(){return E},MC:function(){return w},CQ:function(){return _},ie:function(){return T},Hi:function(){return S},zb:function(){return N},QT:function(){return k},cX:function(){return C},b$:function(){return I},y3:function(){return O},Nk:function(){return R},Xs:function(){return L},O2:function(){return M},J5:function(){return D},og:function(){return A},Xj:function(){return P},lf:function(){return U},D:function(){return G},Vk:function(){return B},M6:function(){return F},Ng:function(){return z},lN:function(){return Z},VO:function(){return V},R$:function(){return W},q6:function(){return K},Li:function(){return H}});var i=function(e,t){return{type:"GET_LIST_MEMBER",payload:e,callback:t}},r=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},o=function(e){return{type:"GET_USER_DETAIL",payload:e}},a=function(e,t,n){return{type:"GET_USER_METRICS",payload:e,resolve:t,reject:n}},s=function(e,t,n){return{type:"UPDATE_USER_METRICS",payload:e,resolve:t,reject:n}},l=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},c=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},u=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},d=function(e){return{type:"APPROVE_KYC",payload:e}},h=function(e){return{type:"DENY_KYC",payload:e}},p=function(e,t){return{type:"GET_LIST_INTAKE",payload:e,successCb:t}},f=function(e,t){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:t}},y=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},m=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},v=function(e,t){return{type:"GET_BALLOTS",payload:e,callback:t}},b=function(e,t){return{type:"GET_BALLOT_DETAIL",payload:e,callback:t}},x=function(e,t){return{type:"GET_BALLOT_VOTES",payload:e,callback:t}},g=function(e,t,n){return{type:"SUBMIT_BALLOT",payload:e,resolve:t,reject:n}},j=function(e,t,n){return{type:"SUBMIT_PERK",payload:e,resolve:t,reject:n}},E=function(e,t,n){return{type:"EDIT_PERK",payload:e,resolve:t,reject:n}},w=function(e,t,n){return{type:"CANCEL_BALLOT",payload:e,resolve:t,reject:n}},_=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},T=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},S=function(e,t,n){return{type:"APPROVE_USER",payload:e,resolve:t,reject:n}},N=function(e,t,n){return{type:"RESET_USER",payload:e,resolve:t,reject:n}},k=function(e,t,n){return{type:"BAN_USER",payload:e,resolve:t,reject:n}},C=function(e,t,n){return{type:"BAN_VERIFIED_USER",payload:e,resolve:t,reject:n}},I=function(e,t,n){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:t,reject:n}},O=function(e,t,n){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:t,reject:n}},R=function(e,t,n){return{type:"APPROVE_USER_AML",payload:e,resolve:t,reject:n}},L=function(e,t,n){return{type:"RESET_USER_AML",payload:e,resolve:t,reject:n}},M=function(e,t,n){return{type:"APPROVE_USER_KYC",payload:e,resolve:t,reject:n}},D=function(e,t,n){return{type:"RESET_USER_KYC",payload:e,resolve:t,reject:n}},A=function(e,t){return{type:"GET_EMAILER_DATA",resolve:e,reject:t}},P=function(e,t,n){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},U=function(e,t,n){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},G=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:t,reject:n}},B=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:t,reject:n}},F=function(e,t,n){return{type:"GET_LIST_PERKS",payload:e,resolve:t,reject:n}},z=function(e,t,n){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:t,reject:n}},Z=function(e,t,n){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:t,reject:n}},V=function(e,t,n){return{type:"GET_PERK_DETAIL",payload:e,resolve:t,reject:n}},W=function(e,t){return{type:"GET_WARNING_METRICS",resolve:e,reject:t}},K=function(e,t,n){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:t,reject:n}},H=function(e,t,n){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:t,reject:n}}},83231:function(e,t,n){var i=n(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,i,r){return function(e,t,n,i,r){var o=(e-n)/(t-n);if(0===o)return i;if(1===o)return r;for(var a="#",s=1;s<6;s+=2){var l=parseInt(i.substr(s,2),16),c=parseInt(r.substr(s,2),16),u=Math.round((1-o)*l+o*c).toString(16);1===u.length&&(u="0"+u),a+=u}return a}(e,t,n,s(i),s(r))}var c=function(e){function t(t){e.call(this,t);var n=t.height,i=t.width,r=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:r?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,n=t.R,i=t.h,r=(this.props.checked?this.i:this.o)+e-n;t.N||e===n||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,r));o!==i&&this.setState({h:o})},t.prototype.U=function(e){var t=this.state,n=t.h,i=t.N,r=t.B,o=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-r;(!i||s<250||o&&n<=a||!o&&n>=a)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,o=e.className,a=e.offColor,s=e.onColor,c=e.offHandleColor,u=e.onHandleColor,d=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,y=e.boxShadow,m=e.activeBoxShadow,v=e.height,b=e.width,x=e.borderRadius,g=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),j=this.state,E=j.h,w=j.N,_=j.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:v/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:v,width:b,margin:Math.max(0,(this.t-v)/2),position:"relative",background:l(E,this.i,this.o,a,s),borderRadius:"number"==typeof x?x:v/2,cursor:n?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},N={height:v,width:Math.min(1.5*v,b-(this.t+v)/2+1),position:"relative",opacity:(E-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},k={height:v,width:Math.min(1.5*v,b-(this.t+v)/2+1),position:"absolute",opacity:1-(E-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},C={height:this.t,width:this.t,background:l(E,this.i,this.o,c,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+E+"px)",top:Math.max(0,(v-this.t)/2),outline:0,boxShadow:_?m:y,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},I={height:this.t,width:this.t,opacity:Math.max(2*(1-(E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},O={height:this.t,width:this.t,opacity:Math.max(2*((E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return i.createElement("div",{className:o,style:T},i.createElement("div",{className:"react-switch-bg",style:S,onClick:n?null:this.T,onMouseDown:function(e){return e.preventDefault()}},d&&i.createElement("div",{style:N},d),h&&i.createElement("div",{style:k},h)),i.createElement("div",{className:"react-switch-handle",style:C,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},f&&i.createElement("div",{style:I},f),p&&i.createElement("div",{style:O},p)),i.createElement("input",r({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(i.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},59936:function(e,t,n){e.exports=n(83231)}}]);
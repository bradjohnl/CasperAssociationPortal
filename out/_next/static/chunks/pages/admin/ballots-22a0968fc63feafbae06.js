(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8358],{24015:function(e,n,t){"use strict";t.d(n,{a:function(){return d}});var r=t(96156),i=t(85893),o=t(67294),l=t(11163),u=t(49226);var c=t(44791);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var d=function(e,n){return function(t){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,n=void 0===e?"public":e,t=(0,u.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==n&&n&&t)if(t&&null!==t&&void 0!==t&&t.isLoggedIn)if("member"===t.role){if("auth"===n)return"verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("verifying"===n)return"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("onboarding"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("final"===t.period&&l.default.push("/dashboard"));if("final-member"===n||"final-all"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("onboarding"===t.period&&l.default.push("/onboard"));"final-admin"===n&&("verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),"final"===t.period&&l.default.push("/dashboard"))}else["admin","sub-admin"].includes(t.role)&&"final-all"!==n&&"final-admin"!==n&&l.default.push("/admin/dashboard");else"auth"!==n&&l.default.push("/login")}),[t,n]),{user:t}}({urlType:n}).user;if(n&&"public"!==n){if(!d)return(0,i.jsx)(c.Z,{});if("auth"===n&&d.isLoggedIn)return(0,i.jsx)(c.Z,{});if("auth"!==n&&!d.isLoggedIn)return(0,i.jsx)(c.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(n)&&"final"!==d.period)return(0,i.jsx)(c.Z,{});if(["verifying"].includes(n)&&"verifying"!==d.period)return(0,i.jsx)(c.Z,{});if(["onboarding"].includes(n)&&"onboarding"!==d.period)return(0,i.jsx)(c.Z,{})}if(["admin","sub-admin"].includes(d.role)&&["verifying","onboarding","final-member"].includes(n))return(0,i.jsx)(c.Z,{})}return(0,i.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))}}},44791:function(e,n,t){"use strict";var r=t(85893),i=t(733),o=t.n(i);n.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},67814:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(87757),o=t.n(i),l=t(92137),u=t(96156),c=t(32465),a=t(41664),d=t(67294),s=t(49226),f=t(29163),p=t(24015),y=t(37124),h=t(12245),E=t(64605),j=t(29586),_=t(87028);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(){var e=(0,c.Z)(["\n  .active-ballot-table {\n    .col-1 {\n      width: 30%;\n    }\n    .col-2 {\n      width: 15%;\n    }\n    .col-3 {\n      width: 15%;\n    }\n    .col-4 {\n      width: 15%;\n    }\n    .col-5 {\n      width: 15%;\n    }\n    .col-6 {\n      width: 10%;\n    }\n  }\n  .complete-ballot-table {\n    .col-1 {\n      width: 30%;\n    }\n    .col-2 {\n      width: 15%;\n    }\n    .col-3 {\n      width: 12%;\n    }\n    .col-4 {\n      width: 12%;\n    }\n    .col-5 {\n      width: 10%;\n    }\n    .col-6 {\n      width: 10%;\n    }\n    .col-7 {\n      width: 10%;\n    }\n  }\n"]);return T=function(){return e},e}var x=f.ZP.div(T()),I=[{content:function(){var e=(0,E.x)(),n=e.data,t=e.register,i=e.hasMore,u=e.appendData,c=e.resetData,f=e.setHasMore,p=e.page,y=e.setPage,v=e.params,T=e.setParams,I=(0,s.I0)(),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;I((0,_.yG)(A({status:"active",page:e},n),(function(e,n){f(n),u(e),y((function(e){return e+1}))})))};(0,d.useEffect)((function(){b()}),[]);var S=function(){var e=(0,l.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(r={sort_key:n,sort_direction:t}),c(),b(1,r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,r.jsx)(x,{className:"h-full",children:(0,r.jsxs)(h.iA,A(A({},t),{},{className:"active-ballot-table pt-10 h-full",onLoadMore:b,hasMore:i,dataLength:n.length,onSort:S,children:[(0,r.jsxs)(h.iA.Header,{children:[(0,r.jsx)(h.iA.HeaderCell,{sortKey:"title",children:(0,r.jsx)("p",{children:"Title"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Time Remaining"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsxs)("p",{children:["Total ",(0,r.jsx)("br",{}),"Votes"]})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsxs)("p",{children:["Split ",(0,r.jsx)("br",{}),"For/Against"]})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Start Date"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Admin Action"})})]}),(0,r.jsx)(h.iA.Body,{className:"lg:-mr-card lg:pr-card",children:n.map((function(e,n){var t,i,o;return(0,r.jsxs)(h.iA.BodyRow,{children:[(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{className:"truncate",children:e.title})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(h.ZF,{endTime:new Date(e.time_end),startTime:new Date(e.created_at)})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{children:null===(t=e.vote)||void 0===t?void 0:t.result_count})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(h.L3,{splitFor:null===(i=e.vote)||void 0===i?void 0:i.for_value,splitAgainst:null===(o=e.vote)||void 0===o?void 0:o.against_value})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{children:(0,j.p)(e.created_at)})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(a.default,{href:"/admin/ballots/detail/".concat(e.id),children:(0,r.jsx)("button",{type:"button",className:"text-lg text-white w-full h-7 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Manage"})})})]},"b-".concat(n))}))})]}))})},id:"active",title:"Active"},{content:function(){var e=(0,E.x)(),n=e.data,t=e.register,i=e.hasMore,u=e.appendData,c=e.resetData,f=e.setHasMore,p=e.page,y=e.setPage,v=e.params,T=e.setParams,I=(0,s.I0)(),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;I((0,_.yG)(A({status:"complete",page:e},n),(function(e,n){f(n),u(e),y((function(e){return e+1}))})))};(0,d.useEffect)((function(){b()}),[]);var S=function(){var e=(0,l.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(r={sort_key:n,sort_direction:t}),c(),b(1,r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,r.jsx)(x,{className:"h-full",children:(0,r.jsxs)(h.iA,A(A({},t),{},{className:"complete-ballot-table pt-10 h-full",onLoadMore:b,hasMore:i,dataLength:n.length,onSort:S,children:[(0,r.jsxs)(h.iA.Header,{children:[(0,r.jsx)(h.iA.HeaderCell,{sortKey:"title",children:(0,r.jsx)("p",{children:"Title"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Final Result"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsxs)("p",{children:["Total ",(0,r.jsx)("br",{}),"Votes"]})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsxs)("p",{children:["Split ",(0,r.jsx)("br",{}),"For/Against"]})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Start Date"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"End Date"})}),(0,r.jsx)(h.iA.HeaderCell,{children:(0,r.jsx)("p",{children:"Admin Action"})})]}),(0,r.jsx)(h.iA.Body,{className:"lg:-mr-card lg:pr-card",children:n.map((function(e,n){var t,i,o;return(0,r.jsxs)(h.iA.BodyRow,{children:[(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{className:"truncate",children:e.title})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(h.r2,{className:"capitalize",content:e.status})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{children:null===(t=e.vote)||void 0===t?void 0:t.result_count})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(h.L3,{splitFor:null===(i=e.vote)||void 0===i?void 0:i.for_value,splitAgainst:null===(o=e.vote)||void 0===o?void 0:o.against_value})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{children:(0,j.p)(e.created_at,"hh:mm aaa dd/MM/yyyy")})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)("p",{children:(0,j.p)(e.time_end,"hh:mm aaa dd/MM/yyyy")})}),(0,r.jsx)(h.iA.BodyCell,{children:(0,r.jsx)(a.default,{href:"/admin/ballots/detail/".concat(e.id),children:(0,r.jsx)("button",{type:"button",className:"text-lg text-white w-full h-7 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"View"})})})]},"a-".concat(n))}))})]}))})},id:"complete",title:"Complete"}];n.default=(0,p.a)((function(){return(0,r.jsx)(y.Z,{children:(0,r.jsx)(h.Zb,{className:"h-full lg:pl-card lg:py-10 lg:shadow-2xl",noShadow:!0,children:(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsxs)("div",{className:"flex justify-between lg:mr-card",children:[(0,r.jsx)("h3",{className:"text-xl lg:pr-32 font-medium",children:"Ballots"}),(0,r.jsx)(a.default,{href:"/admin/ballots/add",children:(0,r.jsx)("button",{type:"button",className:"transition text-lg text-white w-36 lg:w-48 h-9 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"+ New Ballot"})})]}),(0,r.jsx)(h.OK,{className:"w-full h-full pt-12 lg:pt-0",data:I})]})})})}),"final-admin")},29586:function(e,n,t){"use strict";t.d(n,{p:function(){return i},e:function(){return o}});var r=t(38661),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",t=new Date(e);return"Invalid Date"===t.toString()?t.toString():(0,r.Z)(t,n)},o=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},87028:function(e,n,t){"use strict";t.d(n,{lL:function(){return r},yW:function(){return i},nE:function(){return o},Eg:function(){return l},BQ:function(){return u},FH:function(){return c},iA:function(){return a},c8:function(){return d},fX:function(){return s},Od:function(){return f},fI:function(){return p},yG:function(){return y},Lx:function(){return h},TT:function(){return E},I2:function(){return j},qG:function(){return _},hy:function(){return v},MC:function(){return A},CQ:function(){return T},ie:function(){return x},kB:function(){return I},Pj:function(){return b},ZZ:function(){return S},nQ:function(){return m},yT:function(){return g},sW:function(){return O},Dj:function(){return N},li:function(){return R},tA:function(){return C},Hi:function(){return D},zb:function(){return w},QT:function(){return L},cX:function(){return M},b$:function(){return P},y3:function(){return G},Nk:function(){return B},Xs:function(){return U},O2:function(){return H},J5:function(){return V},bG:function(){return F},og:function(){return k},Xj:function(){return K},lf:function(){return Z},D:function(){return W},Vk:function(){return X},M6:function(){return z},Ng:function(){return Q},lN:function(){return Y},VO:function(){return q},R$:function(){return $},q6:function(){return J},Li:function(){return ee},wN:function(){return ne},t:function(){return te},uy:function(){return re},HC:function(){return ie},AL:function(){return oe},xC:function(){return le},kF:function(){return ue},ud:function(){return ce},Vi:function(){return ae},_i:function(){return de}});var r=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},i=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},o=function(e){return{type:"GET_USER_DETAIL",payload:e}},l=function(e,n,t){return{type:"GET_USER_METRICS",payload:e,resolve:n,reject:t}},u=function(e,n,t){return{type:"UPDATE_USER_METRICS",payload:e,resolve:n,reject:t}},c=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},a=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},d=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},s=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},f=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},p=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},y=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},h=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},E=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},j=function(e,n,t){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:t}},_=function(e,n,t){return{type:"SUBMIT_PERK",payload:e,resolve:n,reject:t}},v=function(e,n,t){return{type:"EDIT_PERK",payload:e,resolve:n,reject:t}},A=function(e,n,t){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:t}},T=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},x=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},I=function(e,n){return{type:"GET_SUBADMINS",payload:e,callback:n}},b=function(e,n,t){return{type:"REGISTER_SUB_ADMIN",payload:e,resolve:n,reject:t}},S=function(e,n){return{type:"GET_IP_HISTORIES",payload:e,callback:n}},m=function(e,n,t){return{type:"INVITE_SUBADMIN",email:e,resolve:n,reject:t}},g=function(e,n,t){return{type:"REVOKE_SUBADMIN",id:e,resolve:n,reject:t}},O=function(e,n,t){return{type:"UNDO_REVOKE_SUBADMIN",id:e,resolve:n,reject:t}},N=function(e,n,t){return{type:"RESET_SUBADMIN_PASSWORD",id:e,resolve:n,reject:t}},R=function(e,n,t){return{type:"RESEND_INVITE_SUBADMIN",id:e,resolve:n,reject:t}},C=function(e,n,t){return{type:"CHANGE_SUBADMIN_PERMISSIONS",id:e,payload:n,callback:t}},D=function(e,n,t){return{type:"APPROVE_USER",payload:e,resolve:n,reject:t}},w=function(e,n,t){return{type:"RESET_USER",payload:e,resolve:n,reject:t}},L=function(e,n,t){return{type:"BAN_USER",payload:e,resolve:n,reject:t}},M=function(e,n,t){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:t}},P=function(e,n,t){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:t}},G=function(e,n,t){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n,reject:t}},B=function(e,n,t){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:t}},U=function(e,n,t){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:t}},H=function(e,n,t){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:t}},V=function(e,n,t){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:t}},F=function(e,n,t){return{type:"ACTIVATE_VERIFIED_STATUS",payload:e,resolve:n,reject:t}},k=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},K=function(e,n,t){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},Z=function(e,n,t){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},W=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:t}},X=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:t}},z=function(e,n,t){return{type:"GET_LIST_PERKS",payload:e,resolve:n,reject:t}},Q=function(e,n,t){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:n,reject:t}},Y=function(e,n,t){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:n,reject:t}},q=function(e,n,t){return{type:"GET_PERK_DETAIL",payload:e,resolve:n,reject:t}},$=function(e,n){return{type:"GET_WARNING_METRICS",resolve:e,reject:n}},J=function(e,n,t){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:n,reject:t}},ee=function(e,n,t){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:n,reject:t}},ne=function(e,n,t){return{type:"ADD_NOTIFICATION",payload:e,resolve:n,reject:t}},te=function(e,n,t){return{type:"EDIT_NOTIFICATION",payload:e,resolve:n,reject:t}},re=function(e,n,t){return{type:"GET_NOTIFICATION_DETAIL",payload:e,resolve:n,reject:t}},ie=function(e,n,t){return{type:"GET_LIST_NOTIFICATIONS",payload:e,resolve:n,reject:t}},oe=function(e,n){return{type:"GET_NOTIFICATION_VIEW_LOGS",payload:e,resolve:n}},le=function(e,n){return{type:"GET_HIGH_PRIORITY_NOTIFICATION",resolve:e,reject:n}},ue=function(e,n){return{type:"GET_ADMIN_DASHBOARD",resolve:e,reject:n}},ce=function(e,n,t){return{type:"GET_NODES_FROM_ADMIN",payload:e,resolve:n,reject:t}},ae=function(e,n){return{type:"GET_LOCK_PAGE_RULES",resolve:e,reject:n}},de=function(e,n,t){return{type:"UPDATE_LOCK_PAGE_RULES",payload:e,resolve:n,reject:t}}},1229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ballots",function(){return t(67814)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,1045,7124],(function(){return n=1229,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
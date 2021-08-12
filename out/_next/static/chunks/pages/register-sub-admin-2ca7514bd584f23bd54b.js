(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3632],{44791:function(e,t,n){"use strict";var r=n(85893),a=n(733),o=n.n(a);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},24205:function(e,t,n){"use strict";n.d(t,{Ge:function(){return r},QI:function(){return a},zC:function(){return o},qn:function(){return u},tH:function(){return i},VX:function(){return c},FZ:function(){return l},ec:function(){return s},mS:function(){return f}});var r=/^[\.a-zA-Z\s ]*$/,a=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,o=/(^[0-9])/,u=/^-?[1-9]/,i=/^[A-Za-z0-9-]*$/,c=/^[A-Za-z0-9-]*$/,l=/(^)@[A-Za-z0-9-\_]*$/,s=/^[A-Za-z0-9-\s\.\_ ]*$/,f=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},35391:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(96156),o=n(41664),u=n(7318),i=n.n(u),c=n(42283),l=n(11163),s=n(67294),f=n(49226),d=n(7667),p=n(66570),_=n(24205),m=n(12245),y=n(24015),E=n(87028);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,y.a)((function(){var e,t,n,a,u,y,x,T,v=(0,c.cI)(),j=v.clearErrors,S=v.formState,N=v.register,A=v.handleSubmit,g=v.getValues,w=v.setError,h=(0,f.I0)(),R=(0,l.useRouter)(),O=i()(),L=(0,s.useState)(!1),C=L[0],b=L[1],G=(0,s.useState)(!1),P=G[0],D=G[1];return(0,r.jsx)("div",{className:"flex justify-center h-screen",style:{backgroundImage:"url('/images/bg_welcome".concat(O.isMobile()?"_mobile":"",".png')"),backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,r.jsx)(p.Z,{theme:"light"}),(0,r.jsx)("form",{autoComplete:"off",className:"flex-grow flex items-center justify-center",onSubmit:A((function(e){var t=e;D(!0),t.email=R.query.email,t.code=R.query.code,h((0,E.Pj)(I({},t),(function(){b(!0)}),(function(){D(!1)})))})),children:C?(0,r.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:p-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,r.jsx)("p",{className:"text-4xl text-center animate__animated animate__fadeInUp",children:"Your Password has been updated"}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-12 mt-8 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:(0,r.jsx)("button",{type:"button",onClick:function(){return R.push("/login")},className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",children:"Go to Login"})})]}):(0,r.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:px-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,r.jsx)("p",{className:"text-4xl text-center animate__animated animate__fadeInUp",children:"Create Your Password"}),(0,r.jsx)("p",{className:"text-xs text-center mt-2 animate__animated animate__fadeInUp animate__delay-2s",children:"Please create a new password and click Submit"}),(0,r.jsxs)("div",{className:"w-full gap-4 flex animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsxs)("div",{className:"w-1/2 flex flex-col",children:[(0,r.jsx)("input",I({type:"text",autoComplete:"off",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter First Name"},N("first_name",{required:"First name is required",pattern:{message:"First name is invalid",value:_.Ge}}))),(null===(e=S.errors)||void 0===e?void 0:e.first_name)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(t=S.errors.first_name)||void 0===t?void 0:t.message})]}),(0,r.jsxs)("div",{className:"w-1/2 flex flex-col",children:[(0,r.jsx)("input",I({type:"text",autoComplete:"off",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter Last Name"},N("last_name",{required:"Last name is required",pattern:{message:"Last name is invalid",value:_.Ge}}))),(null===(n=S.errors)||void 0===n?void 0:n.last_name)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(a=S.errors.last_name)||void 0===a?void 0:a.message})]})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",I({type:"password",autoComplete:"new-password",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter New Password"},N("password",{required:"Password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Password is invalid",value:_.mS},validate:function(e){return e===g().confirmPassword||"Password not match"}}))),(null===(u=S.errors)||void 0===u?void 0:u.password)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(y=S.errors.password)||void 0===y?void 0:y.message})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",I({type:"password",autoComplete:"new-password",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Verify New Password",name:"confirmPassword"},N("confirmPassword",{required:"Confirm password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Confirm password is invalid",value:_.mS},validate:function(e){return e===g().password?j("password"):w("password",{message:"Password not match"})}}))),(null===(x=S.errors)||void 0===x?void 0:x.confirmPassword)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(T=S.errors.confirmPassword)||void 0===T?void 0:T.message})]}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-4 mt-14 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:(0,r.jsx)(m.fl,{type:"submit",isDisabled:P,isLoading:P,title:"Submit",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"})}),(0,r.jsx)(o.default,{href:"/home",children:(0,r.jsxs)("p",{className:"cursor-pointer text-xs text-center mt-5 inline-flex justify-center animate__animated animate__fadeInUp animate__delay-4s",children:[(0,r.jsx)("img",{src:"/images/ic_decline.svg",className:"mr-2",alt:"Go home page"}),(0,r.jsx)("a",{className:"text-primary underline font-medium",children:"Cancel and go back"})]})})]})}),(0,r.jsx)(d.Z,{theme:"light"})]})})}),"auth")},87028:function(e,t,n){"use strict";n.d(t,{lL:function(){return r},yW:function(){return a},nE:function(){return o},Eg:function(){return u},BQ:function(){return i},FH:function(){return c},iA:function(){return l},c8:function(){return s},fX:function(){return f},Od:function(){return d},fI:function(){return p},yG:function(){return _},Lx:function(){return m},TT:function(){return y},I2:function(){return E},qG:function(){return x},hy:function(){return I},MC:function(){return T},CQ:function(){return v},ie:function(){return j},kB:function(){return S},Pj:function(){return N},ZZ:function(){return A},nQ:function(){return g},yT:function(){return w},sW:function(){return h},Dj:function(){return R},li:function(){return O},tA:function(){return L},Hi:function(){return C},zb:function(){return b},QT:function(){return G},cX:function(){return P},b$:function(){return D},y3:function(){return U},Nk:function(){return M},Xs:function(){return k},O2:function(){return B},J5:function(){return V},bG:function(){return F},og:function(){return z},Xj:function(){return Z},lf:function(){return K},D:function(){return q},Vk:function(){return H},M6:function(){return $},Ng:function(){return X},lN:function(){return W},VO:function(){return Y},R$:function(){return Q},q6:function(){return J},Li:function(){return ee},wN:function(){return te},t:function(){return ne},uy:function(){return re},HC:function(){return ae},AL:function(){return oe},xC:function(){return ue},kF:function(){return ie},ud:function(){return ce},Vi:function(){return le},_i:function(){return se}});var r=function(e,t){return{type:"GET_LIST_MEMBER",payload:e,callback:t}},a=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},o=function(e){return{type:"GET_USER_DETAIL",payload:e}},u=function(e,t,n){return{type:"GET_USER_METRICS",payload:e,resolve:t,reject:n}},i=function(e,t,n){return{type:"UPDATE_USER_METRICS",payload:e,resolve:t,reject:n}},c=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},l=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},s=function(e,t){return{type:"GET_LIST_INTAKE",payload:e,successCb:t}},f=function(e,t){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:t}},d=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},p=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},_=function(e,t){return{type:"GET_BALLOTS",payload:e,callback:t}},m=function(e,t){return{type:"GET_BALLOT_DETAIL",payload:e,callback:t}},y=function(e,t){return{type:"GET_BALLOT_VOTES",payload:e,callback:t}},E=function(e,t,n){return{type:"SUBMIT_BALLOT",payload:e,resolve:t,reject:n}},x=function(e,t,n){return{type:"SUBMIT_PERK",payload:e,resolve:t,reject:n}},I=function(e,t,n){return{type:"EDIT_PERK",payload:e,resolve:t,reject:n}},T=function(e,t,n){return{type:"CANCEL_BALLOT",payload:e,resolve:t,reject:n}},v=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},j=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},S=function(e,t){return{type:"GET_SUBADMINS",payload:e,callback:t}},N=function(e,t,n){return{type:"REGISTER_SUB_ADMIN",payload:e,resolve:t,reject:n}},A=function(e,t){return{type:"GET_IP_HISTORIES",payload:e,callback:t}},g=function(e,t,n){return{type:"INVITE_SUBADMIN",email:e,resolve:t,reject:n}},w=function(e,t,n){return{type:"REVOKE_SUBADMIN",id:e,resolve:t,reject:n}},h=function(e,t,n){return{type:"UNDO_REVOKE_SUBADMIN",id:e,resolve:t,reject:n}},R=function(e,t,n){return{type:"RESET_SUBADMIN_PASSWORD",id:e,resolve:t,reject:n}},O=function(e,t,n){return{type:"RESEND_INVITE_SUBADMIN",id:e,resolve:t,reject:n}},L=function(e,t,n){return{type:"CHANGE_SUBADMIN_PERMISSIONS",id:e,payload:t,callback:n}},C=function(e,t,n){return{type:"APPROVE_USER",payload:e,resolve:t,reject:n}},b=function(e,t,n){return{type:"RESET_USER",payload:e,resolve:t,reject:n}},G=function(e,t,n){return{type:"BAN_USER",payload:e,resolve:t,reject:n}},P=function(e,t,n){return{type:"BAN_VERIFIED_USER",payload:e,resolve:t,reject:n}},D=function(e,t,n){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:t,reject:n}},U=function(e,t,n){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:t,reject:n}},M=function(e,t,n){return{type:"APPROVE_USER_AML",payload:e,resolve:t,reject:n}},k=function(e,t,n){return{type:"RESET_USER_AML",payload:e,resolve:t,reject:n}},B=function(e,t,n){return{type:"APPROVE_USER_KYC",payload:e,resolve:t,reject:n}},V=function(e,t,n){return{type:"RESET_USER_KYC",payload:e,resolve:t,reject:n}},F=function(e,t,n){return{type:"ACTIVATE_VERIFIED_STATUS",payload:e,resolve:t,reject:n}},z=function(e,t){return{type:"GET_EMAILER_DATA",resolve:e,reject:t}},Z=function(e,t,n){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},K=function(e,t,n){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},q=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:t,reject:n}},H=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:t,reject:n}},$=function(e,t,n){return{type:"GET_LIST_PERKS",payload:e,resolve:t,reject:n}},X=function(e,t,n){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:t,reject:n}},W=function(e,t,n){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:t,reject:n}},Y=function(e,t,n){return{type:"GET_PERK_DETAIL",payload:e,resolve:t,reject:n}},Q=function(e,t){return{type:"GET_WARNING_METRICS",resolve:e,reject:t}},J=function(e,t,n){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:t,reject:n}},ee=function(e,t,n){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:t,reject:n}},te=function(e,t,n){return{type:"ADD_NOTIFICATION",payload:e,resolve:t,reject:n}},ne=function(e,t,n){return{type:"EDIT_NOTIFICATION",payload:e,resolve:t,reject:n}},re=function(e,t,n){return{type:"GET_NOTIFICATION_DETAIL",payload:e,resolve:t,reject:n}},ae=function(e,t,n){return{type:"GET_LIST_NOTIFICATIONS",payload:e,resolve:t,reject:n}},oe=function(e,t){return{type:"GET_NOTIFICATION_VIEW_LOGS",payload:e,resolve:t}},ue=function(e,t){return{type:"GET_HIGH_PRIORITY_NOTIFICATION",resolve:e,reject:t}},ie=function(e,t){return{type:"GET_ADMIN_DASHBOARD",resolve:e,reject:t}},ce=function(e,t,n){return{type:"GET_NODES_FROM_ADMIN",payload:e,resolve:t,reject:n}},le=function(e,t){return{type:"GET_LOCK_PAGE_RULES",resolve:e,reject:t}},se=function(e,t,n){return{type:"UPDATE_LOCK_PAGE_RULES",payload:e,resolve:t,reject:n}}},65054:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-sub-admin",function(){return n(35391)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,1045,5243],(function(){return t=65054,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6792],{4015:function(e,s,l){"use strict";l.d(s,{a:function(){return o}});var a=l(6156),i=l(5893),r=l(7294),n=l(1163),c=l(9226);var t=l(4791);function d(e,s){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),l.push.apply(l,a)}return l}var o=function(e,s){return function(l){var o=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,s=void 0===e?"public":e,l=(0,c.v9)((function(e){return e.authReducer.userInfo}));return(0,r.useEffect)((function(){if("public"!==s&&s&&l)if(l&&null!==l&&void 0!==l&&l.isLoggedIn)if("member"===l.role){if("auth"===s)return"verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("verifying"===s)return"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("onboarding"===s)return"verifying"===l.period&&n.default.push("/verify-email"),void("final"===l.period&&n.default.push("/dashboard"));if("final-member"===s||"final-all"===s)return"verifying"===l.period&&n.default.push("/verify-email"),void("onboarding"===l.period&&n.default.push("/onboard"));"final-admin"===s&&("verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),"final"===l.period&&n.default.push("/dashboard"))}else"admin"===l.role&&"final-all"!==s&&"final-admin"!==s&&n.default.push("/admin/dashboard");else"auth"!==s&&n.default.push("/login")}),[l,s]),{user:l}}({urlType:s}).user;if(s&&"public"!==s){if(!o)return(0,i.jsx)(t.Z,{});if("auth"===s&&o.isLoggedIn)return(0,i.jsx)(t.Z,{});if("auth"!==s&&!o.isLoggedIn)return(0,i.jsx)(t.Z,{});if("member"===o.role){if(["final-all","final-member"].includes(s)&&"final"!==o.period)return(0,i.jsx)(t.Z,{});if(["verifying"].includes(s)&&"verifying"!==o.period)return(0,i.jsx)(t.Z,{});if(["onboarding"].includes(s)&&"onboarding"!==o.period)return(0,i.jsx)(t.Z,{})}if("admin"===o.role&&["verifying","onboarding","final-member"].includes(s))return(0,i.jsx)(t.Z,{})}return(0,i.jsx)(e,function(e){for(var s=1;s<arguments.length;s++){var l=null!=arguments[s]?arguments[s]:{};s%2?d(Object(l),!0).forEach((function(s){(0,a.Z)(e,s,l[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(l,s))}))}return e}({},l))}}},4791:function(e,s,l){"use strict";var a=l(5893);s.Z=function(){return(0,a.jsx)("p",{children:"Loading"})}},4590:function(e,s,l){"use strict";l.d(s,{Z:function(){return d}});var a=l(5893),i=l(7667),r=l(9226),n=l(7124),c=l(6570),t=function(){var e=(0,r.v9)((function(e){return e.authReducer.userInfo.fullInfo}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,a.jsx)("img",{className:"py-6 border-b-2 border-primary align-center",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,a.jsxs)("ul",{className:"mb-4 flex flex-col items-center border-b-2 border-primary",children:[(0,a.jsx)("li",{className:"pb-4 pt-14",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard",children:(0,a.jsx)("a",{className:"rounded-lg inline-block",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_home.svg",alt:"Home"})})})}),(0,a.jsx)("li",{className:"py-2",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard/nodes",children:(0,a.jsx)("a",{className:"inline-block rounded-2xl hover:shadow-lg",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_infor.svg",alt:"Validator Info"})})})}),(0,a.jsx)("li",{className:"py-2",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard/discussion",children:(0,a.jsx)("a",{className:"rounded-lg inline-block",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_material_chat.svg",alt:"Material Chat"})})})}),(0,a.jsx)("li",{className:"py-2",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard/votes",children:(0,a.jsx)("a",{className:"inline-block rounded-2xl hover:shadow-lg",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_awesome_vote.svg",alt:"Vote"})})})}),(0,a.jsx)("li",{className:"py-2",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard/member-perks",children:(0,a.jsx)("a",{className:"inline-block rounded-2xl hover:shadow-lg",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_feather_user_plus.svg",alt:"User Add"})})})}),(0,a.jsx)("li",{className:"pt-2",children:(0,a.jsx)(n.O$,{activeClassName:"shadow-activeLink",href:"/dashboard/settings",children:(0,a.jsx)("a",{className:"inline-block rounded-2xl hover:shadow-lg",children:(0,a.jsx)("img",{className:"p-3",src:"/images/ic_feather_settings.svg",alt:"Setting"})})})})]}),"admin"===(null===e||void 0===e?void 0:e.role)&&(0,a.jsxs)("ul",{className:"flex flex-col pb-4",children:[(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,a.jsx)("p",{children:"Admin"})})}),(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,a.jsx)("p",{children:"Instake"})})}),(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,a.jsx)("p",{children:"Users"})})}),(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,a.jsx)("p",{children:"Ballots"})})}),(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,a.jsx)("p",{children:"Perks"})})}),(0,a.jsx)("li",{className:"py-1.5 cursor-pointer",children:(0,a.jsx)(n.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,a.jsx)("p",{children:"Settings"})})})]})]}),(0,a.jsx)(c.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function d(e){var s=e.children;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"dashboard-layout",children:(0,a.jsxs)("div",{className:"relative h-screen h-px mx-auto 2xl:min-h-105 max-w-404 px-4 lg:py-4 xl:py-16 2xl:py-24 flex flex-col",children:[(0,a.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,a.jsx)("div",{className:"flex-none",children:(0,a.jsx)(t,{})}),(0,a.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:s})]}),(0,a.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,a.jsx)(i.Z,{theme:"dark"})})]})})})}},8146:function(e,s,l){"use strict";l.r(s);var a=l(5893),i=l(4015),r=l(4590),n=l(7124);s.default=(0,i.a)((function(){return(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"bg-transparent h-full",children:[(0,a.jsxs)("div",{className:"h-3/5 w-full",children:[(0,a.jsxs)("div",{className:"lg:mr-24 lg:h-70px flex flex-col justify-center",children:[(0,a.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Member Perks"}),(0,a.jsx)("div",{className:"border-primary border-b-2"})]}),(0,a.jsxs)("div",{className:"pt-3 h-full lg:pr-24",children:[(0,a.jsxs)("div",{className:"flex pb-5 h-11/20",children:[(0,a.jsx)("div",{className:"w-9/20 pr-2.5",children:(0,a.jsxs)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:[(0,a.jsxs)("div",{className:"flex mb-10",children:[(0,a.jsx)("p",{className:"text-lg",children:"Membership Status"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("p",{className:"text-xl",children:"MEMBER"})]})}),(0,a.jsx)("div",{className:"w-9/20",children:(0,a.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,a.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Uptime"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,a.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,a.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,a.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-20 top-1/2"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Peers"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,a.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,a.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,a.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-60 top-1/2"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Performance"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,a.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,a.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,a.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-40 top-1/2"})]})]})]})})})]}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"w-4/6 pr-2.5",children:(0,a.jsxs)(n.Zb,{className:"p-6 lg:shadow-2xl flex",noShadow:!0,children:[(0,a.jsxs)("div",{className:"flex flex-col w-1/2 px-5 lg:px-0 border-r border-gray lg:pl-20 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-lg",children:"Daily Earnings"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,a.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,a.jsx)("span",{className:"text-base font-thin pl-3",children:"0.0154"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col px-5 lg:px-0 w-1/2 border-r border-gray lg:pl-20 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-lg",children:"Total Earnings"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,a.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,a.jsx)("span",{className:"text-base font-thin pl-3",children:"6.101297"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col px-5 lg:px-0 w-1/2 lg:pl-20 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-lg",children:"Total Earnings"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,a.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,a.jsx)("span",{className:"text-base font-thin pl-3",children:"6.101297"})]})]})]})})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col h-2/5 w-full",children:[(0,a.jsxs)("div",{className:"lg:mr-24 lg:h-70px flex flex-col justify-center",children:[(0,a.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Member Perks"}),(0,a.jsx)("div",{className:"border-primary border-b-2"})]}),(0,a.jsx)("div",{className:"pt-3 flex-grow",children:(0,a.jsxs)("div",{className:"lg:pr-24 flex h-full",children:[(0,a.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,a.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,a.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,a.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,a.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,a.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,a.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,a.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,a.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,a.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,a.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,a.jsx)("p",{className:"text-xl",children:"Discount tickets"})})})]})})]})]})})}),"final-all")},2938:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/member-perks",function(){return l(8146)}])}},function(e){e.O(0,[9774,2554,1282,319,6993,5802,8271],(function(){return s=2938,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6792,8408],{4015:function(e,a,l){"use strict";l.d(a,{a:function(){return d}});var s=l(6156),r=l(5893),t=l(7294),n=l(1163),i=l(9226);var c=l(4791);function o(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,s)}return l}var d=function(e,a){return function(l){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,a=void 0===e?"public":e,l=(0,i.v9)((function(e){return e.authReducer.userInfo}));return(0,t.useEffect)((function(){if("public"!==a&&a&&l)if(l&&null!==l&&void 0!==l&&l.isLoggedIn)if("member"===l.role){if("auth"===a)return"verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("verifying"===a)return"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("onboarding"===a)return"verifying"===l.period&&n.default.push("/verify-email"),void("final"===l.period&&n.default.push("/dashboard"));if("final-member"===a||"final-all"===a)return"verifying"===l.period&&n.default.push("/verify-email"),void("onboarding"===l.period&&n.default.push("/onboard"));"final-admin"===a&&("verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),"final"===l.period&&n.default.push("/dashboard"))}else"admin"===l.role&&"final-all"!==a&&"final-admin"!==a&&n.default.push("/admin/dashboard");else"auth"!==a&&n.default.push("/login")}),[l,a]),{user:l}}({urlType:a}).user;if(a&&"public"!==a){if(!d)return(0,r.jsx)(c.Z,{});if("auth"===a&&d.isLoggedIn)return(0,r.jsx)(c.Z,{});if("auth"!==a&&!d.isLoggedIn)return(0,r.jsx)(c.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(a)&&"final"!==d.period)return(0,r.jsx)(c.Z,{});if(["verifying"].includes(a)&&"verifying"!==d.period)return(0,r.jsx)(c.Z,{});if(["onboarding"].includes(a)&&"onboarding"!==d.period)return(0,r.jsx)(c.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(a))return(0,r.jsx)(c.Z,{})}return(0,r.jsx)(e,function(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?o(Object(l),!0).forEach((function(a){(0,s.Z)(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}({},l))}}},4791:function(e,a,l){"use strict";var s=l(5893),r=l(733),t=l.n(r);a.Z=function(){return(0,s.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,s.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,s.jsx)(t(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},370:function(e,a,l){"use strict";l.d(a,{Z:function(){return k}});var s,r,t,n,i,c,o,d=l(5893),h=l(4504),f=l(9226),x=l(7294),m=l(8569),p=l(6570);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function w(){return(w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}var N=[{key:"dashboard",icon:function(e){return x.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.71 24.9"},e),s||(s=x.createElement("g",{"data-name":"Icon feather-home",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},x.createElement("path",{"data-name":"Path 11159",d:"M1.5 9.165L11.355 1.5l9.855 7.665V21.21a2.19 2.19 0 01-2.19 2.19H3.69a2.19 2.19 0 01-2.19-2.19z"}),x.createElement("path",{"data-name":"Path 11160",d:"M8.07 23.4V12.45h6.57V23.4"}))))},path:"/dashboard"},{key:"info",icon:function(e){return x.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 23 22.02"},e),r||(r=x.createElement("g",{"data-name":"Group 1075",fill:"none",stroke:"#ff473e",strokeWidth:3},x.createElement("path",{"data-name":"Path 11164",d:"M11.5 22.02V.001"}),x.createElement("path",{"data-name":"Path 11166",d:"M16.5 17.742V4.278"}),x.createElement("path",{"data-name":"Path 11167",d:"M21.5 13.493V8.528"}),x.createElement("path",{"data-name":"Path 11165",d:"M6.5 17.742V4.278"}),x.createElement("path",{"data-name":"Path 11168",d:"M1.5 13.493V8.528"}))))},path:"/dashboard/nodes"},{key:"chat",icon:function(e){return x.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.338 22.338"},e),t||(t=x.createElement("path",{"data-name":"Icon material-chat",d:"M20.1 0H2.234A2.231 2.231 0 00.011 2.234L0 22.338l4.468-4.468H20.1a2.24 2.24 0 002.234-2.234V2.234A2.24 2.24 0 0020.1 0zM4.468 7.818h13.4v2.234h-13.4zM13.4 13.4H4.468v-2.231H13.4zm4.47-6.7H4.468V4.468h13.4z",fill:"#ff473e"})))},path:"/dashboard/discussion"},{key:"vote",icon:function(e){return x.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 31.235 21.865"},e),n||(n=x.createElement("path",{"data-name":"Icon awesome-vote-yea",d:"M29.673 14.056H26.55v3.123h1.093a.436.436 0 01.469.39v.781a.436.436 0 01-.469.39H3.592a.436.436 0 01-.469-.39v-.78a.436.436 0 01.469-.39h1.093v-3.124H1.562A1.56 1.56 0 000 15.617v4.685a1.56 1.56 0 001.562 1.562h28.111a1.56 1.56 0 001.562-1.562v-4.685a1.56 1.56 0 00-1.562-1.561zm-4.685 3.123V1.576A1.576 1.576 0 0023.412 0H7.828a1.58 1.58 0 00-1.581 1.576v15.6zm-14.68-8.882l1.245-1.235a.52.52 0 01.742 0l2.016 2.03 4.645-4.602a.52.52 0 01.742 0l1.235 1.245a.52.52 0 010 .742l-6.262 6.208a.52.52 0 01-.742 0l-3.616-3.646a.52.52 0 010-.742z",fill:"#ff473e"})))},path:"/dashboard/votes"},{key:"user",icon:function(e){return x.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.933 23.398"},e),i||(i=x.createElement("g",{"data-name":"Icon feather-user-plus",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},x.createElement("path",{"data-name":"Path 11206",d:"M18.5 21.9v-2.267a4.533 4.533 0 00-4.534-4.533H6.033A4.533 4.533 0 001.5 19.633V21.9"}),x.createElement("path",{"data-name":"Path 11207",d:"M14.533 6.033A4.533 4.533 0 1110 1.5a4.533 4.533 0 014.533 4.533z"}),x.createElement("path",{"data-name":"Path 11208",d:"M23.033 7.166v6.8"}),x.createElement("path",{"data-name":"Path 11209",d:"M26.433 10.566h-6.8"}))))},path:"/dashboard/member-perks"},{key:"verification",icon:function(e){return x.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 22.454 27.445"},e),o||(o=x.createElement("path",{d:"M11.227 0L0 4.99v7.485c0 6.923 4.79 13.4 11.227 14.97 6.437-1.572 11.227-8.046 11.227-14.97V4.99zM8.732 19.96l-4.99-4.99L5.5 13.211l3.231 3.218 8.221-8.221 1.759 1.771z",fill:"#ff473e"})))},path:"/dashboard/verification"},{key:"setting",icon:function(e){return x.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.09 27.09"},e),c||(c=x.createElement("g",{"data-name":"Icon feather-settings",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},x.createElement("path",{"data-name":"Path 11161",d:"M16.83 13.545a3.285 3.285 0 11-3.285-3.285 3.285 3.285 0 013.285 3.285z"}),x.createElement("path",{"data-name":"Path 11162",d:"M21.648 16.83a1.807 1.807 0 00.361 1.993l.066.066a2.192 2.192 0 11-3.1 3.1l-.066-.066a1.821 1.821 0 00-3.088 1.292v.185a2.19 2.19 0 01-4.38 0v-.1a1.807 1.807 0 00-1.183-1.653 1.807 1.807 0 00-1.993.361l-.066.066a2.192 2.192 0 11-3.1-3.1l.066-.066a1.821 1.821 0 00-1.292-3.088H3.69a2.19 2.19 0 110-4.38h.1a1.807 1.807 0 001.652-1.18 1.807 1.807 0 00-.361-1.993L5.015 8.2a2.192 2.192 0 113.1-3.1l.066.066a1.807 1.807 0 001.993.361h.088a1.807 1.807 0 001.095-1.653V3.69a2.19 2.19 0 014.38 0v.1a1.821 1.821 0 003.088 1.292l.066-.066a2.192 2.192 0 113.1 3.1l-.066.066a1.807 1.807 0 00-.361 1.993v.088a1.807 1.807 0 001.653 1.095h.183a2.19 2.19 0 010 4.38h-.1a1.807 1.807 0 00-1.653 1.095z"}))))},path:"/dashboard/settings"}],O=function(){var e=(0,f.v9)((function(e){return e.authReducer.userInfo.fullInfo})),a=(0,x.useState)(!1),l=a[0],s=a[1],r=(0,x.useState)(!1),t=r[0],n=r[1];return(0,x.useEffect)((function(){var a;s("admin"===(null===e||void 0===e?void 0:e.role)),n("approved"===(null===e||void 0===e||null===(a=e.profile)||void 0===a?void 0:a.status))}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,d.jsx)("img",{className:"py-6 border-b-2 align-center border-primary",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,d.jsx)("ul",{className:" mb-4 flex flex-col items-center lg:pt-8 xl:pt-8 2xl:pt-12 ",children:N.map((function(e,a){return(0,d.jsx)(d.Fragment,{children:(l||t)&&"verification"===e.key?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("li",{className:"".concat(l?"lg:py-1 2xl:py-2":"py-3"),children:(0,d.jsx)(m.O$,{activeClassName:"shadow-activeLink",href:"".concat(l&&"dashboard"===e.key?"/admin/dashboard":e.path),children:(0,d.jsx)("a",{className:" rounded-lg inline-block  xl:p-2 2xl:p-3 ",children:(0,d.jsx)(e.icon,{width:l?"1.25rem":"1.5rem",height:l?"1.25rem":"1.5rem"})})})},a)})}))}),l&&(0,d.jsxs)("ul",{className:"flex flex-col py-4 border-t-2 border-primary",children:[(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,d.jsx)("p",{children:"Admin"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,d.jsx)("p",{children:"Intake"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,d.jsx)("p",{children:"Users"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,d.jsx)("p",{children:"Ballots"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,d.jsx)("p",{children:"Perks"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/teams",children:(0,d.jsx)("p",{children:"Teams"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(m.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,d.jsx)("p",{children:"Settings"})})})]})]}),(0,d.jsx)(p.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function k(e){var a=e.children;return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"dashboard-layout",children:(0,d.jsxs)("div",{className:" relative h-screen h-px mx-auto flex flex-col px-4 lg:pt-10 lg:pb-20 lg:max-w-380 xl:py-20 xl:max-w-404  2xl:py-24 2xl:min-h-105",children:[(0,d.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,d.jsx)("div",{className:"flex-none",children:(0,d.jsx)(O,{})}),(0,d.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:a})]}),(0,d.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,d.jsx)(h.Z,{theme:"dark"})})]})})})}},8146:function(e,a,l){"use strict";l.r(a);var s=l(5893),r=l(4015),t=l(370),n=l(8569);a.default=(0,r.a)((function(){return(0,s.jsx)(t.Z,{children:(0,s.jsxs)("div",{className:"bg-transparent h-full",children:[(0,s.jsxs)("div",{className:"h-3/5 w-full",children:[(0,s.jsxs)("div",{className:"lg:mr-24 lg:h-70px flex flex-col justify-center",children:[(0,s.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Member Perks"}),(0,s.jsx)("div",{className:"border-primary border-b-2"})]}),(0,s.jsxs)("div",{className:"pt-3 h-full lg:pr-24",children:[(0,s.jsxs)("div",{className:"flex pb-5 h-11/20",children:[(0,s.jsx)("div",{className:"w-9/20 pr-2.5",children:(0,s.jsxs)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:[(0,s.jsxs)("div",{className:"flex mb-10",children:[(0,s.jsx)("p",{className:"text-lg",children:"Membership Status"}),(0,s.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("p",{className:"text-xl",children:"MEMBER"})]})}),(0,s.jsx)("div",{className:"w-9/20",children:(0,s.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,s.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row py-1",children:[(0,s.jsx)("span",{className:"text-lg",children:"Uptime"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,s.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,s.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,s.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-20 top-1/2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row py-1",children:[(0,s.jsx)("span",{className:"text-lg",children:"Peers"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,s.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,s.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,s.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-60 top-1/2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row py-1",children:[(0,s.jsx)("span",{className:"text-lg",children:"Performance"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"relative h-4 text-xs",children:[(0,s.jsx)("div",{className:"overflow-hidden w-full rounded-lg bg-gray flex bg-opacity-50",children:(0,s.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})}),(0,s.jsx)("div",{className:"transform -translate-y-2/4 absolute h-8 border-l-4 left-40 top-1/2"})]})]})]})})})]}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"w-4/6 pr-2.5",children:(0,s.jsxs)(n.Zb,{className:"p-6 lg:shadow-2xl flex",noShadow:!0,children:[(0,s.jsxs)("div",{className:"flex flex-col w-1/2 px-5 lg:px-0 border-r border-gray lg:pl-20 justify-center",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Daily Earnings"}),(0,s.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,s.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,s.jsx)("span",{className:"text-base font-thin pl-3",children:"0.0154"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col px-5 lg:px-0 w-1/2 border-r border-gray lg:pl-20 justify-center",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Total Earnings"}),(0,s.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,s.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,s.jsx)("span",{className:"text-base font-thin pl-3",children:"6.101297"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col px-5 lg:px-0 w-1/2 lg:pl-20 justify-center",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Total Earnings"}),(0,s.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,s.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,s.jsx)("span",{className:"text-base font-thin pl-3",children:"6.101297"})]})]})]})})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col h-2/5 w-full",children:[(0,s.jsxs)("div",{className:"lg:mr-24 lg:h-70px flex flex-col justify-center",children:[(0,s.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Member Perks"}),(0,s.jsx)("div",{className:"border-primary border-b-2"})]}),(0,s.jsx)("div",{className:"pt-3 flex-grow",children:(0,s.jsxs)("div",{className:"lg:pr-24 flex h-full",children:[(0,s.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,s.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,s.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,s.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,s.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,s.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,s.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,s.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,s.jsx)("p",{className:"text-xl",children:"Discount tickets"})})}),(0,s.jsx)("div",{className:"lg:w-60 pr-9 h-full",children:(0,s.jsx)(n.Zb,{className:"p-6 lg:shadow-2xl h-full",noShadow:!0,children:(0,s.jsx)("p",{className:"text-xl",children:"Discount tickets"})})})]})})]})]})})}),"final-all")},2938:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/member-perks",function(){return l(8146)}])}},function(e){e.O(0,[9774,2554,1282,8930,6993,6095,5679],(function(){return a=2938,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
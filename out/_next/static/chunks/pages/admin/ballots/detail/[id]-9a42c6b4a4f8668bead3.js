(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5090],{4015:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(6156),a=n(5893),l=n(7294),i=n(1163),s=n(9226);var o=n(4791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e,t){return function(n){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,l.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&i.default.push("/verify-email"),"onboarding"===n.period&&i.default.push("/onboard"),void("final"===n.period&&i.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&i.default.push("/onboard"),void("final"===n.period&&i.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&i.default.push("/verify-email"),void("final"===n.period&&i.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&i.default.push("/verify-email"),void("onboarding"===n.period&&i.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&i.default.push("/verify-email"),"onboarding"===n.period&&i.default.push("/onboard"),"final"===n.period&&i.default.push("/dashboard"))}else"admin"===n.role&&"final-all"!==t&&"final-admin"!==t&&i.default.push("/admin/dashboard");else"auth"!==t&&i.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!d)return(0,a.jsx)(o.Z,{});if("auth"===t&&d.isLoggedIn)return(0,a.jsx)(o.Z,{});if("auth"!==t&&!d.isLoggedIn)return(0,a.jsx)(o.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(t)&&"final"!==d.period)return(0,a.jsx)(o.Z,{});if(["verifying"].includes(t)&&"verifying"!==d.period)return(0,a.jsx)(o.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==d.period)return(0,a.jsx)(o.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(o.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},4791:function(e,t,n){"use strict";var r=n(5893),a=n(733),l=n.n(a);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(l(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},5955:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r,a,l,i,s,o,c=n(5893),d=n(4504),u=n(9226),h=n(7294),f=n(5587),p=n(6570);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=[{key:"dashboard",icon:function(e){return h.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.71 24.9"},e),r||(r=h.createElement("g",{"data-name":"Icon feather-home",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11159",d:"M1.5 9.165L11.355 1.5l9.855 7.665V21.21a2.19 2.19 0 01-2.19 2.19H3.69a2.19 2.19 0 01-2.19-2.19z"}),h.createElement("path",{"data-name":"Path 11160",d:"M8.07 23.4V12.45h6.57V23.4"}))))},path:"/dashboard"},{key:"info",icon:function(e){return h.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 23 22.02"},e),a||(a=h.createElement("g",{"data-name":"Group 1075",fill:"none",stroke:"#ff473e",strokeWidth:3},h.createElement("path",{"data-name":"Path 11164",d:"M11.5 22.02V.001"}),h.createElement("path",{"data-name":"Path 11166",d:"M16.5 17.742V4.278"}),h.createElement("path",{"data-name":"Path 11167",d:"M21.5 13.493V8.528"}),h.createElement("path",{"data-name":"Path 11165",d:"M6.5 17.742V4.278"}),h.createElement("path",{"data-name":"Path 11168",d:"M1.5 13.493V8.528"}))))},path:"/dashboard/nodes"},{key:"chat",icon:function(e){return h.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.338 22.338"},e),l||(l=h.createElement("path",{"data-name":"Icon material-chat",d:"M20.1 0H2.234A2.231 2.231 0 00.011 2.234L0 22.338l4.468-4.468H20.1a2.24 2.24 0 002.234-2.234V2.234A2.24 2.24 0 0020.1 0zM4.468 7.818h13.4v2.234h-13.4zM13.4 13.4H4.468v-2.231H13.4zm4.47-6.7H4.468V4.468h13.4z",fill:"#ff473e"})))},path:"/dashboard/discussion"},{key:"vote",icon:function(e){return h.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 31.235 21.865"},e),i||(i=h.createElement("path",{"data-name":"Icon awesome-vote-yea",d:"M29.673 14.056H26.55v3.123h1.093a.436.436 0 01.469.39v.781a.436.436 0 01-.469.39H3.592a.436.436 0 01-.469-.39v-.78a.436.436 0 01.469-.39h1.093v-3.124H1.562A1.56 1.56 0 000 15.617v4.685a1.56 1.56 0 001.562 1.562h28.111a1.56 1.56 0 001.562-1.562v-4.685a1.56 1.56 0 00-1.562-1.561zm-4.685 3.123V1.576A1.576 1.576 0 0023.412 0H7.828a1.58 1.58 0 00-1.581 1.576v15.6zm-14.68-8.882l1.245-1.235a.52.52 0 01.742 0l2.016 2.03 4.645-4.602a.52.52 0 01.742 0l1.235 1.245a.52.52 0 010 .742l-6.262 6.208a.52.52 0 01-.742 0l-3.616-3.646a.52.52 0 010-.742z",fill:"#ff473e"})))},path:"/dashboard/votes"},{key:"user",icon:function(e){return h.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.933 23.398"},e),s||(s=h.createElement("g",{"data-name":"Icon feather-user-plus",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11206",d:"M18.5 21.9v-2.267a4.533 4.533 0 00-4.534-4.533H6.033A4.533 4.533 0 001.5 19.633V21.9"}),h.createElement("path",{"data-name":"Path 11207",d:"M14.533 6.033A4.533 4.533 0 1110 1.5a4.533 4.533 0 014.533 4.533z"}),h.createElement("path",{"data-name":"Path 11208",d:"M23.033 7.166v6.8"}),h.createElement("path",{"data-name":"Path 11209",d:"M26.433 10.566h-6.8"}))))},path:"/dashboard/member-perks"},{key:"setting",icon:function(e){return h.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.09 27.09"},e),o||(o=h.createElement("g",{"data-name":"Icon feather-settings",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11161",d:"M16.83 13.545a3.285 3.285 0 11-3.285-3.285 3.285 3.285 0 013.285 3.285z"}),h.createElement("path",{"data-name":"Path 11162",d:"M21.648 16.83a1.807 1.807 0 00.361 1.993l.066.066a2.192 2.192 0 11-3.1 3.1l-.066-.066a1.821 1.821 0 00-3.088 1.292v.185a2.19 2.19 0 01-4.38 0v-.1a1.807 1.807 0 00-1.183-1.653 1.807 1.807 0 00-1.993.361l-.066.066a2.192 2.192 0 11-3.1-3.1l.066-.066a1.821 1.821 0 00-1.292-3.088H3.69a2.19 2.19 0 110-4.38h.1a1.807 1.807 0 001.652-1.18 1.807 1.807 0 00-.361-1.993L5.015 8.2a2.192 2.192 0 113.1-3.1l.066.066a1.807 1.807 0 001.993.361h.088a1.807 1.807 0 001.095-1.653V3.69a2.19 2.19 0 014.38 0v.1a1.821 1.821 0 003.088 1.292l.066-.066a2.192 2.192 0 113.1 3.1l-.066.066a1.807 1.807 0 00-.361 1.993v.088a1.807 1.807 0 001.653 1.095h.183a2.19 2.19 0 010 4.38h-.1a1.807 1.807 0 00-1.653 1.095z"}))))},path:"/dashboard/settings"}],w=function(){var e=(0,u.v9)((function(e){return e.authReducer.userInfo.fullInfo})),t=(0,h.useState)(!1),n=t[0],r=t[1];return(0,h.useEffect)((function(){r("admin"===(null===e||void 0===e?void 0:e.role))}),[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(f.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,c.jsx)("img",{className:"py-6 border-b-2 align-center border-primary",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,c.jsx)("ul",{className:" mb-4 flex flex-col items-center xl:pt-8 2xl:pt-12 ",children:g.map((function(e){return(0,c.jsx)("li",{className:"".concat(n?"xl:py-1 2xl:py-2":"py-3"),children:(0,c.jsx)(f.O$,{activeClassName:"shadow-activeLink",href:"".concat(n&&"dashboard"===e.key?"/admin/dashboard":e.path),children:(0,c.jsx)("a",{className:" rounded-lg inline-block  xl:p-2 2xl:p-3 ",children:(0,c.jsx)(e.icon,{width:n?"1.25rem":"1.5rem",height:n?"1.25rem":"1.5rem"})})})})}))}),n&&(0,c.jsxs)("ul",{className:"flex flex-col py-4 border-t-2 border-primary",children:[(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,c.jsx)("p",{children:"Admin"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,c.jsx)("p",{children:"Intake"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,c.jsx)("p",{children:"Users"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,c.jsx)("p",{children:"Ballots"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,c.jsx)("p",{children:"Perks"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/teams",children:(0,c.jsx)("p",{children:"Teams"})})}),(0,c.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,c.jsx)("p",{children:"Settings"})})})]})]}),(0,c.jsx)(p.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function N(e){var t=e.children;return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"dashboard-layout",children:(0,c.jsxs)("div",{className:" relative h-screen h-px mx-auto flex flex-col max-w-404 px-4 lg:py-4 xl:py-20 2xl:py-24 2xl:min-h-105",children:[(0,c.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,c.jsx)("div",{className:"flex-none",children:(0,c.jsx)(w,{})}),(0,c.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:t})]}),(0,c.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,c.jsx)(d.Z,{theme:"dark"})})]})})})}},4478:function(e,t,n){"use strict";n.d(t,{T:function(){return h},R:function(){return d}});var r=n(6156),a=n(5893),l=n(7294),i=n(3935);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=l.createContext({setDialog:function(e){return e}}),d=function(){var e=l.useContext(c);if(!e)throw new Error("useDialog must be used within a DialogProvider");return e},u=function(e){var t,n=e.dialog,s=e.onClosed,o=n.settings?n.settings:{},c=(0,l.useState)(n.defaultValue||""),d=c[0],u=c[1],h=function(e){s(),n.afterClosed&&("DialogPrompt"===n.type?e&&n.afterClosed(d):n.afterClosed(e))};return(0,i.createPortal)((0,a.jsxs)("div",{className:"backdrop-filter backdrop-blur-sm justify-center items-center flex fixed inset-0 z-50",children:["Dialog"===n.type&&(0,a.jsxs)("div",{className:"w-full max-w-2xl shadow-2xl mx-4 relative bg-white",style:o.style,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-4xl text-center pt-4",children:n.data.title}),(0,a.jsx)("a",{onClick:function(){return h(!1)},children:(0,a.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-4 top-4",alt:"Cancel"})}),(0,a.jsx)("div",{className:"h-full w-full pt-16 pb-36 flex flex-col items-center justify-between border-gray",children:(0,a.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})})]}),!o.hideButton&&(0,a.jsx)("button",{type:"button",className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-lg text-white w-1/2 lg:w-1/2 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return h(!1)},children:"OK"})]}),"DialogConfirm"===n.type&&(0,a.jsxs)("div",{className:"w-full max-w-2xl shadow-2xl mx-4 relative bg-white p-16",style:o.style,children:[n.data.title&&(0,a.jsx)("h3",{className:"text-4xl text-center mb-6",children:n.data.title}),(0,a.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,a.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})}),(0,a.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,a.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return h(!1)},children:n.data.cancel}),(0,a.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return h(!0)},children:n.data.ok})]})]}),"DialogPrompt"===n.type&&(0,a.jsxs)("div",{className:"w-full max-w-2xl shadow-2xl mx-4 relative bg-white border border-gray",style:o.style,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-2xl text-center m-20",children:n.data.title}),(0,a.jsx)("div",{className:"mx-20",children:(0,a.jsx)("input",{type:"text",className:"w-full h-16 text-xl px-4 shadow-md focus:outline-none",placeholder:"Email",value:d,onChange:function(e){u(e.target.value)},name:"email"})})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-center m-20",children:[(0,a.jsx)("button",(t={type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"},(0,r.Z)(t,"className","mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"),(0,r.Z)(t,"onClick",(function(){return h(!0)})),(0,r.Z)(t,"children",n.data.ok),t)),(0,a.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return h(!1)},children:n.data.cancel})]})]})]}),document.body)},h=function(e){var t=(0,l.useState)(null),n=t[0],r=t[1],i=(0,l.useCallback)((function(){r(null)}),[r]);return(0,a.jsxs)(c.Provider,o(o({value:{dialog:n,onClosed:i,setDialog:r}},e),{},{children:[e.children,n&&(0,a.jsx)(u,{dialog:n,onClosed:i})]}))}},8046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),a=n(1163),l=n(7294),i=n(9226),s=n(4015),o=n(5955),c=n(5587),d=n(7028),u=n(2465),h=n(9163),f=n(1664),p=n(4478);function x(){var e=(0,u.Z)(["\n  .active-ballot-table {\n    width: 100%;\n    & > tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 30px;\n      }\n      td:nth-child(1) {\n        width: 25%;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return x=function(){return e},e}var m=h.ZP.div(x()),v=function(e){var t,n=e.ballot,l=(0,i.I0)(),s=(0,p.R)().setDialog;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,r.jsx)(c.xE,{href:"/admin/ballots",text:"Back",force:!0}),(0,r.jsxs)("div",{className:"flex justify-between items-center mb-3.5",children:[(0,r.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium",children:"Manage Active Ballot"}),(0,r.jsxs)("div",{className:"flex flex-col-reverse lg:flex-wrap lg:flex-row justify-end",children:[(0,r.jsx)(f.default,{href:"/admin/ballots/detail/".concat(null===n||void 0===n?void 0:n.id,"/current-votes"),children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-full text-white lg:w-48 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"View Current Votes"})}),(0,r.jsx)("button",{type:"button",className:"h-16 lg:h-11 w-full text-lg text-primary lg:w-48 rounded-full bg-none border-2 border-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",onClick:function(){s({type:"DialogConfirm",data:{title:"Are you sure?",content:"Canceling this will close the vote and record this as a \u201ccanceled\u201d ballot",ok:"Yes, cancel this ballot",cancel:"No, leave the vote open"},afterClosed:function(e){e&&l((0,d.MC)(null===n||void 0===n?void 0:n.id,(function(){a.default.push("/admin/ballots")})))}})},children:"Cancel Ballot"})]})]}),(0,r.jsx)("div",{className:"border-primary border-b-2"})]}),(0,r.jsx)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:(0,r.jsx)(m,{className:"lg:pr-24",children:(0,r.jsxs)("table",{className:"active-ballot-table border-0",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Title:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===n||void 0===n?void 0:n.title})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Time Remaining:"})}),(0,r.jsx)("td",{children:n&&(0,r.jsx)(c.ZF,{className:"w-40",endTime:new Date(n.time_end),startTime:new Date(n.created_at)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Text:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:null===n||void 0===n?void 0:n.description}})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Files Attached:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("ul",{children:null===n||void 0===n||null===(t=n.files)||void 0===t?void 0:t.map((function(e,t){return(0,r.jsxs)("li",{className:"flex pb-2",children:[(0,r.jsx)("p",{className:"w-52",children:e.name}),(0,r.jsx)(f.default,{href:"".concat(e.file_url),children:(0,r.jsx)("a",{target:"_blank",className:"text-primary",children:"View"})})]},"file-".concat(t))}))})})]})]})})})]})},j=n(9586);function y(){var e=(0,u.Z)(["\n  .complete-ballot-table {\n    width: 100%;\n    & > tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 30px;\n      }\n      td:nth-child(1) {\n        width: 25%;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return y=function(){return e},e}var b=h.ZP.div(y()),g=function(e){var t,n,a,l,i=e.ballot;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,r.jsx)(c.xE,{href:"/admin/ballots",text:"Back",force:!0}),(0,r.jsxs)("div",{className:"flex justify-between items-center mb-3.5",children:[(0,r.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium",children:"Completed Ballot"}),(0,r.jsx)("div",{className:"flex flex-col-reverse lg:flex-wrap lg:flex-row justify-end",children:(0,r.jsx)(f.default,{href:"/admin/ballots/detail/".concat(null===i||void 0===i?void 0:i.id,"/current-votes"),children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-full text-white lg:w-48 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"View Voting Records"})})})]}),(0,r.jsx)("div",{className:"border-primary border-b-2"})]}),(0,r.jsx)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:(0,r.jsx)("div",{className:"lg:pr-24",children:(0,r.jsx)(b,{children:(0,r.jsxs)("table",{className:"complete-ballot-table border-0",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Title:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===i||void 0===i?void 0:i.title})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Final Result:"})}),(0,r.jsx)("td",{children:(0,r.jsx)(c.r2,{content:null===i||void 0===i?void 0:i.status,className:"uppercase"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Total Votes:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===i||void 0===i||null===(t=i.vote)||void 0===t?void 0:t.result_count})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Split (For/Against):"})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(c.L3,{splitFor:null===i||void 0===i||null===(n=i.vote)||void 0===n?void 0:n.for_value,splitAgainst:null===i||void 0===i||null===(a=i.vote)||void 0===a?void 0:a.against_value})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Start Time:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:(0,j.p)(null===i||void 0===i?void 0:i.created_at,"dd/MM/yyyy - hh:mm aaa")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"End Time:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:(0,j.p)(null===i||void 0===i?void 0:i.time_end,"dd/MM/yyyy - hh:mm aaa")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Text:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:null===i||void 0===i?void 0:i.description}})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Files Attached:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("ul",{children:null===i||void 0===i||null===(l=i.files)||void 0===l?void 0:l.map((function(e){return(0,r.jsxs)("li",{className:"flex pb-2",children:[(0,r.jsx)("p",{className:"w-52",children:e.name}),(0,r.jsx)(f.default,{href:"".concat(e.file_url),children:(0,r.jsx)("a",{target:"_blank",className:"text-primary",children:"View"})})]})}))})})]})]})})})})]})},w=(0,s.a)((function(){var e=(0,l.useState)(),t=e[0],n=e[1],s=a.default.query.id,u=(0,i.I0)();return(0,l.useEffect)((function(){u((0,d.Lx)(s,(function(e){n(e)})))}),[s]),(0,r.jsx)(o.Z,{children:(0,r.jsx)(c.Zb,{className:"h-full lg:pl-24 lg:py-11 lg:shadow-2xl",noShadow:!0,children:(0,r.jsxs)("div",{className:"w-full h-full",children:[t&&"active"===t.status&&(0,r.jsx)(v,{ballot:t}),t&&"active"!==t.status&&(0,r.jsx)(g,{ballot:t})]})})})}),"final-all")},9586:function(e,t,n){"use strict";n.d(t,{p:function(){return a},e:function(){return l}});var r=n(8661),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=new Date(e);return"Invalid Date"===n.toString()?n.toString():(0,r.Z)(n,t)},l=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},7028:function(e,t,n){"use strict";n.d(t,{lL:function(){return r},yW:function(){return a},nE:function(){return l},FH:function(){return i},fX:function(){return s},iA:function(){return o},Xp:function(){return c},ed:function(){return d},c8:function(){return u},Od:function(){return h},fI:function(){return f},yG:function(){return p},Lx:function(){return x},TT:function(){return m},I2:function(){return v},MC:function(){return j},CQ:function(){return y},ie:function(){return b}});var r=function(e,t){return{type:"GET_LIST_MEMBER",payload:e,callback:t}},a=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},l=function(e){return{type:"GET_USER_DETAIL",payload:e}},i=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},s=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},o=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},c=function(e){return{type:"APPROVE_KYC",payload:e}},d=function(e){return{type:"DENY_KYC",payload:e}},u=function(e,t){return{type:"GET_LIST_INTAKE",payload:e,successCb:t}},h=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},f=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},p=function(e,t){return{type:"GET_BALLOTS",payload:e,callback:t}},x=function(e,t){return{type:"GET_BALLOT_DETAIL",payload:e,callback:t}},m=function(e,t){return{type:"GET_BALLOT_VOTES",payload:e,callback:t}},v=function(e,t,n){return{type:"SUBMIT_BALLOT",payload:e,resolve:t,reject:n}},j=function(e,t){return{type:"CANCEL_BALLOT",payload:e,callback:t}},y=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},b=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}}},5055:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ballots/detail/[id]",function(){return n(8046)}])}},function(e){e.O(0,[9774,2554,1282,8930,6993,6093,8661,4004],(function(){return t=5055,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026],{7001:function(e,s,l){"use strict";l.d(s,{s:function(){return x}});var a=l(6610),t=l(5991),n=l(6156),c=l(9669),i=l.n(c);function r(e){var s;if("string"!==typeof e[e.length-1]){s=e.pop();var l=e.join("/");return Object.keys(s).forEach((function(e){l=l.replace(":".concat(e),s[e])})),l}return e.join("/")}var x=function(){function e(){(0,a.Z)(this,e),(0,n.Z)(this,"axiosInstance",void 0),this.axiosInstance=i().create({baseURL:"".concat("https://backend.caspermember.com","/api/v1/"),headers:{"Content-Type":"application/json"}}),this.axiosInstance.interceptors.request.use((function(e){var s=localStorage.getItem("ACCESS-TOKEN");return s&&(e.headers.Authorization="Bearer ".concat(s)),e}))}return(0,t.Z)(e,[{key:"doGet",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.axiosInstance.get(r(e),s)}},{key:"doPost",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.axiosInstance.post(r(e),s,l)}},{key:"doPut",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.axiosInstance.put(r(e),s,l)}},{key:"doDelete",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.axiosInstance.delete(r(e),s,l)}}]),e}()},2605:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return w}});var a=l(5893),t=l(5955),n=l(5587),c=l(7757),i=l.n(c),r=l(2137),x=l(9226),o=l(3022),d=l(5774),m=(l(2897),function(){return(0,a.jsxs)("div",{className:"flex flex-col pt-5 lg:pb-3",children:[(0,a.jsx)("span",{className:"text-3xl",children:"Node Info"}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Node Rank"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("span",{className:"text-xl text-black1 font-thin",children:"8"})]}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Stake Amount"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("span",{className:"text-xl text-black1 font-thin",children:"2,502,815"})]}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Delegators"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("span",{className:"text-xl text-black1 font-thin",children:"8"})]}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Uptime"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("p",{className:"text-sm text-gray mb-2",children:"Average: {X}%"}),(0,a.jsx)(n.ko,{percent:75})]}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Block Height"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("p",{className:"text-sm text-gray mb-2",children:"Current: 1 block behind"}),(0,a.jsx)(n.ko,{counts:504,totalCounts:505,type:"count"})]}),(0,a.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Update Responsiveness"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("p",{className:"text-sm text-gray mb-2",children:"Average: 2+ days early"}),(0,a.jsx)(n.ko,{percent:100,type:"text",startText:"Needs Improvement",endText:"Great"})]}),(0,a.jsxs)("div",{className:"flex flex-col pt-2 pb-9 border-b-2 border-gray",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-xxl",children:"Peers"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("p",{className:"text-sm text-gray mb-2",children:"Average: 63"}),(0,a.jsx)(n.ko,{counts:62,totalCounts:88,type:"count"})]}),(0,a.jsxs)("div",{className:"flex justify-between py-9",children:[(0,a.jsxs)("div",{className:"flex w-1/2 pr-2 flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row pb-4",children:[(0,a.jsx)("span",{className:"text-md font-medium",children:"CPU Load"}),(0,a.jsx)("img",{className:"pl-2",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,a.jsx)(d.Ip,{value:61,text:"".concat(61,"%"),styles:(0,d.y3)({pathColor:"#FF473E",strokeLinecap:"butt",textColor:"#313131",textSize:"26px",trailColor:"#9A9A9A"})})})]}),(0,a.jsxs)("div",{className:"flex w-1/2 pl-2 flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row pb-4",children:[(0,a.jsx)("span",{className:"text-md font-medium",children:"Performance"}),(0,a.jsx)("img",{className:"pl-2",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,a.jsx)(d.Ip,{value:83,text:"".concat(83,"%"),styles:(0,d.y3)({pathColor:"#FF473E",strokeLinecap:"butt",textColor:"#313131",textSize:"26px",trailColor:"#9A9A9A"})})})]})]})]})}),f=function(){var e=(0,x.I0)(),s=(0,x.v9)((function(e){var s;return null===(s=e.authReducer.userInfo)||void 0===s?void 0:s.fullInfo}));return(0,a.jsxs)("div",{className:"flex flex-col mx-9 my-3 bg-white",children:[(0,a.jsxs)("div",{className:"flex flex-col pb-8 xl:pb-4 2xl:pb-8 border-b-2 border-gray",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("img",{className:"pr-2",src:"/images/ic_awesome_user_circle.svg",alt:"User"}),(0,a.jsx)("span",{className:"text-2xl truncate",children:null===s||void 0===s?void 0:s.full_name})]}),(0,a.jsx)("button",{type:"button",className:"mt-2 inline-flex text-xs text-primary underline",onClick:function(){var s=(0,r.Z)(i().mark((function s(l){return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:l.preventDefault(),e((0,o.Rg)());case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),children:"Logout"})]}),(0,a.jsx)(m,{})]})},h=l(7294),u=l(871),p=l(7001),j=l(6632),g=l(8517),v=l(9586),N=(new p.s,function(){var e=(0,x.v9)((function(e){return e.authReducer.userInfo.fullInfo})),s=(0,h.useState)([]),l=s[0],t=s[1],c=(0,h.useState)(!1),i=c[0],r=c[1],o=(0,x.I0)();(0,h.useEffect)((function(){o((0,g.E_)((function(e){t(e.trendings)})))}),[]);return(0,a.jsxs)("div",{className:"flex flex-col lg:justify-between w-full h-full lg:pr-6",children:[(0,a.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap lg:h-1/10 -mx-3",children:[(0,a.jsx)("div",{className:"w-full lg:w-3/5 px-3 mb-3",children:(0,a.jsx)(n.Zb,{className:"lg:flex-grow bg-primary",children:(0,a.jsxs)("div",{className:"flex flex-col px-9 py-4",children:[(0,a.jsx)("span",{className:"text-lg font-bold text-white",children:"New Alert"}),(0,a.jsx)("span",{className:"text-base text-white",children:"There are new comments to be read!"})]})})}),(0,a.jsx)("div",{className:"w-2/4 lg:w-1/5 px-3 mb-3",children:(0,a.jsx)(n.Zb,{className:"lg:flex-none",children:(0,a.jsxs)("div",{className:"flex flex-col px-9 py-4",children:[(0,a.jsx)("span",{className:"text-lg font-medium text-black1",children:"Pinned"}),(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:e.pinned})]})})}),(0,a.jsx)("div",{className:"w-2/4 lg:w-1/5 px-3 mb-3",children:(0,a.jsx)(n.Zb,{className:"lg:flex-none",children:(0,a.jsxs)("div",{className:"flex flex-col px-9 py-4",children:[(0,a.jsx)("span",{className:"text-lg font-medium text-black1",children:"New"}),(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:e.new_threads})]})})})]}),(0,a.jsx)(n.Zb,{className:"block lg:hidden h-auto w-full",children:(0,a.jsx)("div",{className:"h-auto",children:(0,a.jsx)(f,{})})}),(0,a.jsxs)("div",{className:"flex flex-col-reverse lg:flex-col lg:h-8.5/10 lg:justify-between",children:[(0,a.jsx)("div",{className:"flex my-10 lg:mt-0 h-auto lg:h-1/3",children:(0,a.jsx)(n.Zb,{className:"w-full px-9 py-5",children:(0,a.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between",children:[(0,a.jsx)("p",{className:"text-lg lg:text-2xl",children:"Validator Rewards"}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"mt-4 lg:mt-0 flex items-center",children:[(0,a.jsx)("li",{className:"text-sm lg:mx-4",children:(0,a.jsx)("a",{children:"Day"})}),(0,a.jsx)("li",{className:"px-4",children:(0,a.jsx)("a",{className:"rounded-lg px-4 py-1 text-primary text-sm shadow-activeLink",children:"Week"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Month"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Year"})})]})})]}),(0,a.jsx)("div",{className:"h-full py-4",children:(0,a.jsx)(u.x1,{data:{datasets:[{backgroundColor:"rgba(255,71,62, 0.7)",borderColor:"#FF473E",data:[1400,1600,1500,2e3,1800,1600,1850],fill:!0,fillOpacity:.3,pointRadius:0}],labels:["Sun","Mon","Tues","Wed","Thrs","Fri","Sat"]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[5,5],drawBorder:!1}}}}})})]})})}),(0,a.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row h-3/5",children:[(0,a.jsx)(n.Zb,{className:"flex-grow w-full mt-10 lg:mt-0 lg:w-2/3 lg:mr-3 h-full",children:(0,a.jsxs)("div",{className:"flex flex-col px-8 py-7 h-full",children:[(0,a.jsx)("p",{className:"text-2.5xl text-black1",children:"Trending Discussions"}),(0,a.jsxs)("div",{className:"flex flex-col pt-6 h-8.5/10",children:[(0,a.jsxs)("div",{className:"hidden lg:flex w-full h-1/5",children:[(0,a.jsx)("p",{className:"w-3/6 pb-2 text-lg underline text-left font-normal",children:"Title"}),(0,a.jsxs)("div",{className:"flex w-3/6",children:[(0,a.jsx)("p",{className:"w-3/5 pl-12 pb-2 text-lg underline text-left font-normal",children:"Comments"}),(0,a.jsx)("p",{className:"w-3/5 pl-12 pb-2 text-lg underline text-left font-normal",children:"Date"})]})]}),(0,a.jsx)("div",{className:"flex flex-col w-full lg:mt-5 overflow-y-scroll",children:l.map((function(e){return(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,a.jsx)("p",{className:"w-full lg:w-3/6 pb-2 text-sm",children:e.title}),(0,a.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,a.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,a.jsx)("div",{className:"pr-3",children:(0,a.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,a.jsx)("span",{className:"text-sm",children:e.comments})]}),(0,a.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,a.jsx)("div",{className:"pr-3",children:(0,a.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,a.jsx)("span",{className:"text-sm",children:(0,v.p)(e.created_at,"d/M/yy")})]})]})]})}))})]})]})}),(0,a.jsx)(n.Zb,{className:"".concat(i?"flex-grow w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-3 h-full":"w-0 h-0 opacity-0"),children:(0,a.jsx)(j.Z,{toggleOpenVotes:r})})]})]})]})}),w=(0,l(4015).a)((function(){return(0,a.jsx)(t.Z,{children:(0,a.jsxs)("div",{className:"flex h:auto lg:h-full",children:[(0,a.jsx)(N,{}),(0,a.jsx)(n.Zb,{className:"hidden lg:block h-full",children:(0,a.jsx)("div",{className:"overflow-y-scroll h-full w-80",children:(0,a.jsx)(f,{})})})]})})}),"final-member")},9586:function(e,s,l){"use strict";l.d(s,{p:function(){return t},e:function(){return n}});var a=l(8661),t=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",l=new Date(e);return"Invalid Date"===l.toString()?l.toString():(0,a.Z)(l,s)},n=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},1976:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return l(2605)}])}},function(e){e.O(0,[9774,2554,7570,1282,8930,6993,6093,8661,845,4733,4982,4004,7581],(function(){return s=1976,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
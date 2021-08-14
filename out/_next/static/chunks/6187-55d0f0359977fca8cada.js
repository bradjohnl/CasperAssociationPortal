(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6187],{9420:function(e,t,i){"use strict";var n,o=i(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 41.191 41.191"},e),n||(n=o.createElement("path",{"data-name":"Icon metro-cross",d:"M40.815 33.092l-12.5-12.5 12.5-12.5a1.29 1.29 0 000-1.82l-5.9-5.9a1.291 1.291 0 00-1.82 0l-12.5 12.5L8.099.372a1.29 1.29 0 00-1.82 0l-5.9 5.9a1.29 1.29 0 000 1.82l12.5 12.5-12.5 12.5a1.29 1.29 0 000 1.82l5.9 5.9a1.29 1.29 0 001.82 0l12.5-12.5 12.5 12.5a1.29 1.29 0 001.82 0l5.9-5.9a1.29 1.29 0 000-1.82z",fill:"currentColor"})))}},17202:function(e,t,i){"use strict";i.d(t,{T:function(){return s}});var n=i(85893),o=i(41664),r=i(12245),s=function(e){var t,i,s=e.perk;return(0,n.jsxs)("div",{className:"w-full h-56 flex p-5 pr-2 shadow-card gap-4 rounded-2xl",children:[(0,n.jsx)("div",{className:"w-1/2",children:null!==s&&void 0!==s&&null!==(t=s.image)&&void 0!==t&&t.url?(0,n.jsx)("img",{className:"object-cover w-full h-full bg-gray1",src:(null===s||void 0===s||null===(i=s.image)||void 0===i?void 0:i.url)||"",alt:""}):(0,n.jsx)("div",{className:"bg-gray1 w-full h-full"})}),(0,n.jsxs)("div",{className:"w-1/2",children:[(0,n.jsxs)("div",{className:"h-2/3 flex flex-col justify-between",children:[(0,n.jsx)("h4",{className:"font-bold pt-4 line-clamp-2",children:null===s||void 0===s?void 0:s.title}),(0,n.jsxs)("div",{className:"flex text-primary text-xs pb-6",children:[(0,n.jsx)("span",{className:"pr-1",children:"Time Remaining:"}),(0,n.jsx)(r.ZF,{endTime:new Date(null===s||void 0===s?void 0:s.end_date),hideProgressBar:!0})]})]}),(0,n.jsx)("div",{className:"h-1/3",children:(0,n.jsx)(o.default,{href:"".concat(null!==s&&void 0!==s&&s.id?"/dashboard/perks/".concat(s.id):""),children:(0,n.jsx)("a",{children:(0,n.jsx)(r.zx,{primary:!0,children:"More Information"})})})})]})]})}},51040:function(e,t,i){"use strict";i.d(t,{U:function(){return g}});var n=i(85893),o=i(96156),r=i(42283),s=i(19501),a=i(28834),l=i(49226),d=i(67294),c=i(11163),u=i(59936),h=i(12245),p=i(9420),f=i(87028),m=i(29586);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){(0,o.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var x=s.Ry().shape({title:s.Z_().required("Title is required").max(70,"Maximum characters of title is 70"),content:s.Z_().required("Content is required"),action_link:s.Z_().required("Action Link is required"),image:s.Ry().typeError("Image is required")}),g=d.memo((function(e){var t,i,o,s,v,g,y,j,w,k,N=e.editMode,O=e.value,C=e.onChange,S=e.onEditing,E=(0,d.useState)(!1),D=E[0],M=E[1],T=(0,d.useState)(!1),I=T[0],_=T[1],P=(0,l.I0)(),L=(0,r.cI)({resolver:(0,a.X)(x)}),Z=L.register,z=L.setValue,F=L.watch,R=L.control,W=L.handleSubmit,H=L.formState,U=L.reset,B=F();(0,d.useEffect)((function(){C(B)}),[B]),(0,d.useEffect)((function(){N&&O&&U(O)}),[O]),(0,d.useEffect)((function(){N&&_(!0)}),[]);var A=function(e){N&&(_(e),S(!e))};return(0,n.jsxs)("form",{onSubmit:W((function(e){var t=e;M(!0),t.start_date&&(t.start_date=(0,m.p)(new Date(e.start_date),"yyyy-MM-dd")),t.end_date&&(t.end_date=(0,m.p)(new Date(e.end_date),"yyyy-MM-dd")),P(N?(0,f.hy)(b({id:O.id},t),(function(){c.default.push("/admin/perks")}),(function(){M(!1)})):(0,f.qG)(t,(function(){c.default.push("/admin/perks")}),(function(){M(!1)})))})),children:[(0,n.jsxs)("div",{className:"pb-8 relative",children:[(0,n.jsxs)("div",{className:"max-w-xl pb-6 relative",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Title of Perk (Limit 70 characters)*"}),(0,n.jsx)("input",b(b({id:"title",type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none"},Z("title")),{},{disabled:I})),(null===(t=H.errors)||void 0===t?void 0:t.title)&&(0,n.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(i=H.errors.title)||void 0===i?void 0:i.message})]}),(0,n.jsxs)("div",{className:"max-w-xl pb-6 relative",children:[(0,n.jsx)("label",{htmlFor:"content",children:"Content to describe perk*"}),(0,n.jsx)("textarea",b(b({id:"content",type:"text",rows:"5",className:"mt-2 border border-gray1 w-full flex-1 p-5 shadow-md focus:outline-none"},Z("content")),{},{disabled:I})),(null===(o=H.errors)||void 0===o?void 0:o.content)&&(0,n.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(s=H.errors.content)||void 0===s?void 0:s.message})]}),(0,n.jsxs)("div",{className:"max-w-200 flex justify-between items-end",children:[(0,n.jsxs)("div",{className:"max-w-xl flex-grow relative pb-6",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Call to action link*"}),(0,n.jsx)("input",b(b({id:"title",type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none"},Z("action_link")),{},{disabled:I})),(null===(v=H.errors)||void 0===v?void 0:v.action_link)&&(0,n.jsx)("p",{className:"absolute bottom-1 left-5 text-primary text-xs",children:null===(g=H.errors.action_link)||void 0===g?void 0:g.message})]}),(0,n.jsxs)("div",{className:"relative pb-2 mb-6",children:[(0,n.jsx)("label",{htmlFor:"perkImage",className:"".concat(I&&"opacity-40 cursor-not-allowed"," flex justify-center items-center cursor-pointer h-16 lg:h-11 text-lg text-white lg:w-48 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"),children:"Upload Image"}),(null===(y=B.image)||void 0===y?void 0:y.name)&&(0,n.jsxs)("div",{className:"flex items-center text-primary absolute -bottom-5 left-4 truncate w-60",children:[!I&&(0,n.jsx)("button",{className:"pr-1 w-5 focus:outline-none",onClick:function(){z("image",null,{shouldValidate:!0})},type:"button",children:(0,n.jsx)(p.Z,{className:"text-primary"})}),(0,n.jsx)("span",{className:"text-sm text-primary",children:null===(j=B.image)||void 0===j?void 0:j.name})]}),(null===(w=H.errors)||void 0===w?void 0:w.image)&&(0,n.jsx)("p",{className:"absolute -bottom-4 left-4 text-primary text-xs",children:null===(k=H.errors.image)||void 0===k?void 0:k.message})]}),(0,n.jsx)("input",{type:"file",id:"perkImage",onClick:function(e){e.target.value=null},onChange:function(e){if(e.target.files){var t=Array.from(e.target.files)[0],i=new FileReader;i.onloadend=function(){z("image",{url:i.result,file:t,name:t.name},{shouldValidate:!0})},i.readAsDataURL(t)}},hidden:!0,accept:"image/*",disabled:I}),(0,n.jsx)("input",b(b({value:null},Z("image")),{},{hidden:!0}))]}),(0,n.jsxs)("div",{className:"max-w-xl pb-4 flex gap-4",children:[(0,n.jsxs)("div",{className:"w-1/2",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Start Date"}),(0,n.jsx)(r.Qr,{name:"start_date",control:R,defaultValue:"",render:function(e){var t=e.field,i=t.value,o=t.onChange;return(0,n.jsx)(h.xZ,{value:i,className:"date-time-perks",onChange:o,placeholder:"Select...",disabled:I})}})]}),(0,n.jsxs)("div",{className:"w-1/2",children:[(0,n.jsx)("label",{htmlFor:"title",children:"End Date"}),(0,n.jsx)(r.Qr,{name:"end_date",control:R,defaultValue:"",render:function(e){var t=e.field,i=t.value,o=t.onChange;return(0,n.jsx)(h.xZ,{value:i,className:"date-time-perks",onChange:o,placeholder:"Select...",disabled:I})}})]})]}),(0,n.jsx)("p",{className:"py-4 max-w-200",children:"Should this notification be ON now. Please note if the start time and end time fields are complete, then notifications in ON status will only show visibly if they have passed the start time and not yet passed the end time above."}),(0,n.jsxs)("div",{className:"pb-4 flex items-center gap-4",children:[(0,n.jsx)("label",{htmlFor:"status",className:"".concat(B.setting?"opacity-30":""),children:"OFF"}),(0,n.jsx)(r.Qr,{name:"setting",control:R,defaultValue:!1,render:function(e){var t=e.field,i=t.value,o=t.onChange;return(0,n.jsx)(u.default,{id:"status",checked:i,onChange:o,checkedIcon:null,uncheckedIcon:null,offColor:"#bbb",onColor:"#ff474e",height:18,width:40,disabled:I})}}),(0,n.jsx)("label",{htmlFor:"status",className:"".concat(B.setting?"":"opacity-30"),children:"ON"})]})]}),(0,n.jsxs)("div",{className:"flex gap-4",children:[!N&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.zx,{primary:!0,type:"submit",disabled:D,isLoading:D,sizeSpinner:20,children:"Save"}),(0,n.jsx)(h.zx,{primaryOutline:!0,onClick:function(){return c.default.push("/admin/perks")},children:"Cancel"})]}),N&&I&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h.zx,{primary:!0,type:"button",onClick:function(){return A(!1)},children:"Edit"})}),N&&!I&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.zx,{primary:!0,disabled:D,isLoading:D,type:"submit",sizeSpinner:20,children:"Commit Edits"}),(0,n.jsx)(h.zx,{primaryOutline:!0,onClick:function(){return A(!0)},children:"Cancel"})]})]})]})}))},22163:function(e,t,i){"use strict";i.d(t,{o:function(){return r}});var n=i(85893),o=i(12245),r=function(e){var t,i,r=e.perk;return(0,n.jsxs)("div",{className:"flex py-6 gap-8",children:[(0,n.jsx)("div",{className:"w-full lg:w-1/4 h-48",children:null!==r&&void 0!==r&&null!==(t=r.image)&&void 0!==t&&t.url?(0,n.jsx)("img",{className:"object-cover w-full h-full bg-gray1",src:(null===r||void 0===r||null===(i=r.image)||void 0===i?void 0:i.url)||"",alt:""}):(0,n.jsx)("div",{className:"bg-gray1 w-full h-full"})}),(0,n.jsxs)("div",{className:"w-full lg:w-3/4",children:[(0,n.jsxs)("div",{className:"flex text-primary text-xs mb-6",children:[(0,n.jsx)("span",{className:"pr-1",children:"Time Remaining:"}),(0,n.jsx)(o.ZF,{endTime:new Date(null===r||void 0===r?void 0:r.end_date),hideProgressBar:!0})]}),(0,n.jsx)("h4",{className:"font-bold mb-4 line-clamp-2",children:null===r||void 0===r?void 0:r.title}),(0,n.jsx)("p",{children:null===r||void 0===r?void 0:r.content})]})]})}},24015:function(e,t,i){"use strict";i.d(t,{a:function(){return c}});var n=i(96156),o=i(85893),r=i(67294),s=i(11163),a=i(49226);var l=i(44791);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var c=function(e,t){return function(i){var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,i=(0,a.v9)((function(e){return e.authReducer.userInfo}));return(0,r.useEffect)((function(){if("public"!==t&&t&&i)if(i&&null!==i&&void 0!==i&&i.isLoggedIn)if("member"===i.role){if("auth"===t)return"verifying"===i.period&&s.default.push("/verify-email"),"onboarding"===i.period&&s.default.push("/onboard"),void("final"===i.period&&s.default.push("/dashboard"));if("verifying"===t)return"onboarding"===i.period&&s.default.push("/onboard"),void("final"===i.period&&s.default.push("/dashboard"));if("onboarding"===t)return"verifying"===i.period&&s.default.push("/verify-email"),void("final"===i.period&&s.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===i.period&&s.default.push("/verify-email"),void("onboarding"===i.period&&s.default.push("/onboard"));"final-admin"===t&&("verifying"===i.period&&s.default.push("/verify-email"),"onboarding"===i.period&&s.default.push("/onboard"),"final"===i.period&&s.default.push("/dashboard"))}else["admin","sub-admin"].includes(i.role)&&"final-all"!==t&&"final-admin"!==t&&s.default.push("/admin/dashboard");else"auth"!==t&&s.default.push("/login")}),[i,t]),{user:i}}({urlType:t}).user;if(t&&"public"!==t){if(!c)return(0,o.jsx)(l.Z,{});if("auth"===t&&c.isLoggedIn)return(0,o.jsx)(l.Z,{});if("auth"!==t&&!c.isLoggedIn)return(0,o.jsx)(l.Z,{});if("member"===c.role){if(["final-all","final-member"].includes(t)&&"final"!==c.period)return(0,o.jsx)(l.Z,{});if(["verifying"].includes(t)&&"verifying"!==c.period)return(0,o.jsx)(l.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==c.period)return(0,o.jsx)(l.Z,{})}if(["admin","sub-admin"].includes(c.role)&&["verifying","onboarding","final-member"].includes(t))return(0,o.jsx)(l.Z,{})}return(0,o.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},i))}}},83231:function(e,t,i){var n=i(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(e){if(7===e.length)return e;for(var t="#",i=1;i<4;i+=1)t+=e[i]+e[i];return t}function l(e,t,i,n,o){return function(e,t,i,n,o){var r=(e-i)/(t-i);if(0===r)return n;if(1===r)return o;for(var s="#",a=1;a<6;a+=2){var l=parseInt(n.substr(a,2),16),d=parseInt(o.substr(a,2),16),c=Math.round((1-r)*l+r*d).toString(16);1===c.length&&(c="0"+c),s+=c}return s}(e,t,i,a(n),a(o))}var d=function(e){function t(t){e.call(this,t);var i=t.height,n=t.width,o=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,i=t.R,n=t.h,o=(this.props.checked?this.i:this.o)+e-i;t.N||e===i||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,o));r!==n&&this.setState({h:r})},t.prototype.U=function(e){var t=this.state,i=t.h,n=t.N,o=t.B,r=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!n||a<250||r&&i<=s||!r&&i>=s)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,i=e.disabled,r=e.className,s=e.offColor,a=e.onColor,d=e.offHandleColor,c=e.onHandleColor,u=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,m=e.boxShadow,v=e.activeBoxShadow,b=e.height,x=e.width,g=e.borderRadius,y=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(i[n]=e[n]);return i}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),j=this.state,w=j.h,k=j.N,N=j.j,O={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:b,width:x,margin:Math.max(0,(this.t-b)/2),position:"relative",background:l(w,this.i,this.o,s,a),borderRadius:"number"==typeof g?g:b/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},S={height:b,width:Math.min(1.5*b,x-(this.t+b)/2+1),position:"relative",opacity:(w-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},E={height:b,width:Math.min(1.5*b,x-(this.t+b)/2+1),position:"absolute",opacity:1-(w-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:l(w,this.i,this.o,d,c),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+w+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:N?v:m,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},T={height:this.t,width:this.t,opacity:Math.max(2*((w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:r,style:O},n.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(e){return e.preventDefault()}},u&&n.createElement("div",{style:S},u),h&&n.createElement("div",{style:E},h)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(e){return e.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},f&&n.createElement("div",{style:M},f),p&&n.createElement("div",{style:T},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},y,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(n.Component);d.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=d},59936:function(e,t,i){e.exports=i(83231)}}]);
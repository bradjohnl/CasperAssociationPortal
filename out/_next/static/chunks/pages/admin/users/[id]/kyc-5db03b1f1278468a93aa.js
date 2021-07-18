(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7962],{4478:function(e,n,a){"use strict";a.d(n,{T:function(){return u},R:function(){return l}});var o=a(6156),t=a(5893),c=a(7294),r=a(3935);function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){(0,o.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var s=c.createContext({setDialog:function(e){return e}}),l=function(){var e=c.useContext(s);if(!e)throw new Error("useDialog must be used within a DialogProvider");return e},m=function(e){var n,a=e.dialog,i=e.onClosed,d=a.settings?a.settings:{},s=(0,c.useState)(a.defaultValue||""),l=s[0],m=s[1],u=function(e){i(),a.afterClosed&&("DialogPrompt"===a.type?e&&a.afterClosed(l):a.afterClosed(e))};return(0,r.createPortal)((0,t.jsxs)("div",{className:"w-screen h-screen justify-center items-center flex fixed inset-0",children:[(0,t.jsx)("div",{onClick:function(){return u(!1)},className:"backdrop-filter backdrop-blur-sm fixed inset-0 z-40"}),(0,t.jsxs)("div",{className:"".concat(d.className||""," w-full max-w-2xl shadow-2xl mx-4 relative bg-white z-50"),style:d.style,children:["Dialog"===a.type&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-4xl text-center pt-4",children:a.data.title}),(0,t.jsx)("a",{onClick:function(){return u(!1)},children:(0,t.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-4 top-4",alt:"Cancel"})}),(0,t.jsx)("div",{className:"h-full w-full pt-16 pb-36 flex flex-col items-center justify-between border-gray",children:(0,t.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:a.data.content})})]}),!d.hideButton&&(0,t.jsx)("button",{type:"button",className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-lg text-white w-1/2 lg:w-1/2 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return u(!1)},children:"OK"})]}),"DialogConfirm"===a.type&&(0,t.jsxs)("div",{className:"p-16",children:[a.data.title&&(0,t.jsx)("h3",{className:"text-4xl text-center mb-6",children:a.data.title}),(0,t.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,t.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:a.data.content})}),(0,t.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,t.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return u(!1)},children:a.data.cancel}),(0,t.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return u(!0)},children:a.data.ok})]})]}),"DialogPrompt"===a.type&&(0,t.jsxs)("div",{className:"border border-gray",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-2xl text-center m-20",children:a.data.title}),(0,t.jsx)("div",{className:"mx-20",children:(0,t.jsx)("input",{type:"text",className:"w-full h-16 text-xl px-4 shadow-md focus:outline-none",placeholder:"Email",value:l,onChange:function(e){m(e.target.value)},name:"email"})})]}),(0,t.jsxs)("div",{className:"flex flex-row justify-center m-20",children:[(0,t.jsx)("button",(n={type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"},(0,o.Z)(n,"className","mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"),(0,o.Z)(n,"onClick",(function(){return u(!0)})),(0,o.Z)(n,"children",a.data.ok),n)),(0,t.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return u(!1)},children:a.data.cancel})]})]}),"DialogCustom"===a.type&&(0,t.jsx)("div",{className:"rounded-xl",children:a.data.content})]})]}),document.body)},u=function(e){var n=(0,c.useState)(null),a=n[0],o=n[1],r=(0,c.useCallback)((function(){o(null)}),[o]);return(0,t.jsxs)(s.Provider,d(d({value:{dialog:a,onClosed:r,setDialog:o}},e),{},{children:[e.children,a&&(0,t.jsx)(m,{dialog:a,onClosed:r})]}))}},3399:function(e,n,a){"use strict";a.r(n);var o=a(5893),t=a(1163),c=a(9226),r=a(7294),i=a(5955),d=a(8569),s=a(7028),l=a(3732),m=a(4478);n.default=function(){var e,n,a,u,f,x,p,h,y=(0,t.useRouter)(),N=y.query.id,v=(0,c.I0)(),b=(0,c.v9)((function(e){return e.userKYCInfoReducer.data}));(0,r.useEffect)((function(){N&&v((0,s.C4)(N))}),[N]);var j=(0,m.R)().setDialog;return(0,o.jsx)(i.Z,{children:(0,o.jsx)(d.Zb,{className:"h-full px-24 py-14",children:(0,o.jsxs)("div",{className:"bg-transparent h-full",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,o.jsxs)("button",{type:"button",className:"flex items-center w-max focus:outline-none mb-5",onClick:function(){return y.push("/admin/users/".concat(N))},children:[(0,o.jsx)("img",{src:"/images/ic_prev_circle.svg",alt:"prev",width:"18",height:"18",className:"mr-2"}),(0,o.jsx)("span",{className:"text-primary text-sm",children:"Back"})]}),(0,o.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:"Node Operator KYC/AML Details"}),(0,o.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"Submitted by membership applicant review"})]}),(0,o.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,o.jsx)("button",{type:"button",onClick:function(){return e=N,void j({type:"DialogConfirm",data:{title:"",content:"Are you sure you want to approve this user",ok:"Yes, Please continue",cancel:"Cancel"},afterClosed:function(n){n&&v((0,s.Xp)(e))}});var e},className:"text-lg text-white px-9 h-11 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Manually Approve"}),(0,o.jsx)("button",{type:"button",onClick:function(){return e=N,void j({type:"DialogConfirm",data:{title:"",content:"Are you sure you want to deny this user",ok:"Yes, Please continue",cancel:"Cancel"},afterClosed:function(n){n&&v((0,s.ed)(e))}});var e},className:"text-lg text-white px-9 h-11 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Manually Deny"}),(0,o.jsx)("button",{type:"button",className:"text-lg text-white px-9 h-11 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Reset"})]})]}),(0,o.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,o.jsxs)("div",{className:"flex flex-col mt-6 h-5/6 overflow-y-scroll",children:[(0,o.jsxs)("div",{className:"flex flex-col py-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"Information Submitted to API"}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Fist Name:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(e=b.profile)||void 0===e?void 0:e.first_name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Last Name:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(n=b.profile)||void 0===n?void 0:n.last_name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"DOB:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(a=b.profile)||void 0===a?void 0:a.dob})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Country of Citizenship:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===(u=l.find((function(e){var n;return e.code===(null===b||void 0===b||null===(n=b.profile)||void 0===n?void 0:n.country_citizenship)})))||void 0===u?void 0:u.name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Street Address:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(f=b.profile)||void 0===f?void 0:f.address})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"City:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(x=b.profile)||void 0===x?void 0:x.city})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Postal Code:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===b||void 0===b||null===(p=b.profile)||void 0===p?void 0:p.zip})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Country of Residence:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===(h=l.find((function(e){var n;return e.code===(null===b||void 0===b||null===(n=b.profile)||void 0===n?void 0:n.country_residence)})))||void 0===h?void 0:h.name})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"AML API"}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 8:51PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"ID Document API"}),(0,o.jsxs)("div",{className:"flex flex-col pb-5",children:[(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 8:55PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"Address Document API"}),(0,o.jsxs)("div",{className:"flex flex-col pb-5",children:[(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 9:01PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]})]})]})]})})})}},7028:function(e,n,a){"use strict";a.d(n,{lL:function(){return o},yW:function(){return t},nE:function(){return c},FH:function(){return r},C4:function(){return i},iA:function(){return d},Xp:function(){return s},ed:function(){return l},c8:function(){return m},fX:function(){return u},Od:function(){return f},fI:function(){return x},yG:function(){return p},Lx:function(){return h},TT:function(){return y},I2:function(){return N},MC:function(){return v},CQ:function(){return b},ie:function(){return j},Hi:function(){return w},zb:function(){return E},QT:function(){return S},cX:function(){return C},b$:function(){return A},y3:function(){return T},Nk:function(){return g},Xs:function(){return I},O2:function(){return M},J5:function(){return R},og:function(){return _},Xj:function(){return L},lf:function(){return P},D:function(){return G},Vk:function(){return D}});var o=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},t=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},c=function(e){return{type:"GET_USER_DETAIL",payload:e}},r=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},i=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},d=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},s=function(e){return{type:"APPROVE_KYC",payload:e}},l=function(e){return{type:"DENY_KYC",payload:e}},m=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},u=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},f=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},x=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},p=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},h=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},y=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},N=function(e,n,a){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:a}},v=function(e,n,a){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:a}},b=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},j=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},w=function(e,n,a){return{type:"APPROVE_USER",payload:e,resolve:n,reject:a}},E=function(e,n,a){return{type:"RESET_USER",payload:e,resolve:n,reject:a}},S=function(e,n,a){return{type:"BAN_USER",payload:e,resolve:n,reject:a}},C=function(e,n,a){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:a}},A=function(e,n,a){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:a}},T=function(e,n){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n}},g=function(e,n,a){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:a}},I=function(e,n,a){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:a}},M=function(e,n,a){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:a}},R=function(e,n,a){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:a}},_=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},L=function(e,n,a){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:a}},P=function(e,n,a){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:a}},G=function(e,n,a){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:a}},D=function(e,n,a){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:a}}},5971:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/[id]/kyc",function(){return a(3399)}])},3732:function(e){"use strict";e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"\xc5land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,1878,5955],(function(){return n=5971,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
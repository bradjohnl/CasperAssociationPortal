(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7962],{24015:function(e,a,n){"use strict";n.d(a,{a:function(){return l}});var o=n(96156),d=n(85893),i=n(67294),c=n(11163),s=n(49226);var m=n(44791);function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}var l=function(e,a){return function(n){var l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,a=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==a&&a&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===a)return"verifying"===n.period&&c.default.push("/verify-email"),"onboarding"===n.period&&c.default.push("/onboard"),void("final"===n.period&&c.default.push("/dashboard"));if("verifying"===a)return"onboarding"===n.period&&c.default.push("/onboard"),void("final"===n.period&&c.default.push("/dashboard"));if("onboarding"===a)return"verifying"===n.period&&c.default.push("/verify-email"),void("final"===n.period&&c.default.push("/dashboard"));if("final-member"===a||"final-all"===a)return"verifying"===n.period&&c.default.push("/verify-email"),void("onboarding"===n.period&&c.default.push("/onboard"));"final-admin"===a&&("verifying"===n.period&&c.default.push("/verify-email"),"onboarding"===n.period&&c.default.push("/onboard"),"final"===n.period&&c.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==a&&"final-admin"!==a&&c.default.push("/admin/dashboard");else"auth"!==a&&c.default.push("/login")}),[n,a]),{user:n}}({urlType:a}).user;if(a&&"public"!==a){if(!l)return(0,d.jsx)(m.Z,{});if("auth"===a&&l.isLoggedIn)return(0,d.jsx)(m.Z,{});if("auth"!==a&&!l.isLoggedIn)return(0,d.jsx)(m.Z,{});if("member"===l.role){if(["final-all","final-member"].includes(a)&&"final"!==l.period)return(0,d.jsx)(m.Z,{});if(["verifying"].includes(a)&&"verifying"!==l.period)return(0,d.jsx)(m.Z,{});if(["onboarding"].includes(a)&&"onboarding"!==l.period)return(0,d.jsx)(m.Z,{})}if(["admin","sub-admin"].includes(l.role)&&["verifying","onboarding","final-member"].includes(a))return(0,d.jsx)(m.Z,{})}return(0,d.jsx)(e,function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){(0,o.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({},n))}}},73399:function(e,a,n){"use strict";n.r(a);var o=n(85893),d=n(11163),i=n(49226),c=n(67294),s=n(37124),m=n(12245),r=n(87028),l=n(43732),t=n(97705),u=n(24015);a.default=(0,u.a)((function(){var e,a,n,u,f,x,p,h,N=(0,d.useRouter)().query.id,b=(0,i.I0)(),v=(0,c.useContext)(t.AppContext).setLoading,j=(0,c.useState)(),y=j[0],g=j[1];return(0,c.useEffect)((function(){v(!0),b((0,r.y3)({id:N},(function(e){v(!1),g(e)}),(function(){v(!1)})))}),[]),(0,o.jsx)(s.Z,{children:(0,o.jsx)(m.Zb,{className:"h-full px-card py-5",children:(0,o.jsxs)("div",{className:"flex flex-col bg-transparent h-full",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)("div",{className:"flex flex-col justify-center border-primary border-b-2",children:(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)(m.xE,{href:"/admin/users/".concat(N),text:"Back",force:!0}),(0,o.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-1",children:"Node Operator KYC/AML Details"}),(0,o.jsx)("p",{className:"text-sm text-gray pb-3",children:"Submitted by membership applicant review"})]})})}),(0,o.jsxs)("div",{className:"flex-1 min-h-0 flex flex-col pt-8 overflow-y-scroll padding-tracker",children:[(0,o.jsxs)("div",{className:"flex flex-col pb-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"Information Submitted to API"}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Fist Name:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(e=y.profile)||void 0===e?void 0:e.first_name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Last Name:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(a=y.profile)||void 0===a?void 0:a.last_name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"DOB:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(n=y.profile)||void 0===n?void 0:n.dob})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Country of Citizenship:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===(u=l.find((function(e){var a;return e.code===(null===y||void 0===y||null===(a=y.profile)||void 0===a?void 0:a.country_citizenship)})))||void 0===u?void 0:u.name})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Street Address:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(f=y.profile)||void 0===f?void 0:f.address})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"City:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(x=y.profile)||void 0===x?void 0:x.city})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Postal Code:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===y||void 0===y||null===(p=y.profile)||void 0===p?void 0:p.zip})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Country of Residence:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:null===(h=l.find((function(e){var a;return e.code===(null===y||void 0===y||null===(a=y.profile)||void 0===a?void 0:a.country_residence)})))||void 0===h?void 0:h.name})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"AML API"}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 8:51PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7 border-b border-gray",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"ID Document API"}),(0,o.jsxs)("div",{className:"flex flex-col pb-5",children:[(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 8:55PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]})]}),(0,o.jsxs)("div",{className:"flex flex-col py-7",children:[(0,o.jsx)("p",{className:"text-base font-medium pb-5",children:"Address Document API"}),(0,o.jsxs)("div",{className:"flex flex-col pb-5",children:[(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Timestamp of Last Run:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"23/07/2021 - 9:01PM"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"API Response:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{response}"})]}),(0,o.jsxs)("div",{className:"flex flex-row py-1",children:[(0,o.jsx)("p",{className:"text-sm font-medium w-1/6",children:"Additional Notes:"}),(0,o.jsx)("p",{className:"text-sm w-5/6",children:"{notes}"})]})]})]})]})]})})})}),"final-admin")},65971:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/[id]/kyc",function(){return n(73399)}])},43732:function(e){"use strict";e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"\xc5land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,9669,3913,1045,804,8216],(function(){return a=65971,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
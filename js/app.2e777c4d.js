(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2922e67a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;a=function(e){o.onerror=o.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/frontend_exam/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1af8":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navigation"),n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[t._v("Currency Converter")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/weather-bulletin"}},[t._v("Weather Bulletin")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/battle-of-numbers"}},[t._v("Battle of Numbers")])],1)},c=[],o=(n("e0e5"),n("2877")),l={},u=Object(o["a"])(l,i,c,!1,null,"92dc5378",null),d=u.exports,m={name:"App",components:{Navigation:d}},v=m,f=n("6544"),h=n.n(f),b=n("7496"),p=n("a523"),j=Object(o["a"])(v,s,a,!1,null,null,null),_=j.exports;h()(j,{VApp:b["a"],VContainer:p["a"]});var y=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-center"},[t._v("Currency Converter")]),n("v-form",{ref:"currencyForm"},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{type:"number",outlined:"",label:"Amount",rules:t.amountRules},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),n("v-col",{attrs:{cols:"5"}},[n("v-select",{attrs:{outlined:"",label:"Current Currency",items:t.currencyItems,rules:t.currentRules},model:{value:t.currentCurrency,callback:function(e){t.currentCurrency=e},expression:"currentCurrency"}})],1),n("v-col",{attrs:{cols:"5"}},[n("v-select",{attrs:{outlined:"",label:"Convert to",items:t.currencyItems,multiple:"",rules:t.convertRules},model:{value:t.convertCurrency,callback:function(e){t.convertCurrency=e},expression:"convertCurrency"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{tile:"",color:"#b5a5a5"},on:{click:t.convert}},[t._v("Convert")])],1)],1),n("v-row",t._l(t.dataItem,(function(e,r){return n("v-col",{key:r,attrs:{cols:"6"}},[n("v-card",[n("v-card-text",{staticClass:"text-center title"},[t._v("\n          "+t._s(e.amount+" "+e.from)+" = "+t._s(e.computedAmount+" "+e.curr)+"\n        ")])],1)],1)})),1)],1)},k=[],x=(n("ac6a"),n("bc3a")),C=n.n(x),w={data:function(){return{amount:null,convertedAmount:null,currentCurrency:null,convertCurrency:[],currencyItems:[],dataItem:[],amountRules:[function(t){return!!t||"This field is required"}],currentRules:[function(t){return!!t||"This field is required"}],convertRules:[function(t){return t.length>0||"This field is required"},function(t){return t.length<=5||"Maximum of 5 selected items only"}]}},created:function(){var t=this,e={method:"GET",url:"https://currency-exchange.p.rapidapi.com/listquotes",headers:{"x-rapidapi-host":"currency-exchange.p.rapidapi.com","x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"}};C()(e).then((function(e){return t.currencyItems=e.data})).catch((function(t){return console.log(t)}))},methods:{convert:function(){var t=this;this.$refs.currencyForm.validate()&&(this.dataItem=[],this.convertCurrency.forEach((function(e){var n={method:"GET",url:"https://currency-exchange.p.rapidapi.com/exchange",params:{from:t.currentCurrency,to:e},headers:{"x-rapidapi-host":"currency-exchange.p.rapidapi.com","x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"}};C()(n).then((function(n){t.dataItem.push({computedAmount:t.amount*n.data,curr:e,from:t.currentCurrency,amount:t.amount})})).catch((function(t){return console.log(t)}))})),console.log(this.dataItem))}}},V=w,T=n("8336"),M=n("b0af"),z=n("99d9"),W=n("62ad"),R=n("4bd4"),O=n("0fd9"),D=n("b974"),E=n("8654"),S=Object(o["a"])(V,g,k,!1,null,"1d83b67c",null),Y=S.exports;h()(S,{VBtn:T["a"],VCard:M["a"],VCardText:z["a"],VCol:W["a"],VContainer:p["a"],VForm:R["a"],VRow:O["a"],VSelect:D["a"],VTextField:E["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-center"},[t._v("Weather Bulletin")]),n("v-form",{ref:"weatherForm"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"City",outlined:"",error:!t.isValid,"error-messages":t.isValid?"":"City not found",rules:t.cityRules},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{attrs:{tile:"",color:"#b5a5a5"},on:{click:t.getWeather}},[t._v("Submit")])],1)],1),t.show?n("div",[n("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-card",[n("v-card-title",[n("h4",[t._v("Current Weather")])]),n("v-divider"),n("v-card-title",[t._v(t._s(t.location)+", Philippines")]),n("v-card-text",[t._v(t._s(t.currentWeather.date_text))]),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("Temperature:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.temp.max))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Min-Temperature:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.temp.min))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Max-Temperature:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.temp.max))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Humidity:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.humidity))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Wind Speed:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.speed))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Description:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.weather[0].description))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Sunrise:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.sunrise))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Sunset:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.sunset))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Cloud Covered:")]),n("v-list-item-content",[t._v(t._s(t.currentWeather.clouds)+"%")])],1)],1)],1)],1)],1),n("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center"}},t._l(t.forecastWeather,(function(e,r){return n("v-col",{key:r,attrs:{cols:"4"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.location)+", Philippines")]),n("v-card-text",[t._v(t._s(e.date_text))]),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("Temperature:")]),n("v-list-item-content",[t._v(t._s(e.temp.max))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Min-Temperature:")]),n("v-list-item-content",[t._v(t._s(e.temp.min))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Max-Temperature:")]),n("v-list-item-content",[t._v(t._s(e.temp.max))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Humidity:")]),n("v-list-item-content",[t._v(t._s(e.humidity))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Wind Speed:")]),n("v-list-item-content",[t._v(t._s(e.speed))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Description:")]),n("v-list-item-content",[t._v(t._s(e.weather[0].description))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Cloud Covered:")]),n("v-list-item-content",[t._v(t._s(e.clouds)+"%")])],1)],1)],1)],1)})),1)],1):t._e()],1)},I=[],F=(n("7f7f"),n("c1df")),P=n.n(F),q={data:function(){return{city:"",isValid:!0,show:!1,currentWeather:[],forecastWeather:[],location:null,cityRules:[function(t){return!!t||"This field is required"}]}},computed:{},methods:{getWeather:function(){var t=this;if(this.$refs.weatherForm.validate()){this.isValid=!0;var e={method:"GET",url:"https://community-open-weather-map.p.rapidapi.com/forecast/daily",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"},params:{q:"".concat(this.city,",ph"),units:"metric",cnt:4}};C()(e).then((function(e){t.show=!0;var n=e.data,r=n.list.map((function(t){return t.date_text=P.a.unix(t.dt).format("ddd, MMMM DD, YYYY @ h:mm a"),t.sunrise=P.a.unix(t.sunrise).format("h:mm a"),t.sunset=P.a.unix(t.sunset).format("h:mm a"),t}));t.location=n.city.name,t.forecastWeather=r.slice(1),t.currentWeather=r.shift()})).catch((function(e){t.show=!1,t.isValid=!1}))}},getCurrentWeather:function(t){return t.map((function(t){return t.date_text=P.a.unix(t.dt).format("ddd, MMMM DD YYYY, h:mm: a"),t})).filter((function(t){var e=P()(t.dt_txt).format("YYYY-MM-DD"),n=P()().format("YYYY-MM-DD");if(P()(e).isSame(n))return!0})).shift()}}},$=q,L=n("ce7e"),N=n("8860"),A=n("da13"),X=n("5d23"),G=Object(o["a"])($,B,I,!1,null,"6934a602",null),Q=G.exports;h()(G,{VBtn:T["a"],VCard:M["a"],VCardText:z["a"],VCardTitle:z["b"],VCol:W["a"],VContainer:p["a"],VDivider:L["a"],VForm:R["a"],VList:N["a"],VListItem:A["a"],VListItemContent:X["a"],VRow:O["a"],VTextField:E["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-center"},[t._v("Battle of Numbers")]),n("v-form",{ref:"form"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"}],attrs:{label:"Number of contestant",outlined:""},model:{value:t.numContestant,callback:function(e){t.numContestant=t._n(e)},expression:"numContestant"}})],1)],1),t.hidden?n("div",[t._l(t.numContestant,(function(e,r){return n("v-row",{key:r,attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Contestant #"+(r+1),outlined:"",type:"number",rules:t.contestantRules},model:{value:t.nums[r],callback:function(e){t.$set(t.nums,r,t._n(e))},expression:"nums[index]"}})],1)],1)})),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{attrs:{tile:"",color:"#b5a5a5"},on:{click:t.simulate}},[t._v("Submit")])],1)],2):t._e(),t.logs.length?n("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center"}},t._l(t.logs,(function(e,r){return n("v-col",{key:r,attrs:{cols:"4"}},[n("v-card",[n("v-card-title",[n("h4",[t._v(t._s(e.bracket))])]),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(e.lists,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-content",[t._v("Round "+t._s(e.round)+":")]),n("v-list-item-content",[t._v(t._s(e.desc))]),n("v-list-item-content",[t._v("Winner: "+t._s(e.winner))])],1)})),1)],1)],1)})),1):t._e(),t.logs.length?n("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-title",[n("h4",[t._v("Summary")])]),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("Winner")]),n("v-list-item-content",[t._v(t._s(t.winner))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Total Bracket")]),n("v-list-item-content",[t._v(t._s(t.total_bracket))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Total Round")]),n("v-list-item-content",[t._v(t._s(t.total_rounds))])],1)],1)],1)],1)],1):t._e()],1)],1)},J=[],U=n("3a60"),K={directives:{mask:U["mask"]},data:function(){return{mask:"#######",nums:[],numContestant:null,logs:[],contestantRules:[function(t){return!!t||"This field is required"}],winner:null,total_rounds:null,total_bracket:null}},computed:{hidden:function(){return!!this.numContestant}},methods:{simulate:function(){if(this.$refs.form.validate()){var t=this.nums,e=1,n=1,r=[];while(t.length>1){var s=[];console.log("Bracket #".concat(e));var a=0;while(a<t.length){var i=Math.max(t[a],t[t.length-1]);s.push({round:n,desc:"".concat(t[a]," vs ").concat(t[t.length-1]),winner:i}),t.splice(a,1,i),a!=t.length-1&&t.splice(-1,1),this.total_rounds=n,a++,n++}r.push({bracket:"Bracket #".concat(e),lists:s}),this.winner=t[0],this.total_bracket=e,e++}this.nums=[],this.numContestant=null,this.logs=r}}}},Z=K,tt=Object(o["a"])(Z,H,J,!1,null,null,null),et=tt.exports;h()(tt,{VBtn:T["a"],VCard:M["a"],VCardTitle:z["b"],VCol:W["a"],VDivider:L["a"],VForm:R["a"],VList:N["a"],VListItem:A["a"],VListItemContent:X["a"],VRow:O["a"],VTextField:E["a"]}),r["a"].use(y["a"]);var nt=new y["a"]({routes:[{path:"/",component:Y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/weather-bulletin",component:Q},{path:"/battle-of-numbers",component:et}]}),rt=n("f309");r["a"].use(rt["a"]);var st=new rt["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:nt,vuetify:st,render:function(t){return t(_)}}).$mount("#app")},e0e5:function(t,e,n){"use strict";var r=n("1af8"),s=n.n(r);s.a}});
//# sourceMappingURL=app.2e777c4d.js.map
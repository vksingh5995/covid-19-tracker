(function(e){function t(t){for(var a,c,o=t[0],b=t[1],l=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);j&&j(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var b=n[o];0!==r[b]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/covid-19-tracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],b=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var j=b;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"container px-auto"};function s(e,t,n,s,c,o){var b=Object(a["v"])("Header"),l=Object(a["v"])("router-view"),j=Object(a["v"])("Footer");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(b),Object(a["f"])("div",r,[Object(a["h"])(l)]),Object(a["h"])(j)],64)}var c={class:"\n      text-center\n      bg-gradient-to-r\n      from-green-500\n      to-blue-400\n      text-white\n      p-4\n      mb-10\n    "},o=Object(a["f"])("div",{class:"text-3xl md:text-5xl font-bold mb-3"},[Object(a["f"])("i",{class:"fa fa-viruses"}),Object(a["g"])("Covid-19 Tracker ")],-1),b=Object(a["f"])("p",null,[Object(a["g"])(" API by "),Object(a["f"])("a",{class:"text-black",href:"https://covid19api.com",target:"_blank"},"covid19api.com")],-1),l=[o,b];function j(e,t,n,r,s,o){return Object(a["q"])(),Object(a["e"])("header",c,l)}var d={name:"Header"};d.render=j;var f=d,i={class:"\r\n      text-center\r\n      bg-gradient-to-r\r\n      from-blue-500\r\n      to-green-400\r\n      text-white\r\n      p-4\r\n    "},u=Object(a["f"])("div",null,[Object(a["f"])("span",null,[Object(a["g"])(" Copyright © - 2021 | Developed by "),Object(a["f"])("a",{class:"text-black",href:"https://vivek.webtouchsolution.com",target:"_blank"},"Vivek")])],-1),m=[u];function h(e,t,n,r,s,c){return Object(a["q"])(),Object(a["e"])("footer",i,m)}var p={name:"Footer"};p.render=h;var O=p,v={components:{Header:f,Footer:O}};v.render=s;var g=v,x=n("6c02"),y={key:0},k={key:1,class:"flex flex-col align-center justify-center text-center"},w=Object(a["f"])("div",{class:"text-gery-500 text-3xl mt-10 mb-6"},"Fetching Data",-1),C=["src"];function D(e,t,n,r,s,c){var o=Object(a["v"])("DataTitle"),b=Object(a["v"])("DataBoxes"),l=Object(a["v"])("CountrySelect");return s.loading?(Object(a["q"])(),Object(a["e"])("main",k,[w,Object(a["f"])("img",{src:s.loadingImage,class:"w-24 m-auto",alt:""},null,8,C)])):(Object(a["q"])(),Object(a["e"])("main",y,[Object(a["h"])(o,{text:s.title,dataDate:s.dataDate},null,8,["text","dataDate"]),Object(a["h"])(b,{stats:s.stats},null,8,["stats"]),Object(a["h"])(l,{onGetCountry:c.getCountryData,countries:s.countries},null,8,["onGetCountry","countries"]),s.stats.Country?(Object(a["q"])(),Object(a["e"])("button",{key:0,onClick:t[0]||(t[0]=function(){return c.clearCountryData&&c.clearCountryData.apply(c,arguments)}),class:"\n        bg-gradient-to-r\n        from-green-400\n        to-blue-500\n        hover:from-pink-500\n        hover:to-yellow-500\n        text-white\n        rounded\n        p-3\n        mb-10\n        focus:outline-none\n      "}," Clear Country ")):Object(a["d"])("",!0)]))}var z=n("1da1"),q=(n("96cf"),n("d3b7"),{class:"text-center"}),T=Object(a["f"])("h2",{class:"text-4xl font-bold mb-10"},"Covid-19 Statistics",-1),S={class:"text-3xl font-bold"},_={class:"text-2xl mt-10 mb-10"};function M(e,t,n,r,s,c){return Object(a["q"])(),Object(a["e"])("div",q,[T,Object(a["f"])("h2",S,Object(a["x"])(n.text),1),Object(a["f"])("div",_,Object(a["x"])(c.timestamp),1)])}var R=n("c1df"),N=n.n(R),P={name:"DataTitle",props:["text","dataDate"],computed:{timestamp:function(){return N()(this.dataDate).format("MMMM Do YYYY, h:mm:ss a")}}};P.render=M;var W=P,G={class:"grid md:grid-cols-3 gap-4"},B={class:"\r\n        shadow-md\r\n        bg-gradient-to-r\r\n        from-pink-200\r\n        to-yellow-300\r\n        p-10\r\n        text-center\r\n        rounded\r\n      "},F=Object(a["f"])("h3",{class:"text-3xl text-black font-bold mb-4"},"Cases",-1),H={class:"text-2xl mb-4"},I=Object(a["f"])("span",{class:"font-bold"},"New:",-1),Y={class:"text-2xl mb-4"},U=Object(a["f"])("span",{class:"font-bold"},"Total:",-1),E={class:"\r\n        shadow-md\r\n        bg-gradient-to-r\r\n        from-pink-300\r\n        to-yellow-400\r\n        p-10\r\n        text-center\r\n        rounded\r\n      "},J=Object(a["f"])("h3",{class:"text-3xl text-black font-bold mb-4"},"Deaths",-1),V={class:"text-2xl mb-4"},A=Object(a["f"])("span",{class:"font-bold"},"New:",-1),L={class:"text-2xl mb-4"},$=Object(a["f"])("span",{class:"font-bold"},"Total:",-1),K={class:"\r\n        shadow-md\r\n        bg-gradient-to-r\r\n        from-pink-400\r\n        to-yellow-500\r\n        p-10\r\n        text-center\r\n        rounded\r\n      "},Q=Object(a["f"])("h3",{class:"text-3xl text-black font-bold mb-4"},"Recovered",-1),X={class:"text-2xl mb-4"},Z=Object(a["f"])("span",{class:"font-bold"},"New:",-1),ee={class:"text-2xl mb-4"},te=Object(a["f"])("span",{class:"font-bold"},"Total:",-1);function ne(e,t,n,r,s,c){return Object(a["q"])(),Object(a["e"])("div",G,[Object(a["f"])("div",B,[F,Object(a["f"])("div",H,[I,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.NewConfirmed)),1)]),Object(a["f"])("div",Y,[U,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.TotalConfirmed)),1)])]),Object(a["f"])("div",E,[J,Object(a["f"])("div",V,[A,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.NewDeaths)),1)]),Object(a["f"])("div",L,[$,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.TotalDeaths)),1)])]),Object(a["f"])("div",K,[Q,Object(a["f"])("div",X,[Z,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.NewRecovered)),1)]),Object(a["f"])("div",ee,[te,Object(a["g"])(" "+Object(a["x"])(c.numberWithCommas(n.stats.TotalRecovered)),1)])])])}n("ac1f"),n("5319"),n("25f0");var ae={name:"DataBoxes",props:["stats"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}};ae.render=ne;var re=ae,se=Object(a["f"])("option",{value:"0"},"Select Country",-1),ce=["value"];function oe(e,t,n,r,s,c){return Object(a["B"])((Object(a["q"])(),Object(a["e"])("select",{onChange:t[0]||(t[0]=function(e){return c.onChange()}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.selected=e}),class:"\r\n      form-select\r\n      mt-10\r\n      mb-10\r\n      block\r\n      w-full\r\n      border\r\n      p-3\r\n      rounded\r\n      bg-gradient-to-r\r\n      from-yellow-300\r\n      to-pink-400\r\n    "},[se,(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(n.countries,(function(e){return Object(a["q"])(),Object(a["e"])("option",{value:e.ID},Object(a["x"])(e.Country),9,ce)})),256))],544)),[[a["z"],s.selected]])}n("7db0");var be={name:"CountrySelect",props:["countries"],data:function(){return{selected:0}},methods:{onChange:function(){var e=this,t=this.countries.find((function(t){return t.ID===e.selected}));this.$emit("get-country",t)}}};be.render=oe;var le=be,je={name:"Home",components:{DataTitle:W,DataBoxes:re,CountrySelect:le},data:function(){return{loading:!0,title:"Global",dataDate:"",stats:{},countries:[],loadingImage:n("e8dd")}},methods:{fetchCovidData:function(){return Object(z["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},getCountryData:function(e){this.stats=e,this.title=e.Country},clearCountryData:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchCovidData();case 3:n=t.sent,e.title="Global",e.stats=n.Global,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCovidData();case 2:n=t.sent,e.dataDate=n.Date,e.stats=n.Global,e.countries=n.Countries,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}};je.render=D;var de=je,fe=[{path:"/",name:"Home",component:de}],ie=Object(x["a"])({history:Object(x["b"])("/covid-19-tracker/"),routes:fe}),ue=ie;n("ba8c");Object(a["c"])(g).use(ue).mount("#app")},ba8c:function(e,t,n){},e8dd:function(e,t,n){e.exports=n.p+"img/hourglass.a79f1aae.gif"}});
//# sourceMappingURL=app.3697c45f.js.map
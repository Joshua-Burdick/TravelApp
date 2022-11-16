(function(){"use strict";var e={8456:function(e,t,r){var n=r(144),a=r(3726),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t(a.Z,[t("router-view")],1)],1)},o=[],i=r(1001),l={},u=(0,i.Z)(l,s,o,!1,null,null,null),c=u.exports,d=r(154);n.ZP.use(d.Z);var p=new d.Z({}),m=r(8345),h=r(1095),g=r(9088),v=r(3298),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home center"},[e.$vuetify.breakpoint.mdAndUp?t("div",{staticClass:"planet"}):e._e(),t("div",{staticClass:"login ma-5"},[t(h.Z,{on:{click:function(t){return t.stopPropagation(),e.sendUserToLogin.apply(null,arguments)}}},[t(g.Z,[e._v("mdi-account")]),e._v(" LOG IN ")],1)],1),t("div",{staticClass:"search"},[t(v.Z,{attrs:{filled:"",solo:"",dark:"",label:"Enter a location",id:"autocomplete","prepend-inner-icon":"mdi-map-marker"}})],1)])},b=[];r(7658);class y{constructor(){}static get(e){return localStorage.getItem(e)}static set(e,t){localStorage.setItem(e,t)}static remove(e){localStorage.removeItem(e)}static clear(){localStorage.clear()}static key(e){return localStorage.key(e)}}var _={name:"HomeView",data(){return{autocomplete:void 0}},created(){document.title="TravelApp"},mounted(){this.autocomplete=new google.maps.places.Autocomplete(document.getElementById("autocomplete")),google.maps.event.addListener(this.autocomplete,"place_changed",(()=>{const e=this.autocomplete.getPlace(),t=e.geometry.location.lat(),r=e.geometry.location.lng();y.set("Latitude",t),y.set("Longitude",r),this.$router.push({name:"search"})}))},computed:{budget:{get(){return y.get("Budget")},set(e){y.set("Budget",e)}}},methods:{sendUserToLogin(){this.$router.push({name:"login"})}}},w=_,Z=(0,i.Z)(w,f,b,!1,null,"b7f0ff58",null),k=Z.exports,P=r(3816),C=r(5255),x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("MapComponent",{attrs:{id:"map"}}),t(P.Z,{attrs:{id:"some-text",elevation:"2"}},[t(C.EB,[e._v("Test")]),t(C.ZB,[t("div",[e._v("Latitude: "+e._s(e.lat))]),t("br"),t("div",[e._v("Longitude: "+e._s(e.lng))]),t("br"),t("div",[e._v("Budget: $"+e._s(e.budget))])])],1)],1)},L=[],T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"map"},[t("GmapMap",{staticStyle:{width:"100vw",height:"100vh"},attrs:{center:e.center,zoom:12}},e._l(e.markers,(function(r,n){return t("GmapMarker",{key:n,attrs:{position:r.position},on:{click:function(t){e.center=e.m.position}}})})),1)],1)},S=[],O={data(){return{center:{lat:0,lng:0},currentPlace:null,markers:[],places:[]}},mounted(){this.geolocate()},methods:{setPlace(e){this.currentPlace=e},addMarker(){if(this.currentPlace){const e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate(){this.center={lat:Number(y.get("Latitude")),lng:Number(y.get("Longitude"))}}}},$=O,M=(0,i.Z)($,T,S,!1,null,null,null),B=M.exports,U={data:()=>({}),components:{MapComponent:B},mounted(){document.title="TravelApp - Search"},methods:{},computed:{lat:{get(){return y.get("Latitude")},set(e){y.set("Latitude",e)}},lng:{get(){return y.get("Longitude")},set(e){y.set("Longitude",e)}},budget:{get(){return y.get("Budget")},set(e){y.set("Budget",e)}}}},j=U,H=(0,i.Z)(j,x,L,!1,null,"66bacb88",null),R=H.exports,A=r(7979),E=function(){var e=this,t=e._self._c;return t("div",[t(A.Z,{attrs:{id:"username-box",cols:"12",sm:"6",md:"3"}},[t(v.Z,{attrs:{label:"Username",rules:e.rules,counter:"20"}})],1),t("br"),t("br"),t(A.Z,{attrs:{id:"password-box",cols:"12",sm:"6",md:"3"}},[t(v.Z,{attrs:{label:"Password",rules:e.rules,counter:"20"}})],1),t("br"),t("br"),t("p",{staticClass:"center"},[e._v("Not a member yet? "),t("button",{attrs:{id:"register"},on:{click:function(t){return t.stopPropagation(),e.sendUsertoRegister.apply(null,arguments)}}},[e._v("Register here!")])]),t("div",{staticClass:"center"},[t("br"),t("br"),t(h.Z,{on:{click:function(t){return t.stopPropagation(),e.sendUserToHome.apply(null,arguments)}}},[e._v(" Back ")])],1)],1)},q=[],I={data:()=>({rules:[e=>e.length<=20||"Max 20 characters"]}),methods:{sendUsertoRegister(){this.$router.push({name:"register"})},sendUserToHome(){this.$router.push({name:"home"})}}},N=I,D=(0,i.Z)(N,E,q,!1,null,"163be8b8",null),W=D.exports,F=function(){var e=this,t=e._self._c;return t("div",[t(A.Z,{attrs:{id:"register-email",cols:"12",sm:"6",md:"3"}},[t(v.Z,{attrs:{label:"Enter an email",rules:e.rules,counter:"20"}})],1),t(A.Z,{attrs:{id:"register-user",cols:"12",sm:"6",md:"3"}},[t(v.Z,{attrs:{label:"Create a username",rules:e.rules,counter:"20"}})],1),t(A.Z,{attrs:{id:"register-pwd",cols:"12",sm:"6",md:"3"}},[t(v.Z,{attrs:{label:"Create a password",rules:e.rules,"rules.color":"red",counter:"20"}})],1),t("p",{staticClass:"center"},[e._v("Already a member? "),t("button",{attrs:{id:"to-login"},on:{click:function(t){return t.stopPropagation(),e.sendUserToLogin.apply(null,arguments)}}},[e._v("Login Here")])]),t("div",{staticClass:"center"},[t(h.Z,{attrs:{elevation:"2"},on:{click:function(t){return t.stopPropagation(),e.sendUserToHome.apply(null,arguments)}}},[e._v(" Home ")])],1)],1)},G=[],J={data:()=>({rules:[e=>e.length<=20||"Max 20 characters",e=>!!e||"Required"]}),methods:{sendUserToLogin(){this.$router.push({name:"login"})},sendUserToHome(){this.$router.push({name:"home"})}}},V=J,z=(0,i.Z)(V,F,G,!1,null,"5644ddf5",null),Y=z.exports,K=function(){var e=this;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e._self._c;return t("div",[t("p",{attrs:{id:"err-num"}},[e._v("404")]),t("p",[e._v("Whoops! Looks like an error has occurred.")])])}],X={mounted(){document.title="404",y.set("timesRefreshed",String(Number(y.get("timesRefreshed"))+1)),window.addEventListener("unload",this.goHome())},beforeDestroy(){window.removeEventListener("unload",this.goHome())},methods:{goHome(){let e=Number(y.get("timesRefreshed"));e>=2&&(this.$router.push({name:"home"}),y.set("timesRefreshed","0"))}}},ee=X,te=(0,i.Z)(ee,K,Q,!1,null,"7bef6134",null),re=te.exports,ne=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("main",[t("div",{staticClass:"search-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchWeather.apply(null,arguments)},input:function(t){t.target.composing||(e.query=t.target.value)}}})]),"undefined"!=typeof e.weather.main?t("div",{staticClass:"weather-wrap"},[t("div",{staticClass:"location-box"},[t("div",{staticClass:"location"},[e._v(e._s(e.weather.name)+", "+e._s(e.weather.sys.state)+" "+e._s(e.weather.sys.country))]),t("div",{staticClass:"date"},[e._v(e._s(e.dateBuilder()))]),t("div",{staticClass:"weather-box"},[t("div",{staticClass:"temp"},[e._v(e._s(Math.round(e.weather.main.temp))+" °F")]),t("div",{staticClass:"weather"},[e._v(" "+e._s(e.weather)+" ")])])])]):e._e()])])},ae=[],se={data(){return{api_key:"8b81c25b4594c01f9e7d4caec4793f7a",url_base:"https://api.openweathermap.org/data/2.5/",query:"",weather:{}}},methods:{fetchWeather(){fetch(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`).then((e=>e.json())).then(this.setResults)},setResults(e){this.weather=e},dateBuilder(){let e=new Date,t=["January","Feburary","March","April","May","June","July","August","September","October","November","December"],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`${r[e.getDay()]}, ${e.getDate()} ${t[e.getMonth()]} ${e.getFullYear()}`}}},oe=se,ie=(0,i.Z)(oe,ne,ae,!1,null,null,null),le=ie.exports;n.ZP.use(m.ZP);const ue=[{path:"/",name:"home",component:k},{path:"/search",name:"search",component:R},{path:"/login",name:"login",component:W},{path:"/register",name:"register",component:Y},{path:"/weather",name:"weather",component:le},{path:"/*",name:"404",component:re}],ce=new m.ZP({mode:"history",base:"/",routes:ue});var de=ce,pe=r(6292);n.ZP.config.productionTip=!1,n.ZP.use(pe,{load:{key:"AIzaSyCVIPBOnwLEp4CedTebu3hjBnVMWaWyhp0",libraries:"places"}}),new n.ZP({vuetify:p,router:de,render:e=>e(c)}).$mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],i=n[1],l=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var c=l(r)}for(t&&t(n);u<o.length;u++)s=o[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=self["webpackChunktravelapp"]=self["webpackChunktravelapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8456)}));n=r.O(n)})();
//# sourceMappingURL=app.16fb9f15.js.map
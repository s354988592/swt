webpackJsonp([1],{"8wOP":function(t,e){},"9n10":function(t,e){},"CfU+":function(t,e){},KmO0:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("8wOP")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("R4Sj"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")])}]};var h=i("VU/8")(d,u,!1,function(t){i("s7vQ")},"data-v-8dbe5fca",null).exports,v={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wraper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var m=i("VU/8")(v,p,!1,function(t){i("m6lz")},"data-v-76641bfc",null).exports,f={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-cnotent",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-des"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("bG2U")},"data-v-2e51e55c",null).exports,y={name:"HomeRecommend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(y,w,!1,function(t){i("toGq")},"data-v-125b4a2e",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去那儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrap"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("sXZX")},"data-v-0da435fc",null).exports,S=i("aozt"),$=i.n(S),H={name:"Home",components:{HomeHeader:h,HomeSwiper:m,HomeIcons:C,HomeRecommend:g,HomeWeekend:x},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){$.a.get("../../../swt/static/mock/index.json?city="+this.city).then(this.getHomeInfoSuccess)},getHomeInfoSuccess:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HomeHeader"),t._v(" "),i("HomeSwiper",{attrs:{list:t.swiperList}}),t._v(" "),i("HomeIcons",{attrs:{list:t.iconList}}),t._v(" "),i("HomeRecommend",{attrs:{list:t.recommendList}}),t._v(" "),i("HomeWeekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var I=i("VU/8")(H,E,!1,function(t){i("zV/D")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var T=i("VU/8")({name:"CityHeader"},L,!1,function(t){i("WQIy")},"data-v-160b827c",null).exports,U=i("GRyI"),A={name:"CitySearch",props:{cities:Object},data:function(){return{keyWords:"",list:[],timer:null}},watch:{keyWords:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyWords?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.name.indexOf(t.keyWords)>-1||i.spell.indexOf(t.keyWords)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:c()({handelCityClick:function(t){this.changCity(t),this.$router.push("/")}},Object(l.b)(["changCity"])),mounted:function(){var t=this.$refs.listWrap;this.scroll=new U.a(t)},computed:{hasNoData:function(){return!this.list.length}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWords,expression:"keyWords"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyWords},on:{input:function(e){e.target.composing||(t.keyWords=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWords,expression:"keyWords"}],ref:"listWrap",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){return t.handelCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有匹配到数据！")])],2)])])},staticRenderFns:[]};var D=i("VU/8")(A,R,!1,function(t){i("CfU+")},"data-v-41145124",null).exports,F={name:"CityList",props:{cities:Object,hotCities:Array,letter:String},computed:c()({},Object(l.c)({currentCity:"city"})),mounted:function(){var t=this.$refs.wrapper;this.scroll=new U.a(t)},methods:c()({handelCityClick:function(t){this.changCity(t),this.$router.push("/")}},Object(l.b)(["changCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area border-topbottom"},[i("div",{staticClass:"title"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrap"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area border-topbottom"},[i("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrap",on:{click:function(i){return t.handelCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handelCityClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var N=i("VU/8")(F,O,!1,function(t){i("z3+Z")},"data-v-1a62cd8e",null).exports,V={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handlerLetterClick:function(t){var e=t.target.innerText;this.$emit("change",e)},handelTouchStart:function(){this.touchStatus=!0},handelTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-89,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handelTouchEnd:function(){this.touchStatus=!1}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("ul",t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handlerLetterClick,touchstart:function(e){return e.preventDefault(),t.handelTouchStart(e)},touchmove:t.handelTouchMove,touchend:t.handelTouchEnd}},[t._v("\n      "+t._s(e))])}),0)])},staticRenderFns:[]};var W={name:"City",components:{CityHeader:T,CitySearch:D,CityList:N,CityAlphabet:i("VU/8")(V,j,!1,function(t){i("RyBT")},"data-v-36dd4440",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("../../../swt/static/mock/city.json").then(this.handlerCitySucc)},handlerCitySucc:function(t){if((t=t.data)&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handelLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("CityHeader"),t._v(" "),i("CitySearch",{attrs:{cities:t.cities}}),t._v(" "),i("CityList",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("CityAlphabet",{attrs:{cities:t.cities},on:{change:t.handelLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(W,G,!1,function(t){i("P4NC")},"data-v-20f876cb",null).exports,z={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handelGallaryClick:function(){this.$emit("close")}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handelGallaryClick}},[e("div",{staticClass:"wraper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var M={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var X={name:"DetailBanner",components:{CommonGallary:i("VU/8")(z,P,!1,function(t){i("Y3tb")},"data-v-685fbd15",null).exports,FadeAnimation:i("VU/8")({name:"FadeAnimation"},M,!1,function(t){i("KmO0")},"data-v-3c65d8ad",null).exports},props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1,imgTotal:2}},methods:{handelBannerClick:function(){this.showGallary=!0},handelGallaryClose:function(){this.showGallary=!1}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"detail-banner",on:{click:t.handelBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.imgTotal)+"\n      ")])])]),t._v(" "),i("FadeAnimation",[i("CommonGallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handelGallaryClose}})],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(X,Y,!1,function(t){i("T1C5")},"data-v-12d9c58f",null).exports,Z={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handlerScroll:function(){var t=document.documentElement.scrollTop;if(console.log(t),t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handlerScroll)},deactivated:function(){window.removeEventListener("scroll",this.handlerScroll)}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{to:"/",tag:"div"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])])],1)],1)},staticRenderFns:[]};var K=i("VU/8")(Z,q,!1,function(t){i("irbX")},"data-v-8d363dde",null).exports,J={name:"DetailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-title-children"},[i("DetailList",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var et={name:"Detail",components:{DetailBanner:Q,DetailHeader:K,DetailList:i("VU/8")(J,tt,!1,function(t){i("dc2B")},"data-v-e8ef777e",null).exports},data:function(){return{list:[],sightName:"",bannerImg:"",gallaryImgs:[]}},methods:{getDetailInfo:function(){$.a.get("../../../swt/static/mock/detail.json?id="+this.$route.params.id).then(this.handelAjaxSuccess)},handelAjaxSuccess:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.list=e.categoryList,this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs}}},mounted:function(){this.getDetailInfo()}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("DetailBanner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("DetailHeader"),this._v(" "),e("DetailList",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("lvzp")},"data-v-c7c57ed2",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Home",component:I},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=i("v5o6"),rt=i.n(at),ot=i("41jX"),ct=i.n(ot),lt=(i("briU"),"北京");try{localStorage.city&&(lt=localStorage.city)}catch(t){}var dt={city:lt},ut={changCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ht=new l.a.Store({state:dt,mutations:ut});i("M6Sr"),i("9n10"),i("TzC8"),i("aEDl");s.a.config.productionTip=!1,rt.a.attach(document.body),s.a.use(ct.a),new s.a({el:"#app",router:nt,store:ht,components:{App:a},template:"<App/>"})},P4NC:function(t,e){},RyBT:function(t,e){},T1C5:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},WQIy:function(t,e){},Y3tb:function(t,e){},aEDl:function(t,e){},bG2U:function(t,e){},dc2B:function(t,e){},irbX:function(t,e){},lvzp:function(t,e){},m6lz:function(t,e){},s7vQ:function(t,e){},sXZX:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},toGq:function(t,e){},"z3+Z":function(t,e){},"zV/D":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.805c47da99081aff3ce8.js.map
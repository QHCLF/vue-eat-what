webpackJsonp([3],{"3OaG":function(t,s){},"5hSA":function(t,s,e){"use strict";s.a=function(t){var s=new Date(t),e=s.getFullYear()+"-",i=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"-",a=s.getDate()+" ",n=s.getHours()+":",o=s.getMinutes();return e+i+a+n+o}},"9cao":function(t,s,e){"use strict";var i={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"starItem",class:t})}),0)},staticRenderFns:[]};var n=e("VU/8")(i,a,!1,function(t){e("Ov/m")},null,null);s.a=n.exports},IdVp:function(t,s){},JX6v:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("Xxa5"),n=e.n(a),o=e("exGp"),c=e.n(o),r=e("9cao"),l=e("mtWM"),d=e.n(l),u={name:"Header",data:function(){return{seller:{type:Object},detailShow:!1}},methods:{getData:function(){var t=this;return c()(n.a.mark(function s(){var e;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,d.a.get("/static/data.json");case 2:e=s.sent,t.seller=e.data.seller;case 4:case"end":return s.stop()}},s,t)}))()},showDetail:function(){this.detailShow=!0},hidDetail:function(){this.detailShow=!1}},mounted:function(){var t=this;return c()(n.a.mark(function s(){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.getData();case 2:case"end":return s.stop()}},s,t)}))()},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:r.a}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"Header"}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v("\n                    "+t._s(t.seller.supports[0].description)+"\n                ")])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v("\n                "+t._s(t.seller.supports.length)+"个\n           ")]),t._v(" "),e("i",{staticClass:"iconfont icon-right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v("\n            "+t._s(t.seller.bulletin)+"\n        ")]),t._v(" "),e("i",{staticClass:"iconfont icon-right",on:{click:t.showDetail}})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),t._m(0),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hidDetail}},[e("i",{staticClass:"iconfont icon-close2"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"text"},[this._v("优惠信息")]),this._v(" "),s("div",{staticClass:"line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"text"},[this._v("商家公告")]),this._v(" "),s("div",{staticClass:"line"})])}]};var h={name:"App",components:{Headerer:e("VU/8")(u,v,!1,function(t){e("WjuH")},"data-v-7e2bf3a0",null).exports}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Headerer"),this._v(" "),s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/"}},[this._v("商品")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/ratings"}},[this._v("评论")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/seller"}},[this._v("商家")])],1)]),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var p=e("VU/8")(h,f,!1,function(t){e("JX6v")},null,null).exports,_=e("/ocq"),C=e("GQaK"),m={name:"cartControl",props:{food:{type:Object}},methods:{addCart:function(t){t.constructor&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1))},decreaseCart:function(t){t.constructor&&this.food.count&&this.food.count--}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"cartControl"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:t.decreaseCart}},[e("i",{staticClass:"iconfont icon-minus-circle"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:t.addCart}},[e("i",{staticClass:"iconfont icon-plus-circle"})])])},staticRenderFns:[]};var w=e("VU/8")(m,g,!1,function(t){e("d+5/")},"data-v-1117a76a",null).exports,y={name:"shopCar",components:{CartControl:w},props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectFoods:{type:Array,default:function(){return[{price:10,count:1}]}}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1}],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"￥还差"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!t.totalCount)return t.fold=!0,this.$emit("listShow",!1),!1;var s=!t.fold;return t.scroll?t.scroll.refresh():s&&this.$nextTick(function(){t.scroll=new C.a(t.$refs.listContent,{click:!0})}),this.$emit("listShow",s),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"shopCar"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.toggleList}},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highLight:t.totalCount>0}},[e("i",{staticClass:"iconfont icon-gouwuche",class:{highLight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highLight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(t,s){return e("transition",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:s,staticClass:"ball",attrs:{name:"drop"}},[e("div",{staticClass:"inner"})])}),1),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopCar-list"},[e("div",{staticClass:"list-head"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])}),0)])])])],1)},staticRenderFns:[]};var k=e("VU/8")(y,x,!1,function(t){e("v+8A")},null,null).exports,b=e("fJdx"),S=e("5hSA"),F={name:"foodDetail",components:{RatingSelect:e("b2g5").a,Split:b.a,CartControl:w},props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},filters:{formateDate:function(t){return Object(S.a)(t)}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new C.a(t.$refs.foodDetail,{click:!0})})},back:function(){this.showFlag=!1},addFirst:function(){i.a.set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},Stype:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},Ocontent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"foodDetail",attrs:{id:"foodDetail"}},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"img-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"iconfont icon-close2"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cart-control",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"(!food.count) || (food.count === 0)"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("加入购物车")])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("div",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("rating-select",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{Stype:t.Stype,Ocontent:t.Ocontent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&void 0!==t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings !== undefined && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"ratingItem"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12px",height:"12px",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formateDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{staticClass:"iconfont",class:{"icon-appreciate_fill_light":0===s.rateType,"icon-oppose_fill_light":1===s.rateType}}),t._v("\n                            "+t._s(s.text)+"\n                        ")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.food.ratings&&0===t.food.ratings.length,expression:"food.ratings !== undefined && food.ratings.length === 0"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])},staticRenderFns:[]};var T={name:"goods",components:{FoodDetail:e("VU/8")(F,P,!1,function(t){e("3OaG")},"data-v-129674aa",null).exports,CartControl:w,ShopCar:k},data:function(){return{goods:[],listHeight:[],scrollY:0,deliveryPrice:0,minPrice:0,isShow:!1,choiceFood:{}}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{getData:function(){var t=this;return c()(n.a.mark(function s(){var e;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,d.a.get("/static/data.json");case 2:e=s.sent,t.goods=e.data.goods,t.deliveryPrice=e.data.seller.deliveryPrice,t.minPrice=e.data.seller.minPrice;case 6:case"end":return s.stop()}},s,t)}))()},_initScroll:function(){var t=this;this.menuScroll=new C.a(this.$refs.menu,{click:!0}),this.foodsScroll=new C.a(this.$refs.foods,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foods.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},listShow:function(t){this.selectFood.length?this.isShow=t:this.isShow=!1},selectFoods:function(t,s){s.constructor&&(this.choiceFood=t,this.$refs.foodDetail.show())}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFood:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},mounted:function(){var t=this;return c()(n.a.mark(function s(){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.getData();case 2:t.$nextTick(function(){t._initScroll(),t._calculateHeight()});case 3:case"end":return s.stop()}},s,t)}))()}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods"}},[e("div",{ref:"menu",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){return t.selectMenu(i,s)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n                    "+t._s(s.name)+"\n                ")])])}),0)]),t._v(" "),e("div",{ref:"foods",staticClass:"food-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item",on:{click:function(e){return t.selectFoods(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"})]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shop-car",{attrs:{"select-foods":t.selectFood,"delivery-price":t.deliveryPrice,minPrice:t.minPrice},on:{listShow:t.listShow}}),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"list-mask"})]),t._v(" "),e("food-detail",{ref:"foodDetail",attrs:{food:t.choiceFood}})],1)},staticRenderFns:[]};var N=e("VU/8")(T,$,!1,function(t){e("j0mC")},"data-v-72d6a2ef",null).exports;i.a.use(_.a);var D=new _.a({routes:[{path:"/",name:"goods",component:N},{path:"/ratings",name:"ratings",component:function(){return e.e(0).then(e.bind(null,"AKNT"))}},{path:"/seller",name:"seller",component:function(){return e.e(1).then(e.bind(null,"N0EE"))}}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:D,components:{App:p},template:"<App/>"})},"Ov/m":function(t,s){},WjuH:function(t,s){},b2g5:function(t,s,e){"use strict";var i={name:"ratingSelect",props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{Stype:this.selectType,Ocontent:this.onlyContent}},methods:{select:function(t){this.Stype=t,this.$emit("Stype",t)},toggleContent:function(){this.Ocontent=!this.Ocontent,this.$emit("Ocontent",this.Ocontent)}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"ratingSelect"}},[e("div",{staticClass:"rating-type"},[e("div",{staticClass:"block positive",class:{active:2===t.Stype},on:{click:function(s){return t.select(2)}}},[t._v("\n            "+t._s(t.desc.all)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.Stype},on:{click:function(s){return t.select(0)}}},[t._v("\n            "+t._s(t.desc.positive)+"\n             "),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.Stype},on:{click:function(s){return t.select(1)}}},[t._v("\n            "+t._s(t.desc.negative)+"\n             "),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.Ocontent},on:{click:t.toggleContent}},[e("i",{staticClass:"iconfont icon-selectfill"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var n=e("VU/8")(i,a,!1,function(t){e("oZ3t")},"data-v-027face2",null);s.a=n.exports},"d+5/":function(t,s){},fJdx:function(t,s,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"split"}})},staticRenderFns:[]};var a=e("VU/8")({name:"split"},i,!1,function(t){e("IdVp")},"data-v-8fca9ca2",null);s.a=a.exports},j0mC:function(t,s){},oZ3t:function(t,s){},"v+8A":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.61328321e1dd6f7d6afa.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomeScreen~31ecd969"],{5014:function(t,e,r){"use strict";r("6587")},6587:function(t,e,r){},"6a2c":function(t,e,r){},7079:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[t.isLoading?r("app-loader"):t._e(),r("AppSwiper"),r("div",{staticClass:"container product--item--container text--center"},[r("div",{staticClass:"search-box mb-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"search__input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.getSearchProduct]}}),t._m(0)]),t.error?r("div",{staticClass:"text--danger text--bold"},[t._v(t._s(t.error))]):r("div",[r("h2",[t._v("Feature Products")]),t.products.length>0?r("div",{staticClass:"product--item"},t._l(t.products,(function(t){return r("product-card",{key:t.id,attrs:{product:t}})})),1):t._e()])])],1)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"search__btn"},[r("i",{staticClass:"fas fa-search"})])}],s=(r("96cf"),r("1da1")),n=r("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:{name:"productScreen",params:{id:t.product._id}}}},[r("div",{staticClass:"product--card"},[r("section",{staticClass:"product--img"},[r("img",{attrs:{src:t.product.image,alt:""}})]),r("section",{staticClass:"product-details"},[r("div",{staticClass:"product-details--container"},[r("div",{staticClass:"product-name"},[r("h4",[t._v(t._s(t.product.name||"Product Name"))])]),r("div",{staticClass:"product-description"},[r("p",{staticClass:"product-price"},[t._v(" Price: $"+t._s(t.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||"Product Price")+" ")])])])])])])},i=[],u={name:"ProductCard",props:{product:{type:Object,default:function(){return{}}}}},d=u,l=(r("5014"),r("2877")),p=Object(l["a"])(d,o,i,!1,null,"ad0921b0",null),m=p.exports,f=r("ddc6"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"swiper"},[r("button",{staticClass:"prev__btn",on:{click:t.showPrev}},[r("i",{staticClass:"fas fa-chevron-left"})]),r("button",{staticClass:"next__btn",on:{click:t.showNext}},[r("i",{staticClass:"fas fa-chevron-right"})]),t.products.length>0?r("VueSlickCarousel",t._b({ref:"carousel",staticClass:"swiper-container"},"VueSlickCarousel",t.settings,!1),t._l(t.products,(function(t){return r("div",{key:t._id,staticClass:"swiper__item"},[r("router-link",{attrs:{to:{path:"/product/"+t._id}}},[r("img",{attrs:{src:t.image,alt:t.name}})])],1)})),0):t._e()],1)},v=[],g=r("a7ab"),_=r.n(g),b=(r("7b8d"),r("6a2c"),r("bc3a")),w=r.n(b),C={name:"MyComponent",data:function(){return{products:[],settings:{arrows:!1,autoplay:!0,autoplaySpeed:5e3,dotsClass:"slick-dots custom-dot-class",edgeFriction:.35,speed:500,slidesToShow:1,slidesToScroll:1,infinite:!0,prevArrow:document.querySelector(".prev__btn"),nextArrow:document.querySelector(".next__btn")}}},components:{VueSlickCarousel:_.a},created:function(){this.getProduct()},methods:{showPrev:function(){this.$refs.carousel.prev()},showNext:function(){this.$refs.carousel.next()},getProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/products");case 2:r=e.sent,a=r.data,t.products=a;case 5:case"end":return e.stop()}}),e)})))()}}},x=C,P=(r("d38a"),Object(l["a"])(x,h,v,!1,null,"573597ac",null)),S=P.exports,k=r("2f62"),O={name:"Products",data:function(){return{products:[],searchTerm:"",error:""}},components:{ProductCard:m,AppLoader:f["default"],AppSwiper:S},computed:Object(n["a"])({},Object(k["c"])({isLoading:"getLoading"})),created:function(){this.getProduct()},methods:Object(n["a"])(Object(n["a"])({},Object(k["d"])({loading:"LOADING"})),{},{getProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading(!0),t.error="",e.next=4,w.a.get("/api/products");case 4:r=e.sent,a=r.data,t.products=a,t.loading(!1);case 8:case"end":return e.stop()}}),e)})))()},getSearchProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/products?search=".concat(t.searchTerm));case 2:r=e.sent,a=r.data,a.message?t.error=a.message:(t.error="",t.products=a);case 5:case"end":return e.stop()}}),e)})))()}})},j=O,y=(r("d6d0"),Object(l["a"])(j,a,c,!1,null,"162fe483",null));e["default"]=y.exports},"7b8d":function(t,e,r){},a743:function(t,e,r){},d38a:function(t,e,r){"use strict";r("ec25")},d6d0:function(t,e,r){"use strict";r("a743")},ec25:function(t,e,r){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomeScreen"],{"086b":function(t,e,r){"use strict";r("db0f")},5014:function(t,e,r){"use strict";r("6587")},6587:function(t,e,r){},7079:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[t.isLoading?r("app-loader"):t._e(),r("div",{staticClass:"container product--item--container"},[r("div",{staticClass:"search-box mb-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"search__input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.getSearchProduct]}}),t._m(0)]),t.error?r("div",{staticClass:"text--danger text--bold"},[t._v(t._s(t.error))]):r("div",[r("h2",[t._v("Feature Products")]),t.products.length>0?r("div",{staticClass:"product--item"},t._l(t.products,(function(t){return r("product-card",{key:t.id,attrs:{product:t}})})),1):t._e()])])],1)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"search__btn"},[r("i",{staticClass:"fas fa-search"})])}],s=(r("96cf"),r("1da1")),n=r("5530"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:{name:"productScreen",params:{id:t.product._id}}}},[r("div",{staticClass:"product--card"},[r("section",{staticClass:"product--img"},[r("img",{attrs:{src:t.product.image,alt:""}})]),r("section",{staticClass:"product-details"},[r("div",{staticClass:"product-details--container"},[r("div",{staticClass:"product-name"},[r("h4",[t._v(t._s(t.product.name||"Product Name"))])]),r("div",{staticClass:"product-description"},[r("p",{staticClass:"product-price"},[t._v(" Price: $"+t._s(t.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||"Product Price")+" ")])])])])])])},o=[],u={name:"ProductCard",props:{product:{type:Object,default:function(){return{}}}}},d=u,p=(r("5014"),r("2877")),l=Object(p["a"])(d,i,o,!1,null,"ad0921b0",null),m=l.exports,f=r("bc3a"),v=r.n(f),h=r("ddc6"),g=r("2f62"),b={name:"Products",data:function(){return{products:[],searchTerm:"",error:""}},components:{ProductCard:m,AppLoader:h["a"]},computed:Object(n["a"])({},Object(g["c"])({isLoading:"getLoading"})),created:function(){this.getProduct()},methods:Object(n["a"])(Object(n["a"])({},Object(g["d"])({loading:"LOADING"})),{},{getProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading(!0),t.error="",e.next=4,v.a.get("/api/products");case 4:r=e.sent,a=r.data,t.products=a,t.loading(!1);case 8:case"end":return e.stop()}}),e)})))()},getSearchProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.searchTerm){e.next=2;break}return e.abrupt("return",t.getProduct());case 2:return e.next=4,v.a.get("/api/products?search=".concat(t.searchTerm));case 4:r=e.sent,a=r.data,a.message?t.error=a.message:(t.error="",t.products=a);case 7:case"end":return e.stop()}}),e)})))()}})},_=b,C=(r("086b"),Object(p["a"])(_,a,c,!1,null,"62b9826c",null));e["default"]=C.exports},a638:function(t,e,r){},db0f:function(t,e,r){},dd0c:function(t,e,r){"use strict";r("a638")},ddc6:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",{staticClass:"spinner"})])}],s={},n=s,i=(r("dd0c"),r("2877")),o=Object(i["a"])(n,a,c,!1,null,"b32c4e90",null);e["a"]=o.exports}}]);
//# sourceMappingURL=HomeScreen.171af21f.js.map
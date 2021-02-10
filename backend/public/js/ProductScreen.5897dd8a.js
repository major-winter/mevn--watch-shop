(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductScreen"],{"008b":function(t,e,r){"use strict";r("386f")},"386f":function(t,e,r){},"7db0":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").find,a=r("44d2"),s=r("ae40"),i="find",d=!0,o=s(i);i in[]&&Array(1)[i]((function(){d=!1})),n({target:"Array",proto:!0,forced:d||!o},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)},"8deb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product--screen"},[t.isLoading?r("app-loader"):r("div",{staticClass:"product--screen__container"},[r("div",{staticClass:"product--screen__details"},[r("div",{staticClass:"product--screen__details--img"},[r("img",{attrs:{src:t.product.image,alt:t.product.name}})]),r("div",{staticClass:"product--screen__details--description"},[r("div",{staticClass:"container"},[r("div",{staticClass:"product--title"},[r("h2",[t._v(t._s(t.product.name))])]),r("div",{staticClass:"product--description mt-1"},[r("p",[t._v("$"+t._s(t.product.price))]),t.product.qty>0&&!t.isAdded?r("m-button",{staticClass:"btn btn__cart mt-1",attrs:{disabled:!!t.spinner},on:{clicked:t.addToCartHandler}},[t.spinner?r("app-mini-loader"):r("span",[t._v("Add to Cart")])],1):t._e(),t.isAdded?r("router-link",{staticClass:"link btn btn__cart mt-1",attrs:{to:"/cart"}},[t._v("View Cart")]):t._e(),t.product.qty>0?r("m-button",{staticClass:"btn btn__buy mt-1",on:{clicked:t.buyProductHandler}},[t._v("Buy")]):r("h3",{staticClass:"mt-2 text--danger"},[t._v("Out of Stock")])],1)])])])])],1)},c=[],a=(r("7db0"),r("b0c0"),r("5530")),s=(r("96cf"),r("1da1")),i=r("8bd7"),d=r("bc3a"),o=r.n(d),u=r("ddc6"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mini-loader"},[r("div",{staticClass:"spinner"})])}],f={},m=f,_=(r("008b"),r("2877")),b=Object(_["a"])(m,p,l,!1,null,"36d94bd8",null),v=b.exports,h={name:"ProductScreen",data:function(){return{product:{},isAdded:!1,spinner:!1}},computed:{isLoading:function(){return this.$store.getters.getLoading}},components:{mButton:i["a"],AppMiniLoader:v,AppLoader:u["a"]},created:function(){this.$store.commit("LOADING",!0),this.getProduct(),this.checkExistedProduct()},methods:{getProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/products/".concat(t.$route.params.id));case 2:r=e.sent,n=r.data,t.product=Object(a["a"])(Object(a["a"])({},n),{},{purchaseQty:1,productId:n._id,countInStock:n.qty});case 5:case"end":return e.stop()}}),e)})))()},addToCartHandler:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={purchaseQty:1,productName:t.product.name,productId:t.product._id,image:t.product.image,countInStock:t.product.qty},t.spinner=!0,e.next=4,t.$store.dispatch("ADD_TO_CART",{cartProduct:r,product:t.product});case 4:n=e.sent,n&&(t.spinner=!1,t.isAdded=!0);case 6:case"end":return e.stop()}}),e)})))()},checkExistedProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("LOADING",!0),e.next=3,JSON.parse(localStorage.getItem("cart"));case 3:if(r=e.sent,!r){e.next=9;break}return e.next=7,r.find((function(e){return e._id===t.$route.params.id}));case 7:n=e.sent,n&&(t.isAdded=!0);case 9:t.$store.commit("LOADING",!1);case 10:case"end":return e.stop()}}),e)})))()},buyProductHandler:function(){console.log("buying this product")}}},g=h,C=(r("d399"),r("df67"),Object(_["a"])(g,n,c,!1,null,"6ae0a1fa",null));e["default"]=C.exports},a638:function(t,e,r){},d8b3:function(t,e,r){},dd0c:function(t,e,r){"use strict";r("a638")},ddc6:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",{staticClass:"spinner"})])}],a={},s=a,i=(r("dd0c"),r("2877")),d=Object(i["a"])(s,n,c,!1,null,"b32c4e90",null);e["a"]=d.exports},df67:function(t,e,r){"use strict";r("d8b3")}}]);
//# sourceMappingURL=ProductScreen.5897dd8a.js.map
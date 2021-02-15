(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductScreen"],{"008b":function(t,e,r){"use strict";r("386f")},2661:function(t,e,r){"use strict";r("7c2d")},"386f":function(t,e,r){},"3e1a":function(t,e,r){"use strict";r("ffa9")},"7c2d":function(t,e,r){},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,c=r("44d2"),s=r("ae40"),i="find",o=!0,u=s(i);i in[]&&Array(1)[i]((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(i)},"8deb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product--screen"},[t.showModal?r("app-modal",{attrs:{route:!0},on:{routeHandler:t.routeHandler,close:function(e){t.showModal=!t.showModal}},scopedSlots:t._u([{key:"router",fn:function(){return[t._v("Go to Login")]},proxy:!0}],null,!1,1391652678)},[t._v(" Please Log in! ")]):t._e(),t.isLoading?r("app-loader"):r("div",{staticClass:"product--screen__container"},[r("div",{staticClass:"product--screen__details"},[r("div",{staticClass:"product--screen__details--img"},[r("img",{attrs:{src:t.product.image,alt:t.product.name}})]),r("div",{staticClass:"product--screen__details--description"},[r("div",{staticClass:"container"},[r("div",{staticClass:"product--title"},[r("h2",[t._v(t._s(t.product.name))])]),r("div",{staticClass:"product--description mt-1"},[r("p",[t._v("$"+t._s(t.product.price))]),t.product.qty>0&&!t.isAdded?r("m-button",{staticClass:"btn btn__cart mt-1",attrs:{disabled:!!t.spinner},on:{clicked:t.addToCartHandler}},[t.spinner?r("app-mini-loader"):r("span",[t._v("Add to Cart")])],1):t._e(),t.isAdded?r("router-link",{staticClass:"link btn btn__cart mt-1",attrs:{to:"/cart"}},[t._v("View Cart")]):t._e(),t.product&&t.product.qty>0?r("m-button",{staticClass:"btn btn__buy mt-1",on:{clicked:t.buyProductHandler}},[t.buySpinner?r("app-mini-loader"):t._e(),t.buySpinner||t.isAdded?t._e():r("span",[t._v("Buy Now")]),t.isAdded?r("span",[t._v("Go to Cart")]):t._e()],1):r("h3",{staticClass:"mt-2 text--danger"},[t._v("Out of Stock")])],1)])])])])],1)},a=[],c=(r("7db0"),r("b0c0"),r("96cf"),r("1da1")),s=r("5530"),i=r("8bd7"),o=r("bc3a"),u=r.n(o),d=r("ddc6"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mini-loader"},[r("div",{staticClass:"spinner"})])}],f={},m=f,_=(r("008b"),r("2877")),b=Object(_["a"])(m,p,l,!1,null,"36d94bd8",null),h=b.exports,v=r("0178"),g=r("2f62"),w={name:"ProductScreen",data:function(){return{product:{},isAdded:!1,spinner:!1,buySpinner:!1,showModal:!1}},computed:Object(s["a"])({},Object(g["c"])({isLoading:"getLoading",getStatus:"getStatus"})),components:{mButton:i["a"],AppMiniLoader:h,AppLoader:d["a"],AppModal:v["a"]},created:function(){this.loading(!0),this.getProduct(),this.checkExistedProduct()},methods:Object(s["a"])(Object(s["a"])({},Object(g["d"])({loading:"LOADING"})),{},{getProduct:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/products/".concat(t.$route.params.id));case 2:r=e.sent,n=r.data,t.product=Object(s["a"])(Object(s["a"])({},n),{},{purchaseQty:1,productId:n._id,countInStock:n.qty}),t.loading(!1);case 6:case"end":return e.stop()}}),e)})))()},addToCartHandler:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.getStatus){e.next=2;break}return e.abrupt("return",t.showModal=!0);case 2:return r={purchaseQty:1,productName:t.product.name,productId:t.product._id,image:t.product.image,countInStock:t.product.qty},t.spinner=!0,e.next=6,t.$store.dispatch("ADD_TO_CART",{cartProduct:r,product:t.product});case 6:n=e.sent,n&&(t.spinner=!1,t.isAdded=!0);case 8:case"end":return e.stop()}}),e)})))()},checkExistedProduct:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading(!0),e.next=3,JSON.parse(localStorage.getItem("cart"));case 3:if(r=e.sent,!r){e.next=10;break}return t.loading(!1),e.next=8,r.find((function(e){return e._id===t.$route.params.id}));case 8:n=e.sent,n&&(t.isAdded=!0);case 10:case"end":return e.stop()}}),e)})))()},buyProductHandler:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.getStatus){e.next=2;break}return e.abrupt("return",t.showModal=!0);case 2:if(!t.isAdded){e.next=4;break}return e.abrupt("return",t.$router.push({path:"/cart"}));case 4:return t.buySpinner=!0,r={purchaseQty:1,productName:t.product.name,productId:t.product._id,image:t.product.image,countInStock:t.product.qty},e.next=8,t.$store.dispatch("ADD_TO_CART",{cartProduct:r,product:t.product});case 8:n=e.sent,n&&(t.buySpinner=!1,t.$router.push({path:"/cart"}));case 10:case"end":return e.stop()}}),e)})))()},routeHandler:function(){this.$router.push({path:"/login",query:{productId:this.$route.params.id}})}})},C=w,y=(r("2661"),Object(_["a"])(C,n,a,!1,null,"98bea274",null));e["default"]=y.exports},ddc6:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",{staticClass:"spinner"})])}],c={},s=c,i=(r("3e1a"),r("2877")),o=Object(i["a"])(s,n,a,!1,null,"c2762d8c",null);e["a"]=o.exports},ffa9:function(t,e,r){}}]);
//# sourceMappingURL=ProductScreen.fd7e8afb.js.map
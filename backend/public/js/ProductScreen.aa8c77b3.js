(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductScreen"],{"1cb0":function(t,e,r){"use strict";r("2c17")},"2c17":function(t,e,r){},"4de4":function(t,e,r){"use strict";var c=r("23e7"),n=r("b727").filter,i=r("1dde"),o=r("ae40"),a=i("filter"),s=o("filter");c({target:"Array",proto:!0,forced:!a||!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"7db0":function(t,e,r){"use strict";var c=r("23e7"),n=r("b727").find,i=r("44d2"),o=r("ae40"),a="find",s=!0,d=o(a);a in[]&&Array(1)[a]((function(){s=!1})),c({target:"Array",proto:!0,forced:s||!d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},"8deb":function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product--screen"},[r("div",{staticClass:"product--screen__container"},[r("div",{staticClass:"product--screen__details"},[r("div",{staticClass:"product--screen__details--img"},[r("img",{attrs:{src:t.product.image,alt:t.product.name}})]),r("div",{staticClass:"product--screen__details--description"},[r("div",{staticClass:"container"},[r("div",{staticClass:"product--title"},[r("h2",[t._v(t._s(t.product.name))])]),r("div",{staticClass:"product--description mt-1"},[r("p",[t._v("$"+t._s(t.product.price))]),t.product.qty>0?r("m-button",{staticClass:"btn btn__cart mt-1",on:{clicked:t.addToCartHandler}},[t.isAdded?r("span",[r("router-link",{staticClass:"link",attrs:{to:"/cart"}},[t._v("View Cart")])],1):r("span",[t._v("Add to Cart")])]):t._e(),t.product.qty>0?r("m-button",{staticClass:"btn btn__buy mt-1",on:{clicked:t.buyProductHandler}},[t._v("Buy")]):r("h3",{staticClass:"mt-2 text--danger"},[t._v("Out of Stock")])],1)])])])])])},n=[],i=(r("7db0"),r("b0c0"),r("5530")),o=(r("96cf"),r("1da1")),a=r("8bd7"),s=r("bc3a"),d=r.n(s),u={name:"ProductScreen",data:function(){return{product:{},isAdded:!1}},components:{mButton:a["a"]},created:function(){this.getProduct()},mounted:function(){this.checkExistedProduct()},methods:{getProduct:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/products/".concat(t.$route.params.id));case 2:r=e.sent,c=r.data,t.product=Object(i["a"])(Object(i["a"])({},c),{},{purchaseQty:1,productId:c._id,countInStock:c.qty});case 5:case"end":return e.stop()}}),e)})))()},addToCartHandler:function(){var t={purchaseQty:1,productName:this.product.name,productId:this.product._id,image:this.product.image,countInStock:this.product.qty};this.$store.dispatch("ADD_TO_CART",{cartProduct:t,product:this.product}),this.isAdded=!0},checkExistedProduct:function(){var t=this,e=JSON.parse(localStorage.getItem("cart"));if(e){var r=e.find((function(e){return e._id===t.$route.params.id}));r&&(this.isAdded=!0)}},buyProductHandler:function(){console.log("buying this product")}}},p=u,f=(r("d399"),r("1cb0"),r("2877")),b=Object(f["a"])(p,c,n,!1,null,"c04ad7d2",null);e["default"]=b.exports},b64b:function(t,e,r){var c=r("23e7"),n=r("7b0b"),i=r("df75"),o=r("d039"),a=o((function(){i(1)}));c({target:"Object",stat:!0,forced:a},{keys:function(t){return i(n(t))}})},dbb4:function(t,e,r){var c=r("23e7"),n=r("83ab"),i=r("56ef"),o=r("fc6a"),a=r("06cf"),s=r("8418");c({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,c=o(t),n=a.f,d=i(c),u={},p=0;while(d.length>p)r=n(c,e=d[p++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var c=r("23e7"),n=r("d039"),i=r("fc6a"),o=r("06cf").f,a=r("83ab"),s=n((function(){o(1)})),d=!a||s;c({target:"Object",stat:!0,forced:d,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})}}]);
//# sourceMappingURL=ProductScreen.aa8c77b3.js.map
(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({CartScreen:"CartScreen",ContactScreen:"ContactScreen",HomeScreen:"HomeScreen",LoginScreen:"LoginScreen",NotFoundScreen:"NotFoundScreen",PaymentScreen:"PaymentScreen",ProductScreen:"ProductScreen",ProfileScreen:"ProfileScreen",ReviewOrderScreen:"ReviewOrderScreen",ShippingInfoScreen:"ShippingInfoScreen",SignupScreen:"SignupScreen"}[e]||e)+"."+{CartScreen:"67a79831",ContactScreen:"5e933b76",HomeScreen:"171af21f",LoginScreen:"6a5979dc",NotFoundScreen:"7cad7775",PaymentScreen:"e9e43d53",ProductScreen:"815b568c",ProfileScreen:"fcd65af0",ReviewOrderScreen:"54da8580",ShippingInfoScreen:"a468ddd4",SignupScreen:"d823de29"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={CartScreen:1,ContactScreen:1,HomeScreen:1,LoginScreen:1,PaymentScreen:1,ProductScreen:1,ProfileScreen:1,ReviewOrderScreen:1,ShippingInfoScreen:1,SignupScreen:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({CartScreen:"CartScreen",ContactScreen:"ContactScreen",HomeScreen:"HomeScreen",LoginScreen:"LoginScreen",NotFoundScreen:"NotFoundScreen",PaymentScreen:"PaymentScreen",ProductScreen:"ProductScreen",ProfileScreen:"ProfileScreen",ReviewOrderScreen:"ReviewOrderScreen",ShippingInfoScreen:"ShippingInfoScreen",SignupScreen:"SignupScreen"}[e]||e)+"."+{CartScreen:"43b5996f",ContactScreen:"26ad810e",HomeScreen:"b6fdf17e",LoginScreen:"8ec26ce4",NotFoundScreen:"31d6cfe0",PaymentScreen:"d6ee6668",ProductScreen:"69925096",ProfileScreen:"4056e913",ReviewOrderScreen:"3092fe62",ShippingInfoScreen:"f8319021",SignupScreen:"48972fb0"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0178":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"backdrop"},[n("div",{staticClass:"modal__card text--center"},[e._m(0),n("section",{staticClass:"modal__card--text"},[n("h2",[e._v("Notes!")]),n("p",{staticClass:"mt-1"},[e._t("default",[e._v(" Your login session has expired. Please log in again! ")])],2),n("button",{staticClass:"modal__btn mt-1",on:{click:function(t){return e.$emit("close")}}},[e._v(" Close ")])])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"modal__card--icon"},[n("div",[n("i",{staticClass:"fas fa-exclamation-triangle icon"})])])}],c={},o=c,i=(n("7f26"),n("2877")),s=Object(i["a"])(o,r,a,!1,null,"7bc355aa",null);t["a"]=s.exports},"0c59":function(e,t,n){},4414:function(e,t,n){},"452c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[t.showModal?r("app-modal",{on:{close:function(){e.$store.commit("SHOW_MODAL",!1)}}}):t._e(),r("app-header"),r("main",[r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1),r("app-footer")],1)},c=[],o=(n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[e._m(0),n("nav",{staticClass:"navbar--mobile"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"navbar__list-items"},e._l(e.mobileNavMenu,(function(t){return n("li",{key:t.id,staticClass:"navbar__item"},[n("router-link",{attrs:{to:t.path}},[n("span",{on:{click:e.navbarHandler}},[n("i",{class:t.icon}),e._v(" "+e._s(t.name)+" ")])])],1)})),0)])]),n("nav",{staticClass:"nav"},[n("div",{staticClass:"container d-flex nav--mobile"},[n("div",{staticClass:"mobile-icon",on:{click:e.navbarHandler}},[e.isNavbar?n("i",{staticClass:"fas fa-times navbar--icon"}):n("i",{staticClass:"fas fa-bars navbar--icon"})]),n("div",{staticClass:"logo"},[n("router-link",{staticClass:"white text--decoration--none",attrs:{to:"/"}},[n("h1",[n("i",{staticClass:"fas fa-dragon"})])])],1),e.isAuth?n("div",[n("router-link",{staticClass:"white text--decoration--none",attrs:{to:"/profile"}},[e._v(" Hello, "+e._s(e.userName)+" ")])],1):e._e(),n("router-link",{staticClass:"white",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"})])],1)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"top"},[n("div",{staticClass:"container"})])}],u=(n("a630"),n("caad"),n("2532"),n("3ca3"),{name:"AppHeader",data:function(){return{isNavbar:!1,scrollPositionY:0,loggedIn:null}},computed:{mobileNavMenu:function(){var e=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/Contact",name:"Contact",icon:"fas fa-phone"},{path:"/login",name:"Log in",icon:"fas fa-user-alt"}];return this.isAuth&&(e=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/contact",name:"Contact",icon:"fas fa-phone"},{path:"/profile",name:"Your Profile",icon:"fas fa-user-alt"}]),e},isAuth:function(){return this.$store.getters.getStatus},userName:function(){return this.$store.getters.getUserName}},watch:{$route:function(){!0===this.isNavbar&&this.navbarHandler()}},methods:{navbarHandler:function(){var e=document.querySelector(".navbar--icon"),t=e.parentNode;t.classList.toggle("moveToLeft");var n=document.querySelector(".navbar--mobile");n.classList.toggle("navbar-show"),Array.from(t.classList).includes("moveToLeft")?this.isNavbar=!0:this.isNavbar=!1}}}),l=u,p=(n("c533"),n("2877")),f=Object(p["a"])(l,i,s,!1,null,"0e57d710",null),m=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("section",{staticClass:"footer__links container"},[n("div",{staticClass:"footer__container"},[e._m(0),n("div",{staticClass:"email__box mb-2"},[n("h3",{staticClass:"email__box__title mb-2"},[e._v("Be in the know")]),n("p",[e._v("Promotions, new products, and sales directly to your mailbox")]),n("div",{staticClass:"email__form"},[n("input",{staticClass:"email__input",attrs:{type:"text",placeholder:"Your email"}}),n("m-button",{staticClass:"btn"},[n("span",[e._v("Subscribe")])])],1)])])]),e._m(1)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"links mb-2"},[n("h3",{staticClass:"links__title mb-2"},[e._v("Links")]),n("ul",{staticClass:"links__list"},[n("li",[e._v("Search")]),n("li",[e._v("Our Story")]),n("li",[e._v("News")]),n("li",[e._v("Contact Us")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"footer__copyright container"},[n("div",{staticClass:"footer__container"},[e._v("Copyright © Made by Jason")])])}],S=n("8bd7"),g={name:"AppFooter",components:{mButton:S["a"]}},v=g,b=(n("f7b0"),Object(p["a"])(v,d,h,!1,null,"6176f4d9",null)),_=b.exports,O=n("0178"),w={name:"App",data:function(){return{isLoggedOut:!1}},computed:{showModal:function(){return this.$store.getters.getShowModal}},components:{AppHeader:m,AppFooter:_,AppModal:O["a"]},created:function(){this.$store.getters.isLoggedIn,this.checkLogInStatus()},methods:{checkLogInStatus:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("INIT_AUTH");case 2:n=t.sent,r=n.logout,r&&(e.isLoggedOut=!0,e.$store.dispatch("USER_LOGOUT"));case 5:case"end":return t.stop()}}),t)})))()}}},I=w,C=(n("d399"),n("b0a0"),n("e6a6"),Object(p["a"])(I,a,c,!1,null,null,null)),N=C.exports,k=n("8c4f"),y=(n("b0c0"),n("d3b7"),function(){return n.e("HomeScreen").then(n.bind(null,"7079"))}),x=function(){return n.e("ProductScreen").then(n.bind(null,"8deb"))},R=function(){return n.e("CartScreen").then(n.bind(null,"c9b9"))},A=function(){return n.e("LoginScreen").then(n.bind(null,"a526"))},E=function(){return n.e("SignupScreen").then(n.bind(null,"438b"))},T=function(){return n.e("NotFoundScreen").then(n.bind(null,"2e36"))},P=function(){return n.e("ProfileScreen").then(n.bind(null,"0144"))},L=function(){return n.e("ContactScreen").then(n.bind(null,"c379"))},j=function(){return n.e("ShippingInfoScreen").then(n.bind(null,"cf61"))},M=function(){return n.e("PaymentScreen").then(n.bind(null,"6f9e"))},H=function(){return n.e("ReviewOrderScreen").then(n.bind(null,"66d2"))},J=new k["a"]({mode:"history",routes:[{path:"/",name:"homeScreen",component:y},{path:"/product/:id?",name:"productScreen",component:x},{path:"/cart",name:"cartScreen",component:R,meta:{isAuth:!1}},{path:"/login",name:"loginScreen",component:A},{path:"/signup",name:"signUpScreen",component:E},{path:"/profile",name:"profileScreen",component:P,meta:{isAuth:!1}},{path:"/contact",name:"contactScreen",component:L},{path:"/shipping",name:"shippingInfoScreen",component:j,meta:{isAuth:!1}},{path:"/payment",name:"paymentScreen",component:M,meta:{isAuth:!1}},{path:"/order",name:"reviewOrderScreen",component:H,meta:{isAuth:!1}},{path:"*",name:"notFoundScreen",component:T}]});J.beforeEach((function(e,t,n){if("cartScreen"===e.name||"profileScreen"===e.name){var r=JSON.parse(localStorage.getItem("token"));r?n():n({name:"loginScreen",query:{redirect:"cart"}})}else n()})),J.afterEach((function(){window.scrollTo(0,0)}));var U=J,F=n("5530"),$=n("bc3a"),D=n.n($);n("4160"),n("b64b"),n("07ac"),n("159b");function B(e){return G.apply(this,arguments)}function G(){return G=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object.keys(t)[0],r=Object.values(t)[0],e.next=4,localStorage.setItem(n,JSON.stringify(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function z(e){return q.apply(this,arguments)}function q(){return q=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var Q=function(){return{status:"",userName:JSON.parse(localStorage.getItem("userName"))||"",token:JSON.parse(localStorage.getItem("token"))||"",showModal:!1}},Y={isLoggedIn:function(e){return!!e.token&&(e.status="authenticated",!0)},getStatus:function(e){return e.status},getUserName:function(e){return e.userName},getShowModal:function(e){return e.showModal}},K={SIGN_UP:function(e,t){e.status="authenticated",e.userName=t.username},SET_USER:function(e,t){e.status="authenticated",e.userName=t.username},REMOVE_TOKEN:function(e){e.status=""},SHOW_MODAL:function(e,t){e.showModal=t}},V={SIGN_UP:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,D.a.post("/api/users",t);case 4:return a=n.sent,c=a.data,o=c.token,i=c.user,s=c.cartId,u=void 0===s?1:s,l=i.username,n.next=10,B([{token:o},{user:i},{userName:l},{cartId:u}]);case 10:return r("SIGN_UP",i),n.abrupt("return",{result:c});case 14:return n.prev=14,n.t0=n["catch"](1),n.abrupt("return",{result:n.t0.message});case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))()},USER_LOGIN:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,l,p,f,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,D.a.post("/api/users/login",Object(F["a"])({},t));case 4:return a=n.sent,c=a.data,o=c.token,i=c.user,s=c.cartId,u=void 0===s?1:s,l=i.username,p=i.email,f=Date.now(),n.next=12,B([{token:o},{user:i},{userName:l},{cartId:u},{start:f},{email:p}]);case 12:r("SET_USER",i),n.next=19;break;case 15:return n.prev=15,n.t0=n["catch"](1),m=n.t0.response.data,n.abrupt("return",m.message);case 19:case"end":return n.stop()}}),n,null,[[1,15]])})))()},USER_LOGOUT:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,z(["token","user","cart","cartId","userName","start","checkoutForm"]);case 3:n("REMOVE_TOKEN");case 4:case"end":return t.stop()}}),t)})))()},INIT_AUTH:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,JSON.parse(localStorage.getItem("start"));case 3:if(r=t.sent,a=Date.now(),c=Math.floor((a-r)/1e3),!(c>3600&&r)){t.next=9;break}return n("SHOW_MODAL",!0),t.abrupt("return",{logout:!0});case 9:return t.abrupt("return",{logout:!1});case 10:case"end":return t.stop()}}),t)})))()}},W={state:Q,getters:Y,mutations:K,actions:V},X=(n("99af"),n("2909")),Z=function(){return{cart:JSON.parse(localStorage.getItem("cart"))||[],cartId:"",loading:!1,checkoutForm:JSON.parse(localStorage.getItem("checkoutForm"))||{}}},ee={getCart:function(e){return e.cart},getLoading:function(e){return e.loading}},te={SET_INITIAL_CART:function(e,t){e.cart=Object(X["a"])(t)},SET_CART:function(e,t){e.cart=Object(X["a"])(t.cart),e.cartId=t.cartId},SET_FORM:function(e,t){e.checkoutForm=t},UPDATE_CART:function(e,t){e.cart=Object(X["a"])(t)},LOADING:function(e,t){e.loading=t}},ne={GET_CART_ITEMS:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,JSON.parse(localStorage.getItem("token"));case 3:return r=t.sent,t.next=6,D.a.get("/api/cart",{headers:{Authorization:"Bearer ".concat(r," ")}});case 6:a=t.sent,c=a.data,c.message?n("SET_INITIAL_CART",[]):(localStorage.setItem("cart",JSON.stringify(c.cartItems)),n("SET_INITIAL_CART",c.cartItems));case 9:case"end":return t.stop()}}),t)})))()},ADD_TO_CART:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,JSON.parse(localStorage.getItem("token"));case 3:return a=n.sent,c=JSON.parse(localStorage.getItem("cart")),o=JSON.parse(localStorage.getItem("cartId")),c||(c=[]),c.push(t.product),n.next=9,B([{cart:c}]);case 9:if(1===o){n.next=17;break}return n.next=12,D.a.post("/api/cart/".concat(o),{cartItems:c},{headers:{Authorization:"Bearer ".concat(a," ")}});case 12:i=n.sent,s=i.data,r("SET_CART",{cart:c,cartId:s._id}),n.next=26;break;case 17:return n.next=19,D.a.post("/api/cart",{cartItems:c},{headers:{Authorization:"Bearer ".concat(a," ")}});case 19:return u=n.sent,l=u.data,o=l._id,localStorage.setItem("cartId",JSON.stringify(o)),n.next=25,B([{cartId:o}]);case 25:r("SET_CART",{cart:c,cartId:l._id});case 26:return n.abrupt("return",!0);case 27:case"end":return n.stop()}}),n)})))()},UPDATE_CART:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,JSON.parse(localStorage.getItem("token"));case 3:return a=n.sent,c=JSON.parse(localStorage.getItem("cart")),o=JSON.parse(localStorage.getItem("cartId")),c.forEach((function(e){e._id===t._id&&(e.purchaseQty=t.purchaseQty)})),localStorage.setItem("cart",JSON.stringify(c)),n.next=10,D.a.patch("/api/cart/".concat(o,"?productId=").concat(t._id,"&purQty=").concat(t.purchaseQty),{cartItems:c,cartId:Z.cartId},{headers:{Authorization:"Bearer ".concat(a," ")}});case 10:return r("UPDATE_CART",c),n.abrupt("return",!0);case 12:case"end":return n.stop()}}),n)})))()},REMOVE_FROM_CART:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=JSON.parse(localStorage.getItem("cartId")),n.next=4,JSON.parse(localStorage.getItem("token"));case 4:return c=n.sent,n.next=7,D.a.delete("/api/cart/".concat(a,"?productId=").concat(t),{headers:{Authorization:"Bearer ".concat(c," ")}});case 7:o=n.sent,i=o.data,localStorage.setItem("cart",JSON.stringify(i.cartItems)),r("UPDATE_CART",i.cartItems),r("LOADING",!1);case 12:case"end":return n.stop()}}),n)})))()},SET_FORM:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,JSON.parse(localStorage.getItem("cartId"));case 3:return a=n.sent,n.next=6,JSON.parse(localStorage.getItem("token"));case 6:return c=n.sent,n.next=9,D.a.post("/api/cart/".concat(a),{checkoutForm:t},{headers:{Authorization:"Bearer ".concat(c," ")}});case 9:o=n.sent,i=o.data,r("SET_FORM",i);case 12:case"end":return n.stop()}}),n)})))()}},re={state:Z,getters:ee,mutations:te,actions:ne},ae=n("2f62");r["a"].config.productionTip=!1,r["a"].use(k["a"]),r["a"].use(ae["a"]);var ce=new ae["a"].Store({modules:{auth:W,cart:re}});new r["a"]({render:function(e){return e(N)},router:U,store:ce}).$mount("#app")},7720:function(e,t,n){},"7f26":function(e,t,n){"use strict";n("7720")},"8bbe":function(e,t,n){},"8bd7":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.clickHandler(t)}}},[e._t("default",[e._v(" Button ")])],2)},a=[],c={name:"mButton",methods:{clickHandler:function(){this.$emit("clicked")}}},o=c,i=(n("d7d5"),n("2877")),s=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=s.exports},b0a0:function(e,t,n){"use strict";n("452c")},c533:function(e,t,n){"use strict";n("4414")},d399:function(e,t,n){"use strict";n("e24d")},d7d5:function(e,t,n){"use strict";n("8bbe")},e129:function(e,t,n){},e24d:function(e,t,n){},e6a6:function(e,t,n){"use strict";n("e129")},f7b0:function(e,t,n){"use strict";n("0c59")}});
//# sourceMappingURL=app.48c234eb.js.map
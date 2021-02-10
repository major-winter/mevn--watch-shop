(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({CartScreen:"CartScreen",HomeScreen:"HomeScreen",LoginScreen:"LoginScreen",NotFoundScreen:"NotFoundScreen",ProductScreen:"ProductScreen",ProfileScreen:"ProfileScreen",SignupScreen:"SignupScreen"}[e]||e)+"."+{CartScreen:"a127662a",HomeScreen:"a31b4b6a",LoginScreen:"6192f76b",NotFoundScreen:"7cad7775",ProductScreen:"24c2e920",ProfileScreen:"bb9bf3d0",SignupScreen:"ab696d6c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={CartScreen:1,HomeScreen:1,LoginScreen:1,ProductScreen:1,ProfileScreen:1,SignupScreen:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({CartScreen:"CartScreen",HomeScreen:"HomeScreen",LoginScreen:"LoginScreen",NotFoundScreen:"NotFoundScreen",ProductScreen:"ProductScreen",ProfileScreen:"ProfileScreen",SignupScreen:"SignupScreen"}[e]||e)+"."+{CartScreen:"95603a58",HomeScreen:"6005af7a",LoginScreen:"3a275f04",NotFoundScreen:"31d6cfe0",ProductScreen:"42243206",ProfileScreen:"298ad3b5",SignupScreen:"5b2554b0"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c59":function(e,t,n){},3356:function(e,t,n){"use strict";n("9af7")},"452c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("main",[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("app-footer")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[e._m(0),n("nav",{staticClass:"navbar--mobile"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"navbar__list-items"},e._l(e.mobileNavMenu,(function(t){return n("li",{key:t.id,staticClass:"navbar__item"},[n("router-link",{attrs:{to:t.path}},[n("span",{on:{click:e.navbarHandler}},[n("i",{class:t.icon}),e._v(" "+e._s(t.name)+" ")])])],1)})),0)])]),n("nav",{staticClass:"nav"},[n("div",{staticClass:"container d-flex nav--mobile"},[n("div",{staticClass:"mobile-icon",on:{click:e.navbarHandler}},[e.isNavbar?n("i",{staticClass:"fas fa-times navbar--icon"}):n("i",{staticClass:"fas fa-bars navbar--icon"})]),n("div",{staticClass:"logo"},[n("router-link",{staticClass:"white",attrs:{to:"/",tag:"div"}},[n("h1",[e._v("OMEGA")])])],1),e.isAuth?n("div",[n("router-link",{staticClass:"white",attrs:{to:"/profile",tag:"div"}},[e._v(" Hello, "+e._s(e.userName)+" ")])],1):e._e(),n("router-link",{staticClass:"white",attrs:{to:"/cart",tag:"div"}},[n("i",{staticClass:"fas fa-shopping-cart"})])],1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"top"},[n("div",{staticClass:"container"})])}],s=(n("a630"),n("caad"),n("2532"),n("3ca3"),{name:"AppHeader",data:function(){return{isNavbar:!1,scrollPositionY:0,loggedIn:null}},computed:{mobileNavMenu:function(){var e=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/Contact",name:"Contact",icon:"fas fa-phone"},{path:"/login",name:"Log in",icon:"fas fa-user-alt"}];return this.isAuth&&(e=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/contact",name:"Contact",icon:"fas fa-phone"},{path:"/profile",name:"Your Profile",icon:"fas fa-user-alt"}]),e},isAuth:function(){return this.$store.getters.getStatus},userName:function(){return this.$store.getters.getUserName}},watch:{$route:function(){!0===this.isNavbar&&this.navbarHandler()}},methods:{navbarHandler:function(){var e=document.querySelector(".navbar--icon"),t=e.parentNode;t.classList.toggle("moveToLeft");var n=document.querySelector(".navbar--mobile");n.classList.toggle("navbar-show"),Array.from(t.classList).includes("moveToLeft")?this.isNavbar=!0:this.isNavbar=!1},test:function(){console.log("testing")}}}),u=s,l=(n("7edd"),n("3356"),n("2877")),f=Object(l["a"])(u,o,i,!1,null,"af95537a",null),p=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("section",{staticClass:"footer__links container"},[n("div",{staticClass:"footer__container"},[e._m(0),n("div",{staticClass:"email__box mb-2"},[n("h3",{staticClass:"email__box__title mb-2"},[e._v("Be in the know")]),n("p",[e._v("Promotions, new products, and sales directly to your mailbox")]),n("div",{staticClass:"email__form"},[n("input",{staticClass:"email__input",attrs:{type:"text",placeholder:"Your email"}}),n("m-button",{staticClass:"btn"},[n("span",[e._v("Subscribe")])])],1)])])]),e._m(1)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"links mb-2"},[n("h3",{staticClass:"links__title mb-2"},[e._v("Links")]),n("ul",{staticClass:"links__list"},[n("li",[e._v("Search")]),n("li",[e._v("Our Story")]),n("li",[e._v("News")]),n("li",[e._v("Contact Us")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"footer__copyright container"},[n("div",{staticClass:"footer__container"},[e._v("Copyright © Made by Jason")])])}],h=n("8bd7"),g={name:"AppFooter",components:{mButton:h["a"]}},S=g,v=(n("f7b0"),Object(l["a"])(S,m,d,!1,null,"6176f4d9",null)),b=v.exports,_={name:"App",components:{AppHeader:p,AppFooter:b},created:function(){this.$store.getters.isLoggedIn}},C=_,O=(n("d399"),n("b0a0"),Object(l["a"])(C,a,c,!1,null,null,null)),w=O.exports,N=n("8c4f"),I=(n("b0c0"),n("d3b7"),function(){return n.e("HomeScreen").then(n.bind(null,"7079"))}),y=function(){return n.e("ProductScreen").then(n.bind(null,"8deb"))},k=function(){return n.e("CartScreen").then(n.bind(null,"c9b9"))},x=function(){return n.e("LoginScreen").then(n.bind(null,"a526"))},E=function(){return n.e("SignupScreen").then(n.bind(null,"438b"))},A=function(){return n.e("NotFoundScreen").then(n.bind(null,"2e36"))},T=function(){return n.e("ProfileScreen").then(n.bind(null,"0144"))},R=function(){return n.e("ProfileScreen").then(n.bind(null,"c379"))},P=new N["a"]({mode:"history",routes:[{path:"/",name:"homeScreen",component:I},{path:"/product/:id?",name:"productScreen",component:y},{path:"/cart",name:"cartScreen",component:k,meta:{isAuth:!1}},{path:"/login",name:"loginScreen",component:x},{path:"/signup",name:"signUpScreen",component:E},{path:"/profile",name:"profileScreen",component:T,meta:{isAuth:!1}},{path:"/contact",name:"contactScreen",component:R},{path:"*",name:"notFoundScreen",component:A}]});P.beforeEach((function(e,t,n){if("cartScreen"===e.name||"profileScreen"===e.name){var r=JSON.parse(localStorage.getItem("token"));r?n():n({name:"loginScreen",query:{redirect:"cart"}})}else n()})),P.afterEach((function(){window.scrollTo(0,0)}));var j=P,L=(n("96cf"),n("1da1")),J=n("bc3a"),H=n.n(J);n("4160"),n("b64b"),n("07ac"),n("159b");function U(e){return M.apply(this,arguments)}function M(){return M=Object(L["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(L["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object.keys(t)[0],r=Object.values(t)[0],e.next=4,localStorage.setItem(n,JSON.stringify(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function $(e){return B.apply(this,arguments)}function B(){return B=Object(L["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(L["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}var F=function(){return{status:"",userName:JSON.parse(localStorage.getItem("userName"))||"",token:JSON.parse(localStorage.getItem("token"))||""}},D={isLoggedIn:function(e){return!!e.token&&(e.status="authenticated",!0)},getStatus:function(e){return e.status},getUserName:function(e){return e.userName}},G={SIGN_UP:function(e,t){e.status="authenticated",e.userName=t.username},SET_USER:function(e,t){e.status="authenticated",e.userName=t.username},REMOVE_TOKEN:function(e){e.status=""}},q={SIGN_UP:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,H.a.post("/api/users",t);case 4:return a=n.sent,c=a.data,o=c.token,i=c.user,s=i.username,n.next=10,U([{token:o},{user:i},{userName:s}]);case 10:r("SIGN_UP",i),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()},USER_LOGIN:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,H.a.post("/api/users/login",t);case 4:return a=n.sent,c=a.data,o=c.token,i=c.user,s=i.username,n.next=10,U([{token:o},{user:i},{userName:s}]);case 10:r("SET_USER",i),n.next=17;break;case 13:return n.prev=13,n.t0=n["catch"](1),u=n.t0.response.data,n.abrupt("return",u.message);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})))()},USER_LOGOUT:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,$(["token","user","cart","cartId","userName"]);case 3:n("REMOVE_TOKEN");case 4:case"end":return t.stop()}}),t)})))()}},z={namespace:!0,state:F,getters:D,mutations:G,actions:q},Q=(n("99af"),n("2909")),K=function(){return{cart:JSON.parse(localStorage.getItem("cart"))||[],cartId:"",loading:!1}},V={getCart:function(e){return e.cart},getLoading:function(e){return e.loading}},Y={SET_INITIAL_CART:function(e,t){e.cart=Object(Q["a"])(t)},SET_CART:function(e,t){e.cart=Object(Q["a"])(t.cart),e.cartId=t.cartId},UPDATE_CART:function(e,t){e.cart=Object(Q["a"])(t)},LOADING:function(e,t){e.loading=t}},W={GET_CART_ITEMS:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,JSON.parse(localStorage.getItem("token"));case 3:return r=t.sent,t.next=6,H.a.get("/api/cart",{headers:{Authorization:"Bearer ".concat(r," ")}});case 6:a=t.sent,c=a.data,c.message?n("SET_INITIAL_CART",[]):(localStorage.setItem("cart",JSON.stringify(c.cartItems)),n("SET_INITIAL_CART",c.cartItems));case 9:case"end":return t.stop()}}),t)})))()},ADD_TO_CART:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,JSON.parse(localStorage.getItem("token"));case 3:return a=n.sent,c=JSON.parse(localStorage.getItem("cart")),o=JSON.parse(localStorage.getItem("cartId")),c||(c=[]),c.push(t.product),n.next=9,U([{cart:c}]);case 9:if(!o){n.next=15;break}return n.next=12,H.a.post("/api/cart/".concat(o),{cartItems:c},{headers:{Authorization:"Bearer ".concat(a," ")}});case 12:i=n.sent,s=i.data,r("SET_CART",{cart:c,cartId:s._id});case 15:if(o){n.next=25;break}return n.next=18,H.a.post("/api/cart",{cartItems:c},{headers:{Authorization:"Bearer ".concat(a," ")}});case 18:return u=n.sent,l=u.data,o=l._id,localStorage.setItem("cartId",JSON.stringify(o)),n.next=24,U([{cartId:o}]);case 24:r("SET_CART",{cart:c,cartId:l._id});case 25:case"end":return n.stop()}}),n)})))()},UPDATE_CART:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,JSON.parse(localStorage.getItem("token"));case 3:return a=n.sent,c=JSON.parse(localStorage.getItem("cart")),o=JSON.parse(localStorage.getItem("cartId")),c.forEach((function(e){e._id===t._id&&(e.purchaseQty=t.purchaseQty)})),localStorage.setItem("cart",JSON.stringify(c)),n.next=10,H.a.patch("/api/cart/".concat(o,"?productId=").concat(t._id,"&purQty=").concat(t.purchaseQty),{cartItems:c,cartId:K.cartId},{headers:{Authorization:"Bearer ".concat(a," ")}});case 10:r("UPDATE_CART",c);case 11:case"end":return n.stop()}}),n)})))()},REMOVE_FROM_CART:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=JSON.parse(localStorage.getItem("cartId")),n.next=4,JSON.parse(localStorage.getItem("token"));case 4:return c=n.sent,n.next=7,H.a.delete("/api/cart/".concat(a,"?productId=").concat(t),{headers:{Authorization:"Bearer ".concat(c," ")}});case 7:o=n.sent,i=o.data,localStorage.setItem("cart",JSON.stringify(i.cartItems)),r("UPDATE_CART",i.cartItems),r("LOADING",!1);case 12:case"end":return n.stop()}}),n)})))()}},X={state:K,getters:V,mutations:Y,actions:W},Z=n("2f62");r["a"].config.productionTip=!1,r["a"].use(N["a"]),r["a"].use(Z["a"]);var ee=new Z["a"].Store({modules:{auth:z,cart:X}});new r["a"]({render:function(e){return e(w)},router:j,store:ee}).$mount("#app")},"7edd":function(e,t,n){"use strict";n("b58e")},"8bbe":function(e,t,n){},"8bd7":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.clickHandler(t)}}},[e._t("default",[e._v(" Button ")])],2)},a=[],c={name:"mButton",methods:{clickHandler:function(){this.$emit("clicked")}}},o=c,i=(n("d7d5"),n("2877")),s=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=s.exports},"9af7":function(e,t,n){},b0a0:function(e,t,n){"use strict";n("452c")},b58e:function(e,t,n){},d399:function(e,t,n){"use strict";n("e24d")},d7d5:function(e,t,n){"use strict";n("8bbe")},e24d:function(e,t,n){},f7b0:function(e,t,n){"use strict";n("0c59")}});
//# sourceMappingURL=app.9c710fcb.js.map
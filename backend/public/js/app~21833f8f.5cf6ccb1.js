(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~21833f8f"],{"0178":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__card text--center"},["success"===t.type?e("section",{staticClass:"modal__card--icon success"},[t._m(0)]):e("section",{staticClass:"modal__card--icon"},[t._m(1)]),e("section",{staticClass:"modal__card--text"},[e("h2",[t._v("Notes!")]),e("p",{staticClass:"mt-1"},[t._t("default",[t._v(" Your login session has expired. Please log in again! ")])],2),e("button",{staticClass:"modal__btn--danger mt-1",on:{click:function(a){return t.$emit("close")}}},[t._v(" Close ")]),t.route?e("button",{staticClass:"modal__btn--success mt-1",on:{click:function(a){return t.$emit("routeHandler")}}},[t._t("router")],2):t._e()])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("i",{staticClass:"fas fa-check-circle"}),t._v(" Success ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("i",{staticClass:"fas fa-exclamation-triangle icon"})])}],i={name:"AppModal",props:{route:{type:Boolean,default:!1},type:{type:String}}},c=i,o=(e("ab31"),e("2877")),r=Object(o["a"])(c,s,n,!1,null,"c4258bfa",null);a["a"]=r.exports},"119e":function(t,a,e){},1324:function(t,a,e){"use strict";e("ae99")},"3f6f":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header"},[t._m(0),e("nav",{staticClass:"navbar--mobile"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"navbar__list-items"},t._l(t.mobileNavMenu,(function(a){return e("li",{key:a.id,staticClass:"navbar__item"},[e("router-link",{attrs:{to:a.path}},[e("span",{on:{click:t.navbarHandler}},[e("i",{class:a.icon}),t._v(" "+t._s(a.name)+" ")])])],1)})),0)])]),e("nav",{staticClass:"nav"},[e("div",{staticClass:"container d-flex nav--mobile"},[e("div",{staticClass:"mobile-icon",on:{click:t.navbarHandler}},[t.isNavbar?e("i",{staticClass:"fas fa-times navbar--icon"}):e("i",{staticClass:"fas fa-bars navbar--icon"})]),e("div",{staticClass:"logo"},[e("router-link",{staticClass:"white text--decoration--none",attrs:{to:"/"}},[e("h1",[e("i",{staticClass:"far fa-clock"})])])],1),t.isAuth?e("div",[e("router-link",{staticClass:"white text--decoration--none",attrs:{to:"/profile"}},[t._v(" Hello, "+t._s(t.userName)+" ")])],1):t._e(),e("router-link",{staticClass:"white",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-shopping-cart"})])],1)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"top"},[e("div",{staticClass:"container"})])}],i=(e("a630"),e("caad"),e("2532"),e("3ca3"),{name:"AppHeader",data:function(){return{isNavbar:!1,scrollPositionY:0,loggedIn:null}},computed:{mobileNavMenu:function(){var t=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/Contact",name:"Contact",icon:"fas fa-phone"},{path:"/login",name:"Log in",icon:"fas fa-user-alt"}];return this.isAuth&&(t=[{path:"/",name:"Home",icon:"fas fa-home"},{path:"/contact",name:"Contact",icon:"fas fa-phone"},{path:"/profile",name:"Your Profile",icon:"fas fa-user-alt"}]),t},isAuth:function(){return this.$store.getters.getStatus},userName:function(){return this.$store.getters.getUserName}},watch:{$route:function(){!0===this.isNavbar&&this.navbarHandler()}},methods:{navbarHandler:function(){var t=document.querySelector(".navbar--icon"),a=t.parentNode;a.classList.toggle("moveToLeft");var e=document.querySelector(".navbar--mobile");e.classList.toggle("navbar-show"),Array.from(a.classList).includes("moveToLeft")?this.isNavbar=!0:this.isNavbar=!1}}}),c=i,o=(e("1324"),e("2877")),r=Object(o["a"])(c,s,n,!1,null,"3938559a",null);a["a"]=r.exports},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=e("3dfd"),i=e("8c4f"),c=e("641b"),o=e("c7d4"),r=e("499b"),l=e("2f62");s["a"].config.productionTip=!1,s["a"].use(i["a"]),s["a"].use(l["a"]);var u=new l["a"].Store({modules:{auth:o["a"],cart:r["a"]}});new s["a"]({render:function(t){return t(n["a"])},router:c["a"],store:u}).$mount("#app")},"8bbe":function(t,a,e){},"8bd7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.clickHandler(a)}}},[t._t("default",[t._v(" Button ")])],2)},n=[],i={name:"mButton",methods:{clickHandler:function(){this.$emit("clicked")}}},c=i,o=(e("d7d5"),e("2877")),r=Object(o["a"])(c,s,n,!1,null,null,null);a["a"]=r.exports},ab31:function(t,a,e){"use strict";e("119e")},ae99:function(t,a,e){},d7d5:function(t,a,e){"use strict";e("8bbe")}}]);
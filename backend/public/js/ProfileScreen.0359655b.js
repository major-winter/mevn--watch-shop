(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProfileScreen"],{"0144":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile mt-1 page"},[s("div",{staticClass:"container text--center"},[s("h1",[t._v("Hello "+t._s(t.user.username))]),s("ul",{staticClass:"profile__list-items"},[s("li",[s("span",[t._v("Email: ")]),s("span",[t._v(t._s(t.user.email))])]),s("li",[s("m-button",{staticClass:"mt-1",on:{clicked:t.signOutHandler}},[s("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Sign Out ")])],1)])])])},n=[],i=s("8bd7"),c={name:"ProfileScreen",data:function(){return{user:{}}},components:{mButton:i["a"]},created:function(){this.getUserName()},methods:{getUserName:function(){JSON.parse(localStorage.getItem("user"))&&(this.user=JSON.parse(localStorage.getItem("user")))},signOutHandler:function(){this.$store.dispatch("USER_LOGOUT"),this.$router.push("/")}}},r=c,l=(s("991c"),s("2877")),o=Object(l["a"])(r,a,n,!1,null,"e028c11a",null);e["default"]=o.exports},"3b60":function(t,e,s){},"991c":function(t,e,s){"use strict";s("3b60")},ad17:function(t,e,s){},c379:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact mt-2"},[s("div",{staticClass:"container contact__form"},[s("h1",{staticClass:"mb-1"},[t._v("Contact Me")]),s("p",[s("i",{staticClass:"fas fa-phone-square-alt"}),s("a",{staticClass:"contact__link",attrs:{href:"tel:+84906802954"}},[t._v(" Phone: 0906-802-954")])]),s("p",[s("i",{staticClass:"fab fa-facebook"}),t._v(" Facebook")]),s("p",[s("i",{staticClass:"fab fa-twitter"}),t._v(" Twitter")]),s("p",[s("i",{staticClass:"fab fa-whatsapp"}),t._v(" Whatsapp")])])])}],i={},c=i,r=(s("ed47"),s("2877")),l=Object(r["a"])(c,a,n,!1,null,"0b290342",null);e["default"]=l.exports},ed47:function(t,e,s){"use strict";s("ad17")}}]);
//# sourceMappingURL=ProfileScreen.0359655b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SignupScreen~102bdae1"],{"3ab4":function(e,n,a){},"438b":function(e,n,a){"use strict";a.r(n);var r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"signup"},[a("transition",{attrs:{name:"slide-fade"}},[e.needsFillIn?a("app-modal",{staticClass:"text--danger",on:{close:function(n){e.needsFillIn=!e.needsFillIn}}},[e._v(" A problem has occurred. Please check again! ")]):e._e()],1),a("app-form",{attrs:{"form-title":"Sign Up","form-data":e.formData,value:e.signupForm},on:{onInput:function(n){return e.inputHandler(n,"signupForm")}}},[a("m-button",{staticClass:"signup__btn",on:{clicked:e.signupHandler}},[e._v("Sign Up")])],1)],1)},t=[],s=(a("96cf"),a("1da1")),o=a("6add"),i=a("8bd7"),l=a("0178"),u=a("1a86"),p={name:"SignupScreen",mixins:[u["a"]],data:function(){return{formData:[{label:"Name",placeholder:"Enter your name"},{label:"Email",placeholder:"Enter your email"},{label:"Password",placeholder:"Enter your password",type:"password"},{label:"Address",placeholder:"Enter your address"}],signupForm:{name:"",password:"",email:"",address:""},error:"",needsFillIn:!1}},components:{AppForm:o["a"],mButton:i["a"],AppModal:l["a"]},methods:{signupHandler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.signupForm,n.next=3,e.$store.dispatch("SIGN_UP",a);case 3:if(r=n.sent,t=r.result,"R"!=t[0]){n.next=7;break}return n.abrupt("return",e.needsFillIn=!0);case 7:e.$router.push({path:"/"});case 8:case"end":return n.stop()}}),n)})))()}}},c=p,d=(a("82a1"),a("2877")),m=Object(d["a"])(c,r,t,!1,null,"4ca2f5d6",null);n["default"]=m.exports},"82a1":function(e,n,a){"use strict";a("3ab4")}}]);
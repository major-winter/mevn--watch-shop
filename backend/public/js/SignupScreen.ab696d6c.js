(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SignupScreen"],{"0bd6":function(e,t,n){},"1fba":function(e,t,n){"use strict";n("557c")},"438b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup mt-2"},[n("app-form",{attrs:{"form-title":"Sign Up","form-data":e.formData},on:{input:function(t){return e.inputHandler(t,"signupForm")},enter:e.signupHandler}},[n("m-button",{staticClass:"signup__btn",on:{clicked:e.signupHandler}},[e._v("Sign Up")])],1)],1)},r=[],s=(n("96cf"),n("1da1")),i=n("6add"),o=n("8bd7"),u=n("900f"),l={name:"SignupScreen",mixins:[u["a"]],data:function(){return{formData:[{label:"Name",placeholder:"Enter your name"},{label:"Email",placeholder:"Enter your email"},{label:"Password",placeholder:"Enter your password",type:"password"},{label:"Address",placeholder:"Enter your address"}],signupForm:{username:"",password:"",email:"",address:""}}},components:{AppForm:i["a"],mButton:o["a"]},methods:{signupHandler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.signupForm,e.$store.dispatch("SIGN_UP",n),e.$router.push({path:"/"});case 3:case"end":return t.stop()}}),t)})))()}}},c=l,p=(n("beae"),n("2877")),d=Object(p["a"])(c,a,r,!1,null,"10de1630",null);t["default"]=d.exports},"557c":function(e,t,n){},"6add":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form--title"},[n("h1",[e._v(e._s(e.formTitle))])]),n("div",{staticClass:"form--data"},e._l(e.formData,(function(t){return n("span",{key:t.index},[n("label",{attrs:{for:""}},[e._v(e._s(t.label)+": ")]),n("input",{staticClass:"mb-1 form--data__input",attrs:{type:t.type?t.type:"text",name:t.label.toLowerCase(),placeholder:t.placeholder,autocomplete:"on"},on:{input:function(t){return e.$emit("input",t.target)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("enter")}}})])})),0),e._t("default")],2)])},r=[],s={name:"AppForm",props:{formData:{type:Array,default:function(){return[]}},formTitle:{type:String,default:"Login"},value:{type:String}}},i=s,o=(n("1fba"),n("2877")),u=Object(o["a"])(i,a,r,!1,null,"09b1e576",null);t["a"]=u.exports},"900f":function(e,t,n){"use strict";n("b0c0");t["a"]={methods:{qtySelected:function(e){this.qty=e,console.log(this.qty,"from mixin")},inputHandler:function(e,t){switch(e.name){case"name":this.signupForm.username=e.value;break;case"email":"signupForm"===t&&(this.signupForm.email=e.value),"loginForm"===t&&(this.loginForm.email=e.value);break;case"password":"signupForm"===t&&(this.signupForm.password=e.value),"loginForm"===t&&(this.loginForm.password=e.value);break;case"address":this.signupForm.address=e.value;break;default:break}}}}},beae:function(e,t,n){"use strict";n("0bd6")}}]);
//# sourceMappingURL=SignupScreen.ab696d6c.js.map
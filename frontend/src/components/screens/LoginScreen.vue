<template>
  <div class="login mt-2">
    <app-form :form-data="formData" @input="inputHandler($event, 'loginForm')">
      <m-button class="mt-1 form--btn" @clicked="loginHandler">LOGIN</m-button>
      <div class="signup--link mt-1">
        <p>
          Not a member?
          <router-link to="/signup" tag="p" class="link"
            >Sign up now</router-link
          >
        </p>
      </div>
    </app-form>
  </div>
</template>

<script>
import AppForm from "../ui/AppForm";
import mButton from "../ui/Button";
import mixins from "../../mixins/getQtyMixins";
import { USER_LOGIN } from "../../constants/authConstants";
// import axios from "axios";

export default {
  name: "LoginScreen",
  mixins: [mixins],

  data() {
    return {
      formData: [
        { label: "Email", placeholder: "Enter your email", type: "text" },
        {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
      ],

      loginForm: {
        email: "",
        password: "",
      },
      store: null,
    };
  },

  components: {
    AppForm,
    mButton,
  },

  created() {
    this.store = this.$store;
  },

  methods: {
    async loginHandler() {
      if (this.loginForm.email === "" || this.loginForm.password === "") {
        return alert("Fill in stupid head");
      }
      const requestBody = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };

      await this.store.dispatch(USER_LOGIN, requestBody);
      await this.store.dispatch("GET_CART_ITEMS");

      const redirectTo = window.location.search.split("=")[1];
      if (this.store.getters.getStatus && redirectTo) {
        this.$router.push({ path: redirectTo });
      } else {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style scoped>
</style>
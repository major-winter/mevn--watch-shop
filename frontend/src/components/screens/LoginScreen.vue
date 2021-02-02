<template>
  <div class="login mt-2">
    <app-form :form-data="formData" @input="inputHandler($event, 'loginForm')">
      <m-button class="mt-1 form--btn" @clicked="loginHandler">LOGIN</m-button>
      <div class="signup--link">
        <p>
          Not a member.
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
    };
  },

  components: {
    AppForm,
    mButton,
  },

  methods: {
    loginHandler() {
      console.log(this.loginForm);
    },
  },
};
</script>

<style scoped>
</style>
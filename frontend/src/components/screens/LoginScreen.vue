<template>
  <div class="login">
    <app-modal
      v-if="needsFillIn"
      @close="needsFillIn = !needsFillIn"
      class="text--danger"
      >Email and Password can't be empty</app-modal
    >

    <app-modal
      v-if="error"
      class="text--danger text--center text--bold"
      @close="error = !error"
    >
      {{ error }}</app-modal
    >

    <app-form
      :form-data="formData"
      :value="loginForm"
      @onInput="inputHandler($event, 'loginForm')"
    >
      <m-button class="mt-1 form--btn" @clicked="loginHandler">
        <span v-if="isLoggingIn">Logging In...</span>
        <span v-else>LOGIN</span>
      </m-button>

      <div class="signup--link mt-1">
        <p>
          <span> Not a member? </span>
          <span>
            <router-link to="/signup" class="link">Sign up now</router-link>
          </span>
        </p>
      </div>
    </app-form>
  </div>
</template>

<script>
import AppForm from "../ui/AppForm";
import mButton from "../ui/Button";
import AppModal from "../ui/AppModal";
import mixins from "../../mixins/getQtyMixins";
import { USER_LOGIN } from "../../constants/authConstants";

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
      error: "",
      needsFillIn: false,
      isLoggingIn: false,
    };
  },

  components: {
    AppForm,
    mButton,
    AppModal,
  },

  created() {
    this.store = this.$store;
    this.getUserEmail();
  },

  methods: {
    async loginHandler() {
      this.isLoggingIn = true;
      if (this.loginForm.email === "" || this.loginForm.password === "") {
        return (this.needsFillIn = true);
      }

      const requestBody = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };

      const data = await this.store.dispatch(USER_LOGIN, requestBody);

      if (data) {
        return (this.error = data);
      }

      await this.store.dispatch("GET_CART_ITEMS");
      const redirectTo = window.location.search.split("=")[1];
      if (this.store.getters.getStatus && redirectTo) {
        this.isLoggingIn = false;
        this.$router.push({ path: redirectTo });
      } else {
        this.isLoggingIn = false;
        this.$router.push({ path: "/" });
      }
    },

    async getUserEmail() {
      const email = await JSON.parse(localStorage.getItem("email"));
      if (email) {
        this.loginForm.email = email;
      }
    },
  },
};
</script>

<style scoped>
</style>
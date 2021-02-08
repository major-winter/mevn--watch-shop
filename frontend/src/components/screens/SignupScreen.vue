<template>
  <div class="signup mt-2">
    <app-form
      form-title="Sign Up"
      :form-data="formData"
      @input="inputHandler($event, 'signupForm')"
      @enter="signupHandler"
    >
      <m-button class="signup__btn" @clicked="signupHandler">Sign Up</m-button>
    </app-form>
  </div>
</template>

<script>
import AppForm from "../ui/AppForm";
import mButton from "../ui/Button";
import mixins from "../../mixins/getQtyMixins";

export default {
  name: "SignupScreen",

  mixins: [mixins],
  data() {
    return {
      formData: [
        { label: "Name", placeholder: "Enter your name" },
        { label: "Email", placeholder: "Enter your email" },
        {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
        { label: "Address", placeholder: "Enter your address" },
      ],
      signupForm: {
        username: "",
        password: "",
        email: "",
        address: "",
      },
    };
  },

  components: {
    AppForm,
    mButton,
  },

  methods: {
    async signupHandler() {
      const body = this.signupForm;
      this.$store.dispatch("SIGN_UP", body);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.signup__btn {
  background-color: #333333;
  color: #fff;
}
</style>
<template>
  <div class="checkout">
    <AppBreadcrum />
    <div class="container">
      <div class="text--center mt-1">
        <app-form
          formTitle="Shipping"
          :formData="formData"
          @onInput="inputHandler"
          :value="checkoutForm"
        >
          <m-button
            class="checkout__btn btn--bg--dark"
            @clicked="toPaymentHandler"
            >Continue to Payment</m-button
          >
        </app-form>
      </div>
    </div>
  </div>
</template>

<script>
import AppForm from "../ui/AppForm";
import AppBreadcrum from "../ui/AppBreadcrum";
import mButton from "../ui/Button";

export default {
  name: "CheckoutScreen",
  data() {
    return {
      formData: [
        {
          label: "First Name",
          placeholder: "Enter your first name",
          type: "text",
        },
        {
          label: "Last Name",
          placeholder: "Enter your last name",
          type: "text",
        },
        {
          label: "Shipping Address",
          placeholder: "Enter your address",
          type: "text",
        },

        {
          label: "Phone Number",
          placeholder: "Enter your phone number",
          type: "tel",
        },
      ],

      checkoutForm: {},
    };
  },

  components: {
    AppForm,
    AppBreadcrum,
    mButton,
  },

  created() {
    this.getCheckoutForm();
  },

  methods: {
    inputHandler(e) {
      this.checkoutForm[e.name] = e.value;
      localStorage.setItem("checkoutForm", JSON.stringify(this.checkoutForm));
    },

    async toPaymentHandler() {
      await this.$store.dispatch("SET_FORM", this.checkoutForm);
      this.$router.push({ path: "/payment" });
    },

    async getCheckoutForm() {
      const { checkoutForm } = await this.$store.dispatch("GET_CART_ITEMS");
      if (checkoutForm) {
        return (this.checkoutForm = { ...checkoutForm });
      } else {
        let existedheckoutFrom = await JSON.parse(
          localStorage.getItem("checkoutForm")
        );
        if (existedheckoutFrom) {
          return (this.checkoutForm = { ...existedheckoutFrom });
        }
        this.checkoutForm = {};
      }
    },
  },
};
</script>

<style scoped>
.checkout__btn {
  width: 100%;
}
</style>
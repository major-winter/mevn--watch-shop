<template>
  <div class="payment">
    <AppBreadcrum />
    <div class="container">
      <div class="text--center mt-1">
        <h1>Payment</h1>
      </div>

      <div class="payment__methods mt-1">
        <div class="payment__options">
          <input type="radio" checked /> Cash On Delivery
        </div>
      </div>

      <div class="mt-1">
        <m-button
          class="payment__btn btn--bg--dark"
          @clicked="toReviewOrderHandler"
          >Continue to Review Order</m-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrum from "../ui/AppBreadcrum";
import mButton from "../ui/Button";

export default {
  name: "PaymentScreen",
  components: {
    AppBreadcrum,
    mButton,
  },
  methods: {
    toReviewOrderHandler() {
      this.$router.push({ path: "/order" });
    },
  },
};
</script>

<style scoped>
.payment__methods {
  position: relative;
  border: 1px solid #333333;
  height: 4rem;
}

.payment__options {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.payment__btn {
  width: 100%;
}
</style>
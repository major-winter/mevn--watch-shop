<template>
  <div>
    <app-modal type="success" v-if="placeOrder" @close="toHomeHandler"
      >Your order will be deliveverd to you in 3-5 working days</app-modal
    >
    <AppBreadcrum />
    <div class="container">
      <div class="text--center mt-1 mb-1">
        <h1>Review Order</h1>
      </div>

      <div class="shipping__info mb-1">
        <h2>Shipping Information</h2>
        <div class="shipping__info__details mt-1">
          <span>First Name: {{ shippingInfo["first name"] }} </span>
          <span>Last Name: {{ shippingInfo["last name"] }} </span>
          <span>Phone Number: {{ shippingInfo["phone number"] }} </span>

          <span>Shipping Address: {{ shippingInfo["shipping address"] }} </span>
        </div>
      </div>

      <div class="cart__info">
        <h2>Cart Information</h2>
        <div
          v-for="item in cartItems"
          :key="item._id"
          class="item__card mb-1 mt-1"
        >
          <div class="item__img--box">
            <img :src="item.image" :alt="item.name" class="item__img" />
          </div>

          <div class="item__info">
            <span>Product Name: {{ item.name }} </span>
            <span>Product Price: ${{ item.price }}</span>
            <span>Purchase Quantity: {{ item.purchaseQty }}</span>
          </div>
        </div>

        <div class="mt-1 mb-1 pl-05 text--bold text--right">
          <span>Total: ${{ totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
        </div>
      </div>

      <m-button
        class="place--order__btn btn--bg--dark"
        @clicked="placeOrderHandler"
        >Place order</m-button
      >
    </div>
  </div>
</template>

<script>
import mButton from "../ui/Button";
import AppBreadcrum from "../ui/AppBreadcrum";
import AppModal from "../ui/AppModal";

export default {
  name: "ReviewOrderScreen",
  data() {
    return {
      cartItems: [],
      shippingInfo: {},
      totalPrice: 0,
      placeOrder: false,
    };
  },

  components: {
    mButton,
    AppBreadcrum,
    AppModal,
  },

  created() {
    this.getCartItems();
    this.getShippingInfo();
    this.getTotalPrice();
  },

  methods: {
    async getTotalPrice() {
      this.totalPrice = await JSON.parse(localStorage.getItem("totalPrice"));
    },

    async getCartItems() {
      this.cartItems = await JSON.parse(localStorage.getItem("cart"));
    },

    async getShippingInfo() {
      const { checkoutForm } = await this.$store.dispatch("GET_CART_ITEMS");
      this.shippingInfo = { ...checkoutForm };
      // this.shippingInfo = await JSON.parse(
      //   localStorage.getItem("checkoutForm")
      // );
    },

    placeOrderHandler() {
      this.placeOrder = !this.placeOrder;
    },

    toHomeHandler() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.shipping__info__details {
  border: 1px solid #aaaaaa;
  padding: 0.5rem;
}

.item__card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #aaaaaa; */
  background-color: #eeeeee;
  color: #333;
}

.item__img--box {
  width: 10rem;
  height: auto;
  padding: 1rem;
}

.item__img {
  display: inline-block;
  max-width: 8rem;
  max-height: 8rem;
  width: 100%;
  height: 100%;
  border: 1px solid #aaaaaa;
}

.item__info {
  width: 20rem;
  height: auto;
}

.item__info span,
.shipping__info__details span {
  display: block;
  line-height: 1.7rem;
  font-weight: 700;
}

.place--order__btn {
  width: 100%;
}
</style>
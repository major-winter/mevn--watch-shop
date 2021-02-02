<template>
  <div class="cart">
    <h1 class="mt-2">Your Cart</h1>
    <div class="container cart--container" v-if="products.length > 0">
      <div v-for="product in products" :key="product._id">
        <div class="product--img">
          <img :src="product.image" alt="" />
        </div>

        <div class="product--buying--info flex-between">
          <p>Price:</p>
          <p>${{ product.price }}</p>
        </div>
        <select-box
          @selected="selectHandler"
          :value="product.qty"
          :select-name="product.name"
          :product-id="product._id"
          :init-value="product.purchaseQty"
          class="select--box"
          >Quantity:</select-box
        >
      </div>

      <div class="flex-between">
        <p>Total:</p>
        <p>${{ totalPrice }}</p>
      </div>

      <div class="flex-between mt-2">
        <m-button class="btn--checkout">Check out</m-button>
        <m-button class="btn--continue" @clicked="continueShoppingHandler"
          >Continue Shopping</m-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../ui/SelectBox";
import mixins from "../../mixins/getQtyMixins";
import mButton from "../ui/Button";

export default {
  name: "CartScreen",
  mixins: [mixins],
  data() {
    return {
      products: [],
      cart: {},
      trigger: false,
      initCart: {},
    };
  },

  computed: {
    // totalPrice() {
    //   this.trigger;
    //   const priceObjArr = Object.values(this.cart);
    //   return priceObjArr.reduce((acc, cur) => {
    //     return acc + cur.price;
    //   }, 0);
    // },
  },

  components: {
    SelectBox,
    mButton,
  },

  created() {
    this.getInitCart();
  },

  mounted() {
    JSON.parse(localStorage.getItem("cart")) &&
      (this.products = JSON.parse(localStorage.getItem("cart")));

    // this.products.forEach((product) => {
    //   this.cart[product._id] = {
    //     ...this.cart[product._id],
    //     price: product.price,
    //   };
    // });
  },

  methods: {
    continueShoppingHandler() {
      this.$router.push("/");
    },

    selectHandler({ id, value }) {
      this.trigger = !this.trigger;
      const product = this.products.find((product) => product._id === id);
      let price = product.price * value;
      this.cart[id] = { ...this.cart[id], price, qty: +value };
      // localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    getInitCart() {
      // const initCart = JSON.parse(localStorage.getItem("cart"));
      // this.initCart = { ...initCart };
    },
  },
};
</script>


<style scoped>
.cart {
  text-align: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.select--box {
  width: 100%;
}

.btn--checkout {
  margin-right: 1rem;
  background: #333333;
  color: #fff;
}

.product--img img {
  max-width: 240px;
}
</style>
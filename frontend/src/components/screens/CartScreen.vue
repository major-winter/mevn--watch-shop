<template>
  <div class="cart">
    <app-loader v-if="isLoading"></app-loader>
    <h1 class="mb-1">Your Cart</h1>
    <div class="container cart--container" v-if="getCartItems.length > 0">
      <div
        v-for="product in getCartItems"
        :key="product._id"
        class="product--card mb-1"
      >
        <div class="product--img">
          <img :src="product.image" alt="" />
        </div>
        <div class="product--buying--info flex-between mb-1">
          <p>Product Name:</p>
          <p>
            <strong>{{ product.name }}</strong>
          </p>
        </div>

        <div class="product--buying--info flex-between">
          <p>Price:</p>
          <p>${{ product.price }}</p>
        </div>

        <select-box
          @selected="selectHandler"
          :value="+product.countInStock"
          :select-name="product.name"
          :product-id="product._id"
          :init-value="product.purchaseQty"
          class="select--box"
          >Quantity:
        </select-box>

        <button class="danger" :data-id="product._id">
          <i
            class="far fa-trash-alt d-inl-block remove__icon"
            @click="removeProductHandler"
          ></i>
        </button>
      </div>

      <div class="flex-between">
        <p><strong>Total:</strong></p>
        <p>${{ totalPrice }}</p>
      </div>

      <div class="flex-between mt-2">
        <m-button class="btn--checkout" @clicked="toCheckoutPage"
          >Check out</m-button
        >

        <m-button class="btn--continue" @clicked="continueShoppingHandler"
          >Continue Shopping</m-button
        >
      </div>
    </div>

    <div v-else>
      <p>
        Your Cart is empty.
        <router-link to="/" class="link">Go Shop Now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import SelectBox from "../ui/SelectBox";
import mButton from "../ui/Button";
import AppLoader from "../ui/AppLoader";

export default {
  name: "CartScreen",
  data() {
    return {
      products: [],
    };
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      let products = this.getCartItems;

      products.forEach((product) => {
        totalPrice += product.price * product.purchaseQty;
      });

      return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getCartItems() {
      return this.$store.getters.getCart;
    },

    isLoading() {
      return this.$store.getters.getLoading;
    },
  },

  components: {
    SelectBox,
    mButton,
    AppLoader,
  },

  created() {
    this.checkLogInStatus();
    this.initCart();
    this.products = this.getCartItems;
  },

  methods: {
    async initCart() {
      await this.$store.dispatch("GET_CART_ITEMS");
    },

    continueShoppingHandler() {
      this.$router.push({ path: "/" });
    },

    selectHandler({ id, purchaseQty }) {
      const targetProduct = this.products.find((product) => product._id === id);
      const product = { ...targetProduct, purchaseQty: +purchaseQty };
      this.$store.dispatch("UPDATE_CART", product);
    },

    async removeProductHandler(e) {
      this.$store.commit("LOADING", true);
      const productId = e.target.parentNode.getAttribute("data-id");
      await this.$store.dispatch("REMOVE_FROM_CART", productId);
      this.$store.commit("LOADING", false);
    },

    async checkLogInStatus() {
      const { logout } = await this.$store.dispatch("INIT_AUTH");
      if (logout) {
        this.$store.dispatch("USER_LOGOUT");
        this.$router.push("/login");
      }
    },

    toCheckoutPage() {
      this.$router.push({ path: "/shipping" });
    },
  },
};
</script>


<style scoped>
.d-inl-block {
  display: inline-block;
  padding: 0;
  margin: 0.3rem;
  vertical-align: middle;
}

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

.danger {
  background-color: rgba(251, 68, 44, 0.924);
  border: none;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 1rem;
  padding: 0;
}

.remove__icon {
  width: 2rem;
  height: auto;
}

.btn--checkout {
  margin-right: 1rem;
  background: #333333;
  color: #fff;
}

.product--card {
  border: 1px solid #c0c0c0;
  border-radius: 0.2rem;
  padding: 0.5rem;
}

.product--img img {
  max-width: 240px;
}
</style>
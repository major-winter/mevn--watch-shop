<template>
  <div class="cart mt-2">
    <h1>Your Cart</h1>
    <div class="container cart--container" v-if="products.length > 0">
      <div
        v-for="product in products"
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
          :value="+product.qty"
          :select-name="product.name"
          :product-id="product._id"
          :init-value="product.purchaseQty"
          class="select--box"
          >Quantity:</select-box
        >

        <button class="danger" :data-id="product._id">
          <i
            class="far fa-trash-alt d-inl-block"
            @click="removeProductHandler"
          ></i>
        </button>
      </div>

      <div class="flex-between">
        <p><strong>Total:</strong></p>
        <p>${{ totalPrice }}</p>
      </div>

      <div class="flex-between mt-2">
        <m-button class="btn--checkout">Check out</m-button>
        <m-button class="btn--continue" @clicked="continueShoppingHandler"
          >Continue Shopping</m-button
        >
      </div>
    </div>

    <div v-else>
      <p>
        Your Cart is empty.
        <router-link to="/">Go Shop Now</router-link>
      </p>
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
      cartItems: {},
    };
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      let products = this.getCartItems;

      products.forEach((product) => {
        totalPrice += product.price * product.purchaseQty;
      });

      return totalPrice;
    },

    getCartItems() {
      return this.$store.getters.getCart;
    },
  },

  components: {
    SelectBox,
    mButton,
  },

  mounted() {
    this.products = this.getCartItems;
  },

  methods: {
    continueShoppingHandler() {
      this.$router.push({ path: "/" });
    },

    selectHandler({ id, purchaseQty }) {
      const targetProduct = this.products.find((product) => product._id === id);
      const product = { ...targetProduct, purchaseQty: +purchaseQty };
      this.$store.dispatch("UPDATE_CART", product);
    },

    removeProductHandler(e) {
      const productId = e.target.parentNode.getAttribute("data-id");
      console.log(productId);
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
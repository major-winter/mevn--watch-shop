<template>
  <div class="product--screen">
    <app-loader v-if="isLoading"></app-loader>
    <div class="product--screen__container" v-else>
      <div class="product--screen__details">
        <div class="product--screen__details--img">
          <img :src="product.image" :alt="product.name" />
        </div>

        <div class="product--screen__details--description">
          <div class="container">
            <div class="product--title">
              <h2>{{ product.name }}</h2>
            </div>

            <div class="product--description mt-1">
              <p>${{ product.price }}</p>

              <m-button
                class="btn btn__cart mt-1"
                v-on:clicked="addToCartHandler"
                v-if="product.qty > 0 && !isAdded"
                :disabled="spinner ? true : false"
              >
                <app-mini-loader v-if="spinner"></app-mini-loader>
                <span v-else>Add to Cart</span>
              </m-button>

              <router-link
                to="/cart"
                v-if="isAdded"
                class="link btn btn__cart mt-1"
                >View Cart</router-link
              >

              <m-button
                class="btn btn__buy mt-1"
                @clicked="buyProductHandler"
                v-if="product.qty > 0"
              >
                <app-mini-loader v-if="buySpinner"></app-mini-loader>
                <span v-if="!buySpinner && !isAdded">Buy Now</span>
                <span v-if="isAdded">Go to Cart</span>
              </m-button>
              <h3 v-else class="mt-2 text--danger">Out of Stock</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mButton from "../ui/Button";
import axios from "axios";
import AppLoader from "../ui/AppLoader";
import AppMiniLoader from "../ui/AppMiniLoader";

export default {
  name: "ProductScreen",
  data() {
    return {
      product: {},
      isAdded: false,
      spinner: false,
      buySpinner: false,
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoading;
    },
  },
  components: {
    mButton,
    AppMiniLoader,
    AppLoader,
  },

  created() {
    this.$store.commit("LOADING", true);
    this.getProduct();
    this.checkExistedProduct();
  },

  methods: {
    async getProduct() {
      const { data } = await axios.get(
        `/api/products/${this.$route.params.id}`
      );
      this.product = {
        ...data,
        purchaseQty: 1,
        productId: data._id,
        countInStock: data.qty,
      };
    },

    async addToCartHandler() {
      let cartProduct = {
        purchaseQty: 1,
        productName: this.product.name,
        productId: this.product._id,
        image: this.product.image,
        countInStock: this.product.qty,
      };

      this.spinner = true;
      const addToCart = await this.$store.dispatch("ADD_TO_CART", {
        cartProduct,
        product: this.product,
      });

      if (addToCart) {
        this.spinner = false;
        this.isAdded = true;
      }
    },

    async checkExistedProduct() {
      this.$store.commit("LOADING", true);
      let cart = await JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const existedProduct = await cart.find(
          (product) => product._id === this.$route.params.id
        );
        if (existedProduct) {
          this.isAdded = true;
        }
      }
      this.$store.commit("LOADING", false);
    },

    async buyProductHandler() {
      if (this.isAdded) {
        return this.$router.push({ path: "/cart" });
      }
      this.buySpinner = true;
      let cartProduct = {
        purchaseQty: 1,
        productName: this.product.name,
        productId: this.product._id,
        image: this.product.image,
        countInStock: this.product.qty,
      };

      const addToCart = await this.$store.dispatch("ADD_TO_CART", {
        cartProduct,
        product: this.product,
      });

      if (addToCart) {
        this.buySpinner = false;
        this.$router.push({ path: "/cart" });
      }
    },
  },
};
</script>


<style scoped>
.container {
  padding: 1rem 0;
}
.product--screen {
  height: 100%;
}

.product--screen__container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
}

.product--screen__details--img img {
  width: 80%;
}

.product--description {
  text-align: center;
}

.btn__cart,
.btn__buy {
  border-radius: 0;
  box-shadow: none;
  background: white;
  border: 2px solid #e1e1e1;
  height: 2.5rem;
}

.btn__cart,
.btn__buy {
  position: relative;
}

.btn__buy {
  background: #333333;
  border: none;
  color: #fff;
  font-weight: 400;
}
</style>
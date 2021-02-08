<template>
  <div class="product--screen">
    <div class="product--screen__container">
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
                class="btn btn__cart"
                v-on:clicked="addToCartHandler"
                v-if="product.qty > 0"
              >
                <span v-if="!isAdded">Add to Cart</span>
                <span v-else>
                  <router-link to="/cart">View Cart</router-link>
                </span>
              </m-button>

              <m-button
                class="btn btn__buy"
                @clicked="buyProductHandler"
                v-if="product.qty > 0"
                >Buy</m-button
              >

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

export default {
  name: "ProductScreen",
  data() {
    return {
      product: {},
      isAdded: false,
    };
  },

  components: {
    mButton,
  },

  created() {
    this.getProduct();
    // this.addToCartHandler();
  },

  mounted() {
    this.checkExistedProduct();
  },

  methods: {
    async getProduct() {
      const { data } = await axios.get(`/products/${this.$route.params.id}`);
      this.product = {
        ...data,
        purchaseQty: 1,
        productId: data._id,
      };
    },

    addToCartHandler() {
      let cartProduct = {
        purchaseQty: 1,
        productName: this.product.name,
        productId: this.product._id,
        image: this.product.image,
        countInStock: this.product.qty,
      };
      this.$store.dispatch("ADD_TO_CART", {
        cartProduct,
        product: this.product,
      });
      this.isAdded = true;
    },

    checkExistedProduct() {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const existedProduct = cart.find(
          (product) => product._id === this.$route.params.id
        );
        if (existedProduct) {
          this.isAdded = true;
        }
      }
    },

    buyProductHandler() {
      console.log("buying this product");
    },
  },
};
</script>

<style src='@/assets/styles/utils.css'></style>

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
.btn {
  margin-top: 2rem;
}

.btn__cart,
.btn__buy {
  border-radius: 0;
  box-shadow: none;
  background: white;
  border: 2px solid #e1e1e1;
}

.btn__buy {
  background: #333333;
  border: none;
  color: #fff;
  font-weight: 400;
}
</style>
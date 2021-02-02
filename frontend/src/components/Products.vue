<template>
  <div class="product">
    <div class="container product--item--container">
      <h2>Feature Products</h2>
      <div class="product--item" v-if="products.length > 0 ? true : false">
        <product-card
          v-for="product in products"
          :product="product"
          :key="product.id"
        ></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ui/ProductCard.vue";
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },

  components: {
    ProductCard,
  },

  created() {
    this.getProduct();
  },

  methods: {
    async getProduct() {
      const { data } = await axios.get("/products");
      console.log(data);
      this.products = data;
    },
  },
};
</script>

<style scoped>
.product {
  margin-top: 1rem;
}

.product--item--container {
  text-align: center;
}

.product--item {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: auto;
  column-gap: auto;
  justify-content: space-between;
}
</style>
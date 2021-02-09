<template>
  <div class="product">
    <div class="container product--item--container">
      <div class="search-box mb-1">
        <input
          type="text"
          class="search__input"
          v-model="searchTerm"
          @input="getSearchProduct"
        />
        <button class="search__btn"><i class="fas fa-search"></i></button>
      </div>
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
      searchTerm: "",
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
      const { data } = await axios.get("/api/products");
      // const { data } = await axios.get(`/api/products?search=casio`);
      this.products = data;
    },

    async getSearchProduct() {
      if (this.searchTerm === "") this.getProduct();
      const { data } = await axios.get(
        `/api/products?search=${this.searchTerm}`
      );
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

.search-box {
  position: relative;
}

.search__input,
.search__btn {
  font-size: 1rem;
  height: 2rem;
  border-radius: 0.5rem;
}

.search__input {
  border: 0;
  outline: #333333;
  width: 15rem;
  padding-left: 0.5rem;
  background: #f4f4f4;
}

.search__input:focus,
.search__input:active {
  border: 1px solid #333333;
}

.search__btn {
  display: inline-block;
  position: absolute;
  left: 70%;
  background-color: #333333;
  color: #fff;
  border: none;
  width: 3rem;
}
</style>
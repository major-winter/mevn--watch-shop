<template>
  <div class="product">
    <app-loader v-if="isLoading"></app-loader>
    <AppSwiper />
    <div class="container product--item--container text--center">
      <div class="search-box mb-1">
        <input
          type="text"
          class="search__input"
          v-model="searchTerm"
          placeholder="Search..."
          @input="getSearchProduct"
        />
        <button class="search__btn"><i class="fas fa-search"></i></button>
      </div>

      <div v-if="error" class="text--danger text--bold">{{ error }}</div>

      <div v-else>
        <h2>Feature Products</h2>
        <div class="product--item" v-if="products.length > 0 ? true : false">
          <product-card
            v-for="product in products"
            :product="product"
            :key="product.id"
          >
          </product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ui/ProductCard.vue";
import AppLoader from "./ui/AppLoader";
import AppSwiper from "./ui/AppSwiper";
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      searchTerm: "",
      error: "",
    };
  },

  components: {
    ProductCard,
    AppLoader,
    AppSwiper,
  },

  computed: {
    ...mapGetters({
      isLoading: "getLoading",
    }),
  },

  created() {
    this.getProduct();
  },

  methods: {
    ...mapMutations({ loading: "LOADING" }),

    async getProduct() {
      this.loading(true);
      this.error = "";
      const { data } = await axios.get("/api/products");
      this.products = data;
      this.loading(false);
    },

    async getSearchProduct() {
      // if (this.searchTerm === "") return this.getProduct();
      const { data } = await axios.get(
        `/api/products?search=${this.searchTerm}`
      );

      if (data.message) {
        this.error = data.message;
      } else {
        this.error = "";
        this.products = data;
      }
    },
  },
};
</script>

<style scoped>

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
  display: inline-block;
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
  right: 10%;
  background-color: #333333;
  color: #fff;
  border: none;
  width: 3rem;
}
</style>
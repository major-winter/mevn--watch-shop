<template>
  <router-link :to="{ name: 'productScreen', params: { id: product._id } }">
    <div class="product--card">
      <section class="product--img">
        <img :src="product.image" alt="" />
      </section>

      <section class="product-details">
        <div class="product-details--container">
          <div class="product-name">
            <h4>{{ product.name || "Product Name" }}</h4>
          </div>
          <div class="product-description">
            <p class="product-price">
              Price: ${{ (product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) || "Product Price" }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.product-details--container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 5rem;
}

.product--card {
  border-radius: 0.1rem;
  position: relative;
  max-height: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-top: 1rem;
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  animation-duration: 250ms;
}

.product--img {
  margin: 0 auto;
  margin-bottom: 18px;
}

.product--img img {
  max-width: 120px;
  min-height: 120px;
}

.product-details {
  border-top: 2px solid lightgray;
  padding: 1rem;
}
.product-price {
  margin-bottom: 1rem;
}

.btn {
  background: grey;
  font-weight: 700;
  font-size: 1.1rem;
}

a {
  text-decoration: none;
  color: black;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
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
            <p class="product-price">Price: ${{ product.price || "Product Price" }}</p>
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
  /* border: 1px solid rgba(255, 255, 255, 0.4); */
  border-radius: 0.1rem;
  max-height: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-top: 1rem;

  /* box-shadow: -0.5rem 0.5rem 0.15rem rgba(65, 64, 64, 0.1); */
}

.product--img {
  margin: 0 auto;
  margin-bottom: 18px;
}

.product--img img {
  max-width: 120px;
  min-height: 120px;
  /* width: auto;
  height: auto; */
}

.product-details {
  /* background: lightgrey; */
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
</style>
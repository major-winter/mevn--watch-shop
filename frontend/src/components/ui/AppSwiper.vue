<template>
  <div class="swiper">
    <button class="prev__btn" @click="showPrev">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="next__btn" @click="showNext">
      <i class="fas fa-chevron-right"></i>
    </button>
    <VueSlickCarousel
      v-bind="settings"
      class="swiper-container"
      ref="carousel"
      v-if="products.length > 0"
    >
      <div class="swiper__item" v-for="product in products" :key="product._id">
        <router-link :to="{ path: `/product/${product._id}` }">
          <img :src="product.image" :alt="product.name" />
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import axios from "axios";

export default {
  name: "MyComponent",
  data() {
    return {
      products: [],
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: document.querySelector(".prev__btn"),
        nextArrow: document.querySelector(".next__btn"),
      },
    };
  },

  components: { VueSlickCarousel },

  created() {
    this.getProduct();
  },

  methods: {
    showPrev() {
      this.$refs.carousel.prev();
    },

    showNext() {
      this.$refs.carousel.next();
    },

    async getProduct() {
      const { data } = await axios.get("/api/products");
      this.products = data;
    },
  },
};
</script> 

<style  scoped>
.swiper {
  position: relative;
}
.swiper-container {
  display: block;
  width: 80vw;
  height: auto;
  margin: 0 auto;
}

.swiper__item {
  position: relative;
  text-align: center;
}

.swiper__item img {
  display: inline-block;
  max-width: 20rem;
  max-height: 29rem;
  height: auto;
  width: 100%;
}
.prev__btn,
.next__btn {
  position: absolute;
}
.prev__btn {
  left: 2%;
  top: 50%;
}

.next__btn {
  right: 2%;
  top: 50%;
}
</style>

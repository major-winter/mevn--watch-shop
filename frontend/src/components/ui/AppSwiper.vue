<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="swiper-container">
      <div class="swiper"><img src="@/assets/logo.png" alt="" /></div>
      <div class="swiper"><img src="@/assets/v2.jpg" alt="" /></div>
      <div class="swiper"><img src="@/assets/pani_v2.jpg" alt="" /></div>
      <div class="swiper"><img src="@/assets/panigale.jpg" alt="" /></div>
      <div class="swiper"><img src="@/assets/logo.png" alt="" /></div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  data() {
    return {
      settings: {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script> 

<style  scoped>
.swiper-container {
  display: block;
  width: 80vw;
  margin: 0 auto;
}
</style>
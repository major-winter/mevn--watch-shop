<template>
  <div class="d-flex container__breadcrum mb-2">
    <p
      :class="
        $route.path === '/shipping' ||
        $route.path === '/payment' ||
        $route.path === '/order'
          ? 'active'
          : 'idle'
      "
      @click="toShippingHandler"
    >
      Shipping
    </p>
    <i
      class="fas fa-chevron-right"
      :class="
        $route.path === '/shipping' ||
        $route.path === '/payment' ||
        $route.path === '/order'
          ? 'active'
          : 'idle__icon'
      "
    ></i>

    <p
      :class="
        $route.path === '/payment' || $route.path === '/order'
          ? 'active'
          : 'idle'
      "
      @click="toPaymentHandler"
    >
      Payment
    </p>
    <i
      class="fas fa-chevron-right"
      :class="
        $route.path === '/payment' || $route.path === '/order'
          ? 'active'
          : 'idle__icon'
      "
    ></i>

    <p
      :class="$route.path === '/order' ? 'active' : 'idle'"
      @click="toReviewOrderHandler"
    >
      Review Order
    </p>
  </div>
</template>

<script>
export default {
  name: "AppBreadcrum",

  methods: {
    toShippingHandler() {
      this.$router.push({ path: "/shipping" });
    },

    toPaymentHandler() {
      this.$router.push({ path: "/payment" });
    },

    toReviewOrderHandler() {
      this.$router.push({ path: "/order" });
    },
  },
};
</script>

<style scoped>
.container__breadcrum {
  width: 80%;
  margin: 0 auto;
}
.active {
  color: #333;
  font-weight: 700;
}

.idle {
  color: #999;
}

.idle__icon {
  color: #999;
}
</style>
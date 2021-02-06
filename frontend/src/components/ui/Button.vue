<template>
  <button class="btn" @click="clickHandler">
    <slot> Button </slot>
  </button>
</template>

<script>
export default {
  name: "mButton",

  methods: {
    clickHandler() {
      this.$emit("clicked");
    },
  },
};
</script>

<style>
.btn {
  border: 1px solid #333333;
  width: 50%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  border-radius: 0.1rem;
  /* box-shadow: -0.1rem 0.1rem 0.02rem 0.1rem grey; */
  font-weight: 400;
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
  color: #333333;
}

button:disabled {
  color: #c2c2c2;
}
</style>
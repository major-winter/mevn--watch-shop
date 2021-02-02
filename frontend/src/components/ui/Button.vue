<template>
  <div class="btn" @click="clickHandler">
    <slot> Button </slot>
  </div>
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
  /* background: lightgreen; */
  border: 1px solid #333333;
  width: 50%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  border-radius: 0.1rem;
  /* box-shadow: -0.1rem 0.1rem 0.02rem 0.1rem grey; */
  font-weight: 500;
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
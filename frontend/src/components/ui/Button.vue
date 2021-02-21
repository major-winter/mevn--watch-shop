<template>
  <button class="btn" @click.prevent.stop="clickHandler">
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
  font-weight: 400;
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
}

button:disabled {
  color: #c2c2c2;
}
</style>
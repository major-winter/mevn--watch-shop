<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(211, 211, 211, 0.6);
  z-index: 100;
  top: 0;
}

.spinner {
  position: absolute;
  top: 40%;
  left: 40%;
  margin: auto;
  width: 5rem;
  height: 5rem;
  display: inline-block;
  border: 3px solid rgba(246, 158, 43, 0.6);
  border-radius: 50%;
  border-top-color: rgb(255, 255, 255);
  animation: 1s spin infinite ease-in-out;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
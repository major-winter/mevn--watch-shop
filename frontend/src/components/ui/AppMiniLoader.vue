<template>
  <div class="mini-loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.spinner {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 45%;
  top: 5%;

  /* margin: auto; */
  display: inline-block;
  border: 3px solid rgba(43, 138, 246, 0.6);
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
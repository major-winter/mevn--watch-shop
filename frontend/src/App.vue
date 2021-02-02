<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: "Raleway", "Arimo", sans-serif;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  padding: 0;
  margin: 0;
}

.container {
  width: 85%;
  margin: 0 auto;
}

img {
  max-width: 100%;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 100%;
  padding: 0.5rem 0;
}

.white {
  color: #fff;
}

.bg-dark {
  background-color: pink;
}
</style>

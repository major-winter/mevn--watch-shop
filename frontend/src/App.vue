<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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

  created() {
    this.$store.getters.isLoggedIn; //Check if the user has logged in
  },
};
</script>

<style src='@/assets/styles/utils.css'>

</style>

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
  width: 90%;
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

.flex--col--between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}

.fade-enter-to,
.fade-leave {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-in;
}
</style>

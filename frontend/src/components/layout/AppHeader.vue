<template>
  <header class="header">
    <section class="top">
      <div class="container"></div>
    </section>

    <nav class="navbar--mobile">
      <div class="container">
        <ul class="">
          <router-link
            v-for="item in mobileNavMenu"
            :key="item.id"
            :to="item.path"
            tag="li"
          >
            <i :class="item.icon"></i> {{ item.name }}
          </router-link>
        </ul>
      </div>
    </nav>
    <nav class="nav">
      <div class="container d-flex nav--mobile">
        <div class="mobile-icon" @click="navbarHandler">
          <i class="fas fa-bars navbar--icon" v-if="!isNavbar"></i>
          <i class="fas fa-times navbar--icon" v-else></i>
        </div>

        <div class="logo">
          <router-link to="/" tag="div" class="white">
            <h1>OMEGA</h1>
          </router-link>
        </div>

        <router-link to="/cart" tag="div" class="white">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </nav>

    <!-- <section class="background-img" v-if="this.$route.path == '/'">
      <div class="">
        <picture>
          <source
            media="(min-width:650px)"
            srcset="
              https://cdn-static.farfetch-contents.com/cms-cm/tw/media/1799254/data/defe2f57554b1bae9715e38751860caa.jpg?ratio=16x9_under&minWidth=1142
            "
          />
          <img
            src="https://cdn-static.farfetch-contents.com/cms-cm/tw/media/1799254/data/defe2f57554b1bae9715e38751860caa.jpg?ratio=3x4_under&minWidth=552"
            alt="panigale"
            srcset=""
          />
        </picture>
      </div>
    </section> -->
  </header>
</template>

<script>
export default {
  name: "AppHeader",

  data() {
    return {
      isNavbar: false,
      scrollPositionY: 0,
      loggedIn: null,
    };
  },

  computed: {
    mobileNavMenu() {
      let mobileNavMenu = [
        { path: "/", name: "Home", icon: "fas fa-home" },
        { path: "/product", name: "Product", icon: "fab fa-product-hunt" },
        { path: "/Contact", name: "Contact", icon: "fas fa-phone" },
        { path: "/login", name: "Log in", icon: "fas fa-user-alt" },
      ];
      if (this.isAuth) {
        mobileNavMenu = [
          { path: "/", name: "Home", icon: "fas fa-home" },
          { path: "/product", name: "Product", icon: "fab fa-product-hunt" },
          { path: "/contact", name: "Contact", icon: "fas fa-phone" },
          { path: "/profile", name: "Your Profile", icon: "fas fa-user-alt" },
        ];
      }
      return mobileNavMenu;
    },

    isAuth() {
      return this.$store.getters.getStatus;
    },
  },

  watch: {
    $route(to) {
      let header = document.querySelector(".header");
      if (this.isNavbar === true) {
        this.navbarHandler();
      }
      if (to.path !== "/") {
        header.classList.add("header-sm");
      } else if (this.$route.path == "/") {
        header.classList.remove("header-sm");
      }
    },
  },

  methods: {
    navbarHandler() {
      let navbarBtn = document.querySelector(".navbar--icon");
      let parentNode = navbarBtn.parentNode;
      parentNode.classList.toggle("moveToLeft");
      let navbarMobile = document.querySelector(".navbar--mobile");
      navbarMobile.classList.toggle("navbar-show");
      Array.from(parentNode.classList).includes("moveToLeft")
        ? (this.isNavbar = true)
        : (this.isNavbar = false);
    },
  },
};
</script>

<style src='../../assets/styles/screen-md.css'>
</style>

<style scoped>
.header {
  height: 10vh;
}

.header-sm {
  height: 5vh;
}

.logo img {
  width: 3rem;
  height: auto;
}

.background-img {
  position: relative;
  top: 4rem;
  /* z-index: -1; */
}

.background-img img {
  width: 100%;
  height: 100vh;
  position: relative;
  /* top: 6rem; */
  z-index: -2;
}

/* .background-img::before {
  content: "";
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: linear-gradient(
    45deg,
    rgba(68, 68, 68, 0.4),
    rgba(46, 46, 46, 0.3)
  );
} */

.nav {
  background: #333333;
  height: 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 8;
}

.nav--mobile {
  position: relative;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.mobile-icon {
  position: relative;
  color: #fff;
  left: 0;
  transition: left 250ms linear;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
}

.moveToLeft {
  left: 0;
}

.navbar--mobile {
  position: fixed;
  z-index: 5;
  top: -100vh;
  /* top: 64px; */
  /* left: -100%; */
  background: #333333;
  color: #fff;
  width: 100%;
  height: 100%;
  transition: top 500ms ease-in-out;
  text-align: center;
}

.navbar--mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
}

.navbar--mobile ul li {
  margin-bottom: 2rem;
  cursor: pointer;
}

.navbar--mobile ul li:hover,
.navbar--mobile ul li:active {
  color: white;
}

.navbar-show {
  /* left: 0;
   */
  top: 64px;
}

.router-link-exact-active {
  color: #fff;
}

.bg-dark {
  background-color: #000;
}

ul,
li {
  padding: 0;
}
</style>
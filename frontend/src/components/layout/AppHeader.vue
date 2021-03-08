<template>
  <header class="header">
    <div class="navbar--mobile">
      <ul class="navbar__list-items">
        <li v-for="item in mobileNavMenu" :key="item.id" class="navbar__item">
          <router-link :to="item.path">
            <span @click="navbarHandler">
              <i :class="item.icon"></i>
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>

    <nav class="nav">
      <div class="container d-flex nav--mobile">
        <div class="mobile-icon" @click="navbarHandler">
          <i class="fas fa-bars navbar--icon" v-if="!isNavbar"></i>
          <i class="fas fa-times navbar--icon" v-else></i>
        </div>

        <div class="logo">
          <router-link to="/" class="white text--decoration--none">
            <h1><i class="far fa-clock"></i></h1>
          </router-link>
        </div>

        <div v-if="isAuth">
          <router-link to="/profile" class="white text--decoration--none">
            Hello,
            {{ userName }}
          </router-link>
        </div>

        <div class="navbar">
          <ul class="navbar__list-items">
            <li v-for="item in navMenu" :key="item.id" class="navbar__item">
              <router-link :to="item.path">
                <span @click="navbarHandler">
                  <i :class="item.icon"></i>
                  {{ item.name }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 
        <router-link to="/cart" class="white">
          <i class="fas fa-shopping-cart"></i>
        </router-link> -->
      </div>
    </nav>
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
        { path: "/Contact", name: "Contact", icon: "fas fa-phone" },
        { path: "/login", name: "Log in", icon: "fas fa-user-alt" },
      ];
      if (this.isAuth) {
        mobileNavMenu = [
          { path: "/", name: "Home", icon: "fas fa-home" },
          { path: "/contact", name: "Contact", icon: "fas fa-phone" },
          { path: "/profile", name: "Your Profile", icon: "fas fa-user-alt" },
        ];
      }
      return mobileNavMenu;
    },

    navMenu() {
      let navMenu = [
        { path: "/login", name: "Log in", icon: "fas fa-user-alt" },
        { path: "/cart", name: "Cart", icon: "fas fa-shopping-cart" },
      ];

      return navMenu;
    },

    isAuth() {
      return this.$store.getters.getStatus;
    },

    userName() {
      return this.$store.getters.getUserName;
    },
  },

  watch: {
    $route() {
      if (this.isNavbar === true) {
        this.navbarHandler();
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

<style scoped>
.header {
  height: 10vh;
}

.background-img {
  position: relative;
  top: 4rem;
}

.background-img img {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -2;
}

.nav,
.navbar--mobile {
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
.navbar {
  display: none;
}

.navbar--mobile {
  position: fixed;
  z-index: 5;
  top: -100vh;
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

.navbar__item > * {
  color: #fff;
  text-decoration: none;
}

.navbar-show {
  top: 64px;
}

.router-link-exact-active {
  color: #fff;
}

ul,
li {
  padding: 0;
}

@media (orientation: landscape) {
  .header {
    height: 20vh;
  }
}

@media (min-width: 768px) {
  .navbar {
    display: inline-block;
  }

  .navbar__item{
    margin-left: 1rem;
  }

  .navbar--mobile,
  .mobile-icon {
    display: none;
  }

  .navbar__list-items {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
}
</style>
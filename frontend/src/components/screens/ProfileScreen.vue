<template>
  <div class="profile">
    <div class="container text--center">
      <h1>Hello {{ user.username }}</h1>
      <ul class="profile__list-items">
        <li>
          <span>Email: </span>
          <span>{{ user.email }}</span>
        </li>

        <li>
          <m-button
            @clicked="signOutHandler"
            class="mt-1 text--color--dark sign--out__btn"
          >
            <i class="fas fa-sign-out-alt"></i> Sign Out
          </m-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mButton from "@/components/ui/Button";
export default {
  name: "ProfileScreen",
  data() {
    return {
      user: {},
    };
  },

  components: {
    mButton,
  },

  created() {
    this.getUserName();
  },

  methods: {
    getUserName() {
      JSON.parse(localStorage.getItem("user")) &&
        (this.user = JSON.parse(localStorage.getItem("user")));
    },

    signOutHandler() {
      this.$store.dispatch("USER_LOGOUT");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.profile {
  top: 64px;
}

.profile__list-items {
  list-style: none;
}

.sign--out__btn {
  width: 100%;
  color: #333;
}
</style>
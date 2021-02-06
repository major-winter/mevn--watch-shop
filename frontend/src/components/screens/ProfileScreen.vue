<template>
  <div class="profile mt-2">
    <div class="container">
      <h1>Hello {{ user.username }}</h1>
      <ul>
        <li>
          <p>Email:</p>
          <p>{{ user.email }}</p>
        </li>

        <li>
          <m-button @clicked="signOutHandler">
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
</style>
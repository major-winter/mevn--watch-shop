<template>
  <div class="profile mt-2">
    <div class="container">
      <h1>Hello {{ userName }}</h1>
      <ul>
        <li>
          <p>Email:</p>
          <p>chen@chen.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileScreen",
  data() {
    return {
      userName: "",
    };
  },

  created() {
    this.getUserName();
  },

  methods: {
    getUserName() {
      JSON.parse(localStorage.getItem("user"))
        ? (this.userName = JSON.parse(localStorage.getItem("user")))
        : (this.userName = "");
    },
  },
};
</script>

<style scoped>
.profile {
  top: 64px;
}
</style>
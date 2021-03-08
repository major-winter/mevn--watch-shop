export default {
  created() {
    this.$store.getters.isLoggedIn; //Check if the user has logged in
    this.checkLogInStatus();
  },
  methods: {
    qtySelected (payload) {
      this.qty = payload
    },

    inputHandler (payload, type) {
      switch (payload.name) {
        case "name":
          this.signupForm.username = payload.value
          break

        case "email":
          if (type === "signupForm") this.signupForm.email = payload.value
          if (type === "loginForm") this.loginForm.email = payload.value
          break

        case "password":
          if (type === "signupForm") this.signupForm.password = payload.value
          if (type === "loginForm") this.loginForm.password = payload.value
          break

        case "address":
          this.signupForm.address = payload.value
          break

        default:
          break
      }
    },

    async checkLogInStatus () {
      const { logout } = await this.$store.dispatch("INIT_AUTH")
      if (logout) {
        this.isLoggedOut = true
        this.$store.dispatch("USER_LOGOUT")
      }
    },
  }
}
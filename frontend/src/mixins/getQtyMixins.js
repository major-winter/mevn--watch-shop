
export default {
  methods: {
    qtySelected (payload) {
      this.qty = payload
      console.log(this.qty, 'from mixin')
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
  }
}
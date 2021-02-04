import axios from 'axios'

const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
})

const getters = {
  isLoggedIn (state) {
    if (!state.token) {
      return false
    } else {
      state.status = 'authenticated'
      return true
    }
  },

  getStatus (state) {
    return state.status
  }
}
const mutations = {
  SET_TOKEN (state, payload) {
    if (!payload.token) {
      return
    }
    localStorage.setItem("token", JSON.stringify(payload.token))
    localStorage.setItem("user", JSON.stringify(payload.userName))
    state.status = 'authenticated'
  }
}
const actions = {
  async USER_LOGIN ({ commit }, requestBody) {
    const { data } = await axios.post("/users/login", requestBody)
    const token = data.token
    const userName = data.user.username

    commit('SET_TOKEN', { token, userName })

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
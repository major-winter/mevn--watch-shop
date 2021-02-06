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

  SIGN_UP (state) {
    state.status = 'authenticated'
  },

  SET_USER (state) {
    state.status = 'authenticated'
  },

  REMOVE_TOKEN (state) {

    state.status = ''
  }
}
const actions = {
  async SIGN_UP ({ commit }, payload) {
    try {
      const { data } = await axios.post("/users", payload)
      const { token, user } = data
      console.log(data)
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
      commit('SIGN_UP')
    } catch (error) {
      console.log(error.message)
    }

  },

  async USER_LOGIN ({ commit }, requestBody) {
    try {
      const { data } = await axios.post("/users/login", requestBody)
      const { token, user } = data
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
      commit('SET_USER')
    } catch (error) {
      const { data } = error.response
      console.log(data.message);
      
    }
  },

  async USER_LOGOUT ({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    commit('REMOVE_TOKEN')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
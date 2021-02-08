import axios from 'axios'

const state = () => ({
  status: '',
  userName: JSON.parse(localStorage.getItem('user')) || '',
  token: JSON.parse(localStorage.getItem('token')) || '',
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
  },

  getUserName (state) {
    return state.userName.username
  }
}
const mutations = {

  SIGN_UP (state, payload) {
    state.status = 'authenticated'
    state.userName = payload.username
  },

  SET_USER (state, payload) {
    console.log('set user', payload)
    state.status = 'authenticated'
    state.userName = payload.username
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
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
      commit('SIGN_UP', user)
    } catch (error) {
      console.log(error.message)
    }

  },

  async USER_LOGIN ({ commit }, requestBody) {
    try {
      const { data } = await axios.post("/users/login", requestBody)
      const { token, user } = data
      await localStorage.setItem("token", JSON.stringify(token))
      await localStorage.setItem("user", JSON.stringify(user))
      commit('SET_USER', user)
    } catch (error) {
      const { data } = error.response
      console.log(data.message)
    }
  },

  async USER_LOGOUT ({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    localStorage.removeItem('cartId')
    commit('REMOVE_TOKEN')
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
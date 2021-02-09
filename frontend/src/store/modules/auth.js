import axios from 'axios'
import {
  saveToLocalStorage,
  removeFromLocalStorage
} from '../../utils/storeUtils'

const state = () => ({
  status: '',
  userName: JSON.parse(localStorage.getItem('userName')) || '',
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
    return state.userName
  }
}
const mutations = {

  SIGN_UP (state, payload) {
    state.status = 'authenticated'
    state.userName = payload.username
  },

  SET_USER (state, payload) {
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
      const { data } = await axios.post("/api/users", payload)
      const { token, user } = data
      const userName = user.username
      await saveToLocalStorage([{ 'token': token }, { 'user': user }, { 'userName': userName }])
      commit('SIGN_UP', user)
    } catch (error) {
      console.log(error.message)
    }

  },

  async USER_LOGIN ({ commit }, requestBody) {
    try {
      const { data } = await axios.post("/api/users/login", requestBody)
      const { token, user } = data
      const userName = user.username
      await saveToLocalStorage([{ 'token': token }, { 'user': user }, { 'userName': userName }])
      commit('SET_USER', user)
    } catch (error) {
      const { data } = error.response
      return data.message
    }
  },

  async USER_LOGOUT ({ commit }) {
    await removeFromLocalStorage(['token', 'user', 'cart', 'cartId', 'userName'])
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
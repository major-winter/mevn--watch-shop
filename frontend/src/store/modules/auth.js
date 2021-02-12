import axios from 'axios'
import {
  saveToLocalStorage,
  removeFromLocalStorage
} from '../../utils/storeUtils'

const state = () => ({
  status: '',
  userName: JSON.parse(localStorage.getItem('userName')) || '',
  token: JSON.parse(localStorage.getItem('token')) || '',
  showModal: false
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
  },

  getShowModal (state) {
    return state.showModal
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
  },

  SHOW_MODAL (state, payload) {
    state.showModal = payload
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
      return { result: data }
    } catch (error) {
      return { result: error.message }
    }

  },

  async USER_LOGIN ({ commit }, requestBody) {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
      if (!token) {
        const { data } = await axios.post("/api/users/login", { ...requestBody })
        const { token, user, cartId } = data
        const userName = user.username
        let start = Date.now()
        await saveToLocalStorage([{ 'token': token }, { 'user': user }, { 'userName': userName }, { 'cartId': cartId }, { 'start': start }])
        commit('SET_USER', user)
      } else {
        const { data } = await axios.post("/api/users/login", { ...requestBody, token })
        const { token, user, cartId } = data
        const userName = user.username
        await saveToLocalStorage([{ 'token': token }, { 'user': user }, { 'userName': userName }, { 'cartId': cartId }])
        commit('SET_USER', user)
      }

    } catch (error) {
      const { data } = error.response
      return data.message
    }
  },

  async USER_LOGOUT ({ commit }) {
    await removeFromLocalStorage(['token', 'user', 'cart', 'cartId', 'userName', 'start'])
    commit('REMOVE_TOKEN')
  },

  async INIT_AUTH ({ commit }) {
    let start = await JSON.parse(localStorage.getItem('start'))
    let end = Date.now()
    let timer = Math.floor((end - start) / 1000)
    if (timer > 600 && start) {
      commit('SHOW_MODAL', true)
      return { logout: true }
    }
    return { logout: false }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
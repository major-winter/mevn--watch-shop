import axios from 'axios'
import { saveToLocalStorage } from '../../utils/storeUtils'

const state = () => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  cartId: '',
  loading: false
})

const getters = {
  getCart (state) {
    return state.cart
  },

  getLoading (state) {
    return state.loading
  }
}

const mutations = {
  SET_INITIAL_CART (state, payload) {
    state.cart = [...payload]
  },

  SET_CART (state, payload) {
    state.cart = [...payload.cart]
    state.cartId = payload.cartId
  },

  UPDATE_CART (state, payload) {
    state.cart = [...payload]
  },

  LOADING (state, payload) {
    state.loading = payload
  }

}

const actions = {
  async GET_CART_ITEMS ({ commit }) {
    const token = await JSON.parse(localStorage.getItem('token'))
    const { data } = await axios.get('/api/cart', {
      headers: {
        'Authorization': `Bearer ${token} `
      }
    })
    if (data.message) {
      commit('SET_INITIAL_CART', [])
    } else {
      localStorage.setItem('cart', JSON.stringify(data.cartItems))
      commit('SET_INITIAL_CART', data.cartItems)
    }
  },

  async ADD_TO_CART ({ commit }, payload) {
    const token = await JSON.parse(localStorage.getItem('token'))
    let cart = JSON.parse(localStorage.getItem('cart'))
    let cartId = JSON.parse(localStorage.getItem('cartId'))
    if (!cart) {
      cart = []
      cart.push(payload.product)
    } else {
      cart.push(payload.product)
    }

    await saveToLocalStorage([{ 'cart': cart }])

    if (cartId !== 1) {
      const { data } = await axios.post(`/api/cart/${cartId}`, { cartItems: cart }, {
        headers: {
          'Authorization': `Bearer ${token} `
        }
      })
      commit('SET_CART', { cart, cartId: data._id })
    }
    else {
      const { data } = await axios.post(`/api/cart`, { cartItems: cart }, {
        headers: {
          'Authorization': `Bearer ${token} `
        }
      })
      cartId = data._id
      localStorage.setItem('cartId', JSON.stringify(cartId))
      await saveToLocalStorage([{ cartId }])
      commit('SET_CART', { cart, cartId: data._id })
    }

    return true
  },

  async UPDATE_CART ({ commit }, payload) {
    const token = await JSON.parse(localStorage.getItem('token'))
    const cart = JSON.parse(localStorage.getItem('cart'))
    let cartId = JSON.parse(localStorage.getItem('cartId'))

    cart.forEach(item => {
      if (item._id === payload._id) {
        item.purchaseQty = payload.purchaseQty
      }
    })

    localStorage.setItem('cart', JSON.stringify(cart))

    await axios.patch(`/api/cart/${cartId}?productId=${payload._id}&purQty=${payload.purchaseQty}`, { cartItems: cart, cartId: state.cartId }, {
      headers: {
        'Authorization': `Bearer ${token} `
      }
    })
    commit('UPDATE_CART', cart)
  },

  async REMOVE_FROM_CART ({ commit }, payload) {
    let cartId = JSON.parse(localStorage.getItem('cartId'))
    const token = await JSON.parse(localStorage.getItem('token'))
    const { data } = await axios.delete(`/api/cart/${cartId}?productId=${payload}`, {
      headers: {
        'Authorization': `Bearer ${token} `
      }
    })
    localStorage.setItem('cart', JSON.stringify(data.cartItems))
    commit('UPDATE_CART', data.cartItems)
    commit('LOADING', false)
  }
}

export default {
  state, getters, mutations, actions
}
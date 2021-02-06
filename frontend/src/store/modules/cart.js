import axios from 'axios'

const state = () => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  cartId: ''
})

const getters = {
  getCart (state) {
    return state.cart
  }
}

const mutations = {
  SET_CART (state, payload) {
    state.cart = [...payload.cart]
    state.cartId = payload.cartId
  },

  UPDATE_CART (state, payload) {
    state.cart = [...payload]
  }

}

const actions = {
  async ADD_TO_CART ({ commit }, payload) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if (!cart) {
      cart = []
      cart.push(payload.product)
    } else {
      cart.push(payload.product)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    const token = await JSON.parse(localStorage.getItem('token'))
    const { data } = await axios.post('/cart', { cartItems: cart }, {
      headers: {
        'Authorization': `Bearer ${token} `
      }
    })
    console.log(data)
    commit('SET_CART', { cart, cartId: data._id })
  },

  async UPDATE_CART ({ commit }, payload) {
    
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    cart.forEach(item => {
      if (item._id === payload._id) {
        item.purchaseQty = payload.purchaseQty
      }
    })
    // const token = await JSON.parse(localStorage.getItem('token'))
    localStorage.setItem('cart', JSON.stringify(cart))

    // const { data } = await axios.patch(`/cart/${state.cartId}`, { cartItems: cart, cartId: state.cartId }, {
    //   headers: {
    //     'Authorization': `Bearer ${token} `
    //   }
    // })

    commit('UPDATE_CART', cart)
  }
}

export default {
  state, getters, mutations, actions
}
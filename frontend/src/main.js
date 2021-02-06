import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/routes'
import auth from './store/modules/auth'
import cart from './store/modules/cart'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    cart
  }
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

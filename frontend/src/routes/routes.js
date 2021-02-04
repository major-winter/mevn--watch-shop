import VueRouter from 'vue-router'
const HomeScreen = () => import('../components/Products')
const ProductScreen = () => import('../components/screens/ProductScreen')
const CartScreen = () => import('../components/screens/CartScreen')
const LoginScreen = () => import('../components/screens/LoginScreen')
const SignupScreen = () => import('../components/screens/SignupScreen')
const NotFoundScreen = () => import('../components/screens/NotFound')
const ProfileScreen = () => import('../components/screens/ProfileScreen')

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'homeScreen',
      component: HomeScreen
    },
    {
      path: '/product/:id?',
      name: 'productScreen',
      component: ProductScreen
    },
    {
      path: '/cart',
      name: 'cartScreen',
      component: CartScreen,
      meta: {
        isAuth: false
      }
    },
    {
      path: '/login',
      name: 'loginScreen',
      component: LoginScreen
    },
    {
      path: '/signup',
      name: 'signUpScreen',
      component: SignupScreen
    },

    {
      path: '/profile',
      name: 'profileScreen',
      component: ProfileScreen
    },

    {
      path: '*',
      name: 'notFoundScreen',
      component: NotFoundScreen
    }
  ]
})

router.beforeEach((to, from, next) => {

  if (to.name === 'cartScreen') {
    const token = JSON.parse(localStorage.getItem('token'))
    if (!token) {
      next({ name: 'loginScreen' })
    } else {

      next()
    }
  } else {
    next()
  }


})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
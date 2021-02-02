import VueRouter from 'vue-router'
const Products = () => import('../components/Products')
const ProductScreen = () => import('../components/screens/ProductScreen')
const CartScreen = () => import('../components/screens/CartScreen')
const LoginScreen = () => import('../components/screens/LoginScreen')
const SignupScreen = () => import('../components/screens/SignupScreen')

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/product/:id?',
      name: 'productScreen',
      component: ProductScreen
    },
    {
      path: '/cart',
      name: 'cartScreen',
      component: CartScreen
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
    }
  ]
})


router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
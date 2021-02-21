import VueRouter from 'vue-router'
import { routeHandler } from '../utils/routeUtils'

const HomeScreen = () => import(/* webpackChunkName: "HomeScreen" */ '../components/Products')
const ProductScreen = () => import(/* webpackChunkName: "ProductScreen" */ '../components/screens/ProductScreen')
const CartScreen = () => import(/* webpackChunkName: "CartScreen" */ '../components/screens/CartScreen')
const LoginScreen = () => import(/* webpackChunkName: "LoginScreen" */ '../components/screens/LoginScreen')
const SignupScreen = () => import(/* webpackChunkName: "SignupScreen" */ '../components/screens/SignupScreen')
const NotFoundScreen = () => import(/* webpackChunkName: "NotFoundScreen" */ '../components/screens/NotFound')
const ProfileScreen = () => import(/* webpackChunkName: "ProfileScreen" */ '../components/screens/ProfileScreen')
const ContactScreen = () => import(/* webpackChunkName: "ContactScreen" */ '../components/screens/ContactScreen')
const ShippingInfoScreen = () => import(/* webpackChunkName: "ShippingInfoScreen" */ '../components/screens/ShippingInfoScreen')
const PaymentScreen = () => import(/* webpackChunkName: "PaymentScreen" */ '../components/screens/PaymentScreen')
const ReviewOrderScreen = () => import(/* webpackChunkName: "ReviewOrderScreen" */ '../components/screens/ReviewOrderScreen')

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
    },

    {
      path: '/login',
      name: 'loginScreen',
      component: LoginScreen,
    },

    {
      path: '/signup',
      name: 'signUpScreen',
      component: SignupScreen
    },

    {
      path: '/profile',
      name: 'profileScreen',
      component: ProfileScreen,

    },

    {
      path: '/contact',
      name: 'contactScreen',
      component: ContactScreen,
    },

    {
      path: '/shipping',
      name: 'shippingInfoScreen',
      component: ShippingInfoScreen,

    },

    {
      path: '/payment',
      name: 'paymentScreen',
      component: PaymentScreen,

    },

    {
      path: '/order',
      name: 'reviewOrderScreen',
      component: ReviewOrderScreen,

    },

    {
      path: '*',
      name: 'notFoundScreen',
      component: NotFoundScreen
    }
  ]
})

router.beforeEach((to, from, next) => {
  routeHandler(to, from, next)
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
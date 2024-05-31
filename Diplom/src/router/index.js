import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from '../components/Catalog.vue'
import Cart from '../components/Cart.vue'
import Favorite from '../components/Favorite.vue'
import notfound from '../pages/notfound.vue'

const routes = [

  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: notfound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
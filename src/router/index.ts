import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'
import Item from '../views/Item.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'
import CategoryItems from '../views/CategoryItems.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
    props: true
  },
  {
    path: '/categories/:category',
    name: 'CategoryItems',
    component: CategoryItems,
    props: true
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

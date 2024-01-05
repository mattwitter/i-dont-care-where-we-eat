/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Naron Family Dinner',
    component: Home,
  }
]

const router = new VueRouter({
  routes,
  mode: "history", // remove # from URL
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
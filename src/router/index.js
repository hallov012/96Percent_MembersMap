import Vue from 'vue'
import VueRouter from 'vue-router'
import TheMapView from '../views/TheMapView.vue'
import TheMembersView from '../views/TheMembersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheMapView
  },
  {
    path: '/members',
    name: 'members',
    component: TheMembersView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

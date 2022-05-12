import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageMediation',
    component: () => import(/* webpackChunkName: "about" */ '../pages/PageMediation.vue')
  },
  {
    path: '/mypayments',
    component: () => import('../pages/PageMyPayments.vue')
  },
  {
    path: '/applications',
    component: () => import('../pages/PageApplications.vue')
  },
  {
    path: '/creatives',
    component: () => import('../pages/PageCreatives.vue')
  },
  {
    path: '/crosspromocampaigns',
    component: () => import('../pages/PageCampaigns.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

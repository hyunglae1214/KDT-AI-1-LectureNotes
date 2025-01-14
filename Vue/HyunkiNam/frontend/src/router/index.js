import Vue from 'vue'
import VueRouter from 'vue-router'
// @는 현재 src 폴더를 의미함

import PracticePage from '@/views/practice/PracticePage.vue'
import KakaoAPIPage from '@/views/practice/KakaoAPIPage.vue'

import HomeView from '@/views/HomeView.vue'
import HtmlTest from '@/views/html/HtmlTest.vue'
import CssTest from '@/views/css/CssTest.vue'

import VueDataBindingPage from '@/views/basics/binding/VueDataBindingPage.vue'

import VueClickEventPage from '@/views/basics/event/VueClickEventPage.vue'
import VueInputEventPage from '@/views/basics/event/VueInputEventPage.vue'

import DuplexWithModelPage from '@/views/basics/vModel/DuplexWithModelPage'
import VueCheckboxPage from '@/views/basics/vModel/VueCheckboxPage.vue'
import VueMultiCheckboxPage from '@/views/basics/vModel/VueMultiCheckboxPage.vue'

import ComponentTestPage from '@/views/basics/componentTest/ComponentTestPage.vue'
import DataSendTestPage from '@/views/basics/axios/DataSendTestPage.vue'
import DataResponseFromSpringPage from '@/views/basics/axios/DataResponseFromSpringPage'

import HomeworkPage from '@/views/homework/HomeworkPage.vue'
import Problem4Page from '@/views/homework/Problem4Page.vue'
import Problem5Page from '@/views/homework/Problem5Page.vue'
import ProductImagePage from '@/views/homework/ProductImagePage.vue'
import ProductOrderPage from '@/views/homework/ProductOrderPage.vue'
import VueLifeCycleTestPage from '@/views/basics/lifeCycle/VueLifeCycleTestPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/htmlTest',
    name: 'HtmlTest',
    component: HtmlTest
  },
  {
    path: '/cssTest',
    name: 'CssTest',
    component: CssTest
  },
  {
    path: '/vue-data-binding-page',
    name: 'VueDataBindingPage',
    component: VueDataBindingPage
  },
  {
    path: '/vue-click-event-page',
    name: 'VueClickEventPage',
    component: VueClickEventPage
  },
  {
    path: '/vue-input-event-page',
    name: 'VueInputEventPage',
    component: VueInputEventPage
  },
  {
    path: '/duplex-model-test-page',
    name: 'DuplexWithModelPage',
    component: DuplexWithModelPage
  },
  {
    path: '/vue-checkbox-page',
    name: 'VueCheckboxPage',
    component: VueCheckboxPage
  },
  {
    path: '/vue-multi-checkbox-page',
    name: 'VueMultiCheckboxPage',
    component: VueMultiCheckboxPage
  },
  {
    path: '/global-component-test-page',
    name: 'ComponentTestPage',
    component: ComponentTestPage
  },
  {
    path: '/axios-test-page',
    name: 'DataSendTestPage',
    component: DataSendTestPage
  },
  {
    path: '/random-dice-from-spring',
    name: 'DataResponseFromSpringPage',
    component: DataResponseFromSpringPage
  },
  {
    path: '/homework-page',
    name: 'HomeworkPage',
    component: HomeworkPage
  },
  {
    path: '/vue-lifecycle-test',
    name: 'VueLifeCycleTestPage',
    component: VueLifeCycleTestPage
  },
  {
    path: '/practice-page',
    name: 'PracticePage',
    component: PracticePage
  },
  {
    path: '/kakao-api-page',
    name: 'KakaoAPIPage',
    component: KakaoAPIPage
  },
  {
    path: '/problem4-page',
    name: 'Problem4Page',
    component: Problem4Page
  },
  {
    path: '/problem5-page',
    name: 'Problem5Page',
    component: Problem5Page
  },
  {
    path: '/product-image-page',
    name: 'ProductImagePage',
    component: ProductImagePage
  },
  {
    path: '/product-order-page',
    name: 'ProductOrderPage',
    component: ProductOrderPage
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

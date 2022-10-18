import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/request',
    name: 'RequestPage',
    meta: {
      title: 'request demo',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/request.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;

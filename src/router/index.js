import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../components/Test.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
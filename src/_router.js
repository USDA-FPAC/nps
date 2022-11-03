import { createRouter, createWebHistory } from 'vue-router';

import { sharedRoutes } from '@/Shared/_routes/shared.routes';
import { demosRoutes } from '@/Demos/_routes/demos.routes';
import { paymentsRoutes } from '@/Payments/_routes/payments.routes';



const routes = [
  ...sharedRoutes,
  ...demosRoutes,
  ...paymentsRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/nps/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/home/HomePage.vue'
import AddIngridient from '@/views/addIngridient/AddIngridient.vue';
import IngridientsPage from '@/views/ingridients/IngridientsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/add-ingridient',
    name: 'AddIngridient',
    component: AddIngridient,
  },
  {
    path: '/ingridients',
    name: 'Ingridients',
    component: IngridientsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

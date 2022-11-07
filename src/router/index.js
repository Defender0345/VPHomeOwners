import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ConstitutionView from '../views/ConstitutionView.vue';
import AnnexuresView from '../views/AnnexuresView.vue';
import CoCTRental from '../views/CoCTRental.vue';
import NewsView from '../views/NewsView.vue';
import PoliciesView from '../views/PoliciesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/constitution',
      name: 'constitution',
      component: ConstitutionView,
    },
    {
      path: '/annexures',
      name: 'annexures',
      component: AnnexuresView,
    },
    {
      path: '/coctrental',
      name: 'coctrental',
      component: CoCTRental,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/policies/:id',
      name: 'policies',
      props: true,
      component: PoliciesView,
    },
  ],
});

export default router;

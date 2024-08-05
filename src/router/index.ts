import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WordsView from '../views/WordsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/words/:word',
      name: 'words',
      component: WordsView
    }
  ]
});

export default router;

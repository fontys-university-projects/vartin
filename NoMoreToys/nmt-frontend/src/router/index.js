import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import GameView from '../views/GameView.vue'

import MathGame from '../views/games/MathGame.vue'
import SimonSays from '../views/games/SimonSays.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/g/math',
      name: 'math-game',
      component: MathGame
    },
    {
      path: '/g/simon-says',
      name: 'simon-says',
      component: SimonSays
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

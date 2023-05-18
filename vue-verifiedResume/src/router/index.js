import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import RecruitersView from '../views/RecruitersView.vue'
// import CandidatesView from '../views/CandidatesView.vue'
// import NotificationsView from '../views/NotificationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeesView
    },
    {
      path: '/recruiters',
      name: 'recruiters',
      component: RecruitersView
    },
    // {
    //   path: '/candidates',
    //   name: 'candidates',
    //   component: CandidatesView
    // },
    // {
    //   path: '/notifications',
    //   name: 'notifications',
    //   component: NotificationsView
    // },
  ]
})

export default router

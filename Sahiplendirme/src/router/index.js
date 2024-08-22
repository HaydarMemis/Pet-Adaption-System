import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import adminRouter from './admin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import('../views/PetsView.vue')
    },
    {
      path: '/pet/:id',
      name: 'pet',
      component: () => import('../views/PetView.vue'),
      props: true
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: () => import('../views/AdoptView.vue')
    },
    {
      path: '/sincan-municipality',
      name: 'sincanMunicipality',
      component: () => import('../views/SincanMunicipalityView.vue')
    },
    {
      path: '/pet-shelters',
      name: 'petShelters',
      component: () => import('../views/PetSheltersView.vue')
    },
    {
      path: '/adoption-process',
      name: 'adoptionProcess',
      component: () => import('../views/AdoptionProcessView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../views/ApplyView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/admin',
      name: 'adminHome',
      component: () => import('../views/admin/AdminHomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/pets',
      name: 'adminPets',
      component: () => import('../views/admin/AdminPetsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/shelters',
      name: 'adminShelters',
      component: () => import('../views/admin/AdminSheltersView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/applications',
      name: 'adminApplications',
      component: () => import('../views/admin/AdminApplicationsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/events',
      name: 'adminEvents',
      component: () => import('../views/admin/AdminEventsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/users',
      name: 'adminUsers',
      component: () => import('../views/admin/AdminUsersView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

export default router

const 
adminRouter= [
    {
      path: '/admin',
      name: 'adminHome',
      component: () => import('../../views/admin/AdminHomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/pets',
      name: 'adminPets',
      component: () => import('../../views/admin/AdminPetsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/shelters',
      name: 'adminShelters',
      component: () => import('../../views/admin/AdminSheltersView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/applications',
      name: 'adminApplications',
      component: () => import('../../views/admin/AdminApplicationsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/events',
      name: 'adminEvents',
      component: () => import('../../views/admin/AdminEventsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/users',
      name: 'adminUsers',
      component: () => import('../../views/admin/AdminUsersView.vue'),
      meta: { requiresAuth: true }
    }
  ]

export default adminRouter

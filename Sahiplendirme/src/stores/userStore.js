
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isAuthenticated: false,
    favorites: []
  }),
  
  getters: {
    getUserInfo: (state) => state.currentUser,
    isLoggedIn: (state) => state.isAuthenticated,
    getFavorites: (state) => state.favorites
  },
  
  actions: {
    login(userData) {
      this.currentUser = userData
      this.isAuthenticated = true
    },
    logout() {
      this.currentUser = null
      this.isAuthenticated = false
      this.favorites = []
    },
    updateUserInfo(newUserData) {
      this.currentUser = { ...this.currentUser, ...newUserData }
    },
    addToFavorites(petId) {
      if (!this.favorites.includes(petId)) {
        this.favorites.push(petId)
      }
    },
    removeFromFavorites(petId) {
      const index = this.favorites.indexOf(petId)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
    }
  }
})

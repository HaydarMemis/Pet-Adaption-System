import { defineStore } from 'pinia';

export const useUserStore = defineStore('adminUsers', {
  state: () => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        // API'den kullanıcıları çekme işlemi burada yapılacak
        // Örnek: const response = await api.getUsers();
        // this.users = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Kullanıcılar yüklenirken bir hata oluştu.';
        console.error('Kullanıcılar yüklenirken hata:', err);
      } finally {
        this.loading = false;
      }
    },

    async createUser(userData) {
      this.loading = true;
      try {
        // API'ye yeni kullanıcı ekleme işlemi burada yapılacak
        // Örnek: const response = await api.createUser(userData);
        // this.users.push(response.data);
        this.error = null;
      } catch (err) {
        this.error = 'Kullanıcı eklenirken bir hata oluştu.';
        console.error('Kullanıcı ekleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async updateUser(id, userData) {
      this.loading = true;
      try {
        // API'de kullanıcı güncelleme işlemi burada yapılacak
        // Örnek: const response = await api.updateUser(id, userData);
        // const index = this.users.findIndex(user => user.id === id);
        // if (index !== -1) this.users[index] = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Kullanıcı güncellenirken bir hata oluştu.';
        console.error('Kullanıcı güncelleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async deleteUser(id) {
      this.loading = true;
      try {
        // API'den kullanıcı silme işlemi burada yapılacak
        // Örnek: await api.deleteUser(id);
        // this.users = this.users.filter(user => user.id !== id);
        this.error = null;
      } catch (err) {
        this.error = 'Kullanıcı silinirken bir hata oluştu.';
        console.error('Kullanıcı silme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    setCurrentUser(user) {
      this.currentUser = user;
    }
  },

  getters: {
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === id);
    }
  }
});

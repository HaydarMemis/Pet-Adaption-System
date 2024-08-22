import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('adminApplications', {
  state: () => ({
    applications: [],
    currentApplication: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchApplications() {
      this.loading = true;
      try {
        // API'den başvuruları çekme işlemi burada yapılacak
        // Örnek: const response = await api.getApplications();
        // this.applications = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Başvurular yüklenirken bir hata oluştu.';
        console.error('Başvurular yüklenirken hata:', err);
      } finally {
        this.loading = false;
      }
    },

    async createApplication(applicationData) {
      this.loading = true;
      try {
        // API'ye yeni başvuru gönderme işlemi burada yapılacak
        // Örnek: const response = await api.createApplication(applicationData);
        // this.applications.push(response.data);
        this.error = null;
      } catch (err) {
        this.error = 'Başvuru oluşturulurken bir hata oluştu.';
        console.error('Başvuru oluşturma hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async updateApplication(id, applicationData) {
      this.loading = true;
      try {
        // API'de başvuru güncelleme işlemi burada yapılacak
        // Örnek: const response = await api.updateApplication(id, applicationData);
        // const index = this.applications.findIndex(app => app.id === id);
        // if (index !== -1) this.applications[index] = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Başvuru güncellenirken bir hata oluştu.';
        console.error('Başvuru güncelleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async deleteApplication(id) {
      this.loading = true;
      try {
        // API'den başvuru silme işlemi burada yapılacak
        // Örnek: await api.deleteApplication(id);
        // this.applications = this.applications.filter(app => app.id !== id);
        this.error = null;
      } catch (err) {
        this.error = 'Başvuru silinirken bir hata oluştu.';
        console.error('Başvuru silme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    setCurrentApplication(application) {
      this.currentApplication = application;
    }
  },

  getters: {
    getApplicationById: (state) => (id) => {
      return state.applications.find(app => app.id === id);
    },
    getPendingApplications: (state) => {
      return state.applications.filter(app => app.status === 'pending');
    },
    getApprovedApplications: (state) => {
      return state.applications.filter(app => app.status === 'approved');
    },
    getRejectedApplications: (state) => {
      return state.applications.filter(app => app.status === 'rejected');
    }
  }
});

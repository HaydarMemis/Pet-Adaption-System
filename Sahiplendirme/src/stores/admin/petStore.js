import { defineStore } from 'pinia';

export const usePetStore = defineStore('adminPets', {
  state: () => ({
    pets: [],
    currentPet: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchPets() {
      this.loading = true;
      try {
        // API'den evcil hayvanları çekme işlemi burada yapılacak
        // Örnek: const response = await api.getPets();
        // this.pets = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Evcil hayvanlar yüklenirken bir hata oluştu.';
        console.error('Evcil hayvanlar yüklenirken hata:', err);
      } finally {
        this.loading = false;
      }
    },

    async createPet(petData) {
      this.loading = true;
      try {
        // API'ye yeni evcil hayvan ekleme işlemi burada yapılacak
        // Örnek: const response = await api.createPet(petData);
        // this.pets.push(response.data);
        this.error = null;
      } catch (err) {
        this.error = 'Evcil hayvan eklenirken bir hata oluştu.';
        console.error('Evcil hayvan ekleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async updatePet(id, petData) {
      this.loading = true;
      try {
        // API'de evcil hayvan güncelleme işlemi burada yapılacak
        // Örnek: const response = await api.updatePet(id, petData);
        // const index = this.pets.findIndex(pet => pet.id === id);
        // if (index !== -1) this.pets[index] = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Evcil hayvan güncellenirken bir hata oluştu.';
        console.error('Evcil hayvan güncelleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    async deletePet(id) {
      this.loading = true;
      try {
        // API'den evcil hayvan silme işlemi burada yapılacak
        // Örnek: await api.deletePet(id);
        // this.pets = this.pets.filter(pet => pet.id !== id);
        this.error = null;
      } catch (err) {
        this.error = 'Evcil hayvan silinirken bir hata oluştu.';
        console.error('Evcil hayvan silme hatası:', err);
      } finally {
        this.loading = false;
      }
    },

    setCurrentPet(pet) {
      this.currentPet = pet;
    }
  },

  getters: {
    getPetById: (state) => (id) => {
      return state.pets.find(pet => pet.id === id);
    },
    getAvailablePets: (state) => {
      return state.pets.filter(pet => pet.status === 'available');
    }
  }
});

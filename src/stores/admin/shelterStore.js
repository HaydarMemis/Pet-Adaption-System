import { defineStore } from 'pinia';
import axios from 'axios';

export const useShelterStore = defineStore('shelter', {
  state: () => ({
    shelters: [],
    loading: false,
    error: null,
  }),
  
  actions: {
    async fetchShelters() {
      this.loading = true;
      try {
        const response = await axios.get('/api/shelters');
        this.shelters = response.data;
        this.error = null;
      } catch (err) {
        this.error = 'Barınakları getirirken bir hata oluştu.';
        console.error('Barınakları getirme hatası:', err);
      } finally {
        this.loading = false;
      }
    },
    
    async addShelter(shelterData) {
      this.loading = true;
      try {
        const response = await axios.post('/api/shelters', shelterData);
        this.shelters.push(response.data);
        this.error = null;
      } catch (err) {
        this.error = 'Barınak eklerken bir hata oluştu.';
        console.error('Barınak ekleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },
    
    async updateShelter(id, updatedData) {
      this.loading = true;
      try {
        const response = await axios.put(`/api/shelters/${id}`, updatedData);
        const index = this.shelters.findIndex(shelter => shelter.id === id);
        if (index !== -1) {
          this.shelters[index] = response.data;
        }
        this.error = null;
      } catch (err) {
        this.error = 'Barınak güncellenirken bir hata oluştu.';
        console.error('Barınak güncelleme hatası:', err);
      } finally {
        this.loading = false;
      }
    },
    
    async deleteShelter(id) {
      this.loading = true;
      try {
        await axios.delete(`/api/shelters/${id}`);
        this.shelters = this.shelters.filter(shelter => shelter.id !== id);
        this.error = null;
      } catch (err) {
        this.error = 'Barınak silinirken bir hata oluştu.';
        console.error('Barınak silme hatası:', err);
      } finally {
        this.loading = false;
      }
    },
  },
});

import { defineStore } from 'pinia'

export const useSheltersStore = defineStore('shelters', {
  state: () => ({
    shelters: [
      {
        id: 1,
        name: 'Umut Barınağı',
        address: 'Ankara, Çankaya',
        phone: '0312 123 4567',
        email: 'umut@barinak.com',
        description: 'Umut Barınağı, sokak hayvanlarına yeni bir yaşam şansı sunuyor.',
        imageUrl: 'https://picsum.photos/id/1059/400/300'
      },
      {
        id: 2,
        name: 'Patili Dostlar Yuvası',
        address: 'İstanbul, Kadıköy',
        phone: '0216 987 6543',
        email: 'info@patilidustlar.com',
        description: 'Patili Dostlar Yuvası, kedi ve köpeklere sıcak bir yuva sağlıyor.',
        imageUrl: 'https://picsum.photos/id/1025/400/300'
      },
      {
        id: 3,
        name: 'Sevgi Evi Barınağı',
        address: 'İzmir, Bornova',
        phone: '0232 345 6789',
        email: 'sevgievi@barinak.org',
        description: 'Sevgi Evi Barınağı, tüm hayvanları sevgiyle kucaklıyor.',
        imageUrl: 'https://picsum.photos/id/1074/400/300'
      }
    ]
  }),
  
  getters: {
    getAllShelters: (state) => state.shelters,
    getShelterById: (state) => (id) => state.shelters.find(shelter => shelter.id === id)
  },
  
  actions: {
    addShelter(shelter) {
      this.shelters.push(shelter)
    },
    updateShelter(updatedShelter) {
      const index = this.shelters.findIndex(shelter => shelter.id === updatedShelter.id)
      if (index !== -1) {
        this.shelters[index] = updatedShelter
      }
    },
    removeShelter(id) {
      this.shelters = this.shelters.filter(shelter => shelter.id !== id)
    }
  }
})

import { defineStore } from 'pinia'

export const usePetStore = defineStore('pet', {
  state: () => ({
    pets: [
      {
        id: 1,
        name: 'Boncuk',
        type: 'Kedi',
        age: 3,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1074/400/300',
        description: 'Sevimli ve oyuncu Boncuk, kucak kedisi olmayı çok seviyor.'
      },
      {
        id: 2,
        name: 'Karabaş',
        type: 'Köpek',
        age: 5,
        size: 'Büyük',
        imageUrl: 'https://picsum.photos/id/1025/400/300',
        description: 'Sadık ve enerjik Karabaş, aktif bir aile arıyor.'
      },
      {
        id: 16,
        name: 'Duman',
        type: 'Kedi',
        age: 2,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1074/400/300',
        description: 'Gri tüyleri ve yeşil gözleriyle büyüleyici Duman, kucak kedisi olmaya aday.'
      },
      {
        id: 17,
        name: 'Karabaş',
        type: 'Köpek',
        age: 5,
        size: 'Büyük',
        imageUrl: 'https://picsum.photos/id/1025/400/300',
        description: 'Güçlü ve zeki Karabaş, aktif bir aile arıyor.'
      },
      {
        id: 18,
        name: 'Fıstık',
        type: 'Hamster',
        age: 1,
        size: 'Minik',
        imageUrl: 'https://picsum.photos/id/1060/400/300',
        description: 'Enerjik ve sevimli Fıstık, size eğlenceli anlar yaşatacak.'
      },
      {
        id: 19,
        name: 'Şanslı',
        type: 'Köpek',
        age: 3,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1062/400/300',
        description: 'Neşeli ve oyuncu Şanslı, yeni ailesini bekliyor.'
      },
      {
        id: 20,
        name: 'Pamuk',
        type: 'Tavşan',
        age: 2,
        size: 'Küçük',
        imageUrl: 'https://picsum.photos/id/1027/400/300',
        description: 'Yumuşacık ve sevimli Pamuk, sizinle vakit geçirmeyi çok seviyor.'
      },
      {
        id: 21,
        name: 'Zeytin',
        type: 'Kedi',
        age: 4,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1069/400/300',
        description: 'Siyah tüyleri ve amber gözleriyle etkileyici Zeytin, sakin bir ev arıyor.'
      },
      {
        id: 22,
        name: 'Çıtır',
        type: 'Kuş',
        age: 1,
        size: 'Minik',
        imageUrl: 'https://picsum.photos/id/1024/400/300',
        description: 'Renkli tüyleri ve melodili sesiyle Çıtır, evinize neşe katacak.'
      },
      {
        id: 23,
        name: 'Bulut',
        type: 'Köpek',
        age: 6,
        size: 'Büyük',
        imageUrl: 'https://picsum.photos/id/1025/400/300',
        description: 'Beyaz tüyleri ve sakin yapısıyla Bulut, huzurlu bir arkadaş arıyor.'
      },
      {
        id: 24,
        name: 'Tarçın',
        type: 'Kedi',
        age: 3,
        size: 'Küçük',
        imageUrl: 'https://picsum.photos/id/1074/400/300',
        description: 'Kahverengi tüyleri ve oyuncu karakteriyle Tarçın, size arkadaş olmak istiyor.'
      },
      {
        id: 25,
        name: 'Kıvırcık',
        type: 'Köpek',
        age: 2,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1062/400/300',
        description: 'Kıvırcık tüyleri ve enerjik yapısıyla size neşe katacak.'
      },
      {
        id: 26,
        name: 'Mavi',
        type: 'Muhabbet Kuşu',
        age: 1,
        size: 'Minik',
        imageUrl: 'https://picsum.photos/id/1024/400/300',
        description: 'Mavi tüyleri ve sevecen karakteriyle size arkadaş olmak için bekliyor.'
      },
      {
        id: 27,
        name: 'Şeker',
        type: 'Kedi',
        age: 5,
        size: 'Orta',
        imageUrl: 'https://picsum.photos/id/1069/400/300',
        description: 'Tatlı ve sevecen Şeker, kucağınızda uyumayı çok seviyor.'
      },
      {
        id: 28,
        name: 'Cesur',
        type: 'Köpek',
        age: 4,
        size: 'Büyük',
        imageUrl: 'https://picsum.photos/id/1025/400/300',
        description: 'Güçlü ve cesur yapısıyla ailenizi korumaya hazır.'
      },
      {
        id: 29,
        name: 'Minnoş',
        type: 'Hamster',
        age: 1,
        size: 'Minik',
        imageUrl: 'https://picsum.photos/id/1060/400/300',
        description: 'Minik ve sevimli Minnoş, size eğlenceli anlar yaşatacak.'
      },
      {
        id: 30,
        name: 'Karamel',
        type: 'Tavşan',
        age: 2,
        size: 'Küçük',
        imageUrl: 'https://picsum.photos/id/1027/400/300',
        description: 'Kahverengi tüyleri ve sevimli burnu ile Karamel, sizinle oynamak için sabırsızlanıyor.'
      }
    ]
  }),
  getters: {
    getAllPets: (state) => state.pets,
    getPetById: (state) => (id) => state.pets.find(pet => pet.id === id)
  },
  actions: {
    addPet(pet) {
      this.pets.push(pet)
    },
    removePet(id) {
      const index = this.pets.findIndex(pet => pet.id === id)
      if (index !== -1) {
        this.pets.splice(index, 1)
      }
    },
    updatePet(updatedPet) {
      const index = this.pets.findIndex(pet => pet.id === updatedPet.id)
      if (index !== -1) {
        this.pets[index] = updatedPet
      }
    }
  }
})

<template>
  <div class=" min-h-screen p-4 sm:p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl sm:text-6xl font-extrabold text-center text-indigo-800 mb-2 tracking-tight">Sevgi Dolu Dostlar</h1>
      <p class="text-xl sm:text-2xl text-center text-indigo-600 mb-12">Yeni bir aile üyesi edinmeye hazır mısınız?</p>
      
      <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-bold text-indigo-700 mb-4">Filtrele</h2>
        <div class="flex flex-wrap gap-4 mb-4">
          <button v-for="type in ['Hepsi', 'Kedi', 'Köpek', 'Tavşan', 'Kuş', 'Diğer']" :key="type"
                  @click="filterPets(type)"
                  class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  :class="selectedType === type ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
            {{ type }}
          </button>
        </div>
        <div class="flex flex-wrap gap-4">
          <select v-model="selectedAge" @change="filterPets(selectedType)" 
                  class="bg-gray-200 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300">
            <option value="all">Tüm Yaşlar</option>
            <option value="young">Yavru (0-1 yaş)</option>
            <option value="junior">Genç (1-3 yaş)</option>
            <option value="adult">Yetişkin (3-7 yaş)</option>
            <option value="senior">Kıdemli (7+ yaş)</option>
          </select>
          <select v-model="selectedSize" @change="filterPets(selectedType)"
                  class="bg-gray-200 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300">
            <option value="all">Tüm Boyutlar</option>
            <option value="tiny">Minik</option>
            <option value="small">Küçük</option>
            <option value="medium">Orta</option>
            <option value="large">Büyük</option>
            <option value="xlarge">Çok Büyük</option>
          </select>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="pet in filteredPets" :key="pet.id" 
             class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div class="relative h-72">
            <img :src="pet.imageUrl" :alt="pet.name" class="w-full h-full object-cover">
            <span class="absolute top-4 right-4 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full text-sm">{{ pet.type }}</span>
          </div>
          <div class="p-6">
            <h2 class="text-3xl font-bold text-indigo-700 mb-2">{{ pet.name }}</h2>
            <p class="text-lg text-indigo-500 italic mb-3">{{ pet.age }} yaşında</p>
            <p class="text-gray-600 mb-2">{{ pet.size }}</p>
            <p class="text-gray-700 mb-6">{{ pet.description }}</p>
            <button @click="showDetails(pet.id)" 
                    class="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Tanış
            </button>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row justify-center items-center mt-16 space-y-4 sm:space-y-0 sm:space-x-6">
        <RouterLink to="/adopt" 
                    class="w-full sm:w-auto bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-center">
          Sahiplen
        </RouterLink>
        <RouterLink to="/pet-shelters" 
                    class="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-center">
          Barınaklar
        </RouterLink>
        <RouterLink to="/adoption-process" 
                    class="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 text-center">
          Süreç
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { usePetStore } from '@/stores/petStore'
import { useAdoptionProcessStore } from '@/stores/adoptionProcessStore'
import { useSheltersStore } from '@/stores/sheltersStore'

const router = useRouter()
const petStore = usePetStore()
const adoptionProcessStore = useAdoptionProcessStore()
const sheltersStore = useSheltersStore()

const selectedType = ref('Hepsi')
const selectedAge = ref('all')
const selectedSize = ref('all')

const filteredPets = computed(() => {
  return petStore.getAllPets.filter(pet => {
    const typeMatch = selectedType.value === 'Hepsi' || pet.type === selectedType.value
    const ageMatch = selectedAge.value === 'all' ||
      (selectedAge.value === 'young' && pet.age <= 1) ||
      (selectedAge.value === 'junior' && pet.age > 1 && pet.age <= 3) ||
      (selectedAge.value === 'adult' && pet.age > 3 && pet.age <= 7) ||
      (selectedAge.value === 'senior' && pet.age > 7)
    const sizeMatch = selectedSize.value === 'all' || pet.size.toLowerCase() === selectedSize.value
    return typeMatch && ageMatch && sizeMatch
  })
})

const filterPets = (type) => {
  selectedType.value = type
}

const showDetails = (id) => {
  router.push({ name: 'pet', params: { id: id } })
}
</script>

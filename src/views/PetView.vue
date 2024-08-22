<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="pet" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="pet.imageUrl" :alt="pet.name" class="w-full h-64 object-cover object-center">
      <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ pet.name }}</h1>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p class="text-gray-600"><span class="font-semibold">Tür:</span> {{ pet.type }}</p>
            <p class="text-gray-600"><span class="font-semibold">Yaş:</span> {{ pet.age }} yaşında</p>
          </div>
          <div>
            <p class="text-gray-600"><span class="font-semibold">Boyut:</span> {{ pet.size }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-6">{{ pet.description }}</p>
        <button @click="applyForAdoption" class="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Sahiplenme Başvurusu Yap
        </button>
      </div>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-2xl text-gray-600">Yükleniyor...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePetStore } from '@/stores/petStore';
import { useAdoptionProcessStore } from '@/stores/adoptionProcessStore';

const route = useRoute();
const router = useRouter();
const petStore = usePetStore();
const adoptionProcessStore = useAdoptionProcessStore();

const pet = ref(null);

onMounted(() => {
  const petId = parseInt(route.params.id);
  pet.value = petStore.getPetById(petId);
});

const applyForAdoption = () => {
  adoptionProcessStore.resetProcess();
  router.push({ name: 'adoption-process', params: { petId: pet.value.id } });
};
</script>

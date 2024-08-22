<template>
  <div class="adoption-process-view bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-indigo-700 mb-4">Sahiplenme Süreci</h1>
      <p class="text-xl text-gray-600 mb-8">Evcil hayvan sahiplenme sürecini adım adım öğrenin.</p>

      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Sahiplenme Adımları</h2>
        <ol class="list-decimal list-inside space-y-3 text-gray-700">
          <li>Evcil hayvanları inceleyin</li>
          <li>Sahiplenmek istediğiniz hayvanı seçin</li>
          <li>Başvuru formunu doldurun</li>
          <li>Onay için bekleyin</li>
          <li>Onay aldıktan sonra evcil hayvanınızı alın</li>
        </ol>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">İlgili Sayfalar</h2>
        <ul class="space-y-3">
          <li><RouterLink to="/pets" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">Evcil Hayvanları Görüntüle</RouterLink></li>
          <li><RouterLink to="/adopt" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">Sahiplenme Başvurusu Yap</RouterLink></li>
          <li><RouterLink to="/pet-shelters" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">Hayvan Barınakları</RouterLink></li>
          <li><RouterLink to="/contact" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">Bize Ulaşın</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

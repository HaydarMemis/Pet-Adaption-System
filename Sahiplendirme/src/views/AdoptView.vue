<template>
  <div class="bg-gradient-to-r from-purple-100 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-extrabold text-indigo-800 mb-6 text-center">Sahiplenme Sayfası</h1>
      <p class="text-xl text-indigo-600 mb-12 text-center">Evcil hayvan sahiplenmek için aşağıdaki adımları takip edebilirsiniz.</p>

      <div class="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-6">Sahiplenme Adımları</h2>
        <ol class="list-decimal list-inside space-y-4 text-gray-700">
          <li class="flex items-center">
            <span class="text-indigo-500 font-semibold mr-2">1.</span>
            Evcil hayvanları inceleyin
          </li>
          <li class="flex items-center">
            <span class="text-indigo-500 font-semibold mr-2">2.</span>
            Sahiplenmek istediğiniz hayvanı seçin
          </li>
          <li class="flex items-center">
            <span class="text-indigo-500 font-semibold mr-2">3.</span>
            Başvuru formunu doldurun
          </li>
          <li class="flex items-center">
            <span class="text-indigo-500 font-semibold mr-2">4.</span>
            Onay için bekleyin
          </li>
          <li class="flex items-center">
            <span class="text-indigo-500 font-semibold mr-2">5.</span>
            Onay aldıktan sonra evcil hayvanınızı alın
          </li>
        </ol>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-6">İlgili Sayfalar</h2>
        <ul class="space-y-4">
          <li>
            <RouterLink to="/pets" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
              </svg>
              Evcil Hayvanları Görüntüle
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/adoption-process" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              Sahiplenme Süreci Hakkında Bilgi
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/pet-shelters" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Hayvan Barınakları
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              Bize Ulaşın
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

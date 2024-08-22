<template>
  <div class="pet-shelters-view bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-indigo-700 mb-4">Hayvan Barınakları</h1>
      <p class="text-xl text-gray-600 mb-8">Bölgenizdeki hayvan barınaklarını keşfedin ve sahiplendirme fırsatlarını değerlendirin.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Barınak Listesi</h2>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/sincan-municipality" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Sincan Belediyesi Hayvan Barınağı
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cankaya-municipality" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Çankaya Belediyesi Hayvan Barınağı
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/yenimahalle-municipality" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Yenimahalle Belediyesi Hayvan Barınağı
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-indigo-600 mb-4">İlgili Sayfalar</h2>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/pets" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                </svg>
                Evcil Hayvanları Görüntüle
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/adopt" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                Sahiplenme Başvurusu Yap
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/adoption-process" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Sahiplenme Süreci
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                Bize Ulaşın
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Barınak Haritası</h2>
        <div class="aspect-w-16 aspect-h-9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.74069799532!2d32.62259422617456!3d39.903376598418685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2s!4v1651234567890!5m2!1str!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

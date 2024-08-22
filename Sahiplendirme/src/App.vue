<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <img src="@/assets/image/logo.jpeg" alt="Sincan Belediyesi Logo" class="h-16 w-auto mr-4">
          <div class="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hayvan Sahiplendirme Sistemi
          </div>
        </div>
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">Ana Sayfa</RouterLink>
          <RouterLink to="/about" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">Hakkımızda</RouterLink>
          <RouterLink to="/pets" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">Evcil Hayvanlar</RouterLink>
          <RouterLink to="/adopt" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">Sahiplen</RouterLink>
          <RouterLink to="/contact" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">İletişim</RouterLink>
        </nav>
        <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div v-if="isMenuOpen" class="md:hidden bg-white py-2">
        <RouterLink to="/" class="block px-4 py-2 text-gray-600 hover:bg-purple-100">Ana Sayfa</RouterLink>
        <RouterLink to="/about" class="block px-4 py-2 text-gray-600 hover:bg-purple-100">Hakkında</RouterLink>
        <RouterLink to="/pets" class="block px-4 py-2 text-gray-600 hover:bg-purple-100">Evcil Hayvanlar</RouterLink>
        <RouterLink to="/adopt" class="block px-4 py-2 text-gray-600 hover:bg-purple-100">Sahiplen</RouterLink>
        <RouterLink to="/contact" class="block px-4 py-2 text-gray-600 hover:bg-purple-100">İletişim</RouterLink>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Hakkımızda</h3>
          <p class="text-gray-300">Sahiplendirme, evcil hayvanları sevgi dolu yuvalarla buluşturan bir platformdur.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/faq" class="text-gray-300 hover:text-white">SSS</RouterLink></li>
            <li><RouterLink to="/privacy" class="text-gray-300 hover:text-white">Gizlilik Politikası</RouterLink></li>
            <li><RouterLink to="/terms" class="text-gray-300 hover:text-white">Kullanım Şartları</RouterLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Bize Ulaşın</h3>
          <p class="text-gray-300">info@sahiplendirme.com</p>
          <p class="text-gray-300">+90 123 456 7890</p>
        </div>
      </div>
      <div class="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; 2024 Sahiplendirme. Tüm hakları saklıdır.</p>
      </div>
    </footer>

    <RouterLink to="/apply" class="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 text-lg shadow-lg transform hover:scale-105 z-50">
      Hemen Başvur
    </RouterLink>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const slides = ref([
  { src: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba', alt: 'Sevimli köpek', caption: 'Sadık dostunuzu bulun' },
  { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba', alt: 'Tatlı kedi', caption: 'Yumuşak bir arkadaş edinin' },
  { src: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308', alt: 'Yumuşak tavşan', caption: 'Yeni bir aile üyesi kazanın' },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  setInterval(nextSlide, 5000);
});

const testimonials = ref([
  { name: 'Ayşe Y.', text: 'Sincan Belediyesi sayesinde harika bir dostum oldu. Teşekkürler!', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Mehmet K.', text: 'Sahiplendirme süreci çok kolay ve profesyoneldi. Kesinlikle tavsiye ederim.', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Zeynep A.', text: 'Evimize kattığımız minik dostumuz hayatımızı değiştirdi. Mutluluk verici bir deneyim.', avatar: 'https://i.pravatar.cc/150?img=3' },
]);

const navigateToApplication = () => {
  router.push('/apply');
};
</script>

<template>
  <div class=" min-h-screen flex flex-col items-center p-8">
    <h1 class="text-6xl font-bold text-gray-800 mb-8 text-center">Sincan Belediyesi <br><span class="text-blue-600">Sahiplendirme</span></h1>

    <div class="relative w-full max-w-6xl h-[600px] mb-16 overflow-hidden rounded-3xl shadow-2xl">
      <transition-group name="slide">
        <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide" class="absolute inset-0">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-12">
            <p class="text-4xl font-semibold">{{ slide.caption }}</p>
          </div>
        </div>
      </transition-group>
      <button @click="prevSlide" class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-4 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-4 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full mb-20">
      <div class="bg-white p-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6">Neden Sahiplenmeliyim?</h2>
        <ul class="space-y-4 text-gray-600">
          <li class="flex items-center"><span class="text-green-500 mr-3 text-2xl">✓</span> Bir can dostunun hayatını değiştirin</li>
          <li class="flex items-center"><span class="text-green-500 mr-3 text-2xl">✓</span> Koşulsuz sevgi ve arkadaşlık kazanın</li>
          <li class="flex items-center"><span class="text-green-500 mr-3 text-2xl">✓</span> Topluma katkıda bulunun</li>
          <li class="flex items-center"><span class="text-green-500 mr-3 text-2xl">✓</span> Evinize neşe katın</li>
        </ul>
      </div>

      <div class="bg-white p-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6">Nasıl Sahiplenebilirim?</h2>
        <ol class="space-y-4 text-gray-600">
          <li class="flex items-center"><span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">1</span> Başvuru formunu doldurun</li>
          <li class="flex items-center"><span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">2</span> Uygun eşleşmeyi bekleyin</li>
          <li class="flex items-center"><span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">3</span> Yeni dostunuzla tanışın</li>
          <li class="flex items-center"><span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">4</span> Evlat edinme işlemlerini tamamlayın</li>
        </ol>
      </div>

      <div class="bg-white p-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6">Sahiplendirme İstatistikleri</h2>
        <div class="space-y-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600 text-lg">Sahiplendirilen Hayvanlar:</span>
            <span class="text-3xl font-bold text-blue-600">1,234</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-600 text-lg">Mutlu Aileler:</span>
            <span class="text-3xl font-bold text-green-600">987</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-600 text-lg">Barınak Kapasitesi:</span>
            <span class="text-3xl font-bold text-orange-600">500</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-10 rounded-3xl shadow-lg max-w-6xl w-full mb-20">
      <h2 class="text-4xl font-semibold text-gray-700 mb-8 text-center">Sıkça Sorulan Sorular</h2>
      <div class="space-y-6">
        <details class="bg-gray-100 p-6 rounded-xl">
          <summary class="font-semibold text-gray-700 cursor-pointer text-xl">Sahiplenmek için ücret ödeyecek miyim?</summary>
          <p class="mt-4 text-gray-600 text-lg">Hayır, sahiplendirme işlemleri ücretsizdir. Sadece aşı ve çip masrafları alınmaktadır.</p>
        </details>
        <details class="bg-gray-100 p-6 rounded-xl">
          <summary class="font-semibold text-gray-700 cursor-pointer text-xl">Sahiplendiğim hayvanın sağlık durumu nasıl?</summary>
          <p class="mt-4 text-gray-600 text-lg">Tüm hayvanlarımız veteriner kontrolünden geçirilmiş ve aşıları yapılmıştır.</p>
        </details>
        <details class="bg-gray-100 p-6 rounded-xl">
          <summary class="font-semibold text-gray-700 cursor-pointer text-xl">Sahiplendikten sonra destek alabilir miyim?</summary>
          <p class="mt-4 text-gray-600 text-lg">Evet, sahiplendirme sonrası 6 ay boyunca ücretsiz veteriner desteği sağlıyoruz.</p>
        </details>
      </div>
    </div>

    <div class="max-w-6xl w-full mb-20">
      <h2 class="text-4xl font-semibold text-gray-700 mb-10 text-center">Mutlu Sahipler</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-8 rounded-2xl shadow-lg">
          <div class="flex items-center mb-6">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-16 h-16 rounded-full mr-4">
            <h3 class="text-xl font-semibold text-gray-700">{{ testimonial.name }}</h3>
          </div>
          <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
        </div>
      </div>
    </div>

    <button @click="navigateToApplication" class="bg-blue-600 text-white font-semibold py-5 px-12 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-xl shadow-lg transform hover:scale-105">
      Hemen Başvur
    </button>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>

<template>
  <div class="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen p-8">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 class="text-4xl font-bold text-indigo-800 mb-6 text-center">Sahiplendirme Başvurusu</h1>
      
      <form @submit.prevent="submitApplication" class="space-y-6">
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
          <input type="text" id="fullName" v-model="fullName" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
          <input type="email" id="email" v-model="email" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
          <input type="tel" id="phone" v-model="phone" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Adres</label>
          <textarea id="address" v-model="address" rows="3" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div>
          <label for="petType" class="block text-sm font-medium text-gray-700 mb-1">Sahiplenmek İstediğiniz Hayvan Türü</label>
          <select id="petType" v-model="petType" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Seçiniz</option>
            <option value="kedi">Kedi</option>
            <option value="kopek">Köpek</option>
            <option value="kus">Kuş</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        
        <div>
          <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Sahiplenme Nedeniniz</label>
          <textarea id="reason" v-model="reason" rows="4" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div class="flex items-center">
          <input type="checkbox" id="terms" v-model="termsAccepted" required
                 class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="terms" class="ml-2 block text-sm text-gray-700">
            Şartları ve koşulları kabul ediyorum
          </label>
        </div>
        
        <div>
          <button type="submit" 
                  class="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            Başvuruyu Gönder
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const petType = ref('');
const reason = ref('');
const termsAccepted = ref(false);

const submitApplication = () => {
  // Burada başvuru gönderme işlemleri yapılacak
  console.log('Başvuru gönderildi:', {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    petType: petType.value,
    reason: reason.value,
    termsAccepted: termsAccepted.value
  });
  
  // Form temizleme işlemi
  fullName.value = '';
  email.value = '';
  phone.value = '';
  address.value = '';
  petType.value = '';
  reason.value = '';
  termsAccepted.value = false;
  
  // Başvuru başarılı mesajı gösterilebilir
  alert('Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
};
</script>


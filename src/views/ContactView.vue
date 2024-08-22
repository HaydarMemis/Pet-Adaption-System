<template>
  <div class="contact-view">
    <h1>Bize Ulaşın</h1>
    <p>Herhangi bir soru veya öneriniz için bizimle iletişime geçebilirsiniz.</p>

    <div class="contact-form">
      <h2>İletişim Formu</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Adınız:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">E-posta Adresiniz:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mesajınız:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>

    <div class="contact-info">
      <h2>İletişim Bilgileri</h2>
      <p>Adres: Örnek Mahallesi, Örnek Sokak No:123, Ankara</p>
      <p>Telefon: (312) 123 4567</p>
      <p>E-posta: info@sahiplendirme.com</p>
    </div>

    <div class="navigation-links">
      <h2>İlgili Sayfalar</h2>
      <ul>
        <li><RouterLink to="/pets">Evcil Hayvanları Görüntüle</RouterLink></li>
        <li><RouterLink to="/adopt">Sahiplenme Başvurusu Yap</RouterLink></li>
        <li><RouterLink to="/pet-shelters">Hayvan Barınakları</RouterLink></li>
        <li><RouterLink to="/adoption-process">Sahiplenme Süreci</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Form gönderme işlemi burada gerçekleştirilebilir
  console.log('Form gönderildi:', { name: name.value, email: email.value, message: message.value })
  // Form gönderildikten sonra alanları temizle
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-view {
  padding: 20px;
}

.contact-form, .contact-info, .navigation-links {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}
</style>

<template>
  <div class="events-view">
    <h1>Etkinlikler</h1>
    <p>Hayvan sahiplendirme ve bakımı ile ilgili yaklaşan etkinlikler.</p>

    <div class="event-list">
      <h2>Etkinlik Listesi</h2>
      <ul>
        <li>
          <h3>Sahiplenme Günü</h3>
          <p>Tarih: 15 Haziran 2023</p>
          <p>Yer: Sincan Belediyesi Hayvan Barınağı</p>
          <p>Açıklama: Barınaktaki hayvanları sahiplendirme etkinliği</p>
        </li>
        <li>
          <h3>Hayvan Bakımı Semineri</h3>
          <p>Tarih: 22 Haziran 2023</p>
          <p>Yer: Ankara Büyükşehir Belediyesi Konferans Salonu</p>
          <p>Açıklama: Evcil hayvan bakımı hakkında bilgilendirme semineri</p>
        </li>
      </ul>
    </div>

    <div class="navigation-links">
      <h2>İlgili Sayfalar</h2>
      <ul>
        <li><RouterLink to="/pets">Evcil Hayvanları Görüntüle</RouterLink></li>
        <li><RouterLink to="/adopt">Sahiplenme Başvurusu Yap</RouterLink></li>
        <li><RouterLink to="/pet-shelters">Hayvan Barınakları</RouterLink></li>
        <li><RouterLink to="/contact">Bize Ulaşın</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.events-view {
  padding: 20px;
}

.event-list, .navigation-links {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 5px;
}

p {
  margin: 5px 0;
}
</style>

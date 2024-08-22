<template>
  <div class="admin-applications">
    <h1 class="text-2xl font-bold mb-4">Başvuru Yönetimi</h1>
    <p class="mb-6">Bu sayfada, sahiplendirme başvurularını detaylı bir şekilde yönetebilirsiniz.</p>
    
    <div class="application-filters mb-4">
      <input type="text" v-model="searchTerm" placeholder="Başvuru ara..." class="p-2 border rounded mr-2">
      <select v-model="statusFilter" class="p-2 border rounded">
        <option value="">Tüm Durumlar</option>
        <option value="beklemede">Beklemede</option>
        <option value="onaylandı">Onaylandı</option>
        <option value="reddedildi">Reddedildi</option>
      </select>
    </div>

    <table class="w-full border-collapse border">
      <thead>
        <tr>
          <th class="border p-2">Başvuru No</th>
          <th class="border p-2">Başvuran</th>
          <th class="border p-2">Hayvan</th>
          <th class="border p-2">Tarih</th>
          <th class="border p-2">Durum</th>
          <th class="border p-2">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in filteredApplications" :key="application.id">
          <td class="border p-2">{{ application.id }}</td>
          <td class="border p-2">{{ application.applicantName }}</td>
          <td class="border p-2">{{ application.petName }}</td>
          <td class="border p-2">{{ application.date }}</td>
          <td class="border p-2">{{ application.status }}</td>
          <td class="border p-2">
            <button @click="viewDetails(application.id)" class="bg-blue-500 text-white p-1 rounded mr-1">Detaylar</button>
            <button @click="updateStatus(application.id, 'onaylandı')" class="bg-green-500 text-white p-1 rounded mr-1">Onayla</button>
            <button @click="updateStatus(application.id, 'reddedildi')" class="bg-red-500 text-white p-1 rounded">Reddet</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedApplication" class="mt-6 p-4 border rounded">
      <h2 class="text-xl font-bold mb-2">Başvuru Detayları</h2>
      <p><strong>Başvuran:</strong> {{ selectedApplication.applicantName }}</p>
      <p><strong>E-posta:</strong> {{ selectedApplication.email }}</p>
      <p><strong>Telefon:</strong> {{ selectedApplication.phone }}</p>
      <p><strong>Adres:</strong> {{ selectedApplication.address }}</p>
      <p><strong>Hayvan:</strong> {{ selectedApplication.petName }}</p>
      <p><strong>Başvuru Nedeni:</strong> {{ selectedApplication.reason }}</p>
      <button @click="closeDetails" class="bg-gray-500 text-white p-2 rounded mt-2">Kapat</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminApplicationsView',
  data() {
    return {
      applications: [], // Bu dizi API'den alınacak başvuruları içerecek
      searchTerm: '',
      statusFilter: '',
      selectedApplication: null
    }
  },
  computed: {
    filteredApplications() {
      return this.applications.filter(app => {
        const searchMatch = app.applicantName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            app.petName.toLowerCase().includes(this.searchTerm.toLowerCase());
        const statusMatch = this.statusFilter === '' || app.status === this.statusFilter;
        return searchMatch && statusMatch;
      });
    }
  },
  methods: {
    async fetchApplications() {
      // API'den başvuruları al ve this.applications'a ata
    },
    viewDetails(applicationId) {
      this.selectedApplication = this.applications.find(app => app.id === applicationId);
    },
    closeDetails() {
      this.selectedApplication = null;
    },
    async updateStatus(applicationId, newStatus) {
      // API'ye durum güncellemesi gönder
      // Başarılı olursa, yerel state'i güncelle
    }
  },
  mounted() {
    this.fetchApplications();
  }
}
</script>

<style scoped>
.admin-applications {
  padding: 20px;
}
</style>

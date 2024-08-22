<template>
  <div class="admin-shelters">
    <h1 class="text-2xl font-bold mb-4">Barınak Yönetimi</h1>
    <p class="mb-6">Bu sayfada barınakları detaylı bir şekilde yönetebilirsiniz.</p>
    
    <div class="mb-4 flex justify-between items-center">
      <input v-model="searchTerm" type="text" placeholder="Barınak ara..." class="p-2 border rounded">
      <button @click="openAddShelterModal" class="bg-green-500 text-white p-2 rounded">Yeni Barınak Ekle</button>
    </div>

    <table class="w-full border-collapse border">
      <thead>
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">İsim</th>
          <th class="border p-2">Adres</th>
          <th class="border p-2">Telefon</th>
          <th class="border p-2">Kapasite</th>
          <th class="border p-2">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shelter in filteredShelters" :key="shelter.id">
          <td class="border p-2">{{ shelter.id }}</td>
          <td class="border p-2">{{ shelter.name }}</td>
          <td class="border p-2">{{ shelter.address }}</td>
          <td class="border p-2">{{ shelter.phone }}</td>
          <td class="border p-2">{{ shelter.capacity }}</td>
          <td class="border p-2">
            <button @click="editShelter(shelter.id)" class="bg-blue-500 text-white p-1 rounded mr-1">Düzenle</button>
            <button @click="deleteShelter(shelter.id)" class="bg-red-500 text-white p-1 rounded">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Yeni Barınak Ekleme Modalı -->
    <div v-if="showAddModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 class="text-lg font-bold mb-4">Yeni Barınak Ekle</h3>
        <!-- Form alanları buraya eklenecek -->
        <button @click="addShelter" class="bg-green-500 text-white p-2 rounded mt-4">Ekle</button>
        <button @click="closeAddShelterModal" class="bg-gray-500 text-white p-2 rounded mt-4 ml-2">İptal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSheltersView',
  data() {
    return {
      shelters: [], // API'den alınacak barınak listesi
      searchTerm: '',
      showAddModal: false
    }
  },
  computed: {
    filteredShelters() {
      return this.shelters.filter(shelter => 
        shelter.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        shelter.address.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    async fetchShelters() {
      // API'den barınakları al ve this.shelters'a ata
    },
    openAddShelterModal() {
      this.showAddModal = true
    },
    closeAddShelterModal() {
      this.showAddModal = false
    },
    async addShelter() {
      // Yeni barınak ekleme işlemi
      // API'ye yeni barınak bilgilerini gönder
      // Başarılı olursa, listeyi güncelle ve modalı kapat
    },
    editShelter(shelterId) {
      // Barınak düzenleme işlemi
      // Seçilen barınağın bilgilerini form'a doldur ve düzenleme modalını aç
    },
    async deleteShelter(shelterId) {
      // Barınak silme işlemi
      // Kullanıcıya onay sor, onaylanırsa API'ye silme isteği gönder
      // Başarılı olursa, listeyi güncelle
    }
  },
  mounted() {
    this.fetchShelters()
  }
}
</script>

<style scoped>
.admin-shelters {
  padding: 20px;
}
</style>

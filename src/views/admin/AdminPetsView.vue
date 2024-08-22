<template>
  <div class="admin-pets">
    <h1 class="text-2xl font-bold mb-4">Evcil Hayvan Yönetimi</h1>
    <p class="mb-6">Bu sayfada evcil hayvanları detaylı bir şekilde yönetebilirsiniz.</p>
    
    <div class="mb-4 flex justify-between items-center">
      <input v-model="searchTerm" type="text" placeholder="Hayvan ara..." class="p-2 border rounded">
      <button @click="openAddPetModal" class="bg-green-500 text-white p-2 rounded">Yeni Hayvan Ekle</button>
    </div>

    <table class="w-full border-collapse border">
      <thead>
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">İsim</th>
          <th class="border p-2">Tür</th>
          <th class="border p-2">Irk</th>
          <th class="border p-2">Yaş</th>
          <th class="border p-2">Durum</th>
          <th class="border p-2">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pet in filteredPets" :key="pet.id">
          <td class="border p-2">{{ pet.id }}</td>
          <td class="border p-2">{{ pet.name }}</td>
          <td class="border p-2">{{ pet.species }}</td>
          <td class="border p-2">{{ pet.breed }}</td>
          <td class="border p-2">{{ pet.age }}</td>
          <td class="border p-2">{{ pet.status }}</td>
          <td class="border p-2">
            <button @click="editPet(pet.id)" class="bg-blue-500 text-white p-1 rounded mr-1">Düzenle</button>
            <button @click="deletePet(pet.id)" class="bg-red-500 text-white p-1 rounded">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Yeni Hayvan Ekleme Modalı -->
    <div v-if="showAddModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 class="text-lg font-bold mb-4">Yeni Hayvan Ekle</h3>
        <!-- Form alanları buraya eklenecek -->
        <button @click="addPet" class="bg-green-500 text-white p-2 rounded mt-4">Ekle</button>
        <button @click="closeAddPetModal" class="bg-gray-500 text-white p-2 rounded mt-4 ml-2">İptal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPetsView',
  data() {
    return {
      pets: [], // API'den alınacak hayvan listesi
      searchTerm: '',
      showAddModal: false
    }
  },
  computed: {
    filteredPets() {
      return this.pets.filter(pet => 
        pet.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pet.species.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    async fetchPets() {
      // API'den hayvanları al ve this.pets'e ata
    },
    openAddPetModal() {
      this.showAddModal = true
    },
    closeAddPetModal() {
      this.showAddModal = false
    },
    async addPet() {
      // Yeni hayvan ekleme işlemi
      // API'ye yeni hayvan bilgilerini gönder
      // Başarılı olursa, listeyi güncelle ve modalı kapat
    },
    editPet(petId) {
      // Hayvan düzenleme işlemi
      // Seçilen hayvanın bilgilerini form'a doldur ve düzenleme modalını aç
    },
    async deletePet(petId) {
      // Hayvan silme işlemi
      // Kullanıcıya onay sor, onaylanırsa API'ye silme isteği gönder
      // Başarılı olursa, listeyi güncelle
    }
  },
  mounted() {
    this.fetchPets()
  }
}
</script>

<style scoped>
.admin-pets {
  padding: 20px;
}
</style>

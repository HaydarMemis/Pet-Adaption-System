<template>
  <div class="admin-users">
    <h1 class="text-2xl font-bold mb-4">Kullanıcı Yönetimi</h1>
    <p class="mb-6">Bu sayfada kullanıcıları detaylı bir şekilde yönetebilirsiniz.</p>
    
    <div class="mb-4 flex justify-between items-center">
      <input v-model="searchTerm" type="text" placeholder="Kullanıcı ara..." class="p-2 border rounded">
      <button @click="openAddUserModal" class="bg-green-500 text-white p-2 rounded">Yeni Kullanıcı Ekle</button>
    </div>

    <table class="w-full border-collapse border">
      <thead>
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">Ad Soyad</th>
          <th class="border p-2">E-posta</th>
          <th class="border p-2">Rol</th>
          <th class="border p-2">Durum</th>
          <th class="border p-2">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td class="border p-2">{{ user.id }}</td>
          <td class="border p-2">{{ user.fullName }}</td>
          <td class="border p-2">{{ user.email }}</td>
          <td class="border p-2">{{ user.role }}</td>
          <td class="border p-2">{{ user.status }}</td>
          <td class="border p-2">
            <button @click="editUser(user.id)" class="bg-blue-500 text-white p-1 rounded mr-1">Düzenle</button>
            <button @click="deleteUser(user.id)" class="bg-red-500 text-white p-1 rounded">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Yeni Kullanıcı Ekleme Modalı -->
    <div v-if="showAddModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 class="text-lg font-bold mb-4">Yeni Kullanıcı Ekle</h3>
        <!-- Form alanları buraya eklenecek -->
        <button @click="addUser" class="bg-green-500 text-white p-2 rounded mt-4">Ekle</button>
        <button @click="closeAddUserModal" class="bg-gray-500 text-white p-2 rounded mt-4 ml-2">İptal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUsersView',
  data() {
    return {
      users: [], // API'den alınacak kullanıcı listesi
      searchTerm: '',
      showAddModal: false
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => 
        user.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    async fetchUsers() {
      // API'den kullanıcıları al ve this.users'a ata
    },
    openAddUserModal() {
      this.showAddModal = true
    },
    closeAddUserModal() {
      this.showAddModal = false
    },
    async addUser() {
      // Yeni kullanıcı ekleme işlemi
      // API'ye yeni kullanıcı bilgilerini gönder
      // Başarılı olursa, listeyi güncelle ve modalı kapat
    },
    editUser(userId) {
      // Kullanıcı düzenleme işlemi
      // Seçilen kullanıcının bilgilerini form'a doldur ve düzenleme modalını aç
    },
    async deleteUser(userId) {
      // Kullanıcı silme işlemi
      // Kullanıcıya onay sor, onaylanırsa API'ye silme isteği gönder
      // Başarılı olursa, listeyi güncelle
    }
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>

<style scoped>
.admin-users {
  padding: 20px;
}
</style>

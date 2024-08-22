<template>
  <div class="admin-home">
    <h1>Yönetici Paneli</h1>
    <nav>
      <ul>
        <li><router-link to="/admin/pets">Evcil Hayvan Yönetimi</router-link></li>
        <li><router-link to="/admin/shelters">Barınak Yönetimi</router-link></li>
        <li><router-link to="/admin/applications">Başvuru Yönetimi</router-link></li>
        <li><router-link to="/admin/events">Etkinlik Yönetimi</router-link></li>
        <li><router-link to="/admin/users">Kullanıcı Yönetimi</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AdminHomeView',
  // Gerekli bileşen mantığı buraya eklenebilir
}
</script>

<style scoped>
.admin-home {
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin-bottom: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>

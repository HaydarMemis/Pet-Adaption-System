<template>
  <div class="privacy-policy">
    <h1 class="title">Gizlilik Politikası</h1>
    <div class="content">
      <section class="section">
        <h2 class="subtitle">Bilgi Toplama ve Kullanımı</h2>
        <p>
          Sincan Belediyesi Hayvan Barınağı olarak, sizin gizliliğinize önem veriyoruz. Sitemizi
          ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda, size daha iyi bir deneyim sunmak
          için bazı bilgiler toplarız. Bu bilgiler, hizmetlerimizi geliştirmek ve yasal
          yükümlülüklerimizi yerine getirmek için kullanılır.
        </p>
      </section>

      <section class="section">
        <h2 class="subtitle">Veri Güvenliği ve Çerezler</h2>
        <p>
          Bilgilerinizin güvenliği bizim için önemlidir. En son teknolojileri kullanarak
          verilerinizi koruyoruz. Ayrıca, daha kişiselleştirilmiş bir deneyim sunmak için çerezler
          kullanıyoruz. Çerez tercihlerinizi istediğiniz zaman yönetebilirsiniz.
        </p>
      </section>

      <section class="section">
        <h2 class="subtitle">Politika Güncellemeleri ve İletişim</h2>
        <p>
          Gizlilik politikamızı zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda sizi
          bilgilendireceğiz. Herhangi bir sorunuz veya endişeniz varsa, lütfen bizimle iletişime
          geçmekten çekinmeyin.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView'
}
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.section:hover {
  transform: translateY(-5px);
}

.subtitle {
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .privacy-policy {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}
</style>

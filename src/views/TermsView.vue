<template>
  <div class="terms-of-service">
    <h1 class="title">Kullanım Koşulları</h1>
    <div class="content">
      <p class="intro">
        Sincan Belediyesi Hayvan Barınağı web sitesini kullanarak aşağıdaki koşulları kabul etmiş
        olursunuz. Lütfen bu koşulları dikkatlice okuyunuz.
      </p>

      <div v-for="(section, index) in sections" :key="index" class="section">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>

      <div class="additional-info">
        <h2>8. Çerez Politikası</h2>
        <p>
          Sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanmaktadır. Çerez kullanımı
          hakkında daha fazla bilgi için Çerez Politikamızı inceleyebilirsiniz.
        </p>

        <h2>9. Üçüncü Taraf Bağlantıları</h2>
        <p>
          Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden veya
          gizlilik uygulamalarından sorumlu değiliz.
        </p>

        <h2>10. Kullanıcı İçeriği</h2>
        <p>
          Sitemize yüklediğiniz veya gönderdiğiniz her türlü içerik için sorumluluk size aittir.
          Telif hakkı ihlali veya uygunsuz içerik yüklenmesi durumunda gerekli yasal işlemler
          uygulanacaktır.
        </p>
      </div>

      <div class="contact-form">
        <h2>Bize Ulaşın</h2>
        <p>Kullanım koşullarıyla ilgili sorularınız için aşağıdaki formu kullanabilirsiniz:</p>
        <form @submit.prevent="submitForm">
          <input v-model="form.name" type="text" placeholder="Adınız" required />
          <input v-model="form.email" type="email" placeholder="E-posta adresiniz" required />
          <textarea v-model="form.message" placeholder="Mesajınız" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsView',
  data() {
    return {
      sections: [
        {
          title: '1. Genel Kullanım',
          content:
            'Bu web sitesini yalnızca yasal amaçlar için kullanacağınızı kabul edersiniz. Siteyi, yasalara aykırı veya bu koşulları ihlal edecek şekilde kullanmayacaksınız.'
        },
        {
          title: '2. Kullanıcı Hesabı',
          content:
            'Bazı hizmetlerimizi kullanmak için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizin gizliliğini korumak sizin sorumluluğunuzdadır.'
        },
        {
          title: '3. Gizlilik',
          content:
            'Kişisel bilgilerinizin kullanımı, Gizlilik Politikamıza tabidir. Lütfen bu politikayı dikkatlice okuyun.'
        },
        {
          title: '4. Fikri Mülkiyet',
          content:
            "Bu sitedeki tüm içerik, Sincan Belediyesi'nin mülkiyetindedir ve telif hakkı yasaları tarafından korunmaktadır."
        },
        {
          title: '5. Sorumluluk Reddi',
          content:
            'Bu sitedeki bilgiler "olduğu gibi" sunulmaktadır. Sincan Belediyesi, bu bilgilerin doğruluğu veya eksiksizliği konusunda hiçbir garanti vermez.'
        },
        {
          title: '6. Değişiklikler',
          content:
            'Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler, sitemizde yayınlandıktan sonra geçerli olacaktır.'
        },
        {
          title: '7. İletişim',
          content:
            'Bu kullanım koşullarıyla ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin.'
        }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Form gönderme işlemi burada gerçekleştirilecek
      console.log('Form gönderildi:', this.form)
      // Form gönderildikten sonra alanları temizle
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.terms-of-service {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.content {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #34495e;
}

.section {
  margin-bottom: 30px;
}

h2 {
  color: #3498db;
  margin-bottom: 15px;
}

p {
  line-height: 1.6;
  color: #34495e;
}

.additional-info {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.contact-form {
  margin-top: 40px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>

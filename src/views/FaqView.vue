<template>
  <div class="faq-container">
    <h1 class="faq-title">Sıkça Sorulan Sorular</h1>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Soru ara..." class="search-input" />
    </div>
    <TransitionGroup name="list" tag="div">
      <div v-for="(faq, index) in filteredFaqs" :key="index" class="faq-item">
        <div @click="toggleAnswer(index)" class="faq-question">
          <h2>{{ faq.question }}</h2>
          <span class="toggle-icon">
            <i :class="faq.isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
          </span>
        </div>
        <transition name="fade">
          <p v-if="faq.isOpen" class="faq-answer">{{ faq.answer }}</p>
        </transition>
      </div>
    </TransitionGroup>
    <div v-if="filteredFaqs.length === 0" class="no-results">
      Aramanızla eşleşen soru bulunamadı.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      searchQuery: '',
      faqs: [
        {
          question: 'Evcil hayvan sahiplenmek için ne yapmam gerekiyor?',
          answer:
            'Evcil hayvan sahiplenmek için öncelikle başvuru formunu doldurmanız gerekmektedir. Ardından, barınak yetkilileri sizinle iletişime geçecek ve uygunluk değerlendirmesi yapacaktır. Bu süreçte, yaşam koşullarınız ve evcil hayvan bakımı konusundaki deneyiminiz değerlendirilecektir.',
          isOpen: false
        },
        {
          question: 'Sahiplenme ücreti var mı?',
          answer:
            'Hayır, sahiplenme ücreti yoktur. Ancak, evcil hayvanınızın aşıları ve sağlık kontrolleri için küçük bir bağış talep edilebilir. Bu bağış, barınağın diğer hayvanların bakımına devam edebilmesi için kullanılmaktadır.',
          isOpen: false
        },
        {
          question: 'Sahiplendiğim hayvanın bakımı konusunda yardım alabilir miyim?',
          answer:
            'Evet, sahiplenme sonrası destek hizmetimiz mevcuttur. Veteriner kontrolü, beslenme tavsiyeleri ve davranış eğitimi konularında size yardımcı olabiliriz. Ayrıca, düzenli olarak eğitim seminerleri ve online kaynaklar sunmaktayız.',
          isOpen: false
        },
        {
          question: 'Sahiplendiğim hayvanı geri getirebilir miyim?',
          answer:
            'Evet, ancak bu durumu son çare olarak değerlendirmenizi rica ederiz. Eğer gerçekten bakamayacağınız bir durum ortaya çıkarsa, hayvanı barınağımıza geri getirebilirsiniz. Ancak öncelikle sorunları çözmek için birlikte çalışmayı tercih ederiz.',
          isOpen: false
        },
        {
          question: 'Sahiplendirme için yaş sınırı var mı?',
          answer:
            "Evet, sahiplendirme için minimum yaş sınırı 18'dir. 18 yaşından küçükler için ebeveyn veya yasal vasi onayı gerekmektedir. Ayrıca, bazı büyük veya özel bakım gerektiren hayvanlar için daha yüksek bir yaş sınırı olabilir.",
          isOpen: false
        }
      ]
    }
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.faq-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-question {
  cursor: pointer;
  padding: 15px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h2 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.toggle-icon {
  font-size: 1.2em;
  color: #666;
}

.faq-answer {
  padding: 15px;
  background-color: #fff;
  color: #555;
  line-height: 1.6;
}

.no-results {
  text-align: center;
  color: #666;
  margin-top: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

import { defineStore } from 'pinia'

export const useAdoptionProcessStore = defineStore('adoptionProcess', {
  state: () => ({
    steps: [
      {
        id: 1,
        title: 'Başvuru Formu',
        description: 'Sahiplenmek istediğiniz hayvan için başvuru formunu doldurun.',
        completed: false
      },
      {
        id: 2,
        title: 'Ön Değerlendirme',
        description: 'Başvurunuz barınak yetkilileri tarafından değerlendirilecek.',
        completed: false
      },
      {
        id: 3,
        title: 'Ev Ziyareti',
        description: 'Barınak görevlileri evinizi ziyaret edecek ve yaşam koşullarınızı değerlendirecek.',
        completed: false
      },
      {
        id: 4,
        title: 'Eğitim Semineri',
        description: 'Hayvan bakımı ve sorumluluklarıyla ilgili eğitim seminerine katılın.',
        completed: false
      },
      {
        id: 5,
        title: 'Son Onay',
        description: 'Tüm aşamalar tamamlandıktan sonra sahiplenme işlemi onaylanacak.',
        completed: false
      }
    ],
    currentStep: 1
  }),
  
  getters: {
    getCurrentStep: (state) => state.steps.find(step => step.id === state.currentStep),
    isProcessComplete: (state) => state.steps.every(step => step.completed)
  },
  
  actions: {
    completeStep(stepId) {
      const step = this.steps.find(s => s.id === stepId)
      if (step) {
        step.completed = true
        if (this.currentStep < this.steps.length) {
          this.currentStep++
        }
      }
    },
    resetProcess() {
      this.steps.forEach(step => step.completed = false)
      this.currentStep = 1
    }
  }
})

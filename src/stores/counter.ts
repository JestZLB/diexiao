import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('App', () => {
  const appLoad = ref<boolean>(true);

  return { appLoad }
})

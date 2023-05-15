import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/marine-dark.scss'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#root')

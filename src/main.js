import { createApp } from 'vue'
import routers from './routers'
import App from './App.vue'
import './assets/style/style.css'

const app = createApp(App)
app.use(routers)
app.mount('#app')

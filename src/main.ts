import { createApp } from 'vue'
import routers from './routers/index'
import App from './App.vue'
import './assets/style/style.css'
import 'normalize.css'
const app = createApp(App)
app.use(routers)
app.mount('#app')

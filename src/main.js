import { createApp } from 'vue'
import routers from './routers'
import App from './App.vue'

const app = createApp(App)
app.use(routers)
app.mount('#app')

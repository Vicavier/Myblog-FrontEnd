import { createApp } from 'vue'
import App from './App.vue'
// ---------element-plush-----------
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// -------------router--------------
import router from './router'
// --------------icons--------------
import '@/resources/icons/style.css'

const app = createApp(App)
app.use(ElementPlus).use(router)
app.mount('#app')

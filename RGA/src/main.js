import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from './plugins/element-plus'
import router from './config/router'


createApp(App).use(ElementPlus).use(router).mount('#app')

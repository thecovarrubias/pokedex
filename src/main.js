import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
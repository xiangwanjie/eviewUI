import { createApp } from 'vue'
import App from './App.vue'

import '../packages/css/index.scss';
import EUI from '../packages/lib/index';

const app = createApp(App)

app.use(EUI).mount('#app')
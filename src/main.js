import Vue from 'vue'
<<<<<<< HEAD
import dayjs from 'dayjs'
=======
import axios from 'axios'
>>>>>>> c2cb2ef4349e2d1d7ad37d9516f4edb4d874777c
import App from './App.vue'
import router from "./router"
import Mock from "./mock"
import localStorage from "./utils/localStorage"
const Storage = new localStorage('NAV')
Vue.config.productionTip = false
import './app.scss';

import './assets/styles/style.scss';
import './assets/font.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

<<<<<<< HEAD
Vue.prototype.$api= api
Vue.prototype.$dayjs= dayjs
=======
>>>>>>> c2cb2ef4349e2d1d7ad37d9516f4edb4d874777c
Vue.prototype.$storage= Storage
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
	router,
  	render: h => h(App)
}).$mount('#app')

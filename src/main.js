import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import VueMaterial from 'vue-material'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-material/dist/vue-material.min.css'
import store from'./store/index';
Vue.use(VueSweetalert2);
Vue.use(VueMaterial);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


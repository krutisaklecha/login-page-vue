import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from "axios";
import Vuelidate from 'vuelidate';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$axios = axios;
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

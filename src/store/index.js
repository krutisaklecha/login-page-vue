import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || ''
  },
  getter:{},
  mutations: {},
  actions: {
    AUTH_REQUEST(state,payload){
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(state.token))
    },
    userLogout(){
      localStorage.removeItem('token')
    }
  },
  modules: {}
});

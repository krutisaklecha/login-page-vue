import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'
 Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('user-token') || '',
    user : {}
  },
  getter:{
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {},
  actions: {
    AUTH_REQUEST(state,payload){
      //context.dispatch('loginUser',payload)
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(state.token))

    },
    userLogout(){
      localStorage.removeItem('token')
    }
  },
  modules: {}
});

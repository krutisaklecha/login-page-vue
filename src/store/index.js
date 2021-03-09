import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {},
  actions: {
    loginUser(context,payload){
      //context.dispatch('loginUser',payload)
      axios.post('http://10.28.4.130:8080/api/v1/loginUser',{payload},{headers:{
              "Content-type": "application/json",
              'Access-Control-Allow-Origin': 'http://10.28.4.130:8080'
            }})
          .then(resp=>{
            console.log(resp)
          })
          .catch(err => {
       console.log(err)
      })
    }
  },
  modules: {}
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
axios.defaults.withCredentials = true

axios.defaults.baseURL = 'https://hhtti.cn'

Vue.prototype.$axios = axios

//vuex
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
  state:{
    shopCart:0 ,
    isLogin :false,
    uname:'点击登陆'
  },
  mutations:{
    changeShopCart(state,c){
      state.shopCart = c;
    },
    addShopCart(state,c){
      state.shopCart += c;
    },
    changeIsLogin(state,bool){
      state.isLogin = bool
    },
    changeUname(state,str){
      state.uname = str
    }
  },
  getters:{
    selectShopCart:function(state){
      return state.shopCart
    },
    selectIsLogin:function(state){
      return state.isLogin
    },
    selectUname:function(state){
      return state.uname
    }

  }
})
//qs
import qs from 'qs'
Vue.prototype.$qs = qs

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
//引入MUI
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//import './lib/mui/js/mui.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

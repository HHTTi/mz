import Vue from 'vue'
import Router from 'vue-router'
import HomeComponents from '../components/home.vue'
import GoodsList from '../components/Goods/GoodsList.vue'
import NewsList from '../components/discover/newsList.vue'
import ShopCart from '../components/shopcart/shopcart.vue'
import About from '../components/about/my.vue'
import GoodsInfo from '../components/Goods/GoodsInfo'
import Login from '../components/login/login'
import Register from '../components/login/register'
import err from '../components/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", component: HomeComponents },
    { path: '/home', component: HomeComponents },
    { path: '/goodslist', component: GoodsList },
    { path: '/newslist', component: NewsList },
    { path: '/shopcart', component: ShopCart },
    { path: '/me', component: About },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
    { path: '/login', component: Login },
    { path: '/register', component: Register },

    { path: '/*', component: err }
  ]
})

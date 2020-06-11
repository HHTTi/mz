<template>
  <div id="app">
    <!-- 顶部导航栏 -->

    <router-view></router-view>
    <!-- 底部导航栏 -->
    <nav-bottom-box></nav-bottom-box>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
// import HTTP from "./http.js";
// 设置默认服务器地址
// HTTP.install(Vue, axios)
import NavBottom from "./components/sub/nav-bottom.vue";
export default {
  name: "App",
  components: {
    "nav-bottom-box": NavBottom
  },
  methods: {
    isLogin() {
      //判断登陆状态
      this.$axios.get("/users/isLogin").then(res => {
        console.log(res.data);
        if (res.data.code == 1) {
          this.$store.commit("changeIsLogin", true);
          this.$store.commit("changeUname", res.data.msg);
        } else {
          this.$store.commit("changeIsLogin", false);
          this.$store.commit("changeUname", "点击登陆");
        }
        console.log("是否已经登陆:", this.$store.getters.selectIsLogin);
        console.log("用户名:", this.$store.getters.selectUname);
      });
    }
  },
  created() {
    this.isLogin();
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #eee;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 414px;
  margin: auto;
  width: 100%;
  height: 100%;
}
p {
  font-size: 13px;
}
a:link,
a:visited {
  color: #999;
}
a.active:link,
a.active:visited {
  color: #32a5e7;
}
.button-blue {
  background: #32a5e7;
  color: #fff;
}
</style>

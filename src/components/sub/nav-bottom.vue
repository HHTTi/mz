<template>
  <!-- 底部导航栏 -->
  <nav class="mui-bar mui-bar-tab" :class="{'d-none':isNone}">
    <a
      class="mui-tab-item"
      href="#/"
      @click="active('/')"
      :class="{'mui-active':isActive === ('/' || '/home')}"
    >
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a
      class="mui-tab-item"
      href="#/goodslist"
      @click="active('/goodslist')"
      :class="{'mui-active':isActive == '/goodslist'}"
    >
      <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
      <span class="mui-tab-label">分类</span>
    </a>
    <a
      class="mui-tab-item"
      href="#/newslist"
      @click="active('/newslist')"
      :class="{'mui-active':isActive == '/newslist'}"
    >
      <span class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
      <span class="mui-tab-label">发现</span>
    </a>
    <a
      class="mui-tab-item"
      href="#/shopcart"
      @click="active('/shopcart')"
      :class="{'mui-active':isActive == '/shopcart'}"
    >
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span
          class="mui-badge"
          v-show="$store.getters.selectShopCart"
          v-text="$store.getters.selectShopCart"
        ></span>
      </span>
      <span class="mui-tab-label">购物车</span>
    </a>
    <a
      class="mui-tab-item"
      href="#/me"
      @click="active('/me')"
      :class="{'mui-active':isActive == '/me'}"
    >
      <span class="mui-icon mui-icon-person-filled"></span>
      <span class="mui-tab-label">我的</span>
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNone: false,
      isActive: ""
    };
  },
  methods: {
    active(val) {
      this.isActive = val;
    },
    getRoute() {
      var path = this.$route.path;
      this.isActive = path;
      var bool =
        this.$route.path == "/" ||
        this.$route.path == "/home" ||
        this.$route.path == "/goodslist" ||
        this.$route.path == "/newslist" ||
        this.$route.path == "/shopcart" ||
        this.$route.path == "/me";
      if (bool) this.isNone = false;
      else this.isNone = true;
    }
  },
  created() {
    this.getRoute();
  },
  watch: {
    $route: "getRoute"
  }
};
</script>

<style>
.d-none {
  display: none;
}
/* 底部导航栏 */
#app .mui-bar {
  background: #fff;
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  bottom: -1px;
}
#app::after {
  content: "";
  padding: 20px;
}
</style>

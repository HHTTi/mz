<template>
  <div id="app-home">
    <!-- 头部 -->
    <mt-header fixted title="魅族商城">
      <router-link to="/home" slot="left">
        <img src="../assets/img/logo.png" alt />
      </router-link>
      <mt-button slot="right">
        <span class="mui-icon mui-icon-search"></span>
      </mt-button>
    </mt-header>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="l in bannerList" :key="l.id">
        <a :href="l.href">
          <img :src="l.banner_url" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- mui的9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/newslist">
          <img src="../assets/img/grid1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#/goodslist">
          <img src="../assets/img/grid2.png" alt />
          <div class="mui-media-body">商品列表</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#/me">
          <img src="../assets/img/grid3.png" alt />
          <div class="mui-media-body">我的订单</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#/goodslist">
          <img src="../assets/img/grid4.png" alt />
          <div class="mui-media-body">分类</div>
        </a>
      </li>
    </ul>
    <!-- 单张轮播图 -->
    <mt-swipe>
      <mt-swipe-item>
        <a href="#/home/goodsinfo/101">
          <img :src="bannerOne.banner_url" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 推荐购买 -->
    <div class="app-home-grids">
      <a v-for="g in grids" :key="g.id" :href="g.href">
        <img :src="g.grid" alt />
      </a>
    </div>

    <h5>手机</h5>
    <productcell-box></productcell-box>
    <!-- <nav-bottom-box></nav-bottom-box> -->
  </div>
</template>
<script>
import HomeProductcell from "./sub/home-productcell.vue";
import NavBottom from "./sub/nav-bottom";
export default {
  data() {
    return {
      bannerList: [],
      bannerOne: {},
      grids: []
    };
  },
  methods: {
    getBanner() {
      this.$axios
        .get("/index/bannerList", {
          params: {
            //get方式下, 随url发送的参数
          }
        })
        .then(res => {
          this.bannerList = res.data;
          this.bannerOne = res.data[4];
        });
    },
    getGrids() {
      this.$axios.get("/index/grids", { params: {} }).then(res => {
        this.grids = res.data;
      });
    }
  },
  components: {
    //注册子组件
    "productcell-box": HomeProductcell,
    "nav-bottom-box": NavBottom
  },
  created() {
    this.getBanner();
    this.getGrids();
  }
};
</script>
<style>
#app header img {
  width: 90px;
}
#app-home .mint-header {
  width: 100%;
  background-color: #fff;
  color: #00b4ff;
  font-size: 16px;
}
/* --------------------banner高度有问题 */
#app-home .mint-swipe {
  height: 162px;
  margin-bottom: 3px;
}
#app .mint-swipe .mint-swipe-items-wrap {
  background: #fff;
}
#app-home .mint-swipe img {
  width: 100%;
}
/*调整六宫格  */
#app-home .mui-grid-view.mui-grid-9 {
  background: #fff;
  border: 0;
}
#app-home .mui-grid-view.mui-grid-9 li {
  padding: 10px 5px;
}
#app-home .mui-grid-view.mui-grid-9 img {
  width: 30px;
  height: 30px;
}
#app-home .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 12px;
}
/* grids */
#app-home .app-home-grids {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#app-home .app-home-grids a {
  width: 100%;
}
#app-home .app-home-grids img {
  width: 100%;
}

#app-home > h5 {
  color: #333;
  float: left;
  padding-left: 8px;
  border-left: 2px solid #00c3f5;
  margin: 10px 10px 5px;
}
</style>

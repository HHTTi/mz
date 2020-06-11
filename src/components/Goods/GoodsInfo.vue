<template>
  <div class="goods-info">
    <!-- 头部 -->
    <mt-header fixed title="商品详情" :class="{'mint-header1' : isHeaderTrue == 1}">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <span class="mui-icon mui-icon-home"></span>
      </router-link>
    </mt-header>

    <!-- 轮播图插件 -->
    <mt-swipe-box :swipeList="banUrl"></mt-swipe-box>
    <!-- title标题 -->
    <div class="goods-info-title">
      <div class="info">
        <span v-text="familyName"></span>
        <p class="p-sale" v-text="'¥'+price"></p>
        <h6 class="comment" v-text="subtitle"></h6>
      </div>
      <goods-info-promise-box></goods-info-promise-box>
    </div>
    <!-- 配置选择 -->
    <goods-info-chose-box
      v-on:idInfoByChoseBox="idInfoByChoseBox"
      :title="title"
      :banUrl="banUrl"
      :familyName="familyName"
      :onceColor="onceColor"
      :onceSpec="onceSpec"
    ></goods-info-chose-box>
    <!-- 配送 -->
    <div class="goods-info-send">
      <div>
        <h6>配送:</h6>
        <p>上海 上海市</p>
      </div>
      <div>
        <p class="mod-bd">
          本商品由
          <strong>魅族</strong>负责发货并提供售后服务
        </p>
      </div>
    </div>
    <!-- 推荐购买 -->
    <div class="goods-info-recommend">
      <span>相关推荐</span>
      <recommend-box></recommend-box>
    </div>
    <!-- 详情导航nav -->
    <goods-info-nav-middle-box :isMiddleTrue="isMiddleTrue"></goods-info-nav-middle-box>
    <div class="goods-info-nav-middle-list">
      <!-- 图片详情 -->
      <div class="goods-info-pic" v-html="imgUrl"></div>
      <!-- 规格参数 -->
      <standard-group-box></standard-group-box>
      <!-- 常见问题 -->
      <goods-info-question-box></goods-info-question-box>
    </div>

    <!-- 底部Nav -->
    <!-- <goods-info-nav-bottom-box></goods-info-nav-bottom-box> -->
  </div>
</template>

<script>
import mtSwipe from "../sub/mt-swipe";
import recommend from "../sub/recommend";
// import GoodsInfoNavBottom from './goods-info-nav-bottom'
import StandardGroup from "./standard-group";
import goodsInfoQuestionVue from "./goods-info-question.vue";
import GoodsInfoNavMiddle from "./goods-info-nav-middle.vue";
import goodsInfoPromiseVue from "./goods-info-promise.vue";
import goodsInfoChoseVue from "./goods-info-chose.vue";
export default {
  data() {
    return {
      title: [], //axios传的所有参数
      idInfo: {},
      familyName: "",
      subtitle: "",
      price: 0,
      color: [],
      spec: [],
      banUrl: [],
      onceColor: "",
      onceSpec: "", //传参传参传参
      imgUrl: [],
      selected: "",
      isHeaderTrue: false,
      isMiddleTrue: false //子组件传参
    };
  },
  watch: {
    idInfo: {
      //选择的商品id的信息
      handler() {
        this.price = this.idInfo.price;
      }
    }
  },
  methods: {
    getGoodsInfo() {
      var id = this.$route.params.id;
      console.log(id);
      this.$axios
        .get("/products/goodsinfo", { params: { id } })
        .then(result => {
          console.log(result.data);
          var title = result.data[0];
          this.title = title;
          //标题价格

          //商品选择
          for (var i = 0; i < title.length; i++) {
            if (title[i].pid == id) this.idInfo = title[i];
          }
          var idInfo = this.idInfo;
          this.familyName = idInfo.family_name;
          this.subtitle = idInfo.subtitle;
          this.price = idInfo.price;
          this.onceColor = idInfo.color;
          this.onceSpec = idInfo.spec;

          //图
          var img = result.data[1][0];
          this.banUrl = [
            img.ban_url1,
            img.ban_url2,
            img.ban_url3,
            img.ban_url4
          ];
          //商品详情页
          this.imgUrl = img.img_url;
        });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) this.isHeaderTrue = true;
      else this.isHeaderTrue = false;
      if (scrollTop > 792) this.isMiddleTrue = true;
      else this.isMiddleTrue = false;
    },
    idInfoByChoseBox(idInfoByChoseBox) {
      //父子传参
      this.idInfo = idInfoByChoseBox;
    }
  },
  created() {
    this.getGoodsInfo();
    this.handleScroll();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    "mt-swipe-box": mtSwipe,
    "goods-info-promise-box": goodsInfoPromiseVue,
    "goods-info-chose-box": goodsInfoChoseVue,
    "recommend-box": recommend,
    "goods-info-nav-middle-box": GoodsInfoNavMiddle,
    // "goods-info-nav-bottom-box":GoodsInfoNavBottom,
    "standard-group-box": StandardGroup,
    "goods-info-question-box": goodsInfoQuestionVue
  }
};
</script>
<style>
.goods-info {
  width: 100%;
  position: relative;
}
/* 头部 */
.goods-info .mint-header {
  transition: all 1s ease;
  background: transparent;
  color: transparent;
  /* position: absolute; */
  /* z-index: 10; */
}
.goods-info .mint-header1 {
  background: #fff;
  color: #666;
}
.goods-info .mint-header .mint-header-button a span {
  color: #666;
  padding: 0 15px;
}
/* title */
.goods-info-title {
  margin: 3px auto;
  padding: 10px 3%;
  background: #fff;
  text-align: left;
}
.goods-info .info {
  padding: 10px 0;
}
#app .goods-info .info .p-sale {
  font-size: 18px;
  color: #f0415f;
  margin: 5px;
}
/* 服务承诺 */

/* 规格选择 */

/* 配送 */
.goods-info-send {
  margin: 10px auto;
  padding: 10px 3% 5px;
  background: #fff;
}
.goods-info-send h6 {
  float: left;
}
.goods-info-send > div:first-child > p {
  float: left;
  padding-left: 3%;
  color: #333;
}
.goods-info-send > div:last-child {
  clear: both;
  border-top: #eee 1px solid;
  padding-top: 20px;
}
/* 推荐 */
.goods-info-recommend {
  text-align: left;
  background: #fff;
  padding-top: 15px;
}
.goods-info-recommend > span {
  padding: 0 3%;
  font-size: 14px;
}

/* 图片列表 */
.goods-info-pic {
  padding-top: 10px;
  background: #fff;
}
.goods-info-pic img {
  width: 100%;
  margin-bottom: -5px;
}
</style>

<template>
  <div class="shop-cart-box">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">购物车</h1>
      <a class="mui-action-back mui-btn mui-btn-link mui-pull-right">编辑</a>
    </header>
    <!-- 空购物车 -->
    <div class="shop-cart-none" :class="{'d-none' : !shopcartHasSb}">
      <span v-text="shopcart.msg">购物车内还没有商品，赶紧去选购吧～</span>
      <div>
        <a :href="shopcart.href">
          <button class="button-blue" v-text="shopcart.btn">去逛逛</button>
        </a>
      </div>
    </div>
    <!-- 购物车商品 -->
    <div class="shopcart-list" :class="{'d-none' : shopcartHasSb}">
      <div class="shopcart-top mui-checkbox mui-left">
        <input
          name="checkbox"
          value="Item 1"
          type="checkbox"
          @click="checkedAll"
          :checked="isCheckedAll"
        />
        <span>魅族</span>
        <p>已免运费</p>
      </div>
      <div>
        <form class="mui-input-group">
          <div class="mui-checkbox mui-left" v-for="(item,index) in shopcartList" :key="index">
            <div class="shopcart-item">
              <img :src="item.url" />
              <div>
                <h5 v-text="item.family_name"></h5>
                <p v-text="item.spec"></p>
                <div>
                  <span v-text="'￥'+item.price"></span>
                  <a v-text="'x'+item.number"></a>
                </div>
              </div>
            </div>
            <input name="checkbox" :value="index" type="checkbox" v-model="checkedList" />
          </div>
        </form>
      </div>
    </div>
    <!-- 底部 -->
    <div class="shopcart-footer">
      <div class="mui-checkbox mui-left">
        <input name="checkbox" value="Item 2" type="checkbox" :checked="true" />
        <h6>全选</h6>
      </div>
      <div>
        <button>结算</button>
      </div>
      <div>
        <p>
          总计:￥
          <span v-text="totalMoney">56400.00</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopcartHasSb: true,
      shopcart: {},
      outline: {
        msg: "登录后可显示您账号中已加入的商品",
        href: "#/login?url=" + this.$route.path,
        btn: "去登录"
      },
      inline: {
        msg: "购物车内还没有商品，赶紧去选购吧～",
        href: "#/home",
        btn: "去逛逛"
      },
      shopcartList: [],
      checkedList: [],
      isCheckedAll: true //选中状态
    };
  },
  components: {},

  methods: {
    loginState() {
      this.$axios.get("/users/isLogin").then(res => {
        console.log("登陆状态:", res.data);
        if (res.data.code == 1) {
          this.$axios.post("/users/selectshopcart").then(result => {
            console.log("购物车状态:", result.data);
            if (result.data.code == 0) {
              this.shopcart = this.inline;
              this.shopcartHasSb = true; //显示和隐藏
            } else {
              this.$store.commit(
                "changeShopCart",
                result.data.msg.result.length
              );
              this.shopcartHasSb = false;
              console.log(result.data.msg.result);
              this.shopcartList = result.data.msg.result;
            }
          });
        } else this.shopcart = this.outline;
      });
    },
    checkedAll() {
      console.log(this.checkedList);
      var list = this.checkedList;
      console.log(this.isCheckedAll);
    }
  },
  created() {
    this.loginState();
    // this.checkedAll()
  },
  computed: {
    totalMoney() {
      //总计
      var list = this.shopcartList,
        sum = 0;
      for (var i = 0; i < list.length; i++) {
        this.checkedList.push(i);
        sum += parseInt(list[i].price * list[i].number);
      }
      return sum;
    }
  },
  watch: {}
};
</script>

<style>
.shop-cart-box {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 1px;
}
/* 购物车没东西 */
.shop-cart-none {
  margin-top: 70%;
}
.shop-cart-none button {
  margin-top: 30px;
  padding: 12px 20px;
}
.d-none {
  display: none;
}
.d-block {
  display: block;
}
/* 购物车 */
.shopcart-list {
  margin-top: 52px;
}
.shopcart-top {
  width: 100%;
  padding: 0 3%;
  height: 50px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 1px;
  text-align: right;
  line-height: 50px;
}
.shopcart-top span {
  float: left;
  padding-left: 50px;
}
.shopcart-top input {
  line-height: 50px;
}
.shopcart-list form .mui-checkbox {
  width: 100%;
  height: 107px;
  padding: 8px 3%;
  border-bottom: 1px solid #eee;
}
.shopcart-item + input {
  line-height: 90px;
}
.shopcart-item > img {
  width: 90px;
  float: left;
  margin-left: 60px;
  margin-right: 10px;
}
.shopcart-item > div {
  text-align: left;
  padding: 5px;
}
.shopcart-item > div h5 {
  margin-top: 10px;
  color: #000;
}
.shopcart-item > div p {
  margin-top: 5px;
}
.shopcart-item > div span {
  color: #f0415f;
}
.shopcart-item > div a {
  float: right;
}
.shopcart-list::after {
  content: "";
  padding: 32px;
  display: block;
}
/* 底部 */
.shopcart-footer {
  height: 50px;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 49px;
}

.shopcart-footer div {
  display: inline-block;
  line-height: 50px;
}
.shopcart-footer div:first-child {
  float: left;
  padding-left: 50px;
}
.shopcart-footer div:first-child > input,
.shopcart-footer div:first-child > h6 {
  line-height: 50px;
  margin: 0;
}
.shopcart-footer div {
  float: right;
}
.shopcart-footer div > button {
  float: right;
  height: 50px;
  width: 120px;
  color: #fff;
  background: #f0415f;
  margin-left: 10px;
  border: 0;
  border-radius: 0;
  text-align: center;
}
</style>

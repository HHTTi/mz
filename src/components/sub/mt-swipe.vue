<template>
  <div class="mt-swipe">
    <!-- 轮播图组件 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="l in swipeList" :key="l.id">
        <img :src="l" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["swipeList"]
};
</script>

<style>
.mt-swipe {
  width: 100%;
  height: auto;
}
.mt-swipe .mint-swipe {
  height: 100%;
  width: 100%;
}
/* --------------------banner高度有问题 */
#app .mt-swipe .mint-swipe {
  height: 250px;
  margin-bottom: 3px;
}
#app .mt-swipe .mint-swipe .mint-swipe-item {
  background: #fff;
}
#app .mt-swipe .mint-swipe img {
  width: 240px;
  height: 240px;
}
</style>

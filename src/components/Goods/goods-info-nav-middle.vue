<template>
  <div>
    <nav class="goods-info-nav-middle" :class="{'nav-middle-fixed': isMiddleTrue == 1}">
            <a @click="moveTo(1)" class="select">图文详情</a>
            <a @click="moveTo(2)">规格参数</a>
            <a @click="moveTo(3)">常见问题</a>
        </nav>
  </div>
</template>

<script>
export default {
  data(){
      return  {}  
  },
  props:["isMiddleTrue"],
  created(){
   
  }
}
</script>

<style>
  
 .goods-info-nav-middle{
   width: 100%;
   background: #fff;
   padding: 10px 3%;
   border-bottom: 1px solid #eee;
   position: absolute;
  }
  /* middle-nav */
  .nav-middle-fixed{
      top: 40px;
      right: 0;
      left: 0;
      position: fixed ;
      z-index: 2;
  }
 .goods-info-nav-middle a{
   width: 32%;
   display: inline-block;
 }
 a{
   color: #999;
 }
 .goods-info-nav-middleclolor{
   color: #00c3f5;
 }
</style>

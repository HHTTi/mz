<template>
  <div class="home-table-view">
      <!-- mui的9宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link :to="myListUrl[0]">
                    <img :src="myListImg[0]" alt="">
                    <div class="mui-media-body" v-text="myListOne[0]"></div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link :to="myListUrl[1]">
                    <img :src="myListImg[1]" alt="">
                    <div class="mui-media-body" v-text="myListOne[1]"></div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link :to="myListUrl[2]">
                    <img :src="myListImg[2]" alt="">
                    <div class="mui-media-body" v-text="myListOne[2]"></div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link :to="myListUrl[3]">
                    <img :src="myListImg[3]" alt="">
                    <div class="mui-media-body" v-text="myListOne[3]"></div></router-link></li>
		</ul>
  </div>
</template>

<script>
export default {
  data(){
      return  {}  
  },
  props:[
    "myListOne",
    "myListImg",
    "myListUrl"
  ]
}
</script>
<style>
/*调整六宫格  */
    .home-table-view .mui-grid-view.mui-grid-9{
        background:#fff;
        border:0;
    }
    .home-table-view .mui-grid-view.mui-grid-9 li{
        padding: 10px 5px;
    }
    .home-table-view .mui-grid-view.mui-grid-9 img{
        width:30px;
        height:30px;
    }
    .home-table-view .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:12px;
    }
</style>

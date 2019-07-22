<template>
  <div class="my">
    <div class="my-top">
      <mt-header>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click="moreVisiable = true"></mt-button>
      </mt-header>
      <!-- <my-more-box :moreVisiable="moreVisiable"></my-more-box> -->
      <div class="my-login">
        <a @click="moveToLogin">
          <img src="../../assets/img-about/login.png" alt="">
          <!-- 登陆状态 -->
          <p v-text="$store.getters.selectUname">点击登陆</p>
        </a>
      </div>
    </div>
    <mt-popup v-model="moreVisiable" position="bottom" class="loginout">
      <span @click="loginout">退出当前账户</span>
    </mt-popup>
    <div class="my-order">
       <div class="mui-card">
				<div class="mui-card-header">
          <span>我的订单</span><h5>查看全部订单></h5>
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                  <router-link to="/">
                      <span class="mui-icon-extra mui-icon-extra-card"></span>
                      <div class="mui-media-body">待付款</div></router-link></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                  <router-link to="/">
                      <span class="mui-icon-extra mui-icon-extra-express"></span>
                      <div class="mui-media-body" >待发货 <hr></div></router-link></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                  <router-link to="/">
                      <span class="mui-icon-extra mui-icon-extra-gift"></span>
                      <div class="mui-media-body">待收货</div></router-link></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                  <router-link to="/">
                      <span class="mui-icon-extra mui-icon-extra-custom"></span>
                      <div class="mui-media-body">退款/售后</div></router-link></li>
            </ul>
					</div>
				</div>
			</div>
    </div>
    <tableview-box :myListImg="listImg"  :myListOne="listOrder" :myListUrl="listUrl"></tableview-box>
    <div>
      <tablelist-box :tableListUrl="HomeTableList"></tablelist-box>
    </div>
    
  </div>
</template>

<script>
import HomeTableView from '../sub/home-table-view'
import HomeTableList from '../sub/hoem-table-list'

export default {
  data(){
      return{
        moreVisiable:false,
        listOrder:[
          '我的收藏','我的地址','我的红包','我的优惠券'
        ],
        listImg:[
          "/static/img-about/01.png",
          "/static/img-about/02.png",
          "/static/img-about/03.png",
          "/static/img-about/04.png"
        ],
        listUrl:[
          '/','/','/','/'
        ],
        HomeTableList:[
          {id:1,url:"#/",text:'M码通道'},
          {id:2,url:"#/",text:'手机号查询订单'},
          {id:3,url:"#/",text:'以旧换新'},
          {id:4,url:"#/",text:'百城速达'},
          {id:5,url:"#/",text:'联系客服'},
          {id:6,url:"#/",text:'意见反馈'}
        ]
      }  
  },
  components:{
    "tableview-box":HomeTableView,
    "tablelist-box":HomeTableList,
  },
  methods:{
    moveToLogin(){
      if(this.$store.getters.selectUname == "点击登陆"){
        var url = this.$route.path
        console.log(url)
        this.$router.push('/login?url='+url)
      }
    },
    loginout(){
      this.$axios.get('/users/loginout').then(res=>{
        console.log('退出登陆:',res)
        this.$router.go(0)
      })
    }
  },
  created(){
    
   // console.log(this.$store.getters.selectUname)
  }
}
</script>

<style>
  .my{
    width:100%;
    display: flex;
    flex-direction: column;
  }
  .my .my-top{
    width: 100%;
    background: url("../../assets/img-about/my-bg.jpg") no-repeat 50%;
  }
  .my .my-top .mint-header{
    background: transparent;
  }
  .my .my-top .mint-header button{
    color: #fff;
  }
  .my .my-top .my-login p{
    color: #333 ;
  }
  .my .my-top .my-login img{
    width: 20%;
  }
  .loginout{
    width: 100%;
    height: 50px;
  }
  /* 退出登陆 */
  .loginout span{
    line-height: 50px;
    color:  #32A5E7;
  }
  .my .my-order .mui-card{
    margin: 8px auto;
  }
  .my .my-order .mui-card-content .mui-card-content-inner{
    padding: 2%;
  } 
  .my .my-order .mui-card-content .mui-card-content-inner ul{
    border: 0;
  }
  .my .my-order .mui-card-content .mui-card-content-inner ul li{
    padding: 10px 5px;
    background: #fff;
    border: 0 ;
    
  }
  .my .my-order .mui-card-content .mui-card-content-inner ul li a div{
    font-size: 12px ;
     color: #666;
  }
</style>

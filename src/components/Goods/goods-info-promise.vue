<template>
  <div>
    <div class="goods-info-promise" @click="openPromise">
        <img src="./right.png"><h6>顺丰发货</h6><img src="./right.png" ><h6>7天无理由退货</h6>
        <span class="mui-icon mui-icon-arrowright"></span>
    </div>
    <div class="promise-popup">
        <mt-popup v-model="promise" position="bottom">
            <div class="goods-info-promise-header">
                <span class="mui-icon mui-icon-closeempty" @click="closePromise"></span>
                <h4>服务说明</h4>
            </div>
            <div >
                <img src="./right.png"><span>顺丰发货</span>
                <p>该商品顺丰发货，顺丰无法到达的地区会安排转寄其他快递。</p>
            </div>
            <div >
                <img src="./right.png"><span>7天无理由退货</span>
                <p>自您的订单签收之日7个自然日之内（含），在商品完好的情况下，可进行无理由退货。 </p>
            </div>
            <mt-button size="large" @click="closePromise">确定</mt-button>
        </mt-popup> 
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return  {
          promise:false
      }  
  },
  methods:{
      openPromise(){
          this.promise = true
      },
      closePromise(){
          this.promise = false
      }
  }
}
</script>

<style>
    .goods-info-promise {
        text-align: left;
        padding: 14px 0; 
        border-top:#eee 1px solid;
        width: 100%;
        height: 42px;
    }
    .goods-info-promise img{
        width: 12px;
        height: 12px;
        vertical-align: middle;
    }
    .goods-info-promise h6{
        display: inline-block;
        margin: 0 5px;
    }
    .goods-info-promise span{
        float: right;
        font-size: 12px;
        margin-top: 5px;
    }
    .mint-popup {
        width: 100%;
    }
    .promise-popup .goods-info-promise-header h4{
        text-align: center;
    }
    .promise-popup .goods-info-promise-header span{
        float: right;
    }
    
    .promise-popup .mint-popup > div:not(:first-child){
        position: relative;
        font-size: 14px;
        text-align: left;
        padding-left: 30px;
    }
    .promise-popup .mint-popup > div:not(:first-child) >img{
        width: 12px ;
        height: 12px;
        margin-left: -20px;
        margin-right: 8px;
    }
    .promise-popup .mint-popup > div:not(:first-child) p{
        margin-top: 10px;
    }
    .promise-popup .mint-button{
        margin-top: 60%;
         background-color: #00c3f5;
        color: #fff;
        border-radius: 0;
    }
</style>

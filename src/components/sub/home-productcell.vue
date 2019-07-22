<template>

  <div class="productcell">
        <!-- <h5>手机</h5> -->
        <ul>
            <li class="" v-for="p in phonelist" :key="p.id">
                <a href="#">
                    <img class="" :src="p.phone">
                    <div>
                        <div class="info">
                            <h5 v-text="p.pname"></h5>
                            <p class="comment" v-text="p.pinfo"></p>
                        </div>
                        <div class="price">
                            <span class="p-sale" v-text="p.price ? ' ¥'+p.price :''"></span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>    
  </div>
</template>

<script>
export default {
  data(){
      return  {
          phonelist:[]
      }  
  },
  methods:{
      getPhoneList(){
            this.$axios.get('/index/phoneList' ,{
                params:{
                     //get方式下, 随url发送的参数
                }
            }).then(res=>{
                console.log(res.data)
                this.phonelist=res.data
               
            })
        },
  },
  created(){
      this.getPhoneList()
  }
}
</script>
<style>
    .productcell{
        width: 100%;
    }
    .productcell ul{
        clear: both;
        margin-left: -40px;
       
    }
    .productcell ul::after{
        content: "";
        clear: both;
        display: block;
    }
    
    .productcell ul li{
       background: #fff;
       margin-left: 5px ;
       margin-bottom:5px; 
       list-style: none;
       display: flex;
       flex-flow: row wrap;
       justify-content: space-between;
       width: 48%;
       float: left;
    }
    .productcell ul li a{
        width: 100%;
        display: block;
        /* border: 1px solid red; */
        
    }
    .productcell ul li a img{
        width: 100%;
    }
   .productcell ul li a div.info h5{
       color: #333;
       font-size: 13px;
       margin: 0 auto;
   }
   .productcell ul li a div.info p{
       color: #999;
       font-size: 10px;
       margin: 0 auto;
   }
   .productcell ul li a div.price span{
       color:  #f0415f;
   }
  
</style>

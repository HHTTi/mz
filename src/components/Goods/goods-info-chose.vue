<template>
  <div>
    <div class="goods-info-chose" @click="defaultInfo" >
        <h6>已选:</h6>
        <p v-text="'全网公开版，'+selectColor+'，'+selectSpec+'，官方标配'"></p>
        <h6 v-text="'x'+idInfoNum">x1</h6>
    </div>
    <!-- popup弹出框 -->
    <div class="chose-popup">
        <mt-popup v-model="chose" position="bottom">
            <div class="chose-popup-info">
                <div>
                    <img :src="banUrl[0]">
                </div>
                <span class="mui-icon mui-icon-closeempty" @click="closeChose"></span>
                <p class="p-sale" v-text="'¥'+price"> </p>
                <h6 class="comment" v-text="'全网公开版，'+selectColor+'，'+selectSpec+'，官方标配'"></h6>
            </div>
            <div class="chose-popup-list">
                <div>
                    <h6>型号</h6>
                    <button type="button" class="mui-btn mui-btn-outlined select" v-text="familyName"></button>
                </div>
                <div>
                    <h6>网络类型</h6>
                    <button type="button" class="mui-btn mui-btn-outlined select">全网公开版</button>
                </div>
                <div>
                    <h6>颜色分类</h6>
                    <button type="button" class="mui-btn mui-btn-outlined" v-for="c in color" :key="c" v-text="c" @click="changeColor(c)" :class="{select : selectColor == c}"></button>
                </div>
                <div>
                    <h6>内存容量</h6>
                    <button type="button" class="mui-btn mui-btn-outlined" v-for="s in spec" :key="s" v-text="s" @click="changeSpec(s)" :class="{select : selectSpec == s}"></button>
                </div>
                <div>
                    <h6>套餐</h6>
                    <button type="button" class="mui-btn mui-btn-outlined select">官方标配</button>
                </div>
                <div>
                    <h6>数量</h6>
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="changeNumber(-1)">-</button>
                        <input id="test" class="mui-input-numbox" type="number" v-model="idInfoNum" />
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="changeNumber(1)">+</button>
				    </div>
                </div>
            </div>
            <mt-button class="goods-info-join chose-popup-join-buy"  @click="addToShopcart">加入购物车</mt-button>
            <mt-button class="goods-info-buy chose-popup-join-buy"  @click="buyNow">立即购买</mt-button>
        </mt-popup>
    </div>
    <div>
        <!-- 底部nav -->
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active">
            <span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
            <span class="mui-tab-label">客服</span>
        </a>
        <a class="mui-tab-item">
            <span class="mui-icon mui-icon-star"></span>
            <span class="mui-tab-label">收藏</span>
        </a>
        <a class="mui-tab-item" href="#/shopcart" >
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
            <span class="mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item goods-info-join"  @click="defaultInfo">
            <span class="mui-tab-label">加入购物车</span>
        </a>
        <a class="mui-tab-item goods-info-buy" @click="defaultInfo">
            <span class="">立即购买</span>
        </a>
    </nav>
  </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return  {
            idColor:'',
            idSpec:'',
            color:'',spec:'',price:0,
            idInfo:{},  //选中的pid的参数值
            chose:false,
            selectColor:'',selectSpec:'',  //颜色和容量的选中状态
            idInfoNum:1,//购买数量
        }  
    },
    props:[
        "title","banUrl","familyName", "onceColor","onceSpec"
    ],
    watch:{
        idInfo:{
            handler(){
                this.price = this.idInfo.price
                this.selectColor = this.idInfo.color
                this.selectSpec = this.idInfo.spec
            },
        }
    },
    methods:{
        defaultInfo(){
            this.chose = true //弹出popup
            var spec = [],color = []
            var title = this.title
            var id = this.$route.params.id
            for (var  i = 0; i < title.length; i++) {//选择的参数列表
                if(title[i].pid == id)
                    this.idInfo = title[i]
                if(spec.indexOf(title[i].spec) == -1)
                    spec.push(title[i].spec)
                if(color.indexOf(title[i].color) == -1)
                    color.push(title[i].color)
            }
            this.spec = spec
            this.color = color
            //默认选中
            var idInfo = this.idInfo
            this.selectColor = idInfo.color
            this.selectSpec = idInfo.spec
        },
        closeChose () { this.chose = false },
        changeColor (c) {
            this.selectColor = c 
            var title = this.title
            for (var  i = 0; i < title.length; i++) {
                if(title[i].color == c && title[i].spec == this.selectSpec)
                this.idInfo = title[i]
            }
            this.$emit('idInfoByChoseBox', this.idInfo) //子传父
            //console.log(this.selectColor,c)
        },
        changeSpec (s) { 
            this.selectSpec = s 
            var title = this.title
            for (var  i = 0; i < title.length; i++) {
                if(title[i].spec == s && title[i].color == this.selectColor)
                this.idInfo = title[i]
            }
            this.$emit('idInfoByChoseBox', this.idInfo) //子传父
            //console.log(this.selectSpec,s)
        },
        changeNumber(val) {
            if (val == 1 && this.idInfoNum < 10)
              this.idInfoNum += val
            if (val == -1 && this.idInfoNum > 0)
              this.idInfoNum += val
        },
        buyNow() {
            console.log('buy')
        },
        //加入购物车
        addToShopcart(){
            console.log("加入购物车-登陆状态:",this.$store.getters.selectIsLogin)
            var url = this.$route.path
            if(!this.$store.getters.selectIsLogin){
                Toast("请先登录")
                this.$router.push('/login?url='+url)
            }else{
                this.$axios.get('/users/addshopcart',{
                    params:{ //传参,商品数据
                        pid:this.$route.params.id,
                        family_name:this.idInfo.family_name,
                        color:this.selectColor,
                        price:this.price,
                        spec:this.selectSpec,
                        number:this.idInfoNum,
                        url:this.banUrl[0]
                    }
                }).then(res=>{
                    //console.log(res)//返回值:{code:1,msg:''}
                    if(res.data.code == 1){
                        this.$store.commit('addShopCart',this.idInfoNum)
                        Toast("购物车加入成功")
                        this.chose = false
                    }else{
                        Toast("购物车加入失败,请重新加入")
                    }
                })
            }
        }
    },
    beforeUpdate () { //首屏加载时的默认配置参数
        if(!this.selectColor){
            this.selectColor =  this.onceColor
            this.selectSpec =  this.onceSpec}
    },
    created(){
        console.log(this.$route)
    }
}
</script>

<style>
    .goods-info-chose{
        margin: 10px auto;
        padding: 15px 3%;
        background: #fff;
        height: 50px;
    }
    .goods-info-chose>h6:first-child{
        float: left;
    }
    .goods-info-chose p{
        float: left;
        padding-left: 3%;
        color: #333;
    }
    .goods-info-chose>h6:last-child{
        float: right;
    }
    /* chose-mint-popup */
    .mint-popup .chose-popup-info{
        /* text-align: left; */
        border-bottom:  1px solid #eee;
    }
    .mint-popup .chose-popup-info div{
        width: 100px;
        height: 100px;
        padding: 2px;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 5px;
        position: absolute;
        left: 20px;
        top: -20px;
    }
    .mint-popup .chose-popup-info div img{
        width: 100%;
    }
    .mint-popup .chose-popup-info span{
        float: right;
        padding-right: 10px;
    }
    #app .mint-popup .chose-popup-info p{
        font-size: 16px;
        color: #f0415f;
        margin-top: 20px ;
        margin-left: 135px;
        text-align: left;
    }
    .mint-popup .chose-popup-info h6{
        margin-bottom: 20px;
        margin-left: 135px;
        text-align: left;
    }
    .mint-popup .chose-popup-list{
        padding: 10px 3%;
        text-align: left;
    }
    .mint-popup .chose-popup-list > div:not(:last-child) button{
        font-size: 12px;
        margin: 5px 10px;
    }
    .mint-popup .chose-popup-list .mui-numbox{
        margin: 5px 10px;
    }
    .mint-popup .chose-popup-list .mui-numbox button{
        background: #fff;
    }
    .select{
        border-color: #00c3f5 !important;
        color: #00c3f5 !important;
    }
    #app .chose-popup .chose-popup-join-buy{
        width: 50%;
        height: 45px;
        border-radius: 0;
        margin: 0 auto;
        display: inline-block;
        float: left;
    }
    /* 底部Nav */
    #app .goods-info-join ,#app .goods-info-buy{
        width: 8px;
        color: #fff
    }
    #app .goods-info-join{
        background: #00c3f5;
    }
    #app .goods-info-buy{
        background: #f0415f;
    }
</style>

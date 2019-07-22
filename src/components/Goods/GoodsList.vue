<template>
  <div class="home-classify mui-ios mui-ios-10 mui-ios-10-3 mui-ios-10-3-1">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">商品分类</h1>
		</header>
    <div class="content">
      <!-- 分类列表 -->
			<div class=" left-wrapper" ref="leftScroll">
				<div>
          <div v-for="(l,i) in leftList" :key="i" @click="leftActive(i,$event)"><p v-text="l" :class="{'goods-active' : currentIndex == i}">左侧的选项</p></div>
        </div>
			</div>
      <!-- 详细列表 -->
			<div class="right-wrapper" ref="rightScroll">
        <div>
          <div class="wrapper" v-for="(list,i) in rightList" :key="i" >
            <ul class="">
              <!-- topright -->
              <a :href="toprightList[i].href">
                <div class="goods-topright-cell">
                  <img :src="toprightList[i].banner_url" alt="">
                  <div>
                    <span v-text="leftList[i]"></span>
                  </div>
                </div>
              </a>
              <!-- v-for right -->
              <li v-for="(r,index) in list" :key="index">
                <a :href="r.href">
                  <div class="goods-right-cell">
                    <img :src="r.img">
                    <p v-text="r.name"></p>
                  </div>
                </a>
              </li>
              <div>
                <button  type="button">查看更多</button>
            </div>
            </ul>
          </div>
        </div>
		  </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'                                            
export default {
  data(){
      return  {
        leftList:[],rightList:[],toprightList:[],
        listHeight:[],scrollY:0,clickEvent:false,
      }  
  },
  methods:{
    getBetterScroll() { //拿参
      this.$axios.get('/products/betterscroll').then(res=>{
        this.leftList = res.data.r1
        this.rightList = res.data.r2
        this.toprightList = res.data.r3
        console.log(res.data)
        this.$nextTick(()=>{//dom结构加载结束(nextTick这个接口是计算dom相关的,要确保原生dom已经渲染了)
          this._initScroll()
          this._getHeight()
        })
      })
    },
    _initScroll(){
      this.leftScroll=new BScroll(this.$refs.leftScroll,{click:true});
      this.rightScroll=new BScroll(this.$refs.rightScroll,{
        click:true,
        probeType: 3  //探针作用，实时监测滚动位置
      })
      this.rightScroll.on('scroll',(pos)=>{ //监听事件,获取pos.y
        this.scrollY=Math.abs(Math.round(pos.y))
      })
    },
    _getHeight(){
      var rightItem = this.$refs.rightScroll.getElementsByClassName('wrapper');
      let height=0;
      this.listHeight.push(height);  //listHeight
      for (let i = 0; i < rightItem.length; i++) {
        let item=rightItem[i];
        height += item.scrollHeight;
        this.listHeight.push(height);
        console.log(i,item.clientHeight)
      }
      console.log(rightItem,this.listHeight)
    },
    //左边的菜单项的点击事件
    leftActive(index,$event){
      //自己默认派发事件时(BScroll),_constructed默认为true.但原生的浏览器并没有这个属性
      if (!$event._constructed) {
        return;
      }else{
        //运用BScroll滚动到相应位置
        //运用index去找到对应的右侧位置
        let rightItem = this.$refs.rightScroll.getElementsByClassName('wrapper');
        //滚动到相应的位置
        let el=rightItem[index];
        console.log(el,index)
        //设置滚动时间
        this.rightScroll.scrollToElement(el,300);
      }
    },   
  },
  created () {
    this.getBetterScroll()
  },
  mounted () {
    
  },
  computed:{
    currentIndex(){
      //用来计算左侧当前索引在哪，从而定位到左侧边栏的位置
      for (let i = 0; i < this.listHeight.length; i++) {
        var height1=this.listHeight[i] ;
        var height2=this.listHeight[i+1];
        if(!height2||(this.scrollY >= height1 && this.scrollY < height2)){
          if(this.clickEvent)
            return i+1
          else 
            return i
        }
       console.log(height1,height2,i,this.scrollY)
      } 
      //当滚动到最顶上的时候会<height1
      return 0;
    }
  }

}
</script>

<style>
  .content{
    display: flex;
    position: absolute;
    width:100%;
    overflow:hidden;
    bottom: 50px;
    top: 45px;
  }
  /* left */
  .left-wrapper{
    flex:0 0 93px;
    background:#fff;
    overflow: auto;
  }
  .left-wrapper > div{
    width: 100%;
  }
  .left-wrapper > div > div{
    width: 100%;
    display: block;
    padding: 15px 0;
    /* padding-left: 10px; */
    /* border-bottom: 1px solid #999; */
  }
  .left-wrapper > div > div > p{
     border-left: 3px solid transparent;
     font-size: 16px;
     color: black;
     margin: 0;
  }
  .left-wrapper  .goods-active{
    color:#32A5E7;
    border-left: 3px solid #32A5E7;
  }
  /* right */
  .right-wrapper{
   flex:1;
   border-left: 1px solid #c8c7cc;
   background: #fff;
   padding: 3%;
  }
  .right-wrapper .wrapper{
    width: 100%;
    padding-top: 10px;
    /* height: 820px; */
  }
  .right-wrapper .wrapper ul{
    padding: 0;margin: 0;
  }
  .right-wrapper  .goods-topright-cell{
    width: 100%;
    height: 150px;
  }
  .right-wrapper  .goods-topright-cell > img{
    width: 100%;
  }
  .right-wrapper .goods-topright-cell span{
    display: inline-block;
    border-bottom: #32A5E7 2px solid;
    font-size: 14px;
    color: #32A5E7;
    padding: 5px 0;
  }
  .right-wrapper ul>li{
    width: 50%;
    display: inline-block;
  }
  .right-wrapper button{
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
    }
  .goods-right-cell img{
    width: 120px;
    height: 120px;
  }

</style>

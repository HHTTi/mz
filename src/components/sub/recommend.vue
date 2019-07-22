<template>
  <div>
    <div class="app-home-grids" >
            <a href="" v-for="g in grids" :key="g.id"><img :src="g.grid" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return  {grids:[]}  
  },
  methods:{
      getGrids(){
            this.$axios.get('/index/grids',{params:{}}).then(res=>{
                this.grids = res.data
            })
        }
  },
  created(){
      this.getGrids()
  }
}
</script>

<style>
/* grids */
    #app .app-home-grids{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    #app .app-home-grids a{
        width: 100%;
    }
    #app .app-home-grids img{
        width: 100%;
    }
</style>

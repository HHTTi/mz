<template>
  <div class="home-table-list">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell" v-for="l in tableListUrl" :key="l.id">
					<a class="mui-navigate-right" :href="l.url">
						<h5 v-text="l.text"></h5> 
					</a>
				</li>
			</ul>
  </div>
</template>

<script>
export default {
  data(){
      return  {}  
  },
  methods:{
      
  },
  props:[
      "tableListUrl"
  ],
  created(){
      
  }

}
</script>

<style>
    .home-table-list{
        margin-bottom: 15px;
    }
    .home-table-list .mui-table-view li a h5{
        float:left;
    }
</style>

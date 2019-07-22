<template>
  <div class="login">
    <header class="">
        <a href="#" class="active">注册</a>
    </header>
    <div>
        <div class="login-tip login-opacity-0" :class="{'login-opacity-1' : loginOpacity}">
            <img src="./error-ico.png"><h6>请输入合法的手机号码</h6>
            <span class="mui-icon mui-icon-closeempty" @click="loginOpacity = false"></span>
        </div>
        <form>
            <div>
                <input type="text" v-model="name" placeholder="手机号" @focus="loginOpacity = false">
            </div>
            <div>
                <input type="password" v-model="pwd" placeholder="密码" @focus="loginOpacity = false">
            </div>
            <div>
                <p>
                    点击立即注册，即表示您同意并愿意遵守 <a href="#" class="active">Flyme服务协议</a>和 <a href="#" class="active">法律声明</a>
                </p>
            </div>
            
            <div>
                <button  type="button" class="button-blue" @click="toRegister">立即注册</button>
            </div>
            <div>
                <button  type="button"  @click="moveToLogin()">返回登录</button>
            </div>
       </form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
      return  {
          name:'',pwd:'',loginOpacity:false
      }  
  },
  methods:{
      toRegister(){
          var name = this.name ,pwd = this.pwd
          console.log("zai注册")
          if(!!(/^1[34578]\d{9}$/.test(name))  && !!pwd){
              var data = this.$qs.stringify({name:name,pwd:pwd})
              var header = {header:{'Content-Type': 'application/x-www-form-urlencoded'}}
              this.$axios.post('/users/register',data,header).then(res=>{
                  console.log(res)
                  if(res.data.code == 0){
                        Toast('注册失败,请稍后再试')
                    }else if(res.data.code == 1){
                        Toast('注册成功')
                        this.$router.push(this.$route.query.url)
                    }
              })
          }else { this.loginOpacity = true }
          
      },
      moveToLogin(){
          var url = this.$route.query.url
          if(url.indexOf('/login?') == -1)
            this.$router.push("/login?url="+url)
          else this.$router.push(url)
      }
  },
  created(){
      var url = this.$route
      console.log("注册页:",url)
  }
}
</script>

<style>
    .login{
        position: absolute;
        padding: 10px 5%;
        background: #fff;
        width: 100%;
        height: 100%;
    }
    .login > header{
        padding-top: 80px ;
        margin-bottom: 50px;
    }
    .login > header > a{
        font-size: 18px;
        margin: 0 20px;
    }
    .login > header > span{
        border-left: 1px solid #dadada;
    }
    .login-opacity-0{
        opacity: 0;
    }   
    .login-opacity-1{
        opacity: 1;
    }
    .login-tip{
        width: 100%;
        height: 33px;
        border: solid 1px #ffc2b3;
        background: #ffd1ca;
        border-radius: 3px;
        padding-top: 5px;
        transition: all .5s linear;
    }
    .login-tip img{
        margin: 2px 3%  0;
        float: left;
    }
    .login-tip h6{
        display: inline-block;
        float: left;
    }
    .login-tip span{
        float: right;
    }
    .login  form >div {
        margin: 15px auto;
    }
    .login form > div >input{
        font-size: 14px;
    }
    .login-checkbox{
        width: 100%;
        height: 40px;
        font-size: 14px;
    }
    .login-checkbox > div {
        float: left;
    }
    .login-checkbox > a{
        float: right;
    }
    .login  form >div >button{
        width: 100%;
        padding: 10px;
    }
    
</style>

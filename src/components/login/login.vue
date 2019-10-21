<template>
  <div class="login">
    <header class="">
        <a href="#" class="active">账号登录</a>  <span></span> <a href="#">验证码登陆</a>
    </header>
    <div>
        <div class="login-tip login-opacity-0" :class="{'login-opacity-1' : loginOpacity}">
            <img src="./error-ico.png"><h6 v-text="msg">密码与账号不匹配</h6>
            <span class="mui-icon mui-icon-closeempty" @click="loginOpacity = false"></span>
        </div>
        <form action="">
            <div>
                <input id='uname' type="text" placeholder="手机号/魅族账号" v-model="loginName" @focus="loginOpacity = false">
            </div>
            <div>
                <input id='upwd' type="password" placeholder="密码" v-model="loginPwd" @focus="loginOpacity = false">
            </div>
            <div class="login-checkbox">
                <div>
                    <input type="checkbox" id="login-auto"><label for="login-auto">记住登录状态</label>
                </div>
               
               <a class="active" href="#">忘记密码</a>
            </div>
            <div>
                <button  type="button" class="button-blue" @click="toLogin">登录</button>
            </div>
            <div>
                <button  type="button" @click="moveToRegister()">注册</button>
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
            loginName:'',
            loginPwd:'',
            loginOpacity:false,
            msg:'账号和密码不能为空'
        }  
    },
    methods:{
        moveToRegister(){
            var url = this.$route.fullPath
            this.$router.push("/register?url="+url)
        },
        toLogin () {
            var name = this.loginName , pwd = this.loginPwd
            if(!!name && !!pwd){
                var postData = this.$qs.stringify({uname:name,upwd:pwd})
                // 设置post请求头
                var headers = {header:{'Content-Type': 'application/x-www-form-urlencoded'}}
                this.$axios.post('/users/login',postData,headers).then(res=>{
                    console.log(res.data)
                    //返回值为{code: n , msg: uname}
                    if(res.data.code == 0){
                        this.msg = '账号或密码不匹配'
                        this.loginOpacity = true
                    }else{
                        Toast("登陆成功")
                        // 返回之前页,设置登陆状态,用户名
                        this.$store.commit('changeIsLogin',true)
                        this.$store.commit('changeUname',res.data.msg)
                        //if(this.$route.query.url == '/register')
                        this.$router.push(this.$route.query.url)
                    }
                })
            }else {
                this.msg = '账号和密码不能为空'
                this.loginOpacity = true
            }
        },
    },
    created (){
        console.log("登陆页:",this.$route)
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
    /* 显示 和隐藏 */
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

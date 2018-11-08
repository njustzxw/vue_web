<template>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 450px;">
        <div class="modal-content" style="width: 450px;">
        	<div class="login">
        		<img src="../../../static/img/a0.jpg" alt="" class="user-pic">
        		<div class="log-input" v-show="fag=='log'">     <!-- 登陆 -->
        			<input type="text" placeholder="请输入用户名" v-model="name" class="log-input-1" style="margin-top: 20px;">
	        		<input type="password" placeholder="请输入密码" v-model="kwd" class="log-input-2">
	        		<div class="ts"><p>{{log_info}}</p></div>
	        		<input type="button" value="登录" class="logbtn btn" @click="login">      
	        		<i class="fa fa-user log-icon fa-2x" style="top:30px"></i>
	        		<i class="fa fa-lock log-icon fa-2x" style="top:80px"></i>  		
	        	</div>
	        	<div class="new clearfix" v-show="fag=='log'">
	        		<p class="fl"><a href="#">忘记密码？</a></p>
	        		<p class="fr"><a href="#" @click.stop.prevent="fag='register'">新用户？注册</a></p>
	        	</div>	
				
				<div class="log-input" v-show="fag=='register'">     <!-- 注册 -->
        			<input type="text" placeholder="请输入用户名" v-model="username_reg" class="log-input-1" style='margin-top: 20px;'>
	        		<input type="password" placeholder="请输入密码" v-model="kwd_reg" class="log-input-3">
	        		<input type="password" placeholder="请确认密码" v-model="confirm_kwd_reg" class="log-input-2">
	        		<div class="ts"><p>{{register_info}}</p></div>
	        		<input type="button" value="注册" class="registerbtn btn" @click="register">      
	        		<i class="fa fa-user log-icon fa-2x" style="top:30px"></i>
	        		<i class="fa fa-key log-icon fa-2x" style="top:80px"></i>  	
	        		<i class="fa fa-magic log-icon fa-2x" style="top:130px"></i>  			
	        	</div>
	        	<div class="new clearfix" v-show="fag=='register'">
	        		<p class="fr"><a href="#" @click.stop.prevent="fag='log'">已有用户？返回登录</a></p>
	        	</div>
        	</div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
</template>
<script>
	import {dorequest,doPost} from '../../assets/js/http.js'
	export default{
	    name:'login',
	    data(){
	        return{
	        	name:'',
	        	kwd:'',
	        	fag:'log',
	        	username_reg:'',
	        	kwd_reg:'',
	        	confirm_kwd_reg:'',
	        	log_info:'',  //登录信息
	        	register_info:'',//注册信息
	        }
	    },
	    methods:{
	    	login () {
				var that = this;
				doPost({name: that.name,key: that.kwd}, 'login', function(result) {
					if(result.status==200||result.status==304) {
						console.log(result.data)
						that.log_info = result.data.sta;
						if(result.data.sta == "登录成功"){
							session_set_item("username",that.name)
							setTimeout(function(){
								$('#myModal').modal('hide');
								window.location.reload();
							},1000)
						}
					}
				}, function(result) {
					alert('失败')
				})
			},
			register () {
				var that = this;
				if (that.kwd_reg != that.confirm_kwd_reg){
					console.log(1)
					that.register_info = '密码不一致，请重新输入密码'
				}else{
					doPost({name: that.username_reg,key: that.kwd_reg}, 'register', function(result) {
						that.register_info = result.data.sta+'即将返回登录';
						setTimeout(function(){
							that.fag = 'log'
						},2000)
					})
				}
				
			}
	    },
	}
</script>

<style scoped>
	.log-icon{
		position: absolute;
		color:#9e9e9e;
		left: 60px;
	}
	.login{
		background: url('../../../static/img/bg.jpg')0px 0px no-repeat;
		margin: 0 auto;
	    text-align: center;
	    padding: 4em 2em;
	    height: 80%;
	}
	.user-pic{
		border-radius: 50%;
	}
	.btn{
		margin-top: 20px;
		width:80%;
	    font-size: 20px;
	    font-weight: 300;
	    color: #fff!important;
	    cursor: pointer;
	    padding: 9px 15px!important;
	    border-radius: 0.3em;
	    -webkit-transition: 0.1s all;
	    text-align: center;
	}
	.logbtn{
	    border: 3px solid #f9671e!important;
	    background: #f9671e;
	}
	.registerbtn{
	    border: 3px solid #66CCFF!important;
	    background: #66CCFF;
	}
	.logbtn:hover{
		background: none;
	    border: 3px solid #f9671e;
	    color: #f9671e;
	}
	.registerbtn:hover{
		background: none;
	    border: 3px solid #66CCFF;
	    color: #66CCFF;
	}
	.log-input{
		position: relative;
	}
	.log-input input:focus{
		border:none;
		outline: none;
	    box-shadow: none;  
	}
	.log-input input{
		width:80%;
		padding: 0.75em 0.75em 1em 4em;
	    color: #283440;
	    font-size: 16px;
	    font-weight: 400;
	    border: none;
	    font-family: 'Open Sans', sans-serif;
	}
	.log-input-1{
        border-top-right-radius: 0.3em;
        border-top-left-radius: 0.3em;
        border-bottom: 1px solid #C0C3C8!important;
	}
	.log-input-2{
        border-bottom-right-radius: 0.3em;
        border-bottom-left-radius: 0.3em;
	}
	.log-input-3{
		 border-bottom: 1px solid #C0C3C8!important;
	}
	.new{
		width: 80%;	
		margin: 4em 2.9em 1em 2.9em;
	}
	.new p a{
	    color: #AFAFB0;
	    font-weight: 400;
	    font-size: 1em;
	}
	.ts{
		font-size: 16px;
	    color: red;
	    margin-top: 20px;
	}

</style>
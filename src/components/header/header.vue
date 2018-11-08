<template>
	<nav class="navbar navbar-default top-navbar  " role="navigation">
		<div class="navbar-header bg-dark head-left">
			<a href="#" class="navbar-brand text-lt">
				<i class="fa fa-btc"></i>
				<router-link to="/" style="text-decoration: none;color: white;"><span class="head-title">workspace</span></router-link>
			</a>
		</div>
		<div class="head-right clear box-shadow">
			<ul class="nav navbar-top-links navbar-right">
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
						<i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-messages">
						<li>
							<a href="#">
								<div>
									<strong>John Doe</strong>
									<span class="pull-right text-muted">
										<em>Today</em>
										</span>
								</div>
								<div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<strong>John Smith</strong>
									<span class="pull-right text-muted">
											<em>Yesterday</em>
									</span>
								</div>
								<div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<strong>John Smith</strong>
										<span class="pull-right text-muted">
											<em>Yesterday</em>
										</span>
								</div>
								<div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a class="text-center" href="#">
								<strong>Read All Messages</strong>
								<i class="fa fa-angle-right"></i>
							</a>
						</li>
					</ul>
					<!-- /.dropdown-messages -->
				</li>
				<!-- /.dropdown -->
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
						<i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-tasks">
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 1</strong>
										<span class="pull-right text-muted">60% Complete</span>
									</p>
									<div class="progress progress-striped active">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
											<span class="sr-only">60% Complete (success)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 2</strong>
										<span class="pull-right text-muted">28% Complete</span>
									</p>
									<div class="progress progress-striped active">
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style="width: 28%">
											<span class="sr-only">28% Complete</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 3</strong>
										<span class="pull-right text-muted">60% Complete</span>
									</p>
									<div class="progress progress-striped active">
										<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
											<span class="sr-only">60% Complete (warning)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 4</strong>
										<span class="pull-right text-muted">85% Complete</span>
									</p>
									<div class="progress progress-striped active">
										<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%">
											<span class="sr-only">85% Complete (danger)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a class="text-center" href="#">
								<strong>See All Tasks</strong>
								<i class="fa fa-angle-right"></i>
							</a>
						</li>
					</ul>
					<!-- /.dropdown-tasks -->
				</li>
				<!-- /.dropdown -->
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
						<i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-alerts">
						<li>
							<a href="#">
								<div>
									<i class="fa fa-comment fa-fw"></i> New Comment
									<span class="pull-right text-muted small">4 min</span>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<i class="fa fa-twitter fa-fw"></i> 3 New Followers
									<span class="pull-right text-muted small">12 min</span>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<i class="fa fa-envelope fa-fw"></i> Message Sent
									<span class="pull-right text-muted small">4 min</span>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<i class="fa fa-tasks fa-fw"></i> New Task
									<span class="pull-right text-muted small">4 min</span>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
								<div>
									<i class="fa fa-upload fa-fw"></i> Server Rebooted
									<span class="pull-right text-muted small">4 min</span>
								</div>
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a class="text-center" href="#">
								<strong>See All Alerts</strong>
								<i class="fa fa-angle-right"></i>
							</a>
						</li>
					</ul>
					<!-- /.dropdown-alerts -->
				</li>
				<!-- /.dropdown -->
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
						<i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-user">
						<li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
						</li>
						<li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
						</li>
						<li class="divider"></li>
						<li><a href="void:javascript(0)" @click.prevent="log"><i class="fa fa-sign-in fa-fw"></i> Login</a>
						</li>
						<li><a href="void:javascript(0)" @click.prevent="logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
						</li>
					</ul>
					<!-- /.dropdown-user -->
				</li>
				<!-- /.dropdown -->
			</ul>
			<div class="form-group fr input-search" style="margin-right: 3%;">
				<div class="input-group dropdown">
					<input  type="text" placeholder="搜索股票" v-model="query_input" @keyup="search()" data-toggle="dropdown"/>
					<span class="input-group-btn btn-search">
						<button class="btn btn-sm" @click="query">
							<i class="fa fa-search"></i>
						</button>
					</span>
					<ul  class="toggle-query dropdown-menu">
		                <router-link tag="li" v-for="(item,index) in stock_list_query" :key="index" class="clearfix" :to="{path:'/quotation',query:{id:item.code}}">
		                    <span style="padding-left: 5px;">{{item.name}}</span>
		                    <span style="padding-left: 10px;">{{item.code}}.{{item.market}}</span>
		                </router-link>
		            </ul>
				</div>
			</div>
		</div>
	</nav>

</template>
<script>
	export default{
	    name:'web_head',
	    data(){
	        return{
	        	stockid:600123,
	        	stockname_input:'',
		        stockpinyin_input:'',
		        query_input:'',
		        stock_info:[],          //股票信息
		        stock_list_query:[],
	        }
	    },
	    mounted:function(){
	    	this.$nextTick(function(){
	    		if(!session_get_item('username')){
					setTimeout(function(){
						console.log($('#myModal'));
						$('#myModal').modal('show');
					},500)
	    		}
	    	})
	    },
	    methods:{
	    	log () {
	    		$('#myModal').modal('show');
	    	},
	    	query (){
	            var that = this;
	      	},
	        search () {
	            var that = this;
	            var js1 = /^\d+$/;   //数字
	            var js2 = /^[A-Za-z]+$/  //拼音
	            var js3 = /^[\u4e00-\u9fa5]+$/    //汉字
	            if(js1.test(that.query_input)){
	                that.stockid_input = that.query_input;
	            }else if(js2.test(that.query_input)){
	                that.stockpinyin_input = that.query_input;
//					console.log(that.stockpinyin_input)	                
	            }else if(js3.test(that.query_input)){
	                that.stockname_input = that.query_input;
	            }
	            dorequest_api({ code: that.stockid_input, name:that.stockname_input, pinyin:that.stockpinyin_input, showapi_appid: 51699, showapi_sign: '423c642aaf344e5b876ed34167f60c91' }, 'http://route.showapi.com/131-43', function (result) {
//	                console.log(result)
	                if(result.showapi_res_body.ret_code > -1){
	                    that.stock_list_query = result.showapi_res_body.list.slice(0,8);
	                }
	            })
	        }, 
	        logout () {        //退出登录
	        	var that = this;
	        	session_remove_item('username');
	        	that.name = '';
	        	window.location.reload();
	        	$('.user-info').css('display','none');
	        	message('success')
	        	
	        }
	    },
	}
</script>

<style scoped>
.top-navbar .nav > li {
    position: relative;
    display: inline-block;
    margin: 0px;
    padding: 0px;
}
.top-navbar .nav > li > a {
    position: relative;
    display: block;
    padding: 15px 20px;
    color: #FFFFFF;
    margin: 0px;
}
.top-navbar{
	background:#FFFFFF;
}
.top-navbar .nav > li {
    position: relative;
    display: inline-block;
    margin: 0px;
    padding: 0px;
}
#sideNav {
    float: left;
    left: 0;
    z-index: 3;
    color: #868686;
    cursor: pointer;
    border-radius: 0;
    width: 14px;
    font-size: 48px;
    line-height: 0;
    margin: 7px 0 0 20px;
}
.fa {
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
i.fa.fa-bars {
    font-size: 20px;
    margin: 12px 0 0;
}
.nav > li > a > i {
    margin-right: 10px;
    color: rgb(243, 106, 90);
}
.top-navbar .nav > li > a > i {
    margin-right: 2px;
}

.dropdown-tasks p {
    font-size: 13px;
    line-height: 21px;
    padding-top: 4px;
}
.progress {
    height: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 0px;
}
.text-muted {
    color: #FB5651;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    font-size: 13px;
}
.dropdown-tasks > li > a {
    padding: 0px 15px;
}
.top-navbar .dropdown-menu {
    min-width: 190px;
    border-radius: 0 0 4px 4px;
    border: 0;
}
.top-navbar {
    margin: 0px;
}
.bg-dark {
    color: #a6a8b1;
    background-color: #3a3f51;
}
.navbar-header{
	width: 200px;
	height: 50px;
}
.navbar{
	border: none !important;
}
.head-left{
		height: 50px;
		width: 200px;
		color: #a6a8b1;
        background-color: #3a3f51;
	}
.navbar-brand {
    display: inline-block;
    float: none;
    height: auto;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
}
.bg-dark,.text-lt {
    color: #eaebed!important;
}
.head-title{
	margin-left: 5px;
}
.head-right{
	height:50px;
	margin-left: 200px;
	padding: 0 15px;
}
.input-search{
	max-width: 184px;
	margin:10px 0;
}

.input-search input{
	box-shadow: none;
    color: #58666e;
    background-color: #edf1f2;
    height: 30px;
    padding: 3px 10px 3px 20px;
    font-size: 12px;
    line-height: 1.5;
    border: none;
    border-radius: 15px 0 0 15px;
}
.input-search input:focus,.btn-search button:focus{
	/*border:none;*/
	outline: none;
    box-shadow: none;  
}
.btn-search{
	display: table-cell;
}
.btn-search button{
	color: #58666e;
    background-color: #edf1f2;
    border-radius: 0 15px 15px 0;
}
/*下拉*/
.toggle-query{
    width: 172px;
    position: absolute;
    padding: 0 !important;
    left: 4px;
    background: #f7f7f1;
    border: 1px solid #E1E1E1;
}
.toggle-query li{
    line-height: 30px;
}
.toggle-query li:hover{
    background: #5788e6;
    color:white;
    cursor: pointer;
}
.toggle-query li span{
    display: inline-block;
    width: 50%;
    float: left;
    /*margin: 0 9px;*/
}
</style>

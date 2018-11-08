<template>
	<div class="sidebar">
		<div class="head-img">
			<a href="#" class="img-href">
				<img calss="user-pic" src="../../../static/img/a0.jpg" alt="头像">
			</a>
			<span id='user-name' @click="userbox">
				<span class="text-muted text-14 block">
					<strong class="font-bold text-lt">{{name}}</strong>
					<b class="caret"></b>
				</span>
				<span class="text-muted text-12">{{juese}}</span>
			</span>
		</div>
		<ul class="user-info w" :style="{display:popuserbox?'block':'none'}">
			<li class="total bg-info">
				<span class="arrow-top"></span>
				<div>300mb of 500mb used</div>
			</li>
			<li class="">
				<a href="#">设置</a>
			</li>
			<li>
				<a href="#">个人中心</a>
			</li>
			<li>
				<a href="#">任务中心</a>
			</li>
			<li class="line-1"></li>
			<li>
				<a href="void(javascript:0)" @click.prevent="logout">退出登录</a>
			</li>
		</ul>

		<div class="line"></div>
		<nav class="navbar-default navbar-side" role="navigation">
	        <div class="sidebar-collapse">
	            <ul class="nav bg-dark" id="main-menu">
	            	<li class="text-12 text-muted" style="padding-left:15px">工作台</li>
	            	<li>
	                    <a href="#"><i class="fa fa-laptop purple"></i>工作中心</a>
	                </li> 
	                <li>
	                    <a href="#"><i class="fa fa-tasks blue"></i>任务管理</a>
	                </li> 
	                <li>
	                	<router-link  to="/datacapture" ><i class="fa fa-tasks yellow"></i>数据抓取</router-link>
	                </li> 
	                <li class="text-12 text-muted" style="padding-left:15px">股市一览</li>
	                <li>
	                	<router-link  to="/quotation?id=000001" ><i class="fa fa-signal green"></i>股市行情</router-link>
	                    <!--<a href="/quotation"><i class="fa fa-signal green"></i>股市行情</a>-->
	                </li> 
	                 <li class="text-12 text-muted" style="padding-left:15px">股市分析</li>
	                 <li>
	                    <a href="void:javascript(0)" @click="slidetoggle('infomation',$event)">
	                    	<i class="fa fa-envelope blue1" ></i>舆情信息
	                    	<span class="fa fr" :class="infomation?'fa-angle-down':'fa-angle-right'"></span>
	                    </a>
	                    <ul class="nav nav-second-level child-bg"  id='infomation' style="display:none">
	                        <li>
	                        	<router-link  to="/news" >实时新闻</router-link>
	                        </li>
	                         <li>
	                            <a href="#">热点板块</a>
	                        </li>
	                    </ul>
	                </li>  
	                <li>
	                    <a href="void:javascript(0)" @click="slidetoggle('anylize',$event)">
	                    	<i class="fa fa-sitemap orange" ></i>舆情分析
	                    	<span class="fa fr" :class="anylize?'fa-angle-down':'fa-angle-right'"></span>
	                    </a>
	                    <ul class="nav nav-second-level child-bg"  id='anylize' style="display:none">
	                        <li>
	                            <a href="#">事件分析</a>
	                        </li>
	                        <li>
	                            <a href="#">情感分析</a>
	                        </li>
	
	                    </ul>
	                </li>                  
	                <li>
	                    <a href="void:javascript(0)" @click="slidetoggle('opportunity',$event)"> 
	                    	<i class="fa fa-calendar blue"></i> 交易机会
	                    	<span class="fa fr" :class="opportunity?'fa-angle-down':'fa-angle-right'"></span>
	                    </a>
	                    <ul class="nav nav-second-level child-bg" id="opportunity" style="display:none">
	                        <li>
	                            <a href="#">题材机会</a>
	                        </li>
	                        <li>
	                            <router-link  to="/calendar" >投资日历</router-link>
	                        </li>
	                    </ul>
	                </li>
	                <li class="text-12 text-muted" style="padding-left:15px">个人中心</li>
	                <li>
	                    <a href="empty.html"><i class="fa fa-user green1"></i> 个人中心</a>
	                </li>
	            </ul>
	           
	        </div>
	    </nav>	
	</div>
</template>
<script>
	export default{
	    name:'sidebar',
	    data(){
	        return{
	        	opportunity:false,
	        	infomation:false,
	        	anylize:false,
	        	popuserbox:0,
	        	name:'暂无姓名',
	        	juese:"暂无角色",
	        }
	    },
	    mounted(){
	    	var that = this;
	    	that.$nextTick(function(){
	    		if(session_get_item('username')){
	    			that.name = session_get_item('username')
	    		}else{
	    		}
//	    		$('.sidebar').css('min-height',($(document).height()-50) + 'px')
	    	})
	    },
	    methods:{
	        slidetoggle (id,ev) {
	        	var that = this;
	        	if(id == 'anylize'){
	        		console.log(that.anylize)
	        		that.anylize = !that.anylize;
	        	}else if(id == 'infomation'){
	        		that.infomation = !that.infomation;
	        	}else if(id == 'opportunity'){
	        		that.opportunity = !that.opportunity;
	        	}
	            $('#'+id).slideToggle('fast');
	            $('.bg_active').removeClass('bg_active');
	            var obj = ev.currentTarget;
	            $(obj).addClass('bg_active')
	        },
	        userbox () {
	        	$('.user-info').css('margin-left','20px');
	        	var that = this;
	        	that.popuserbox =!that.popuserbox;
	        	$('.user-info').css('display','block');
	        	$(".user-info").animate({marginLeft:""});
	        },
	        logout () {
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

<style slot-scope="props">
	.sidebar{
		height: 900px;
		width: 200px;
		background: #3a3f51;
		position:absolute;
	}
	.head-img{
		padding: 15px;
		text-align: center;
	}
	.user-pic{
		border-radius: 50%;
	}
	.head-img img{
		border-radius: 50%;
		width: 96px;
	}
	.img-href{
		display: inline-block;
		width: 96px;
		text-align: center;
	}
	#user-name{
		cursor: pointer;
	}
	.font-bold {
		font-weight: 700;
	}
	.bg-dark .caret {
    	border-top-color: #a6a8b1;
    	border-bottom-color: #a6a8b1;
	}
	#main-menu li>a{
		color: #b4b6bd;
		
	}
	#main-menu li>a:hover,#main-menu li>a:focus{
		color: #b4b6bd;
		background-color: #32374a;
		color: white;
	}
	#main-menu li>a > i {
	    position: relative;
	    float: left;
	    width: 40px;
	    margin: -10px -10px;
	    margin-right: 5px;
	    overflow: hidden;
	    line-height: 40px;
	    text-align: center;
	}
	.nav > li {
	    position: relative;
	    display: block;
	    border-top-color: #a6a8b1;
    	border-bottom-color: #a6a8b1;
	}
	.child-bg a{
		padding-left: 55px;
	}
	.user-info{
		position: absolute;
	    top: 160px;
	    left: 0;
	    z-index: 1000;
	    display: none;
	    float: left;
	    min-width: 200px;
	    padding: 5px 0;
	    margin: 2px 0 0;
	    font-size: 14px;
	    text-align: left;
	    list-style: none;
	    background-color: #fff;
	    -webkit-background-clip: padding-box;
	    background-clip: padding-box;
	    border: 1px solid #ccc;
	    border: 1px solid rgba(0, 0, 0, .15);
	    border-radius: 4px;
	    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
	    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
	}
	.total{
		margin:-5px 0 10px 0;
		padding: 15px;
	}
	.bg-info {
	    color: #dcf2f8;
	    background-color: #23b7e5;
	}
	.arrow-top{
		top: -14px;
	    left: 50%;
	    margin-left: -9px;
	    position: absolute;
	    display: block;
	    width: 0;
	    height: 0;
	    border-color: transparent;
	    border-style: solid;
	    z-index: 10;
	    border-left: 12px solid transparent;
	    border-right: 12px solid transparent;
	    border-bottom: 12px solid #23b7e5;
	}
	.user-info{
		margin-left: 20px;
	}
	.user-info a{
		text-decoration: none;
		padding: 5px 15px;
		display: block;
	    clear: both;
	    font-weight: normal;
	    line-height: 1.42857143;
	    color: #333;
	    white-space: nowrap;
	}
	.user-info a:hover{
		color: #141719;
	    background-color: #edf1f2 !important;
	    background-image: none;
	    filter: none;
	}

	</style>

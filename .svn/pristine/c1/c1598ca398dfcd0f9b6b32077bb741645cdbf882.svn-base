<template>
	<div id="quotation">
		<div class="row">     <!--四个框-->
			<div class="col-md-3 col-sm-6 col-xs-12">    <!--投资日历数据抓取-->
				<div class="card bg-blue">
					<div class="card-block">
						<div class="dropdown fr">
							<button type="button" class="btn dropdown-toggle btn_bg" id="dropdownMenu1" data-toggle="dropdown">
								<i class="fa fa-bars"></i>
						        <span class="caret"></span>
						    </button>
							<ul class="dropdown-menu btn_cz" role="menu" aria-labelledby="dropdownMenu1">
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="void:javascript(0)" @click.prevent="get_calendar_data()">
										<i class="fa fa-play"></i>&nbsp;&nbsp;开始
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="void:javascript(0)" @click.prevent="clear_calendar_data('calendar_bar')">
										<i class="fa fa-stop"></i>&nbsp;&nbsp;清空
									</a>
								</li>
							</ul>
						</div>
						<h4>投资日历数据抓取</h4>
						<p>最近更新于 <span>{{lasttime_c}}</span></p>
						<p style="margin-top: 10px;">抓取进程:
							<span><b>&nbsp;{{calendar_bar}}%</b></span>
						</p>
						<div class="progress progress-striped active">
							<div id="calendar_bar" class="progress-bar progress-bar-success " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12"> 	 <!--财经舆情数据抓取-->
				<div class="card bg-green">
					<div class="card-block">
						<div class="dropdown fr">
							<button type="button" class="btn dropdown-toggle btn_bg" id="dropdownMenu1" data-toggle="dropdown">
								<i class="fa fa-bars"></i>
						        <span class="caret"></span>
						    </button>
							<ul class="dropdown-menu btn_cz" role="menu" aria-labelledby="dropdownMenu1">
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="javascript：" @click.prevent="get_live_data()">
										<i class="fa fa-play"></i>&nbsp;&nbsp;开始
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" tabindex="-1"  href="javascript：">
										<i class="fa fa-stop"></i>&nbsp;&nbsp;停止
									</a>
								</li>
							</ul>
						</div>
						<h4>财经舆情数据抓取</h4>
						<p>最近更新于</p>
						<p style="margin-top: 10px;">抓取进程:
							<span><b>&nbsp;90%</b></span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-warning " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12"> 	 <!--金融事件数据抓取-->
				<div class="card bg-yellow">
					<div class="card-block">
						<div class="dropdown fr">
							<button type="button" class="btn dropdown-toggle btn_bg" id="dropdownMenu1" data-toggle="dropdown">
								<i class="fa fa-bars"></i>
						        <span class="caret"></span>
						    </button>
							<ul class="dropdown-menu btn_cz" role="menu" aria-labelledby="dropdownMenu1">
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="javascript：" @click.prevent="get_history_news()">
										<i class="fa fa-play"></i>&nbsp;&nbsp;开始
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="#">
										<i class="fa fa-stop"></i>&nbsp;&nbsp;停止
									</a>
								</li>
							</ul>
						</div>
						<h4>金融事件数据抓取</h4>
						<p>最近更新于</p>
						<p style="margin-top: 10px;">抓取进程:
							<span><b>&nbsp;30%</b></span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-danger " role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12"> 	 <!--股市行情数据抓取-->
				<div class="card bg-red">
					<div class="card-block">
						<div class="dropdown fr">
							<button type="button" class="btn dropdown-toggle btn_bg" id="dropdownMenu1" data-toggle="dropdown">
								<i class="fa fa-bars"></i>
						        <span class="caret"></span>
						    </button>
							<ul class="dropdown-menu btn_cz" role="menu" aria-labelledby="dropdownMenu1">
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="#">
										<i class="fa fa-play"></i>&nbsp;&nbsp;开始
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" tabindex="-1" href="#">
										<i class="fa fa-stop"></i>&nbsp;&nbsp;停止
									</a>
								</li>
							</ul>
						</div>
						<h4>股市行情数据抓取</h4>
						<p>最近更新于</p>
						<p style="margin-top: 10px;">抓取进程:
							<span><b>&nbsp;60%</b></span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-info " role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="card-block clearfix" style="background: white;">
					<div class="col-sm-12 bg-purple card" style="height:117px">
						<h4 >指定人微博</h4>
						<small class="fl" style="width:50%">爬取指定人的所有微博以及微博下的所有评论</small>
						<div class="po-absolute mt5" style="right:20px;top:10px;">
							<label>请输入用户id：</label>
							<input type="text"  style="width:150px;color:black" v-model="userid">
							<div>
								<input v-model="wbtype" type="radio" id='wb' value="wb">
								<label for="wb">微博</label>
								<input v-model="wbtype" type="radio" id='wbpl' value="wbpl">
								<label for="wbpl">微博下的评论</label>
							</div>
							<div class="mt5">
								<button class="btn btn-info" @click="getallweibo">开始</button>
								<button class="btn btn-danger">停止</button>
							</div>
						</div>
					</div>
					<div class="col-sm-12 bg-yellow card" style="height:117px">
						<h4 >指定话题下的微博</h4>
						<small class="fl" style="width:50%">爬取指定话题</small>
						<div class="po-absolute mt5" style="right:20px;top:10px;">
							<label>请输入话题名称：</label>
							<input type="text"  style="width:150px;color:black" v-model="topicname">
							<div class="mt30" >
								<button class="btn btn-info" @click="gettopiic">开始</button>
								<button class="btn btn-danger">停止</button>
							</div>
						</div>
					</div>
					<div class="col-sm-12 bg-green card" style="height:117px;margin-bottom:0">
						<h4 >关键字搜索</h4>
						<small class="fl" style="width:50%">爬取指定关键字下的所有微博</small>
						<div class="po-absolute mt5" style="right:20px;top:10px;">
							<label>请输入关键字：</label>
							<input type="text"  style="width:150px;color:black" v-model="key">
							<div class="mt30" >
								<button class="btn btn-info" @click="gettopiic">开始</button>
								<button class="btn btn-danger">停止</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			


			<div class="col-md-6 col-sm-12">
				<div class="card-block" style="background: white;">
					<div class="row">
						<div class="col-sm-5">
							<h4 class="mb0">数据日志</h4>
							<div class="small text-muted" style="margin-top: 5px;"> {{new Date().getFullYear()}}/{{new Date().getMonth()+1}}/{{new Date().getDate()}}</div>
						</div>
					</div>
					<div class="chart-content" style="height: 300px;margin-top: 40px;">
						
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
	    name:'geData',
	    data(){
	        return{
	        	//进程百分比
	        	calendar_bar:'',
	        	lasttime_c:'',

				userid:2304133055675935,
				wbtype:'wb',   //抓取微博还是微博加评论
				topicname:'',//话题名称
				key:'',     //关键字
	        }
	    },
	    methods:{
			getallweibo(){   					//获取制定人微博数据
				var that = this;
				dorequest({wbtype:that.wbtype,userid:that.userid},'getdata/allweibo_Spider',function(res){
					console.log(res.data)
				})
				if(that.wbtype == 'wbpl'){
					dorequest({userid:3055675935},'getdata/weibocomment_Spider',function(res){
						console.log(res.data)
					})
				}
			},
			gettopiic(){

			},
	    	get_calendar_data () {               //获取日历数据
	    		var that = this;
	    		dorequest({time:new Date().getTime()},'getdata/getcalendardata',function(res){
	    			console.log(res.data)
	    			if(res.data.status == 'success'){
	    				that.process('calendar_bar')
	    				that.lasttime_c = formaDate(res.data.updatetime, 6);
//	    				message('成功');
	    			}else if(res.data.status == 'cf'){
	    				message({message:'已经是最新数据',type:'warning'})
	    			}
		    	},function(res){
		    		console.log(res)
		    	})
		    },
		    clear_calendar_data (id) {
		    	var that = this;
		    	$('#'+id).css('width', 0);
				that[id] =  0;
	    		dorequest({time:new Date().getTime()},'getdata/clearcalendardata',function(res){
	    			console.log(res.data)
	    			if(res.data.status == '已清空'){
						message('成功');
//						message({message:'失败',type:'error'});
	    			}
		    	},function(res){
		    		console.log(res)
		    	})
		    },
		    get_live_data () {                //获取
		   		var that = this;
		   		dorequest({website:'zjzx'},'getdata/getnews',function(res){
		   			
		   		})
		    },
		    get_history_news () {                 //热点新闻
		    	var that = this;
		   		dorequest({time:new Date().getTime()},'getdata/gethistorynews',function(res){
		   			console.log(res.data)
		   		})
		    },
		    process (id) {                 //进度条加载
		    	var that = this;
		    	var nextpercent = 0
		    	var a = setInterval(function(){
					$('#'+id).css('width', nextpercent+'%');
					that[id] =  nextpercent;
					nextpercent = nextpercent + 10
					if(nextpercent > 100){  
					    clearInterval(a);  
	    				message('成功');
					}  
				},100);
		    },
		}
	}
</script>
	
<style scoped>
	.centerlay{
		margin: 0 auto;
	}
	.btn_bg{
		background: transparent;
	}
	.btn_cz{
		min-width: 90px;
	}
	.btn_cz a{
		color: #828282;
	}
	.progress {
	    height: 10px;
	    margin: 20px 0;
	    overflow: hidden;
	    background-color: #f5f5f5;
	    border-radius: 4px;
	    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
	    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
	}
	.card-block{
		flex: 1 1 auto;
    	padding: 1.25rem;
	}
</style>
<template>
	<div class="contentMain" style="1152px; margin-bottom: 50px;">
		<div id="info_calendar" class="clearfix">
			<div id="calendar-head" class="clearfix">
				<ul class="event-chg">
					<li v-for="(item,index) in head_list" :key="index" @click="chg_event(index)" :class="[index==head_choose?'head-choose':'']">{{item}}</li>
				</ul>
			</div>
			<div class="po-relative" id='calendar'>
				<div class="header1">
					<div class="year">
						<div class="btn-group">
							<button type="button" class="btn btn-default dropdown-toggle button_year" data-toggle="dropdown">
									{{year}}
									<div id="xl" class="triangle-bottomright"></div>
								</button>
							<ul class="dropdown-menu" role="menu" style="min-width: 90px;">
								<li v-for="(item,index) in yearList" :key="index" :value='item' @click="year=item">
									<a href="#">{{item}}</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="md-left">
						<ul class="month clearfix">
							<li v-for="(item,index) in monthList" :key="index" class="wid fl" :value="index+1" @click="month=(index+1)" :class="[(index+1)==month?'month_selected':'',index==new Date().getMonth()?'persent_day':'']">{{item}}</li>
						</ul>
						<ul class="clearfix day1">
							<li v-for='(item,index) in dayList' :key="index" class="daybox" :style="{'width':1060/dayList-0.135+'px'}"  :class="[item==clickday?'month_selected':'',item==new Date().getDate()?'persent_day':'']">
								{{item}}
								<span v-show="new Date(year+'/'+month+'/'+item).getDay()%7!=0&&new Date(year+'/'+month+'/'+item).getDay()%7!=6"></span>
								<sup style="top:-1em" v-show="new Date(year+'/'+month+'/'+item).getDay()%7==0||new Date(year+'/'+month+'/'+item).getDay()%7==6">{{new Date(year+'/'+month+'/'+item).getDay()%7|weekend}}</sup>
							</li>
						</ul>
					</div>
				</div>
				<div class="sc-header clearfix">
					<div class="sc-actions">
						<span class="sc-return-today" @click="returnToday">回到今日</span>
					</div>
				</div>
				<div class="sc-body " :class="(head_choose!=1&&head_choose!=2)?'':''">
					<div class="sc-week clearfix">
						<div class="sc-week-item" v-for="item in weekList">星期{{item}}</div>
					</div>
					<div class="sc-body" v-show="head_choose==0">                    <!--停复牌-->
						<div class="table-body">
							<div class="sc-body-row clearfix" v-for="(weekNum,index) in dateList" v-show="dateList[index][0][0]<=month">
								<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)!=6&&(ind+1)!=7" class="day-item  table_ceil day_height_1" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
									<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>	
									<ul class="total lineh30 fsize_12 clearfix" v-if="tfp_data[item[3]]">
										<li class="contentlist clearfix" v-if='tfp_data[item[3]].stopeg' @click="modal_calendar(item[3],'stopList','停牌列表')">
											<span class="stock_name">{{tfp_data[item[3]].stopeg}}</span>
											<p class="report_content1 lh30 font13">等{{tfp_data[item[3]].stopnum}}家停牌</p>
										</li>
										<li class="contentlist clearfix" v-if='tfp_data[item[3]].recovereg' @click="modal_calendar(item[3],'recoverList','复牌列表')">
											<span class="stock_name">{{tfp_data[item[3]].recovereg}}</span>
											<p class="report_content1 lh30 font13">等{{tfp_data[item[3]].recovernum}}家复牌</p>
										</li>
									</ul>
								</div>
								<div style="width: 191.6px;" class="clearfix weekend table_ceil">
									<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)==6||(ind+1)==7" class="day-item day_height_2" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
										<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sc-body" v-show="head_choose==1">                    <!--首发上市-->
						<div class="table-body">
							<div class="sc-body-row clearfix" v-for="(weekNum,index) in dateList" v-show="dateList[index][0][0]<=month">
								<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)!=6&&(ind+1)!=7" class="day-item  table_ceil day_height_1" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
									<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>	
									<ul class="total lineh30 fsize_12 clearfix" v-if="xgss_data[item[3]]">
										<li class="contentlist clearfix" v-if='xgss_data[item[3]].starteg'  @click="modal_calendar(item[3],'startList','新股上市列表')">
											<span class="stock_name">{{xgss_data[item[3]].starteg}}</span>
											<p class="report_content1 lh30 font13">等{{xgss_data[item[3]].startnum}}家首发上市</p>
										</li>
										<li class="contentlist clearfix" v-if='xgss_data[item[3]].addNewStockeg' @click="modal_calendar(item[3],'addNewStockNetPublishList','增发新股上市列表')">
											<span class="stock_name">{{xgss_data[item[3]].addNewStockeg}}</span>
											<p class="report_content1 lh30 font13">等{{xgss_data[item[3]].addNewStocknum}}家增发新股</p>
										</li>
									</ul>
								</div>
								<div style="width: 191.6px;" class="clearfix weekend table_ceil">
									<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)==6||(ind+1)==7" class="day-item day_height_2" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
										<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sc-body" v-show="head_choose==2">                    <!--交易提示-->
						<div class="table-body">
							<div class="sc-body-row clearfix" v-for="(weekNum,index) in dateList" v-show="dateList[index][0][0]<=month">
								<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)!=6&&(ind+1)!=7" class="day-item  table_ceil day_height_1" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
									<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>	
									<ul class="total lineh30 fsize_12 clearfix" v-if="jyts_data[item[3]]">
										<li class="contentlist clearfix" v-if='jyts_data[item[3]].stockholdereg' v-show="jyts_data[item[3]].stockholdrenum" @click="modal_calendar(item[3],'stockholderList','股东资格登记日列表')">
											<span class="stock_name">{{jyts_data[item[3]].stockholdereg}}</span>
											<p class="report_content1 lh30 font13">等{{jyts_data[item[3]].stockholdrenum}}家首发上市</p>
										</li>
										<li class="contentlist clearfix" v-if='jyts_data[item[3]].shareRegiseg' v-show="jyts_data[item[3]].shareRegisnum" @click="modal_calendar(item[3],'shareRegistList','分红转增股权登记列表')">
											<span class="stock_name">{{jyts_data[item[3]].shareRegiseg}}</span>
											<p class="report_content1 lh30 font13">等{{jyts_data[item[3]].shareRegisnum}}家增发新股</p>
										</li>
										<li class="contentlist clearfix" v-if='jyts_data[item[3]].shareDividendeg' v-show="jyts_data[item[3]].shareDividendnum" @click="modal_calendar(item[3],'shareDividendList','除权除息列表')">
											<span class="stock_name">{{jyts_data[item[3]].shareDividendeg}}</span>
											<p class="report_content1 lh30 font13">等{{jyts_data[item[3]].shareDividendnum}}家除权除息</p>
										</li>
										<li class="contentlist clearfix" v-if='jyts_data[item[3]].stockAlarmeg' v-show="jyts_data[item[3]].stockAlarmnum" @click="modal_calendar(item[3],'stockAlarmList','退市风险警示列表')">
											<span class="stock_name">{{jyts_data[item[3]].stockAlarmeg}}</span>
											<p class="report_content1 lh30 font13">等{{jyts_data[item[3]].stockAlarmnum}}家退市风险警示</p>
										</li>
									</ul>
								</div>
								<div style="width: 191.6px;" class="clearfix weekend table_ceil">
									<div v-for="(item,ind) in dateList[index]" v-if="(ind+1)==6||(ind+1)==7" class="day-item day_height_2" :date="item[1]" :ii="ind+1" :class="[item[0]==month?'sc-month':'sc-other-month',(item[0]==(new Date().getMonth()+1)&&item[1]==new Date().getDate())?'selectday':'']">
										<div class="day nowmonth">{{item[0]}}月{{item[1]}}日</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--显示框-->
			</div>
			
			
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header modal-center">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
								&times;
							</button>
							<h4 class="modal-title" id="myModalLabel" >
								{{popdate}}  {{title}}
							</h4>
						</div>
						<div class="modal-body" style="max-height: 500px; overflow-y: scroll;">
							<table style="width:100%;">
								<tr class="clearfix popbox" style="font-size: 17px;">
									<td class=" center" style="width: 25%;">股票名称</td>
									<td class=" center" style="width: 25%;">股票代码</td>
									<td class=" center" style="width: 50%;">原因</td>
								</tr>
								<tr v-for="item in popdata" class="clearfix popbox boxbody"  @click="open(item.code)">
									<td class=" center" style="width: 25%; color:#5788E6;">{{item.name}}</td>
									<td class=" center" style="width: 25%;">{{item.code}}</td>
									<td class=" center" style="width: 50%;">{{item.reason}}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<!--弹框-->
			<!--<div v-if="calendar_fag">
				<v-calendar ref="cal" :year="year" :month="month"></v-calendar>
			</div>-->
	
		</div>
	</div>
</template>

<script>
//	const calendar_modal = resolve =>{require(['./calendar_modal.vue'],resolve)}
	export default {
		name: 'info_calendar',
		components:{
//			'v-calendar':calendar_modal,
		},
		data() {
			return {
				head_list: ['停复牌', '新股上市','交易提示','财经事件', '宏观事件', '财务报告'],
				head_choose: 0,
				//日历头部
				year: new Date().getFullYear(),
				month: new Date().getMonth() + 1,
				day: new Date().getDate(),
				pull_down_fag: 0,
				yearList: [2006,2007,2008,2009,2010,2011,2012,2013,2014, 2015, 2016, 2017, 2018,2019,2020],
				dayList: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(), //当月天数
				monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				weekList: ['一', '二', '三', '四', '五', '六|日'],
				dateList: [], //四个参数：月，日，星期,'xxxx-xx-xx'
				tfp_data: '', //停复牌
				xgss_data:'',   //新股上市
				macro_data: '', //宏观事件
				jyts_data: '',//交易提示
				cj_event_data: '',   //财经时间
				finance_report_data:'',//财务报告
				clickday: new Date().getDate(),

				arr_stock:[],
				stock_dic:{},
				calendar_fag:false,
				popdata:'',		//弹框内容
				popdate:'',  	//弹框日期
				title:'',  		//弹框标题
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				// 代码保证 this.$el 在 document 中
				this.get_dateList();
				this.chg_moudle();
			})
		},
		filters: {
			weekend: function(day) {
				if(day == 0) {
					return "日"
				} else {
					return '六'
				}
			},
		},
		watch: {
			year () {
				this.dayList = new Date(this.year, this.month, 0).getDate();
				this.get_dateList(); //日期布局
				this.chg_moudle(); //请求数据
			},
			month () {
				this.dayList = new Date(this.year, this.month, 0).getDate();
				this.get_dateList(); //日期布局
				this.chg_moudle(); //请求数据
			}
		},
		methods:{
			chg_event (headindex) {
				var that = this;
				that.head_choose = headindex;
				this.get_dateList();
				that.chg_moudle(); //请求数据
			},
			returnToday () {
				var that = this;
				that.year = new Date().getFullYear();
				that.month = new Date().getMonth() + 1;
				that.day = new Date().getDate();
				that.clickday = new Date().getDate();
				that.get_dateList();
				that.chg_moudle();
			},
			chg_moudle(){
				var that = this;
				that.arr_stock=[];
				var year_month = that.year + '-' + PrefixInteger(that.month,2); //当前年月
				if(that.head_choose == 0) {           //停复牌
					that.tfp_data = '';
					dorequest({type:'tfp',time:year_month},'calendar',function(res){
//						console.log(res.data.data)
						that.tfp_data = res.data.data
					},function(){
						
					})
				} else if(that.head_choose == 1) {     //新股上市
					that.xgss_data = '';
					dorequest({type:'xgss',time:year_month},'calendar',function(res){
//						console.log(res.data.data)
						that.xgss_data = res.data.data
					},function(){
					})
				}else if(that.head_choose == 2) {      //交易提示
					that.jyts_data = '';
					dorequest({type:'jyts',time:year_month},'calendar',function(res){
						console.log(res.data.data)
						that.jyts_data = res.data.data
					},function(){
					})
				}else if(that.head_choose == 3) {
					that.trade_tip_data = '';
				}else if(that.head_choose == 4) {
					that.cj_event_data = '';
				}
			},
			modal_calendar (date,type,title){
				var that = this;
				dorequest({type:type,time:date},'modalcalendar',function(res){
						console.log(res.data.data)
						that.popdata = res.data.data;
						that.title = title;
						that.popdate = date;
						if(type=='startList'||type == 'addNewStockNetPublishList'){
							$('.modal-dialog').css('width','700px')
						}else{
							$('.modal-dialog').removeAttr("style")
						}
						$('#myModal').modal('show')
					},function(){
					})
			},
			get_dateList () {                  //日期获取与布局
				var that = this;
				that.dateList = [];
				var firstDay = that.year + '/' + that.month + '/' + '01';
				var firstdayWeek = new Date(firstDay).getDay(); //第一天星期几
				if(firstdayWeek == 0) {
					firstdayWeek = 7
				}
				for(var i = 1; i < firstdayWeek; i++) { //添加上月数据
					if(that.month == 1) {
						var year = that.year - 1;
						var lastmonth = 12;
					} else {
						var year = that.year;
						var lastmonth = that.month - 1;
					}
					var weekday = new Date(new Date(firstDay).getTime() - ((firstdayWeek - i) * 86400000)).getDay()
					var day = new Date(new Date(firstDay).getTime() - ((firstdayWeek - i) * 86400000)).getDate()
					var item = year + '-' + PrefixInteger(lastmonth,2) + '-' + PrefixInteger(day,2)
					that.dateList.push([lastmonth, day, weekday,item])
				}
				for(var j = 1; j <= that.dayList; j++) { //添加本月数据
					if(that.dateList.length < 42) {
						var weekday = new Date(that.year + '/' + that.month + '/' + j + ',' + '08:00').getDay();
						var item = that.year + '-' + PrefixInteger(that.month,2) + '-' + PrefixInteger(j,2)
						that.dateList.push([that.month, j, weekday,item]);
					}
				}
				if(that.dateList.length <= 42) { //添加下月数据
					var lastmonthday = 42 - that.dateList.length;
					for(var m = 1; m <= lastmonthday; m++) {
						if(that.month == 12) {
							var nextmonth = 1;
							var year = that.year + 1;
						} else {
							var year = that.year;
							var nextmonth = that.month + 1;
						}
						var weekday = new Date(year + '/' + nextmonth + '/' + m + ',' + '08:00').getDay();
						var item = year + '-' + PrefixInteger(nextmonth,2) + '-' + PrefixInteger(m,2)
						that.dateList.push([nextmonth, m, weekday,item])
					}
				}
				that.split_array(that.dateList, 7)
			},
			split_array (arr, len) { //划分数组
				var that = this;
				var a_len = arr.length;
				var result = [];
				for(var i = 0; i < a_len; i += len) {
					result.push(arr.slice(i, i + len));
				}
				that.dateList = result
				console.log(that.dateList)
				return that.dateList;
			},
			ShowInfo (left, top) { //弹出框
				$("#blockdiv").addClass('show').removeClass('hidden')
				$("#blockdiv").css({
					"left": left + 'px',
					"top": top + 'px'
				});
			},
			HiddenInfo () { //隐藏框
				$("#blockdiv").addClass('hidden').removeClass('show')
			},
			showmore (data, fag) {
				if(data != null) {
					if((fag < 6 && data.length > 6) || (fag >= 6 && data.length > 2)) {
//						console.log(fag,data.length)
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			},
			open (id){
				window.open('/quotation?id='+id)
			}
		}
	}
</script>

<style scoped="scoped">
	ul {
		margin: 0;
		padding: 0;
	}
	
	select {
		border: solid 1px #000;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background: none;
		outline: none;
	}
	
	#calendar-head {
		width: 1150px;
		background: #5788e6;
		padding-left: 12px;
	}
	
	.event-chg {
		float: left;
		padding: 0px;
		height: 40px;
	}
	
	.event-chg li {
		float: left;
		margin-left: 15px;
		line-height: 20px;
		margin: 6px;
		padding: 4px 11px;
		color: white;
	}
	
	.head-choose {
		background: white;
		color: #5494f7!important;
		border-radius: 7px;
	}
	
	.event-chg li:hover {
		cursor: pointer;
		opacity: 0.8;
	}
	
	.header1 {
		height: 90px;
		background: #eef7fb;
		width: 100%;
	}
	
	.year {
		width: 90px;
		height: 90px;
		background: #eef7fb;
		border-right: 1px solid white;
		float: left;
		position: relative;
	}
	
	#selectedy {
		display: block;
		text-align: center;
		font-size: 16px;
		height: 90px;
		width: 90px;
		border: none;
		padding: 0 25%;
		background: #eef7fb;
		border-right: 1px solid white;
	}
	
	#selectedy option {
		height: 50px
	}
	
	.button_year,
	.button_year:hover,
	.button_year:visited,
	.button_year:focus {
		outline: none !important;
		border: none!important;
		height: 90px;
		width: 90px;
		background: aliceblue!important;
		border-right: 1px solid white!important;
		position: relative;
	}
	
	.triangle-bottomright {
		border-bottom: 20px solid #9aa7bb;
		border-left: 20px solid transparent;
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 3;
	}
	
	.dropdown-menu a:hover {
		background: #3d77c7!important;
		color: white!important;
	}
	
	.md-left {
		width: 1060px;
		float: left;
	}
	
	.wid {
		width: 88.33px;
		height: 46px;
		line-height: 40px;
		font-size: 15px;
		text-align: center;
	}
	
	.month>li:hover,
	.day1>li:hover {
		cursor: pointer;
		color: white;
		background: #3d77c7;
	}
	
	.daybox {
		float: left;
		text-align: center;
		line-height: 45px;
		font-size: 13px;
		position: relative;
	}
	
	.daybox>span {
		width: 4px;
		height: 4px;
		background: #3773d0;
		display: block;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		bottom: 6px;
	}
	
	.sc-actions {
		width: 28%;
		padding: 5px;
		height: 100%;
		box-sizing: border-box;
		float: right;
	}
	
	.sc-return-today {
		cursor: pointer;
		border: 1px solid #3773d0;
		color: #3773d0;
		border-radius: 5px;
		margin-top: 5px;
		display: block;
		background-color: #F5F5F9;
		width: 72px;
		font-size: 0.8em;
		margin: auto;
		float: right;
		margin-right: 20px;
		text-align: center;
		padding: 3px;
	}
	
	.sc-week {
		border: solid #e0e0e0;
		border-width: 1px 0;
		height: 5%;
		font-weight: 400;
		font-size: 20px;
		color: #4A4A4A;
	}
	
	.sc-week-item {
		width: 16.66%;
		height: 100%;
		padding: 1%;
		float: left;
		background-color: white;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 15px;
		text-align: center;
	}
	
	.day-item {
		width: 191.6px;
		background-color: #ffffff;
		box-sizing: border-box;
		color: rgba(105, 103, 103, 0.74);
		border: 1px solid #e0e0e0;
	    border-right: none;
	    border-top: none;
	}
	
	.day_height_1 {
		min-height: 160px;
	}
	
	.day_height_2 {
		min-height: 80px;
	}
	
	#calendar {
		width: 1152px;
		text-align: center;
		font-family: "Microsoft Yahei";
		color: #4A4A4A;
		box-shadow: 0px 0px 1px #bdbdbd;
		border-width: 1px 1px 0 1px;
		border-color: #E6E4E0;
		border-style: solid;
		float: left;
	}
	
	.fy a {
		width: 40px;
	}
	
	.month_selected {
		color: white;
		background: #3d77c7;
	}
	
	.table-body {
		display: table;
		width: 1152px;
		table-layout: fixed;
		word-break: break-all;
		word-wrap: break-word;
	}
	
	.sc-body-row {
		border-bottom: 1px solid #e0e0e0;
		display: table-row;
		table-layout: fixed;
	}
	.day {
		font-size: 12px;
		padding: 2px;
		width: 100%;
		text-align: left;
		background: #fffaf4;
	}
	.weekend{
		margin-left: 10px;
		
	}
	.contentlist {
		text-align: left;
		color: #5788E6;
		margin-left: 3px;
		font-size: 12px;
		text-align: left;
	}
	
	.more {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	#blockdiv {
		min-width: 200px;
		max-width: 330px;
		z-index: 1001;
		border-color: #5788E6;
		background-color: rgba(255, 255, 255, .9);
		padding: 5px;
	}
	
	.box_event li {
		display: block;
		margin: 3px 5px;
	}
	
	.day-item:hover {
		opacity: 0.9;
		box-shadow: #666 0px 0px 10px;
		z-index: 1000;
		cursor: default;
	}
	
	.day-item:hover .day {
		color: red;
	}
	
	.table_ceil {
		display: table-cell;
		word-wrap: break-word;
		word-break: break-all;
		border-bottom: 1px solid #e0e0e0;
		width: 192px;
	}
	
	.stock_name {
		margin: 6px 2px 0 0;
		background: #a1bcda;
		color: white;
		padding: 2px 0;
		border-radius: 3px;
		width: 59px;
		height: 20px;
		display: inline-block;
		line-height: 16px;
		float: left;
		text-align: center;
	}
	
	.borderline {
		border: 1px solid #E8E8E8;
	}
	
	.day-item:hover {
		opacity: 0.9;
		box-shadow: #666 0px 0px 10px;
		z-index: 1000;
	}
	
	.day-item:hover p {
		color: rgba(105, 103, 103, 0.74);
	}
	
	.contentlist p:hover {
		color: #5788E6;
	}
	
	.day1 {
		background: #eef7fb;
		border-top: 1px solid white;
	}
	
	.sy_1 {
		width: 186px !important;
		height: auto;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		line-height: 16px;
		padding-top: 8px;
		white-space: normal;
	}
	
	.persent_day {
		border: 1px dashed rgb(87, 136, 230);
	}
	
	.selectday {
		border: 2px solid #86a7ff!important;
	}
	
	.selectday2 {
		border: 1px dashed rgb(87, 136, 230);
		z-index: 1000;
	}
	
	.report_content1 {
		margin: 0;
		width: 120px;
		float: left;
		display: block;
	}
	.day-item:hover li{
		color: rgba(105, 103, 103, 0.74);
		cursor: pointer;
	}
	.day-item li:hover {
		color: #5788E6;
	}
	.weekend .sy_1{
		width:172px !important;
	}
	.scroll-xy{
		height: 1000px; 
		overflow-y: overlay;
		overflow-x: hidden;
	}
	.center{
		text-align: center;
	}
	
	
	
	/*弹框*/
	.modal-center{
		text-align: center;
	}
	.popbox{
		line-height: 35px;
		min-height: 35px;;
	}
	.popbox:nth-child(even){
		background: #f2f2f2;
	}
	.boxbody{
		color:#898989;
	}
	.boxbody:hover{
		/*background: #f2f2f2;*/
		cursor: pointer;
		color: #5788E6;
	}
</style>
<template>
	<div id="quotation">
		<div class="row">      <!-- 4个框-->
			<div class="col-md-3 col-sm-6 col-xs-12">    <!--股票名称-->
				<div class="board">
					<div class="panel panel-primary">
						<div class="fl number">
							<h3>{{stock_info.name}}</h3>
							<small>{{stock_info.code | js_zfill}}</small>
						</div>
						<div class="icon fr" style="background: dodgerblue;padding:19px 24px;">
							<i class="fa fa-3x blue fa-building" style="color: white"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">     <!--最新价格-->
				<div class="board">
					<div class="panel panel-primary">
						<div class="fl number">
							<h3 :style="(stock_info.nowPrice - stock_info.openPrice) | price_color">{{stock_info.nowPrice | v_toFixed}}</h3>
							<small>最新价格(元)</small>
						</div>
						<div class="icon fr" :style="{background:(stock_info.nowPrice - stock_info.openPrice) >0?'red':'#33CC00'}">
							<img v-show="(stock_info.nowPrice - stock_info.openPrice) >=0" src="../../../static/img/icon-1.png" />
							<img v-show="(stock_info.nowPrice - stock_info.openPrice) <0" src="../../../static/img/icon-2.png" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">     <!--成交量-->
				<div class="board">
					<div class="panel panel-primary">
						<div class="fl number">
							<h3></h3>
							<h3>{{stock_info.tradeNum/1000000 | v_toFixed}}</h3>
							<small>成交量(万手)</small>
						</div>
						<div class="icon fr" style="background:#FFCC33;padding:19px;" >
							<i class="fa fa-3x blue fa-signal" style="color: white"></i>

						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">     <!--涨跌幅-->
				<div class="board">
					<div class="panel panel-primary">
						<div class="fl number">
							<h3></h3>
							<h3 :style="stock_info.diff_rate | price_color">{{stock_info.diff_rate | v_toFixed}}%</h3>
							<small>涨跌幅</small>
						</div>
						<div class="icon fr" style="padding:19px 24px;" :style="{background:stock_info.diff_rate >0?'red':'#33CC00'}">
							<i v-show="stock_info.diff_rate < 0" class="fa fa-3x blue fa-arrow-down" style="color: white"></i>
							<i v-show="stock_info.diff_rate > 0" class="fa fa-3x blue fa-arrow-up" style="color: white"></i>
							<i v-show="stock_info.diff_rate == 0" class="fa fa-3x blue fa-minus" style="color: white"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">      <!--基本信息-->
			<div class="col-sm-12 col-xs-12 ">
				<div class="fl col-md-3 col-sm-6 col-xs-12" style="padding: 0;">
					<ul class="stockInfo ">
						<li><span>今开</span><span :style="(stock_info.openPrice - stock_info.closePrice) | price_color">{{stock_info.openPrice | v_toFixed}}</span></li>
						<li><span>昨收</span><span>{{stock_info.closePrice | v_toFixed}}</span></li>
						<li><span>最高</span><span style="color:red">{{stock_info.todayMax | v_toFixed}}</span></li>
						<li><span>最低</span><span style="color:#339900">{{stock_info.todayMin | v_toFixed}}</span></li>
					</ul>
				</div>
				 <div class="fl col-md-3 col-sm-6 col-xs-12" style="padding: 0;">
					<ul class="stockInfo ">
						<li><span>成交量</span><span>{{stock_info.tradeNum/1000000 | v_toFixed}}万手</span></li>
		                <li><span>换手率</span><span>{{stock_info.turnover | v_toFixed}}%</span></li>
		                <li><span>市盈率</span><span>{{stock_info.pe | v_toFixed}}</span></li>
		                <li><span>市净率</span><span>{{stock_info.pb | v_toFixed}}</span></li>
					</ul>
				</div>
				<div class="fl col-md-3 col-sm-6 col-xs-12" style="padding: 0;">
					<ul class="stockInfo ">
						<li><span>总市值</span><span>{{stock_info.all_value | v_toFixed}}亿</span></li>
						<li><span>流通市值</span><span>{{stock_info.circulation_value | v_toFixed}}亿</span></li>
						<li><span>总股本</span><span>{{parseInt(stock_info.totalcapital)}}万股</span></li>
						<li><span>流通股本</span><span>{{parseInt(stock_info.currcapital)}}万股</span></li>
					</ul>
				</div>
				<div class="fl col-md-3 col-sm-6 col-xs-12" style="padding: 0;">
					<ul class="stockInfo ">
						<li><span>振幅</span><span>{{stock_info.swing | v_toFixed}}%</span></li>
						<li><span>涨跌幅</span><span :style="stock_info.diff_rate | price_color">{{stock_info.diff_rate | v_toFixed}}%</span></li>
						<li><span>当前价</span><span :style="(stock_info.nowPrice - stock_info.openPrice) | price_color">{{stock_info.nowPrice | v_toFixed}}</span></li>
						<li v-show="stock_info.state==1"><span>经营状态</span><span>正常营业</span></li>
						<li v-show="stock_info.state != 1"><span>经营状态</span><span style="color: red;">停牌</span></li>
						<!--<li><span>网络评级</span><span>买入</span></li>-->
					</ul>
				</div>
			</div>
		</div>
		<div class="row" >     <!--图-->
			<div id='pic_1' class="fs_pic col-xs-12" :class="sf_fag?'col-sm-12':'col-sm-6'">    <!--分时图-->
				<i class="fa color_9 sf" :class="sf_fag?'fa-compress':'fa-expand'" @click="sf_pic()"></i>
				<div id="container" style="min-width:400px;min-height: 450px"></div>
			</div>
			<div id='pic_2' class="fs_pic col-xs-12" :class="sf_fag?'col-sm-12':'col-sm-6'">		<!--k线图-->
				<i class="fa color_9 sf" :class="sf_fag?'fa-compress':'fa-expand'" @click="sf_pic()"></i>
				<ul class="fr choose list-inline ">                                 
	                <li class="tab-item fr" @click="k_select(3)" :class="k_fag==3?'select_tab':''">月K</li>
	                <li class="tab-item fr" @click="k_select(2)" :class="k_fag==2?'select_tab':''">周K</li>
	                <li class="tab-item fr" @click="k_select(1)" :class="k_fag==1?'select_tab':''">日K</li>
	            </ul>
				<div id="container_k" style="min-width:450px;min-height: 450px"></div>
			</div>
		</div>
	</div>
</template>

<script>
//	Vue.filter('price_color', function (item) {    //颜色
//	    if(item > 0){
//	        return {color:'red'}
//	    }else if(item == 0){
//	        return {color:'rgb(153, 153, 153)'}
//	    }else{
//	        return {color:'green'}
//	    }
//	})
//	Vue.filter('v_toFixed', function (obj) {
//	    if(typeof obj != 'number'){
//	        obj = Number(obj)
//	    }
//	    return obj.toFixed(2)
//	})
	export default{
	    name:'sidebar',
	    data(){
	        return{
	        	sf_fag:0,    //图的缩放  0 代表收缩状态，1代表放大状态
	        	arrlist: [],
		        selectfag: 1,
		        stockid_input:'',
		        stockid:'000001',
		        year:2017,
		        month:12,
		        day:'',
		        zd_arr:['red'],
		        open:'',
		        k_fag:1,   //k线选择
		        beginDay:'20170601',    //k线开始日期
		        stock_info:[],          //股票信息
		        activity:'',
				today:''
	        }
	    },
	    mounted:function() {
	        var that = this;
	        that.$nextTick(function () {
				that.stockid = that.$route.query.id
	            that.year = new Date().getFullYear();
	            that.month = new Date().getMonth()+1
	            that.day = new Date().getDate();
	            that.get_fs();//获取分时图
	            that.get_k('day',that.beginDay);     //获取K线图
	            that.get_stockInfo()
	        });
	    },
	     watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': function(){            //监视路由，刷新当前页面
		    	var that =this;
		    	that.stockid = that.$route.query.id;
		    	that.year = new Date().getFullYear();
	            that.month = new Date().getMonth()+1
	            that.day = new Date().getDate();
	            that.get_fs();   					//获取分时图
	            that.get_k('day',that.beginDay);     //获取K线图
	            that.get_stockInfo()
		    }
		},
	    filters:{
	    	v_toFixed(obj){
	    		if(typeof obj != 'number'){
			        obj = Number(obj)
			    }
			    return obj.toFixed(2)
	    	},
	    	price_color(item){
	    		if(item > 0){
			        return {color:'red'}
			    }else if(item == 0){
			        return {color:'rgb(153, 153, 153)'}
			    }else{
			        return {color:'#339900'}
			    }
	    	},
	    	js_zfill(num){
				return(Array(6).join(0) + num).slice(-6);
	    	}
	    },
	    methods:{
	    	query () {                            //信息的查询
	            var that = this;
	            that.get_stockInfo(that.stockid);
	            that.getpic();						 //获取分时图
	            that.get_k('day',that.beginDay);     //获取K线图
	       },
	       
	        sf_pic () {                           //缩放按钮
	    		var that = this;
	    			that.sf_fag =!that.sf_fag;
	    			that.get_fs();	   			//重新绘图
	    			that.get_k();
	    	},
	    	
	        k_select (fag) {                      //K线选择
	            var that = this;
	            that.k_fag = fag;
	            let time;   //k线类型  月周日
	            switch(fag){
	                case 1:    //日k
	                    time = 'day';
	                    break;
	                case 2:    //周k
	                    that.beginDay ="20160101";
	                    time = 'week';
	                    break;
	                case 3:    //月k
	                    that.beginDay ="20160101"
	                    time = 'month';
	                    break;
	            }
	        	that.get_k(time,that.beginDay)
	        },
	        
	        get_stockInfo () {                    //获取基本信息
	            var that = this;
	            dorequest_api({ code: that.stockid, showapi_appid: 51699, showapi_sign: '423c642aaf344e5b876ed34167f60c91' }, 'http://route.showapi.com/131-44', function (result) {
	                // console.log(result.showapi_res_body.stockMarket.date)
					that.today = result.showapi_res_body.stockMarket.date.slice(5)
					that.weekday = '星期'+getDay(new Date(result.showapi_res_body.stockMarket.date).getDay())
	                that.stock_info = result.showapi_res_body.stockMarket;
	                that.stock_info['turnover'] = that.stock_info['turnover'].slice(0,that.stock_info['turnover'].length-1);  //换手率比较特殊 处理一下
	                for(let item in that.stock_info){
	                    if( !isNaN(Number(that.stock_info[item]))){
	                        that.stock_info[item] = Number(that.stock_info[item])
	                    }
	                }
	            })
	        },
	        
	        get_fs () {
	        	var that = this;
	        	dorequest({code:that.$route.query.id},'stock',function(res){
	        		if(res.data.status == '正常经营'){
	        			that.open = res.data.open;
		        		that.zd_arr = res.data.zd_arr;
		        		that.activity = res.data.activity;
		        		that.getpic();        //开始绘图
	        		}else{
	        			console.log('停牌')
	        		}
	        	},function(res){
	        	})
	        },
	       
	        getpic () {      //分时图绘图
	        	$('#container').empty();
	        	var that =this;
	        	let activity = that.activity
        		$('#container').bind('mousemove touchmove touchstart', function (e) {
	                var chart,point,i,event;
	                for (i = 0; i < Highcharts.charts.length; i++) {
	                    chart = Highcharts.charts[i];
	                    if(chart != undefined){
	                        event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
	                        point = chart.series[0].searchPoint(event, true); // Get the hovered point
	                        if (point) {
	                            point.highlight(e);
	                        }
	                    }
	                }
	            });
				 // 重写内部的方法， 这里是将提示框即十字准星的隐藏函数关闭
	            Highcharts.Pointer.prototype.reset = function () {
	                return undefined;
	            };
	             // 高亮当前的数据点，并设置鼠标滑动状态及绘制十字准星线
	            Highcharts.Point.prototype.highlight = function (event) {
	                this.onMouseOver(); // 显示鼠标激活标识
	                this.series.chart.xAxis[0].drawCrosshair(event, this); // 显示十字准星线
	            };
	            $.each(activity.datasets, function (i, dataset) {    // 添加 X 数据
                    if(dataset.name == "分时"){
                        dataset.data = Highcharts.map(dataset.data, function (val, j) {     //添加x轴数据
                            return [activity.xData[j], val,activity];    //时间、价格、成交量
                        });
                        dataset.data_jj = Highcharts.map(dataset.data_jj, function (val, j) {
                            return [activity.xData[j], val];
                        });
//	                    console.log(activity.datasets)
                        $('<div class="chart">')
                            .appendTo('#container')
                            .highcharts({
                                stockchart: {
                                    marginLeft: 40, // Keep all charts left aligned
                                    spacingTop: 20,
                                    spacingBottom: 20,
                                    zoomType: 'x'
                                },
                                title: {
                                    text: '分时图',
                                    style: {
						                color: '#5788E6',
						                margin:10,
						                fontSize:17,
						            },
						            y:25
                                },
                                credits: {
                                    enabled: false
                                },
                                legend: {
                                    enabled: false
                                },
                                plotOptions: {
                                    series: {
                                        lineWidth: 1,
                                        states: {
                                            hover: {
                                                enabled: true,
                                                lineWidth: 1
                                            }
                                        }
                                    }
                                },
                                xAxis: {
                                    type: 'datetime',
                                    min:new Date(that.year,that.month-1,that.day,9,30).getTime(),
                                    max:new Date(that.year,that.month-1,that.day,15,0).getTime(),
                                    breaks: [{         //中断
                                        from: new Date(that.year,that.month-1,that.day,11,30).getTime(),
                                        to:new Date(that.year,that.month-1,that.day,13,0).getTime(),
                                        breakSize: 0,
                                    }],
                                    crosshair: true,
                                    tickLength: 0,
                                    labels: {
                                        enabled: false
                                    }
                                },
                                yAxis: [{
                                        title: {
                                            text: "价格（元）",
                                        },
                                        lineWidth: 1,
                                        tickPixelInterval:40,
                                        labels : {
                                            formatter : function () {
                                                var strVal = this.value + '';
                                                if (strVal.indexOf('.') == -1) {
                                                    return strVal + '.00';
                                                } else {
                                                    var arr = strVal.split('.');
                                                    if (arr[1].length == 2) {
                                                        return strVal;
                                                    } else if(arr[1].length == 1){
                                                        return strVal + '0';
                                                    } else{
                                                        strVal = arr[0]+'.'+ arr[1].slice(0,2)
                                                        return strVal;
//	                                                        console.log(strVal)
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {                                //对立的y轴
                                        title: {
                                            text: null
                                        },
                                        lineWidth: 1,
                                        tickPixelInterval:30,
                                        linkedTo: 0,
                                        opposite: true,
                                        labels:{            //不显示刻度
					                       enabled:false  
					                     }  
                                    }
                                ],
                                tooltip: {
                                    formatter: function (){
                                        console.log(this)
                                        return   '<span>'+that.today+' '+formaDate(this.x)+' '+that.weekday+'</span><br/>'
                                                +'<span>价格：'+this.points[0].y+'元</span><br/>'
                                                +'<span>均价：'+this.points[1].y+'元</span><br/>'
                                                +'<span>涨跌幅：'+((this.points[0].y-that.open)/that.open*100).toFixed(2)+'%</span><br/>'
                                                // +'<span>成交量：'+that.volume+'万股</span><br>'
                                    },
                                    xDateFormat: '%Y-%m-%d %H:%m',
                                    backgroundColor:'rgba(247,247,247,0.85)',
                                    shared: true,
                                    shadow: false,
                                    style: {
                                        fontSize: '14px',
                                        padding: 10,
                                        'line-height':'20px'
                                    },
                                },
                                series: [{
                                    data: dataset.data,
                                    name: '价格',
                                    type: dataset.type,
                                    color: Highcharts.getOptions().colors[i],
                                    fillOpacity: 0.3,
                                    tooltip: {
                                        valueSuffix: ' ' + dataset.unit
                                    },
                                },{
                                        data: dataset.data_jj,
                                        name:'均价',
                                        type: dataset.type,
                                        color: '#6e6e6e',
                                        fillOpacity: 0.3,
                                 }
                                ]
                            });
                    }else{
                        dataset.data = Highcharts.map(dataset.data, function (val, j) {    //添加x轴数据
                            return [activity.xData[j], val];
                        });

                        $('<div class="chart1">')
                            .appendTo('#container')
                            .highcharts({
                                stockchart: {
                                    marginLeft: 40, // Keep all charts left aligned
                                    spacingTop: 20,
                                    spacingBottom: 20,
                                    zoomType: 'x'
                                },
                                title: {
                                    text:null,
                                },
                                credits: {
                                    enabled: false
                                },
                                legend: {
                                    enabled: false
                                },
                                plotOptions: {
                                    series: {
                                        colors:that.zd_arr,   //柱状图颜色的设置
                                        colorByPoint: true,
                                        lineWidth: 1,
                                        states: {
                                            hover: {
                                                enabled: true,
                                                lineWidth: 1
                                            }
                                        },
                                        pointPadding:0,

                                    }
                                },
                                xAxis: {
                                    type: 'datetime',
                                    tickPixelInterval: 70,   //刻度之间的距离
                                    min:new Date(that.year,that.month-1,that.day,9,30).getTime(),
                                    max:new Date(that.year,that.month-1,that.day,15,0).getTime(),
                                    breaks: [{         //中断
                                        from: new Date(that.year,that.month-1,that.day,11,30).getTime(),
                                        to:new Date(that.year,that.month-1,that.day,13,0).getTime(),
                                        breakSize: 0,
                                    }],
                                    crosshair: true,
                                },
                                yAxis: [{
                                    title: {
                                        text: "成交量（万股）",
                                        align: 'high',
                                    },
                                    lineWidth: 1,
                                    tickPixelInterval:10,
                                    labels : {
                                        formatter : function () {
                                            var strVal = this.value + '';
                                            if (strVal.indexOf('.') == -1) {
                                                return strVal + '.0';
                                            } else {
                                                var arr = strVal.split('.');
                                                if (arr[1].length == 1) {
                                                    return strVal;
                                                } else {

                                                }
                                            }
                                        }
                                    }
                                }, {
                                    title: {
                                        text: null
                                    },
                                    lineWidth: 1,
                                    tickPixelInterval:10,
                                    linkedTo: 0,
                                    opposite: true,
                                    labels:{  
					                       enabled:false  
					                     } 
                                }],
                                tooltip: {
                                    xDateFormat: '%Y-%m-%d',
                                    shared: true,
                                    formatter: function (){
                                        return '<span>成交量：'+Math.round(this.points[0].y*10000)+'股</span><br>'
                                    },
                                },
                                series: [{
                                    data: dataset.data,
                                    name: dataset.name,
                                    type: dataset.type,
                                    fillOpacity: 0.3,
                                    tooltip: {
                                        valueSuffix: ' '   + dataset.unit
                                    },
                                }]
                            });
	                    }
	                });
	            
	        },
	
	        get_k (t,b) {                         //获取K线图
	            var that = this;
//	            show_loading('pic_2')
	            dorequest_api({ code: that.stockid, time: t,beginDay:b, showapi_appid: 51699, showapi_sign: '423c642aaf344e5b876ed34167f60c91' }, 'http://route.showapi.com/131-50', function (result) {
//					hide_loading('pic_2')
	                var name =result.showapi_res_body.name;
	                var code = result.showapi_res_body.code;
	                var data_k = result.showapi_res_body.dataList;
	                var ohlc = [];
	                var volume = [];
	                var groupingUnits = [[
	                    'week',                         // unit name
	                    [1]                             // allowed multiples
	                ], [
	                    'month',
	                    [1, 2, 3, 4, 6]
	                ]];
	                let ohlc_color = []
	                for ( let i = data_k.length-1; i >= 0; i--){      //因为传来的数组是倒叙的，所以要反着输出
	                    var year = Number(data_k[i].time.slice(0,4));
	                    var month = Number(data_k[i].time.slice(4,6))-1;
	                    var day = Number(data_k[i].time.slice(6));
	                    var time = new Date(year,month,day,8,0).getTime()
	                    if(Number(data_k[i].close) > Number(data_k[i].open)){
	                        ohlc_color.push('red')
	                    }else{
	                        ohlc_color.push('green')
	                    }
	
	                    ohlc.push([
	                        time, // the date
	                        Number(data_k[i].open), // open
	                        Number(data_k[i].max), // high
	                        Number(data_k[i].min), // low
	                        Number(data_k[i].close) // close
	                    ]);
	                    volume.push([
	                        time, // the date
	                        Number(data_k[i].volumn) // the volume
	                    ]);
	                }
//	                console.log(ohlc)
	                Highcharts.setOptions({
	                    lang:{
	                        rangeSelectorFrom:'开始时间:',
	                        rangeSelectorTo:'结束时间:',
	                    },
	                });
	                $('#container_k').highcharts('StockChart', {
	                    navigator: {
	                        // adaptToUpdatedData: false,
	                        series: {
	                            data: ohlc
	                        },
	                        xAxis: {
	                            labels: {
	                                format: '{value:%Y-%m-%d}',
	                            }
	                        }
	                    },
	                    rangeSelector: {
	                            buttons: [{
	                                type: 'month',
	                                count: 1,
	                                text: '一月'
	                            },  {
	                                type: 'month',
	                                count: 3,
	                                text: '三月'
	                            }, {
	                                type: 'month',
	                                count: 6,
	                                text: '半年'
	                            }, {
	                                type: 'ytd',
	                                count: 1,
	                                text: '一年'
	                            }, {
	                                type: 'all',
	                                text: '所有'
	                            }],
	                        selected: 1,
	                        inputDateFormat: '%Y-%m-%d'
	                    },
	                    credits:{
	                        enabled:false,
	                    },
	                    title: {
                            text: 'K线图',
                            style: {
				                color: '#5788E6',
				                margin:10,
				                fontSize:17,
				            },
				            y:25
                        },
	                    xAxis: {
	                        dateTimeLabelFormats: {
	                            millisecond: '%H:%M:%S.%L',
	                            second: '%H:%M:%S',
	                            minute: '%H:%M',
	                            hour: '%H:%M',
	                            day: '%m-%d',
	                            week: '%m-%d',
	                            month: '%y-%m',
	                            year: '%Y'
	                        }
	                    },
	                    tooltip: {
	                        xDateFormat:'%Y-%m-%d',
	                        borderColor: '#5788E6',
	
	                        split: false,
	                        shared: true,
	                    },
	                    yAxis: [{
	                        tickPixelInterval:30,
	                        labels: {
	                            align: 'right',
	                            x: -3
	                        },
	                        title: {
	                            text: '股价'
	                        },
	                        height: '65%',
	                        resize: {
	                            enabled: true
	                        },
	                        lineWidth: 1
	                    }, {
	                        tickPixelInterval:40,
	                        labels: {
	                            align: 'right',
	                            x: -3
	                        },
	                        title: {
	                            text: '成交量'
	                        },
	                        top: '70%',
	                        height: '30%',
	                        offset: 0,
	                        lineWidth: 2
	                    }],
	                    series: [{
	                        type: 'candlestick',
	                        name: name,
	                        color: 'green',
	                        lineColor: 'green',
	                        upColor: 'red',
	                        upLineColor: 'red',
	                        tooltip: {
	                            xDateFormat:'%Y-%m-%d',
	                            valueSuffix: ' '   + '元'
	                        },
	                        navigatorOptions: {
	                            color: Highcharts.getOptions().colors[0]
	                        },
	                        data: ohlc,
	                        // dataGrouping: {
	                        //     units: groupingUnits
	                        // },
	                    },{
	                        type: 'column',
	                        name:'成交量',
	                        data: volume,
	                        yAxis: 1,
	                        colors:ohlc_color,   //柱状图颜色的设置
	                        colorByPoint: true,
	                        tooltip: {
	                            xDateFormat:'%Y-%m-%d',
	                            valueSuffix: ' '   + '手'
	                        },
	                    }]
	                });
	            })
	        },
	    }
	}
</script>

<style slot-scope="props">
.chart{
    height: 300px;
}
.chart1{
     height: 150px;
 }

.choose{
    width: 50%;
    position: absolute;
    z-index: 2;
    right: 23px;
    top: 22px;
}
.choose .tab-item {
    padding-left: 20px;
    background: url(../../../static/img/radio_unselect.png)no-repeat left center;
    background-size: 16px;
    padding-right: 8%;
    cursor: pointer;
    font-size: 1em;
    line-height: 16px;
}
.choose>.select_tab {
    border: 0;
    background: url(../../../static/img/radio_select.png)no-repeat left center ;
    background-size: 16px;
}
.select_tab{
    color: #587ee1!important;
}
.stockInfo{
	padding:4% 10%;
    line-height: 40px;
    font-size: 16px;
    border: none;
    background: #fff;
}
.stockInfo li span:nth-child(1){
    display: inline-block;
    width: 30%;

}
.stockInfo li span:nth-child(2){
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
}
.stock-head{
    border-bottom: 1px solid rgb(232, 232, 232);
    margin: 0px auto;
}
.stock-head div{
    line-height: 50px;
}

.four-pad{
	padding: 0 15px;
}
#container,#container_k{
	background: white;
}
.board{
	/*padding: 0 5%;*/
}
.board .panel {
    padding: 7% 6%;
    border: none !important;
    background: #fff;
}
.panel-primary {
    display: inline-block;
    margin-bottom: 30px;
    width: 100%;
}
.number small{
	font-size: 16px;
    color: #AAB5BC;
    font-weight: 600;
    text-transform: uppercase;
    margin: 8px 5px;
    display: inline-block;
    margin: 10px 0;
}
.number h3 {
    font-size: 2em;
    color: #676767;
    margin: 2px 0;
}
.icon{
	width: 80px;
	height: 80px;
	border-radius: 5px;
}
.icon img{
	width: 100%;
}
.sf{
	position: absolute;
    right: 21px;
    top: 5px;
    z-index: 2;
    cursor: pointer;
}
.fs_pic{
	margin-top: 25px;
}
</style>
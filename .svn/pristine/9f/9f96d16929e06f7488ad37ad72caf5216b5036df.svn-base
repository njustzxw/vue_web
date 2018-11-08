<template>
  <div id="app" style="position: relative;">
      <v-header></v-header>
      <v-sidebar></v-sidebar>
      <div class="content" style="overflow-y: scroll;">
      	<div class="content-wrapper">
  				<router-view name="quotation"></router-view>    <!--股市行情-->
  				<router-view name="datacapture"></router-view>    <!--数据抓取-->
  				<router-view name="calendar"></router-view>    <!--投资日历-->
  				<router-view name="news"></router-view>    <!--实时新闻-->
      	</div>
      </div>
      <v-login></v-login>
  </div>
</template>

<script>
  import header from './components/header/header';
  import sidebar from './components/sidebar/sidebar';
  const login = resolve => require(['./components/login/login.vue'],resolve)
  export default {
    name: 'app',
    data(){
      return{
        
      }
    },
     mounted(){
	    	var that = this;
	    	that.$nextTick(function(){
//	    		console.log($(document).height(),$('.top-navbar').height())
//	    		$('.app').css('height',($(document).height()) + 'px')
	    		$('.content').css('height',(950 - $('.top-navbar').height()) + 'px')
//	    		console.log($('.content'))
	    	})
	    },
    components:{
      'v-header':header,
      'v-sidebar':sidebar,
      'v-login':login,
    },
    methods:{

    }

  }
</script>

<style>
	.content {
    margin-left: 200px;
    padding: 25px;
    background: #EDEDED;
	}
	#content .content-wrapper {
    height: auto;
    float: left;
    width: 100%;
    position: relative;
	}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const quotation = resolve => require(['@/components/quotation/quotation.vue'],resolve)           //股市行情
const datacapture = resolve => require(['@/components/datacapture/datacapture.vue'],resolve)		 //数据抓取
const calendar = (resolve) => require(['@/components/opportunity/calendar.vue'],resolve)
const news = (resolve) => require(['@/components/infomation/news.vue'],resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },{
    	path: '/quotation',
    	name:'quotation',
    	components:{
    		quotation:quotation,
    	}
    },{
    	path: '/datacapture',
    	name:'datacapture',
    	components:{
    		datacapture:datacapture,
    	}
    },
    {
    	path: '/calendar',
    	name:'calendar',
    	components:{
    		calendar:calendar,
    	}
    },
    {
    	path: '/news',
    	name:'news',
    	components:{
    		news:news,
    	}
    },
  ]
})

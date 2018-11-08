Vue.filter('price_color', function (item) {    //颜色
	    if(item > 0){
	        return {color:'red'}
	    }else if(item == 0){
	        return {color:'rgb(153, 153, 153)'}
	    }else{
	        return {color:'green'}
	    }
	})
	
Vue.filter('v_toFixed', function (obj) {
    if(typeof obj != 'number'){
        obj = Number(obj)
    }
    return obj.toFixed(2)
})
// Vue.filter("js_zfill", js_zfill);
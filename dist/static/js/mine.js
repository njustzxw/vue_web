// var qs = require('qs');    
var host = `http://localhost:3000/`;

function dorequest(data, url, successcaalback, failcallback) { //get请求
    axios.get(host + url, {
            params: data
        })
        .then(function(result) {
            successcaalback(result)
        })
        .catch(function(err) {
            failcallback(err)
        });
}

function doPost(data, url, successcaalback, failcallback) { //post请求
    axios.post(host + url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then(function(result) {
            successcaalback(result)
        })
        .catch(function(err) {
            failcallback(err)
        });
}

//api请求
function dorequest_api(data, url, successcaalback, failcallback) { //get请求(api)
    $.ajax({
        data: data,
        dataType: 'json',
        url: url,
        type: 'GET',
        success: function(result) {
            successcaalback(result)
        },
        error: function(result) {
            failcallback(result)
        }
    })
}

const getDay = (day) => { //获取星期
    switch (day) {
        case 1:
            return "一";
            break;
        case 2:
            return "二";
            break;
        case 3:
            return "三";
            break;
        case 4:
            return "四";
            break;
        case 5:
            return "五";
            break;
        case 6:
            return "六";
            break;
        case 0:
            return "日";
            break;
    }
}


//session cookie存储
function cache_get_item(name) {
    return localStorage.getItem(name);
}

function cache_set_item(name, value, inpage) {
    localStorage.setItem(name, value);
}

function cache_remove_item(name, value, inpage) {
    return localStorage.removeItem(name);
}

function session_set_item(name, value, inpage) {
    sessionStorage.setItem(name, value);
}

function session_get_item(name, value, inpage) {
    return sessionStorage.getItem(name);
}

function session_remove_item(name, value, inpage) {
    return sessionStorage.removeItem(name);
}

const PrefixInteger = (num, n) => { //补0，参数num数值，n代表要保留的位数
    return (Array(n).join(0) + num).slice(-n);
}

const formaDate = (time, num) => { //格式化时间函数
    let year = new Date(time).getFullYear();
    let month = new Date(time).getMonth() + 1;
    let day = new Date(time).getDate();
    let hour = new Date(time).getHours();
    let minute = new Date(time).getMinutes();
    let second = new Date(time).getSeconds();
    let weekday = getDay(new Date(time).getDay());
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (num == 3) {
        return year + '-' + month + '-' + day;
    } else if (num == 6) {
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    } else {
        return hour + ':' + minute
    }
}

const show_loading = (id) => { //显示加载蒙版效果 
    $('#' + id).append(`<div class="loader">
        <div class="loader-inner ball-spin-fade-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>`)
    let W = $('#' + id).width();
    let H = $('#' + id).height();
    $($('#' + id).find('.loader')).css('width', W + 'px')
    $($('#' + id).find('.loader')).css('height', H + 'px')
}
const hide_loading = (id) => { //消除加载效果
    $($('#' + id).find('.loader')).remove();
}


const message = (options) => {
    var defaults = {
        message: ' 操作成功',
        time: '2000',
        type: 'success',
        showClose: false,
        autoClose: true,
        onClose: function() {}
    };

    if (typeof options === 'string') {
        defaults.message = options;
    }
    if (typeof options === 'object') {
        defaults = $.extend({}, defaults, options);
    }
    //message模版
    var templateClose = defaults.showClose ? '<a class="c-message--close">×</a>' : '';
    var template = '<div class="c-message messageFadeInDown">' +
        '<i class=" c-message--icon c-message--' + defaults.type + '"></i>' +
        templateClose +
        '<div class="c-message--tip">' + defaults.message + '</div>' +
        '</div>';
    var _this = this;
    var $body = $('body');
    var $message = $(template);
    var timer;
    var closeFn, removeFn;
    //关闭
    closeFn = function() {
        $message.addClass('messageFadeOutUp');
        $message.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            removeFn();
        })
    };
    //移除
    removeFn = function() {
        $message.remove();
        defaults.onClose(defaults);
        clearTimeout(timer);
    };
    //移除所有
    $('.c-message').remove();
    $body.append($message);
    //居中
    $message.css({
            'margin-left': '-' + $message.width() / 2 + 'px'
        })
        //去除动画类
    $message.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $message.removeClass('messageFadeInDown');
    });
    //点击关闭
    $body.on('click', '.c-message--close', function(e) {
        closeFn();
    });
    //自动关闭
    if (defaults.autoClose) {
        timer = setTimeout(function() {
            closeFn();
        }, defaults.time)
    }
}
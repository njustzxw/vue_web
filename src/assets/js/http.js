var qs = require('qs');
var host = 'http://localhost:3000/';
export function dorequest(data, url, successcaalback, failcallback) {
    axios.get(host + url, { params: data })
        .then(function(result) {
            successcaalback(result)
        })
        .catch(function(err) {
            failcallback(err)
        });
}
export function doPost(data, url, successcaalback, failcallback) {
    axios.post(host + url, qs.stringify(data), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
        .then(function(result) {
            successcaalback(result)
        })
        .catch(function(err) {
            failcallback(err)
        });
}
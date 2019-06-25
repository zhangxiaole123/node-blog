function add0(m) { return m < 10 ? '0' + m : m }
function format(timespan) {
    //timespan是整数，否则要parseInt转换
    if(!timespan)return '--'
    var time = new Date(timespan);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}
var CommonJs = {
    format:format
}
module.exports = CommonJs
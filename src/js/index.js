/**
 * Created by LiFei on 2018/1/26.
 */

$(function () {
   $('.selectpicker').selectpicker();
    laydate.render({
        elem: '#beginDate',
        value: '2017-01-01',
        theme: '#0591a5'
    });
    laydate.render({
        elem: '#endDate',
        value: '2017-12-31',
        theme: '#0591a5'
    });


    var country = getCountry(),
        option = '';
    for(var i in country){
        option += '<option value="' + country[i] + '">' + country[i] + '</option>';
    }
    $('#type_detail').append(option).selectpicker('refresh');
});

function getCountry() {
    return ['美国', '加拿大', '中国', '韩国', '日本', '印度', '英国', '德国', '法国'];
}

function getCarType() {
    return ['紧凑型', '小型车', '中级车', '高端车', '豪华车'];
}
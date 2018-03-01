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


    var genderSelfOpt = {
        title: {
            text: '本品',
            subtext: '(广汽本田购车用户男女比例)',
            x: 'center',
            y: '38%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 30,
                color: '#13cff0'
            },
            subtextStyle: {
                color: '#13cff0'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                type:'pie',
                radius : ['70%', '80%'],
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:40, name:'女',
                        itemStyle: {
                            normal:{
                                color: '#ff4873'
                            }
                        }
                    },
                    {
                        value: 60, name:'男',
                        itemStyle: {
                            normal:{
                                color: '#00c2cd'
                            }
                        }
                    }
                ]
            }
        ]
    };
    
    var genderSelf = echarts.init(document.getElementById('chart_gender_self'));
    genderSelf.setOption(genderSelfOpt);

    var genderCompeteOpt =  {
        title: {
            text: '竞品',
            subtext: '(日产天籁购车用户比例)',
            x: 'center',
            y: '38%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 30,
                color: '#13cff0'
            },
            subtextStyle: {
                color: '#13cff0'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series : [
            {
                type:'pie',
                radius : ['70%', '80%'],
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:40, name:'女',
                        itemStyle: {
                            normal:{
                                color: '#fce648'
                            }
                        }
                    },
                    {
                        value: 60, name:'男',
                        itemStyle: {
                            normal:{
                                color: '#00b7cd'
                            }
                        }
                    }
                ]
            }
        ]
    };

    var genderCompete = echarts.init(document.getElementById('chart_gender_compete'));
    genderCompete.setOption(genderCompeteOpt);

    var genderDapanOpt =  {
        title: {
            text: '大盘',
            subtext: '(全部购车用户男女比例)',
            x: 'center',
            y: '38%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 30,
                color: '#13cff0'
            },
            subtextStyle: {
                color: '#13cff0'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series : [
            {
                type:'pie',
                radius : ['70%', '80%'],
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:40, name:'女',
                        itemStyle: {
                            normal:{
                                color: '#2cffc1'
                            }
                        }
                    },
                    {
                        value: 60, name:'男',
                        itemStyle: {
                            normal:{
                                color: '#00b7cd'
                            }
                        }
                    }
                ]
            }
        ]
    };
    var genderDapan = echarts.init(document.getElementById('chart_gender_dapan'));
    genderDapan.setOption(genderDapanOpt);

    genderDapanOpt.series[0].radius = ['43%', '50%'];
    genderDapanOpt.title.subtext = '全部购车用户年龄比例';
    var ageDapan = echarts.init(document.getElementById('chart_age_dapan'));
    ageDapan.setOption(genderDapanOpt);

    var incomeDapan = echarts.init(document.getElementById('chart_income_dapan'));
    incomeDapan.setOption(genderDapanOpt);

    initAgePercent();
    initChinaMap('self');
    initWorkMap();
    initEvents();
    initSCroll();
});

function initEvents() {
    $('#china_type_box a').click(function () {
        var $this = $(this);
        $this.removeClass('disabled').siblings().addClass('disabled');
        if($this.hasClass('self')){
            initChinaMap('self')
        }else if($this.hasClass('compete')){
            initChinaMap('compete');
        }else {
            initChinaMap('dapan');
        }
    });

    var _popover = "<div class='car-popover operate-box small'> " +
        "<ul class='popover-ul'>" +
        "<li><i class='icon icon-red'></i>小于10万: 8%</li>"+
        "<li><i class='icon icon-green'></i>10-15万: 20%</li>"+
        "<li><i class='icon icon-blue'></i>15-20万: 43%</li>"+
        "<li><i class='icon icon-orange'></i>20-25万: 13%</li>"+
        "<li><i class='icon icon-yellow'></i>25-30万: 23%</li>"+
        "</ul>"+
        "</div>";

    $('.dot').on({
        'mouseenter': function () {
            var _this = $(this);
            _this.popover({
                placement: 'top',
                html: true,
                content: _popover
            }).popover('show');
        },
        'mouseleave': function () {
            $(this).popover('hide');
        }
    });
}

function getCountry() {
    return ['美国', '加拿大', '中国', '韩国', '日本', '印度', '英国', '德国', '法国'];
}

function getCarType() {
    return ['紧凑型', '小型车', '中级车', '高端车', '豪华车'];
}

function initAgePercent() {
   var option = {
           tooltip : {
               trigger: 'axis',
               axisPointer : {
                   type : 'shadow'
               },
               padding: [5, 10]
           },
            grid: {
               left: '15%'
            },
           xAxis:  {
               type: 'value',
               axisLabel:{
                   color: 'rgba(0,255,255,.4)'
               },
               axisLine:{
                   lineStyle: {
                       color: 'rgba(0,255,255,.4)'
                   }
               },
               splitLine: {
                   lineStyle: {
                       color: 'rgba(0,255,255,.4)'
                   }
               }
           },
           yAxis: {
               type: 'category',
               data: ['本田雅阁(本品)','日产天籁(竞品)'],
               axisLabel:{
                   color: '#00ffff'
               },
               axisLine:{
                   lineStyle: {
                       color: 'rgba(0,255,255,.4)'
                   }
               }
           },
           series: [
               {
                   name: '20岁以下',
                   type: 'bar',
                   stack: '总量',
                   barWidth: 30,
                   label: {
                       normal: {
                           show: true,
                           position: 'insideRight'
                       }
                   },
                   data: [120, 102],
                   itemStyle:{
                       normal: {
                           color: '#dd6b66'
                       }
                   }
               },
               {
                   name: '20-29岁',
                   type: 'bar',
                   stack: '总量',
                   barWidth: 30,
                   label: {
                       normal: {
                           show: true,
                           position: 'insideRight'
                       }
                   },
                   data: [220, 232],
                   itemStyle:{
                        normal:{
                            color: '#5a9cca'
                        }
                   }
               },
               {
                   name: '30-39岁',
                   type: 'bar',
                   stack: '总量',
                   label: {
                       normal: {
                           show: true,
                           position: 'insideRight'
                       }
                   },
                   data: [320, 382],
                   itemStyle:{
                       normal:{
                           color: '#8dc1a9'
                       }
                   }
               },
               {
                   name: '40-49岁',
                   type: 'bar',
                   stack: '总量',
                   label: {
                       normal: {
                           show: true,
                           position: 'insideRight'
                       }
                   },
                   data: [150, 212],
                   itemStyle:{
                       normal:{
                           color:'#38b8bc'
                       }
                   }
               },
               {
                   name: '50岁以上',
                   type: 'bar',
                   stack: '总量',
                   label: {
                       normal: {
                           show: true,
                           position: 'insideRight'
                       }
                   },
                   data: [80, 72],
                   itemStyle:{
                       normal:{
                           color: '#fce648'
                       }
                   }
               }
           ]
       };

   var ageChart = echarts.init(document.getElementById('chart_age_one'));
    ageChart.setOption(option);

    var incomeChart = echarts.init(document.getElementById('chart_income_one'));
    incomeChart.setOption(option);
}

function initChinaMap(flag) {
    var color = flag == 'self'? '#fff100' : (flag=='compete' ? '#ff4873' : '#2cffc1');
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function (val) {
                if(!isNaN(val.value)){
                    getTooltip(val, color);
                }
            },
            backgroundColor: new echarts.graphic.LinearGradient(0,0,0,1, [{
                offset: 0, color: 'rgba(255,241,0,.8)'
            },{
                offset: 0.5, color: 'rgba(255,241,0,.4)'
            },{
                offset: 1, color: 'rgba(255,241,0,.2)'
            }])
        },
        grid:{
            left: '15%'
        },
        visualMap: {
            min:0,
            max: 18000,
            left: '8%',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#7ff9fe', '#5fc0ec', '#4496d8', '#2e83c4','#247bb9']
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '本品雅阁',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle:{
                normal:{
                    areaColor: '#2b2f3f',
                    borderColor: '#00ffff',
                    borderWidth: 1.5
                }
            },
            data: [{
                name: '北京',
                value: 18331
            }, {
                name: '天津',
                value: 11716
            }, {
                name: '上海',
                value: 13840
            }, {
                name: '重庆',
                value: 11425
            }, {
                name: '河北',
                value: 7136
            }, {
                name: '河南',
                value: 9245
            }, {
                name: '云南',
                value: 9191
            }, {
                name: '辽宁',
                value: 7331
            }, {
                name: '黑龙江',
                value: 8291
            }, {
                name: '湖南',
                value: 1259
            }, {
                name: '安徽',
                value: 10289
            }, {
                name: '山东',
                value: 2606
            }, {
                name: '新疆',
                value: 7985
            }, {
                name: '江苏',
                value: 3803
            }, {
                name: '浙江',
                value: 10726
            }, {
                name: '四川',
                value: 12457
            }]
        }
        ]
    };

    if(flag == 'self'){
        option.series[0].name = '本品雅阁';
        option.series[0].itemStyle.normal.borderColor = '#00ffff';
        option.visualMap.inRange.color = ['#7ff9fe', '#5fc0ec', '#4496d8', '#2e83c4','#247bb9'];
    }else if(flag == 'compete'){
        option.series[0].name = '竞品帕萨特';
        option.series[0].itemStyle.normal.borderColor = '#ff4873';
        option.visualMap.inRange.color =  ['#fe4873', '#e13c63', '#c02f52', '#a42442', '#941e3a'];
    }else{
        option.series[0].name = '大盘';
        option.series[0].itemStyle.normal.borderColor = '#2cffc1';
        option.visualMap.inRange.color =  ['#2cfdc0', '#24e1aa', '#1ac091', '#12a17b', '#0c8f6c'];
    }

    var chart = echarts.init(document.getElementById('chart_china'));
    chart.setOption(option, true);
}

function getTooltip(val, color) {
    return '<div style="display: block;color: ' + color + ';">' + val.seriesName + '在' + val.name + '的车主人数是:' + val.value + '</div>'
}

function initWorkMap() {
    var genderSelfOpt = {
        title: {
            text: '本品',
            subtext: '(广汽本田购车用户职业分布)',
            x: 'center',
            y: '38%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 30,
                color: '#13cff0'
            },
            subtextStyle: {
                color: '#13cff0'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series : [
            {
                type:'pie',
                radius : ['70%', '80%'],
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value: 60, name:'小于8万',
                        itemStyle: {
                            normal:{
                                color: '#ff7979'
                            }
                        }
                    },
                    {
                        value: 160, name:'10-15万',
                        itemStyle: {
                            normal:{
                                color: '#00b7cd'
                            }
                        }
                    },
                    {
                        value:340, name:'15-20万',
                        itemStyle: {
                            normal:{
                                color: '#44f3c4'
                            }
                        }
                    },
                    {
                        value: 60, name:'20-30万',
                        itemStyle: {
                            normal:{
                                color: '#80fbff'
                            }
                        }
                    },
                    {
                        value: 187, name:'30-50万',
                        itemStyle: {
                            normal:{
                                color: '#4bded'
                            }
                        }
                    },
                    {
                        value: 260, name:'50-100万',
                        itemStyle: {
                            normal:{
                                color: '#4b9ede'
                            }
                        }
                    },
                    {
                        value: 60, name:'100万以上',
                        itemStyle: {
                            normal:{
                                color: '#fffd2d'
                            }
                        }
                    }
                ]
            }
        ]
    };

    var genderSelf = echarts.init(document.getElementById('work_self'));
    genderSelf.setOption(genderSelfOpt);

    var genderCom = echarts.init(document.getElementById('work_compete'));
    genderCom.setOption(genderSelfOpt);

    var genderDapan = echarts.init(document.getElementById('work_dapan'));
    genderDapan.setOption(genderSelfOpt);

    var purposeSelf = echarts.init(document.getElementById('purpose_self'));
    purposeSelf.setOption(genderSelfOpt);
    var purposeCom = echarts.init(document.getElementById('purpose_compete'));
    purposeCom.setOption(genderSelfOpt);
    var purposeDapan = echarts.init(document.getElementById('purpose_dapan'));
    purposeDapan.setOption(genderSelfOpt);
}

function initSCroll() {

    $('.part-right').scroll(function () {
        var $box = $('.box:first'), $select = $('.select-box');
        var top = $box.offset().top,
            width = $box.width()-28,  //-左右padding距离+border宽度
            $label = $select.find('.label-box');

        if(top <= -100 && !$select.hasClass('fixed')){
            $label.hide();
            $select.find('.col-md-5').removeClass('col-md-5').addClass('col-md-4');
            $select.width(width).addClass('fixed');
        }else if(top >= -100 && $select.hasClass('fixed')){
            $label.show();
            $select.find('.col-md-4').addClass('col-md-5').removeClass('col-md-4');
            $select.width(width).removeClass('fixed');
        }
    });
}
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

    initAgePercent();
    initChinaMap();
    initWorkMap();
});

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
}

function  initChinaMap() {
    var geoCoordMap = {
        '北京': [116.395645, 39.929986],
        '天津': [117.210813, 39.14393],
        '上海': [121.4788,31.2303],
        '重庆': [106.55,29.5647],
        '河北': [114.522082,38.048958],
        '河南': [113.649644,34.75661],
        '云南': [102.714601,24.882],
        '辽宁': [123.432791,41.808645],
        '黑龙江': [126.657717,45.773225],
        '湖南': [112.979353,28.213478],
        '安徽': [117.282699,31.866942],
        '山东': [117.024967,36.682785],
        '新疆': [87.564988,43.84038],
        '江苏': [118.778074,32.057236],
        '浙江': [120.219375,30.259244],
        '江西': [115.893528,28.689578],
        '湖北': [114.3162,30.581084],
        '广西': [108.297234,22.806493],
        '甘肃': [103.823305,36.064226],
        '山西': [112.550864,37.890277],
        '内蒙古': [111.660351,40.828319],
        '陕西': [108.939,34.342],
        '吉林': [125.3222,43.816],
        '福建': [119.330221,26.047125],
        '贵州': [106.709177,26.629907],
        '广东': [113.30765,23.120049],
        '青海': [101.767921,36.640739],
        '西藏': [91.111891,29.662557],
        '四川': [104.0648,30.57],
        '宁夏': [106.206479,38.502621],
        '海南': [110.330802,20.022071],
        '台湾': [121.31, 25.03],
        '香港': [114.1529,22.542716],
        '澳门': [113.417008,22.337477]
    };
    function getgeo(geo,i){
        if(i%2==0){
            return [geo[0] + (0.2 * i%2), geo[1]];
        }else{
            return [geo[0] , geo[1] - (0.3 * i%2)];
        }
    }

    function convertData(datas) {
        var res = [];
        for (var g in geoCoordMap) {
            var geo = geoCoordMap[g];
            if (geo) {
                var data = $.grep(datas, function(p) {
                    return p.name == g && p.value!=null;
                });
                for (var i in data) {
                    if (data[i]) {
                        res.push({
                            name:data[i].name,
                            value: getgeo(geo,i),
                            state: data[i].value,
                            operate: data[i].operate,
                            prepare: data[i].prepare
                        });
                    }
                }
            }
        }
        return res;
    };

    var data = [{
        "name": "北京",
        "ID": 9,
        "value": 22
    },{
        "name": "湖南",
        "ID": 21,
        "value": 2,
        "operate": 4,
        "prepare": 6
    }, {
        "name": "深圳",
        "ID": 42,
        "value": 2,
        "operate": 5,
        "prepare": 2
    }, {
        "name": "河北",
        "ID": 43,
        "value": 2,
        "operate": 2,
        "prepare": 6
    }, {
        "name": "上海",
        "ID": 44,
        "value": 2
    }, {
        "name": "河南",
        "ID": 46,
        "value": 2,
        "operate": 0,
        "prepare": 1
    },  {
        "name": "宁夏",
        "ID": 55,
        "value": 2,
        "operate": 0,
        "prepare": 1
    }, {
        "name": "湖北",
        "ID": 73,
        "value": 2,
        "operate": 2,
        "prepare": 3
    },  {
        "name": "浙江",
        "ID": 87,
        "value": 2,
        "operate": 3,
        "prepare": 4
    }, {
        "name": "山西",
        "ID": 100,
        "value": 2,
        "operate": 0,
        "prepare": 1
    }, {
        "name": "黑龙江",
        "ID": 102,
        "value": 2,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "新疆",
        "ID": 140,
        "value": 7,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "江苏",
        "ID": 141,
        "value": 5,
        "operate": 1,
        "prepare": 2
    },  {
        "name": "西藏",
        "ID": 155,
        "value": 7,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "四川",
        "ID": 156,
        "value": 8,
        "operate": 1,
        "prepare": 2
    },{
        "name": "海南",
        "ID": 158,
        "value": 1,
        "operate": 2,
        "prepare": 3
    }, {
        "name": "台湾",
        "ID": 159,
        "value": 2,
        "operate": 4,
        "prepare": 5
    }, {
        "name": "香港",
        "ID": 160,
        "value": 3,
        "operate": 2,
        "prepare": 3
    }];

    var chinaOption = {
        tooltip:{
            trigger: 'item',
            formatter: function (val) {
                console.log(val)
                var text = '';
                return text;
            }
        },
        legend: {
            orient: 'vertical',
            right: '8%',
            top: '40%',
            textStyle:{
              fontSize: 16
            },
            padding: [10, 20],
            borderWidth: 1,
            borderColor: '#00ffff',
            borderRadius: 5,
            data:[
                {
                    name:'本品分布',
                    textStyle:{
                        color:'#fff100'
                    }
                },
                {
                    name:'竞品分布',
                    textStyle:{
                        color:'#ff4873'
                    }
                },
                {
                    name: '大盘分布',
                    textStyle:{
                        color: '#2cffc1'
                    }
                }
            ]
        },
        geo: {
            map: 'china',
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: '#00ffff',
                    areaColor: '#212638'
                }
            },
            label: {
                emphasis: {
                    show: true,
                    fontSize: 18,
                    color: '#fff'
                }
            }
        },
        series: [{
            name: '本品分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            data: convertData(data).slice(0,5),
            itemStyle: {
                normal:{
                    color: '#fff100'
                }
            }
        },{
            name: '竞品分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(5, 10)),
            itemStyle: {
                normal:{
                    color: '#ff4873'
                }
            }
        },{
            name: '大盘分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(11, 18)),
            itemStyle: {
                normal:{
                    color: '#2cffc1'
                }
            }
        }]
    };

    var map = echarts.init(document.getElementById('chart_china'));
    map.setOption(chinaOption);
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
return
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
                radius : ['53%', '63%'],
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
            },{
                type:'pie',
                radius : ['73%', '74%'],
                center: ['50%', '50%'],
                label: {
                    normal:{
                        formatter: '{b|{b}：}{per|{d}%}',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [3, 5],
                        rich: {

                        }
                    }
                },
                data:[
                    {
                        value:40, name:'女',
                        itemStyle: {
                            normal:{
                                color: '#fce648',
                                labelLine: {
                                    length: 1,
                                    length2: 1,
                                    smooth: true
                                }
                            }
                        },
                        label: {
                            normal:{
                                backgroundColor: 'rgba(252,230,72,.3)'
                            }
                        }
                    },
                    {
                        value: 60, name:'男',
                        itemStyle: {
                            normal:{
                                color: '#00b7cd',
                                labelLine: {
                                    length: 1,
                                    length2: 0
                                }
                            }
                        },
                        label: {
                            normal:{
                                backgroundColor: 'rgba(0,183,205,.3)'
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
                radius : ['53%', '63%'],
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
            },{
                type:'pie',
                radius : ['73%', '74%'],
                center: ['50%', '50%'],
                label: {
                    normal:{
                        formatter: '{b|{b}：}{per|{d}%}',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [3, 5],
                        rich: {

                        }
                    }
                },
                data:[
                    {
                        value:40,
                        name:'女',
                        itemStyle: {
                            normal:{
                                color: '#2cffc1',
                                labelLine: {
                                    length: 1,
                                    length2: 1,
                                    smooth: true
                                }
                            }
                        },
                        label: {
                            normal:{
                                backgroundColor: 'rgba(44,255,193,.3)'
                            }
                        }
                    },
                    {
                        value: 60,
                        name:'男',
                        itemStyle: {
                            normal:{
                                color: '#00b7cd',
                                labelLine: {
                                    length: 1,
                                    length2: 0
                                }
                            }
                        },
                        label: {
                            normal:{
                                backgroundColor: 'rgba(0,183,205,.3)'
                            }
                        }
                    }
                ]
            }
        ]
    };
    var genderDapan = echarts.init(document.getElementById('chart_gender_dapan'));
    genderDapan.setOption(genderDapanOpt);
}
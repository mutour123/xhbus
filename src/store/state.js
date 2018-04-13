
const state= {
  test: '',
  AMap: {},
  localCity: '成都市',
  map:'',
  searchMap: '',
  isLogin: false,
  person:{},
  weather: {}
}


AMap.service('AMap.Transfer', function(){
  state.AMap.transfer = new AMap.Transfer({
    city: "北京市",
    extensions: 'all',
    // panel: 'panel',
    // policy: 'NO_SUBWAY'
  })
})

AMap.service(["AMap.LineSearch"], function() {
  state.AMap.linesearch = new AMap.LineSearch({
    pageIndex:1,
    city: state.localCity,
    pageSize: 1,
    extensions: 'all',
  })
})

AMap.service('AMap.StationSearch',function(){//回调函数
  //实例化StationSearch
  state.AMap.stationSearch= new AMap.StationSearch({
    pageIndex: 1, //页码
    pageSize: 60, //单页显示结果条数
    city: state.localCity    //确定搜索城市
  })
})
//天气预报
AMap.service('AMap.Weather', function () {
  let weather = new AMap.Weather();
  weather.getLive(state.localCity, function (err, data) {
    if(!err){
      state.weather = data
    }
  })
})

export default state

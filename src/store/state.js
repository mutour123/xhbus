const state= {
  test: '',
  AMap: {},
  localCity: '成都市',
  map:'',
  searchMap: '',
  isLogin: false,
  adminIsLogin: false,
  adminPerson: {},
  person:{},
  weather: {},
  transferPolicy: "LEAST_WALK", //换成策略
}
//换成策略
const transferPolicy = {
  LEAST_FEE: 1,
  LEAST_TIME: 0,
  LEAST_TRANSFER: 2,
  LEAST_WALK: 3,
  MOST_COMFORT: 4,
  NO_SUBWAY:5
}


//路线规划
AMap.service('AMap.Transfer', function(){
  state.AMap.transfer = new AMap.Transfer({
    city: state.localCity,
    extensions: 'all',
    policy: transferPolicy[state.transferPolicy] //乘车策略
  })
})

console.log(AMap.TransferPolicy)

//路线查询
AMap.service(["AMap.LineSearch"], function() {
  state.AMap.linesearch = new AMap.LineSearch({
    pageIndex:1,
    city: state.localCity,
    pageSize: 1,
    extensions: 'all',
  })
})
//站点查询
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

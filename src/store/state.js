
const state= {
  test: '',
  AMap: {},
  isLogin: false,
  person:{}
}


AMap.service('AMap.Transfer', function(){
  state.AMap.transfer = new AMap.Transfer({
    city: '成都市',
    extensions: 'all',
    // panel: 'panel',
    // policy: 'NO_SUBWAY'
  })
})

AMap.service(["AMap.LineSearch"], function() {
  state.AMap.linesearch = new AMap.LineSearch({
    pageIndex:1,
    city: '成都',
    pageSize: 1,
    extensions: 'all',
  })
})

AMap.service('AMap.StationSearch',function(){//回调函数
  //实例化StationSearch
  state.AMap.stationSearch= new AMap.StationSearch({
    pageIndex: 1, //页码
    pageSize: 60, //单页显示结果条数
    city:'成都'    //确定搜索城市
  })
})

export default state

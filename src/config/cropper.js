exports.cropperOption = {
  // minContainerHeight :  screenHeight,
  // minContainerWidth : screenWidth,
  aspectRatio: 1 / 1,//裁剪框比例 1：1
  viewMode : 1,//显示
  guides :false,//裁剪框虚线 默认true有
  dragMode : "move",
  build: function (e) { //加载开始
    //可以放你的过渡 效果
  },
  built: function (e) { //加载完成
    $("#containerDiv").show();
    $("#imgEdit").show();
  },
  zoom: function (e) {
    console.log(e.type, e.detail.ratio);
  },
  background : true,// 容器是否显示网格背景
  movable : true,//是否能移动图片
  cropBoxMovable :false,//是否允许拖动裁剪框
  cropBoxResizable :false,//是否允许拖动 改变裁剪框大小
}

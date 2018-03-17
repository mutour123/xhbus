<template>
 <section>
   <div class="inputContent">
     <el-input class="stationInput" v-model="stationValue" placeholder="线路名称，如“西华大学南大门站”" clearable></el-input>
     <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
   </div>
   <div>
     <div id="panel" ref="panel">

     </div>

   </div>
 </section>
</template>

<script>
    export default {
        name: "station",
        data(){
          return {
            stationSearch:'',
            stationValue: '西华大学南大门站'
          }
        },
        methods:{
            search(){
              this.stationSearch.search(this.stationValue, (status, result)=>{
                if(status === 'complete' && result.info === 'OK'){
                  console.log(result)
                  this.$refs.panel.innerHTML = JSON.stringify(result)
                }else{
                  console.log(result)
                }
              })
            }
        },
        mounted(){
          let _this = this
          AMap.service('AMap.StationSearch',function(){//回调函数
            //实例化StationSearch
            _this.stationSearch= new AMap.StationSearch({
              pageIndex: 1, //页码
              pageSize: 60, //单页显示结果条数
              city:'成都'    //确定搜索城市
            })
          })
        }
    }
</script>

<style scoped lang="stylus">
  .inputContent
    display flex
    padding 20px
    border 1px solid #5ec4f7
  .stationInput
    flex-grow 1
    margin-right 10px
</style>

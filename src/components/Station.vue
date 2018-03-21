<template>
 <section>
   <div class="inputContent">
     <el-input class="stationInput" v-model="stationValue" placeholder="站点名称，如“西华大学南大门站”" clearable></el-input>
     <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
   </div>
   <div>
     <div>
       <div>
         <img src="../../static/10.jpg" alt="bus">
       </div>
       <div>
         <h3>西华大学南大门<span>途径路线7条</span></h3>
         <ul>
           <li>P04路</li>
           <li>P40路</li>
           <li>G173路</li>
           <li>720路</li>
           <li>720A路</li>
           <li>723路</li>
           <li>733路</li>
         </ul>
       </div>
     </div>
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
                  // this.$refs.panel.innerHTML = JSON.stringify(result)
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

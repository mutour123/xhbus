<template>
  <section>
    <div class="searchContent">
      <div class="searchInputContent">
        <div>
          <label class="transferInputLabel" >出发地</label>
          <el-input class="transferInput" v-model="transferValue.start" placeholder="请输入起点名称" clearable></el-input>
        </div>
        <div>
          <label class="transferInputLabel">目的地</label>
          <el-input class="transferInput" v-model="transferValue.end" placeholder="请输入终点名称" clearable></el-input>
        </div>
      </div>
      <div class="switchCon" >
        <span class="switch" :style="background" @click="switchInput" id="switch"></span>
      </div>
      <div>
        <el-button class="searchButton" type="primary" @click="search" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div>
      <panel :transferResult="searchResult"></panel>
    </div>
    <div id="panel"></div>
  </section>
</template>

<script>
    import Route from '../base/Route'
    import Panel from './Panel'
    export default {
        name: "transfer",
        components:{
          Route,
          Panel
        },
        data(){
          return{
            background:{},
            img1:{
              background: "url("+require('../../static/switch.back.png')+")"
            },
            img2: {
              background: "url("+require('../../static/switch_act.back.png')+")"
            },
            transferValue: {//输出框的内容
              start: "西华大学西大门站",
              end: "天府三街"
            },
            transfer:"",//用于查询的Transfer对象
            searchResult: {},//获取到的数据对象
          }
        },
      methods: {
        /**
         * 交换出发地和目的地，并且改变图片
         */
        switchInput(){
          [this.transferValue.start, this.transferValue.end] = [this.transferValue.end, this.transferValue.start]
          this.background = this.background == this.img1 ? this.img2 : this.img1
        },
        search(){
          this.transfer.search([{keyword: this.transferValue.start},{keyword: this.transferValue.end}], (status, result)=>{
            //  解析返回结果，自己生成操作界面和地图展示界面
            if(status === 'complete' && result.info === 'OK'){
              console.log(result)
              this.searchResult = result
              //此时的唯一组件是
              // console.log(JSON.stringify(result))
            }else{
              console.log(result)
            }
          });

        }
      },
      mounted(){
        this.background = this.img1
        let _this = this
        AMap.service('AMap.Transfer', function(){
          _this.transfer = new AMap.Transfer({
            city: '成都市',
            extensions: 'all',
            // panel: 'panel',
            // policy: 'NO_SUBWAY'
          })
        })
      }
    }
</script>

<style scoped lang="stylus">
  .transferInputLabel
    /*padding 10px*/
    width 14%
    display inline-block
  .transferInput
    display inline-block
    width 80%
  .searchContent
    min-width 600px
    border 1px solid #5ec4f7
  .searchContent>div
    display inline-block
    height 130px
    vertical-align top
  .searchInputContent
    width 70%
  .searchInputContent>div
    padding 10px
  .switch
    display inline-block
    margin-top 20px
    width 35px
    height 82px
    cursor pointer
  .searchButton
    margin-top 40px
    margin-left 20px
</style>

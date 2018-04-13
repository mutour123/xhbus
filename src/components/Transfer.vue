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
        <span class="switch noselect" :style="background" @click="switchInput" id="switch"></span>
      </div>
      <div>
        <el-button class="searchButton" type="primary" @click="search" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="detail">
      <div  class="loadingCon" ref="loadingCon">
        <img class="loading" src="../../static/image/timg2.gif" alt="加载中">
        <span class="loadingText">加载中......</span>
      </div>
      <panel
        :transferResult="searchResult"
        :isCollected=false
      ></panel>
    </div>
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
              background: "url("+require('../../static/image/switch.back.png')+")"
            },
            img2: {
              background: "url("+require('../../static/image/switch_act.back.png')+")"
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
          $(this.$refs.loadingCon).css("display", "block")
          //在这里写一个加载动画
          this.$store.state.AMap.transfer.search([{keyword: this.transferValue.start},{keyword: this.transferValue.end}], (status, result)=>{
            //  解析返回结果，自己生成操作界面和地图展示界面
            if(status === 'complete' && result.info === 'OK'){
              console.log(result)
              $(this.$refs.loadingCon).css("display", "none")

              this.searchResult = result
              //此时的唯一组件是
              // console.log(JSON.stringify(result))
            }else{
              console.log(result)
            }
          })

        }
      },
      mounted(){
        this.background = this.img1
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
  .detail
    min-height 300px
    position relative
  .loadingCon
    z-index 100
    background-color rgba(255, 255, 255, .5)
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    text-align center
    display none
    .loadingText
      display block
      position absolute
      top 50%
      color #c1c1c1
      left 50%
      padding-left 23px
      margin-left -50px
      text-align center
    .loading
      width 100px
      display block
      margin auto
      position relative
      top 50%
      margin-top -100px



  .noselect//禁止选中
    user-select none
</style>

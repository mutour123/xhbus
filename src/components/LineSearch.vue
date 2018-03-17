<template>
  <section>
    <div class="inputContent">
      <el-input class="linferInput" v-model="lineValue" placeholder="线路名称，如“西华大学南大门站”" clearable></el-input>
      <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div>
      <div class="via_stops" >
        <p class="lineName" >
          <span ref="lineNameZ"></span>
          <span ref="lineDirectionZ" class="titleDirection"></span>
        </p>
        <ul>
          <li v-for="value in via_stops" class="lineItem">
            <i>{{value.sequence}}</i>
            <a href="#">{{value.name}}</a>
          </li>
        </ul>
        <p class="lineName" >
          <span ref="lineNameF"></span>
          <span ref="lineDirectionF" class="titleDirection"></span>
        </p>
        <ul>
          <li v-for="(value, index) in via_stops.reverse()" class="lineItem">
            <i>{{index+1}}</i>
            <a href="#">{{value.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "line",
        data(){
          return {
            linesearch: '',
            lineValue: '723',
            via_stops: []
          }
        },
      methods:{
        search(){
          this.linesearch.search(this.lineValue, (status, result)=>{
            if(status === 'complete' && result.info === 'OK'){
              this.$refs.lineNameZ.innerHTML = result.lineInfo[0].name
              this.$refs.lineNameF.innerHTML = result.lineInfo[0].name
              this.$refs.lineDirectionZ.innerHTML = "正向"
              this.$refs.lineDirectionF.innerHTML = "反向"
              this.via_stops = result.lineInfo[0].via_stops
            }else{
              console.log(result)
            }
          })
        }
      },
        mounted(){
          let _this = this
          AMap.service(["AMap.LineSearch"], function() {
            _this.linesearch = new AMap.LineSearch({
              pageIndex:1,
              city: '成都',
              pageSize: 1,
              extensions: 'all',
              panel: 'panel'
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
  .linferInput
    flex-grow 1
    margin-right 10px
  .via_stops
    margin-top 20px
    min-height 200px
    padding 10px
    padding-top 0
    ul
      list-style none
      font-size 12px
      margin 0
      padding 0
      .lineItem
        word-wrap break-word
        writing-mode tb-rl
        vertical-align top
        font-size 14px
        text-align left
        display inline-block
        i
          background-size cover
          background-image  url("../../static/circle_line.gif")
          display inline-block
          font-style normal
          word-wrap normal
          writing-mode rl-tb
          height 22px
          padding-top 2px
          width 29px
          padding-left 4px
          box-sizing border-box
          font-size 12px
          vertical-align bottom
        a
          padding-top 5px
          color #000
          letter-spacing 3px
          text-decoration none
    ul
      li:nth-last-child(1)
        i
          text-align left
          width 22px
  .lineName
    border-bottom 1px silver solid
    padding-bottom 2px
    font-weight bolder
  .titleDirection
    float right
</style>

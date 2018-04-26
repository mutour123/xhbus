<template>
  <div>
    <div class="panel1">
    <div class="conItem">
      <div v-if="announcement.length">
        <div class="noticeItem" v-for="(item, index) in announcement">
          <h5><span style="cursor: pointer;"  v-twotoggle>{{index+1}}. {{item.title}}</span></h5>
          <div class="itemContent">
            {{item.content}}
          </div>
        </div>
      </div>
      <div v-else>
        <h4 style="text-align: center;">现在还没有公告哦！</h4>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notice",
    data(){
      return {
        announcement: [],
      }
    },
    mounted(){
      {
        this.$http.get('/api/admin/announce/get.do')
          .then(res => {
            console.log(res.data)
            this.announcement = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .showAdd
    cursor pointer
  .conPanle
    display flex
  .conPanle>div:first-child
    padding 20px
    box-sizing border-box
    flex-grow 1
  .conPanle>div:last-child
    padding 20px
    width 300px
  /*background-color red*/
  .showAdd
    cursor pointer
  .panel
    padding 20px
    transition .5s
    box-shadow 1px 1px 1px 1px #666
    border 1px solid #c1c1c1
    height 40px
    overflow hidden
  .panel1
    padding 20px
    box-shadow 1px 1px 1px 1px #666
    border 1px solid silver
    min-height 200px
  .showDiv
    height auto
  .from
    box-shadow 1px 1px 1px 1px #666
    padding 10px
  .conItem
    padding-left 20px
  .itemContent
    text-index 50px
    padding 10px
    line-height 24px
    padding-top 0
    display none
  .showTwoDiv
    display block
  .noticeItem
    border-bottom 1px silver solid
</style>

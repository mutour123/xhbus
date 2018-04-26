<template>
    <footer>
      <div>友情链接：
        <a v-for="item in friendshipLink" :href="item.url">{{item.name}}</a>
      </div>
      <div>
        西华大学 @版权所有
      </div>

    </footer>
</template>

<script>
    export default {
      name: "m-footer",
      data(){
        return {
          friendshipLink:[]
        }
      },
      mounted(){
        {//获取友情链接的数据
          this.$http.get('/api/admin/link/getall.do')
            .then(res => {
              if (res.data.code == 1){
                this.friendshipLink = res.data.data.filter(item => {
                  if(item.url != "景点"){
                    return item
                  }
                })
              }
              console.log(res.data)

            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
</script>

<style scoped lang="stylus">
  footer
    font-size 13px
    height 60px
    padding 20px
    padding-top 40px
    background-color #E6DFE1
    color #444
    text-align center
    border-top 1px solid silver
    box-shadow 0px 1px 1px #dddada inset
  footer > div
    line-height 30px
    a
      color #444
      padding 5px

</style>

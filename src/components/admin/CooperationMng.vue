<template>
    <div>
      <friendship-link></friendship-link>
      <hr>
      <scenic-spot></scenic-spot>
      <hr>
    </div>
</template>

<script>
  import FriendshipLink from './FriendshipLink'
  import ScenicSpot from './ScenicSpot'
  export default {
    name: "cooperation-mng",
    data(){
      return {
        friendshipLink: [
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          },
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          },
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          }
        ],
        formLabelAlign: {
          name: '微力实验室',
          address: 'www.weilylab.com',
        }
      }
    },
    components: {
      FriendshipLink,
      ScenicSpot
    },

    methods: {
      onSubmit(){
        this.hrefTitle.push(this.formLabelAlign.name)
      }
    },
    mounted(){
      //初始化列表
      {
        this.hrefTitle.forEach((item, index) => {
          this.data2.push({
            label: item,
            key: index
          })
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
    border-left 1px #666 solid
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
  .showDiv
    height 300px
</style>

<template>
  <header>
    <router-link class="toIndex" to="/">
      <div class="logText">西华bus</div>
    </router-link>
    <span class="minText">公交查询系统</span>
  </header>
</template>

<script>
    export default {
        name: "m-header"
    }
</script>

<style scoped lang="stylus">
  @import "../common/stylus/variable.styl"
  header
    height 100px
    background-image url("../assets/banner_logo.png")
    background-position bottom
    border-bottom 5px solid $color-theme
    position relative
    .toIndex
      text-decoration none
      .logText
        position relative
        top 20px
        width 200px
        text-align center
        line-height 48px
        font-size 36px
        font-weight bolder
        margin-left  48%
        cursor pointer
        color $color-theme
    .minText
      font-size 18px
      margin-left 48%
      position absolute
      bottom -5px
      display inline-block
      width 200px
      text-align center
      border-bottom 5px solid #fff
      font-weight bolder

</style>


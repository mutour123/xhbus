<template>
    <div>
      <ul>
          <li v-for="(value, index) in via_stops" :key="index" class="lineItem">
            <i>{{value.sequence}}</i>
            <a href="#">{{value.name}}</a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: "line-base",
      props:  [
        'via_stops'
      ]
    }
</script>

<style scoped lang="stylus">
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

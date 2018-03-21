<template>
   <main>
      <section class="content">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="/mine">
            <i class="el-icon-menu"></i>
            <span slot="title">我的</span>
          </el-menu-item>
          <el-menu-item index="/transfer">
            <i class="el-icon-menu"></i>
            <span slot="title">换乘查询</span>
          </el-menu-item>
          <el-menu-item index="/linesearch" >
            <i class="el-icon-document"></i>
            <span slot="title">线路查询</span>
          </el-menu-item>
          <el-menu-item index="/station">
            <i class="el-icon-setting"></i>
            <span slot="title">站点查询</span>
          </el-menu-item>
        </el-menu>
        <div class="detail">
          <router-view/>
        </div>
      </section>
   </main>
</template>

<script>
    export default {
        name: "IndexPage",
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped lang="stylus">
  main
    width 80%
    margin auto
    padding 20px
    min-width 850px
  .content
    display flex
  .menu
    width 160px
    list-style none
    margin 0
    padding 0
    .menuItem
      padding 10px
      cursor pointer
      background-color #f1f1f1
  .detail
    flex-grow 1
    min-height 440px
    padding 20px
  .router-link-active
    background-color slateblue!important
    color red
</style>

<template>
  <div id="admin">
    <header></header>
    <nav>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <main>main</main>
  </div>
</template>

<script>
    export default {
        name: "admin"
    }
</script>

<style scoped lang="stylus">
  #admin
    display grid
    grid-template-columns 205px auto
    grid-template-rows 100px auto
    header
      grid-column-start 1
      grid-column-end 3
      background-color #303133
      border 1px solid #000
    nav
      background-color #303133
    main
      min-height calc(100vh - 100px)
    .el-menu
      border 0


</style>

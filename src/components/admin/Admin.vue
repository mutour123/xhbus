<template>
  <div id="admin">
    <header>
      <admin-header></admin-header>
    </header>
    <nav>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
        background-color="#303133"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/cooperationMng">
          <i class="el-icon-menu"></i>
          <span slot="title">第三方合作</span>
        </el-menu-item>
        <el-menu-item index="/travelmng">
          <i class="el-icon-menu"></i>
          <span slot="title">出行情况</span>
        </el-menu-item>
        <el-menu-item index="/buslinemng" >
          <i class="el-icon-document"></i>
          <span slot="title">管理员</span>
        </el-menu-item>
        <el-menu-item index="/usermng">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import AdminHeader from './AdminHeader'
  export default {
    name: "admin",
    components: {
      AdminHeader
    }
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
      height calc(100vh - 100px)
      padding 10px
      box-sizing border-box
      overflow auto
    .el-menu
      border 0


</style>

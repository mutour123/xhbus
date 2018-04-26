<template>
  <div >
    <div v-if="!adminIsLogin" class="LoginMask">
      <admin-login></admin-login>
    </div>
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
          <el-menu-item index="/announce">
            <i class="el-icon-menu"></i>
            <span slot="title">公告管理</span>
          </el-menu-item>
          <el-menu-item v-if="adminPerson.authority == 1"  index="/buslinemng" >
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
  </div>
</template>

<script>
  import AdminHeader from './AdminHeader'
  import AdminLogin from './AdminLogin'
  import { mapGetters } from 'vuex'

  export default {
    name: "admin",
    data(){
      return {

      }
    },
    computed: {
      ...mapGetters([
        'adminIsLogin',
        'adminPerson'
      ]),
    },
    components: {
      AdminHeader,
      AdminLogin
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
  .LoginMask
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 99
    /*background-color #123c5a*/
    background-image linear-gradient(to bottom, #123c5a, #89b7ff)
</style>

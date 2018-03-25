<template>
    <div id="adminheader">
      <div class="log">
        <h1>RoutePlaner管理</h1>
      </div>
      <div class="user">
        <p class="login" v-if="isLogin">欢迎{{username}}</p>
        <p class="login" v-else>登录</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "admin-header",
      data(){
        return {
          username: '念念公子',
          isLogin: true
        }
      }
    }
</script>

<style scoped lang="stylus">
  #adminheader
    display flex
    height 100%
  .log
    width 300px
    padding 10px
  .user
    flex-grow 1
  .login
    cursor pointer
    margin-top 40px
    margin-right 20px
    float right



</style>

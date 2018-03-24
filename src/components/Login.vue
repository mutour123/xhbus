<template>
    <div>
      <el-form :model="form">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" placeholder="请输入密码" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="clearfloat">
        <div class="btncon">
          <el-button @click="dialogLoginVisible = false">取 消</el-button>
          <el-button type="primary" @click="loginHander">登录</el-button>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          form: {
            name: '念念公子',
            password: '123456'
          },
          formLabelWidth: '120px',
        }
      },
      computed: {
        isLogin(){
          return this.$store.state.isLogin
        }
      },
      methods: {
        loginHander(){
          this.$emit('hidden')
          let _this = this
          this.$http.post('/api/login', {
            username: this.form.name,
            password: this.form.password
          })
            .then(res => {
              console.log(res)
              _this.$store.commit('login')
              _this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success'
              })
            })
            .catch( err => {
              console.log(err)
              console.log('登录失败')
              _this.$message({
                showClose: true,
                message: '登录失败',
                type: 'error'
              })
            })
        },
      }
    }
</script>

<style scoped lang="stylus">
  .btncon
    float right
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0
</style>

<template>
  <div style="height: 100%;width: 100%;">
    <div class="adminLoginCon">
      <h1>管理员登录</h1>
      <!--<hr>-->
      <div class="loginCon">
        <div>
          <el-form :model="form">
            <el-form-item label="用户名:" :label-width="formLabelWidth">
              <el-input v-model="form.account" placeholder="请输入用户名" auto-complete="off"></el-input>
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
      </div>
    </div>
  </div>
</template>

<script>
  import Qs from 'qs'
  import { mapGetters } from 'vuex'

  export default {
    name: "admin-login",
    data() {
      return {
        form: {
          account: 'Bob',
          password: '123123'
        },
        formLabelWidth: '120px',
      }
    },
    computed: {
      ...mapGetters([
        'adminIsLogin'
      ]),
    },
    methods: {
      loginHander() {
        console.log(1111)
        // this.$emit('hidden')
        let data = Qs.stringify(this.form)
        this.$http.post('/api/user/login.do', data,
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          console.log(res.data)
          if (res.data.code == 1) {
            console.log(res.data.data)
            this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success'
            })
            this.$store.commit('adminLogin', res.data.data)
            this.$router.push('announce')
            //这里可以做什么？
          } else {
            this.$message({
              showClose: true,
              message: '登录失败',
              type: 'error'
            })
            console.log(res.data.message)
          }
        }).catch(err => {
          console.log(err)
          this.$message({
            showClose: true,
            message: '登录失败',
            type: 'error'
          })
        })
        console.log(222)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .adminLoginCon
    width 600px
    position relative
    top 50%
    left 50%
    transform translate(-50%, -50%)
    box-shadow 1px 1px 1px 1px #212828
    padding 20px
    h1
      text-align center
    .loginCon
      padding-top 30px
      width 400px
      margin-left 10%
  .btncon
    float right
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0

</style>

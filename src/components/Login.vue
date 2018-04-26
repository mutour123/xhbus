<template>
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
</template>

<script>
  import Qs from 'qs'
  import { mapGetters } from 'vuex'
  export default {
      name: "login",
      data(){
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
          'isLogin'
        ])
      },
      methods: {
        loginHander(){
          this.$emit('hidden')
          let data = Qs.stringify(this.form)
          this.$http.post('/api/user/login.do',data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res => {
            console.log(res.data)
            if (res.data.code == 1){
              this.$store.commit('login',res.data.data)
              this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success'
              })
            }else {
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

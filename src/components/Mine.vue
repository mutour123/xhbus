<template>
    <section>
      <div class="login">
        <el-button  @click="dialogLoginVisible = true" v-if="!isLogin" class="btn" type="primary">登录</el-button>
        <el-button  @click="dialogRegVisible = true" v-if="!isLogin" class="btn" type="primary">注册</el-button>
      </div>

      <span v-if="isLogin" class="welcome">欢迎来到念念公子</span>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最近路线" name="first">
          <div class="lateline">
          </div>
        </el-tab-pane>
        <el-tab-pane label="收藏路线" name="second">收藏路线</el-tab-pane>
        <el-tab-pane label="常用地址" name="third">常用地址</el-tab-pane>
        <el-tab-pane label="通知" name="fourth">通知</el-tab-pane>
        <el-tab-pane v-if="isLogin" label="个人设置" name="five">个人设置</el-tab-pane>
      </el-tabs>
      <!--//登录弹框-->
      <el-dialog title="登录" :visible.sync="dialogLoginVisible">
        <el-form :model="form">
          <el-form-item label="用户名:" :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="请输入用户名" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogLoginVisible = false">取 消</el-button>
          <el-button type="primary" @click="loginHander">登录</el-button>
        </div>
      </el-dialog>
      <!--注册-->
      <el-dialog title="注册" :visible.sync="dialogRegVisible">
        <el-form :model="form">
          <el-form-item label="用户名:" :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="请输入用户名" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogRegVisible = false">取 消</el-button>
          <el-button type="primary" @click="regHhander">注册</el-button>
        </div>
      </el-dialog>
    </section>
</template>

<script>
    export default {
        name: "mine",
        data() {
          return {
            activeName: 'first',
            isLogin: false,
            dialogLoginVisible: false,
            dialogRegVisible: false,
            form: {
              name: '念念公子',
              password: '123456'
            },
            formLabelWidth: '120px'
          };
        },
        methods: {
          handleClick(tab, event) {
            console.log(tab, event)
          },
          loginHander(){
            let _this = this
            this.dialogLoginVisible = false
            this.$http.post('/api/login', {
              username: this.form.name,
              password: this.form.password
            })
              .then(res => {
                console.log(res)
                console.log('登录成功')
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
          regHhander(){
            let _this = this
            this.dialogRegVisible = false
            this.$http.post('/api/reg', {
              username: this.form.name,
              password: this.form.password
            })
              .then(res => {
                console.log(res)
                console.log('注册成功')
                _this.$message({
                  showClose: true,
                  message: '注册成功',
                  type: 'success'
                })
              })
              .catch( err => {
                console.log(err)
                console.log('注册失败')
                _this.$message({
                  showClose: true,
                  message: '注册失败',
                  type: 'error'
                })
              })
          }


        }
    }
</script>

<style scoped lang="stylus">
  section
    position relative
  .tabs
    margin-top -20px
  .login,.welcome
    position absolute
    z-index 10
    top 0
    right 0
  .welcome
    z-index 1
    padding 9px
  .lateline
    /*border 1px salmon solid*/
    height 400px;
  .btn
    color #000
    border 0
    padding-left 5px
    padding-right 5px
    margin 0
    background-color white
  .btn:hover
    background-color skyblue


</style>

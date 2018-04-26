<template>
  <div>
    <el-form :model="form" :rules="rules2" ref="ruleForm2">
      <el-form-item required label="用户名:" :label-width="formLabelWidth">
        <el-input v-model="form.username" placeholder="请输入用户名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="密码" :label-width="formLabelWidth" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="确认密码" :label-width="formLabelWidth" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="性别" :label-width="formLabelWidth">
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option label="男" selected value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item required label="生日" :label-width="formLabelWidth">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item required label="用户介绍:" :label-width="formLabelWidth">
        <el-input v-model="form.introduce" placeholder="请输入个人介绍" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item required label="电话号码:"  :label-width="formLabelWidth">
        <el-input  v-model="form.telphone" type="tel" placeholder="请输入电话号码" ></el-input>
      </el-form-item>
      <div style="display: flex;margin-bottom: 10px;">
        <el-button  @click="getVerificationCode"  class="getVerificationBtn" >
          <div>
            <span>{{isGetVerificationCode}}</span> <span v-if=" isGetVerificationCode != '获取验证码'">s</span>
          </div>
        </el-button>
        <el-input style="margin-left: 10px"  v-model="form.code" type="tel" placeholder="请输入验证码" ></el-input>
      </div>
      <div class="clearfloat">
        <div class="btncon">
          <!--<el-button @click="dialogRegVisible = false">取 消</el-button>-->
          <el-button @click="resetForm">重置</el-button>
          <el-button type="primary" @click="regHhander">注册</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
  import Qs from 'qs'
    export default {
        name: "register",
        data(){
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.form.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码啊'));
            } else if (value != this.form.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
          return {
            formLabelWidth: '120px',
            form: {
              username: '念念公子',
              password: '123456',
              checkPass: '123456',
              gender: '1',
              birthday: '2018-03-21',
              introduce: '这个人很懒，没有留下任何东西...',
              telphone: '15520446752',
              code:''
            },
            rules2: {
              password: [
                { validator: validatePass, trigger: 'blur' }
              ],
              checkPass: [
                { validator: validatePass2, trigger: 'blur' }
              ],
            },
            isGetVerificationCode: "获取验证码"
          }
        },
      methods: {
        getVerificationCode(){
          console.log('获得验证码')
          this.isGetVerificationCode = 60
          let timer = setInterval(() => {
            if (this.isGetVerificationCode <= 0 ){
              clearInterval(timer)
              this.isGetVerificationCode = "获取验证码"
              return
            }
            this.isGetVerificationCode -= 1
            // console.log(this.isGetVerificationCode)
          }, 1000)
          let data = Qs.stringify({ telphone: this.form.telphone})
          this.$http.post('http://120.77.170.124:8080/busis/user/sms.do', data,
            {
              headers:{'Content-Type':'application/x-www-form-urlencoded'},
              withCredentials: true // 允许携带cookie
            }
            ).then((res)=>{
            console.log("已发送")
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        } ,
        resetForm() {
          for( var key in this.form){
            this.form[key] = ""
          }
          // this.$refs[formName].resetFields();
        },
        regHhander(){
          if (this.password != this.checkPass){
            return
          }
          this.$emit('hidden')
          let _this = this
          let data = Qs.stringify(this.form)
          this.$http.post('http://120.77.170.124:8080/busis/user/register.do',
            data,
            {
              headers:{'Content-Type':'application/x-www-form-urlencoded'},
              withCredentials: true // 允许携带cookie
            }

            )
            .then(res => {
              console.log(res.data)
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
        },

      }
    }
</script>

<style scoped lang="stylus">
  .getVerificationBtn
    box-sizing border-box
    color red
    padding 0
    margin-left 20px
    background-color #28d9ff
    div
      width 85px
      text-align center
  .btncon
    float right

  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0

</style>

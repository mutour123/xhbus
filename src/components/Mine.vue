<template>
    <section>
      <div class="login">
        <el-button  @click="dialogLoginVisible = true" v-if="!isLogin" class="btn" type="primary">登录</el-button>
        <el-button  @click="dialogRegVisible = true" v-if="!isLogin" class="btn" type="primary">注册</el-button>
      </div>

      <span v-if="isLogin" class="welcome">欢迎: {{person.username}}</span>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最近路线" name="first">
          <div>
            <keep-alive>
              <component v-bind:is="currentView.LateLine"></component>
            </keep-alive>
          </div>
        </el-tab-pane>
        <el-tab-pane label="收藏路线" name="second">
          <div>
            <keep-alive>
              <component v-bind:is="currentView.Collection"></component>
            </keep-alive>
          </div>
        </el-tab-pane>
        <el-tab-pane label="常用地址" name="third">
          <div>
            <component v-bind:is="currentView.Address"></component>
          </div>
        </el-tab-pane>
      <!--  <el-tab-pane label="通知" name="fourth">
          <div>
            <component v-bind:is="currentView.Notice"></component>
          </div>
        </el-tab-pane>-->
        <el-tab-pane v-if="isLogin" label="个人设置" name="five">
          <div>
            <keep-alive>
              <component v-bind:is="currentView.Setting"></component>
            </keep-alive>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!--//登录弹框-->
      <el-dialog title="登录" :visible.sync="dialogLoginVisible">
        <login v-on:hidden="loginHidden"></login>
      </el-dialog>
      <!--注册-->
      <el-dialog title="注册" :visible.sync="dialogRegVisible">
        <register v-on:hidden="regHidden"></register>
      </el-dialog>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LateLine from './LateLine'
    import Collection from './Collection'
    import CommonAddress from './CommonAddress'
    import Notice from './Notice'
    import Setting from './Setting'
    import Register from './Register'
    import Login from './Login'
    export default {
        name: "mine",
        components: {
          Register,
          Login
        },
        data() {
          return {
            currentView: {
              LateLine: LateLine,
              Collection: Collection,
              Address: CommonAddress,
              Notice: Notice,
              Setting: Setting,
            },
            activeName: 'second',
            dialogLoginVisible: false,
            dialogRegVisible: false,
          }
        },
        computed: {
          ...mapGetters([
            'isLogin',
            'person'
          ])

        },
        methods: {
          handleClick(tab, event) {
            console.log(tab, event)
          },
          regHidden(){
            this.dialogRegVisible = false
          },
          loginHidden(){
            this.dialogLoginVisible = false
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

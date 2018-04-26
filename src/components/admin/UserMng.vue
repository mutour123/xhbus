<template>
    <div style="height: 96%;box-sizing: border-box">
      <div class="userCount" >
        <div class="h3">
          <h3>用户总数：{{tableData3.length}}</h3>
        </div>
        <div class="searchDiv">
          <el-input class="search" v-model="searchMsg" placeholder="请输入内容"></el-input>
          <el-button class="searchBtn" @click="searchUser">搜索</el-button>
        </div>
      </div>
      <!--<hr>-->
      <div class="userInfo">
        <div v-if="isSearch" class="searchReasultPanel">
          <h4>搜索结果：{{this.searchResult.length}}条</h4>
          <span class="el-icon-close closeSearchPanel" @click="closeSearchPanel"></span>
          <el-table
          :data="searchResult"
          style="width: 100%"
        >
          <el-table-column
            label="编号"
            fixed
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日"
            width="140">
          </el-table-column>
          <el-table-column
            prop="telphone"
            label="电话号码"
            width="140">
          </el-table-column>
          <el-table-column
            prop="introduce"
            label="用户介绍"
            width="auto">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleSearchDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </div>
        <div v-else>
          <el-table
            :data="tableData3"
            style="width: 100%"
           >
            <el-table-column
              label="编号"
              fixed
              type="index"
              width="60">
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              width="120">
            </el-table-column>
            <el-table-column
              prop="birthday"
              label="生日"
              width="140">
            </el-table-column>
            <el-table-column
              prop="telphone"
              label="电话号码"
              width="140">
            </el-table-column>
            <el-table-column
              prop="introduce"
              label="用户介绍"
              width="auto">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
  import Qs from 'qs'
  import {mapGetters} from 'vuex'

  export default {
      name: "user_mng",
      data() {
        return {
          searchMsg: "杨小洋",
          isSearch: false,//是否在搜索面板
          searchResult: [],
          count: 1000,
          tableData3: []
        }
      },
      computed: {
        ...mapGetters([
          'adminIsLogin'
        ])
      },
      methods: {
        handleDelete(index, row) {
          console.log(index)
          let data = Qs.stringify({admin_id: 1, user_id: row.user_id})
          this.$http.post('/api/admin/user/delete.do',
            data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res => {
            if(res.data.code == 1) {
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              })
              this.tableData3.splice(index,1)

            }else {
              this.$message({
                showClose: true,
                message: '删除失败',
                type: 'error'
              })
            }
          }).catch(err => {
            console.log(err)
          })
          console.log(row)
        },
        searchUser(){
          this.isSearch = true
          let data = Qs.stringify({username: this.searchMsg})
          this.$http.post('/api/admin/user/query/username.do',
            data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res => {


            this.searchResult = res.data.data.map(item => {
              return JSON.parse(item)
            })
          }).catch(err => {
            console.log(err)
          })
    },
        closeSearchPanel(){
          this.searchMsg = ""
          this.searchResult = []
          this.isSearch = false
        },
        handleSearchDelete(index, row){
          let data = Qs.stringify({
            admin_id: 1,
            user_id: row.user_id
          })
          this.$http.post('/api/admin/user/delete.do',
            data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res => {
            if(res.data.code == 1) {
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              })
            }else {
              this.$message({
                showClose: true,
                message: '删除失败',
                type: 'error'
              })
            }

          }).catch(err => {
            console.log(err)
          })
          this.searchResult.splice(index,1)
        }
      },
      mounted(){
        {
          if (!this.adminIsLogin) {
            this.$router.push('/admin')
          }
          this.$http.get('/api/admin/user/getall.do?admin_id=1&authority=3',
          ).then(res => {
            if (res.data.code = 0) {
              console.log("获取数据失败")
              return
            }
            let user = [{
              "user_id": 22,
              "username": "念念",
              "telphone": "17345678932",
              "birthday": "2018-03-29",
              "head_portrail": "",
              "gender": "0",
              "password": "",
              "introduce": "这个人很懒，没有留下任何东西",
              "authority": "2"
            }]
            // console.log(JSON.stringify(user))
            console.log(res.data.data)
            this.tableData3 = res.data.data
            // console.log(JSON.parse(res.data.data))
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
</script>


<style scoped lang="stylus">
  .userCount
    height 60px
    box-sizing border-box
    border-bottom 1px silver solid
    display flex
    /*box-shadow  0px 2px 2px #666666*/
    .h3
      /*border 1px slateblue solid*/
      padding-right 20px
      width 200px
    .searchDiv
      display flex
      flex-grow 1
      .search, .searchBtn
        align-self center
        height 40px
      .search
        transition 1s

      .searchBtn
        margin-right 40px
        margin-left 20px
  .userInfo
    /*margin-top 4px*/
    height calc(100% - 60px)
    padding 10px
    box-sizing border-box
    overflow auto
  .closeSearchPanel
    /*border 1px slateblue solid*/
    position absolute
    top 0px
    padding 5px
    right 20px
  .closeSearchPanel:hover
    background-color #eeeeee
    font-size 14px
  .searchReasultPanel
    position relative
    /*border 1px slateblue solid*/
    /*background-color slateblue*/

</style>


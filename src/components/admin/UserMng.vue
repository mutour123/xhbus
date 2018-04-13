<template>
    <div style="height: 96%;box-sizing: border-box">
      <div class="userCount" >
        <div class="h3">
          <h3>用户总数：{{count}}</h3>
        </div>
        <div class="searchDiv">
          <el-input class="search" v-model="searchMsg" placeholder="请输入内容"></el-input>
          <el-button class="searchBtn" @click="searchUser">搜索</el-button>
        </div>
      </div>
      <!--<hr>-->
      <div class="userInfo">
        <div v-if="searchResult.length" class="searchReasultPanel">
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
            prop="name"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="date"
            label="生日"
            width="140">
          </el-table-column>
          <el-table-column
            prop="tel"
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
              prop="name"
              label="姓名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              width="120">
            </el-table-column>
            <el-table-column
              prop="date"
              label="生日"
              width="140">
            </el-table-column>
            <el-table-column
              prop="tel"
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
    export default {
      name: "user_mng",
      data() {
        return {
          searchMsg: "杨小洋",
          searchResult: [],
          count: 1000,
          tableData3: [
            {
              id: 1,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 2,
              date: '2016-05-03',
              gender: '男',
              name: '杨小洋',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 3,
              date: '2016-05-03',
              gender: '男',
              name: '张三',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 4,
              date: '2016-05-03',
              gender: '男',
              name: '李四',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 5,
              date: '2016-05-03',
              gender: '男',
              name: '王小虎',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄',
            }
          ]
        }
      },
      methods: {
        handleDelete(index, row) {
          console.log(index)
          this.tableData3.splice(index,1)
          console.log(row)
        },
        searchUser(){
          this.searchResult.push(
            {
              id: 2,
              date: '2016-05-03',
              gender: '男',
              name: '杨小洋',
              tel: '12345678910',
              city: '普陀区',
              introduce: '上海市普陀区金沙江路 1518 弄'
            })
          console.log(this.searchMsg)
        },
        closeSearchPanel(){
          this.searchMsg = ""
          this.searchResult = []
        },
        handleSearchDelete(index, row){
          console.log(index, row)
          this.searchResult.splice(index,1)


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


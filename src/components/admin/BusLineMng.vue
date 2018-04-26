<template>
  <div>
    <div>
      <div class="searchDiv ">
        <h3><span v-toggle class="el-icon-plus showAdd" ></span> &nbsp;添加管理员</h3>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.telphone"></el-input>
          </el-form-item>
          <el-form-item label="职位介绍">
            <el-input v-model="form.introduce"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <hr>
    </div>
    <div class="table">
      <h3>管理员列表</h3>
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
  </div>
</template>

<script>
  import Qs from 'qs'
  import {mapGetters} from 'vuex'
  export default {
    name: "bus-line-mng",
    data(){
      return {
        form: {
          su_id: 1,
          username: '杨小洋',
          telphone: '18384514013',
          introduce: '经理'
        },
        tableData3: []
      }
    },
    computed: {
    ...mapGetters([
        'adminIsLogin'
      ])
    },
    methods: {
      onSubmit(){
        if (!this.form){
          return
        }
        let data = Qs.stringify(this.form)
        this.$http.post('/api/admin/su/add.do',
          data,
          {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
        ).then(res => {
          console.log(res.data)
          if (res.data.code != 0) {
            let form = {}
            Object.assign(form, this.form)
            this.tableData3.push(this.form)

            this.$message({
              showClose: true,
              message: '添加成功',
              type: 'success'
            })

            /*for (var key in this.form) {
              this.form[key] = ""
            }*/
          }else{
            console.log(res.data.message)
            this.$message({
              showClose: true,
              message: `添加失败: ${res.data.message }`,
              type: 'error'
            })
          }
        }).catch(err => {
          console.log(err)
        })
        console.log("添加")
      },
      cancel(){
        for (var key in this.form){
          this.form[key] = ""
        }
      },
      handleSearchDelete(index, row){
        console.log(index)
        console.log(row)

        this.tableData3.splice(index,1)
        let data = Qs.stringify({admin_id: 1, user_id: row.user_id})
        this.$http.post('/api/admin/user/delete.do',
          data,
          {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
        ).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    mounted(){
      {
        if(!this.adminIsLogin){
          return
        }
        console.log('被挂载')
        this.tableData3 = []
        this.$http.get('/api/admin/user/getall.do?admin_id=1&authority=2',
        ).then(res => {
          if (res.data.code = 0) {
            console.log("获取数据失败")
            this.$router.push('/admin')
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
          console.log(JSON.stringify(user))
          this.tableData3 = res.data.data
          console.log(JSON.parse(res.data.data))
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .searchDiv
    padding 20px
    transition .5s
    box-shadow 1px 1px 1px 1px #666
    border 1px solid #c1c1c1
    height 40px
    overflow hidden
  .showDiv
    height auto
  .table
    padding 20px
    box-shadow 1px 1px 1px 1px #666
    border 1px solid #c1c1c1
  .showAdd
    cursor pointer
</style>

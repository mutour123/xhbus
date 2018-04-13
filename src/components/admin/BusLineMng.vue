<template>
  <div>
    <div>
      <div class="searchDiv ">
        <h3><span v-toggle class="el-icon-plus showAdd" ></span> &nbsp;添加管理员</h3>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.tel"></el-input>
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
          prop="name"
          label="姓名"
          width="150">
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
  </div>
</template>

<script>
  export default {
    name: "bus-line-mng",
    data(){
      return {
        form: {
          name: '杨小洋',
          tel: '12345678910',
          introduce: '经理'
        },
        tableData3: [
          {
            name: '王小虎',
            tel: '12345678910',
            introduce: '经理',
          },
          {
            name: '张三',
            tel: '12345678910',
            introduce: '秘书',
          },
        ]
      }
    },
    methods: {
      onSubmit(){
        if (this.form){
          return
        }
        this.tableData3.push(this.form)
        console.log("添加")
      },
      cancel(){
        this.form = {}
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

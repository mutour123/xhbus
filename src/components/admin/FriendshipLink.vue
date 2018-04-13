<template>
    <div>
      <div class="panel">
        <h3><span v-toggle class="el-icon-plus " ></span> &nbsp;友情链接</h3>
        <div class="conPanle">
          <div>
            <el-table
              :data="friendshipLink"
              style="width: 100%"
            >
              <el-table-column
                label="编号"
                fixed
                type="index"
                width="60">
              </el-table-column>
              <el-table-column
                prop="title"
                label="网站名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="href"
                label="链接"
                width="250">
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
          <div>
            <div class="from">
              <el-form  label-width="80px" :model="formLabelAlign">
                <el-form-item label="链接名称">
                  <el-input v-model="formLabelAlign.name" placeholder="如：西华大学"></el-input>
                </el-form-item>
                <el-form-item label="链接地址">
                  <el-input v-model="formLabelAlign.address" placeholder="如：http://www.xhu.edu.cn/"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">添加</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "friendship-link",
    data(){
      return {
        friendshipLink: [
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          },
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          },
          {
            title: "西华大学",
            href: "http://www.xhu.edu.cn/"
          },
          {
            title: "高德地图",
            href: "https://www.amap.com/"
          },
          {
            title: "易班",
            href: "http://www.yiban.cn/"
          }
        ],
        formLabelAlign: {
          name: '微力实验室',
          address: 'www.weilylab.com',
        }
      }
    },
    methods: {
      onSubmit(){
        // this.hrefTitle.push(this.formLabelAlign.name)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .showAdd
    cursor pointer
  .conPanle
    display flex
  .conPanle>div:first-child
    padding 20px
    box-sizing border-box
    flex-grow 1
  .conPanle>div:last-child
    padding 20px
    width 300px
    border-left 1px #666 solid
  /*background-color red*/
  .showAdd
    cursor pointer
  .panel
    padding 20px
    transition .5s
    box-shadow 1px 1px 1px 1px #666
    border 1px solid #c1c1c1
    height 40px
    overflow hidden
  .showDiv
    height auto
  .from
    box-shadow 1px 1px 1px 1px #666
    padding 10px
</style>




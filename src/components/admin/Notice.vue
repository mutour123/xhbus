<template>
    <div>
      <div class="panel">
        <h3><span v-toggle class="el-icon-plus " ></span> &nbsp;发布公告</h3>
        <div class="conPanle">
          <div>
              <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="标题">
                  <el-input v-model="formLabelAlign.title "  placeholder="如：西华大学"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                <el-input :rows="4" type="textarea" style="" :maxlength="150" ref="text" v-model="formLabelAlign.content "  placeholder=""></el-input>
                  <span style="float: right;color:#606266">{{150 - formLabelAlign.content.length}}/150</span>
              </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">添加</el-button>
                </el-form-item>
              </el-form>
            </div>
        </div>
      </div>
      <hr>
      <div class="panel1" >
        <h3> &nbsp;公告</h3>
        <hr>
        <div class="conItem">
          <div v-if="announcement.length">
            <div class="noticeItem" v-for="(item, index) in announcement">
              <h5><span style="cursor: pointer;"  v-twotoggle>{{index+1}}. {{item.title}}</span> <i @click="deleteNotice(item.announce_id, index)"  style="float: right" class="el-icon-delete"></i> </h5>
              <div class="itemContent">
                {{item.content}}
              </div>
            </div>
          </div>
          <div v-else>
            <h3>暂无</h3>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import Qs from 'qs'
  import {mapGetters} from 'vuex'

  export default {
      name: "notice",
      data(){
        return {
          formLabelAlign: {
            title: "关于项目",
            content: "西华BUS是一个多平台的项目，该项目使用分为安卓， 网站， 和微信公众号。 网页部分，采用目前十分流行的mvvm框架vue的全家桶做开发技术栈， 并使用组件化开发方式开发。 其中技术栈包括vue axois vuex vue-router。基础组件使用饿了么的element ui. 前后台组件一共有30个。路由有14个。代码量粗略估计有4000多行。公交信息，和周边信息的数据，来自高德地图。 功能包括： 公交信息查询，收藏路线 后台管理包括：用户管理，管理员管理，第三方合作管理，和公告管理。",
            user_id: 0
          },
          announcement: []
        }
      },
      computed: {
        ...mapGetters([
          'adminIsLogin'
        ])
      },
      methods: {
        deleteNotice(id, index){
          let data = Qs.stringify({announcement_id: id})
          this.$http.post('/api/admin/announce/delete.do',
            data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res  => {
            console.log(res.data)
            this.$message({
              showClose: true,
              message: '删除成功',
              type: 'success'
            })
            this.announcement.splice(index, 1)

          })
            .catch(err => {
              console.log(err)
            })
        },
        onSubmit(){
          let data = Qs.stringify(this.formLabelAlign)
          this.$http.post('/api/admin/announce/add.do',
            data,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then(res => {
              if (res.data.code == 1){
                this.$message({
                  showClose: true,
                  message: '发布成功',
                  type: 'success'
                })
                this.$http.get('/api/admin/announce/get.do')
                  .then(res => {
                    console.log(res.data)
                    this.announcement = res.data.data
                  })
                  .catch(err => {
                    console.log(err)
                  })

              }
          }).catch(err => {
            this.$message({
              showClose: true,
              message: '发布失败，请重新发送',
              type: 'error'
            })
          })
        },
      },
      mounted(){
        {
          if (!this.adminIsLogin) {
            this.$router.push('/admin')
          }
          this.$http.get('/api/admin/announce/get.do')
            .then(res => {
              console.log(res.data)
              this.announcement = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
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
  .panel1
    padding 20px
    box-shadow 1px 1px 1px 1px #666
    border 1px solid silver
    min-height 200px
  .showDiv
    height auto
  .from
    box-shadow 1px 1px 1px 1px #666
    padding 10px
  .conItem
    padding-left 20px
  .itemContent
    text-index 50px
    padding 10px
    line-height 24px
    padding-top 0
    display none
  .showTwoDiv
    display block
  .noticeItem
    border-bottom 1px silver solid
</style>

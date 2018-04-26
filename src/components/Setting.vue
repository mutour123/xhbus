<template>
  <div class="setting">
    <!--头像-->
    <div class="headimg">
      <div>
        <div>
          <img :src="head_portrail.head_portrail" class="image" ref="headimg" alt="">
        </div>
        <div class="test-button">
          <label class="btn lab-input" for="uploads" >
            <span>选择</span>
            <!--<span @click.stop.prevent.self="sureSubmit">确认提交</span>-->
          </label>
          <input type="file" id="uploads" class="myfile" accept="image/*" @change="loadImg($event)">
        </div>
      </div>


    </div>
    <!--基本信息-->
    <div class="baseInfo">
      <el-form :model="form"  ref="ruleForm2">
        <el-form-item required label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="person.username" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item  label="性别" :label-width="formLabelWidth">
          <el-select v-model="person.gender" placeholder="请选择性别">
            <el-option label="男" selected value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  label="生日" :label-width="formLabelWidth">
          <el-date-picker v-model="person.birthday" type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="用户介绍:" :label-width="formLabelWidth">
          <el-input v-model="person.introduce" placeholder="请输入个人介绍" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item required label="电话号码:"  :label-width="formLabelWidth">
          <el-input  v-model="person.telphone" type="tel" placeholder="请输入电话号码" ></el-input>
        </el-form-item>
        <div class="clearfloat">
          <div class="mbtncon">
            <!--<el-button @click="dialogRegVisible = false">取 消</el-button>-->
            <el-button type="primary" @click="modifyHhander">修改</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <!--弹出框-->
    <el-dialog
      title="剪切"
      :visible.sync="dialogVisible">
      <div class="clippingcon">
        <div class="clipping">
          <vueCropper
            ref="cropper"
            :img="selectedImgUrl"
            :autoCrop = "true"
            :canMove = "option.canMove"
            :canMoveBox = "true"
            :fixedNumber = "option.fixedNumber"
            :fixedBox = "option.fixed"
          ></vueCropper>
        </div>
      </div>
      <div class="btncon">
        <el-button class="cancel" @click = 'cancelHander'>取消</el-button>
        <el-button type="primary" class="sure" @click="suerHander">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import vueCropper from 'vue-cropper'
  import { mapGetters } from 'vuex'
  import Qs from 'qs'
  export default {
    name: "setting",
    computed: {
      ...mapGetters([
        'person'
      ])
    },
    data() {
      return {
        file: {},//图片
        isSubmit: false,//切换按钮
        option: {
          size: 1,
          full: false,
          outputType: 'png',
          canMove: true,
          fixedBox: false,
          original: false,
          canMoveBox: true,
          canScale: true,
          autoCrop: true,
          fixed: true,
          fixedNumber: [3, 4],
        },
        vueCropper: vueCropper,
        formLabelWidth: '120px',
        form: {},
        dialogVisible: false,
        selectedImgUrl: '../../static/meinv.jpg',
        head_portrail: {
          head_portrail: '../../static/headdfault.jpg',
          // head_portrail: 'http://120.77.170.124:8080/busis/upload/imgs/20180424/1524578439971_517.jpg',
        }
      }
    },
    components: {
      vueCropper
    },
    methods: {
      /**
       * 修改
       */
      modifyHhander(){
        delete this.form.password
        console.log(this.form)
        let data = Qs.stringify(this.form)
        this.$http.post('/api/user/modify.do', data)
          .then(res => {
            if (res.data.code == 1){
              this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              })
            }else {
              this.$message({
                showClose: true,
                message: '修改失败',
                type: 'error'
              })
            }
          }).catch(err => {
          this.$message({
            showClose: true,
            message: `修改失败:${err}`,
            type: 'error'
          })
        })
        /*Promise.all([
          this.$http.post('/api/user/modify.do', data),
          this.$http.post('/api/user/modify/head_portrail.do',data1
            // {headers: {'Content-Type': 'multipart/form-data'}}
          )
        ]).then(res => {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
        }).catch(err => {
          console.log(err)
          this.$message({
            showClose: true,
            message: '修改失败',
            type: 'error'
          })
        })*/
      },
      /**
       * 确认裁剪
       */
      suerHander(){
        this.$refs.cropper.getCropData((data) => {
          this.head_portrail.head_portrail = data
          this.$refs.cropper.clearCrop()
          this.dialogVisible = false
        })
        //发起请求表示成功
        // this.$refs.cropper.getCropBlob((data) => {
          let formData = new FormData();
          formData.append('user_id', 1);
          console.log(this.file)
          formData.append('file', this.file);
          this.$http.post('/api/user/modify/head_portrail/file.do',
            formData,
            {headers:{'Content-Type': 'multipart/form-data'}}
          ).then(res => {
            if (res.data.code == 1) {
              this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              })
            }else {
              this.$message({
                showClose: true,
                message: `修改失败`,
                type: 'error'
              })
            }
          })
            .catch(err => {
              this.$message({
                showClose: true,
                message: `修改失败 ${err}`,
                type: 'error'
              })
            })
        // })
      },
      /**
       * 取消裁剪
       */
      cancelHander(){
        this.$refs.cropper.clearCrop()
        this.dialogVisible = false
      },
      /**
       * 选择图片
       * @param e
       */
      loadImg(e){
        let file = this.file = e.target.files[0]
        let reader = new FileReader()
        let _this = this
        reader.readAsDataURL(file)
        reader.onload =function(){
          _this.dialogVisible = true
          _this.selectedImgUrl = this.result
        }
      },
    },
    mounted(){
      this.form = this.person
      console.log("testtesttestst")
      console.log(this.person.head_portrail)
      if (this.person.head_portrail != " "){
        this.head_portrail.head_portrail = JSON.parse(this.person.head_portrail)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .setting
    padding-top 30px
    display flex
    .headimg
      position relative
      width 210px
      padding 2px
      height 320px
      border 1px silver solid
    .myfile
      display none
    .lab-input
      position absolute
      bottom 2px
      left 50%
      margin-left -50px
      border-radius 5px
      font-size 14px
      cursor pointer
      width 100px
      line-height 26px
      background-color #3399ff
      color white
      text-align center
    .lab-input:hover
      font-size 12px
    ul
      margin 0
      padding 0
      list-style none
      li
        display flex
        div
          padding 5px
        .label
          text-align right
          width 100px
        .content
          margin-left 8px
          flex-grow 1
  .clippingcon
    display flex
    justify-content center
    .clipping
      align-items center
      height 400px
      width 300px
  .cancel
    margin-left 20%
  .sure
    float right
    margin-right 20%
  .btncon
    padding-top 20px
  .mbtncon
    float right
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0
  .image
    width 210px
    height 280px
  .baseInfo
    margin-left 20px
    flex-grow 1

</style>

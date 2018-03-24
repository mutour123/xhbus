<template>
  <div class="setting">
    <!--头像-->
    <div class="headimg">
      <div>
        <div>
          <img :src="headimg" class="image" ref="headimg" alt="">
        </div>
        <div class="test-button">
          <label class="btn lab-input" for="uploads" >选择</label>
          <input type="file" id="uploads" class="myfile" accept="image/*" @change="loadImg($event)">
        </div>
      </div>
    </div>
    <!--基本信息-->
    <div>
      <el-form :model="form"  ref="ruleForm2">
        <el-form-item required label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="form.username" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item  label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" selected value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  label="生日" :label-width="formLabelWidth">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="用户介绍:" :label-width="formLabelWidth">
          <el-input v-model="form.introduce" placeholder="请输入个人介绍" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item required label="电话号码:"  :label-width="formLabelWidth">
          <el-input  v-model="form.telphone" type="tel" placeholder="请输入电话号码" ></el-input>
        </el-form-item>
        <div class="clearfloat">
          <div class="mbtncon">
            <el-button @click="dialogRegVisible = false">取 消</el-button>
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
        <img :src="selectedImgUrl"
             class="clipping" ref="headimg1" alt="">
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
  export default {
    name: "setting",
    data() {
      return {
        formLabelWidth: '120px',
        form: {
          username: '念念公子',
          gender: '男',
          birthday: '2018-3-22',
          introduce: '这个人很懒，什么也没有留下',
          telphone: '12345678910'
        },
        dialogVisible: false,
        selectedImgUrl: '',
        cropper: {},//裁剪对象
        headimg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1693588259,1862034499&fm=58&u_exp_0=1126554644,1528729089&fm_exp_0=86&bpow=320&bpoh=480',
        option: {
          aspectRatio: 3 / 4,//裁剪框比例 1：1
          viewMode : 1,//显示
          guides :false,//裁剪框虚线 默认true有
          dragMode : "move",
          background : true,// 容器是否显示网格背景
          movable : true,//是否能移动图片
          cropBoxMovable :false,//是否允许拖动裁剪框
          cropBoxResizable :false,//是否允许拖动 改变裁剪框大小
          minContainerHeight : 400,
          minContainerWidth : 300
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
        this.$http.post('/api/modify',this.form).then(res => {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
        }).catch(err => {
          this.$message({
            showClose: true,
            message: '修改失败',
            type: 'error'
          })
        })
      },
      /**
       * 确认裁剪
       */
      suerHander(){
        let canvas = this.cropper.getCroppedCanvas({
          width: 90,
          height: 120
        })
        this.cropper.destroy()
        this.cropper = null
        let image1 = this.$refs.headimg1
        $(image1).attr('src','')
        this.dialogVisible = false
        // let image = this.$refs.headimg
        // $(image).attr('src', canvas.toDataURL() )
        this.headimg = canvas.toDataURL()
      },
      /**
       * 取消裁剪
       */
      cancelHander(){
        this.cropper.destroy()
        this.cropper = null
        let image1 = this.$refs.headimg1
        $(image1).attr('src','')
        this.dialogVisible = false
      },
      /**
       * 选择图片
       * @param e
       */
      loadImg(e){
        let file = e.target.files[0]
        let reader = new FileReader()
        let _this = this
        reader.readAsDataURL(file)
        let image1 = this.$refs.headimg1
        reader.onload =function(){
          _this.dialogVisible = true
          // _this.selectedImgUrl = this.result
          $(image1).attr('src', this.result )
          // console.log(image1)
          //初始化cropper
          _this.cropper = new Cropper(image1, _this.option)
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
  .setting
    padding-top 30px
    display flex
    .headimg
      position relative
      width 90px
      padding 2px
      height 150px
      border 1px silver solid
    .myfile
      display none
    .lab-input
      position absolute
      bottom 2px
      left 50%
      margin-left -25px
      border-radius 5px
      font-size 14px
      cursor pointer
      width 50px
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
          /*background-color red*/
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
      max-width 80%
      max-height 400px
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
    width 90px
    height 120px
</style>

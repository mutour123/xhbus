<template>
  <div>
    <div class="addAdress">
      <div class="value">
        <el-input v-model="addValue" placeholder="请输入内容" clearable></el-input>
      </div>
      <el-button @click="addHander" type="primary">添加</el-button>
    </div>
    <div class="addAdressList">
      <ul>
        <li v-for="(item, index) in addressArr" :data-index="index">
          {{( index + 1)}}. {{  item}}
          <span @click="delHander($event)" title="删除" class="el-icon-close delete"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "common-address",
    data(){
      return {
        addValue: '西华大学',
        addressArr: [
          '天府三街',
          '犀浦快铁站',
          '成都医学院'
        ]
      }
    },
    methods: {
      addHander(){
        let set = new Set(this.addressArr)
        if (set.has(this.addValue)){
          this.$message({
            showClose: true,
            message: '该地点已经存在',
            type: 'warning'
          })
          this.addValue = ''
          return
        }
        this.addressArr.push(this.addValue)
        this.addValue = ''
      },
      delHander(e){
        let target = e.target
        let index = $(target).parent().attr('data-index')
        this.addressArr.splice(index, 1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .addAdress
    display flex
  .value
    margin-right 5px
    flex-grow 1
  .addAdressList
    padding 10px
    ul
      list-style none
      margin 0
      padding 0
      li
        padding 8px
        /*border 1px salmon solid*/
      li:hover
        border-radius 5px
        background-color skyblue
      .delete
        cursor pointer
        float right
        border-radius 100%
        padding 2px
        /*background-color #ff5b32*/
        /*border 1px #ff5b32 solid*/
      .delete:hover
        font-size 18px
</style>

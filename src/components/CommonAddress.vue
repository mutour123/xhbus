<template>
  <div>
    <div v-if="isLogin">
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
    <div v-else>
      <h2>你还没有登录，请先登录...</h2>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters([
        'isLogin'
      ])
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
        // store.set("commonaddress", this.addressArr)
        this.addValue = ''
      },
      delHander(e){
        let target = e.target
        let index = $(target).parent().attr('data-index')
        this.addressArr.splice(index, 1)
      },

    getCommonAddress:function(){
      /*getHisttory:()=>{
      console.log("this++++++++++++++++++++")
      console.log(this)
      console.log("初始+++++++++++++++")
      console.log(this.historyTaskList)*/
      // this.addressArr = store.get("commonaddress") ? store.get("commonaddress") : []
      // this.historyTaskList.reverse()
      /*     console.log("======================")
           console.log(this.historyTaskList)*/
      }
    },
    mounted(){
      // console.log(store)
      // this.getCommonAddress()
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

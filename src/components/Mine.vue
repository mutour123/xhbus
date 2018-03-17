<template>
    <section>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最近路线" name="first">最近路线</el-tab-pane>
        <el-tab-pane label="收藏路线" name="second">收藏路线</el-tab-pane>
        <el-tab-pane label="常用地址" name="third">常用地址</el-tab-pane>
        <el-tab-pane label="通知" name="fourth">通知</el-tab-pane>
      </el-tabs>
    </section>
</template>

<script>
    export default {
        name: "mine",
        data() {
          return {
            activeName: 'second'
          };
        },
        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          }
        }
    }
</script>

<style scoped lang="stylus">
  .tabs
    margin-top -20px
</style>

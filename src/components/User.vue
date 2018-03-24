<template>
    <div id="user">
      <m-header></m-header>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <m-footer></m-footer>
    </div>
</template>

<script>
  import MHeader from './m-header'
  import MFooter from './m-footer'
    export default {
        name: "user",
      components: {
        MHeader,
        MFooter
      }
    }
</script>

<style scoped>

</style>

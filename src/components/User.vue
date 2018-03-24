<template>
    <div id="user">
      <m-header></m-header>
      <index-page></index-page>
      <m-footer></m-footer>
    </div>
</template>

<script>
  import MHeader from './m-header'
  import MFooter from './m-footer'
  import IndexPage from './IndexPage'
    export default {
        name: "user",
      components: {
        MHeader,
        MFooter,
        IndexPage
      }
    }
</script>

<style scoped>

</style>

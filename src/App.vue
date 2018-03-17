<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from './components/m-header'
  import MFooter from './components/m-footer'
export default {
  name: 'App',
  components: {
    MHeader,
    MFooter
  }

}
</script>

<style lang="stylus">
  body
    margin 0

</style>

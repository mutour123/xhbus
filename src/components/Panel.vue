<template>
    <div>
      <route v-for="(item, index) in transferResult.plans" :key="index" :itemData="item" :transferForm="transferResult.originName" :transferTo="transferResult.destinationName"></route>
    </div>
</template>

<script>
  import Route from '../base/Route'
  export default {
    name: "panel",
    components: {
      Route
    },
    props:[
      'transferResult'
    ]
  }
</script>

<style scoped>

</style>

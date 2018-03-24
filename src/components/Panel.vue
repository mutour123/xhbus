<template>
    <div>
      <route
        v-for="(item, index) in transferResult.plans"
        :key="index"
        :itemData="item"
        :transferForm="transferResult.originName"
        :transferTo="transferResult.destinationName"
        :start_longitude="transferResult.origin.lng"
        :start_latitude="transferResult.origin.lat"
        :end_longitude="transferResult.destination.lng"
        :end_latitude="transferResult.destination.lat"
        :isCollected="isCollected"
      ></route>
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
      'transferResult',
      'isCollected'
    ]
  }
</script>

<style scoped>

</style>

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
        :collection_id=item.collection_id
        v-on:delete="deleteCollection"
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
      'isCollected',
    ],
    methods: {
      deleteCollection(data){
        this.$emit('delete', data)
        }
    }
  }
</script>

<style scoped>

</style>

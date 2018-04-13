<template>
    <div>
      <div id="mapContainer">这里是地图</div>
    </div>
</template>

<script>
  export default {
    name: "Mmap",
    mounted(){
      var map = new AMap.Map('mapContainer',{
        zoom: 10,
      });
      this.$store.commit('setMap', map);
    }
  }
</script>

<style scoped lang="stylus">
  #mapContainer
    /*border 1px salmon solid*/
    margin-left 20px
    height 400px
</style>

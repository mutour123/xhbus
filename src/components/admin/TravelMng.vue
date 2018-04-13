<template>
    <div>
      <div class="section">
        <h3>路线收藏情况</h3>
        <hr>
        <div class="dataPanel">
          <div style="height: 400px; width: 400px;">
            <canvas ref="myChart" height="400" width="400px" ></canvas>
          </div>
          <div>
            <ul>
              <li>一共收藏了多100条路线</li>
              <li>收藏次数最多的路线是：723</li>
              <li>出行最多的事</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>地点收藏情况</h3>
        <hr>
        <div class="dataPanel">
          <div style="height: 400px; width: 400px;">
            <canvas ref="myChart1" height="400" width="400px" ></canvas>
          </div>
          <div>
            <ul>
              <li>一共收藏了1000个地点</li>
              <li>收藏次数最多的地点是：西华大学南大门站</li>
              <li>出行最多的事</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    name: "travel-mng",
    mounted(){
      let ctx = this.$refs.myChart.getContext("2d")
      let ctx1 = this.$refs.myChart1.getContext("2d")
      let myChart = new Chart(ctx,{
        type: 'bar',
        data: {
          labels: ["723", "720", "p04", "地铁一号线", "地铁二号线", "532"],
          datasets: [{
            label: '出行最多的路线',
            data: [13, 2, 3, 1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
        /*  scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }*/
        }
      })

      let myChart1 = new Chart(ctx1,{
        type: 'bar',
        data: {
          labels: ["西华大学西大门", "犀浦地铁站", "天府广场", "武侯祠", "青城山", "天府三街"],
          datasets: [{
            label: '出行最多的路线',
            data: [13, 2, 3, 1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          /*  scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }*/
        }
      })
    }
  }
</script>

<style scoped lang="stylus">
  .section
    padding 20px
    box-shadow 0px 0px 1px 1px #666 inset
    margin-bottom 20px
    /*border-bottom 1px slateblue solid*/
    .dataPanel
      display flex
    .dataPanel>div:last-child
      border-bottom 0px slateblue solid
      flex-grow 1

</style>

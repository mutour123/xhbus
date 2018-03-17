import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage'
import Mine from '../components/Mine'
import Transfer from '../components/Transfer'
import LineSearch from '../components/LineSearch'
import Station from '../components/Station'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage,
      children: [
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '/transfer',
          component: Transfer
        },
        {
          path: '/linesearch',
          component: LineSearch
        },
        {
          path: '/station',
          component: Station
        }
      ]
    }
  ]
})

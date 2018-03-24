import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage'
import Mine from '../components/Mine'
import Transfer from '../components/Transfer'
import LineSearch from '../components/LineSearch'
import Station from '../components/Station'
import User from '../components/User'
import Admin from '../components/Admin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: User,

      // component: IndexPage,
      // redirect: '/mine',
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
          name: 'LineSearch',
          component: LineSearch
        },
        {
          path: '/station',
          component: Station
        }
      ]
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})

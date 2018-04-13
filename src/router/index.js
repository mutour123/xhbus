import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../components/Mine'
import Transfer from '../components/Transfer'
import LineSearch from '../components/LineSearch'
import Station from '../components/Station'
import User from '../components/User'
import Admin from '../components/admin/Admin'
import Mmap from '../components/Mmap'
import Index from '../components/Index'
import SearchNear from '../components/SearchNear'
import UserMng from '../components/admin/UserMng'
import TranelMng from '../components/admin/TravelMng'
import NearAd from '../components/admin/NearAd'
import CooperationMng from '../components/admin/CooperationMng'
import BusLineMng from '../components/admin/BusLineMng'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: User,
      redirect: '/index',
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
        },
        {
          path: '/map',
          component: Mmap
        },
        {
          path: '/index',
          component: Index
        },
        {
          path: 'search_nearBy',
          component: SearchNear
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/usermng',
          component: UserMng
        },
        {
          path: '/travelmng',
          component: TranelMng
        },
        {
          path: '/nearad',
          component: NearAd
        },
        {
          path: '/cooperationMng',
          component: CooperationMng
        },
        {
          path: '/buslinemng',
          component: BusLineMng
        }
      ]
    }
  ]
})

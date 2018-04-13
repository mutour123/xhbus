const mutations = {
  login(state, person) {
    state.isLogin = true
    state.person = person
  },
  setMap(state, map) {
    state.map = map
  },
  changeCity(state, item){
    state.localCity = item
  },
  changeLocal(state, local){
    state.localCity = local
  },
  setSearchMap(state, map){
    state.searchMap = map
  }
}
export default mutations

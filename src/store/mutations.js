const mutations = {
  login(state, person) {
    state.isLogin = true
    state.person = person
  },
  adminLogin(state, adminPerson) {
    state.adminIsLogin = true
    state.adminPerson = adminPerson

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
  },
  changeTransferPolicy(state, transferPolicy) {
    state.transferPolicy = transferPolicy
  }
}
export default mutations

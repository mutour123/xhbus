const mutations = {
  login(state, person) {
    state.isLogin = true
    state.person = person
  }
}

export default mutations

const state = {
  currentVal: 111
}

const mutations = {
  CHANGEVAL(state,val) {
    state.currentVal = val
  }
}

const actions = {
  changeVal:({commit},val)=>{
    commit('CHANGEVAL',val)
  }
}

const getters = {
  currentVal(state){
    return state.currentVal
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}

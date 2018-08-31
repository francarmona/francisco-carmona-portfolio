
const state = {
  active: undefined
};

const mutations = {
  setActive(state, activeLink) {
    state.active = activeLink;
  }
};

const getters = {
  activeLink(state) {
    return state.active;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    token: null,
    id: null,
    photos: []
  },
  mutations: {
    setSession(state, data) {
      state.token = data.token;
      state.id = data.id;
    },
    setPhotos(state, data) {
      state.photos = data;
    }
  },
  actions: {
  },
  modules: {
  }
})

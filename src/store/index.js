import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: 'farmbotSimulator',
  storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status:{
      token:null,
      broker:null,
      botId:null

    }
  },
  mutations: {
    setStatus(state, status) {
      // let localStatus = localStorage.getItem('status', true);
      for(let i in status){
        state.status[i] = status[i]
        // localStorage.setItem(i, status[i]);
      }
    }
  },
  actions: {
    setStatus (context, status) {
      context.commit('setStatus', status)
    }
  },
  getters: {
    status (state) {
      // for(let i in localStorage)
      return state.status
    }
  },
  plugins: [vuexLocal.plugin]
})

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'vue-test',
  storage: window.localStorage
})

Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    getContacts(state) {
      return [...state.contacts];
    }
  },
  mutations: {
    addContacts(state, payload) {
      state.contacts = [...payload];
    },
    addToContacts(state, payload) {
      state.contacts.push(payload);
    }
  },
  actions: {
    addToContacts({commit}, contact) {
      commit('addToContacts', contact);
    }
  },
  plugins: [vuexPersist.plugin]
})
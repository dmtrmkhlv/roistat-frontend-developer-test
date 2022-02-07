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
    contacts: [],
    sortOrder: {},
  },
  getters: {
    getContacts(state) {
      return [...state.contacts];
    },
    getAllContactToOneLevel(state) {
      let contacts = [...state.contacts];
      const sortContactsInAllLevel = (array) => {
        array.sort(function (a, b) {
            if (a[state.sortOrder.by] > b[state.sortOrder.by]) {
              return state.sortOrder.asc;
            }
            if (a[state.sortOrder.by] < b[state.sortOrder.by]) {
              return -state.sortOrder.asc;
            }
            return 0;
          });
        array.forEach(elem => {
          if (elem.sub.length > 0) {
            sortContactsInAllLevel(elem.sub)
          }
        });
      }
      sortContactsInAllLevel(contacts);

      let newContacts = [];
      const getAllContactToOneLevel = (array, margin) => {
        array.forEach(elem => {
          elem.margin = margin;
          newContacts.push(elem)
          if (elem.sub.length > 0) {
            getAllContactToOneLevel(elem.sub, margin + 5)
          }
        });
      }
      getAllContactToOneLevel(contacts, 0);
      return newContacts;
    },
  },
  mutations: {
    setSortOrder(state, payload){
        state.sortOrder = payload;
      },
    addContacts(state, payload) {
      state.contacts = [...payload];
    },
    addToContacts(state, payload) {
      if (payload.chiefId == "") {
        state.contacts.push(payload);
      } else {
        const findContactByChiefId = (array, chiefId) => {
          try {
            array.forEach(elem => {
              let foundIndexOfСontact = array.find((contact) => contact.id === payload.chiefId);
              if (foundIndexOfСontact === undefined) {
                findContactByChiefId(elem.sub, chiefId)
              } else {
                throw {
                  reason: "finded",
                  foundIndexOfСontact: foundIndexOfСontact
                }
              }
            });
          } catch ({
            reason,
            foundIndexOfСontact
          }) {
            if (reason) {
              foundIndexOfСontact.sub.push(payload);
            }
          }
        }
        findContactByChiefId(state.contacts, payload.chiefId);
      }
    }
  },
  actions: {
    addToContacts({commit}, contact) {
      commit('addToContacts', contact);
    }
  },
  plugins: [vuexPersist.plugin]
})

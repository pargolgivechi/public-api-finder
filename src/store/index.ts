import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://api.publicapis.org'

export default new Vuex.Store({
  state: {
    items: [],
    categories: [],
    categoryItems: [],
    randomItem: null
  },
  mutations: {
    setItems (state, items) {
      state.items = items.entries.sort((a: any, b: any) => (a.API > b.API) ? 1 : ((b.API > a.API) ? -1 : 0)).slice(0, 10)
    },
    setAllItems (state, items) {
      state.items = items.entries.sort((a: any, b: any) => (a.API > b.API) ? 1 : ((b.API > a.API) ? -1 : 0))
    },
    setCategories (state, categories) {
      state.categories = categories
    },
    setCategoryItems (state, categoryItems) {
      state.categoryItems = categoryItems.entries.slice(0, 3)
    },
    setAllCategoryItems (state, categoryItems) {
      state.categoryItems = categoryItems.entries
    },
    setRandomItem (state, randomItem) {
      state.randomItem = randomItem.entries[0]
    },
    sortItemsAsc (state) {
      state.items = state.items.sort((a: any, b: any) => (a.API > b.API) ? 1 : ((b.API > a.API) ? -1 : 0))
    },
    sortItemsDesc (state) {
      state.items = state.items.sort((a: any, b: any) => (a.API < b.API) ? 1 : ((b.API < a.API) ? -1 : 0))
    }
  },
  actions: {
    getItems ({ commit }) {
      axios.get('/entries')
        .then(response => {
          commit('setItems', response.data)
        })
    },
    getAllItems ({ commit }) {
      axios.get('/entries')
        .then(response => {
          commit('setAllItems', response.data)
        })
    },
    getCategories ({ commit }) {
      axios.get('/categories')
        .then(response => {
          commit('setCategories', response.data)
        })
    },
    getCategoryItems ({ commit }, categoryType) {
      axios.get(`/entries?category=${categoryType}`)
        .then(response => {
          commit('setCategoryItems', response.data)
        })
    },
    getAllCategoryItems ({ commit }, categoryType) {
      axios.get(`/entries?category=${categoryType}`)
        .then(response => {
          commit('setAllCategoryItems', response.data)
        })
    },
    getRandomItem ({ commit }) {
      axios.get('/random')
        .then(response => {
          commit('setRandomItem', response.data)
        })
    }
  }
})

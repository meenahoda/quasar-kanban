import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'

import localStoragePlugin from 'plugins/localStorage'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [ localStoragePlugin ],
  modules: { app }
})

export default store

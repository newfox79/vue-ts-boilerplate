import Vue from 'vue'
import Vuex from 'vuex'

// * Example of adding module exports
// import { getModule } from 'vuex-module-decorators';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  modules: {},
})

// * Example of adding module exports
// export const testModule = getModule(test, store)

export default store

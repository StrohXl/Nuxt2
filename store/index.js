import Vue from 'vue'
import Vuex from 'vuex'
import * as notification from './notification'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules:{
      notification
    }
  })
}
export default createStore

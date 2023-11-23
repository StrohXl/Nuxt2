import Vue from 'vue'
import Vuex from 'vuex'
import * as notification from './notification'
import * as valoracion from './valoracion'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules:{
      notification,
      valoracion
    }
  })
}
export default createStore

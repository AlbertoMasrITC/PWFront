import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {

    categorias: [],
    personal: []

  },
  mutations: {

    SET_CATEGORIAS(state, categorias) {

      state.categorias = categorias;

    },
    SET_PERSONAL(state, personal) {


      state.personal = personal;

    }

  },
  actions: {

    setCategorias({commit}) {

      axios.get('http://localhost:3000/categorias')
      .then( responde => {

        commit('SET_CATEGORIAS', responde.data.categorias);

      })

    },
    setPersonal({commit}) {

      axios.get('http://localhost:3000/personas')
      .then( responde => {

        commit('SET_PERSONAL', responde.data.personas);

      })

    },
    crearCategoria({commit}, {params, onComplete, onError}) {

      axios.post('http://localhost:3000/categorias', params)
      .then(onComplete)
      .catch(onError)

    },
    crearPersona({commit}, {params, onComplete, onError}) {

      axios.post('http://localhost:3000/personas', params)
      .then(onComplete)
      .catch(onError)

    }

  },
  modules: {
  }
})

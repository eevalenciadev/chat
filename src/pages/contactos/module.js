import Usuario from "../../api/usuario";

const module = {
  namespaced: true,
  state: () => ({
    lista: [],
    detalle: {},
  }),
  mutations: {
    asignarLista: function(state, payload) {
      state.lista = payload;
    },
    asignarDetalle: function(state, payload) {
      state.detalle = payload;
    },
  },
  actions: {
    obtener: async function({ commit }) {
      var response = await Usuario.Obtener();
      if (response.ok) {
        let resultado = await response.json();
        commit("asignarLista", resultado);
      }
    },
    detalle: async function({ commit }, payload) {
      var response = await Usuario.Detalle(payload);
      if (response.ok) {
        let resultado = await response.json();
        commit("asignarDetalle", resultado);
      }
      return response;
    },
  },
  modules: {},
};

export default module;

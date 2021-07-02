const module = {
  namespaced: true,
  state: () => ({
    visible: true,
    elementos: [
      {
        icono: "mdi-contacts",
        nombre: "Contactos",
        ruta: "/contactos",
      },
    ],
  }),
  mutations: {
    mostrar: function(state, payload) {
      state.visible = payload;
    },
  },
  actions: {},
};

export default module;

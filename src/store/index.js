import Vue from "vue";
import Vuex from "vuex";
import components from "../components/module";
import pages from "../pages/module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    components,
    pages,
  },
});

export default store;

import inicio from "./index.vue";
import contactos from "./contactos/index.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: inicio,
  },
  {
    path: "/contactos",
    name: "Contactos",
    component: contactos,
  },
];

export default routes;

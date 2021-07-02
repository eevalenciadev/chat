<template>
  <v-navigation-drawer v-model="visible" app clipped dark>
    <v-list nav dense>
      <v-list-item-group
        v-model="grupo"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          v-for="(elemento, ei) in elementos"
          :key="ei"
          :to="elemento.ruta"
        >
          <v-list-item-icon>
            <v-icon>{{ elemento.icono }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ elemento.nombre }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: function() {
    return {
      grupo: null,
    };
  },
  computed: {
    visible: {
      get: function() {
        return this.$store.state.components.drawer.visible;
      },
      set: function(payload) {
        this.$store.commit("components/drawer/mostrar", payload);
      },
    },
    elementos: function() {
      return this.$store.state.components.drawer.elementos;
    },
  },
};
</script>

<style>
.v-navigation-drawer.theme--dark .v-list-item--active {
  color: lightskyblue !important;
}

.v-navigation-drawer a.v-list-item--link {
  text-decoration: none !important;
}
</style>

<template>
  <v-app-bar app clipped-left dense dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-icon>mdi-wechat</v-icon> Chat Web
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    drawer: {
      get: function() {
        return this.$store.state.components.drawer.visible;
      },
      set: function(payload) {
        this.$store.commit("components/drawer/mostrar", payload);
      },
    },
  },
};
</script>

<style></style>

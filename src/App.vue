<template>
  <v-app>
    <appbar />
    <drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/appbar/index.vue";
import drawer from "./components/drawer/index.vue";

export default {
  name: "Chat",
  components: {
    appbar,
    drawer,
  },
};
</script>

<template>
  <v-card>
    <v-card-title>
      Perfil
    </v-card-title>
    <v-card-text>
      <v-row class="text-center">
        <v-col cols="12">
          <v-avatar size="130" class="elevation-8">
            <v-img :src="require('../../assets/detalle.png')" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <div class="text-h4">
            {{ contacto.name }}
          </div>
          <div class="text-h6">
            <v-icon>mdi-phone-log</v-icon>
            {{ contacto.phone }}
          </div>
          <div class="text-h6">
            <v-icon>mdi-domain</v-icon>
            {{ contacto.company.name }}
          </div>
          <div class="text-h6">
            <v-icon>mdi-email</v-icon>
            {{ contacto.email }}
          </div>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="4" v-for="(accion, ai) in acciones" :key="ai">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab dark small color="primary" v-bind="attrs" v-on="on">
                <v-icon>{{ accion.icono }}</v-icon>
              </v-btn>
            </template>
            <span>{{ accion.nombre }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      acciones: [
        {
          icono: "mdi-video",
          nombre: "Videollamada",
        },
        {
          icono: "mdi-phone",
          nombre: "Llamada",
        },
        {
          icono: "mdi-wechat",
          nombre: "Mensaje",
        },
      ],
    };
  },
  computed: {
    contacto: function() {
      return this.$store.state.pages.contactos.detalle;
    },
  },
};
</script>

<style></style>

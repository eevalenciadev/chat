<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Contactos
          </v-card-title>
          <v-card-text>
            <v-list subheader>
              <v-list-item
                v-for="(contacto, ci) in lista"
                :key="ci"
                link
                @click="detalle(contacto.id)"
              >
                <v-list-item-avatar class="elevation-7">
                  <v-img
                    :alt="`${contacto.name} avatar`"
                    :src="require('../../assets/contacto.png')"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ contacto.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contacto.phone }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-btn icon>
                    <v-icon>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-message-processing</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
        <v-dialog v-model="dialogs.detalle" max-width="500">
          <detalle />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import detalle from "./detalle.vue";

export default {
  components: { detalle },
  data: function() {
    return {
      dialogs: {
        detalle: false,
      },
    };
  },
  computed: {
    lista: function() {
      return this.$store.state.pages.contactos.lista;
    },
  },
  methods: {
    detalle: function(id) {
      this.$store.dispatch("pages/contactos/detalle", id).then((response) => {
        if (response.ok) {
          this.dialogs.detalle = true;
        }
      });
    },
  },
  created: function() {
    this.$store.dispatch("pages/contactos/obtener");
  },
};
</script>

<style></style>

<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list>
      <v-subheader>Activar tu cuenta</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="item.disabled == true && true"
        >
          <v-list-item-icon>
            <v-icon
              v-text="
                item.disabled == true
                  ? 'mdi-alert-circle-outline'
                  : item.error == true
                  ? 'mdi-alpha-x-circle-outline'
                  : item.process == true
                  ? 'fas fa-circle-notch fa-spin'
                  : 'mdi-check'
              "
              :color="
                item.disabled == true
                  ? '#424242'
                  : item.error == true
                  ? 'red'
                  : item.process == true
                  ? 'white'
                  : 'green'
              "
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >{{ item.text }}
              <template v-if="item.process == true">
                {{ number }}
              </template>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    number: 5,
    items: [
      {
        text: 'Validar Identidad',
        icon: 'mdi-clock',
        iconAlert: 'mdi-alert-circle-outline',
        disabled: false,
        process: false,
        error: false,
        select: true
      },
      {
        select: false,
        text: 'Adquirir Membresia',
        icon: 'mdi-account',
        iconAlert: 'mdi-alert-circle-outline',
        disabled: true,
        process: false,
        error: false,
      },
      {
        select: false,
        text: 'Verificando Documentos',
        iconAlert: 'mdi-alert-circle-outline',
        icon: 'mdi-flag',
        disabled: true,
        process: false,
        error: false,
      },
    ],
  }),
  methods: {
    validarIdentidad() {},
  },
}
</script>

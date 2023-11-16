<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list>
      <v-subheader>Activar tu cuenta</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="item.disabled == true && true"
          @click="
            i == 0
              ? validarIdentidad()
              : i == 1
              ? adquirirMembresia()
              : validarDocumentos()
          "
        >
          <v-list-item-icon>
            <v-icon
              v-text="
                item.state == 'select'
                  ? 'mdi-arrow-right'
                  : item.state == 'disabled'
                  ? 'mdi-alert-circle-outline'
                  : item.state == 'error'
                  ? 'mdi-alpha-x-circle-outline'
                  : item.state == 'process'
                  ? 'mdi-reload'
                  : item.state == 'success' && 'mdi-check'
              "
              :color="
                item.state == 'disabled'
                  ? '#424242'
                  : item.state == 'error'
                  ? 'red'
                  : item.state == 'process' || item.state == 'select'
                  ? 'white'
                  : 'green'
              "
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >{{ item.text }}
              <template v-if="item.state == 'process'">
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
  methods: {
    validarIdentidad() {
      this.items[0].state = 'process'
      this.interval = setInterval(() => {
        if (this.number != 0) {
          this.number = this.number - 1
        }
        if (this.number == 0) {
          this.items[0].state = 'success'
          this.items[0].disabled = true
          this.items[0].process = true
          this.items[1].disabled = false
          this.items[1].state = 'select'
          this.selectedItem = 1
          this.number = 5
          clearInterval(this.interval)
        }
      }, 1000)
    },
    adquirirMembresia() {
      this.items[1].state = 'process'
      this.interval = setInterval(() => {
        if (this.number != 0) {
          this.number = this.number - 1
        }
        if (this.number == 0) {
          this.items[1].state = 'success'
          this.items[1].disabled = true
          this.items[1].process = true
          this.items[2].disabled = false
          this.items[2].state = 'select'
          this.selectedItem = 2
          this.number = 3
          clearInterval(this.interval)
        }
      }, 1000)
    },
    validarDocumentos() {
      this.items[2].state = 'process'
      this.interval = setInterval(() => {
        if (this.number != 0) {
          this.number = this.number - 1
        }
        if (this.number == 0) {
          this.items[2].state = 'success'
          this.items[2].disabled = true
          this.items[2].process = true
          clearInterval(this.interval)
        }
      }, 1000)
    },
  },
  data: () => ({
    selectedItem: 0,
    number: 5,
    interval: '',
    items: [
      {
        text: 'Validar Identidad',
        state: 'select',
        process: false,
        disabled: false,
      },
      {
        text: 'Adquirir Membresia',
        state: 'disabled',
        process: false,
        disabled: true,
      },
      {
        text: 'Verificando Documentos',
        state: 'disabled',
        disabled: true,
        process: false,
      },
    ],
  }),
}
</script>

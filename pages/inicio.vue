<template>
  <v-card class="card mt-md-4 mx-auto" style="background-color: #6ccff6">
    <v-row dense class="px-md-4 px-5 py-2 ">
      <v-col cols="12" >
        <v-list class="v-list-validate-user" nav dense>
        <v-subheader class="barlowc-sb f18 rh white--text mt-sm-2 mt-md-5 px-6 text-center d-flex justify-center">
          <p>
            <template v-if="res == 0">
            Para disfrutar de todos los beneficios de COEX, debes cumplir los
            siguientes requisitos
          </template>
          <template v-if="res == 1">
            Por ultimo, para activar tu cuenta, debes de adquirir un plan de
            membresia
          </template>
          <template v-if="res == 2">
            Tus documentos deben de ser revisados
          </template>
          <template v-if="res == 3">
            Felicidades tu cuenta ha sido activada
          </template>
          </p>
        </v-subheader>
        <v-row justify="center" class="mt-10">
          <v-col cols="12" xs="12" sm="6" md="5" lg="4">
            <v-list-item-group v-model="selectedItem">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :disabled="item.disabled == true && true"
                :class="
                  item.state == 'select' || item.state == 'process'
                    ? 'green accent-4 white--text'
                    : item.disabled == true &&
                      'grey lighten-2 v-list-item-disabled '
                "
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
                        ? 'mdi-clock-time-five'
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
                  <v-list-item-title class="text-center"
                    >{{ item.text }}
                    <template v-if="item.state == 'process'">
                      {{ number }}
                    </template>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  methods: {
    validarIdentidad() {
      this.items[0].state = 'process'
      this.items[0].disabled = true
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
          this.res = 1
        }
      }, 1000)
    },
    adquirirMembresia() {
      this.items[1].disabled = true
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
          this.res = 2
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
          this.res = 3
        }
      }, 1000)
    },
  },
  data: () => ({
    selectedItem: 0,
    number: 5,
    interval: '',
    res: 0,
    items: [
      {
        text: 'Validar tus documentos de identidad',
        state: 'select',
        process: false,
        disabled: false,
      },
      {
        text: 'Adquirir plan o membresia',
        state: 'disabled',
        process: false,
        disabled: true,
      },
      {
        text: 'Tus documentos deben ser revisados',
        state: 'disabled',
        disabled: true,
        process: false,
      },
    ],
  }),
}
</script>

<style>
.v-list-validate-user {
  background: transparent !important;
  color: #fff;
}
.v-list-item-disabled {
  border-radius: 0 !important;
  color: #00000090 !important;
}
</style>

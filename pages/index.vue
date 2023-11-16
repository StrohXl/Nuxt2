<template>
  <v-layout

  >
  <Calendario/>
  </v-layout>
</template>

<script>
import Calendario from '~/components/Calendario.vue';
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Calendario
  }
}
</script>

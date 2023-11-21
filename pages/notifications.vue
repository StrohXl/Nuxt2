<template>
  <div class="d-flex justify-center">
    <v-card
      elevation="3"
      class="pa-3 mt-3 mt-sm-4 mt-md-5"
      :style="`width:${
        $vuetify.breakpoint.xs
          ? '100%'
          : $vuetify.breakpoint.width > 700 && '650px'
      }`"
    >
      <div class="d-flex align-baseline">
        <h1 class="rh barlowc-m">Notificaciones</h1>
        <v-spacer />

        <div
          class="capr cursor-pointer blueItem rubik-r"
          @click="deleteAllNotification"
        >
          Eliminar notificaciones
        </div>
      </div>

      <list-notifications
        :getNotifications="getNotifications"
        :count="count"
        :pageNotification="true"
      />
      <div class="d-flex justify-center">
        <v-btn
          class="my-1 my-md-2 capr"
          @click="verMas"
          text
          v-if="getNotifications.length + 1 > count"
        >
          Ver Mas
        </v-btn>
        <not-have-notifications :getNotifications="getNotifications" />
      </div>
    </v-card>
  </div>
</template>
<script>
import listNotifications from '~/components/shared/listNotifications.vue'
import notHaveNotifications from '~/components/shared/notHaveNotifications.vue'
export default {
  components: { notHaveNotifications, listNotifications },
  name: 'Notifications',
  data() {
    return {
      count: 11,
      notifications: this.$store.state.notifications,
    }
  },
  computed: {
    getNotifications() {

      return this.$store.getters.getNotifications
    },
  },
  methods: {
    deleteAllNotification() {
      this.$store.commit('deleteAllNotifications')
    },
    verMas() {
      this.count += 10
    },
  },
}
</script>

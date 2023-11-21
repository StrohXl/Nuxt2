<template>
  <v-badge
    color="red"
    :content="getNotifications.length"
    :value="getNotifications.length"
    class="mx-6 mt-3 cursor-pointer barlowc-sb"
    offset-y="7"
  >
    <v-menu bottom offset-y left v-model="menu" :close-on-content-click="false">
      <template #activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          class="rotate-notification mt-n3 mr-n1 cursor-pointer"
          size="30"
          v-on="on"
        >
          far fa-bell
        </v-icon>
      </template>
      <div
        class="white pa-3"
        :style="`width:${$vuetify.breakpoint.mdAndUp ? '400px' : '300px'}`"
      >
        <div class="d-flex align-baseline">
          <div class="rmh barlowc-m">Notificaciones</div>
          <v-spacer />

          <div
            class="capr cursor-pointer blueItem rubik-r"
            @click="deleteAllNotification"
          >
            Eliminar notificaciones
          </div>
        </div>
        <v-container
          :class="`pa-0 mt-3 d-flex flex-column align-center ${
            getNotifications.length == 0 && 'text-center'
          }`"
        >
          <list-notifications
            :getNotifications="getNotifications"
            :count="count"
          />
          <not-have-notifications :getNotifications="getNotifications" />
          <v-btn @click="verTodas" text> Ver Todas </v-btn>
        </v-container>
      </div>
    </v-menu>
  </v-badge>
</template>

<script>
import listNotifications from './listNotifications.vue'
import notHaveNotifications from './notHaveNotifications.vue'
export default {
  components: { notHaveNotifications,listNotifications },
  name: 'Notifications',
  data() {
    return {
      count: 6,
      menu: false,
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
    verTodas() {
      this.menu = false
      this.$router.push('/notifications')
    },
  },
}
</script>

<style scoped>
.rotate-notification {
  transform: rotate(15deg) !important;
}
</style>

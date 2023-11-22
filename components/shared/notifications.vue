<template>
  <v-badge
    color="red"
    :content="newNotifications"
    :value="newNotifications"
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
            @click="deleteAllNotifications"
          >
            Eliminar notificaciones
          </div>
        </div>
        <v-container
          :class="`pa-0 mt-3 d-flex flex-column align-center ${
            notifications.length == 0 && 'text-center'
          }`"
        >
          <list-notifications
            :getNotifications="notifications"
            :count="count"
          />
          <not-have-notifications :getNotifications="notifications" />
          <v-btn @click="verTodas" text v-if="notifications.length != 0">
            Ver Todas
          </v-btn>
        </v-container>
      </div>
    </v-menu>
  </v-badge>
</template>

<script>
import listNotifications from './listNotifications.vue'
import notHaveNotifications from './notHaveNotifications.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  components: { notHaveNotifications, listNotifications },
  name: 'Notifications',
  data() {
    return {
      count: 6,
      menu: false,
    }
  },
  computed: {
    ...mapGetters({
      newNotifications: 'getNewNotifications',
    }),
    ...mapState({
      notifications: (state) => state.notification.notifications,
    }),
  },
  methods: {
    ...mapMutations({
      deleteAllNotifications: 'deleteAllNotifications',
    }),
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

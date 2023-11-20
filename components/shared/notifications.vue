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

          <v-btn icon @click="deleteAllNotification">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </div>
        <v-container
          :class="`pa-0 mt-3 d-flex flex-column align-center ${
            getNotifications.length == 0 && 'text-center'
          }`"
        >
          <v-list class="v-list-notification" three-line>
            <template v-for="(item, n) in getNotifications">
              <v-divider v-bind:key="n" v-if="n > 0 && n < 5"></v-divider>
              <v-list-item
                v-if="n < 5"
                :key="n"
                flat
                height="66"
                class="d-flex elevation-0 pr-1 pl-2 v-list-item-notification"
              >
                <v-list-item-avatar size="50" class="mr-4 borderAvatar">
                  <v-img :src="item.avatar" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title> {{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="v-list-subtitle-description-notification"
                    >{{ item.description }}</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-action
                  v-if="item.is_new"
                  class="mt-2"
                  style="align-self: center"
                >
                  <v-badge color="red" offset-x="16" offset-y="12" overlap dot>
                    <v-btn icon @click="deleteNotification(item.title)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </v-badge>
                </v-list-item-action>
                <v-list-item-action
                  v-else
                  class="mt-2"
                  style="align-self: center"
                >
                  <v-btn icon @click="deleteNotification(item.title)">
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>

          <template v-if="getNotifications.length == 0">
            No hay Notificationes
          </template>
          <v-btn @click="verTodas" text v-else>
            Ver Todas
          </v-btn>
        </v-container>
      </div>
    </v-menu>
  </v-badge>
</template>

<script>
export default {
  name: 'Notifications',
  data() {
    return {
      count: 2,
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
    deleteNotification(id) {
      this.$store.commit('deleteOneNotification', id)
    },
  },
}
</script>

<style scoped>
.rotate-notification {
  transform: rotate(15deg) !important;
}
.v-list-item-notification {
  border-radius: 5px;
}
.v-list-item-notification .v-list-item__action {
  margin-left: 0 !important;
}
.v-list-subtitle-description-notification {
  line-clamp: 1 !important;
  -webkit-line-clamp: 1 !important;
}
</style>

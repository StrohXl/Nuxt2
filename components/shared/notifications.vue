<template>
  <v-badge
    color="red"
    :content="count"
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
          :class="`pa-0 mt-3 ${getNotifications.length == 0 && 'text-center'}`"
        >
          <v-list class="v-list-notification" three-line>
            <template v-for="(item, n) in getNotifications">
              <v-list-item
                v-if="n < 5"
                :key="n"
                flat
                height="66"
                class="d-flex elevation-0"
              >
                <v-list-item-avatar size="36" class="mr-4 borderAvatar">
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

                <v-list-item-action v-if="item.is_new" class="mt-2">
                  <v-badge color="red" offset-x="16" offset-y="12" overlap dot>
                    <v-btn icon @click="deleteAllNotification">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </v-badge>
                </v-list-item-action>
                <v-list-item-action v-else class="mt-2">
                  <v-btn icon @click="deleteAllNotification">
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>

          <template v-if="getNotifications.length == 0">
            No hay Notificationes
          </template>
        </v-container>
      </div>
    </v-menu>
  </v-badge>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Notifications',
  data() {
    return {
      count: 2,
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
  },
}
</script>

<style scoped>
.rotate-notification {
  transform: rotate(15deg) !important;
}
.v-list-notification > .v-list-item {
  padding: 0;
}
.v-list-subtitle-description-notification {
  line-clamp: 1 !important;
  -webkit-line-clamp: 1 !important;
  width: 100%;
}
</style>

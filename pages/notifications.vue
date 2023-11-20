<template>
  <div>
    <v-card elevation="4" class="pa-3">
      <h1>Notificaciones</h1>
      <v-list class="v-list-notification" three-line>
        <template v-for="(item, n) in getNotifications">
          <v-divider v-bind:key="n" v-if="n > 0 && n < count"></v-divider>
          <v-list-item
            v-if="n < count"
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
            <v-list-item-action v-else class="mt-2" style="align-self: center">
              <v-btn icon @click="deleteNotification(item.title)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
      <v-btn @click="verMas" text v-if="count < getNotifications.length + 1">
        Ver Mas</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'Notifications',
  data() {
    return {
      count: 10,
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
      this.count += 20
    },
    deleteNotification(id) {
      this.$store.commit('deleteOneNotification', id)
    },
  },
}
</script>

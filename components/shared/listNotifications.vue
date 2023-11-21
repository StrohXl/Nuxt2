<template>
  <v-list class="v-list-notification" three-line>
    <template v-for="(item, n) in getNotifications">
      <v-divider v-bind:key="n" v-if="n > 0 && n < count - 1"></v-divider>
      <v-list-item
        v-if="n + 1 < count"
        :key="n"
        flat
        height="66"
        class="d-flex elevation-0 pr-1 pl-2 v-list-item-notification"
      >
        <v-list-item-avatar
          :size="
            $vuetify.breakpoint.xs
              ? 50
              : $vuetify.breakpoint.sm
              ? 55
              : $vuetify.breakpoint.md
              ? 60
              : $vuetify.breakpoint.lg
              ? 65
              : 70
          "
          class="mr-4 borderAvatar"
          style="align-self: center"
        >
          <v-img :src="item.avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title :class="pageNotification ? 'rmh' : 'subr'">
            {{ item.title }}</v-list-item-title
          >
          <v-list-item-subtitle class="capr">{{
            item.date
          }}</v-list-item-subtitle>
          <v-list-item-subtitle
            class="v-list-subtitle-description-notification capr"
            :style="
              pageNotification == false && 'lineClamp: 1; -webkit-line-clamp: 1'
            "
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
</template>
<script>
export default {
  name: 'listNotifications',
  props: {
    getNotifications: {
      default: [],
      type: Array,
    },
    count: {
      default: 10,
      type: Number,
    },
    pageNotification: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    deleteNotification(id) {
      this.$store.commit('deleteOneNotification', id)
    },
  },
}
</script>
<style>
.v-list-item-notification .v-list-item__action {
  margin-left: 0 !important;
}
</style>

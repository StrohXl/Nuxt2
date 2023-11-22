<template>
  <v-list three-line nav class="mt-3 mt-sm-4 mt-md-5">
    <v-list-item-group color="primary">
      <template v-for="(item, n) in getNotifications">
        <v-list-item
          v-if="n + 1 < count"
          :key="n"
          height="66"
          class="d-flex elevation-0 pr-1 pl-2 v-list-item-notification"
          @click="updateNotifications(item.id)"
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
                pageNotification == false &&
                'lineClamp: 1; -webkit-line-clamp: 1'
              "
              >{{ item.description }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action
            class="mt-2 align-center"
            style="align-self: center"
          >
            <v-badge
              :value="item.is_new ? 1 : 0"
              color="red"
              offset-x="16"
              offset-y="12"
              overlap
              dot
            >
              <v-btn icon @click.stop="deleteNotification(item.id)">
                <v-icon color="grey darken-3"> mdi-delete </v-icon>
              </v-btn>
            </v-badge>
            <v-btn small icon @click.stop="seeText(item.id)">
              <v-icon color="grey lighten-1"> mdi-chevron-down </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>
<script>
import { mapMutations } from 'vuex'
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
  data() {
    return {
      itemSelect: 0,
    }
  },
  methods: {
    ...mapMutations(['deleteOneNotification', 'updateNotification']),
    updateNotifications(id) {
      this.updateNotification(id)
      this.$router.push('/?query=' + id)
    },
    deleteNotification(id) {
      this.deleteOneNotification(id)
    },
    seeText(id) {
      this.updateNotification(id)
    },
  },
}
</script>
<style>
.v-list-item-notification .v-list-item__action {
  margin-left: 0 !important;
}
</style>

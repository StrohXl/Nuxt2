<template>
  <v-list three-line nav class="mt-1 mt-sm-2 mt-md-3">
    <v-list-item-group color="primary" v-model="selected">
      <template v-for="(item, n) in getNotifications">
        <v-list-item
          v-if="n + 1 < count"
          :key="n"
          height="66"
          class="d-flex elevation-0 pr-1 pl-2 v-list-item-notification"
          @click="updateNotifications(item.id)"
          :style="item.is_new && 'background: #f5f5f5'"
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

          <v-list-item-content style="padding-top: 16px; padding-bottom: 16px">
            <v-list-item-title :class="pageNotification ? 'rmh' : 'capr'">
              {{ item.title }}</v-list-item-title
            >
            <v-list-item-subtitle class="capr">{{
              item.date
            }}</v-list-item-subtitle>
            <v-list-item-subtitle
              class="v-list-subtitle-description-notification capr"
              :style="
                item.select == true
                  ? 'lineClamp: initial; -webkit-line-clamp: initial'
                  : pageNotification == false &&
                    'lineClamp: 1; -webkit-line-clamp: 1'
              "
              >{{ item.description }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action
            class="align-center"
            style="align-self: center; margin: 0"
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
                <v-icon
                  :size="
                    $vuetify.breakpoint.xs
                      ? 20
                      : $vuetify.breakpoint.sm
                      ? 23
                      : 26
                  "
                  color="grey darken-3"
                >
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-badge>
            <v-btn small icon @click.stop="seeText(item.id)" class="mt-1 mt-sm-2 mt-md-2 mt-lg-3 ">
              <v-icon
                :size="
                  $vuetify.breakpoint.xs ? 20 : $vuetify.breakpoint.sm ? 23 : 26
                "
                :style="item.select == true && 'transform: rotate(180deg);'"
                color="grey lighten-1"
              >
                mdi-chevron-down
              </v-icon>
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
  selected: 0,
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
    ...mapMutations([
      'deleteOneNotification',
      'updateNotification',
      'readNotification',
    ]),
    updateNotifications(id) {
      this.updateNotification(id)
      this.$router.push('/')
    },
    deleteNotification(id) {
      this.deleteOneNotification(id)
    },
    seeText(id) {
      this.updateNotification(id)
      this.readNotification(id)
    },
  },
}
</script>
<style>
.v-list-item-notification .v-list-item__action {
  margin-left: 0 !important;
}
</style>

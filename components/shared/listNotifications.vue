<template>
  <v-list
    three-line
    nav
    :class="`${pageNotification == true ? 'mt-1 mt-sm-2 mt-md-3' : ' mt-0 '}  px-0 py-0`"
  >
    <v-list-item-group color="primary" v-model="selected">
      <template v-for="(item, n) in getNotifications">
        <v-list-item
          v-if="n + 1 < count"
          :key="n"
          class="d-flex elevation-0 pr-1 pl-2 v-list-item-notification mb-1"
          @click="updateNotifications(item.id)"
          :style="`${
            item.is_new && 'background: #f3f3f3'
          } ;min-height: 0 !important; ${
            item.select == false && ' height: 75px !important;'
          }`"
        >
          <v-list-item-avatar
            :size="
              pageNotification == false
                ? $vuetify.breakpoint.xs
                  ? 40
                  : $vuetify.breakpoint.sm
                  ? 45
                  : $vuetify.breakpoint.md
                  ? 50
                  : $vuetify.breakpoint.lg
                  ? 55
                  : 60
                : $vuetify.breakpoint.xs
                ? 50
                : $vuetify.breakpoint.sm
                ? 55
                : $vuetify.breakpoint.md
                ? 60
                : $vuetify.breakpoint.lg
                ? 65
                : 70
            "
            class="mr-4 borderAvatar my-0"
            style="align-self: center"
          >
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content style="padding-top: 16px; padding-bottom: 16px">
            <v-list-item-title
              :class="`${
                pageNotification ? 'rmh' : ' text-sm-body-2 text-md-body-1'
              } ${item.is_new && ' bold'}`"
            >
              {{ item.title }}</v-list-item-title
            >
            <v-list-item-subtitle
              :style="item.is_new && 'color:#000'"
              :class="`${
                pageNotification ? 'capr' : 'text-caption text-md-body-2'
              } ${item.is_new && ' bold'}`"
              >{{ item.date }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              :class="`${
                pageNotification ? 'capr' : 'text-caption text-md-body-2'
              } ${item.is_new && ' bold'}`"
              :style="`${
                item.select == true
                  ? 'lineClamp: initial; -webkit-line-clamp: initial'
                  : 'lineClamp: 1; -webkit-line-clamp: 1'
              } ${item.is_new && ' color:#000'}`"
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
                    pageNotification == false
                      ? $vuetify.breakpoint.xs
                        ? 17
                        : $vuetify.breakpoint.sm
                        ? 20
                        : 23
                      : $vuetify.breakpoint.xs
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
            <v-btn small icon @click.stop="seeText(item.id)" class="mt-1">
              <v-icon
                :size="
                  pageNotification == false
                    ? $vuetify.breakpoint.xs
                      ? 17
                      : $vuetify.breakpoint.sm
                      ? 20
                      : 23
                    : $vuetify.breakpoint.xs
                    ? 20
                    : $vuetify.breakpoint.sm
                    ? 23
                    : 26
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

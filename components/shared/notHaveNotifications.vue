<template>
  <div
    class="d-flex flex-column align-center mt-3 mt-sm-4 mt-md-5 mt-lg-6"
    v-if="getNotifications.length == 0"
  >
    <div>
      <v-icon
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
        >far fa-bell</v-icon
      >
    </div>
    <div class="subr mt-3 mt-sm-4 mt-md-5 mt-lg-6">
      <span>No tienes notificaciones</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notHaveNotifications',
  props: {
    getNotifications: {
      default: [],
      type: Array,
    },
  },
}
</script>

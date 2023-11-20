<template>
  <v-badge
    v-if="count>0"
    color="red"
    :content="count"
    class="mx-6 mt-3 cursor-pointer barlowc-sb"
    offset-y="7"
  >
    <v-menu
      bottom
      offset-y
      left
    >
      <template #activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          class="rotate-notification mt-n3 mr-n1 cursor-pointer"
          size="30"
          :color="expert?'#003566': ''"
          v-on="on"
        >
          far fa-bell
        </v-icon>
      </template>
      <div class="white pa-md-4" :style="`width:${$vuetify.breakpoint.mdAndUp?'400px':'250px'}`">
        <div class="d-flex align-baseline">
          <div class="rmh barlowc-m">
            Notificaciones
          </div>
          <v-spacer />
          <div class="f13 cursor-pointer blueItem rubik-r" @click="count=0">
            Eliminar notificaciones
          </div>
        </div>
        <v-container class="pa-0 mt-md-3">
          <v-card
            v-for="(item, n) in notifications"
            :key="n"
            flat
            height="66"
            class="d-flex elevation-0"
          >
            <v-avatar size="36" class="mr-4 borderAvatar">
              <v-img :src="item.avatar" />
            </v-avatar>
            <div style="height: 100%">
              <div class="mt-1">
                <p class="f13 colorBlue rubik-r ma-0">
                  {{ item.name + ' ' + item.last_name + '. ' + item.category + '. ' }}
                  <span class="labelGray f13">{{ item.description }}</span>
                </p>
              </div>
              <div class="text-left f12 rubik-r" style="color: #7E8489">
                {{ item.date }}
              </div>
            </div>
            <v-spacer />
            <div v-if="item.is_new" class="mt-2">
              <v-badge
                color="red"
                offset-x="16"
                offset-y="12"
                overlap
                dot
              >
                <v-icon class="rotate-notification mr-2" size="20">
                  mdi-bell-outline
                </v-icon>
              </v-badge>
            </div>
            <div v-else class="mt-2">
              <v-icon class="rotate-notification mr-2" size="20">
                mdi-bell-outline
              </v-icon>
            </div>
          </v-card>
        </v-container>
      </div>
    </v-menu>
  </v-badge>
</template>

<script>

export default {
  name: 'Notifications',
  props: {
    expert: Boolean,
    notifications:
    {
      type: Array,
      default: () => [
        {
          name: 'asd',
          last_name: 'qwe',
          category: 'Informático',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          description: 'Te ha enviado una solicituddfv,ndfg nrkgn kel;gn klerng ke kerfn gkebn',
          date: '4 de diciembre del 2022'
        },
        {
          name: 'asd',
          last_name: 'qwe',
          category: 'Informático',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          description: 'Te ha enviado una solicitud',
          date: '4 de diciembre del 2022'
        },
        {
          name: 'asd',
          last_name: 'qwe',
          category: 'Informático',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          description: 'Te ha enviado una solicitud',
          date: '4 de diciembre del 2022'
        },
        {
          name: 'asd',
          last_name: 'qwe',
          category: 'Informático',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          description: 'Te ha enviado una solicitud',
          date: '4 de diciembre del 2022'
        },
        {
          name: 'asd',
          last_name: 'qwe',
          category: 'Informático',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          description: 'Te ha enviado una solicitud',
          date: '4 de diciembre del 2022'
        }
      ]
    }
  },
  data () {
    return {
      count: 2
    }
  }
}
</script>

<style scoped>
.rotate-notification {
  transform: rotate(15deg) !important;
}
</style>

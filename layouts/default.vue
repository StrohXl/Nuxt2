<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <sharedNotifications :notifications="notifications" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inicio'
        }
      ],
      notifications: [
        {
          name: 'Jose',
          last_name: 'Martinez',
          category: 'Electricista',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          description: 'Te ha enviado una cotización',
          date: '2 de febrero. 12:32 p.m.'
        },
        {
          name: 'Anderson',
          last_name: 'Moreno',
          category: 'Plomero',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
          description: 'Te ha rechazado una cotizacion',
          date: '22 de febrero, 09:27 a.m.'
        },
        {
          name: 'Henry',
          last_name: 'Fernandez',
          category: 'Carpintero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
          description: 'Te ha programado una visita presencial',
          date: '21 de febrero, 08:21 p.m.'
        },
        {
          name: 'Jose',
          last_name: 'Martinez',
          category: 'Electricista',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          description: 'Te ha enviado una cotización',
          date: '2 de febrero. 12:32 p.m.'
        },
        {
          name: 'Anderson',
          last_name: 'Moreno',
          category: 'Plomero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
          description: 'Te ha rechazado una cotizacion',
          date: '22 de febrero, 09:27 a.m.'
        },
        {
          name: 'Henry',
          last_name: 'Fernandez',
          category: 'Carpintero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
          description: 'Te ha programado una visita presencial',
          date: '21 de febrero, 08:21 p.m.'
        },
        {
          name: 'Jose',
          last_name: 'Martinez',
          category: 'Electricista',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          description: 'Te ha enviado una cotización',
          date: '2 de febrero. 12:32 p.m.'
        },
        {
          name: 'Anderson',
          last_name: 'Moreno',
          category: 'Plomero',
          is_new: true,
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
          description: 'Te ha rechazado una cotizacion',
          date: '22 de febrero, 09:27 a.m.'
        },
        {
          name: 'Henry',
          last_name: 'Fernandez',
          category: 'Carpintero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
          description: 'Te ha programado una visita presencial',
          date: '21 de febrero, 08:21 p.m.'
        },
        {
          name: 'Jose',
          last_name: 'Martinez',
          category: 'Electricista',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          description: 'Te ha enviado una cotización',
          date: '2 de febrero. 12:32 p.m.'
        },
        {
          name: 'Anderson',
          last_name: 'Moreno',
          category: 'Plomero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
          description: 'Te ha rechazado una cotizacion',
          date: '22 de febrero, 09:27 a.m.'
        },
        {
          name: 'Henry',
          last_name: 'Fernandez',
          category: 'Carpintero',
          is_new: false,
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
          description: 'Te ha programado una visita presencial',
          date: '21 de febrero, 08:21 p.m.'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

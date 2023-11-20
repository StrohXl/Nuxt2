export const state = () => ({
  msg: 'holaaaaaa',
  notifications: [
    {
      title: 'Titulo 1',
      last_name: 'Martinez',
      category: 'Electricista',
      is_new: true,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Te ha enviado una cotización asdasdsadsadas',
      date: '2 de febrero. 12:32 p.m.',
    },
    {
      title: 'Titulo 2',
      last_name: 'Moreno',
      category: 'Plomero',
      is_new: true,
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      description: 'Te ha rechazado una cotizacion asd sadsadasdas',
      date: '22 de febrero, 09:27 a.m.',
    },
    {
      title: 'Titulo 3',
      last_name: 'Fernandez',
      category: 'Carpintero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      description: 'Te ha programado una visita presencial',
      date: '21 de febrero, 08:21 p.m.',
    },
    {
      title: 'Titulo 4',
      last_name: 'Martinez',
      category: 'Electricista',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Te ha enviado una cotización',
      date: '2 de febrero. 12:32 p.m.',
    },
    {
      title: 'Titulo 5',
      last_name: 'Moreno',
      category: 'Plomero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      description: 'Te ha rechazado una cotizacion',
      date: '22 de febrero, 09:27 a.m.',
    },
    {
      title: 'Titulo 6',
      last_name: 'Fernandez',
      category: 'Carpintero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      description: 'Te ha programado una visita presencial',
      date: '21 de febrero, 08:21 p.m.',
    },
    {
      title: 'Titulo 7',
      last_name: 'Martinez',
      category: 'Electricista',
      is_new: true,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Te ha enviado una cotización',
      date: '2 de febrero. 12:32 p.m.',
    },
    {
      title: 'Titulo 8',
      last_name: 'Moreno',
      category: 'Plomero',
      is_new: true,
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      description: 'Te ha rechazado una cotizacion',
      date: '22 de febrero, 09:27 a.m.',
    },
    {
      title: 'Titulo 9',
      last_name: 'Fernandez',
      category: 'Carpintero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      description: 'Te ha programado una visita presencial',
      date: '21 de febrero, 08:21 p.m.',
    },
    {
      title: 'Titulo 10',
      last_name: 'Martinez',
      category: 'Electricista',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Te ha enviado una cotización',
      date: '2 de febrero. 12:32 p.m.',
    },
    {
      title: 'Titulo 11',
      last_name: 'Moreno',
      category: 'Plomero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      description: 'Te ha rechazado una cotizacion',
      date: '22 de febrero, 09:27 a.m.',
    },
    {
      title: 'Titulo 12',
      last_name: 'Fernandez',
      category: 'Carpintero',
      is_new: false,
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      description: 'Te ha programado una visita presencial',
      date: '21 de febrero, 08:21 p.m.',
    },
  ],
})
export const mutations = {
  deleteAllNotifications(state) {
    state.notifications = []
  },
  deleteOneNotification(state,id){
    state.notifications = state.notifications.filter(i=>i.title != id)
  }
}
export const actions = {}
export const getters = {
  getNotifications(state) {
    return state.notifications
  },
}

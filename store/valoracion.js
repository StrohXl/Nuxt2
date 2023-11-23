export const state = () => ({
  valoracionDeServicio: {
    valoraciones: {},
    opinion: '',
  },
})
export const mutations = {
  updateValoracion(state, payload) {
    state.valoracionDeServicio = payload
  },
}

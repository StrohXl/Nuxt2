export const state = () => ({
  valoracionDeServicio: {
    opinion: '',
  },
})
export const mutations = {
  updateValoracion(state, text) {
    state.valoracionDeServicio.opinion = text
  },
}

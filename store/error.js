export const state = () => ({
  list: []
})

export const mutations = {
  update(state, item) {
    state.list.push(item)
  }
}

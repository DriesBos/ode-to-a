export const state = () => ({
  cacheVersion: ""
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version)
    })
  }
}

export default {
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      let getError = await app.$storyapi.get("cdn/stories/error", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      })
      let error = getError.data.story
      commit("error/update", error)

      let getGeneral = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "general/"
      })
      let general = getGeneral.data.stories.map(bp => {
        return {
          content: bp.content
        }
      })
      commit("general/update", general)
    }
  }
}

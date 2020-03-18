import Vue from "vue"

import MarkdownItem from "~/components/MarkdownItem.vue"
import FooterForm from "~/components/FooterForm.vue"
import ProjectsContainer from "~/components/ProjectsContainer.vue"
import ProjectsItem from "~/components/ProjectsItem.vue"
import ArtistContainer from "~/components/ArtistContainer.vue"
import ArtistItem from "~/components/ArtistItem.vue"
import ListsItem from "~/components/ListsItem.vue"
import ListsContainer from "~/components/ListsContainer.vue"
import LandingBlok from "~/components/LandingBlok.vue"
import Page from "~/components/Page.vue"
import PageProject from "~/components/PageProject.vue"
import TextBlok from "~/components/TextBlok.vue"
import GraphicBlok from "~/components/GraphicBlok.vue"
import ImagesBlok from "~/components/ImagesBlok.vue"
import TheMoreInfo from "~/components/TheMoreInfo.vue"
import TheMoreSocial from "~/components/TheMoreSocial.vue"
import TheMoreTerms from "~/components/TheMoreTerms.vue"

Vue.component("markdown", MarkdownItem)
Vue.component("blok-footer-form", FooterForm)
Vue.component("blok-projects-container", ProjectsContainer)
Vue.component("blok-projects-item", ProjectsItem)
Vue.component("blok-artist-container", ArtistContainer)
Vue.component("blok-artist-item", ArtistItem)
Vue.component("blok-lists-item", ListsItem)
Vue.component("blok-lists-container", ListsContainer)
Vue.component("blok-landing-blok", LandingBlok)
Vue.component("blok-page", Page)
Vue.component("blok-page-project", PageProject)
Vue.component("blok-text-blok", TextBlok)
Vue.component("blok-graphic-blok", GraphicBlok)
Vue.component("blok-images-blok", ImagesBlok)
Vue.component("the-more-info", TheMoreInfo)
Vue.component("the-more-social", TheMoreSocial)
Vue.component("the-more-terms", TheMoreTerms)

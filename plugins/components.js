import Vue from "vue"

import ProjectsListWrapper from "~/components/ProjectsListWrapper.vue"
import ProjectsListItem from "~/components/ProjectsListItem.vue"
import ArtListWrapper from "~/components/ArtListWrapper.vue"
import ArtListItem from "~/components/ArtListItem.vue"
import InfoblokWrapper from "~/components/InfoblokWrapper.vue"
import InfoblokItem from "~/components/InfoblokItem.vue"
import LandingItem from "~/components/LandingItem.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import PageProject from "~/components/PageProject.vue"
import TextblokItem from "~/components/TextblokItem.vue"
import GraphicItem from "~/components/GraphicItem.vue"
import FooterForm from "~/components/FooterForm.vue"
import ImageGrid from "~/components/ImageGrid.vue"
import ListblokItem from "~/components/ListblokItem.vue"
import TheMoreInfo from "~/components/TheMoreInfo.vue"

Vue.component("blok-projects-list-wrapper", ProjectsListWrapper)
Vue.component("blok-projects-list-item", ProjectsListItem)
Vue.component("blok-art-list-wrapper", ArtListWrapper)
Vue.component("blok-art-list-item", ArtListItem)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-infoblok-wrapper", InfoblokWrapper)
Vue.component("blok-infoblok-item", InfoblokItem)
Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-page-project", PageProject)
Vue.component("blok-textblok-item", TextblokItem)
Vue.component("blok-graphic-item", GraphicItem)
Vue.component("blok-footer-form", FooterForm)
Vue.component("blok-image-grid", ImageGrid)
Vue.component("blok-listblok-item", ListblokItem)
Vue.component("the-more-info", TheMoreInfo)

import Vue from "vue"

import ProjectsListWrapper from "~/components/ProjectsListWrapper.vue"
import ProjectsListItem from "~/components/ProjectsListItem.vue"
import InfoblokWrapper from "~/components/InfoblokWrapper.vue"
import InfoblokItem from "~/components/InfoblokItem.vue"
import LandingItem from "~/components/LandingItem.vue"
import LandingGraphicItem from "~/components/LandingGraphicItem.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import PageProject from "~/components/PageProject.vue"
import TextblokItem from "~/components/TextblokItem.vue"
import FooterForm from "~/components/FooterForm.vue"
import ImageGrid from "~/components/ImageGrid.vue"
import ListblockItem from "~/components/ListblockItem.vue"

Vue.component("blok-projects-list-wrapper", ProjectsListWrapper)
Vue.component("blok-projects-list-item", ProjectsListItem)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-landinggraphic-item", LandingGraphicItem)
Vue.component("blok-infoblok-wrapper", InfoblokWrapper)
Vue.component("blok-infoblok-item", InfoblokItem)
Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-page-project", PageProject)
Vue.component("blok-textblok-item", TextblokItem)
Vue.component("blok-footer-form", FooterForm)
Vue.component("blok-image-grid", ImageGrid)
Vue.component("blok-listblock-item", ListblockItem)

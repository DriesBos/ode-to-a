import Vue from "vue"

import BrandsListItem from "~/components/BrandsListItem.vue"
import LandingItem from "~/components/LandingItem.vue"
import LandingGraphicItem from "~/components/LandingGraphicItem.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import PageBrands from "~/components/PageBrands.vue"
import TextItem from "~/components/TextItem.vue"
import FooterForm from "~/components/FooterForm.vue"
import GridItem from "~/components/GridItem.vue"
import ImageListItem from "~/components/ImageListItem.vue"
import ListItem from "~/components/ListItem.vue"

Vue.component("brandslist", BrandsListItem)
Vue.component("blok-landingitem", LandingItem)
Vue.component("blok-landinggraphicitem", LandingGraphicItem)
Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-pagebrands", PageBrands)
Vue.component("blok-textitem", TextItem)
Vue.component("blok-footerform", FooterForm)
Vue.component("blok-griditem", GridItem)
Vue.component("blok-imagelistitem", ImageListItem)
Vue.component("blok-listitem", ListItem)

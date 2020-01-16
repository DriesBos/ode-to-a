import Vue from "vue"

import BrandsListItem from "~/components/BrandsListItem.vue"
import Landingitem from "~/components/Landingitem.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import PageBrands from "~/components/PageBrands.vue"
import Textitem from "~/components/Textitem.vue"

Vue.component("brandslist", BrandsListItem)
Vue.component("blok-landingitem", Landingitem)
Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-pagebrands", PageBrands)
Vue.component("blok-textitem", Textitem)

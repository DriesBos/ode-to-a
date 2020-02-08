import Vue from "vue"

import ArtListItem from "~/components/ArtListItem.vue"
import ArtListItemSingle from "~/components/ArtListItemSingle.vue"
import BrandsListItem from "~/components/BrandsListItem.vue"
import BrandsListItemSingle from "~/components/BrandsListItemSingle.vue"
import Landingitem from "~/components/Landingitem.vue"
import LandingGraphicItem from "~/components/LandingGraphicItem.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import PageBrands from "~/components/PageBrands.vue"
import Textitem from "~/components/Textitem.vue"
import FooterForm from "~/components/FooterForm.vue"
import GridItem from "~/components/GridItem.vue"
import ImageListItem from "~/components/ImageListItem.vue"
import Listitem from "~/components/Listitem.vue"

Vue.component("blok-artlistitem", ArtListItem)
Vue.component("blok-artlistitemsingle", ArtListItemSingle)
Vue.component("blok-brandslistitem", BrandsListItem)
Vue.component("blok-brandslistitemsingle", BrandsListItemSingle)
Vue.component("blok-landingitem", Landingitem)
Vue.component("blok-landinggraphicitem", LandingGraphicItem)
Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-pagebrands", PageBrands)
Vue.component("blok-textitem", Textitem)
Vue.component("blok-footerform", FooterForm)
Vue.component("blok-griditem", GridItem)
Vue.component("blok-imagelistitem", ImageListItem)
Vue.component("blok-listitem", Listitem)

(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,e,n){"use strict";e.a={mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):e.slugChanged||window.location.reload()}))}}},360:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(356).a],asyncData:function(t){var e="cdn/stories/art/".concat(t.params.slug);return t.app.$storyapi.get(e,{version:"draft"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))},data:function(){return{story:{content:{}}}}},r=n(2),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view view-Single view-ArtSingle"},[e("blok-page-project",{attrs:{blok:this.story.content}}),this._v(" "),e("blok-footer-form")],1)}),[],!1,null,null,null);e.default=component.exports}}]);
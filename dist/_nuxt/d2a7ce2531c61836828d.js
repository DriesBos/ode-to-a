(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{356:function(t,n,o){"use strict";n.a={mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):n.slugChanged||window.location.reload()}))}}},357:function(t,n,o){"use strict";o.r(n);var e={mixins:[o(356).a],asyncData:function(t){return t.app.$storyapi.get("cdn/stories/art",{version:"draft"}).then((function(t){return t.data})).catch((function(n){n.response?(console.error(n.response.data),t.error({statusCode:n.response.status,message:n.response.data})):(console.error(n),t.error({statusCode:404,message:"Failed to receive content form api"}))}))},data:function(){return{story:{content:{}}}},mounted:function(){}},r=o(2),component=Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"view view-Art"},[this.story.content.component?n(this._f("dashify")(this.story.content.component),{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e(),this._v(" "),n("blok-footer-form")],1)}),[],!1,null,null,null);n.default=component.exports}}]);
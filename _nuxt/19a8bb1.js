(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{249:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("5a2c2c3f",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r.r(e);var n=r(1).a.extend({props:{story:{type:Object,required:!0}}}),o=(r(251),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item relative p-2 flex-grow"},[r("nuxt-link",{attrs:{to:{name:"story-slug",params:{slug:t.story.slug}}}},[r("div",{staticClass:"mb-4 rounded-2xl overflow-hidden"},[r("img",{attrs:{src:t.story.featuredImage.url,alt:t.story.title+" featured image"}})]),t._v(" "),r("h4",{staticClass:"leading-none header-font uppercase"},[t._v("\n      "+t._s(t.story.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-gray-500 mb-2 text-xs dark:text-gray-300"},[r("em",[t._v(t._s(new Date(t.story.createdAt).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})))])]),t._v(" "),r("p",{staticClass:"text-black dark:text-white"},[t._v(t._s(t.story.description))])])],1)}),[],!1,null,"9a0a01d8",null);e.default=component.exports},251:function(t,e,r){"use strict";r(249)},252:function(t,e,r){var n=r(53)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.post-item[data-v-9a0a01d8]{\n  flex-basis:24ch\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n}}]);
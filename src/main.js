// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)
  head.htmlAttrs = { lang: 'es' }
  head.meta.push({
    name: 'keywords',
    content: 'Vuejs Bolivia,Javascript Bolivia,ComunidadJS, VueVixensBolivia'
  })

  head.meta.push({
    name: 'designer',
    content: 'Fernando Javier Averanga Aruquipa, nandes2062.github.io'
  })
  
  head.meta.push({
    name: 'description',
    content: 'Comunidad de Vue.js en Bolivia'
  })

  head.meta.push({
    name: 'author',
    content: 'Comunidad boliviana de Vue.js'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}



import pkg from './package'

export default {
  mode: 'universal',

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "BPM Detector",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700&display=swap'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/vue-touch", ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-143613942-2'
    }],
    ['@nuxtjs/google-adsense', {
      id:           "ca-pub-1931055016528391",
      pageLevelAds: true
    }],
    "@nuxtjs/svg-sprite",
    "@nuxtjs/sitemap"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    dir: 'docs'
  },

  sitemap: {
    hostname: 'https://bpmdetector.net',
    gzip: true
  }
}

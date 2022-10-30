export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio | Guilherme Tinen Ortolani',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {hid: 'keywords',name: 'keywords',content: `Ecoder, Guilherme Tinen Ortolani, Guilherme Tinen, Desenvolvdor Frontend, Desenvolvedor Backend, Developer, Frontend Developer, VueJs`},
      {hid: 'author',name: 'author',content: `Guilherme Tinen Ortolani`},
      {hid: 'description',name: 'description',content: `Each one has the power to change world, here is my way... developing and allowing companies achieve your goals through technology. `},

      {hid: 'og:locale',name: 'og:locale',content: `pt_br`},
      {hid: 'og:site_name',name: 'og:site_name',content: `Guilherme Tinen Ortolani`},
      {hid: 'og:title',name: 'og:title',content: `Portfolio`},
      {hid: 'og:type',name: 'og:type',content: `website`},
      {hid: 'og:image',name: 'og:image',content: `https://ecoder.com.br/cover.png`},
      {hid: 'og:url',name: 'og:url',content: `https://ecoder.com.br/`},
      {hid: 'og:description',name: 'og:description',content: `Each one has the power to change world, here is my way... developing and allowing companies achieve your goals through technology. `},
      {hid: 'og:image:width',name: 'og:image:width',content: `1920`},
      {hid: 'og:image:height',name: 'og:image:height',content: `320`},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.jpg' }
    ],
    script: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' },
      {
        src:"https://kit.fontawesome.com/3b5310efad.js", crossorigin:"anonymous"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/responsive.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  styleResources: {
    scss: [
      '~/assets/scss/responsive.scss',
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'G-T1VB956MVJ'
  },

  'google-gtag': {
    // id: 'UA-240578233-1', // required
    id: 'G-T1VB956MVJ', // required
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
      linker:{
        domains:['ecoder.com.br']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: true, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
    additionalAccounts:[]
  },

}

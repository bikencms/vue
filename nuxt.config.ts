// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0'
  },
  sourcemap: false,
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device',
    'nuxt-multi-cache'
  ],
  multiCache: {
    route: {
      enabled: true
    },
    api: {
      enabled: true,
      prefix: '/__nuxt_multi_cache',
      authorization: 'O5ilxqx5k1ZzFMjEVr'
    }
  },
  lazyLoad: {
    images: true,
    appendClass: 'lazyload',
    loadedClass: 'lazyloaded'
  },
  nitro: {
    compressPublicAssets: true,
    storage: {
      fs: {
        driver: 'fs',
        base: './.data/cache'
      }
    },
    publicAssets: [
      {
        maxAge: 60 * 60 * 24 * 365
      }
    ],
     routeRules: {
      '/': {
        swr: 300
      },

      '/movie/**': {
        swr: 3600
      },
    },
    prerender: {
      failOnError: false, 
    }
  },
  app: {
    head: {
      meta: [
        { name: 'google', content: 'notranslate' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://movieaxn.com/images/logo-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://movieaxn.com/images/logo-192x192.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://https://movieaxn.com/images/logo-300x300.png' },
        {
          rel: 'stylesheet',
          href: '/css/fonts.css?dsklhg'
        },
        {
          rel: 'stylesheet',
          href: '/css/style1.css?hhhh'
        },
        {
          rel: 'stylesheet',
          href: '/css/style2.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/style3.css?jjjjjjjjjjjj'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?vasgvdsgd'
        },
        {
          rel: 'stylesheet',
          href: '/css/watch.css?fgewtwgdshssw'
        }
      ],
      script: [
        {
          src: "/js/jquery-3.7.0.min.js",
        },
        {
          src: "/js/embla-carousel.umd.js"
        },
        {
          src: "/js/slick.min.js?ver=1.2.7"
        },
        {
          src: '/js/scrollup.min.js?ver=1.2.7'
        },
        {
          src: '/js/jquery.easing.min.js'
        },
      ]
    }
  },
  $development: {
    appConfig: {
      apiBaseUrl: 'https://api.movieaxn.com/api',
      apiBaseUrlSsr: 'https://api.movieaxn.com/api'
    }
  },
  $production: {
    appConfig: {
      apiBaseUrl: 'https://api.movieaxn.com/api',
      apiBaseUrlSsr: 'https://api.movieaxn.com/api'
    },
    app: {
      head: {
        script: [
          {
            children: 'window.__ITGS_started = Date.now();'
          }
        ],
      }
    }
  }
})

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'xmall-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/css/global.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/interceptor'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
  },

  proxy: {
    '/api': {
      target: 'http://localhost:8080', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      },
    },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/test/login',
            method: 'post',
            propertyName: 'data.token',
          },
          logout: { url: '/api/logout', method: 'get' },
          user: {
            url: '/test/user',
            method: 'post',
            propertyName: 'data',
          },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/logback',
      callback: '/callback',
      home: '/home',
    },
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 7,
      },
    },
    localStorage: false,
  },
  router: {
    middleware: ['auth'],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

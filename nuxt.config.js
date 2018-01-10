const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'counter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#A7C8C9' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.(yml|yaml)$/,
        loaders: ['json-loader', 'yaml-loader'],
        exclude: /(node_modules)/
      });
    },
    vendor: ['jquery', 'semantic-ui-css'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  script: [
    'jquery/dist/jquery.min.js',
    'semantic-ui-css/semantic.min.js'
  ],
  css: [
    'semantic-ui-css/semantic.min.css',
    '~assets/stylesheets/main.scss'
  ],
  router: {
    // https://github.com/nuxt/nuxt.js/issues/1052
    base: process.env.NODE_ENV === 'dev' ? '/' : '/counter/'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'counter',
    lang: 'ja'
  }
};

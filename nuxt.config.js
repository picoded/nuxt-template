module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //{ hid: 'description', name: 'description', content: 'nuxt-project' }
    ],
    script:[
        {
          src:"https://code.jquery.com/jquery-3.2.1.slim.min.js", 
          integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
          crossorigin:"anonymous"
        },
        {
          src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js",
          integrity:"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4",
          crossorigin:"anonymous"
        },
        {
          src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js",
          integrity:"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1",
          crossorigin:"anonymous"
        }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css",
        integrity: "sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M",
        crossorigin:"anonymous" 
      },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        crossorigin:"anonymous" 
      }
    ]
  },
  css: [
    'element-ui/lib/theme-default/index.css',
    '~/assets/vuetify.styl',
    '~/assets/default.css'
  ],
  /*
  ** Plugin configuration
  */
  plugins : [
    'plugins/element-ui.js',
    'plugins/vuetify.js'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // /*
    // ** Run ESLINT on save
    // */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

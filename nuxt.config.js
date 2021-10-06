export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FrontSos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: '', href: '~assets/image/logo.jpg' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
      { rel: 'stylesheet', type: '', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/styles.css'
  ],
  script:[
      {
          src: 'https://kit.fontawesome.com/c2ac644b87.js',
      },
      
      {
      src:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js',
      body: true
  },
  {
      src:'js/scripts.js',
      body:true
  }

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {

    baseURL: 'http://127.0.0.1:3333/api'
    
    },
    
    
    auth: {
    
      strategies: {
      
        local: {
        
        endpoints: {
        
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          
          user: { url: 'me', method: 'get', propertyName: 'data' },
          
          logout: false
        
        }
        
        }
      
      }
    
    },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

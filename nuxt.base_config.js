
let ApiUrl = 'http://wap.yipingxuan.net'

export default {
  env: {
    redirectUrl: 'http://user.yipingxuan.net/callback/wap',
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    middleware: ["device", "checkip"],
  },
  head: {
    script: [
      { src: '/rem/flexible.js', type: 'text/javascript', charset: 'utf-8' },
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js', type: 'text/javascript', charset: 'utf-8' },
      { src: 'https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js', type: 'text/javascript', charset: 'utf-8' },
      { src: 'https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js', type: 'text/javascript', charset: 'utf-8' }
    ],
    title: '次元岛数藏',
    meta: [
      { name: "env", content: "dev" },
      { name: "referrer", content: "never" },
      { charset: "utf-8" },
      {
        name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2064465_knjyvcorbaf.css' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#53a050" },
  // loading: false

  /*
   ** Global CSS
   */
  css: [
    // 项目里要使用的 SCSS 文件
    '@/assets/css/common.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/auth',
    '~/plugins/axios',
    { src: "~/plugins/dateformat", ssr: false },
    { src: "~/plugins/nutui.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/axios']
  ],
  axios: {
    proxy: true,
    baseURL: ApiUrl,
  },
  proxy: {
    '/uploadImg/': {
      target: 'http://upload.yipingxuan.net',
      pathRewrite: {
        '^/uploadImg': '/'
      }
    },
    '/api/': ApiUrl,

  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
    },
    delete: {},
    get: {},
    head: {},
    post: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    put: {},
    patch: {}
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        [
          "@nutui/babel-plugin-separate-import",
          {
            libraryName: "@nutui/nutui",
            libraryDirectory: "dist/packages",
            style: "css"
          }
        ]
      ]
    },
    extend(config, ctx) {
      config.resolve.extensions.push(".sass");
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
};

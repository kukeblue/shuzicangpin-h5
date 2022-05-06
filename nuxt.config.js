// import config from './nuxt.base_config'

// export default config

import config from './nuxt.base_config'

let ApiUrl_Prod = 'https://m.yipingxuan.net'
const extraConfig = {
  env: {
    redirectUrl: 'http://uc.yipingxuan.net/callback/wap',
    mode: 'pro'
  },
  axios: {
    proxy: true,
    baseURL: ApiUrl_Prod,
  },
  proxy: {
    '/uploadImg/': {
      target: 'http://upload.yipingxuan.net',
      pathRewrite: {
        '^/uploadImg' : '/'
      }
    },
    '/api/': ApiUrl_Prod,
  },
}

export default Object.assign(config, extraConfig)
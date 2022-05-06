import qs from 'qs';
import utils from '../utils/common';


export default function ({store, redirect, app: { $axios }}) {
    $axios.onRequest((config) => {
      let data = config.data
      if(config.url === '/api/activity/upload_file') {
        config.headers.post = {'content-type': 'multipart/form-data'}
      }else {
        config.headers.post = {'content-type': 'application/x-www-form-urlencoded'}
        if(config.url === '/api/activity/get_verify_code') {
          config.responseType = "arraybuffer"
        }
        if(process.client){
          config.headers.post['x-real-ip'] = store.state.deviceType.ip
          config.headers.post['x-forwarded-for'] = store.state.deviceType.xforwardedfor
        }else {
          config.headers.post['x-real-ip'] = utils.ip
          config.headers.post['x-forwarded-for'] = utils.xforwardedfor
        }
       
        Object.keys(data).forEach(key=>{
          if(data[key] === undefined || data[key] === null) {
              delete data[key]
          }
        })
        config.data = qs.stringify(data)
      }
      
      return config
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }
import axios, { AxiosRequestConfig } from 'axios'
import { IResponse } from '_ITF/IResponse'

interface CocoRequestConfig extends AxiosRequestConfig {
  coco?: {
    [propName: string]: any
  }
}

let service = axios.create({
  // baseURL: process.env.BASE_API,
  // timeout: 5000,
  // headers: {},
  // transformRequest: (data) => {
  //     // return Qs.stringify(data);
  //     return data;
  // },
  // cancelToken: new CancelToken(c => {
  //   cancel = c
  // })
})

const handleReq = (config: CocoRequestConfig): AxiosRequestConfig => {
  // 定制配置项
  if (config.coco) {
    let options = config.coco
    delete config.coco
    console.log(options)
  }
  return config
}

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    return handleReq(config)
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应处理
const handleResp = (response: IResponse) => {
  if (response.code === 0) {
    return response.data
  } else {
    return Promise.reject(response.data)
  }
}

// 添加响应拦截器
service.interceptors.response.use(
  (response): any => {
    return handleResp(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

// let handler = {
//   get: function(target, key) {
//     return target[key]
//   }
// }

// const Coco = new Proxy(service, handler)
export default service

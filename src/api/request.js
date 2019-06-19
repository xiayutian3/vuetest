import axios from 'axios'

// 判断线上或者线下的环境地址，如果有跨域问题也 需要代理 或者 服务器设置
const baseURL = process.env.API_ROOT;

// 创建axios实例
const service = axios.create({
  // baseURL: "http://......:888/", // api的base_url
  baseURL,
  timeout: 5*1000 // 请求,超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = localStorage.getItem("token") // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改，一般项目中多是从store中获取，这里只是写的基本例子。
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  //此处根据返回的状态code进行具体的判断，代码省略
  error => {
    console.log('err' + error)// for debug

    return Promise.reject(error)
  })

export default service

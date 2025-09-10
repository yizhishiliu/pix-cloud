import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建 Axios 实例
const myAxios = axios.create({
  baseURL: 'http://localhost:8999/api/',
  timeout: 1000,
  withCredentials: true  // 请求时候携带 cookie
})

// Add a request interceptor
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config
  }, function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 全局响应拦截器
axios.interceptors.response.use(function(response) {
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      // 如果不是获取用户信息的请求，并且当前页面不是登录页面，则跳转到登录页面
      if (!response.request.responseURL.includes('/user/get/login') && !window.location.href.includes('/user/login')) {
        message.warn('请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  })

export default myAxios

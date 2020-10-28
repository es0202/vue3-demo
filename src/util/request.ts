import axios, { AxiosPromise } from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { config } from '../../config/index'
/**
 * @description:  axios模块
 */
export class VAxios {
  private axiosInstance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  /**
   * @description: 拦截器配置
   */
  private setupInterceptors() {
    // 请求拦截器配置处理
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (error) => {
        console.log(error)
        return Promise.reject(error)
      }
    )
    // 响应结果拦截器处理
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        const res = response.data
        if (res.Code == 999) {
          //未登录
          window.location.href = '/home/'
        }
        return res
      },
      (error) => {
        console.log(error)
        return Promise.reject(error.message)
      }
    )
  }

  request(option: AxiosRequestConfig): AxiosPromise {
    return this.axiosInstance(option)
    // return new Promise((resolve, reject) => {
    //   this.axiosInstance(option)
    //     .then((data) => {
    //       resolve(data)
    //     })
    //     .catch((err) => {
    //       reject(err)
    //     })
    // })
  }
}
export const request = new VAxios(config)

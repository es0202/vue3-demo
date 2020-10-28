import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { request } from '/@/util/request'
export function register(data: AxiosRequestConfig): AxiosPromise {
  return request.request({ data, url: '/user/register', method: 'post' })
}

export function login(data: AxiosRequestConfig): AxiosPromise {
  return request.request({ data, url: '/user/login', method: 'post' })
}

export function test(data: AxiosRequestConfig): AxiosPromise {
  return request.request({ method: 'get', url: '/user/test' })
}

import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { request } from '/@/util/request'
export function register(data: AxiosRequestConfig): AxiosPromise {
  return request.request(data)
}
export function login(data:AxiosRequestConfig):AxiosPromise{
  return request.request(data)
}
import axios from 'axios'
import { stringify } from 'qs'
import config from '~/config'

const MODE = import.meta.env.MODE

const base = config[MODE]
const _request = axios.create({
  baseURL: base.apiBaseUrl,
  timeout: base.timeout ? base.timeout : 10000,
})

_request.interceptors.request.use(
  (config) => {

  },
  (error) => {

  }
)

_request.interceptors.response.use(
  (response) => {

  },
  (error) => {

  }
)

const getReqeust = (method) => {
  return (url, data, options = {}) => {
    return _request({
      baseURL: base.apiBaseUrl,
      method,
      url,
      ...(method === 'POST' ? {
        data: options.string ? stringify(data): data,
      }: {}),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': options.string 
        ? 'application/x-www-form-urlencoded'
        : 'application/json',
        ...options.headers,
      },
      withCredentials: true,
    })
    .then((res) => {
      if (typeof res.data !== 'object') {
        console.log('Response struct error', res.data)
        return Promise.reject(res)
      }
      return res.data
    })
    .catch((err) => {
      console.log('internal error', 'X(')
      return Promise.reject(err)
    })
  }
}

export const get = getReqeust('GET')
export const post = getReqeust('POST')
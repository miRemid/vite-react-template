import axios from 'axios'
import { stringify } from 'qs'
import config from '~/config'

const MODE = import.meta.env.MODE

const getReqeust = (method) => {
  return (url, data, options = {}) => {
    let base = config[MODE]
    return axios({
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
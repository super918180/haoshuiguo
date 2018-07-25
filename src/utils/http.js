import Taro from '@tarojs/taro'

const baseUrl = 'https://www.easy-mock.com/mock/5b5725739a5ff532038077db/haoshuiguo'
const successCode = '0000'

const promiseFun = (method, url, params) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      method: method,
      url: baseUrl + url,
      data: params
    }).then(({ data }) => {
      if (data.code === successCode) {
        resolve({ data: data.data })
      } else {
        Taro.showToast({ title: data.msg, icon: 'none' })
        reject({ err: data.msg, code: data.code })
      }
    }).catch((err) => {
      const errorMsg = JSON.stringify(err)
      Taro.showToast({ title: errorMsg, icon: 'none' })
      reject({ err: errorMsg })
    })
  })
}

export default class Http {
  // get 方法封装
  static get(url, params = {}) {
    return promiseFun('GET', url, params)
  }

  // post 方法封装
  static post(url, params = {}) {
    return promiseFun('POST', url, params)
  }
}

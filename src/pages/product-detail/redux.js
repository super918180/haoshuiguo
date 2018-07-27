import Taro from '@tarojs/taro'
import { getProductDetailReq } from './api'

// Actions
const UPDATE = 'PRODUCT_DETAIL_UPDATE'

// Reducer
const initState = {
  init: false,
  detail: {},
}

export const productDetail = (state = initState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

// Action Creators
export const productDetailUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const productDetailInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().productDetail
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [productDetailReq] = await Promise.all([
    getProductDetailReq(),
  ])
  dispatch(productDetailUpdate({
    init: true,
    detail: productDetailReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

import Taro from '@tarojs/taro'
import { getDefaultAddressReq } from './api'

// Actions
const UPDATE = 'ORDER_CONFIRM_UPDATE'

// Reducer
const initState = {
  init: false,
  config: []
}

export const orderConfirm = (state = initState, action) => {
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
export const orderConfirmUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const orderConfirmInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().orderConfirm
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [defaultAddressReq] = await Promise.all([
    getDefaultAddressReq(),
  ])
  dispatch(orderConfirmUpdate({
    init: true,
    address: defaultAddressReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

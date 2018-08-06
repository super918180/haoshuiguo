import Taro from '@tarojs/taro'
import { getAddressReq } from './api'

// Actions
const UPDATE = 'ADDRESS_UPDATE'

// Reducer
const initState = {
  init: false,
  config: []
}

export const address = (state = initState, action) => {
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
export const addressUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const addressInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().address
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [addressReq] = await Promise.all([
    getAddressReq(),
  ])
  dispatch(addressUpdate({
    init: true,
    config: addressReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

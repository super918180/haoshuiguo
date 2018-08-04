import Taro from '@tarojs/taro'
import { getAddressByIndexReq } from './api'

// Actions
const UPDATE = 'ADDRESS_EDIT_UPDATE'

// Reducer
const initState = {
  init: false,
  config: []
}

export const addressEdit = (state = initState, action) => {
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
export const addressEditUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const addressEditInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().addressEdit
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [addressEditReq] = await Promise.all([
    getAddressByIndexReq(),
  ])
  dispatch(addressEditUpdate({
    init: true,
    config: addressEditReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

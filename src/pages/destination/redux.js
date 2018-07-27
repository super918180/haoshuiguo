import Taro from '@tarojs/taro'
import { getDestinationReq } from './api'

// Actions
const UPDATE = 'DESTINATION_UPDATE'

// Reducer
const initState = {
  init: false,
  data: [],
  select: ''  // 默认配送地址
}

export const destination = (state = initState, action) => {
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
export const destinationUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const selectDestination = params => (dispatch) => {
  dispatch(destinationUpdate({
    select: params,
  }))
}

export const destinationInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().destination
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [destinationReq] = await Promise.all([
    getDestinationReq(),
  ])
  dispatch(destinationUpdate({
    init: true,
    data: destinationReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

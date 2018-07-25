import Taro from '@tarojs/taro'
import { getHotSearchKeyReq } from './api'

// Actions
const UPDATE = 'SEARCH_UPDATE'

// Reducer
const initState = {
  init: false,
  hotData: {},
  historyData: []
}

export const search = (state = initState, action) => {
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
export const searchUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const searchInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().search
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [searchReq] = await Promise.all([
    getHotSearchKeyReq(),
  ])
  dispatch(searchUpdate({
    init: true,
    hotData: searchReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

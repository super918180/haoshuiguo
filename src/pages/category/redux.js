import Taro from '@tarojs/taro'
import { getCategoryReq } from './api'

// Actions
const UPDATE = 'CATEGORY_UPDATE'

// Reducer
const initState = {
  init: false,
  data: {},
}

export const category = (state = initState, action) => {
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
export const categoryUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const categoryInit = (isRefresh, callback) => async (dispatch, getState) => {
  const { init } = getState().category
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const [categoryReq] = await Promise.all([
    getCategoryReq(),
  ])
  dispatch(categoryUpdate({
    init: true,
    data: categoryReq.data,
  }))
  if (typeof callback === 'function') {
    callback()
  }
  Taro.hideLoading()
}

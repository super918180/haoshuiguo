import Taro from '@tarojs/taro'
import { getUserInfoReq } from './api'

// Actions
const UPDATE = 'USER_UPDATE'

// Reducer
const initState = {
  init: true
}

export const user = (state = initState, action) => {
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
export const userUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const userInit = (isRefresh,callback) => async (dispatch, getState) => {
  const { init } = getState().user
  if (init && !isRefresh) return
  Taro.showLoading({title: '加载中'})
  const [userReq] = await Promise.all([
    getUserInfoReq(),
  ])
  dispatch(userUpdate({
    init: true,
    config: userReq.data
  }))
  if(typeof callback === 'function'){
    callback()
  }
  Taro.hideLoading()
}

import Taro from '@tarojs/taro'
import { getOrderListReq } from './api'

// Actions
const UPDATE = 'ORDER_UPDATE'

// Reducer
const initState = {
  init: false,
  list: []
}

export const order = (state = initState, action) => {
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
export const orderUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const orderInit = (isRefresh, callback) => async (dispatch, getState) => {
  const number = 10
  const { list } = getState().order
  // 判断是否已经结束
  const hasMore = list.length % number === 0
  if (isRefresh || hasMore) {
    Taro.showLoading({ title: '加载中' })
    const { data } = await getOrderListReq({
      page: isRefresh ? 1 : (list.length / number) + 1,
      size: number,
    })
    if(data.data.length===0){
      // 没有数据提示
      Taro.showToast({ title: '~没有更多啦~', icon: 'none' })
    }else{
      dispatch(orderUpdate({
        init: true,
        list: isRefresh ? data.data : [...list, ...data.data],
      }))
      if (typeof callback === 'function') {
        callback()
      }
      Taro.hideLoading()
    }
  } else {
    Taro.showToast({ title: '~没有更多啦~', icon: 'none' })
  }
}

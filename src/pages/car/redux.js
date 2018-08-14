import Taro from '@tarojs/taro'
import { getShoppingCarts } from './api'

// Actions
const UPDATE = 'SHOPPING_CART_LIST_UPDATE'

// Reducer
const initState = {
  init: false,
  //购物车列表
  list: [],
  invalid: []
}


export const shoppingCartList = (state = initState, action) => {
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
export const shoppingCartListUpdate = params => ({
  payload: params,
  type: UPDATE,
})


//初始化数据
export const shoppingCartListInit = (isRefresh) => async (dispatch, getState) => {
  const { init } = getState().shoppingCartList
  if (init && !isRefresh) return
  Taro.showLoading({ title: '加载中' })
  const { data } = await getShoppingCarts()
  if (data.length == 0) {
    // 没有数据提示
    Taro.showToast({ title: '~购物车为空~', icon: 'none' })
  } else {
    //默认为已选
    let newData = data.data.map(item => {
      item.checked = true;
      return item;
    })
    //更新list
    dispatch(shoppingCartListUpdate({
      init: true,
      list: newData,
      invalid: data.invalidData
    }))
    Taro.hideLoading()
  }
}


//改变数量
export const changeGoodsValue = (id, value) => (dispatch, getState) => {
  let { list } = getState().shoppingCartList
  let newList = list.filter(v => v.shoppingCartId == id).map(item=>{
    item.number = value
    return item
  })
  //更新list
  dispatch(shoppingCartListUpdate({
    data: newList
  }))
}


//改变选中状态
export const toggleSelect = (id, checked) => (dispatch, getState) => {
  let { list } = getState().shoppingCartList
  let newList = list.filter(v => v.shoppingCartId == id).map(item=>{
    item.checked = checked
    return item
  })
  dispatch(shoppingCartListUpdate({
    data: newList
  }))
}


//改变全选状态
export const toggleSelectAll = (checked) => (dispatch, getState) => {  
  let { list } = getState().shoppingCartList
  let newList = list.map(item => {
    item.checked = checked
    return item
  })
  dispatch(shoppingCartListUpdate({
    data: newList
  }))
}

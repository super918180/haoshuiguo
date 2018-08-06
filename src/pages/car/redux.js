import Taro from '@tarojs/taro'
import { getShoppingCarts } from './api'

// Actions
const UPDATE = 'SHOPPINGCART_LIST_UPDATE'

// Reducer
const initState = {  
  init: false,
  //购物车列表
  list: [],
  invalid:[]
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


export const shoppingCartListInit = () => async (dispatch, getState) => {  
  const  { data }  = await getShoppingCarts()        
  if(data.length==0){
    // 没有数据提示
    Taro.showToast({ title: '~购物车为空~', icon: 'none' })
  }else{    
    //更新list
    dispatch(shoppingCartListUpdate({
      init: true,
      list: data.data,
      invalid:data.invalidData
    }))
    Taro.hideLoading()
  }
}


export const  changeGoodsValue = (id,value)=>(dispatch,getState)=>{
      let { list } = getState().shoppingCartList
      const newList = list.filter(v=>v.id==id).number=value
      //更新list
      dispatch(shoppingCartListUpdate({        
        data:newList        
      }))
}

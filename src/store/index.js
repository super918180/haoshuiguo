import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { home } from '../pages/index/redux'
import { category } from '../pages/category/redux'
import { search } from '../pages/search/redux'
import { productList } from '../pages/product-list/redux'
import { productDetail } from '../pages/product-detail/redux'
import { destination } from '../pages/destination/redux'
import { shoppingCartList } from '../pages/car/redux'
import { user } from '../pages/user/redux'
import { address } from '../pages/address/redux'
import { addressEdit } from '../pages/address-edit/redux'
import { order } from '../pages/order/redux'
import { shoppingCartList } from '../pages/coupon/redux'

const rootReducer = combineReducers({
  home,
  category,
  search,
  productList,
  productDetail,
  destination,
  shoppingCartList,
  user,
  address,
  addressEdit,
  order
})

const middlewares = [
  thunkMiddleware,
  createLogger()
]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

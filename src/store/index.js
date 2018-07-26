import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { home } from '../pages/index/redux'
import { category } from '../pages/category/redux'
import { search } from '../pages/search/redux'
import { productList } from '../pages/product-list/redux'

const rootReducer = combineReducers({
  home,
  category,
  search,
  productList,
})

const middlewares = [
  thunkMiddleware,
  createLogger()
]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

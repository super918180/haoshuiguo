import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { home } from '../pages/index/redux'
import { category } from '../pages/category/redux'

const rootReducer = combineReducers({
  home,
  category
})

const middlewares = [
  thunkMiddleware,
  createLogger()
]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

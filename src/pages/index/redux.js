import { getHomeSwiperReq } from './api'

// Actions
const UPDATE = 'HOME_UPDATE'

// Reducer
const initState = {
  init: false,
  swiperData: [], //轮播图
}

export const home = (state = initState, action) => {
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
export const homeUpdate = params => ({
  payload: params,
  type: UPDATE,
})

export const homeInit = (isRefresh) => async (dispatch, getState) => {
  const { init } = getState().home
  if (init && !isRefresh) return
  const [swiperReq] = await Promise.all([
    getHomeSwiperReq(),
  ])
  dispatch(homeUpdate({
    init: true,
    swiperData: swiperReq.data
  }))
}

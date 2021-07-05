import { createStore,applyMiddleware } from 'redux'
import { SET_LODING } from "./constant";
import thunk from 'redux-thunk'

export default createStore((state = { loading: false }, action) => {
  switch (action.type) {
    case SET_LODING:
      return { loading: action.flag }
    default:
      return state
  }
}, applyMiddleware(thunk))
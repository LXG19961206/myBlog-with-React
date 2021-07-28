import { createStore,applyMiddleware } from 'redux'
import { SET_LODING,ROUTER_PUSH } from "./constant";
import thunk from 'redux-thunk'

export default createStore((state = { loading: false }, action) => {
  switch (action.type) {
    case SET_LODING:
      return { ...state, loading: action.flag }
    case ROUTER_PUSH:
      return { ...state, goSomewhere: action.goSomewhere }
    default:
      return state
  }
}, applyMiddleware(thunk))
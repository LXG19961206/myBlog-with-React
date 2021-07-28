import { SET_LODING,ROUTER_PUSH } from './constant'
export const setLoading = (flag) => ({ type: SET_LODING, flag })
export const setLoadingAsync = (flag, delay) => dispatch => setTimeout(() => dispatch(setLoading(flag)), delay)
export const routerPush = (fn) => ({ type: ROUTER_PUSH, goSomewhere: fn })


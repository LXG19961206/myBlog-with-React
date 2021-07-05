import { SET_LODING } from './constant'
export const setLoading = (flag) => ({ type: SET_LODING, flag })
export const setLoadingAsync = (flag, delay) => dispatch => setTimeout(() => dispatch(setLoading(flag)), delay)



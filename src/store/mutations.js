import * as types from './types'

export default {
  [types.CHECK_USER]:(state,payload)=>state.user=payload,

}
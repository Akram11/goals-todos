import {  
    REVEIVE_DATA
  } from '../actions/loading'


export default function loading(state = true, action) {
    switch (action.type) {
      case RECEIVE_DATA:
        return false
      default:
        return state
    }
  }
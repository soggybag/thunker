import { ASYNC_WAIT, HANDLE_WAIT, HANDLE_WEATHER } from '../actions'

export default weatherReducer = (state = {}, action) => {
  switch(action.type) {
    case HANDLE_WEATHER:
      return action.payload.weather.main
    default:
      return state
  }
}

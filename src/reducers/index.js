import { ASYNC_WAIT, HANDLE_WAIT, HANDLE_WEATHER } from '../actions'
import { combineReducers } from 'redux'
import weatherReducer from './weather-reducer'

const thingReducer = (state = null, action) => {
  switch(action.type) {
    case HANDLE_WAIT:
      return action.payload

    case HANDLE_WEATHER:
      return action.payload.weather.main.temp

    default:
      return state
  }
}

const otherReducer = (state = null, action) => {
  switch(action.type) {
    case HANDLE_WAIT:
      return `$${action.payload.toFixed(2)}`

    default:
      return state
  }
}

export default combineReducers({
  thing: thingReducer,    // Number
  other: otherReducer,    // String
  weather: weatherReducer // Object
})





///

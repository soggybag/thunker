export const ASYNC_WAIT = "ASYNC_WAIT"
export const HANDLE_WAIT = "HANDLE_WAIT"
export const HANDLE_WEATHER = "HANDLE_WEATHER"

// import { store } from '../App'

export const handleWait = (n) => {
  return {
    type: HANDLE_WAIT,
    payload: n
  }
}

export const asyncWait = () => {
  return (dispatch) => {
    setTimeout(() => {
      const n = Math.random()
      dispatch(handleWait(n)) // do the next action here...
      // store.dispatch(handleWait(n))
    }, 3000)
  }
}

export const handleWeather = (json) => {
  return {
    type: HANDLE_WEATHER,
    payload: json
  }
}

export const getWeather = () => {
  return (dispatch) => {
    fetch('').then((res) => {
      return res.json()
    }).then((json) => {
      dispatch(handleWeather(json))
    }).catch((err) => {
      console.log(err);
    })
  }
}



///

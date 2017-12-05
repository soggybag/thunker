import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import RandomNumber from './components/random-number'

import logo from './logo.svg'
import './App.css'

export const store = createStore(reducers, applyMiddleware(thunk))


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello World</h1>
          <RandomNumber />
        </div>
      </Provider>
    );
  }
}

export default App;

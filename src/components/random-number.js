import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncWait } from '../actions'

class RandomNumber extends Component {

  froodle() {
    this.grognard()
  }

  grognard() {
    //
  }

  render() {
    return (
      <div>
        <h1>{this.props.thing}</h1>
        <h2>{this.props.other}</h2>
        <button onClick={(e) => {
          {/* dispatch(asyncWait()) */}
          this.props.asyncWait()
        }}>Random</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    thing: state.thing,
    other: state.other
  }
}
const mapDispatchToProps = () => {
  return {
    asyncWait
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(RandomNumber)







//

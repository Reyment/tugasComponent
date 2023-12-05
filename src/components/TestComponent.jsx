import React, { Component } from 'react'
import LatihnComponent from './coba/LatihaComponent'
import FunctionalComponent from './FunctionalComponent'

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <LatihnComponent name="Ghani" />
        <br />
        <FunctionalComponent name="Abdul" />
      </div>
    )
  }
}

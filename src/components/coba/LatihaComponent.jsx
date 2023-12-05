import React, { Component } from 'react'

export default class LatihnComponent extends Component {
  state = {
    value: 0
  }

  handlePlus = () => {
    this.setState({value: this.state.value + 1})
  }
  
  handleMin = () => {
    if(this.state.value > 0) {
      this.setState({value: this.state.value - 1})

    }
  }

  render() {
    return (
      <div>
        <h1>Ini Class component</h1>
        <h1>Perkenal nama saya {this.props.name}</h1>
        <button onClick={this.handleMin}>-</button>
        <span>{ ' '} {this.state.value}{' '}</span>
        <button onClick={this.handlePlus}>+</button>

      </div>
    )
  }
}

import React, { Component } from 'react'
import "./style.css"

export default class Total extends Component {
  render() {
    return (
      <div className='Total'>{this.props.children}</div>
    )
  }
}

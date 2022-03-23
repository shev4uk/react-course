import React, { Component } from 'react';
import './Avatar.css';

export default class Avatar extends Component {
  render() {
    return (
      <div className={'Avatar-placeholder Avatar-placeholder-' + this.props.size}></div>
    )
  }
}

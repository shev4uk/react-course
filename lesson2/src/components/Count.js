import React, { Component } from 'react'
import './Count.css'

export default class Count extends Component {
    handleResetCount = (e) => {
        console.log(this.props);
        this.props.onResetCounter(null)
    }
  render() {
    console.log('render Count');
    // let button;
    // if (this.props.value > 0) {
    //     button = <button onClick={this.handleResetCount}>Reset</button>
    // }
    return (
        <>
            <div className={this.props.value === 0 ? 'red' : ''}>{this.props.value}</div>
            {
                this.props.value > 0 && 
                <button onClick={this.handleResetCount}>Reset</button>
            
            }
            {
                // button
            }
        </>
    )
  }
}

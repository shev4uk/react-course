import React, { Component } from 'react'
import Count from './components/Count'
import ListUser from './components/ListUser'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      number: 1
    }
    this.handleClickButton = this.handleClickButton.bind(this);
  }
  handleClickButton(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleResetForm = (e) => {
    console.log(e, 'reset');
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <>
        <div>
          <Count value={this.state.count} onResetCounter={this.handleResetForm}/>
          <button onClick={this.handleClickButton}>Click me!</button>
        </div>
        <div>
          <ListUser />
        </div>
      </>
    )
  }
}

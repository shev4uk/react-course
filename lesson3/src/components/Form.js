import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      newTitle: "",
      age: ""
    };
  }
  componentDidMount() {
      console.log('form mount');
  }
  changeHandler = (e) => {
    console.log(e.target.name);
    this.setState({
        [e.target.name]: e.target.value,
    });
    // this.setState({
    //   newTitle: e.target.value,
    // });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTitle);
    this.setState({
        newTitle: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="newTitle"
          value={this.state.newTitle}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

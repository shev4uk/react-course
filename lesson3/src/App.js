import React, { Component } from 'react'
import List from './components/List'
import Form from './components/Form'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        id: 1,
        title: 'Task 1',
        isDone: false
      }, {
        id: 2,
        title: 'Task 2',
        isDone: false
      }],
    }
  }
  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, {id: new Date().getTime(), title,  isDone: false}]
    })
  }
  changeStatus = (id) => {
    const changedList = this.state.todos.map((item) => {
      return item.id === id ? {
        ...item,
        isDone: !item.isDone
      } : item
    });
    this.setState({
      todos: changedList
    })
  }
  deleteItem = (id) => {
    console.log(id);
    const updatedTodo = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: updatedTodo
    })
  }
  render() {
    return (
      <div>
        <div className='list'>
          <List todos={this.state.todos} changeStatus={this.changeStatus} deleteItem={this.deleteItem} />
        </div>
        <div>
          <Form addTodo={this.addTodo}/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ListUser extends Component {
  constructor() {
      super();
      this.state = {
        users: [{
            id: 1,
            name: 'User 1',
        }, {
            id: 2,
            name: 'User 2',
        }, {
            id: 3,
            name: 'User 3',
        }],
        nameUser: 'New user'
    }
  }
  handleInputChage = (e) => {
    this.setState({
        nameUser: e.target.value
    })
  }
  handleAddUser = (e) => {
    this.setState({
        users: [...this.state.users, {id: new Date().getTime(), name: this.state.nameUser}]
    })
  }
  render() {
    return (
        <div>
            <input type="text" value={this.state.nameUser} onChange={this.handleInputChage} />
            <button onClick={this.handleAddUser}>Add user</button>
            <ul>{
                this.state.users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })
            }</ul>
        </div>
    )
  }
}

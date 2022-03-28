import React, { Component } from "react";

export default class ListItem extends Component {
  componentDidMount() {
    console.log("item mount");
  }
  componentDidUpdate() {
    console.log("item update");
  }
  componentWillUnmount() {
    console.log("item unmount");
  }
  onDeleteItem = (e) => {
    e.stopPropagation();
    this.props.deleteItem(this.props.item.id)
  }
  render() {
    const { item } = this.props;
    return (
      <div
        className={`item-list ${item.isDone ? "item-done" : ""}`}
        onClick={() => this.props.changeStatus(item.id)}
      >
        {item.title}
        <button onClick={this.onDeleteItem}>Delete</button>
      </div>
    );
  }
}

import { Component } from "react";
import Avatar from "./Avatar";
import Info from "./Info";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-cartUser">
        <Avatar />
        <Info />
      </div>
    )
  }
}

export default App
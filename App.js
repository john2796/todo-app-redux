import React, { Component } from "react";
import TodoApp from "./containers/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Learn Redux </h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;

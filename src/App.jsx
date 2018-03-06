import React, { Component } from "react";
import Title from "./Title";
import AddTodo from "./AddTodo";
import TodoView from "./TodoView";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-4">
            <AddTodo />
          </div>
          <div className="col-8">
            <TodoView />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

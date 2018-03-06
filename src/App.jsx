import React, { Component } from "react";
import Title from "./Title";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoView from "./TodoView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Very Simple Todo App",
      subtitle: "Track all of the things",

      createText: "",
      createPriority: 0,
      createId: 0,

      todoItems: []
    };

    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  handleCreateChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  addNewItem(e) {
    if (!this.state.createPriority) {
      console.log("chooese a priority");
      return;
    }
    let tempList = this.state.todoItems.slice();
    let tempId = this.state.createId + 1;
    tempList.push({ text: this.state.createText, priority: this.state.createPriority, id: tempId });
    this.setState({ todoItems: tempList, createId: tempId });
  }

  render() {
    return (
      <div className="container">
        <Title title={this.state.title} subtitle={this.state.subtitle} />
        <div className="row">
          <div className="col-4">
            <AddTodo
              createText={this.state.createText}
              createPriority={this.state.createPriority}
              onChange={this.handleCreateChange}
              createNewItem={this.addNewItem}
            />
          </div>
          <div className="col-8">
            <TodoView todoItems={this.state.todoItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

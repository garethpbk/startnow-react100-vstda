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
      initialmsg: ["Welcome to Very Simple Todo App!", "Get started now by adding a new todo on the left."],

      createText: "",
      createPriority: 0,
      createId: -1,
      updateText: "",
      updatePriority: 0,
      editEnabled: false,

      todoItems: [],
      completedItems: []
    };

    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  handleCreateChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  addNewItem() {
    if (!this.state.createPriority) {
      console.log("Choose a priority!");
      return;
    } else if (!this.state.createText) {
      console.log("Enter some text!");
      return;
    }
    let tempList = this.state.todoItems.slice();
    let tempId = this.state.createId + 1;
    tempList.push({
      text: this.state.createText,
      priority: this.state.createPriority,
      updateText: this.state.updateText,
      updatePriority: this.state.updatePriority,
      id: tempId,
      editEnabled: this.state.editEnabled,
      handleDeleteItem: this.handleDeleteItem,
      handleEditItem: this.handleEditItem,
      handleCompleteItem: this.handleCompleteItem,
      handleEditChange: this.handleEditChange,
      handleSaveEdit: this.handleSaveEdit,
      time: ""
    });
    this.setState({ todoItems: tempList, createId: tempId, initialmsg: "" });
  }

  handleCompleteItem(id) {
    let tempList = this.state.todoItems.slice();
    let tempCompletedList = this.state.completedItems;

    let tempId = id;
    let index = tempList.findIndex(item => item.id === tempId);

    let completedItem = tempList[index];
    let date = new Date(),
      locale = "en-us",
      month = date.toLocaleString(locale, { month: "long" });
    date = month + " " + date.getDate() + ", " + date.getFullYear();

    completedItem.time = date.toString();
    tempCompletedList.push(completedItem);
    this.setState({ completedItems: tempCompletedList });

    tempList.splice(index, 1);
    this.setState({ todoItems: tempList });
  }

  handleDeleteItem(id) {
    let tempList = this.state.todoItems.slice();
    let tempId = id;
    let index = tempList.findIndex(item => item.id === tempId);
    tempList.splice(index, 1);
    this.setState({ todoItems: tempList });
  }

  handleEditItem(id) {
    if (!this.state.editEnabled) {
      this.setState({ editEnabled: true });
      let tempList = this.state.todoItems.slice();
      let tempId = id;
      let index = tempList.findIndex(item => item.id === tempId);
      tempList[index].editEnabled = true;
      tempList[index].updateText = tempList[index].text;
      tempList[index].updatePriority = tempList[index].priority;
      this.setState({ todoItems: tempList, editEnabled: false });
    } else {
      console.log("You're already editing an item!");
    }
  }

  handleEditChange(e, id) {
    this.setState({ [e.target.name]: e.target.value });

    let tempList = this.state.todoItems.slice();
    let tempId = id;
    let index = tempList.findIndex(item => item.id === tempId);
    tempList[index][e.target.name] = e.target.value;
    this.setState({ todoItems: tempList });
  }

  handleSaveEdit(id) {
    if (!this.state.updatePriority) {
      console.log("Choose a priority!");
      return;
    } else if (!this.state.updateText) {
      console.log("Enter some text!");
      return;
    }
    this.setState({ editEnabled: false });
    let tempList = this.state.todoItems.slice();
    let tempId = id;
    let index = tempList.findIndex(item => item.id === tempId);
    tempList[index].text = this.state.updateText;
    tempList[index].priority = this.state.updatePriority;
    tempList[index].editEnabled = false;
    this.setState({ todoItems: tempList });
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
            <TodoView
              initialmsg={this.state.initialmsg}
              todoItems={this.state.todoItems}
              completedItems={this.state.completedItems}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

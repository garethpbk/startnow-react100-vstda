import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import CompletedItem from "./CompletedItem";

export default props => (
  <div>
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">View Todos</h5>
      </div>
      <div className="card-body">
        <p>
          <strong>{props.initialmsg[0]}</strong>
        </p>
        <p>{props.initialmsg[1]}</p>
        <ul className="list-group bg-light no-padding">
          {props.todoItems.map(todoItems => (
            <TodoItem
              key={todoItems.id}
              id={todoItems.id}
              text={todoItems.text}
              priority={todoItems.priority}
              updateText={todoItems.updateText}
              updatePriority={todoItems.updatePriority}
              editEnabled={todoItems.editEnabled}
              handleDeleteItem={todoItems.handleDeleteItem}
              handleEditItem={todoItems.handleEditItem}
              handleEditChange={todoItems.handleEditChange}
              handleEditSave={todoItems.handleSaveEdit}
              handleCompleteItem={todoItems.handleCompleteItem}
            />
          ))}
        </ul>
        {/* <EditTodo /> */}
      </div>
    </div>

    <div className="card mt-4">
      <div className="card-header">
        <h5 className="card-title">Completed Todos</h5>
      </div>
      <div className="card-body">
        <ul className="list-group bg-light no-padding">
          {props.completedItems.map(completedItems => (
            <CompletedItem
              key={completedItems.id}
              id={completedItems.id}
              text={completedItems.text}
              time={completedItems.time}
            />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default props => (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">View Todos</h5>
    </div>
    <div className="card-body">
      <ul className="list-group bg-light no-padding">
        {props.todoItems.map(todoItems => (
          <TodoItem key={todoItems.id} text={todoItems.text} priority={todoItems.priority} />
        ))}
      </ul>
      {/* <EditTodo /> */}
    </div>
  </div>
);

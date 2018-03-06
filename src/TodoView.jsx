import React from "react";
import TodoItems from "./TodoItems";
import EditTodo from "./EditTodo";

export default props => (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">View Todos</h5>
    </div>
    <div className="card-body">
      <ul className="list-group bg-light no-padding">
        <TodoItems />
      </ul>
      <EditTodo />
    </div>
  </div>
);

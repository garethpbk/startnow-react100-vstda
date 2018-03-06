import React from "react";

export default props => (
  <div>
    <h5 className="h5">Description</h5>
    <textarea className="update-todo-text" />
    <h5 className="h5">Priority</h5>
    <select className="update-todo-priority">
      <option value="" disabled selected>
        Select a Priority
      </option>
      <option value="1">High Priority</option>
      <option value="2">Medium Priority</option>
      <option value="3">Low Priority</option>
    </select>
    <a href="#" className="btn btn-primary float-right update-todo">
      Save
    </a>
  </div>
);

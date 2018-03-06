import React from "react";

export default props => (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Add New Todo</h5>
    </div>
    <div className="card-body">
      <h5 className="card-title">I want to...</h5>
      <textarea className="create-todo-text" value={props.createText} onChange={props.onChange} name="createText" />

      <h5 className="card-title">How much of a priority is this?</h5>
      <select
        className="w-100 create-todo-priority"
        value={props.createPriority}
        onChange={props.onChange}
        name="createPriority"
      >
        <option value="0" disabled>
          Select a Priority
        </option>
        <option value="3">Low Priority</option>
        <option value="2">Medium Priority</option>
        <option value="1">High Priority</option>
      </select>
    </div>
    <div className="card-footer">
      <a href="#" className="btn btn-primary w-100" onClick={props.createNewItem}>
        Add
      </a>
    </div>
  </div>
);

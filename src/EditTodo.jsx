import React from "react";

export default props => (
  <div>
    <h5 className="h5">Description</h5>
    <textarea
      className="update-todo-text"
      value={props.updateText}
      onChange={e => props.handleEditChange(e, props.id)}
      name="updateText"
    />
    <h5 className="h5">Priority</h5>
    <select
      className="update-todo-priority"
      value={props.updatePriority}
      onChange={e => props.handleEditChange(e, props.id)}
      name="updatePriority"
    >
      <option value="0" disabled>
        Select a Priority
      </option>
      <option value="3">Low Priority</option>
      <option value="2">Medium Priority</option>
      <option value="1">High Priority</option>
    </select>
    <a href="#" className="btn btn-primary float-right update-todo" onClick={() => props.saveEdit(props.id)}>
      Save
    </a>
  </div>
);

import React from "react";

export default props => (
  <div>
    <h5 className="h5">Description</h5>
    <textarea />
    <h5 className="h5">Priority</h5>
    <select>
      <option value="select">Select a Priority</option>
      <option value="high">High Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="low">Low Priority</option>
    </select>
    <a href="#" className="btn btn-primary float-right">
      Save
    </a>
  </div>
);

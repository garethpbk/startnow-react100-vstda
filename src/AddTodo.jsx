import React from "react";

export default props => (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Add New Todo</h5>
    </div>
    <div className="card-body">
      <h5 className="card-title">I want to...</h5>
      <textarea />

      <h5 className="card-title">How much of a priority is this?</h5>
      <select className="w-100">
        <option value="select">Select a Priority</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
    </div>
    <div className="card-footer">
      <a href="#" className="btn btn-primary w-100">
        Add
      </a>
    </div>
  </div>
);

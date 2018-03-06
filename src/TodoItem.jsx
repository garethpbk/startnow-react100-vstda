import React from "react";

export default props => (
  <li className={"priority-" + props.priority + " list-group-item"}>
    {props.text}
    <span className="float-right">
      <a className="edit-todo far fa-edit" />
      &nbsp;
      <a className="delete-todo far fa-trash-alt" />
    </span>
  </li>
);

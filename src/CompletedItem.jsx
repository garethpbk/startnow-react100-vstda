import React from "react";

export default props => (
  <li className={"bg-success text-white list-group-item"} id={props.id}>
    {props.text}
    <span className="float-right">{props.time}</span>
  </li>
);

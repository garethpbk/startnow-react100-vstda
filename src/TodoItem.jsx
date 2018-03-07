import React from "react";
import EditTodo from "./EditTodo";

/* export default props => (
  <li className={"priority-" + props.priority + " list-group-item"} id={props.id}>
    <input type="checkbox" onClick={() => props.handleCompleteItem(props.id)} />
    {props.text}
    <span className="float-right">
      <a className="edit-todo text-primary" href="#" onClick={props.handleEditItem}>
        <span className="far fa-edit" />
      </a>
      &nbsp;
      <a className="delete-todo text-danger" href="#" onClick={() => props.handleDeleteItem(props.id)}>
        <span className="far fa-trash-alt" />
      </a>
    </span>
  </li>
); */

const TodoItem = props => {
  if (!props.editEnabled) {
    return (
      <li className={"priority-" + props.priority + " list-group-item"} id={props.id}>
        <input type="checkbox" onClick={() => props.handleCompleteItem(props.id)} />
        {props.text}
        <span className="float-right">
          <a className="edit-todo text-primary" href="#" onClick={() => props.handleEditItem(props.id)}>
            <span className="far fa-edit" />
          </a>
          &nbsp;
          <a className="delete-todo text-danger" href="#" onClick={() => props.handleDeleteItem(props.id)}>
            <span className="far fa-trash-alt" />
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <EditTodo
        updateText={props.updateText}
        updatePriority={props.updatePriority}
        handleEditChange={props.handleEditChange}
        saveEdit={props.handleEditSave}
        id={props.id}
      />
    );
  }
};

export default TodoItem;

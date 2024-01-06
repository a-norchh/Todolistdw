import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { deleteTodo } from "../api/api";
import { useTodosContext } from "../context/TodosContext";
import { ACTION_TOGGLE } from "../constants/actions";

const ActionButton = ({ todoId, onEdit }) => {
  const { dispatch, actionToggle } = useTodosContext();
  // const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    if (actionToggle.id !== todoId) {
      dispatch({ type: ACTION_TOGGLE, payload: { id: todoId, toggle: true } });
    } else {
      dispatch({ type: ACTION_TOGGLE, payload: { id: "", toggle: false } });
    }
  };

  // DELETE TODO
  const editHandler = () => {
    onEdit();
  };

  // DELETE TODO
  const deleteHandler = () => {
    deleteTodo(todoId, dispatch);
  };

  return (
    <div className="action-button" onClick={toggleHandler}>
      <SlOptions className="icon" />
      <div
        className={`action-menu ${
          actionToggle.toggle && actionToggle.id === todoId ? "opened" : ""
        }`}
      >
        <ul>
          <li className="edit-btn" onClick={editHandler}>
            Edit
          </li>
          <li className="delete-btn" onClick={deleteHandler}>
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActionButton;

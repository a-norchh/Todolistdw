import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { deleteTodo } from "../api/api";
import { useTodosContext } from "../context/TodosContext";

const ActionButton = ({ todoId }) => {
  const { dispatch } = useTodosContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  // DELETE TODO
  const deleteHandler = (todoId) => {
    deleteTodo(todoId, dispatch);
  };

  return (
    <div className="action-button" onClick={toggleHandler}>
      <SlOptions className="icon" />
      <div className={`action-menu ${toggleMenu ? "opened" : ""}`}>
        <ul>
          <li className="edit-btn">Edit</li>
          <li className="delete-btn" onClick={() => deleteHandler(todoId)}>
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActionButton;

import React from "react";
import axios from "../api/axios";
import CheckBox from "./CheckBox";
import { useTodosContext } from "../context/TodosContext";
import { toggleComplete } from "../api/api";
import { UPDATE_COMPLETE } from "../api/constants";

const TasksList = ({ todos }) => {
  const { dispatch } = useTodosContext();

  const DoneHandler = async (id, completed) => {
    // dispatch({ type: UPDATE_COMPLETE, payload: { id, completed } });
    const getTodo = todos.find((todo) => todo.id === id);
    const value = { ...getTodo, completed: !completed };
    toggleComplete(id, dispatch, value);
  };

  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <label
            htmlFor={todo.id}
            className="todo-title"
            onClick={() => DoneHandler(todo.id, todo.completed)}
          >
            <CheckBox isComplete={todo.completed} />
            <p className={`${todo.completed ? "done" : ""}`}>{todo.title}</p>
          </label>
          <div className="btn-action">btn</div>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;

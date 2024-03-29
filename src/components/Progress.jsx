import React from "react";
import { useTodosContext } from "../context/TodosContext";

const Progress = () => {
  const { todos } = useTodosContext();
  const completeTodo = todos.filter((todo) => todo.completed === true);
  const progressActive = (completeTodo.length / todos.length) * 100;

  return (
    <div className="progress-contain">
      <h2>Progress</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-active"
          style={todos.length > 0 ? { width: progressActive + "%" } : {}}
        ></div>
      </div>
      <p>{completeTodo.length} completed</p>
    </div>
  );
};

export default Progress;

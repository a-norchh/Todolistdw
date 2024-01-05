import React, { useEffect, useState } from "react";
import { useTodosContext } from "../context/TodosContext";
import TasksList from "./TasksList";

const Tasks = () => {
  const { todos } = useTodosContext();
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  // Fillter

  return (
    <>
      <div className="task-header">
        <h2>Tasks</h2>
        <div className="tasks-filter">
          <select>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </div>
      </div>
      <TasksList todos={todoList} />
    </>
  );
};

export default Tasks;

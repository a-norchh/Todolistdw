import React, { useState, useEffect } from "react";
import CheckBox from "./UI/CheckBox";
import { useTodosContext } from "../context/TodosContext";
import { toggleComplete } from "../api/api";
import Card from "./UI/Card";

const TasksList = () => {
  const { todos, dispatch, isEditting } = useTodosContext();
  const [newText, setNewText] = useState("");

  // const [todoList, setTodoList] = useState([]);

  // useEffect(() => {
  //   setTodoList(todos);
  // }, [todos]);

  const DoneHandler = async (id, completed) => {
    const getTodo = todos.find((todo) => todo.id === id);
    const value = { ...getTodo, completed: !completed };
    toggleComplete(id, dispatch, value);
  };

  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <Card key={todo.id}>
          {/* NORAML CASE */}
          <li className="todo-item">
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
          {/* EDIT CASE */}
        </Card>
      ))}
    </ul>
  );
};

export default TasksList;

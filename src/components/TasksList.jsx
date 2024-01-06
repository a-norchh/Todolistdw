import React, { useState, useEffect } from "react";
import CheckBox from "./UI/CheckBox";
import { useTodosContext } from "../context/TodosContext";
import { toggleComplete } from "../api/api";
import Card from "./UI/Card";
import ActionButton from "./ActionButton";

const TasksList = () => {
  const { todos, dispatch, isEditting } = useTodosContext();
  const [newText, setNewText] = useState("");

  // CHECK LENGTH
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
    <>
      {todos.length === 0 ? (
        <p className="notice-text">- Don't have any tasks -</p>
      ) : (
        <ul className={`tasks-list ${todos.length > 7 ? "more-padding" : ""}`}>
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
                  <p className={`${todo.completed ? "done" : ""}`}>
                    {todo.title}
                  </p>
                </label>
                <ActionButton todoId={todo.id} />
              </li>
              {/* EDIT CASE */}
            </Card>
          ))}
        </ul>
      )}
    </>
  );
};

export default TasksList;

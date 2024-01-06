import React, { useState } from "react";
import CheckBox from "./UI/CheckBox";
import { useTodosContext } from "../context/TodosContext";
import { toggleComplete, editTodo } from "../api/api";
import Card from "./UI/Card";
import ActionButton from "./ActionButton";
import InputForm from "../components/UI/InputForm";

const TodosList = () => {
  const { todos, dispatch, filterBy } = useTodosContext();
  const [newText, setNewText] = useState("");
  const [idEditing, setIdEditing] = useState("");

  const DoneHandler = async (id, completed) => {
    const getTodo = todos.find((todo) => todo.id === id);
    const value = { ...getTodo, completed: !completed };
    toggleComplete(id, dispatch, value);
  };

  const EditSelector = (todoId, todoTitle) => {
    setNewText(todoTitle);
    setIdEditing(todoId);
  };

  const onChangeHandler = (e) => {
    setNewText(e.target.value);
  };

  // EDIT TODO
  const EditSubmitHandler = (e) => {
    e.preventDefault();
    if (newText.trim().length === 0) return;
    setIdEditing("");
    const selectTodo = todos.find((todo) => todo.id === idEditing);
    const value = { ...selectTodo, title: newText };
    editTodo(dispatch, value);
  };

  const todosFilter = todos.filter((todo) =>
    filterBy === "done"
      ? todo.completed === true
      : filterBy === "undone"
      ? todo.completed === false
      : todo
  );

  let noticeText = "";
  if (todosFilter.length === 0 && filterBy === "done") {
    noticeText = <p className="notice-text">- Don't have any done tasks -</p>;
  } else if (todosFilter.length === 0 && filterBy === "undone") {
    noticeText = <p className="notice-text">- Don't have any undone tasks -</p>;
  }

  return (
    <>
      {todos.length === 0 ? (
        <p className="notice-text">- Don't have any tasks -</p>
      ) : (
        <ul
          className={`todos-list ${
            todosFilter.length > 4 ? "more-padding" : ""
          }`}
        >
          {noticeText}
          {todosFilter.map((todo) => (
            <Card key={todo.id}>
              {idEditing !== todo.id ? (
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
                  <ActionButton
                    todoId={todo.id}
                    onEdit={() => EditSelector(todo.id, todo.title)}
                  />
                </li>
              ) : (
                <InputForm
                  id={"edit_todo"}
                  btnTitle="Save"
                  onSubmit={(e) => EditSubmitHandler(e)}
                  value={newText}
                  onChange={onChangeHandler}
                  autoFocus={true}
                  placeholder={
                    newText.trim().length === 0 ? "Please add some text..." : ""
                  }
                />
              )}
            </Card>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodosList;

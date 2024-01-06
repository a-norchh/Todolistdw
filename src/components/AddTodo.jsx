import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useTodosContext } from "../context/TodosContext";
import { addTodo } from "../api/api";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const AddTodo = () => {
  const { dispatch } = useTodosContext();
  const AddTodoHandler = (e) => {
    e.preventDefault();
    if (e.target.elements.text_todo.value.trim().length === 0) return;
    const title = e.target.elements.text_todo.value;
    const value = { id: uuidv4(), title: title, completed: false };
    e.target.elements.text_todo.value = "";
    addTodo(dispatch, value);
  };

  return (
    <Card>
      <form
        className="add-todo"
        onSubmit={(e) => {
          AddTodoHandler(e);
        }}
      >
        <input id="text_todo" type="text" placeholder="Add your todo..." />
        <Button>Add</Button>
      </form>
    </Card>
  );
};

export default AddTodo;

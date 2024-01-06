import React from "react";
import Card from "./UI/Card";
import { useTodosContext } from "../context/TodosContext";
import { addTodo } from "../api/api";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./UI/InputForm";

const AddTodo = () => {
  const { dispatch } = useTodosContext();

  // ADD TODO
  const AddTodoHandler = (e) => {
    e.preventDefault();
    if (e.target.elements.text_todo.value.trim().length === 0) return;
    const title = e.target.elements.text_todo.value;
    const value = { id: uuidv4(), title: title, completed: false };
    e.target.elements.text_todo.value = "";
    addTodo(dispatch, value);
  };

  return (
    <div className="add-todo">
      <Card>
        <InputForm
          id={"text_todo"}
          onSubmit={(e) => AddTodoHandler(e)}
          placeholder="Add your todo..."
          btnTitle="Add"
        />
      </Card>
    </div>
  );
};

export default AddTodo;

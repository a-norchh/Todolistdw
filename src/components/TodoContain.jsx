import React, { useEffect } from "react";
import Progress from "./Progress";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { useTodosContext } from "../context/TodosContext";

const TodoContain = () => {
  const { isLoading } = useTodosContext();

  useEffect(() => {
    if (!isLoading) {
      document.querySelector(".todo-contain").classList.add("show");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="todo-contain">
          <Progress />
          <Todos />
          <AddTodo />
        </div>
      )}
    </>
  );
};

export default TodoContain;

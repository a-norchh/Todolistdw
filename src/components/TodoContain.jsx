import React from "react";
import Progress from "./Progress";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const TodoContain = () => {
  return (
    <>
      <div className="todo-contain">
        <Progress />
        <Todos />
        <AddTodo />
      </div>
    </>
  );
};

export default TodoContain;

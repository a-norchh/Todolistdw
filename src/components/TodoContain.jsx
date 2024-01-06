import React from "react";
import Progress from "./Progress";
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";

const TodoContain = () => {
  return (
    <>
      <div className="todo-contain">
        <Progress />
        <Tasks />
        <AddTodo />
      </div>
    </>
  );
};

export default TodoContain;

import React from "react";
import Progress from "./Progress";

const TodoContain = () => {
  return (
    <>
      <div className="todo-contain">
        <Progress />
        <div>Tasks</div>
        <div>Add your todo</div>
      </div>
    </>
  );
};

export default TodoContain;

import React from "react";
import Filter from "./Filter";

const TodosHeader = () => {
  return (
    <div className="todos-header">
      <h2>Tasks</h2>
      <Filter />
    </div>
  );
};

export default TodosHeader;

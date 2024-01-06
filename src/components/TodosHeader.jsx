import React from "react";

const TodosHeader = () => {
  return (
    <div className="todos-header">
      <h2>Tasks</h2>
      <div className="todos-filter">
        <select>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
      </div>
    </div>
  );
};

export default TodosHeader;

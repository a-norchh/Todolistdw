import React from "react";

const TasksHeader = () => {
  return (
    <div className="task-header">
      <h2>Tasks</h2>
      <div className="tasks-filter">
        <select>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
      </div>
    </div>
  );
};

export default TasksHeader;

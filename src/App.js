import React from "react";
import TodoContain from "./components/TodoContain";
import { TodosProvider } from "./context/TodosContext";

const App = () => {
  return (
    <TodosProvider>
      <div className="container">
        <TodoContain />
      </div>
    </TodosProvider>
  );
};

export default App;

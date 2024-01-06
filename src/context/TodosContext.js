import React, { createContext, useContext, useEffect, useReducer } from "react";
import todosReducer from "../reducer/TodosReducer";
import { startGetTodos } from "../api/api";

const initialState = {
  isEditting: false,
  filterBy: "all",
  isLoading: false,
  actionToggle: { id: "", toggle: false },
  todos: [],
};

const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    startGetTodos(dispatch);
  }, []);

  return (
    <TodosContext.Provider value={{ ...state, dispatch, startGetTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  return useContext(TodosContext);
};

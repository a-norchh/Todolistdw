import { GET_TODOS, UPDATE_COMPLETE } from "../api/constants";

const todosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };

    case UPDATE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload.id === todo.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todosReducer;

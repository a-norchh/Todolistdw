import { GET_TODOS, UPDATE_COMPLETE, ADD_TODO } from "../constants/actions";

const todosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };

    // ADD TODO
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    // MARK AS DONE
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

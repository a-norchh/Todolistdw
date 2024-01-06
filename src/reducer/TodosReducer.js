import {
  GET_TODOS,
  UPDATE_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
  ACTION_TOGGLE,
  EDIT_TODO,
  IS_LOADING,
  LOADING_DONE,
  FILTER_BY,
} from "../constants/actions";

const todosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    // LOADING
    case IS_LOADING:
      return { ...state, isLoading: true };
    case LOADING_DONE:
      return { ...state, isLoading: false };

    // 1.ADD TODO
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    // 2. EDIT TODO
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload.id === todo.id ? { ...todo, ...action.payload } : todo
        ),
      };

    // 3. DELETE TODO
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    // 4.MARK AS DONE
    case UPDATE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload.id === todo.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };

    // 5. SEE WHAT'S DONE (FILTER)
    case FILTER_BY:
      return { ...state, filterBy: action.payload };

    // ACTION TOGGLE
    case ACTION_TOGGLE:
      return { ...state, actionToggle: { ...action.payload } };
    default:
      return state;
  }
};

export default todosReducer;

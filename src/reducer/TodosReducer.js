import { GET_TODOS } from "../api/constants";

const todosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};

export default todosReducer;

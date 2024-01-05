import axios from "../api/axios";
import { GET_TODOS } from "../api/constants";

export const startGetTodos = async (dispatch) => {
  try {
    const response = await axios.get("todos");
    dispatch({ type: GET_TODOS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

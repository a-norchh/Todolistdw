import axios from "../api/axios";
import { GET_TODOS, UPDATE_COMPLETE } from "../api/constants";
// import { JSONFileSyncPreset } from "../presets/node.js";

export const startGetTodos = async (dispatch) => {
  try {
    const response = await axios.get("todos");
    dispatch({ type: GET_TODOS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const toggleComplete = async (id, dispatch, value) => {
  try {
    const response = await axios.put(`todos/${id}`, value);
    dispatch({ type: UPDATE_COMPLETE, payload: { ...response.data } });
  } catch (error) {
    console.error(error);
  }
};

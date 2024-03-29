import axios from "../api/axios";
import {
  GET_TODOS,
  UPDATE_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  IS_LOADING,
  LOADING_DONE,
} from "../constants/actions";

// GET DATA FIRST TIME
export const startGetTodos = async (dispatch) => {
  try {
    dispatch({ type: IS_LOADING });
    const response = await axios.get("todos");
    dispatch({ type: GET_TODOS, payload: response.data });
    dispatch({ type: LOADING_DONE });
  } catch (error) {
    console.error(error);
  }
};

// 1.ADD TODO
export const addTodo = async (dispatch, value) => {
  try {
    const response = await axios.post(`todos/`, value, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: ADD_TODO, payload: response.data });
    setTimeout(() => {
      document.querySelector(".todos-list").scrollTop =
        document.querySelector(".todos-list").scrollHeight;
    }, 100);
  } catch (error) {
    console.error(error);
  }
};

// 2.EDIT TODO
export const editTodo = async (dispatch, value) => {
  try {
    const response = await axios.put(`todos/${value.id}`, value, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: EDIT_TODO, payload: { ...response.data } });
  } catch (error) {
    console.error(error);
  }
};

// 3.DELETE TODO
export const deleteTodo = async (id, dispatch) => {
  try {
    await axios.delete(`todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.error(error);
  }
};

// 4.MARK AS DONE
export const toggleComplete = async (id, dispatch, value) => {
  try {
    const response = await axios.put(`todos/${id}`, value);
    // console.log(response.data);
    dispatch({ type: UPDATE_COMPLETE, payload: { ...response.data } });
  } catch (error) {
    console.error(error);
  }
};

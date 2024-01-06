import axios from "../api/axios";
import {
  GET_TODOS,
  UPDATE_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
} from "../constants/actions";

// GET DATA FIRST TIME
export const startGetTodos = async (dispatch) => {
  try {
    console.log("START");
    const response = await axios.get("todos");
    dispatch({ type: GET_TODOS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// 1.ADD TASK
export const addTodo = async (dispatch, value) => {
  try {
    const response = await axios.post(`todos/`, value, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(response);
    // console.log(response.data);
    dispatch({ type: ADD_TODO, payload: response.data });
    setTimeout(() => {
      document.querySelector(".tasks-list").scrollTop =
        document.querySelector(".tasks-list").scrollHeight;
    }, 100);
  } catch (error) {
    console.error(error);
  }
};

// 2.EDIT TASK

// 3.DELETE TASK
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

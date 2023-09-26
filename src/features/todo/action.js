import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";
let nextID = 0;
export const addTodo = (text) => async (dispatch) => {
  try {
    const newTodo = { text, id: nextID++, completed: false };
    const res = await apiService.post("/todos", newTodo);
    dispatch({ type: ADD_TODO, payload: { id: newTodo.id, text } });
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};
export const toggleTodo = (todoItem) => async (dispatch) => {
  try {
    const res = await apiService.put(`/todos/${todoItem.id}`, {
      ...todoItem,
      completed: !todoItem.completed,
    });
    dispatch({ type: TOGGLE_TODO, payload: { id: todoItem.id } });
  } catch (e) {
    console.log(e);
  }
};

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: { id },
// });
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

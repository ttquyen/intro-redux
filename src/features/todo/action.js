import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./reducer";
let nextID = 0;
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text, id: nextID++ },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

//TODO logic for reducer
export const ADD_TODO = "TODO.ADD";
export const TOGGLE_TODO = "TODO.TOGGLE_TODO";
export const SET_FILTER = "TODO.SET_FILTER";
export const GET_TODOS = "TODO.GET_TODOS";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
};
const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload?.id, text: payload?.text, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id !== payload.id) return t;
          return { ...t, completed: !t.completed };
        }),
      };
    case SET_FILTER:
      return { ...state, filter: payload.filter };
    case GET_TODOS:
      return { ...state, todos: payload };

    default:
      return state;
  }
};
export default todoReducer;

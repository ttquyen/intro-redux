//TODO logic for reducer
const ADD_COUNTER = "MULTI.ADD_COUNTER";
const REMOVE_COUNTER = "MULTI.REMOVE_COUNTER";
const INCREMENT = "MULTI.INCREMENT";
const DECREMENT = "MULTI.DECREMENT";
const initialState = [];

const multiCounterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const index = payload?.index;
  switch (type) {
    case ADD_COUNTER:
      return [...state, { count: 0 }];

    case REMOVE_COUNTER:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case INCREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count + 1 },
        ...state.slice(index + 1),
      ];
    case DECREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count - 1 },
        ...state.slice(index + 1),
      ];

    default:
      return state;
  }
};
export default multiCounterReducer;

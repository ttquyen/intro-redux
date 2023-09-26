const ADD_COUNTER = "MULTI.ADD_COUNTER";
const REMOVE_COUNTER = "MULTI.REMOVE_COUNTER";
const INCREMENT = "MULTI.INCREMENT";
const DECREMENT = "MULTI.DECREMENT";

export const addCounter = () => ({
  type: ADD_COUNTER,
});
export const removeCounter = (index) => ({
  type: REMOVE_COUNTER,
  payload: {
    index,
  },
});
export const increase = (index) => {
  //add middleware before dispatch action to reducer
  //but it is not a pure function
  //=> use redux-thunk
  return (dispatch) => {
    setTimeout(() => dispatch({ type: INCREMENT, payload: { index } }), 1000);
  };
};
export const decrease = (index) => ({
  type: DECREMENT,
  payload: {
    index,
  },
});

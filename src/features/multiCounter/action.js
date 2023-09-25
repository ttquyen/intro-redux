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
export const increase = (index) => ({
  type: INCREMENT,
  payload: {
    index,
  },
});
export const decrease = (index) => ({
  type: DECREMENT,
  payload: {
    index,
  },
});

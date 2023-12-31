//STORE all configs of the app
//For each readucer, we need to createReducer
//Combine all reducers in this file

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/reducer";
import multiCounterReducer from "../features/multiCounter/reducer";
import todoReducer from "../features/todo/reducer";
import thunk from "redux-thunk";

const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todoList: todoReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

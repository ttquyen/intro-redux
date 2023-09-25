import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, addTodo, setFilter } from "./action";
import TodoAdd from "./TodoAdd";
const SHOW_ALL = "SHOW_ALL";
const COMPLETED_ONLY = "COMPLETED_ONLY";
const ACTIVE_ONLY = "ACTIVE_ONLY";
function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  console.log(todoList);
  const appliedFilterList = (list, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return list;
      case COMPLETED_ONLY:
        console.log(list.filter((i) => i.completed));
        return list.filter((i) => i.completed);
      case ACTIVE_ONLY:
        return list.filter((i) => !i.completed);

      default:
        return list;
    }
  };
  return (
    <div>
      <h1>TodoList</h1>
      <TodoAdd />
      <ul>
        {appliedFilterList(todoList.todos, todoList.filter)?.map(
          (todo, index) => (
            <li key={index} onClick={() => dispatch(toggleTodo(todo.id))}>
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </p>
            </li>
          )
        )}
      </ul>
      <div>
        <button
          style={{
            backgroundColor:
              todoList.filter === COMPLETED_ONLY ? "yellow" : "transparent",
          }}
          onClick={() => dispatch(setFilter(COMPLETED_ONLY))}
        >
          Completed Only
        </button>
        <button
          style={{
            backgroundColor:
              todoList.filter === ACTIVE_ONLY ? "yellow" : "transparent",
          }}
          onClick={() => dispatch(setFilter(ACTIVE_ONLY))}
        >
          Active Only
        </button>
        <button
          style={{
            backgroundColor:
              todoList.filter === SHOW_ALL ? "yellow" : "transparent",
          }}
          onClick={() => dispatch(setFilter(SHOW_ALL))}
        >
          Show All
        </button>
      </div>
    </div>
  );
}

export default TodoList;

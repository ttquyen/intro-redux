import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";

function TodoAdd() {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTodo(todoItem));
    setTodoItem("");
  };
  return (
    <div>
      <input
        id="add-todo"
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoAdd;

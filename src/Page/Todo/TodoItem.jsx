import React, { useState } from "react";
import "./Todo.css";

const TodoItem = ({ addTask }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (todo.trim() === "") return; // Prevent adding empty tasks
    addTask(todo);
    setTodo("");
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addTask(todo);
      setTodo("");
    }
  };

  return (
    <div className="todo-item">
      <input
        type="text"
        className="addinput"
        placeholder="Write a Task"
        value={todo}
        onChange={handleChange}
        onKeyDown={handleEnterPress}
      />
      <button className="addbtn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoItem;

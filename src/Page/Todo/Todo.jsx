import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { LiaTasksSolid } from "react-icons/lia";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    setTasks([...tasks, todo]);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deletelistitem = (key) => {
    let newlisttodo = [...tasks];
    newlisttodo.splice(key, 1);
    setTasks(newlisttodo);
  };
  return (
    <>
      <div className="todo-header">Todo List</div>
      <TodoItem addTask={addTask} />
      <div className="list-items">
        {tasks.map((task, i) => (
          <TodoList key={i} index={i} task={task} deleteitem={deletelistitem} />
        ))}
      </div>
    </>
  );
};

export default Todo;

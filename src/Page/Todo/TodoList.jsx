import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ task, deleteitem, index }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    console.log("Stored tasks:", storedTasks);
    try {
      const parsedTasks = JSON.parse(storedTasks) || [];
      setTasks(parsedTasks);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);
  // Run once on component mount

  const handleDelete = () => {
    deleteitem(index);
  };

  return (
    <div className="todo-list">
      <li style={{ listStyleType: "none" }}>{task}</li>
      <MdDelete onClick={handleDelete} />
    </div>
  );
};

export default TodoList;

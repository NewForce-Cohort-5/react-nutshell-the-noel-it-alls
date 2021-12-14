import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const TaskContext = createContext();

// This component establishes what data can be used.
export const TaskProvider = (props) => {
  const [tasks, setTask] = useState([]);

  const getTasks = () => {
    return fetch("http://localhost:8088/tasks?_expand=users")
    .then(res => res.json())
    .then(setTask);
  }

  const addTask = taskObj => {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObj)
    })
    .then(res => res.json());
  }

  

 
  return (
    <TaskContext.Provider value={{
      tasks, getTasks, addTask
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}
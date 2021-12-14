import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const TaskContext = createContext();

// This component establishes what data can be used.
export const TaskProvider = (props) => {
  const [tasks, setTask] = useState([]);

  const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
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

  const completeTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            complete: true,
        }),
    })
    //.then(response => response.json())
} 

  

 
  return (
    <TaskContext.Provider value={{
      tasks, getTasks, addTask, completeTask
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}
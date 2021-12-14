import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./TaskCard";
// import "./Task.css";
import { UserContext } from "../users/UserProvider";

export const TaskList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { tasks, getTasks } = useContext(TaskContext);
 

//   const { users, getUsers } = useContext(UserContext);
  const navigate = useNavigate();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("TaskList: useEffect - getTasks")
    // getUsers()
    getTasks();
  }, []);



  return (
    <>
      <h2>Tasks</h2>
        <button onClick={() => {navigate('/tasks/create')}}>
          Add Task
        </button>
      <div className="tasks">
        {console.log("TaskList: Render", tasks)}
        {
          tasks.map(task => {
            // const owner = customers.find(c => c.id === employeeObj.customerId);
            // const user = users.find(u => u.id === task.userId);

            return <TaskCard 
                      key={task.id}
                    //   user={user}
                      task={task} />
          })
        }
      </div>

    </>
  );
    }
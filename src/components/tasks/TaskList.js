import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

export const TaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])


  return (
    <>
      <div className="tasksContainer">
        <h2>Tasks</h2>
        <button onClick={() => navigate("/tasks/create")}>
            Add Task
        </button>
        <div className="tasks">
            {/* {console.log("TaskList: Render", tasks)} */}
            {
                tasks.filter(task => task.taskComplete === false).map(task => 
                  <TaskCard key={task.id} task={task} />)
            }
        </div>
      </div>
    </>
  )
}
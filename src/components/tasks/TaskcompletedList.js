import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

export const CompletedTaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])


  return (
    <>
      <div className="tasks">
        <h2>Completed Tasks</h2>
      
        <div className="tasks">
            {/* {console.log("TaskList: Render", tasks)} */}
            {
                tasks.filter(task => task.taskComplete === true).map(task => 
                  <TaskCard key={task.id} task={task} />)
            }
        </div>
      </div>
    </>
  )
}
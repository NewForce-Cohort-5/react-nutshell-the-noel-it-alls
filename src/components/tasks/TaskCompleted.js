import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

export const CompletedTaskList = ({task}) => {
  const { completeTask, getTasks } = useContext(TaskContext)

  const handleCheckedAsCompleted = (task) => {
    completeTask(task.id, false)
    .then(getTasks)
}

const formattedDate = new Date(task.taskDate);
const date = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(formattedDate)

return(
  <section key={task.id}>
      <p className="taskNameColumn">{task.taskName}</p>
      <p className="taskNameColumn">{task.taskDeatil}</p>  
      <p className="taskDateColumn">{date}</p>
      <p className="taskCompletedColumn checkedTaskBox-completed">
          <input type="checkbox" checked={task.taskComplete} name="checkedTask" id="checkedTask" className="checkedTaskBox-completed" onChange={() => handleCheckedAsCompleted(task)} value={task.taskComplete}></input>
      </p>
  </section>
)
}
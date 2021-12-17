import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"
export const CompletedTaskCard = ({task}) => {
  const { completeTask, getTasks } = useContext(TaskContext)

// const navigate = useNavigate();

  //Use for checkbox:
  const handleCheckedAsCompleted = (task) => {
      completeTask(task.id, false)
      .then(getTasks)
  }

  // Use for delete:
  // const handleDelete = () => {
  //     deleteTask(task.id)
  //     // .then(() => {
  //     //     navigate("/tasks")
  //     // })
  //     .then(getTasks)
  // }

  //Use to format date into MM/DD/YYYY
  const formattedDate = new Date(task.taskDate);
  const date = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(formattedDate)

return (

    <section className="task">
        <h3 className="taskName">{task.taskName}</h3>
        <p className="taskDetail">Detail: {task.taskDetail}</p>
        <p className="taskDate">Complete by: {date}</p>
        <p><label htmlFor="completed">Incomplete?</label></p>
        <input className="taskComplete" type ="checkbox" checked={task.taskComplete} value={task.taskComplete} onChange={() =>handleCheckedAsCompleted(task)}/>
        
        {/* <br/><button className="btn btn-secondary edit-button" onClick={() => {
        navigate(`/tasks/edit/${task.id}`)
    }}>Edit</button> */}
        </section>
    
      
       )}
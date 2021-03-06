import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"




export const TaskCard = ({task}) => {

    const { getTasks, completeTask } = useContext(TaskContext)

  const navigate = useNavigate();
  

    const handleCheckbox = (event) => {
        event.preventDefault();
        completeTask(task.id, true).then(getTasks)

        // const taskComplete = Boolean(task.taskComplete)
        // task.taskComplete = taskComplete

      }  
      
      const formattedDate = new Date(task.taskDate);
      const date = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC',  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(formattedDate)
      if (task.userId === +localStorage.activeUser) {
   return (

<section className="task">
    <h3 className="taskName">{task.taskName}</h3>
    <p className="taskDetail">Detail: {task.taskDetail}</p>
    <p className="taskDate">Complete by: {date}</p>
    <p><label htmlFor="completed">Completed?</label></p>
    <input className="taskComplete" type ="checkbox"  onChange={handleCheckbox}/>
    
    <br/><button className="btn btn-secondary edit-button" onClick={() => {
    navigate(`/tasks/edit/${task.id}`)
}}>Edit</button>
    </section>

  
   )

   }
  else { 

    return (
     "" 
    )
  }}


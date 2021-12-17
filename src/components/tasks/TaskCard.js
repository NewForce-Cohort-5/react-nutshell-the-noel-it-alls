import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"




export const TaskCard = ({task}) => {

    const { getTasks, completeTask, updateTask } = useContext(TaskContext)

  const navigate = useNavigate();
  

    const handleCheckbox = (event) => {
        event.preventDefault();
        completeTask(task.id).then(getTasks)

        // const taskComplete = Boolean(task.taskComplete)
        // task.taskComplete = taskComplete

      }    
      if (task.userId === +localStorage.activeUser) {
   return (

<section className="task">
    <h3 className="taskName">{task.taskName}</h3>
    <p className="taskDetail">Detail: {task.taskDetail}</p>
    <p className="taskDate">Complete by: {task.taskDate}</p>
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


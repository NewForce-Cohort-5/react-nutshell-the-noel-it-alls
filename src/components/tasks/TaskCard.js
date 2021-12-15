import React, { useContext } from "react";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"




export const TaskCard = ({task}) => {

    const { getTasks, completeTask } = useContext(TaskContext)





    const handleCheckbox = (event) => {
        event.preventDefault();
        completeTask(task.id).then(getTasks)

        // const taskComplete = Boolean(task.taskComplete)
        // task.taskComplete = taskComplete

      }    

   return (

<section className="task">
    <h3 className="taskName">{task.taskName}</h3>
    <div className="taskDetail">{task.taskDetail}</div>
    <div className="taskDate">{task.taskDate}</div>
    <div><label htmlFor="completed">Completed?</label></div>
    <input className="taskComplete" type ="checkbox"  onChange={handleCheckbox}/>
    </section>
   )

   }


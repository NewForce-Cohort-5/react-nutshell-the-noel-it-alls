import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskProvider";




export const TaskCard = ({task}) => {

    const [checked, setChecked] = useState(false);
    const { tasks, completeTask } = useContext(TaskContext);
    const navigate = useNavigate();



    const handleCheckbox = (event) => {
        event.preventDefault();

        const taskComplete = Boolean(task.taskComplete)
        task.taskComplete = taskComplete

        const newTask = {... task};

        newTask[event.target.id] = event.target.checked;
        
        completeTask(task.id)
          .then(() => {
            navigate("/tasks")
          })
      }
      function toggle(value){
          console.log("you checked the box")
        return !value;
      } 

   return (

<section className="task">
    <h3 className="taskName">{task.taskName}</h3>
    <div className="taskDetail">{task.taskDetail}</div>
    <div className="taskDate">{task.taskDate}</div>
    <div><label htmlFor="completed">Completed?</label></div>
    <input className="taskComplete" type ="checkbox" checked={checked} onChange={ () => setChecked(toggle)}/>
    </section>
   )

}


// const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newTask = { ...task };
//     /* Animal is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newTask[event.target.id] = event.target.value;
//     // update state
//     setTask(newTask);
//   }
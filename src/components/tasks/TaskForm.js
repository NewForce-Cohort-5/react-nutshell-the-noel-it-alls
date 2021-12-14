import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../users/UserProvider";
// import "./Task.css";
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from "./TaskProvider";


export const TaskForm = () => {
  const { addTask, getTaskById, updateTask } = useContext(TaskContext);
//   const { users, getUsers } = useContext(UserContext);
  const { taskId } = useParams()
  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [task, setTask] = useState({

    taskName: "",
    taskDetail: "",
    taskDate:"",
   
});

  const navigate = useNavigate();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    // getUsers().then(() => {
      if (taskId) {
        getTaskById(taskId).then(setTask)
      }
    ;
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newTask = { ...task };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newTask[event.target.id] = event.target.value;
    // update state
    setTask(newTask);
  }

//   const handleControlledInputChangeBool = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newEmployee = { ...employee };
//     /* Animal is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newEmployee[event.target.id] = event.target.checked;
//     // update state
//     setEmployee(newEmployee);
//   }

  const handleClickSaveTask = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    // const locationId = parseInt(employee.locationId);
    // const hourlyRate = parseInt(employee.hourlyRate);
    // const manager = Boolean(employee.manager)
    // const fullTime = Boolean(employee.fullTime)

    // employee.locationId = locationId
    // employee.hourlyRate = hourlyRate
    // employee.manager = manager
    // employee.fullTime = fullTime
    

  if (taskId) {
      updateTask(task)
      .then(() => navigate(`/tasks/detail/${taskId}`))
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      addTask(task)
      .then(() => navigate("/tasks"));
    }
  }

  return (
    <form className="taskForm">
    <h2 className="taskForm__title">New Task</h2>
    <fieldset>
      <div className="form-group">
        <label htmlFor="taskName">Task name: </label>
        <input type="text" id="taskName" name="name" required autoFocus className="form-control"
        placeholder="Task.."
        onChange={handleControlledInputChange}
        value={task.taskName}/>
      </div>
    </fieldset>
    <fieldset>
    <div className="form-group">
      <label htmlFor="taskDetail">Details:</label>
      <input type="text" id="taskDetail" name="detail" required className="form-control" placeholder="Add Detail.." onChange={handleControlledInputChange} value={task.taskDetail}/>
    </div>
    </fieldset>
    <fieldset>
    <div className="form-group">
      <label htmlFor="taskDate">Task Date:</label>
      <input type="date" id="taskDate" name="date" required className="form-control"  onChange={handleControlledInputChange} value={task.taskDate}/>
    </div>
    </fieldset>
    <button className="btn btn-primary"
        onClick={handleClickSaveTask}>
        Save Employee
      </button>
  </form>
)
}
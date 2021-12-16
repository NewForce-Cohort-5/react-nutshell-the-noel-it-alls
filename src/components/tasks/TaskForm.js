import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../users/UserProvider";
import "./Tasks.css";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "./TaskProvider";


export const TaskForm = () => {
  const { addTask, getTaskById, updateTask } = useContext(TaskContext)

  //for edit, hold on to state of task in this view
  const [task, setTask] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const {taskId} = useParams();
  const navigate = useNavigate();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newTask = { ...task }
    //task is an object with properties.
    //set the property to the new value
    newTask[event.target.id] = event.target.value
    //update state
    setTask(newTask)
  }

  const handleSaveTask = () => {
    if (parseInt(task.id) === 0) {
        window.alert("placeholder")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (taskId){
        //PUT - update
        updateTask({
            id: task.id,
            userId: +localStorage.activeUser,
            taskName: task.taskName,
            taskDetail: task.taskDetail,
            taskDate: task.taskDate,
            taskComplete: false
        })
        .then(() => navigate("/tasks"))
      }else {
        //POST - add
        addTask({
            taskName: task.taskName,
            userId: +localStorage.activeUser,
            taskDetail: task.taskDetail,
            taskDate: task.taskDate,
            taskComplete: false
        })
        .then(() => navigate("/tasks"))
      }
    }
  }

  // Get tasks. If taskId is in the URL, getTaskById
  useEffect(() => {
      if (taskId){
        getTaskById(taskId)
        .then(task => {
            setTask(task)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
  }, [])

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="taskName">Task name: </label>
          <input type="text" id="taskName" name="name" required autoFocus className="form-control"
          placeholder="Task.."
          onChange={handleControlledInputChange}
          defaultValue={task.taskName}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="taskName">Task detail: </label>
          <input type="text" id="taskDetail" name="detail" required  className="form-control"
          placeholder="details.."
          onChange={handleControlledInputChange}
          defaultValue={task.taskDetail}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="taskDate">Completion Date: </label>
          <input type="date" id="taskDate" name="date" required className="form-control"
          onChange={handleControlledInputChange}
          defaultValue={task.taskDate}/>
        </div>
      </fieldset>
      <button className="btn btn-primary btn-dark"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveTask()
        }}>
        {taskId ? <>Save Task</> : <>Add Task</>}
      </button>
    </form>
  )
}
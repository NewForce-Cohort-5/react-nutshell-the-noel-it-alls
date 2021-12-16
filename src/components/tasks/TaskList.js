import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

let filterTasks = {
  Incomplete: task => !task.taskCompleted,
  Completed: task => task.taskCompleted
};
const filterTaskNames = Object.keys(filterTasks);



export const TaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext)
  const [filter, setFilter] = useState('Incomplete');

  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])

  // const taskByUser = taskByUser.filter(e => e.userId === +localStorage.activeUser)
  // const sortedTask = tasks.sort((a,b) => b.taskDate - a.taskDate)

  return (
    <>
      <div className="tasksContainer">
        <h2>Tasks</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/tasks/create")}>
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
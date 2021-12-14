import React from "react";


export const TaskCard = ({task}) => (

<section className="task">
    <h3 className="taskName">{task.taskName}</h3>
    <div className="taskDetail">{task.taskDetail}</div>
    <div className="taskDate">${task.taskDate}</div>
</section>

)
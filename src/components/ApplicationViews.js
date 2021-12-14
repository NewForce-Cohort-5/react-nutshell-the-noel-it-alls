import { Route, Routes } from "react-router-dom";
import React from "react";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import { TaskProvider } from "./tasks/TaskProvider";



export const ApplicationViews = () => {

    return (
      <TaskProvider>

      <Routes>

        <Route path="/" element={<p>this is where home goes</p>}/>
        <Route path="/register" element={<p>this is where register go</p>}/>
        <Route path="/friends" element={<p>this is where friends go</p>}/>
        <Route path="/messages" element={<p>this is where messages go</p>}/>
        <Route path="/tasks" element={<TaskList />}/>
        <Route path="/tasks/create" element={<TaskForm />} />                        
        <Route path="/events" element={<p>this is where tasks go</p>}/>

      </Routes>
      </TaskProvider>

    )  
}

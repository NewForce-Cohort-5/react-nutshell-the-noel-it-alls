import { Route, Routes } from "react-router-dom";
import React from "react";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import { TaskProvider } from "./tasks/TaskProvider";


export const ApplicationViews = () => {
    return (
                      <TaskProvider>
                        <Routes>
                        <Route path="/tasks" element={<TaskList />}/>
                        <Route path="/tasks/create" element={<TaskForm />} />                        </Routes>
                        </TaskProvider>
    )}
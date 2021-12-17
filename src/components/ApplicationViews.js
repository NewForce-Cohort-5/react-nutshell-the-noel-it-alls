import { Route, Routes } from "react-router-dom";
import React from "react";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import { TaskProvider } from "./tasks/TaskProvider";


import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventProvider";
import { EventForm } from "./events/EventForm";
// import { CompletedTaskCard } from "./tasks/TaskCompletedCard";

import { MessageList } from "./Message/MessageList";
import { MessageForm } from "./Message/MessageForm";
import { MessageProvider } from "./Message/MessageProvider";
import { UserProvider } from "./users/UserProvider";

export const ApplicationViews = () => {

    return (
      <UserProvider>
      <TaskProvider>
    <EventProvider >
      <MessageProvider>
      <Routes>
        <Route path="/" element={<><TaskList /> < EventList /> <MessageList /> <MessageForm /></>}/>
        <Route path="/register" element={<p>this is where register go</p>}/>
        <Route path="/friends" element={<p>this is where friends go</p>}/>
        <Route path="/messages" element={<><MessageList /><MessageForm /></>}/>
        <Route path="/tasks" element={<TaskList />}/>
        <Route path="/tasks/create" element={<TaskForm />} /> 
        <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />                       
        <Route path="/events" element={< EventList />}/>
        <Route path="/events/create/*" element={< EventForm />}/>
        <Route path="/events/edit/:eventId/*" element={< EventForm />}/>
       </Routes>
       </MessageProvider>
    </EventProvider>
    </TaskProvider>
    </UserProvider>
    )  
}

import { Route, Routes } from "react-router-dom";
import React from "react";
import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventProvider";
import { EventForm } from "./events/EventForm";

export const ApplicationViews = () => {

    return (
    <EventProvider >
      <Routes>
        <Route path="/" element={<p>this is where home goes</p>}/>
        <Route path="/register" element={<p>this is where register go</p>}/>
        <Route path="/friends" element={<p>this is where friends go</p>}/>
        <Route path="/messages" element={<p>this is where messages go</p>}/>
        <Route path="/tasks" element={<p>this is where tasks go</p>}/>
        <Route path="/events" element={< EventList />}/>
        <Route path="/events/create/*" element={< EventForm />}/>
       </Routes>
    </EventProvider>
    )  
}

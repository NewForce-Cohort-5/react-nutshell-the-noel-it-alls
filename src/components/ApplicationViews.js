import { Route, Routes } from "react-router-dom";
import React from "react";


export const ApplicationViews = () => {

    return (
      <Routes>

        <Route path="/" element={<p>this is where home goes</p>}/>
        <Route path="/register" element={<p>this is where register go</p>}/>
        <Route path="/friends" element={<p>this is where friends go</p>}/>
        <Route path="/messages" element={<p>this is where messages go</p>}/>
        <Route path="/tasks" element={<p>this is where tasks go</p>}/>
        <Route path="/events" element={<p>this is where tasks go</p>}/>
        <Route path="/logout" element={<p>this is where logout</p>}/>
      </Routes>
    )  
}

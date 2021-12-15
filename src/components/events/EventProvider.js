//purpose: to access and to update information from API
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used.
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setEvents)
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}

//the purpose: to list all events in the db using card as a template
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { events, getEvents } = useContext(EventContext)
  const { sortedEventsByMonth, setsortedEventsByMonth} = useState ({})

  const navigate = useNavigate()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EventList: useEffect - getEvents")
    getEvents()
  }, [])


  const eventsByUser = events.filter(event => event.userId === +localStorage.activeUser).sort((a,b) => {return new Date(b.eventDate) - new Date(a.eventDate)}) 
  
  console.log("eventsByUser", eventsByUser)

  const months = [{id:1, name:"January"},{id:2, name:"February"},{id:3, name:"March"}]
 


  return (
    <>
    <div className="events">
        <h2>Events</h2>
        <button id="save-button" className="btn-secondary"onClick={() => {navigate("/events/create")}}>
            Add Event
        </button>
        <div className="eventbyMonth" >   
        <p>Event sorted by month</p>

            <select onChange={(taco) =>taco.target.value = events.eventDate.string(5,6)}>

            <option value="0">select</option>
             {months.map(m =>(
            <option key={m.id} value={m.id}> {m.name}</option>))}
            </select>
            
      </div> 
      <div className="eventList">
        {console.log("EventList: Render", events)}

      {eventsByUser.length !== 0 ?eventsByUser.map(event => {
          return <EventCard key={event.id} event={event} />
        }):<p>No events listed yet</p>
      }

      </div>
    </div>
    </>
  )
}
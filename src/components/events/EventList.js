//the purpose: to list all events in the db using card as a template
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"
// import {Substring} from 'react-substring';

export const EventList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { events, getEvents } = useContext(EventContext)
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
        <div  >   
        <div><p>Sorted by Months</p>
             {months.map(m =>(
               
             events.map(singleEvent => {
               
               console.log(new Date(singleEvent.eventDate).getMonth())
              if( (m.id-1) === new Date(singleEvent.eventDate).getMonth()) {  
                return ( <>
                  <h3 key={m.id} value={m.id}>{m.name}</h3>
                 <EventCard event={singleEvent} />
                 </>
                )
              }
              }
              )
            
            ))}
         </div>
         {/* {console.log{"events }y dec", events.filter(event => event.eventDate.data.Substring(5,7) === 12))} */}
      </div> 
      <div className="eventList">
        {console.log("EventList: Render", events)}
{/* 
      {eventsByUser.length !== 0 ?eventsByUser.map(event => {
          return <EventCard 
                  key={event.id} 
                  event={event} 
                  />
        }):<p>No events listed yet</p>
      } */}

      </div>
    </div>
    </>
  )
}
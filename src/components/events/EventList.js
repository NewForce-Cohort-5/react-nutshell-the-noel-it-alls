//the purpose: to list all events in the db using card as a template
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { events, getEvents } = useContext(EventContext)
  const navigate = useNavigate()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EventList: useEffect - getEvents")
    getEvents()
  }, [])


  const eventsByUser = events.filter(event => event.userId === +localStorage.activeUser)
  
  const eventsByUserSortedByDate = eventsByUser.sort((a,b) => {return new Date(b.eventDate) - new Date(a.eventDate)}) //this is not working
  
  console.log("eventsByUser", eventsByUser)
  console.log("eventsByUserSortedByDate", eventsByUserSortedByDate)
  return (
    <>
    <div className="events">
        <h2>Events</h2>
        <button id="save-button" className="btn-secondary"onClick={() => {navigate("/events/create")}}>
            Add Event
        </button>
      {console.log("EventList: Render", events)}
      <div className="eventList">

      {eventsByUser.length !== 0 ? eventsByUserSortedByDate.map(event => {
          return <EventCard key={event.id} event={event} />
        }):<p>No events listed yet</p>
      }

      </div>
    </div>
    </>
  )
}
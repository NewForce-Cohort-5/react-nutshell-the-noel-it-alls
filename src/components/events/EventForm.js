// purpose: to have data input field for adding and editing events
import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useNavigate, useParams } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent } = useContext(EventContext)
    
    const [event, setEvent] = useState({
        userId: +localStorage.activeUser,
        eventName: "",
        eventLocation: "",
        eventDate: ""
      });
  
      const navigate = useNavigate();
  
      /*
      Reach out to the world and get customers state
      and locations state on initialization.
      */
      useEffect(() => {
        
      }, [])

      const handleControlledInputChange = (props) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEvent = { ...event }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEvent[props.target.id] = props.target.value
                // update state
        setEvent(newEvent)
      }
  
      const handleClickSaveEvent = (props) => {
        props.preventDefault() //Prevents the browser from submitting the form
        
            addEvent(event)
            
          .then(() => navigate("/events"))
        }
      
  
      return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="eventName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.eventName}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label for="location">Event location: </label>
                    <input type="text" id="eventLocation" onChange={handleControlledInputChange}   className="form-control" placeholder="Event location" value={event.eventLocation}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label For="eventDate">Event Date: </label>
                    <input type="date" id="eventDate" className="eventDate" onChange={handleControlledInputChange} value={event.eventDate}/>
                </div>
            </fieldset>
            <button id="saveEvent-button"className="btn btn-secondary"
              onClick={handleClickSaveEvent}>
              Save Event
            </button>
        </form>
      )
  }
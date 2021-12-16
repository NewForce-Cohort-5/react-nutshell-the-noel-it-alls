// purpose: to have data input field for adding and editing events
import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useNavigate, useParams } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent,getEventById,updateEvent } = useContext(EventContext)
    
    const [event, setEvent] = useState({
                userId:+localStorage.activeUser,
                id:"",
                eventName:"",
                eventLocation:"",
                eventDate:""
    });
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
  
    const {eventId} = useParams();
    
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
  
      const handleClickSaveEvent = () =>{
          if (event.eventName==="" ||event.eventLocation==="" ||event.eventDate==="" ){window.alert("Please select an event name, location, or/and date")
            }else{
                    setIsLoading(true);
                    if(eventId){
                         updateEvent({
                            userId:+localStorage.activeUser,
                            id:parseInt(event.id),
                            eventName:event.eventName,
                            eventLocation:event.eventLocation,
                            eventDate:event.eventDate
                            })
                         .then(()=> navigate("/events/"))
                    }else{
                        addEvent({
                            userId:+localStorage.activeUser,
                            eventName:event.eventName,
                            eventLocation:event.eventLocation,
                            eventDate:event.eventDate
                        })
                        .then(()=> navigate("/events/"))
                    }
      }
    }
        useEffect (() => {
            if(eventId){
                getEventById(eventId)
                .then(eventObj => { setEvent(eventObj)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        }, [])
 return (
        <form className="eventForm">
             {eventId ? <h2 className="eventForm__title">Edit Event</h2>: <h2 className="eventForm__title">New Event</h2>} 
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="eventName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" defaultValue={event.eventName}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event location: </label>
                    <input type="text" id="eventLocation" onChange={handleControlledInputChange}   className="form-control" placeholder="Event location" defaultValue={event.eventLocation}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date: </label>
                    <input type="date" id="eventDate" className="eventDate" onChange={handleControlledInputChange} defaultValue={event.eventDate}/>
                </div>
            </fieldset>
            <button id="saveEvent-button"className="btn btn-secondary" disabled={isLoading}
              onClick={e => {
                  e.preventDefault()
                  handleClickSaveEvent()}
                  }>
              {eventId ? <>Save Event</> : <>Add New Event</>}
            </button>
        </form>
      )
  }
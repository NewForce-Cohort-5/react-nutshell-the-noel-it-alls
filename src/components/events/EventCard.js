import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

export const EventCard = ({ event }) =>  {
    const navigate = useNavigate()

return (
    <section className="eventCard">
        <h3 className="event__name">Event name: {event.eventName}</h3>
        <p className="event__date">Date: {new Date (event.eventDate).toLocaleDateString('en-US')}</p>
        <address className="event__address">Location: {event.eventLocation}</address>
        <button className="btn-secondary" onClick={() => {
            navigate(`/events/edit/${event.id}`)
                }}>Edit</button>
    </section>
    )
}
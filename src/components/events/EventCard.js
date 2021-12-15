import React from "react"
import "./Event.css"

export const EventCard = ({ event }) =>  (
        <section className="event">
        <h3 className="event__name">Event name: {event.eventName}</h3>
        <p className="event__date">Date: {new Date (event.eventDate).toLocaleDateString('en-US')}</p>
        <address className="event__address">Location: {event.eventLocation}</address>
    </section>
    )

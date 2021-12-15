import React from "react";
import { Link } from "react-router-dom";

export const MessageCard = ({messages}) => (
    <section className="message">
    <h3 className="message_name">
      <Link to={`/messages/${messages.userId}`}>
        { messages.message }
      </Link>
    </h3>
</section>
)
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const MessageCard = ({messages}) => {
    const navigate = useNavigate();
   return(
    <section className="message">
    <h3 className="message_name">
      {/* <Link to={`/messages/${messages.userId}`}> */}
      {messages.user.username}: { }
        { messages.message }
        <button onClick={() => {
    navigate(`/messages/edit/${messages.id}`)}}>Edit</button>
      {/* </Link> */}
    </h3>
</section>
   )}
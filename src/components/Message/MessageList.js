import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";

export const MessageList = ({props}) => {
    const { messages, getMessages } = useContext(MessageContext)

    // const navigate = useNavigate()
    useEffect(() => {
        getMessages()
    }, [])

return (
<div className="messages">
    {
        messages.map(mssg => {
            return <MessageCard key={mssg.userId} messages={mssg} />
        })
    }
</div>

)
}
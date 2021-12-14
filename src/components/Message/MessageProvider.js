import React, { useState, createContext } from "react"

export const MessageContext = createContext()

 const [messages, setMessages] = useState([])

 const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(res => res.json())
    .then(setMessages)
}

const addMessage = messageObj => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    })
    .then(response => response.json())
}


return (
    <MessageContext.Provider value={{
        messages, getMessages, addMessage
    }}>
        {props.children}
    </MessageContext.Provider>
)
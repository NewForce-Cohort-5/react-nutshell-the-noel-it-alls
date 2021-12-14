import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Logout.css"

export const Logout = () =>{
    const navigate = useNavigate()
    const email = useRef()
    const existDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogout = (e) => {
          
          localStorage.removeItem("activeUser")

            window.location.reload(false);
            navigate("/login")
         
    }
      
   

    return (
        <>
        <button id="logout-button" className="btn btn-secondary" onClick={handleLogout}>Log Out</button>
        </>
    )
}
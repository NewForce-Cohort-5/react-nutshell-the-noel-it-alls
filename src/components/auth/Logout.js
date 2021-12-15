import React, { useRef } from "react"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Logout.css"

export const Logout = () =>{
    const navigate = useNavigate()

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
import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Logout.css"

export const Logout = () =>{

    const handleLogout = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.removeItem("activeUser")
                    props.setLoggedin(true)
                    navigate("/")
    }

    return (
        <>
        <button id="logout-button" className="btn btn-secondary" onClick={handleLogout}>Log Out</button>
        </>
    )
}
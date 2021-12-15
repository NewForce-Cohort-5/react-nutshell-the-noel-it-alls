import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Logout.css"

export const Logout = (props) =>{
    const navigate = useNavigate()
    const email = useRef()
    const existDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem("activeUser")
                
        navigate("/login") 
        window.location.reload(false);
        }

    return (
        <>
        <button id="logout-button" className="btn btn-secondary" onClick={handleLogout}>Log Out</button>
        </>
    )
}
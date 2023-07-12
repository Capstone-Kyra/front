import { Link } from "react-router-dom"
import React from "react"



export default function Profile(){
    return(
        <div>
        <h1>Your profile!</h1>
        <Link to= '/NewTrip'>Create new trip</Link>
        </div>
    )
} 